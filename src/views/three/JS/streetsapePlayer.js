


/*! nan出品，必出精品 */ ! function (e) {
  var t = {};
  
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    // console.log(this_)
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    
  }
  n.m = e, n.c = t,
    n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0, 
        get: i
      })
    },
    n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return n.d(t, "a", t), t
    },
    n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = "",
    n(n.s = 2)
}([
  //0
  function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function r() {
      var e = this,
        t = {
          tap: function (t, n) {
            return this.each(this, function (i, r) {
              "pc" === e.browserRedirect() ? (new e.AddComputerFun).init({
                dom: r,
                fun: t,
                event: "tap",
                preventDefault: n
              }) : (new e.AddTouchFun).init({
                dom: r,
                fun: t,
                event: "tap",
                preventDefault: n
              })
            })
          },
          swipe: function (t, n) {
            return this.each(this, function (i, r) {
              "pc" === e.browserRedirect() ? (new e.AddComputerFun).init({
                dom: r,
                fun: t,
                event: "swipe",
                preventDefault: n
              }) : (new e.AddTouchFun).init({
                dom: r,
                fun: t,
                event: "swipe",
                preventDefault: n
              })
            })
          },
          on: function (t, n, i, r) {
            return this.each(this, function (a, o) {
              "function" == typeof i ? "pc" === e.browserRedirect() ? (new e.AddComputerFun).init({
                dom: o,
                fun: n,
                event: t,
                fun2: i,
                preventDefault: r
              }) : (new e.AddTouchFun).init({
                dom: o,
                fun: n,
                event: t,
                fun2: i,
                preventDefault: r
              }) : "pc" === e.browserRedirect() ? (new e.AddComputerFun).init({
                dom: o,
                fun: n,
                event: t,
                preventDefault: i
              }) : (new e.AddTouchFun).init({
                dom: o,
                fun: n,
                event: t,
                preventDefault: i
              })
            })
          },
          all: function (t, n, i, r) {
            return this.each(this, function (a, o) {
              "function" == typeof i ? ((new e.AddComputerFun).init({
                dom: o,
                fun: n,
                event: t,
                fun2: i,
                preventDefault: r
              }), (new e.AddTouchFun).init({
                dom: o,
                fun: n,
                event: t,
                fun2: i,
                preventDefault: r
              })) : ((new e.AddComputerFun).init({
                dom: o,
                fun: n,
                event: t,
                preventDefault: i
              }), (new e.AddTouchFun).init({
                dom: o,
                fun: n,
                event: t,
                preventDefault: i
              }))
            })
          },
          remove: function (t, n, i) {
            return this.each(this, function (r, a) {
              e.removeFun(a, t, n, i)
            })
          }
        };
      this.extendJQ = function () {
        var e = function () {},
          t = [],
          n = t.slice,
          r = t.concat,
          a = t.push,
          o = t.indexOf,
          s = {},
          c = s.toString,
          h = s.hasOwnProperty,
          l = "".trim;

        function u(t) {
          var n = t.length,
            i = e.type(t);
          return "function" !== i && !e.isWindow(t) && (!(1 !== t.nodeType || !n) || ("array" === i || 0 === n || "number" == typeof n && n > 0 && n - 1 in t))
        }
        e.fn = e.prototype = {}, e.extend = e.fn.extend = function () {
          var t, n, r, a, o, s, c = arguments[0] || {},
            h = 1,
            l = arguments.length,
            u = !1;
          for ("boolean" == typeof c && (u = c, c = arguments[h] || {}, h++), "object" === (void 0 === c ? "undefined" : i(c)) || e.isFunction(c) || (c = {}), h === l && (c = this, h--); h < l; h++)
            if (null != (t = arguments[h]))
              for (n in t) r = c[n], c !== (a = t[n]) && (u && a && (e.isPlainObject(a) || (o = e.isArray(a))) ? (o ? (o = !1, s = r && e.isArray(r) ? r : []) : s = r && e.isPlainObject(r) ? r : {}, c[n] = e.extend(u, s, a)) : void 0 !== a && (c[n] = a));
          return c
        };
        var d = {
          isReady: !0,
          error: function (e) {
            throw new Error(e)
          },
          noop: function () {},
          isFunction: function (e) {
            return "function" == typeof e
          },
          isArray: Array.isArray,
          isWindow: function (e) {
            return null != e && e === e.window
          },
          isNumeric: function (e) {
            return e - parseFloat(e) >= 0
          },
          isPlainObject: function (t) {
            if ("object" !== e.type(t) || t.nodeType || e.isWindow(t)) return !1;
            try {
              if (t.constructor && !h.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
              return !1
            }
            return !0
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
          },
          type: function (e) {
            return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : i(e)) || "function" == typeof e ? s[c.call(e)] || "object" : void 0 === e ? "undefined" : i(e)
          },
          globalEval: function (t) {
            var n, i = eval;
            (t = e.trim(t)) && (1 === t.indexOf("use strict") ? ((n = document.createElement("script")).text = t, document.head.appendChild(n).parentNode.removeChild(n)) : i(t))
          },
          nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
          },
          each: function (e, t, n) {
            var i = 0,
              r = e.length,
              a = u(e);
            if (n) {
              if (a)
                for (; i < r && !1 !== t.apply(e[i], n); i++);
              else
                for (i in e)
                  if (!1 === t.apply(e[i], n)) break
            } else if (a)
              for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
            else
              for (i in e)
                if (!1 === t.call(e[i], i, e[i])) break;
            return e
          },
          trim: function (e) {
            return null == e ? "" : l.call(e)
          },
          makeArray: function (t, n) {
            var i = n || [];
            return null != t && (u(Object(t)) ? e.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
          },
          grep: function (e, t, n) {
            for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
            return i
          },
          map: function (e, t, n) {
            var i, a = 0,
              o = e.length,
              s = [];
            if (u(e))
              for (; a < o; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
              for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return r.apply([], s)
          },
          guid: 1,
          proxy: function (t, i) {
            var r, a, o;
            if ("string" == typeof i && (r = t[i], i = t, t = r), e.isFunction(t)) return a = n.call(arguments, 2), o = function () {
              return t.apply(i || this, a.concat(n.call(arguments)))
            }, o.guid = t.guid = t.guid || e.guid++, o
          },
          now: Date.now
        };
        for (var p in e.extend(d), e) this[p] = e[p];
        return e
      }, this.jquery = this.extendJQ(), this.AddTouchFun = function () {
        var t = this;
        t.settings = {
          tapDurationThreshold: 250,
          scrollSupressionThreshold: 20,
          swipeDurationThreshold: 750,
          horizontalDistanceThreshold: 40,
          verticalDistanceThreshold: 75,
          tapHoldDurationThreshold: 750,
          doubleTapInterval: 250
        }, t.init = function (e) {
          t.date = {}, t.arr = ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap", "down", "move", "up"], t.touch = {}, t.dom = e.dom, t.callback = e.fun;
          for (var n = e.event.split(","), i = 0; i < n.length; i++) - 1 != t.arr.indexOf(n[i]) && t[n[i]](e.preventDefault)
        }, t.tap = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.tap.end = r.changedTouches, t.tap.endTime = Number(new Date), t.tap.endTime - t.tap.startTime <= t.settings.tapDurationThreshold && 1 === t.tap.start.length && 1 === t.tap.end.length && t.getRange(t.tap.start[0].clientX, t.tap.start[0].clientY, t.tap.end[0].clientX, t.tap.end[0].clientY) < t.settings.scrollSupressionThreshold && t.callback.call(t.dom, i), document.removeEventListener("touchend", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.tap.startTime = Number(new Date), t.tap.start = [];
              for (var s = o.targetTouches.length, c = 0; c < s; c++) {
                var h = e.jquery.extend(!0, {}, o.targetTouches[c]);
                t.tap.start.push(h)
              }
              i = o, document.addEventListener("touchend", r)
            };
          t.dom.addEventListener("touchstart", a), t.dom.touchTap = a
        }, t.singleTap = function (n) {
          var i = void 0;
          t.singleTap.timeOut = null, t.singleTap.type = !1;
          var r = function e(n) {
              var r = n || window.event;
              if (t.singleTap.end = r.changedTouches, t.singleTap.endTime = Number(new Date), t.singleTap.endTime - t.singleTap.startTime <= t.settings.tapDurationThreshold && 1 === t.singleTap.start.length && 1 === t.singleTap.end.length && t.getRange(t.singleTap.start[0].clientX, t.singleTap.start[0].clientY, t.singleTap.end[0].clientX, t.singleTap.end[0].clientY) < t.settings.scrollSupressionThreshold) {
                if (t.singleTap.type) return;
                t.singleTap.timeOut = setTimeout(function () {
                  t.callback.call(t.dom, i)
                }, t.settings.doubleTapInterval)
              }
              document.removeEventListener("touchend", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.singleTap.startTime = Number(new Date), t.singleTap.start = [], i = o, t.singleTap.startTime - t.singleTap.endTime < t.settings.doubleTapInterval ? (clearTimeout(t.singleTap.timeOut), t.singleTap.type = !0) : t.singleTap.type = !1;
              for (var s = o.targetTouches.length, c = 0; c < s; c++) {
                var h = e.jquery.extend(!0, {}, o.targetTouches[c]);
                t.singleTap.start.push(h)
              }
              document.addEventListener("touchend", r)
            };
          t.dom.addEventListener("touchstart", a), t.dom.singleTouchTap = a
        }, t.doubleTap = function (n) {
          var i = void 0;
          t.doubleTap.prevTime = 0;
          var r = function (e) {
              var n = e || window.event;
              t.doubleTap.end = n.changedTouches, t.doubleTap.endTime = Number(new Date), t.doubleTap.endTime - t.doubleTap.startTime <= t.settings.tapDurationThreshold && 1 === t.doubleTap.start.length && 1 === t.doubleTap.end.length && t.getRange(t.doubleTap.start[0].clientX, t.doubleTap.start[0].clientY, t.doubleTap.end[0].clientX, t.doubleTap.end[0].clientY) < t.settings.scrollSupressionThreshold ? 0 != t.doubleTap.prevTime && t.doubleTap.startTime - t.doubleTap.prevTime < t.settings.doubleTapInterval ? t.callback.call(t.dom, i) : t.doubleTap.prevTime = t.doubleTap.endTime : t.doubleTap.prevTime = 0
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.doubleTap.startTime = Number(new Date), t.doubleTap.start = [];
              for (var s = o.targetTouches.length, c = 0; c < s; c++) {
                var h = e.jquery.extend(!0, {}, o.targetTouches[c]);
                t.doubleTap.start.push(h)
              }
              i = o, document.addEventListener("touchend", r)
            };
          t.dom.addEventListener("touchstart", a), t.dom.doubleTouchTap = a
        }, t.longTap = function (n) {
          var i = void 0,
            r = function (r) {
              var s = r || window.event;
              n && s.preventDefault(), t.longTap.startTime = Number(new Date), t.longTap.start = e.jquery.extend(!0, {}, s.targetTouches[0]), t.longTap.move = null, i = s, t.longTap.timeOut = setTimeout(function () {
                !t.longTap.move || t.getRange(t.longTap.start.clientX, t.longTap.start.clientY, t.longTap.move.clientX, t.longTap.move.clientY) < t.settings.scrollSupressionThreshold ? (o(), t.callback.call(t.dom, i)) : o()
              }, t.settings.tapHoldDurationThreshold), document.addEventListener("touchmove", a), document.addEventListener("touchend", o)
            },
            a = function (n) {
              var i = n || window.event;
              t.longTap.move = e.jquery.extend(!0, {}, i.targetTouches[0])
            },
            o = function e() {
              clearTimeout(t.longTap.timeOut), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", e)
            };
          t.dom.addEventListener("touchstart", r), t.dom.longTouchTap = r
        }, t.swipe = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r.changedTouches, t.date.end = Number(new Date), t.date.end - t.date.start <= t.settings.swipeDurationThreshold && 1 === t.touch.start.length && 1 === t.touch.end.length && t.getRange(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) > t.settings.horizontalDistanceThreshold && t.callback.call(t.dom, i), document.removeEventListener("touchend", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = Number(new Date), t.touch.start = [];
              for (var s = o.targetTouches.length, c = 0; c < s; c++) {
                var h = e.jquery.extend(!0, {}, o.targetTouches[c]);
                t.touch.start.push(h)
              }
              i = o, document.addEventListener("touchend", r)
            };
          t.dom.addEventListener("touchstart", a), t.dom.touchSwipe = a
        }, t.swipeLeft = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r.changedTouches, t.date.end = Number(new Date), t.date.end - t.date.start <= t.settings.swipeDurationThreshold && 1 === t.touch.start.length && 1 === t.touch.end.length && t.getRange(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) > t.settings.verticalDistanceThreshold && (t.getAngle(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) >= 315 || t.getAngle(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) <= 45) && t.callback.call(t.dom, i), document.removeEventListener("touchend", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = Number(new Date), t.touch.start = [];
              for (var s = o.targetTouches.length, c = 0; c < s; c++) {
                var h = e.jquery.extend(!0, {}, o.targetTouches[c]);
                t.touch.start.push(h)
              }
              i = o, document.addEventListener("touchend", r)
            };
          t.dom.addEventListener("touchstart", a), t.dom.touchSwipeLeft = a
        }, t.swipeRight = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r.changedTouches, t.date.end = Number(new Date), t.date.end - t.date.start <= t.settings.swipeDurationThreshold && 1 === t.touch.start.length && 1 === t.touch.end.length && t.getRange(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) > t.settings.verticalDistanceThreshold && t.getAngle(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) >= 135 && t.getAngle(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) <= 225 && t.callback.call(t.dom, i), document.removeEventListener("touchend", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = Number(new Date), t.touch.start = [];
              for (var s = o.targetTouches.length, c = 0; c < s; c++) {
                var h = e.jquery.extend(!0, {}, o.targetTouches[c]);
                t.touch.start.push(h)
              }
              i = o, document.addEventListener("touchend", r)
            };
          t.dom.addEventListener("touchstart", a), t.dom.touchSwipeRight = a
        }, t.swipeUp = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r.changedTouches, t.date.end = Number(new Date), t.date.end - t.date.start <= t.settings.swipeDurationThreshold && 1 === t.touch.start.length && 1 === t.touch.end.length && t.getRange(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) > t.settings.horizontalDistanceThreshold && t.getAngle(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) > 45 && t.getAngle(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) < 135 && t.callback.call(t.dom, i), document.removeEventListener("touchend", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = Number(new Date), t.touch.start = [];
              for (var s = o.targetTouches.length, c = 0; c < s; c++) {
                var h = e.jquery.extend(!0, {}, o.targetTouches[c]);
                t.touch.start.push(h)
              }
              i = o, document.addEventListener("touchend", r)
            };
          t.dom.addEventListener("touchstart", a), t.dom.touchSwipeUp = a
        }, t.swipeDown = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r.changedTouches, t.date.end = Number(new Date), t.date.end - t.date.start <= t.settings.swipeDurationThreshold && 1 === t.touch.start.length && 1 === t.touch.end.length && t.getRange(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) > t.settings.horizontalDistanceThreshold && t.getAngle(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) > 225 && t.getAngle(t.touch.start[0].clientX, t.touch.start[0].clientY, t.touch.end[0].clientX, t.touch.end[0].clientY) < 315 && t.callback.call(t.dom, i), document.removeEventListener("touchend", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = Number(new Date), t.touch.start = [];
              for (var s = o.targetTouches.length, c = 0; c < s; c++) {
                var h = e.jquery.extend(!0, {}, o.targetTouches[c]);
                t.touch.start.push(h)
              }
              i = o, document.addEventListener("touchend", r)
            };
          t.dom.addEventListener("touchstart", a), t.dom.touchSwipeDown = a
        }, t.down = function (e) {
          t.dom.addEventListener("touchstart", t.callback, e)
        }, t.move = function (e) {
          t.dom.addEventListener("touchmove", t.callback, e)
        }, t.up = function (e) {
          t.dom.addEventListener("touchend", t.callback, e)
        }, t.getAngle = function (e, t, n, i) {
          var r = n - e,
            a = i - t,
            o = r / Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2)),
            s = Math.acos(o),
            c = 180 / (Math.PI / s);
          return a < 0 ? c = -c : 0 == a && r < 0 && (c = 180), c + 180
        }, t.getRange = function (e, t, n, i) {
          return Math.sqrt(Math.pow(Math.abs(e - n), 2) + Math.pow(Math.abs(t - i), 2))
        }
      }, this.AddComputerFun = function () {
        var t = this;
        t.settings = {
          tapDurationThreshold: 250,
          scrollSupressionThreshold: 5,
          swipeDurationThreshold: 750,
          horizontalDistanceThreshold: 40,
          verticalDistanceThreshold: 75,
          tapHoldDurationThreshold: 750,
          doubleTapInterval: 250
        }, t.init = function (e) {
          t.dom = e.dom, t.callback = e.fun, t.callback2 = e.fun2, t.date = {}, t.arr = ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap", "wheel", "down", "move", "up"], t.touch = {};
          for (var n = e.event.split(","), i = 0; i < n.length; i++) - 1 != t.arr.indexOf(n[i]) && t[n[i]](e.preventDefault)
        }, t.tap = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r, t.date.end = +new Date, t.date.end - t.date.start <= t.settings.tapDurationThreshold && t.getRange(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) < t.settings.scrollSupressionThreshold && 0 === r.button && t.callback.call(t.dom, i), document.removeEventListener("mouseup", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = Number(new Date), t.touch.start = e.jquery.extend(!0, {}, o), i = a, document.addEventListener("mouseup", r)
            };
          t.dom.addEventListener("mousedown", a), t.dom.mouseTap = a
        }, t.singleTap = function (n) {
          var i = void 0;
          t.singleTap.timeOut = null, t.singleTap.type = !1;
          var r = function e(n) {
              var r = n || window.event;
              if (t.singleTap.end = r, t.singleTap.endTime = +new Date, t.singleTap.endTime - t.singleTap.startTime <= t.settings.tapDurationThreshold && t.getRange(t.singleTap.start.clientX, t.singleTap.start.clientY, t.singleTap.end.clientX, t.singleTap.end.clientY) < t.settings.scrollSupressionThreshold) {
                if (t.singleTap.type) return;
                t.singleTap.timeOut = setTimeout(function () {
                  t.callback.call(t.dom, i)
                }, t.settings.doubleTapInterval)
              }
              document.removeEventListener("mouseup", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.singleTap.startTime = +new Date, t.singleTap.start = e.jquery.extend(!0, {}, o), i = o, t.singleTap.startTime - t.singleTap.endTime < t.settings.doubleTapInterval ? (clearTimeout(t.singleTap.timeOut), t.singleTap.type = !0) : t.singleTap.type = !1, document.addEventListener("mouseup", r)
            };
          t.dom.addEventListener("mousedown", a), t.dom.singleMouseTap = a
        }, t.doubleTap = function (n) {
          var i = void 0;
          t.doubleTap.prevTime = 0;
          var r = function n(r) {
              var a = r || window.event;
              t.doubleTap.end = e.jquery.extend(!0, {}, a), t.doubleTap.endTime = +new Date, t.doubleTap.endTime - t.doubleTap.startTime <= t.settings.tapDurationThreshold && t.getRange(t.doubleTap.start.clientX, t.doubleTap.start.clientY, t.doubleTap.end.clientX, t.doubleTap.end.clientY) < t.settings.scrollSupressionThreshold ? 0 != t.doubleTap.prevTime && t.doubleTap.endTime - t.doubleTap.prevTime < t.settings.doubleTapInterval ? t.callback.call(t.dom, i) : t.doubleTap.prevTime = t.doubleTap.endTime : t.doubleTap.prevTime = 0, document.removeEventListener("mouseup", n)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.doubleTap.startTime = +new Date, t.doubleTap.start = e.jquery.extend(!0, {}, o), i = o, document.addEventListener("mouseup", r)
            };
          t.dom.addEventListener("mousedown", a), t.dom.doubleMouseTap = a
        }, t.longTap = function (n) {
          var i = void 0,
            r = function (r) {
              var s = r || window.event;
              n && s.preventDefault(), t.longTap.startTime = +new Date, t.longTap.start = e.jquery.extend(!0, {}, s), t.longTap.move = null, i = s, t.longTap.timeOut = setTimeout(function () {
                !t.longTap.move || t.getRange(t.longTap.start.clientX, t.longTap.start.clientY, t.longTap.move.clientX, t.longTap.move.clientY) < t.settings.scrollSupressionThreshold ? (o(), t.callback.call(t.dom, i)) : o()
              }, t.settings.tapHoldDurationThreshold), document.addEventListener("mousemove", a), document.addEventListener("mouseup", o)
            },
            a = function (n) {
              var i = n || window.event;
              t.longTap.move = e.jquery.extend(!0, {}, i)
            },
            o = function e() {
              clearTimeout(t.longTap.timeOut), document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", e)
            };
          t.dom.addEventListener("mousedown", r), t.dom.longMouseTap = r
        }, t.swipe = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.swipe.end = r, t.date.end = +new Date, t.date.end - t.date.start <= t.settings.swipeDurationThreshold && t.getRange(t.swipe.start.clientX, t.swipe.start.clientY, t.swipe.end.clientX, t.swipe.end.clientY) > t.settings.horizontalDistanceThreshold && t.callback.call(t.dom, i), document.removeEventListener("mouseup", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = +new Date, t.swipe.start = e.jquery.extend(!0, {}, o), i = o, document.addEventListener("mouseup", r)
            };
          t.dom.addEventListener("mousedown", a), t.dom.mouseSwipe = a
        }, t.swipeLeft = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r, t.date.end = Number(new Date), t.date.end - t.date.start <= t.settings.swipeDurationThreshold && t.getRange(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) > t.settings.verticalDistanceThreshold && (t.getAngle(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) >= 135 || t.getAngle(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) <= -135) && t.callback.call(t.dom, i), document.removeEventListener("mouseup", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = +new Date, t.touch.start = e.jquery.extend(!0, {}, o), i = o, document.addEventListener("mouseup", r)
            };
          t.dom.addEventListener("mousedown", a), t.dom.mouseSwipeLeft = a
        }, t.swipeRight = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r, t.date.end = +new Date, t.date.end - t.date.start <= t.settings.swipeDurationThreshold && t.getRange(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) > t.settings.verticalDistanceThreshold && t.getAngle(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) >= -45 && t.getAngle(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) <= 45 && t.callback.call(t.dom, i), document.removeEventListener("mouseup", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = +new Date, t.touch.start = e.jquery.extend(!0, {}, o), i = o, document.addEventListener("mouseup", r)
            };
          t.dom.addEventListener("mousedown", a), t.dom.mouseSwipeRight = a
        }, t.swipeUp = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r, t.date.end = +new Date, t.date.end - t.date.start <= t.settings.swipeDurationThreshold && t.getRange(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) > t.settings.horizontalDistanceThreshold && t.getAngle(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) > -135 && t.getAngle(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) < -45 && t.callback.call(t.dom, i), document.removeEventListener("mouseup", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = +new Date, t.touch.start = e.jquery.extend(!0, {}, o), i = o, document.addEventListener("mouseup", r)
            };
          t.dom.addEventListener("mousedown", a), t.dom.mouseSwipeUp = a
        }, t.swipeDown = function (n) {
          var i = void 0,
            r = function e(n) {
              var r = n || window.event;
              t.touch.end = r, t.date.end = +new Date, t.date.end - t.date.start <= t.settings.swipeDurationThreshold && t.getRange(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) > t.settings.horizontalDistanceThreshold && t.getAngle(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) > 45 && t.getAngle(t.touch.start.clientX, t.touch.start.clientY, t.touch.end.clientX, t.touch.end.clientY) < 135 && t.callback.call(t.dom, i), document.removeEventListener("mouseup", e)
            },
            a = function (a) {
              var o = a || window.event;
              n && o.preventDefault(), t.date.start = +new Date, t.touch.start = e.jquery.extend(!0, {}, o), i = o, document.addEventListener("mouseup", r)
            };
          t.dom.addEventListener("mousedown", a), t.dom.mouseSwipeDown = a
        }, t.wheel = function (n) {
          var i = t.dom,
            r = t.callback,
            a = t.callback2;

          function o(t) {
            var o = t || window.event;

            function s(t, n) {
              t >= 0 ? e.jquery.isFunction(r) && r.call(i, n) : t < 0 && e.jquery.isFunction(a) && a.call(i, n)
            }
            n && o.preventDefault(), o.wheelDelta ? s(-o.wheelDelta / 120, o) : o.detail && (-3 === o.detail ? s(-1, o) : 3 === o.detail ? s(1, o) : console.log("鼠标滚轮事件改了？", o.wheelDelta))
          }
          i.addEventListener("mousewheel", o, !1), i.addEventListener("DOMMouseScroll", o, !1), t.dom.mouseScroll = o
        }, t.down = function (e) {
          t.dom.addEventListener("mousedown", t.callback, e)
        }, t.move = function (e) {
          t.dom.addEventListener("mousemove", t.callback, e)
        }, t.up = function (e) {
          t.dom.addEventListener("mouseup", t.callback, e)
        }, t.getAngle = function (e, t, n, i) {
          var r = n - e,
            a = i - t,
            o = r / Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2)),
            s = Math.acos(o),
            c = 180 / (Math.PI / s);
          return a < 0 ? c = -c : 0 == a && r < 0 && (c = 180), c
        }, t.getRange = function (e, t, n, i) {
          return Math.sqrt(Math.pow(Math.abs(e - n), 2) + Math.pow(Math.abs(t - i), 2))
        }
      }, this.removeFun = function (t, n, i, r) {
        if ("pc" !== e.browserRedirect()) {
          if (i && "move" != n && "up" != n && "wheel" != n) return void t.removeEventListener("touchstart", i, r);
          switch (n) {
            case "tap":
              t.removeEventListener("touchstart", t.touchTap, r);
              break;
            case "singleTap":
              t.removeEventListener("touchstart", t.singleTouchTap, r);
              break;
            case "doubleTap":
              t.removeEventListener("touchstart", t.doubleTouchTap, r);
              break;
            case "longTap":
              t.removeEventListener("touchstart", t.longTouchTap, r);
              break;
            case "swipe":
              t.removeEventListener("touchstart", t.touchSwipe, r);
              break;
            case "swipeLeft":
              t.removeEventListener("touchstart", t.touchSwipeLeft, r);
              break;
            case "swipeRight":
              t.removeEventListener("touchstart", t.touchSwipeRight, r);
              break;
            case "swipeUp":
              t.removeEventListener("touchstart", t.touchSwipeUp, r);
              break;
            case "swipeDown":
              t.removeEventListener("touchstart", t.touchSwipeDown, r);
              break;
            case "down":
              t.removeEventListener("touchstart", i, r);
              break;
            case "move":
              t.removeEventListener("touchmove", i, r);
              break;
            case "up":
              t.removeEventListener("touchend", i, r);
              break;
            case "wheel":
              t.removeEventListener("mousewheel", t.mouseScroll, r), t.removeEventListener("DOMMouseScroll", t.mouseScroll, r);
              break;
            default:
              t.removeEventListener(n, i, r)
          }
        } else {
          if (i && "move" != n && "up" != n && "wheel" != n) return void t.removeEventListener("mousedown", i, r);
          switch (n) {
            case "tap":
              t.removeEventListener("mousedown", t.mouseTap, r);
              break;
            case "singleTap":
              t.removeEventListener("mousedown", t.singleMouseTap, r);
              break;
            case "doubleTap":
              t.removeEventListener("mousedown", t.doubleMouseTap, r);
              break;
            case "longTap":
              t.removeEventListener("mousedown", t.longMouseTap, r);
              break;
            case "swipe":
              t.removeEventListener("mousedown", t.mouseSwipe, r);
              break;
            case "swipeLeft":
              t.removeEventListener("mousedown", t.mouseSwipeLeft, r);
              break;
            case "swipeRight":
              t.removeEventListener("mousedown", t.mouseSwipeRight, r);
              break;
            case "swipeUp":
              t.removeEventListener("mousedown", t.mouseSwipeUp, r);
              break;
            case "swipeDown":
              t.removeEventListener("mousedown", t.mouseSwipeDown, r);
              break;
            case "wheel":
              t.removeEventListener("mousewheel", t.mouseScroll, r), t.removeEventListener("DOMMouseScroll", t.mouseScroll, r);
              break;
            case "down":
              t.removeEventListener("mousedown", i, r);
              break;
            case "move":
              t.removeEventListener("mousemove", i, r);
              break;
            case "up":
              t.removeEventListener("mouseup", i, r);
              break;
            default:
              t.removeEventListener(n, i, r)
          }
        }
      }, this.touch = this.$ = function (n) {
        var i = {};
        return e.isDom(n) ? [].push.call(i, n) : e.jquery.isArray(n) ? [].push.apply(i, n) : n.length > 0 ? [].push.apply(i, n) : [].push.call(i, n), this.jquery.extend(!0, i, this.jquery, t), i
      }
    }
    r.prototype = {
      constructor: r,
      browserRedirect: function () {
        var e = navigator.userAgent.toLowerCase(),
          t = "ipad" == e.match(/ipad/i),
          n = "iphone os" == e.match(/iphone os/i),
          i = "midp" == e.match(/midp/i),
          r = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i),
          a = "ucweb" == e.match(/ucweb/i),
          o = "android" == e.match(/android/i),
          s = "windows ce" == e.match(/windows ce/i),
          c = "windows mobile" == e.match(/windows mobile/i);
        return t || n || i || r || a || o || s || c ? t ? "pad" : document.body.clientWidth > 767 && document.body.clientHeight > 767 ? "pad" : (document.body.clientWidth < 400 || document.body.clientHeight, "phone") : "pc"
      },
      getQueryString: function (e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
          n = window.location.search.substr(1).match(t);
        return null != n ? decodeURI(n[2]) : null
      },
      cloneObj: function (e, t, n) {
        var r = n || !1;
        if ("object" == (void 0 === t ? "undefined" : i(t)))
          if (r)
            for (var a in t) "object" != i(t[a]) || t[a] instanceof HTMLElement ? e[a] = t[a] : (t[a] instanceof Array ? e[a] = [] : e[a] = {}, this.cloneObj(e[a], t[a], !0));
          else
            for (var a in t) e[a] = t[a]
      },
      inDom: function (e, t) {
        return !(!t || !t.parentNode) && (t.parentNode === e || t.parentNode !== document.body && this.inDom(e, t.parentNode))
      },
      positionInDom: function (e, t, n) {
        var i = n.getBoundingClientRect();
        return e >= i.left && e <= i.right && t >= i.top && t <= i.bottom
      },
      getPrefix: function () {
        var e = document.body,
          t = ["webkit", "Moz", "o", "ms"];
        for (var n in t) {
          var i = t[n] + "Transition";
          if (void 0 !== e.style[i]) return "-" + t[n].toLowerCase() + "-"
        }
        return !1
      },
      isDom: function (e) {
        return ("object" === ("undefined" == typeof HTMLElement ? "undefined" : i(HTMLElement)) ? function (e) {
          return e instanceof HTMLElement
        } : function (e) {
          return e && "object" === (void 0 === e ? "undefined" : i(e)) && 1 === e.nodeType && "string" == typeof e.nodeName
        })(e)
      },
      wheel: function (e, t, n) {
        var i = this,
          r = arguments.length;

        function a(a) {
          var o = a || window.event;

          function s(a, o) {
            a >= 0 ? r >= 2 && i.jquery.isFunction(t) && t.call(e, o) : a < 0 && r >= 3 && i.jquery.isFunction(n) && n.call(e, o)
          }
          o.wheelDelta ? s(-o.wheelDelta / 120, o) : o.detail && (-3 === o.detail ? s(-1, o) : 3 === o.detail ? s(1, o) : console.log("鼠标滚轮事件改了？", o.wheelDelta))
        }
        e.addEventListener("mousewheel", a, !1), e.addEventListener("DOMMouseScroll", a, !1), e.mouseScroll = a
      },
      addImageHover: function (e, t, n) {
        var i = new Image,
          r = new Image;
        i.src = t, r.src = n, e.addEventListener("mouseenter", function () {
          e.src = r.src
        }), e.addEventListener("mouseleave", function () {
          e.src = i.src
        })
      },
      listenArray: function (e, t) {
        var n = Array.prototype,
          i = Object.create(n),
          r = [];
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (n) {
          var a = i[n];
          r[n] = function () {
            return t.call(e), a.apply(this, arguments)
          }
        }), e.__proto__ = r
      },
      listenObj: function (e, t, n) {
        var i = e[t];
        Object.defineProperty(e, t, {
          set: function (t) {
            var r = i;
            i = t, n.call(e, t, r, this)
          },
          get: function () {
            return i
          }
        })
      },
      watch: function (e, t) {
        var n = null;
        var i = function (e, t) {
          if ("object" === this.type(e) && !this.isDom(e))
            if (this.isArray(e)) {
              for (var n = 0, r = e.length; n < r; n++) this.listenObj(e, n, t), "object" === this.type(e) && i(e[n], t);
              this.listenArray(e, t)
            } else
              for (var a in e) "object" === this.type(e) && i(e[a], t), this.listenObj(e, a, t)
        }.bind(this);
        i(e, function e() {
          var r = this;
          clearTimeout(n), n = setTimeout(function () {
            i(r, e), t.call(r)
          }, 10)
        })
      },
      getRange: function (e, t, n, i) {
        return Math.sqrt(Math.pow(Math.abs(e - n), 2) + Math.pow(Math.abs(t - i), 2))
      },
      getTransformStyle: function (e) {
        var t = e.style.cssText,
          n = t.match(/translate\((\S*)px,\s(\S*)px\)/),
          i = t.match(/scale\((\S*),\s(\S*)\)/),
          r = t.match(/rotate\((\S*)deg\)/),
          a = t.match(/skew\((\S*)deg,\s(\S*)deg\)/),
          o = {};
        return n && (o.translate = {
          translateX: n[1],
          translateY: n[2]
        }), i && (o.scale = {
          scaleX: i[1],
          scaleY: i[2]
        }), r && (o.rotate = r[1]), a && (o.skew = {
          skewX: a[1],
          skewY: a[2]
        }), o
      },
      setTransformStyle: function (e, t) {
        switch (this.getPrefix()) {
          case "-webkit-":
            e.style.webkitTransform = t;
            break;
          case "-Moz-":
            e.style.MozTransform = t;
            break;
          case "-o-":
            e.style.OTransform = t;
            break;
          case "-ms-":
            e.style.msTransform = t;
            break;
          default:
            e.style.transform = t
        }
      },
      getFinalStyle: function (e, t) {
        return window.getComputedStyle(e, null)[t]
      },
      msg: function (e, t) {
        var n = document.createElement("div"),
          i = this.getPrefix();
        switch (n.style.cssText = "position:fixed; height:40px; line-height:40px; color:#fff; padding:0 20px; background:rgba(0,0,0,.5);border-radius:5px; " + i + "transition: all .5s ease-in-out; pointer-events:none; opacity:0; left:50%; margin:auto; z-index:9999999999999999;", t) {
          case "top":
            n.style.top = "200px";
            break;
          case "center":
            n.style.top = 0, n.style.bottom = 0;
            break;
          case "bottom":
          default:
            n.style.bottom = "200px"
        }
        n.innerText = e, document.body.appendChild(n);
        var r = n.offsetWidth;
        n.style.marginLeft = -r / 2 + "px", setTimeout(function () {
          n.style.opacity = 1
        }), setTimeout(function () {
          n.style.opacity = 0, setTimeout(function () {
            n.parentNode.removeChild(n)
          }, 500)
        }, 3e3)
      },
      get: function (e, t, n) {
        var i = +new Date,
          r = new XMLHttpRequest; - 1 != e.indexOf("?") ? r.open("GET", e + "&time=" + i, !0) : r.open("GET", e + "?time=" + i, !0), r.onreadystatechange = function () {
          4 == r.readyState && 200 == r.status && t(r.responseText)
        }, r.ontimeout = n, r.onerror = n, r.upload.onprogress = function (e) {}, r.send()
      },
      post: function (e, t, n, i) {
        var r = +new Date,
          a = new XMLHttpRequest;
        a.open("POST", e + "?time=" + r, !0), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onreadystatechange = function () {
          4 == a.readyState && 200 == a.status && n(a.responseText)
        }, a.ontimeout = i, a.onerror = i, a.upload.onprogress = function (e) {}, a.send(this.objToUrl(t).substr(1))
      },
      objToUrl: function (e, t, n) {
        if (null == e) return "";
        var r = "",
          a = void 0 === e ? "undefined" : i(e);
        if ("string" == a || "number" == a || "boolean" == a) r += "&" + t + "=" + (null == n || n ? encodeURIComponent(e) : e);
        else
          for (var o in e) {
            var s = null == t ? o : t + (e instanceof Array ? "[" + o + "]" : "." + o);
            r += this.objToUrl(e[o], s, n)
          }
        return r
      },
      setCookie: function (e, t, n) {
        var i = new Date;
        i.setTime(Number(i) + n), document.cookie = e + "=" + escape(t) + (null == n ? "" : ";expires=" + i.toGMTString())
      },
      getCookie: function (e) {
        if (document.cookie.length > 0) {
          var t = document.cookie.indexOf(e + "=");
          if (-1 != t) {
            t = t + e.length + 1;
            var n = document.cookie.indexOf(";", t);
            return -1 == n && (n = document.cookie.length), decodeURI(document.cookie.substring(t, n))
          }
        }
        return ""
      }
    }, e.exports = r
  },
  //1
  function (e, t, n) {
    "use strict";
    void 0 === Date.now && (Date.now = function () {
      return (new Date).valueOf()
    });
    var i = i || function () {
      var e = [];
      return {
        REVISION: "14",
        getAll: function () {
          return e
        },
        removeAll: function () {
          e = []
        },
        add: function (t) {
          e.push(t)
        },
        remove: function (t) {
          var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
        },
        update: function (t) {
          if (0 === e.length) return !1;
          var n = 0;
          for (t = void 0 !== t ? t : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); n < e.length;) e[n].update(t) ? n++ : e.splice(n, 1);
          return !0
        }
      }
    }();
    i.Tween = function (e) {
      var t = e,
        n = {},
        r = {},
        a = {},
        o = 1e3,
        s = 0,
        c = !1,
        h = !1,
        l = !1,
        u = 0,
        d = null,
        p = i.Easing.Linear.None,
        f = i.Interpolation.Linear,
        m = [],
        v = null,
        g = !1,
        y = null,
        x = null,
        w = null;
      for (var b in e) n[b] = parseFloat(e[b], 10);
      this.to = function (e, t) {
        return void 0 !== t && (o = t), r = e, this
      }, this.start = function (e) {
        for (var o in i.add(this), h = !0, g = !1, d = void 0 !== e ? e : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), d += u, r) {
          if (r[o] instanceof Array) {
            if (0 === r[o].length) continue;
            r[o] = [t[o]].concat(r[o])
          }
          n[o] = t[o], n[o] instanceof Array == !1 && (n[o] *= 1), a[o] = n[o] || 0
        }
        return this
      }, this.stop = function () {
        return h ? (i.remove(this), h = !1, null !== w && w.call(t), this.stopChainedTweens(), this) : this
      }, this.stopChainedTweens = function () {
        for (var e = 0, t = m.length; e < t; e++) m[e].stop()
      }, this.delay = function (e) {
        return u = e, this
      }, this.repeat = function (e) {
        return s = e, this
      }, this.yoyo = function (e) {
        return c = e, this
      }, this.easing = function (e) {
        return p = e, this
      }, this.interpolation = function (e) {
        return f = e, this
      }, this.chain = function () {
        return m = arguments, this
      }, this.onStart = function (e) {
        return v = e, this
      }, this.onUpdate = function (e) {
        return y = e, this
      }, this.onComplete = function (e) {
        return x = e, this
      }, this.onStop = function (e) {
        return w = e, this
      }, this.update = function (e) {
        var i;
        if (e < d) return !0;
        !1 === g && (null !== v && v.call(t), g = !0);
        var h = (e - d) / o,
          w = p(h = h > 1 ? 1 : h);
        for (i in r) {
          var b = n[i] || 0,
            _ = r[i];
          _ instanceof Array ? t[i] = f(_, w) : ("string" == typeof _ && (_ = b + parseFloat(_, 10)), "number" == typeof _ && (t[i] = b + (_ - b) * w))
        }
        if (null !== y && y.call(t, w), 1 == h) {
          if (s > 0) {
            for (i in isFinite(s) && s--, a) {
              if ("string" == typeof r[i] && (a[i] = a[i] + parseFloat(r[i], 10)), c) {
                var E = a[i];
                a[i] = r[i], r[i] = E
              }
              n[i] = a[i]
            }
            return c && (l = !l), d = e + u, !0
          }
          null !== x && x.call(t);
          for (var M = 0, T = m.length; M < T; M++) m[M].start(e);
          return !1
        }
        return !0
      }
    }, i.Easing = {
      Linear: {
        None: function (e) {
          return e
        }
      },
      Quadratic: {
        In: function (e) {
          return e * e
        },
        Out: function (e) {
          return e * (2 - e)
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        }
      },
      Cubic: {
        In: function (e) {
          return e * e * e
        },
        Out: function (e) {
          return --e * e * e + 1
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        }
      },
      Quartic: {
        In: function (e) {
          return e * e * e * e
        },
        Out: function (e) {
          return 1 - --e * e * e * e
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        }
      },
      Quintic: {
        In: function (e) {
          return e * e * e * e * e
        },
        Out: function (e) {
          return --e * e * e * e * e + 1
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        }
      },
      Sinusoidal: {
        In: function (e) {
          return 1 - Math.cos(e * Math.PI / 2)
        },
        Out: function (e) {
          return Math.sin(e * Math.PI / 2)
        },
        InOut: function (e) {
          return .5 * (1 - Math.cos(Math.PI * e))
        }
      },
      Exponential: {
        In: function (e) {
          return 0 === e ? 0 : Math.pow(1024, e - 1)
        },
        Out: function (e) {
          return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
        },
        InOut: function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        }
      },
      Circular: {
        In: function (e) {
          return 1 - Math.sqrt(1 - e * e)
        },
        Out: function (e) {
          return Math.sqrt(1 - --e * e)
        },
        InOut: function (e) {
          return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
      },
      Elastic: {
        In: function (e) {
          var t, n = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4))
        },
        Out: function (e) {
          var t, n = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / .4) + 1)
        },
        InOut: function (e) {
          var t, n = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * .5 + 1)
        }
      },
      Back: {
        In: function (e) {
          var t = 1.70158;
          return e * e * ((t + 1) * e - t)
        },
        Out: function (e) {
          var t = 1.70158;
          return --e * e * ((t + 1) * e + t) + 1
        },
        InOut: function (e) {
          var t = 2.5949095;
          return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        }
      },
      Bounce: {
        In: function (e) {
          return 1 - i.Easing.Bounce.Out(1 - e)
        },
        Out: function (e) {
          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        },
        InOut: function (e) {
          return e < .5 ? .5 * i.Easing.Bounce.In(2 * e) : .5 * i.Easing.Bounce.Out(2 * e - 1) + .5
        }
      }
    }, i.Interpolation = {
      Linear: function (e, t) {
        var n = e.length - 1,
          r = n * t,
          a = Math.floor(r),
          o = i.Interpolation.Utils.Linear;
        return t < 0 ? o(e[0], e[1], r) : t > 1 ? o(e[n], e[n - 1], n - r) : o(e[a], e[a + 1 > n ? n : a + 1], r - a)
      },
      Bezier: function (e, t) {
        var n, r = 0,
          a = e.length - 1,
          o = Math.pow,
          s = i.Interpolation.Utils.Bernstein;
        for (n = 0; n <= a; n++) r += o(1 - t, a - n) * o(t, n) * e[n] * s(a, n);
        return r
      },
      CatmullRom: function (e, t) {
        var n = e.length - 1,
          r = n * t,
          a = Math.floor(r),
          o = i.Interpolation.Utils.CatmullRom;
        return e[0] === e[n] ? (t < 0 && (a = Math.floor(r = n * (1 + t))), o(e[(a - 1 + n) % n], e[a], e[(a + 1) % n], e[(a + 2) % n], r - a)) : t < 0 ? e[0] - (o(e[0], e[0], e[1], e[1], -r) - e[0]) : t > 1 ? e[n] - (o(e[n], e[n], e[n - 1], e[n - 1], r - n) - e[n]) : o(e[a ? a - 1 : 0], e[a], e[n < a + 1 ? n : a + 1], e[n < a + 2 ? n : a + 2], r - a)
      },
      Utils: {
        Linear: function (e, t, n) {
          return (t - e) * n + e
        },
        Bernstein: function (e, t) {
          var n = i.Interpolation.Utils.Factorial;
          return n(e) / n(t) / n(e - t)
        },
        Factorial: function () {
          var e = [1];
          return function (t) {
            var n, i = 1;
            if (e[t]) return e[t];
            for (n = t; n > 1; n--) i *= n;
            return e[t] = i
          }
        }(),
        CatmullRom: function (e, t, n, i, r) {
          var a = .5 * (n - e),
            o = .5 * (i - t),
            s = r * r;
          return (2 * t - 2 * n + a + o) * (r * s) + (-3 * t + 3 * n - 2 * a - o) * s + a * r + t
        }
      }
    }, e.exports = i
  },
  //2
  function (e, t, n) {
    "use strict";
    var i = n(3);
    window.THREE = i, n(4), n(5)
  },
  //3
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function r() {}
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function (e) {
      return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }), void 0 === Math.sign && (Math.sign = function (e) {
      return e < 0 ? -1 : e > 0 ? 1 : +e
    }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
      get: function () {
        return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
      }
    }), void 0 === Object.assign && (Object.assign = function (e) {
      if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
      for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var i = arguments[n];
        if (void 0 !== i && null !== i)
          for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
      }
      return t
    }), Object.assign(r.prototype, {
      addEventListener: function (e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var n = this._listeners;
        void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
      },
      hasEventListener: function (e, t) {
        if (void 0 === this._listeners) return !1;
        var n = this._listeners;
        return void 0 !== n[e] && -1 !== n[e].indexOf(t)
      },
      removeEventListener: function (e, t) {
        if (void 0 !== this._listeners) {
          var n = this._listeners[e];
          if (void 0 !== n) {
            var i = n.indexOf(t); - 1 !== i && n.splice(i, 1)
          }
        }
      },
      dispatchEvent: function (e) {
        if (void 0 !== this._listeners) {
          var t = this._listeners[e.type];
          if (void 0 !== t) {
            e.target = this;
            for (var n = t.slice(0), i = 0, r = n.length; i < r; i++) n[i].call(this, e)
          }
        }
      }
    });
    var a = "95",
      o = 0,
      s = 1,
      c = 2,
      h = 1,
      l = 2,
      u = 0,
      d = 1,
      p = 2,
      f = 0,
      m = 1,
      v = 2,
      g = 0,
      y = 1,
      x = 2,
      w = 3,
      b = 4,
      _ = 5,
      E = 100,
      M = 101,
      T = 102,
      S = 103,
      A = 104,
      L = 200,
      R = 201,
      P = 202,
      C = 203,
      O = 204,
      I = 205,
      D = 206,
      N = 207,
      U = 208,
      B = 209,
      F = 210,
      H = 0,
      z = 1,
      G = 2,
      k = 3,
      j = 4,
      V = 5,
      W = 6,
      X = 7,
      Y = 0,
      q = 1,
      Z = 2,
      J = 0,
      Q = 1,
      K = 2,
      $ = 3,
      ee = 4,
      te = 301,
      ne = 302,
      ie = 303,
      re = 304,
      ae = 305,
      oe = 306,
      se = 307,
      ce = 1e3,
      he = 1001,
      le = 1002,
      ue = 1003,
      de = 1004,
      pe = 1005,
      fe = 1006,
      me = 1007,
      ve = 1008,
      ge = 1009,
      ye = 1010,
      xe = 1011,
      we = 1012,
      be = 1013,
      _e = 1014,
      Ee = 1015,
      Me = 1016,
      Te = 1017,
      Se = 1018,
      Ae = 1019,
      Le = 1020,
      Re = 1021,
      Pe = 1022,
      Ce = 1023,
      Oe = 1024,
      Ie = 1025,
      De = Ce,
      Ne = 1026,
      Ue = 1027,
      Be = 33776,
      Fe = 33777,
      He = 33778,
      ze = 33779,
      Ge = 35840,
      ke = 35841,
      je = 35842,
      Ve = 35843,
      We = 36196,
      Xe = 37808,
      Ye = 37809,
      qe = 37810,
      Ze = 37811,
      Je = 37812,
      Qe = 37813,
      Ke = 37814,
      $e = 37815,
      et = 37816,
      tt = 37817,
      nt = 37818,
      it = 37819,
      rt = 37820,
      at = 37821,
      ot = 2201,
      st = 2400,
      ct = 0,
      ht = 1,
      lt = 2,
      ut = 3e3,
      dt = 3001,
      pt = 3007,
      ft = 3002,
      mt = 3004,
      vt = 3005,
      gt = 3006,
      yt = 3200,
      xt = 3201,
      wt = 0,
      bt = 1,
      _t = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function () {
          for (var e = [], t = 0; t < 256; t++) e[t] = (t < 16 ? "0" : "") + t.toString(16);
          return function () {
            var t = 4294967295 * Math.random() | 0,
              n = 4294967295 * Math.random() | 0,
              i = 4294967295 * Math.random() | 0,
              r = 4294967295 * Math.random() | 0;
            return (e[255 & t] + e[t >> 8 & 255] + e[t >> 16 & 255] + e[t >> 24 & 255] + "-" + e[255 & n] + e[n >> 8 & 255] + "-" + e[n >> 16 & 15 | 64] + e[n >> 24 & 255] + "-" + e[63 & i | 128] + e[i >> 8 & 255] + "-" + e[i >> 16 & 255] + e[i >> 24 & 255] + e[255 & r] + e[r >> 8 & 255] + e[r >> 16 & 255] + e[r >> 24 & 255]).toUpperCase()
          }
        }(),
        clamp: function (e, t, n) {
          return Math.max(t, Math.min(n, e))
        },
        euclideanModulo: function (e, t) {
          return (e % t + t) % t
        },
        mapLinear: function (e, t, n, i, r) {
          return i + (e - t) * (r - i) / (n - t)
        },
        lerp: function (e, t, n) {
          return (1 - n) * e + n * t
        },
        smoothstep: function (e, t, n) {
          return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e)
        },
        smootherstep: function (e, t, n) {
          return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10)
        },
        randInt: function (e, t) {
          return e + Math.floor(Math.random() * (t - e + 1))
        },
        randFloat: function (e, t) {
          return e + Math.random() * (t - e)
        },
        randFloatSpread: function (e) {
          return e * (.5 - Math.random())
        },
        degToRad: function (e) {
          return e * _t.DEG2RAD
        },
        radToDeg: function (e) {
          return e * _t.RAD2DEG
        },
        isPowerOfTwo: function (e) {
          return 0 == (e & e - 1) && 0 !== e
        },
        ceilPowerOfTwo: function (e) {
          return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
        },
        floorPowerOfTwo: function (e) {
          return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
        }
      };

    function Et(e, t) {
      this.x = e || 0, this.y = t || 0
    }

    function Mt() {
      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function Tt(e, t, n, i) {
      this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = void 0 !== i ? i : 1
    }

    function St(e, t, n) {
      this.x = e || 0, this.y = t || 0, this.z = n || 0
    }

    function At() {
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    Object.defineProperties(Et.prototype, {
      width: {
        get: function () {
          return this.x
        },
        set: function (e) {
          this.x = e
        }
      },
      height: {
        get: function () {
          return this.y
        },
        set: function (e) {
          this.y = e
        }
      }
    }), Object.assign(Et.prototype, {
      isVector2: !0,
      set: function (e, t) {
        return this.x = e, this.y = t, this
      },
      setScalar: function (e) {
        return this.x = e, this.y = e, this
      },
      setX: function (e) {
        return this.x = e, this
      },
      setY: function (e) {
        return this.y = e, this
      },
      setComponent: function (e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;
          case 1:
            this.y = t;
            break;
          default:
            throw new Error("index is out of range: " + e)
        }
        return this
      },
      getComponent: function (e) {
        switch (e) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          default:
            throw new Error("index is out of range: " + e)
        }
      },
      clone: function () {
        return new this.constructor(this.x, this.y)
      },
      copy: function (e) {
        return this.x = e.x, this.y = e.y, this
      },
      add: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
      },
      addScalar: function (e) {
        return this.x += e, this.y += e, this
      },
      addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this
      },
      addScaledVector: function (e, t) {
        return this.x += e.x * t, this.y += e.y * t, this
      },
      sub: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
      },
      subScalar: function (e) {
        return this.x -= e, this.y -= e, this
      },
      subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this
      },
      multiply: function (e) {
        return this.x *= e.x, this.y *= e.y, this
      },
      multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this
      },
      divide: function (e) {
        return this.x /= e.x, this.y /= e.y, this
      },
      divideScalar: function (e) {
        return this.multiplyScalar(1 / e)
      },
      applyMatrix3: function (e) {
        var t = this.x,
          n = this.y,
          i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
      },
      min: function (e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
      },
      max: function (e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
      },
      clamp: function (e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
      },
      clampScalar: function () {
        var e = new Et,
          t = new Et;
        return function (n, i) {
          return e.set(n, n), t.set(i, i), this.clamp(e, t)
        }
      }(),
      clampLength: function (e, t) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
      },
      floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
      },
      ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
      },
      round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
      },
      roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
      },
      negate: function () {
        return this.x = -this.x, this.y = -this.y, this
      },
      dot: function (e) {
        return this.x * e.x + this.y * e.y
      },
      cross: function (e) {
        return this.x * e.y - this.y * e.x
      },
      lengthSq: function () {
        return this.x * this.x + this.y * this.y
      },
      length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      },
      manhattanLength: function () {
        return Math.abs(this.x) + Math.abs(this.y)
      },
      normalize: function () {
        return this.divideScalar(this.length() || 1)
      },
      angle: function () {
        var e = Math.atan2(this.y, this.x);
        return e < 0 && (e += 2 * Math.PI), e
      },
      distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e))
      },
      distanceToSquared: function (e) {
        var t = this.x - e.x,
          n = this.y - e.y;
        return t * t + n * n
      },
      manhattanDistanceTo: function (e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
      },
      setLength: function (e) {
        return this.normalize().multiplyScalar(e)
      },
      lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
      },
      lerpVectors: function (e, t, n) {
        return this.subVectors(t, e).multiplyScalar(n).add(e)
      },
      equals: function (e) {
        return e.x === this.x && e.y === this.y
      },
      fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
      },
      toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
      },
      fromBufferAttribute: function (e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
      },
      rotateAround: function (e, t) {
        var n = Math.cos(t),
          i = Math.sin(t),
          r = this.x - e.x,
          a = this.y - e.y;
        return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this
      }
    }), Object.assign(Mt.prototype, {
      isMatrix4: !0,
      set: function (e, t, n, i, r, a, o, s, c, h, l, u, d, p, f, m) {
        var v = this.elements;
        return v[0] = e, v[4] = t, v[8] = n, v[12] = i, v[1] = r, v[5] = a, v[9] = o, v[13] = s, v[2] = c, v[6] = h, v[10] = l, v[14] = u, v[3] = d, v[7] = p, v[11] = f, v[15] = m, this
      },
      identity: function () {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
      },
      clone: function () {
        return (new Mt).fromArray(this.elements)
      },
      copy: function (e) {
        var t = this.elements,
          n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
      },
      copyPosition: function (e) {
        var t = this.elements,
          n = e.elements;
        return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
      },
      extractBasis: function (e, t, n) {
        return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
      },
      makeBasis: function (e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
      },
      extractRotation: function () {
        var e = new St;
        return function (t) {
          var n = this.elements,
            i = t.elements,
            r = 1 / e.setFromMatrixColumn(t, 0).length(),
            a = 1 / e.setFromMatrixColumn(t, 1).length(),
            o = 1 / e.setFromMatrixColumn(t, 2).length();
          return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[3] = 0, n[4] = i[4] * a, n[5] = i[5] * a, n[6] = i[6] * a, n[7] = 0, n[8] = i[8] * o, n[9] = i[9] * o, n[10] = i[10] * o, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this
        }
      }(),
      makeRotationFromEuler: function (e) {
        e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var t = this.elements,
          n = e.x,
          i = e.y,
          r = e.z,
          a = Math.cos(n),
          o = Math.sin(n),
          s = Math.cos(i),
          c = Math.sin(i),
          h = Math.cos(r),
          l = Math.sin(r);
        if ("XYZ" === e.order) {
          var u = a * h,
            d = a * l,
            p = o * h,
            f = o * l;
          t[0] = s * h, t[4] = -s * l, t[8] = c, t[1] = d + p * c, t[5] = u - f * c, t[9] = -o * s, t[2] = f - u * c, t[6] = p + d * c, t[10] = a * s
        } else if ("YXZ" === e.order) {
          var m = s * h,
            v = s * l,
            g = c * h,
            y = c * l;
          t[0] = m + y * o, t[4] = g * o - v, t[8] = a * c, t[1] = a * l, t[5] = a * h, t[9] = -o, t[2] = v * o - g, t[6] = y + m * o, t[10] = a * s
        } else if ("ZXY" === e.order) {
          m = s * h, v = s * l, g = c * h, y = c * l;
          t[0] = m - y * o, t[4] = -a * l, t[8] = g + v * o, t[1] = v + g * o, t[5] = a * h, t[9] = y - m * o, t[2] = -a * c, t[6] = o, t[10] = a * s
        } else if ("ZYX" === e.order) {
          u = a * h, d = a * l, p = o * h, f = o * l;
          t[0] = s * h, t[4] = p * c - d, t[8] = u * c + f, t[1] = s * l, t[5] = f * c + u, t[9] = d * c - p, t[2] = -c, t[6] = o * s, t[10] = a * s
        } else if ("YZX" === e.order) {
          var x = a * s,
            w = a * c,
            b = o * s,
            _ = o * c;
          t[0] = s * h, t[4] = _ - x * l, t[8] = b * l + w, t[1] = l, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = w * l + b, t[10] = x - _ * l
        } else if ("XZY" === e.order) {
          x = a * s, w = a * c, b = o * s, _ = o * c;
          t[0] = s * h, t[4] = -l, t[8] = c * h, t[1] = x * l + _, t[5] = a * h, t[9] = w * l - b, t[2] = b * l - w, t[6] = o * h, t[10] = _ * l + x
        }
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
      },
      makeRotationFromQuaternion: function () {
        var e = new St(0, 0, 0),
          t = new St(1, 1, 1);
        return function (n) {
          return this.compose(e, n, t)
        }
      }(),
      lookAt: function () {
        var e = new St,
          t = new St,
          n = new St;
        return function (i, r, a) {
          var o = this.elements;
          return n.subVectors(i, r), 0 === n.lengthSq() && (n.z = 1), n.normalize(), e.crossVectors(a, n), 0 === e.lengthSq() && (1 === Math.abs(a.z) ? n.x += 1e-4 : n.z += 1e-4, n.normalize(), e.crossVectors(a, n)), e.normalize(), t.crossVectors(n, e), o[0] = e.x, o[4] = t.x, o[8] = n.x, o[1] = e.y, o[5] = t.y, o[9] = n.y, o[2] = e.z, o[6] = t.z, o[10] = n.z, this
        }
      }(),
      multiply: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
      },
      premultiply: function (e) {
        return this.multiplyMatrices(e, this)
      },
      multiplyMatrices: function (e, t) {
        var n = e.elements,
          i = t.elements,
          r = this.elements,
          a = n[0],
          o = n[4],
          s = n[8],
          c = n[12],
          h = n[1],
          l = n[5],
          u = n[9],
          d = n[13],
          p = n[2],
          f = n[6],
          m = n[10],
          v = n[14],
          g = n[3],
          y = n[7],
          x = n[11],
          w = n[15],
          b = i[0],
          _ = i[4],
          E = i[8],
          M = i[12],
          T = i[1],
          S = i[5],
          A = i[9],
          L = i[13],
          R = i[2],
          P = i[6],
          C = i[10],
          O = i[14],
          I = i[3],
          D = i[7],
          N = i[11],
          U = i[15];
        return r[0] = a * b + o * T + s * R + c * I, r[4] = a * _ + o * S + s * P + c * D, r[8] = a * E + o * A + s * C + c * N, r[12] = a * M + o * L + s * O + c * U, r[1] = h * b + l * T + u * R + d * I, r[5] = h * _ + l * S + u * P + d * D, r[9] = h * E + l * A + u * C + d * N, r[13] = h * M + l * L + u * O + d * U, r[2] = p * b + f * T + m * R + v * I, r[6] = p * _ + f * S + m * P + v * D, r[10] = p * E + f * A + m * C + v * N, r[14] = p * M + f * L + m * O + v * U, r[3] = g * b + y * T + x * R + w * I, r[7] = g * _ + y * S + x * P + w * D, r[11] = g * E + y * A + x * C + w * N, r[15] = g * M + y * L + x * O + w * U, this
      },
      multiplyScalar: function (e) {
        var t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
      },
      applyToBufferAttribute: function () {
        var e = new St;
        return function (t) {
          for (var n = 0, i = t.count; n < i; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.applyMatrix4(this), t.setXYZ(n, e.x, e.y, e.z);
          return t
        }
      }(),
      determinant: function () {
        var e = this.elements,
          t = e[0],
          n = e[4],
          i = e[8],
          r = e[12],
          a = e[1],
          o = e[5],
          s = e[9],
          c = e[13],
          h = e[2],
          l = e[6],
          u = e[10],
          d = e[14];
        return e[3] * (+r * s * l - i * c * l - r * o * u + n * c * u + i * o * d - n * s * d) + e[7] * (+t * s * d - t * c * u + r * a * u - i * a * d + i * c * h - r * s * h) + e[11] * (+t * c * l - t * o * d - r * a * l + n * a * d + r * o * h - n * c * h) + e[15] * (-i * o * h - t * s * l + t * o * u + i * a * l - n * a * u + n * s * h)
      },
      transpose: function () {
        var e, t = this.elements;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
      },
      setPosition: function (e) {
        var t = this.elements;
        return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
      },
      getInverse: function (e, t) {
        var n = this.elements,
          i = e.elements,
          r = i[0],
          a = i[1],
          o = i[2],
          s = i[3],
          c = i[4],
          h = i[5],
          l = i[6],
          u = i[7],
          d = i[8],
          p = i[9],
          f = i[10],
          m = i[11],
          v = i[12],
          g = i[13],
          y = i[14],
          x = i[15],
          w = p * y * u - g * f * u + g * l * m - h * y * m - p * l * x + h * f * x,
          b = v * f * u - d * y * u - v * l * m + c * y * m + d * l * x - c * f * x,
          _ = d * g * u - v * p * u + v * h * m - c * g * m - d * h * x + c * p * x,
          E = v * p * l - d * g * l - v * h * f + c * g * f + d * h * y - c * p * y,
          M = r * w + a * b + o * _ + s * E;
        if (0 === M) {
          var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
          if (!0 === t) throw new Error(T);
          return console.warn(T), this.identity()
        }
        var S = 1 / M;
        return n[0] = w * S, n[1] = (g * f * s - p * y * s - g * o * m + a * y * m + p * o * x - a * f * x) * S, n[2] = (h * y * s - g * l * s + g * o * u - a * y * u - h * o * x + a * l * x) * S, n[3] = (p * l * s - h * f * s - p * o * u + a * f * u + h * o * m - a * l * m) * S, n[4] = b * S, n[5] = (d * y * s - v * f * s + v * o * m - r * y * m - d * o * x + r * f * x) * S, n[6] = (v * l * s - c * y * s - v * o * u + r * y * u + c * o * x - r * l * x) * S, n[7] = (c * f * s - d * l * s + d * o * u - r * f * u - c * o * m + r * l * m) * S, n[8] = _ * S, n[9] = (v * p * s - d * g * s - v * a * m + r * g * m + d * a * x - r * p * x) * S, n[10] = (c * g * s - v * h * s + v * a * u - r * g * u - c * a * x + r * h * x) * S, n[11] = (d * h * s - c * p * s - d * a * u + r * p * u + c * a * m - r * h * m) * S, n[12] = E * S, n[13] = (d * g * o - v * p * o + v * a * f - r * g * f - d * a * y + r * p * y) * S, n[14] = (v * h * o - c * g * o - v * a * l + r * g * l + c * a * y - r * h * y) * S, n[15] = (c * p * o - d * h * o + d * a * l - r * p * l - c * a * f + r * h * f) * S, this
      },
      scale: function (e) {
        var t = this.elements,
          n = e.x,
          i = e.y,
          r = e.z;
        return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this
      },
      getMaxScaleOnAxis: function () {
        var e = this.elements,
          t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
          n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
          i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i))
      },
      makeTranslation: function (e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
      },
      makeRotationX: function (e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
      },
      makeRotationY: function (e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
      },
      makeRotationZ: function (e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
      },
      makeRotationAxis: function (e, t) {
        var n = Math.cos(t),
          i = Math.sin(t),
          r = 1 - n,
          a = e.x,
          o = e.y,
          s = e.z,
          c = r * a,
          h = r * o;
        return this.set(c * a + n, c * o - i * s, c * s + i * o, 0, c * o + i * s, h * o + n, h * s - i * a, 0, c * s - i * o, h * s + i * a, r * s * s + n, 0, 0, 0, 0, 1), this
      },
      makeScale: function (e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
      },
      makeShear: function (e, t, n) {
        return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this
      },
      compose: function (e, t, n) {
        var i = this.elements,
          r = t._x,
          a = t._y,
          o = t._z,
          s = t._w,
          c = r + r,
          h = a + a,
          l = o + o,
          u = r * c,
          d = r * h,
          p = r * l,
          f = a * h,
          m = a * l,
          v = o * l,
          g = s * c,
          y = s * h,
          x = s * l,
          w = n.x,
          b = n.y,
          _ = n.z;
        return i[0] = (1 - (f + v)) * w, i[1] = (d + x) * w, i[2] = (p - y) * w, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (u + v)) * b, i[6] = (m + g) * b, i[7] = 0, i[8] = (p + y) * _, i[9] = (m - g) * _, i[10] = (1 - (u + f)) * _, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
      },
      decompose: function () {
        var e = new St,
          t = new Mt;
        return function (n, i, r) {
          var a = this.elements,
            o = e.set(a[0], a[1], a[2]).length(),
            s = e.set(a[4], a[5], a[6]).length(),
            c = e.set(a[8], a[9], a[10]).length();
          this.determinant() < 0 && (o = -o), n.x = a[12], n.y = a[13], n.z = a[14], t.copy(this);
          var h = 1 / o,
            l = 1 / s,
            u = 1 / c;
          return t.elements[0] *= h, t.elements[1] *= h, t.elements[2] *= h, t.elements[4] *= l, t.elements[5] *= l, t.elements[6] *= l, t.elements[8] *= u, t.elements[9] *= u, t.elements[10] *= u, i.setFromRotationMatrix(t), r.x = o, r.y = s, r.z = c, this
        }
      }(),
      makePerspective: function (e, t, n, i, r, a) {
        void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        var o = this.elements,
          s = 2 * r / (t - e),
          c = 2 * r / (n - i),
          h = (t + e) / (t - e),
          l = (n + i) / (n - i),
          u = -(a + r) / (a - r),
          d = -2 * a * r / (a - r);
        return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
      },
      makeOrthographic: function (e, t, n, i, r, a) {
        var o = this.elements,
          s = 1 / (t - e),
          c = 1 / (n - i),
          h = 1 / (a - r),
          l = (t + e) * s,
          u = (n + i) * c,
          d = (a + r) * h;
        return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
      },
      equals: function (e) {
        for (var t = this.elements, n = e.elements, i = 0; i < 16; i++)
          if (t[i] !== n[i]) return !1;
        return !0
      },
      fromArray: function (e, t) {
        void 0 === t && (t = 0);
        for (var n = 0; n < 16; n++) this.elements[n] = e[n + t];
        return this
      },
      toArray: function (e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0);
        var n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
      }
    }), Object.assign(Tt, {
      slerp: function (e, t, n, i) {
        return n.copy(e).slerp(t, i)
      },
      slerpFlat: function (e, t, n, i, r, a, o) {
        var s = n[i + 0],
          c = n[i + 1],
          h = n[i + 2],
          l = n[i + 3],
          u = r[a + 0],
          d = r[a + 1],
          p = r[a + 2],
          f = r[a + 3];
        if (l !== f || s !== u || c !== d || h !== p) {
          var m = 1 - o,
            v = s * u + c * d + h * p + l * f,
            g = v >= 0 ? 1 : -1,
            y = 1 - v * v;
          if (y > Number.EPSILON) {
            var x = Math.sqrt(y),
              w = Math.atan2(x, v * g);
            m = Math.sin(m * w) / x, o = Math.sin(o * w) / x
          }
          var b = o * g;
          if (s = s * m + u * b, c = c * m + d * b, h = h * m + p * b, l = l * m + f * b, m === 1 - o) {
            var _ = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
            s *= _, c *= _, h *= _, l *= _
          }
        }
        e[t] = s, e[t + 1] = c, e[t + 2] = h, e[t + 3] = l
      }
    }), Object.defineProperties(Tt.prototype, {
      x: {
        get: function () {
          return this._x
        },
        set: function (e) {
          this._x = e, this.onChangeCallback()
        }
      },
      y: {
        get: function () {
          return this._y
        },
        set: function (e) {
          this._y = e, this.onChangeCallback()
        }
      },
      z: {
        get: function () {
          return this._z
        },
        set: function (e) {
          this._z = e, this.onChangeCallback()
        }
      },
      w: {
        get: function () {
          return this._w
        },
        set: function (e) {
          this._w = e, this.onChangeCallback()
        }
      }
    }), Object.assign(Tt.prototype, {
      set: function (e, t, n, i) {
        return this._x = e, this._y = t, this._z = n, this._w = i, this.onChangeCallback(), this
      },
      clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._w)
      },
      copy: function (e) {
        return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
      },
      setFromEuler: function (e, t) {
        if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        var n = e._x,
          i = e._y,
          r = e._z,
          a = e.order,
          o = Math.cos,
          s = Math.sin,
          c = o(n / 2),
          h = o(i / 2),
          l = o(r / 2),
          u = s(n / 2),
          d = s(i / 2),
          p = s(r / 2);
        return "XYZ" === a ? (this._x = u * h * l + c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l - u * d * p) : "YXZ" === a ? (this._x = u * h * l + c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l + u * d * p) : "ZXY" === a ? (this._x = u * h * l - c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l - u * d * p) : "ZYX" === a ? (this._x = u * h * l - c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l + u * d * p) : "YZX" === a ? (this._x = u * h * l + c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l - u * d * p) : "XZY" === a && (this._x = u * h * l - c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l + u * d * p), !1 !== t && this.onChangeCallback(), this
      },
      setFromAxisAngle: function (e, t) {
        var n = t / 2,
          i = Math.sin(n);
        return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this.onChangeCallback(), this
      },
      setFromRotationMatrix: function (e) {
        var t, n = e.elements,
          i = n[0],
          r = n[4],
          a = n[8],
          o = n[1],
          s = n[5],
          c = n[9],
          h = n[2],
          l = n[6],
          u = n[10],
          d = i + s + u;
        return d > 0 ? (t = .5 / Math.sqrt(d + 1), this._w = .25 / t, this._x = (l - c) * t, this._y = (a - h) * t, this._z = (o - r) * t) : i > s && i > u ? (t = 2 * Math.sqrt(1 + i - s - u), this._w = (l - c) / t, this._x = .25 * t, this._y = (r + o) / t, this._z = (a + h) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - i - u), this._w = (a - h) / t, this._x = (r + o) / t, this._y = .25 * t, this._z = (c + l) / t) : (t = 2 * Math.sqrt(1 + u - i - s), this._w = (o - r) / t, this._x = (a + h) / t, this._y = (c + l) / t, this._z = .25 * t), this.onChangeCallback(), this
      },
      setFromUnitVectors: function () {
        var e, t = new St;
        return function (n, i) {
          return void 0 === t && (t = new St), (e = n.dot(i) + 1) < 1e-6 ? (e = 0, Math.abs(n.x) > Math.abs(n.z) ? t.set(-n.y, n.x, 0) : t.set(0, -n.z, n.y)) : t.crossVectors(n, i), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize()
        }
      }(),
      angleTo: function (e) {
        return 2 * Math.acos(Math.abs(_t.clamp(this.dot(e), -1, 1)))
      },
      rotateTowards: function (e, t) {
        var n = this.angleTo(e);
        if (0 === n) return this;
        var i = Math.min(1, t / n);
        return this.slerp(e, i), this
      },
      inverse: function () {
        return this.conjugate()
      },
      conjugate: function () {
        return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
      },
      dot: function (e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
      },
      lengthSq: function () {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      },
      length: function () {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
      },
      normalize: function () {
        var e = this.length();
        return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
      },
      multiply: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
      },
      premultiply: function (e) {
        return this.multiplyQuaternions(e, this)
      },
      multiplyQuaternions: function (e, t) {
        var n = e._x,
          i = e._y,
          r = e._z,
          a = e._w,
          o = t._x,
          s = t._y,
          c = t._z,
          h = t._w;
        return this._x = n * h + a * o + i * c - r * s, this._y = i * h + a * s + r * o - n * c, this._z = r * h + a * c + n * s - i * o, this._w = a * h - n * o - i * s - r * c, this.onChangeCallback(), this
      },
      slerp: function (e, t) {
        if (0 === t) return this;
        if (1 === t) return this.copy(e);
        var n = this._x,
          i = this._y,
          r = this._z,
          a = this._w,
          o = a * e._w + n * e._x + i * e._y + r * e._z;
        if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
        var s = 1 - o * o;
        if (s <= Number.EPSILON) {
          var c = 1 - t;
          return this._w = c * a + t * this._w, this._x = c * n + t * this._x, this._y = c * i + t * this._y, this._z = c * r + t * this._z, this.normalize()
        }
        var h = Math.sqrt(s),
          l = Math.atan2(h, o),
          u = Math.sin((1 - t) * l) / h,
          d = Math.sin(t * l) / h;
        return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this.onChangeCallback(), this
      },
      equals: function (e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
      },
      fromArray: function (e, t) {
        return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
      },
      toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
      },
      onChange: function (e) {
        return this.onChangeCallback = e, this
      },
      onChangeCallback: function () {}
    }), Object.assign(St.prototype, {
      isVector3: !0,
      set: function (e, t, n) {
        return this.x = e, this.y = t, this.z = n, this
      },
      setScalar: function (e) {
        return this.x = e, this.y = e, this.z = e, this
      },
      setX: function (e) {
        return this.x = e, this
      },
      setY: function (e) {
        return this.y = e, this
      },
      setZ: function (e) {
        return this.z = e, this
      },
      setComponent: function (e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;
          case 1:
            this.y = t;
            break;
          case 2:
            this.z = t;
            break;
          default:
            throw new Error("index is out of range: " + e)
        }
        return this
      },
      getComponent: function (e) {
        switch (e) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          default:
            throw new Error("index is out of range: " + e)
        }
      },
      clone: function () {
        return new this.constructor(this.x, this.y, this.z)
      },
      copy: function (e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this
      },
      add: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
      },
      addScalar: function (e) {
        return this.x += e, this.y += e, this.z += e, this
      },
      addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
      },
      addScaledVector: function (e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
      },
      sub: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
      },
      subScalar: function (e) {
        return this.x -= e, this.y -= e, this.z -= e, this
      },
      subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
      },
      multiply: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
      },
      multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this.z *= e, this
      },
      multiplyVectors: function (e, t) {
        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
      },
      applyEuler: function () {
        var e = new Tt;
        return function (t) {
          return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(e.setFromEuler(t))
        }
      }(),
      applyAxisAngle: function () {
        var e = new Tt;
        return function (t, n) {
          return this.applyQuaternion(e.setFromAxisAngle(t, n))
        }
      }(),
      applyMatrix3: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this
      },
      applyMatrix4: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = e.elements,
          a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this
      },
      applyQuaternion: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = e.x,
          a = e.y,
          o = e.z,
          s = e.w,
          c = s * t + a * i - o * n,
          h = s * n + o * t - r * i,
          l = s * i + r * n - a * t,
          u = -r * t - a * n - o * i;
        return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o, this.z = l * s + u * -o + c * -a - h * -r, this
      },
      project: function () {
        var e = new Mt;
        return function (t) {
          return e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyMatrix4(e)
        }
      }(),
      unproject: function () {
        var e = new Mt;
        return function (t) {
          return e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyMatrix4(e)
        }
      }(),
      transformDirection: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = e.elements;
        return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize()
      },
      divide: function (e) {
        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
      },
      divideScalar: function (e) {
        return this.multiplyScalar(1 / e)
      },
      min: function (e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
      },
      max: function (e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
      },
      clamp: function (e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
      },
      clampScalar: function () {
        var e = new St,
          t = new St;
        return function (n, i) {
          return e.set(n, n, n), t.set(i, i, i), this.clamp(e, t)
        }
      }(),
      clampLength: function (e, t) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
      },
      floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
      },
      ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
      },
      round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
      },
      roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
      },
      negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
      },
      dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
      },
      lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
      },
      length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
      },
      manhattanLength: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
      },
      normalize: function () {
        return this.divideScalar(this.length() || 1)
      },
      setLength: function (e) {
        return this.normalize().multiplyScalar(e)
      },
      lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
      },
      lerpVectors: function (e, t, n) {
        return this.subVectors(t, e).multiplyScalar(n).add(e)
      },
      cross: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
      },
      crossVectors: function (e, t) {
        var n = e.x,
          i = e.y,
          r = e.z,
          a = t.x,
          o = t.y,
          s = t.z;
        return this.x = i * s - r * o, this.y = r * a - n * s, this.z = n * o - i * a, this
      },
      projectOnVector: function (e) {
        var t = e.dot(this) / e.lengthSq();
        return this.copy(e).multiplyScalar(t)
      },
      projectOnPlane: function () {
        var e = new St;
        return function (t) {
          return e.copy(this).projectOnVector(t), this.sub(e)
        }
      }(),
      reflect: function () {
        var e = new St;
        return function (t) {
          return this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
        }
      }(),
      angleTo: function (e) {
        var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
        return Math.acos(_t.clamp(t, -1, 1))
      },
      distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e))
      },
      distanceToSquared: function (e) {
        var t = this.x - e.x,
          n = this.y - e.y,
          i = this.z - e.z;
        return t * t + n * n + i * i
      },
      manhattanDistanceTo: function (e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      },
      setFromSpherical: function (e) {
        var t = Math.sin(e.phi) * e.radius;
        return this.x = t * Math.sin(e.theta), this.y = Math.cos(e.phi) * e.radius, this.z = t * Math.cos(e.theta), this
      },
      setFromCylindrical: function (e) {
        return this.x = e.radius * Math.sin(e.theta), this.y = e.y, this.z = e.radius * Math.cos(e.theta), this
      },
      setFromMatrixPosition: function (e) {
        var t = e.elements;
        return this.x = t[12], this.y = t[13], this.z = t[14], this
      },
      setFromMatrixScale: function (e) {
        var t = this.setFromMatrixColumn(e, 0).length(),
          n = this.setFromMatrixColumn(e, 1).length(),
          i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t, this.y = n, this.z = i, this
      },
      setFromMatrixColumn: function (e, t) {
        return this.fromArray(e.elements, 4 * t)
      },
      equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
      },
      fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
      },
      toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
      },
      fromBufferAttribute: function (e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
      }
    }), Object.assign(At.prototype, {
      isMatrix3: !0,
      set: function (e, t, n, i, r, a, o, s, c) {
        var h = this.elements;
        return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = r, h[5] = s, h[6] = n, h[7] = a, h[8] = c, this
      },
      identity: function () {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
      },
      clone: function () {
        return (new this.constructor).fromArray(this.elements)
      },
      copy: function (e) {
        var t = this.elements,
          n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
      },
      setFromMatrix4: function (e) {
        var t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
      },
      applyToBufferAttribute: function () {
        var e = new St;
        return function (t) {
          for (var n = 0, i = t.count; n < i; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.applyMatrix3(this), t.setXYZ(n, e.x, e.y, e.z);
          return t
        }
      }(),
      multiply: function (e) {
        return this.multiplyMatrices(this, e)
      },
      premultiply: function (e) {
        return this.multiplyMatrices(e, this)
      },
      multiplyMatrices: function (e, t) {
        var n = e.elements,
          i = t.elements,
          r = this.elements,
          a = n[0],
          o = n[3],
          s = n[6],
          c = n[1],
          h = n[4],
          l = n[7],
          u = n[2],
          d = n[5],
          p = n[8],
          f = i[0],
          m = i[3],
          v = i[6],
          g = i[1],
          y = i[4],
          x = i[7],
          w = i[2],
          b = i[5],
          _ = i[8];
        return r[0] = a * f + o * g + s * w, r[3] = a * m + o * y + s * b, r[6] = a * v + o * x + s * _, r[1] = c * f + h * g + l * w, r[4] = c * m + h * y + l * b, r[7] = c * v + h * x + l * _, r[2] = u * f + d * g + p * w, r[5] = u * m + d * y + p * b, r[8] = u * v + d * x + p * _, this
      },
      multiplyScalar: function (e) {
        var t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
      },
      determinant: function () {
        var e = this.elements,
          t = e[0],
          n = e[1],
          i = e[2],
          r = e[3],
          a = e[4],
          o = e[5],
          s = e[6],
          c = e[7],
          h = e[8];
        return t * a * h - t * o * c - n * r * h + n * o * s + i * r * c - i * a * s
      },
      getInverse: function (e, t) {
        e && e.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
        var n = e.elements,
          i = this.elements,
          r = n[0],
          a = n[1],
          o = n[2],
          s = n[3],
          c = n[4],
          h = n[5],
          l = n[6],
          u = n[7],
          d = n[8],
          p = d * c - h * u,
          f = h * l - d * s,
          m = u * s - c * l,
          v = r * p + a * f + o * m;
        if (0 === v) {
          var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
          if (!0 === t) throw new Error(g);
          return console.warn(g), this.identity()
        }
        var y = 1 / v;
        return i[0] = p * y, i[1] = (o * u - d * a) * y, i[2] = (h * a - o * c) * y, i[3] = f * y, i[4] = (d * r - o * l) * y, i[5] = (o * s - h * r) * y, i[6] = m * y, i[7] = (a * l - u * r) * y, i[8] = (c * r - a * s) * y, this
      },
      transpose: function () {
        var e, t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
      },
      getNormalMatrix: function (e) {
        return this.setFromMatrix4(e).getInverse(this).transpose()
      },
      transposeIntoArray: function (e) {
        var t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
      },
      setUvTransform: function (e, t, n, i, r, a, o) {
        var s = Math.cos(r),
          c = Math.sin(r);
        this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -i * c, i * s, -i * (-c * a + s * o) + o + t, 0, 0, 1)
      },
      scale: function (e, t) {
        var n = this.elements;
        return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
      },
      rotate: function (e) {
        var t = Math.cos(e),
          n = Math.sin(e),
          i = this.elements,
          r = i[0],
          a = i[3],
          o = i[6],
          s = i[1],
          c = i[4],
          h = i[7];
        return i[0] = t * r + n * s, i[3] = t * a + n * c, i[6] = t * o + n * h, i[1] = -n * r + t * s, i[4] = -n * a + t * c, i[7] = -n * o + t * h, this
      },
      translate: function (e, t) {
        var n = this.elements;
        return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
      },
      equals: function (e) {
        for (var t = this.elements, n = e.elements, i = 0; i < 9; i++)
          if (t[i] !== n[i]) return !1;
        return !0
      },
      fromArray: function (e, t) {
        void 0 === t && (t = 0);
        for (var n = 0; n < 9; n++) this.elements[n] = e[n + t];
        return this
      },
      toArray: function (e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0);
        var n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
      }
    });
    var Lt = {
        getDataURL: function (e) {
          var t;
          if (e instanceof HTMLCanvasElement) t = e;
          else {
            "undefined" != typeof OffscreenCanvas ? t = new OffscreenCanvas(e.width, e.height) : ((t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = e.width, t.height = e.height);
            var n = t.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height)
          }
          return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
        }
      },
      Rt = 0;

    function Pt(e, t, n, i, r, a, o, s, c, h) {
      Object.defineProperty(this, "id", {
        value: Rt++
      }), this.uuid = _t.generateUUID(), this.name = "", this.image = void 0 !== e ? e : Pt.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : Pt.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : he, this.wrapT = void 0 !== i ? i : he, this.magFilter = void 0 !== r ? r : fe, this.minFilter = void 0 !== a ? a : ve, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : Ce, this.type = void 0 !== s ? s : ge, this.offset = new Et(0, 0), this.repeat = new Et(1, 1), this.center = new Et(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new At, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : ut, this.version = 0, this.onUpdate = null
    }

    function Ct(e, t, n, i) {
      this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = void 0 !== i ? i : 1
    }

    function Ot(e, t, n) {
      this.width = e, this.height = t, this.scissor = new Ct(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ct(0, 0, e, t), void 0 === (n = n || {}).minFilter && (n.minFilter = fe), this.texture = new Pt(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.generateMipmaps = void 0 === n.generateMipmaps || n.generateMipmaps, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }

    function It(e, t, n) {
      Ot.call(this, e, t, n), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }

    function Dt(e, t, n, i, r, a, o, s, c, h, l, u) {
      Pt.call(this, null, a, o, s, c, h, i, r, l, u), this.image = {
        data: e,
        width: t,
        height: n
      }, this.magFilter = void 0 !== c ? c : ue, this.minFilter = void 0 !== h ? h : ue, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    function Nt(e, t) {
      this.min = void 0 !== e ? e : new St(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new St(-1 / 0, -1 / 0, -1 / 0)
    }

    function Ut(e, t) {
      this.center = void 0 !== e ? e : new St, this.radius = void 0 !== t ? t : 0
    }

    function Bt(e, t) {
      this.normal = void 0 !== e ? e : new St(1, 0, 0), this.constant = void 0 !== t ? t : 0
    }

    function Ft(e, t, n, i, r, a) {
      this.planes = [void 0 !== e ? e : new Bt, void 0 !== t ? t : new Bt, void 0 !== n ? n : new Bt, void 0 !== i ? i : new Bt, void 0 !== r ? r : new Bt, void 0 !== a ? a : new Bt]
    }
    Pt.DEFAULT_IMAGE = void 0, Pt.DEFAULT_MAPPING = 300, Pt.prototype = Object.assign(Object.create(r.prototype), {
      constructor: Pt,
      isTexture: !0,
      updateMatrix: function () {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
      },
      toJSON: function (e) {
        var t = void 0 === e || "string" == typeof e;
        if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
        var n = {
          metadata: {
            version: 4.5,
            type: "Texture",
            generator: "Texture.toJSON"
          },
          uuid: this.uuid,
          name: this.name,
          mapping: this.mapping,
          repeat: [this.repeat.x, this.repeat.y],
          offset: [this.offset.x, this.offset.y],
          center: [this.center.x, this.center.y],
          rotation: this.rotation,
          wrap: [this.wrapS, this.wrapT],
          format: this.format,
          minFilter: this.minFilter,
          magFilter: this.magFilter,
          anisotropy: this.anisotropy,
          flipY: this.flipY
        };
        if (void 0 !== this.image) {
          var i = this.image;
          if (void 0 === i.uuid && (i.uuid = _t.generateUUID()), !t && void 0 === e.images[i.uuid]) {
            var r;
            if (Array.isArray(i)) {
              r = [];
              for (var a = 0, o = i.length; a < o; a++) r.push(Lt.getDataURL(i[a]))
            } else r = Lt.getDataURL(i);
            e.images[i.uuid] = {
              uuid: i.uuid,
              url: r
            }
          }
          n.image = i.uuid
        }
        return t || (e.textures[this.uuid] = n), n
      },
      dispose: function () {
        this.dispatchEvent({
          type: "dispose"
        })
      },
      transformUv: function (e) {
        if (300 === this.mapping) {
          if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
            case ce:
              e.x = e.x - Math.floor(e.x);
              break;
            case he:
              e.x = e.x < 0 ? 0 : 1;
              break;
            case le:
              1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
          }
          if (e.y < 0 || e.y > 1) switch (this.wrapT) {
            case ce:
              e.y = e.y - Math.floor(e.y);
              break;
            case he:
              e.y = e.y < 0 ? 0 : 1;
              break;
            case le:
              1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
          }
          this.flipY && (e.y = 1 - e.y)
        }
      }
    }), Object.defineProperty(Pt.prototype, "needsUpdate", {
      set: function (e) {
        !0 === e && this.version++
      }
    }), Object.assign(Ct.prototype, {
      isVector4: !0,
      set: function (e, t, n, i) {
        return this.x = e, this.y = t, this.z = n, this.w = i, this
      },
      setScalar: function (e) {
        return this.x = e, this.y = e, this.z = e, this.w = e, this
      },
      setX: function (e) {
        return this.x = e, this
      },
      setY: function (e) {
        return this.y = e, this
      },
      setZ: function (e) {
        return this.z = e, this
      },
      setW: function (e) {
        return this.w = e, this
      },
      setComponent: function (e, t) {
        switch (e) {
          case 0:
            this.x = t;
            break;
          case 1:
            this.y = t;
            break;
          case 2:
            this.z = t;
            break;
          case 3:
            this.w = t;
            break;
          default:
            throw new Error("index is out of range: " + e)
        }
        return this
      },
      getComponent: function (e) {
        switch (e) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          case 3:
            return this.w;
          default:
            throw new Error("index is out of range: " + e)
        }
      },
      clone: function () {
        return new this.constructor(this.x, this.y, this.z, this.w)
      },
      copy: function (e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
      },
      add: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
      },
      addScalar: function (e) {
        return this.x += e, this.y += e, this.z += e, this.w += e, this
      },
      addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
      },
      addScaledVector: function (e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
      },
      sub: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
      },
      subScalar: function (e) {
        return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
      },
      subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
      },
      multiplyScalar: function (e) {
        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
      },
      applyMatrix4: function (e) {
        var t = this.x,
          n = this.y,
          i = this.z,
          r = this.w,
          a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this
      },
      divideScalar: function (e) {
        return this.multiplyScalar(1 / e)
      },
      setAxisAngleFromQuaternion: function (e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
      },
      setAxisAngleFromRotationMatrix: function (e) {
        var t, n, i, r, a = e.elements,
          o = a[0],
          s = a[4],
          c = a[8],
          h = a[1],
          l = a[5],
          u = a[9],
          d = a[2],
          p = a[6],
          f = a[10];
        if (Math.abs(s - h) < .01 && Math.abs(c - d) < .01 && Math.abs(u - p) < .01) {
          if (Math.abs(s + h) < .1 && Math.abs(c + d) < .1 && Math.abs(u + p) < .1 && Math.abs(o + l + f - 3) < .1) return this.set(1, 0, 0, 0), this;
          t = Math.PI;
          var m = (o + 1) / 2,
            v = (l + 1) / 2,
            g = (f + 1) / 2,
            y = (s + h) / 4,
            x = (c + d) / 4,
            w = (u + p) / 4;
          return m > v && m > g ? m < .01 ? (n = 0, i = .707106781, r = .707106781) : (i = y / (n = Math.sqrt(m)), r = x / n) : v > g ? v < .01 ? (n = .707106781, i = 0, r = .707106781) : (n = y / (i = Math.sqrt(v)), r = w / i) : g < .01 ? (n = .707106781, i = .707106781, r = 0) : (n = x / (r = Math.sqrt(g)), i = w / r), this.set(n, i, r, t), this
        }
        var b = Math.sqrt((p - u) * (p - u) + (c - d) * (c - d) + (h - s) * (h - s));
        return Math.abs(b) < .001 && (b = 1), this.x = (p - u) / b, this.y = (c - d) / b, this.z = (h - s) / b, this.w = Math.acos((o + l + f - 1) / 2), this
      },
      min: function (e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
      },
      max: function (e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
      },
      clamp: function (e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
      },
      clampScalar: function () {
        var e, t;
        return function (n, i) {
          return void 0 === e && (e = new Ct, t = new Ct), e.set(n, n, n, n), t.set(i, i, i, i), this.clamp(e, t)
        }
      }(),
      clampLength: function (e, t) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
      },
      floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
      },
      ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
      },
      round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
      },
      roundToZero: function () {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
      },
      negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
      },
      dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
      },
      lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      },
      length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
      },
      manhattanLength: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
      },
      normalize: function () {
        return this.divideScalar(this.length() || 1)
      },
      setLength: function (e) {
        return this.normalize().multiplyScalar(e)
      },
      lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
      },
      lerpVectors: function (e, t, n) {
        return this.subVectors(t, e).multiplyScalar(n).add(e)
      },
      equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
      },
      fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
      },
      toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
      },
      fromBufferAttribute: function (e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
      }
    }), Ot.prototype = Object.assign(Object.create(r.prototype), {
      constructor: Ot,
      isWebGLRenderTarget: !0,
      setSize: function (e, t) {
        this.width === e && this.height === t || (this.width = e, this.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
      },
      dispose: function () {
        this.dispatchEvent({
          type: "dispose"
        })
      }
    }), It.prototype = Object.create(Ot.prototype), It.prototype.constructor = It, It.prototype.isWebGLRenderTargetCube = !0, Dt.prototype = Object.create(Pt.prototype), Dt.prototype.constructor = Dt, Dt.prototype.isDataTexture = !0, Object.assign(Nt.prototype, {
      isBox3: !0,
      set: function (e, t) {
        return this.min.copy(e), this.max.copy(t), this
      },
      setFromArray: function (e) {
        for (var t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.length; s < c; s += 3) {
          var h = e[s],
            l = e[s + 1],
            u = e[s + 2];
          h < t && (t = h), l < n && (n = l), u < i && (i = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
        }
        return this.min.set(t, n, i), this.max.set(r, a, o), this
      },
      setFromBufferAttribute: function (e) {
        for (var t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.count; s < c; s++) {
          var h = e.getX(s),
            l = e.getY(s),
            u = e.getZ(s);
          h < t && (t = h), l < n && (n = l), u < i && (i = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
        }
        return this.min.set(t, n, i), this.max.set(r, a, o), this
      },
      setFromPoints: function (e) {
        this.makeEmpty();
        for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
        return this
      },
      setFromCenterAndSize: function () {
        var e = new St;
        return function (t, n) {
          var i = e.copy(n).multiplyScalar(.5);
          return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
        }
      }(),
      setFromObject: function (e) {
        return this.makeEmpty(), this.expandByObject(e)
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
      },
      makeEmpty: function () {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
      },
      isEmpty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
      },
      getCenter: function (e) {
        return void 0 === e && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new St), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
      },
      getSize: function (e) {
        return void 0 === e && (console.warn("THREE.Box3: .getSize() target is now required"), e = new St), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
      },
      expandByPoint: function (e) {
        return this.min.min(e), this.max.max(e), this
      },
      expandByVector: function (e) {
        return this.min.sub(e), this.max.add(e), this
      },
      expandByScalar: function (e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
      },
      expandByObject: function () {
        var e, t, n, i = new St;

        function r(r) {
          var a = r.geometry;
          if (void 0 !== a)
            if (a.isGeometry) {
              var o = a.vertices;
              for (t = 0, n = o.length; t < n; t++) i.copy(o[t]), i.applyMatrix4(r.matrixWorld), e.expandByPoint(i)
            } else if (a.isBufferGeometry) {
            var s = a.attributes.position;
            if (void 0 !== s)
              for (t = 0, n = s.count; t < n; t++) i.fromBufferAttribute(s, t).applyMatrix4(r.matrixWorld), e.expandByPoint(i)
          }
        }
        return function (t) {
          return e = this, t.updateMatrixWorld(!0), t.traverse(r), this
        }
      }(),
      containsPoint: function (e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
      },
      containsBox: function (e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
      },
      getParameter: function (e, t) {
        return void 0 === t && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new St), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
      },
      intersectsBox: function (e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
      },
      intersectsSphere: function () {
        var e = new St;
        return function (t) {
          return this.clampPoint(t.center, e), e.distanceToSquared(t.center) <= t.radius * t.radius
        }
      }(),
      intersectsPlane: function (e) {
        var t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= e.constant && n >= e.constant
      },
      intersectsTriangle: function () {
        var e = new St,
          t = new St,
          n = new St,
          i = new St,
          r = new St,
          a = new St,
          o = new St,
          s = new St,
          c = new St,
          h = new St;

        function l(i) {
          var r, a;
          for (r = 0, a = i.length - 3; r <= a; r += 3) {
            o.fromArray(i, r);
            var s = c.x * Math.abs(o.x) + c.y * Math.abs(o.y) + c.z * Math.abs(o.z),
              h = e.dot(o),
              l = t.dot(o),
              u = n.dot(o);
            if (Math.max(-Math.max(h, l, u), Math.min(h, l, u)) > s) return !1
          }
          return !0
        }
        return function (o) {
          if (this.isEmpty()) return !1;
          this.getCenter(s), c.subVectors(this.max, s), e.subVectors(o.a, s), t.subVectors(o.b, s), n.subVectors(o.c, s), i.subVectors(t, e), r.subVectors(n, t), a.subVectors(e, n);
          var u = [0, -i.z, i.y, 0, -r.z, r.y, 0, -a.z, a.y, i.z, 0, -i.x, r.z, 0, -r.x, a.z, 0, -a.x, -i.y, i.x, 0, -r.y, r.x, 0, -a.y, a.x, 0];
          return !!l(u) && (!!l(u = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (h.crossVectors(i, r), l(u = [h.x, h.y, h.z])))
        }
      }(),
      clampPoint: function (e, t) {
        return void 0 === t && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new St), t.copy(e).clamp(this.min, this.max)
      },
      distanceToPoint: function () {
        var e = new St;
        return function (t) {
          return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
      }(),
      getBoundingSphere: function () {
        var e = new St;
        return function (t) {
          return void 0 === t && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), t = new Ut), this.getCenter(t.center), t.radius = .5 * this.getSize(e).length(), t
        }
      }(),
      intersect: function (e) {
        return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
      },
      union: function (e) {
        return this.min.min(e.min), this.max.max(e.max), this
      },
      applyMatrix4: function (e) {
        if (this.isEmpty()) return this;
        var t = e.elements,
          n = t[0] * this.min.x,
          i = t[1] * this.min.x,
          r = t[2] * this.min.x,
          a = t[0] * this.max.x,
          o = t[1] * this.max.x,
          s = t[2] * this.max.x,
          c = t[4] * this.min.y,
          h = t[5] * this.min.y,
          l = t[6] * this.min.y,
          u = t[4] * this.max.y,
          d = t[5] * this.max.y,
          p = t[6] * this.max.y,
          f = t[8] * this.min.z,
          m = t[9] * this.min.z,
          v = t[10] * this.min.z,
          g = t[8] * this.max.z,
          y = t[9] * this.max.z,
          x = t[10] * this.max.z;
        return this.min.x = Math.min(n, a) + Math.min(c, u) + Math.min(f, g) + t[12], this.min.y = Math.min(i, o) + Math.min(h, d) + Math.min(m, y) + t[13], this.min.z = Math.min(r, s) + Math.min(l, p) + Math.min(v, x) + t[14], this.max.x = Math.max(n, a) + Math.max(c, u) + Math.max(f, g) + t[12], this.max.y = Math.max(i, o) + Math.max(h, d) + Math.max(m, y) + t[13], this.max.z = Math.max(r, s) + Math.max(l, p) + Math.max(v, x) + t[14], this
      },
      translate: function (e) {
        return this.min.add(e), this.max.add(e), this
      },
      equals: function (e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
      }
    }), Object.assign(Ut.prototype, {
      set: function (e, t) {
        return this.center.copy(e), this.radius = t, this
      },
      setFromPoints: function () {
        var e = new Nt;
        return function (t, n) {
          var i = this.center;
          void 0 !== n ? i.copy(n) : e.setFromPoints(t).getCenter(i);
          for (var r = 0, a = 0, o = t.length; a < o; a++) r = Math.max(r, i.distanceToSquared(t[a]));
          return this.radius = Math.sqrt(r), this
        }
      }(),
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        return this.center.copy(e.center), this.radius = e.radius, this
      },
      empty: function () {
        return this.radius <= 0
      },
      containsPoint: function (e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
      },
      distanceToPoint: function (e) {
        return e.distanceTo(this.center) - this.radius
      },
      intersectsSphere: function (e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
      },
      intersectsBox: function (e) {
        return e.intersectsSphere(this)
      },
      intersectsPlane: function (e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
      },
      clampPoint: function (e, t) {
        var n = this.center.distanceToSquared(e);
        return void 0 === t && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new St), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
      },
      getBoundingBox: function (e) {
        return void 0 === e && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new Nt), e.set(this.center, this.center), e.expandByScalar(this.radius), e
      },
      applyMatrix4: function (e) {
        return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
      },
      translate: function (e) {
        return this.center.add(e), this
      },
      equals: function (e) {
        return e.center.equals(this.center) && e.radius === this.radius
      }
    }), Object.assign(Bt.prototype, {
      set: function (e, t) {
        return this.normal.copy(e), this.constant = t, this
      },
      setComponents: function (e, t, n, i) {
        return this.normal.set(e, t, n), this.constant = i, this
      },
      setFromNormalAndCoplanarPoint: function (e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this
      },
      setFromCoplanarPoints: function () {
        var e = new St,
          t = new St;
        return function (n, i, r) {
          var a = e.subVectors(r, i).cross(t.subVectors(n, i)).normalize();
          return this.setFromNormalAndCoplanarPoint(a, n), this
        }
      }(),
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this
      },
      normalize: function () {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this
      },
      negate: function () {
        return this.constant *= -1, this.normal.negate(), this
      },
      distanceToPoint: function (e) {
        return this.normal.dot(e) + this.constant
      },
      distanceToSphere: function (e) {
        return this.distanceToPoint(e.center) - e.radius
      },
      projectPoint: function (e, t) {
        return void 0 === t && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new St), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
      },
      intersectLine: function () {
        var e = new St;
        return function (t, n) {
          void 0 === n && (console.warn("THREE.Plane: .intersectLine() target is now required"), n = new St);
          var i = t.delta(e),
            r = this.normal.dot(i);
          if (0 === r) return 0 === this.distanceToPoint(t.start) ? n.copy(t.start) : void 0;
          var a = -(t.start.dot(this.normal) + this.constant) / r;
          return a < 0 || a > 1 ? void 0 : n.copy(i).multiplyScalar(a).add(t.start)
        }
      }(),
      intersectsLine: function (e) {
        var t = this.distanceToPoint(e.start),
          n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
      },
      intersectsBox: function (e) {
        return e.intersectsPlane(this)
      },
      intersectsSphere: function (e) {
        return e.intersectsPlane(this)
      },
      coplanarPoint: function (e) {
        return void 0 === e && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new St), e.copy(this.normal).multiplyScalar(-this.constant)
      },
      applyMatrix4: function () {
        var e = new St,
          t = new At;
        return function (n, i) {
          var r = i || t.getNormalMatrix(n),
            a = this.coplanarPoint(e).applyMatrix4(n),
            o = this.normal.applyMatrix3(r).normalize();
          return this.constant = -a.dot(o), this
        }
      }(),
      translate: function (e) {
        return this.constant -= e.dot(this.normal), this
      },
      equals: function (e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
      }
    }), Object.assign(Ft.prototype, {
      set: function (e, t, n, i, r, a) {
        var o = this.planes;
        return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        for (var t = this.planes, n = 0; n < 6; n++) t[n].copy(e.planes[n]);
        return this
      },
      setFromMatrix: function (e) {
        var t = this.planes,
          n = e.elements,
          i = n[0],
          r = n[1],
          a = n[2],
          o = n[3],
          s = n[4],
          c = n[5],
          h = n[6],
          l = n[7],
          u = n[8],
          d = n[9],
          p = n[10],
          f = n[11],
          m = n[12],
          v = n[13],
          g = n[14],
          y = n[15];
        return t[0].setComponents(o - i, l - s, f - u, y - m).normalize(), t[1].setComponents(o + i, l + s, f + u, y + m).normalize(), t[2].setComponents(o + r, l + c, f + d, y + v).normalize(), t[3].setComponents(o - r, l - c, f - d, y - v).normalize(), t[4].setComponents(o - a, l - h, f - p, y - g).normalize(), t[5].setComponents(o + a, l + h, f + p, y + g).normalize(), this
      },
      intersectsObject: function () {
        var e = new Ut;
        return function (t) {
          var n = t.geometry;
          return null === n.boundingSphere && n.computeBoundingSphere(), e.copy(n.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
        }
      }(),
      intersectsSprite: function () {
        var e = new Ut;
        return function (t) {
          return e.center.set(0, 0, 0), e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
        }
      }(),
      intersectsSphere: function (e) {
        for (var t = this.planes, n = e.center, i = -e.radius, r = 0; r < 6; r++) {
          if (t[r].distanceToPoint(n) < i) return !1
        }
        return !0
      },
      intersectsBox: function () {
        var e = new St;
        return function (t) {
          for (var n = this.planes, i = 0; i < 6; i++) {
            var r = n[i];
            if (e.x = r.normal.x > 0 ? t.max.x : t.min.x, e.y = r.normal.y > 0 ? t.max.y : t.min.y, e.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(e) < 0) return !1
          }
          return !0
        }
      }(),
      containsPoint: function (e) {
        for (var t = this.planes, n = 0; n < 6; n++)
          if (t[n].distanceToPoint(e) < 0) return !1;
        return !0
      }
    });
    var Ht = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "\nvec3 transformed = vec3( position );\n",
        beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
        bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
        defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
        encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
        envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
        fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
        gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
        lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
        map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
        map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
        normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
        project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
        dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
        dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
        tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
        uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
        uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
        cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
        equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
        meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tvec4 mvPosition;\n\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
      },
      zt = {
        merge: function (e) {
          for (var t = {}, n = 0; n < e.length; n++) {
            var i = this.clone(e[n]);
            for (var r in i) t[r] = i[r]
          }
          return t
        },
        clone: function (e) {
          var t = {};
          for (var n in e)
            for (var i in t[n] = {}, e[n]) {
              var r = e[n][i];
              r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
            }
          return t
        }
      },
      Gt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };

    function kt(e, t, n) {
      return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
    }
    Object.assign(kt.prototype, {
      isColor: !0,
      r: 1,
      g: 1,
      b: 1,
      set: function (e) {
        return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
      },
      setScalar: function (e) {
        return this.r = e, this.g = e, this.b = e, this
      },
      setHex: function (e) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
      },
      setRGB: function (e, t, n) {
        return this.r = e, this.g = t, this.b = n, this
      },
      setHSL: function () {
        function e(e, t, n) {
          return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
        }
        return function (t, n, i) {
          if (t = _t.euclideanModulo(t, 1), n = _t.clamp(n, 0, 1), i = _t.clamp(i, 0, 1), 0 === n) this.r = this.g = this.b = i;
          else {
            var r = i <= .5 ? i * (1 + n) : i + n - i * n,
              a = 2 * i - r;
            this.r = e(a, r, t + 1 / 3), this.g = e(a, r, t), this.b = e(a, r, t - 1 / 3)
          }
          return this
        }
      }(),
      setStyle: function (e) {
        function t(t) {
          void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        var n;
        if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
          var i, r = n[1],
            a = n[2];
          switch (r) {
            case "rgb":
            case "rgba":
              if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[5]), this;
              if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[5]), this;
              break;
            case "hsl":
            case "hsla":
              if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                var o = parseFloat(i[1]) / 360,
                  s = parseInt(i[2], 10) / 100,
                  c = parseInt(i[3], 10) / 100;
                return t(i[5]), this.setHSL(o, s, c)
              }
          }
        } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
          var h, l = (h = n[1]).length;
          if (3 === l) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
          if (6 === l) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
        }
        e && e.length > 0 && (void 0 !== (h = Gt[e]) ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + e));
        return this
      },
      clone: function () {
        return new this.constructor(this.r, this.g, this.b)
      },
      copy: function (e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this
      },
      copyGammaToLinear: function (e, t) {
        return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
      },
      copyLinearToGamma: function (e, t) {
        void 0 === t && (t = 2);
        var n = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this
      },
      convertGammaToLinear: function (e) {
        return this.copyGammaToLinear(this, e), this
      },
      convertLinearToGamma: function (e) {
        return this.copyLinearToGamma(this, e), this
      },
      copySRGBToLinear: function () {
        function e(e) {
          return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
        }
        return function (t) {
          return this.r = e(t.r), this.g = e(t.g), this.b = e(t.b), this
        }
      }(),
      copyLinearToSRGB: function () {
        function e(e) {
          return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
        }
        return function (t) {
          return this.r = e(t.r), this.g = e(t.g), this.b = e(t.b), this
        }
      }(),
      convertSRGBToLinear: function () {
        return this.copySRGBToLinear(this), this
      },
      convertLinearToSRGB: function () {
        return this.copyLinearToSRGB(this), this
      },
      getHex: function () {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
      },
      getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6)
      },
      getHSL: function (e) {
        void 0 === e && (console.warn("THREE.Color: .getHSL() target is now required"), e = {
          h: 0,
          s: 0,
          l: 0
        });
        var t, n, i = this.r,
          r = this.g,
          a = this.b,
          o = Math.max(i, r, a),
          s = Math.min(i, r, a),
          c = (s + o) / 2;
        if (s === o) t = 0, n = 0;
        else {
          var h = o - s;
          switch (n = c <= .5 ? h / (o + s) : h / (2 - o - s), o) {
            case i:
              t = (r - a) / h + (r < a ? 6 : 0);
              break;
            case r:
              t = (a - i) / h + 2;
              break;
            case a:
              t = (i - r) / h + 4
          }
          t /= 6
        }
        return e.h = t, e.s = n, e.l = c, e
      },
      getStyle: function () {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
      },
      offsetHSL: function () {
        var e = {};
        return function (t, n, i) {
          return this.getHSL(e), e.h += t, e.s += n, e.l += i, this.setHSL(e.h, e.s, e.l), this
        }
      }(),
      add: function (e) {
        return this.r += e.r, this.g += e.g, this.b += e.b, this
      },
      addColors: function (e, t) {
        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
      },
      addScalar: function (e) {
        return this.r += e, this.g += e, this.b += e, this
      },
      sub: function (e) {
        return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
      },
      multiply: function (e) {
        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
      },
      multiplyScalar: function (e) {
        return this.r *= e, this.g *= e, this.b *= e, this
      },
      lerp: function (e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
      },
      equals: function (e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
      },
      fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
      },
      toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
      },
      toJSON: function () {
        return this.getHex()
      }
    });
    var jt = {
        common: {
          diffuse: {
            value: new kt(15658734)
          },
          opacity: {
            value: 1
          },
          map: {
            value: null
          },
          uvTransform: {
            value: new At
          },
          alphaMap: {
            value: null
          }
        },
        specularmap: {
          specularMap: {
            value: null
          }
        },
        envmap: {
          envMap: {
            value: null
          },
          flipEnvMap: {
            value: -1
          },
          reflectivity: {
            value: 1
          },
          refractionRatio: {
            value: .98
          },
          maxMipLevel: {
            value: 0
          }
        },
        aomap: {
          aoMap: {
            value: null
          },
          aoMapIntensity: {
            value: 1
          }
        },
        lightmap: {
          lightMap: {
            value: null
          },
          lightMapIntensity: {
            value: 1
          }
        },
        emissivemap: {
          emissiveMap: {
            value: null
          }
        },
        bumpmap: {
          bumpMap: {
            value: null
          },
          bumpScale: {
            value: 1
          }
        },
        normalmap: {
          normalMap: {
            value: null
          },
          normalScale: {
            value: new Et(1, 1)
          }
        },
        displacementmap: {
          displacementMap: {
            value: null
          },
          displacementScale: {
            value: 1
          },
          displacementBias: {
            value: 0
          }
        },
        roughnessmap: {
          roughnessMap: {
            value: null
          }
        },
        metalnessmap: {
          metalnessMap: {
            value: null
          }
        },
        gradientmap: {
          gradientMap: {
            value: null
          }
        },
        fog: {
          fogDensity: {
            value: 25e-5
          },
          fogNear: {
            value: 1
          },
          fogFar: {
            value: 2e3
          },
          fogColor: {
            value: new kt(16777215)
          }
        },
        lights: {
          ambientLightColor: {
            value: []
          },
          directionalLights: {
            value: [],
            properties: {
              direction: {},
              color: {},
              shadow: {},
              shadowBias: {},
              shadowRadius: {},
              shadowMapSize: {}
            }
          },
          directionalShadowMap: {
            value: []
          },
          directionalShadowMatrix: {
            value: []
          },
          spotLights: {
            value: [],
            properties: {
              color: {},
              position: {},
              direction: {},
              distance: {},
              coneCos: {},
              penumbraCos: {},
              decay: {},
              shadow: {},
              shadowBias: {},
              shadowRadius: {},
              shadowMapSize: {}
            }
          },
          spotShadowMap: {
            value: []
          },
          spotShadowMatrix: {
            value: []
          },
          pointLights: {
            value: [],
            properties: {
              color: {},
              position: {},
              decay: {},
              distance: {},
              shadow: {},
              shadowBias: {},
              shadowRadius: {},
              shadowMapSize: {},
              shadowCameraNear: {},
              shadowCameraFar: {}
            }
          },
          pointShadowMap: {
            value: []
          },
          pointShadowMatrix: {
            value: []
          },
          hemisphereLights: {
            value: [],
            properties: {
              direction: {},
              skyColor: {},
              groundColor: {}
            }
          },
          rectAreaLights: {
            value: [],
            properties: {
              color: {},
              position: {},
              width: {},
              height: {}
            }
          }
        },
        points: {
          diffuse: {
            value: new kt(15658734)
          },
          opacity: {
            value: 1
          },
          size: {
            value: 1
          },
          scale: {
            value: 1
          },
          map: {
            value: null
          },
          uvTransform: {
            value: new At
          }
        },
        sprite: {
          diffuse: {
            value: new kt(15658734)
          },
          opacity: {
            value: 1
          },
          center: {
            value: new Et(.5, .5)
          },
          rotation: {
            value: 0
          },
          map: {
            value: null
          },
          uvTransform: {
            value: new At
          }
        }
      },
      Vt = {
        basic: {
          uniforms: zt.merge([jt.common, jt.specularmap, jt.envmap, jt.aomap, jt.lightmap, jt.fog]),
          vertexShader: Ht.meshbasic_vert,
          fragmentShader: Ht.meshbasic_frag
        },
        lambert: {
          uniforms: zt.merge([jt.common, jt.specularmap, jt.envmap, jt.aomap, jt.lightmap, jt.emissivemap, jt.fog, jt.lights, {
            emissive: {
              value: new kt(0)
            }
          }]),
          vertexShader: Ht.meshlambert_vert,
          fragmentShader: Ht.meshlambert_frag
        },
        phong: {
          uniforms: zt.merge([jt.common, jt.specularmap, jt.envmap, jt.aomap, jt.lightmap, jt.emissivemap, jt.bumpmap, jt.normalmap, jt.displacementmap, jt.gradientmap, jt.fog, jt.lights, {
            emissive: {
              value: new kt(0)
            },
            specular: {
              value: new kt(1118481)
            },
            shininess: {
              value: 30
            }
          }]),
          vertexShader: Ht.meshphong_vert,
          fragmentShader: Ht.meshphong_frag
        },
        standard: {
          uniforms: zt.merge([jt.common, jt.envmap, jt.aomap, jt.lightmap, jt.emissivemap, jt.bumpmap, jt.normalmap, jt.displacementmap, jt.roughnessmap, jt.metalnessmap, jt.fog, jt.lights, {
            emissive: {
              value: new kt(0)
            },
            roughness: {
              value: .5
            },
            metalness: {
              value: .5
            },
            envMapIntensity: {
              value: 1
            }
          }]),
          vertexShader: Ht.meshphysical_vert,
          fragmentShader: Ht.meshphysical_frag
        },
        points: {
          uniforms: zt.merge([jt.points, jt.fog]),
          vertexShader: Ht.points_vert,
          fragmentShader: Ht.points_frag
        },
        dashed: {
          uniforms: zt.merge([jt.common, jt.fog, {
            scale: {
              value: 1
            },
            dashSize: {
              value: 1
            },
            totalSize: {
              value: 2
            }
          }]),
          vertexShader: Ht.linedashed_vert,
          fragmentShader: Ht.linedashed_frag
        },
        depth: {
          uniforms: zt.merge([jt.common, jt.displacementmap]),
          vertexShader: Ht.depth_vert,
          fragmentShader: Ht.depth_frag
        },
        normal: {
          uniforms: zt.merge([jt.common, jt.bumpmap, jt.normalmap, jt.displacementmap, {
            opacity: {
              value: 1
            }
          }]),
          vertexShader: Ht.normal_vert,
          fragmentShader: Ht.normal_frag
        },
        sprite: {
          uniforms: zt.merge([jt.sprite, jt.fog]),
          vertexShader: Ht.sprite_vert,
          fragmentShader: Ht.sprite_frag
        },
        cube: {
          uniforms: {
            tCube: {
              value: null
            },
            tFlip: {
              value: -1
            },
            opacity: {
              value: 1
            }
          },
          vertexShader: Ht.cube_vert,
          fragmentShader: Ht.cube_frag
        },
        equirect: {
          uniforms: {
            tEquirect: {
              value: null
            }
          },
          vertexShader: Ht.equirect_vert,
          fragmentShader: Ht.equirect_frag
        },
        distanceRGBA: {
          uniforms: zt.merge([jt.common, jt.displacementmap, {
            referencePosition: {
              value: new St
            },
            nearDistance: {
              value: 1
            },
            farDistance: {
              value: 1e3
            }
          }]),
          vertexShader: Ht.distanceRGBA_vert,
          fragmentShader: Ht.distanceRGBA_frag
        },
        shadow: {
          uniforms: zt.merge([jt.lights, jt.fog, {
            color: {
              value: new kt(0)
            },
            opacity: {
              value: 1
            }
          }]),
          vertexShader: Ht.shadow_vert,
          fragmentShader: Ht.shadow_frag
        }
      };

    function Wt() {
      var e = null,
        t = !1,
        n = null;

      function i(r, a) {
        !1 !== t && (n(r, a), e.requestAnimationFrame(i))
      }
      return {
        start: function () {
          !0 !== t && null !== n && (e.requestAnimationFrame(i), t = !0)
        },
        stop: function () {
          t = !1
        },
        setAnimationLoop: function (e) {
          n = e
        },
        setContext: function (t) {
          e = t
        }
      }
    }

    function Xt(e) {
      var t = new WeakMap;
      return {
        get: function (e) {
          return e.isInterleavedBufferAttribute && (e = e.data), t.get(e)
        },
        remove: function (n) {
          n.isInterleavedBufferAttribute && (n = n.data);
          var i = t.get(n);
          i && (e.deleteBuffer(i.buffer), t.delete(n))
        },
        update: function (n, i) {
          n.isInterleavedBufferAttribute && (n = n.data);
          var r = t.get(n);
          void 0 === r ? t.set(n, function (t, n) {
            var i = t.array,
              r = t.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW,
              a = e.createBuffer();
            e.bindBuffer(n, a), e.bufferData(n, i, r), t.onUploadCallback();
            var o = e.FLOAT;
            return i instanceof Float32Array ? o = e.FLOAT : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? o = e.UNSIGNED_SHORT : i instanceof Int16Array ? o = e.SHORT : i instanceof Uint32Array ? o = e.UNSIGNED_INT : i instanceof Int32Array ? o = e.INT : i instanceof Int8Array ? o = e.BYTE : i instanceof Uint8Array && (o = e.UNSIGNED_BYTE), {
              buffer: a,
              type: o,
              bytesPerElement: i.BYTES_PER_ELEMENT,
              version: t.version
            }
          }(n, i)) : r.version < n.version && (function (t, n, i) {
            var r = n.array,
              a = n.updateRange;
            e.bindBuffer(i, t), !1 === n.dynamic ? e.bufferData(i, r, e.STATIC_DRAW) : -1 === a.count ? e.bufferSubData(i, 0, r) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(i, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = -1)
          }(r.buffer, n, i), r.version = n.version)
        }
      }
    }

    function Yt(e, t, n, i) {
      this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = i || Yt.DefaultOrder
    }

    function qt() {
      this.mask = 1
    }
    Vt.physical = {
      uniforms: zt.merge([Vt.standard.uniforms, {
        clearCoat: {
          value: 0
        },
        clearCoatRoughness: {
          value: 0
        }
      }]),
      vertexShader: Ht.meshphysical_vert,
      fragmentShader: Ht.meshphysical_frag
    }, Yt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], Yt.DefaultOrder = "XYZ", Object.defineProperties(Yt.prototype, {
      x: {
        get: function () {
          return this._x
        },
        set: function (e) {
          this._x = e, this.onChangeCallback()
        }
      },
      y: {
        get: function () {
          return this._y
        },
        set: function (e) {
          this._y = e, this.onChangeCallback()
        }
      },
      z: {
        get: function () {
          return this._z
        },
        set: function (e) {
          this._z = e, this.onChangeCallback()
        }
      },
      order: {
        get: function () {
          return this._order
        },
        set: function (e) {
          this._order = e, this.onChangeCallback()
        }
      }
    }), Object.assign(Yt.prototype, {
      isEuler: !0,
      set: function (e, t, n, i) {
        return this._x = e, this._y = t, this._z = n, this._order = i || this._order, this.onChangeCallback(), this
      },
      clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._order)
      },
      copy: function (e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
      },
      setFromRotationMatrix: function (e, t, n) {
        var i = _t.clamp,
          r = e.elements,
          a = r[0],
          o = r[4],
          s = r[8],
          c = r[1],
          h = r[5],
          l = r[9],
          u = r[2],
          d = r[6],
          p = r[10];
        return "XYZ" === (t = t || this._order) ? (this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, p), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(d, h), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-i(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, p), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === t ? (this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, p))) : "XZY" === t ? (this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(d, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, p), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, !1 !== n && this.onChangeCallback(), this
      },
      setFromQuaternion: function () {
        var e = new Mt;
        return function (t, n, i) {
          return e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, n, i)
        }
      }(),
      setFromVector3: function (e, t) {
        return this.set(e.x, e.y, e.z, t || this._order)
      },
      reorder: function () {
        var e = new Tt;
        return function (t) {
          return e.setFromEuler(this), this.setFromQuaternion(e, t)
        }
      }(),
      equals: function (e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
      },
      fromArray: function (e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
      },
      toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
      },
      toVector3: function (e) {
        return e ? e.set(this._x, this._y, this._z) : new St(this._x, this._y, this._z)
      },
      onChange: function (e) {
        return this.onChangeCallback = e, this
      },
      onChangeCallback: function () {}
    }), Object.assign(qt.prototype, {
      set: function (e) {
        this.mask = 1 << e | 0
      },
      enable: function (e) {
        this.mask |= 1 << e | 0
      },
      toggle: function (e) {
        this.mask ^= 1 << e | 0
      },
      disable: function (e) {
        this.mask &= ~(1 << e | 0)
      },
      test: function (e) {
        return 0 != (this.mask & e.mask)
      }
    });
    var Zt = 0;

    function Jt() {
      Object.defineProperty(this, "id", {
        value: Zt++
      }), this.uuid = _t.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Jt.DefaultUp.clone();
      var e = new St,
        t = new Yt,
        n = new Tt,
        i = new St(1, 1, 1);
      t.onChange(function () {
        n.setFromEuler(t, !1)
      }), n.onChange(function () {
        t.setFromQuaternion(n, void 0, !1)
      }), Object.defineProperties(this, {
        position: {
          enumerable: !0,
          value: e
        },
        rotation: {
          enumerable: !0,
          value: t
        },
        quaternion: {
          enumerable: !0,
          value: n
        },
        scale: {
          enumerable: !0,
          value: i
        },
        modelViewMatrix: {
          value: new Mt
        },
        normalMatrix: {
          value: new At
        }
      }), this.matrix = new Mt, this.matrixWorld = new Mt, this.matrixAutoUpdate = Jt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new qt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }

    function Qt() {
      Jt.call(this), this.type = "Camera", this.matrixWorldInverse = new Mt, this.projectionMatrix = new Mt
    }

    function Kt(e, t, n, i, r, a) {
      Qt.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    }

    function $t(e, t, n, i, r, a) {
      this.a = e, this.b = t, this.c = n, this.normal = i && i.isVector3 ? i : new St, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new kt, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
    }
    Jt.DefaultUp = new St(0, 1, 0), Jt.DefaultMatrixAutoUpdate = !0, Jt.prototype = Object.assign(Object.create(r.prototype), {
      constructor: Jt,
      isObject3D: !0,
      onBeforeRender: function () {},
      onAfterRender: function () {},
      applyMatrix: function (e) {
        this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
      },
      applyQuaternion: function (e) {
        return this.quaternion.premultiply(e), this
      },
      setRotationFromAxisAngle: function (e, t) {
        this.quaternion.setFromAxisAngle(e, t)
      },
      setRotationFromEuler: function (e) {
        this.quaternion.setFromEuler(e, !0)
      },
      setRotationFromMatrix: function (e) {
        this.quaternion.setFromRotationMatrix(e)
      },
      setRotationFromQuaternion: function (e) {
        this.quaternion.copy(e)
      },
      rotateOnAxis: function () {
        var e = new Tt;
        return function (t, n) {
          return e.setFromAxisAngle(t, n), this.quaternion.multiply(e), this
        }
      }(),
      rotateOnWorldAxis: function () {
        var e = new Tt;
        return function (t, n) {
          return e.setFromAxisAngle(t, n), this.quaternion.premultiply(e), this
        }
      }(),
      rotateX: function () {
        var e = new St(1, 0, 0);
        return function (t) {
          return this.rotateOnAxis(e, t)
        }
      }(),
      rotateY: function () {
        var e = new St(0, 1, 0);
        return function (t) {
          return this.rotateOnAxis(e, t)
        }
      }(),
      rotateZ: function () {
        var e = new St(0, 0, 1);
        return function (t) {
          return this.rotateOnAxis(e, t)
        }
      }(),
      translateOnAxis: function () {
        var e = new St;
        return function (t, n) {
          return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(n)), this
        }
      }(),
      translateX: function () {
        var e = new St(1, 0, 0);
        return function (t) {
          return this.translateOnAxis(e, t)
        }
      }(),
      translateY: function () {
        var e = new St(0, 1, 0);
        return function (t) {
          return this.translateOnAxis(e, t)
        }
      }(),
      translateZ: function () {
        var e = new St(0, 0, 1);
        return function (t) {
          return this.translateOnAxis(e, t)
        }
      }(),
      localToWorld: function (e) {
        return e.applyMatrix4(this.matrixWorld)
      },
      worldToLocal: function () {
        var e = new Mt;
        return function (t) {
          return t.applyMatrix4(e.getInverse(this.matrixWorld))
        }
      }(),
      lookAt: function () {
        var e = new Mt,
          t = new St;
        return function (n, i, r) {
          n.isVector3 ? t.copy(n) : t.set(n, i, r), this.isCamera ? e.lookAt(this.position, t, this.up) : e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
        }
      }(),
      add: function (e) {
        if (arguments.length > 1) {
          for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
          return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
          type: "added"
        }), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
      },
      remove: function (e) {
        if (arguments.length > 1) {
          for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
          return this
        }
        var n = this.children.indexOf(e);
        return -1 !== n && (e.parent = null, e.dispatchEvent({
          type: "removed"
        }), this.children.splice(n, 1)), this
      },
      getObjectById: function (e) {
        return this.getObjectByProperty("id", e)
      },
      getObjectByName: function (e) {
        return this.getObjectByProperty("name", e)
      },
      getObjectByProperty: function (e, t) {
        if (this[e] === t) return this;
        for (var n = 0, i = this.children.length; n < i; n++) {
          var r = this.children[n].getObjectByProperty(e, t);
          if (void 0 !== r) return r
        }
      },
      getWorldPosition: function (e) {
        return void 0 === e && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new St), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
      },
      getWorldQuaternion: function () {
        var e = new St,
          t = new St;
        return function (n) {
          return void 0 === n && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), n = new Tt), this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, n, t), n
        }
      }(),
      getWorldScale: function () {
        var e = new St,
          t = new Tt;
        return function (n) {
          return void 0 === n && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), n = new St), this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, n), n
        }
      }(),
      getWorldDirection: function () {
        var e = new Tt;
        return function (t) {
          return void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new St), this.getWorldQuaternion(e), t.set(0, 0, 1).applyQuaternion(e)
        }
      }(),
      raycast: function () {},
      traverse: function (e) {
        e(this);
        for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].traverse(e)
      },
      traverseVisible: function (e) {
        if (!1 !== this.visible) {
          e(this);
          for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
        }
      },
      traverseAncestors: function (e) {
        var t = this.parent;
        null !== t && (e(t), t.traverseAncestors(e))
      },
      updateMatrix: function () {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
      },
      updateMatrixWorld: function (e) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        for (var t = this.children, n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e)
      },
      toJSON: function (e) {
        var t = void 0 === e || "string" == typeof e,
          n = {};
        t && (e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {}
        }, n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON"
        });
        var i = {};

        function r(t, n) {
          return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid
        }
        if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) {
          i.geometry = r(e.geometries, this.geometry);
          var a = this.geometry.parameters;
          if (void 0 !== a && void 0 !== a.shapes) {
            var o = a.shapes;
            if (Array.isArray(o))
              for (var s = 0, c = o.length; s < c; s++) {
                var h = o[s];
                r(e.shapes, h)
              } else r(e.shapes, o)
          }
        }
        if (void 0 !== this.material)
          if (Array.isArray(this.material)) {
            var l = [];
            for (s = 0, c = this.material.length; s < c; s++) l.push(r(e.materials, this.material[s]));
            i.material = l
          } else i.material = r(e.materials, this.material);
        if (this.children.length > 0) {
          i.children = [];
          for (s = 0; s < this.children.length; s++) i.children.push(this.children[s].toJSON(e).object)
        }
        if (t) {
          var u = m(e.geometries),
            d = m(e.materials),
            p = m(e.textures),
            f = m(e.images);
          o = m(e.shapes);
          u.length > 0 && (n.geometries = u), d.length > 0 && (n.materials = d), p.length > 0 && (n.textures = p), f.length > 0 && (n.images = f), o.length > 0 && (n.shapes = o)
        }
        return n.object = i, n;

        function m(e) {
          var t = [];
          for (var n in e) {
            var i = e[n];
            delete i.metadata, t.push(i)
          }
          return t
        }
      },
      clone: function (e) {
        return (new this.constructor).copy(this, e)
      },
      copy: function (e, t) {
        if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
          for (var n = 0; n < e.children.length; n++) {
            var i = e.children[n];
            this.add(i.clone())
          }
        return this
      }
    }), Qt.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: Qt,
      isCamera: !0,
      copy: function (e, t) {
        return Jt.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
      },
      getWorldDirection: function () {
        var e = new Tt;
        return function (t) {
          return void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new St), this.getWorldQuaternion(e), t.set(0, 0, -1).applyQuaternion(e)
        }
      }(),
      updateMatrixWorld: function (e) {
        Jt.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld)
      },
      clone: function () {
        return (new this.constructor).copy(this)
      }
    }), Kt.prototype = Object.assign(Object.create(Qt.prototype), {
      constructor: Kt,
      isOrthographicCamera: !0,
      copy: function (e, t) {
        return Qt.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
      },
      setViewOffset: function (e, t, n, i, r, a) {
        null === this.view && (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
      },
      clearViewOffset: function () {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
      },
      updateProjectionMatrix: function () {
        var e = (this.right - this.left) / (2 * this.zoom),
          t = (this.top - this.bottom) / (2 * this.zoom),
          n = (this.right + this.left) / 2,
          i = (this.top + this.bottom) / 2,
          r = n - e,
          a = n + e,
          o = i + t,
          s = i - t;
        if (null !== this.view && this.view.enabled) {
          var c = this.zoom / (this.view.width / this.view.fullWidth),
            h = this.zoom / (this.view.height / this.view.fullHeight),
            l = (this.right - this.left) / this.view.width,
            u = (this.top - this.bottom) / this.view.height;
          a = (r += l * (this.view.offsetX / c)) + l * (this.view.width / c), s = (o -= u * (this.view.offsetY / h)) - u * (this.view.height / h)
        }
        this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far)
      },
      toJSON: function (e) {
        var t = Jt.prototype.toJSON.call(this, e);
        return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
      }
    }), Object.assign($t.prototype, {
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
        for (var t = 0, n = e.vertexNormals.length; t < n; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
        for (t = 0, n = e.vertexColors.length; t < n; t++) this.vertexColors[t] = e.vertexColors[t].clone();
        return this
      }
    });
    var en = 0;

    function tn() {
      Object.defineProperty(this, "id", {
        value: en += 2
      }), this.uuid = _t.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
        []
      ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function nn(e, t, n) {
      if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = !0 === n, this.dynamic = !1, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0
    }

    function rn(e, t, n) {
      nn.call(this, new Int8Array(e), t, n)
    }

    function an(e, t, n) {
      nn.call(this, new Uint8Array(e), t, n)
    }

    function on(e, t, n) {
      nn.call(this, new Uint8ClampedArray(e), t, n)
    }

    function sn(e, t, n) {
      nn.call(this, new Int16Array(e), t, n)
    }

    function cn(e, t, n) {
      nn.call(this, new Uint16Array(e), t, n)
    }

    function hn(e, t, n) {
      nn.call(this, new Int32Array(e), t, n)
    }

    function ln(e, t, n) {
      nn.call(this, new Uint32Array(e), t, n)
    }

    function un(e, t, n) {
      nn.call(this, new Float32Array(e), t, n)
    }

    function dn(e, t, n) {
      nn.call(this, new Float64Array(e), t, n)
    }

    function pn() {
      this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function fn(e) {
      if (0 === e.length) return -1 / 0;
      for (var t = e[0], n = 1, i = e.length; n < i; ++n) e[n] > t && (t = e[n]);
      return t
    }
    tn.prototype = Object.assign(Object.create(r.prototype), {
      constructor: tn,
      isGeometry: !0,
      applyMatrix: function (e) {
        for (var t = (new At).getNormalMatrix(e), n = 0, i = this.vertices.length; n < i; n++) {
          this.vertices[n].applyMatrix4(e)
        }
        for (n = 0, i = this.faces.length; n < i; n++) {
          var r = this.faces[n];
          r.normal.applyMatrix3(t).normalize();
          for (var a = 0, o = r.vertexNormals.length; a < o; a++) r.vertexNormals[a].applyMatrix3(t).normalize()
        }
        return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
      },
      rotateX: function () {
        var e = new Mt;
        return function (t) {
          return e.makeRotationX(t), this.applyMatrix(e), this
        }
      }(),
      rotateY: function () {
        var e = new Mt;
        return function (t) {
          return e.makeRotationY(t), this.applyMatrix(e), this
        }
      }(),
      rotateZ: function () {
        var e = new Mt;
        return function (t) {
          return e.makeRotationZ(t), this.applyMatrix(e), this
        }
      }(),
      translate: function () {
        var e = new Mt;
        return function (t, n, i) {
          return e.makeTranslation(t, n, i), this.applyMatrix(e), this
        }
      }(),
      scale: function () {
        var e = new Mt;
        return function (t, n, i) {
          return e.makeScale(t, n, i), this.applyMatrix(e), this
        }
      }(),
      lookAt: function () {
        var e = new Jt;
        return function (t) {
          e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
        }
      }(),
      fromBufferGeometry: function (e) {
        var t = this,
          n = null !== e.index ? e.index.array : void 0,
          i = e.attributes,
          r = i.position.array,
          a = void 0 !== i.normal ? i.normal.array : void 0,
          o = void 0 !== i.color ? i.color.array : void 0,
          s = void 0 !== i.uv ? i.uv.array : void 0,
          c = void 0 !== i.uv2 ? i.uv2.array : void 0;
        void 0 !== c && (this.faceVertexUvs[1] = []);
        for (var h = [], l = [], u = [], d = 0, p = 0; d < r.length; d += 3, p += 2) t.vertices.push(new St(r[d], r[d + 1], r[d + 2])), void 0 !== a && h.push(new St(a[d], a[d + 1], a[d + 2])), void 0 !== o && t.colors.push(new kt(o[d], o[d + 1], o[d + 2])), void 0 !== s && l.push(new Et(s[p], s[p + 1])), void 0 !== c && u.push(new Et(c[p], c[p + 1]));

        function f(e, n, i, r) {
          var d = new $t(e, n, i, void 0 !== a ? [h[e].clone(), h[n].clone(), h[i].clone()] : [], void 0 !== o ? [t.colors[e].clone(), t.colors[n].clone(), t.colors[i].clone()] : [], r);
          t.faces.push(d), void 0 !== s && t.faceVertexUvs[0].push([l[e].clone(), l[n].clone(), l[i].clone()]), void 0 !== c && t.faceVertexUvs[1].push([u[e].clone(), u[n].clone(), u[i].clone()])
        }
        var m = e.groups;
        if (m.length > 0)
          for (d = 0; d < m.length; d++)
            for (var v = m[d], g = v.start, y = (p = g, g + v.count); p < y; p += 3) void 0 !== n ? f(n[p], n[p + 1], n[p + 2], v.materialIndex) : f(p, p + 1, p + 2, v.materialIndex);
        else if (void 0 !== n)
          for (d = 0; d < n.length; d += 3) f(n[d], n[d + 1], n[d + 2]);
        else
          for (d = 0; d < r.length / 3; d += 3) f(d, d + 1, d + 2);
        return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
      },
      center: function () {
        var e = new St;
        return function () {
          return this.computeBoundingBox(), this.boundingBox.getCenter(e).negate(), this.translate(e.x, e.y, e.z), this
        }
      }(),
      normalize: function () {
        this.computeBoundingSphere();
        var e = this.boundingSphere.center,
          t = this.boundingSphere.radius,
          n = 0 === t ? 1 : 1 / t,
          i = new Mt;
        return i.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1), this.applyMatrix(i), this
      },
      computeFaceNormals: function () {
        for (var e = new St, t = new St, n = 0, i = this.faces.length; n < i; n++) {
          var r = this.faces[n],
            a = this.vertices[r.a],
            o = this.vertices[r.b],
            s = this.vertices[r.c];
          e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), r.normal.copy(e)
        }
      },
      computeVertexNormals: function (e) {
        var t, n, i, r, a, o;
        for (void 0 === e && (e = !0), o = new Array(this.vertices.length), t = 0, n = this.vertices.length; t < n; t++) o[t] = new St;
        if (e) {
          var s, c, h, l = new St,
            u = new St;
          for (i = 0, r = this.faces.length; i < r; i++) a = this.faces[i], s = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], l.subVectors(h, c), u.subVectors(s, c), l.cross(u), o[a.a].add(l), o[a.b].add(l), o[a.c].add(l)
        } else
          for (this.computeFaceNormals(), i = 0, r = this.faces.length; i < r; i++) o[(a = this.faces[i]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
        for (t = 0, n = this.vertices.length; t < n; t++) o[t].normalize();
        for (i = 0, r = this.faces.length; i < r; i++) {
          var d = (a = this.faces[i]).vertexNormals;
          3 === d.length ? (d[0].copy(o[a.a]), d[1].copy(o[a.b]), d[2].copy(o[a.c])) : (d[0] = o[a.a].clone(), d[1] = o[a.b].clone(), d[2] = o[a.c].clone())
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0)
      },
      computeFlatVertexNormals: function () {
        var e, t, n;
        for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
          var i = (n = this.faces[e]).vertexNormals;
          3 === i.length ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal)) : (i[0] = n.normal.clone(), i[1] = n.normal.clone(), i[2] = n.normal.clone())
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0)
      },
      computeMorphNormals: function () {
        var e, t, n, i, r;
        for (n = 0, i = this.faces.length; n < i; n++)
          for ((r = this.faces[n]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), e = 0, t = r.vertexNormals.length; e < t; e++) r.__originalVertexNormals[e] ? r.__originalVertexNormals[e].copy(r.vertexNormals[e]) : r.__originalVertexNormals[e] = r.vertexNormals[e].clone();
        var a = new tn;
        for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
          if (!this.morphNormals[e]) {
            this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
            var o = this.morphNormals[e].faceNormals,
              s = this.morphNormals[e].vertexNormals;
            for (n = 0, i = this.faces.length; n < i; n++) c = new St, h = {
              a: new St,
              b: new St,
              c: new St
            }, o.push(c), s.push(h)
          }
          var c, h, l = this.morphNormals[e];
          for (a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals(), n = 0, i = this.faces.length; n < i; n++) r = this.faces[n], c = l.faceNormals[n], h = l.vertexNormals[n], c.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2])
        }
        for (n = 0, i = this.faces.length; n < i; n++)(r = this.faces[n]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
      },
      computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new Nt), this.boundingBox.setFromPoints(this.vertices)
      },
      computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new Ut), this.boundingSphere.setFromPoints(this.vertices)
      },
      merge: function (e, t, n) {
        if (e && e.isGeometry) {
          var i, r = this.vertices.length,
            a = this.vertices,
            o = e.vertices,
            s = this.faces,
            c = e.faces,
            h = this.faceVertexUvs[0],
            l = e.faceVertexUvs[0],
            u = this.colors,
            d = e.colors;
          void 0 === n && (n = 0), void 0 !== t && (i = (new At).getNormalMatrix(t));
          for (var p = 0, f = o.length; p < f; p++) {
            var m = o[p].clone();
            void 0 !== t && m.applyMatrix4(t), a.push(m)
          }
          for (p = 0, f = d.length; p < f; p++) u.push(d[p].clone());
          for (p = 0, f = c.length; p < f; p++) {
            var v, g, y, x = c[p],
              w = x.vertexNormals,
              b = x.vertexColors;
            (v = new $t(x.a + r, x.b + r, x.c + r)).normal.copy(x.normal), void 0 !== i && v.normal.applyMatrix3(i).normalize();
            for (var _ = 0, E = w.length; _ < E; _++) g = w[_].clone(), void 0 !== i && g.applyMatrix3(i).normalize(), v.vertexNormals.push(g);
            v.color.copy(x.color);
            for (_ = 0, E = b.length; _ < E; _++) y = b[_], v.vertexColors.push(y.clone());
            v.materialIndex = x.materialIndex + n, s.push(v)
          }
          for (p = 0, f = l.length; p < f; p++) {
            var M = l[p],
              T = [];
            if (void 0 !== M) {
              for (_ = 0, E = M.length; _ < E; _++) T.push(M[_].clone());
              h.push(T)
            }
          }
        } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e)
      },
      mergeMesh: function (e) {
        e && e.isMesh ? (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e)
      },
      mergeVertices: function () {
        var e, t, n, i, r, a, o, s, c = {},
          h = [],
          l = [],
          u = Math.pow(10, 4);
        for (n = 0, i = this.vertices.length; n < i; n++) e = this.vertices[n], void 0 === c[t = Math.round(e.x * u) + "_" + Math.round(e.y * u) + "_" + Math.round(e.z * u)] ? (c[t] = n, h.push(this.vertices[n]), l[n] = h.length - 1) : l[n] = l[c[t]];
        var d = [];
        for (n = 0, i = this.faces.length; n < i; n++) {
          (r = this.faces[n]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
          for (var p = 0; p < 3; p++)
            if (a[p] === a[(p + 1) % 3]) {
              d.push(n);
              break
            }
        }
        for (n = d.length - 1; n >= 0; n--) {
          var f = d[n];
          for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
        }
        var m = this.vertices.length - h.length;
        return this.vertices = h, m
      },
      setFromPoints: function (e) {
        this.vertices = [];
        for (var t = 0, n = e.length; t < n; t++) {
          var i = e[t];
          this.vertices.push(new St(i.x, i.y, i.z || 0))
        }
        return this
      },
      sortFacesByMaterialIndex: function () {
        for (var e = this.faces, t = e.length, n = 0; n < t; n++) e[n]._id = n;
        e.sort(function (e, t) {
          return e.materialIndex - t.materialIndex
        });
        var i, r, a = this.faceVertexUvs[0],
          o = this.faceVertexUvs[1];
        a && a.length === t && (i = []), o && o.length === t && (r = []);
        for (n = 0; n < t; n++) {
          var s = e[n]._id;
          i && i.push(a[s]), r && r.push(o[s])
        }
        i && (this.faceVertexUvs[0] = i), r && (this.faceVertexUvs[1] = r)
      },
      toJSON: function () {
        var e = {
          metadata: {
            version: 4.5,
            type: "Geometry",
            generator: "Geometry.toJSON"
          }
        };
        if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
          var t = this.parameters;
          for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
          return e
        }
        for (var i = [], r = 0; r < this.vertices.length; r++) {
          var a = this.vertices[r];
          i.push(a.x, a.y, a.z)
        }
        var o = [],
          s = [],
          c = {},
          h = [],
          l = {},
          u = [],
          d = {};
        for (r = 0; r < this.faces.length; r++) {
          var p = this.faces[r],
            f = void 0 !== this.faceVertexUvs[0][r],
            m = p.normal.length() > 0,
            v = p.vertexNormals.length > 0,
            g = 1 !== p.color.r || 1 !== p.color.g || 1 !== p.color.b,
            y = p.vertexColors.length > 0,
            x = 0;
          if (x = E(x = E(x = E(x = E(x = E(x = E(x = E(x = E(x, 0, 0), 1, !0), 2, !1), 3, f), 4, m), 5, v), 6, g), 7, y), o.push(x), o.push(p.a, p.b, p.c), o.push(p.materialIndex), f) {
            var w = this.faceVertexUvs[0][r];
            o.push(S(w[0]), S(w[1]), S(w[2]))
          }
          if (m && o.push(M(p.normal)), v) {
            var b = p.vertexNormals;
            o.push(M(b[0]), M(b[1]), M(b[2]))
          }
          if (g && o.push(T(p.color)), y) {
            var _ = p.vertexColors;
            o.push(T(_[0]), T(_[1]), T(_[2]))
          }
        }

        function E(e, t, n) {
          return n ? e | 1 << t : e & ~(1 << t)
        }

        function M(e) {
          var t = e.x.toString() + e.y.toString() + e.z.toString();
          return void 0 !== c[t] ? c[t] : (c[t] = s.length / 3, s.push(e.x, e.y, e.z), c[t])
        }

        function T(e) {
          var t = e.r.toString() + e.g.toString() + e.b.toString();
          return void 0 !== l[t] ? l[t] : (l[t] = h.length, h.push(e.getHex()), l[t])
        }

        function S(e) {
          var t = e.x.toString() + e.y.toString();
          return void 0 !== d[t] ? d[t] : (d[t] = u.length / 2, u.push(e.x, e.y), d[t])
        }
        return e.data = {}, e.data.vertices = i, e.data.normals = s, h.length > 0 && (e.data.colors = h), u.length > 0 && (e.data.uvs = [u]), e.data.faces = o, e
      },
      clone: function () {
        return (new tn).copy(this)
      },
      copy: function (e) {
        var t, n, i, r, a, o;
        this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
          []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
        var s = e.vertices;
        for (t = 0, n = s.length; t < n; t++) this.vertices.push(s[t].clone());
        var c = e.colors;
        for (t = 0, n = c.length; t < n; t++) this.colors.push(c[t].clone());
        var h = e.faces;
        for (t = 0, n = h.length; t < n; t++) this.faces.push(h[t].clone());
        for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
          var l = e.faceVertexUvs[t];
          for (void 0 === this.faceVertexUvs[t] && (this.faceVertexUvs[t] = []), i = 0, r = l.length; i < r; i++) {
            var u = l[i],
              d = [];
            for (a = 0, o = u.length; a < o; a++) {
              var p = u[a];
              d.push(p.clone())
            }
            this.faceVertexUvs[t].push(d)
          }
        }
        var f = e.morphTargets;
        for (t = 0, n = f.length; t < n; t++) {
          var m = {};
          if (m.name = f[t].name, void 0 !== f[t].vertices)
            for (m.vertices = [], i = 0, r = f[t].vertices.length; i < r; i++) m.vertices.push(f[t].vertices[i].clone());
          if (void 0 !== f[t].normals)
            for (m.normals = [], i = 0, r = f[t].normals.length; i < r; i++) m.normals.push(f[t].normals[i].clone());
          this.morphTargets.push(m)
        }
        var v = e.morphNormals;
        for (t = 0, n = v.length; t < n; t++) {
          var g = {};
          if (void 0 !== v[t].vertexNormals)
            for (g.vertexNormals = [], i = 0, r = v[t].vertexNormals.length; i < r; i++) {
              var y = v[t].vertexNormals[i],
                x = {};
              x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), g.vertexNormals.push(x)
            }
          if (void 0 !== v[t].faceNormals)
            for (g.faceNormals = [], i = 0, r = v[t].faceNormals.length; i < r; i++) g.faceNormals.push(v[t].faceNormals[i].clone());
          this.morphNormals.push(g)
        }
        var w = e.skinWeights;
        for (t = 0, n = w.length; t < n; t++) this.skinWeights.push(w[t].clone());
        var b = e.skinIndices;
        for (t = 0, n = b.length; t < n; t++) this.skinIndices.push(b[t].clone());
        var _ = e.lineDistances;
        for (t = 0, n = _.length; t < n; t++) this.lineDistances.push(_[t]);
        var E = e.boundingBox;
        null !== E && (this.boundingBox = E.clone());
        var M = e.boundingSphere;
        return null !== M && (this.boundingSphere = M.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
      },
      dispose: function () {
        this.dispatchEvent({
          type: "dispose"
        })
      }
    }), Object.defineProperty(nn.prototype, "needsUpdate", {
      set: function (e) {
        !0 === e && this.version++
      }
    }), Object.assign(nn.prototype, {
      isBufferAttribute: !0,
      onUploadCallback: function () {},
      setArray: function (e) {
        if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        return this.count = void 0 !== e ? e.length / this.itemSize : 0, this.array = e, this
      },
      setDynamic: function (e) {
        return this.dynamic = e, this
      },
      copy: function (e) {
        return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.dynamic = e.dynamic, this
      },
      copyAt: function (e, t, n) {
        e *= this.itemSize, n *= t.itemSize;
        for (var i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
        return this
      },
      copyArray: function (e) {
        return this.array.set(e), this
      },
      copyColorsArray: function (e) {
        for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
          var a = e[i];
          void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new kt), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b
        }
        return this
      },
      copyVector2sArray: function (e) {
        for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
          var a = e[i];
          void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), a = new Et), t[n++] = a.x, t[n++] = a.y
        }
        return this
      },
      copyVector3sArray: function (e) {
        for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
          var a = e[i];
          void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new St), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z
        }
        return this
      },
      copyVector4sArray: function (e) {
        for (var t = this.array, n = 0, i = 0, r = e.length; i < r; i++) {
          var a = e[i];
          void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new Ct), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w
        }
        return this
      },
      set: function (e, t) {
        return void 0 === t && (t = 0), this.array.set(e, t), this
      },
      getX: function (e) {
        return this.array[e * this.itemSize]
      },
      setX: function (e, t) {
        return this.array[e * this.itemSize] = t, this
      },
      getY: function (e) {
        return this.array[e * this.itemSize + 1]
      },
      setY: function (e, t) {
        return this.array[e * this.itemSize + 1] = t, this
      },
      getZ: function (e) {
        return this.array[e * this.itemSize + 2]
      },
      setZ: function (e, t) {
        return this.array[e * this.itemSize + 2] = t, this
      },
      getW: function (e) {
        return this.array[e * this.itemSize + 3]
      },
      setW: function (e, t) {
        return this.array[e * this.itemSize + 3] = t, this
      },
      setXY: function (e, t, n) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
      },
      setXYZ: function (e, t, n, i) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
      },
      setXYZW: function (e, t, n, i, r) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this
      },
      onUpload: function (e) {
        return this.onUploadCallback = e, this
      },
      clone: function () {
        return new this.constructor(this.array, this.itemSize).copy(this)
      }
    }), rn.prototype = Object.create(nn.prototype), rn.prototype.constructor = rn, an.prototype = Object.create(nn.prototype), an.prototype.constructor = an, on.prototype = Object.create(nn.prototype), on.prototype.constructor = on, sn.prototype = Object.create(nn.prototype), sn.prototype.constructor = sn, cn.prototype = Object.create(nn.prototype), cn.prototype.constructor = cn, hn.prototype = Object.create(nn.prototype), hn.prototype.constructor = hn, ln.prototype = Object.create(nn.prototype), ln.prototype.constructor = ln, un.prototype = Object.create(nn.prototype), un.prototype.constructor = un, dn.prototype = Object.create(nn.prototype), dn.prototype.constructor = dn, Object.assign(pn.prototype, {
      computeGroups: function (e) {
        for (var t, n = [], i = void 0, r = e.faces, a = 0; a < r.length; a++) {
          var o = r[a];
          o.materialIndex !== i && (i = o.materialIndex, void 0 !== t && (t.count = 3 * a - t.start, n.push(t)), t = {
            start: 3 * a,
            materialIndex: i
          })
        }
        void 0 !== t && (t.count = 3 * a - t.start, n.push(t)), this.groups = n
      },
      fromGeometry: function (e) {
        var t, n = e.faces,
          i = e.vertices,
          r = e.faceVertexUvs,
          a = r[0] && r[0].length > 0,
          o = r[1] && r[1].length > 0,
          s = e.morphTargets,
          c = s.length;
        if (c > 0) {
          t = [];
          for (var h = 0; h < c; h++) t[h] = [];
          this.morphTargets.position = t
        }
        var l, u = e.morphNormals,
          d = u.length;
        if (d > 0) {
          l = [];
          for (h = 0; h < d; h++) l[h] = [];
          this.morphTargets.normal = l
        }
        var p = e.skinIndices,
          f = e.skinWeights,
          m = p.length === i.length,
          v = f.length === i.length;
        i.length > 0 && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
        for (h = 0; h < n.length; h++) {
          var g = n[h];
          this.vertices.push(i[g.a], i[g.b], i[g.c]);
          var y = g.vertexNormals;
          if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
          else {
            var x = g.normal;
            this.normals.push(x, x, x)
          }
          var w, b = g.vertexColors;
          if (3 === b.length) this.colors.push(b[0], b[1], b[2]);
          else {
            var _ = g.color;
            this.colors.push(_, _, _)
          }
          if (!0 === a) void 0 !== (w = r[0][h]) ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new Et, new Et, new Et));
          if (!0 === o) void 0 !== (w = r[1][h]) ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new Et, new Et, new Et));
          for (var E = 0; E < c; E++) {
            var M = s[E].vertices;
            t[E].push(M[g.a], M[g.b], M[g.c])
          }
          for (E = 0; E < d; E++) {
            var T = u[E].vertexNormals[h];
            l[E].push(T.a, T.b, T.c)
          }
          m && this.skinIndices.push(p[g.a], p[g.b], p[g.c]), v && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
        }
        return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
      }
    });
    var mn = 1;

    function vn() {
      Object.defineProperty(this, "id", {
        value: mn += 2
      }), this.uuid = _t.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
      }, this.userData = {}
    }

    function gn(e, t, n, i, r, a) {
      tn.call(this), this.type = "BoxGeometry", this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a
      }, this.fromBufferGeometry(new yn(e, t, n, i, r, a)), this.mergeVertices()
    }

    function yn(e, t, n, i, r, a) {
      vn.call(this), this.type = "BoxBufferGeometry", this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a
      };
      var o = this;
      e = e || 1, t = t || 1, n = n || 1, i = Math.floor(i) || 1, r = Math.floor(r) || 1;
      var s = [],
        c = [],
        h = [],
        l = [],
        u = 0,
        d = 0;

      function p(e, t, n, i, r, a, p, f, m, v, g) {
        var y, x, w = a / m,
          b = p / v,
          _ = a / 2,
          E = p / 2,
          M = f / 2,
          T = m + 1,
          S = v + 1,
          A = 0,
          L = 0,
          R = new St;
        for (x = 0; x < S; x++) {
          var P = x * b - E;
          for (y = 0; y < T; y++) {
            var C = y * w - _;
            R[e] = C * i, R[t] = P * r, R[n] = M, c.push(R.x, R.y, R.z), R[e] = 0, R[t] = 0, R[n] = f > 0 ? 1 : -1, h.push(R.x, R.y, R.z), l.push(y / m), l.push(1 - x / v), A += 1
          }
        }
        for (x = 0; x < v; x++)
          for (y = 0; y < m; y++) {
            var O = u + y + T * x,
              I = u + y + T * (x + 1),
              D = u + (y + 1) + T * (x + 1),
              N = u + (y + 1) + T * x;
            s.push(O, I, N), s.push(I, D, N), L += 6
          }
        o.addGroup(d, L, g), d += L, u += A
      }
      p("z", "y", "x", -1, -1, n, t, e, a = Math.floor(a) || 1, r, 0), p("z", "y", "x", 1, -1, n, t, -e, a, r, 1), p("x", "z", "y", 1, 1, e, n, t, i, a, 2), p("x", "z", "y", 1, -1, e, n, -t, i, a, 3), p("x", "y", "z", 1, -1, e, t, n, i, r, 4), p("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(s), this.addAttribute("position", new un(c, 3)), this.addAttribute("normal", new un(h, 3)), this.addAttribute("uv", new un(l, 2))
    }

    function xn(e, t, n, i) {
      tn.call(this), this.type = "PlaneGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i
      }, this.fromBufferGeometry(new wn(e, t, n, i)), this.mergeVertices()
    }

    function wn(e, t, n, i) {
      vn.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i
      };
      var r, a, o = (e = e || 1) / 2,
        s = (t = t || 1) / 2,
        c = Math.floor(n) || 1,
        h = Math.floor(i) || 1,
        l = c + 1,
        u = h + 1,
        d = e / c,
        p = t / h,
        f = [],
        m = [],
        v = [],
        g = [];
      for (a = 0; a < u; a++) {
        var y = a * p - s;
        for (r = 0; r < l; r++) {
          var x = r * d - o;
          m.push(x, -y, 0), v.push(0, 0, 1), g.push(r / c), g.push(1 - a / h)
        }
      }
      for (a = 0; a < h; a++)
        for (r = 0; r < c; r++) {
          var w = r + l * a,
            b = r + l * (a + 1),
            _ = r + 1 + l * (a + 1),
            E = r + 1 + l * a;
          f.push(w, b, E), f.push(b, _, E)
        }
      this.setIndex(f), this.addAttribute("position", new un(m, 3)), this.addAttribute("normal", new un(v, 3)), this.addAttribute("uv", new un(g, 2))
    }
    vn.prototype = Object.assign(Object.create(r.prototype), {
      constructor: vn,
      isBufferGeometry: !0,
      getIndex: function () {
        return this.index
      },
      setIndex: function (e) {
        Array.isArray(e) ? this.index = new(fn(e) > 65535 ? ln : cn)(e, 1) : this.index = e
      },
      addAttribute: function (e, t) {
        return t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : (this.attributes[e] = t, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(e, new nn(arguments[1], arguments[2])))
      },
      getAttribute: function (e) {
        return this.attributes[e]
      },
      removeAttribute: function (e) {
        return delete this.attributes[e], this
      },
      addGroup: function (e, t, n) {
        this.groups.push({
          start: e,
          count: t,
          materialIndex: void 0 !== n ? n : 0
        })
      },
      clearGroups: function () {
        this.groups = []
      },
      setDrawRange: function (e, t) {
        this.drawRange.start = e, this.drawRange.count = t
      },
      applyMatrix: function (e) {
        var t = this.attributes.position;
        void 0 !== t && (e.applyToBufferAttribute(t), t.needsUpdate = !0);
        var n = this.attributes.normal;
        void 0 !== n && ((new At).getNormalMatrix(e).applyToBufferAttribute(n), n.needsUpdate = !0);
        return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
      },
      rotateX: function () {
        var e = new Mt;
        return function (t) {
          return e.makeRotationX(t), this.applyMatrix(e), this
        }
      }(),
      rotateY: function () {
        var e = new Mt;
        return function (t) {
          return e.makeRotationY(t), this.applyMatrix(e), this
        }
      }(),
      rotateZ: function () {
        var e = new Mt;
        return function (t) {
          return e.makeRotationZ(t), this.applyMatrix(e), this
        }
      }(),
      translate: function () {
        var e = new Mt;
        return function (t, n, i) {
          return e.makeTranslation(t, n, i), this.applyMatrix(e), this
        }
      }(),
      scale: function () {
        var e = new Mt;
        return function (t, n, i) {
          return e.makeScale(t, n, i), this.applyMatrix(e), this
        }
      }(),
      lookAt: function () {
        var e = new Jt;
        return function (t) {
          e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
        }
      }(),
      center: function () {
        var e = new St;
        return function () {
          return this.computeBoundingBox(), this.boundingBox.getCenter(e).negate(), this.translate(e.x, e.y, e.z), this
        }
      }(),
      setFromObject: function (e) {
        var t = e.geometry;
        if (e.isPoints || e.isLine) {
          var n = new un(3 * t.vertices.length, 3),
            i = new un(3 * t.colors.length, 3);
          if (this.addAttribute("position", n.copyVector3sArray(t.vertices)), this.addAttribute("color", i.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
            var r = new un(t.lineDistances.length, 1);
            this.addAttribute("lineDistance", r.copyArray(t.lineDistances))
          }
          null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
        } else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
        return this
      },
      setFromPoints: function (e) {
        for (var t = [], n = 0, i = e.length; n < i; n++) {
          var r = e[n];
          t.push(r.x, r.y, r.z || 0)
        }
        return this.addAttribute("position", new un(t, 3)), this
      },
      updateFromObject: function (e) {
        var t, n = e.geometry;
        if (e.isMesh) {
          var i = n.__directGeometry;
          if (!0 === n.elementsNeedUpdate && (i = void 0, n.elementsNeedUpdate = !1), void 0 === i) return this.fromGeometry(n);
          i.verticesNeedUpdate = n.verticesNeedUpdate, i.normalsNeedUpdate = n.normalsNeedUpdate, i.colorsNeedUpdate = n.colorsNeedUpdate, i.uvsNeedUpdate = n.uvsNeedUpdate, i.groupsNeedUpdate = n.groupsNeedUpdate, n.verticesNeedUpdate = !1, n.normalsNeedUpdate = !1, n.colorsNeedUpdate = !1, n.uvsNeedUpdate = !1, n.groupsNeedUpdate = !1, n = i
        }
        return !0 === n.verticesNeedUpdate && (void 0 !== (t = this.attributes.position) && (t.copyVector3sArray(n.vertices), t.needsUpdate = !0), n.verticesNeedUpdate = !1), !0 === n.normalsNeedUpdate && (void 0 !== (t = this.attributes.normal) && (t.copyVector3sArray(n.normals), t.needsUpdate = !0), n.normalsNeedUpdate = !1), !0 === n.colorsNeedUpdate && (void 0 !== (t = this.attributes.color) && (t.copyColorsArray(n.colors), t.needsUpdate = !0), n.colorsNeedUpdate = !1), n.uvsNeedUpdate && (void 0 !== (t = this.attributes.uv) && (t.copyVector2sArray(n.uvs), t.needsUpdate = !0), n.uvsNeedUpdate = !1), n.lineDistancesNeedUpdate && (void 0 !== (t = this.attributes.lineDistance) && (t.copyArray(n.lineDistances), t.needsUpdate = !0), n.lineDistancesNeedUpdate = !1), n.groupsNeedUpdate && (n.computeGroups(e.geometry), this.groups = n.groups, n.groupsNeedUpdate = !1), this
      },
      fromGeometry: function (e) {
        return e.__directGeometry = (new pn).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
      },
      fromDirectGeometry: function (e) {
        var t = new Float32Array(3 * e.vertices.length);
        if (this.addAttribute("position", new nn(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
          var n = new Float32Array(3 * e.normals.length);
          this.addAttribute("normal", new nn(n, 3).copyVector3sArray(e.normals))
        }
        if (e.colors.length > 0) {
          var i = new Float32Array(3 * e.colors.length);
          this.addAttribute("color", new nn(i, 3).copyColorsArray(e.colors))
        }
        if (e.uvs.length > 0) {
          var r = new Float32Array(2 * e.uvs.length);
          this.addAttribute("uv", new nn(r, 2).copyVector2sArray(e.uvs))
        }
        if (e.uvs2.length > 0) {
          var a = new Float32Array(2 * e.uvs2.length);
          this.addAttribute("uv2", new nn(a, 2).copyVector2sArray(e.uvs2))
        }
        for (var o in this.groups = e.groups, e.morphTargets) {
          for (var s = [], c = e.morphTargets[o], h = 0, l = c.length; h < l; h++) {
            var u = c[h],
              d = new un(3 * u.length, 3);
            s.push(d.copyVector3sArray(u))
          }
          this.morphAttributes[o] = s
        }
        if (e.skinIndices.length > 0) {
          var p = new un(4 * e.skinIndices.length, 4);
          this.addAttribute("skinIndex", p.copyVector4sArray(e.skinIndices))
        }
        if (e.skinWeights.length > 0) {
          var f = new un(4 * e.skinWeights.length, 4);
          this.addAttribute("skinWeight", f.copyVector4sArray(e.skinWeights))
        }
        return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
      },
      computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new Nt);
        var e = this.attributes.position;
        void 0 !== e ? this.boundingBox.setFromBufferAttribute(e) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
      },
      computeBoundingSphere: function () {
        var e = new Nt,
          t = new St;
        return function () {
          null === this.boundingSphere && (this.boundingSphere = new Ut);
          var n = this.attributes.position;
          if (n) {
            var i = this.boundingSphere.center;
            e.setFromBufferAttribute(n), e.getCenter(i);
            for (var r = 0, a = 0, o = n.count; a < o; a++) t.x = n.getX(a), t.y = n.getY(a), t.z = n.getZ(a), r = Math.max(r, i.distanceToSquared(t));
            this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
          }
        }
      }(),
      computeFaceNormals: function () {},
      computeVertexNormals: function () {
        var e = this.index,
          t = this.attributes,
          n = this.groups;
        if (t.position) {
          var i = t.position.array;
          if (void 0 === t.normal) this.addAttribute("normal", new nn(new Float32Array(i.length), 3));
          else
            for (var r = t.normal.array, a = 0, o = r.length; a < o; a++) r[a] = 0;
          var s, c, h, l = t.normal.array,
            u = new St,
            d = new St,
            p = new St,
            f = new St,
            m = new St;
          if (e) {
            var v = e.array;
            0 === n.length && this.addGroup(0, v.length);
            for (var g = 0, y = n.length; g < y; ++g) {
              var x = n[g],
                w = x.start;
              for (a = w, o = w + x.count; a < o; a += 3) s = 3 * v[a + 0], c = 3 * v[a + 1], h = 3 * v[a + 2], u.fromArray(i, s), d.fromArray(i, c), p.fromArray(i, h), f.subVectors(p, d), m.subVectors(u, d), f.cross(m), l[s] += f.x, l[s + 1] += f.y, l[s + 2] += f.z, l[c] += f.x, l[c + 1] += f.y, l[c + 2] += f.z, l[h] += f.x, l[h + 1] += f.y, l[h + 2] += f.z
            }
          } else
            for (a = 0, o = i.length; a < o; a += 9) u.fromArray(i, a), d.fromArray(i, a + 3), p.fromArray(i, a + 6), f.subVectors(p, d), m.subVectors(u, d), f.cross(m), l[a] = f.x, l[a + 1] = f.y, l[a + 2] = f.z, l[a + 3] = f.x, l[a + 4] = f.y, l[a + 5] = f.z, l[a + 6] = f.x, l[a + 7] = f.y, l[a + 8] = f.z;
          this.normalizeNormals(), t.normal.needsUpdate = !0
        }
      },
      merge: function (e, t) {
        if (e && e.isBufferGeometry) {
          void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
          var n = this.attributes;
          for (var i in n)
            if (void 0 !== e.attributes[i])
              for (var r = n[i].array, a = e.attributes[i], o = a.array, s = 0, c = a.itemSize * t; s < o.length; s++, c++) r[c] = o[s];
          return this
        }
        console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
      },
      normalizeNormals: function () {
        var e = new St;
        return function () {
          for (var t = this.attributes.normal, n = 0, i = t.count; n < i; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.normalize(), t.setXYZ(n, e.x, e.y, e.z)
        }
      }(),
      toNonIndexed: function () {
        if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
        var e = new vn,
          t = this.index.array,
          n = this.attributes;
        for (var i in n) {
          for (var r = n[i], a = r.array, o = r.itemSize, s = new a.constructor(t.length * o), c = 0, h = 0, l = 0, u = t.length; l < u; l++) {
            c = t[l] * o;
            for (var d = 0; d < o; d++) s[h++] = a[c++]
          }
          e.addAttribute(i, new nn(s, o))
        }
        var p = this.groups;
        for (l = 0, u = p.length; l < u; l++) {
          var f = p[l];
          e.addGroup(f.start, f.count, f.materialIndex)
        }
        return e
      },
      toJSON: function () {
        var e = {
          metadata: {
            version: 4.5,
            type: "BufferGeometry",
            generator: "BufferGeometry.toJSON"
          }
        };
        if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
          var t = this.parameters;
          for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
          return e
        }
        e.data = {
          attributes: {}
        };
        var i = this.index;
        if (null !== i) {
          var r = Array.prototype.slice.call(i.array);
          e.data.index = {
            type: i.array.constructor.name,
            array: r
          }
        }
        var a = this.attributes;
        for (var n in a) {
          var o = a[n];
          r = Array.prototype.slice.call(o.array);
          e.data.attributes[n] = {
            itemSize: o.itemSize,
            type: o.array.constructor.name,
            array: r,
            normalized: o.normalized
          }
        }
        var s = this.groups;
        s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
        var c = this.boundingSphere;
        return null !== c && (e.data.boundingSphere = {
          center: c.center.toArray(),
          radius: c.radius
        }), e
      },
      clone: function () {
        return (new vn).copy(this)
      },
      copy: function (e) {
        var t, n, i;
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
        var r = e.index;
        null !== r && this.setIndex(r.clone());
        var a = e.attributes;
        for (t in a) {
          var o = a[t];
          this.addAttribute(t, o.clone())
        }
        var s = e.morphAttributes;
        for (t in s) {
          var c = [],
            h = s[t];
          for (n = 0, i = h.length; n < i; n++) c.push(h[n].clone());
          this.morphAttributes[t] = c
        }
        var l = e.groups;
        for (n = 0, i = l.length; n < i; n++) {
          var u = l[n];
          this.addGroup(u.start, u.count, u.materialIndex)
        }
        var d = e.boundingBox;
        null !== d && (this.boundingBox = d.clone());
        var p = e.boundingSphere;
        return null !== p && (this.boundingSphere = p.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
      },
      dispose: function () {
        this.dispatchEvent({
          type: "dispose"
        })
      }
    }), gn.prototype = Object.create(tn.prototype), gn.prototype.constructor = gn, yn.prototype = Object.create(vn.prototype), yn.prototype.constructor = yn, xn.prototype = Object.create(tn.prototype), xn.prototype.constructor = xn, wn.prototype = Object.create(vn.prototype), wn.prototype.constructor = wn;
    var bn = 0;

    function _n() {
      Object.defineProperty(this, "id", {
        value: bn++
      }), this.uuid = _t.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = y, this.side = u, this.flatShading = !1, this.vertexColors = f, this.opacity = 1, this.transparent = !1, this.blendSrc = O, this.blendDst = I, this.blendEquation = E, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = k, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
    }

    function En(e) {
      _n.call(this), this.type = "MeshBasicMaterial", this.color = new kt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(e)
    }

    function Mn(e) {
      _n.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
      }, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
      }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
    }

    function Tn(e, t) {
      this.origin = void 0 !== e ? e : new St, this.direction = void 0 !== t ? t : new St
    }

    function Sn(e, t, n) {
      this.a = void 0 !== e ? e : new St, this.b = void 0 !== t ? t : new St, this.c = void 0 !== n ? n : new St
    }

    function An(e, t) {
      Jt.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new vn, this.material = void 0 !== t ? t : new En({
        color: 16777215 * Math.random()
      }), this.drawMode = ct, this.updateMorphTargets()
    }

    function Ln(e, t) {
      return Math.abs(t[1]) - Math.abs(e[1])
    }

    function Rn(e, t, n, i, r, a, o, s, c, h) {
      e = void 0 !== e ? e : [], t = void 0 !== t ? t : te, Pt.call(this, e, t, n, i, r, a, o, s, c, h), this.flipY = !1
    }
    _n.prototype = Object.assign(Object.create(r.prototype), {
      constructor: _n,
      isMaterial: !0,
      onBeforeCompile: function () {},
      setValues: function (e) {
        if (void 0 !== e)
          for (var t in e) {
            var n = e[t];
            if (void 0 !== n)
              if ("shading" !== t) {
                var i = this[t];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = "overdraw" === t ? Number(n) : n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
              } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
            else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
          }
      },
      toJSON: function (e) {
        var t = void 0 === e || "string" == typeof e;
        t && (e = {
          textures: {},
          images: {}
        });
        var n = {
          metadata: {
            version: 4.5,
            type: "Material",
            generator: "Material.toJSON"
          }
        };

        function i(e) {
          var t = [];
          for (var n in e) {
            var i = e[n];
            delete i.metadata, t.push(i)
          }
          return t
        }
        if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== y && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== u && (n.side = this.side), this.vertexColors !== f && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, 0 !== this.rotation && (n.rotation = this.rotation), 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), t) {
          var r = i(e.textures),
            a = i(e.images);
          r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a)
        }
        return n
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        this.name = e.name, this.fog = e.fog, this.lights = e.lights, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.overdraw = e.overdraw, this.visible = e.visible, this.userData = JSON.parse(JSON.stringify(e.userData)), this.clipShadows = e.clipShadows, this.clipIntersection = e.clipIntersection;
        var t = e.clippingPlanes,
          n = null;
        if (null !== t) {
          var i = t.length;
          n = new Array(i);
          for (var r = 0; r !== i; ++r) n[r] = t[r].clone()
        }
        return this.clippingPlanes = n, this.shadowSide = e.shadowSide, this
      },
      dispose: function () {
        this.dispatchEvent({
          type: "dispose"
        })
      }
    }), En.prototype = Object.create(_n.prototype), En.prototype.constructor = En, En.prototype.isMeshBasicMaterial = !0, En.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
    }, Mn.prototype = Object.create(_n.prototype), Mn.prototype.constructor = Mn, Mn.prototype.isShaderMaterial = !0, Mn.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = zt.clone(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
    }, Mn.prototype.toJSON = function (e) {
      var t = _n.prototype.toJSON.call(this, e);
      return t.uniforms = this.uniforms, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
    }, Object.assign(Tn.prototype, {
      set: function (e, t) {
        return this.origin.copy(e), this.direction.copy(t), this
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this
      },
      at: function (e, t) {
        return void 0 === t && (console.warn("THREE.Ray: .at() target is now required"), t = new St), t.copy(this.direction).multiplyScalar(e).add(this.origin)
      },
      lookAt: function (e) {
        return this.direction.copy(e).sub(this.origin).normalize(), this
      },
      recast: function () {
        var e = new St;
        return function (t) {
          return this.origin.copy(this.at(t, e)), this
        }
      }(),
      closestPointToPoint: function (e, t) {
        void 0 === t && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new St), t.subVectors(e, this.origin);
        var n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
      },
      distanceToPoint: function (e) {
        return Math.sqrt(this.distanceSqToPoint(e))
      },
      distanceSqToPoint: function () {
        var e = new St;
        return function (t) {
          var n = e.subVectors(t, this.origin).dot(this.direction);
          return n < 0 ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(n).add(this.origin), e.distanceToSquared(t))
        }
      }(),
      distanceSqToSegment: function () {
        var e = new St,
          t = new St,
          n = new St;
        return function (i, r, a, o) {
          e.copy(i).add(r).multiplyScalar(.5), t.copy(r).sub(i).normalize(), n.copy(this.origin).sub(e);
          var s, c, h, l, u = .5 * i.distanceTo(r),
            d = -this.direction.dot(t),
            p = n.dot(this.direction),
            f = -n.dot(t),
            m = n.lengthSq(),
            v = Math.abs(1 - d * d);
          if (v > 0)
            if (c = d * p - f, l = u * v, (s = d * f - p) >= 0)
              if (c >= -l)
                if (c <= l) {
                  var g = 1 / v;
                  h = (s *= g) * (s + d * (c *= g) + 2 * p) + c * (d * s + c + 2 * f) + m
                } else c = u, h = -(s = Math.max(0, -(d * c + p))) * s + c * (c + 2 * f) + m;
          else c = -u, h = -(s = Math.max(0, -(d * c + p))) * s + c * (c + 2 * f) + m;
          else c <= -l ? h = -(s = Math.max(0, -(-d * u + p))) * s + (c = s > 0 ? -u : Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m : c <= l ? (s = 0, h = (c = Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m) : h = -(s = Math.max(0, -(d * u + p))) * s + (c = s > 0 ? u : Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m;
          else c = d > 0 ? -u : u, h = -(s = Math.max(0, -(d * c + p))) * s + c * (c + 2 * f) + m;
          return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(t).multiplyScalar(c).add(e), h
        }
      }(),
      intersectSphere: function () {
        var e = new St;
        return function (t, n) {
          e.subVectors(t.center, this.origin);
          var i = e.dot(this.direction),
            r = e.dot(e) - i * i,
            a = t.radius * t.radius;
          if (r > a) return null;
          var o = Math.sqrt(a - r),
            s = i - o,
            c = i + o;
          return s < 0 && c < 0 ? null : s < 0 ? this.at(c, n) : this.at(s, n)
        }
      }(),
      intersectsSphere: function (e) {
        return this.distanceToPoint(e.center) <= e.radius
      },
      distanceToPlane: function (e) {
        var t = e.normal.dot(this.direction);
        if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
        var n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
      },
      intersectPlane: function (e, t) {
        var n = this.distanceToPlane(e);
        return null === n ? null : this.at(n, t)
      },
      intersectsPlane: function (e) {
        var t = e.distanceToPoint(this.origin);
        return 0 === t || e.normal.dot(this.direction) * t < 0
      },
      intersectBox: function (e, t) {
        var n, i, r, a, o, s, c = 1 / this.direction.x,
          h = 1 / this.direction.y,
          l = 1 / this.direction.z,
          u = this.origin;
        return c >= 0 ? (n = (e.min.x - u.x) * c, i = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, i = (e.min.x - u.x) * c), h >= 0 ? (r = (e.min.y - u.y) * h, a = (e.max.y - u.y) * h) : (r = (e.max.y - u.y) * h, a = (e.min.y - u.y) * h), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), l >= 0 ? (o = (e.min.z - u.z) * l, s = (e.max.z - u.z) * l) : (o = (e.max.z - u.z) * l, s = (e.min.z - u.z) * l), n > s || o > i ? null : ((o > n || n != n) && (n = o), (s < i || i != i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, t)))
      },
      intersectsBox: function () {
        var e = new St;
        return function (t) {
          return null !== this.intersectBox(t, e)
        }
      }(),
      intersectTriangle: function () {
        var e = new St,
          t = new St,
          n = new St,
          i = new St;
        return function (r, a, o, s, c) {
          t.subVectors(a, r), n.subVectors(o, r), i.crossVectors(t, n);
          var h, l = this.direction.dot(i);
          if (l > 0) {
            if (s) return null;
            h = 1
          } else {
            if (!(l < 0)) return null;
            h = -1, l = -l
          }
          e.subVectors(this.origin, r);
          var u = h * this.direction.dot(n.crossVectors(e, n));
          if (u < 0) return null;
          var d = h * this.direction.dot(t.cross(e));
          if (d < 0) return null;
          if (u + d > l) return null;
          var p = -h * e.dot(i);
          return p < 0 ? null : this.at(p / l, c)
        }
      }(),
      applyMatrix4: function (e) {
        return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
      },
      equals: function (e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
      }
    }), Object.assign(Sn, {
      getNormal: function () {
        var e = new St;
        return function (t, n, i, r) {
          void 0 === r && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new St), r.subVectors(i, n), e.subVectors(t, n), r.cross(e);
          var a = r.lengthSq();
          return a > 0 ? r.multiplyScalar(1 / Math.sqrt(a)) : r.set(0, 0, 0)
        }
      }(),
      getBarycoord: function () {
        var e = new St,
          t = new St,
          n = new St;
        return function (i, r, a, o, s) {
          e.subVectors(o, r), t.subVectors(a, r), n.subVectors(i, r);
          var c = e.dot(e),
            h = e.dot(t),
            l = e.dot(n),
            u = t.dot(t),
            d = t.dot(n),
            p = c * u - h * h;
          if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new St), 0 === p) return s.set(-2, -1, -1);
          var f = 1 / p,
            m = (u * l - h * d) * f,
            v = (c * d - h * l) * f;
          return s.set(1 - m - v, v, m)
        }
      }(),
      containsPoint: function () {
        var e = new St;
        return function (t, n, i, r) {
          return Sn.getBarycoord(t, n, i, r, e), e.x >= 0 && e.y >= 0 && e.x + e.y <= 1
        }
      }()
    }), Object.assign(Sn.prototype, {
      set: function (e, t, n) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
      },
      setFromPointsAndIndices: function (e, t, n, i) {
        return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
      },
      getArea: function () {
        var e = new St,
          t = new St;
        return function () {
          return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
        }
      }(),
      getMidpoint: function (e) {
        return void 0 === e && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new St), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
      },
      getNormal: function (e) {
        return Sn.getNormal(this.a, this.b, this.c, e)
      },
      getPlane: function (e) {
        return void 0 === e && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new St), e.setFromCoplanarPoints(this.a, this.b, this.c)
      },
      getBarycoord: function (e, t) {
        return Sn.getBarycoord(e, this.a, this.b, this.c, t)
      },
      containsPoint: function (e) {
        return Sn.containsPoint(e, this.a, this.b, this.c)
      },
      intersectsBox: function (e) {
        return e.intersectsTriangle(this)
      },
      closestPointToPoint: function () {
        var e = new St,
          t = new St,
          n = new St,
          i = new St,
          r = new St,
          a = new St;
        return function (o, s) {
          void 0 === s && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), s = new St);
          var c, h, l = this.a,
            u = this.b,
            d = this.c;
          e.subVectors(u, l), t.subVectors(d, l), i.subVectors(o, l);
          var p = e.dot(i),
            f = t.dot(i);
          if (p <= 0 && f <= 0) return s.copy(l);
          r.subVectors(o, u);
          var m = e.dot(r),
            v = t.dot(r);
          if (m >= 0 && v <= m) return s.copy(u);
          var g = p * v - m * f;
          if (g <= 0 && p >= 0 && m <= 0) return c = p / (p - m), s.copy(l).addScaledVector(e, c);
          a.subVectors(o, d);
          var y = e.dot(a),
            x = t.dot(a);
          if (x >= 0 && y <= x) return s.copy(d);
          var w = y * f - p * x;
          if (w <= 0 && f >= 0 && x <= 0) return h = f / (f - x), s.copy(l).addScaledVector(t, h);
          var b = m * x - y * v;
          if (b <= 0 && v - m >= 0 && y - x >= 0) return n.subVectors(d, u), h = (v - m) / (v - m + (y - x)), s.copy(u).addScaledVector(n, h);
          var _ = 1 / (b + w + g);
          return c = w * _, h = g * _, s.copy(l).addScaledVector(e, c).addScaledVector(t, h)
        }
      }(),
      equals: function (e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
      }
    }), An.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: An,
      isMesh: !0,
      setDrawMode: function (e) {
        this.drawMode = e
      },
      copy: function (e) {
        return Jt.prototype.copy.call(this, e), this.drawMode = e.drawMode, void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this
      },
      updateMorphTargets: function () {
        var e, t, n, i = this.geometry;
        if (i.isBufferGeometry) {
          var r = i.morphAttributes,
            a = Object.keys(r);
          if (a.length > 0) {
            var o = r[a[0]];
            if (void 0 !== o)
              for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = o.length; e < t; e++) n = o[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
          }
        } else {
          var s = i.morphTargets;
          if (void 0 !== s && s.length > 0)
            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = s.length; e < t; e++) n = s[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
        }
      },
      raycast: function () {
        var e = new Mt,
          t = new Tn,
          n = new Ut,
          i = new St,
          r = new St,
          a = new St,
          o = new St,
          s = new St,
          c = new St,
          h = new Et,
          l = new Et,
          u = new Et,
          f = new St,
          m = new St,
          v = new St;

        function g(e, t, n, i, r, a, o) {
          return Sn.getBarycoord(e, t, n, i, f), r.multiplyScalar(f.x), a.multiplyScalar(f.y), o.multiplyScalar(f.z), r.add(a).add(o), r.clone()
        }

        function y(e, t, n, i, r, a, o, s) {
          if (null === (t.side === d ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, t.side !== p, s))) return null;
          v.copy(s), v.applyMatrix4(e.matrixWorld);
          var c = n.ray.origin.distanceTo(v);
          return c < n.near || c > n.far ? null : {
            distance: c,
            point: v.clone(),
            object: e
          }
        }

        function x(e, t, n, o, s, c, d, p, f) {
          i.fromBufferAttribute(s, d), r.fromBufferAttribute(s, p), a.fromBufferAttribute(s, f);
          var v = y(e, t, n, o, i, r, a, m);
          if (v) {
            c && (h.fromBufferAttribute(c, d), l.fromBufferAttribute(c, p), u.fromBufferAttribute(c, f), v.uv = g(m, i, r, a, h, l, u));
            var x = new $t(d, p, f);
            Sn.getNormal(i, r, a, x.normal), v.face = x
          }
          return v
        }
        return function (d, p) {
          var f, v = this.geometry,
            w = this.material,
            b = this.matrixWorld;
          if (void 0 !== w && (null === v.boundingSphere && v.computeBoundingSphere(), n.copy(v.boundingSphere), n.applyMatrix4(b), !1 !== d.ray.intersectsSphere(n) && (e.getInverse(b), t.copy(d.ray).applyMatrix4(e), null === v.boundingBox || !1 !== t.intersectsBox(v.boundingBox))))
            if (v.isBufferGeometry) {
              var _, E, M, T, S, A, L, R, P, C = v.index,
                O = v.attributes.position,
                I = v.attributes.uv,
                D = v.groups,
                N = v.drawRange;
              if (null !== C)
                if (Array.isArray(w))
                  for (T = 0, A = D.length; T < A; T++)
                    for (P = w[(R = D[T]).materialIndex], S = Math.max(R.start, N.start), L = Math.min(R.start + R.count, N.start + N.count); S < L; S += 3) _ = C.getX(S), E = C.getX(S + 1), M = C.getX(S + 2), (f = x(this, P, d, t, O, I, _, E, M)) && (f.faceIndex = Math.floor(S / 3), p.push(f));
                else
                  for (T = Math.max(0, N.start), A = Math.min(C.count, N.start + N.count); T < A; T += 3) _ = C.getX(T), E = C.getX(T + 1), M = C.getX(T + 2), (f = x(this, w, d, t, O, I, _, E, M)) && (f.faceIndex = Math.floor(T / 3), p.push(f));
              else if (void 0 !== O)
                if (Array.isArray(w))
                  for (T = 0, A = D.length; T < A; T++)
                    for (P = w[(R = D[T]).materialIndex], S = Math.max(R.start, N.start), L = Math.min(R.start + R.count, N.start + N.count); S < L; S += 3)(f = x(this, P, d, t, O, I, _ = S, E = S + 1, M = S + 2)) && (f.faceIndex = Math.floor(S / 3), p.push(f));
                else
                  for (T = Math.max(0, N.start), A = Math.min(O.count, N.start + N.count); T < A; T += 3)(f = x(this, w, d, t, O, I, _ = T, E = T + 1, M = T + 2)) && (f.faceIndex = Math.floor(T / 3), p.push(f))
            } else if (v.isGeometry) {
            var U, B, F, H, z = Array.isArray(w),
              G = v.vertices,
              k = v.faces,
              j = v.faceVertexUvs[0];
            j.length > 0 && (H = j);
            for (var V = 0, W = k.length; V < W; V++) {
              var X = k[V],
                Y = z ? w[X.materialIndex] : w;
              if (void 0 !== Y) {
                if (U = G[X.a], B = G[X.b], F = G[X.c], !0 === Y.morphTargets) {
                  var q = v.morphTargets,
                    Z = this.morphTargetInfluences;
                  i.set(0, 0, 0), r.set(0, 0, 0), a.set(0, 0, 0);
                  for (var J = 0, Q = q.length; J < Q; J++) {
                    var K = Z[J];
                    if (0 !== K) {
                      var $ = q[J].vertices;
                      i.addScaledVector(o.subVectors($[X.a], U), K), r.addScaledVector(s.subVectors($[X.b], B), K), a.addScaledVector(c.subVectors($[X.c], F), K)
                    }
                  }
                  i.add(U), r.add(B), a.add(F), U = i, B = r, F = a
                }
                if (f = y(this, Y, d, t, U, B, F, m)) {
                  if (H && H[V]) {
                    var ee = H[V];
                    h.copy(ee[0]), l.copy(ee[1]), u.copy(ee[2]), f.uv = g(m, U, B, F, h, l, u)
                  }
                  f.face = X, f.faceIndex = V, p.push(f)
                }
              }
            }
          }
        }
      }(),
      clone: function () {
        return new this.constructor(this.geometry, this.material).copy(this)
      }
    }), Rn.prototype = Object.create(Pt.prototype), Rn.prototype.constructor = Rn, Rn.prototype.isCubeTexture = !0, Object.defineProperty(Rn.prototype, "images", {
      get: function () {
        return this.image
      },
      set: function (e) {
        this.image = e
      }
    });
    var Pn = new Pt,
      Cn = new Rn;

    function On() {
      this.seq = [], this.map = {}
    }
    var In = [],
      Dn = [],
      Nn = new Float32Array(16),
      Un = new Float32Array(9),
      Bn = new Float32Array(4);

    function Fn(e, t, n) {
      var i = e[0];
      if (i <= 0 || i > 0) return e;
      var r = t * n,
        a = In[r];
      if (void 0 === a && (a = new Float32Array(r), In[r] = a), 0 !== t) {
        i.toArray(a, 0);
        for (var o = 1, s = 0; o !== t; ++o) s += n, e[o].toArray(a, s)
      }
      return a
    }

    function Hn(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0, i = e.length; n < i; n++)
        if (e[n] !== t[n]) return !1;
      return !0
    }

    function zn(e, t) {
      for (var n = 0, i = t.length; n < i; n++) e[n] = t[n]
    }

    function Gn(e, t) {
      var n = Dn[t];
      void 0 === n && (n = new Int32Array(t), Dn[t] = n);
      for (var i = 0; i !== t; ++i) n[i] = e.allocTextureUnit();
      return n
    }

    function kn(e, t) {
      var n = this.cache;
      n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t)
    }

    function jn(e, t) {
      var n = this.cache;
      n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t)
    }

    function Vn(e, t) {
      var n = this.cache;
      if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
      else {
        if (Hn(n, t)) return;
        e.uniform2fv(this.addr, t), zn(n, t)
      }
    }

    function Wn(e, t) {
      var n = this.cache;
      if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
      else if (void 0 !== t.r) n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
      else {
        if (Hn(n, t)) return;
        e.uniform3fv(this.addr, t), zn(n, t)
      }
    }

    function Xn(e, t) {
      var n = this.cache;
      if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
      else {
        if (Hn(n, t)) return;
        e.uniform4fv(this.addr, t), zn(n, t)
      }
    }

    function Yn(e, t) {
      var n = this.cache,
        i = t.elements;
      if (void 0 === i) {
        if (Hn(n, t)) return;
        e.uniformMatrix2fv(this.addr, !1, t), zn(n, t)
      } else {
        if (Hn(n, i)) return;
        Bn.set(i), e.uniformMatrix2fv(this.addr, !1, Bn), zn(n, i)
      }
    }

    function qn(e, t) {
      var n = this.cache,
        i = t.elements;
      if (void 0 === i) {
        if (Hn(n, t)) return;
        e.uniformMatrix3fv(this.addr, !1, t), zn(n, t)
      } else {
        if (Hn(n, i)) return;
        Un.set(i), e.uniformMatrix3fv(this.addr, !1, Un), zn(n, i)
      }
    }

    function Zn(e, t) {
      var n = this.cache,
        i = t.elements;
      if (void 0 === i) {
        if (Hn(n, t)) return;
        e.uniformMatrix4fv(this.addr, !1, t), zn(n, t)
      } else {
        if (Hn(n, i)) return;
        Nn.set(i), e.uniformMatrix4fv(this.addr, !1, Nn), zn(n, i)
      }
    }

    function Jn(e, t, n) {
      var i = this.cache,
        r = n.allocTextureUnit();
      i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(t || Pn, r)
    }

    function Qn(e, t, n) {
      var i = this.cache,
        r = n.allocTextureUnit();
      i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(t || Cn, r)
    }

    function Kn(e, t) {
      var n = this.cache;
      Hn(n, t) || (e.uniform2iv(this.addr, t), zn(n, t))
    }

    function $n(e, t) {
      var n = this.cache;
      Hn(n, t) || (e.uniform3iv(this.addr, t), zn(n, t))
    }

    function ei(e, t) {
      var n = this.cache;
      Hn(n, t) || (e.uniform4iv(this.addr, t), zn(n, t))
    }

    function ti(e, t) {
      var n = this.cache;
      Hn(n, t) || (e.uniform1fv(this.addr, t), zn(n, t))
    }

    function ni(e, t) {
      var n = this.cache;
      Hn(n, t) || (e.uniform1iv(this.addr, t), zn(n, t))
    }

    function ii(e, t) {
      var n = this.cache,
        i = Fn(t, this.size, 2);
      Hn(n, i) || (e.uniform2fv(this.addr, i), this.updateCache(i))
    }

    function ri(e, t) {
      var n = this.cache,
        i = Fn(t, this.size, 3);
      Hn(n, i) || (e.uniform3fv(this.addr, i), this.updateCache(i))
    }

    function ai(e, t) {
      var n = this.cache,
        i = Fn(t, this.size, 4);
      Hn(n, i) || (e.uniform4fv(this.addr, i), this.updateCache(i))
    }

    function oi(e, t) {
      var n = this.cache,
        i = Fn(t, this.size, 4);
      Hn(n, i) || (e.uniformMatrix2fv(this.addr, !1, i), this.updateCache(i))
    }

    function si(e, t) {
      var n = this.cache,
        i = Fn(t, this.size, 9);
      Hn(n, i) || (e.uniformMatrix3fv(this.addr, !1, i), this.updateCache(i))
    }

    function ci(e, t) {
      var n = this.cache,
        i = Fn(t, this.size, 16);
      Hn(n, i) || (e.uniformMatrix4fv(this.addr, !1, i), this.updateCache(i))
    }

    function hi(e, t, n) {
      var i = this.cache,
        r = t.length,
        a = Gn(n, r);
      !1 === Hn(i, a) && (e.uniform1iv(this.addr, a), zn(i, a));
      for (var o = 0; o !== r; ++o) n.setTexture2D(t[o] || Pn, a[o])
    }

    function li(e, t, n) {
      var i = this.cache,
        r = t.length,
        a = Gn(n, r);
      !1 === Hn(i, a) && (e.uniform1iv(this.addr, a), zn(i, a));
      for (var o = 0; o !== r; ++o) n.setTextureCube(t[o] || Cn, a[o])
    }

    function ui(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.setValue = function (e) {
        switch (e) {
          case 5126:
            return kn;
          case 35664:
            return Vn;
          case 35665:
            return Wn;
          case 35666:
            return Xn;
          case 35674:
            return Yn;
          case 35675:
            return qn;
          case 35676:
            return Zn;
          case 35678:
          case 36198:
            return Jn;
          case 35680:
            return Qn;
          case 5124:
          case 35670:
            return jn;
          case 35667:
          case 35671:
            return Kn;
          case 35668:
          case 35672:
            return $n;
          case 35669:
          case 35673:
            return ei
        }
      }(t.type)
    }

    function di(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = function (e) {
        switch (e) {
          case 5126:
            return ti;
          case 35664:
            return ii;
          case 35665:
            return ri;
          case 35666:
            return ai;
          case 35674:
            return oi;
          case 35675:
            return si;
          case 35676:
            return ci;
          case 35678:
            return hi;
          case 35680:
            return li;
          case 5124:
          case 35670:
            return ni;
          case 35667:
          case 35671:
            return Kn;
          case 35668:
          case 35672:
            return $n;
          case 35669:
          case 35673:
            return ei
        }
      }(t.type)
    }

    function pi(e) {
      this.id = e, On.call(this)
    }
    di.prototype.updateCache = function (e) {
      var t = this.cache;
      e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), zn(t, e)
    }, pi.prototype.setValue = function (e, t, n) {
      for (var i = this.seq, r = 0, a = i.length; r !== a; ++r) {
        var o = i[r];
        o.setValue(e, t[o.id], n)
      }
    };
    var fi = /([\w\d_]+)(\])?(\[|\.)?/g;

    function mi(e, t) {
      e.seq.push(t), e.map[t.id] = t
    }

    function vi(e, t, n) {
      var i = e.name,
        r = i.length;
      for (fi.lastIndex = 0;;) {
        var a = fi.exec(i),
          o = fi.lastIndex,
          s = a[1],
          c = "]" === a[2],
          h = a[3];
        if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === r) {
          mi(n, void 0 === h ? new ui(s, e, t) : new di(s, e, t));
          break
        }
        var l = n.map[s];
        void 0 === l && mi(n, l = new pi(s)), n = l
      }
    }

    function gi(e, t, n) {
      On.call(this), this.renderer = n;
      for (var i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), r = 0; r < i; ++r) {
        var a = e.getActiveUniform(t, r);
        vi(a, e.getUniformLocation(t, a.name), this)
      }
    }

    function yi(e, t, n) {
      var i = e.createShader(t);
      return e.shaderSource(i, n), e.compileShader(i), !1 === e.getShaderParameter(i, e.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== e.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(i), function (e) {
        for (var t = e.split("\n"), n = 0; n < t.length; n++) t[n] = n + 1 + ": " + t[n];
        return t.join("\n")
      }(n)), i
    }
    gi.prototype.setValue = function (e, t, n) {
      var i = this.map[t];
      void 0 !== i && i.setValue(e, n, this.renderer)
    }, gi.prototype.setOptional = function (e, t, n) {
      var i = t[n];
      void 0 !== i && this.setValue(e, n, i)
    }, gi.upload = function (e, t, n, i) {
      for (var r = 0, a = t.length; r !== a; ++r) {
        var o = t[r],
          s = n[o.id];
        !1 !== s.needsUpdate && o.setValue(e, s.value, i)
      }
    }, gi.seqWithValue = function (e, t) {
      for (var n = [], i = 0, r = e.length; i !== r; ++i) {
        var a = e[i];
        a.id in t && n.push(a)
      }
      return n
    };
    var xi = 0;

    function wi(e) {
      switch (e) {
        case ut:
          return ["Linear", "( value )"];
        case dt:
          return ["sRGB", "( value )"];
        case ft:
          return ["RGBE", "( value )"];
        case mt:
          return ["RGBM", "( value, 7.0 )"];
        case vt:
          return ["RGBM", "( value, 16.0 )"];
        case gt:
          return ["RGBD", "( value, 256.0 )"];
        case pt:
          return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
          throw new Error("unsupported encoding: " + e)
      }
    }

    function bi(e, t) {
      var n = wi(t);
      return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }

    function _i(e) {
      return "" !== e
    }

    function Ei(e, t) {
      return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    }

    function Mi(e, t) {
      return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
    }

    function Ti(e) {
      return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function (e, t) {
        var n = Ht[t];
        if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
        return Ti(n)
      })
    }

    function Si(e) {
      return e.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function (e, t, n, i) {
        for (var r = "", a = parseInt(t); a < parseInt(n); a++) r += i.replace(/\[ i \]/g, "[ " + a + " ]");
        return r
      })
    }

    function Ai(e, t, n, i, r, a, o) {
      var s = e.context,
        c = i.defines,
        u = r.vertexShader,
        d = r.fragmentShader,
        p = "SHADOWMAP_TYPE_BASIC";
      a.shadowMapType === h ? p = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === l && (p = "SHADOWMAP_TYPE_PCF_SOFT");
      var f = "ENVMAP_TYPE_CUBE",
        m = "ENVMAP_MODE_REFLECTION",
        v = "ENVMAP_BLENDING_MULTIPLY";
      if (a.envMap) {
        switch (i.envMap.mapping) {
          case te:
          case ne:
            f = "ENVMAP_TYPE_CUBE";
            break;
          case oe:
          case se:
            f = "ENVMAP_TYPE_CUBE_UV";
            break;
          case ie:
          case re:
            f = "ENVMAP_TYPE_EQUIREC";
            break;
          case ae:
            f = "ENVMAP_TYPE_SPHERE"
        }
        switch (i.envMap.mapping) {
          case ne:
          case re:
            m = "ENVMAP_MODE_REFRACTION"
        }
        switch (i.combine) {
          case Y:
            v = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case q:
            v = "ENVMAP_BLENDING_MIX";
            break;
          case Z:
            v = "ENVMAP_BLENDING_ADD"
        }
      }
      var g, y, x = e.gammaFactor > 0 ? e.gammaFactor : 1,
        w = o.isWebGL2 ? "" : function (e, t, n) {
          return [(e = e || {}).derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap && !t.objectSpaceNormalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(_i).join("\n")
        }(i.extensions, a, t),
        b = function (e) {
          var t = [];
          for (var n in e) {
            var i = e[n];
            !1 !== i && t.push("#define " + n + " " + i)
          }
          return t.join("\n")
        }(c),
        _ = s.createProgram();
      if (i.isRawShaderMaterial ? ((g = [b].filter(_i).join("\n")).length > 0 && (g += "\n"), (y = [w, b].filter(_i).join("\n")).length > 0 && (y += "\n")) : (g = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, b, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + x, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + m : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + p : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(_i).join("\n"), y = [w, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, b, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + x, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + f : "", a.envMap ? "#define " + m : "", a.envMap ? "#define " + v : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + p : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || t.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== J ? "#define TONE_MAPPING" : "", a.toneMapping !== J ? Ht.tonemapping_pars_fragment : "", a.toneMapping !== J ? function (e, t) {
          var n;
          switch (t) {
            case Q:
              n = "Linear";
              break;
            case K:
              n = "Reinhard";
              break;
            case $:
              n = "Uncharted2";
              break;
            case ee:
              n = "OptimizedCineon";
              break;
            default:
              throw new Error("unsupported toneMapping: " + t)
          }
          return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
        }("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? Ht.encodings_pars_fragment : "", a.mapEncoding ? bi("mapTexelToLinear", a.mapEncoding) : "", a.envMapEncoding ? bi("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? bi("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? function (e, t) {
          var n = wi(t);
          return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
        }("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(_i).join("\n")), u = Mi(u = Ei(u = Ti(u), a), a), d = Mi(d = Ei(d = Ti(d), a), a), u = Si(u), d = Si(d), o.isWebGL2 && !i.isRawShaderMaterial) {
        var E = !1,
          M = /^\s*#version\s+300\s+es\s*\n/;
        i.isShaderMaterial && null !== u.match(M) && null !== d.match(M) && (E = !0, u = u.replace(M, ""), d = d.replace(M, "")), g = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, y = ["#version 300 es\n", "#define varying in", E ? "" : "out highp vec4 pc_fragColor;", E ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y
      }
      var T = g + u,
        S = y + d,
        A = yi(s, s.VERTEX_SHADER, T),
        L = yi(s, s.FRAGMENT_SHADER, S);
      s.attachShader(_, A), s.attachShader(_, L), void 0 !== i.index0AttributeName ? s.bindAttribLocation(_, 0, i.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(_, 0, "position"), s.linkProgram(_);
      var R, P, C = s.getProgramInfoLog(_).trim(),
        O = s.getShaderInfoLog(A).trim(),
        I = s.getShaderInfoLog(L).trim(),
        D = !0,
        N = !0;
      return !1 === s.getProgramParameter(_, s.LINK_STATUS) ? (D = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "gl.VALIDATE_STATUS", s.getProgramParameter(_, s.VALIDATE_STATUS), "gl.getProgramInfoLog", C, O, I)) : "" !== C ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", C) : "" !== O && "" !== I || (N = !1), N && (this.diagnostics = {
        runnable: D,
        material: i,
        programLog: C,
        vertexShader: {
          log: O,
          prefix: g
        },
        fragmentShader: {
          log: I,
          prefix: y
        }
      }), s.deleteShader(A), s.deleteShader(L), this.getUniforms = function () {
        return void 0 === R && (R = new gi(s, _, e)), R
      }, this.getAttributes = function () {
        return void 0 === P && (P = function (e, t) {
          for (var n = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), r = 0; r < i; r++) {
            var a = e.getActiveAttrib(t, r).name;
            n[a] = e.getAttribLocation(t, a)
          }
          return n
        }(s, _)), P
      }, this.destroy = function () {
        s.deleteProgram(_), this.program = void 0
      }, Object.defineProperties(this, {
        uniforms: {
          get: function () {
            return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
          }
        },
        attributes: {
          get: function () {
            return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
          }
        }
      }), this.name = r.name, this.id = xi++, this.code = n, this.usedTimes = 1, this.program = _, this.vertexShader = A, this.fragmentShader = L, this
    }

    function Li(e, t, n) {
      var i = [],
        r = {
          MeshDepthMaterial: "depth",
          MeshDistanceMaterial: "distanceRGBA",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "phong",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points",
          ShadowMaterial: "shadow",
          SpriteMaterial: "sprite"
        },
        a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

      function o(e, t) {
        var n;
        return e ? e.isTexture ? n = e.encoding : e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = e.texture.encoding) : n = ut, n === ut && t && (n = pt), n
      }
      this.getParameters = function (t, i, a, s, c, h, l) {
        var u = r[t.type],
          f = l.isSkinnedMesh ? function (e) {
            var t = e.skeleton.bones;
            if (n.floatVertexTextures) return 1024;
            var i = n.maxVertexUniforms,
              r = Math.floor((i - 20) / 4),
              a = Math.min(r, t.length);
            return a < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + a + "."), 0) : a
          }(l) : 0,
          m = n.precision;
        null !== t.precision && (m = n.getMaxPrecision(t.precision)) !== t.precision && console.warn("THREE.WebGLProgram.getParameters:", t.precision, "not supported, using", m, "instead.");
        var v = e.getRenderTarget();
        return {
          shaderID: u,
          precision: m,
          supportsVertexTextures: n.vertexTextures,
          outputEncoding: o(v ? v.texture : null, e.gammaOutput),
          map: !!t.map,
          mapEncoding: o(t.map, e.gammaInput),
          envMap: !!t.envMap,
          envMapMode: t.envMap && t.envMap.mapping,
          envMapEncoding: o(t.envMap, e.gammaInput),
          envMapCubeUV: !!t.envMap && (t.envMap.mapping === oe || t.envMap.mapping === se),
          lightMap: !!t.lightMap,
          aoMap: !!t.aoMap,
          emissiveMap: !!t.emissiveMap,
          emissiveMapEncoding: o(t.emissiveMap, e.gammaInput),
          bumpMap: !!t.bumpMap,
          normalMap: !!t.normalMap,
          objectSpaceNormalMap: t.normalMapType === bt,
          displacementMap: !!t.displacementMap,
          roughnessMap: !!t.roughnessMap,
          metalnessMap: !!t.metalnessMap,
          specularMap: !!t.specularMap,
          alphaMap: !!t.alphaMap,
          gradientMap: !!t.gradientMap,
          combine: t.combine,
          vertexColors: t.vertexColors,
          fog: !!s,
          useFog: t.fog,
          fogExp: s && s.isFogExp2,
          flatShading: t.flatShading,
          sizeAttenuation: t.sizeAttenuation,
          logarithmicDepthBuffer: n.logarithmicDepthBuffer,
          skinning: t.skinning && f > 0,
          maxBones: f,
          useVertexTexture: n.floatVertexTextures,
          morphTargets: t.morphTargets,
          morphNormals: t.morphNormals,
          maxMorphTargets: e.maxMorphTargets,
          maxMorphNormals: e.maxMorphNormals,
          numDirLights: i.directional.length,
          numPointLights: i.point.length,
          numSpotLights: i.spot.length,
          numRectAreaLights: i.rectArea.length,
          numHemiLights: i.hemi.length,
          numClippingPlanes: c,
          numClipIntersection: h,
          dithering: t.dithering,
          shadowMapEnabled: e.shadowMap.enabled && l.receiveShadow && a.length > 0,
          shadowMapType: e.shadowMap.type,
          toneMapping: e.toneMapping,
          physicallyCorrectLights: e.physicallyCorrectLights,
          premultipliedAlpha: t.premultipliedAlpha,
          alphaTest: t.alphaTest,
          doubleSided: t.side === p,
          flipSided: t.side === d,
          depthPacking: void 0 !== t.depthPacking && t.depthPacking
        }
      }, this.getProgramCode = function (t, n) {
        var i = [];
        if (n.shaderID ? i.push(n.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
          for (var r in t.defines) i.push(r), i.push(t.defines[r]);
        for (var o = 0; o < a.length; o++) i.push(n[a[o]]);
        return i.push(t.onBeforeCompile.toString()), i.push(e.gammaOutput), i.join()
      }, this.acquireProgram = function (r, a, o, s) {
        for (var c, h = 0, l = i.length; h < l; h++) {
          var u = i[h];
          if (u.code === s) {
            ++(c = u).usedTimes;
            break
          }
        }
        return void 0 === c && (c = new Ai(e, t, s, r, a, o, n), i.push(c)), c
      }, this.releaseProgram = function (e) {
        if (0 == --e.usedTimes) {
          var t = i.indexOf(e);
          i[t] = i[i.length - 1], i.pop(), e.destroy()
        }
      }, this.programs = i
    }

    function Ri(e, t) {
      return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program && t.program && e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
    }

    function Pi(e, t) {
      return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
    }

    function Ci() {
      var e = {};
      return {
        get: function (t, n) {
          var i = t.id + "," + n.id,
            r = e[i];
          return void 0 === r && (r = new function () {
            var e = [],
              t = 0,
              n = [],
              i = [];
            return {
              opaque: n,
              transparent: i,
              init: function () {
                t = 0, n.length = 0, i.length = 0
              },
              push: function (r, a, o, s, c) {
                var h = e[t];
                void 0 === h ? (h = {
                  id: r.id,
                  object: r,
                  geometry: a,
                  material: o,
                  program: o.program,
                  renderOrder: r.renderOrder,
                  z: s,
                  group: c
                }, e[t] = h) : (h.id = r.id, h.object = r, h.geometry = a, h.material = o, h.program = o.program, h.renderOrder = r.renderOrder, h.z = s, h.group = c), (!0 === o.transparent ? i : n).push(h), t++
              },
              sort: function () {
                n.length > 1 && n.sort(Ri), i.length > 1 && i.sort(Pi)
              }
            }
          }, e[i] = r), r
        },
        dispose: function () {
          e = {}
        }
      }
    }
    var Oi, Ii = 0;

    function Di() {
      var e = new function () {
          var e = {};
          return {
            get: function (t) {
              if (void 0 !== e[t.id]) return e[t.id];
              var n;
              switch (t.type) {
                case "DirectionalLight":
                  n = {
                    direction: new St,
                    color: new kt,
                    shadow: !1,
                    shadowBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Et
                  };
                  break;
                case "SpotLight":
                  n = {
                    position: new St,
                    direction: new St,
                    color: new kt,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0,
                    shadow: !1,
                    shadowBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Et
                  };
                  break;
                case "PointLight":
                  n = {
                    position: new St,
                    color: new kt,
                    distance: 0,
                    decay: 0,
                    shadow: !1,
                    shadowBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Et,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                  };
                  break;
                case "HemisphereLight":
                  n = {
                    direction: new St,
                    skyColor: new kt,
                    groundColor: new kt
                  };
                  break;
                case "RectAreaLight":
                  n = {
                    color: new kt,
                    position: new St,
                    halfWidth: new St,
                    halfHeight: new St
                  }
              }
              return e[t.id] = n, n
            }
          }
        },
        t = {
          id: Ii++,
          hash: {
            stateID: -1,
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            shadowsLength: -1
          },
          ambient: [0, 0, 0],
          directional: [],
          directionalShadowMap: [],
          directionalShadowMatrix: [],
          spot: [],
          spotShadowMap: [],
          spotShadowMatrix: [],
          rectArea: [],
          point: [],
          pointShadowMap: [],
          pointShadowMatrix: [],
          hemi: []
        },
        n = new St,
        i = new Mt,
        r = new Mt;
      return {
        setup: function (a, o, s) {
          for (var c = 0, h = 0, l = 0, u = 0, d = 0, p = 0, f = 0, m = 0, v = s.matrixWorldInverse, g = 0, y = a.length; g < y; g++) {
            var x = a[g],
              w = x.color,
              b = x.intensity,
              _ = x.distance,
              E = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
            if (x.isAmbientLight) c += w.r * b, h += w.g * b, l += w.b * b;
            else if (x.isDirectionalLight) {
              if ((T = e.get(x)).color.copy(x.color).multiplyScalar(x.intensity), T.direction.setFromMatrixPosition(x.matrixWorld), n.setFromMatrixPosition(x.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(v), T.shadow = x.castShadow, x.castShadow) {
                var M = x.shadow;
                T.shadowBias = M.bias, T.shadowRadius = M.radius, T.shadowMapSize = M.mapSize
              }
              t.directionalShadowMap[u] = E, t.directionalShadowMatrix[u] = x.shadow.matrix, t.directional[u] = T, u++
            } else if (x.isSpotLight)(T = e.get(x)).position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), T.color.copy(w).multiplyScalar(b), T.distance = _, T.direction.setFromMatrixPosition(x.matrixWorld), n.setFromMatrixPosition(x.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(v), T.coneCos = Math.cos(x.angle), T.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), T.decay = 0 === x.distance ? 0 : x.decay, T.shadow = x.castShadow, x.castShadow && (M = x.shadow, T.shadowBias = M.bias, T.shadowRadius = M.radius, T.shadowMapSize = M.mapSize), t.spotShadowMap[p] = E, t.spotShadowMatrix[p] = x.shadow.matrix, t.spot[p] = T, p++;
            else if (x.isRectAreaLight)(T = e.get(x)).color.copy(w).multiplyScalar(b), T.position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), r.identity(), i.copy(x.matrixWorld), i.premultiply(v), r.extractRotation(i), T.halfWidth.set(.5 * x.width, 0, 0), T.halfHeight.set(0, .5 * x.height, 0), T.halfWidth.applyMatrix4(r), T.halfHeight.applyMatrix4(r), t.rectArea[f] = T, f++;
            else if (x.isPointLight)(T = e.get(x)).position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), T.color.copy(x.color).multiplyScalar(x.intensity), T.distance = x.distance, T.decay = 0 === x.distance ? 0 : x.decay, T.shadow = x.castShadow, x.castShadow && (M = x.shadow, T.shadowBias = M.bias, T.shadowRadius = M.radius, T.shadowMapSize = M.mapSize, T.shadowCameraNear = M.camera.near, T.shadowCameraFar = M.camera.far), t.pointShadowMap[d] = E, t.pointShadowMatrix[d] = x.shadow.matrix, t.point[d] = T, d++;
            else if (x.isHemisphereLight) {
              var T;
              (T = e.get(x)).direction.setFromMatrixPosition(x.matrixWorld), T.direction.transformDirection(v), T.direction.normalize(), T.skyColor.copy(x.color).multiplyScalar(b), T.groundColor.copy(x.groundColor).multiplyScalar(b), t.hemi[m] = T, m++
            }
          }
          t.ambient[0] = c, t.ambient[1] = h, t.ambient[2] = l, t.directional.length = u, t.spot.length = p, t.rectArea.length = f, t.point.length = d, t.hemi.length = m, t.hash.stateID = t.id, t.hash.directionalLength = u, t.hash.pointLength = d, t.hash.spotLength = p, t.hash.rectAreaLength = f, t.hash.hemiLength = m, t.hash.shadowsLength = o.length
        },
        state: t
      }
    }

    function Ni() {
      var e = new Di,
        t = [],
        n = [];
      return {
        init: function () {
          t.length = 0, n.length = 0
        },
        state: {
          lightsArray: t,
          shadowsArray: n,
          lights: e
        },
        setupLights: function (i) {
          e.setup(t, n, i)
        },
        pushLight: function (e) {
          t.push(e)
        },
        pushShadow: function (e) {
          n.push(e)
        }
      }
    }

    function Ui(e) {
      _n.call(this), this.type = "MeshDepthMaterial", this.depthPacking = yt, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(e)
    }

    function Bi(e) {
      _n.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new St, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(e)
    }

    function Fi(e, t, n) {
      for (var i = new Ft, r = new Mt, a = new Et, o = new Et(n, n), s = new St, c = new St, l = 1, f = 2, m = 1 + (l | f), v = new Array(m), g = new Array(m), y = {}, x = {
          0: d,
          1: u,
          2: p
        }, w = [new St(1, 0, 0), new St(-1, 0, 0), new St(0, 0, 1), new St(0, 0, -1), new St(0, 1, 0), new St(0, -1, 0)], b = [new St(0, 1, 0), new St(0, 1, 0), new St(0, 1, 0), new St(0, 1, 0), new St(0, 0, 1), new St(0, 0, -1)], _ = [new Ct, new Ct, new Ct, new Ct, new Ct, new Ct], E = 0; E !== m; ++E) {
        var M = 0 != (E & l),
          T = 0 != (E & f),
          S = new Ui({
            depthPacking: xt,
            morphTargets: M,
            skinning: T
          });
        v[E] = S;
        var A = new Bi({
          morphTargets: M,
          skinning: T
        });
        g[E] = A
      }
      var L = this;

      function R(t, n, i, r, a, o) {
        var s = t.geometry,
          c = null,
          h = v,
          u = t.customDepthMaterial;
        if (i && (h = g, u = t.customDistanceMaterial), u) c = u;
        else {
          var d = !1;
          n.morphTargets && (s && s.isBufferGeometry ? d = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (d = s.morphTargets && s.morphTargets.length > 0)), t.isSkinnedMesh && !1 === n.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t);
          var p = t.isSkinnedMesh && n.skinning,
            m = 0;
          d && (m |= l), p && (m |= f), c = h[m]
        }
        if (e.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
          var w = c.uuid,
            b = n.uuid,
            _ = y[w];
          void 0 === _ && (_ = {}, y[w] = _);
          var E = _[b];
          void 0 === E && (E = c.clone(), _[b] = E), c = E
        }
        return c.visible = n.visible, c.wireframe = n.wireframe, c.side = null != n.shadowSide ? n.shadowSide : x[n.side], c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, i && c.isMeshDistanceMaterial && (c.referencePosition.copy(r), c.nearDistance = a, c.farDistance = o), c
      }

      function P(n, r, a, o) {
        if (!1 !== n.visible) {
          if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && n.castShadow && (!n.frustumCulled || i.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
            var s = t.update(n),
              h = n.material;
            if (Array.isArray(h))
              for (var l = s.groups, u = 0, d = l.length; u < d; u++) {
                var p = l[u],
                  f = h[p.materialIndex];
                if (f && f.visible) {
                  var m = R(n, f, o, c, a.near, a.far);
                  e.renderBufferDirect(a, null, s, m, n, p)
                }
              } else if (h.visible) {
                m = R(n, h, o, c, a.near, a.far);
                e.renderBufferDirect(a, null, s, m, n, null)
              }
          }
          for (var v = n.children, g = 0, y = v.length; g < y; g++) P(v[g], r, a, o)
        }
      }
      this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = h, this.render = function (t, n, h) {
        if (!1 !== L.enabled && (!1 !== L.autoUpdate || !1 !== L.needsUpdate) && 0 !== t.length) {
          var l, u = e.context,
            d = e.state;
          d.disable(u.BLEND), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
          for (var p = 0, f = t.length; p < f; p++) {
            var m = t[p],
              v = m.shadow,
              g = m && m.isPointLight;
            if (void 0 !== v) {
              var y = v.camera;
              if (a.copy(v.mapSize), a.min(o), g) {
                var x = a.x,
                  E = a.y;
                _[0].set(2 * x, E, x, E), _[1].set(0, E, x, E), _[2].set(3 * x, E, x, E), _[3].set(x, E, x, E), _[4].set(3 * x, 0, x, E), _[5].set(x, 0, x, E), a.x *= 4, a.y *= 2
              }
              if (null === v.map) {
                var M = {
                  minFilter: ue,
                  magFilter: ue,
                  format: Ce
                };
                v.map = new Ot(a.x, a.y, M), v.map.texture.name = m.name + ".shadowMap", y.updateProjectionMatrix()
              }
              v.isSpotLightShadow && v.update(m);
              var T = v.map,
                S = v.matrix;
              c.setFromMatrixPosition(m.matrixWorld), y.position.copy(c), g ? (l = 6, S.makeTranslation(-c.x, -c.y, -c.z)) : (l = 1, s.setFromMatrixPosition(m.target.matrixWorld), y.lookAt(s), y.updateMatrixWorld(), S.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), S.multiply(y.projectionMatrix), S.multiply(y.matrixWorldInverse)), e.setRenderTarget(T), e.clear();
              for (var A = 0; A < l; A++) {
                if (g) {
                  s.copy(y.position), s.add(w[A]), y.up.copy(b[A]), y.lookAt(s), y.updateMatrixWorld();
                  var R = _[A];
                  d.viewport(R)
                }
                r.multiplyMatrices(y.projectionMatrix, y.matrixWorldInverse), i.setFromMatrix(r), P(n, h, y, g)
              }
            } else console.warn("THREE.WebGLShadowMap:", m, "has no shadow.")
          }
          L.needsUpdate = !1
        }
      }
    }

    function Hi(e, t, n, i, r, a, o) {
      var s, c = {};

      function h(e, t) {
        if (e.width > t || e.height > t) {
          if ("data" in e) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + e.width + "x" + e.height + ").");
          var n = t / Math.max(e.width, e.height),
            i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
          return i.width = Math.floor(e.width * n), i.height = Math.floor(e.height * n), i.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + i.width + "x" + i.height), i
        }
        return e
      }

      function l(e) {
        return _t.isPowerOfTwo(e.width) && _t.isPowerOfTwo(e.height)
      }

      function u(e, t) {
        return e.generateMipmaps && t && e.minFilter !== ue && e.minFilter !== fe
      }

      function d(t, n, r, a) {
        e.generateMipmap(t), i.get(n).__maxMipLevel = Math.log(Math.max(r, a)) * Math.LOG2E
      }

      function p(t, n) {
        if (!r.isWebGL2) return t;
        if (t === e.RGB) {
          if (n === e.FLOAT) return e.RGB32F;
          if (n === e.HALF_FLOAT) return e.RGB16F;
          if (n === e.UNSIGNED_BYTE) return e.RGB8
        }
        if (t === e.RGBA) {
          if (n === e.FLOAT) return e.RGBA32F;
          if (n === e.HALF_FLOAT) return e.RGBA16F;
          if (n === e.UNSIGNED_BYTE) return e.RGBA8
        }
        return t
      }

      function f(t) {
        return t === ue || t === de || t === pe ? e.NEAREST : e.LINEAR
      }

      function m(t) {
        var n = t.target;
        n.removeEventListener("dispose", m),
          function (t) {
            var n = i.get(t);
            if (t.image && n.__image__webglTextureCube) e.deleteTexture(n.__image__webglTextureCube);
            else {
              if (void 0 === n.__webglInit) return;
              e.deleteTexture(n.__webglTexture)
            }
            i.remove(t)
          }(n), n.isVideoTexture && delete c[n.id], o.memory.textures--
      }

      function v(t) {
        var n = t.target;
        n.removeEventListener("dispose", v),
          function (t) {
            var n = i.get(t),
              r = i.get(t.texture);
            if (!t) return;
            void 0 !== r.__webglTexture && e.deleteTexture(r.__webglTexture);
            t.depthTexture && t.depthTexture.dispose();
            if (t.isWebGLRenderTargetCube)
              for (var a = 0; a < 6; a++) e.deleteFramebuffer(n.__webglFramebuffer[a]), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[a]);
            else e.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer);
            i.remove(t.texture), i.remove(t)
          }(n), o.memory.textures--
      }

      function g(t, f) {
        var v = i.get(t);
        if (t.isVideoTexture && function (e) {
            var t = e.id,
              n = o.render.frame;
            c[t] !== n && (c[t] = n, e.update())
          }(t), t.version > 0 && v.__version !== t.version) {
          var g = t.image;
          if (void 0 === g) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
          else {
            if (!1 !== g.complete) return void

            function (t, i, c) {
              void 0 === t.__webglInit && (t.__webglInit = !0, i.addEventListener("dispose", m), t.__webglTexture = e.createTexture(), o.memory.textures++);
              n.activeTexture(e.TEXTURE0 + c), n.bindTexture(e.TEXTURE_2D, t.__webglTexture), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, i.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, i.unpackAlignment);
              var f = h(i.image, r.maxTextureSize);
              (function (e) {
                return !r.isWebGL2 && (e.wrapS !== he || e.wrapT !== he || e.minFilter !== ue && e.minFilter !== fe)
              })(i) && !1 === l(f) && (f = function (e) {
                return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap ? (void 0 === s && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), s.width = _t.floorPowerOfTwo(e.width), s.height = _t.floorPowerOfTwo(e.height), s.getContext("2d").drawImage(e, 0, 0, s.width, s.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + s.width + "x" + s.height), s) : e
              }(f));
              var v = l(f),
                g = a.convert(i.format),
                x = a.convert(i.type),
                w = p(g, x);
              y(e.TEXTURE_2D, i, v);
              var b, _ = i.mipmaps;
              if (i.isDepthTexture) {
                if (w = e.DEPTH_COMPONENT, i.type === Ee) {
                  if (!r.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
                  w = e.DEPTH_COMPONENT32F
                } else r.isWebGL2 && (w = e.DEPTH_COMPONENT16);
                i.format === Ne && w === e.DEPTH_COMPONENT && i.type !== we && i.type !== _e && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = we, x = a.convert(i.type)), i.format === Ue && (w = e.DEPTH_STENCIL, i.type !== Le && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = Le, x = a.convert(i.type))), n.texImage2D(e.TEXTURE_2D, 0, w, f.width, f.height, 0, g, x, null)
              } else if (i.isDataTexture)
                if (_.length > 0 && v) {
                  for (var E = 0, M = _.length; E < M; E++) b = _[E], n.texImage2D(e.TEXTURE_2D, E, w, b.width, b.height, 0, g, x, b.data);
                  i.generateMipmaps = !1, t.__maxMipLevel = _.length - 1
                } else n.texImage2D(e.TEXTURE_2D, 0, w, f.width, f.height, 0, g, x, f.data), t.__maxMipLevel = 0;
              else if (i.isCompressedTexture) {
                for (var E = 0, M = _.length; E < M; E++) b = _[E], i.format !== Ce && i.format !== Pe ? n.getCompressedTextureFormats().indexOf(g) > -1 ? n.compressedTexImage2D(e.TEXTURE_2D, E, w, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(e.TEXTURE_2D, E, w, b.width, b.height, 0, g, x, b.data);
                t.__maxMipLevel = _.length - 1
              } else if (_.length > 0 && v) {
                for (var E = 0, M = _.length; E < M; E++) b = _[E], n.texImage2D(e.TEXTURE_2D, E, w, g, x, b);
                i.generateMipmaps = !1, t.__maxMipLevel = _.length - 1
              } else n.texImage2D(e.TEXTURE_2D, 0, w, g, x, f), t.__maxMipLevel = 0;
              u(i, v) && d(e.TEXTURE_2D, i, f.width, f.height);
              t.__version = i.version, i.onUpdate && i.onUpdate(i)
            }(v, t, f);
            console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
          }
        }
        n.activeTexture(e.TEXTURE0 + f), n.bindTexture(e.TEXTURE_2D, v.__webglTexture)
      }

      function y(n, o, s) {
        var c;
        if (s ? (e.texParameteri(n, e.TEXTURE_WRAP_S, a.convert(o.wrapS)), e.texParameteri(n, e.TEXTURE_WRAP_T, a.convert(o.wrapT)), e.texParameteri(n, e.TEXTURE_MAG_FILTER, a.convert(o.magFilter)), e.texParameteri(n, e.TEXTURE_MIN_FILTER, a.convert(o.minFilter))) : (e.texParameteri(n, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(n, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), o.wrapS === he && o.wrapT === he || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, e.TEXTURE_MAG_FILTER, f(o.magFilter)), e.texParameteri(n, e.TEXTURE_MIN_FILTER, f(o.minFilter)), o.minFilter !== ue && o.minFilter !== fe && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), c = t.get("EXT_texture_filter_anisotropic")) {
          if (o.type === Ee && null === t.get("OES_texture_float_linear")) return;
          if (o.type === Me && null === (r.isWebGL2 || t.get("OES_texture_half_float_linear"))) return;
          (o.anisotropy > 1 || i.get(o).__currentAnisotropy) && (e.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), i.get(o).__currentAnisotropy = o.anisotropy)
        }
      }

      function x(t, r, o, s) {
        var c = a.convert(r.texture.format),
          h = a.convert(r.texture.type),
          l = p(c, h);
        n.texImage2D(s, 0, l, r.width, r.height, 0, c, h, null), e.bindFramebuffer(e.FRAMEBUFFER, t), e.framebufferTexture2D(e.FRAMEBUFFER, o, s, i.get(r.texture).__webglTexture, 0), e.bindFramebuffer(e.FRAMEBUFFER, null)
      }

      function w(t, n) {
        e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer && !n.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : n.depthBuffer && n.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, n.width, n.height), e.bindRenderbuffer(e.RENDERBUFFER, null)
      }

      function b(t) {
        var n = i.get(t),
          r = !0 === t.isWebGLRenderTargetCube;
        if (t.depthTexture) {
          if (r) throw new Error("target.depthTexture not supported in Cube render targets");
          ! function (t, n) {
            if (n && n.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
            if (e.bindFramebuffer(e.FRAMEBUFFER, t), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), g(n.depthTexture, 0);
            var r = i.get(n.depthTexture).__webglTexture;
            if (n.depthTexture.format === Ne) e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, r, 0);
            else {
              if (n.depthTexture.format !== Ue) throw new Error("Unknown depthTexture format");
              e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, r, 0)
            }
          }(n.__webglFramebuffer, t)
        } else if (r) {
          n.__webglDepthbuffer = [];
          for (var a = 0; a < 6; a++) e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[a]), n.__webglDepthbuffer[a] = e.createRenderbuffer(), w(n.__webglDepthbuffer[a], t)
        } else e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = e.createRenderbuffer(), w(n.__webglDepthbuffer, t);
        e.bindFramebuffer(e.FRAMEBUFFER, null)
      }
      this.setTexture2D = g, this.setTextureCube = function (t, s) {
        var c = i.get(t);
        if (6 === t.image.length)
          if (t.version > 0 && c.__version !== t.version) {
            c.__image__webglTextureCube || (t.addEventListener("dispose", m), c.__image__webglTextureCube = e.createTexture(), o.memory.textures++), n.activeTexture(e.TEXTURE0 + s), n.bindTexture(e.TEXTURE_CUBE_MAP, c.__image__webglTextureCube), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
            for (var f = t && t.isCompressedTexture, v = t.image[0] && t.image[0].isDataTexture, g = [], x = 0; x < 6; x++) g[x] = f || v ? v ? t.image[x].image : t.image[x] : h(t.image[x], r.maxCubemapSize);
            var w = g[0],
              b = l(w),
              _ = a.convert(t.format),
              E = a.convert(t.type),
              M = p(_, E);
            for (y(e.TEXTURE_CUBE_MAP, t, b), x = 0; x < 6; x++)
              if (f)
                for (var T, S = g[x].mipmaps, A = 0, L = S.length; A < L; A++) T = S[A], t.format !== Ce && t.format !== Pe ? n.getCompressedTextureFormats().indexOf(_) > -1 ? n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + x, A, M, T.width, T.height, 0, T.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + x, A, M, T.width, T.height, 0, _, E, T.data);
              else v ? n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + x, 0, M, g[x].width, g[x].height, 0, _, E, g[x].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + x, 0, M, _, E, g[x]);
            c.__maxMipLevel = f ? S.length - 1 : 0, u(t, b) && d(e.TEXTURE_CUBE_MAP, t, w.width, w.height), c.__version = t.version, t.onUpdate && t.onUpdate(t)
          } else n.activeTexture(e.TEXTURE0 + s), n.bindTexture(e.TEXTURE_CUBE_MAP, c.__image__webglTextureCube)
      }, this.setTextureCubeDynamic = function (t, r) {
        n.activeTexture(e.TEXTURE0 + r), n.bindTexture(e.TEXTURE_CUBE_MAP, i.get(t).__webglTexture)
      }, this.setupRenderTarget = function (t) {
        var r = i.get(t),
          a = i.get(t.texture);
        t.addEventListener("dispose", v), a.__webglTexture = e.createTexture(), o.memory.textures++;
        var s = !0 === t.isWebGLRenderTargetCube,
          c = l(t);
        if (s) {
          r.__webglFramebuffer = [];
          for (var h = 0; h < 6; h++) r.__webglFramebuffer[h] = e.createFramebuffer()
        } else r.__webglFramebuffer = e.createFramebuffer();
        if (s) {
          for (n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture), y(e.TEXTURE_CUBE_MAP, t.texture, c), h = 0; h < 6; h++) x(r.__webglFramebuffer[h], t, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + h);
          u(t.texture, c) && d(e.TEXTURE_CUBE_MAP, t.texture, t.width, t.height), n.bindTexture(e.TEXTURE_CUBE_MAP, null)
        } else n.bindTexture(e.TEXTURE_2D, a.__webglTexture), y(e.TEXTURE_2D, t.texture, c), x(r.__webglFramebuffer, t, e.COLOR_ATTACHMENT0, e.TEXTURE_2D), u(t.texture, c) && d(e.TEXTURE_2D, t.texture, t.width, t.height), n.bindTexture(e.TEXTURE_2D, null);
        t.depthBuffer && b(t)
      }, this.updateRenderTargetMipmap = function (t) {
        var r = t.texture;
        if (u(r, l(t))) {
          var a = t.isWebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D,
            o = i.get(r).__webglTexture;
          n.bindTexture(a, o), d(a, r, t.width, t.height), n.bindTexture(a, null)
        }
      }
    }

    function zi(e, t, n) {
      return {
        convert: function (i) {
          var r;
          if (i === ce) return e.REPEAT;
          if (i === he) return e.CLAMP_TO_EDGE;
          if (i === le) return e.MIRRORED_REPEAT;
          if (i === ue) return e.NEAREST;
          if (i === de) return e.NEAREST_MIPMAP_NEAREST;
          if (i === pe) return e.NEAREST_MIPMAP_LINEAR;
          if (i === fe) return e.LINEAR;
          if (i === me) return e.LINEAR_MIPMAP_NEAREST;
          if (i === ve) return e.LINEAR_MIPMAP_LINEAR;
          if (i === ge) return e.UNSIGNED_BYTE;
          if (i === Te) return e.UNSIGNED_SHORT_4_4_4_4;
          if (i === Se) return e.UNSIGNED_SHORT_5_5_5_1;
          if (i === Ae) return e.UNSIGNED_SHORT_5_6_5;
          if (i === ye) return e.BYTE;
          if (i === xe) return e.SHORT;
          if (i === we) return e.UNSIGNED_SHORT;
          if (i === be) return e.INT;
          if (i === _e) return e.UNSIGNED_INT;
          if (i === Ee) return e.FLOAT;
          if (i === Me) {
            if (n.isWebGL2) return e.HALF_FLOAT;
            if (null !== (r = t.get("OES_texture_half_float"))) return r.HALF_FLOAT_OES
          }
          if (i === Re) return e.ALPHA;
          if (i === Pe) return e.RGB;
          if (i === Ce) return e.RGBA;
          if (i === Oe) return e.LUMINANCE;
          if (i === Ie) return e.LUMINANCE_ALPHA;
          if (i === Ne) return e.DEPTH_COMPONENT;
          if (i === Ue) return e.DEPTH_STENCIL;
          if (i === E) return e.FUNC_ADD;
          if (i === M) return e.FUNC_SUBTRACT;
          if (i === T) return e.FUNC_REVERSE_SUBTRACT;
          if (i === L) return e.ZERO;
          if (i === R) return e.ONE;
          if (i === P) return e.SRC_COLOR;
          if (i === C) return e.ONE_MINUS_SRC_COLOR;
          if (i === O) return e.SRC_ALPHA;
          if (i === I) return e.ONE_MINUS_SRC_ALPHA;
          if (i === D) return e.DST_ALPHA;
          if (i === N) return e.ONE_MINUS_DST_ALPHA;
          if (i === U) return e.DST_COLOR;
          if (i === B) return e.ONE_MINUS_DST_COLOR;
          if (i === F) return e.SRC_ALPHA_SATURATE;
          if ((i === Be || i === Fe || i === He || i === ze) && null !== (r = t.get("WEBGL_compressed_texture_s3tc"))) {
            if (i === Be) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (i === Fe) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (i === He) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (i === ze) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
          }
          if ((i === Ge || i === ke || i === je || i === Ve) && null !== (r = t.get("WEBGL_compressed_texture_pvrtc"))) {
            if (i === Ge) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (i === ke) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (i === je) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (i === Ve) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
          }
          if (i === We && null !== (r = t.get("WEBGL_compressed_texture_etc1"))) return r.COMPRESSED_RGB_ETC1_WEBGL;
          if ((i === Xe || i === Ye || i === qe || i === Ze || i === Je || i === Qe || i === Ke || i === $e || i === et || i === tt || i === nt || i === it || i === rt || i === at) && null !== (r = t.get("WEBGL_compressed_texture_astc"))) return i;
          if (i === S || i === A) {
            if (n.isWebGL2) {
              if (i === S) return e.MIN;
              if (i === A) return e.MAX
            }
            if (null !== (r = t.get("EXT_blend_minmax"))) {
              if (i === S) return r.MIN_EXT;
              if (i === A) return r.MAX_EXT
            }
          }
          if (i === Le) {
            if (n.isWebGL2) return e.UNSIGNED_INT_24_8;
            if (null !== (r = t.get("WEBGL_depth_texture"))) return r.UNSIGNED_INT_24_8_WEBGL
          }
          return 0
        }
      }
    }

    function Gi() {
      Jt.call(this), this.type = "Group"
    }

    function ki(e, t, n, i) {
      Qt.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== e ? e : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== t ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function ji(e) {
      ki.call(this), this.cameras = e || []
    }

    function Vi(e) {
      var t = this,
        n = null,
        i = null,
        r = null,
        a = [],
        o = new Mt,
        s = new Mt;
      "undefined" != typeof window && "VRFrameData" in window && (i = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", g, !1));
      var c = new Mt,
        h = new Tt,
        l = new St,
        u = new ki;
      u.bounds = new Ct(0, 0, .5, 1), u.layers.enable(1);
      var d = new ki;
      d.bounds = new Ct(.5, 0, .5, 1), d.layers.enable(2);
      var p, f, m = new ji([u, d]);

      function v() {
        return null !== n && !0 === n.isPresenting
      }

      function g() {
        if (v()) {
          var i = n.getEyeParameters("left"),
            r = i.renderWidth,
            a = i.renderHeight;
          f = e.getPixelRatio(), p = e.getSize(), e.setDrawingBufferSize(2 * r, a, 1), w.start()
        } else t.enabled && (e.setDrawingBufferSize(p.width, p.height, f), w.stop())
      }
      m.layers.enable(1), m.layers.enable(2);
      var y = [];

      function x(e) {
        for (var t = navigator.getGamepads && navigator.getGamepads(), n = 0, i = 0, r = t.length; n < r; n++) {
          var a = t[n];
          if (a && ("Daydream Controller" === a.id || "Gear VR Controller" === a.id || "Oculus Go Controller" === a.id || "OpenVR Gamepad" === a.id || a.id.startsWith("Oculus Touch") || a.id.startsWith("Spatial Controller"))) {
            if (i === e) return a;
            i++
          }
        }
      }
      this.enabled = !1, this.userHeight = 1.6, this.getController = function (e) {
        var t = a[e];
        return void 0 === t && ((t = new Gi).matrixAutoUpdate = !1, t.visible = !1, a[e] = t), t
      }, this.getDevice = function () {
        return n
      }, this.setDevice = function (e) {
        void 0 !== e && (n = e), w.setContext(e)
      }, this.setPoseTarget = function (e) {
        void 0 !== e && (r = e)
      }, this.getCamera = function (e) {
        if (null === n) return e.position.set(0, t.userHeight, 0), e;
        n.depthNear = e.near, n.depthFar = e.far, n.getFrameData(i);
        var p = n.stageParameters;
        p ? o.fromArray(p.sittingToStandingTransform) : o.makeTranslation(0, t.userHeight, 0);
        var f = i.pose,
          v = null !== r ? r : e;
        if (v.matrix.copy(o), v.matrix.decompose(v.position, v.quaternion, v.scale), null !== f.orientation && (h.fromArray(f.orientation), v.quaternion.multiply(h)), null !== f.position && (h.setFromRotationMatrix(o), l.fromArray(f.position), l.applyQuaternion(h), v.position.add(l)), v.updateMatrixWorld(), !1 === n.isPresenting) return e;
        u.near = e.near, d.near = e.near, u.far = e.far, d.far = e.far, m.matrixWorld.copy(e.matrixWorld), m.matrixWorldInverse.copy(e.matrixWorldInverse), u.matrixWorldInverse.fromArray(i.leftViewMatrix), d.matrixWorldInverse.fromArray(i.rightViewMatrix), s.getInverse(o), u.matrixWorldInverse.multiply(s), d.matrixWorldInverse.multiply(s);
        var g = v.parent;
        null !== g && (c.getInverse(g.matrixWorld), u.matrixWorldInverse.multiply(c), d.matrixWorldInverse.multiply(c)), u.matrixWorld.getInverse(u.matrixWorldInverse), d.matrixWorld.getInverse(d.matrixWorldInverse), u.projectionMatrix.fromArray(i.leftProjectionMatrix), d.projectionMatrix.fromArray(i.rightProjectionMatrix), m.projectionMatrix.copy(u.projectionMatrix);
        var w = n.getLayers();
        if (w.length) {
          var b = w[0];
          null !== b.leftBounds && 4 === b.leftBounds.length && u.bounds.fromArray(b.leftBounds), null !== b.rightBounds && 4 === b.rightBounds.length && d.bounds.fromArray(b.rightBounds)
        }
        return function () {
          for (var e = 0; e < a.length; e++) {
            var t = a[e],
              n = x(e);
            if (void 0 !== n && void 0 !== n.pose) {
              if (null === n.pose) return;
              var i = n.pose;
              !1 === i.hasPosition && t.position.set(.2, -.6, -.05), null !== i.position && t.position.fromArray(i.position), null !== i.orientation && t.quaternion.fromArray(i.orientation), t.matrix.compose(t.position, t.quaternion, t.scale), t.matrix.premultiply(o), t.matrix.decompose(t.position, t.quaternion, t.scale), t.matrixWorldNeedsUpdate = !0, t.visible = !0;
              var r = "Daydream Controller" === n.id ? 0 : 1;
              y[e] !== n.buttons[r].pressed && (y[e] = n.buttons[r].pressed, !0 === y[e] ? t.dispatchEvent({
                type: "selectstart"
              }) : (t.dispatchEvent({
                type: "selectend"
              }), t.dispatchEvent({
                type: "select"
              })))
            } else t.visible = !1
          }
        }(), m
      }, this.getStandingMatrix = function () {
        return o
      }, this.isPresenting = v;
      var w = new Wt;
      this.setAnimationLoop = function (e) {
        w.setAnimationLoop(e)
      }, this.submitFrame = function () {
        v() && n.submitFrame()
      }, this.dispose = function () {
        "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", g)
      }
    }

    function Wi(e) {
      console.log("THREE.WebGLRenderer", a);
      var t = void 0 !== (e = e || {}).canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        n = void 0 !== e.context ? e.context : null,
        i = void 0 !== e.alpha && e.alpha,
        r = void 0 === e.depth || e.depth,
        h = void 0 === e.stencil || e.stencil,
        l = void 0 !== e.antialias && e.antialias,
        u = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
        f = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
        m = void 0 !== e.powerPreference ? e.powerPreference : "default",
        v = null,
        E = null;
      this.domElement = t, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Q, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
      var M, T, S, A, L, R, P, C, O, I, D, N, U, B, F, Y, q, Z, J = this,
        K = !1,
        $ = null,
        ee = null,
        te = null,
        ne = -1,
        ie = {
          geometry: null,
          program: null,
          wireframe: !1
        },
        re = null,
        ae = null,
        oe = new Ct,
        se = new Ct,
        ce = null,
        he = 0,
        le = t.width,
        ue = t.height,
        de = 1,
        pe = new Ct(0, 0, le, ue),
        fe = new Ct(0, 0, le, ue),
        me = !1,
        ve = new Ft,
        ye = new function () {
          var e = this,
            t = null,
            n = 0,
            i = !1,
            r = !1,
            a = new Bt,
            o = new At,
            s = {
              value: null,
              needsUpdate: !1
            };

          function c() {
            s.value !== t && (s.value = t, s.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
          }

          function h(t, n, i, r) {
            var c = null !== t ? t.length : 0,
              h = null;
            if (0 !== c) {
              if (h = s.value, !0 !== r || null === h) {
                var l = i + 4 * c,
                  u = n.matrixWorldInverse;
                o.getNormalMatrix(u), (null === h || h.length < l) && (h = new Float32Array(l));
                for (var d = 0, p = i; d !== c; ++d, p += 4) a.copy(t[d]).applyMatrix4(u, o), a.normal.toArray(h, p), h[p + 3] = a.constant
              }
              s.value = h, s.needsUpdate = !0
            }
            return e.numPlanes = c, h
          }
          this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function (e, r, a) {
            var o = 0 !== e.length || r || 0 !== n || i;
            return i = r, t = h(e, a, 0), n = e.length, o
          }, this.beginShadows = function () {
            r = !0, h(null)
          }, this.endShadows = function () {
            r = !1, c()
          }, this.setState = function (e, a, o, l, u, d) {
            if (!i || null === e || 0 === e.length || r && !o) r ? h(null) : c();
            else {
              var p = r ? 0 : n,
                f = 4 * p,
                m = u.clippingState || null;
              s.value = m, m = h(e, l, f, d);
              for (var v = 0; v !== f; ++v) m[v] = t[v];
              u.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += p
            }
          }
        },
        xe = !1,
        we = !1,
        be = new Mt,
        _e = new St;

      function Te() {
        return null === ee ? de : 1
      }
      try {
        var Se = {
          alpha: i,
          depth: r,
          stencil: h,
          antialias: l,
          premultipliedAlpha: u,
          preserveDrawingBuffer: f,
          powerPreference: m
        };
        if (t.addEventListener("webglcontextlost", Pe, !1), t.addEventListener("webglcontextrestored", Oe, !1), null === (M = n || t.getContext("webgl", Se) || t.getContext("experimental-webgl", Se))) throw null !== t.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        void 0 === M.getShaderPrecisionFormat && (M.getShaderPrecisionFormat = function () {
          return {
            rangeMin: 1,
            rangeMax: 1,
            precision: 1
          }
        })
      } catch (e) {
        console.error("THREE.WebGLRenderer: " + e.message)
      }

      function Ae() {
        T = new function (e) {
          var t = {};
          return {
            get: function (n) {
              if (void 0 !== t[n]) return t[n];
              var i;
              switch (n) {
                case "WEBGL_depth_texture":
                  i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                  break;
                case "EXT_texture_filter_anisotropic":
                  i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                  break;
                case "WEBGL_compressed_texture_s3tc":
                  i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                  break;
                case "WEBGL_compressed_texture_pvrtc":
                  i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                  break;
                default:
                  i = e.getExtension(n)
              }
              return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = i, i
            }
          }
        }(M), (S = new function (e, t, n) {
          var i;

          function r(t) {
            if ("highp" === t) {
              if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
              t = "mediump"
            }
            return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
          }
          var a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext,
            o = void 0 !== n.precision ? n.precision : "highp",
            s = r(o);
          s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
          var c = !0 === n.logarithmicDepthBuffer,
            h = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
            l = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            u = e.getParameter(e.MAX_TEXTURE_SIZE),
            d = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
            p = e.getParameter(e.MAX_VERTEX_ATTRIBS),
            f = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
            m = e.getParameter(e.MAX_VARYING_VECTORS),
            v = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
            g = l > 0,
            y = a || !!t.get("OES_texture_float");
          return {
            isWebGL2: a,
            getMaxAnisotropy: function () {
              if (void 0 !== i) return i;
              var n = t.get("EXT_texture_filter_anisotropic");
              return i = null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: r,
            precision: o,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: l,
            maxTextureSize: u,
            maxCubemapSize: d,
            maxAttributes: p,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: v,
            vertexTextures: g,
            floatFragmentTextures: y,
            floatVertexTextures: g && y
          }
        }(M, T, e)).isWebGL2 || (T.get("WEBGL_depth_texture"), T.get("OES_texture_float"), T.get("OES_texture_half_float"), T.get("OES_texture_half_float_linear"), T.get("OES_standard_derivatives"), T.get("OES_element_index_uint"), T.get("ANGLE_instanced_arrays")), T.get("OES_texture_float_linear"), Z = new zi(M, T, S), (A = new function (e, t, n, i) {
          var r = new function () {
              var t = !1,
                n = new Ct,
                i = null,
                r = new Ct(0, 0, 0, 0);
              return {
                setMask: function (n) {
                  i === n || t || (e.colorMask(n, n, n, n), i = n)
                },
                setLocked: function (e) {
                  t = e
                },
                setClear: function (t, i, a, o, s) {
                  !0 === s && (t *= o, i *= o, a *= o), n.set(t, i, a, o), !1 === r.equals(n) && (e.clearColor(t, i, a, o), r.copy(n))
                },
                reset: function () {
                  t = !1, i = null, r.set(-1, 0, 0, 0)
                }
              }
            },
            a = new function () {
              var t = !1,
                n = null,
                i = null,
                r = null;
              return {
                setTest: function (t) {
                  t ? ie(e.DEPTH_TEST) : re(e.DEPTH_TEST)
                },
                setMask: function (i) {
                  n === i || t || (e.depthMask(i), n = i)
                },
                setFunc: function (t) {
                  if (i !== t) {
                    if (t) switch (t) {
                      case H:
                        e.depthFunc(e.NEVER);
                        break;
                      case z:
                        e.depthFunc(e.ALWAYS);
                        break;
                      case G:
                        e.depthFunc(e.LESS);
                        break;
                      case k:
                        e.depthFunc(e.LEQUAL);
                        break;
                      case j:
                        e.depthFunc(e.EQUAL);
                        break;
                      case V:
                        e.depthFunc(e.GEQUAL);
                        break;
                      case W:
                        e.depthFunc(e.GREATER);
                        break;
                      case X:
                        e.depthFunc(e.NOTEQUAL);
                        break;
                      default:
                        e.depthFunc(e.LEQUAL)
                    } else e.depthFunc(e.LEQUAL);
                    i = t
                  }
                },
                setLocked: function (e) {
                  t = e
                },
                setClear: function (t) {
                  r !== t && (e.clearDepth(t), r = t)
                },
                reset: function () {
                  t = !1, n = null, i = null, r = null
                }
              }
            },
            h = new function () {
              var t = !1,
                n = null,
                i = null,
                r = null,
                a = null,
                o = null,
                s = null,
                c = null,
                h = null;
              return {
                setTest: function (t) {
                  t ? ie(e.STENCIL_TEST) : re(e.STENCIL_TEST)
                },
                setMask: function (i) {
                  n === i || t || (e.stencilMask(i), n = i)
                },
                setFunc: function (t, n, o) {
                  i === t && r === n && a === o || (e.stencilFunc(t, n, o), i = t, r = n, a = o)
                },
                setOp: function (t, n, i) {
                  o === t && s === n && c === i || (e.stencilOp(t, n, i), o = t, s = n, c = i)
                },
                setLocked: function (e) {
                  t = e
                },
                setClear: function (t) {
                  h !== t && (e.clearStencil(t), h = t)
                },
                reset: function () {
                  t = !1, n = null, i = null, r = null, a = null, o = null, s = null, c = null, h = null
                }
              }
            },
            l = e.getParameter(e.MAX_VERTEX_ATTRIBS),
            u = new Uint8Array(l),
            f = new Uint8Array(l),
            m = new Uint8Array(l),
            v = {},
            E = null,
            M = null,
            T = null,
            S = null,
            A = null,
            L = null,
            R = null,
            P = null,
            C = null,
            O = !1,
            I = null,
            D = null,
            N = null,
            U = null,
            B = null,
            F = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            Y = !1,
            q = 0,
            Z = e.getParameter(e.VERSION); - 1 !== Z.indexOf("WebGL") ? (q = parseFloat(/^WebGL\ ([0-9])/.exec(Z)[1]), Y = q >= 1) : -1 !== Z.indexOf("OpenGL ES") && (q = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(Z)[1]), Y = q >= 2);
          var J = null,
            Q = {},
            K = new Ct,
            $ = new Ct;

          function ee(t, n, i) {
            var r = new Uint8Array(4),
              a = e.createTexture();
            e.bindTexture(t, a), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
            for (var o = 0; o < i; o++) e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, r);
            return a
          }
          var te = {};

          function ne(n, r) {
            u[n] = 1, 0 === f[n] && (e.enableVertexAttribArray(n), f[n] = 1), m[n] !== r && ((i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), m[n] = r)
          }

          function ie(t) {
            !0 !== v[t] && (e.enable(t), v[t] = !0)
          }

          function re(t) {
            !1 !== v[t] && (e.disable(t), v[t] = !1)
          }

          function ae(t, i, r, a, o, s, c, h) {
            if (t !== g ? ie(e.BLEND) : re(e.BLEND), t !== _) {
              if (t !== T || h !== O) switch (t) {
                case x:
                  h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE));
                  break;
                case w:
                  h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR));
                  break;
                case b:
                  h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR));
                  break;
                default:
                  h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA))
              }
              S = null, A = null, L = null, R = null, P = null, C = null
            } else o = o || i, s = s || r, c = c || a, i === S && o === R || (e.blendEquationSeparate(n.convert(i), n.convert(o)), S = i, R = o), r === A && a === L && s === P && c === C || (e.blendFuncSeparate(n.convert(r), n.convert(a), n.convert(s), n.convert(c)), A = r, L = a, P = s, C = c);
            T = t, O = h
          }

          function oe(t) {
            I !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), I = t)
          }

          function se(t) {
            t !== o ? (ie(e.CULL_FACE), t !== D && (t === s ? e.cullFace(e.BACK) : t === c ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : re(e.CULL_FACE), D = t
          }

          function ce(t, n, i) {
            t ? (ie(e.POLYGON_OFFSET_FILL), U === n && B === i || (e.polygonOffset(n, i), U = n, B = i)) : re(e.POLYGON_OFFSET_FILL)
          }

          function he(t) {
            void 0 === t && (t = e.TEXTURE0 + F - 1), J !== t && (e.activeTexture(t), J = t)
          }
          return te[e.TEXTURE_2D] = ee(e.TEXTURE_2D, e.TEXTURE_2D, 1), te[e.TEXTURE_CUBE_MAP] = ee(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), r.setClear(0, 0, 0, 1), a.setClear(1), h.setClear(0), ie(e.DEPTH_TEST), a.setFunc(k), oe(!1), se(s), ie(e.CULL_FACE), ie(e.BLEND), ae(y), {
            buffers: {
              color: r,
              depth: a,
              stencil: h
            },
            initAttributes: function () {
              for (var e = 0, t = u.length; e < t; e++) u[e] = 0
            },
            enableAttribute: function (e) {
              ne(e, 0)
            },
            enableAttributeAndDivisor: ne,
            disableUnusedAttributes: function () {
              for (var t = 0, n = f.length; t !== n; ++t) f[t] !== u[t] && (e.disableVertexAttribArray(t), f[t] = 0)
            },
            enable: ie,
            disable: re,
            getCompressedTextureFormats: function () {
              if (null === E && (E = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1") || t.get("WEBGL_compressed_texture_astc")))
                for (var n = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), i = 0; i < n.length; i++) E.push(n[i]);
              return E
            },
            useProgram: function (t) {
              return M !== t && (e.useProgram(t), M = t, !0)
            },
            setBlending: ae,
            setMaterial: function (t, n) {
              t.side === p ? re(e.CULL_FACE) : ie(e.CULL_FACE);
              var i = t.side === d;
              n && (i = !i), oe(i), t.blending === y && !1 === t.transparent ? ae(g) : ae(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), r.setMask(t.colorWrite), ce(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            },
            setFlipSided: oe,
            setCullFace: se,
            setLineWidth: function (t) {
              t !== N && (Y && e.lineWidth(t), N = t)
            },
            setPolygonOffset: ce,
            setScissorTest: function (t) {
              t ? ie(e.SCISSOR_TEST) : re(e.SCISSOR_TEST)
            },
            activeTexture: he,
            bindTexture: function (t, n) {
              null === J && he();
              var i = Q[J];
              void 0 === i && (i = {
                type: void 0,
                texture: void 0
              }, Q[J] = i), i.type === t && i.texture === n || (e.bindTexture(t, n || te[t]), i.type = t, i.texture = n)
            },
            compressedTexImage2D: function () {
              try {
                e.compressedTexImage2D.apply(e, arguments)
              } catch (e) {
                console.error("THREE.WebGLState:", e)
              }
            },
            texImage2D: function () {
              try {
                e.texImage2D.apply(e, arguments)
              } catch (e) {
                console.error("THREE.WebGLState:", e)
              }
            },
            scissor: function (t) {
              !1 === K.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), K.copy(t))
            },
            viewport: function (t) {
              !1 === $.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), $.copy(t))
            },
            reset: function () {
              for (var t = 0; t < f.length; t++) 1 === f[t] && (e.disableVertexAttribArray(t), f[t] = 0);
              v = {}, E = null, J = null, Q = {}, M = null, T = null, I = null, D = null, r.reset(), a.reset(), h.reset()
            }
          }
        }(M, T, Z, S)).scissor(se.copy(fe).multiplyScalar(de)), A.viewport(oe.copy(pe).multiplyScalar(de)), L = new function (e) {
          var t = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
          };
          return {
            memory: {
              geometries: 0,
              textures: 0
            },
            render: t,
            programs: null,
            autoReset: !0,
            reset: function () {
              t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
            },
            update: function (n, i, r) {
              switch (r = r || 1, t.calls++, i) {
                case e.TRIANGLES:
                  t.triangles += r * (n / 3);
                  break;
                case e.TRIANGLE_STRIP:
                case e.TRIANGLE_FAN:
                  t.triangles += r * (n - 2);
                  break;
                case e.LINES:
                  t.lines += r * (n / 2);
                  break;
                case e.LINE_STRIP:
                  t.lines += r * (n - 1);
                  break;
                case e.LINE_LOOP:
                  t.lines += r * n;
                  break;
                case e.POINTS:
                  t.points += r * n;
                  break;
                default:
                  console.error("THREE.WebGLInfo: Unknown draw mode:", i)
              }
            }
          }
        }(M), R = new function () {
          var e = new WeakMap;
          return {
            get: function (t) {
              var n = e.get(t);
              return void 0 === n && (n = {}, e.set(t, n)), n
            },
            remove: function (t) {
              e.delete(t)
            },
            update: function (t, n, i) {
              e.get(t)[n] = i
            },
            dispose: function () {
              e = new WeakMap
            }
          }
        }, P = new Hi(M, T, A, R, S, Z, L), C = new Xt(M), O = new function (e, t, n) {
          var i = {},
            r = {};

          function a(e) {
            var o = e.target,
              s = i[o.id];
            for (var c in null !== s.index && t.remove(s.index), s.attributes) t.remove(s.attributes[c]);
            o.removeEventListener("dispose", a), delete i[o.id];
            var h = r[s.id];
            h && (t.remove(h), delete r[s.id]), n.memory.geometries--
          }
          return {
            get: function (e, t) {
              var r = i[t.id];
              return r || (t.addEventListener("dispose", a), t.isBufferGeometry ? r = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new vn).setFromObject(e)), r = t._bufferGeometry), i[t.id] = r, n.memory.geometries++, r)
            },
            update: function (n) {
              var i = n.index,
                r = n.attributes;
              for (var a in null !== i && t.update(i, e.ELEMENT_ARRAY_BUFFER), r) t.update(r[a], e.ARRAY_BUFFER);
              var o = n.morphAttributes;
              for (var a in o)
                for (var s = o[a], c = 0, h = s.length; c < h; c++) t.update(s[c], e.ARRAY_BUFFER)
            },
            getWireframeAttribute: function (n) {
              var i = r[n.id];
              if (i) return i;
              var a, o = [],
                s = n.index,
                c = n.attributes;
              if (null !== s)
                for (var h = 0, l = (a = s.array).length; h < l; h += 3) {
                  var u = a[h + 0],
                    d = a[h + 1],
                    p = a[h + 2];
                  o.push(u, d, d, p, p, u)
                } else
                  for (h = 0, l = (a = c.position.array).length / 3 - 1; h < l; h += 3) u = h + 0, d = h + 1, p = h + 2, o.push(u, d, d, p, p, u);
              return i = new(fn(o) > 65535 ? ln : cn)(o, 1), t.update(i, e.ELEMENT_ARRAY_BUFFER), r[n.id] = i, i
            }
          }
        }(M, C, L), I = new function (e, t) {
          var n = {};
          return {
            update: function (i) {
              var r = t.render.frame,
                a = i.geometry,
                o = e.get(i, a);
              return n[o.id] !== r && (a.isGeometry && o.updateFromObject(i), e.update(o), n[o.id] = r), o
            },
            dispose: function () {
              n = {}
            }
          }
        }(O, L), F = new function (e) {
          var t = {},
            n = new Float32Array(8);
          return {
            update: function (i, r, a, o) {
              var s = i.morphTargetInfluences,
                c = s.length,
                h = t[r.id];
              if (void 0 === h) {
                h = [];
                for (var l = 0; l < c; l++) h[l] = [l, 0];
                t[r.id] = h
              }
              var u = a.morphTargets && r.morphAttributes.position,
                d = a.morphNormals && r.morphAttributes.normal;
              for (l = 0; l < c; l++) 0 !== (p = h[l])[1] && (u && r.removeAttribute("morphTarget" + l), d && r.removeAttribute("morphNormal" + l));
              for (l = 0; l < c; l++)(p = h[l])[0] = l, p[1] = s[l];
              for (h.sort(Ln), l = 0; l < 8; l++) {
                var p;
                if (p = h[l]) {
                  var f = p[0],
                    m = p[1];
                  if (m) {
                    u && r.addAttribute("morphTarget" + l, u[f]), d && r.addAttribute("morphNormal" + l, d[f]), n[l] = m;
                    continue
                  }
                }
                n[l] = 0
              }
              o.getUniforms().setValue(e, "morphTargetInfluences", n)
            }
          }
        }(M), D = new Li(J, T, S), N = new Ci, U = new function () {
          var e = {};
          return {
            get: function (t, n) {
              var i;
              return void 0 === e[t.id] ? (i = new Ni, e[t.id] = {}, e[t.id][n.id] = i) : void 0 === e[t.id][n.id] ? (i = new Ni, e[t.id][n.id] = i) : i = e[t.id][n.id], i
            },
            dispose: function () {
              e = {}
            }
          }
        }, B = new function (e, t, n, i) {
          var r, a, o, s = new kt(0),
            c = 0;

          function h(e, n) {
            t.buffers.color.setClear(e.r, e.g, e.b, n, i)
          }
          return {
            getClearColor: function () {
              return s
            },
            setClearColor: function (e, t) {
              s.set(e), h(s, c = void 0 !== t ? t : 1)
            },
            getClearAlpha: function () {
              return c
            },
            setClearAlpha: function (e) {
              h(s, c = e)
            },
            render: function (t, i, l, u) {
              var p = i.background;
              null === p ? h(s, c) : p && p.isColor && (h(p, 1), u = !0), (e.autoClear || u) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), p && p.isCubeTexture ? (void 0 === o && ((o = new An(new yn(1, 1, 1), new Mn({
                uniforms: Vt.cube.uniforms,
                vertexShader: Vt.cube.vertexShader,
                fragmentShader: Vt.cube.fragmentShader,
                side: d,
                depthTest: !0,
                depthWrite: !1,
                fog: !1
              }))).geometry.removeAttribute("normal"), o.geometry.removeAttribute("uv"), o.onBeforeRender = function (e, t, n) {
                this.matrixWorld.copyPosition(n.matrixWorld)
              }, n.update(o)), o.material.uniforms.tCube.value = p, t.push(o, o.geometry, o.material, 0, null)) : p && p.isTexture && (void 0 === r && (r = new Kt(-1, 1, 1, -1, 0, 1), a = new An(new wn(2, 2), new En({
                depthTest: !1,
                depthWrite: !1,
                fog: !1
              })), n.update(a)), a.material.map = p, e.renderBufferDirect(r, null, a.geometry, a.material, a, null))
            }
          }
        }(J, A, I, u), Y = new function (e, t, n, i) {
          var r;
          this.setMode = function (e) {
            r = e
          }, this.render = function (t, i) {
            e.drawArrays(r, t, i), n.update(i, r)
          }, this.renderInstances = function (a, o, s) {
            var c;
            if (i.isWebGL2) c = e;
            else if (null === (c = t.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            c[i.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](r, o, s, a.maxInstancedCount), n.update(s, r, a.maxInstancedCount)
          }
        }(M, T, L, S), q = new function (e, t, n, i) {
          var r, a, o;
          this.setMode = function (e) {
            r = e
          }, this.setIndex = function (e) {
            a = e.type, o = e.bytesPerElement
          }, this.render = function (t, i) {
            e.drawElements(r, i, a, t * o), n.update(i, r)
          }, this.renderInstances = function (s, c, h) {
            var l;
            if (i.isWebGL2) l = e;
            else if (null === (l = t.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[i.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](r, h, a, c * o, s.maxInstancedCount), n.update(h, r, s.maxInstancedCount)
          }
        }(M, T, L, S), L.programs = D.programs, J.context = M, J.capabilities = S, J.extensions = T, J.properties = R, J.renderLists = N, J.state = A, J.info = L
      }
      Ae();
      var Le = "xr" in navigator ? new function (e) {
        var t = e.context,
          n = null,
          i = null,
          r = null,
          a = null,
          o = [],
          s = [];

        function c() {
          return null !== i && null !== r
        }
        var h = new ki;
        h.layers.enable(1), h.viewport = new Ct;
        var l = new ki;
        l.layers.enable(2), l.viewport = new Ct;
        var u = new ji([h, l]);

        function d(e) {
          var t = o[s.indexOf(e.inputSource)];
          t && t.dispatchEvent({
            type: e.type
          })
        }

        function p() {
          e.setFramebuffer(null), v.stop()
        }

        function f(e, t) {
          null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.getInverse(e.matrixWorld)
        }
        u.layers.enable(1), u.layers.enable(2), this.enabled = !1, this.getController = function (e) {
          var t = o[e];
          return void 0 === t && ((t = new Gi).matrixAutoUpdate = !1, t.visible = !1, o[e] = t), t
        }, this.getDevice = function () {
          return n
        }, this.setDevice = function (e) {
          void 0 !== e && (n = e), e instanceof XRDevice && t.setCompatibleXRDevice(e)
        }, this.setSession = function (n, a) {
          null !== (i = n) && (i.addEventListener("select", d), i.addEventListener("selectstart", d), i.addEventListener("selectend", d), i.addEventListener("end", p), i.baseLayer = new XRWebGLLayer(i, t), i.requestFrameOfReference(a.frameOfReferenceType).then(function (t) {
            r = t, e.setFramebuffer(i.baseLayer.framebuffer), v.setContext(i), v.start()
          }), s = i.getInputSources(), i.addEventListener("inputsourceschange", function () {
            s = i.getInputSources(), console.log(s)
          }))
        }, this.getCamera = function (e) {
          if (c()) {
            var t = e.parent,
              n = u.cameras;
            f(u, t);
            for (var i = 0; i < n.length; i++) f(n[i], t);
            e.matrixWorld.copy(u.matrixWorld);
            for (var r = e.children, a = (i = 0, r.length); i < a; i++) r[i].updateMatrixWorld(!0);
            return u
          }
          return e
        }, this.isPresenting = c;
        var m = null,
          v = new Wt;
        v.setAnimationLoop(function (e, t) {
          if (null !== (a = t.getDevicePose(r)))
            for (var n = i.baseLayer, c = t.views, h = 0; h < c.length; h++) {
              var l = c[h],
                d = n.getViewport(l),
                p = a.getViewMatrix(l),
                f = u.cameras[h];
              f.matrix.fromArray(p).getInverse(f.matrix), f.projectionMatrix.fromArray(l.projectionMatrix), f.viewport.set(d.x, d.y, d.width, d.height), 0 === h && (u.matrix.copy(f.matrix), u.projectionMatrix.copy(f.projectionMatrix))
            }
          for (h = 0; h < o.length; h++) {
            var v = o[h],
              g = s[h];
            if (g) {
              var y = t.getInputPose(g, r);
              if (null !== y) {
                v.matrix.elements = y.pointerMatrix, v.matrix.decompose(v.position, v.rotation, v.scale), v.visible = !0;
                continue
              }
            }
            v.visible = !1
          }
          m && m(e)
        }), this.setAnimationLoop = function (e) {
          m = e
        }, this.dispose = function () {}, this.getStandingMatrix = function () {
          return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4
        }, this.submitFrame = function () {}
      }(J) : new Vi(J);
      this.vr = Le;
      var Re = new Fi(J, I, S.maxTextureSize);

      function Pe(e) {
        e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), K = !0
      }

      function Oe() {
        console.log("THREE.WebGLRenderer: Context Restored."), K = !1, Ae()
      }

      function Ie(e) {
        var t = e.target;
        t.removeEventListener("dispose", Ie),
          function (e) {
            De(e), R.remove(e)
          }(t)
      }

      function De(e) {
        var t = R.get(e).program;
        e.program = void 0, void 0 !== t && D.releaseProgram(t)
      }
      this.shadowMap = Re, this.getContext = function () {
        return M
      }, this.getContextAttributes = function () {
        return M.getContextAttributes()
      }, this.forceContextLoss = function () {
        var e = T.get("WEBGL_lose_context");
        e && e.loseContext()
      }, this.forceContextRestore = function () {
        var e = T.get("WEBGL_lose_context");
        e && e.restoreContext()
      }, this.getPixelRatio = function () {
        return de
      }, this.setPixelRatio = function (e) {
        void 0 !== e && (de = e, this.setSize(le, ue, !1))
      }, this.getSize = function () {
        return {
          width: le,
          height: ue
        }
      }, this.setSize = function (e, n, i) {
        Le.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (le = e, ue = n, t.width = e * de, t.height = n * de, !1 !== i && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n))
      }, this.getDrawingBufferSize = function () {
        return {
          width: le * de,
          height: ue * de
        }
      }, this.setDrawingBufferSize = function (e, n, i) {
        le = e, ue = n, de = i, t.width = e * i, t.height = n * i, this.setViewport(0, 0, e, n)
      }, this.getCurrentViewport = function () {
        return oe
      }, this.setViewport = function (e, t, n, i) {
        pe.set(e, ue - t - i, n, i), A.viewport(oe.copy(pe).multiplyScalar(de))
      }, this.setScissor = function (e, t, n, i) {
        fe.set(e, ue - t - i, n, i), A.scissor(se.copy(fe).multiplyScalar(de))
      }, this.setScissorTest = function (e) {
        A.setScissorTest(me = e)
      }, this.getClearColor = function () {
        return B.getClearColor()
      }, this.setClearColor = function () {
        B.setClearColor.apply(B, arguments)
      }, this.getClearAlpha = function () {
        return B.getClearAlpha()
      }, this.setClearAlpha = function () {
        B.setClearAlpha.apply(B, arguments)
      }, this.clear = function (e, t, n) {
        var i = 0;
        (void 0 === e || e) && (i |= M.COLOR_BUFFER_BIT), (void 0 === t || t) && (i |= M.DEPTH_BUFFER_BIT), (void 0 === n || n) && (i |= M.STENCIL_BUFFER_BIT), M.clear(i)
      }, this.clearColor = function () {
        this.clear(!0, !1, !1)
      }, this.clearDepth = function () {
        this.clear(!1, !0, !1)
      }, this.clearStencil = function () {
        this.clear(!1, !1, !0)
      }, this.clearTarget = function (e, t, n, i) {
        this.setRenderTarget(e), this.clear(t, n, i)
      }, this.dispose = function () {
        t.removeEventListener("webglcontextlost", Pe, !1), t.removeEventListener("webglcontextrestored", Oe, !1), N.dispose(), U.dispose(), R.dispose(), I.dispose(), Le.dispose(), Ue.stop()
      }, this.renderBufferImmediate = function (e, t) {
        A.initAttributes();
        var n = R.get(e);
        e.hasPositions && !n.position && (n.position = M.createBuffer()), e.hasNormals && !n.normal && (n.normal = M.createBuffer()), e.hasUvs && !n.uv && (n.uv = M.createBuffer()), e.hasColors && !n.color && (n.color = M.createBuffer());
        var i = t.getAttributes();
        e.hasPositions && (M.bindBuffer(M.ARRAY_BUFFER, n.position), M.bufferData(M.ARRAY_BUFFER, e.positionArray, M.DYNAMIC_DRAW), A.enableAttribute(i.position), M.vertexAttribPointer(i.position, 3, M.FLOAT, !1, 0, 0)), e.hasNormals && (M.bindBuffer(M.ARRAY_BUFFER, n.normal), M.bufferData(M.ARRAY_BUFFER, e.normalArray, M.DYNAMIC_DRAW), A.enableAttribute(i.normal), M.vertexAttribPointer(i.normal, 3, M.FLOAT, !1, 0, 0)), e.hasUvs && (M.bindBuffer(M.ARRAY_BUFFER, n.uv), M.bufferData(M.ARRAY_BUFFER, e.uvArray, M.DYNAMIC_DRAW), A.enableAttribute(i.uv), M.vertexAttribPointer(i.uv, 2, M.FLOAT, !1, 0, 0)), e.hasColors && (M.bindBuffer(M.ARRAY_BUFFER, n.color), M.bufferData(M.ARRAY_BUFFER, e.colorArray, M.DYNAMIC_DRAW), A.enableAttribute(i.color), M.vertexAttribPointer(i.color, 3, M.FLOAT, !1, 0, 0)), A.disableUnusedAttributes(), M.drawArrays(M.TRIANGLES, 0, e.count), e.count = 0
      }, this.renderBufferDirect = function (e, t, n, i, r, a) {
        var o = r.isMesh && r.normalMatrix.determinant() < 0;
        A.setMaterial(i, o);
        var s = ze(e, t, i, r),
          c = !1;
        ie.geometry === n.id && ie.program === s.id && ie.wireframe === (!0 === i.wireframe) || (ie.geometry = n.id, ie.program = s.id, ie.wireframe = !0 === i.wireframe, c = !0), r.morphTargetInfluences && (F.update(r, n, i, s), c = !0);
        var h, l = n.index,
          u = n.attributes.position,
          d = 1;
        !0 === i.wireframe && (l = O.getWireframeAttribute(n), d = 2);
        var p = Y;
        null !== l && (h = C.get(l), (p = q).setIndex(h)), c && (! function (e, t, n) {
          if (n && n.isInstancedBufferGeometry & !S.isWebGL2 && null === T.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          A.initAttributes();
          var i = n.attributes,
            r = t.getAttributes(),
            a = e.defaultAttributeValues;
          for (var o in r) {
            var s = r[o];
            if (s >= 0) {
              var c = i[o];
              if (void 0 !== c) {
                var h = c.normalized,
                  l = c.itemSize,
                  u = C.get(c);
                if (void 0 === u) continue;
                var d = u.buffer,
                  p = u.type,
                  f = u.bytesPerElement;
                if (c.isInterleavedBufferAttribute) {
                  var m = c.data,
                    v = m.stride,
                    g = c.offset;
                  m && m.isInstancedInterleavedBuffer ? (A.enableAttributeAndDivisor(s, m.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = m.meshPerAttribute * m.count)) : A.enableAttribute(s), M.bindBuffer(M.ARRAY_BUFFER, d), M.vertexAttribPointer(s, l, p, h, v * f, g * f)
                } else c.isInstancedBufferAttribute ? (A.enableAttributeAndDivisor(s, c.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = c.meshPerAttribute * c.count)) : A.enableAttribute(s), M.bindBuffer(M.ARRAY_BUFFER, d), M.vertexAttribPointer(s, l, p, h, 0, 0)
              } else if (void 0 !== a) {
                var y = a[o];
                if (void 0 !== y) switch (y.length) {
                  case 2:
                    M.vertexAttrib2fv(s, y);
                    break;
                  case 3:
                    M.vertexAttrib3fv(s, y);
                    break;
                  case 4:
                    M.vertexAttrib4fv(s, y);
                    break;
                  default:
                    M.vertexAttrib1fv(s, y)
                }
              }
            }
          }
          A.disableUnusedAttributes()
        }(i, s, n), null !== l && M.bindBuffer(M.ELEMENT_ARRAY_BUFFER, h.buffer));
        var f = 1 / 0;
        null !== l ? f = l.count : void 0 !== u && (f = u.count);
        var m = n.drawRange.start * d,
          v = n.drawRange.count * d,
          g = null !== a ? a.start * d : 0,
          y = null !== a ? a.count * d : 1 / 0,
          x = Math.max(m, g),
          w = Math.min(f, m + v, g + y) - 1,
          b = Math.max(0, w - x + 1);
        if (0 !== b) {
          if (r.isMesh)
            if (!0 === i.wireframe) A.setLineWidth(i.wireframeLinewidth * Te()), p.setMode(M.LINES);
            else switch (r.drawMode) {
              case ct:
                p.setMode(M.TRIANGLES);
                break;
              case ht:
                p.setMode(M.TRIANGLE_STRIP);
                break;
              case lt:
                p.setMode(M.TRIANGLE_FAN)
            } else if (r.isLine) {
              var _ = i.linewidth;
              void 0 === _ && (_ = 1), A.setLineWidth(_ * Te()), r.isLineSegments ? p.setMode(M.LINES) : r.isLineLoop ? p.setMode(M.LINE_LOOP) : p.setMode(M.LINE_STRIP)
            } else r.isPoints ? p.setMode(M.POINTS) : r.isSprite && p.setMode(M.TRIANGLES);
          n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && p.renderInstances(n, x, b) : p.render(x, b)
        }
      }, this.compile = function (e, t) {
        (E = U.get(e, t)).init(), e.traverse(function (e) {
          e.isLight && (E.pushLight(e), e.castShadow && E.pushShadow(e))
        }), E.setupLights(t), e.traverse(function (t) {
          if (t.material)
            if (Array.isArray(t.material))
              for (var n = 0; n < t.material.length; n++) He(t.material[n], e.fog, t);
            else He(t.material, e.fog, t)
        })
      };
      var Ne = null;
      var Ue = new Wt;

      function Be(e, t, n, i) {
        for (var r = 0, a = e.length; r < a; r++) {
          var o = e[r],
            s = o.object,
            c = o.geometry,
            h = void 0 === i ? o.material : i,
            l = o.group;
          if (n.isArrayCamera) {
            ae = n;
            for (var u = n.cameras, d = 0, p = u.length; d < p; d++) {
              var f = u[d];
              if (s.layers.test(f.layers)) {
                if ("viewport" in f) A.viewport(oe.copy(f.viewport));
                else {
                  var m = f.bounds,
                    v = m.x * le,
                    g = m.y * ue,
                    y = m.z * le,
                    x = m.w * ue;
                  A.viewport(oe.set(v, g, y, x).multiplyScalar(de))
                }
                Fe(s, t, f, c, h, l)
              }
            }
          } else ae = null, Fe(s, t, n, c, h, l)
        }
      }

      function Fe(e, t, n, i, r, a) {
        if (e.onBeforeRender(J, t, n, i, r, a), E = U.get(t, ae || n), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), e.isImmediateRenderObject) {
          A.setMaterial(r);
          var o = ze(n, t.fog, r, e);
          ie.geometry = null, ie.program = null, ie.wireframe = !1,
            function (e, t) {
              e.render(function (e) {
                J.renderBufferImmediate(e, t)
              })
            }(e, o)
        } else J.renderBufferDirect(n, t.fog, i, r, e, a);
        e.onAfterRender(J, t, n, i, r, a), E = U.get(t, ae || n)
      }

      function He(e, t, n) {
        var i = R.get(e),
          r = E.state.lights,
          a = E.state.shadowsArray,
          o = i.lightsHash,
          s = r.state.hash,
          c = D.getParameters(e, r.state, a, t, ye.numPlanes, ye.numIntersection, n),
          h = D.getProgramCode(e, c),
          l = i.program,
          u = !0;
        if (void 0 === l) e.addEventListener("dispose", Ie);
        else if (l.code !== h) De(e);
        else if (o.stateID !== s.stateID || o.directionalLength !== s.directionalLength || o.pointLength !== s.pointLength || o.spotLength !== s.spotLength || o.rectAreaLength !== s.rectAreaLength || o.hemiLength !== s.hemiLength || o.shadowsLength !== s.shadowsLength) o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, u = !1;
        else {
          if (void 0 !== c.shaderID) return;
          u = !1
        }
        if (u) {
          if (c.shaderID) {
            var d = Vt[c.shaderID];
            i.shader = {
              name: e.type,
              uniforms: zt.clone(d.uniforms),
              vertexShader: d.vertexShader,
              fragmentShader: d.fragmentShader
            }
          } else i.shader = {
            name: e.type,
            uniforms: e.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader
          };
          e.onBeforeCompile(i.shader, J), h = D.getProgramCode(e, c), l = D.acquireProgram(e, i.shader, c, h), i.program = l, e.program = l
        }
        var p = l.getAttributes();
        if (e.morphTargets) {
          e.numSupportedMorphTargets = 0;
          for (var f = 0; f < J.maxMorphTargets; f++) p["morphTarget" + f] >= 0 && e.numSupportedMorphTargets++
        }
        if (e.morphNormals) {
          e.numSupportedMorphNormals = 0;
          for (f = 0; f < J.maxMorphNormals; f++) p["morphNormal" + f] >= 0 && e.numSupportedMorphNormals++
        }
        var m = i.shader.uniforms;
        (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (i.numClippingPlanes = ye.numPlanes, i.numIntersection = ye.numIntersection, m.clippingPlanes = ye.uniform), i.fog = t, void 0 === o && (i.lightsHash = o = {}), o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, e.lights && (m.ambientLightColor.value = r.state.ambient, m.directionalLights.value = r.state.directional, m.spotLights.value = r.state.spot, m.rectAreaLights.value = r.state.rectArea, m.pointLights.value = r.state.point, m.hemisphereLights.value = r.state.hemi, m.directionalShadowMap.value = r.state.directionalShadowMap, m.directionalShadowMatrix.value = r.state.directionalShadowMatrix, m.spotShadowMap.value = r.state.spotShadowMap, m.spotShadowMatrix.value = r.state.spotShadowMatrix, m.pointShadowMap.value = r.state.pointShadowMap, m.pointShadowMatrix.value = r.state.pointShadowMatrix);
        var v = i.program.getUniforms(),
          g = gi.seqWithValue(v.seq, m);
        i.uniformsList = g
      }

      function ze(e, t, n, i) {
        he = 0;
        var r = R.get(n),
          a = E.state.lights,
          o = r.lightsHash,
          s = a.state.hash;
        if (xe && (we || e !== re)) {
          var c = e === re && n.id === ne;
          ye.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, e, r, c)
        }!1 === n.needsUpdate && (void 0 === r.program ? n.needsUpdate = !0 : n.fog && r.fog !== t ? n.needsUpdate = !0 : (!n.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === ye.numPlanes && r.numIntersection === ye.numIntersection) || (n.needsUpdate = !0)), n.needsUpdate && (He(n, t, i), n.needsUpdate = !1);
        var h = !1,
          l = !1,
          u = !1,
          p = r.program,
          f = p.getUniforms(),
          m = r.shader.uniforms;
        if (A.useProgram(p.program) && (h = !0, l = !0, u = !0), n.id !== ne && (ne = n.id, l = !0), h || e !== re) {
          if (f.setValue(M, "projectionMatrix", e.projectionMatrix), S.logarithmicDepthBuffer && f.setValue(M, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), re !== (ae || e) && (re = ae || e, l = !0, u = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
            var v = f.map.cameraPosition;
            void 0 !== v && v.setValue(M, _e.setFromMatrixPosition(e.matrixWorld))
          }(n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && f.setValue(M, "viewMatrix", e.matrixWorldInverse)
        }
        if (n.skinning) {
          f.setOptional(M, i, "bindMatrix"), f.setOptional(M, i, "bindMatrixInverse");
          var g = i.skeleton;
          if (g) {
            var y = g.bones;
            if (S.floatVertexTextures) {
              if (void 0 === g.boneTexture) {
                var x = Math.sqrt(4 * y.length);
                x = _t.ceilPowerOfTwo(x), x = Math.max(x, 4);
                var w = new Float32Array(x * x * 4);
                w.set(g.boneMatrices);
                var b = new Dt(w, x, x, Ce, Ee);
                b.needsUpdate = !0, g.boneMatrices = w, g.boneTexture = b, g.boneTextureSize = x
              }
              f.setValue(M, "boneTexture", g.boneTexture), f.setValue(M, "boneTextureSize", g.boneTextureSize)
            } else f.setOptional(M, g, "boneMatrices")
          }
        }
        return l && (f.setValue(M, "toneMappingExposure", J.toneMappingExposure), f.setValue(M, "toneMappingWhitePoint", J.toneMappingWhitePoint), n.lights && function (e, t) {
          e.ambientLightColor.needsUpdate = t, e.directionalLights.needsUpdate = t, e.pointLights.needsUpdate = t, e.spotLights.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t
        }(m, u), t && n.fog && function (e, t) {
          e.fogColor.value = t.color, t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
        }(m, t), n.isMeshBasicMaterial ? Ge(m, n) : n.isMeshLambertMaterial ? (Ge(m, n), function (e, t) {
          t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
        }(m, n)) : n.isMeshPhongMaterial ? (Ge(m, n), n.isMeshToonMaterial ? function (e, t) {
          ke(e, t), t.gradientMap && (e.gradientMap.value = t.gradientMap)
        }(m, n) : ke(m, n)) : n.isMeshStandardMaterial ? (Ge(m, n), n.isMeshPhysicalMaterial ? function (e, t) {
          je(e, t), e.reflectivity.value = t.reflectivity, e.clearCoat.value = t.clearCoat, e.clearCoatRoughness.value = t.clearCoatRoughness
        }(m, n) : je(m, n)) : n.isMeshDepthMaterial ? (Ge(m, n), function (e, t) {
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
        }(m, n)) : n.isMeshDistanceMaterial ? (Ge(m, n), function (e, t) {
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
          e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance
        }(m, n)) : n.isMeshNormalMaterial ? (Ge(m, n), function (e, t) {
          t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === d && (e.bumpScale.value *= -1));
          t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === d && e.normalScale.value.negate());
          t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
        }(m, n)) : n.isLineBasicMaterial ? (function (e, t) {
          e.diffuse.value = t.color, e.opacity.value = t.opacity
        }(m, n), n.isLineDashedMaterial && function (e, t) {
          e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
        }(m, n)) : n.isPointsMaterial ? function (e, t) {
          e.diffuse.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size * de, e.scale.value = .5 * ue, e.map.value = t.map, null !== t.map && (!0 === t.map.matrixAutoUpdate && t.map.updateMatrix(), e.uvTransform.value.copy(t.map.matrix))
        }(m, n) : n.isSpriteMaterial ? function (e, t) {
          e.diffuse.value = t.color, e.opacity.value = t.opacity, e.rotation.value = t.rotation, e.map.value = t.map, null !== t.map && (!0 === t.map.matrixAutoUpdate && t.map.updateMatrix(), e.uvTransform.value.copy(t.map.matrix))
        }(m, n) : n.isShadowMaterial && (m.color.value = n.color, m.opacity.value = n.opacity), void 0 !== m.ltc_1 && (m.ltc_1.value = jt.LTC_1), void 0 !== m.ltc_2 && (m.ltc_2.value = jt.LTC_2), gi.upload(M, r.uniformsList, m, J)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (gi.upload(M, r.uniformsList, m, J), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && f.setValue(M, "center", i.center), f.setValue(M, "modelViewMatrix", i.modelViewMatrix), f.setValue(M, "normalMatrix", i.normalMatrix), f.setValue(M, "modelMatrix", i.matrixWorld), p
      }

      function Ge(e, t) {
        var n;
        e.opacity.value = t.opacity, t.color && (e.diffuse.value = t.color), t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity), t.map && (e.map.value = t.map), t.alphaMap && (e.alphaMap.value = t.alphaMap), t.specularMap && (e.specularMap.value = t.specularMap), t.envMap && (e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap && t.envMap.isCubeTexture ? -1 : 1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio, e.maxMipLevel.value = R.get(t.envMap).__maxMipLevel), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity), t.map ? n = t.map : t.specularMap ? n = t.specularMap : t.displacementMap ? n = t.displacementMap : t.normalMap ? n = t.normalMap : t.bumpMap ? n = t.bumpMap : t.roughnessMap ? n = t.roughnessMap : t.metalnessMap ? n = t.metalnessMap : t.alphaMap ? n = t.alphaMap : t.emissiveMap && (n = t.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix))
      }

      function ke(e, t) {
        e.specular.value = t.specular, e.shininess.value = Math.max(t.shininess, 1e-4), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === d && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === d && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
      }

      function je(e, t) {
        e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === d && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === d && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
      }
      Ue.setAnimationLoop(function (e) {
        Le.isPresenting() || Ne && Ne(e)
      }), "undefined" != typeof window && Ue.setContext(window), this.setAnimationLoop = function (e) {
        Ne = e, Le.setAnimationLoop(e), Ue.start()
      }, this.render = function (e, t, n, i) {
        if (t && t.isCamera) {
          if (!K) {
            ie.geometry = null, ie.program = null, ie.wireframe = !1, ne = -1, re = null, !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), Le.enabled && (t = Le.getCamera(t)), (E = U.get(e, t)).init(), e.onBeforeRender(J, e, t, n), be.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ve.setFromMatrix(be), we = this.localClippingEnabled, xe = ye.init(this.clippingPlanes, we, t), (v = N.get(e, t)).init(),
              function e(t, n, i) {
                if (!1 === t.visible) return;
                var r = t.layers.test(n.layers);
                if (r)
                  if (t.isLight) E.pushLight(t), t.castShadow && E.pushShadow(t);
                  else if (t.isSprite) {
                  if (!t.frustumCulled || ve.intersectsSprite(t)) {
                    i && _e.setFromMatrixPosition(t.matrixWorld).applyMatrix4(be);
                    var a = I.update(t),
                      o = t.material;
                    v.push(t, a, o, _e.z, null)
                  }
                } else if (t.isImmediateRenderObject) i && _e.setFromMatrixPosition(t.matrixWorld).applyMatrix4(be), v.push(t, null, t.material, _e.z, null);
                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || ve.intersectsObject(t))) {
                  i && _e.setFromMatrixPosition(t.matrixWorld).applyMatrix4(be);
                  var a = I.update(t),
                    o = t.material;
                  if (Array.isArray(o))
                    for (var s = a.groups, c = 0, h = s.length; c < h; c++) {
                      var l = s[c],
                        u = o[l.materialIndex];
                      u && u.visible && v.push(t, a, u, _e.z, l)
                    } else o.visible && v.push(t, a, o, _e.z, null)
                }
                var d = t.children;
                for (var c = 0, h = d.length; c < h; c++) e(d[c], n, i)
              }(e, t, J.sortObjects), !0 === J.sortObjects && v.sort(), xe && ye.beginShadows();
            var r = E.state.shadowsArray;
            Re.render(r, e, t), E.setupLights(t), xe && ye.endShadows(), this.info.autoReset && this.info.reset(), void 0 === n && (n = null), this.setRenderTarget(n), B.render(v, e, t, i);
            var a = v.opaque,
              o = v.transparent;
            if (e.overrideMaterial) {
              var s = e.overrideMaterial;
              a.length && Be(a, e, t, s), o.length && Be(o, e, t, s)
            } else a.length && Be(a, e, t), o.length && Be(o, e, t);
            n && P.updateRenderTargetMipmap(n), A.buffers.depth.setTest(!0), A.buffers.depth.setMask(!0), A.buffers.color.setMask(!0), A.setPolygonOffset(!1), e.onAfterRender(J, e, t), Le.enabled && Le.submitFrame(), v = null, E = null
          }
        } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
      }, this.allocTextureUnit = function () {
        var e = he;
        return e >= S.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + e + " texture units while this GPU supports only " + S.maxTextures), he += 1, e
      }, this.setTexture2D = function () {
        var e = !1;
        return function (t, n) {
          t && t.isWebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), P.setTexture2D(t, n)
        }
      }(), this.setTexture = function () {
        var e = !1;
        return function (t, n) {
          e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), e = !0), P.setTexture2D(t, n)
        }
      }(), this.setTextureCube = function () {
        var e = !1;
        return function (t, n) {
          t && t.isWebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? P.setTextureCube(t, n) : P.setTextureCubeDynamic(t, n)
        }
      }(), this.setFramebuffer = function (e) {
        $ = e
      }, this.getRenderTarget = function () {
        return ee
      }, this.setRenderTarget = function (e) {
        ee = e, e && void 0 === R.get(e).__webglFramebuffer && P.setupRenderTarget(e);
        var t = $,
          n = !1;
        if (e) {
          var i = R.get(e).__webglFramebuffer;
          e.isWebGLRenderTargetCube ? (t = i[e.activeCubeFace], n = !0) : t = i, oe.copy(e.viewport), se.copy(e.scissor), ce = e.scissorTest
        } else oe.copy(pe).multiplyScalar(de), se.copy(fe).multiplyScalar(de), ce = me;
        if (te !== t && (M.bindFramebuffer(M.FRAMEBUFFER, t), te = t), A.viewport(oe), A.scissor(se), A.setScissorTest(ce), n) {
          var r = R.get(e.texture);
          M.framebufferTexture2D(M.FRAMEBUFFER, M.COLOR_ATTACHMENT0, M.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, r.__webglTexture, e.activeMipMapLevel)
        }
      }, this.readRenderTargetPixels = function (e, t, n, i, r, a) {
        if (e && e.isWebGLRenderTarget) {
          var o = R.get(e).__webglFramebuffer;
          if (o) {
            var s = !1;
            o !== te && (M.bindFramebuffer(M.FRAMEBUFFER, o), s = !0);
            try {
              var c = e.texture,
                h = c.format,
                l = c.type;
              if (h !== Ce && Z.convert(h) !== M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
              if (!(l === ge || Z.convert(l) === M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE) || l === Ee && (S.isWebGL2 || T.get("OES_texture_float") || T.get("WEBGL_color_buffer_float")) || l === Me && (S.isWebGL2 ? T.get("EXT_color_buffer_float") : T.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
              M.checkFramebufferStatus(M.FRAMEBUFFER) === M.FRAMEBUFFER_COMPLETE ? t >= 0 && t <= e.width - i && n >= 0 && n <= e.height - r && M.readPixels(t, n, i, r, Z.convert(h), Z.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
            } finally {
              s && M.bindFramebuffer(M.FRAMEBUFFER, te)
            }
          }
        } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
      }, this.copyFramebufferToTexture = function (e, t, n) {
        var i = t.image.width,
          r = t.image.height,
          a = Z.convert(t.format);
        this.setTexture2D(t, 0), M.copyTexImage2D(M.TEXTURE_2D, n || 0, a, e.x, e.y, i, r, 0)
      }, this.copyTextureToTexture = function (e, t, n, i) {
        var r = t.image.width,
          a = t.image.height,
          o = Z.convert(n.format),
          s = Z.convert(n.type);
        this.setTexture2D(n, 0), t.isDataTexture ? M.texSubImage2D(M.TEXTURE_2D, i || 0, e.x, e.y, r, a, o, s, t.image.data) : M.texSubImage2D(M.TEXTURE_2D, i || 0, e.x, e.y, o, s, t.image)
      }
    }

    function Xi(e, t) {
      this.name = "", this.color = new kt(e), this.density = void 0 !== t ? t : 25e-5
    }

    function Yi(e, t, n) {
      this.name = "", this.color = new kt(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== n ? n : 1e3
    }

    function qi() {
      Jt.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }

    function Zi(e, t) {
      this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.dynamic = !1, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0
    }

    function Ji(e, t, n, i) {
      this.data = e, this.itemSize = t, this.offset = n, this.normalized = !0 === i
    }

    function Qi(e) {
      _n.call(this), this.type = "SpriteMaterial", this.color = new kt(16777215), this.map = null, this.rotation = 0, this.lights = !1, this.transparent = !0, this.setValues(e)
    }

    function Ki(e) {
      if (Jt.call(this), this.type = "Sprite", void 0 === Oi) {
        Oi = new vn;
        var t = new Zi(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
        Oi.setIndex([0, 1, 2, 0, 2, 3]), Oi.addAttribute("position", new Ji(t, 3, 0, !1)), Oi.addAttribute("uv", new Ji(t, 2, 3, !1))
      }
      this.geometry = Oi, this.material = void 0 !== e ? e : new Qi, this.center = new Et(.5, .5)
    }

    function $i() {
      Jt.call(this), this.type = "LOD", Object.defineProperties(this, {
        levels: {
          enumerable: !0,
          value: []
        }
      })
    }

    function er(e, t) {
      if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === t) this.calculateInverses();
      else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
      else {
        console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
        for (var n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Mt)
      }
    }

    function tr() {
      Jt.call(this), this.type = "Bone"
    }

    function nr(e, t) {
      An.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Mt, this.bindMatrixInverse = new Mt;
      var n = new er(this.initBones());
      this.bind(n, this.matrixWorld), this.normalizeSkinWeights()
    }

    function ir(e) {
      _n.call(this), this.type = "LineBasicMaterial", this.color = new kt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(e)
    }

    function rr(e, t, n) {
      1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Jt.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new vn, this.material = void 0 !== t ? t : new ir({
        color: 16777215 * Math.random()
      })
    }

    function ar(e, t) {
      rr.call(this, e, t), this.type = "LineSegments"
    }

    function or(e, t) {
      rr.call(this, e, t), this.type = "LineLoop"
    }

    function sr(e) {
      _n.call(this), this.type = "PointsMaterial", this.color = new kt(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(e)
    }

    function cr(e, t) {
      Jt.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new vn, this.material = void 0 !== t ? t : new sr({
        color: 16777215 * Math.random()
      })
    }

    function hr(e, t, n, i, r, a, o, s, c) {
      Pt.call(this, e, t, n, i, r, a, o, s, c), this.generateMipmaps = !1
    }

    function lr(e, t, n, i, r, a, o, s, c, h, l, u) {
      Pt.call(this, null, a, o, s, c, h, i, r, l, u), this.image = {
        width: t,
        height: n
      }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
    }

    function ur(e, t, n, i, r, a, o, s, c) {
      Pt.call(this, e, t, n, i, r, a, o, s, c), this.needsUpdate = !0
    }

    function dr(e, t, n, i, r, a, o, s, c, h) {
      if ((h = void 0 !== h ? h : Ne) !== Ne && h !== Ue) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && h === Ne && (n = we), void 0 === n && h === Ue && (n = Le), Pt.call(this, null, i, r, a, o, s, h, n, c), this.image = {
        width: e,
        height: t
      }, this.magFilter = void 0 !== o ? o : ue, this.minFilter = void 0 !== s ? s : ue, this.flipY = !1, this.generateMipmaps = !1
    }

    function pr(e) {
      vn.call(this), this.type = "WireframeGeometry";
      var t, n, i, r, a, o, s, c, h, l, u = [],
        d = [0, 0],
        p = {},
        f = ["a", "b", "c"];
      if (e && e.isGeometry) {
        var m = e.faces;
        for (t = 0, i = m.length; t < i; t++) {
          var v = m[t];
          for (n = 0; n < 3; n++) s = v[f[n]], c = v[f[(n + 1) % 3]], d[0] = Math.min(s, c), d[1] = Math.max(s, c), void 0 === p[h = d[0] + "," + d[1]] && (p[h] = {
            index1: d[0],
            index2: d[1]
          })
        }
        for (h in p) o = p[h], l = e.vertices[o.index1], u.push(l.x, l.y, l.z), l = e.vertices[o.index2], u.push(l.x, l.y, l.z)
      } else if (e && e.isBufferGeometry) {
        var g, y, x, w, b, _, E;
        if (l = new St, null !== e.index) {
          for (g = e.attributes.position, y = e.index, 0 === (x = e.groups).length && (x = [{
              start: 0,
              count: y.count,
              materialIndex: 0
            }]), r = 0, a = x.length; r < a; ++r)
            for (t = b = (w = x[r]).start, i = b + w.count; t < i; t += 3)
              for (n = 0; n < 3; n++) s = y.getX(t + n), c = y.getX(t + (n + 1) % 3), d[0] = Math.min(s, c), d[1] = Math.max(s, c), void 0 === p[h = d[0] + "," + d[1]] && (p[h] = {
                index1: d[0],
                index2: d[1]
              });
          for (h in p) o = p[h], l.fromBufferAttribute(g, o.index1), u.push(l.x, l.y, l.z), l.fromBufferAttribute(g, o.index2), u.push(l.x, l.y, l.z)
        } else
          for (t = 0, i = (g = e.attributes.position).count / 3; t < i; t++)
            for (n = 0; n < 3; n++) _ = 3 * t + n, l.fromBufferAttribute(g, _), u.push(l.x, l.y, l.z), E = 3 * t + (n + 1) % 3, l.fromBufferAttribute(g, E), u.push(l.x, l.y, l.z)
      }
      this.addAttribute("position", new un(u, 3))
    }

    function fr(e, t, n) {
      tn.call(this), this.type = "ParametricGeometry", this.parameters = {
        func: e,
        slices: t,
        stacks: n
      }, this.fromBufferGeometry(new mr(e, t, n)), this.mergeVertices()
    }

    function mr(e, t, n) {
      vn.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
        func: e,
        slices: t,
        stacks: n
      };
      var i, r, a = [],
        o = [],
        s = [],
        c = [],
        h = new St,
        l = new St,
        u = new St,
        d = new St,
        p = new St;
      e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
      var f = t + 1;
      for (i = 0; i <= n; i++) {
        var m = i / n;
        for (r = 0; r <= t; r++) {
          var v = r / t;
          e(v, m, l), o.push(l.x, l.y, l.z), v - 1e-5 >= 0 ? (e(v - 1e-5, m, u), d.subVectors(l, u)) : (e(v + 1e-5, m, u), d.subVectors(u, l)), m - 1e-5 >= 0 ? (e(v, m - 1e-5, u), p.subVectors(l, u)) : (e(v, m + 1e-5, u), p.subVectors(u, l)), h.crossVectors(d, p).normalize(), s.push(h.x, h.y, h.z), c.push(v, m)
        }
      }
      for (i = 0; i < n; i++)
        for (r = 0; r < t; r++) {
          var g = i * f + r,
            y = i * f + r + 1,
            x = (i + 1) * f + r + 1,
            w = (i + 1) * f + r;
          a.push(g, y, w), a.push(y, x, w)
        }
      this.setIndex(a), this.addAttribute("position", new un(o, 3)), this.addAttribute("normal", new un(s, 3)), this.addAttribute("uv", new un(c, 2))
    }

    function vr(e, t, n, i) {
      tn.call(this), this.type = "PolyhedronGeometry", this.parameters = {
        vertices: e,
        indices: t,
        radius: n,
        detail: i
      }, this.fromBufferGeometry(new gr(e, t, n, i)), this.mergeVertices()
    }

    function gr(e, t, n, i) {
      vn.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
        vertices: e,
        indices: t,
        radius: n,
        detail: i
      }, n = n || 1;
      var r = [],
        a = [];

      function o(e, t, n, i) {
        var r, a, o = Math.pow(2, i),
          c = [];
        for (r = 0; r <= o; r++) {
          c[r] = [];
          var h = e.clone().lerp(n, r / o),
            l = t.clone().lerp(n, r / o),
            u = o - r;
          for (a = 0; a <= u; a++) c[r][a] = 0 === a && r === o ? h : h.clone().lerp(l, a / u)
        }
        for (r = 0; r < o; r++)
          for (a = 0; a < 2 * (o - r) - 1; a++) {
            var d = Math.floor(a / 2);
            a % 2 == 0 ? (s(c[r][d + 1]), s(c[r + 1][d]), s(c[r][d])) : (s(c[r][d + 1]), s(c[r + 1][d + 1]), s(c[r + 1][d]))
          }
      }

      function s(e) {
        r.push(e.x, e.y, e.z)
      }

      function c(t, n) {
        var i = 3 * t;
        n.x = e[i + 0], n.y = e[i + 1], n.z = e[i + 2]
      }

      function h(e, t, n, i) {
        i < 0 && 1 === e.x && (a[t] = e.x - 1), 0 === n.x && 0 === n.z && (a[t] = i / 2 / Math.PI + .5)
      }

      function l(e) {
        return Math.atan2(e.z, -e.x)
      }

      function u(e) {
        return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
      }! function (e) {
        for (var n = new St, i = new St, r = new St, a = 0; a < t.length; a += 3) c(t[a + 0], n), c(t[a + 1], i), c(t[a + 2], r), o(n, i, r, e)
      }(i = i || 0),
      function (e) {
        for (var t = new St, n = 0; n < r.length; n += 3) t.x = r[n + 0], t.y = r[n + 1], t.z = r[n + 2], t.normalize().multiplyScalar(e), r[n + 0] = t.x, r[n + 1] = t.y, r[n + 2] = t.z
      }(n),
      function () {
        for (var e = new St, t = 0; t < r.length; t += 3) {
          e.x = r[t + 0], e.y = r[t + 1], e.z = r[t + 2];
          var n = l(e) / 2 / Math.PI + .5,
            i = u(e) / Math.PI + .5;
          a.push(n, 1 - i)
        }(function () {
          for (var e = new St, t = new St, n = new St, i = new St, o = new Et, s = new Et, c = new Et, u = 0, d = 0; u < r.length; u += 9, d += 6) {
            e.set(r[u + 0], r[u + 1], r[u + 2]), t.set(r[u + 3], r[u + 4], r[u + 5]), n.set(r[u + 6], r[u + 7], r[u + 8]), o.set(a[d + 0], a[d + 1]), s.set(a[d + 2], a[d + 3]), c.set(a[d + 4], a[d + 5]), i.copy(e).add(t).add(n).divideScalar(3);
            var p = l(i);
            h(o, d + 0, e, p), h(s, d + 2, t, p), h(c, d + 4, n, p)
          }
        })(),
        function () {
          for (var e = 0; e < a.length; e += 6) {
            var t = a[e + 0],
              n = a[e + 2],
              i = a[e + 4],
              r = Math.max(t, n, i),
              o = Math.min(t, n, i);
            r > .9 && o < .1 && (t < .2 && (a[e + 0] += 1), n < .2 && (a[e + 2] += 1), i < .2 && (a[e + 4] += 1))
          }
        }()
      }(), this.addAttribute("position", new un(r, 3)), this.addAttribute("normal", new un(r.slice(), 3)), this.addAttribute("uv", new un(a, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function yr(e, t) {
      tn.call(this), this.type = "TetrahedronGeometry", this.parameters = {
        radius: e,
        detail: t
      }, this.fromBufferGeometry(new xr(e, t)), this.mergeVertices()
    }

    function xr(e, t) {
      gr.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
        radius: e,
        detail: t
      }
    }

    function wr(e, t) {
      tn.call(this), this.type = "OctahedronGeometry", this.parameters = {
        radius: e,
        detail: t
      }, this.fromBufferGeometry(new br(e, t)), this.mergeVertices()
    }

    function br(e, t) {
      gr.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
        radius: e,
        detail: t
      }
    }

    function _r(e, t) {
      tn.call(this), this.type = "IcosahedronGeometry", this.parameters = {
        radius: e,
        detail: t
      }, this.fromBufferGeometry(new Er(e, t)), this.mergeVertices()
    }

    function Er(e, t) {
      var n = (1 + Math.sqrt(5)) / 2,
        i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
      gr.call(this, i, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
        radius: e,
        detail: t
      }
    }

    function Mr(e, t) {
      tn.call(this), this.type = "DodecahedronGeometry", this.parameters = {
        radius: e,
        detail: t
      }, this.fromBufferGeometry(new Tr(e, t)), this.mergeVertices()
    }

    function Tr(e, t) {
      var n = (1 + Math.sqrt(5)) / 2,
        i = 1 / n,
        r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i];
      gr.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
        radius: e,
        detail: t
      }
    }

    function Sr(e, t, n, i, r, a) {
      tn.call(this), this.type = "TubeGeometry", this.parameters = {
        path: e,
        tubularSegments: t,
        radius: n,
        radialSegments: i,
        closed: r
      }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
      var o = new Ar(e, t, n, i, r);
      this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
    }

    function Ar(e, t, n, i, r) {
      vn.call(this), this.type = "TubeBufferGeometry", this.parameters = {
        path: e,
        tubularSegments: t,
        radius: n,
        radialSegments: i,
        closed: r
      }, t = t || 64, n = n || 1, i = i || 8, r = r || !1;
      var a = e.computeFrenetFrames(t, r);
      this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
      var o, s, c = new St,
        h = new St,
        l = new Et,
        u = new St,
        d = [],
        p = [],
        f = [],
        m = [];

      function v(r) {
        u = e.getPointAt(r / t, u);
        var o = a.normals[r],
          l = a.binormals[r];
        for (s = 0; s <= i; s++) {
          var f = s / i * Math.PI * 2,
            m = Math.sin(f),
            v = -Math.cos(f);
          h.x = v * o.x + m * l.x, h.y = v * o.y + m * l.y, h.z = v * o.z + m * l.z, h.normalize(), p.push(h.x, h.y, h.z), c.x = u.x + n * h.x, c.y = u.y + n * h.y, c.z = u.z + n * h.z, d.push(c.x, c.y, c.z)
        }
      }! function () {
        for (o = 0; o < t; o++) v(o);
        v(!1 === r ? t : 0),
          function () {
            for (o = 0; o <= t; o++)
              for (s = 0; s <= i; s++) l.x = o / t, l.y = s / i, f.push(l.x, l.y)
          }(),
          function () {
            for (s = 1; s <= t; s++)
              for (o = 1; o <= i; o++) {
                var e = (i + 1) * (s - 1) + (o - 1),
                  n = (i + 1) * s + (o - 1),
                  r = (i + 1) * s + o,
                  a = (i + 1) * (s - 1) + o;
                m.push(e, n, a), m.push(n, r, a)
              }
          }()
      }(), this.setIndex(m), this.addAttribute("position", new un(d, 3)), this.addAttribute("normal", new un(p, 3)), this.addAttribute("uv", new un(f, 2))
    }

    function Lr(e, t, n, i, r, a, o) {
      tn.call(this), this.type = "TorusKnotGeometry", this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: n,
        radialSegments: i,
        p: r,
        q: a
      }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Rr(e, t, n, i, r, a)), this.mergeVertices()
    }

    function Rr(e, t, n, i, r, a) {
      vn.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: n,
        radialSegments: i,
        p: r,
        q: a
      }, e = e || 1, t = t || .4, n = Math.floor(n) || 64, i = Math.floor(i) || 8, r = r || 2, a = a || 3;
      var o, s, c = [],
        h = [],
        l = [],
        u = [],
        d = new St,
        p = new St,
        f = new St,
        m = new St,
        v = new St,
        g = new St,
        y = new St;
      for (o = 0; o <= n; ++o) {
        var x = o / n * r * Math.PI * 2;
        for (A(x, r, a, e, f), A(x + .01, r, a, e, m), g.subVectors(m, f), y.addVectors(m, f), v.crossVectors(g, y), y.crossVectors(v, g), v.normalize(), y.normalize(), s = 0; s <= i; ++s) {
          var w = s / i * Math.PI * 2,
            b = -t * Math.cos(w),
            _ = t * Math.sin(w);
          d.x = f.x + (b * y.x + _ * v.x), d.y = f.y + (b * y.y + _ * v.y), d.z = f.z + (b * y.z + _ * v.z), h.push(d.x, d.y, d.z), p.subVectors(d, f).normalize(), l.push(p.x, p.y, p.z), u.push(o / n), u.push(s / i)
        }
      }
      for (s = 1; s <= n; s++)
        for (o = 1; o <= i; o++) {
          var E = (i + 1) * (s - 1) + (o - 1),
            M = (i + 1) * s + (o - 1),
            T = (i + 1) * s + o,
            S = (i + 1) * (s - 1) + o;
          c.push(E, M, S), c.push(M, T, S)
        }

      function A(e, t, n, i, r) {
        var a = Math.cos(e),
          o = Math.sin(e),
          s = n / t * e,
          c = Math.cos(s);
        r.x = i * (2 + c) * .5 * a, r.y = i * (2 + c) * o * .5, r.z = i * Math.sin(s) * .5
      }
      this.setIndex(c), this.addAttribute("position", new un(h, 3)), this.addAttribute("normal", new un(l, 3)), this.addAttribute("uv", new un(u, 2))
    }

    function Pr(e, t, n, i, r) {
      tn.call(this), this.type = "TorusGeometry", this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: i,
        arc: r
      }, this.fromBufferGeometry(new Cr(e, t, n, i, r)), this.mergeVertices()
    }

    function Cr(e, t, n, i, r) {
      vn.call(this), this.type = "TorusBufferGeometry", this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: i,
        arc: r
      }, e = e || 1, t = t || .4, n = Math.floor(n) || 8, i = Math.floor(i) || 6, r = r || 2 * Math.PI;
      var a, o, s = [],
        c = [],
        h = [],
        l = [],
        u = new St,
        d = new St,
        p = new St;
      for (a = 0; a <= n; a++)
        for (o = 0; o <= i; o++) {
          var f = o / i * r,
            m = a / n * Math.PI * 2;
          d.x = (e + t * Math.cos(m)) * Math.cos(f), d.y = (e + t * Math.cos(m)) * Math.sin(f), d.z = t * Math.sin(m), c.push(d.x, d.y, d.z), u.x = e * Math.cos(f), u.y = e * Math.sin(f), p.subVectors(d, u).normalize(), h.push(p.x, p.y, p.z), l.push(o / i), l.push(a / n)
        }
      for (a = 1; a <= n; a++)
        for (o = 1; o <= i; o++) {
          var v = (i + 1) * a + o - 1,
            g = (i + 1) * (a - 1) + o - 1,
            y = (i + 1) * (a - 1) + o,
            x = (i + 1) * a + o;
          s.push(v, g, x), s.push(g, y, x)
        }
      this.setIndex(s), this.addAttribute("position", new un(c, 3)), this.addAttribute("normal", new un(h, 3)), this.addAttribute("uv", new un(l, 2))
    }
    Ui.prototype = Object.create(_n.prototype), Ui.prototype.constructor = Ui, Ui.prototype.isMeshDepthMaterial = !0, Ui.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }, Bi.prototype = Object.create(_n.prototype), Bi.prototype.constructor = Bi, Bi.prototype.isMeshDistanceMaterial = !0, Bi.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
    }, Gi.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: Gi,
      isGroup: !0
    }), ki.prototype = Object.assign(Object.create(Qt.prototype), {
      constructor: ki,
      isPerspectiveCamera: !0,
      copy: function (e, t) {
        return Qt.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
      },
      setFocalLength: function (e) {
        var t = .5 * this.getFilmHeight() / e;
        this.fov = 2 * _t.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
      },
      getFocalLength: function () {
        var e = Math.tan(.5 * _t.DEG2RAD * this.fov);
        return .5 * this.getFilmHeight() / e
      },
      getEffectiveFOV: function () {
        return 2 * _t.RAD2DEG * Math.atan(Math.tan(.5 * _t.DEG2RAD * this.fov) / this.zoom)
      },
      getFilmWidth: function () {
        return this.filmGauge * Math.min(this.aspect, 1)
      },
      getFilmHeight: function () {
        return this.filmGauge / Math.max(this.aspect, 1)
      },
      setViewOffset: function (e, t, n, i, r, a) {
        this.aspect = e / t, null === this.view && (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
      },
      clearViewOffset: function () {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
      },
      updateProjectionMatrix: function () {
        var e = this.near,
          t = e * Math.tan(.5 * _t.DEG2RAD * this.fov) / this.zoom,
          n = 2 * t,
          i = this.aspect * n,
          r = -.5 * i,
          a = this.view;
        if (null !== this.view && this.view.enabled) {
          var o = a.fullWidth,
            s = a.fullHeight;
          r += a.offsetX * i / o, t -= a.offsetY * n / s, i *= a.width / o, n *= a.height / s
        }
        var c = this.filmOffset;
        0 !== c && (r += e * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far)
      },
      toJSON: function (e) {
        var t = Jt.prototype.toJSON.call(this, e);
        return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
      }
    }), ji.prototype = Object.assign(Object.create(ki.prototype), {
      constructor: ji,
      isArrayCamera: !0
    }), Xi.prototype.isFogExp2 = !0, Xi.prototype.clone = function () {
      return new Xi(this.color, this.density)
    }, Xi.prototype.toJSON = function () {
      return {
        type: "FogExp2",
        color: this.color.getHex(),
        density: this.density
      }
    }, Yi.prototype.isFog = !0, Yi.prototype.clone = function () {
      return new Yi(this.color, this.near, this.far)
    }, Yi.prototype.toJSON = function () {
      return {
        type: "Fog",
        color: this.color.getHex(),
        near: this.near,
        far: this.far
      }
    }, qi.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: qi,
      copy: function (e, t) {
        return Jt.prototype.copy.call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
      },
      toJSON: function (e) {
        var t = Jt.prototype.toJSON.call(this, e);
        return null !== this.background && (t.object.background = this.background.toJSON(e)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t
      }
    }), Object.defineProperty(Zi.prototype, "needsUpdate", {
      set: function (e) {
        !0 === e && this.version++
      }
    }), Object.assign(Zi.prototype, {
      isInterleavedBuffer: !0,
      onUploadCallback: function () {},
      setArray: function (e) {
        if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        return this.count = void 0 !== e ? e.length / this.stride : 0, this.array = e, this
      },
      setDynamic: function (e) {
        return this.dynamic = e, this
      },
      copy: function (e) {
        return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.dynamic = e.dynamic, this
      },
      copyAt: function (e, t, n) {
        e *= this.stride, n *= t.stride;
        for (var i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
        return this
      },
      set: function (e, t) {
        return void 0 === t && (t = 0), this.array.set(e, t), this
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      onUpload: function (e) {
        return this.onUploadCallback = e, this
      }
    }), Object.defineProperties(Ji.prototype, {
      count: {
        get: function () {
          return this.data.count
        }
      },
      array: {
        get: function () {
          return this.data.array
        }
      }
    }), Object.assign(Ji.prototype, {
      isInterleavedBufferAttribute: !0,
      setX: function (e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t, this
      },
      setY: function (e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t, this
      },
      setZ: function (e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t, this
      },
      setW: function (e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t, this
      },
      getX: function (e) {
        return this.data.array[e * this.data.stride + this.offset]
      },
      getY: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
      },
      getZ: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
      },
      getW: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
      },
      setXY: function (e, t, n) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
      },
      setXYZ: function (e, t, n, i) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this
      },
      setXYZW: function (e, t, n, i, r) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this
      }
    }), Qi.prototype = Object.create(_n.prototype), Qi.prototype.constructor = Qi, Qi.prototype.isSpriteMaterial = !0, Qi.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this
    }, Ki.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: Ki,
      isSprite: !0,
      raycast: function () {
        var e = new St,
          t = new St,
          n = new St,
          i = new Et,
          r = new Et,
          a = new Mt,
          o = new St,
          s = new St,
          c = new St;

        function h(e, t, n, o, s, c) {
          i.subVectors(e, n).addScalar(.5).multiply(o), void 0 !== s ? (r.x = c * i.x - s * i.y, r.y = s * i.x + c * i.y) : r.copy(i), e.copy(t), e.x += r.x, e.y += r.y, e.applyMatrix4(a)
        }
        return function (i, r) {
          t.setFromMatrixScale(this.matrixWorld), a.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), n.setFromMatrixPosition(this.modelViewMatrix);
          var l, u, d = this.material.rotation;
          0 !== d && (u = Math.cos(d), l = Math.sin(d));
          var p = this.center;
          h(o.set(-.5, -.5, 0), n, p, t, l, u), h(s.set(.5, -.5, 0), n, p, t, l, u), h(c.set(.5, .5, 0), n, p, t, l, u);
          var f = i.ray.intersectTriangle(o, s, c, !1, e);
          if (null !== f || (h(s.set(-.5, .5, 0), n, p, t, l, u), null !== (f = i.ray.intersectTriangle(o, c, s, !1, e)))) {
            var m = i.ray.origin.distanceTo(e);
            m < i.near || m > i.far || r.push({
              distance: m,
              point: e.clone(),
              face: null,
              object: this
            })
          }
        }
      }(),
      clone: function () {
        return new this.constructor(this.material).copy(this)
      },
      copy: function (e) {
        return Jt.prototype.copy.call(this, e), void 0 !== e.center && this.center.copy(e.center), this
      }
    }), $i.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: $i,
      copy: function (e) {
        Jt.prototype.copy.call(this, e, !1);
        for (var t = e.levels, n = 0, i = t.length; n < i; n++) {
          var r = t[n];
          this.addLevel(r.object.clone(), r.distance)
        }
        return this
      },
      addLevel: function (e, t) {
        void 0 === t && (t = 0), t = Math.abs(t);
        for (var n = this.levels, i = 0; i < n.length && !(t < n[i].distance); i++);
        n.splice(i, 0, {
          distance: t,
          object: e
        }), this.add(e)
      },
      getObjectForDistance: function (e) {
        for (var t = this.levels, n = 1, i = t.length; n < i && !(e < t[n].distance); n++);
        return t[n - 1].object
      },
      raycast: function () {
        var e = new St;
        return function (t, n) {
          e.setFromMatrixPosition(this.matrixWorld);
          var i = t.ray.origin.distanceTo(e);
          this.getObjectForDistance(i).raycast(t, n)
        }
      }(),
      update: function () {
        var e = new St,
          t = new St;
        return function (n) {
          var i = this.levels;
          if (i.length > 1) {
            e.setFromMatrixPosition(n.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
            var r = e.distanceTo(t);
            i[0].object.visible = !0;
            for (var a = 1, o = i.length; a < o && r >= i[a].distance; a++) i[a - 1].object.visible = !1, i[a].object.visible = !0;
            for (; a < o; a++) i[a].object.visible = !1
          }
        }
      }(),
      toJSON: function (e) {
        var t = Jt.prototype.toJSON.call(this, e);
        t.object.levels = [];
        for (var n = this.levels, i = 0, r = n.length; i < r; i++) {
          var a = n[i];
          t.object.levels.push({
            object: a.object.uuid,
            distance: a.distance
          })
        }
        return t
      }
    }), Object.assign(er.prototype, {
      calculateInverses: function () {
        this.boneInverses = [];
        for (var e = 0, t = this.bones.length; e < t; e++) {
          var n = new Mt;
          this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n)
        }
      },
      pose: function () {
        var e, t, n;
        for (t = 0, n = this.bones.length; t < n; t++)(e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
        for (t = 0, n = this.bones.length; t < n; t++)(e = this.bones[t]) && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
      },
      update: function () {
        var e = new Mt,
          t = new Mt;
        return function () {
          for (var n = this.bones, i = this.boneInverses, r = this.boneMatrices, a = this.boneTexture, o = 0, s = n.length; o < s; o++) {
            var c = n[o] ? n[o].matrixWorld : t;
            e.multiplyMatrices(c, i[o]), e.toArray(r, 16 * o)
          }
          void 0 !== a && (a.needsUpdate = !0)
        }
      }(),
      clone: function () {
        return new er(this.bones, this.boneInverses)
      },
      getBoneByName: function (e) {
        for (var t = 0, n = this.bones.length; t < n; t++) {
          var i = this.bones[t];
          if (i.name === e) return i
        }
      }
    }), tr.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: tr,
      isBone: !0
    }), nr.prototype = Object.assign(Object.create(An.prototype), {
      constructor: nr,
      isSkinnedMesh: !0,
      initBones: function () {
        var e, t, n, i, r = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
          for (n = 0, i = this.geometry.bones.length; n < i; n++) t = this.geometry.bones[n], e = new tr, r.push(e), e.name = t.name, e.position.fromArray(t.pos), e.quaternion.fromArray(t.rotq), void 0 !== t.scl && e.scale.fromArray(t.scl);
          for (n = 0, i = this.geometry.bones.length; n < i; n++) - 1 !== (t = this.geometry.bones[n]).parent && null !== t.parent && void 0 !== r[t.parent] ? r[t.parent].add(r[n]) : this.add(r[n])
        }
        return this.updateMatrixWorld(!0), r
      },
      bind: function (e, t) {
        this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
      },
      pose: function () {
        this.skeleton.pose()
      },
      normalizeSkinWeights: function () {
        var e, t;
        if (this.geometry && this.geometry.isGeometry)
          for (t = 0; t < this.geometry.skinWeights.length; t++) {
            var n = this.geometry.skinWeights[t];
            (e = 1 / n.manhattanLength()) !== 1 / 0 ? n.multiplyScalar(e) : n.set(1, 0, 0, 0)
          } else if (this.geometry && this.geometry.isBufferGeometry) {
            var i = new Ct,
              r = this.geometry.attributes.skinWeight;
            for (t = 0; t < r.count; t++) i.x = r.getX(t), i.y = r.getY(t), i.z = r.getZ(t), i.w = r.getW(t), (e = 1 / i.manhattanLength()) !== 1 / 0 ? i.multiplyScalar(e) : i.set(1, 0, 0, 0), r.setXYZW(t, i.x, i.y, i.z, i.w)
          }
      },
      updateMatrixWorld: function (e) {
        An.prototype.updateMatrixWorld.call(this, e), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
      },
      clone: function () {
        return new this.constructor(this.geometry, this.material).copy(this)
      }
    }), ir.prototype = Object.create(_n.prototype), ir.prototype.constructor = ir, ir.prototype.isLineBasicMaterial = !0, ir.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
    }, rr.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: rr,
      isLine: !0,
      computeLineDistances: function () {
        var e = new St,
          t = new St;
        return function () {
          var n = this.geometry;
          if (n.isBufferGeometry)
            if (null === n.index) {
              for (var i = n.attributes.position, r = [0], a = 1, o = i.count; a < o; a++) e.fromBufferAttribute(i, a - 1), t.fromBufferAttribute(i, a), r[a] = r[a - 1], r[a] += e.distanceTo(t);
              n.addAttribute("lineDistance", new un(r, 1))
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          else if (n.isGeometry) {
            var s = n.vertices;
            (r = n.lineDistances)[0] = 0;
            for (a = 1, o = s.length; a < o; a++) r[a] = r[a - 1], r[a] += s[a - 1].distanceTo(s[a])
          }
          return this
        }
      }(),
      raycast: function () {
        var e = new Mt,
          t = new Tn,
          n = new Ut;
        return function (i, r) {
          var a = i.linePrecision,
            o = a * a,
            s = this.geometry,
            c = this.matrixWorld;
          if (null === s.boundingSphere && s.computeBoundingSphere(), n.copy(s.boundingSphere), n.applyMatrix4(c), !1 !== i.ray.intersectsSphere(n)) {
            e.getInverse(c), t.copy(i.ray).applyMatrix4(e);
            var h = new St,
              l = new St,
              u = new St,
              d = new St,
              p = this && this.isLineSegments ? 2 : 1;
            if (s.isBufferGeometry) {
              var f = s.index,
                m = s.attributes.position.array;
              if (null !== f)
                for (var v = f.array, g = 0, y = v.length - 1; g < y; g += p) {
                  var x = v[g],
                    w = v[g + 1];
                  if (h.fromArray(m, 3 * x), l.fromArray(m, 3 * w), !(t.distanceSqToSegment(h, l, d, u) > o)) d.applyMatrix4(this.matrixWorld), (E = i.ray.origin.distanceTo(d)) < i.near || E > i.far || r.push({
                    distance: E,
                    point: u.clone().applyMatrix4(this.matrixWorld),
                    index: g,
                    face: null,
                    faceIndex: null,
                    object: this
                  })
                } else
                  for (g = 0, y = m.length / 3 - 1; g < y; g += p) {
                    if (h.fromArray(m, 3 * g), l.fromArray(m, 3 * g + 3), !(t.distanceSqToSegment(h, l, d, u) > o)) d.applyMatrix4(this.matrixWorld), (E = i.ray.origin.distanceTo(d)) < i.near || E > i.far || r.push({
                      distance: E,
                      point: u.clone().applyMatrix4(this.matrixWorld),
                      index: g,
                      face: null,
                      faceIndex: null,
                      object: this
                    })
                  }
            } else if (s.isGeometry) {
              var b = s.vertices,
                _ = b.length;
              for (g = 0; g < _ - 1; g += p) {
                var E;
                if (!(t.distanceSqToSegment(b[g], b[g + 1], d, u) > o)) d.applyMatrix4(this.matrixWorld), (E = i.ray.origin.distanceTo(d)) < i.near || E > i.far || r.push({
                  distance: E,
                  point: u.clone().applyMatrix4(this.matrixWorld),
                  index: g,
                  face: null,
                  faceIndex: null,
                  object: this
                })
              }
            }
          }
        }
      }(),
      clone: function () {
        return new this.constructor(this.geometry, this.material).copy(this)
      }
    }), ar.prototype = Object.assign(Object.create(rr.prototype), {
      constructor: ar,
      isLineSegments: !0,
      computeLineDistances: function () {
        var e = new St,
          t = new St;
        return function () {
          var n = this.geometry;
          if (n.isBufferGeometry)
            if (null === n.index) {
              for (var i = n.attributes.position, r = [], a = 0, o = i.count; a < o; a += 2) e.fromBufferAttribute(i, a), t.fromBufferAttribute(i, a + 1), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + e.distanceTo(t);
              n.addAttribute("lineDistance", new un(r, 1))
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          else if (n.isGeometry) {
            var s = n.vertices;
            for (r = n.lineDistances, a = 0, o = s.length; a < o; a += 2) e.copy(s[a]), t.copy(s[a + 1]), r[a] = 0 === a ? 0 : r[a - 1], r[a + 1] = r[a] + e.distanceTo(t)
          }
          return this
        }
      }()
    }), or.prototype = Object.assign(Object.create(rr.prototype), {
      constructor: or,
      isLineLoop: !0
    }), sr.prototype = Object.create(_n.prototype), sr.prototype.constructor = sr, sr.prototype.isPointsMaterial = !0, sr.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this
    }, cr.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: cr,
      isPoints: !0,
      raycast: function () {
        var e = new Mt,
          t = new Tn,
          n = new Ut;
        return function (i, r) {
          var a = this,
            o = this.geometry,
            s = this.matrixWorld,
            c = i.params.Points.threshold;
          if (null === o.boundingSphere && o.computeBoundingSphere(), n.copy(o.boundingSphere), n.applyMatrix4(s), n.radius += c, !1 !== i.ray.intersectsSphere(n)) {
            e.getInverse(s), t.copy(i.ray).applyMatrix4(e);
            var h = c / ((this.scale.x + this.scale.y + this.scale.z) / 3),
              l = h * h,
              u = new St,
              d = new St;
            if (o.isBufferGeometry) {
              var p = o.index,
                f = o.attributes.position.array;
              if (null !== p)
                for (var m = p.array, v = 0, g = m.length; v < g; v++) {
                  var y = m[v];
                  u.fromArray(f, 3 * y), b(u, y)
                } else {
                  v = 0;
                  for (var x = f.length / 3; v < x; v++) u.fromArray(f, 3 * v), b(u, v)
                }
            } else {
              var w = o.vertices;
              for (v = 0, x = w.length; v < x; v++) b(w[v], v)
            }
          }

          function b(e, n) {
            var o = t.distanceSqToPoint(e);
            if (o < l) {
              t.closestPointToPoint(e, d), d.applyMatrix4(s);
              var c = i.ray.origin.distanceTo(d);
              if (c < i.near || c > i.far) return;
              r.push({
                distance: c,
                distanceToRay: Math.sqrt(o),
                point: d.clone(),
                index: n,
                face: null,
                object: a
              })
            }
          }
        }
      }(),
      clone: function () {
        return new this.constructor(this.geometry, this.material).copy(this)
      }
    }), hr.prototype = Object.assign(Object.create(Pt.prototype), {
      constructor: hr,
      isVideoTexture: !0,
      update: function () {
        var e = this.image;
        e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
      }
    }), lr.prototype = Object.create(Pt.prototype), lr.prototype.constructor = lr, lr.prototype.isCompressedTexture = !0, ur.prototype = Object.create(Pt.prototype), ur.prototype.constructor = ur, ur.prototype.isCanvasTexture = !0, dr.prototype = Object.create(Pt.prototype), dr.prototype.constructor = dr, dr.prototype.isDepthTexture = !0, pr.prototype = Object.create(vn.prototype), pr.prototype.constructor = pr, fr.prototype = Object.create(tn.prototype), fr.prototype.constructor = fr, mr.prototype = Object.create(vn.prototype), mr.prototype.constructor = mr, vr.prototype = Object.create(tn.prototype), vr.prototype.constructor = vr, gr.prototype = Object.create(vn.prototype), gr.prototype.constructor = gr, yr.prototype = Object.create(tn.prototype), yr.prototype.constructor = yr, xr.prototype = Object.create(gr.prototype), xr.prototype.constructor = xr, wr.prototype = Object.create(tn.prototype), wr.prototype.constructor = wr, br.prototype = Object.create(gr.prototype), br.prototype.constructor = br, _r.prototype = Object.create(tn.prototype), _r.prototype.constructor = _r, Er.prototype = Object.create(gr.prototype), Er.prototype.constructor = Er, Mr.prototype = Object.create(tn.prototype), Mr.prototype.constructor = Mr, Tr.prototype = Object.create(gr.prototype), Tr.prototype.constructor = Tr, Sr.prototype = Object.create(tn.prototype), Sr.prototype.constructor = Sr, Ar.prototype = Object.create(vn.prototype), Ar.prototype.constructor = Ar, Lr.prototype = Object.create(tn.prototype), Lr.prototype.constructor = Lr, Rr.prototype = Object.create(vn.prototype), Rr.prototype.constructor = Rr, Pr.prototype = Object.create(tn.prototype), Pr.prototype.constructor = Pr, Cr.prototype = Object.create(vn.prototype), Cr.prototype.constructor = Cr;
    var Or = function (e, t, n) {
      n = n || 2;
      var i, r, a, o, s, c, h, l = t && t.length,
        u = l ? t[0] * n : e.length,
        d = Ir(e, 0, u, n, !0),
        p = [];
      if (!d) return p;
      if (l && (d = function (e, t, n, i) {
          var r, a, o, s, c, h = [];
          for (r = 0, a = t.length; r < a; r++) o = t[r] * i, s = r < a - 1 ? t[r + 1] * i : e.length, (c = Ir(e, o, s, i, !1)) === c.next && (c.steiner = !0), h.push(jr(c));
          for (h.sort(zr), r = 0; r < h.length; r++) Gr(h[r], n), n = Dr(n, n.next);
          return n
        }(e, t, d, n)), e.length > 80 * n) {
        i = a = e[0], r = o = e[1];
        for (var f = n; f < u; f += n) s = e[f], c = e[f + 1], s < i && (i = s), c < r && (r = c), s > a && (a = s), c > o && (o = c);
        h = 0 !== (h = Math.max(a - i, o - r)) ? 1 / h : 0
      }
      return Nr(d, p, n, i, r, h), p
    };

    function Ir(e, t, n, i, r) {
      var a, o;
      if (r === function (e, t, n, i) {
          for (var r = 0, a = t, o = n - i; a < n; a += i) r += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
          return r
        }(e, t, n, i) > 0)
        for (a = t; a < n; a += i) o = Qr(a, e[a], e[a + 1], o);
      else
        for (a = n - i; a >= t; a -= i) o = Qr(a, e[a], e[a + 1], o);
      return o && Yr(o, o.next) && (Kr(o), o = o.next), o
    }

    function Dr(e, t) {
      if (!e) return e;
      t || (t = e);
      var n, i = e;
      do {
        if (n = !1, i.steiner || !Yr(i, i.next) && 0 !== Xr(i.prev, i, i.next)) i = i.next;
        else {
          if (Kr(i), (i = t = i.prev) === i.next) break;
          n = !0
        }
      } while (n || i !== t);
      return t
    }

    function Nr(e, t, n, i, r, a, o) {
      if (e) {
        !o && a && function (e, t, n, i) {
          var r = e;
          do {
            null === r.z && (r.z = kr(r.x, r.y, t, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
          } while (r !== e);
          r.prevZ.nextZ = null, r.prevZ = null,
            function (e) {
              var t, n, i, r, a, o, s, c, h = 1;
              do {
                for (n = e, e = null, a = null, o = 0; n;) {
                  for (o++, i = n, s = 0, t = 0; t < h && (s++, i = i.nextZ); t++);
                  for (c = h; s > 0 || c > 0 && i;) 0 !== s && (0 === c || !i || n.z <= i.z) ? (r = n, n = n.nextZ, s--) : (r = i, i = i.nextZ, c--), a ? a.nextZ = r : e = r, r.prevZ = a, a = r;
                  n = i
                }
                a.nextZ = null, h *= 2
              } while (o > 1)
            }(r)
        }(e, i, r, a);
        for (var s, c, h = e; e.prev !== e.next;)
          if (s = e.prev, c = e.next, a ? Br(e, i, r, a) : Ur(e)) t.push(s.i / n), t.push(e.i / n), t.push(c.i / n), Kr(e), e = c.next, h = c.next;
          else if ((e = c) === h) {
          o ? 1 === o ? Nr(e = Fr(e, t, n), t, n, i, r, a, 2) : 2 === o && Hr(e, t, n, i, r, a) : Nr(Dr(e), t, n, i, r, a, 1);
          break
        }
      }
    }

    function Ur(e) {
      var t = e.prev,
        n = e,
        i = e.next;
      if (Xr(t, n, i) >= 0) return !1;
      for (var r = e.next.next; r !== e.prev;) {
        if (Vr(t.x, t.y, n.x, n.y, i.x, i.y, r.x, r.y) && Xr(r.prev, r, r.next) >= 0) return !1;
        r = r.next
      }
      return !0
    }

    function Br(e, t, n, i) {
      var r = e.prev,
        a = e,
        o = e.next;
      if (Xr(r, a, o) >= 0) return !1;
      for (var s = r.x < a.x ? r.x < o.x ? r.x : o.x : a.x < o.x ? a.x : o.x, c = r.y < a.y ? r.y < o.y ? r.y : o.y : a.y < o.y ? a.y : o.y, h = r.x > a.x ? r.x > o.x ? r.x : o.x : a.x > o.x ? a.x : o.x, l = r.y > a.y ? r.y > o.y ? r.y : o.y : a.y > o.y ? a.y : o.y, u = kr(s, c, t, n, i), d = kr(h, l, t, n, i), p = e.nextZ; p && p.z <= d;) {
        if (p !== e.prev && p !== e.next && Vr(r.x, r.y, a.x, a.y, o.x, o.y, p.x, p.y) && Xr(p.prev, p, p.next) >= 0) return !1;
        p = p.nextZ
      }
      for (p = e.prevZ; p && p.z >= u;) {
        if (p !== e.prev && p !== e.next && Vr(r.x, r.y, a.x, a.y, o.x, o.y, p.x, p.y) && Xr(p.prev, p, p.next) >= 0) return !1;
        p = p.prevZ
      }
      return !0
    }

    function Fr(e, t, n) {
      var i = e;
      do {
        var r = i.prev,
          a = i.next.next;
        !Yr(r, a) && qr(r, i, i.next, a) && Zr(r, a) && Zr(a, r) && (t.push(r.i / n), t.push(i.i / n), t.push(a.i / n), Kr(i), Kr(i.next), i = e = a), i = i.next
      } while (i !== e);
      return i
    }

    function Hr(e, t, n, i, r, a) {
      var o = e;
      do {
        for (var s = o.next.next; s !== o.prev;) {
          if (o.i !== s.i && Wr(o, s)) {
            var c = Jr(o, s);
            return o = Dr(o, o.next), c = Dr(c, c.next), Nr(o, t, n, i, r, a), void Nr(c, t, n, i, r, a)
          }
          s = s.next
        }
        o = o.next
      } while (o !== e)
    }

    function zr(e, t) {
      return e.x - t.x
    }

    function Gr(e, t) {
      if (t = function (e, t) {
          var n, i = t,
            r = e.x,
            a = e.y,
            o = -1 / 0;
          do {
            if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
              var s = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
              if (s <= r && s > o) {
                if (o = s, s === r) {
                  if (a === i.y) return i;
                  if (a === i.next.y) return i.next
                }
                n = i.x < i.next.x ? i : i.next
              }
            }
            i = i.next
          } while (i !== t);
          if (!n) return null;
          if (r === o) return n.prev;
          var c, h = n,
            l = n.x,
            u = n.y,
            d = 1 / 0;
          i = n.next;
          for (; i !== h;) r >= i.x && i.x >= l && r !== i.x && Vr(a < u ? r : o, a, l, u, a < u ? o : r, a, i.x, i.y) && ((c = Math.abs(a - i.y) / (r - i.x)) < d || c === d && i.x > n.x) && Zr(i, e) && (n = i, d = c), i = i.next;
          return n
        }(e, t)) {
        var n = Jr(t, e);
        Dr(n, n.next)
      }
    }

    function kr(e, t, n, i, r) {
      return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
    }

    function jr(e) {
      var t = e,
        n = e;
      do {
        t.x < n.x && (n = t), t = t.next
      } while (t !== e);
      return n
    }

    function Vr(e, t, n, i, r, a, o, s) {
      return (r - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (i - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (r - o) * (i - s) >= 0
    }

    function Wr(e, t) {
      return e.next.i !== t.i && e.prev.i !== t.i && ! function (e, t) {
        var n = e;
        do {
          if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && qr(n, n.next, e, t)) return !0;
          n = n.next
        } while (n !== e);
        return !1
      }(e, t) && Zr(e, t) && Zr(t, e) && function (e, t) {
        var n = e,
          i = !1,
          r = (e.x + t.x) / 2,
          a = (e.y + t.y) / 2;
        do {
          n.y > a != n.next.y > a && n.next.y !== n.y && r < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
        } while (n !== e);
        return i
      }(e, t)
    }

    function Xr(e, t, n) {
      return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
    }

    function Yr(e, t) {
      return e.x === t.x && e.y === t.y
    }

    function qr(e, t, n, i) {
      return !!(Yr(e, t) && Yr(n, i) || Yr(e, i) && Yr(n, t)) || Xr(e, t, n) > 0 != Xr(e, t, i) > 0 && Xr(n, i, e) > 0 != Xr(n, i, t) > 0
    }

    function Zr(e, t) {
      return Xr(e.prev, e, e.next) < 0 ? Xr(e, t, e.next) >= 0 && Xr(e, e.prev, t) >= 0 : Xr(e, t, e.prev) < 0 || Xr(e, e.next, t) < 0
    }

    function Jr(e, t) {
      var n = new $r(e.i, e.x, e.y),
        i = new $r(t.i, t.x, t.y),
        r = e.next,
        a = t.prev;
      return e.next = t, t.prev = e, n.next = r, r.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
    }

    function Qr(e, t, n, i) {
      var r = new $r(e, t, n);
      return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
    }

    function Kr(e) {
      e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
    }

    function $r(e, t, n) {
      this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }
    var ea = {
      area: function (e) {
        for (var t = e.length, n = 0, i = t - 1, r = 0; r < t; i = r++) n += e[i].x * e[r].y - e[r].x * e[i].y;
        return .5 * n
      },
      isClockWise: function (e) {
        return ea.area(e) < 0
      },
      triangulateShape: function (e, t) {
        var n = [],
          i = [],
          r = [];
        ta(e), na(n, e);
        var a = e.length;
        t.forEach(ta);
        for (var o = 0; o < t.length; o++) i.push(a), a += t[o].length, na(n, t[o]);
        var s = Or(n, i);
        for (o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
        return r
      }
    };

    function ta(e) {
      var t = e.length;
      t > 2 && e[t - 1].equals(e[0]) && e.pop()
    }

    function na(e, t) {
      for (var n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y)
    }

    function ia(e, t) {
      tn.call(this), this.type = "ExtrudeGeometry", this.parameters = {
        shapes: e,
        options: t
      }, this.fromBufferGeometry(new ra(e, t)), this.mergeVertices()
    }

    function ra(e, t) {
      vn.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
        shapes: e,
        options: t
      };
      for (var n = this, i = [], r = [], a = 0, o = (e = Array.isArray(e) ? e : [e]).length; a < o; a++) {
        s(e[a])
      }

      function s(e) {
        var a = [],
          o = void 0 !== t.curveSegments ? t.curveSegments : 12,
          s = void 0 !== t.steps ? t.steps : 1,
          c = void 0 !== t.depth ? t.depth : 100,
          h = void 0 === t.bevelEnabled || t.bevelEnabled,
          l = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
          u = void 0 !== t.bevelSize ? t.bevelSize : l - 2,
          d = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
          p = t.extrudePath,
          f = void 0 !== t.UVGenerator ? t.UVGenerator : aa;
        void 0 !== t.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = t.amount);
        var m, v, g, y, x, w, b, _, E = !1;
        p && (m = p.getSpacedPoints(s), E = !0, h = !1, v = p.computeFrenetFrames(s, !1), g = new St, y = new St, x = new St), h || (d = 0, l = 0, u = 0);
        var M = e.extractPoints(o),
          T = M.shape,
          S = M.holes;
        if (!ea.isClockWise(T))
          for (T = T.reverse(), b = 0, _ = S.length; b < _; b++) w = S[b], ea.isClockWise(w) && (S[b] = w.reverse());
        var A = ea.triangulateShape(T, S),
          L = T;
        for (b = 0, _ = S.length; b < _; b++) w = S[b], T = T.concat(w);

        function R(e, t, n) {
          return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(n).add(e)
        }
        var P, C, O, I, D, N, U = T.length,
          B = A.length;

        function F(e, t, n) {
          var i, r, a, o = e.x - t.x,
            s = e.y - t.y,
            c = n.x - e.x,
            h = n.y - e.y,
            l = o * o + s * s,
            u = o * h - s * c;
          if (Math.abs(u) > Number.EPSILON) {
            var d = Math.sqrt(l),
              p = Math.sqrt(c * c + h * h),
              f = t.x - s / d,
              m = t.y + o / d,
              v = ((n.x - h / p - f) * h - (n.y + c / p - m) * c) / (o * h - s * c),
              g = (i = f + o * v - e.x) * i + (r = m + s * v - e.y) * r;
            if (g <= 2) return new Et(i, r);
            a = Math.sqrt(g / 2)
          } else {
            var y = !1;
            o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(h) && (y = !0), y ? (i = -s, r = o, a = Math.sqrt(l)) : (i = o, r = s, a = Math.sqrt(l / 2))
          }
          return new Et(i / a, r / a)
        }
        for (var H = [], z = 0, G = L.length, k = G - 1, j = z + 1; z < G; z++, k++, j++) k === G && (k = 0), j === G && (j = 0), H[z] = F(L[z], L[k], L[j]);
        var V, W, X = [],
          Y = H.concat();
        for (b = 0, _ = S.length; b < _; b++) {
          for (w = S[b], V = [], z = 0, k = (G = w.length) - 1, j = z + 1; z < G; z++, k++, j++) k === G && (k = 0), j === G && (j = 0), V[z] = F(w[z], w[k], w[j]);
          X.push(V), Y = Y.concat(V)
        }
        for (P = 0; P < d; P++) {
          for (O = P / d, I = l * Math.cos(O * Math.PI / 2), C = u * Math.sin(O * Math.PI / 2), z = 0, G = L.length; z < G; z++) Z((D = R(L[z], H[z], C)).x, D.y, -I);
          for (b = 0, _ = S.length; b < _; b++)
            for (w = S[b], V = X[b], z = 0, G = w.length; z < G; z++) Z((D = R(w[z], V[z], C)).x, D.y, -I)
        }
        for (C = u, z = 0; z < U; z++) D = h ? R(T[z], Y[z], C) : T[z], E ? (y.copy(v.normals[0]).multiplyScalar(D.x), g.copy(v.binormals[0]).multiplyScalar(D.y), x.copy(m[0]).add(y).add(g), Z(x.x, x.y, x.z)) : Z(D.x, D.y, 0);
        for (W = 1; W <= s; W++)
          for (z = 0; z < U; z++) D = h ? R(T[z], Y[z], C) : T[z], E ? (y.copy(v.normals[W]).multiplyScalar(D.x), g.copy(v.binormals[W]).multiplyScalar(D.y), x.copy(m[W]).add(y).add(g), Z(x.x, x.y, x.z)) : Z(D.x, D.y, c / s * W);
        for (P = d - 1; P >= 0; P--) {
          for (O = P / d, I = l * Math.cos(O * Math.PI / 2), C = u * Math.sin(O * Math.PI / 2), z = 0, G = L.length; z < G; z++) Z((D = R(L[z], H[z], C)).x, D.y, c + I);
          for (b = 0, _ = S.length; b < _; b++)
            for (w = S[b], V = X[b], z = 0, G = w.length; z < G; z++) D = R(w[z], V[z], C), E ? Z(D.x, D.y + m[s - 1].y, m[s - 1].x + I) : Z(D.x, D.y, c + I)
        }

        function q(e, t) {
          var n, i;
          for (z = e.length; --z >= 0;) {
            n = z, (i = z - 1) < 0 && (i = e.length - 1);
            var r = 0,
              a = s + 2 * d;
            for (r = 0; r < a; r++) {
              var o = U * r,
                c = U * (r + 1);
              Q(t + n + o, t + i + o, t + i + c, t + n + c)
            }
          }
        }

        function Z(e, t, n) {
          a.push(e), a.push(t), a.push(n)
        }

        function J(e, t, r) {
          K(e), K(t), K(r);
          var a = i.length / 3,
            o = f.generateTopUV(n, i, a - 3, a - 2, a - 1);
          $(o[0]), $(o[1]), $(o[2])
        }

        function Q(e, t, r, a) {
          K(e), K(t), K(a), K(t), K(r), K(a);
          var o = i.length / 3,
            s = f.generateSideWallUV(n, i, o - 6, o - 3, o - 2, o - 1);
          $(s[0]), $(s[1]), $(s[3]), $(s[1]), $(s[2]), $(s[3])
        }

        function K(e) {
          i.push(a[3 * e + 0]), i.push(a[3 * e + 1]), i.push(a[3 * e + 2])
        }

        function $(e) {
          r.push(e.x), r.push(e.y)
        }! function () {
          var e = i.length / 3;
          if (h) {
            var t = 0,
              r = U * t;
            for (z = 0; z < B; z++) J((N = A[z])[2] + r, N[1] + r, N[0] + r);
            for (r = U * (t = s + 2 * d), z = 0; z < B; z++) J((N = A[z])[0] + r, N[1] + r, N[2] + r)
          } else {
            for (z = 0; z < B; z++) J((N = A[z])[2], N[1], N[0]);
            for (z = 0; z < B; z++) J((N = A[z])[0] + U * s, N[1] + U * s, N[2] + U * s)
          }
          n.addGroup(e, i.length / 3 - e, 0)
        }(),
        function () {
          var e = i.length / 3,
            t = 0;
          for (q(L, t), t += L.length, b = 0, _ = S.length; b < _; b++) q(w = S[b], t), t += w.length;
          n.addGroup(e, i.length / 3 - e, 1)
        }()
      }
      this.addAttribute("position", new un(i, 3)), this.addAttribute("uv", new un(r, 2)), this.computeVertexNormals()
    }
    ia.prototype = Object.create(tn.prototype), ia.prototype.constructor = ia, ia.prototype.toJSON = function () {
      var e = tn.prototype.toJSON.call(this);
      return oa(this.parameters.shapes, this.parameters.options, e)
    }, ra.prototype = Object.create(vn.prototype), ra.prototype.constructor = ra, ra.prototype.toJSON = function () {
      var e = vn.prototype.toJSON.call(this);
      return oa(this.parameters.shapes, this.parameters.options, e)
    };
    var aa = {
      generateTopUV: function (e, t, n, i, r) {
        var a = t[3 * n],
          o = t[3 * n + 1],
          s = t[3 * i],
          c = t[3 * i + 1],
          h = t[3 * r],
          l = t[3 * r + 1];
        return [new Et(a, o), new Et(s, c), new Et(h, l)]
      },
      generateSideWallUV: function (e, t, n, i, r, a) {
        var o = t[3 * n],
          s = t[3 * n + 1],
          c = t[3 * n + 2],
          h = t[3 * i],
          l = t[3 * i + 1],
          u = t[3 * i + 2],
          d = t[3 * r],
          p = t[3 * r + 1],
          f = t[3 * r + 2],
          m = t[3 * a],
          v = t[3 * a + 1],
          g = t[3 * a + 2];
        return Math.abs(s - l) < .01 ? [new Et(o, 1 - c), new Et(h, 1 - u), new Et(d, 1 - f), new Et(m, 1 - g)] : [new Et(s, 1 - c), new Et(l, 1 - u), new Et(p, 1 - f), new Et(v, 1 - g)]
      }
    };

    function oa(e, t, n) {
      if (n.shapes = [], Array.isArray(e))
        for (var i = 0, r = e.length; i < r; i++) {
          var a = e[i];
          n.shapes.push(a.uuid)
        } else n.shapes.push(e.uuid);
      return void 0 !== t.extrudePath && (n.options.extrudePath = t.extrudePath.toJSON()), n
    }

    function sa(e, t) {
      tn.call(this), this.type = "TextGeometry", this.parameters = {
        text: e,
        parameters: t
      }, this.fromBufferGeometry(new ca(e, t)), this.mergeVertices()
    }

    function ca(e, t) {
      var n = (t = t || {}).font;
      if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new tn;
      var i = n.generateShapes(e, t.size);
      t.depth = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), ra.call(this, i, t), this.type = "TextBufferGeometry"
    }

    function ha(e, t, n, i, r, a, o) {
      tn.call(this), this.type = "SphereGeometry", this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: a,
        thetaLength: o
      }, this.fromBufferGeometry(new la(e, t, n, i, r, a, o)), this.mergeVertices()
    }

    function la(e, t, n, i, r, a, o) {
      vn.call(this), this.type = "SphereBufferGeometry", this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: a,
        thetaLength: o
      }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI;
      var s, c, h = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
        l = 0,
        u = [],
        d = new St,
        p = new St,
        f = [],
        m = [],
        v = [],
        g = [];
      for (c = 0; c <= n; c++) {
        var y = [],
          x = c / n;
        for (s = 0; s <= t; s++) {
          var w = s / t;
          d.x = -e * Math.cos(i + w * r) * Math.sin(a + x * o), d.y = e * Math.cos(a + x * o), d.z = e * Math.sin(i + w * r) * Math.sin(a + x * o), m.push(d.x, d.y, d.z), p.set(d.x, d.y, d.z).normalize(), v.push(p.x, p.y, p.z), g.push(w, 1 - x), y.push(l++)
        }
        u.push(y)
      }
      for (c = 0; c < n; c++)
        for (s = 0; s < t; s++) {
          var b = u[c][s + 1],
            _ = u[c][s],
            E = u[c + 1][s],
            M = u[c + 1][s + 1];
          (0 !== c || a > 0) && f.push(b, _, M), (c !== n - 1 || h < Math.PI) && f.push(_, E, M)
        }
      this.setIndex(f), this.addAttribute("position", new un(m, 3)), this.addAttribute("normal", new un(v, 3)), this.addAttribute("uv", new un(g, 2))
    }

    function ua(e, t, n, i, r, a) {
      tn.call(this), this.type = "RingGeometry", this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: n,
        phiSegments: i,
        thetaStart: r,
        thetaLength: a
      }, this.fromBufferGeometry(new da(e, t, n, i, r, a)), this.mergeVertices()
    }

    function da(e, t, n, i, r, a) {
      vn.call(this), this.type = "RingBufferGeometry", this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: n,
        phiSegments: i,
        thetaStart: r,
        thetaLength: a
      }, e = e || .5, t = t || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8;
      var o, s, c, h = [],
        l = [],
        u = [],
        d = [],
        p = e,
        f = (t - e) / (i = void 0 !== i ? Math.max(1, i) : 1),
        m = new St,
        v = new Et;
      for (s = 0; s <= i; s++) {
        for (c = 0; c <= n; c++) o = r + c / n * a, m.x = p * Math.cos(o), m.y = p * Math.sin(o), l.push(m.x, m.y, m.z), u.push(0, 0, 1), v.x = (m.x / t + 1) / 2, v.y = (m.y / t + 1) / 2, d.push(v.x, v.y);
        p += f
      }
      for (s = 0; s < i; s++) {
        var g = s * (n + 1);
        for (c = 0; c < n; c++) {
          var y = o = c + g,
            x = o + n + 1,
            w = o + n + 2,
            b = o + 1;
          h.push(y, x, b), h.push(x, w, b)
        }
      }
      this.setIndex(h), this.addAttribute("position", new un(l, 3)), this.addAttribute("normal", new un(u, 3)), this.addAttribute("uv", new un(d, 2))
    }

    function pa(e, t, n, i) {
      tn.call(this), this.type = "LatheGeometry", this.parameters = {
        points: e,
        segments: t,
        phiStart: n,
        phiLength: i
      }, this.fromBufferGeometry(new fa(e, t, n, i)), this.mergeVertices()
    }

    function fa(e, t, n, i) {
      vn.call(this), this.type = "LatheBufferGeometry", this.parameters = {
        points: e,
        segments: t,
        phiStart: n,
        phiLength: i
      }, t = Math.floor(t) || 12, n = n || 0, i = i || 2 * Math.PI, i = _t.clamp(i, 0, 2 * Math.PI);
      var r, a, o, s = [],
        c = [],
        h = [],
        l = 1 / t,
        u = new St,
        d = new Et;
      for (a = 0; a <= t; a++) {
        var p = n + a * l * i,
          f = Math.sin(p),
          m = Math.cos(p);
        for (o = 0; o <= e.length - 1; o++) u.x = e[o].x * f, u.y = e[o].y, u.z = e[o].x * m, c.push(u.x, u.y, u.z), d.x = a / t, d.y = o / (e.length - 1), h.push(d.x, d.y)
      }
      for (a = 0; a < t; a++)
        for (o = 0; o < e.length - 1; o++) {
          var v = r = o + a * e.length,
            g = r + e.length,
            y = r + e.length + 1,
            x = r + 1;
          s.push(v, g, x), s.push(g, y, x)
        }
      if (this.setIndex(s), this.addAttribute("position", new un(c, 3)), this.addAttribute("uv", new un(h, 2)), this.computeVertexNormals(), i === 2 * Math.PI) {
        var w = this.attributes.normal.array,
          b = new St,
          _ = new St,
          E = new St;
        for (r = t * e.length * 3, a = 0, o = 0; a < e.length; a++, o += 3) b.x = w[o + 0], b.y = w[o + 1], b.z = w[o + 2], _.x = w[r + o + 0], _.y = w[r + o + 1], _.z = w[r + o + 2], E.addVectors(b, _).normalize(), w[o + 0] = w[r + o + 0] = E.x, w[o + 1] = w[r + o + 1] = E.y, w[o + 2] = w[r + o + 2] = E.z
      }
    }

    function ma(e, t) {
      tn.call(this), this.type = "ShapeGeometry", "object" === (void 0 === t ? "undefined" : i(t)) && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
        shapes: e,
        curveSegments: t
      }, this.fromBufferGeometry(new va(e, t)), this.mergeVertices()
    }

    function va(e, t) {
      vn.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
        shapes: e,
        curveSegments: t
      }, t = t || 12;
      var n = [],
        i = [],
        r = [],
        a = [],
        o = 0,
        s = 0;
      if (!1 === Array.isArray(e)) h(e);
      else
        for (var c = 0; c < e.length; c++) h(e[c]), this.addGroup(o, s, c), o += s, s = 0;

      function h(e) {
        var o, c, h, l = i.length / 3,
          u = e.extractPoints(t),
          d = u.shape,
          p = u.holes;
        if (!1 === ea.isClockWise(d))
          for (d = d.reverse(), o = 0, c = p.length; o < c; o++) h = p[o], !0 === ea.isClockWise(h) && (p[o] = h.reverse());
        var f = ea.triangulateShape(d, p);
        for (o = 0, c = p.length; o < c; o++) h = p[o], d = d.concat(h);
        for (o = 0, c = d.length; o < c; o++) {
          var m = d[o];
          i.push(m.x, m.y, 0), r.push(0, 0, 1), a.push(m.x, m.y)
        }
        for (o = 0, c = f.length; o < c; o++) {
          var v = f[o],
            g = v[0] + l,
            y = v[1] + l,
            x = v[2] + l;
          n.push(g, y, x), s += 3
        }
      }
      this.setIndex(n), this.addAttribute("position", new un(i, 3)), this.addAttribute("normal", new un(r, 3)), this.addAttribute("uv", new un(a, 2))
    }

    function ga(e, t) {
      if (t.shapes = [], Array.isArray(e))
        for (var n = 0, i = e.length; n < i; n++) {
          var r = e[n];
          t.shapes.push(r.uuid)
        } else t.shapes.push(e.uuid);
      return t
    }

    function ya(e, t) {
      vn.call(this), this.type = "EdgesGeometry", this.parameters = {
        thresholdAngle: t
      }, t = void 0 !== t ? t : 1;
      var n, i, r, a, o = [],
        s = Math.cos(_t.DEG2RAD * t),
        c = [0, 0],
        h = {},
        l = ["a", "b", "c"];
      e.isBufferGeometry ? (a = new tn).fromBufferGeometry(e) : a = e.clone(), a.mergeVertices(), a.computeFaceNormals();
      for (var u = a.vertices, d = a.faces, p = 0, f = d.length; p < f; p++)
        for (var m = d[p], v = 0; v < 3; v++) n = m[l[v]], i = m[l[(v + 1) % 3]], c[0] = Math.min(n, i), c[1] = Math.max(n, i), void 0 === h[r = c[0] + "," + c[1]] ? h[r] = {
          index1: c[0],
          index2: c[1],
          face1: p,
          face2: void 0
        } : h[r].face2 = p;
      for (r in h) {
        var g = h[r];
        if (void 0 === g.face2 || d[g.face1].normal.dot(d[g.face2].normal) <= s) {
          var y = u[g.index1];
          o.push(y.x, y.y, y.z), y = u[g.index2], o.push(y.x, y.y, y.z)
        }
      }
      this.addAttribute("position", new un(o, 3))
    }

    function xa(e, t, n, i, r, a, o, s) {
      tn.call(this), this.type = "CylinderGeometry", this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
      }, this.fromBufferGeometry(new wa(e, t, n, i, r, a, o, s)), this.mergeVertices()
    }

    function wa(e, t, n, i, r, a, o, s) {
      vn.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
      };
      var c = this;
      e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 1, n = n || 1, i = Math.floor(i) || 8, r = Math.floor(r) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
      var h = [],
        l = [],
        u = [],
        d = [],
        p = 0,
        f = [],
        m = n / 2,
        v = 0;

      function g(n) {
        var r, a, f, g = new Et,
          y = new St,
          x = 0,
          w = !0 === n ? e : t,
          b = !0 === n ? 1 : -1;
        for (a = p, r = 1; r <= i; r++) l.push(0, m * b, 0), u.push(0, b, 0), d.push(.5, .5), p++;
        for (f = p, r = 0; r <= i; r++) {
          var _ = r / i * s + o,
            E = Math.cos(_),
            M = Math.sin(_);
          y.x = w * M, y.y = m * b, y.z = w * E, l.push(y.x, y.y, y.z), u.push(0, b, 0), g.x = .5 * E + .5, g.y = .5 * M * b + .5, d.push(g.x, g.y), p++
        }
        for (r = 0; r < i; r++) {
          var T = a + r,
            S = f + r;
          !0 === n ? h.push(S, S + 1, T) : h.push(S + 1, S, T), x += 3
        }
        c.addGroup(v, x, !0 === n ? 1 : 2), v += x
      }! function () {
        var a, g, y = new St,
          x = new St,
          w = 0,
          b = (t - e) / n;
        for (g = 0; g <= r; g++) {
          var _ = [],
            E = g / r,
            M = E * (t - e) + e;
          for (a = 0; a <= i; a++) {
            var T = a / i,
              S = T * s + o,
              A = Math.sin(S),
              L = Math.cos(S);
            x.x = M * A, x.y = -E * n + m, x.z = M * L, l.push(x.x, x.y, x.z), y.set(A, b, L).normalize(), u.push(y.x, y.y, y.z), d.push(T, 1 - E), _.push(p++)
          }
          f.push(_)
        }
        for (a = 0; a < i; a++)
          for (g = 0; g < r; g++) {
            var R = f[g][a],
              P = f[g + 1][a],
              C = f[g + 1][a + 1],
              O = f[g][a + 1];
            h.push(R, P, O), h.push(P, C, O), w += 6
          }
        c.addGroup(v, w, 0), v += w
      }(), !1 === a && (e > 0 && g(!0), t > 0 && g(!1)), this.setIndex(h), this.addAttribute("position", new un(l, 3)), this.addAttribute("normal", new un(u, 3)), this.addAttribute("uv", new un(d, 2))
    }

    function ba(e, t, n, i, r, a, o) {
      xa.call(this, 0, e, t, n, i, r, a, o), this.type = "ConeGeometry", this.parameters = {
        radius: e,
        height: t,
        radialSegments: n,
        heightSegments: i,
        openEnded: r,
        thetaStart: a,
        thetaLength: o
      }
    }

    function _a(e, t, n, i, r, a, o) {
      wa.call(this, 0, e, t, n, i, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
        radius: e,
        height: t,
        radialSegments: n,
        heightSegments: i,
        openEnded: r,
        thetaStart: a,
        thetaLength: o
      }
    }

    function Ea(e, t, n, i) {
      tn.call(this), this.type = "CircleGeometry", this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: i
      }, this.fromBufferGeometry(new Ma(e, t, n, i)), this.mergeVertices()
    }

    function Ma(e, t, n, i) {
      vn.call(this), this.type = "CircleBufferGeometry", this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: i
      }, e = e || 1, t = void 0 !== t ? Math.max(3, t) : 8, n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI;
      var r, a, o = [],
        s = [],
        c = [],
        h = [],
        l = new St,
        u = new Et;
      for (s.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, r = 3; a <= t; a++, r += 3) {
        var d = n + a / t * i;
        l.x = e * Math.cos(d), l.y = e * Math.sin(d), s.push(l.x, l.y, l.z), c.push(0, 0, 1), u.x = (s[r] / e + 1) / 2, u.y = (s[r + 1] / e + 1) / 2, h.push(u.x, u.y)
      }
      for (r = 1; r <= t; r++) o.push(r, r + 1, 0);
      this.setIndex(o), this.addAttribute("position", new un(s, 3)), this.addAttribute("normal", new un(c, 3)), this.addAttribute("uv", new un(h, 2))
    }
    sa.prototype = Object.create(tn.prototype), sa.prototype.constructor = sa, ca.prototype = Object.create(ra.prototype), ca.prototype.constructor = ca, ha.prototype = Object.create(tn.prototype), ha.prototype.constructor = ha, la.prototype = Object.create(vn.prototype), la.prototype.constructor = la, ua.prototype = Object.create(tn.prototype), ua.prototype.constructor = ua, da.prototype = Object.create(vn.prototype), da.prototype.constructor = da, pa.prototype = Object.create(tn.prototype), pa.prototype.constructor = pa, fa.prototype = Object.create(vn.prototype), fa.prototype.constructor = fa, ma.prototype = Object.create(tn.prototype), ma.prototype.constructor = ma, ma.prototype.toJSON = function () {
      var e = tn.prototype.toJSON.call(this);
      return ga(this.parameters.shapes, e)
    }, va.prototype = Object.create(vn.prototype), va.prototype.constructor = va, va.prototype.toJSON = function () {
      var e = vn.prototype.toJSON.call(this);
      return ga(this.parameters.shapes, e)
    }, ya.prototype = Object.create(vn.prototype), ya.prototype.constructor = ya, xa.prototype = Object.create(tn.prototype), xa.prototype.constructor = xa, wa.prototype = Object.create(vn.prototype), wa.prototype.constructor = wa, ba.prototype = Object.create(xa.prototype), ba.prototype.constructor = ba, _a.prototype = Object.create(wa.prototype), _a.prototype.constructor = _a, Ea.prototype = Object.create(tn.prototype), Ea.prototype.constructor = Ea, Ma.prototype = Object.create(vn.prototype), Ma.prototype.constructor = Ma;
    var Ta = Object.freeze({
      WireframeGeometry: pr,
      ParametricGeometry: fr,
      ParametricBufferGeometry: mr,
      TetrahedronGeometry: yr,
      TetrahedronBufferGeometry: xr,
      OctahedronGeometry: wr,
      OctahedronBufferGeometry: br,
      IcosahedronGeometry: _r,
      IcosahedronBufferGeometry: Er,
      DodecahedronGeometry: Mr,
      DodecahedronBufferGeometry: Tr,
      PolyhedronGeometry: vr,
      PolyhedronBufferGeometry: gr,
      TubeGeometry: Sr,
      TubeBufferGeometry: Ar,
      TorusKnotGeometry: Lr,
      TorusKnotBufferGeometry: Rr,
      TorusGeometry: Pr,
      TorusBufferGeometry: Cr,
      TextGeometry: sa,
      TextBufferGeometry: ca,
      SphereGeometry: ha,
      SphereBufferGeometry: la,
      RingGeometry: ua,
      RingBufferGeometry: da,
      PlaneGeometry: xn,
      PlaneBufferGeometry: wn,
      LatheGeometry: pa,
      LatheBufferGeometry: fa,
      ShapeGeometry: ma,
      ShapeBufferGeometry: va,
      ExtrudeGeometry: ia,
      ExtrudeBufferGeometry: ra,
      EdgesGeometry: ya,
      ConeGeometry: ba,
      ConeBufferGeometry: _a,
      CylinderGeometry: xa,
      CylinderBufferGeometry: wa,
      CircleGeometry: Ea,
      CircleBufferGeometry: Ma,
      BoxGeometry: gn,
      BoxBufferGeometry: yn
    });

    function Sa(e) {
      _n.call(this), this.type = "ShadowMaterial", this.color = new kt(0), this.transparent = !0, this.setValues(e)
    }

    function Aa(e) {
      Mn.call(this, e), this.type = "RawShaderMaterial"
    }

    function La(e) {
      _n.call(this), this.defines = {
        STANDARD: ""
      }, this.type = "MeshStandardMaterial", this.color = new kt(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new kt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = wt, this.normalScale = new Et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function Ra(e) {
      La.call(this), this.defines = {
        PHYSICAL: ""
      }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(e)
    }

    function Pa(e) {
      _n.call(this), this.type = "MeshPhongMaterial", this.color = new kt(16777215), this.specular = new kt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new kt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = wt, this.normalScale = new Et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function Ca(e) {
      Pa.call(this), this.defines = {
        TOON: ""
      }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(e)
    }

    function Oa(e) {
      _n.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = wt, this.normalScale = new Et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function Ia(e) {
      _n.call(this), this.type = "MeshLambertMaterial", this.color = new kt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new kt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function Da(e) {
      ir.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
    }
    Sa.prototype = Object.create(_n.prototype), Sa.prototype.constructor = Sa, Sa.prototype.isShadowMaterial = !0, Sa.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.color.copy(e.color), this
    }, Aa.prototype = Object.create(Mn.prototype), Aa.prototype.constructor = Aa, Aa.prototype.isRawShaderMaterial = !0, La.prototype = Object.create(_n.prototype), La.prototype.constructor = La, La.prototype.isMeshStandardMaterial = !0, La.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.defines = {
        STANDARD: ""
      }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, Ra.prototype = Object.create(La.prototype), Ra.prototype.constructor = Ra, Ra.prototype.isMeshPhysicalMaterial = !0, Ra.prototype.copy = function (e) {
      return La.prototype.copy.call(this, e), this.defines = {
        PHYSICAL: ""
      }, this.reflectivity = e.reflectivity, this.clearCoat = e.clearCoat, this.clearCoatRoughness = e.clearCoatRoughness, this
    }, Pa.prototype = Object.create(_n.prototype), Pa.prototype.constructor = Pa, Pa.prototype.isMeshPhongMaterial = !0, Pa.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, Ca.prototype = Object.create(Pa.prototype), Ca.prototype.constructor = Ca, Ca.prototype.isMeshToonMaterial = !0, Ca.prototype.copy = function (e) {
      return Pa.prototype.copy.call(this, e), this.gradientMap = e.gradientMap, this
    }, Oa.prototype = Object.create(_n.prototype), Oa.prototype.constructor = Oa, Oa.prototype.isMeshNormalMaterial = !0, Oa.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, Ia.prototype = Object.create(_n.prototype), Ia.prototype.constructor = Ia, Ia.prototype.isMeshLambertMaterial = !0, Ia.prototype.copy = function (e) {
      return _n.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, Da.prototype = Object.create(ir.prototype), Da.prototype.constructor = Da, Da.prototype.isLineDashedMaterial = !0, Da.prototype.copy = function (e) {
      return ir.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
    };
    var Na = Object.freeze({
        ShadowMaterial: Sa,
        SpriteMaterial: Qi,
        RawShaderMaterial: Aa,
        ShaderMaterial: Mn,
        PointsMaterial: sr,
        MeshPhysicalMaterial: Ra,
        MeshStandardMaterial: La,
        MeshPhongMaterial: Pa,
        MeshToonMaterial: Ca,
        MeshNormalMaterial: Oa,
        MeshLambertMaterial: Ia,
        MeshDepthMaterial: Ui,
        MeshDistanceMaterial: Bi,
        MeshBasicMaterial: En,
        LineDashedMaterial: Da,
        LineBasicMaterial: ir,
        Material: _n
      }),
      Ua = {
        enabled: !1,
        files: {},
        add: function (e, t) {
          !1 !== this.enabled && (this.files[e] = t)
        },
        get: function (e) {
          if (!1 !== this.enabled) return this.files[e]
        },
        remove: function (e) {
          delete this.files[e]
        },
        clear: function () {
          this.files = {}
        }
      };

    function Ba(e, t, n) {
      var i = this,
        r = !1,
        a = 0,
        o = 0,
        s = void 0;
      this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (e) {
        o++, !1 === r && void 0 !== i.onStart && i.onStart(e, a, o), r = !0
      }, this.itemEnd = function (e) {
        a++, void 0 !== i.onProgress && i.onProgress(e, a, o), a === o && (r = !1, void 0 !== i.onLoad && i.onLoad())
      }, this.itemError = function (e) {
        void 0 !== i.onError && i.onError(e)
      }, this.resolveURL = function (e) {
        return s ? s(e) : e
      }, this.setURLModifier = function (e) {
        return s = e, this
      }
    }
    var Fa = new Ba,
      Ha = {};

    function za(e) {
      this.manager = void 0 !== e ? e : Fa
    }

    function Ga(e) {
      this.manager = void 0 !== e ? e : Fa, this._parser = null
    }

    function ka(e) {
      this.manager = void 0 !== e ? e : Fa, this._parser = null
    }

    function ja(e) {
      this.manager = void 0 !== e ? e : Fa
    }

    function Va(e) {
      this.manager = void 0 !== e ? e : Fa
    }

    function Wa(e) {
      this.manager = void 0 !== e ? e : Fa
    }

    function Xa() {
      this.type = "Curve", this.arcLengthDivisions = 200
    }

    function Ya(e, t, n, i, r, a, o, s) {
      Xa.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
    }

    function qa(e, t, n, i, r, a) {
      Ya.call(this, e, t, n, n, i, r, a), this.type = "ArcCurve"
    }

    function Za() {
      var e = 0,
        t = 0,
        n = 0,
        i = 0;

      function r(r, a, o, s) {
        e = r, t = o, n = -3 * r + 3 * a - 2 * o - s, i = 2 * r - 2 * a + o + s
      }
      return {
        initCatmullRom: function (e, t, n, i, a) {
          r(t, n, a * (n - e), a * (i - t))
        },
        initNonuniformCatmullRom: function (e, t, n, i, a, o, s) {
          var c = (t - e) / a - (n - e) / (a + o) + (n - t) / o,
            h = (n - t) / o - (i - t) / (o + s) + (i - n) / s;
          r(t, n, c *= o, h *= o)
        },
        calc: function (r) {
          var a = r * r;
          return e + t * r + n * a + i * (a * r)
        }
      }
    }
    Object.assign(za.prototype, {
      load: function (e, t, n, i) {
        void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
        var r = this,
          a = Ua.get(e);
        if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function () {
          t && t(a), r.manager.itemEnd(e)
        }, 0), a;
        if (void 0 === Ha[e]) {
          var o = e.match(/^data:(.*?)(;base64)?,(.*)$/);
          if (o) {
            var s = o[1],
              c = !!o[2],
              h = o[3];
            h = window.decodeURIComponent(h), c && (h = window.atob(h));
            try {
              var l, u = (this.responseType || "").toLowerCase();
              switch (u) {
                case "arraybuffer":
                case "blob":
                  for (var d = new Uint8Array(h.length), p = 0; p < h.length; p++) d[p] = h.charCodeAt(p);
                  l = "blob" === u ? new Blob([d.buffer], {
                    type: s
                  }) : d.buffer;
                  break;
                case "document":
                  var f = new DOMParser;
                  l = f.parseFromString(h, s);
                  break;
                case "json":
                  l = JSON.parse(h);
                  break;
                default:
                  l = h
              }
              window.setTimeout(function () {
                t && t(l), r.manager.itemEnd(e)
              }, 0)
            } catch (t) {
              window.setTimeout(function () {
                i && i(t), r.manager.itemEnd(e), r.manager.itemError(e)
              }, 0)
            }
          } else {
            Ha[e] = [], Ha[e].push({
              onLoad: t,
              onProgress: n,
              onError: i
            });
            var m = new XMLHttpRequest;
            for (var v in m.open("GET", e, !0), m.addEventListener("load", function (t) {
                var n = this.response;
                Ua.add(e, n);
                var i = Ha[e];
                if (delete Ha[e], 200 === this.status || 0 === this.status) {
                  0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                  for (var a = 0, o = i.length; a < o; a++) {
                    (s = i[a]).onLoad && s.onLoad(n)
                  }
                  r.manager.itemEnd(e)
                } else {
                  for (a = 0, o = i.length; a < o; a++) {
                    var s;
                    (s = i[a]).onError && s.onError(t)
                  }
                  r.manager.itemEnd(e), r.manager.itemError(e)
                }
              }, !1), m.addEventListener("progress", function (t) {
                for (var n = Ha[e], i = 0, r = n.length; i < r; i++) {
                  var a = n[i];
                  a.onProgress && a.onProgress(t)
                }
              }, !1), m.addEventListener("error", function (t) {
                var n = Ha[e];
                delete Ha[e];
                for (var i = 0, a = n.length; i < a; i++) {
                  var o = n[i];
                  o.onError && o.onError(t)
                }
                r.manager.itemEnd(e), r.manager.itemError(e)
              }, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
            m.send(null)
          }
          return r.manager.itemStart(e), m
        }
        Ha[e].push({
          onLoad: t,
          onProgress: n,
          onError: i
        })
      },
      setPath: function (e) {
        return this.path = e, this
      },
      setResponseType: function (e) {
        return this.responseType = e, this
      },
      setWithCredentials: function (e) {
        return this.withCredentials = e, this
      },
      setMimeType: function (e) {
        return this.mimeType = e, this
      },
      setRequestHeader: function (e) {
        return this.requestHeader = e, this
      }
    }), Object.assign(Ga.prototype, {
      load: function (e, t, n, i) {
        var r = this,
          a = [],
          o = new lr;
        o.image = a;
        var s = new za(this.manager);

        function c(c) {
          s.load(e[c], function (e) {
            var n = r._parser(e, !0);
            a[c] = {
              width: n.width,
              height: n.height,
              format: n.format,
              mipmaps: n.mipmaps
            }, 6 === (h += 1) && (1 === n.mipmapCount && (o.minFilter = fe), o.format = n.format, o.needsUpdate = !0, t && t(o))
          }, n, i)
        }
        if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(e))
          for (var h = 0, l = 0, u = e.length; l < u; ++l) c(l);
        else s.load(e, function (e) {
          var n = r._parser(e, !0);
          if (n.isCubemap)
            for (var i = n.mipmaps.length / n.mipmapCount, s = 0; s < i; s++) {
              a[s] = {
                mipmaps: []
              };
              for (var c = 0; c < n.mipmapCount; c++) a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]), a[s].format = n.format, a[s].width = n.width, a[s].height = n.height
            } else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
          1 === n.mipmapCount && (o.minFilter = fe), o.format = n.format, o.needsUpdate = !0, t && t(o)
        }, n, i);
        return o
      },
      setPath: function (e) {
        return this.path = e, this
      }
    }), Object.assign(ka.prototype, {
      load: function (e, t, n, i) {
        var r = this,
          a = new Dt,
          o = new za(this.manager);
        return o.setResponseType("arraybuffer"), o.load(e, function (e) {
          var n = r._parser(e);
          n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data), a.wrapS = void 0 !== n.wrapS ? n.wrapS : he, a.wrapT = void 0 !== n.wrapT ? n.wrapT : he, a.magFilter = void 0 !== n.magFilter ? n.magFilter : fe, a.minFilter = void 0 !== n.minFilter ? n.minFilter : ve, a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (a.format = n.format), void 0 !== n.type && (a.type = n.type), void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps), 1 === n.mipmapCount && (a.minFilter = fe), a.needsUpdate = !0, t && t(a, n))
        }, n, i), a
      }
    }), Object.assign(ja.prototype, {
      crossOrigin: "anonymous",
      load: function (e, t, n, i) {
        void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
        var r = this,
          a = Ua.get(e);
        if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function () {
          t && t(a), r.manager.itemEnd(e)
        }, 0), a;
        var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

        function s() {
          o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), Ua.add(e, this), t && t(this), r.manager.itemEnd(e)
        }

        function c(t) {
          o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), i && i(t), r.manager.itemEnd(e), r.manager.itemError(e)
        }
        return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o
      },
      setCrossOrigin: function (e) {
        return this.crossOrigin = e, this
      },
      setPath: function (e) {
        return this.path = e, this
      }
    }), Object.assign(Va.prototype, {
      crossOrigin: "anonymous",
      load: function (e, t, n, i) {
        var r = new Rn,
          a = new ja(this.manager);
        a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
        var o = 0;

        function s(n) {
          a.load(e[n], function (e) {
            r.images[n] = e, 6 === ++o && (r.needsUpdate = !0, t && t(r))
          }, void 0, i)
        }
        for (var c = 0; c < e.length; ++c) s(c);
        return r
      },
      setCrossOrigin: function (e) {
        return this.crossOrigin = e, this
      },
      setPath: function (e) {
        return this.path = e, this
      }
    }), Object.assign(Wa.prototype, {
      crossOrigin: "anonymous",
      load: function (e, t, n, i) {
        var r = new Pt,
          a = new ja(this.manager);
        return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function (n) {
          r.image = n;
          var i = e.search(/\.(jpg|jpeg)$/) > 0 || 0 === e.search(/^data\:image\/jpeg/);
          r.format = i ? Pe : Ce, r.needsUpdate = !0, void 0 !== t && t(r)
        }, n, i), r
      },
      setCrossOrigin: function (e) {
        return this.crossOrigin = e, this
      },
      setPath: function (e) {
        return this.path = e, this
      }
    }), Object.assign(Xa.prototype, {
      getPoint: function () {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null
      },
      getPointAt: function (e, t) {
        var n = this.getUtoTmapping(e);
        return this.getPoint(n, t)
      },
      getPoints: function (e) {
        void 0 === e && (e = 5);
        for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
        return t
      },
      getSpacedPoints: function (e) {
        void 0 === e && (e = 5);
        for (var t = [], n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
        return t
      },
      getLength: function () {
        var e = this.getLengths();
        return e[e.length - 1]
      },
      getLengths: function (e) {
        if (void 0 === e && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var t, n, i = [],
          r = this.getPoint(0),
          a = 0;
        for (i.push(0), n = 1; n <= e; n++) a += (t = this.getPoint(n / e)).distanceTo(r), i.push(a), r = t;
        return this.cacheArcLengths = i, i
      },
      updateArcLengths: function () {
        this.needsUpdate = !0, this.getLengths()
      },
      getUtoTmapping: function (e, t) {
        var n, i = this.getLengths(),
          r = 0,
          a = i.length;
        n = t || e * i[a - 1];
        for (var o, s = 0, c = a - 1; s <= c;)
          if ((o = i[r = Math.floor(s + (c - s) / 2)] - n) < 0) s = r + 1;
          else {
            if (!(o > 0)) {
              c = r;
              break
            }
            c = r - 1
          } if (i[r = c] === n) return r / (a - 1);
        var h = i[r];
        return (r + (n - h) / (i[r + 1] - h)) / (a - 1)
      },
      getTangent: function (e) {
        var t = e - 1e-4,
          n = e + 1e-4;
        t < 0 && (t = 0), n > 1 && (n = 1);
        var i = this.getPoint(t);
        return this.getPoint(n).clone().sub(i).normalize()
      },
      getTangentAt: function (e) {
        var t = this.getUtoTmapping(e);
        return this.getTangent(t)
      },
      computeFrenetFrames: function (e, t) {
        var n, i, r, a = new St,
          o = [],
          s = [],
          c = [],
          h = new St,
          l = new Mt;
        for (n = 0; n <= e; n++) i = n / e, o[n] = this.getTangentAt(i), o[n].normalize();
        s[0] = new St, c[0] = new St;
        var u = Number.MAX_VALUE,
          d = Math.abs(o[0].x),
          p = Math.abs(o[0].y),
          f = Math.abs(o[0].z);
        for (d <= u && (u = d, a.set(1, 0, 0)), p <= u && (u = p, a.set(0, 1, 0)), f <= u && a.set(0, 0, 1), h.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], h), c[0].crossVectors(o[0], s[0]), n = 1; n <= e; n++) s[n] = s[n - 1].clone(), c[n] = c[n - 1].clone(), h.crossVectors(o[n - 1], o[n]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos(_t.clamp(o[n - 1].dot(o[n]), -1, 1)), s[n].applyMatrix4(l.makeRotationAxis(h, r))), c[n].crossVectors(o[n], s[n]);
        if (!0 === t)
          for (r = Math.acos(_t.clamp(s[0].dot(s[e]), -1, 1)), r /= e, o[0].dot(h.crossVectors(s[0], s[e])) > 0 && (r = -r), n = 1; n <= e; n++) s[n].applyMatrix4(l.makeRotationAxis(o[n], r * n)), c[n].crossVectors(o[n], s[n]);
        return {
          tangents: o,
          normals: s,
          binormals: c
        }
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      copy: function (e) {
        return this.arcLengthDivisions = e.arcLengthDivisions, this
      },
      toJSON: function () {
        var e = {
          metadata: {
            version: 4.5,
            type: "Curve",
            generator: "Curve.toJSON"
          }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
      },
      fromJSON: function (e) {
        return this.arcLengthDivisions = e.arcLengthDivisions, this
      }
    }), Ya.prototype = Object.create(Xa.prototype), Ya.prototype.constructor = Ya, Ya.prototype.isEllipseCurve = !0, Ya.prototype.getPoint = function (e, t) {
      for (var n = t || new Et, i = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += i;
      for (; r > i;) r -= i;
      r < Number.EPSILON && (r = a ? 0 : i), !0 !== this.aClockwise || a || (r === i ? r = -i : r -= i);
      var o = this.aStartAngle + e * r,
        s = this.aX + this.xRadius * Math.cos(o),
        c = this.aY + this.yRadius * Math.sin(o);
      if (0 !== this.aRotation) {
        var h = Math.cos(this.aRotation),
          l = Math.sin(this.aRotation),
          u = s - this.aX,
          d = c - this.aY;
        s = u * h - d * l + this.aX, c = u * l + d * h + this.aY
      }
      return n.set(s, c)
    }, Ya.prototype.copy = function (e) {
      return Xa.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }, Ya.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
    }, Ya.prototype.fromJSON = function (e) {
      return Xa.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }, qa.prototype = Object.create(Ya.prototype), qa.prototype.constructor = qa, qa.prototype.isArcCurve = !0;
    var Ja = new St,
      Qa = new Za,
      Ka = new Za,
      $a = new Za;

    function eo(e, t, n, i) {
      Xa.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = i || .5
    }

    function to(e, t, n, i, r) {
      var a = .5 * (i - t),
        o = .5 * (r - n),
        s = e * e;
      return (2 * n - 2 * i + a + o) * (e * s) + (-3 * n + 3 * i - 2 * a - o) * s + a * e + n
    }

    function no(e, t, n, i) {
      return function (e, t) {
        var n = 1 - e;
        return n * n * t
      }(e, t) + function (e, t) {
        return 2 * (1 - e) * e * t
      }(e, n) + function (e, t) {
        return e * e * t
      }(e, i)
    }

    function io(e, t, n, i, r) {
      return function (e, t) {
        var n = 1 - e;
        return n * n * n * t
      }(e, t) + function (e, t) {
        var n = 1 - e;
        return 3 * n * n * e * t
      }(e, n) + function (e, t) {
        return 3 * (1 - e) * e * e * t
      }(e, i) + function (e, t) {
        return e * e * e * t
      }(e, r)
    }

    function ro(e, t, n, i) {
      Xa.call(this), this.type = "CubicBezierCurve", this.v0 = e || new Et, this.v1 = t || new Et, this.v2 = n || new Et, this.v3 = i || new Et
    }

    function ao(e, t, n, i) {
      Xa.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new St, this.v1 = t || new St, this.v2 = n || new St, this.v3 = i || new St
    }

    function oo(e, t) {
      Xa.call(this), this.type = "LineCurve", this.v1 = e || new Et, this.v2 = t || new Et
    }

    function so(e, t) {
      Xa.call(this), this.type = "LineCurve3", this.v1 = e || new St, this.v2 = t || new St
    }

    function co(e, t, n) {
      Xa.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new Et, this.v1 = t || new Et, this.v2 = n || new Et
    }

    function ho(e, t, n) {
      Xa.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new St, this.v1 = t || new St, this.v2 = n || new St
    }

    function lo(e) {
      Xa.call(this), this.type = "SplineCurve", this.points = e || []
    }
    eo.prototype = Object.create(Xa.prototype), eo.prototype.constructor = eo, eo.prototype.isCatmullRomCurve3 = !0, eo.prototype.getPoint = function (e, t) {
      var n, i, r, a, o = t || new St,
        s = this.points,
        c = s.length,
        h = (c - (this.closed ? 0 : 1)) * e,
        l = Math.floor(h),
        u = h - l;
      if (this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / c) + 1) * c : 0 === u && l === c - 1 && (l = c - 2, u = 1), this.closed || l > 0 ? n = s[(l - 1) % c] : (Ja.subVectors(s[0], s[1]).add(s[0]), n = Ja), i = s[l % c], r = s[(l + 1) % c], this.closed || l + 2 < c ? a = s[(l + 2) % c] : (Ja.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), a = Ja), "centripetal" === this.curveType || "chordal" === this.curveType) {
        var d = "chordal" === this.curveType ? .5 : .25,
          p = Math.pow(n.distanceToSquared(i), d),
          f = Math.pow(i.distanceToSquared(r), d),
          m = Math.pow(r.distanceToSquared(a), d);
        f < 1e-4 && (f = 1), p < 1e-4 && (p = f), m < 1e-4 && (m = f), Qa.initNonuniformCatmullRom(n.x, i.x, r.x, a.x, p, f, m), Ka.initNonuniformCatmullRom(n.y, i.y, r.y, a.y, p, f, m), $a.initNonuniformCatmullRom(n.z, i.z, r.z, a.z, p, f, m)
      } else "catmullrom" === this.curveType && (Qa.initCatmullRom(n.x, i.x, r.x, a.x, this.tension), Ka.initCatmullRom(n.y, i.y, r.y, a.y, this.tension), $a.initCatmullRom(n.z, i.z, r.z, a.z, this.tension));
      return o.set(Qa.calc(u), Ka.calc(u), $a.calc(u)), o
    }, eo.prototype.copy = function (e) {
      Xa.prototype.copy.call(this, e), this.points = [];
      for (var t = 0, n = e.points.length; t < n; t++) {
        var i = e.points[t];
        this.points.push(i.clone())
      }
      return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }, eo.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      e.points = [];
      for (var t = 0, n = this.points.length; t < n; t++) {
        var i = this.points[t];
        e.points.push(i.toArray())
      }
      return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
    }, eo.prototype.fromJSON = function (e) {
      Xa.prototype.fromJSON.call(this, e), this.points = [];
      for (var t = 0, n = e.points.length; t < n; t++) {
        var i = e.points[t];
        this.points.push((new St).fromArray(i))
      }
      return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }, ro.prototype = Object.create(Xa.prototype), ro.prototype.constructor = ro, ro.prototype.isCubicBezierCurve = !0, ro.prototype.getPoint = function (e, t) {
      var n = t || new Et,
        i = this.v0,
        r = this.v1,
        a = this.v2,
        o = this.v3;
      return n.set(io(e, i.x, r.x, a.x, o.x), io(e, i.y, r.y, a.y, o.y)), n
    }, ro.prototype.copy = function (e) {
      return Xa.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }, ro.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }, ro.prototype.fromJSON = function (e) {
      return Xa.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }, ao.prototype = Object.create(Xa.prototype), ao.prototype.constructor = ao, ao.prototype.isCubicBezierCurve3 = !0, ao.prototype.getPoint = function (e, t) {
      var n = t || new St,
        i = this.v0,
        r = this.v1,
        a = this.v2,
        o = this.v3;
      return n.set(io(e, i.x, r.x, a.x, o.x), io(e, i.y, r.y, a.y, o.y), io(e, i.z, r.z, a.z, o.z)), n
    }, ao.prototype.copy = function (e) {
      return Xa.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }, ao.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }, ao.prototype.fromJSON = function (e) {
      return Xa.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }, oo.prototype = Object.create(Xa.prototype), oo.prototype.constructor = oo, oo.prototype.isLineCurve = !0, oo.prototype.getPoint = function (e, t) {
      var n = t || new Et;
      return 1 === e ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
    }, oo.prototype.getPointAt = function (e, t) {
      return this.getPoint(e, t)
    }, oo.prototype.getTangent = function () {
      return this.v2.clone().sub(this.v1).normalize()
    }, oo.prototype.copy = function (e) {
      return Xa.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, oo.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, oo.prototype.fromJSON = function (e) {
      return Xa.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, so.prototype = Object.create(Xa.prototype), so.prototype.constructor = so, so.prototype.isLineCurve3 = !0, so.prototype.getPoint = function (e, t) {
      var n = t || new St;
      return 1 === e ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
    }, so.prototype.getPointAt = function (e, t) {
      return this.getPoint(e, t)
    }, so.prototype.copy = function (e) {
      return Xa.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, so.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, so.prototype.fromJSON = function (e) {
      return Xa.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, co.prototype = Object.create(Xa.prototype), co.prototype.constructor = co, co.prototype.isQuadraticBezierCurve = !0, co.prototype.getPoint = function (e, t) {
      var n = t || new Et,
        i = this.v0,
        r = this.v1,
        a = this.v2;
      return n.set(no(e, i.x, r.x, a.x), no(e, i.y, r.y, a.y)), n
    }, co.prototype.copy = function (e) {
      return Xa.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, co.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, co.prototype.fromJSON = function (e) {
      return Xa.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, ho.prototype = Object.create(Xa.prototype), ho.prototype.constructor = ho, ho.prototype.isQuadraticBezierCurve3 = !0, ho.prototype.getPoint = function (e, t) {
      var n = t || new St,
        i = this.v0,
        r = this.v1,
        a = this.v2;
      return n.set(no(e, i.x, r.x, a.x), no(e, i.y, r.y, a.y), no(e, i.z, r.z, a.z)), n
    }, ho.prototype.copy = function (e) {
      return Xa.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, ho.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, ho.prototype.fromJSON = function (e) {
      return Xa.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, lo.prototype = Object.create(Xa.prototype), lo.prototype.constructor = lo, lo.prototype.isSplineCurve = !0, lo.prototype.getPoint = function (e, t) {
      var n = t || new Et,
        i = this.points,
        r = (i.length - 1) * e,
        a = Math.floor(r),
        o = r - a,
        s = i[0 === a ? a : a - 1],
        c = i[a],
        h = i[a > i.length - 2 ? i.length - 1 : a + 1],
        l = i[a > i.length - 3 ? i.length - 1 : a + 2];
      return n.set(to(o, s.x, c.x, h.x, l.x), to(o, s.y, c.y, h.y, l.y)), n
    }, lo.prototype.copy = function (e) {
      Xa.prototype.copy.call(this, e), this.points = [];
      for (var t = 0, n = e.points.length; t < n; t++) {
        var i = e.points[t];
        this.points.push(i.clone())
      }
      return this
    }, lo.prototype.toJSON = function () {
      var e = Xa.prototype.toJSON.call(this);
      e.points = [];
      for (var t = 0, n = this.points.length; t < n; t++) {
        var i = this.points[t];
        e.points.push(i.toArray())
      }
      return e
    }, lo.prototype.fromJSON = function (e) {
      Xa.prototype.fromJSON.call(this, e), this.points = [];
      for (var t = 0, n = e.points.length; t < n; t++) {
        var i = e.points[t];
        this.points.push((new Et).fromArray(i))
      }
      return this
    };
    var uo = Object.freeze({
      ArcCurve: qa,
      CatmullRomCurve3: eo,
      CubicBezierCurve: ro,
      CubicBezierCurve3: ao,
      EllipseCurve: Ya,
      LineCurve: oo,
      LineCurve3: so,
      QuadraticBezierCurve: co,
      QuadraticBezierCurve3: ho,
      SplineCurve: lo
    });

    function po() {
      Xa.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }

    function fo(e) {
      po.call(this), this.type = "Path", this.currentPoint = new Et, e && this.setFromPoints(e)
    }

    function mo(e) {
      fo.call(this, e), this.uuid = _t.generateUUID(), this.type = "Shape", this.holes = []
    }

    function vo(e, t) {
      Jt.call(this), this.type = "Light", this.color = new kt(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
    }

    function go(e, t, n) {
      vo.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Jt.DefaultUp), this.updateMatrix(), this.groundColor = new kt(t)
    }

    function yo(e) {
      this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new Et(512, 512), this.map = null, this.matrix = new Mt
    }

    function xo() {
      yo.call(this, new ki(50, 1, .5, 500))
    }

    function wo(e, t, n, i, r, a) {
      vo.call(this, e, t), this.type = "SpotLight", this.position.copy(Jt.DefaultUp), this.updateMatrix(), this.target = new Jt, Object.defineProperty(this, "power", {
        get: function () {
          return this.intensity * Math.PI
        },
        set: function (e) {
          this.intensity = e / Math.PI
        }
      }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new xo
    }

    function bo(e, t, n, i) {
      vo.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
        get: function () {
          return 4 * this.intensity * Math.PI
        },
        set: function (e) {
          this.intensity = e / (4 * Math.PI)
        }
      }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new yo(new ki(90, 1, .5, 500))
    }

    function _o() {
      yo.call(this, new Kt(-5, 5, 5, -5, .5, 500))
    }

    function Eo(e, t) {
      vo.call(this, e, t), this.type = "DirectionalLight", this.position.copy(Jt.DefaultUp), this.updateMatrix(), this.target = new Jt, this.shadow = new _o
    }

    function Mo(e, t) {
      vo.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
    }

    function To(e, t, n, i) {
      vo.call(this, e, t), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
    }
    po.prototype = Object.assign(Object.create(Xa.prototype), {
      constructor: po,
      add: function (e) {
        this.curves.push(e)
      },
      closePath: function () {
        var e = this.curves[0].getPoint(0),
          t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new oo(t, e))
      },
      getPoint: function (e) {
        for (var t = e * this.getLength(), n = this.getCurveLengths(), i = 0; i < n.length;) {
          if (n[i] >= t) {
            var r = n[i] - t,
              a = this.curves[i],
              o = a.getLength(),
              s = 0 === o ? 0 : 1 - r / o;
            return a.getPointAt(s)
          }
          i++
        }
        return null
      },
      getLength: function () {
        var e = this.getCurveLengths();
        return e[e.length - 1]
      },
      updateArcLengths: function () {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
      },
      getCurveLengths: function () {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        for (var e = [], t = 0, n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t);
        return this.cacheLengths = e, e
      },
      getSpacedPoints: function (e) {
        void 0 === e && (e = 40);
        for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
        return this.autoClose && t.push(t[0]), t
      },
      getPoints: function (e) {
        e = e || 12;
        for (var t, n = [], i = 0, r = this.curves; i < r.length; i++)
          for (var a = r[i], o = a && a.isEllipseCurve ? 2 * e : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), c = 0; c < s.length; c++) {
            var h = s[c];
            t && t.equals(h) || (n.push(h), t = h)
          }
        return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
      },
      copy: function (e) {
        Xa.prototype.copy.call(this, e), this.curves = [];
        for (var t = 0, n = e.curves.length; t < n; t++) {
          var i = e.curves[t];
          this.curves.push(i.clone())
        }
        return this.autoClose = e.autoClose, this
      },
      toJSON: function () {
        var e = Xa.prototype.toJSON.call(this);
        e.autoClose = this.autoClose, e.curves = [];
        for (var t = 0, n = this.curves.length; t < n; t++) {
          var i = this.curves[t];
          e.curves.push(i.toJSON())
        }
        return e
      },
      fromJSON: function (e) {
        Xa.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
        for (var t = 0, n = e.curves.length; t < n; t++) {
          var i = e.curves[t];
          this.curves.push((new uo[i.type]).fromJSON(i))
        }
        return this
      }
    }), fo.prototype = Object.assign(Object.create(po.prototype), {
      constructor: fo,
      setFromPoints: function (e) {
        this.moveTo(e[0].x, e[0].y);
        for (var t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y)
      },
      moveTo: function (e, t) {
        this.currentPoint.set(e, t)
      },
      lineTo: function (e, t) {
        var n = new oo(this.currentPoint.clone(), new Et(e, t));
        this.curves.push(n), this.currentPoint.set(e, t)
      },
      quadraticCurveTo: function (e, t, n, i) {
        var r = new co(this.currentPoint.clone(), new Et(e, t), new Et(n, i));
        this.curves.push(r), this.currentPoint.set(n, i)
      },
      bezierCurveTo: function (e, t, n, i, r, a) {
        var o = new ro(this.currentPoint.clone(), new Et(e, t), new Et(n, i), new Et(r, a));
        this.curves.push(o), this.currentPoint.set(r, a)
      },
      splineThru: function (e) {
        var t = new lo([this.currentPoint.clone()].concat(e));
        this.curves.push(t), this.currentPoint.copy(e[e.length - 1])
      },
      arc: function (e, t, n, i, r, a) {
        var o = this.currentPoint.x,
          s = this.currentPoint.y;
        this.absarc(e + o, t + s, n, i, r, a)
      },
      absarc: function (e, t, n, i, r, a) {
        this.absellipse(e, t, n, n, i, r, a)
      },
      ellipse: function (e, t, n, i, r, a, o, s) {
        var c = this.currentPoint.x,
          h = this.currentPoint.y;
        this.absellipse(e + c, t + h, n, i, r, a, o, s)
      },
      absellipse: function (e, t, n, i, r, a, o, s) {
        var c = new Ya(e, t, n, i, r, a, o, s);
        if (this.curves.length > 0) {
          var h = c.getPoint(0);
          h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
        }
        this.curves.push(c);
        var l = c.getPoint(1);
        this.currentPoint.copy(l)
      },
      copy: function (e) {
        return po.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this
      },
      toJSON: function () {
        var e = po.prototype.toJSON.call(this);
        return e.currentPoint = this.currentPoint.toArray(), e
      },
      fromJSON: function (e) {
        return po.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this
      }
    }), mo.prototype = Object.assign(Object.create(fo.prototype), {
      constructor: mo,
      getPointsHoles: function (e) {
        for (var t = [], n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
        return t
      },
      extractPoints: function (e) {
        return {
          shape: this.getPoints(e),
          holes: this.getPointsHoles(e)
        }
      },
      copy: function (e) {
        fo.prototype.copy.call(this, e), this.holes = [];
        for (var t = 0, n = e.holes.length; t < n; t++) {
          var i = e.holes[t];
          this.holes.push(i.clone())
        }
        return this
      },
      toJSON: function () {
        var e = fo.prototype.toJSON.call(this);
        e.uuid = this.uuid, e.holes = [];
        for (var t = 0, n = this.holes.length; t < n; t++) {
          var i = this.holes[t];
          e.holes.push(i.toJSON())
        }
        return e
      },
      fromJSON: function (e) {
        fo.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
        for (var t = 0, n = e.holes.length; t < n; t++) {
          var i = e.holes[t];
          this.holes.push((new fo).fromJSON(i))
        }
        return this
      }
    }), vo.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: vo,
      isLight: !0,
      copy: function (e) {
        return Jt.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
      },
      toJSON: function (e) {
        var t = Jt.prototype.toJSON.call(this, e);
        return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
      }
    }), go.prototype = Object.assign(Object.create(vo.prototype), {
      constructor: go,
      isHemisphereLight: !0,
      copy: function (e) {
        return vo.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
      }
    }), Object.assign(yo.prototype, {
      copy: function (e) {
        return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
      },
      clone: function () {
        return (new this.constructor).copy(this)
      },
      toJSON: function () {
        var e = {};
        return 0 !== this.bias && (e.bias = this.bias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
      }
    }), xo.prototype = Object.assign(Object.create(yo.prototype), {
      constructor: xo,
      isSpotLightShadow: !0,
      update: function (e) {
        var t = this.camera,
          n = 2 * _t.RAD2DEG * e.angle,
          i = this.mapSize.width / this.mapSize.height,
          r = e.distance || t.far;
        n === t.fov && i === t.aspect && r === t.far || (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix())
      }
    }), wo.prototype = Object.assign(Object.create(vo.prototype), {
      constructor: wo,
      isSpotLight: !0,
      copy: function (e) {
        return vo.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
      }
    }), bo.prototype = Object.assign(Object.create(vo.prototype), {
      constructor: bo,
      isPointLight: !0,
      copy: function (e) {
        return vo.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
      }
    }), _o.prototype = Object.assign(Object.create(yo.prototype), {
      constructor: _o
    }), Eo.prototype = Object.assign(Object.create(vo.prototype), {
      constructor: Eo,
      isDirectionalLight: !0,
      copy: function (e) {
        return vo.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
      }
    }), Mo.prototype = Object.assign(Object.create(vo.prototype), {
      constructor: Mo,
      isAmbientLight: !0
    }), To.prototype = Object.assign(Object.create(vo.prototype), {
      constructor: To,
      isRectAreaLight: !0,
      copy: function (e) {
        return vo.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this
      },
      toJSON: function (e) {
        var t = vo.prototype.toJSON.call(this, e);
        return t.object.width = this.width, t.object.height = this.height, t
      }
    });
    var So = {
      arraySlice: function (e, t, n) {
        return So.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n)
      },
      convertArray: function (e, t, n) {
        return !e || !n && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
      },
      isTypedArray: function (e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView)
      },
      getKeyframeOrder: function (e) {
        for (var t = e.length, n = new Array(t), i = 0; i !== t; ++i) n[i] = i;
        return n.sort(function (t, n) {
          return e[t] - e[n]
        }), n
      },
      sortedArray: function (e, t, n) {
        for (var i = e.length, r = new e.constructor(i), a = 0, o = 0; o !== i; ++a)
          for (var s = n[a] * t, c = 0; c !== t; ++c) r[o++] = e[s + c];
        return r
      },
      flattenJSON: function (e, t, n, i) {
        for (var r = 1, a = e[0]; void 0 !== a && void 0 === a[i];) a = e[r++];
        if (void 0 !== a) {
          var o = a[i];
          if (void 0 !== o)
            if (Array.isArray(o))
              do {
                void 0 !== (o = a[i]) && (t.push(a.time), n.push.apply(n, o)), a = e[r++]
              } while (void 0 !== a);
            else if (void 0 !== o.toArray)
            do {
              void 0 !== (o = a[i]) && (t.push(a.time), o.toArray(n, n.length)), a = e[r++]
            } while (void 0 !== a);
          else
            do {
              void 0 !== (o = a[i]) && (t.push(a.time), n.push(o)), a = e[r++]
            } while (void 0 !== a)
        }
      }
    };

    function Ao(e, t, n, i) {
      this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n
    }

    function Lo(e, t, n, i) {
      Ao.call(this, e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    function Ro(e, t, n, i) {
      Ao.call(this, e, t, n, i)
    }

    function Po(e, t, n, i) {
      Ao.call(this, e, t, n, i)
    }

    function Co(e, t, n, i) {
      if (void 0 === e) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === t || 0 === t.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
      this.name = e, this.times = So.convertArray(t, this.TimeBufferType), this.values = So.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
    }

    function Oo(e, t, n) {
      Co.call(this, e, t, n)
    }

    function Io(e, t, n, i) {
      Co.call(this, e, t, n, i)
    }

    function Do(e, t, n, i) {
      Co.call(this, e, t, n, i)
    }

    function No(e, t, n, i) {
      Ao.call(this, e, t, n, i)
    }

    function Uo(e, t, n, i) {
      Co.call(this, e, t, n, i)
    }

    function Bo(e, t, n, i) {
      Co.call(this, e, t, n, i)
    }

    function Fo(e, t, n, i) {
      Co.call(this, e, t, n, i)
    }

    function Ho(e, t, n) {
      this.name = e, this.tracks = n, this.duration = void 0 !== t ? t : -1, this.uuid = _t.generateUUID(), this.duration < 0 && this.resetDuration()
    }

    function zo(e) {
      if (void 0 === e.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
      var t = function (e) {
        switch (e.toLowerCase()) {
          case "scalar":
          case "double":
          case "float":
          case "number":
          case "integer":
            return Do;
          case "vector":
          case "vector2":
          case "vector3":
          case "vector4":
            return Fo;
          case "color":
            return Io;
          case "quaternion":
            return Uo;
          case "bool":
          case "boolean":
            return Oo;
          case "string":
            return Bo
        }
        throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
      }(e.type);
      if (void 0 === e.times) {
        var n = [],
          i = [];
        So.flattenJSON(e.keys, n, i, "value"), e.times = n, e.values = i
      }
      return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
    }

    function Go(e) {
      this.manager = void 0 !== e ? e : Fa, this.textures = {}
    }

    function ko(e) {
      this.manager = void 0 !== e ? e : Fa
    }
    Object.assign(Ao.prototype, {
        evaluate: function (e) {
          var t = this.parameterPositions,
            n = this._cachedIndex,
            i = t[n],
            r = t[n - 1];
          e: {
            t: {
              var a;n: {
                i: if (!(e < i)) {
                  for (var o = n + 2;;) {
                    if (void 0 === i) {
                      if (e < r) break i;
                      return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, r)
                    }
                    if (n === o) break;
                    if (r = i, e < (i = t[++n])) break t
                  }
                  a = t.length;
                  break n
                }if (e >= r) break e;
                var s = t[1];e < s && (n = 2, r = s);
                for (o = n - 2;;) {
                  if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                  if (n === o) break;
                  if (i = r, e >= (r = t[--n - 1])) break t
                }
                a = n,
                n = 0
              }
              for (; n < a;) {
                var c = n + a >>> 1;
                e < t[c] ? a = c : n = c + 1
              }
              if (i = t[n], void 0 === (r = t[n - 1])) return this._cachedIndex = 0,
              this.beforeStart_(0, e, i);
              if (void 0 === i) return n = t.length,
              this._cachedIndex = n,
              this.afterEnd_(n - 1, r, e)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, r, i)
          }
          return this.interpolate_(n, r, e, i)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function () {
          return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function (e) {
          for (var t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i, a = 0; a !== i; ++a) t[a] = n[r + a];
          return t
        },
        interpolate_: function () {
          throw new Error("call to abstract method")
        },
        intervalChanged_: function () {}
      }), //!\ DECLARE ALIAS AFTER assign prototype !
      Object.assign(Ao.prototype, {
        beforeStart_: Ao.prototype.copySampleValue_,
        afterEnd_: Ao.prototype.copySampleValue_
      }), Lo.prototype = Object.assign(Object.create(Ao.prototype), {
        constructor: Lo,
        DefaultSettings_: {
          endingStart: st,
          endingEnd: st
        },
        intervalChanged_: function (e, t, n) {
          var i = this.parameterPositions,
            r = e - 2,
            a = e + 1,
            o = i[r],
            s = i[a];
          if (void 0 === o) switch (this.getSettings_().endingStart) {
            case 2401:
              r = e, o = 2 * t - n;
              break;
            case 2402:
              o = t + i[r = i.length - 2] - i[r + 1];
              break;
            default:
              r = e, o = n
          }
          if (void 0 === s) switch (this.getSettings_().endingEnd) {
            case 2401:
              a = e, s = 2 * n - t;
              break;
            case 2402:
              a = 1, s = n + i[1] - i[0];
              break;
            default:
              a = e - 1, s = t
          }
          var c = .5 * (n - t),
            h = this.valueSize;
          this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = r * h, this._offsetNext = a * h
        },
        interpolate_: function (e, t, n, i) {
          for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (n - t) / (i - t), f = p * p, m = f * p, v = -u * m + 2 * u * f - u * p, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, w = 0; w !== o; ++w) r[w] = v * a[h + w] + g * a[c + w] + y * a[s + w] + x * a[l + w];
          return r
        }
      }), Ro.prototype = Object.assign(Object.create(Ao.prototype), {
        constructor: Ro,
        interpolate_: function (e, t, n, i) {
          for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = (n - t) / (i - t), l = 1 - h, u = 0; u !== o; ++u) r[u] = a[c + u] * l + a[s + u] * h;
          return r
        }
      }), Po.prototype = Object.assign(Object.create(Ao.prototype), {
        constructor: Po,
        interpolate_: function (e) {
          return this.copySampleValue_(e - 1)
        }
      }), Object.assign(Co, {
        toJSON: function (e) {
          var t, n = e.constructor;
          if (void 0 !== n.toJSON) t = n.toJSON(e);
          else {
            t = {
              name: e.name,
              times: So.convertArray(e.times, Array),
              values: So.convertArray(e.values, Array)
            };
            var i = e.getInterpolation();
            i !== e.DefaultInterpolation && (t.interpolation = i)
          }
          return t.type = e.ValueTypeName, t
        }
      }), Object.assign(Co.prototype, {
        constructor: Co,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function (e) {
          return new Po(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodLinear: function (e) {
          return new Ro(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: function (e) {
          return new Lo(this.times, this.values, this.getValueSize(), e)
        },
        setInterpolation: function (e) {
          var t;
          switch (e) {
            case 2300:
              t = this.InterpolantFactoryMethodDiscrete;
              break;
            case 2301:
              t = this.InterpolantFactoryMethodLinear;
              break;
            case 2302:
              t = this.InterpolantFactoryMethodSmooth
          }
          if (void 0 === t) {
            var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
              if (e === this.DefaultInterpolation) throw new Error(n);
              this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn("THREE.KeyframeTrack:", n), this
          }
          return this.createInterpolant = t, this
        },
        getInterpolation: function () {
          switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
              return 2300;
            case this.InterpolantFactoryMethodLinear:
              return 2301;
            case this.InterpolantFactoryMethodSmooth:
              return 2302
          }
        },
        getValueSize: function () {
          return this.values.length / this.times.length
        },
        shift: function (e) {
          if (0 !== e)
            for (var t = this.times, n = 0, i = t.length; n !== i; ++n) t[n] += e;
          return this
        },
        scale: function (e) {
          if (1 !== e)
            for (var t = this.times, n = 0, i = t.length; n !== i; ++n) t[n] *= e;
          return this
        },
        trim: function (e, t) {
          for (var n = this.times, i = n.length, r = 0, a = i - 1; r !== i && n[r] < e;) ++r;
          for (; - 1 !== a && n[a] > t;) --a;
          if (++a, 0 !== r || a !== i) {
            r >= a && (r = (a = Math.max(a, 1)) - 1);
            var o = this.getValueSize();
            this.times = So.arraySlice(n, r, a), this.values = So.arraySlice(this.values, r * o, a * o)
          }
          return this
        },
        validate: function () {
          var e = !0,
            t = this.getValueSize();
          t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
          var n = this.times,
            i = this.values,
            r = n.length;
          0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
          for (var a = null, o = 0; o !== r; o++) {
            var s = n[o];
            if ("number" == typeof s && isNaN(s)) {
              console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), e = !1;
              break
            }
            if (null !== a && a > s) {
              console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), e = !1;
              break
            }
            a = s
          }
          if (void 0 !== i && So.isTypedArray(i)) {
            o = 0;
            for (var c = i.length; o !== c; ++o) {
              var h = i[o];
              if (isNaN(h)) {
                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, h), e = !1;
                break
              }
            }
          }
          return e
        },
        optimize: function () {
          for (var e = this.times, t = this.values, n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = 1, a = e.length - 1, o = 1; o < a; ++o) {
            var s = !1,
              c = e[o];
            if (c !== e[o + 1] && (1 !== o || c !== c[0]))
              if (i) s = !0;
              else
                for (var h = o * n, l = h - n, u = h + n, d = 0; d !== n; ++d) {
                  var p = t[h + d];
                  if (p !== t[l + d] || p !== t[u + d]) {
                    s = !0;
                    break
                  }
                }
            if (s) {
              if (o !== r) {
                e[r] = e[o];
                var f = o * n,
                  m = r * n;
                for (d = 0; d !== n; ++d) t[m + d] = t[f + d]
              }++r
            }
          }
          if (a > 0) {
            e[r] = e[a];
            for (f = a * n, m = r * n, d = 0; d !== n; ++d) t[m + d] = t[f + d];
            ++r
          }
          return r !== e.length && (this.times = So.arraySlice(e, 0, r), this.values = So.arraySlice(t, 0, r * n)), this
        }
      }), Oo.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Oo,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
      }), Io.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Io,
        ValueTypeName: "color"
      }), Do.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Do,
        ValueTypeName: "number"
      }), No.prototype = Object.assign(Object.create(Ao.prototype), {
        constructor: No,
        interpolate_: function (e, t, n, i) {
          for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = (n - t) / (i - t), h = s + o; s !== h; s += 4) Tt.slerpFlat(r, 0, a, s - o, a, s, c);
          return r
        }
      }), Uo.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Uo,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function (e) {
          return new No(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: void 0
      }), Bo.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Bo,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
      }), Fo.prototype = Object.assign(Object.create(Co.prototype), {
        constructor: Fo,
        ValueTypeName: "vector"
      }), Object.assign(Ho, {
        parse: function (e) {
          for (var t = [], n = e.tracks, i = 1 / (e.fps || 1), r = 0, a = n.length; r !== a; ++r) t.push(zo(n[r]).scale(i));
          return new Ho(e.name, e.duration, t)
        },
        toJSON: function (e) {
          for (var t = [], n = e.tracks, i = {
              name: e.name,
              duration: e.duration,
              tracks: t,
              uuid: e.uuid
            }, r = 0, a = n.length; r !== a; ++r) t.push(Co.toJSON(n[r]));
          return i
        },
        CreateFromMorphTargetSequence: function (e, t, n, i) {
          for (var r = t.length, a = [], o = 0; o < r; o++) {
            var s = [],
              c = [];
            s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
            var h = So.getKeyframeOrder(s);
            s = So.sortedArray(s, 1, h), c = So.sortedArray(c, 1, h), i || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new Do(".morphTargetInfluences[" + t[o].name + "]", s, c).scale(1 / n))
          }
          return new Ho(e, -1, a)
        },
        findByName: function (e, t) {
          var n = e;
          if (!Array.isArray(e)) {
            var i = e;
            n = i.geometry && i.geometry.animations || i.animations
          }
          for (var r = 0; r < n.length; r++)
            if (n[r].name === t) return n[r];
          return null
        },
        CreateClipsFromMorphTargetSequences: function (e, t, n) {
          for (var i = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
            var s = e[a],
              c = s.name.match(r);
            if (c && c.length > 1) {
              var h = i[u = c[1]];
              h || (i[u] = h = []), h.push(s)
            }
          }
          var l = [];
          for (var u in i) l.push(Ho.CreateFromMorphTargetSequence(u, i[u], t, n));
          return l
        },
        parseAnimation: function (e, t) {
          if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
          for (var n = function (e, t, n, i, r) {
              if (0 !== n.length) {
                var a = [],
                  o = [];
                So.flattenJSON(n, a, o, i), 0 !== a.length && r.push(new e(t, a, o))
              }
            }, i = [], r = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.hierarchy || [], c = 0; c < s.length; c++) {
            var h = s[c].keys;
            if (h && 0 !== h.length)
              if (h[0].morphTargets) {
                for (var l = {}, u = 0; u < h.length; u++)
                  if (h[u].morphTargets)
                    for (var d = 0; d < h[u].morphTargets.length; d++) l[h[u].morphTargets[d]] = -1;
                for (var p in l) {
                  var f = [],
                    m = [];
                  for (d = 0; d !== h[u].morphTargets.length; ++d) {
                    var v = h[u];
                    f.push(v.time), m.push(v.morphTarget === p ? 1 : 0)
                  }
                  i.push(new Do(".morphTargetInfluence[" + p + "]", f, m))
                }
                a = l.length * (o || 1)
              } else {
                var g = ".bones[" + t[c].name + "]";
                n(Fo, g + ".position", h, "pos", i), n(Uo, g + ".quaternion", h, "rot", i), n(Fo, g + ".scale", h, "scl", i)
              }
          }
          return 0 === i.length ? null : new Ho(r, a, i)
        }
      }), Object.assign(Ho.prototype, {
        resetDuration: function () {
          for (var e = 0, t = 0, n = this.tracks.length; t !== n; ++t) {
            var i = this.tracks[t];
            e = Math.max(e, i.times[i.times.length - 1])
          }
          return this.duration = e, this
        },
        trim: function () {
          for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
          return this
        },
        validate: function () {
          for (var e = !0, t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
          return e
        },
        optimize: function () {
          for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
          return this
        }
      }), Object.assign(Go.prototype, {
        load: function (e, t, n, i) {
          var r = this;
          new za(r.manager).load(e, function (e) {
            t(r.parse(JSON.parse(e)))
          }, n, i)
        },
        setTextures: function (e) {
          this.textures = e
        },
        parse: function (e) {
          var t = this.textures;

          function n(e) {
            return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
          }
          var i = new Na[e.type];
          if (void 0 !== e.uuid && (i.uuid = e.uuid), void 0 !== e.name && (i.name = e.name), void 0 !== e.color && i.color.setHex(e.color), void 0 !== e.roughness && (i.roughness = e.roughness), void 0 !== e.metalness && (i.metalness = e.metalness), void 0 !== e.emissive && i.emissive.setHex(e.emissive), void 0 !== e.specular && i.specular.setHex(e.specular), void 0 !== e.shininess && (i.shininess = e.shininess), void 0 !== e.clearCoat && (i.clearCoat = e.clearCoat), void 0 !== e.clearCoatRoughness && (i.clearCoatRoughness = e.clearCoatRoughness), void 0 !== e.uniforms && (i.uniforms = e.uniforms), void 0 !== e.vertexShader && (i.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (i.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (i.vertexColors = e.vertexColors), void 0 !== e.fog && (i.fog = e.fog), void 0 !== e.flatShading && (i.flatShading = e.flatShading), void 0 !== e.blending && (i.blending = e.blending), void 0 !== e.side && (i.side = e.side), void 0 !== e.opacity && (i.opacity = e.opacity), void 0 !== e.transparent && (i.transparent = e.transparent), void 0 !== e.alphaTest && (i.alphaTest = e.alphaTest), void 0 !== e.depthTest && (i.depthTest = e.depthTest), void 0 !== e.depthWrite && (i.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (i.colorWrite = e.colorWrite), void 0 !== e.wireframe && (i.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (i.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.wireframeLinecap && (i.wireframeLinecap = e.wireframeLinecap), void 0 !== e.wireframeLinejoin && (i.wireframeLinejoin = e.wireframeLinejoin), void 0 !== e.rotation && (i.rotation = e.rotation), 1 !== e.linewidth && (i.linewidth = e.linewidth), void 0 !== e.dashSize && (i.dashSize = e.dashSize), void 0 !== e.gapSize && (i.gapSize = e.gapSize), void 0 !== e.scale && (i.scale = e.scale), void 0 !== e.polygonOffset && (i.polygonOffset = e.polygonOffset), void 0 !== e.polygonOffsetFactor && (i.polygonOffsetFactor = e.polygonOffsetFactor), void 0 !== e.polygonOffsetUnits && (i.polygonOffsetUnits = e.polygonOffsetUnits), void 0 !== e.skinning && (i.skinning = e.skinning), void 0 !== e.morphTargets && (i.morphTargets = e.morphTargets), void 0 !== e.dithering && (i.dithering = e.dithering), void 0 !== e.visible && (i.visible = e.visible), void 0 !== e.userData && (i.userData = e.userData), void 0 !== e.shading && (i.flatShading = 1 === e.shading), void 0 !== e.size && (i.size = e.size), void 0 !== e.sizeAttenuation && (i.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (i.map = n(e.map)), void 0 !== e.alphaMap && (i.alphaMap = n(e.alphaMap), i.transparent = !0), void 0 !== e.bumpMap && (i.bumpMap = n(e.bumpMap)), void 0 !== e.bumpScale && (i.bumpScale = e.bumpScale), void 0 !== e.normalMap && (i.normalMap = n(e.normalMap)), void 0 !== e.normalMapType && (i.normalMapType = e.normalMapType), void 0 !== e.normalScale) {
            var r = e.normalScale;
            !1 === Array.isArray(r) && (r = [r, r]), i.normalScale = (new Et).fromArray(r)
          }
          return void 0 !== e.displacementMap && (i.displacementMap = n(e.displacementMap)), void 0 !== e.displacementScale && (i.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (i.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (i.roughnessMap = n(e.roughnessMap)), void 0 !== e.metalnessMap && (i.metalnessMap = n(e.metalnessMap)), void 0 !== e.emissiveMap && (i.emissiveMap = n(e.emissiveMap)), void 0 !== e.emissiveIntensity && (i.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (i.specularMap = n(e.specularMap)), void 0 !== e.envMap && (i.envMap = n(e.envMap)), void 0 !== e.reflectivity && (i.reflectivity = e.reflectivity), void 0 !== e.lightMap && (i.lightMap = n(e.lightMap)), void 0 !== e.lightMapIntensity && (i.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (i.aoMap = n(e.aoMap)), void 0 !== e.aoMapIntensity && (i.aoMapIntensity = e.aoMapIntensity), void 0 !== e.gradientMap && (i.gradientMap = n(e.gradientMap)), i
        }
      }), Object.assign(ko.prototype, {
        load: function (e, t, n, i) {
          var r = this;
          new za(r.manager).load(e, function (e) {
            t(r.parse(JSON.parse(e)))
          }, n, i)
        },
        parse: function (e) {
          var t = new vn,
            n = e.data.index;
          if (void 0 !== n) {
            var i = new jo[n.type](n.array);
            t.setIndex(new nn(i, 1))
          }
          var r = e.data.attributes;
          for (var a in r) {
            var o = r[a];
            i = new jo[o.type](o.array);
            t.addAttribute(a, new nn(i, o.itemSize, o.normalized))
          }
          var s = e.data.groups || e.data.drawcalls || e.data.offsets;
          if (void 0 !== s)
            for (var c = 0, h = s.length; c !== h; ++c) {
              var l = s[c];
              t.addGroup(l.start, l.count, l.materialIndex)
            }
          var u = e.data.boundingSphere;
          if (void 0 !== u) {
            var d = new St;
            void 0 !== u.center && d.fromArray(u.center), t.boundingSphere = new Ut(d, u.radius)
          }
          return t
        }
      });
    var jo = {
      Int8Array: Int8Array,
      Uint8Array: Uint8Array,
      Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
      Int16Array: Int16Array,
      Uint16Array: Uint16Array,
      Int32Array: Int32Array,
      Uint32Array: Uint32Array,
      Float32Array: Float32Array,
      Float64Array: Float64Array
    };

    function Vo() {}
    Vo.Handlers = {
      handlers: [],
      add: function (e, t) {
        this.handlers.push(e, t)
      },
      get: function (e) {
        for (var t = this.handlers, n = 0, i = t.length; n < i; n += 2) {
          var r = t[n],
            a = t[n + 1];
          if (r.test(e)) return a
        }
        return null
      }
    }, Object.assign(Vo.prototype, {
      crossOrigin: "anonymous",
      onLoadStart: function () {},
      onLoadProgress: function () {},
      onLoadComplete: function () {},
      initMaterials: function (e, t, n) {
        for (var i = [], r = 0; r < e.length; ++r) i[r] = this.createMaterial(e[r], t, n);
        return i
      },
      createMaterial: function () {
        var e = {
            NoBlending: g,
            NormalBlending: y,
            AdditiveBlending: x,
            SubtractiveBlending: w,
            MultiplyBlending: b,
            CustomBlending: _
          },
          t = new kt,
          n = new Wa,
          i = new Go;
        return function (r, a, o) {
          var s = {};

          function c(e, t, i, r, c) {
            var h, l = a + e,
              u = Vo.Handlers.get(l);
            null !== u ? h = u.load(l) : (n.setCrossOrigin(o), h = n.load(l)), void 0 !== t && (h.repeat.fromArray(t), 1 !== t[0] && (h.wrapS = ce), 1 !== t[1] && (h.wrapT = ce)), void 0 !== i && h.offset.fromArray(i), void 0 !== r && ("repeat" === r[0] && (h.wrapS = ce), "mirror" === r[0] && (h.wrapS = le), "repeat" === r[1] && (h.wrapT = ce), "mirror" === r[1] && (h.wrapT = le)), void 0 !== c && (h.anisotropy = c);
            var d = _t.generateUUID();
            return s[d] = h, d
          }
          var h = {
            uuid: _t.generateUUID(),
            type: "MeshLambertMaterial"
          };
          for (var l in r) {
            var u = r[l];
            switch (l) {
              case "DbgColor":
              case "DbgIndex":
              case "opticalDensity":
              case "illumination":
                break;
              case "DbgName":
                h.name = u;
                break;
              case "blending":
                h.blending = e[u];
                break;
              case "colorAmbient":
              case "mapAmbient":
                console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                break;
              case "colorDiffuse":
                h.color = t.fromArray(u).getHex();
                break;
              case "colorSpecular":
                h.specular = t.fromArray(u).getHex();
                break;
              case "colorEmissive":
                h.emissive = t.fromArray(u).getHex();
                break;
              case "specularCoef":
                h.shininess = u;
                break;
              case "shading":
                "basic" === u.toLowerCase() && (h.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (h.type = "MeshPhongMaterial"), "standard" === u.toLowerCase() && (h.type = "MeshStandardMaterial");
                break;
              case "mapDiffuse":
                h.map = c(u, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                break;
              case "mapDiffuseRepeat":
              case "mapDiffuseOffset":
              case "mapDiffuseWrap":
              case "mapDiffuseAnisotropy":
                break;
              case "mapEmissive":
                h.emissiveMap = c(u, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                break;
              case "mapEmissiveRepeat":
              case "mapEmissiveOffset":
              case "mapEmissiveWrap":
              case "mapEmissiveAnisotropy":
                break;
              case "mapLight":
                h.lightMap = c(u, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                break;
              case "mapLightRepeat":
              case "mapLightOffset":
              case "mapLightWrap":
              case "mapLightAnisotropy":
                break;
              case "mapAO":
                h.aoMap = c(u, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                break;
              case "mapAORepeat":
              case "mapAOOffset":
              case "mapAOWrap":
              case "mapAOAnisotropy":
                break;
              case "mapBump":
                h.bumpMap = c(u, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                break;
              case "mapBumpScale":
                h.bumpScale = u;
                break;
              case "mapBumpRepeat":
              case "mapBumpOffset":
              case "mapBumpWrap":
              case "mapBumpAnisotropy":
                break;
              case "mapNormal":
                h.normalMap = c(u, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                break;
              case "mapNormalFactor":
                h.normalScale = u;
                break;
              case "mapNormalRepeat":
              case "mapNormalOffset":
              case "mapNormalWrap":
              case "mapNormalAnisotropy":
                break;
              case "mapSpecular":
                h.specularMap = c(u, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                break;
              case "mapSpecularRepeat":
              case "mapSpecularOffset":
              case "mapSpecularWrap":
              case "mapSpecularAnisotropy":
                break;
              case "mapMetalness":
                h.metalnessMap = c(u, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                break;
              case "mapMetalnessRepeat":
              case "mapMetalnessOffset":
              case "mapMetalnessWrap":
              case "mapMetalnessAnisotropy":
                break;
              case "mapRoughness":
                h.roughnessMap = c(u, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                break;
              case "mapRoughnessRepeat":
              case "mapRoughnessOffset":
              case "mapRoughnessWrap":
              case "mapRoughnessAnisotropy":
                break;
              case "mapAlpha":
                h.alphaMap = c(u, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                break;
              case "mapAlphaRepeat":
              case "mapAlphaOffset":
              case "mapAlphaWrap":
              case "mapAlphaAnisotropy":
                break;
              case "flipSided":
                h.side = d;
                break;
              case "doubleSided":
                h.side = p;
                break;
              case "transparency":
                console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), h.opacity = u;
                break;
              case "depthTest":
              case "depthWrite":
              case "colorWrite":
              case "opacity":
              case "reflectivity":
              case "transparent":
              case "visible":
              case "wireframe":
                h[l] = u;
                break;
              case "vertexColors":
                !0 === u && (h.vertexColors = v), "face" === u && (h.vertexColors = m);
                break;
              default:
                console.error("THREE.Loader.createMaterial: Unsupported", l, u)
            }
          }
          return "MeshBasicMaterial" === h.type && delete h.emissive, "MeshPhongMaterial" !== h.type && delete h.specular, h.opacity < 1 && (h.transparent = !0), i.setTextures(s), i.parse(h)
        }
      }()
    });
    var Wo = {
      decodeText: function (e) {
        if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(e);
        for (var t = "", n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
        return decodeURIComponent(escape(t))
      },
      extractUrlBase: function (e) {
        var t = e.lastIndexOf("/");
        return -1 === t ? "./" : e.substr(0, t + 1)
      }
    };

    function Xo(e) {
      "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : Fa, this.withCredentials = !1
    }

    function Yo(e) {
      this.manager = void 0 !== e ? e : Fa, this.texturePath = ""
    }
    Object.assign(Xo.prototype, {
      crossOrigin: "anonymous",
      load: function (e, t, n, i) {
        var r = this,
          a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : Wo.extractUrlBase(e),
          o = new za(this.manager);
        o.setWithCredentials(this.withCredentials), o.load(e, function (n) {
          var i = JSON.parse(n),
            o = i.metadata;
          if (void 0 !== o) {
            var s = o.type;
            if (void 0 !== s && "object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.")
          }
          var c = r.parse(i, a);
          t(c.geometry, c.materials)
        }, n, i)
      },
      setCrossOrigin: function (e) {
        return this.crossOrigin = e, this
      },
      setTexturePath: function (e) {
        return this.texturePath = e, this
      },
      parse: function () {
        return function (e, t) {
          void 0 !== e.data && (e = e.data), void 0 !== e.scale ? e.scale = 1 / e.scale : e.scale = 1;
          var n = new tn;
          return function (e, t) {
              function n(e, t) {
                return e & 1 << t
              }
              var i, r, a, o, s, c, h, l, u, d, p, f, m, v, g, y, x, w, b, _, E, M, T, S, A, L = e.faces,
                R = e.vertices,
                P = e.normals,
                C = e.colors,
                O = e.scale,
                I = 0;
              if (void 0 !== e.uvs) {
                for (i = 0; i < e.uvs.length; i++) e.uvs[i].length && I++;
                for (i = 0; i < I; i++) t.faceVertexUvs[i] = []
              }
              for (o = 0, s = R.length; o < s;)(w = new St).x = R[o++] * O, w.y = R[o++] * O, w.z = R[o++] * O, t.vertices.push(w);
              for (o = 0, s = L.length; o < s;)
                if (p = n(d = L[o++], 0), f = n(d, 1), m = n(d, 3), v = n(d, 4), g = n(d, 5), y = n(d, 6), x = n(d, 7), p) {
                  if ((_ = new $t).a = L[o], _.b = L[o + 1], _.c = L[o + 3], (E = new $t).a = L[o + 1], E.b = L[o + 2], E.c = L[o + 3], o += 4, f && (u = L[o++], _.materialIndex = u, E.materialIndex = u), a = t.faces.length, m)
                    for (i = 0; i < I; i++)
                      for (S = e.uvs[i], t.faceVertexUvs[i][a] = [], t.faceVertexUvs[i][a + 1] = [], r = 0; r < 4; r++) A = new Et(S[2 * (l = L[o++])], S[2 * l + 1]), 2 !== r && t.faceVertexUvs[i][a].push(A), 0 !== r && t.faceVertexUvs[i][a + 1].push(A);
                  if (v && (h = 3 * L[o++], _.normal.set(P[h++], P[h++], P[h]), E.normal.copy(_.normal)), g)
                    for (i = 0; i < 4; i++) h = 3 * L[o++], T = new St(P[h++], P[h++], P[h]), 2 !== i && _.vertexNormals.push(T), 0 !== i && E.vertexNormals.push(T);
                  if (y && (M = C[c = L[o++]], _.color.setHex(M), E.color.setHex(M)), x)
                    for (i = 0; i < 4; i++) M = C[c = L[o++]], 2 !== i && _.vertexColors.push(new kt(M)), 0 !== i && E.vertexColors.push(new kt(M));
                  t.faces.push(_), t.faces.push(E)
                } else {
                  if ((b = new $t).a = L[o++], b.b = L[o++], b.c = L[o++], f && (u = L[o++], b.materialIndex = u), a = t.faces.length, m)
                    for (i = 0; i < I; i++)
                      for (S = e.uvs[i], t.faceVertexUvs[i][a] = [], r = 0; r < 3; r++) A = new Et(S[2 * (l = L[o++])], S[2 * l + 1]), t.faceVertexUvs[i][a].push(A);
                  if (v && (h = 3 * L[o++], b.normal.set(P[h++], P[h++], P[h])), g)
                    for (i = 0; i < 3; i++) h = 3 * L[o++], T = new St(P[h++], P[h++], P[h]), b.vertexNormals.push(T);
                  if (y && (c = L[o++], b.color.setHex(C[c])), x)
                    for (i = 0; i < 3; i++) c = L[o++], b.vertexColors.push(new kt(C[c]));
                  t.faces.push(b)
                }
            }(e, n),
            function (e, t) {
              var n = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
              if (e.skinWeights)
                for (var i = 0, r = e.skinWeights.length; i < r; i += n) {
                  var a = e.skinWeights[i],
                    o = n > 1 ? e.skinWeights[i + 1] : 0,
                    s = n > 2 ? e.skinWeights[i + 2] : 0,
                    c = n > 3 ? e.skinWeights[i + 3] : 0;
                  t.skinWeights.push(new Ct(a, o, s, c))
                }
              if (e.skinIndices)
                for (i = 0, r = e.skinIndices.length; i < r; i += n) {
                  var h = e.skinIndices[i],
                    l = n > 1 ? e.skinIndices[i + 1] : 0,
                    u = n > 2 ? e.skinIndices[i + 2] : 0,
                    d = n > 3 ? e.skinIndices[i + 3] : 0;
                  t.skinIndices.push(new Ct(h, l, u, d))
                }
              t.bones = e.bones, t.bones && t.bones.length > 0 && (t.skinWeights.length !== t.skinIndices.length || t.skinIndices.length !== t.vertices.length) && console.warn("When skinning, number of vertices (" + t.vertices.length + "), skinIndices (" + t.skinIndices.length + "), and skinWeights (" + t.skinWeights.length + ") should match.")
            }(e, n),
            function (e, t) {
              var n = e.scale;
              if (void 0 !== e.morphTargets)
                for (var i = 0, r = e.morphTargets.length; i < r; i++) {
                  t.morphTargets[i] = {}, t.morphTargets[i].name = e.morphTargets[i].name, t.morphTargets[i].vertices = [];
                  for (var a = t.morphTargets[i].vertices, o = e.morphTargets[i].vertices, s = 0, c = o.length; s < c; s += 3) {
                    var h = new St;
                    h.x = o[s] * n, h.y = o[s + 1] * n, h.z = o[s + 2] * n, a.push(h)
                  }
                }
              if (void 0 !== e.morphColors && e.morphColors.length > 0) {
                console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                var l = t.faces,
                  u = e.morphColors[0].colors;
                for (i = 0, r = l.length; i < r; i++) l[i].color.fromArray(u, 3 * i)
              }
            }(e, n),
            function (e, t) {
              var n = [],
                i = [];
              void 0 !== e.animation && i.push(e.animation), void 0 !== e.animations && (e.animations.length ? i = i.concat(e.animations) : i.push(e.animations));
              for (var r = 0; r < i.length; r++) {
                var a = Ho.parseAnimation(i[r], t.bones);
                a && n.push(a)
              }
              if (t.morphTargets) {
                var o = Ho.CreateClipsFromMorphTargetSequences(t.morphTargets, 10);
                n = n.concat(o)
              }
              n.length > 0 && (t.animations = n)
            }(e, n), n.computeFaceNormals(), n.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length ? {
              geometry: n
            } : {
              geometry: n,
              materials: Vo.prototype.initMaterials(e.materials, t, this.crossOrigin)
            }
        }
      }()
    }), Object.assign(Yo.prototype, {
      crossOrigin: "anonymous",
      load: function (e, t, n, i) {
        "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
        var r = this;
        new za(r.manager).load(e, function (n) {
          var a = null;
          try {
            a = JSON.parse(n)
          } catch (t) {
            return void 0 !== i && i(t), void console.error("THREE:ObjectLoader: Can't parse " + e + ".", t.message)
          }
          var o = a.metadata;
          void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? r.parse(a, t) : console.error("THREE.ObjectLoader: Can't load " + e + ". Use THREE.JSONLoader instead.")
        }, n, i)
      },
      setTexturePath: function (e) {
        return this.texturePath = e, this
      },
      setCrossOrigin: function (e) {
        return this.crossOrigin = e, this
      },
      parse: function (e, t) {
        var n = this.parseShape(e.shapes),
          i = this.parseGeometries(e.geometries, n),
          r = this.parseImages(e.images, function () {
            void 0 !== t && t(s)
          }),
          a = this.parseTextures(e.textures, r),
          o = this.parseMaterials(e.materials, a),
          s = this.parseObject(e.object, i, o);
        return e.animations && (s.animations = this.parseAnimations(e.animations)), void 0 !== e.images && 0 !== e.images.length || void 0 !== t && t(s), s
      },
      parseShape: function (e) {
        var t = {};
        if (void 0 !== e)
          for (var n = 0, i = e.length; n < i; n++) {
            var r = (new mo).fromJSON(e[n]);
            t[r.uuid] = r
          }
        return t
      },
      parseGeometries: function (e, t) {
        var n = {};
        if (void 0 !== e)
          for (var i = new Xo, r = new ko, a = 0, o = e.length; a < o; a++) {
            var s, c = e[a];
            switch (c.type) {
              case "PlaneGeometry":
              case "PlaneBufferGeometry":
                s = new Ta[c.type](c.width, c.height, c.widthSegments, c.heightSegments);
                break;
              case "BoxGeometry":
              case "BoxBufferGeometry":
              case "CubeGeometry":
                s = new Ta[c.type](c.width, c.height, c.depth, c.widthSegments, c.heightSegments, c.depthSegments);
                break;
              case "CircleGeometry":
              case "CircleBufferGeometry":
                s = new Ta[c.type](c.radius, c.segments, c.thetaStart, c.thetaLength);
                break;
              case "CylinderGeometry":
              case "CylinderBufferGeometry":
                s = new Ta[c.type](c.radiusTop, c.radiusBottom, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
                break;
              case "ConeGeometry":
              case "ConeBufferGeometry":
                s = new Ta[c.type](c.radius, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
                break;
              case "SphereGeometry":
              case "SphereBufferGeometry":
                s = new Ta[c.type](c.radius, c.widthSegments, c.heightSegments, c.phiStart, c.phiLength, c.thetaStart, c.thetaLength);
                break;
              case "DodecahedronGeometry":
              case "DodecahedronBufferGeometry":
              case "IcosahedronGeometry":
              case "IcosahedronBufferGeometry":
              case "OctahedronGeometry":
              case "OctahedronBufferGeometry":
              case "TetrahedronGeometry":
              case "TetrahedronBufferGeometry":
                s = new Ta[c.type](c.radius, c.detail);
                break;
              case "RingGeometry":
              case "RingBufferGeometry":
                s = new Ta[c.type](c.innerRadius, c.outerRadius, c.thetaSegments, c.phiSegments, c.thetaStart, c.thetaLength);
                break;
              case "TorusGeometry":
              case "TorusBufferGeometry":
                s = new Ta[c.type](c.radius, c.tube, c.radialSegments, c.tubularSegments, c.arc);
                break;
              case "TorusKnotGeometry":
              case "TorusKnotBufferGeometry":
                s = new Ta[c.type](c.radius, c.tube, c.tubularSegments, c.radialSegments, c.p, c.q);
                break;
              case "LatheGeometry":
              case "LatheBufferGeometry":
                s = new Ta[c.type](c.points, c.segments, c.phiStart, c.phiLength);
                break;
              case "PolyhedronGeometry":
              case "PolyhedronBufferGeometry":
                s = new Ta[c.type](c.vertices, c.indices, c.radius, c.details);
                break;
              case "ShapeGeometry":
              case "ShapeBufferGeometry":
                for (var h = [], l = 0, u = c.shapes.length; l < u; l++) {
                  var d = t[c.shapes[l]];
                  h.push(d)
                }
                s = new Ta[c.type](h, c.curveSegments);
                break;
              case "ExtrudeGeometry":
              case "ExtrudeBufferGeometry":
                for (h = [], l = 0, u = c.shapes.length; l < u; l++) {
                  d = t[c.shapes[l]];
                  h.push(d)
                }
                var p = c.options.extrudePath;
                void 0 !== p && (c.options.extrudePath = (new uo[p.type]).fromJSON(p)), s = new Ta[c.type](h, c.options);
                break;
              case "BufferGeometry":
                s = r.parse(c);
                break;
              case "Geometry":
                s = i.parse(c, this.texturePath).geometry;
                break;
              default:
                console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
                continue
            }
            s.uuid = c.uuid, void 0 !== c.name && (s.name = c.name), !0 === s.isBufferGeometry && void 0 !== c.userData && (s.userData = c.userData), n[c.uuid] = s
          }
        return n
      },
      parseMaterials: function (e, t) {
        var n = {};
        if (void 0 !== e) {
          var i = new Go;
          i.setTextures(t);
          for (var r = 0, a = e.length; r < a; r++) {
            var o = e[r];
            if ("MultiMaterial" === o.type) {
              for (var s = [], c = 0; c < o.materials.length; c++) s.push(i.parse(o.materials[c]));
              n[o.uuid] = s
            } else n[o.uuid] = i.parse(o)
          }
        }
        return n
      },
      parseAnimations: function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var i = e[n],
            r = Ho.parse(i);
          void 0 !== i.uuid && (r.uuid = i.uuid), t.push(r)
        }
        return t
      },
      parseImages: function (e, t) {
        var n = this,
          i = {};

        function r(e) {
          return n.manager.itemStart(e), a.load(e, function () {
            n.manager.itemEnd(e)
          }, void 0, function () {
            n.manager.itemEnd(e), n.manager.itemError(e)
          })
        }
        if (void 0 !== e && e.length > 0) {
          var a = new ja(new Ba(t));
          a.setCrossOrigin(this.crossOrigin);
          for (var o = 0, s = e.length; o < s; o++) {
            var c = e[o],
              h = c.url;
            if (Array.isArray(h)) {
              i[c.uuid] = [];
              for (var l = 0, u = h.length; l < u; l++) {
                var d = h[l],
                  p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.texturePath + d;
                i[c.uuid].push(r(p))
              }
            } else {
              p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.texturePath + c.url;
              i[c.uuid] = r(p)
            }
          }
        }
        return i
      },
      parseTextures: function (e, t) {
        function n(e, t) {
          return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), t[e])
        }
        var i = {};
        if (void 0 !== e)
          for (var r = 0, a = e.length; r < a; r++) {
            var o, s = e[r];
            void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(t[s.image]) ? new Rn(t[s.image]) : new Pt(t[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = n(s.mapping, Zo)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = n(s.wrap[0], Jo), o.wrapT = n(s.wrap[1], Jo)), void 0 !== s.format && (o.format = s.format), void 0 !== s.minFilter && (o.minFilter = n(s.minFilter, Qo)), void 0 !== s.magFilter && (o.magFilter = n(s.magFilter, Qo)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), i[s.uuid] = o
          }
        return i
      },
      parseObject: function (e, t, n) {
        var i;

        function r(e) {
          return void 0 === t[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), t[e]
        }

        function a(e) {
          if (void 0 !== e) {
            if (Array.isArray(e)) {
              for (var t = [], i = 0, r = e.length; i < r; i++) {
                var a = e[i];
                void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a), t.push(n[a])
              }
              return t
            }
            return void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined material", e), n[e]
          }
        }
        switch (e.type) {
          case "Scene":
            i = new qi, void 0 !== e.background && Number.isInteger(e.background) && (i.background = new kt(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? i.fog = new Yi(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (i.fog = new Xi(e.fog.color, e.fog.density)));
            break;
          case "PerspectiveCamera":
            i = new ki(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (i.focus = e.focus), void 0 !== e.zoom && (i.zoom = e.zoom), void 0 !== e.filmGauge && (i.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (i.filmOffset = e.filmOffset), void 0 !== e.view && (i.view = Object.assign({}, e.view));
            break;
          case "OrthographicCamera":
            i = new Kt(e.left, e.right, e.top, e.bottom, e.near, e.far), void 0 !== e.zoom && (i.zoom = e.zoom), void 0 !== e.view && (i.view = Object.assign({}, e.view));
            break;
          case "AmbientLight":
            i = new Mo(e.color, e.intensity);
            break;
          case "DirectionalLight":
            i = new Eo(e.color, e.intensity);
            break;
          case "PointLight":
            i = new bo(e.color, e.intensity, e.distance, e.decay);
            break;
          case "RectAreaLight":
            i = new To(e.color, e.intensity, e.width, e.height);
            break;
          case "SpotLight":
            i = new wo(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
            break;
          case "HemisphereLight":
            i = new go(e.color, e.groundColor, e.intensity);
            break;
          case "SkinnedMesh":
            console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
          case "Mesh":
            var o = r(e.geometry),
              s = a(e.material);
            i = o.bones && o.bones.length > 0 ? new nr(o, s) : new An(o, s);
            break;
          case "LOD":
            i = new $i;
            break;
          case "Line":
            i = new rr(r(e.geometry), a(e.material), e.mode);
            break;
          case "LineLoop":
            i = new or(r(e.geometry), a(e.material));
            break;
          case "LineSegments":
            i = new ar(r(e.geometry), a(e.material));
            break;
          case "PointCloud":
          case "Points":
            i = new cr(r(e.geometry), a(e.material));
            break;
          case "Sprite":
            i = new Ki(a(e.material));
            break;
          case "Group":
            i = new Gi;
            break;
          default:
            i = new Jt
        }
        if (i.uuid = e.uuid, void 0 !== e.name && (i.name = e.name), void 0 !== e.matrix ? (i.matrix.fromArray(e.matrix), void 0 !== e.matrixAutoUpdate && (i.matrixAutoUpdate = e.matrixAutoUpdate), i.matrixAutoUpdate && i.matrix.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== e.position && i.position.fromArray(e.position), void 0 !== e.rotation && i.rotation.fromArray(e.rotation), void 0 !== e.quaternion && i.quaternion.fromArray(e.quaternion), void 0 !== e.scale && i.scale.fromArray(e.scale)), void 0 !== e.castShadow && (i.castShadow = e.castShadow), void 0 !== e.receiveShadow && (i.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (i.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (i.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && i.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (i.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (i.visible = e.visible), void 0 !== e.frustumCulled && (i.frustumCulled = e.frustumCulled), void 0 !== e.renderOrder && (i.renderOrder = e.renderOrder), void 0 !== e.userData && (i.userData = e.userData), void 0 !== e.layers && (i.layers.mask = e.layers), void 0 !== e.children)
          for (var c = e.children, h = 0; h < c.length; h++) i.add(this.parseObject(c[h], t, n));
        if ("LOD" === e.type)
          for (var l = e.levels, u = 0; u < l.length; u++) {
            var d = l[u],
              p = i.getObjectByProperty("uuid", d.object);
            void 0 !== p && i.addLevel(p, d.distance)
          }
        return i
      }
    });
    var qo, Zo = {
        UVMapping: 300,
        CubeReflectionMapping: te,
        CubeRefractionMapping: ne,
        EquirectangularReflectionMapping: ie,
        EquirectangularRefractionMapping: re,
        SphericalReflectionMapping: ae,
        CubeUVReflectionMapping: oe,
        CubeUVRefractionMapping: se
      },
      Jo = {
        RepeatWrapping: ce,
        ClampToEdgeWrapping: he,
        MirroredRepeatWrapping: le
      },
      Qo = {
        NearestFilter: ue,
        NearestMipMapNearestFilter: de,
        NearestMipMapLinearFilter: pe,
        LinearFilter: fe,
        LinearMipMapNearestFilter: me,
        LinearMipMapLinearFilter: ve
      };

    function Ko(e) {
      "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== e ? e : Fa, this.options = void 0
    }

    function $o() {
      this.type = "ShapePath", this.color = new kt, this.subPaths = [], this.currentPath = null
    }

    function es(e) {
      this.type = "Font", this.data = e
    }

    function ts(e, t, n, i, r) {
      var a = r.glyphs[e] || r.glyphs["?"];
      if (a) {
        var o, s, c, h, l, u, d, p, f = new $o;
        if (a.o)
          for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length; v < g;) {
            switch (m[v++]) {
              case "m":
                o = m[v++] * t + n, s = m[v++] * t + i, f.moveTo(o, s);
                break;
              case "l":
                o = m[v++] * t + n, s = m[v++] * t + i, f.lineTo(o, s);
                break;
              case "q":
                c = m[v++] * t + n, h = m[v++] * t + i, l = m[v++] * t + n, u = m[v++] * t + i, f.quadraticCurveTo(l, u, c, h);
                break;
              case "b":
                c = m[v++] * t + n, h = m[v++] * t + i, l = m[v++] * t + n, u = m[v++] * t + i, d = m[v++] * t + n, p = m[v++] * t + i, f.bezierCurveTo(l, u, d, p, c, h)
            }
          }
        return {
          offsetX: a.ha * t,
          path: f
        }
      }
    }

    function ns(e) {
      this.manager = void 0 !== e ? e : Fa
    }
    Ko.prototype = {
      constructor: Ko,
      setOptions: function (e) {
        return this.options = e, this
      },
      load: function (e, t, n, i) {
        void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
        var r = this,
          a = Ua.get(e);
        if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function () {
          t && t(a), r.manager.itemEnd(e)
        }, 0), a;
        fetch(e).then(function (e) {
          return e.blob()
        }).then(function (e) {
          return createImageBitmap(e, r.options)
        }).then(function (n) {
          Ua.add(e, n), t && t(n), r.manager.itemEnd(e)
        }).catch(function (t) {
          i && i(t), r.manager.itemEnd(e), r.manager.itemError(e)
        })
      },
      setCrossOrigin: function () {
        return this
      },
      setPath: function (e) {
        return this.path = e, this
      }
    }, Object.assign($o.prototype, {
      moveTo: function (e, t) {
        this.currentPath = new fo, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t)
      },
      lineTo: function (e, t) {
        this.currentPath.lineTo(e, t)
      },
      quadraticCurveTo: function (e, t, n, i) {
        this.currentPath.quadraticCurveTo(e, t, n, i)
      },
      bezierCurveTo: function (e, t, n, i, r, a) {
        this.currentPath.bezierCurveTo(e, t, n, i, r, a)
      },
      splineThru: function (e) {
        this.currentPath.splineThru(e)
      },
      toShapes: function (e, t) {
        function n(e) {
          for (var t = [], n = 0, i = e.length; n < i; n++) {
            var r = e[n],
              a = new mo;
            a.curves = r.curves, t.push(a)
          }
          return t
        }

        function i(e, t) {
          for (var n = t.length, i = !1, r = n - 1, a = 0; a < n; r = a++) {
            var o = t[r],
              s = t[a],
              c = s.x - o.x,
              h = s.y - o.y;
            if (Math.abs(h) > Number.EPSILON) {
              if (h < 0 && (o = t[a], c = -c, s = t[r], h = -h), e.y < o.y || e.y > s.y) continue;
              if (e.y === o.y) {
                if (e.x === o.x) return !0
              } else {
                var l = h * (e.x - o.x) - c * (e.y - o.y);
                if (0 === l) return !0;
                if (l < 0) continue;
                i = !i
              }
            } else {
              if (e.y !== o.y) continue;
              if (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x) return !0
            }
          }
          return i
        }
        var r = ea.isClockWise,
          a = this.subPaths;
        if (0 === a.length) return [];
        if (!0 === t) return n(a);
        var o, s, c, h = [];
        if (1 === a.length) return s = a[0], (c = new mo).curves = s.curves, h.push(c), h;
        var l = !r(a[0].getPoints());
        l = e ? !l : l;
        var u, d, p = [],
          f = [],
          m = [],
          v = 0;
        f[v] = void 0, m[v] = [];
        for (var g = 0, y = a.length; g < y; g++) o = r(u = (s = a[g]).getPoints()), (o = e ? !o : o) ? (!l && f[v] && v++, f[v] = {
          s: new mo,
          p: u
        }, f[v].s.curves = s.curves, l && v++, m[v] = []) : m[v].push({
          h: s,
          p: u[0]
        });
        if (!f[0]) return n(a);
        if (f.length > 1) {
          for (var x = !1, w = [], b = 0, _ = f.length; b < _; b++) p[b] = [];
          for (b = 0, _ = f.length; b < _; b++)
            for (var E = m[b], M = 0; M < E.length; M++) {
              for (var T = E[M], S = !0, A = 0; A < f.length; A++) i(T.p, f[A].p) && (b !== A && w.push({
                froms: b,
                tos: A,
                hole: M
              }), S ? (S = !1, p[A].push(T)) : x = !0);
              S && p[b].push(T)
            }
          w.length > 0 && (x || (m = p))
        }
        g = 0;
        for (var L = f.length; g < L; g++) {
          c = f[g].s, h.push(c);
          for (var R = 0, P = (d = m[g]).length; R < P; R++) c.holes.push(d[R].h)
        }
        return h
      }
    }), Object.assign(es.prototype, {
      isFont: !0,
      generateShapes: function (e, t) {
        void 0 === t && (t = 100);
        for (var n = [], i = function (e, t, n) {
            for (var i = Array.from ? Array.from(e) : String(e).split(""), r = t / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r, o = [], s = 0, c = 0, h = 0; h < i.length; h++) {
              var l = i[h];
              if ("\n" === l) s = 0, c -= a;
              else {
                var u = ts(l, r, s, c, n);
                s += u.offsetX, o.push(u.path)
              }
            }
            return o
          }(e, t, this.data), r = 0, a = i.length; r < a; r++) Array.prototype.push.apply(n, i[r].toShapes());
        return n
      }
    }), Object.assign(ns.prototype, {
      load: function (e, t, n, i) {
        var r = this,
          a = new za(this.manager);
        a.setPath(this.path), a.load(e, function (e) {
          var n;
          try {
            n = JSON.parse(e)
          } catch (t) {
            console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(e.substring(65, e.length - 2))
          }
          var i = r.parse(n);
          t && t(i)
        }, n, i)
      },
      parse: function (e) {
        return new es(e)
      },
      setPath: function (e) {
        return this.path = e, this
      }
    });
    var is = {
      getContext: function () {
        return void 0 === qo && (qo = new(window.AudioContext || window.webkitAudioContext)), qo
      },
      setContext: function (e) {
        qo = e
      }
    };

    function rs(e) {
      this.manager = void 0 !== e ? e : Fa
    }

    function as() {
      this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new ki, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new ki, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }

    function os(e, t, n) {
      Jt.call(this), this.type = "CubeCamera";
      var i = new ki(90, 1, e, t);
      i.up.set(0, -1, 0), i.lookAt(new St(1, 0, 0)), this.add(i);
      var r = new ki(90, 1, e, t);
      r.up.set(0, -1, 0), r.lookAt(new St(-1, 0, 0)), this.add(r);
      var a = new ki(90, 1, e, t);
      a.up.set(0, 0, 1), a.lookAt(new St(0, 1, 0)), this.add(a);
      var o = new ki(90, 1, e, t);
      o.up.set(0, 0, -1), o.lookAt(new St(0, -1, 0)), this.add(o);
      var s = new ki(90, 1, e, t);
      s.up.set(0, -1, 0), s.lookAt(new St(0, 0, 1)), this.add(s);
      var c = new ki(90, 1, e, t);
      c.up.set(0, -1, 0), c.lookAt(new St(0, 0, -1)), this.add(c);
      var h = {
        format: Pe,
        magFilter: fe,
        minFilter: fe
      };
      this.renderTarget = new It(n, n, h), this.renderTarget.texture.name = "CubeCamera", this.update = function (e, t) {
        null === this.parent && this.updateMatrixWorld();
        var n = this.renderTarget,
          h = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, n.activeCubeFace = 0, e.render(t, i, n), n.activeCubeFace = 1, e.render(t, r, n), n.activeCubeFace = 2, e.render(t, a, n), n.activeCubeFace = 3, e.render(t, o, n), n.activeCubeFace = 4, e.render(t, s, n), n.texture.generateMipmaps = h, n.activeCubeFace = 5, e.render(t, c, n), e.setRenderTarget(null)
      }, this.clear = function (e, t, n, i) {
        for (var r = this.renderTarget, a = 0; a < 6; a++) r.activeCubeFace = a, e.setRenderTarget(r), e.clear(t, n, i);
        e.setRenderTarget(null)
      }
    }

    function ss() {
      Jt.call(this), this.type = "AudioListener", this.context = is.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    }

    function cs(e) {
      Jt.call(this), this.type = "Audio", this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    function hs(e) {
      cs.call(this, e), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    function ls(e, t) {
      this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
    }

    function us(e, t, n) {
      this.binding = e, this.valueSize = n;
      var i, r = Float64Array;
      switch (t) {
        case "quaternion":
          i = this._slerp;
          break;
        case "string":
        case "bool":
          r = Array, i = this._select;
          break;
        default:
          i = this._lerp
      }
      this.buffer = new r(4 * n), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }
    Object.assign(rs.prototype, {
      load: function (e, t, n, i) {
        var r = new za(this.manager);
        r.setResponseType("arraybuffer"), r.load(e, function (e) {
          var n = e.slice(0);
          is.getContext().decodeAudioData(n, function (e) {
            t(e)
          })
        }, n, i)
      }
    }), Object.assign(as.prototype, {
      update: function () {
        var e, t, n, i, r, a, o, s, c = new Mt,
          h = new Mt;
        return function (l) {
          if (e !== this || t !== l.focus || n !== l.fov || i !== l.aspect * this.aspect || r !== l.near || a !== l.far || o !== l.zoom || s !== this.eyeSep) {
            e = this, t = l.focus, n = l.fov, i = l.aspect * this.aspect, r = l.near, a = l.far, o = l.zoom;
            var u, d, p = l.projectionMatrix.clone(),
              f = (s = this.eyeSep / 2) * r / t,
              m = r * Math.tan(_t.DEG2RAD * n * .5) / o;
            h.elements[12] = -s, c.elements[12] = s, u = -m * i + f, d = m * i + f, p.elements[0] = 2 * r / (d - u), p.elements[8] = (d + u) / (d - u), this.cameraL.projectionMatrix.copy(p), u = -m * i - f, d = m * i - f, p.elements[0] = 2 * r / (d - u), p.elements[8] = (d + u) / (d - u), this.cameraR.projectionMatrix.copy(p)
          }
          this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(h), this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(c)
        }
      }()
    }), os.prototype = Object.create(Jt.prototype), os.prototype.constructor = os, ss.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: ss,
      getInput: function () {
        return this.gain
      },
      removeFilter: function () {
        return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
      },
      getFilter: function () {
        return this.filter
      },
      setFilter: function (e) {
        return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
      },
      getMasterVolume: function () {
        return this.gain.gain.value
      },
      setMasterVolume: function (e) {
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
      },
      updateMatrixWorld: function () {
        var e = new St,
          t = new Tt,
          n = new St,
          i = new St;
        return function (r) {
          Jt.prototype.updateMatrixWorld.call(this, r);
          var a = this.context.listener,
            o = this.up;
          this.matrixWorld.decompose(e, t, n), i.set(0, 0, -1).applyQuaternion(t), a.positionX ? (a.positionX.setValueAtTime(e.x, this.context.currentTime), a.positionY.setValueAtTime(e.y, this.context.currentTime), a.positionZ.setValueAtTime(e.z, this.context.currentTime), a.forwardX.setValueAtTime(i.x, this.context.currentTime), a.forwardY.setValueAtTime(i.y, this.context.currentTime), a.forwardZ.setValueAtTime(i.z, this.context.currentTime), a.upX.setValueAtTime(o.x, this.context.currentTime), a.upY.setValueAtTime(o.y, this.context.currentTime), a.upZ.setValueAtTime(o.z, this.context.currentTime)) : (a.setPosition(e.x, e.y, e.z), a.setOrientation(i.x, i.y, i.z, o.x, o.y, o.z))
        }
      }()
    }), cs.prototype = Object.assign(Object.create(Jt.prototype), {
      constructor: cs,
      getOutput: function () {
        return this.gain
      },
      setNodeSource: function (e) {
        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
      },
      setMediaElementSource: function (e) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
      },
      setBuffer: function (e) {
        return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
      },
      play: function () {
        if (!0 !== this.isPlaying) {
          if (!1 !== this.hasPlaybackControl) {
            var e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.onended = this.onEnded.bind(this), e.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, e.start(this.startTime, this.offset), this.isPlaying = !0, this.source = e, this.connect()
          }
          console.warn("THREE.Audio: this Audio has no playback control.")
        } else console.warn("THREE.Audio: Audio is already playing.")
      },
      pause: function () {
        if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
        console.warn("THREE.Audio: this Audio has no playback control.")
      },
      stop: function () {
        if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
        console.warn("THREE.Audio: this Audio has no playback control.")
      },
      connect: function () {
        if (this.filters.length > 0) {
          this.source.connect(this.filters[0]);
          for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
          this.filters[this.filters.length - 1].connect(this.getOutput())
        } else this.source.connect(this.getOutput());
        return this
      },
      disconnect: function () {
        if (this.filters.length > 0) {
          this.source.disconnect(this.filters[0]);
          for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
          this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else this.source.disconnect(this.getOutput());
        return this
      },
      getFilters: function () {
        return this.filters
      },
      setFilters: function (e) {
        return e || (e = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
      },
      getFilter: function () {
        return this.getFilters()[0]
      },
      setFilter: function (e) {
        return this.setFilters(e ? [e] : [])
      },
      setPlaybackRate: function (e) {
        if (!1 !== this.hasPlaybackControl) return this.playbackRate = e, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this;
        console.warn("THREE.Audio: this Audio has no playback control.")
      },
      getPlaybackRate: function () {
        return this.playbackRate
      },
      onEnded: function () {
        this.isPlaying = !1
      },
      getLoop: function () {
        return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
      },
      setLoop: function (e) {
        if (!1 !== this.hasPlaybackControl) return this.loop = e, !0 === this.isPlaying && (this.source.loop = this.loop), this;
        console.warn("THREE.Audio: this Audio has no playback control.")
      },
      getVolume: function () {
        return this.gain.gain.value
      },
      setVolume: function (e) {
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
      }
    }), hs.prototype = Object.assign(Object.create(cs.prototype), {
      constructor: hs,
      getOutput: function () {
        return this.panner
      },
      getRefDistance: function () {
        return this.panner.refDistance
      },
      setRefDistance: function (e) {
        return this.panner.refDistance = e, this
      },
      getRolloffFactor: function () {
        return this.panner.rolloffFactor
      },
      setRolloffFactor: function (e) {
        return this.panner.rolloffFactor = e, this
      },
      getDistanceModel: function () {
        return this.panner.distanceModel
      },
      setDistanceModel: function (e) {
        return this.panner.distanceModel = e, this
      },
      getMaxDistance: function () {
        return this.panner.maxDistance
      },
      setMaxDistance: function (e) {
        return this.panner.maxDistance = e, this
      },
      setDirectionalCone: function (e, t, n) {
        return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this
      },
      updateMatrixWorld: function () {
        var e = new St,
          t = new Tt,
          n = new St,
          i = new St;
        return function (r) {
          Jt.prototype.updateMatrixWorld.call(this, r);
          var a = this.panner;
          this.matrixWorld.decompose(e, t, n), i.set(0, 0, 1).applyQuaternion(t), a.setPosition(e.x, e.y, e.z), a.setOrientation(i.x, i.y, i.z)
        }
      }()
    }), Object.assign(ls.prototype, {
      getFrequencyData: function () {
        return this.analyser.getByteFrequencyData(this.data), this.data
      },
      getAverageFrequency: function () {
        for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++) e += t[n];
        return e / t.length
      }
    }), Object.assign(us.prototype, {
      accumulate: function (e, t) {
        var n = this.buffer,
          i = this.valueSize,
          r = e * i + i,
          a = this.cumulativeWeight;
        if (0 === a) {
          for (var o = 0; o !== i; ++o) n[r + o] = n[o];
          a = t
        } else {
          var s = t / (a += t);
          this._mixBufferRegion(n, r, 0, s, i)
        }
        this.cumulativeWeight = a
      },
      apply: function (e) {
        var t = this.valueSize,
          n = this.buffer,
          i = e * t + t,
          r = this.cumulativeWeight,
          a = this.binding;
        if (this.cumulativeWeight = 0, r < 1) {
          var o = 3 * t;
          this._mixBufferRegion(n, i, o, 1 - r, t)
        }
        for (var s = t, c = t + t; s !== c; ++s)
          if (n[s] !== n[s + t]) {
            a.setValue(n, i);
            break
          }
      },
      saveOriginalState: function () {
        var e = this.binding,
          t = this.buffer,
          n = this.valueSize,
          i = 3 * n;
        e.getValue(t, i);
        for (var r = n, a = i; r !== a; ++r) t[r] = t[i + r % n];
        this.cumulativeWeight = 0
      },
      restoreOriginalState: function () {
        var e = 3 * this.valueSize;
        this.binding.setValue(this.buffer, e)
      },
      _select: function (e, t, n, i, r) {
        if (i >= .5)
          for (var a = 0; a !== r; ++a) e[t + a] = e[n + a]
      },
      _slerp: function (e, t, n, i) {
        Tt.slerpFlat(e, t, e, t, e, n, i)
      },
      _lerp: function (e, t, n, i, r) {
        for (var a = 1 - i, o = 0; o !== r; ++o) {
          var s = t + o;
          e[s] = e[s] * a + e[n + o] * i
        }
      }
    });
    var ds, ps;

    function fs(e, t, n) {
      var i = n || ms.parseTrackName(t);
      this._targetGroup = e, this._bindings = e.subscribe_(t, i)
    }

    function ms(e, t, n) {
      this.path = t, this.parsedPath = n || ms.parseTrackName(t), this.node = ms.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
    }

    function vs() {
      this.uuid = _t.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
      var e = {};
      this._indicesByUUID = e;
      for (var t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t;
      this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
      var i = this;
      this.stats = {
        objects: {
          get total() {
            return i._objects.length
          },
          get inUse() {
            return this.total - i.nCachedObjects_
          }
        },
        get bindingsPerObject() {
          return i._bindings.length
        }
      }
    }

    function gs(e, t, n) {
      this._mixer = e, this._clip = t, this._localRoot = n || null;
      for (var i = t.tracks, r = i.length, a = new Array(r), o = {
          endingStart: st,
          endingEnd: st
        }, s = 0; s !== r; ++s) {
        var c = i[s].createInterpolant(null);
        a[s] = c, c.settings = o
      }
      this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ot, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    function ys(e) {
      this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    function xs(e) {
      "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e
    }

    function ws() {
      vn.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function bs(e, t, n) {
      Zi.call(this, e, t), this.meshPerAttribute = n || 1
    }

    function _s(e, t, n) {
      nn.call(this, e, t), this.meshPerAttribute = n || 1
    }

    function Es(e, t, n, i) {
      this.ray = new Tn(e, t), this.near = n || 0, this.far = i || 1 / 0, this.params = {
        Mesh: {},
        Line: {},
        LOD: {},
        Points: {
          threshold: 1
        },
        Sprite: {}
      }, Object.defineProperties(this.params, {
        PointCloud: {
          get: function () {
            return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
          }
        }
      })
    }

    function Ms(e, t) {
      return e.distance - t.distance
    }

    function Ts(e, t, n, i) {
      if (!1 !== e.visible && (e.raycast(t, n), !0 === i))
        for (var r = e.children, a = 0, o = r.length; a < o; a++) Ts(r[a], t, n, !0)
    }

    function Ss(e) {
      this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }

    function As(e, t, n) {
      return this.radius = void 0 !== e ? e : 1, this.phi = void 0 !== t ? t : 0, this.theta = void 0 !== n ? n : 0, this
    }

    function Ls(e, t, n) {
      return this.radius = void 0 !== e ? e : 1, this.theta = void 0 !== t ? t : 0, this.y = void 0 !== n ? n : 0, this
    }

    function Rs(e, t) {
      this.min = void 0 !== e ? e : new Et(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new Et(-1 / 0, -1 / 0)
    }

    function Ps(e, t) {
      this.start = void 0 !== e ? e : new St, this.end = void 0 !== t ? t : new St
    }

    function Cs(e) {
      Jt.call(this), this.material = e, this.render = function () {}
    }

    function Os(e, t, n, i) {
      this.object = e, this.size = void 0 !== t ? t : 1;
      var r = void 0 !== n ? n : 16711680,
        a = void 0 !== i ? i : 1,
        o = 0,
        s = this.object.geometry;
      s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
      var c = new vn,
        h = new un(2 * o * 3, 3);
      c.addAttribute("position", h), ar.call(this, c, new ir({
        color: r,
        linewidth: a
      })), this.matrixAutoUpdate = !1, this.update()
    }

    function Is(e, t) {
      Jt.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
      for (var n = new vn, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
        var o = r / 32 * Math.PI * 2,
          s = a / 32 * Math.PI * 2;
        i.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
      }
      n.addAttribute("position", new un(i, 3));
      var c = new ir({
        fog: !1
      });
      this.cone = new ar(n, c), this.add(this.cone), this.update()
    }

    function Ds(e) {
      for (var t = function e(t) {
          var n = [];
          t && t.isBone && n.push(t);
          for (var i = 0; i < t.children.length; i++) n.push.apply(n, e(t.children[i]));
          return n
        }(e), n = new vn, i = [], r = [], a = new kt(0, 0, 1), o = new kt(0, 1, 0), s = 0; s < t.length; s++) {
        var c = t[s];
        c.parent && c.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
      }
      n.addAttribute("position", new un(i, 3)), n.addAttribute("color", new un(r, 3));
      var h = new ir({
        vertexColors: v,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
      });
      ar.call(this, n, h), this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
    }

    function Ns(e, t, n) {
      this.light = e, this.light.updateMatrixWorld(), this.color = n;
      var i = new la(t, 4, 2),
        r = new En({
          wireframe: !0,
          fog: !1
        });
      An.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function Us(e, t) {
      Jt.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
      var n = new ir({
          fog: !1
        }),
        i = new vn;
      i.addAttribute("position", new nn(new Float32Array(15), 3)), this.line = new rr(i, n), this.add(this.line), this.update()
    }

    function Bs(e, t, n) {
      Jt.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
      var i = new br(t);
      i.rotateY(.5 * Math.PI), this.material = new En({
        wireframe: !0,
        fog: !1
      }), void 0 === this.color && (this.material.vertexColors = v);
      var r = i.getAttribute("position"),
        a = new Float32Array(3 * r.count);
      i.addAttribute("color", new nn(a, 3)), this.add(new An(i, this.material)), this.update()
    }

    function Fs(e, t, n, i) {
      e = e || 10, t = t || 10, n = new kt(void 0 !== n ? n : 4473924), i = new kt(void 0 !== i ? i : 8947848);
      for (var r = t / 2, a = e / t, o = e / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= t; h++, u += a) {
        s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
        var d = h === r ? n : i;
        d.toArray(c, l), l += 3, d.toArray(c, l), l += 3, d.toArray(c, l), l += 3, d.toArray(c, l), l += 3
      }
      var p = new vn;
      p.addAttribute("position", new un(s, 3)), p.addAttribute("color", new un(c, 3));
      var f = new ir({
        vertexColors: v
      });
      ar.call(this, p, f)
    }

    function Hs(e, t, n, i, r, a) {
      e = e || 10, t = t || 16, n = n || 8, i = i || 64, r = new kt(void 0 !== r ? r : 4473924), a = new kt(void 0 !== a ? a : 8947848);
      var o, s, c, h, l, u, d, p = [],
        f = [];
      for (h = 0; h <= t; h++) c = h / t * (2 * Math.PI), o = Math.sin(c) * e, s = Math.cos(c) * e, p.push(0, 0, 0), p.push(o, 0, s), d = 1 & h ? r : a, f.push(d.r, d.g, d.b), f.push(d.r, d.g, d.b);
      for (h = 0; h <= n; h++)
        for (d = 1 & h ? r : a, u = e - e / n * h, l = 0; l < i; l++) c = l / i * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, p.push(o, 0, s), f.push(d.r, d.g, d.b), c = (l + 1) / i * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, p.push(o, 0, s), f.push(d.r, d.g, d.b);
      var m = new vn;
      m.addAttribute("position", new un(p, 3)), m.addAttribute("color", new un(f, 3));
      var g = new ir({
        vertexColors: v
      });
      ar.call(this, m, g)
    }

    function zs(e, t, n, i) {
      this.object = e, this.size = void 0 !== t ? t : 1;
      var r = void 0 !== n ? n : 16776960,
        a = void 0 !== i ? i : 1,
        o = 0,
        s = this.object.geometry;
      s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
      var c = new vn,
        h = new un(2 * o * 3, 3);
      c.addAttribute("position", h), ar.call(this, c, new ir({
        color: r,
        linewidth: a
      })), this.matrixAutoUpdate = !1, this.update()
    }

    function Gs(e, t, n) {
      Jt.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === t && (t = 1);
      var i = new vn;
      i.addAttribute("position", new un([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
      var r = new ir({
        fog: !1
      });
      this.lightPlane = new rr(i, r), this.add(this.lightPlane), (i = new vn).addAttribute("position", new un([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new rr(i, r), this.add(this.targetLine), this.update()
    }

    function ks(e) {
      var t = new vn,
        n = new ir({
          color: 16777215,
          vertexColors: m
        }),
        i = [],
        r = [],
        a = {},
        o = new kt(16755200),
        s = new kt(16711680),
        c = new kt(43775),
        h = new kt(16777215),
        l = new kt(3355443);

      function u(e, t, n) {
        d(e, n), d(t, n)
      }

      function d(e, t) {
        i.push(0, 0, 0), r.push(t.r, t.g, t.b), void 0 === a[e] && (a[e] = []), a[e].push(i.length / 3 - 1)
      }
      u("n1", "n2", o), u("n2", "n4", o), u("n4", "n3", o), u("n3", "n1", o), u("f1", "f2", o), u("f2", "f4", o), u("f4", "f3", o), u("f3", "f1", o), u("n1", "f1", o), u("n2", "f2", o), u("n3", "f3", o), u("n4", "f4", o), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", h), u("p", "c", l), u("cn1", "cn2", l), u("cn3", "cn4", l), u("cf1", "cf2", l), u("cf3", "cf4", l), t.addAttribute("position", new un(i, 3)), t.addAttribute("color", new un(r, 3)), ar.call(this, t, n), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
    }

    function js(e, t) {
      this.object = e, void 0 === t && (t = 16776960);
      var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
        i = new Float32Array(24),
        r = new vn;
      r.setIndex(new nn(n, 1)), r.addAttribute("position", new nn(i, 3)), ar.call(this, r, new ir({
        color: t
      })), this.matrixAutoUpdate = !1, this.update()
    }

    function Vs(e, t) {
      this.type = "Box3Helper", this.box = e;
      var n = void 0 !== t ? t : 16776960,
        i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
        r = new vn;
      r.setIndex(new nn(i, 1)), r.addAttribute("position", new un([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), ar.call(this, r, new ir({
        color: n
      })), this.geometry.computeBoundingSphere()
    }

    function Ws(e, t, n) {
      this.type = "PlaneHelper", this.plane = e, this.size = void 0 === t ? 1 : t;
      var i = void 0 !== n ? n : 16776960,
        r = new vn;
      r.addAttribute("position", new un([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), rr.call(this, r, new ir({
        color: i
      }));
      var a = new vn;
      a.addAttribute("position", new un([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new An(a, new En({
        color: i,
        opacity: .2,
        transparent: !0,
        depthWrite: !1
      })))
    }

    function Xs(e, t, n, i, r, a) {
      Jt.call(this), void 0 === i && (i = 16776960), void 0 === n && (n = 1), void 0 === r && (r = .2 * n), void 0 === a && (a = .2 * r), void 0 === ds && ((ds = new vn).addAttribute("position", new un([0, 0, 0, 0, 1, 0], 3)), (ps = new wa(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(t), this.line = new rr(ds, new ir({
        color: i
      })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new An(ps, new En({
        color: i
      })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, r, a)
    }

    function Ys(e) {
      var t = [0, 0, 0, e = e || 1, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
        n = new vn;
      n.addAttribute("position", new un(t, 3)), n.addAttribute("color", new un([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
      var i = new ir({
        vertexColors: v
      });
      ar.call(this, n, i)
    }
    Object.assign(fs.prototype, {
        getValue: function (e, t) {
          this.bind();
          var n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
          void 0 !== i && i.getValue(e, t)
        },
        setValue: function (e, t) {
          for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t)
        },
        bind: function () {
          for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
        },
        unbind: function () {
          for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
        }
      }), Object.assign(ms, {
        Composite: fs,
        create: function (e, t, n) {
          return e && e.isAnimationObjectGroup ? new ms.Composite(e, t, n) : new ms(e, t, n)
        },
        sanitizeNodeName: function () {
          var e = new RegExp("[\\[\\]\\.:\\/]", "g");
          return function (t) {
            return t.replace(/\s/g, "_").replace(e, "")
          }
        }(),
        parseTrackName: function () {
          var e = "[^\\[\\]\\.:\\/]",
            t = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
            n = /((?:WC+[\/:])*)/.source.replace("WC", e),
            i = /(WCOD+)?/.source.replace("WCOD", t),
            r = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", e),
            a = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", e),
            o = new RegExp("^" + n + i + r + a + "$"),
            s = ["material", "materials", "bones"];
          return function (e) {
            var t = o.exec(e);
            if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
            var n = {
                nodeName: t[2],
                objectName: t[3],
                objectIndex: t[4],
                propertyName: t[5],
                propertyIndex: t[6]
              },
              i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
              var r = n.nodeName.substring(i + 1); - 1 !== s.indexOf(r) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r)
            }
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
            return n
          }
        }(),
        findNode: function (e, t) {
          if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
          if (e.skeleton) {
            var n = e.skeleton.getBoneByName(t);
            if (void 0 !== n) return n
          }
          if (e.children) {
            var i = function e(n) {
              for (var i = 0; i < n.length; i++) {
                var r = n[i];
                if (r.name === t || r.uuid === t) return r;
                var a = e(r.children);
                if (a) return a
              }
              return null
            }(e.children);
            if (i) return i
          }
          return null
        }
      }), Object.assign(ms.prototype, {
        _getValue_unavailable: function () {},
        _setValue_unavailable: function () {},
        BindingType: {
          Direct: 0,
          EntireArray: 1,
          ArrayElement: 2,
          HasFromToArray: 3
        },
        Versioning: {
          None: 0,
          NeedsUpdate: 1,
          MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function (e, t) {
          e[t] = this.node[this.propertyName]
        }, function (e, t) {
          for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) e[t++] = n[i]
        }, function (e, t) {
          e[t] = this.resolvedProperty[this.propertyIndex]
        }, function (e, t) {
          this.resolvedProperty.toArray(e, t)
        }],
        SetterByBindingTypeAndVersioning: [
          [function (e, t) {
            this.targetObject[this.propertyName] = e[t]
          }, function (e, t) {
            this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
          }, function (e, t) {
            this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
          }],
          [function (e, t) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++]
          }, function (e, t) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
            this.targetObject.needsUpdate = !0
          }, function (e, t) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
            this.targetObject.matrixWorldNeedsUpdate = !0
          }],
          [function (e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t]
          }, function (e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
          }, function (e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
          }],
          [function (e, t) {
            this.resolvedProperty.fromArray(e, t)
          }, function (e, t) {
            this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
          }, function (e, t) {
            this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
          }]
        ],
        getValue: function (e, t) {
          this.bind(), this.getValue(e, t)
        },
        setValue: function (e, t) {
          this.bind(), this.setValue(e, t)
        },
        bind: function () {
          var e = this.node,
            t = this.parsedPath,
            n = t.objectName,
            i = t.propertyName,
            r = t.propertyIndex;
          if (e || (e = ms.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, e) {
            if (n) {
              var a = t.objectIndex;
              switch (n) {
                case "materials":
                  if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                  if (!e.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                  e = e.material.materials;
                  break;
                case "bones":
                  if (!e.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                  e = e.skeleton.bones;
                  for (var o = 0; o < e.length; o++)
                    if (e[o].name === a) {
                      a = o;
                      break
                    } break;
                default:
                  if (void 0 === e[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                  e = e[n]
              }
              if (void 0 !== a) {
                if (void 0 === e[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                e = e[a]
              }
            }
            var s = e[i];
            if (void 0 !== s) {
              var c = this.Versioning.None;
              void 0 !== e.needsUpdate ? (c = this.Versioning.NeedsUpdate, this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = e);
              var h = this.BindingType.Direct;
              if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                  if (!e.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                  if (e.geometry.isBufferGeometry) {
                    if (!e.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                      if (e.geometry.morphAttributes.position[o].name === r) {
                        r = o;
                        break
                      }
                  } else {
                    if (!e.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                    for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                      if (e.geometry.morphTargets[o].name === r) {
                        r = o;
                        break
                      }
                  }
                }
                h = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
              } else void 0 !== s.fromArray && void 0 !== s.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (h = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
              this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
            } else {
              var l = t.nodeName;
              console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e)
            }
          } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function () {
          this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
      }), //!\ DECLARE ALIAS AFTER assign prototype !
      Object.assign(ms.prototype, {
        _getValue_unbound: ms.prototype.getValue,
        _setValue_unbound: ms.prototype.setValue
      }), Object.assign(vs.prototype, {
        isAnimationObjectGroup: !0,
        add: function () {
          for (var e = this._objects, t = e.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, h = 0, l = arguments.length; h !== l; ++h) {
            var u = arguments[h],
              d = u.uuid,
              p = i[d];
            if (void 0 === p) {
              p = t++, i[d] = p, e.push(u);
              for (var f = 0, m = s; f !== m; ++f) o[f].push(new ms(u, r[f], a[f]))
            } else if (p < n) {
              c = e[p];
              var v = --n,
                g = e[v];
              i[g.uuid] = p, e[p] = g, i[d] = v, e[v] = u;
              for (f = 0, m = s; f !== m; ++f) {
                var y = o[f],
                  x = y[v],
                  w = y[p];
                y[p] = x, void 0 === w && (w = new ms(u, r[f], a[f])), y[v] = w
              }
            } else e[p] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
          }
          this.nCachedObjects_ = n
        },
        remove: function () {
          for (var e = this._objects, t = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, r = i.length, a = 0, o = arguments.length; a !== o; ++a) {
            var s = arguments[a],
              c = s.uuid,
              h = n[c];
            if (void 0 !== h && h >= t) {
              var l = t++,
                u = e[l];
              n[u.uuid] = h, e[h] = u, n[c] = l, e[l] = s;
              for (var d = 0, p = r; d !== p; ++d) {
                var f = i[d],
                  m = f[l],
                  v = f[h];
                f[h] = m, f[l] = v
              }
            }
          }
          this.nCachedObjects_ = t
        },
        uncache: function () {
          for (var e = this._objects, t = e.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
            var c = arguments[o].uuid,
              h = i[c];
            if (void 0 !== h)
              if (delete i[c], h < n) {
                var l = --n,
                  u = e[l],
                  d = e[g = --t];
                i[u.uuid] = h, e[h] = u, i[d.uuid] = l, e[l] = d, e.pop();
                for (var p = 0, f = a; p !== f; ++p) {
                  var m = (y = r[p])[l],
                    v = y[g];
                  y[h] = m, y[l] = v, y.pop()
                }
              } else {
                var g;
                i[(d = e[g = --t]).uuid] = h, e[h] = d, e.pop();
                for (p = 0, f = a; p !== f; ++p) {
                  var y;
                  (y = r[p])[h] = y[g], y.pop()
                }
              }
          }
          this.nCachedObjects_ = n
        },
        subscribe_: function (e, t) {
          var n = this._bindingsIndicesByPath,
            i = n[e],
            r = this._bindings;
          if (void 0 !== i) return r[i];
          var a = this._paths,
            o = this._parsedPaths,
            s = this._objects,
            c = s.length,
            h = this.nCachedObjects_,
            l = new Array(c);
          i = r.length, n[e] = i, a.push(e), o.push(t), r.push(l);
          for (var u = h, d = s.length; u !== d; ++u) {
            var p = s[u];
            l[u] = new ms(p, e, t)
          }
          return l
        },
        unsubscribe_: function (e) {
          var t = this._bindingsIndicesByPath,
            n = t[e];
          if (void 0 !== n) {
            var i = this._paths,
              r = this._parsedPaths,
              a = this._bindings,
              o = a.length - 1,
              s = a[o];
            t[e[o]] = n, a[n] = s, a.pop(), r[n] = r[o], r.pop(), i[n] = i[o], i.pop()
          }
        }
      }), Object.assign(gs.prototype, {
        play: function () {
          return this._mixer._activateAction(this), this
        },
        stop: function () {
          return this._mixer._deactivateAction(this), this.reset()
        },
        reset: function () {
          return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        },
        isRunning: function () {
          return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function () {
          return this._mixer._isActiveAction(this)
        },
        startAt: function (e) {
          return this._startTime = e, this
        },
        setLoop: function (e, t) {
          return this.loop = e, this.repetitions = t, this
        },
        setEffectiveWeight: function (e) {
          return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
        },
        getEffectiveWeight: function () {
          return this._effectiveWeight
        },
        fadeIn: function (e) {
          return this._scheduleFading(e, 0, 1)
        },
        fadeOut: function (e) {
          return this._scheduleFading(e, 1, 0)
        },
        crossFadeFrom: function (e, t, n) {
          if (e.fadeOut(t), this.fadeIn(t), n) {
            var i = this._clip.duration,
              r = e._clip.duration,
              a = r / i,
              o = i / r;
            e.warp(1, a, t), this.warp(o, 1, t)
          }
          return this
        },
        crossFadeTo: function (e, t, n) {
          return e.crossFadeFrom(this, t, n)
        },
        stopFading: function () {
          var e = this._weightInterpolant;
          return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        },
        setEffectiveTimeScale: function (e) {
          return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
        },
        getEffectiveTimeScale: function () {
          return this._effectiveTimeScale
        },
        setDuration: function (e) {
          return this.timeScale = this._clip.duration / e, this.stopWarping()
        },
        syncWith: function (e) {
          return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
        },
        halt: function (e) {
          return this.warp(this._effectiveTimeScale, 0, e)
        },
        warp: function (e, t, n) {
          var i = this._mixer,
            r = i.time,
            a = this._timeScaleInterpolant,
            o = this.timeScale;
          null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
          var s = a.parameterPositions,
            c = a.sampleValues;
          return s[0] = r, s[1] = r + n, c[0] = e / o, c[1] = t / o, this
        },
        stopWarping: function () {
          var e = this._timeScaleInterpolant;
          return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        },
        getMixer: function () {
          return this._mixer
        },
        getClip: function () {
          return this._clip
        },
        getRoot: function () {
          return this._localRoot || this._mixer._root
        },
        _update: function (e, t, n, i) {
          if (this.enabled) {
            var r = this._startTime;
            if (null !== r) {
              var a = (e - r) * n;
              if (a < 0 || 0 === n) return;
              this._startTime = null, t = n * a
            }
            t *= this._updateTimeScale(e);
            var o = this._updateTime(t),
              s = this._updateWeight(e);
            if (s > 0)
              for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l) c[l].evaluate(o), h[l].accumulate(i, s)
          } else this._updateWeight(e)
        },
        _updateWeight: function (e) {
          var t = 0;
          if (this.enabled) {
            t = this.weight;
            var n = this._weightInterpolant;
            if (null !== n) {
              var i = n.evaluate(e)[0];
              t *= i, e > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
            }
          }
          return this._effectiveWeight = t, t
        },
        _updateTimeScale: function (e) {
          var t = 0;
          if (!this.paused) {
            t = this.timeScale;
            var n = this._timeScaleInterpolant;
            if (null !== n) t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
          }
          return this._effectiveTimeScale = t, t
        },
        _updateTime: function (e) {
          var t = this.time + e,
            n = this._clip.duration,
            i = this.loop,
            r = this._loopCount,
            a = 2202 === i;
          if (0 === e) return -1 === r ? t : a && 1 == (1 & r) ? n - t : t;
          if (2200 === i) {
            -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            e: {
              if (t >= n) t = n;
              else {
                if (!(t < 0)) break e;
                t = 0
              }
              this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: e < 0 ? -1 : 1
              })
            }
          } else {
            if (-1 === r && (e >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), t >= n || t < 0) {
              var o = Math.floor(t / n);
              t -= n * o, r += Math.abs(o);
              var s = this.repetitions - r;
              if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? n : 0, this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: e > 0 ? 1 : -1
              });
              else {
                if (1 === s) {
                  var c = e < 0;
                  this._setEndings(c, !c, a)
                } else this._setEndings(!1, !1, a);
                this._loopCount = r, this._mixer.dispatchEvent({
                  type: "loop",
                  action: this,
                  loopDelta: o
                })
              }
            }
            if (a && 1 == (1 & r)) return this.time = t, n - t
          }
          return this.time = t, t
        },
        _setEndings: function (e, t, n) {
          var i = this._interpolantSettings;
          n ? (i.endingStart = 2401, i.endingEnd = 2401) : (i.endingStart = e ? this.zeroSlopeAtStart ? 2401 : st : 2402, i.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : st : 2402)
        },
        _scheduleFading: function (e, t, n) {
          var i = this._mixer,
            r = i.time,
            a = this._weightInterpolant;
          null === a && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
          var o = a.parameterPositions,
            s = a.sampleValues;
          return o[0] = r, s[0] = t, o[1] = r + e, s[1] = n, this
        }
      }), ys.prototype = Object.assign(Object.create(r.prototype), {
        constructor: ys,
        _bindAction: function (e, t) {
          var n = e._localRoot || this._root,
            i = e._clip.tracks,
            r = i.length,
            a = e._propertyBindings,
            o = e._interpolants,
            s = n.uuid,
            c = this._bindingsByRootAndName,
            h = c[s];
          void 0 === h && (h = {}, c[s] = h);
          for (var l = 0; l !== r; ++l) {
            var u = i[l],
              d = u.name,
              p = h[d];
            if (void 0 !== p) a[l] = p;
            else {
              if (void 0 !== (p = a[l])) {
                null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, s, d));
                continue
              }
              var f = t && t._propertyBindings[l].binding.parsedPath;
              ++(p = new us(ms.create(n, d, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(p, s, d), a[l] = p
            }
            o[l].resultBuffer = p.buffer
          }
        },
        _activateAction: function (e) {
          if (!this._isActiveAction(e)) {
            if (null === e._cacheIndex) {
              var t = (e._localRoot || this._root).uuid,
                n = e._clip.uuid,
                i = this._actionsByClip[n];
              this._bindAction(e, i && i.knownActions[0]), this._addInactiveAction(e, n, t)
            }
            for (var r = e._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
              var s = r[a];
              0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
            }
            this._lendAction(e)
          }
        },
        _deactivateAction: function (e) {
          if (this._isActiveAction(e)) {
            for (var t = e._propertyBindings, n = 0, i = t.length; n !== i; ++n) {
              var r = t[n];
              0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
            }
            this._takeBackAction(e)
          }
        },
        _initMemoryManager: function () {
          this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
          var e = this;
          this.stats = {
            actions: {
              get total() {
                return e._actions.length
              },
              get inUse() {
                return e._nActiveActions
              }
            },
            bindings: {
              get total() {
                return e._bindings.length
              },
              get inUse() {
                return e._nActiveBindings
              }
            },
            controlInterpolants: {
              get total() {
                return e._controlInterpolants.length
              },
              get inUse() {
                return e._nActiveControlInterpolants
              }
            }
          }
        },
        _isActiveAction: function (e) {
          var t = e._cacheIndex;
          return null !== t && t < this._nActiveActions
        },
        _addInactiveAction: function (e, t, n) {
          var i = this._actions,
            r = this._actionsByClip,
            a = r[t];
          if (void 0 === a) a = {
            knownActions: [e],
            actionByRoot: {}
          }, e._byClipCacheIndex = 0, r[t] = a;
          else {
            var o = a.knownActions;
            e._byClipCacheIndex = o.length, o.push(e)
          }
          e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e
        },
        _removeInactiveAction: function (e) {
          var t = this._actions,
            n = t[t.length - 1],
            i = e._cacheIndex;
          n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
          var r = e._clip.uuid,
            a = this._actionsByClip,
            o = a[r],
            s = o.knownActions,
            c = s[s.length - 1],
            h = e._byClipCacheIndex;
          c._byClipCacheIndex = h, s[h] = c, s.pop(), e._byClipCacheIndex = null, delete o.actionByRoot[(e._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(e)
        },
        _removeInactiveBindingsForAction: function (e) {
          for (var t = e._propertyBindings, n = 0, i = t.length; n !== i; ++n) {
            var r = t[n];
            0 == --r.referenceCount && this._removeInactiveBinding(r)
          }
        },
        _lendAction: function (e) {
          var t = this._actions,
            n = e._cacheIndex,
            i = this._nActiveActions++,
            r = t[i];
          e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
        },
        _takeBackAction: function (e) {
          var t = this._actions,
            n = e._cacheIndex,
            i = --this._nActiveActions,
            r = t[i];
          e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
        },
        _addInactiveBinding: function (e, t, n) {
          var i = this._bindingsByRootAndName,
            r = i[t],
            a = this._bindings;
          void 0 === r && (r = {}, i[t] = r), r[n] = e, e._cacheIndex = a.length, a.push(e)
        },
        _removeInactiveBinding: function (e) {
          var t = this._bindings,
            n = e.binding,
            i = n.rootNode.uuid,
            r = n.path,
            a = this._bindingsByRootAndName,
            o = a[i],
            s = t[t.length - 1],
            c = e._cacheIndex;
          s._cacheIndex = c, t[c] = s, t.pop(), delete o[r];
          e: {
            for (var h in o) break e;delete a[i]
          }
        },
        _lendBinding: function (e) {
          var t = this._bindings,
            n = e._cacheIndex,
            i = this._nActiveBindings++,
            r = t[i];
          e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
        },
        _takeBackBinding: function (e) {
          var t = this._bindings,
            n = e._cacheIndex,
            i = --this._nActiveBindings,
            r = t[i];
          e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
        },
        _lendControlInterpolant: function () {
          var e = this._controlInterpolants,
            t = this._nActiveControlInterpolants++,
            n = e[t];
          return void 0 === n && ((n = new Ro(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = t, e[t] = n), n
        },
        _takeBackControlInterpolant: function (e) {
          var t = this._controlInterpolants,
            n = e.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            r = t[i];
          e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function (e, t) {
          var n = t || this._root,
            i = n.uuid,
            r = "string" == typeof e ? Ho.findByName(n, e) : e,
            a = null !== r ? r.uuid : e,
            o = this._actionsByClip[a],
            s = null;
          if (void 0 !== o) {
            var c = o.actionByRoot[i];
            if (void 0 !== c) return c;
            s = o.knownActions[0], null === r && (r = s._clip)
          }
          if (null === r) return null;
          var h = new gs(this, r, t);
          return this._bindAction(h, s), this._addInactiveAction(h, a, i), h
        },
        existingAction: function (e, t) {
          var n = t || this._root,
            i = n.uuid,
            r = "string" == typeof e ? Ho.findByName(n, e) : e,
            a = r ? r.uuid : e,
            o = this._actionsByClip[a];
          return void 0 !== o && o.actionByRoot[i] || null
        },
        stopAllAction: function () {
          var e = this._actions,
            t = this._nActiveActions,
            n = this._bindings,
            i = this._nActiveBindings;
          this._nActiveActions = 0, this._nActiveBindings = 0;
          for (var r = 0; r !== t; ++r) e[r].reset();
          for (r = 0; r !== i; ++r) n[r].useCount = 0;
          return this
        },
        update: function (e) {
          e *= this.timeScale;
          for (var t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
            t[o]._update(i, e, r, a)
          }
          var s = this._bindings,
            c = this._nActiveBindings;
          for (o = 0; o !== c; ++o) s[o].apply(a);
          return this
        },
        getRoot: function () {
          return this._root
        },
        uncacheClip: function (e) {
          var t = this._actions,
            n = e.uuid,
            i = this._actionsByClip,
            r = i[n];
          if (void 0 !== r) {
            for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
              var c = a[o];
              this._deactivateAction(c);
              var h = c._cacheIndex,
                l = t[t.length - 1];
              c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, t[h] = l, t.pop(), this._removeInactiveBindingsForAction(c)
            }
            delete i[n]
          }
        },
        uncacheRoot: function (e) {
          var t = e.uuid,
            n = this._actionsByClip;
          for (var i in n) {
            var r = n[i].actionByRoot[t];
            void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
          }
          var a = this._bindingsByRootAndName[t];
          if (void 0 !== a)
            for (var o in a) {
              var s = a[o];
              s.restoreOriginalState(), this._removeInactiveBinding(s)
            }
        },
        uncacheAction: function (e, t) {
          var n = this.existingAction(e, t);
          null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
        }
      }), xs.prototype.clone = function () {
        return new xs(void 0 === this.value.clone ? this.value : this.value.clone())
      }, ws.prototype = Object.assign(Object.create(vn.prototype), {
        constructor: ws,
        isInstancedBufferGeometry: !0,
        copy: function (e) {
          return vn.prototype.copy.call(this, e), this.maxInstancedCount = e.maxInstancedCount, this
        },
        clone: function () {
          return (new this.constructor).copy(this)
        }
      }), bs.prototype = Object.assign(Object.create(Zi.prototype), {
        constructor: bs,
        isInstancedInterleavedBuffer: !0,
        copy: function (e) {
          return Zi.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        }
      }), _s.prototype = Object.assign(Object.create(nn.prototype), {
        constructor: _s,
        isInstancedBufferAttribute: !0,
        copy: function (e) {
          return nn.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        }
      }), Object.assign(Es.prototype, {
        linePrecision: 1,
        set: function (e, t) {
          this.ray.set(e, t)
        },
        setFromCamera: function (e, t) {
          t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize()) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function (e, t, n) {
          var i = n || [];
          return Ts(e, this, i, t), i.sort(Ms), i
        },
        intersectObjects: function (e, t, n) {
          var i = n || [];
          if (!1 === Array.isArray(e)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
          for (var r = 0, a = e.length; r < a; r++) Ts(e[r], this, i, t);
          return i.sort(Ms), i
        }
      }), Object.assign(Ss.prototype, {
        start: function () {
          this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        },
        stop: function () {
          this.getElapsedTime(), this.running = !1, this.autoStart = !1
        },
        getElapsedTime: function () {
          return this.getDelta(), this.elapsedTime
        },
        getDelta: function () {
          var e = 0;
          if (this.autoStart && !this.running) return this.start(), 0;
          if (this.running) {
            var t = ("undefined" == typeof performance ? Date : performance).now();
            e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
          }
          return e
        }
      }), Object.assign(As.prototype, {
        set: function (e, t, n) {
          return this.radius = e, this.phi = t, this.theta = n, this
        },
        clone: function () {
          return (new this.constructor).copy(this)
        },
        copy: function (e) {
          return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
        },
        makeSafe: function () {
          return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        },
        setFromVector3: function (e) {
          return this.radius = e.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e.x, e.z), this.phi = Math.acos(_t.clamp(e.y / this.radius, -1, 1))), this
        }
      }), Object.assign(Ls.prototype, {
        set: function (e, t, n) {
          return this.radius = e, this.theta = t, this.y = n, this
        },
        clone: function () {
          return (new this.constructor).copy(this)
        },
        copy: function (e) {
          return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this
        },
        setFromVector3: function (e) {
          return this.radius = Math.sqrt(e.x * e.x + e.z * e.z), this.theta = Math.atan2(e.x, e.z), this.y = e.y, this
        }
      }), Object.assign(Rs.prototype, {
        set: function (e, t) {
          return this.min.copy(e), this.max.copy(t), this
        },
        setFromPoints: function (e) {
          this.makeEmpty();
          for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
          return this
        },
        setFromCenterAndSize: function () {
          var e = new Et;
          return function (t, n) {
            var i = e.copy(n).multiplyScalar(.5);
            return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
          }
        }(),
        clone: function () {
          return (new this.constructor).copy(this)
        },
        copy: function (e) {
          return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function () {
          return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        },
        isEmpty: function () {
          return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function (e) {
          return void 0 === e && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new Et), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function (e) {
          return void 0 === e && (console.warn("THREE.Box2: .getSize() target is now required"), e = new Et), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function (e) {
          return this.min.min(e), this.max.max(e), this
        },
        expandByVector: function (e) {
          return this.min.sub(e), this.max.add(e), this
        },
        expandByScalar: function (e) {
          return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        containsPoint: function (e) {
          return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
        },
        containsBox: function (e) {
          return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
        },
        getParameter: function (e, t) {
          return void 0 === t && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new Et), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function (e) {
          return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
        },
        clampPoint: function (e, t) {
          return void 0 === t && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new Et), t.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
          var e = new Et;
          return function (t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
          }
        }(),
        intersect: function (e) {
          return this.min.max(e.min), this.max.min(e.max), this
        },
        union: function (e) {
          return this.min.min(e.min), this.max.max(e.max), this
        },
        translate: function (e) {
          return this.min.add(e), this.max.add(e), this
        },
        equals: function (e) {
          return e.min.equals(this.min) && e.max.equals(this.max)
        }
      }), Object.assign(Ps.prototype, {
        set: function (e, t) {
          return this.start.copy(e), this.end.copy(t), this
        },
        clone: function () {
          return (new this.constructor).copy(this)
        },
        copy: function (e) {
          return this.start.copy(e.start), this.end.copy(e.end), this
        },
        getCenter: function (e) {
          return void 0 === e && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new St), e.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function (e) {
          return void 0 === e && (console.warn("THREE.Line3: .delta() target is now required"), e = new St), e.subVectors(this.end, this.start)
        },
        distanceSq: function () {
          return this.start.distanceToSquared(this.end)
        },
        distance: function () {
          return this.start.distanceTo(this.end)
        },
        at: function (e, t) {
          return void 0 === t && (console.warn("THREE.Line3: .at() target is now required"), t = new St), this.delta(t).multiplyScalar(e).add(this.start)
        },
        closestPointToPointParameter: function () {
          var e = new St,
            t = new St;
          return function (n, i) {
            e.subVectors(n, this.start), t.subVectors(this.end, this.start);
            var r = t.dot(t),
              a = t.dot(e) / r;
            return i && (a = _t.clamp(a, 0, 1)), a
          }
        }(),
        closestPointToPoint: function (e, t, n) {
          var i = this.closestPointToPointParameter(e, t);
          return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new St), this.delta(n).multiplyScalar(i).add(this.start)
        },
        applyMatrix4: function (e) {
          return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
        },
        equals: function (e) {
          return e.start.equals(this.start) && e.end.equals(this.end)
        }
      }), Cs.prototype = Object.create(Jt.prototype), Cs.prototype.constructor = Cs, Cs.prototype.isImmediateRenderObject = !0, Os.prototype = Object.create(ar.prototype), Os.prototype.constructor = Os, Os.prototype.update = function () {
        var e = new St,
          t = new St,
          n = new At;
        return function () {
          var i = ["a", "b", "c"];
          this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
          var r = this.object.matrixWorld,
            a = this.geometry.attributes.position,
            o = this.object.geometry;
          if (o && o.isGeometry)
            for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++)
              for (var d = c[l], p = 0, f = d.vertexNormals.length; p < f; p++) {
                var m = s[d[i[p]]],
                  v = d.vertexNormals[p];
                e.copy(m).applyMatrix4(r), t.copy(v).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), a.setXYZ(h, e.x, e.y, e.z), h += 1, a.setXYZ(h, t.x, t.y, t.z), h += 1
              } else if (o && o.isBufferGeometry) {
                var g = o.attributes.position,
                  y = o.attributes.normal;
                for (h = 0, p = 0, f = g.count; p < f; p++) e.set(g.getX(p), g.getY(p), g.getZ(p)).applyMatrix4(r), t.set(y.getX(p), y.getY(p), y.getZ(p)), t.applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), a.setXYZ(h, e.x, e.y, e.z), h += 1, a.setXYZ(h, t.x, t.y, t.z), h += 1
              } a.needsUpdate = !0
        }
      }(), Is.prototype = Object.create(Jt.prototype), Is.prototype.constructor = Is, Is.prototype.dispose = function () {
        this.cone.geometry.dispose(), this.cone.material.dispose()
      }, Is.prototype.update = function () {
        var e = new St,
          t = new St;
        return function () {
          this.light.updateMatrixWorld();
          var n = this.light.distance ? this.light.distance : 1e3,
            i = n * Math.tan(this.light.angle);
          this.cone.scale.set(i, i, n), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
      }(), Ds.prototype = Object.create(ar.prototype), Ds.prototype.constructor = Ds, Ds.prototype.updateMatrixWorld = function () {
        var e = new St,
          t = new Mt,
          n = new Mt;
        return function (i) {
          var r = this.bones,
            a = this.geometry,
            o = a.getAttribute("position");
          n.getInverse(this.root.matrixWorld);
          for (var s = 0, c = 0; s < r.length; s++) {
            var h = r[s];
            h.parent && h.parent.isBone && (t.multiplyMatrices(n, h.matrixWorld), e.setFromMatrixPosition(t), o.setXYZ(c, e.x, e.y, e.z), t.multiplyMatrices(n, h.parent.matrixWorld), e.setFromMatrixPosition(t), o.setXYZ(c + 1, e.x, e.y, e.z), c += 2)
          }
          a.getAttribute("position").needsUpdate = !0, Jt.prototype.updateMatrixWorld.call(this, i)
        }
      }(), Ns.prototype = Object.create(An.prototype), Ns.prototype.constructor = Ns, Ns.prototype.dispose = function () {
        this.geometry.dispose(), this.material.dispose()
      }, Ns.prototype.update = function () {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
      }, Us.prototype = Object.create(Jt.prototype), Us.prototype.constructor = Us, Us.prototype.dispose = function () {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
      }, Us.prototype.update = function () {
        var e = .5 * this.light.width,
          t = .5 * this.light.height,
          n = this.line.geometry.attributes.position,
          i = n.array;
        i[0] = e, i[1] = -t, i[2] = 0, i[3] = e, i[4] = t, i[5] = 0, i[6] = -e, i[7] = t, i[8] = 0, i[9] = -e, i[10] = -t, i[11] = 0, i[12] = e, i[13] = -t, i[14] = 0, n.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
      }, Bs.prototype = Object.create(Jt.prototype), Bs.prototype.constructor = Bs, Bs.prototype.dispose = function () {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
      }, Bs.prototype.update = function () {
        var e = new St,
          t = new kt,
          n = new kt;
        return function () {
          var i = this.children[0];
          if (void 0 !== this.color) this.material.color.set(this.color);
          else {
            var r = i.geometry.getAttribute("color");
            t.copy(this.light.color), n.copy(this.light.groundColor);
            for (var a = 0, o = r.count; a < o; a++) {
              var s = a < o / 2 ? t : n;
              r.setXYZ(a, s.r, s.g, s.b)
            }
            r.needsUpdate = !0
          }
          i.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
      }(), Fs.prototype = Object.create(ar.prototype), Fs.prototype.constructor = Fs, Hs.prototype = Object.create(ar.prototype), Hs.prototype.constructor = Hs, zs.prototype = Object.create(ar.prototype), zs.prototype.constructor = zs, zs.prototype.update = function () {
        var e = new St,
          t = new St,
          n = new At;
        return function () {
          this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
          for (var i = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
            var u = s[h],
              d = u.normal;
            e.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(i), t.copy(d).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), r.setXYZ(c, e.x, e.y, e.z), c += 1, r.setXYZ(c, t.x, t.y, t.z), c += 1
          }
          r.needsUpdate = !0
        }
      }(), Gs.prototype = Object.create(Jt.prototype), Gs.prototype.constructor = Gs, Gs.prototype.dispose = function () {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
      }, Gs.prototype.update = function () {
        var e = new St,
          t = new St,
          n = new St;
        return function () {
          e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(t, e), this.lightPlane.lookAt(n), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(n), this.targetLine.scale.z = n.length()
        }
      }(), ks.prototype = Object.create(ar.prototype), ks.prototype.constructor = ks, ks.prototype.update = function () {
        var e, t, n = new St,
          i = new Qt;

        function r(r, a, o, s) {
          n.set(a, o, s).unproject(i);
          var c = t[r];
          if (void 0 !== c)
            for (var h = e.getAttribute("position"), l = 0, u = c.length; l < u; l++) h.setXYZ(c[l], n.x, n.y, n.z)
        }
        return function () {
          e = this.geometry, t = this.pointMap;
          i.projectionMatrix.copy(this.camera.projectionMatrix), r("c", 0, 0, -1), r("t", 0, 0, 1), r("n1", -1, -1, -1), r("n2", 1, -1, -1), r("n3", -1, 1, -1), r("n4", 1, 1, -1), r("f1", -1, -1, 1), r("f2", 1, -1, 1), r("f3", -1, 1, 1), r("f4", 1, 1, 1), r("u1", .7, 1.1, -1), r("u2", -.7, 1.1, -1), r("u3", 0, 2, -1), r("cf1", -1, 0, 1), r("cf2", 1, 0, 1), r("cf3", 0, -1, 1), r("cf4", 0, 1, 1), r("cn1", -1, 0, -1), r("cn2", 1, 0, -1), r("cn3", 0, -1, -1), r("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
        }
      }(), js.prototype = Object.create(ar.prototype), js.prototype.constructor = js, js.prototype.update = function () {
        var e = new Nt;
        return function (t) {
          if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && e.setFromObject(this.object), !e.isEmpty()) {
            var n = e.min,
              i = e.max,
              r = this.geometry.attributes.position,
              a = r.array;
            a[0] = i.x, a[1] = i.y, a[2] = i.z, a[3] = n.x, a[4] = i.y, a[5] = i.z, a[6] = n.x, a[7] = n.y, a[8] = i.z, a[9] = i.x, a[10] = n.y, a[11] = i.z, a[12] = i.x, a[13] = i.y, a[14] = n.z, a[15] = n.x, a[16] = i.y, a[17] = n.z, a[18] = n.x, a[19] = n.y, a[20] = n.z, a[21] = i.x, a[22] = n.y, a[23] = n.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
          }
        }
      }(), js.prototype.setFromObject = function (e) {
        return this.object = e, this.update(), this
      }, Vs.prototype = Object.create(ar.prototype), Vs.prototype.constructor = Vs, Vs.prototype.updateMatrixWorld = function (e) {
        var t = this.box;
        t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), Jt.prototype.updateMatrixWorld.call(this, e))
      }, Ws.prototype = Object.create(rr.prototype), Ws.prototype.constructor = Ws, Ws.prototype.updateMatrixWorld = function (e) {
        var t = -this.plane.constant;
        Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, t), this.children[0].material.side = t < 0 ? d : u, this.lookAt(this.plane.normal), Jt.prototype.updateMatrixWorld.call(this, e)
      }, Xs.prototype = Object.create(Jt.prototype), Xs.prototype.constructor = Xs, Xs.prototype.setDirection = function () {
        var e, t = new St;
        return function (n) {
          n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(n.z, 0, -n.x).normalize(), e = Math.acos(n.y), this.quaternion.setFromAxisAngle(t, e))
        }
      }(), Xs.prototype.setLength = function (e, t, n) {
        void 0 === t && (t = .2 * e), void 0 === n && (n = .2 * t), this.line.scale.set(1, Math.max(0, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix()
      }, Xs.prototype.setColor = function (e) {
        this.line.material.color.copy(e), this.cone.material.color.copy(e)
      }, Ys.prototype = Object.create(ar.prototype), Ys.prototype.constructor = Ys;

    function qs(e) {
      console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), eo.call(this, e), this.type = "catmullrom", this.closed = !0
    }

    function Zs(e) {
      console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), eo.call(this, e), this.type = "catmullrom"
    }

    function Js(e) {
      console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), eo.call(this, e), this.type = "catmullrom"
    }
    Xa.create = function (e, t) {
      return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(Xa.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
    }, Object.assign(po.prototype, {
      createPointsGeometry: function (e) {
        console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
        var t = this.getPoints(e);
        return this.createGeometry(t)
      },
      createSpacedPointsGeometry: function (e) {
        console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
        var t = this.getSpacedPoints(e);
        return this.createGeometry(t)
      },
      createGeometry: function (e) {
        console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
        for (var t = new tn, n = 0, i = e.length; n < i; n++) {
          var r = e[n];
          t.vertices.push(new St(r.x, r.y, r.z || 0))
        }
        return t
      }
    }), Object.assign(fo.prototype, {
      fromPoints: function (e) {
        console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e)
      }
    }), qs.prototype = Object.create(eo.prototype), Zs.prototype = Object.create(eo.prototype), Js.prototype = Object.create(eo.prototype), Object.assign(Js.prototype, {
      initFromArray: function () {
        console.error("THREE.Spline: .initFromArray() has been removed.")
      },
      getControlPointsArray: function () {
        console.error("THREE.Spline: .getControlPointsArray() has been removed.")
      },
      reparametrizeByArcLength: function () {
        console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
      }
    }), Fs.prototype.setColors = function () {
      console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, Ds.prototype.update = function () {
      console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }, Object.assign(Vo.prototype, {
      extractUrlBase: function (e) {
        return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Wo.extractUrlBase(e)
      }
    }), Object.assign(Rs.prototype, {
      center: function (e) {
        return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e)
      },
      empty: function () {
        return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
      },
      isIntersectionBox: function (e) {
        return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
      },
      size: function (e) {
        return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e)
      }
    }), Object.assign(Nt.prototype, {
      center: function (e) {
        return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
      },
      empty: function () {
        return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
      },
      isIntersectionBox: function (e) {
        return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
      },
      isIntersectionSphere: function (e) {
        return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
      },
      size: function (e) {
        return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
      }
    }), Ps.prototype.center = function (e) {
      return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e)
    }, Object.assign(_t, {
      random16: function () {
        return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
      },
      nearestPowerOfTwo: function (e) {
        return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), _t.floorPowerOfTwo(e)
      },
      nextPowerOfTwo: function (e) {
        return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), _t.ceilPowerOfTwo(e)
      }
    }), Object.assign(At.prototype, {
      flattenToArrayOffset: function (e, t) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
      },
      multiplyVector3: function (e) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
      },
      multiplyVector3Array: function () {
        console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
      },
      applyToBuffer: function (e) {
        return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
      },
      applyToVector3Array: function () {
        console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
      }
    }), Object.assign(Mt.prototype, {
      extractPosition: function (e) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
      },
      flattenToArrayOffset: function (e, t) {
        return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
      },
      getPosition: function () {
        var e;
        return function () {
          return void 0 === e && (e = new St), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), e.setFromMatrixColumn(this, 3)
        }
      }(),
      setRotationFromQuaternion: function (e) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
      },
      multiplyToArray: function () {
        console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
      },
      multiplyVector3: function (e) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
      },
      multiplyVector4: function (e) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
      },
      multiplyVector3Array: function () {
        console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
      },
      rotateAxis: function (e) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
      },
      crossVector: function (e) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
      },
      translate: function () {
        console.error("THREE.Matrix4: .translate() has been removed.")
      },
      rotateX: function () {
        console.error("THREE.Matrix4: .rotateX() has been removed.")
      },
      rotateY: function () {
        console.error("THREE.Matrix4: .rotateY() has been removed.")
      },
      rotateZ: function () {
        console.error("THREE.Matrix4: .rotateZ() has been removed.")
      },
      rotateByAxis: function () {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
      },
      applyToBuffer: function (e) {
        return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
      },
      applyToVector3Array: function () {
        console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
      },
      makeFrustum: function (e, t, n, i, r, a) {
        return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, i, n, r, a)
      }
    }), Bt.prototype.isIntersectionLine = function (e) {
      return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
    }, Tt.prototype.multiplyVector3 = function (e) {
      return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
    }, Object.assign(Tn.prototype, {
      isIntersectionBox: function (e) {
        return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
      },
      isIntersectionPlane: function (e) {
        return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
      },
      isIntersectionSphere: function (e) {
        return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
      }
    }), Object.assign(Sn.prototype, {
      area: function () {
        return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
      },
      barycoordFromPoint: function (e, t) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t)
      },
      midpoint: function (e) {
        return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e)
      },
      normal: function (e) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e)
      },
      plane: function (e) {
        return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e)
      }
    }), Object.assign(Sn, {
      barycoordFromPoint: function (e, t, n, i, r) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Sn.getBarycoord(e, t, n, i, r)
      },
      normal: function (e, t, n, i) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Sn.getNormal(e, t, n, i)
      }
    }), Object.assign(mo.prototype, {
      extractAllPoints: function (e) {
        return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e)
      },
      extrude: function (e) {
        return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new ia(this, e)
      },
      makeGeometry: function (e) {
        return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new ma(this, e)
      }
    }), Object.assign(Et.prototype, {
      fromAttribute: function (e, t, n) {
        return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
      },
      distanceToManhattan: function (e) {
        return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
      },
      lengthManhattan: function () {
        return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
      }
    }), Object.assign(St.prototype, {
      setEulerFromRotationMatrix: function () {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
      },
      setEulerFromQuaternion: function () {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
      },
      getPositionFromMatrix: function (e) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
      },
      getScaleFromMatrix: function (e) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
      },
      getColumnFromMatrix: function (e, t) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
      },
      applyProjection: function (e) {
        return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e)
      },
      fromAttribute: function (e, t, n) {
        return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
      },
      distanceToManhattan: function (e) {
        return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
      },
      lengthManhattan: function () {
        return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
      }
    }), Object.assign(Ct.prototype, {
      fromAttribute: function (e, t, n) {
        return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
      },
      lengthManhattan: function () {
        return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
      }
    }), Object.assign(tn.prototype, {
      computeTangents: function () {
        console.error("THREE.Geometry: .computeTangents() has been removed.")
      },
      computeLineDistances: function () {
        console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
      }
    }), Object.assign(Jt.prototype, {
      getChildByName: function (e) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
      },
      renderDepth: function () {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
      },
      translate: function (e, t) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
      },
      getWorldRotation: function () {
        console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
      }
    }), Object.defineProperties(Jt.prototype, {
      eulerOrder: {
        get: function () {
          return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
        },
        set: function (e) {
          console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
        }
      },
      useQuaternion: {
        get: function () {
          console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function () {
          console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
      }
    }), Object.defineProperties($i.prototype, {
      objects: {
        get: function () {
          return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
        }
      }
    }), Object.defineProperty(er.prototype, "useVertexTexture", {
      get: function () {
        console.warn("THREE.Skeleton: useVertexTexture has been removed.")
      },
      set: function () {
        console.warn("THREE.Skeleton: useVertexTexture has been removed.")
      }
    }), Object.defineProperty(Xa.prototype, "__arcLengthDivisions", {
      get: function () {
        return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
      },
      set: function (e) {
        console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e
      }
    }), ki.prototype.setLens = function (e, t) {
      console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
    }, Object.defineProperties(vo.prototype, {
      onlyShadow: {
        set: function () {
          console.warn("THREE.Light: .onlyShadow has been removed.")
        }
      },
      shadowCameraFov: {
        set: function (e) {
          console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
        }
      },
      shadowCameraLeft: {
        set: function (e) {
          console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
        }
      },
      shadowCameraRight: {
        set: function (e) {
          console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
        }
      },
      shadowCameraTop: {
        set: function (e) {
          console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
        }
      },
      shadowCameraBottom: {
        set: function (e) {
          console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
        }
      },
      shadowCameraNear: {
        set: function (e) {
          console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
        }
      },
      shadowCameraFar: {
        set: function (e) {
          console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
        }
      },
      shadowCameraVisible: {
        set: function () {
          console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
      },
      shadowBias: {
        set: function (e) {
          console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
        }
      },
      shadowDarkness: {
        set: function () {
          console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
      },
      shadowMapWidth: {
        set: function (e) {
          console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
        }
      },
      shadowMapHeight: {
        set: function (e) {
          console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
        }
      }
    }), Object.defineProperties(nn.prototype, {
      length: {
        get: function () {
          return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
        }
      },
      copyIndicesArray: function () {
        console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
      }
    }), Object.assign(vn.prototype, {
      addIndex: function (e) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
      },
      addDrawCall: function (e, t, n) {
        void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
      },
      clearDrawCalls: function () {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
      },
      computeTangents: function () {
        console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
      },
      computeOffsets: function () {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
      }
    }), Object.defineProperties(vn.prototype, {
      drawcalls: {
        get: function () {
          return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
        }
      },
      offsets: {
        get: function () {
          return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
        }
      }
    }), Object.assign(ra.prototype, {
      getArrays: function () {
        console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
      },
      addShapeList: function () {
        console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
      },
      addShape: function () {
        console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
      }
    }), Object.defineProperties(xs.prototype, {
      dynamic: {
        set: function () {
          console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
        }
      },
      onUpdate: {
        value: function () {
          return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
        }
      }
    }), Object.defineProperties(_n.prototype, {
      wrapAround: {
        get: function () {
          console.warn("THREE.Material: .wrapAround has been removed.")
        },
        set: function () {
          console.warn("THREE.Material: .wrapAround has been removed.")
        }
      },
      wrapRGB: {
        get: function () {
          return console.warn("THREE.Material: .wrapRGB has been removed."), new kt
        }
      },
      shading: {
        get: function () {
          console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
        },
        set: function (e) {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === e
        }
      }
    }), Object.defineProperties(Pa.prototype, {
      metal: {
        get: function () {
          return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
        },
        set: function () {
          console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
        }
      }
    }), Object.defineProperties(Mn.prototype, {
      derivatives: {
        get: function () {
          return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
        },
        set: function (e) {
          console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
        }
      }
    }), Object.assign(Wi.prototype, {
      animate: function (e) {
        console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e)
      },
      getCurrentRenderTarget: function () {
        return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
      },
      getMaxAnisotropy: function () {
        return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
      },
      getPrecision: function () {
        return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
      },
      resetGLState: function () {
        return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
      },
      supportsFloatTextures: function () {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
      },
      supportsHalfFloatTextures: function () {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
      },
      supportsStandardDerivatives: function () {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
      },
      supportsCompressedTextureS3TC: function () {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
      },
      supportsCompressedTexturePVRTC: function () {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
      },
      supportsBlendMinMax: function () {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
      },
      supportsVertexTextures: function () {
        return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
      },
      supportsInstancedArrays: function () {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
      },
      enableScissorTest: function (e) {
        console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
      },
      initMaterial: function () {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
      },
      addPrePlugin: function () {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
      },
      addPostPlugin: function () {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
      },
      updateShadowMap: function () {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
      },
      setFaceCulling: function () {
        console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
      }
    }), Object.defineProperties(Wi.prototype, {
      shadowMapEnabled: {
        get: function () {
          return this.shadowMap.enabled
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
        }
      },
      shadowMapType: {
        get: function () {
          return this.shadowMap.type
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
        }
      },
      shadowMapCullFace: {
        get: function () {
          console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        }
      }
    }), Object.defineProperties(Fi.prototype, {
      cullFace: {
        get: function () {
          console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        }
      },
      renderReverseSided: {
        get: function () {
          console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        }
      },
      renderSingleSided: {
        get: function () {
          console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        }
      }
    }), Object.defineProperties(Ot.prototype, {
      wrapS: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
        }
      },
      wrapT: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
        }
      },
      magFilter: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
        }
      },
      minFilter: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
        }
      },
      anisotropy: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
        }
      },
      offset: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
        }
      },
      repeat: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
        }
      },
      format: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
        }
      },
      type: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
        }
      },
      generateMipmaps: {
        get: function () {
          return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
        },
        set: function (e) {
          console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
        }
      }
    }), Object.defineProperties(Vi.prototype, {
      standing: {
        set: function () {
          console.warn("THREE.WebVRManager: .standing has been removed.")
        }
      }
    }), cs.prototype.load = function (e) {
      console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
      var t = this;
      return (new rs).load(e, function (e) {
        t.setBuffer(e)
      }), this
    }, ls.prototype.getData = function () {
      return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
    }, os.prototype.updateCubeMap = function (e, t) {
      return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t)
    };
    var Qs = {
      merge: function (e, t, n) {
        var i;
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."), t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(), i = t.matrix, t = t.geometry), e.merge(t, i, n)
      },
      center: function (e) {
        return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
      }
    };
    Lt.crossOrigin = void 0, Lt.loadTexture = function (e, t, n, i) {
      console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
      var r = new Wa;
      r.setCrossOrigin(this.crossOrigin);
      var a = r.load(e, n, void 0, i);
      return t && (a.mapping = t), a
    }, Lt.loadTextureCube = function (e, t, n, i) {
      console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
      var r = new Va;
      r.setCrossOrigin(this.crossOrigin);
      var a = r.load(e, n, void 0, i);
      return t && (a.mapping = t), a
    }, Lt.loadCompressedTexture = function () {
      console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }, Lt.loadCompressedTextureCube = function () {
      console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    };
    var Ks = {
      createMultiMaterialObject: function () {
        console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
      },
      detach: function () {
        console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
      },
      attach: function () {
        console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
      }
    };
    t.WebGLRenderTargetCube = It, t.WebGLRenderTarget = Ot, t.WebGLRenderer = Wi, t.ShaderLib = Vt, t.UniformsLib = jt, t.UniformsUtils = zt, t.ShaderChunk = Ht, t.FogExp2 = Xi, t.Fog = Yi, t.Scene = qi, t.Sprite = Ki, t.LOD = $i, t.SkinnedMesh = nr, t.Skeleton = er, t.Bone = tr, t.Mesh = An, t.LineSegments = ar, t.LineLoop = or, t.Line = rr, t.Points = cr, t.Group = Gi, t.VideoTexture = hr, t.DataTexture = Dt, t.CompressedTexture = lr, t.CubeTexture = Rn, t.CanvasTexture = ur, t.DepthTexture = dr, t.Texture = Pt, t.CompressedTextureLoader = Ga, t.DataTextureLoader = ka, t.CubeTextureLoader = Va, t.TextureLoader = Wa, t.ObjectLoader = Yo, t.MaterialLoader = Go, t.BufferGeometryLoader = ko, t.DefaultLoadingManager = Fa, t.LoadingManager = Ba, t.JSONLoader = Xo, t.ImageLoader = ja, t.ImageBitmapLoader = Ko, t.FontLoader = ns, t.FileLoader = za, t.Loader = Vo, t.LoaderUtils = Wo, t.Cache = Ua, t.AudioLoader = rs, t.SpotLightShadow = xo, t.SpotLight = wo, t.PointLight = bo, t.RectAreaLight = To, t.HemisphereLight = go, t.DirectionalLightShadow = _o, t.DirectionalLight = Eo, t.AmbientLight = Mo, t.LightShadow = yo, t.Light = vo, t.StereoCamera = as, t.PerspectiveCamera = ki, t.OrthographicCamera = Kt, t.CubeCamera = os, t.ArrayCamera = ji, t.Camera = Qt, t.AudioListener = ss, t.PositionalAudio = hs, t.AudioContext = is, t.AudioAnalyser = ls, t.Audio = cs, t.VectorKeyframeTrack = Fo, t.StringKeyframeTrack = Bo, t.QuaternionKeyframeTrack = Uo, t.NumberKeyframeTrack = Do, t.ColorKeyframeTrack = Io, t.BooleanKeyframeTrack = Oo, t.PropertyMixer = us, t.PropertyBinding = ms, t.KeyframeTrack = Co, t.AnimationUtils = So, t.AnimationObjectGroup = vs, t.AnimationMixer = ys, t.AnimationClip = Ho, t.Uniform = xs, t.InstancedBufferGeometry = ws, t.BufferGeometry = vn, t.Geometry = tn, t.InterleavedBufferAttribute = Ji, t.InstancedInterleavedBuffer = bs, t.InterleavedBuffer = Zi, t.InstancedBufferAttribute = _s, t.Face3 = $t, t.Object3D = Jt, t.Raycaster = Es, t.Layers = qt, t.EventDispatcher = r, t.Clock = Ss, t.QuaternionLinearInterpolant = No, t.LinearInterpolant = Ro, t.DiscreteInterpolant = Po, t.CubicInterpolant = Lo, t.Interpolant = Ao, t.Triangle = Sn, t.Math = _t, t.Spherical = As, t.Cylindrical = Ls, t.Plane = Bt, t.Frustum = Ft, t.Sphere = Ut, t.Ray = Tn, t.Matrix4 = Mt, t.Matrix3 = At, t.Box3 = Nt, t.Box2 = Rs, t.Line3 = Ps, t.Euler = Yt, t.Vector4 = Ct, t.Vector3 = St, t.Vector2 = Et, t.Quaternion = Tt, t.Color = kt, t.ImmediateRenderObject = Cs, t.VertexNormalsHelper = Os, t.SpotLightHelper = Is, t.SkeletonHelper = Ds, t.PointLightHelper = Ns, t.RectAreaLightHelper = Us, t.HemisphereLightHelper = Bs, t.GridHelper = Fs, t.PolarGridHelper = Hs, t.FaceNormalsHelper = zs, t.DirectionalLightHelper = Gs, t.CameraHelper = ks, t.BoxHelper = js, t.Box3Helper = Vs, t.PlaneHelper = Ws, t.ArrowHelper = Xs, t.AxesHelper = Ys, t.Shape = mo, t.Path = fo, t.ShapePath = $o, t.Font = es, t.CurvePath = po, t.Curve = Xa, t.ImageUtils = Lt, t.ShapeUtils = ea, t.WebGLUtils = zi, t.WireframeGeometry = pr, t.ParametricGeometry = fr, t.ParametricBufferGeometry = mr, t.TetrahedronGeometry = yr, t.TetrahedronBufferGeometry = xr, t.OctahedronGeometry = wr, t.OctahedronBufferGeometry = br, t.IcosahedronGeometry = _r, t.IcosahedronBufferGeometry = Er, t.DodecahedronGeometry = Mr, t.DodecahedronBufferGeometry = Tr, t.PolyhedronGeometry = vr, t.PolyhedronBufferGeometry = gr, t.TubeGeometry = Sr, t.TubeBufferGeometry = Ar, t.TorusKnotGeometry = Lr, t.TorusKnotBufferGeometry = Rr, t.TorusGeometry = Pr, t.TorusBufferGeometry = Cr, t.TextGeometry = sa, t.TextBufferGeometry = ca, t.SphereGeometry = ha, t.SphereBufferGeometry = la, t.RingGeometry = ua, t.RingBufferGeometry = da, t.PlaneGeometry = xn, t.PlaneBufferGeometry = wn, t.LatheGeometry = pa, t.LatheBufferGeometry = fa, t.ShapeGeometry = ma, t.ShapeBufferGeometry = va, t.ExtrudeGeometry = ia, t.ExtrudeBufferGeometry = ra, t.EdgesGeometry = ya, t.ConeGeometry = ba, t.ConeBufferGeometry = _a, t.CylinderGeometry = xa, t.CylinderBufferGeometry = wa, t.CircleGeometry = Ea, t.CircleBufferGeometry = Ma, t.BoxGeometry = gn, t.BoxBufferGeometry = yn, t.ShadowMaterial = Sa, t.SpriteMaterial = Qi, t.RawShaderMaterial = Aa, t.ShaderMaterial = Mn, t.PointsMaterial = sr, t.MeshPhysicalMaterial = Ra, t.MeshStandardMaterial = La, t.MeshPhongMaterial = Pa, t.MeshToonMaterial = Ca, t.MeshNormalMaterial = Oa, t.MeshLambertMaterial = Ia, t.MeshDepthMaterial = Ui, t.MeshDistanceMaterial = Bi, t.MeshBasicMaterial = En, t.LineDashedMaterial = Da, t.LineBasicMaterial = ir, t.Material = _n, t.Float64BufferAttribute = dn, t.Float32BufferAttribute = un, t.Uint32BufferAttribute = ln, t.Int32BufferAttribute = hn, t.Uint16BufferAttribute = cn, t.Int16BufferAttribute = sn, t.Uint8ClampedBufferAttribute = on, t.Uint8BufferAttribute = an, t.Int8BufferAttribute = rn, t.BufferAttribute = nn, t.ArcCurve = qa, t.CatmullRomCurve3 = eo, t.CubicBezierCurve = ro, t.CubicBezierCurve3 = ao, t.EllipseCurve = Ya, t.LineCurve = oo, t.LineCurve3 = so, t.QuadraticBezierCurve = co, t.QuadraticBezierCurve3 = ho, t.SplineCurve = lo, t.REVISION = a, t.MOUSE = {
      LEFT: 0,
      MIDDLE: 1,
      RIGHT: 2
    }, t.CullFaceNone = o, t.CullFaceBack = s, t.CullFaceFront = c, t.CullFaceFrontBack = 3, t.FrontFaceDirectionCW = 0, t.FrontFaceDirectionCCW = 1, t.BasicShadowMap = 0, t.PCFShadowMap = h, t.PCFSoftShadowMap = l, t.FrontSide = u, t.BackSide = d, t.DoubleSide = p, t.FlatShading = 1, t.SmoothShading = 2, t.NoColors = f, t.FaceColors = m, t.VertexColors = v, t.NoBlending = g, t.NormalBlending = y, t.AdditiveBlending = x, t.SubtractiveBlending = w, t.MultiplyBlending = b, t.CustomBlending = _, t.AddEquation = E, t.SubtractEquation = M, t.ReverseSubtractEquation = T, t.MinEquation = S, t.MaxEquation = A, t.ZeroFactor = L, t.OneFactor = R, t.SrcColorFactor = P, t.OneMinusSrcColorFactor = C, t.SrcAlphaFactor = O, t.OneMinusSrcAlphaFactor = I, t.DstAlphaFactor = D, t.OneMinusDstAlphaFactor = N, t.DstColorFactor = U, t.OneMinusDstColorFactor = B, t.SrcAlphaSaturateFactor = F, t.NeverDepth = H, t.AlwaysDepth = z, t.LessDepth = G, t.LessEqualDepth = k, t.EqualDepth = j, t.GreaterEqualDepth = V, t.GreaterDepth = W, t.NotEqualDepth = X, t.MultiplyOperation = Y, t.MixOperation = q, t.AddOperation = Z, t.NoToneMapping = J, t.LinearToneMapping = Q, t.ReinhardToneMapping = K, t.Uncharted2ToneMapping = $, t.CineonToneMapping = ee, t.UVMapping = 300, t.CubeReflectionMapping = te, t.CubeRefractionMapping = ne, t.EquirectangularReflectionMapping = ie, t.EquirectangularRefractionMapping = re, t.SphericalReflectionMapping = ae, t.CubeUVReflectionMapping = oe, t.CubeUVRefractionMapping = se, t.RepeatWrapping = ce, t.ClampToEdgeWrapping = he, t.MirroredRepeatWrapping = le, t.NearestFilter = ue, t.NearestMipMapNearestFilter = de, t.NearestMipMapLinearFilter = pe, t.LinearFilter = fe, t.LinearMipMapNearestFilter = me, t.LinearMipMapLinearFilter = ve, t.UnsignedByteType = ge, t.ByteType = ye, t.ShortType = xe, t.UnsignedShortType = we, t.IntType = be, t.UnsignedIntType = _e, t.FloatType = Ee, t.HalfFloatType = Me, t.UnsignedShort4444Type = Te, t.UnsignedShort5551Type = Se, t.UnsignedShort565Type = Ae, t.UnsignedInt248Type = Le, t.AlphaFormat = Re, t.RGBFormat = Pe, t.RGBAFormat = Ce, t.LuminanceFormat = Oe, t.LuminanceAlphaFormat = Ie, t.RGBEFormat = De, t.DepthFormat = Ne, t.DepthStencilFormat = Ue, t.RGB_S3TC_DXT1_Format = Be, t.RGBA_S3TC_DXT1_Format = Fe, t.RGBA_S3TC_DXT3_Format = He, t.RGBA_S3TC_DXT5_Format = ze, t.RGB_PVRTC_4BPPV1_Format = Ge, t.RGB_PVRTC_2BPPV1_Format = ke, t.RGBA_PVRTC_4BPPV1_Format = je, t.RGBA_PVRTC_2BPPV1_Format = Ve, t.RGB_ETC1_Format = We, t.RGBA_ASTC_4x4_Format = Xe, t.RGBA_ASTC_5x4_Format = Ye, t.RGBA_ASTC_5x5_Format = qe, t.RGBA_ASTC_6x5_Format = Ze, t.RGBA_ASTC_6x6_Format = Je, t.RGBA_ASTC_8x5_Format = Qe, t.RGBA_ASTC_8x6_Format = Ke, t.RGBA_ASTC_8x8_Format = $e, t.RGBA_ASTC_10x5_Format = et, t.RGBA_ASTC_10x6_Format = tt, t.RGBA_ASTC_10x8_Format = nt, t.RGBA_ASTC_10x10_Format = it, t.RGBA_ASTC_12x10_Format = rt, t.RGBA_ASTC_12x12_Format = at, t.LoopOnce = 2200, t.LoopRepeat = ot, t.LoopPingPong = 2202, t.InterpolateDiscrete = 2300, t.InterpolateLinear = 2301, t.InterpolateSmooth = 2302, t.ZeroCurvatureEnding = st, t.ZeroSlopeEnding = 2401, t.WrapAroundEnding = 2402, t.TrianglesDrawMode = ct, t.TriangleStripDrawMode = ht, t.TriangleFanDrawMode = lt, t.LinearEncoding = ut, t.sRGBEncoding = dt, t.GammaEncoding = pt, t.RGBEEncoding = ft, t.LogLuvEncoding = 3003, t.RGBM7Encoding = mt, t.RGBM16Encoding = vt, t.RGBDEncoding = gt, t.BasicDepthPacking = yt, t.RGBADepthPacking = xt, t.TangentSpaceNormalMap = wt, t.ObjectSpaceNormalMap = bt, t.CubeGeometry = gn, t.Face4 = function (e, t, n, i, r, a, o) {
      return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new $t(e, t, n, r, a, o)
    }, t.LineStrip = 0, t.LinePieces = 1, t.MeshFaceMaterial = function (e) {
      return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), e
    }, t.MultiMaterial = function (e) {
      return void 0 === e && (e = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), e.isMultiMaterial = !0, e.materials = e, e.clone = function () {
        return e.slice()
      }, e
    }, t.PointCloud = function (e, t) {
      return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new cr(e, t)
    }, t.Particle = function (e) {
      return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Ki(e)
    }, t.ParticleSystem = function (e, t) {
      return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new cr(e, t)
    }, t.PointCloudMaterial = function (e) {
      return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new sr(e)
    }, t.ParticleBasicMaterial = function (e) {
      return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new sr(e)
    }, t.ParticleSystemMaterial = function (e) {
      return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new sr(e)
    }, t.Vertex = function (e, t, n) {
      return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new St(e, t, n)
    }, t.DynamicBufferAttribute = function (e, t) {
      return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new nn(e, t).setDynamic(!0)
    }, t.Int8Attribute = function (e, t) {
      return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new rn(e, t)
    }, t.Uint8Attribute = function (e, t) {
      return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new an(e, t)
    }, t.Uint8ClampedAttribute = function (e, t) {
      return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new on(e, t)
    }, t.Int16Attribute = function (e, t) {
      return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new sn(e, t)
    }, t.Uint16Attribute = function (e, t) {
      return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new cn(e, t)
    }, t.Int32Attribute = function (e, t) {
      return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new hn(e, t)
    }, t.Uint32Attribute = function (e, t) {
      return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new ln(e, t)
    }, t.Float32Attribute = function (e, t) {
      return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new un(e, t)
    }, t.Float64Attribute = function (e, t) {
      return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new dn(e, t)
    }, t.ClosedSplineCurve3 = qs, t.SplineCurve3 = Zs, t.Spline = Js, t.AxisHelper = function (e) {
      return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new Ys(e)
    }, t.BoundingBoxHelper = function (e, t) {
      return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new js(e, t)
    }, t.EdgesHelper = function (e, t) {
      return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new ar(new ya(e.geometry), new ir({
        color: void 0 !== t ? t : 16777215
      }))
    }, t.WireframeHelper = function (e, t) {
      return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new ar(new pr(e.geometry), new ir({
        color: void 0 !== t ? t : 16777215
      }))
    }, t.XHRLoader = function (e) {
      return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new za(e)
    }, t.BinaryTextureLoader = function (e) {
      return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new ka(e)
    }, t.GeometryUtils = Qs, t.Projector = function () {
      console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function (e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
      }, this.unprojectVector = function (e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
      }, this.pickingRay = function () {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
      }
    }, t.CanvasRenderer = function () {
      console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function () {}, this.render = function () {}, this.setClearColor = function () {}, this.setSize = function () {}
    }, t.SceneUtils = Ks, t.LensFlare = function () {
      console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")
    }
  },
  //4
  function (e, t, n) {
    "use strict";
    THREE.OrbitControls = function (e, t) {
      this.object = e, this.domElement = void 0 !== t ? t : document, this.enabled = !0, this.target = new THREE.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        BOTTOM: 40
      }, this.mouseButtons = {
        LEFT: THREE.MOUSE.LEFT,
        MIDDLE: THREE.MOUSE.MIDDLE,
        RIGHT: THREE.MOUSE.RIGHT
      }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function () {
        return h.phi
      }, this.getAzimuthalAngle = function () {
        return h.theta
      }, this.saveState = function () {
        n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
      }, this.reset = function () {
        n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(i), n.update(), s = o.NONE
      }, this.update = function () {
        var t = new THREE.Vector3,
          r = (new THREE.Quaternion).setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)),
          a = r.clone().inverse(),
          f = new THREE.Vector3,
          m = new THREE.Quaternion;
        return function () {
          var e = n.object.position;
          return t.copy(e).sub(n.target), t.applyQuaternion(r), h.setFromVector3(t), n.autoRotate && s === o.NONE && M(2 * Math.PI / 60 / 60 * n.autoRotateSpeed), h.theta += l.theta, h.phi += l.phi, h.theta = Math.max(n.minAzimuthAngle, Math.min(n.maxAzimuthAngle, h.theta)), h.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, h.phi)), h.makeSafe(), h.radius *= u, h.radius = Math.max(n.minDistance, Math.min(n.maxDistance, h.radius)), n.target.add(d), t.setFromSpherical(h), t.applyQuaternion(a), e.copy(n.target).add(t), n.object.lookAt(n.target), !0 === n.enableDamping ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, d.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), d.set(0, 0, 0)), u = 1, !!(p || f.distanceToSquared(n.object.position) > c || 8 * (1 - m.dot(n.object.quaternion)) > c) && (n.dispatchEvent(i), f.copy(n.object.position), m.copy(n.object.quaternion), p = !1, !0)
        }
      }(), this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", z, !1), n.domElement.removeEventListener("mousedown", O, !1), n.domElement.removeEventListener("wheel", N, !1), n.domElement.removeEventListener("touchstart", B, !1), n.domElement.removeEventListener("touchend", H, !1), n.domElement.removeEventListener("touchmove", F, !1), document.removeEventListener("mousemove", I, !1), document.removeEventListener("mouseup", D, !1), window.removeEventListener("keydown", U, !1)
      };
      var n = this,
        i = {
          type: "change"
        },
        r = {
          type: "start"
        },
        a = {
          type: "end"
        },
        o = {
          NONE: -1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_DOLLY_PAN: 4
        },
        s = o.NONE,
        c = 1e-6,
        h = new THREE.Spherical,
        l = new THREE.Spherical,
        u = 1,
        d = new THREE.Vector3,
        p = !1,
        f = new THREE.Vector2,
        m = new THREE.Vector2,
        v = new THREE.Vector2,
        g = new THREE.Vector2,
        y = new THREE.Vector2,
        x = new THREE.Vector2,
        w = new THREE.Vector2,
        b = new THREE.Vector2,
        _ = new THREE.Vector2;

      function E() {
        return Math.pow(.95, n.zoomSpeed)
      }

      function M(e) {
        l.theta -= e
      }

      function T(e) {
        l.phi -= e
      }
      var S = function () {
          var e = new THREE.Vector3;
          return function (t, n) {
            e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), d.add(e)
          }
        }(),
        A = function () {
          var e = new THREE.Vector3;
          return function (t, i) {
            !0 === n.screenSpacePanning ? e.setFromMatrixColumn(i, 1) : (e.setFromMatrixColumn(i, 0), e.crossVectors(n.object.up, e)), e.multiplyScalar(t), d.add(e)
          }
        }(),
        L = function () {
          var e = new THREE.Vector3;
          return function (t, i) {
            var r = n.domElement === document ? n.domElement.body : n.domElement;
            if (n.object.isPerspectiveCamera) {
              var a = n.object.position;
              e.copy(a).sub(n.target);
              var o = e.length();
              o *= Math.tan(n.object.fov / 2 * Math.PI / 180), S(2 * t * o / r.clientHeight, n.object.matrix), A(2 * i * o / r.clientHeight, n.object.matrix)
            } else n.object.isOrthographicCamera ? (S(t * (n.object.right - n.object.left) / n.object.zoom / r.clientWidth, n.object.matrix), A(i * (n.object.top - n.object.bottom) / n.object.zoom / r.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
          }
        }();

      function R(e) {
        n.object.isPerspectiveCamera ? u /= e : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * e)), n.object.updateProjectionMatrix(), p = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
      }

      function P(e) {
        g.set(e.clientX, e.clientY)
      }

      function C(e) {
        b.set(e.clientX, e.clientY), _.subVectors(b, w), _.y > 0 ? R(E()) : _.y < 0 && function (e) {
          n.object.isPerspectiveCamera ? u *= e : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / e)), n.object.updateProjectionMatrix(), p = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
        }(E()), w.copy(b), n.update()
      }

      function O(e) {
        if (!1 !== n.enabled) {
          switch (e.preventDefault(), e.button) {
            case n.mouseButtons.LEFT:
              if (e.ctrlKey || e.metaKey) {
                if (!1 === n.enablePan) return;
                P(e), s = o.PAN
              } else {
                if (!1 === n.enableRotate) return;
                ! function (e) {
                  f.set(e.clientX, e.clientY)
                }(e), s = o.ROTATE
              }
              break;
            case n.mouseButtons.MIDDLE:
              if (!1 === n.enableZoom) return;
              ! function (e) {
                w.set(e.clientX, e.clientY)
              }(e), s = o.DOLLY;
              break;
            case n.mouseButtons.RIGHT:
              if (!1 === n.enablePan) return;
              P(e), s = o.PAN
          }
          s !== o.NONE && (document.addEventListener("mousemove", I, !1), document.addEventListener("mouseup", D, !1), n.dispatchEvent(r))
        }
      }

      function I(e) {
        if (!1 !== n.enabled) switch (e.preventDefault(), s) {
          case o.ROTATE:
            if (!1 === n.enableRotate) return;
            ! function (e) {
              m.set(e.clientX, e.clientY), v.subVectors(m, f).multiplyScalar(n.rotateSpeed);
              var t = n.domElement === document ? n.domElement.body : n.domElement;
              M(2 * Math.PI * v.x / t.clientHeight), T(2 * Math.PI * v.y / t.clientHeight), f.copy(m), n.update()
            }(e);
            break;
          case o.DOLLY:
            if (!1 === n.enableZoom) return;
            C(e);
            break;
          case o.PAN:
            if (!1 === n.enablePan) return;
            ! function (e) {
              y.set(e.clientX, e.clientY), x.subVectors(y, g).multiplyScalar(n.panSpeed), L(x.x, x.y), g.copy(y), n.update()
            }(e)
        }
      }

      function D(e) {
        !1 !== n.enabled && (document.removeEventListener("mousemove", I, !1), document.removeEventListener("mouseup", D, !1), n.dispatchEvent(a), s = o.NONE)
      }

      function N(e) {
        !1 === n.enabled || !1 === n.enableZoom || s !== o.NONE && s !== o.ROTATE || (e.preventDefault(), e.stopPropagation(), n.dispatchEvent(r), function (e) {
          e.deltaY < 0 ? n.object.fov -= n.zoomSpeed : e.deltaY > 0 && (n.object.fov += n.zoomSpeed), n.object.fov = THREE.Math.clamp(n.object.fov, n.minZoom, n.maxZoom), n.object.updateProjectionMatrix(), n.dispatchEvent(i)
        }(e), n.dispatchEvent(a))
      }

      function U(e) {
        !1 !== n.enabled && !1 !== n.enableKeys && !1 !== n.enablePan && function (e) {
          switch (e.keyCode) {
            case n.keys.UP:
              L(0, n.keyPanSpeed), n.update();
              break;
            case n.keys.BOTTOM:
              L(0, -n.keyPanSpeed), n.update();
              break;
            case n.keys.LEFT:
              L(n.keyPanSpeed, 0), n.update();
              break;
            case n.keys.RIGHT:
              L(-n.keyPanSpeed, 0), n.update()
          }
        }(e)
      }

      function B(e) {
        if (!1 !== n.enabled) {
          switch (e.preventDefault(), e.touches.length) {
            case 1:
              if (!1 === n.enableRotate) return;
              ! function (e) {
                f.set(e.touches[0].pageX, e.touches[0].pageY)
              }(e), s = o.TOUCH_ROTATE;
              break;
            case 2:
              if (!1 === n.enableZoom && !1 === n.enablePan) return;
              ! function (e) {
                if (n.enableZoom) {
                  var t = e.touches[0].pageX - e.touches[1].pageX,
                    i = e.touches[0].pageY - e.touches[1].pageY,
                    r = Math.sqrt(t * t + i * i);
                  w.set(0, r)
                }
                if (n.enablePan) {
                  var a = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                    o = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                  g.set(a, o)
                }
              }(e), s = o.TOUCH_DOLLY_PAN;
              break;
            default:
              s = o.NONE
          }
          s !== o.NONE && n.dispatchEvent(r)
        }
      }

      function F(e) {
        if (!1 !== n.enabled) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
          case 1:
            if (!1 === n.enableRotate) return;
            if (s !== o.TOUCH_ROTATE) return;
            ! function (e) {
              m.set(e.touches[0].pageX, e.touches[0].pageY), v.subVectors(m, f).multiplyScalar(n.rotateSpeed);
              var t = n.domElement === document ? n.domElement.body : n.domElement;
              M(2 * Math.PI * v.x / t.clientHeight), T(2 * Math.PI * v.y / t.clientHeight), f.copy(m), n.update()
            }(e);
            break;
          case 2:
            if (!1 === n.enableZoom && !1 === n.enablePan) return;
            if (s !== o.TOUCH_DOLLY_PAN) return;
            ! function (e) {
              if (n.enableZoom) {
                var t = e.touches[0].pageX - e.touches[1].pageX,
                  i = e.touches[0].pageY - e.touches[1].pageY,
                  r = Math.sqrt(t * t + i * i);
                b.set(0, r), _.set(0, Math.pow(b.y / w.y, n.zoomSpeed)), R(_.y), w.copy(b)
              }
              if (n.enablePan) {
                var a = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                  o = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                y.set(a, o), x.subVectors(y, g).multiplyScalar(n.panSpeed), L(x.x, x.y), g.copy(y)
              }
              n.update()
            }(e);
            break;
          default:
            s = o.NONE
        }
      }

      function H(e) {
        !1 !== n.enabled && (n.dispatchEvent(a), s = o.NONE)
      }

      function z(e) {
        !1 !== n.enabled && e.preventDefault()
      }
      n.domElement.addEventListener("contextmenu", z, !1), n.domElement.addEventListener("mousedown", O, !1), n.domElement.addEventListener("wheel", N, !1), n.domElement.addEventListener("touchstart", B, !1), n.domElement.addEventListener("touchend", H, !1), n.domElement.addEventListener("touchmove", F, !1), window.addEventListener("keydown", U, !1), this.update()
    }, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, Object.defineProperties(THREE.OrbitControls.prototype, {
      center: {
        get: function () {
          return console.warn("THREE.OrbitControls: .center has been renamed to .target"), this.target
        }
      },
      noZoom: {
        get: function () {
          return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
        },
        set: function (e) {
          console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !e
        }
      },
      noRotate: {
        get: function () {
          return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
        },
        set: function (e) {
          console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !e
        }
      },
      noPan: {
        get: function () {
          return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
        },
        set: function (e) {
          console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !e
        }
      },
      noKeys: {
        get: function () {
          return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
        },
        set: function (e) {
          console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !e
        }
      },
      staticMoving: {
        get: function () {
          return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.enableDamping
        },
        set: function (e) {
          console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.enableDamping = !e
        }
      },
      dynamicDampingFactor: {
        get: function () {
          return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor
        },
        set: function (e) {
          console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor = e
        }
      }
    })
  },
  //5
  function (e, t, n) {
    "use strict";
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    var r = n(6).Filter,
      a = n(7).Streetsape,
      o = n(0),
      s = function () {
        function e(t) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          return this.dop = new o, this.settings = t, this.filter = new r, this.streetsape = new a, this.initPlayer(), this.streetsape
        }
        return i(e, [{
          key: "initPlayer",
          value: function () {
            var e = this.filter.filterNormal(this.settings);
            this.streetsape.initData(e), e.initOverCallBack(this.streetsape)
          }
        }, {
          key: "play",
          value: function () {}
        }, {
          key: "toFourNum",
          value: function (e) {
            for (var t = e.toString(); t.length < 4;) t = "0" + t;
            return t
          }
        }]), e
      }();
    window.InitStreetsapePlayer = function (e) {
      return new s(e)
    }
  },
  //6
  function (e, t, n) {
    "use strict";
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    var r = n(0),
      a = function () {
        function e() {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          this.params = {
            container: document.getElementById("pano"),
            name: "SceneViewer",
            dragDirectionMode: !0,
            isAutoRotate: !1,
            fullScreenDom: document.getElementById("pano"),
            maxChangeDistance: 3,
            wheelChangeMaxDistance: 5,
            verticalShift: 0,
            currentIndex: 0,
            spacingScale: 1,
            planeScale: 1,
            minPolarAngle: -90,
            maxPolarAngle: 90,
            minZoom: 30,
            maxZoom: 120,
            lineColor: 16776960,
            logo: {
              src: "",
              scale: 1
            },
            scenesArr: [],
            texture: {
              scene_icon_default: "images/tool/Scene_def.png",
              scene_icon_hover: "images/tool/Scene_hover.png",
              wheel_icon_default: "images/tool/Direction_def.png",
              wheel_icon_hover: "images/tool/Direction_hover.png",
              mouse_icon_default: "images/tool/Switching_def.png"
            },
            initOverCallBack: function () {},
            loadedCallBack: function () {},
            drawWebGLCallBack: function () {},
            sceneEventMoveCallBack: function (e) {},
            sceneEventDownCallBack: function (e) {},
            sceneEventUpCallBack: function (e) {},
            sceneEventClickCallBack: function (e) {},
            sceneResizeCallBack: function () {},
            fullScreenChangeCallBack: function () {}
          }, this.dop = new r
        }
        return i(e, [{
          key: "filterNormal",
          value: function (e) {
            return this.dop.cloneObj(this.params, e, !0), this.params
          }
        }, {
          key: "filterThree",
          value: function () {}
        }]), e
      }();
    e.exports = {
      Filter: a
    }
  },
  //7
  function (e, t, n) {
    "use strict";
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    var r = n(0),
      a = n(8),
      o = n(9),
      s = n(10),
      c = n(1),
      h = (new r, function () {
        function e() {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          this.player = null
        }
        return i(e, [{
          key: "initData",
          value: function (e) {
            this.settings = e, this.default = {
              texture: {
                scene_icon_default: (new THREE.TextureLoader).load(this.settings.texture.scene_icon_default),
                scene_icon_hover: (new THREE.TextureLoader).load(this.settings.texture.scene_icon_hover),
                wheel_icon_default: (new THREE.TextureLoader).load(this.settings.texture.wheel_icon_default),
                wheel_icon_hover: (new THREE.TextureLoader).load(this.settings.texture.wheel_icon_hover),
                mouse_icon_default: (new THREE.TextureLoader).load(this.settings.texture.mouse_icon_default)
              }
            
            },
             this.player = new a(e), this.control = new o(this.player), this.control.controls.minPolarAngle = (this.settings.minPolarAngle + 90) * Math.PI / 180, this.control.controls.maxPolarAngle = (this.settings.maxPolarAngle + 90) * Math.PI / 180, this.touch = new s(this.player);
            var t = this.settings.scenesArr;
            this.state = {
              currentScene: t[this.settings.currentIndex],
              showSphere: null
            }, this.addPanorama(), this.addPlane(), this.addWheel(), this.addBottomLogo(), this.addLigature(), this.updateWheel(), this.addTouch(), this.updateCameraAndLogoPosition(this.state.currentScene);
            var n = this.state.currentScene.getWorldPosition(new THREE.Vector3);
            this.state.showSphere.position.x = n.x, this.state.showSphere.position.z = n.z
          }
        }, {
          key: "addWheel",
          value: function () {
            var e = this,
              t = new THREE.Group;
            t.name = "wheel", t.position.set(0, -10, -20), t.rotation.set(-Math.PI / 2, 0, 0), e.player.cameraUi.add(t), e.wheel = t;
            for (var n = 0; n < 6; n++) {
              var i = new THREE.PlaneGeometry(1, 1);
              i.vertices.forEach(function (e) {
                e.y += 2
              });
              var r = new THREE.MeshBasicMaterial({
                  map: e.default.texture.wheel_icon_default,
                  transparent: !0
                }),
                a = new THREE.Mesh(i, r);
              a.userData = {}, a.rotation.z = 2 * -Math.PI / 6 * n + 2 * Math.PI, t.add(a)
            }
            e.control.controls.addEventListener("change", function () {
              var n = e.control.controls.getPolarAngle();
              n >= Math.PI / 2 && (t.children.forEach(function (e) {
                e.material.opacity = Math.PI / 4 * 3 - n
              }), Math.PI, n = Math.PI / 2), t.rotation.set(-n, 0, -e.control.controls.getAzimuthalAngle())
            }), e.touch.addEventListener("mousemove", function (n) {
              var i = new THREE.Raycaster;
              i.setFromCamera(n.mouse, e.player.cameraUi);
              var r = i.intersectObjects(t.children);
              t.children.forEach(function (t) {
                t.material.map = e.default.texture.wheel_icon_default
              }), r.length > 0 ? (e.plane.getObjectByName("mouse").visible = !1, r[0].object.material.map = e.default.texture.wheel_icon_hover) : e.plane.getObjectByName("mouse").visible = !0
            })
          }
        }, {
          key: "updateWheel",
          value: function () {
            var e = this,
              t = e.player.cameraUi.getObjectByName("wheel"),
              n = e.state.currentScene.getWorldPosition(new THREE.Vector3),
              i = [];
            i[0] = [], i[1] = [], i[2] = [], i[3] = [], i[4] = [], i[5] = [], e.plane.children.forEach(function (t) {
              if (t !== e.state.currentScene && "location" === t.name) {
                var r = t.getWorldPosition(new THREE.Vector3);
                r = r.sub(n);
                var a = Math.atan2(r.z, r.x);
                a < 0 && (a += 2 * Math.PI), a <= Math.PI / 3 ? i[2].push({
                  object: t,
                  distance: r.distanceTo(new THREE.Vector3)
                }) : a <= Math.PI / 3 * 2 ? i[3].push({
                  object: t,
                  distance: r.distanceTo(new THREE.Vector3)
                }) : a <= Math.PI / 3 * 3 ? i[4].push({
                  object: t,
                  distance: r.distanceTo(new THREE.Vector3)
                }) : a <= Math.PI / 3 * 4 ? i[5].push({
                  object: t,
                  distance: r.distanceTo(new THREE.Vector3)
                }) : a <= Math.PI / 3 * 5 ? i[0].push({
                  object: t,
                  distance: r.distanceTo(new THREE.Vector3)
                }) : a <= Math.PI / 3 * 6 && i[1].push({
                  object: t,
                  distance: r.distanceTo(new THREE.Vector3)
                })
              }
            });
            for (var r = 0; r < i.length; r++) i[r].sort(function (e, t) {
              return e.distance - t.distance
            }), i[r].length > 0 && i[r][0].distance / e.settings.spacingScale <= e.settings.wheelChangeMaxDistance ? (t.children[r].userData.changeTarget = i[r][0].object, t.children[r].visible = !0) : t.children[r].visible = !1
          }
        }, {
          key: "addPlane",
          value: function () {
            var e = this,
              t = e.settings,
              n = e.settings.scenesArr,
              i = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (var s, c = n[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                var h = s.value;
                i.push(new THREE.Vector3(h.posX, h.posY, h.posZ))
              }
            } catch (e) {
              a = !0, o = e
            } finally {
              try {
                !r && c.return && c.return()
              } finally {
                if (a) throw o
              }
            }
            var l = new THREE.Box3;
            l.setFromPoints(i);
            var u = new THREE.PlaneGeometry(1, 1);
            u.vertices = [new THREE.Vector3(1e4 * l.min.x, 0, 1e4 * l.max.z), new THREE.Vector3(1e4 * l.max.x, 0, 1e4 * l.max.z), new THREE.Vector3(1e4 * l.min.x, 0, 1e4 * l.min.z), new THREE.Vector3(1e4 * l.max.x, 0, 1e4 * l.min.z)];
            var d = new THREE.MeshBasicMaterial({
                color: 65535,
                side: THREE.DoubleSide,
                transparent: !0,
                opacity: 0,
                depthTest: !1
              }),
              p = new THREE.Mesh(u, d);
            p.scale.set(t.spacingScale, 1, t.spacingScale), p.position.y = t.verticalShift, p.name = "plane", e.plane = p;
            var f = 0;
            n.forEach(function (n) {
              var i = new THREE.CircleBufferGeometry(.5, 32),
                r = new THREE.MeshBasicMaterial({
                  depthTest: !1,
                  map: e.default.texture.scene_icon_default
                }),
                a = new THREE.Mesh(i, r);
              a.scale.set(t.planeScale, t.planeScale, 1), a.rotation.set(-Math.PI / 2, 0, 0), a.position.set(n.posX, 0, n.posZ), a.userData = n, a.userData.index = "" + f++, a.userData.object = a, a.name = "location", a.renderOrder = 100, p.add(a)
            }), e.state.currentScene = p.children[e.settings.currentIndex], e.hideCurrentHot(e.state.currentScene);
            var m = new THREE.CircleBufferGeometry(.5, 32),
              v = new THREE.MeshBasicMaterial({
                depthTest: !1,
                map: e.default.texture.mouse_icon_default
              }),
              g = new THREE.Mesh(m, v);
            g.name = "mouse", g.scale.set(t.planeScale, t.planeScale, 1), g.rotation.set(-Math.PI / 2, 0, 0), g.renderOrder = 100, e.control.controls.addEventListener("change", function () {
              g.rotation.z = e.control.controls.getAzimuthalAngle()
            }), p.add(g), e.player.scene.add(p), p.matrix.compose(p.position, p.quaternion, p.scale), p.matrixWorld.compose(p.position, p.quaternion, p.scale)
          }
        }, {
          key: "addPanorama",
          value: function () {
            var e = this,
              t = e.settings.scenesArr,
              n = new THREE.SphereGeometry(100, 64, 32, Math.PI),
              i = document.createElement("canvas"),
              r = i.getContext("2d"),
              a = new THREE.Texture(i);
            a.minFilter = THREE.LinearFilter, a.generateMipmaps = !1;
            var o = new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide,
                depthTest: !1,
                map: a
              }),
              s = new THREE.Mesh(n, o);
            s.renderOrder = 10, s.scale.x = -1, s.userData = {
              ctx: r,
              canvas: i
            }, e.player.scene.add(s);
            var c = document.createElement("canvas"),
              h = new THREE.MeshBasicMaterial({
                map: new THREE.Texture(c),
                depthTest: !1,
                side: THREE.DoubleSide
              });
            h.map.minFilter = THREE.LinearFilter, h.map.generateMipmaps = !1;
            var l = new THREE.Mesh(n, h);
            l.scale.x = -1, l.visible = !1, e.player.scene.add(l), l.userData = {
              ctx: c.getContext("2d"),
              canvas: c
            }, e.firstPano = s, e.endPano = l, e.state.showSphere = e.firstPano;
            var u = t[e.settings.currentIndex].sceneBlockModel,
              d = new Image;
            d.src = t[e.settings.currentIndex].sceneFilePath, d.onload = function () {
              i.width = u.sceneWidth, i.height = u.sceneHeight, r.drawImage(d, 0, 0, u.sceneWidth, u.sceneHeight), a.needsUpdate = !0, e.loadBlockImages(d)
            }
          }
        }, {
          key: "addBottomLogo",
          value: function () {
            var e = this,
              t = new THREE.CircleBufferGeometry(10, 64),
              n = new THREE.MeshBasicMaterial({
                transparent: !0,
                depthTest: !1
              }),
              i = new THREE.Mesh(t, n);
            i.rotation.x = -Math.PI / 2, i.position.y = -25, i.renderOrder = 1, e.player.scene.add(i), e.settings.logo && e.settings.logo.src || (i.visible = !1), e.logo = i, e.api_logo_set(e.settings.logo.src, e.settings.logo.scale), e.control.controls.addEventListener("change", function () {
              i.rotation.z = e.control.controls.getAzimuthalAngle()
            })
          }
        }, {
          key: "addLigature",
          value: function () {
            var e = new THREE.Group;
            this.player.scene.add(e), this.lines = e, e.material = new THREE.MeshBasicMaterial({
              color: this.settings.lineColor
            })
          }
        }, {
          key: "addTouch",
          value: function () {
            var e = this,
              t = e.plane,
              n = t.getObjectByName("mouse"),
              i = e.player.cameraUi.getObjectByName("wheel");
            e.touch.addEventListener("click", function (n) {
              var r = new THREE.Raycaster;
              r.setFromCamera(n.mouse, e.player.cameraUi);
              var a = r.intersectObjects(i.children);
              if (a.length > 0) e.changeScene(a[0].object.userData.changeTarget);
              else {
                var o = n.intersectObject(t);
                if (o.length > 0) {
                  var s = o[0].point,
                    c = s.clone();
                  t.worldToLocal(s);
                  var h = {
                    distance: -1,
                    obj: null
                  };
                  t.children.forEach(function (t) {
                    if ("location" === t.name && t !== e.state.currentScene) {
                      var n = s.clone().distanceTo(t.position);
                      (h.obj && h.distance > n || !h.obj) && (h.distance = n, h.obj = t)
                    }
                  }), h.distance <= e.settings.maxChangeDistance && e.inCamera(h.obj) ? e.changeScene(h.obj) : e.crashWall(c)
                }
              }
            }), e.touch.addEventListener("mousemove", function (e) {
              a(e)
            });
            var r = new THREE.Raycaster;

            function a(e) {
              var i = e.intersectObject(t);
              if (i.length > 0) {
                var r = i[0].point;
                t.worldToLocal(r), n.position.set(r.x, r.y, r.z)
              }
            }
            e.control.controls.addEventListener("change", function () {
              r.setFromCamera(e.touch.getMousePosition(), e.player.camera), a(r)
            })
          }
        }, {
          key: "loadBlockImages",
          value: function (e) {
            var t = this,
              n = t.state.currentScene.userData.sceneBlockModel,
              i = t.player.render.getContext(),
              r = i.getParameter(i.MAX_TEXTURE_SIZE);
            n.sceneWidth > r || n.sceneHeight > r ? n.scale = Math.max(n.sceneWidth / r, n.sceneHeight / r) : n.scale = 1;
            n.sceneWidth, n.scale;
            for (var a = n.sceneHeight / n.scale, o = n.fileBlockWidth / n.scale, s = n.fileBlockHeight / n.scale, c = t.state.currentScene, h = Math.ceil(n.sceneWidth / n.fileBlockWidth), l = Math.ceil(n.sceneHeight / n.fileBlockHeight), u = t.getSceneUV(), d = [], p = 0; p < h; p++)
              for (var f = 0; f < l; f++) d.push({
                x: p,
                y: f,
                xPos: (p + .5) / h,
                yPos: (f + .5) / l,
                minDistance: w(new THREE.Vector2((p + .5) / h, (f + .5) / l), u),
                src: n.fileBlockDir + p + "_" + f + ".jpg"
              });
            d.sort(function (e, t) {
              return e.minDistance - t.minDistance
            });
            var m = new THREE.Vector2,
              v = document.createElement("canvas"),
              g = v.getContext("2d");
            n.scale;
            for (var y = function (e) {
                (new THREE.ImageLoader).load(d[e].src, function (i) {
                  if (c === t.state.currentScene) {
                    v.width = Math.ceil(i.width / n.scale), v.height = Math.ceil(i.height / n.scale), g.drawImage(i, 0, 0, v.width, v.height);
                    var r = {
                      image: v
                    };
                    m.x = d[e].y * o, d[e].x === l - 1 ? m.y = 0 : m.y = (l - 2 - d[e].x) * s + a % s, t.player.render.copyTextureToTexture(m, r, t.state.showSphere.material.map)
                  }
                })
              }, x = 0; x < d.length; x++) y(x);

            function w(e, t) {
              var n = e.distanceTo(t);
              e.x = e.x + 1;
              var i = e.distanceTo(t);
              e.x = e.x - 2;
              var r = e.distanceTo(t);
              return Math.min(n, i, r)
            }
          }
        }, {
          key: "updateCameraAndLogoPosition",
          value: function (e) {
            var t = e.getWorldPosition(new THREE.Vector3);
            this.logo.position.x = t.x, this.logo.position.z = t.z, this.player.cameraWrap.position.x = t.x, this.player.cameraWrap.position.z = t.z
          }
        }, {
          key: "changeScene",
          value: function (e) {
            var t = this;
            t.api_hide_tool();
            var n = t.state.currentScene.getWorldPosition(new THREE.Vector3),
              i = e.getWorldPosition(new THREE.Vector3),
              r = i.clone().sub(n).add(i),
              a = void 0,
              o = void 0;
            t.state.showSphere === t.firstPano ? (a = t.firstPano, o = t.endPano) : (a = t.endPano, o = t.firstPano), t.state.showSphere = o, t.state.currentScene = e, t.updateWheel(), a.position.set(i.x, 0, i.z), a.material.transparent = !0, o.position.set(r.x, 0, r.z), t.updateCameraAndLogoPosition(e);
            var s = e.userData,
              h = new Image;
            h.src = s.sceneFilePath, h.onload = function () {
              t.control.controls.enabled = !1;
              var r = s.sceneBlockModel,
                l = t.player.render.getContext(),
                u = l.getParameter(l.MAX_TEXTURE_SIZE);
              r.sceneWidth > u || r.sceneHeight > u ? r.scale = Math.max(r.sceneWidth / u, r.sceneHeight / u) : r.scale = 1;
              var d = r.sceneWidth / r.scale,
                p = r.sceneHeight / r.scale;
              o.userData.canvas.width = d, o.userData.canvas.height = p, o.userData.ctx.drawImage(h, 0, 0, d, p), o.material.map.needsUpdate = !0, o.visible = !0;
              var f = {
                  moveX: a.position.x,
                  moveZ: a.position.z,
                  showX: o.position.x,
                  showZ: o.position.z,
                  opacity: 1
                },
                m = {
                  moveX: n.x,
                  moveZ: n.z,
                  showX: i.x,
                  showZ: i.z,
                  opacity: 0
                },
                v = new c.Tween(f).to(m, 1e3);
              v.easing(c.Easing.Quadratic.InOut), setTimeout(function () {
                v.start()
              }, 100), v.onUpdate(function () {
                a.position.x = f.moveX, a.position.z = f.moveZ, a.material.opacity = f.opacity, o.position.x = f.showX, o.position.z = f.showZ
              }), v.onComplete(function () {
                a.visible = !1, a.material.opacity = 1, a.material.transparent = !1, o.material.transparent = !1, c.remove(v), t.loadBlockImages(h), t.hideCurrentHot(e), t.api_show_tool(), t.control.controls.enabled = !0
              })
            }
          }
        }, {
          key: "getSceneUV",
          value: function () {
            var e = new THREE.Raycaster;
            e.setFromCamera(new THREE.Vector2, this.player.camera);
            var t = e.intersectObject(this.state.showSphere);
            if (t.length > 0) return t[0].uv.y = 1 - t[0].uv.y, t[0].uv
          }
        }, {
          key: "hideCurrentHot",
          value: function (e) {
            this.plane.children.forEach(function (e) {
              e.visible = !0
            }), e.visible = !1
          }
        }, {
          key: "crashWall",
          value: function (e) {
            var t = this,
              n = t.state.showSphere,
              i = e.clone().sub(n.position.clone()).normalize().negate();
            i.multiplyScalar(15).add(n.position.clone());
            var r = n.position.clone(),
              a = new c.Tween(r).to(i, 300);
            a.easing(c.Easing.Quadratic.InOut), a.onUpdate(s);
            var o = new c.Tween(r).to(n.position.clone(), 300);

            function s() {
              n.position.set(r.x, r.y, r.z)
            }
            o.easing(c.Easing.Quadratic.InOut), o.onUpdate(s), a.chain(o), o.onComplete(function () {
              c.remove(a), c.remove(o), t.plane.visible = !0
            }), a.start(), t.plane.visible = !1
          }
        }, {
          key: "inCamera",
          value: function (e) {
            var t = new THREE.Frustum,
              n = new THREE.Matrix4;
            return n.multiplyMatrices(this.player.camera.projectionMatrix, this.player.camera.matrixWorldInverse), t.setFromMatrix(n), t.intersectsObject(e)
          }
        }, {
          key: "setDisplayByName",
          value: function (e, t) {
            this.plane.children.forEach(function (n) {
              "location" === n.name && n.userData.index == e && (n.visible = t)
            })
          }
        }, {
          key: "getScenePTF",
          value: function () {
            return {
              pan: 180 * this.control.controls.getAzimuthalAngle() / Math.PI,
              tilt: 180 * this.control.controls.getPolarAngle() / Math.PI - 90,
              fov: this.player.camera.fov
            }
          }
        }, {
          key: "updateResize",
          value: function () {
            this.player.updateResize()
          }
        }, {
          key: "downLoadImage",
          value: function (e) {
            var t = document.createElement("a");
            t.href = this.player.render.domElement.toDataURL(), t.download = e || +new Date, t.click()
          }
        }, {
          key: "api_logo_set",
          value: function (e, t) {
            if (e) {
              var n = this.logo.material,
                i = new Image;
              i.src = e, i.onload = function () {
                var e = document.createElement("canvas"),
                  t = Math.max(i.width, i.height);
                e.width = e.height = t;
                var r = e.getContext("2d");
                i.width > i.height ? r.drawImage(i, 0, (i.width - i.height) / 2, i.width, i.height) : i.height > i.width ? r.drawImage(i, (i.height - i.width) / 2, 0, i.width, i.height) : r.drawImage(i, 0, 0, t, t), n.map ? (n.map.image = e, n.map.needsUpdate = !0) : (n.map = new THREE.Texture(e), n.map.needsUpdate = !0, n.needsUpdate = !0)
              }
            }
            t && this.logo.scale.set(t, t, t)
          }
        }, {
          key: "api_logo_show",
          value: function (e) {
            this.logo.visible = e
          }
        }, {
          key: "api_hide_tool",
          value: function () {
            this.plane.visible = this.lines.visible = this.wheel.visible = !1
          }
        }, {
          key: "api_show_tool",
          value: function () {
            this.plane.visible = this.lines.visible = this.wheel.visible = !0
          }
        }, {
          key: "api_get_scene_byId",
          value: function (e) {
            var t = !0,
              n = !1,
              i = void 0;
            try {
              for (var r, a = this.plane.children[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                var o = r.value;
                if ("location" === o.name && o.userData.sceneId == e) return o.userData
              }
            } catch (e) {
              n = !0, i = e
            } finally {
              try {
                !t && a.return && a.return()
              } finally {
                if (n) throw i
              }
            }
            return null
          }
        }, {
          key: "api_get_scene_byName",
          value: function (e) {
            var t = !0,
              n = !1,
              i = void 0;
            try {
              for (var r, a = this.plane.children[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                var o = r.value;
                if ("location" === o.name && o.userData.sceneName == e) return o.userData
              }
            } catch (e) {
              n = !0, i = e
            } finally {
              try {
                !t && a.return && a.return()
              } finally {
                if (n) throw i
              }
            }
            return null
          }
        }, {
          key: "api_set_ligature",
          value: function (e) {
            var t = this,
              n = t.api_get_scene_byId(e);
            n && (n = n.object, t.api_remove_ligature(), this.plane.children.forEach(function (i) {
              if ("location" === i.name && i.userData.sceneId !== e) {
                var r = new THREE.Geometry;
                r.vertices.push(n.getWorldPosition(new THREE.Vector3), i.getWorldPosition(new THREE.Vector3));
                var a = new THREE.Line(r, t.lines.material);
                a.renderOrder = 99, t.lines.add(a)
              }
            }))
          }
        }, {
          key: "api_remove_ligature",
          value: function () {
            for (var e = this.lines.children.length - 1; e >= 0; e--) this.lines.children[e].geometry.dispose(), this.lines.remove(this.lines.children[e])
          }
        }]), e
      }());
    e.exports = {
      Streetsape: h
    }
  },
  //8
  function (e, t, n) {
    "use strict";
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    n(0);
    var r = n(1),
      a = function () {
        function e(t) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var n = this;
          console.log(n);
          n.settings = t, n.container = n.settings.container, n.containerWidth = n.container.offsetWidth, n.containerHeight = n.container.offsetHeight, n.render = null, n.scene = null, n.cameraWrap = new THREE.Group, n.camera = null, n.group = null, window.addEventListener("resize", function () {
            n.updateResize()
          }), n.initRender(), n.initScene(), n.initCamera(), n.initAnimation()
        }
        return i(e, [{
          key: "initRender",
          value: function () {
            var e = new THREE.WebGLRenderer({
              antialias: !0,
              preserveDrawingBuffer: !0
            });
            e.setPixelRatio(window.devicePixelRatio), e.setSize(this.containerWidth, this.containerHeight), e.autoClear = !1, e.sortObjects = !0, this.container.appendChild(e.domElement), this.render = e
          }
        }, {
          key: "initScene",
          value: function () {
            this.scene = new THREE.Scene, this.group = new THREE.Group, this.scene.add(this.group), this.sceneUi = new THREE.Scene
          }
        }, {
          key: "initCamera",
          value: function () {
            var e = new THREE.PerspectiveCamera(60, this.containerWidth / this.containerHeight, .1, 1e3);
            e.position.set(0, 0, .1), this.cameraWrap.add(e), this.scene.add(this.cameraWrap), this.camera = e, this.cameraUi = new THREE.PerspectiveCamera(60, this.containerWidth / this.containerHeight, .1, 1e3), this.cameraUi.position.set(0, 0, .1), this.sceneUi.add(this.cameraUi)
          }
        }, {
          key: "addStats",
          value: function () {
            var e = this,
              t = document.createElement("script");
            document.head.appendChild(t), t.src = "js/stats.min.js", t.onload = function () {
              e.stats = new Stats, e.container.appendChild(e.stats.dom)
            }
          }
        }, {
          key: "addHelper",
          value: function () {
            var e = new THREE.AxesHelper(50);
            this.scene.add(e)
          }
        }, {
          key: "draw",
          value: function () {
            this.render.render(this.scene, this.camera), this.render.clear(!1, !0, !1), this.render.render(this.sceneUi, this.cameraUi)
          }
        }, {
          key: "initAnimation",
          value: function () {
            var e = this;
            ! function t() {
              e.draw(), e.stats && e.stats.update(), e.control && e.control.controls.update(), r.update(), requestAnimationFrame(t)
            }()
          }
        }, {
          key: "updateResize",
          value: function () {
            this.containerWidth = this.container.offsetWidth, this.containerHeight = this.container.offsetHeight, this.camera.aspect = this.containerWidth / this.containerHeight, this.camera.updateProjectionMatrix(), this.cameraUi.aspect = this.containerWidth / this.containerHeight, this.cameraUi.updateProjectionMatrix(), this.render.setSize(this.containerWidth, this.containerHeight)
          }
        }]), e
      }();
    e.exports = a
  },
  //9
  function (e, t, n) {
    "use strict";
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    var r = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        this.player = t, this.player.control = this, this.settings = t.settings, this.initControl()
      }
      return i(e, [{
        key: "initControl",
        value: function () {
          var e = new THREE.OrbitControls(this.player.camera, this.player.render.domElement);
          this.controls = e, e.enabled = !0, e.target = new THREE.Vector3, e.minDistance = 0, e.maxDistance = 1 / 0, e.minZoom = this.settings.minZoom, e.maxZoom = this.settings.maxZoom, e.minPolarAngle = 0, e.maxPolarAngle = Math.PI, e.minAzimuthAngle = -1 / 0, e.maxAzimuthAngle = 1 / 0, e.enableDamping = !0, e.dampingFactor = .1, e.enableZoom = !0, e.zoomSpeed = 3, e.enableRotate = !0, e.rotateSpeed = -.05, e.enablePan = !0, e.panSpeed = 1, e.screenSpacePanning = !1, e.keyPanSpeed = 7, e.autoRotate = !1, e.autoRotateSpeed = 2, e.enableKeys = !0
        }
      }]), e
    }();
    e.exports = r
  },
  //10
  function (e, t, n) {
    "use strict";
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    var r = n(11).ArrayPro,
      a = n(0),
      o = function () {
        function e(t) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          this.player = t, this.settings = t.settings, this.dop = new a, this.mouse = new THREE.Vector2, this.clickList = new r, this.mouseMoveList = new r, this.addClick()
        }
        return i(e, [{
          key: "addClick",
          value: function () {
            var e = this,
              t = new THREE.Raycaster,
              n = e.mouse,
              i = e.player.render.domElement,
              r = e.player.camera;

            function a(a) {
              var o = i.getBoundingClientRect().left,
                s = i.getBoundingClientRect().top,
                c = "pc" === e.dop.browserRedirect() ? a.clientX - o : a.touches[0].clientX - o,
                h = "pc" === e.dop.browserRedirect() ? a.clientY - s : a.touches[0].clientY - s;
              n.x = c / i.offsetWidth * 2 - 1, n.y = -h / i.offsetHeight * 2 + 1, t.setFromCamera(n, r), t.mouse = n
            }
            e.dop.$(i).on("tap", function (n) {
              a(n), e.clickList.forEach(function (e) {
                e(t)
              })
            }), e.dop.$(i).on("move", function (n) {
              a(n), e.mouseMoveList.forEach(function (e) {
                e(t)
              })
            })
          }
        }, {
          key: "addEventListener",
          value: function (e, t) {
            switch (e) {
              case "click":
                this.clickList.add(t);
                break;
              case "mousemove":
                this.mouseMoveList.add(t)
            }
          }
        }, {
          key: "removeEventListener",
          value: function (e, t) {
            switch (e) {
              case "click":
                this.clickList.remove(t);
                break;
              case "mousemove":
                this.mouseMoveList.remove(t)
            }
          }
        }, {
          key: "getMousePosition",
          value: function () {
            return this.mouse
          }
        }]), e
      }();
    e.exports = o
  },
  //11
  function (e, t, n) {
    "use strict";
    var i = function (e) {
      function t() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var e = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.add = function (e) {
          this.remove(e), this.push(e)
        }, e.remove = function (e) {
          for (var t = this.length - 1; t >= 0; t--) this[t] === e && this.splice(t, 1)
        }, e
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, Array), t
    }();
    e.exports = {
      ArrayPro: i
    }
  }
]);