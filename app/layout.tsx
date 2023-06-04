import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";

const Font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify",
  description: "Listen what you love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
