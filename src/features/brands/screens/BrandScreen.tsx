import BrandCard from "../components/brandCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getAllBrand } from "../services/brands.service";
import { AllBrandType } from "../types/Allbrand.type";
import HeaderPages from "@/components/ui/HeaderPages";



export default async function BrandScreen() {

  const responseBrands = await getAllBrand();

  return (
    <>
     <HeaderPages  title="Top Brands"
        subtitle="Shop from your favorite brands"
        type="Brands"/>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-10 gap-y-12 px-8 py-12">

        {responseBrands.data.map((brand: AllBrandType) => (
          <Link href={`/brands/${brand._id}`} key={brand._id}>
            <BrandCard brandInfo={brand} />
          </Link>
        ))}

      </div>
    </>
  );
}