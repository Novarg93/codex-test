import { defineComponent, mergeModels, useModel, computed, mergeProps, useSSRContext, unref, onBeforeMount, ref, defineAsyncComponent, markRaw, watch, onMounted, withCtx, createVNode, resolveDynamicComponent, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, createTextVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { _ as _sfc_main$8, u as useCartSummary } from "./DefaultLayout-CLBo7IEt.js";
import { _ as _sfc_main$9 } from "./Breadcrumbs-23vYElXm.js";
import axios from "axios";
import { Star } from "lucide-vue-next";
import { _ as _sfc_main$7 } from "./SeoHead-CQ0qjzaG.js";
import "@inertiajs/vue3";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
import "./BreadcrumbSeparator-DbiA9_uT.js";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SelectorGroup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    group: {}
  }, {
    "selected": {},
    "selectedModifiers": {}
  }),
  emits: ["update:selected"],
  setup(__props) {
    const props = __props;
    const selected = useModel(__props, "selected");
    const isRadio = computed(() => props.group.selection_mode === "single");
    const isPercent = computed(() => props.group.pricing_mode === "percent");
    function fmtCents(cents) {
      const v = (cents ?? 0) / 100;
      return v.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    function isChecked(v) {
      return Array.isArray(selected.value) ? selected.value.includes(v.id) : selected.value === v.id;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}><div class="font-medium mb-2">${ssrInterpolate(_ctx.group.title)} `);
      if (_ctx.group.is_required) {
        _push(`<span class="text-xs text-muted-foreground">(required)</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--[-->`);
      ssrRenderList(_ctx.group.values, (v) => {
        _push(`<label class="flex items-center gap-2 cursor-pointer">`);
        if (isRadio.value) {
          _push(`<input type="radio"${ssrRenderAttr("name", "g-" + _ctx.group.id)}${ssrRenderAttr("value", v.id)}${ssrIncludeBooleanAttr(isChecked(v)) ? " checked" : ""}>`);
        } else {
          _push(`<input type="checkbox"${ssrIncludeBooleanAttr(isChecked(v)) ? " checked" : ""}>`);
        }
        _push(`<span>${ssrInterpolate(v.title)}</span><span class="ml-auto text-sm text-muted-foreground">`);
        if (isPercent.value) {
          _push(`<!--[--> +${ssrInterpolate(v.delta_percent ?? 0)}% <!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate((v.delta_cents ?? 0) >= 0 ? "+" : "")}${ssrInterpolate(fmtCents(v.delta_cents ?? 0))}<!--]-->`);
        }
        _push(`</span></label>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/product/groups/SelectorGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "QtySlider",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    group: {}
  }, {
    "selected": {},
    "selectedModifiers": {}
  }),
  emits: ["update:selected"],
  setup(__props) {
    const props = __props;
    const selected = useModel(__props, "selected");
    const min = Number(props.group.qty_min ?? 1);
    const max = Number(props.group.qty_max ?? 1);
    const step = Number(props.group.qty_step ?? 1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}><div class="font-medium">${ssrInterpolate(_ctx.group.title)} `);
      if (_ctx.group.is_required) {
        _push(`<span class="text-xs text-muted-foreground">(required)</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-sm text-muted-foreground">${ssrInterpolate(selected.value)} (min: ${ssrInterpolate(unref(min))}, max: ${ssrInterpolate(unref(max))}, step: ${ssrInterpolate(unref(step))}) </div><input type="range" class="w-full"${ssrRenderAttr("min", unref(min))}${ssrRenderAttr("max", unref(max))}${ssrRenderAttr("step", unref(step))}${ssrRenderAttr("value", selected.value)}><div class="mt-2 flex items-center gap-2"><input type="number" class="w-24 bg-background border rounded px-2 py-1"${ssrRenderAttr("min", unref(min))}${ssrRenderAttr("max", unref(max))}${ssrRenderAttr("step", unref(step))}${ssrRenderAttr("value", selected.value)}><button class="px-2 py-1 border rounded">-</button><button class="px-2 py-1 border rounded">+</button></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/product/groups/QtySlider.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DoubleRange",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    group: {}
  }, {
    "selected": {},
    "selectedModifiers": {}
  }),
  emits: ["update:selected"],
  setup(__props) {
    const props = __props;
    const selected = useModel(__props, "selected");
    onBeforeMount(() => {
      if (!selected.value) {
        const a = Number(props.group.range_default_min ?? props.group.slider_min);
        const b = Number(props.group.range_default_max ?? props.group.slider_max);
        selected.value = { min: Math.min(a, b), max: Math.max(a, b) };
      }
    });
    const min = Number(props.group.slider_min);
    const max = Number(props.group.slider_max);
    const step = Number(props.group.slider_step || 1);
    function pct(value) {
      const span = max - min;
      return span <= 0 ? 0 : (value - min) / span * 100;
    }
    const hasTiers = computed(() => props.group.pricing_mode === "tiered" && (props.group.tiers?.length ?? 0) > 0);
    return (_ctx, _push, _parent, _attrs) => {
      if (selected.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}><div class="flex items-center justify-between"><div class="font-medium">${ssrInterpolate(_ctx.group.title)}</div><div class="text-sm text-muted-foreground">${ssrInterpolate(selected.value.min)}–${ssrInterpolate(selected.value.max)} (min: ${ssrInterpolate(unref(min))}, max: ${ssrInterpolate(unref(max))}, step: ${ssrInterpolate(unref(step))}) </div></div><div class="relative h-2 rounded bg-muted overflow-hidden"><div class="absolute top-0 h-2 bg-primary/50" style="${ssrRenderStyle({ left: pct(selected.value.min) + "%", width: pct(selected.value.max) - pct(selected.value.min) + "%" })}"></div>`);
        if (hasTiers.value) {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(_ctx.group.tiers, (t, i) => {
            _push(`<div class="absolute top-[-6px] bottom-[-6px] w-px bg-foreground/40" style="${ssrRenderStyle({ left: pct(t.from) + "%" })}"></div>`);
          });
          _push(`<!--]--><!--[-->`);
          ssrRenderList(_ctx.group.tiers, (t, i) => {
            _push(`<div class="absolute top-[-6px] bottom-[-6px] w-px bg-foreground/40" style="${ssrRenderStyle({ left: pct(t.to) + "%" })}"></div>`);
          });
          _push(`<!--]--><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="relative"><input type="range" class="w-full appearance-none bg-transparent absolute top-0 -translate-y-6"${ssrRenderAttr("min", unref(min))}${ssrRenderAttr("max", unref(max))}${ssrRenderAttr("step", unref(step))}${ssrRenderAttr("value", selected.value.min)} style="${ssrRenderStyle({ "z-index": "20" })}"><input type="range" class="w-full appearance-none bg-transparent absolute top-0 -translate-y-8"${ssrRenderAttr("min", unref(min))}${ssrRenderAttr("max", unref(max))}${ssrRenderAttr("step", unref(step))}${ssrRenderAttr("value", selected.value.max)} style="${ssrRenderStyle({ "z-index": "20" })}"></div><div class="mt-2 flex items-center gap-2"><div class="flex items-center gap-2"><label class="text-sm text-muted-foreground">From</label><input type="number" class="w-24 bg-background border rounded px-2 py-1"${ssrRenderAttr("min", unref(min))}${ssrRenderAttr("max", unref(max))}${ssrRenderAttr("step", unref(step))}${ssrRenderAttr("value", selected.value.min)}></div><div class="flex items-center gap-2"><label class="text-sm text-muted-foreground">To</label><input type="number" class="w-24 bg-background border rounded px-2 py-1"${ssrRenderAttr("min", unref(min))}${ssrRenderAttr("max", unref(max))}${ssrRenderAttr("step", unref(step))}${ssrRenderAttr("value", selected.value.max)}></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/product/groups/DoubleRange.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BundleBuilder",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    group: {}
  }, {
    "selected": { default: [] },
    "selectedModifiers": {}
  }),
  emits: ["update:selected"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "selected");
    const selectedIds2 = computed(() => new Set(model.value.map((r) => r.product_id)));
    const options = computed(() => props.group.items.filter((i) => !selectedIds2.value.has(i.product_id)));
    const picker = ref(null);
    function limitsFor(product_id) {
      const it = props.group.items.find((i) => i.product_id === product_id);
      return {
        min: it?.qty.min ?? 1,
        max: it?.qty.max ?? 9999,
        step: it?.qty.step ?? 1
      };
    }
    const totalCents = computed(
      () => model.value.reduce((sum, r) => {
        const it = props.group.items.find((i) => i.product_id === r.product_id);
        return sum + (it ? it.price_cents * (r.qty || 0) : 0);
      }, 0)
    );
    function fmt(cents) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((cents || 0) / 100);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}><div class="font-medium">${ssrInterpolate(_ctx.group.title)}</div><div class="flex gap-2 items-center"><select placeholder="Select product" class="border text-black rounded placeholder:text-black px-2 w-full py-1"><option value="" selected disabled>Select product…</option><!--[-->`);
      ssrRenderList(options.value, (opt) => {
        _push(`<option${ssrRenderAttr("value", String(opt.product_id))}${ssrIncludeBooleanAttr(Array.isArray(picker.value) ? ssrLooseContain(picker.value, String(opt.product_id)) : ssrLooseEqual(picker.value, String(opt.product_id))) ? " selected" : ""}>${ssrInterpolate(opt.name)} — ${ssrInterpolate(fmt(opt.price_cents))}/unit </option>`);
      });
      _push(`<!--]--></select><button class="px-3 py-1 border rounded"${ssrIncludeBooleanAttr(!picker.value) ? " disabled" : ""}>Add</button></div>`);
      if (model.value.length) {
        _push(`<div class="space-y-3"><!--[-->`);
        ssrRenderList(model.value, (row) => {
          _push(`<div class="flex flex-col gap-3 border rounded p-2"><div class="flex justify-between"><div>${ssrInterpolate(props.group.items.find((i) => i.product_id === row.product_id)?.name)}</div><div class="flex items-center gap-4"><div class="flex items-center font-semibold">${ssrInterpolate(((props.group.items.find((i) => i.product_id === row.product_id)?.price_cents || 0) * (row.qty || 0) / 100).toFixed(2))} $ </div><button class="text-sm px-2 py-1 border rounded">Remove</button></div></div><div class="flex flex-col gap-2"><input type="number" class="w-full text-black border rounded px-2 py-1"${ssrRenderAttr("value", row.qty)}${ssrRenderAttr("min", limitsFor(row.product_id).min)}${ssrRenderAttr("max", limitsFor(row.product_id).max)}${ssrRenderAttr("step", limitsFor(row.product_id).step)}><input type="range" class="w-full"${ssrRenderAttr("value", row.qty)}${ssrRenderAttr("min", limitsFor(row.product_id).min)}${ssrRenderAttr("max", limitsFor(row.product_id).max)}${ssrRenderAttr("step", limitsFor(row.product_id).step)}></div></div>`);
        });
        _push(`<!--]--><div class="text-right font-bold">Total: ${ssrInterpolate(fmt(totalCents.value))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/product/groups/BundleBuilder.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SelectorDropdownAsync = defineAsyncComponent(() => import("./SelectorDropdown-BprcpgpK.js"));
const groupRegistry = markRaw({
  selector: _sfc_main$6,
  quantity_slider: _sfc_main$5,
  double_range_slider: _sfc_main$4,
  bundle: _sfc_main$3
});
function resolveGroupComponent(type, group) {
  if (type === "selector") {
    if (group?.ui_variant === "dropdown" && group?.selection_mode === "single") {
      return SelectorDropdownAsync;
    }
    return _sfc_main$6;
  }
  return groupRegistry[type] ?? null;
}
function useProductOptions(product) {
  const selectionByGroup = ref({});
  const isNum = (x) => typeof x === "number" && Number.isFinite(x);
  const isIdArray = (x) => Array.isArray(x) && x.every((n) => typeof n === "number");
  const isRangeSel2 = (x) => !!x && typeof x === "object" && "min" in x && "max" in x;
  (product.option_groups ?? []).forEach((g) => {
    if (g.type === "selector") {
      if (g.selection_mode === "single") {
        const def = g.values.find((v) => v.is_default) ?? g.values[0];
        selectionByGroup.value[g.id] = def ? def.id : null;
      } else {
        selectionByGroup.value[g.id] = [];
      }
    } else if (g.type === "quantity_slider") {
      const min = Number(g.qty_min ?? 1);
      const step = Number(g.qty_step ?? 1);
      const def = Number(g.qty_default ?? min);
      const clamped = Math.max(min, Math.min(Number(g.qty_max ?? def), def));
      selectionByGroup.value[g.id] = clamped - (clamped - min) % step;
    } else if (g.type === "double_range_slider") {
      const a = Number(g.range_default_min ?? g.slider_min);
      const b = Number(g.range_default_max ?? g.slider_max);
      selectionByGroup.value[g.id] = { min: Math.min(a, b), max: Math.max(a, b) };
    }
  });
  const qtyGroup = computed(
    () => (product.option_groups ?? []).find((g) => g.type === "quantity_slider") ?? null
  );
  function buildAddToCartPayload() {
    const option_value_ids = [];
    const range_options = [];
    let qty = 1;
    (product.option_groups ?? []).forEach((g) => {
      const sel = selectionByGroup.value[g.id];
      if (g.type === "selector") {
        if (g.selection_mode === "single") {
          if (isNum(sel)) option_value_ids.push(sel);
        } else {
          if (isIdArray(sel)) option_value_ids.push(...sel);
        }
      } else if (g.type === "quantity_slider") {
        if (isNum(sel)) qty = sel;
      } else if (g.type === "double_range_slider") {
        if (isRangeSel2(sel)) {
          range_options.push({ option_group_id: g.id, selected_min: sel.min, selected_max: sel.max });
        }
      }
    });
    return { product_id: product.id, option_value_ids, qty, range_options };
  }
  return { selectionByGroup, qtyGroup, buildAddToCartPayload };
}
const isRangeSel = (x) => !!x && typeof x === "object" && "min" in x && "max" in x;
function scopeIsUnit(g) {
  return g?.multiply_by_qty === null || g?.multiply_by_qty === void 0 ? true : g.multiply_by_qty === true || g.multiply_by_qty === 1 || g.multiply_by_qty === "1";
}
function isPercentGroup(g) {
  return g?.pricing_mode === "percent" || g?.type === "radio_percent" || g?.type === "checkbox_percent";
}
function selectedIds(sel) {
  if (Array.isArray(sel)) return sel.map(Number).filter(Number.isFinite);
  const n = Number(sel);
  return Number.isFinite(n) ? [n] : [];
}
function clamp(v, a, b) {
  return Math.min(b, Math.max(a, v));
}
function snapToGrid(val, baseMin, step) {
  return val - (val - baseMin) % step;
}
function alignRange(g, sel) {
  const Smin = g.slider_min;
  const Smax = g.slider_max;
  const step = Math.max(1, g.slider_step || 1);
  const a = snapToGrid(clamp(sel.min, Smin, Smax), Smin, step);
  const b = snapToGrid(clamp(sel.max, Smin, Smax), Smin, step);
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return { min, max };
}
function priceRangeFlat(g, sel) {
  const { min, max } = alignRange(g, sel);
  const step = Math.max(1, g.slider_step || 1);
  const steps = Math.max(0, Math.floor((max - min) / step));
  const unit = Number(g.unit_price_cents ?? 0);
  return steps * unit;
}
function priceRangeTiered(g, sel) {
  const { min, max } = alignRange(g, sel);
  const spanTotal = Math.max(0, max - min);
  const tiers = (g.tiers ?? []).slice().sort((x, y) => x.from - y.from);
  let piecewise = 0;
  let highestUnit = 0;
  let weightedSum = 0;
  for (const t of tiers) {
    const from = Math.max(t.from, min);
    const to = Math.min(t.to, max);
    if (to <= from) continue;
    let steps = to - from;
    let unit = Number(t.unit_price_cents ?? 0);
    if (t.multiplier) unit = Math.round(unit * Number(t.multiplier));
    if (t.min_block && t.min_block > 1) {
      steps = Math.ceil(steps / Number(t.min_block)) * Number(t.min_block);
    }
    let cost = unit * steps;
    if (t.cap_cents != null) cost = Math.min(cost, Number(t.cap_cents));
    piecewise += cost;
    highestUnit = Math.max(highestUnit, unit);
    weightedSum += unit * (to - from);
  }
  const strategy = g.tier_combine_strategy ?? "sum_piecewise";
  const variable = strategy === "highest_tier_only" ? highestUnit * spanTotal : strategy === "weighted_average" ? Math.round((spanTotal > 0 ? weightedSum / spanTotal : 0) * spanTotal) : piecewise;
  const base = Number(g.base_fee_cents ?? 0);
  return base + variable;
}
function usePricing(product, selectionByGroup) {
  const optionsPerUnitCents = computed(() => {
    let sum = 0;
    (product.option_groups ?? []).forEach((g) => {
      if (g?.type !== "selector" || g?.pricing_mode !== "absolute" || !scopeIsUnit(g)) return;
      const ids = selectedIds(selectionByGroup.value[g.id]);
      ids.forEach((id) => {
        const v = (g.values ?? []).find((x) => x.id === id);
        if (v) sum += Number(v.delta_cents ?? 0);
      });
    });
    return sum;
  });
  const optionsPerOrderCents = computed(() => {
    let sum = 0;
    (product.option_groups ?? []).forEach((g) => {
      if (g?.type !== "selector" || g?.pricing_mode !== "absolute" || scopeIsUnit(g)) return;
      const ids = selectedIds(selectionByGroup.value[g.id]);
      ids.forEach((id) => {
        const v = (g.values ?? []).find((x) => x.id === id);
        if (v) sum += Number(v.delta_cents ?? 0);
      });
    });
    return sum;
  });
  const totalRangePerUnitCents = computed(() => {
    let sum = 0;
    (product.option_groups ?? []).forEach((g) => {
      if (g?.type !== "double_range_slider") return;
      const sel = selectionByGroup.value[g.id];
      if (!isRangeSel(sel)) return;
      sum += g.pricing_mode === "tiered" ? priceRangeTiered(g, sel) : priceRangeFlat(g, sel);
    });
    return sum;
  });
  const percentPerUnitPct = computed(() => {
    let pct = 0;
    (product.option_groups ?? []).forEach((g) => {
      if (!isPercentGroup(g) || !scopeIsUnit(g)) return;
      const ids = selectedIds(selectionByGroup.value[g.id]);
      ids.forEach((id) => {
        const v = (g.values ?? []).find((x) => x.id === id);
        if (v) pct += Number(v.delta_percent ?? v.value_percent ?? 0);
      });
    });
    return pct;
  });
  const percentPerOrderPct = computed(() => {
    let pct = 0;
    (product.option_groups ?? []).forEach((g) => {
      if (!isPercentGroup(g) || scopeIsUnit(g)) return;
      const ids = selectedIds(selectionByGroup.value[g.id]);
      ids.forEach((id) => {
        const v = (g.values ?? []).find((x) => x.id === id);
        if (v) pct += Number(v.delta_percent ?? v.value_percent ?? 0);
      });
    });
    return pct;
  });
  const unitCents = computed(() => {
    const base = Number(product.price_cents || 0) + optionsPerUnitCents.value + totalRangePerUnitCents.value;
    return Math.round(base * (1 + percentPerUnitPct.value / 100));
  });
  const totalCents = computed(() => {
    const qGroup = (product.option_groups ?? []).find((g) => g.type === "quantity_slider");
    const qSel = qGroup ? selectionByGroup.value[qGroup.id] : void 0;
    const qty = typeof qSel === "number" && Number.isFinite(qSel) ? qSel : 1;
    const preOrder = unitCents.value * qty + optionsPerOrderCents.value;
    return Math.round(preOrder * (1 + percentPerOrderPct.value / 100));
  });
  return { unitCents, totalCents };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RareItemBuilder",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    classGroup: {},
    slotGroup: {},
    affixGroup: {},
    currency: {},
    gaLimit: {}
  }, {
    "classId": { default: null },
    "classIdModifiers": {},
    "slotId": { default: null },
    "slotIdModifiers": {},
    "affixIds": { default: [] },
    "affixIdsModifiers": {},
    "affixGaIds": { default: [] },
    "affixGaIdsModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["ga-valid"], ["update:classId", "update:slotId", "update:affixIds", "update:affixGaIds"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const classId = useModel(__props, "classId");
    const slotId = useModel(__props, "slotId");
    const affixIds = useModel(__props, "affixIds");
    const affixGaIds = useModel(__props, "affixGaIds");
    const gaCheckedCount = computed(() => Number(ga1.value) + Number(ga2.value) + Number(ga3.value));
    const gaLimitSafe = computed(() => Math.min(3, Math.max(0, Number(props.gaLimit ?? 0))));
    const gaExact = computed(() => gaCheckedCount.value === gaLimitSafe.value);
    const ga1 = ref(false), ga2 = ref(false), ga3 = ref(false);
    watch([affixIds], () => {
      const [a1, a2, a3] = affixIds.value;
      if (!a1) ga1.value = false;
      if (!a2) ga2.value = false;
      if (!a3) ga3.value = false;
    }, { deep: true });
    watch([ga1, ga2, ga3, gaLimitSafe], () => {
      const flags = [ga1, ga2, ga3];
      const onIdx = flags.map((r, i) => r.value ? i : -1).filter((i) => i >= 0);
      while (onIdx.length > gaLimitSafe.value) {
        const last = onIdx.pop();
        flags[last].value = false;
      }
    });
    watch(gaLimitSafe, (n) => {
      const [a1, a2, a3] = affixIds.value;
      if (n === 0) {
        ga1.value = ga2.value = ga3.value = false;
      } else if (n === 3) {
        ga1.value = !!a1;
        ga2.value = !!a2;
        ga3.value = !!a3;
      }
    });
    watch([affixIds, ga1, ga2, ga3], () => {
      const [a1, a2, a3] = affixIds.value;
      const ids = [
        a1 && ga1.value ? a1 : null,
        a2 && ga2.value ? a2 : null,
        a3 && ga3.value ? a3 : null
      ].filter(Boolean);
      affixGaIds.value = ids;
    });
    watch([gaCheckedCount, gaLimitSafe], () => {
      emit("ga-valid", gaExact.value);
    }, { immediate: true });
    const isPercent = (g) => g.pricing_mode === "percent";
    function priceLabel(g, v) {
      if (isPercent(g)) return `${v.title} (+${v.delta_percent ?? 0}%)`;
      const cents = Number(v.delta_cents ?? 0) / 100;
      const sign = cents >= 0 ? "+" : "";
      const money = cents.toLocaleString("en-US", { style: "currency", currency: props.currency ?? "USD" });
      return `${v.title} (${sign}${money})`;
    }
    const classAllowed = (val, cid) => !cid || !Array.isArray(val.allow_class_value_ids) || val.allow_class_value_ids.includes(cid);
    const slotAllowed = (val, sid) => !sid || !Array.isArray(val.allow_slot_value_ids) || val.allow_slot_value_ids.includes(sid);
    const slotsAvailable = computed(
      () => (props.slotGroup.values ?? []).filter((s) => classAllowed(s, classId.value))
    );
    function affixesAvailable(exceptId) {
      const chosen = new Set(affixIds.value.filter(Boolean));
      if (exceptId) chosen.delete(exceptId);
      return (props.affixGroup.values ?? []).filter(
        (a) => classAllowed(a, classId.value) && slotAllowed(a, slotId.value) && !chosen.has(a.id)
      );
    }
    const aff1 = ref(null);
    const aff2 = ref(null);
    const aff3 = ref(null);
    function syncFromProp() {
      const src = affixIds.value;
      const arr = Array.isArray(src) ? src.slice(0, 3) : typeof src === "number" && Number.isFinite(src) ? [src] : [];
      aff1.value = arr[0] ?? null;
      aff2.value = arr[1] ?? null;
      aff3.value = arr[2] ?? null;
    }
    function syncToProp() {
      const arr = [aff1.value, aff2.value, aff3.value].filter((x) => !!x);
      affixIds.value = Array.from(new Set(arr)).slice(0, 3);
    }
    syncFromProp();
    watch([aff1, aff2, aff3], syncToProp);
    watch(affixIds, syncFromProp);
    watch(classId, () => {
      if (slotId.value && !classAllowed({
        allow_class_value_ids: props.slotGroup.values.find((v) => v.id === slotId.value)?.allow_class_value_ids
      }, classId.value)) {
        slotId.value = null;
      }
      for (const r of [aff1, aff2, aff3]) {
        const a = props.affixGroup.values.find((v) => v.id === r.value);
        if (!a) {
          r.value = null;
          continue;
        }
        if (!classAllowed(a, classId.value)) r.value = null;
      }
    });
    watch(slotId, () => {
      for (const r of [aff1, aff2, aff3]) {
        const a = props.affixGroup.values.find((v) => v.id === r.value);
        if (!a) {
          r.value = null;
          continue;
        }
        if (!slotAllowed(a, slotId.value)) r.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div><div class="font-medium mb-1"> Class `);
      if (_ctx.classGroup.is_required) {
        _push(`<span class="text-xs text-muted-foreground">(required)</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><select class="w-full border rounded-md px-3 py-2 bg-background"${ssrRenderAttr("value", classId.value ?? "")}>`);
      if (!_ctx.classGroup.is_required) {
        _push(`<option value="">—</option>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.classGroup.values, (v) => {
        _push(`<option${ssrRenderAttr("value", v.id)}>${ssrInterpolate(priceLabel(_ctx.classGroup, v))}</option>`);
      });
      _push(`<!--]--></select></div><div><div class="font-medium mb-1"> Item slot `);
      if (_ctx.slotGroup.is_required) {
        _push(`<span class="text-xs text-muted-foreground">(required)</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><select class="w-full border rounded-md px-3 py-2 bg-background"${ssrRenderAttr("value", slotId.value ?? "")}>`);
      if (!_ctx.slotGroup.is_required) {
        _push(`<option value="">—</option>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(slotsAvailable.value, (v) => {
        _push(`<option${ssrRenderAttr("value", v.id)}>${ssrInterpolate(priceLabel(_ctx.slotGroup, v))}</option>`);
      });
      _push(`<!--]--></select></div><div><div class="font-medium mb-1 flex items-center justify-between"><span> Affixes <span class="text-xs text-muted-foreground">(up to 3)</span></span><span class="${ssrRenderClass([gaExact.value ? "text-muted-foreground" : "text-red-600", "text-xs"])}"> GA: ${ssrInterpolate(gaCheckedCount.value)}/${ssrInterpolate(gaLimitSafe.value)} chosen `);
      if (!gaExact.value && gaLimitSafe.value > 0) {
        _push(`<!--[--> — выберите ровно ${ssrInterpolate(gaLimitSafe.value)}<!--]-->`);
      } else if (!gaExact.value && gaLimitSafe.value === 0) {
        _push(`<!--[--> — не выбирайте GA<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></div><div class="grid grid-cols-1 md:grid-cols-3 gap-2"><div class="flex gap-2 items-center"><select class="w-full border rounded-md px-3 py-2 bg-background"${ssrRenderAttr("value", aff1.value ?? "")}><option value="">—</option><!--[-->`);
      ssrRenderList(affixesAvailable(aff1.value), (v) => {
        _push(`<option${ssrRenderAttr("value", v.id)}>${ssrInterpolate(priceLabel(_ctx.affixGroup, v))}</option>`);
      });
      _push(`<!--]--></select><label class="flex items-center gap-1 text-xs"><input type="checkbox"${ssrIncludeBooleanAttr(ga1.value) ? " checked" : ""}${ssrIncludeBooleanAttr(
        gaLimitSafe.value === 0 || gaLimitSafe.value === 3 || !aff1.value || gaCheckedCount.value >= gaLimitSafe.value && !ga1.value
        // если лимит добит и этот чекбокс сейчас OFF — не даём включать
      ) ? " disabled" : ""}> Greater </label></div><div class="flex gap-2 items-center"><select class="w-full border rounded-md px-3 py-2 bg-background"${ssrRenderAttr("value", aff2.value ?? "")}><option value="">—</option><!--[-->`);
      ssrRenderList(affixesAvailable(aff2.value), (v) => {
        _push(`<option${ssrRenderAttr("value", v.id)}>${ssrInterpolate(priceLabel(_ctx.affixGroup, v))}</option>`);
      });
      _push(`<!--]--></select><label class="flex items-center gap-1 text-xs"><input type="checkbox"${ssrIncludeBooleanAttr(ga2.value) ? " checked" : ""}${ssrIncludeBooleanAttr(
        gaLimitSafe.value === 0 || gaLimitSafe.value === 3 || !aff2.value || gaCheckedCount.value >= gaLimitSafe.value && !ga2.value
      ) ? " disabled" : ""}> Greater </label></div><div class="flex gap-2 items-center"><select class="w-full border rounded-md px-3 py-2 bg-background"${ssrRenderAttr("value", aff3.value ?? "")}><option value="">—</option><!--[-->`);
      ssrRenderList(affixesAvailable(aff3.value), (v) => {
        _push(`<option${ssrRenderAttr("value", v.id)}>${ssrInterpolate(priceLabel(_ctx.affixGroup, v))}</option>`);
      });
      _push(`<!--]--></select><label class="flex items-center gap-1 text-xs"><input type="checkbox"${ssrIncludeBooleanAttr(ga3.value) ? " checked" : ""}${ssrIncludeBooleanAttr(
        gaLimitSafe.value === 0 || gaLimitSafe.value === 3 || !aff3.value || gaCheckedCount.value >= gaLimitSafe.value && !ga3.value
      ) ? " disabled" : ""}> Greater </label></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/product/RareItemBuilder.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UniqueD4Builder",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    gaGroup: {},
    statsGroup: {}
  }, {
    "gaSelected": { default: null },
    "gaSelectedModifiers": {},
    "statsSelected": { default: [] },
    "statsSelectedModifiers": {}
  }),
  emits: ["update:gaSelected", "update:statsSelected"],
  setup(__props) {
    const props = __props;
    const gaSelected = useModel(__props, "gaSelected");
    const statsSelected = useModel(__props, "statsSelected");
    function clamp2(n, min = 0, max = 4) {
      const x = Number(n);
      return Math.min(max, Math.max(min, Number.isFinite(x) ? x : 0));
    }
    const gaSelectedSafe = computed({
      get: () => {
        const v = gaSelected.value;
        return Array.isArray(v) ? v[0] ?? null : typeof v === "number" ? v : null;
      },
      set: (n) => {
        gaSelected.value = n == null ? null : Number(n);
      }
      // ← всегда число
    });
    const gaLimit = computed(() => {
      const id = gaSelectedSafe.value;
      const opt = props.gaGroup.values?.find((v) => v.id === id);
      if (!opt) return 0;
      const fromMeta = Number(opt?.meta?.ga_count);
      if (Number.isFinite(fromMeta)) return clamp2(fromMeta, 0, 4);
      const m = String(opt.title ?? "").match(/(\d)/);
      return clamp2(m ? Number(m[1]) : 0, 0, 4);
    });
    function labelGA(v) {
      if (props.gaGroup.pricing_mode === "percent") {
        return `${v.title} ${v.delta_percent ? `(+${v.delta_percent}%)` : ""}`;
      }
      const cents = Number(v.delta_cents ?? 0) / 100;
      const money = cents.toLocaleString("en-US", { style: "currency", currency: "USD" });
      const sign = cents >= 0 ? "+" : "";
      return `${v.title} ${v.title === "Non GA" ? "" : `(${sign}${money})`}`;
    }
    function computeDefaultGaId() {
      const byMeta = props.gaGroup.values?.find((v) => Number(v?.meta?.ga_count) === 0);
      const byTitle = props.gaGroup.values?.find(
        (v) => /(^|\s)non[-\s]?ga($|\s)|\b0\s*ga\b/i.test(String(v.title ?? ""))
      );
      return (byMeta ?? byTitle ?? props.gaGroup.values?.[0])?.id ?? null;
    }
    if (gaSelectedSafe.value == null) {
      gaSelectedSafe.value = computeDefaultGaId();
    }
    watch(gaLimit, (n) => {
      if (n === 0) {
        statsSelected.value = [];
      } else if (n === 4) {
        statsSelected.value = props.statsGroup.values?.map((v) => v.id) ?? [];
      } else {
        if ((statsSelected.value?.length ?? 0) > n) {
          statsSelected.value = statsSelected.value.slice(0, n);
        }
      }
    });
    const statsCount = computed(() => statsSelected.value?.length ?? 0);
    const statsExact = computed(() => statsCount.value === gaLimit.value);
    const disabledSet = computed(() => {
      const set = /* @__PURE__ */ new Set();
      const n = gaLimit.value;
      const cur = statsSelected.value?.length ?? 0;
      if (n === 0 || n === 4) {
        for (const v of props.statsGroup.values ?? []) set.add(v.id);
        return set;
      }
      if (cur >= n) {
        for (const v of props.statsGroup.values ?? []) {
          if (!statsSelected.value.includes(v.id)) set.add(v.id);
        }
      }
      return set;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div><div class="font-medium mb-1">Greater Affixes</div><select class="w-full border rounded-md px-3 py-2 bg-background"><!--[-->`);
      ssrRenderList(_ctx.gaGroup.values, (v) => {
        _push(`<option${ssrRenderAttr("value", v.id)}${ssrIncludeBooleanAttr(Array.isArray(gaSelectedSafe.value) ? ssrLooseContain(gaSelectedSafe.value, v.id) : ssrLooseEqual(gaSelectedSafe.value, v.id)) ? " selected" : ""}>${ssrInterpolate(labelGA(v))}</option>`);
      });
      _push(`<!--]--></select></div><div><div class="font-medium mb-1 flex items-center justify-between"><span>Item attributes</span><span class="${ssrRenderClass([statsExact.value ? "text-muted-foreground" : "text-red-600", "text-xs"])}">${ssrInterpolate(statsCount.value)}/${ssrInterpolate(gaLimit.value)} chosen `);
      if (!statsExact.value && gaLimit.value > 0) {
        _push(`<!--[--> — choose exactly ${ssrInterpolate(gaLimit.value)}<!--]-->`);
      } else if (!statsExact.value && gaLimit.value === 0) {
        _push(`<!--[--> — do not choose GA<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></div><div class="space-y-1"><!--[-->`);
      ssrRenderList(_ctx.statsGroup.values, (v) => {
        _push(`<label class="flex items-center gap-2"><input type="checkbox"${ssrIncludeBooleanAttr(statsSelected.value.includes(v.id)) ? " checked" : ""}${ssrIncludeBooleanAttr(disabledSet.value.has(v.id)) ? " disabled" : ""}><span>${ssrInterpolate(v.title)}</span></label>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/product/UniqueD4Builder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    game: {},
    category: {},
    product: {},
    reviews: {},
    seo: {}
  },
  setup(__props) {
    const props = __props;
    const { selectionByGroup, qtyGroup, buildAddToCartPayload } = useProductOptions(props.product);
    const { unitCents, totalCents } = usePricing(props.product, selectionByGroup);
    const { loadSummary, setSummary } = useCartSummary();
    const groups = computed(
      () => (props.product.option_groups ?? []).filter((g) => g.type === "selector")
    );
    function byCodeOrTitle(code, rx) {
      return groups.value.find((g) => g.code === code) ?? groups.value.find((g) => rx.test((g.title || "").toLowerCase()));
    }
    function byCode(code) {
      return groups.value.find((g) => g.code === code);
    }
    const statsGroupD4 = computed(() => byCode("unique_d4_stats"));
    const gaGroupD4 = computed(() => statsGroupD4.value ? byCode("ga") : void 0);
    const gaModel = computed({
      get: () => {
        if (!gaGroupD4.value) return null;
        const raw = selectionByGroup.value[gaGroupD4.value.id];
        if (Array.isArray(raw)) return raw.length ? Number(raw[0]) : null;
        return typeof raw === "number" && Number.isFinite(raw) ? raw : null;
      },
      set: (v) => {
        if (gaGroupD4.value) selectionByGroup.value[gaGroupD4.value.id] = v;
      }
    });
    const statsModel = computed({
      get: () => {
        const g = statsGroupD4.value;
        if (!g) return [];
        const raw = selectionByGroup.value[g.id];
        if (Array.isArray(raw)) return raw;
        if (typeof raw === "number" && Number.isFinite(raw)) return [raw];
        return [];
      },
      set: (v) => {
        if (statsGroupD4.value) selectionByGroup.value[statsGroupD4.value.id] = Array.isArray(v) ? v : [];
      }
    });
    const classGroup = computed(() => byCodeOrTitle("class", /class|класс/));
    const slotGroup = computed(() => byCodeOrTitle("slot", /slot|слот|предмет/));
    const affixGroup = computed(() => byCodeOrTitle("affix", /affix|аффикс|характеристик/));
    const gaGroupRare = computed(() => !statsGroupD4.value ? byCodeOrTitle("ga", /\b(ga|greater)\b/) : void 0);
    function clamp2(n, min = 0, max = 3) {
      const x = Number(n);
      return Math.min(max, Math.max(min, Number.isFinite(x) ? x : 0));
    }
    const gaLimit = computed(() => {
      const g = gaGroupRare.value;
      if (!g) return 0;
      const raw = selectionByGroup.value[g.id];
      const selectedId = Array.isArray(raw) ? raw[0] : raw;
      const opt = g.values?.find((v) => v.id === selectedId);
      const fromMeta = Number(opt?.meta?.ga_count);
      if (Number.isFinite(fromMeta)) return clamp2(fromMeta);
      const m = String(opt?.title ?? "").match(/(\d)/);
      return clamp2(m ? Number(m[1]) : 0);
    });
    const classModel = computed({
      get: () => {
        const g = classGroup.value;
        if (!g) return null;
        const raw = selectionByGroup.value[g.id];
        if (Array.isArray(raw)) return raw.length ? Number(raw[0]) : null;
        return typeof raw === "number" && Number.isFinite(raw) ? raw : null;
      },
      set: (v) => {
        const g = classGroup.value;
        if (!g) return;
        selectionByGroup.value[g.id] = v == null ? null : Number(v);
      }
    });
    const slotModel = computed({
      get: () => {
        const g = slotGroup.value;
        if (!g) return null;
        const raw = selectionByGroup.value[g.id];
        if (Array.isArray(raw)) return raw.length ? Number(raw[0]) : null;
        return typeof raw === "number" && Number.isFinite(raw) ? raw : null;
      },
      set: (v) => {
        const g = slotGroup.value;
        if (!g) return;
        selectionByGroup.value[g.id] = v == null ? null : Number(v);
      }
    });
    const affixModel = computed({
      get: () => {
        const g = affixGroup.value;
        if (!g) return [];
        const raw = selectionByGroup.value[g.id];
        if (Array.isArray(raw)) return raw;
        if (typeof raw === "number" && Number.isFinite(raw)) return [raw];
        return [];
      },
      set: (v) => {
        const g = affixGroup.value;
        if (!g) return;
        const next = Array.isArray(v) ? v : v != null ? [Number(v)] : [];
        selectionByGroup.value[g.id] = next;
      }
    });
    const affixGaModel = computed({
      get: () => selectionByGroup.value._affix_ga_ids ?? [],
      set: (ids) => {
        selectionByGroup.value._affix_ga_ids = Array.isArray(ids) ? Array.from(new Set(ids.map(Number))).slice(0, 3) : [];
      }
    });
    onMounted(() => {
      const cg = classGroup.value;
      if (cg) {
        const raw = selectionByGroup.value[cg.id];
        if (Array.isArray(raw)) selectionByGroup.value[cg.id] = raw.length ? Number(raw[0]) : null;
      }
      const sg = slotGroup.value;
      if (sg) {
        const raw = selectionByGroup.value[sg.id];
        if (Array.isArray(raw)) selectionByGroup.value[sg.id] = raw.length ? Number(raw[0]) : null;
      }
      const gRare = gaGroupRare.value;
      if (gRare) {
        const raw = selectionByGroup.value[gRare.id];
        const cur = Array.isArray(raw) ? raw[0] : raw;
        if (cur == null) {
          const non = gRare.values?.find((v) => Number(v?.meta?.ga_count) === 0) ?? gRare.values?.find((v) => /(^|\s)non[-\s]?ga($|\s)|\b0\s*ga\b/i.test(String(v.title ?? ""))) ?? gRare.values?.[0];
          selectionByGroup.value[gRare.id] = non?.id ?? null;
        }
      }
      const gD4 = gaGroupD4.value;
      if (gD4) {
        const raw = selectionByGroup.value[gD4.id];
        if (Array.isArray(raw)) {
          selectionByGroup.value[gD4.id] = raw.length ? Number(raw[0]) : null;
        }
        const cur = selectionByGroup.value[gD4.id];
        if (cur == null) {
          const non = gD4.values?.find((v) => Number(v?.meta?.ga_count) === 0) ?? gD4.values?.find((v) => /(^|\s)non[-\s]?ga($|\s)|\b0\s*ga\b/i.test(String(v.title ?? ""))) ?? gD4.values?.[0];
          selectionByGroup.value[gD4.id] = non?.id ?? null;
        }
      }
      const ag = affixGroup.value;
      if (ag) {
        const raw = selectionByGroup.value[ag.id];
        if (!Array.isArray(raw)) {
          selectionByGroup.value[ag.id] = typeof raw === "number" && Number.isFinite(raw) ? [raw] : [];
        }
      }
    });
    const rareIds = computed(() => new Set(
      [classGroup.value?.id, slotGroup.value?.id, affixGroup.value?.id].filter(Boolean)
    ));
    const d4Ids = computed(() => new Set(
      [gaGroupD4.value?.id, statsGroupD4.value?.id].filter(Boolean)
    ));
    const hiddenIds = computed(() => {
      const set = /* @__PURE__ */ new Set();
      for (const id of rareIds.value) set.add(id);
      for (const id of d4Ids.value) set.add(id);
      return set;
    });
    const otherGroups = computed(
      () => (props.product.option_groups ?? []).filter(
        (g) => g.type !== "unique_d4" && // не показываем контейнер D4
        !hiddenIds.value.has(g.id)
        // не показываем rare-служебные и D4-служебные
      )
    );
    const bundleCents = computed(() => {
      const groups2 = (props.product.option_groups ?? []).filter((g) => g.type === "bundle");
      let sum = 0;
      for (const g of groups2) {
        const sel = selectionByGroup.value[g.id];
        if (!Array.isArray(sel) || !sel.length) continue;
        for (const row of sel) {
          const it = g.items?.find((i) => i.product_id === row.product_id);
          if (!it) continue;
          sum += (it.price_cents || 0) * (Number(row.qty) || 0);
        }
      }
      return sum;
    });
    const submitting = ref(false);
    const errors = ref([]);
    const triedToSubmit = ref(false);
    const missingRequiredIds = computed(() => {
      const skip = new Set(
        [gaGroupD4.value?.id, statsGroupD4.value?.id].filter(Boolean)
      );
      return (props.product.option_groups ?? []).filter((g) => {
        if (g.type !== "selector" || !g.is_required) return false;
        if (skip.has(g.id)) return false;
        const sel = selectionByGroup.value[g.id];
        if (g.selection_mode === "single") return typeof sel !== "number";
        return !Array.isArray(sel) || sel.length === 0;
      }).map((g) => g.id);
    });
    const rareGaOk = ref(true);
    const missingRequiredSet = computed(() => new Set(missingRequiredIds.value));
    const canAddToCart = computed(() => {
      if (missingRequiredIds.value.length) return false;
      if (gaGroupRare.value) {
        const need = gaLimit.value;
        const have = affixGaModel.value?.length ?? 0;
        if (need !== have) return false;
        if (!rareGaOk.value) return false;
      }
      return true;
    });
    function formatPrice(cents) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((cents || 0) / 100);
    }
    const displayCents = computed(() => (qtyGroup ? unitCents.value : totalCents.value) + bundleCents.value);
    async function addToCart() {
      errors.value = [];
      triedToSubmit.value = true;
      if (!canAddToCart.value) {
        if (gaGroupRare.value) {
          const need = gaLimit.value;
          const have = affixGaModel.value?.length ?? 0;
          if (need !== have) {
            errors.value.push(`Выберите ровно ${need} аффикс(а/ов) с отметкой GA.`);
          }
        }
        errors.value.push("Заполните обязательные опции перед добавлением в корзину.");
        return;
      }
      if (submitting.value) return;
      submitting.value = true;
      try {
        const bundleGroups = (props.product.option_groups ?? []).filter((g) => g.type === "bundle");
        const bundleRows = [];
        let lastSummary = null;
        for (const g of bundleGroups) {
          const sel = selectionByGroup.value[g.id];
          if (Array.isArray(sel)) {
            for (const row of sel) {
              if (row?.product_id && row?.qty > 0) {
                bundleRows.push({ product_id: Number(row.product_id), qty: Number(row.qty) });
              }
            }
          }
        }
        if (bundleRows.length) {
          for (const row of bundleRows) {
            const { data: data2 } = await axios.post("/cart/add", { product_id: row.product_id, qty: row.qty });
            if (data2?.summary) lastSummary = data2.summary;
          }
          if (lastSummary) setSummary(lastSummary, { refreshWindow: true });
          else await loadSummary({ force: true });
          return;
        }
        const payload = buildAddToCartPayload();
        if (gaGroupD4.value && statsGroupD4.value) {
          const gid = gaGroupD4.value.id;
          let raw = selectionByGroup.value[gid];
          const gaId = raw == null ? null : Number(Array.isArray(raw) ? raw[0] : raw);
          if (!gaId) {
            errors.value = ["Select GA level first."];
            submitting.value = false;
            return;
          }
          const ids = new Set(Array.isArray(payload.option_value_ids) ? payload.option_value_ids : []);
          ids.add(gaId);
          const statsIds = Array.isArray(statsModel.value) ? statsModel.value.map(Number) : [];
          for (const id of statsIds) ids.add(id);
          payload.option_value_ids = Array.from(ids);
          delete payload.affix_ga_ids;
        }
        const hasD4 = !!statsGroupD4.value;
        if (hasD4) {
          delete payload.affix_ga_ids;
        } else {
          payload.affix_ga_ids = affixGaModel.value ?? [];
        }
        const { data } = await axios.post("/cart/add", payload);
        if (data?.summary) {
          setSummary(data.summary, { refreshWindow: true });
        } else {
          await loadSummary({ force: true });
        }
      } catch (e) {
        errors.value.push(e?.response?.data?.message || "Failed to add to cart");
      } finally {
        submitting.value = false;
      }
    }
    function formatDateShort(value) {
      if (!value) return "";
      const isoLike = value.replace(" ", "T");
      const d = new Date(isoLike);
      if (Number.isNaN(d.getTime())) return value;
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }).format(d);
    }
    function relativeTime(value) {
      if (!value) return "";
      const isoLike = value.replace(" ", "T");
      const d = new Date(isoLike);
      if (Number.isNaN(d.getTime())) return "";
      const now = /* @__PURE__ */ new Date();
      let diffMs = now.getTime() - d.getTime();
      if (diffMs < 0) diffMs = 0;
      const dayMs = 24 * 60 * 60 * 1e3;
      const days = Math.floor(diffMs / dayMs);
      if (days <= 0) return "Today";
      if (days === 1) return "1 day ago";
      if (days < 7) return `${days} days ago`;
      const weeks = Math.floor(days / 7);
      if (weeks === 1) return "1 week ago";
      if (weeks < 5) return `${weeks} weeks ago`;
      const months = Math.floor(days / 30);
      if (months <= 11) return months === 1 ? "1 month ago" : `${months} months ago`;
      const years = Math.floor(days / 365);
      return years <= 1 ? "1+ years ago" : `${years}+ years ago`;
    }
    function stars(n) {
      const v = Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
      return Array.from({ length: 5 }, (_, i) => i < v);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$7, {
        seo: props.seo
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              game: _ctx.game,
              category: _ctx.category,
              product: _ctx.product
            }, null, _parent2, _scopeId));
            if (errors.value.length) {
              _push2(`<div class="my-4 rounded-md border border-red-400 text-red-700 p-3"${_scopeId}><ul class="list-disc pl-5"${_scopeId}><!--[-->`);
              ssrRenderList(errors.value, (err, i) => {
                _push2(`<li${_scopeId}>${ssrInterpolate(err)}</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid md:grid-cols-2 gap-6 my-6"${_scopeId}><div${_scopeId}>`);
            if (_ctx.product.image_url) {
              _push2(`<img${ssrRenderAttr("src", _ctx.product.image_url)} class="w-full rounded-xl border border-border"${_scopeId}>`);
            } else {
              _push2(`<div class="aspect-video rounded-xl border grid place-items-center text-sm text-muted-foreground"${_scopeId}> No image </div>`);
            }
            _push2(`</div><div${_scopeId}><h1 class="text-3xl font-semibold"${_scopeId}>${ssrInterpolate(_ctx.product.name)}</h1><div class="mt-2 text-2xl font-bold"${_scopeId}>${ssrInterpolate(unref(qtyGroup) ? "Unit" : "Price")}: <span${_scopeId}>${ssrInterpolate(formatPrice(displayCents.value))}</span>`);
            if (unref(qtyGroup)) {
              _push2(`<!--[--> → Total: <span class="text-primary"${_scopeId}>${ssrInterpolate(formatPrice(unref(totalCents)))}</span><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (gaGroupD4.value && statsGroupD4.value) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                "ga-group": gaGroupD4.value,
                "stats-group": statsGroupD4.value,
                "ga-selected": gaModel.value,
                "onUpdate:gaSelected": ($event) => gaModel.value = $event,
                "stats-selected": statsModel.value,
                "onUpdate:statsSelected": ($event) => statsModel.value = $event
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (classGroup.value && slotGroup.value && affixGroup.value) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                "class-group": classGroup.value,
                "slot-group": slotGroup.value,
                "affix-group": affixGroup.value,
                currency: "USD",
                "ga-limit": gaLimit.value,
                "class-id": classModel.value,
                "onUpdate:classId": ($event) => classModel.value = $event,
                "slot-id": slotModel.value,
                "onUpdate:slotId": ($event) => slotModel.value = $event,
                "affix-ids": affixModel.value,
                "onUpdate:affixIds": ($event) => affixModel.value = $event,
                "affix-ga-ids": affixGaModel.value,
                "onUpdate:affixGaIds": ($event) => affixGaModel.value = $event,
                onGaValid: ($event) => rareGaOk.value = $event
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (otherGroups.value.length) {
              _push2(`<div class="mt-4 space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(otherGroups.value, (group) => {
                _push2(`<!--[-->`);
                if (unref(resolveGroupComponent)(group.type, group)) {
                  _push2(`<div class="${ssrRenderClass([triedToSubmit.value && missingRequiredSet.value.has(group.id) ? "border-red-400" : "border-border", "border rounded-lg p-3"])}"${_scopeId}>`);
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(resolveGroupComponent)(group.type, group)), {
                    group,
                    selected: unref(selectionByGroup)[group.id],
                    "onUpdate:selected": ($event) => unref(selectionByGroup)[group.id] = $event
                  }, null), _parent2, _scopeId);
                  if (triedToSubmit.value && missingRequiredSet.value.has(group.id)) {
                    _push2(`<p class="mt-1 text-sm text-red-600"${_scopeId}> Это поле обязательно для выбора </p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="mt-5 px-4 py-2 rounded-lg bg-primary text-primary-foreground"${_scopeId}>${ssrInterpolate(submitting.value ? "Adding…" : "Add to cart")}</button><div class="mt-10 border-t border-border pt-8"${_scopeId}><div class="flex items-center justify-between gap-4 mb-4"${_scopeId}><h2 class="text-2xl font-semibold"${_scopeId}>Latest reviews</h2><a${ssrRenderAttr("href", _ctx.route("reviews.public", { product_id: _ctx.product.id }))} class="text-sm underline text-primary hover:opacity-80"${_scopeId}> See all reviews </a></div>`);
            if (!props.reviews?.length) {
              _push2(`<div class="text-sm text-muted-foreground"${_scopeId}> No reviews yet. Be the first to leave one after delivery. </div>`);
            } else {
              _push2(`<div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(props.reviews, (r) => {
                _push2(`<div class="border border-border rounded-xl p-4"${_scopeId}><div class="flex items-start justify-between gap-4"${_scopeId}><div class="flex items-start gap-3"${_scopeId}>`);
                if (!r.is_anonymous && r.avatar_url) {
                  _push2(`<img${ssrRenderAttr("src", r.avatar_url)} class="w-10 h-10 rounded-full object-cover"${ssrRenderAttr("alt", r.display_name ?? "User")}${_scopeId}>`);
                } else {
                  _push2(`<div class="w-10 h-10 rounded-full bg-muted"${_scopeId}></div>`);
                }
                _push2(`<div${_scopeId}><div class="font-semibold"${_scopeId}>${ssrInterpolate(r.is_anonymous ? "Anonymous" : r.display_name ?? "Verified customer")}</div><div class="flex items-center gap-2 text-xs text-muted-foreground"${_scopeId}><div class="flex items-center gap-0.5"${_scopeId}><!--[-->`);
                ssrRenderList(stars(r.rating), (on, i) => {
                  _push2(ssrRenderComponent(unref(Star), {
                    key: i,
                    class: ["h-4 w-4", on ? "text-primary fill-primary" : "text-muted-foreground/40"]
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
                if (r.published_at) {
                  _push2(`<span${_scopeId}>· ${ssrInterpolate(formatDateShort(r.published_at))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div>`);
                if (r.published_at) {
                  _push2(`<div class="text-xs whitespace-nowrap rounded-full border border-border bg-muted px-2 py-1 text-muted-foreground"${_scopeId}>${ssrInterpolate(relativeTime(r.published_at))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="mt-3 whitespace-pre-line text-sm"${_scopeId}>${ssrInterpolate(r.body)}</div>`);
                if (r.game?.name) {
                  _push2(`<div class="mt-4 pt-3 border-t border-border flex items-center gap-2 text-xs text-muted-foreground"${_scopeId}>`);
                  if (r.game.image_url) {
                    _push2(`<img${ssrRenderAttr("src", r.game.image_url)} class="w-5 h-5 rounded object-cover"${ssrRenderAttr("alt", r.game.name ?? "")}${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span${_scopeId}>${ssrInterpolate(r.game.name)}</span></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16" }, [
                createVNode(_sfc_main$9, {
                  game: _ctx.game,
                  category: _ctx.category,
                  product: _ctx.product
                }, null, 8, ["game", "category", "product"]),
                errors.value.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "my-4 rounded-md border border-red-400 text-red-700 p-3"
                }, [
                  createVNode("ul", { class: "list-disc pl-5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(errors.value, (err, i) => {
                      return openBlock(), createBlock("li", { key: i }, toDisplayString(err), 1);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "grid md:grid-cols-2 gap-6 my-6" }, [
                  createVNode("div", null, [
                    _ctx.product.image_url ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.product.image_url,
                      class: "w-full rounded-xl border border-border"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "aspect-video rounded-xl border grid place-items-center text-sm text-muted-foreground"
                    }, " No image "))
                  ]),
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-3xl font-semibold" }, toDisplayString(_ctx.product.name), 1),
                    createVNode("div", { class: "mt-2 text-2xl font-bold" }, [
                      createTextVNode(toDisplayString(unref(qtyGroup) ? "Unit" : "Price") + ": ", 1),
                      createVNode("span", null, toDisplayString(formatPrice(displayCents.value)), 1),
                      unref(qtyGroup) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(" → Total: "),
                        createVNode("span", { class: "text-primary" }, toDisplayString(formatPrice(unref(totalCents))), 1)
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    gaGroupD4.value && statsGroupD4.value ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      "ga-group": gaGroupD4.value,
                      "stats-group": statsGroupD4.value,
                      "ga-selected": gaModel.value,
                      "onUpdate:gaSelected": ($event) => gaModel.value = $event,
                      "stats-selected": statsModel.value,
                      "onUpdate:statsSelected": ($event) => statsModel.value = $event
                    }, null, 8, ["ga-group", "stats-group", "ga-selected", "onUpdate:gaSelected", "stats-selected", "onUpdate:statsSelected"])) : createCommentVNode("", true),
                    classGroup.value && slotGroup.value && affixGroup.value ? (openBlock(), createBlock(_sfc_main$2, {
                      key: 1,
                      "class-group": classGroup.value,
                      "slot-group": slotGroup.value,
                      "affix-group": affixGroup.value,
                      currency: "USD",
                      "ga-limit": gaLimit.value,
                      "class-id": classModel.value,
                      "onUpdate:classId": ($event) => classModel.value = $event,
                      "slot-id": slotModel.value,
                      "onUpdate:slotId": ($event) => slotModel.value = $event,
                      "affix-ids": affixModel.value,
                      "onUpdate:affixIds": ($event) => affixModel.value = $event,
                      "affix-ga-ids": affixGaModel.value,
                      "onUpdate:affixGaIds": ($event) => affixGaModel.value = $event,
                      onGaValid: ($event) => rareGaOk.value = $event
                    }, null, 8, ["class-group", "slot-group", "affix-group", "ga-limit", "class-id", "onUpdate:classId", "slot-id", "onUpdate:slotId", "affix-ids", "onUpdate:affixIds", "affix-ga-ids", "onUpdate:affixGaIds", "onGaValid"])) : createCommentVNode("", true),
                    otherGroups.value.length ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "mt-4 space-y-6"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(otherGroups.value, (group) => {
                        return openBlock(), createBlock(Fragment, null, [
                          unref(resolveGroupComponent)(group.type, group) ? (openBlock(), createBlock("div", {
                            key: group.id,
                            class: ["border rounded-lg p-3", triedToSubmit.value && missingRequiredSet.value.has(group.id) ? "border-red-400" : "border-border"]
                          }, [
                            (openBlock(), createBlock(resolveDynamicComponent(unref(resolveGroupComponent)(group.type, group)), {
                              group,
                              selected: unref(selectionByGroup)[group.id],
                              "onUpdate:selected": ($event) => unref(selectionByGroup)[group.id] = $event
                            }, null, 40, ["group", "selected", "onUpdate:selected"])),
                            triedToSubmit.value && missingRequiredSet.value.has(group.id) ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-sm text-red-600"
                            }, " Это поле обязательно для выбора ")) : createCommentVNode("", true)
                          ], 2)) : createCommentVNode("", true)
                        ], 64);
                      }), 256))
                    ])) : createCommentVNode("", true),
                    createVNode("button", {
                      class: "mt-5 px-4 py-2 rounded-lg bg-primary text-primary-foreground",
                      onClick: withModifiers(addToCart, ["prevent"])
                    }, toDisplayString(submitting.value ? "Adding…" : "Add to cart"), 1),
                    createVNode("div", { class: "mt-10 border-t border-border pt-8" }, [
                      createVNode("div", { class: "flex items-center justify-between gap-4 mb-4" }, [
                        createVNode("h2", { class: "text-2xl font-semibold" }, "Latest reviews"),
                        createVNode("a", {
                          href: _ctx.route("reviews.public", { product_id: _ctx.product.id }),
                          class: "text-sm underline text-primary hover:opacity-80"
                        }, " See all reviews ", 8, ["href"])
                      ]),
                      !props.reviews?.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-sm text-muted-foreground"
                      }, " No reviews yet. Be the first to leave one after delivery. ")) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "space-y-3"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.reviews, (r) => {
                          return openBlock(), createBlock("div", {
                            key: r.id,
                            class: "border border-border rounded-xl p-4"
                          }, [
                            createVNode("div", { class: "flex items-start justify-between gap-4" }, [
                              createVNode("div", { class: "flex items-start gap-3" }, [
                                !r.is_anonymous && r.avatar_url ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: r.avatar_url,
                                  class: "w-10 h-10 rounded-full object-cover",
                                  alt: r.display_name ?? "User"
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "w-10 h-10 rounded-full bg-muted"
                                })),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-semibold" }, toDisplayString(r.is_anonymous ? "Anonymous" : r.display_name ?? "Verified customer"), 1),
                                  createVNode("div", { class: "flex items-center gap-2 text-xs text-muted-foreground" }, [
                                    createVNode("div", { class: "flex items-center gap-0.5" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(stars(r.rating), (on, i) => {
                                        return openBlock(), createBlock(unref(Star), {
                                          key: i,
                                          class: ["h-4 w-4", on ? "text-primary fill-primary" : "text-muted-foreground/40"]
                                        }, null, 8, ["class"]);
                                      }), 128))
                                    ]),
                                    r.published_at ? (openBlock(), createBlock("span", { key: 0 }, "· " + toDisplayString(formatDateShort(r.published_at)), 1)) : createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              r.published_at ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-xs whitespace-nowrap rounded-full border border-border bg-muted px-2 py-1 text-muted-foreground"
                              }, toDisplayString(relativeTime(r.published_at)), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "mt-3 whitespace-pre-line text-sm" }, toDisplayString(r.body), 1),
                            r.game?.name ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-4 pt-3 border-t border-border flex items-center gap-2 text-xs text-muted-foreground"
                            }, [
                              r.game.image_url ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: r.game.image_url,
                                class: "w-5 h-5 rounded object-cover",
                                alt: r.game.name ?? ""
                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                              createVNode("span", null, toDisplayString(r.game.name), 1)
                            ])) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
