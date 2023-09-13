import { AppProps } from "next/app";
import React, { useState } from "react";
import Sidebar from "@/components/SideBar/SideBar";
import menuItems from "../menuItem"; // Correct the import path and variable name
import MenuIcon from "@mui/icons-material/Menu";

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
        marginLeft: "-8px",
        marginTop: "-8px",
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
      </div>
    </div>
  );
};

export default MyApp;
