export interface ApiResponsewishlist {
  status: string;
  count: number;
  data: Productwishlist[];
}

export interface Productwishlist {
  sold: number;
  images: string[];
  subcategory: Subcategorywishlist[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount: number;
  imageCover: string;
  category: Categorywishlist;
  brand: Brandwishlist;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface Subcategorywishlist {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Categorywishlist {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brandwishlist {
  _id: string;
  name: string;
  slug: string;
  image: string;
}