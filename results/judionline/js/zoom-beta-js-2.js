! function(i) {
	i.fn.easyTicker = function(n) {
		n = i.extend({
			direction: "up",
			easing: "swing",
			speed: "slow",
			interval: 2e3,
			height: "auto",
			visible: 0,
			mousePause: 0,
			controls: {
				up: "",
				down: "",
				toggle: ""
			}
		}, n);
		var t = 0,
			e = i("body"),
			s = i(n.controls.up),
			o = i(n.controls.down),
			c = i(n.controls.toggle),
			a = function(t, e, s) {
				if (t.is(":visible")) {
					if ("up" == s) var o = ":first-child",
						c = "-=",
						a = "appendTo";
					else o = ":last-child", c = "+=", a = "prependTo";
					var r = i(e).children(o),
						u = r.outerHeight();
					i(e).stop(!0, !0).animate({
						top: c + u + "px"
					}, n.speed, n.easing, function() {
						r.hide()[a](e).fadeIn(), i(e).css("top", 0), 0 != n.visible && "auto" == n.height && l(t, e)
					})
				}
			},
			r = function(i, s) {
				(0 == c.length || c.hasClass("et-run")) && (t = setInterval(function() {
					1 == e.attr("data-focus") && a(i, s, n.direction)
				}, n.interval))
			},
			u = function(i) {
				clearInterval(t)
			},
			l = function(t, e) {
				var s = 0;
				i(e).children(":lt(" + n.visible + ")").each(function() {
					s += i(this).outerHeight()
				}), t.stop(!0, !0).animate({
					height: s
				}, n.speed)
			},
			h = function(n, t) {
				var e = 0,
					s = n.css("display");
				return n.css("display", "block"), i(t).children().each(function() {
					e += i(this).outerHeight()
				}), n.css("display", s), e
			};

		function d() {
			e.attr("data-focus", 0)
		}

		function f() {
			e.attr("data-focus", 1)
		}
		return i(window).bind("focus mouseover", f), i(window).bind("blur", d), this.each(function() {
			var t = i(this),
				e = t.children(":first-child");
			! function(i, t) {
				t.children().css("margin", 0).children().css("margin", 0), i.css({
					position: "relative",
					height: "auto" == n.height ? h(i, t) : n.height,
					overflow: "hidden"
				}), t.css({
					position: "absolute",
					margin: 0
				}).children().css("margin", 0), 0 != n.visible && "auto" == n.height && l(i, t), c.addClass("et-run"), r(i, t)
			}(t, e), 1 == n.mousePause && t.mouseover(function() {
				u()
			}).mouseleave(function() {
				r(t, e)
			}), c.on("click", function() {
				i(this).hasClass("et-run") ? (u(), i(this).removeClass("et-run")) : (i(this).addClass("et-run"), r(t, e))
			}), s.on("click", function() {
				a(t, e, "up")
			}), o.on("click", function() {
				a(t, e, "down")
			})
		})
	}
}(jQuery);
$(() => {
	const i = document.querySelector("#progressive_jackpot");
	if (i && i.dataset.progressiveJackpotUrl) {
		const t = {
				refresh: 4e3,
				update: 500
			},
			n = {
				current: null,
				gap: .05
			},
			r = async () => {
				await window.$.ajax({
					type: "GET",
					url: i.dataset.progressiveJackpotUrl + "/progressive-jackpot",
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: i => {
						if (isFinite(i) != !1 && !(i <= 0)) {
							if (n.current === null) {
								n.current = i - n.gap * (t.refresh / t.update);
								return
							}
							n.gap = (i - n.current) / (t.refresh / t.update)
						}
					},
					complete: () => {
						setTimeout(r, t.refresh)
					}
				})
			};
		r();
		const u = () => {
			let r = "UPDATING";
			n.current !== null && (n.current += n.gap, r = n.current.toLocaleString(undefined, {
				minimumFractionDigits: 0,
				maximumFractionDigits: 0
			}));
			i.innerText = r;
			setTimeout(u, t.update)
		};
		u();
		const f = document.querySelector(".jackpot_currency");
		f && (f.innerText = "IDR");
		const e = document.querySelectorAll("#progressive_jackpot_counter [data-digit]");
		if (e.length > 0) setInterval(function() {
			const n = parseInt(i.innerText.replace(/,/gs, ""), 10);
			Array.prototype.slice.call(e).reverse().forEach((t, i) => {
				const r = Math.floor(n / Math.pow(10, i) % 10);
				isNaN(r) || t.dataset.digit !== r.toString() && (t.dataset.digit = r, t.classList.remove("animate"), void t.offsetWidth, t.classList.add("animate"))
			})
		}, 1e3)
	}
});
$(() => {
	$("#winners_ticker").easyTicker()
});
$(() => {
	const n = document.querySelector("#download_apk");
	if (n) {
		const t = n.querySelector(":scope > div:first-child"),
			i = n.querySelector(":scope > div:last-child"),
			f = () => {
				const i = n.getBoundingClientRect(),
					t = 1 - i.top / window.innerHeight;
				return t > 1 ? 1 - t : t
			},
			r = () => {
				const n = f();
				n > .4 && (t.style.transform = `translateX(0%)`, i.style.transform = `translateX(0%)`, t.style.opacity = 1, i.style.opacity = 1)
			},
			u = document.querySelector("#scroll_container");
		if (u) {
			u.addEventListener("scroll", r);
			return
		}
		window.addEventListener("scroll", r)
	}
});
jQuery.fn.endlessRiver = function(n) {
	return n = jQuery.extend({
		speed: 30,
		pause: !0,
		buttons: !1
	}, n), this.each(function() {
		function h(n, i) {
			t.animate({
				left: "-=" + n
			}, i, "linear", function() {
				t.children("li:first").appendTo(t);
				t.css("left", 0);
				u = t.children("li:first").outerWidth(!0);
				o = i / n * u;
				r && h(u, o)
			})
		}

		function a() {
			t.hover(b, k)
		}

		function b() {
			r = !1;
			t.stop()
		}

		function k() {
			r = !0;
			var i = t.offset().left,
				n = i + t.children("li:first").outerWidth(!0) - c,
				f = o / u * n;
			h(n, f)
		}
		var i = jQuery,
			t = i(this),
			f = "ER_" + (new Date).getTime(),
			v, e;
		t.wrap('<div id="' + f + '"><\/div>');
		t.css({
			margin: "0 !important",
			padding: "0 !important"
		});
		var u, o, r = !0,
			c = t.offset().left,
			s = 1;
		t.children("li.tick-clones").remove();
		t.addClass("newsticker");
		for (var d = t.wrap("<div class='mask'><\/div>"), l = t.parent().wrap("<div class='tickercontainer'><\/div>"), y = t.children("li"), p = function() {
				s = 1;
				t.append(y.clone(!0).addClass("tick-clones"));
				t.children("li").each(function(n) {
					s += i(this, n).outerWidth(!0)
				})
			}, w = l.outerWidth(!0); s < w;) p();
		if (t.width(s), u = t.children("li:first").outerWidth(!0), o = u / n.speed * 1e3, h(u, o), n.pause && a(), n.buttons) {
			v = i('<ul class="er-controls"><li class="prev glyphicon glyphicon-chevron-left"><\/li><li class="pause glyphicon glyphicon-pause"><\/li><li class="next glyphicon glyphicon-chevron-right"><\/li><\/ul>');
			v.insertAfter(l);
			i("body").on("click", "#" + f + " .er-controls > .pause", function() {
				if (!r) return !1;
				i(this).toggleClass("pause glyphicon-pause play glyphicon-play");
				t.unbind("mouseenter mouseleave");
				r = !1
			});
			i("body").on("click", "#" + f + " .er-controls > .play", function() {
				if (r) return !1;
				i(this).toggleClass("pause glyphicon-pause play glyphicon-play");
				r = !0;
				a();
				var f = t.offset().left,
					n = f + t.children("li:first").outerWidth(!0) - c,
					e = o / u * n;
				h(n, e)
			});
			e = !1;
			i("body").on("click", "#" + f + " .er-controls > .next", function() {
				if (r) {
					i("#" + f + " .er-controls > .pause").toggleClass("pause glyphicon-pause play glyphicon-play");
					r = !1;
					return
				}
				if (e) return !1;
				var u = t.children("li:first").outerWidth(!0),
					o = u / n.speed * 1e3;
				e = !0;
				t.stop(!0, !0).animate({
					left: "-=" + u
				}, o, "linear", function() {
					t.children("li:first").appendTo(t);
					t.css("left", 0);
					e = !1
				})
			});
			i("body").on("click", "#" + f + " .er-controls > .prev", function() {
				var u, o;
				if (r) {
					i("#" + f + " .er-controls > .pause").toggleClass("pause glyphicon-pause play glyphicon-play");
					r = !1;
					return
				}
				if (e) return !1;
				u = t.children("li:last").outerWidth(!0);
				t.css("left", "-" + u + "px");
				t.children("li:last").prependTo(t);
				o = u / n.speed * 1e3;
				e = !0;
				t.stop(!0, !0).animate({
					left: "+=" + u
				}, o, "linear", function() {
					e = !1
				})
			})
		}
	})
};
$(() => {
	const f = document.querySelector("#announcement_list");
	f && f.childElementCount > 0 && $(f).endlessRiver();
	const n = document.querySelector("#popular_slots_games");
	if (n) {
		const r = document.querySelector("#previous_popular_slots_game"),
			i = document.querySelector("#next_popular_slots_game"),
			t = 250;
		r.onclick = () => {
			const i = Math.ceil(n.querySelector(".item").clientWidth),
				r = Math.ceil(n.scrollLeft / i) - 1,
				u = Math.floor(n.scrollWidth / i),
				f = Math.ceil(r * i);
			if (r < 0) {
				$(n).animate({
					scrollLeft: u * i
				}, t);
				return
			}
			if (u - r == 1 && n.scrollLeft - f < i) {
				$(n).animate({
					scrollLeft: Math.ceil((r - 1) * i)
				}, t);
				return
			}
			$(n).animate({
				scrollLeft: f
			}, t)
		};
		i.onclick = () => {
			const i = Math.ceil(n.querySelector(".item").clientWidth),
				r = Math.ceil(n.scrollLeft / i) + 1,
				f = Math.floor(n.scrollWidth / i),
				u = Math.ceil(r * i);
			if (r >= f) {
				$(n).animate({
					scrollLeft: 0
				}, t);
				return
			}
			if (n.scrollWidth - n.scrollLeft <= n.clientWidth && n.scrollWidth - u < n.clientWidth) {
				$(n).animate({
					scrollLeft: 0
				}, t);
				return
			}
			$(n).animate({
				scrollLeft: u
			}, t)
		};
		setInterval(function() {
			i.click()
		}, 5e3)
	}
	const t = document.querySelector("#new_slots_games");
	if (t) {
		const i = document.querySelector("#previous_new_slots_game"),
			r = document.querySelector("#next_new_slots_game"),
			n = 250;
		i.onclick = () => {
			const i = Math.ceil(t.querySelector("a").clientWidth),
				r = Math.ceil(t.scrollLeft / i) - 1,
				u = Math.floor(t.scrollWidth / i),
				f = Math.ceil(r * i);
			if (r < 0) {
				$(t).animate({
					scrollLeft: u * i
				}, n);
				return
			}
			if (u - r == 1 && t.scrollLeft - f < i) {
				$(t).animate({
					scrollLeft: Math.ceil((r - 1) * i)
				}, n);
				return
			}
			$(t).animate({
				scrollLeft: f
			}, n)
		};
		r.onclick = () => {
			const i = Math.ceil(t.querySelector("a").clientWidth),
				r = Math.ceil(t.scrollLeft / i) + 1,
				f = Math.floor(t.scrollWidth / i),
				u = Math.ceil(r * i);
			if (r >= f) {
				$(t).animate({
					scrollLeft: 0
				}, n);
				return
			}
			if (t.scrollWidth - t.scrollLeft <= t.clientWidth && t.scrollWidth - u < t.clientWidth) {
				$(t).animate({
					scrollLeft: 0
				}, n);
				return
			}
			$(t).animate({
				scrollLeft: u
			}, n)
		}
	}
	const i = document.querySelector(".favourite_games");
	if (i) {
		const t = document.querySelector("#previous_favourite_game"),
			r = document.querySelector("#next_favourite_game"),
			n = 250;
		t.onclick = () => {
			const t = Math.ceil(i.querySelector("a").clientWidth),
				r = Math.ceil(i.scrollLeft / t) - 1,
				u = Math.floor(i.scrollWidth / t),
				f = Math.ceil(r * t);
			if (r < 0) {
				$(i).animate({
					scrollLeft: u * t
				}, n);
				return
			}
			if (u - r == 1 && i.scrollLeft - f < t) {
				$(i).animate({
					scrollLeft: Math.ceil((r - 1) * t)
				}, n);
				return
			}
			$(i).animate({
				scrollLeft: f
			}, n)
		};
		r.onclick = () => {
			const t = Math.ceil(i.querySelector("a").clientWidth),
				r = Math.ceil(i.scrollLeft / t) + 1,
				f = Math.floor(i.scrollWidth / t),
				u = Math.ceil(r * t);
			if (r >= f) {
				$(i).animate({
					scrollLeft: 0
				}, n);
				return
			}
			if (i.scrollWidth - i.scrollLeft <= i.clientWidth && i.scrollWidth - u < i.clientWidth) {
				$(i).animate({
					scrollLeft: 0
				}, n);
				return
			}
			$(i).animate({
				scrollLeft: u
			}, n)
		}
	}
	const r = document.querySelector("#recent_games");
	if (r) {
		const t = document.querySelector("#previous_recent_game"),
			i = document.querySelector("#next_recent_game"),
			n = 250;
		t.onclick = () => {
			const t = Math.ceil(r.querySelector("a").clientWidth),
				i = Math.ceil(r.scrollLeft / t) - 1,
				u = Math.floor(r.scrollWidth / t),
				f = Math.ceil(i * t);
			if (i < 0) {
				$(r).animate({
					scrollLeft: u * t
				}, n);
				return
			}
			if (u - i == 1 && r.scrollLeft - f < t) {
				$(r).animate({
					scrollLeft: Math.ceil((i - 1) * t)
				}, n);
				return
			}
			$(r).animate({
				scrollLeft: f
			}, n)
		};
		i.onclick = () => {
			const t = Math.ceil(r.querySelector("a").clientWidth),
				i = Math.ceil(r.scrollLeft / t) + 1,
				f = Math.floor(r.scrollWidth / t),
				u = Math.ceil(i * t);
			if (i >= f) {
				$(r).animate({
					scrollLeft: 0
				}, n);
				return
			}
			if (r.scrollWidth - r.scrollLeft <= r.clientWidth && r.scrollWidth - u < r.clientWidth) {
				$(r).animate({
					scrollLeft: 0
				}, n);
				return
			}
			$(r).animate({
				scrollLeft: u
			}, n)
		}
	}
	const u = document.querySelector("#home_popular_games");
	if (u) {
		const t = document.querySelector("#previous_home_popular_game"),
			i = document.querySelector("#next_home_popular_game"),
			n = 250;
		t.onclick = () => {
			const t = Math.ceil(u.querySelector(".game-container").clientWidth),
				i = Math.ceil(u.scrollLeft / t) - 1,
				r = Math.floor(u.scrollWidth / t),
				f = Math.ceil(i * t);
			if (i < 0) {
				$(u).animate({
					scrollLeft: r * t
				}, n);
				return
			}
			if (r - i == 1 && u.scrollLeft - f < t) {
				$(u).animate({
					scrollLeft: Math.ceil((i - 1) * t)
				}, n);
				return
			}
			$(u).animate({
				scrollLeft: f
			}, n)
		};
		i.onclick = () => {
			const t = Math.ceil(u.querySelector(".game-container").clientWidth),
				i = Math.ceil(u.scrollLeft / t) + 1,
				f = Math.floor(u.scrollWidth / t),
				r = Math.ceil(i * t);
			if (i >= f) {
				$(u).animate({
					scrollLeft: 0
				}, n);
				return
			}
			if (u.scrollWidth - u.scrollLeft <= u.clientWidth && u.scrollWidth - r < u.clientWidth) {
				$(u).animate({
					scrollLeft: 0
				}, n);
				return
			}
			$(u).animate({
				scrollLeft: r
			}, n)
		}
	}
	const e = document.getElementById("menu_preview_container");
	if (e) {
		const n = document.querySelectorAll("#main_menu_outer_container a[data-game-category]"),
			t = document.querySelectorAll("#menu_preview_container .game-list");
		n.length && n.forEach(i => {
			i.onclick = r => {
				n.forEach(n => {
					n.parentElement.dataset.active = !1
				});
				const f = window.innerWidth < 768;
				f && r.preventDefault();
				const e = i.dataset.gameCategory,
					u = document.querySelector(`#menu_preview_container .game-list[data-game-category="${e}"]`);
				if (u) {
					const n = u.classList.contains("active");
					t.forEach(n => {
						n.classList.remove("active")
					});
					n || (i.parentElement.dataset.active = !0, u.classList.add("active"))
				}
			}
		})
	}
});