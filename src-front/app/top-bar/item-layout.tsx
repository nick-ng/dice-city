import { ReactNode } from "react";

export default function ItemLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-1 first:ml-0 last:mr-0 ${className || ""}`}>
      {children}
    </div>
  );
}
