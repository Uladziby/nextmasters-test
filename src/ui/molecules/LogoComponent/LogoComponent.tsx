import Link from "next/link";
import { LOGO_TEXT } from "@/utils/constatnts";

export const LogoComponent = () => {
	return (
		<div className="flex flex-1 items-center justify-center ">
			<Link href={"/"}>
				<h1 className="whitespace-nowrap text-4xl font-heavy text-secondary hover:">
					{LOGO_TEXT}
				</h1>
			</Link>
		</div>
	);
};
