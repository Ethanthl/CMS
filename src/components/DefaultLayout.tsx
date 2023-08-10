import React, { ReactNode } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Header from "./Header";

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Common header */}
      <Header />
      {/* Page content */}
      {children}

      {/* Common footer */}
      <footer>
        <ThemeSwitcher />
      </footer>
    </div>
  );
};

export default DefaultLayout;
