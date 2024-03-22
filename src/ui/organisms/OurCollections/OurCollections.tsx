import Link from "next/link";
import { getCollections } from "@/api/collections";
import { COLLECTION_BUTTON_NAME } from "@/utils/constatnts";

export const OurCollections = async () => {
	const collections = await getCollections();

	return (
		<ul className="container mx-auto flex shadow-lg">
			<ul className="left flex w-1/2 flex-col">
				<li className="flex min-h-96 flex-col flex-wrap items-center justify-between bg-new-arrival bg-cover bg-center bg-no-repeat py-12 hover:shadow-xl">
					<h2 className="text-lg" role="heading">
						{collections[1]?.name}
					</h2>
					<Link
						className="button_collection cursor-pointer "
						href={`/collections/${collections[1]?.slug}`}
					>
						<span className="text-sm">{COLLECTION_BUTTON_NAME}</span>
					</Link>
					<p className="text-center text-slate-500">
						{collections[1]?.description}
					</p>
				</li>
				<li className="flex min-h-96 flex-col flex-wrap items-center justify-between bg-summer-vibes bg-cover bg-center bg-no-repeat py-12  hover:shadow-xl">
					<h2 className="text-lg" role="heading">
						{collections[0]?.name}
					</h2>
					<Link
						className="button_collection cursor-pointer"
						href={`/collections/${collections[0]?.slug}`}
					>
						<span className="text-sm">{COLLECTION_BUTTON_NAME}</span>
					</Link>
					<p className="text-center text-slate-500">
						{collections[0]?.description}
					</p>
				</li>
			</ul>
			<li className="flex min-h-96 w-1/2 flex-col flex-wrap items-center justify-between bg-elegant-extras bg-cover bg-center bg-no-repeat py-12 hover:shadow-xl">
				<h2 className="text-lg" role="heading">
					{collections[2]?.name}
				</h2>
				<Link
					className="button_collection cursor-pointer"
					href={`/collections/${collections[2]?.slug}`}
				>
					<span className="text-sm">{COLLECTION_BUTTON_NAME}</span>
				</Link>
				<p className="text-center text-slate-500">
					{collections[2]?.description}
				</p>
			</li>
		</ul>
	);
};
