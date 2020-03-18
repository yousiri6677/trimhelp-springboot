(function (e, t) {
    if (typeof exports === "object") {
        module.exports = t()
    } else if (typeof define === "function" && define.cmd) {
        define(t)
    } else {
        e.T8TCount = t()
    }
    var r = document.createElement("script");
    r.src = "https://static.to8to.com/count/block_std.js?201809121130";
    document.getElementsByTagName("HEAD")[0].appendChild(r)
})(this, function () {
    var SDK_verson = "1.1", cookie_id = "", session_id = "", xmlHttp,
        url = "https://usertracking.to8to.com/reportDataByGet",
        filterArr = ["href", "src", "alt", "title", "class", "id", "value", "name", "ptag", "data-ptag", "data-pg", "data-rsc", "data-oid", "data-sid", "did", "cid", "uid"];
    var bodyWidth = document.documentElement.offsetWidth || (document.body ? document.body.offsetWidth : 0);
    var midCoordinate = bodyWidth / 2;
    var reg = /\"/g;
    var tMobileWidth = 360;
    var commonParams = {}, userParams = {}, otherParams = {};
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (e) {
            var t = document.getElementsByTagName("*");
            var r = [];
            for (var n = 0, i; i = t[n]; n++) {
                if (hasClassName(i, e)) {
                    r.push(i)
                }
            }
            return r
        }
    }
    if (!window.JSON) {
        window.JSON = {
            parse: function (jsonStr) {
                var ret = "";
                try {
                    ret = eval("(" + jsonStr + ")");
                    return ret
                } catch (e) {
                }
                return jsonStr
            }, stringify: function (e) {
                var t = "", r;
                if (e === null) {
                    return String(e)
                }
                switch (typeof e) {
                    case"number":
                    case"boolean":
                        return String(e);
                    case"string":
                        return '"' + e + '"';
                    case"undefined":
                    case"function":
                        return undefined
                }
                switch (Object.prototype.toString.call(e)) {
                    case"[object Array]":
                        t += "[";
                        for (var n = 0, i = e.length; n < i; n++) {
                            r = JSON.stringify(e[n]);
                            t += (r === undefined ? null : r) + ","
                        }
                        if (t !== "[") {
                            t = t.slice(0, -1)
                        }
                        t += "]";
                        return t;
                    case"[object Date]":
                        return '"' + (e.toJSON ? e.toJSON() : e.toString()) + '"';
                    case"[object RegExp]":
                        return "{}";
                    case"[object Object]":
                        t += "{";
                        for (n in e) {
                            if (e.hasOwnProperty(n)) {
                                r = JSON.stringify(e[n]);
                                if (r !== undefined) {
                                    t += '"' + n + '":' + r + ","
                                }
                            }
                        }
                        if (t !== "{") {
                            t = t.slice(0, -1)
                        }
                        t += "}";
                        return t;
                    case"[object String]":
                        return '"' + e.toString() + '"';
                    case"[object Number]":
                    case"[object Boolean]":
                        return e.toString()
                }
            }
        }
    }
    var cookie = {
        get: function (e, t) {
            validateCookieName(e);
            if (typeof t === "function") {
                t = {converter: t}
            } else {
                t = t || {}
            }
            var r = parseCookieString(document.cookie, !t["raw"]);
            return (t.converter || same)(r[e])
        }, set: function (e, t, r) {
            validateCookieName(e);
            r = r || {};
            var n = r["expires"] || 5e3;
            var i = r["domain"];
            var a = r["path"];
            if (!r["raw"]) {
                t = encodeURIComponent(String(t))
            }
            var o = e + "=" + t;
            var s = n;
            if (typeof s === "number") {
                s = new Date;
                s.setTime(s.getTime() + n)
            }
            if (s instanceof Date) {
                o += "; expires=" + s.toGMTString()
            }
            if (isNonEmptyString(i)) {
                o += "; domain=" + i
            }
            if (isNonEmptyString(a)) {
                o += "; path=" + a
            }
            if (r["secure"]) {
                o += "; secure"
            }
            document.cookie = o;
            return o
        }, remove: function (e, t) {
            t = t || {};
            t["expires"] = new Date(0);
            return this.set(e, "", t)
        }
    };
    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
            var t = "";
            var r, n, i, a, o, s, d;
            var f = 0;
            e = Base64._utf8_encode(e);
            while (f < e.length) {
                r = e.charCodeAt(f++);
                n = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                a = r >> 2;
                o = (r & 3) << 4 | n >> 4;
                s = (n & 15) << 2 | i >> 6;
                d = i & 63;
                if (isNaN(n)) {
                    s = d = 64
                } else if (isNaN(i)) {
                    d = 64
                }
                t = t + this._keyStr.charAt(a) + this._keyStr.charAt(o) + this._keyStr.charAt(s) + this._keyStr.charAt(d)
            }
            return t
        }, decode: function (e) {
            var t = "";
            var r, n, i;
            var a, o, s, d;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (f < e.length) {
                a = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                s = this._keyStr.indexOf(e.charAt(f++));
                d = this._keyStr.indexOf(e.charAt(f++));
                r = a << 2 | o >> 4;
                n = (o & 15) << 4 | s >> 2;
                i = (s & 3) << 6 | d;
                t = t + String.fromCharCode(r);
                if (s != 64) {
                    t = t + String.fromCharCode(n)
                }
                if (d != 64) {
                    t = t + String.fromCharCode(i)
                }
            }
            t = Base64._utf8_decode(t);
            return t
        }, _utf8_encode: function (e) {
            e = e.replace(/\r\n/g, "\n");
            var t = "";
            for (var r = 0; r < e.length; r++) {
                var n = e.charCodeAt(r);
                if (n < 128) {
                    t += String.fromCharCode(n)
                } else if (n > 127 && n < 2048) {
                    t += String.fromCharCode(n >> 6 | 192);
                    t += String.fromCharCode(n & 63 | 128)
                } else {
                    t += String.fromCharCode(n >> 12 | 224);
                    t += String.fromCharCode(n >> 6 & 63 | 128);
                    t += String.fromCharCode(n & 63 | 128)
                }
            }
            return t
        }, _utf8_decode: function (e) {
            var t = "";
            var r = 0;
            var n = c1 = c2 = 0;
            while (r < e.length) {
                n = e.charCodeAt(r);
                if (n < 128) {
                    t += String.fromCharCode(n);
                    r++
                } else if (n > 191 && n < 224) {
                    c2 = e.charCodeAt(r + 1);
                    t += String.fromCharCode((n & 31) << 6 | c2 & 63);
                    r += 2
                } else {
                    c2 = e.charCodeAt(r + 1);
                    c3 = e.charCodeAt(r + 2);
                    t += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    r += 3
                }
            }
            return t
        }
    };
    var browser = {
        versions: function () {
            var e = navigator.userAgent, t = navigator.appVersion;
            return {
                trident: e.indexOf("Trident") > -1,
                presto: e.indexOf("Presto") > -1,
                webKit: e.indexOf("AppleWebKit") > -1,
                gecko: e.indexOf("Gecko") > -1 && e.indexOf("KHTML") == -1,
                mobile: !!e.match(/AppleWebKit.*Mobile.*/),
                ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                iPhone: e.indexOf("iPhone") > -1,
                iPad: e.indexOf("iPad") > -1,
                webApp: e.indexOf("Safari") == -1
            }
        }(), language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    var T8TCount = function (e) {
        this.option = {app: "pc_to8to", domain: ""};
        return this.init(e)
    };
    T8TCount.prototype = {
        init: function (e) {
            if (isObject(e) == true) {
                this.option = extend(this.option, e)
            }
            this.initT8tCookieId(this.option.domain);
            this.setSessionId();
            this.getPvParams();
            this.events()
        }, events: function () {
            var t = this;
            if (browser.versions.mobile) {
                mobileTouch(function (e) {
                    t.getEventParams(e)
                })
            } else {
                var r = window._onresize;
                window.onresize = function () {
                    typeof r === "function" && r.call(this, e);
                    getPageProperty()
                };
                addEventListener(document.documentElement, "click", function (e) {
                    var r = e || window.event;
                    t.getEventParams(r)
                })
            }
            addEventListener(window, "message", function (e) {
                var t, r = 0, n, i, a, o;
                try {
                    if (typeof e.data === "string") {
                        try {
                            t = JSON.parse(e.data)
                        } catch (e) {
                        }
                    } else {
                        t = e.data
                    }
                    if (typeof t === "object" && typeof t[0] === "object" && typeof t[0].result === "object" && t[0].result.point) {
                        n = t[0].result.point;
                        r = n.length;
                        for (var s = 0; s < r; s++) {
                            i = getXpathDOM(n[s].path);
                            if (i) {
                                a = getElePosition(i);
                                o = getEleSize(i);
                                n[s].w = o.width;
                                n[s].h = o.height;
                                n[s].l = a.left;
                                n[s].t = a.top
                            }
                        }
                        t[0].result.height = document.documentElement.scrollHeight || document.body.scrollHeight;
                        window.parent.window.postMessage(JSON.stringify(t), "http://data.to8to.com")
                    }
                } catch (e) {
                }
            })
        }, getCommonParams: function () {
            commonParams = {
                sv: SDK_verson,
                app: this.option.app,
                rs: deviceDPI(),
                cok: cookie_id,
                lan: navigator.language || navigator.systemLanguage,
                arf: this.option.app_ref || ""
            }
        }, getUserParams: function () {
            var e = browser.versions.mobile ? "to8to_wap_tname" : "to8to_tname";
            userParams = {sid: session_id, mid: this.getMsgId(), url: location.href};
            var t = getReferrer();
            if (t) {
                userParams.ref = t
            }
            if (cookie.get(e)) {
                userParams.ust = cookie.get(e)
            }
            if (cookie.get("to8to_uid")) {
                userParams.uid = cookie.get("to8to_uid")
            }
        }, getPvParams: function () {
            this.getCommonParams();
            this.getUserParams();
            userParams.evt = "pv", userParams.ct = getCurTimestamp();
            this.sendData(userParams)
        }, getEventParams: function (e) {
            var t = e.target || e.srcElement;
            var r = t.tagName.toLowerCase();
            var n = "";
            var i = "";
            var a = "";
            if (r == "html" || r == "body") {
                return false
            }
            this.getUserParams();
            userParams.pca = {};
            if (browser.versions.mobile) {
                userParams.pca = getMobilePostion(e.touches[0].pageX, e.touches[0].pageY)
            } else {
                if (e.target) {
                    userParams.pca = getEleProperty(e)
                }
            }
            n = getEleInfo(e);
            i = n["data-pg"] || n["data-ptag"] || "";
            a = n["data-rsc"] || "";
            if (i) {
                userParams.pg = i
            }
            var o = parseQuery(), s = location.pathname, d = 1;
            if (o.page) {
                d = o.page
            }
            if (/\list_/.test(location.href)) {
                d = s.substring(s.indexOf("_") + 1, s.indexOf("."))
            }
            if (a) {
                var f = [];
                var c = a.split("|");
                for (var u in c) {
                    var m = c[u].split("_");
                    var l = {
                        rty: m[0],
                        rid: m[1],
                        rtt: m[2] || "",
                        res: m[3] || 0,
                        rod: m[4] || "",
                        rodn: m[5] || "",
                        rpag: m[6] || d
                    };
                    f.push(l)
                }
                userParams.rsc = f
            } else {
                userParams.rsc = ""
            }
            userParams.ct = getCurTimestamp();
            userParams.evt = e.type == "touchstart" ? "click" : e.type;
            userParams = extend(userParams, createWidget(t));
            userParams = strip_empty_properties(userParams);
            this.sendData(userParams)
        }, postParams: function (e) {
            if (!e.evt) {
                return
            }
            var t = e.ele || null;
            this.getUserParams();
            userParams.pca = {};
            userParams.ct = getCurTimestamp();
            userParams.rsc = e.rsc || [];
            userParams.evt = e.evt;
            userParams.pg = e.pg;
            if (t) {
                userParams = extend(userParams, createWidget(t))
            }
            userParams = strip_empty_properties(userParams);
            this.sendData(userParams)
        }, sendData: function (e) {
            commonParams.st = getCurTimestamp();
            commonParams.ev = [];
            commonParams.ev.push(e);
            getJSONPData(commonParams)
        }, initT8tCookieId: function (e) {
            var e = e || getDomain();
            if (!cookie.get("to8tocookieid")) {
                var t = createGuid();
                cookie.set("to8tocookieid", t, {path: "/", domain: e, expires: 2592e6});
                cookie_id = t
            } else {
                cookie_id = cookie.get("to8tocookieid")
            }
        }, setSessionId: function (e) {
            var e = e || getDomain(), t = getReferrer(), r = location.host, n = false;
            var i = r.substr(r.indexOf(".") + 1, r.length), a = getHostName(t);
            if (t) {
                if (a.indexOf(i) === -1) {
                    n = true
                }
            }
            if (!cookie.get("to8tosessionid") || n) {
                session_id = "s_" + md5(getCurTimestamp() + randomWord() + cookie_id);
                cookie.set("to8tosessionid", session_id, {path: "/", domain: e, expires: 18e5})
            } else {
                session_id = cookie.get("to8tosessionid")
            }
            return session_id
        }, getMsgId: function () {
            var e = session_id || setSessionId(), t = "m_" + md5(getCurTimestamp() + randomWord() + e);
            return t
        }
    };

    function mobileTouch(e) {
        var t = false;
        var r = 0;
        var n = 0;
        var i;
        document.documentElement.addEventListener("touchstart", function (e) {
            r = Date.now();
            t = false;
            i = e
        });
        document.documentElement.addEventListener("touchmove", function (e) {
            t = true
        });
        document.documentElement.addEventListener("touchend", function () {
            if (!t && Date.now() - r < 300) {
                typeof e == "function" && e(i)
            }
        })
    }

    function getDeviceParams() {
        if (browser.versions.mobile == "ios") {
            return
        } else if (browser.versions.mobile == "android") {
            return
        }
    }

    function strip_empty_properties(e) {
        var t = {};
        for (var r in e) {
            if (e[r] != null) {
                t[r] = e[r]
            }
        }
        return t
    }

    function inArray(e, t, r) {
        var n = e.length || 0;
        var r = r || false, i, a = false;
        if (n <= 0) return false;
        for (var o = 0; o < n; o++) {
            i = e[o];
            a = r ? i === t : i == t;
            if (a === true) break
        }
        return a
    }

    function trim(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function createxmlHttpRequest() {
        if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
        } else if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest
        }
    }

    function postData(e) {
        createxmlHttpRequest();
        xmlHttp.open("POST", url);
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        xmlHttp.send(JSON.stringify(e));
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            }
        }
    }

    function getJSONPData(e, t) {
        var r = url + "?";
        var n = document.createElement("img");
        n.onload = function () {
            this.onload = null;
            typeof t === "function" && t()
        };
        n.onerror = function (e) {
            this.onerror = null;
            typeof t === "function" && t()
        };
        n.onabort = function (e) {
            this.onabort = null;
            typeof t === "function" && t()
        };
        n.src = r + parseData(e)
    }

    function parseData(e) {
        var t = "";
        if (isString(e)) {
            t = e
        } else if (isObject(e)) {
            e.callback = "callback";
            t = encodeURIComponent(JSON.stringify(e).replace(reg, '"'))
        }
        t = Base64.encode(t);
        return t
    }

    function loadScript(e, t) {
        var r = document.createElement("script");
        r.type = "text/javascript";
        r.src = e;
        if (r.readyState) {
            r.onreadystatechange = function () {
                var e = this.readyState;
                if (e === "loaded" || e === "complete") {
                    r.onreadystatechange = null;
                    t()
                }
            }
        } else {
            r.onload = t
        }
        document.getElementsByTagName("head")[0].appendChild(r)
    }

    function hasClassName(e, t) {
        if (e.className) {
            var r = e.className.split(" ");
            var n = t.toUpperCase();
            for (var i = 0; i < r.length; i++) {
                if (r[i].toUpperCase() == n) {
                    return true
                }
            }
        }
        return false
    }

    function getEleInfo(e) {
        var t = e.target || e.srcElement, r = t.tagName.toLowerCase();
        if (r == "html" || r == "body") {
            return
        }
        var n = {};
        if (r == "a") {
            n = getEleAttr(t)
        } else {
            var i = {};
            if (e.path) {
                for (var a in e.path) {
                    if (e.path[a].tagName == "A") {
                        i = getEleAttr(e.path[a]) || {}
                    }
                }
            } else {
                var o = getParentsEle(t, "a");
                i = o ? getEleAttr(o) : {}
            }
            n = extend(getEleAttr(t), i)
        }
        n = strip_empty_properties(n);
        return n
    }

    function getParent(e) {
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null
    }

    function dir(e, t, r) {
        var n = [], i = e[t];
        while (i && 9 !== i.nodeType && (r === undefined || 1 !== i.nodeType || i !== undefined)) 1 === i.nodeType && n.push(i), i = i[t];
        return n
    }

    function getParents(e) {
        return dir(e, "parentNode")
    }

    function getParentsEle(e, t) {
        var r = getParents(e);
        if (r && r.length) {
            for (var n = 0, i = r.length; n < i; n++) {
                var a = r[n];
                if (a && a.tagName && a.tagName === "A") {
                    return a
                }
            }
        } else {
            return false
        }
    }

    function getEleAttr(e) {
        var t = e.attributes, r = t.length, n = {};
        if (r == 0) {
            return n
        }
        for (var i in t) {
            if (t[i] && isObject(t[i]) && t[i].name && inArray(filterArr, t[i].name) && t[i].value && t[i].value != null) {
                n[t[i].name] = t[i].value
            }
        }
        return n
    }

    function getMobilePostion(e, t) {
        bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var r = tMobileWidth / bodyWidth;
        var n = Math.round(e * r);
        var i = Math.round(t * r);
        return {xax: n, yax: i}
    }

    function createWidget(e) {
        var t = e.tagName.toLowerCase();
        if (t == "html" || t == "body") {
            return {}
        }
        var r = getEleXPath(e);
        return {wid: md5(r), wtt: r}
    }

    function getPageProperty() {
        bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
        midCoordinate = bodyWidth / 2
    }

    function getBodySite() {
        var e = {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            left: document.body.offsetLeft,
            top: document.body.offsetTop
        };
        return e
    }

    function getElePosition(e) {
        var t = e.offsetTop;
        var r = e.offsetLeft;
        var n = e.offsetParent;
        while (n != null) {
            t += n.offsetTop + n.clientTop;
            r += n.offsetLeft + n.clientLeft;
            n = n.offsetParent
        }
        return {top: t, left: r}
    }

    function getEleXPath(e) {
        var t = e.parentNode;
        var r = t ? t.children : "";
        var n = e.tagName;
        var i = 0;
        var a = 0;
        if (e.id !== "") {
            return "#" + e.id
        }
        if (e === document.body) {
            return "html>" + e.tagName.toLowerCase()
        }
        for (a = 0; a < r.length; a++) {
            if (r[a].tagName === n) {
                if (r[a] === e) {
                    return getEleXPath(e.parentNode) + ">" + e.tagName + "[" + i + "]"
                }
                i += 1
            }
        }
        return e.tagName + "[" + i + "]"
    }

    function getXpathDOM(e) {
        var t = e.split(">");
        var r = document;
        var n;
        var i = 0;
        for (var a = 0; a < t.length; a++) {
            n = t[a].split("[");
            if (a === 0 && n[0] !== "html" && n[0].indexOf("#") <= -1) {
                return
            }
            if (n.length > 1) {
                num = parseInt(n[1].replace("]", ""));
                if (!r) return;
                for (var o = 0; o < r.children.length; o++) {
                    if (r.children[o].tagName === n[0]) {
                        if (i == num) {
                            r = r.children[o];
                            i = 0;
                            break
                        } else {
                            i++
                        }
                    }
                }
            } else {
                if (n[0].indexOf("#") > -1) {
                    r = document.getElementById(n[0].replace("#", ""))
                } else {
                    if (n[0] == "body") {
                        r = document.getElementsByTagName("body")[0]
                    }
                }
            }
        }
        return r
    }

    function getEleProperty(e) {
        var t = getElePosition(e.target);
        var r = e.target.offsetWidth;
        var n = e.target.offsetHeight;
        var i;
        var a;
        var o = Math.round(e.pageX - midCoordinate);
        var s = e.pageY;
        i = Math.round((e.pageX - t.left) / (r / 100));
        a = Math.round((e.pageY - t.top) / (n / 100));
        return {cex: i, cey: a, cew: r, ceh: n, xax: o, yax: s}
    }

    function getEleSize(e) {
        var t, r, n = [], i = [];
        a(e);
        s();
        t = e.offsetWidth;
        r = e.offsetHeight;
        d();
        return {width: t, height: r};

        function a(e) {
            var t = o(e).getPropertyValue("display"), r = e.nodeName.toLowerCase();
            if (t != "none" && r != "body") {
                a(e.parentNode)
            } else {
                n.push(e);
                if (r != "body") a(e.parentNode)
            }
        }

        function o(e) {
            var t = e.ownerDocument.defaultView;
            if (!t || !t.opener) {
                t = window
            }
            return t.getComputedStyle(e)
        }

        function s() {
            var e = 0;
            for (; e < n.length; e++) {
                var t = n[e].style.visibility, r = n[e].style.display, a = n[e].getAttribute("style");
                n[e].setAttribute("style", "visibility:hidden;display:block !important;" + a);
                i[e] = {visibility: t, display: r}
            }
        }

        function d() {
            var e = 0;
            for (; e < n.length; e++) {
                n[e].style.visibility = i[e].visibility;
                n[e].style.display = i[e].display
            }
        }
    }

    function deviceDPI() {
        return parseInt(screen.width, 10) + "*" + parseInt(screen.height, 10)
    }

    function createGuid() {
        for (var e = "", t = 1; 32 >= t; t++) {
            var r = Math.floor(16 * Math.random()).toString(16), e = e + r;
            8 != t && 12 != t && 16 != t && 20 != t || (e += "")
        }
        return this.guid = e += Math.ceil(1e6 * Math.random())
    }

    function parseCookieString(e, t) {
        var r = {};
        if (isString(e) && e.length > 0) {
            var n = t ? decodeURIComponent : same;
            var i = e.split(/;\s/g);
            var a;
            var o;
            var s;
            for (var d = 0, f = i.length; d < f; d++) {
                s = i[d].match(/([^=]+)=/i);
                if (s instanceof Array) {
                    try {
                        a = decodeURIComponent(s[1]);
                        o = n(i[d].substring(s[1].length + 1))
                    } catch (e) {
                    }
                } else {
                    a = decodeURIComponent(i[d]);
                    o = ""
                }
                if (a) {
                    r[a] = o
                }
            }
        }
        return r
    }

    function isNonEmptyString(e) {
        return isString(e) && e !== ""
    }

    function validateCookieName(e) {
        if (!isNonEmptyString(e)) {
            throw new TypeError("Cookie name must be a non-empty string")
        }
    }

    function same(e) {
        return e
    }

    function extend() {
        var e = arguments[0] || {}, t = 1, r = arguments.length, n, i;
        if (!isObject(e) && !isFunction(e)) return;
        for (t; t < r; t++) {
            if ((n = arguments[t]) != null) {
                for (i in n) {
                    e[i] = n[i]
                }
            }
        }
        return e
    }

    function isDefined(e) {
        var t = typeof e;
        return t !== "undefined"
    }

    function isFunction(e) {
        return typeof e === "function"
    }

    function isObject(e) {
        return typeof e === "object"
    }

    function isString(e) {
        return typeof e === "string" || e instanceof String
    }

    function addEventListener(e, t, r, n) {
        if (e.addEventListener) {
            e.addEventListener(t, r, n);
            return true
        }
        if (e.attachEvent) {
            return e.attachEvent("on" + t, r)
        }
        e["on" + t] = r
    }

    function isArray(e) {
        return Object.prototype.toString.call(Object(e)) == "[object Array]"
    }

    function isEmpty(e) {
        return undefined == e || "-" == e || "" == e
    }

    function Pick(e, t, r) {
        var n = "-", i;
        if (!IsEmpty(e) && !IsEmpty(t) && !IsEmpty(r)) {
            i = e[_str_indexOf](t);
            if (i > -1) {
                var a = e[_str_indexOf](r, i);
                if (a < 0) {
                    a = e[_length]
                }
                n = e[_substring](i + t[_str_indexOf](_equal_) + 1, a)
            }
        }
        return n
    }

    function checkHash(e) {
        var t = _false, r = 0, n, i;
        if (!IsEmpty(e)) {
            t = _true;
            for (n = 0; n < e[_length]; n++) {
                i = e[_charAt](n);
                r += "." == i ? 1 : 0;
                t = t && r <= 1 && (0 == n && "-" == i || ".0123456789"[_str_indexOf](i) > -1)
            }
        }
        return t
    }

    function getReferrer() {
        var e = "";
        try {
            e = window.top.document.referrer
        } catch (t) {
            if (window.parent) {
                try {
                    e = window.parent.document.referrer
                } catch (t) {
                    e = ""
                }
            }
        }
        if (e === "") {
            e = document.referrer
        }
        return e
    }

    function addUrlParameter(e, t, r) {
        e = String(e);
        if (!r) {
            r = ""
        }
        var n = e.indexOf("#");
        var i = e.length;
        if (n === -1) {
            n = i
        }
        var a = e.substr(0, n);
        var o = e.substr(n, i - n);
        if (a.indexOf("?") === -1) {
            a += "?"
        } else if (!stringEndsWith(a, "?")) {
            a += "&"
        }
        return a + encodeURIComponent(t) + "=" + encodeURIComponent(r) + o
    }

    function stringEndsWith(e, t) {
        e = String(e);
        return e.indexOf(t, e.length - t.length) !== -1
    }

    function getHostName(e) {
        var t = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"), r = t.exec(e);
        return r ? r[1] : e
    }

    function getDomain(e) {
        var e = e || location.href;
        e = getHostName(e);
        var t = e.split(".");
        if (t.length >= 3) {
            t.splice(0, 1)
        }
        return t.join(".")
    }

    function getCurTimestamp() {
        return (new Date).getTime()
    }

    function randomWord() {
        var e = "0123456789abcdefghijklmnopqrstuvwxyz", t = e.length, r = 8, n = "";
        for (var i = 0; i < r; i++) {
            n += e.substr(Math.floor(Math.random() * t), 1)
        }
        return n
    }

    function safeAdd(e, t) {
        var r = (e & 65535) + (t & 65535);
        var n = (e >> 16) + (t >> 16) + (r >> 16);
        return n << 16 | r & 65535
    }

    function bitRotateLeft(e, t) {
        return e << t | e >>> 32 - t
    }

    function md5cmn(e, t, r, n, i, a) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(t, e), safeAdd(n, a)), i), r)
    }

    function md5ff(e, t, r, n, i, a, o) {
        return md5cmn(t & r | ~t & n, e, t, i, a, o)
    }

    function md5gg(e, t, r, n, i, a, o) {
        return md5cmn(t & n | r & ~n, e, t, i, a, o)
    }

    function md5hh(e, t, r, n, i, a, o) {
        return md5cmn(t ^ r ^ n, e, t, i, a, o)
    }

    function md5ii(e, t, r, n, i, a, o) {
        return md5cmn(r ^ (t | ~n), e, t, i, a, o)
    }

    function binlMD5(e, t) {
        e[t >> 5] |= 128 << t % 32;
        e[(t + 64 >>> 9 << 4) + 14] = t;
        var r;
        var n;
        var i;
        var a;
        var o;
        var s = 1732584193;
        var d = -271733879;
        var f = -1732584194;
        var c = 271733878;
        for (r = 0; r < e.length; r += 16) {
            n = s;
            i = d;
            a = f;
            o = c;
            s = md5ff(s, d, f, c, e[r], 7, -680876936);
            c = md5ff(c, s, d, f, e[r + 1], 12, -389564586);
            f = md5ff(f, c, s, d, e[r + 2], 17, 606105819);
            d = md5ff(d, f, c, s, e[r + 3], 22, -1044525330);
            s = md5ff(s, d, f, c, e[r + 4], 7, -176418897);
            c = md5ff(c, s, d, f, e[r + 5], 12, 1200080426);
            f = md5ff(f, c, s, d, e[r + 6], 17, -1473231341);
            d = md5ff(d, f, c, s, e[r + 7], 22, -45705983);
            s = md5ff(s, d, f, c, e[r + 8], 7, 1770035416);
            c = md5ff(c, s, d, f, e[r + 9], 12, -1958414417);
            f = md5ff(f, c, s, d, e[r + 10], 17, -42063);
            d = md5ff(d, f, c, s, e[r + 11], 22, -1990404162);
            s = md5ff(s, d, f, c, e[r + 12], 7, 1804603682);
            c = md5ff(c, s, d, f, e[r + 13], 12, -40341101);
            f = md5ff(f, c, s, d, e[r + 14], 17, -1502002290);
            d = md5ff(d, f, c, s, e[r + 15], 22, 1236535329);
            s = md5gg(s, d, f, c, e[r + 1], 5, -165796510);
            c = md5gg(c, s, d, f, e[r + 6], 9, -1069501632);
            f = md5gg(f, c, s, d, e[r + 11], 14, 643717713);
            d = md5gg(d, f, c, s, e[r], 20, -373897302);
            s = md5gg(s, d, f, c, e[r + 5], 5, -701558691);
            c = md5gg(c, s, d, f, e[r + 10], 9, 38016083);
            f = md5gg(f, c, s, d, e[r + 15], 14, -660478335);
            d = md5gg(d, f, c, s, e[r + 4], 20, -405537848);
            s = md5gg(s, d, f, c, e[r + 9], 5, 568446438);
            c = md5gg(c, s, d, f, e[r + 14], 9, -1019803690);
            f = md5gg(f, c, s, d, e[r + 3], 14, -187363961);
            d = md5gg(d, f, c, s, e[r + 8], 20, 1163531501);
            s = md5gg(s, d, f, c, e[r + 13], 5, -1444681467);
            c = md5gg(c, s, d, f, e[r + 2], 9, -51403784);
            f = md5gg(f, c, s, d, e[r + 7], 14, 1735328473);
            d = md5gg(d, f, c, s, e[r + 12], 20, -1926607734);
            s = md5hh(s, d, f, c, e[r + 5], 4, -378558);
            c = md5hh(c, s, d, f, e[r + 8], 11, -2022574463);
            f = md5hh(f, c, s, d, e[r + 11], 16, 1839030562);
            d = md5hh(d, f, c, s, e[r + 14], 23, -35309556);
            s = md5hh(s, d, f, c, e[r + 1], 4, -1530992060);
            c = md5hh(c, s, d, f, e[r + 4], 11, 1272893353);
            f = md5hh(f, c, s, d, e[r + 7], 16, -155497632);
            d = md5hh(d, f, c, s, e[r + 10], 23, -1094730640);
            s = md5hh(s, d, f, c, e[r + 13], 4, 681279174);
            c = md5hh(c, s, d, f, e[r], 11, -358537222);
            f = md5hh(f, c, s, d, e[r + 3], 16, -722521979);
            d = md5hh(d, f, c, s, e[r + 6], 23, 76029189);
            s = md5hh(s, d, f, c, e[r + 9], 4, -640364487);
            c = md5hh(c, s, d, f, e[r + 12], 11, -421815835);
            f = md5hh(f, c, s, d, e[r + 15], 16, 530742520);
            d = md5hh(d, f, c, s, e[r + 2], 23, -995338651);
            s = md5ii(s, d, f, c, e[r], 6, -198630844);
            c = md5ii(c, s, d, f, e[r + 7], 10, 1126891415);
            f = md5ii(f, c, s, d, e[r + 14], 15, -1416354905);
            d = md5ii(d, f, c, s, e[r + 5], 21, -57434055);
            s = md5ii(s, d, f, c, e[r + 12], 6, 1700485571);
            c = md5ii(c, s, d, f, e[r + 3], 10, -1894986606);
            f = md5ii(f, c, s, d, e[r + 10], 15, -1051523);
            d = md5ii(d, f, c, s, e[r + 1], 21, -2054922799);
            s = md5ii(s, d, f, c, e[r + 8], 6, 1873313359);
            c = md5ii(c, s, d, f, e[r + 15], 10, -30611744);
            f = md5ii(f, c, s, d, e[r + 6], 15, -1560198380);
            d = md5ii(d, f, c, s, e[r + 13], 21, 1309151649);
            s = md5ii(s, d, f, c, e[r + 4], 6, -145523070);
            c = md5ii(c, s, d, f, e[r + 11], 10, -1120210379);
            f = md5ii(f, c, s, d, e[r + 2], 15, 718787259);
            d = md5ii(d, f, c, s, e[r + 9], 21, -343485551);
            s = safeAdd(s, n);
            d = safeAdd(d, i);
            f = safeAdd(f, a);
            c = safeAdd(c, o)
        }
        return [s, d, f, c]
    }

    function binl2rstr(e) {
        var t;
        var r = "";
        var n = e.length * 32;
        for (t = 0; t < n; t += 8) {
            r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255)
        }
        return r
    }

    function rstr2binl(e) {
        var t;
        var r = [];
        r[(e.length >> 2) - 1] = undefined;
        for (t = 0; t < r.length; t += 1) {
            r[t] = 0
        }
        var n = e.length * 8;
        for (t = 0; t < n; t += 8) {
            r[t >> 5] |= (e.charCodeAt(t / 8) & 255) << t % 32
        }
        return r
    }

    function rstrMD5(e) {
        return binl2rstr(binlMD5(rstr2binl(e), e.length * 8))
    }

    function rstrHMACMD5(e, t) {
        var r;
        var n = rstr2binl(e);
        var i = [];
        var a = [];
        var o;
        i[15] = a[15] = undefined;
        if (n.length > 16) {
            n = binlMD5(n, e.length * 8)
        }
        for (r = 0; r < 16; r += 1) {
            i[r] = n[r] ^ 909522486;
            a[r] = n[r] ^ 1549556828
        }
        o = binlMD5(i.concat(rstr2binl(t)), 512 + t.length * 8);
        return binl2rstr(binlMD5(a.concat(o), 512 + 128))
    }

    function rstr2hex(e) {
        var t = "0123456789abcdef";
        var r = "";
        var n;
        var i;
        for (i = 0; i < e.length; i += 1) {
            n = e.charCodeAt(i);
            r += t.charAt(n >>> 4 & 15) + t.charAt(n & 15)
        }
        return r
    }

    function str2rstrUTF8(e) {
        return unescape(encodeURIComponent(e))
    }

    function rawMD5(e) {
        return rstrMD5(str2rstrUTF8(e))
    }

    function hexMD5(e) {
        return rstr2hex(rawMD5(e))
    }

    function rawHMACMD5(e, t) {
        return rstrHMACMD5(str2rstrUTF8(e), str2rstrUTF8(t))
    }

    function hexHMACMD5(e, t) {
        return rstr2hex(rawHMACMD5(e, t))
    }

    function md5(e, t, r) {
        if (!t) {
            if (!r) {
                return hexMD5(e)
            }
            return rawMD5(e)
        }
        if (!r) {
            return hexHMACMD5(t, e)
        }
        return rawHMACMD5(t, e)
    }

    function htmlDom(e) {
        var t = document.getElementsByTagName("html")[0];
        if (e) {
            var r = e.split(">");
            jq.each(r, function (e, n) {
                if (e == 0 && r[0] == "html") {
                    return true
                }
                ac = n.split("[");
                if (ac.length > 1) {
                    t = t.children(ac[0]).eq(parseInt(ac[1].replace("]", "")))
                } else {
                    if (ac[0].indexOf("#") > -1) {
                        t = t.find(ac[0])
                    } else {
                        t = t.children(ac[0])
                    }
                }
            })
        }
        return t
    }

    function parseQuery() {
        var e = location.search, t = {}, r = location.href;
        var n = r.indexOf("?");
        if (e.length > 0) {
            e = e.substr(1, e.length)
        }
        if (e.length === 0 && n !== -1) {
            e = r.substr(n + 1, r.length)
        }
        var i = e.split("&");
        for (var a = 0, o = i.length; a < o; a++) {
            var s = i[a];
            var d = i[a].split("=")[0], f = i[a].split("=")[1];
            t[d] = f
        }
        return t
    }

    return T8TCount
});