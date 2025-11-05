import React from "react";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";
import { Button } from "../ui/Button";

// PUBLIC_INTERFACE
export function RecipeCard({ recipe, isFavorite, onToggleFavorite, onOpen }) {
  /** Displays a recipe image, title, tags, and quick actions */
  return (
    <Card className="recipe-card" style={{ display: "grid", gridTemplateRows: "160px auto" }}>
      <button
        onClick={() => onOpen(recipe)}
        style={{ padding: 0, border: "none", background: "transparent", cursor: "pointer" }}
        aria-label={`Open ${recipe.title}`}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ width: "100%", height: 160, objectFit: "cover" }}
        />
      </button>
      <div style={{ padding: 12, display: "grid", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 16, lineHeight: 1.3 }}>{recipe.title}</h3>
          <Button
            variant="icon"
            aria-pressed={isFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            onClick={() => onToggleFavorite(recipe.id)}
          >
            {isFavorite ? "⭐" : "☆"}
          </Button>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {recipe.tags.slice(0, 3).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div style={{ color: "var(--color-text-muted)", fontSize: 12 }}>
          {recipe.timeMinutes} min • {recipe.servings} serving{recipe.servings > 1 ? "s" : ""}
        </div>
      </div>
    </Card>
  );
}
