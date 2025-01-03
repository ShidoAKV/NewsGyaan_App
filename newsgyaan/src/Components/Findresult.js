
import SearchResult from './SearchResult';

function Findresult({resultvalue}) {
  // console.log(resultvalue);
  
  return (
    
  <div style={{marginTop:'10px'}}>
    <div className="result bg-light d-flex flex-column rounded-sm" 
       style={{paddingLeft:'8px',maxWidth:'300px', maxHeight:'100px',marginTop:'1rem',fontSize:'0.9rem' ,overflowY:'scroll',backgroundColor:'black'}} > { 
        resultvalue?.map((result,id)=>{ 
        return <SearchResult finalresult={result.title} searchurl={result.url} key={id}/>
        }) 
      }
    </div>
  
     </div>
  )
}

export default Findresult