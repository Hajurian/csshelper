import Link from "next/link";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "csshelper",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-background overflow-hidden`}>
        <nav className="w-full h-28 flex items-center">
          <Link href="/">CSS Helper</Link>
          <div>
            <Link href="/gradient">Gradient</Link>
            <Link href="/boxshadow">Box Shadow</Link>
          </div>
          <button>Theme</button>
        </nav>
        {children}
      </body>
    </html>
  );
}
