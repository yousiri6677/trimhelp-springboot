/*!OneAPM-v415.6.31 */
!function () {
    window.BWEUM || (window.BWEUM = {});
    var a;
    window.BWEUM.require = a, window.apmFirstbyte = window.apmUserFirstbyte || (new Date).getTime(), window.apmBICookieUser = "AIPortal_Res_Account", window.apmBIUserFindLazy = "AIPortal_Res_Account", window.apmBISessionTime = 30, a = function b(c, d, e) {
        function f(h, i) {
            if (!d[h]) {
                if (!c[h]) {
                    var j = "function" == typeof a && a;
                    if (!i && j) return j(h, !0);
                    if (g) return g(h, !0);
                    var k = new Error("Cannot find module '" + h + "'");
                    throw k.code = "MODULE_NOT_FOUND", k
                }
                var l = d[h] = {exports: {}};
                c[h][0].call(l.exports, function (a) {
                    var b = c[h][1][a];
                    return f(b ? b : a)
                }, l, l.exports, b, c, d, e)
            }
            return d[h].exports
        }

        for (var g = "function" == typeof a && a, h = 0; h < e.length; h++) f(e[h]);
        return f
    }({
        44: [function (a, b) {
            function c(a, b) {
                var c = [], e = "", f = 0;
                for (e in a) d.call(a, e) && (c[f] = b(e, a[e]), f += 1);
                return c
            }

            var d = Object.prototype.hasOwnProperty;
            b.exports = c
        }, {}], 37: [function (a, b) {
            function c(a) {
                var b = "";
                try {
                    b = decodeURI(a.indexOf("%u") >= 0 ? unescape(a) : a)
                } catch (c) {
                    b = a
                }
                return b
            }

            b.exports = c
        }, {}], 43: [function (a, b) {
            function c(a, b, c) {
                b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
                for (var d = -1, e = c - b || 0, f = new Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d];
                return f
            }

            b.exports = c
        }, {}], 41: [function (a, b) {
            function c() {
                var a = m.info = window.BWEUM.info;
                if (a && a.agent && a.licenseKey && a.applicationID && i && i.body && (m.proto = "https" === l.split(":")[0] || a.sslForHttp ? "https://" : "http://", !window.BWEUM.haveLoad)) {
                    window.BWEUM.haveLoad = !0, g("mark", ["onload", f()]);
                    var b = i.createElement("script");
                    b.src = 0 == a.agent.indexOf("//") ? a.agent : m.proto + a.agent, b.src += "?v=415.6.31 ", i.body.appendChild(b)
                }
            }

            function d() {
                "complete" === i.readyState && e()
            }

            function e() {
                1 != o && (g("mark", ["domContent", f()]), o = !0)
            }

            function f() {
                return (new Date).getTime()
            }

            var g = a("handle"), h = window, i = h.document, j = "addEventListener", k = "attachEvent",
                l = ("" + location).split("?")[0],
                m = b.exports = {offset: window.apmFirstbyte || f(), origin: l, features: {}, infoself: {}};
            g("mark", ["firstbyte", window.apmFirstbyte || f()]), "complete" === document.readyState ? (e(), c()) : i[j] ? (i[j]("DOMContentLoaded", e, !1), h[j]("load", c, !1)) : (i[k]("onreadystatechange", d), h[k]("onload", c));
            var n = !1, o = !1;
            try {
                n = null == window.frameElement && document.documentElement
            } catch (m) {
            }
            n && n.doScroll && !function p() {
                if (!o) {
                    try {
                        n.doScroll("left")
                    } catch (a) {
                        return setTimeout(p, 50)
                    }
                    e()
                }
            }()
        }, {handle: 40}], 40: [function (a, b) {
            function c(a, b, c) {
                return d.listeners(a).length ? d.emit(a, b, c) : (e[a] || (e[a] = []), void e[a].push(b))
            }

            var d = a("ee").create(), e = {};
            b.exports = c, c.ee = d, d.q = e
        }, {ee: 38}], 38: [function (a, b) {
            function c(a, b) {
                var c = g(a, f);
                c && 1 == c.ended && (a[b] = {}, delete a[b])
            }

            function d(a) {
                function b(b, d, h) {
                    a && a(b, d, h), h || (h = {});
                    var j = i(b), k = j.length, l = {};
                    try {
                        l = g(h, f, e)
                    } catch (m) {
                    }
                    for (var n = 0; k > n; n++) j[n].apply(l, d);
                    try {
                        c(h, f, e)
                    } catch (m) {
                    }
                    return l
                }

                function h(a, b) {
                    k[a] = i(a).concat(b)
                }

                function i(a) {
                    return k[a] || []
                }

                function j() {
                    return d(b)
                }

                var k = {};
                return {on: h, emit: b, create: j, listeners: i, _events: k}
            }

            function e() {
                return {}
            }

            var f = "bw@context", g = a("gos");
            b.exports = d()
        }, {gos: 39}], 39: [function (a, b) {
            function c(a, b, c) {
                if (d.call(a, b)) return a[b];
                var e = c();
                if (Object.defineProperty && Object.keys) try {
                    return Object.defineProperty(a, b, {value: e, writable: !0, enumerable: !1}), e
                } catch (f) {
                }
                try {
                    a[b] = e
                } catch (f) {
                }
                return e
            }

            var d = Object.prototype.hasOwnProperty;
            b.exports = c
        }, {}], 36: [function (a, b) {
            b.exports = function (a) {
                var b, c;
                return b = "ONEAPM_AI" == a ? window.oneapmBICookie || document.cookie : document.cookie, c = b.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)")), null != c ? unescape(c[2]) : null
            }
        }, {}]
    }, {}, []), a = function c(b, d, e) {
        function f(h, i) {
            if (!d[h]) {
                if (!b[h]) {
                    var j = "function" == typeof a && a;
                    if (!i && j) return j(h, !0);
                    if (g) return g(h, !0);
                    var k = new Error("Cannot find module '" + h + "'");
                    throw k.code = "MODULE_NOT_FOUND", k
                }
                var l = d[h] = {exports: {}};
                b[h][0].call(l.exports, function (a) {
                    var c = b[h][1][a];
                    return f(c ? c : a)
                }, l, l.exports, c, b, d, e)
            }
            return d[h].exports
        }

        for (var g = "function" == typeof a && a, h = 0; h < e.length; h++) f(e[h]);
        return f
    }({
        1: [function (a) {
            a("loader"), a("errorload"), a("xhrload"), a("perfload");
            var b = a("UserIdentifier");
            b();
            var c = a("aiPageCookie");
            c(), a("wrap-fetch")
        }, {UserIdentifier: 6, aiPageCookie: 7, errorload: 8, loader: 41, perfload: 9, "wrap-fetch": 33, xhrload: 10}],
        33: [function (a, b) {
            function c(a, b, c) {
                var d = a[b];
                "function" == typeof d && (a[b] = function () {
                    var a = d.apply(this, arguments);
                    return f.emit(c + "start", arguments, a), a.then(function (b) {
                        return f.emit(c + "end", [null, b], a), b
                    }, function (b) {
                        throw f.emit(c + "end", [b], a), b
                    })
                })
            }

            function d(a, b) {
                var c = g(b), d = a.params;
                d.url = c.url, d.url.length > 500 && (d.url = d.url.slice(0, 500)), a.sameOrigin = c.sameOrigin
            }

            function e() {
                return (new Date).getTime()
            }

            {
                var f = (a("lodash._slice"), a("ee").create()), g = a("prase-url-original"), h = a("gos"),
                    i = a("handle"), j = a("map-own");
                a("wrap-function")(f)
            }
            b.exports = f;
            var k = window, l = "fetch-", m = l + "body-", n = ["arrayBuffer", "blob", "json", "text", "formData"],
                o = k.Request, p = k.Response, q = k.fetch, r = "prototype";
            o && p && q && (j(n, function (a, b) {
                c(o[r], b, m), c(p[r], b, m)
            }), c(k, "fetch", l), f.on(l + "end", function (a, b) {
                var c = this, d = {};
                h(d, "bw@context", function () {
                    return c
                }), b ? b.clone().arrayBuffer().then(function (a) {
                    c.rxSize = a.byteLength, f.emit(l + "done", [null, b], d)
                }) : f.emit(l + "done", [a], d)
            })), f.on("fetch-start", function (a, b) {
                var c, f;
                this.totalCbs = 0, this.called = 0, this.cbTime = 0, this.ended = !1, this.xhrGuids = {}, this.startTime = e(), this.metrics = {}, this.metrics.txSize = 0, "object" == typeof a ? (c = a.url, f = a.method) : (c = a, void 0 == b && (b = {}), f = b.method || "get", b && b.body && "string" == typeof b.body && (this.metrics.txSize = b.body.length)), this.params = {method: f}, d(this, c)
            }), f.on("fetch-end", function () {
                this.endTime = e()
            }), f.on("fetch-done", function (a, b) {
                a || (this.ended = !0, this.metrics.duration = this.endTime - this.startTime, this.metrics.rxSize = this.rxSize, this.params.status = b.status, i("xhr", [this.params, this.metrics, this.startTime, this.creatType]))
            })
        }, {
            ee: 38,
            gos: 39,
            handle: 40,
            "lodash._slice": 43,
            "map-own": 44,
            "prase-url-original": 46,
            "wrap-function": 47
        }],
        10: [function (a) {
            function b(a) {
                if ("string" == typeof a && a.length) return a.length;
                if ("object" != typeof a) return void 0;
                if ("undefined" != typeof ArrayBuffer && a instanceof ArrayBuffer && a.byteLength) return a.byteLength;
                if ("undefined" != typeof Blob && a instanceof Blob && a.size) return a.size;
                if ("undefined" != typeof FormData && a instanceof FormData) return void 0;
                try {
                    return JSON.stringify(a).length
                } catch (b) {
                    return void 0
                }
            }

            function c(a, b) {
                return b
            }

            function d(a) {
                var b, c = a.split("||"), d = 0, e = c.length, f = {};
                for (d; e > d; d++) b = c[d].split(":"), f[b[0]] = b[1];
                return f
            }

            function e(a) {
                a.send = q.wrapOld(a.send, "send-xhr-", c), a.onreadystatechange = q.wrapOld(a.onreadystatechange, "iexhr-onreadystatechange-", c), a.onerror = q.wrapOld(a.onerror, "iexhr-onerror-", c)
            }

            function f(a) {
                var c = this.params, e = this.metrics;
                if (!this.ended) {
                    if (this.ended = !0, a.removeEventListener) for (var f = 0; o > f; f++) a.removeEventListener(n[f], this.listener, !1);
                    if (!c.aborted) {
                        if (e.duration = (new Date).getTime() - this.startTime, 4 === a.readyState) {
                            c.status = a.status;
                            var g, h = a.responseType,
                                i = "arraybuffer" === h || "blob" === h || "json" === h ? a.response : a.responseText,
                                l = b(i);
                            l && (e.rxSize = l), this.sameOrigin && (g = a.getResponseHeader("ONEAPM_AI")), g && (c.cat = d(g), e.webTime = c.cat.applicationTime, e.queueTime = c.cat.queueTime, delete c.cat.queueTime, delete c.cat.applicationTime)
                        } else c.status = 0;
                        e.cbTime = this.cbTime, c.url = j(c.url), c && c.url && c.url.indexOf("beacon/resources") < 0 && k("xhr", [c, e, this.startTime, this.creatType])
                    }
                }
            }

            function g(a, b) {
                var c = l(b), d = a.params;
                d.url = c.url, d.url.length > 500 && (d.url = d.url.slice(0, 500)), a.sameOrigin = c.sameOrigin
            }

            var h = window, i = (h.performance, window.XMLHttpRequest);
            if (i && i.prototype && !/CriOS/.test(navigator.userAgent)) {
                a("loader").features.xhr = !0;
                var j = a("decodeurlfn"), k = a("handle"), l = a("prase-url-original"), m = a("ee"),
                    n = ["load", "error", "abort", "timeout"], o = n.length, p = a("loader_id"),
                    q = a("wrap-function")(m);
                a("wrap-events"), a("wrap-xhr"), m.on("new-xhr", function () {
                    this.totalCbs = 0, this.called = 0, this.cbTime = 0, this.end = f, this.ended = !1, this.xhrGuids = {}
                }), m.on("open-xhr-start", function (a) {
                    this.params = {method: a[0]}, g(this, a[1]), this.metrics = {}
                }), m.on("open-xhr-end", function (a, b) {
                    this.sameOrigin && b.setRequestHeader("isAjax", "true"), b.__oldie && e(b)
                }), m.on("send-xhr-start", function (a, c) {
                    var d = this.metrics, e = a[0], f = this;
                    if (d && e) {
                        var g = b(e);
                        g && (d.txSize = g)
                    }
                    if (this.startTime = (new Date).getTime(), this.listener = function (a) {
                        try {
                            "abort" === a.type && (f.params.aborted = !0), ("load" !== a.type || f.called === f.totalCbs && (f.onloadCalled || "function" != typeof c.onload)) && f.end && f.end(c)
                        } catch (b) {
                            try {
                                m.emit("internal-error", [b])
                            } catch (d) {
                            }
                        }
                    }, c.addEventListener) for (var h = 0; o > h; h++) c.addEventListener(n[h], this.listener, !1)
                }), m.on("iexhr-onreadystatechange-start", function (a, b) {
                    if (1 == b.readyState) {
                        var d = b.onreadystatechange;
                        setTimeout(function () {
                            b.onreadystatechange !== d && (b.onreadystatechange = q.wrapOld(b.onreadystatechange, "iexhr-onreadystatechange-", c))
                        }, 0)
                    }
                    4 == b.readyState && (this.xhrCbStart = (new Date).getTime())
                }), m.on("iexhr-onreadystatechange-end", function (a, b) {
                    var c = this;
                    this.xhrCbStart && m.emit("xhr-cb-time", [(new Date).getTime() - this.xhrCbStart, this.onload, b], b), 4 == b.readyState && c.end(b)
                }), m.on("xhr-cb-time", function (a, b, c) {
                    this.cbTime += a, b ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof c.onload || this.end(c)
                }), m.on("xhr-load-added", function (a, b) {
                    var c = "" + p(a) + !!b;
                    this.xhrGuids && !this.xhrGuids[c] && (this.xhrGuids[c] = !0, this.totalCbs += 1)
                }), m.on("xhr-load-removed", function (a, b) {
                    var c = "" + p(a) + !!b;
                    this.xhrGuids && this.xhrGuids[c] && (delete this.xhrGuids[c], this.totalCbs -= 1)
                }), m.on("addEventListener-end", function (a, b) {
                    b instanceof XMLHttpRequest && "load" === a[0] && m.emit("xhr-load-added", [a[1], a[2]], b)
                }), m.on("removeEventListener-end", function (a, b) {
                    b instanceof XMLHttpRequest && "load" === a[0] && m.emit("xhr-load-removed", [a[1], a[2]], b)
                }), m.on("fn-start", function (a, b, c) {
                    b instanceof XMLHttpRequest && ("onload" === c && (this.onload = !0), ("load" === (a[0] && a[0].type) || this.onload) && (this.xhrCbStart = (new Date).getTime()))
                }), m.on("fn-end", function (a, b) {
                    this.xhrCbStart && m.emit("xhr-cb-time", [(new Date).getTime() - this.xhrCbStart, this.onload, b], b)
                })
            }
        }, {
            decodeurlfn: 37,
            ee: 38,
            handle: 40,
            loader: 41,
            loader_id: 42,
            "prase-url-original": 46,
            "wrap-events": 32,
            "wrap-function": 47,
            "wrap-xhr": 35
        }],
        46: [function (a, b) {
            b.exports = function (a) {
                var b = document.createElement("a"), c = window.location, d = {};
                b.href = a, d.url = b.href;
                var e = b.href.indexOf("https://"), f = b.href.indexOf("http://"), g = window.location;
                return 0 > e && 0 > f && ("/" !== d.url.charAt(0) && (d.url = "/" + d.url), d.url = g.protocol + "//" + g.hostname + ":" + g.port + d.url), d.sameOrigin = !b.hostname || b.hostname === document.domain && b.port === c.port && b.protocol === c.protocol, d
            }
        }, {}],
        42: [function (a, b) {
            function c(a) {
                var b = typeof a;
                return !a || "object" !== b && "function" !== b ? -1 : a === window ? 0 : f(a, e, function () {
                    return d++
                })
            }

            var d = 1, e = "bw@id", f = a("gos");
            b.exports = c
        }, {gos: 39}],
        9: [function (a) {
            var b = window.performance;
            if (b && b.timing && b.getEntriesByType) {
                var c = a("ee"), d = (a("handle"), a("wrap-timer"), a("loader"));
                d.features.stn = !0, c.on("fn-start", function (a) {
                    var b = a[0];
                    b instanceof Event && (this.bstStart = Date.now())
                }), c.on("fn-end", function () {
                })
            }
        }, {ee: 38, handle: 40, loader: 41, "wrap-timer": 34}],
        8: [function (a) {
            function b(a, b, d, g, i) {
                try {
                    j ? j -= 1 : e("err", [i || new c(a, b, d)])
                } catch (k) {
                    try {
                        e("ierr", [k, (new Date).getTime(), !0])
                    } catch (l) {
                    }
                }
                return "function" == typeof h ? h.apply(this, f(arguments)) : !1
            }

            function c(a, b, c) {
                this.message = a || "Uncaught error with no additional information", this.sourceURL = b, this.line = c
            }

            function d(a) {
                e("err", [a, (new Date).getTime()])
            }

            var e = a("handle"), f = a("lodash._slice"), g = a("ee"), h = window.onerror, i = !1, j = 0;
            a("loader").features.err = !0, window.onerror = b, window.BWEUM.noticeError = d;
            var k = window.XMLHttpRequest;
            try {
                throw new Error
            } catch (l) {
                "stack" in l && (a("wrap-timer"), "addEventListener" in window && a("wrap-events"), k && k.prototype && k.prototype.addEventListener && a("wrap-xhr"), i = !0)
            }
            g.on("fn-start", function () {
                i && (j += 1)
            }), g.on("fn-err", function (a, b, c) {
                i && (this.thrown = !0, d(c))
            }), g.on("fn-end", function () {
                i && !this.thrown && j > 0 && (j -= 1)
            }), g.on("internal-error", function (a) {
                e("ierr", [a, (new Date).getTime(), !0])
            })
        }, {ee: 38, handle: 40, loader: 41, "lodash._slice": 43, "wrap-events": 32, "wrap-timer": 34, "wrap-xhr": 35}],
        35: [function (a, b) {
            function c() {
                j.inPlace(this, m, "fn-")
            }

            function d(a, b) {
                j.inPlace(b, ["onreadystatechange"], "fn-")
            }

            function e(a) {
                a.open = j.wrapOld(a.open, "open-xhr-", f)
            }

            function f(a, b) {
                return b
            }

            var g = a("ee").create(), h = a("wrap-events"), i = a("wrap-function"), j = i(g), k = i(h),
                l = window.XMLHttpRequest,
                m = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"];
            b.exports = g, window._ApmXMLHttpRequest = window.XMLHttpRequest, window.XMLHttpRequest = function (a) {
                var b = new l(a);
                try {
                    g.emit("new-xhr", [], b), l.prototype.addEventListener ? (k.inPlace(b, ["addEventListener", "removeEventListener"], "-", function (a, b) {
                        return b
                    }), b.addEventListener("readystatechange", c, !1)) : (b.__oldie = !0, e(b))
                } catch (d) {
                    try {
                        g.emit("internal-error", [d])
                    } catch (f) {
                    }
                }
                return b
            }, window.XMLHttpRequest.prototype = l.prototype, j.inPlace(XMLHttpRequest.prototype, ["open", "send"], "-xhr-", f), g.on("send-xhr-start", d), g.on("open-xhr-start", d)
        }, {ee: 38, "wrap-events": 32, "wrap-function": 47}],
        34: [function (a, b) {
            function c(a, b, c) {
                var d = a[0];
                "string" == typeof d && (d = new Function(d)), a[0] = e(d, "fn-", null, c)
            }

            var d = (a("lodash._slice"), a("ee").create()), e = a("wrap-function")(d);
            b.exports = d, e.inPlace(window, ["setTimeout", "setInterval", "setImmediate"], "setTimer-"), d.on("setTimer-start", c)
        }, {ee: 38, "lodash._slice": 43, "wrap-function": 47}],
        32: [function (a, b) {
            function c(a) {
                f.inPlace(a, ["addEventListener", "removeEventListener"], "-", d)
            }

            function d(a) {
                return a[1]
            }

            var e = (a("lodash._slice"), a("ee").create()), f = a("wrap-function")(e), g = a("gos");
            if (b.exports = e, c(window), "getPrototypeOf" in Object) {
                for (var h = document; h && !h.hasOwnProperty("addEventListener");) h = Object.getPrototypeOf(h);
                h && c(h);
                for (var i = XMLHttpRequest.prototype; i && !i.hasOwnProperty("addEventListener");) i = Object.getPrototypeOf(i);
                i && c(i)
            } else Object.prototype.hasOwnProperty.call(XMLHttpRequest, "addEventListener") && c(XMLHttpRequest.prototype);
            e.on("addEventListener-start", function (a) {
                if (a[1]) {
                    var b = a[1];
                    "function" == typeof b ? this.wrapped = a[1] = g(b, "bw@wrapped", function () {
                        return f(b, "fn-", null, b.name || "anonymous")
                    }) : "function" == typeof b.handleEvent && f.inPlace(b, ["handleEvent"], "fn-")
                }
            }), e.on("removeEventListener-start", function (a) {
                var b = this.wrapped;
                b && (a[1] = b)
            })
        }, {ee: 38, gos: 39, "lodash._slice": 43, "wrap-function": 47}],
        47: [function (a, b) {
            function c(a) {
                return !(a && "function" == typeof a && a.apply && !a[f])
            }

            var d = a("ee"), e = a("lodash._slice"), f = "bw@wrapper", g = Object.prototype.hasOwnProperty;
            b.exports = function (a) {
                function b(a, b, d, g, i) {
                    function j() {
                        var c = this;
                        return h(a, b, c, e(arguments), d, g, i)
                    }

                    if (c(a)) return a;
                    b || (b = "");
                    try {
                        j[f] = !0
                    } catch (k) {
                    }
                    return l(a, j), j
                }

                function h(a, b, c, d, e, f) {
                    var d, c, g, h, i;
                    try {
                        g = e && e(d, c) || {}
                    } catch (j) {
                        m([j, "", [d, c, f], g])
                    }
                    i = a.name || "", k(b + "start", [d, c, f, i], g);
                    try {
                        return h = a.apply(c, d)
                    } catch (l) {
                        var n = window.console;
                        throw void 0 != n && n.error && n.log && void 0 != l.stack && (n.log("OneAPM  catch  error"), n.error(l.stack)), k(b + "err", [d, c, l], g), l
                    } finally {
                        k(b + "end", [d, c, h, i], g)
                    }
                }

                function i(a, b, c) {
                    var a = a || function () {
                    }, b = b || "-";
                    return function () {
                        var d = this;
                        return h(a, b, d, e(arguments), c)
                    }
                }

                function j(a, d, e, f) {
                    e || (e = "");
                    var g, h, i, j = "-" === e.charAt(0);
                    for (i = 0; i < d.length; i++) h = d[i], g = a[h], c(g) || (a[h] = b(g, j ? h + e : e, f, h, a))
                }

                function k(b, c, d) {
                    try {
                        a.emit(b, c, d)
                    } catch (e) {
                        m([e, b, c, d])
                    }
                }

                function l(a, b) {
                    if (Object.defineProperty && Object.keys) try {
                        var c = Object.keys(a);
                        return c.forEach(function (c) {
                            Object.defineProperty(b, c, {
                                get: function () {
                                    return a[c]
                                }, set: function (b) {
                                    return a[c] = b, b
                                }
                            })
                        }), b
                    } catch (d) {
                        m([d])
                    }
                    for (var e in a) g.call(a, e) && (b[e] = a[e]);
                    return b
                }

                function m(b) {
                    try {
                        a.emit("internal-error", b)
                    } catch (c) {
                    }
                }

                return a || (a = d), b.inPlace = j, b.flag = f, b.wrapOld = i, b
            }
        }, {ee: 38, "lodash._slice": 43}],
        7: [function (a, b) {
            {
                var c = a("cookie");
                a("loader")
            }
            b.exports = function () {
                var a, b = c("ONEAPM_AI"), d = [], e = [], f = 0, g = {
                    applicationID: "",
                    applicationTime: "",
                    queueTime: "",
                    licenseKey: "",
                    transactionName: "",
                    ttGuid: "",
                    tierName: ""
                };
                if (null != b) for (d = b.split("||"), a = d.length, f; a > f; f++) if (void 0 != d[f]) switch (e = d[f].split(":"), e[0]) {
                    case"applicationID":
                        g.applicationID = e[1];
                        break;
                    case"applicationTime":
                        g.applicationTime = e[1];
                        break;
                    case"queueTime":
                        g.queueTime = e[1];
                        break;
                    case"licenseKey":
                        g.licenseKey = e[1];
                        break;
                    case"transactionName":
                        g.transactionName = e[1];
                        break;
                    case"ttGuid":
                        g.ttGuid = e[1];
                        break;
                    case"tierName":
                        g.tierName = e[1]
                }
                window.BWEUM.aicookie = g
            }
        }, {cookie: 36, loader: 41}],
        6: [function (a, b) {
            var c = a("cookie");
            b.exports = function () {
                if ("" != window.apmBICookieUser) {
                    var a = c(window.apmBICookieUser);
                    null != a && (window.apmBiUser = a, window.apmBiUser += "")
                }
            }
        }, {cookie: 36}]
    }, {}, [1]), window.BWEUM.require = a
}();