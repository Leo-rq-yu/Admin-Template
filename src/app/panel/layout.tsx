import { JSX, ReactNode } from "react";
import LeftList from "./leftList/leftList";

/**
 * Panel layout
 * @param {ReactNode} children - children components
 * @return {JSX.Element} - PanelLayout component
 */
export default function PanelLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="w-1/6 bg-white px-5 pb-5 overflow-auto">
        <LeftList />
      </div>
      <div className="w-5/6 p-5 rounded-tl-lg bg-gray-100 overflow-auto">
        {children}
      </div>
    </>
  );
}
