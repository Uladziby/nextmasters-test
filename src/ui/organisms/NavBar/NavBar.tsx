import { ActiveLink } from "@/ui/atoms/ActiveLink/ActiveLink";
import { navLinks } from "@/utils/constatnts";

export async function NavBar() {
	return (
		<nav className="h-full w-full ">
			<ul
				data-testid="navigation"
				className="flex h-full w-full justify-start gap-20 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2"
			>
				{navLinks.map(({ title, href, name }) => {
					return (
						<li
							key={name}
							className="flex items-center  before:absolute before:bottom-[0] before:left-[0] before:h-[4px] before:w-[0] before:rounded-[2px] before:content-[''] before:[transition:width_0.4s_cubic-bezier(0.22,_0.61,_0.36,_1)] hover:before:w-full hover:before:opacity-100"
						>
							<ActiveLink
								href={href}
								name={name}
								className={`flex w-full justify-center font-light text-slate-800 hover:text-slate-400`}
								activeClassName="border-b-4 border-slate-400 text-slate-400"
								typeAriaCurrent="page"
							>
								{title}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
