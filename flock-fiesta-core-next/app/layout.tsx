import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import Link from "next/link";

export const metadata = {
  title: "Flock Fiesta",
  description: "Event management app for organizations",
};

function Header() {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <h1>My App</h1>
      {/* <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut> */}
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="block lg:flex justify-center p-6 bg-slate-900 lg:bg-white text-white lg:text-black">
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:space-x-24">
              <div className="text-xl font-bold lowercase">
                <Link href="/">Flock Fiesta</Link>
              </div>
              <nav className="hidden lg:block">
                <ul className="list-none flex flex-col lg:flex-row space-y-2 space-x-0 lg:space-y-0 lg:space-x-12 items-center mt-6 lg:mt-0">
                  <li>How it works</li>
                  <li>Pricing</li>
                  <li>Contact</li>
                </ul>
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
