import React from "react";
import MainProduct from "../component/shop/MainProduct";
import UseTest from "../component/shop/UseTest";
import Privacy from "../component/shop/Privacy";
import Review from "../component/shop/Review";
import Bottom from "../component/shop/Bottom";

function Shop() {
  return (
    <div>
      <MainProduct />
      <UseTest />
      <Privacy />
      <Review />
      <Bottom />
    </div>
  );
}

export default Shop;
