'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faBox,
  faLocationDot,
  faHandHoldingDollar,
  faChevronDown,
  faChevronUp,
  faClock,
  faReceipt,
  faPhone,
  faWallet,

} from '@fortawesome/free-solid-svg-icons';
import OrderDetails from './OrderDetails';
import { OrderTypevalues } from '../types/order.type';

import { faCcVisa } from "@fortawesome/free-brands-svg-icons";

export default function OrderCard({orderInfo}: {orderInfo:OrderTypevalues|null}) {
  const [isOpen, setIsOpen] = useState(false);
  if(!orderInfo) return <p>Loading...</p>

  return (
    <div className=" container mb-5 p-5 mt-5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Order Header */}
      <div className="flex flex-col gap-5  md:flex-row md:items-center">

        {/* Product Image */}
        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50">

          <img
            src={orderInfo?.cartItems[0]?.product.imageCover}
            alt="Product"
            className="h-24 w-24 object-contain"
          />

          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white shadow">
            {orderInfo?.cartItems.length}
          </span>

        </div>

        {/* Order Information */}
        <div className="flex-1 space-y-3">

          {/* Status */}
          <span className="inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-600">
            <FontAwesomeIcon icon={faClock} />
            Processing
          </span>

          {/* Order ID */}
          <h2 className="text-xl font-bold text-gray-900">
            <span className="mr-2 text-gray-400">#</span>
           {orderInfo?.id}
          </h2>

          {/* Order Details */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 md:text-base">

            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarDays} />
              {orderInfo?.createdAt}
            </span>

            <span className="text-gray-300">•</span>

            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBox} />
              {orderInfo.cartItems.length} items
            </span>

            <span className="text-gray-300">•</span>

            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              {orderInfo?.shippingAddress?.city}
            </span>

          </div>

          {/* Total Price */}
          <p className="text-2xl font-bold text-gray-900">
            {orderInfo?.totalOrderPrice} <span className="text-sm font-normal text-gray-400">EGP</span>
          </p>

        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 md:h-32 md:flex-col md:items-end">

          {/* Camera Button */}
          <div
            
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition hover:bg-gray-200"
          >
            {orderInfo?.paymentMethodType === 'cash' ? (
              <FontAwesomeIcon icon={faWallet} />
            ) : (
              <FontAwesomeIcon icon={faCcVisa} />
            )}
          </div>

          {/* Details Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-200"
          >
            {isOpen ? 'Hide' : 'Details'}

            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
            />

          </button>

        </div>

      </div>

      {/* Expanded Details */}
      {isOpen && (

        <div className="border-t border-gray-100 p-6">

          {/* Order Items */}
          <div className="mb-7">

            <h3 className="mb-5 flex items-center gap-3 font-semibold text-gray-900">

              <span className="rounded-lg bg-green-100 p-2 text-green-600">
                <FontAwesomeIcon icon={faReceipt} />
              </span>

              Order Items

            </h3>

            <div className="space-y-4">

{orderInfo?.cartItems?.map((order) => (
  <OrderDetails
    key={order._id}
    orderDetailsInfo={order}
  />
))}



            </div>

          </div>

          {/* Address & Summary */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* Delivery Address */}
            <div className="rounded-xl border border-gray-100 p-5">

              <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900">

                <span className="rounded-lg bg-blue-100 p-2 text-blue-600">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>

                Delivery Address

              </h3>

              <p className="mb-3 text-lg text-gray-900">
              {orderInfo?.shippingAddress?.city}
              </p>

              <p className="mb-4 text-gray-600">
                {orderInfo?.shippingAddress?.details}
              </p>

              <p className="flex items-center gap-2 text-gray-600">

                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-gray-400"
                />

                {orderInfo?.shippingAddress?.phone}

              </p>

            </div>

            {/* Order Summary */}
            <div className="rounded-xl border border-amber-200 bg-amber-100/70 p-4">

              <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900">

                <span className="rounded-lg bg-orange-500 p-2 text-white">
                  <FontAwesomeIcon icon={faWallet} />
                </span>

                Order Summary

              </h3>

              <div className="space-y-3 text-gray-600">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{orderInfo?.totalOrderPrice} EGP</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <hr className="border-amber-200" />

                <div className="flex justify-between font-semibold text-gray-900">

                  <span>Total</span>

                  <span className="text-xl">
                    {orderInfo?.totalOrderPrice} EGP
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
