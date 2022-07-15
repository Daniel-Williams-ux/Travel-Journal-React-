 import React from "react"
 export default function Card(props) {
   return (
     <div className="card">
      <img src={`../images/${props.item.imageUrl}`} className="card--image" />
       <div className="all--details">
        <div className="card--location">
       <img src="../images/location.jpg" className="card--icon" />
      <span className="country">{props.item.location}</span>
       <span>
         <a href="#" className="view">{props.item.googleMapsUrl}</a>
       </span> 
        </div>
      <h2>{props.item.title}</h2>
       
       <h5>{props.item.startDate} - {props.endDate}</h5>
         
       <h6>{props.item.description}</h6>
         </div>
            
    </div>
   )
 }