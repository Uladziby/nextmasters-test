import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";

const navLinks = [
	{ href: "/", title: "Home" },
	{ href: "/products", title: "All" },
	{ href: "/collections/", title: "Collections" },
	{ href: "/categories/hoodies", title: "Hoodies" },
	{ href: "/categories/t-shirts", title: "T-Shirt" },
	{ href: "/categories/accessories", title: "Accessories" },
];

export async function NavBar() {
	return (
		<nav className="h-full w-full ">
			<ul className="flex h-full w-full justify-evenly lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
				{navLinks.map((link) => {
					return (
						<li
							key={link.href}
							className=" flex items-center  before:absolute before:bottom-[0] before:left-[0] before:h-[4px] before:w-[0] before:rounded-[2px] before:content-[''] before:[transition:width_0.4s_cubic-bezier(0.22,_0.61,_0.36,_1)] hover:before:w-full hover:before:opacity-100"
						>
							<ActiveLink
								href={link.href}
								className={`flex w-full justify-center text-slate-800 hover:text-slate-400`}
								activeClassName="border-b-4 border-slate-400 text-slate-400"
								typeAriaCurrent="page"
							>
								{link.title}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
