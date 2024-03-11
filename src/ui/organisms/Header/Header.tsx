import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { AutoCompleteInput } from "@/ui/atoms/AutoCompleteInput/AutoCompleteInput";
import { NavBar } from "@/ui/organisms/NavBar/NavBar";
import { Button } from "@/ui/atoms/Button/Button";
import { getCartByIdFromCookies } from "@/api/cart";

export const Header = async () => {
	const cart = await getCartByIdFromCookies();
	const quantity = cart?.items.reduce(
		(acc, currentVal) => acc + currentVal.quantity,
		0,
	);

	return (
		<header className="sticky top-2 mt-2 flex h-16 min-h-10 items-center justify-between bg-transparent p-2 text-white">
			<div className="mx-auto flex w-4/5 max-w-screen-xl justify-evenly gap-4 rounded-md bg-white p-4  lg:px-8 lg:pb-0 lg:pt-4">
				<NavBar />
				<AutoCompleteInput />
				<div className="flex">
					<Link href="/(.)cart/sidebar" className="flex items-center gap-2">
						<ShoppingCart color="black" />
						<div className="w-4 text-black">{quantity}</div>
					</Link>
					<Button>
						<User color="black" />
					</Button>
				</div>
			</div>
		</header>
	);
};
