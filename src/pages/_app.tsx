import { AppProps } from "next/app";
import React, { useState } from "react";
import Sidebar from "@/components/SideBar/SideBar";
import menuItems from "../menuItem"; // Correct the import path and variable name
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@/components/AppBar/AppBar";
import ResponsiveAppBar from "@/components/AppBar/AppbarMui";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "fit-content",
        marginLeft: "-8px",
        marginTop: "-8px",
        backgroundColor: "#EFF3F2",
      }}
    >
      <Sidebar
        menuItems={menuItems}
        open={sidebarOpen}
        backgroundColor="#35224A"
      />{" "}
      {/* Pass the menuItems array */}
      <div style={{ padding: "10px" }}>
        <MenuIcon onClick={toggleSidebar} />
        <Component {...pageProps} />
        <ResponsiveAppBar />
      </div>
    </div>
  );
};

export default MyApp;
