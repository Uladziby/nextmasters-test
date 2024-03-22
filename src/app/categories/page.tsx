import Link from "next/link";
import { getCategories } from "@/api/category";

export default async function CategoriesPage() {
	const categories = await getCategories();

	return (
		<div>
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<Link href={`/categories/${category.slug}/1`}>{category.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
