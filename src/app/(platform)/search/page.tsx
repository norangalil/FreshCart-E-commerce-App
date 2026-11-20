import SearchScreen from "@/features/search/screen/SearchScreen";

type SearchPageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function SearchPage({searchParams}: SearchPageProps)
 {

  const { query } = await searchParams;

  return (
    <div>
      <SearchScreen query={query || ""} />
    </div>
  );
}