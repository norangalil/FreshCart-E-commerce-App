import Image from "next/image";
import { ApiResponseCategory, CategoryType } from "../types/getAllCategoriesTypes";
import Link from "next/link";



export default async function CategoryCard({CategoryInfo}: {CategoryInfo : CategoryType}) {
    const {name , _id , slug , image} = CategoryInfo

  return (

    <Link href={`/categories/${_id}`}>
     <div
    
    className="bg-white lg:w-full rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col items-center gap-4 hover:shadow-md transition-shadow duration-300 cursor-pointer">

      <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
        <img
          src={image}
          alt= {slug}
          className="object-cover"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-900 text-center">
        {name}
      </h3>

    </div>
    </Link>
   
  );
}