import { RedirectionButton } from "@/app/shared/redirectionButton";

export const HighlightedEvent = () => {
  return (
    <div className="relative h-[65vh] bg-[url('/highlighted_event.png')] bg-center bg-cover flex flex-row items-end text-white">
      <div className="z-0 absolute inset-0 bg-black opacity-50 h-[65vh] w-full"></div>
      <div className="z-0 absolute left-0 bottom-0 bg-gradient-to-tr from-black to-transparent h-[20vh] w-2/3" />
      <div className="z-10 opacity-100 p-12">
        <div className="text-6xl font-extrabold shadow">Drinks after work</div>
        <div className="mt-1">
          This Friday, 17:00 @{" "}
          <span className="underline cursor-pointer text-purple-200">
            The Royal Oak
          </span>
        </div>
        <div className="text-xs opacity-70">Organized by Jessica Parker</div>
        <div className="pt-6 flex items-end space-x-4">
          <div className="opacity-80 bg-black border-2 border-purple-600 text-purple-400 py-2 px-12 rounded shadow-lg hover:text-purple-200 hover:border-purple-400 cursor-pointer">
            Join the Event
          </div>
          <div className="text-sm">
            <span className="opacity-70">...or </span>
            <span className="underline cursor-pointer opacity-70 hover:opacity-100">
              Read more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
