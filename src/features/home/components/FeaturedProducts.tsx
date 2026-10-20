
import getAllProducts from "@/features/products/services/getAllProducts";
import ProductCard from "@/features/products/components/ProductCard";

export default async function FeaturedProducts() {
  const productResponse = await getAllProducts();

  return (
    <section className="mx-auto w-full max-w-300 px-6 py-10">

      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
          <span className="h-5 w-1 rounded-full bg-emerald-600" />

          Featured
          <span className="text-emerald-600">Products</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5">

        {/* Product Cards */}

        {productResponse.data.map((product) => <ProductCard 
         key={product._id}
        productInfo={product}/> )}

      </div>

    </section>
  );
}