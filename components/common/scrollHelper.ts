/**
 * Smoothly scrolls to a page section by ID, taking into account
 * the fixed header height on both mobile and desktop.
 */
export function smoothScrollTo(targetId: string, offset: number = 84): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") return false;

  const cleanId = targetId.replace(/^#/, "");
  const target = document.getElementById(cleanId);

  if (!target) return false;

  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: "smooth",
  });

  if (window.history && window.history.pushState) {
    window.history.pushState(null, "", `#${cleanId}`);
  }

  return true;
}
