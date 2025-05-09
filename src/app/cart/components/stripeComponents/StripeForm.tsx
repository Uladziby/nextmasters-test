"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "@/app/cart/components/stripeComponents/CheckoutForm";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable");
}

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export const StripeForm = ({
	clientSecret,
	totalAmount,
}: {
	clientSecret: string;
	totalAmount: number;
}) => {
	return (
		<Elements
			options={{
				appearance: {
					theme: "stripe",
					labels: "floating",
					rules: { ".Label": { opacity: "1" } },
				},
				clientSecret,
			}}
			stripe={stripePromise}
		>
			<CheckoutForm totalAmount={totalAmount} />
		</Elements>
	);
};
