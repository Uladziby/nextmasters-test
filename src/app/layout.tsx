import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/ui/organisms/Header/Header";
import { Footer } from "@/ui/organisms/Footer/Footer";
import { firaSans } from "@/utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Store",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" className={`${firaSans.variable}`}>
				<body className={`${inter.className} bg-slate-100`}>
					<Header />
					<main className="my-12 flex flex-grow items-center justify-center">
						{children}
					</main>
					<Footer />
					{modal}
				</body>
			</html>
		</ClerkProvider>
	);
}
