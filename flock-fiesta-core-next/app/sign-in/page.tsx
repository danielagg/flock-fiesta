import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-tl from-purple-200 to-indigo-50 w-full min-h-screen">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
