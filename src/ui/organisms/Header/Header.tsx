import { type UrlObject } from "url";
import { LogIn, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AutoCompleteInput } from "@/ui/atoms/AutoCompleteInput/AutoCompleteInput";
import { NavBar } from "@/ui/organisms/NavBar/NavBar";
import { getCartByIdFromCookies } from "@/api/cart";

export const Header = async () => {
	const cart = await getCartByIdFromCookies();
	const quantity = cart?.products.reduce(
		(acc, currentVal) => acc + currentVal.quantity!,
		0,
	);

	return (
		<header className="sticky top-2 z-10 mx-auto flex min-h-20 w-4/5 max-w-screen-xl items-center justify-between rounded-md bg-transparent bg-white  text-white  [box-shadow:rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] lg:px-8 lg:pb-0">
			<NavBar />
			<div className="flex items-center">
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
		</header>
	);
};
