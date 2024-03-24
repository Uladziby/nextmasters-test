import Link from "next/link";
import { getCategories } from "@/api/category";

export const CategoriesList = async () => {
	const categories = await getCategories();

	return (
		<div>
			<ul className="mb-2 grid gap-1 md:mb-8 md:grid-cols-3 md:gap-8">
				{categories.map((category) => (
					<li key={category.id}>
						<Link
							className="grid h-12 w-full place-items-center rounded-l bg-white text-sm hover:shadow-md"
							href={`/categories/${category.slug}/1`}
						>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
