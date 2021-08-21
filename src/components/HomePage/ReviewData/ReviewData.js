import React from "react";

const ReviewData = (props) => {
  const { name,service, description,ceo} = props.review;
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5>{service}</h5>
        <p className="card-text text-center">{description}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <div>
          <h6 className="text-primary">{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default ReviewData;
