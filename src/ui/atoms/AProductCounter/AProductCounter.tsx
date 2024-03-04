"use client";
import { useState } from "react";

export const AProductCounter = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [counter, setCount] = useState<number>(0);

	const onIncrement = () => setCount((counter) => counter + 1);
	const onDecrement = () => setCount((counter) => counter - 1);
	return (
		<div className="flex items-center space-x-4">
			<button
				onClick={onDecrement}
				className="rounded-md bg-gray-200 px-4 py-2"
			>
				-
			</button>
			<input readOnly value={counter} />
			<button
				onClick={onIncrement}
				className="rounded-md bg-gray-200 px-4 py-2"
			>
				+
			</button>
			{children}
		</div>
	);
};
