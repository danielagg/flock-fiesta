export const Pricing = () => {
  const Card = ({
    price,
    planName,
    desc,
    additionalInfo,
  }: {
    price: number;
    planName: string;
    desc: string;
    additionalInfo: string[];
  }) => {
    return (
      <div className="w-full lg:w-1/3">
        <div className="p-6 lg:p-12 rounded-lg border-2 border-slate-600">
          <div className="bg-slate-800 rounded-full px-4 py-2 inline-block text-xs">
            {planName}
          </div>
          <div className="pl-2 text-4xl font-bold mt-6">
            {price}€ <span className="text-base font-light"> / month</span>
          </div>
          <div className="mt-4 pl-2 text-sm">{desc}</div>

          <button className="mt-6 border-slate-600 border-2 bg-slate-600 text-white py-2 px-6 rounded">
            Get Started
          </button>
        </div>
        <div className="mt-2 lg:mt-12 pl-2 lg:pl-4 text-xs">
          <ul className="list-inside space-y-2 opacity-60">
            {additionalInfo.map((info, index) => {
              return (
                <li key={index} className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <div>{info}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className="text-white w-full lg:w-2/3 p-12 lg:p-32">
      <div className="text-3xl lg:text-5xl font-extrabold text-center">
        Our Pricing
      </div>

      <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row items-start space-y-12 lg:space-y-0 lg:space-x-4 justify-between">
        <Card
          planName="Free Tier"
          price={0}
          desc="Suitable for up and coming organizations, limited to 12 users."
          additionalInfo={[
            "Unlimited number of events can be created.",
            "Guaranteed access up to 12 users.",
            "Test 3.",
          ]}
        />
        <Card
          planName="Standard"
          price={99}
          desc="Suitable for any organization up to 99 users."
          additionalInfo={[
            "All features from the Free Tier included.",
            "Guaranteed access up to 99 users.",
          ]}
        />
        <Card
          planName="Enterprise"
          price={299}
          desc="Suitable for any organization, without user limitation."
          additionalInfo={[
            "All features from the Standard plan included.",
            "Unlimited number of users.",
          ]}
        />
      </div>
    </div>
  );
};
