import React from "react";
import { FaStar } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

import food from "../../assests/images/food/food-2.jpg";
const FoodCard = () => {
  return (
    <>
      <div className="w-80 bg-white shadow-lg rounded">
        {" "}
        <div
          className="h-52 w-full flex flex-col justify-between p-4 bg-cover bg-center rounded-t-lg"
          style={{
            backgroundImage: `url(${food})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div className="flex justify-between">
            {" "}
            <button
              type="button"
              className="inline-flex classname items-center justify-center space-x-2 border border-transparent text-sm font-medium rounded-full w-12 h-12 bg-white bg-opacity-80 hover:text-white  hover:bg-primary-lightGreen transition-colors"
            >
              <AiFillHeart size={25} />
            </button>
            <button className="text-black ">
              {" "}
              <div className="flex rounded-full py-1 px-4 font-medium justify-between items-center gap-2 bg-white bg-opacity-80  hover:bg-primary-lightGreen hover:text-white">
                <FaStar color="orange" />
                4.5
              </div>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="p-4 flex flex-col">
          {" "}
          <p className="font-bold text-lg "> Gourmet Grove </p>{" "}
          <p className="text-gray-800 text-xs mt-1">
            With lots of unique blocks you can easily create a page without
            coding{" "}
          </p>{" "}
          <div className="flex justify-between w-full mt-4">
            {" "}
            <div className="flex items-center ">
              {" "}
              <p className="font-bold">$ 26.5</p>{" "}
            </div>{" "}
            <div>
              {" "}
              <button
                type="button"
                className="inline-flex classname items-center justify-center space-x-2  text-sm text-white  rounded-full w-10 h-10 bg-primary-green hover:bg-primary-lightGreen hover:text-primary-green transition-colors"
              >
                <MdOutlineShoppingCart size={25} />
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};
export default FoodCard;
