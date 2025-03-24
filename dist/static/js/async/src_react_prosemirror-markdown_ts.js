"use strict";
(self['webpackChunkminecraft_web_client'] = self['webpackChunkminecraft_web_client'] || []).push([["src_react_prosemirror-markdown_ts"], {
"./src/react/prosemirror-markdown.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProseMirrorView: function() { return ProseMirrorView; }
});
/* harmony import */var core_js_modules_esnext_async_iterator_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.async-iterator.filter.js");
/* harmony import */var core_js_modules_esnext_async_iterator_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_async_iterator_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */var prosemirror_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/.pnpm/prosemirror-view@1.33.1/node_modules/prosemirror-view/dist/index.js");
/* harmony import */var prosemirror_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js");
/* harmony import */var prosemirror_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/.pnpm/prosemirror-markdown@1.12.0/node_modules/prosemirror-markdown/dist/index.js");
/* harmony import */var prosemirror_example_setup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/.pnpm/prosemirror-example-setup@1.2.2/node_modules/prosemirror-example-setup/dist/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.0-beta.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");







class ProseMirrorView {
    constructor(target, content){
        console.log('schema.marks', prosemirror_markdown__WEBPACK_IMPORTED_MODULE_3__.schema.marks);
        //@ts-expect-error
        prosemirror_markdown__WEBPACK_IMPORTED_MODULE_3__.schema.marks.textColor = {
            spec: {
                attrs: {
                    color: {}
                },
                inline: true,
                parseDOM: [
                    {
                        style: 'color',
                        getAttrs: (value)=>({
                                color: value
                            })
                    }
                ],
                toDOM: (mark)=>[
                        'span',
                        {
                            style: `color: ${mark.attrs.color}`
                        },
                        0
                    ]
            }
        };
        const fullMenu = (0,prosemirror_example_setup__WEBPACK_IMPORTED_MODULE_4__.buildMenuItems)(prosemirror_markdown__WEBPACK_IMPORTED_MODULE_3__.schema).fullMenu;
        fullMenu[0] = fullMenu[0].filter((item)=>item.spec.title !== 'Add or remove link' && item.spec.title !== 'Toggle code font');
        fullMenu.splice(3, 1);
        // remove the insert list, quote & checkbox menu
        fullMenu[1][0].options.label = 'Color';
        // check-build error: fullMenu[1][0].options.label = 'Color'
        // fullMenu[1][0].content[0].spec.label = 'Red'
        // fullMenu[1][0].content[0].spec.run = (state, dispatch, view) => {
        // console.log('state', state)
        // // make <p style="color: red">...</p>
        // const { from, to } = state.selection
        // const { tr } = state
        // console.log(schema.marks)
        // tr.addMark(from, to, schema.marks.textColor.create({ color: 'red' }))
        // dispatch(tr)
        //   toggleMark(schema.marks.textColor, { color: 'red' })(state, dispatch, view)
        // }
        fullMenu[1].splice(1, 1);
        // remove the type menu
        console.log('fullMenu', fullMenu);
        this.view = new prosemirror_view__WEBPACK_IMPORTED_MODULE_5__.EditorView(target, {
            state: prosemirror_state__WEBPACK_IMPORTED_MODULE_6__.EditorState.create({
                doc: prosemirror_markdown__WEBPACK_IMPORTED_MODULE_3__.defaultMarkdownParser.parse(content) ?? undefined,
                plugins: (0,prosemirror_example_setup__WEBPACK_IMPORTED_MODULE_4__.exampleSetup)({
                    schema: prosemirror_markdown__WEBPACK_IMPORTED_MODULE_3__.schema,
                    menuContent: fullMenu
                })
            }),
            attributes (state) {
                return {
                    autocorrect: 'off',
                    autocapitalize: 'off',
                    spellcheck: 'false',
                    autofocus: 'true'
                };
            }
        });
    }
    get content() {
        const content = prosemirror_markdown__WEBPACK_IMPORTED_MODULE_3__.defaultMarkdownSerializer.serialize(this.view.state.doc);
        console.log('content', content);
        return content;
    }
    focus() {
        this.view.focus();
    }
    destroy() {
        this.view.destroy();
    }
}

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=src_react_prosemirror-markdown_ts.js.map