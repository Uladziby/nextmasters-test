import { AutoCompleteInput } from "@/ui/atoms/AutoCompleteInput/AutoCompleteInput";
import { NavBar } from "@/ui/organisms/NavBar/NavBar";

export const Header = () => {
	return (
		<header className="sticky top-2 mt-2 flex h-16 min-h-10 items-center justify-between bg-transparent p-2 text-white">
			<div className="mx-auto flex w-9/12 max-w-screen-xl justify-evenly rounded-xl bg-white p-4  lg:px-8 lg:py-4">
				<NavBar />
				<AutoCompleteInput />
			</div>
		</header>
	);
};
