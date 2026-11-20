export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface OrderUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface CategoryOrBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  _id: string;
  id: string;
  title: string;
  imageCover: string;
  subcategory: Subcategory[];
  category: CategoryOrBrand;
  brand: CategoryOrBrand;
  ratingsQuantity: number;
  ratingsAverage: number;
}

export interface OrderCartItem {
  _id: string;
  count: number;
  product: Product;
  price: number;
}

export type PaymentMethodType = "cash" | "card";

export interface OrderTypevalues {
  _id: string;
  id: number;
  shippingAddress: ShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: PaymentMethodType | string;
  isPaid: boolean;
  isDelivered: boolean;
  user: OrderUser;
  cartItems: OrderCartItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}