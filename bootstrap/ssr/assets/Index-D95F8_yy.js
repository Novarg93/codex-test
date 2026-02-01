import { defineComponent, withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./DefaultLayout-CLBo7IEt.js";
import "axios";
import "lucide-vue-next";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    games: {}
  },
  setup(__props) {
    const props = __props;
    const games = props.games;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-10 md:py-16 lg:py-20"${_scopeId}><div class="mb-6"${_scopeId}><h1 class="text-3xl font-bold"${_scopeId}>Games</h1><p class="text-sm text-muted-foreground"${_scopeId}>Выбери игру, чтобы посмотреть разделы и товары.</p></div><div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(games), (g) => {
              _push2(`<article class="border border-border rounded-xl p-3 hover:shadow transition"${_scopeId}>`);
              if (g.image_url) {
                _push2(`<img${ssrRenderAttr("src", g.image_url)} alt="" class="w-full h-36 object-cover rounded-lg mb-3"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<h3 class="font-medium mb-2 line-clamp-2"${_scopeId}>${ssrInterpolate(g.name)}</h3>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("games.show", g.slug),
                class: "text-primary hover:underline text-sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Open `);
                  } else {
                    return [
                      createTextVNode(" Open ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</article>`);
            });
            _push2(`<!--]--></div></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-10 md:py-16 lg:py-20" }, [
                createVNode("div", { class: "mb-6" }, [
                  createVNode("h1", { class: "text-3xl font-bold" }, "Games"),
                  createVNode("p", { class: "text-sm text-muted-foreground" }, "Выбери игру, чтобы посмотреть разделы и товары.")
                ]),
                createVNode("div", { class: "grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(games), (g) => {
                    return openBlock(), createBlock("article", {
                      key: g.id,
                      class: "border border-border rounded-xl p-3 hover:shadow transition"
                    }, [
                      g.image_url ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: g.image_url,
                        alt: "",
                        class: "w-full h-36 object-cover rounded-lg mb-3"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("h3", { class: "font-medium mb-2 line-clamp-2" }, toDisplayString(g.name), 1),
                      createVNode(unref(Link), {
                        href: _ctx.route("games.show", g.slug),
                        class: "text-primary hover:underline text-sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Open ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Games/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
