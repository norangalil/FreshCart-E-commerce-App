import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function AddressesContent() {
  return (
    <section className="flex-1 min-w-0">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            My Addresses
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your saved delivery addresses
          </p>
        </div>

        <button className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-2xl shadow-lg shadow-green-600/20 transition">
          <FontAwesomeIcon icon={faPlus} />
          Add Address
        </button>

      </div>

      {/* Empty State */}
      <div className="bg-white border border-gray-100 rounded-[30px] min-h-110 flex flex-col items-center justify-center text-center px-5 py-12">

        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-7">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-4xl text-gray-400"
          />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3">
          No Addresses Yet
        </h2>

        <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-8">
          Add your first delivery address to make checkout
          faster and easier.
        </p>

        <button className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-5 rounded-2xl shadow-lg shadow-green-600/20 transition">
          <FontAwesomeIcon icon={faPlus} />
          Add Your First Address
        </button>

      </div>

    </section>
  );
}