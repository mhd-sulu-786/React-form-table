import React from 'react'

function Map({name,img}) {
  return (
    <div style={{border:"1px solid black",width:"200px",height:"200px"}}>
        <h3>{name}</h3>
        <img style={{width:"100%",height:"100%"}} src={img} alt="" />
    </div>
  )
}

export default Map