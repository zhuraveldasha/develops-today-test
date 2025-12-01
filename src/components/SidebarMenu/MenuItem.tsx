import React, { useState } from "react";
import "./MenuItem.css";

interface MenuItemProps {
  lable: string;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ lable, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-item">
      <div onClick={() => setIsOpen(!isOpen)} className="menu-item-label">
        {lable}
      </div>
      {isOpen && children && (
        <div className="menu-item-children">{children}</div>
      )}
    </div>
  );
};
