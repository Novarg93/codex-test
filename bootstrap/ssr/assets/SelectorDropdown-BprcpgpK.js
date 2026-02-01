import { defineComponent, mergeModels, useModel, computed, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SelectorDropdown",
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
    const isPercent = computed(() => props.group.pricing_mode === "percent");
    const required = computed(() => !!props.group.is_required);
    function label(v) {
      if (isPercent.value) return `${v.title} (+${v.delta_percent ?? 0}%)`;
      const cents = Number(v.delta_cents ?? 0) / 100;
      const money = cents.toLocaleString("en-US", { style: "currency", currency: "USD" });
      const sign = cents >= 0 ? "+" : "";
      return `${v.title} (${sign}${money})`;
    }
    onMounted(() => {
      if (selected.value == null) {
        const def = (props.group.values ?? []).find((v) => v.is_default);
        if (def) selected.value = def.id;
        else if (required.value && props.group.values?.length) selected.value = props.group.values[0].id;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}><div class="font-medium mb-1">${ssrInterpolate(_ctx.group.title)} `);
      if (required.value) {
        _push(`<span class="text-xs text-muted-foreground">(required)</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><select class="w-full border rounded-md px-3 py-2 bg-background"${ssrRenderAttr("value", selected.value ?? "")}>`);
      if (!required.value) {
        _push(`<option value="">—</option>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.group.values, (v) => {
        _push(`<option${ssrRenderAttr("value", v.id)}>${ssrInterpolate(label(v))}</option>`);
      });
      _push(`<!--]--></select></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/product/groups/SelectorDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
