!function(e) {
  var t = {};

  function o(n) {
      if (t[n])
          return t[n].exports;
      var r = t[n] = {
          i: n,
          l: !1,
          exports: {}
      };
      return e[n].call(r.exports, r, r.exports, o),
          r.l = !0, r.exports;
  }
  o.m = e, o.c = t, o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
      });
  }, o.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      });
  }, o.t = function(e, t) {
      if (1 & t && (e = o(e)), 8 & t)
          return e;
      if (4 & t && "object" == typeof e && e && e.__esModule)
          return e;
      var n = Object.create(null);
      if (o.r(n), Object.defineProperty(n, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var r in e)
              o.d(n, r, function(t) {
                  return e[t];
              }.bind(null, r));
      return n;
  }, o.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default;
      } : function() {
          return e;
      };
      return o.d(t, "a", t), t;
  }, o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o(o.s = 16);
}({
  16: function(e, t, o) {
      "use strict";
      o.r(t);
      var n = o(2),
          r = o(7);
      figma.showUI(__html__, {
          width: 350,
          height: 540
      }), figma.ui.postMessage({
          type: r.a,
          data: figma.root.getPluginData(r.a)
      });
      const a = (e, t, o = !1, n = !0) => {
          e.name = n ? "" + t.hookName : e.name, e.layoutMode = t.direction, o || (e.primaryAxisSizingMode = "HORIZONTAL" === t.direction ? e.primaryAxisSizingMode : "AUTO", e.counterAxisSizingMode = "VERTICAL" === t.direction ? e.counterAxisSizingMode : "AUTO"), e.paddingTop = t.space.top, e.paddingRight = t.space.right, e.paddingBottom = t.space.bottom, e.paddingLeft = t.space.left, e.itemSpacing = t.space.between;
      };
      figma.ui.onmessage = (e) => __awaiter(this, void 0, void 0, function*() {
          let t = figma.currentPage.selection;
          if ("clear-stoorage" === e.type && (figma.root.setPluginData(r.a, ""), figma.notify("👻 Storage cleared")), "record-config" === e.type && figma.root.setPluginData(r.a, JSON.stringify(e.data)), "apply-layout" === e.type)
              if (t.length > 1) {
                  let o = t[0].parent,
                      r = figma.createFrame();
                  const i = figma.group(t, o);
                  r.x = i.x, r.y = i.y, r.backgrounds = [], r.resize(i.width, i.height), a(r, e.data), Object(n.f)(t).map(e => {
                      r.appendChild(e);
                  }), o.appendChild(r), figma.currentPage.selection = [r];
              }
          else if (1 === t.length && "FRAME" === t[0].type || 1 === t.length && "COMPONENT" === t[0].type) {
              let o = t[0];
              a(o, e.data, !0);
          } else
              1 === t.length && "INSTANCE" === t[0].type ? n.e.warn("Please select the master component", !0, 4e3) : n.e.error("Please select at least two blocks", !0, 4e3);
          if ("update-all" === e.type) {
              let t = figma.currentPage;
              n.e.custom("🥁", "Updating all layouts", !0, 2e3), e.data.layouts.map(e => {
                  let o = t.findAll(t => t.name.includes(e.hookName));
                  0 !== o.length && o.map(t => {
                      a(t, e, !1, !1);
                  });
              });
          }
      });
  },
  2: function(e, t, o) {
      "use strict";
      o.d(t, "e", (function() {
          return r;
      })), o.d(t, "f", (function() {
          return a;
      })), o.d(t, "c", (function() {
          return c;
      })), o.d(t, "b", (function() {
          return l;
      })), o.d(t, "d", (function() {
          return u;
      })), o.d(t, "a", (function() {
          return g;
      }));
      let n = "border-radius: 4px; padding: 2px 4px;";
      var r = {
          success: (e, t = !0, o = 800) => {
              t && console.log("%c" + e, "background: rgba(0, 255, 136, 0.14);" + n), figma.notify("🎉 " + e, {
                  timeout: o
              });
          },
          check: (e, t = !0, o = 800) => {
              t && console.log("%c" + e, "background: rgba(0, 204, 255, 0.14);" + n), figma.notify("✅ " + e, {
                  timeout: o
              });
          },
          neutral: (e, t = !0, o = 800) => {
              t && console.log("%c" + e, "background: rgba(128, 128, 128, 0.14);" + n), figma.notify("" + e, {
                  timeout: o
              });
          },
          warn: (e, t = !0, o = 800) => {
              t && console.log("%c" + e, "background: rgba(255, 123, 0, 0.14);" + n), figma.notify("☢️ " + e, {
                  timeout: o
              });
          },
          error: (e, t = !0, o = 800) => {
              t && console.log("%c" + e, "background: rgba(255,0,0,0.14);" + n), figma.notify("⛔️ " + e, {
                  timeout: o
              });
          },
          custom: (e, t, o = !0, r = 800) => {
              o && console.log("%c" + t, "background: rgba(128, 128, 128, 0.14);" + n), figma.notify(`${e} ${t}`, {
                  timeout: r
              });
          }
      };
      var a = e => {
          var t = e.map(e => e);
          return t.sort((e, t) => e.x - t.x), t.sort((e, t) => e.y - t.y);
      };
      var i = ["🐺", "🐱", "🐭", "🐹", "🐰", "🐸", "🐯", "🐨", "🐻", "🐷", "🐽", "🐮", "🐗", "🐵", "🐒", "🐴", "🐑", "🐘", "🐼", "🐧", "🐦", "🐤", "🐥", "🐣", "🐔", "🐍", "🐢", "🐛", "🐝", "🐜", "🐞", "🐌", "🐙", "🐚", "🐠", "🐟", "🐬", "🐳", "🐋", "🐄", "🐏", "🐀", "🐃", "🐅", "🐇", "🐉", "🐎", "🐐", "🐓", "🐕", "🐖", "🐁", "🐂", "🐲", "🐡", "🐊", "🐫", "🐪", "🐆", "🐈", "🐩", "🐾", "💐", "🌸", "🌷", "🍀", "🌹", "🌻", "🌺", "🍁", "🍃", "🍂", "🌿", "🌾", "🍄", "🌵", "🌴", "🌲", "🌳", "🏈", "🏀", "⚽", "⚾", "🎾", "🎱", "🍺", "🍻", "🍸", "🍹", "🍷", "🍴", "🍕", "🍔", "🍟", "🍗", "🍖", "🍝", "🍛", "🍤", "🍱", "🍣", "🍥", "🍙", "🍘", "🍚", "🍜", "🍲", "🍢", "🍡", "🍳", "🍞", "🍩", "🍮", "🍦", "🍨", "🍧", "🎂", "🍰", "🍪", "🍫", "🍬", "🍭", "🍯", "🍎", "🍏", "🍊", "🍋", "🍒", "🍇", "🍉", "🍓", "🍑", "🍈", "🍌", "🍐", "🍍", "🍠", "🍆", "🍅", "🌽"];
      var c = () => `${i[Math.floor(Math.random() * i.length)]}${Math.random().toString(36).slice(-4)}`;
      var l = (e, t, o) => {
          var n = document.createElement("a"),
              r = new Blob([JSON.stringify(e, null, 2)], {
                  type: o
              });
          n.href = URL.createObjectURL(r), n.download = t, n.click();
      };
      var u = () => Math.floor(1e8 * Math.random()).toString();
      var g = e => (e.layouts.forEach(e => {
          e.hasOwnProperty("fold") || (e.fold = !1);
      }), e);
  },
  7: function(e, t, o) {
      "use strict";
      o.d(t, "a", (function() {
          return n;
      }));
      const n = "last-config-record";
  }
});