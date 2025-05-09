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
	data: {
		name: string;
		slug: string;
		_id: string;
		image: { url: string };
	};
	className?: string;
}) => {
	const {
		name,
		slug,
		_id,
		image: { url },
	} = data;

	const imageUrl = url ? url : backgroundImage[slug];

	return (
		<>
			<div
				key={_id}
				className={clsx(
					"flex flex-col flex-wrap items-center justify-end  bg-cover bg-center bg-no-repeat py-20 hover:shadow-xl group-hover:rotate-1 group-hover:scale-110 lg:h-full lg:min-h-96",
					imageUrl,
					className,
				)}
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<Link
				className="button_collection   absolute bottom-5 right-1/3 cursor-pointer hover:text-secondary"
				href={`/collections/${slug}`}
			>
				<span className="text-md font-medium  hover:text-secondary">
					{name}
				</span>
			</Link>
		</>
	);
};
