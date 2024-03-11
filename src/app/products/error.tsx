"use client";

export default function ErrorPage({
	error,
}: {
	error: Error & { digest: string };
	reset: () => void;
}) {
	return (
		<div>
			<h2>ErrorPage {error.digest}</h2>
		</div>
	);
}
