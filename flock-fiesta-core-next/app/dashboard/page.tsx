import Link from "next/link";
import { Navigation } from "./components/navigation";
import { HighlightedEvent } from "./components/highlightedEvent";
import { UpcomingEvents } from "./components/upcomingEvents";

const Page = () => {
  return (
    <div className="bg-zinc-950 text-zinc-500 flex items-start">
      <aside className="w-1/5 bg-black border-r-2 border-zinc-800 pt-20 px-12">
        <div className="w-32 text-2xl font-bold lowercase">
          <Link href="/dashboard">Flock Fiesta</Link>
        </div>
        <Navigation />
      </aside>
      <main className="w-4/5">
        <HighlightedEvent />
        <UpcomingEvents />
      </main>
    </div>
  );
};

export default Page;
