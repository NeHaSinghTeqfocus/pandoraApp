// components/Layout.tsx
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* Common header, sidebar, or other layout elements */}
      <header>
        <h1>My App</h1>
      </header>
      <nav>{/* Sidebar menu */}</nav>
      <main>{children}</main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Layout;
