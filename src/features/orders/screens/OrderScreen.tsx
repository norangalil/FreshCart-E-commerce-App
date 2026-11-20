'use client'
import OrderCard from '../components/OrderCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import {
  faBagShopping,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { AppState } from '@/store/store';
import getUserOrders from '../server/orders.actions';
import { useEffect, useState } from 'react';
import { OrderTypevalues } from '../types/order.type';
export default   function OrderScreen() {

const {userInfo}  = useSelector((state:AppState)=> state.authReducer)
const Userid = userInfo?.id
const [orderInfo, setOrderInfo] = useState<OrderTypevalues[]>([])
useEffect(() => {
  async function GetOrders() {
      if (!Userid) return
    const UserOrder = await getUserOrders(Userid)
    setOrderInfo(UserOrder)

  }
  GetOrders()

}, [Userid])

  return (
<>
 <section className=" container w-full py-6">

      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-3 text-sm">
        <Link
          href="/"
          className="text-gray-500 transition hover:text-green-600"
        >
          Home
        </Link>

        <span className="text-gray-300">/</span>

        <span className="font-medium text-gray-900">
          My Orders
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

        {/* Title & Icon */}
        <div className="flex items-center gap-5">

          <div className="flex h-17.5 w-17.5 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-200">

            <FontAwesomeIcon
              icon={faTruck}
              className="text-2xl"
            />

          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              My Orders
            </h1>

            <p className="mt-1 text-base text-gray-500 md:text-lg">
              Track and manage your  {orderInfo.length} orders
            </p>
          </div>

        </div>

        

      </div>

    </section>

{orderInfo.length === 0 ?(
  <div className="flex min-h-112.5 w-full flex-col items-center justify-center bg-white px-4 text-center">

      {/* Icon */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
        <FontAwesomeIcon
          icon={faBoxOpen}
          className="text-4xl text-green-500"
        />
      </div>

      {/* Title */}
      <h2 className="mb-3 text-2xl font-semibold text-gray-900">
        No Orders Yet!
      </h2>

      {/* Description */}
      <p className="mb-6 max-w-sm text-base text-gray-500">
        You haven't placed any orders yet. Start shopping and your orders will appear here.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="rounded-xl bg-green-600 px-10 py-4 text-base font-semibold text-white transition-all hover:bg-green-700"
      >
        Start Shopping
      </Link>

    </div>
) : (
  orderInfo.map((order) => (
    <OrderCard
      key={order._id}
      orderInfo={order}
    />
  ))
)}
</>

        
   
  )
}
