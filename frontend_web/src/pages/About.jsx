import React from "react";

// PUBLIC_INTERFACE
export function About() {
  /** Simple About/Collections placeholder */
  return (
    <div className="content">
      <div className="card" style={{ padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>About Recipe Explorer</h2>
        <p>
          Browse, search, and manage your favorite recipes. This is an initial build using mock data.
          API base: {process.env.REACT_APP_API_BASE || "not configured (using local data)"}.
        </p>
      </div>
    </div>
  );
}
