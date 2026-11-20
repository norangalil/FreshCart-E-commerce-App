import HeaderPages from '@/components/ui/HeaderPages'
import CategoryCard from '../components/CategoryCard'
import { getAllCategories } from '../services/getAllCategories'

export default async function CategoryScreen() {
    
const ResponseCategories = await getAllCategories()

  return (

<>
<HeaderPages title=" All Categories" subtitle="Browse our wide range of product categories
" type="Categories"  />

<div className=' container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-10 px-5'>


{ResponseCategories.data.map((category) => (
  <CategoryCard
    key={category._id}
    CategoryInfo={category}
  />
))}


</div>




</>
  )
}
