import React from "react";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body text-center">
          <a href={link} className="btn btn-primary w-100">
            Go
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
