import { AppProps } from "next/app";
import React, { useState } from "react";
import Sidebar from "@/components/SideBar/SideBar";
import menuItems from "../menuItem"; // Correct the import path and variable name
import MenuIcon from "@mui/icons-material/Menu";
import ResponsiveAppBar from "@/components/AppBar/AppbarMui";
import { Box } from "@mui/material";
import GlobalStyles from "../GlobalStyles";
import InvertedMenu from "@/icon/InvertedMenuIcon";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log(sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarWidth = sidebarOpen ? 312 : 60;
  const minSidebarWidth = 60;

  return (
    <Box
      style={{
        display: "flex",
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
          width: `${sidebarWidth}px`,
          minWidth: `${minSidebarWidth}px`,
          transition: "width 0.3s",
          position: "sticky", // Make the sidebar sticky
          top: 0, // Stick to the top of the viewport
          height: "100vh", // Occupy the full viewport height
          overflowY: "auto", // Enable scrolling if the content exceeds viewport height
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
        {sidebarOpen ? (
          <MenuIcon
            sx={{
              padding: "1.5px",
              fontSize: "30px",
              color: "#000",
              position: "absolute",
              top: 17,
              zIndex: 999,
              cursor: "pointer",
            }}
            onClick={toggleSidebar}
          />
        ) : (
          <InvertedMenu
            style={{
              color: "#000",
              padding: "1.5px",
              position: "absolute",
              top: 17,
              zIndex: 999,
              cursor: "pointer",
            }}
            onClick={toggleSidebar}
          />
        )}

        <GlobalStyles />
        <Component {...pageProps} />
      </Box>
    </Box>
  );
};

export default MyApp;
