import { ReactNode, JSX } from "react";
import Link from "next/link";

/**
 * Admin Layout component
 * @param {ReactNode} children - children components
 * @return {JSX.Element} - AdminLayout component
 */
export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="flex flex-col h-screen ">
      <header className="flex items-center justify-between bg-white">
        <div className="w-1/6 flex justify-center items-center">
          <h1 className="text-lg font-bold text-black">Admin Template</h1>
        </div>

        <nav className="w-5/6">
          <ul className="flex gap-x-4">
            <li className="mx-2">
              <Link href="/panel">
                <button className="border-solid border-b-2 border-b-white hover:border-b-black py-4">
                  <span className="text-black font-hansans text-lg font-normal">
                    Functions
                  </span>
                </button>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/dashboard">
                <button className="border-solid border-b-2 border-b-white hover:border-b-black py-4">
                  <span className="text-black font-hansans text-lg font-normal">
                    Dashboard
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          {/* User account section */}
          {/* <Link href="/profile">
            <a className="hover:text-blue-300">Account</a>
          </Link> */}
        </div>
      </header>
      <main className="flex flex-1">{children}</main>
    </div>
  );
}
