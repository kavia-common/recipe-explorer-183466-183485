import React from "react";
import { Button } from "../ui/Button";

// PUBLIC_INTERFACE
export function Header({ query, onQueryChange, children }) {
  /** Top header with search bar and action area */
  return (
    <header className="header">
      <div className="searchbar" role="search">
        <span role="img" aria-hidden="true">🔎</span>
        <input
          aria-label="Search recipes"
          placeholder="Search recipes by title..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
      <Button className="hidden" aria-hidden="true">Action</Button>
      {children}
    </header>
  );
}
