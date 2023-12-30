type ActionProps = {
  title: string;
  link: string;
};

export type OptionProps = {
  actionType: string;
  options: ActionProps[];
};

export const ParentListStyle = "p-px bg-gray-300 h-fit rounded-lg styled-list";
export const ParentButtonStyle =
  "bg-white hover:bg-zinc-400 w-full text-left rounded-lg px-4 py-2 flex justify-between items-center";
export const ChildListStyle = "pl-4 ml-2";
export const ChildButtonStyle =
  "bg-zinc-300 hover:bg-zinc-400 w-full rounded-lg text-left px-2 py-2";
export const ChildListItemStyle = "my-1 first:mt-0 last:mb-0";

export const StaffManagementOptions: ActionProps[] = [
  {
    title: "Check Current Staff",
    link: "/admin/panel?action=checkStaff",
  },
  {
    title: "Edit a Staff Member",
    link: "/admin/panel?action=editStaff",
  },
  {
    title: "Add a Staff Member",
    link: "/admin/panel?action=addStaff",
  },
  {
    title: "Remove a Staff Member",
    link: "/admin/panel?action=removeStaff",
  },
];

export const FinanceManagementOptions: ActionProps[] = [
  {
    title: "Check Current Finance",
    link: "/admin/panel?action=checkFinance",
  },
  {
    title: "Edit a Finance",
    link: "/admin/panel?action=editFinance",
  },
  {
    title: "Add a Finance",
    link: "/admin/panel?action=addFinance",
  },
  {
    title: "Remove a Finance",
    link: "/admin/panel?action=removeFinance",
  },
];

export const ResourceManagementOptions: ActionProps[] = [
  {
    title: "Check Current Resource",
    link: "/admin/panel?action=checkResource",
  },
  {
    title: "Edit a Resource",
    link: "/admin/panel?action=editResource",
  },
  {
    title: "Add a Resource",
    link: "/admin/panel?action=addResource",
  },
  {
    title: "Remove a Resource",
    link: "/admin/panel?action=removeResource",
  },
];

export const FileArchiveOptions: ActionProps[] = [
  {
    title: "Check Current Archive",
    link: "/admin/panel?action=checkArchive",
  },
  {
    title: "Edit an File",
    link: "/admin/panel?action=editArchive",
  },
  {
    title: "Add an File",
    link: "/admin/panel?action=addArchive",
  },
  {
    title: "Remove an File",
    link: "/admin/panel?action=removeArchive",
  },
];
