import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import Link from "next/link";
import "./SideBar.css";

interface SidebarMenuItem {
  name: string;
  icon: React.ReactElement;
  path?: string;
  subItems?: SidebarMenuItem[];
}

interface SidebarProps {
  menuItems: SidebarMenuItem[];
  open: boolean;
  backgroundColor: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  menuItems,
  open,
  backgroundColor,
}) => {
  const [collapseMenu, setCollapseMenu] = useState<boolean[]>(
    new Array(menuItems.length).fill(false)
  );
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const router = useRouter();

  const handleClick = (index: number) => {
    const updatedCollapseMenu = [...collapseMenu];
    updatedCollapseMenu[index] = !updatedCollapseMenu[index];
    setCollapseMenu(updatedCollapseMenu);
  };

  const handleMenuItemClick = (path: string | undefined) => {
    if (path) {
      router.push(path);
    }
  };

  const handleSubItemClick = (path: string | undefined) => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <div
      className={`sidebar ${open ? "open" : "closed"}`}
      style={{ background: backgroundColor, color: "#fff" }}
    >
      <List>
        {menuItems.map((menuItem, index) => (
          <div key={index}>
            {menuItem.path ? (
              <Link href={menuItem.path} passHref>
                <ListItem
                  button
                  component="a"
                  onClick={() => handleMenuItemClick(menuItem.path)}
                  selected={menuItem.path === router.pathname}
                >
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.name}  sx={{color:'#fff'}}/>
                </ListItem>
              </Link>
            ) : (
              <ListItem button onClick={() => handleClick(index)}>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.name} />
                {menuItem.subItems &&
                  (collapseMenu[index] ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>
            )}

            {menuItem.subItems && (
              <Collapse in={collapseMenu[index]}>
                <List>
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <ListItem
                        button
                        onClick={() => handleSubItemClick(subItem.path)}
                        selected={subItem.path === router.pathname}
                      >
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText primary={subItem.name} />
                      </ListItem>
                    </div>
                  ))}
                </List>
              </Collapse>
            )}
            {index < menuItems.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
