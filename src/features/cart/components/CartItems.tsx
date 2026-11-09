'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2'

import {
  faPlus,
  faMinus,
  faTrash,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import { CartProduct } from "../types/cart.types";
import { DeleteItemFromCart } from "../server/cart.actions";
import { toast } from "react-toastify";
import { CartActions } from "../slices/cart.slice";
import { useDispatch } from "react-redux";

export default function CartItems({ cartInfo }: { cartInfo: CartProduct }) {
  const{ count , price , product } = cartInfo
   const {title , imageCover , quantity , category , id }= product

 const {updateCartInfo} = CartActions
const dispatch =  useDispatch()

async function HandleDeleteItemFromCart() {

  const result = await Swal.fire({
    title: "Are you sure?",
    text: "Do you want to remove this item from your cart?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#16a34a",
    cancelButtonColor: "#ef4444",
  });

  if (!result.isConfirmed) return;

  const response = await DeleteItemFromCart(id);

  if (response.status === "success") {

    toast.success(response.message);

    dispatch(updateCartInfo(response));

  }

}
 
  return (

    <>

{/* Main Content */}
    <div className="w-full rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">

        

      <div className="flex items-center gap-3 sm:gap-4">

        {/* Product Image & Stock */}
        <div className="flex shrink-0 flex-col items-center gap-2">

          <div className="flex h-19 w-19 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white sm:h-22 sm:w-22">

            <img
              src={imageCover}
              alt="Woman Standard Fit Knitted Cardigan"
              className="h-full w-full object-contain p-2"
            />

          </div>

          {quantity > 0 ?  <span className="flex items-center gap-1 rounded-full bg-green-500 px-2 py-0.5 text-[9px] font-semibold text-white">

            <span>✓</span>
            In Stock

          </span> :  <span className="flex items-center gap-1 rounded-full bg-red-500 px-2 py-0.5 text-[9px] font-semibold text-white">

            <span>✓</span>
            out of  Stock

          </span>}

         

        </div>

        {/* Product Information */}
        <div className="min-w-0 flex-1 self-start pt-1">

          <h3 className="truncate text-xs font-bold text-gray-900 sm:text-sm">
{ title}
          </h3>

          {/* Category & SKU */}
          <div className="mt-2 flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600">
            {category.name}
            </span>


          </div>

          {/* Price */}
          <div className="mt-2 flex items-baseline gap-2">

            <span className="text-xs font-bold text-green-600 sm:text-sm">
              {price} EGP
            </span>

            <span className="text-[9px] text-gray-400">
              per unit
            </span>

          </div>

          {/* Quantity */}
          <div className="mt-2 flex h-8 w-fit items-center gap-1 rounded-lg border border-gray-100 bg-gray-50 p-1">

            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded-md text-gray-400"
            >
              <FontAwesomeIcon icon={faMinus} className="text-[9px]" />
            </button>

            <span className="min-w-5 text-center text-xs font-bold text-gray-800">
              {count}
            </span>

            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center rounded-md bg-green-600 text-white shadow-sm"
            >
              <FontAwesomeIcon icon={faPlus} className="text-[9px]" />
            </button>

          </div>

        </div>

        {/* Total & Delete */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          <div className="text-right">

            <p className="text-[9px] text-gray-400">
              Total
            </p>

            <div className="flex items-baseline justify-end gap-0.5">

              <span className="text-sm font-bold text-gray-900 sm:text-base">
                {count * price}
              </span>

              <span className="text-[9px] text-gray-400">
                EGP
              </span>

            </div>

          </div>

          <button
          onClick={HandleDeleteItemFromCart}
            type="button"
            aria-label="Delete product"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 transition-colors hover:bg-red-100"
          >

            <FontAwesomeIcon icon={faTrash} className="text-xs" />

          </button>

        </div>

      </div>

    </div>

    </>

  );
}
