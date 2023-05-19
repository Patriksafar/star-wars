import "./globals.css";
import { Montserrat } from "next/font/google";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Star Wars Interview App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>{children}</body>
    </html>
  );
}
