import { redirect } from "next/navigation";
import Stripe from "stripe";
import { getCartDataForStripe } from "@/api/cart";
import { StripeForm } from "@/app/cart/components/stripeComponents/StripeForm";
import { ATitle } from "@/ui/atoms/ATitle/ATitle";

export async function StripePart() {
	const cart = await getCartDataForStripe();
	if (!cart) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const totalAmount = cart.products.reduce(
		(acc, item) => acc + (item.price * item.quantity ?? 0),
		0,
	);

	const paymentIntent = await stripe.paymentIntents.create({
		payment_method_types: ["card", "blik", "p24"],
		metadata: {
			cartId: cart.cartId,
		},
		currency: "pln",
		amount: totalAmount,
		description: "Payment for products",
	});

	if (!paymentIntent.client_secret) {
		throw new Error("Missing client_secret");
	}

	return (
		<section className="w-full lg:w-5/12">
			<ATitle className="title-h2 mb-10 border-b-0 text-left">Checkout</ATitle>
			<StripeForm
				clientSecret={paymentIntent.client_secret}
				totalAmount={totalAmount}
			/>
		</section>
	);
}
