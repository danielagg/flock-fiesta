import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs/app-beta";
import Link from "next/link";

export const metadata = {
  title: "Flock Fiesta",
  description: "Event management app for organizations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gradient-to-tl from-purple-200 to-indigo-50 text-slate-900 min-h-screen">
          <header className="block lg:flex justify-center p-6 bg-slate-900 lg:bg-transparent text-white lg:text-black">
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:space-x-24">
              <div className="w-32 text-xl font-bold lowercase">
                <Link href="/">Flock Fiesta</Link>
              </div>
              <nav className="w-full hidden lg:flex justify-between items-center">
                <ul className="list-none flex flex-col lg:flex-row space-y-2 space-x-0 lg:space-y-0 lg:space-x-12 items-center mt-6 lg:mt-0">
                  <li>How it works</li>
                  <li>Pricing</li>
                  <li>Contact</li>
                </ul>
                <UserButton />
              </nav>
            </div>
          </header>
          <div className="flex flex-col justify-center items-center mt-12 lg:mt-24">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
