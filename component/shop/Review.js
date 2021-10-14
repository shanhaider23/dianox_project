import React from "react";
import Icon from "../../assets/review.png";
import "../../styles/shop.css";

function Review() {
  return (
    <div className="review-container">
      {" "}
      <div className="review-sub-contanier-1">
        <div className="review-section-text-1">
          <p className="review-heading-1">This product is expensive</p>
          <p className="review-text-1">
            {" "}
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci in
            ornare venenatis sed. Quis dui nibh in pellentesque et lorem ac.
            Elementum nec in egestas suspendisse donec fames tincidunt sit.”
          </p>
          <p className="review-name-1"> John smith</p>
        </div>
        <div className="review-section-icon-1">
          <img src={Icon} className="review-section-image-1" alt="Review"></img>
        </div>
      </div>
      <div className="review-sub-contanier-2">
        <div className="review-section-text-2">
          {" "}
          <p className="review-heading-2">This product is expensive</p>
          <p className="review-text-2">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci in
            ornare venenatis sed. Quis dui nibh in pellentesque et lorem ac.
            Elementum nec in egestas suspendisse donec fames tincidunt sit.”
          </p>
          <p className="review-name-2">Madona</p>
        </div>
        <div className="review-section-icon-2">
          {" "}
          <img src={Icon} className="review-section-image-2" alt="Review"></img>
        </div>
      </div>
      <div className="review-sub-contanier-3">
        <div className="review-section-text-3">
          {" "}
          <p className="review-heading-3">This product is expensive</p>
          <p className="review-text-3">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci in
            ornare venenatis sed. Quis dui nibh in pellentesque et lorem ac.
            Elementum nec in egestas suspendisse donec fames tincidunt sit.”
          </p>
          <p className="review-name-3">Donld Duck</p>
        </div>
        <div className="review-section-icon-3">
          <img src={Icon} className="review-section-image-3" alt="Review"></img>{" "}
        </div>
      </div>
    </div>
  );
}

export default Review;
