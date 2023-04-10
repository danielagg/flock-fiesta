import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

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
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
