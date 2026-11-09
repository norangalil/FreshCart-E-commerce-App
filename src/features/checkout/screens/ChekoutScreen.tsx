
import ShippingAddress from "@/features/checkout/components/ShippingAddress";
import PaymentMethod from "@/features/checkout/components/PaymentMethod";
import CheckoutOrderSummary from "@/features/checkout/components/CheckoutOrderSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faArrowLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CheckoutScreen() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">

        {/* Page Header */}

            <div className="mb-6">
        
              {/* Breadcrumb */}
              <nav className="mb-4 flex items-center gap-2 text-xs text-gray-500">
        
                <span>Home</span>
        
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[9px] text-gray-300"
                />
        
                <span>Cart</span>
        
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[9px] text-gray-300"
                />
        
                <span className="font-medium text-gray-900">
                  Checkout
                </span>
        
              </nav>
        
              {/* Title & Back Button */}
              <div className="flex flex-wrap items-center justify-between gap-4">
        
                <div className="flex items-center gap-3">
        
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm">
        
                    <FontAwesomeIcon
                      icon={faReceipt}
                      className="text-lg"
                    />
        
                  </div>
        
                  <div>
        
                    <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Complete Your Order
                    </h1>
        
                    <p className="mt-1 text-xs text-gray-500">
                      Review your items and complete your purchase
                    </p>
        
                  </div>
        
                </div>
        
                <button
                  type="button"
                  className="flex items-center gap-2 text-xs font-medium text-green-600 transition-colors hover:text-green-700"
                >
        
                  <FontAwesomeIcon icon={faArrowLeft} />
        
                  Back to Cart
        
                </button>
        
              </div>
        
            </div>

        {/* Checkout Layout */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* Left Column */}
          <div className="min-w-0 space-y-4">

            <ShippingAddress />

            <PaymentMethod />

          </div>

          {/* Right Column */}
          <aside className="w-full lg:sticky lg:top-5">

            <CheckoutOrderSummary />

          </aside>

        </div>

      </div>

    </main>
  );
}
