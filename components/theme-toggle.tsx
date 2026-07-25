"use client";

const STORAGE_KEY = "rf-theme";

export function ThemeToggle() {
  function toggleTheme() {
    const nextTheme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle day or night mode"
      title="Toggle day or night mode"
    >
      <span className="theme-icon theme-icon-sun" aria-hidden="true">
        ☀
      </span>
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        ☾
      </span>
    </button>
  );
}
