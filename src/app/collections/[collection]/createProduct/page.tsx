import { TitleForm } from "@/ui/atoms/TitleForm/TitleForm";
import { CreateProductForm } from "@/ui/organisms/CreateProductForm/CreateProductForm";
import { TITLE_NEW_PRODUCT_FORM } from "@/utils/constatnts";

export default async function NewProduct({
	params,
}: {
	params: { collection: string; collectionSlug: string };
}) {
	return (
		<div className="mx-10 flex flex-col items-center justify-center">
			<TitleForm title={TITLE_NEW_PRODUCT_FORM} />
			<CreateProductForm collection={params.collection} />
		</div>
	);
}
