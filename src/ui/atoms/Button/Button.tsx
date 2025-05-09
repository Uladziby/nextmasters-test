type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type?: "button" | "submit" | "reset";
	isDisabled?: boolean;
	formAction?: () => void;
	onClick?: () => void;
	dataTestId?: string;
	id?: string;
};

export const Button = ({
	children,
	className,
	type,
	isDisabled,
	formAction,
	onClick,
	dataTestId,
	id,
}: ButtonProps) => {
	const btnStyles =
		"rounded border-0 items-center text-white  hover:bg-indigo-600 focus:outline-none  disabled:color-neutral-400";

	return (
		<button
			id={id}
			role="button"
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
