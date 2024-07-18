import { TitleForm } from "@/ui/atoms/TitleForm/TitleForm";
import { CreateProductForm } from "@/ui/organisms/CreateProductForm/CreateProductForm";

export default async function NewProduct({
	params,
}: {
	params: { collection: string; collectionSlug: string };
}) {
	return (
		<div className="mx-10 flex flex-col items-center justify-center">
			<TitleForm title={"Add a new product"} />
			<CreateProductForm />
			<pre>{JSON.stringify(params)}</pre>
		</div>
	);
}
