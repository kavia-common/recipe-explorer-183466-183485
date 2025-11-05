import React from "react";

// PUBLIC_INTERFACE
export function Card({ children, className = "", ...rest }) {
  /** Themed card container */
  return (
    <div className={`card ${className}`} {...rest}>
      {children}
    </div>
  );
}
