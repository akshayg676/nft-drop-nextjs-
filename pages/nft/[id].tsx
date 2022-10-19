import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper";

const NFTDropPage = () => {
  return (
    <div className="flex  h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left */}
      <div className=" bg-gradient-to-br from-[#ff00cc] to-[#333399] lg:col-span-4">
        <div className="flex flex-col  items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-[#DD2476] to-[#FF512F] p-2 rounded-xl">
            <img
              className="w-44 rounded-r-xl object-cover lg:h-96 lg:w-72"
              src="https://res.cloudinary.com/dsrs8h01h/image/upload/v1666086059/11_bmwq9q.png"
              alt=""
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">Meta Amigos</h1>
            <h2 className="text-lg  text-gray-300">
              Embrace your inner collector, get your cryptokitty now!
            </h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col pt-12 pb-12 pl-5 pr-5 lg:col-span-6 lg:p-12">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-bold underline decoration-pink-600/50">
              META AMIGOS
            </span>{" "}
            NFT Market Place
          </h1>
          <button className="rounded-full bg-gradient-to-br from-violet-600 to-pink-600 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-2 lg:text-base">
            Sign In
          </button>
        </header>
        <hr className="my-2 border" />
        {/* Content */}
        <div className="mt-10 flex flex1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          {/* <img
            className="w-3/4 object-contain pb-10 lg:h-2/4"
            src="https://res.cloudinary.com/dsrs8h01h/image/upload/v1666103251/bannernft_sijrxa.png"
            alt=""
          /> */}
          <div className="pt-4 pb-4">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              scrollbar={{
                draggable: true,
              }}
              effect={"cards"}
              grabCursor={true}
              modules={[Navigation, Pagination, Autoplay, EffectCards]}
              className="mySwiper"
            >
              {[
                "p1",
                "p2",
                "p3",
                "p4",
                "p5",
                "p6",
                "p7",
                "p8",
                "p9",
                "p10",
                "p11",
                "p12",
              ].map((path) => (
                <SwiperSlide>
                  <img
                    className="simg"
                    src={`/assest/${path}.png`}
                    alt="Amigos"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h1 className="pt-4 text-xl font-bold lg:text-2xl  lg:font-bold">
            Be part of the Meta Amigos! Built by humans, created for the
            universe!
          </h1>
          <p className="pt-2 text-xl text-violet-800">13 /21 NFT's claimed</p>
        </div>
        {/* Mint Button */}
        <button className="mt-10 h-10 w-full rounded-full  bg-gradient-to-l from-[#833ab4] via-[#fd1d1d]  to-[#fcb045] font-bold text-white">
          Mint NFT(0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
