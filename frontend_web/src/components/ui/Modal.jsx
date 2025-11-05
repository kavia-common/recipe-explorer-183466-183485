import React, { useEffect, useRef } from "react";
import { Button } from "./Button";

/**
 * PUBLIC_INTERFACE
 * Modal
 * Accessible modal with backdrop, Escape key to close, and focus management.
 */
export function Modal({ isOpen, onClose, title, children, footer }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "Tab" && dialogRef.current) {
        // Basic focus trap
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal" ref={dialogRef}>
        <div className="modal-header">
          <h2 id="modal-title" style={{ margin: 0, fontSize: 18 }}>{title}</h2>
          <Button ref={closeBtnRef} variant="icon" aria-label="Close" onClick={onClose} title="Close">
            ✕
          </Button>
        </div>
        <div className="modal-body">{children}</div>
        {footer ? <div className="modal-footer">{footer}</div> : null}
      </div>
    </div>
  );
}
