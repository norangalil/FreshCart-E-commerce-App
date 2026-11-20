import Image from "next/image";
import { getAllBrand } from "../services/brands.service";
import { AllBrandType } from "../types/Allbrand.type";

export default async function BrandCard({ brandInfo }: { brandInfo: AllBrandType }) {

  const {name , slug ,  image , _id } = brandInfo

  return (
    <div  className="w-48 h-65 rounded-[22px] border border-gray-100 bg-white p-6 flex flex-col items-center shadow-sm transition-all duration-300">

      {/* Logo Container */}
      <div className="w-full h-46.25 rounded-[18px] bg-gray-50 flex items-center justify-center p-5">

        {/* Logo Background */}
        <div className="w-full h-26.25 bg-white flex items-center justify-center">
          <img
            src={image}
            alt={slug}
            width={150}
            height={100}
            className="object-contain max-w-full max-h-full"
          />
        </div>

      </div>

      {/* Brand Name */}
      <h3 className="mt-4 text-lg font-medium text-gray-900">
        {name}
      </h3>

    </div>
  );
}