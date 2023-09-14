import { AppProps } from "next/app";
import React, { useState } from "react";
import Sidebar from "@/components/SideBar/SideBar";
import menuItems from "../menuItem"; // Correct the import path and variable name
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@/components/AppBar/AppBar";
import ResponsiveAppBar from "@/components/AppBar/AppbarMui";
import { Box } from "@mui/material";
import GlobalStyles from "../GlobalStyles";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log(sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarWidth = sidebarOpen ? 260 : 60;
  const minSidebarWidth = 60;

  return (
    <Box
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        marginLeft: "-8px",
        marginTop: "-8px",
        backgroundColor: "#EFF3F2",
      }}
    >
      <Sidebar
        menuItems={menuItems}
        open={sidebarOpen}
        backgroundColor="#35224A"
        style={{
          width: `${sidebarWidth}px`, // Set the width dynamically
          minWidth: `${minSidebarWidth}px`, // Set the minimum width
          transition: "width 0.3s", // Add a transition for smooth animation
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
        }}
      >
        <ResponsiveAppBar />
        <MenuIcon
          sx={{
            p: 1,
            position: "absolute",
            top: 15,
            zIndex: 999,
            cursor: "pointer",
          }}
          onClick={toggleSidebar}
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </Box>
    </Box>
  );
};

export default MyApp;
