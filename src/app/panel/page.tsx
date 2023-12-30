import { JSX } from "react";

const PanelFormOptions = (action: string): JSX.Element => {
  switch (action) {
    case "checkStaff":
      return <></>;
    case "editStaff":
      return <></>;
    case "addStaff":
      return <></>;
    case "removeStaff":
      return <></>;
    case "checkFinance":
      return <></>;
    case "editFinance":
      return <></>;
    case "addFinance":
      return <></>;
    case "removeFinance":
      return <></>;
    case "checkResource":
      return <></>;
    case "editResource":
      return <></>;
    case "addResource":
      return <></>;
    case "removeResource":
      return <></>;
    case "checkFile":
      return <></>;
    case "editFile":
      return <></>;
    case "addFile":
      return <></>;
    case "removeFile":
      return <></>;
    default:
      return <></>;
  }
};

/**
 * Panel page
 * @param {string} searchParams - search params in url
 * @return {JSX.Element} - PanelPage component
 */
export default function PanelPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): JSX.Element {
  if (!searchParams) return <></>;

  return PanelFormOptions(String(searchParams.action));
}
