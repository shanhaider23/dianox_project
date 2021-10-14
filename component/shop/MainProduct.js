import React from "react";
import "../../styles/shop.css";
import Tell from "../../assets/tell.png";
import Image1 from "../../assets/slide1.png";
import Image2 from "../../assets/slide2.png";
import Image3 from "../../assets/slide3.png";
import Image4 from "../../assets/slide4.png";
import Left from "../../assets/left.png";
import Right from "../../assets/right.png";
import Cart from "../../assets/cart-black.png";
import Stock from "../../assets/outofstock.png";
import Bell from "../../assets/bell.png";

function MainProduct() {
  return (
    <div className="shop-container">
      <div className="main-product">
        <div className="main-product-right">
          <div className="main-product-header">
            <h1 className="main-product-heading">
              Tell<span className="full-stop">.</span>{" "}
            </h1>
            <div className="main-product-heading-medium">
              <p className="main-product-description">
                Our broad screening saliva test allows you to explore your
                health and gain <br />
                actionable insights to improve your life. We test for:
              </p>
              <li className="main-product-list">
                Hormone levels (Estrogen, Testosterone, and many more)
              </li>
              <li className="main-product-list">
                Vitamin deficiencies (B, D and others)
              </li>
            </div>
          </div>
          <div className="main-product-amount">
            <h1 className="main-product-amount-heading">449.00 €</h1>
          </div>
          <div className="main-product-buy">
            <div class="product-count">
              <button class="button-count no-active" disabled>
                -
              </button>
              <input
                type="text"
                readonly
                class="number-product"
                value="1"
              ></input>
              <button class="button-count">+</button>
            </div>
            <div className="out-of-stock-button">
              <button type="button" class="btn btn-outofstock btn-lg" disabled>
                <img
                  src={Cart}
                  alt="Cart"
                  className="img-outofstock-cart"
                ></img>{" "}
                Add to cart
              </button>
            </div>
            <div className="main-product-stock-detail">
              <div>
                <img src={Stock} alt="Stock" className="img-stock"></img>{" "}
              </div>
              <div>
                <p className="stock-heading">Out of stock</p>
              </div>
            </div>
          </div>
          <div className="main-product-notification">
            <div className="subscription-notification">
              <img src={Bell} alt="Bell"></img>{" "}
            </div>
            <div className="subscription-notification-get">
              <p className="subscription-notification-heading">
                {" "}
                Get notified when available
              </p>
            </div>
            <div className="form-control-subscription">
              <input className="form-control-subscription1"></input>
            </div>
            <div className="subscription-button">
              <button type="button" class="btn btn-subscription">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="main-product-left">
          <div className="main-product-pic">
            <img src={Tell} alt="Test kit" className="main-product-img"></img>
          </div>
          <div className="main-product-slide">
            <img
              src={Left}
              alt="Test kit"
              className="main-product-left-img"
            ></img>
            <img
              src={Image1}
              alt="Test kit"
              className="main-product-img1"
            ></img>
            <img
              src={Image2}
              alt="Test kit"
              className="main-product-img2"
            ></img>
            <img
              src={Image3}
              alt="Test kit"
              className="main-product-img3"
            ></img>
            <img
              src={Image4}
              alt="Test kit"
              className="main-product-img4"
            ></img>
            <img
              src={Right}
              alt="Test kit"
              className="main-product-right-img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProduct;
