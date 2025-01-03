import React from 'react'

function searchresult({finalresult,searchurl}) {
  return (
    <>
    <div className="div " style={{marginTop:'10px'}}>
    <div className='bg-light' >
    <a class="icon-link" href={searchurl}>
     link
    <svg class="bi" aria-hidden="true"></svg>
    </a>
    <a href={searchurl} style={{color:'black'}}>{finalresult}</a>
    </div>
    </div>
    
    </>
  )
}

export default searchresult