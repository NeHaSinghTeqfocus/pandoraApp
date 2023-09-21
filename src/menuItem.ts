import React from "react";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AnalyticsIcon from "@mui/icons-material/Analytics";

interface SidebarMenuItem {
  name: string;
  icon: React.ElementType;
  path?: string;
  subItems?: SidebarMenuItem[];
}
const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: DashboardSharpIcon,
  },
  {
    name: "Workspace",
    icon: Diversity1Icon,
    path: "/about",
  },
  {
    name: "SIMON",
    icon: AddIcon,
    subItems: [
      {
        name: "DataSet Exploration",
        icon: PlayArrowIcon,
        path: "/simon/dataset_exploration",
      },
      {
        name: "Analysis",
        icon: PlayArrowIcon,
        path: "/contact",
      },
      {
        name: "Analysis Exploration",
        icon: AnalyticsIcon,
        path: "/contact",
      },
    ],
  },
  // Add more menu items as needed
];

export default menuItems;
