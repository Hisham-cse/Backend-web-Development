import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div>
      <div className="card" style={{overflow:"hidden"}}>
        <img src="https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.webp" alt="" width={310} 
        style={{border:"solid"}}/>
      <h1>
           {props.title}
        </h1>
        <p>
            {props.description}
        </p>
      </div>
    </div>
  )
}

export default Card
