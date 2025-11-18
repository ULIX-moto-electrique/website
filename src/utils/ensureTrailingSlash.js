export function ensureTrailingSlash(s) {
  if (!s) return '/'
  return s.endsWith('/') ? s : s + '/'
}