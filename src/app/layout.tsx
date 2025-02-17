"use client";
import { useReducer } from "react";

import { Nunito_Sans } from "next/font/google";

import { Header } from "@/components/Header";
import { Providers } from "@/redux/provider";
import "./globals.css";


const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["300", "400", "700"],
});

const metadata = {
	title: "Countries API",
	description: "Aplicación de información de paísesExplora información detallada sobre países, incluyendo datos, imágenes de banderas y más.",
};

export default function RootLayout({ children }: ChildrenProps) {
	const [darkMode, setDarkMode] = useReducer(
		(prevMode: boolean) => !prevMode,
		false,
	);

	return (
		<html lang="es">
			<head>
				<meta name="description" content={metadata.description} />
				<title>{metadata.title}</title>
			</head>
			<body className={`${darkMode ? "dark" : "light"}  ${nunitoSans.variable} overflow-hidden`}>
				<Header mode={darkMode} onClick={setDarkMode} />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}


