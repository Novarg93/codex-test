import { defineComponent, ref, computed, watch, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$a } from "./DefaultLayout-CLBo7IEt.js";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Input-TWcjNfes.js";
import { _ as _sfc_main$b } from "./Pagination-TMWdyutP.js";
import { Star } from "lucide-vue-next";
import { _ as _sfc_main$1 } from "./SeoHead-CQ0qjzaG.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7, d as _sfc_main$8, e as _sfc_main$9 } from "./SelectValue-DdNZds6K.js";
import "clsx";
import "axios";
import "reka-ui";
import "@vueuse/core";
import "tailwind-merge";
import "vaul-vue";
import "vue-sonner";
import "class-variance-authority";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    filters: {},
    games: {},
    reviews: {},
    stats: {},
    highlights: {},
    seo: {}
  },
  setup(__props) {
    const props = __props;
    const ratingLocal = ref(props.filters.rating?.toString() ?? "");
    const productLocal = ref(props.filters.product ?? "");
    const totalAll = computed(() => Number(props.stats?.total ?? 0));
    const avgAll = computed(() => Number(props.stats?.avg ?? 0));
    function pct(star) {
      const c = Number(props.stats?.dist?.[star] ?? 0);
      const t = totalAll.value || 1;
      return Math.round(c / t * 100);
    }
    function stars(n) {
      const v = Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
      return Array.from({ length: 5 }, (_, i) => i < v);
    }
    const gameSelectedId = ref("__all__");
    watch(
      () => props.filters.game,
      (name) => {
        if (!name) {
          gameSelectedId.value = "__all__";
          return;
        }
        const g = props.games.find((x) => x.name === name);
        gameSelectedId.value = g ? String(g.id) : "__all__";
      },
      { immediate: true }
    );
    const selectedGameName = computed(() => {
      if (!gameSelectedId.value) return null;
      if (gameSelectedId.value === "__all__") return null;
      const id = Number(gameSelectedId.value);
      const g = props.games.find((x) => x.id === id);
      return g?.name ?? null;
    });
    function apply() {
      router.get(
        route("reviews.public"),
        {
          rating: ratingLocal.value ? Number(ratingLocal.value) : null,
          game: selectedGameName.value,
          product: productLocal.value.trim() || null
        },
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    }
    function cancelFilters() {
      ratingLocal.value = "";
      productLocal.value = "";
      gameSelectedId.value = "__all__";
      router.get(
        route("reviews.public"),
        { preserveScroll: true, preserveState: true }
      );
    }
    function formatDateShort(value) {
      if (!value) return "";
      const isoLike = value.replace(" ", "T");
      const d = new Date(isoLike);
      if (Number.isNaN(d.getTime())) return value;
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }).format(d);
    }
    function relativeTime(value) {
      if (!value) return "";
      const isoLike = value.replace(" ", "T");
      const d = new Date(isoLike);
      if (Number.isNaN(d.getTime())) return "";
      const now = /* @__PURE__ */ new Date();
      let diffMs = now.getTime() - d.getTime();
      if (diffMs < 0) diffMs = 0;
      const dayMs = 24 * 60 * 60 * 1e3;
      const days = Math.floor(diffMs / dayMs);
      if (days <= 0) return "Today";
      if (days === 1) return "1 day ago";
      if (days < 7) return `${days} days ago`;
      const weeks = Math.floor(days / 7);
      if (weeks === 1) return "1 week ago";
      if (weeks < 5) return `${weeks} weeks ago`;
      const months = Math.floor(days / 30);
      if (months <= 11) return months === 1 ? "1 month ago" : `${months} months ago`;
      const years = Math.floor(days / 365);
      return years <= 1 ? "1+ years ago" : `${years}+ years ago`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        seo: props.seo
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-[90%] 2xl:w-[75%] mx-auto py-8"${_scopeId}><div class="flex items-end justify-between gap-4 mb-6"${_scopeId}><div${_scopeId}><h1 class="text-3xl font-semibold"${_scopeId}>Reviews</h1><div class="text-sm text-muted-foreground mt-1"${_scopeId}>Verified &amp; moderated reviews.</div></div></div><div class="border border-border rounded-xl p-4 mb-6"${_scopeId}><div${_scopeId}><div class="text-xs text-muted-foreground"${_scopeId}>Average rating</div><div class="flex items-center gap-2 mt-1"${_scopeId}><div class="text-3xl font-semibold"${_scopeId}>${ssrInterpolate(avgAll.value.toFixed(1))}</div><div class="flex items-center gap-0.5"${_scopeId}><!--[-->`);
            ssrRenderList(stars(avgAll.value), (on, i) => {
              _push2(ssrRenderComponent(unref(Star), {
                key: i,
                class: ["h-4 w-4", on ? "text-primary fill-primary" : "text-muted-foreground/40"]
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="text-xs text-muted-foreground mt-1"${_scopeId}>${ssrInterpolate(totalAll.value.toLocaleString("en-US"))} total reviews </div></div><div class="flex items-start gap-4 md:items-stretch"${_scopeId}><div class="w-full md:w-[420px] space-y-2 mt-4 self-stretch"${_scopeId}><!--[-->`);
            ssrRenderList([5, 4, 3, 2, 1], (star) => {
              _push2(`<div class="flex items-center gap-3"${_scopeId}><div class="w-14 text-xs text-muted-foreground"${_scopeId}>${ssrInterpolate(star)}-star</div><div class="flex-1 h-2 rounded-full bg-muted overflow-hidden"${_scopeId}><div class="h-full bg-primary" style="${ssrRenderStyle({ width: `${pct(star)}%`, minWidth: pct(star) > 0 ? "10px" : "0px" })}"${_scopeId}></div></div><div class="w-12 text-right text-xs text-muted-foreground"${_scopeId}>`);
              if (pct(star) === 0) {
                _push2(`<span${_scopeId}>0%</span>`);
              } else if (pct(star) < 1) {
                _push2(`<span${_scopeId}>&lt;1%</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(pct(star))}%</span>`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="grid w-full md:grid-cols-2 gap-4 h-full self-stretch"${_scopeId}><div class="border border-border rounded-xl p-3 h-full flex flex-col"${_scopeId}><div class="text-sm font-semibold"${_scopeId}>Most reviewed product</div>`);
            if (_ctx.highlights.most_reviewed) {
              _push2(`<div class="mt-3 flex items-center gap-3"${_scopeId}>`);
              if (_ctx.highlights.most_reviewed.image_url) {
                _push2(`<img${ssrRenderAttr("src", _ctx.highlights.most_reviewed.image_url)} class="w-12 h-12 rounded-lg object-cover border border-border"${ssrRenderAttr("alt", _ctx.highlights.most_reviewed.name ?? "")}${_scopeId}>`);
              } else {
                _push2(`<div class="w-12 h-12 rounded-lg bg-muted border border-border"${_scopeId}></div>`);
              }
              _push2(`<div class="min-w-0"${_scopeId}><div class="font-medium truncate"${_scopeId}>${ssrInterpolate(_ctx.highlights.most_reviewed.name ?? "—")}</div><div class="text-xs text-muted-foreground"${_scopeId}>${ssrInterpolate(_ctx.highlights.most_reviewed.count)} reviews </div></div></div>`);
            } else {
              _push2(`<div class="mt-2 text-sm text-muted-foreground"${_scopeId}> Not enough data yet. </div>`);
            }
            _push2(`<div class="mt-auto pt-3 text-[11px] text-muted-foreground/70"${_scopeId}> Based on approved reviews. </div></div><div class="border border-border rounded-xl p-3 h-full flex flex-col"${_scopeId}><div class="text-sm font-semibold"${_scopeId}>Highest score product</div>`);
            if (_ctx.highlights.highest_rated) {
              _push2(`<div class="mt-3 flex items-center gap-3"${_scopeId}>`);
              if (_ctx.highlights.highest_rated.image_url) {
                _push2(`<img${ssrRenderAttr("src", _ctx.highlights.highest_rated.image_url)} class="w-12 h-12 rounded-lg object-cover border border-border"${ssrRenderAttr("alt", _ctx.highlights.highest_rated.name ?? "")}${_scopeId}>`);
              } else {
                _push2(`<div class="w-12 h-12 rounded-lg bg-muted border border-border"${_scopeId}></div>`);
              }
              _push2(`<div class="min-w-0"${_scopeId}><div class="font-medium truncate"${_scopeId}>${ssrInterpolate(_ctx.highlights.highest_rated.name ?? "—")}</div><div class="flex items-center gap-2 text-xs text-muted-foreground mt-1"${_scopeId}><div class="flex items-center gap-0.5"${_scopeId}><!--[-->`);
              ssrRenderList(stars(_ctx.highlights.highest_rated.avg), (on, i) => {
                _push2(ssrRenderComponent(unref(Star), {
                  key: i,
                  class: ["h-4 w-4", on ? "text-primary fill-primary" : "text-muted-foreground/40"]
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><span${_scopeId}>${ssrInterpolate(Number(_ctx.highlights.highest_rated.avg).toFixed(1))}</span><span${_scopeId}>·</span><span${_scopeId}>${ssrInterpolate(_ctx.highlights.highest_rated.count)} reviews</span></div></div></div>`);
            } else {
              _push2(`<div class="mt-2 text-sm text-muted-foreground"${_scopeId}> Need at least ${ssrInterpolate(_ctx.highlights.highest_rated?.min_reviews ?? 5)} reviews for a product. </div>`);
            }
            _push2(`<div class="mt-auto pt-3 text-[11px] text-muted-foreground/70"${_scopeId}> Minimum ${ssrInterpolate(_ctx.highlights.highest_rated?.min_reviews ?? 5)} reviews required. </div></div></div></div></div><div class="border border-border rounded-xl p-4 mb-6"${_scopeId}><form class="grid md:grid-cols-3 gap-3"${_scopeId}><div${_scopeId}><div class="text-xs text-muted-foreground mb-1"${_scopeId}>Rating (1–5)</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              type: "number",
              min: "1",
              max: "5",
              modelValue: ratingLocal.value,
              "onUpdate:modelValue": ($event) => ratingLocal.value = $event,
              placeholder: "e.g. 5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="text-xs text-muted-foreground mb-1"${_scopeId}>Game</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              modelValue: gameSelectedId.value,
              "onUpdate:modelValue": ($event) => gameSelectedId.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { placeholder: "Select a game…" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { placeholder: "Select a game…" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "max-h-[320px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$8), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9), { value: "__all__" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`All games`);
                                  } else {
                                    return [
                                      createTextVNode("All games")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(_ctx.games, (g) => {
                                _push5(ssrRenderComponent(unref(_sfc_main$9), {
                                  key: g.id,
                                  value: String(g.id)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="flex items-center gap-2"${_scopeId5}>`);
                                      if (g.image_url) {
                                        _push6(`<img${ssrRenderAttr("src", g.image_url)} class="w-5 h-5 rounded object-cover"${ssrRenderAttr("alt", g.name)}${_scopeId5}>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`<span class="truncate"${_scopeId5}>${ssrInterpolate(g.name)}</span></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          g.image_url ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: g.image_url,
                                            class: "w-5 h-5 rounded object-cover",
                                            alt: g.name
                                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                          createVNode("span", { class: "truncate" }, toDisplayString(g.name), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                createVNode(unref(_sfc_main$9), { value: "__all__" }, {
                                  default: withCtx(() => [
                                    createTextVNode("All games")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.games, (g) => {
                                  return openBlock(), createBlock(unref(_sfc_main$9), {
                                    key: g.id,
                                    value: String(g.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        g.image_url ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: g.image_url,
                                          class: "w-5 h-5 rounded object-cover",
                                          alt: g.name
                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                        createVNode("span", { class: "truncate" }, toDisplayString(g.name), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$8), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$9), { value: "__all__" }, {
                                default: withCtx(() => [
                                  createTextVNode("All games")
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.games, (g) => {
                                return openBlock(), createBlock(unref(_sfc_main$9), {
                                  key: g.id,
                                  value: String(g.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      g.image_url ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: g.image_url,
                                        class: "w-5 h-5 rounded object-cover",
                                        alt: g.name
                                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                      createVNode("span", { class: "truncate" }, toDisplayString(g.name), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { placeholder: "Select a game…" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "max-h-[320px]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$8), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$9), { value: "__all__" }, {
                              default: withCtx(() => [
                                createTextVNode("All games")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.games, (g) => {
                              return openBlock(), createBlock(unref(_sfc_main$9), {
                                key: g.id,
                                value: String(g.id)
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    g.image_url ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: g.image_url,
                                      class: "w-5 h-5 rounded object-cover",
                                      alt: g.name
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                    createVNode("span", { class: "truncate" }, toDisplayString(g.name), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
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
            }, _parent2, _scopeId));
            _push2(`<div class="text-[11px] text-muted-foreground mt-1"${_scopeId}>Pick from existing games.</div></div><div${_scopeId}><div class="text-xs text-muted-foreground mb-1"${_scopeId}>Product</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              modelValue: productLocal.value,
              "onUpdate:modelValue": ($event) => productLocal.value = $event,
              placeholder: "Type product name…"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="md:col-span-3 flex gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$a), { type: "submit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Apply filters`);
                } else {
                  return [
                    createTextVNode("Apply filters")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$a), {
              type: "button",
              variant: "secondary",
              onClick: cancelFilters
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div><div class="grid grid-cols-2 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.reviews.data, (r) => {
              _push2(`<div class="border border-border rounded-xl p-4"${_scopeId}><div class="flex items-start justify-between gap-4"${_scopeId}><div class="flex items-start gap-3"${_scopeId}>`);
              if (r.avatar_url) {
                _push2(`<img${ssrRenderAttr("src", r.avatar_url)} class="w-10 h-10 rounded-full object-cover"${ssrRenderAttr("alt", r.display_name ?? "User")}${_scopeId}>`);
              } else {
                _push2(`<div class="w-10 h-10 rounded-full bg-muted"${_scopeId}></div>`);
              }
              _push2(`<div${_scopeId}><div class="font-semibold"${_scopeId}>${ssrInterpolate(r.display_name ?? "Verified customer")}</div><div class="flex items-center gap-2 text-xs text-muted-foreground"${_scopeId}><div class="flex items-center gap-0.5"${_scopeId}><!--[-->`);
              ssrRenderList(stars(r.rating), (on, i) => {
                _push2(ssrRenderComponent(unref(Star), {
                  key: i,
                  class: ["h-4 w-4", on ? "text-primary fill-primary" : "text-muted-foreground/40"]
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
              if (r.published_at) {
                _push2(`<span${_scopeId}>· ${ssrInterpolate(formatDateShort(r.published_at))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
              if (r.published_at) {
                _push2(`<div class="text-xs whitespace-nowrap rounded-full border border-border bg-muted px-2 py-1 text-muted-foreground"${_scopeId}>${ssrInterpolate(relativeTime(r.published_at))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mt-3 whitespace-pre-line"${_scopeId}>${ssrInterpolate(r.body)}</div><div class="mt-4 pt-3 border-t border-border flex items-center gap-3 text-sm text-muted-foreground"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              if (r.game?.image_url) {
                _push2(`<img${ssrRenderAttr("src", r.game.image_url)} class="w-6 h-6 rounded object-cover"${ssrRenderAttr("alt", r.game?.name ?? "")}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${ssrInterpolate(r.game?.name ?? "—")}</span></div><div class="flex items-center gap-2"${_scopeId}>`);
              if (r.product?.image_url) {
                _push2(`<img${ssrRenderAttr("src", r.product.image_url)} class="w-6 h-6 rounded object-cover"${ssrRenderAttr("alt", r.product?.name ?? "")}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${ssrInterpolate(r.product?.name ?? "—")}</span></div></div></div>`);
            });
            _push2(`<!--]--></div><div class="mt-6 text-sm text-muted-foreground"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              links: _ctx.reviews.links
            }, null, _parent2, _scopeId));
            _push2(`</div></section>`);
          } else {
            return [
              createVNode("section", { class: "w-[90%] 2xl:w-[75%] mx-auto py-8" }, [
                createVNode("div", { class: "flex items-end justify-between gap-4 mb-6" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-3xl font-semibold" }, "Reviews"),
                    createVNode("div", { class: "text-sm text-muted-foreground mt-1" }, "Verified & moderated reviews.")
                  ])
                ]),
                createVNode("div", { class: "border border-border rounded-xl p-4 mb-6" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xs text-muted-foreground" }, "Average rating"),
                    createVNode("div", { class: "flex items-center gap-2 mt-1" }, [
                      createVNode("div", { class: "text-3xl font-semibold" }, toDisplayString(avgAll.value.toFixed(1)), 1),
                      createVNode("div", { class: "flex items-center gap-0.5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(stars(avgAll.value), (on, i) => {
                          return openBlock(), createBlock(unref(Star), {
                            key: i,
                            class: ["h-4 w-4", on ? "text-primary fill-primary" : "text-muted-foreground/40"]
                          }, null, 8, ["class"]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, toDisplayString(totalAll.value.toLocaleString("en-US")) + " total reviews ", 1)
                  ]),
                  createVNode("div", { class: "flex items-start gap-4 md:items-stretch" }, [
                    createVNode("div", { class: "w-full md:w-[420px] space-y-2 mt-4 self-stretch" }, [
                      (openBlock(), createBlock(Fragment, null, renderList([5, 4, 3, 2, 1], (star) => {
                        return createVNode("div", {
                          key: star,
                          class: "flex items-center gap-3"
                        }, [
                          createVNode("div", { class: "w-14 text-xs text-muted-foreground" }, toDisplayString(star) + "-star", 1),
                          createVNode("div", { class: "flex-1 h-2 rounded-full bg-muted overflow-hidden" }, [
                            createVNode("div", {
                              class: "h-full bg-primary",
                              style: { width: `${pct(star)}%`, minWidth: pct(star) > 0 ? "10px" : "0px" }
                            }, null, 4)
                          ]),
                          createVNode("div", { class: "w-12 text-right text-xs text-muted-foreground" }, [
                            pct(star) === 0 ? (openBlock(), createBlock("span", { key: 0 }, "0%")) : pct(star) < 1 ? (openBlock(), createBlock("span", { key: 1 }, "<1%")) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(pct(star)) + "%", 1))
                          ])
                        ]);
                      }), 64))
                    ]),
                    createVNode("div", { class: "grid w-full md:grid-cols-2 gap-4 h-full self-stretch" }, [
                      createVNode("div", { class: "border border-border rounded-xl p-3 h-full flex flex-col" }, [
                        createVNode("div", { class: "text-sm font-semibold" }, "Most reviewed product"),
                        _ctx.highlights.most_reviewed ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-3 flex items-center gap-3"
                        }, [
                          _ctx.highlights.most_reviewed.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: _ctx.highlights.most_reviewed.image_url,
                            class: "w-12 h-12 rounded-lg object-cover border border-border",
                            alt: _ctx.highlights.most_reviewed.name ?? ""
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-12 h-12 rounded-lg bg-muted border border-border"
                          })),
                          createVNode("div", { class: "min-w-0" }, [
                            createVNode("div", { class: "font-medium truncate" }, toDisplayString(_ctx.highlights.most_reviewed.name ?? "—"), 1),
                            createVNode("div", { class: "text-xs text-muted-foreground" }, toDisplayString(_ctx.highlights.most_reviewed.count) + " reviews ", 1)
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "mt-2 text-sm text-muted-foreground"
                        }, " Not enough data yet. ")),
                        createVNode("div", { class: "mt-auto pt-3 text-[11px] text-muted-foreground/70" }, " Based on approved reviews. ")
                      ]),
                      createVNode("div", { class: "border border-border rounded-xl p-3 h-full flex flex-col" }, [
                        createVNode("div", { class: "text-sm font-semibold" }, "Highest score product"),
                        _ctx.highlights.highest_rated ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-3 flex items-center gap-3"
                        }, [
                          _ctx.highlights.highest_rated.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: _ctx.highlights.highest_rated.image_url,
                            class: "w-12 h-12 rounded-lg object-cover border border-border",
                            alt: _ctx.highlights.highest_rated.name ?? ""
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-12 h-12 rounded-lg bg-muted border border-border"
                          })),
                          createVNode("div", { class: "min-w-0" }, [
                            createVNode("div", { class: "font-medium truncate" }, toDisplayString(_ctx.highlights.highest_rated.name ?? "—"), 1),
                            createVNode("div", { class: "flex items-center gap-2 text-xs text-muted-foreground mt-1" }, [
                              createVNode("div", { class: "flex items-center gap-0.5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(stars(_ctx.highlights.highest_rated.avg), (on, i) => {
                                  return openBlock(), createBlock(unref(Star), {
                                    key: i,
                                    class: ["h-4 w-4", on ? "text-primary fill-primary" : "text-muted-foreground/40"]
                                  }, null, 8, ["class"]);
                                }), 128))
                              ]),
                              createVNode("span", null, toDisplayString(Number(_ctx.highlights.highest_rated.avg).toFixed(1)), 1),
                              createVNode("span", null, "·"),
                              createVNode("span", null, toDisplayString(_ctx.highlights.highest_rated.count) + " reviews", 1)
                            ])
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "mt-2 text-sm text-muted-foreground"
                        }, " Need at least " + toDisplayString(_ctx.highlights.highest_rated?.min_reviews ?? 5) + " reviews for a product. ", 1)),
                        createVNode("div", { class: "mt-auto pt-3 text-[11px] text-muted-foreground/70" }, " Minimum " + toDisplayString(_ctx.highlights.highest_rated?.min_reviews ?? 5) + " reviews required. ", 1)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "border border-border rounded-xl p-4 mb-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(apply, ["prevent"]),
                    class: "grid md:grid-cols-3 gap-3"
                  }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-muted-foreground mb-1" }, "Rating (1–5)"),
                      createVNode(unref(_sfc_main$3), {
                        type: "number",
                        min: "1",
                        max: "5",
                        modelValue: ratingLocal.value,
                        "onUpdate:modelValue": ($event) => ratingLocal.value = $event,
                        placeholder: "e.g. 5"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-muted-foreground mb-1" }, "Game"),
                      createVNode(unref(_sfc_main$4), {
                        modelValue: gameSelectedId.value,
                        "onUpdate:modelValue": ($event) => gameSelectedId.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "w-full" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), { placeholder: "Select a game…" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), { class: "max-h-[320px]" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$9), { value: "__all__" }, {
                                    default: withCtx(() => [
                                      createTextVNode("All games")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.games, (g) => {
                                    return openBlock(), createBlock(unref(_sfc_main$9), {
                                      key: g.id,
                                      value: String(g.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          g.image_url ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: g.image_url,
                                            class: "w-5 h-5 rounded object-cover",
                                            alt: g.name
                                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                          createVNode("span", { class: "truncate" }, toDisplayString(g.name), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "text-[11px] text-muted-foreground mt-1" }, "Pick from existing games.")
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-muted-foreground mb-1" }, "Product"),
                      createVNode(unref(_sfc_main$3), {
                        modelValue: productLocal.value,
                        "onUpdate:modelValue": ($event) => productLocal.value = $event,
                        placeholder: "Type product name…"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "md:col-span-3 flex gap-2 pt-2" }, [
                      createVNode(unref(_sfc_main$a), { type: "submit" }, {
                        default: withCtx(() => [
                          createTextVNode("Apply filters")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$a), {
                        type: "button",
                        variant: "secondary",
                        onClick: cancelFilters
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      })
                    ])
                  ], 32)
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.reviews.data, (r) => {
                    return openBlock(), createBlock("div", {
                      key: r.id,
                      class: "border border-border rounded-xl p-4"
                    }, [
                      createVNode("div", { class: "flex items-start justify-between gap-4" }, [
                        createVNode("div", { class: "flex items-start gap-3" }, [
                          r.avatar_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: r.avatar_url,
                            class: "w-10 h-10 rounded-full object-cover",
                            alt: r.display_name ?? "User"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-10 h-10 rounded-full bg-muted"
                          })),
                          createVNode("div", null, [
                            createVNode("div", { class: "font-semibold" }, toDisplayString(r.display_name ?? "Verified customer"), 1),
                            createVNode("div", { class: "flex items-center gap-2 text-xs text-muted-foreground" }, [
                              createVNode("div", { class: "flex items-center gap-0.5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(stars(r.rating), (on, i) => {
                                  return openBlock(), createBlock(unref(Star), {
                                    key: i,
                                    class: ["h-4 w-4", on ? "text-primary fill-primary" : "text-muted-foreground/40"]
                                  }, null, 8, ["class"]);
                                }), 128))
                              ]),
                              r.published_at ? (openBlock(), createBlock("span", { key: 0 }, "· " + toDisplayString(formatDateShort(r.published_at)), 1)) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        r.published_at ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs whitespace-nowrap rounded-full border border-border bg-muted px-2 py-1 text-muted-foreground"
                        }, toDisplayString(relativeTime(r.published_at)), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mt-3 whitespace-pre-line" }, toDisplayString(r.body), 1),
                      createVNode("div", { class: "mt-4 pt-3 border-t border-border flex items-center gap-3 text-sm text-muted-foreground" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          r.game?.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: r.game.image_url,
                            class: "w-6 h-6 rounded object-cover",
                            alt: r.game?.name ?? ""
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                          createVNode("span", null, toDisplayString(r.game?.name ?? "—"), 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          r.product?.image_url ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: r.product.image_url,
                            class: "w-6 h-6 rounded object-cover",
                            alt: r.product?.name ?? ""
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                          createVNode("span", null, toDisplayString(r.product?.name ?? "—"), 1)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "mt-6 text-sm text-muted-foreground" }, [
                  createVNode(_sfc_main$b, {
                    links: _ctx.reviews.links
                  }, null, 8, ["links"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reviews/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
