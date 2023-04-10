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
          <header className="flex justify-center p-6">
            <div className="w-2/3 flex items-center space-x-24">
              <div className="text-xl font-bold lowercase">
                <Link href="/">Flock Fiesta</Link>
              </div>
              <nav>
                <ul className="list-none flex space-x-12">
                  <li>How it works</li>
                  <li>Pricing</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          </header>
          <div className="flex flex-col justify-center items-center mt-24">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
