import Link from "next/link";
import { CallToAction } from "./components/call-to-action";
import { Goal } from "./components/goal";
import { HowDoesItWork } from "./components/how-does-it-work";
import { Illustrations } from "./components/illustrations";
import { Pricing } from "./components/pricing";
import { Statistics } from "./components/statistics";
import { UserButton } from "@clerk/nextjs/app-beta";

const Home = () => {
  return (
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
        <div className="w-full lg:w-2/3 px-6">
          <main className="flex flex-col lg:flex-row">
            <CallToAction />
            <Illustrations />
          </main>
          <Statistics />
          <Goal />
          <HowDoesItWork />
        </div>
        <div className="w-full bg-slate-900 flex justify-center">
          <Pricing />
        </div>
      </div>
    </body>
  );
};

export default Home;
