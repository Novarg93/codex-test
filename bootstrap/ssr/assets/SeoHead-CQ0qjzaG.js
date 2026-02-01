import { defineComponent, unref, mergeProps, withCtx, createBlock, createCommentVNode, createVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeoHead",
  __ssrInlineRender: true,
  props: {
    seo: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), mergeProps({
        title: _ctx.seo.title ?? void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.seo.description) {
              _push2(`<meta head-key="description" name="description"${ssrRenderAttr("content", _ctx.seo.description)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.robots) {
              _push2(`<meta head-key="robots" name="robots"${ssrRenderAttr("content", _ctx.seo.robots)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.robots) {
              _push2(`<meta head-key="googlebot" name="googlebot"${ssrRenderAttr("content", _ctx.seo.robots)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.canonical) {
              _push2(`<link head-key="canonical" rel="canonical"${ssrRenderAttr("href", _ctx.seo.canonical)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.og?.type) {
              _push2(`<meta head-key="og:type" property="og:type"${ssrRenderAttr("content", _ctx.seo.og.type)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.og?.site_name) {
              _push2(`<meta head-key="og:site_name" property="og:site_name"${ssrRenderAttr("content", _ctx.seo.og.site_name)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.og?.url || _ctx.seo.canonical) {
              _push2(`<meta head-key="og:url" property="og:url"${ssrRenderAttr("content", _ctx.seo.og?.url ?? _ctx.seo.canonical)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.og?.title) {
              _push2(`<meta head-key="og:title" property="og:title"${ssrRenderAttr("content", _ctx.seo.og.title)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.og?.description) {
              _push2(`<meta head-key="og:description" property="og:description"${ssrRenderAttr("content", _ctx.seo.og.description)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.og?.image) {
              _push2(`<meta head-key="og:image" property="og:image"${ssrRenderAttr("content", _ctx.seo.og.image)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta head-key="twitter:card" name="twitter:card"${ssrRenderAttr("content", _ctx.seo.og?.image ? "summary_large_image" : "summary")}${_scopeId}>`);
            if (_ctx.seo.og?.title) {
              _push2(`<meta head-key="twitter:title" name="twitter:title"${ssrRenderAttr("content", _ctx.seo.og.title)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.og?.description) {
              _push2(`<meta head-key="twitter:description" name="twitter:description"${ssrRenderAttr("content", _ctx.seo.og.description)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.seo.og?.image) {
              _push2(`<meta head-key="twitter:image" name="twitter:image"${ssrRenderAttr("content", _ctx.seo.og.image)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.seo.description ? (openBlock(), createBlock("meta", {
                key: 0,
                "head-key": "description",
                name: "description",
                content: _ctx.seo.description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.robots ? (openBlock(), createBlock("meta", {
                key: 1,
                "head-key": "robots",
                name: "robots",
                content: _ctx.seo.robots
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.robots ? (openBlock(), createBlock("meta", {
                key: 2,
                "head-key": "googlebot",
                name: "googlebot",
                content: _ctx.seo.robots
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.canonical ? (openBlock(), createBlock("link", {
                key: 3,
                "head-key": "canonical",
                rel: "canonical",
                href: _ctx.seo.canonical
              }, null, 8, ["href"])) : createCommentVNode("", true),
              _ctx.seo.og?.type ? (openBlock(), createBlock("meta", {
                key: 4,
                "head-key": "og:type",
                property: "og:type",
                content: _ctx.seo.og.type
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.og?.site_name ? (openBlock(), createBlock("meta", {
                key: 5,
                "head-key": "og:site_name",
                property: "og:site_name",
                content: _ctx.seo.og.site_name
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.og?.url || _ctx.seo.canonical ? (openBlock(), createBlock("meta", {
                key: 6,
                "head-key": "og:url",
                property: "og:url",
                content: _ctx.seo.og?.url ?? _ctx.seo.canonical
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.og?.title ? (openBlock(), createBlock("meta", {
                key: 7,
                "head-key": "og:title",
                property: "og:title",
                content: _ctx.seo.og.title
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.og?.description ? (openBlock(), createBlock("meta", {
                key: 8,
                "head-key": "og:description",
                property: "og:description",
                content: _ctx.seo.og.description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.og?.image ? (openBlock(), createBlock("meta", {
                key: 9,
                "head-key": "og:image",
                property: "og:image",
                content: _ctx.seo.og.image
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("meta", {
                "head-key": "twitter:card",
                name: "twitter:card",
                content: _ctx.seo.og?.image ? "summary_large_image" : "summary"
              }, null, 8, ["content"]),
              _ctx.seo.og?.title ? (openBlock(), createBlock("meta", {
                key: 10,
                "head-key": "twitter:title",
                name: "twitter:title",
                content: _ctx.seo.og.title
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.og?.description ? (openBlock(), createBlock("meta", {
                key: 11,
                "head-key": "twitter:description",
                name: "twitter:description",
                content: _ctx.seo.og.description
              }, null, 8, ["content"])) : createCommentVNode("", true),
              _ctx.seo.og?.image ? (openBlock(), createBlock("meta", {
                key: 12,
                "head-key": "twitter:image",
                name: "twitter:image",
                content: _ctx.seo.og.image
              }, null, 8, ["content"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SeoHead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
