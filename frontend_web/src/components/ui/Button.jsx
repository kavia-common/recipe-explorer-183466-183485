import React from "react";

// PUBLIC_INTERFACE
export function Button({ variant = "default", className = "", children, ...rest }) {
  /** Accessible button styled per theme. Variants: default, primary, ghost, icon */
  const base = "btn";
  const variantClass =
    variant === "primary" ? " btn-primary" :
    variant === "ghost" ? " btn-ghost" :
    variant === "icon" ? " btn-icon" : "";
  return (
    <button className={base + variantClass + (className ? ` ${className}` : "")} {...rest}>
      {children}
    </button>
  );
}
