/**
 * Ensure a string ends with a single trailing slash. Returns `/` for falsy values.
 * @param {string} s - The input string.
 * @returns {string} The input guaranteed to end with `/`.
 */
export function ensureTrailingSlash(s) {
  if (!s) return '/';
  return s.endsWith('/') ? s : s + '/';
}

/**
 * Prepend the application's `BASE_URL` (from `import.meta.env.BASE_URL`) to a path.
 * Strips leading slashes from the provided path before joining.
 * If `p` is falsy, returns the `BASE_URL`.
 * @param {string} p - A path or filename to join with the base URL.
 * @returns {string} The resulting URL-path.
 */
export function withBaseUrl(p) {
  const BASE = import.meta.env.BASE_URL || "/";
  if (!p) return BASE;
  return BASE + String(p).replace(/^\/+/, "");
}

