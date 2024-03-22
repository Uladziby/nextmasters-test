import Link from "next/link";
import { getCollections } from "@/api/collections";

export const OurCollections = async () => {
	const collections = await getCollections();

	return (
		<ul className="container mx-auto flex shadow-lg">
			<ul className="left flex w-1/2 flex-col">
				<li className="flex min-h-96 flex-col flex-wrap items-center justify-end gap-4 bg-new-arrival bg-cover bg-center bg-no-repeat">
					<Link
						className="button_collection animate-rotating cursor-pointer text-sm "
						href={`/collections/${collections[1]?.slug}`}
					>
						EXPLORE
					</Link>
					<p className="text-center text-slate-500">
						{collections[1]?.description}
					</p>
				</li>
				<li className="flex min-h-96 flex-col flex-wrap items-center justify-end gap-4 bg-summer-vibes bg-cover bg-center bg-no-repeat">
					<Link
						className="button_collection animate-rotating cursor-pointer text-sm "
						href={`/collections/${collections[0]?.slug}`}
					>
						EXPLORE
					</Link>
					<p className="text-center text-slate-500">
						{collections[0]?.description}
					</p>
				</li>
			</ul>
			<li className="flex min-h-96 w-1/2  flex-col flex-wrap items-center justify-end gap-4 bg-elegant-extras bg-cover bg-center bg-no-repeat">
				<Link
					className="button_collection animate-rotating cursor-pointer text-sm"
					href={`/collections/${collections[2]?.slug}`}
				>
					EXPLORE
				</Link>
				<p className="text-center text-slate-500">
					{collections[2]?.description}
				</p>
			</li>
		</ul>
	);
};
