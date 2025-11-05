import React from "react";
import { NavLink } from "react-router-dom";

// PUBLIC_INTERFACE
export function Sidebar() {
  /** Left sidebar with brand and navigation links */
  return (
    <aside className="sidebar" aria-label="Sidebar Navigation">
      <div className="brand" aria-label="Recipe Explorer">
        <span className="brand-badge" aria-hidden="true" />
        Recipe Explorer
      </div>
      <nav className="nav" role="navigation" aria-label="Main">
        <NavLink to="/" end>
          <span role="img" aria-hidden="true">🏠</span> Browse
        </NavLink>
        <NavLink to="/favorites">
          <span role="img" aria-hidden="true">⭐</span> Favorites
        </NavLink>
        <NavLink to="/about">
          <span role="img" aria-hidden="true">📚</span> About
        </NavLink>
      </nav>
    </aside>
  );
}
