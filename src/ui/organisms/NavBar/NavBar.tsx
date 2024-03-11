import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

const navLinks = [
	{ href: "/", title: "Home" },
	{ href: "/products", title: "All" },
	{ href: "/categories", title: "Categories" },
	{ href: "/categories/t-shirts", title: "T-Shirt" },
	{ href: "/collections/", title: "Collections" },
];

export async function NavBar() {
	return (
		<nav className="w-full">
			<div className="container mx-auto flex w-full items-center justify-between">
				<ul className="mt-2 flex w-full flex-col justify-evenly gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
					{navLinks.map((link) => {
						return (
							<li key={link.href} className="flex-1">
								<ActiveLink
									href={link.href}
									className={`flex w-full justify-center pb-6 text-slate-800 hover:text-slate-400`}
									activeClassName="border-b-4 border-slate-400 text-slate-400"
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
