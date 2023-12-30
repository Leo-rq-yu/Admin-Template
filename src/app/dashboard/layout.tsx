import { JSX, ReactNode } from "react";

/**
 * Dashboard layout
 * @param {ReactNode} children - children components
 * @return {JSX.Element} - DashboardLayout component
 */
export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="w-1/6 bg-white px-5 pb-5 overflow-auto">
        {/* <LeftList /> */}
      </div>
      <div className="w-5/6 p-5 rounded-tl-lg bg-gray-100 overflow-auto">
        {children}
      </div>
    </>
  );
}
