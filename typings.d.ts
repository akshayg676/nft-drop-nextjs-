interface Image {
  asset: {
    url: string;
  };
}

export interface Creator {
  _id: string;
  address: string;
  bio: string;
  image: Image;
  name: string;
  slug: {
    current: string;
  };
}

export interface Collection {
  _id: string;
  title: string;
  description: string;
  nftCollectionName: string;
  address: string;
  creator: Creator;
  mainImages: Image[];
  previewImage: Image;
  slug: {
    current: string;
  };
}
