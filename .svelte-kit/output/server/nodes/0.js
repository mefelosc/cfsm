

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BO5tZJL0.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CIiALz0C.js","_app/immutable/chunks/BV4TzqJG.js"];
export const stylesheets = ["_app/immutable/assets/app.BbvlK3cg.css"];
export const fonts = [];
