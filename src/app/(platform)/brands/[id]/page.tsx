import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags , faBoxOpen, faArrowLeft  } from "@fortawesome/free-solid-svg-icons";
import { } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";
import ProductCard from "@/features/products/components/ProductCard";
import axios, { AxiosRequestConfig } from "axios";
import { constrainedMemory } from "process";
import getAllProducts from "@/features/products/services/getAllProducts";
import HeaderPages from "@/components/ui/HeaderPages";

export default async function BrandDetails ({params}: {params: Promise <{id:string}>}) {

const {id} = await params

async function GetSpecificBrandDetails (){
const options:AxiosRequestConfig = {
    url : `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
    method : 'GET'
}   
 const {data} = await axios.request(options)
 return data
}

const SpecificBrand = await GetSpecificBrandDetails()
console.log(SpecificBrand)
const AllProduct = await getAllProducts()
const filteredProducts = AllProduct.data?.filter(
  (product) => product.brand?._id === id
) || []
  return (

    <>
    <HeaderPages 
    title={SpecificBrand.data.name} 
    subtitle={`Shop ${SpecificBrand.data.name} Products`}
    type="Brands"
    img={SpecificBrand.data.image} 
    brandCategory={SpecificBrand.data.name} />


          <div className=" container ">
    
            {/* Product Cards */}
    
{filteredProducts.length > 0 ?
<>
<h2 className ='mt-5 text-l'> Showing {filteredProducts.length} products </h2>

<div className ='grid grid-cols-2  sm:grid-cols-4 md:grid-cols-5 py-7 gap-5'>
     {filteredProducts.map((product) => (
    <ProductCard
      key={product._id}
      productInfo={product}
    />
  ))}
</div>
</>
: (
  <div className="col-span-full w-full flex flex-col items-center justify-center py-20 px-6 text-center">

    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
      <FontAwesomeIcon
        icon={faBoxOpen}
        className="text-4xl text-gray-400"
      />
    </div>

    <h2 className="text-2xl font-bold text-gray-800 mb-3">
      No Products Found!
    </h2>

    <Link
      href="/brands"
      className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Explore Brands
    </Link>

  </div>
)}




    
          </div>
    </>
  )
}
