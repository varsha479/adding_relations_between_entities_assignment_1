import React from "react";

function DestinatinCard({ destination }) {
  return (
    <div>
      <img src={destination.image} alt="" style={{ width: "10rem" }} />
      <p>Name : {destination.name}</p>
      <p>Locatoin : {destination.location}</p>
      <p>Description : {destination.description}</p>
      <p>Price : {destination.price}</p>
    </div>
  );
}

export default DestinatinCard;
