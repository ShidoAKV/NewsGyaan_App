
import SearchResult from './SearchResult'

function Findresult({resultvalue}) {
  return (
    
    <div style={{marginTop:'55px'}}>
    <div className="result bg-light d-flex flex-column rounded-sm" 
    style={{paddingLeft:'8px',maxWidth:'300px', maxHeight:'100px',marginTop:'1rem',fontSize:'0.9rem' ,overflowY:'scroll',fontSize:'0.9rem',backgroundColor:'aliceblue'}} > { 
        resultvalue?.map((result,id)=>{ 
        return <SearchResult finalresult={result.title} key={id}/>
        }) 
      }
    </div>
    </div>
    
  )
}

export default Findresult