import getAllProducts from '@/features/products/services/getAllProducts';
import SearchSidebar from '../components/SearchSidebar'
import ProductCard from '@/features/products/components/ProductCard';
import HeaderPages from '@/components/ui/HeaderPages';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags , faBoxOpen, faArrowLeft  } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
type SearchScreenProps = {
  query: string;
};

export default async function SearchScreen({ query }: SearchScreenProps) {

 const response = await getAllProducts()
 const FilteredProduct = response.data.filter((product)=> product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

  return (
    <>
    
<HeaderPages 
title='Search'
subtitle='Search your Products'
type='search'
/>
  
    
    <div className="py-5 container flex flex-col gap-5 lg:flex-row lg:items-start">

      {/* <SearchSidebar /> */}
    <div className="min-w-0 flex-1">
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4'>

      {FilteredProduct.length > 0 ? (
  FilteredProduct.map((product) => (
    <ProductCard
      key={product._id}
      productInfo={product}
    />
  ))
) : (
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
)}
        </div>
   
      </div>

    </div>
    </>
    
  );
}