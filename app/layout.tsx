import type React from "react";
import type { Metadata } from "next";
import "@fontsource/geist"; // Default weight
import "@fontsource/geist/400.css"; // Optional: specific weight
import "./globals.css";

export const metadata: Metadata = {
  title: "iProcure - Industrial Product Catalog",
  description:
    "Professional B2B product catalog for safety equipment and industrial supplies",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-sans: "Geist", sans-serif;
            --font-mono: "Geist Mono", monospace;
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">
        {/* <AuthProvider> */}
        {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
