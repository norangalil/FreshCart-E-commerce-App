import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
type HeaderPagesProps = {
  title: string;
  subtitle: string; 
  type: string;
  img?: string;
  brandCategory?: string;
}; 

export default function HeaderPages({title , subtitle , type , img , brandCategory}: HeaderPagesProps) {
  return (
  <section className={`w-full bg-linear-to-r from-green-600 to-green-400 px-6 py-5 md:px-20 md:py-16`}>

      {/* Breadcrumbs */}
      <div className="flex items-center gap-3 text-sm text-white/80 mb-8">
        <Link href="/" className="hover:text-white">
          Home
        </Link>

        <span>/</span>

        <span className="text-white font-medium ">
          {type}
        </span>

        {brandCategory && (
          <>
            <span>/</span>
            <span className="text-white font-medium">
              {brandCategory}
            </span>
          </>
        )}
      </div>

      {/* Header Content */}

      <div className="flex gap-5">

         <div className="flex items-center gap-6">

        {/* Icon */}
        {img ?
        <div className="w-20.5 h-20.5 rounded-[22px] bg-white/20 border border-white/20 flex items-center justify-center shadow-lg">
          <img src={img} alt={title} className="w-full h-full object-contain p-1 rounded-[22px]" />   
        </div>
        :
        <div className="w-20.5 h-20.5 rounded-[22px] bg-white/20 border border-white/20 flex items-center justify-center shadow-lg">
          <FontAwesomeIcon
            icon={faTags}
            className="text-white text-3xl"
          />
        </div>
        }
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-2 text-lg md:text-xl text-white/80">
            {subtitle}
          </p>
        </div> 
      </div>
    
    
    </section> )
}
