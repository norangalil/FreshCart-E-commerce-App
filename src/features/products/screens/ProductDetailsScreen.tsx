import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductGallery from "../components/ProductImageDetails";
import {
  faHouse,
  faChevronRight,
  faStar,
  faCartShopping,
  faBolt,
  faHeart,
  faShareNodes,
  faTruck,
  faRotateLeft,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import getSpecificProduct from "../services/getSpecificProduct";

export default  async function ProductDetailsPage({productId}: {productId:string}) {
    console.log("Product Request:", productId);
  const productDetailsResponse = await getSpecificProduct(productId)
  const product = productDetailsResponse.data;

  return (
    <main className="min-h-screen bg-white px-4 py-6 sm:px-8 lg:px-12">

      {/* Breadcrumb */}

      <nav className="mx-auto mb-8 flex max-w-7xl items-center gap-2 overflow-x-auto whitespace-nowrap text-xs text-gray-500">

        <FontAwesomeIcon icon={faHouse} />

        <span>Home</span>
                <FontAwesomeIcon icon={faChevronRight} />


               <span>{product.category.name}</span>


        <FontAwesomeIcon icon={faChevronRight} />

        <span>{product.subcategory[0].name}</span>

        <FontAwesomeIcon icon={faChevronRight} />

        <span className="font-semibold text-gray-900">
          {product.title}
        </span>

      </nav>

      {/* Product Details */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">

        {/* Product Images */}

        <section className="h-fit rounded-xl border border-gray-100 p-3 shadow-sm">

          {/* Main Image */}

          <div>

            {/* <Image
              src="/products/shawl-1.jpg"
              alt="Woman Shawl"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 260px"
            /> */}
<ProductGallery images={product.images} />

          </div>

          {/* Thumbnails */}

          {/* <div className="mt-2 grid grid-cols-4 gap-2">

            {[
              "/products/shawl-2.jpg",
              "/products/shawl-3.jpg",
              "/products/shawl-4.jpg",
              "/products/shawl-1.jpg",
            ].map((image, index) => (

              <div
                key={index}
                className="relative aspect-square overflow-hidden bg-gray-100"
              >

                <Image
                  src={image}
                  alt={`Woman Shawl ${index + 1}`}
                  fill
                  sizes="70px"
                  className="object-contain"
                />

              </div>

            ))}

          </div> */}

        </section>

        {/* Product Information */}

        <section className="rounded-xl border border-gray-100 p-5 shadow-sm sm:p-7">

          {/* Categories */}

          <div className="mb-3 flex items-center gap-2">

            <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-700">
{product.category.name}           
 </span>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-600">
              {product.brand.name} 
            </span>

          </div>

          {/* Product Name */}

          <h1 className="text-2xl font-bold text-gray-900">
            {product.title}
          </h1>

          {/* Rating */}

          <div className="mt-2 flex items-center gap-2">

            <div className="flex items-center gap-0.5 text-yellow-400">

              {[1, 2, 3, 4, 5].map((star) => (

                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className="text-sm"
                />

              ))}

            </div>

            <span className="text-xs text-gray-500">
             {product.ratingsAverage} <span> ( {product.reviews.length}  reviews ) </span>
            </span>

          </div>

          {/* Price */}

       <div className="mt-3 flex items-center gap-3 text-2xl font-bold">

  {product.priceAfterDiscount ? (
    <>
      <span className="text-gray-400 line-through">
        {product.price} EGP
      </span>

      <span className="text-green-800">
        {product.priceAfterDiscount} EGP
      </span>
    </>
  ) : (
    <span>{product.price} EGP</span>
  )}

</div>

          {/* Stock */}

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs">

            <span  />

            { product.quantity > 0 ? <p className="text-green-700 rounded-full"> In Stock </p> : <p className=" rounded-full text-red-500">Out of Stock</p>}

          </div>

          <hr className="my-5 border-gray-100" />

          {/* Description */}

          <p className="text-sm text-gray-500">
           {product.description}
          </p>

          {/* Quantity */}

          <div className="mt-6">

            <p className="mb-3 text-xs font-medium text-gray-700">
              Quantity
            </p>

            <div className="flex items-center gap-3">

              <div className="flex h-10 items-center rounded-md border border-gray-200">

                <button className="px-3 text-gray-500">
                  <IconMinus size={16} stroke={1.5} />
                </button>

                <span className="min-w-8 text-center text-sm text-gray-900">
                  1
                </span>

                <button className="px-3 text-gray-500">
                  <IconPlus size={16} stroke={1.5} />
                </button>

              </div>

              <span className="text-xs text-gray-500">
                {product.quantity} available
              </span>

            </div>

          </div>

          {/* Total Price */}

          <div className="mt-5 flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">

            <span className="text-sm text-gray-600">
              Total Price:
            </span>

            <span className="text-lg font-bold text-green-600">
             {product.priceAfterDiscount? <p>{product.priceAfterDiscount} EGP</p>  : <p> {product.price} EGP </p> } 
            </span>

          </div>

          {/* Buttons */}

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">

            <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-green-600 text-sm font-medium text-white shadow-md">

              <FontAwesomeIcon icon={faCartShopping} />

              Add to Cart

            </button>

            <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-gray-900 text-sm font-medium text-white">

              <FontAwesomeIcon icon={faBolt} />

              Buy Now

            </button>

          </div>

          {/* Wishlist & Share */}

          <div className="mt-4 flex gap-2">

            <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 text-sm text-gray-600">

              <FontAwesomeIcon icon={faHeart} />

              Add to Wishlist

            </button>

            <button className="flex h-10 w-12 items-center justify-center rounded-lg border border-gray-200 text-gray-600">

              <FontAwesomeIcon icon={faShareNodes} />

            </button>

          </div>

          {/* Services */}

          <div className="mt-5 grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 sm:grid-cols-3">

            {/* Free Delivery */}

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">

                <FontAwesomeIcon icon={faTruck} />

              </div>

              <div>

                <p className="text-xs font-medium text-gray-700">
                  Free Delivery
                </p>

                <p className="text-[10px] text-gray-500">
                  Orders over $50
                </p>

              </div>

            </div>

            {/* Return */}

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">

                <FontAwesomeIcon icon={faRotateLeft} />

              </div>

              <div>

                <p className="text-xs font-medium text-gray-700">
                  30 Days Return
                </p>

                <p className="text-[10px] text-gray-500">
                  Money back
                </p>

              </div>

            </div>

            {/* Secure Payment */}

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">

                <FontAwesomeIcon icon={faShieldHalved} />

              </div>

              <div>

                <p className="text-xs font-medium text-gray-700">
                  Secure Payment
                </p>

                <p className="text-[10px] text-gray-500">
                  100% Protected
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}