import { w as slot } from "../../chunks/index.js";
/* empty css               */
function _layout($$payload, $$props) {
  $$payload.out.push(`<div class="bg-base-200"><div class="max-w-6xl mx-auto bg-base-100 shadow-sm"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></div></div>`);
}
export {
  _layout as default
};
