import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

const navLinks = [
	{ href: "/", title: "Home" },
	{ href: "/products", title: "Products" },
	{ href: "/categories", title: "All Categories" },
	{ href: "/categories/t-shirts", title: "T-Shirt" },
	{ href: "/collections", title: "Collections" },
];

export async function NavBar() {
	return (
		<nav>
			<div className="container mx-auto flex items-center justify-between">
				<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
					{navLinks.map((link) => {
						return (
							<li key={link.href}>
								<ActiveLink
									href={link.href}
									className={`text-blue-400 hover:text-blue-600`}
									activeClassName="underline"
									typeAriaCurrent="page"
								>
									{link.title}
								</ActiveLink>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
