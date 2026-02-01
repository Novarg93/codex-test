import { ref, unref, mergeProps, withCtx, renderSlot, useSSRContext, createVNode, defineComponent, computed, onMounted, onBeforeUnmount, watch, createTextVNode, withDirectives, createBlock, createCommentVNode, withKeys, withModifiers, vModelText, openBlock, Fragment, renderList, toDisplayString, nextTick } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { router, usePage, Link } from "@inertiajs/vue3";
import axios from "axios";
import { X, Search, Loader2, ChevronsDown, Menu, ShoppingCart, User } from "lucide-vue-next";
import { useForwardPropsEmits, DropdownMenuRoot, DropdownMenuPortal, DropdownMenuContent, useForwardProps, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Primitive, Separator, DialogRoot, DialogPortal, DialogOverlay, DialogContent, DialogClose, DialogDescription, DialogTitle } from "reka-ui";
import { clsx } from "clsx";
import { reactiveOmit } from "@vueuse/core";
import { twMerge } from "tailwind-merge";
import { DrawerRoot, DrawerOverlay, DrawerPortal, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger, DrawerClose } from "vaul-vue";
import { Toaster } from "vue-sonner";
import { cva } from "class-variance-authority";
const summary = ref({ total_qty: 0, total_sum_cents: 0 });
const TTL_MS = 15e3;
const LS_KEY = "cart:summary:v1";
let inflight = null;
let expiresAt = 0;
function now() {
  return Date.now();
}
function readCache() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.value || typeof parsed?.expiresAt !== "number")
      return null;
    return parsed;
  } catch {
    return null;
  }
}
function writeCache(value, exp) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ value, expiresAt: exp }));
  } catch {
  }
}
function hydrateFromCache() {
  const cached = readCache();
  if (!cached) return;
  summary.value = cached.value;
  expiresAt = Math.max(expiresAt, cached.expiresAt);
}
function setSummary(next, opts) {
  summary.value = next;
  if (opts?.refreshWindow) {
    expiresAt = now() + TTL_MS;
    writeCache(next, expiresAt);
    return;
  }
  const cached = readCache();
  const exp = cached?.expiresAt ?? expiresAt;
  if (exp) writeCache(next, exp);
}
async function loadSummary(opts) {
  const force = !!opts?.force;
  hydrateFromCache();
  if (!force && expiresAt && now() < expiresAt) {
    return summary.value;
  }
  if (inflight) return inflight;
  inflight = axios.get("/cart/summary", {
    headers: { "Cache-Control": "no-store" }
  }).then(({ data }) => {
    expiresAt = now() + TTL_MS;
    summary.value = data;
    writeCache(data, expiresAt);
    return data;
  }).finally(() => {
    inflight = null;
  });
  return inflight;
}
function useCartSummary() {
  return { summary, loadSummary, setSummary };
}
const _sfc_main$l = {
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    dir: { type: String, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$k = {
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    loop: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false, default: 4 },
    sideFlip: { type: Boolean, required: false },
    align: { type: null, required: false },
    alignOffset: { type: Number, required: false },
    alignFlip: { type: Boolean, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    positionStrategy: { type: String, required: false },
    updatePositionStrategy: { type: String, required: false },
    disableUpdateOnLayoutShift: { type: Boolean, required: false },
    prioritizePosition: { type: Boolean, required: false },
    reference: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, required: false },
    textValue: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
    inset: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
          __props.inset && "pl-8",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "DropdownMenuLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
    inset: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps(unref(forwardedProps), {
        class: unref(cn)("px-2 py-1.5 text-sm font-semibold", __props.inset && "pl-8", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dropdown-menu/DropdownMenuLabel.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "DropdownMenuSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps(unref(delegatedProps), {
        class: unref(cn)("-mx-1 my-1 h-px bg-muted", props.class)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dropdown-menu/DropdownMenuSeparator.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ class: "outline-none" }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "Drawer",
  __ssrInlineRender: true,
  props: {
    activeSnapPoint: { type: [Number, String, null], required: false },
    closeThreshold: { type: Number, required: false },
    shouldScaleBackground: { type: Boolean, required: false, default: true },
    setBackgroundColorOnScale: { type: Boolean, required: false },
    scrollLockTimeout: { type: Number, required: false },
    fixed: { type: Boolean, required: false },
    dismissible: { type: Boolean, required: false },
    modal: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    nested: { type: Boolean, required: false },
    direction: { type: String, required: false },
    noBodyStyles: { type: Boolean, required: false },
    handleOnly: { type: Boolean, required: false },
    preventScrollRestoration: { type: Boolean, required: false },
    snapPoints: { type: Array, required: false },
    fadeFromIndex: { type: null, required: false }
  },
  emits: [
    "drag",
    "release",
    "close",
    "update:open",
    "update:activeSnapPoint",
    "animationEnd"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/drawer/Drawer.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "DrawerOverlay",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerOverlay), mergeProps(unref(delegatedProps), {
        class: unref(cn)("fixed inset-0 z-50 bg-black/80", props.class)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/drawer/DrawerOverlay.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "DrawerContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    disableOutsidePointerEvents: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DrawerContent), mergeProps(unref(forwardedProps), {
              class: unref(cn)(
                "fixed inset-y-0 left-0 z-50 flex h-full w-full flex-col rounded-tr-[10px] rounded-br-[10px] border bg-background",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$e),
              createVNode(unref(DrawerContent), mergeProps(unref(forwardedProps), {
                class: unref(cn)(
                  "fixed inset-y-0 left-0 z-50 flex h-full w-full flex-col rounded-tr-[10px] rounded-br-[10px] border bg-background",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/drawer/DrawerContent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "DrawerDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerDescription), mergeProps(unref(delegatedProps), {
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/drawer/DrawerDescription.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "DrawerHeader",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("grid gap-1.5 p-4 text-center sm:text-left", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/drawer/DrawerHeader.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DrawerTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DrawerTitle), mergeProps(unref(delegatedProps), {
        class: unref(cn)("text-lg font-semibold leading-none tracking-tight", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/drawer/DrawerTitle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Sonner",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    invert: { type: Boolean, required: false },
    theme: { type: String, required: false },
    position: { type: String, required: false },
    hotkey: { type: Array, required: false },
    richColors: { type: Boolean, required: false },
    expand: { type: Boolean, required: false },
    duration: { type: Number, required: false },
    gap: { type: Number, required: false },
    visibleToasts: { type: Number, required: false },
    closeButton: { type: Boolean, required: false },
    toastOptions: { type: Object, required: false },
    class: { type: String, required: false },
    style: { type: Object, required: false },
    offset: { type: [Object, String, Number], required: false },
    mobileOffset: { type: [Object, String, Number], required: false },
    dir: { type: String, required: false },
    swipeDirections: { type: Array, required: false },
    icons: { type: Object, required: false },
    containerAriaLabel: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Toaster), mergeProps({ class: "toaster group" }, props, { "toast-options": {
        classes: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      } }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/sonner/Sonner.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: { type: null, required: false },
    size: { type: null, required: false },
    class: { type: null, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false, default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: __props.variant, size: __props.size }), props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/button/Button.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$7 = {
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: { type: String, required: false, default: "horizontal" },
    decorative: { type: Boolean, required: false, default: true },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps(unref(delegatedProps), {
        class: unref(cn)(
          "shrink-0 bg-border",
          props.orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/separator/Separator.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dialog/Dialog.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "DialogContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    disableOutsidePointerEvents: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                      } else {
                        return [
                          createVNode(unref(X), { class: "w-4 h-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                      default: withCtx(() => [
                        createVNode(unref(X), { class: "w-4 h-4" }),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx(() => [
                      createVNode(unref(X), { class: "w-4 h-4" }),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dialog/DialogContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DialogDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps(unref(forwardedProps), {
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dialog/DialogDescription.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DialogHeader",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-y-1.5 text-center sm:text-left", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dialog/DialogHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DialogTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps(unref(forwardedProps), {
        class: unref(cn)("text-lg font-semibold leading-none tracking-tight", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/dialog/DialogTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GlobalSearch",
  __ssrInlineRender: true,
  setup(__props) {
    let cancel = null;
    const open = ref(false);
    const query = ref("");
    const loading = ref(false);
    const results = ref([]);
    const activeIndex = ref(-1);
    const inputRef = ref(null);
    let tId = null;
    const hasQuery = computed(() => query.value.trim().length > 0);
    const hasResults = computed(() => results.value.length > 0);
    function focusInputSoon() {
      nextTick(() => {
        const el = inputRef.value;
        if (el && typeof el.focus === "function") el.focus();
      });
    }
    function resetState() {
      query.value = "";
      results.value = [];
      loading.value = false;
      activeIndex.value = -1;
      if (tId) {
        clearTimeout(tId);
        tId = null;
      }
    }
    function openDialog() {
      if (!open.value) {
        open.value = true;
        focusInputSoon();
      }
    }
    function closeDialog() {
      open.value = false;
      resetState();
    }
    function debounceSearch() {
      if (tId) clearTimeout(tId);
      if (!hasQuery.value) {
        results.value = [];
        activeIndex.value = -1;
        return;
      }
      tId = window.setTimeout(runSearch, 300);
    }
    async function runSearch() {
      loading.value = true;
      cancel?.abort();
      cancel = new AbortController();
      try {
        const { data } = await axios.post(
          route("search"),
          { query: query.value.trim() },
          { signal: cancel.signal }
        );
        results.value = data?.products ?? [];
        activeIndex.value = results.value.length ? 0 : -1;
      } catch (e) {
        if (e.name !== "CanceledError" && e.code !== "ERR_CANCELED") {
          results.value = [];
          activeIndex.value = -1;
        }
      } finally {
        loading.value = false;
      }
    }
    function productUrl(p) {
      const game = p.game_slug ?? p.game?.url_code;
      const category = p.category_slug;
      const product = p.product_slug ?? p.url_code;
      if (typeof route === "function" && game && category && product) {
        return route("products.show", { game, category, product });
      }
      if (game && category && product) {
        return `/games/${encodeURIComponent(game)}/${encodeURIComponent(category)}/${encodeURIComponent(product)}`;
      }
      return `/products/${encodeURIComponent(product)}`;
    }
    function selectActive() {
      const p = results.value[activeIndex.value];
      if (p) {
        closeDialog();
        router.visit(productUrl(p));
      }
    }
    function onArrowDown() {
      if (!results.value.length) return;
      activeIndex.value = (activeIndex.value + 1) % results.value.length;
      scrollActiveIntoView();
    }
    function onArrowUp() {
      if (!results.value.length) return;
      activeIndex.value = (activeIndex.value - 1 + results.value.length) % results.value.length;
      scrollActiveIntoView();
    }
    function scrollActiveIntoView() {
      nextTick(() => {
        const el = document.getElementById(`gs-item-${activeIndex.value}`);
        el?.scrollIntoView({ block: "nearest" });
      });
    }
    function onGlobalKey(e) {
      const target = e.target;
      const isTypingEl = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openDialog();
        return;
      }
      if (!open.value && !isTypingEl && e.key === "/") {
        e.preventDefault();
        openDialog();
        return;
      }
      if (open.value && e.key === "Escape") {
        e.preventDefault();
        closeDialog();
      }
    }
    onMounted(() => {
      window.addEventListener("keydown", onGlobalKey);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", onGlobalKey);
      if (tId) clearTimeout(tId);
    });
    watch(query, debounceSearch);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        variant: "ghost",
        class: "h-9 px-3 flex items-center gap-2 rounded-lg border border-border text-sm",
        onClick: openDialog
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Search), { class: "w-4 h-4 hidden md:block" }, null, _parent2, _scopeId));
            _push2(`<span class="inline"${_scopeId}>Search</span><span class="ml-2 sm:flex items-center gap-1 text-xs hidden text-muted-foreground"${_scopeId}><kbd class="px-1.5 py-0.5 rounded bg-muted border border-border"${_scopeId}>Ctrl</kbd><kbd class="px-1.5 py-0.5 rounded bg-muted border border-border"${_scopeId}>K</kbd></span>`);
          } else {
            return [
              createVNode(unref(Search), { class: "w-4 h-4 hidden md:block" }),
              createVNode("span", { class: "inline" }, "Search"),
              createVNode("span", { class: "ml-2 sm:flex items-center gap-1 text-xs hidden text-muted-foreground" }, [
                createVNode("kbd", { class: "px-1.5 py-0.5 rounded bg-muted border border-border" }, "Ctrl"),
                createVNode("kbd", { class: "px-1.5 py-0.5 rounded bg-muted border border-border" }, "K")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), {
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "max-w-2xl top-[25%] p-0 overflow-hidden border-border" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "px-4 pt-4 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), { class: "sr-only" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Search`);
                            } else {
                              return [
                                createTextVNode("Search")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "sr-only" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Find products across all games and categories`);
                            } else {
                              return [
                                createTextVNode("Find products across all games and categories")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2), { class: "sr-only" }, {
                            default: withCtx(() => [
                              createTextVNode("Search")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$4), { class: "sr-only" }, {
                            default: withCtx(() => [
                              createTextVNode("Find products across all games and categories")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="px-4 pb-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                  _push3(`<input${ssrRenderAttr("value", query.value)} type="search" placeholder="Search products…" class="pl-9 w-full h-9 rounded-md border bg-background px-3 py-1 text-sm shadow-sm outline-none"${_scopeId2}>`);
                  if (loading.value) {
                    _push3(`<div class="absolute right-3 top-1/2 -translate-y-1/2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 animate-spin text-muted-foreground" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="px-2 pb-2"${_scopeId2}>`);
                  if (hasResults.value) {
                    _push3(`<div class="max-h-96 overflow-auto rounded-md border border-border" role="listbox"${ssrRenderAttr("aria-activedescendant", activeIndex.value >= 0 ? `gs-item-${activeIndex.value}` : void 0)}${_scopeId2}><!--[-->`);
                    ssrRenderList(results.value, (p, i) => {
                      _push3(`<button${ssrRenderAttr("id", `gs-item-${i}`)} role="option"${ssrRenderAttr("aria-selected", i === activeIndex.value)} class="${ssrRenderClass([i === activeIndex.value ? "bg-muted" : "", "w-full text-left px-3 py-2 flex items-center gap-3 hover:bg-muted focus:bg-muted focus:outline-none"])}"${_scopeId2}><div class="relative shrink-0"${_scopeId2}><img${ssrRenderAttr("src", p.stored_image)}${ssrRenderAttr("alt", p.title)} class="h-10 w-10 rounded object-cover border border-border"${_scopeId2}>`);
                      if (p.game?.stored_logo_image) {
                        _push3(`<img${ssrRenderAttr("src", p.game.stored_logo_image)}${ssrRenderAttr("alt", p.game.title)} class="absolute -right-1 -bottom-1 h-5 w-5 rounded bg-background p-0.5 object-contain border border-border"${_scopeId2}>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="min-w-0 flex-1"${_scopeId2}><div class="truncate text-sm font-medium"${_scopeId2}>${ssrInterpolate(p.title)}</div><div class="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(p.human_price)}</span>`);
                      if (p.game?.title) {
                        _push3(`<span class="inline-flex items-center gap-1"${_scopeId2}> • <span class="truncate max-w-[12rem]"${_scopeId2}>${ssrInterpolate(p.game.title)}</span></span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div></button>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<div class="px-3 py-8 text-center text-sm text-muted-foreground"${_scopeId2}>`);
                    if (!hasQuery.value) {
                      _push3(`<!--[--> Start typing to search across all products <!--]-->`);
                    } else {
                      _push3(`<!--[--> No results <!--]-->`);
                    }
                    _push3(`</div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { class: "px-4 pt-4 pb-2" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), { class: "sr-only" }, {
                          default: withCtx(() => [
                            createTextVNode("Search")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$4), { class: "sr-only" }, {
                          default: withCtx(() => [
                            createTextVNode("Find products across all games and categories")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-4 pb-2" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                        withDirectives(createVNode("input", {
                          ref_key: "inputRef",
                          ref: inputRef,
                          "onUpdate:modelValue": ($event) => query.value = $event,
                          type: "search",
                          placeholder: "Search products…",
                          class: "pl-9 w-full h-9 rounded-md border bg-background px-3 py-1 text-sm shadow-sm outline-none",
                          onKeydown: [
                            withKeys(withModifiers(onArrowDown, ["prevent", "stop"]), ["down"]),
                            withKeys(withModifiers(onArrowUp, ["prevent", "stop"]), ["up"]),
                            withKeys(withModifiers(selectActive, ["prevent", "stop"]), ["enter"])
                          ]
                        }, null, 40, ["onUpdate:modelValue", "onKeydown"]), [
                          [vModelText, query.value]
                        ]),
                        loading.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute right-3 top-1/2 -translate-y-1/2"
                        }, [
                          createVNode(unref(Loader2), { class: "w-4 h-4 animate-spin text-muted-foreground" })
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "px-2 pb-2" }, [
                      hasResults.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "max-h-96 overflow-auto rounded-md border border-border",
                        role: "listbox",
                        "aria-activedescendant": activeIndex.value >= 0 ? `gs-item-${activeIndex.value}` : void 0
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(results.value, (p, i) => {
                          return openBlock(), createBlock("button", {
                            key: p.id,
                            id: `gs-item-${i}`,
                            role: "option",
                            "aria-selected": i === activeIndex.value,
                            class: ["w-full text-left px-3 py-2 flex items-center gap-3 hover:bg-muted focus:bg-muted focus:outline-none", i === activeIndex.value ? "bg-muted" : ""],
                            onMouseenter: ($event) => activeIndex.value = i,
                            onClick: () => {
                              closeDialog();
                              unref(router).visit(productUrl(p));
                            }
                          }, [
                            createVNode("div", { class: "relative shrink-0" }, [
                              createVNode("img", {
                                src: p.stored_image,
                                alt: p.title,
                                class: "h-10 w-10 rounded object-cover border border-border"
                              }, null, 8, ["src", "alt"]),
                              p.game?.stored_logo_image ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: p.game.stored_logo_image,
                                alt: p.game.title,
                                class: "absolute -right-1 -bottom-1 h-5 w-5 rounded bg-background p-0.5 object-contain border border-border"
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "min-w-0 flex-1" }, [
                              createVNode("div", { class: "truncate text-sm font-medium" }, toDisplayString(p.title), 1),
                              createVNode("div", { class: "mt-0.5 flex items-center gap-2 text-xs text-muted-foreground" }, [
                                createVNode("span", null, toDisplayString(p.human_price), 1),
                                p.game?.title ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "inline-flex items-center gap-1"
                                }, [
                                  createTextVNode(" • "),
                                  createVNode("span", { class: "truncate max-w-[12rem]" }, toDisplayString(p.game.title), 1)
                                ])) : createCommentVNode("", true)
                              ])
                            ])
                          ], 42, ["id", "aria-selected", "onMouseenter", "onClick"]);
                        }), 128))
                      ], 8, ["aria-activedescendant"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "px-3 py-8 text-center text-sm text-muted-foreground"
                      }, [
                        !hasQuery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(" Start typing to search across all products ")
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(" No results ")
                        ], 64))
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$5), { class: "max-w-2xl top-[25%] p-0 overflow-hidden border-border" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), { class: "px-4 pt-4 pb-2" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), { class: "sr-only" }, {
                        default: withCtx(() => [
                          createTextVNode("Search")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$4), { class: "sr-only" }, {
                        default: withCtx(() => [
                          createTextVNode("Find products across all games and categories")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "px-4 pb-2" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                      withDirectives(createVNode("input", {
                        ref_key: "inputRef",
                        ref: inputRef,
                        "onUpdate:modelValue": ($event) => query.value = $event,
                        type: "search",
                        placeholder: "Search products…",
                        class: "pl-9 w-full h-9 rounded-md border bg-background px-3 py-1 text-sm shadow-sm outline-none",
                        onKeydown: [
                          withKeys(withModifiers(onArrowDown, ["prevent", "stop"]), ["down"]),
                          withKeys(withModifiers(onArrowUp, ["prevent", "stop"]), ["up"]),
                          withKeys(withModifiers(selectActive, ["prevent", "stop"]), ["enter"])
                        ]
                      }, null, 40, ["onUpdate:modelValue", "onKeydown"]), [
                        [vModelText, query.value]
                      ]),
                      loading.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute right-3 top-1/2 -translate-y-1/2"
                      }, [
                        createVNode(unref(Loader2), { class: "w-4 h-4 animate-spin text-muted-foreground" })
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "px-2 pb-2" }, [
                    hasResults.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "max-h-96 overflow-auto rounded-md border border-border",
                      role: "listbox",
                      "aria-activedescendant": activeIndex.value >= 0 ? `gs-item-${activeIndex.value}` : void 0
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(results.value, (p, i) => {
                        return openBlock(), createBlock("button", {
                          key: p.id,
                          id: `gs-item-${i}`,
                          role: "option",
                          "aria-selected": i === activeIndex.value,
                          class: ["w-full text-left px-3 py-2 flex items-center gap-3 hover:bg-muted focus:bg-muted focus:outline-none", i === activeIndex.value ? "bg-muted" : ""],
                          onMouseenter: ($event) => activeIndex.value = i,
                          onClick: () => {
                            closeDialog();
                            unref(router).visit(productUrl(p));
                          }
                        }, [
                          createVNode("div", { class: "relative shrink-0" }, [
                            createVNode("img", {
                              src: p.stored_image,
                              alt: p.title,
                              class: "h-10 w-10 rounded object-cover border border-border"
                            }, null, 8, ["src", "alt"]),
                            p.game?.stored_logo_image ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: p.game.stored_logo_image,
                              alt: p.game.title,
                              class: "absolute -right-1 -bottom-1 h-5 w-5 rounded bg-background p-0.5 object-contain border border-border"
                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            createVNode("div", { class: "truncate text-sm font-medium" }, toDisplayString(p.title), 1),
                            createVNode("div", { class: "mt-0.5 flex items-center gap-2 text-xs text-muted-foreground" }, [
                              createVNode("span", null, toDisplayString(p.human_price), 1),
                              p.game?.title ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "inline-flex items-center gap-1"
                              }, [
                                createTextVNode(" • "),
                                createVNode("span", { class: "truncate max-w-[12rem]" }, toDisplayString(p.game.title), 1)
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ], 42, ["id", "aria-selected", "onMouseenter", "onClick"]);
                      }), 128))
                    ], 8, ["aria-activedescendant"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "px-3 py-8 text-center text-sm text-muted-foreground"
                    }, [
                      !hasQuery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(" Start typing to search across all products ")
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" No results ")
                      ], 64))
                    ]))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/GlobalSearch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DefaultLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { summary: summary2, loadSummary: loadSummary2 } = useCartSummary();
    function formatPrice(cents) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
    }
    const legalPages = usePage().props.legalPages;
    const user = usePage().props.auth.user;
    const isOpen = ref(false);
    onMounted(() => loadSummary2());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex flex-col min-h-screen"><header class="w-[90%] 2xl:w-[75%] mx-auto border border-border mt-10 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "font-bold text-lg flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronsDown), { class: "bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border border-transparent text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronsDown), { class: "bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border border-transparent text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$f), {
        direction: "left",
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DrawerTrigger), {
              class: "lg:hidden",
              "as-child": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { variant: "ghost" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Menu), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Menu))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$8), { variant: "ghost" }, {
                      default: withCtx(() => [
                        createVNode(unref(Menu))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$d), { class: "flex w-full flex-col justify-between border-border rounded-tr-2xl rounded-br-2xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$b), { class: "bg-card p-2 mx-2 border border-border my-10 rounded-2xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$a), { class: "flex justify-between items-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<a href="/" class="flex items-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(ChevronsDown), { class: "bg-gradient-to-tr border-primary from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white" }, null, _parent5, _scopeId4));
                              _push5(` ShadcnVue </a>`);
                              _push5(ssrRenderComponent(unref(DrawerClose), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$8), { variant: "ghost" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(X), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(X))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$8), { variant: "ghost" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(X))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("a", {
                                  href: "/",
                                  class: "flex items-center"
                                }, [
                                  createVNode(unref(ChevronsDown), { class: "bg-gradient-to-tr border-primary from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white" }),
                                  createTextVNode(" ShadcnVue ")
                                ]),
                                createVNode(unref(DrawerClose), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), { variant: "ghost" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(X))
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$c), { class: "sr-only" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Navigation Menu `);
                            } else {
                              return [
                                createTextVNode(" Navigation Menu ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$a), { class: "flex justify-between items-center" }, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: "/",
                                class: "flex items-center"
                              }, [
                                createVNode(unref(ChevronsDown), { class: "bg-gradient-to-tr border-primary from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white" }),
                                createTextVNode(" ShadcnVue ")
                              ]),
                              createVNode(unref(DrawerClose), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), { variant: "ghost" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(X))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), { class: "sr-only" }, {
                            default: withCtx(() => [
                              createTextVNode(" Navigation Menu ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("games.index")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Games`);
                      } else {
                        return [
                          createTextVNode("Games")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("posts.index")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Blog`);
                      } else {
                        return [
                          createTextVNode("Blog")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("reviews.public")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Reviews`);
                      } else {
                        return [
                          createTextVNode("Reviews")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("home")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Contact Us`);
                      } else {
                        return [
                          createTextVNode("Contact Us")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "my-4" }, null, _parent3, _scopeId2));
                  if (!_ctx.$page.props.auth.user) {
                    _push3(`<div class="flex flex-col gap-4 items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      class: "hover:underline",
                      href: _ctx.route("login")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Login`);
                        } else {
                          return [
                            createTextVNode("Login")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Link), {
                      class: "hover:underline",
                      href: _ctx.route("register")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Sign Up`);
                        } else {
                          return [
                            createTextVNode("Sign Up")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.$page.props.auth.user) {
                    _push3(`<div class="flex flex-col items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      class: "hover:underline",
                      href: _ctx.route("dashboard")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Dashboard`);
                        } else {
                          return [
                            createTextVNode("Dashboard")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(unref(_sfc_main$b), { class: "bg-card p-2 mx-2 border border-border my-10 rounded-2xl" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), { class: "flex justify-between items-center" }, {
                            default: withCtx(() => [
                              createVNode("a", {
                                href: "/",
                                class: "flex items-center"
                              }, [
                                createVNode(unref(ChevronsDown), { class: "bg-gradient-to-tr border-primary from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white" }),
                                createTextVNode(" ShadcnVue ")
                              ]),
                              createVNode(unref(DrawerClose), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), { variant: "ghost" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(X))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$c), { class: "sr-only" }, {
                            default: withCtx(() => [
                              createTextVNode(" Navigation Menu ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col items-center gap-2" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("games.index")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Games")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("posts.index")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Blog")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("reviews.public")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Reviews")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("home")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Contact Us")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      createVNode(unref(_sfc_main$7), { class: "my-4" }),
                      !_ctx.$page.props.auth.user ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-col gap-4 items-center"
                      }, [
                        createVNode(unref(Link), {
                          class: "hover:underline",
                          href: _ctx.route("login")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Login")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          class: "hover:underline",
                          href: _ctx.route("register")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Sign Up")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])) : createCommentVNode("", true),
                      _ctx.$page.props.auth.user ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex flex-col items-center"
                      }, [
                        createVNode(unref(Link), {
                          class: "hover:underline",
                          href: _ctx.route("dashboard")
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Dashboard")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DrawerTrigger), {
                class: "lg:hidden",
                "as-child": ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8), { variant: "ghost" }, {
                    default: withCtx(() => [
                      createVNode(unref(Menu))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$d), { class: "flex w-full flex-col justify-between border-border rounded-tr-2xl rounded-br-2xl" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode(unref(_sfc_main$b), { class: "bg-card p-2 mx-2 border border-border my-10 rounded-2xl" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$a), { class: "flex justify-between items-center" }, {
                          default: withCtx(() => [
                            createVNode("a", {
                              href: "/",
                              class: "flex items-center"
                            }, [
                              createVNode(unref(ChevronsDown), { class: "bg-gradient-to-tr border-primary from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white" }),
                              createTextVNode(" ShadcnVue ")
                            ]),
                            createVNode(unref(DrawerClose), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$8), { variant: "ghost" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(X))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$c), { class: "sr-only" }, {
                          default: withCtx(() => [
                            createTextVNode(" Navigation Menu ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col items-center gap-2" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("games.index")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Games")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("posts.index")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Blog")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("reviews.public")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Reviews")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("home")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Contact Us")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    createVNode(unref(_sfc_main$7), { class: "my-4" }),
                    !_ctx.$page.props.auth.user ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col gap-4 items-center"
                    }, [
                      createVNode(unref(Link), {
                        class: "hover:underline",
                        href: _ctx.route("login")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Login")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        class: "hover:underline",
                        href: _ctx.route("register")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Sign Up")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])) : createCommentVNode("", true),
                    _ctx.$page.props.auth.user ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col items-center"
                    }, [
                      createVNode(unref(Link), {
                        class: "hover:underline",
                        href: _ctx.route("dashboard")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Dashboard")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:block"><ul class="flex gap-4 items-center"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "hover:underline",
        href: _ctx.route("games.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Games`);
          } else {
            return [
              createTextVNode("Games")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "hover:underline",
        href: _ctx.route("posts.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "hover:underline",
        href: _ctx.route("reviews.public")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Reviews`);
          } else {
            return [
              createTextVNode("Reviews")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "hover:underline",
        href: _ctx.route("contact.show")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</ul></nav><div class="hidden lg:flex pr-2 xl:pr-4 gap-6"><div class="flex items-center gap-4">`);
      if (unref(summary2).total_qty) {
        _push(`<span>${ssrInterpolate(formatPrice(unref(summary2).total_sum_cents))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a href="/cart" class="relative">`);
      if (unref(summary2).total_qty) {
        _push(`<span class="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">${ssrInterpolate(unref(summary2).total_qty)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(ShoppingCart), null, null, _parent));
      _push(`</a></div>`);
      if (!_ctx.$page.props.auth.user) {
        _push(`<div class="flex justify-between gap-4 items-center">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "hover:underline",
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Login`);
            } else {
              return [
                createTextVNode("Login")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          class: "hover:underline",
          href: _ctx.route("register")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Sign Up`);
            } else {
              return [
                createTextVNode("Sign Up")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.auth.user) {
        _push(`<div class="flex justify-between items-center">`);
        _push(ssrRenderComponent(unref(_sfc_main$l), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$g), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(user)?.avatar_url) {
                      _push3(`<img${ssrRenderAttr("src", unref(user).avatar_url)} alt="User avatar" class="h-8 w-8 rounded-full object-cover"${_scopeId2}>`);
                    } else {
                      _push3(`<div class="h-8 w-8 items-center justify-center flex"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(User), null, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                  } else {
                    return [
                      unref(user)?.avatar_url ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: unref(user).avatar_url,
                        alt: "User avatar",
                        class: "h-8 w-8 rounded-full object-cover",
                        onError: ($event) => $event.target.src = ""
                      }, null, 40, ["src", "onError"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "h-8 w-8 items-center justify-center flex"
                      }, [
                        createVNode(unref(User))
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$k), { class: "border border-border" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$i), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`My Account`);
                        } else {
                          return [
                            createTextVNode("My Account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$h), null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("dashboard")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$j), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Dashboard `);
                              } else {
                                return [
                                  createTextVNode(" Dashboard ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$j), null, {
                              default: withCtx(() => [
                                createTextVNode(" Dashboard ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("orders.index")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$j), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Orders `);
                              } else {
                                return [
                                  createTextVNode(" Orders ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$j), null, {
                              default: withCtx(() => [
                                createTextVNode(" Orders ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("profile.edit")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$j), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Settings `);
                              } else {
                                return [
                                  createTextVNode(" Settings ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$j), null, {
                              default: withCtx(() => [
                                createTextVNode(" Settings ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Link), {
                      class: "w-full",
                      href: _ctx.route("logout"),
                      method: "post",
                      as: "button"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$j), { class: "w-full" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Logout `);
                              } else {
                                return [
                                  createTextVNode(" Logout ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$j), { class: "w-full" }, {
                              default: withCtx(() => [
                                createTextVNode(" Logout ")
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
                      createVNode(unref(_sfc_main$i), null, {
                        default: withCtx(() => [
                          createTextVNode("My Account")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$h)),
                      createVNode(unref(Link), {
                        href: _ctx.route("dashboard")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$j), null, {
                            default: withCtx(() => [
                              createTextVNode(" Dashboard ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("orders.index")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$j), null, {
                            default: withCtx(() => [
                              createTextVNode(" Orders ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("profile.edit")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$j), null, {
                            default: withCtx(() => [
                              createTextVNode(" Settings ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        class: "w-full",
                        href: _ctx.route("logout"),
                        method: "post",
                        as: "button"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$j), { class: "w-full" }, {
                            default: withCtx(() => [
                              createTextVNode(" Logout ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$g), null, {
                  default: withCtx(() => [
                    unref(user)?.avatar_url ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: unref(user).avatar_url,
                      alt: "User avatar",
                      class: "h-8 w-8 rounded-full object-cover",
                      onError: ($event) => $event.target.src = ""
                    }, null, 40, ["src", "onError"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "h-8 w-8 items-center justify-center flex"
                    }, [
                      createVNode(unref(User))
                    ]))
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$k), { class: "border border-border" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$i), null, {
                      default: withCtx(() => [
                        createTextVNode("My Account")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$h)),
                    createVNode(unref(Link), {
                      href: _ctx.route("dashboard")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$j), null, {
                          default: withCtx(() => [
                            createTextVNode(" Dashboard ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("orders.index")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$j), null, {
                          default: withCtx(() => [
                            createTextVNode(" Orders ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.edit")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$j), null, {
                          default: withCtx(() => [
                            createTextVNode(" Settings ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      class: "w-full",
                      href: _ctx.route("logout"),
                      method: "post",
                      as: "button"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$j), { class: "w-full" }, {
                          default: withCtx(() => [
                            createTextVNode(" Logout ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="w-[90%] 2xl:w-[75%] mx-auto border border-border rounded-2xl p-4 lg:p-8 bg-card shadow-md mb-10"><div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"><div class="col-span-full xl:col-span-2"><a href="#" class="flex font-bold items-center">`);
      _push(ssrRenderComponent(unref(ChevronsDown), { class: "bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border border-transparent text-white" }, null, _parent));
      _push(`<h3 class="text-2xl">Shadcn-Vue</h3></a></div><div class="flex flex-col gap-2"><h3 class="font-bold text-lg">Contact</h3><div><a href="#" class="opacity-60 hover:opacity-100"> Github </a></div><div><a href="#" class="opacity-60 hover:opacity-100"> Twitter </a></div><div><a href="#" class="opacity-60 hover:opacity-100"> Instagram </a></div></div><div class="flex flex-col gap-2"><h3 class="font-bold text-lg">Legal</h3><!--[-->`);
      ssrRenderList(unref(legalPages), (p) => {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: p.url,
          class: "opacity-60 hover:opacity-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(p.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(p.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col gap-2"><h3 class="font-bold text-lg">Help</h3><div><a href="#" class="opacity-60 hover:opacity-100"> Contact Us </a></div><div><a href="#" class="opacity-60 hover:opacity-100"> FAQ </a></div><div><a href="#" class="opacity-60 hover:opacity-100"> Feedback </a></div></div><div class="flex flex-col gap-2"><h3 class="font-bold text-lg">Socials</h3><div><a href="#" class="opacity-60 hover:opacity-100"> Twitch </a></div><div><a href="#" class="opacity-60 hover:opacity-100"> Discord </a></div><div><a href="#" class="opacity-60 hover:opacity-100"> Dribbble </a></div></div></div></footer></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$9), {
        theme: "dark",
        "rich-colors": "",
        "visible-toasts": 2
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/DefaultLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$8 as a,
  cn as c,
  useCartSummary as u
};
