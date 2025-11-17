export function getPath(p){
  const BASE = import.meta.env.BASE_URL || '/'
  if(!p) return BASE
  return BASE + String(p).replace(/^\/+/, '')
}
