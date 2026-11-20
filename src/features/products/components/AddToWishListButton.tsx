 'use client'

import { toast } from 'react-toastify'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart ,faShareNodes} from "@fortawesome/free-solid-svg-icons";
import { AddItemToWishList } from '@/features/wishlist/services/wishlist.service';

export default function AddToWishListButton({ productId }: { productId: string }) {

    async function HandleAddItemToWishList(){
          console.log('Button Clicked!')

    const Response = await AddItemToWishList(productId)
       console.log('API Response:', Response)

       if(Response.status==='fail'){
    toast.error(Response.message)
    return;
       }
    if(Response.status==='success'){
         toast.success('Product Added Successfuly To WishList')
        //  return;
    }
    }
  return (
    

  <div className="mt-4 flex gap-2">

            <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 text-sm text-gray-600"
            onClick={HandleAddItemToWishList}>

              <FontAwesomeIcon icon={faHeart} />

              Add to Wishlist

            </button>

            <button className="flex h-10 w-12 items-center justify-center rounded-lg border border-gray-200 text-gray-600">

              <FontAwesomeIcon icon={faShareNodes} />

            </button>

          </div>
  )
}
