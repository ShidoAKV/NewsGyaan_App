import  {useState } from 'react';
import {Link} from "react-router-dom";
import Findresult from './Findresult';



const Navbar=()=>{
 const [result, setresult] = useState([]);

 const [input, setinput] = useState("");

const fetchdata = async (val) => {
  
    let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9a3b73c6dec8472e81ede8888715ac03");
    let data = await response.json();
    const result_val = data.articles.filter((articles) => {
      return val&&articles &&articles.title.toLowerCase().includes(val);
    });
    setresult(result_val);
  
};


  const handlechange=(value)=>{
    setinput(value);
    fetchdata(value);
  }


    return (
      <>
 <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
  <Link className="navbar-brand" to="/newsgyaan">NewsGyaan</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link "  to="/home">Home</Link></li>
        <li className="nav-item"><Link className="nav-link "  to="/business"> Business</Link></li>
        <li className="nav-item"><Link className="nav-link "  to="/entertainment"> Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link "  to="/general"> General</Link></li>
        <li className="nav-item"><Link className="nav-link "  to="/health"> Health</Link></li>
        <li className="nav-item"><Link className="nav-link "  to="/science"> Science</Link></li>
        <li className="nav-item"><Link className="nav-link "  to="/sports"> Sports</Link></li>
        <li className="nav-item"><Link className="nav-link "  to="/technology"> Technology</Link></li>
      </ul>

    </div>
    <form class="form-inline my-2 my-lg-0 fixed-top-right" style={{maxWidth:'200px'}}>
      <input class="form-control mr-sm-2  " type="search" placeholder="Search" aria-label="Search" 
      value={input} onChange={(e)=>handlechange(e.target.value)} />
    </form>
  </div>
</nav>
   <div className="list " style={{display:'flex',justifyContent:'end', maxHeight:'10px' }}>
    <Findresult resultvalue={result}/>
   </div>
  
    </>
    )
  
};

export default Navbar