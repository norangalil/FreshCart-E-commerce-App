import { getAllCategories } from "@/features/catergories/services/getAllCategories";

export default async function HomeCategory() {
  const responseCategories = await getAllCategories();

  return (
    <section className="mx-auto w-full max-w-300 px-6 py-10">

      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
          <span className="h-5 w-1 rounded-full bg-emerald-600" />

          Shop By
          <span className="text-emerald-600">Category</span>
        </h2>

        <a
          href="/categories"
          className="flex items-center gap-2 text-xs font-medium text-emerald-600 hover:text-emerald-700"
        >
          View All Categories →
        </a>
      </div>

      {/* Category Cards */}
      <div className="category-cards grid grid-cols-2 gap-2 md:grid-cols-6">

        {responseCategories.data.map((category) => (
          <div
            key={category._id}
            className="flex h-23 w-full flex-col items-center justify-center gap-2 rounded-md border border-gray-100 bg-white"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-12 w-12 rounded-full object-contain"
            />

            <h3 className="text-[11px] font-medium text-gray-600">
              {category.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}