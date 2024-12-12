import React from "react";
import Img1 from "../../Images/biryani3.png";
import Img2 from "../../Images/biryani2.png";

const servicesData = [
  {
    id: 1,
    img: Img1,
    name: "Biryani",
    desc: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken kari",
    desc: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 3,
    img: Img1,
    name: "Cold Cofee",
    desc: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
];
function Services() {
  return (
    <div className="py-10 dark:bg-gray-950">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p
            className="text-sm bg-clip-text text-transparent bg-gradient-to-r
            from-primary to-secondary"
          >
            Our Services
          </p>
          <h1 className="text-3xl font-bold dark:text-white">Services</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        {/* Card Section */}
        <div>
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-14 md:gap-5 place-items-center"
          >
            {servicesData.map(({ id, img, name, desc }) => {
              return (
                <div
                  key={id}
                  className="max-w-[300px] group rounded-2xl
                bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white
                duration-300 p-4 shadow-xl"
                >
                  <div className="h-[100px]">
                    <img
                      src={img}
                      alt=""
                      className="max-w-[200px] mx-auto
                    block transform -translate-y-14 group-hover:scale-105
                    group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-500 group-hover:text-white text-sm line-clamp-2">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
