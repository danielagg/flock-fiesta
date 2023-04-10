export const HowDoesItWork = () => {
  const Counter = ({
    title,
    desc,
    logo,
  }: {
    title: string;
    desc: string;
    logo: JSX.Element;
  }) => {
    return (
      <div className="flex flex-col text-center justify-center items-center">
        <div>{logo}</div>
        <div className="mt-4 text-xl lg:text-2xl font-bold">{title}</div>
        <div className="mt-2 text-sm lg:text-base">{desc}</div>
      </div>
    );
  };
  const steps = [
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.75}
          stroke="currentColor"
          className="w-16 h-16 lg:w-32 lg:h-32"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      title: "Register your company",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ullam iste tempore pariatur quaerat quis, provident in odio non odit!",
    },
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.75}
          stroke="currentColor"
          className="w-16 h-16 lg:w-32 lg:h-32"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      ),
      title: "Invite your employees",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ullam iste tempore pariatur quaerat quis, provident in odio non odit!",
    },
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.75}
          stroke="currentColor"
          className="w-16 h-16 lg:w-32 lg:h-32"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
      title: "Watch events get created",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ullam iste tempore pariatur quaerat quis, provident in odio non odit!",
    },
  ];

  return (
    <div className="mt-4 flex flex-col lg:flex-row items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12 p-12 lg:p-24">
        {steps.map((step, index) => {
          return (
            <Counter
              key={index}
              title={step.title}
              desc={step.desc}
              logo={step.logo}
            />
          );
        })}
      </div>
    </div>
  );
};
