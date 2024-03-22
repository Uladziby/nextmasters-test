type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type?: "button" | "submit" | "reset";
	isDisabled?: boolean;
	formAction?: () => void;
	onClick?: () => void;
	dataTestId?: string;
};

export const Button = ({
	children,
	className,
	type,
	isDisabled,
	formAction,
	onClick,
	dataTestId,
}: ButtonProps) => {
	const btnStyles =
		"flex rounded border-0  text-white  hover:bg-indigo-600 focus:outline-none disabled:cursor-wait disabled:bg-indigo-300";

	return (
		<button
			onClick={onClick}
			type={type}
			disabled={isDisabled}
			className={btnStyles + ` ${className}`}
			formAction={formAction}
			data-testid={dataTestId}
		>
			{children}
		</button>
	);
};
