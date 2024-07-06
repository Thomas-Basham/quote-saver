import { Inter } from "next/font/google";
import "./globals.css";
// import { login, logout } from "@/utils/authUtils";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const isAuthenticated = true;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between p-4 text-white bg-cyan-600">
          <h1 className="text-xl">Quote Generator</h1>
          <div>
            {isAuthenticated ? (
              <button className="px-4 py-2 bg-white rounded-lg text-cyan-600">
                Logout
              </button>
            ) : (
              <button className="px-4 py-2 bg-white rounded-lg text-cyan-600">
                Login
              </button>
            )}
          </div>
        </header>
        {children}
        <footer className="py-4 text-lg text-center text-cyan-700">
          &copy; Codex Academy January Cohort
        </footer>
      </body>
    </html>
  );
}
