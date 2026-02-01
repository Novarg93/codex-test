import { defineComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5, e as _sfc_main$6 } from "./BreadcrumbSeparator-DbiA9_uT.js";
import "clsx";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    game: {},
    category: {},
    product: {}
  },
  setup(__props) {
    const props = __props;
    const { game, category, product } = props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$1), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          href: _ctx.route?.("games.index") ?? "/games"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Games`);
                            } else {
                              return [
                                createTextVNode("Games")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), {
                            href: _ctx.route?.("games.index") ?? "/games"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Games")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          href: _ctx.route("games.show", unref(game).slug),
                          class: "hover:underline"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(game).name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(game).name), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), {
                            href: _ctx.route("games.show", unref(game).slug),
                            class: "hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(game).name), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(category)) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$4), {
                            href: _ctx.route("categories.show", [unref(game).slug, unref(category).slug]),
                            class: "hover:underline"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(category).name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(category).name), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$4), {
                              href: _ctx.route("categories.show", [unref(game).slug, unref(category).slug]),
                              class: "hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(category).name), 1)
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(product)) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$6), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(product).name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(product).name), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$6), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(product).name), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), {
                          href: _ctx.route?.("games.index") ?? "/games"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Games")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5)),
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), {
                          href: _ctx.route("games.show", unref(game).slug),
                          class: "hover:underline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(game).name), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }),
                    unref(category) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(unref(_sfc_main$5)),
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), {
                            href: _ctx.route("categories.show", [unref(game).slug, unref(category).slug]),
                            class: "hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(category).name), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true),
                    unref(product) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(unref(_sfc_main$5)),
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(product).name), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 64)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4), {
                        href: _ctx.route?.("games.index") ?? "/games"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Games")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5)),
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4), {
                        href: _ctx.route("games.show", unref(game).slug),
                        class: "hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(game).name), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  }),
                  unref(category) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(unref(_sfc_main$5)),
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), {
                          href: _ctx.route("categories.show", [unref(game).slug, unref(category).slug]),
                          class: "hover:underline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(category).name), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    })
                  ], 64)) : createCommentVNode("", true),
                  unref(product) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(unref(_sfc_main$5)),
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(product).name), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ], 64)) : createCommentVNode("", true)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
