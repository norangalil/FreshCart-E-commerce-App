'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import homeslider from '@/assets/images/home-slider-1.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HomeSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-50 md:h-75 rounded-lg"
    >

      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeslider.src})`,
          }}
        >

          {/* Green Overlay */}
          <div className="absolute inset-0 bg-green-600/80" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center px-8 md:px-16">

            <div className="max-w-md text-white">

              <h2 className="text-xl md:text-3xl font-bold leading-tight">
                Fresh Products Delivered
                <br />
                to your Door
              </h2>

              <p className="mt-3 text-xs md:text-sm">
                Get 20% off your first order
              </p>

              <div className="mt-5 flex gap-2">

                <button className="rounded bg-white px-5 py-2 text-sm font-medium text-green-600 hover:bg-gray-100">
                  Shop Now
                </button>

                <button className="rounded border border-white px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-green-600">
                  View Deals
                </button>

              </div>

            </div>

          </div>
        </div>
      </SwiperSlide>


      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeslider.src})`,
          }}
        >

          <div className="absolute inset-0 bg-green-600/80" />

          <div className="relative z-10 flex h-full items-center px-8 md:px-16">

            <div className="max-w-md text-white">

              <h2 className="text-xl md:text-3xl font-bold">
                Best Quality Products
                <br />
                at Best Prices
              </h2>

              <p className="mt-3 text-xs md:text-sm">
                Discover our latest offers
              </p>

              <button className="mt-5 rounded bg-white px-5 py-2 text-sm font-medium text-green-600">
                Explore Now
              </button>

            </div>

          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  )
}