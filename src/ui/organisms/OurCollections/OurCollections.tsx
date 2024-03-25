import Link from "next/link";
import { getCollections } from "@/api/collections";

export const OurCollections = async () => {
	const collections = await getCollections();

	return (
		<ul className="container mx-auto flex shadow-lg">
			<ul className="left flex w-1/2 flex-col">
				<li className="flex min-h-96 flex-col flex-wrap items-center justify-end bg-new-arrival bg-cover bg-center bg-no-repeat py-12 hover:shadow-xl">
					<Link
						className="button_collection cursor-pointer "
						href={`/collections/${collections[1]?.slug}`}
					>
						<span className="text-sm">{collections[1]?.name}</span>
					</Link>
					{/* <p className="text-center text-slate-500">
						{collections[1]?.description}
					</p> */}
				</li>
				<li className="flex min-h-96 flex-col flex-wrap items-center justify-end bg-summer-vibes bg-cover bg-center bg-no-repeat py-12  hover:shadow-xl">
					<Link
						className="button_collection cursor-pointer"
						href={`/collections/${collections[0]?.slug}`}
					>
						<span className="text-sm">{collections[0]?.name}</span>
					</Link>
					{/* <p className="text-center text-slate-500">
						{collections[0]?.description}
					</p> */}
				</li>
			</ul>
			<li className="flex min-h-96 w-1/2 flex-col flex-wrap items-center justify-end bg-elegant-extras bg-cover bg-center bg-no-repeat py-12 hover:shadow-xl">
				<Link
					className="button_collection cursor-pointer"
					href={`/collections/${collections[2]?.slug}`}
				>
					<span className="text-sm">{collections[2]?.name}</span>
				</Link>
				{/* <p className="text-center text-slate-500">
					{collections[2]?.description}
				</p> */}
			</li>
		</ul>
	);
};
