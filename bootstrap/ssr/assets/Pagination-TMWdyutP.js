import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.links?.length) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: "mt-6 flex items-center justify-center gap-2",
          "aria-label": "pagination"
        }, _attrs))}><!--[-->`);
        ssrRenderList(_ctx.links, (l, i) => {
          _push(`<!--[-->`);
          if (!l.url) {
            _push(`<span class="px-3 py-2 text-sm text-muted-foreground select-none">${l.label ?? ""}</span>`);
          } else if (l.active) {
            _push(`<span class="px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium">${l.label ?? ""}</span>`);
          } else {
            _push(ssrRenderComponent(unref(Link), {
              href: l.url,
              "preserve-scroll": "",
              class: "px-3 py-2 text-sm rounded-md hover:bg-accent"
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
