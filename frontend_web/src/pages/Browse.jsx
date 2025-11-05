import React, { useMemo, useState } from "react";
import { Header } from "../components/layout/Header";
import { RecipeCard } from "../components/recipes/RecipeCard";
import { RecipeDetail } from "../components/recipes/RecipeDetail";
import { mockRecipes, getCategories } from "../data/recipes";
import { Button } from "../components/ui/Button";

// PUBLIC_INTERFACE
export function Browse({ favorites, onToggleFavorite }) {
  /** Browse page: list/grid, search and category filter */
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [open, setOpen] = useState(false);

  const categories = useMemo(() => ["All", ...getCategories(mockRecipes)], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mockRecipes.filter((r) => {
      const matchQ = !q || r.title.toLowerCase().includes(q);
      const matchC = category === "All" || r.category === category;
      return matchQ && matchC;
    });
  }, [query, category]);

  return (
    <>
      <Header query={query} onQueryChange={setQuery}>
        {/* Optional header actions can go here */}
      </Header>
      <div className="content">
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <span style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Filter:</span>
          <div role="group" aria-label="Category filter" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map((c) => (
              <Button
                key={c}
                variant={c === category ? "primary" : "ghost"}
                aria-pressed={c === category}
                onClick={() => setCategory(c)}
              >
                {c}
              </Button>
            ))}
          </div>
          <div style={{ marginLeft: "auto", color: "var(--color-text-muted)", fontSize: 14 }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="grid" role="list">
          {filtered.map((r) => (
            <div role="listitem" key={r.id}>
              <RecipeCard
                recipe={r}
                isFavorite={favorites.includes(r.id)}
                onToggleFavorite={onToggleFavorite}
                onOpen={(rec) => { setActiveRecipe(rec); setOpen(true); }}
              />
            </div>
          ))}
        </div>
      </div>

      <RecipeDetail recipe={activeRecipe} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
