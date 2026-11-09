import ProductDetailsScreen from "@/features/products/screens/ProductDetailsScreen";

export default  async function productdetailsPage({params}: {params: Promise <{id:string}>}) {
    const {id} = await params
    return(
       <>
       <ProductDetailsScreen productId={id}/>
       </>
    )
}