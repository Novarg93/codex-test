import { defineComponent, withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-DOfCavJ9.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-D8hiPpyN.js";
import { P as PrimaryButton } from "./PrimaryButton-CPA9TG0q.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SeoHead-CQ0qjzaG.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    const connectDiscord = () => {
      window.location.href = route("social.discord.redirect");
    };
    const connectGoogle = () => {
      window.location.href = route("social.google.redirect");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-6"${_scopeId}><button type="button" class="w-full inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-muted"${_scopeId}><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}><path fill="currentColor" d="M20.317 4.369A19.791 19.791 0 0 0 16.558 3c-.197.353-.42.83-.575 1.205a18.27 18.27 0 0 0-7.966 0C7.862 3.83 7.64 3.353 7.442 3a19.736 19.736 0 0 0-3.76 1.369C1.392 8.046.675 11.6.956 15.106c1.58 1.175 3.118 1.888 4.622 2.356c.373-.51.705-1.053.992-1.625c-.547-.207-1.07-.462-1.565-.758c.131-.095.26-.195.384-.297c3.004 1.406 6.266 1.406 9.23 0c.125.102.254.202.384.297c-.495.296-1.018.551-1.565.758c.287.572.619 1.115.992 1.625c1.504-.468 3.042-1.181 4.622-2.356c.38-4.716-.648-8.24-2.731-10.737ZM8.747 12.834c-.9 0-1.637-.83-1.637-1.852c0-1.022.725-1.852 1.637-1.852c.913 0 1.648.83 1.637 1.852c0 1.022-.724 1.852-1.637 1.852Zm6.506 0c-.9 0-1.637-.83-1.637-1.852c0-1.022.725-1.852 1.637-1.852c.913 0 1.637.83 1.637 1.852c0 1.022-.724 1.852-1.637 1.852Z"${_scopeId}></path></svg> Continue with Discord </button><button type="button" class="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-muted"${_scopeId}><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"${_scopeId}><path fill="#EA4335" d="M12 10.2v3.9h5.6c-.2 1.3-1.7 3.9-5.6 3.9-3.4 0-6.2-2.8-6.2-6.2S8.6 5.6 12 5.6c1.9 0 3.2.8 3.9 1.5l2.6-2.6C17.1 2.9 14.8 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.9 0-.7-.1-1.1-.2-1.9H12z"${_scopeId}></path></svg> Continue with Google </button><div class="my-4 flex items-center gap-3 text-xs text-muted-foreground"${_scopeId}><div class="h-px w-full bg-border"${_scopeId}></div><span${_scopeId}>or </span><div class="h-px w-full bg-border"${_scopeId}></div></div></div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "rounded-md text-sm underline hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("div", { class: "mb-6" }, [
                createVNode("button", {
                  type: "button",
                  onClick: connectDiscord,
                  class: "w-full inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-muted"
                }, [
                  (openBlock(), createBlock("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M20.317 4.369A19.791 19.791 0 0 0 16.558 3c-.197.353-.42.83-.575 1.205a18.27 18.27 0 0 0-7.966 0C7.862 3.83 7.64 3.353 7.442 3a19.736 19.736 0 0 0-3.76 1.369C1.392 8.046.675 11.6.956 15.106c1.58 1.175 3.118 1.888 4.622 2.356c.373-.51.705-1.053.992-1.625c-.547-.207-1.07-.462-1.565-.758c.131-.095.26-.195.384-.297c3.004 1.406 6.266 1.406 9.23 0c.125.102.254.202.384.297c-.495.296-1.018.551-1.565.758c.287.572.619 1.115.992 1.625c1.504-.468 3.042-1.181 4.622-2.356c.38-4.716-.648-8.24-2.731-10.737ZM8.747 12.834c-.9 0-1.637-.83-1.637-1.852c0-1.022.725-1.852 1.637-1.852c.913 0 1.648.83 1.637 1.852c0 1.022-.724 1.852-1.637 1.852Zm6.506 0c-.9 0-1.637-.83-1.637-1.852c0-1.022.725-1.852 1.637-1.852c.913 0 1.637.83 1.637 1.852c0 1.022-.724 1.852-1.637 1.852Z"
                    })
                  ])),
                  createTextVNode(" Continue with Discord ")
                ]),
                createVNode("button", {
                  type: "button",
                  onClick: connectGoogle,
                  class: "w-full mt-2 inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-muted"
                }, [
                  (openBlock(), createBlock("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true"
                  }, [
                    createVNode("path", {
                      fill: "#EA4335",
                      d: "M12 10.2v3.9h5.6c-.2 1.3-1.7 3.9-5.6 3.9-3.4 0-6.2-2.8-6.2-6.2S8.6 5.6 12 5.6c1.9 0 3.2.8 3.9 1.5l2.6-2.6C17.1 2.9 14.8 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.9 0-.7-.1-1.1-.2-1.9H12z"
                    })
                  ])),
                  createTextVNode(" Continue with Google ")
                ]),
                createVNode("div", { class: "my-4 flex items-center gap-3 text-xs text-muted-foreground" }, [
                  createVNode("div", { class: "h-px w-full bg-border" }),
                  createVNode("span", null, "or "),
                  createVNode("div", { class: "h-px w-full bg-border" })
                ])
              ]),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$2, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$3, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$2, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$3, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$2, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$3, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$2, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$3, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "rounded-md text-sm underline hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
