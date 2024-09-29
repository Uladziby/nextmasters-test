import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactUsTemplate } from "@/ui/organisms/ContactUsTemplate/ContactUsTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	console.log("Sending email", process.env.RESEND_API_KEY);
	try {
		const { data, error } = await resend.emails.send({
			from: "email@mail.3dmodels.dev",
			to: ["yanushevskyv@gamil.com"],
			subject: "Hello world",
			react: ContactUsTemplate({ firstName: "John" }),
		});

		if (error) {
			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
