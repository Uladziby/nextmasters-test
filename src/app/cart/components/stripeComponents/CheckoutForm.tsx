import {
	PaymentElement,
	useStripe,
	useElements,
	LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { useState, useEffect, type FormEvent } from "react";
import { Button } from "@/ui/atoms/Button/Button";
import { ASpinner } from "@/ui/atoms/ASpinner/ASpinner";
import { formatCurrency } from "@/utils/formatCurrency";
import { clearCookies } from "@/app/cart/actions";

export function CheckoutForm({ totalAmount }: { totalAmount: number }) {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret",
		);

		if (!clientSecret) {
			return;
		}

		stripe
			.retrievePaymentIntent(clientSecret)
			.then(({ paymentIntent }) => {
				switch (paymentIntent?.status) {
					case "succeeded":
						setMessage("Payment succeeded!");
						break;
					case "processing":
						setMessage("Your payment is processing.");
						break;
					case "requires_payment_method":
						setMessage("Your payment was not successful, please try again.");
						break;
					default:
						setMessage("Something went wrong.");
						break;
				}
			})
			.catch(console.error);
	}, [stripe]);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: "http://localhost:3000/cart/success",
			},
		});

		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message ?? "Something went wrong");
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);

		await clearCookies();
	};

	const paymentElementOptions = {
		layout: "tabs",
	} as const;

	return (
		<>
			<div className="stripe">
				<form id="payment-form" onSubmit={handleSubmit}>
					<label
						htmlFor="Field-emailInput"
						className="mb-4 font-medium text-stone-400"
					>
						Contact information :
					</label>
					<LinkAuthenticationElement className="mb-4" />
					<PaymentElement
						id="payment-element"
						options={paymentElementOptions}
					/>
					<Button
						isDisabled={isLoading || !stripe || !elements}
						id="submit"
						className="ease my-6 block w-full cursor-pointer justify-center rounded-lg border-0 bg-[#5469d4] px-4 py-3 font-sans text-base font-semibold text-white shadow-md transition-all duration-200  hover:contrast-125 disabled:cursor-default disabled:opacity-50"
					>
						<span id="button-text">
							{isLoading ? (
								<ASpinner />
							) : (
								`Pay ${formatCurrency(totalAmount / 100)}`
							)}
						</span>
					</Button>
					{message && (
						<div id="payment-message" className="text-xl font-medium">
							{message}
						</div>
					)}
				</form>
			</div>
		</>
	);
}
