import { CallToAction } from "./call-to-action";
import { Goal } from "./goal";
import { HowDoesItWork } from "./how-does-it-work";
import { Illustrations } from "./illustrations";
import { Pricing } from "./pricing";
import { Statistics } from "./statistics";

export default function Home() {
  return (
    <>
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
    </>
  );
}
