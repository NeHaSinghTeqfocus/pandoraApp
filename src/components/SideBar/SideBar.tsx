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
import { Box } from "@mui/material";

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
  style: object;
}

const Sidebar: React.FC<SidebarProps> = ({
  menuItems,
  open,
  backgroundColor,
  style,
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
      // className={`sidebar ${open ? "open" : "closed"}`}
      style={{ background: backgroundColor, color: "#fff", ...style }}
    >
      <List sx={{ paddingTop: "1px" }}>
        {menuItems.map((menuItem: any, index: number) => (
          <div key={index}>
            {menuItem.path ? (
              <Link
                style={{ textDecoration: "none" }}
                href={menuItem.path}
                passHref
              >
                <ListItem
                  button
                  // component="a"
                  onClick={() => handleMenuItemClick(menuItem.path)}
                  selected={menuItem.path === router.pathname}
                  style={{
                    height: "55px",
                    paddingTop: "4px !important",
                    marginTop: "0px !important",
                    borderLeft:
                      menuItem.path === router.pathname
                        ? "5px solid #E3006E"
                        : "",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "31px" }}>
                    <menuItem.icon
                      sx={{
                        color: "white",
                        fontSize: "15px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "12px !important",
                      fontFamily: "Arial !important",
                      fontWeight: "400 !important",
                    }}
                    primary={!open ? "" : menuItem.name}
                  />
                </ListItem>
              </Link>
            ) : (
              <ListItem button onClick={() => handleClick(index)}>
                <ListItemIcon sx={{ minWidth: "31px" }}>
                  {" "}
                  <menuItem.icon sx={{ color: "white", fontSize: "15px" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontFamily: "Arial !important",
                    fontWeight: "400 !important",
                  }}
                  primary={!open ? "" : menuItem.name}
                />
                {menuItem.subItems &&
                  open &&
                  (collapseMenu[index] ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>
            )}

            {menuItem.subItems && (
              <Collapse in={collapseMenu[index]}>
                <List>
                  {menuItem.subItems.map((subItem: any, subIndex: number) => (
                    <div key={subIndex}>
                      <ListItem
                        button
                        onClick={() => handleSubItemClick(subItem.path)}
                        selected={
                          subItem.path === router.pathname &&
                          menuItem.path === router.pathname
                        }
                        style={{
                          borderLeft:
                            subItem.path === router.pathname &&
                            menuItem.path === router.pathname
                              ? "5px solid #E3006E"
                              : "",
                        }}
                      >
                        <ListItemIcon
                          sx={{ marginLeft: "3px", minWidth: "31px" }}
                        >
                          {
                            <subItem.icon
                              fontSize="small"
                              sx={{ color: "white" }}
                            />
                          }
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            fontSize: "10px !important",
                            fontFamily: "Arial !important",
                            fontWeight: "400 !important",
                          }}
                          primary={!open ? "" : subItem.name}
                        />
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
