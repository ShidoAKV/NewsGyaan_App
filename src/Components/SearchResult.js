import React from 'react'

function searchresult({finalresult}) {
  return (
    <>
    <div className="div" style={{marginTop:'10px'}}>
    <div className='bg-light' >
    <a class="icon-link" href="#">
     link
    <svg class="bi" aria-hidden="true"></svg>
    </a>
    <a href="#" style={{color:'black'}}>{finalresult}</a>
    </div>
    </div>
    
    </>
  )
}

export default searchresult