import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profixx",
  description: "Cloud Infrastracture agenecy",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
