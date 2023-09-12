import { AppProps } from "next/app";
import React, { useState } from "react";
import Sidebar from "@/components/SideBar/SideBar";
import menuItems from "../menuItem"; // Correct the import path and variable name

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <div>
        <button onClick={toggleSidebar}>Sidebar</button>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
