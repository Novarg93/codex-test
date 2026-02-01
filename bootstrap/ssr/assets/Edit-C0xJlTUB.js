import { unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$4 from "./DeleteUserForm-DOJRjafs.js";
import _sfc_main$3 from "./UpdatePasswordForm-Bh9Xj-iW.js";
import _sfc_main$2 from "./UpdateProfileInformationForm-BiE5nbni.js";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./DefaultLayout-CLBo7IEt.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TextInput-D8hiPpyN.js";
import "./PrimaryButton-CPA9TG0q.js";
import "axios";
import "lucide-vue-next";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16"${_scopeId}><h2 class="text-xl font-semibold leading-tight"${_scopeId}> Profile </h2><div class="py-12"${_scopeId}><div class="mx-auto space-y-6 lg:"${_scopeId}><div class="bg-card p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-card p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-card p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16" }, [
                createVNode("h2", { class: "text-xl font-semibold leading-tight" }, " Profile "),
                createVNode("div", { class: "py-12" }, [
                  createVNode("div", { class: "mx-auto space-y-6 lg:" }, [
                    createVNode("div", { class: "bg-card p-4 shadow sm:rounded-lg sm:p-8" }, [
                      createVNode(_sfc_main$2, {
                        "must-verify-email": __props.mustVerifyEmail,
                        status: __props.status,
                        class: "max-w-xl"
                      }, null, 8, ["must-verify-email", "status"])
                    ]),
                    createVNode("div", { class: "bg-card p-4 shadow sm:rounded-lg sm:p-8" }, [
                      createVNode(_sfc_main$3, { class: "max-w-xl" })
                    ]),
                    createVNode("div", { class: "bg-card p-4 shadow sm:rounded-lg sm:p-8" }, [
                      createVNode(_sfc_main$4, { class: "max-w-xl" })
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
