import { type UrlObject } from "url";
import { LogIn, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AutoCompleteInput } from "@/ui/atoms/AutoCompleteInput/AutoCompleteInput";
import { NavBar } from "@/ui/organisms/NavBar/NavBar";
import { getCartByIdFromCookies } from "@/api/cart";
import { LogoComponent } from "@/ui/molecules/LogoComponent/LogoComponent";

export const Header = async () => {
	const cart = await getCartByIdFromCookies();

	const quantity = cart?.products.reduce(
		(acc, currentVal) => acc + currentVal.quantity!,
		0,
	);

	return (
		<header className="flex border-b py-4">
			<div className="sm:items-centerm flex w-full flex-col items-start justify-between gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
				<NavBar />
				<LogoComponent />
				<div className="flex flex-1 items-center justify-center">
					<AutoCompleteInput />
					<Link
						href={"/cart/sidebar" as unknown as UrlObject}
						className="m-1 flex items-center gap-2 rounded p-2 hover:bg-slate-100"
					>
						<ShoppingCart color="black" size={20} />
						<div className="text-md w-4 font-medium text-black">
							{quantity ?? 0}
						</div>
					</Link>
					<Link href="/sign-in/" className="m-1 rounded p-2 hover:bg-slate-100">
						<SignedIn>
							<UserButton userProfileMode="navigation" />
						</SignedIn>
						<SignedOut>
							<LogIn size={20} strokeWidth={2.25} color="black" />
						</SignedOut>
					</Link>
				</div>
			</div>
		</header>
	);
};
