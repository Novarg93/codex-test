import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderStatusBadge",
  __ssrInlineRender: true,
  props: {
    status: {}
  },
  setup(__props) {
    const props = __props;
    const labels = {
      pending: "Pending",
      paid: "Paid",
      in_progress: "In progress",
      completed: "Completed",
      refund: "Refund"
    };
    const colors = {
      pending: "bg-amber-100 text-amber-800 ring-amber-200",
      paid: "bg-blue-100 text-blue-800 ring-blue-200",
      in_progress: "bg-sky-100 text-sky-800 ring-sky-200",
      completed: "bg-green-100 text-green-800 ring-green-200",
      refund: "bg-red-100 text-red-800 ring-red-200"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset", colors[props.status] ?? "bg-gray-100 text-gray-800 ring-gray-200"]
      }, _attrs))}>${ssrInterpolate(labels[props.status] ?? props.status)}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/OrderStatusBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
