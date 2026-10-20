import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowsRotate,
  faEye,
  faStar,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { Product } from '../types/getAllProductsTypes';

export default function ProductCard({productInfo}:{productInfo:Product}) {

    const{_id , category , imageCover , title  , priceAfterDiscount , ratingsAverage , price} = productInfo
    const discountPercentage = priceAfterDiscount
            ? Math.round(
                ((price - priceAfterDiscount) /
                  price) *
                  100
              )
            : 0;

  return (

    <>
     <div
              key={_id}
              className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
            >

              {/* Product Image */}
              <div className="relative">

                <img
                  src={imageCover}
                  alt={title}
                  className="h-48 w-full object-contain"
                />

                {/* Discount */}
                {discountPercentage > 0 && (
                  <span className="absolute left-1 top-1 rounded-md bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                    -{discountPercentage}%
                  </span>
                )}

                {/* Actions */}
                <div className="absolute right-1 top-1 flex flex-col gap-2">

                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-md hover:text-red-500">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-md">
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-md">
                    <FontAwesomeIcon icon={faEye} />
                  </button>

                </div>

              </div>

              {/* Product Info */}
              <div className="mt-3">

                <p className="text-xs text-gray-500">
                  {category.name}
                </p>

                <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-medium text-gray-700">
                  {title}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1">

                  <div className="flex gap-0.5 text-sm text-yellow-400">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>

                  <span className="ml-1 text-xs text-gray-500">
                    {ratingsAverage}
                  </span>

                </div>

                {/* Price */}
                <div className="mt-3 flex items-center justify-between gap-1">

                  <div className="flex flex-col gap-1">

                    {priceAfterDiscount ? (
                      <>
                        <span className="text-sm font-bold text-emerald-600">
                          {priceAfterDiscount} EGP
                        </span>

                        <span className="text-xs text-gray-400 line-through">
                          {price} EGP
                        </span>
                      </>
                    ) : (
                      <span className="text-sm font-bold text-emerald-600">
                        {price} EGP
                      </span>
                    )}

                  </div>

                  {/* Add Button */}
                  <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>

                </div>

              </div>

            </div>
    
    
    
    </>
  )
}
