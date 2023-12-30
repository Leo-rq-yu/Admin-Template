import { JSX } from "react";
import Link from "next/link";
import Accordion from "@/components/customizedLayout/AccordionLayout";
import {
  OptionProps,
  ParentListStyle,
  ParentButtonStyle,
  ChildListStyle,
  ChildButtonStyle,
  ChildListItemStyle,
  StaffManagementOptions,
  FinanceManagementOptions,
  ResourceManagementOptions,
  FileArchiveOptions,
} from "@/lib/testLibs";

const LeftListOptions: OptionProps[] = [
  { actionType: "Staff Management", options: StaffManagementOptions },
  { actionType: "Finance Management", options: FinanceManagementOptions },
  { actionType: "Resource Management", options: ResourceManagementOptions },
  { actionType: "File Archive", options: FileArchiveOptions },
];

/**
 * Left List Component
 * @return{JSX.Element} Left List Component
 */
export default function LeftList(): JSX.Element {
  return (
    <ul>
      {LeftListOptions.map((option, index) => {
        return (
          <li key={index} className="mb-2">
            <Accordion
              ParentListStyle={ParentListStyle}
              ParentButtonStyle={ParentButtonStyle}
              ParentButtonTitle={option.actionType}
            >
              <ul className={ChildListStyle}>
                {option.options.map((subOption, index) => {
                  return (
                    <li key={index} className={ChildListItemStyle}>
                      <Link href={subOption.link}>
                        <button className={ChildButtonStyle}>
                          {subOption.title}
                        </button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Accordion>
          </li>
        );
      })}
    </ul>
  );
}
