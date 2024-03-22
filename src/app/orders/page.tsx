import { useUser } from "@clerk/nextjs";

export default function OrdersPage() {
	const user = useUser();

	return <div>{JSON.stringify(user, null, 2)}</div>;
}
