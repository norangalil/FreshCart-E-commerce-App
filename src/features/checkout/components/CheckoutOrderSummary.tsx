import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faTruck,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { CartApiResponse, ErrorCartResponse } from "@/features/cart/types/cart.types";


type Props = {
  cartInfo: CartApiResponse | ErrorCartResponse | null
}
export default  function CheckoutOrderSummary({cartInfo }: Props) 
 {
 if (!cartInfo) return <p> Loading...</p>

if (cartInfo.status === 'fail') {
  return <p>{cartInfo.message}</p>
}
 
  return (
    <section className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

      {/* Header */}
      <div className="bg-linear-to-r from-green-600 to-green-700 px-4 py-3 text-white">

        <div className="flex items-center gap-2">

          <FontAwesomeIcon
            icon={faLock}
            className="text-xs"
          />

          <h2 className="text-sm font-bold">
            Order Summary
          </h2>

        </div>

        <p className="mt-1 text-[10px] text-green-100">
           {cartInfo.data.products.length} items
        </p>

      </div>

      {/* Content */}
      <div className="p-3">

        {/* Products List */}
        <div className="max-h-52 space-y-2 overflow-y-auto pr-1">

{cartInfo.data.products.map ((item)=>

<div
              key={item.product._id}
              className="flex items-center gap-2 rounded-lg bg-gray-50 p-2"
            >

              {/* Product Image */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">

                <img
                  src= {item.product.imageCover}
                  alt={item.product.title}
                  className="h-full w-full object-contain p-1"
                />

              </div>

              {/* Product Info */}
              <div className="min-w-0 flex-1">

                <h3 className="truncate text-[10px] font-semibold text-gray-700">
                 {item.product.title}
                </h3>

                <p className="mt-1 text-[9px] text-gray-400">
                  {item.count} × {item.price} EGP
                </p>

              </div>

              {/* Product Total */}
              <span className="shrink-0 text-[10px] font-bold text-gray-700">
             {item.count * item.price} EGP
              </span>

            </div>

)}
        
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-gray-100" />

        {/* Price Details */}
        <div className="space-y-3">

          <div className="flex items-center justify-between text-xs">

            <span className="text-gray-500">
              Subtotal
            </span>

            <span className="font-medium text-gray-700">
             {cartInfo.data.totalCartPrice} EGP
            </span>

          </div>

          <div className="flex items-center justify-between text-xs">

            <span className="flex items-center gap-2 text-gray-500">

              <FontAwesomeIcon icon={faTruck} />

              Shipping

            </span>

            <span className="font-semibold text-green-600">
              FREE
            </span>

          </div>

        </div>

        {/* Divider */}
        <div className="my-3 border-t border-gray-100" />

        {/* Total */}
        <div className="flex items-center justify-between">

          <span className="text-sm font-bold text-gray-800">
            Total
          </span>

          <div className="flex items-baseline gap-1">

            <span className="text-lg font-bold text-green-600">
             {cartInfo.data.totalCartPrice}
            </span>

            <span className="text-[10px] text-gray-400">
              EGP
            </span>

          </div>

        </div>

        {/* Place Order */}
        <button
          type="submit"
          className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-green-600 to-green-700 text-xs font-semibold text-white shadow-md shadow-green-600/20 transition-all hover:shadow-lg"
        >

          <FontAwesomeIcon
            icon={faLock}
            className="text-xs"
          />

          Place Order

        </button>

        {/* Security Features */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[9px] text-gray-500">

          <span className="flex items-center gap-1">

            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-green-500"
            />

            Secure

          </span>

          <span className="text-gray-300">|</span>

          <span className="flex items-center gap-1">

            <FontAwesomeIcon
              icon={faTruck}
              className="text-blue-500"
            />

            Fast Delivery

          </span>

          <span className="text-gray-300">|</span>

          <span className="flex items-center gap-1">

            <span className="text-orange-500">■</span>

            Easy Returns

          </span>

        </div>

      </div>

    </section>
  );
}

