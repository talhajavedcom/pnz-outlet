//==========================   main.js  ============================




//==========================   Glightbox.js  ============================

!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t = t || self).GLightbox = e());
  })(this, function () {
    "use strict";
    function t(e) {
      return (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(e);
    }
    function e(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function n(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function s(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) {
            for (var e = 0, i = new Array(t.length); e < t.length; e++)
              i[e] = t[e];
            return i;
          }
        })(t) ||
        (function (t) {
          if (
            Symbol.iterator in Object(t) ||
            "[object Arguments]" === Object.prototype.toString.call(t)
          )
            return Array.from(t);
        })(t) ||
        (function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        })()
      );
    }
    function o(t) {
      return Math.sqrt(t.x * t.x + t.y * t.y);
    }
    function l(t, e) {
      var i = (function (t, e) {
        var i = o(t) * o(e);
        if (0 === i) return 0;
        var n =
          (function (t, e) {
            return t.x * e.x + t.y * e.y;
          })(t, e) / i;
        return n > 1 && (n = 1), Math.acos(n);
      })(t, e);
      return (
        (function (t, e) {
          return t.x * e.y - e.x * t.y;
        })(t, e) > 0 && (i *= -1),
        (180 * i) / Math.PI
      );
    }
    var r = (function () {
      function t(i) {
        e(this, t), (this.handlers = []), (this.el = i);
      }
      return (
        n(t, [
          {
            key: "add",
            value: function (t) {
              this.handlers.push(t);
            },
          },
          {
            key: "del",
            value: function (t) {
              t || (this.handlers = []);
              for (var e = this.handlers.length; e >= 0; e--)
                this.handlers[e] === t && this.handlers.splice(e, 1);
            },
          },
          {
            key: "dispatch",
            value: function () {
              for (var t = 0, e = this.handlers.length; t < e; t++) {
                var i = this.handlers[t];
                "function" == typeof i && i.apply(this.el, arguments);
              }
            },
          },
        ]),
        t
      );
    })();
    function a(t, e) {
      var i = new r(t);
      return i.add(e), i;
    }
    var h = (function () {
        function t(i, n) {
          e(this, t),
            (this.element = "string" == typeof i ? document.querySelector(i) : i),
            (this.start = this.start.bind(this)),
            (this.move = this.move.bind(this)),
            (this.end = this.end.bind(this)),
            (this.cancel = this.cancel.bind(this)),
            this.element.addEventListener("touchstart", this.start, !1),
            this.element.addEventListener("touchmove", this.move, !1),
            this.element.addEventListener("touchend", this.end, !1),
            this.element.addEventListener("touchcancel", this.cancel, !1),
            (this.preV = { x: null, y: null }),
            (this.pinchStartLen = null),
            (this.zoom = 1),
            (this.isDoubleTap = !1);
          var s = function () {};
          (this.rotate = a(this.element, n.rotate || s)),
            (this.touchStart = a(this.element, n.touchStart || s)),
            (this.multipointStart = a(this.element, n.multipointStart || s)),
            (this.multipointEnd = a(this.element, n.multipointEnd || s)),
            (this.pinch = a(this.element, n.pinch || s)),
            (this.swipe = a(this.element, n.swipe || s)),
            (this.tap = a(this.element, n.tap || s)),
            (this.doubleTap = a(this.element, n.doubleTap || s)),
            (this.longTap = a(this.element, n.longTap || s)),
            (this.singleTap = a(this.element, n.singleTap || s)),
            (this.pressMove = a(this.element, n.pressMove || s)),
            (this.twoFingerPressMove = a(
              this.element,
              n.twoFingerPressMove || s
            )),
            (this.touchMove = a(this.element, n.touchMove || s)),
            (this.touchEnd = a(this.element, n.touchEnd || s)),
            (this.touchCancel = a(this.element, n.touchCancel || s)),
            (this._cancelAllHandler = this.cancelAll.bind(this)),
            window.addEventListener("scroll", this._cancelAllHandler),
            (this.delta = null),
            (this.last = null),
            (this.now = null),
            (this.tapTimeout = null),
            (this.singleTapTimeout = null),
            (this.longTapTimeout = null),
            (this.swipeTimeout = null),
            (this.x1 = this.x2 = this.y1 = this.y2 = null),
            (this.preTapPosition = { x: null, y: null });
        }
        return (
          n(t, [
            {
              key: "start",
              value: function (t) {
                if (t.touches) {
                  (this.now = Date.now()),
                    (this.x1 = t.touches[0].pageX),
                    (this.y1 = t.touches[0].pageY),
                    (this.delta = this.now - (this.last || this.now)),
                    this.touchStart.dispatch(t, this.element),
                    null !== this.preTapPosition.x &&
                      ((this.isDoubleTap =
                        this.delta > 0 &&
                        this.delta <= 250 &&
                        Math.abs(this.preTapPosition.x - this.x1) < 30 &&
                        Math.abs(this.preTapPosition.y - this.y1) < 30),
                      this.isDoubleTap && clearTimeout(this.singleTapTimeout)),
                    (this.preTapPosition.x = this.x1),
                    (this.preTapPosition.y = this.y1),
                    (this.last = this.now);
                  var e = this.preV;
                  if (t.touches.length > 1) {
                    this._cancelLongTap(), this._cancelSingleTap();
                    var i = {
                      x: t.touches[1].pageX - this.x1,
                      y: t.touches[1].pageY - this.y1,
                    };
                    (e.x = i.x),
                      (e.y = i.y),
                      (this.pinchStartLen = o(e)),
                      this.multipointStart.dispatch(t, this.element);
                  }
                  (this._preventTap = !1),
                    (this.longTapTimeout = setTimeout(
                      function () {
                        this.longTap.dispatch(t, this.element),
                          (this._preventTap = !0);
                      }.bind(this),
                      750
                    ));
                }
              },
            },
            {
              key: "move",
              value: function (t) {
                if (t.touches) {
                  var e = this.preV,
                    i = t.touches.length,
                    n = t.touches[0].pageX,
                    s = t.touches[0].pageY;
                  if (((this.isDoubleTap = !1), i > 1)) {
                    var r = t.touches[1].pageX,
                      a = t.touches[1].pageY,
                      h = {
                        x: t.touches[1].pageX - n,
                        y: t.touches[1].pageY - s,
                      };
                    null !== e.x &&
                      (this.pinchStartLen > 0 &&
                        ((t.zoom = o(h) / this.pinchStartLen),
                        this.pinch.dispatch(t, this.element)),
                      (t.angle = l(h, e)),
                      this.rotate.dispatch(t, this.element)),
                      (e.x = h.x),
                      (e.y = h.y),
                      null !== this.x2 && null !== this.sx2
                        ? ((t.deltaX = (n - this.x2 + r - this.sx2) / 2),
                          (t.deltaY = (s - this.y2 + a - this.sy2) / 2))
                        : ((t.deltaX = 0), (t.deltaY = 0)),
                      this.twoFingerPressMove.dispatch(t, this.element),
                      (this.sx2 = r),
                      (this.sy2 = a);
                  } else {
                    if (null !== this.x2) {
                      (t.deltaX = n - this.x2), (t.deltaY = s - this.y2);
                      var c = Math.abs(this.x1 - this.x2),
                        d = Math.abs(this.y1 - this.y2);
                      (c > 10 || d > 10) && (this._preventTap = !0);
                    } else (t.deltaX = 0), (t.deltaY = 0);
                    this.pressMove.dispatch(t, this.element);
                  }
                  this.touchMove.dispatch(t, this.element),
                    this._cancelLongTap(),
                    (this.x2 = n),
                    (this.y2 = s),
                    i > 1 && t.preventDefault();
                }
              },
            },
            {
              key: "end",
              value: function (t) {
                if (t.changedTouches) {
                  this._cancelLongTap();
                  var e = this;
                  t.touches.length < 2 &&
                    (this.multipointEnd.dispatch(t, this.element),
                    (this.sx2 = this.sy2 = null)),
                    (this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
                    (this.y2 && Math.abs(this.y1 - this.y2) > 30)
                      ? ((t.direction = this._swipeDirection(
                          this.x1,
                          this.x2,
                          this.y1,
                          this.y2
                        )),
                        (this.swipeTimeout = setTimeout(function () {
                          e.swipe.dispatch(t, e.element);
                        }, 0)))
                      : ((this.tapTimeout = setTimeout(function () {
                          e._preventTap || e.tap.dispatch(t, e.element),
                            e.isDoubleTap &&
                              (e.doubleTap.dispatch(t, e.element),
                              (e.isDoubleTap = !1));
                        }, 0)),
                        e.isDoubleTap ||
                          (e.singleTapTimeout = setTimeout(function () {
                            e.singleTap.dispatch(t, e.element);
                          }, 250))),
                    this.touchEnd.dispatch(t, this.element),
                    (this.preV.x = 0),
                    (this.preV.y = 0),
                    (this.zoom = 1),
                    (this.pinchStartLen = null),
                    (this.x1 = this.x2 = this.y1 = this.y2 = null);
                }
              },
            },
            {
              key: "cancelAll",
              value: function () {
                (this._preventTap = !0),
                  clearTimeout(this.singleTapTimeout),
                  clearTimeout(this.tapTimeout),
                  clearTimeout(this.longTapTimeout),
                  clearTimeout(this.swipeTimeout);
              },
            },
            {
              key: "cancel",
              value: function (t) {
                this.cancelAll(), this.touchCancel.dispatch(t, this.element);
              },
            },
            {
              key: "_cancelLongTap",
              value: function () {
                clearTimeout(this.longTapTimeout);
              },
            },
            {
              key: "_cancelSingleTap",
              value: function () {
                clearTimeout(this.singleTapTimeout);
              },
            },
            {
              key: "_swipeDirection",
              value: function (t, e, i, n) {
                return Math.abs(t - e) >= Math.abs(i - n)
                  ? t - e > 0
                    ? "Left"
                    : "Right"
                  : i - n > 0
                  ? "Up"
                  : "Down";
              },
            },
            {
              key: "on",
              value: function (t, e) {
                this[t] && this[t].add(e);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                this[t] && this[t].del(e);
              },
            },
            {
              key: "destroy",
              value: function () {
                return (
                  this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
                  this.tapTimeout && clearTimeout(this.tapTimeout),
                  this.longTapTimeout && clearTimeout(this.longTapTimeout),
                  this.swipeTimeout && clearTimeout(this.swipeTimeout),
                  this.element.removeEventListener("touchstart", this.start),
                  this.element.removeEventListener("touchmove", this.move),
                  this.element.removeEventListener("touchend", this.end),
                  this.element.removeEventListener("touchcancel", this.cancel),
                  this.rotate.del(),
                  this.touchStart.del(),
                  this.multipointStart.del(),
                  this.multipointEnd.del(),
                  this.pinch.del(),
                  this.swipe.del(),
                  this.tap.del(),
                  this.doubleTap.del(),
                  this.longTap.del(),
                  this.singleTap.del(),
                  this.pressMove.del(),
                  this.twoFingerPressMove.del(),
                  this.touchMove.del(),
                  this.touchEnd.del(),
                  this.touchCancel.del(),
                  (this.preV =
                    this.pinchStartLen =
                    this.zoom =
                    this.isDoubleTap =
                    this.delta =
                    this.last =
                    this.now =
                    this.tapTimeout =
                    this.singleTapTimeout =
                    this.longTapTimeout =
                    this.swipeTimeout =
                    this.x1 =
                    this.x2 =
                    this.y1 =
                    this.y2 =
                    this.preTapPosition =
                    this.rotate =
                    this.touchStart =
                    this.multipointStart =
                    this.multipointEnd =
                    this.pinch =
                    this.swipe =
                    this.tap =
                    this.doubleTap =
                    this.longTap =
                    this.singleTap =
                    this.pressMove =
                    this.touchMove =
                    this.touchEnd =
                    this.touchCancel =
                    this.twoFingerPressMove =
                      null),
                  window.removeEventListener("scroll", this._cancelAllHandler),
                  null
                );
              },
            },
          ]),
          t
        );
      })(),
      c = (function () {
        function t(i, n) {
          var s = this,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          if (
            (e(this, t),
            (this.img = i),
            (this.slide = n),
            (this.onclose = o),
            this.img.setZoomEvents)
          )
            return !1;
          (this.active = !1),
            (this.zoomedIn = !1),
            (this.dragging = !1),
            (this.currentX = null),
            (this.currentY = null),
            (this.initialX = null),
            (this.initialY = null),
            (this.xOffset = 0),
            (this.yOffset = 0),
            this.img.addEventListener(
              "mousedown",
              function (t) {
                return s.dragStart(t);
              },
              !1
            ),
            this.img.addEventListener(
              "mouseup",
              function (t) {
                return s.dragEnd(t);
              },
              !1
            ),
            this.img.addEventListener(
              "mousemove",
              function (t) {
                return s.drag(t);
              },
              !1
            ),
            this.img.addEventListener(
              "click",
              function (t) {
                if (!s.zoomedIn) return s.zoomIn();
                s.zoomedIn && !s.dragging && s.zoomOut();
              },
              !1
            ),
            (this.img.setZoomEvents = !0);
        }
        return (
          n(t, [
            {
              key: "zoomIn",
              value: function () {
                var t = this.widowWidth();
                if (!(this.zoomedIn || t <= 768)) {
                  var e = this.img;
                  if (
                    (e.setAttribute("data-style", e.getAttribute("style")),
                    (e.style.maxWidth = e.naturalWidth + "px"),
                    (e.style.maxHeight = e.naturalHeight + "px"),
                    e.naturalWidth > t)
                  ) {
                    var i = t / 2 - e.naturalWidth / 2;
                    this.setTranslate(this.img.parentNode, i, 0);
                  }
                  this.slide.classList.add("zoomed"), (this.zoomedIn = !0);
                }
              },
            },
            {
              key: "zoomOut",
              value: function () {
                this.img.parentNode.setAttribute("style", ""),
                  this.img.setAttribute(
                    "style",
                    this.img.getAttribute("data-style")
                  ),
                  this.slide.classList.remove("zoomed"),
                  (this.zoomedIn = !1),
                  (this.currentX = null),
                  (this.currentY = null),
                  (this.initialX = null),
                  (this.initialY = null),
                  (this.xOffset = 0),
                  (this.yOffset = 0),
                  this.onclose &&
                    "function" == typeof this.onclose &&
                    this.onclose();
              },
            },
            {
              key: "dragStart",
              value: function (t) {
                t.preventDefault(),
                  this.zoomedIn
                    ? ("touchstart" === t.type
                        ? ((this.initialX = t.touches[0].clientX - this.xOffset),
                          (this.initialY = t.touches[0].clientY - this.yOffset))
                        : ((this.initialX = t.clientX - this.xOffset),
                          (this.initialY = t.clientY - this.yOffset)),
                      t.target === this.img &&
                        ((this.active = !0), this.img.classList.add("dragging")))
                    : (this.active = !1);
              },
            },
            {
              key: "dragEnd",
              value: function (t) {
                var e = this;
                t.preventDefault(),
                  (this.initialX = this.currentX),
                  (this.initialY = this.currentY),
                  (this.active = !1),
                  setTimeout(function () {
                    (e.dragging = !1),
                      (e.img.isDragging = !1),
                      e.img.classList.remove("dragging");
                  }, 100);
              },
            },
            {
              key: "drag",
              value: function (t) {
                this.active &&
                  (t.preventDefault(),
                  "touchmove" === t.type
                    ? ((this.currentX = t.touches[0].clientX - this.initialX),
                      (this.currentY = t.touches[0].clientY - this.initialY))
                    : ((this.currentX = t.clientX - this.initialX),
                      (this.currentY = t.clientY - this.initialY)),
                  (this.xOffset = this.currentX),
                  (this.yOffset = this.currentY),
                  (this.img.isDragging = !0),
                  (this.dragging = !0),
                  this.setTranslate(this.img, this.currentX, this.currentY));
              },
            },
            {
              key: "onMove",
              value: function (t) {
                if (this.zoomedIn) {
                  var e = t.clientX - this.img.naturalWidth / 2,
                    i = t.clientY - this.img.naturalHeight / 2;
                  this.setTranslate(this.img, e, i);
                }
              },
            },
            {
              key: "setTranslate",
              value: function (t, e, i) {
                t.style.transform = "translate3d(" + e + "px, " + i + "px, 0)";
              },
            },
            {
              key: "widowWidth",
              value: function () {
                return (
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth
                );
              },
            },
          ]),
          t
        );
      })(),
      d =
        "navigator" in window &&
        window.navigator.userAgent.match(
          /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
        ),
      u =
        null !== d ||
        void 0 !== document.createTouch ||
        "ontouchstart" in window ||
        "onmsgesturechange" in window ||
        navigator.msMaxTouchPoints,
      g = document.getElementsByTagName("html")[0],
      p = (function () {
        var t,
          e = document.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (t in i) if (void 0 !== e.style[t]) return i[t];
      })(),
      v = (function () {
        var t,
          e = document.createElement("fakeelement"),
          i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd",
          };
        for (t in i) if (void 0 !== e.style[t]) return i[t];
      })(),
      f = Date.now(),
      m = {},
      y = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plyr: {
          css: "https://cdn.plyr.io/3.5.6/plyr.css",
          js: "https://cdn.plyr.io/3.5.6/plyr.js",
          config: {
            ratio: "16:9",
            youtube: { noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3 },
            vimeo: { byline: !1, portrait: !1, title: !1, transparent: !1 },
          },
        },
        openEffect: "zoomIn",
        closeEffect: "zoomOut",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        lightboxHtml: "",
        cssEfects: {
          fade: { in: "fadeIn", out: "fadeOut" },
          zoom: { in: "zoomIn", out: "zoomOut" },
          slide: { in: "slideInRight", out: "slideOutLeft" },
          slide_back: { in: "slideInLeft", out: "slideOutRight" },
        },
        svg: {
          close:
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
          next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
          prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
        },
      };
    y.slideHtml =
      '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
    y.lightboxHtml =
      '<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2">{closeSVG}</button>\n</div>\n</div>';
    var b = {
      href: "",
      title: "",
      type: "",
      description: "",
      descPosition: "",
      effect: "",
      width: "",
      height: "",
      node: !1,
      content: !1,
    };
    function x() {
      var t = {},
        e = !0,
        i = 0,
        n = arguments.length;
      "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
        ((e = arguments[0]), i++);
      for (
        var s = function (i) {
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) &&
              (e && "[object Object]" === Object.prototype.toString.call(i[n])
                ? (t[n] = x(!0, t[n], i[n]))
                : (t[n] = i[n]));
        };
        i < n;
        i++
      ) {
        s(arguments[i]);
      }
      return t;
    }
    var w = {
      isFunction: function (t) {
        return "function" == typeof t;
      },
      isString: function (t) {
        return "string" == typeof t;
      },
      isNode: function (t) {
        return !(!t || !t.nodeType || 1 != t.nodeType);
      },
      isArray: function (t) {
        return Array.isArray(t);
      },
      isArrayLike: function (t) {
        return t && t.length && isFinite(t.length);
      },
      isObject: function (e) {
        return (
          "object" === t(e) && null != e && !w.isFunction(e) && !w.isArray(e)
        );
      },
      isNil: function (t) {
        return null == t;
      },
      has: function (t, e) {
        return null !== t && hasOwnProperty.call(t, e);
      },
      size: function (t) {
        if (w.isObject(t)) {
          if (t.keys) return t.keys().length;
          var e = 0;
          for (var i in t) w.has(t, i) && e++;
          return e;
        }
        return t.length;
      },
      isNumber: function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      },
    };
    function S(t, e) {
      if (
        ((w.isNode(t) || t === window || t === document) && (t = [t]),
        w.isArrayLike(t) || w.isObject(t) || (t = [t]),
        0 != w.size(t))
      )
        if (w.isArrayLike(t) && !w.isObject(t))
          for (
            var i = t.length, n = 0;
            n < i && !1 !== e.call(t[n], t[n], n, t);
            n++
          );
        else if (w.isObject(t))
          for (var s in t)
            if (w.has(t, s) && !1 === e.call(t[s], t[s], s, t)) break;
    }
    function T(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        n = (t[f] = t[f] || []),
        s = { all: n, evt: null, found: null };
      return (
        e &&
          i &&
          w.size(n) > 0 &&
          S(n, function (t, n) {
            if (t.eventName == e && t.fn.toString() == i.toString())
              return (s.found = !0), (s.evt = n), !1;
          }),
        s
      );
    }
    function k(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = e.onElement,
        n = e.withCallback,
        s = e.avoidDuplicate,
        o = void 0 === s || s,
        l = e.once,
        r = void 0 !== l && l,
        a = e.useCapture,
        h = void 0 !== a && a,
        c = arguments.length > 2 ? arguments[2] : void 0,
        d = i || [];
      function u(t) {
        w.isFunction(n) && n.call(c, t, this), r && u.destroy();
      }
      return (
        w.isString(d) && (d = document.querySelectorAll(d)),
        (u.destroy = function () {
          S(d, function (e) {
            var i = T(e, t, u);
            i.found && i.all.splice(i.evt, 1),
              e.removeEventListener && e.removeEventListener(t, u, h);
          });
        }),
        S(d, function (e) {
          var i = T(e, t, u);
          ((e.addEventListener && o && !i.found) || !o) &&
            (e.addEventListener(t, u, h), i.all.push({ eventName: t, fn: u }));
        }),
        u
      );
    }
    function E(t, e) {
      S(e.split(" "), function (e) {
        return t.classList.add(e);
      });
    }
    function A(t, e) {
      S(e.split(" "), function (e) {
        return t.classList.remove(e);
      });
    }
    function C(t, e) {
      return t.classList.contains(e);
    }
    function L(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!t || "" === e) return !1;
      if ("none" == e) return w.isFunction(i) && i(), !1;
      var n = e.split(" ");
      S(n, function (e) {
        E(t, "g" + e);
      }),
        k(v, {
          onElement: t,
          avoidDuplicate: !1,
          once: !0,
          withCallback: function (t, e) {
            S(n, function (t) {
              A(e, "g" + t);
            }),
              w.isFunction(i) && i();
          },
        });
    }
    function N(t) {
      var e = document.createDocumentFragment(),
        i = document.createElement("div");
      for (i.innerHTML = t; i.firstChild; ) e.appendChild(i.firstChild);
      return e;
    }
    function I(t, e) {
      for (; t !== document.body; ) {
        if (
          "function" == typeof (t = t.parentElement).matches
            ? t.matches(e)
            : t.msMatchesSelector(e)
        )
          return t;
      }
    }
    function O(t) {
      t.style.display = "block";
    }
    function M(t) {
      t.style.display = "none";
    }
    function q() {
      return {
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
      };
    }
    function z(t) {
      if (C(t.target, "plyr--html5")) {
        var e = I(t.target, ".gslide-media");
        "enterfullscreen" == t.type && E(e, "fullscreen"),
          "exitfullscreen" == t.type && A(e, "fullscreen");
      }
    }
    function P(t) {
      return w.isNumber(t) ? "".concat(t, "px") : t;
    }
    function D(t, e) {
      var i = "video" == t.type ? P(e.videosWidth) : P(e.width),
        n = P(e.height);
      return (
        (t.width = w.has(t, "width") && "" !== t.width ? P(t.width) : i),
        (t.height = w.has(t, "height") && "" !== t.height ? P(t.height) : n),
        t
      );
    }
    var X = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          e = arguments.length > 1 ? arguments[1] : void 0,
          i = x({ descPosition: e.descPosition }, b);
        if (w.isObject(t) && !w.isNode(t)) {
          w.has(t, "type") ||
            (w.has(t, "content") && t.content
              ? (t.type = "inline")
              : w.has(t, "href") && (t.type = W(t.href)));
          var n = x(i, t);
          return D(n, e), n;
        }
        var s = "",
          o = t.getAttribute("data-glightbox"),
          l = t.nodeName.toLowerCase();
        if (
          ("a" === l && (s = t.href),
          "img" === l && (s = t.src),
          (i.href = s),
          S(i, function (n, s) {
            w.has(e, s) && "width" !== s && (i[s] = e[s]);
            var o = t.dataset[s];
            w.isNil(o) || (i[s] = o);
          }),
          i.content && (i.type = "inline"),
          !i.type && s && (i.type = W(s)),
          w.isNil(o))
        ) {
          if ("a" == l) {
            var r = t.title;
            w.isNil(r) || "" === r || (i.title = r);
          }
          if ("img" == l) {
            var a = t.alt;
            w.isNil(a) || "" === a || (i.title = a);
          }
          var h = t.getAttribute("data-description");
          w.isNil(h) || "" === h || (i.description = h);
        } else {
          var c = [];
          S(i, function (t, e) {
            c.push(";\\s?" + e);
          }),
            (c = c.join("\\s?:|")),
            "" !== o.trim() &&
              S(i, function (t, e) {
                var n = o,
                  s = new RegExp("s?" + e + "s?:s?(.*?)(" + c + "s?:|$)"),
                  l = n.match(s);
                if (l && l.length && l[1]) {
                  var r = l[1].trim().replace(/;\s*$/, "");
                  i[e] = r;
                }
              });
        }
        if (
          i.description &&
          "." == i.description.substring(0, 1) &&
          document.querySelector(i.description)
        )
          i.description = document.querySelector(i.description).innerHTML;
        else {
          var d = t.querySelector(".glightbox-desc");
          d && (i.description = d.innerHTML);
        }
        return D(i, e), i;
      },
      B = function () {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (C(e, "loaded")) return !1;
        w.isFunction(this.settings.beforeSlideLoad) &&
          this.settings.beforeSlideLoad({ index: i.index, slide: e, player: !1 });
        var s = i.type,
          o = i.descPosition,
          l = e.querySelector(".gslide-media"),
          r = e.querySelector(".gslide-title"),
          a = e.querySelector(".gslide-desc"),
          h = e.querySelector(".gdesc-inner"),
          u = n,
          g = "gSlideTitle_" + i.index,
          p = "gSlideDesc_" + i.index;
        if (
          (w.isFunction(this.settings.afterSlideLoad) &&
            (u = function () {
              w.isFunction(n) && n(),
                t.settings.afterSlideLoad({
                  index: i.index,
                  slide: e,
                  player: t.getSlidePlayerInstance(i.index),
                });
            }),
          "" == i.title && "" == i.description
            ? h && h.parentNode.parentNode.removeChild(h.parentNode)
            : (r && "" !== i.title
                ? ((r.id = g), (r.innerHTML = i.title))
                : r.parentNode.removeChild(r),
              a && "" !== i.description
                ? ((a.id = p),
                  d && this.settings.moreLength > 0
                    ? ((i.smallDescription = $(
                        i.description,
                        this.settings.moreLength,
                        this.settings.moreText
                      )),
                      (a.innerHTML = i.smallDescription),
                      U.apply(this, [a, i]))
                    : (a.innerHTML = i.description))
                : a.parentNode.removeChild(a),
              E(l.parentNode, "desc-".concat(o)),
              E(h.parentNode, "description-".concat(o))),
          E(l, "gslide-".concat(s)),
          E(e, "loaded"),
          "video" === s)
        )
          return (
            E(l.parentNode, "gvideo-container"),
            l.insertBefore(N('<div class="gvideo-wrapper"></div>'), l.firstChild),
            void F.apply(this, [e, i, u])
          );
        if ("external" === s) {
          var v = Y({ url: i.href, callback: u });
          return (
            (l.parentNode.style.maxWidth = i.width),
            (l.parentNode.style.height = i.height),
            void l.appendChild(v)
          );
        }
        if ("inline" !== s) {
          if ("image" === s) {
            var f = new Image();
            return (
              f.addEventListener(
                "load",
                function () {
                  f.naturalWidth > f.offsetWidth &&
                    (E(f, "zoomable"),
                    new c(f, e, function () {
                      t.resize(e);
                    })),
                    w.isFunction(u) && u();
                },
                !1
              ),
              (f.src = i.href),
              (f.alt = ""),
              "" !== i.title && f.setAttribute("aria-labelledby", g),
              "" !== i.description && f.setAttribute("aria-describedby", p),
              void l.insertBefore(f, l.firstChild)
            );
          }
          w.isFunction(u) && u();
        } else H.apply(this, [e, i, u]);
      };
    function F(t, e, i) {
      var n = this,
        s = "gvideo" + e.index,
        o = t.querySelector(".gvideo-wrapper");
      _(this.settings.plyr.css);
      var l = e.href,
        r = location.protocol.replace(":", ""),
        a = "",
        h = "",
        c = !1;
      "file" == r && (r = "http"),
        (o.parentNode.style.maxWidth = e.width),
        _(this.settings.plyr.js, "Plyr", function () {
          if (l.match(/vimeo\.com\/([0-9]*)/)) {
            var t = /vimeo.*\/(\d+)/i.exec(l);
            (a = "vimeo"), (h = t[1]);
          }
          if (
            l.match(
              /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
            ) ||
            l.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
            l.match(
              /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
            )
          ) {
            var r = (function (t) {
              var e = "";
              e =
                void 0 !==
                (t = t
                  .replace(/(>|<)/gi, "")
                  .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]
                  ? (e = t[2].split(/[^0-9a-z_\-]/i))[0]
                  : t;
              return e;
            })(l);
            (a = "youtube"), (h = r);
          }
          if (null !== l.match(/\.(mp4|ogg|webm|mov)$/)) {
            a = "local";
            var d = '<video id="' + s + '" ';
            (d += 'style="background:#000; max-width: '.concat(e.width, ';" ')),
              (d += 'preload="metadata" '),
              (d += 'x-webkit-airplay="allow" '),
              (d += 'webkit-playsinline="" '),
              (d += "controls "),
              (d += 'class="gvideo-local">');
            var u = l.toLowerCase().split(".").pop(),
              g = { mp4: "", ogg: "", webm: "" };
            for (var p in ((g[(u = "mov" == u ? "mp4" : u)] = l), g))
              if (g.hasOwnProperty(p)) {
                var v = g[p];
                e.hasOwnProperty(p) && (v = e[p]),
                  "" !== v &&
                    (d += '<source src="'
                      .concat(v, '" type="video/')
                      .concat(p, '">'));
              }
            c = N((d += "</video>"));
          }
          var f =
            c ||
            N(
              '<div id="'
                .concat(s, '" data-plyr-provider="')
                .concat(a, '" data-plyr-embed-id="')
                .concat(h, '"></div>')
            );
          E(o, "".concat(a, "-video gvideo")),
            o.appendChild(f),
            o.setAttribute("data-id", s),
            o.setAttribute("data-index", e.index);
          var y = w.has(n.settings.plyr, "config") ? n.settings.plyr.config : {},
            b = new Plyr("#" + s, y);
          b.on("ready", function (t) {
            var e = t.detail.plyr;
            (m[s] = e), w.isFunction(i) && i();
          }),
            b.on("enterfullscreen", z),
            b.on("exitfullscreen", z);
        });
    }
    function Y(t) {
      var e = t.url,
        i = t.allow,
        n = t.callback,
        s = t.appendTo,
        o = document.createElement("iframe");
      return (
        (o.className = "vimeo-video gvideo"),
        (o.src = e),
        (o.style.width = "100%"),
        (o.style.height = "100%"),
        i && o.setAttribute("allow", i),
        (o.onload = function () {
          E(o, "node-ready"), w.isFunction(n) && n();
        }),
        s && s.appendChild(o),
        o
      );
    }
    function _(t, e, i) {
      if (w.isNil(t)) console.error("Inject videos api error");
      else {
        var n;
        if ((w.isFunction(e) && ((i = e), (e = !1)), -1 !== t.indexOf(".css"))) {
          if (
            (n = document.querySelectorAll('link[href="' + t + '"]')) &&
            n.length > 0
          )
            return void (w.isFunction(i) && i());
          var s = document.getElementsByTagName("head")[0],
            o = s.querySelectorAll('link[rel="stylesheet"]'),
            l = document.createElement("link");
          return (
            (l.rel = "stylesheet"),
            (l.type = "text/css"),
            (l.href = t),
            (l.media = "all"),
            o ? s.insertBefore(l, o[0]) : s.appendChild(l),
            void (w.isFunction(i) && i())
          );
        }
        if (
          (n = document.querySelectorAll('script[src="' + t + '"]')) &&
          n.length > 0
        ) {
          if (w.isFunction(i)) {
            if (w.isString(e))
              return (
                j(
                  function () {
                    return void 0 !== window[e];
                  },
                  function () {
                    i();
                  }
                ),
                !1
              );
            i();
          }
        } else {
          var r = document.createElement("script");
          (r.type = "text/javascript"),
            (r.src = t),
            (r.onload = function () {
              if (w.isFunction(i)) {
                if (w.isString(e))
                  return (
                    j(
                      function () {
                        return void 0 !== window[e];
                      },
                      function () {
                        i();
                      }
                    ),
                    !1
                  );
                i();
              }
            }),
            document.body.appendChild(r);
        }
      }
    }
    function j(t, e, i, n) {
      if (t()) e();
      else {
        var s;
        i || (i = 100);
        var o = setInterval(function () {
          t() && (clearInterval(o), s && clearTimeout(s), e());
        }, i);
        n &&
          (s = setTimeout(function () {
            clearInterval(o);
          }, n));
      }
    }
    function H(t, e, i) {
      var n,
        s = this,
        o = t.querySelector(".gslide-media"),
        l = !(!w.has(e, "href") || !e.href) && e.href.split("#").pop().trim(),
        r = !(!w.has(e, "content") || !e.content) && e.content;
      if (
        r &&
        (w.isString(r) &&
          (n = N('<div class="ginlined-content">'.concat(r, "</div>"))),
        w.isNode(r))
      ) {
        "none" == r.style.display && (r.style.display = "block");
        var a = document.createElement("div");
        (a.className = "ginlined-content"), a.appendChild(r), (n = a);
      }
      if (l) {
        var h = document.getElementById(l);
        if (!h) return !1;
        var c = h.cloneNode(!0);
        (c.style.height = e.height),
          (c.style.maxWidth = e.width),
          E(c, "ginlined-content"),
          (n = c);
      }
      if (!n)
        return console.error("Unable to append inline slide content", e), !1;
      (o.style.height = e.height),
        (o.style.width = e.width),
        o.appendChild(n),
        (this.events["inlineclose" + l] = k("click", {
          onElement: o.querySelectorAll(".gtrigger-close"),
          withCallback: function (t) {
            t.preventDefault(), s.close();
          },
        })),
        w.isFunction(i) && i();
    }
    var W = function (t) {
      var e = t;
      if (
        null !==
        (t = t.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/)
      )
        return "image";
      if (
        t.match(
          /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
        ) ||
        t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
        t.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)
      )
        return "video";
      if (t.match(/vimeo\.com\/([0-9]*)/)) return "video";
      if (null !== t.match(/\.(mp4|ogg|webm|mov)$/)) return "video";
      if (t.indexOf("#") > -1 && "" !== e.split("#").pop().trim())
        return "inline";
      return t.includes("gajax=true") ? "ajax" : "external";
    };
    function V() {
      var t = this;
      if (this.events.hasOwnProperty("keyboard")) return !1;
      this.events.keyboard = k("keydown", {
        onElement: window,
        withCallback: function (e, i) {
          var n = (e = e || window.event).keyCode;
          if (9 == n) {
            var o =
              !(!document.activeElement || !document.activeElement.nodeName) &&
              document.activeElement.nodeName.toLocaleLowerCase();
            if ("input" == o || "textarea" == o || "button" == o) return;
            e.preventDefault();
            var l = document.querySelectorAll(".gbtn");
            if (!l || l.length <= 0) return;
            var r = s(l).filter(function (t) {
              return C(t, "focused");
            });
            if (!r.length) {
              var a = document.querySelector('.gbtn[tabindex="0"]');
              return void (a && (a.focus(), E(a, "focused")));
            }
            l.forEach(function (t) {
              return A(t, "focused");
            });
            var h = r[0].getAttribute("tabindex");
            h = h || "0";
            var c = parseInt(h) + 1;
            c > l.length - 1 && (c = "0");
            var d = document.querySelector('.gbtn[tabindex="'.concat(c, '"]'));
            d && (d.focus(), E(d, "focused"));
          }
          39 == n && t.nextSlide(),
            37 == n && t.prevSlide(),
            27 == n && t.close();
        },
      });
    }
    function G() {
      var t = this;
      if (this.events.hasOwnProperty("touch")) return !1;
      var e,
        i,
        n,
        s = q(),
        o = s.width,
        l = s.height,
        r = !1,
        a = null,
        c = null,
        d = null,
        u = !1,
        g = 1,
        p = 1,
        v = !1,
        f = !1,
        m = null,
        y = null,
        b = null,
        x = null,
        w = 0,
        S = 0,
        T = !1,
        k = !1,
        L = {},
        N = {},
        O = 0,
        M = 0,
        z = this,
        P = document.getElementById("glightbox-slider"),
        D = document.querySelector(".goverlay"),
        X =
          (this.loop(),
          new h(P, {
            touchStart: function (t) {
              if (
                C(t.targetTouches[0].target, "ginner-container") ||
                I(t.targetTouches[0].target, ".gslide-desc")
              )
                return (r = !1), !1;
              (r = !0),
                (N = t.targetTouches[0]),
                (L.pageX = t.targetTouches[0].pageX),
                (L.pageY = t.targetTouches[0].pageY),
                (O = t.targetTouches[0].clientX),
                (M = t.targetTouches[0].clientY),
                (a = z.activeSlide),
                (c = a.querySelector(".gslide-media")),
                (n = a.querySelector(".gslide-inline")),
                (d = null),
                C(c, "gslide-image") && (d = c.querySelector("img")),
                A(D, "greset");
            },
            touchMove: function (s) {
              if (r && ((N = s.targetTouches[0]), !v && !f)) {
                if (n && n.offsetHeight > l) {
                  var a = L.pageX - N.pageX;
                  if (Math.abs(a) <= 13) return !1;
                }
                u = !0;
                var h,
                  g = s.targetTouches[0].clientX,
                  p = s.targetTouches[0].clientY,
                  m = O - g,
                  y = M - p;
                if (
                  (Math.abs(m) > Math.abs(y)
                    ? ((T = !1), (k = !0))
                    : ((k = !1), (T = !0)),
                  (e = N.pageX - L.pageX),
                  (w = (100 * e) / o),
                  (i = N.pageY - L.pageY),
                  (S = (100 * i) / l),
                  T &&
                    d &&
                    ((h = 1 - Math.abs(i) / l),
                    (D.style.opacity = h),
                    t.settings.touchFollowAxis && (w = 0)),
                  k &&
                    ((h = 1 - Math.abs(e) / o),
                    (c.style.opacity = h),
                    t.settings.touchFollowAxis && (S = 0)),
                  !d)
                )
                  return R(c, "translate3d(".concat(w, "%, 0, 0)"));
                R(c, "translate3d(".concat(w, "%, ").concat(S, "%, 0)"));
              }
            },
            touchEnd: function () {
              if (r) {
                if (((u = !1), f || v)) return (b = m), void (x = y);
                var e = Math.abs(parseInt(S)),
                  i = Math.abs(parseInt(w));
                if (!(e > 29 && d))
                  return e < 29 && i < 25
                    ? (E(D, "greset"), (D.style.opacity = 1), Z(c))
                    : void 0;
                t.close();
              }
            },
            multipointEnd: function () {
              setTimeout(function () {
                v = !1;
              }, 50);
            },
            multipointStart: function () {
              (v = !0), (g = p || 1);
            },
            pinch: function (t) {
              if (!d || u) return !1;
              (v = !0), (d.scaleX = d.scaleY = g * t.zoom);
              var e = g * t.zoom;
              if (((f = !0), e <= 1))
                return (
                  (f = !1),
                  (e = 1),
                  (x = null),
                  (b = null),
                  (m = null),
                  (y = null),
                  void d.setAttribute("style", "")
                );
              e > 4.5 && (e = 4.5),
                (d.style.transform = "scale3d("
                  .concat(e, ", ")
                  .concat(e, ", 1)")),
                (p = e);
            },
            pressMove: function (t) {
              if (f && !v) {
                var e = N.pageX - L.pageX,
                  i = N.pageY - L.pageY;
                b && (e += b), x && (i += x), (m = e), (y = i);
                var n = "translate3d(".concat(e, "px, ").concat(i, "px, 0)");
                p && (n += " scale3d(".concat(p, ", ").concat(p, ", 1)")),
                  R(d, n);
              }
            },
            swipe: function (e) {
              if (!f)
                if (v) v = !1;
                else {
                  if ("Left" == e.direction) {
                    if (t.index == t.elements.length - 1) return Z(c);
                    t.nextSlide();
                  }
                  if ("Right" == e.direction) {
                    if (0 == t.index) return Z(c);
                    t.prevSlide();
                  }
                }
            },
          }));
      this.events.touch = X;
    }
    function R(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if ("" == e)
        return (
          (t.style.webkitTransform = ""),
          (t.style.MozTransform = ""),
          (t.style.msTransform = ""),
          (t.style.OTransform = ""),
          (t.style.transform = ""),
          !1
        );
      (t.style.webkitTransform = e),
        (t.style.MozTransform = e),
        (t.style.msTransform = e),
        (t.style.OTransform = e),
        (t.style.transform = e);
    }
    function Z(t) {
      var e = C(t, "gslide-media") ? t : t.querySelector(".gslide-media"),
        i = t.querySelector(".gslide-description");
      E(e, "greset"), R(e, "translate3d(0, 0, 0)");
      k(p, {
        onElement: e,
        once: !0,
        withCallback: function (t, i) {
          A(e, "greset");
        },
      });
      (e.style.opacity = ""), i && (i.style.opacity = "");
    }
    function $(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = i;
      if ((t = t.trim()).length <= e) return t;
      var s = t.substr(0, e - 1);
      return n
        ? s + '... <a href="javascript:void(0)" class="desc-more">' + i + "</a>"
        : s;
    }
    function U(t, e) {
      var i = t.querySelector(".desc-more");
      if (!i) return !1;
      k("click", {
        onElement: i,
        withCallback: function (t, i) {
          t.preventDefault();
          var n = document.body,
            s = I(i, ".gslide-desc");
          if (!s) return !1;
          (s.innerHTML = e.description), E(n, "gdesc-open");
          var o = k("click", {
            onElement: [n, I(s, ".gslide-description")],
            withCallback: function (t, i) {
              "a" !== t.target.nodeName.toLowerCase() &&
                (A(n, "gdesc-open"),
                E(n, "gdesc-closed"),
                (s.innerHTML = e.smallDescription),
                U(s, e),
                setTimeout(function () {
                  A(n, "gdesc-closed");
                }, 400),
                o.destroy());
            },
          });
        },
      });
    }
    var J = (function () {
      function t() {
        var i =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e(this, t),
          (this.settings = x(y, i)),
          (this.effectsClasses = this.getAnimationClasses()),
          (this.slidesData = {});
      }
      return (
        n(t, [
          {
            key: "init",
            value: function () {
              var t = this;
              (this.baseEvents = k("click", {
                onElement: this.getSelector(),
                withCallback: function (e, i) {
                  e.preventDefault(), t.open(i);
                },
              })),
                (this.elements = this.getElements());
            },
          },
          {
            key: "open",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              if (0 == this.elements.length) return !1;
              (this.activeSlide = null),
                (this.prevActiveSlideIndex = null),
                (this.prevActiveSlide = null);
              var i = w.isNumber(e) ? e : this.settings.startAt;
              w.isNode(t) &&
                w.isNil(i) &&
                (i = this.getElementIndex(t)) < 0 &&
                (i = 0),
                w.isNumber(i) || (i = 0),
                this.build(),
                L(
                  this.overlay,
                  "none" == this.settings.openEffect
                    ? "none"
                    : this.settings.cssEfects.fade.in
                );
              var n = document.body,
                s = window.innerWidth - document.documentElement.clientWidth;
              if (s > 0) {
                var o = document.createElement("style");
                (o.type = "text/css"),
                  (o.className = "gcss-styles"),
                  (o.innerText = ".gscrollbar-fixer {margin-right: ".concat(
                    s,
                    "px}"
                  )),
                  document.head.appendChild(o),
                  E(n, "gscrollbar-fixer");
              }
              if (
                (E(n, "glightbox-open"),
                E(g, "glightbox-open"),
                d &&
                  (E(document.body, "glightbox-mobile"),
                  (this.settings.slideEffect = "slide")),
                this.showSlide(i, !0),
                1 == this.elements.length
                  ? (M(this.prevButton), M(this.nextButton))
                  : (O(this.prevButton), O(this.nextButton)),
                (this.lightboxOpen = !0),
                w.isFunction(this.settings.onOpen) && this.settings.onOpen(),
                u && this.settings.touchNavigation)
              )
                return G.apply(this), !1;
              this.settings.keyboardNavigation && V.apply(this);
            },
          },
          {
            key: "openAt",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              this.open(null, t);
            },
          },
          {
            key: "showSlide",
            value: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                i =
                  arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              O(this.loader), (this.index = parseInt(e));
              var n = this.slidesContainer.querySelector(".current");
              n && A(n, "current"), this.slideAnimateOut();
              var s = this.slidesContainer.querySelectorAll(".gslide")[e];
              if (C(s, "loaded")) this.slideAnimateIn(s, i), M(this.loader);
              else {
                O(this.loader);
                var o = this.elements[e];
                (o.index = e),
                  (this.slidesData[e] = o),
                  B.apply(this, [
                    s,
                    o,
                    function () {
                      M(t.loader), t.resize(), t.slideAnimateIn(s, i);
                    },
                  ]);
              }
              (this.slideDescription = s.querySelector(".gslide-description")),
                (this.slideDescriptionContained =
                  this.slideDescription &&
                  C(this.slideDescription.parentNode, "gslide-media")),
                this.preloadSlide(e + 1),
                this.preloadSlide(e - 1),
                this.updateNavigationClasses(),
                (this.activeSlide = s);
            },
          },
          {
            key: "preloadSlide",
            value: function (t) {
              var e = this;
              if (t < 0 || t > this.elements.length - 1) return !1;
              if (w.isNil(this.elements[t])) return !1;
              var i = this.slidesContainer.querySelectorAll(".gslide")[t];
              if (C(i, "loaded")) return !1;
              var n = this.elements[t];
              (n.index = t), (this.slidesData[t] = n);
              var s = n.sourcetype;
              "video" == s || "external" == s
                ? setTimeout(function () {
                    B.apply(e, [i, n]);
                  }, 200)
                : B.apply(this, [i, n]);
            },
          },
          {
            key: "prevSlide",
            value: function () {
              this.goToSlide(this.index - 1);
            },
          },
          {
            key: "nextSlide",
            value: function () {
              this.goToSlide(this.index + 1);
            },
          },
          {
            key: "goToSlide",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              (this.prevActiveSlide = this.activeSlide),
                (this.prevActiveSlideIndex = this.index);
              var e = this.loop();
              if (!e && (t < 0 || t > this.elements.length - 1)) return !1;
              t < 0
                ? (t = this.elements.length - 1)
                : t >= this.elements.length && (t = 0),
                this.showSlide(t);
            },
          },
          {
            key: "insertSlide",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : -1,
                i = x({ descPosition: this.settings.descPosition }, b),
                n = N(this.settings.slideHtml),
                s = this.elements.length - 1;
              if (
                (e < 0 && (e = this.elements.length),
                ((t = x(i, t)).index = e),
                (t.node = !1),
                this.elements.splice(e, 0, t),
                this.slidesContainer)
              ) {
                if (e > s) this.slidesContainer.appendChild(n);
                else {
                  var o = this.slidesContainer.querySelectorAll(".gslide")[e];
                  this.slidesContainer.insertBefore(n, o);
                }
                ((0 == this.index && 0 == e) ||
                  this.index - 1 == e ||
                  this.index + 1 == e) &&
                  this.preloadSlide(e),
                  0 == this.index && 0 == e && (this.index = 1),
                  this.updateNavigationClasses();
              }
              w.isFunction(this.settings.slideInserted) &&
                this.settings.slideInserted({
                  index: e,
                  slide: this.slidesContainer.querySelectorAll(".gslide")[e],
                  player: this.getSlidePlayerInstance(e),
                });
            },
          },
          {
            key: "removeSlide",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : -1;
              if (t < 0 || t > this.elements.length - 1) return !1;
              var e =
                this.slidesContainer &&
                this.slidesContainer.querySelectorAll(".gslide")[t];
              e &&
                (this.getActiveSlideIndex() == t &&
                  (t == this.elements.length - 1
                    ? this.prevSlide()
                    : this.nextSlide()),
                e.parentNode.removeChild(e)),
                this.elements.splice(t, 1),
                w.isFunction(this.settings.slideRemoved) &&
                  this.settings.slideRemoved(t);
            },
          },
          {
            key: "slideAnimateIn",
            value: function (t, e) {
              var i = this,
                n = t.querySelector(".gslide-media"),
                s = t.querySelector(".gslide-description"),
                o = {
                  index: this.prevActiveSlideIndex,
                  slide: this.prevActiveSlide,
                  player: this.getSlidePlayerInstance(this.prevActiveSlideIndex),
                },
                l = {
                  index: this.index,
                  slide: this.activeSlide,
                  player: this.getSlidePlayerInstance(this.index),
                };
              if (
                (n.offsetWidth > 0 && s && (M(s), (s.style.display = "")),
                A(t, this.effectsClasses),
                e)
              )
                L(t, this.settings.openEffect, function () {
                  !d && i.settings.autoplayVideos && i.playSlideVideo(t),
                    w.isFunction(i.settings.afterSlideChange) &&
                      i.settings.afterSlideChange.apply(i, [o, l]);
                });
              else {
                var r = this.settings.slideEffect,
                  a = "none" !== r ? this.settings.cssEfects[r].in : r;
                this.prevActiveSlideIndex > this.index &&
                  "slide" == this.settings.slideEffect &&
                  (a = this.settings.cssEfects.slide_back.in),
                  L(t, a, function () {
                    !d && i.settings.autoplayVideos && i.playSlideVideo(t),
                      w.isFunction(i.settings.afterSlideChange) &&
                        i.settings.afterSlideChange.apply(i, [o, l]);
                  });
              }
              setTimeout(function () {
                i.resize(t);
              }, 100),
                E(t, "current");
            },
          },
          {
            key: "slideAnimateOut",
            value: function () {
              if (!this.prevActiveSlide) return !1;
              var t = this.prevActiveSlide;
              A(t, this.effectsClasses), E(t, "prev");
              var e = this.settings.slideEffect,
                i = "none" !== e ? this.settings.cssEfects[e].out : e;
              this.stopSlideVideo(t),
                w.isFunction(this.settings.beforeSlideChange) &&
                  this.settings.beforeSlideChange.apply(this, [
                    {
                      index: this.prevActiveSlideIndex,
                      slide: this.prevActiveSlide,
                      player: this.getSlidePlayerInstance(
                        this.prevActiveSlideIndex
                      ),
                    },
                    {
                      index: this.index,
                      slide: this.activeSlide,
                      player: this.getSlidePlayerInstance(this.index),
                    },
                  ]),
                this.prevActiveSlideIndex > this.index &&
                  "slide" == this.settings.slideEffect &&
                  (i = this.settings.cssEfects.slide_back.out),
                L(t, i, function () {
                  var e = t.querySelector(".gslide-media"),
                    i = t.querySelector(".gslide-description");
                  (e.style.transform = ""),
                    A(e, "greset"),
                    (e.style.opacity = ""),
                    i && (i.style.opacity = ""),
                    A(t, "prev");
                });
            },
          },
          {
            key: "getAllPlayers",
            value: function () {
              return m;
            },
          },
          {
            key: "getSlidePlayerInstance",
            value: function (t) {
              var e = "gvideo" + t;
              return !(!w.has(m, e) || !m[e]) && m[e];
            },
          },
          {
            key: "stopSlideVideo",
            value: function (t) {
              if (w.isNode(t)) {
                var e = t.querySelector(".gvideo-wrapper");
                e && (t = e.getAttribute("data-index"));
              }
              var i = this.getSlidePlayerInstance(t);
              i && i.playing && i.pause();
            },
          },
          {
            key: "playSlideVideo",
            value: function (t) {
              if (w.isNode(t)) {
                var e = t.querySelector(".gvideo-wrapper");
                e && (t = e.getAttribute("data-index"));
              }
              var i = this.getSlidePlayerInstance(t);
              i && !i.playing && i.play();
            },
          },
          {
            key: "setElements",
            value: function (t) {
              var e = this;
              this.settings.elements = !1;
              var i = [];
              S(t, function (t) {
                var n = X(t, e.settings);
                i.push(n);
              }),
                (this.elements = i),
                this.lightboxOpen &&
                  ((this.slidesContainer.innerHTML = ""),
                  S(this.elements, function () {
                    var t = N(e.settings.slideHtml);
                    e.slidesContainer.appendChild(t);
                  }),
                  this.showSlide(0, !0));
            },
          },
          {
            key: "getElementIndex",
            value: function (t) {
              var e = !1;
              return (
                S(this.elements, function (i, n) {
                  if (w.has(i, "node") && i.node == t) return (e = n), !0;
                }),
                e
              );
            },
          },
          {
            key: "getElements",
            value: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                i = [];
              (this.elements = this.elements ? this.elements : []),
                !w.isNil(this.settings.elements) &&
                  w.isArray(this.settings.elements) &&
                  (i = this.settings.elements);
              var n = !1,
                s = this.getSelector();
              if (null !== e) {
                var o = e.getAttribute("data-gallery");
                o &&
                  "" !== o &&
                  (n = document.querySelectorAll(
                    '[data-gallery="'.concat(o, '"]')
                  ));
              }
              return (
                0 == n &&
                  s &&
                  (n = document.querySelectorAll(this.getSelector())),
                S((n = Array.prototype.slice.call(n)), function (e, n) {
                  var s = X(e, t.settings);
                  (s.node = e), (s.index = n), i.push(s);
                }),
                i
              );
            },
          },
          {
            key: "getSelector",
            value: function () {
              return "data-" == this.settings.selector.substring(0, 5)
                ? "*[".concat(this.settings.selector, "]")
                : this.settings.selector;
            },
          },
          {
            key: "getActiveSlide",
            value: function () {
              return this.slidesContainer.querySelectorAll(".gslide")[this.index];
            },
          },
          {
            key: "getActiveSlideIndex",
            value: function () {
              return this.index;
            },
          },
          {
            key: "getAnimationClasses",
            value: function () {
              var t = [];
              for (var e in this.settings.cssEfects)
                if (this.settings.cssEfects.hasOwnProperty(e)) {
                  var i = this.settings.cssEfects[e];
                  t.push("g".concat(i.in)), t.push("g".concat(i.out));
                }
              return t.join(" ");
            },
          },
          {
            key: "build",
            value: function () {
              var t = this;
              if (this.built) return !1;
              var e = w.has(this.settings.svg, "next")
                  ? this.settings.svg.next
                  : "",
                i = w.has(this.settings.svg, "prev")
                  ? this.settings.svg.prev
                  : "",
                n = w.has(this.settings.svg, "close")
                  ? this.settings.svg.close
                  : "",
                s = this.settings.lightboxHtml;
              (s = N(
                (s = (s = (s = s.replace(/{nextSVG}/g, e)).replace(
                  /{prevSVG}/g,
                  i
                )).replace(/{closeSVG}/g, n))
              )),
                document.body.appendChild(s);
              var o = document.getElementById("glightbox-body");
              this.modal = o;
              var l = o.querySelector(".gclose");
              (this.prevButton = o.querySelector(".gprev")),
                (this.nextButton = o.querySelector(".gnext")),
                (this.overlay = o.querySelector(".goverlay")),
                (this.loader = o.querySelector(".gloader")),
                (this.slidesContainer =
                  document.getElementById("glightbox-slider")),
                (this.events = {}),
                E(this.modal, "glightbox-" + this.settings.skin),
                this.settings.closeButton &&
                  l &&
                  (this.events.close = k("click", {
                    onElement: l,
                    withCallback: function (e, i) {
                      e.preventDefault(), t.close();
                    },
                  })),
                l && !this.settings.closeButton && l.parentNode.removeChild(l),
                this.nextButton &&
                  (this.events.next = k("click", {
                    onElement: this.nextButton,
                    withCallback: function (e, i) {
                      e.preventDefault(), t.nextSlide();
                    },
                  })),
                this.prevButton &&
                  (this.events.prev = k("click", {
                    onElement: this.prevButton,
                    withCallback: function (e, i) {
                      e.preventDefault(), t.prevSlide();
                    },
                  })),
                this.settings.closeOnOutsideClick &&
                  (this.events.outClose = k("click", {
                    onElement: o,
                    withCallback: function (e, i) {
                      C(document.body, "glightbox-mobile") ||
                        I(e.target, ".ginner-container") ||
                        I(e.target, ".gbtn") ||
                        C(e.target, "gnext") ||
                        C(e.target, "gprev") ||
                        t.close();
                    },
                  })),
                S(this.elements, function () {
                  var e = N(t.settings.slideHtml);
                  t.slidesContainer.appendChild(e);
                }),
                u && E(document.body, "glightbox-touch"),
                (this.events.resize = k("resize", {
                  onElement: window,
                  withCallback: function () {
                    t.resize();
                  },
                })),
                (this.built = !0);
            },
          },
          {
            key: "resize",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              if ((t = t || this.activeSlide) && !C(t, "zoomed")) {
                var e = q(),
                  i = t.querySelector(".gvideo-wrapper"),
                  n = t.querySelector(".gslide-image"),
                  s = this.slideDescription,
                  o = e.width,
                  l = e.height;
                if (
                  (o <= 768
                    ? E(document.body, "glightbox-mobile")
                    : A(document.body, "glightbox-mobile"),
                  i || n)
                ) {
                  var r = !1;
                  if (
                    (s &&
                      (C(s, "description-bottom") || C(s, "description-top")) &&
                      !C(s, "gabsolute") &&
                      (r = !0),
                    n)
                  )
                    if (o <= 768) {
                      var a = n.querySelector("img");
                      a.setAttribute("style", "");
                    } else if (r) {
                      var h = s.offsetHeight,
                        c = this.slidesData[this.index].width;
                      c = c <= o ? c + "px" : "100%";
                      var d = n.querySelector("img");
                      d.setAttribute(
                        "style",
                        "max-height: calc(100vh - ".concat(h, "px)")
                      ),
                        s.setAttribute(
                          "style",
                          "max-width: ".concat(d.offsetWidth, "px;")
                        );
                    }
                  if (i) {
                    var u = w.has(this.settings.plyr.config, "ratio")
                        ? this.settings.plyr.config.ratio
                        : "16:9",
                      g = u.split(":"),
                      p = this.slidesData[this.index].width,
                      v = p / (parseInt(g[0]) / parseInt(g[1]));
                    if (
                      ((v = Math.floor(v)),
                      r && (l -= s.offsetHeight),
                      l < v && o > p)
                    ) {
                      var f = i.offsetWidth,
                        m = i.offsetHeight,
                        y = l / m,
                        b = { width: f * y, height: m * y };
                      i.parentNode.setAttribute(
                        "style",
                        "max-width: ".concat(b.width, "px")
                      ),
                        r &&
                          s.setAttribute(
                            "style",
                            "max-width: ".concat(b.width, "px;")
                          );
                    } else
                      (i.parentNode.style.maxWidth = "".concat(p, "px")),
                        r &&
                          s.setAttribute("style", "max-width: ".concat(p, "px;"));
                  }
                }
              }
            },
          },
          {
            key: "reload",
            value: function () {
              this.init();
            },
          },
          {
            key: "updateNavigationClasses",
            value: function () {
              var t = this.loop();
              A(this.nextButton, "disabled"),
                A(this.prevButton, "disabled"),
                0 == this.index && this.elements.length - 1 == 0
                  ? (E(this.prevButton, "disabled"),
                    E(this.nextButton, "disabled"))
                  : 0 !== this.index || t
                  ? this.index !== this.elements.length - 1 ||
                    t ||
                    E(this.nextButton, "disabled")
                  : E(this.prevButton, "disabled");
            },
          },
          {
            key: "loop",
            value: function () {
              var t = w.has(this.settings, "loopAtEnd")
                ? this.settings.loopAtEnd
                : null;
              return (
                (t = w.has(this.settings, "loop") ? this.settings.loop : t), t
              );
            },
          },
          {
            key: "close",
            value: function () {
              var t = this;
              if (!this.lightboxOpen) {
                if (this.events) {
                  for (var e in this.events)
                    this.events.hasOwnProperty(e) && this.events[e].destroy();
                  this.events = null;
                }
                return !1;
              }
              if (this.closing) return !1;
              (this.closing = !0),
                this.stopSlideVideo(this.activeSlide),
                E(this.modal, "glightbox-closing"),
                L(
                  this.overlay,
                  "none" == this.settings.openEffect
                    ? "none"
                    : this.settings.cssEfects.fade.out
                ),
                L(this.activeSlide, this.settings.closeEffect, function () {
                  if (
                    ((t.activeSlide = null),
                    (t.prevActiveSlideIndex = null),
                    (t.prevActiveSlide = null),
                    (t.built = !1),
                    t.events)
                  ) {
                    for (var e in t.events)
                      t.events.hasOwnProperty(e) && t.events[e].destroy();
                    t.events = null;
                  }
                  var i = document.body;
                  A(g, "glightbox-open"),
                    A(
                      i,
                      "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"
                    ),
                    t.modal.parentNode.removeChild(t.modal),
                    w.isFunction(t.settings.onClose) && t.settings.onClose();
                  var n = document.querySelector(".gcss-styles");
                  n && n.parentNode.removeChild(n),
                    (t.lightboxOpen = !1),
                    (t.closing = null);
                });
            },
          },
          {
            key: "destroy",
            value: function () {
              this.close(), this.baseEvents.destroy();
            },
          },
        ]),
        t
      );
    })();
    return function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = new J(t);
      return e.init(), e;
    };
  });
  

//==========================   tiny-slider.js  ============================

var tns = (function () {
    var t = window,
      Ai =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.msRequestAnimationFrame ||
        function (t) {
          return setTimeout(t, 16);
        },
      e = window,
      Ni =
        e.cancelAnimationFrame ||
        e.mozCancelAnimationFrame ||
        function (t) {
          clearTimeout(t);
        };
    function Li() {
      for (
        var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length;
        a < r;
        a++
      )
        if (null !== (t = arguments[a]))
          for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
      return i;
    }
    function Bi(t) {
      return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t;
    }
    function Si(t, e, n, i) {
      if (i)
        try {
          t.setItem(e, n);
        } catch (t) {}
      return n;
    }
    function Hi() {
      var t = document,
        e = t.body;
      return e || ((e = t.createElement("body")).fake = !0), e;
    }
    var n = document.documentElement;
    function Oi(t) {
      var e = "";
      return (
        t.fake &&
          ((e = n.style.overflow),
          (t.style.background = ""),
          (t.style.overflow = n.style.overflow = "hidden"),
          n.appendChild(t)),
        e
      );
    }
    function Di(t, e) {
      t.fake && (t.remove(), (n.style.overflow = e), n.offsetHeight);
    }
    function ki(t, e, n, i) {
      "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i);
    }
    function Ri(t) {
      return ("insertRule" in t ? t.cssRules : t.rules).length;
    }
    function Ii(t, e, n) {
      for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i);
    }
    var i = "classList" in document.createElement("_"),
      Pi = i
        ? function (t, e) {
            return t.classList.contains(e);
          }
        : function (t, e) {
            return 0 <= t.className.indexOf(e);
          },
      zi = i
        ? function (t, e) {
            Pi(t, e) || t.classList.add(e);
          }
        : function (t, e) {
            Pi(t, e) || (t.className += " " + e);
          },
      Wi = i
        ? function (t, e) {
            Pi(t, e) && t.classList.remove(e);
          }
        : function (t, e) {
            Pi(t, e) && (t.className = t.className.replace(e, ""));
          };
    function qi(t, e) {
      return t.hasAttribute(e);
    }
    function Fi(t, e) {
      return t.getAttribute(e);
    }
    function r(t) {
      return void 0 !== t.item;
    }
    function ji(t, e) {
      if (
        ((t = r(t) || t instanceof Array ? t : [t]),
        "[object Object]" === Object.prototype.toString.call(e))
      )
        for (var n = t.length; n--; ) for (var i in e) t[n].setAttribute(i, e[i]);
    }
    function Vi(t, e) {
      t = r(t) || t instanceof Array ? t : [t];
      for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--; )
        for (var a = n; a--; ) t[i].removeAttribute(e[a]);
    }
    function Gi(t) {
      for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
      return e;
    }
    function Qi(t, e) {
      "none" !== t.style.display && (t.style.display = "none");
    }
    function Xi(t, e) {
      "none" === t.style.display && (t.style.display = "");
    }
    function Yi(t) {
      return "none" !== window.getComputedStyle(t).display;
    }
    function Ki(e) {
      if ("string" == typeof e) {
        var n = [e],
          i = e.charAt(0).toUpperCase() + e.substr(1);
        ["Webkit", "Moz", "ms", "O"].forEach(function (t) {
          ("ms" === t && "transform" !== e) || n.push(t + i);
        }),
          (e = n);
      }
      for (
        var t = document.createElement("fakeelement"), a = (e.length, 0);
        a < e.length;
        a++
      ) {
        var r = e[a];
        if (void 0 !== t.style[r]) return r;
      }
      return !1;
    }
    function Ji(t, e) {
      var n = !1;
      return (
        /^Webkit/.test(t)
          ? (n = "webkit" + e + "End")
          : /^O/.test(t)
          ? (n = "o" + e + "End")
          : t && (n = e.toLowerCase() + "end"),
        n
      );
    }
    var a = !1;
    try {
      var o = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
      window.addEventListener("test", null, o);
    } catch (t) {}
    var u = !!a && { passive: !0 };
    function Ui(t, e, n) {
      for (var i in e) {
        var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && u;
        t.addEventListener(i, e[i], a);
      }
    }
    function _i(t, e) {
      for (var n in e) {
        var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && u;
        t.removeEventListener(n, e[n], i);
      }
    }
    function Zi() {
      return {
        topics: {},
        on: function (t, e) {
          (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
        },
        off: function (t, e) {
          if (this.topics[t])
            for (var n = 0; n < this.topics[t].length; n++)
              if (this.topics[t][n] === e) {
                this.topics[t].splice(n, 1);
                break;
              }
        },
        emit: function (e, n) {
          (n.type = e),
            this.topics[e] &&
              this.topics[e].forEach(function (t) {
                t(n, e);
              });
        },
      };
    }
    Object.keys ||
      (Object.keys = function (t) {
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e;
      }),
      "remove" in Element.prototype ||
        (Element.prototype.remove = function () {
          this.parentNode && this.parentNode.removeChild(this);
        });
    var $i = function (H) {
      H = Li(
        {
          container: ".slider",
          mode: "carousel",
          axis: "horizontal",
          items: 1,
          gutter: 0,
          edgePadding: 0,
          fixedWidth: !1,
          autoWidth: !1,
          viewportMax: !1,
          slideBy: 1,
          center: !1,
          controls: !0,
          controlsPosition: "top",
          controlsText: ["prev", "next"],
          controlsContainer: !1,
          prevButton: !1,
          nextButton: !1,
          nav: !0,
          navPosition: "top",
          navContainer: !1,
          navAsThumbnails: !1,
          arrowKeys: !1,
          speed: 300,
          autoplay: !1,
          autoplayPosition: "top",
          autoplayTimeout: 5e3,
          autoplayDirection: "forward",
          autoplayText: ["start", "stop"],
          autoplayHoverPause: !1,
          autoplayButton: !1,
          autoplayButtonOutput: !0,
          autoplayResetOnVisibility: !0,
          animateIn: "tns-fadeIn",
          animateOut: "tns-fadeOut",
          animateNormal: "tns-normal",
          animateDelay: !1,
          loop: !0,
          rewind: !1,
          autoHeight: !1,
          responsive: !1,
          lazyload: !1,
          lazyloadSelector: ".tns-lazy-img",
          touch: !0,
          mouseDrag: !1,
          swipeAngle: 15,
          nested: !1,
          preventActionWhenRunning: !1,
          preventScrollOnTouch: !1,
          freezable: !0,
          onInit: !1,
          useLocalStorage: !0,
          nonce: !1,
        },
        H || {}
      );
      var O = document,
        m = window,
        a = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
        e = {},
        n = H.useLocalStorage;
      if (n) {
        var t = navigator.userAgent,
          i = new Date();
        try {
          (e = m.localStorage)
            ? (e.setItem(i, i), (n = e.getItem(i) == i), e.removeItem(i))
            : (n = !1),
            n || (e = {});
        } catch (t) {
          n = !1;
        }
        n &&
          (e.tnsApp &&
            e.tnsApp !== t &&
            [
              "tC",
              "tPL",
              "tMQ",
              "tTf",
              "t3D",
              "tTDu",
              "tTDe",
              "tADu",
              "tADe",
              "tTE",
              "tAE",
            ].forEach(function (t) {
              e.removeItem(t);
            }),
          (localStorage.tnsApp = t));
      }
      var y = e.tC
          ? Bi(e.tC)
          : Si(
              e,
              "tC",
              (function () {
                var t = document,
                  e = Hi(),
                  n = Oi(e),
                  i = t.createElement("div"),
                  a = !1;
                e.appendChild(i);
                try {
                  for (
                    var r,
                      o = "(10px * 10)",
                      u = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o],
                      l = 0;
                    l < 3;
                    l++
                  )
                    if (
                      ((r = u[l]), (i.style.width = r), 100 === i.offsetWidth)
                    ) {
                      a = r.replace(o, "");
                      break;
                    }
                } catch (t) {}
                return e.fake ? Di(e, n) : i.remove(), a;
              })(),
              n
            ),
        g = e.tPL
          ? Bi(e.tPL)
          : Si(
              e,
              "tPL",
              (function () {
                var t,
                  e = document,
                  n = Hi(),
                  i = Oi(n),
                  a = e.createElement("div"),
                  r = e.createElement("div"),
                  o = "";
                (a.className = "tns-t-subp2"), (r.className = "tns-t-ct");
                for (var u = 0; u < 70; u++) o += "<div></div>";
                return (
                  (r.innerHTML = o),
                  a.appendChild(r),
                  n.appendChild(a),
                  (t =
                    Math.abs(
                      a.getBoundingClientRect().left -
                        r.children[67].getBoundingClientRect().left
                    ) < 2),
                  n.fake ? Di(n, i) : a.remove(),
                  t
                );
              })(),
              n
            ),
        D = e.tMQ
          ? Bi(e.tMQ)
          : Si(
              e,
              "tMQ",
              (function () {
                if (window.matchMedia || window.msMatchMedia) return !0;
                var t,
                  e = document,
                  n = Hi(),
                  i = Oi(n),
                  a = e.createElement("div"),
                  r = e.createElement("style"),
                  o =
                    "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                return (
                  (r.type = "text/css"),
                  (a.className = "tns-mq-test"),
                  n.appendChild(r),
                  n.appendChild(a),
                  r.styleSheet
                    ? (r.styleSheet.cssText = o)
                    : r.appendChild(e.createTextNode(o)),
                  (t = window.getComputedStyle
                    ? window.getComputedStyle(a).position
                    : a.currentStyle.position),
                  n.fake ? Di(n, i) : a.remove(),
                  "absolute" === t
                );
              })(),
              n
            ),
        r = e.tTf ? Bi(e.tTf) : Si(e, "tTf", Ki("transform"), n),
        o = e.t3D
          ? Bi(e.t3D)
          : Si(
              e,
              "t3D",
              (function (t) {
                if (!t) return !1;
                if (!window.getComputedStyle) return !1;
                var e,
                  n = document,
                  i = Hi(),
                  a = Oi(i),
                  r = n.createElement("p"),
                  o =
                    9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                return (
                  (o += "transform"),
                  i.insertBefore(r, null),
                  (r.style[t] = "translate3d(1px,1px,1px)"),
                  (e = window.getComputedStyle(r).getPropertyValue(o)),
                  i.fake ? Di(i, a) : r.remove(),
                  void 0 !== e && 0 < e.length && "none" !== e
                );
              })(r),
              n
            ),
        x = e.tTDu ? Bi(e.tTDu) : Si(e, "tTDu", Ki("transitionDuration"), n),
        u = e.tTDe ? Bi(e.tTDe) : Si(e, "tTDe", Ki("transitionDelay"), n),
        b = e.tADu ? Bi(e.tADu) : Si(e, "tADu", Ki("animationDuration"), n),
        l = e.tADe ? Bi(e.tADe) : Si(e, "tADe", Ki("animationDelay"), n),
        s = e.tTE ? Bi(e.tTE) : Si(e, "tTE", Ji(x, "Transition"), n),
        c = e.tAE ? Bi(e.tAE) : Si(e, "tAE", Ji(b, "Animation"), n),
        f = m.console && "function" == typeof m.console.warn,
        d = [
          "container",
          "controlsContainer",
          "prevButton",
          "nextButton",
          "navContainer",
          "autoplayButton",
        ],
        v = {};
      if (
        (d.forEach(function (t) {
          if ("string" == typeof H[t]) {
            var e = H[t],
              n = O.querySelector(e);
            if (((v[t] = e), !n || !n.nodeName))
              return void (f && console.warn("Can't find", H[t]));
            H[t] = n;
          }
        }),
        !(H.container.children.length < 1))
      ) {
        var k = H.responsive,
          R = H.nested,
          I = "carousel" === H.mode;
        if (k) {
          0 in k && ((H = Li(H, k[0])), delete k[0]);
          var p = {};
          for (var h in k) {
            var w = k[h];
            (w = "number" == typeof w ? { items: w } : w), (p[h] = w);
          }
          (k = p), (p = null);
        }
        if (
          (I ||
            (function t(e) {
              for (var n in e)
                I ||
                  ("slideBy" === n && (e[n] = "page"),
                  "edgePadding" === n && (e[n] = !1),
                  "autoHeight" === n && (e[n] = !1)),
                  "responsive" === n && t(e[n]);
            })(H),
          !I)
        ) {
          (H.axis = "horizontal"), (H.slideBy = "page"), (H.edgePadding = !1);
          var P = H.animateIn,
            z = H.animateOut,
            C = H.animateDelay,
            W = H.animateNormal;
        }
        var M,
          q,
          F = "horizontal" === H.axis,
          T = O.createElement("div"),
          j = O.createElement("div"),
          V = H.container,
          E = V.parentNode,
          A = V.outerHTML,
          G = V.children,
          Q = G.length,
          X = rn(),
          Y = !1;
        k && En(), I && (V.className += " tns-vpfix");
        var N,
          L,
          B,
          S,
          K,
          J,
          U,
          _,
          Z,
          $ = H.autoWidth,
          tt = sn("fixedWidth"),
          et = sn("edgePadding"),
          nt = sn("gutter"),
          it = un(),
          at = sn("center"),
          rt = $ ? 1 : Math.floor(sn("items")),
          ot = sn("slideBy"),
          ut = H.viewportMax || H.fixedWidthViewportWidth,
          lt = sn("arrowKeys"),
          st = sn("speed"),
          ct = H.rewind,
          ft = !ct && H.loop,
          dt = sn("autoHeight"),
          vt = sn("controls"),
          pt = sn("controlsText"),
          ht = sn("nav"),
          mt = sn("touch"),
          yt = sn("mouseDrag"),
          gt = sn("autoplay"),
          xt = sn("autoplayTimeout"),
          bt = sn("autoplayText"),
          wt = sn("autoplayHoverPause"),
          Ct = sn("autoplayResetOnVisibility"),
          Mt =
            ((U = null),
            (_ = sn("nonce")),
            (Z = document.createElement("style")),
            U && Z.setAttribute("media", U),
            _ && Z.setAttribute("nonce", _),
            document.querySelector("head").appendChild(Z),
            Z.sheet ? Z.sheet : Z.styleSheet),
          Tt = H.lazyload,
          Et = H.lazyloadSelector,
          At = [],
          Nt = ft
            ? ((K = (function () {
                {
                  if ($ || (tt && !ut)) return Q - 1;
                  var t = tt ? "fixedWidth" : "items",
                    e = [];
                  if (((tt || H[t] < Q) && e.push(H[t]), k))
                    for (var n in k) {
                      var i = k[n][t];
                      i && (tt || i < Q) && e.push(i);
                    }
                  return (
                    e.length || e.push(0),
                    Math.ceil(
                      tt ? ut / Math.min.apply(null, e) : Math.max.apply(null, e)
                    )
                  );
                }
              })()),
              (J = I ? Math.ceil((5 * K - Q) / 2) : 4 * K - Q),
              (J = Math.max(K, J)),
              ln("edgePadding") ? J + 1 : J)
            : 0,
          Lt = I ? Q + 2 * Nt : Q + Nt,
          Bt = !((!tt && !$) || ft),
          St = tt ? _n() : null,
          Ht = !I || !ft,
          Ot = F ? "left" : "top",
          Dt = "",
          kt = "",
          Rt = tt
            ? function () {
                return at && !ft ? Q - 1 : Math.ceil(-St / (tt + nt));
              }
            : $
            ? function () {
                for (var t = 0; t < Lt; t++) if (N[t] >= -St) return t;
              }
            : function () {
                return at && I && !ft
                  ? Q - 1
                  : ft || I
                  ? Math.max(0, Lt - Math.ceil(rt))
                  : Lt - 1;
              },
          It = en(sn("startIndex")),
          Pt = It,
          zt = (tn(), 0),
          Wt = $ ? null : Rt(),
          qt = H.preventActionWhenRunning,
          Ft = H.swipeAngle,
          jt = !Ft || "?",
          Vt = !1,
          Gt = H.onInit,
          Qt = new Zi(),
          Xt = " tns-slider tns-" + H.mode,
          Yt =
            V.id ||
            ((S = window.tnsId),
            (window.tnsId = S ? S + 1 : 1),
            "tns" + window.tnsId),
          Kt = sn("disable"),
          Jt = !1,
          Ut = H.freezable,
          _t = !(!Ut || $) && Tn(),
          Zt = !1,
          $t = {
            click: oi,
            keydown: function (t) {
              t = pi(t);
              var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
              0 <= e &&
                (0 === e ? we.disabled || oi(t, -1) : Ce.disabled || oi(t, 1));
            },
          },
          te = {
            click: function (t) {
              if (Vt) {
                if (qt) return;
                ai();
              }
              var e = hi((t = pi(t)));
              for (; e !== Ae && !qi(e, "data-nav"); ) e = e.parentNode;
              if (qi(e, "data-nav")) {
                var n = (Se = Number(Fi(e, "data-nav"))),
                  i = tt || $ ? (n * Q) / Le : n * rt,
                  a = le ? n : Math.min(Math.ceil(i), Q - 1);
                ri(a, t), He === n && (Pe && fi(), (Se = -1));
              }
            },
            keydown: function (t) {
              t = pi(t);
              var e = O.activeElement;
              if (!qi(e, "data-nav")) return;
              var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode),
                i = Number(Fi(e, "data-nav"));
              0 <= n &&
                (0 === n
                  ? 0 < i && vi(Ee[i - 1])
                  : 1 === n
                  ? i < Le - 1 && vi(Ee[i + 1])
                  : ri((Se = i), t));
            },
          },
          ee = {
            mouseover: function () {
              Pe && (li(), (ze = !0));
            },
            mouseout: function () {
              ze && (ui(), (ze = !1));
            },
          },
          ne = {
            visibilitychange: function () {
              O.hidden ? Pe && (li(), (qe = !0)) : qe && (ui(), (qe = !1));
            },
          },
          ie = {
            keydown: function (t) {
              t = pi(t);
              var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
              0 <= e && oi(t, 0 === e ? -1 : 1);
            },
          },
          ae = { touchstart: xi, touchmove: bi, touchend: wi, touchcancel: wi },
          re = { mousedown: xi, mousemove: bi, mouseup: wi, mouseleave: wi },
          oe = ln("controls"),
          ue = ln("nav"),
          le = !!$ || H.navAsThumbnails,
          se = ln("autoplay"),
          ce = ln("touch"),
          fe = ln("mouseDrag"),
          de = "tns-slide-active",
          ve = "tns-slide-cloned",
          pe = "tns-complete",
          he = {
            load: function (t) {
              kn(hi(t));
            },
            error: function (t) {
              (e = hi(t)), zi(e, "failed"), Rn(e);
              var e;
            },
          },
          me = "force" === H.preventScrollOnTouch;
        if (oe)
          var ye,
            ge,
            xe = H.controlsContainer,
            be = H.controlsContainer ? H.controlsContainer.outerHTML : "",
            we = H.prevButton,
            Ce = H.nextButton,
            Me = H.prevButton ? H.prevButton.outerHTML : "",
            Te = H.nextButton ? H.nextButton.outerHTML : "";
        if (ue)
          var Ee,
            Ae = H.navContainer,
            Ne = H.navContainer ? H.navContainer.outerHTML : "",
            Le = $ ? Q : Mi(),
            Be = 0,
            Se = -1,
            He = an(),
            Oe = He,
            De = "tns-nav-active",
            ke = "Carousel Page ",
            Re = " (Current Slide)";
        if (se)
          var Ie,
            Pe,
            ze,
            We,
            qe,
            Fe = "forward" === H.autoplayDirection ? 1 : -1,
            je = H.autoplayButton,
            Ve = H.autoplayButton ? H.autoplayButton.outerHTML : "",
            Ge = ["<span class='tns-visually-hidden'>", " animation</span>"];
        if (ce || fe)
          var Qe,
            Xe,
            Ye = {},
            Ke = {},
            Je = !1,
            Ue = F
              ? function (t, e) {
                  return t.x - e.x;
                }
              : function (t, e) {
                  return t.y - e.y;
                };
        $ || $e(Kt || _t),
          r &&
            ((Ot = r),
            (Dt = "translate"),
            o
              ? ((Dt += F ? "3d(" : "3d(0px, "),
                (kt = F ? ", 0px, 0px)" : ", 0px)"))
              : ((Dt += F ? "X(" : "Y("), (kt = ")"))),
          I && (V.className = V.className.replace("tns-vpfix", "")),
          (function () {
            ln("gutter");
            (T.className = "tns-outer"),
              (j.className = "tns-inner"),
              (T.id = Yt + "-ow"),
              (j.id = Yt + "-iw"),
              "" === V.id && (V.id = Yt);
            (Xt += g || $ ? " tns-subpixel" : " tns-no-subpixel"),
              (Xt += y ? " tns-calc" : " tns-no-calc"),
              $ && (Xt += " tns-autowidth");
            (Xt += " tns-" + H.axis),
              (V.className += Xt),
              I
                ? (((M = O.createElement("div")).id = Yt + "-mw"),
                  (M.className = "tns-ovh"),
                  T.appendChild(M),
                  M.appendChild(j))
                : T.appendChild(j);
            if (dt) {
              var t = M || j;
              t.className += " tns-ah";
            }
            if (
              (E.insertBefore(T, V),
              j.appendChild(V),
              Ii(G, function (t, e) {
                zi(t, "tns-item"),
                  t.id || (t.id = Yt + "-item" + e),
                  !I && W && zi(t, W),
                  ji(t, { "aria-hidden": "true", tabindex: "-1" });
              }),
              Nt)
            ) {
              for (
                var e = O.createDocumentFragment(),
                  n = O.createDocumentFragment(),
                  i = Nt;
                i--;
  
              ) {
                var a = i % Q,
                  r = G[a].cloneNode(!0);
                if (
                  (zi(r, ve), Vi(r, "id"), n.insertBefore(r, n.firstChild), I)
                ) {
                  var o = G[Q - 1 - a].cloneNode(!0);
                  zi(o, ve), Vi(o, "id"), e.appendChild(o);
                }
              }
              V.insertBefore(e, V.firstChild), V.appendChild(n), (G = V.children);
            }
          })(),
          (function () {
            if (!I)
              for (var t = It, e = It + Math.min(Q, rt); t < e; t++) {
                var n = G[t];
                (n.style.left = (100 * (t - It)) / rt + "%"), zi(n, P), Wi(n, W);
              }
            F &&
              (g || $
                ? (ki(
                    Mt,
                    "#" + Yt + " > .tns-item",
                    "font-size:" + m.getComputedStyle(G[0]).fontSize + ";",
                    Ri(Mt)
                  ),
                  ki(Mt, "#" + Yt, "font-size:0;", Ri(Mt)))
                : I &&
                  Ii(G, function (t, e) {
                    var n;
                    t.style.marginLeft =
                      ((n = e),
                      y
                        ? y + "(" + 100 * n + "% / " + Lt + ")"
                        : (100 * n) / Lt + "%");
                  }));
            if (D) {
              if (x) {
                var i = M && H.autoHeight ? hn(H.speed) : "";
                ki(Mt, "#" + Yt + "-mw", i, Ri(Mt));
              }
              (i = cn(
                H.edgePadding,
                H.gutter,
                H.fixedWidth,
                H.speed,
                H.autoHeight
              )),
                ki(Mt, "#" + Yt + "-iw", i, Ri(Mt)),
                I &&
                  ((i =
                    F && !$
                      ? "width:" + fn(H.fixedWidth, H.gutter, H.items) + ";"
                      : ""),
                  x && (i += hn(st)),
                  ki(Mt, "#" + Yt, i, Ri(Mt))),
                (i = F && !$ ? dn(H.fixedWidth, H.gutter, H.items) : ""),
                H.gutter && (i += vn(H.gutter)),
                I || (x && (i += hn(st)), b && (i += mn(st))),
                i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt));
            } else {
              I && dt && (M.style[x] = st / 1e3 + "s"),
                (j.style.cssText = cn(et, nt, tt, dt)),
                I && F && !$ && (V.style.width = fn(tt, nt, rt));
              var i = F && !$ ? dn(tt, nt, rt) : "";
              nt && (i += vn(nt)),
                i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt));
            }
            if (k && D)
              for (var a in k) {
                a = parseInt(a);
                var r = k[a],
                  i = "",
                  o = "",
                  u = "",
                  l = "",
                  s = "",
                  c = $ ? null : sn("items", a),
                  f = sn("fixedWidth", a),
                  d = sn("speed", a),
                  v = sn("edgePadding", a),
                  p = sn("autoHeight", a),
                  h = sn("gutter", a);
                x &&
                  M &&
                  sn("autoHeight", a) &&
                  "speed" in r &&
                  (o = "#" + Yt + "-mw{" + hn(d) + "}"),
                  ("edgePadding" in r || "gutter" in r) &&
                    (u = "#" + Yt + "-iw{" + cn(v, h, f, d, p) + "}"),
                  I &&
                    F &&
                    !$ &&
                    ("fixedWidth" in r ||
                      "items" in r ||
                      (tt && "gutter" in r)) &&
                    (l = "width:" + fn(f, h, c) + ";"),
                  x && "speed" in r && (l += hn(d)),
                  l && (l = "#" + Yt + "{" + l + "}"),
                  ("fixedWidth" in r ||
                    (tt && "gutter" in r) ||
                    (!I && "items" in r)) &&
                    (s += dn(f, h, c)),
                  "gutter" in r && (s += vn(h)),
                  !I && "speed" in r && (x && (s += hn(d)), b && (s += mn(d))),
                  s && (s = "#" + Yt + " > .tns-item{" + s + "}"),
                  (i = o + u + l + s) &&
                    Mt.insertRule(
                      "@media (min-width: " + a / 16 + "em) {" + i + "}",
                      Mt.cssRules.length
                    );
              }
          })(),
          yn();
        var _e = ft
            ? I
              ? function () {
                  var t = zt,
                    e = Wt;
                  (t += ot),
                    (e -= ot),
                    et
                      ? ((t += 1), (e -= 1))
                      : tt && (it + nt) % (tt + nt) && (e -= 1),
                    Nt && (e < It ? (It -= Q) : It < t && (It += Q));
                }
              : function () {
                  if (Wt < It) for (; zt + Q <= It; ) It -= Q;
                  else if (It < zt) for (; It <= Wt - Q; ) It += Q;
                }
            : function () {
                It = Math.max(zt, Math.min(Wt, It));
              },
          Ze = I
            ? function () {
                var e, n, i, a, t, r, o, u, l, s, c;
                Jn(V, ""),
                  x || !st
                    ? (ti(), (st && Yi(V)) || ai())
                    : ((e = V),
                      (n = Ot),
                      (i = Dt),
                      (a = kt),
                      (t = Zn()),
                      (r = st),
                      (o = ai),
                      (u = Math.min(r, 10)),
                      (l = 0 <= t.indexOf("%") ? "%" : "px"),
                      (t = t.replace(l, "")),
                      (s = Number(
                        e.style[n].replace(i, "").replace(a, "").replace(l, "")
                      )),
                      (c = ((t - s) / r) * u),
                      setTimeout(function t() {
                        (r -= u),
                          (s += c),
                          (e.style[n] = i + s + l + a),
                          0 < r ? setTimeout(t, u) : o();
                      }, u)),
                  F || Ci();
              }
            : function () {
                At = [];
                var t = {};
                (t[s] = t[c] = ai),
                  _i(G[Pt], t),
                  Ui(G[It], t),
                  ei(Pt, P, z, !0),
                  ei(It, W, P),
                  (s && c && st && Yi(V)) || ai();
              };
        return {
          version: "2.9.2",
          getInfo: Ei,
          events: Qt,
          goTo: ri,
          play: function () {
            gt && !Pe && (ci(), (We = !1));
          },
          pause: function () {
            Pe && (fi(), (We = !0));
          },
          isOn: Y,
          updateSliderHeight: Fn,
          refresh: yn,
          destroy: function () {
            if (
              ((Mt.disabled = !0),
              Mt.ownerNode && Mt.ownerNode.remove(),
              _i(m, { resize: Cn }),
              lt && _i(O, ie),
              xe && _i(xe, $t),
              Ae && _i(Ae, te),
              _i(V, ee),
              _i(V, ne),
              je && _i(je, { click: di }),
              gt && clearInterval(Ie),
              I && s)
            ) {
              var t = {};
              (t[s] = ai), _i(V, t);
            }
            mt && _i(V, ae), yt && _i(V, re);
            var r = [A, be, Me, Te, Ne, Ve];
            for (var e in (d.forEach(function (t, e) {
              var n = "container" === t ? T : H[t];
              if ("object" == typeof n && n) {
                var i = !!n.previousElementSibling && n.previousElementSibling,
                  a = n.parentNode;
                (n.outerHTML = r[e]),
                  (H[t] = i ? i.nextElementSibling : a.firstElementChild);
              }
            }),
            (d =
              P =
              z =
              C =
              W =
              F =
              T =
              j =
              V =
              E =
              A =
              G =
              Q =
              q =
              X =
              $ =
              tt =
              et =
              nt =
              it =
              rt =
              ot =
              ut =
              lt =
              st =
              ct =
              ft =
              dt =
              Mt =
              Tt =
              N =
              At =
              Nt =
              Lt =
              Bt =
              St =
              Ht =
              Ot =
              Dt =
              kt =
              Rt =
              It =
              Pt =
              zt =
              Wt =
              Ft =
              jt =
              Vt =
              Gt =
              Qt =
              Xt =
              Yt =
              Kt =
              Jt =
              Ut =
              _t =
              Zt =
              $t =
              te =
              ee =
              ne =
              ie =
              ae =
              re =
              oe =
              ue =
              le =
              se =
              ce =
              fe =
              de =
              pe =
              he =
              L =
              vt =
              pt =
              xe =
              be =
              we =
              Ce =
              ye =
              ge =
              ht =
              Ae =
              Ne =
              Ee =
              Le =
              Be =
              Se =
              He =
              Oe =
              De =
              ke =
              Re =
              gt =
              xt =
              Fe =
              bt =
              wt =
              je =
              Ve =
              Ct =
              Ge =
              Ie =
              Pe =
              ze =
              We =
              qe =
              Ye =
              Ke =
              Qe =
              Je =
              Xe =
              Ue =
              mt =
              yt =
                null),
            this))
              "rebuild" !== e && (this[e] = null);
            Y = !1;
          },
          rebuild: function () {
            return $i(Li(H, v));
          },
        };
      }
      function $e(t) {
        t && (vt = ht = mt = yt = lt = gt = wt = Ct = !1);
      }
      function tn() {
        for (var t = I ? It - Nt : It; t < 0; ) t += Q;
        return (t % Q) + 1;
      }
      function en(t) {
        return (
          (t = t ? Math.max(0, Math.min(ft ? Q - 1 : Q - rt, t)) : 0),
          I ? t + Nt : t
        );
      }
      function nn(t) {
        for (null == t && (t = It), I && (t -= Nt); t < 0; ) t += Q;
        return Math.floor(t % Q);
      }
      function an() {
        var t,
          e = nn();
        return (
          (t = le
            ? e
            : tt || $
            ? Math.ceil(((e + 1) * Le) / Q - 1)
            : Math.floor(e / rt)),
          !ft && I && It === Wt && (t = Le - 1),
          t
        );
      }
      function rn() {
        return (
          m.innerWidth || O.documentElement.clientWidth || O.body.clientWidth
        );
      }
      function on(t) {
        return "top" === t ? "afterbegin" : "beforeend";
      }
      function un() {
        var t = et ? 2 * et - nt : 0;
        return (
          (function t(e) {
            if (null != e) {
              var n,
                i,
                a = O.createElement("div");
              return (
                e.appendChild(a),
                (i = (n = a.getBoundingClientRect()).right - n.left),
                a.remove(),
                i || t(e.parentNode)
              );
            }
          })(E) - t
        );
      }
      function ln(t) {
        if (H[t]) return !0;
        if (k) for (var e in k) if (k[e][t]) return !0;
        return !1;
      }
      function sn(t, e) {
        if ((null == e && (e = X), "items" === t && tt))
          return Math.floor((it + nt) / (tt + nt)) || 1;
        var n = H[t];
        if (k) for (var i in k) e >= parseInt(i) && t in k[i] && (n = k[i][t]);
        return (
          "slideBy" === t && "page" === n && (n = sn("items")),
          I || ("slideBy" !== t && "items" !== t) || (n = Math.floor(n)),
          n
        );
      }
      function cn(t, e, n, i, a) {
        var r = "";
        if (void 0 !== t) {
          var o = t;
          e && (o -= e),
            (r = F
              ? "margin: 0 " + o + "px 0 " + t + "px;"
              : "margin: " + t + "px 0 " + o + "px 0;");
        } else if (e && !n) {
          var u = "-" + e + "px";
          r = "margin: 0 " + (F ? u + " 0 0" : "0 " + u + " 0") + ";";
        }
        return !I && a && x && i && (r += hn(i)), r;
      }
      function fn(t, e, n) {
        return t
          ? (t + e) * Lt + "px"
          : y
          ? y + "(" + 100 * Lt + "% / " + n + ")"
          : (100 * Lt) / n + "%";
      }
      function dn(t, e, n) {
        var i;
        if (t) i = t + e + "px";
        else {
          I || (n = Math.floor(n));
          var a = I ? Lt : n;
          i = y ? y + "(100% / " + a + ")" : 100 / a + "%";
        }
        return (i = "width:" + i), "inner" !== R ? i + ";" : i + " !important;";
      }
      function vn(t) {
        var e = "";
        !1 !== t &&
          (e =
            (F ? "padding-" : "margin-") +
            (F ? "right" : "bottom") +
            ": " +
            t +
            "px;");
        return e;
      }
      function pn(t, e) {
        var n = t.substring(0, t.length - e).toLowerCase();
        return n && (n = "-" + n + "-"), n;
      }
      function hn(t) {
        return pn(x, 18) + "transition-duration:" + t / 1e3 + "s;";
      }
      function mn(t) {
        return pn(b, 17) + "animation-duration:" + t / 1e3 + "s;";
      }
      function yn() {
        if (ln("autoHeight") || $ || !F) {
          var t = V.querySelectorAll("img");
          Ii(t, function (t) {
            var e = t.src;
            Tt ||
              (e && e.indexOf("data:image") < 0
                ? ((t.src = ""), Ui(t, he), zi(t, "loading"), (t.src = e))
                : kn(t));
          }),
            Ai(function () {
              zn(Gi(t), function () {
                L = !0;
              });
            }),
            ln("autoHeight") && (t = In(It, Math.min(It + rt - 1, Lt - 1))),
            Tt
              ? gn()
              : Ai(function () {
                  zn(Gi(t), gn);
                });
        } else I && $n(), bn(), wn();
      }
      function gn() {
        if ($ && 1 < Q) {
          var i = ft ? It : Q - 1;
          !(function t() {
            var e = G[i].getBoundingClientRect().left,
              n = G[i - 1].getBoundingClientRect().right;
            Math.abs(e - n) <= 1
              ? xn()
              : setTimeout(function () {
                  t();
                }, 16);
          })();
        } else xn();
      }
      function xn() {
        (F && !$) ||
          (jn(),
          $ ? ((St = _n()), Ut && (_t = Tn()), (Wt = Rt()), $e(Kt || _t)) : Ci()),
          I && $n(),
          bn(),
          wn();
      }
      function bn() {
        if (
          (Vn(),
          T.insertAdjacentHTML(
            "afterbegin",
            '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
              Hn() +
              "</span>  of " +
              Q +
              "</div>"
          ),
          (B = T.querySelector(".tns-liveregion .current")),
          se)
        ) {
          var t = gt ? "stop" : "start";
          je
            ? ji(je, { "data-action": t })
            : H.autoplayButtonOutput &&
              (T.insertAdjacentHTML(
                on(H.autoplayPosition),
                '<button type="button" data-action="' +
                  t +
                  '">' +
                  Ge[0] +
                  t +
                  Ge[1] +
                  bt[0] +
                  "</button>"
              ),
              (je = T.querySelector("[data-action]"))),
            je && Ui(je, { click: di }),
            gt && (ci(), wt && Ui(V, ee), Ct && Ui(V, ne));
        }
        if (ue) {
          if (Ae)
            ji(Ae, { "aria-label": "Carousel Pagination" }),
              Ii((Ee = Ae.children), function (t, e) {
                ji(t, {
                  "data-nav": e,
                  tabindex: "-1",
                  "aria-label": ke + (e + 1),
                  "aria-controls": Yt,
                });
              });
          else {
            for (
              var e = "", n = le ? "" : 'style="display:none"', i = 0;
              i < Q;
              i++
            )
              e +=
                '<button type="button" data-nav="' +
                i +
                '" tabindex="-1" aria-controls="' +
                Yt +
                '" ' +
                n +
                ' aria-label="' +
                ke +
                (i + 1) +
                '"></button>';
            (e =
              '<div class="tns-nav" aria-label="Carousel Pagination">' +
              e +
              "</div>"),
              T.insertAdjacentHTML(on(H.navPosition), e),
              (Ae = T.querySelector(".tns-nav")),
              (Ee = Ae.children);
          }
          if ((Ti(), x)) {
            var a = x.substring(0, x.length - 18).toLowerCase(),
              r = "transition: all " + st / 1e3 + "s";
            a && (r = "-" + a + "-" + r),
              ki(Mt, "[aria-controls^=" + Yt + "-item]", r, Ri(Mt));
          }
          ji(Ee[He], { "aria-label": ke + (He + 1) + Re }),
            Vi(Ee[He], "tabindex"),
            zi(Ee[He], De),
            Ui(Ae, te);
        }
        oe &&
          (xe ||
            (we && Ce) ||
            (T.insertAdjacentHTML(
              on(H.controlsPosition),
              '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
                Yt +
                '">' +
                pt[0] +
                '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
                Yt +
                '">' +
                pt[1] +
                "</button></div>"
            ),
            (xe = T.querySelector(".tns-controls"))),
          (we && Ce) || ((we = xe.children[0]), (Ce = xe.children[1])),
          H.controlsContainer &&
            ji(xe, { "aria-label": "Carousel Navigation", tabindex: "0" }),
          (H.controlsContainer || (H.prevButton && H.nextButton)) &&
            ji([we, Ce], { "aria-controls": Yt, tabindex: "-1" }),
          (H.controlsContainer || (H.prevButton && H.nextButton)) &&
            (ji(we, { "data-controls": "prev" }),
            ji(Ce, { "data-controls": "next" })),
          (ye = Qn(we)),
          (ge = Qn(Ce)),
          Kn(),
          xe ? Ui(xe, $t) : (Ui(we, $t), Ui(Ce, $t))),
          An();
      }
      function wn() {
        if (I && s) {
          var t = {};
          (t[s] = ai), Ui(V, t);
        }
        mt && Ui(V, ae, H.preventScrollOnTouch),
          yt && Ui(V, re),
          lt && Ui(O, ie),
          "inner" === R
            ? Qt.on("outerResized", function () {
                Mn(), Qt.emit("innerLoaded", Ei());
              })
            : (k || tt || $ || dt || !F) && Ui(m, { resize: Cn }),
          dt && ("outer" === R ? Qt.on("innerLoaded", Pn) : Kt || Pn()),
          Dn(),
          Kt ? Bn() : _t && Ln(),
          Qt.on("indexChanged", Wn),
          "inner" === R && Qt.emit("innerLoaded", Ei()),
          "function" == typeof Gt && Gt(Ei()),
          (Y = !0);
      }
      function Cn(t) {
        Ai(function () {
          Mn(pi(t));
        });
      }
      function Mn(t) {
        if (Y) {
          "outer" === R && Qt.emit("outerResized", Ei(t)), (X = rn());
          var e,
            n = q,
            i = !1;
          k && (En(), (e = n !== q) && Qt.emit("newBreakpointStart", Ei(t)));
          var a,
            r,
            o,
            u,
            l = rt,
            s = Kt,
            c = _t,
            f = lt,
            d = vt,
            v = ht,
            p = mt,
            h = yt,
            m = gt,
            y = wt,
            g = Ct,
            x = It;
          if (e) {
            var b = tt,
              w = dt,
              C = pt,
              M = at,
              T = bt;
            if (!D)
              var E = nt,
                A = et;
          }
          if (
            ((lt = sn("arrowKeys")),
            (vt = sn("controls")),
            (ht = sn("nav")),
            (mt = sn("touch")),
            (at = sn("center")),
            (yt = sn("mouseDrag")),
            (gt = sn("autoplay")),
            (wt = sn("autoplayHoverPause")),
            (Ct = sn("autoplayResetOnVisibility")),
            e &&
              ((Kt = sn("disable")),
              (tt = sn("fixedWidth")),
              (st = sn("speed")),
              (dt = sn("autoHeight")),
              (pt = sn("controlsText")),
              (bt = sn("autoplayText")),
              (xt = sn("autoplayTimeout")),
              D || ((et = sn("edgePadding")), (nt = sn("gutter")))),
            $e(Kt),
            (it = un()),
            (F && !$) || Kt || (jn(), F || (Ci(), (i = !0))),
            (tt || $) && ((St = _n()), (Wt = Rt())),
            (e || tt) &&
              ((rt = sn("items")),
              (ot = sn("slideBy")),
              (r = rt !== l) && (tt || $ || (Wt = Rt()), _e())),
            e &&
              Kt !== s &&
              (Kt
                ? Bn()
                : (function () {
                    if (!Jt) return;
                    if (((Mt.disabled = !1), (V.className += Xt), $n(), ft))
                      for (var t = Nt; t--; ) I && Xi(G[t]), Xi(G[Lt - t - 1]);
                    if (!I)
                      for (var e = It, n = It + Q; e < n; e++) {
                        var i = G[e],
                          a = e < It + rt ? P : W;
                        (i.style.left = (100 * (e - It)) / rt + "%"), zi(i, a);
                      }
                    Nn(), (Jt = !1);
                  })()),
            Ut &&
              (e || tt || $) &&
              (_t = Tn()) !== c &&
              (_t
                ? (ti(Zn(en(0))), Ln())
                : (!(function () {
                    if (!Zt) return;
                    et && D && (j.style.margin = "");
                    if (Nt)
                      for (var t = "tns-transparent", e = Nt; e--; )
                        I && Wi(G[e], t), Wi(G[Lt - e - 1], t);
                    Nn(), (Zt = !1);
                  })(),
                  (i = !0))),
            $e(Kt || _t),
            gt || (wt = Ct = !1),
            lt !== f && (lt ? Ui(O, ie) : _i(O, ie)),
            vt !== d &&
              (vt
                ? xe
                  ? Xi(xe)
                  : (we && Xi(we), Ce && Xi(Ce))
                : xe
                ? Qi(xe)
                : (we && Qi(we), Ce && Qi(Ce))),
            ht !== v && (ht ? (Xi(Ae), Ti()) : Qi(Ae)),
            mt !== p && (mt ? Ui(V, ae, H.preventScrollOnTouch) : _i(V, ae)),
            yt !== h && (yt ? Ui(V, re) : _i(V, re)),
            gt !== m &&
              (gt
                ? (je && Xi(je), Pe || We || ci())
                : (je && Qi(je), Pe && fi())),
            wt !== y && (wt ? Ui(V, ee) : _i(V, ee)),
            Ct !== g && (Ct ? Ui(O, ne) : _i(O, ne)),
            e)
          ) {
            if (
              ((tt === b && at === M) || (i = !0),
              dt !== w && (dt || (j.style.height = "")),
              vt && pt !== C && ((we.innerHTML = pt[0]), (Ce.innerHTML = pt[1])),
              je && bt !== T)
            ) {
              var N = gt ? 1 : 0,
                L = je.innerHTML,
                B = L.length - T[N].length;
              L.substring(B) === T[N] &&
                (je.innerHTML = L.substring(0, B) + bt[N]);
            }
          } else at && (tt || $) && (i = !0);
          if (
            ((r || (tt && !$)) && ((Le = Mi()), Ti()),
            (a = It !== x)
              ? (Qt.emit("indexChanged", Ei()), (i = !0))
              : r
              ? a || Wn()
              : (tt || $) && (Dn(), Vn(), Sn()),
            r &&
              !I &&
              (function () {
                for (var t = It + Math.min(Q, rt), e = Lt; e--; ) {
                  var n = G[e];
                  It <= e && e < t
                    ? (zi(n, "tns-moving"),
                      (n.style.left = (100 * (e - It)) / rt + "%"),
                      zi(n, P),
                      Wi(n, W))
                    : n.style.left && ((n.style.left = ""), zi(n, W), Wi(n, P)),
                    Wi(n, z);
                }
                setTimeout(function () {
                  Ii(G, function (t) {
                    Wi(t, "tns-moving");
                  });
                }, 300);
              })(),
            !Kt && !_t)
          ) {
            if (
              e &&
              !D &&
              ((et === A && nt === E) ||
                (j.style.cssText = cn(et, nt, tt, st, dt)),
              F)
            ) {
              I && (V.style.width = fn(tt, nt, rt));
              var S = dn(tt, nt, rt) + vn(nt);
              (u = Ri((o = Mt)) - 1),
                "deleteRule" in o ? o.deleteRule(u) : o.removeRule(u),
                ki(Mt, "#" + Yt + " > .tns-item", S, Ri(Mt));
            }
            dt && Pn(), i && ($n(), (Pt = It));
          }
          e && Qt.emit("newBreakpointEnd", Ei(t));
        }
      }
      function Tn() {
        if (!tt && !$) return Q <= (at ? rt - (rt - 1) / 2 : rt);
        var t = tt ? (tt + nt) * Q : N[Q],
          e = et ? it + 2 * et : it + nt;
        return (
          at && (e -= tt ? (it - tt) / 2 : (it - (N[It + 1] - N[It] - nt)) / 2),
          t <= e
        );
      }
      function En() {
        for (var t in ((q = 0), k)) (t = parseInt(t)) <= X && (q = t);
      }
      function An() {
        !gt && je && Qi(je),
          !ht && Ae && Qi(Ae),
          vt || (xe ? Qi(xe) : (we && Qi(we), Ce && Qi(Ce)));
      }
      function Nn() {
        gt && je && Xi(je),
          ht && Ae && Xi(Ae),
          vt && (xe ? Xi(xe) : (we && Xi(we), Ce && Xi(Ce)));
      }
      function Ln() {
        if (!Zt) {
          if ((et && (j.style.margin = "0px"), Nt))
            for (var t = "tns-transparent", e = Nt; e--; )
              I && zi(G[e], t), zi(G[Lt - e - 1], t);
          An(), (Zt = !0);
        }
      }
      function Bn() {
        if (!Jt) {
          if (
            ((Mt.disabled = !0),
            (V.className = V.className.replace(Xt.substring(1), "")),
            Vi(V, ["style"]),
            ft)
          )
            for (var t = Nt; t--; ) I && Qi(G[t]), Qi(G[Lt - t - 1]);
          if (((F && I) || Vi(j, ["style"]), !I))
            for (var e = It, n = It + Q; e < n; e++) {
              var i = G[e];
              Vi(i, ["style"]), Wi(i, P), Wi(i, W);
            }
          An(), (Jt = !0);
        }
      }
      function Sn() {
        var t = Hn();
        B.innerHTML !== t && (B.innerHTML = t);
      }
      function Hn() {
        var t = On(),
          e = t[0] + 1,
          n = t[1] + 1;
        return e === n ? e + "" : e + " to " + n;
      }
      function On(t) {
        null == t && (t = Zn());
        var n,
          i,
          a,
          r = It;
        if (
          (at || et
            ? ($ || tt) && ((i = -(parseFloat(t) + et)), (a = i + it + 2 * et))
            : $ && ((i = N[It]), (a = i + it)),
          $)
        )
          N.forEach(function (t, e) {
            e < Lt &&
              ((at || et) && t <= i + 0.5 && (r = e), 0.5 <= a - t && (n = e));
          });
        else {
          if (tt) {
            var e = tt + nt;
            at || et
              ? ((r = Math.floor(i / e)), (n = Math.ceil(a / e - 1)))
              : (n = r + Math.ceil(it / e) - 1);
          } else if (at || et) {
            var o = rt - 1;
            if ((at ? ((r -= o / 2), (n = It + o / 2)) : (n = It + o), et)) {
              var u = (et * rt) / it;
              (r -= u), (n += u);
            }
            (r = Math.floor(r)), (n = Math.ceil(n));
          } else n = r + rt - 1;
          (r = Math.max(r, 0)), (n = Math.min(n, Lt - 1));
        }
        return [r, n];
      }
      function Dn() {
        if (Tt && !Kt) {
          var t = On();
          t.push(Et),
            In.apply(null, t).forEach(function (t) {
              if (!Pi(t, pe)) {
                var e = {};
                (e[s] = function (t) {
                  t.stopPropagation();
                }),
                  Ui(t, e),
                  Ui(t, he),
                  (t.src = Fi(t, "data-src"));
                var n = Fi(t, "data-srcset");
                n && (t.srcset = n), zi(t, "loading");
              }
            });
        }
      }
      function kn(t) {
        zi(t, "loaded"), Rn(t);
      }
      function Rn(t) {
        zi(t, pe), Wi(t, "loading"), _i(t, he);
      }
      function In(t, e, n) {
        var i = [];
        for (n || (n = "img"); t <= e; )
          Ii(G[t].querySelectorAll(n), function (t) {
            i.push(t);
          }),
            t++;
        return i;
      }
      function Pn() {
        var t = In.apply(null, On());
        Ai(function () {
          zn(t, Fn);
        });
      }
      function zn(n, t) {
        return L
          ? t()
          : (n.forEach(function (t, e) {
              !Tt && t.complete && Rn(t), Pi(t, pe) && n.splice(e, 1);
            }),
            n.length
              ? void Ai(function () {
                  zn(n, t);
                })
              : t());
      }
      function Wn() {
        Dn(),
          Vn(),
          Sn(),
          Kn(),
          (function () {
            if (ht && ((He = 0 <= Se ? Se : an()), (Se = -1), He !== Oe)) {
              var t = Ee[Oe],
                e = Ee[He];
              ji(t, { tabindex: "-1", "aria-label": ke + (Oe + 1) }),
                Wi(t, De),
                ji(e, { "aria-label": ke + (He + 1) + Re }),
                Vi(e, "tabindex"),
                zi(e, De),
                (Oe = He);
            }
          })();
      }
      function qn(t, e) {
        for (var n = [], i = t, a = Math.min(t + e, Lt); i < a; i++)
          n.push(G[i].offsetHeight);
        return Math.max.apply(null, n);
      }
      function Fn() {
        var t = dt ? qn(It, rt) : qn(Nt, Q),
          e = M || j;
        e.style.height !== t && (e.style.height = t + "px");
      }
      function jn() {
        N = [0];
        var n = F ? "left" : "top",
          i = F ? "right" : "bottom",
          a = G[0].getBoundingClientRect()[n];
        Ii(G, function (t, e) {
          e && N.push(t.getBoundingClientRect()[n] - a),
            e === Lt - 1 && N.push(t.getBoundingClientRect()[i] - a);
        });
      }
      function Vn() {
        var t = On(),
          n = t[0],
          i = t[1];
        Ii(G, function (t, e) {
          n <= e && e <= i
            ? qi(t, "aria-hidden") &&
              (Vi(t, ["aria-hidden", "tabindex"]), zi(t, de))
            : qi(t, "aria-hidden") ||
              (ji(t, { "aria-hidden": "true", tabindex: "-1" }), Wi(t, de));
        });
      }
      function Gn(t) {
        return t.nodeName.toLowerCase();
      }
      function Qn(t) {
        return "button" === Gn(t);
      }
      function Xn(t) {
        return "true" === t.getAttribute("aria-disabled");
      }
      function Yn(t, e, n) {
        t ? (e.disabled = n) : e.setAttribute("aria-disabled", n.toString());
      }
      function Kn() {
        if (vt && !ct && !ft) {
          var t = ye ? we.disabled : Xn(we),
            e = ge ? Ce.disabled : Xn(Ce),
            n = It <= zt,
            i = !ct && Wt <= It;
          n && !t && Yn(ye, we, !0),
            !n && t && Yn(ye, we, !1),
            i && !e && Yn(ge, Ce, !0),
            !i && e && Yn(ge, Ce, !1);
        }
      }
      function Jn(t, e) {
        x && (t.style[x] = e);
      }
      function Un(t) {
        return (
          null == t && (t = It),
          $
            ? (it - (et ? nt : 0) - (N[t + 1] - N[t] - nt)) / 2
            : tt
            ? (it - tt) / 2
            : (rt - 1) / 2
        );
      }
      function _n() {
        var t = it + (et ? nt : 0) - (tt ? (tt + nt) * Lt : N[Lt]);
        return (
          at &&
            !ft &&
            (t = tt ? -(tt + nt) * (Lt - 1) - Un() : Un(Lt - 1) - N[Lt - 1]),
          0 < t && (t = 0),
          t
        );
      }
      function Zn(t) {
        var e;
        if ((null == t && (t = It), F && !$))
          if (tt) (e = -(tt + nt) * t), at && (e += Un());
          else {
            var n = r ? Lt : rt;
            at && (t -= Un()), (e = (100 * -t) / n);
          }
        else (e = -N[t]), at && $ && (e += Un());
        return Bt && (e = Math.max(e, St)), (e += !F || $ || tt ? "px" : "%");
      }
      function $n(t) {
        Jn(V, "0s"), ti(t);
      }
      function ti(t) {
        null == t && (t = Zn()), (V.style[Ot] = Dt + t + kt);
      }
      function ei(t, e, n, i) {
        var a = t + rt;
        ft || (a = Math.min(a, Lt));
        for (var r = t; r < a; r++) {
          var o = G[r];
          i || (o.style.left = (100 * (r - It)) / rt + "%"),
            C && u && (o.style[u] = o.style[l] = (C * (r - t)) / 1e3 + "s"),
            Wi(o, e),
            zi(o, n),
            i && At.push(o);
        }
      }
      function ni(t, e) {
        Ht && _e(),
          (It !== Pt || e) &&
            (Qt.emit("indexChanged", Ei()),
            Qt.emit("transitionStart", Ei()),
            dt && Pn(),
            Pe && t && 0 <= ["click", "keydown"].indexOf(t.type) && fi(),
            (Vt = !0),
            Ze());
      }
      function ii(t) {
        return t.toLowerCase().replace(/-/g, "");
      }
      function ai(t) {
        if (I || Vt) {
          if ((Qt.emit("transitionEnd", Ei(t)), !I && 0 < At.length))
            for (var e = 0; e < At.length; e++) {
              var n = At[e];
              (n.style.left = ""),
                l && u && ((n.style[l] = ""), (n.style[u] = "")),
                Wi(n, z),
                zi(n, W);
            }
          if (
            !t ||
            (!I && t.target.parentNode === V) ||
            (t.target === V && ii(t.propertyName) === ii(Ot))
          ) {
            if (!Ht) {
              var i = It;
              _e(), It !== i && (Qt.emit("indexChanged", Ei()), $n());
            }
            "inner" === R && Qt.emit("innerLoaded", Ei()), (Vt = !1), (Pt = It);
          }
        }
      }
      function ri(t, e) {
        if (!_t)
          if ("prev" === t) oi(e, -1);
          else if ("next" === t) oi(e, 1);
          else {
            if (Vt) {
              if (qt) return;
              ai();
            }
            var n = nn(),
              i = 0;
            if (
              ("first" === t
                ? (i = -n)
                : "last" === t
                ? (i = I ? Q - rt - n : Q - 1 - n)
                : ("number" != typeof t && (t = parseInt(t)),
                  isNaN(t) ||
                    (e || (t = Math.max(0, Math.min(Q - 1, t))), (i = t - n))),
              !I && i && Math.abs(i) < rt)
            ) {
              var a = 0 < i ? 1 : -1;
              i += zt <= It + i - Q ? Q * a : 2 * Q * a * -1;
            }
            (It += i),
              I && ft && (It < zt && (It += Q), Wt < It && (It -= Q)),
              nn(It) !== nn(Pt) && ni(e);
          }
      }
      function oi(t, e) {
        if (Vt) {
          if (qt) return;
          ai();
        }
        var n;
        if (!e) {
          for (var i = hi((t = pi(t))); i !== xe && [we, Ce].indexOf(i) < 0; )
            i = i.parentNode;
          var a = [we, Ce].indexOf(i);
          0 <= a && ((n = !0), (e = 0 === a ? -1 : 1));
        }
        if (ct) {
          if (It === zt && -1 === e) return void ri("last", t);
          if (It === Wt && 1 === e) return void ri("first", t);
        }
        e &&
          ((It += ot * e),
          $ && (It = Math.floor(It)),
          ni(n || (t && "keydown" === t.type) ? t : null));
      }
      function ui() {
        (Ie = setInterval(function () {
          oi(null, Fe);
        }, xt)),
          (Pe = !0);
      }
      function li() {
        clearInterval(Ie), (Pe = !1);
      }
      function si(t, e) {
        ji(je, { "data-action": t }), (je.innerHTML = Ge[0] + t + Ge[1] + e);
      }
      function ci() {
        ui(), je && si("stop", bt[1]);
      }
      function fi() {
        li(), je && si("start", bt[0]);
      }
      function di() {
        Pe ? (fi(), (We = !0)) : (ci(), (We = !1));
      }
      function vi(t) {
        t.focus();
      }
      function pi(t) {
        return mi((t = t || m.event)) ? t.changedTouches[0] : t;
      }
      function hi(t) {
        return t.target || m.event.srcElement;
      }
      function mi(t) {
        return 0 <= t.type.indexOf("touch");
      }
      function yi(t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
      function gi() {
        return (
          (a = Ke.y - Ye.y),
          (r = Ke.x - Ye.x),
          (t = Math.atan2(a, r) * (180 / Math.PI)),
          (e = Ft),
          (n = !1),
          (i = Math.abs(90 - Math.abs(t))),
          90 - e <= i ? (n = "horizontal") : i <= e && (n = "vertical"),
          n === H.axis
        );
        var t, e, n, i, a, r;
      }
      function xi(t) {
        if (Vt) {
          if (qt) return;
          ai();
        }
        gt && Pe && li(), (Je = !0), Xe && (Ni(Xe), (Xe = null));
        var e = pi(t);
        Qt.emit(mi(t) ? "touchStart" : "dragStart", Ei(t)),
          !mi(t) && 0 <= ["img", "a"].indexOf(Gn(hi(t))) && yi(t),
          (Ke.x = Ye.x = e.clientX),
          (Ke.y = Ye.y = e.clientY),
          I && ((Qe = parseFloat(V.style[Ot].replace(Dt, ""))), Jn(V, "0s"));
      }
      function bi(t) {
        if (Je) {
          var e = pi(t);
          (Ke.x = e.clientX),
            (Ke.y = e.clientY),
            I
              ? Xe ||
                (Xe = Ai(function () {
                  !(function t(e) {
                    if (!jt) return void (Je = !1);
                    Ni(Xe);
                    Je &&
                      (Xe = Ai(function () {
                        t(e);
                      }));
                    "?" === jt && (jt = gi());
                    if (jt) {
                      !me && mi(e) && (me = !0);
                      try {
                        e.type &&
                          Qt.emit(mi(e) ? "touchMove" : "dragMove", Ei(e));
                      } catch (t) {}
                      var n = Qe,
                        i = Ue(Ke, Ye);
                      if (!F || tt || $) (n += i), (n += "px");
                      else {
                        var a = r
                          ? (i * rt * 100) / ((it + nt) * Lt)
                          : (100 * i) / (it + nt);
                        (n += a), (n += "%");
                      }
                      V.style[Ot] = Dt + n + kt;
                    }
                  })(t);
                }))
              : ("?" === jt && (jt = gi()), jt && (me = !0)),
            ("boolean" != typeof t.cancelable || t.cancelable) &&
              me &&
              t.preventDefault();
        }
      }
      function wi(i) {
        if (Je) {
          Xe && (Ni(Xe), (Xe = null)), I && Jn(V, ""), (Je = !1);
          var t = pi(i);
          (Ke.x = t.clientX), (Ke.y = t.clientY);
          var a = Ue(Ke, Ye);
          if (Math.abs(a)) {
            if (!mi(i)) {
              var n = hi(i);
              Ui(n, {
                click: function t(e) {
                  yi(e), _i(n, { click: t });
                },
              });
            }
            I
              ? (Xe = Ai(function () {
                  if (F && !$) {
                    var t = (-a * rt) / (it + nt);
                    (t = 0 < a ? Math.floor(t) : Math.ceil(t)), (It += t);
                  } else {
                    var e = -(Qe + a);
                    if (e <= 0) It = zt;
                    else if (e >= N[Lt - 1]) It = Wt;
                    else
                      for (var n = 0; n < Lt && e >= N[n]; )
                        e > N[(It = n)] && a < 0 && (It += 1), n++;
                  }
                  ni(i, a), Qt.emit(mi(i) ? "touchEnd" : "dragEnd", Ei(i));
                }))
              : jt && oi(i, 0 < a ? -1 : 1);
          }
        }
        "auto" === H.preventScrollOnTouch && (me = !1),
          Ft && (jt = "?"),
          gt && !Pe && ui();
      }
      function Ci() {
        (M || j).style.height = N[It + rt] - N[It] + "px";
      }
      function Mi() {
        var t = tt ? ((tt + nt) * Q) / it : Q / rt;
        return Math.min(Math.ceil(t), Q);
      }
      function Ti() {
        if (ht && !le && Le !== Be) {
          var t = Be,
            e = Le,
            n = Xi;
          for (Le < Be && ((t = Le), (e = Be), (n = Qi)); t < e; ) n(Ee[t]), t++;
          Be = Le;
        }
      }
      function Ei(t) {
        return {
          container: V,
          slideItems: G,
          navContainer: Ae,
          navItems: Ee,
          controlsContainer: xe,
          hasControls: oe,
          prevButton: we,
          nextButton: Ce,
          items: rt,
          slideBy: ot,
          cloneCount: Nt,
          slideCount: Q,
          slideCountNew: Lt,
          index: It,
          indexCached: Pt,
          displayIndex: tn(),
          navCurrentIndex: He,
          navCurrentIndexCached: Oe,
          pages: Le,
          pagesCached: Be,
          sheet: Mt,
          isOn: Y,
          event: t || {},
        };
      }
      f && console.warn("No slides found in", H.container);
    };
    return $i;
  })();
  