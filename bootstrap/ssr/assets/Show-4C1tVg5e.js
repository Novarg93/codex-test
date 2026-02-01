import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { a as _sfc_main$a, _ as _sfc_main$d } from "./DefaultLayout-CLBo7IEt.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$b } from "./CardTitle-DdvXd7Lq.js";
import { _ as _sfc_main$5, a as _sfc_main$7, b as _sfc_main$8, c as _sfc_main$9 } from "./index-DRrbPiHR.js";
import { _ as _sfc_main$6 } from "./Input-TWcjNfes.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { Building2, Phone, Mail, Clock, AlertCircle } from "lucide-vue-next";
import { _ as _sfc_main$c } from "./SeoHead-CQ0qjzaG.js";
import "axios";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const form = useForm({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
    const showSuccess = ref(false);
    const showError = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
    watch(() => page.props, (newProps) => {
      const flash = newProps?.flash;
      if (flash?.success) {
        showSuccess.value = true;
        successMessage.value = flash.success;
        setTimeout(() => {
          showSuccess.value = false;
        }, 5e3);
      }
      if (flash?.error) {
        showError.value = true;
        errorMessage.value = flash.error;
        setTimeout(() => {
          showError.value = false;
        }, 5e3);
      }
    }, { immediate: true });
    const submit = () => {
      form.post(route("contact.send"), {
        preserveScroll: true,
        onSuccess: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto py-24 sm:py-32" }, _attrs))}><section class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><div class="mb-4"><h2 class="text-lg text-primary mb-2 tracking-wider">Contact</h2><h2 class="text-3xl md:text-4xl font-bold">Connect With Us</h2></div><p class="mb-8 text-muted-foreground lg:w-5/6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam sint enim exercitationem ex autem corrupti quas tenetur </p><div class="flex flex-col gap-4"><div><div class="flex gap-2 mb-1">`);
      _push(ssrRenderComponent(unref(Building2), null, null, _parent));
      _push(`<div class="font-bold">Find Us</div></div><div>742 Evergreen Terrace, Springfield, IL 62704</div></div><div><div class="flex gap-2 mb-1">`);
      _push(ssrRenderComponent(unref(Phone), null, null, _parent));
      _push(`<div class="font-bold">Call Us</div></div><div>+1 (619) 123-4567</div></div><div><div class="flex gap-2 mb-1">`);
      _push(ssrRenderComponent(unref(Mail), null, null, _parent));
      _push(`<div class="font-bold">Mail Us</div></div><div>shadcnpetproject@gmail.com</div></div><div><div class="flex gap-2">`);
      _push(ssrRenderComponent(unref(Clock), null, null, _parent));
      _push(`<div class="font-bold">Visit Us</div></div><div><div>Monday - Friday</div><div>8AM - 4PM</div></div></div></div></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), { class: "bg-muted/60 dark:bg-card" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "text-primary text-2xl" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="grid gap-4"${_scopeId2}><div class="flex flex-col md:flex-row gap-8"${_scopeId2}><div class="flex flex-col w-full gap-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { for: "first-name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`First Name`);
                      } else {
                        return [
                          createTextVNode("First Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), {
                    class: ["bg-background", { "border-red-500": unref(form).errors.firstName }],
                    id: "first-name",
                    type: "text",
                    placeholder: "Leroy",
                    modelValue: unref(form).firstName,
                    "onUpdate:modelValue": ($event) => unref(form).firstName = $event
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.firstName) {
                    _push3(`<div class="text-red-500 text-sm"${_scopeId2}>${ssrInterpolate(unref(form).errors.firstName)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex flex-col w-full gap-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { for: "last-name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Last Name`);
                      } else {
                        return [
                          createTextVNode("Last Name")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), {
                    class: ["bg-background", { "border-red-500": unref(form).errors.lastName }],
                    id: "last-name",
                    type: "text",
                    placeholder: "Jenkins",
                    modelValue: unref(form).lastName,
                    "onUpdate:modelValue": ($event) => unref(form).lastName = $event
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.lastName) {
                    _push3(`<div class="text-red-500 text-sm"${_scopeId2}>${ssrInterpolate(unref(form).errors.lastName)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="flex flex-col gap-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { for: "email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), {
                    class: ["bg-background", { "border-red-500": unref(form).errors.email }],
                    id: "email",
                    type: "email",
                    placeholder: "ihaveachicken@gmail.com",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.email) {
                    _push3(`<div class="text-red-500 text-sm"${_scopeId2}>${ssrInterpolate(unref(form).errors.email)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex flex-col gap-1.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { for: "message" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Message`);
                      } else {
                        return [
                          createTextVNode("Message")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), {
                    class: ["bg-background", { "border-red-500": unref(form).errors.message }],
                    id: "message",
                    placeholder: "Your message...",
                    rows: "5",
                    modelValue: unref(form).message,
                    "onUpdate:modelValue": ($event) => unref(form).message = $event
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.message) {
                    _push3(`<div class="text-red-500 text-sm"${_scopeId2}>${ssrInterpolate(unref(form).errors.message)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (showSuccess.value) {
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      variant: "default",
                      class: "flex gap-2 bg-transparent items-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AlertCircle), { class: "w-4 h-4 text-green-600" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-green-600" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(successMessage.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(successMessage.value), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AlertCircle), { class: "w-4 h-4 text-green-600" }),
                            createVNode(unref(_sfc_main$9), { class: "text-green-600" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(successMessage.value), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (showError.value) {
                    _push3(ssrRenderComponent(unref(_sfc_main$8), {
                      variant: "destructive",
                      class: "flex gap-2 bg-transparent items-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AlertCircle), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(errorMessage.value)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(errorMessage.value), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AlertCircle), { class: "w-4 h-4" }),
                            createVNode(unref(_sfc_main$9), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(errorMessage.value), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(_sfc_main$a), {
                    disabled: unref(form).processing,
                    class: "mt-4 flex gap-2 items-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(form).processing) {
                          _push4(`<span class="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"${_scopeId3}></span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<span${_scopeId3}>${ssrInterpolate(unref(form).processing ? "Sending..." : "Send message")}</span>`);
                      } else {
                        return [
                          unref(form).processing ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                          })) : createCommentVNode("", true),
                          createVNode("span", null, toDisplayString(unref(form).processing ? "Sending..." : "Send message"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "grid gap-4"
                    }, [
                      createVNode("div", { class: "flex flex-col md:flex-row gap-8" }, [
                        createVNode("div", { class: "flex flex-col w-full gap-1.5" }, [
                          createVNode(unref(_sfc_main$5), { for: "first-name" }, {
                            default: withCtx(() => [
                              createTextVNode("First Name")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), {
                            class: ["bg-background", { "border-red-500": unref(form).errors.firstName }],
                            id: "first-name",
                            type: "text",
                            placeholder: "Leroy",
                            modelValue: unref(form).firstName,
                            "onUpdate:modelValue": ($event) => unref(form).firstName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          unref(form).errors.firstName ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-500 text-sm"
                          }, toDisplayString(unref(form).errors.firstName), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex flex-col w-full gap-1.5" }, [
                          createVNode(unref(_sfc_main$5), { for: "last-name" }, {
                            default: withCtx(() => [
                              createTextVNode("Last Name")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), {
                            class: ["bg-background", { "border-red-500": unref(form).errors.lastName }],
                            id: "last-name",
                            type: "text",
                            placeholder: "Jenkins",
                            modelValue: unref(form).lastName,
                            "onUpdate:modelValue": ($event) => unref(form).lastName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          unref(form).errors.lastName ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-500 text-sm"
                          }, toDisplayString(unref(form).errors.lastName), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col gap-1.5" }, [
                        createVNode(unref(_sfc_main$5), { for: "email" }, {
                          default: withCtx(() => [
                            createTextVNode("Email")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), {
                          class: ["bg-background", { "border-red-500": unref(form).errors.email }],
                          id: "email",
                          type: "email",
                          placeholder: "ihaveachicken@gmail.com",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(form).errors.email ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-500 text-sm"
                        }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex flex-col gap-1.5" }, [
                        createVNode(unref(_sfc_main$5), { for: "message" }, {
                          default: withCtx(() => [
                            createTextVNode("Message")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$7), {
                          class: ["bg-background", { "border-red-500": unref(form).errors.message }],
                          id: "message",
                          placeholder: "Your message...",
                          rows: "5",
                          modelValue: unref(form).message,
                          "onUpdate:modelValue": ($event) => unref(form).message = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(form).errors.message ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-500 text-sm"
                        }, toDisplayString(unref(form).errors.message), 1)) : createCommentVNode("", true)
                      ]),
                      showSuccess.value ? (openBlock(), createBlock(unref(_sfc_main$8), {
                        key: 0,
                        variant: "default",
                        class: "flex gap-2 bg-transparent items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(AlertCircle), { class: "w-4 h-4 text-green-600" }),
                          createVNode(unref(_sfc_main$9), { class: "text-green-600" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(successMessage.value), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      showError.value ? (openBlock(), createBlock(unref(_sfc_main$8), {
                        key: 1,
                        variant: "destructive",
                        class: "flex gap-2 bg-transparent items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(AlertCircle), { class: "w-4 h-4" }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(errorMessage.value), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(unref(_sfc_main$a), {
                        disabled: unref(form).processing,
                        class: "mt-4 flex gap-2 items-center"
                      }, {
                        default: withCtx(() => [
                          unref(form).processing ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                          })) : createCommentVNode("", true),
                          createVNode("span", null, toDisplayString(unref(form).processing ? "Sending..." : "Send message"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { class: "text-primary text-2xl" }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "grid gap-4"
                  }, [
                    createVNode("div", { class: "flex flex-col md:flex-row gap-8" }, [
                      createVNode("div", { class: "flex flex-col w-full gap-1.5" }, [
                        createVNode(unref(_sfc_main$5), { for: "first-name" }, {
                          default: withCtx(() => [
                            createTextVNode("First Name")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), {
                          class: ["bg-background", { "border-red-500": unref(form).errors.firstName }],
                          id: "first-name",
                          type: "text",
                          placeholder: "Leroy",
                          modelValue: unref(form).firstName,
                          "onUpdate:modelValue": ($event) => unref(form).firstName = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(form).errors.firstName ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-500 text-sm"
                        }, toDisplayString(unref(form).errors.firstName), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex flex-col w-full gap-1.5" }, [
                        createVNode(unref(_sfc_main$5), { for: "last-name" }, {
                          default: withCtx(() => [
                            createTextVNode("Last Name")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), {
                          class: ["bg-background", { "border-red-500": unref(form).errors.lastName }],
                          id: "last-name",
                          type: "text",
                          placeholder: "Jenkins",
                          modelValue: unref(form).lastName,
                          "onUpdate:modelValue": ($event) => unref(form).lastName = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(form).errors.lastName ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-500 text-sm"
                        }, toDisplayString(unref(form).errors.lastName), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-1.5" }, [
                      createVNode(unref(_sfc_main$5), { for: "email" }, {
                        default: withCtx(() => [
                          createTextVNode("Email")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), {
                        class: ["bg-background", { "border-red-500": unref(form).errors.email }],
                        id: "email",
                        type: "email",
                        placeholder: "ihaveachicken@gmail.com",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      unref(form).errors.email ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-500 text-sm"
                      }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex flex-col gap-1.5" }, [
                      createVNode(unref(_sfc_main$5), { for: "message" }, {
                        default: withCtx(() => [
                          createTextVNode("Message")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7), {
                        class: ["bg-background", { "border-red-500": unref(form).errors.message }],
                        id: "message",
                        placeholder: "Your message...",
                        rows: "5",
                        modelValue: unref(form).message,
                        "onUpdate:modelValue": ($event) => unref(form).message = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      unref(form).errors.message ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-500 text-sm"
                      }, toDisplayString(unref(form).errors.message), 1)) : createCommentVNode("", true)
                    ]),
                    showSuccess.value ? (openBlock(), createBlock(unref(_sfc_main$8), {
                      key: 0,
                      variant: "default",
                      class: "flex gap-2 bg-transparent items-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(AlertCircle), { class: "w-4 h-4 text-green-600" }),
                        createVNode(unref(_sfc_main$9), { class: "text-green-600" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(successMessage.value), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    showError.value ? (openBlock(), createBlock(unref(_sfc_main$8), {
                      key: 1,
                      variant: "destructive",
                      class: "flex gap-2 bg-transparent items-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(AlertCircle), { class: "w-4 h-4" }),
                        createVNode(unref(_sfc_main$9), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(errorMessage.value), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(unref(_sfc_main$a), {
                      disabled: unref(form).processing,
                      class: "mt-4 flex gap-2 items-center"
                    }, {
                      default: withCtx(() => [
                        unref(form).processing ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                        })) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString(unref(form).processing ? "Sending..." : "Send message"), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$b))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    seo: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$c, {
        seo: props.seo
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
