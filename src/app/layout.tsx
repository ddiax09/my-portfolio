import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Website created to show my experience and skills.",
};

interface RootLayoutProps {
  children: React.ReactNode; // Esto indica que 'children' puede ser cualquier nodo React (texto, JSX, etc.)
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

