import { CallToAction } from "./call-to-action";
import { Illustrations } from "./illustrations";
import { Statistics } from "./statistics";

export default function Home() {
  return (
    <div>
      <header className="flex justify-center p-6">
        <div className="w-2/3 flex items-center space-x-24">
          <div className="text-xl font-bold lowercase">Flock Fiesta</div>
          <nav>
            <ul className="list-none flex space-x-12">
              <li>How it works</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex justify-center mt-24">
        <main className="w-2/3 flex">
          <CallToAction />
          <Illustrations />
        </main>
      </div>

      <Statistics />
    </div>
  );
}
