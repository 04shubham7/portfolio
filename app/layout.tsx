import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhamkumar.com"), // Replace with actual domain
  title: {
    default: "Shubham Kumar | Full-Stack Developer",
    template: "%s | Shubham Kumar"
  },
  description: "Portfolio of Shubham Kumar, a Full-Stack Developer and B.Tech CSE student at IIIT Bhagalpur, specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Shubham Kumar", "Full-Stack Developer", "React", "Next.js", "Portfolio", "IIIT Bhagalpur"],
  authors: [{ name: "Shubham Kumar" }],
  creator: "Shubham Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhamkumar.com", // Replace with actual domain
    title: "Shubham Kumar | Full-Stack Developer",
    description: "Portfolio of Shubham Kumar, a Full-Stack Developer building modern web applications.",
    siteName: "Shubham Kumar Portfolio",
    images: [
      {
        url: "/sk.jpg",
        width: 1200,
        height: 630,
        alt: "Shubham Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Kumar | Full-Stack Developer",
    description: "Portfolio of Shubham Kumar, a Full-Stack Developer building modern web applications.",
    images: ["/sk.jpg"],
    creator: "@04shubham7",
  },
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
