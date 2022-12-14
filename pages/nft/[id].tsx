import React, { useEffect, useState } from "react";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useContract,
} from "@thirdweb-dev/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { runFireworks } from "../../lib/utilis";
import toast, { Toaster } from "react-hot-toast";
// import required modules
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper";
import { GetServerSideProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Collection } from "../../typings";
import Link from "next/link";
import { BigNumber } from "ethers";

interface Props {
  collection: Collection;
}

const NFTDropPage = ({ collection }: Props) => {
  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply, setTotalSupply] = useState<BigNumber>();
  const [loading, setLoading] = useState<boolean>(true);
  const { contract } = useContract(collection.address, "nft-drop");

  useEffect(() => {
    if (!contract) return;

    const fetchNftDropData = async () => {
      setLoading(true);
      const claimed = await contract.getAllClaimed();
      const total = await contract.totalSupply();
      setClaimedSupply(claimed.length);
      setTotalSupply(total);
      setLoading(false);
    };
    fetchNftDropData();
  }, [contract]);

  //Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  // --

  const mintNft = async () => {
    if (!contract || !address) return;
    const quantity = 1; // how many unique NFTs you want to claim
    setLoading(true);
    const notification = toast.loading("Minting started....", {
      style: {
        background: "White",
        border: "3px solid green",
        color: "green",
        fontWeight: "bolder",
        fontSize: "20px",
        padding: "20px",
      },
    });
    try {
      const tx = await contract.claimTo(address, quantity);
      const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
      toast(
        (t) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
              border: "3px solid green",
              borderRadius: "20px",
            }}
          >
            <img
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
              src={claimedNFT.metadata.image ?? ""}
              alt=""
            />
            <div
              style={{
                padding: "10px",
                textAlign: "center",
                wordBreak: "break-all",
              }}
            >
              <p>
                HOORAY... Successfully transferred NFT to your address{" "}
                <span style={{ fontWeight: 700 }}>({claimedNFT.owner})</span>
              </p>
            </div>
          </div>
        ),
        {
          duration: 8000,
        }
      );
      runFireworks();
    } catch (error) {
      console.log(error);
      toast("Oops.... Something went wrong.!", {
        style: {
          background: "White",
          border: "3px solid red",
          color: "#781f19",
          fontWeight: "bolder",
          fontSize: "20px",
          padding: "20px",
        },
      });
    }

    setLoading(false);
    toast.dismiss(notification);
  };

  return (
    <div className="flex  h-screen flex-col lg:grid lg:grid-cols-10">
      <Toaster position="top-center" />

      {/* left */}
      <div className=" bg-gradient-to-br from-[#ff00cc] to-[#333399] lg:col-span-4">
        <div className="flex flex-col  items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-[#DD2476] to-[#FF512F] p-2 rounded-xl">
            <img
              className="w-44 rounded-r-xl object-cover lg:h-96 lg:w-72"
              src={urlFor(collection.previewImage).url()!}
              alt=""
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">
              {collection.nftCollectionName}
            </h1>
            <h2 className="text-lg  text-gray-300">{collection.description}</h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col pt-12 pb-12 pl-5 pr-5 lg:col-span-6 lg:p-12">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link href={"/"}>
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              The{" "}
              <span className="font-bold underline decoration-pink-600/50">
                AURA UNI
              </span>{" "}
              NFT Market Place
            </h1>
          </Link>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-gradient-to-br from-violet-600 to-pink-600 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-2 lg:text-base"
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-green-400">
            You're logged in with wallet {address.substring(0, 5)}....
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
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
              {collection.mainImages.map((path) => (
                <SwiperSlide key={path._key}>
                  <img
                    className="simg"
                    src={urlFor(path).url()!}
                    alt="Amigos"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h1 className="pt-4 text-lg  font-semibold  lg:text-xl">
            {collection.title}
          </h1>
          {loading ? (
            <p className="animate-bounce pt-2 text-lg text-violet-800">
              Loading Supply Count...
            </p>
          ) : (
            <p className="pt-2 text-lg text-violet-800">
              {claimedSupply} /{totalSupply?.toString()} NFT's claimed
            </p>
          )}
        </div>
        {/* Mint Button */}
        <button
          onClick={mintNft}
          disabled={
            loading || claimedSupply === totalSupply?.toNumber() || !address
          }
          className="mt-10 h-10 w-full rounded-full  bg-gradient-to-l from-[#833ab4] via-[#fd1d1d]  to-[#fcb045] font-bold text-white disabled:opacity-40"
        >
          {loading ? (
            <>Loading</>
          ) : claimedSupply === totalSupply?.toNumber() ? (
            <>SOLD OUT</>
          ) : !address ? (
            <>Sign in to Mint</>
          ) : (
            <span>Mint NFT (0.01 ETH)</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "collection" && slug.current == $id][0]{
  _id,
  title,
  address,
  description,
  nftCollectionName,
  previewImage{
  asset
   },
 mainImages,
slug{
  current
},
creator-> {
  _id,
  name,
  address,
  slug{
  current
},
},
}`;
  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  });

  if (!collection) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      collection,
    },
  };
};
