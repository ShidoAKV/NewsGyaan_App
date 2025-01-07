import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinnermode from './Spinnermode';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [buffering, setBuffering] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Update document title with the selected category
    document.title = `${capitalizeFirstLetter(props.category)} - News Gyaan`;

    // Fetch news based on category and other props
    const updateNews = async () => {
        props.setprogress(10); // Set initial progress
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${props.pageSize}`;
        setBuffering(true);

        let response = await fetch(url);
        props.setprogress(50); // Update progress after fetch
        let data = await response.json();
        props.setprogress(70); // Progress update after parsing

        setArticles(data);
        setTotalResults(100); // JSONPlaceholder mock total
        setBuffering(false);
        props.setprogress(100); // Complete progress
    };

    useEffect(() => {
        updateNews();
    }, [props.category]); // Re-run if category changes

    const fetchMoreData = async () => {
        if (articles.length >= totalResults) return;

        setPage(page + 1);
        const url = `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=${props.pageSize}`;
        let response = await fetch(url);
        let data = await response.json();

        setArticles([...articles, ...data]);
    };

    return (
        <>
            <h1 className="text-center" style={{ fontSize: "2.3rem", margin: "30px", paddingTop: "20px" }}>
                News Gyaan - {capitalizeFirstLetter(props.category)} Top Headlines
            </h1>
            {buffering && <Spinnermode />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinnermode />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((article) => (
                            <div className="col-md-4" key={article.id}>
                                <Newsitem
                                    tittle={article.title.slice(0, 35)}
                                    description={article.body.slice(0, 50)}
                                    imageurl={null}
                                    newsurl={`https://jsonplaceholder.typicode.com/posts/${article.id}`}
                                    author="JSONPlaceholder"
                                    date={new Date().toISOString()}
                                    sourceval="JSONPlaceholder API"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.defaultProps = {
    pageSize: 5,
    category: 'general',
    setprogress: () => {} // No-op default for progress function
};

export default News;
