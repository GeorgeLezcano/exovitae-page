
import React from "react";


type SideBarProps = {
  className?: string; 
  children?: React.ReactNode; 
};

export function SideBar({ className = "", children }: SideBarProps) {
  return (
    <aside className={className}>
      {children}
    </aside>
  );
}
