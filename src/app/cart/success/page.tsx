import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartSucccesPage({
	searchParams,
}: {
	searchParams: { sessionId: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key not found");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.retrieve(
		searchParams.sessionId,
	);

	return (
		<div>
			<h2>Thank you for your purchase</h2>
			<p>{session.payment_status}</p>
		</div>
	);
}
