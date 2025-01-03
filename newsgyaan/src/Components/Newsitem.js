
const Newsitem=({tittle,description,imageurl,newsurl,author,date,sourceval})=> {

    return (
      <div className='my-3 ' >
        
     <div className="card " style={{width:"19rem"}}>
          <img style={{height:"14rem"}} src={imageurl?imageurl:"https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"} className="card-img-top" alt="no imagefound"/>
          <div className="spanbox " style={{width:'100%',height:'20px'}}>
          <span class="badge"style={{ marginLeft:'0.5rem',width:'95%', height:'1.3rem',backgroundColor:'#343dba'}} >{sourceval}</span>
          </div>
          
          <div className="card-body" >
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