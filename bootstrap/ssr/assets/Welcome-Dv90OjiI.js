import { mergeProps, unref, useSSRContext, defineComponent, withCtx, createTextVNode, createVNode, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, toDisplayString, createCommentVNode, ref, onMounted, renderSlot, computed } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$A } from "./SeoHead-CQ0qjzaG.js";
import { c as cn, a as _sfc_main$q, _ as _sfc_main$B } from "./DefaultLayout-CLBo7IEt.js";
import { cva } from "class-variance-authority";
import { ArrowRight, Drama, Cookie, Squirrel, Puzzle, Ghost, Vegan, Crown, Wallet, LineChart, Blocks, Paintbrush, Tag, Sparkle, Newspaper, MessageCircle, MousePointerClick, PictureInPicture, Goal, BadgeCheck, TabletSmartphone, ArrowLeft, Star, Check, ChevronDown } from "lucide-vue-next";
import { Marquee } from "@selemondev/vue3-marquee";
import { _ as _sfc_main$r, a as _sfc_main$s, d as _sfc_main$t, b as _sfc_main$u, e as _sfc_main$v, c as _sfc_main$z } from "./CardTitle-DdvXd7Lq.js";
import { _ as _sfc_main$w, a as _sfc_main$x, b as _sfc_main$y } from "./index-_5JZujLt.js";
import { createInjectionState, reactiveOmit } from "@vueuse/core";
import emblaCarouselVue from "embla-carousel-vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { useForwardPropsEmits, AccordionRoot, AccordionContent, useForwardProps, AccordionItem, AccordionHeader, AccordionTrigger } from "reka-ui";
import "@inertiajs/vue3";
import "axios";
import "clsx";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
const _imports_0 = "/build/assets/hero-image-dark-2bf7J_2S.jpg";
const _sfc_main$p = {
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(badgeVariants)({ variant: __props.variant }), props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/badge/Badge.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto" }, _attrs))}><div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"><div class="text-center space-y-8">`);
      _push(ssrRenderComponent(unref(_sfc_main$p), { class: "text-sm p-2 rounded-full bg-transparent border border-border" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-2 text-primary"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$p), { class: "bg-primary text-white p-1 rounded-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New`);
                } else {
                  return [
                    createTextVNode("New")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span><span${_scopeId}> Design is out now! </span>`);
          } else {
            return [
              createVNode("span", { class: "mr-2 text-primary" }, [
                createVNode(unref(_sfc_main$p), { class: "bg-primary text-white p-1 rounded-full" }, {
                  default: withCtx(() => [
                    createTextVNode("New")
                  ]),
                  _: 1
                })
              ]),
              createVNode("span", null, " Design is out now! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"><h1> Experience the <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">Shadcn/Vue </span> landing page </h1></div><p class="max-w-screen-sm mx-auto text-xl text-muted-foreground"> We&#39;re more than just a tool, we&#39;re a community of passionate creators. Get access to exclusive resources, tutorials, and support. </p><div class="space-y-4 md:space-y-0 md:space-x-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$q), { class: "w-5/6 md:w-1/4 font-bold group/arrow" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Started `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Get Started "),
              createVNode(unref(ArrowRight), { class: "size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$q), {
        "as-child": "",
        variant: "secondary",
        class: "w-5/6 md:w-1/4 font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://github.com/leoMirandaa/shadcn-vue-landing-page.git" target="_blank"${_scopeId}>Github respository</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://github.com/leoMirandaa/shadcn-vue-landing-page.git",
                target: "_blank"
              }, "Github respository")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative group mt-14"><div class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"></div><img class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border-border border-t-2 border-t-primary/30 img-border-animation"${ssrRenderAttr("src", _imports_0)} alt="dashboard using shadcn-vue"><div class="bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div></div></div></section>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Hero.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Sponsors",
  __ssrInlineRender: true,
  setup(__props) {
    const sponsors = [
      {
        icon: "crown",
        name: "Acmebrand"
      },
      {
        icon: "vegan",
        name: "Acmelogo"
      },
      {
        icon: "ghost",
        name: "Acmesponsor"
      },
      {
        icon: "puzzle",
        name: "Acmeipsum"
      },
      {
        icon: "squirrel",
        name: "Acme"
      },
      {
        icon: "cookie",
        name: "Accmee"
      },
      {
        icon: "drama",
        name: "Acmetech"
      }
    ];
    const iconMap = {
      crown: Crown,
      vegan: Vegan,
      ghost: Ghost,
      puzzle: Puzzle,
      squirrel: Squirrel,
      cookie: Cookie,
      drama: Drama
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "sponsors",
        class: "max-w-[75%] mx-auto pb-24 sm:pb-32"
      }, _attrs))}><h2 class="text-lg md:text-xl text-center mb-6">Our Platinum Sponsors</h2><div class="mx-auto">`);
      _push(ssrRenderComponent(unref(Marquee), {
        class: "gap-[3rem]",
        pauseOnHover: true,
        fade: true,
        innerClassName: "gap-[3rem]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(sponsors, ({ icon, name }) => {
              _push2(`<div${_scopeId}><div class="flex items-center text-xl md:text-2xl font-medium"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[icon]), {
                class: "mr-2",
                "stroke-width": "3"
              }, null), _parent2, _scopeId);
              _push2(` ${ssrInterpolate(name)}</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(sponsors, ({ icon, name }) => {
                return createVNode("div", { key: name }, [
                  createVNode("div", { class: "flex items-center text-xl md:text-2xl font-medium" }, [
                    (openBlock(), createBlock(resolveDynamicComponent(iconMap[icon]), {
                      class: "mr-2",
                      "stroke-width": "3"
                    })),
                    createTextVNode(" " + toDisplayString(name), 1)
                  ])
                ]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sponsors.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "Benefits",
  __ssrInlineRender: true,
  setup(__props) {
    const benefitList = [
      {
        icon: "blocks",
        title: "Build Brand Trust",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores."
      },
      {
        icon: "lineChart",
        title: "More Leads",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur."
      },
      {
        icon: "wallet",
        title: "Higher Conversions",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam"
      },
      {
        icon: "sparkle",
        title: "Test Marketing Ideas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores."
      }
    ];
    const iconMap = {
      sparkle: Sparkle,
      tag: Tag,
      paintbrush: Paintbrush,
      blocks: Blocks,
      lineChart: LineChart,
      wallet: Wallet
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto py-24 sm:py-32" }, _attrs))}><div class="grid lg:grid-cols-2 place-items-center lg:gap-24"><div><h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2><h2 class="text-3xl md:text-4xl font-bold mb-4"> Your Shortcut to Success </h2><p class="text-xl text-muted-foreground mb-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ducimus reprehenderit architecto rerum similique facere odit deleniti necessitatibus quo quae. </p></div><div class="grid lg:grid-cols-2 gap-4 w-full"><!--[-->`);
      ssrRenderList(benefitList, ({ icon, title, description }, index) => {
        _push(ssrRenderComponent(unref(_sfc_main$r), {
          key: title,
          class: "bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background border-border transition-all delay-75 group/number"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$s), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex justify-between"${_scopeId2}>`);
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(iconMap[icon]), { class: "size-8 mb-6 text-primary" }, null), _parent3, _scopeId2);
                    _push3(`<span class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"${_scopeId2}>0${ssrInterpolate(index + 1)}</span></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-between" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(iconMap[icon]), { class: "size-8 mb-6 text-primary" })),
                        createVNode("span", { class: "text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30" }, "0" + toDisplayString(index + 1), 1)
                      ]),
                      createVNode(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$u), { class: "text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(description)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$s), null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex justify-between" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(iconMap[icon]), { class: "size-8 mb-6 text-primary" })),
                      createVNode("span", { class: "text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30" }, "0" + toDisplayString(index + 1), 1)
                    ]),
                    createVNode(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(_sfc_main$u), { class: "text-muted-foreground" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(description), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Benefits.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const featureList = [
      {
        icon: "tabletSmartphone",
        title: "Mobile Friendly",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur."
      },
      {
        icon: "badgeCheck",
        title: "Social Proof",
        description: "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam."
      },
      {
        icon: "goal",
        title: "Targeted Content",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam."
      },
      {
        icon: "pictureInPicture",
        title: "Strong Visuals",
        description: "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam."
      },
      {
        icon: "mousePointerClick",
        title: "Clear CTA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur."
      },
      {
        icon: "newspaper",
        title: "Clear Headline",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur."
      }
    ];
    const iconMap = {
      tabletSmartphone: TabletSmartphone,
      badgeCheck: BadgeCheck,
      goal: Goal,
      pictureInPicture: PictureInPicture,
      paintbrush: Paintbrush,
      mousePointerClick: MousePointerClick,
      messageCircle: MessageCircle,
      newspaper: Newspaper
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto py-24 sm:py-32" }, _attrs))}><h2 class="text-lg text-primary text-center mb-2 tracking-wider"> Features </h2><h2 class="text-3xl md:text-4xl text-center font-bold mb-4"> What Makes Us Different </h2><h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio facere tenetur. </h3><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(featureList, ({ icon, title, description }) => {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(_sfc_main$r), { class: "h-full bg-background border-0 shadow-none" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$s), { class: "flex justify-center items-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"${_scopeId2}>`);
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(iconMap[icon]), { class: "size-6 text-primary" }, null), _parent3, _scopeId2);
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(iconMap[icon]), { class: "size-6 text-primary" }))
                      ]),
                      createVNode(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$u), { class: "text-muted-foreground text-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(description)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$s), { class: "flex justify-center items-center" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(iconMap[icon]), { class: "size-6 text-primary" }))
                    ]),
                    createVNode(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(_sfc_main$u), { class: "text-muted-foreground text-center" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(description), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Features.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const serviceList = [
      {
        title: "Custom Domain Integration",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.",
        pro: 0
      },
      {
        title: "Social Media Integrations",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
        pro: 0
      },
      {
        title: "Email Marketing Integrations",
        description: "Lorem dolor sit amet adipisicing.",
        pro: 0
      },
      {
        title: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet consectetur.",
        pro: 1
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto py-24 sm:py-32" }, _attrs))}><h2 class="text-lg text-primary text-center mb-2 tracking-wider"> Services </h2><h2 class="text-3xl md:text-4xl text-center font-bold mb-4"> Grow Your Business </h2><h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8"> From marketing and sales to operations and strategy, we have the expertise to help you achieve your goals. </h3><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div><div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"><!--[-->`);
      ssrRenderList(serviceList, ({ title, description, pro }) => {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(_sfc_main$r), { class: "bg-muted/60 dark:bg-card h-full relative border-border" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$s), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$v), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(description)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(description), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$v), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(description), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (pro === 1) {
                _push2(ssrRenderComponent(unref(_sfc_main$p), {
                  variant: "secondary",
                  class: "absolute bg-secondary p-1 px-2 rounded-full -top-2 -right-3"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`PRO`);
                    } else {
                      return [
                        createTextVNode("PRO")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(unref(_sfc_main$s), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$v), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(description), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                pro === 1 ? (openBlock(), createBlock(unref(_sfc_main$p), {
                  key: 0,
                  variant: "secondary",
                  class: "absolute bg-secondary p-1 px-2 rounded-full -top-2 -right-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode("PRO")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const HowItWorksList = [
      {
        badgeTitle: "Contribute",
        title: "Make a Difference with Every Contribution",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.",
        image: "/images/roboto.png"
      },
      {
        badgeTitle: "Discover",
        title: "Create an Impact with Every Choice",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, sint reiciendis quidem iure veritatis optio facere tenetur.",
        image: "/images/runner.png"
      },
      {
        badgeTitle: "Innovate",
        title: "Make Every Action Count",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, odit similique quasi sint.",
        image: "/images/pacheco.png"
      },
      {
        badgeTitle: "Collaborate",
        title: "Tackle this challenge together",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.",
        image: "/images/gamestation.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto py-24 sm:py-32" }, _attrs))}><div class="text-center mb-8"><h2 class="text-lg text-primary text-center mb-2 tracking-wider"> How It Works </h2><h2 class="text-3xl md:text-4xl text-center font-bold"> Step-by-Step Process </h2></div><div class="lg:w-[80%] mx-auto relative"><!--[-->`);
      ssrRenderList(HowItWorksList, ({ badgeTitle, title, description, image }, index) => {
        _push(`<div class="${ssrRenderClass([
          "flex mb-8 items-center",
          { " flex-row-reverse": index % 2 !== 0 }
        ])}">`);
        _push(ssrRenderComponent(unref(_sfc_main$r), { class: "h-full bg-transparent border-0 shadow-none" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$s), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="pb-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$p), { class: "p-1 px-2 rounded-full" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(badgeTitle)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(badgeTitle), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "pb-4" }, [
                        createVNode(unref(_sfc_main$p), { class: "p-1 px-2 rounded-full" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(badgeTitle), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$u), { class: "text-muted-foreground w-[80%]" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(description)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$s), null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "pb-4" }, [
                      createVNode(unref(_sfc_main$p), { class: "p-1 px-2 rounded-full" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(badgeTitle), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode(unref(_sfc_main$t), { class: "text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(_sfc_main$u), { class: "text-muted-foreground w-[80%]" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(description), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `Image describing ${title} `)} className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 hidden sm:block"><div class="${ssrRenderClass([
          "-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl",
          {
            "left-0": index % 2 !== 0
          }
        ])}"></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HowItWorks.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ opts, orientation, plugins }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    function onSelect(api) {
      canScrollNext.value = api?.canScrollNext() || false;
      canScrollPrev.value = api?.canScrollPrev() || false;
    }
    onMounted(() => {
      if (!emblaApi.value) return;
      emblaApi.value?.on("init", onSelect);
      emblaApi.value?.on("reInit", onSelect);
      emblaApi.value?.on("select", onSelect);
      emits("init-api", emblaApi.value);
    });
    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      orientation
    };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$i = {
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: { type: null, required: false },
    plugins: { type: null, required: false },
    orientation: { type: String, required: false, default: "horizontal" },
    class: { type: null, required: false }
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    } = useProvideCarousel(props, emits);
    __expose({
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        canScrollNext: unref(canScrollNext),
        canScrollPrev: unref(canScrollPrev),
        carouselApi: unref(carouselApi),
        carouselRef: unref(carouselRef),
        orientation: unref(orientation),
        scrollNext: unref(scrollNext),
        scrollPrev: unref(scrollPrev)
      }, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/carousel/Carousel.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "CarouselNext",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$q), mergeProps({
        disabled: !unref(canScrollNext),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollNext)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Next Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowRight), { class: "h-4 w-4 text-current" }),
                createVNode("span", { class: "sr-only" }, "Next Slide")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/carousel/CarouselNext.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "CarouselPrevious",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$q), mergeProps({
        disabled: !unref(canScrollPrev),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollPrev)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Previous Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowLeft), { class: "h-4 w-4 text-current" }),
                createVNode("span", { class: "sr-only" }, "Previous Slide")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/carousel/CarouselPrevious.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const reviewList = [
      {
        image: "https://github.com/shadcn.png",
        name: "John Doe",
        userName: "Product Manager",
        comment: "Wow Vue + Shadcn-Vue is awesome!. This template lets me change colors, fonts and images to match my brand identity. ",
        rating: 5
      },
      {
        image: "https://github.com/shadcn.png",
        name: "Sophia Collins",
        userName: "Cybersecurity Analyst",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ",
        rating: 4.8
      },
      {
        image: "https://github.com/shadcn.png",
        name: "Adam Johnson",
        userName: "Chief Technology Officer",
        comment: "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        rating: 4.9
      },
      {
        image: "https://github.com/shadcn.png",
        name: "Ethan Parker",
        userName: "Data Scientist",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.",
        rating: 5
      },
      {
        image: "https://github.com/shadcn.png",
        name: "Ava Mitchell",
        userName: "IT Project Manager",
        comment: "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.",
        rating: 5
      },
      {
        image: "https://github.com/shadcn.png",
        name: "Isabella Reed",
        userName: "DevOps Engineer",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 4.9
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto py-24 sm:py-32" }, _attrs))}><div class="text-center mb-8"><h2 class="text-lg text-primary text-center mb-2 tracking-wider"> Testimonials </h2><h2 class="text-3xl md:text-4xl text-center font-bold mb-4"> Hear What Our 1000+ Clients Say </h2></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$i), {
        opts: {
          align: "start"
        },
        class: "relative w-[75%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$h), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(reviewList, (review) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$g), {
                      key: review.name,
                      class: "md:basis-1/2 lg:basis-1/3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$r), { class: "bg-muted/50 dark:bg-card border-border" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$u), { class: "pt-6 pb-0" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="flex gap-1 pb-6"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(unref(Star), { class: "size-4 fill-primary text-primary" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(Star), { class: "size-4 fill-primary text-primary" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(Star), { class: "size-4 fill-primary text-primary" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(Star), { class: "size-4 fill-primary text-primary" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(Star), { class: "size-4 fill-primary text-primary" }, null, _parent6, _scopeId5));
                                      _push6(`</div> &quot;${ssrInterpolate(review.comment)}&quot; `);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex gap-1 pb-6" }, [
                                          createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                          createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                          createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                          createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                          createVNode(unref(Star), { class: "size-4 fill-primary text-primary" })
                                        ]),
                                        createTextVNode(' "' + toDisplayString(review.comment) + '" ', 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$s), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="flex flex-row items-center gap-4"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(unref(_sfc_main$w), { class: "size-10" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$x), {
                                              src: "https://www.radix-vue.com/logo.svg",
                                              alt: "@radix-vue"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(_sfc_main$y), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`SV`);
                                                } else {
                                                  return [
                                                    createTextVNode("SV")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(_sfc_main$x), {
                                                src: "https://www.radix-vue.com/logo.svg",
                                                alt: "@radix-vue"
                                              }),
                                              createVNode(unref(_sfc_main$y), null, {
                                                default: withCtx(() => [
                                                  createTextVNode("SV")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="flex flex-col"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(unref(_sfc_main$t), { class: "text-lg" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(review.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(review.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(_sfc_main$v), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(review.userName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(review.userName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex flex-row items-center gap-4" }, [
                                          createVNode(unref(_sfc_main$w), { class: "size-10" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(_sfc_main$x), {
                                                src: "https://www.radix-vue.com/logo.svg",
                                                alt: "@radix-vue"
                                              }),
                                              createVNode(unref(_sfc_main$y), null, {
                                                default: withCtx(() => [
                                                  createTextVNode("SV")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "flex flex-col" }, [
                                            createVNode(unref(_sfc_main$t), { class: "text-lg" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(review.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(unref(_sfc_main$v), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(review.userName), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$u), { class: "pt-6 pb-0" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex gap-1 pb-6" }, [
                                        createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                        createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                        createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                        createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                        createVNode(unref(Star), { class: "size-4 fill-primary text-primary" })
                                      ]),
                                      createTextVNode(' "' + toDisplayString(review.comment) + '" ', 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$s), null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex flex-row items-center gap-4" }, [
                                        createVNode(unref(_sfc_main$w), { class: "size-10" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$x), {
                                              src: "https://www.radix-vue.com/logo.svg",
                                              alt: "@radix-vue"
                                            }),
                                            createVNode(unref(_sfc_main$y), null, {
                                              default: withCtx(() => [
                                                createTextVNode("SV")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "flex flex-col" }, [
                                          createVNode(unref(_sfc_main$t), { class: "text-lg" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(review.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(unref(_sfc_main$v), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(review.userName), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$r), { class: "bg-muted/50 dark:bg-card border-border" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$u), { class: "pt-6 pb-0" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex gap-1 pb-6" }, [
                                      createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                      createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                      createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                      createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                      createVNode(unref(Star), { class: "size-4 fill-primary text-primary" })
                                    ]),
                                    createTextVNode(' "' + toDisplayString(review.comment) + '" ', 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$s), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-row items-center gap-4" }, [
                                      createVNode(unref(_sfc_main$w), { class: "size-10" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$x), {
                                            src: "https://www.radix-vue.com/logo.svg",
                                            alt: "@radix-vue"
                                          }),
                                          createVNode(unref(_sfc_main$y), null, {
                                            default: withCtx(() => [
                                              createTextVNode("SV")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex flex-col" }, [
                                        createVNode(unref(_sfc_main$t), { class: "text-lg" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(review.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(unref(_sfc_main$v), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(review.userName), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(reviewList, (review) => {
                      return createVNode(unref(_sfc_main$g), {
                        key: review.name,
                        class: "md:basis-1/2 lg:basis-1/3"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$r), { class: "bg-muted/50 dark:bg-card border-border" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$u), { class: "pt-6 pb-0" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex gap-1 pb-6" }, [
                                    createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                    createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                    createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                    createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                    createVNode(unref(Star), { class: "size-4 fill-primary text-primary" })
                                  ]),
                                  createTextVNode(' "' + toDisplayString(review.comment) + '" ', 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$s), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-row items-center gap-4" }, [
                                    createVNode(unref(_sfc_main$w), { class: "size-10" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$x), {
                                          src: "https://www.radix-vue.com/logo.svg",
                                          alt: "@radix-vue"
                                        }),
                                        createVNode(unref(_sfc_main$y), null, {
                                          default: withCtx(() => [
                                            createTextVNode("SV")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode(unref(_sfc_main$t), { class: "text-lg" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(review.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(unref(_sfc_main$v), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(review.userName), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$e), { class: "border-border hover:bg-border disabled:opacity-50" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$f), { class: "border-border hover:bg-border disabled:opacity-50" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$h), null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(reviewList, (review) => {
                    return createVNode(unref(_sfc_main$g), {
                      key: review.name,
                      class: "md:basis-1/2 lg:basis-1/3"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$r), { class: "bg-muted/50 dark:bg-card border-border" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$u), { class: "pt-6 pb-0" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex gap-1 pb-6" }, [
                                  createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                  createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                  createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                  createVNode(unref(Star), { class: "size-4 fill-primary text-primary" }),
                                  createVNode(unref(Star), { class: "size-4 fill-primary text-primary" })
                                ]),
                                createTextVNode(' "' + toDisplayString(review.comment) + '" ', 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$s), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-row items-center gap-4" }, [
                                  createVNode(unref(_sfc_main$w), { class: "size-10" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$x), {
                                        src: "https://www.radix-vue.com/logo.svg",
                                        alt: "@radix-vue"
                                      }),
                                      createVNode(unref(_sfc_main$y), null, {
                                        default: withCtx(() => [
                                          createTextVNode("SV")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode(unref(_sfc_main$t), { class: "text-lg" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(review.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$v), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(review.userName), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$e), { class: "border-border hover:bg-border disabled:opacity-50" }),
              createVNode(unref(_sfc_main$f), { class: "border-border hover:bg-border disabled:opacity-50" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Testimonials.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20px",
    height: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    class: "ionicon fill-foreground",
    viewBox: "0 0 512 512"
  }, _attrs))}><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/icons/LinkedInIcon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const LinkedInIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$b = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20px",
    height: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    class: "ionicon fill-foreground",
    viewBox: "0 0 512 512"
  }, _attrs))}><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/icons/GithubIcon.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const GithubIcon = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$a = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18px",
    height: "18px",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    class: "fill-foreground"
  }, _attrs))}><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/icons/XIcon.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const XIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    const teamList = [
      {
        imageUrl: "https://i.pravatar.cc/250?img=58",
        firstName: "Leo",
        lastName: "Miranda",
        positions: ["Vue Fronted Developer", "Creator Of This Website"],
        socialNetworks: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leopoldo-miranda/"
          },
          {
            name: "Github",
            url: "https://github.com/leoMirandaa"
          },
          {
            name: "X",
            url: "https://x.com/leo_mirand4"
          }
        ]
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["UI/UX Designer"],
        socialNetworks: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leopoldo-miranda/"
          },
          {
            name: "X",
            url: "https://x.com/leo_mirand4"
          }
        ]
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        firstName: "David",
        lastName: "Diaz",
        positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
        socialNetworks: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leopoldo-miranda/"
          },
          {
            name: "Github",
            url: "https://github.com/leoMirandaa"
          }
        ]
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        firstName: "Sarah",
        lastName: "Robinson",
        positions: ["Cloud Native Developer", " Kubernetes Orchestrator"],
        socialNetworks: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leopoldo-miranda/"
          },
          {
            name: "Github",
            url: "https://github.com/leoMirandaa"
          },
          {
            name: "X",
            url: "https://x.com/leo_mirand4"
          }
        ]
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        firstName: "Michael",
        lastName: "Holland",
        positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
        socialNetworks: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leopoldo-miranda/"
          }
        ]
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        firstName: "Zoe",
        lastName: "Garcia",
        positions: ["JavaScript Evangelist", "Deno Champion"],
        socialNetworks: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leopoldo-miranda/"
          },
          {
            name: "Github",
            url: "https://github.com/leoMirandaa"
          }
        ]
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        firstName: "Evan",
        lastName: "James",
        positions: ["Backend Developer"],
        socialNetworks: [
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/leopoldo-miranda/"
          },
          {
            name: "Github",
            url: "https://github.com/leoMirandaa"
          },
          {
            name: "X",
            url: "https://x.com/leo_mirand4"
          }
        ]
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        firstName: "Pam",
        lastName: "Taylor",
        positions: ["Fullstack developer", "UX Researcher"],
        socialNetworks: [
          {
            name: "X",
            url: "https://x.com/leo_mirand4"
          }
        ]
      }
    ];
    const socialIcon = (socialName) => {
      switch (socialName) {
        case "LinkedIn":
          return LinkedInIcon;
        case "Github":
          return GithubIcon;
        case "X":
          return XIcon;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto py-24 sm:py-32" }, _attrs))}><div class="text-center mb-8"><h2 class="text-lg text-primary text-center mb-2 tracking-wider">Team</h2><h2 class="text-3xl md:text-4xl text-center font-bold"> The Company Dream Team </h2></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(teamList, ({
        imageUrl,
        firstName,
        lastName,
        positions,
        socialNetworks
      }) => {
        _push(ssrRenderComponent(unref(_sfc_main$r), {
          key: imageUrl,
          class: "bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$s), { class: "p-0 gap-0" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-full overflow-hidden"${_scopeId2}><img${ssrRenderAttr("src", imageUrl)} alt="" class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"${_scopeId2}></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$t), { class: "py-6 pb-4 px-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(firstName)} <span class="text-primary"${_scopeId3}>${ssrInterpolate(lastName)}</span>`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(firstName) + " ", 1),
                            createVNode("span", { class: "text-primary" }, toDisplayString(lastName), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "h-full overflow-hidden" }, [
                        createVNode("img", {
                          src: imageUrl,
                          alt: "",
                          class: "w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                        }, null, 8, ["src"])
                      ]),
                      createVNode(unref(_sfc_main$t), { class: "py-6 pb-4 px-6" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(firstName) + " ", 1),
                          createVNode("span", { class: "text-primary" }, toDisplayString(lastName), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(positions, (position, index) => {
                _push2(ssrRenderComponent(unref(_sfc_main$u), {
                  key: index,
                  class: {
                    "pb-0 text-muted-foreground ": true,
                    "pb-4": index === positions.length - 1
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(position)}`);
                      if (index < positions.length - 1) {
                        _push3(`<span${_scopeId2}>,</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createTextVNode(toDisplayString(position), 1),
                        index < positions.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(unref(_sfc_main$z), { class: "space-x-4 mt-auto" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(socialNetworks, ({ name, url }) => {
                      _push3(`<a${ssrRenderAttr("href", url)} target="_blank" class="hover:opacity-80 transition-all"${ssrRenderAttr("aria-label", `Visit our ${name} page`)}${_scopeId2}>`);
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(socialIcon(name)), null, null), _parent3, _scopeId2);
                      _push3(`</a>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(socialNetworks, ({ name, url }) => {
                        return openBlock(), createBlock("a", {
                          key: "name",
                          href: url,
                          target: "_blank",
                          class: "hover:opacity-80 transition-all",
                          "aria-label": `Visit our ${name} page`
                        }, [
                          (openBlock(), createBlock(resolveDynamicComponent(socialIcon(name))))
                        ], 8, ["href", "aria-label"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$s), { class: "p-0 gap-0" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "h-full overflow-hidden" }, [
                      createVNode("img", {
                        src: imageUrl,
                        alt: "",
                        class: "w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                      }, null, 8, ["src"])
                    ]),
                    createVNode(unref(_sfc_main$t), { class: "py-6 pb-4 px-6" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(firstName) + " ", 1),
                        createVNode("span", { class: "text-primary" }, toDisplayString(lastName), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                (openBlock(true), createBlock(Fragment, null, renderList(positions, (position, index) => {
                  return openBlock(), createBlock(unref(_sfc_main$u), {
                    key: index,
                    class: {
                      "pb-0 text-muted-foreground ": true,
                      "pb-4": index === positions.length - 1
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(position), 1),
                      index < positions.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128)),
                createVNode(unref(_sfc_main$z), { class: "space-x-4 mt-auto" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(socialNetworks, ({ name, url }) => {
                      return openBlock(), createBlock("a", {
                        key: "name",
                        href: url,
                        target: "_blank",
                        class: "hover:opacity-80 transition-all",
                        "aria-label": `Visit our ${name} page`
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(socialIcon(name))))
                      ], 8, ["href", "aria-label"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Team.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "icon icon-tabler icons-tabler-filled icon-tabler-brand-discord"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/icons/DiscordIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const DiscordIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Community",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))}><hr class="border-border"><div class="py-20 sm:py-20"><div class="lg:w-[60%] mx-auto">`);
      _push(ssrRenderComponent(unref(_sfc_main$r), { class: "bg-background shadow-none text-center flex flex-col items-center justify-center border-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$s), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$t), { class: "text-4xl md:text-5xl font-bold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(DiscordIcon), { class: "w-20 h-20 m-auto mb-4" }, null), _parent4, _scopeId3);
                        _push4(` Ready to join this <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"${_scopeId3}> Community? </span>`);
                      } else {
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(DiscordIcon), { class: "w-20 h-20 m-auto mb-4" })),
                          createTextVNode(" Ready to join this "),
                          createVNode("span", { class: "text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text" }, " Community? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$t), { class: "text-4xl md:text-5xl font-bold" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(DiscordIcon), { class: "w-20 h-20 m-auto mb-4" })),
                        createTextVNode(" Ready to join this "),
                        createVNode("span", { class: "text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text" }, " Community? ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$u), { class: "lg:w-[80%] text-xl text-muted-foreground" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Join our vibrant Discord community! Connect, share, and grow with like-minded enthusiasts. Click to dive in! 🚀 `);
                } else {
                  return [
                    createTextVNode(" Join our vibrant Discord community! Connect, share, and grow with like-minded enthusiasts. Click to dive in! 🚀 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$z), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$q), { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a href="https://discord.com/" target="_blank"${_scopeId3}> Join Discord </a>`);
                      } else {
                        return [
                          createVNode("a", {
                            href: "https://discord.com/",
                            target: "_blank"
                          }, " Join Discord ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$q), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "https://discord.com/",
                          target: "_blank"
                        }, " Join Discord ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$s), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$t), { class: "text-4xl md:text-5xl font-bold" }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(DiscordIcon), { class: "w-20 h-20 m-auto mb-4" })),
                      createTextVNode(" Ready to join this "),
                      createVNode("span", { class: "text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text" }, " Community? ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$u), { class: "lg:w-[80%] text-xl text-muted-foreground" }, {
                default: withCtx(() => [
                  createTextVNode(" Join our vibrant Discord community! Connect, share, and grow with like-minded enthusiasts. Click to dive in! 🚀 ")
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$z), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$q), { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: "https://discord.com/",
                        target: "_blank"
                      }, " Join Discord ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><hr class="border-border"></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Community.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var PopularPlan = /* @__PURE__ */ ((PopularPlan2) => {
  PopularPlan2[PopularPlan2["NO"] = 0] = "NO";
  PopularPlan2[PopularPlan2["YES"] = 1] = "YES";
  return PopularPlan2;
})(PopularPlan || {});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const plans = [
      {
        title: "Free",
        popular: 0,
        price: 0,
        description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Start Free Trial",
        benefitList: [
          "1 team member",
          "1 GB storage",
          "Upto 2 pages",
          "Community support",
          "AI assistance"
        ]
      },
      {
        title: "Premium",
        popular: 1,
        price: 45,
        description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Get starterd",
        benefitList: [
          "4 team member",
          "8 GB storage",
          "Upto 6 pages",
          "Priority support",
          "AI assistance"
        ]
      },
      {
        title: "Enterprise",
        popular: 0,
        price: 120,
        description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Contact US",
        benefitList: [
          "10 team member",
          "20 GB storage",
          "Upto 10 pages",
          "Phone & email support",
          "AI assistance"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-[90%] 2xl:w-[75%] mx-auto py-24 sm:py-32" }, _attrs))}><h2 class="text-lg text-primary text-center mb-2 tracking-wider"> Pricing </h2><h2 class="text-3xl md:text-4xl text-center font-bold mb-4"> Get unlimitted access </h2><h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14"> Lorem ipsum dolor sit amet consectetur adipisicing reiciendis. </h3><div class="grid lg:grid-cols-3 gap-8 lg:gap-4"><!--[-->`);
      ssrRenderList(plans, ({
        title,
        popular,
        price,
        description,
        buttonText,
        benefitList
      }) => {
        _push(ssrRenderComponent(unref(_sfc_main$r), {
          key: title,
          class: [
            "md:w-[60%] mx-auto lg:w-full ",
            {
              "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]": popular === PopularPlan?.YES
            }
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$s), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$t), { class: "pb-2 text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$v), { class: "pb-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(description)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(description), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><span class="text-3xl font-bold"${_scopeId2}>$${ssrInterpolate(price)}</span><span class="text-muted-foreground"${_scopeId2}> /month</span></div>`);
                  } else {
                    return [
                      createVNode(unref(_sfc_main$t), { class: "pb-2 text-2xl font-semibold leading-none tracking-tight" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$v), { class: "pb-4" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(description), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", null, [
                        createVNode("span", { class: "text-3xl font-bold" }, "$" + toDisplayString(price), 1),
                        createVNode("span", { class: "text-muted-foreground" }, " /month")
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$u), { class: "flex" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(benefitList, (benefit) => {
                      _push3(`<span class="flex"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Check), { class: "text-primary mr-2" }, null, _parent3, _scopeId2));
                      _push3(`<h3${_scopeId2}>${ssrInterpolate(benefit)}</h3></span>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(benefitList, (benefit) => {
                          return openBlock(), createBlock("span", {
                            key: benefit,
                            class: "flex"
                          }, [
                            createVNode(unref(Check), { class: "text-primary mr-2" }),
                            createVNode("h3", null, toDisplayString(benefit), 1)
                          ]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$z), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$q), {
                      variant: popular === PopularPlan?.NO ? "secondary" : "default",
                      class: "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(buttonText)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(buttonText), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$q), {
                        variant: popular === PopularPlan?.NO ? "secondary" : "default",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(buttonText), 1)
                        ]),
                        _: 2
                      }, 1032, ["variant"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$s), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$t), { class: "pb-2 text-2xl font-semibold leading-none tracking-tight" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$v), { class: "pb-4" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(description), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", null, [
                      createVNode("span", { class: "text-3xl font-bold" }, "$" + toDisplayString(price), 1),
                      createVNode("span", { class: "text-muted-foreground" }, " /month")
                    ])
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(_sfc_main$u), { class: "flex" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(benefitList, (benefit) => {
                        return openBlock(), createBlock("span", {
                          key: benefit,
                          class: "flex"
                        }, [
                          createVNode(unref(Check), { class: "text-primary mr-2" }),
                          createVNode("h3", null, toDisplayString(benefit), 1)
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1024),
                createVNode(unref(_sfc_main$z), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$q), {
                      variant: popular === PopularPlan?.NO ? "secondary" : "default",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(buttonText), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pricing.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    collapsible: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    dir: { type: String, required: false },
    orientation: { type: String, required: false },
    unmountOnHide: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    type: { type: String, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/accordion/Accordion.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AccordionContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionContent), mergeProps(unref(delegatedProps), { class: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(cn)("pb-4 pt-0", props.class))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(cn)("pb-4 pt-0", props.class)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/accordion/AccordionContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, required: false },
    value: { type: String, required: true },
    unmountOnHide: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)("border-b", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/accordion/AccordionItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AccordionTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionHeader), mergeProps({ class: "flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(AccordionTrigger), mergeProps(unref(delegatedProps), {
              class: unref(cn)(
                "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    _push3(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "icon", {}, () => [
                      createVNode(unref(ChevronDown), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(AccordionTrigger), mergeProps(unref(delegatedProps), {
                class: unref(cn)(
                  "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(unref(ChevronDown), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
                  ])
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/accordion/AccordionTrigger.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FAQ",
  __ssrInlineRender: true,
  props: {
    faqs: {},
    title: {},
    subtitle: {}
  },
  setup(__props) {
    const props = __props;
    const fallbackFaqs = [
      { question: "Is this template free?", answer: "Yes. It is a free Shadcn/Vue template.", value: "item-1" },
      { question: "Duis aute irure dolor in reprehenderit in voluptate velit?", answer: "Lorem ipsum dolor sit amet...", value: "item-2" },
      { question: "Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?", answer: "Lorem ipsum dolor sit amet consectetur...", value: "item-3" },
      { question: "Excepteur sint occaecat cupidata non proident sunt?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", value: "item-4" },
      { question: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?", answer: "consectetur adipisicing elit. Sint labore.", value: "item-5" }
    ];
    const faqItems = computed(
      () => (props.faqs?.length ? props.faqs : fallbackFaqs).map((f, idx) => ({
        ...f,
        _value: f.value ?? `item-${f.id ?? idx + 1}`
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "mx-auto w-[90%] md:w-[700px] py-24 sm:py-32"
      }, _attrs))}><div class="text-center mb-8"><h2 class="text-lg text-primary text-center mb-2 tracking-wider">${ssrInterpolate(_ctx.subtitle ?? "FAQS")}</h2><h2 class="text-3xl md:text-4xl text-center font-bold">${ssrInterpolate(_ctx.title ?? "Common Questions")}</h2></div>`);
      if (faqItems.value.length) {
        _push(ssrRenderComponent(unref(_sfc_main$5), {
          type: "single",
          collapsible: "",
          class: "AccordionRoot"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(faqItems.value, (faq) => {
                _push2(ssrRenderComponent(unref(_sfc_main$3), {
                  key: faq._value,
                  value: faq._value,
                  class: "px-4 my-4 border border-border rounded-lg bg-card"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "text-left font-medium text-base" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(faq.question)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(faq.question), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "text-muted-foreground font-medium text-base" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(_sfc_main$2), { class: "text-left font-medium text-base" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(faq.question), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$4), {
                          class: "text-muted-foreground font-medium text-base",
                          innerHTML: faq.answer
                        }, null, 8, ["innerHTML"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(faqItems.value, (faq) => {
                  return openBlock(), createBlock(unref(_sfc_main$3), {
                    key: faq._value,
                    value: faq._value,
                    class: "px-4 my-4 border border-border rounded-lg bg-card"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), { class: "text-left font-medium text-base" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(faq.question), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$4), {
                        class: "text-muted-foreground font-medium text-base",
                        innerHTML: faq.answer
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="text-center text-muted-foreground"> We’ll add FAQs soon. </div>`);
      }
      _push(`<h3 class="font-medium mt-4"> Still have questions? <a href="#" class="text-muted-foreground underline">Contact us</a></h3></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FAQ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    faqs: {},
    seo: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$A, { seo: _ctx.seo }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$B, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$n, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$m, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$l, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$j, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$d, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { faqs: _ctx.faqs }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$o),
              createVNode(_sfc_main$n),
              createVNode(_sfc_main$m),
              createVNode(_sfc_main$l),
              createVNode(_sfc_main$k),
              createVNode(_sfc_main$j),
              createVNode(_sfc_main$d),
              createVNode(_sfc_main$9),
              createVNode(_sfc_main$7),
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$1, { faqs: _ctx.faqs }, null, 8, ["faqs"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
