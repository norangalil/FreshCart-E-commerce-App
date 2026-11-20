import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCompass,
  faArrowLeft,
  faHouse
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-16 bg-white">

      <div className="flex flex-col items-center text-center max-w-lg">

        {/* Icon */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCompass}
              className="text-6xl text-green-600"
            />
          </div>

          <span className="absolute -top-2 -right-2 w-9 h-9 bg-green-600 rounded-full border-4 border-white"></span>
        </div>

        <h1 className="text-5xl font-extrabold text-green-600 mb-2 tracking-tight">
          404
        </h1>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found!
        </h2>

        <p className="text-gray-500 text-base leading-7 mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/30 hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faHouse} />
          Back to Home
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>

        <p className="text-sm text-gray-400 mt-8">
          Don't worry, let's find something better!
        </p>

      </div>
    </div>
  )
}