
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faTruck,
  faTag,
  faLock,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { CartApiResponse, CartData } from "../types/cart.types";
import { CartInitialValueTypes } from "../slices/cart.slice";

export default function OrderSummary({CartInfo} : {CartInfo: CartInitialValueTypes}) {
  const { numOfCartItems , data} = CartInfo
  const {totalCartPrice , products} = data

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

      {/* Header */}
      <div className="bg-linear-to-r from-green-600 to-green-700 px-4 py-3 text-white">

        <div className="flex items-center gap-2">

          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-xs"
          />

          <h2 className="text-sm font-bold">
            Order Summary
          </h2>

        </div>

        <p className="mt-1 text-[10px] text-green-100">
          {numOfCartItems} items in your cart
        </p>

      </div>

      {/* Content */}
      <div className="p-3">

        {/* Free Shipping */}
        <div className="flex items-center gap-2 rounded-xl bg-linear-to-r from-green-50 to-gray-50 p-3">

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">

            <FontAwesomeIcon
              icon={faTruck}
              className="text-xs"
            />

          </div>

          <div>

            <h3 className="text-xs font-bold text-green-700">
              Free Shipping!
            </h3>

            <p className="mt-0.5 text-[10px] text-green-600">
              You qualify for free delivery
            </p>

          </div>

        </div>

        {/* Price Details */}
        <div className="mt-3 space-y-3">

          <div className="flex items-center justify-between text-xs">

            <span className="text-gray-500">
              Subtotal
            </span>

            <span className="font-medium text-gray-700">
              {totalCartPrice} EGP
            </span>

          </div>

          <div className="flex items-center justify-between text-xs">

            <span className="text-gray-500">
              Shipping
            </span>

            <span className="font-semibold text-green-600">
              FREE
            </span>

          </div>

        </div>

        {/* Divider */}
        <div className="my-3 border-t border-dashed border-gray-200" />

        {/* Total */}
        <div className="flex items-center justify-between">

          <span className="text-xs font-semibold text-gray-700">
            Total
          </span>

          <div className="flex items-baseline gap-1">

            <span className="text-lg font-bold text-gray-900">
{totalCartPrice}            </span>

            <span className="text-[10px] text-gray-400">
              EGP
            </span>

          </div>

        </div>

        {/* Promo Code */}
        <button
          type="button"
          className="mt-3 flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 text-[10px] font-medium text-gray-500 transition-colors hover:border-green-400 hover:text-green-600"
        >

          <FontAwesomeIcon icon={faTag} />

          Apply Promo Code

        </button>

        {/* Checkout */}
        <button
          type="button"
          className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-green-600 to-green-700 text-xs font-semibold text-white shadow-md shadow-green-600/20 transition-all hover:shadow-lg"
        >

          <FontAwesomeIcon icon={faLock} />

          Secure Checkout

        </button>

        {/* Payment & Delivery */}
        <div className="mt-4 flex items-center justify-center gap-3 text-[9px] text-gray-500">

          <div className="flex items-center gap-1">

            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-green-500"
            />

            Secure Payment

          </div>

          <span className="text-gray-300">|</span>

          <div className="flex items-center gap-1">

            <FontAwesomeIcon
              icon={faTruck}
              className="text-blue-500"
            />

            Fast Delivery

          </div>

        </div>

        {/* Continue Shopping */}
        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-1 text-[10px] font-medium text-green-600 transition-colors hover:text-green-700"
        >

          ← Continue Shopping

        </button>

      </div>

    </div>
  );
}

