import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { Collection } from "../typings";
interface Props {
  collection: Collection[];
}
const Home = ({ collection }: Props) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col py-14 px-10 2xl:px-0 ">
      <h1 className="mb-10 text-4xl font-extralight">
        The{" "}
        <span className="font-bold underline decoration-pink-600/50">
          AURA UNI
        </span>{" "}
        NFT Market Place
      </h1>

      <main className="bg-gradient-to-br from-[#12c2e9] via-[#c471ed] to-[#f64f59] rounded-[20px] py-10 px-5 shadow-xl shadow-violet-600/80">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {collection.map((collection) => (
            <Link key={collection._id} href={`/nft/${collection.slug.current}`}>
              <div
                className="flex cursor-pointer flex-col items-center
            transition-all duration-200
            hover:scale-105"
              >
                <img
                  className="h-80 w-60 rounded-2xl object-cover"
                  src={urlFor(collection.previewImage).url()}
                  alt=""
                />
                <div className="p-5 text-center">
                  <h2 className="text-3xl font-semibold ">
                    {collection.nftCollectionName}
                  </h2>
                  <p className="mt-2 text-sm font-normal">{collection.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "collection"]{
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

  const collection = await sanityClient.fetch(query);

  return {
    props: {
      collection,
    },
  };
};
