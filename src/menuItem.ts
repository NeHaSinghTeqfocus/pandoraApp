import React from "react";
import HomeIcon from "./icon/HomeIcon";
import InfoIcon from "./icon/InfoIcon";
import ContactIcon from "./icon/ContactIcon";
import { ReactSVGElement } from "react";

interface SidebarMenuItem {
  name: string;
  icon: Function;
  path?: string;
  subItems?: SidebarMenuItem[];
}
const menuItems: SidebarMenuItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Workspace",
    icon: InfoIcon,
    path: "/about",
    subItems: [
      {
        name: "Company",
        icon: InfoIcon,
        path: "/about/company",
      },
      {
        name: "Team",
        icon: InfoIcon,
        path: "/about/team",
      },
    ],
  },
  {
    name: "SIMON",
    icon: ContactIcon,
    path: "/contact",
  },
  // Add more menu items as needed
];

export default menuItems;
