
const Newsitem=(props)=> {
    //destructuring
     let {tittle,description,imageurl,newsurl,author,date,sourceval}=props;
    return (
      <div className='my-3 '>
    <div className="card " style={{ width: "18rem"}}>
          <img src={imageurl?imageurl:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/05/0/0/Senate-Majority-Leader-Chuck-Schumer.jpg?ve=1&tl=1"} className="card-img-top" alt="no imagefound"/>
          <div className="spanbox " style={{width:'100%',height:'20px'}}>
          <span class="badge"style={{ marginLeft:'0.5rem',width:'95%', height:'1.3rem',backgroundColor:'#343dba'}} >{sourceval}</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text "><small>By {author} ON {date}</small></p>
            <a href={newsurl} className="btn btn-sm btn-dark">Read mode</a>
          </div>
    </div>

      </div>
    )
  
}

export default Newsitem