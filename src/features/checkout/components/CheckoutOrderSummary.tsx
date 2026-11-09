
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLock,
  faTruck,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    title: "Woman Shawl",
    image: "/products/shawl.jpg",
    quantity: 2,
    price: 149,
    total: 298,
  },
  {
    id: 2,
    title: "Woman Standard Fit Knitted Cardigan",
    image: "/products/cardigan.jpg",
    quantity: 1,
    price: 499,
    total: 499,
  },
  {
    id: 3,
    title: "Woman Shawl",
    image: "/products/shawl-2.jpg",
    quantity: 2,
    price: 349,
    total: 698,
  },
  {
    id: 4,
    title: "Woman Bordeaux Long Sleeve Blouse",
    image: "/products/blouse.jpg",
    quantity: 1,
    price: 499,
    total: 499,
  },
];

export default function CheckoutOrderSummary() {
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
          4 items
        </p>

      </div>

      {/* Content */}
      <div className="p-3">

        {/* Products List */}
        <div className="max-h-52 space-y-2 overflow-y-auto pr-1">

          {products.map((product) => (

            <div
              key={product.id}
              className="flex items-center gap-2 rounded-lg bg-gray-50 p-2"
            >

              {/* Product Image */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain p-1"
                />

              </div>

              {/* Product Info */}
              <div className="min-w-0 flex-1">

                <h3 className="truncate text-[10px] font-semibold text-gray-700">
                  {product.title}
                </h3>

                <p className="mt-1 text-[9px] text-gray-400">
                  {product.quantity} × {product.price} EGP
                </p>

              </div>

              {/* Product Total */}
              <span className="shrink-0 text-[10px] font-bold text-gray-700">
                {product.total}
              </span>

            </div>

          ))}

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
              1,994 EGP
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
              1,994
            </span>

            <span className="text-[10px] text-gray-400">
              EGP
            </span>

          </div>

        </div>

        {/* Place Order */}
        <button
          type="button"
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

