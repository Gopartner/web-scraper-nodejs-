/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
		function D(a) {
			j.cssText = a
		}

		function E(a, b) {
			return D(n.join(a + ";") + (b || ""))
		}

		function F(a, b) {
			return typeof a === b
		}

		function G(a, b) {
			return !!~("" + a).indexOf(b)
		}

		function H(a, b) {
			for (var d in a) {
				var e = a[d];
				if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
			}
			return !1
		}

		function I(a, b, d) {
			for (var e in a) {
				var f = b[a[e]];
				if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
			}
			return !1
		}

		function J(a, b, c) {
			var d = a.charAt(0).toUpperCase() + a.slice(1),
				e = (a + " " + p.join(d + " ") + d).split(" ");
			return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c))
		}

		function K() {
			e.input = function(c) {
				for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
				return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
			}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
				for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
				return t
			}("search tel url email datetime date month week time datetime-local number range color".split(" "))
		}
		var d = "2.6.2",
			e = {},
			f = !0,
			g = b.documentElement,
			h = "modernizr",
			i = b.createElement(h),
			j = i.style,
			k = b.createElement("input"),
			l = ":)",
			m = {}.toString,
			n = " -webkit- -moz- -o- -ms- ".split(" "),
			o = "Webkit Moz O ms",
			p = o.split(" "),
			q = o.toLowerCase().split(" "),
			r = {
				svg: "http://www.w3.org/2000/svg"
			},
			s = {},
			t = {},
			u = {},
			v = [],
			w = v.slice,
			x, y = function(a, c, d, e) {
				var f, i, j, k, l = b.createElement("div"),
					m = b.body,
					n = m || b.createElement("body");
				if (parseInt(d, 10))
					while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
				return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
			},
			z = function(b) {
				var c = a.matchMedia || a.msMatchMedia;
				if (c) return c(b).matches;
				var d;
				return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
					d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
				}), d
			},
			A = function() {
				function d(d, e) {
					e = e || b.createElement(a[d] || "div"), d = "on" + d;
					var f = d in e;
					return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
				}
				var a = {
					select: "input",
					change: "input",
					submit: "form",
					reset: "form",
					error: "img",
					load: "img",
					abort: "img"
				};
				return d
			}(),
			B = {}.hasOwnProperty,
			C;
		!F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
			return B.call(a, b)
		} : C = function(a, b) {
			return b in a && F(a.constructor.prototype[b], "undefined")
		}, Function.prototype.bind || (Function.prototype.bind = function(b) {
			var c = this;
			if (typeof c != "function") throw new TypeError;
			var d = w.call(arguments, 1),
				e = function() {
					if (this instanceof e) {
						var a = function() {};
						a.prototype = c.prototype;
						var f = new a,
							g = c.apply(f, d.concat(w.call(arguments)));
						return Object(g) === g ? g : f
					}
					return c.apply(b, d.concat(w.call(arguments)))
				};
			return e
		}), s.flexbox = function() {
			return J("flexWrap")
		}, s.canvas = function() {
			var a = b.createElement("canvas");
			return !!a.getContext && !!a.getContext("2d")
		}, s.canvastext = function() {
			return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function")
		}, s.webgl = function() {
			return !!a.WebGLRenderingContext
		}, s.touch = function() {
			var c;
			return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
				c = a.offsetTop === 9
			}), c
		}, s.geolocation = function() {
			return "geolocation" in navigator
		}, s.postmessage = function() {
			return !!a.postMessage
		}, s.websqldatabase = function() {
			return !!a.openDatabase
		}, s.indexedDB = function() {
			return !!J("indexedDB", a)
		}, s.hashchange = function() {
			return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
		}, s.history = function() {
			return !!a.history && !!history.pushState
		}, s.draganddrop = function() {
			var a = b.createElement("div");
			return "draggable" in a || "ondragstart" in a && "ondrop" in a
		}, s.websockets = function() {
			return "WebSocket" in a || "MozWebSocket" in a
		}, s.rgba = function() {
			return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
		}, s.hsla = function() {
			return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
		}, s.multiplebgs = function() {
			return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
		}, s.backgroundsize = function() {
			return J("backgroundSize")
		}, s.borderimage = function() {
			return J("borderImage")
		}, s.borderradius = function() {
			return J("borderRadius")
		}, s.boxshadow = function() {
			return J("boxShadow")
		}, s.textshadow = function() {
			return b.createElement("div").style.textShadow === ""
		}, s.opacity = function() {
			return E("opacity:.55"), /^0.55$/.test(j.opacity)
		}, s.cssanimations = function() {
			return J("animationName")
		}, s.csscolumns = function() {
			return J("columnCount")
		}, s.cssgradients = function() {
			var a = "background-image:",
				b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
				c = "linear-gradient(left top,#9f9, white);";
			return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient")
		}, s.cssreflections = function() {
			return J("boxReflect")
		}, s.csstransforms = function() {
			return !!J("transform")
		}, s.csstransforms3d = function() {
			var a = !!J("perspective");
			return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
				a = b.offsetLeft === 9 && b.offsetHeight === 3
			}), a
		}, s.csstransitions = function() {
			return J("transition")
		}, s.fontface = function() {
			var a;
			return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
				var e = b.getElementById("smodernizr"),
					f = e.sheet || e.styleSheet,
					g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
				a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
			}), a
		}, s.generatedcontent = function() {
			var a;
			return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
				a = b.offsetHeight >= 3
			}), a
		}, s.video = function() {
			var a = b.createElement("video"),
				c = !1;
			try {
				if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
			} catch (d) {}
			return c
		}, s.audio = function() {
			var a = b.createElement("audio"),
				c = !1;
			try {
				if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
			} catch (d) {}
			return c
		}, s.localstorage = function() {
			try {
				return localStorage.setItem(h, h), localStorage.removeItem(h), !0
			} catch (a) {
				return !1
			}
		}, s.sessionstorage = function() {
			try {
				return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
			} catch (a) {
				return !1
			}
		}, s.webworkers = function() {
			return !!a.Worker
		}, s.applicationcache = function() {
			return !!a.applicationCache
		}, s.svg = function() {
			return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
		}, s.inlinesvg = function() {
			var a = b.createElement("div");
			return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
		}, s.smil = function() {
			return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
		}, s.svgclippaths = function() {
			return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
		};
		for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
		return e.input || K(), e.addTest = function(a, b) {
				if (typeof a == "object")
					for (var d in a) C(a, d) && e.addTest(d, a[d]);
				else {
					a = a.toLowerCase();
					if (e[a] !== c) return e;
					b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
				}
				return e
			}, D(""), i = k = null,
			function(a, b) {
				function k(a, b) {
					var c = a.createElement("p"),
						d = a.getElementsByTagName("head")[0] || a.documentElement;
					return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
				}

				function l() {
					var a = r.elements;
					return typeof a == "string" ? a.split(" ") : a
				}

				function m(a) {
					var b = i[a[g]];
					return b || (b = {}, h++, a[g] = h, i[h] = b), b
				}

				function n(a, c, f) {
					c || (c = b);
					if (j) return c.createElement(a);
					f || (f = m(c));
					var g;
					return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
				}

				function o(a, c) {
					a || (a = b);
					if (j) return a.createDocumentFragment();
					c = c || m(a);
					var d = c.frag.cloneNode(),
						e = 0,
						f = l(),
						g = f.length;
					for (; e < g; e++) d.createElement(f[e]);
					return d
				}

				function p(a, b) {
					b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
						return r.shivMethods ? n(c, a, b) : b.createElem(c)
					}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
						return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
					}) + ");return n}")(r, b.frag)
				}

				function q(a) {
					a || (a = b);
					var c = m(a);
					return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
				}
				var c = a.html5 || {},
					d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					f, g = "_html5shiv",
					h = 0,
					i = {},
					j;
				(function() {
					try {
						var a = b.createElement("a");
						a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
							b.createElement("a");
							var a = b.createDocumentFragment();
							return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
						}()
					} catch (c) {
						f = !0, j = !0
					}
				})();
				var r = {
					elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: c.shivCSS !== !1,
					supportsUnknownElements: j,
					shivMethods: c.shivMethods !== !1,
					type: "default",
					shivDocument: q,
					createElement: n,
					createDocumentFragment: o
				};
				a.html5 = r, q(b)
			}(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function(a) {
				return H([a])
			}, e.testAllProps = J, e.testStyles = y, e.prefixed = function(a, b, c) {
				return b ? J(a, b, c) : J(a, "pfx")
			}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
	}(this, this.document),
	function(a, b, c) {
		function d(a) {
			return "[object Function]" == o.call(a)
		}

		function e(a) {
			return "string" == typeof a
		}

		function f() {}

		function g(a) {
			return !a || "loaded" == a || "complete" == a || "uninitialized" == a
		}

		function h() {
			var a = p.shift();
			q = 1, a ? a.t ? m(function() {
				("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
			}, 0) : (a(), h()) : q = 0
		}

		function i(a, c, d, e, f, i, j) {
			function k(b) {
				if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
					"img" != a && m(function() {
						t.removeChild(l)
					}, 50);
					for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
				}
			}
			var j = j || B.errorTimeout,
				l = b.createElement(a),
				o = 0,
				r = 0,
				u = {
					t: d,
					s: c,
					e: f,
					a: i,
					x: j
				};
			1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
				k.call(this, r)
			}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
		}

		function j(a, b, c, d, f) {
			return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
		}

		function k() {
			var a = B;
			return a.loader = {
				load: j,
				i: 0
			}, a
		}
		var l = b.documentElement,
			m = a.setTimeout,
			n = b.getElementsByTagName("script")[0],
			o = {}.toString,
			p = [],
			q = 0,
			r = "MozAppearance" in l.style,
			s = r && !!b.createRange().compareNode,
			t = s ? l : n.parentNode,
			l = a.opera && "[object Opera]" == o.call(a.opera),
			l = !!b.attachEvent && !l,
			u = r ? "object" : l ? "script" : "img",
			v = l ? "script" : u,
			w = Array.isArray || function(a) {
				return "[object Array]" == o.call(a)
			},
			x = [],
			y = {},
			z = {
				timeout: function(a, b) {
					return b.length && (a.timeout = b[0]), a
				}
			},
			A, B;
		B = function(a) {
			function b(a) {
				var a = a.split("!"),
					b = x.length,
					c = a.pop(),
					d = a.length,
					c = {
						url: c,
						origUrl: c,
						prefixes: a
					},
					e, f, g;
				for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
				for (f = 0; f < b; f++) c = x[f](c);
				return c
			}

			function g(a, e, f, g, h) {
				var i = b(a),
					j = i.autoCallback;
				i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
					k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
				})))
			}

			function h(a, b) {
				function c(a, c) {
					if (a) {
						if (e(a)) c || (j = function() {
							var a = [].slice.call(arguments);
							k.apply(this, a), l()
						}), g(a, j, b, 0, h);
						else if (Object(a) === a)
							for (n in m = function() {
									var b = 0,
										c;
									for (c in a) a.hasOwnProperty(c) && b++;
									return b
								}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
								var a = [].slice.call(arguments);
								k.apply(this, a), l()
							} : j[n] = function(a) {
								return function() {
									var b = [].slice.call(arguments);
									a && a.apply(this, b), l()
								}
							}(k[n])), g(a[n], j, b, n, h))
					} else !c && l()
				}
				var h = !!a.test,
					i = a.load || a.both,
					j = a.callback || f,
					k = j,
					l = a.complete || f,
					m, n;
				c(h ? a.yep : a.nope, !!i), i && c(i)
			}
			var i, j, l = this.yepnope.loader;
			if (e(a)) g(a, 0, l, 0);
			else if (w(a))
				for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
			else Object(a) === a && h(a, l)
		}, B.addPrefix = function(a, b) {
			z[a] = b
		}, B.addFilter = function(a) {
			x.push(a)
		}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
			b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
		}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
			var k = b.createElement("script"),
				l, o, e = e || B.errorTimeout;
			k.src = a;
			for (o in d) k.setAttribute(o, d[o]);
			c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
				!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
			}, m(function() {
				l || (l = 1, c(1))
			}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
		}, a.yepnope.injectCss = function(a, c, d, e, g, i) {
			var e = b.createElement("link"),
				j, c = i ? h : c || f;
			e.href = a, e.rel = "stylesheet", e.type = "text/css";
			for (j in d) e.setAttribute(j, d[j]);
			g || (n.parentNode.insertBefore(e, n), m(c, 0))
		}
	}(this, document), Modernizr.load = function() {
		yepnope.apply(window, [].slice.call(arguments, 0))
	};
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * JQUERY CORE 1.10.2; Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; http://jquery.org/license
 * Includes Sizzle.js; Copyright 2013 jQuery Foundation, Inc. and other contributors; http://opensource.org/licenses/MIT
 *
 * NUGET: END LICENSE TEXT */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e, t) {
	var n, r, i = typeof t,
		o = e.location,
		a = e.document,
		s = a.documentElement,
		l = e.jQuery,
		u = e.$,
		c = {},
		p = [],
		f = "1.10.2",
		d = p.concat,
		h = p.push,
		g = p.slice,
		m = p.indexOf,
		y = c.toString,
		v = c.hasOwnProperty,
		b = f.trim,
		x = function(e, t) {
			return new x.fn.init(e, t, r)
		},
		w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		T = /\S+/g,
		C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		E = /^[\],:{}\s]*$/,
		S = /(?:^|:|,)(?:\s*\[)+/g,
		A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		D = /^-ms-/,
		L = /-([\da-z])/gi,
		H = function(e, t) {
			return t.toUpperCase()
		},
		q = function(e) {
			(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
		},
		_ = function() {
			a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
		};
	x.fn = x.prototype = {
		jquery: f,
		constructor: x,
		init: function(e, n, r) {
			var i, o;
			if (!e) return this;
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if (i[1]) {
					if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
						for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if (o = a.getElementById(i[2]), o && o.parentNode) {
					if (o.id !== i[2]) return r.find(e);
					this.length = 1, this[0] = o
				}
				return this.context = a, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		},
		selector: "",
		length: 0,
		toArray: function() {
			return g.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return x.each(this, e, t)
		},
		ready: function(e) {
			return x.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(g.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(x.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: h,
		sort: [].sort,
		splice: [].splice
	}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
		var e, n, r, i, o, a, s = arguments[0] || {},
			l = 1,
			u = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
			if (null != (o = arguments[l]))
				for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
		return s
	}, x.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		noConflict: function(t) {
			return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--x.readyWait : !x.isReady) {
				if (!a.body) return setTimeout(x.ready);
				x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === x.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === x.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			var n;
			if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
			try {
				if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			if (x.support.ownLast)
				for (n in e) return v.call(e, n);
			for (n in e);
			return n === t || v.call(e, n)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || a;
			var r = k.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var r, i;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
		},
		noop: function() {},
		globalEval: function(t) {
			t && x.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(D, "ms-").replace(L, H)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e);
			if (n) {
				if (a) {
					for (; o > i; i++)
						if (r = t.apply(e[i], n), r === !1) break
				} else
					for (i in e)
						if (r = t.apply(e[i], n), r === !1) break
			} else if (a) {
				for (; o > i; i++)
					if (r = t.call(e[i], i, e[i]), r === !1) break
			} else
				for (i in e)
					if (r = t.call(e[i], i, e[i]), r === !1) break;
			return e
		},
		trim: b && !b.call("\ufeff\u00a0") ? function(e) {
			return null == e ? "" : b.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(C, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (m) return m.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if ("number" == typeof r)
				for (; r > o; o++) e[i++] = n[o];
			else
				while (n[o] !== t) e[i++] = n[o++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				o = 0,
				a = e.length;
			for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e),
				s = [];
			if (a)
				for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
			else
				for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
			return d.apply([], s)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(g.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : t
		},
		access: function(e, n, r, i, o, a, s) {
			var l = 0,
				u = e.length,
				c = null == r;
			if ("object" === x.type(r)) {
				o = !0;
				for (l in r) x.access(e, n, l, r[l], !0, a, s)
			} else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
					return c.call(x(e), n)
				})), n))
				for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
			return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
		},
		now: function() {
			return (new Date).getTime()
		},
		swap: function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		}
	}), x.ready.promise = function(t) {
		if (!n)
			if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
			else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
		else {
			a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
			var r = !1;
			try {
				r = null == e.frameElement && a.documentElement
			} catch (i) {}
			r && r.doScroll && function o() {
				if (!x.isReady) {
					try {
						r.doScroll("left")
					} catch (e) {
						return setTimeout(o, 50)
					}
					_(), x.ready()
				}
			}()
		}
		return n.promise(t)
	}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		c["[object " + t + "]"] = t.toLowerCase()
	});

	function M(e) {
		var t = e.length,
			n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	r = x(a),
		function(e, t) {
			var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
				w = e.document,
				T = 0,
				C = 0,
				N = st(),
				k = st(),
				E = st(),
				S = !1,
				A = function(e, t) {
					return e === t ? (S = !0, 0) : 0
				},
				j = typeof t,
				D = 1 << 31,
				L = {}.hasOwnProperty,
				H = [],
				q = H.pop,
				_ = H.push,
				M = H.push,
				O = H.slice,
				F = H.indexOf || function(e) {
					var t = 0,
						n = this.length;
					for (; n > t; t++)
						if (this[t] === e) return t;
					return -1
				},
				B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				P = "[\\x20\\t\\r\\n\\f]",
				R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				W = R.replace("w", "w#"),
				$ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
				I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
				z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
				X = RegExp("^" + P + "*," + P + "*"),
				U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
				V = RegExp(P + "*[+~]"),
				Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
				J = RegExp(I),
				G = RegExp("^" + W + "$"),
				Q = {
					ID: RegExp("^#(" + R + ")"),
					CLASS: RegExp("^\\.(" + R + ")"),
					TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + $),
					PSEUDO: RegExp("^" + I),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
					bool: RegExp("^(?:" + B + ")$", "i"),
					needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
				},
				K = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				et = /^(?:input|select|textarea|button)$/i,
				tt = /^h\d$/i,
				nt = /'|\\/g,
				rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
				it = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
				};
			try {
				M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
			} catch (ot) {
				M = {
					apply: H.length ? function(e, t) {
						_.apply(e, O.call(t))
					} : function(e, t) {
						var n = e.length,
							r = 0;
						while (e[n++] = t[r++]);
						e.length = n - 1
					}
				}
			}

			function at(e, t, n, i) {
				var o, a, s, l, u, c, d, m, y, x;
				if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (l = t.nodeType) && 9 !== l) return [];
				if (h && !i) {
					if (o = Z.exec(e))
						if (s = o[1]) {
							if (9 === l) {
								if (a = t.getElementById(s), !a || !a.parentNode) return n;
								if (a.id === s) return n.push(a), n
							} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
						} else {
							if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
							if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
						} if (r.qsa && (!g || !g.test(e))) {
						if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
							c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
							while (u--) c[u] = m + yt(c[u]);
							y = V.test(e) && t.parentNode || t, x = c.join(",")
						}
						if (x) try {
							return M.apply(n, y.querySelectorAll(x)), n
						} catch (T) {} finally {
							d || t.removeAttribute("id")
						}
					}
				}
				return kt(e.replace(z, "$1"), t, n, i)
			}

			function st() {
				var e = [];

				function t(n, r) {
					return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
				}
				return t
			}

			function lt(e) {
				return e[b] = !0, e
			}

			function ut(e) {
				var t = f.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function ct(e, t) {
				var n = e.split("|"),
					r = e.length;
				while (r--) o.attrHandle[n[r]] = t
			}

			function pt(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
				if (r) return r;
				if (n)
					while (n = n.nextSibling)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function ft(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function dt(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function ht(e) {
				return lt(function(t) {
					return t = +t, lt(function(n, r) {
						var i, o = e([], n.length, t),
							a = o.length;
						while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			s = at.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, r = at.support = {}, p = at.setDocument = function(e) {
				var n = e ? e.ownerDocument || e : w,
					i = n.defaultView;
				return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
					p()
				}), r.attributes = ut(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), r.getElementsByTagName = ut(function(e) {
					return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
				}), r.getElementsByClassName = ut(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), r.getById = ut(function(e) {
					return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
				}), r.getById ? (o.find.ID = function(e, t) {
					if (typeof t.getElementById !== j && h) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, o.filter.ID = function(e) {
					var t = e.replace(rt, it);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete o.find.ID, o.filter.ID = function(e) {
					var t = e.replace(rt, it);
					return function(e) {
						var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), o.find.TAG = r.getElementsByTagName ? function(e, n) {
					return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = o[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, o.find.CLASS = r.getElementsByClassName && function(e, n) {
					return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
				}, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
				}), ut(function(e) {
					var t = n.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
				})), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
					r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
				}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						while (t = t.parentNode)
							if (t === e) return !0;
					return !1
				}, A = d.compareDocumentPosition ? function(e, t) {
					if (e === t) return S = !0, 0;
					var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
					return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, t) {
					var r, i = 0,
						o = e.parentNode,
						a = t.parentNode,
						s = [e],
						l = [t];
					if (e === t) return S = !0, 0;
					if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
					if (o === a) return pt(e, t);
					r = e;
					while (r = r.parentNode) s.unshift(r);
					r = t;
					while (r = r.parentNode) l.unshift(r);
					while (s[i] === l[i]) i++;
					return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
				}, n) : f
			}, at.matches = function(e, t) {
				return at(e, null, null, t)
			}, at.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
					var n = y.call(e, t);
					if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (i) {}
				return at(t, f, null, [e]).length > 0
			}, at.contains = function(e, t) {
				return (e.ownerDocument || e) !== f && p(e), v(e, t)
			}, at.attr = function(e, n) {
				(e.ownerDocument || e) !== f && p(e);
				var i = o.attrHandle[n.toLowerCase()],
					a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
				return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
			}, at.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, at.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					o = 0;
				if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
					while (t = e[o++]) t === e[o] && (i = n.push(o));
					while (i--) e.splice(n[i], 1)
				}
				return e
			}, a = at.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r]; r++) n += a(t);
				return n
			}, o = at.selectors = {
				cacheLength: 50,
				createPseudo: lt,
				match: Q,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
					},
					PSEUDO: function(e) {
						var n, r = !e[5] && e[2];
						return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(rt, it).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = N[e + " "];
						return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, n) {
						return function(r) {
							var i = at.attr(r, e);
							return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								y = s && t.nodeName.toLowerCase(),
								v = !l && !s;
							if (m) {
								if (o) {
									while (g) {
										p = t;
										while (p = p[g])
											if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? m.firstChild : m.lastChild], a && v) {
									c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
									while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
										if (1 === p.nodeType && ++f && p === t) {
											c[e] = [T, d, f];
											break
										}
								} else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
								else
									while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
										if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
								return f -= i, f === r || 0 === f % r && f / r >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
						return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
							var i, o = r(e, t),
								a = o.length;
							while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
						}) : function(e) {
							return r(e, 0, n)
						}) : r
					}
				},
				pseudos: {
					not: lt(function(e) {
						var t = [],
							n = [],
							r = l(e.replace(z, "$1"));
						return r[b] ? lt(function(e, t, n, i) {
							var o, a = r(e, null, i, []),
								s = e.length;
							while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function(e, i, o) {
							return t[0] = e, r(t, null, o, n), !n.pop()
						}
					}),
					has: lt(function(e) {
						return function(t) {
							return at(e, t).length > 0
						}
					}),
					contains: lt(function(e) {
						return function(t) {
							return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
						}
					}),
					lang: lt(function(e) {
						return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === d
					},
					focus: function(e) {
						return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !o.pseudos.empty(e)
					},
					header: function(e) {
						return tt.test(e.nodeName)
					},
					input: function(e) {
						return et.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: ht(function() {
						return [0]
					}),
					last: ht(function(e, t) {
						return [t - 1]
					}),
					eq: ht(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: ht(function(e, t) {
						var n = 0;
						for (; t > n; n += 2) e.push(n);
						return e
					}),
					odd: ht(function(e, t) {
						var n = 1;
						for (; t > n; n += 2) e.push(n);
						return e
					}),
					lt: ht(function(e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; --r >= 0;) e.push(r);
						return e
					}),
					gt: ht(function(e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; t > ++r;) e.push(r);
						return e
					})
				}
			}, o.pseudos.nth = o.pseudos.eq;
			for (n in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) o.pseudos[n] = ft(n);
			for (n in {
					submit: !0,
					reset: !0
				}) o.pseudos[n] = dt(n);

			function gt() {}
			gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

			function mt(e, t) {
				var n, r, i, a, s, l, u, c = k[e + " "];
				if (c) return t ? 0 : c.slice(0);
				s = e, l = [], u = o.preFilter;
				while (s) {
					(!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace(z, " ")
					}), s = s.slice(n.length));
					for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
						value: n,
						type: a,
						matches: r
					}), s = s.slice(n.length));
					if (!n) break
				}
				return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
			}

			function yt(e) {
				var t = 0,
					n = e.length,
					r = "";
				for (; n > t; t++) r += e[t].value;
				return r
			}

			function vt(e, t, n) {
				var r = t.dir,
					o = n && "parentNode" === r,
					a = C++;
				return t.first ? function(t, n, i) {
					while (t = t[r])
						if (1 === t.nodeType || o) return e(t, n, i)
				} : function(t, n, s) {
					var l, u, c, p = T + " " + a;
					if (s) {
						while (t = t[r])
							if ((1 === t.nodeType || o) && e(t, n, s)) return !0
					} else
						while (t = t[r])
							if (1 === t.nodeType || o)
								if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
									if ((l = u[1]) === !0 || l === i) return l === !0
								} else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
				}
			}

			function bt(e) {
				return e.length > 1 ? function(t, n, r) {
					var i = e.length;
					while (i--)
						if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function xt(e, t, n, r, i) {
				var o, a = [],
					s = 0,
					l = e.length,
					u = null != t;
				for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
				return a
			}

			function wt(e, t, n, r, i, o) {
				return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
					var u, c, p, f = [],
						d = [],
						h = a.length,
						g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
						m = !e || !o && t ? g : xt(g, f, e, s, l),
						y = n ? i || (o ? e : h || r) ? [] : a : m;
					if (n && n(m, y, s, l), r) {
						u = xt(y, d), r(u, [], s, l), c = u.length;
						while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
					}
					if (o) {
						if (i || e) {
							if (i) {
								u = [], c = y.length;
								while (c--)(p = y[c]) && u.push(m[c] = p);
								i(null, y = [], u, l)
							}
							c = y.length;
							while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
						}
					} else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
				})
			}

			function Tt(e) {
				var t, n, r, i = e.length,
					a = o.relative[e[0].type],
					s = a || o.relative[" "],
					l = a ? 1 : 0,
					c = vt(function(e) {
						return e === t
					}, s, !0),
					p = vt(function(e) {
						return F.call(t, e) > -1
					}, s, !0),
					f = [function(e, n, r) {
						return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
					}];
				for (; i > l; l++)
					if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
					else {
						if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
							for (r = ++l; i > r; r++)
								if (o.relative[e[r].type]) break;
							return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
								value: " " === e[l - 2].type ? "*" : ""
							})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
						}
						f.push(n)
					} return bt(f)
			}

			function Ct(e, t) {
				var n = 0,
					r = t.length > 0,
					a = e.length > 0,
					s = function(s, l, c, p, d) {
						var h, g, m, y = [],
							v = 0,
							b = "0",
							x = s && [],
							w = null != d,
							C = u,
							N = s || a && o.find.TAG("*", d && l.parentNode || l),
							k = T += null == C ? 1 : Math.random() || .1;
						for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
							if (a && h) {
								g = 0;
								while (m = e[g++])
									if (m(h, l, c)) {
										p.push(h);
										break
									} w && (T = k, i = ++n)
							}
							r && ((h = !m && h) && v--, s && x.push(h))
						}
						if (v += b, r && b !== v) {
							g = 0;
							while (m = t[g++]) m(x, y, l, c);
							if (s) {
								if (v > 0)
									while (b--) x[b] || y[b] || (y[b] = q.call(p));
								y = xt(y)
							}
							M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
						}
						return w && (T = k, u = C), x
					};
				return r ? lt(s) : s
			}
			l = at.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = E[e + " "];
				if (!o) {
					t || (t = mt(e)), n = t.length;
					while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
					o = E(e, Ct(i, r))
				}
				return o
			};

			function Nt(e, t, n) {
				var r = 0,
					i = t.length;
				for (; i > r; r++) at(e, t[r], n);
				return n
			}

			function kt(e, t, n, i) {
				var a, s, u, c, p, f = mt(e);
				if (!i && 1 === f.length) {
					if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
						if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
						e = e.slice(s.shift().value.length)
					}
					a = Q.needsContext.test(e) ? 0 : s.length;
					while (a--) {
						if (u = s[a], o.relative[c = u.type]) break;
						if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
							if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
							break
						}
					}
				}
				return l(e, f)(i, t, !h, n, V.test(e)), n
			}
			r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
				return 1 & e.compareDocumentPosition(f.createElement("div"))
			}), ut(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || ct("type|href|height|width", function(e, n, r) {
				return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
			}), r.attributes && ut(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || ct("value", function(e, n, r) {
				return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
			}), ut(function(e) {
				return null == e.getAttribute("disabled")
			}) || ct(B, function(e, n, r) {
				var i;
				return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
			}), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
		}(e);
	var O = {};

	function F(e) {
		var t = O[e] = {};
		return x.each(e.match(T) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	x.Callbacks = function(e) {
		e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
		var n, r, i, o, a, s, l = [],
			u = !e.once && [],
			c = function(t) {
				for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
					if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						r = !1;
						break
					} n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
			},
			p = {
				add: function() {
					if (l) {
						var t = l.length;
						(function i(t) {
							x.each(t, function(t, n) {
								var r = x.type(n);
								"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = l.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function() {
					return l && x.each(arguments, function(e, t) {
						var r;
						while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
					}), this
				},
				has: function(e) {
					return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], o = 0, this
				},
				disable: function() {
					return l = u = r = t, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = t, r || p.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return p
	}, x.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", x.Callbacks("once memory"), "resolved"],
					["reject", "fail", x.Callbacks("once memory"), "rejected"],
					["notify", "progress", x.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return x.Deferred(function(n) {
							x.each(t, function(t, o) {
								var a = o[0],
									s = x.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? x.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, x.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = g.call(arguments),
				r = n.length,
				i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : x.Deferred(),
				a = function(e, t, n) {
					return function(r) {
						t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				},
				s, l, u;
			if (r > 1)
				for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
			return i || o.resolveWith(u, n), o.promise()
		}
	}), x.support = function(t) {
		var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
		s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (f in {
				submit: !0,
				change: !0,
				focusin: !0
			}) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
		d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
		for (f in x(t)) break;
		return t.ownLast = "0" !== f, x(function() {
			var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				l = a.getElementsByTagName("body")[0];
			l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === d.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
		}), n = s = l = u = r = o = null, t
	}({});
	var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		P = /([A-Z])/g;

	function R(e, n, r, i) {
		if (x.acceptData(e)) {
			var o, a, s = x.expando,
				l = e.nodeType,
				u = l ? x.cache : e,
				c = l ? e[s] : e[s] && s;
			if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
				toJSON: x.noop
			}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
		}
	}

	function W(e, t, n) {
		if (x.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? x.cache : e,
				s = o ? e[x.expando] : x.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					while (i--) delete r[t[i]];
					if (n ? !I(r) : !x.isEmptyObject(r)) return
				}(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}
	x.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
		},
		data: function(e, t, n) {
			return R(e, t, n)
		},
		removeData: function(e, t) {
			return W(e, t)
		},
		_data: function(e, t, n) {
			return R(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return W(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), x.fn.extend({
		data: function(e, n) {
			var r, i, o = null,
				a = 0,
				s = this[0];
			if (e === t) {
				if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
					for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
					x._data(s, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				x.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				x.data(this, e, n)
			}) : s ? $(s, e, x.data(s, e)) : null
		},
		removeData: function(e) {
			return this.each(function() {
				x.removeData(this, e)
			})
		}
	});

	function $(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(P, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
				} catch (o) {}
				x.data(e, n, r)
			} else r = t
		}
		return r
	}

	function I(e) {
		var t;
		for (t in e)
			if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	x.extend({
		queue: function(e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = x._queueHooks(e, t),
				a = function() {
					x.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return x._data(e, n) || x._data(e, n, {
				empty: x.Callbacks("once memory").add(function() {
					x._removeData(e, t + "queue"), x._removeData(e, n)
				})
			})
		}
	}), x.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = x.queue(this, e, n);
				x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				x.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = x.Deferred(),
				a = this,
				s = this.length,
				l = function() {
					--i || o.resolveWith(a, [a])
				};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var z, X, U = /[\t\r\n\f]/g,
		V = /\r/g,
		Y = /^(?:input|select|textarea|button|object)$/i,
		J = /^(?:a|area)$/i,
		G = /^(?:checked|selected)$/i,
		Q = x.support.getSetAttribute,
		K = x.support.input;
	x.fn.extend({
		attr: function(e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				x.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = x.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).addClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(T) || []; s > a; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
						o = 0;
						while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
						n.className = x.trim(r)
					} return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).removeClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(T) || []; s > a; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
						o = 0;
						while (i = t[o++])
							while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						n.className = e ? x.trim(r) : ""
					} return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) {
					var t, r = 0,
						o = x(this),
						a = e.match(T) || [];
					while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0];
			{
				if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
						return null == e ? "" : e + ""
					})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
			}
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = x.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						a = o ? null : [],
						s = o ? i + 1 : r.length,
						l = 0 > i ? s : o ? i : 0;
					for (; s > l; l++)
						if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if (t = x(n).val(), o) return t;
							a.push(t)
						} return a
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = x.makeArray(t),
						a = i.length;
					while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, r) {
			var o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(T);
			if (o && 1 === e.nodeType)
				while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = x.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), X = {
		set: function(e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var r = x.expr.attrHandle[n] || x.find.attr;
		x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
			var o = x.expr.attrHandle[n],
				a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return x.expr.attrHandle[n] = o, a
		} : function(e, n, r) {
			return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), K && Q || (x.attrHooks.value = {
		set: function(e, n, r) {
			return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
		}
	}), Q || (z = {
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, x.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		},
		set: z.set
	}, x.attrHooks.contenteditable = {
		set: function(e, t, n) {
			z.set(e, "" === t ? !1 : t, n)
		}
	}, x.each(["width", "height"], function(e, n) {
		x.attrHooks[n] = {
			set: function(e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		}
	})), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
		x.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), x.support.style || (x.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), x.support.optSelected || (x.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		x.propFix[this.toLowerCase()] = this
	}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
		x.valHooks[this] = {
			set: function(e, n) {
				return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
			}
		}, x.support.checkOn || (x.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}

	function ot() {
		return !1
	}

	function at() {
		try {
			return a.activeElement
		} catch (e) {}
	}
	x.event = {
		global: {},
		add: function(e, n, r, o, a) {
			var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
			if (v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
					return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
				}, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
				while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
					type: g,
					origType: y,
					data: o,
					handler: r,
					guid: r.guid,
					selector: a,
					needsContext: a && x.expr.match.needsContext.test(a),
					namespace: m.join(".")
				}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
			if (m && (c = m.events)) {
				t = (t || "").match(T) || [""], u = t.length;
				while (u--)
					if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
						while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
						l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
					} else
						for (d in c) x.event.remove(e, d + t[u], n, r, !0);
				x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, o) {
			var s, l, u, c, p, f, d, h = [i || a],
				g = v.call(n, "type") ? n.type : n,
				m = v.call(n, "namespace") ? n.namespace.split(".") : [];
			if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if (!o && !p.noBubble && !x.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
					f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
				}
				d = 0;
				while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
				if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
					f = i[l], f && (i[l] = null), x.event.triggered = g;
					try {
						i[g]()
					} catch (y) {}
					x.event.triggered = t, f && (i[l] = f)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = x.event.fix(e);
			var n, r, i, o, a, s = [],
				l = g.call(arguments),
				u = (x._data(this, "events") || {})[e.type] || [],
				c = x.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u), n = 0;
				while ((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;
					while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
				l = n.delegateCount,
				u = e.target;
			if (l && u.nodeType && (!e.button || "click" !== e.type))
				for (; u != this; u = u.parentNode || this)
					if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
						for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
						o.length && s.push({
							elem: u,
							handlers: o
						})
					} return n.length > l && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function(e) {
			if (e[x.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
			while (t--) n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, o, s = n.button,
					l = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== at() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === at() && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				},
				_default: function(e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = x.extend(new x.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, x.removeEvent = a.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, x.Event = function(e, n) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
	}, x.Event.prototype = {
		isDefaultPrevented: ot,
		isPropagationStopped: ot,
		isImmediatePropagationStopped: ot,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, x.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		x.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), x.support.submitBubbles || (x.event.special.submit = {
		setup: function() {
			return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
				r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), x._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
		}
	}), x.support.changeBubbles || (x.event.special.change = {
		setup: function() {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), x.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
			})), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
				}), x._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function(e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function() {
			return x.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), x.support.focusinBubbles || x.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				x.event.simulate(t, e.target, x.event.fix(e), !0)
			};
		x.event.special[t] = {
			setup: function() {
				0 === n++ && a.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && a.removeEventListener(e, r, !0)
			}
		}
	}), x.fn.extend({
		on: function(e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e) this.on(a, n, r, e[a], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
			else if (!i) return this;
			return 1 === o && (s = i, i = function(e) {
				return x().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
				x.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
				x.event.remove(this, e, r, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var r = this[0];
			return r ? x.event.trigger(e, n, r, !0) : t
		}
	});
	var st = /^.[^:#\[\.,]*$/,
		lt = /^(?:parents|prev(?:Until|All))/,
		ut = x.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	x.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
				for (t = 0; i > t; t++)
					if (x.contains(r[t], this)) return !0
			}));
			for (t = 0; i > t; t++) x.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t, n = x(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; r > t; t++)
					if (x.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(ft(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(ft(this, e || [], !1))
		},
		is: function(e) {
			return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for (; i > r; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					} return this.pushStack(o.length > 1 ? x.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
				r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function pt(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}
	x.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next: function(e) {
			return pt(e, "nextSibling")
		},
		prev: function(e) {
			return pt(e, "previousSibling")
		},
		nextAll: function(e) {
			return x.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return x.sibling(e.firstChild)
		},
		contents: function(e) {
			return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
		}
	}, function(e, t) {
		x.fn[e] = function(n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), x.extend({
		filter: function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, r) {
			var i = [],
				o = e[n];
			while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});

	function ft(e, t, n) {
		if (x.isFunction(t)) return x.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return x.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (st.test(t)) return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function(e) {
			return x.inArray(e, t) >= 0 !== n
		})
	}

	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			while (t.length) n.createElement(t.pop());
		return n
	}
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Ct = /^(?:checkbox|radio)$/i,
		Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		jt = dt(a),
		Dt = jt.appendChild(a.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
		text: function(e) {
			return x.access(this, function(e) {
				return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = e ? x.filter(e, this) : this,
				i = 0;
			for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for (; null != (e = this[t]); t++) {
				1 === e.nodeType && x.cleanData(Ft(e, !1));
				while (e.firstChild) e.removeChild(e.firstChild);
				e.options && x.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return x.clone(this, e, t)
			})
		},
		html: function(e) {
			return x.access(this, function(e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
				if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = x.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = d.apply([], e);
			var r, i, o, a, s, l, u = 0,
				c = this.length,
				p = this,
				f = c - 1,
				h = e[0],
				g = x.isFunction(h);
			if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
				var i = p.eq(r);
				g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
				if (o)
					for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
				l = r = null
			}
			return this
		}
	});

	function Lt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Ht(e) {
		return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
	}

	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function _t(e, t) {
		var n, r = 0;
		for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
	}

	function Mt(e, t) {
		if (1 === t.nodeType && x.hasData(e)) {
			var n, r, i, o = x._data(e),
				a = x._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
			}
			a.data && (a.data = x.extend({}, a.data))
		}
	}

	function Ot(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
				i = x._data(t);
				for (r in i.events) x.removeEvent(t, r, i.handle);
				t.removeAttribute(x.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	x.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		x.fn[e] = function(e) {
			var n, r = 0,
				i = [],
				o = x(e),
				a = o.length - 1;
			for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
			return this.pushStack(i)
		}
	});

	function Ft(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s)
			for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
		return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
	}

	function Bt(e) {
		Ct.test(e.type) && (e.defaultChecked = e.checked)
	}
	x.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
			if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
				for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
			if (t)
				if (n)
					for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
				else Mt(e, o);
			return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			var i, o, a, s, l, u, c, p = e.length,
				f = dt(t),
				d = [],
				h = 0;
			for (; p > h; h++)
				if (o = e[h], o || 0 === o)
					if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
					else if (wt.test(o)) {
				s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
				while (i--) s = s.lastChild;
				if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
					o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
					while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
				}
				x.merge(d, s.childNodes), s.textContent = "";
				while (s.firstChild) s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(t.createTextNode(o));
			s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
			while (o = d[h++])
				if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
					i = 0;
					while (o = s[i++]) kt.test(o.type || "") && n.push(o)
				} return s = null, f
		},
		cleanData: function(e, t) {
			var n, r, o, a, s = 0,
				l = x.expando,
				u = x.cache,
				c = x.support.deleteExpando,
				f = x.event.special;
			for (; null != (n = e[s]); s++)
				if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
					if (a.events)
						for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
					u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
				}
		},
		_evalUrl: function(e) {
			return x.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), x.fn.extend({
		wrapAll: function(e) {
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return x.isFunction(e) ? this.each(function(t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = x(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = x.isFunction(e);
			return this.each(function(n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + w + ")(.*)$", "i"),
		Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + w + ")", "i"),
		Gt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = en.length;
		while (i--)
			if (t = en[i] + n, t in e) return t;
		return r
	}

	function nn(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}

	function rn(e, t) {
		var n, r, i, o = [],
			a = 0,
			s = e.length;
		for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	x.fn.extend({
		css: function(e, n) {
			return x.access(this, function(e, n, r) {
				var i, o, a = {},
					s = 0;
				if (x.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? x.style(e, n, r) : x.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return rn(this, !0)
		},
		hide: function() {
			return rn(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				nn(this) ? x(this).show() : x(this).hide()
			})
		}
	}), x.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": x.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = x.camelCase(n),
					u = e.style;
				if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
				if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					u[n] = r
				} catch (c) {}
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, l = x.camelCase(n);
			return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
		}
	}), e.getComputedStyle ? (Rt = function(t) {
		return e.getComputedStyle(t, null)
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	}) : a.documentElement.currentStyle && (Rt = function(e) {
		return e.currentStyle
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s[n] : t,
			u = e.style;
		return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	});

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			a = 0;
		for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}

	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
			r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function ln(e) {
		var t = a,
			n = Gt[e];
		return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
	}

	function un(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
			r = x.css(n[0], "display");
		return n.remove(), r
	}
	x.each(["height", "width"], function(e, n) {
		x.cssHooks[n] = {
			get: function(e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function(e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), x.support.opacity || (x.cssHooks.opacity = {
		get: function(e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), x(function() {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? x.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
			x.cssHooks[n] = {
				get: function(e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
	}, x.expr.filters.visible = function(e) {
		return !x.expr.filters.hidden(e)
	}), x.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		x.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {},
					o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ut.test(e) || (x.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize: function() {
			return x.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
			}).map(function(e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), x.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
			o(this.name, this.value)
		});
		else
			for (r in e) gn(r, e[r], n, o);
		return i.join("&").replace(cn, "+")
	};

	function gn(e, t, n, r) {
		var i;
		if (x.isArray(t)) x.each(t, function(t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== x.type(t)) r(e, t);
		else
			for (i in t) gn(e + "[" + i + "]", t[i], n, r)
	}
	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		x.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), x.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var mn, yn, vn = x.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Nn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = x.fn.load,
		An = {},
		jn = {},
		Dn = "*/".concat("*");
	try {
		yn = o.href
	} catch (Ln) {
		yn = a.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];

	function Hn(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(T) || [];
			if (x.isFunction(n))
				while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function qn(e, n, r, i) {
		var o = {},
			a = e === jn;

		function s(l) {
			var u;
			return o[l] = !0, x.each(e[l] || [], function(e, l) {
				var c = l(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), u
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}

	function _n(e, n) {
		var r, i, o = x.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && x.extend(!0, e, r), e
	}
	x.fn.load = function(e, n, r) {
		if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
		var i, o, a, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
		}).complete(r && function(e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		x.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Cn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": x.parseJSON,
				"text xml": x.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function(e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
				h = x.Deferred(),
				g = x.Callbacks("once memory"),
				m = p.statusCode || {},
				y = {},
				v = {},
				b = 0,
				w = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!c) {
								c = {};
								while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
							}
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > b)
								for (t in e) m[t] = [m[t], e[t]];
							else C.always(e[C.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return u && u.abort(t), k(0, t), this
					}
				};
			if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
			l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
			if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
			w = "abort";
			for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) C[i](p[i]);
			if (u = qn(jn, p, n, C)) {
				C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
					C.abort("timeout")
				}, p.timeout));
				try {
					b = 1, u.send(y, k)
				} catch (N) {
					if (!(2 > b)) throw N;
					k(-1, N)
				}
			} else k(-1, "No Transport");

			function k(e, n, r, i) {
				var c, y, v, w, T, N = n;
				2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
			}
			return C
		},
		getJSON: function(e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return x.get(e, t, n, "script")
		}
	}), x.each(["get", "post"], function(e, n) {
		x[n] = function(e, r, i, o) {
			return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	});

	function Mn(e, n, r) {
		var i, o, a, s, l = e.contents,
			u = e.dataTypes;
		while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o)
			for (s in l)
				if (l[s] && l[s].test(o)) {
					u.unshift(s);
					break
				} if (u[0] in r) a = u[0];
		else {
			for (s in r) {
				if (!u[0] || e.converters[s + " " + u[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== u[0] && u.unshift(a), r[a]) : t
	}

	function On(e, t, n, r) {
		var i, o, a, s, l, u = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		o = c.shift();
		while (o)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
				if ("*" === o) o = l;
				else if ("*" !== l && l !== o) {
			if (a = u[l + " " + o] || u["* " + o], !a)
				for (i in u)
					if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					} if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (p) {
					return {
						state: "parsererror",
						error: a ? p : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	x.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), x.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, r = a.head || x("head")[0] || a.documentElement;
			return {
				send: function(t, i) {
					n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Fn = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Fn.pop() || x.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || x.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, i.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject && function() {
			var e;
			for (e in Pn) Pn[e](t, !0)
		};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	x.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && In() || zn()
	} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
		if (!n.crossDomain || x.support.cors) {
			var r;
			return {
				send: function(i, o) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
						for (s in n.xhrFields) l[s] = n.xhrFields[s];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) l.setRequestHeader(s, i[s])
					} catch (u) {}
					l.send(n.hasContent && n.data || null), r = function(e, i) {
						var s, u, c, p;
						try {
							if (r && (i || 4 === l.readyState))
								if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
								else {
									p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
									try {
										c = l.statusText
									} catch (f) {
										c = ""
									}
									s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
								}
						} catch (d) {
							i || o(-1, d)
						}
						p && o(s, c, p, u)
					}, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [nr],
		Qn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Yn.exec(t),
					o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
					a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};

	function Kn() {
		return setTimeout(function() {
			Xn = t
		}), Xn = x.now()
	}

	function Zn(e, t, n) {
		var r, i = (Qn[t] || []).concat(Qn["*"]),
			o = 0,
			a = i.length;
		for (; a > o; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = x.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (i) return !1;
				var t = Xn || Kn(),
					n = Math.max(0, u.startTime + u.duration - t),
					r = n / u.duration || 0,
					o = 1 - r,
					a = 0,
					l = u.tweens.length;
				for (; l > a; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: x.extend({}, t),
				opts: x.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (tr(c, u.opts.specialEasing); a > o; o++)
			if (r = Gn[o].call(u, e, c, u.opts)) return r;
		return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function tr(e, t) {
		var n, r, i, o, a;
		for (n in e)
			if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}
	x.Animation = x.extend(er, {
		tweener: function(e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});

	function nr(e, t, n) {
		var r, i, o, a, s, l, u = this,
			c = {},
			p = e.style,
			f = e.nodeType && nn(e),
			d = x._data(e, "fxshow");
		n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, u.always(function() {
			u.always(function() {
				s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t)
			if (i = t[r], Vn.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
				c[r] = d && d[r] || x.style(e, r)
			} if (!x.isEmptyObject(c)) {
			d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
				x(e).hide()
			}), u.done(function() {
				var t;
				x._removeData(e, "fxshow");
				for (t in c) x.style(e, t, c[t])
			});
			for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	x.Tween = rr, rr.prototype = {
		constructor: rr,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.each(["toggle", "show", "hide"], function(e, t) {
		var n = x.fn[t];
		x.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), x.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = x.isEmptyObject(e),
				o = x.speed(t, n, r),
				a = function() {
					var t = er(this, x.extend({}, e), o);
					(i || x._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, r) {
			var i = function(e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = x.timers,
					a = x._data(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else
					for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && x.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = x._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = x.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});

	function ir(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	x.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		x.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), x.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete: n || !n && t || x.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
		}, r
	}, x.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
		var e, n = x.timers,
			r = 0;
		for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || x.fx.stop(), Xn = t
	}, x.fx.timer = function(e) {
		e() && x.timers.push(e) && x.fx.start()
	}, x.fx.interval = 13, x.fx.start = function() {
		Un || (Un = setInterval(x.fx.tick, x.fx.interval))
	}, x.fx.stop = function() {
		clearInterval(Un), Un = null
	}, x.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
		return x.grep(x.timers, function(t) {
			return e === t.elem
		}).length
	}), x.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			x.offset.setOffset(this, e, t)
		});
		var n, r, o = {
				top: 0,
				left: 0
			},
			a = this[0],
			s = a && a.ownerDocument;
		if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
			top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : o
	}, x.offset = {
		setOffset: function(e, t, n) {
			var r = x.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = x(e),
				o = i.offset(),
				a = x.css(e, "top"),
				s = x.css(e, "left"),
				l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
				u = {},
				c = {},
				p, f;
			l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
		}
	}, x.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					r = this[0];
				return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - x.css(r, "marginTop", !0),
					left: t.left - n.left - x.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || s;
				while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
				return e || s
			})
		}
	}), x.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = /Y/.test(n);
		x.fn[e] = function(i) {
			return x.access(this, function(e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});

	function or(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	x.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		x.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			x.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return x.access(this, function(n, r, i) {
					var o;
					return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), x.fn.size = function() {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
		return x
	}))
})(window);
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function(t) {
	t.extend(t.fn, {
		validate: function(e) {
			if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
			var i = t.data(this[0], "validator");
			return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
				i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
			}), this.submit(function(e) {
				function s() {
					var s;
					return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
				}
				return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
			})), i)
		},
		valid: function() {
			if (t(this[0]).is("form")) return this.validate().form();
			var e = !0,
				i = t(this[0].form).validate();
			return this.each(function() {
				e = e && i.element(this)
			}), e
		},
		removeAttrs: function(e) {
			var i = {},
				s = this;
			return t.each(e.split(/\s/), function(t, e) {
				i[e] = s.attr(e), s.removeAttr(e)
			}), i
		},
		rules: function(e, i) {
			var s = this[0];
			if (e) {
				var r = t.data(s.form, "validator").settings,
					n = r.rules,
					a = t.validator.staticRules(s);
				switch (e) {
					case "add":
						t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
						break;
					case "remove":
						if (!i) return delete n[s.name], a;
						var u = {};
						return t.each(i.split(/\s/), function(t, e) {
							u[e] = a[e], delete a[e]
						}), u
				}
			}
			var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
			if (o.required) {
				var l = o.required;
				delete o.required, o = t.extend({
					required: l
				}, o)
			}
			return o
		}
	}), t.extend(t.expr[":"], {
		blank: function(e) {
			return !t.trim("" + t(e).val())
		},
		filled: function(e) {
			return !!t.trim("" + t(e).val())
		},
		unchecked: function(e) {
			return !t(e).prop("checked")
		}
	}), t.validator = function(e, i) {
		this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
	}, t.validator.format = function(e, i) {
		return 1 === arguments.length ? function() {
			var i = t.makeArray(arguments);
			return i.unshift(e), t.validator.format.apply(this, i)
		} : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
			e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
				return i
			})
		}), e)
	}, t.extend(t.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusInvalid: !0,
			errorContainer: t([]),
			errorLabelContainer: t([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(t) {
				this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
			},
			onfocusout: function(t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function(t, e) {
				(9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
			},
			onclick: function(t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function(e, i, s) {
				"radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
			},
			unhighlight: function(e, i, s) {
				"radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
			}
		},
		setDefaults: function(e) {
			t.extend(t.validator.defaults, e)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: t.validator.format("Please enter no more than {0} characters."),
			minlength: t.validator.format("Please enter at least {0} characters."),
			rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
			range: t.validator.format("Please enter a value between {0} and {1}."),
			max: t.validator.format("Please enter a value less than or equal to {0}."),
			min: t.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function e(e) {
					var i = t.data(this[0].form, "validator"),
						s = "on" + e.type.replace(/^validate/, "");
					i.settings[s] && i.settings[s].call(i, this[0], e)
				}
				this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var i = this.groups = {};
				t.each(this.settings.groups, function(e, s) {
					"string" == typeof s && (s = s.split(/\s/)), t.each(s, function(t, s) {
						i[s] = e
					})
				});
				var s = this.settings.rules;
				t.each(s, function(e, i) {
					s[e] = t.validator.normalizeRule(i)
				}), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			},
			element: function(e) {
				e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
				var i = this.check(e) !== !1;
				return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
			},
			showErrors: function(e) {
				if (e) {
					t.extend(this.errorMap, e), this.errorList = [];
					for (var i in e) this.errorList.push({
						message: e[i],
						element: this.findByName(i)[0]
					});
					this.successList = t.grep(this.successList, function(t) {
						return !(t.name in e)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(t) {
				var e = 0;
				for (var i in t) e++;
				return e
			},
			hideErrors: function() {
				this.addWrapper(this.toHide).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (e) {}
			},
			findLastActive: function() {
				var e = this.lastActive;
				return e && 1 === t.grep(this.errorList, function(t) {
					return t.element.name === e.name
				}).length && e
			},
			elements: function() {
				var e = this,
					i = {};
				return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
					return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
				})
			},
			clean: function(e) {
				return t(e)[0]
			},
			errors: function() {
				var e = this.settings.errorClass.replace(" ", ".");
				return t(this.settings.errorElement + "." + e, this.errorContext)
			},
			reset: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(t) {
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function(e) {
				var i = t(e).attr("type"),
					s = t(e).val();
				return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
			},
			check: function(e) {
				e = this.validationTargetFor(this.clean(e));
				var i, s = t(e).rules(),
					r = !1,
					n = this.elementValue(e);
				for (var a in s) {
					var u = {
						method: a,
						parameters: s[a]
					};
					try {
						if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
							r = !0;
							continue
						}
						if (r = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
						if (!i) return this.formatAndAdd(e, u), !1
					} catch (o) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
					}
				}
				return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
			},
			customDataMessage: function(e, i) {
				return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
			},
			customMessage: function(t, e) {
				var i = this.settings.messages[t];
				return i && (i.constructor === String ? i : i[e])
			},
			findDefined: function() {
				for (var t = 0; arguments.length > t; t++)
					if (void 0 !== arguments[t]) return arguments[t];
				return void 0
			},
			defaultMessage: function(e, i) {
				return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
			},
			formatAndAdd: function(e, i) {
				var s = this.defaultMessage(e, i.method),
					r = /\$?\{(\d+)\}/g;
				"function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
					message: s,
					element: e
				}), this.errorMap[e.name] = s, this.submitted[e.name] = s
			},
			addWrapper: function(t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function() {
				var t, e;
				for (t = 0; this.errorList[t]; t++) {
					var i = this.errorList[t];
					this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
				}
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
				if (this.settings.unhighlight)
					for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return t(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(e, i) {
				var s = this.errorsFor(e);
				s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
			},
			errorsFor: function(e) {
				var i = this.idOrName(e);
				return this.errors().filter(function() {
					return t(this).attr("for") === i
				})
			},
			idOrName: function(t) {
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			},
			validationTargetFor: function(t) {
				return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
			},
			checkable: function(t) {
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function(e) {
				return t(this.currentForm).find("[name='" + e + "']")
			},
			getLength: function(e, i) {
				switch (i.nodeName.toLowerCase()) {
					case "select":
						return t("option:selected", i).length;
					case "input":
						if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
				}
				return e.length
			},
			depend: function(t, e) {
				return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
			},
			dependTypes: {
				"boolean": function(t) {
					return t
				},
				string: function(e, i) {
					return !!t(e, i.form).length
				},
				"function": function(t, e) {
					return t(e)
				}
			},
			optional: function(e) {
				var i = this.elementValue(e);
				return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
			},
			startRequest: function(t) {
				this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
			},
			stopRequest: function(e, i) {
				this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(e) {
				return t.data(e, "previousValue") || t.data(e, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(e, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(e, i) {
			e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
		},
		classRules: function(e) {
			var i = {},
				s = t(e).attr("class");
			return s && t.each(s.split(" "), function() {
				this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
			}), i
		},
		attributeRules: function(e) {
			var i = {},
				s = t(e),
				r = s[0].getAttribute("type");
			for (var n in t.validator.methods) {
				var a;
				"required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
			}
			return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
		},
		dataRules: function(e) {
			var i, s, r = {},
				n = t(e);
			for (i in t.validator.methods) s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
			return r
		},
		staticRules: function(e) {
			var i = {},
				s = t.data(e.form, "validator");
			return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
		},
		normalizeRules: function(e, i) {
			return t.each(e, function(s, r) {
				if (r === !1) return delete e[s], void 0;
				if (r.param || r.depends) {
					var n = !0;
					switch (typeof r.depends) {
						case "string":
							n = !!t(r.depends, i.form).length;
							break;
						case "function":
							n = r.depends.call(i, i)
					}
					n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
				}
			}), t.each(e, function(s, r) {
				e[s] = t.isFunction(r) ? r(i) : r
			}), t.each(["minlength", "maxlength"], function() {
				e[this] && (e[this] = Number(e[this]))
			}), t.each(["rangelength", "range"], function() {
				var i;
				e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
			}), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
		},
		normalizeRule: function(e) {
			if ("string" == typeof e) {
				var i = {};
				t.each(e.split(/\s/), function() {
					i[this] = !0
				}), e = i
			}
			return e
		},
		addMethod: function(e, i, s) {
			t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
		},
		methods: {
			required: function(e, i, s) {
				if (!this.depend(s, i)) return "dependency-mismatch";
				if ("select" === i.nodeName.toLowerCase()) {
					var r = t(i).val();
					return r && r.length > 0
				}
				return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
			},
			email: function(t, e) {
				return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
			},
			url: function(t, e) {
				return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
			},
			date: function(t, e) {
				return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
			},
			dateISO: function(t, e) {
				return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
			},
			number: function(t, e) {
				return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			},
			digits: function(t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			},
			creditcard: function(t, e) {
				if (this.optional(e)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(t)) return !1;
				var i = 0,
					s = 0,
					r = !1;
				t = t.replace(/\D/g, "");
				for (var n = t.length - 1; n >= 0; n--) {
					var a = t.charAt(n);
					s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
				}
				return 0 === i % 10
			},
			minlength: function(e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || r >= s
			},
			maxlength: function(e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || s >= r
			},
			rangelength: function(e, i, s) {
				var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
				return this.optional(i) || r >= s[0] && s[1] >= r
			},
			min: function(t, e, i) {
				return this.optional(e) || t >= i
			},
			max: function(t, e, i) {
				return this.optional(e) || i >= t
			},
			range: function(t, e, i) {
				return this.optional(e) || t >= i[0] && i[1] >= t
			},
			equalTo: function(e, i, s) {
				var r = t(s);
				return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					t(i).valid()
				}), e === r.val()
			},
			remote: function(e, i, s) {
				if (this.optional(i)) return "dependency-mismatch";
				var r = this.previousValue(i);
				if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {
						url: s
					} || s, r.old === e) return r.valid;
				r.old = e;
				var n = this;
				this.startRequest(i);
				var a = {};
				return a[i.name] = e, t.ajax(t.extend(!0, {
					url: s,
					mode: "abort",
					port: "validate" + i.name,
					dataType: "json",
					data: a,
					success: function(s) {
						n.settings.messages[i.name].remote = r.originalMessage;
						var a = s === !0 || "true" === s;
						if (a) {
							var u = n.formSubmitted;
							n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
						} else {
							var o = {},
								l = s || n.defaultMessage(i, "remote");
							o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
						}
						r.valid = a, n.stopRequest(i, a)
					}
				}, s)), "pending"
			}
		}
	}), t.format = t.validator.format
})(jQuery),
function(t) {
	var e = {};
	if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, s) {
		var r = t.port;
		"abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
	});
	else {
		var i = t.ajax;
		t.ajax = function(s) {
			var r = ("mode" in s ? s : t.ajaxSettings).mode,
				n = ("port" in s ? s : t.ajaxSettings).port;
			return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments)
		}
	}
}(jQuery),
function(t) {
	t.extend(t.fn, {
		validateDelegate: function(e, i, s) {
			return this.bind(i, function(i) {
				var r = t(i.target);
				return r.is(e) ? s.apply(r, arguments) : void 0
			})
		}
	})
}(jQuery);
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*
 ** Unobtrusive validation support library for jQuery and jQuery Validate
 ** Copyright (C) Microsoft Corporation. All rights reserved.
 */
(function(a) {
	var d = a.validator,
		b, e = "unobtrusiveValidation";

	function c(a, b, c) {
		a.rules[b] = c;
		if (a.message) a.messages[b] = a.message
	}

	function j(a) {
		return a.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
	}

	function f(a) {
		return a.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
	}

	function h(a) {
		return a.substr(0, a.lastIndexOf(".") + 1)
	}

	function g(a, b) {
		if (a.indexOf("*.") === 0) a = a.replace("*.", b);
		return a
	}

	function m(c, e) {
		var b = a(this).find("[data-valmsg-for='" + f(e[0].name) + "']"),
			d = b.attr("data-valmsg-replace"),
			g = d ? a.parseJSON(d) !== false : null;
		b.removeClass("field-validation-valid").addClass("field-validation-error");
		c.data("unobtrusiveContainer", b);
		if (g) {
			b.empty();
			c.removeClass("input-validation-error").appendTo(b)
		} else c.hide()
	}

	function l(e, d) {
		var c = a(this).find("[data-valmsg-summary=true]"),
			b = c.find("ul");
		if (b && b.length && d.errorList.length) {
			b.empty();
			c.addClass("validation-summary-errors").removeClass("validation-summary-valid");
			a.each(d.errorList, function() {
				a("<li />").html(this.message).appendTo(b)
			})
		}
	}

	function k(d) {
		var b = d.data("unobtrusiveContainer"),
			c = b.attr("data-valmsg-replace"),
			e = c ? a.parseJSON(c) : null;
		if (b) {
			b.addClass("field-validation-valid").removeClass("field-validation-error");
			d.removeData("unobtrusiveContainer");
			e && b.empty()
		}
	}

	function n() {
		var b = a(this),
			c = "__jquery_unobtrusive_validation_form_reset";
		if (b.data(c)) return;
		b.data(c, true);
		try {
			b.data("validator").resetForm()
		} finally {
			b.removeData(c)
		}
		b.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
		b.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
	}

	function i(b) {
		var c = a(b),
			f = c.data(e),
			i = a.proxy(n, b),
			g = d.unobtrusive.options || {},
			h = function(e, d) {
				var c = g[e];
				c && a.isFunction(c) && c.apply(b, d)
			};
		if (!f) {
			f = {
				options: {
					errorClass: g.errorClass || "input-validation-error",
					errorElement: g.errorElement || "span",
					errorPlacement: function() {
						m.apply(b, arguments);
						h("errorPlacement", arguments)
					},
					invalidHandler: function() {
						l.apply(b, arguments);
						h("invalidHandler", arguments)
					},
					messages: {},
					rules: {},
					success: function() {
						k.apply(b, arguments);
						h("success", arguments)
					}
				},
				attachValidation: function() {
					c.off("reset." + e, i).on("reset." + e, i).validate(this.options)
				},
				validate: function() {
					c.validate();
					return c.valid()
				}
			};
			c.data(e, f)
		}
		return f
	}
	d.unobtrusive = {
		adapters: [],
		parseElement: function(b, h) {
			var d = a(b),
				f = d.parents("form")[0],
				c, e, g;
			if (!f) return;
			c = i(f);
			c.options.rules[b.name] = e = {};
			c.options.messages[b.name] = g = {};
			a.each(this.adapters, function() {
				var c = "data-val-" + this.name,
					i = d.attr(c),
					h = {};
				if (i !== undefined) {
					c += "-";
					a.each(this.params, function() {
						h[this] = d.attr(c + this)
					});
					this.adapt({
						element: b,
						form: f,
						message: i,
						params: h,
						rules: e,
						messages: g
					})
				}
			});
			a.extend(e, {
				__dummy__: true
			});
			!h && c.attachValidation()
		},
		parse: function(c) {
			var b = a(c),
				e = b.parents().addBack().filter("form").add(b.find("form")).has("[data-val=true]");
			b.find("[data-val=true]").each(function() {
				d.unobtrusive.parseElement(this, true)
			});
			e.each(function() {
				var a = i(this);
				a && a.attachValidation()
			})
		}
	};
	b = d.unobtrusive.adapters;
	b.add = function(c, a, b) {
		if (!b) {
			b = a;
			a = []
		}
		this.push({
			name: c,
			params: a,
			adapt: b
		});
		return this
	};
	b.addBool = function(a, b) {
		return this.add(a, function(d) {
			c(d, b || a, true)
		})
	};
	b.addMinMax = function(e, g, f, a, d, b) {
		return this.add(e, [d || "min", b || "max"], function(b) {
			var e = b.params.min,
				d = b.params.max;
			if (e && d) c(b, a, [e, d]);
			else if (e) c(b, g, e);
			else d && c(b, f, d)
		})
	};
	b.addSingleVal = function(a, b, d) {
		return this.add(a, [b || "val"], function(e) {
			c(e, d || a, e.params[b])
		})
	};
	d.addMethod("__dummy__", function() {
		return true
	});
	d.addMethod("regex", function(b, c, d) {
		var a;
		if (this.optional(c)) return true;
		a = (new RegExp(d)).exec(b);
		return a && a.index === 0 && a[0].length === b.length
	});
	d.addMethod("nonalphamin", function(c, d, b) {
		var a;
		if (b) {
			a = c.match(/\W/g);
			a = a && a.length >= b
		}
		return a
	});
	if (d.methods.extension) {
		b.addSingleVal("accept", "mimtype");
		b.addSingleVal("extension", "extension")
	} else b.addSingleVal("extension", "extension", "accept");
	b.addSingleVal("regex", "pattern");
	b.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
	b.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
	b.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
	b.add("equalto", ["other"], function(b) {
		var i = h(b.element.name),
			j = b.params.other,
			d = g(j, i),
			e = a(b.form).find(":input").filter("[name='" + f(d) + "']")[0];
		c(b, "equalTo", e)
	});
	b.add("required", function(a) {
		(a.element.tagName.toUpperCase() !== "INPUT" || a.element.type.toUpperCase() !== "CHECKBOX") && c(a, "required", true)
	});
	b.add("remote", ["url", "type", "additionalfields"], function(b) {
		var d = {
				url: b.params.url,
				type: b.params.type || "GET",
				data: {}
			},
			e = h(b.element.name);
		a.each(j(b.params.additionalfields || b.element.name), function(i, h) {
			var c = g(h, e);
			d.data[c] = function() {
				var d = a(b.form).find(":input").filter("[name='" + f(c) + "']");
				return d.is(":checkbox") ? d.filter(":checked").val() || d.filter(":hidden").val() || "" : d.is(":radio") ? d.filter(":checked").val() || "" : d.val()
			}
		});
		c(b, "remote", d)
	});
	b.add("password", ["min", "nonalphamin", "regex"], function(a) {
		a.params.min && c(a, "minlength", a.params.min);
		a.params.nonalphamin && c(a, "nonalphamin", a.params.nonalphamin);
		a.params.regex && c(a, "regex", a.params.regex)
	});
	a(function() {
		d.unobtrusive.parse(document)
	})
})(jQuery);
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */

/**
 * bootstrap.js v3.0.0 by @fat and @mdo
 * Copyright 2013 Twitter Inc.
 * http://www.apache.org/licenses/LICENSE-2.0
 */
if (!jQuery) throw new Error("Bootstrap requires jQuery"); + function(a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			}
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one(a.support.transition.end, function() {
			c = !0
		});
		var e = function() {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b()
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = '[data-dismiss="alert"]',
		c = function(c) {
			a(c).on("click", b, this.close)
		};
	c.prototype.close = function(b) {
		function c() {
			f.trigger("closed.bs.alert").remove()
		}
		var d = a(this),
			e = d.attr("data-target");
		e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
		var f = a(e);
		b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
	};
	var d = a.fn.alert;
	a.fn.alert = function(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.alert");
			e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
		})
	}, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
		return a.fn.alert = d, this
	}, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
	};
	b.DEFAULTS = {
		loadingText: "loading..."
	}, b.prototype.setState = function(a) {
		var b = "disabled",
			c = this.$element,
			d = c.is("input") ? "val" : "html",
			e = c.data();
		a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function() {
			"loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
		}, 0)
	}, b.prototype.toggle = function() {
		var a = this.$element.closest('[data-toggle="buttons"]');
		if (a.length) {
			var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
			"radio" === b.prop("type") && a.find(".active").removeClass("active")
		}
		this.$element.toggleClass("active")
	};
	var c = a.fn.button;
	a.fn.button = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof c && c;
			e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
		})
	}, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
		return a.fn.button = c, this
	}, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
		var c = a(b.target);
		c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
	};
	b.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0
	}, b.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, b.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	}, b.prototype.to = function(b) {
		var c = this,
			d = this.getActiveIndex();
		return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function() {
			c.to(b)
		}) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
	}, b.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, b.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, b.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, b.prototype.slide = function(b, c) {
		var d = this.$element.find(".item.active"),
			e = c || d[b](),
			f = this.interval,
			g = "next" == b ? "left" : "right",
			h = "next" == b ? "first" : "last",
			i = this;
		if (!e.length) {
			if (!this.options.wrap) return;
			e = this.$element.find(".item")[h]()
		}
		this.sliding = !0, f && this.pause();
		var j = a.Event("slide.bs.carousel", {
			relatedTarget: e[0],
			direction: g
		});
		if (!e.hasClass("active")) {
			if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
					var b = a(i.$indicators.children()[i.getActiveIndex()]);
					b && b.addClass("active")
				})), a.support.transition && this.$element.hasClass("slide")) {
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
					e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
						i.$element.trigger("slid")
					}, 0)
				}).emulateTransitionEnd(600)
			} else {
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
			}
			return f && this.cycle(), this
		}
	};
	var c = a.fn.carousel;
	a.fn.carousel = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
				g = "string" == typeof c ? c : f.slide;
			e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = c, this
	}, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
		var c, d = a(this),
			e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
			f = a.extend({}, e.data(), d.data()),
			g = d.attr("data-slide-to");
		g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
	}), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var b = a(this);
			b.carousel(b.data())
		})
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
	};
	b.DEFAULTS = {
		toggle: !0
	}, b.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, b.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b = a.Event("show.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.$parent && this.$parent.find("> .panel > .in");
				if (c && c.length) {
					var d = c.data("bs.collapse");
					if (d && d.transitioning) return;
					c.collapse("hide"), d || c.data("bs.collapse", null)
				}
				var e = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
				var f = function() {
					this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
				};
				if (!a.support.transition) return f.call(this);
				var g = a.camelCase(["scroll", e].join("-"));
				this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
			}
		}
	}, b.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var d = function() {
					this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
				};
				return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
			}
		}
	}, b.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var c = a.fn.collapse;
	a.fn.collapse = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.collapse"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
			e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = c, this
	}, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
		var c, d = a(this),
			e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
			f = a(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : d.data(),
			i = d.attr("data-parent"),
			j = i && a(i);
		g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
	})
}(window.jQuery), + function(a) {
	"use strict";

	function b() {
		a(d).remove(), a(e).each(function(b) {
			var d = c(a(this));
			d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
		})
	}

	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}
	var d = ".dropdown-backdrop",
		e = "[data-toggle=dropdown]",
		f = function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	f.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if (b(), !g) {
				if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
				f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus()
			}
			return !1
		}
	}, f.prototype.keydown = function(b) {
		if (/(38|40|27)/.test(b.keyCode)) {
			var d = a(this);
			if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var f = c(d),
					g = f.hasClass("open");
				if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
				var h = a("[role=menu] li:not(.divider):visible a", f);
				if (h.length) {
					var i = h.index(h.filter(":focus"));
					38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
				}
			}
		}
	};
	var g = a.fn.dropdown;
	a.fn.dropdown = function(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("dropdown");
			d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
		})
	}, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = g, this
	}, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(b, c) {
		this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
	};
	b.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, b.prototype.toggle = function(a) {
		return this[this.isShown ? "hide" : "show"](a)
	}, b.prototype.show = function(b) {
		var c = this,
			d = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
			var d = a.support.transition && c.$element.hasClass("fade");
			c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
			var e = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
				c.$element.focus().trigger(e)
			}).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
		}))
	}, b.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, b.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
		}, this))
	}, b.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, b.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
		})
	}, b.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, b.prototype.backdrop = function(b) {
		var c = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var d = a.support.transition && c;
			if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function(a) {
					a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
				}, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
		} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
	};
	var c = a.fn.modal;
	a.fn.modal = function(c, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
			f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
		})
	}, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
		return a.fn.modal = c, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
		var c = a(this),
			d = c.attr("href"),
			e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = e.data("modal") ? "toggle" : a.extend({
				remote: !/#/.test(d) && d
			}, e.data(), c.data());
		b.preventDefault(), e.modal(f, this).one("hide", function() {
			c.is(":visible") && c.focus()
		})
	}), a(document).on("show.bs.modal", ".modal", function() {
		a(document.body).addClass("modal-open")
	}).on("hidden.bs.modal", ".modal", function() {
		a(document.body).removeClass("modal-open")
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(a, b) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
	};
	b.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	}, b.prototype.init = function(b, c, d) {
		this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focus",
					i = "hover" == g ? "mouseleave" : "blur";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, b.prototype.getDefaults = function() {
		return b.DEFAULTS
	}, b.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, b.prototype.getDelegateOptions = function() {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, b.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show), void 0) : c.show()
	}, b.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide), void 0) : c.hide()
	}, b.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(b), b.isDefaultPrevented()) return;
			var c = this.tip();
			this.setContent(), this.options.animation && c.addClass("fade");
			var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
				e = /\s?auto?\s?/i,
				f = e.test(d);
			f && (d = d.replace(e, "") || "top"), c.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
			var g = this.getPosition(),
				h = c[0].offsetWidth,
				i = c[0].offsetHeight;
			if (f) {
				var j = this.$element.parent(),
					k = d,
					l = document.documentElement.scrollTop || document.body.scrollTop,
					m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
					n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
					o = "body" == this.options.container ? 0 : j.offset().left;
				d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
			}
			var p = this.getCalculatedOffset(d, g, h, i);
			this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
		}
	}, b.prototype.applyPlacement = function(a, b) {
		var c, d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
			var k = 0;
			a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
		} else this.replaceArrow(j - f, j, "top");
		c && d.offset(a)
	}, b.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
	}, b.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, b.prototype.hide = function() {
		function b() {
			"in" != c.hoverState && d.detach()
		}
		var c = this,
			d = this.tip(),
			e = a.Event("hide.bs." + this.type);
		return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
	}, b.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, b.prototype.hasContent = function() {
		return this.getTitle()
	}, b.prototype.getPosition = function() {
		var b = this.$element[0];
		return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
			width: b.offsetWidth,
			height: b.offsetHeight
		}, this.$element.offset())
	}, b.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, b.prototype.getTitle = function() {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, b.prototype.tip = function() {
		return this.$tip = this.$tip || a(this.options.template)
	}, b.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, b.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, b.prototype.enable = function() {
		this.enabled = !0
	}, b.prototype.disable = function() {
		this.enabled = !1
	}, b.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, b.prototype.toggle = function(b) {
		var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
		c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, b.prototype.destroy = function() {
		this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	var c = a.fn.tooltip;
	a.fn.tooltip = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof c && c;
			e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = c, this
	}
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
		return b.DEFAULTS
	}, b.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, b.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, b.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, b.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, b.prototype.tip = function() {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip
	};
	var c = a.fn.popover;
	a.fn.popover = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof c && c;
			e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
		return a.fn.popover = c, this
	}
}(window.jQuery), + function(a) {
	"use strict";

	function b(c, d) {
		var e, f = a.proxy(this.process, this);
		this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
	}
	b.DEFAULTS = {
		offset: 10
	}, b.prototype.refresh = function() {
		var b = this.$element[0] == window ? "offset" : "position";
		this.offsets = a([]), this.targets = a([]);
		var c = this;
		this.$body.find(this.selector).map(function() {
			var d = a(this),
				e = d.data("target") || d.attr("href"),
				f = /^#\w/.test(e) && a(e);
			return f && f.length && [
				[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			c.offsets.push(this[0]), c.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			d = c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
	};
	var c = a.fn.scrollspy;
	a.fn.scrollspy = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = c, this
	}, a(window).on("load", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			b.scrollspy(b.data())
		})
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(b) {
		this.element = a(b)
	};
	b.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.attr("data-target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a")[0],
				f = a.Event("show.bs.tab", {
					relatedTarget: e
				});
			if (b.trigger(f), !f.isDefaultPrevented()) {
				var g = a(d);
				this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
					b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e
					})
				})
			}
		}
	}, b.prototype.activate = function(b, c, d) {
		function e() {
			f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
		}
		var f = c.find("> .active"),
			g = d && a.support.transition && f.hasClass("fade");
		g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
	};
	var c = a.fn.tab;
	a.fn.tab = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
		})
	}, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
		return a.fn.tab = c, this
	}, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
		b.preventDefault(), a(this).tab("show")
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
	};
	b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
		offset: 0
	}, b.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, b.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var c = a(document).height(),
				d = this.$window.scrollTop(),
				e = this.$element.offset(),
				f = this.options.offset,
				g = f.top,
				h = f.bottom;
			"object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
			var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
			this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
				top: document.body.offsetHeight - h - this.$element.height()
			}))
		}
	};
	var c = a.fn.affix;
	a.fn.affix = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof c && c;
			e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
		return a.fn.affix = c, this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var b = a(this),
				c = b.data();
			c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
		})
	})
}(window.jQuery);
// Unobtrusive Ajax support library for jQuery
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// @version v3.2.6
// 
// Microsoft grants you the right to use these script files for the sole
// purpose of either: (i) interacting through your browser with the Microsoft
// website or online service, subject to the applicable licensing or use
// terms; or (ii) using the files as included with a Microsoft product subject
// to that product's license terms. Microsoft reserves all other rights to the
// files not expressly granted by Microsoft, whether by implication, estoppel
// or otherwise. Insofar as a script file is dual licensed under GPL,
// Microsoft neither took the code under GPL nor distributes it thereunder but
// under the terms set out in this paragraph. All notices and licenses
// below are for informational purposes only.
! function(t) {
	function a(t, a) {
		for (var e = window, r = (t || "").split("."); e && r.length;) e = e[r.shift()];
		return "function" == typeof e ? e : (a.push(t), Function.constructor.apply(null, a))
	}

	function e(t) {
		return "GET" === t || "POST" === t
	}

	function r(t, a) {
		e(a) || t.setRequestHeader("X-HTTP-Method-Override", a)
	}

	function n(a, e, r) {
		var n;
		r.indexOf("application/x-javascript") === -1 && (n = (a.getAttribute("data-ajax-mode") || "").toUpperCase(), t(a.getAttribute("data-ajax-update")).each(function(a, r) {
			switch (n) {
				case "BEFORE":
					t(r).prepend(e);
					break;
				case "AFTER":
					t(r).append(e);
					break;
				case "REPLACE-WITH":
					t(r).replaceWith(e);
					break;
				default:
					t(r).html(e)
			}
		}))
	}

	function i(i, u) {
		var o, c, d, s;
		if (o = i.getAttribute("data-ajax-confirm"), !o || window.confirm(o)) {
			c = t(i.getAttribute("data-ajax-loading")), s = parseInt(i.getAttribute("data-ajax-loading-duration"), 10) || 0, t.extend(u, {
				type: i.getAttribute("data-ajax-method") || void 0,
				url: i.getAttribute("data-ajax-url") || void 0,
				cache: "true" === (i.getAttribute("data-ajax-cache") || "").toLowerCase(),
				beforeSend: function(t) {
					var e;
					return r(t, d), e = a(i.getAttribute("data-ajax-begin"), ["xhr"]).apply(i, arguments), e !== !1 && c.show(s), e
				},
				complete: function() {
					c.hide(s), a(i.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(i, arguments)
				},
				success: function(t, e, r) {
					n(i, t, r.getResponseHeader("Content-Type") || "text/html"), a(i.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(i, arguments)
				},
				error: function() {
					a(i.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(i, arguments)
				}
			}), u.data.push({
				name: "X-Requested-With",
				value: "XMLHttpRequest"
			}), d = u.type.toUpperCase(), e(d) || (u.type = "POST", u.data.push({
				name: "X-HTTP-Method-Override",
				value: d
			}));
			var p = t(i);
			if (p.is("form") && "multipart/form-data" == p.attr("enctype")) {
				var f = new FormData;
				t.each(u.data, function(t, a) {
					f.append(a.name, a.value)
				}), t("input[type=file]", p).each(function() {
					var a = this;
					t.each(a.files, function(t, e) {
						f.append(a.name, e)
					})
				}), t.extend(u, {
					processData: !1,
					contentType: !1,
					data: f
				})
			}
			t.ajax(u)
		}
	}

	function u(a) {
		var e = t(a).data(d);
		return !e || !e.validate || e.validate()
	}
	var o = "unobtrusiveAjaxClick",
		c = "unobtrusiveAjaxClickTarget",
		d = "unobtrusiveValidation";
	t(document).on("click", "a[data-ajax=true]", function(t) {
		t.preventDefault(), i(this, {
			url: this.href,
			type: "GET",
			data: []
		})
	}), t(document).on("click", "form[data-ajax=true] input[type=image]", function(a) {
		var e = a.target.name,
			r = t(a.target),
			n = t(r.parents("form")[0]),
			i = r.offset();
		n.data(o, [{
			name: e + ".x",
			value: Math.round(a.pageX - i.left)
		}, {
			name: e + ".y",
			value: Math.round(a.pageY - i.top)
		}]), setTimeout(function() {
			n.removeData(o)
		}, 0)
	}), t(document).on("click", "form[data-ajax=true] :submit", function(a) {
		var e = a.currentTarget.name,
			r = t(a.target),
			n = t(r.parents("form")[0]);
		n.data(o, e ? [{
			name: e,
			value: a.currentTarget.value
		}] : []), n.data(c, r), setTimeout(function() {
			n.removeData(o), n.removeData(c)
		}, 0)
	}), t(document).on("submit", "form[data-ajax=true]", function(a) {
		var e = t(this).data(o) || [],
			r = t(this).data(c),
			n = r && (r.hasClass("cancel") || void 0 !== r.attr("formnovalidate"));
		a.preventDefault(), (n || u(this)) && i(this, {
			url: this.action,
			type: this.method || "GET",
			data: e.concat(t(this).serializeArray())
		})
	})
}(jQuery);
/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function(t) {
	function e(t) {
		for (var e = t.css("visibility");
			"inherit" === e;) t = t.parent(), e = t.css("visibility");
		return "hidden" !== e
	}

	function i(t) {
		for (var e, i; t.length && t[0] !== document;) {
			if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
			t = t.parent()
		}
		return 0
	}

	function s() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function n(e) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.on("mouseout", i, function() {
			t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
		}).on("mouseover", i, o)
	}

	function o() {
		t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
	}

	function a(e, i) {
		t.extend(e, i);
		for (var s in i) null == i[s] && (e[s] = i[s]);
		return e
	}

	function r(t) {
		return function() {
			var e = this.element.val();
			t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
		}
	}
	t.ui = t.ui || {}, t.ui.version = "1.12.1";
	var h = 0,
		l = Array.prototype.slice;
	t.cleanData = function(e) {
			return function(i) {
				var s, n, o;
				for (o = 0; null != (n = i[o]); o++) try {
					s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
				} catch (a) {}
				e(i)
			}
		}(t.cleanData), t.widget = function(e, i, s) {
			var n, o, a, r = {},
				h = e.split(".")[0];
			e = e.split(".")[1];
			var l = h + "-" + e;
			return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function(e) {
				return !!t.data(e, l)
			}, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) {
				return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
			}, t.extend(o, n, {
				version: s.version,
				_proto: t.extend({}, s),
				_childConstructors: []
			}), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
				return t.isFunction(s) ? (r[e] = function() {
					function t() {
						return i.prototype[e].apply(this, arguments)
					}

					function n(t) {
						return i.prototype[e].apply(this, t)
					}
					return function() {
						var e, i = this._super,
							o = this._superApply;
						return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
					}
				}(), void 0) : (r[e] = s, void 0)
			}), o.prototype = t.widget.extend(a, {
				widgetEventPrefix: n ? a.widgetEventPrefix || e : e
			}, r, {
				constructor: o,
				namespace: h,
				widgetName: e,
				widgetFullName: l
			}), n ? (t.each(n._childConstructors, function(e, i) {
				var s = i.prototype;
				t.widget(s.namespace + "." + s.widgetName, o, i._proto)
			}), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
		}, t.widget.extend = function(e) {
			for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
				for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
			return e
		}, t.widget.bridge = function(e, i) {
			var s = i.prototype.widgetFullName || e;
			t.fn[e] = function(n) {
				var o = "string" == typeof n,
					a = l.call(arguments, 1),
					r = this;
				return o ? this.length || "instance" !== n ? this.each(function() {
					var i, o = t.data(this, s);
					return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'")
				}) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
					var e = t.data(this, s);
					e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
				})), r
			}
		}, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				classes: {},
				disabled: !1,
				create: null
			},
			_createWidget: function(e, i) {
				i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
					remove: function(t) {
						t.target === i && this.destroy()
					}
				}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: function() {
				return {}
			},
			_getCreateEventData: t.noop,
			_create: t.noop,
			_init: t.noop,
			destroy: function() {
				var e = this;
				this._destroy(), t.each(this.classesElementLookup, function(t, i) {
					e._removeClass(i, t)
				}), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
			},
			_destroy: t.noop,
			widget: function() {
				return this.element
			},
			option: function(e, i) {
				var s, n, o, a = e;
				if (0 === arguments.length) return t.widget.extend({}, this.options);
				if ("string" == typeof e)
					if (a = {}, s = e.split("."), e = s.shift(), s.length) {
						for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
						if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
						n[e] = i
					} else {
						if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
						a[e] = i
					} return this._setOptions(a), this
			},
			_setOptions: function(t) {
				var e;
				for (e in t) this._setOption(e, t[e]);
				return this
			},
			_setOption: function(t, e) {
				return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
			},
			_setOptionClasses: function(e) {
				var i, s, n;
				for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
					element: s,
					keys: i,
					classes: e,
					add: !0
				})))
			},
			_setOptionDisabled: function(t) {
				this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
			},
			enable: function() {
				return this._setOptions({
					disabled: !1
				})
			},
			disable: function() {
				return this._setOptions({
					disabled: !0
				})
			},
			_classes: function(e) {
				function i(i, o) {
					var a, r;
					for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
				}
				var s = [],
					n = this;
				return e = t.extend({
					element: this.element,
					classes: this.options.classes || {}
				}, e), this._on(e.element, {
					remove: "_untrackClassesElement"
				}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
			},
			_untrackClassesElement: function(e) {
				var i = this;
				t.each(i.classesElementLookup, function(s, n) {
					-1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
				})
			},
			_removeClass: function(t, e, i) {
				return this._toggleClass(t, e, i, !1)
			},
			_addClass: function(t, e, i) {
				return this._toggleClass(t, e, i, !0)
			},
			_toggleClass: function(t, e, i, s) {
				s = "boolean" == typeof s ? s : i;
				var n = "string" == typeof t || null === t,
					o = {
						extra: n ? e : i,
						keys: n ? t : e,
						element: n ? this.element : t,
						add: s
					};
				return o.element.toggleClass(this._classes(o), s), this
			},
			_on: function(e, i, s) {
				var n, o = this;
				"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
					function r() {
						return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
					}
					"string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
					var h = s.match(/^([\w:-]*)\s*(.*)$/),
						l = h[1] + o.eventNamespace,
						c = h[2];
					c ? n.on(l, c, r) : i.on(l, r)
				})
			},
			_off: function(e, i) {
				i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
			},
			_delay: function(t, e) {
				function i() {
					return ("string" == typeof t ? s[t] : t).apply(s, arguments)
				}
				var s = this;
				return setTimeout(i, e || 0)
			},
			_hoverable: function(e) {
				this.hoverable = this.hoverable.add(e), this._on(e, {
					mouseenter: function(e) {
						this._addClass(t(e.currentTarget), null, "ui-state-hover")
					},
					mouseleave: function(e) {
						this._removeClass(t(e.currentTarget), null, "ui-state-hover")
					}
				})
			},
			_focusable: function(e) {
				this.focusable = this.focusable.add(e), this._on(e, {
					focusin: function(e) {
						this._addClass(t(e.currentTarget), null, "ui-state-focus")
					},
					focusout: function(e) {
						this._removeClass(t(e.currentTarget), null, "ui-state-focus")
					}
				})
			},
			_trigger: function(e, i, s) {
				var n, o, a = this.options[e];
				if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
					for (n in o) n in i || (i[n] = o[n]);
				return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
			}
		}, t.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(e, i) {
			t.Widget.prototype["_" + e] = function(s, n, o) {
				"string" == typeof n && (n = {
					effect: n
				});
				var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
				n = n || {}, "number" == typeof n && (n = {
					duration: n
				}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
					t(this)[e](), o && o.call(s[0]), i()
				})
			}
		}), t.widget,
		function() {
			function e(t, e, i) {
				return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
			}

			function i(e, i) {
				return parseInt(t.css(e, i), 10) || 0
			}

			function s(e) {
				var i = e[0];
				return 9 === i.nodeType ? {
					width: e.width(),
					height: e.height(),
					offset: {
						top: 0,
						left: 0
					}
				} : t.isWindow(i) ? {
					width: e.width(),
					height: e.height(),
					offset: {
						top: e.scrollTop(),
						left: e.scrollLeft()
					}
				} : i.preventDefault ? {
					width: 0,
					height: 0,
					offset: {
						top: i.pageY,
						left: i.pageX
					}
				} : {
					width: e.outerWidth(),
					height: e.outerHeight(),
					offset: e.offset()
				}
			}
			var n, o = Math.max,
				a = Math.abs,
				r = /left|center|right/,
				h = /top|center|bottom/,
				l = /[\+\-]\d+(\.[\d]+)?%?/,
				c = /^\w+/,
				u = /%$/,
				d = t.fn.position;
			t.position = {
				scrollbarWidth: function() {
					if (void 0 !== n) return n;
					var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
						o = s.children()[0];
					return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
				},
				getScrollInfo: function(e) {
					var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
						s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
						n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
						o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
					return {
						width: o ? t.position.scrollbarWidth() : 0,
						height: n ? t.position.scrollbarWidth() : 0
					}
				},
				getWithinInfo: function(e) {
					var i = t(e || window),
						s = t.isWindow(i[0]),
						n = !!i[0] && 9 === i[0].nodeType,
						o = !s && !n;
					return {
						element: i,
						isWindow: s,
						isDocument: n,
						offset: o ? t(e).offset() : {
							left: 0,
							top: 0
						},
						scrollLeft: i.scrollLeft(),
						scrollTop: i.scrollTop(),
						width: i.outerWidth(),
						height: i.outerHeight()
					}
				}
			}, t.fn.position = function(n) {
				if (!n || !n.of) return d.apply(this, arguments);
				n = t.extend({}, n);
				var u, p, f, g, m, _, v = t(n.of),
					b = t.position.getWithinInfo(n.within),
					y = t.position.getScrollInfo(b),
					w = (n.collision || "flip").split(" "),
					k = {};
				return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function() {
					var t, e, i = (n[this] || "").split(" ");
					1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
				}), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function() {
					var s, r, h = t(this),
						l = h.outerWidth(),
						c = h.outerHeight(),
						d = i(this, "marginLeft"),
						_ = i(this, "marginTop"),
						x = l + d + i(this, "marginRight") + y.width,
						C = c + _ + i(this, "marginBottom") + y.height,
						D = t.extend({}, m),
						I = e(k.my, h.outerWidth(), h.outerHeight());
					"right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
						marginLeft: d,
						marginTop: _
					}, t.each(["left", "top"], function(e, i) {
						t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
							targetWidth: p,
							targetHeight: f,
							elemWidth: l,
							elemHeight: c,
							collisionPosition: s,
							collisionWidth: x,
							collisionHeight: C,
							offset: [u[0] + I[0], u[1] + I[1]],
							my: n.my,
							at: n.at,
							within: b,
							elem: h
						})
					}), n.using && (r = function(t) {
						var e = g.left - D.left,
							i = e + p - l,
							s = g.top - D.top,
							r = s + f - c,
							u = {
								target: {
									element: v,
									left: g.left,
									top: g.top,
									width: p,
									height: f
								},
								element: {
									element: h,
									left: D.left,
									top: D.top,
									width: l,
									height: c
								},
								horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
								vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
							};
						l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u)
					}), h.offset(t.extend(D, {
						using: r
					}))
				})
			}, t.ui.position = {
				fit: {
					left: function(t, e) {
						var i, s = e.within,
							n = s.isWindow ? s.scrollLeft : s.offset.left,
							a = s.width,
							r = t.left - e.collisionPosition.marginLeft,
							h = n - r,
							l = r + e.collisionWidth - a - n;
						e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
					},
					top: function(t, e) {
						var i, s = e.within,
							n = s.isWindow ? s.scrollTop : s.offset.top,
							a = e.within.height,
							r = t.top - e.collisionPosition.marginTop,
							h = n - r,
							l = r + e.collisionHeight - a - n;
						e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
					}
				},
				flip: {
					left: function(t, e) {
						var i, s, n = e.within,
							o = n.offset.left + n.scrollLeft,
							r = n.width,
							h = n.isWindow ? n.scrollLeft : n.offset.left,
							l = t.left - e.collisionPosition.marginLeft,
							c = l - h,
							u = l + e.collisionWidth - r - h,
							d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
							p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
							f = -2 * e.offset[0];
						0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f))
					},
					top: function(t, e) {
						var i, s, n = e.within,
							o = n.offset.top + n.scrollTop,
							r = n.height,
							h = n.isWindow ? n.scrollTop : n.offset.top,
							l = t.top - e.collisionPosition.marginTop,
							c = l - h,
							u = l + e.collisionHeight - r - h,
							d = "top" === e.my[1],
							p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
							f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
							g = -2 * e.offset[1];
						0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g))
					}
				},
				flipfit: {
					left: function() {
						t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
					},
					top: function() {
						t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
					}
				}
			}
		}(), t.ui.position, t.extend(t.expr[":"], {
			data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
				return function(i) {
					return !!t.data(i, e)
				}
			}) : function(e, i, s) {
				return !!t.data(e, s[3])
			}
		}), t.fn.extend({
			disableSelection: function() {
				var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
				return function() {
					return this.on(t + ".ui-disableSelection", function(t) {
						t.preventDefault()
					})
				}
			}(),
			enableSelection: function() {
				return this.off(".ui-disableSelection")
			}
		});
	var c = "ui-effects-",
		u = "ui-effects-style",
		d = "ui-effects-animated",
		p = t;
	t.effects = {
			effect: {}
		},
		function(t, e) {
			function i(t, e, i) {
				var s = u[e.type] || {};
				return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
			}

			function s(i) {
				var s = l(),
					n = s._rgba = [];
				return i = i.toLowerCase(), f(h, function(t, o) {
					var a, r = o.re.exec(i),
						h = r && o.parse(r),
						l = o.space || "rgba";
					return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
				}), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
			}

			function n(t, e, i) {
				return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
			}
			var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
				r = /^([\-+])=\s*(\d+\.?\d*)/,
				h = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function(t) {
						return [t[1], t[2], t[3], t[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function(t) {
						return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function(t) {
						return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function(t) {
						return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function(t) {
						return [t[1], t[2] / 100, t[3] / 100, t[4]]
					}
				}],
				l = t.Color = function(e, i, s, n) {
					return new t.Color.fn.parse(e, i, s, n)
				},
				c = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				u = {
					"byte": {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				d = l.support = {},
				p = t("<p>")[0],
				f = t.each;
			p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
				e.cache = "_" + t, e.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), l.fn = t.extend(l.prototype, {
				parse: function(n, a, r, h) {
					if (n === e) return this._rgba = [null, null, null, null], this;
					(n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
					var u = this,
						d = t.type(n),
						p = this._rgba = [];
					return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
						p[e.idx] = i(n[e.idx], e)
					}), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
						n[e.cache] && (u[e.cache] = n[e.cache].slice())
					}) : f(c, function(e, s) {
						var o = s.cache;
						f(s.props, function(t, e) {
							if (!u[o] && s.to) {
								if ("alpha" === t || null == n[t]) return;
								u[o] = s.to(u._rgba)
							}
							u[o][e.idx] = i(n[t], e, !0)
						}), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
					}), this) : e
				},
				is: function(t) {
					var i = l(t),
						s = !0,
						n = this;
					return f(c, function(t, o) {
						var a, r = i[o.cache];
						return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function(t, i) {
							return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
						})), s
					}), s
				},
				_space: function() {
					var t = [],
						e = this;
					return f(c, function(i, s) {
						e[s.cache] && t.push(i)
					}), t.pop()
				},
				transition: function(t, e) {
					var s = l(t),
						n = s._space(),
						o = c[n],
						a = 0 === this.alpha() ? l("transparent") : this,
						r = a[o.cache] || o.to(a._rgba),
						h = r.slice();
					return s = s[o.cache], f(o.props, function(t, n) {
						var o = n.idx,
							a = r[o],
							l = s[o],
							c = u[n.type] || {};
						null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
					}), this[n](h)
				},
				blend: function(e) {
					if (1 === this._rgba[3]) return this;
					var i = this._rgba.slice(),
						s = i.pop(),
						n = l(e)._rgba;
					return l(t.map(i, function(t, e) {
						return (1 - s) * n[e] + s * t
					}))
				},
				toRgbaString: function() {
					var e = "rgba(",
						i = t.map(this._rgba, function(t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
				},
				toHslaString: function() {
					var e = "hsla(",
						i = t.map(this.hsla(), function(t, e) {
							return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
						});
					return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
				},
				toHexString: function(e) {
					var i = this._rgba.slice(),
						s = i.pop();
					return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
						return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
					}).join("")
				},
				toString: function() {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e, i, s = t[0] / 255,
					n = t[1] / 255,
					o = t[2] / 255,
					a = t[3],
					r = Math.max(s, n, o),
					h = Math.min(s, n, o),
					l = r - h,
					c = r + h,
					u = .5 * c;
				return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
			}, c.hsla.from = function(t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e = t[0] / 360,
					i = t[1],
					s = t[2],
					o = t[3],
					a = .5 >= s ? s * (1 + i) : s + i - s * i,
					r = 2 * s - a;
				return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
			}, f(c, function(s, n) {
				var o = n.props,
					a = n.cache,
					h = n.to,
					c = n.from;
				l.fn[s] = function(s) {
					if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
					var n, r = t.type(s),
						u = "array" === r || "object" === r ? s : arguments,
						d = this[a].slice();
					return f(o, function(t, e) {
						var s = u["object" === r ? t : e.idx];
						null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
					}), c ? (n = l(c(d)), n[a] = d, n) : l(d)
				}, f(o, function(e, i) {
					l.fn[e] || (l.fn[e] = function(n) {
						var o, a = t.type(n),
							h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
							l = this[h](),
							c = l[i.idx];
						return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
					})
				})
			}), l.hook = function(e) {
				var i = e.split(" ");
				f(i, function(e, i) {
					t.cssHooks[i] = {
						set: function(e, n) {
							var o, a, r = "";
							if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
								if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
									for (a = "backgroundColor" === i ? e.parentNode : e;
										("" === r || "transparent" === r) && a && a.style;) try {
										r = t.css(a, "backgroundColor"), a = a.parentNode
									} catch (h) {}
									n = n.blend(r && "transparent" !== r ? r : "_default")
								}
								n = n.toRgbaString()
							}
							try {
								e.style[i] = n
							} catch (h) {}
						}
					}, t.fx.step[i] = function(e) {
						e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
					}
				})
			}, l.hook(a), t.cssHooks.borderColor = {
				expand: function(t) {
					var e = {};
					return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
						e["border" + s + "Color"] = t
					}), e
				}
			}, o = t.Color.names = {
				aqua: "#00ffff",
				black: "#000000",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				gray: "#808080",
				green: "#008000",
				lime: "#00ff00",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				purple: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				teal: "#008080",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		}(p),
		function() {
			function e(e) {
				var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
					o = {};
				if (n && n.length && n[0] && n[n[0]])
					for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
				else
					for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
				return o
			}

			function i(e, i) {
				var s, o, a = {};
				for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
				return a
			}
			var s = ["add", "remove", "toggle"],
				n = {
					border: 1,
					borderBottom: 1,
					borderColor: 1,
					borderLeft: 1,
					borderRight: 1,
					borderTop: 1,
					borderWidth: 1,
					margin: 1,
					padding: 1
				};
			t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
				t.fx.step[i] = function(t) {
					("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
				}
			}), t.fn.addBack || (t.fn.addBack = function(t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}), t.effects.animateClass = function(n, o, a, r) {
				var h = t.speed(o, a, r);
				return this.queue(function() {
					var o, a = t(this),
						r = a.attr("class") || "",
						l = h.children ? a.find("*").addBack() : a;
					l = l.map(function() {
						var i = t(this);
						return {
							el: i,
							start: e(this)
						}
					}), o = function() {
						t.each(s, function(t, e) {
							n[e] && a[e + "Class"](n[e])
						})
					}, o(), l = l.map(function() {
						return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
					}), a.attr("class", r), l = l.map(function() {
						var e = this,
							i = t.Deferred(),
							s = t.extend({}, h, {
								queue: !1,
								complete: function() {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s), i.promise()
					}), t.when.apply(t, l.get()).done(function() {
						o(), t.each(arguments, function() {
							var e = this.el;
							t.each(this.diff, function(t) {
								e.css(t, "")
							})
						}), h.complete.call(a[0])
					})
				})
			}, t.fn.extend({
				addClass: function(e) {
					return function(i, s, n, o) {
						return s ? t.effects.animateClass.call(this, {
							add: i
						}, s, n, o) : e.apply(this, arguments)
					}
				}(t.fn.addClass),
				removeClass: function(e) {
					return function(i, s, n, o) {
						return arguments.length > 1 ? t.effects.animateClass.call(this, {
							remove: i
						}, s, n, o) : e.apply(this, arguments)
					}
				}(t.fn.removeClass),
				toggleClass: function(e) {
					return function(i, s, n, o, a) {
						return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
							add: i
						} : {
							remove: i
						}, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
							toggle: i
						}, s, n, o)
					}
				}(t.fn.toggleClass),
				switchClass: function(e, i, s, n, o) {
					return t.effects.animateClass.call(this, {
						add: i,
						remove: e
					}, s, n, o)
				}
			})
		}(),
		function() {
			function e(e, i, s, n) {
				return t.isPlainObject(e) && (i = e, e = e.effect), e = {
					effect: e
				}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
			}

			function i(e) {
				return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
			}

			function s(t, e) {
				var i = e.outerWidth(),
					s = e.outerHeight(),
					n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
					o = n.exec(t) || ["", 0, i, s, 0];
				return {
					top: parseFloat(o[1]) || 0,
					right: "auto" === o[2] ? i : parseFloat(o[2]),
					bottom: "auto" === o[3] ? s : parseFloat(o[3]),
					left: parseFloat(o[4]) || 0
				}
			}
			t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
				return function(i) {
					return !!t(i).data(d) || e(i)
				}
			}(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
				save: function(t, e) {
					for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]])
				},
				restore: function(t, e) {
					for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i))
				},
				setMode: function(t, e) {
					return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
				},
				createWrapper: function(e) {
					if (e.parent().is(".ui-effects-wrapper")) return e.parent();
					var i = {
							width: e.outerWidth(!0),
							height: e.outerHeight(!0),
							"float": e.css("float")
						},
						s = t("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						n = {
							width: e.width(),
							height: e.height()
						},
						o = document.activeElement;
					try {
						o.id
					} catch (a) {
						o = document.body
					}
					return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
						position: "relative"
					}), e.css({
						position: "relative"
					})) : (t.extend(i, {
						position: e.css("position"),
						zIndex: e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function(t, s) {
						i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), e.css(n), s.css(i).show()
				},
				removeWrapper: function(e) {
					var i = document.activeElement;
					return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
				}
			}), t.extend(t.effects, {
				version: "1.12.1",
				define: function(e, i, s) {
					return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
				},
				scaledDimensions: function(t, e, i) {
					if (0 === e) return {
						height: 0,
						width: 0,
						outerHeight: 0,
						outerWidth: 0
					};
					var s = "horizontal" !== i ? (e || 100) / 100 : 1,
						n = "vertical" !== i ? (e || 100) / 100 : 1;
					return {
						height: t.height() * n,
						width: t.width() * s,
						outerHeight: t.outerHeight() * n,
						outerWidth: t.outerWidth() * s
					}
				},
				clipToBox: function(t) {
					return {
						width: t.clip.right - t.clip.left,
						height: t.clip.bottom - t.clip.top,
						left: t.clip.left,
						top: t.clip.top
					}
				},
				unshift: function(t, e, i) {
					var s = t.queue();
					e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
				},
				saveStyle: function(t) {
					t.data(u, t[0].style.cssText)
				},
				restoreStyle: function(t) {
					t[0].style.cssText = t.data(u) || "", t.removeData(u)
				},
				mode: function(t, e) {
					var i = t.is(":hidden");
					return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
				},
				getBaseline: function(t, e) {
					var i, s;
					switch (t[0]) {
						case "top":
							i = 0;
							break;
						case "middle":
							i = .5;
							break;
						case "bottom":
							i = 1;
							break;
						default:
							i = t[0] / e.height
					}
					switch (t[1]) {
						case "left":
							s = 0;
							break;
						case "center":
							s = .5;
							break;
						case "right":
							s = 1;
							break;
						default:
							s = t[1] / e.width
					}
					return {
						x: s,
						y: i
					}
				},
				createPlaceholder: function(e) {
					var i, s = e.css("position"),
						n = e.position();
					return e.css({
						marginTop: e.css("marginTop"),
						marginBottom: e.css("marginBottom"),
						marginLeft: e.css("marginLeft"),
						marginRight: e.css("marginRight")
					}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
						display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
						visibility: "hidden",
						marginTop: e.css("marginTop"),
						marginBottom: e.css("marginBottom"),
						marginLeft: e.css("marginLeft"),
						marginRight: e.css("marginRight"),
						"float": e.css("float")
					}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
						position: s,
						left: n.left,
						top: n.top
					}), i
				},
				removePlaceholder: function(t) {
					var e = c + "placeholder",
						i = t.data(e);
					i && (i.remove(), t.removeData(e))
				},
				cleanUp: function(e) {
					t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
				},
				setTransition: function(e, i, s, n) {
					return n = n || {}, t.each(i, function(t, i) {
						var o = e.cssUnit(i);
						o[0] > 0 && (n[i] = o[0] * s + o[1])
					}), n
				}
			}), t.fn.extend({
				effect: function() {
					function i(e) {
						function i() {
							r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a()
						}

						function a() {
							t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e()
						}
						var r = t(this);
						s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a)
					}
					var s = e.apply(this, arguments),
						n = t.effects.effect[s.effect],
						o = n.mode,
						a = s.queue,
						r = a || "fx",
						h = s.complete,
						l = s.mode,
						c = [],
						u = function(e) {
							var i = t(this),
								s = t.effects.mode(i, l) || o;
							i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
						};
					return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function() {
						h && h.call(this)
					}) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
				},
				show: function(t) {
					return function(s) {
						if (i(s)) return t.apply(this, arguments);
						var n = e.apply(this, arguments);
						return n.mode = "show", this.effect.call(this, n)
					}
				}(t.fn.show),
				hide: function(t) {
					return function(s) {
						if (i(s)) return t.apply(this, arguments);
						var n = e.apply(this, arguments);
						return n.mode = "hide", this.effect.call(this, n)
					}
				}(t.fn.hide),
				toggle: function(t) {
					return function(s) {
						if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
						var n = e.apply(this, arguments);
						return n.mode = "toggle", this.effect.call(this, n)
					}
				}(t.fn.toggle),
				cssUnit: function(e) {
					var i = this.css(e),
						s = [];
					return t.each(["em", "px", "%", "pt"], function(t, e) {
						i.indexOf(e) > 0 && (s = [parseFloat(i), e])
					}), s
				},
				cssClip: function(t) {
					return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
				},
				transfer: function(e, i) {
					var s = t(this),
						n = t(e.to),
						o = "fixed" === n.css("position"),
						a = t("body"),
						r = o ? a.scrollTop() : 0,
						h = o ? a.scrollLeft() : 0,
						l = n.offset(),
						c = {
							top: l.top - r,
							left: l.left - h,
							height: n.innerHeight(),
							width: n.innerWidth()
						},
						u = s.offset(),
						d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
							top: u.top - r,
							left: u.left - h,
							height: s.innerHeight(),
							width: s.innerWidth(),
							position: o ? "fixed" : "absolute"
						}).animate(c, e.duration, e.easing, function() {
							d.remove(), t.isFunction(i) && i()
						})
				}
			}), t.fx.step.clip = function(e) {
				e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
					top: e.pos * (e.end.top - e.start.top) + e.start.top,
					right: e.pos * (e.end.right - e.start.right) + e.start.right,
					bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
					left: e.pos * (e.end.left - e.start.left) + e.start.left
				})
			}
		}(),
		function() {
			var e = {};
			t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
				e[i] = function(e) {
					return Math.pow(e, t + 2)
				}
			}), t.extend(e, {
				Sine: function(t) {
					return 1 - Math.cos(t * Math.PI / 2)
				},
				Circ: function(t) {
					return 1 - Math.sqrt(1 - t * t)
				},
				Elastic: function(t) {
					return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
				},
				Back: function(t) {
					return t * t * (3 * t - 2)
				},
				Bounce: function(t) {
					for (var e, i = 4;
						((e = Math.pow(2, --i)) - 1) / 11 > t;);
					return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
				}
			}), t.each(e, function(e, i) {
				t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
					return 1 - i(1 - t)
				}, t.easing["easeInOut" + e] = function(t) {
					return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
				}
			})
		}();
	var f = t.effects;
	t.effects.define("blind", "hide", function(e, i) {
		var s = {
				up: ["bottom", "top"],
				vertical: ["bottom", "top"],
				down: ["top", "bottom"],
				left: ["right", "left"],
				horizontal: ["right", "left"],
				right: ["left", "right"]
			},
			n = t(this),
			o = e.direction || "up",
			a = n.cssClip(),
			r = {
				clip: t.extend({}, a)
			},
			h = t.effects.createPlaceholder(n);
		r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("bounce", function(e, i) {
		var s, n, o, a = t(this),
			r = e.mode,
			h = "hide" === r,
			l = "show" === r,
			c = e.direction || "up",
			u = e.distance,
			d = e.times || 5,
			p = 2 * d + (l || h ? 1 : 0),
			f = e.duration / p,
			g = e.easing,
			m = "up" === c || "down" === c ? "top" : "left",
			_ = "up" === c || "left" === c,
			v = 0,
			b = a.queue().length;
		for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {
				opacity: 1
			}, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
		h && (s = {
			opacity: 0
		}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
	}), t.effects.define("clip", "hide", function(e, i) {
		var s, n = {},
			o = t(this),
			a = e.direction || "vertical",
			r = "both" === a,
			h = r || "horizontal" === a,
			l = r || "vertical" === a;
		s = o.cssClip(), n.clip = {
			top: l ? (s.bottom - s.top) / 2 : s.top,
			right: h ? (s.right - s.left) / 2 : s.right,
			bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
			left: h ? (s.right - s.left) / 2 : s.left
		}, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("drop", "hide", function(e, i) {
		var s, n = t(this),
			o = e.mode,
			a = "show" === o,
			r = e.direction || "left",
			h = "up" === r || "down" === r ? "top" : "left",
			l = "up" === r || "left" === r ? "-=" : "+=",
			c = "+=" === l ? "-=" : "+=",
			u = {
				opacity: 0
			};
		t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("explode", "hide", function(e, i) {
		function s() {
			b.push(this), b.length === u * d && n()
		}

		function n() {
			p.css({
				visibility: "visible"
			}), t(b).remove(), i()
		}
		var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
			d = u,
			p = t(this),
			f = e.mode,
			g = "show" === f,
			m = p.show().css("visibility", "hidden").offset(),
			_ = Math.ceil(p.outerWidth() / d),
			v = Math.ceil(p.outerHeight() / u),
			b = [];
		for (o = 0; u > o; o++)
			for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
				position: "absolute",
				visibility: "visible",
				left: -a * _,
				top: -o * v
			}).parent().addClass("ui-effects-explode").css({
				position: "absolute",
				overflow: "hidden",
				width: _,
				height: v,
				left: r + (g ? l * _ : 0),
				top: h + (g ? c * v : 0),
				opacity: g ? 0 : 1
			}).animate({
				left: r + (g ? 0 : l * _),
				top: h + (g ? 0 : c * v),
				opacity: g ? 1 : 0
			}, e.duration || 500, e.easing, s)
	}), t.effects.define("fade", "toggle", function(e, i) {
		var s = "show" === e.mode;
		t(this).css("opacity", s ? 0 : 1).animate({
			opacity: s ? 1 : 0
		}, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("fold", "hide", function(e, i) {
		var s = t(this),
			n = e.mode,
			o = "show" === n,
			a = "hide" === n,
			r = e.size || 15,
			h = /([0-9]+)%/.exec(r),
			l = !!e.horizFirst,
			c = l ? ["right", "bottom"] : ["bottom", "right"],
			u = e.duration / 2,
			d = t.effects.createPlaceholder(s),
			p = s.cssClip(),
			f = {
				clip: t.extend({}, p)
			},
			g = {
				clip: t.extend({}, p)
			},
			m = [p[c[0]], p[c[1]]],
			_ = s.queue().length;
		h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function(i) {
			d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i()
		}).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4)
	}), t.effects.define("highlight", "show", function(e, i) {
		var s = t(this),
			n = {
				backgroundColor: s.css("backgroundColor")
			};
		"hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
			backgroundImage: "none",
			backgroundColor: e.color || "#ffff99"
		}).animate(n, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("size", function(e, i) {
		var s, n, o, a = t(this),
			r = ["fontSize"],
			h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			c = e.mode,
			u = "effect" !== c,
			d = e.scale || "both",
			p = e.origin || ["middle", "center"],
			f = a.css("position"),
			g = a.position(),
			m = t.effects.scaledDimensions(a),
			_ = e.from || m,
			v = e.to || t.effects.scaledDimensions(a, 0);
		t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
			from: {
				y: _.height / m.height,
				x: _.width / m.width
			},
			to: {
				y: v.height / m.height,
				x: v.width / m.width
			}
		}, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
			var i = t(this),
				s = t.effects.scaledDimensions(i),
				o = {
					height: s.height * n.from.y,
					width: s.width * n.from.x,
					outerHeight: s.outerHeight * n.from.y,
					outerWidth: s.outerWidth * n.from.x
				},
				a = {
					height: s.height * n.to.y,
					width: s.width * n.to.x,
					outerHeight: s.height * n.to.y,
					outerWidth: s.width * n.to.x
				};
			n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
				u && t.effects.restoreStyle(i)
			})
		})), a.animate(v, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				var e = a.offset();
				0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
			}
		})
	}), t.effects.define("scale", function(e, i) {
		var s = t(this),
			n = e.mode,
			o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
			a = t.extend(!0, {
				from: t.effects.scaledDimensions(s),
				to: t.effects.scaledDimensions(s, o, e.direction || "both"),
				origin: e.origin || ["middle", "center"]
			}, e);
		e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
	}), t.effects.define("puff", "hide", function(e, i) {
		var s = t.extend(!0, {}, e, {
			fade: !0,
			percent: parseInt(e.percent, 10) || 150
		});
		t.effects.effect.scale.call(this, s, i)
	}), t.effects.define("pulsate", "show", function(e, i) {
		var s = t(this),
			n = e.mode,
			o = "show" === n,
			a = "hide" === n,
			r = o || a,
			h = 2 * (e.times || 5) + (r ? 1 : 0),
			l = e.duration / h,
			c = 0,
			u = 1,
			d = s.queue().length;
		for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++) s.animate({
			opacity: c
		}, l, e.easing), c = 1 - c;
		s.animate({
			opacity: c
		}, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1)
	}), t.effects.define("shake", function(e, i) {
		var s = 1,
			n = t(this),
			o = e.direction || "left",
			a = e.distance || 20,
			r = e.times || 3,
			h = 2 * r + 1,
			l = Math.round(e.duration / h),
			c = "up" === o || "down" === o ? "top" : "left",
			u = "up" === o || "left" === o,
			d = {},
			p = {},
			f = {},
			g = n.queue().length;
		for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);
		n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1)
	}), t.effects.define("slide", "show", function(e, i) {
		var s, n, o = t(this),
			a = {
				up: ["bottom", "top"],
				down: ["top", "bottom"],
				left: ["right", "left"],
				right: ["left", "right"]
			},
			r = e.mode,
			h = e.direction || "left",
			l = "up" === h || "down" === h ? "top" : "left",
			c = "up" === h || "left" === h,
			u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
			d = {};
		t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	});
	var f;
	t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function(e, i) {
		t(this).transfer(e, i)
	})), t.ui.focusable = function(i, s) {
		var n, o, a, r, h, l = i.nodeName.toLowerCase();
		return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)))
	}, t.extend(t.expr[":"], {
		focusable: function(e) {
			return t.ui.focusable(e, null != t.attr(e, "tabindex"))
		}
	}), t.ui.focusable, t.fn.form = function() {
		return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
	}, t.ui.formResetMixin = {
		_formResetHandler: function() {
			var e = t(this);
			setTimeout(function() {
				var i = e.data("ui-form-reset-instances");
				t.each(i, function() {
					this.refresh()
				})
			})
		},
		_bindFormResetHandler: function() {
			if (this.form = this.element.form(), this.form.length) {
				var t = this.form.data("ui-form-reset-instances") || [];
				t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
			}
		},
		_unbindFormResetHandler: function() {
			if (this.form.length) {
				var e = this.form.data("ui-form-reset-instances");
				e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
			}
		}
	}, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
		function s(e, i, s, o) {
			return t.each(n, function() {
				i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			o = i.toLowerCase(),
			a = {
				innerWidth: t.fn.innerWidth,
				innerHeight: t.fn.innerHeight,
				outerWidth: t.fn.outerWidth,
				outerHeight: t.fn.outerHeight
			};
		t.fn["inner" + i] = function(e) {
			return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
				t(this).css(o, s(this, e) + "px")
			})
		}, t.fn["outer" + i] = function(e, n) {
			return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
				t(this).css(o, s(this, e, !0, n) + "px")
			})
		}
	}), t.fn.addBack = function(t) {
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}), t.ui.keyCode = {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}, t.ui.escapeSelector = function() {
		var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
		return function(e) {
			return e.replace(t, "\\$1")
		}
	}(), t.fn.labels = function() {
		var e, i, s, n, o;
		return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
	}, t.fn.scrollParent = function(e) {
		var i = this.css("position"),
			s = "absolute" === i,
			n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
			o = this.parents().filter(function() {
				var e = t(this);
				return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
			}).eq(0);
		return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
	}, t.extend(t.expr[":"], {
		tabbable: function(e) {
			var i = t.attr(e, "tabindex"),
				s = null != i;
			return (!s || i >= 0) && t.ui.focusable(e, s)
		}
	}), t.fn.extend({
		uniqueId: function() {
			var t = 0;
			return function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++t)
				})
			}
		}(),
		removeUniqueId: function() {
			return this.each(function() {
				/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
			})
		}
	}), t.widget("ui.accordion", {
		version: "1.12.1",
		options: {
			active: 0,
			animate: {},
			classes: {
				"ui-accordion-header": "ui-corner-top",
				"ui-accordion-header-collapsed": "ui-corner-all",
				"ui-accordion-content": "ui-corner-bottom"
			},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child, > :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		hideProps: {
			borderTopWidth: "hide",
			borderBottomWidth: "hide",
			paddingTop: "hide",
			paddingBottom: "hide",
			height: "hide"
		},
		showProps: {
			borderTopWidth: "show",
			borderBottomWidth: "show",
			paddingTop: "show",
			paddingBottom: "show",
			height: "show"
		},
		_create: function() {
			var e = this.options;
			this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function() {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : t()
			}
		},
		_createIcons: function() {
			var e, i, s = this.options.icons;
			s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
		},
		_destroyIcons: function() {
			this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
		},
		_destroy: function() {
			var t;
			this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
		},
		_setOption: function(t, e) {
			return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0)
		},
		_setOptionDisabled: function(t) {
			this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
		},
		_keydown: function(e) {
			if (!e.altKey && !e.ctrlKey) {
				var i = t.ui.keyCode,
					s = this.headers.length,
					n = this.headers.index(e.target),
					o = !1;
				switch (e.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						o = this.headers[(n + 1) % s];
						break;
					case i.LEFT:
					case i.UP:
						o = this.headers[(n - 1 + s) % s];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(e);
						break;
					case i.HOME:
						o = this.headers[0];
						break;
					case i.END:
						o = this.headers[s - 1]
				}
				o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
			}
		},
		_panelKeyDown: function(e) {
			e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
		},
		refresh: function() {
			var e = this.options;
			this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function() {
			var t = this.headers,
				e = this.panels;
			this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
		},
		_refresh: function() {
			var e, i = this.options,
				s = i.heightStyle,
				n = this.element.parent();
			this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
				var e = t(this),
					i = e.uniqueId().attr("id"),
					s = e.next(),
					n = s.uniqueId().attr("id");
				e.attr("aria-controls", n), s.attr("aria-labelledby", i)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}).next().attr({
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}).next().attr({
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
				var i = t(this),
					s = i.css("position");
				"absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
			}), this.headers.each(function() {
				e -= t(this).outerHeight(!0)
			}), this.headers.next().each(function() {
				t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
				var i = t(this).is(":visible");
				i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
			}).height(e))
		},
		_activate: function(e) {
			var i = this._findActive(e)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function(e) {
			return "number" == typeof e ? this.headers.eq(e) : t()
		},
		_setupEvents: function(e) {
			var i = {
				keydown: "_keydown"
			};
			e && t.each(e.split(" "), function(t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function(e) {
			var i, s, n = this.options,
				o = this.active,
				a = t(e.currentTarget),
				r = a[0] === o[0],
				h = r && n.collapsible,
				l = h ? t() : a.next(),
				c = o.next(),
				u = {
					oldHeader: o,
					oldPanel: c,
					newHeader: h ? t() : a,
					newPanel: l
				};
			e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
		},
		_toggle: function(e) {
			var i = e.newPanel,
				s = this.prevShow.length ? this.prevShow : e.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
				"aria-hidden": "true"
			}), s.prev().attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			}), i.length && s.length ? s.prev().attr({
				tabIndex: -1,
				"aria-expanded": "false"
			}) : i.length && this.headers.filter(function() {
				return 0 === parseInt(t(this).attr("tabIndex"), 10)
			}).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_animate: function(t, e, i) {
			var s, n, o, a = this,
				r = 0,
				h = t.css("box-sizing"),
				l = t.length && (!e.length || t.index() < e.index()),
				c = this.options.animate || {},
				u = l && c.down || c,
				d = function() {
					a._toggleComplete(i)
				};
			return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
				duration: o,
				easing: n,
				step: function(t, e) {
					e.now = Math.round(t)
				}
			}), t.hide().animate(this.showProps, {
				duration: o,
				easing: n,
				complete: d,
				step: function(t, i) {
					i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
				}
			}), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
		},
		_toggleComplete: function(t) {
			var e = t.oldPanel,
				i = e.prev();
			this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
		}
	}), t.ui.safeActiveElement = function(t) {
		var e;
		try {
			e = t.activeElement
		} catch (i) {
			e = t.body
		}
		return e || (e = t.body), e.nodeName || (e = t.body), e
	}, t.widget("ui.menu", {
		version: "1.12.1",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-caret-1-e"
			},
			items: "> *",
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function() {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
				role: this.options.role,
				tabIndex: 0
			}), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
				"mousedown .ui-menu-item": function(t) {
					t.preventDefault()
				},
				"click .ui-menu-item": function(e) {
					var i = t(e.target),
						s = t(t.ui.safeActiveElement(this.document[0]));
					!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function(e) {
					if (!this.previousFilter) {
						var i = t(e.target).closest(".ui-menu-item"),
							s = t(e.currentTarget);
						i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
					}
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(t, e) {
					var i = this.active || this.element.find(this.options.items).eq(0);
					e || this.focus(t, i)
				},
				blur: function(e) {
					this._delay(function() {
						var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
						i && this.collapseAll(e)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function(t) {
					this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
				}
			})
		},
		_destroy: function() {
			var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
				i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
				var e = t(this);
				e.data("ui-menu-submenu-caret") && e.remove()
			})
		},
		_keydown: function(e) {
			var i, s, n, o, a = !0;
			switch (e.keyCode) {
				case t.ui.keyCode.PAGE_UP:
					this.previousPage(e);
					break;
				case t.ui.keyCode.PAGE_DOWN:
					this.nextPage(e);
					break;
				case t.ui.keyCode.HOME:
					this._move("first", "first", e);
					break;
				case t.ui.keyCode.END:
					this._move("last", "last", e);
					break;
				case t.ui.keyCode.UP:
					this.previous(e);
					break;
				case t.ui.keyCode.DOWN:
					this.next(e);
					break;
				case t.ui.keyCode.LEFT:
					this.collapse(e);
					break;
				case t.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
					break;
				case t.ui.keyCode.ENTER:
				case t.ui.keyCode.SPACE:
					this._activate(e);
					break;
				case t.ui.keyCode.ESCAPE:
					this.collapse(e);
					break;
				default:
					a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
						delete this.previousFilter
					}, 1e3)) : delete this.previousFilter
			}
			a && e.preventDefault()
		},
		_activate: function(t) {
			this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
		},
		refresh: function() {
			var e, i, s, n, o, a = this,
				r = this.options.icons.submenu,
				h = this.element.find(this.options.menus);
			this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function() {
				var e = t(this),
					i = e.prev(),
					s = t("<span>").data("ui-menu-submenu-caret", !0);
				a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
			}), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
				var e = t(this);
				a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
			}), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
				tabIndex: -1,
				role: this._itemRole()
			}), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			} [this.options.role]
		},
		_setOption: function(t, e) {
			if ("icons" === t) {
				var i = this.element.find(".ui-menu-icon");
				this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
			}
			this._super(t, e)
		},
		_setOptionDisabled: function(t) {
			this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		focus: function(t, e) {
			var i, s, n;
			this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
				this._close()
			}, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
				item: e
			})
		},
		_scrollIntoView: function(e) {
			var i, s, n, o, a, r;
			this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
		},
		blur: function(t, e) {
			e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
				item: this.active
			}), this.active = null)
		},
		_startOpening: function(t) {
			clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
				this._close(), this._open(t)
			}, this.delay))
		},
		_open: function(e) {
			var i = t.extend({
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function(e, i) {
			clearTimeout(this.timer), this.timer = this._delay(function() {
				var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
				s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
			}, this.delay)
		},
		_close: function(t) {
			t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
		},
		_closeOnDocumentClick: function(e) {
			return !t(e.target).closest(".ui-menu").length
		},
		_isDivider: function(t) {
			return !/[^\-\u2014\u2013\s]/.test(t.text())
		},
		collapse: function(t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand: function(t) {
			var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
			e && e.length && (this._open(e.parent()), this._delay(function() {
				this.focus(t, e)
			}))
		},
		next: function(t) {
			this._move("next", "first", t)
		},
		previous: function(t) {
			this._move("prev", "last", t)
		},
		isFirstItem: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(t, e, i) {
			var s;
			this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
		},
		nextPage: function(e) {
			var i, s, n;
			return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
				return i = t(this), 0 > i.offset().top - s - n
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0)
		},
		previousPage: function(e) {
			var i, s, n;
			return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
				return i = t(this), i.offset().top - s + n > 0
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0)
		},
		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
		},
		_filterMenuItems: function(e) {
			var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
				s = RegExp("^" + i, "i");
			return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
				return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
			})
		}
	}), t.widget("ui.autocomplete", {
		version: "1.12.1",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		requestIndex: 0,
		pending: 0,
		_create: function() {
			var e, i, s, n = this.element[0].nodeName.toLowerCase(),
				o = "textarea" === n,
				a = "input" === n;
			this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
				keydown: function(n) {
					if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
					e = !1, s = !1, i = !1;
					var o = t.ui.keyCode;
					switch (n.keyCode) {
						case o.PAGE_UP:
							e = !0, this._move("previousPage", n);
							break;
						case o.PAGE_DOWN:
							e = !0, this._move("nextPage", n);
							break;
						case o.UP:
							e = !0, this._keyEvent("previous", n);
							break;
						case o.DOWN:
							e = !0, this._keyEvent("next", n);
							break;
						case o.ENTER:
							this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
							break;
						case o.TAB:
							this.menu.active && this.menu.select(n);
							break;
						case o.ESCAPE:
							this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
							break;
						default:
							i = !0, this._searchTimeout(n)
					}
				},
				keypress: function(s) {
					if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
					if (!i) {
						var n = t.ui.keyCode;
						switch (s.keyCode) {
							case n.PAGE_UP:
								this._move("previousPage", s);
								break;
							case n.PAGE_DOWN:
								this._move("nextPage", s);
								break;
							case n.UP:
								this._keyEvent("previous", s);
								break;
							case n.DOWN:
								this._keyEvent("next", s)
						}
					}
				},
				input: function(t) {
					return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
				},
				focus: function() {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function(t) {
					return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
				}
			}), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
				role: null
			}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
				mousedown: function(e) {
					e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
						delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
					})
				},
				menufocus: function(e, i) {
					var s, n;
					return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
						t(e.target).trigger(e.originalEvent)
					}), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
						item: n
					}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0)
				},
				menuselect: function(e, i) {
					var s = i.item.data("ui-autocomplete-item"),
						n = this.previous;
					this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() {
						this.previous = n, this.selectedItem = s
					})), !1 !== this._trigger("select", e, {
						item: s
					}) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
				}
			}), this.liveRegion = t("<div>", {
				role: "status",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function() {
			clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function(t, e) {
			this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
		},
		_isEventTargetInWidget: function(e) {
			var i = this.menu.element[0];
			return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
		},
		_closeOnClickOutside: function(t) {
			this._isEventTargetInWidget(t) || this.close()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
		},
		_initSource: function() {
			var e, i, s = this;
			t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
				s(t.ui.autocomplete.filter(e, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
				s.xhr && s.xhr.abort(), s.xhr = t.ajax({
					url: i,
					data: e,
					dataType: "json",
					success: function(t) {
						n(t)
					},
					error: function() {
						n([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function(t) {
			clearTimeout(this.searching), this.searching = this._delay(function() {
				var e = this.term === this._value(),
					i = this.menu.element.is(":visible"),
					s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
				(!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
			}, this.options.delay)
		},
		search: function(t, e) {
			return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
		},
		_search: function(t) {
			this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: t
			}, this._response())
		},
		_response: function() {
			var e = ++this.requestIndex;
			return t.proxy(function(t) {
				e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
			}, this)
		},
		__response: function(t) {
			t && (t = this._normalize(t)), this._trigger("response", null, {
				content: t
			}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
		},
		close: function(t) {
			this.cancelSearch = !0, this._close(t)
		},
		_close: function(t) {
			this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
		},
		_change: function(t) {
			this.previous !== this._value() && this._trigger("change", t, {
				item: this.selectedItem
			})
		},
		_normalize: function(e) {
			return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
				return "string" == typeof e ? {
					label: e,
					value: e
				} : t.extend({}, e, {
					label: e.label || e.value,
					value: e.value || e.label
				})
			})
		},
		_suggest: function(e) {
			var i = this.menu.element.empty();
			this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
				of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
				mousedown: "_closeOnClickOutside"
			})
		},
		_resizeMenu: function() {
			var t = this.menu.element;
			t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(e, i) {
			var s = this;
			t.each(i, function(t, i) {
				s._renderItemData(e, i)
			})
		},
		_renderItemData: function(t, e) {
			return this._renderItem(t, e).data("ui-autocomplete-item", e)
		},
		_renderItem: function(e, i) {
			return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
		},
		_move: function(t, e) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
		},
		widget: function() {
			return this.menu.element
		},
		_value: function() {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(t, e) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
		},
		_isContentEditable: function(t) {
			if (!t.length) return !1;
			var e = t.prop("contentEditable");
			return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
		}
	}), t.extend(t.ui.autocomplete, {
		escapeRegex: function(t) {
			return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(e, i) {
			var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
			return t.grep(e, function(t) {
				return s.test(t.label || t.value || t)
			})
		}
	}), t.widget("ui.autocomplete", t.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function(t) {
					return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(e) {
			var i;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
		}
	}), t.ui.autocomplete;
	var g = /ui-corner-([a-z]){2,6}/g;
	t.widget("ui.controlgroup", {
		version: "1.12.1",
		defaultElement: "<div>",
		options: {
			direction: "horizontal",
			disabled: null,
			onlyVisible: !0,
			items: {
				button: "input[type=button], input[type=submit], input[type=reset], button, a",
				controlgroupLabel: ".ui-controlgroup-label",
				checkboxradio: "input[type='checkbox'], input[type='radio']",
				selectmenu: "select",
				spinner: ".ui-spinner-input"
			}
		},
		_create: function() {
			this._enhance()
		},
		_enhance: function() {
			this.element.attr("role", "toolbar"), this.refresh()
		},
		_destroy: function() {
			this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
		},
		_initWidgets: function() {
			var e = this,
				i = [];
			t.each(this.options.items, function(s, n) {
				var o, a = {};
				return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function() {
					var e = t(this);
					e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
				}), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
					classes: {}
				}, e.element.find(n).each(function() {
					var n = t(this),
						o = n[s]("instance"),
						r = t.widget.extend({}, a);
					if ("button" !== s || !n.parent(".ui-spinner").length) {
						o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
						var h = n[s]("widget");
						t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0])
					}
				})), void 0) : void 0
			}), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
		},
		_callChildMethod: function(e) {
			this.childWidgets.each(function() {
				var i = t(this),
					s = i.data("ui-controlgroup-data");
				s && s[e] && s[e]()
			})
		},
		_updateCornerClass: function(t, e) {
			var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
				s = this._buildSimpleOptions(e, "label").classes.label;
			this._removeClass(t, null, i), this._addClass(t, null, s)
		},
		_buildSimpleOptions: function(t, e) {
			var i = "vertical" === this.options.direction,
				s = {
					classes: {}
				};
			return s.classes[e] = {
				middle: "",
				first: "ui-corner-" + (i ? "top" : "left"),
				last: "ui-corner-" + (i ? "bottom" : "right"),
				only: "ui-corner-all"
			} [t], s
		},
		_spinnerOptions: function(t) {
			var e = this._buildSimpleOptions(t, "ui-spinner");
			return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
		},
		_buttonOptions: function(t) {
			return this._buildSimpleOptions(t, "ui-button")
		},
		_checkboxradioOptions: function(t) {
			return this._buildSimpleOptions(t, "ui-checkboxradio-label")
		},
		_selectmenuOptions: function(t) {
			var e = "vertical" === this.options.direction;
			return {
				width: e ? "auto" : !1,
				classes: {
					middle: {
						"ui-selectmenu-button-open": "",
						"ui-selectmenu-button-closed": ""
					},
					first: {
						"ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
						"ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
					},
					last: {
						"ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
						"ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
					},
					only: {
						"ui-selectmenu-button-open": "ui-corner-top",
						"ui-selectmenu-button-closed": "ui-corner-all"
					}
				} [t]
			}
		},
		_resolveClassesValues: function(e, i) {
			var s = {};
			return t.each(e, function(n) {
				var o = i.options.classes[n] || "";
				o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
			}), s
		},
		_setOption: function(t, e) {
			return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0)
		},
		refresh: function() {
			var e, i = this;
			this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) {
				var n = e[s]().data("ui-controlgroup-data");
				if (n && i["_" + n.widgetName + "Options"]) {
					var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
					o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
				} else i._updateCornerClass(e[s](), s)
			}), this._callChildMethod("refresh"))
		}
	}), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
		version: "1.12.1",
		options: {
			disabled: null,
			label: null,
			icon: !0,
			classes: {
				"ui-checkboxradio-label": "ui-corner-all",
				"ui-checkboxradio-icon": "ui-corner-all"
			}
		},
		_getCreateOptions: function() {
			var e, i, s = this,
				n = this._super() || {};
			return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
				s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
			}), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n
		},
		_create: function() {
			var t = this.element[0].checked;
			this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
				change: "_toggleClasses",
				focus: function() {
					this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
				},
				blur: function() {
					this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
				}
			})
		},
		_readType: function() {
			var e = this.element[0].nodeName.toLowerCase();
			this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
		},
		_enhance: function() {
			this._updateIcon(this.element[0].checked)
		},
		widget: function() {
			return this.label
		},
		_getRadioGroup: function() {
			var e, i = this.element[0].name,
				s = "input[name='" + t.ui.escapeSelector(i) + "']";
			return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function() {
				return 0 === t(this).form().length
			}), e.not(this.element)) : t([])
		},
		_toggleClasses: function() {
			var e = this.element[0].checked;
			this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
				var e = t(this).checkboxradio("instance");
				e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
			})
		},
		_destroy: function() {
			this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
		},
		_setOption: function(t, e) {
			return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0
		},
		_updateIcon: function(e) {
			var i = "ui-icon ui-icon-background ";
			this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
		},
		_updateLabel: function() {
			var t = this.label.contents().not(this.element[0]);
			this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
		},
		refresh: function() {
			var t = this.element[0].checked,
				e = this.element[0].disabled;
			this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
				disabled: e
			})
		}
	}]), t.ui.checkboxradio, t.widget("ui.button", {
		version: "1.12.1",
		defaultElement: "<button>",
		options: {
			classes: {
				"ui-button": "ui-corner-all"
			},
			disabled: null,
			icon: null,
			iconPosition: "beginning",
			label: null,
			showLabel: !0
		},
		_getCreateOptions: function() {
			var t, e = this._super() || {};
			return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
		},
		_create: function() {
			!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
				keyup: function(e) {
					e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
				}
			})
		},
		_enhance: function() {
			this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
		},
		_updateTooltip: function() {
			this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
		},
		_updateIcon: function(e, i) {
			var s = "iconPosition" !== e,
				n = s ? this.options.iconPosition : i,
				o = "top" === n || "bottom" === n;
			this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
		},
		_destroy: function() {
			this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
		},
		_attachIconSpace: function(t) {
			this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
		},
		_attachIcon: function(t) {
			this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
		},
		_setOptions: function(t) {
			var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
				i = void 0 === t.icon ? this.options.icon : t.icon;
			e || i || (t.showLabel = !0), this._super(t)
		},
		_setOption: function(t, e) {
			"icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
		},
		refresh: function() {
			var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
			t !== this.options.disabled && this._setOptions({
				disabled: t
			}), this._updateTooltip()
		}
	}), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
		options: {
			text: !0,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
		},
		_setOption: function(t, e) {
			return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0)
		}
	}), t.fn.button = function(e) {
		return function() {
			return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
				icon: !1
			}) : this.checkboxradio.apply(this, arguments))
		}
	}(t.fn.button), t.fn.buttonset = function() {
		return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
			button: arguments[0].items
		}), this.controlgroup.apply(this, arguments))
	}), t.ui.button, t.extend(t.ui, {
		datepicker: {
			version: "1.12.1"
		}
	});
	var m;
	t.extend(s.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(t) {
			return a(this._defaults, t || {}), this
		},
		_attachDatepicker: function(e, i) {
			var s, n, o;
			s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
		},
		_newInst: function(e, i) {
			var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: s,
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: i,
				dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function(e, i) {
			var s = t(e);
			i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
		},
		_attachments: function(e, i) {
			var s, n, o, a = this._get(i, "appendText"),
				r = this._get(i, "isRTL");
			i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
				src: o,
				alt: n,
				title: n
			}) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
				src: o,
				alt: n,
				title: n
			}) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
				return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
			}))
		},
		_autoSize: function(t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var e, i, s, n, o = new Date(2009, 11, 20),
					a = this._get(t, "dateFormat");
				a.match(/[DM]/) && (e = function(t) {
					for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
					return s
				}, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
			}
		},
		_inlineDatepicker: function(e, i) {
			var s = t(e);
			s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function(e, i, s, n, o) {
			var r, h, l, c, u, d = this._dialogInst;
			return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
		},
		_destroyDatepicker: function(e) {
			var i, s = t(e),
				n = t.data(e, "datepicker");
			s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null))
		},
		_enableDatepicker: function(e) {
			var i, s, n = t(e),
				o = t.data(e, "datepicker");
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
				return t === e ? null : t
			}))
		},
		_disableDatepicker: function(e) {
			var i, s, n = t(e),
				o = t.data(e, "datepicker");
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
				return t === e ? null : t
			}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker: function(t) {
			if (!t) return !1;
			for (var e = 0; this._disabledInputs.length > e; e++)
				if (this._disabledInputs[e] === t) return !0;
			return !1
		},
		_getInst: function(e) {
			try {
				return t.data(e, "datepicker")
			} catch (i) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(e, i, s) {
			var n, o, r, h, l = this._getInst(e);
			return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
		},
		_changeDatepicker: function(t, e, i) {
			this._optionDatepicker(t, e, i)
		},
		_refreshDatepicker: function(t) {
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker: function(t, e) {
			var i = this._getInst(t);
			i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function(t, e) {
			var i = this._getInst(t);
			return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
		},
		_doKeyDown: function(e) {
			var i, s, n, o = t.datepicker._getInst(e.target),
				a = !0,
				r = o.dpDiv.is(".ui-datepicker-rtl");
			if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
				case 9:
					t.datepicker._hideDatepicker(), a = !1;
					break;
				case 13:
					return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
				case 27:
					t.datepicker._hideDatepicker();
					break;
				case 33:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 34:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 35:
					(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
					break;
				case 36:
					(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
					break;
				case 37:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 38:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
					break;
				case 39:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 40:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
					break;
				default:
					a = !1
			} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
			a && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function(e) {
			var i, s, n = t.datepicker._getInst(e.target);
			return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
		},
		_doKeyUp: function(e) {
			var i, s = t.datepicker._getInst(e.target);
			if (s.input.val() !== s.lastVal) try {
				i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
			} catch (n) {}
			return !0
		},
		_showDatepicker: function(e) {
			if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
				var s, n, o, r, h, l, c;
				s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
					return r |= "fixed" === t(this).css("position"), !r
				}), h = {
					left: t.datepicker._pos[0],
					top: t.datepicker._pos[1]
				}, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
					position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
					display: "none",
					left: h.left + "px",
					top: h.top + "px"
				}), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
			}
		},
		_updateDatepicker: function(e) {
			this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
			var i, s = this._getNumberOfMonths(e),
				n = s[1],
				a = 17,
				r = e.dpDiv.find("." + this._dayOverClass + " a");
			r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
				i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function(t) {
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
		},
		_checkOffset: function(e, i, s) {
			var n = e.dpDiv.outerWidth(),
				o = e.dpDiv.outerHeight(),
				a = e.input ? e.input.outerWidth() : 0,
				r = e.input ? e.input.outerHeight() : 0,
				h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
				l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
			return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
		},
		_findPos: function(e) {
			for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
			return i = t(e).offset(), [i.left, i.top]
		},
		_hideDatepicker: function(e) {
			var i, s, n, o, a = this._curInst;
			!a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
				t.datepicker._tidyDialog(a)
			}, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function(t) {
			t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(e) {
			if (t.datepicker._curInst) {
				var i = t(e.target),
					s = t.datepicker._getInst(i[0]);
				(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(e, i, s) {
			var n = t(e),
				o = this._getInst(n[0]);
			this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
		},
		_gotoToday: function(e) {
			var i, s = t(e),
				n = this._getInst(s[0]);
			this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
		},
		_selectMonthYear: function(e, i, s) {
			var n = t(e),
				o = this._getInst(n[0]);
			o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
		},
		_selectDay: function(e, i, s, n) {
			var o, a = t(e);
			t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
		},
		_clearDate: function(e) {
			var i = t(e);
			this._selectDate(i, "")
		},
		_selectDate: function(e, i) {
			var s, n = t(e),
				o = this._getInst(n[0]);
			i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
		},
		_updateAlternate: function(e) {
			var i, s, n, o = this._get(e, "altField");
			o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
		},
		noWeekends: function(t) {
			var e = t.getDay();
			return [e > 0 && 6 > e, ""]
		},
		iso8601Week: function(t) {
			var e, i = new Date(t.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
		},
		parseDate: function(e, i, s) {
			if (null == e || null == i) throw "Invalid arguments";
			if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
			var n, o, a, r, h = 0,
				l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
				u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
				d = (s ? s.dayNames : null) || this._defaults.dayNames,
				p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
				f = (s ? s.monthNames : null) || this._defaults.monthNames,
				g = -1,
				m = -1,
				_ = -1,
				v = -1,
				b = !1,
				y = function(t) {
					var i = e.length > n + 1 && e.charAt(n + 1) === t;
					return i && n++, i
				},
				w = function(t) {
					var e = y(t),
						s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
						n = "y" === t ? s : 1,
						o = RegExp("^\\d{" + n + "," + s + "}"),
						a = i.substring(h).match(o);
					if (!a) throw "Missing number at position " + h;
					return h += a[0].length, parseInt(a[0], 10)
				},
				k = function(e, s, n) {
					var o = -1,
						a = t.map(y(e) ? n : s, function(t, e) {
							return [
								[e, t]
							]
						}).sort(function(t, e) {
							return -(t[1].length - e[1].length)
						});
					if (t.each(a, function(t, e) {
							var s = e[1];
							return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0
						}), -1 !== o) return o + 1;
					throw "Unknown name at position " + h
				},
				x = function() {
					if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
					h++
				};
			for (n = 0; e.length > n; n++)
				if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;
				else switch (e.charAt(n)) {
					case "d":
						_ = w("d");
						break;
					case "D":
						k("D", u, d);
						break;
					case "o":
						v = w("o");
						break;
					case "m":
						m = w("m");
						break;
					case "M":
						m = k("M", p, f);
						break;
					case "y":
						g = w("y");
						break;
					case "@":
						r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
						break;
					case "!":
						r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
						break;
					case "'":
						y("'") ? x() : b = !0;
						break;
					default:
						x()
				}
			if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
			if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1)
				for (m = 1, _ = v;;) {
					if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
					m++, _ -= o
				}
			if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
			return r
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate: function(t, e, i) {
			if (!e) return "";
			var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
				o = (i ? i.dayNames : null) || this._defaults.dayNames,
				a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
				r = (i ? i.monthNames : null) || this._defaults.monthNames,
				h = function(e) {
					var i = t.length > s + 1 && t.charAt(s + 1) === e;
					return i && s++, i
				},
				l = function(t, e, i) {
					var s = "" + e;
					if (h(t))
						for (; i > s.length;) s = "0" + s;
					return s
				},
				c = function(t, e, i, s) {
					return h(t) ? s[e] : i[e]
				},
				u = "",
				d = !1;
			if (e)
				for (s = 0; t.length > s; s++)
					if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
					else switch (t.charAt(s)) {
						case "d":
							u += l("d", e.getDate(), 2);
							break;
						case "D":
							u += c("D", e.getDay(), n, o);
							break;
						case "o":
							u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							u += l("m", e.getMonth() + 1, 2);
							break;
						case "M":
							u += c("M", e.getMonth(), a, r);
							break;
						case "y":
							u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
							break;
						case "@":
							u += e.getTime();
							break;
						case "!":
							u += 1e4 * e.getTime() + this._ticksTo1970;
							break;
						case "'":
							h("'") ? u += "'" : d = !0;
							break;
						default:
							u += t.charAt(s)
					}
			return u
		},
		_possibleChars: function(t) {
			var e, i = "",
				s = !1,
				n = function(i) {
					var s = t.length > e + 1 && t.charAt(e + 1) === i;
					return s && e++, s
				};
			for (e = 0; t.length > e; e++)
				if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
				else switch (t.charAt(e)) {
					case "d":
					case "m":
					case "y":
					case "@":
						i += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						n("'") ? i += "'" : s = !0;
						break;
					default:
						i += t.charAt(e)
				}
			return i
		},
		_get: function(t, e) {
			return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
		},
		_setDateFromField: function(t, e) {
			if (t.input.val() !== t.lastVal) {
				var i = this._get(t, "dateFormat"),
					s = t.lastVal = t.input ? t.input.val() : null,
					n = this._getDefaultDate(t),
					o = n,
					a = this._getFormatConfig(t);
				try {
					o = this.parseDate(i, s, a) || n
				} catch (r) {
					s = e ? "" : s
				}
				t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
			}
		},
		_getDefaultDate: function(t) {
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate: function(e, i, s) {
			var n = function(t) {
					var e = new Date;
					return e.setDate(e.getDate() + t), e
				},
				o = function(i) {
					try {
						return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
					} catch (s) {}
					for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
						switch (l[2] || "d") {
							case "d":
							case "D":
								r += parseInt(l[1], 10);
								break;
							case "w":
							case "W":
								r += 7 * parseInt(l[1], 10);
								break;
							case "m":
							case "M":
								a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
								break;
							case "y":
							case "Y":
								o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
						}
						l = h.exec(i)
					}
					return new Date(o, a, r)
				},
				a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
			return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
		},
		_daylightSavingAdjust: function(t) {
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
		},
		_setDate: function(t, e, i) {
			var s = !e,
				n = t.selectedMonth,
				o = t.selectedYear,
				a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
		},
		_getDate: function(t) {
			var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return e
		},
		_attachHandlers: function(e) {
			var i = this._get(e, "stepMonths"),
				s = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function() {
				var e = {
					prev: function() {
						t.datepicker._adjustDate(s, -i, "M")
					},
					next: function() {
						t.datepicker._adjustDate(s, +i, "M")
					},
					hide: function() {
						t.datepicker._hideDatepicker()
					},
					today: function() {
						t.datepicker._gotoToday(s)
					},
					selectDay: function() {
						return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function() {
						return t.datepicker._selectMonthYear(s, this, "M"), !1
					},
					selectYear: function() {
						return t.datepicker._selectMonthYear(s, this, "Y"), !1
					}
				};
				t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(t) {
			var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
				B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
				Y = this._get(t, "isRTL"),
				j = this._get(t, "showButtonPanel"),
				q = this._get(t, "hideIfNoPrevNext"),
				K = this._get(t, "navigationAsDateFormat"),
				U = this._getNumberOfMonths(t),
				V = this._get(t, "showCurrentAtPos"),
				$ = this._get(t, "stepMonths"),
				X = 1 !== U[0] || 1 !== U[1],
				G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
				Q = this._getMinMaxDate(t, "min"),
				J = this._getMinMaxDate(t, "max"),
				Z = t.drawMonth - V,
				te = t.drawYear;
			if (0 > Z && (Z += 12, te--), J)
				for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
			for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
				for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
					if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
						if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
							case 0:
								T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
								break;
							case U[1] - 1:
								T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
								break;
							default:
								T += " ui-datepicker-group-middle", I = ""
						}
						T += "'>"
					}
					for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
					for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
						for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
						T += W + "</tr>"
					}
					Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T
				}
				y += x
			}
			return y += l, t._keyEvent = !1, y
		},
		_generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
			var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
				_ = this._get(t, "changeYear"),
				v = this._get(t, "showMonthAfterYear"),
				b = "<div class='ui-datepicker-title'>",
				y = "";
			if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
			else {
				for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
				y += "</select>"
			}
			if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml)
				if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
				else {
					for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
							var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
							return isNaN(e) ? d : e
						}, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
					t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
				} return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>"
		},
		_adjustInstDate: function(t, e, i) {
			var s = t.selectedYear + ("Y" === i ? e : 0),
				n = t.selectedMonth + ("M" === i ? e : 0),
				o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
				a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
			t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
		},
		_restrictMinMax: function(t, e) {
			var i = this._getMinMaxDate(t, "min"),
				s = this._getMinMaxDate(t, "max"),
				n = i && i > e ? i : e;
			return s && n > s ? s : n
		},
		_notifyChange: function(t) {
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function(t) {
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate: function(t, e) {
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth: function(t, e) {
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function(t, e) {
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth: function(t, e, i, s) {
			var n = this._getNumberOfMonths(t),
				o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
			return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
		},
		_isInRange: function(t, e) {
			var i, s, n = this._getMinMaxDate(t, "min"),
				o = this._getMinMaxDate(t, "max"),
				a = null,
				r = null,
				h = this._get(t, "yearRange");
			return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
		},
		_getFormatConfig: function(t) {
			var e = this._get(t, "shortYearCutoff");
			return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
				shortYearCutoff: e,
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function(t, e, i, s) {
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
		}
	}), t.fn.datepicker = function(e) {
		if (!this.length) return this;
		t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
		}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
	}, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
	var _ = !1;
	t(document).on("mouseup", function() {
		_ = !1
	}), t.widget("ui.mouse", {
		version: "1.12.1",
		options: {
			cancel: "input, textarea, button, select, option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var e = this;
			this.element.on("mousedown." + this.widgetName, function(t) {
				return e._mouseDown(t)
			}).on("click." + this.widgetName, function(i) {
				return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(e) {
			if (!_) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
				var i = this,
					s = 1 === e.which,
					n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
				return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					i.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
					return i._mouseMove(t)
				}, this._mouseUpDelegate = function(t) {
					return i._mouseUp(t)
				}, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0
			}
		},
		_mouseMove: function(e) {
			if (this._mouseMoved) {
				if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
				if (!e.which)
					if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
					else if (!this.ignoreMissingWhich) return this._mouseUp(e)
			}
			return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp: function(e) {
			this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault()
		},
		_mouseDistanceMet: function(t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return !0
		}
	}), t.ui.plugin = {
		add: function(e, i, s) {
			var n, o = t.ui[e].prototype;
			for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
		},
		call: function(t, e, i, s) {
			var n, o = t.plugins[e];
			if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
				for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
		}
	}, t.ui.safeBlur = function(e) {
		e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
	}, t.widget("ui.draggable", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			"original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
		},
		_setOption: function(t, e) {
			this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
		},
		_destroy: function() {
			return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0)
		},
		_mouseCapture: function(e) {
			var i = this.options;
			return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
		},
		_blockFrames: function(e) {
			this.iframeBlocks = this.document.find(e).map(function() {
				var e = t(this);
				return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_blurActiveElement: function(e) {
			var i = t.ui.safeActiveElement(this.document[0]),
				s = t(e.target);
			s.closest(i).length || t.ui.safeBlur(i)
		},
		_mouseStart: function(e) {
			var i = this.options;
			return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
				return "fixed" === t(this).css("position")
			}).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
		},
		_refreshOffsets: function(t) {
			this.offset = {
				top: this.positionAbs.top - this.margins.top,
				left: this.positionAbs.left - this.margins.left,
				scroll: !1,
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}, this.offset.click = {
				left: t.pageX - this.offset.left,
				top: t.pageY - this.offset.top
			}
		},
		_mouseDrag: function(e, i) {
			if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
				this.position = s.position
			}
			return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
		},
		_mouseStop: function(e) {
			var i = this,
				s = !1;
			return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				i._trigger("stop", e) !== !1 && i._clear()
			}) : this._trigger("stop", e) !== !1 && this._clear(), !1
		},
		_mouseUp: function(e) {
			return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
				target: this.element[0]
			})) : this._clear(), this
		},
		_getHandle: function(e) {
			return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_setHandleClassName: function() {
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
		},
		_removeHandleClassName: function() {
			this._removeClass(this.handleElement, "ui-draggable-handle")
		},
		_createHelper: function(e) {
			var i = this.options,
				s = t.isFunction(i.helper),
				n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
		},
		_setPositionRelative: function() {
			/^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
		},
		_adjustOffsetFromHelper: function(e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_isRootNode: function(t) {
			return /(html|body)/i.test(t.tagName) || t === this.document[0]
		},
		_getParentOffset: function() {
			var e = this.offsetParent.offset(),
				i = this.document[0];
			return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var t = this.element.position(),
				e = this._isRootNode(this.scrollParent[0]);
			return {
				top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
				left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var e, i, s, n = this.options,
				o = this.document[0];
			return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
		},
		_convertPositionTo: function(t, e) {
			e || (e = this.position);
			var i = "absolute" === t ? 1 : -1,
				s = this._isRootNode(this.scrollParent[0]);
			return {
				top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
				left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
			}
		},
		_generatePosition: function(t, e) {
			var i, s, n, o, a = this.options,
				r = this._isRootNode(this.scrollParent[0]),
				h = t.pageX,
				l = t.pageY;
			return r && this.offset.scroll || (this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			}), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
				top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
				left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
			}
		},
		_clear: function() {
			this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
		},
		_trigger: function(e, i, s) {
			return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), t.ui.plugin.add("draggable", "connectToSortable", {
		start: function(e, i, s) {
			var n = t.extend({}, i, {
				item: s.element
			});
			s.sortables = [], t(s.options.connectToSortable).each(function() {
				var i = t(this).sortable("instance");
				i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
			})
		},
		stop: function(e, i, s) {
			var n = t.extend({}, i, {
				item: s.element
			});
			s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
				var t = this;
				t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
					position: t.placeholder.css("position"),
					top: t.placeholder.css("top"),
					left: t.placeholder.css("left")
				}, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
			})
		},
		drag: function(e, i, s) {
			t.each(s.sortables, function() {
				var n = !1,
					o = this;
				o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
					return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
				})), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
					return i.helper[0]
				}, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
					this.refreshPositions()
				}), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
					this.refreshPositions()
				}))
			})
		}
	}), t.ui.plugin.add("draggable", "cursor", {
		start: function(e, i, s) {
			var n = t("body"),
				o = s.options;
			n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
		},
		stop: function(e, i, s) {
			var n = s.options;
			n._cursor && t("body").css("cursor", n._cursor)
		}
	}), t.ui.plugin.add("draggable", "opacity", {
		start: function(e, i, s) {
			var n = t(i.helper),
				o = s.options;
			n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
		},
		stop: function(e, i, s) {
			var n = s.options;
			n._opacity && t(i.helper).css("opacity", n._opacity)
		}
	}), t.ui.plugin.add("draggable", "scroll", {
		start: function(t, e, i) {
			i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
		},
		drag: function(e, i, s) {
			var n = s.options,
				o = !1,
				a = s.scrollParentNotHidden[0],
				r = s.document[0];
			a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
		}
	}), t.ui.plugin.add("draggable", "snap", {
		start: function(e, i, s) {
			var n = s.options;
			s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
				var e = t(this),
					i = e.offset();
				this !== s.element[0] && s.snapElements.push({
					item: this,
					width: e.outerWidth(),
					height: e.outerHeight(),
					top: i.top,
					left: i.left
				})
			})
		},
		drag: function(e, i, s) {
			var n, o, a, r, h, l, c, u, d, p, f = s.options,
				g = f.snapTolerance,
				m = i.offset.left,
				_ = m + s.helperProportions.width,
				v = i.offset.top,
				b = v + s.helperProportions.height;
			for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
				snapItem: s.snapElements[d].item
			})), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
				top: c - s.helperProportions.height,
				left: 0
			}).top), o && (i.position.top = s._convertPositionTo("relative", {
				top: u,
				left: 0
			}).top), a && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: h - s.helperProportions.width
			}).left), r && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: l
			}).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
				top: c,
				left: 0
			}).top), o && (i.position.top = s._convertPositionTo("relative", {
				top: u - s.helperProportions.height,
				left: 0
			}).top), a && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: h
			}).left), r && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: l - s.helperProportions.width
			}).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
				snapItem: s.snapElements[d].item
			})), s.snapElements[d].snapping = n || o || a || r || p)
		}
	}), t.ui.plugin.add("draggable", "stack", {
		start: function(e, i, s) {
			var n, o = s.options,
				a = t.makeArray(t(o.stack)).sort(function(e, i) {
					return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
				});
			a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
				t(this).css("zIndex", n + e)
			}), this.css("zIndex", n + a.length))
		}
	}), t.ui.plugin.add("draggable", "zIndex", {
		start: function(e, i, s) {
			var n = t(i.helper),
				o = s.options;
			n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
		},
		stop: function(e, i, s) {
			var n = s.options;
			n._zIndex && t(i.helper).css("zIndex", n._zIndex)
		}
	}), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			classes: {
				"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
			},
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_num: function(t) {
			return parseFloat(t) || 0
		},
		_isNumber: function(t) {
			return !isNaN(parseFloat(t))
		},
		_hasScroll: function(e, i) {
			if ("hidden" === t(e).css("overflow")) return !1;
			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
				n = !1;
			return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
		},
		_create: function() {
			var e, i = this.options,
				s = this;
			this._addClass("ui-resizable"), t.extend(this, {
				_aspectRatio: !!i.aspectRatio,
				aspectRatio: i.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
			}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom"),
				marginLeft: this.originalElement.css("marginLeft")
			}, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
				i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
			}).on("mouseleave", function() {
				i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
			}), this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var e, i = function(e) {
				t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
				position: e.css("position"),
				width: e.outerWidth(),
				height: e.outerHeight(),
				top: e.css("top"),
				left: e.css("left")
			}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
		},
		_setOption: function(t, e) {
			switch (this._super(t, e), t) {
				case "handles":
					this._removeHandles(), this._setupHandles();
					break;
				default:
			}
		},
		_setupHandles: function() {
			var e, i, s, n, o, a = this.options,
				r = this;
			if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} : "e,s,se"), this._handles = t(), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
					zIndex: a.zIndex
				}), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
			this._renderAxis = function(e) {
				var i, s, n, o;
				e = e || this.element;
				for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
					mousedown: r._mouseDown
				})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
			}, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
				r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
			}), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
		},
		_removeHandles: function() {
			this._handles.remove()
		},
		_mouseCapture: function(e) {
			var i, s, n = !1;
			for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
			return !this.options.disabled && n
		},
		_mouseStart: function(e) {
			var i, s, n, o = this.options,
				a = this.element;
			return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: i,
				top: s
			}, this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: a.width(),
				height: a.height()
			}, this.originalSize = this._helper ? {
				width: a.outerWidth(),
				height: a.outerHeight()
			} : {
				width: a.width(),
				height: a.height()
			}, this.sizeDiff = {
				width: a.outerWidth() - a.width(),
				height: a.outerHeight() - a.height()
			}, this.originalPosition = {
				left: i,
				top: s
			}, this.originalMousePosition = {
				left: e.pageX,
				top: e.pageY
			}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
		},
		_mouseDrag: function(e) {
			var i, s, n = this.originalMousePosition,
				o = this.axis,
				a = e.pageX - n.left || 0,
				r = e.pageY - n.top || 0,
				h = this._change[o];
			return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
		},
		_mouseStop: function(e) {
			this.resizing = !1;
			var i, s, n, o, a, r, h, l = this.options,
				c = this;
			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
				width: c.helper.width() - o,
				height: c.helper.height() - n
			}, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
				top: h,
				left: r
			})), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
		},
		_updatePrevProperties: function() {
			this.prevPosition = {
				top: this.position.top,
				left: this.position.left
			}, this.prevSize = {
				width: this.size.width,
				height: this.size.height
			}
		},
		_applyChanges: function() {
			var t = {};
			return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
		},
		_updateVirtualBoundaries: function(t) {
			var e, i, s, n, o, a = this.options;
			o = {
				minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
				maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
				minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
				maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
			}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
		},
		_updateCache: function(t) {
			this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
		},
		_updateRatio: function(t) {
			var e = this.position,
				i = this.size,
				s = this.axis;
			return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
		},
		_respectSize: function(t) {
			var e = this._vBoundaries,
				i = this.axis,
				s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
				n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
				o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
				a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
				r = this.originalPosition.left + this.originalSize.width,
				h = this.originalPosition.top + this.originalSize.height,
				l = /sw|nw|w/.test(i),
				c = /nw|ne|n/.test(i);
			return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
		},
		_getPaddingPlusBorderDimensions: function(t) {
			for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
			return {
				height: i[0] + i[2],
				width: i[1] + i[3]
			}
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length)
				for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
					height: i.height() - this.outerDimensions.height || 0,
					width: i.width() - this.outerDimensions.width || 0
				})
		},
		_renderProxy: function() {
			var e = this.element,
				i = this.options;
			this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++i.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function(t, e) {
				return {
					width: this.originalSize.width + e
				}
			},
			w: function(t, e) {
				var i = this.originalSize,
					s = this.originalPosition;
				return {
					left: s.left + e,
					width: i.width - e
				}
			},
			n: function(t, e, i) {
				var s = this.originalSize,
					n = this.originalPosition;
				return {
					top: n.top + i,
					height: s.height - i
				}
			},
			s: function(t, e, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function(e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			sw: function(e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			},
			ne: function(e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			nw: function(e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			}
		},
		_propagate: function(e, i) {
			t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), t.ui.plugin.add("resizable", "animate", {
		stop: function(e) {
			var i = t(this).resizable("instance"),
				s = i.options,
				n = i._proportionallyResizeElements,
				o = n.length && /textarea/i.test(n[0].nodeName),
				a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
				r = o ? 0 : i.sizeDiff.width,
				h = {
					width: i.size.width - r,
					height: i.size.height - a
				},
				l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
				c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(t.extend(h, c && l ? {
				top: c,
				left: l
			} : {}), {
				duration: s.animateDuration,
				easing: s.animateEasing,
				step: function() {
					var s = {
						width: parseFloat(i.element.css("width")),
						height: parseFloat(i.element.css("height")),
						top: parseFloat(i.element.css("top")),
						left: parseFloat(i.element.css("left"))
					};
					n && n.length && t(n[0]).css({
						width: s.width,
						height: s.height
					}), i._updateCache(s), i._propagate("resize", e)
				}
			})
		}
	}), t.ui.plugin.add("resizable", "containment", {
		start: function() {
			var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
				l = h.options,
				c = h.element,
				u = l.containment,
				d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
			d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
				left: 0,
				top: 0
			}, h.containerPosition = {
				left: 0,
				top: 0
			}, h.parentData = {
				element: t(document),
				left: 0,
				top: 0,
				width: t(document).width(),
				height: t(document).height() || document.body.parentNode.scrollHeight
			}) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
				i[t] = h._num(e.css("padding" + s))
			}), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
				height: e.innerHeight() - i[3],
				width: e.innerWidth() - i[1]
			}, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
				element: d,
				left: s.left,
				top: s.top,
				width: a,
				height: r
			}))
		},
		resize: function(e) {
			var i, s, n, o, a = t(this).resizable("instance"),
				r = a.options,
				h = a.containerOffset,
				l = a.position,
				c = a._aspectRatio || e.shiftKey,
				u = {
					top: 0,
					left: 0
				},
				d = a.containerElement,
				p = !0;
			d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
		},
		stop: function() {
			var e = t(this).resizable("instance"),
				i = e.options,
				s = e.containerOffset,
				n = e.containerPosition,
				o = e.containerElement,
				a = t(e.helper),
				r = a.offset(),
				h = a.outerWidth() - e.sizeDiff.width,
				l = a.outerHeight() - e.sizeDiff.height;
			e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			}), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			})
		}
	}), t.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var e = t(this).resizable("instance"),
				i = e.options;
			t(i.alsoResize).each(function() {
				var e = t(this);
				e.data("ui-resizable-alsoresize", {
					width: parseFloat(e.width()),
					height: parseFloat(e.height()),
					left: parseFloat(e.css("left")),
					top: parseFloat(e.css("top"))
				})
			})
		},
		resize: function(e, i) {
			var s = t(this).resizable("instance"),
				n = s.options,
				o = s.originalSize,
				a = s.originalPosition,
				r = {
					height: s.size.height - o.height || 0,
					width: s.size.width - o.width || 0,
					top: s.position.top - a.top || 0,
					left: s.position.left - a.left || 0
				};
			t(n.alsoResize).each(function() {
				var e = t(this),
					s = t(this).data("ui-resizable-alsoresize"),
					n = {},
					o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
				t.each(o, function(t, e) {
					var i = (s[e] || 0) + (r[e] || 0);
					i && i >= 0 && (n[e] = i || null)
				}), e.css(n)
			})
		},
		stop: function() {
			t(this).removeData("ui-resizable-alsoresize")
		}
	}), t.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var e = t(this).resizable("instance"),
				i = e.size;
			e.ghost = e.originalElement.clone(), e.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: i.height,
				width: i.width,
				margin: 0,
				left: 0,
				top: 0
			}), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
		},
		resize: function() {
			var e = t(this).resizable("instance");
			e.ghost && e.ghost.css({
				position: "relative",
				height: e.size.height,
				width: e.size.width
			})
		},
		stop: function() {
			var e = t(this).resizable("instance");
			e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
		}
	}), t.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var e, i = t(this).resizable("instance"),
				s = i.options,
				n = i.size,
				o = i.originalSize,
				a = i.originalPosition,
				r = i.axis,
				h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
				l = h[0] || 1,
				c = h[1] || 1,
				u = Math.round((n.width - o.width) / l) * l,
				d = Math.round((n.height - o.height) / c) * c,
				p = o.width + u,
				f = o.height + d,
				g = s.maxWidth && p > s.maxWidth,
				m = s.maxHeight && f > s.maxHeight,
				_ = s.minWidth && s.minWidth > p,
				v = s.minHeight && s.minHeight > f;
			s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
		}
	}), t.ui.resizable, t.widget("ui.dialog", {
		version: "1.12.1",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			classes: {
				"ui-dialog": "ui-corner-all",
				"ui-dialog-titlebar": "ui-corner-all"
			},
			closeOnEscape: !0,
			closeText: "Close",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function(e) {
					var i = t(this).css(e).offset().top;
					0 > i && t(this).css("top", e.top - i)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		sizeRelatedOptions: {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		resizableRelatedOptions: {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		},
		_create: function() {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
		},
		_destroy: function() {
			var t, e = this.originalPosition;
			this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
		},
		widget: function() {
			return this.uiDialog
		},
		disable: t.noop,
		enable: t.noop,
		close: function(e) {
			var i = this;
			this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
				i._trigger("close", e)
			}))
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function() {
			this._moveToTop()
		},
		_moveToTop: function(e, i) {
			var s = !1,
				n = this.uiDialog.siblings(".ui-front:visible").map(function() {
					return +t(this).css("z-index")
				}).get(),
				o = Math.max.apply(null, n);
			return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
		},
		open: function() {
			var e = this;
			return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
				e._focusTabbable(), e._trigger("focus")
			}), this._makeFocusTarget(), this._trigger("open"), void 0)
		},
		_focusTabbable: function() {
			var t = this._focusedElement;
			t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
		},
		_keepFocus: function(e) {
			function i() {
				var e = t.ui.safeActiveElement(this.document[0]),
					i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
				i || this._focusTabbable()
			}
			e.preventDefault(), i.call(this), this._delay(i)
		},
		_createWrapper: function() {
			this.uiDialog = t("<div>").hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
				keydown: function(e) {
					if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;
					if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
						var i = this.uiDialog.find(":tabbable"),
							s = i.filter(":first"),
							n = i.filter(":last");
						e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
							n.trigger("focus")
						}), e.preventDefault()) : (this._delay(function() {
							s.trigger("focus")
						}), e.preventDefault())
					}
				},
				mousedown: function(t) {
					this._moveToTop(t) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function() {
			var e;
			this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
				mousedown: function(e) {
					t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
				}
			}), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
				label: t("<a>").text(this.options.closeText).html(),
				icon: "ui-icon-closethick",
				showLabel: !1
			}).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
				click: function(t) {
					t.preventDefault(), this.close(t)
				}
			}), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
				"aria-labelledby": e.attr("id")
			})
		},
		_title: function(t) {
			this.options.title ? t.text(this.options.title) : t.html("&#160;")
		},
		_createButtonPane: function() {
			this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
		},
		_createButtons: function() {
			var e = this,
				i = this.options.buttons;
			return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function(i, s) {
				var n, o;
				s = t.isFunction(s) ? {
					click: s,
					text: i
				} : s, s = t.extend({
					type: "button"
				}, s), n = s.click, o = {
					icon: s.icon,
					iconPosition: s.iconPosition,
					showLabel: s.showLabel,
					icons: s.icons,
					text: s.text
				}, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
					n.apply(e.element[0], arguments)
				})
			}), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
		},
		_makeDraggable: function() {
			function e(t) {
				return {
					position: t.position,
					offset: t.offset
				}
			}
			var i = this,
				s = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(s, n) {
					i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
				},
				drag: function(t, s) {
					i._trigger("drag", t, e(s))
				},
				stop: function(n, o) {
					var a = o.offset.left - i.document.scrollLeft(),
						r = o.offset.top - i.document.scrollTop();
					s.position = {
						my: "left top",
						at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
						of: i.window
					}, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
				}
			})
		},
		_makeResizable: function() {
			function e(t) {
				return {
					originalPosition: t.originalPosition,
					originalSize: t.originalSize,
					position: t.position,
					size: t.size
				}
			}
			var i = this,
				s = this.options,
				n = s.resizable,
				o = this.uiDialog.css("position"),
				a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: s.maxWidth,
				maxHeight: s.maxHeight,
				minWidth: s.minWidth,
				minHeight: this._minHeight(),
				handles: a,
				start: function(s, n) {
					i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
				},
				resize: function(t, s) {
					i._trigger("resize", t, e(s))
				},
				stop: function(n, o) {
					var a = i.uiDialog.offset(),
						r = a.left - i.document.scrollLeft(),
						h = a.top - i.document.scrollTop();
					s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
						my: "left top",
						at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
						of: i.window
					}, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
				}
			}).css("position", o)
		},
		_trackFocus: function() {
			this._on(this.widget(), {
				focusin: function(e) {
					this._makeFocusTarget(), this._focusedElement = t(e.target)
				}
			})
		},
		_makeFocusTarget: function() {
			this._untrackInstance(), this._trackingInstances().unshift(this)
		},
		_untrackInstance: function() {
			var e = this._trackingInstances(),
				i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
		},
		_trackingInstances: function() {
			var t = this.document.data("ui-dialog-instances");
			return t || (t = [], this.document.data("ui-dialog-instances", t)), t
		},
		_minHeight: function() {
			var t = this.options;
			return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
		},
		_position: function() {
			var t = this.uiDialog.is(":visible");
			t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
		},
		_setOptions: function(e) {
			var i = this,
				s = !1,
				n = {};
			t.each(e, function(t, e) {
				i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
			}), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
		},
		_setOption: function(e, i) {
			var s, n, o = this.uiDialog;
			"disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
				label: t("<a>").text("" + this.options.closeText).html()
			}), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function() {
			var t, e, i, s = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
				height: "auto",
				width: s.width
			}).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
				minHeight: e,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function() {
			this.iframeBlocks = this.document.find("iframe").map(function() {
				var e = t(this);
				return t("<div>").css({
					position: "absolute",
					width: e.outerWidth(),
					height: e.outerHeight()
				}).appendTo(e.parent()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function(e) {
			return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
		},
		_createOverlay: function() {
			if (this.options.modal) {
				var e = !0;
				this._delay(function() {
					e = !1
				}), this.document.data("ui-dialog-overlays") || this._on(this.document, {
					focusin: function(t) {
						e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
					}
				}), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
					mousedown: "_keepFocus"
				}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
			}
		},
		_destroyOverlay: function() {
			if (this.options.modal && this.overlay) {
				var t = this.document.data("ui-dialog-overlays") - 1;
				t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
			}
		}
	}), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
		options: {
			dialogClass: ""
		},
		_createWrapper: function() {
			this._super(), this.uiDialog.addClass(this.options.dialogClass)
		},
		_setOption: function(t, e) {
			"dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
		}
	}), t.ui.dialog, t.widget("ui.droppable", {
		version: "1.12.1",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			addClasses: !0,
			greedy: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function() {
			var e, i = this.options,
				s = i.accept;
			this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
				return t.is(s)
			}, this.proportions = function() {
				return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				}
			}, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
		},
		_addToManager: function(e) {
			t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
		},
		_splice: function(t) {
			for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
		},
		_destroy: function() {
			var e = t.ui.ddmanager.droppables[this.options.scope];
			this._splice(e)
		},
		_setOption: function(e, i) {
			if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
				return t.is(i)
			};
			else if ("scope" === e) {
				var s = t.ui.ddmanager.droppables[this.options.scope];
				this._splice(s), this._addToManager(i)
			}
			this._super(e, i)
		},
		_activate: function(e) {
			var i = t.ui.ddmanager.current;
			this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
		},
		_deactivate: function(e) {
			var i = t.ui.ddmanager.current;
			this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
		},
		_over: function(e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
		},
		_out: function(e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
		},
		_drop: function(e, i) {
			var s = i || t.ui.ddmanager.current,
				n = !1;
			return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
				var i = t(this).droppable("instance");
				return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {
					offset: i.element.offset()
				}), i.options.tolerance, e) ? (n = !0, !1) : void 0
			}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
		},
		ui: function(t) {
			return {
				draggable: t.currentItem || t.element,
				helper: t.helper,
				position: t.position,
				offset: t.positionAbs
			}
		},
		_addHoverClass: function() {
			this._addClass("ui-droppable-hover")
		},
		_removeHoverClass: function() {
			this._removeClass("ui-droppable-hover")
		},
		_addActiveClass: function() {
			this._addClass("ui-droppable-active")
		},
		_removeActiveClass: function() {
			this._removeClass("ui-droppable-active")
		}
	});
	var v = t.ui.intersect = function() {
		function t(t, e, i) {
			return t >= e && e + i > t
		}
		return function(e, i, s, n) {
			if (!i.offset) return !1;
			var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
				a = (e.positionAbs || e.position.absolute).top + e.margins.top,
				r = o + e.helperProportions.width,
				h = a + e.helperProportions.height,
				l = i.offset.left,
				c = i.offset.top,
				u = l + i.proportions().width,
				d = c + i.proportions().height;
			switch (s) {
				case "fit":
					return o >= l && u >= r && a >= c && d >= h;
				case "intersect":
					return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
				case "pointer":
					return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
				case "touch":
					return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
				default:
					return !1
			}
		}
	}();
	t.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(e, i) {
			var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
				a = i ? i.type : null,
				r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
			t: for (s = 0; o.length > s; s++)
				if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
					for (n = 0; r.length > n; n++)
						if (r[n] === o[s].element[0]) {
							o[s].proportions().height = 0;
							continue t
						} o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
						width: o[s].element[0].offsetWidth,
						height: o[s].element[0].offsetHeight
					}))
				}
		},
		drop: function(e, i) {
			var s = !1;
			return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
				this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}), s
		},
		dragStart: function(e, i) {
			e.element.parentsUntil("body").on("scroll.droppable", function() {
				e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
			})
		},
		drag: function(e, i) {
			e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var s, n, o, a = v(e, this, this.options.tolerance, i),
						r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
					r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
						return t(this).droppable("instance").options.scope === n
					}), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
				}
			})
		},
		dragStop: function(e, i) {
			e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
		}
	}, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
		options: {
			hoverClass: !1,
			activeClass: !1
		},
		_addActiveClass: function() {
			this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
		},
		_removeActiveClass: function() {
			this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
		},
		_addHoverClass: function() {
			this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
		},
		_removeHoverClass: function() {
			this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
		}
	}), t.ui.droppable, t.widget("ui.progressbar", {
		version: "1.12.1",
		options: {
			classes: {
				"ui-progressbar": "ui-corner-all",
				"ui-progressbar-value": "ui-corner-left",
				"ui-progressbar-complete": "ui-corner-right"
			},
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function() {
			this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
				role: "progressbar",
				"aria-valuemin": this.min
			}), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
		},
		_destroy: function() {
			this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
		},
		value: function(t) {
			return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0)
		},
		_constrainedValue: function(t) {
			return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions: function(t) {
			var e = t.value;
			delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
		},
		_setOption: function(t, e) {
			"max" === t && (e = Math.max(this.min, e)), this._super(t, e)
		},
		_setOptionDisabled: function(t) {
			this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		_percentage: function() {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function() {
			var e = this.options.value,
				i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": e
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
		}
	}), t.widget("ui.selectable", t.ui.mouse, {
		version: "1.12.1",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function() {
			var e = this;
			this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
				e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
					var i = t(this),
						s = i.offset(),
						n = {
							left: s.left - e.elementPos.left,
							top: s.top - e.elementPos.top
						};
					t.data(this, "selectable-item", {
						element: this,
						$element: i,
						left: n.left,
						top: n.top,
						right: n.left + i.outerWidth(),
						bottom: n.top + i.outerHeight(),
						startselected: !1,
						selected: i.hasClass("ui-selected"),
						selecting: i.hasClass("ui-selecting"),
						unselecting: i.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
		},
		_destroy: function() {
			this.selectees.removeData("selectable-item"), this._mouseDestroy()
		},
		_mouseStart: function(e) {
			var i = this,
				s = this.options;
			this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
				left: e.pageX,
				top: e.pageY,
				width: 0,
				height: 0
			}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
				var s = t.data(this, "selectable-item");
				s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
					unselecting: s.element
				}))
			}), t(e.target).parents().addBack().each(function() {
				var s, n = t.data(this, "selectable-item");
				return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
					selecting: n.element
				}) : i._trigger("unselecting", e, {
					unselecting: n.element
				}), !1) : void 0
			}))
		},
		_mouseDrag: function(e) {
			if (this.dragged = !0, !this.options.disabled) {
				var i, s = this,
					n = this.options,
					o = this.opos[0],
					a = this.opos[1],
					r = e.pageX,
					h = e.pageY;
				return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
					left: o,
					top: a,
					width: r - o,
					height: h - a
				}), this.selectees.each(function() {
					var i = t.data(this, "selectable-item"),
						l = !1,
						c = {};
					i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
						selecting: i.element
					}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
						unselecting: i.element
					}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
						unselecting: i.element
					})))))
				}), !1
			}
		},
		_mouseStop: function(e) {
			var i = this;
			return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
				var s = t.data(this, "selectable-item");
				i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
					unselected: s.element
				})
			}), t(".ui-selecting", this.element[0]).each(function() {
				var s = t.data(this, "selectable-item");
				i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
					selected: s.element
				})
			}), this._trigger("stop", e), this.helper.remove(), !1
		}
	}), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
		version: "1.12.1",
		defaultElement: "<select>",
		options: {
			appendTo: null,
			classes: {
				"ui-selectmenu-button-open": "ui-corner-top",
				"ui-selectmenu-button-closed": "ui-corner-all"
			},
			disabled: null,
			icons: {
				button: "ui-icon-triangle-1-s"
			},
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			width: !1,
			change: null,
			close: null,
			focus: null,
			open: null,
			select: null
		},
		_create: function() {
			var e = this.element.uniqueId().attr("id");
			this.ids = {
				element: e,
				button: e + "-button",
				menu: e + "-menu"
			}, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
		},
		_drawButton: function() {
			var e, i = this,
				s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
			this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
				click: function(t) {
					this.button.focus(), t.preventDefault()
				}
			}), this.element.hide(), this.button = t("<span>", {
				tabindex: this.options.disabled ? -1 : 0,
				id: this.ids.button,
				role: "combobox",
				"aria-expanded": "false",
				"aria-autocomplete": "list",
				"aria-owns": this.ids.menu,
				"aria-haspopup": "true",
				title: this.element.attr("title")
			}).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
				i._rendered || i._refreshMenu()
			})
		},
		_drawMenu: function() {
			var e = this;
			this.menu = t("<ul>", {
				"aria-hidden": "true",
				"aria-labelledby": this.ids.button,
				id: this.ids.menu
			}), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
				classes: {
					"ui-menu": "ui-corner-bottom"
				},
				role: "listbox",
				select: function(t, i) {
					t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
				},
				focus: function(t, i) {
					var s = i.item.data("ui-selectmenu-item");
					null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
						item: s
					}), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
				}
			}).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
				return !1
			}, this.menuInstance._isDivider = function() {
				return !1
			}
		},
		refresh: function() {
			this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
		},
		_refreshMenu: function() {
			var t, e = this.element.find("option");
			this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
		},
		open: function(t) {
			this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
		},
		_position: function() {
			this.menuWrap.position(t.extend({
				of: this.button
			}, this.options.position))
		},
		close: function(t) {
			this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
		},
		widget: function() {
			return this.button
		},
		menuWidget: function() {
			return this.menu
		},
		_renderButtonItem: function(e) {
			var i = t("<span>");
			return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
		},
		_renderMenu: function(e, i) {
			var s = this,
				n = "";
			t.each(i, function(i, o) {
				var a;
				o.optgroup !== n && (a = t("<li>", {
					text: o.optgroup
				}), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
			})
		},
		_renderItemData: function(t, e) {
			return this._renderItem(t, e).data("ui-selectmenu-item", e)
		},
		_renderItem: function(e, i) {
			var s = t("<li>"),
				n = t("<div>", {
					title: i.element.attr("title")
				});
			return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
		},
		_setText: function(t, e) {
			e ? t.text(e) : t.html("&#160;")
		},
		_move: function(t, e) {
			var i, s, n = ".ui-menu-item";
			this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
		},
		_getSelectedItem: function() {
			return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
		},
		_toggle: function(t) {
			this[this.isOpen ? "close" : "open"](t)
		},
		_setSelection: function() {
			var t;
			this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
		},
		_documentClick: {
			mousedown: function(e) {
				this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
			}
		},
		_buttonEvents: {
			mousedown: function() {
				var t;
				window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
			},
			click: function(t) {
				this._setSelection(), this._toggle(t)
			},
			keydown: function(e) {
				var i = !0;
				switch (e.keyCode) {
					case t.ui.keyCode.TAB:
					case t.ui.keyCode.ESCAPE:
						this.close(e), i = !1;
						break;
					case t.ui.keyCode.ENTER:
						this.isOpen && this._selectFocusedItem(e);
						break;
					case t.ui.keyCode.UP:
						e.altKey ? this._toggle(e) : this._move("prev", e);
						break;
					case t.ui.keyCode.DOWN:
						e.altKey ? this._toggle(e) : this._move("next", e);
						break;
					case t.ui.keyCode.SPACE:
						this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
						break;
					case t.ui.keyCode.LEFT:
						this._move("prev", e);
						break;
					case t.ui.keyCode.RIGHT:
						this._move("next", e);
						break;
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.PAGE_UP:
						this._move("first", e);
						break;
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_DOWN:
						this._move("last", e);
						break;
					default:
						this.menu.trigger(e), i = !1
				}
				i && e.preventDefault()
			}
		},
		_selectFocusedItem: function(t) {
			var e = this.menuItems.eq(this.focusIndex).parent("li");
			e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
		},
		_select: function(t, e) {
			var i = this.element[0].selectedIndex;
			this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
				item: t
			}), t.index !== i && this._trigger("change", e, {
				item: t
			}), this.close(e)
		},
		_setAria: function(t) {
			var e = this.menuItems.eq(t.index).attr("id");
			this.button.attr({
				"aria-labelledby": e,
				"aria-activedescendant": e
			}), this.menu.attr("aria-activedescendant", e)
		},
		_setOption: function(t, e) {
			if ("icons" === t) {
				var i = this.button.find("span.ui-icon");
				this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
			}
			this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
		},
		_setOptionDisabled: function(t) {
			this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
		},
		_toggleAttr: function() {
			this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
		},
		_resizeButton: function() {
			var t = this.options.width;
			return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0)
		},
		_resizeMenu: function() {
			this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
		},
		_getCreateOptions: function() {
			var t = this._super();
			return t.disabled = this.element.prop("disabled"), t
		},
		_parseOptions: function(e) {
			var i = this,
				s = [];
			e.each(function(e, n) {
				s.push(i._parseOption(t(n), e))
			}), this.items = s
		},
		_parseOption: function(t, e) {
			var i = t.parent("optgroup");
			return {
				element: t,
				index: e,
				value: t.val(),
				label: t.text(),
				optgroup: i.attr("label") || "",
				disabled: i.prop("disabled") || t.prop("disabled")
			}
		},
		_destroy: function() {
			this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
		}
	}]), t.widget("ui.slider", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			classes: {
				"ui-slider": "ui-corner-all",
				"ui-slider-handle": "ui-corner-all",
				"ui-slider-range": "ui-corner-all ui-widget-header"
			},
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function() {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
		},
		_refresh: function() {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function() {
			var e, i, s = this.options,
				n = this.element.find(".ui-slider-handle"),
				o = "<span tabindex='0'></span>",
				a = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
			this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
				t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
			})
		},
		_createRange: function() {
			var e = this.options;
			e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
				left: "",
				bottom: ""
			})) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function() {
			this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
		},
		_destroy: function() {
			this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
		},
		_mouseCapture: function(e) {
			var i, s, n, o, a, r, h, l, c = this,
				u = this.options;
			return u.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: e.pageX,
				y: e.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
				var i = Math.abs(s - c.values(e));
				(n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
			}), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
				left: 0,
				top: 0
			} : {
				left: e.pageX - h.left - o.width() / 2,
				top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
		},
		_mouseStart: function() {
			return !0
		},
		_mouseDrag: function(t) {
			var e = {
					x: t.pageX,
					y: t.pageY
				},
				i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i), !1
		},
		_mouseStop: function(t) {
			return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function() {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(t) {
			var e, i, s, n, o;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
		},
		_uiHash: function(t, e, i) {
			var s = {
				handle: this.handles[t],
				handleIndex: t,
				value: void 0 !== e ? e : this.value()
			};
			return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
		},
		_hasMultipleValues: function() {
			return this.options.values && this.options.values.length
		},
		_start: function(t, e) {
			return this._trigger("start", t, this._uiHash(e))
		},
		_slide: function(t, e, i) {
			var s, n, o = this.value(),
				a = this.values();
			this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
		},
		_stop: function(t, e) {
			this._trigger("stop", t, this._uiHash(e))
		},
		_change: function(t, e) {
			this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
		},
		value: function(t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
		},
		values: function(e, i) {
			var s, n, o;
			if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
			if (!arguments.length) return this._values();
			if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
			for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
			this._refreshValue()
		},
		_setOption: function(e, i) {
			var s, n = 0;
			switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
				case "orientation":
					this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
					this._animateOff = !1;
					break;
				case "step":
				case "min":
				case "max":
					this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_setOptionDisabled: function(t) {
			this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		_value: function() {
			var t = this.options.value;
			return t = this._trimAlignValue(t)
		},
		_values: function(t) {
			var e, i, s;
			if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
			if (this._hasMultipleValues()) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue: function(t) {
			if (this._valueMin() >= t) return this._valueMin();
			if (t >= this._valueMax()) return this._valueMax();
			var e = this.options.step > 0 ? this.options.step : 1,
				i = (t - this._valueMin()) % e,
				s = t - i;
			return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
		},
		_calculateNewMax: function() {
			var t = this.options.max,
				e = this._valueMin(),
				i = this.options.step,
				s = Math.round((t - e) / i) * i;
			t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
		},
		_precision: function() {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function(t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.max
		},
		_refreshRange: function(t) {
			"vertical" === t && this.range.css({
				width: "",
				left: ""
			}), "horizontal" === t && this.range.css({
				height: "",
				bottom: ""
			})
		},
		_refreshValue: function() {
			var e, i, s, n, o, a = this.options.range,
				r = this.options,
				h = this,
				l = this._animateOff ? !1 : r.animate,
				c = {};
			this._hasMultipleValues() ? this.handles.each(function(s) {
				i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					width: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					height: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), e = i
			}) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: 100 - i + "%"
			}, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: 100 - i + "%"
			}, r.animate))
		},
		_handleEvents: {
			keydown: function(e) {
				var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
				switch (e.keyCode) {
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_UP:
					case t.ui.keyCode.PAGE_DOWN:
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
				}
				switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
					case t.ui.keyCode.HOME:
						n = this._valueMin();
						break;
					case t.ui.keyCode.END:
						n = this._valueMax();
						break;
					case t.ui.keyCode.PAGE_UP:
						n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
						if (s === this._valueMax()) return;
						n = this._trimAlignValue(s + o);
						break;
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (s === this._valueMin()) return;
						n = this._trimAlignValue(s - o)
				}
				this._slide(e, a, n)
			},
			keyup: function(e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
			}
		}
	}), t.widget("ui.sortable", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_isOverAxis: function(t, e, i) {
			return t >= e && e + i > t
		},
		_isFloating: function(t) {
			return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
		},
		_create: function() {
			this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
		},
		_setOption: function(t, e) {
			this._super(t, e), "handle" === t && this._setHandleClassName()
		},
		_setHandleClassName: function() {
			var e = this;
			this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
				e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
			})
		},
		_destroy: function() {
			this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_mouseCapture: function(e, i) {
			var s = null,
				n = !1,
				o = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
				return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
			}), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
				this === e.target && (n = !0)
			}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart: function(e, i, s) {
			var n, o, a = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, t.extend(this.offset, {
					click: {
						left: e.pageX - this.offset.left,
						top: e.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
				for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag: function(e) {
			var i, s, n, o, a = this.options,
				r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
				if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
					if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
					this._rearrange(e, s), this._trigger("change", e, this._uiHash());
					break
				} return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function(e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this,
						n = this.placeholder.offset(),
						o = this.options.axis,
						a = {};
					o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
						s._clear(e)
					})
				} else this._clear(e, i);
				return !1
			}
		},
		cancel: function() {
			if (this.dragging) {
				this._mouseUp(new t.Event("mouseup", {
					target: null
				})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function(e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, t(i).each(function() {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}), !s.length && e.key && s.push(e.key + "="), s.join("&")
		},
		toArray: function(e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, i.each(function() {
				s.push(t(e.item || this).attr(e.attribute || "id") || "")
			}), s
		},
		_intersectsWith: function(t) {
			var e = this.positionAbs.left,
				i = e + this.helperProportions.width,
				s = this.positionAbs.top,
				n = s + this.helperProportions.height,
				o = t.left,
				a = o + t.width,
				r = t.top,
				h = r + t.height,
				l = this.offset.click.top,
				c = this.offset.click.left,
				u = "x" === this.options.axis || s + l > r && h > s + l,
				d = "y" === this.options.axis || e + c > o && a > e + c,
				p = u && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function(t) {
			var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
				o = s && n;
			return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
		},
		_intersectsWithSides: function(t) {
			var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				s = this._getDragVerticalDirection(),
				n = this._getDragHorizontalDirection();
			return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
		},
		_getDragVerticalDirection: function() {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh: function(t) {
			return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
		},
		_connectWith: function() {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function(e) {
			function i() {
				r.push(this)
			}
			var s, n, o, a, r = [],
				h = [],
				l = this._connectWith();
			if (l && e)
				for (s = l.length - 1; s >= 0; s--)
					for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
			for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
			return t(r)
		},
		_removeCurrentsFromItems: function() {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function(t) {
				for (var i = 0; e.length > i; i++)
					if (e[i] === t.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function(e) {
			this.items = [], this.containers = [this];
			var i, s, n, o, a, r, h, l, c = this.items,
				u = [
					[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
						item: this.currentItem
					}) : t(this.options.items, this.element), this]
				],
				d = this._connectWith();
			if (d && this.ready)
				for (i = d.length - 1; i >= 0; i--)
					for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
						item: this.currentItem
					}) : t(o.options.items, o.element), o]), this.containers.push(o));
			for (i = u.length - 1; i >= 0; i--)
				for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
					item: h,
					instance: a,
					width: 0,
					height: 0,
					left: 0,
					top: 0
				})
		},
		refreshPositions: function(e) {
			this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i, s, n, o;
			for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
				for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder: function(e) {
			e = e || this;
			var i, s = e.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
				element: function() {
					var s = e.currentItem[0].nodeName.toLowerCase(),
						n = t("<" + s + ">", e.document[0]);
					return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
				},
				update: function(t, n) {
					(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
				}
			}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
		},
		_createTrPlaceholder: function(e, i) {
			var s = this;
			e.children().each(function() {
				t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
			})
		},
		_contactContainers: function(e) {
			var i, s, n, o, a, r, h, l, c, u, d = null,
				p = null;
			for (i = this.containers.length - 1; i >= 0; i--)
				if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
					if (this._intersectsWith(this.containers[i].containerCache)) {
						if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
						d = this.containers[i], p = i
					} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
			if (d)
				if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
				else {
					for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
					if (!o && !this.options.dropOnEmpty) return;
					if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
					o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
				}
		},
		_createHelper: function(e) {
			var i = this.options,
				s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
		},
		_adjustOffsetFromHelper: function(e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var e, i, s, n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function(e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				o = /(html|body)/i.test(n[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition: function(e) {
			var i, s, n = this.options,
				o = e.pageX,
				a = e.pageY,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function(t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function() {
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear: function(t, e) {
			function i(t, e, i) {
				return function(s) {
					i._trigger(t, s, e._uiHash(e))
				}
			}
			this.reverting = !1;
			var s, n = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
				this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !e && n.push(function(t) {
					this._trigger("receive", t, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
					this._trigger("update", t, this._uiHash())
				}), this !== this.currentContainer && (e || (n.push(function(t) {
					this._trigger("remove", t, this._uiHash())
				}), n.push(function(t) {
					return function(e) {
						t._trigger("receive", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), n.push(function(t) {
					return function(e) {
						t._trigger("update", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
				for (s = 0; n.length > s; s++) n[s].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !this.cancelHelperRemoval
		},
		_trigger: function() {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function(e) {
			var i = e || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || t([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: e ? e.element : null
			}
		}
	}), t.widget("ui.spinner", {
		version: "1.12.1",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			classes: {
				"ui-spinner": "ui-corner-all",
				"ui-spinner-down": "ui-corner-br",
				"ui-spinner-up": "ui-corner-tr"
			},
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function() {
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function() {
			var e = this._super(),
				i = this.element;
			return t.each(["min", "max", "step"], function(t, s) {
				var n = i.attr(s);
				null != n && n.length && (e[s] = n)
			}), e
		},
		_events: {
			keydown: function(t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function() {
				this.previous = this.element.val()
			},
			blur: function(t) {
				return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
			},
			mousewheel: function(t, e) {
				if (e) {
					if (!this.spinning && !this._start(t)) return !1;
					this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
						this.spinning && this._stop(t)
					}, 100), t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function(e) {
				function i() {
					var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
					e || (this.element.trigger("focus"), this.previous = s, this._delay(function() {
						this.previous = s
					}))
				}
				var s;
				s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
					delete this.cancelBlur, i.call(this)
				}), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function(e) {
				return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_enhance: function() {
			this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
		},
		_draw: function() {
			this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
				classes: {
					"ui-button": ""
				}
			}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
				icon: this.options.icons.up,
				showLabel: !1
			}), this.buttons.last().button({
				icon: this.options.icons.down,
				showLabel: !1
			}), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
		},
		_keydown: function(e) {
			var i = this.options,
				s = t.ui.keyCode;
			switch (e.keyCode) {
				case s.UP:
					return this._repeat(null, 1, e), !0;
				case s.DOWN:
					return this._repeat(null, -1, e), !0;
				case s.PAGE_UP:
					return this._repeat(null, i.page, e), !0;
				case s.PAGE_DOWN:
					return this._repeat(null, -i.page, e), !0
			}
			return !1
		},
		_start: function(t) {
			return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
		},
		_repeat: function(t, e, i) {
			t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
				this._repeat(40, e, i)
			}, t), this._spin(e * this.options.step, i)
		},
		_spin: function(t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
				value: i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment: function(e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision: function() {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function(t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function(t) {
			var e, i, s = this.options;
			return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
		},
		_stop: function(t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function(t, e) {
			var i, s, n;
			return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0)
		},
		_setOptionDisabled: function(t) {
			this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
		},
		_setOptions: r(function(t) {
			this._super(t)
		}),
		_parse: function(t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
		},
		_format: function(t) {
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function() {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		isValid: function() {
			var t = this.value();
			return null === t ? !1 : t === this._adjustValue(t)
		},
		_value: function(t, e) {
			var i;
			"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
		},
		_destroy: function() {
			this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: r(function(t) {
			this._stepUp(t)
		}),
		_stepUp: function(t) {
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown: r(function(t) {
			this._stepDown(t)
		}),
		_stepDown: function(t) {
			this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
		},
		pageUp: r(function(t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: r(function(t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function(t) {
			return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val())
		},
		widget: function() {
			return this.uiSpinner
		}
	}), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
		_enhance: function() {
			this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
		},
		_uiSpinnerHtml: function() {
			return "<span>"
		},
		_buttonHtml: function() {
			return "<a></a><a></a>"
		}
	}), t.ui.spinner, t.widget("ui.tabs", {
		version: "1.12.1",
		delay: 300,
		options: {
			active: null,
			classes: {
				"ui-tabs": "ui-corner-all",
				"ui-tabs-nav": "ui-corner-all",
				"ui-tabs-panel": "ui-corner-bottom",
				"ui-tabs-tab": "ui-corner-top"
			},
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_isLocal: function() {
			var t = /#.*$/;
			return function(e) {
				var i, s;
				i = e.href.replace(t, ""), s = location.href.replace(t, "");
				try {
					i = decodeURIComponent(i)
				} catch (n) {}
				try {
					s = decodeURIComponent(s)
				} catch (n) {}
				return e.hash.length > 1 && i === s
			}
		}(),
		_create: function() {
			var e = this,
				i = this.options;
			this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
				return e.tabs.index(t)
			}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
		},
		_initialActive: function() {
			var e = this.options.active,
				i = this.options.collapsible,
				s = location.hash.substring(1);
			return null === e && (s && this.tabs.each(function(i, n) {
				return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
			}), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
		},
		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown: function(e) {
			var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
				s = this.tabs.index(i),
				n = !0;
			if (!this._handlePageNav(e)) {
				switch (e.keyCode) {
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
						s++;
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.LEFT:
						n = !1, s--;
						break;
					case t.ui.keyCode.END:
						s = this.anchors.length - 1;
						break;
					case t.ui.keyCode.HOME:
						s = 0;
						break;
					case t.ui.keyCode.SPACE:
						return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
					case t.ui.keyCode.ENTER:
						return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
					default:
						return
				}
				e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
					this.option("active", s)
				}, this.delay))
			}
		},
		_panelKeydown: function(e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
		},
		_handlePageNav: function(e) {
			return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
		},
		_findNextTab: function(e, i) {
			function s() {
				return e > n && (e = 0), 0 > e && (e = n), e
			}
			for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
			return e
		},
		_focusNextTab: function(t, e) {
			return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
		},
		_setOption: function(t, e) {
			return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
		},
		_sanitizeSelector: function(t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function() {
			var e = this.options,
				i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
				return i.index(t)
			}), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
		},
		_refresh: function() {
			this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-hidden": "true"
			}), this.active.length ? (this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function() {
			var e = this,
				i = this.tabs,
				s = this.anchors,
				n = this.panels;
			this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this.tabs = this.tablist.find("> li:has(a[href])").attr({
				role: "tab",
				tabIndex: -1
			}), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
				return t("a", this)[0]
			}).attr({
				role: "presentation",
				tabIndex: -1
			}), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
				var n, o, a, r = t(s).uniqueId().attr("id"),
					h = t(s).closest("li"),
					l = h.attr("aria-controls");
				e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
					"aria-controls": a,
					"aria-labelledby": r
				}), o.attr("aria-labelledby", r)
			}), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
		},
		_getList: function() {
			return this.tablist || this.element.find("ol, ul").eq(0)
		},
		_createPanel: function(e) {
			return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
		},
		_setOptionDisabled: function(e) {
			var i, s, n;
			for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
			this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
		},
		_setupEvents: function(e) {
			var i = {};
			e && t.each(e.split(" "), function(t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
				click: function(t) {
					t.preventDefault()
				}
			}), this._on(this.anchors, i), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function(e) {
			var i, s = this.element.parent();
			"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function() {
				i -= t(this).outerHeight(!0)
			}), this.panels.each(function() {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
				i = Math.max(i, t(this).height("").height())
			}).height(i))
		},
		_eventHandler: function(e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				o = n.closest("li"),
				a = o[0] === s[0],
				r = a && i.collapsible,
				h = r ? t() : this._getPanelForTab(o),
				l = s.length ? this._getPanelForTab(s) : t(),
				c = {
					oldTab: s,
					oldPanel: l,
					newTab: r ? t() : o,
					newPanel: h
				};
			e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
		},
		_toggle: function(e, i) {
			function s() {
				o.running = !1, o._trigger("activate", e, i)
			}

			function n() {
				o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
			}
			var o = this,
				a = i.newPanel,
				r = i.oldPanel;
			this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
				o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
			}) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			}), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_activate: function(e) {
			var i, s = this._findActive(e);
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function(e) {
			return e === !1 ? t() : this.tabs.eq(e)
		},
		_getIndex: function(e) {
			return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
		},
		_destroy: function() {
			this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
			}), this.tabs.each(function() {
				var e = t(this),
					i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function(e) {
			var i = this.options.disabled;
			i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
				return t !== e ? t : null
			}) : t.map(this.tabs, function(t, i) {
				return i !== e ? i : null
			})), this._setOptionDisabled(i))
		},
		disable: function(e) {
			var i = this.options.disabled;
			if (i !== !0) {
				if (void 0 === e) i = !0;
				else {
					if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
					i = t.isArray(i) ? t.merge([e], i).sort() : [e]
				}
				this._setOptionDisabled(i)
			}
		},
		load: function(e, i) {
			e = this._getIndex(e);
			var s = this,
				n = this.tabs.eq(e),
				o = n.find(".ui-tabs-anchor"),
				a = this._getPanelForTab(n),
				r = {
					tab: n,
					panel: a
				},
				h = function(t, e) {
					"abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
				};
			this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
				setTimeout(function() {
					a.html(t), s._trigger("load", i, r), h(n, e)
				}, 1)
			}).fail(function(t, e) {
				setTimeout(function() {
					h(t, e)
				}, 1)
			})))
		},
		_ajaxSettings: function(e, i, s) {
			var n = this;
			return {
				url: e.attr("href").replace(/#.*$/, ""),
				beforeSend: function(e, o) {
					return n._trigger("beforeLoad", i, t.extend({
						jqXHR: e,
						ajaxSettings: o
					}, s))
				}
			}
		},
		_getPanelForTab: function(e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	}), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
		_processTabs: function() {
			this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
		}
	}), t.ui.tabs, t.widget("ui.tooltip", {
		version: "1.12.1",
		options: {
			classes: {
				"ui-tooltip": "ui-corner-all ui-widget-shadow"
			},
			content: function() {
				var e = t(this).attr("title") || "";
				return t("<a>").text(e).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			track: !1,
			close: null,
			open: null
		},
		_addDescribedBy: function(e, i) {
			var s = (e.attr("aria-describedby") || "").split(/\s+/);
			s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
		},
		_removeDescribedBy: function(e) {
			var i = e.data("ui-tooltip-id"),
				s = (e.attr("aria-describedby") || "").split(/\s+/),
				n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
		},
		_create: function() {
			this._on({
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
		},
		_setOption: function(e, i) {
			var s = this;
			this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
				s._updateContent(e.element)
			})
		},
		_setOptionDisabled: function(t) {
			this[t ? "_disable" : "_enable"]()
		},
		_disable: function() {
			var e = this;
			t.each(this.tooltips, function(i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s.element[0], e.close(n, !0)
			}), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
				var e = t(this);
				return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
			}))
		},
		_enable: function() {
			this.disabledTitles.each(function() {
				var e = t(this);
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			}), this.disabledTitles = t([])
		},
		open: function(e) {
			var i = this,
				s = t(e ? e.target : this.element).closest(this.options.items);
			s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
				var e, s = t(this);
				s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
					element: this,
					title: s.attr("title")
				}, s.attr("title", ""))
			}), this._registerCloseHandlers(e, s), this._updateContent(s, e))
		},
		_updateContent: function(t, e) {
			var i, s = this.options.content,
				n = this,
				o = e ? e.type : null;
			return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
				n._delay(function() {
					t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
				})
			}), i && this._open(e, t, i), void 0)
		},
		_open: function(e, i, s) {
			function n(t) {
				l.of = t, a.is(":hidden") || a.position(l)
			}
			var o, a, r, h, l = t.extend({}, this.options.position);
			if (s) {
				if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
				i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
					mousemove: n
				}), n(e)) : a.position(t.extend({
					of: i
				}, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
					a.is(":visible") && (n(l.of), clearInterval(r))
				}, t.fx.interval)), this._trigger("open", e, {
					tooltip: a
				})
			}
		},
		_registerCloseHandlers: function(e, i) {
			var s = {
				keyup: function(e) {
					if (e.keyCode === t.ui.keyCode.ESCAPE) {
						var s = t.Event(e);
						s.currentTarget = i[0], this.close(s, !0)
					}
				}
			};
			i[0] !== this.element[0] && (s.remove = function() {
				this._removeTooltip(this._find(i).tooltip)
			}), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
		},
		close: function(e) {
			var i, s = this,
				n = t(e ? e.currentTarget : this.element),
				o = this._find(n);
			return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
				s._removeTooltip(t(this))
			}), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
				t(i.element).attr("title", i.title), delete s.parents[e]
			}), o.closing = !0, this._trigger("close", e, {
				tooltip: i
			}), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
		},
		_tooltip: function(e) {
			var i = t("<div>").attr("role", "tooltip"),
				s = t("<div>").appendTo(i),
				n = i.uniqueId().attr("id");
			return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
				element: e,
				tooltip: i
			}
		},
		_find: function(t) {
			var e = t.data("ui-tooltip-id");
			return e ? this.tooltips[e] : null
		},
		_removeTooltip: function(t) {
			t.remove(), delete this.tooltips[t.attr("id")]
		},
		_appendTo: function(t) {
			var e = t.closest(".ui-front, dialog");
			return e.length || (e = this.document[0].body), e
		},
		_destroy: function() {
			var e = this;
			t.each(this.tooltips, function(i, s) {
				var n = t.Event("blur"),
					o = s.element;
				n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
			}), this.liveRegion.remove()
		}
	}), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
		options: {
			tooltipClass: null
		},
		_tooltip: function() {
			var t = this._superApply(arguments);
			return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
		}
	}), t.ui.tooltip
});
/*! jQuery Timepicker Addon - v1.6.3 - 2016-04-20
 * http://trentrichardson.com/examples/timepicker
 * Copyright (c) 2016 Trent Richardson; Licensed MIT */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "jquery-ui"], a) : a(jQuery)
}(function($) {
	if ($.ui.timepicker = $.ui.timepicker || {}, !$.ui.timepicker.version) {
		$.extend($.ui, {
			timepicker: {
				version: "1.6.3"
			}
		});
		var Timepicker = function() {
			this.regional = [], this.regional[""] = {
				currentText: "Now",
				closeText: "Done",
				amNames: ["AM", "A"],
				pmNames: ["PM", "P"],
				timeFormat: "HH:mm",
				timeSuffix: "",
				timeOnlyTitle: "Choose Time",
				timeText: "Time",
				hourText: "Hour",
				minuteText: "Minute",
				secondText: "Second",
				millisecText: "Millisecond",
				microsecText: "Microsecond",
				timezoneText: "Time Zone",
				isRTL: !1
			}, this._defaults = {
				showButtonPanel: !0,
				timeOnly: !1,
				timeOnlyShowDate: !1,
				showHour: null,
				showMinute: null,
				showSecond: null,
				showMillisec: null,
				showMicrosec: null,
				showTimezone: null,
				showTime: !0,
				stepHour: 1,
				stepMinute: 1,
				stepSecond: 1,
				stepMillisec: 1,
				stepMicrosec: 1,
				hour: 0,
				minute: 0,
				second: 0,
				millisec: 0,
				microsec: 0,
				timezone: null,
				hourMin: 0,
				minuteMin: 0,
				secondMin: 0,
				millisecMin: 0,
				microsecMin: 0,
				hourMax: 23,
				minuteMax: 59,
				secondMax: 59,
				millisecMax: 999,
				microsecMax: 999,
				minDateTime: null,
				maxDateTime: null,
				maxTime: null,
				minTime: null,
				onSelect: null,
				hourGrid: 0,
				minuteGrid: 0,
				secondGrid: 0,
				millisecGrid: 0,
				microsecGrid: 0,
				alwaysSetTime: !0,
				separator: " ",
				altFieldTimeOnly: !0,
				altTimeFormat: null,
				altSeparator: null,
				altTimeSuffix: null,
				altRedirectFocus: !0,
				pickerTimeFormat: null,
				pickerTimeSuffix: null,
				showTimepicker: !0,
				timezoneList: null,
				addSliderAccess: !1,
				sliderAccessArgs: null,
				controlType: "slider",
				oneLine: !1,
				defaultValue: null,
				parse: "strict",
				afterInject: null
			}, $.extend(this._defaults, this.regional[""])
		};
		$.extend(Timepicker.prototype, {
			$input: null,
			$altInput: null,
			$timeObj: null,
			inst: null,
			hour_slider: null,
			minute_slider: null,
			second_slider: null,
			millisec_slider: null,
			microsec_slider: null,
			timezone_select: null,
			maxTime: null,
			minTime: null,
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			microsec: 0,
			timezone: null,
			hourMinOriginal: null,
			minuteMinOriginal: null,
			secondMinOriginal: null,
			millisecMinOriginal: null,
			microsecMinOriginal: null,
			hourMaxOriginal: null,
			minuteMaxOriginal: null,
			secondMaxOriginal: null,
			millisecMaxOriginal: null,
			microsecMaxOriginal: null,
			ampm: "",
			formattedDate: "",
			formattedTime: "",
			formattedDateTime: "",
			timezoneList: null,
			units: ["hour", "minute", "second", "millisec", "microsec"],
			support: {},
			control: null,
			setDefaults: function(a) {
				return extendRemove(this._defaults, a || {}), this
			},
			_newInst: function($input, opts) {
				var tp_inst = new Timepicker,
					inlineSettings = {},
					fns = {},
					overrides, i;
				for (var attrName in this._defaults)
					if (this._defaults.hasOwnProperty(attrName)) {
						var attrValue = $input.attr("time:" + attrName);
						if (attrValue) try {
							inlineSettings[attrName] = eval(attrValue)
						} catch (err) {
							inlineSettings[attrName] = attrValue
						}
					} overrides = {
					beforeShow: function(a, b) {
						return $.isFunction(tp_inst._defaults.evnts.beforeShow) ? tp_inst._defaults.evnts.beforeShow.call($input[0], a, b, tp_inst) : void 0
					},
					onChangeMonthYear: function(a, b, c) {
						$.isFunction(tp_inst._defaults.evnts.onChangeMonthYear) && tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], a, b, c, tp_inst)
					},
					onClose: function(a, b) {
						tp_inst.timeDefined === !0 && "" !== $input.val() && tp_inst._updateDateTime(b), $.isFunction(tp_inst._defaults.evnts.onClose) && tp_inst._defaults.evnts.onClose.call($input[0], a, b, tp_inst)
					}
				};
				for (i in overrides) overrides.hasOwnProperty(i) && (fns[i] = opts[i] || this._defaults[i] || null);
				tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
					evnts: fns,
					timepicker: tp_inst
				}), tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(a) {
					return a.toUpperCase()
				}), tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(a) {
					return a.toUpperCase()
				}), tp_inst.support = detectSupport(tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : "")), "string" == typeof tp_inst._defaults.controlType ? ("slider" === tp_inst._defaults.controlType && "undefined" == typeof $.ui.slider && (tp_inst._defaults.controlType = "select"), tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType]) : tp_inst.control = tp_inst._defaults.controlType;
				var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
				null !== tp_inst._defaults.timezoneList && (timezoneList = tp_inst._defaults.timezoneList);
				var tzl = timezoneList.length,
					tzi = 0,
					tzv = null;
				if (tzl > 0 && "object" != typeof timezoneList[0])
					for (; tzl > tzi; tzi++) tzv = timezoneList[tzi], timezoneList[tzi] = {
						value: tzv,
						label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601)
					};
				return tp_inst._defaults.timezoneList = timezoneList, tp_inst.timezone = null !== tp_inst._defaults.timezone ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : -1 * (new Date).getTimezoneOffset(), tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second, tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec, tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec, tp_inst.ampm = "", tp_inst.$input = $input, tp_inst._defaults.altField && (tp_inst.$altInput = $(tp_inst._defaults.altField), tp_inst._defaults.altRedirectFocus === !0 && tp_inst.$altInput.css({
					cursor: "pointer"
				}).focus(function() {
					$input.trigger("focus")
				})), (0 === tp_inst._defaults.minDate || 0 === tp_inst._defaults.minDateTime) && (tp_inst._defaults.minDate = new Date), (0 === tp_inst._defaults.maxDate || 0 === tp_inst._defaults.maxDateTime) && (tp_inst._defaults.maxDate = new Date), void 0 !== tp_inst._defaults.minDate && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), void 0 !== tp_inst._defaults.minDateTime && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), void 0 !== tp_inst._defaults.maxDate && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), void 0 !== tp_inst._defaults.maxDateTime && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst.$input.bind("focus", function() {
					tp_inst._onFocus()
				}), tp_inst
			},
			_addTimePicker: function(a) {
				var b = $.trim(this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val());
				this.timeDefined = this._parseTime(b), this._limitMinMaxDateTime(a, !1), this._injectTimePicker(), this._afterInject()
			},
			_parseTime: function(a, b) {
				if (this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), b || !this._defaults.timeOnly) {
					var c = $.datepicker._get(this.inst, "dateFormat");
					try {
						var d = parseDateTimeInternal(c, this._defaults.timeFormat, a, $.datepicker._getFormatConfig(this.inst), this._defaults);
						if (!d.timeObj) return !1;
						$.extend(this, d.timeObj)
					} catch (e) {
						return $.timepicker.log("Error parsing the date/time string: " + e + "\ndate/time string = " + a + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + c), !1
					}
					return !0
				}
				var f = $.datepicker.parseTime(this._defaults.timeFormat, a, this._defaults);
				return f ? ($.extend(this, f), !0) : !1
			},
			_afterInject: function() {
				var a = this.inst.settings;
				$.isFunction(a.afterInject) && a.afterInject.call(this)
			},
			_injectTimePicker: function() {
				var a = this.inst.dpDiv,
					b = this.inst.settings,
					c = this,
					d = "",
					e = "",
					f = null,
					g = {},
					h = {},
					i = null,
					j = 0,
					k = 0;
				if (0 === a.find("div.ui-timepicker-div").length && b.showTimepicker) {
					var l = " ui_tpicker_unit_hide",
						m = '<div class="ui-timepicker-div' + (b.isRTL ? " ui-timepicker-rtl" : "") + (b.oneLine && "select" === b.controlType ? " ui-timepicker-oneLine" : "") + '"><dl><dt class="ui_tpicker_time_label' + (b.showTime ? "" : l) + '">' + b.timeText + '</dt><dd class="ui_tpicker_time ' + (b.showTime ? "" : l) + '"><input class="ui_tpicker_time_input" ' + (b.timeInput ? "" : "disabled") + "/></dd>";
					for (j = 0, k = this.units.length; k > j; j++) {
						if (d = this.units[j], e = d.substr(0, 1).toUpperCase() + d.substr(1), f = null !== b["show" + e] ? b["show" + e] : this.support[d], g[d] = parseInt(b[d + "Max"] - (b[d + "Max"] - b[d + "Min"]) % b["step" + e], 10), h[d] = 0, m += '<dt class="ui_tpicker_' + d + "_label" + (f ? "" : l) + '">' + b[d + "Text"] + '</dt><dd class="ui_tpicker_' + d + (f ? "" : l) + '"><div class="ui_tpicker_' + d + "_slider" + (f ? "" : l) + '"></div>', f && b[d + "Grid"] > 0) {
							if (m += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>', "hour" === d)
								for (var n = b[d + "Min"]; n <= g[d]; n += parseInt(b[d + "Grid"], 10)) {
									h[d]++;
									var o = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", {
										hour: n
									}, b);
									m += '<td data-for="' + d + '">' + o + "</td>"
								} else
									for (var p = b[d + "Min"]; p <= g[d]; p += parseInt(b[d + "Grid"], 10)) h[d]++, m += '<td data-for="' + d + '">' + (10 > p ? "0" : "") + p + "</td>";
							m += "</tr></table></div>"
						}
						m += "</dd>"
					}
					var q = null !== b.showTimezone ? b.showTimezone : this.support.timezone;
					m += '<dt class="ui_tpicker_timezone_label' + (q ? "" : l) + '">' + b.timezoneText + "</dt>", m += '<dd class="ui_tpicker_timezone' + (q ? "" : l) + '"></dd>', m += "</dl></div>";
					var r = $(m);
					for (b.timeOnly === !0 && (r.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + b.timeOnlyTitle + "</div></div>"), a.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()), j = 0, k = c.units.length; k > j; j++) d = c.units[j], e = d.substr(0, 1).toUpperCase() + d.substr(1), f = null !== b["show" + e] ? b["show" + e] : this.support[d], c[d + "_slider"] = c.control.create(c, r.find(".ui_tpicker_" + d + "_slider"), d, c[d], b[d + "Min"], g[d], b["step" + e]), f && b[d + "Grid"] > 0 && (i = 100 * h[d] * b[d + "Grid"] / (g[d] - b[d + "Min"]), r.find(".ui_tpicker_" + d + " table").css({
						width: i + "%",
						marginLeft: b.isRTL ? "0" : i / (-2 * h[d]) + "%",
						marginRight: b.isRTL ? i / (-2 * h[d]) + "%" : "0",
						borderCollapse: "collapse"
					}).find("td").click(function(a) {
						var b = $(this),
							e = b.html(),
							f = parseInt(e.replace(/[^0-9]/g), 10),
							g = e.replace(/[^apm]/gi),
							h = b.data("for");
						"hour" === h && (-1 !== g.indexOf("p") && 12 > f ? f += 12 : -1 !== g.indexOf("a") && 12 === f && (f = 0)), c.control.value(c, c[h + "_slider"], d, f), c._onTimeChange(), c._onSelectHandler()
					}).css({
						cursor: "pointer",
						width: 100 / h[d] + "%",
						textAlign: "center",
						overflow: "hidden"
					}));
					if (this.timezone_select = r.find(".ui_tpicker_timezone").append("<select></select>").find("select"), $.fn.append.apply(this.timezone_select, $.map(b.timezoneList, function(a, b) {
							return $("<option />").val("object" == typeof a ? a.value : a).text("object" == typeof a ? a.label : a)
						})), "undefined" != typeof this.timezone && null !== this.timezone && "" !== this.timezone) {
						var s = -1 * new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12).getTimezoneOffset();
						s === this.timezone ? selectLocalTimezone(c) : this.timezone_select.val(this.timezone)
					} else "undefined" != typeof this.hour && null !== this.hour && "" !== this.hour ? this.timezone_select.val(b.timezone) : selectLocalTimezone(c);
					this.timezone_select.change(function() {
						c._onTimeChange(), c._onSelectHandler(), c._afterInject()
					});
					var t = a.find(".ui-datepicker-buttonpane");
					if (t.length ? t.before(r) : a.append(r), this.$timeObj = r.find(".ui_tpicker_time_input"), this.$timeObj.change(function() {
							var a = c.inst.settings.timeFormat,
								b = $.datepicker.parseTime(a, this.value),
								d = new Date;
							b ? (d.setHours(b.hour), d.setMinutes(b.minute), d.setSeconds(b.second), $.datepicker._setTime(c.inst, d)) : (this.value = c.formattedTime, this.blur())
						}), null !== this.inst) {
						var u = this.timeDefined;
						this._onTimeChange(), this.timeDefined = u
					}
					if (this._defaults.addSliderAccess) {
						var v = this._defaults.sliderAccessArgs,
							w = this._defaults.isRTL;
						v.isRTL = w, setTimeout(function() {
							if (0 === r.find(".ui-slider-access").length) {
								r.find(".ui-slider:visible").sliderAccess(v);
								var a = r.find(".ui-slider-access:eq(0)").outerWidth(!0);
								a && r.find("table:visible").each(function() {
									var b = $(this),
										c = b.outerWidth(),
										d = b.css(w ? "marginRight" : "marginLeft").toString().replace("%", ""),
										e = c - a,
										f = d * e / c + "%",
										g = {
											width: e,
											marginRight: 0,
											marginLeft: 0
										};
									g[w ? "marginRight" : "marginLeft"] = f, b.css(g)
								})
							}
						}, 10)
					}
					c._limitMinMaxDateTime(this.inst, !0)
				}
			},
			_limitMinMaxDateTime: function(a, b) {
				var c = this._defaults,
					d = new Date(a.selectedYear, a.selectedMonth, a.selectedDay);
				if (this._defaults.showTimepicker) {
					if (null !== $.datepicker._get(a, "minDateTime") && void 0 !== $.datepicker._get(a, "minDateTime") && d) {
						var e = $.datepicker._get(a, "minDateTime"),
							f = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
						(null === this.hourMinOriginal || null === this.minuteMinOriginal || null === this.secondMinOriginal || null === this.millisecMinOriginal || null === this.microsecMinOriginal) && (this.hourMinOriginal = c.hourMin, this.minuteMinOriginal = c.minuteMin, this.secondMinOriginal = c.secondMin, this.millisecMinOriginal = c.millisecMin, this.microsecMinOriginal = c.microsecMin), a.settings.timeOnly || f.getTime() === d.getTime() ? (this._defaults.hourMin = e.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = e.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = e.getSeconds(), this.second <= this._defaults.secondMin ? (this.second = this._defaults.secondMin, this._defaults.millisecMin = e.getMilliseconds(), this.millisec <= this._defaults.millisecMin ? (this.millisec = this._defaults.millisecMin, this._defaults.microsecMin = e.getMicroseconds()) : (this.microsec < this._defaults.microsecMin && (this.microsec = this._defaults.microsecMin), this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal, this._defaults.microsecMin = this.microsecMinOriginal)
					}
					if (null !== $.datepicker._get(a, "maxDateTime") && void 0 !== $.datepicker._get(a, "maxDateTime") && d) {
						var g = $.datepicker._get(a, "maxDateTime"),
							h = new Date(g.getFullYear(), g.getMonth(), g.getDate(), 0, 0, 0, 0);
						(null === this.hourMaxOriginal || null === this.minuteMaxOriginal || null === this.secondMaxOriginal || null === this.millisecMaxOriginal) && (this.hourMaxOriginal = c.hourMax, this.minuteMaxOriginal = c.minuteMax, this.secondMaxOriginal = c.secondMax, this.millisecMaxOriginal = c.millisecMax, this.microsecMaxOriginal = c.microsecMax), a.settings.timeOnly || h.getTime() === d.getTime() ? (this._defaults.hourMax = g.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = g.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = g.getSeconds(), this.second >= this._defaults.secondMax ? (this.second = this._defaults.secondMax, this._defaults.millisecMax = g.getMilliseconds(), this.millisec >= this._defaults.millisecMax ? (this.millisec = this._defaults.millisecMax, this._defaults.microsecMax = g.getMicroseconds()) : (this.microsec > this._defaults.microsecMax && (this.microsec = this._defaults.microsecMax), this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal, this._defaults.microsecMax = this.microsecMaxOriginal)
					}
					if (null !== a.settings.minTime) {
						var i = new Date("01/01/1970 " + a.settings.minTime);
						this.hour < i.getHours() ? (this.hour = this._defaults.hourMin = i.getHours(), this.minute = this._defaults.minuteMin = i.getMinutes()) : this.hour === i.getHours() && this.minute < i.getMinutes() ? this.minute = this._defaults.minuteMin = i.getMinutes() : this._defaults.hourMin < i.getHours() ? (this._defaults.hourMin = i.getHours(), this._defaults.minuteMin = i.getMinutes()) : this._defaults.hourMin === i.getHours() === this.hour && this._defaults.minuteMin < i.getMinutes() ? this._defaults.minuteMin = i.getMinutes() : this._defaults.minuteMin = 0
					}
					if (null !== a.settings.maxTime) {
						var j = new Date("01/01/1970 " + a.settings.maxTime);
						this.hour > j.getHours() ? (this.hour = this._defaults.hourMax = j.getHours(), this.minute = this._defaults.minuteMax = j.getMinutes()) : this.hour === j.getHours() && this.minute > j.getMinutes() ? this.minute = this._defaults.minuteMax = j.getMinutes() : this._defaults.hourMax > j.getHours() ? (this._defaults.hourMax = j.getHours(), this._defaults.minuteMax = j.getMinutes()) : this._defaults.hourMax === j.getHours() === this.hour && this._defaults.minuteMax > j.getMinutes() ? this._defaults.minuteMax = j.getMinutes() : this._defaults.minuteMax = 59
					}
					if (void 0 !== b && b === !0) {
						var k = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10),
							l = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10),
							m = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10),
							n = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10),
							o = parseInt(this._defaults.microsecMax - (this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec, 10);
						this.hour_slider && (this.control.options(this, this.hour_slider, "hour", {
							min: this._defaults.hourMin,
							max: k,
							step: this._defaults.stepHour
						}), this.control.value(this, this.hour_slider, "hour", this.hour - this.hour % this._defaults.stepHour)), this.minute_slider && (this.control.options(this, this.minute_slider, "minute", {
							min: this._defaults.minuteMin,
							max: l,
							step: this._defaults.stepMinute
						}), this.control.value(this, this.minute_slider, "minute", this.minute - this.minute % this._defaults.stepMinute)), this.second_slider && (this.control.options(this, this.second_slider, "second", {
							min: this._defaults.secondMin,
							max: m,
							step: this._defaults.stepSecond
						}), this.control.value(this, this.second_slider, "second", this.second - this.second % this._defaults.stepSecond)), this.millisec_slider && (this.control.options(this, this.millisec_slider, "millisec", {
							min: this._defaults.millisecMin,
							max: n,
							step: this._defaults.stepMillisec
						}), this.control.value(this, this.millisec_slider, "millisec", this.millisec - this.millisec % this._defaults.stepMillisec)), this.microsec_slider && (this.control.options(this, this.microsec_slider, "microsec", {
							min: this._defaults.microsecMin,
							max: o,
							step: this._defaults.stepMicrosec
						}), this.control.value(this, this.microsec_slider, "microsec", this.microsec - this.microsec % this._defaults.stepMicrosec))
					}
				}
			},
			_onTimeChange: function() {
				if (this._defaults.showTimepicker) {
					var a = this.hour_slider ? this.control.value(this, this.hour_slider, "hour") : !1,
						b = this.minute_slider ? this.control.value(this, this.minute_slider, "minute") : !1,
						c = this.second_slider ? this.control.value(this, this.second_slider, "second") : !1,
						d = this.millisec_slider ? this.control.value(this, this.millisec_slider, "millisec") : !1,
						e = this.microsec_slider ? this.control.value(this, this.microsec_slider, "microsec") : !1,
						f = this.timezone_select ? this.timezone_select.val() : !1,
						g = this._defaults,
						h = g.pickerTimeFormat || g.timeFormat,
						i = g.pickerTimeSuffix || g.timeSuffix;
					"object" == typeof a && (a = !1), "object" == typeof b && (b = !1), "object" == typeof c && (c = !1), "object" == typeof d && (d = !1), "object" == typeof e && (e = !1), "object" == typeof f && (f = !1), a !== !1 && (a = parseInt(a, 10)), b !== !1 && (b = parseInt(b, 10)), c !== !1 && (c = parseInt(c, 10)), d !== !1 && (d = parseInt(d, 10)), e !== !1 && (e = parseInt(e, 10)), f !== !1 && (f = f.toString());
					var j = g[12 > a ? "amNames" : "pmNames"][0],
						k = a !== parseInt(this.hour, 10) || b !== parseInt(this.minute, 10) || c !== parseInt(this.second, 10) || d !== parseInt(this.millisec, 10) || e !== parseInt(this.microsec, 10) || this.ampm.length > 0 && 12 > a != (-1 !== $.inArray(this.ampm.toUpperCase(), this.amNames)) || null !== this.timezone && f !== this.timezone.toString();
					if (k && (a !== !1 && (this.hour = a), b !== !1 && (this.minute = b), c !== !1 && (this.second = c), d !== !1 && (this.millisec = d), e !== !1 && (this.microsec = e), f !== !1 && (this.timezone = f), this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0)), this.support.ampm && (this.ampm = j), this.formattedTime = $.datepicker.formatTime(g.timeFormat, this, g), this.$timeObj && (this.$timeObj.val(h === g.timeFormat ? this.formattedTime + i : $.datepicker.formatTime(h, this, g) + i), this.$timeObj[0].setSelectionRange)) {
						var l = this.$timeObj[0].selectionStart,
							m = this.$timeObj[0].selectionEnd;
						this.$timeObj[0].setSelectionRange(l, m)
					}
					this.timeDefined = !0, k && this._updateDateTime()
				}
			},
			_onSelectHandler: function() {
				var a = this._defaults.onSelect || this.inst.settings.onSelect,
					b = this.$input ? this.$input[0] : null;
				a && b && a.apply(b, [this.formattedDateTime, this])
			},
			_updateDateTime: function(a) {
				a = this.inst || a;
				var b = a.currentYear > 0 ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(a.selectedYear, a.selectedMonth, a.selectedDay),
					c = $.datepicker._daylightSavingAdjust(b),
					d = $.datepicker._get(a, "dateFormat"),
					e = $.datepicker._getFormatConfig(a),
					f = null !== c && this.timeDefined;
				this.formattedDate = $.datepicker.formatDate(d, null === c ? new Date : c, e);
				var g = this.formattedDate;
				if ("" === a.lastVal && (a.currentYear = a.selectedYear, a.currentMonth = a.selectedMonth, a.currentDay = a.selectedDay), this._defaults.timeOnly === !0 && this._defaults.timeOnlyShowDate === !1 ? g = this.formattedTime : (this._defaults.timeOnly !== !0 && (this._defaults.alwaysSetTime || f) || this._defaults.timeOnly === !0 && this._defaults.timeOnlyShowDate === !0) && (g += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix), this.formattedDateTime = g, this._defaults.showTimepicker)
					if (this.$altInput && this._defaults.timeOnly === !1 && this._defaults.altFieldTimeOnly === !0) this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate);
					else if (this.$altInput) {
					this.$input.val(g);
					var h = "",
						i = null !== this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
						j = null !== this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
					this._defaults.timeOnly || (h = this._defaults.altFormat ? $.datepicker.formatDate(this._defaults.altFormat, null === c ? new Date : c, e) : this.formattedDate, h && (h += i)), h += null !== this._defaults.altTimeFormat ? $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + j : this.formattedTime + j, this.$altInput.val(h)
				} else this.$input.val(g);
				else this.$input.val(this.formattedDate);
				this.$input.trigger("change")
			},
			_onFocus: function() {
				if (!this.$input.val() && this._defaults.defaultValue) {
					this.$input.val(this._defaults.defaultValue);
					var a = $.datepicker._getInst(this.$input.get(0)),
						b = $.datepicker._get(a, "timepicker");
					if (b && b._defaults.timeOnly && a.input.val() !== a.lastVal) try {
						$.datepicker._updateDatepicker(a)
					} catch (c) {
						$.timepicker.log(c)
					}
				}
			},
			_controls: {
				slider: {
					create: function(a, b, c, d, e, f, g) {
						var h = a._defaults.isRTL;
						return b.prop("slide", null).slider({
							orientation: "horizontal",
							value: h ? -1 * d : d,
							min: h ? -1 * f : e,
							max: h ? -1 * e : f,
							step: g,
							slide: function(b, d) {
								a.control.value(a, $(this), c, h ? -1 * d.value : d.value), a._onTimeChange()
							},
							stop: function(b, c) {
								a._onSelectHandler()
							}
						})
					},
					options: function(a, b, c, d, e) {
						if (a._defaults.isRTL) {
							if ("string" == typeof d) return "min" === d || "max" === d ? void 0 !== e ? b.slider(d, -1 * e) : Math.abs(b.slider(d)) : b.slider(d);
							var f = d.min,
								g = d.max;
							return d.min = d.max = null, void 0 !== f && (d.max = -1 * f), void 0 !== g && (d.min = -1 * g), b.slider(d)
						}
						return "string" == typeof d && void 0 !== e ? b.slider(d, e) : b.slider(d)
					},
					value: function(a, b, c, d) {
						return a._defaults.isRTL ? void 0 !== d ? b.slider("value", -1 * d) : Math.abs(b.slider("value")) : void 0 !== d ? b.slider("value", d) : b.slider("value")
					}
				},
				select: {
					create: function(a, b, c, d, e, f, g) {
						for (var h = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + c + '" data-min="' + e + '" data-max="' + f + '" data-step="' + g + '">', i = a._defaults.pickerTimeFormat || a._defaults.timeFormat, j = e; f >= j; j += g) h += '<option value="' + j + '"' + (j === d ? " selected" : "") + ">", h += "hour" === c ? $.datepicker.formatTime($.trim(i.replace(/[^ht ]/gi, "")), {
							hour: j
						}, a._defaults) : "millisec" === c || "microsec" === c || j >= 10 ? j : "0" + j.toString(), h += "</option>";
						return h += "</select>", b.children("select").remove(), $(h).appendTo(b).change(function(b) {
							a._onTimeChange(), a._onSelectHandler(), a._afterInject()
						}), b
					},
					options: function(a, b, c, d, e) {
						var f = {},
							g = b.children("select");
						if ("string" == typeof d) {
							if (void 0 === e) return g.data(d);
							f[d] = e
						} else f = d;
						return a.control.create(a, b, g.data("unit"), g.val(), f.min >= 0 ? f.min : g.data("min"), f.max || g.data("max"), f.step || g.data("step"))
					},
					value: function(a, b, c, d) {
						var e = b.children("select");
						return void 0 !== d ? e.val(d) : e.val()
					}
				}
			}
		}), $.fn.extend({
			timepicker: function(a) {
				a = a || {};
				var b = Array.prototype.slice.call(arguments);
				return "object" == typeof a && (b[0] = $.extend(a, {
					timeOnly: !0
				})), $(this).each(function() {
					$.fn.datetimepicker.apply($(this), b)
				})
			},
			datetimepicker: function(a) {
				a = a || {};
				var b = arguments;
				return "string" == typeof a ? "getDate" === a || "option" === a && 2 === b.length && "string" == typeof b[1] ? $.fn.datepicker.apply($(this[0]), b) : this.each(function() {
					var a = $(this);
					a.datepicker.apply(a, b)
				}) : this.each(function() {
					var b = $(this);
					b.datepicker($.timepicker._newInst(b, a)._defaults)
				})
			}
		}), $.datepicker.parseDateTime = function(a, b, c, d, e) {
			var f = parseDateTimeInternal(a, b, c, d, e);
			if (f.timeObj) {
				var g = f.timeObj;
				f.date.setHours(g.hour, g.minute, g.second, g.millisec), f.date.setMicroseconds(g.microsec)
			}
			return f.date
		}, $.datepicker.parseTime = function(a, b, c) {
			var d = extendRemove(extendRemove({}, $.timepicker._defaults), c || {}),
				e = (-1 !== a.replace(/\'.*?\'/g, "").indexOf("Z"), function(a, b, c) {
					var d, e = function(a, b) {
							var c = [];
							return a && $.merge(c, a), b && $.merge(c, b), c = $.map(c, function(a) {
								return a.replace(/[.*+?|()\[\]{}\\]/g, "\\$&")
							}), "(" + c.join("|") + ")?"
						},
						f = function(a) {
							var b = a.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
								c = {
									h: -1,
									m: -1,
									s: -1,
									l: -1,
									c: -1,
									t: -1,
									z: -1
								};
							if (b)
								for (var d = 0; d < b.length; d++) - 1 === c[b[d].toString().charAt(0)] && (c[b[d].toString().charAt(0)] = d + 1);
							return c
						},
						g = "^" + a.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(a) {
							var b = a.length;
							switch (a.charAt(0).toLowerCase()) {
								case "h":
									return 1 === b ? "(\\d?\\d)" : "(\\d{" + b + "})";
								case "m":
									return 1 === b ? "(\\d?\\d)" : "(\\d{" + b + "})";
								case "s":
									return 1 === b ? "(\\d?\\d)" : "(\\d{" + b + "})";
								case "l":
									return "(\\d?\\d?\\d)";
								case "c":
									return "(\\d?\\d?\\d)";
								case "z":
									return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
								case "t":
									return e(c.amNames, c.pmNames);
								default:
									return "(" + a.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function(a) {
										return "\\" + a
									}) + ")?"
							}
						}).replace(/\s/g, "\\s?") + c.timeSuffix + "$",
						h = f(a),
						i = "";
					d = b.match(new RegExp(g, "i"));
					var j = {
						hour: 0,
						minute: 0,
						second: 0,
						millisec: 0,
						microsec: 0
					};
					return d ? (-1 !== h.t && (void 0 === d[h.t] || 0 === d[h.t].length ? (i = "", j.ampm = "") : (i = -1 !== $.inArray(d[h.t].toUpperCase(), $.map(c.amNames, function(a, b) {
						return a.toUpperCase()
					})) ? "AM" : "PM", j.ampm = c["AM" === i ? "amNames" : "pmNames"][0])), -1 !== h.h && ("AM" === i && "12" === d[h.h] ? j.hour = 0 : "PM" === i && "12" !== d[h.h] ? j.hour = parseInt(d[h.h], 10) + 12 : j.hour = Number(d[h.h])), -1 !== h.m && (j.minute = Number(d[h.m])), -1 !== h.s && (j.second = Number(d[h.s])), -1 !== h.l && (j.millisec = Number(d[h.l])), -1 !== h.c && (j.microsec = Number(d[h.c])), -1 !== h.z && void 0 !== d[h.z] && (j.timezone = $.timepicker.timezoneOffsetNumber(d[h.z])), j) : !1
				}),
				f = function(a, b, c) {
					try {
						var d = new Date("2012-01-01 " + b);
						if (isNaN(d.getTime()) && (d = new Date("2012-01-01T" + b), isNaN(d.getTime()) && (d = new Date("01/01/2012 " + b), isNaN(d.getTime())))) throw "Unable to parse time with native Date: " + b;
						return {
							hour: d.getHours(),
							minute: d.getMinutes(),
							second: d.getSeconds(),
							millisec: d.getMilliseconds(),
							microsec: d.getMicroseconds(),
							timezone: -1 * d.getTimezoneOffset()
						}
					} catch (f) {
						try {
							return e(a, b, c)
						} catch (g) {
							$.timepicker.log("Unable to parse \ntimeString: " + b + "\ntimeFormat: " + a)
						}
					}
					return !1
				};
			return "function" == typeof d.parse ? d.parse(a, b, d) : "loose" === d.parse ? f(a, b, d) : e(a, b, d)
		}, $.datepicker.formatTime = function(a, b, c) {
			c = c || {}, c = $.extend({}, $.timepicker._defaults, c), b = $.extend({
				hour: 0,
				minute: 0,
				second: 0,
				millisec: 0,
				microsec: 0,
				timezone: null
			}, b);
			var d = a,
				e = c.amNames[0],
				f = parseInt(b.hour, 10);
			return f > 11 && (e = c.pmNames[0]), d = d.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(a) {
				switch (a) {
					case "HH":
						return ("0" + f).slice(-2);
					case "H":
						return f;
					case "hh":
						return ("0" + convert24to12(f)).slice(-2);
					case "h":
						return convert24to12(f);
					case "mm":
						return ("0" + b.minute).slice(-2);
					case "m":
						return b.minute;
					case "ss":
						return ("0" + b.second).slice(-2);
					case "s":
						return b.second;
					case "l":
						return ("00" + b.millisec).slice(-3);
					case "c":
						return ("00" + b.microsec).slice(-3);
					case "z":
						return $.timepicker.timezoneOffsetString(null === b.timezone ? c.timezone : b.timezone, !1);
					case "Z":
						return $.timepicker.timezoneOffsetString(null === b.timezone ? c.timezone : b.timezone, !0);
					case "T":
						return e.charAt(0).toUpperCase();
					case "TT":
						return e.toUpperCase();
					case "t":
						return e.charAt(0).toLowerCase();
					case "tt":
						return e.toLowerCase();
					default:
						return a.replace(/'/g, "")
				}
			})
		}, $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function(a, b) {
			var c, d = this._getInst($(a)[0]),
				e = this._get(d, "timepicker");
			e && d.settings.showTimepicker ? (e._limitMinMaxDateTime(d, !0), c = d.inline, d.inline = d.stay_open = !0, this._base_selectDate(a, b), d.inline = c, d.stay_open = !1, this._notifyChange(d), this._updateDatepicker(d)) : this._base_selectDate(a, b)
		}, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker, $.datepicker._updateDatepicker = function(a) {
			var b = a.input[0];
			if (!($.datepicker._curInst && $.datepicker._curInst !== a && $.datepicker._datepickerShowing && $.datepicker._lastInput !== b || "boolean" == typeof a.stay_open && a.stay_open !== !1)) {
				this._base_updateDatepicker(a);
				var c = this._get(a, "timepicker");
				c && c._addTimePicker(a)
			}
		}, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function(a) {
			var b = $.datepicker._getInst(a.target),
				c = $.datepicker._get(b, "timepicker");
			if (c && $.datepicker._get(b, "constrainInput")) {
				var d = c.support.ampm,
					e = null !== c._defaults.showTimezone ? c._defaults.showTimezone : c.support.timezone,
					f = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")),
					g = c._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, d ? "APM" : "").replace(/Tt/g, d ? "AaPpMm" : "").replace(/tT/g, d ? "AaPpMm" : "").replace(/T/g, d ? "AP" : "").replace(/tt/g, d ? "apm" : "").replace(/t/g, d ? "ap" : "") + " " + c._defaults.separator + c._defaults.timeSuffix + (e ? c._defaults.timezoneList.join("") : "") + c._defaults.amNames.join("") + c._defaults.pmNames.join("") + f,
					h = String.fromCharCode(void 0 === a.charCode ? a.keyCode : a.charCode);
				return a.ctrlKey || " " > h || !f || g.indexOf(h) > -1
			}
			return $.datepicker._base_doKeyPress(a)
		}, $.datepicker._base_updateAlternate = $.datepicker._updateAlternate, $.datepicker._updateAlternate = function(a) {
			var b = this._get(a, "timepicker");
			if (b) {
				var c = b._defaults.altField;
				if (c) {
					var d = (b._defaults.altFormat || b._defaults.dateFormat, this._getDate(a)),
						e = $.datepicker._getFormatConfig(a),
						f = "",
						g = b._defaults.altSeparator ? b._defaults.altSeparator : b._defaults.separator,
						h = b._defaults.altTimeSuffix ? b._defaults.altTimeSuffix : b._defaults.timeSuffix,
						i = null !== b._defaults.altTimeFormat ? b._defaults.altTimeFormat : b._defaults.timeFormat;
					f += $.datepicker.formatTime(i, b, b._defaults) + h, b._defaults.timeOnly || b._defaults.altFieldTimeOnly || null === d || (f = b._defaults.altFormat ? $.datepicker.formatDate(b._defaults.altFormat, d, e) + g + f : b.formattedDate + g + f), $(c).val(a.input.val() ? f : "")
				}
			} else $.datepicker._base_updateAlternate(a)
		}, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function(a) {
			var b = $.datepicker._getInst(a.target),
				c = $.datepicker._get(b, "timepicker");
			if (c && c._defaults.timeOnly && b.input.val() !== b.lastVal) try {
				$.datepicker._updateDatepicker(b)
			} catch (d) {
				$.timepicker.log(d)
			}
			return $.datepicker._base_doKeyUp(a)
		}, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function(a) {
			var b = this._getInst($(a)[0]);
			this._base_gotoToday(a);
			var c = this._get(b, "timepicker");
			if (c) {
				var d = $.timepicker.timezoneOffsetNumber(c.timezone),
					e = new Date;
				e.setMinutes(e.getMinutes() + e.getTimezoneOffset() + parseInt(d, 10)), this._setTime(b, e), this._setDate(b, e), c._onSelectHandler()
			}
		}, $.datepicker._disableTimepickerDatepicker = function(a) {
			var b = this._getInst(a);
			if (b) {
				var c = this._get(b, "timepicker");
				$(a).datepicker("getDate"), c && (b.settings.showTimepicker = !1, c._defaults.showTimepicker = !1, c._updateDateTime(b))
			}
		}, $.datepicker._enableTimepickerDatepicker = function(a) {
			var b = this._getInst(a);
			if (b) {
				var c = this._get(b, "timepicker");
				$(a).datepicker("getDate"), c && (b.settings.showTimepicker = !0, c._defaults.showTimepicker = !0, c._addTimePicker(b), c._updateDateTime(b))
			}
		}, $.datepicker._setTime = function(a, b) {
			var c = this._get(a, "timepicker");
			if (c) {
				var d = c._defaults;
				c.hour = b ? b.getHours() : d.hour, c.minute = b ? b.getMinutes() : d.minute, c.second = b ? b.getSeconds() : d.second, c.millisec = b ? b.getMilliseconds() : d.millisec, c.microsec = b ? b.getMicroseconds() : d.microsec, c._limitMinMaxDateTime(a, !0), c._onTimeChange(), c._updateDateTime(a)
			}
		}, $.datepicker._setTimeDatepicker = function(a, b, c) {
			var d = this._getInst(a);
			if (d) {
				var e = this._get(d, "timepicker");
				if (e) {
					this._setDateFromField(d);
					var f;
					b && ("string" == typeof b ? (e._parseTime(b, c), f = new Date, f.setHours(e.hour, e.minute, e.second, e.millisec), f.setMicroseconds(e.microsec)) : (f = new Date(b.getTime()), f.setMicroseconds(b.getMicroseconds())), "Invalid Date" === f.toString() && (f = void 0), this._setTime(d, f))
				}
			}
		}, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function(a, b) {
			var c = this._getInst(a),
				d = b;
			if (c) {
				"string" == typeof b && (d = new Date(b), d.getTime() || (this._base_setDateDatepicker.apply(this, arguments), d = $(a).datepicker("getDate")));
				var e, f = this._get(c, "timepicker");
				d instanceof Date ? (e = new Date(d.getTime()), e.setMicroseconds(d.getMicroseconds())) : e = d, f && e && (f.support.timezone || null !== f._defaults.timezone || (f.timezone = -1 * e.getTimezoneOffset()), d = $.timepicker.timezoneAdjust(d, $.timepicker.timezoneOffsetString(-d.getTimezoneOffset()), f.timezone), e = $.timepicker.timezoneAdjust(e, $.timepicker.timezoneOffsetString(-e.getTimezoneOffset()), f.timezone)), this._updateDatepicker(c), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(a, e, !0)
			}
		}, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function(a, b) {
			var c = this._getInst(a);
			if (c) {
				var d = this._get(c, "timepicker");
				if (d) {
					void 0 === c.lastVal && this._setDateFromField(c, b);
					var e = this._getDate(c),
						f = null;
					return f = d.$altInput && d._defaults.altFieldTimeOnly ? d.$input.val() + " " + d.$altInput.val() : "INPUT" !== d.$input.get(0).tagName && d.$altInput ? d.$altInput.val() : d.$input.val(), e && d._parseTime(f, !c.settings.timeOnly) && (e.setHours(d.hour, d.minute, d.second, d.millisec), e.setMicroseconds(d.microsec), null != d.timezone && (d.support.timezone || null !== d._defaults.timezone || (d.timezone = -1 * e.getTimezoneOffset()), e = $.timepicker.timezoneAdjust(e, d.timezone, $.timepicker.timezoneOffsetString(-e.getTimezoneOffset())))), e
				}
				return this._base_getDateDatepicker(a, b)
			}
		}, $.datepicker._base_parseDate = $.datepicker.parseDate, $.datepicker.parseDate = function(a, b, c) {
			var d;
			try {
				d = this._base_parseDate(a, b, c)
			} catch (e) {
				if (!(e.indexOf(":") >= 0)) throw e;
				d = this._base_parseDate(a, b.substring(0, b.length - (e.length - e.indexOf(":") - 2)), c), $.timepicker.log("Error parsing the date string: " + e + "\ndate string = " + b + "\ndate format = " + a)
			}
			return d
		}, $.datepicker._base_formatDate = $.datepicker._formatDate, $.datepicker._formatDate = function(a, b, c, d) {
			var e = this._get(a, "timepicker");
			return e ? (e._updateDateTime(a), e.$input.val()) : this._base_formatDate(a)
		}, $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker, $.datepicker._optionDatepicker = function(a, b, c) {
			var d, e = this._getInst(a);
			if (!e) return null;
			var f = this._get(e, "timepicker");
			if (f) {
				var g, h, i, j, k = null,
					l = null,
					m = null,
					n = f._defaults.evnts,
					o = {};
				if ("string" == typeof b) {
					if ("minDate" === b || "minDateTime" === b) k = c;
					else if ("maxDate" === b || "maxDateTime" === b) l = c;
					else if ("onSelect" === b) m = c;
					else if (n.hasOwnProperty(b)) {
						if ("undefined" == typeof c) return n[b];
						o[b] = c, d = {}
					}
				} else if ("object" == typeof b) {
					b.minDate ? k = b.minDate : b.minDateTime ? k = b.minDateTime : b.maxDate ? l = b.maxDate : b.maxDateTime && (l = b.maxDateTime);
					for (g in n) n.hasOwnProperty(g) && b[g] && (o[g] = b[g])
				}
				for (g in o) o.hasOwnProperty(g) && (n[g] = o[g], d || (d = $.extend({}, b)), delete d[g]);
				if (d && isEmptyObject(d)) return;
				if (k ? (k = 0 === k ? new Date : new Date(k), f._defaults.minDate = k, f._defaults.minDateTime = k) : l ? (l = 0 === l ? new Date : new Date(l), f._defaults.maxDate = l, f._defaults.maxDateTime = l) : m && (f._defaults.onSelect = m), k || l) return j = $(a), i = j.datetimepicker("getDate"), h = this._base_optionDatepicker.call($.datepicker, a, d || b, c), j.datetimepicker("setDate", i), h
			}
			return void 0 === c ? this._base_optionDatepicker.call($.datepicker, a, b) : this._base_optionDatepicker.call($.datepicker, a, d || b, c)
		};
		var isEmptyObject = function(a) {
				var b;
				for (b in a)
					if (a.hasOwnProperty(b)) return !1;
				return !0
			},
			extendRemove = function(a, b) {
				$.extend(a, b);
				for (var c in b)(null === b[c] || void 0 === b[c]) && (a[c] = b[c]);
				return a
			},
			detectSupport = function(a) {
				var b = a.replace(/'.*?'/g, "").toLowerCase(),
					c = function(a, b) {
						return -1 !== a.indexOf(b) ? !0 : !1
					};
				return {
					hour: c(b, "h"),
					minute: c(b, "m"),
					second: c(b, "s"),
					millisec: c(b, "l"),
					microsec: c(b, "c"),
					timezone: c(b, "z"),
					ampm: c(b, "t") && c(a, "h"),
					iso8601: c(a, "Z")
				}
			},
			convert24to12 = function(a) {
				return a %= 12, 0 === a && (a = 12), String(a)
			},
			computeEffectiveSetting = function(a, b) {
				return a && a[b] ? a[b] : $.timepicker._defaults[b]
			},
			splitDateTime = function(a, b) {
				var c = computeEffectiveSetting(b, "separator"),
					d = computeEffectiveSetting(b, "timeFormat"),
					e = d.split(c),
					f = e.length,
					g = a.split(c),
					h = g.length;
				return h > 1 ? {
					dateString: g.splice(0, h - f).join(c),
					timeString: g.splice(0, f).join(c)
				} : {
					dateString: a,
					timeString: ""
				}
			},
			parseDateTimeInternal = function(a, b, c, d, e) {
				var f, g, h;
				if (g = splitDateTime(c, e), f = $.datepicker._base_parseDate(a, g.dateString, d), "" === g.timeString) return {
					date: f
				};
				if (h = $.datepicker.parseTime(b, g.timeString, e), !h) throw "Wrong time format";
				return {
					date: f,
					timeObj: h
				}
			},
			selectLocalTimezone = function(a, b) {
				if (a && a.timezone_select) {
					var c = b || new Date;
					a.timezone_select.val(-c.getTimezoneOffset())
				}
			};
		$.timepicker = new Timepicker, $.timepicker.timezoneOffsetString = function(a, b) {
			if (isNaN(a) || a > 840 || -720 > a) return a;
			var c = a,
				d = c % 60,
				e = (c - d) / 60,
				f = b ? ":" : "",
				g = (c >= 0 ? "+" : "-") + ("0" + Math.abs(e)).slice(-2) + f + ("0" + Math.abs(d)).slice(-2);
			return "+00:00" === g ? "Z" : g
		}, $.timepicker.timezoneOffsetNumber = function(a) {
			var b = a.toString().replace(":", "");
			return "Z" === b.toUpperCase() ? 0 : /^(\-|\+)\d{4}$/.test(b) ? ("-" === b.substr(0, 1) ? -1 : 1) * (60 * parseInt(b.substr(1, 2), 10) + parseInt(b.substr(3, 2), 10)) : parseInt(a, 10)
		}, $.timepicker.timezoneAdjust = function(a, b, c) {
			var d = $.timepicker.timezoneOffsetNumber(b),
				e = $.timepicker.timezoneOffsetNumber(c);
			return isNaN(e) || a.setMinutes(a.getMinutes() + -d - -e), a
		}, $.timepicker.timeRange = function(a, b, c) {
			return $.timepicker.handleRange("timepicker", a, b, c)
		}, $.timepicker.datetimeRange = function(a, b, c) {
			$.timepicker.handleRange("datetimepicker", a, b, c)
		}, $.timepicker.dateRange = function(a, b, c) {
			$.timepicker.handleRange("datepicker", a, b, c)
		}, $.timepicker.handleRange = function(a, b, c, d) {
			function e(e, f) {
				var g = b[a]("getDate"),
					h = c[a]("getDate"),
					i = e[a]("getDate");
				if (null !== g) {
					var j = new Date(g.getTime()),
						k = new Date(g.getTime());
					j.setMilliseconds(j.getMilliseconds() + d.minInterval), k.setMilliseconds(k.getMilliseconds() + d.maxInterval), d.minInterval > 0 && j > h ? c[a]("setDate", j) : d.maxInterval > 0 && h > k ? c[a]("setDate", k) : g > h && f[a]("setDate", i)
				}
			}

			function f(b, c, e) {
				if (b.val()) {
					var f = b[a].call(b, "getDate");
					null !== f && d.minInterval > 0 && ("minDate" === e && f.setMilliseconds(f.getMilliseconds() + d.minInterval), "maxDate" === e && f.setMilliseconds(f.getMilliseconds() - d.minInterval)), f.getTime && c[a].call(c, "option", e, f)
				}
			}
			d = $.extend({}, {
				minInterval: 0,
				maxInterval: 0,
				start: {},
				end: {}
			}, d);
			var g = !1;
			return "timepicker" === a && (g = !0, a = "datetimepicker"), $.fn[a].call(b, $.extend({
				timeOnly: g,
				onClose: function(a, b) {
					e($(this), c)
				},
				onSelect: function(a) {
					f($(this), c, "minDate")
				}
			}, d, d.start)), $.fn[a].call(c, $.extend({
				timeOnly: g,
				onClose: function(a, c) {
					e($(this), b)
				},
				onSelect: function(a) {
					f($(this), b, "maxDate")
				}
			}, d, d.end)), e(b, c), f(b, c, "minDate"), f(c, b, "maxDate"), $([b.get(0), c.get(0)])
		}, $.timepicker.log = function() {
			window.console && window.console.log && window.console.log.apply && window.console.log.apply(window.console, Array.prototype.slice.call(arguments))
		}, $.timepicker._util = {
			_extendRemove: extendRemove,
			_isEmptyObject: isEmptyObject,
			_convert24to12: convert24to12,
			_detectSupport: detectSupport,
			_selectLocalTimezone: selectLocalTimezone,
			_computeEffectiveSetting: computeEffectiveSetting,
			_splitDateTime: splitDateTime,
			_parseDateTimeInternal: parseDateTimeInternal
		}, Date.prototype.getMicroseconds || (Date.prototype.microseconds = 0, Date.prototype.getMicroseconds = function() {
			return this.microseconds
		}, Date.prototype.setMicroseconds = function(a) {
			return this.setMilliseconds(this.getMilliseconds() + Math.floor(a / 1e3)), this.microseconds = a % 1e3, this
		}), $.timepicker.version = "1.6.3"
	}
});
//! moment.js
//! version : 2.16.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
	"use strict";

	function a() {
		return od.apply(null, arguments)
	}
	// This is done to register the method called with moment()
	// without creating circular dependencies.
	function b(a) {
		od = a
	}

	function c(a) {
		return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		// IE8 will treat undefined and null as object if it wasn't for
		// input != null
		return null != a && "[object Object]" === Object.prototype.toString.call(a)
	}

	function e(a) {
		var b;
		for (b in a)
			// even if its not own property I'd still call it non-empty
			return !1;
		return !0
	}

	function f(a) {
		return "number" == typeof value || "[object Number]" === Object.prototype.toString.call(a)
	}

	function g(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}

	function h(a, b) {
		var c, d = [];
		for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
		return d
	}

	function i(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}

	function j(a, b) {
		for (var c in b) i(b, c) && (a[c] = b[c]);
		return i(b, "toString") && (a.toString = b.toString), i(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function k(a, b, c, d) {
		return rb(a, b, c, d, !0).utc()
	}

	function l() {
		// We need to deep clone this object.
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1,
			parsedDateParts: [],
			meridiem: null
		}
	}

	function m(a) {
		return null == a._pf && (a._pf = l()), a._pf
	}

	function n(a) {
		if (null == a._isValid) {
			var b = m(a),
				c = qd.call(b.parsedDateParts, function(a) {
					return null != a
				}),
				d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
			if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
			a._isValid = d
		}
		return a._isValid
	}

	function o(a) {
		var b = k(NaN);
		return null != a ? j(m(b), a) : m(b).userInvalidated = !0, b
	}

	function p(a) {
		return void 0 === a
	}

	function q(a, b) {
		var c, d, e;
		if (p(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), p(b._i) || (a._i = b._i), p(b._f) || (a._f = b._f), p(b._l) || (a._l = b._l), p(b._strict) || (a._strict = b._strict), p(b._tzm) || (a._tzm = b._tzm), p(b._isUTC) || (a._isUTC = b._isUTC), p(b._offset) || (a._offset = b._offset), p(b._pf) || (a._pf = m(b)), p(b._locale) || (a._locale = b._locale), rd.length > 0)
			for (c in rd) d = rd[c], e = b[d], p(e) || (a[d] = e);
		return a
	}
	// Moment prototype object
	function r(b) {
		q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN),
			// Prevent infinite loop in case updateOffset creates new moment
			// objects.
			sd === !1 && (sd = !0, a.updateOffset(this), sd = !1)
	}

	function s(a) {
		return a instanceof r || null != a && null != a._isAMomentObject
	}

	function t(a) {
		return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
	}

	function u(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = t(b)), c
	}
	// compare two arrays, return the number of differences
	function v(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
		return g + f
	}

	function w(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}

	function x(b, c) {
		var d = !0;
		return j(function() {
			if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
				for (var e, f = [], g = 0; g < arguments.length; g++) {
					if (e = "", "object" == typeof arguments[g]) {
						e += "\n[" + g + "] ";
						for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
						e = e.slice(0, -2)
					} else e = arguments[g];
					f.push(e)
				}
				w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
			}
			return c.apply(this, arguments)
		}, c)
	}

	function y(b, c) {
		null != a.deprecationHandler && a.deprecationHandler(b, c), td[b] || (w(c), td[b] = !0)
	}

	function z(a) {
		return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
	}

	function A(a) {
		var b, c;
		for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
		this._config = a,
			// Lenient ordinal parsing accepts just a number in addition to
			// number + (possibly) stuff coming from _ordinalParseLenient.
			this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}

	function B(a, b) {
		var c, e = j({}, a);
		for (c in b) i(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, j(e[c], a[c]), j(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
		for (c in a) i(a, c) && !i(b, c) && d(a[c]) && (
			// make sure changes to properties don't modify parent config
			e[c] = j({}, e[c]));
		return e
	}

	function C(a) {
		null != a && this.set(a)
	}

	function D(a, b, c) {
		var d = this._calendar[a] || this._calendar.sameElse;
		return z(d) ? d.call(b, c) : d
	}

	function E(a) {
		var b = this._longDateFormat[a],
			c = this._longDateFormat[a.toUpperCase()];
		return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
			return a.slice(1)
		}), this._longDateFormat[a])
	}

	function F() {
		return this._invalidDate
	}

	function G(a) {
		return this._ordinal.replace("%d", a)
	}

	function H(a, b, c, d) {
		var e = this._relativeTime[c];
		return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
	}

	function I(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return z(c) ? c(b) : c.replace(/%s/i, b)
	}

	function J(a, b) {
		var c = a.toLowerCase();
		Dd[c] = Dd[c + "s"] = Dd[b] = a
	}

	function K(a) {
		return "string" == typeof a ? Dd[a] || Dd[a.toLowerCase()] : void 0
	}

	function L(a) {
		var b, c, d = {};
		for (c in a) i(a, c) && (b = K(c), b && (d[b] = a[c]));
		return d
	}

	function M(a, b) {
		Ed[a] = b
	}

	function N(a) {
		var b = [];
		for (var c in a) b.push({
			unit: c,
			priority: Ed[c]
		});
		return b.sort(function(a, b) {
			return a.priority - b.priority
		}), b
	}

	function O(b, c) {
		return function(d) {
			return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
		}
	}

	function P(a, b) {
		return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
	}

	function Q(a, b, c) {
		a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}
	// MOMENTS
	function R(a) {
		return a = K(a), z(this[a]) ? this[a]() : this
	}

	function S(a, b) {
		if ("object" == typeof a) {
			a = L(a);
			for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
		} else if (a = K(a), z(this[a])) return this[a](b);
		return this
	}

	function T(a, b, c) {
		var d = "" + Math.abs(a),
			e = b - d.length,
			f = a >= 0;
		return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
	}
	// token:    'M'
	// padded:   ['MM', 2]
	// ordinal:  'Mo'
	// callback: function () { this.month() + 1 }
	function U(a, b, c, d) {
		var e = d;
		"string" == typeof d && (e = function() {
			return this[d]()
		}), a && (Id[a] = e), b && (Id[b[0]] = function() {
			return T(e.apply(this, arguments), b[1], b[2])
		}), c && (Id[c] = function() {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}

	function V(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function W(a) {
		var b, c, d = a.match(Fd);
		for (b = 0, c = d.length; b < c; b++) Id[d[b]] ? d[b] = Id[d[b]] : d[b] = V(d[b]);
		return function(b) {
			var e, f = "";
			for (e = 0; e < c; e++) f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
			return f
		}
	}
	// format date using native date object
	function X(a, b) {
		return a.isValid() ? (b = Y(b, a.localeData()), Hd[b] = Hd[b] || W(b), Hd[b](a)) : a.localeData().invalidDate()
	}

	function Y(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (Gd.lastIndex = 0; d >= 0 && Gd.test(a);) a = a.replace(Gd, c), Gd.lastIndex = 0, d -= 1;
		return a
	}

	function Z(a, b, c) {
		$d[a] = z(b) ? b : function(a, d) {
			return a && c ? c : b
		}
	}

	function $(a, b) {
		return i($d, a) ? $d[a](b._strict, b._locale) : new RegExp(_(a))
	}
	// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	function _(a) {
		return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
			return b || c || d || e
		}))
	}

	function aa(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function ba(a, b) {
		var c, d = b;
		for ("string" == typeof a && (a = [a]), f(b) && (d = function(a, c) {
				c[b] = u(a)
			}), c = 0; c < a.length; c++) _d[a[c]] = d
	}

	function ca(a, b) {
		ba(a, function(a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}

	function da(a, b, c) {
		null != b && i(_d, a) && _d[a](b, c._a, c, a)
	}

	function ea(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function fa(a, b) {
		return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || ke).test(b) ? "format" : "standalone"][a.month()] : this._months
	}

	function ga(a, b) {
		return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[ke.test(b) ? "format" : "standalone"][a.month()] : this._monthsShort
	}

	function ha(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if (!this._monthsParse)
			for (
				// this is not used
				this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = k([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
		return c ? "MMM" === b ? (e = je.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = je.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = je.call(this._shortMonthsParse, g), e !== -1 ? e : (e = je.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = je.call(this._longMonthsParse, g), e !== -1 ? e : (e = je.call(this._shortMonthsParse, g), e !== -1 ? e : null))
	}

	function ia(a, b, c) {
		var d, e, f;
		if (this._monthsParseExact) return ha.call(this, a, b, c);
		// TODO: add sorting
		// Sorting makes sure if one month (or abbr) is a prefix of another
		// see sorting in computeMonthsParse
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
			// test the regex
			if (
				// make the regex if we don't have it already
				e = k([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
			if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
			if (!c && this._monthsParse[d].test(a)) return d
		}
	}
	// MOMENTS
	function ja(a, b) {
		var c;
		if (!a.isValid())
			// No op
			return a;
		if ("string" == typeof b)
			if (/^\d+$/.test(b)) b = u(b);
			else
				// TODO: Another silent failure?
				if (b = a.localeData().monthsParse(b), !f(b)) return a;
		return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
	}

	function ka(b) {
		return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
	}

	function la() {
		return ea(this.year(), this.month())
	}

	function ma(a) {
		return this._monthsParseExact ? (i(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (i(this, "_monthsShortRegex") || (this._monthsShortRegex = ne), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}

	function na(a) {
		return this._monthsParseExact ? (i(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (i(this, "_monthsRegex") || (this._monthsRegex = oe), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
	}

	function oa() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d = [],
			e = [],
			f = [];
		for (b = 0; b < 12; b++)
			// make the regex if we don't have it already
			c = k([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
		for (
			// Sorting makes sure if one month (or abbr) is a prefix of another it
			// will match the longer piece.
			d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
		for (b = 0; b < 24; b++) f[b] = aa(f[b]);
		this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
	}
	// HELPERS
	function pa(a) {
		return qa(a) ? 366 : 365
	}

	function qa(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function ra() {
		return qa(this.year())
	}

	function sa(a, b, c, d, e, f, g) {
		//can't just apply() to create a date:
		//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
		var h = new Date(a, b, c, d, e, f, g);
		//the date constructor remaps years 0-99 to 1900-1999
		return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
	}

	function ta(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		//the Date.UTC function remaps years 0-99 to 1900-1999
		return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
	}
	// start-of-first-week - start-of-year
	function ua(a, b, c) {
		var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
			d = 7 + b - c,
			// first-week day local weekday -- which local weekday is fwd
			e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
		return -e + d - 1
	}
	//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	function va(a, b, c, d, e) {
		var f, g, h = (7 + c - d) % 7,
			i = ua(a, d, e),
			j = 1 + 7 * (b - 1) + h + i;
		return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
			year: f,
			dayOfYear: g
		}
	}

	function wa(a, b, c) {
		var d, e, f = ua(a.year(), b, c),
			g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
		return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
			week: d,
			year: e
		}
	}

	function xa(a, b, c) {
		var d = ua(a, b, c),
			e = ua(a + 1, b, c);
		return (pa(a) - d + e) / 7
	}
	// HELPERS
	// LOCALES
	function ya(a) {
		return wa(a, this._week.dow, this._week.doy).week
	}

	function za() {
		return this._week.dow
	}

	function Aa() {
		return this._week.doy
	}
	// MOMENTS
	function Ba(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ca(a) {
		var b = wa(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}
	// HELPERS
	function Da(a, b) {
		return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
	}

	function Ea(a, b) {
		return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
	}

	function Fa(a, b) {
		return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : this._weekdays
	}

	function Ga(a) {
		return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
	}

	function Ha(a) {
		return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
	}

	function Ia(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if (!this._weekdaysParse)
			for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = k([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
		return c ? "dddd" === b ? (e = je.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = je.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = je.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = je.call(this._weekdaysParse, g), e !== -1 ? e : (e = je.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = je.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = je.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = je.call(this._weekdaysParse, g), e !== -1 ? e : (e = je.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = je.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = je.call(this._weekdaysParse, g), e !== -1 ? e : (e = je.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
	}

	function Ja(a, b, c) {
		var d, e, f;
		if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
			// test the regex
			if (
				// make the regex if we don't have it already
				e = k([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
			if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
			if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
			if (!c && this._weekdaysParse[d].test(a)) return d
		}
	}
	// MOMENTS
	function Ka(a) {
		if (!this.isValid()) return null != a ? this : NaN;
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
	}

	function La(a) {
		if (!this.isValid()) return null != a ? this : NaN;
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}

	function Ma(a) {
		if (!this.isValid()) return null != a ? this : NaN;
		// behaves the same as moment#day except
		// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
		// as a setter, sunday should belong to the previous week.
		if (null != a) {
			var b = Ea(a, this.localeData());
			return this.day(this.day() % 7 ? b : b - 7)
		}
		return this.day() || 7
	}

	function Na(a) {
		return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (i(this, "_weekdaysRegex") || (this._weekdaysRegex = ue), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}

	function Oa(a) {
		return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (i(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ve), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}

	function Pa(a) {
		return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (i(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = we), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}

	function Qa() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d, e, f, g = [],
			h = [],
			i = [],
			j = [];
		for (b = 0; b < 7; b++)
			// make the regex if we don't have it already
			c = k([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
		for (
			// Sorting makes sure if one weekday (or abbr) is a prefix of another it
			// will match the longer piece.
			g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
		this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
	}
	// FORMATTING
	function Ra() {
		return this.hours() % 12 || 12
	}

	function Sa() {
		return this.hours() || 24
	}

	function Ta(a, b) {
		U(a, 0, 0, function() {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}
	// PARSING
	function Ua(a, b) {
		return b._meridiemParse
	}
	// LOCALES
	function Va(a) {
		// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
		// Using charAt should be more compatible.
		return "p" === (a + "").toLowerCase().charAt(0)
	}

	function Wa(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}

	function Xa(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}
	// pick the locale from the array
	// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	function Ya(a) {
		for (var b, c, d, e, f = 0; f < a.length;) {
			for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if (d = Za(e.slice(0, b).join("-"))) return d;
				if (c && c.length >= b && v(e, c, !0) >= b - 1)
					//the next array item is better than a shallower substring of this one
					break;
				b--
			}
			f++
		}
		return null
	}

	function Za(a) {
		var b = null;
		// TODO: Find a better way to register and load all the locales in Node
		if (!Be[a] && "undefined" != typeof module && module && module.exports) try {
			b = xe._abbr, require("./locale/" + a),
				// because defineLocale currently also sets the global locale, we
				// want to undo that for lazy loaded locales
				$a(b)
		} catch (a) {}
		return Be[a]
	}
	// This function will load locale and then set the global locale.  If
	// no arguments are passed in, it will simply return the current global
	// locale key.
	function $a(a, b) {
		var c;
		// moment.duration._locale = moment._locale = data;
		return a && (c = p(b) ? bb(a) : _a(a, b), c && (xe = c)), xe._abbr
	}

	function _a(a, b) {
		if (null !== b) {
			var c = Ae;
			if (b.abbr = a, null != Be[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Be[a]._config;
			else if (null != b.parentLocale) {
				if (null == Be[b.parentLocale]) return Ce[b.parentLocale] || (Ce[b.parentLocale] = []), Ce[b.parentLocale].push({
					name: a,
					config: b
				}), null;
				c = Be[b.parentLocale]._config
			}
			// backwards compat for now: also set the locale
			// make sure we set the locale AFTER all child locales have been
			// created, so we won't end up with the child locale set.
			return Be[a] = new C(B(c, b)), Ce[a] && Ce[a].forEach(function(a) {
				_a(a.name, a.config)
			}), $a(a), Be[a]
		}
		// useful for testing
		return delete Be[a], null
	}

	function ab(a, b) {
		if (null != b) {
			var c, d = Ae;
			// MERGE
			null != Be[a] && (d = Be[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Be[a], Be[a] = c,
				// backwards compat for now: also set the locale
				$a(a)
		} else
			// pass null for config to unupdate, useful for tests
			null != Be[a] && (null != Be[a].parentLocale ? Be[a] = Be[a].parentLocale : null != Be[a] && delete Be[a]);
		return Be[a]
	}
	// returns locale data
	function bb(a) {
		var b;
		if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return xe;
		if (!c(a)) {
			if (
				//short-circuit everything else
				b = Za(a)) return b;
			a = [a]
		}
		return Ya(a)
	}

	function cb() {
		return wd(Be)
	}

	function db(a) {
		var b, c = a._a;
		return c && m(a).overflow === -2 && (b = c[be] < 0 || c[be] > 11 ? be : c[ce] < 1 || c[ce] > ea(c[ae], c[be]) ? ce : c[de] < 0 || c[de] > 24 || 24 === c[de] && (0 !== c[ee] || 0 !== c[fe] || 0 !== c[ge]) ? de : c[ee] < 0 || c[ee] > 59 ? ee : c[fe] < 0 || c[fe] > 59 ? fe : c[ge] < 0 || c[ge] > 999 ? ge : -1, m(a)._overflowDayOfYear && (b < ae || b > ce) && (b = ce), m(a)._overflowWeeks && b === -1 && (b = he), m(a)._overflowWeekday && b === -1 && (b = ie), m(a).overflow = b), a
	}
	// date from iso format
	function eb(a) {
		var b, c, d, e, f, g, h = a._i,
			i = De.exec(h) || Ee.exec(h);
		if (i) {
			for (m(a).iso = !0, b = 0, c = Ge.length; b < c; b++)
				if (Ge[b][1].exec(i[1])) {
					e = Ge[b][0], d = Ge[b][2] !== !1;
					break
				} if (null == e) return void(a._isValid = !1);
			if (i[3]) {
				for (b = 0, c = He.length; b < c; b++)
					if (He[b][1].exec(i[3])) {
						// match[2] should be 'T' or space
						f = (i[2] || " ") + He[b][0];
						break
					} if (null == f) return void(a._isValid = !1)
			}
			if (!d && null != f) return void(a._isValid = !1);
			if (i[4]) {
				if (!Fe.exec(i[4])) return void(a._isValid = !1);
				g = "Z"
			}
			a._f = e + (f || "") + (g || ""), kb(a)
		} else a._isValid = !1
	}
	// date from iso format or fallback
	function fb(b) {
		var c = Ie.exec(b._i);
		return null !== c ? void(b._d = new Date(+c[1])) : (eb(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
	}
	// Pick the first defined of two or three arguments.
	function gb(a, b, c) {
		return null != a ? a : null != b ? b : c
	}

	function hb(b) {
		// hooks is actually the exported moment object
		var c = new Date(a.now());
		return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
	}
	// convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function ib(a) {
		var b, c, d, e, f = [];
		if (!a._d) {
			// Default to current date.
			// * if no year, month, day of month are given, default to today
			// * if day of month is given, default month and year
			// * if month is given, default only year
			// * if year is given, don't default anything
			for (d = hb(a),
				//compute day of the year from weeks and weekdays
				a._w && null == a._a[ce] && null == a._a[be] && jb(a),
				//if the day of the year is set, figure out what it is
				a._dayOfYear && (e = gb(a._a[ae], d[ae]), a._dayOfYear > pa(e) && (m(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[be] = c.getUTCMonth(), a._a[ce] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
			// Zero out whatever was not defaulted, including time
			for (; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			// Check for 24:00:00.000
			24 === a._a[de] && 0 === a._a[ee] && 0 === a._a[fe] && 0 === a._a[ge] && (a._nextDay = !0, a._a[de] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f),
				// Apply timezone offset from input. The actual utcOffset can be changed
				// with parseZone.
				null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[de] = 24)
		}
	}

	function jb(a) {
		var b, c, d, e, f, g, h, i;
		if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4,
			// TODO: We need to take the current isoWeekYear, but that depends on
			// how we interpret now (local, utc, fixed offset). So create
			// a now version of current config (take local/utc/offset flags, and
			// create now).
			c = gb(b.GG, a._a[ae], wa(sb(), 1, 4).year), d = gb(b.W, 1), e = gb(b.E, 1), (e < 1 || e > 7) && (i = !0);
		else {
			f = a._locale._week.dow, g = a._locale._week.doy;
			var j = wa(sb(), f, g);
			c = gb(b.gg, a._a[ae], j.year),
				// Default to current week.
				d = gb(b.w, j.week), null != b.d ? (
					// weekday -- low day numbers are considered next week
					e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (
					// local weekday -- counting starts from begining of week
					e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) :
				// default to begining of week
				e = f
		}
		d < 1 || d > xa(c, f, g) ? m(a)._overflowWeeks = !0 : null != i ? m(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ae] = h.year, a._dayOfYear = h.dayOfYear)
	}
	// date from string and format string
	function kb(b) {
		// TODO: Move this to another part of the creation flow to prevent circular deps
		if (b._f === a.ISO_8601) return void eb(b);
		b._a = [], m(b).empty = !0;
		// This array is used to make a Date, either with `new Date` or `Date.UTC`
		var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			j = 0;
		for (e = Y(b._f, b._locale).match(Fd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0],
			// console.log('token', token, 'parsedInput', parsedInput,
			//         'regex', getParseRegexForToken(token, config));
			d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && m(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length),
			// don't parse if it's not a known token
			Id[f] ? (d ? m(b).empty = !1 : m(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && m(b).unusedTokens.push(f);
		// add remaining unparsed input length to the string
		m(b).charsLeftOver = i - j, h.length > 0 && m(b).unusedInput.push(h),
			// clear _12h flag if hour is <= 12
			b._a[de] <= 12 && m(b).bigHour === !0 && b._a[de] > 0 && (m(b).bigHour = void 0), m(b).parsedDateParts = b._a.slice(0), m(b).meridiem = b._meridiem,
			// handle meridiem
			b._a[de] = lb(b._locale, b._a[de], b._meridiem), ib(b), db(b)
	}

	function lb(a, b, c) {
		var d;
		// Fallback
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
	}
	// date from string and array of format strings
	function mb(a) {
		var b, c, d, e, f;
		if (0 === a._f.length) return m(a).invalidFormat = !0, void(a._d = new Date(NaN));
		for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], kb(b), n(b) && (
			// if there is any input that was not parsed add a penalty for that format
			f += m(b).charsLeftOver,
			//or tokens
			f += 10 * m(b).unusedTokens.length, m(b).score = f, (null == d || f < d) && (d = f, c = b));
		j(a, c || b)
	}

	function nb(a) {
		if (!a._d) {
			var b = L(a._i);
			a._a = h([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
				return a && parseInt(a, 10)
			}), ib(a)
		}
	}

	function ob(a) {
		var b = new r(db(pb(a)));
		// Adding is smart enough around DST
		return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
	}

	function pb(a) {
		var b = a._i,
			d = a._f;
		return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? o({
			nullInput: !0
		}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (g(b) ? a._d = b : c(d) ? mb(a) : d ? kb(a) : qb(a), n(a) || (a._d = null), a))
	}

	function qb(b) {
		var d = b._i;
		void 0 === d ? b._d = new Date(a.now()) : g(d) ? b._d = new Date(d.valueOf()) : "string" == typeof d ? fb(b) : c(d) ? (b._a = h(d.slice(0), function(a) {
				return parseInt(a, 10)
			}), ib(b)) : "object" == typeof d ? nb(b) : f(d) ?
			// from milliseconds
			b._d = new Date(d) : a.createFromInputFallback(b)
	}

	function rb(a, b, f, g, h) {
		var i = {};
		// object construction must be done this way.
		// https://github.com/moment/moment/issues/1423
		return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, ob(i)
	}

	function sb(a, b, c, d) {
		return rb(a, b, c, d, !1)
	}
	// Pick a moment m from moments so that m[fn](other) is true for all
	// other. This relies on the function fn to be transitive.
	//
	// moments should either be an array of moment objects or an array, whose
	// first element is an array of moment objects.
	function tb(a, b) {
		var d, e;
		if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return sb();
		for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
		return d
	}
	// TODO: Use [].sort instead?
	function ub() {
		var a = [].slice.call(arguments, 0);
		return tb("isBefore", a)
	}

	function vb() {
		var a = [].slice.call(arguments, 0);
		return tb("isAfter", a)
	}

	function wb(a) {
		var b = L(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		// representation for dateAddRemove
		this._milliseconds = +k + 1e3 * j + // 1000
			6e4 * i + // 1000 * 60
			1e3 * h * 60 * 60, //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
			// Because of dateAddRemove treats 24 hours as different from a
			// day when working around DST, we need to store them separately
			this._days = +g + 7 * f,
			// It is impossible translate months into days without knowing
			// which months you are are talking about, so we have to store
			// it separately.
			this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
	}

	function xb(a) {
		return a instanceof wb
	}

	function yb(a) {
		return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
	}
	// FORMATTING
	function zb(a, b) {
		U(a, 0, 0, function() {
			var a = this.utcOffset(),
				c = "+";
			return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
		})
	}

	function Ab(a, b) {
		var c = (b || "").match(a);
		if (null === c) return null;
		var d = c[c.length - 1] || [],
			e = (d + "").match(Me) || ["-", 0, 0],
			f = +(60 * e[1]) + u(e[2]);
		return 0 === f ? 0 : "+" === e[0] ? f : -f
	}
	// Return a moment from input, that is local/utc/zone equivalent to model.
	function Bb(b, c) {
		var d, e;
		// Use low-level api, because this fn is low-level api.
		return c._isUTC ? (d = c.clone(), e = (s(b) || g(b) ? b.valueOf() : sb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : sb(b).local()
	}

	function Cb(a) {
		// On Firefox.24 Date#getTimezoneOffset returns a floating point.
		// https://github.com/moment/moment/pull/1871
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}
	// MOMENTS
	// keepLocalTime = true means only change the timezone, without
	// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	// +0200, so we adjust the time as needed, to be valid.
	//
	// Keeping the time actually adds/subtracts (one hour)
	// from the actual represented time. That is why we call updateOffset
	// a second time. In case it wants us to change the offset again
	// _changeInProgress == true case, then we have to adjust, because
	// there is no such time in the given timezone.
	function Db(b, c) {
		var d, e = this._offset || 0;
		if (!this.isValid()) return null != b ? this : NaN;
		if (null != b) {
			if ("string" == typeof b) {
				if (b = Ab(Xd, b), null === b) return this
			} else Math.abs(b) < 16 && (b = 60 * b);
			return !this._isUTC && c && (d = Cb(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? Tb(this, Ob(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
		}
		return this._isUTC ? e : Cb(this)
	}

	function Eb(a, b) {
		return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}

	function Fb(a) {
		return this.utcOffset(0, a)
	}

	function Gb(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Cb(this), "m")), this
	}

	function Hb() {
		if (null != this._tzm) this.utcOffset(this._tzm);
		else if ("string" == typeof this._i) {
			var a = Ab(Wd, this._i);
			null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
		}
		return this
	}

	function Ib(a) {
		return !!this.isValid() && (a = a ? sb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
	}

	function Jb() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Kb() {
		if (!p(this._isDSTShifted)) return this._isDSTShifted;
		var a = {};
		if (q(a, this), a = pb(a), a._a) {
			var b = a._isUTC ? k(a._a) : sb(a._a);
			this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
		} else this._isDSTShifted = !1;
		return this._isDSTShifted
	}

	function Lb() {
		return !!this.isValid() && !this._isUTC
	}

	function Mb() {
		return !!this.isValid() && this._isUTC
	}

	function Nb() {
		return !!this.isValid() && (this._isUTC && 0 === this._offset)
	}

	function Ob(a, b) {
		var c, d, e, g = a,
			// matching against regexp is expensive, do it on demand
			h = null; // checks for null or undefined
		return xb(a) ? g = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : f(a) ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Ne.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: 0,
			d: u(h[ce]) * c,
			h: u(h[de]) * c,
			m: u(h[ee]) * c,
			s: u(h[fe]) * c,
			ms: u(yb(1e3 * h[ge])) * c
		}) : (h = Oe.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: Pb(h[2], c),
			M: Pb(h[3], c),
			w: Pb(h[4], c),
			d: Pb(h[5], c),
			h: Pb(h[6], c),
			m: Pb(h[7], c),
			s: Pb(h[8], c)
		}) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = Rb(sb(g.from), sb(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new wb(g), xb(a) && i(a, "_locale") && (d._locale = a._locale), d
	}

	function Pb(a, b) {
		// We'd normally use ~~inp for this, but unfortunately it also
		// converts floats to ints.
		// inp may be undefined, so careful calling replace on it.
		var c = a && parseFloat(a.replace(",", "."));
		// apply sign while we're at it
		return (isNaN(c) ? 0 : c) * b
	}

	function Qb(a, b) {
		var c = {
			milliseconds: 0,
			months: 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function Rb(a, b) {
		var c;
		return a.isValid() && b.isValid() ? (b = Bb(b, a), a.isBefore(b) ? c = Qb(a, b) : (c = Qb(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
			milliseconds: 0,
			months: 0
		}
	}
	// TODO: remove 'name' arg after deprecation is removed
	function Sb(a, b) {
		return function(c, d) {
			var e, f;
			//invert the arguments, but complain about it
			return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ob(c, d), Tb(this, e, a), this
		}
	}

	function Tb(b, c, d, e) {
		var f = c._milliseconds,
			g = yb(c._days),
			h = yb(c._months);
		b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
	}

	function Ub(a, b) {
		var c = a.diff(b, "days", !0);
		return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
	}

	function Vb(b, c) {
		// We want to compare the start of today, vs this.
		// Getting start-of-today depends on whether we're local/utc/offset or not.
		var d = b || sb(),
			e = Bb(d, this).startOf("day"),
			f = a.calendarFormat(this, e) || "sameElse",
			g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
		return this.format(g || this.localeData().calendar(f, this, sb(d)))
	}

	function Wb() {
		return new r(this)
	}

	function Xb(a, b) {
		var c = s(a) ? a : sb(a);
		return !(!this.isValid() || !c.isValid()) && (b = K(p(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
	}

	function Yb(a, b) {
		var c = s(a) ? a : sb(a);
		return !(!this.isValid() || !c.isValid()) && (b = K(p(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
	}

	function Zb(a, b, c, d) {
		return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
	}

	function $b(a, b) {
		var c, d = s(a) ? a : sb(a);
		return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
	}

	function _b(a, b) {
		return this.isSame(a, b) || this.isAfter(a, b)
	}

	function ac(a, b) {
		return this.isSame(a, b) || this.isBefore(a, b)
	}

	function bc(a, b, c) {
		var d, e, f, g; // 1000
		// 1000 * 60
		// 1000 * 60 * 60
		// 1000 * 60 * 60 * 24, negate dst
		// 1000 * 60 * 60 * 24 * 7, negate dst
		return this.isValid() ? (d = Bb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = cc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
	}

	function cc(a, b) {
		// difference in months
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			// b is in (anchor - 1 month, anchor + 1 month)
			f = a.clone().add(e, "months");
		//check for negative zero, return zero if negative zero
		// linear across the month
		// linear across the month
		return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
	}

	function dc() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function ec() {
		var a = this.clone().utc();
		return 0 < a.year() && a.year() <= 9999 ? z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}
	/**
	 * Return a human readable representation of a moment that can
	 * also be evaluated to get a new moment which is the same
	 *
	 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
	 */
	function fc() {
		if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
		var a = "moment",
			b = "";
		this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
		var c = "[" + a + '("]',
			d = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
			e = "-MM-DD[T]HH:mm:ss.SSS",
			f = b + '[")]';
		return this.format(c + d + e + f)
	}

	function gc(b) {
		b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
		var c = X(this, b);
		return this.localeData().postformat(c)
	}

	function hc(a, b) {
		return this.isValid() && (s(a) && a.isValid() || sb(a).isValid()) ? Ob({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function ic(a) {
		return this.from(sb(), a)
	}

	function jc(a, b) {
		return this.isValid() && (s(a) && a.isValid() || sb(a).isValid()) ? Ob({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function kc(a) {
		return this.to(sb(), a)
	}
	// If passed a locale key, it will set the locale for this
	// instance.  Otherwise, it will return the locale configuration
	// variables for this instance.
	function lc(a) {
		var b;
		return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
	}

	function mc() {
		return this._locale
	}

	function nc(a) {
		// the following switch intentionally omits break keywords
		// to utilize falling through the cases.
		switch (a = K(a)) {
			case "year":
				this.month(0); /* falls through */
			case "quarter":
			case "month":
				this.date(1); /* falls through */
			case "week":
			case "isoWeek":
			case "day":
			case "date":
				this.hours(0); /* falls through */
			case "hour":
				this.minutes(0); /* falls through */
			case "minute":
				this.seconds(0); /* falls through */
			case "second":
				this.milliseconds(0)
		}
		// weeks are a special case
		// quarters are also special
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function oc(a) {
		// 'date' is an alias for 'day', so it should be considered as such.
		return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
	}

	function pc() {
		return this._d.valueOf() - 6e4 * (this._offset || 0)
	}

	function qc() {
		return Math.floor(this.valueOf() / 1e3)
	}

	function rc() {
		return new Date(this.valueOf())
	}

	function sc() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}

	function tc() {
		var a = this;
		return {
			years: a.year(),
			months: a.month(),
			date: a.date(),
			hours: a.hours(),
			minutes: a.minutes(),
			seconds: a.seconds(),
			milliseconds: a.milliseconds()
		}
	}

	function uc() {
		// new Date(NaN).toJSON() === null
		return this.isValid() ? this.toISOString() : null
	}

	function vc() {
		return n(this)
	}

	function wc() {
		return j({}, m(this))
	}

	function xc() {
		return m(this).overflow
	}

	function yc() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		}
	}

	function zc(a, b) {
		U(0, [a, a.length], 0, b)
	}
	// MOMENTS
	function Ac(a) {
		return Ec.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}

	function Bc(a) {
		return Ec.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
	}

	function Cc() {
		return xa(this.year(), 1, 4)
	}

	function Dc() {
		var a = this.localeData()._week;
		return xa(this.year(), a.dow, a.doy)
	}

	function Ec(a, b, c, d, e) {
		var f;
		return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Fc.call(this, a, b, c, d, e))
	}

	function Fc(a, b, c, d, e) {
		var f = va(a, b, c, d, e),
			g = ta(f.year, 0, f.dayOfYear);
		return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
	}
	// MOMENTS
	function Gc(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}
	// HELPERS
	// MOMENTS
	function Hc(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == a ? b : this.add(a - b, "d")
	}

	function Ic(a, b) {
		b[ge] = u(1e3 * ("0." + a))
	}
	// MOMENTS
	function Jc() {
		return this._isUTC ? "UTC" : ""
	}

	function Kc() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Lc(a) {
		return sb(1e3 * a)
	}

	function Mc() {
		return sb.apply(null, arguments).parseZone()
	}

	function Nc(a) {
		return a
	}

	function Oc(a, b, c, d) {
		var e = bb(),
			f = k().set(d, b);
		return e[c](f, a)
	}

	function Pc(a, b, c) {
		if (f(a) && (b = a, a = void 0), a = a || "", null != b) return Oc(a, b, c, "month");
		var d, e = [];
		for (d = 0; d < 12; d++) e[d] = Oc(a, d, c, "month");
		return e
	}
	// ()
	// (5)
	// (fmt, 5)
	// (fmt)
	// (true)
	// (true, 5)
	// (true, fmt, 5)
	// (true, fmt)
	function Qc(a, b, c, d) {
		"boolean" == typeof a ? (f(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, f(b) && (c = b, b = void 0), b = b || "");
		var e = bb(),
			g = a ? e._week.dow : 0;
		if (null != c) return Oc(b, (c + g) % 7, d, "day");
		var h, i = [];
		for (h = 0; h < 7; h++) i[h] = Oc(b, (h + g) % 7, d, "day");
		return i
	}

	function Rc(a, b) {
		return Pc(a, b, "months")
	}

	function Sc(a, b) {
		return Pc(a, b, "monthsShort")
	}

	function Tc(a, b, c) {
		return Qc(a, b, c, "weekdays")
	}

	function Uc(a, b, c) {
		return Qc(a, b, c, "weekdaysShort")
	}

	function Vc(a, b, c) {
		return Qc(a, b, c, "weekdaysMin")
	}

	function Wc() {
		var a = this._data;
		return this._milliseconds = Ze(this._milliseconds), this._days = Ze(this._days), this._months = Ze(this._months), a.milliseconds = Ze(a.milliseconds), a.seconds = Ze(a.seconds), a.minutes = Ze(a.minutes), a.hours = Ze(a.hours), a.months = Ze(a.months), a.years = Ze(a.years), this
	}

	function Xc(a, b, c, d) {
		var e = Ob(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}
	// supports only 2.0-style add(1, 's') or add(duration)
	function Yc(a, b) {
		return Xc(this, a, b, 1)
	}
	// supports only 2.0-style subtract(1, 's') or subtract(duration)
	function Zc(a, b) {
		return Xc(this, a, b, -1)
	}

	function $c(a) {
		return a < 0 ? Math.floor(a) : Math.ceil(a)
	}

	function _c() {
		var a, b, c, d, e, f = this._milliseconds,
			g = this._days,
			h = this._months,
			i = this._data;
		// if we have a mix of positive and negative values, bubble down first
		// check: https://github.com/moment/moment/issues/2166
		// The following code bubbles up values, see the tests for
		// examples of what that means.
		// convert days to months
		// 12 months -> 1 year
		return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * $c(bd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ad(g)), h += e, g -= $c(bd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
	}

	function ad(a) {
		// 400 years have 146097 days (taking into account leap year rules)
		// 400 years have 12 months === 4800
		return 4800 * a / 146097
	}

	function bd(a) {
		// the reverse of daysToMonths
		return 146097 * a / 4800
	}

	function cd(a) {
		var b, c, d = this._milliseconds;
		if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ad(b), "month" === a ? c : c / 12;
		switch (
			// handle milliseconds separately because of floating point math errors (issue #1867)
			b = this._days + Math.round(bd(this._months)), a) {
			case "week":
				return b / 7 + d / 6048e5;
			case "day":
				return b + d / 864e5;
			case "hour":
				return 24 * b + d / 36e5;
			case "minute":
				return 1440 * b + d / 6e4;
			case "second":
				return 86400 * b + d / 1e3;
				// Math.floor prevents floating point math errors here
			case "millisecond":
				return Math.floor(864e5 * b) + d;
			default:
				throw new Error("Unknown unit " + a)
		}
	}
	// TODO: Use this.as('ms')?
	function dd() {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12)
	}

	function ed(a) {
		return function() {
			return this.as(a)
		}
	}

	function fd(a) {
		return a = K(a), this[a + "s"]()
	}

	function gd(a) {
		return function() {
			return this._data[a]
		}
	}

	function hd() {
		return t(this.days() / 7)
	}
	// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function id(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function jd(a, b, c) {
		var d = Ob(a).abs(),
			e = of(d.as("s")),
			f = of(d.as("m")),
			g = of(d.as("h")),
			h = of(d.as("d")),
			i = of(d.as("M")),
			j = of(d.as("y")),
			k = e < pf.s && ["s", e] || f <= 1 && ["m"] || f < pf.m && ["mm", f] || g <= 1 && ["h"] || g < pf.h && ["hh", g] || h <= 1 && ["d"] || h < pf.d && ["dd", h] || i <= 1 && ["M"] || i < pf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, id.apply(null, k)
	}
	// This function allows you to set the rounding function for relative time strings
	function kd(a) {
		return void 0 === a ? of : "function" == typeof a && (of = a, !0)
	}
	// This function allows you to set a threshold for relative time strings
	function ld(a, b) {
		return void 0 !== pf[a] && (void 0 === b ? pf[a] : (pf[a] = b, !0))
	}

	function md(a) {
		var b = this.localeData(),
			c = jd(this, !a, b);
		return a && (c = b.pastFuture(+this, c)), b.postformat(c)
	}

	function nd() {
		// for ISO strings we do not use the normal bubbling rules:
		//  * milliseconds bubble up until they become hours
		//  * days do not bubble at all
		//  * months bubble up until they become years
		// This is because there is no context-free conversion between hours and days
		// (think of clock changes)
		// and also not between days and months (28-31 days per month)
		var a, b, c, d = qf(this._milliseconds) / 1e3,
			e = qf(this._days),
			f = qf(this._months);
		// 3600 seconds -> 60 minutes -> 1 hour
		a = t(d / 60), b = t(a / 60), d %= 60, a %= 60,
			// 12 months -> 1 year
			c = t(f / 12), f %= 12;
		// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
		var g = c,
			h = f,
			i = e,
			j = b,
			k = a,
			l = d,
			m = this.asSeconds();
		return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
	}
	var od, pd;
	pd = Array.prototype.some ? Array.prototype.some : function(a) {
		for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
			if (d in b && a.call(this, b[d], d, b)) return !0;
		return !1
	};
	var qd = pd,
		rd = a.momentProperties = [],
		sd = !1,
		td = {};
	a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
	var ud;
	ud = Object.keys ? Object.keys : function(a) {
		var b, c = [];
		for (b in a) i(a, b) && c.push(b);
		return c
	};
	var vd, wd = ud,
		xd = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		yd = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		},
		zd = "Invalid date",
		Ad = "%d",
		Bd = /\d{1,2}/,
		Cd = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		Dd = {},
		Ed = {},
		Fd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		Gd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Hd = {},
		Id = {},
		Jd = /\d/,
		Kd = /\d\d/,
		Ld = /\d{3}/,
		Md = /\d{4}/,
		Nd = /[+-]?\d{6}/,
		Od = /\d\d?/,
		Pd = /\d\d\d\d?/,
		Qd = /\d\d\d\d\d\d?/,
		Rd = /\d{1,3}/,
		Sd = /\d{1,4}/,
		Td = /[+-]?\d{1,6}/,
		Ud = /\d+/,
		Vd = /[+-]?\d+/,
		Wd = /Z|[+-]\d\d:?\d\d/gi,
		Xd = /Z|[+-]\d\d(?::?\d\d)?/gi,
		Yd = /[+-]?\d+(\.\d{1,3})?/,
		Zd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		$d = {},
		_d = {},
		ae = 0,
		be = 1,
		ce = 2,
		de = 3,
		ee = 4,
		fe = 5,
		ge = 6,
		he = 7,
		ie = 8;
	vd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
		// I know
		var b;
		for (b = 0; b < this.length; ++b)
			if (this[b] === a) return b;
		return -1
	};
	var je = vd;
	// FORMATTING
	U("M", ["MM", 2], "Mo", function() {
			return this.month() + 1
		}), U("MMM", 0, 0, function(a) {
			return this.localeData().monthsShort(this, a)
		}), U("MMMM", 0, 0, function(a) {
			return this.localeData().months(this, a)
		}),
		// ALIASES
		J("month", "M"),
		// PRIORITY
		M("month", 8),
		// PARSING
		Z("M", Od), Z("MM", Od, Kd), Z("MMM", function(a, b) {
			return b.monthsShortRegex(a)
		}), Z("MMMM", function(a, b) {
			return b.monthsRegex(a)
		}), ba(["M", "MM"], function(a, b) {
			b[be] = u(a) - 1
		}), ba(["MMM", "MMMM"], function(a, b, c, d) {
			var e = c._locale.monthsParse(a, d, c._strict);
			// if we didn't find a month name, mark the date as invalid.
			null != e ? b[be] = e : m(c).invalidMonth = a
		});
	// LOCALES
	var ke = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		le = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		me = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		ne = Zd,
		oe = Zd;
	// FORMATTING
	U("Y", 0, 0, function() {
			var a = this.year();
			return a <= 9999 ? "" + a : "+" + a
		}), U(0, ["YY", 2], 0, function() {
			return this.year() % 100
		}), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"),
		// ALIASES
		J("year", "y"),
		// PRIORITIES
		M("year", 1),
		// PARSING
		Z("Y", Vd), Z("YY", Od, Kd), Z("YYYY", Sd, Md), Z("YYYYY", Td, Nd), Z("YYYYYY", Td, Nd), ba(["YYYYY", "YYYYYY"], ae), ba("YYYY", function(b, c) {
			c[ae] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
		}), ba("YY", function(b, c) {
			c[ae] = a.parseTwoDigitYear(b)
		}), ba("Y", function(a, b) {
			b[ae] = parseInt(a, 10)
		}),
		// HOOKS
		a.parseTwoDigitYear = function(a) {
			return u(a) + (u(a) > 68 ? 1900 : 2e3)
		};
	// MOMENTS
	var pe = O("FullYear", !0);
	// FORMATTING
	U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"),
		// ALIASES
		J("week", "w"), J("isoWeek", "W"),
		// PRIORITIES
		M("week", 5), M("isoWeek", 5),
		// PARSING
		Z("w", Od), Z("ww", Od, Kd), Z("W", Od), Z("WW", Od, Kd), ca(["w", "ww", "W", "WW"], function(a, b, c, d) {
			b[d.substr(0, 1)] = u(a)
		});
	var qe = {
		dow: 0, // Sunday is the first day of the week.
		doy: 6
	};
	// FORMATTING
	U("d", 0, "do", "day"), U("dd", 0, 0, function(a) {
			return this.localeData().weekdaysMin(this, a)
		}), U("ddd", 0, 0, function(a) {
			return this.localeData().weekdaysShort(this, a)
		}), U("dddd", 0, 0, function(a) {
			return this.localeData().weekdays(this, a)
		}), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"),
		// ALIASES
		J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"),
		// PRIORITY
		M("day", 11), M("weekday", 11), M("isoWeekday", 11),
		// PARSING
		Z("d", Od), Z("e", Od), Z("E", Od), Z("dd", function(a, b) {
			return b.weekdaysMinRegex(a)
		}), Z("ddd", function(a, b) {
			return b.weekdaysShortRegex(a)
		}), Z("dddd", function(a, b) {
			return b.weekdaysRegex(a)
		}), ca(["dd", "ddd", "dddd"], function(a, b, c, d) {
			var e = c._locale.weekdaysParse(a, d, c._strict);
			// if we didn't get a weekday name, mark the date as invalid
			null != e ? b.d = e : m(c).invalidWeekday = a
		}), ca(["d", "e", "E"], function(a, b, c, d) {
			b[d] = u(a)
		});
	// LOCALES
	var re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		se = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		te = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		ue = Zd,
		ve = Zd,
		we = Zd;
	U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function() {
			return "" + Ra.apply(this) + T(this.minutes(), 2)
		}), U("hmmss", 0, 0, function() {
			return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
		}), U("Hmm", 0, 0, function() {
			return "" + this.hours() + T(this.minutes(), 2)
		}), U("Hmmss", 0, 0, function() {
			return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
		}), Ta("a", !0), Ta("A", !1),
		// ALIASES
		J("hour", "h"),
		// PRIORITY
		M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Od), Z("h", Od), Z("HH", Od, Kd), Z("hh", Od, Kd), Z("hmm", Pd), Z("hmmss", Qd), Z("Hmm", Pd), Z("Hmmss", Qd), ba(["H", "HH"], de), ba(["a", "A"], function(a, b, c) {
			c._isPm = c._locale.isPM(a), c._meridiem = a
		}), ba(["h", "hh"], function(a, b, c) {
			b[de] = u(a), m(c).bigHour = !0
		}), ba("hmm", function(a, b, c) {
			var d = a.length - 2;
			b[de] = u(a.substr(0, d)), b[ee] = u(a.substr(d)), m(c).bigHour = !0
		}), ba("hmmss", function(a, b, c) {
			var d = a.length - 4,
				e = a.length - 2;
			b[de] = u(a.substr(0, d)), b[ee] = u(a.substr(d, 2)), b[fe] = u(a.substr(e)), m(c).bigHour = !0
		}), ba("Hmm", function(a, b, c) {
			var d = a.length - 2;
			b[de] = u(a.substr(0, d)), b[ee] = u(a.substr(d))
		}), ba("Hmmss", function(a, b, c) {
			var d = a.length - 4,
				e = a.length - 2;
			b[de] = u(a.substr(0, d)), b[ee] = u(a.substr(d, 2)), b[fe] = u(a.substr(e))
		});
	var xe, ye = /[ap]\.?m?\.?/i,
		ze = O("Hours", !0),
		Ae = {
			calendar: xd,
			longDateFormat: yd,
			invalidDate: zd,
			ordinal: Ad,
			ordinalParse: Bd,
			relativeTime: Cd,
			months: le,
			monthsShort: me,
			week: qe,
			weekdays: re,
			weekdaysMin: te,
			weekdaysShort: se,
			meridiemParse: ye
		},
		Be = {},
		Ce = {},
		De = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Ee = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Fe = /Z|[+-]\d\d(?::?\d\d)?/,
		Ge = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
			["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
			["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
			["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
			["YYYY-DDD", /\d{4}-\d{3}/],
			["YYYY-MM", /\d{4}-\d\d/, !1],
			["YYYYYYMMDD", /[+-]\d{10}/],
			["YYYYMMDD", /\d{8}/],
			// YYYYMM is NOT allowed by the standard
			["GGGG[W]WWE", /\d{4}W\d{3}/],
			["GGGG[W]WW", /\d{4}W\d{2}/, !1],
			["YYYYDDD", /\d{7}/]
		],
		He = [
			["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
			["HH:mm:ss", /\d\d:\d\d:\d\d/],
			["HH:mm", /\d\d:\d\d/],
			["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
			["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
			["HHmmss", /\d\d\d\d\d\d/],
			["HHmm", /\d\d\d\d/],
			["HH", /\d\d/]
		],
		Ie = /^\/?Date\((\-?\d+)/i;
	a.createFromInputFallback = x("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
			a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
		}),
		// constant that refers to the ISO standard
		a.ISO_8601 = function() {};
	var Je = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
			var a = sb.apply(null, arguments);
			return this.isValid() && a.isValid() ? a < this ? this : a : o()
		}),
		Ke = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
			var a = sb.apply(null, arguments);
			return this.isValid() && a.isValid() ? a > this ? this : a : o()
		}),
		Le = function() {
			return Date.now ? Date.now() : +new Date
		};
	zb("Z", ":"), zb("ZZ", ""),
		// PARSING
		Z("Z", Xd), Z("ZZ", Xd), ba(["Z", "ZZ"], function(a, b, c) {
			c._useUTC = !0, c._tzm = Ab(Xd, a)
		});
	// HELPERS
	// timezone chunker
	// '+10:00' > ['10',  '00']
	// '-1530'  > ['-15', '30']
	var Me = /([\+\-]|\d\d)/gi;
	// HOOKS
	// This function will be called whenever a moment is mutated.
	// It is intended to keep the offset in sync with the timezone.
	a.updateOffset = function() {};
	// ASP.NET json date format regex
	var Ne = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
		Oe = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	Ob.fn = wb.prototype;
	var Pe = Sb(1, "add"),
		Qe = Sb(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var Re = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
		return void 0 === a ? this.localeData() : this.locale(a)
	});
	// FORMATTING
	U(0, ["gg", 2], 0, function() {
			return this.weekYear() % 100
		}), U(0, ["GG", 2], 0, function() {
			return this.isoWeekYear() % 100
		}), zc("gggg", "weekYear"), zc("ggggg", "weekYear"), zc("GGGG", "isoWeekYear"), zc("GGGGG", "isoWeekYear"),
		// ALIASES
		J("weekYear", "gg"), J("isoWeekYear", "GG"),
		// PRIORITY
		M("weekYear", 1), M("isoWeekYear", 1),
		// PARSING
		Z("G", Vd), Z("g", Vd), Z("GG", Od, Kd), Z("gg", Od, Kd), Z("GGGG", Sd, Md), Z("gggg", Sd, Md), Z("GGGGG", Td, Nd), Z("ggggg", Td, Nd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
			b[d.substr(0, 2)] = u(a)
		}), ca(["gg", "GG"], function(b, c, d, e) {
			c[e] = a.parseTwoDigitYear(b)
		}),
		// FORMATTING
		U("Q", 0, "Qo", "quarter"),
		// ALIASES
		J("quarter", "Q"),
		// PRIORITY
		M("quarter", 7),
		// PARSING
		Z("Q", Jd), ba("Q", function(a, b) {
			b[be] = 3 * (u(a) - 1)
		}),
		// FORMATTING
		U("D", ["DD", 2], "Do", "date"),
		// ALIASES
		J("date", "D"),
		// PRIOROITY
		M("date", 9),
		// PARSING
		Z("D", Od), Z("DD", Od, Kd), Z("Do", function(a, b) {
			return a ? b._ordinalParse : b._ordinalParseLenient
		}), ba(["D", "DD"], ce), ba("Do", function(a, b) {
			b[ce] = u(a.match(Od)[0], 10)
		});
	// MOMENTS
	var Se = O("Date", !0);
	// FORMATTING
	U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
		// ALIASES
		J("dayOfYear", "DDD"),
		// PRIORITY
		M("dayOfYear", 4),
		// PARSING
		Z("DDD", Rd), Z("DDDD", Ld), ba(["DDD", "DDDD"], function(a, b, c) {
			c._dayOfYear = u(a)
		}),
		// FORMATTING
		U("m", ["mm", 2], 0, "minute"),
		// ALIASES
		J("minute", "m"),
		// PRIORITY
		M("minute", 14),
		// PARSING
		Z("m", Od), Z("mm", Od, Kd), ba(["m", "mm"], ee);
	// MOMENTS
	var Te = O("Minutes", !1);
	// FORMATTING
	U("s", ["ss", 2], 0, "second"),
		// ALIASES
		J("second", "s"),
		// PRIORITY
		M("second", 15),
		// PARSING
		Z("s", Od), Z("ss", Od, Kd), ba(["s", "ss"], fe);
	// MOMENTS
	var Ue = O("Seconds", !1);
	// FORMATTING
	U("S", 0, 0, function() {
			return ~~(this.millisecond() / 100)
		}), U(0, ["SS", 2], 0, function() {
			return ~~(this.millisecond() / 10)
		}), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
			return 10 * this.millisecond()
		}), U(0, ["SSSSS", 5], 0, function() {
			return 100 * this.millisecond()
		}), U(0, ["SSSSSS", 6], 0, function() {
			return 1e3 * this.millisecond()
		}), U(0, ["SSSSSSS", 7], 0, function() {
			return 1e4 * this.millisecond()
		}), U(0, ["SSSSSSSS", 8], 0, function() {
			return 1e5 * this.millisecond()
		}), U(0, ["SSSSSSSSS", 9], 0, function() {
			return 1e6 * this.millisecond()
		}),
		// ALIASES
		J("millisecond", "ms"),
		// PRIORITY
		M("millisecond", 16),
		// PARSING
		Z("S", Rd, Jd), Z("SS", Rd, Kd), Z("SSS", Rd, Ld);
	var Ve;
	for (Ve = "SSSS"; Ve.length <= 9; Ve += "S") Z(Ve, Ud);
	for (Ve = "S"; Ve.length <= 9; Ve += "S") ba(Ve, Ic);
	// MOMENTS
	var We = O("Milliseconds", !1);
	// FORMATTING
	U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
	var Xe = r.prototype;
	Xe.add = Pe, Xe.calendar = Vb, Xe.clone = Wb, Xe.diff = bc, Xe.endOf = oc, Xe.format = gc, Xe.from = hc, Xe.fromNow = ic, Xe.to = jc, Xe.toNow = kc, Xe.get = R, Xe.invalidAt = xc, Xe.isAfter = Xb, Xe.isBefore = Yb, Xe.isBetween = Zb, Xe.isSame = $b, Xe.isSameOrAfter = _b, Xe.isSameOrBefore = ac, Xe.isValid = vc, Xe.lang = Re, Xe.locale = lc, Xe.localeData = mc, Xe.max = Ke, Xe.min = Je, Xe.parsingFlags = wc, Xe.set = S, Xe.startOf = nc, Xe.subtract = Qe, Xe.toArray = sc, Xe.toObject = tc, Xe.toDate = rc, Xe.toISOString = ec, Xe.inspect = fc, Xe.toJSON = uc, Xe.toString = dc, Xe.unix = qc, Xe.valueOf = pc, Xe.creationData = yc,
		// Year
		Xe.year = pe, Xe.isLeapYear = ra,
		// Week Year
		Xe.weekYear = Ac, Xe.isoWeekYear = Bc,
		// Quarter
		Xe.quarter = Xe.quarters = Gc,
		// Month
		Xe.month = ka, Xe.daysInMonth = la,
		// Week
		Xe.week = Xe.weeks = Ba, Xe.isoWeek = Xe.isoWeeks = Ca, Xe.weeksInYear = Dc, Xe.isoWeeksInYear = Cc,
		// Day
		Xe.date = Se, Xe.day = Xe.days = Ka, Xe.weekday = La, Xe.isoWeekday = Ma, Xe.dayOfYear = Hc,
		// Hour
		Xe.hour = Xe.hours = ze,
		// Minute
		Xe.minute = Xe.minutes = Te,
		// Second
		Xe.second = Xe.seconds = Ue,
		// Millisecond
		Xe.millisecond = Xe.milliseconds = We,
		// Offset
		Xe.utcOffset = Db, Xe.utc = Fb, Xe.local = Gb, Xe.parseZone = Hb, Xe.hasAlignedHourOffset = Ib, Xe.isDST = Jb, Xe.isLocal = Lb, Xe.isUtcOffset = Mb, Xe.isUtc = Nb, Xe.isUTC = Nb,
		// Timezone
		Xe.zoneAbbr = Jc, Xe.zoneName = Kc,
		// Deprecations
		Xe.dates = x("dates accessor is deprecated. Use date instead.", Se), Xe.months = x("months accessor is deprecated. Use month instead", ka), Xe.years = x("years accessor is deprecated. Use year instead", pe), Xe.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Eb), Xe.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Kb);
	var Ye = C.prototype;
	Ye.calendar = D, Ye.longDateFormat = E, Ye.invalidDate = F, Ye.ordinal = G, Ye.preparse = Nc, Ye.postformat = Nc, Ye.relativeTime = H, Ye.pastFuture = I, Ye.set = A,
		// Month
		Ye.months = fa, Ye.monthsShort = ga, Ye.monthsParse = ia, Ye.monthsRegex = na, Ye.monthsShortRegex = ma,
		// Week
		Ye.week = ya, Ye.firstDayOfYear = Aa, Ye.firstDayOfWeek = za,
		// Day of Week
		Ye.weekdays = Fa, Ye.weekdaysMin = Ha, Ye.weekdaysShort = Ga, Ye.weekdaysParse = Ja, Ye.weekdaysRegex = Na, Ye.weekdaysShortRegex = Oa, Ye.weekdaysMinRegex = Pa,
		// Hours
		Ye.isPM = Va, Ye.meridiem = Wa, $a("en", {
			ordinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function(a) {
				var b = a % 10,
					c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			}
		}),
		// Side effect imports
		a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
	var Ze = Math.abs,
		$e = ed("ms"),
		_e = ed("s"),
		af = ed("m"),
		bf = ed("h"),
		cf = ed("d"),
		df = ed("w"),
		ef = ed("M"),
		ff = ed("y"),
		gf = gd("milliseconds"),
		hf = gd("seconds"),
		jf = gd("minutes"),
		kf = gd("hours"),
		lf = gd("days"),
		mf = gd("months"),
		nf = gd("years"),
		of = Math.round,
		pf = {
			s: 45, // seconds to minute
			m: 45, // minutes to hour
			h: 22, // hours to day
			d: 26, // days to month
			M: 11
		},
		qf = Math.abs,
		rf = wb.prototype;
	// Deprecations
	// Side effect imports
	// FORMATTING
	// PARSING
	// Side effect imports
	return rf.abs = Wc, rf.add = Yc, rf.subtract = Zc, rf.as = cd, rf.asMilliseconds = $e, rf.asSeconds = _e, rf.asMinutes = af, rf.asHours = bf, rf.asDays = cf, rf.asWeeks = df, rf.asMonths = ef, rf.asYears = ff, rf.valueOf = dd, rf._bubble = _c, rf.get = fd, rf.milliseconds = gf, rf.seconds = hf, rf.minutes = jf, rf.hours = kf, rf.days = lf, rf.weeks = hd, rf.months = mf, rf.years = nf, rf.humanize = md, rf.toISOString = nd, rf.toString = nd, rf.toJSON = nd, rf.locale = lc, rf.localeData = mc, rf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", nd), rf.lang = Re, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Vd), Z("X", Yd), ba("X", function(a, b, c) {
		c._d = new Date(1e3 * parseFloat(a, 10))
	}), ba("x", function(a, b, c) {
		c._d = new Date(u(a))
	}), a.version = "2.16.0", b(sb), a.fn = Xe, a.min = ub, a.max = vb, a.now = Le, a.utc = k, a.unix = Lc, a.months = Rc, a.isDate = g, a.locale = $a, a.invalid = o, a.duration = Ob, a.isMoment = s, a.weekdays = Tc, a.parseZone = Mc, a.localeData = bb, a.isDuration = xb, a.monthsShort = Sc, a.weekdaysMin = Vc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Uc, a.normalizeUnits = K, a.relativeTimeRounding = kd, a.relativeTimeThreshold = ld, a.calendarFormat = Ub, a.prototype = Xe, a
});
$(() => {
	window.onAjaxRequestSuccess = n => {
		registerPopup({
			content: n.message,
			onClose: () => {
				if (n.status === !0) {
					const i = window.location.pathname.toLowerCase();
					let t = n.url;
					i.startsWith("/desktop") && (t = n.desktopUrl);
					i.startsWith("/mobile") && (t = n.mobileUrl);
					window.location.href = t
				}
			}
		})
	}, window.onAjaxRequestBegin = () => {
		const n = document.querySelectorAll(".btn-primary");
		$(n).prop("disabled", !0)
	}, window.onAjaxRequestComplete = () => {
		const n = document.querySelectorAll(".btn-primary");
		$(n).prop("disabled", !1)
	}
});
! function() {
	const n = document.querySelectorAll(".js_live_chat_link");
	n.forEach(n => {
		n.onclick = () => {
			if (window.chatbot && window.chatbot.maximize) {
				window.chatbot.maximize();
				return
			}
			if (n.dataset.url) {
				window.open(n.dataset.url, "live-chat");
				return
			}
			if (window.Tawk_API && window.Tawk_API.maximize) {
				window.Tawk_API.maximize();
				return
			}
			if (window.LC_API && window.LC_API.open_chat_window) {
				window.LC_API.open_chat_window();
				return
			}
			if (window.zE && window.zE.activate) {
				window.zE.activate({
					hideOnClose: !1
				});
				return
			}
			if (window.beacon && window.beacon.chat && window.beacon.chat.showChatCtrl) {
				window.beacon.chat.showChatCtrl();
				return
			}
		}
	})
}();
$(() => {
	window.changeLanguage = n => {
		const t = new Date,
			i = t.setTime(t.getTime() + 6048e5),
			r = [`language=${n}`, `expires=${new Date(i)}`, `path=/`, `SameSite=Strict`];
		document.cookie = r.join(";");
		location.reload()
	};
	const n = document.querySelector("#language_selector_trigger");
	if (n) {
		const t = document.querySelectorAll(".language_selector");
		n.onclick = () => {
			if (!n.dataset.active) {
				n.dataset.active = !0;
				return
			}
			n.dataset.active = !JSON.parse(n.dataset.active)
		};
		Array.prototype.slice.call(t).forEach(t => {
			t.onclick = () => {
				if (t.dataset.language === n.dataset.language) {
					n.dataset.active = !1;
					return
				}
				window.changeLanguage(t.dataset.language)
			}
		})
	}
});
$(() => {
	const i = new Set,
		n = () => {
			i.forEach(n => n.close()), i.clear()
		};
	window.closeWindows = n;
	window.closeWindowsAndIframe = () => {
		n();
		const t = document.querySelector("#game_iframe");
		t && (window.location = "/home")
	};
	window.openPopup = (t, r) => {
		n();
		const u = screen.availWidth / 1.5,
			f = screen.availHeight / 1.5,
			e = parseInt(screen.availWidth / 2 - u / 2, 10),
			o = parseInt(screen.availHeight / 2 - f / 2, 10),
			s = "width=" + u + ",height=" + f + ",status,resizable,left=" + e + ",top=" + o + "screenX=" + e + ",screenY=" + o;
		i.add(window.open(t, r, s))
	};
	window.openNewTab = (t, r) => {
		n(), i.add(window.open(t, r))
	};
	window.dispatchInternally = t => {
		n(), window.location = t
	};
	const t = document.querySelector("#popup_modal"),
		s = document.querySelector("#popup_modal_title"),
		u = document.querySelector("#popup_modal_body"),
		f = document.querySelector("#popup_modal_dismiss_button"),
		e = document.querySelector("#popup_modal_cancel_button"),
		r = document.querySelector("#popup_modal_confirm_button"),
		o = [];
	window.registerPopup = ({
		content: n,
		title: c,
		onClose: i,
		onConfirm: h
	}) => {
		t.dataset.title = c || "", s.innerText = c || "", u.innerHTML = n, f.style.display = "", e.style.display = "none", r.style.display = "none", r.onclick = null, i && o.push(i), h && (f.style.display = "none", e.style.display = "", r.style.display = "", r.onclick = h), $(t).modal("show")
	};
	$(t).on("hidden.bs.modal", () => {
		const n = o.pop();
		n && n()
	});
	u.childElementCount > 0 && ($(t).modal("show"), t.style.display = "block")
});
$(() => {
	const n = document.querySelectorAll(".expiration_countdown"),
		t = Array.prototype.slice.call(n).map(n => {
			const t = {
				time: (Date.parse(n.dataset.expirationDate) - Date.now()) / 1e3,
				elements: {
					seconds: n.querySelector('[data-value="seconds"]'),
					minutes: n.querySelector('[data-value="minutes"]'),
					hours: n.querySelector('[data-value="hours"]'),
					days: n.querySelector('[data-value="days"]')
				}
			};
			return t.update = () => {
				t.time -= 1;
				const n = t.time < 0 ? 0 : t.time,
					i = n / 60,
					r = i / 60,
					u = r / 24;
				t.elements.seconds.innerText = Math.floor(n % 60).toString().padStart(2, "0");
				t.elements.minutes.innerText = Math.floor(i % 60).toString().padStart(2, "0");
				t.elements.hours.innerText = Math.floor(r % 24).toString().padStart(2, "0");
				t.elements.days.innerText = Math.floor(u).toString().padStart(2, "0")
			}, t
		});
	setInterval(() => {
		t.forEach(n => n.update())
	}, 1e3)
});
$(() => {
	const n = ({
		button: n,
		image: t
	}) => {
		n && t && (n.onclick = () => {
			let i = "/captcha/refresh";
			n.dataset.captchaOrigin && (i += "/" + n.dataset.captchaOrigin);
			t.src = `${i}?${Math.random()}`
		})
	};
	n({
		button: document.querySelector("#refresh_captcha_button"),
		image: document.querySelector("#captcha_image")
	});
	const t = document.querySelectorAll(".captcha_container");
	Array.prototype.slice.call(t).forEach(t => {
		n({
			button: t.querySelector(".refresh_captcha_button"),
			image: t.querySelector(".captcha_image")
		})
	})
});
$(() => {
	window.readCookie = n => {
		const t = document.cookie.split(";");
		for (let i = 0; i < t.length; i += 1) {
			const [r, u] = t[i].split("=");
			if (r.trim() === n.trim()) return u
		}
		return null
	}, window.writeCookie = (n, t) => {
		const i = new Date;
		i.setMonth(i.getMonth() + 1);
		document.cookie = `${n}=${t||""}; Path=/; expires=${i.toUTCString()};`
	}
});
/*! Bootstrap Carousel Swipe jQuery plugin v1.1 | https://github.com/maaaaark/bcSwipe | MIT License */
! function(t) {
	t.fn.bcSwipe = function(e) {
		var n = {
			threshold: 50
		};
		return e && t.extend(n, e), this.each(function() {
			function e(t) {
				1 == t.touches.length && (u = t.touches[0].pageX, c = !0, this.addEventListener("touchmove", i, !1))
			}

			function i(e) {
				if (c) {
					var i = e.touches[0].pageX,
						r = u - i;
					if (Math.abs(r) >= n.threshold) {
						if (h(), o(t(this))) return;
						r > 0 ? t(this).carousel("next") : t(this).carousel("prev")
					}
				}
			}

			function o(t) {
				return t.find(".item.active").length < 1
			}

			function h() {
				this.removeEventListener("touchmove", i), u = null, c = !1
			}
			var u, c = !1;
			"ontouchstart" in document.documentElement && this.addEventListener("touchstart", e, !1)
		}), this
	}
}(jQuery);
// $(() => {
// 	const t = 6e4,
// 		n = async i => {
// 			setTimeout(async () => {
// 				await window.$.ajax({
// 					type: "POST",
// 					url: "/session/online",
// 					contentType: "application/json; charset=utf-8",
// 					dataType: "json",
// 					success: function(n) {
// 						if (n.closeCurrentGame && window.closeWindowsAndIframe(), n.logout) {
// 							registerPopup({
// 								content: n.message,
// 								onClose: function() {
// 									window.location = "/home"
// 								}
// 							});
// 							return
// 						}
// 					},
// 					error: function(n) {
// 						const t = n.getResponseHeader("Redirect-Reason");
// 						n.status === 200 && t && (window.closeWindows(), window.location.href = "/home/" + t)
// 					}
// 				}), n()
// 			}, i || t)
// 		};
// 	n(5e3)
// });
/*!
 * Intro.js v7.0.1
 * https://introjs.com
 *
 * Copyright (C) 2012-2023 Afshin Mehrabani (@afshinmeh).
 * https://introjs.com
 *
 * Date: Sat, 25 Mar 2023 14:24:34 GMT
 */
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).introJs = e()
}(this, (function() {
	"use strict";

	function t() {
		t = function() {
			return e
		};
		var e = {},
			n = Object.prototype,
			r = n.hasOwnProperty,
			i = Object.defineProperty || function(t, e, n) {
				t[e] = n.value
			},
			o = "function" == typeof Symbol ? Symbol : {},
			a = o.iterator || "@@iterator",
			s = o.asyncIterator || "@@asyncIterator",
			l = o.toStringTag || "@@toStringTag";

		function c(t, e, n) {
			return Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), t[e]
		}
		try {
			c({}, "")
		} catch (t) {
			c = function(t, e, n) {
				return t[e] = n
			}
		}

		function u(t, e, n, r) {
			var o = e && e.prototype instanceof f ? e : f,
				a = Object.create(o.prototype),
				s = new j(r || []);
			return i(a, "_invoke", {
				value: x(t, n, s)
			}), a
		}

		function h(t, e, n) {
			try {
				return {
					type: "normal",
					arg: t.call(e, n)
				}
			} catch (t) {
				return {
					type: "throw",
					arg: t
				}
			}
		}
		e.wrap = u;
		var p = {};

		function f() {}

		function d() {}

		function m() {}
		var b = {};
		c(b, a, (function() {
			return this
		}));
		var v = Object.getPrototypeOf,
			y = v && v(v(A([])));
		y && y !== n && r.call(y, a) && (b = y);
		var g = m.prototype = f.prototype = Object.create(b);

		function w(t) {
			["next", "throw", "return"].forEach((function(e) {
				c(t, e, (function(t) {
					return this._invoke(e, t)
				}))
			}))
		}

		function _(t, e) {
			function n(i, o, a, s) {
				var l = h(t[i], t, o);
				if ("throw" !== l.type) {
					var c = l.arg,
						u = c.value;
					return u && "object" == typeof u && r.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
						n("next", t, a, s)
					}), (function(t) {
						n("throw", t, a, s)
					})) : e.resolve(u).then((function(t) {
						c.value = t, a(c)
					}), (function(t) {
						return n("throw", t, a, s)
					}))
				}
				s(l.arg)
			}
			var o;
			i(this, "_invoke", {
				value: function(t, r) {
					function i() {
						return new e((function(e, i) {
							n(t, r, e, i)
						}))
					}
					return o = o ? o.then(i, i) : i()
				}
			})
		}

		function x(t, e, n) {
			var r = "suspendedStart";
			return function(i, o) {
				if ("executing" === r) throw new Error("Generator is already running");
				if ("completed" === r) {
					if ("throw" === i) throw o;
					return E()
				}
				for (n.method = i, n.arg = o;;) {
					var a = n.delegate;
					if (a) {
						var s = k(a, n);
						if (s) {
							if (s === p) continue;
							return s
						}
					}
					if ("next" === n.method) n.sent = n._sent = n.arg;
					else if ("throw" === n.method) {
						if ("suspendedStart" === r) throw r = "completed", n.arg;
						n.dispatchException(n.arg)
					} else "return" === n.method && n.abrupt("return", n.arg);
					r = "executing";
					var l = h(t, e, n);
					if ("normal" === l.type) {
						if (r = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
						return {
							value: l.arg,
							done: n.done
						}
					}
					"throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
				}
			}
		}

		function k(t, e) {
			var n = t.iterator[e.method];
			if (void 0 === n) {
				if (e.delegate = null, "throw" === e.method) {
					if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return p;
					e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return p
			}
			var r = h(n, t.iterator, e.arg);
			if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, p;
			var i = r.arg;
			return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, p) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
		}

		function C(t) {
			var e = {
				tryLoc: t[0]
			};
			1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
		}

		function S(t) {
			var e = t.completion || {};
			e.type = "normal", delete e.arg, t.completion = e
		}

		function j(t) {
			this.tryEntries = [{
				tryLoc: "root"
			}], t.forEach(C, this), this.reset(!0)
		}

		function A(t) {
			if (t) {
				var e = t[a];
				if (e) return e.call(t);
				if ("function" == typeof t.next) return t;
				if (!isNaN(t.length)) {
					var n = -1,
						i = function e() {
							for (; ++n < t.length;)
								if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
							return e.value = void 0, e.done = !0, e
						};
					return i.next = i
				}
			}
			return {
				next: E
			}
		}

		function E() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = m, i(g, "constructor", {
			value: m,
			configurable: !0
		}), i(m, "constructor", {
			value: d,
			configurable: !0
		}), d.displayName = c(m, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
			var e = "function" == typeof t && t.constructor;
			return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
		}, e.mark = function(t) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, c(t, l, "GeneratorFunction")), t.prototype = Object.create(g), t
		}, e.awrap = function(t) {
			return {
				__await: t
			}
		}, w(_.prototype), c(_.prototype, s, (function() {
			return this
		})), e.AsyncIterator = _, e.async = function(t, n, r, i, o) {
			void 0 === o && (o = Promise);
			var a = new _(u(t, n, r, i), o);
			return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
				return t.done ? t.value : a.next()
			}))
		}, w(g), c(g, l, "Generator"), c(g, a, (function() {
			return this
		})), c(g, "toString", (function() {
			return "[object Generator]"
		})), e.keys = function(t) {
			var e = Object(t),
				n = [];
			for (var r in e) n.push(r);
			return n.reverse(),
				function t() {
					for (; n.length;) {
						var r = n.pop();
						if (r in e) return t.value = r, t.done = !1, t
					}
					return t.done = !0, t
				}
		}, e.values = A, j.prototype = {
			constructor: j,
			reset: function(t) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
					for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
			},
			stop: function() {
				this.done = !0;
				var t = this.tryEntries[0].completion;
				if ("throw" === t.type) throw t.arg;
				return this.rval
			},
			dispatchException: function(t) {
				if (this.done) throw t;
				var e = this;

				function n(n, r) {
					return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
				}
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var o = this.tryEntries[i],
						a = o.completion;
					if ("root" === o.tryLoc) return n("end");
					if (o.tryLoc <= this.prev) {
						var s = r.call(o, "catchLoc"),
							l = r.call(o, "finallyLoc");
						if (s && l) {
							if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
							if (this.prev < o.finallyLoc) return n(o.finallyLoc)
						} else if (s) {
							if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
						} else {
							if (!l) throw new Error("try statement without catch or finally");
							if (this.prev < o.finallyLoc) return n(o.finallyLoc)
						}
					}
				}
			},
			abrupt: function(t, e) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var i = this.tryEntries[n];
					if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
						var o = i;
						break
					}
				}
				o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
				var a = o ? o.completion : {};
				return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
			},
			complete: function(t, e) {
				if ("throw" === t.type) throw t.arg;
				return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
			},
			finish: function(t) {
				for (var e = this.tryEntries.length - 1; e >= 0; --e) {
					var n = this.tryEntries[e];
					if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), p
				}
			},
			catch: function(t) {
				for (var e = this.tryEntries.length - 1; e >= 0; --e) {
					var n = this.tryEntries[e];
					if (n.tryLoc === t) {
						var r = n.completion;
						if ("throw" === r.type) {
							var i = r.arg;
							S(n)
						}
						return i
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(t, e, n) {
				return this.delegate = {
					iterator: A(t),
					resultName: e,
					nextLoc: n
				}, "next" === this.method && (this.arg = void 0), p
			}
		}, e
	}

	function e(t) {
		return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		}, e(t)
	}

	function n(t, e, n, r, i, o, a) {
		try {
			var s = t[o](a),
				l = s.value
		} catch (t) {
			return void n(t)
		}
		s.done ? e(l) : Promise.resolve(l).then(r, i)
	}

	function r(t) {
		return function() {
			var e = this,
				r = arguments;
			return new Promise((function(i, o) {
				var a = t.apply(e, r);

				function s(t) {
					n(a, i, o, s, l, "next", t)
				}

				function l(t) {
					n(a, i, o, s, l, "throw", t)
				}
				s(void 0)
			}))
		}
	}

	function i(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function o(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	function a(t, e) {
		return function(t) {
			if (Array.isArray(t)) return t
		}(t) || function(t, e) {
			var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
			if (null == n) return;
			var r, i, o = [],
				a = !0,
				s = !1;
			try {
				for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
			} catch (t) {
				s = !0, i = t
			} finally {
				try {
					a || null == n.return || n.return()
				} finally {
					if (s) throw i
				}
			}
			return o
		}(t, e) || function(t, e) {
			if (!t) return;
			if ("string" == typeof t) return s(t, e);
			var n = Object.prototype.toString.call(t).slice(8, -1);
			"Object" === n && t.constructor && (n = t.constructor.name);
			if ("Map" === n || "Set" === n) return Array.from(t);
			if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(t, e)
		}(t, e) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function s(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}
	var l, c = (l = {}, function(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "introjs-stamp";
		return l[e] = l[e] || 0, void 0 === t[e] && (t[e] = l[e]++), t[e]
	});

	function u(t, e, n) {
		if (t)
			for (var r = 0, i = t.length; r < i; r++) e(t[r], r);
		"function" == typeof n && n()
	}
	var h = new function() {
		var t = "introjs_event";
		this._id = function(t, e, n) {
			return t + c(e) + (n ? "_".concat(c(n)) : "")
		}, this.on = function(e, n, r, i, o) {
			var a = this._id.apply(this, [n, r, i]),
				s = function(t) {
					return r.call(i || e, t || window.event)
				};
			"addEventListener" in e ? e.addEventListener(n, s, o) : "attachEvent" in e && e.attachEvent("on".concat(n), s), e[t] = e[t] || {}, e[t][a] = s
		}, this.off = function(e, n, r, i, o) {
			var a = this._id.apply(this, [n, r, i]),
				s = e[t] && e[t][a];
			s && ("removeEventListener" in e ? e.removeEventListener(n, s, o) : "detachEvent" in e && e.detachEvent("on".concat(n), s), e[t][a] = null)
		}
	};

	function p(t, e) {
		if (t instanceof SVGElement) {
			var n = t.getAttribute("class") || "";
			n.match(e) || t.setAttribute("class", "".concat(n, " ").concat(e))
		} else {
			if (void 0 !== t.classList) u(e.split(" "), (function(e) {
				t.classList.add(e)
			}));
			else t.className.match(e) || (t.className += " ".concat(e))
		}
	}

	function f(t, e) {
		var n = "";
		return "currentStyle" in t ? n = t.currentStyle[e] : document.defaultView && document.defaultView.getComputedStyle && (n = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)), n && n.toLowerCase ? n.toLowerCase() : n
	}

	function d(t) {
		p(t, "introjs-showElement");
		var e = f(t, "position");
		"absolute" !== e && "relative" !== e && "sticky" !== e && "fixed" !== e && p(t, "introjs-relativePosition")
	}

	function m(t) {
		if (this._options.scrollToElement) {
			var e = function(t) {
				var e = window.getComputedStyle(t),
					n = "absolute" === e.position,
					r = /(auto|scroll)/;
				if ("fixed" === e.position) return document.body;
				for (var i = t; i = i.parentElement;)
					if (e = window.getComputedStyle(i), (!n || "static" !== e.position) && r.test(e.overflow + e.overflowY + e.overflowX)) return i;
				return document.body
			}(t);
			e !== document.body && (e.scrollTop = t.offsetTop - e.offsetTop)
		}
	}

	function b() {
		if (void 0 !== window.innerWidth) return {
			width: window.innerWidth,
			height: window.innerHeight
		};
		var t = document.documentElement;
		return {
			width: t.clientWidth,
			height: t.clientHeight
		}
	}

	function v(t, e, n) {
		var r;
		if ("off" !== t && (this._options.scrollToElement && (r = "tooltip" === t ? n.getBoundingClientRect() : e.getBoundingClientRect(), ! function(t) {
				var e = t.getBoundingClientRect();
				return e.top >= 0 && e.left >= 0 && e.bottom + 80 <= window.innerHeight && e.right <= window.innerWidth
			}(e)))) {
			var i = b().height;
			r.bottom - (r.bottom - r.top) < 0 || e.clientHeight > i ? window.scrollBy(0, r.top - (i / 2 - r.height / 2) - this._options.scrollPadding) : window.scrollBy(0, r.top - (i / 2 - r.height / 2) + this._options.scrollPadding)
		}
	}

	function y(t) {
		t.setAttribute("role", "button"), t.tabIndex = 0
	}

	function g(t) {
		var e = t.parentElement;
		return !(!e || "HTML" === e.nodeName) && ("fixed" === f(t, "position") || g(e))
	}

	function w(t, e) {
		var n = document.body,
			r = document.documentElement,
			i = window.pageYOffset || r.scrollTop || n.scrollTop,
			o = window.pageXOffset || r.scrollLeft || n.scrollLeft;
		e = e || n;
		var a = t.getBoundingClientRect(),
			s = e.getBoundingClientRect(),
			l = f(e, "position"),
			c = {
				width: a.width,
				height: a.height
			};
		return "body" !== e.tagName.toLowerCase() && "relative" === l || "sticky" === l ? Object.assign(c, {
			top: a.top - s.top,
			left: a.left - s.left
		}) : g(t) ? Object.assign(c, {
			top: a.top,
			left: a.left
		}) : Object.assign(c, {
			top: a.top + i,
			left: a.left + o
		})
	}

	function _(t, e) {
		if (t instanceof SVGElement) {
			var n = t.getAttribute("class") || "";
			t.setAttribute("class", n.replace(e, "").replace(/^\s+|\s+$/g, ""))
		} else t.className = t.className.replace(e, "").replace(/^\s+|\s+$/g, "")
	}

	function x(t, e) {
		var n = "";
		if (t.style.cssText && (n += t.style.cssText), "string" == typeof e) n += e;
		else
			for (var r in e) n += "".concat(r, ":").concat(e[r], ";");
		t.style.cssText = n
	}

	function k(t) {
		if (t) {
			if (!this._introItems[this._currentStep]) return;
			var e = this._introItems[this._currentStep],
				n = w(e.element, this._targetElement),
				r = this._options.helperElementPadding;
			g(e.element) ? p(t, "introjs-fixedTooltip") : _(t, "introjs-fixedTooltip"), "floating" === e.position && (r = 0), x(t, {
				width: "".concat(n.width + r, "px"),
				height: "".concat(n.height + r, "px"),
				top: "".concat(n.top - r / 2, "px"),
				left: "".concat(n.left - r / 2, "px")
			})
		}
	}

	function C(t, e, n, r, i) {
		return t.left + e + n.width > r.width ? (i.style.left = "".concat(r.width - n.width - t.left, "px"), !1) : (i.style.left = "".concat(e, "px"), !0)
	}

	function S(t, e, n, r) {
		return t.left + t.width - e - n.width < 0 ? (r.style.left = "".concat(-t.left, "px"), !1) : (r.style.right = "".concat(e, "px"), !0)
	}

	function j(t, e) {
		t.includes(e) && t.splice(t.indexOf(e), 1)
	}

	function A(t, e, n) {
		var r = this._options.positionPrecedence.slice(),
			i = b(),
			o = w(e).height + 10,
			a = w(e).width + 20,
			s = t.getBoundingClientRect(),
			l = "floating";
		s.bottom + o > i.height && j(r, "bottom"), s.top - o < 0 && j(r, "top"), s.right + a > i.width && j(r, "right"), s.left - a < 0 && j(r, "left");
		var c, u, h = -1 !== (u = (c = n || "").indexOf("-")) ? c.substr(u) : "";
		return n && (n = n.split("-")[0]), r.length && (l = r.includes(n) ? n : r[0]), ["top", "bottom"].includes(l) && (l += function(t, e, n, r) {
			var i = e / 2,
				o = Math.min(n, window.screen.width),
				a = ["-left-aligned", "-middle-aligned", "-right-aligned"];
			return o - t < e && j(a, "-left-aligned"), (t < i || o - t < i) && j(a, "-middle-aligned"), t < e && j(a, "-right-aligned"), a.length ? a.includes(r) ? r : a[0] : "-middle-aligned"
		}(s.left, a, i.width, h)), l
	}

	function E(t, e, n, r) {
		var i, o, a, s, l, c = "";
		if (r = r || !1, e.style.top = null, e.style.right = null, e.style.bottom = null, e.style.left = null, e.style.marginLeft = null, e.style.marginTop = null, n.style.display = "inherit", this._introItems[this._currentStep]) {
			c = "string" == typeof(i = this._introItems[this._currentStep]).tooltipClass ? i.tooltipClass : this._options.tooltipClass, e.className = ["introjs-tooltip", c].filter(Boolean).join(" "), e.setAttribute("role", "dialog"), "floating" !== (l = this._introItems[this._currentStep].position) && this._options.autoPosition && (l = A.call(this, t, e, l)), a = w(t), o = w(e), s = b(), p(e, "introjs-".concat(l));
			var u = a.width / 2 - o.width / 2;
			switch (l) {
				case "top-right-aligned":
					n.className = "introjs-arrow bottom-right";
					var h = 0;
					S(a, h, o, e), e.style.bottom = "".concat(a.height + 20, "px");
					break;
				case "top-middle-aligned":
					n.className = "introjs-arrow bottom-middle", r && (u += 5), S(a, u, o, e) && (e.style.right = null, C(a, u, o, s, e)), e.style.bottom = "".concat(a.height + 20, "px");
					break;
				case "top-left-aligned":
				case "top":
					n.className = "introjs-arrow bottom", C(a, r ? 0 : 15, o, s, e), e.style.bottom = "".concat(a.height + 20, "px");
					break;
				case "right":
					e.style.left = "".concat(a.width + 20, "px"), a.top + o.height > s.height ? (n.className = "introjs-arrow left-bottom", e.style.top = "-".concat(o.height - a.height - 20, "px")) : n.className = "introjs-arrow left";
					break;
				case "left":
					r || !0 !== this._options.showStepNumbers || (e.style.top = "15px"), a.top + o.height > s.height ? (e.style.top = "-".concat(o.height - a.height - 20, "px"), n.className = "introjs-arrow right-bottom") : n.className = "introjs-arrow right", e.style.right = "".concat(a.width + 20, "px");
					break;
				case "floating":
					n.style.display = "none", e.style.left = "50%", e.style.top = "50%", e.style.marginLeft = "-".concat(o.width / 2, "px"), e.style.marginTop = "-".concat(o.height / 2, "px");
					break;
				case "bottom-right-aligned":
					n.className = "introjs-arrow top-right", S(a, h = 0, o, e), e.style.top = "".concat(a.height + 20, "px");
					break;
				case "bottom-middle-aligned":
					n.className = "introjs-arrow top-middle", r && (u += 5), S(a, u, o, e) && (e.style.right = null, C(a, u, o, s, e)), e.style.top = "".concat(a.height + 20, "px");
					break;
				default:
					n.className = "introjs-arrow top", C(a, 0, o, s, e), e.style.top = "".concat(a.height + 20, "px")
			}
		}
	}

	function N() {
		u(Array.from(document.querySelectorAll(".introjs-showElement")), (function(t) {
			_(t, /introjs-[a-zA-Z]+/g)
		}))
	}

	function L(t, e) {
		var n = document.createElement(t);
		e = e || {};
		var r = /^(?:role|data-|aria-)/;
		for (var i in e) {
			var o = e[i];
			"style" === i ? x(n, o) : i.match(r) ? n.setAttribute(i, o) : n[i] = o
		}
		return n
	}

	function T(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
		if (n) {
			var r = e.style.opacity || "1";
			x(e, {
				opacity: "0"
			}), window.setTimeout((function() {
				x(e, {
					opacity: r
				})
			}), 10)
		}
		t.appendChild(e)
	}

	function I() {
		return parseInt(this._currentStep + 1, 10) / this._introItems.length * 100
	}

	function P() {
		var t = document.querySelector(".introjs-disableInteraction");
		null === t && (t = L("div", {
			className: "introjs-disableInteraction"
		}), this._targetElement.appendChild(t)), k.call(this, t)
	}

	function q(t) {
		var e = this,
			n = L("div", {
				className: "introjs-bullets"
			});
		!1 === this._options.showBullets && (n.style.display = "none");
		var r = L("ul");
		r.setAttribute("role", "tablist");
		var i = function() {
			e.goToStep(this.getAttribute("data-step-number"))
		};
		return u(this._introItems, (function(e, n) {
			var o = e.step,
				a = L("li"),
				s = L("a");
			a.setAttribute("role", "presentation"), s.setAttribute("role", "tab"), s.onclick = i, n === t.step - 1 && (s.className = "active"), y(s), s.innerHTML = "&nbsp;", s.setAttribute("data-step-number", o), a.appendChild(s), r.appendChild(a)
		})), n.appendChild(r), n
	}

	function O(t) {
		if (this._options.showBullets) {
			var e = document.querySelector(".introjs-bullets");
			e && e.parentNode.replaceChild(q.call(this, t), e)
		}
	}

	function B(t, e) {
		this._options.showBullets && (t.querySelector(".introjs-bullets li > a.active").className = "", t.querySelector('.introjs-bullets li > a[data-step-number="'.concat(e.step, '"]')).className = "active")
	}

	function H() {
		var t = L("div");
		t.className = "introjs-progress", !1 === this._options.showProgress && (t.style.display = "none");
		var e = L("div", {
			className: "introjs-progressbar"
		});
		return this._options.progressBarAdditionalClass && (e.className += " " + this._options.progressBarAdditionalClass), e.setAttribute("role", "progress"), e.setAttribute("aria-valuemin", "0"), e.setAttribute("aria-valuemax", "100"), e.setAttribute("aria-valuenow", I.call(this)), e.style.cssText = "width:".concat(I.call(this), "%;"), t.appendChild(e), t
	}

	function R(t) {
		t.querySelector(".introjs-progress .introjs-progressbar").style.cssText = "width:".concat(I.call(this), "%;"), t.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow", I.call(this))
	}

	function M(t) {
		return F.apply(this, arguments)
	}

	function F() {
		return (F = r(t().mark((function e(n) {
			var i, o, a, s, l, c, u, h, f, b, g, w, _, C, S, j, A, I, O, M, F, D, G, V, z, Y = this;
			return t().wrap((function(e) {
				for (;;) switch (e.prev = e.next) {
					case 0:
						if (void 0 === this._introChangeCallback) {
							e.next = 3;
							break
						}
						return e.next = 3, this._introChangeCallback.call(this, n.element);
					case 3:
						if (i = this, o = document.querySelector(".introjs-helperLayer"), a = document.querySelector(".introjs-tooltipReferenceLayer"), s = "introjs-helperLayer", "string" == typeof n.highlightClass && (s += " ".concat(n.highlightClass)), "string" == typeof this._options.highlightClass && (s += " ".concat(this._options.highlightClass)), null !== o && null !== a ? (h = a.querySelector(".introjs-helperNumberLayer"), f = a.querySelector(".introjs-tooltiptext"), b = a.querySelector(".introjs-tooltip-title"), g = a.querySelector(".introjs-arrow"), w = a.querySelector(".introjs-tooltip"), u = a.querySelector(".introjs-skipbutton"), c = a.querySelector(".introjs-prevbutton"), l = a.querySelector(".introjs-nextbutton"), o.className = s, w.style.opacity = "0", w.style.display = "none", m.call(i, n.element), k.call(i, o), k.call(i, a), N(), i._lastShowElementTimer && window.clearTimeout(i._lastShowElementTimer), i._lastShowElementTimer = window.setTimeout((function() {
								null !== h && (h.innerHTML = "".concat(n.step, " ").concat(Y._options.stepNumbersOfLabel, " ").concat(Y._introItems.length)), f.innerHTML = n.intro, b.innerHTML = n.title, w.style.display = "block", E.call(i, n.element, w, g), B.call(i, a, n), R.call(i, a), w.style.opacity = "1", (null != l && /introjs-donebutton/gi.test(l.className) || null != l) && l.focus(), v.call(i, n.scrollTo, n.element, f)
							}), 350)) : (_ = L("div", {
								className: s
							}), C = L("div", {
								className: "introjs-tooltipReferenceLayer"
							}), S = L("div", {
								className: "introjs-arrow"
							}), j = L("div", {
								className: "introjs-tooltip"
							}), A = L("div", {
								className: "introjs-tooltiptext"
							}), I = L("div", {
								className: "introjs-tooltip-header"
							}), O = L("h1", {
								className: "introjs-tooltip-title"
							}), M = L("div"), x(_, {
								"box-shadow": "0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(i._options.overlayOpacity.toString(), ") 0 0 0 5000px")
							}), m.call(i, n.element), k.call(i, _), k.call(i, C), T(this._targetElement, _, !0), T(this._targetElement, C), A.innerHTML = n.intro, O.innerHTML = n.title, M.className = "introjs-tooltipbuttons", !1 === this._options.showButtons && (M.style.display = "none"), I.appendChild(O), j.appendChild(I), j.appendChild(A), this._options.dontShowAgain && (F = L("div", {
								className: "introjs-dontShowAgain"
							}), (D = L("input", {
								type: "checkbox",
								id: "introjs-dontShowAgain",
								name: "introjs-dontShowAgain"
							})).onchange = function(t) {
								Y.setDontShowAgain(t.target.checked)
							}, (G = L("label", {
								htmlFor: "introjs-dontShowAgain"
							})).innerText = this._options.dontShowAgainLabel, F.appendChild(D), F.appendChild(G), j.appendChild(F)), j.appendChild(q.call(this, n)), j.appendChild(H.call(this)), V = L("div"), !0 === this._options.showStepNumbers && (V.className = "introjs-helperNumberLayer", V.innerHTML = "".concat(n.step, " ").concat(this._options.stepNumbersOfLabel, " ").concat(this._introItems.length), j.appendChild(V)), j.appendChild(S), C.appendChild(j), (l = L("a")).onclick = r(t().mark((function e() {
								return t().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (i._introItems.length - 1 === i._currentStep) {
												t.next = 5;
												break
											}
											return t.next = 3, W.call(i);
										case 3:
											t.next = 11;
											break;
										case 5:
											if (!/introjs-donebutton/gi.test(l.className)) {
												t.next = 11;
												break
											}
											if ("function" != typeof i._introCompleteCallback) {
												t.next = 9;
												break
											}
											return t.next = 9, i._introCompleteCallback.call(i, i._currentStep, "done");
										case 9:
											return t.next = 11, xt.call(i, i._targetElement);
										case 11:
										case "end":
											return t.stop()
									}
								}), e)
							}))), y(l), l.innerHTML = this._options.nextLabel, (c = L("a")).onclick = r(t().mark((function e() {
								return t().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (0 === i._currentStep) {
												t.next = 3;
												break
											}
											return t.next = 3, $.call(i);
										case 3:
										case "end":
											return t.stop()
									}
								}), e)
							}))), y(c), c.innerHTML = this._options.prevLabel, y(u = L("a", {
								className: "introjs-skipbutton"
							})), u.innerHTML = this._options.skipLabel, u.onclick = r(t().mark((function e() {
								return t().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											if (i._introItems.length - 1 !== i._currentStep || "function" != typeof i._introCompleteCallback) {
												t.next = 3;
												break
											}
											return t.next = 3, i._introCompleteCallback.call(i, i._currentStep, "skip");
										case 3:
											if ("function" != typeof i._introSkipCallback) {
												t.next = 6;
												break
											}
											return t.next = 6, i._introSkipCallback.call(i);
										case 6:
											return t.next = 8, xt.call(i, i._targetElement);
										case 8:
										case "end":
											return t.stop()
									}
								}), e)
							}))), I.appendChild(u), this._introItems.length > 1 && M.appendChild(c), M.appendChild(l), j.appendChild(M), E.call(i, n.element, j, S), v.call(this, n.scrollTo, n.element, j)), (z = i._targetElement.querySelector(".introjs-disableInteraction")) && z.parentNode.removeChild(z), n.disableInteraction && P.call(i), 0 === this._currentStep && this._introItems.length > 1 ? (null != l && (l.className = "".concat(this._options.buttonClass, " introjs-nextbutton"), l.innerHTML = this._options.nextLabel), !0 === this._options.hidePrev ? (null != c && (c.className = "".concat(this._options.buttonClass, " introjs-prevbutton introjs-hidden")), null != l && p(l, "introjs-fullbutton")) : null != c && (c.className = "".concat(this._options.buttonClass, " introjs-prevbutton introjs-disabled"))) : this._introItems.length - 1 === this._currentStep || 1 === this._introItems.length ? (null != c && (c.className = "".concat(this._options.buttonClass, " introjs-prevbutton")), !0 === this._options.hideNext ? (null != l && (l.className = "".concat(this._options.buttonClass, " introjs-nextbutton introjs-hidden")), null != c && p(c, "introjs-fullbutton")) : null != l && (!0 === this._options.nextToDone ? (l.innerHTML = this._options.doneLabel, p(l, "".concat(this._options.buttonClass, " introjs-nextbutton introjs-donebutton"))) : l.className = "".concat(this._options.buttonClass, " introjs-nextbutton introjs-disabled"))) : (null != c && (c.className = "".concat(this._options.buttonClass, " introjs-prevbutton")), null != l && (l.className = "".concat(this._options.buttonClass, " introjs-nextbutton"), l.innerHTML = this._options.nextLabel)), null != c && c.setAttribute("role", "button"), null != l && l.setAttribute("role", "button"), null != u && u.setAttribute("role", "button"), null != l && l.focus(), d(n.element), void 0 === this._introAfterChangeCallback) {
							e.next = 22;
							break
						}
						return e.next = 22, this._introAfterChangeCallback.call(this, n.element);
					case 22:
					case "end":
						return e.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function D(t) {
		return G.apply(this, arguments)
	}

	function G() {
		return (G = r(t().mark((function e(n) {
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (this._currentStep = n - 2, void 0 === this._introItems) {
							t.next = 4;
							break
						}
						return t.next = 4, W.call(this);
					case 4:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function V(t) {
		return z.apply(this, arguments)
	}

	function z() {
		return (z = r(t().mark((function e(n) {
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (this._currentStepNumber = n, void 0 === this._introItems) {
							t.next = 4;
							break
						}
						return t.next = 4, W.call(this);
					case 4:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function W() {
		return Y.apply(this, arguments)
	}

	function Y() {
		return Y = r(t().mark((function e() {
			var n, r, i = this;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (this._direction = "forward", void 0 !== this._currentStepNumber && u(this._introItems, (function(t, e) {
								t.step === i._currentStepNumber && (i._currentStep = e - 1, i._currentStepNumber = void 0)
							})), void 0 === this._currentStep ? this._currentStep = 0 : ++this._currentStep, n = this._introItems[this._currentStep], r = !0, void 0 === this._introBeforeChangeCallback) {
							t.next = 9;
							break
						}
						return t.next = 8, this._introBeforeChangeCallback.call(this, n && n.element);
					case 8:
						r = t.sent;
					case 9:
						if (!1 !== r) {
							t.next = 12;
							break
						}
						return --this._currentStep, t.abrupt("return", !1);
					case 12:
						if (!(this._introItems.length <= this._currentStep)) {
							t.next = 19;
							break
						}
						if ("function" != typeof this._introCompleteCallback) {
							t.next = 16;
							break
						}
						return t.next = 16, this._introCompleteCallback.call(this, this._currentStep, "end");
					case 16:
						return t.next = 18, xt.call(this, this._targetElement);
					case 18:
						return t.abrupt("return", !1);
					case 19:
						return t.next = 21, M.call(this, n);
					case 21:
						return t.abrupt("return", !0);
					case 22:
					case "end":
						return t.stop()
				}
			}), e, this)
		}))), Y.apply(this, arguments)
	}

	function $() {
		return Q.apply(this, arguments)
	}

	function Q() {
		return Q = r(t().mark((function e() {
			var n, r;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (this._direction = "backward", 0 !== this._currentStep) {
							t.next = 3;
							break
						}
						return t.abrupt("return", !1);
					case 3:
						if (--this._currentStep, n = this._introItems[this._currentStep], r = !0, void 0 === this._introBeforeChangeCallback) {
							t.next = 10;
							break
						}
						return t.next = 9, this._introBeforeChangeCallback.call(this, n && n.element);
					case 9:
						r = t.sent;
					case 10:
						if (!1 !== r) {
							t.next = 13;
							break
						}
						return ++this._currentStep, t.abrupt("return", !1);
					case 13:
						return t.next = 15, M.call(this, n);
					case 15:
						return t.abrupt("return", !0);
					case 16:
					case "end":
						return t.stop()
				}
			}), e, this)
		}))), Q.apply(this, arguments)
	}

	function U() {
		return this._currentStep
	}

	function X(t) {
		return J.apply(this, arguments)
	}

	function J() {
		return (J = r(t().mark((function e(n) {
			var r, i;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (null === (r = void 0 === n.code ? n.which : n.code) && (r = null === n.charCode ? n.keyCode : n.charCode), "Escape" !== r && 27 !== r || !0 !== this._options.exitOnEsc) {
							t.next = 7;
							break
						}
						return t.next = 5, xt.call(this, this._targetElement);
					case 5:
						t.next = 39;
						break;
					case 7:
						if ("ArrowLeft" !== r && 37 !== r) {
							t.next = 12;
							break
						}
						return t.next = 10, $.call(this);
					case 10:
						t.next = 39;
						break;
					case 12:
						if ("ArrowRight" !== r && 39 !== r) {
							t.next = 17;
							break
						}
						return t.next = 15, W.call(this);
					case 15:
						t.next = 39;
						break;
					case 17:
						if ("Enter" !== r && "NumpadEnter" !== r && 13 !== r) {
							t.next = 39;
							break
						}
						if (!(i = n.target || n.srcElement) || !i.className.match("introjs-prevbutton")) {
							t.next = 24;
							break
						}
						return t.next = 22, $.call(this);
					case 22:
						t.next = 38;
						break;
					case 24:
						if (!i || !i.className.match("introjs-skipbutton")) {
							t.next = 32;
							break
						}
						if (this._introItems.length - 1 !== this._currentStep || "function" != typeof this._introCompleteCallback) {
							t.next = 28;
							break
						}
						return t.next = 28, this._introCompleteCallback.call(this, this._currentStep, "skip");
					case 28:
						return t.next = 30, xt.call(this, this._targetElement);
					case 30:
						t.next = 38;
						break;
					case 32:
						if (!i || !i.getAttribute("data-step-number")) {
							t.next = 36;
							break
						}
						i.click(), t.next = 38;
						break;
					case 36:
						return t.next = 38, W.call(this);
					case 38:
						n.preventDefault ? n.preventDefault() : n.returnValue = !1;
					case 39:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function Z(t) {
		if (null === t || "object" !== e(t) || "nodeType" in t) return t;
		var n = {};
		for (var r in t) "jQuery" in window && t[r] instanceof window.jQuery ? n[r] = t[r] : n[r] = Z(t[r]);
		return n
	}

	function K(t, e) {
		var n, r = this;
		return function() {
			for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
			clearTimeout(n), n = setTimeout((function() {
				t.apply(r, o)
			}), e)
		}
	}

	function tt(t) {
		var e = document.querySelector(".introjs-hints");
		return e ? Array.from(e.querySelectorAll(t)) : []
	}

	function et(t) {
		return nt.apply(this, arguments)
	}

	function nt() {
		return (nt = r(t().mark((function e(n) {
			var r;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (r = tt('.introjs-hint[data-step="'.concat(n, '"]'))[0], dt.call(this), r && p(r, "introjs-hidehint"), void 0 === this._hintCloseCallback) {
							t.next = 6;
							break
						}
						return t.next = 6, this._hintCloseCallback.call(this, n);
					case 6:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function rt() {
		var e = this;
		u(tt(".introjs-hint"), function() {
			var n = r(t().mark((function n(r) {
				return t().wrap((function(t) {
					for (;;) switch (t.prev = t.next) {
						case 0:
							return t.next = 2, et.call(e, r.getAttribute("data-step"));
						case 2:
						case "end":
							return t.stop()
					}
				}), n)
			})));
			return function(t) {
				return n.apply(this, arguments)
			}
		}())
	}

	function it() {
		return ot.apply(this, arguments)
	}

	function ot() {
		return (ot = r(t().mark((function e() {
			var n, r = this;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (!(n = tt(".introjs-hint")) || !n.length) {
							t.next = 5;
							break
						}
						u(n, (function(t) {
							at.call(r, t.getAttribute("data-step"))
						})), t.next = 7;
						break;
					case 5:
						return t.next = 7, mt.call(this, this._targetElement);
					case 7:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function at(t) {
		var e = tt('.introjs-hint[data-step="'.concat(t, '"]'))[0];
		e && _(e, /introjs-hidehint/g)
	}

	function st() {
		var t = this;
		u(tt(".introjs-hint"), (function(e) {
			lt.call(t, e.getAttribute("data-step"))
		})), h.off(document, "click", dt, this, !1), h.off(window, "resize", vt, this, !0), this._hintsAutoRefreshFunction && h.off(window, "scroll", this._hintsAutoRefreshFunction, this, !0)
	}

	function lt(t) {
		var e = tt('.introjs-hint[data-step="'.concat(t, '"]'))[0];
		e && e.parentNode.removeChild(e)
	}

	function ct() {
		return ut.apply(this, arguments)
	}

	function ut() {
		return (ut = r(t().mark((function e() {
			var n, r, i, o = this;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (n = this, null === (r = document.querySelector(".introjs-hints")) && (r = L("div", {
								className: "introjs-hints"
							})), i = function(t) {
								return function(e) {
									var r = e || window.event;
									r.stopPropagation && r.stopPropagation(), null !== r.cancelBubble && (r.cancelBubble = !0), pt.call(n, t)
								}
							}, u(this._introItems, (function(t, e) {
								if (!document.querySelector('.introjs-hint[data-step="'.concat(e, '"]'))) {
									var n = L("a", {
										className: "introjs-hint"
									});
									y(n), n.onclick = i(e), t.hintAnimation || p(n, "introjs-hint-no-anim"), g(t.element) && p(n, "introjs-fixedhint");
									var a = L("div", {
											className: "introjs-hint-dot"
										}),
										s = L("div", {
											className: "introjs-hint-pulse"
										});
									n.appendChild(a), n.appendChild(s), n.setAttribute("data-step", e.toString());
									var l = t.element;
									t.element = n, ht.call(o, t.hintPosition, n, l), r.appendChild(n)
								}
							})), document.body.appendChild(r), void 0 === this._hintsAddedCallback) {
							t.next = 9;
							break
						}
						return t.next = 9, this._hintsAddedCallback.call(this);
					case 9:
						this._options.hintAutoRefreshInterval >= 0 && (this._hintsAutoRefreshFunction = K((function() {
							return vt.call(o)
						}), this._options.hintAutoRefreshInterval), h.on(window, "scroll", this._hintsAutoRefreshFunction, this, !0));
					case 10:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function ht(t, e, n) {
		var r = w.call(this, n),
			i = 20,
			o = 20;
		switch (t) {
			default:
			case "top-left":
				e.style.left = "".concat(r.left, "px"), e.style.top = "".concat(r.top, "px");
				break;
			case "top-right":
				e.style.left = "".concat(r.left + r.width - i, "px"), e.style.top = "".concat(r.top, "px");
				break;
			case "bottom-left":
				e.style.left = "".concat(r.left, "px"), e.style.top = "".concat(r.top + r.height - o, "px");
				break;
			case "bottom-right":
				e.style.left = "".concat(r.left + r.width - i, "px"), e.style.top = "".concat(r.top + r.height - o, "px");
				break;
			case "middle-left":
				e.style.left = "".concat(r.left, "px"), e.style.top = "".concat(r.top + (r.height - o) / 2, "px");
				break;
			case "middle-right":
				e.style.left = "".concat(r.left + r.width - i, "px"), e.style.top = "".concat(r.top + (r.height - o) / 2, "px");
				break;
			case "middle-middle":
				e.style.left = "".concat(r.left + (r.width - i) / 2, "px"), e.style.top = "".concat(r.top + (r.height - o) / 2, "px");
				break;
			case "bottom-middle":
				e.style.left = "".concat(r.left + (r.width - i) / 2, "px"), e.style.top = "".concat(r.top + r.height - o, "px");
				break;
			case "top-middle":
				e.style.left = "".concat(r.left + (r.width - i) / 2, "px"), e.style.top = "".concat(r.top, "px")
		}
	}

	function pt(t) {
		return ft.apply(this, arguments)
	}

	function ft() {
		return (ft = r(t().mark((function e(n) {
			var r, i, o, a, s, l, c, u, h;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (r = document.querySelector('.introjs-hint[data-step="'.concat(n, '"]')), i = this._introItems[n], void 0 === this._hintClickCallback) {
							t.next = 5;
							break
						}
						return t.next = 5, this._hintClickCallback.call(this, r, i, n);
					case 5:
						if (o = dt.call(this), parseInt(o, 10) !== n) {
							t.next = 8;
							break
						}
						return t.abrupt("return");
					case 8:
						a = L("div", {
							className: "introjs-tooltip"
						}), s = L("div"), l = L("div"), c = L("div"), a.onclick = function(t) {
							t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
						}, s.className = "introjs-tooltiptext", (u = L("p")).innerHTML = i.hint, s.appendChild(u), this._options.hintShowButton && ((h = L("a")).className = this._options.buttonClass, h.setAttribute("role", "button"), h.innerHTML = this._options.hintButtonLabel, h.onclick = et.bind(this, n), s.appendChild(h)), l.className = "introjs-arrow", a.appendChild(l), a.appendChild(s), this._currentStep = r.getAttribute("data-step"), c.className = "introjs-tooltipReferenceLayer introjs-hintReference", c.setAttribute("data-step", r.getAttribute("data-step")), k.call(this, c), c.appendChild(a), document.body.appendChild(c), E.call(this, r, a, l, !0);
					case 28:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function dt() {
		var t = document.querySelector(".introjs-hintReference");
		if (t) {
			var e = t.getAttribute("data-step");
			return t.parentNode.removeChild(t), e
		}
	}

	function mt(t) {
		return bt.apply(this, arguments)
	}

	function bt() {
		return (bt = r(t().mark((function e(n) {
			var r, i = this;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (this._introItems = [], !this._options.hints) {
							t.next = 5;
							break
						}
						u(this._options.hints, (function(t) {
							var e = Z(t);
							"string" == typeof e.element && (e.element = document.querySelector(e.element)), e.hintPosition = e.hintPosition || i._options.hintPosition, e.hintAnimation = e.hintAnimation || i._options.hintAnimation, null !== e.element && i._introItems.push(e)
						})), t.next = 9;
						break;
					case 5:
						if ((r = Array.from(n.querySelectorAll("*[data-hint]"))) && r.length) {
							t.next = 8;
							break
						}
						return t.abrupt("return", !1);
					case 8:
						u(r, (function(t) {
							var e = t.getAttribute("data-hint-animation");
							e = e ? "true" === e : i._options.hintAnimation, i._introItems.push({
								element: t,
								hint: t.getAttribute("data-hint"),
								hintPosition: t.getAttribute("data-hint-position") || i._options.hintPosition,
								hintAnimation: e,
								tooltipClass: t.getAttribute("data-tooltip-class"),
								position: t.getAttribute("data-position") || i._options.tooltipPosition
							})
						}));
					case 9:
						return t.next = 11, ct.call(this);
					case 11:
						return h.on(document, "click", dt, this, !1), h.on(window, "resize", vt, this, !0), t.abrupt("return", !0);
					case 14:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function vt() {
		var t = this;
		u(this._introItems, (function(e) {
			var n = e.targetElement,
				r = e.hintPosition,
				i = e.element;
			void 0 !== n && ht.call(t, r, i, n)
		}))
	}

	function yt(t) {
		var e = this,
			n = Array.from(t.querySelectorAll("*[data-intro]")),
			r = [];
		if (this._options.steps) u(this._options.steps, (function(t) {
			var n = Z(t);
			if (n.step = r.length + 1, n.title = n.title || "", "string" == typeof n.element && (n.element = document.querySelector(n.element)), void 0 === n.element || null === n.element) {
				var i = document.querySelector(".introjsFloatingElement");
				null === i && (i = L("div", {
					className: "introjsFloatingElement"
				}), document.body.appendChild(i)), n.element = i, n.position = "floating"
			}
			n.position = n.position || e._options.tooltipPosition, n.scrollTo = n.scrollTo || e._options.scrollTo, void 0 === n.disableInteraction && (n.disableInteraction = e._options.disableInteraction), null !== n.element && r.push(n)
		}));
		else {
			var i;
			if (n.length < 1) return [];
			u(n, (function(t) {
				if ((!e._options.group || t.getAttribute("data-intro-group") === e._options.group) && "none" !== t.style.display) {
					var n = parseInt(t.getAttribute("data-step"), 10);
					i = t.hasAttribute("data-disable-interaction") ? !!t.getAttribute("data-disable-interaction") : e._options.disableInteraction, n > 0 && (r[n - 1] = {
						element: t,
						title: t.getAttribute("data-title") || "",
						intro: t.getAttribute("data-intro"),
						step: parseInt(t.getAttribute("data-step"), 10),
						tooltipClass: t.getAttribute("data-tooltip-class"),
						highlightClass: t.getAttribute("data-highlight-class"),
						position: t.getAttribute("data-position") || e._options.tooltipPosition,
						scrollTo: t.getAttribute("data-scroll-to") || e._options.scrollTo,
						disableInteraction: i
					})
				}
			}));
			var o = 0;
			u(n, (function(t) {
				if ((!e._options.group || t.getAttribute("data-intro-group") === e._options.group) && null === t.getAttribute("data-step")) {
					for (; void 0 !== r[o];) o++;
					i = t.hasAttribute("data-disable-interaction") ? !!t.getAttribute("data-disable-interaction") : e._options.disableInteraction, r[o] = {
						element: t,
						title: t.getAttribute("data-title") || "",
						intro: t.getAttribute("data-intro"),
						step: o + 1,
						tooltipClass: t.getAttribute("data-tooltip-class"),
						highlightClass: t.getAttribute("data-highlight-class"),
						position: t.getAttribute("data-position") || e._options.tooltipPosition,
						scrollTo: t.getAttribute("data-scroll-to") || e._options.scrollTo,
						disableInteraction: i
					}
				}
			}))
		}
		for (var a = [], s = 0; s < r.length; s++) r[s] && a.push(r[s]);
		return (r = a).sort((function(t, e) {
			return t.step - e.step
		})), r
	}

	function gt(t) {
		var e = document.querySelector(".introjs-tooltipReferenceLayer"),
			n = document.querySelector(".introjs-helperLayer"),
			r = document.querySelector(".introjs-disableInteraction");
		if (k.call(this, n), k.call(this, e), k.call(this, r), t && (this._introItems = yt.call(this, this._targetElement), O.call(this, this._introItems[this._currentStep]), R.call(this, e)), void 0 !== this._currentStep && null !== this._currentStep) {
			var i = document.querySelector(".introjs-arrow"),
				o = document.querySelector(".introjs-tooltip");
			o && i && E.call(this, this._introItems[this._currentStep].element, o, i)
		}
		return vt.call(this), this
	}

	function wt() {
		gt.call(this)
	}

	function _t(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		if (t && t.parentElement) {
			var n = t.parentElement;
			e ? (x(t, {
				opacity: "0"
			}), window.setTimeout((function() {
				try {
					n.removeChild(t)
				} catch (t) {}
			}), 500)) : n.removeChild(t)
		}
	}

	function xt(t, e) {
		return kt.apply(this, arguments)
	}

	function kt() {
		return (kt = r(t().mark((function e(n, r) {
			var i, o;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (i = !0, void 0 === this._introBeforeExitCallback) {
							t.next = 5;
							break
						}
						return t.next = 4, this._introBeforeExitCallback.call(this);
					case 4:
						i = t.sent;
					case 5:
						if (r || !1 !== i) {
							t.next = 7;
							break
						}
						return t.abrupt("return");
					case 7:
						if ((o = Array.from(n.querySelectorAll(".introjs-overlay"))) && o.length && u(o, (function(t) {
								return _t(t)
							})), _t(n.querySelector(".introjs-helperLayer"), !0), _t(n.querySelector(".introjs-tooltipReferenceLayer")), _t(n.querySelector(".introjs-disableInteraction")), _t(document.querySelector(".introjsFloatingElement")), N(), h.off(window, "keydown", X, this, !0), h.off(window, "resize", wt, this, !0), void 0 === this._introExitCallback) {
							t.next = 23;
							break
						}
						return t.next = 23, this._introExitCallback.call(this);
					case 23:
						this._currentStep = void 0;
					case 24:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function Ct(e) {
		var n = this,
			i = L("div", {
				className: "introjs-overlay"
			});
		return x(i, {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			position: "fixed"
		}), e.appendChild(i), !0 === this._options.exitOnOverlayClick && (x(i, {
			cursor: "pointer"
		}), i.onclick = r(t().mark((function r() {
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						return t.next = 2, xt.call(n, e);
					case 2:
					case "end":
						return t.stop()
				}
			}), r)
		})))), !0
	}

	function St(t) {
		return jt.apply(this, arguments)
	}

	function jt() {
		return (jt = r(t().mark((function e(n) {
			var r;
			return t().wrap((function(t) {
				for (;;) switch (t.prev = t.next) {
					case 0:
						if (this.isActive()) {
							t.next = 2;
							break
						}
						return t.abrupt("return", !1);
					case 2:
						if (void 0 === this._introStartCallback) {
							t.next = 5;
							break
						}
						return t.next = 5, this._introStartCallback.call(this, n);
					case 5:
						if (0 !== (r = yt.call(this, n)).length) {
							t.next = 8;
							break
						}
						return t.abrupt("return", !1);
					case 8:
						if (this._introItems = r, !Ct.call(this, n)) {
							t.next = 14;
							break
						}
						return t.next = 12, W.call(this);
					case 12:
						this._options.keyboardNavigation && h.on(window, "keydown", X, this, !0), h.on(window, "resize", wt, this, !0);
					case 14:
						return t.abrupt("return", !1);
					case 15:
					case "end":
						return t.stop()
				}
			}), e, this)
		})))).apply(this, arguments)
	}

	function At(t, e, n) {
		var r, i = (o(r = {}, t, e), o(r, "path", "/"), o(r, "expires", void 0), r);
		if (n) {
			var a = new Date;
			a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), i.expires = a.toUTCString()
		}
		var s = [];
		for (var l in i) s.push("".concat(l, "=").concat(i[l]));
		return document.cookie = s.join("; "), Et(t)
	}

	function Et(t) {
		return (e = {}, document.cookie.split(";").forEach((function(t) {
			var n = a(t.split("="), 2),
				r = n[0],
				i = n[1];
			e[r.trim()] = i
		})), e)[t];
		var e
	}
	var Nt = "true";

	function Lt(t) {
		t ? At(this._options.dontShowAgainCookie, Nt, this._options.dontShowAgainCookieDays) : At(this._options.dontShowAgainCookie, "", -1)
	}

	function Tt() {
		var t = Et(this._options.dontShowAgainCookie);
		return t && t === Nt
	}
	var It = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), o(this, "_targetElement", void 0), o(this, "_introItems", []), o(this, "_options", void 0), o(this, "_introBeforeChangeCallback", void 0), o(this, "_introChangeCallback", void 0), o(this, "_introAfterChangeCallback", void 0), o(this, "_introCompleteCallback", void 0), o(this, "_hintsAddedCallback", void 0), o(this, "_hintClickCallback", void 0), o(this, "_hintCloseCallback", void 0), o(this, "_introStartCallback", void 0), o(this, "_introExitCallback", void 0), o(this, "_introSkipCallback", void 0), o(this, "_introBeforeExitCallback", void 0), this._targetElement = t, this._options = {
					isActive: !0,
					nextLabel: "Next",
					prevLabel: "Back",
					skipLabel: "×",
					doneLabel: "Done",
					hidePrev: !1,
					hideNext: !1,
					nextToDone: !0,
					tooltipPosition: "bottom",
					tooltipClass: "",
					group: "",
					highlightClass: "",
					exitOnEsc: !0,
					exitOnOverlayClick: !0,
					showStepNumbers: !1,
					stepNumbersOfLabel: "of",
					keyboardNavigation: !0,
					showButtons: !0,
					showBullets: !0,
					showProgress: !1,
					scrollToElement: !0,
					scrollTo: "element",
					scrollPadding: 30,
					overlayOpacity: .5,
					autoPosition: !0,
					positionPrecedence: ["bottom", "top", "right", "left"],
					disableInteraction: !1,
					dontShowAgain: !1,
					dontShowAgainLabel: "Don't show this again",
					dontShowAgainCookie: "introjs-dontShowAgain",
					dontShowAgainCookieDays: 365,
					helperElementPadding: 10,
					hintPosition: "top-middle",
					hintButtonLabel: "Got it",
					hintShowButton: !0,
					hintAutoRefreshInterval: 10,
					hintAnimation: !0,
					buttonClass: "introjs-button",
					progressBarAdditionalClass: !1
				}
			}
			var n, a, s, l, c, u, h, p, f, d, m, b, v;
			return n = e, a = [{
				key: "isActive",
				value: function() {
					return (!this._options.dontShowAgain || !Tt.call(this)) && this._options.isActive
				}
			}, {
				key: "clone",
				value: function() {
					return new e(this._targetElement)
				}
			}, {
				key: "setOption",
				value: function(t, e) {
					return this._options[t] = e, this
				}
			}, {
				key: "setOptions",
				value: function(t) {
					return this._options = function(t, e) {
						var n, r = {};
						for (n in t) r[n] = t[n];
						for (n in e) r[n] = e[n];
						return r
					}(this._options, t), this
				}
			}, {
				key: "start",
				value: (v = r(t().mark((function e() {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, St.call(this, this._targetElement);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function() {
					return v.apply(this, arguments)
				})
			}, {
				key: "goToStep",
				value: (b = r(t().mark((function e(n) {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, D.call(this, n);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function(t) {
					return b.apply(this, arguments)
				})
			}, {
				key: "addStep",
				value: function(t) {
					return this._options.steps || (this._options.steps = []), this._options.steps.push(t), this
				}
			}, {
				key: "addSteps",
				value: function(t) {
					if (!t.length) return this;
					for (var e = 0; e < t.length; e++) this.addStep(t[e]);
					return this
				}
			}, {
				key: "goToStepNumber",
				value: (m = r(t().mark((function e(n) {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, V.call(this, n);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function(t) {
					return m.apply(this, arguments)
				})
			}, {
				key: "nextStep",
				value: (d = r(t().mark((function e() {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, W.call(this);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function() {
					return d.apply(this, arguments)
				})
			}, {
				key: "previousStep",
				value: (f = r(t().mark((function e() {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, $.call(this);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function() {
					return f.apply(this, arguments)
				})
			}, {
				key: "currentStep",
				value: function() {
					return U.call(this)
				}
			}, {
				key: "exit",
				value: (p = r(t().mark((function e(n) {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, xt.call(this, this._targetElement, n);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function(t) {
					return p.apply(this, arguments)
				})
			}, {
				key: "refresh",
				value: function(t) {
					return gt.call(this, t), this
				}
			}, {
				key: "setDontShowAgain",
				value: function(t) {
					return Lt.call(this, t), this
				}
			}, {
				key: "onbeforechange",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onbeforechange was not a function");
					return this._introBeforeChangeCallback = t, this
				}
			}, {
				key: "onchange",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onchange was not a function.");
					return this._introChangeCallback = t, this
				}
			}, {
				key: "onafterchange",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onafterchange was not a function");
					return this._introAfterChangeCallback = t, this
				}
			}, {
				key: "oncomplete",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for oncomplete was not a function.");
					return this._introCompleteCallback = t, this
				}
			}, {
				key: "onhintsadded",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onhintsadded was not a function.");
					return this._hintsAddedCallback = t, this
				}
			}, {
				key: "onhintclick",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onhintclick was not a function.");
					return this._hintClickCallback = t, this
				}
			}, {
				key: "onhintclose",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onhintclose was not a function.");
					return this._hintCloseCallback = t, this
				}
			}, {
				key: "onstart",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onstart was not a function.");
					return this._introStartCallback = t, this
				}
			}, {
				key: "onexit",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onexit was not a function.");
					return this._introExitCallback = t, this
				}
			}, {
				key: "onskip",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onskip was not a function.");
					return this._introSkipCallback = t, this
				}
			}, {
				key: "onbeforeexit",
				value: function(t) {
					if ("function" != typeof t) throw new Error("Provided callback for onbeforeexit was not a function.");
					return this._introBeforeExitCallback = t, this
				}
			}, {
				key: "addHints",
				value: function() {
					var e = r(t().mark((function e() {
						return t().wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									return t.next = 2, mt.call(this, this._targetElement);
								case 2:
									return t.abrupt("return", this);
								case 3:
								case "end":
									return t.stop()
							}
						}), e, this)
					})));
					return function() {
						return e.apply(this, arguments)
					}
				}()
			}, {
				key: "hideHint",
				value: (h = r(t().mark((function e(n) {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, et.call(this, n);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function(t) {
					return h.apply(this, arguments)
				})
			}, {
				key: "hideHints",
				value: (u = r(t().mark((function e() {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, rt.call(this);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function() {
					return u.apply(this, arguments)
				})
			}, {
				key: "showHint",
				value: function(t) {
					return at.call(this, t), this
				}
			}, {
				key: "showHints",
				value: (c = r(t().mark((function e() {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, it.call(this);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function() {
					return c.apply(this, arguments)
				})
			}, {
				key: "removeHints",
				value: function() {
					return st.call(this), this
				}
			}, {
				key: "removeHint",
				value: function(t) {
					return lt.call(this, t), this
				}
			}, {
				key: "showHintDialog",
				value: (l = r(t().mark((function e(n) {
					return t().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, pt.call(this, n);
							case 2:
								return t.abrupt("return", this);
							case 3:
							case "end":
								return t.stop()
						}
					}), e, this)
				}))), function(t) {
					return l.apply(this, arguments)
				})
			}], a && i(n.prototype, a), s && i(n, s), Object.defineProperty(n, "prototype", {
				writable: !1
			}), e
		}(),
		Pt = function t(n) {
			var r;
			if ("object" === e(n)) r = new It(n);
			else if ("string" == typeof n) {
				var i = document.querySelector(n);
				if (!i) throw new Error("There is no element with given selector.");
				r = new It(i)
			} else r = new It(document.body);
			return t.instances[c(r, "introjs-instance")] = r, r
		};
	return Pt.version = "7.0.1", Pt.instances = {}, Pt
}));
//# sourceMappingURL=intro.min.js.map;
$(() => {
	const t = document.querySelector("#back_to_top");
	t && (t.onclick = n => (n.preventDefault(), $(document.documentElement).animate({
		scrollTop: 0
	}, 500), !1), window.onscroll = () => {
		if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
			t.hidden = !1;
			return
		}
		t.hidden = !0
	});
	const f = document.querySelector("#forgot_password_modal");
	if (f) {
		const n = document.querySelector("#forgot_password_alert");
		n.parentElement.hidden = !0;
		window.onForgotPasswordAjaxRequestSuccess = t => {
			if (t.status !== !0) {
				n.innerText = t.message;
				n.parentElement.hidden = !1;
				return
			}
			t.message && registerPopup({
				content: t.message
			});
			$(f).modal("hide");
			t.redirectUrl && (window.location.href = t.redirectUrl)
		}
	}
	const n = document.querySelectorAll(".refresh_balance");
	if (n.length) {
		const f = document.querySelectorAll(".locked_balance_container"),
			e = document.querySelectorAll(".total_balance"),
			o = document.querySelectorAll(".total_locked_balance"),
			t = document.querySelectorAll(".unread_announcements_button"),
			s = document.querySelector("#loyalty_level"),
			i = document.querySelector("#loyalty_level_img_path"),
			h = document.querySelector("#loyalty_point"),
			c = document.querySelector("#loyalty_experience_percentage"),
			l = document.querySelector("#loyalty_experience_progress"),
			r = async () => {
				Array.prototype.slice.call(n).some(n => n.dataset.loading === "true") || (Array.prototype.slice.call(n).forEach(n => n.dataset.loading = !0), await window.$.ajax({
					type: "GET",
					url: "/Account/ScheduledUpdate",
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: n => {
						const r = n.wallet,
							a = n => (Math.trunc(n * 100) / 100).toFixed(2);
						Array.prototype.slice.call(f).forEach(n => {
							n.hidden = !r.hasLockedBalance
						});
						const y = a(r.balance);
						Array.prototype.slice.call(e).forEach(n => {
							n.innerText = y
						});
						const p = a(r.lockedBalance);
						if (Array.prototype.slice.call(o).forEach(n => {
								n.innerText = p
							}), r.lastTicketNumber && r.lastTransactionMessage) {
							const n = "last-transaction-ticket-number",
								t = window.readCookie(n);
							r.lastTicketNumber !== t && (window.writeCookie(n, r.lastTicketNumber), registerPopup({
								content: r.lastTransactionMessage
							}))
						}
						r.vendorBalanceCategories.length && r.vendorBalanceCategories.forEach(n => {
							n.vendorBalances.forEach(n => {
								Array.prototype.slice.call(document.querySelectorAll(`[data-vendor-game-code="${n.gameCode}"]`)).forEach(t => {
									t.innerText = n.success ? a(n.balance) : n.errorMessage
								})
							})
						});
						const v = n.notification;
						t && v && Array.from(t).forEach(n => n.dataset.announcementCount = v.newMessageCount);
						const u = n.loyalty;
						if (u && i) {
							const n = u.experiencePercentage > 100 ? 100 : u.experiencePercentage;
							s.src = `${i.value}${{"0":"bronze","1":"silver","2":"gold","3":"platinum","4":"diamond"}[u.loyaltyLevel]}.svg`;
							h.innerText = u.loyaltyPoint.toLocaleString();
							c.innerText = `${u.experiencePoint.toLocaleString()} XP / ${u.nextLevelExperiencePoint.toLocaleString()} XP (${n}%)`;
							l.style.width = `${n}%`
						}
					},
					error: function(n) {
						const t = n.getResponseHeader("Redirect-Reason");
						n.status === 200 && t && (window.closeWindows(), window.location.href = "/home/" + t)
					}
				}), Array.prototype.slice.call(n).forEach(n => n.dataset.loading = !1))
			};
		Array.prototype.slice.call(n).forEach(n => n.onclick = r);
		const a = 1e4,
			u = async () => {
				setTimeout(async () => {
					await r(), u()
				}, a)
			};
		u()
	}
	const u = document.querySelector("#site_side_menu_trigger_input");
	u && (u.onchange = () => {
		if (u.checked) {
			document.body.classList.add("modal-open");
			return
		}
		document.body.classList.remove("modal-open")
	});
	const e = document.querySelector(".carousel");
	e && $(".carousel").bcSwipe({
		threshold: 50
	});
	const i = document.querySelector("body"),
		r = document.querySelector("#download_apk_notification");
	if (r) {
		const f = () => /iPhone|iPad|iPod|C-APK/i.test(navigator.userAgent);
		if (f()) {
			r.style.display = "none";
			i.classList.remove("has-apk-download-notification");
			return
		}
		const n = n => {
				const i = new Date,
					t = new Date(i.getTime() + n * 864e5);
				t.setHours(0, 0, 0, 0);
				const r = `expires=${t.toString()}`,
					u = moment(t).format("YYYY-MM-DD HH:mm:ss");
				document.cookie = `close-apk-download-notification=${u.toString()}; ${r}; path=/`
			},
			e = window.readCookie("close-apk-download-notification");
		e == null && i.classList.add("has-apk-download-notification");
		const t = document.querySelector("#close_download_apk_notification");
		t && (t.onclick = () => {
			n(7), r.style.display = "none", i.classList.remove("has-apk-download-notification")
		});
		const u = document.querySelector("#dont_show_again_today");
		u && (u.onclick = () => {
			n(1), r.style.display = "none", i.classList.remove("has-apk-download-notification")
		})
	}
	window.initializeIntro = n => {
		const t = document.querySelector("#mobile_loyalty_info_container"),
			i = document.querySelector("#desktop_loyalty_info_container"),
			r = window.getComputedStyle(t),
			u = window.getComputedStyle(i);
		if (t || i) {
			const f = localStorage.getItem(`isIntroShown-${n.username}`),
				s = new URLSearchParams(window.location.search),
				h = () => document.querySelectorAll(".modal.show").length > 0 || document.querySelectorAll(".modal.in").length > 0,
				e = () => {
					const f = [];
					t && r.display !== "none" && (f[0] = document.querySelector("#mobile_loyalty_level"), f[1] = document.querySelector("#mobile_loyalty_point"), f[2] = document.querySelector("#mobile_loyalty_experience"));
					i && u.display !== "none" && (f[0] = document.querySelector("#desktop_loyalty_level"), f[1] = document.querySelector("#desktop_loyalty_point"), f[2] = document.querySelector("#desktop_loyalty_experience"));
					setTimeout(function() {
						h() == !1 && (introJs().setOptions({
							steps: [{
								title: n.loyaltyLevelTitle,
								element: f[0],
								intro: `<div class='subtitle'>${n.loyaltyLevelSubtitle}</div><p>${n.loyaltyLevelContent}</p>`
							}, {
								title: n.loyaltyPointTitle,
								element: f[1],
								intro: `<div class='subtitle'>${n.loyaltyPointSubtitle}</div><p>${n.loyaltyPointContent}</p>`
							}, {
								title: n.loyaltyExperienceTitle,
								element: f[2],
								intro: `<div class='subtitle'>${n.loyaltyExperienceSubtitle}</div><p>${n.loyaltyExperienceContent}</p>`
							}],
							scrollToElement: !1
						}).start(), localStorage.setItem(`isIntroShown-${n.username}`, !0))
					}, 1e3)
				},
				o = () => {
					f === null || f === "false" ? e() : s.forEach((n, t) => {
						t === "loyalty_intro" && n === "1" && (f === null || f === "false") && e()
					})
				};
			$(document).on("hidden.bs.modal", function() {
				o()
			});
			o()
		}
	}
});
$(() => {
	const n = document.querySelector("#request_forgot_password_otp_button");
	if (n) {
		const i = document.querySelector("#forgot_password_otp_type_select"),
			t = document.querySelector("#forgot_password_username_input");
		n.onclick = r => {
			(r.preventDefault(), $(t).valid() != !1) && (n.disabled = !0, window.$.ajax({
				type: "POST",
				url: "/forgot-password/otp/request",
				data: JSON.stringify({
					username: t.value,
					channelType: i.value
				}),
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: t => {
					if (isNaN(t.expiryInSeconds) || t.expiryInSeconds <= 0) {
						n.innerText = n.dataset.sentMessage;
						const t = parseInt(n.dataset.intervalInSeconds) * 1e3 || 3e4;
						setTimeout(() => {
							n.disabled = !1, n.innerText = n.dataset.title
						}, t);
						return
					}
					let i = t.expiryInSeconds + 1;
					const u = n => Math.floor(n / 60).toString().padStart(2, "0") + ":" + Math.floor(n % 60).toString().padStart(2, "0"),
						r = function() {
							if (i -= 1, i < 0) {
								n.disabled = !1;
								n.innerText = n.dataset.title;
								return
							}
							n.innerText = n.dataset.sentMessage + ` [${u(i)}]`;
							setTimeout(r, 1e3)
						};
					r()
				}
			}))
		}
	}
});
$(() => {
	const n = document.getElementById("game_list"),
		t = () => {
			n && (n.onclick = n => {
				if (n.target.className === "favourite-game-btn") {
					let t = "";
					t = n.target.checked ? "/game/new-favourite" : "/game/remove-favourite";
					$.ajax({
						type: "POST",
						data: JSON.stringify({
							Provider: n.target.dataset.provider,
							GameCode: n.target.value
						}),
						url: t,
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						success: t => {
							t.errorCode != 0 && (n.target.checked = !n.target.checked, registerPopup({
								content: `Unable to update favourite game. ${t.message}`
							}))
						},
						error: () => {
							n.target.checked = !n.target.checked, registerPopup({
								content: "Unable to update favourite game."
							})
						}
					})
				}
			})
		};
	t()
});