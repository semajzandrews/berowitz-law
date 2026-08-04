import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bespoke = localFont({
  src: [
    { path: "../../public/fonts/BespokeSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/BespokeSerif-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/BespokeSerif-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-bespoke",
  display: "swap",
});

const amulya = localFont({
  src: [
    { path: "../../public/fonts/Amulya-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Amulya-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Amulya-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-amulya",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berowitz-law.vercel.app"),
  title: "Law Office of Stephen S. Berowitz · Bloomfield, NJ",
  description:
    "A Bloomfield law practice at 299 Glenwood Ave. Call or text (973) 743-7753 to discuss your matter.",
  openGraph: {
    title: "Law Office of Stephen S. Berowitz",
    description: "A Bloomfield, NJ law practice. Call or text (973) 743-7753.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c2a3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bespoke.variable} ${amulya.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
