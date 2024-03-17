import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/ui/organisms/Header/Header";
import { Footer } from "@/ui/organisms/Footer/Footer";
import { firaSans } from "@/utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Baby Shop",
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
			<html lang="en" className={`${firaSans.variable} h-full`}>
				<body className={`${inter.className} h-full bg-slate-100`}>
					<div className="flex min-h-full w-full flex-col">
						<Header />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
					{modal}
				</body>
			</html>
		</ClerkProvider>
	);
}
