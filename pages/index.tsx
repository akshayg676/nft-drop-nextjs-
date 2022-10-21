import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { sanityClient, urlFor } from "../sanity";
import { Collection } from "../typings";
interface Props {
  collection: Collection[];
}
const Home = ({ collection }: Props) => {
  return (
    <div className="">
      <h1>Nft drop</h1>
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
