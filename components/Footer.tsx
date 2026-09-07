"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark" | "system";

const OPTIONS = [
  { value: "light", Icon: Sun, title: "Light mode" },
  { value: "dark", Icon: Moon, title: "Dark mode" },
  { value: "system", Icon: Monitor, title: "System mode" },
] as const;

function prefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(theme: Theme) {
  const dark = theme === "dark" || (theme === "system" && prefersDark());
  document.documentElement.classList.toggle("dark", dark);
}

/**
 * localStorage is the store. `storage` only fires in *other* tabs, so same-tab
 * writes notify through this listener set.
 */
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

const getSnapshot = (): Theme =>
  (localStorage.getItem("theme") as Theme | null) ?? "system";

// The server has no stored preference; React re-renders with the real one
// after hydration, so no markup mismatch.
const getServerSnapshot = (): Theme => "system";

function selectTheme(theme: Theme) {
  if (theme === "system") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", theme);
  }
  applyTheme(theme);
  for (const notify of listeners) notify();
}

export default function Footer() {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const activeIndex = Math.max(
    0,
    OPTIONS.findIndex((option) => option.value === theme),
  );

  // Only "system" has to track the OS preference while the page is open.
  useEffect(() => {
    if (theme !== "system") return;

    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [theme]);

  return (
    <footer className="flex justify-between items-center w-full px-8 md:px-0 my-20 text-secondary">
      <p className="text-14/5">© César García {new Date().getFullYear()}</p>

      <div className="relative flex items-center rounded-full border border-border bg-control p-0.5">
        {/* Sliding pill that follows the active option. The buttons are a fixed
            26px with no gap between them, so one step is exactly 100%. */}
        <span
          aria-hidden="true"
          className="absolute left-0.5 top-0.5 size-[26px] rounded-full bg-control-active transition-transform duration-300 ease-(--ease)"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />

        {OPTIONS.map(({ value, Icon, title }) => (
          <button
            key={value}
            type="button"
            title={title}
            aria-label={title}
            aria-pressed={theme === value}
            onClick={() => selectTheme(value)}
            className={`relative z-10 grid size-[26px] place-items-center rounded-full transition-colors duration-200 ease-(--ease) ${
              theme === value ? "text-text" : ""
            }`}
          >
            <Icon size={14} />
          </button>
        ))}
      </div>
    </footer>
  );
}
