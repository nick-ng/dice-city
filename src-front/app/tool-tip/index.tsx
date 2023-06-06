import { ReactNode } from "react";

interface ToolTipProps {
  children?: ReactNode | ReactNode[];
  message?: string;
}

export default function ToolTip({ children, message }: ToolTipProps) {
  return (
    <div className="group relative inline-block">
      {children}
      {message && (
        <div className="pointer-events-none absolute w-max border border-gray-600 bg-white p-2 px-4 opacity-0 group-hover:opacity-100 dark:border-gray-300 dark:bg-gray-800 dark:text-white">
          {message}
        </div>
      )}
    </div>
  );
}
