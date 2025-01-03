import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinnermode from './Spinnermode';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
  
    const [articles, setarticles] = useState([]);
    const [bufferring, setbufferring] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

 const capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


 document.title=`${capitalizeFirstLetter(props.category)}-News Monkey`;  


const updatenews=async()=>{
  props.setprogress(10);
  const url=`https://newsapi.org/v2/everything?q=${props.category}&apiKey=0b9dc789ee6d4e438dbbc74c81683736&page=${page}&pageSize=${props.pageSize}`
  //prev url const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a3b73c6dec8472e81ede8888715ac03&page=${page}&pageSize=${props.pageSize}`;
  setbufferring(true);
  let data=await fetch(url);
  props.setprogress(30);
  let parseddata=await data.json();
  props.setprogress(70);
  // console.log(parseddata);
  
  setarticles(parseddata.articles);
  settotalResults(parseddata.totalResults);
  setbufferring(false);

 props.setprogress(100);
}

useEffect(() => {
   updatenews();
}, [])



    // handleprevclick=async ()=>{
    //   //  console.log("previous");
    //   //  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a3b73c6dec8472e81ede8888715ac03&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    //   //  this.setState({buffering:true});
    //   //  let data=await fetch(url);
    //   //  let parseddata=await data.json();
    //   //  console.log(parseddata);
    //   //  this.setState({
    //   //   page:this.state.page-1,
    //   //   articles:parseddata.articles,
    //   //   buffering:false
    //   //  }
    //   //  )
    //   this.setState({page:this.state.page-1});
    //   this.updatenews();

    // }

    // handlenextclick=async()=>{
    //     //  console.log("next");
    //     //  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a3b73c6dec8472e81ede8888715ac03&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    //     // this.setState({buffering:true});
    //     //  let data=await fetch(url);
    //     //  let parseddata=await data.json();
    //     //  console.log(parseddata);
    //     //  this.setState({
    //     //   page:this.state.page+1,
    //     //   articles:parseddata.articles,
    //     //   buffering:false

    //     // })
    //     this.setState({page:this.state.page+1});
    //     this.updatenews();
        
    // }

const fetchMoreData = async () => {
  if(articles.length>=totalResults) return;
  
  setpage(page+1);
  const url=`https://newsapi.org/v2/everything?q=${props.category}&apiKey=0b9dc789ee6d4e438dbbc74c81683736&page=${page}&pageSize=${props.pageSize}`
  //const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a3b73c6dec8472e81ede8888715ac03&page=${page}&pageSize=${props.pageSize}`;
  let data=await fetch(url);
  let parseddata=await data.json();
  // console.log(parseddata);
  setarticles(articles.concat(parseddata.articles));
  settotalResults(parseddata.totalResults);
   };
 
    return (
      <>

       <h1 className='text-center fixed'style={{fontSize:"2.3rem",margin:"40px",paddingTop:"20px"}}>
        News Gyaan-{capitalizeFirstLetter(props.category)} Top Headlines</h1>
        {bufferring&&<Spinnermode/>}

      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinnermode/>}
        > 

        <div className="container">
            <div className="row"> 
                {articles?.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                      <Newsitem tittle={element.title.slice(0,35)} description={element.description?element.description.slice(0,50):""} imageurl={element.urlToImage} newsurl={element.url} 
                      author={element.author?element.author:'Unkown'} date={element.publishedAt?element.publishedAt:"06:6:2024"} sourceval={element.source.name?element.source.name:'unkown'}/>
                      </div>
              }
              ) }
          </div>
        </div>

      </InfiniteScroll>
      </>

    )
  
}

News.defaultProps={
  country:'in',
  pageSize:5,
  category:'sports'
 }

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
 }
export default News