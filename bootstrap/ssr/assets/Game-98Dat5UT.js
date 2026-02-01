import { defineComponent, unref, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createTextVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./DefaultLayout-CLBo7IEt.js";
import { _ as _sfc_main$3 } from "./Breadcrumbs-23vYElXm.js";
import { _ as _sfc_main$1 } from "./SeoHead-CQ0qjzaG.js";
import "axios";
import "lucide-vue-next";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
import "./BreadcrumbSeparator-DbiA9_uT.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Game",
  __ssrInlineRender: true,
  props: {
    game: {},
    category: {},
    categories: {},
    products: {},
    seo: {},
    totalProducts: {}
  },
  setup(__props) {
    const props = __props;
    const { game, category, categories, products, seo, totalProducts } = props;
    function formatPrice(cents) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((cents || 0) / 100);
    }
    function previewLine(p) {
      if (p.price_preview && p.price_preview.trim()) return p.price_preview;
      return formatPrice(p.price_cents);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { seo: unref(seo) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              game: unref(game),
              category: unref(category)
            }, null, _parent2, _scopeId));
            _push2(`<header class="my-6"${_scopeId}><h1 class="text-3xl font-semibold"${_scopeId}>${ssrInterpolate(unref(category) ? unref(category).name : unref(game).name)}</h1>`);
            if (unref(category)?.short || unref(category)?.description || unref(game)?.description) {
              _push2(`<p class="text-muted-foreground mt-2"${_scopeId}>${ssrInterpolate(unref(category)?.short ?? unref(category)?.description ?? unref(game)?.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</header><div class="grid grid-cols-12 gap-6"${_scopeId}><aside class="col-span-12 md:col-span-3 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.show", unref(game).slug),
              class: ["flex items-center px-3 py-2 rounded-lg border border-border hover:bg-accent", !unref(category) ? "bg-primary text-primary-foreground border-transparent" : ""]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex-1"${_scopeId2}>All</span><span class="text-xs opacity-70"${_scopeId2}>${ssrInterpolate(unref(totalProducts))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex-1" }, "All"),
                    createVNode("span", { class: "text-xs opacity-70" }, toDisplayString(unref(totalProducts)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(categories), (c) => {
              _push2(ssrRenderComponent(unref(Link), {
                key: c.id,
                href: _ctx.route("categories.show", [unref(game).slug, c.slug]),
                class: ["flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent", unref(category)?.id === c.id ? "bg-primary text-primary-foreground border-transparent" : ""]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (c.image_url) {
                      _push3(`<img${ssrRenderAttr("src", c.image_url)} class="w-6 h-6 rounded object-cover text-white border-0" alt=""${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<span class="flex-1"${_scopeId2}>${ssrInterpolate(c.name)}</span><span class="text-xs opacity-70"${_scopeId2}>${ssrInterpolate(c.products_count)}</span>`);
                  } else {
                    return [
                      c.image_url ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: c.image_url,
                        class: "w-6 h-6 rounded object-cover text-white border-0",
                        alt: ""
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("span", { class: "flex-1" }, toDisplayString(c.name), 1),
                      createVNode("span", { class: "text-xs opacity-70" }, toDisplayString(c.products_count), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></aside><main class="col-span-12 md:col-span-9"${_scopeId}><div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(products).data, (p) => {
              _push2(`<article class="border border-border rounded-xl p-3 hover:shadow transition"${_scopeId}>`);
              if (p.image_url) {
                _push2(`<img${ssrRenderAttr("src", p.image_url)} class="w-full h-36 object-cover object-top rounded-lg mb-2"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<h3 class="font-medium line-clamp-2"${_scopeId}>${ssrInterpolate(p.name)}</h3><div class="text-sm text-muted-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(p.short)}</div><div class="mt-2 font-semibold"${_scopeId}>${ssrInterpolate(previewLine(p))}</div>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("products.show", [unref(game).slug, unref(category)?.slug ?? p.categories?.[0]?.slug ?? "items", p.slug]),
                class: "mt-2 inline-block text-primary hover:underline text-sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`View`);
                  } else {
                    return [
                      createTextVNode("View")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</article>`);
            });
            _push2(`<!--]--></div>`);
            if (unref(seo).seo_text) {
              _push2(`<div class="prose prose-invert max-w-none mt-10"${_scopeId}><details${_scopeId}><summary class="cursor-pointer select-none"${_scopeId}>Read more</summary><div${_scopeId}>${unref(seo).seo_text ?? ""}</div></details></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(products).links?.length) {
              _push2(`<div class="mt-8 flex gap-2 flex-wrap"${_scopeId}><!--[-->`);
              ssrRenderList(unref(products).links, (l) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: l.url ?? l.label,
                  href: l.url || "#",
                  class: ["px-3 py-1 rounded border text-sm", [
                    l.active ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                    !l.url ? "opacity-50 pointer-events-none" : ""
                  ]],
                  "preserve-scroll": ""
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</main></div></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16" }, [
                createVNode(_sfc_main$3, {
                  game: unref(game),
                  category: unref(category)
                }, null, 8, ["game", "category"]),
                createVNode("header", { class: "my-6" }, [
                  createVNode("h1", { class: "text-3xl font-semibold" }, toDisplayString(unref(category) ? unref(category).name : unref(game).name), 1),
                  unref(category)?.short || unref(category)?.description || unref(game)?.description ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-muted-foreground mt-2"
                  }, toDisplayString(unref(category)?.short ?? unref(category)?.description ?? unref(game)?.description), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "grid grid-cols-12 gap-6" }, [
                  createVNode("aside", { class: "col-span-12 md:col-span-3 space-y-2" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("games.show", unref(game).slug),
                      class: ["flex items-center px-3 py-2 rounded-lg border border-border hover:bg-accent", !unref(category) ? "bg-primary text-primary-foreground border-transparent" : ""]
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "flex-1" }, "All"),
                        createVNode("span", { class: "text-xs opacity-70" }, toDisplayString(unref(totalProducts)), 1)
                      ]),
                      _: 1
                    }, 8, ["href", "class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (c) => {
                      return openBlock(), createBlock(unref(Link), {
                        key: c.id,
                        href: _ctx.route("categories.show", [unref(game).slug, c.slug]),
                        class: ["flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent", unref(category)?.id === c.id ? "bg-primary text-primary-foreground border-transparent" : ""]
                      }, {
                        default: withCtx(() => [
                          c.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: c.image_url,
                            class: "w-6 h-6 rounded object-cover text-white border-0",
                            alt: ""
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode("span", { class: "flex-1" }, toDisplayString(c.name), 1),
                          createVNode("span", { class: "text-xs opacity-70" }, toDisplayString(c.products_count), 1)
                        ]),
                        _: 2
                      }, 1032, ["href", "class"]);
                    }), 128))
                  ]),
                  createVNode("main", { class: "col-span-12 md:col-span-9" }, [
                    createVNode("div", { class: "grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(products).data, (p) => {
                        return openBlock(), createBlock("article", {
                          key: p.id,
                          class: "border border-border rounded-xl p-3 hover:shadow transition"
                        }, [
                          p.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: p.image_url,
                            class: "w-full h-36 object-cover object-top rounded-lg mb-2"
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode("h3", { class: "font-medium line-clamp-2" }, toDisplayString(p.name), 1),
                          createVNode("div", { class: "text-sm text-muted-foreground line-clamp-2" }, toDisplayString(p.short), 1),
                          createVNode("div", { class: "mt-2 font-semibold" }, toDisplayString(previewLine(p)), 1),
                          createVNode(unref(Link), {
                            href: _ctx.route("products.show", [unref(game).slug, unref(category)?.slug ?? p.categories?.[0]?.slug ?? "items", p.slug]),
                            class: "mt-2 inline-block text-primary hover:underline text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]);
                      }), 128))
                    ]),
                    unref(seo).seo_text ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "prose prose-invert max-w-none mt-10"
                    }, [
                      createVNode("details", null, [
                        createVNode("summary", { class: "cursor-pointer select-none" }, "Read more"),
                        createVNode("div", {
                          innerHTML: unref(seo).seo_text
                        }, null, 8, ["innerHTML"])
                      ])
                    ])) : createCommentVNode("", true),
                    unref(products).links?.length ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-8 flex gap-2 flex-wrap"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(products).links, (l) => {
                        return openBlock(), createBlock(unref(Link), {
                          key: l.url ?? l.label,
                          href: l.url || "#",
                          class: ["px-3 py-1 rounded border text-sm", [
                            l.active ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                            !l.url ? "opacity-50 pointer-events-none" : ""
                          ]],
                          innerHTML: l.label,
                          "preserve-scroll": ""
                        }, null, 8, ["href", "class", "innerHTML"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Catalog/Game.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
