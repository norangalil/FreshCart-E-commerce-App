import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFire,  faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

export default function HomeOffers() {
  return (
    <section className="mx-auto w-full max-w-300 px-6 py-6">

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {/* Deal of the Day */}
        <div className="relative overflow-hidden rounded-xl bg-linear-to-r from-emerald-500 to-emerald-700 p-6 text-white">

          {/* Decorative Circle */}
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-white/10" />

          <div className="relative z-10">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px]">
              <FontAwesomeIcon icon={faFire} />
              Deal of the Day
            </span>

            <h2 className="mt-3 text-xl font-bold">
              Fresh Organic Fruits
            </h2>

            <p className="mt-1 text-xs text-white/90">
              Get up to 40% off on selected organic fruits
            </p>

            {/* Discount */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-bold">
                40% OFF
              </span>

              <span className="text-[10px]">
                Use code: <strong>ORGANIC40</strong>
              </span>
            </div>

            {/* Button */}
            <a
              href="/products"
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-emerald-700 transition hover:bg-gray-100"
            >
              Shop Now
              <FontAwesomeIcon icon={faArrowRight} />
            </a>

          </div>
        </div>

        {/* New Arrivals */}
        <div className="relative overflow-hidden rounded-xl bg-linear-to-r from-orange-500 to-rose-500 p-6 text-white">

          {/* Decorative Circle */}
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-white/10" />

          <div className="relative z-10">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px]">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              New Arrivals
            </span>

            <h2 className="mt-3 text-xl font-bold">
              Exotic Vegetables
            </h2>

            <p className="mt-1 text-xs text-white/90">
              Discover our latest collection of premium vegetables
            </p>

            {/* Discount */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-bold">
                25% OFF
              </span>

              <span className="text-[10px]">
                Use code: <strong>FRESH25</strong>
              </span>
            </div>

            {/* Button */}
            <a
              href="/products"
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-orange-600 transition hover:bg-gray-100"
            >
              Explore Now
              <FontAwesomeIcon icon={faArrowRight} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}