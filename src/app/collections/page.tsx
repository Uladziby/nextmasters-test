import NextImage from "next/image";
import { getCollections } from "@/api/collections";
import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

export default async function CollectionsPage() {
	const collections = await getCollections();

	return (
		<div className="grid grid-cols-1 justify-items-center gap-8 text-gray-700 sm:justify-items-stretch md:grid-cols-3 lg:gap-4">
			{collections.map(({ id, name, description, slug }) => (
				<ActiveLink
					className="flex w-80 cursor-pointer flex-col rounded-xl border-2 border-gray-100 bg-neutral-50 p-3 shadow-lg transition duration-300 hover:scale-105 active:scale-110 sm:w-full sm:flex-row"
					key={id}
					activeClassName={""}
					href={`collections/${slug}`}
					typeAriaCurrent={"page"}
					name={name}
				>
					<div className="relative flex w-full items-center justify-center rounded-xl md:h-72 md:w-1/2">
						<NextImage
							className="h-full w-full rounded-lg"
							src={`https://source.unsplash.com/random?sig=${slug}`}
							alt={name}
							width={200}
							height={200}
						/>
					</div>
					<div className="flex w-full flex-col justify-center space-y-2 pl-3 pt-4 sm:w-1/2 sm:space-y-8 sm:pl-14 sm:pt-0 md:pl-1 lg:pl-4">
						<h2 className="text-2xl font-semibold">{name}</h2>
						<p className="text-gray-500">{description}</p>
					</div>
				</ActiveLink>
			))}
		</div>
	);
}
