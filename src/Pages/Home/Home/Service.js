import React from "react";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="card-deck col-12 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>Price: {price}</p>
        </div>
        <button className="btn btn-outline-success mb-3">Book {name}</button>
      </div>
    </div>
  );
};

export default Service;
