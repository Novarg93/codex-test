import { defineComponent, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, withKeys, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./DefaultLayout-CLBo7IEt.js";
import { _ as _sfc_main$3 } from "./OrderStatusBadge-wYUmzA38.js";
import axios from "axios";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./Input-TWcjNfes.js";
import { _ as _sfc_main$1 } from "./SeoHead-CQ0qjzaG.js";
import "lucide-vue-next";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    seo: {},
    order: {}
  },
  setup(__props) {
    const props = __props;
    function formatPrice(cents) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: props.order.currency }).format(cents / 100);
    }
    function showOptPrice(opt) {
      return opt.calc_mode === "percent" ? (opt.value_percent ?? 0) !== 0 : (opt.value_cents ?? 0) !== 0;
    }
    function retryPay(orderId) {
      router.post(route("orders.pay", orderId));
    }
    const isEditingNick = ref(false);
    const nickVal = ref(props.order.nickname ?? "");
    const isSavingNick = ref(false);
    const justSavedNick = ref(false);
    const nickError = ref(null);
    function startEditNick() {
      nickError.value = null;
      nickVal.value = props.order.nickname ?? "";
      isEditingNick.value = true;
    }
    function cancelEditNick() {
      isEditingNick.value = false;
      nickError.value = null;
    }
    async function saveNick() {
      const v = nickVal.value.trim();
      if (!v) {
        nickError.value = "Required";
        return;
      }
      if (!/^[A-Za-z0-9_]{2,30}$/.test(v)) {
        nickError.value = 'Only letters, digits and "_", 2–30 chars.';
        return;
      }
      if (isSavingNick.value) return;
      isSavingNick.value = true;
      nickError.value = null;
      try {
        const { data } = await axios.post(route("orders.nickname", props.order.id), { nickname: v });
        props.order.nickname = data.nickname;
        props.order.needs_nickname = false;
        isEditingNick.value = false;
        justSavedNick.value = true;
        setTimeout(() => justSavedNick.value = false, 2e3);
      } catch (e) {
        const msg = e?.response?.data?.message || "Failed to save";
        nickError.value = String(msg);
      } finally {
        isSavingNick.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { seo: _ctx.seo }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8"${_scopeId}><div class="flex items-center gap-3 mb-6"${_scopeId}><h1 class="text-3xl font-semibold"${_scopeId}>Order #${ssrInterpolate(_ctx.order.id)}</h1>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              status: _ctx.order.status
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid lg:grid-cols-3 gap-6"${_scopeId}><div class="lg:col-span-2 space-y-3"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.order.items, (it) => {
              _push2(`<div class="border border-border rounded-lg p-4 flex justify-between"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
              if (it.image_url) {
                _push2(`<img class="w-16 h-16 object-cover rounded"${ssrRenderAttr("src", it.image_url)}${ssrRenderAttr("alt", it.product_name)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(it.product_name)}</div>`);
              if (it.options?.length) {
                _push2(`<div class="text-sm text-muted-foreground"${_scopeId}><ul class="list-disc pl-5 space-y-0.5"${_scopeId}><!--[-->`);
                ssrRenderList(it.options, (opt) => {
                  _push2(`<li${_scopeId}>`);
                  if (opt.is_ga) {
                    _push2(`<span class="text-[10px] mr-2 px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200"${_scopeId}>GA</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span class="font-medium"${_scopeId}>${ssrInterpolate(opt.title)}</span>`);
                  if (showOptPrice(opt)) {
                    _push2(`<span class="ml-1"${_scopeId}> ( `);
                    if (opt.calc_mode === "percent") {
                      _push2(`<!--[-->+${ssrInterpolate(opt.value_percent ?? 0)}% ${ssrInterpolate(opt.scope)}<!--]-->`);
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
              if (it.ranges?.length) {
                _push2(`<div class="text-sm text-muted-foreground"${_scopeId}><!--[-->`);
                ssrRenderList(it.ranges, (range) => {
                  _push2(`<div${_scopeId}>${ssrInterpolate(range.title)}: ${ssrInterpolate(range.label)}</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (it.has_qty_slider) {
                _push2(`<!--[--> Qty: ${ssrInterpolate(it.qty)} · ${ssrInterpolate(formatPrice(it.unit_price_cents))}/each <!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="mt-2"${_scopeId}>`);
              if (_ctx.order.status === "completed" && it.review_state === "none" && it.leave_review_url) {
                _push2(`<a${ssrRenderAttr("href", it.leave_review_url)} class="text-sm underline text-primary hover:opacity-80"${_scopeId}> Leave review </a>`);
              } else if (it.review_state === "pending") {
                _push2(`<span class="text-sm text-muted-foreground"${_scopeId}> Review submitted (pending) </span>`);
              } else if (it.review_state === "approved") {
                _push2(`<span class="text-sm text-green-700"${_scopeId}> Review published </span>`);
              } else if (it.review_state === "rejected") {
                _push2(`<span class="text-sm text-muted-foreground"${_scopeId}> Review submitted </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="font-semibold"${_scopeId}>${ssrInterpolate(formatPrice(it.line_total_cents))}</div></div>`);
            });
            _push2(`<!--]--></div><div class="lg:col-span-1 space-y-4"${_scopeId}><div class="border border-border rounded-lg p-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-sm text-muted-foreground"${_scopeId}>${ssrInterpolate(_ctx.order.placed_at || "—")}</div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              status: _ctx.order.status
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 text-lg font-semibold"${_scopeId}>Total: ${ssrInterpolate(formatPrice(_ctx.order.total_cents))}</div>`);
            if (_ctx.order.status === "pending") {
              _push2(`<div class="mt-4 space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                class: "w-full",
                onClick: ($event) => retryPay(_ctx.order.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Retry Payment`);
                  } else {
                    return [
                      createTextVNode("Retry Payment")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (_ctx.$page.props.auth?.user && !_ctx.$page.props.auth.user.email_verified_at) {
                _push2(`<p class="text-xs text-amber-600"${_scopeId}> Please verify your email to complete the payment. </p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([justSavedNick.value ? "bg-green-700/10 border-green-700" : "", "border border-border rounded-lg p-4"])}"${_scopeId}><div class="flex items-center justify-between mb-2"${_scopeId}><div class="font-semibold"${_scopeId}>Character nickname</div>`);
            if (!isEditingNick.value) {
              _push2(`<button class="text-xs px-2 py-1 rounded border hover:bg-muted"${_scopeId}>${ssrInterpolate(_ctx.order.nickname ? "Edit" : "Add")}</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!isEditingNick.value) {
              _push2(`<!--[--><div class="text-sm"${_scopeId}>`);
              if (_ctx.order.nickname) {
                _push2(`<span${_scopeId}><span class="text-muted-foreground"${_scopeId}>Current:</span> <span class="font-medium"${_scopeId}>${ssrInterpolate(_ctx.order.nickname)}</span></span>`);
              } else {
                _push2(`<span class="text-amber-700"${_scopeId}>Not set</span>`);
              }
              _push2(`</div><p class="text-xs text-muted-foreground mt-1"${_scopeId}>Used for in-game delivery.</p><!--]-->`);
            } else {
              _push2(`<!--[--><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$5), {
                modelValue: nickVal.value,
                "onUpdate:modelValue": ($event) => nickVal.value = $event,
                class: "h-9 px-2 rounded border w-56",
                placeholder: "Nickname (A–Z, 0–9, _)",
                onKeydown: [saveNick, cancelEditNick],
                autocomplete: "off"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                variant: "default",
                disabled: isSavingNick.value,
                onClick: saveNick
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(isSavingNick.value ? "Saving…" : "Save")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(isSavingNick.value ? "Saving…" : "Save"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                variant: "secondary",
                onClick: cancelEditNick
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Cancel`);
                  } else {
                    return [
                      createTextVNode("Cancel")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (nickError.value) {
                _push2(`<div class="mt-1 text-xs text-red-600"${_scopeId}>${ssrInterpolate(nickError.value)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="mt-1 text-xs text-muted-foreground"${_scopeId}>Only letters, digits and “_”, 2–30 chars.</div><!--]-->`);
            }
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8" }, [
                createVNode("div", { class: "flex items-center gap-3 mb-6" }, [
                  createVNode("h1", { class: "text-3xl font-semibold" }, "Order #" + toDisplayString(_ctx.order.id), 1),
                  createVNode(_sfc_main$3, {
                    status: _ctx.order.status
                  }, null, 8, ["status"])
                ]),
                createVNode("div", { class: "grid lg:grid-cols-3 gap-6" }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.items, (it) => {
                      return openBlock(), createBlock("div", {
                        key: it.id,
                        class: "border border-border rounded-lg p-4 flex justify-between"
                      }, [
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          it.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "w-16 h-16 object-cover rounded",
                            src: it.image_url,
                            alt: it.product_name
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                          createVNode("div", null, [
                            createVNode("div", { class: "font-medium" }, toDisplayString(it.product_name), 1),
                            it.options?.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-sm text-muted-foreground"
                            }, [
                              createVNode("ul", { class: "list-disc pl-5 space-y-0.5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(it.options, (opt) => {
                                  return openBlock(), createBlock("li", {
                                    key: opt.id
                                  }, [
                                    opt.is_ga ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-[10px] mr-2 px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200"
                                    }, "GA")) : createCommentVNode("", true),
                                    createVNode("span", { class: "font-medium" }, toDisplayString(opt.title), 1),
                                    showOptPrice(opt) ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "ml-1"
                                    }, [
                                      createTextVNode(" ( "),
                                      opt.calc_mode === "percent" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createTextVNode("+" + toDisplayString(opt.value_percent ?? 0) + "% " + toDisplayString(opt.scope), 1)
                                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString((opt.value_cents ?? 0) >= 0 ? "+" : "") + toDisplayString(formatPrice(opt.value_cents ?? 0)) + " " + toDisplayString(opt.scope), 1)
                                      ], 64)),
                                      createTextVNode(" ) ")
                                    ])) : createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true),
                            it.ranges?.length ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-sm text-muted-foreground"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(it.ranges, (range) => {
                                return openBlock(), createBlock("div", {
                                  key: range.label
                                }, toDisplayString(range.title) + ": " + toDisplayString(range.label), 1);
                              }), 128))
                            ])) : createCommentVNode("", true),
                            it.has_qty_slider ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                              createTextVNode(" Qty: " + toDisplayString(it.qty) + " · " + toDisplayString(formatPrice(it.unit_price_cents)) + "/each ", 1)
                            ], 64)) : createCommentVNode("", true),
                            createVNode("div", { class: "mt-2" }, [
                              _ctx.order.status === "completed" && it.review_state === "none" && it.leave_review_url ? (openBlock(), createBlock("a", {
                                key: 0,
                                href: it.leave_review_url,
                                class: "text-sm underline text-primary hover:opacity-80"
                              }, " Leave review ", 8, ["href"])) : it.review_state === "pending" ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-sm text-muted-foreground"
                              }, " Review submitted (pending) ")) : it.review_state === "approved" ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: "text-sm text-green-700"
                              }, " Review published ")) : it.review_state === "rejected" ? (openBlock(), createBlock("span", {
                                key: 3,
                                class: "text-sm text-muted-foreground"
                              }, " Review submitted ")) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "font-semibold" }, toDisplayString(formatPrice(it.line_total_cents)), 1)
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "lg:col-span-1 space-y-4" }, [
                    createVNode("div", { class: "border border-border rounded-lg p-4" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(_ctx.order.placed_at || "—"), 1),
                        createVNode(_sfc_main$3, {
                          status: _ctx.order.status
                        }, null, 8, ["status"])
                      ]),
                      createVNode("div", { class: "mt-2 text-lg font-semibold" }, "Total: " + toDisplayString(formatPrice(_ctx.order.total_cents)), 1),
                      _ctx.order.status === "pending" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-4 space-y-2"
                      }, [
                        createVNode(unref(_sfc_main$4), {
                          class: "w-full",
                          onClick: ($event) => retryPay(_ctx.order.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Retry Payment")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        _ctx.$page.props.auth?.user && !_ctx.$page.props.auth.user.email_verified_at ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-amber-600"
                        }, " Please verify your email to complete the payment. ")) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", {
                      class: ["border border-border rounded-lg p-4", justSavedNick.value ? "bg-green-700/10 border-green-700" : ""]
                    }, [
                      createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                        createVNode("div", { class: "font-semibold" }, "Character nickname"),
                        !isEditingNick.value ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: "text-xs px-2 py-1 rounded border hover:bg-muted",
                          onClick: startEditNick
                        }, toDisplayString(_ctx.order.nickname ? "Edit" : "Add"), 1)) : createCommentVNode("", true)
                      ]),
                      !isEditingNick.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("div", { class: "text-sm" }, [
                          _ctx.order.nickname ? (openBlock(), createBlock("span", { key: 0 }, [
                            createVNode("span", { class: "text-muted-foreground" }, "Current:"),
                            createTextVNode(),
                            createVNode("span", { class: "font-medium" }, toDisplayString(_ctx.order.nickname), 1)
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-amber-700"
                          }, "Not set"))
                        ]),
                        createVNode("p", { class: "text-xs text-muted-foreground mt-1" }, "Used for in-game delivery.")
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(unref(_sfc_main$5), {
                            modelValue: nickVal.value,
                            "onUpdate:modelValue": ($event) => nickVal.value = $event,
                            class: "h-9 px-2 rounded border w-56",
                            placeholder: "Nickname (A–Z, 0–9, _)",
                            onKeydown: [
                              withKeys(withModifiers(saveNick, ["prevent"]), ["enter"]),
                              withKeys(withModifiers(cancelEditNick, ["prevent"]), ["esc"])
                            ],
                            autocomplete: "off"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                          createVNode(unref(_sfc_main$4), {
                            variant: "default",
                            disabled: isSavingNick.value,
                            onClick: saveNick
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(isSavingNick.value ? "Saving…" : "Save"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(unref(_sfc_main$4), {
                            variant: "secondary",
                            onClick: cancelEditNick
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          })
                        ]),
                        nickError.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-1 text-xs text-red-600"
                        }, toDisplayString(nickError.value), 1)) : createCommentVNode("", true),
                        createVNode("div", { class: "mt-1 text-xs text-muted-foreground" }, "Only letters, digits and “_”, 2–30 chars.")
                      ], 64))
                    ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Orders/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
