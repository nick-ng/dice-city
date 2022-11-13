import { ReactNode } from "react";

export default function BuildingContainer({
  children,
  className,
}: {
  children?: ReactNode | ReactNode[];
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-52 w-28 select-none flex-col rounded border-2 border-gray-700 text-center dark:border-gray-300 md:w-36 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
