import React from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Outlet } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * AppShell
 * Primary responsive layout with sidebar and main routed content.
 */
export function AppShell() {
  /** Primary responsive layout with sidebar and main routed content */
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
