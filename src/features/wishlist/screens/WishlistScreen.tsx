"use client";

import  { useEffect, useState } from "react";
import WishlistCard from "../components/WishlistCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getAllwishListOfUser, DeleteItemFromWishList } from "../services/wishlist.service";
import { Productwishlist } from "../types/wishlistType";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { faArrowRight, faBagShopping } from "@fortawesome/free-solid-svg-icons";


export default function WishlistScreen() {

  const [wishlist, setWishlist] = useState<Productwishlist[]>([]);

  async function getWishlist() {
    const response = await getAllwishListOfUser();

    if (response.status === "success") {
      setWishlist(response.data);
    }
  }

  useEffect(() => {
    getWishlist();
  }, []);

  async function HandleDeleteItemFromWishList(id: string) {

  
    const response = await DeleteItemFromWishList(id);

    if (response.status === "success") {

      setWishlist((prev) =>
        prev.filter((item) => item._id !== id)
      );

      toast.success("Product Removed Successfully");

    } else {
      toast.error(response.message);
    }
  }

  return (
    <>

      <section className="w-full bg-white border-b border-gray-100">

        <div className="container mx-auto px-6 py-8">

          <div className="flex items-center gap-3 text-base mb-6">
            <Link href="/" className="text-gray-500 hover:text-green-600 transition-colors">
              Home
            </Link>

            <span className="text-gray-400">/</span>

            <span className="text-gray-900 font-medium">
              Wishlist
            </span>
          </div>

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-2xl text-green-500"
              />
            </div>

            <div>
              <h1 className="text-2xl md:text-xl font-bold text-gray-900">
                My Wishlist
              </h1>

              <p className="text-gray-500 mt-1">
                {wishlist.length} items saved
              </p>
            </div>

          </div>

        </div>

      </section>


{wishlist.length > 0 ? <div className="container">

        <div className="w-full hidden md:grid grid-cols-[2.5fr_0.8fr_0.7fr_1fr] items-center bg-gray-50 px-8 py-5 text-gray-500">
          <span>Product</span>
          <span className="text-center">Price</span>
          <span className="text-center">Status</span>
          <span className="text-center">Actions</span>
        </div>

        {wishlist.map((wish) => (
          <WishlistCard
            key={wish._id}
            wishInfo={wish}
            onDelete={HandleDeleteItemFromWishList}
          />
        ))}

        <div className="mt-8 py-5">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} />
            Continue Shopping
          </Link>
        </div>

      </div>
:

  <div className="flex min-h-112.5 flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-5 py-12 text-center">

      {/* Icon */}
      <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-green-50">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-4xl text-green-600"
        />
      </div>

      {/* Text */}
      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        Your Wishlist is Empty!
      </h2>

      <p className="mb-7 max-w-sm text-sm leading-6 text-gray-500">
        Looks like you haven't added anything to your wishlist yet.
        Explore our products and save your favorites here!
      </p>

      {/* Button */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg"
      >
        <FontAwesomeIcon icon={faBagShopping} />
        Explore Products
        <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
      </Link>

    </div>


}
      
    </>
  );
}