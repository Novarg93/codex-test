import { defineComponent, withCtx, unref, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./DefaultLayout-CLBo7IEt.js";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./PostsBreadcrumbs-CN2EL0q5.js";
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
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    seo: {},
    posts: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        seo: props.seo
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`<header class="my-6"${_scopeId}><h1 class="text-3xl font-semibold"${_scopeId}>Blog</h1><p class="text-muted-foreground mt-2"${_scopeId}> Latest posts and updates. </p></header><div class="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(props.posts.data, (post) => {
              _push2(`<article class="border border-border rounded-xl p-3 hover:shadow transition"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("posts.show", post.slug)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (post.image_url) {
                      _push3(`<img${ssrRenderAttr("src", post.image_url)} alt="" class="w-full h-40 object-cover rounded-lg mb-3"${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      post.image_url ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: post.image_url,
                        alt: "",
                        class: "w-full h-40 object-cover rounded-lg mb-3"
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<h2 class="text-lg font-semibold leading-snug"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("posts.show", post.slug),
                class: "hover:underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(post.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(post.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h2>`);
              if (post.published_at) {
                _push2(`<p class="mt-1 text-xs text-muted-foreground"${_scopeId}>${ssrInterpolate(post.published_at)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (post.excerpt) {
                _push2(`<p class="mt-3 text-sm text-muted-foreground line-clamp-3"${_scopeId}>${ssrInterpolate(post.excerpt)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("posts.show", post.slug),
                class: "mt-3 inline-block text-primary hover:underline text-sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` View `);
                  } else {
                    return [
                      createTextVNode(" View ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</article>`);
            });
            _push2(`<!--]--></div>`);
            if (props.posts.links?.length) {
              _push2(`<div class="mt-8 flex gap-2 flex-wrap"${_scopeId}><!--[-->`);
              ssrRenderList(props.posts.links, (l) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: l.url ?? l.label,
                  href: l.url || "#",
                  class: ["px-3 py-1 rounded border text-sm", [
                    l.active ? "bg-primary text-primary-foreground border-primary" : "hover:bg-accent",
                    !l.url ? "opacity-50 pointer-events-none" : ""
                  ]],
                  "preserve-scroll": ""
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16" }, [
                createVNode(_sfc_main$3),
                createVNode("header", { class: "my-6" }, [
                  createVNode("h1", { class: "text-3xl font-semibold" }, "Blog"),
                  createVNode("p", { class: "text-muted-foreground mt-2" }, " Latest posts and updates. ")
                ]),
                createVNode("div", { class: "grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.posts.data, (post) => {
                    return openBlock(), createBlock("article", {
                      key: post.id,
                      class: "border border-border rounded-xl p-3 hover:shadow transition"
                    }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("posts.show", post.slug)
                      }, {
                        default: withCtx(() => [
                          post.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: post.image_url,
                            alt: "",
                            class: "w-full h-40 object-cover rounded-lg mb-3"
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["href"]),
                      createVNode("h2", { class: "text-lg font-semibold leading-snug" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("posts.show", post.slug),
                          class: "hover:underline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(post.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      post.published_at ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-1 text-xs text-muted-foreground"
                      }, toDisplayString(post.published_at), 1)) : createCommentVNode("", true),
                      post.excerpt ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "mt-3 text-sm text-muted-foreground line-clamp-3"
                      }, toDisplayString(post.excerpt), 1)) : createCommentVNode("", true),
                      createVNode(unref(Link), {
                        href: _ctx.route("posts.show", post.slug),
                        class: "mt-3 inline-block text-primary hover:underline text-sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" View ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]);
                  }), 128))
                ]),
                props.posts.links?.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-8 flex gap-2 flex-wrap"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.posts.links, (l) => {
                    return openBlock(), createBlock(unref(Link), {
                      key: l.url ?? l.label,
                      href: l.url || "#",
                      class: ["px-3 py-1 rounded border text-sm", [
                        l.active ? "bg-primary text-primary-foreground border-primary" : "hover:bg-accent",
                        !l.url ? "opacity-50 pointer-events-none" : ""
                      ]],
                      innerHTML: l.label,
                      "preserve-scroll": ""
                    }, null, 8, ["href", "class", "innerHTML"]);
                  }), 128))
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
