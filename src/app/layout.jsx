import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./components/NavBar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "CSS Simple",
  description: "Generate gradients, box shadows, and colors for any CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="box-border">
      <body
        className={`${roboto.className} bg-background m-0 p-0 overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
