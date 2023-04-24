import React from "react";
import { AiFillStar } from "react-icons/ai";
import Testimonial1 from "../assests/images/testimonial/testimonial-1.png"
import Testimonial2 from "../assests/images/testimonial/testimonial-2.png"
import Testimonial3 from "../assests/images/testimonial/testimonial-3.png"

const Testimonial = () => {
  return (
    <>
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-5xl font-sans leading-normal font-bold  text-center mt-2 md:items-center">
                Reviews <strong>from our customers </strong>
              </h1>

              <p className="mt-1 text-sm leading-loose text-primary-grey lg:text-xl  ">
                Fully nobis id expedita dolores officiis layered dolor sit amet{" "}
                <br />
                layered dolor sit amet
              </p>
            </div>
            <div className="relative mt-10 md:order-2 md:mt-24">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
              </div>

              <div className="relative mt-3 mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                <div className="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                  <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                    <div className="flex-1">
                      <blockquote className="flex-1">
                        <p className="font-1xl text-xl  ">
                          I was blown away by the ease of use of this food order
                          and delivery website. The variety of options available
                          is amazing, and the food arrived fresh and hot within
                          minutes of ordering.
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex mt-4  items-center">
                      <img
                        className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                        src={Testimonial1}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold">Peterson Wilson</p>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Ceo Hive haven
                        </p>
                      </div>

                      <div className="flex ml-10 text-orange-500">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                  <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                    <div className="flex-1">
                      <blockquote className="flex-1">
                        <p className="font-1xl text-xl  ">
                        This food order and delivery website is a lifesaver for me. As a busy professional, I don't have time to cook, and this website makes it easy for me to order a healthy and tasty meal with just a few clicks. 
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex mt-4  items-center">
                      <img
                        className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                        src={Testimonial2}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold"> John Mark</p>
                        <p className="mt-0.5 text-sm text-gray-500">
                        Business professional
                        </p>
                      </div>

                      <div className="flex ml-10 text-orange-500">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                  <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                    <div className="flex-1">
                      <blockquote className="flex-1">
                        <p className="font-1xl text-xl  ">
                        I've been using this food order and delivery website for a while now and I'm never disappointed. The variety of cuisines and dishes available is impressive, and the prices are very reasonable.
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex mt-2 items-center">
                      <img
                        className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                        src={Testimonial2}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold"> Jenny Fold</p>
                        <p className="mt-0.5 text-sm text-gray-500">
                        Sales Manager
                        </p>
                      </div>

                      <div className="flex ml-10 text-orange-500">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
