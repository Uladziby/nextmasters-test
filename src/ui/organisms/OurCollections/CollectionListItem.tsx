import clsx from "clsx";
import Link from "next/link";

const backgroundImage: { [key: string]: string } = {
	newArrivals: "bg-new-arrivals",
	summerVibes: "bg-summer-vibes",
	elegantExtras: "bg-elegant-extras",
};

export const CollectionListItem = ({
	data,
	className,
}: {
	data: { name: string; slug: string; _id: string };
	className?: string;
}) => {
	const { name, slug, _id } = data;

	return (
		<li
			key={_id}
			className={clsx(
				"flex  flex-col flex-wrap items-center justify-end bg-cover bg-center bg-no-repeat py-12 hover:shadow-xl md:h-48 lg:h-full lg:min-h-96",
				backgroundImage[slug],
				className,
			)}
		>
			<Link
				className="button_collection cursor-pointer"
				href={`/collections/${slug}`}
			>
				<span className="text-sm">{name}</span>
			</Link>
		</li>
	);
};
