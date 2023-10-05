import "./globals.css";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veel Player",
  description: "Veel Player",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image":
      "https://veelapp.com/assets/veel-white-no-reel-3f54901b.svg",
    "twitter:card": "summary_large_image",
    "og:url": "veelapp.com",
    "og:image": "https://veelapp.com/assets/veel-white-no-reel-3f54901b.svg",
    "og:type": "website",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
