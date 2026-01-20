import type { Metadata } from "next";
import { Fira_Code, Ubuntu } from "next/font/google";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Md. Minhajul Haque - Portfolio",
  description:
    "Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and experience in building exceptional digital experiences.",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "nextjs",
    "typescript",
    "fullstack",
  ],
  authors: [{ name: "Md. Minhajul Haque" }],
  openGraph: {
    title: "Md. Minhajul Haque - Portfolio",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: #0a0a0a !important;
                color: #ededed;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${ubuntu.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider>
          <Navigation />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
