import React from "react";
import { Header } from "../components/layout/Header";
import { RecipeCard } from "../components/recipes/RecipeCard";
import { mockRecipes } from "../data/recipes";

// PUBLIC_INTERFACE
export function Favorites({ favorites, onToggleFavorite }) {
  /** Favorites page: list of favorited recipes */
  const favSet = new Set(favorites);
  const items = mockRecipes.filter(r => favSet.has(r.id));

  return (
    <>
      <Header query={""} onQueryChange={() => {}}>
        <div aria-live="polite" style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
          {items.length} favorite{items.length !== 1 ? "s" : ""}
        </div>
      </Header>
      <div className="content">
        {items.length === 0 ? (
          <div className="card" style={{ padding: 16 }}>
            You have no favorites yet. Browse recipes and tap the star to add favorites.
          </div>
        ) : (
          <div className="grid" role="list">
            {items.map(r => (
              <div role="listitem" key={r.id}>
                <RecipeCard
                  recipe={r}
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                  onOpen={() => {}}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
