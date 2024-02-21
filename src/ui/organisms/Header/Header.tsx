import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

export const Header = () => {
	return (
		<header className="flex h-16 min-h-10 items-center justify-between bg-gray-900 p-4 text-white">
			<nav className="w-full">
				<ul className="m-2 flex w-full justify-center">
					<li className="px-2">
						<ActiveLink
							href="/"
							className={`text-blue-400 hover:text-blue-600`}
							activeClassName={"underline"}
						>
							Home
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							href="/products/1"
							className={`text-blue-400 hover:text-blue-600`}
							activeClassName="underline"
						>
							Products
						</ActiveLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
