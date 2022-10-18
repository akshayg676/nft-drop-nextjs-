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
      <div></div>
    </div>
  );
};

export default NFTDropPage;
