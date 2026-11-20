'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'

import { Productwishlist } from '../types/wishlistType'
import Link from 'next/link'

interface WishlistCardProps {
  wishInfo: Productwishlist;
  onDelete: (id: string) => void;
}

export default function WishlistCard({
  wishInfo,
  onDelete
}: WishlistCardProps) {

  const {
    title,
    id,
    imageCover,
    price,
    priceAfterDiscount,
    category,
    slug
  } = wishInfo;

  
  return (
    <div >

    {/* Product */}
<div className="grid grid-cols-1 md:grid-cols-[2.5fr_0.8fr_0.7fr_1fr] items-center gap-5 border-t border-gray-100 p-5 md:px-8 md:py-6">

  {/* Product Info */}
  <Link href={`/products/${id}`} >
  <div className="flex items-center gap-5">
    <div className="w-24 h-24 shrink-0 rounded-2xl border border-gray-100 bg-gray-50 p-2">
      <img
        src={imageCover}
        alt={slug}
        className="w-full h-full object-contain"
      />
    </div>

    <div>
      <h3 className="text-lg font-medium text-gray-900 hover:text-green-700">
        {title}
      </h3>
      <p className="mt-1 text-gray-400">
        {category.name}
      </p>
    </div>
  </div>
  </Link>
  

  {/* Price */}
  <div className="flex items-center gap-2 md:block md:text-center">
    <span className="text-gray-500 md:hidden">Price:</span>
    <div>
        {priceAfterDiscount ? <>
    <p className="font-semibold text-gray-900">{priceAfterDiscount} EGP</p>
      <p className="text-gray-400 line-through text-sm">{price} EGP</p>

        </> : <>
     <p className="text-gray-900  font-semibold">{price} EGP</p>

        </>}
    </div>
  </div>

  {/* Stock Status */}
  <div className="flex items-center gap-5 md:justify-center">
    <span className="text-gray-500 md:hidden">Status:</span>

    <span className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm text-green-600">
      <span className="w-2 h-2 rounded-full bg-green-500"></span>
      In Stock
    </span>
  </div>

  {/* Actions */}
  <div className="flex items-center gap-3">
    <button className="flex-1 flex items-center justify-center gap-3 rounded-xl bg-green-600 px-5 py-4 text-white font-medium hover:bg-green-700 transition-colors">
      <FontAwesomeIcon icon={faCartShopping} />
      Add to Cart
    </button>

    <button
   onClick={() => onDelete(id)}    className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl border border-gray-200 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all">
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  </div>

</div>

    

    </div>

    
  )
}
