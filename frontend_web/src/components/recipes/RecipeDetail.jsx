import React from "react";
import { Modal } from "../ui/Modal";
import { Tag } from "../ui/Tag";

// PUBLIC_INTERFACE
export function RecipeDetail({ recipe, open, onClose }) {
  /** Modal presenting ingredients, steps, and metadata */
  if (!recipe) return null;
  return (
    <Modal isOpen={open} onClose={onClose} title={recipe.title}>
      <div style={{ display: "grid", gap: 12 }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ width: "100%", height: 240, objectFit: "cover", borderRadius: 8 }}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {recipe.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <div style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
          Category: <strong>{recipe.category}</strong> • {recipe.timeMinutes} min • {recipe.servings} serving{recipe.servings>1?"s":""}
        </div>
        <section>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </section>
        <section>
          <h4>Steps</h4>
          <ol>
            {recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}
          </ol>
        </section>
      </div>
    </Modal>
  );
}
