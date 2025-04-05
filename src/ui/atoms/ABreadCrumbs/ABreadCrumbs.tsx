"use client";
import { type UrlObject } from "url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { type ABreadCrumbsProps } from "@/ui/atoms/ABreadCrumbs/types";

export const ABreadCrumbs = ({
	homeElement,
	separator,
	containerClasses,
	listClasses,
	activeClasses,
	capitalizeLinks,
}: ABreadCrumbsProps) => {
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter(Boolean);
	const showBreadcrumbs = pathSegments.length > 0;

	// Define redirects for specific segments
	const redirectMap: Record<string, string> = {
		collections: "/",
		product: "/",
	};

	const formatSegment = (segment: string) =>
		capitalizeLinks
			? segment.charAt(0).toUpperCase() + segment.slice(1)
			: segment;

	return (
		<div className={showBreadcrumbs ? "block" : "hidden"}>
			<ul className={containerClasses}>
				<li className={listClasses}>
					<Link
						href="/"
						className="font-normal text-slate-800 hover:text-slate-400"
					>
						{homeElement}
					</Link>
				</li>

				{showBreadcrumbs && separator}

				{pathSegments.map((segment, index) => {
					const isLast = index === pathSegments.length - 1;
					const label = formatSegment(segment.toLowerCase());

					// Check redirect map, otherwise build normal path
					const redirectHref =
						redirectMap[segment.toLowerCase()] ??
						`/${pathSegments.slice(0, index + 1).join("/")}`;

					const commonClasses = `${listClasses} ${isLast ? activeClasses : ""}`;

					return (
						<Fragment key={redirectHref + index}>
							<li>
								{isLast ? (
									<span className={commonClasses}>{label}</span>
								) : (
									<Link
										href={redirectHref as unknown as UrlObject}
										className={commonClasses}
									>
										{label}
									</Link>
								)}
							</li>
							{!isLast && separator}
						</Fragment>
					);
				})}
			</ul>
		</div>
	);
};
