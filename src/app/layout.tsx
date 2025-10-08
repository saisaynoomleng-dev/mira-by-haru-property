import type { Metadata } from "next";
import "./globals.css";
import { Inconsolata, Spectral } from "@/lib/fonts";

export const metadata: Metadata = {
    title: {
        template: "%s | The Mira",
        default: "The Mira",
    },
    description:
        "The Mira is a modernized apartment complex. It has several amenities, and unique features.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${Inconsolata.variable} ${Spectral.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
