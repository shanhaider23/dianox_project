import React from "react";
import Fruit from "../component/home/Fruit";
import Water from "../component/home/Water";
import Vitamin from "../component/home/Vitamin";
import News from "../component/home/LatestNews";

function Home() {
  return (
    <div>
      <Fruit />
      <Water />
      <Vitamin />
      <News />
    </div>
  );
}

export default Home;
