import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faBookmark,
  faPlus,
  faLocationDot,
  faPhone,
  faCity,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ShippingAddress() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

      {/* Header */}
      <div className="bg-linear-to-r from-green-600 to-green-700 px-4 py-3 text-white">

        <div className="flex items-center gap-2">

          <FontAwesomeIcon
            icon={faHouse}
            className="text-sm"
          />

          <h2 className="text-sm font-bold">
            Shipping Address
          </h2>

        </div>

        <p className="mt-1 text-[10px] text-green-100">
          Where should we deliver your order?
        </p>

      </div>

      {/* Content */}
      <div className="p-4">

        {/* Saved Addresses */}
        <div>

          <div className="mb-2 flex items-center gap-2">

            <FontAwesomeIcon
              icon={faBookmark}
              className="text-xs text-green-600"
            />

            <h3 className="text-xs font-semibold text-gray-700">
              Saved Addresses
            </h3>

          </div>

          <p className="mb-3 text-[10px] text-gray-500">
            Select a saved address or enter a new one below
          </p>

          {/* Saved Address Card */}
          <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500">

              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-sm"
              />

            </div>

            <div className="min-w-0 flex-1">

              <h4 className="text-xs font-semibold text-gray-800">
                Sadat City
              </h4>

              <p className="mt-1 text-[10px] text-gray-500">
                Sadat City
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-[9px] text-gray-400">

                <span className="flex items-center gap-1">

                  <FontAwesomeIcon icon={faPhone} />

                  01097514862

                </span>

                <span className="flex items-center gap-1">

                  <FontAwesomeIcon icon={faCity} />

                  Sadat City

                </span>

              </div>

            </div>

          </div>

          {/* Add Different Address */}
          <button
            type="button"
            className="mt-2 flex w-full items-center gap-3 rounded-lg border border-dashed border-green-400 bg-green-50/70 p-3 text-left transition-colors hover:bg-green-50"
          >

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white">

              <FontAwesomeIcon
                icon={faPlus}
                className="text-sm"
              />

            </div>

            <div>

              <h4 className="text-xs font-semibold text-green-700">
                Use a different address
              </h4>

              <p className="mt-1 text-[10px] text-gray-500">
                Enter a new shipping address manually
              </p>

            </div>

          </button>

        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-100" />

        {/* Delivery Information */}
        <div className="mb-4 flex items-start gap-2 rounded-lg bg-green-50 p-3">

          <FontAwesomeIcon
            icon={faInfoCircle}
            className="mt-0.5 text-sm text-blue-500"
          />

          <div>

            <h4 className="text-xs font-medium text-blue-700">
              Delivery Information
            </h4>

            <p className="mt-1 text-[10px] text-blue-600">
              Please ensure your address is accurate for smooth delivery
            </p>

          </div>

        </div>

        {/* Form Fields */}
        <div className="space-y-4">

          {/* City */}
          <div>

            <label className="mb-2 block text-[10px] font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>

            <div className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-3 transition-colors focus-within:border-green-500">

              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-gray-500">

                <FontAwesomeIcon
                  icon={faCity}
                  className="text-[10px]"
                />

              </div>

              <input
                type="text"
                placeholder="e.g. Cairo, Alexandria, Giza"
                className="w-full bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-400"
              />

            </div>

          </div>

          {/* Street Address */}
          <div>

            <label className="mb-2 block text-[10px] font-medium text-gray-700">
              Street Address <span className="text-red-500">*</span>
            </label>

            <div className="flex min-h-16 items-start gap-2 rounded-lg border border-gray-200 p-3 transition-colors focus-within:border-green-500">

              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-500">

                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[10px]"
                />

              </div>

              <textarea
                rows={2}
                placeholder="Street name, building number, floor, apartment..."
                className="w-full resize-none bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-400"
              />

            </div>

          </div>

          {/* Phone Number */}
          <div>

            <label className="mb-2 block text-[10px] font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <div className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-3 transition-colors focus-within:border-green-500">

              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-500">

                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[10px]"
                />

              </div>

              <input
                type="tel"
                placeholder="01xxxxxxxxx"
                className="w-full bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-400"
              />

              <span className="hidden shrink-0 text-[9px] text-gray-400 sm:block">
                Egyptian numbers only
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

