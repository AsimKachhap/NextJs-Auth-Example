import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import AuthProvider from "./(components)/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs Auth Example",
  description: "Created by Asim Kachhap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-gray-100">
          <Nav />

          <div className={`{inter.className} + m-2`}>{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
