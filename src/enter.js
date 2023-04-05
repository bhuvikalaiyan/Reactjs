import React from "react";

function Entry(props) {
  return (
    <div className="nb" style={{textAlign:"center"}}>
      <img  style={{height:"250px",width:"250px"}} src={props.imgUrl}></img>
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
       
    </div>
  );
}

export default Entry;