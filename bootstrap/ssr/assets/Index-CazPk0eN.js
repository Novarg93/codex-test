import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import axios from "axios";
import { _ as _sfc_main$2, u as useCartSummary } from "./DefaultLayout-CLBo7IEt.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, d as _sfc_main$7, e as _sfc_main$8 } from "./BreadcrumbSeparator-DbiA9_uT.js";
import "clsx";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./SeoHead-CQ0qjzaG.js";
import "lucide-vue-next";
import "reka-ui";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    seo: {},
    items: {},
    total_qty: {},
    total_sum_cents: {}
  },
  setup(__props) {
    const { loadSummary, setSummary } = useCartSummary();
    const props = __props;
    const items = ref(props.items);
    const totalQty = ref(props.total_qty);
    const totalSum = ref(props.total_sum_cents);
    function formatPrice(cents) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
    }
    function recalc() {
      totalQty.value = items.value.reduce((sum, i) => sum + i.qty, 0);
      totalSum.value = items.value.reduce((sum, i) => sum + i.line_total_cents, 0);
    }
    function showOptPrice(opt) {
      return opt.calc_mode === "percent" ? (opt.value_percent ?? 0) !== 0 : (opt.value_cents ?? 0) !== 0;
    }
    async function removeItem(item) {
      try {
        const { data } = await axios.post("/cart/remove", { item_id: item.id });
        items.value = items.value.filter((i) => i.id !== item.id);
        recalc();
        if (data?.summary) {
          setSummary(data.summary, { refreshWindow: true });
        } else {
          await loadSummary({ force: true });
        }
      } catch (e) {
        console.error("removeItem failed", e);
        await loadSummary({ force: true });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        seo: props.seo
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$6), {
                                href: _ctx.route("home")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Home`);
                                  } else {
                                    return [
                                      createTextVNode("Home")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$6), {
                                  href: _ctx.route("home")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Home")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$8), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Cart`);
                                  } else {
                                    return [
                                      createTextVNode("Cart")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$8), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Cart")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), {
                                href: _ctx.route("home")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Home")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7)),
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createTextVNode("Cart")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), {
                              href: _ctx.route("home")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7)),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$8), null, {
                              default: withCtx(() => [
                                createTextVNode("Cart")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h1 class="text-3xl font-semibold my-6"${_scopeId}>Your Cart</h1>`);
            if (items.value.length) {
              _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (item) => {
                _push2(`<div class="flex items-center gap-4 border rounded-lg p-4"${_scopeId}>`);
                if (item.product.image_url) {
                  _push2(`<img${ssrRenderAttr("src", item.product.image_url)} alt="" class="w-20 h-20 object-cover rounded"${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex-1 min-h-20"${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(item.product.name)}</div>`);
                if (item.options && item.options.length) {
                  _push2(`<div class="text-sm text-muted-foreground"${_scopeId}><ul class="list-disc pl-5 space-y-0.5"${_scopeId}><!--[-->`);
                  ssrRenderList(item.options, (opt) => {
                    _push2(`<li${_scopeId}>`);
                    if (opt.is_ga) {
                      _push2(`<span class="text-[10px] mr-2 px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200"${_scopeId}> GA </span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<span class="font-medium"${_scopeId}>${ssrInterpolate(opt.title)}</span>`);
                    if (showOptPrice(opt)) {
                      _push2(`<span class="ml-1"${_scopeId}> ( `);
                      if (opt.calc_mode === "percent") {
                        _push2(`<!--[--> +${ssrInterpolate(opt.value_percent ?? 0)}% ${ssrInterpolate(opt.scope)}<!--]-->`);
                      } else {
                        _push2(`<!--[-->${ssrInterpolate((opt.value_cents ?? 0) >= 0 ? "+" : "")}${ssrInterpolate(formatPrice(opt.value_cents ?? 0))} ${ssrInterpolate(opt.scope)}<!--]-->`);
                      }
                      _push2(` ) </span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</li>`);
                  });
                  _push2(`<!--]--></ul></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.range_labels && item.range_labels.length) {
                  _push2(`<div class="text-sm text-muted-foreground"${_scopeId}>${ssrInterpolate(item.range_labels.join(", "))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.has_qty_slider) {
                  _push2(`<div class="text-sm text-muted-foreground"${_scopeId}>${ssrInterpolate(formatPrice(item.unit_price_cents))} / each </div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.has_qty_slider) {
                  _push2(`<div class="flex items-center gap-2 mt-2"${_scopeId}><span${_scopeId}>Quantity: ${ssrInterpolate(item.qty)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="text-right"${_scopeId}><div class="font-semibold"${_scopeId}>${ssrInterpolate(formatPrice(item.line_total_cents))}</div><button class="text-sm text-red-500 mt-1"${_scopeId}>Remove</button></div></div>`);
              });
              _push2(`<!--]-->`);
              if (_ctx.$page.props.auth?.user) {
                _push2(`<div class="flex justify-end"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("checkout.index"),
                  class: "mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Checkout `);
                    } else {
                      return [
                        createTextVNode(" Checkout ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<div class="flex justify-end"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("login"),
                  class: "mt-3 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Login to checkout `);
                    } else {
                      return [
                        createTextVNode(" Login to checkout ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="text-center text-muted-foreground"${_scopeId}> Your cart is empty. </div>`);
            }
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16" }, [
                createVNode(unref(_sfc_main$3), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$4), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), {
                              href: _ctx.route("home")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7)),
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$8), null, {
                              default: withCtx(() => [
                                createTextVNode("Cart")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("h1", { class: "text-3xl font-semibold my-6" }, "Your Cart"),
                items.value.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "flex items-center gap-4 border rounded-lg p-4"
                    }, [
                      item.product.image_url ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: item.product.image_url,
                        alt: "",
                        class: "w-20 h-20 object-cover rounded"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex-1 min-h-20" }, [
                        createVNode("div", { class: "font-medium" }, toDisplayString(item.product.name), 1),
                        item.options && item.options.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-muted-foreground"
                        }, [
                          createVNode("ul", { class: "list-disc pl-5 space-y-0.5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.options, (opt) => {
                              return openBlock(), createBlock("li", {
                                key: opt.id
                              }, [
                                opt.is_ga ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-[10px] mr-2 px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200"
                                }, " GA ")) : createCommentVNode("", true),
                                createVNode("span", { class: "font-medium" }, toDisplayString(opt.title), 1),
                                showOptPrice(opt) ? (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "ml-1"
                                }, [
                                  createTextVNode(" ( "),
                                  opt.calc_mode === "percent" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" +" + toDisplayString(opt.value_percent ?? 0) + "% " + toDisplayString(opt.scope), 1)
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString((opt.value_cents ?? 0) >= 0 ? "+" : "") + toDisplayString(formatPrice(opt.value_cents ?? 0)) + " " + toDisplayString(opt.scope), 1)
                                  ], 64)),
                                  createTextVNode(" ) ")
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        item.range_labels && item.range_labels.length ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-sm text-muted-foreground"
                        }, toDisplayString(item.range_labels.join(", ")), 1)) : createCommentVNode("", true),
                        item.has_qty_slider ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "text-sm text-muted-foreground"
                        }, toDisplayString(formatPrice(item.unit_price_cents)) + " / each ", 1)) : createCommentVNode("", true),
                        item.has_qty_slider ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "flex items-center gap-2 mt-2"
                        }, [
                          createVNode("span", null, "Quantity: " + toDisplayString(item.qty), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "text-right" }, [
                        createVNode("div", { class: "font-semibold" }, toDisplayString(formatPrice(item.line_total_cents)), 1),
                        createVNode("button", {
                          class: "text-sm text-red-500 mt-1",
                          onClick: ($event) => removeItem(item)
                        }, "Remove", 8, ["onClick"])
                      ])
                    ]);
                  }), 128)),
                  _ctx.$page.props.auth?.user ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex justify-end"
                  }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("checkout.index"),
                      class: "mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Checkout ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex justify-end"
                  }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("login"),
                      class: "mt-3 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Login to checkout ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center text-muted-foreground"
                }, " Your cart is empty. "))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cart/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
