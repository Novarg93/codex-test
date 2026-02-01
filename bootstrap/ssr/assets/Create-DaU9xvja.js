import { unref, mergeProps, withCtx, renderSlot, createVNode, useSSRContext, provide, inject, defineComponent, ref, computed, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { c as cn, _ as _sfc_main$4, a as _sfc_main$5 } from "./DefaultLayout-CLBo7IEt.js";
import axios from "axios";
import { router } from "@inertiajs/vue3";
import { reactiveOmit } from "@vueuse/core";
import { Check } from "lucide-vue-next";
import { useForwardPropsEmits, CheckboxRoot, CheckboxIndicator, ToggleGroupRoot, useForwardProps, ToggleGroupItem } from "reka-ui";
import { _ as _sfc_main$6, b as _sfc_main$7, a as _sfc_main$b, d as _sfc_main$c, e as _sfc_main$d } from "./CardTitle-DdvXd7Lq.js";
import { _ as _sfc_main$e, a as _sfc_main$f, b as _sfc_main$g, c as _sfc_main$h } from "./index-DRrbPiHR.js";
import { _ as _sfc_main$8, a as _sfc_main$9, b as _sfc_main$a } from "./index-_5JZujLt.js";
import { cva } from "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
const _sfc_main$3 = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    defaultValue: { type: [Boolean, String], required: false },
    modelValue: { type: [Boolean, String, null], required: false },
    disabled: { type: Boolean, required: false },
    value: { type: null, required: false },
    id: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CheckboxRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(unref(Check), { class: "h-4 w-4" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(unref(Check), { class: "h-4 w-4" })
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/checkbox/Checkbox.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ToggleGroup",
  __ssrInlineRender: true,
  props: {
    rovingFocus: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    orientation: { type: String, required: false },
    dir: { type: String, required: false },
    loop: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    type: { type: String, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    class: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    provide("toggleGroup", {
      variant: props.variant,
      size: props.size
    });
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToggleGroupRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("flex items-center justify-center gap-1", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/toggle-group/ToggleGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$1 = {
  __name: "ToggleGroupItem",
  __ssrInlineRender: true,
  props: {
    value: { type: null, required: true },
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const context = inject("toggleGroup");
    const delegatedProps = reactiveOmit(props, "class", "size", "variant");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToggleGroupItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          unref(toggleVariants)({
            variant: unref(context)?.variant || __props.variant,
            size: unref(context)?.size || __props.size
          }),
          props.class
        )
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/toggle-group/ToggleGroupItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    orderId: {},
    item: {},
    game: {}
  },
  setup(__props) {
    const props = __props;
    const rating = ref(5);
    const body = ref("");
    const isAnonymous = ref(false);
    const submitting = ref(false);
    const error = ref(null);
    const ratingModel = computed({
      get: () => String(rating.value),
      set: (v) => {
        const n = Number(v);
        if (Number.isFinite(n) && n >= 1 && n <= 5) rating.value = n;
      }
    });
    async function submit() {
      if (submitting.value) return;
      error.value = null;
      submitting.value = true;
      try {
        await axios.post(route("reviews.store", { order: props.orderId, item: props.item.id }), {
          rating: rating.value,
          body: body.value,
          is_anonymous: isAnonymous.value
        });
        router.visit(route("orders.show", props.orderId));
      } catch (e) {
        error.value = e?.response?.data?.message ?? "Failed to submit review";
        submitting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8"${_scopeId}><div class="flex items-start justify-between gap-4 mb-6"${_scopeId}><div${_scopeId}><h1 class="text-3xl font-semibold"${_scopeId}>Leave a review</h1><div class="text-sm text-muted-foreground mt-1"${_scopeId}> Order #${ssrInterpolate(_ctx.orderId)} · Item #${ssrInterpolate(_ctx.item.id)}</div></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              variant: "secondary",
              onClick: ($event) => unref(router).visit(_ctx.route("orders.show", _ctx.orderId))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back to order `);
                } else {
                  return [
                    createTextVNode(" Back to order ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "pt-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), { class: "h-12 w-12 rounded-lg" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (_ctx.item.product_image_url) {
                                _push5(ssrRenderComponent(unref(_sfc_main$9), {
                                  src: _ctx.item.product_image_url,
                                  alt: _ctx.item.product_name
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(unref(_sfc_main$a), { class: "rounded-lg" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate((_ctx.item.product_name || "P").slice(0, 1).toUpperCase())}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString((_ctx.item.product_name || "P").slice(0, 1).toUpperCase()), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                _ctx.item.product_image_url ? (openBlock(), createBlock(unref(_sfc_main$9), {
                                  key: 0,
                                  src: _ctx.item.product_image_url,
                                  alt: _ctx.item.product_name
                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                createVNode(unref(_sfc_main$a), { class: "rounded-lg" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString((_ctx.item.product_name || "P").slice(0, 1).toUpperCase()), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex-1 min-w-0"${_scopeId3}><div class="font-medium truncate"${_scopeId3}>${ssrInterpolate(_ctx.item.product_name)}</div><div class="text-xs text-muted-foreground"${_scopeId3}>Qty: ${ssrInterpolate(_ctx.item.qty)}</div></div>`);
                        if (_ctx.game) {
                          _push4(`<div class="hidden sm:flex items-center gap-2 text-xs text-muted-foreground"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$8), { class: "h-6 w-6" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (_ctx.game.image_url) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$9), {
                                    src: _ctx.game.image_url,
                                    alt: _ctx.game.name
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(unref(_sfc_main$a), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate((_ctx.game.name || "G").slice(0, 1).toUpperCase())}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString((_ctx.game.name || "G").slice(0, 1).toUpperCase()), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  _ctx.game.image_url ? (openBlock(), createBlock(unref(_sfc_main$9), {
                                    key: 0,
                                    src: _ctx.game.image_url,
                                    alt: _ctx.game.name
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                  createVNode(unref(_sfc_main$a), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString((_ctx.game.name || "G").slice(0, 1).toUpperCase()), 1)
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<span class="max-w-[220px] truncate"${_scopeId3}>${ssrInterpolate(_ctx.game.name)}</span></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode(unref(_sfc_main$8), { class: "h-12 w-12 rounded-lg" }, {
                              default: withCtx(() => [
                                _ctx.item.product_image_url ? (openBlock(), createBlock(unref(_sfc_main$9), {
                                  key: 0,
                                  src: _ctx.item.product_image_url,
                                  alt: _ctx.item.product_name
                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                createVNode(unref(_sfc_main$a), { class: "rounded-lg" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString((_ctx.item.product_name || "P").slice(0, 1).toUpperCase()), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex-1 min-w-0" }, [
                              createVNode("div", { class: "font-medium truncate" }, toDisplayString(_ctx.item.product_name), 1),
                              createVNode("div", { class: "text-xs text-muted-foreground" }, "Qty: " + toDisplayString(_ctx.item.qty), 1)
                            ]),
                            _ctx.game ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "hidden sm:flex items-center gap-2 text-xs text-muted-foreground"
                            }, [
                              createVNode(unref(_sfc_main$8), { class: "h-6 w-6" }, {
                                default: withCtx(() => [
                                  _ctx.game.image_url ? (openBlock(), createBlock(unref(_sfc_main$9), {
                                    key: 0,
                                    src: _ctx.game.image_url,
                                    alt: _ctx.game.name
                                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                  createVNode(unref(_sfc_main$a), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString((_ctx.game.name || "G").slice(0, 1).toUpperCase()), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("span", { class: "max-w-[220px] truncate" }, toDisplayString(_ctx.game.name), 1)
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), { class: "pt-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(unref(_sfc_main$8), { class: "h-12 w-12 rounded-lg" }, {
                            default: withCtx(() => [
                              _ctx.item.product_image_url ? (openBlock(), createBlock(unref(_sfc_main$9), {
                                key: 0,
                                src: _ctx.item.product_image_url,
                                alt: _ctx.item.product_name
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                              createVNode(unref(_sfc_main$a), { class: "rounded-lg" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString((_ctx.item.product_name || "P").slice(0, 1).toUpperCase()), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode("div", { class: "font-medium truncate" }, toDisplayString(_ctx.item.product_name), 1),
                            createVNode("div", { class: "text-xs text-muted-foreground" }, "Qty: " + toDisplayString(_ctx.item.qty), 1)
                          ]),
                          _ctx.game ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "hidden sm:flex items-center gap-2 text-xs text-muted-foreground"
                          }, [
                            createVNode(unref(_sfc_main$8), { class: "h-6 w-6" }, {
                              default: withCtx(() => [
                                _ctx.game.image_url ? (openBlock(), createBlock(unref(_sfc_main$9), {
                                  key: 0,
                                  src: _ctx.game.image_url,
                                  alt: _ctx.game.name
                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                createVNode(unref(_sfc_main$a), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString((_ctx.game.name || "G").slice(0, 1).toUpperCase()), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("span", { class: "max-w-[220px] truncate" }, toDisplayString(_ctx.game.name), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$6), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Review`);
                            } else {
                              return [
                                createTextVNode("Review")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$d), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Reviews are published after moderation.`);
                            } else {
                              return [
                                createTextVNode("Reviews are published after moderation.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createTextVNode("Review")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$d), null, {
                            default: withCtx(() => [
                              createTextVNode("Reviews are published after moderation.")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "space-y-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Rating`);
                            } else {
                              return [
                                createTextVNode("Rating")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          modelValue: ratingModel.value,
                          "onUpdate:modelValue": ($event) => ratingModel.value = $event,
                          type: "single",
                          class: "justify-start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(5, (n) => {
                                _push5(ssrRenderComponent(unref(_sfc_main$1), {
                                  key: n,
                                  value: String(n),
                                  class: "h-9 w-9 px-0 border data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(n)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(n), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                  return createVNode(unref(_sfc_main$1), {
                                    key: n,
                                    value: String(n),
                                    class: "h-9 w-9 px-0 border data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(n), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-xs text-muted-foreground"${_scopeId3}>Selected: ${ssrInterpolate(rating.value)}/5</div></div><div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), { for: "review-body" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Your review`);
                            } else {
                              return [
                                createTextVNode("Your review")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$f), {
                          id: "review-body",
                          modelValue: body.value,
                          "onUpdate:modelValue": ($event) => body.value = $event,
                          rows: "6",
                          placeholder: "Tell others about your experience…"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$3), {
                          id: "anonymous",
                          modelValue: isAnonymous.value,
                          "onUpdate:modelValue": ($event) => isAnonymous.value = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$e), { for: "anonymous" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Post anonymously`);
                            } else {
                              return [
                                createTextVNode("Post anonymously")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="text-xs text-muted-foreground"${_scopeId3}> If enabled, your name and avatar won’t be shown publicly. </div>`);
                        if (error.value) {
                          _push4(ssrRenderComponent(unref(_sfc_main$g), { variant: "destructive" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$h), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(error.value)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(error.value), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$h), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(error.value), 1)
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div class="flex gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$5), {
                          disabled: submitting.value,
                          onClick: submit
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(submitting.value ? "Submitting…" : "Submit review")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(submitting.value ? "Submitting…" : "Submit review"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$5), {
                          variant: "secondary",
                          onClick: ($event) => unref(router).visit(_ctx.route("orders.show", _ctx.orderId))
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(unref(_sfc_main$e), null, {
                              default: withCtx(() => [
                                createTextVNode("Rating")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$2), {
                              modelValue: ratingModel.value,
                              "onUpdate:modelValue": ($event) => ratingModel.value = $event,
                              type: "single",
                              class: "justify-start"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                  return createVNode(unref(_sfc_main$1), {
                                    key: n,
                                    value: String(n),
                                    class: "h-9 w-9 px-0 border data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(n), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "text-xs text-muted-foreground" }, "Selected: " + toDisplayString(rating.value) + "/5", 1)
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(unref(_sfc_main$e), { for: "review-body" }, {
                              default: withCtx(() => [
                                createTextVNode("Your review")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$f), {
                              id: "review-body",
                              modelValue: body.value,
                              "onUpdate:modelValue": ($event) => body.value = $event,
                              rows: "6",
                              placeholder: "Tell others about your experience…"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(unref(_sfc_main$3), {
                              id: "anonymous",
                              modelValue: isAnonymous.value,
                              "onUpdate:modelValue": ($event) => isAnonymous.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(_sfc_main$e), { for: "anonymous" }, {
                              default: withCtx(() => [
                                createTextVNode("Post anonymously")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "text-xs text-muted-foreground" }, " If enabled, your name and avatar won’t be shown publicly. "),
                          error.value ? (openBlock(), createBlock(unref(_sfc_main$g), {
                            key: 0,
                            variant: "destructive"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$h), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(error.value), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(unref(_sfc_main$5), {
                              disabled: submitting.value,
                              onClick: submit
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(submitting.value ? "Submitting…" : "Submit review"), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled"]),
                            createVNode(unref(_sfc_main$5), {
                              variant: "secondary",
                              onClick: ($event) => unref(router).visit(_ctx.route("orders.show", _ctx.orderId))
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), null, {
                          default: withCtx(() => [
                            createTextVNode("Review")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [
                            createTextVNode("Reviews are published after moderation.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "space-y-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$e), null, {
                            default: withCtx(() => [
                              createTextVNode("Rating")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), {
                            modelValue: ratingModel.value,
                            "onUpdate:modelValue": ($event) => ratingModel.value = $event,
                            type: "single",
                            class: "justify-start"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                return createVNode(unref(_sfc_main$1), {
                                  key: n,
                                  value: String(n),
                                  class: "h-9 w-9 px-0 border data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(n), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "text-xs text-muted-foreground" }, "Selected: " + toDisplayString(rating.value) + "/5", 1)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$e), { for: "review-body" }, {
                            default: withCtx(() => [
                              createTextVNode("Your review")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$f), {
                            id: "review-body",
                            modelValue: body.value,
                            "onUpdate:modelValue": ($event) => body.value = $event,
                            rows: "6",
                            placeholder: "Tell others about your experience…"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(unref(_sfc_main$3), {
                            id: "anonymous",
                            modelValue: isAnonymous.value,
                            "onUpdate:modelValue": ($event) => isAnonymous.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$e), { for: "anonymous" }, {
                            default: withCtx(() => [
                              createTextVNode("Post anonymously")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "text-xs text-muted-foreground" }, " If enabled, your name and avatar won’t be shown publicly. "),
                        error.value ? (openBlock(), createBlock(unref(_sfc_main$g), {
                          key: 0,
                          variant: "destructive"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$h), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(error.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(unref(_sfc_main$5), {
                            disabled: submitting.value,
                            onClick: submit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(submitting.value ? "Submitting…" : "Submit review"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(unref(_sfc_main$5), {
                            variant: "secondary",
                            onClick: ($event) => unref(router).visit(_ctx.route("orders.show", _ctx.orderId))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8" }, [
                createVNode("div", { class: "flex items-start justify-between gap-4 mb-6" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-3xl font-semibold" }, "Leave a review"),
                    createVNode("div", { class: "text-sm text-muted-foreground mt-1" }, " Order #" + toDisplayString(_ctx.orderId) + " · Item #" + toDisplayString(_ctx.item.id), 1)
                  ]),
                  createVNode(unref(_sfc_main$5), {
                    variant: "secondary",
                    onClick: ($event) => unref(router).visit(_ctx.route("orders.show", _ctx.orderId))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Back to order ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode(unref(_sfc_main$6), { class: "mb-6" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$7), { class: "pt-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(unref(_sfc_main$8), { class: "h-12 w-12 rounded-lg" }, {
                            default: withCtx(() => [
                              _ctx.item.product_image_url ? (openBlock(), createBlock(unref(_sfc_main$9), {
                                key: 0,
                                src: _ctx.item.product_image_url,
                                alt: _ctx.item.product_name
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                              createVNode(unref(_sfc_main$a), { class: "rounded-lg" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString((_ctx.item.product_name || "P").slice(0, 1).toUpperCase()), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode("div", { class: "font-medium truncate" }, toDisplayString(_ctx.item.product_name), 1),
                            createVNode("div", { class: "text-xs text-muted-foreground" }, "Qty: " + toDisplayString(_ctx.item.qty), 1)
                          ]),
                          _ctx.game ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "hidden sm:flex items-center gap-2 text-xs text-muted-foreground"
                          }, [
                            createVNode(unref(_sfc_main$8), { class: "h-6 w-6" }, {
                              default: withCtx(() => [
                                _ctx.game.image_url ? (openBlock(), createBlock(unref(_sfc_main$9), {
                                  key: 0,
                                  src: _ctx.game.image_url,
                                  alt: _ctx.game.name
                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                createVNode(unref(_sfc_main$a), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString((_ctx.game.name || "G").slice(0, 1).toUpperCase()), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("span", { class: "max-w-[220px] truncate" }, toDisplayString(_ctx.game.name), 1)
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$6), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), null, {
                          default: withCtx(() => [
                            createTextVNode("Review")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [
                            createTextVNode("Reviews are published after moderation.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "space-y-5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$e), null, {
                            default: withCtx(() => [
                              createTextVNode("Rating")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), {
                            modelValue: ratingModel.value,
                            "onUpdate:modelValue": ($event) => ratingModel.value = $event,
                            type: "single",
                            class: "justify-start"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                return createVNode(unref(_sfc_main$1), {
                                  key: n,
                                  value: String(n),
                                  class: "h-9 w-9 px-0 border data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(n), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "text-xs text-muted-foreground" }, "Selected: " + toDisplayString(rating.value) + "/5", 1)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$e), { for: "review-body" }, {
                            default: withCtx(() => [
                              createTextVNode("Your review")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$f), {
                            id: "review-body",
                            modelValue: body.value,
                            "onUpdate:modelValue": ($event) => body.value = $event,
                            rows: "6",
                            placeholder: "Tell others about your experience…"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(unref(_sfc_main$3), {
                            id: "anonymous",
                            modelValue: isAnonymous.value,
                            "onUpdate:modelValue": ($event) => isAnonymous.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$e), { for: "anonymous" }, {
                            default: withCtx(() => [
                              createTextVNode("Post anonymously")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "text-xs text-muted-foreground" }, " If enabled, your name and avatar won’t be shown publicly. "),
                        error.value ? (openBlock(), createBlock(unref(_sfc_main$g), {
                          key: 0,
                          variant: "destructive"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$h), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(error.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(unref(_sfc_main$5), {
                            disabled: submitting.value,
                            onClick: submit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(submitting.value ? "Submitting…" : "Submit review"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(unref(_sfc_main$5), {
                            variant: "secondary",
                            onClick: ($event) => unref(router).visit(_ctx.route("orders.show", _ctx.orderId))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reviews/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
