import { type ReactElement } from "react";

export const WrapperSection = ({ children }: { children: ReactElement }) => {
	return <div className="w-full rounded bg-neutral-100 ">{children}</div>;
};
