
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCreditCard,
  faMoneyBill,
  faShieldHalved,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function PaymentMethod() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

      {/* Header */}
      <div className="bg-linear-to-r from-green-600 to-green-700 px-4 py-3 text-white">

        <div className="flex items-center gap-2">

          <FontAwesomeIcon
            icon={faCreditCard}
            className="text-sm"
          />

          <h2 className="text-sm font-bold">
            Payment Method
          </h2>

        </div>

        <p className="mt-1 text-[10px] text-green-100">
          Choose how you'd like to pay
        </p>

      </div>

      {/* Content */}
      <div className="space-y-2 p-4">

        {/* Cash on Delivery */}
        <div className="flex items-center gap-3 rounded-lg border border-green-500 bg-green-50/50 p-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white shadow-sm">

            <FontAwesomeIcon
              icon={faMoneyBill}
              className="text-sm"
            />

          </div>

          <div className="min-w-0 flex-1">

            <h3 className="text-xs font-semibold text-green-700">
              Cash on Delivery
            </h3>

            <p className="mt-1 text-[10px] text-gray-500">
              Pay when your order arrives at your doorstep
            </p>

          </div>

          <FontAwesomeIcon
            icon={faCheckCircle}
            className="shrink-0 text-green-600"
          />

        </div>

        {/* Pay Online */}
        <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-400">

            <FontAwesomeIcon
              icon={faCreditCard}
              className="text-sm"
            />

          </div>

          <div className="min-w-0 flex-1">

            <h3 className="text-xs font-semibold text-gray-800">
              Pay Online
            </h3>

            <p className="mt-1 text-[10px] text-gray-500">
              Secure payment with Credit/Debit Card via Stripe
            </p>

            {/* Payment Cards */}
            <div className="mt-2 flex items-center gap-1">

              <span className="rounded bg-blue-600 px-1 py-0.5 text-[8px] font-bold text-white">
                VISA
              </span>

              <span className="rounded bg-red-500 px-1 py-0.5 text-[8px] font-bold text-white">
                MC
              </span>

              <span className="rounded bg-blue-400 px-1 py-0.5 text-[8px] font-bold text-white">
                AMEX
              </span>

            </div>

          </div>

          <div className="h-4 w-4 shrink-0 rounded-full border-2 border-gray-200" />

        </div>

        {/* Security Banner */}
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-linear-to-r from-green-50 to-gray-50 p-3">

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">

            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-xs"
            />

          </div>

          <div>

            <h4 className="text-[10px] font-semibold text-green-700">
              Secure & Encrypted
            </h4>

            <p className="mt-1 text-[9px] text-green-600">
              Your payment info is protected with 256-bit SSL encryption
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

