'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFloppyDisk,
  faLock,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { AppState } from "@/store/store";

export default function SettingsContent() {
const {userInfo} = useSelector((state:AppState)=> state.authReducer)

  return (
    <section className="flex-1 min-w-0">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Account Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Update your profile information and change your password
        </p>
      </div>

      {/* Settings Card */}
      <div className="bg-white border border-gray-100 rounded-[30px] shadow-sm overflow-hidden">

        <div className="p-6 md:p-10">

          {/* Profile Header */}
          <div className="flex items-center gap-5 mb-8">

            <div className="w-17.5 h-17.5 rounded-[20px] bg-green-100 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUser}
                className="text-green-600 text-3xl"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Profile Information
              </h2>

              <p className="text-gray-500">
                Update your personal details
              </p>
            </div>

          </div>

          {/* Form */}
          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                defaultValue={userInfo?.name}
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-3">
                Email Address
              </label>

              <input
                type="email"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition"
                placeholder={userInfo?.email}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-3">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="01xxxxxxxxx"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-green-500 transition"
              />
            </div>

            {/* Save Button */}
            <button
              type="button"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-green-600/20 transition"
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
              Save Changes
            </button>

          </form>

        </div>

        {/* Bottom Footer */}
        <div className="bg-gray-50 border-t border-gray-100 h-9"></div>

      </div>

      {/* Password Card */}

       <section className="bg-white border border-gray-200 rounded-[30px] shadow-sm p-6 md:p-10">

  
      <div className="flex items-center gap-5 mb-8">

        <div className="w-17.5 h-17.5 rounded-[20px] bg-amber-100 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faLock}
            className="text-3xl text-amber-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Change Password
          </h2>

          <p className="text-gray-500">
            Update your account password
          </p>
        </div>

      </div>

      {/* Form */}
      <form className="space-y-6">

        {/* Current Password */}
        <div>
          <label className="block text-gray-700 mb-3">
            Current Password
          </label>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter your current password"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 pr-12 outline-none focus:border-green-500 transition"
            />

            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-gray-700 mb-3">
            New Password
          </label>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter your new password"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 pr-12 outline-none focus:border-green-500 transition"
            />

            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Must be at least 6 characters
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 mb-3">
            Confirm New Password
          </label>

          <div className="relative">
            <input
              type="password"
              placeholder="Confirm your new password"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 pr-12 outline-none focus:border-green-500 transition"
            />

            <FontAwesomeIcon
              icon={faEye}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          className="flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-amber-600/20 transition"
        >
          <FontAwesomeIcon icon={faLock} />
          Change Password
        </button>

      </form>

    </section>

    </section>
  );
}