import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
interface SubCategoryCardProps {
  title: string;
}

export default function SubCategoryCard({
  title,
}: SubCategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 min-h-30 flex flex-col items-start gap-5 hover:shadow-md transition-shadow duration-300 cursor-pointer">

      {/* Icon */}
      <div className="w-17.5 h-17.5 bg-green-50 rounded-2xl flex items-center justify-center">
  <FontAwesomeIcon
    icon={faFolderOpen}
    className="text-green-600 text-3xl"
  />
</div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

    </div>
  );
}