import React from "react";
import "./index.css";
import Navbar from "./components/NavBar/index";
import FoodCard from "./components/Cards/foodCard";
import TextHeader from "./components/customHeader";
import Testimonial from "./components/testimonial";
import SubscribeNow from "./components/SubscribeNow";
import HowItWorks from "./components/Cards/HowItWorks";

import howItWork1 from "./assests/images/how-it-work/how-it-work-food.png";
import howItWork2 from "./assests/images/how-it-work/how-it-work-food-2.png";
import howItWork3 from "./assests/images/how-it-work/how-it-work-food-3.png";
function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <TextHeader />
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-10">
        <HowItWorks
          headerImg={howItWork1}
          title={"Food"}
          description={"Place an order by selecting your meal from our website"}
        />
        <HowItWorks
          headerImg={howItWork2}
          title={"Groceries"}
          description={
            "Place an order by selecting your groceries from our website"
          }
        />
        <HowItWorks
          headerImg={howItWork3}
          title={"Food Supply"}
          description={"Place an order for food supply from our website"}
        />
      </div>

      <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-10">
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
