import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("deafultTheme"); // Default theme

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <div className="toggle bg-primary alt:bg-primaryDark shadow-lg">
      <button onClick={() => setTheme("defaultTheme")}>
        <Icon icon="fluent:dark-theme-20-filled" />
      </button>
      <button onClick={() => setTheme("altTheme")}>
        <Icon icon="fluent:dark-theme-20-filled" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
