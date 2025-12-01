import React from "react";
import "./SidebarMenu.css";
import "./MenuItem";


interface SidebarMenuProps {
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, toggleOpen, children}) => {

  if (!isOpen) {
    return null;
  }

  return (
    <div className="side-bar-container" onClick={() => toggleOpen(false)}>
        <div className="side-bar-content" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  );
};
