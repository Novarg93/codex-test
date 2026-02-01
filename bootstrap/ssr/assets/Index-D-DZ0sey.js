import { mergeProps, unref, useSSRContext, withCtx, renderSlot, createVNode, ref, reactive, watch, computed, onMounted, onUnmounted, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, defineComponent, onBeforeUnmount, Fragment, renderList, withModifiers, withKeys, TransitionGroup } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { c as cn, _ as _sfc_main$g, a as _sfc_main$i } from "./DefaultLayout-CLBo7IEt.js";
import axios from "axios";
import { toast } from "vue-sonner";
import "clsx";
import { _ as _sfc_main$h } from "./Input-TWcjNfes.js";
import { _ as _sfc_main$j, a as _sfc_main$k, b as _sfc_main$l, c as _sfc_main$m, e as _sfc_main$n } from "./SelectValue-DdNZds6K.js";
import { useForwardPropsEmits, PopoverRoot, PopoverPortal, PopoverContent, PopoverTrigger, useFilter, ListboxRoot, Primitive, useId, ListboxGroup, ListboxGroupLabel, useForwardProps, ListboxFilter, ListboxItem, ListboxContent, createContext } from "reka-ui";
import { reactiveOmit, useCurrentElement } from "@vueuse/core";
import { Search } from "lucide-vue-next";
import { _ as _sfc_main$f } from "./SeoHead-CQ0qjzaG.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "tailwind-merge";
import "vaul-vue";
import "class-variance-authority";
const _sfc_main$e = {
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full overflow-auto" }, _attrs))}><table class="${ssrRenderClass(unref(cn)("w-full caption-bottom text-sm", props.class))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</table></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/table/Table.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "TableCell",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/table/TableCell.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "TableRow",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tr>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/table/TableRow.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "TableHead",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</th>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/table/TableHead.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "TableHeader",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${ssrRenderAttrs(mergeProps({
        class: unref(cn)("[&_tr]:border-b", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</thead>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/table/TableHeader.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/popover/Popover.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "PopoverContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false, default: 4 },
    sideFlip: { type: Boolean, required: false },
    align: { type: null, required: false, default: "center" },
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
    disableOutsidePointerEvents: { type: Boolean, required: false },
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
      _push(ssrRenderComponent(unref(PopoverPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
              createVNode(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/popover/PopoverContent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "PopoverTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/popover/PopoverTrigger.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Command",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: null, required: false, default: "" },
    defaultValue: { type: null, required: false },
    multiple: { type: Boolean, required: false },
    orientation: { type: String, required: false },
    dir: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    selectionBehavior: { type: String, required: false },
    highlightOnHover: { type: Boolean, required: false },
    by: { type: [String, Function], required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    const allItems = ref(/* @__PURE__ */ new Map());
    const allGroups = ref(/* @__PURE__ */ new Map());
    const { contains } = useFilter({ sensitivity: "base" });
    const filterState = reactive({
      search: "",
      filtered: {
        /** The count of all visible items. */
        count: 0,
        /** Map from visible item id to its search score. */
        items: /* @__PURE__ */ new Map(),
        /** Set of groups with at least one visible item. */
        groups: /* @__PURE__ */ new Set()
      }
    });
    function filterItems() {
      if (!filterState.search) {
        filterState.filtered.count = allItems.value.size;
        return;
      }
      filterState.filtered.groups = /* @__PURE__ */ new Set();
      let itemCount = 0;
      for (const [id, value] of allItems.value) {
        const score = contains(value, filterState.search);
        filterState.filtered.items.set(id, score ? 1 : 0);
        if (score) itemCount++;
      }
      for (const [groupId, group] of allGroups.value) {
        for (const itemId of group) {
          if (filterState.filtered.items.get(itemId) > 0) {
            filterState.filtered.groups.add(groupId);
            break;
          }
        }
      }
      filterState.filtered.count = itemCount;
    }
    watch(
      () => filterState.search,
      () => {
        filterItems();
      }
    );
    provideCommandContext({
      allItems,
      allGroups,
      filterState
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/command/Command.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "CommandEmpty",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const { filterState } = useCommand();
    const isRender = computed(
      () => !!filterState.search && filterState.filtered.count === 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (isRender.value) {
        _push(ssrRenderComponent(unref(Primitive), mergeProps(unref(delegatedProps), {
          class: unref(cn)("py-6 text-center text-sm", props.class)
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/command/CommandEmpty.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "CommandGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
    heading: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const { allGroups, filterState } = useCommand();
    const id = useId();
    const isRender = computed(
      () => !filterState.search ? true : filterState.filtered.groups.has(id)
    );
    provideCommandGroupContext({ id });
    onMounted(() => {
      if (!allGroups.value.has(id)) allGroups.value.set(id, /* @__PURE__ */ new Set());
    });
    onUnmounted(() => {
      allGroups.value.delete(id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxGroup), mergeProps(unref(delegatedProps), {
        id: unref(id),
        class: unref(cn)(
          "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
          props.class
        ),
        hidden: isRender.value ? void 0 : true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.heading) {
              _push2(ssrRenderComponent(unref(ListboxGroupLabel), { class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.heading ? (openBlock(), createBlock(unref(ListboxGroupLabel), {
                key: 0,
                class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.heading), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/command/CommandGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "CommandInput",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: String, required: false },
    autoFocus: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    const { filterState } = useCommand();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex items-center border-b px-3",
        "cmdk-input-wrapper": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Search), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ListboxFilter), mergeProps({ ...unref(forwardedProps), ..._ctx.$attrs }, {
        modelValue: unref(filterState).search,
        "onUpdate:modelValue": ($event) => unref(filterState).search = $event,
        "auto-focus": "",
        class: unref(cn)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/command/CommandInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CommandItem",
  __ssrInlineRender: true,
  props: {
    value: { type: null, required: true },
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    const id = useId();
    const { filterState, allItems, allGroups } = useCommand();
    const groupContext = useCommandGroup();
    const isRender = computed(() => {
      if (!filterState.search) {
        return true;
      } else {
        const filteredCurrentItem = filterState.filtered.items.get(id);
        if (filteredCurrentItem === void 0) {
          return true;
        }
        return filteredCurrentItem > 0;
      }
    });
    const itemRef = ref();
    const currentElement = useCurrentElement(itemRef);
    onMounted(() => {
      if (!(currentElement.value instanceof HTMLElement)) return;
      allItems.value.set(
        id,
        currentElement.value.textContent ?? props?.value.toString()
      );
      const groupId = groupContext?.id;
      if (groupId) {
        if (!allGroups.value.has(groupId)) {
          allGroups.value.set(groupId, /* @__PURE__ */ new Set([id]));
        } else {
          allGroups.value.get(groupId)?.add(id);
        }
      }
    });
    onUnmounted(() => {
      allItems.value.delete(id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isRender.value) {
        _push(ssrRenderComponent(unref(ListboxItem), mergeProps(unref(forwarded), {
          id: unref(id),
          ref_key: "itemRef",
          ref: itemRef,
          class: unref(cn)(
            "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
            props.class
          ),
          onSelect: () => {
            unref(filterState).search = "";
          }
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/command/CommandItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CommandList",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ListboxContent), mergeProps(unref(forwarded), {
        class: unref(cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div role="presentation"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { role: "presentation" }, [
                renderSlot(_ctx.$slots, "default")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/command/CommandList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const [useCommand, provideCommandContext] = createContext("Command");
const [useCommandGroup, provideCommandGroupContext] = createContext("CommandGroup");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    items: {},
    seo: {}
  },
  setup(__props) {
    const notifiedNewOrders = ref(/* @__PURE__ */ new Set());
    const lastNickByOrder = ref({});
    function summarizeOrders(items) {
      const map = {};
      for (const it of items) {
        const oid = it.order_id;
        if (!map[oid]) map[oid] = { pending: false, nick: it.character ?? null };
        if ((it.order_status ?? it.status) === "pending") map[oid].pending = true;
        if (map[oid].nick == null && it.character) map[oid].nick = it.character;
      }
      return map;
    }
    const props = __props;
    const rows = ref([...props.items]);
    const nextCursor = ref(null);
    const isLoading = ref(false);
    let fetchCtrl = null;
    function emailColorClass(status) {
      switch (status) {
        case "paid":
        case "in_progress":
          return "text-yellow-600";
        case "completed":
          return "text-green-600";
        case "refund":
          return "text-red-600";
        default:
          return "";
      }
    }
    function markDirty(r) {
      r._dirty = true;
    }
    const headerCountLabel = computed(() => {
      const loaded = rows.value.length;
      const total = totalCount.value ?? loaded;
      return total > loaded ? `${loaded} (${total})` : `${total}`;
    });
    const totalCount = ref(null);
    async function saveRow(r) {
      const dirty = rows.value.filter((x) => x._dirty || r && x.id === r.id);
      if (!dirty.length) return;
      const payload = {
        items: dirty.map((x) => ({
          id: x.id,
          cost_price: x.cost_price ?? null,
          status: x.status,
          // можно слать всегда
          link_screen: x.link_screen ?? null
        }))
      };
      try {
        const { data } = await axios.patch(route("workflow.items.bulk"), payload);
        const map = new Map(data.items.map((i) => [i.id, i]));
        const updatedIds = data.items.map((i) => i.id);
        if (updatedIds.length) flash(updatedIds, "green");
        rows.value = rows.value.map((x) => map.get(x.id) ?? x);
        rows.value.forEach((x) => delete x._dirty);
        toast.success("Saved");
      } catch (e) {
        const res = e?.response;
        if (res?.status === 422) {
          const errors = res.data?.errors || {};
          const flat = Object.values(errors).flat();
          const msg = flat[0] || res.data?.message || "Validation error";
          toast.error("Save failed", { description: msg });
        } else if (e.name !== "CanceledError" && e.code !== "ERR_CANCELED") {
          toast.error("Save failed", { description: e?.message || "Unknown error" });
        }
      }
    }
    const STATUS_LIST = ["pending", "paid", "in_progress", "completed", "refund"];
    const flashMap = ref({});
    function flash(ids, tone = "green", ms = 3e3) {
      const arr = Array.isArray(ids) ? ids : [ids];
      flashMap.value = { ...flashMap.value, ...Object.fromEntries(arr.map((id) => [id, tone])) };
      setTimeout(() => {
        const next = { ...flashMap.value };
        arr.forEach((id) => delete next[id]);
        flashMap.value = next;
      }, ms);
    }
    const appliedStatuses = ref([...STATUS_LIST]);
    const appliedSearch = ref("");
    const open = ref(false);
    const uiStatusChecked = ref({
      pending: true,
      paid: true,
      in_progress: true,
      completed: true,
      refund: true
    });
    const uiSearchRaw = ref("");
    function toggleStatus(s) {
      uiStatusChecked.value = { ...uiStatusChecked.value, [s]: !uiStatusChecked.value[s] };
    }
    function setAll(v) {
      uiStatusChecked.value = STATUS_LIST.reduce((acc, s) => {
        acc[s] = v;
        return acc;
      }, {});
    }
    watch(open, (v) => {
      if (v) {
        uiStatusChecked.value = STATUS_LIST.reduce((acc, s) => {
          acc[s] = appliedStatuses.value.includes(s);
          return acc;
        }, {});
      }
    });
    function applyFilters() {
      appliedStatuses.value = STATUS_LIST.filter((s) => uiStatusChecked.value[s]);
      appliedSearch.value = uiSearchRaw.value.trim();
      localStorage.setItem("wf.filters", JSON.stringify({
        statuses: appliedStatuses.value,
        q: appliedSearch.value
      }));
      nextCursor.value = null;
      fetchPage(true);
      open.value = false;
    }
    const buttonLabel = computed(() => {
      const sel = appliedStatuses.value;
      if (sel.length === STATUS_LIST.length) return "Statuses: All";
      if (sel.length === 0) return "Statuses: None";
      if (sel.length === 1) return `Status: ${sel[0].replace("_", " ")}`;
      return `Statuses: ${sel.length}`;
    });
    const searchRaw = ref("");
    const search = ref("");
    let searchTimer = null;
    watch(searchRaw, (v) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        search.value = v;
      }, 1e3);
    });
    onBeforeUnmount(() => clearTimeout(searchTimer));
    async function fetchPage(reset = false, opts) {
      if (isLoading.value) return;
      isLoading.value = true;
      const notify = !!opts?.notify;
      Object.keys(lastNickByOrder.value).length > 0;
      const prevSummary = reset ? summarizeOrders(rows.value) : null;
      try {
        fetchCtrl?.abort();
        fetchCtrl = new AbortController();
        const params = { statuses: appliedStatuses.value, q: appliedSearch.value, limit: 50 };
        if (!reset && nextCursor.value) {
          params["cursor[order_id]"] = nextCursor.value.order_id;
          params["cursor[id]"] = nextCursor.value.id;
        }
        const { data } = await axios.get(route("workflow.list"), {
          params,
          signal: fetchCtrl.signal
        });
        const newItems = data.items ?? [];
        rows.value = reset ? newItems : [...rows.value, ...newItems];
        nextCursor.value = data.next_cursor ?? null;
        if (typeof data.total === "number") totalCount.value = data.total;
        if (reset) {
          const curSummary = summarizeOrders(rows.value);
          if (notify && prevSummary) {
            const prevIds = new Set(Object.keys(prevSummary).map(Number));
            for (const [oidStr, cur] of Object.entries(curSummary)) {
              const oid = Number(oidStr);
              if (!prevIds.has(oid) && cur.pending && !notifiedNewOrders.value.has(oid)) {
                toast.success(`#${oid} New order`);
                notifiedNewOrders.value.add(oid);
              }
            }
            for (const [oidStr, cur] of Object.entries(curSummary)) {
              const oid = Number(oidStr);
              const prevNick = lastNickByOrder.value[oid];
              const curNick = cur.nick ?? null;
              if (prevNick !== void 0 && (prevNick ?? "") !== (curNick ?? "")) {
                toast.warning(`#${oid} New nickname`);
              }
              lastNickByOrder.value[oid] = curNick;
            }
          } else {
            for (const [oidStr, cur] of Object.entries(curSummary)) {
              lastNickByOrder.value[Number(oidStr)] = cur.nick ?? null;
            }
          }
        }
      } catch (e) {
        if (e.name !== "CanceledError" && e.code !== "ERR_CANCELED") console.error(e);
      } finally {
        isLoading.value = false;
      }
    }
    onMounted(() => {
      const st = localStorage.getItem("wf.filters");
      if (st) {
        const parsed = JSON.parse(st);
        appliedStatuses.value = parsed.statuses ?? appliedStatuses.value;
        appliedSearch.value = parsed.q ?? "";
        uiSearchRaw.value = appliedSearch.value;
      }
      fetchPage(true, { notify: false });
    });
    onMounted(() => {
      const EchoAny = window.Echo;
      if (EchoAny?.private) {
        EchoAny.private("orders").subscribed(() => console.log("[orders] subscribed ✅")).error((e) => console.error("[orders] subscription error ❌", e)).listen(".workflow.updated", (_e) => {
          fetchPage(true, { notify: true });
        });
      }
    });
    onBeforeUnmount(() => {
      try {
        window.Echo?.leave("orders");
      } catch {
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$f, {
        seo: props.seo
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-4 sm:px-6 lg:px-8 py-6" data-v-62fd5cee${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4" data-v-62fd5cee${_scopeId}><h1 class="text-2xl font-semibold" data-v-62fd5cee${_scopeId}> Workflow <span class="ml-2 text-sm text-muted-foreground align-middle" data-v-62fd5cee${_scopeId}>${ssrInterpolate(headerCountLabel.value)}</span></h1><div class="flex items-center gap-2" data-v-62fd5cee${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$h), {
              modelValue: uiSearchRaw.value,
              "onUpdate:modelValue": ($event) => uiSearchRaw.value = $event,
              class: "w-64",
              type: "search",
              autocomplete: "off",
              placeholder: "Search (#id, email, nickname, item…)",
              onKeydown: applyFilters
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$i), {
              size: "sm",
              class: "h-8",
              disabled: isLoading.value,
              onClick: applyFilters
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Apply`);
                } else {
                  return [
                    createTextVNode("Apply")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$9), {
              open: open.value,
              "onUpdate:open": ($event) => open.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$i), {
                          variant: "outline",
                          size: "sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(buttonLabel.value)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(buttonLabel.value), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$i), {
                            variant: "outline",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(buttonLabel.value), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "w-64 p-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$3), { placeholder: "Filter status..." }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$1), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$5), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`No results`);
                                        } else {
                                          return [
                                            createTextVNode("No results")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$4), { heading: "Statuses" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(STATUS_LIST, (s) => {
                                            _push7(ssrRenderComponent(unref(_sfc_main$2), {
                                              key: s,
                                              value: s,
                                              onSelect: (ev) => {
                                                ev?.preventDefault?.();
                                                toggleStatus(s);
                                              },
                                              class: "flex items-center gap-2 cursor-pointer"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="${ssrRenderClass([uiStatusChecked.value[s] ? "bg-primary" : "bg-muted-foreground/30", "w-2 h-2 rounded-full"])}" data-v-62fd5cee${_scopeId7}></span><span class="capitalize select-none" data-v-62fd5cee${_scopeId7}>${ssrInterpolate(s.replace("_", " "))}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", {
                                                      class: ["w-2 h-2 rounded-full", uiStatusChecked.value[s] ? "bg-primary" : "bg-muted-foreground/30"]
                                                    }, null, 2),
                                                    createVNode("span", { class: "capitalize select-none" }, toDisplayString(s.replace("_", " ")), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(STATUS_LIST, (s) => {
                                              return createVNode(unref(_sfc_main$2), {
                                                key: s,
                                                value: s,
                                                onSelect: (ev) => {
                                                  ev?.preventDefault?.();
                                                  toggleStatus(s);
                                                },
                                                class: "flex items-center gap-2 cursor-pointer"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", {
                                                    class: ["w-2 h-2 rounded-full", uiStatusChecked.value[s] ? "bg-primary" : "bg-muted-foreground/30"]
                                                  }, null, 2),
                                                  createVNode("span", { class: "capitalize select-none" }, toDisplayString(s.replace("_", " ")), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onSelect"]);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$5), null, {
                                        default: withCtx(() => [
                                          createTextVNode("No results")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$4), { heading: "Statuses" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(STATUS_LIST, (s) => {
                                            return createVNode(unref(_sfc_main$2), {
                                              key: s,
                                              value: s,
                                              onSelect: (ev) => {
                                                ev?.preventDefault?.();
                                                toggleStatus(s);
                                              },
                                              class: "flex items-center gap-2 cursor-pointer"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", {
                                                  class: ["w-2 h-2 rounded-full", uiStatusChecked.value[s] ? "bg-primary" : "bg-muted-foreground/30"]
                                                }, null, 2),
                                                createVNode("span", { class: "capitalize select-none" }, toDisplayString(s.replace("_", " ")), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "onSelect"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="flex items-center justify-between gap-2 p-2 border-t" data-v-62fd5cee${_scopeId4}><div class="flex gap-2" data-v-62fd5cee${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$i), {
                                size: "xs",
                                variant: "ghost",
                                onClick: ($event) => setAll(true)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Select all`);
                                  } else {
                                    return [
                                      createTextVNode("Select all")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$i), {
                                size: "xs",
                                variant: "ghost",
                                onClick: ($event) => setAll(false)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Clear`);
                                  } else {
                                    return [
                                      createTextVNode("Clear")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(unref(_sfc_main$i), {
                                size: "xs",
                                onClick: applyFilters
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Apply`);
                                  } else {
                                    return [
                                      createTextVNode("Apply")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(unref(_sfc_main$3), { placeholder: "Filter status..." }),
                                createVNode(unref(_sfc_main$1), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$5), null, {
                                      default: withCtx(() => [
                                        createTextVNode("No results")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$4), { heading: "Statuses" }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(STATUS_LIST, (s) => {
                                          return createVNode(unref(_sfc_main$2), {
                                            key: s,
                                            value: s,
                                            onSelect: (ev) => {
                                              ev?.preventDefault?.();
                                              toggleStatus(s);
                                            },
                                            class: "flex items-center gap-2 cursor-pointer"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", {
                                                class: ["w-2 h-2 rounded-full", uiStatusChecked.value[s] ? "bg-primary" : "bg-muted-foreground/30"]
                                              }, null, 2),
                                              createVNode("span", { class: "capitalize select-none" }, toDisplayString(s.replace("_", " ")), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onSelect"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center justify-between gap-2 p-2 border-t" }, [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(unref(_sfc_main$i), {
                                      size: "xs",
                                      variant: "ghost",
                                      onClick: withModifiers(($event) => setAll(true), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Select all")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(unref(_sfc_main$i), {
                                      size: "xs",
                                      variant: "ghost",
                                      onClick: withModifiers(($event) => setAll(false), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Clear")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  createVNode(unref(_sfc_main$i), {
                                    size: "xs",
                                    onClick: withModifiers(applyFilters, ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Apply")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$3), { placeholder: "Filter status..." }),
                              createVNode(unref(_sfc_main$1), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$5), null, {
                                    default: withCtx(() => [
                                      createTextVNode("No results")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$4), { heading: "Statuses" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(STATUS_LIST, (s) => {
                                        return createVNode(unref(_sfc_main$2), {
                                          key: s,
                                          value: s,
                                          onSelect: (ev) => {
                                            ev?.preventDefault?.();
                                            toggleStatus(s);
                                          },
                                          class: "flex items-center gap-2 cursor-pointer"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              class: ["w-2 h-2 rounded-full", uiStatusChecked.value[s] ? "bg-primary" : "bg-muted-foreground/30"]
                                            }, null, 2),
                                            createVNode("span", { class: "capitalize select-none" }, toDisplayString(s.replace("_", " ")), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 64))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex items-center justify-between gap-2 p-2 border-t" }, [
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode(unref(_sfc_main$i), {
                                    size: "xs",
                                    variant: "ghost",
                                    onClick: withModifiers(($event) => setAll(true), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Select all")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(unref(_sfc_main$i), {
                                    size: "xs",
                                    variant: "ghost",
                                    onClick: withModifiers(($event) => setAll(false), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Clear")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                createVNode(unref(_sfc_main$i), {
                                  size: "xs",
                                  onClick: withModifiers(applyFilters, ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Apply")
                                  ]),
                                  _: 1
                                })
                              ])
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
                    createVNode(unref(_sfc_main$7), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$i), {
                          variant: "outline",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(buttonLabel.value), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "w-64 p-0" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$3), { placeholder: "Filter status..." }),
                            createVNode(unref(_sfc_main$1), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$5), null, {
                                  default: withCtx(() => [
                                    createTextVNode("No results")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$4), { heading: "Statuses" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(STATUS_LIST, (s) => {
                                      return createVNode(unref(_sfc_main$2), {
                                        key: s,
                                        value: s,
                                        onSelect: (ev) => {
                                          ev?.preventDefault?.();
                                          toggleStatus(s);
                                        },
                                        class: "flex items-center gap-2 cursor-pointer"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", {
                                            class: ["w-2 h-2 rounded-full", uiStatusChecked.value[s] ? "bg-primary" : "bg-muted-foreground/30"]
                                          }, null, 2),
                                          createVNode("span", { class: "capitalize select-none" }, toDisplayString(s.replace("_", " ")), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center justify-between gap-2 p-2 border-t" }, [
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode(unref(_sfc_main$i), {
                                  size: "xs",
                                  variant: "ghost",
                                  onClick: withModifiers(($event) => setAll(true), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Select all")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(_sfc_main$i), {
                                  size: "xs",
                                  variant: "ghost",
                                  onClick: withModifiers(($event) => setAll(false), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Clear")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              createVNode(unref(_sfc_main$i), {
                                size: "xs",
                                onClick: withModifiers(applyFilters, ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Apply")
                                ]),
                                _: 1
                              })
                            ])
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
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$e), { class: "w-full text-sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { class: "sticky top-0 z-10 bg-background backdrop-blur" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$c), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[72px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`#`);
                                  } else {
                                    return [
                                      createTextVNode("#")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "min-w-[220px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Customer`);
                                  } else {
                                    return [
                                      createTextVNode("Customer")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "min-w-[380px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Item`);
                                  } else {
                                    return [
                                      createTextVNode("Item")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[100px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Cost`);
                                  } else {
                                    return [
                                      createTextVNode("Cost")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[84px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Sale`);
                                  } else {
                                    return [
                                      createTextVNode("Sale")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Profit`);
                                  } else {
                                    return [
                                      createTextVNode("Profit")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Margin %`);
                                  } else {
                                    return [
                                      createTextVNode("Margin %")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[150px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Status`);
                                  } else {
                                    return [
                                      createTextVNode("Status")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[110px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Date`);
                                  } else {
                                    return [
                                      createTextVNode("Date")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[120px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Delivery`);
                                  } else {
                                    return [
                                      createTextVNode("Delivery")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[140px] py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Link`);
                                  } else {
                                    return [
                                      createTextVNode("Link")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$b), { class: "w-[90px] text-right py-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Action`);
                                  } else {
                                    return [
                                      createTextVNode("Action")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$b), { class: "w-[72px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("#")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "min-w-[220px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Customer")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "min-w-[380px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Item")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[100px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cost")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[84px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Sale")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Profit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Margin %")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[150px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Status")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[110px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[120px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Delivery")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[140px] py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Link")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$b), { class: "w-[90px] text-right py-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Action")
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
                          createVNode(unref(_sfc_main$c), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$b), { class: "w-[72px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("#")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "min-w-[220px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Customer")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "min-w-[380px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Item")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[100px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cost")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[84px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Sale")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Profit")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Margin %")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[150px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Status")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[110px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Date")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[120px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Delivery")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[140px] py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Link")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$b), { class: "w-[90px] text-right py-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Action")
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
                  _push3(`<tbody${ssrRenderAttrs({
                    name: "row",
                    class: "",
                    appear: ""
                  })} data-v-62fd5cee>`);
                  ssrRenderList(rows.value, (r) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$c), {
                      key: r.id,
                      class: [
                        r._dirty ? "bg-muted/50" : "",
                        flashMap.value[r.id] ? "flash-" + flashMap.value[r.id] : "",
                        "border-b"
                      ]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "font-medium whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`#${ssrInterpolate(r.order_id)}`);
                              } else {
                                return [
                                  createTextVNode("#" + toDisplayString(r.order_id), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([emailColorClass(r.status), "font-medium"])}" data-v-62fd5cee${_scopeId4}>${ssrInterpolate(r.customer_email)}</div>`);
                                if (r.chatnickname) {
                                  _push5(`<div class="text-xs text-muted-foreground" data-v-62fd5cee${_scopeId4}>${ssrInterpolate(r.chatnickname)}</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (r.character) {
                                  _push5(`<div class="text-xs text-muted-foreground" data-v-62fd5cee${_scopeId4}>${ssrInterpolate(r.character)}</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode("div", {
                                    class: ["font-medium", emailColorClass(r.status)]
                                  }, toDisplayString(r.customer_email), 3),
                                  r.chatnickname ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-xs text-muted-foreground"
                                  }, toDisplayString(r.chatnickname), 1)) : createCommentVNode("", true),
                                  r.character ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "text-xs text-muted-foreground"
                                  }, toDisplayString(r.character), 1)) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "leading-5" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass(emailColorClass(r.status))}" data-v-62fd5cee${_scopeId4}>${r.item_text ?? ""}</div>`);
                                if (r.discount && r.discount > 0) {
                                  _push5(`<div class="text-xs text-green-700 mt-0.5" data-v-62fd5cee${_scopeId4}> −${ssrInterpolate(r.discount.toFixed(2))} `);
                                  if (r.promo_code) {
                                    _push5(`<span data-v-62fd5cee${_scopeId4}> (${ssrInterpolate(r.promo_code)})</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (r.has_qty_slider) {
                                  _push5(`<div class="text-xs text-muted-foreground mt-0.5" data-v-62fd5cee${_scopeId4}> Qty: ${ssrInterpolate(r.qty)} `);
                                  if (r.unit_price !== void 0) {
                                    _push5(`<!--[--> · ${ssrInterpolate(r.unit_price.toFixed(2))} / each <!--]-->`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode("div", {
                                    class: emailColorClass(r.status),
                                    innerHTML: r.item_text
                                  }, null, 10, ["innerHTML"]),
                                  r.discount && r.discount > 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-xs text-green-700 mt-0.5"
                                  }, [
                                    createTextVNode(" −" + toDisplayString(r.discount.toFixed(2)) + " ", 1),
                                    r.promo_code ? (openBlock(), createBlock("span", { key: 0 }, " (" + toDisplayString(r.promo_code) + ")", 1)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  r.has_qty_slider ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "text-xs text-muted-foreground mt-0.5"
                                  }, [
                                    createTextVNode(" Qty: " + toDisplayString(r.qty) + " ", 1),
                                    r.unit_price !== void 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createTextVNode(" · " + toDisplayString(r.unit_price.toFixed(2)) + " / each ", 1)
                                    ], 64)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$h), {
                                  "model-value": r.cost_price ?? "",
                                  disabled: r.order_status === "refund",
                                  "onUpdate:modelValue": (val) => {
                                    const s = String(val).replace(",", ".").trim();
                                    r.cost_price = s === "" ? null : Number(s);
                                    markDirty(r);
                                  },
                                  onKeydown: ($event) => saveRow(r)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$h), {
                                    "model-value": r.cost_price ?? "",
                                    disabled: r.order_status === "refund",
                                    "onUpdate:modelValue": (val) => {
                                      const s = String(val).replace(",", ".").trim();
                                      r.cost_price = s === "" ? null : Number(s);
                                      markDirty(r);
                                    },
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onKeydown"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate((r.sale_price ?? 0).toFixed(2))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((r.sale_price ?? 0).toFixed(2)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(r.profit_net == null ? "—" : r.profit_net.toFixed(2))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(r.profit_net == null ? "—" : r.profit_net.toFixed(2)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(r.margin_percent == null ? "—" : r.margin_percent.toFixed(2))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(r.margin_percent == null ? "—" : r.margin_percent.toFixed(2)), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$j), {
                                  modelValue: r.status,
                                  "onUpdate:modelValue": [($event) => r.status = $event, () => markDirty(r)],
                                  disabled: r.order_status === "pending" || r.order_status === "refund",
                                  onKeydown: ($event) => saveRow(r)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(_sfc_main$k), { class: "h-8 w-[150px]" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$l), { placeholder: "status" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(_sfc_main$l), { placeholder: "status" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(_sfc_main$m), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$n), { value: "pending" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`pending`);
                                                } else {
                                                  return [
                                                    createTextVNode("pending")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$n), { value: "paid" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`paid`);
                                                } else {
                                                  return [
                                                    createTextVNode("paid")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$n), { value: "in_progress" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`in_progress`);
                                                } else {
                                                  return [
                                                    createTextVNode("in_progress")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$n), { value: "completed" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`completed`);
                                                } else {
                                                  return [
                                                    createTextVNode("completed")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$n), { value: "refund" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`refund`);
                                                } else {
                                                  return [
                                                    createTextVNode("refund")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(_sfc_main$n), { value: "pending" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("pending")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$n), { value: "paid" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("paid")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$n), { value: "in_progress" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("in_progress")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$n), { value: "completed" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("completed")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(_sfc_main$n), { value: "refund" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("refund")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(_sfc_main$k), { class: "h-8 w-[150px]" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$l), { placeholder: "status" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$m), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$n), { value: "pending" }, {
                                              default: withCtx(() => [
                                                createTextVNode("pending")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$n), { value: "paid" }, {
                                              default: withCtx(() => [
                                                createTextVNode("paid")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$n), { value: "in_progress" }, {
                                              default: withCtx(() => [
                                                createTextVNode("in_progress")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$n), { value: "completed" }, {
                                              default: withCtx(() => [
                                                createTextVNode("completed")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(_sfc_main$n), { value: "refund" }, {
                                              default: withCtx(() => [
                                                createTextVNode("refund")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$j), {
                                    modelValue: r.status,
                                    "onUpdate:modelValue": [($event) => r.status = $event, () => markDirty(r)],
                                    disabled: r.order_status === "pending" || r.order_status === "refund",
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$k), { class: "h-8 w-[150px]" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$l), { placeholder: "status" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$m), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$n), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "paid" }, {
                                            default: withCtx(() => [
                                              createTextVNode("paid")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "in_progress" }, {
                                            default: withCtx(() => [
                                              createTextVNode("in_progress")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "completed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("completed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "refund" }, {
                                            default: withCtx(() => [
                                              createTextVNode("refund")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onKeydown"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (r.date) {
                                  _push5(`<div data-v-62fd5cee${_scopeId4}>${r.date ?? ""}</div>`);
                                } else {
                                  _push5(`<span data-v-62fd5cee${_scopeId4}>—</span>`);
                                }
                              } else {
                                return [
                                  r.date ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    innerHTML: r.date
                                  }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("span", { key: 1 }, "—"))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(r.delivery_time ?? "—")}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(r.delivery_time ?? "—"), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$h), {
                                  modelValue: r.link_screen,
                                  "onUpdate:modelValue": [($event) => r.link_screen = $event, () => markDirty(r)],
                                  type: "url",
                                  class: "w-[120px] h-8 text-xs",
                                  title: r.link_screen ?? "",
                                  placeholder: "https://…",
                                  onKeydown: ($event) => saveRow(r)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$h), {
                                    modelValue: r.link_screen,
                                    "onUpdate:modelValue": [($event) => r.link_screen = $event, () => markDirty(r)],
                                    type: "url",
                                    class: "w-[120px] h-8 text-xs",
                                    title: r.link_screen ?? "",
                                    placeholder: "https://…",
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "onKeydown"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$d), { class: "text-right" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$i), {
                                  variant: "outline",
                                  size: "sm",
                                  class: "h-8",
                                  onClick: ($event) => saveRow(r)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Save`);
                                    } else {
                                      return [
                                        createTextVNode("Save")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$i), {
                                    variant: "outline",
                                    size: "sm",
                                    class: "h-8",
                                    onClick: ($event) => saveRow(r)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Save")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$d), { class: "font-medium whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode("#" + toDisplayString(r.order_id), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: ["font-medium", emailColorClass(r.status)]
                                }, toDisplayString(r.customer_email), 3),
                                r.chatnickname ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-xs text-muted-foreground"
                                }, toDisplayString(r.chatnickname), 1)) : createCommentVNode("", true),
                                r.character ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "text-xs text-muted-foreground"
                                }, toDisplayString(r.character), 1)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), { class: "leading-5" }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: emailColorClass(r.status),
                                  innerHTML: r.item_text
                                }, null, 10, ["innerHTML"]),
                                r.discount && r.discount > 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-xs text-green-700 mt-0.5"
                                }, [
                                  createTextVNode(" −" + toDisplayString(r.discount.toFixed(2)) + " ", 1),
                                  r.promo_code ? (openBlock(), createBlock("span", { key: 0 }, " (" + toDisplayString(r.promo_code) + ")", 1)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                r.has_qty_slider ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "text-xs text-muted-foreground mt-0.5"
                                }, [
                                  createTextVNode(" Qty: " + toDisplayString(r.qty) + " ", 1),
                                  r.unit_price !== void 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" · " + toDisplayString(r.unit_price.toFixed(2)) + " / each ", 1)
                                  ], 64)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$h), {
                                  "model-value": r.cost_price ?? "",
                                  disabled: r.order_status === "refund",
                                  "onUpdate:modelValue": (val) => {
                                    const s = String(val).replace(",", ".").trim();
                                    r.cost_price = s === "" ? null : Number(s);
                                    markDirty(r);
                                  },
                                  onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onKeydown"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString((r.sale_price ?? 0).toFixed(2)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(r.profit_net == null ? "—" : r.profit_net.toFixed(2)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(r.margin_percent == null ? "—" : r.margin_percent.toFixed(2)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$j), {
                                  modelValue: r.status,
                                  "onUpdate:modelValue": [($event) => r.status = $event, () => markDirty(r)],
                                  disabled: r.order_status === "pending" || r.order_status === "refund",
                                  onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$k), { class: "h-8 w-[150px]" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$l), { placeholder: "status" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$m), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$n), { value: "pending" }, {
                                          default: withCtx(() => [
                                            createTextVNode("pending")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$n), { value: "paid" }, {
                                          default: withCtx(() => [
                                            createTextVNode("paid")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$n), { value: "in_progress" }, {
                                          default: withCtx(() => [
                                            createTextVNode("in_progress")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$n), { value: "completed" }, {
                                          default: withCtx(() => [
                                            createTextVNode("completed")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$n), { value: "refund" }, {
                                          default: withCtx(() => [
                                            createTextVNode("refund")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onKeydown"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                              default: withCtx(() => [
                                r.date ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  innerHTML: r.date
                                }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("span", { key: 1 }, "—"))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(r.delivery_time ?? "—"), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$h), {
                                  modelValue: r.link_screen,
                                  "onUpdate:modelValue": [($event) => r.link_screen = $event, () => markDirty(r)],
                                  type: "url",
                                  class: "w-[120px] h-8 text-xs",
                                  title: r.link_screen ?? "",
                                  placeholder: "https://…",
                                  onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "onKeydown"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$d), { class: "text-right" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$i), {
                                  variant: "outline",
                                  size: "sm",
                                  class: "h-8",
                                  onClick: ($event) => saveRow(r)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Save")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`</tbody>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$a), { class: "sticky top-0 z-10 bg-background backdrop-blur" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$b), { class: "w-[72px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("#")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "min-w-[220px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Customer")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "min-w-[380px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Item")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[100px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Cost")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[84px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Sale")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Profit")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Margin %")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[150px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Status")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[110px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Date")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[120px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Delivery")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[140px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[90px] text-right py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Action")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(TransitionGroup, {
                      tag: "tbody",
                      name: "row",
                      class: "",
                      appear: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(rows.value, (r) => {
                          return openBlock(), createBlock(unref(_sfc_main$c), {
                            key: r.id,
                            class: [
                              r._dirty ? "bg-muted/50" : "",
                              flashMap.value[r.id] ? "flash-" + flashMap.value[r.id] : "",
                              "border-b"
                            ]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$d), { class: "font-medium whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode("#" + toDisplayString(r.order_id), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: ["font-medium", emailColorClass(r.status)]
                                  }, toDisplayString(r.customer_email), 3),
                                  r.chatnickname ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-xs text-muted-foreground"
                                  }, toDisplayString(r.chatnickname), 1)) : createCommentVNode("", true),
                                  r.character ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "text-xs text-muted-foreground"
                                  }, toDisplayString(r.character), 1)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "leading-5" }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: emailColorClass(r.status),
                                    innerHTML: r.item_text
                                  }, null, 10, ["innerHTML"]),
                                  r.discount && r.discount > 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-xs text-green-700 mt-0.5"
                                  }, [
                                    createTextVNode(" −" + toDisplayString(r.discount.toFixed(2)) + " ", 1),
                                    r.promo_code ? (openBlock(), createBlock("span", { key: 0 }, " (" + toDisplayString(r.promo_code) + ")", 1)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  r.has_qty_slider ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "text-xs text-muted-foreground mt-0.5"
                                  }, [
                                    createTextVNode(" Qty: " + toDisplayString(r.qty) + " ", 1),
                                    r.unit_price !== void 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createTextVNode(" · " + toDisplayString(r.unit_price.toFixed(2)) + " / each ", 1)
                                    ], 64)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$h), {
                                    "model-value": r.cost_price ?? "",
                                    disabled: r.order_status === "refund",
                                    "onUpdate:modelValue": (val) => {
                                      const s = String(val).replace(",", ".").trim();
                                      r.cost_price = s === "" ? null : Number(s);
                                      markDirty(r);
                                    },
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onKeydown"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString((r.sale_price ?? 0).toFixed(2)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(r.profit_net == null ? "—" : r.profit_net.toFixed(2)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(r.margin_percent == null ? "—" : r.margin_percent.toFixed(2)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$j), {
                                    modelValue: r.status,
                                    "onUpdate:modelValue": [($event) => r.status = $event, () => markDirty(r)],
                                    disabled: r.order_status === "pending" || r.order_status === "refund",
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$k), { class: "h-8 w-[150px]" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$l), { placeholder: "status" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$m), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$n), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "paid" }, {
                                            default: withCtx(() => [
                                              createTextVNode("paid")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "in_progress" }, {
                                            default: withCtx(() => [
                                              createTextVNode("in_progress")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "completed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("completed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "refund" }, {
                                            default: withCtx(() => [
                                              createTextVNode("refund")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onKeydown"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  r.date ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    innerHTML: r.date
                                  }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("span", { key: 1 }, "—"))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(r.delivery_time ?? "—"), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$h), {
                                    modelValue: r.link_screen,
                                    "onUpdate:modelValue": [($event) => r.link_screen = $event, () => markDirty(r)],
                                    type: "url",
                                    class: "w-[120px] h-8 text-xs",
                                    title: r.link_screen ?? "",
                                    placeholder: "https://…",
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "onKeydown"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "text-right" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$i), {
                                    variant: "outline",
                                    size: "sm",
                                    class: "h-8",
                                    onClick: ($event) => saveRow(r)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Save")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["class"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-center py-4" data-v-62fd5cee${_scopeId}>`);
            if (nextCursor.value) {
              _push2(ssrRenderComponent(unref(_sfc_main$i), {
                disabled: isLoading.value,
                variant: "outline",
                onClick: ($event) => fetchPage()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(isLoading.value ? "Loading…" : "Load more")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(isLoading.value ? "Loading…" : "Load more"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div class="text-xs text-muted-foreground" data-v-62fd5cee${_scopeId}>No more items</div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-4 sm:px-6 lg:px-8 py-6" }, [
                createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4" }, [
                  createVNode("h1", { class: "text-2xl font-semibold" }, [
                    createTextVNode(" Workflow "),
                    createVNode("span", { class: "ml-2 text-sm text-muted-foreground align-middle" }, toDisplayString(headerCountLabel.value), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(_sfc_main$h), {
                      modelValue: uiSearchRaw.value,
                      "onUpdate:modelValue": ($event) => uiSearchRaw.value = $event,
                      class: "w-64",
                      type: "search",
                      autocomplete: "off",
                      placeholder: "Search (#id, email, nickname, item…)",
                      onKeydown: withKeys(withModifiers(applyFilters, ["prevent"]), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                    createVNode(unref(_sfc_main$i), {
                      size: "sm",
                      class: "h-8",
                      disabled: isLoading.value,
                      onClick: applyFilters
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Apply")
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(unref(_sfc_main$9), {
                      open: open.value,
                      "onUpdate:open": ($event) => open.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$i), {
                              variant: "outline",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(buttonLabel.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), { class: "w-64 p-0" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$3), { placeholder: "Filter status..." }),
                                createVNode(unref(_sfc_main$1), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$5), null, {
                                      default: withCtx(() => [
                                        createTextVNode("No results")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$4), { heading: "Statuses" }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(STATUS_LIST, (s) => {
                                          return createVNode(unref(_sfc_main$2), {
                                            key: s,
                                            value: s,
                                            onSelect: (ev) => {
                                              ev?.preventDefault?.();
                                              toggleStatus(s);
                                            },
                                            class: "flex items-center gap-2 cursor-pointer"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", {
                                                class: ["w-2 h-2 rounded-full", uiStatusChecked.value[s] ? "bg-primary" : "bg-muted-foreground/30"]
                                              }, null, 2),
                                              createVNode("span", { class: "capitalize select-none" }, toDisplayString(s.replace("_", " ")), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onSelect"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center justify-between gap-2 p-2 border-t" }, [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(unref(_sfc_main$i), {
                                      size: "xs",
                                      variant: "ghost",
                                      onClick: withModifiers(($event) => setAll(true), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Select all")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(unref(_sfc_main$i), {
                                      size: "xs",
                                      variant: "ghost",
                                      onClick: withModifiers(($event) => setAll(false), ["stop"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Clear")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  createVNode(unref(_sfc_main$i), {
                                    size: "xs",
                                    onClick: withModifiers(applyFilters, ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Apply")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["open", "onUpdate:open"])
                  ])
                ]),
                createVNode(unref(_sfc_main$e), { class: "w-full text-sm" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$a), { class: "sticky top-0 z-10 bg-background backdrop-blur" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$c), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$b), { class: "w-[72px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("#")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "min-w-[220px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Customer")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "min-w-[380px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Item")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[100px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Cost")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[84px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Sale")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Profit")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[90px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Margin %")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[150px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Status")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[110px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Date")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[120px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Delivery")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[140px] py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b), { class: "w-[90px] text-right py-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Action")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(TransitionGroup, {
                      tag: "tbody",
                      name: "row",
                      class: "",
                      appear: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(rows.value, (r) => {
                          return openBlock(), createBlock(unref(_sfc_main$c), {
                            key: r.id,
                            class: [
                              r._dirty ? "bg-muted/50" : "",
                              flashMap.value[r.id] ? "flash-" + flashMap.value[r.id] : "",
                              "border-b"
                            ]
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$d), { class: "font-medium whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode("#" + toDisplayString(r.order_id), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: ["font-medium", emailColorClass(r.status)]
                                  }, toDisplayString(r.customer_email), 3),
                                  r.chatnickname ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-xs text-muted-foreground"
                                  }, toDisplayString(r.chatnickname), 1)) : createCommentVNode("", true),
                                  r.character ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "text-xs text-muted-foreground"
                                  }, toDisplayString(r.character), 1)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "leading-5" }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: emailColorClass(r.status),
                                    innerHTML: r.item_text
                                  }, null, 10, ["innerHTML"]),
                                  r.discount && r.discount > 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-xs text-green-700 mt-0.5"
                                  }, [
                                    createTextVNode(" −" + toDisplayString(r.discount.toFixed(2)) + " ", 1),
                                    r.promo_code ? (openBlock(), createBlock("span", { key: 0 }, " (" + toDisplayString(r.promo_code) + ")", 1)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  r.has_qty_slider ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "text-xs text-muted-foreground mt-0.5"
                                  }, [
                                    createTextVNode(" Qty: " + toDisplayString(r.qty) + " ", 1),
                                    r.unit_price !== void 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createTextVNode(" · " + toDisplayString(r.unit_price.toFixed(2)) + " / each ", 1)
                                    ], 64)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$h), {
                                    "model-value": r.cost_price ?? "",
                                    disabled: r.order_status === "refund",
                                    "onUpdate:modelValue": (val) => {
                                      const s = String(val).replace(",", ".").trim();
                                      r.cost_price = s === "" ? null : Number(s);
                                      markDirty(r);
                                    },
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onKeydown"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString((r.sale_price ?? 0).toFixed(2)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(r.profit_net == null ? "—" : r.profit_net.toFixed(2)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(r.margin_percent == null ? "—" : r.margin_percent.toFixed(2)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$j), {
                                    modelValue: r.status,
                                    "onUpdate:modelValue": [($event) => r.status = $event, () => markDirty(r)],
                                    disabled: r.order_status === "pending" || r.order_status === "refund",
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$k), { class: "h-8 w-[150px]" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$l), { placeholder: "status" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$m), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$n), { value: "pending" }, {
                                            default: withCtx(() => [
                                              createTextVNode("pending")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "paid" }, {
                                            default: withCtx(() => [
                                              createTextVNode("paid")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "in_progress" }, {
                                            default: withCtx(() => [
                                              createTextVNode("in_progress")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "completed" }, {
                                            default: withCtx(() => [
                                              createTextVNode("completed")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(_sfc_main$n), { value: "refund" }, {
                                            default: withCtx(() => [
                                              createTextVNode("refund")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onKeydown"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  r.date ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    innerHTML: r.date
                                  }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("span", { key: 1 }, "—"))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(r.delivery_time ?? "—"), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$h), {
                                    modelValue: r.link_screen,
                                    "onUpdate:modelValue": [($event) => r.link_screen = $event, () => markDirty(r)],
                                    type: "url",
                                    class: "w-[120px] h-8 text-xs",
                                    title: r.link_screen ?? "",
                                    placeholder: "https://…",
                                    onKeydown: withKeys(withModifiers(($event) => saveRow(r), ["prevent"]), ["enter"])
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "onKeydown"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$d), { class: "text-right" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$i), {
                                    variant: "outline",
                                    size: "sm",
                                    class: "h-8",
                                    onClick: ($event) => saveRow(r)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Save")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["class"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex justify-center py-4" }, [
                  nextCursor.value ? (openBlock(), createBlock(unref(_sfc_main$i), {
                    key: 0,
                    disabled: isLoading.value,
                    variant: "outline",
                    onClick: ($event) => fetchPage()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(isLoading.value ? "Loading…" : "Load more"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-xs text-muted-foreground"
                  }, "No more items"))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Workflow/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62fd5cee"]]);
export {
  Index as default
};
