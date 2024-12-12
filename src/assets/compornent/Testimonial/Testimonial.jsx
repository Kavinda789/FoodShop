import React from "react";
import Img1 from "../../Images/Testimonial1.jpg";
import Img2 from "../../Images/Testimonial2.jpg";
import Img3 from "../../Images/Testimonial3.jpg";
import Slider from "react-slick";
function Testimonial() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  const Data = [
    {
      id: 1,
      fname: "Samuel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      imglink: Img1,
    },
    {
      id: 2,
      fname: "John Doe",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      imglink: Img2,
    },
    {
      id: 3,
      fname: "Smith",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      imglink: Img3,
    },
  ];

  return (
    <div className="dark:bg-gray-950 py-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p
            className="text-sm bg-clip-text text-transparent bg-gradient-to-r
            from-primary to-secondary"
          >
            Testimonial
          </p>
          <h1 className="text-3xl font-bold dark:text-white">Testimonial</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        {/* Testimonial section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="grid grid-cols-1 max-w-[600px]
         mx-auto gap-6"
        >
          <Slider {...settings}>
            {Data.map(({ id, fname, desc, imglink }) => {
              return (
                <div key={id} className="my-6">
                  <div
                    className="flex flex-col justify-center items-center
                        gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800
                        bg-primary/10 relative"
                  >
                    <img
                      className="rounded-full block mx-auto"
                      src={imglink}
                      alt="img"
                    />
                    <p className="text-gray-500 text-sm">{desc}</p>
                    <h1 className="text-xl font-bold">{fname}</h1>
                    <p
                      className="text-black/20 text-9xl font-serif
                    absolute top-0 right-0"
                    >
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
