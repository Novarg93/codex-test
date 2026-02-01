import { defineComponent, ref, onMounted, mergeProps, useSSRContext, computed, withCtx, unref, createVNode, createBlock, openBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./DefaultLayout-CLBo7IEt.js";
import { usePage, router } from "@inertiajs/vue3";
import { User, Unlink, Link } from "lucide-vue-next";
import { _ as _sfc_main$2 } from "./SeoHead-CQ0qjzaG.js";
import "axios";
import "reka-ui";
import "clsx";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TelegramLogin",
  __ssrInlineRender: true,
  props: {
    bot: {},
    authUrl: {},
    size: {},
    lang: {}
  },
  setup(__props) {
    const props = __props;
    const root = ref(null);
    onMounted(() => {
      if (!props.bot || !props.authUrl || !root.value) return;
      root.value.innerHTML = "";
      const s = document.createElement("script");
      s.src = "https://telegram.org/js/telegram-widget.js?22";
      s.async = true;
      s.setAttribute("data-telegram-login", props.bot);
      s.setAttribute("data-size", props.size ?? "large");
      s.setAttribute("data-userpic", "false");
      s.setAttribute("data-lang", props.lang ?? "en");
      s.setAttribute("data-auth-url", props.authUrl);
      root.value.appendChild(s);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TelegramLogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const user = computed(() => page.props.auth.user);
    const seo = computed(() => page.props.seo ?? { title: null, robots: null });
    const isDiscordLinked = computed(() => !!user.value?.discord_user_id);
    const discordAvatarUrl = computed(() => {
      const u = user.value;
      if (!u) return null;
      if (u.discord_avatar_url) return u.discord_avatar_url;
      const id = u.discord_user_id;
      const hash = u.discord_avatar || void 0;
      return id && hash ? `https://cdn.discordapp.com/avatars/${id}/${hash}.png?size=128` : null;
    });
    const connectDiscord = () => {
      window.location.href = route("social.discord.redirect");
    };
    const unlinkDiscord = () => {
      router.delete(route("social.discord.unlink"));
    };
    const isTelegramLinked = computed(() => !!user.value?.telegram_user_id);
    const tgBot = computed(() => page.props.social?.telegram_bot ?? "");
    const tgAuthUrl = computed(() => typeof route !== "undefined" ? route("social.telegram.callback") : "/auth/telegram/callback");
    const unlinkTelegram = () => {
      router.delete(route("social.telegram.unlink"), {}, {
        onSuccess: () => router.reload({ only: ["auth"] })
        // чтобы статус обновился без F5
      });
    };
    const isSending = ref(false);
    const sent = ref(false);
    const resendVerification = () => {
      isSending.value = true;
      router.post(route("verification.send"), {}, {
        onSuccess: () => {
          sent.value = true;
          setTimeout(() => sent.value = false, 5e3);
        },
        onFinish: () => {
          isSending.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        seo: seo.value ?? {}
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-10 md:py-16 lg:py-20"${_scopeId}><h1 class="text-3xl font-semibold mb-6"${_scopeId}>Dashboard</h1><div class="flex gap-10 items-center"${_scopeId}>`);
            if (user.value?.avatar_url) {
              _push2(`<img${ssrRenderAttr("src", user.value.avatar_url)} alt="User avatar" class="h-16 w-16 place-self-start rounded-full object-cover mt-2"${_scopeId}>`);
            } else {
              _push2(`<div class="h-16 w-16 flex place-self-start items-center justify-center rounded-full bg-muted text-muted-foreground mt-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(User), { class: "h-8 w-8" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`<div class="flex flex-col gap-2"${_scopeId}><p${_scopeId}><span class="font-semibold"${_scopeId}>Name:</span> ${ssrInterpolate(user.value?.name)}</p><p${_scopeId}><span class="font-semibold"${_scopeId}>Email:</span> ${ssrInterpolate(user.value?.email)}</p>`);
            if (user.value?.full_name) {
              _push2(`<p${_scopeId}><span class="font-semibold"${_scopeId}>Full name:</span> ${ssrInterpolate(user.value.full_name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p${_scopeId}>`);
            if (user.value?.email_verified_at) {
              _push2(`<span class="text-green-600 font-semibold"${_scopeId}>Verified</span>`);
            } else {
              _push2(`<div class="flex flex-col gap-2"${_scopeId}><span class="text-red-600 font-semibold"${_scopeId}>Not verified</span><button class="px-3 py-1 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"${ssrIncludeBooleanAttr(isSending.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(isSending.value ? "Sending..." : "Resend verification email")}</button>`);
              if (sent.value) {
                _push2(`<span class="ml-2 text-green-600 text-sm"${_scopeId}>Email sent!</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(`</p></div></div><div class="grid md:grid-cols-2 gap-6 mt-10"${_scopeId}><div class="rounded-2xl border p-5 bg-card text-card-foreground shadow-sm border-border"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            if (isDiscordLinked.value && discordAvatarUrl.value) {
              _push2(`<img${ssrRenderAttr("src", discordAvatarUrl.value)} class="h-10 w-10 rounded-full object-cover" alt="Discord avatar"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="font-semibold text-lg"${_scopeId}>Discord</div></div><span class="${ssrRenderClass([isDiscordLinked.value ? "text-green-600" : "text-red-600", "text-sm font-medium"])}"${_scopeId}>${ssrInterpolate(isDiscordLinked.value ? "Linked" : "Not linked")}</span></div>`);
            if (isDiscordLinked.value) {
              _push2(`<!--[--><div class="text-sm text-muted-foreground mb-4 space-y-1"${_scopeId}><div${_scopeId}><span class="text-foreground font-medium"${_scopeId}>Name:</span><span class="ml-2"${_scopeId}>${ssrInterpolate(user.value?.discord_username ?? "—")}</span></div><div class="flex items-center gap-2"${_scopeId}><span class="text-foreground font-medium"${_scopeId}>ID:</span><span class="font-mono"${_scopeId}>${ssrInterpolate(user.value?.discord_user_id)}</span></div></div><div class="flex gap-3"${_scopeId}><button class="px-3 py-2 rounded-md bg-muted hover:bg-muted/70 inline-flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Unlink), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(` Unlink </button></div><!--]-->`);
            } else {
              _push2(`<div class="flex gap-3"${_scopeId}><button class="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 inline-flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(` Link Discord </button></div>`);
            }
            _push2(`</div><div class="rounded-2xl border p-5 bg-card text-card-foreground shadow-sm border-border"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="font-semibold text-lg"${_scopeId}>Telegram</div><span class="${ssrRenderClass([isTelegramLinked.value ? "text-green-600" : "text-red-600", "text-sm font-medium"])}"${_scopeId}>${ssrInterpolate(isTelegramLinked.value ? "Linked" : "Not linked")}</span></div>`);
            if (isTelegramLinked.value) {
              _push2(`<!--[--><div class="mb-4 text-sm"${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(user.value?.telegram_username ? "@" + user.value.telegram_username : "No username")}</div><div class="text-xs text-muted-foreground"${_scopeId}> ID: <span class="font-mono"${_scopeId}>${ssrInterpolate(user.value?.telegram_user_id)}</span></div></div><button class="px-3 py-2 rounded-md bg-muted hover:bg-muted/70 inline-flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Unlink), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(` Unlink </button><!--]-->`);
            } else {
              _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: "tg-login-" + (user.value?.telegram_user_id || "none"),
                bot: tgBot.value,
                authUrl: tgAuthUrl.value,
                size: "large"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-10 md:py-16 lg:py-20" }, [
                createVNode("h1", { class: "text-3xl font-semibold mb-6" }, "Dashboard"),
                createVNode("div", { class: "flex gap-10 items-center" }, [
                  user.value?.avatar_url ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: user.value.avatar_url,
                    alt: "User avatar",
                    class: "h-16 w-16 place-self-start rounded-full object-cover mt-2",
                    onError: ($event) => $event.target.src = ""
                  }, null, 40, ["src", "onError"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "h-16 w-16 flex place-self-start items-center justify-center rounded-full bg-muted text-muted-foreground mt-2"
                  }, [
                    createVNode(unref(User), { class: "h-8 w-8" })
                  ])),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("p", null, [
                      createVNode("span", { class: "font-semibold" }, "Name:"),
                      createTextVNode(" " + toDisplayString(user.value?.name), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("span", { class: "font-semibold" }, "Email:"),
                      createTextVNode(" " + toDisplayString(user.value?.email), 1)
                    ]),
                    user.value?.full_name ? (openBlock(), createBlock("p", { key: 0 }, [
                      createVNode("span", { class: "font-semibold" }, "Full name:"),
                      createTextVNode(" " + toDisplayString(user.value.full_name), 1)
                    ])) : createCommentVNode("", true),
                    createVNode("p", null, [
                      user.value?.email_verified_at ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-green-600 font-semibold"
                      }, "Verified")) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex flex-col gap-2"
                      }, [
                        createVNode("span", { class: "text-red-600 font-semibold" }, "Not verified"),
                        createVNode("button", {
                          class: "px-3 py-1 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50",
                          onClick: resendVerification,
                          disabled: isSending.value
                        }, toDisplayString(isSending.value ? "Sending..." : "Resend verification email"), 9, ["disabled"]),
                        sent.value ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "ml-2 text-green-600 text-sm"
                        }, "Email sent!")) : createCommentVNode("", true)
                      ]))
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid md:grid-cols-2 gap-6 mt-10" }, [
                  createVNode("div", { class: "rounded-2xl border p-5 bg-card text-card-foreground shadow-sm border-border" }, [
                    createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        isDiscordLinked.value && discordAvatarUrl.value ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: discordAvatarUrl.value,
                          class: "h-10 w-10 rounded-full object-cover",
                          alt: "Discord avatar"
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        createVNode("div", { class: "font-semibold text-lg" }, "Discord")
                      ]),
                      createVNode("span", {
                        class: [isDiscordLinked.value ? "text-green-600" : "text-red-600", "text-sm font-medium"]
                      }, toDisplayString(isDiscordLinked.value ? "Linked" : "Not linked"), 3)
                    ]),
                    isDiscordLinked.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", { class: "text-sm text-muted-foreground mb-4 space-y-1" }, [
                        createVNode("div", null, [
                          createVNode("span", { class: "text-foreground font-medium" }, "Name:"),
                          createVNode("span", { class: "ml-2" }, toDisplayString(user.value?.discord_username ?? "—"), 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", { class: "text-foreground font-medium" }, "ID:"),
                          createVNode("span", { class: "font-mono" }, toDisplayString(user.value?.discord_user_id), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-3" }, [
                        createVNode("button", {
                          class: "px-3 py-2 rounded-md bg-muted hover:bg-muted/70 inline-flex items-center gap-2",
                          onClick: unlinkDiscord
                        }, [
                          createVNode(unref(Unlink), { class: "w-4 h-4" }),
                          createTextVNode(" Unlink ")
                        ])
                      ])
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex gap-3"
                    }, [
                      createVNode("button", {
                        class: "px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 inline-flex items-center gap-2",
                        onClick: connectDiscord
                      }, [
                        createVNode(unref(Link), { class: "w-4 h-4" }),
                        createTextVNode(" Link Discord ")
                      ])
                    ]))
                  ]),
                  (openBlock(), createBlock("div", {
                    class: "rounded-2xl border p-5 bg-card text-card-foreground shadow-sm border-border",
                    key: (isTelegramLinked.value ? "tg-linked" : "tg-unlinked") + ":" + (user.value?.telegram_user_id || "")
                  }, [
                    createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                      createVNode("div", { class: "font-semibold text-lg" }, "Telegram"),
                      createVNode("span", {
                        class: [isTelegramLinked.value ? "text-green-600" : "text-red-600", "text-sm font-medium"]
                      }, toDisplayString(isTelegramLinked.value ? "Linked" : "Not linked"), 3)
                    ]),
                    isTelegramLinked.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", { class: "mb-4 text-sm" }, [
                        createVNode("div", { class: "font-medium" }, toDisplayString(user.value?.telegram_username ? "@" + user.value.telegram_username : "No username"), 1),
                        createVNode("div", { class: "text-xs text-muted-foreground" }, [
                          createTextVNode(" ID: "),
                          createVNode("span", { class: "font-mono" }, toDisplayString(user.value?.telegram_user_id), 1)
                        ])
                      ]),
                      createVNode("button", {
                        class: "px-3 py-2 rounded-md bg-muted hover:bg-muted/70 inline-flex items-center gap-2",
                        onClick: unlinkTelegram
                      }, [
                        createVNode(unref(Unlink), { class: "w-4 h-4" }),
                        createTextVNode(" Unlink ")
                      ])
                    ], 64)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center gap-3"
                    }, [
                      (openBlock(), createBlock(_sfc_main$1, {
                        key: "tg-login-" + (user.value?.telegram_user_id || "none"),
                        bot: tgBot.value,
                        authUrl: tgAuthUrl.value,
                        size: "large"
                      }, null, 8, ["bot", "authUrl"]))
                    ]))
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
