import Link from "next/link";

export const RedirectionButton = ({
  label,
  href,
  icon,
  unfilled = false,
}: {
  label: string;
  href: string;
  icon?: JSX.Element;
  unfilled?: boolean;
}) => {
  return (
    <button
      className={`border-purple-700 border-2 py-2 w-64 rounded flex items-center justify-center space-x-2 ${
        unfilled ? "bg-purple-50 text-purple-700" : "bg-purple-700 text-white"
      }`}
    >
      {icon ? icon : <></>}
      <Link href={href}>{label}</Link>
    </button>
  );
};
