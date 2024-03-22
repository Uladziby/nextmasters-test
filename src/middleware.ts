import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/(.)cart/sidebar",
		"/categories",
		"/categories/(.*)",
		"/collections/(.*)",
		"/collections",
		"/product/(.*)",
		"/products/(.*)",
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
