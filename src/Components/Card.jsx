 import React from "react"
 export default function Card() {
   return (
     <div className="card">
      <img src="../images/fuji.jpg" className="card--image" />
       <div className="all--details">
        <div className="card--location">
       <img src="../images/location.jpg" className="card--icon" />
      <span className="country">Japan</span>
       <span>
         <a href="#" className="view">View on Google Maps</a>
       </span> 
        </div>
      <h2>Mount Fuji</h2>
       
       <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
         
       <h6>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists</h6>
         </div>
            
    </div>
   )
 }