import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/theme.css";
import "./App.css";
import { AppShell } from "./AppShell";
import { Browse } from "./pages/Browse";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";
import { useLocalStorage } from "./hooks/useLocalStorage";
import SignInStatic from "./pages/SignInStatic";

/**
 * PUBLIC_INTERFACE
 * App
 * Root component: handles routing and favorites state persisted to localStorage.
 * Adds a dedicated pixel-accurate Sign In route that mounts the static Figma export without style drift.
 */
function App() {
  const [favorites, setFavorites] = useLocalStorage("rx_favorites", []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Pixel-accurate Sign In screen route without AppShell to avoid inherited layout/styles */}
        <Route path="/signin" element={<SignInStatic />} />

        {/* Main application routes wrapped inside AppShell */}
        <Route element={<AppShell />}>
          <Route index element={<Browse favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="favorites" element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
