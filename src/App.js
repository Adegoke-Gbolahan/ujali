import React from "react";
import "./index.css";
import Navbar from "./components/NavBar/index";
import FoodCard from "./components/Cards/foodCard";
import TextHeader from "./components/customHeader";
import Testimonial from "./components/testimonial";
import SubscribeNow from "./components/SubscribeNow";
function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <TextHeader />
      </div>

      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:px-10 py-10 gap-6">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
      <Testimonial />

      <div className="container mx-auto ">
        <SubscribeNow />
      </div>
    </>
  );
}

export default App;
