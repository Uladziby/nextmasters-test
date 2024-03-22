/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products/t-shirts",
				destination: "/products/t-shirts/1",
				permanent: false,
			},
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: false,
			},
			{
				source: "/categories",
				destination: "/categories/t-shirts/1",
				permanent: false,
			},
			{
				source: "/categories/accessories",
				destination: "/categories/accessories/1",
				permanent: false,
			},
			{
				source: "/categories/hoodies",
				destination: "/categories/hoodies/1",
				permanent: false,
			},
		];
	},
	images: {
		domains: ["static-ourstore.hyperfunctor.com", "source.unsplash.com"],
		formats: ["image/webp"],
		remotePatterns: [],
	},
	transpilePackages: ["lucide-react"],
	output: "standalone",
};

//const withMDX = require("@next/mdx")();
export default nextConfig;
