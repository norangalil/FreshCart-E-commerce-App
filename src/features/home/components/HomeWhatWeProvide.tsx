import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faShieldHalved,
  faArrowRotateLeft,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeWhatWeProvide() {
  return (
    <section className="mx-auto w-full max-w-300 px-6 py-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

        {/* Free Shipping */}
        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500">
            <FontAwesomeIcon icon={faTruck} />
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-800">
              Free Shipping
            </h3>
            <p className="text-[10px] text-gray-500">
              On orders over 500 EGP
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
            <FontAwesomeIcon icon={faShieldHalved} />
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-800">
              Secure Payment
            </h3>
            <p className="text-[10px] text-gray-500">
              100% secure transactions
            </p>
          </div>
        </div>

        {/* Easy Returns */}
        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
            <FontAwesomeIcon icon={faArrowRotateLeft} />
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-800">
              Easy Returns
            </h3>
            <p className="text-[10px] text-gray-500">
              14-day return policy
            </p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-500">
            <FontAwesomeIcon icon={faHeadset} />
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="text-[10px] text-gray-500">
              Dedicated support team
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}