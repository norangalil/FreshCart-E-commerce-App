import React from 'react'
import { OrderCartItem } from '../types/order.type'

export default function OrderDetails({orderDetailsInfo}: {orderDetailsInfo:OrderCartItem}) {
  return (
    <div>
<div
                  
                  className="flex items-center gap-5 rounded-xl border border-gray-100 p-4"
                >

                  {/* Item Image */}
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gray-50">

                    <img
                      src={orderDetailsInfo.product.imageCover}
                      alt='btngan'
                      className="h-16 w-16 object-contain"
                    />

                  </div>

                  {/* Item Information */}
                  <div className="flex-1">

                    <h4 className="font-medium text-gray-900">
                     {orderDetailsInfo.product.title}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      {orderDetailsInfo.count} × {orderDetailsInfo.price} EGP
                    </p>

                  </div>

                  {/* Item Price */}
                  <div className="text-right">

                    <p className="text-lg font-bold text-gray-900">
                     {orderDetailsInfo.price}
                    </p>

                    <span className="text-sm text-gray-400">
                      EGP
                    </span>

                  </div>

                </div>




    </div>
  )
}
