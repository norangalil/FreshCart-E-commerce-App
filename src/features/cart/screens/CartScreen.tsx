'use client'
import Swal from 'sweetalert2'
import CartItems from '../components/CartItems'
import OrderSummary from '../components/CartSummary'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLock,
  faPlus,
  faMinus,
  faTrash,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import { ClearCart, getCartItem } from '../server/cart.actions';
import { toast } from 'react-toastify';
import { CartActions } from '../slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/store/store';


export default   function CartScreen() {
 const {updateCartInfo} = CartActions
const dispatch  =  useDispatch()

async function HandleClearCart() {

  // 1. Confirmation Alert
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "Do you want to remove all items from your cart?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, clear cart!",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#16a34a",
    cancelButtonColor: "#ef4444",
  });

  if (!result.isConfirmed) return;

  const clearCartResponse = await ClearCart();

  if (clearCartResponse.status === "success") {

    toast.success(clearCartResponse.message);

    dispatch(updateCartInfo(clearCartResponse));

  }

}

  const cartResponse = useSelector((state: AppState) => state.cartReducer);
  // console.log(cartResponse)

if(cartResponse.status === ''){
  return <>
   <div className="flex min-h-100 flex-col items-center justify-center gap-4">

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <FontAwesomeIcon
          icon={faLock}
          className="text-3xl text-green-400"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">
        Please Login First
      </h2>

      <p className="text-center text-gray-500">
        You need to login to view your cart.
      </p>

      <button className="rounded-lg bg-green-600 px-8 py-3 text-white transition hover:bg-green-800">
        Login Now
      </button>

    </div>
    
  </>
}

if ( cartResponse.numOfCartItems === 0) {
  return (
    <div className="container py-3">

      {/* Breadcrumb */}
      <nav className="mb-3 flex items-center gap-2 text-xs text-gray-500">
        <span>Home</span>

        <span className="text-gray-300">/</span>

        <span className="font-medium text-gray-700">
          Shopping Cart
        </span>
      </nav>

      {/* Empty Cart */}
      <div className="flex min-h-100 flex-col items-center justify-center gap-4">

        {/* Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">

          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-3xl text-green-400"
          />

        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Your Cart is Empty
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </p>

        {/* Button */}
        <button
          type="button"
          className="rounded-lg bg-green-600 px-8 py-3 text-white transition hover:bg-green-800"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  )
}
if(cartResponse.status === 'success'){
return (
<div>

  {/* header */}
<div className=" container mb-6 py-3">

      {/* Breadcrumb */}
      <nav className="mb-3 flex items-center gap-2 text-xs text-gray-500">

        <span>Home</span>

        <span className="text-gray-300">/</span>

        <span className="font-medium text-gray-700">
          Shopping Cart 
        </span>

      </nav>

      {/* Page Title */}
      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm">

          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-lg"
          />

        </div>

        <div>

          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Shopping Cart
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            You have <span className="font-semibold text-green-600"> {cartResponse.numOfCartItems} {cartResponse.numOfCartItems ===1 ? 'item' : 'items'}</span> in your cart
          </p>

        </div>

      </div>

    </div>


{/* main Content */}
<div className=" container grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">

  {/* Cart Items - Left Side */}
  <section className="space-y-3">
    {cartResponse.data.products.map((product)=> <CartItems key={product._id} cartInfo={product} />)}
   

        {/* Footer */}
<div className=" container mt-5 border-t border-gray-100 pt-4 py-3">

      <div className="flex flex-wrap items-center justify-between gap-3">

        {/* Continue Shopping */}
        <button
          type="button"
          className="flex items-center gap-2 text-xs font-medium text-green-600 transition-colors hover:text-green-700"
        >
          <span>←</span>
          Continue Shopping
        </button>

        {/* Clear All Items */}
        <button
        onClick={HandleClearCart}
          type="button"
          className="flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-red-500"
        >

          <FontAwesomeIcon
            icon={faTrash}
            className="text-[10px]"
          />

          Clear all items

        </button>

      </div>

    </div>
  </section>

  {/* Order Summary - Right Side */}
  <aside className="lg:sticky lg:top-5">
    <OrderSummary CartInfo ={cartResponse} />
  </aside>

</div>


</div>
    
 
  )
}





  
}
