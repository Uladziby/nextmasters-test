import { type ComponentProps, type ChangeEvent } from "react";
import {
	type FieldValues,
	FormProvider,
	type SubmitHandler,
	type UseFormReturn,
} from "react-hook-form";

interface FormProps<T extends FieldValues>
	extends Omit<ComponentProps<"form">, "onSubmit"> {
	form: UseFormReturn<T>;
	onSubmit?: SubmitHandler<T>;
	name?: string;
	onChange?: (event: ChangeEvent<HTMLFormElement>) => void;
}

export const AForm = <T extends FieldValues>({
	form,
	onSubmit,
	children,
	name,
	onChange,
	...props
}: FormProps<T>) => (
	<FormProvider {...form}>
		<form
			onSubmit={onSubmit && form.handleSubmit(onSubmit)}
			onChange={onChange}
			name={name}
			{...props}
		>
			<fieldset className="border-none" disabled={form.formState.isSubmitting}>
				{children}
			</fieldset>
		</form>
	</FormProvider>
);
