import { defineComponent, ref, computed, watch, mergeProps, useSSRContext, withCtx, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$3, a as _sfc_main$5 } from "./DefaultLayout-CLBo7IEt.js";
import "@stripe/stripe-js";
import axios from "axios";
import { _ as _sfc_main$4 } from "./Input-TWcjNfes.js";
import { _ as _sfc_main$2 } from "./SeoHead-CQ0qjzaG.js";
import "@inertiajs/vue3";
import "lucide-vue-next";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GameNicknameForm",
  __ssrInlineRender: true,
  props: {
    initialNickname: {},
    required: { type: Boolean },
    saveUrl: {},
    label: {},
    help: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const nickname = ref(props.initialNickname ?? "");
    const saving = ref(false);
    const saved = ref(false);
    const cleared = ref(false);
    const error = ref(null);
    const isEmpty = computed(() => nickname.value.trim() === "");
    const isDirty = computed(() => (props.initialNickname ?? "") !== nickname.value);
    const needsAttention = computed(() => (props.required ?? false) && isEmpty.value);
    const inputClass = computed(() => [
      "block w-full text-white rounded-md border px-3 py-2 bg-input text-sm outline-none transition",
      needsAttention.value || error.value ? "border-red-500 ring-1 ring-red-500 focus:ring-red-500" : "border-border focus:ring-1 focus:ring-primary"
    ].join(" "));
    watch(nickname, () => {
      error.value = null;
      saved.value = false;
      cleared.value = false;
    });
    __expose({ submit });
    async function submit() {
      if ((props.required ?? false) && isEmpty.value) {
        error.value = "Type Nickname of your character";
        return;
      }
      if (saving.value) return;
      saving.value = true;
      try {
        const payload = { nickname: isEmpty.value ? null : nickname.value.trim() };
        await axios.post(props.saveUrl, payload);
        if (isEmpty.value) {
          if ((props.initialNickname ?? "") !== "") cleared.value = true;
          saved.value = false;
        } else {
          saved.value = true;
          cleared.value = false;
        }
        error.value = null;
      } catch (e) {
        const msg = e?.response?.data?.message || "Error";
        error.value = msg;
      } finally {
        saving.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-lg p-4" }, _attrs))}><label class="block text-sm font-medium mb-2">${ssrInterpolate(_ctx.label ?? "Ник персонажа (в игре)")} `);
      if (!_ctx.required) {
        _push(`<span class="text-xs text-muted-foreground ml-1">(not required)</span>`);
      } else {
        _push(`<span class="text-xs text-red-600 ml-1">*</span>`);
      }
      _push(`</label><input class="${ssrRenderClass(inputClass.value)}"${ssrRenderAttr("value", nickname.value)} type="text" inputmode="text" autocapitalize="none" autocomplete="off" spellcheck="false" placeholder="MyNickName">`);
      if (error.value) {
        _push(`<p class="mt-1 text-xs text-red-600">${ssrInterpolate(error.value)}</p>`);
      } else if (saved.value) {
        _push(`<p class="mt-1 text-xs text-green-600">Saved</p>`);
      } else if (cleared.value) {
        _push(`<p class="mt-1 text-xs text-green-600">Cleared</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-3"><button${ssrIncludeBooleanAttr(saving.value || !isDirty.value) ? " disabled" : ""} class="px-3 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50">${ssrInterpolate(saving.value ? "Submitting..." : "Submit")}</button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/GameNicknameForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    seo: {},
    stripePk: {},
    items: {},
    totals: {},
    promo: {},
    nickname: {}
  },
  setup(__props) {
    const isLoading = ref(false);
    const nickFormRef = ref(null);
    const isMakingPending = ref(false);
    const props = __props;
    const promoCodeInput = ref("");
    const promoApplying = ref(false);
    const promoMessage = ref(null);
    const promoOk = ref(false);
    const promo = ref(props.promo ?? null);
    function normalizeTotals(t) {
      const d = Number.isFinite(t?.discount_cents) ? Number(t.discount_cents) : 0;
      const subtotal = Number(t?.subtotal_cents ?? 0);
      const shipping = Number(t?.shipping_cents ?? 0);
      const tax = Number(t?.tax_cents ?? 0);
      const total = Number.isFinite(t?.total_cents) ? Number(t.total_cents) : Math.max(0, subtotal + shipping + tax - d);
      return {
        subtotal_cents: subtotal,
        shipping_cents: shipping,
        tax_cents: tax,
        discount_cents: d,
        total_cents: total,
        currency: String(t?.currency ?? props.totals.currency ?? "USD")
      };
    }
    const totals = ref(normalizeTotals(props.totals));
    function setTotals(t) {
      totals.value = normalizeTotals(t);
    }
    function formatPrice(cents) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: totals.value.currency ?? props.totals.currency
      }).format((cents || 0) / 100);
    }
    function showOptPrice(opt) {
      return opt.calc_mode === "percent" ? (opt.value_percent ?? 0) !== 0 : (opt.value_cents ?? 0) !== 0;
    }
    async function makePendingDraft() {
      if (isMakingPending.value) return;
      isMakingPending.value = true;
      try {
        if (nickFormRef.value?.submit) {
          await nickFormRef.value.submit();
        }
        const { data } = await axios.post("/checkout/test-pending");
        window.location.href = data?.redirect ?? route("orders.show", data.order_id);
      } catch (e) {
        console.error("Create pending draft failed", e);
        isMakingPending.value = false;
      }
    }
    async function applyPromo() {
      if (!promoCodeInput.value.trim()) return;
      promoApplying.value = true;
      promoMessage.value = null;
      try {
        const { data } = await axios.post("/checkout/promo/apply", {
          code: promoCodeInput.value
        });
        if (data.ok) {
          promo.value = data.promo;
          setTotals(data.totals);
          promoOk.value = true;
          promoMessage.value = `Applied ${data.promo.code}`;
        } else {
          promoOk.value = false;
          promoMessage.value = data.message ?? "Cannot apply code";
        }
      } catch (e) {
        promoOk.value = false;
        promoMessage.value = e?.response?.data?.message ?? "Cannot apply code";
      } finally {
        promoApplying.value = false;
      }
    }
    async function removePromo() {
      promoApplying.value = true;
      promoMessage.value = null;
      try {
        const { data } = await axios.post("/checkout/promo/remove");
        promo.value = null;
        setTotals(data.totals);
        promoOk.value = true;
        promoMessage.value = "Removed";
      } catch (e) {
        promoOk.value = false;
        promoMessage.value = "Cannot remove";
      } finally {
        promoApplying.value = false;
      }
    }
    async function devPaySuccess() {
      if (isLoading.value) return;
      isLoading.value = true;
      try {
        if (nickFormRef.value?.submit) {
          await nickFormRef.value.submit();
        }
        const { data } = await axios.post("/checkout/dev-success");
        window.location.href = data?.redirect ?? route("orders.show", data.order_id);
      } catch (e) {
        console.error("Dev success failed", e);
        isLoading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        seo: props.seo
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16"${_scopeId}><h1 class="text-3xl font-semibold mb-6"${_scopeId}>Checkout</h1><div class="grid lg:grid-cols-3 gap-6"${_scopeId}><div class="lg:col-span-2 space-y-4"${_scopeId}><div class="border rounded-lg p-4"${_scopeId}><h2 class="font-semibold mb-3"${_scopeId}>Items</h2><!--[-->`);
            ssrRenderList(props.items, (i) => {
              _push2(`<div class="flex gap-4 border rounded-md p-3 mb-2"${_scopeId}>`);
              if (i.product.image_url) {
                _push2(`<img${ssrRenderAttr("src", i.product.image_url)} class="w-16 h-16 object-cover rounded"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex-1"${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(i.product.name)}</div>`);
              if (i.range_labels?.length) {
                _push2(`<div class="text-xs text-muted-foreground"${_scopeId}>${ssrInterpolate(i.range_labels.join(", "))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (i.has_qty_slider) {
                _push2(`<div class="text-xs text-muted-foreground"${_scopeId}> Qty: ${ssrInterpolate(i.qty)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (i.options?.length) {
                _push2(`<div class="mt-1 text-xs text-muted-foreground"${_scopeId}><ul class="list-disc pl-5 space-y-0.5"${_scopeId}><!--[-->`);
                ssrRenderList(i.options, (opt) => {
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
                      _push2(`<!--[-->${ssrInterpolate((opt.value_cents ?? 0) >= 0 ? "+" : "")} ${ssrInterpolate(formatPrice(opt.value_cents ?? 0))} ${ssrInterpolate(opt.scope)}<!--]-->`);
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
              _push2(`</div><div class="text-right"${_scopeId}>`);
              if (i.has_qty_slider) {
                _push2(`<div class="text-sm"${_scopeId}>${ssrInterpolate(formatPrice(i.unit_price_cents))} / each </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="font-semibold"${_scopeId}>${ssrInterpolate(formatPrice(i.line_total_cents))}</div></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="lg:col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              ref_key: "nickFormRef",
              ref: nickFormRef,
              "initial-nickname": props.nickname ?? "",
              required: false,
              "save-url": "/checkout/nickname",
              label: "Character nickname for delivery",
              class: "mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<div class="border rounded-lg p-4 sticky top-6"${_scopeId}><h2 class="font-semibold mb-3"${_scopeId}>Summary</h2><ul class="space-y-2 text-sm"${_scopeId}><li class="flex justify-between"${_scopeId}><span${_scopeId}>Subtotal</span><span${_scopeId}>${ssrInterpolate(formatPrice(totals.value.subtotal_cents))}</span></li><li class="flex justify-between"${_scopeId}><span${_scopeId}>Shipping</span><span${_scopeId}>${ssrInterpolate(formatPrice(totals.value.shipping_cents))}</span></li><li class="flex justify-between"${_scopeId}><span${_scopeId}>Tax</span><span${_scopeId}>${ssrInterpolate(formatPrice(totals.value.tax_cents))}</span></li>`);
            if ((totals.value.discount_cents ?? 0) > 0) {
              _push2(`<li class="flex justify-between text-green-700"${_scopeId}><span${_scopeId}>Discount`);
              if (promo.value?.code) {
                _push2(`<span${_scopeId}> (${ssrInterpolate(promo.value.code)})</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span><span${_scopeId}>-${ssrInterpolate(formatPrice(totals.value.discount_cents))}</span></li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</ul><div class="mt-3"${_scopeId}><label class="block text-sm font-medium mb-1"${_scopeId}>Promo code</label><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: promoCodeInput.value,
              "onUpdate:modelValue": ($event) => promoCodeInput.value = $event,
              type: "text",
              placeholder: "ENTER CODE",
              class: "flex-1 border rounded-lg px-3 py-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "px-3 py-2 border rounded-lg",
              onClick: applyPromo,
              disabled: promoApplying.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Apply `);
                } else {
                  return [
                    createTextVNode(" Apply ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (promo.value?.code) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "px-3 py-2 border rounded-lg",
                onClick: removePromo,
                disabled: promoApplying.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Remove `);
                  } else {
                    return [
                      createTextVNode(" Remove ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (promoMessage.value) {
              _push2(`<div class="${ssrRenderClass([promoOk.value ? "text-green-600" : "text-red-600", "text-xs mt-1"])}"${_scopeId}>${ssrInterpolate(promoMessage.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-3 border-t pt-3 flex justify-between font-semibold"${_scopeId}><span${_scopeId}>Total</span><span${_scopeId}>${ssrInterpolate(formatPrice(totals.value.total_cents))}</span></div>`);
            if (!isLoading.value) {
              _push2(`<button class="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"${_scopeId}> Pay (DEV success) </button>`);
            } else {
              _push2(`<button disabled aria-busy="true" class="w-full mt-4 px-4 py-2 rounded-lg bg-muted text-muted-foreground flex items-center justify-center gap-2"${_scopeId}><span class="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"${_scopeId}></span> Redirecting… </button>`);
            }
            if (!isMakingPending.value) {
              _push2(`<button class="w-full mt-2 px-4 py-2 border rounded-lg"${_scopeId}> Create test order (pending) </button>`);
            } else {
              _push2(`<button disabled class="w-full mt-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground"${_scopeId}> Creating… </button>`);
            }
            _push2(`<div class="mt-3 text-xs text-muted-foreground"${_scopeId}> Use test card: <code${_scopeId}>4242 4242 4242 4242</code>, any future date, any CVC, any ZIP. </div></div></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16" }, [
                createVNode("h1", { class: "text-3xl font-semibold mb-6" }, "Checkout"),
                createVNode("div", { class: "grid lg:grid-cols-3 gap-6" }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-4" }, [
                    createVNode("div", { class: "border rounded-lg p-4" }, [
                      createVNode("h2", { class: "font-semibold mb-3" }, "Items"),
                      (openBlock(true), createBlock(Fragment, null, renderList(props.items, (i) => {
                        return openBlock(), createBlock("div", {
                          key: i.id,
                          class: "flex gap-4 border rounded-md p-3 mb-2"
                        }, [
                          i.product.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: i.product.image_url,
                            class: "w-16 h-16 object-cover rounded"
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode("div", { class: "flex-1" }, [
                            createVNode("div", { class: "font-medium" }, toDisplayString(i.product.name), 1),
                            i.range_labels?.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-xs text-muted-foreground"
                            }, toDisplayString(i.range_labels.join(", ")), 1)) : createCommentVNode("", true),
                            i.has_qty_slider ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-xs text-muted-foreground"
                            }, " Qty: " + toDisplayString(i.qty), 1)) : createCommentVNode("", true),
                            i.options?.length ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "mt-1 text-xs text-muted-foreground"
                            }, [
                              createVNode("ul", { class: "list-disc pl-5 space-y-0.5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(i.options, (opt) => {
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
                                        createTextVNode(toDisplayString((opt.value_cents ?? 0) >= 0 ? "+" : "") + " " + toDisplayString(formatPrice(opt.value_cents ?? 0)) + " " + toDisplayString(opt.scope), 1)
                                      ], 64)),
                                      createTextVNode(" ) ")
                                    ])) : createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "text-right" }, [
                            i.has_qty_slider ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-sm"
                            }, toDisplayString(formatPrice(i.unit_price_cents)) + " / each ", 1)) : createCommentVNode("", true),
                            createVNode("div", { class: "font-semibold" }, toDisplayString(formatPrice(i.line_total_cents)), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-1" }, [
                    createVNode(_sfc_main$1, {
                      ref_key: "nickFormRef",
                      ref: nickFormRef,
                      "initial-nickname": props.nickname ?? "",
                      required: false,
                      "save-url": "/checkout/nickname",
                      label: "Character nickname for delivery",
                      class: "mb-4"
                    }, null, 8, ["initial-nickname"]),
                    createVNode("div", { class: "border rounded-lg p-4 sticky top-6" }, [
                      createVNode("h2", { class: "font-semibold mb-3" }, "Summary"),
                      createVNode("ul", { class: "space-y-2 text-sm" }, [
                        createVNode("li", { class: "flex justify-between" }, [
                          createVNode("span", null, "Subtotal"),
                          createVNode("span", null, toDisplayString(formatPrice(totals.value.subtotal_cents)), 1)
                        ]),
                        createVNode("li", { class: "flex justify-between" }, [
                          createVNode("span", null, "Shipping"),
                          createVNode("span", null, toDisplayString(formatPrice(totals.value.shipping_cents)), 1)
                        ]),
                        createVNode("li", { class: "flex justify-between" }, [
                          createVNode("span", null, "Tax"),
                          createVNode("span", null, toDisplayString(formatPrice(totals.value.tax_cents)), 1)
                        ]),
                        (totals.value.discount_cents ?? 0) > 0 ? (openBlock(), createBlock("li", {
                          key: 0,
                          class: "flex justify-between text-green-700"
                        }, [
                          createVNode("span", null, [
                            createTextVNode("Discount"),
                            promo.value?.code ? (openBlock(), createBlock("span", { key: 0 }, " (" + toDisplayString(promo.value.code) + ")", 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("span", null, "-" + toDisplayString(formatPrice(totals.value.discount_cents)), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mt-3" }, [
                        createVNode("label", { class: "block text-sm font-medium mb-1" }, "Promo code"),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_sfc_main$4, {
                            modelValue: promoCodeInput.value,
                            "onUpdate:modelValue": ($event) => promoCodeInput.value = $event,
                            type: "text",
                            placeholder: "ENTER CODE",
                            class: "flex-1 border rounded-lg px-3 py-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$5, {
                            class: "px-3 py-2 border rounded-lg",
                            onClick: applyPromo,
                            disabled: promoApplying.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Apply ")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          promo.value?.code ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            class: "px-3 py-2 border rounded-lg",
                            onClick: removePromo,
                            disabled: promoApplying.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Remove ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])) : createCommentVNode("", true)
                        ]),
                        promoMessage.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["text-xs mt-1", promoOk.value ? "text-green-600" : "text-red-600"]
                        }, toDisplayString(promoMessage.value), 3)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mt-3 border-t pt-3 flex justify-between font-semibold" }, [
                        createVNode("span", null, "Total"),
                        createVNode("span", null, toDisplayString(formatPrice(totals.value.total_cents)), 1)
                      ]),
                      !isLoading.value ? (openBlock(), createBlock("button", {
                        key: 0,
                        class: "w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg",
                        onClick: devPaySuccess
                      }, " Pay (DEV success) ")) : (openBlock(), createBlock("button", {
                        key: 1,
                        disabled: "",
                        "aria-busy": "true",
                        class: "w-full mt-4 px-4 py-2 rounded-lg bg-muted text-muted-foreground flex items-center justify-center gap-2"
                      }, [
                        createVNode("span", { class: "inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" }),
                        createTextVNode(" Redirecting… ")
                      ])),
                      !isMakingPending.value ? (openBlock(), createBlock("button", {
                        key: 2,
                        class: "w-full mt-2 px-4 py-2 border rounded-lg",
                        onClick: makePendingDraft
                      }, " Create test order (pending) ")) : (openBlock(), createBlock("button", {
                        key: 3,
                        disabled: "",
                        class: "w-full mt-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground"
                      }, " Creating… ")),
                      createVNode("div", { class: "mt-3 text-xs text-muted-foreground" }, [
                        createTextVNode(" Use test card: "),
                        createVNode("code", null, "4242 4242 4242 4242"),
                        createTextVNode(", any future date, any CVC, any ZIP. ")
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
