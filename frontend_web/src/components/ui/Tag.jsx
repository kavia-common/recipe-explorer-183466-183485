import React from "react";

// PUBLIC_INTERFACE
export function Tag({ children, className = "", ...rest }) {
  /** Pill-shaped tag chip */
  return (
    <span className={`tag ${className}`} {...rest}>
      {children}
    </span>
  );
}
