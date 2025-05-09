"use client";
import * as React from "react";
import { type EmailJSResponseStatus, send } from "@emailjs/browser";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import clsx from "clsx";
import { Button } from "@/ui/atoms/Button/Button";
import { Input } from "@/ui/atoms/Input/Input";
import { TitleForm } from "@/ui/atoms/TitleForm/TitleForm";
import { ATextarea } from "@/ui/atoms/ATextarea/ATextarea";
import {
	CONTACTUS_HEADLINE,
	CONTACTUS_SUBTITLE,
	MESSAGE_SENDED,
} from "@/utils/constatnts";
import { type ContactUsFormShemaType } from "@/ui/organisms/ContactUsTemplate/schema";
import { initEmailService } from "@/utils/emailJsInit";
import { type DataEmailJS } from "@/ui/organisms/ContactUsTemplate/types";

export const ContactUsTemplate = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const dataEmailJS: DataEmailJS = useMemo(
		() => ({
			publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS!,
			serviceId: process.env.NEXT_PUBLIC_SERVICEID_EMAILJS!,
			templateId: process.env.NEXT_PUBLIC_TEMPLATEID_EMAILJS!,
			email: process.env.NEXT_PUBLIC_EMAIL_EMAILJS!,
			name: process.env.NEXT_PUBLIC_NAME_EMAILJS!,
		}),
		[],
	);

	const form = useForm<ContactUsFormShemaType>({
		defaultValues: {
			email: "",
			question: "",
		},
	});

	const { handleSubmit, register, reset, formState } = form;

	useEffect(() => {
		initEmailService();
	}, []);

	const onSubmit = async (formData: ContactUsFormShemaType) => {
		setLoading(true);

		try {
			const response: EmailJSResponseStatus = await send(
				dataEmailJS.serviceId,
				dataEmailJS.templateId,
				{
					from_name: formData.email,
					to_name: dataEmailJS.name,
					from_email: formData.email,
					to_email: dataEmailJS.email,
					message: formData.question,
				},
			);

			if (response.status === 200) {
				setLoading(false);
				reset();
				setMessage(MESSAGE_SENDED);
			}
		} catch (error) {
			setLoading(false);
			setMessage(error as string);
		} finally {
			setLoading(false);

			setTimeout(() => {
				setMessage("");
			}, 10000);
		}
	};

	//TODO Loading logic makes better
	//TODO Add error message
	//TODO Area rewrite to useController

	return (
		<div className="w-full border-t border-neutral-900/10 pt-8">
			<div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
				<div>
					<TitleForm>{CONTACTUS_HEADLINE}</TitleForm>
					<p>{CONTACTUS_SUBTITLE}</p>
					<FormProvider {...form}>
						<form
							className="my-2 w-full lg:col-span-5 lg:pt-2"
							action=""
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="flex flex-wrap justify-between">
								<Input
									register={register("email", { required: true })}
									type="text"
									name="email"
									placeholder="Email"
									error={
										formState.dirtyFields.email
											? formState.errors.email?.message
											: ""
									}
								/>
								<ATextarea
									name="question"
									placeholder="Your Question"
									maxLength={500}
								/>
							</div>
							<div className="mt-6 flex flex-col items-center justify-center">
								<Button
									className="block w-1/4 rounded-full bg-secondary px-10 py-4 text-center text-lg font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
									type="submit"
								>
									{loading ? "Loading..." : "Send"}
								</Button>
								<p
									className={clsx(
										"pt-6 text-secondary transition-all duration-500 ease-linear",
										message ? "opacity-100" : "opacity-0",
									)}
								>
									{message}
								</p>
							</div>
						</form>
					</FormProvider>
				</div>
			</div>
		</div>
	);
};
