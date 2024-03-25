import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="container flex h-full items-center justify-center">
			<SignIn />
		</section>
	);
}
