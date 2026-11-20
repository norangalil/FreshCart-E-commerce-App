import HeaderPages from '@/components/ui/HeaderPages'
import { getSpecificCategory } from '@/features/catergories/services/getSpecifcCategory'
import ProductCard from '@/features/products/components/ProductCard'
import getAllProducts from '@/features/products/services/getAllProducts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags , faBoxOpen, faArrowLeft  } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
export default  async function SpecificCategory({params}:{params:Promise <{id:string}>}) {

const {id} = await params
// console.log(id)
 const Response = await   getAllProducts()
 const ProductResponse = Response.data
 console.log(ProductResponse)
const FilteredProduct = ProductResponse.filter(
  (product) => product.category?._id === id
); 

const SpecifCategory = await getSpecificCategory(id)
console.log(SpecifCategory)

return (
    <>

    <HeaderPages 
        title = {SpecifCategory.data.name}
    subtitle={`Shop ${SpecifCategory.data.name} Products`}
type ={SpecifCategory.data.name}
       
        img = {SpecifCategory.data.image}
    />
   
   {FilteredProduct.length > 0 ? <>
   <div className =' container grid grid-cols-2  sm:grid-cols-4 md:grid-cols-5 py-7 gap-5'>

{FilteredProduct.map((product)=> <ProductCard
         key={product._id}
      productInfo={product}

   />)}
</div>
   </> : <>
   
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
      href="/categories"
      className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Explore other Categories
    </Link>

  </div>
   
   </> }

   
 
    </>
  )
}
