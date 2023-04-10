import { CallToAction } from "./call-to-action";
import { Goal } from "./goal";
import { HowDoesItWork } from "./how-does-it-work";
import { Illustrations } from "./illustrations";
import { Statistics } from "./statistics";

export default function Home() {
  return (
    <div>
      <main className="flex">
        <CallToAction />
        <Illustrations />
      </main>
      <Statistics />
      <Goal />
      <HowDoesItWork />
    </div>
  );
}
