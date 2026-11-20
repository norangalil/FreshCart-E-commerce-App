'use client'

import { getAllBrand } from "@/features/brands/services/brands.service"
import { AllBrandType } from "@/features/brands/types/Allbrand.type"
import { getAllCategories } from "@/features/catergories/services/getAllCategories"
import { CategoryType } from "@/features/catergories/types/getAllCategoriesTypes"
import { useEffect, useState } from 'react'

const priceFilters = [
  "Under 500",
  "Under 1K",
  "Under 5K",
  "Under 10K",
]

export default  function SearchSidebar() {

const [categories, setCategories] = useState<CategoryType[]> ([])
const [brand , setBrand] = useState<AllBrandType[]>([])

useEffect(()=>{
  async function   getBrandsName() {
    const response = await getAllBrand()
    setBrand(response.data)
  }
  getBrandsName()
} ,[])

  useEffect(() => {
    async function GetCategories() {
      const response = await getAllCategories()
      setCategories(response.data)
    }
    GetCategories()
  }, [])
  
  return (
    <aside className="w-full rounded-xl border border-gray-100 bg-white p-4 shadow-sm lg:sticky lg:top-20 lg:w-52 lg:self-start">

      {/* Categories */}
      <div className="border-b border-gray-100 pb-5">

        <h3 className="mb-3 text-sm font-bold text-gray-800">
          Categories
        </h3>

        <div className="max-h-40 space-y-2 overflow-y-auto">

          {categories.map((category) => (
            <label
              key={category._id}
              className="flex cursor-pointer items-center gap-2 text-xs text-gray-600 hover:text-green-600"
            >
              <input
                type="checkbox"
                className="size-3.5 accent-green-600"
              />
              {category.name}
            </label>
          ))}

        </div>
      </div>


      {/* Price Range */}
      <div className="border-b border-gray-100 py-5">

        <h3 className="mb-4 text-sm font-bold text-gray-800">
          Price Range
        </h3>

        <div className="mb-3 grid grid-cols-2 gap-2">

          <div>
            <label className="mb-1 block text-[10px] text-gray-500">
              Min (EGP)
            </label>

            <input
              type="number"
              placeholder="0"
              className="w-full rounded-lg border border-gray-200 px-2 py-2 text-xs outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-[10px] text-gray-500">
              Max (EGP)
            </label>

            <input
              type="number"
              placeholder="No limit"
              className="w-full min-w-0 rounded-lg border border-gray-200 px-2 py-2 text-xs outline-none focus:border-green-500"
            />
          </div>

        </div>

        <div className="flex flex-wrap gap-1.5">

          {priceFilters.map((filter) => (
            <button
              key={filter}
              className="rounded-full bg-gray-100 px-2.5 py-1.5 text-[10px] text-gray-600 transition-colors hover:bg-green-100 hover:text-green-700"
            >
              {filter}
            </button>
          ))}

        </div>

      </div>


      {/* Brands */}
      <div className="pt-5">

        <h3 className="mb-3 text-sm font-bold text-gray-800">
          Brands
        </h3>

        <div className="max-h-48 space-y-2 overflow-y-auto">

          {brand.map((brand) => (
            <label
            key={brand._id}
              className="flex cursor-pointer items-center gap-2 text-xs text-gray-600 hover:text-green-600"
            >
              <input
                type="checkbox"
                className="size-3.5 accent-green-600"
              />

              {brand.name}
            </label>
          ))}

        </div>

      </div>

    </aside>
  )
}