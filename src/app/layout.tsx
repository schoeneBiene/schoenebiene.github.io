import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "goodbee",
	description: "I do stuff, sometimes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="bg-gradient-to-tr from-gray-900 to-gray-600">
					{children}
				</div>
			</body>
		</html>
	);
}
