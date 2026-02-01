import { defineComponent, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./DefaultLayout-CLBo7IEt.js";
import { _ as _sfc_main$3 } from "./PostsBreadcrumbs-CN2EL0q5.js";
import { _ as _sfc_main$1 } from "./SeoHead-CQ0qjzaG.js";
import "@inertiajs/vue3";
import "axios";
import "lucide-vue-next";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
import "./BreadcrumbSeparator-DbiA9_uT.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    seo: {},
    post: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        seo: props.seo
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              post: props.post
            }, null, _parent2, _scopeId));
            _push2(`<header class="my-6"${_scopeId}><h1 class="text-3xl font-semibold"${_scopeId}>${ssrInterpolate(props.post.title)}</h1>`);
            if (props.post.published_at) {
              _push2(`<p class="mt-2 text-sm text-muted-foreground"${_scopeId}>${ssrInterpolate(props.post.published_at)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</header><article class=""${_scopeId}>`);
            if (props.post.image_url) {
              _push2(`<img${ssrRenderAttr("src", props.post.image_url)} alt="" class="my-6 w-full rounded-lg"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="legal max-w-none"${_scopeId}>${props.post.content ?? ""}</div></article></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16" }, [
                createVNode(_sfc_main$3, {
                  post: props.post
                }, null, 8, ["post"]),
                createVNode("header", { class: "my-6" }, [
                  createVNode("h1", { class: "text-3xl font-semibold" }, toDisplayString(props.post.title), 1),
                  props.post.published_at ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "mt-2 text-sm text-muted-foreground"
                  }, toDisplayString(props.post.published_at), 1)) : createCommentVNode("", true)
                ]),
                createVNode("article", { class: "" }, [
                  props.post.image_url ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: props.post.image_url,
                    alt: "",
                    class: "my-6 w-full rounded-lg"
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: "legal max-w-none",
                    innerHTML: props.post.content
                  }, null, 8, ["innerHTML"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
