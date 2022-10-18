import React from "react";

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
              Be part of the Meta Amigos! Built by humans, created for the
              universe!
            </h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-bold underline decoration-pink-600/50">
              META AMIGOS
            </span>{" "}
            NFT Market Place
          </h1>
          <button className="rounded-full bg-gradient-to-br from-violet-600 to-pink-600 px-4 py-text-xs font-bold text-white lg:px-5 lg:py-2 lg:text-base">
            Sign In
          </button>
        </header>
        <hr className="my-2 border" />
        {/* Content */}
        {/* Mint Button </div> */}
      </div>
    </div>
  );
};

export default NFTDropPage;
