! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Valine", [], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/dist/", t(t.s = 10)
    }([function (e, t, n) {
        function r(e, t) {
            return new o(t).process(e)
        }
        var i = n(2),
            o = n(13);
        t = e.exports = r, t.FilterCSS = o;
        for (var a in i) t[a] = i[a];
        "undefined" != typeof window && (window.filterCSS = e.exports)
    }, function (e, t) {
        e.exports = {
            indexOf: function (e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            forEach: function (e, t, n) {
                var r, i;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
            },
            trim: function (e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            },
            spaceIndex: function (e) {
                var t = /\s|\n|\t/,
                    n = t.exec(e);
                return n ? n.index : -1
            }
        }
    }, function (e, t) {
        function n() {
            var e = {};
            return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e
        }

        function r(e, t, n) {}

        function i(e, t, n) {}

        function o(e, t) {
            return a.test(t) ? "" : t
        }
        var a = /javascript\s*\:/gim;
        t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = r, t.onIgnoreAttr = i, t.safeAttrValue = o
    }, function (e, t) {
        e.exports = {
            indexOf: function (e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            forEach: function (e, t, n) {
                var r, i;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
            },
            trim: function (e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            },
            trimRight: function (e) {
                return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
            }
        }
    }, function (e, t, n) {
        function r() {
            return {
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "loop", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
            }
        }

        function i(e, t, n) {}

        function o(e, t, n) {}

        function a(e, t, n) {}

        function s(e, t, n) {}

        function l(e) {
            return e.replace(_, "&lt;").replace(T, "&gt;")
        }

        function c(e, t, n, r) {
            if (n = g(n), "href" === t || "src" === t) {
                if ("#" === (n = A.trim(n))) return "#";
                if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "#" !== n[0] && "/" !== n[0]) return ""
            } else if ("background" === t) {
                if (R.lastIndex = 0, R.test(n)) return ""
            } else if ("style" === t) {
                if (I.lastIndex = 0, I.test(n)) return "";
                if (E.lastIndex = 0, E.test(n) && (R.lastIndex = 0, R.test(n))) return "";
                !1 !== r && (r = r || S, n = r.process(n))
            }
            return n = v(n)
        }

        function u(e) {
            return e.replace(z, "&quot;")
        }

        function p(e) {
            return e.replace(L, '"')
        }

        function d(e) {
            return e.replace(C, function (e, t) {
                return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
            })
        }

        function h(e) {
            return e.replace($, ":").replace(q, " ")
        }

        function f(e) {
            for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
            return A.trim(t)
        }

        function g(e) {
            return e = p(e), e = d(e), e = h(e), e = f(e)
        }

        function v(e) {
            return e = u(e), e = l(e)
        }

        function m() {
            return ""
        }

        function b(e, t) {
            function n(t) {
                return !!r || -1 !== A.indexOf(e, t)
            }
            "function" != typeof t && (t = function () {});
            var r = !Array.isArray(e),
                i = [],
                o = !1;
            return {
                onIgnoreTag: function (e, r, a) {
                    if (n(e)) {
                        if (a.isClosing) {
                            var s = "[/removed]",
                                l = a.position + s.length;
                            return i.push([!1 !== o ? o : a.position, l]), o = !1, s
                        }
                        return o || (o = a.position), "[removed]"
                    }
                    return t(e, r, a)
                },
                remove: function (e) {
                    var t = "",
                        n = 0;
                    return A.forEach(i, function (r) {
                        t += e.slice(n, r[0]), n = r[1]
                    }), t += e.slice(n)
                }
            }
        }

        function x(e) {
            return e.replace(j, "")
        }

        function w(e) {
            var t = e.split("");
            return t = t.filter(function (e) {
                var t = e.charCodeAt(0);
                return 127 !== t && (!(t <= 31) || (10 === t || 13 === t))
            }), t.join("")
        }
        var y = n(0).FilterCSS,
            k = n(0).getDefaultWhiteList,
            A = n(1),
            S = new y,
            _ = /</g,
            T = />/g,
            z = /"/g,
            L = /&quot;/g,
            C = /&#([a-zA-Z0-9]*);?/gim,
            $ = /&colon;?/gim,
            q = /&newline;?/gim,
            R = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
            I = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
            E = /u\s*r\s*l\s*\(.*/gi,
            j = /<!--[\s\S]*?-->/g;
        t.whiteList = r(), t.getDefaultWhiteList = r, t.onTag = i, t.onIgnoreTag = o, t.onTagAttr = a, t.onIgnoreTagAttr = s, t.safeAttrValue = c, t.escapeHtml = l, t.escapeQuote = u, t.unescapeQuote = p, t.escapeHtmlEntities = d, t.escapeDangerHtml5Entities = h, t.clearNonPrintableCharacter = f, t.friendlyAttrValue = g, t.escapeAttrValue = v, t.onIgnoreTagStripAll = m, t.StripTagBody = b, t.stripCommentTag = x, t.stripBlankChar = w, t.cssFilter = S, t.getDefaultCSSWhiteList = k
    }, function (e, t, n) {
        function r(e) {
            var t = p.spaceIndex(e);
            if (-1 === t) var n = e.slice(1, -1);
            else var n = e.slice(1, t + 1);
            return n = p.trim(n).toLowerCase(), "/" === n.slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n
        }

        function i(e) {
            return "</" === e.slice(0, 2)
        }

        function o(e, t, n) {
            "user strict";
            var o = "",
                a = 0,
                s = !1,
                l = !1,
                c = 0,
                u = e.length,
                p = "",
                d = "";
            for (c = 0; c < u; c++) {
                var h = e.charAt(c);
                if (!1 === s) {
                    if ("<" === h) {
                        s = c;
                        continue
                    }
                } else if (!1 === l) {
                    if ("<" === h) {
                        o += n(e.slice(a, c)), s = c, a = c;
                        continue
                    }
                    if (">" === h) {
                        o += n(e.slice(a, s)), d = e.slice(s, c + 1), p = r(d), o += t(s, o.length, p, d, i(d)), a = c + 1, s = !1;
                        continue
                    }
                    if (('"' === h || "'" === h) && "=" === e.charAt(c - 1)) {
                        l = h;
                        continue
                    }
                } else if (h === l) {
                    l = !1;
                    continue
                }
            }
            return a < e.length && (o += n(e.substr(a))), o
        }

        function a(e, t) {
            "user strict";

            function n(e, n) {
                if (e = p.trim(e), e = e.replace(d, "").toLowerCase(), !(e.length < 1)) {
                    var r = t(e, n || "");
                    r && i.push(r)
                }
            }
            for (var r = 0, i = [], o = !1, a = e.length, c = 0; c < a; c++) {
                var h, f, g = e.charAt(c);
                if (!1 !== o || "=" !== g)
                    if (!1 === o || c !== r || '"' !== g && "'" !== g || "=" !== e.charAt(c - 1))
                        if (/\s|\n|\t/.test(g)) {
                            if (e = e.replace(/\s|\n|\t/g, " "), !1 === o) {
                                if (-1 === (f = s(e, c))) {
                                    h = p.trim(e.slice(r, c)), n(h), o = !1, r = c + 1;
                                    continue
                                }
                                c = f - 1;
                                continue
                            }
                            if (-1 === (f = l(e, c - 1))) {
                                h = p.trim(e.slice(r, c)), h = u(h), n(o, h), o = !1, r = c + 1;
                                continue
                            }
                        } else;
                else {
                    if (-1 === (f = e.indexOf(g, c + 1))) break;
                    h = p.trim(e.slice(r + 1, f)), n(o, h), o = !1, c = f, r = c + 1
                } else o = e.slice(r, c), r = c + 1
            }
            return r < e.length && (!1 === o ? n(e.slice(r)) : n(o, u(p.trim(e.slice(r))))), p.trim(i.join(" "))
        }

        function s(e, t) {
            for (; t < e.length; t++) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1
            }
        }

        function l(e, t) {
            for (; t > 0; t--) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1
            }
        }

        function c(e) {
            return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]
        }

        function u(e) {
            return c(e) ? e.substr(1, e.length - 2) : e
        }
        var p = n(1),
            d = /[^a-zA-Z0-9_:\.\-]/gim;
        t.parseTag = o, t.parseAttr = a
    }, function (e, t, n) {
        var r;
        ! function (i) {
            "use strict";

            function o(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }

            function a(e, t) {
                return e << t | e >>> 32 - t
            }

            function s(e, t, n, r, i, s) {
                return o(a(o(o(t, e), o(r, s)), i), n)
            }

            function l(e, t, n, r, i, o, a) {
                return s(t & n | ~t & r, e, t, i, o, a)
            }

            function c(e, t, n, r, i, o, a) {
                return s(t & r | n & ~r, e, t, i, o, a)
            }

            function u(e, t, n, r, i, o, a) {
                return s(t ^ n ^ r, e, t, i, o, a)
            }

            function p(e, t, n, r, i, o, a) {
                return s(n ^ (t | ~r), e, t, i, o, a)
            }

            function d(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var n, r, i, a, s, d = 1732584193,
                    h = -271733879,
                    f = -1732584194,
                    g = 271733878;
                for (n = 0; n < e.length; n += 16) r = d, i = h, a = f, s = g, d = l(d, h, f, g, e[n], 7, -680876936), g = l(g, d, h, f, e[n + 1], 12, -389564586), f = l(f, g, d, h, e[n + 2], 17, 606105819), h = l(h, f, g, d, e[n + 3], 22, -1044525330), d = l(d, h, f, g, e[n + 4], 7, -176418897), g = l(g, d, h, f, e[n + 5], 12, 1200080426), f = l(f, g, d, h, e[n + 6], 17, -1473231341), h = l(h, f, g, d, e[n + 7], 22, -45705983), d = l(d, h, f, g, e[n + 8], 7, 1770035416), g = l(g, d, h, f, e[n + 9], 12, -1958414417), f = l(f, g, d, h, e[n + 10], 17, -42063), h = l(h, f, g, d, e[n + 11], 22, -1990404162), d = l(d, h, f, g, e[n + 12], 7, 1804603682), g = l(g, d, h, f, e[n + 13], 12, -40341101), f = l(f, g, d, h, e[n + 14], 17, -1502002290), h = l(h, f, g, d, e[n + 15], 22, 1236535329), d = c(d, h, f, g, e[n + 1], 5, -165796510), g = c(g, d, h, f, e[n + 6], 9, -1069501632), f = c(f, g, d, h, e[n + 11], 14, 643717713), h = c(h, f, g, d, e[n], 20, -373897302), d = c(d, h, f, g, e[n + 5], 5, -701558691), g = c(g, d, h, f, e[n + 10], 9, 38016083), f = c(f, g, d, h, e[n + 15], 14, -660478335), h = c(h, f, g, d, e[n + 4], 20, -405537848), d = c(d, h, f, g, e[n + 9], 5, 568446438), g = c(g, d, h, f, e[n + 14], 9, -1019803690), f = c(f, g, d, h, e[n + 3], 14, -187363961), h = c(h, f, g, d, e[n + 8], 20, 1163531501), d = c(d, h, f, g, e[n + 13], 5, -1444681467), g = c(g, d, h, f, e[n + 2], 9, -51403784), f = c(f, g, d, h, e[n + 7], 14, 1735328473), h = c(h, f, g, d, e[n + 12], 20, -1926607734), d = u(d, h, f, g, e[n + 5], 4, -378558), g = u(g, d, h, f, e[n + 8], 11, -2022574463), f = u(f, g, d, h, e[n + 11], 16, 1839030562), h = u(h, f, g, d, e[n + 14], 23, -35309556), d = u(d, h, f, g, e[n + 1], 4, -1530992060), g = u(g, d, h, f, e[n + 4], 11, 1272893353), f = u(f, g, d, h, e[n + 7], 16, -155497632), h = u(h, f, g, d, e[n + 10], 23, -1094730640), d = u(d, h, f, g, e[n + 13], 4, 681279174), g = u(g, d, h, f, e[n], 11, -358537222), f = u(f, g, d, h, e[n + 3], 16, -722521979), h = u(h, f, g, d, e[n + 6], 23, 76029189), d = u(d, h, f, g, e[n + 9], 4, -640364487), g = u(g, d, h, f, e[n + 12], 11, -421815835), f = u(f, g, d, h, e[n + 15], 16, 530742520), h = u(h, f, g, d, e[n + 2], 23, -995338651), d = p(d, h, f, g, e[n], 6, -198630844), g = p(g, d, h, f, e[n + 7], 10, 1126891415), f = p(f, g, d, h, e[n + 14], 15, -1416354905), h = p(h, f, g, d, e[n + 5], 21, -57434055), d = p(d, h, f, g, e[n + 12], 6, 1700485571), g = p(g, d, h, f, e[n + 3], 10, -1894986606), f = p(f, g, d, h, e[n + 10], 15, -1051523), h = p(h, f, g, d, e[n + 1], 21, -2054922799), d = p(d, h, f, g, e[n + 8], 6, 1873313359), g = p(g, d, h, f, e[n + 15], 10, -30611744), f = p(f, g, d, h, e[n + 6], 15, -1560198380), h = p(h, f, g, d, e[n + 13], 21, 1309151649), d = p(d, h, f, g, e[n + 4], 6, -145523070), g = p(g, d, h, f, e[n + 11], 10, -1120210379), f = p(f, g, d, h, e[n + 2], 15, 718787259), h = p(h, f, g, d, e[n + 9], 21, -343485551), d = o(d, r), h = o(h, i), f = o(f, a), g = o(g, s);
                return [d, h, f, g]
            }

            function h(e) {
                var t, n = "",
                    r = 32 * e.length;
                for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n
            }

            function f(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n
            }

            function g(e) {
                return h(d(f(e), 8 * e.length))
            }

            function v(e, t) {
                var n, r, i = f(e),
                    o = [],
                    a = [];
                for (o[15] = a[15] = void 0, i.length > 16 && (i = d(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                return r = d(o.concat(f(t)), 512 + 8 * t.length), h(d(a.concat(r), 640))
            }

            function m(e) {
                var t, n, r = "0123456789abcdef",
                    i = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return i
            }

            function b(e) {
                return unescape(encodeURIComponent(e))
            }

            function x(e) {
                return g(b(e))
            }

            function w(e) {
                return m(x(e))
            }

            function y(e, t) {
                return v(b(e), b(t))
            }

            function k(e, t) {
                return m(y(e, t))
            }

            function A(e, t, n) {
                return t ? n ? y(t, e) : k(t, e) : n ? x(e) : w(e)
            }
            void 0 !== (r = function () {
                return A
            }.call(t, n, t, e)) && (e.exports = r)
        }()
    }, function (e, t, n) {
        (function (t) {
            ! function (t) {
                "use strict";

                function n(e) {
                    this.tokens = [], this.tokens.links = Object.create(null), this.options = e || b.defaults, this.rules = x.normal, this.options.pedantic ? this.rules = x.pedantic : this.options.gfm && (this.options.tables ? this.rules = x.tables : this.rules = x.gfm)
                }

                function r(e, t) {
                    if (this.options = t || b.defaults, this.links = e, this.rules = w.normal, this.renderer = this.options.renderer || new i, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                    this.options.pedantic ? this.rules = w.pedantic : this.options.gfm && (this.options.breaks ? this.rules = w.breaks : this.rules = w.gfm)
                }

                function i(e) {
                    this.options = e || b.defaults
                }

                function o() {}

                function a(e) {
                    this.tokens = [], this.token = null, this.options = e || b.defaults, this.options.renderer = this.options.renderer || new i, this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new s
                }

                function s() {
                    this.seen = {}
                }

                function l(e, t) {
                    if (t) {
                        if (l.escapeTest.test(e)) return e.replace(l.escapeReplace, function (e) {
                            return l.replacements[e]
                        })
                    } else if (l.escapeTestNoEncode.test(e)) return e.replace(l.escapeReplaceNoEncode, function (e) {
                        return l.replacements[e]
                    });
                    return e
                }

                function c(e) {
                    return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (e, t) {
                        return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                    })
                }

                function u(e, t) {
                    return e = e.source || e, t = t || "", {
                        replace: function (t, n) {
                            return n = n.source || n, n = n.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(t, n), this
                        },
                        getRegex: function () {
                            return new RegExp(e, t)
                        }
                    }
                }

                function p(e, t, n) {
                    if (e) {
                        try {
                            var r = decodeURIComponent(c(n)).replace(/[^\w:]/g, "").toLowerCase()
                        } catch (e) {
                            return null
                        }
                        if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
                    }
                    t && !k.test(n) && (n = d(t, n));
                    try {
                        n = encodeURI(n).replace(/%25/g, "%")
                    } catch (e) {
                        return null
                    }
                    return n
                }

                function d(e, t) {
                    return y[" " + e] || (/^[^:]+:\/*[^\/]*$/.test(e) ? y[" " + e] = e + "/" : y[" " + e] = v(e, "/", !0)), e = y[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t
                }

                function h() {}

                function f(e) {
                    for (var t, n, r = 1; r < arguments.length; r++) {
                        t = arguments[r];
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }

                function g(e, t) {
                    var n = e.replace(/\|/g, function (e, t, n) {
                            for (var r = !1, i = t; --i >= 0 && "\\" === n[i];) r = !r;
                            return r ? "|" : " |"
                        }),
                        r = n.split(/ \|/),
                        i = 0;
                    if (r.length > t) r.splice(t);
                    else
                        for (; r.length < t;) r.push("");
                    for (; i < r.length; i++) r[i] = r[i].trim().replace(/\\\|/g, "|");
                    return r
                }

                function v(e, t, n) {
                    if (0 === e.length) return "";
                    for (var r = 0; r < e.length;) {
                        var i = e.charAt(e.length - r - 1);
                        if (i !== t || n) {
                            if (i === t || !n) break;
                            r++
                        } else r++
                    }
                    return e.substr(0, e.length - r)
                }

                function m(e, t) {
                    if (-1 === e.indexOf(t[1])) return -1;
                    for (var n = 0, r = 0; r < e.length; r++)
                        if ("\\" === e[r]) r++;
                        else if (e[r] === t[0]) n++;
                    else if (e[r] === t[1] && --n < 0) return r;
                    return -1
                }

                function b(e, t, r) {
                    if (void 0 === e || null === e) throw new Error("marked(): input parameter is undefined or null");
                    if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                    if (r || "function" == typeof t) {
                        r || (r = t, t = null), t = f({}, b.defaults, t || {});
                        var i, o, s = t.highlight,
                            c = 0;
                        try {
                            i = n.lex(e, t)
                        } catch (e) {
                            return r(e)
                        }
                        o = i.length;
                        var u = function (e) {
                            if (e) return t.highlight = s, r(e);
                            var n;
                            try {
                                n = a.parse(i, t)
                            } catch (t) {
                                e = t
                            }
                            return t.highlight = s, e ? r(e) : r(null, n)
                        };
                        if (!s || s.length < 3) return u();
                        if (delete t.highlight, !o) return u();
                        for (; c < i.length; c++) ! function (e) {
                            "code" !== e.type ? --o || u() : s(e.text, e.lang, function (t, n) {
                                return t ? u(t) : null == n || n === e.text ? --o || u() : (e.text = n, e.escaped = !0, void(--o || u()))
                            })
                        }(i[c])
                    } else try {
                        return t && (t = f({}, b.defaults, t)), a.parse(n.lex(e, t), t)
                    } catch (e) {
                        if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || b.defaults).silent) return "<p>An error occurred:</p><pre>" + l(e.message + "", !0) + "</pre>";
                        throw e
                    }
                }
                var x = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: h,
                    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                    nptable: h,
                    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
                    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                    table: h,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
                    text: /^[^\n]+/
                };
                x._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, x._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, x.def = u(x.def).replace("label", x._label).replace("title", x._title).getRegex(), x.bullet = /(?:[*+-]|\d{1,9}\.)/, x.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, x.item = u(x.item, "gm").replace(/bull/g, x.bullet).getRegex(), x.list = u(x.list).replace(/bull/g, x.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + x.def.source + ")").getRegex(), x._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", x._comment = /<!--(?!-?>)[\s\S]*?-->/, x.html = u(x.html, "i").replace("comment", x._comment).replace("tag", x._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), x.paragraph = u(x.paragraph).replace("hr", x.hr).replace("heading", x.heading).replace("lheading", x.lheading).replace("tag", x._tag).getRegex(), x.blockquote = u(x.blockquote).replace("paragraph", x.paragraph).getRegex(), x.normal = f({}, x), x.gfm = f({}, x.normal, {
                    fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                }), x.gfm.paragraph = u(x.paragraph).replace("(?!", "(?!" + x.gfm.fences.source.replace("\\1", "\\2") + "|" + x.list.source.replace("\\1", "\\3") + "|").getRegex(), x.tables = f({}, x.gfm, {
                    nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
                }), x.pedantic = f({}, x.normal, {
                    html: u("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", x._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
                }), n.rules = x, n.lex = function (e, t) {
                    return new n(t).lex(e)
                }, n.prototype.lex = function (e) {
                    return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
                }, n.prototype.token = function (e, t) {
                    e = e.replace(/^ +$/gm, "");
                    for (var n, r, i, o, a, s, l, c, u, p, d, h, f, m, b, w; e;)
                        if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length), i[0].length > 1 && this.tokens.push({
                                type: "space"
                            })), i = this.rules.code.exec(e)) e = e.substring(i[0].length), i = i[0].replace(/^ {4}/gm, ""), this.tokens.push({
                            type: "code",
                            text: this.options.pedantic ? i : v(i, "\n")
                        });
                        else if (i = this.rules.fences.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "code",
                        lang: i[2] ? i[2].trim() : i[2],
                        text: i[3] || ""
                    });
                    else if (i = this.rules.heading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "heading",
                        depth: i[1].length,
                        text: i[2]
                    });
                    else if (t && (i = this.rules.nptable.exec(e)) && (s = {
                            type: "table",
                            header: g(i[1].replace(/^ *| *\| *$/g, "")),
                            align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                        }, s.header.length === s.align.length)) {
                        for (e = e.substring(i[0].length), d = 0; d < s.align.length; d++) /^ *-+: *$/.test(s.align[d]) ? s.align[d] = "right" : /^ *:-+: *$/.test(s.align[d]) ? s.align[d] = "center" : /^ *:-+ *$/.test(s.align[d]) ? s.align[d] = "left" : s.align[d] = null;
                        for (d = 0; d < s.cells.length; d++) s.cells[d] = g(s.cells[d], s.header.length);
                        this.tokens.push(s)
                    } else if (i = this.rules.hr.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "hr"
                    });
                    else if (i = this.rules.blockquote.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "blockquote_start"
                    }), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t), this.tokens.push({
                        type: "blockquote_end"
                    });
                    else if (i = this.rules.list.exec(e)) {
                        for (e = e.substring(i[0].length), o = i[2], m = o.length > 1, l = {
                                type: "list_start",
                                ordered: m,
                                start: m ? +o : "",
                                loose: !1
                            }, this.tokens.push(l), i = i[0].match(this.rules.item), c = [], n = !1, f = i.length, d = 0; d < f; d++) s = i[d], p = s.length, s = s.replace(/^ *([*+-]|\d+\.) */, ""), ~s.indexOf("\n ") && (p -= s.length, s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + p + "}", "gm"), "")), d !== f - 1 && (a = x.bullet.exec(i[d + 1])[0], (o.length > 1 ? 1 === a.length : a.length > 1 || this.options.smartLists && a !== o) && (e = i.slice(d + 1).join("\n") + e, d = f - 1)), r = n || /\n\n(?!\s*$)/.test(s), d !== f - 1 && (n = "\n" === s.charAt(s.length - 1), r || (r = n)), r && (l.loose = !0), b = /^\[[ xX]\] /.test(s), w = void 0, b && (w = " " !== s[1], s = s.replace(/^\[[ xX]\] +/, "")), u = {
                            type: "list_item_start",
                            task: b,
                            checked: w,
                            loose: r
                        }, c.push(u), this.tokens.push(u), this.token(s, !1), this.tokens.push({
                            type: "list_item_end"
                        });
                        if (l.loose)
                            for (f = c.length, d = 0; d < f; d++) c[d].loose = !0;
                        this.tokens.push({
                            type: "list_end"
                        })
                    } else if (i = this.rules.html.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: this.options.sanitize ? "paragraph" : "html",
                        pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
                        text: i[0]
                    });
                    else if (t && (i = this.rules.def.exec(e))) e = e.substring(i[0].length), i[3] && (i[3] = i[3].substring(1, i[3].length - 1)), h = i[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[h] || (this.tokens.links[h] = {
                        href: i[2],
                        title: i[3]
                    });
                    else if (t && (i = this.rules.table.exec(e)) && (s = {
                            type: "table",
                            header: g(i[1].replace(/^ *| *\| *$/g, "")),
                            align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: i[3] ? i[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
                        }, s.header.length === s.align.length)) {
                        for (e = e.substring(i[0].length), d = 0; d < s.align.length; d++) /^ *-+: *$/.test(s.align[d]) ? s.align[d] = "right" : /^ *:-+: *$/.test(s.align[d]) ? s.align[d] = "center" : /^ *:-+ *$/.test(s.align[d]) ? s.align[d] = "left" : s.align[d] = null;
                        for (d = 0; d < s.cells.length; d++) s.cells[d] = g(s.cells[d].replace(/^ *\| *| *\| *$/g, ""), s.header.length);
                        this.tokens.push(s)
                    } else if (i = this.rules.lheading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "heading",
                        depth: "=" === i[2] ? 1 : 2,
                        text: i[1]
                    });
                    else if (t && (i = this.rules.paragraph.exec(e))) e = e.substring(i[0].length), this.tokens.push({
                        type: "paragraph",
                        text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
                    });
                    else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                        type: "text",
                        text: i[0]
                    });
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                    return this.tokens
                };
                var w = {
                    escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
                    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                    url: h,
                    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
                    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
                    em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
                    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                    br: /^( {2,}|\\)\n(?!\s*$)/,
                    del: h,
                    text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
                };
                w._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~", w.em = u(w.em).replace(/punctuation/g, w._punctuation).getRegex(), w._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g, w._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, w._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, w.autolink = u(w.autolink).replace("scheme", w._scheme).replace("email", w._email).getRegex(), w._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, w.tag = u(w.tag).replace("comment", x._comment).replace("attribute", w._attribute).getRegex(), w._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/, w._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/, w._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, w.link = u(w.link).replace("label", w._label).replace("href", w._href).replace("title", w._title).getRegex(), w.reflink = u(w.reflink).replace("label", w._label).getRegex(), w.normal = f({}, w), w.pedantic = f({}, w.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                    link: u(/^!?\[(label)\]\((.*?)\)/).replace("label", w._label).getRegex(),
                    reflink: u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", w._label).getRegex()
                }), w.gfm = f({}, w.normal, {
                    escape: u(w.escape).replace("])", "~|])").getRegex(),
                    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                    del: /^~+(?=\S)([\s\S]*?\S)~+/,
                    text: u(w.text).replace("]|", "~]|").replace("|$", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").getRegex()
                }), w.gfm.url = u(w.gfm.url, "i").replace("email", w.gfm._extended_email).getRegex(), w.breaks = f({}, w.gfm, {
                    br: u(w.br).replace("{2,}", "*").getRegex(),
                    text: u(w.gfm.text).replace("{2,}", "*").getRegex()
                }), r.rules = w, r.output = function (e, t, n) {
                    return new r(t, n).output(e)
                }, r.prototype.output = function (e) {
                    for (var t, n, i, o, a, s, c = ""; e;)
                        if (a = this.rules.escape.exec(e)) e = e.substring(a[0].length), c += l(a[1]);
                        else if (a = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0]) ? this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) && (this.inRawBlock = !1), e = e.substring(a[0].length), c += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : l(a[0]) : a[0];
                    else if (a = this.rules.link.exec(e)) {
                        var u = m(a[2], "()");
                        if (u > -1) {
                            var p = a[2].length - u;
                            a[2] = a[2].substring(0, u), a[0] = a[0].substring(0, a[0].length - p)
                        }
                        e = e.substring(a[0].length), this.inLink = !0, i = a[2], this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i), t ? (i = t[1], o = t[3]) : o = "") : o = a[3] ? a[3].slice(1, -1) : "", i = i.trim().replace(/^<([\s\S]*)>$/, "$1"), c += this.outputLink(a, {
                            href: r.escapes(i),
                            title: r.escapes(o)
                        }), this.inLink = !1
                    } else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
                        if (e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                            c += a[0].charAt(0), e = a[0].substring(1) + e;
                            continue
                        }
                        this.inLink = !0, c += this.outputLink(a, t), this.inLink = !1
                    } else if (a = this.rules.strong.exec(e)) e = e.substring(a[0].length), c += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));
                    else if (a = this.rules.em.exec(e)) e = e.substring(a[0].length), c += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));
                    else if (a = this.rules.code.exec(e)) e = e.substring(a[0].length), c += this.renderer.codespan(l(a[2].trim(), !0));
                    else if (a = this.rules.br.exec(e)) e = e.substring(a[0].length), c += this.renderer.br();
                    else if (a = this.rules.del.exec(e)) e = e.substring(a[0].length), c += this.renderer.del(this.output(a[1]));
                    else if (a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), "@" === a[2] ? (n = l(this.mangle(a[1])), i = "mailto:" + n) : (n = l(a[1]), i = n), c += this.renderer.link(i, null, n);
                    else if (this.inLink || !(a = this.rules.url.exec(e))) {
                        if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), this.inRawBlock ? c += this.renderer.text(a[0]) : c += this.renderer.text(l(this.smartypants(a[0])));
                        else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                    } else {
                        if ("@" === a[2]) n = l(a[0]), i = "mailto:" + n;
                        else {
                            do {
                                s = a[0], a[0] = this.rules._backpedal.exec(a[0])[0]
                            } while (s !== a[0]);
                            n = l(a[0]), i = "www." === a[1] ? "http://" + n : n
                        }
                        e = e.substring(a[0].length), c += this.renderer.link(i, null, n)
                    }
                    return c
                }, r.escapes = function (e) {
                    return e ? e.replace(r.rules._escapes, "$1") : e
                }, r.prototype.outputLink = function (e, t) {
                    var n = t.href,
                        r = t.title ? l(t.title) : null;
                    return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, l(e[1]))
                }, r.prototype.smartypants = function (e) {
                    return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
                }, r.prototype.mangle = function (e) {
                    if (!this.options.mangle) return e;
                    for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                    return n
                }, i.prototype.code = function (e, t, n) {
                    var r = (t || "").match(/\S*/)[0];
                    if (this.options.highlight) {
                        var i = this.options.highlight(e, r);
                        null != i && i !== e && (n = !0, e = i)
                    }
                    return r ? '<pre><code class="' + this.options.langPrefix + l(r, !0) + '">' + (n ? e : l(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : l(e, !0)) + "</code></pre>"
                }, i.prototype.blockquote = function (e) {
                    return "<blockquote>\n" + e + "</blockquote>\n"
                }, i.prototype.html = function (e) {
                    return e
                }, i.prototype.heading = function (e, t, n, r) {
                    return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
                }, i.prototype.hr = function () {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }, i.prototype.list = function (e, t, n) {
                    var r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
                }, i.prototype.listitem = function (e) {
                    return "<li>" + e + "</li>\n"
                }, i.prototype.checkbox = function (e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                }, i.prototype.paragraph = function (e) {
                    return "<p>" + e + "</p>\n"
                }, i.prototype.table = function (e, t) {
                    return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                }, i.prototype.tablerow = function (e) {
                    return "<tr>\n" + e + "</tr>\n"
                }, i.prototype.tablecell = function (e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                }, i.prototype.strong = function (e) {
                    return "<strong>" + e + "</strong>"
                }, i.prototype.em = function (e) {
                    return "<em>" + e + "</em>"
                }, i.prototype.codespan = function (e) {
                    return "<code>" + e + "</code>"
                }, i.prototype.br = function () {
                    return this.options.xhtml ? "<br/>" : "<br>"
                }, i.prototype.del = function (e) {
                    return "<del>" + e + "</del>"
                }, i.prototype.link = function (e, t, n) {
                    if (null === (e = p(this.options.sanitize, this.options.baseUrl, e))) return n;
                    var r = '<a href="' + l(e) + '"';
                    return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>"
                }, i.prototype.image = function (e, t, n) {
                    if (null === (e = p(this.options.sanitize, this.options.baseUrl, e))) return n;
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
                }, i.prototype.text = function (e) {
                    return e
                }, o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function (e) {
                    return e
                }, o.prototype.link = o.prototype.image = function (e, t, n) {
                    return "" + n
                }, o.prototype.br = function () {
                    return ""
                }, a.parse = function (e, t) {
                    return new a(t).parse(e)
                }, a.prototype.parse = function (e) {
                    this.inline = new r(e.links, this.options), this.inlineText = new r(e.links, f({}, this.options, {
                        renderer: new o
                    })), this.tokens = e.reverse();
                    for (var t = ""; this.next();) t += this.tok();
                    return t
                }, a.prototype.next = function () {
                    return this.token = this.tokens.pop()
                }, a.prototype.peek = function () {
                    return this.tokens[this.tokens.length - 1] || 0
                }, a.prototype.parseText = function () {
                    for (var e = this.token.text;
                        "text" === this.peek().type;) e += "\n" + this.next().text;
                    return this.inline.output(e)
                }, a.prototype.tok = function () {
                    switch (this.token.type) {
                        case "space":
                            return "";
                        case "hr":
                            return this.renderer.hr();
                        case "heading":
                            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, c(this.inlineText.output(this.token.text)), this.slugger);
                        case "code":
                            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                        case "table":
                            var e, t, n, r, i = "",
                                o = "";
                            for (n = "", e = 0; e < this.token.header.length; e++) n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                                header: !0,
                                align: this.token.align[e]
                            });
                            for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                                for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                                    header: !1,
                                    align: this.token.align[r]
                                });
                                o += this.renderer.tablerow(n)
                            }
                            return this.renderer.table(i, o);
                        case "blockquote_start":
                            for (o = "";
                                "blockquote_end" !== this.next().type;) o += this.tok();
                            return this.renderer.blockquote(o);
                        case "list_start":
                            o = "";
                            for (var a = this.token.ordered, s = this.token.start;
                                "list_end" !== this.next().type;) o += this.tok();
                            return this.renderer.list(o, a, s);
                        case "list_item_start":
                            o = "";
                            var l = this.token.loose;
                            for (this.token.task && (o += this.renderer.checkbox(this.token.checked));
                                "list_item_end" !== this.next().type;) o += l || "text" !== this.token.type ? this.tok() : this.parseText();
                            return this.renderer.listitem(o);
                        case "html":
                            return this.renderer.html(this.token.text);
                        case "paragraph":
                            return this.renderer.paragraph(this.inline.output(this.token.text));
                        case "text":
                            return this.renderer.paragraph(this.parseText());
                        default:
                            var u = 'Token with "' + this.token.type + '" type was not found.';
                            if (!this.options.silent) throw new Error(u);
                            console.log(u)
                    }
                }, s.prototype.slug = function (e) {
                    var t = e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
                    if (this.seen.hasOwnProperty(t)) {
                        var n = t;
                        do {
                            this.seen[n]++, t = n + "-" + this.seen[n]
                        } while (this.seen.hasOwnProperty(t))
                    }
                    return this.seen[t] = 0, t
                }, l.escapeTest = /[&<>"']/, l.escapeReplace = /[&<>"']/g, l.replacements = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                }, l.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, l.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
                var y = {},
                    k = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
                h.exec = h, b.options = b.setOptions = function (e) {
                    return f(b.defaults, e), b
                }, b.getDefaults = function () {
                    return {
                        baseUrl: null,
                        breaks: !1,
                        gfm: !0,
                        headerIds: !0,
                        headerPrefix: "",
                        highlight: null,
                        langPrefix: "language-",
                        mangle: !0,
                        pedantic: !1,
                        renderer: new i,
                        sanitize: !1,
                        sanitizer: null,
                        silent: !1,
                        smartLists: !1,
                        smartypants: !1,
                        tables: !0,
                        xhtml: !1
                    }
                }, b.defaults = b.getDefaults(), b.Parser = a, b.parser = a.parse, b.Renderer = i, b.TextRenderer = o, b.Lexer = n, b.lexer = n.lex, b.InlineLexer = r, b.inlineLexer = r.output, b.Slugger = s, b.parse = b, e.exports = b
            }(this || "undefined" != typeof window && window)
        }).call(t, n(17))
    }, function (e, t, n) {
        var r = n(11);
        "string" == typeof r && (r = [
            [e.i, r, ""]
        ]);
        var i = {};
        i.transform = void 0;
        n(15)(r, i);
        r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        function r(e, t) {
            return new a(t).process(e)
        }
        var i = n(4),
            o = n(5),
            a = n(18);
        t = e.exports = r, t.FilterXSS = a;
        for (var s in i) t[s] = i[s];
        for (var s in o) t[s] = o[s];
        "undefined" != typeof window && (window.filterXSS = e.exports),
            function () {
                return "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope
            }() && (self.filterXSS = e.exports)
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        n(8);
        var o = n(7),
            a = n(9),
            s = n(6),
            l = {
                ip: "",
                comment: "",
                rid: "",
                at: "",
                nick: "",
                mail: "",
                link: "",
                ua: navigator.userAgent,
                url: location.pathname,
                pin: 0
            },
            c = !1,
            u = {}.toString,
            p = localStorage,
            d = function () {
                function e(t) {
                    r(this, e);
                    var n = this;
                    n.version = "1.1.8", v(), !!t && n.init(t)
                }
                return i(e, [{
                    key: "init",
                    value: function (e) {
                        var t = this,
                            n = e.av || AV;
                        l.url = e.pathname || location.pathname.replace(/\/$/, "");
                        try {
                            var r = "[object HTMLDivElement]" === u.call(e.el) ? e.el : document.querySelectorAll(e.el)[0];
                            if ("[object HTMLDivElement]" != u.call(r)) throw "The target element was not found.";
                            t.el = r, t.el.classList.add("valine");
                            var i = e.placeholder || "",
                                o = '<div class="vwrap">\n                                <div class="textarea-wrapper">\n                                    <div class="comment_trigger">\n                                        <div class="avatar"><img class="visitor_avatar" src="https://cdn.xecades.xyz/image-friend/placeholder.jpg"></div>\n                                        <div class="trigger_title">' + i + '</div>\n                                    </div>\n                                    <div class="veditor-area">\n                                        <textarea placeholder="" class="veditor" style="resize:vertical;overflow:auto;"></textarea>\n                                        <div class="btn-wrap">\n                                            <div class="vpreview-btn vfunction-btn" title="预览"><svg t="1551146416896" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2051" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.5em" height="1.5em"><defs><style type="text/css"></style></defs><path d="M862.516 161.07l44.62 44.38-286.303 288.866-45.668-45.615L862.516 161.07z m1.233 1.233" p-id="2052"></path><path d="M832.162 959.558H128.025V191.784h512.099v64.169H192.037V895.64h576.112V512.127h64.012v447.431z m0.833 0.533" p-id="2053"></path><path d="M256.05 703.994h384.075v63.919H256.05v-63.919z m0-127.769l320.062-0.069v63.919H256.05v-63.85z m0-128.317h192.037v63.891l-192.037 0.028v-63.919z m0 0" p-id="2054"></path></svg></div>\n                                            <div class="vemoji-btn vfunction-btn" title="表情"><svg t="1551146424708" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2169" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.5em" height="1.5em"><defs><style type="text/css"></style></defs><path d="M513.028 63.766c-247.628 0-448.369 200.319-448.369 447.426S265.4 958.617 513.028 958.617s448.369-200.319 448.369-447.426S760.655 63.766 513.028 63.766z m-0.203 823.563c-207.318 0-375.382-167.71-375.382-374.592s168.064-374.592 375.382-374.592 375.382 167.71 375.382 374.592-168.064 374.592-375.382 374.592z" p-id="2170"></path><path d="M514.029 767.816c-99.337 0-188.031-54.286-251.889-146.146-10.647-16.703-7.1-33.399 7.094-45.93 14.192-12.529 28.384-8.349 39.025 8.349 49.67 75.164 124.174 116.92 205.77 116.92s163.199-45.93 209.316-125.268c10.647-16.703 24.833-16.703 39.025-8.349 14.194 12.524 14.194 29.227 7.094 45.93-60.312 96.035-152.553 154.494-255.435 154.494zM464.292 402.959l-45.151-45.151-0.05 0.05-90.45-90.45-45.15 45.15 90.45 90.45-90.45 90.451 45.15 45.15 90.45-90.45 0.05 0.05 45.151-45.151-0.05-0.05zM556.611 402.959l45.151-45.151 0.05 0.05 90.45-90.45 45.15 45.15-90.45 90.45 90.45 90.451-45.15 45.15-90.45-90.45-0.05 0.05-45.151-45.151 0.05-0.05z" p-id="2171"></path></svg></div>\n                                        </div>\n                                    </div>\n                                    <div class="vextra-area">\n                                        <div class="vsmile-icons" style="display:none"></div>\n                                        <div class="vpreview-text" style="display:none"></div>\n                                    </div>\n                                </div>\n                                <section class="auth-section" style="display:none;">\n                                    <div class="input-wrapper"><input type="text" name="author" class="vnick" placeholder="昵称" value=""></div>\n                                    <div class="input-wrapper"><input type="email" name="email" class="vmail" placeholder="邮箱" value=""></div>\n                                    <div class="input-wrapper"><input type="text" name="website" class="vlink" placeholder="网站 (可选)" value=""></div>\n                                    <div class="post-action"><button type="button" class="vsubmit">提交</button></div>\n                                </section>\n                                <div style="display:none;" class="vmark"></div>\n                           </div>\n                           <div class="info">\n                                <div class="col">已有 <span class="count">0</span> 条评论</div>\n                                <div class="col power float-right">\n                                    <a href="https://segmentfault.com/markdown" target="_blank"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a>\n                                </div>\n                           </div>\n                           <div class="vsubmitting" style="display:none;"></div>\n                           <ul class="vlist"><li class="vempty"></li></ul>\n                           <div class="vloading"></div>\n                           <div class="vpage txt-center"></div>';
                            t.el.innerHTML = o;
                            var a = t.el.querySelector(".vempty");
                            t.nodata = {
                                show: function (e) {
                                    a.innerHTML = e || "还没有评论哦 :-)", a.setAttribute("style", "display:block;")
                                },
                                hide: function () {
                                    a.setAttribute("style", "display:none;")
                                }
                            }, t.nodata.show();
                            var s = t.el.querySelector(".vsmile-icons"),
                                p = e.emoticon_list || [];
                            for (var d in p) {
                                var f = document.createElement("img");
                                f.setAttribute("src", e.emoticon_url + "/" + p[d]), s.appendChild(f)
                            }
                            c || (n.init({
                                appId: e.app_id || e.appId,
                                appKey: e.app_key || e.appKey
                            }), c = !0), t.v = n
                        } catch (e) {
                            var g = "https://github.com/DesertsP/Valine/issues";
                            return void(t.el ? t.nodata.show('<pre style="color:red;text-align:left;">' + e + "<br>Valine:<b>" + t.version + "</b><br>反馈：" + g + "</pre>") : console && console.log("%c" + e + "\n%cValine%c" + t.version + " " + g, "color:red;", "background:#000;padding:5px;line-height:30px;color:#fff;", "background:#456;line-height:30px;padding:5px;color:#fff;"))
                        }
                        var v = '<div class="spinner"><div class="r1"></div><div class="r2"></div><div class="r3"></div><div class="r4"></div><div class="r5"></div></div>',
                            m = t.el.querySelector(".vloading");
                        m.innerHTML = v, t.loading = {
                            show: function () {
                                m.setAttribute("style", "display:block;"), t.nodata.hide()
                            },
                            hide: function () {
                                m.setAttribute("style", "display:none;"), 0 === t.el.querySelectorAll(".vcard").length && t.nodata.show()
                            }
                        };
                        var b = t.el.querySelector(".vsubmitting");
                        b.innerHTML = v, t.submitting = {
                            show: function () {
                                b.setAttribute("style", "display:block;")
                            },
                            hide: function () {
                                b.setAttribute("style", "display:none;"), t.nodata.hide()
                            }
                        };
                        var x = t.el.querySelector(".vmark");
                        t.alert = {
                            show: function (e) {
                                x.innerHTML = '<div class="valert txt-center"><div class="vtext">' + e.text + '</div><div class="vbtns"></div></div>';
                                var n = x.querySelector(".vbtns"),
                                    r = '<button class="vcancel vbtn">' + (e && e.ctxt || "我再看看") + "</button>",
                                    i = '<button class="vsure vbtn">' + (e && e.otxt || "继续提交") + "</button>";
                                if (n.innerHTML = "" + r + (e.type && i), x.querySelector(".vcancel").addEventListener("click", function (e) {
                                        t.alert.hide()
                                    }), x.setAttribute("style", "display:block;"), e && e.type) {
                                    var o = x.querySelector(".vsure");
                                    h.on("click", o, function (n) {
                                        t.alert.hide(), e.cb && e.cb()
                                    })
                                }
                            },
                            hide: function () {
                                x.setAttribute("style", "display:none;")
                            }
                        }, t.loading.show();
                        var w = new t.v.Query("Comment");
                        w.equalTo("url", l.url);
                        var y = new t.v.Query("Comment");
                        y.equalTo("url", l.url + "/"), AV.Query.or(w, y).count().then(function (n) {
                            t.el.querySelector(".count").innerHTML = "" + n, t.bind(e)
                        }, function (e) {
                            console.log(e)
                        })
                    }
                }, {
                    key: "bind",
                    value: function (e) {
                        var t = this,
                            n = t.el.querySelector(".vsmile-icons");
                        h.on("click", n, function (e) {
                            var n = t.el.querySelector(".veditor"),
                                r = e.target.src;
                            if (void 0 !== r) {
                                var i = "!(:" + decodeURI(r).replace(/^.*\/(.*)$/, "$1") + ":)";
                                if (document.selection) n.focus(), sel = document.selection.createRange(), sel.text = i, n.focus();
                                else if (n.selectionStart || "0" == n.selectionStart) {
                                    var o = n.selectionStart,
                                        a = n.selectionEnd,
                                        s = a;
                                    n.value = n.value.substring(0, o) + i + n.value.substring(a, n.value.length), s += i.length, n.focus(), n.selectionStart = s, n.selectionEnd = s
                                } else n.value += i, n.focus();
                                l.comment = n.value;
                                var c = t.el.querySelector(".vsubmit");
                                c.getAttribute("disabled") && c.removeAttribute("disabled")
                            }
                        });
                        var r = t.el.querySelector(".comment_trigger");
                        h.on("click", r, function (e) {
                            r.setAttribute("style", "display:none"), t.el.querySelector(".auth-section").removeAttribute("style"), t.el.querySelector(".veditor").focus()
                        });
                        var i = function (e) {
                                e.offsetHeight > 180 && (e.classList.add("expand"), h.on("click", e, function (t) {
                                    e.setAttribute("class", "vcomment")
                                }))
                            },
                            c = function () {
                                var e = new t.v.Query("Comment");
                                e.equalTo("url", l.url);
                                var n = new t.v.Query("Comment");
                                n.equalTo("url", l.url + "/");
                                var r = AV.Query.or(e, n);
                                return r.notEqualTo("isSpam", !0), r.select(["nick", "comment", "link", "rid", "emailHash"]), r.addDescending("createdAt"), r
                            },
                            u = 1;
                        ! function e() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            t.loading.show();
                            var r = Number(t.el.querySelector(".count").innerText),
                                i = c();
                            i.limit(10), i.skip(10 * (n - 1)), i.find().then(function (i) {
                                var o = i.length;
                                if (o) {
                                    for (var a = 0; a < o; a++) d(i[a], !1);
                                    var s = t.el.querySelector(".vpage");
                                    s.innerHTML = 10 * n < r ? '<div id="vmore" class="more">加载更多评论（剩余' + (r - 10 * n) + "/" + r + "条）</div>" : "";
                                    var l = s.querySelector("#vmore");
                                    l && h.on("click", l, function (t) {
                                        s.innerHTML = "", e(++u)
                                    })
                                }
                                t.loading.hide()
                            }).catch(function (e) {
                                console.log(e), t.loading.hide()
                            })
                        }();
                        var d = function (e) {
                                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    r = document.createElement("li");
                                r.setAttribute("class", "vcard"), r.setAttribute("id", e.id);
                                var o = e.get("emailHash"),
                                    a = "https://gravatar.loli.net/avatar/" + o + "?size=80&d=https://cdn.xecades.xyz/image-friend/placeholder.jpg";
                                r.innerHTML = '<img class="vavatar" src="' + a + '"/>\n                                        <section class="text-wrapper">\n                                            <div class="vhead" >\n                                                ' + (e.get("link") ? '<a class="vname" href="' + e.get("link") + '" target="_blank" rel="nofollow" > ' + e.get("nick") + "</a>" : '<span class="vname">' + e.get("nick") + "</span>") + '\n                                                <span class="spacer">•</span>\n                                                <span class="vtime">' + g(e.get("createdAt")) + "</span>\n                                                <a rid='" + e.id + "' at='@" + e.get("nick") + '\' class="vat">回复</a>\n                                            </div>\n                                            <div class="vcomment">' + e.get("comment") + "</div>\n                                        </section>";
                                for (var s = t.el.querySelector(".vlist"), l = s.querySelectorAll("li"), c = r.querySelector(".vat"), u = r.querySelectorAll("a"), p = 0, d = u.length; p < d; p++) {
                                    var h = u[p];
                                    h && "at" != h.getAttribute("class") && (h.setAttribute("target", "_blank"), h.setAttribute("rel", "nofollow"))
                                }
                                n ? s.insertBefore(r, l[0]) : s.appendChild(r);
                                var f = r.querySelector(".vcomment");
                                i(f), L(c)
                            },
                            v = {
                                veditor: "comment",
                                vnick: "nick",
                                vlink: "link",
                                vmail: "mail"
                            },
                            m = {};
                        for (var b in v) v.hasOwnProperty(b) && function () {
                            var e = v[b],
                                n = t.el.querySelector("." + b);
                            m[e] = n, h.on("input", n, function (t) {
                                l[e] = n.value
                            })
                        }();
                        var x = function () {
                            var e = p && p.getItem("ValineCache");
                            if (e) {
                                e = JSON.parse(e);
                                var n = ["nick", "link", "mail"];
                                for (var r in n) {
                                    var i = n[r];
                                    t.el.querySelector(".v" + i).value = e[i], l[i] = e[i]
                                }
                                if ("" != e.mail) {
                                    t.el.querySelector(".visitor_avatar").setAttribute("src", "https://gravatar.loli.net/avatar/" + s(e.mail.toLowerCase().trim()) + "?size=80&d=https://cdn.xecades.xyz/image-friend/placeholder.jpg")
                                }
                            }
                        };
                        x(), t.reset = function () {
                            for (var e in v)
                                if (v.hasOwnProperty(e)) {
                                    var n = v[e],
                                        r = t.el.querySelector("." + e);
                                    r.value = "", l[n] = ""
                                } l.rid = "", l.nick = "", x(), A.getAttribute("triggered") && (A.setAttribute("style", "display:none;"), A.removeAttribute("triggered")), _.getAttribute("triggered") && (_.setAttribute("style", "display:none;"), _.removeAttribute("triggered"))
                        };
                        var w = t.el.querySelector(".vsubmit"),
                            y = function (n) {
                                if (w.getAttribute("disabled")) return void t.alert.show({
                                    type: 0,
                                    text: '再等等，评论正在提交中ヾ(๑╹◡╹)ﾉ"',
                                    ctxt: "好的"
                                });
                                if ("" == l.comment) return void m.comment.focus();
                                if ("" == l.nick) return void m.nick.focus();
                                if (l.comment = a(o(l.comment.replace(/!\(:(.*?\.\w+):\)/g, '<img src="' + e.emoticon_url + '/$1" alt="$1" class="vemoticon-img">')), {
                                        onIgnoreTagAttr: function (e, t, n, r) {
                                            if ("class" === t) return t + '="' + a.escapeAttrValue(n) + '"'
                                        }
                                    }), l.comment.indexOf(l.at) > -1 && "" != l.at) {
                                    var r = '<a class="at" href=\'#' + l.rid + "'>" + l.at + "</a>";
                                    l.comment = l.comment.replace(l.at, r)
                                }
                                var i = f.mail(l.mail),
                                    s = f.link(l.link);
                                l.mail = i.k ? i.v : "", l.link = s.k ? s.v : "", i.k || s.k ? i.k ? s.k ? z() : t.alert.show({
                                    type: 0,
                                    text: "您的网址格式不正确，请修正后提交。",
                                    ctxt: "返回修改"
                                }) : t.alert.show({
                                    type: 0,
                                    text: '请认真评论并填写正确的邮箱地址。<br>已开启<a href="https://deserts.io/diy-a-comment-system/" target="_blank">隐私防护</a>不会泄露您的个人信息，<a href="https://akismet.com/privacy/" target="_blank">了解反垃圾系统如何处理您的数据。</a>',
                                    ctxt: "返回修改"
                                }) : t.alert.show({
                                    type: 0,
                                    text: "您的网址和邮箱格式不正确，请修正后提交。",
                                    ctxt: "返回修改"
                                })
                            },
                            k = t.el.querySelector(".vemoji-btn"),
                            A = t.el.querySelector(".vsmile-icons");
                        h.on("click", k, function (e) {
                            _.getAttribute("triggered") && (_.setAttribute("style", "display:none;"), _.removeAttribute("triggered")), A.getAttribute("triggered") ? (A.setAttribute("style", "display:none;"), A.removeAttribute("triggered")) : (A.removeAttribute("style"), A.setAttribute("triggered", 1))
                        });
                        var S = t.el.querySelector(".vpreview-btn"),
                            _ = t.el.querySelector(".vpreview-text");
                        h.on("click", S, function (t) {
                            if (A.getAttribute("triggered") && (A.setAttribute("style", "display:none;"), A.removeAttribute("triggered")), _.getAttribute("triggered")) _.setAttribute("style", "display:none;"), _.removeAttribute("triggered");
                            else {
                                if ("" == l.comment) return void m.comment.focus();
                                _.innerHTML = a(o(l.comment.replace(/!\(:(.*?\.\w+):\)/g, '<img src="' + e.emoticon_url + '/$1" alt="$1" class="vemoticon-img">')), {
                                    onIgnoreTagAttr: function (e, t, n, r) {
                                        if ("class" === t) return t + '="' + a.escapeAttrValue(n) + '"'
                                    }
                                }), _.removeAttribute("style"), _.setAttribute("triggered", 1)
                            }
                        });
                        var T = function () {
                                var e = new t.v.ACL;
                                return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e
                            },
                            z = function () {
                                w.setAttribute("disabled", !0), t.submitting.show();
                                var e = t.v.Object.extend("Comment"),
                                    n = new e;
                                for (var r in l)
                                    if (l.hasOwnProperty(r)) {
                                        if ("at" === r) continue;
                                        var i = l[r];
                                        n.set(r, i)
                                    } n.set("emailHash", s(l.mail.toLowerCase().trim())), n.setACL(T()), n.save().then(function (e) {
                                    p && p.setItem("ValineCache", JSON.stringify({
                                        nick: l.nick,
                                        link: l.link,
                                        mail: l.mail
                                    }));
                                    var n = t.el.querySelector(".count");
                                    n.innerText = Number(n.innerText) + 1, d(e, !0), w.removeAttribute("disabled"), t.submitting.hide(), t.nodata.hide(), t.reset()
                                }).catch(function (e) {
                                    t.submitting.hide()
                                })
                            },
                            L = function (e) {
                                h.on("click", e, function (n) {
                                    var r = e.getAttribute("at"),
                                        i = e.getAttribute("rid");
                                    l.rid = i, l.at = r, m.comment.value = r + " ，" + m.comment.value, m.comment.focus(), t.el.querySelector(".comment_trigger").setAttribute("style", "display:none"), t.el.querySelector(".auth-section").removeAttribute("style"), t.el.querySelector(".veditor").focus()
                                })
                            };
                        h.off("click", w, y), h.on("click", w, y)
                    }
                }]), e
            }(),
            h = {
                on: function (e, t, n, r) {
                    t.addEventListener ? t.addEventListener(e, n, r || !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
                },
                off: function (e, t, n, r) {
                    t.removeEventListener ? t.removeEventListener(e, n, r || !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null
                }
            },
            f = {
                mail: function (e) {
                    return {
                        k: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(e),
                        v: e
                    }
                },
                link: function (e) {
                    return e.length > 0 && (e = /^(http|https)/.test(e) ? e : "http://" + e), {
                        k: !(e.length > 0) || /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/.test(e),
                        v: e
                    }
                }
            },
            g = function (e) {
                try {
                    var t = e.getTime(),
                        n = (new Date).getTime(),
                        r = n - t,
                        i = Math.floor(r / 864e5);
                    if (0 === i) {
                        var o = r % 864e5,
                            a = Math.floor(o / 36e5);
                        if (0 === a) {
                            var s = o % 36e5,
                                l = Math.floor(s / 6e4);
                            if (0 === l) {
                                var c = s % 6e4;
                                return Math.round(c / 1e3) + " 秒前"
                            }
                            return l + " 分钟前"
                        }
                        return a + " 小时前"
                    }
                    return i < 0 ? "刚刚" : i < 30 ? i + " 天前" : i < 365 ? Math.floor(i / 30) + " 月前" : Math.floor(i / 365) + " 年前"
                } catch (e) {
                    console.log(e)
                }
            },
            v = function () {
                $.getJSON("https://api.ipify.org/?format=json", function (e) {
                    l.ip = e.ip
                })
            };
        e.exports = d
    }, function (e, t, n) {
        t = e.exports = n(12)(!1), t.push([e.i, '@charset "UTF-8";\n.valine {\n  /************ Loading ************/ }\n  .valine * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    color: #3c484e;\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    margin: initial;\n    padding: initial; }\n  .valine .vemoticon-img {\n    display: inline-block;\n    max-height: 32px;\n    margin: 0 2px; }\n  .valine .vwrap {\n    overflow: hidden;\n    position: relative;\n    border: 1px solid #ededed; }\n    .valine .vwrap .veditor-area {\n      position: inherit;}\n    .valine .vwrap .btn-wrap {\n      position: absolute !important;\n      right: 1.5em;\n      bottom: 0; }\n      .valine .vwrap .btn-wrap .vfunction-btn {\n        display: inline-block; }\n        .valine .vwrap .btn-wrap .vfunction-btn svg {\n          fill: #bbb;\n          cursor: pointer; }\n          .valine .vwrap .btn-wrap .vfunction-btn svg:hover {\n            fill: #777777; }\n          .valine .vwrap .btn-wrap .vfunction-btn svg:active {\n            fill: #777777; }\n    .valine .vwrap .vextra-area {\n      margin: .4em 0 .4em .5em; }\n      .valine .vwrap .vextra-area .vsmile-icons {\n        padding: .2em 0;\n        border-top: 1px solid #ededed;\n        border-radius: 0;\n        margin: .3em 0;\n        max-height: 128px;\n        overflow: auto; }\n        .valine .vwrap .vextra-area .vsmile-icons img {\n          display: inline-block;\n          width: auto !important;\n          height: 28px !important;\n          margin-right: 4px;\n          cursor: pointer; }\n      .valine .vwrap .vextra-area .vpreview-text {\n        border-top: 1px solid #ededed;\n        border-radius: 0;\n        padding: .5em .5em;\n        margin: .3em 0;\n        max-height: 10em;\n        overflow: auto; }\n    .valine .vwrap .textarea-wrapper {\n      color: #4b5b62;\n      width: 100%;\n      height: 100%;\n      background: #fff;\n      position: relative;\n      border-radius: 0; }\n      .valine .vwrap .textarea-wrapper .comment_trigger {\n        position: absolute;\n        z-index: 10;\n        width: 100%;\n        height: 100%;\n        background-color: #fff;\n        padding: 0 1em; }\n        .valine .vwrap .textarea-wrapper .comment_trigger .avatar {\n          position: absolute;\n          width: 3em;\n          height: 3em;\n          position: absolute;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%); }\n          .valine .vwrap .textarea-wrapper .comment_trigger .avatar img {\n            border-radius: 100%;\n            width: 3em;\n            height: 3em; }\n        .valine .vwrap .textarea-wrapper .comment_trigger .trigger_title {\n          position: absolute;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          color: #aaa;\n          font-size: 1.4em;\n          margin-left: 3.5em; }\n      .valine .vwrap .textarea-wrapper textarea {\n        padding: 1em 1em 0;\n        color: #4b5b62;\n        width: 100%;\n        background: #fff;\n        border: none;\n        resize: none;\n        min-height: 6em;\n        margin: 0; }\n        .valine .vwrap .textarea-wrapper textarea:focus {\n          border-color: #c4c8cb;\n          outline: 0; }\n    .valine .vwrap .trigger-section {\n      display: none; }\n    .valine .vwrap .auth-section {\n      display: -webkit-box;\n      display: flex;\n      display: -ms-flexbox;\n      background: #fbfbfb;\n      padding: .3em .6em; }\n      .valine .vwrap .auth-section .input-wrapper {\n        -ms-flex: 1 1 27%;\n        -webkit-box-flex: 1;\n                flex: 1 1 27%;\n        width: 27%; }\n        .valine .vwrap .auth-section .input-wrapper input {\n          color: #4b5b62;\n          background: #fafafa;\n          border: none;\n          border-radius: 0;\n          padding: .6em;\n          margin: 0;\n          line-height: 2;\n          font-size: 1em !important; }\n          .valine .vwrap .auth-section .input-wrapper input:focus {\n            border-color: #c4c8cb;\n            outline: 0; }\n      .valine .vwrap .auth-section input {\n        width: 100%; }\n      .valine .vwrap .auth-section .post-action {\n        -ms-flex: 1 1 19%;\n        -webkit-box-flex: 1;\n                flex: 1 1 19%;\n        width: 19%;\n        margin: 0;\n        padding: 2px 0 0; }\n        .valine .vwrap .auth-section .post-action button {\n          color: #111;\n          width: 100%;\n          line-height: 2;\n          font-weight: bolder;\n          border-radius: 30px;\n          border: 1px solid #111;\n          background-color: #fff;\n          padding: .4em .5em;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          font-size: 1em !important; cursor: pointer;}\n        .valine .vwrap .auth-section .post-action button:hover {\n          background-color: #111; color: #fff; }\n      @media screen and (max-width: 720px) {\n        .valine .vwrap .auth-section {\n          display: block; }\n          .valine .vwrap .auth-section .input-wrapper, .valine .vwrap .auth-section .post-action {\n            -ms-flex: 1 1 100%;\n            -webkit-box-flex: 1;\n                    flex: 1 1 100%;\n            padding-right: 0;\n            width: 100%; } }\n    .valine .vwrap .vmark {\n      position: absolute;\n      background: rgba(0, 0, 0, 0.65);\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0; }\n      .valine .vwrap .vmark .valert {\n        padding: 2em 0 0 0; }\n        .valine .vwrap .vmark .valert .vtext {\n          color: #fff;\n          padding: 15px; }\n        .valine .vwrap .vmark .valert .vcode {\n          width: 75px;\n          border-radius: 5px;\n          background: #dedede; }\n          .valine .vwrap .vmark .valert .vcode:focus {\n            border-color: #3090e4;\n            background-color: #fff; }\n      @media screen and (max-width: 720px) {\n        .valine .vwrap .vmark .valert {\n          padding: 8em 0; }\n          .valine .vwrap .vmark .valert .vtext {\n            color: #fff;\n            padding: 10px; } }\n  .valine .info {\n    padding: 5px;\n    margin: .5em 0; }\n    .valine .info .col {\n      display: inline-block;\n      vertical-align: middle; }\n    .valine .info svg {\n      margin-right: 2px;\n      overflow: hidden;\n      fill: currentColor; }\n  .valine .power {\n    color: #999;\n    font-size: 0.625em !important;\n    position: relative; }\n  .valine a {\n    text-decoration: none;\n    color: #3eb0ef;\n    border: none; }\n  .valine .txt-center {\n    text-align: center; }\n  .valine .float-right {\n    float: right !important; }\n  .valine .pd5 {\n    padding: 5px; }\n  .valine .pd10 {\n    padding: 10px; }\n  .valine .vbtn {\n    display: inline-block;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border: 1px solid #e9eff3;\n    background-color: #333;\n    border-radius: .1em;\n    color: #fff;\n    padding: .5em 1.5em;\n    cursor: pointer;\n    white-space: nowrap;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none;\n    min-width: 60px;\n    max-width: 100%;\n    margin: 0 1em; }\n  .valine .vbtn:active,\n  .valine .vbtn:hover {\n    border-color: #666; }\n  .valine .vpage {\n    margin: 1.5em 0; }\n    .valine .vpage .more {\n      width: 100%;\n      height: 2.5em;\n      line-height: 2.5em;\n      text-align: center;\n      cursor: pointer;\n      color: #666;\n      background: #fafafa;\n      border-radius: 1.25em; }\n  .valine .vlist {\n    width: 100%;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n    .valine .vlist .vcard {\n      display: -webkit-box;\n      display: flex;\n      display: -ms-flexbox;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 2em 1em 1.5em;\n      border: 1px solid rgba(150, 150, 150, 0.18);\n      margin: 2em 0 0;\n      list-style: none;\n      border-radius: 5px;\n      word-break: break-all; }\n      .valine .vlist .vcard:hover {\n        border: 1px solid rgba(150, 150, 150, 0.25); }\n      .valine .vlist .vcard:hover .vat {\n        background: #111 !important; }\n      .valine .vlist .vcard .vat {\n        margin: -2.1em 0 0;\n        float: right;\n        background: transparent;\n        color: #ffffff;\n        padding: .2em 1em;\n        line-height: 1.2;\n        cursor: pointer;\n        word-break: keep-all;\n        white-space: nowrap;\n        text-transform: uppercase; }\n      .valine .vlist .vcard .vavatar {\n        -webkit-box-flex: 0;\n                flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n        margin-right: 1em;\n        margin-top: 0.1em;\n        display: inline-block;\n        height: 3em;\n        width: 3em;\n        position: relative;\n        border-radius: 50%; }\n      .valine .vlist .vcard .text-wrapper {\n        overflow: visible;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        width: 100%; }\n        .valine .vlist .vcard .text-wrapper .vhead {\n          line-height: 1;\n          margin-bottom: 1em; }\n          .valine .vlist .vcard .text-wrapper .vhead .vname {\n            font-weight: bolder;\n            font-size: 1em;\n            color: rgba(0, 0, 0, 0.7); }\n          .valine .vlist .vcard .text-wrapper .vhead .spacer {\n            color: #ccc;\n            margin-left: 0.3em;\n            margin-right: 0.3em; }\n          .valine .vlist .vcard .text-wrapper .vhead .vtime {\n            color: #a9a4a4;\n            display: inline-block;\n            font-weight: normal; }\n        .valine .vlist .vcard .text-wrapper .vcomment {\n          position: relative; }\n          .valine .vlist .vcard .text-wrapper .vcomment blockquote p {\n            padding-left: 12px; }\n          .valine .vlist .vcard .text-wrapper .vcomment p {\n            word-wrap: break-word;\n            white-space: pre-wrap;\n            word-break: break-all;\n            text-align: justify;\n            line-height: 1.8; }\n          .valine .vlist .vcard .text-wrapper .vcomment pre {\n            overflow: auto;\n            padding: 6px 10px;\n            word-wrap: break-word;\n            color: #555;\n            background: #f5f2f2;\n            border-radius: 3px;\n            font-size: .875rem;\n            margin: 5px 0; }\n          .valine .vlist .vcard .text-wrapper .vcomment.expand {\n            cursor: pointer;\n            max-height: 11.25rem;\n            overflow: hidden; }\n            .valine .vlist .vcard .text-wrapper .vcomment.expand:before {\n              display: block;\n              content: "";\n              position: absolute;\n              width: 100%;\n              left: 0;\n              top: 0;\n              bottom: 3.15rem;\n              pointer-events: none;\n              background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.8)));\n              background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)); }\n            .valine .vlist .vcard .text-wrapper .vcomment.expand:after {\n              display: block;\n              content: "\\5C55\\5F00         ";\n              text-align: center;\n              color: #828586;\n              position: absolute;\n              width: 100%;\n              height: 3.15rem;\n              line-height: 3.15rem;\n              left: 0;\n              bottom: 0;\n              pointer-events: none;\n              background: rgba(255, 255, 255, 0.9); }\n    .valine .vlist .vempty {\n      padding: 20px;\n      text-align: center;\n      color: #999; }\n  .valine .spinner {\n    margin: 10px auto;\n    width: 50px;\n    height: 30px;\n    text-align: center;\n    font-size: 10px; }\n  .valine .spinner > div {\n    background-color: #9c9c9c;\n    height: 100%;\n    width: 6px;\n    margin-right: 3px;\n    display: inline-block;\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n  .valine .spinner .r2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s; }\n  .valine .spinner .r3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n  .valine .spinner .r4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s; }\n  .valine .spinner .r5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n', ""])
    }, function (e, t) {
        function n(e, t) {
            var n = e[1] || "",
                i = e[3];
            if (!i) return n;
            if (t && "function" == typeof btoa) {
                var o = r(i);
                return [n].concat(i.sources.map(function (e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                })).concat([o]).join("\n")
            }
            return [n].join("\n")
        }

        function r(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }
        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var r = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                }).join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var a = e[i];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, function (e, t, n) {
        function r(e) {
            return void 0 === e || null === e
        }

        function i(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        }

        function o(e) {
            e = i(e || {}), e.whiteList = e.whiteList || a.whiteList, e.onAttr = e.onAttr || a.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || a.safeAttrValue, this.options = e
        }
        var a = n(2),
            s = n(14);
        n(3);
        o.prototype.process = function (e) {
            if (e = e || "", !(e = e.toString())) return "";
            var t = this,
                n = t.options,
                i = n.whiteList,
                o = n.onAttr,
                a = n.onIgnoreAttr,
                l = n.safeAttrValue;
            return s(e, function (e, t, n, s, c) {
                var u = i[n],
                    p = !1;
                if (!0 === u ? p = u : "function" == typeof u ? p = u(s) : u instanceof RegExp && (p = u.test(s)), !0 !== p && (p = !1), s = l(n, s)) {
                    var d = {
                        position: t,
                        sourcePosition: e,
                        source: c,
                        isWhite: p
                    };
                    if (p) {
                        var h = o(n, s, d);
                        return r(h) ? n + ":" + s : h
                    }
                    var h = a(n, s, d);
                    return r(h) ? void 0 : h
                }
            })
        }, e.exports = o
    }, function (e, t, n) {
        function r(e, t) {
            function n() {
                if (!o) {
                    var n = i.trim(e.slice(a, s)),
                        r = n.indexOf(":");
                    if (-1 !== r) {
                        var c = i.trim(n.slice(0, r)),
                            u = i.trim(n.slice(r + 1));
                        if (c) {
                            var p = t(a, l.length, c, u, n);
                            p && (l += p + "; ")
                        }
                    }
                }
                a = s + 1
            }
            e = i.trimRight(e), ";" !== e[e.length - 1] && (e += ";");
            for (var r = e.length, o = !1, a = 0, s = 0, l = ""; s < r; s++) {
                var c = e[s];
                if ("/" === c && "*" === e[s + 1]) {
                    var u = e.indexOf("*/", s + 2);
                    if (-1 === u) break;
                    s = u + 1, a = s + 1, o = !1
                } else "(" === c ? o = !0 : ")" === c ? o = !1 : ";" === c ? o || n() : "\n" === c && n()
            }
            return i.trim(l)
        }
        var i = n(3);
        e.exports = r
    }, function (e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = f[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++) i.parts.push(u(r.parts[o], t))
                } else {
                    for (var a = [], o = 0; o < r.parts.length; o++) a.push(u(r.parts[o], t));
                    f[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function i(e, t) {
            for (var n = [], r = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    a = t.base ? o[0] + t.base : o[0],
                    s = o[1],
                    l = o[2],
                    c = o[3],
                    u = {
                        css: s,
                        media: l,
                        sourceMap: c
                    };
                r[a] ? r[a].parts.push(u) : n.push(r[a] = {
                    id: a,
                    parts: [u]
                })
            }
            return n
        }

        function o(e, t) {
            var n = v(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = x[x.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), x.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }

        function a(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = x.indexOf(e);
            t >= 0 && x.splice(t, 1)
        }

        function s(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", c(t, e.attrs), o(e, t), t
        }

        function l(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), o(e, t), t
        }

        function c(e, t) {
            Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n])
            })
        }

        function u(e, t) {
            var n, r, i, o;
            if (t.transform && e.css) {
                if (!(o = t.transform(e.css))) return function () {};
                e.css = o
            }
            if (t.singleton) {
                var c = b++;
                n = m || (m = s(t)), r = p.bind(null, n, c, !1), i = p.bind(null, n, c, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), r = h.bind(null, n, t), i = function () {
                a(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = s(t), r = d.bind(null, n), i = function () {
                a(n)
            });
            return r(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t)
                    } else i()
                }
        }

        function p(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, i);
            else {
                var o = document.createTextNode(i),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }

        function d(e, t) {
            var n = t.css,
                r = t.media;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        function h(e, t, n) {
            var r = n.css,
                i = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = w(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }
        var f = {},
            g = function (e) {
                var t;
                return function () {
                    return void 0 === t && (t = e.apply(this, arguments)), t
                }
            }(function () {
                return window && document && document.all && !window.atob
            }),
            v = function (e) {
                var t = {};
                return function (n) {
                    return void 0 === t[n] && (t[n] = e.call(this, n)), t[n]
                }
            }(function (e) {
                return document.querySelector(e)
            }),
            m = null,
            b = 0,
            x = [],
            w = n(16);
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = g()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = i(e, t);
            return r(n, t),
                function (e) {
                    for (var o = [], a = 0; a < n.length; a++) {
                        var s = n[a],
                            l = f[s.id];
                        l.refs--, o.push(l)
                    }
                    if (e) {
                        r(i(e, t), t)
                    }
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a];
                        if (0 === l.refs) {
                            for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                            delete f[l.id]
                        }
                    }
                }
        };
        var y = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                    return t
                }).replace(/^'(.*)'$/, function (e, t) {
                    return t
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
                var o;
                return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")"
            })
        }
    }, function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        function r(e) {
            return void 0 === e || null === e
        }

        function i(e) {
            var t = d.spaceIndex(e);
            if (-1 === t) return {
                html: "",
                closing: "/" === e[e.length - 2]
            };
            e = d.trim(e.slice(t + 1, -1));
            var n = "/" === e[e.length - 1];
            return n && (e = d.trim(e.slice(0, -1))), {
                html: e,
                closing: n
            }
        }

        function o(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        }

        function a(e) {
            e = o(e || {}), e.stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = l.onIgnoreTagStripAll), e.whiteList = e.whiteList || l.whiteList, e.onTag = e.onTag || l.onTag, e.onTagAttr = e.onTagAttr || l.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || l.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || l.safeAttrValue, e.escapeHtml = e.escapeHtml || l.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new s(e.css))
        }
        var s = n(0).FilterCSS,
            l = n(4),
            c = n(5),
            u = c.parseTag,
            p = c.parseAttr,
            d = n(1);
        a.prototype.process = function (e) {
            if (e = e || "", !(e = e.toString())) return "";
            var t = this,
                n = t.options,
                o = n.whiteList,
                a = n.onTag,
                s = n.onIgnoreTag,
                c = n.onTagAttr,
                h = n.onIgnoreTagAttr,
                f = n.safeAttrValue,
                g = n.escapeHtml,
                v = t.cssFilter;
            n.stripBlankChar && (e = l.stripBlankChar(e)), n.allowCommentTag || (e = l.stripCommentTag(e));
            var m = !1;
            if (n.stripIgnoreTagBody) {
                var m = l.StripTagBody(n.stripIgnoreTagBody, s);
                s = m.onIgnoreTag
            }
            var b = u(e, function (e, t, n, l, u) {
                var m = {
                        sourcePosition: e,
                        position: t,
                        isClosing: u,
                        isWhite: o.hasOwnProperty(n)
                    },
                    b = a(n, l, m);
                if (!r(b)) return b;
                if (m.isWhite) {
                    if (m.isClosing) return "</" + n + ">";
                    var x = i(l),
                        w = o[n],
                        y = p(x.html, function (e, t) {
                            var i = -1 !== d.indexOf(w, e),
                                o = c(n, e, t, i);
                            if (!r(o)) return o;
                            if (i) return t = f(n, e, t, v), t ? e + '="' + t + '"' : e;
                            var o = h(n, e, t, i);
                            return r(o) ? void 0 : o
                        }),
                        l = "<" + n;
                    return y && (l += " " + y), x.closing && (l += " /"), l += ">"
                }
                var b = s(n, l, m);
                return r(b) ? g(l) : b
            }, g);
            return m && (b = m.remove(b)), b
        }, e.exports = a
    }])
});
//# sourceMappingURL=Valine.min.js.map