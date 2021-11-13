import React from "react";



function Restaurant({restaurant}){
      return(
        <div className="card restaurant-style" style={{width:"66%"}}>
          <img src={`data:image/jpeg;base64,${restaurant.picture}`} class="card-img-top" alt="dish-img" />
            <div className="card-body">
              <h5 className="card-title">{`${restaurant.restaurantName}`}</h5>
              <h5 className="card-text">{`${restaurant.location}`}</h5>
            </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{`${restaurant.description}`}</li>
            <li className="list-group-item muted">{`${restaurant.contact}`}</li>
            <li className="list-group-item">{`${restaurant.timings}`}</li>
          </ul>
          <div className="card-body">
          <a href="http://localhost:3000/" className="card-link" style={{color:"#79B4B7"}}>Order Now</a>
        </div>
        </div>
      )
  }


export default Restaurant;
