import { getCategories } from "@/api/category";

export default async function CategoriesPage() {
	const categories = await getCategories();

	return (
		<div>
			<h1>CategoriesPage</h1>
			{categories.map((category) => (
				<div key={category.id}>{category.name}</div>
			))}
		</div>
	);
}
