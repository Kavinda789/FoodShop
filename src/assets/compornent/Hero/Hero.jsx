import React, { useState } from "react";
import Img1 from "../../Images/biryani3.png";
import Img2 from "../../Images/biryani2.png";
import Img3 from "../../Images/biryani1.png";

const ImageList = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
  {
    id: 3,
    img: Img3,
  },
];

function Hero() {
  const [imageId, setImageId] = useState(Img1);
  return (
    <div>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100
        dark:bg-gray-950 dark:text-white duration-200 flex justify-center
        items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12
                sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to the Foodie Zone
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas sint ex quod quos neque reprehenderit nihil suscipit
                iure vero deserunt.
              </p>
              <div>
                <button
                  className="bg-gradient-to-r from-primary to-secondary
                text-white px-4 py-2 rounded-full hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* image section */}
            <div
              className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex
            justify-center items-center relative"
            >
              {/* main image section */}
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  data-aos="zoom-out"
                  data-aos-duration="400"
                  data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px] sm:w-[450px] mx-auto spin"
                />
              </div>
              {/* image list section */}
              <div
                className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2
              lg:py-4 justify-center gap-4 absolute bottom-[0px] lg:-right-10
              bg-white dark:bg-white/30 rounded-full"
              >
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-once="true"
                    key={item.id}
                    src={item.img}
                    alt=""
                    className="max-w-[80px] h-[80px] object-contain inline-block
                  hover:scale-105 duration-200"
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Img1 : item.id === 2 ? Img2 : Img3
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
