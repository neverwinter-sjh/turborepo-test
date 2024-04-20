"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: ButtonProps) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
};
