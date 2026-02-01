import { defineComponent, computed, withCtx, unref, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./DefaultLayout-CLBo7IEt.js";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./OrderStatusBadge-wYUmzA38.js";
import { _ as _sfc_main$4 } from "./Pagination-TMWdyutP.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    seo: {},
    orders: {}
  },
  setup(__props) {
    const props = __props;
    const list = computed(() => props.orders?.data ?? []);
    function formatPrice(cents) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { seo: _ctx.seo }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8"${_scopeId}><h1 class="text-3xl font-semibold mb-6"${_scopeId}>Your orders</h1>`);
            if (list.value.length) {
              _push2(`<div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(list.value, (o) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: o.id,
                  class: "block border border-border rounded-lg p-4 hover:bg-accent",
                  href: _ctx.route("orders.show", o.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex justify-between items-center"${_scopeId2}><div${_scopeId2}><div class="font-medium"${_scopeId2}>Order #${ssrInterpolate(o.id)}</div><div class="text-sm text-muted-foreground"${_scopeId2}>${ssrInterpolate(o.placed_at || "—")} · ${ssrInterpolate(o.items_count)} items</div></div><div class="text-right space-y-1"${_scopeId2}><div class="font-semibold"${_scopeId2}>${ssrInterpolate(formatPrice(o.total_cents))}</div>`);
                      _push3(ssrRenderComponent(_sfc_main$3, {
                        status: o.status
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "font-medium" }, "Order #" + toDisplayString(o.id), 1),
                            createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(o.placed_at || "—") + " · " + toDisplayString(o.items_count) + " items", 1)
                          ]),
                          createVNode("div", { class: "text-right space-y-1" }, [
                            createVNode("div", { class: "font-semibold" }, toDisplayString(formatPrice(o.total_cents)), 1),
                            createVNode(_sfc_main$3, {
                              status: o.status
                            }, null, 8, ["status"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-muted-foreground"${_scopeId}>You have no orders yet.</div>`);
            }
            if (props.orders?.links?.length) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                links: props.orders.links
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8" }, [
                createVNode("h1", { class: "text-3xl font-semibold mb-6" }, "Your orders"),
                list.value.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-3"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(list.value, (o) => {
                    return openBlock(), createBlock(unref(Link), {
                      key: o.id,
                      class: "block border border-border rounded-lg p-4 hover:bg-accent",
                      href: _ctx.route("orders.show", o.id)
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "font-medium" }, "Order #" + toDisplayString(o.id), 1),
                            createVNode("div", { class: "text-sm text-muted-foreground" }, toDisplayString(o.placed_at || "—") + " · " + toDisplayString(o.items_count) + " items", 1)
                          ]),
                          createVNode("div", { class: "text-right space-y-1" }, [
                            createVNode("div", { class: "font-semibold" }, toDisplayString(formatPrice(o.total_cents)), 1),
                            createVNode(_sfc_main$3, {
                              status: o.status
                            }, null, 8, ["status"])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["href"]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-muted-foreground"
                }, "You have no orders yet.")),
                props.orders?.links?.length ? (openBlock(), createBlock(_sfc_main$4, {
                  key: 2,
                  links: props.orders.links
                }, null, 8, ["links"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Orders/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
