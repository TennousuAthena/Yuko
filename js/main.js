// transition,modal,dropdown,tab,tooltip,popover,loading
! function (a) {
	"use strict";
	a(function () {
		a.support.transition = function () {
			var a = function () {
				var c, a = document.createElement("bootstrap"),
					b = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					};
				for (c in b)
					if (void 0 !== a.style[c]) return b[c]
			}();
			return a && {
				end: a
			}
		}()
	})
}(window.jQuery), ! function (a) {
	"use strict";
	var c, b = function (b, c) {
		this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(
			this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
	};
	b.prototype = {
		constructor: b,
		toggle: function () {
			return this[this.isShown ? "hide" : "show"]()
		},
		show: function () {
			var b = this,
				c = a.Event("show");
			this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(),
				this.backdrop(function () {
					var c = a.support.transition && b.$element.hasClass("fade");
					b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(),
					c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !
						1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function () {
						b.$element.focus().trigger("shown")
					}) : b.$element.focus().trigger("shown")
				}))
		},
		hide: function (b) {
			b && b.preventDefault(), b = a.Event("hide"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() &&
			(this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass(
				"in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ?
				this.hideWithTransition() : this.hideModal())
		},
		enforceFocus: function () {
			var b = this;
			a(document).on("focusin.modal", function (a) {
				b.$element[0] === a.target || b.$element.has(a.target).length || b.$element.focus()
			})
		},
		escape: function () {
			var a = this;
			this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (b) {
				27 == b.which && a.hide()
			}) : this.isShown || this.$element.off("keyup.dismiss.modal")
		},
		hideWithTransition: function () {
			var b = this,
				c = setTimeout(function () {
					b.$element.off(a.support.transition.end), b.hideModal()
				}, 500);
			this.$element.one(a.support.transition.end, function () {
				clearTimeout(c), b.hideModal()
			})
		},
		hideModal: function () {
			var a = this;
			this.$element.hide(), this.backdrop(function () {
				a.removeBackdrop(), a.$element.trigger("hidden")
			})
		},
		removeBackdrop: function () {
			this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
		},
		backdrop: function (b) {
			var e, d = this.$element.hasClass("fade") ? "fade" : "";
			if (this.isShown && this.options.backdrop) {
				if (e = a.support.transition && d, this.$backdrop = a('<div class="modal-backdrop ' + d +
					'" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ?
					a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), e &&
				this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
				e ? this.$backdrop.one(a.support.transition.end, b) : b()
			} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition &&
			this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b &&
				b()
		}
	}, c = a.fn.modal, a.fn.modal = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("modal"),
				f = a.extend({}, a.fn.modal.defaults, d.data(), "object" == typeof c && c);
			e || d.data("modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show()
		})
	}, a.fn.modal.defaults = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
		return a.fn.modal = c, this
	}, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function (b) {
		var c = a(this),
			d = c.attr("href"),
			e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = e.data("modal") ? "toggle" : a.extend({
				remote: !/#/.test(d) && d
			}, e.data(), c.data());
		b.preventDefault(), e.modal(f).one("hide", function () {
			c.focus()
		})
	})
}(window.jQuery), ! function (a) {
	"use strict";

	function d() {
		a(b).each(function () {
			e(a(this)).removeClass("open")
		})
	}

	function e(b) {
		var d, c = b.attr("data-target");
		return c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")), d = c && a(c), d &&
		d.length || (d = b.parent()), d
	}
	var f, b = "[data-toggle=dropdown]",
		c = function (b) {
			var c = a(b).on("click.dropdown.data-api", this.toggle);
			a("html").on("click.dropdown.data-api", function () {
				c.parent().removeClass("open")
			})
		};
	c.prototype = {
		constructor: c,
		toggle: function () {
			var f, g, c = a(this);
			if (!c.is(".disabled, :disabled")) return f = e(c), g = f.hasClass("open"), d(), g || f.toggleClass(
				"open"), c.focus(), !1
		},
		keydown: function (c) {
			var d, f, h, i, j;
			if (/(38|40|27)/.test(c.keyCode) && (d = a(this), c.preventDefault(), c.stopPropagation(), !d.is(
				".disabled, :disabled"))) {
				if (h = e(d), i = h.hasClass("open"), !i || i && 27 == c.keyCode) return 27 == c.which && h.find(
					b).focus(), d.click();
				f = a("[role=menu] li:not(.divider):visible a", h), f.length && (j = f.index(f.filter(":focus")),
				38 == c.keyCode && j > 0 && j--, 40 == c.keyCode && j < f.length - 1 && j++, ~j || (j =
					0), f.eq(j).focus())
			}
		}
	}, f = a.fn.dropdown, a.fn.dropdown = function (b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("dropdown");
			e || d.data("dropdown", e = new c(this)), "string" == typeof b && e[b].call(d)
		})
	}, a.fn.dropdown.Constructor = c, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = f, this
	}, a(document).on("click.dropdown.data-api", d).on("click.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation()
	}).on("click.dropdown-menu", function (a) {
		a.stopPropagation()
	}).on("click.dropdown.data-api", b, c.prototype.toggle).on("keydown.dropdown.data-api", b + ", [role=menu]", c.prototype
		.keydown)
}(window.jQuery), ! function (a) {
	"use strict";
	var c, b = function (b) {
		this.element = a(b)
	};
	b.prototype = {
		constructor: b,
		show: function () {
			var e, f, g, b = this.element,
				c = b.closest("ul:not(.dropdown-menu)"),
				d = b.attr("data-target");
			d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), b.parent("li").hasClass(
				"active") || (e = c.find(".active:last a")[0], g = a.Event("show", {
				relatedTarget: e
			}), b.trigger(g), g.isDefaultPrevented() || (f = a(d), this.activate(b.parent("li"), c),
				this.activate(f, f.parent(), function () {
					b.trigger({
						type: "shown",
						relatedTarget: e
					})
				})))
		},
		activate: function (b, c, d) {
			function g() {
				e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass(
					"active"), f ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(
					".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
			}
			var e = c.find("> .active"),
				f = d && a.support.transition && e.hasClass("fade");
			f ? e.one(a.support.transition.end, g) : g(), e.removeClass("in")
		}
	}, c = a.fn.tab, a.fn.tab = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("tab");
			e || d.data("tab", e = new b(this)), "string" == typeof c && e[c]()
		})
	}, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
		return a.fn.tab = c, this
	}, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
		b.preventDefault(), a(this).tab("show")
	})
}(window.jQuery), ! function (a) {
	"use strict";
	var c, b = function (a, b) {
		this.init("tooltip", a, b)
	};
	b.prototype = {
		constructor: b,
		init: function (b, c, d) {
			var e, f, g, h, i;
			for (this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, g =
				this.options.trigger.split(" "), i = g.length; i--;) h = g[i], "click" == h ? this.$element.on(
				"click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h &&
				(e = "hover" == h ? "mouseenter" : "focus", f = "hover" == h ? "mouseleave" : "blur", this.$element
					.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(
					f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
			this.options.selector ? this._options = a.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			}) : this.fixTitle()
		},
		getOptions: function (b) {
			return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && "number" ==
			typeof b.delay && (b.delay = {
				show: b.delay,
				hide: b.delay
			}), b
		},
		enter: function (b) {
			var e, c = a.fn[this.type].defaults,
				d = {};
			return this._options && a.each(this._options, function (a, b) {
				c[a] != b && (d[a] = b)
			}, this), e = a(b.currentTarget)[this.type](d).data(this.type), e.options.delay && e.options.delay
				.show ? (clearTimeout(this.timeout), e.hoverState = "in", this.timeout = setTimeout(function () {
				"in" == e.hoverState && e.show()
			}, e.options.delay.show), void 0) : e.show()
		},
		leave: function (b) {
			var c = a(b.currentTarget)[this.type](this._options).data(this.type);
			return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState =
				"out", this.timeout = setTimeout(function () {
				"out" == c.hoverState && c.hide()
			}, c.options.delay.hide), void 0) : c.hide()
		},
		show: function () {
			var b, c, d, e, f, g, h = a.Event("show");
			if (this.hasContent() && this.enabled) {
				if (this.$element.trigger(h), h.isDefaultPrevented()) return;
				switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f =
					"function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[
						0]) : this.options.placement, b.detach().css({
					top: 0,
					left: 0,
					display: "block"
				}), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element),
					c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight, f) {
					case "bottom":
						g = {
							top: c.top + c.height,
							left: c.left + c.width / 2 - d / 2
						};
						break;
					case "top":
						g = {
							top: c.top - e,
							left: c.left + c.width / 2 - d / 2
						};
						break;
					case "left":
						g = {
							top: c.top + c.height / 2 - e / 2,
							left: c.left - d
						};
						break;
					case "right":
						g = {
							top: c.top + c.height / 2 - e / 2,
							left: c.left + c.width
						}
				}
				this.applyPlacement(g, f), this.$element.trigger("shown")
			}
		},
		applyPlacement: function (a, b) {
			var f, g, h, i, c = this.tip(),
				d = c[0].offsetWidth,
				e = c[0].offsetHeight;
			c.offset(a).addClass(b).addClass("in"), f = c[0].offsetWidth, g = c[0].offsetHeight, "top" == b &&
			g != e && (a.top = a.top + e - g, i = !0), "bottom" == b || "top" == b ? (h = 0, a.left < 0 &&
			(h = -2 * a.left, a.left = 0, c.offset(a), f = c[0].offsetWidth, g = c[0].offsetHeight),
				this.replaceArrow(h - d + f, f, "left")) : this.replaceArrow(g - e, g, "top"), i && c.offset(
				a)
		},
		replaceArrow: function (a, b, c) {
			this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
		},
		setContent: function () {
			var a = this.tip(),
				b = this.getTitle();
			a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass(
				"fade in top bottom left right")
		},
		hide: function () {
			function e() {
				var b = setTimeout(function () {
					c.off(a.support.transition.end).detach()
				}, 500);
				c.one(a.support.transition.end, function () {
					clearTimeout(b), c.detach()
				})
			}
			var c = this.tip(),
				d = a.Event("hide");
			return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), a.support.transition &&
			this.$tip.hasClass("fade") ? e() : c.detach(), this.$element.trigger("hidden"), this)
		},
		fixTitle: function () {
			var a = this.$element;
			(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr(
				"data-original-title", a.attr("title") || "").attr("title", "")
		},
		hasContent: function () {
			return this.getTitle()
		},
		getPosition: function () {
			var b = this.$element[0];
			return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
				width: b.offsetWidth,
				height: b.offsetHeight
			}, this.$element.offset())
		},
		getTitle: function () {
			var a, b = this.$element,
				c = this.options;
			return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
		},
		tip: function () {
			return this.$tip = this.$tip || a(this.options.template)
		},
		arrow: function () {
			return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
		},
		validate: function () {
			this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
		},
		enable: function () {
			this.enabled = !0
		},
		disable: function () {
			this.enabled = !1
		},
		toggleEnabled: function () {
			this.enabled = !this.enabled
		},
		toggle: function (b) {
			var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
			c.tip().hasClass("in") ? c.hide() : c.show()
		},
		destroy: function () {
			this.hide().$element.off("." + this.type).removeData(this.type)
		}
	}, c = a.fn.tooltip, a.fn.tooltip = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("tooltip"),
				f = "object" == typeof c && c;
			e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	}, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = c, this
	}
}(window.jQuery), ! function (a) {
	"use strict";
	var c, b = function (a, b) {
		this.init("popover", a, b)
	};
	b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
		constructor: b,
		setContent: function () {
			var a = this.tip(),
				b = this.getTitle(),
				c = this.getContent();
			a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[
				this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
		},
		hasContent: function () {
			return this.getTitle() || this.getContent()
		},
		getContent: function () {
			var a, b = this.$element,
				c = this.options;
			return a = ("function" == typeof c.content ? c.content.call(b[0]) : c.content) || b.attr(
				"data-content")
		},
		tip: function () {
			return this.$tip || (this.$tip = a(this.options.template)), this.$tip
		},
		destroy: function () {
			this.hide().$element.off("." + this.type).removeData(this.type)
		}
	}), c = a.fn.popover, a.fn.popover = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("popover"),
				f = "object" == typeof c && c;
			e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), a.fn.popover.noConflict = function () {
		return a.fn.popover = c, this
	}
}(window.jQuery);

// prettyprint
eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([6P-RT-Y]|[1-3]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 q=1s;19.2I=!0;(U(){U L(a){U m(a){6 f=a.24(0);T(f!==92)V f;6 b=a.1n(1);V(f=r[b])?f:"0"<=b&&b<="7"?2J(a.W(1),8):b==="u"||b==="x"?2J(a.W(2),16):a.24(1)}U e(a){T(a<32)V(a<16?"\\\\x0":"\\\\x")+a.toString(16);a=2K.2L(a);T(a==="\\\\"||a==="-"||a==="["||a==="]")a="\\\\"+a;V a}U h(a){P(6 f=a.W(1,a.Q-1).1a(/\\\\u[\\dA-Fa-f]{4}|\\\\x[\\dA-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\S\\s]|[^\\\\]/g),a=[],b=[],o=f[0]==="^",c=o?1:0,i=f.Q;c<i;++c){6 j=f[c];T(/\\\\[bdsw]/i.1i(j))a.R(j);14{6 j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.R([j,d]);d<65||j>25||(d<65||j>90||b.R([1j.1F(65,j)|32,1j.26(d,90)|32]),d<97||j>25||b.R([1j.1F(97,j)&-33,1j.26(d,25)&-33]))}}b.sort(U(a,f){V a[0]-f[0]||f[1]-a[1]});f=[];j=[27,27];P(c=0;c<b.Q;++c)i=b[c],i[0]<=j[1]+1?j[1]=1j.1F(j[1],i[1]):f.R(j=i);b=["["];o&&b.R("^");b.R.2O(b,a);P(c=0;c<f.Q;++c)i=f[c],b.R(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.R("-"),b.R(e(i[1])));b.R("]");V b.1G("")}U y(a){P(6 f=a.2P.1a(/\\[(?:[^\\\\\\]]|\\\\[\\S\\s])*]|\\\\u[\\dA-Fa-f]{4}|\\\\x[\\dA-Fa-f]{2}|\\\\\\d+|\\\\[^\\dux]|\\(\\?[!:=]|[()^]|[^()[\\\\^]+/g),b=f.Q,d=[],c=0,i=0;c<b;++c){6 j=f[c];j==="("?++i:"\\\\"===j.1n(0)&&(j=+j.W(1))&&j<=i&&(d[j]=-1)}P(c=1;c<d.Q;++c)-1===d[c]&&(d[c]=++t);P(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===1t 0&&(f[c]="(?:")):"\\\\"===j.1n(0)&&(j=+j.W(1))&&j<=i&&(f[c]="\\\\"+d[i]);P(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");T(a.2Q&&s)P(c=0;c<b;++c)j=f[c],a=j.1n(0),j.Q>=2&&a==="["?f[c]=h(j):a!=="\\\\"&&(f[c]=j.1e(/[A-Za-z]/g,U(a){a=a.24(0);V"["+2K.2L(a&-33,a|32)+"]"}));V f.1G("")}P(6 t=0,s=!1,l=!1,p=0,d=a.Q;p<d;++p){6 g=a[p];T(g.2Q)l=!0;14 T(/[a-z]/i.1i(g.2P.1e(/\\\\u[\\da-f]{4}|\\\\x[\\da-f]{2}|\\\\[^UXux]/gi,""))){s=!0;l=!1;1b}}P(6 r={b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.Q;p<d;++p){g=a[p];T(g.2S||g.multiline)29 Error(""+g);n.R("(?:"+y(g)+")")}V 2T(n.1G("|"),l?"gi":"g")}U M(a){U m(a){2a(a.1u){15 1:T(e.1i(a.17))1b;P(6 g=a.1o;g;g=g.1c)m(g);g=a.2U;T("BR"===g||"LI"===g)h[s]="\\n",t[s<<1]=y++,t[s++<<1|1]=a;1b;15 3:15 4:g=a.1v,g.Q&&(g=p?g.1e(/\\r\\n?/g,"\\n"):g.1e(/[\\t\\n\\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.Q,t[s++<<1|1]=a)}}6 e=/(?:^|\\s)2b(?:\\s|$)/,h=[],y=0,t=[],s=0,l;a.1H?l=a.1H.2X:19.1I&&(l=1w.2Y.1I(a,q).2Z("30-31"));6 p=l&&"1J"===l.W(0,3);m(a);V{a:h.1G("").1e(/\\n$/,""),c:t}}U B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.R.2O(h,a.e))}U x(a,m){U e(a){P(6 l=a.d,p=[l,"1f"],d=0,g=a.a.1a(y)||[],r={},n=0,z=g.Q;n<z;++n){6 f=g[n],b=r[f],o=1t 0,c;T(1K b==="2c")c=!1;14{6 i=h[f.1n(0)];T(i)o=f.1a(i[1]),b=i[0];14{P(c=0;c<t;++c)T(i=m[c],o=f.1a(i[1])){b=i[0];1b}o||(b="1f")}T((c=b.Q>=5&&"X-"===b.W(0,5))&&!(o&&1K o[1]==="2c"))c=!1,b="34";c||(r[f]=b)}i=d;d+=f.Q;T(c){c=o[1];6 j=f.2d(c),k=j+c.Q;o[2]&&(k=f.Q-o[2].Q,j=k-c.Q);b=b.W(5);B(l+i,f.W(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.W(k),e,p)}14 p.R(l+i,b)}a.e=p}6 h={},y;(U(){P(6 e=a.concat(m),l=[],p={},d=0,g=e.Q;d<g;++d){6 r=e[d],n=r[3];T(n)P(6 k=n.Q;--k>=0;)h[n.1n(k)]=r;r=r[1];n=""+r;p.2e(n)||(l.R(r),p[n]=q)}l.R(/[\\S\\s]/);y=L(l)})();6 t=m.Q;V e}U u(a){6 m=[],e=[];a.2f?m.R(["1k",/^(?:\'\'\'(?:[^\'\\\\]|\\\\[\\S\\s]|\'\'?(?=[^\']))*(?:\'\'\'|$)|"""(?:[^"\\\\]|\\\\[\\S\\s]|""?(?=[^"]))*(?:"""|$)|\'(?:[^\'\\\\]|\\\\[\\S\\s])*(?:\'|$)|"(?:[^"\\\\]|\\\\[\\S\\s])*(?:"|$))/,q,"\'\\""]):a.1p?m.R(["1k",/^(?:\'(?:[^\'\\\\]|\\\\[\\S\\s])*(?:\'|$)|"(?:[^"\\\\]|\\\\[\\S\\s])*(?:"|$)|`(?:[^\\\\`]|\\\\[\\S\\s])*(?:`|$))/,q,"\'\\"`"]):m.R(["1k",/^(?:\'(?:[^\\n\\r\'\\\\]|\\\\.)*(?:\'|$)|"(?:[^\\n\\r"\\\\]|\\\\.)*(?:"|$))/,q,"\\"\'"]);a.35&&e.R(["1k",/^@"(?:[^"]|"")*(?:"|$)/,q]);6 h=a.1d;h&&(a.1g?(h>1?m.R(["1l",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.R(["1l",/^#(?:(?:define|2g|14|endif|error|ifdef|include|ifndef|line|pragma|1L|warning)\\b|[^\\n\\r]*)/,q,"#"]),e.R(["1k",/^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h|[a-z]\\w*)>/,q])):m.R(["1l",/^#[^\\n\\r]*/,q,"#"]));a.1g&&(e.R(["1l",/^\\/\\/[^\\n\\r]*/,q]),e.R(["1l",/^\\/\\*[\\S\\s]*?(?:\\*\\/|$)/,q]));a.1q&&e.R(["X-36",/^(?:^^\\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\\(|\\*|\\*=|\\+=|,|-=|->|\\/|\\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\\^=|\\^\\^|\\^\\^=|{|\\||\\|=|\\|\\||\\|\\|=|~|1b|15|37|1M|do|14|1O|38|V|29|1x|1K)\\s*(\\/(?=[^*/])(?:[^/[\\\\]|\\\\[\\S\\s]|\\[(?:[^\\\\\\]]|\\\\[\\S\\s])*(?:]|$))+\\/)/]);(h=a.2h)&&e.R(["2i",h]);a=(""+a.Y).1e(/^ | $/g,"");a.Q&&e.R(["39",2T("^(?:"+a.1e(/[\\s,]+/g,"|")+")\\\\b"),q]);m.R(["1f",/^\\s+/,q," \\r\\n\\t\\3a"]);e.R(["2j",/^@[$_a-z][\\w$@]*/i,q],["2i",/^(?:[@_]?[A-Z]+[a-z][\\w$@]*|\\w+_t\\b)/,q],["1f",/^[$_a-z][\\w$@]*/i,q],["2j",/^(?:0x[\\da-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+-]?\\d+)?)[a-z]*/i,q,"0123456789"],["1f",/^\\\\[\\S\\s]?/,q],["1P",/^.[^\\s\\w"-$\'./@\\\\`]*/,q]);V x(m,e)}U D(a,m){U e(a){2a(a.1u){15 1:T(k.1i(a.17))1b;T("BR"===a.2U)h(a),a.18&&a.18.3c(a);14 P(a=a.1o;a;a=a.1c)e(a);1b;15 3:15 4:T(p){6 b=a.1v,d=b.1a(t);T(d){6 c=b.W(0,d.3d);a.1v=c;(b=b.W(d.3d+d[0].Q))&&a.18.3e(s.2k(b),a.1c);h(a);c||a.18.3c(a)}}}}U h(a){U b(a,d){6 e=d?a.cloneNode(!1):a,f=a.18;T(f){6 f=b(f,1),g=a.1c;f.1m(e);P(6 h=g;h;h=g)g=h.1c,f.1m(h)}V e}P(;!a.1c;)T(a=a.18,!a)V;P(6 a=b(a.1c,0),e;(e=a.18)&&e.1u===1;)a=e;d.R(a)}6 k=/(?:^|\\s)2b(?:\\s|$)/,t=/\\r\\n?|\\n/,s=a.3f,l;a.1H?l=a.1H.2X:19.1I&&(l=s.2Y.1I(a,q).2Z("30-31"));6 p=l&&"1J"===l.W(0,3);P(l=s.1Q("LI");a.1o;)l.1m(a.1o);P(6 d=[l],g=0;g<d.Q;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",m);6 r=s.1Q("OL");r.17="linenums";P(6 n=1j.1F(0,m-1|0)||0,g=0,z=d.Q;g<z;++g)l=d[g],l.17="L"+(g+n)%10,l.1o||l.1m(s.2k("\\3a")),r.1m(l);a.1m(r)}U k(a,m){P(6 e=m.Q;--e>=0;){6 h=m[e];A.2e(h)?19.1R&&1R.warn("cannot 3g language handler %s",h):A[h]=a}}U C(a,m){T(!a||!A.2e(a))a=/^\\s*</.1i(m)?"1y-3h":"1y-1S";V A[a]}U E(a){6 m=a.g;1x{6 e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);6 k=/\\bMSIE\\b/.1i(navigator.userAgent),m=/\\n/g,t=a.a,s=t.Q,e=0,l=a.c,p=l.Q,h=0,d=a.e,g=d.Q,a=0;d[g]=s;6 r,n;P(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;P(n=r=0;n<g;){P(6 z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}P(d.Q=r;h<p;){6 o=l[h+2]||s,c=d[a+2]||s,b=1j.26(o,c),i=l[h+1],j;T(i.1u!==1&&(j=t.W(e,b))){k&&(j=j.1e(m,"\\r"));i.1v=j;6 u=i.3f,v=u.1Q("SPAN");v.17=d[a+1];6 x=i.18;x.replaceChild(v,i);v.1m(i);e<o&&(l[h+1]=i=u.2k(t.W(b,o)),x.3e(i,v.1c))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}2l(w){"1R"in 19&&1R.log(w&&w.2m?w.2m:w)}}6 v=["1b,37,do,14,P,T,V,1T"],w=[[v,"auto,15,char,const,1y,double,enum,extern,3i,2n,3j,long,register,short,signed,sizeof,static,struct,2a,typedef,union,unsigned,1t,volatile"],"2l,1U,1M,1V,1z,2o,operator,private,protected,public,this,29,1W,1x,1K"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,3k,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,3l,final,1O,implements,1z,38,1s,native,2p,strictfp,2q,synchronized,throws,transient"],H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,2r,3o,group,implicit,in,interface,internal,into,is,lock,object,out,3g,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,2c,select,uint,ulong,unchecked,unsafe,ushort,6"],w=[w,"debugger,1X,3k,U,get,1s,2t,undefined,6,3p,3q,27"],I=[v,"2u,as,assert,1U,3r,del,2g,except,exec,1O,3o,2S,1z,in,is,lambda,nonlocal,2v,or,pass,2x,raise,1x,3p,3s,False,True,None"],J=[v,"alias,2u,begin,15,1U,3r,defined,2y,end,ensure,1V,in,module,2z,nil,2v,or,2A,rescue,retry,self,2q,2B,1W,1L,1Y,1A,3t,3s,2C,2D"],v=[v,"15,done,2g,esac,1X,fi,U,in,2E,2t,2B,1A"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|2m|(const_)?iterator|(multi)?(2t|map)|bitset|u?(3j|3i)\\d*)/,N=/\\S/,O=u({Y:[F,H,w,"3u,1M,3v,do,3w,2y,1X,3x,2r,P,2n,T,1z,3y,2E,my,2z,no,3A,2x,2p,2A,3B,3C,1L,1Y,1A,3D,3E,1T,2C,2D"+I,J,v],1d:!0,1g:!0,1p:!0,1q:!0}),A={};k(O,["1y-1S"]);k(x([],[["1f",/^[^<?]+/],["3F",/^<!\\w[^>]*(?:>|$)/],["1l",/^<\\!--[\\S\\s]*?(?:--\\>|$)/],["X-",/^<\\?([\\S\\s]+?)(?:\\?>|$)/],["X-",/^<%([\\S\\s]+?)(?:%>|$)/],["1P",/^(?:<[%?]|[%?]>)/],["X-",/^<1Z\\b[^>]*>([\\S\\s]+?)<\\/1Z\\b[^>]*>/i],["X-js",/^<3G\\b[^>]*>([\\S\\s]*?)(<\\/3G\\b[^>]*>)/i],["X-20",/^<1r\\b[^>]*>([\\S\\s]*?)(<\\/1r\\b[^>]*>)/i],["X-in.21",/^(<\\/?[a-z][^<>]*>)/i]]),["1y-3h","htm","html","mxml","xhtml","xml","xsl"]);k(x([["1f",/^\\s+/,q," \\t\\r\\n"],["2G",/^(?:"[^"]*"?|\'[^\']*\'?)/,q,"\\"\'"]],[["21",/^^<\\/?[a-z](?:[\\w-.:]*\\w)?|\\/?>$/i],["3H",/^(?!1r[\\s=]|on)[a-z](?:[\\w:-]*\\w)?/i],["X-uq.3J",/^=\\s*([^\\s"\'>]*(?:[^\\s"\'/>]|\\/(?=\\s)))/],["1P",/^[/<->]+/],["X-js",/^on\\w+\\s*=\\s*"([^"]+)"/i],["X-js",/^on\\w+\\s*=\\s*\'([^\']+)\'/i],["X-js",/^on\\w+\\s*=\\s*([^\\s"\'>]+)/i],["X-20",/^1r\\s*=\\s*"([^"]+)"/i],["X-20",/^1r\\s*=\\s*\'([^\']+)\'/i],["X-20",/^1r\\s*=\\s*([^\\s"\'>]+)/i]]),["in.21"]);k(x([],[["2G",/^[\\S\\s]+/]]),["uq.3J"]);k(u({Y:F,1d:!0,1g:!0,2h:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({Y:"1s,1W,1V"}),["json"]);k(u({Y:H,1d:!0,1g:!0,35:!0,2h:K}),["cs"]);k(u({Y:G,1g:!0}),["java"]);k(u({Y:v,1d:!0,1p:!0}),["bsh","csh","sh"]);k(u({Y:I,1d:!0,1p:!0,2f:!0}),["cv","py"]);k(u({Y:"3u,1M,3v,do,3w,2y,1X,3x,2r,P,2n,T,1z,3y,2E,my,2z,no,3A,2x,2p,2A,3B,3C,1L,1Y,1A,3D,3E,1T,2C,2D",1d:!0,1p:!0,1q:!0}),["perl","pl","pm"]);k(u({Y:J,1d:!0,1p:!0,1q:!0}),["rb"]);k(u({Y:w,1g:!0,1q:!0}),["js"]);k(u({Y:"all,2u,by,2l,1U,14,3l,1V,1O,P,T,in,is,isnt,loop,2o,no,2v,1s,of,off,on,or,V,2q,2B,1W,1x,1Y,1A,3t,1T,yes",1d:3,1g:!0,multilineStrings:!0,2f:!0,1q:!0}),["coffee"]);k(x([],[["1k",/^[\\S\\s]+/]]),["36"]);19.prettyPrintOne=U(a,m,e){6 h=1w.1Q("PRE");h.3K=a;e&&D(h,e);E({g:m,i:e,h:h});V h.3K};19.prettyPrint=U(a){U m(){P(6 e=19.2I?l.22()+3L:3q;p<h.Q&&l.22()<e;p++){6 n=h[p],k=n.17;T(k.2d("3M")>=0){6 k=k.1a(g),f,b;T(b=!k){b=n;P(6 o=1t 0,c=b.1o;c;c=c.1c)6 i=c.1u,o=i===1?o?b:c:i===3?N.1i(c.1v)?b:o:o;b=(f=o===b?1t 0:o)&&"CODE"===f.23}b&&(k=f.17.1a(g));k&&(k=k[1]);b=!1;P(o=n.18;o;o=o.18)T((o.23==="1J"||o.23==="1S"||o.23==="1Z")&&o.17&&o.17.2d("3M")>=0){b=!0;1b}b||((b=(b=n.17.1a(/\\blinenums\\b(?::(\\d+))?/))?b[1]&&b[1].Q?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.Q?setTimeout(m,3L):a&&a()}P(6 e=[1w.2H("1J"),1w.2H("1S"),1w.2H("1Z")],h=[],k=0;k<e.Q;++k)P(6 t=0,s=e[k].Q;t<s;++t)h.R(e[k][t]);6 e=q,l=3N;l.22||(l={22:U(){V+2o 3N}});6 p=0,d,g=/\\blang(?:uage)?-([\\w.]+)(?!\\S)/;m()};19.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"3H",PR_ATTRIB_VALUE:"2G",PR_COMMENT:"1l",PR_DECLARATION:"3F",PR_KEYWORD:"39",PR_LITERAL:"2j",PR_NOCODE:"2b",PR_PLAIN:"1f",PR_PUNCTUATION:"1P",PR_SOURCE:"34",PR_STRING:"1k",PR_TAG:"21",PR_TYPE:"2i"}})();',[],236,'||||||var|||||||||||||||||||||||||||||||||||||||||||||for|length|push||if|function|return|substring|lang|keywords||||||else|case||className|parentNode|window|match|break|nextSibling|hashComments|replace|pln|cStyleComments||test|Math|str|com|appendChild|charAt|firstChild|multiLineStrings|regexLiterals|style|null|void|nodeType|nodeValue|document|try|default|import|until|||||max|join|currentStyle|getComputedStyle|pre|typeof|undef|delete||finally|pun|createElement|console|code|while|class|false|true|eval|unless|xmp|css|tag|now|tagName|charCodeAt|122|min|NaN||throw|switch|nocode|string|indexOf|hasOwnProperty|tripleQuotedStrings|elif|types|typ|lit|createTextNode|catch|stack|goto|new|package|super|foreach||set|and|not||print|elsif|next|redo|then|BEGIN|END|local||atv|getElementsByTagName|PR_SHOULD_USE_CONTINUATION|parseInt|String|fromCharCode|||apply|source|ignoreCase||global|RegExp|nodeName|||whiteSpace|defaultView|getPropertyValue|white|space|||src|verbatimStrings|regex|continue|instanceof|kwd|xa0||removeChild|index|insertBefore|ownerDocument|override|markup|float|int|export|extends|||from|with|Infinity|def|yield|when|caller|die|dump|exit|last||our|require|sub|use|wantarray|dec|script|atn||val|innerHTML|250|prettyprint|Date'.split('|'),0,{}));

!function(){var a=jQuery.event.special,b="D"+ +new Date,c="D"+(+new Date+1);a.scrollstart={setup:function(){var c,d=function(b){var d=this,e=arguments;c?clearTimeout(c):(b.type="scrollstart",jQuery.event.dispatch.apply(d,e)),c=setTimeout(function(){c=null},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(b,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(b))}},a.scrollstop={latency:300,setup:function(){var b,d=function(c){var d=this,e=arguments;b&&clearTimeout(b),b=setTimeout(function(){b=null,c.type="scrollstop",jQuery.event.dispatch.apply(d,e)},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(c,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(c))}}}();

if(document.getElementsByClassName('OwO').length > 0) {
	var OwO = new OwO({
		logo: '<i class="fa fa-smile-o" aria-hidden="true"></i> ??????',
		container: document.getElementsByClassName('OwO')[0],
		target: document.getElementsByClassName('OwO-textarea')[0],
		api: window._deel.url + '/data/OwO.json',
		position: 'down',
		width: '100%',
		maxHeight: '250px', height: '150px'
	});
}

+(function($){
$(document).ready(function(){

	$('.toggle-search').click(function(){
		$('.toggle-search').toggleClass('active');
		$('.search-expand').fadeToggle(250);
		setTimeout(function(){$('.search-expand input').focus();},300);
	});

	if( _deel.ajaxpager && $(".content").length > 0 && $(".excerpt").length && $(".pagination").length > 0){
		let ias = new InfiniteAjaxScroll('.content', {
			    container : '.content',
			    item: '.excerpt',
			    pagination: '.pagination',
			    next: '.next-page a',
				spinner: {
					element: '.pagination-loading',
					show: function(element) {
						$(element).css("display", "");
					},
					hide: function(element) {
						$(element).css("display", "none");
					}
				},
				trigger: {
					element: '.trigger',
					show: function(element) {
						$(element).css("display", "");
					},
					hide: function(element) {
						$(element).css("display", "none");
					}
				}
		});
	}else{
		$(".trigger").css("display", "none");
		$(".pagination-loading").css("display", "none");
	}

	window.prettyPrint && window.prettyPrint()

		$('.article-tags a, .post-tags a').each(function() {
        $(this).tooltip({
            container: 'body',
            placement: 'top',
            title: '???????????? ' + $(this).text() + ' ?????????'
        })
    })

	/* components
	 * ====================================================
	*/
	if( $('.article-content').length ) $('.article-content a').tooltip({container: 'body'})
	if( $('.d_reader').length ) $('.d_reader a').tooltip({container: 'body'})
	if( $('.readers').length ) $('.readers .avatar').parent().tooltip({container: 'body'})
	if( $('.social').length ) $('.social a').tooltip({container: 'body'})
	if( $('.d_tags').length ) $('.d_tags a').tooltip({container: 'body'})
	$('.article-content').removeAttr('height')

	/* sidebar scroll !ie6
	 * ====================================================
	*/
	if($('.sidebar').length ){
		var rollbox = $('.sidebar .widget'), rolllen = rollbox.length;
		if( rolllen && 0<_deel.roll[0]<=rolllen && 0<_deel.roll[1]<=rolllen ){
			$(window).scroll(function(){
				var roll = document.documentElement.scrollTop+document.body.scrollTop;
				if( roll>rollbox.eq(rolllen-1).offset().top+rollbox.eq(rolllen-1).height() ){
					if( $('.widgetRoller').length==0 ){
						rollbox.parent().append( '<div class="widgetRoller"></div>' );
						rollbox.eq(_deel.roll[0]-1).clone().appendTo('.widgetRoller');
						if( _deel.roll[0]!==_deel.roll[1] )
							rollbox.eq(_deel.roll[1]-1).clone().appendTo('.widgetRoller')
						var toper = 10;
						if($('body').attr('id')=='hasfixed') toper = 69;
						$('.widgetRoller').css({position:'fixed',top:10,zIndex:0,width:360});
					}else{
						$('.widgetRoller').fadeIn(300);
					}
				}else{
					$('.widgetRoller').hide();
				}
			})
		}
			$(window).scroll(function(){
			var scroller = $('.rollto');
			document.documentElement.scrollTop+document.body.scrollTop>200?scroller.fadeIn():scroller.fadeOut();
		})
	}

	/* nav for tablet and phone
	 * ====================================================
	*/
	$('.navbar .nav:first').after('<div class="screen-mini"><button data-type="screen-nav" class="btn btn-inverse screen-nav"><i class="fa fa-list"></i></button></div>')

	/* append body code
	 * ====================================================
	*/
	$('body').append('<div class="rollto"><button class="btn btn-inverse" data-type="totop" title="?????????"><i class="fa fa-arrow-up"></i></button>'+(_deel.commenton?'<button class="btn btn-inverse" data-type="torespond" title="?????????"><i class="fa fa-comment-o"></i></button>':'')+'</div>')

;(function($) {
        $.extend({
            tipsBox: function(options) {
                options = $.extend({
                    obj: null,  //jq?????????????????????html???????????????
                    str: "+1",  //??????????????????????????????;??????????????????html??????: "<b>+1</b>"
                    startSize: "12px",  //???????????????????????????
                    endSize: "30px",    //???????????????????????????
                    interval: 600,  //??????????????????
                    color: "red",    //????????????
                    callback: function() {}    //????????????
                }, options);
                $("body").append("<span class='num'>"+ options.str +"</span>");
                var box = $(".num");
                var left = options.obj.offset().left + options.obj.width() / 2;
                var top = options.obj.offset().top - options.obj.height();
                box.css({
                    "position": "absolute",
                    "left": left + "px",
                    "top": top + "px",
                    "z-index": 9999,
                    "font-size": options.startSize,
                    "line-height": options.endSize,
                    "color": options.color
                });
                box.animate({
                    "font-size": options.endSize,
                    "opacity": "0",
                    "top": top - parseInt(options.endSize) + "px"
                }, options.interval , function() {
                    box.remove();
                    options.callback();
                });
            }
        });
    })(jQuery);

$.fn.postLike = function() {
	if ($(this).hasClass('actived')) {
		return alert('????????????????????????')
	} else {
		$(this).addClass('actived');
		var id = $(this).data("id"),
		action = $(this).data('action'),
		rateHolder = $(this).children('.count');
		var ajax_data = {
			action: "bigfa_like",
			um_id: id,
			um_action: action
		};
		$.post("/wp-admin/admin-ajax.php", ajax_data,
		function(data) {
			$(rateHolder).html(data);
		});
		$.tipsBox({
				obj: $(this),
				str: "+1",
                callback: function() {
                    //alert(5);
                }
			});
		return false;
	}
};
$(document).on("click", "#Addlike",function() {
	$(this).postLike();
});
	$(document).on('click', function(e){
        e = e || window.event;
        var target = e.target || e.srcElement, _ta = $(target)

        if( _ta.hasClass('disabled') ) return
        if( _ta.parent().attr('data-type') ) _ta = $(_ta.parent()[0])
        if( _ta.parent().parent().attr('data-type') ) _ta = $(_ta.parent().parent()[0])

        var type = _ta.attr('data-type')

        switch( type ){
            case 'screen-nav':
            	var el = $('.navbar .nav'), so = $('.navbar .nav')

            	el.toggleClass('active')
            	so.slideToggle(300)

            break; case 'totop':
            	scrollTo()

            break; case 'torespond':
            	scrollTo('#comment-ad')
				$('#comment').focus()
				var name = document.getElementsByName("message")
				name[0].focus()
            // case 'comment-insert-smilie':
            // 	if( !$('#comment-smilies').length ){
            // 		$('#commentform .comt-box').append('<div id="comment-smilies" class="hide"></div>')
            // 		var res = ''
			// 		for( key in options.smilies ){
			// 			res += '<img data-simle="'+key+'" data-type="comment-smilie" src="'+_deel.url+'/img/smilies/icon_'+options.smilies[key]+'.gif">'
			// 		}
			// 		$('#comment-smilies').html( res )
            // 	}
            // 	$('#comment-smilies').slideToggle(100)


            break; case 'comment-smilie':
            	grin( _ta.attr('data-simle') )
            	_ta.parent().slideUp(300)

            break; case 'switch-author':
            	$('.comt-comterinfo').slideToggle(300);
				$('#author').focus();
            	

            break; 
        }
    })
	


	$('.commentlist .url').attr('target','_blank')
	
	$('#comment-author-info p input').focus(function() {
		$(this).parent('p').addClass('on')
	})
	$('#comment-author-info p input').blur(function() {
		$(this).parent('p').removeClass('on')
	})

	$('#comment').focus(function(){
		if( $('#author').val()=='' || $('#email').val()=='' ) $('.comt-comterinfo').slideDown(300)
	})

	var edit_mode = '0',
		txt1 = '<div class="comt-tip comt-loading">????????????, ?????????...</div>',
		txt2 = '<div class="comt-tip comt-error">#</div>',
		txt3 = '">????????????',
		cancel_edit = '????????????',
		edit,
		num = 1,
		comm_array = [];
	comm_array.push('');

	$comments = $('#comments-title');
	$cancel = $('#cancel-comment-reply-link');
	cancel_text = $cancel.text();
	$submit = $('#commentform #submit');
	$submit.attr('disabled', false);
	$('.comt-tips').append(txt1 + txt2);
	$('.comt-loading').hide();
	$('.comt-error').hide();
	$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$('#commentform').submit(function() {
		$('.comt-loading').show();
		$submit.attr('disabled', true).fadeTo('slow', 0.5);
		if (edit) $('#comment').after('<input type="text" name="edit_id" id="edit_id" value="' + edit + '" style="display:none;" />');
		$.ajax({
			url: _deel.url+'/ajax/comment.php',
			data: $(this).serialize(),
			type: $(this).attr('method'),
			error: function(request) {
				$('.comt-loading').hide();
				$('.comt-error').show().html(request.responseText);
				setTimeout(function() {
					$submit.attr('disabled', false).fadeTo('slow', 1);
					$('.comt-error').fadeOut()
				},
				3000)
			},
			success: function(data) {
				$('.comt-loading').hide();
				comm_array.push($('#comment').val());
				$('textarea').each(function() {
					this.value = ''
				});
				var t = addComment,
				cancel = t.I('cancel-comment-reply-link'),
				temp = t.I('wp-temp-form-div'),
				respond = t.I(t.respondId),
				post = t.I('comment_post_ID').value,
				parent = t.I('comment_parent').value;
				if (!edit && $comments.length) {
					n = parseInt($comments.text().match(/\d+/));
					$comments.text($comments.text().replace(n, n + 1))
				}
				new_htm = '" id="new_comm_' + num + '"></';
				new_htm = (parent == '0') ? ('\n<ol style="clear:both;" class="commentlist commentnew' + new_htm + 'ol>') : ('\n<ul class="children' + new_htm + 'ul>');
				ok_htm = '\n<span id="success_' + num + txt3;
				ok_htm += '</span><span></span>\n';

				if( parent == '0' ){
					if( $('#postcomments .commentlist').length ){
						$('#postcomments .commentlist').before(new_htm);
					}else{
						$('#respond').after(new_htm);
					}
				}else{
					$('#respond').after(new_htm);
				}

				$('#comment-author-info').slideUp()

				console.log( $('#new_comm_' + num) )
				$('#new_comm_' + num).hide().append(data);
				$('#new_comm_' + num + ' li').append(ok_htm);
				$('#new_comm_' + num).fadeIn(4000);
				$body.animate({
					scrollTop: $('#new_comm_' + num).offset().top - 200
				},
				500);
				$('.comt-avatar .avatar').attr('src',$('.commentnew .avatar:last').attr('src'));
				countdown();
				num++;
				edit = '';
				$('*').remove('#edit_id');
				cancel.style.display = 'none';
				cancel.onclick = null;
				t.I('comment_parent').value = '0';
				if (temp && respond) {
					temp.parentNode.insertBefore(respond, temp);
					temp.parentNode.removeChild(temp)
				}
			}
		});
		return false
	});
	addComment = {
		moveForm: function(commId, parentId, respondId, postId, num) {
			var t = this,
			div, comm = t.I(commId),
			respond = t.I(respondId),
			cancel = t.I('cancel-comment-reply-link'),
			parent = t.I('comment_parent'),
			post = t.I('comment_post_ID');
			if (edit) exit_prev_edit();
			num ? (t.I('comment').value = comm_array[num], edit = t.I('new_comm_' + num).innerHTML.match(/(comment-)(\d+)/)[2], $new_sucs = $('#success_' + num), $new_sucs.hide(), $new_comm = $('#new_comm_' + num), $new_comm.hide(), $cancel.text(cancel_edit)) : $cancel.text(cancel_text);
			t.respondId = respondId;
			postId = postId || false;
			if (!t.I('wp-temp-form-div')) {
				div = document.createElement('div');
				div.id = 'wp-temp-form-div';
				div.style.display = 'none';
				respond.parentNode.insertBefore(div, respond)
			} ! comm ? (temp = t.I('wp-temp-form-div'), t.I('comment_parent').value = '0', temp.parentNode.insertBefore(respond, temp), temp.parentNode.removeChild(temp)) : comm.parentNode.insertBefore(respond, comm.nextSibling);
			$body.animate({
				scrollTop: $('#respond').offset().top - 180
			},
			400);
			if (post && postId) post.value = postId;
			parent.value = parentId;
			cancel.style.display = '';
			cancel.onclick = function() {
				if (edit) exit_prev_edit();
				var t = addComment,
				temp = t.I('wp-temp-form-div'),
				respond = t.I(t.respondId);
				t.I('comment_parent').value = '0';
				if (temp && respond) {
					temp.parentNode.insertBefore(respond, temp);
					temp.parentNode.removeChild(temp)
				}
				this.style.display = 'none';
				this.onclick = null;
				return false
			};
			try {
				t.I('comment').focus()
			} catch(e) {}
			return false
		},
		I: function(e) {
			return document.getElementById(e)
		}
	};
	function exit_prev_edit() {
		$new_comm.show();
		$new_sucs.show();
		$('textarea').each(function() {
			this.value = ''
		});
		edit = ''
	}
	var wait = 15,
	submit_val = $submit.val();
	function countdown() {
		if (wait > 0) {
			$submit.val(wait);
			wait--;
			setTimeout(countdown, 1000)
		} else {
			$submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
			wait = 15
		}
	}

	/* functions
	 * ====================================================
	*/
	function scrollTo(name, speed){
        if( !speed ) speed = 1000
        if( !name ){
            $('html,body').animate({scrollTop: 0},speed)
        }else{
            if( $(name).length>0 ){
                $('html,body').animate({scrollTop: $(name).offset().top},speed)
            }
        }
    }

	function grin(tag) {
		tag = ' :' + tag + ': ';
		myField = document.getElementById('comment');
		document.selection ? (myField.focus(), sel = document.selection.createRange(), sel.text = tag, myField.focus()) : insertTag(tag)
	}

	function insertTag(tag) {
		myField = document.getElementById('comment');
		myField.selectionStart || myField.selectionStart == '0' ? (startPos = myField.selectionStart, endPos = myField.selectionEnd, cursorPos = startPos, myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length), cursorPos += tag.length, myField.focus(), myField.selectionStart = cursorPos, myField.selectionEnd = cursorPos) : (myField.value += tag, myField.focus())
	}

})
})(window.jQuery);