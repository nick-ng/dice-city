const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"assets/index-EFHipYG0.js",
			"assets/message-DxLP4HAY.js",
			"assets/utils-BPyf_07k.js",
			"assets/game-JJIrw0B7.js",
			"assets/index-D6BeXWvP.js",
			"assets/index-CG3tvbBJ.js",
			"assets/business-centre-sL-2ZRYW.js",
			"assets/index-B6pMByA-.js",
			"assets/index-9NHRHJdH.js",
			"assets/build-B-CdZKa0.js",
			"assets/index-CO0zrVUQ.js",
		]),
) => i.map((i) => d[i]);
function Bf(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const l = Object.getOwnPropertyDescriptor(r, i);
					l &&
						Object.defineProperty(
							e,
							i,
							l.get ? l : { enumerable: !0, get: () => r[i] },
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const l of i)
			if (l.type === "childList")
				for (const o of l.addedNodes)
					o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const l = {};
		return (
			i.integrity && (l.integrity = i.integrity),
			i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (l.credentials = "include")
				: i.crossOrigin === "anonymous"
					? (l.credentials = "omit")
					: (l.credentials = "same-origin"),
			l
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const l = n(i);
		fetch(i.href, l);
	}
})();
var hn =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
			? window
			: typeof global < "u"
				? global
				: typeof self < "u"
					? self
					: {};
function tc(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
function Zf(e) {
	if (e.__esModule) return e;
	var t = e.default;
	if (typeof t == "function") {
		var n = function r() {
			return this instanceof r
				? Reflect.construct(t, arguments, this.constructor)
				: t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return (
		Object.defineProperty(n, "__esModule", { value: !0 }),
		Object.keys(e).forEach(function (r) {
			var i = Object.getOwnPropertyDescriptor(e, r);
			Object.defineProperty(
				n,
				r,
				i.get
					? i
					: {
							enumerable: !0,
							get: function () {
								return e[r];
							},
						},
			);
		}),
		n
	);
}
var nc = { exports: {} },
	Cl = {},
	rc = { exports: {} },
	V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var li = Symbol.for("react.element"),
	Wf = Symbol.for("react.portal"),
	Hf = Symbol.for("react.fragment"),
	Qf = Symbol.for("react.strict_mode"),
	Gf = Symbol.for("react.profiler"),
	Kf = Symbol.for("react.provider"),
	Yf = Symbol.for("react.context"),
	Xf = Symbol.for("react.forward_ref"),
	Jf = Symbol.for("react.suspense"),
	qf = Symbol.for("react.memo"),
	bf = Symbol.for("react.lazy"),
	Ra = Symbol.iterator;
function ep(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Ra && e[Ra]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var ic = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	lc = Object.assign,
	oc = {};
function bn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = oc),
		(this.updater = n || ic);
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sc() {}
sc.prototype = bn.prototype;
function Ns(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = oc),
		(this.updater = n || ic);
}
var Ts = (Ns.prototype = new sc());
Ts.constructor = Ns;
lc(Ts, bn.prototype);
Ts.isPureReactComponent = !0;
var Oa = Array.isArray,
	ac = Object.prototype.hasOwnProperty,
	Ps = { current: null },
	uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
	var r,
		i = {},
		l = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (l = "" + t.key),
		t))
			ac.call(t, r) && !uc.hasOwnProperty(r) && (i[r] = t[r]);
	var s = arguments.length - 2;
	if (s === 1) i.children = n;
	else if (1 < s) {
		for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
		i.children = a;
	}
	if (e && e.defaultProps)
		for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
	return {
		$$typeof: li,
		type: e,
		key: l,
		ref: o,
		props: i,
		_owner: Ps.current,
	};
}
function tp(e, t) {
	return {
		$$typeof: li,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function js(e) {
	return typeof e == "object" && e !== null && e.$$typeof === li;
}
function np(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var La = /\/+/g;
function Ql(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? np("" + e.key)
		: t.toString(36);
}
function Li(e, t, n, r, i) {
	var l = typeof e;
	(l === "undefined" || l === "boolean") && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else
		switch (l) {
			case "string":
			case "number":
				o = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case li:
					case Wf:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(i = i(o)),
			(e = r === "" ? "." + Ql(o, 0) : r),
			Oa(i)
				? ((n = ""),
					e != null && (n = e.replace(La, "$&/") + "/"),
					Li(i, t, n, "", function (u) {
						return u;
					}))
				: i != null &&
					(js(i) &&
						(i = tp(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ""
									: ("" + i.key).replace(La, "$&/") + "/") +
								e,
						)),
					t.push(i)),
			1
		);
	if (((o = 0), (r = r === "" ? "." : r + ":"), Oa(e)))
		for (var s = 0; s < e.length; s++) {
			l = e[s];
			var a = r + Ql(l, s);
			o += Li(l, t, n, a, i);
		}
	else if (((a = ep(e)), typeof a == "function"))
		for (e = a.call(e), s = 0; !(l = e.next()).done; )
			(l = l.value), (a = r + Ql(l, s++)), (o += Li(l, t, n, a, i));
	else if (l === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead.",
			))
		);
	return o;
}
function mi(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Li(e, r, "", "", function (l) {
			return t.call(n, l, i++);
		}),
		r
	);
}
function rp(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Ee = { current: null },
	Ii = { transition: null },
	ip = {
		ReactCurrentDispatcher: Ee,
		ReactCurrentBatchConfig: Ii,
		ReactCurrentOwner: Ps,
	};
function dc() {
	throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
	map: mi,
	forEach: function (e, t, n) {
		mi(
			e,
			function () {
				t.apply(this, arguments);
			},
			n,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			mi(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			mi(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!js(e))
			throw Error(
				"React.Children.only expected to receive a single React element child.",
			);
		return e;
	},
};
V.Component = bn;
V.Fragment = Hf;
V.Profiler = Gf;
V.PureComponent = Ns;
V.StrictMode = Qf;
V.Suspense = Jf;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
V.act = dc;
V.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				".",
		);
	var r = lc({}, e.props),
		i = e.key,
		l = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((l = t.ref), (o = Ps.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var s = e.type.defaultProps;
		for (a in t)
			ac.call(t, a) &&
				!uc.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		s = Array(a);
		for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
		r.children = s;
	}
	return { $$typeof: li, type: e.type, key: i, ref: l, props: r, _owner: o };
};
V.createContext = function (e) {
	return (
		(e = {
			$$typeof: Yf,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Kf, _context: e }),
		(e.Consumer = e)
	);
};
V.createElement = cc;
V.createFactory = function (e) {
	var t = cc.bind(null, e);
	return (t.type = e), t;
};
V.createRef = function () {
	return { current: null };
};
V.forwardRef = function (e) {
	return { $$typeof: Xf, render: e };
};
V.isValidElement = js;
V.lazy = function (e) {
	return { $$typeof: bf, _payload: { _status: -1, _result: e }, _init: rp };
};
V.memo = function (e, t) {
	return { $$typeof: qf, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
	var t = Ii.transition;
	Ii.transition = {};
	try {
		e();
	} finally {
		Ii.transition = t;
	}
};
V.unstable_act = dc;
V.useCallback = function (e, t) {
	return Ee.current.useCallback(e, t);
};
V.useContext = function (e) {
	return Ee.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
	return Ee.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
	return Ee.current.useEffect(e, t);
};
V.useId = function () {
	return Ee.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
	return Ee.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
	return Ee.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
	return Ee.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
	return Ee.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
	return Ee.current.useReducer(e, t, n);
};
V.useRef = function (e) {
	return Ee.current.useRef(e);
};
V.useState = function (e) {
	return Ee.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
	return Ee.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
	return Ee.current.useTransition();
};
V.version = "18.3.1";
rc.exports = V;
var k = rc.exports;
const lp = tc(k),
	op = Bf({ __proto__: null, default: lp }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp = k,
	ap = Symbol.for("react.element"),
	up = Symbol.for("react.fragment"),
	cp = Object.prototype.hasOwnProperty,
	dp = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function fc(e, t, n) {
	var r,
		i = {},
		l = null,
		o = null;
	n !== void 0 && (l = "" + n),
		t.key !== void 0 && (l = "" + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) cp.call(t, r) && !fp.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: ap,
		type: e,
		key: l,
		ref: o,
		props: i,
		_owner: dp.current,
	};
}
Cl.Fragment = up;
Cl.jsx = fc;
Cl.jsxs = fc;
nc.exports = Cl;
var x = nc.exports,
	Eo = {},
	pc = { exports: {} },
	De = {},
	hc = { exports: {} },
	mc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(L, $) {
		var F = L.length;
		L.push($);
		e: for (; 0 < F; ) {
			var ne = (F - 1) >>> 1,
				ae = L[ne];
			if (0 < i(ae, $)) (L[ne] = $), (L[F] = ae), (F = ne);
			else break e;
		}
	}
	function n(L) {
		return L.length === 0 ? null : L[0];
	}
	function r(L) {
		if (L.length === 0) return null;
		var $ = L[0],
			F = L.pop();
		if (F !== $) {
			L[0] = F;
			e: for (var ne = 0, ae = L.length, pi = ae >>> 1; ne < pi; ) {
				var Xt = 2 * (ne + 1) - 1,
					Hl = L[Xt],
					Jt = Xt + 1,
					hi = L[Jt];
				if (0 > i(Hl, F))
					Jt < ae && 0 > i(hi, Hl)
						? ((L[ne] = hi), (L[Jt] = F), (ne = Jt))
						: ((L[ne] = Hl), (L[Xt] = F), (ne = Xt));
				else if (Jt < ae && 0 > i(hi, F)) (L[ne] = hi), (L[Jt] = F), (ne = Jt);
				else break e;
			}
		}
		return $;
	}
	function i(L, $) {
		var F = L.sortIndex - $.sortIndex;
		return F !== 0 ? F : L.id - $.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var l = performance;
		e.unstable_now = function () {
			return l.now();
		};
	} else {
		var o = Date,
			s = o.now();
		e.unstable_now = function () {
			return o.now() - s;
		};
	}
	var a = [],
		u = [],
		d = 1,
		c = null,
		f = 3,
		v = !1,
		y = !1,
		w = !1,
		C = typeof setTimeout == "function" ? setTimeout : null,
		h = typeof clearTimeout == "function" ? clearTimeout : null,
		p = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function m(L) {
		for (var $ = n(u); $ !== null; ) {
			if ($.callback === null) r(u);
			else if ($.startTime <= L)
				r(u), ($.sortIndex = $.expirationTime), t(a, $);
			else break;
			$ = n(u);
		}
	}
	function g(L) {
		if (((w = !1), m(L), !y))
			if (n(a) !== null) (y = !0), ut(_);
			else {
				var $ = n(u);
				$ !== null && Wl(g, $.startTime - L);
			}
	}
	function _(L, $) {
		(y = !1), w && ((w = !1), h(T), (T = -1)), (v = !0);
		var F = f;
		try {
			for (
				m($), c = n(a);
				c !== null && (!(c.expirationTime > $) || (L && !Y()));

			) {
				var ne = c.callback;
				if (typeof ne == "function") {
					(c.callback = null), (f = c.priorityLevel);
					var ae = ne(c.expirationTime <= $);
					($ = e.unstable_now()),
						typeof ae == "function" ? (c.callback = ae) : c === n(a) && r(a),
						m($);
				} else r(a);
				c = n(a);
			}
			if (c !== null) var pi = !0;
			else {
				var Xt = n(u);
				Xt !== null && Wl(g, Xt.startTime - $), (pi = !1);
			}
			return pi;
		} finally {
			(c = null), (f = F), (v = !1);
		}
	}
	var P = !1,
		N = null,
		T = -1,
		B = 5,
		D = -1;
	function Y() {
		return !(e.unstable_now() - D < B);
	}
	function we() {
		if (N !== null) {
			var L = e.unstable_now();
			D = L;
			var $ = !0;
			try {
				$ = N(!0, L);
			} finally {
				$ ? he() : ((P = !1), (N = null));
			}
		} else P = !1;
	}
	var he;
	if (typeof p == "function")
		he = function () {
			p(we);
		};
	else if (typeof MessageChannel < "u") {
		var We = new MessageChannel(),
			xn = We.port2;
		(We.port1.onmessage = we),
			(he = function () {
				xn.postMessage(null);
			});
	} else
		he = function () {
			C(we, 0);
		};
	function ut(L) {
		(N = L), P || ((P = !0), he());
	}
	function Wl(L, $) {
		T = C(function () {
			L(e.unstable_now());
		}, $);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (L) {
			L.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			y || v || ((y = !0), ut(_));
		}),
		(e.unstable_forceFrameRate = function (L) {
			0 > L || 125 < L
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
					)
				: (B = 0 < L ? Math.floor(1e3 / L) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return f;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (L) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var $ = 3;
					break;
				default:
					$ = f;
			}
			var F = f;
			f = $;
			try {
				return L();
			} finally {
				f = F;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (L, $) {
			switch (L) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					L = 3;
			}
			var F = f;
			f = L;
			try {
				return $();
			} finally {
				f = F;
			}
		}),
		(e.unstable_scheduleCallback = function (L, $, F) {
			var ne = e.unstable_now();
			switch (
				(typeof F == "object" && F !== null
					? ((F = F.delay), (F = typeof F == "number" && 0 < F ? ne + F : ne))
					: (F = ne),
				L)
			) {
				case 1:
					var ae = -1;
					break;
				case 2:
					ae = 250;
					break;
				case 5:
					ae = 1073741823;
					break;
				case 4:
					ae = 1e4;
					break;
				default:
					ae = 5e3;
			}
			return (
				(ae = F + ae),
				(L = {
					id: d++,
					callback: $,
					priorityLevel: L,
					startTime: F,
					expirationTime: ae,
					sortIndex: -1,
				}),
				F > ne
					? ((L.sortIndex = F),
						t(u, L),
						n(a) === null &&
							L === n(u) &&
							(w ? (h(T), (T = -1)) : (w = !0), Wl(g, F - ne)))
					: ((L.sortIndex = ae), t(a, L), y || v || ((y = !0), ut(_))),
				L
			);
		}),
		(e.unstable_shouldYield = Y),
		(e.unstable_wrapCallback = function (L) {
			var $ = f;
			return function () {
				var F = f;
				f = $;
				try {
					return L.apply(this, arguments);
				} finally {
					f = F;
				}
			};
		});
})(mc);
hc.exports = mc;
var pp = hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp = k,
	Me = pp;
function S(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var vc = new Set(),
	Nr = {};
function mn(e, t) {
	Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
	for (Nr[e] = t, e = 0; e < t.length; e++) vc.add(t[e]);
}
var vt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	Co = Object.prototype.hasOwnProperty,
	mp =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Ia = {},
	za = {};
function vp(e) {
	return Co.call(za, e)
		? !0
		: Co.call(Ia, e)
			? !1
			: mp.test(e)
				? (za[e] = !0)
				: ((Ia[e] = !0), !1);
}
function yp(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
					? !n.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function gp(e, t, n, r) {
	if (t === null || typeof t > "u" || yp(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Ce(e, t, n, r, i, l, o) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = l),
		(this.removeEmptyString = o);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		pe[e] = new Ce(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	pe[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	pe[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	pe[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		pe[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	pe[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	pe[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	pe[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	pe[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rs = /[\-:]([a-z])/g;
function Os(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Rs, Os);
		pe[t] = new Ce(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Rs, Os);
		pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Rs, Os);
	pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ce(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
	pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ls(e, t, n, r) {
	var i = pe.hasOwnProperty(t) ? pe[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
			!(2 < t.length) ||
			(t[0] !== "o" && t[0] !== "O") ||
			(t[1] !== "n" && t[1] !== "N")) &&
		(gp(t, n, i, r) && (n = null),
		r || i === null
			? vp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
				? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
				: ((t = i.attributeName),
					(r = i.attributeNamespace),
					n === null
						? e.removeAttribute(t)
						: ((i = i.type),
							(n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
							r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	vi = Symbol.for("react.element"),
	Sn = Symbol.for("react.portal"),
	En = Symbol.for("react.fragment"),
	Is = Symbol.for("react.strict_mode"),
	No = Symbol.for("react.profiler"),
	yc = Symbol.for("react.provider"),
	gc = Symbol.for("react.context"),
	zs = Symbol.for("react.forward_ref"),
	To = Symbol.for("react.suspense"),
	Po = Symbol.for("react.suspense_list"),
	Ms = Symbol.for("react.memo"),
	St = Symbol.for("react.lazy"),
	xc = Symbol.for("react.offscreen"),
	Ma = Symbol.iterator;
function rr(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Ma && e[Ma]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var ee = Object.assign,
	Gl;
function dr(e) {
	if (Gl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Gl = (t && t[1]) || "";
		}
	return (
		`
` +
		Gl +
		e
	);
}
var Kl = !1;
function Yl(e, t) {
	if (!e || Kl) return "";
	Kl = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					l = r.stack.split(`
`),
					o = i.length - 1,
					s = l.length - 1;
				1 <= o && 0 <= s && i[o] !== l[s];

			)
				s--;
			for (; 1 <= o && 0 <= s; o--, s--)
				if (i[o] !== l[s]) {
					if (o !== 1 || s !== 1)
						do
							if ((o--, s--, 0 > s || i[o] !== l[s])) {
								var a =
									`
` + i[o].replace(" at new ", " at ");
								return (
									e.displayName &&
										a.includes("<anonymous>") &&
										(a = a.replace("<anonymous>", e.displayName)),
									a
								);
							}
						while (1 <= o && 0 <= s);
					break;
				}
		}
	} finally {
		(Kl = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function xp(e) {
	switch (e.tag) {
		case 5:
			return dr(e.type);
		case 16:
			return dr("Lazy");
		case 13:
			return dr("Suspense");
		case 19:
			return dr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Yl(e.type, !1)), e;
		case 11:
			return (e = Yl(e.type.render, !1)), e;
		case 1:
			return (e = Yl(e.type, !0)), e;
		default:
			return "";
	}
}
function jo(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case En:
			return "Fragment";
		case Sn:
			return "Portal";
		case No:
			return "Profiler";
		case Is:
			return "StrictMode";
		case To:
			return "Suspense";
		case Po:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case gc:
				return (e.displayName || "Context") + ".Consumer";
			case yc:
				return (e._context.displayName || "Context") + ".Provider";
			case zs:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case Ms:
				return (
					(t = e.displayName || null), t !== null ? t : jo(e.type) || "Memo"
				);
			case St:
				(t = e._payload), (e = e._init);
				try {
					return jo(e(t));
				} catch {}
		}
	return null;
}
function wp(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return jo(t);
		case 8:
			return t === Is ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function Ft(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function wc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function _p(e) {
	var t = wc(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			l = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (o) {
					(r = "" + o), l.call(this, o);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (o) {
					r = "" + o;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function yi(e) {
	e._valueTracker || (e._valueTracker = _p(e));
}
function _c(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = wc(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Hi(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Ro(e, t) {
	var n = t.checked;
	return ee({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Da(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Ft(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function kc(e, t) {
	(t = t.checked), t != null && Ls(e, "checked", t, !1);
}
function Oo(e, t) {
	kc(e, t);
	var n = Ft(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? Lo(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Lo(e, t.type, Ft(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Aa(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function Lo(e, t, n) {
	(t !== "number" || Hi(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Dn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + Ft(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function Io(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
	return ee({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function $a(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(S(92));
			if (fr(n)) {
				if (1 < n.length) throw Error(S(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Ft(n) };
}
function Sc(e, t) {
	var n = Ft(t.value),
		r = Ft(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Ua(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ec(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function zo(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Ec(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
			? "http://www.w3.org/1999/xhtml"
			: e;
}
var gi,
	Cc = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
				}
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				gi = gi || document.createElement("div"),
					gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = gi.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Tr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var yr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	kp = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function (e) {
	kp.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]);
	});
});
function Nc(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (yr.hasOwnProperty(e) && yr[e])
			? ("" + t).trim()
			: t + "px";
}
function Tc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Nc(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var Sp = ee(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
);
function Mo(e, t) {
	if (t) {
		if (Sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(S(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(S(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(S(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(S(62));
	}
}
function Do(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var Ao = null;
function Ds(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var $o = null,
	An = null,
	$n = null;
function Fa(e) {
	if ((e = ai(e))) {
		if (typeof $o != "function") throw Error(S(280));
		var t = e.stateNode;
		t && ((t = Rl(t)), $o(e.stateNode, e.type, t));
	}
}
function Pc(e) {
	An ? ($n ? $n.push(e) : ($n = [e])) : (An = e);
}
function jc() {
	if (An) {
		var e = An,
			t = $n;
		if ((($n = An = null), Fa(e), t)) for (e = 0; e < t.length; e++) Fa(t[e]);
	}
}
function Rc(e, t) {
	return e(t);
}
function Oc() {}
var Xl = !1;
function Lc(e, t, n) {
	if (Xl) return e(t, n);
	Xl = !0;
	try {
		return Rc(e, t, n);
	} finally {
		(Xl = !1), (An !== null || $n !== null) && (Oc(), jc());
	}
}
function Pr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Rl(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(S(231, t, typeof n));
	return n;
}
var Uo = !1;
if (vt)
	try {
		var ir = {};
		Object.defineProperty(ir, "passive", {
			get: function () {
				Uo = !0;
			},
		}),
			window.addEventListener("test", ir, ir),
			window.removeEventListener("test", ir, ir);
	} catch {
		Uo = !1;
	}
function Ep(e, t, n, r, i, l, o, s, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (d) {
		this.onError(d);
	}
}
var gr = !1,
	Qi = null,
	Gi = !1,
	Fo = null,
	Cp = {
		onError: function (e) {
			(gr = !0), (Qi = e);
		},
	};
function Np(e, t, n, r, i, l, o, s, a) {
	(gr = !1), (Qi = null), Ep.apply(Cp, arguments);
}
function Tp(e, t, n, r, i, l, o, s, a) {
	if ((Np.apply(this, arguments), gr)) {
		if (gr) {
			var u = Qi;
			(gr = !1), (Qi = null);
		} else throw Error(S(198));
		Gi || ((Gi = !0), (Fo = u));
	}
}
function vn(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Ic(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Va(e) {
	if (vn(e) !== e) throw Error(S(188));
}
function Pp(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = vn(e)), t === null)) throw Error(S(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var l = i.alternate;
		if (l === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === l.child) {
			for (l = i.child; l; ) {
				if (l === n) return Va(i), e;
				if (l === r) return Va(i), t;
				l = l.sibling;
			}
			throw Error(S(188));
		}
		if (n.return !== r.return) (n = i), (r = l);
		else {
			for (var o = !1, s = i.child; s; ) {
				if (s === n) {
					(o = !0), (n = i), (r = l);
					break;
				}
				if (s === r) {
					(o = !0), (r = i), (n = l);
					break;
				}
				s = s.sibling;
			}
			if (!o) {
				for (s = l.child; s; ) {
					if (s === n) {
						(o = !0), (n = l), (r = i);
						break;
					}
					if (s === r) {
						(o = !0), (r = l), (n = i);
						break;
					}
					s = s.sibling;
				}
				if (!o) throw Error(S(189));
			}
		}
		if (n.alternate !== r) throw Error(S(190));
	}
	if (n.tag !== 3) throw Error(S(188));
	return n.stateNode.current === n ? e : t;
}
function zc(e) {
	return (e = Pp(e)), e !== null ? Mc(e) : null;
}
function Mc(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Mc(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Dc = Me.unstable_scheduleCallback,
	Ba = Me.unstable_cancelCallback,
	jp = Me.unstable_shouldYield,
	Rp = Me.unstable_requestPaint,
	re = Me.unstable_now,
	Op = Me.unstable_getCurrentPriorityLevel,
	As = Me.unstable_ImmediatePriority,
	Ac = Me.unstable_UserBlockingPriority,
	Ki = Me.unstable_NormalPriority,
	Lp = Me.unstable_LowPriority,
	$c = Me.unstable_IdlePriority,
	Nl = null,
	it = null;
function Ip(e) {
	if (it && typeof it.onCommitFiberRoot == "function")
		try {
			it.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Dp,
	zp = Math.log,
	Mp = Math.LN2;
function Dp(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((zp(e) / Mp) | 0)) | 0;
}
var xi = 64,
	wi = 4194304;
function pr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Yi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		l = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var s = o & ~i;
		s !== 0 ? (r = pr(s)) : ((l &= o), l !== 0 && (r = pr(l)));
	} else (o = n & ~i), o !== 0 ? (r = pr(o)) : l !== 0 && (r = pr(l));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function Ap(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function $p(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			l = e.pendingLanes;
		0 < l;

	) {
		var o = 31 - Xe(l),
			s = 1 << o,
			a = i[o];
		a === -1
			? (!(s & n) || s & r) && (i[o] = Ap(s, t))
			: a <= t && (e.expiredLanes |= s),
			(l &= ~s);
	}
}
function Vo(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Uc() {
	var e = xi;
	return (xi <<= 1), !(xi & 4194240) && (xi = 64), e;
}
function Jl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function oi(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Xe(t)),
		(e[t] = n);
}
function Up(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Xe(n),
			l = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
	}
}
function $s(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Xe(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var H = 0;
function Fc(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vc,
	Us,
	Bc,
	Zc,
	Wc,
	Bo = !1,
	_i = [],
	Ot = null,
	Lt = null,
	It = null,
	jr = new Map(),
	Rr = new Map(),
	Ct = [],
	Fp =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" ",
		);
function Za(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Ot = null;
			break;
		case "dragenter":
		case "dragleave":
			Lt = null;
			break;
		case "mouseover":
		case "mouseout":
			It = null;
			break;
		case "pointerover":
		case "pointerout":
			jr.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Rr.delete(t.pointerId);
	}
}
function lr(e, t, n, r, i, l) {
	return e === null || e.nativeEvent !== l
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: l,
				targetContainers: [i],
			}),
			t !== null && ((t = ai(t)), t !== null && Us(t)),
			e)
		: ((e.eventSystemFlags |= r),
			(t = e.targetContainers),
			i !== null && t.indexOf(i) === -1 && t.push(i),
			e);
}
function Vp(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (Ot = lr(Ot, e, t, n, r, i)), !0;
		case "dragenter":
			return (Lt = lr(Lt, e, t, n, r, i)), !0;
		case "mouseover":
			return (It = lr(It, e, t, n, r, i)), !0;
		case "pointerover":
			var l = i.pointerId;
			return jr.set(l, lr(jr.get(l) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(l = i.pointerId), Rr.set(l, lr(Rr.get(l) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function Hc(e) {
	var t = en(e.target);
	if (t !== null) {
		var n = vn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Ic(n)), t !== null)) {
					(e.blockedOn = t),
						Wc(e.priority, function () {
							Bc(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function zi(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Ao = r), n.target.dispatchEvent(r), (Ao = null);
		} else return (t = ai(n)), t !== null && Us(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Wa(e, t, n) {
	zi(e) && n.delete(t);
}
function Bp() {
	(Bo = !1),
		Ot !== null && zi(Ot) && (Ot = null),
		Lt !== null && zi(Lt) && (Lt = null),
		It !== null && zi(It) && (It = null),
		jr.forEach(Wa),
		Rr.forEach(Wa);
}
function or(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Bo ||
			((Bo = !0),
			Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Bp)));
}
function Or(e) {
	function t(i) {
		return or(i, e);
	}
	if (0 < _i.length) {
		or(_i[0], e);
		for (var n = 1; n < _i.length; n++) {
			var r = _i[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Ot !== null && or(Ot, e),
			Lt !== null && or(Lt, e),
			It !== null && or(It, e),
			jr.forEach(t),
			Rr.forEach(t),
			n = 0;
		n < Ct.length;
		n++
	)
		(r = Ct[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Ct.length && ((n = Ct[0]), n.blockedOn === null); )
		Hc(n), n.blockedOn === null && Ct.shift();
}
var Un = _t.ReactCurrentBatchConfig,
	Xi = !0;
function Zp(e, t, n, r) {
	var i = H,
		l = Un.transition;
	Un.transition = null;
	try {
		(H = 1), Fs(e, t, n, r);
	} finally {
		(H = i), (Un.transition = l);
	}
}
function Wp(e, t, n, r) {
	var i = H,
		l = Un.transition;
	Un.transition = null;
	try {
		(H = 4), Fs(e, t, n, r);
	} finally {
		(H = i), (Un.transition = l);
	}
}
function Fs(e, t, n, r) {
	if (Xi) {
		var i = Zo(e, t, n, r);
		if (i === null) so(e, t, r, Ji, n), Za(e, r);
		else if (Vp(i, e, t, n, r)) r.stopPropagation();
		else if ((Za(e, r), t & 4 && -1 < Fp.indexOf(e))) {
			for (; i !== null; ) {
				var l = ai(i);
				if (
					(l !== null && Vc(l),
					(l = Zo(e, t, n, r)),
					l === null && so(e, t, r, Ji, n),
					l === i)
				)
					break;
				i = l;
			}
			i !== null && r.stopPropagation();
		} else so(e, t, r, null, n);
	}
}
var Ji = null;
function Zo(e, t, n, r) {
	if (((Ji = null), (e = Ds(r)), (e = en(e)), e !== null))
		if (((t = vn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Ic(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Ji = e), null;
}
function Qc(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (Op()) {
				case As:
					return 1;
				case Ac:
					return 4;
				case Ki:
				case Lp:
					return 16;
				case $c:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Pt = null,
	Vs = null,
	Mi = null;
function Gc() {
	if (Mi) return Mi;
	var e,
		t = Vs,
		n = t.length,
		r,
		i = "value" in Pt ? Pt.value : Pt.textContent,
		l = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
	return (Mi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Di(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function ki() {
	return !0;
}
function Ha() {
	return !1;
}
function Ae(e) {
	function t(n, r, i, l, o) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = l),
			(this.target = o),
			(this.currentTarget = null);
		for (var s in e)
			e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
		return (
			(this.isDefaultPrevented = (
				l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
			)
				? ki
				: Ha),
			(this.isPropagationStopped = Ha),
			this
		);
	}
	return (
		ee(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = ki));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = ki));
			},
			persist: function () {},
			isPersistent: ki,
		}),
		t
	);
}
var er = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Bs = Ae(er),
	si = ee({}, er, { view: 0, detail: 0 }),
	Hp = Ae(si),
	ql,
	bl,
	sr,
	Tl = ee({}, si, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Zs,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== sr &&
						(sr && e.type === "mousemove"
							? ((ql = e.screenX - sr.screenX), (bl = e.screenY - sr.screenY))
							: (bl = ql = 0),
						(sr = e)),
					ql);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : bl;
		},
	}),
	Qa = Ae(Tl),
	Qp = ee({}, Tl, { dataTransfer: 0 }),
	Gp = Ae(Qp),
	Kp = ee({}, si, { relatedTarget: 0 }),
	eo = Ae(Kp),
	Yp = ee({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Xp = Ae(Yp),
	Jp = ee({}, er, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	qp = Ae(Jp),
	bp = ee({}, er, { data: 0 }),
	Ga = Ae(bp),
	eh = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	th = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	nh = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function rh(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = nh[e]) ? !!t[e] : !1;
}
function Zs() {
	return rh;
}
var ih = ee({}, si, {
		key: function (e) {
			if (e.key) {
				var t = eh[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Di(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
					? th[e.keyCode] || "Unidentified"
					: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Zs,
		charCode: function (e) {
			return e.type === "keypress" ? Di(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Di(e)
				: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
		},
	}),
	lh = Ae(ih),
	oh = ee({}, Tl, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Ka = Ae(oh),
	sh = ee({}, si, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Zs,
	}),
	ah = Ae(sh),
	uh = ee({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	ch = Ae(uh),
	dh = ee({}, Tl, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
					? -e.wheelDeltaY
					: "wheelDelta" in e
						? -e.wheelDelta
						: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	fh = Ae(dh),
	ph = [9, 13, 27, 32],
	Ws = vt && "CompositionEvent" in window,
	xr = null;
vt && "documentMode" in document && (xr = document.documentMode);
var hh = vt && "TextEvent" in window && !xr,
	Kc = vt && (!Ws || (xr && 8 < xr && 11 >= xr)),
	Ya = " ",
	Xa = !1;
function Yc(e, t) {
	switch (e) {
		case "keyup":
			return ph.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Xc(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function mh(e, t) {
	switch (e) {
		case "compositionend":
			return Xc(t);
		case "keypress":
			return t.which !== 32 ? null : ((Xa = !0), Ya);
		case "textInput":
			return (e = t.data), e === Ya && Xa ? null : e;
		default:
			return null;
	}
}
function vh(e, t) {
	if (Cn)
		return e === "compositionend" || (!Ws && Yc(e, t))
			? ((e = Gc()), (Mi = Vs = Pt = null), (Cn = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Kc && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var yh = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Ja(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!yh[e.type] : t === "textarea";
}
function Jc(e, t, n, r) {
	Pc(r),
		(t = qi(t, "onChange")),
		0 < t.length &&
			((n = new Bs("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var wr = null,
	Lr = null;
function gh(e) {
	ad(e, 0);
}
function Pl(e) {
	var t = Pn(e);
	if (_c(t)) return e;
}
function xh(e, t) {
	if (e === "change") return t;
}
var qc = !1;
if (vt) {
	var to;
	if (vt) {
		var no = "oninput" in document;
		if (!no) {
			var qa = document.createElement("div");
			qa.setAttribute("oninput", "return;"),
				(no = typeof qa.oninput == "function");
		}
		to = no;
	} else to = !1;
	qc = to && (!document.documentMode || 9 < document.documentMode);
}
function ba() {
	wr && (wr.detachEvent("onpropertychange", bc), (Lr = wr = null));
}
function bc(e) {
	if (e.propertyName === "value" && Pl(Lr)) {
		var t = [];
		Jc(t, Lr, e, Ds(e)), Lc(gh, t);
	}
}
function wh(e, t, n) {
	e === "focusin"
		? (ba(), (wr = t), (Lr = n), wr.attachEvent("onpropertychange", bc))
		: e === "focusout" && ba();
}
function _h(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Pl(Lr);
}
function kh(e, t) {
	if (e === "click") return Pl(t);
}
function Sh(e, t) {
	if (e === "input" || e === "change") return Pl(t);
}
function Eh(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var be = typeof Object.is == "function" ? Object.is : Eh;
function Ir(e, t) {
	if (be(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Co.call(t, i) || !be(e[i], t[i])) return !1;
	}
	return !0;
}
function eu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function tu(e, t) {
	var n = eu(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = eu(n);
	}
}
function ed(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
					? ed(e, t.parentNode)
					: "contains" in e
						? e.contains(t)
						: e.compareDocumentPosition
							? !!(e.compareDocumentPosition(t) & 16)
							: !1
		: !1;
}
function td() {
	for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Hi(e.document);
	}
	return t;
}
function Hs(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function Ch(e) {
	var t = td(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		ed(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Hs(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					l = Math.min(r.start, i);
				(r = r.end === void 0 ? l : Math.min(r.end, i)),
					!e.extend && l > r && ((i = r), (r = l), (l = i)),
					(i = tu(n, l));
				var o = tu(n, r);
				i &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					l > r
						? (e.addRange(t), e.extend(o.node, o.offset))
						: (t.setEnd(o.node, o.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Nh = vt && "documentMode" in document && 11 >= document.documentMode,
	Nn = null,
	Wo = null,
	_r = null,
	Ho = !1;
function nu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Ho ||
		Nn == null ||
		Nn !== Hi(r) ||
		((r = Nn),
		"selectionStart" in r && Hs(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
				).getSelection()),
				(r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
				})),
		(_r && Ir(_r, r)) ||
			((_r = r),
			(r = qi(Wo, "onSelect")),
			0 < r.length &&
				((t = new Bs("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Nn))));
}
function Si(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Tn = {
		animationend: Si("Animation", "AnimationEnd"),
		animationiteration: Si("Animation", "AnimationIteration"),
		animationstart: Si("Animation", "AnimationStart"),
		transitionend: Si("Transition", "TransitionEnd"),
	},
	ro = {},
	nd = {};
vt &&
	((nd = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Tn.animationend.animation,
		delete Tn.animationiteration.animation,
		delete Tn.animationstart.animation),
	"TransitionEvent" in window || delete Tn.transitionend.transition);
function jl(e) {
	if (ro[e]) return ro[e];
	if (!Tn[e]) return e;
	var t = Tn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in nd) return (ro[e] = t[n]);
	return e;
}
var rd = jl("animationend"),
	id = jl("animationiteration"),
	ld = jl("animationstart"),
	od = jl("transitionend"),
	sd = new Map(),
	ru =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" ",
		);
function Qt(e, t) {
	sd.set(e, t), mn(t, [e]);
}
for (var io = 0; io < ru.length; io++) {
	var lo = ru[io],
		Th = lo.toLowerCase(),
		Ph = lo[0].toUpperCase() + lo.slice(1);
	Qt(Th, "on" + Ph);
}
Qt(rd, "onAnimationEnd");
Qt(id, "onAnimationIteration");
Qt(ld, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(od, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
mn(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" ",
	),
);
mn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" ",
	),
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" "),
);
mn(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
mn(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var hr =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" ",
		),
	jh = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function iu(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), Tp(r, t, void 0, e), (e.currentTarget = null);
}
function ad(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var l = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o],
						a = s.instance,
						u = s.currentTarget;
					if (((s = s.listener), a !== l && i.isPropagationStopped())) break e;
					iu(i, s, u), (l = a);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((s = r[o]),
						(a = s.instance),
						(u = s.currentTarget),
						(s = s.listener),
						a !== l && i.isPropagationStopped())
					)
						break e;
					iu(i, s, u), (l = a);
				}
		}
	}
	if (Gi) throw ((e = Fo), (Gi = !1), (Fo = null), e);
}
function G(e, t) {
	var n = t[Xo];
	n === void 0 && (n = t[Xo] = new Set());
	var r = e + "__bubble";
	n.has(r) || (ud(t, e, 2, !1), n.add(r));
}
function oo(e, t, n) {
	var r = 0;
	t && (r |= 4), ud(n, e, r, t);
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
	if (!e[Ei]) {
		(e[Ei] = !0),
			vc.forEach(function (n) {
				n !== "selectionchange" && (jh.has(n) || oo(n, !1, e), oo(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Ei] || ((t[Ei] = !0), oo("selectionchange", !1, t));
	}
}
function ud(e, t, n, r) {
	switch (Qc(t)) {
		case 1:
			var i = Zp;
			break;
		case 4:
			i = Wp;
			break;
		default:
			i = Fs;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!Uo ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
				? e.addEventListener(t, n, { passive: i })
				: e.addEventListener(t, n, !1);
}
function so(e, t, n, r, i) {
	var l = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var a = o.tag;
						if (
							(a === 3 || a === 4) &&
							((a = o.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return;
						o = o.return;
					}
				for (; s !== null; ) {
					if (((o = en(s)), o === null)) return;
					if (((a = o.tag), a === 5 || a === 6)) {
						r = l = o;
						continue e;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
	Lc(function () {
		var u = l,
			d = Ds(n),
			c = [];
		e: {
			var f = sd.get(e);
			if (f !== void 0) {
				var v = Bs,
					y = e;
				switch (e) {
					case "keypress":
						if (Di(n) === 0) break e;
					case "keydown":
					case "keyup":
						v = lh;
						break;
					case "focusin":
						(y = "focus"), (v = eo);
						break;
					case "focusout":
						(y = "blur"), (v = eo);
						break;
					case "beforeblur":
					case "afterblur":
						v = eo;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						v = Qa;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						v = Gp;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						v = ah;
						break;
					case rd:
					case id:
					case ld:
						v = Xp;
						break;
					case od:
						v = ch;
						break;
					case "scroll":
						v = Hp;
						break;
					case "wheel":
						v = fh;
						break;
					case "copy":
					case "cut":
					case "paste":
						v = qp;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						v = Ka;
				}
				var w = (t & 4) !== 0,
					C = !w && e === "scroll",
					h = w ? (f !== null ? f + "Capture" : null) : f;
				w = [];
				for (var p = u, m; p !== null; ) {
					m = p;
					var g = m.stateNode;
					if (
						(m.tag === 5 &&
							g !== null &&
							((m = g),
							h !== null && ((g = Pr(p, h)), g != null && w.push(Mr(p, g, m)))),
						C)
					)
						break;
					p = p.return;
				}
				0 < w.length &&
					((f = new v(f, y, null, n, d)), c.push({ event: f, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((f = e === "mouseover" || e === "pointerover"),
					(v = e === "mouseout" || e === "pointerout"),
					f &&
						n !== Ao &&
						(y = n.relatedTarget || n.fromElement) &&
						(en(y) || y[yt]))
				)
					break e;
				if (
					(v || f) &&
					((f =
						d.window === d
							? d
							: (f = d.ownerDocument)
								? f.defaultView || f.parentWindow
								: window),
					v
						? ((y = n.relatedTarget || n.toElement),
							(v = u),
							(y = y ? en(y) : null),
							y !== null &&
								((C = vn(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
								(y = null))
						: ((v = null), (y = u)),
					v !== y)
				) {
					if (
						((w = Qa),
						(g = "onMouseLeave"),
						(h = "onMouseEnter"),
						(p = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((w = Ka),
							(g = "onPointerLeave"),
							(h = "onPointerEnter"),
							(p = "pointer")),
						(C = v == null ? f : Pn(v)),
						(m = y == null ? f : Pn(y)),
						(f = new w(g, p + "leave", v, n, d)),
						(f.target = C),
						(f.relatedTarget = m),
						(g = null),
						en(d) === u &&
							((w = new w(h, p + "enter", y, n, d)),
							(w.target = m),
							(w.relatedTarget = C),
							(g = w)),
						(C = g),
						v && y)
					)
						t: {
							for (w = v, h = y, p = 0, m = w; m; m = wn(m)) p++;
							for (m = 0, g = h; g; g = wn(g)) m++;
							for (; 0 < p - m; ) (w = wn(w)), p--;
							for (; 0 < m - p; ) (h = wn(h)), m--;
							for (; p--; ) {
								if (w === h || (h !== null && w === h.alternate)) break t;
								(w = wn(w)), (h = wn(h));
							}
							w = null;
						}
					else w = null;
					v !== null && lu(c, f, v, w, !1),
						y !== null && C !== null && lu(c, C, y, w, !0);
				}
			}
			e: {
				if (
					((f = u ? Pn(u) : window),
					(v = f.nodeName && f.nodeName.toLowerCase()),
					v === "select" || (v === "input" && f.type === "file"))
				)
					var _ = xh;
				else if (Ja(f))
					if (qc) _ = Sh;
					else {
						_ = _h;
						var P = wh;
					}
				else
					(v = f.nodeName) &&
						v.toLowerCase() === "input" &&
						(f.type === "checkbox" || f.type === "radio") &&
						(_ = kh);
				if (_ && (_ = _(e, u))) {
					Jc(c, _, n, d);
					break e;
				}
				P && P(e, f, u),
					e === "focusout" &&
						(P = f._wrapperState) &&
						P.controlled &&
						f.type === "number" &&
						Lo(f, "number", f.value);
			}
			switch (((P = u ? Pn(u) : window), e)) {
				case "focusin":
					(Ja(P) || P.contentEditable === "true") &&
						((Nn = P), (Wo = u), (_r = null));
					break;
				case "focusout":
					_r = Wo = Nn = null;
					break;
				case "mousedown":
					Ho = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(Ho = !1), nu(c, n, d);
					break;
				case "selectionchange":
					if (Nh) break;
				case "keydown":
				case "keyup":
					nu(c, n, d);
			}
			var N;
			if (Ws)
				e: {
					switch (e) {
						case "compositionstart":
							var T = "onCompositionStart";
							break e;
						case "compositionend":
							T = "onCompositionEnd";
							break e;
						case "compositionupdate":
							T = "onCompositionUpdate";
							break e;
					}
					T = void 0;
				}
			else
				Cn
					? Yc(e, n) && (T = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
			T &&
				(Kc &&
					n.locale !== "ko" &&
					(Cn || T !== "onCompositionStart"
						? T === "onCompositionEnd" && Cn && (N = Gc())
						: ((Pt = d),
							(Vs = "value" in Pt ? Pt.value : Pt.textContent),
							(Cn = !0))),
				(P = qi(u, T)),
				0 < P.length &&
					((T = new Ga(T, e, null, n, d)),
					c.push({ event: T, listeners: P }),
					N ? (T.data = N) : ((N = Xc(n)), N !== null && (T.data = N)))),
				(N = hh ? mh(e, n) : vh(e, n)) &&
					((u = qi(u, "onBeforeInput")),
					0 < u.length &&
						((d = new Ga("onBeforeInput", "beforeinput", null, n, d)),
						c.push({ event: d, listeners: u }),
						(d.data = N)));
		}
		ad(c, t);
	});
}
function Mr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function qi(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			l = i.stateNode;
		i.tag === 5 &&
			l !== null &&
			((i = l),
			(l = Pr(e, n)),
			l != null && r.unshift(Mr(e, l, i)),
			(l = Pr(e, t)),
			l != null && r.push(Mr(e, l, i))),
			(e = e.return);
	}
	return r;
}
function wn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function lu(e, t, n, r, i) {
	for (var l = t._reactName, o = []; n !== null && n !== r; ) {
		var s = n,
			a = s.alternate,
			u = s.stateNode;
		if (a !== null && a === r) break;
		s.tag === 5 &&
			u !== null &&
			((s = u),
			i
				? ((a = Pr(n, l)), a != null && o.unshift(Mr(n, a, s)))
				: i || ((a = Pr(n, l)), a != null && o.push(Mr(n, a, s)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var Rh = /\r\n?/g,
	Oh = /\u0000|\uFFFD/g;
function ou(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			Rh,
			`
`,
		)
		.replace(Oh, "");
}
function Ci(e, t, n) {
	if (((t = ou(t)), ou(e) !== t && n)) throw Error(S(425));
}
function bi() {}
var Qo = null,
	Go = null;
function Ko(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Yo = typeof setTimeout == "function" ? setTimeout : void 0,
	Lh = typeof clearTimeout == "function" ? clearTimeout : void 0,
	su = typeof Promise == "function" ? Promise : void 0,
	Ih =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof su < "u"
				? function (e) {
						return su.resolve(null).then(e).catch(zh);
					}
				: Yo;
function zh(e) {
	setTimeout(function () {
		throw e;
	});
}
function ao(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), Or(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	Or(t);
}
function zt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function au(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var tr = Math.random().toString(36).slice(2),
	rt = "__reactFiber$" + tr,
	Dr = "__reactProps$" + tr,
	yt = "__reactContainer$" + tr,
	Xo = "__reactEvents$" + tr,
	Mh = "__reactListeners$" + tr,
	Dh = "__reactHandles$" + tr;
function en(e) {
	var t = e[rt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[yt] || n[rt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = au(e); e !== null; ) {
					if ((n = e[rt])) return n;
					e = au(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ai(e) {
	return (
		(e = e[rt] || e[yt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Pn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(S(33));
}
function Rl(e) {
	return e[Dr] || null;
}
var Jo = [],
	jn = -1;
function Gt(e) {
	return { current: e };
}
function K(e) {
	0 > jn || ((e.current = Jo[jn]), (Jo[jn] = null), jn--);
}
function Q(e, t) {
	jn++, (Jo[jn] = e.current), (e.current = t);
}
var Vt = {},
	ge = Gt(Vt),
	Pe = Gt(!1),
	sn = Vt;
function Wn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Vt;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		l;
	for (l in n) i[l] = t[l];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function je(e) {
	return (e = e.childContextTypes), e != null;
}
function el() {
	K(Pe), K(ge);
}
function uu(e, t, n) {
	if (ge.current !== Vt) throw Error(S(168));
	Q(ge, t), Q(Pe, n);
}
function cd(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(S(108, wp(e) || "Unknown", i));
	return ee({}, n, r);
}
function tl(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
		(sn = ge.current),
		Q(ge, e),
		Q(Pe, Pe.current),
		!0
	);
}
function cu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(S(169));
	n
		? ((e = cd(e, t, sn)),
			(r.__reactInternalMemoizedMergedChildContext = e),
			K(Pe),
			K(ge),
			Q(ge, e))
		: K(Pe),
		Q(Pe, n);
}
var ft = null,
	Ol = !1,
	uo = !1;
function dd(e) {
	ft === null ? (ft = [e]) : ft.push(e);
}
function Ah(e) {
	(Ol = !0), dd(e);
}
function Kt() {
	if (!uo && ft !== null) {
		uo = !0;
		var e = 0,
			t = H;
		try {
			var n = ft;
			for (H = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(ft = null), (Ol = !1);
		} catch (i) {
			throw (ft !== null && (ft = ft.slice(e + 1)), Dc(As, Kt), i);
		} finally {
			(H = t), (uo = !1);
		}
	}
	return null;
}
var Rn = [],
	On = 0,
	nl = null,
	rl = 0,
	$e = [],
	Ue = 0,
	an = null,
	pt = 1,
	ht = "";
function qt(e, t) {
	(Rn[On++] = rl), (Rn[On++] = nl), (nl = e), (rl = t);
}
function fd(e, t, n) {
	($e[Ue++] = pt), ($e[Ue++] = ht), ($e[Ue++] = an), (an = e);
	var r = pt;
	e = ht;
	var i = 32 - Xe(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var l = 32 - Xe(t) + i;
	if (30 < l) {
		var o = i - (i % 5);
		(l = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(pt = (1 << (32 - Xe(t) + i)) | (n << i) | r),
			(ht = l + e);
	} else (pt = (1 << l) | (n << i) | r), (ht = e);
}
function Qs(e) {
	e.return !== null && (qt(e, 1), fd(e, 1, 0));
}
function Gs(e) {
	for (; e === nl; )
		(nl = Rn[--On]), (Rn[On] = null), (rl = Rn[--On]), (Rn[On] = null);
	for (; e === an; )
		(an = $e[--Ue]),
			($e[Ue] = null),
			(ht = $e[--Ue]),
			($e[Ue] = null),
			(pt = $e[--Ue]),
			($e[Ue] = null);
}
var Ie = null,
	Le = null,
	X = !1,
	Ke = null;
function pd(e, t) {
	var n = Fe(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function du(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Ie = e), (Le = zt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Ie = e), (Le = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = an !== null ? { id: pt, overflow: ht } : null),
						(e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
						}),
						(n = Fe(18, null, null, 0)),
						(n.stateNode = t),
						(n.return = e),
						(e.child = n),
						(Ie = e),
						(Le = null),
						!0)
					: !1
			);
		default:
			return !1;
	}
}
function qo(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bo(e) {
	if (X) {
		var t = Le;
		if (t) {
			var n = t;
			if (!du(e, t)) {
				if (qo(e)) throw Error(S(418));
				t = zt(n.nextSibling);
				var r = Ie;
				t && du(e, t)
					? pd(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ie = e));
			}
		} else {
			if (qo(e)) throw Error(S(418));
			(e.flags = (e.flags & -4097) | 2), (X = !1), (Ie = e);
		}
	}
}
function fu(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Ie = e;
}
function Ni(e) {
	if (e !== Ie) return !1;
	if (!X) return fu(e), (X = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !Ko(e.type, e.memoizedProps))),
		t && (t = Le))
	) {
		if (qo(e)) throw (hd(), Error(S(418)));
		for (; t; ) pd(e, t), (t = zt(t.nextSibling));
	}
	if ((fu(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(S(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Le = zt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Le = null;
		}
	} else Le = Ie ? zt(e.stateNode.nextSibling) : null;
	return !0;
}
function hd() {
	for (var e = Le; e; ) e = zt(e.nextSibling);
}
function Hn() {
	(Le = Ie = null), (X = !1);
}
function Ks(e) {
	Ke === null ? (Ke = [e]) : Ke.push(e);
}
var $h = _t.ReactCurrentBatchConfig;
function ar(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(S(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(S(147, e));
			var i = r,
				l = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === l
				? t.ref
				: ((t = function (o) {
						var s = i.refs;
						o === null ? delete s[l] : (s[l] = o);
					}),
					(t._stringRef = l),
					t);
		}
		if (typeof e != "string") throw Error(S(284));
		if (!n._owner) throw Error(S(290, e));
	}
	return e;
}
function Ti(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			S(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e,
			),
		))
	);
}
function pu(e) {
	var t = e._init;
	return t(e._payload);
}
function md(e) {
	function t(h, p) {
		if (e) {
			var m = h.deletions;
			m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
		}
	}
	function n(h, p) {
		if (!e) return null;
		for (; p !== null; ) t(h, p), (p = p.sibling);
		return null;
	}
	function r(h, p) {
		for (h = new Map(); p !== null; )
			p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
		return h;
	}
	function i(h, p) {
		return (h = $t(h, p)), (h.index = 0), (h.sibling = null), h;
	}
	function l(h, p, m) {
		return (
			(h.index = m),
			e
				? ((m = h.alternate),
					m !== null
						? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
						: ((h.flags |= 2), p))
				: ((h.flags |= 1048576), p)
		);
	}
	function o(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function s(h, p, m, g) {
		return p === null || p.tag !== 6
			? ((p = yo(m, h.mode, g)), (p.return = h), p)
			: ((p = i(p, m)), (p.return = h), p);
	}
	function a(h, p, m, g) {
		var _ = m.type;
		return _ === En
			? d(h, p, m.props.children, g, m.key)
			: p !== null &&
				  (p.elementType === _ ||
						(typeof _ == "object" &&
							_ !== null &&
							_.$$typeof === St &&
							pu(_) === p.type))
				? ((g = i(p, m.props)), (g.ref = ar(h, p, m)), (g.return = h), g)
				: ((g = Zi(m.type, m.key, m.props, null, h.mode, g)),
					(g.ref = ar(h, p, m)),
					(g.return = h),
					g);
	}
	function u(h, p, m, g) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== m.containerInfo ||
			p.stateNode.implementation !== m.implementation
			? ((p = go(m, h.mode, g)), (p.return = h), p)
			: ((p = i(p, m.children || [])), (p.return = h), p);
	}
	function d(h, p, m, g, _) {
		return p === null || p.tag !== 7
			? ((p = ln(m, h.mode, g, _)), (p.return = h), p)
			: ((p = i(p, m)), (p.return = h), p);
	}
	function c(h, p, m) {
		if ((typeof p == "string" && p !== "") || typeof p == "number")
			return (p = yo("" + p, h.mode, m)), (p.return = h), p;
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case vi:
					return (
						(m = Zi(p.type, p.key, p.props, null, h.mode, m)),
						(m.ref = ar(h, null, p)),
						(m.return = h),
						m
					);
				case Sn:
					return (p = go(p, h.mode, m)), (p.return = h), p;
				case St:
					var g = p._init;
					return c(h, g(p._payload), m);
			}
			if (fr(p) || rr(p))
				return (p = ln(p, h.mode, m, null)), (p.return = h), p;
			Ti(h, p);
		}
		return null;
	}
	function f(h, p, m, g) {
		var _ = p !== null ? p.key : null;
		if ((typeof m == "string" && m !== "") || typeof m == "number")
			return _ !== null ? null : s(h, p, "" + m, g);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case vi:
					return m.key === _ ? a(h, p, m, g) : null;
				case Sn:
					return m.key === _ ? u(h, p, m, g) : null;
				case St:
					return (_ = m._init), f(h, p, _(m._payload), g);
			}
			if (fr(m) || rr(m)) return _ !== null ? null : d(h, p, m, g, null);
			Ti(h, m);
		}
		return null;
	}
	function v(h, p, m, g, _) {
		if ((typeof g == "string" && g !== "") || typeof g == "number")
			return (h = h.get(m) || null), s(p, h, "" + g, _);
		if (typeof g == "object" && g !== null) {
			switch (g.$$typeof) {
				case vi:
					return (h = h.get(g.key === null ? m : g.key) || null), a(p, h, g, _);
				case Sn:
					return (h = h.get(g.key === null ? m : g.key) || null), u(p, h, g, _);
				case St:
					var P = g._init;
					return v(h, p, m, P(g._payload), _);
			}
			if (fr(g) || rr(g)) return (h = h.get(m) || null), d(p, h, g, _, null);
			Ti(p, g);
		}
		return null;
	}
	function y(h, p, m, g) {
		for (
			var _ = null, P = null, N = p, T = (p = 0), B = null;
			N !== null && T < m.length;
			T++
		) {
			N.index > T ? ((B = N), (N = null)) : (B = N.sibling);
			var D = f(h, N, m[T], g);
			if (D === null) {
				N === null && (N = B);
				break;
			}
			e && N && D.alternate === null && t(h, N),
				(p = l(D, p, T)),
				P === null ? (_ = D) : (P.sibling = D),
				(P = D),
				(N = B);
		}
		if (T === m.length) return n(h, N), X && qt(h, T), _;
		if (N === null) {
			for (; T < m.length; T++)
				(N = c(h, m[T], g)),
					N !== null &&
						((p = l(N, p, T)), P === null ? (_ = N) : (P.sibling = N), (P = N));
			return X && qt(h, T), _;
		}
		for (N = r(h, N); T < m.length; T++)
			(B = v(N, h, T, m[T], g)),
				B !== null &&
					(e && B.alternate !== null && N.delete(B.key === null ? T : B.key),
					(p = l(B, p, T)),
					P === null ? (_ = B) : (P.sibling = B),
					(P = B));
		return (
			e &&
				N.forEach(function (Y) {
					return t(h, Y);
				}),
			X && qt(h, T),
			_
		);
	}
	function w(h, p, m, g) {
		var _ = rr(m);
		if (typeof _ != "function") throw Error(S(150));
		if (((m = _.call(m)), m == null)) throw Error(S(151));
		for (
			var P = (_ = null), N = p, T = (p = 0), B = null, D = m.next();
			N !== null && !D.done;
			T++, D = m.next()
		) {
			N.index > T ? ((B = N), (N = null)) : (B = N.sibling);
			var Y = f(h, N, D.value, g);
			if (Y === null) {
				N === null && (N = B);
				break;
			}
			e && N && Y.alternate === null && t(h, N),
				(p = l(Y, p, T)),
				P === null ? (_ = Y) : (P.sibling = Y),
				(P = Y),
				(N = B);
		}
		if (D.done) return n(h, N), X && qt(h, T), _;
		if (N === null) {
			for (; !D.done; T++, D = m.next())
				(D = c(h, D.value, g)),
					D !== null &&
						((p = l(D, p, T)), P === null ? (_ = D) : (P.sibling = D), (P = D));
			return X && qt(h, T), _;
		}
		for (N = r(h, N); !D.done; T++, D = m.next())
			(D = v(N, h, T, D.value, g)),
				D !== null &&
					(e && D.alternate !== null && N.delete(D.key === null ? T : D.key),
					(p = l(D, p, T)),
					P === null ? (_ = D) : (P.sibling = D),
					(P = D));
		return (
			e &&
				N.forEach(function (we) {
					return t(h, we);
				}),
			X && qt(h, T),
			_
		);
	}
	function C(h, p, m, g) {
		if (
			(typeof m == "object" &&
				m !== null &&
				m.type === En &&
				m.key === null &&
				(m = m.props.children),
			typeof m == "object" && m !== null)
		) {
			switch (m.$$typeof) {
				case vi:
					e: {
						for (var _ = m.key, P = p; P !== null; ) {
							if (P.key === _) {
								if (((_ = m.type), _ === En)) {
									if (P.tag === 7) {
										n(h, P.sibling),
											(p = i(P, m.props.children)),
											(p.return = h),
											(h = p);
										break e;
									}
								} else if (
									P.elementType === _ ||
									(typeof _ == "object" &&
										_ !== null &&
										_.$$typeof === St &&
										pu(_) === P.type)
								) {
									n(h, P.sibling),
										(p = i(P, m.props)),
										(p.ref = ar(h, P, m)),
										(p.return = h),
										(h = p);
									break e;
								}
								n(h, P);
								break;
							} else t(h, P);
							P = P.sibling;
						}
						m.type === En
							? ((p = ln(m.props.children, h.mode, g, m.key)),
								(p.return = h),
								(h = p))
							: ((g = Zi(m.type, m.key, m.props, null, h.mode, g)),
								(g.ref = ar(h, p, m)),
								(g.return = h),
								(h = g));
					}
					return o(h);
				case Sn:
					e: {
						for (P = m.key; p !== null; ) {
							if (p.key === P)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === m.containerInfo &&
									p.stateNode.implementation === m.implementation
								) {
									n(h, p.sibling),
										(p = i(p, m.children || [])),
										(p.return = h),
										(h = p);
									break e;
								} else {
									n(h, p);
									break;
								}
							else t(h, p);
							p = p.sibling;
						}
						(p = go(m, h.mode, g)), (p.return = h), (h = p);
					}
					return o(h);
				case St:
					return (P = m._init), C(h, p, P(m._payload), g);
			}
			if (fr(m)) return y(h, p, m, g);
			if (rr(m)) return w(h, p, m, g);
			Ti(h, m);
		}
		return (typeof m == "string" && m !== "") || typeof m == "number"
			? ((m = "" + m),
				p !== null && p.tag === 6
					? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
					: (n(h, p), (p = yo(m, h.mode, g)), (p.return = h), (h = p)),
				o(h))
			: n(h, p);
	}
	return C;
}
var Qn = md(!0),
	vd = md(!1),
	il = Gt(null),
	ll = null,
	Ln = null,
	Ys = null;
function Xs() {
	Ys = Ln = ll = null;
}
function Js(e) {
	var t = il.current;
	K(il), (e._currentValue = t);
}
function es(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function Fn(e, t) {
	(ll = e),
		(Ys = Ln = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Te = !0), (e.firstContext = null));
}
function Be(e) {
	var t = e._currentValue;
	if (Ys !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Ln === null)) {
			if (ll === null) throw Error(S(308));
			(Ln = e), (ll.dependencies = { lanes: 0, firstContext: e });
		} else Ln = Ln.next = e;
	return t;
}
var tn = null;
function qs(e) {
	tn === null ? (tn = [e]) : tn.push(e);
}
function yd(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), qs(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		gt(e, r)
	);
}
function gt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function bs(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function gd(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function mt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Mt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), W & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			gt(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), qs(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		gt(e, n)
	);
}
function Ai(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), $s(e, n);
	}
}
function hu(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			l = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
			} while (n !== null);
			l === null ? (i = l = t) : (l = l.next = t);
		} else i = l = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: l,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function ol(e, t, n, r) {
	var i = e.updateQueue;
	Et = !1;
	var l = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		s = i.shared.pending;
	if (s !== null) {
		i.shared.pending = null;
		var a = s,
			u = a.next;
		(a.next = null), o === null ? (l = u) : (o.next = u), (o = a);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(s = d.lastBaseUpdate),
			s !== o &&
				(s === null ? (d.firstBaseUpdate = u) : (s.next = u),
				(d.lastBaseUpdate = a)));
	}
	if (l !== null) {
		var c = i.baseState;
		(o = 0), (d = u = a = null), (s = l);
		do {
			var f = s.lane,
				v = s.eventTime;
			if ((r & f) === f) {
				d !== null &&
					(d = d.next =
						{
							eventTime: v,
							lane: 0,
							tag: s.tag,
							payload: s.payload,
							callback: s.callback,
							next: null,
						});
				e: {
					var y = e,
						w = s;
					switch (((f = t), (v = n), w.tag)) {
						case 1:
							if (((y = w.payload), typeof y == "function")) {
								c = y.call(v, c, f);
								break e;
							}
							c = y;
							break e;
						case 3:
							y.flags = (y.flags & -65537) | 128;
						case 0:
							if (
								((y = w.payload),
								(f = typeof y == "function" ? y.call(v, c, f) : y),
								f == null)
							)
								break e;
							c = ee({}, c, f);
							break e;
						case 2:
							Et = !0;
					}
				}
				s.callback !== null &&
					s.lane !== 0 &&
					((e.flags |= 64),
					(f = i.effects),
					f === null ? (i.effects = [s]) : f.push(s));
			} else
				(v = {
					eventTime: v,
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null,
				}),
					d === null ? ((u = d = v), (a = c)) : (d = d.next = v),
					(o |= f);
			if (((s = s.next), s === null)) {
				if (((s = i.shared.pending), s === null)) break;
				(f = s),
					(s = f.next),
					(f.next = null),
					(i.lastBaseUpdate = f),
					(i.shared.pending = null);
			}
		} while (!0);
		if (
			(d === null && (a = c),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = d),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (o |= i.lane), (i = i.next);
			while (i !== t);
		} else l === null && (i.shared.lanes = 0);
		(cn |= o), (e.lanes = o), (e.memoizedState = c);
	}
}
function mu(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(S(191, i));
				i.call(r);
			}
		}
}
var ui = {},
	lt = Gt(ui),
	Ar = Gt(ui),
	$r = Gt(ui);
function nn(e) {
	if (e === ui) throw Error(S(174));
	return e;
}
function ea(e, t) {
	switch ((Q($r, t), Q(Ar, e), Q(lt, ui), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : zo(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = zo(t, e));
	}
	K(lt), Q(lt, t);
}
function Gn() {
	K(lt), K(Ar), K($r);
}
function xd(e) {
	nn($r.current);
	var t = nn(lt.current),
		n = zo(t, e.type);
	t !== n && (Q(Ar, e), Q(lt, n));
}
function ta(e) {
	Ar.current === e && (K(lt), K(Ar));
}
var q = Gt(0);
function sl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var co = [];
function na() {
	for (var e = 0; e < co.length; e++)
		co[e]._workInProgressVersionPrimary = null;
	co.length = 0;
}
var $i = _t.ReactCurrentDispatcher,
	fo = _t.ReactCurrentBatchConfig,
	un = 0,
	b = null,
	oe = null,
	ue = null,
	al = !1,
	kr = !1,
	Ur = 0,
	Uh = 0;
function me() {
	throw Error(S(321));
}
function ra(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!be(e[n], t[n])) return !1;
	return !0;
}
function ia(e, t, n, r, i, l) {
	if (
		((un = l),
		(b = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		($i.current = e === null || e.memoizedState === null ? Zh : Wh),
		(e = n(r, i)),
		kr)
	) {
		l = 0;
		do {
			if (((kr = !1), (Ur = 0), 25 <= l)) throw Error(S(301));
			(l += 1),
				(ue = oe = null),
				(t.updateQueue = null),
				($i.current = Hh),
				(e = n(r, i));
		} while (kr);
	}
	if (
		(($i.current = ul),
		(t = oe !== null && oe.next !== null),
		(un = 0),
		(ue = oe = b = null),
		(al = !1),
		t)
	)
		throw Error(S(300));
	return e;
}
function la() {
	var e = Ur !== 0;
	return (Ur = 0), e;
}
function nt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return ue === null ? (b.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Ze() {
	if (oe === null) {
		var e = b.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = oe.next;
	var t = ue === null ? b.memoizedState : ue.next;
	if (t !== null) (ue = t), (oe = e);
	else {
		if (e === null) throw Error(S(310));
		(oe = e),
			(e = {
				memoizedState: oe.memoizedState,
				baseState: oe.baseState,
				baseQueue: oe.baseQueue,
				queue: oe.queue,
				next: null,
			}),
			ue === null ? (b.memoizedState = ue = e) : (ue = ue.next = e);
	}
	return ue;
}
function Fr(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function po(e) {
	var t = Ze(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = oe,
		i = r.baseQueue,
		l = n.pending;
	if (l !== null) {
		if (i !== null) {
			var o = i.next;
			(i.next = l.next), (l.next = o);
		}
		(r.baseQueue = i = l), (n.pending = null);
	}
	if (i !== null) {
		(l = i.next), (r = r.baseState);
		var s = (o = null),
			a = null,
			u = l;
		do {
			var d = u.lane;
			if ((un & d) === d)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var c = {
					lane: d,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				a === null ? ((s = a = c), (o = r)) : (a = a.next = c),
					(b.lanes |= d),
					(cn |= d);
			}
			u = u.next;
		} while (u !== null && u !== l);
		a === null ? (o = r) : (a.next = s),
			be(r, t.memoizedState) || (Te = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = a),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (l = i.lane), (b.lanes |= l), (cn |= l), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ho(e) {
	var t = Ze(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		l = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var o = (i = i.next);
		do (l = e(l, o.action)), (o = o.next);
		while (o !== i);
		be(l, t.memoizedState) || (Te = !0),
			(t.memoizedState = l),
			t.baseQueue === null && (t.baseState = l),
			(n.lastRenderedState = l);
	}
	return [l, r];
}
function wd() {}
function _d(e, t) {
	var n = b,
		r = Ze(),
		i = t(),
		l = !be(r.memoizedState, i);
	if (
		(l && ((r.memoizedState = i), (Te = !0)),
		(r = r.queue),
		oa(Ed.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || l || (ue !== null && ue.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Vr(9, Sd.bind(null, n, r, i, t), void 0, null),
			ce === null)
		)
			throw Error(S(349));
		un & 30 || kd(n, t, i);
	}
	return i;
}
function kd(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = b.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(b.updateQueue = t),
				(t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sd(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Cd(t) && Nd(e);
}
function Ed(e, t, n) {
	return n(function () {
		Cd(t) && Nd(e);
	});
}
function Cd(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !be(e, n);
	} catch {
		return !0;
	}
}
function Nd(e) {
	var t = gt(e, 1);
	t !== null && Je(t, e, 1, -1);
}
function vu(e) {
	var t = nt();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Fr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Bh.bind(null, b, e)),
		[t.memoizedState, e]
	);
}
function Vr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = b.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(b.updateQueue = t),
				(t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
				n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Td() {
	return Ze().memoizedState;
}
function Ui(e, t, n, r) {
	var i = nt();
	(b.flags |= e),
		(i.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ll(e, t, n, r) {
	var i = Ze();
	r = r === void 0 ? null : r;
	var l = void 0;
	if (oe !== null) {
		var o = oe.memoizedState;
		if (((l = o.destroy), r !== null && ra(r, o.deps))) {
			i.memoizedState = Vr(t, n, l, r);
			return;
		}
	}
	(b.flags |= e), (i.memoizedState = Vr(1 | t, n, l, r));
}
function yu(e, t) {
	return Ui(8390656, 8, e, t);
}
function oa(e, t) {
	return Ll(2048, 8, e, t);
}
function Pd(e, t) {
	return Ll(4, 2, e, t);
}
function jd(e, t) {
	return Ll(4, 4, e, t);
}
function Rd(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Od(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Ll(4, 4, Rd.bind(null, t, e), n)
	);
}
function sa() {}
function Ld(e, t) {
	var n = Ze();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && ra(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Id(e, t) {
	var n = Ze();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && ra(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function zd(e, t, n) {
	return un & 21
		? (be(n, t) || ((n = Uc()), (b.lanes |= n), (cn |= n), (e.baseState = !0)),
			t)
		: (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function Fh(e, t) {
	var n = H;
	(H = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = fo.transition;
	fo.transition = {};
	try {
		e(!1), t();
	} finally {
		(H = n), (fo.transition = r);
	}
}
function Md() {
	return Ze().memoizedState;
}
function Vh(e, t, n) {
	var r = At(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Dd(e))
	)
		Ad(t, n);
	else if (((n = yd(e, t, n, r)), n !== null)) {
		var i = ke();
		Je(n, e, r, i), $d(n, t, r);
	}
}
function Bh(e, t, n) {
	var r = At(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Dd(e)) Ad(t, i);
	else {
		var l = e.alternate;
		if (
			e.lanes === 0 &&
			(l === null || l.lanes === 0) &&
			((l = t.lastRenderedReducer), l !== null)
		)
			try {
				var o = t.lastRenderedState,
					s = l(o, n);
				if (((i.hasEagerState = !0), (i.eagerState = s), be(s, o))) {
					var a = t.interleaved;
					a === null
						? ((i.next = i), qs(t))
						: ((i.next = a.next), (a.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = yd(e, t, i, r)),
			n !== null && ((i = ke()), Je(n, e, r, i), $d(n, t, r));
	}
}
function Dd(e) {
	var t = e.alternate;
	return e === b || (t !== null && t === b);
}
function Ad(e, t) {
	kr = al = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function $d(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), $s(e, n);
	}
}
var ul = {
		readContext: Be,
		useCallback: me,
		useContext: me,
		useEffect: me,
		useImperativeHandle: me,
		useInsertionEffect: me,
		useLayoutEffect: me,
		useMemo: me,
		useReducer: me,
		useRef: me,
		useState: me,
		useDebugValue: me,
		useDeferredValue: me,
		useTransition: me,
		useMutableSource: me,
		useSyncExternalStore: me,
		useId: me,
		unstable_isNewReconciler: !1,
	},
	Zh = {
		readContext: Be,
		useCallback: function (e, t) {
			return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Be,
		useEffect: yu,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Ui(4194308, 4, Rd.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Ui(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Ui(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = nt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = nt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = Vh.bind(null, b, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = nt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: vu,
		useDebugValue: sa,
		useDeferredValue: function (e) {
			return (nt().memoizedState = e);
		},
		useTransition: function () {
			var e = vu(!1),
				t = e[0];
			return (e = Fh.bind(null, e[1])), (nt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = b,
				i = nt();
			if (X) {
				if (n === void 0) throw Error(S(407));
				n = n();
			} else {
				if (((n = t()), ce === null)) throw Error(S(349));
				un & 30 || kd(r, t, n);
			}
			i.memoizedState = n;
			var l = { value: n, getSnapshot: t };
			return (
				(i.queue = l),
				yu(Ed.bind(null, r, l, e), [e]),
				(r.flags |= 2048),
				Vr(9, Sd.bind(null, r, l, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = nt(),
				t = ce.identifierPrefix;
			if (X) {
				var n = ht,
					r = pt;
				(n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Ur++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = Uh++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Wh = {
		readContext: Be,
		useCallback: Ld,
		useContext: Be,
		useEffect: oa,
		useImperativeHandle: Od,
		useInsertionEffect: Pd,
		useLayoutEffect: jd,
		useMemo: Id,
		useReducer: po,
		useRef: Td,
		useState: function () {
			return po(Fr);
		},
		useDebugValue: sa,
		useDeferredValue: function (e) {
			var t = Ze();
			return zd(t, oe.memoizedState, e);
		},
		useTransition: function () {
			var e = po(Fr)[0],
				t = Ze().memoizedState;
			return [e, t];
		},
		useMutableSource: wd,
		useSyncExternalStore: _d,
		useId: Md,
		unstable_isNewReconciler: !1,
	},
	Hh = {
		readContext: Be,
		useCallback: Ld,
		useContext: Be,
		useEffect: oa,
		useImperativeHandle: Od,
		useInsertionEffect: Pd,
		useLayoutEffect: jd,
		useMemo: Id,
		useReducer: ho,
		useRef: Td,
		useState: function () {
			return ho(Fr);
		},
		useDebugValue: sa,
		useDeferredValue: function (e) {
			var t = Ze();
			return oe === null ? (t.memoizedState = e) : zd(t, oe.memoizedState, e);
		},
		useTransition: function () {
			var e = ho(Fr)[0],
				t = Ze().memoizedState;
			return [e, t];
		},
		useMutableSource: wd,
		useSyncExternalStore: _d,
		useId: Md,
		unstable_isNewReconciler: !1,
	};
function Qe(e, t) {
	if (e && e.defaultProps) {
		(t = ee({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function ts(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : ee({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Il = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? vn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = ke(),
			i = At(e),
			l = mt(r, i);
		(l.payload = t),
			n != null && (l.callback = n),
			(t = Mt(e, l, i)),
			t !== null && (Je(t, e, i, r), Ai(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = ke(),
			i = At(e),
			l = mt(r, i);
		(l.tag = 1),
			(l.payload = t),
			n != null && (l.callback = n),
			(t = Mt(e, l, i)),
			t !== null && (Je(t, e, i, r), Ai(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = ke(),
			r = At(e),
			i = mt(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = Mt(e, i, r)),
			t !== null && (Je(t, e, r, n), Ai(t, e, r));
	},
};
function gu(e, t, n, r, i, l, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, l, o)
			: t.prototype && t.prototype.isPureReactComponent
				? !Ir(n, r) || !Ir(i, l)
				: !0
	);
}
function Ud(e, t, n) {
	var r = !1,
		i = Vt,
		l = t.contextType;
	return (
		typeof l == "object" && l !== null
			? (l = Be(l))
			: ((i = je(t) ? sn : ge.current),
				(r = t.contextTypes),
				(l = (r = r != null) ? Wn(e, i) : Vt)),
		(t = new t(n, l)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Il),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		t
	);
}
function xu(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Il.enqueueReplaceState(t, t.state, null);
}
function ns(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = {}), bs(e);
	var l = t.contextType;
	typeof l == "object" && l !== null
		? (i.context = Be(l))
		: ((l = je(t) ? sn : ge.current), (i.context = Wn(e, l))),
		(i.state = e.memoizedState),
		(l = t.getDerivedStateFromProps),
		typeof l == "function" && (ts(e, t, l, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Il.enqueueReplaceState(i, i.state, null),
			ol(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kn(e, t) {
	try {
		var n = "",
			r = t;
		do (n += xp(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (l) {
		i =
			`
Error generating stack: ` +
			l.message +
			`
` +
			l.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function mo(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rs(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Qh = typeof WeakMap == "function" ? WeakMap : Map;
function Fd(e, t, n) {
	(n = mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			dl || ((dl = !0), (ps = r)), rs(e, t);
		}),
		n
	);
}
function Vd(e, t, n) {
	(n = mt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				rs(e, t);
			});
	}
	var l = e.stateNode;
	return (
		l !== null &&
			typeof l.componentDidCatch == "function" &&
			(n.callback = function () {
				rs(e, t),
					typeof r != "function" &&
						(Dt === null ? (Dt = new Set([this])) : Dt.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : "",
				});
			}),
		n
	);
}
function wu(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Qh();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = om.bind(null, e, t, n)), t.then(e, e));
}
function _u(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function ku(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
					(n.flags |= 131072),
					(n.flags &= -52805),
					n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = mt(-1, 1)), (t.tag = 2), Mt(n, t, 1))),
					(n.lanes |= 1)),
			e);
}
var Gh = _t.ReactCurrentOwner,
	Te = !1;
function _e(e, t, n, r) {
	t.child = e === null ? vd(t, null, n, r) : Qn(t, e.child, n, r);
}
function Su(e, t, n, r, i) {
	n = n.render;
	var l = t.ref;
	return (
		Fn(t, i),
		(r = ia(e, t, n, r, l, i)),
		(n = la()),
		e !== null && !Te
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~i),
				xt(e, t, i))
			: (X && n && Qs(t), (t.flags |= 1), _e(e, t, r, i), t.child)
	);
}
function Eu(e, t, n, r, i) {
	if (e === null) {
		var l = n.type;
		return typeof l == "function" &&
			!ma(l) &&
			l.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = l), Bd(e, t, l, r, i))
			: ((e = Zi(n.type, null, r, t, t.mode, i)),
				(e.ref = t.ref),
				(e.return = t),
				(t.child = e));
	}
	if (((l = e.child), !(e.lanes & i))) {
		var o = l.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Ir), n(o, r) && e.ref === t.ref)
		)
			return xt(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = $t(l, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Bd(e, t, n, r, i) {
	if (e !== null) {
		var l = e.memoizedProps;
		if (Ir(l, r) && e.ref === t.ref)
			if (((Te = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
				e.flags & 131072 && (Te = !0);
			else return (t.lanes = e.lanes), xt(e, t, i);
	}
	return is(e, t, n, r, i);
}
function Zd(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		l = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Q(zn, Oe),
				(Oe |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = l !== null ? l.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					Q(zn, Oe),
					(Oe |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = l !== null ? l.baseLanes : n),
				Q(zn, Oe),
				(Oe |= r);
		}
	else
		l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
			Q(zn, Oe),
			(Oe |= r);
	return _e(e, t, i, n), t.child;
}
function Wd(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function is(e, t, n, r, i) {
	var l = je(n) ? sn : ge.current;
	return (
		(l = Wn(t, l)),
		Fn(t, i),
		(n = ia(e, t, n, r, l, i)),
		(r = la()),
		e !== null && !Te
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~i),
				xt(e, t, i))
			: (X && r && Qs(t), (t.flags |= 1), _e(e, t, n, i), t.child)
	);
}
function Cu(e, t, n, r, i) {
	if (je(n)) {
		var l = !0;
		tl(t);
	} else l = !1;
	if ((Fn(t, i), t.stateNode === null))
		Fi(e, t), Ud(t, n, r), ns(t, n, r, i), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			s = t.memoizedProps;
		o.props = s;
		var a = o.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = Be(u))
			: ((u = je(n) ? sn : ge.current), (u = Wn(t, u)));
		var d = n.getDerivedStateFromProps,
			c =
				typeof d == "function" ||
				typeof o.getSnapshotBeforeUpdate == "function";
		c ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((s !== r || a !== u) && xu(t, o, r, u)),
			(Et = !1);
		var f = t.memoizedState;
		(o.state = f),
			ol(t, r, o, i),
			(a = t.memoizedState),
			s !== r || f !== a || Pe.current || Et
				? (typeof d == "function" && (ts(t, n, d, r), (a = t.memoizedState)),
					(s = Et || gu(t, n, s, r, f, a, u))
						? (c ||
								(typeof o.UNSAFE_componentWillMount != "function" &&
									typeof o.componentWillMount != "function") ||
								(typeof o.componentWillMount == "function" &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == "function" &&
									o.UNSAFE_componentWillMount()),
							typeof o.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
							(t.memoizedProps = r),
							(t.memoizedState = a)),
					(o.props = r),
					(o.state = a),
					(o.context = u),
					(r = s))
				: (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
					(r = !1));
	} else {
		(o = t.stateNode),
			gd(e, t),
			(s = t.memoizedProps),
			(u = t.type === t.elementType ? s : Qe(t.type, s)),
			(o.props = u),
			(c = t.pendingProps),
			(f = o.context),
			(a = n.contextType),
			typeof a == "object" && a !== null
				? (a = Be(a))
				: ((a = je(n) ? sn : ge.current), (a = Wn(t, a)));
		var v = n.getDerivedStateFromProps;
		(d =
			typeof v == "function" ||
			typeof o.getSnapshotBeforeUpdate == "function") ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((s !== c || f !== a) && xu(t, o, r, a)),
			(Et = !1),
			(f = t.memoizedState),
			(o.state = f),
			ol(t, r, o, i);
		var y = t.memoizedState;
		s !== c || f !== y || Pe.current || Et
			? (typeof v == "function" && (ts(t, n, v, r), (y = t.memoizedState)),
				(u = Et || gu(t, n, u, r, f, y, a) || !1)
					? (d ||
							(typeof o.UNSAFE_componentWillUpdate != "function" &&
								typeof o.componentWillUpdate != "function") ||
							(typeof o.componentWillUpdate == "function" &&
								o.componentWillUpdate(r, y, a),
							typeof o.UNSAFE_componentWillUpdate == "function" &&
								o.UNSAFE_componentWillUpdate(r, y, a)),
						typeof o.componentDidUpdate == "function" && (t.flags |= 4),
						typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != "function" ||
							(s === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 4),
						typeof o.getSnapshotBeforeUpdate != "function" ||
							(s === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 1024),
						(t.memoizedProps = r),
						(t.memoizedState = y)),
				(o.props = r),
				(o.state = y),
				(o.context = a),
				(r = u))
			: (typeof o.componentDidUpdate != "function" ||
					(s === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 4),
				typeof o.getSnapshotBeforeUpdate != "function" ||
					(s === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 1024),
				(r = !1));
	}
	return ls(e, t, n, r, l, i);
}
function ls(e, t, n, r, i, l) {
	Wd(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return i && cu(t, n, !1), xt(e, t, l);
	(r = t.stateNode), (Gh.current = t);
	var s =
		o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = Qn(t, e.child, null, l)), (t.child = Qn(t, null, s, l)))
			: _e(e, t, s, l),
		(t.memoizedState = r.state),
		i && cu(t, n, !0),
		t.child
	);
}
function Hd(e) {
	var t = e.stateNode;
	t.pendingContext
		? uu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && uu(e, t.context, !1),
		ea(e, t.containerInfo);
}
function Nu(e, t, n, r, i) {
	return Hn(), Ks(i), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var os = { dehydrated: null, treeContext: null, retryLane: 0 };
function ss(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Qd(e, t, n) {
	var r = t.pendingProps,
		i = q.current,
		l = !1,
		o = (t.flags & 128) !== 0,
		s;
	if (
		((s = o) ||
			(s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		s
			? ((l = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		Q(q, i & 1),
		e === null)
	)
		return (
			bo(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
					null)
				: ((o = r.children),
					(e = r.fallback),
					l
						? ((r = t.mode),
							(l = t.child),
							(o = { mode: "hidden", children: o }),
							!(r & 1) && l !== null
								? ((l.childLanes = 0), (l.pendingProps = o))
								: (l = Dl(o, r, 0, null)),
							(e = ln(e, r, n, null)),
							(l.return = t),
							(e.return = t),
							(l.sibling = e),
							(t.child = l),
							(t.child.memoizedState = ss(n)),
							(t.memoizedState = os),
							e)
						: aa(t, o))
		);
	if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
		return Kh(e, t, o, r, s, i, n);
	if (l) {
		(l = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
		var a = { mode: "hidden", children: r.children };
		return (
			!(o & 1) && t.child !== i
				? ((r = t.child),
					(r.childLanes = 0),
					(r.pendingProps = a),
					(t.deletions = null))
				: ((r = $t(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			s !== null ? (l = $t(s, l)) : ((l = ln(l, o, n, null)), (l.flags |= 2)),
			(l.return = t),
			(r.return = t),
			(r.sibling = l),
			(t.child = r),
			(r = l),
			(l = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? ss(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
						}),
			(l.memoizedState = o),
			(l.childLanes = e.childLanes & ~n),
			(t.memoizedState = os),
			r
		);
	}
	return (
		(l = e.child),
		(e = l.sibling),
		(r = $t(l, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function aa(e, t) {
	return (
		(t = Dl({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Pi(e, t, n, r) {
	return (
		r !== null && Ks(r),
		Qn(t, e.child, null, n),
		(e = aa(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Kh(e, t, n, r, i, l, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = mo(Error(S(422)))), Pi(e, t, o, r))
			: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((l = r.fallback),
					(i = t.mode),
					(r = Dl({ mode: "visible", children: r.children }, i, 0, null)),
					(l = ln(l, i, o, null)),
					(l.flags |= 2),
					(r.return = t),
					(l.return = t),
					(r.sibling = l),
					(t.child = r),
					t.mode & 1 && Qn(t, e.child, null, o),
					(t.child.memoizedState = ss(o)),
					(t.memoizedState = os),
					l);
	if (!(t.mode & 1)) return Pi(e, t, o, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
		return (r = s), (l = Error(S(419))), (r = mo(l, r, void 0)), Pi(e, t, o, r);
	}
	if (((s = (o & e.childLanes) !== 0), Te || s)) {
		if (((r = ce), r !== null)) {
			switch (o & -o) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | o) ? 0 : i),
				i !== 0 &&
					i !== l.retryLane &&
					((l.retryLane = i), gt(e, i), Je(r, e, i, -1));
		}
		return ha(), (r = mo(Error(S(421)))), Pi(e, t, o, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
			(t.child = e.child),
			(t = sm.bind(null, e)),
			(i._reactRetry = t),
			null)
		: ((e = l.treeContext),
			(Le = zt(i.nextSibling)),
			(Ie = t),
			(X = !0),
			(Ke = null),
			e !== null &&
				(($e[Ue++] = pt),
				($e[Ue++] = ht),
				($e[Ue++] = an),
				(pt = e.id),
				(ht = e.overflow),
				(an = t)),
			(t = aa(t, r.children)),
			(t.flags |= 4096),
			t);
}
function Tu(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), es(e.return, t, n);
}
function vo(e, t, n, r, i) {
	var l = e.memoizedState;
	l === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
			})
		: ((l.isBackwards = t),
			(l.rendering = null),
			(l.renderingStartTime = 0),
			(l.last = r),
			(l.tail = n),
			(l.tailMode = i));
}
function Gd(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		l = r.tail;
	if ((_e(e, t, r.children, n), (r = q.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
				else if (e.tag === 19) Tu(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((Q(q, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && sl(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					vo(t, !1, i, n, l);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && sl(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				vo(t, !0, n, null, l);
				break;
			case "together":
				vo(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Fi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(cn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(S(153));
	if (t.child !== null) {
		for (
			e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = $t(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Yh(e, t, n) {
	switch (t.tag) {
		case 3:
			Hd(t), Hn();
			break;
		case 5:
			xd(t);
			break;
		case 1:
			je(t.type) && tl(t);
			break;
		case 4:
			ea(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			Q(il, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Q(q, q.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
						? Qd(e, t, n)
						: (Q(q, q.current & 1),
							(e = xt(e, t, n)),
							e !== null ? e.sibling : null);
			Q(q, q.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Gd(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				Q(q, q.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Zd(e, t, n);
	}
	return xt(e, t, n);
}
var Kd, as, Yd, Xd;
Kd = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
as = function () {};
Yd = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), nn(lt.current);
		var l = null;
		switch (n) {
			case "input":
				(i = Ro(e, i)), (r = Ro(e, r)), (l = []);
				break;
			case "select":
				(i = ee({}, i, { value: void 0 })),
					(r = ee({}, r, { value: void 0 })),
					(l = []);
				break;
			case "textarea":
				(i = Io(e, i)), (r = Io(e, r)), (l = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = bi);
		}
		Mo(n, r);
		var o;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var s = i[u];
					for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(Nr.hasOwnProperty(u)
							? l || (l = [])
							: (l = l || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (
				((s = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== s && (a != null || s != null))
			)
				if (u === "style")
					if (s) {
						for (o in s)
							!s.hasOwnProperty(o) ||
								(a && a.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ""));
						for (o in a)
							a.hasOwnProperty(o) &&
								s[o] !== a[o] &&
								(n || (n = {}), (n[o] = a[o]));
					} else n || (l || (l = []), l.push(u, n)), (n = a);
				else
					u === "dangerouslySetInnerHTML"
						? ((a = a ? a.__html : void 0),
							(s = s ? s.__html : void 0),
							a != null && s !== a && (l = l || []).push(u, a))
						: u === "children"
							? (typeof a != "string" && typeof a != "number") ||
								(l = l || []).push(u, "" + a)
							: u !== "suppressContentEditableWarning" &&
								u !== "suppressHydrationWarning" &&
								(Nr.hasOwnProperty(u)
									? (a != null && u === "onScroll" && G("scroll", e),
										l || s === a || (l = []))
									: (l = l || []).push(u, a));
		}
		n && (l = l || []).push("style", n);
		var u = l;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Xd = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function ur(e, t) {
	if (!X)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function ve(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Xh(e, t, n) {
	var r = t.pendingProps;
	switch ((Gs(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return ve(t), null;
		case 1:
			return je(t.type) && el(), ve(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Gn(),
				K(Pe),
				K(ge),
				na(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Ni(t)
						? (t.flags |= 4)
						: e === null ||
							(e.memoizedState.isDehydrated && !(t.flags & 256)) ||
							((t.flags |= 1024), Ke !== null && (vs(Ke), (Ke = null)))),
				as(e, t),
				ve(t),
				null
			);
		case 5:
			ta(t);
			var i = nn($r.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Yd(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(S(166));
					return ve(t), null;
				}
				if (((e = nn(lt.current)), Ni(t))) {
					(r = t.stateNode), (n = t.type);
					var l = t.memoizedProps;
					switch (((r[rt] = t), (r[Dr] = l), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							G("cancel", r), G("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							G("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < hr.length; i++) G(hr[i], r);
							break;
						case "source":
							G("error", r);
							break;
						case "img":
						case "image":
						case "link":
							G("error", r), G("load", r);
							break;
						case "details":
							G("toggle", r);
							break;
						case "input":
							Da(r, l), G("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!l.multiple }),
								G("invalid", r);
							break;
						case "textarea":
							$a(r, l), G("invalid", r);
					}
					Mo(n, l), (i = null);
					for (var o in l)
						if (l.hasOwnProperty(o)) {
							var s = l[o];
							o === "children"
								? typeof s == "string"
									? r.textContent !== s &&
										(l.suppressHydrationWarning !== !0 &&
											Ci(r.textContent, s, e),
										(i = ["children", s]))
									: typeof s == "number" &&
										r.textContent !== "" + s &&
										(l.suppressHydrationWarning !== !0 &&
											Ci(r.textContent, s, e),
										(i = ["children", "" + s]))
								: Nr.hasOwnProperty(o) &&
									s != null &&
									o === "onScroll" &&
									G("scroll", r);
						}
					switch (n) {
						case "input":
							yi(r), Aa(r, l, !0);
							break;
						case "textarea":
							yi(r), Ua(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof l.onClick == "function" && (r.onclick = bi);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Ec(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = o.createElement("div")),
									(e.innerHTML = "<script></script>"),
									(e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
									? (e = o.createElement(n, { is: r.is }))
									: ((e = o.createElement(n)),
										n === "select" &&
											((o = e),
											r.multiple
												? (o.multiple = !0)
												: r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[rt] = t),
						(e[Dr] = r),
						Kd(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Do(n, r)), n)) {
							case "dialog":
								G("cancel", e), G("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								G("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < hr.length; i++) G(hr[i], e);
								i = r;
								break;
							case "source":
								G("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								G("error", e), G("load", e), (i = r);
								break;
							case "details":
								G("toggle", e), (i = r);
								break;
							case "input":
								Da(e, r), (i = Ro(e, r)), G("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = ee({}, r, { value: void 0 })),
									G("invalid", e);
								break;
							case "textarea":
								$a(e, r), (i = Io(e, r)), G("invalid", e);
								break;
							default:
								i = r;
						}
						Mo(n, i), (s = i);
						for (l in s)
							if (s.hasOwnProperty(l)) {
								var a = s[l];
								l === "style"
									? Tc(e, a)
									: l === "dangerouslySetInnerHTML"
										? ((a = a ? a.__html : void 0), a != null && Cc(e, a))
										: l === "children"
											? typeof a == "string"
												? (n !== "textarea" || a !== "") && Tr(e, a)
												: typeof a == "number" && Tr(e, "" + a)
											: l !== "suppressContentEditableWarning" &&
												l !== "suppressHydrationWarning" &&
												l !== "autoFocus" &&
												(Nr.hasOwnProperty(l)
													? a != null && l === "onScroll" && G("scroll", e)
													: a != null && Ls(e, l, a, o));
							}
						switch (n) {
							case "input":
								yi(e), Aa(e, r, !1);
								break;
							case "textarea":
								yi(e), Ua(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Ft(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(l = r.value),
									l != null
										? Dn(e, !!r.multiple, l, !1)
										: r.defaultValue != null &&
											Dn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = bi);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return ve(t), null;
		case 6:
			if (e && t.stateNode != null) Xd(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
				if (((n = nn($r.current)), nn(lt.current), Ni(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[rt] = t),
						(l = r.nodeValue !== n) && ((e = Ie), e !== null))
					)
						switch (e.tag) {
							case 3:
								Ci(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Ci(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					l && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[rt] = t),
						(t.stateNode = r);
			}
			return ve(t), null;
		case 13:
			if (
				(K(q),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (X && Le !== null && t.mode & 1 && !(t.flags & 128))
					hd(), Hn(), (t.flags |= 98560), (l = !1);
				else if (((l = Ni(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!l) throw Error(S(318));
						if (
							((l = t.memoizedState),
							(l = l !== null ? l.dehydrated : null),
							!l)
						)
							throw Error(S(317));
						l[rt] = t;
					} else
						Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					ve(t), (l = !1);
				} else Ke !== null && (vs(Ke), (Ke = null)), (l = !0);
				if (!l) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
					r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || q.current & 1 ? se === 0 && (se = 3) : ha())),
					t.updateQueue !== null && (t.flags |= 4),
					ve(t),
					null);
		case 4:
			return (
				Gn(), as(e, t), e === null && zr(t.stateNode.containerInfo), ve(t), null
			);
		case 10:
			return Js(t.type._context), ve(t), null;
		case 17:
			return je(t.type) && el(), ve(t), null;
		case 19:
			if ((K(q), (l = t.memoizedState), l === null)) return ve(t), null;
			if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
				if (r) ur(l, !1);
				else {
					if (se !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = sl(e)), o !== null)) {
								for (
									t.flags |= 128,
										ur(l, !1),
										r = o.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(l = n),
										(e = r),
										(l.flags &= 14680066),
										(o = l.alternate),
										o === null
											? ((l.childLanes = 0),
												(l.lanes = e),
												(l.child = null),
												(l.subtreeFlags = 0),
												(l.memoizedProps = null),
												(l.memoizedState = null),
												(l.updateQueue = null),
												(l.dependencies = null),
												(l.stateNode = null))
											: ((l.childLanes = o.childLanes),
												(l.lanes = o.lanes),
												(l.child = o.child),
												(l.subtreeFlags = 0),
												(l.deletions = null),
												(l.memoizedProps = o.memoizedProps),
												(l.memoizedState = o.memoizedState),
												(l.updateQueue = o.updateQueue),
												(l.type = o.type),
												(e = o.dependencies),
												(l.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
															})),
										(n = n.sibling);
								return Q(q, (q.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					l.tail !== null &&
						re() > Yn &&
						((t.flags |= 128), (r = !0), ur(l, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = sl(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							ur(l, !0),
							l.tail === null && l.tailMode === "hidden" && !o.alternate && !X)
						)
							return ve(t), null;
					} else
						2 * re() - l.renderingStartTime > Yn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), ur(l, !1), (t.lanes = 4194304));
				l.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = l.last),
						n !== null ? (n.sibling = o) : (t.child = o),
						(l.last = o));
			}
			return l.tail !== null
				? ((t = l.tail),
					(l.rendering = t),
					(l.tail = t.sibling),
					(l.renderingStartTime = re()),
					(t.sibling = null),
					(n = q.current),
					Q(q, r ? (n & 1) | 2 : n & 1),
					t)
				: (ve(t), null);
		case 22:
		case 23:
			return (
				pa(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Oe & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: ve(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(S(156, t.tag));
}
function Jh(e, t) {
	switch ((Gs(t), t.tag)) {
		case 1:
			return (
				je(t.type) && el(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Gn(),
				K(Pe),
				K(ge),
				na(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return ta(t), null;
		case 13:
			if ((K(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(S(340));
				Hn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return K(q), null;
		case 4:
			return Gn(), null;
		case 10:
			return Js(t.type._context), null;
		case 22:
		case 23:
			return pa(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var ji = !1,
	ye = !1,
	qh = typeof WeakSet == "function" ? WeakSet : Set,
	O = null;
function In(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				te(e, t, r);
			}
		else n.current = null;
}
function us(e, t, n) {
	try {
		n();
	} catch (r) {
		te(e, t, r);
	}
}
var Pu = !1;
function bh(e, t) {
	if (((Qo = Xi), (e = td()), Hs(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						l = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, l.nodeType;
					} catch {
						n = null;
						break e;
					}
					var o = 0,
						s = -1,
						a = -1,
						u = 0,
						d = 0,
						c = e,
						f = null;
					t: for (;;) {
						for (
							var v;
							c !== n || (i !== 0 && c.nodeType !== 3) || (s = o + i),
								c !== l || (r !== 0 && c.nodeType !== 3) || (a = o + r),
								c.nodeType === 3 && (o += c.nodeValue.length),
								(v = c.firstChild) !== null;

						)
							(f = c), (c = v);
						for (;;) {
							if (c === e) break t;
							if (
								(f === n && ++u === i && (s = o),
								f === l && ++d === r && (a = o),
								(v = c.nextSibling) !== null)
							)
								break;
							(c = f), (f = c.parentNode);
						}
						c = v;
					}
					n = s === -1 || a === -1 ? null : { start: s, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Go = { focusedElem: e, selectionRange: n }, Xi = !1, O = t; O !== null; )
		if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (O = e);
		else
			for (; O !== null; ) {
				t = O;
				try {
					var y = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (y !== null) {
									var w = y.memoizedProps,
										C = y.memoizedState,
										h = t.stateNode,
										p = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : Qe(t.type, w),
											C,
										);
									h.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var m = t.stateNode.containerInfo;
								m.nodeType === 1
									? (m.textContent = "")
									: m.nodeType === 9 &&
										m.documentElement &&
										m.removeChild(m.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(S(163));
						}
				} catch (g) {
					te(t, t.return, g);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (O = e);
					break;
				}
				O = t.return;
			}
	return (y = Pu), (Pu = !1), y;
}
function Sr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var l = i.destroy;
				(i.destroy = void 0), l !== void 0 && us(t, n, l);
			}
			i = i.next;
		} while (i !== r);
	}
}
function zl(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function cs(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function Jd(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Jd(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[rt], delete t[Dr], delete t[Xo], delete t[Mh], delete t[Dh])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function qd(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ju(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || qd(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function ds(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
					(n = n._reactRootContainer),
					n != null || t.onclick !== null || (t.onclick = bi));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), (e = e.sibling);
}
function fs(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (fs(e, t, n), e = e.sibling; e !== null; ) fs(e, t, n), (e = e.sibling);
}
var de = null,
	Ge = !1;
function kt(e, t, n) {
	for (n = n.child; n !== null; ) bd(e, t, n), (n = n.sibling);
}
function bd(e, t, n) {
	if (it && typeof it.onCommitFiberUnmount == "function")
		try {
			it.onCommitFiberUnmount(Nl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ye || In(n, t);
		case 6:
			var r = de,
				i = Ge;
			(de = null),
				kt(e, t, n),
				(de = r),
				(Ge = i),
				de !== null &&
					(Ge
						? ((e = de),
							(n = n.stateNode),
							e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: de.removeChild(n.stateNode));
			break;
		case 18:
			de !== null &&
				(Ge
					? ((e = de),
						(n = n.stateNode),
						e.nodeType === 8
							? ao(e.parentNode, n)
							: e.nodeType === 1 && ao(e, n),
						Or(e))
					: ao(de, n.stateNode));
			break;
		case 4:
			(r = de),
				(i = Ge),
				(de = n.stateNode.containerInfo),
				(Ge = !0),
				kt(e, t, n),
				(de = r),
				(Ge = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ye &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var l = i,
						o = l.destroy;
					(l = l.tag),
						o !== void 0 && (l & 2 || l & 4) && us(n, t, o),
						(i = i.next);
				} while (i !== r);
			}
			kt(e, t, n);
			break;
		case 1:
			if (
				!ye &&
				(In(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (s) {
					te(n, t, s);
				}
			kt(e, t, n);
			break;
		case 21:
			kt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ye = (r = ye) || n.memoizedState !== null), kt(e, t, n), (ye = r))
				: kt(e, t, n);
			break;
		default:
			kt(e, t, n);
	}
}
function Ru(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new qh()),
			t.forEach(function (r) {
				var i = am.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function He(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var l = e,
					o = t,
					s = o;
				e: for (; s !== null; ) {
					switch (s.tag) {
						case 5:
							(de = s.stateNode), (Ge = !1);
							break e;
						case 3:
							(de = s.stateNode.containerInfo), (Ge = !0);
							break e;
						case 4:
							(de = s.stateNode.containerInfo), (Ge = !0);
							break e;
					}
					s = s.return;
				}
				if (de === null) throw Error(S(160));
				bd(l, o, i), (de = null), (Ge = !1);
				var a = i.alternate;
				a !== null && (a.return = null), (i.return = null);
			} catch (u) {
				te(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) ef(t, e), (t = t.sibling);
}
function ef(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((He(t, e), tt(e), r & 4)) {
				try {
					Sr(3, e, e.return), zl(3, e);
				} catch (w) {
					te(e, e.return, w);
				}
				try {
					Sr(5, e, e.return);
				} catch (w) {
					te(e, e.return, w);
				}
			}
			break;
		case 1:
			He(t, e), tt(e), r & 512 && n !== null && In(n, n.return);
			break;
		case 5:
			if (
				(He(t, e),
				tt(e),
				r & 512 && n !== null && In(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					Tr(i, "");
				} catch (w) {
					te(e, e.return, w);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var l = e.memoizedProps,
					o = n !== null ? n.memoizedProps : l,
					s = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						s === "input" && l.type === "radio" && l.name != null && kc(i, l),
							Do(s, o);
						var u = Do(s, l);
						for (o = 0; o < a.length; o += 2) {
							var d = a[o],
								c = a[o + 1];
							d === "style"
								? Tc(i, c)
								: d === "dangerouslySetInnerHTML"
									? Cc(i, c)
									: d === "children"
										? Tr(i, c)
										: Ls(i, d, c, u);
						}
						switch (s) {
							case "input":
								Oo(i, l);
								break;
							case "textarea":
								Sc(i, l);
								break;
							case "select":
								var f = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!l.multiple;
								var v = l.value;
								v != null
									? Dn(i, !!l.multiple, v, !1)
									: f !== !!l.multiple &&
										(l.defaultValue != null
											? Dn(i, !!l.multiple, l.defaultValue, !0)
											: Dn(i, !!l.multiple, l.multiple ? [] : "", !1));
						}
						i[Dr] = l;
					} catch (w) {
						te(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((He(t, e), tt(e), r & 4)) {
				if (e.stateNode === null) throw Error(S(162));
				(i = e.stateNode), (l = e.memoizedProps);
				try {
					i.nodeValue = l;
				} catch (w) {
					te(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(He(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Or(t.containerInfo);
				} catch (w) {
					te(e, e.return, w);
				}
			break;
		case 4:
			He(t, e), tt(e);
			break;
		case 13:
			He(t, e),
				tt(e),
				(i = e.child),
				i.flags & 8192 &&
					((l = i.memoizedState !== null),
					(i.stateNode.isHidden = l),
					!l ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(da = re())),
				r & 4 && Ru(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ye = (u = ye) || d), He(t, e), (ye = u)) : He(t, e),
				tt(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !d && e.mode & 1)
				)
					for (O = e, d = e.child; d !== null; ) {
						for (c = O = d; O !== null; ) {
							switch (((f = O), (v = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Sr(4, f, f.return);
									break;
								case 1:
									In(f, f.return);
									var y = f.stateNode;
									if (typeof y.componentWillUnmount == "function") {
										(r = f), (n = f.return);
										try {
											(t = r),
												(y.props = t.memoizedProps),
												(y.state = t.memoizedState),
												y.componentWillUnmount();
										} catch (w) {
											te(r, n, w);
										}
									}
									break;
								case 5:
									In(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										Lu(c);
										continue;
									}
							}
							v !== null ? ((v.return = f), (O = v)) : Lu(c);
						}
						d = d.sibling;
					}
				e: for (d = null, c = e; ; ) {
					if (c.tag === 5) {
						if (d === null) {
							d = c;
							try {
								(i = c.stateNode),
									u
										? ((l = i.style),
											typeof l.setProperty == "function"
												? l.setProperty("display", "none", "important")
												: (l.display = "none"))
										: ((s = c.stateNode),
											(a = c.memoizedProps.style),
											(o =
												a != null && a.hasOwnProperty("display")
													? a.display
													: null),
											(s.style.display = Nc("display", o)));
							} catch (w) {
								te(e, e.return, w);
							}
						}
					} else if (c.tag === 6) {
						if (d === null)
							try {
								c.stateNode.nodeValue = u ? "" : c.memoizedProps;
							} catch (w) {
								te(e, e.return, w);
							}
					} else if (
						((c.tag !== 22 && c.tag !== 23) ||
							c.memoizedState === null ||
							c === e) &&
						c.child !== null
					) {
						(c.child.return = c), (c = c.child);
						continue;
					}
					if (c === e) break e;
					for (; c.sibling === null; ) {
						if (c.return === null || c.return === e) break e;
						d === c && (d = null), (c = c.return);
					}
					d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
				}
			}
			break;
		case 19:
			He(t, e), tt(e), r & 4 && Ru(e);
			break;
		case 21:
			break;
		default:
			He(t, e), tt(e);
	}
}
function tt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (qd(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(S(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Tr(i, ""), (r.flags &= -33));
					var l = ju(e);
					fs(e, l, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						s = ju(e);
					ds(e, s, o);
					break;
				default:
					throw Error(S(161));
			}
		} catch (a) {
			te(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function em(e, t, n) {
	(O = e), tf(e);
}
function tf(e, t, n) {
	for (var r = (e.mode & 1) !== 0; O !== null; ) {
		var i = O,
			l = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || ji;
			if (!o) {
				var s = i.alternate,
					a = (s !== null && s.memoizedState !== null) || ye;
				s = ji;
				var u = ye;
				if (((ji = o), (ye = a) && !u))
					for (O = i; O !== null; )
						(o = O),
							(a = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Iu(i)
								: a !== null
									? ((a.return = o), (O = a))
									: Iu(i);
				for (; l !== null; ) (O = l), tf(l), (l = l.sibling);
				(O = i), (ji = s), (ye = u);
			}
			Ou(e);
		} else
			i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (O = l)) : Ou(e);
	}
}
function Ou(e) {
	for (; O !== null; ) {
		var t = O;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ye || zl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ye)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Qe(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var l = t.updateQueue;
							l !== null && mu(t, l, r);
							break;
						case 3:
							var o = t.updateQueue;
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								mu(t, o, n);
							}
							break;
						case 5:
							var s = t.stateNode;
							if (n === null && t.flags & 4) {
								n = s;
								var a = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										a.autoFocus && n.focus();
										break;
									case "img":
										a.src && (n.src = a.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var c = d.dehydrated;
										c !== null && Or(c);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(S(163));
					}
				ye || (t.flags & 512 && cs(t));
			} catch (f) {
				te(t, t.return, f);
			}
		}
		if (t === e) {
			O = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (O = n);
			break;
		}
		O = t.return;
	}
}
function Lu(e) {
	for (; O !== null; ) {
		var t = O;
		if (t === e) {
			O = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (O = n);
			break;
		}
		O = t.return;
	}
}
function Iu(e) {
	for (; O !== null; ) {
		var t = O;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						zl(4, t);
					} catch (a) {
						te(t, n, a);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (a) {
							te(t, i, a);
						}
					}
					var l = t.return;
					try {
						cs(t);
					} catch (a) {
						te(t, l, a);
					}
					break;
				case 5:
					var o = t.return;
					try {
						cs(t);
					} catch (a) {
						te(t, o, a);
					}
			}
		} catch (a) {
			te(t, t.return, a);
		}
		if (t === e) {
			O = null;
			break;
		}
		var s = t.sibling;
		if (s !== null) {
			(s.return = t.return), (O = s);
			break;
		}
		O = t.return;
	}
}
var tm = Math.ceil,
	cl = _t.ReactCurrentDispatcher,
	ua = _t.ReactCurrentOwner,
	Ve = _t.ReactCurrentBatchConfig,
	W = 0,
	ce = null,
	ie = null,
	fe = 0,
	Oe = 0,
	zn = Gt(0),
	se = 0,
	Br = null,
	cn = 0,
	Ml = 0,
	ca = 0,
	Er = null,
	Ne = null,
	da = 0,
	Yn = 1 / 0,
	dt = null,
	dl = !1,
	ps = null,
	Dt = null,
	Ri = !1,
	jt = null,
	fl = 0,
	Cr = 0,
	hs = null,
	Vi = -1,
	Bi = 0;
function ke() {
	return W & 6 ? re() : Vi !== -1 ? Vi : (Vi = re());
}
function At(e) {
	return e.mode & 1
		? W & 2 && fe !== 0
			? fe & -fe
			: $h.transition !== null
				? (Bi === 0 && (Bi = Uc()), Bi)
				: ((e = H),
					e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qc(e.type))),
					e)
		: 1;
}
function Je(e, t, n, r) {
	if (50 < Cr) throw ((Cr = 0), (hs = null), Error(S(185)));
	oi(e, n, r),
		(!(W & 2) || e !== ce) &&
			(e === ce && (!(W & 2) && (Ml |= n), se === 4 && Nt(e, fe)),
			Re(e, r),
			n === 1 && W === 0 && !(t.mode & 1) && ((Yn = re() + 500), Ol && Kt()));
}
function Re(e, t) {
	var n = e.callbackNode;
	$p(e, t);
	var r = Yi(e, e === ce ? fe : 0);
	if (r === 0)
		n !== null && Ba(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Ba(n), t === 1))
			e.tag === 0 ? Ah(zu.bind(null, e)) : dd(zu.bind(null, e)),
				Ih(function () {
					!(W & 6) && Kt();
				}),
				(n = null);
		else {
			switch (Fc(r)) {
				case 1:
					n = As;
					break;
				case 4:
					n = Ac;
					break;
				case 16:
					n = Ki;
					break;
				case 536870912:
					n = $c;
					break;
				default:
					n = Ki;
			}
			n = cf(n, nf.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function nf(e, t) {
	if (((Vi = -1), (Bi = 0), W & 6)) throw Error(S(327));
	var n = e.callbackNode;
	if (Vn() && e.callbackNode !== n) return null;
	var r = Yi(e, e === ce ? fe : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
	else {
		t = r;
		var i = W;
		W |= 2;
		var l = lf();
		(ce !== e || fe !== t) && ((dt = null), (Yn = re() + 500), rn(e, t));
		do
			try {
				im();
				break;
			} catch (s) {
				rf(e, s);
			}
		while (!0);
		Xs(),
			(cl.current = l),
			(W = i),
			ie !== null ? (t = 0) : ((ce = null), (fe = 0), (t = se));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = Vo(e)), i !== 0 && ((r = i), (t = ms(e, i)))), t === 1)
		)
			throw ((n = Br), rn(e, 0), Nt(e, r), Re(e, re()), n);
		if (t === 6) Nt(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!nm(i) &&
					((t = pl(e, r)),
					t === 2 && ((l = Vo(e)), l !== 0 && ((r = l), (t = ms(e, l)))),
					t === 1))
			)
				throw ((n = Br), rn(e, 0), Nt(e, r), Re(e, re()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(S(345));
				case 2:
					bt(e, Ne, dt);
					break;
				case 3:
					if (
						(Nt(e, r), (r & 130023424) === r && ((t = da + 500 - re()), 10 < t))
					) {
						if (Yi(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							ke(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = Yo(bt.bind(null, e, Ne, dt), t);
						break;
					}
					bt(e, Ne, dt);
					break;
				case 4:
					if ((Nt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - Xe(r);
						(l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
					}
					if (
						((r = i),
						(r = re() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
									? 480
									: 1080 > r
										? 1080
										: 1920 > r
											? 1920
											: 3e3 > r
												? 3e3
												: 4320 > r
													? 4320
													: 1960 * tm(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Yo(bt.bind(null, e, Ne, dt), r);
						break;
					}
					bt(e, Ne, dt);
					break;
				case 5:
					bt(e, Ne, dt);
					break;
				default:
					throw Error(S(329));
			}
		}
	}
	return Re(e, re()), e.callbackNode === n ? nf.bind(null, e) : null;
}
function ms(e, t) {
	var n = Er;
	return (
		e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
		(e = pl(e, t)),
		e !== 2 && ((t = Ne), (Ne = n), t !== null && vs(t)),
		e
	);
}
function vs(e) {
	Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function nm(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						l = i.getSnapshot;
					i = i.value;
					try {
						if (!be(l(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Nt(e, t) {
	for (
		t &= ~ca,
			t &= ~Ml,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Xe(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function zu(e) {
	if (W & 6) throw Error(S(327));
	Vn();
	var t = Yi(e, 0);
	if (!(t & 1)) return Re(e, re()), null;
	var n = pl(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Vo(e);
		r !== 0 && ((t = r), (n = ms(e, r)));
	}
	if (n === 1) throw ((n = Br), rn(e, 0), Nt(e, t), Re(e, re()), n);
	if (n === 6) throw Error(S(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		bt(e, Ne, dt),
		Re(e, re()),
		null
	);
}
function fa(e, t) {
	var n = W;
	W |= 1;
	try {
		return e(t);
	} finally {
		(W = n), W === 0 && ((Yn = re() + 500), Ol && Kt());
	}
}
function dn(e) {
	jt !== null && jt.tag === 0 && !(W & 6) && Vn();
	var t = W;
	W |= 1;
	var n = Ve.transition,
		r = H;
	try {
		if (((Ve.transition = null), (H = 1), e)) return e();
	} finally {
		(H = r), (Ve.transition = n), (W = t), !(W & 6) && Kt();
	}
}
function pa() {
	(Oe = zn.current), K(zn);
}
function rn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Lh(n)), ie !== null))
		for (n = ie.return; n !== null; ) {
			var r = n;
			switch ((Gs(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && el();
					break;
				case 3:
					Gn(), K(Pe), K(ge), na();
					break;
				case 5:
					ta(r);
					break;
				case 4:
					Gn();
					break;
				case 13:
					K(q);
					break;
				case 19:
					K(q);
					break;
				case 10:
					Js(r.type._context);
					break;
				case 22:
				case 23:
					pa();
			}
			n = n.return;
		}
	if (
		((ce = e),
		(ie = e = $t(e.current, null)),
		(fe = Oe = t),
		(se = 0),
		(Br = null),
		(ca = Ml = cn = 0),
		(Ne = Er = null),
		tn !== null)
	) {
		for (t = 0; t < tn.length; t++)
			if (((n = tn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					l = n.pending;
				if (l !== null) {
					var o = l.next;
					(l.next = i), (r.next = o);
				}
				n.pending = r;
			}
		tn = null;
	}
	return e;
}
function rf(e, t) {
	do {
		var n = ie;
		try {
			if ((Xs(), ($i.current = ul), al)) {
				for (var r = b.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				al = !1;
			}
			if (
				((un = 0),
				(ue = oe = b = null),
				(kr = !1),
				(Ur = 0),
				(ua.current = null),
				n === null || n.return === null)
			) {
				(se = 1), (Br = t), (ie = null);
				break;
			}
			e: {
				var l = e,
					o = n.return,
					s = n,
					a = t;
				if (
					((t = fe),
					(s.flags |= 32768),
					a !== null && typeof a == "object" && typeof a.then == "function")
				) {
					var u = a,
						d = s,
						c = d.tag;
					if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
						var f = d.alternate;
						f
							? ((d.updateQueue = f.updateQueue),
								(d.memoizedState = f.memoizedState),
								(d.lanes = f.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var v = _u(o);
					if (v !== null) {
						(v.flags &= -257),
							ku(v, o, s, l, t),
							v.mode & 1 && wu(l, u, t),
							(t = v),
							(a = u);
						var y = t.updateQueue;
						if (y === null) {
							var w = new Set();
							w.add(a), (t.updateQueue = w);
						} else y.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							wu(l, u, t), ha();
							break e;
						}
						a = Error(S(426));
					}
				} else if (X && s.mode & 1) {
					var C = _u(o);
					if (C !== null) {
						!(C.flags & 65536) && (C.flags |= 256),
							ku(C, o, s, l, t),
							Ks(Kn(a, s));
						break e;
					}
				}
				(l = a = Kn(a, s)),
					se !== 4 && (se = 2),
					Er === null ? (Er = [l]) : Er.push(l),
					(l = o);
				do {
					switch (l.tag) {
						case 3:
							(l.flags |= 65536), (t &= -t), (l.lanes |= t);
							var h = Fd(l, a, t);
							hu(l, h);
							break e;
						case 1:
							s = a;
							var p = l.type,
								m = l.stateNode;
							if (
								!(l.flags & 128) &&
								(typeof p.getDerivedStateFromError == "function" ||
									(m !== null &&
										typeof m.componentDidCatch == "function" &&
										(Dt === null || !Dt.has(m))))
							) {
								(l.flags |= 65536), (t &= -t), (l.lanes |= t);
								var g = Vd(l, s, t);
								hu(l, g);
								break e;
							}
					}
					l = l.return;
				} while (l !== null);
			}
			sf(n);
		} catch (_) {
			(t = _), ie === n && n !== null && (ie = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function lf() {
	var e = cl.current;
	return (cl.current = ul), e === null ? ul : e;
}
function ha() {
	(se === 0 || se === 3 || se === 2) && (se = 4),
		ce === null || (!(cn & 268435455) && !(Ml & 268435455)) || Nt(ce, fe);
}
function pl(e, t) {
	var n = W;
	W |= 2;
	var r = lf();
	(ce !== e || fe !== t) && ((dt = null), rn(e, t));
	do
		try {
			rm();
			break;
		} catch (i) {
			rf(e, i);
		}
	while (!0);
	if ((Xs(), (W = n), (cl.current = r), ie !== null)) throw Error(S(261));
	return (ce = null), (fe = 0), se;
}
function rm() {
	for (; ie !== null; ) of(ie);
}
function im() {
	for (; ie !== null && !jp(); ) of(ie);
}
function of(e) {
	var t = uf(e.alternate, e, Oe);
	(e.memoizedProps = e.pendingProps),
		t === null ? sf(e) : (ie = t),
		(ua.current = null);
}
function sf(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Jh(n, t)), n !== null)) {
				(n.flags &= 32767), (ie = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(se = 6), (ie = null);
				return;
			}
		} else if (((n = Xh(n, t, Oe)), n !== null)) {
			ie = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			ie = t;
			return;
		}
		ie = t = e;
	} while (t !== null);
	se === 0 && (se = 5);
}
function bt(e, t, n) {
	var r = H,
		i = Ve.transition;
	try {
		(Ve.transition = null), (H = 1), lm(e, t, n, r);
	} finally {
		(Ve.transition = i), (H = r);
	}
	return null;
}
function lm(e, t, n, r) {
	do Vn();
	while (jt !== null);
	if (W & 6) throw Error(S(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(S(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var l = n.lanes | n.childLanes;
	if (
		(Up(e, l),
		e === ce && ((ie = ce = null), (fe = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Ri ||
			((Ri = !0),
			cf(Ki, function () {
				return Vn(), null;
			})),
		(l = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || l)
	) {
		(l = Ve.transition), (Ve.transition = null);
		var o = H;
		H = 1;
		var s = W;
		(W |= 4),
			(ua.current = null),
			bh(e, n),
			ef(n, e),
			Ch(Go),
			(Xi = !!Qo),
			(Go = Qo = null),
			(e.current = n),
			em(n),
			Rp(),
			(W = s),
			(H = o),
			(Ve.transition = l);
	} else e.current = n;
	if (
		(Ri && ((Ri = !1), (jt = e), (fl = i)),
		(l = e.pendingLanes),
		l === 0 && (Dt = null),
		Ip(n.stateNode),
		Re(e, re()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (dl) throw ((dl = !1), (e = ps), (ps = null), e);
	return (
		fl & 1 && e.tag !== 0 && Vn(),
		(l = e.pendingLanes),
		l & 1 ? (e === hs ? Cr++ : ((Cr = 0), (hs = e))) : (Cr = 0),
		Kt(),
		null
	);
}
function Vn() {
	if (jt !== null) {
		var e = Fc(fl),
			t = Ve.transition,
			n = H;
		try {
			if (((Ve.transition = null), (H = 16 > e ? 16 : e), jt === null))
				var r = !1;
			else {
				if (((e = jt), (jt = null), (fl = 0), W & 6)) throw Error(S(331));
				var i = W;
				for (W |= 4, O = e.current; O !== null; ) {
					var l = O,
						o = l.child;
					if (O.flags & 16) {
						var s = l.deletions;
						if (s !== null) {
							for (var a = 0; a < s.length; a++) {
								var u = s[a];
								for (O = u; O !== null; ) {
									var d = O;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Sr(8, d, l);
									}
									var c = d.child;
									if (c !== null) (c.return = d), (O = c);
									else
										for (; O !== null; ) {
											d = O;
											var f = d.sibling,
												v = d.return;
											if ((Jd(d), d === u)) {
												O = null;
												break;
											}
											if (f !== null) {
												(f.return = v), (O = f);
												break;
											}
											O = v;
										}
								}
							}
							var y = l.alternate;
							if (y !== null) {
								var w = y.child;
								if (w !== null) {
									y.child = null;
									do {
										var C = w.sibling;
										(w.sibling = null), (w = C);
									} while (w !== null);
								}
							}
							O = l;
						}
					}
					if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (O = o);
					else
						e: for (; O !== null; ) {
							if (((l = O), l.flags & 2048))
								switch (l.tag) {
									case 0:
									case 11:
									case 15:
										Sr(9, l, l.return);
								}
							var h = l.sibling;
							if (h !== null) {
								(h.return = l.return), (O = h);
								break e;
							}
							O = l.return;
						}
				}
				var p = e.current;
				for (O = p; O !== null; ) {
					o = O;
					var m = o.child;
					if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (O = m);
					else
						e: for (o = p; O !== null; ) {
							if (((s = O), s.flags & 2048))
								try {
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											zl(9, s);
									}
								} catch (_) {
									te(s, s.return, _);
								}
							if (s === o) {
								O = null;
								break e;
							}
							var g = s.sibling;
							if (g !== null) {
								(g.return = s.return), (O = g);
								break e;
							}
							O = s.return;
						}
				}
				if (
					((W = i), Kt(), it && typeof it.onPostCommitFiberRoot == "function")
				)
					try {
						it.onPostCommitFiberRoot(Nl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(H = n), (Ve.transition = t);
		}
	}
	return !1;
}
function Mu(e, t, n) {
	(t = Kn(n, t)),
		(t = Fd(e, t, 1)),
		(e = Mt(e, t, 1)),
		(t = ke()),
		e !== null && (oi(e, 1, t), Re(e, t));
}
function te(e, t, n) {
	if (e.tag === 3) Mu(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Mu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(Dt === null || !Dt.has(r)))
				) {
					(e = Kn(n, e)),
						(e = Vd(t, e, 1)),
						(t = Mt(t, e, 1)),
						(e = ke()),
						t !== null && (oi(t, 1, e), Re(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function om(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = ke()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ce === e &&
			(fe & n) === n &&
			(se === 4 || (se === 3 && (fe & 130023424) === fe && 500 > re() - da)
				? rn(e, 0)
				: (ca |= n)),
		Re(e, t);
}
function af(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = wi), (wi <<= 1), !(wi & 130023424) && (wi = 4194304))
			: (t = 1));
	var n = ke();
	(e = gt(e, t)), e !== null && (oi(e, t, n), Re(e, n));
}
function sm(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), af(e, n);
}
function am(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(S(314));
	}
	r !== null && r.delete(t), af(e, n);
}
var uf;
uf = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Pe.current) Te = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), Yh(e, t, n);
			Te = !!(e.flags & 131072);
		}
	else (Te = !1), X && t.flags & 1048576 && fd(t, rl, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Fi(e, t), (e = t.pendingProps);
			var i = Wn(t, ge.current);
			Fn(t, n), (i = ia(null, t, r, e, i, n));
			var l = la();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
						(t.memoizedState = null),
						(t.updateQueue = null),
						je(r) ? ((l = !0), tl(t)) : (l = !1),
						(t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
						bs(t),
						(i.updater = Il),
						(t.stateNode = i),
						(i._reactInternals = t),
						ns(t, r, e, n),
						(t = ls(null, t, r, !0, l, n)))
					: ((t.tag = 0), X && l && Qs(t), _e(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Fi(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = cm(r)),
					(e = Qe(r, e)),
					i)
				) {
					case 0:
						t = is(null, t, r, e, n);
						break e;
					case 1:
						t = Cu(null, t, r, e, n);
						break e;
					case 11:
						t = Su(null, t, r, e, n);
						break e;
					case 14:
						t = Eu(null, t, r, Qe(r.type, e), n);
						break e;
				}
				throw Error(S(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				is(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				Cu(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((Hd(t), e === null)) throw Error(S(387));
				(r = t.pendingProps),
					(l = t.memoizedState),
					(i = l.element),
					gd(e, t),
					ol(t, r, null, n);
				var o = t.memoizedState;
				if (((r = o.element), l.isDehydrated))
					if (
						((l = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = l),
						(t.memoizedState = l),
						t.flags & 256)
					) {
						(i = Kn(Error(S(423)), t)), (t = Nu(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = Kn(Error(S(424)), t)), (t = Nu(e, t, r, n, i));
						break e;
					} else
						for (
							Le = zt(t.stateNode.containerInfo.firstChild),
								Ie = t,
								X = !0,
								Ke = null,
								n = vd(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Hn(), r === i)) {
						t = xt(e, t, n);
						break e;
					}
					_e(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				xd(t),
				e === null && bo(t),
				(r = t.type),
				(i = t.pendingProps),
				(l = e !== null ? e.memoizedProps : null),
				(o = i.children),
				Ko(r, i) ? (o = null) : l !== null && Ko(r, l) && (t.flags |= 32),
				Wd(e, t),
				_e(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && bo(t), null;
		case 13:
			return Qd(e, t, n);
		case 4:
			return (
				ea(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Qn(t, null, r, n)) : _e(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				Su(e, t, r, i, n)
			);
		case 7:
			return _e(e, t, t.pendingProps, n), t.child;
		case 8:
			return _e(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return _e(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(l = t.memoizedProps),
					(o = i.value),
					Q(il, r._currentValue),
					(r._currentValue = o),
					l !== null)
				)
					if (be(l.value, o)) {
						if (l.children === i.children && !Pe.current) {
							t = xt(e, t, n);
							break e;
						}
					} else
						for (l = t.child, l !== null && (l.return = t); l !== null; ) {
							var s = l.dependencies;
							if (s !== null) {
								o = l.child;
								for (var a = s.firstContext; a !== null; ) {
									if (a.context === r) {
										if (l.tag === 1) {
											(a = mt(-1, n & -n)), (a.tag = 2);
											var u = l.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null
													? (a.next = a)
													: ((a.next = d.next), (d.next = a)),
													(u.pending = a);
											}
										}
										(l.lanes |= n),
											(a = l.alternate),
											a !== null && (a.lanes |= n),
											es(l.return, n, t),
											(s.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (l.tag === 10) o = l.type === t.type ? null : l.child;
							else if (l.tag === 18) {
								if (((o = l.return), o === null)) throw Error(S(341));
								(o.lanes |= n),
									(s = o.alternate),
									s !== null && (s.lanes |= n),
									es(o, n, t),
									(o = l.sibling);
							} else o = l.child;
							if (o !== null) o.return = l;
							else
								for (o = l; o !== null; ) {
									if (o === t) {
										o = null;
										break;
									}
									if (((l = o.sibling), l !== null)) {
										(l.return = o.return), (o = l);
										break;
									}
									o = o.return;
								}
							l = o;
						}
				_e(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				Fn(t, n),
				(i = Be(i)),
				(r = r(i)),
				(t.flags |= 1),
				_e(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Qe(r, t.pendingProps)),
				(i = Qe(r.type, i)),
				Eu(e, t, r, i, n)
			);
		case 15:
			return Bd(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				Fi(e, t),
				(t.tag = 1),
				je(r) ? ((e = !0), tl(t)) : (e = !1),
				Fn(t, n),
				Ud(t, r, i),
				ns(t, r, i, n),
				ls(null, t, r, !0, e, n)
			);
		case 19:
			return Gd(e, t, n);
		case 22:
			return Zd(e, t, n);
	}
	throw Error(S(156, t.tag));
};
function cf(e, t) {
	return Dc(e, t);
}
function um(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Fe(e, t, n, r) {
	return new um(e, t, n, r);
}
function ma(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cm(e) {
	if (typeof e == "function") return ma(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === zs)) return 11;
		if (e === Ms) return 14;
	}
	return 2;
}
function $t(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Fe(e.tag, t, e.key, e.mode)),
				(n.elementType = e.elementType),
				(n.type = e.type),
				(n.stateNode = e.stateNode),
				(n.alternate = e),
				(e.alternate = n))
			: ((n.pendingProps = t),
				(n.type = e.type),
				(n.flags = 0),
				(n.subtreeFlags = 0),
				(n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Zi(e, t, n, r, i, l) {
	var o = 2;
	if (((r = e), typeof e == "function")) ma(e) && (o = 1);
	else if (typeof e == "string") o = 5;
	else
		e: switch (e) {
			case En:
				return ln(n.children, i, l, t);
			case Is:
				(o = 8), (i |= 8);
				break;
			case No:
				return (
					(e = Fe(12, n, t, i | 2)), (e.elementType = No), (e.lanes = l), e
				);
			case To:
				return (e = Fe(13, n, t, i)), (e.elementType = To), (e.lanes = l), e;
			case Po:
				return (e = Fe(19, n, t, i)), (e.elementType = Po), (e.lanes = l), e;
			case xc:
				return Dl(n, i, l, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case yc:
							o = 10;
							break e;
						case gc:
							o = 9;
							break e;
						case zs:
							o = 11;
							break e;
						case Ms:
							o = 14;
							break e;
						case St:
							(o = 16), (r = null);
							break e;
					}
				throw Error(S(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = Fe(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
	);
}
function ln(e, t, n, r) {
	return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function Dl(e, t, n, r) {
	return (
		(e = Fe(22, e, r, t)),
		(e.elementType = xc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function yo(e, t, n) {
	return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function go(e, t, n) {
	return (
		(t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function dm(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Jl(0)),
		(this.expirationTimes = Jl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Jl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function va(e, t, n, r, i, l, o, s, a) {
	return (
		(e = new dm(e, t, n, s, a)),
		t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
		(l = Fe(3, null, null, t)),
		(e.current = l),
		(l.stateNode = e),
		(l.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		bs(l),
		e
	);
}
function fm(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Sn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function df(e) {
	if (!e) return Vt;
	e = e._reactInternals;
	e: {
		if (vn(e) !== e || e.tag !== 1) throw Error(S(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (je(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(S(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (je(n)) return cd(e, n, t);
	}
	return t;
}
function ff(e, t, n, r, i, l, o, s, a) {
	return (
		(e = va(n, r, !0, e, i, l, o, s, a)),
		(e.context = df(null)),
		(n = e.current),
		(r = ke()),
		(i = At(n)),
		(l = mt(r, i)),
		(l.callback = t ?? null),
		Mt(n, l, i),
		(e.current.lanes = i),
		oi(e, i, r),
		Re(e, r),
		e
	);
}
function Al(e, t, n, r) {
	var i = t.current,
		l = ke(),
		o = At(i);
	return (
		(n = df(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = mt(l, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Mt(i, t, o)),
		e !== null && (Je(e, i, o, l), Ai(e, i, o)),
		o
	);
}
function hl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Du(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function ya(e, t) {
	Du(e, t), (e = e.alternate) && Du(e, t);
}
function pm() {
	return null;
}
var pf =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
			};
function ga(e) {
	this._internalRoot = e;
}
$l.prototype.render = ga.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(S(409));
	Al(e, t, null, null);
};
$l.prototype.unmount = ga.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		dn(function () {
			Al(null, e, null, null);
		}),
			(t[yt] = null);
	}
};
function $l(e) {
	this._internalRoot = e;
}
$l.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Zc();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
		Ct.splice(n, 0, e), n === 0 && Hc(e);
	}
};
function xa(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ul(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Au() {}
function hm(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var l = r;
			r = function () {
				var u = hl(o);
				l.call(u);
			};
		}
		var o = ff(t, r, e, 0, null, !1, !1, "", Au);
		return (
			(e._reactRootContainer = o),
			(e[yt] = o.current),
			zr(e.nodeType === 8 ? e.parentNode : e),
			dn(),
			o
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var s = r;
		r = function () {
			var u = hl(a);
			s.call(u);
		};
	}
	var a = va(e, 0, !1, null, null, !1, !1, "", Au);
	return (
		(e._reactRootContainer = a),
		(e[yt] = a.current),
		zr(e.nodeType === 8 ? e.parentNode : e),
		dn(function () {
			Al(t, a, n, r);
		}),
		a
	);
}
function Fl(e, t, n, r, i) {
	var l = n._reactRootContainer;
	if (l) {
		var o = l;
		if (typeof i == "function") {
			var s = i;
			i = function () {
				var a = hl(o);
				s.call(a);
			};
		}
		Al(t, o, e, i);
	} else o = hm(n, t, e, i, r);
	return hl(o);
}
Vc = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = pr(t.pendingLanes);
				n !== 0 &&
					($s(t, n | 1), Re(t, re()), !(W & 6) && ((Yn = re() + 500), Kt()));
			}
			break;
		case 13:
			dn(function () {
				var r = gt(e, 1);
				if (r !== null) {
					var i = ke();
					Je(r, e, 1, i);
				}
			}),
				ya(e, 1);
	}
};
Us = function (e) {
	if (e.tag === 13) {
		var t = gt(e, 134217728);
		if (t !== null) {
			var n = ke();
			Je(t, e, 134217728, n);
		}
		ya(e, 134217728);
	}
};
Bc = function (e) {
	if (e.tag === 13) {
		var t = At(e),
			n = gt(e, t);
		if (n !== null) {
			var r = ke();
			Je(n, e, t, r);
		}
		ya(e, t);
	}
};
Zc = function () {
	return H;
};
Wc = function (e, t) {
	var n = H;
	try {
		return (H = e), t();
	} finally {
		H = n;
	}
};
$o = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Oo(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]',
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = Rl(r);
						if (!i) throw Error(S(90));
						_c(r), Oo(r, i);
					}
				}
			}
			break;
		case "textarea":
			Sc(e, n);
			break;
		case "select":
			(t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
	}
};
Rc = fa;
Oc = dn;
var mm = { usingClientEntryPoint: !1, Events: [ai, Pn, Rl, Pc, jc, fa] },
	cr = {
		findFiberByHostInstance: en,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom",
	},
	vm = {
		bundleType: cr.bundleType,
		version: cr.version,
		rendererPackageName: cr.rendererPackageName,
		rendererConfig: cr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: _t.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = zc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: cr.findFiberByHostInstance || pm,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Oi.isDisabled && Oi.supportsFiber)
		try {
			(Nl = Oi.inject(vm)), (it = Oi);
		} catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mm;
De.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!xa(t)) throw Error(S(200));
	return fm(e, t, null, n);
};
De.createRoot = function (e, t) {
	if (!xa(e)) throw Error(S(299));
	var n = !1,
		r = "",
		i = pf;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = va(e, 1, !1, null, null, n, !1, r, i)),
		(e[yt] = t.current),
		zr(e.nodeType === 8 ? e.parentNode : e),
		new ga(t)
	);
};
De.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(S(188))
			: ((e = Object.keys(e).join(",")), Error(S(268, e)));
	return (e = zc(t)), (e = e === null ? null : e.stateNode), e;
};
De.flushSync = function (e) {
	return dn(e);
};
De.hydrate = function (e, t, n) {
	if (!Ul(t)) throw Error(S(200));
	return Fl(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
	if (!xa(e)) throw Error(S(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		l = "",
		o = pf;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = ff(t, null, e, 1, n ?? null, i, !1, l, o)),
		(e[yt] = t.current),
		zr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new $l(t);
};
De.render = function (e, t, n) {
	if (!Ul(t)) throw Error(S(200));
	return Fl(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
	if (!Ul(e)) throw Error(S(40));
	return e._reactRootContainer
		? (dn(function () {
				Fl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[yt] = null);
				});
			}),
			!0)
		: !1;
};
De.unstable_batchedUpdates = fa;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Ul(n)) throw Error(S(200));
	if (e == null || e._reactInternals === void 0) throw Error(S(38));
	return Fl(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function hf() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf);
		} catch (e) {
			console.error(e);
		}
}
hf(), (pc.exports = De);
var ym = pc.exports,
	$u = ym;
(Eo.createRoot = $u.createRoot), (Eo.hydrateRoot = $u.hydrateRoot);
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zr() {
	return (
		(Zr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		Zr.apply(this, arguments)
	);
}
var Rt;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Rt || (Rt = {}));
const Uu = "popstate";
function gm(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: l, search: o, hash: s } = r.location;
		return ys(
			"",
			{ pathname: l, search: o, hash: s },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default",
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : ml(i);
	}
	return wm(t, n, null, e);
}
function le(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function mf(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function xm() {
	return Math.random().toString(36).substr(2, 8);
}
function Fu(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function ys(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Zr(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? nr(t) : t,
			{ state: n, key: (t && t.key) || r || xm() },
		)
	);
}
function ml(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function nr(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function wm(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: l = !1 } = r,
		o = i.history,
		s = Rt.Pop,
		a = null,
		u = d();
	u == null && ((u = 0), o.replaceState(Zr({}, o.state, { idx: u }), ""));
	function d() {
		return (o.state || { idx: null }).idx;
	}
	function c() {
		s = Rt.Pop;
		let C = d(),
			h = C == null ? null : C - u;
		(u = C), a && a({ action: s, location: w.location, delta: h });
	}
	function f(C, h) {
		s = Rt.Push;
		let p = ys(w.location, C, h);
		u = d() + 1;
		let m = Fu(p, u),
			g = w.createHref(p);
		try {
			o.pushState(m, "", g);
		} catch (_) {
			if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
			i.location.assign(g);
		}
		l && a && a({ action: s, location: w.location, delta: 1 });
	}
	function v(C, h) {
		s = Rt.Replace;
		let p = ys(w.location, C, h);
		u = d();
		let m = Fu(p, u),
			g = w.createHref(p);
		o.replaceState(m, "", g),
			l && a && a({ action: s, location: w.location, delta: 0 });
	}
	function y(C) {
		let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
			p = typeof C == "string" ? C : ml(C);
		return (
			(p = p.replace(/ $/, "%20")),
			le(
				h,
				"No window.location.(origin|href) available to create URL for href: " +
					p,
			),
			new URL(p, h)
		);
	}
	let w = {
		get action() {
			return s;
		},
		get location() {
			return e(i, o);
		},
		listen(C) {
			if (a) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(Uu, c),
				(a = C),
				() => {
					i.removeEventListener(Uu, c), (a = null);
				}
			);
		},
		createHref(C) {
			return t(i, C);
		},
		createURL: y,
		encodeLocation(C) {
			let h = y(C);
			return { pathname: h.pathname, search: h.search, hash: h.hash };
		},
		push: f,
		replace: v,
		go(C) {
			return o.go(C);
		},
	};
	return w;
}
var Vu;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(Vu || (Vu = {}));
function _m(e, t, n) {
	return n === void 0 && (n = "/"), km(e, t, n, !1);
}
function km(e, t, n, r) {
	let i = typeof t == "string" ? nr(t) : t,
		l = wa(i.pathname || "/", n);
	if (l == null) return null;
	let o = vf(e);
	Sm(o);
	let s = null;
	for (let a = 0; s == null && a < o.length; ++a) {
		let u = zm(l);
		s = Lm(o[a], u, r);
	}
	return s;
}
function vf(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (l, o, s) => {
		let a = {
			relativePath: s === void 0 ? l.path || "" : s,
			caseSensitive: l.caseSensitive === !0,
			childrenIndex: o,
			route: l,
		};
		a.relativePath.startsWith("/") &&
			(le(
				a.relativePath.startsWith(r),
				'Absolute route path "' +
					a.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes.",
			),
			(a.relativePath = a.relativePath.slice(r.length)));
		let u = Ut([r, a.relativePath]),
			d = n.concat(a);
		l.children &&
			l.children.length > 0 &&
			(le(
				l.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".'),
			),
			vf(l.children, t, d, u)),
			!(l.path == null && !l.index) &&
				t.push({ path: u, score: Rm(u, l.index), routesMeta: d });
	};
	return (
		e.forEach((l, o) => {
			var s;
			if (l.path === "" || !((s = l.path) != null && s.includes("?"))) i(l, o);
			else for (let a of yf(l.path)) i(l, o, a);
		}),
		t
	);
}
function yf(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		l = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [l, ""] : [l];
	let o = yf(r.join("/")),
		s = [];
	return (
		s.push(...o.map((a) => (a === "" ? l : [l, a].join("/")))),
		i && s.push(...o),
		s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
	);
}
function Sm(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Om(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex),
				),
	);
}
const Em = /^:[\w-]+$/,
	Cm = 3,
	Nm = 2,
	Tm = 1,
	Pm = 10,
	jm = -2,
	Bu = (e) => e === "*";
function Rm(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Bu) && (r += jm),
		t && (r += Nm),
		n
			.filter((i) => !Bu(i))
			.reduce((i, l) => i + (Em.test(l) ? Cm : l === "" ? Tm : Pm), r)
	);
}
function Om(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function Lm(e, t, n) {
	let { routesMeta: r } = e,
		i = {},
		l = "/",
		o = [];
	for (let s = 0; s < r.length; ++s) {
		let a = r[s],
			u = s === r.length - 1,
			d = l === "/" ? t : t.slice(l.length) || "/",
			c = Zu(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
				d,
			),
			f = a.route;
		if (
			(!c &&
				u &&
				n &&
				!r[r.length - 1].route.index &&
				(c = Zu(
					{ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
					d,
				)),
			!c)
		)
			return null;
		Object.assign(i, c.params),
			o.push({
				params: i,
				pathname: Ut([l, c.pathname]),
				pathnameBase: $m(Ut([l, c.pathnameBase])),
				route: f,
			}),
			c.pathnameBase !== "/" && (l = Ut([l, c.pathnameBase]));
	}
	return o;
}
function Zu(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Im(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let l = i[0],
		o = l.replace(/(.)\/+$/, "$1"),
		s = i.slice(1);
	return {
		params: r.reduce((u, d, c) => {
			let { paramName: f, isOptional: v } = d;
			if (f === "*") {
				let w = s[c] || "";
				o = l.slice(0, l.length - w.length).replace(/(.)\/+$/, "$1");
			}
			const y = s[c];
			return (
				v && !y ? (u[f] = void 0) : (u[f] = (y || "").replace(/%2F/g, "/")), u
			);
		}, {}),
		pathname: l,
		pathnameBase: o,
		pattern: e,
	};
}
function Im(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		mf(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
		);
	let r = [],
		i =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(o, s, a) => (
						r.push({ paramName: s, isOptional: a != null }),
						a ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
				(i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
				? (i += "\\/*$")
				: e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function zm(e) {
	try {
		return e
			.split("/")
			.map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
			.join("/");
	} catch (t) {
		return (
			mf(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ")."),
			),
			e
		);
	}
}
function wa(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function Mm(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof e == "string" ? nr(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : Dm(n, t)) : t,
		search: Um(r),
		hash: Fm(i),
	};
}
function Dm(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function xo(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." +
			t +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." + n + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function Am(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
	);
}
function gf(e, t) {
	let n = Am(e);
	return t
		? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function xf(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = nr(e))
		: ((i = Zr({}, e)),
			le(
				!i.pathname || !i.pathname.includes("?"),
				xo("?", "pathname", "search", i),
			),
			le(
				!i.pathname || !i.pathname.includes("#"),
				xo("#", "pathname", "hash", i),
			),
			le(!i.search || !i.search.includes("#"), xo("#", "search", "hash", i)));
	let l = e === "" || i.pathname === "",
		o = l ? "/" : i.pathname,
		s;
	if (o == null) s = n;
	else {
		let c = t.length - 1;
		if (!r && o.startsWith("..")) {
			let f = o.split("/");
			for (; f[0] === ".."; ) f.shift(), (c -= 1);
			i.pathname = f.join("/");
		}
		s = c >= 0 ? t[c] : "/";
	}
	let a = Mm(i, s),
		u = o && o !== "/" && o.endsWith("/"),
		d = (l || o === ".") && n.endsWith("/");
	return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const Ut = (e) => e.join("/").replace(/\/\/+/g, "/"),
	$m = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Um = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	Fm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Vm(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const wf = ["post", "put", "patch", "delete"];
new Set(wf);
const Bm = ["get", ...wf];
new Set(Bm);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wr() {
	return (
		(Wr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		Wr.apply(this, arguments)
	);
}
const _a = k.createContext(null),
	Zm = k.createContext(null),
	yn = k.createContext(null),
	Vl = k.createContext(null),
	Yt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	_f = k.createContext(null);
function Wm(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	ci() || le(!1);
	let { basename: r, navigator: i } = k.useContext(yn),
		{ hash: l, pathname: o, search: s } = Ef(e, { relative: n }),
		a = o;
	return (
		r !== "/" && (a = o === "/" ? r : Ut([r, o])),
		i.createHref({ pathname: a, search: s, hash: l })
	);
}
function ci() {
	return k.useContext(Vl) != null;
}
function di() {
	return ci() || le(!1), k.useContext(Vl).location;
}
function kf(e) {
	k.useContext(yn).static || k.useLayoutEffect(e);
}
function Sf() {
	let { isDataRoute: e } = k.useContext(Yt);
	return e ? rv() : Hm();
}
function Hm() {
	ci() || le(!1);
	let e = k.useContext(_a),
		{ basename: t, future: n, navigator: r } = k.useContext(yn),
		{ matches: i } = k.useContext(Yt),
		{ pathname: l } = di(),
		o = JSON.stringify(gf(i, n.v7_relativeSplatPath)),
		s = k.useRef(!1);
	return (
		kf(() => {
			s.current = !0;
		}),
		k.useCallback(
			function (u, d) {
				if ((d === void 0 && (d = {}), !s.current)) return;
				if (typeof u == "number") {
					r.go(u);
					return;
				}
				let c = xf(u, JSON.parse(o), l, d.relative === "path");
				e == null &&
					t !== "/" &&
					(c.pathname = c.pathname === "/" ? t : Ut([t, c.pathname])),
					(d.replace ? r.replace : r.push)(c, d.state, d);
			},
			[t, r, o, l, e],
		)
	);
}
function Ng() {
	let { matches: e } = k.useContext(Yt),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function Ef(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = k.useContext(yn),
		{ matches: i } = k.useContext(Yt),
		{ pathname: l } = di(),
		o = JSON.stringify(gf(i, r.v7_relativeSplatPath));
	return k.useMemo(() => xf(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Qm(e, t) {
	return Gm(e, t);
}
function Gm(e, t, n, r) {
	ci() || le(!1);
	let { navigator: i } = k.useContext(yn),
		{ matches: l } = k.useContext(Yt),
		o = l[l.length - 1],
		s = o ? o.params : {};
	o && o.pathname;
	let a = o ? o.pathnameBase : "/";
	o && o.route;
	let u = di(),
		d;
	if (t) {
		var c;
		let C = typeof t == "string" ? nr(t) : t;
		a === "/" || ((c = C.pathname) != null && c.startsWith(a)) || le(!1),
			(d = C);
	} else d = u;
	let f = d.pathname || "/",
		v = f;
	if (a !== "/") {
		let C = a.replace(/^\//, "").split("/");
		v = "/" + f.replace(/^\//, "").split("/").slice(C.length).join("/");
	}
	let y = _m(e, { pathname: v }),
		w = qm(
			y &&
				y.map((C) =>
					Object.assign({}, C, {
						params: Object.assign({}, s, C.params),
						pathname: Ut([
							a,
							i.encodeLocation
								? i.encodeLocation(C.pathname).pathname
								: C.pathname,
						]),
						pathnameBase:
							C.pathnameBase === "/"
								? a
								: Ut([
										a,
										i.encodeLocation
											? i.encodeLocation(C.pathnameBase).pathname
											: C.pathnameBase,
									]),
					}),
				),
			l,
			n,
			r,
		);
	return t && w
		? k.createElement(
				Vl.Provider,
				{
					value: {
						location: Wr(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							d,
						),
						navigationType: Rt.Pop,
					},
				},
				w,
			)
		: w;
}
function Km() {
	let e = nv(),
		t = Vm(e)
			? e.status + " " + e.statusText
			: e instanceof Error
				? e.message
				: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return k.createElement(
		k.Fragment,
		null,
		k.createElement("h2", null, "Unexpected Application Error!"),
		k.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? k.createElement("pre", { style: i }, n) : null,
		null,
	);
}
const Ym = k.createElement(Km, null);
class Xm extends k.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" && t.revalidation === "idle")
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
				};
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n,
		);
	}
	render() {
		return this.state.error !== void 0
			? k.createElement(
					Yt.Provider,
					{ value: this.props.routeContext },
					k.createElement(_f.Provider, {
						value: this.state.error,
						children: this.props.component,
					}),
				)
			: this.props.children;
	}
}
function Jm(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = k.useContext(_a);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		k.createElement(Yt.Provider, { value: t }, r)
	);
}
function qm(e, t, n, r) {
	var i;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var l;
		if (!n) return null;
		if (n.errors) e = n.matches;
		else if (
			(l = r) != null &&
			l.v7_partialHydration &&
			t.length === 0 &&
			!n.initialized &&
			n.matches.length > 0
		)
			e = n.matches;
		else return null;
	}
	let o = e,
		s = (i = n) == null ? void 0 : i.errors;
	if (s != null) {
		let d = o.findIndex(
			(c) => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0,
		);
		d >= 0 || le(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
	}
	let a = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let d = 0; d < o.length; d++) {
			let c = o[d];
			if (
				((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
				c.route.id)
			) {
				let { loaderData: f, errors: v } = n,
					y =
						c.route.loader &&
						f[c.route.id] === void 0 &&
						(!v || v[c.route.id] === void 0);
				if (c.route.lazy || y) {
					(a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
					break;
				}
			}
		}
	return o.reduceRight((d, c, f) => {
		let v,
			y = !1,
			w = null,
			C = null;
		n &&
			((v = s && c.route.id ? s[c.route.id] : void 0),
			(w = c.route.errorElement || Ym),
			a &&
				(u < 0 && f === 0
					? ((y = !0), (C = null))
					: u === f &&
						((y = !0), (C = c.route.hydrateFallbackElement || null))));
		let h = t.concat(o.slice(0, f + 1)),
			p = () => {
				let m;
				return (
					v
						? (m = w)
						: y
							? (m = C)
							: c.route.Component
								? (m = k.createElement(c.route.Component, null))
								: c.route.element
									? (m = c.route.element)
									: (m = d),
					k.createElement(Jm, {
						match: c,
						routeContext: { outlet: d, matches: h, isDataRoute: n != null },
						children: m,
					})
				);
			};
		return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
			? k.createElement(Xm, {
					location: n.location,
					revalidation: n.revalidation,
					component: w,
					error: v,
					children: p(),
					routeContext: { outlet: null, matches: h, isDataRoute: !0 },
				})
			: p();
	}, null);
}
var Cf = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(Cf || {}),
	vl = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseLoaderData = "useLoaderData"),
			(e.UseActionData = "useActionData"),
			(e.UseRouteError = "useRouteError"),
			(e.UseNavigation = "useNavigation"),
			(e.UseRouteLoaderData = "useRouteLoaderData"),
			(e.UseMatches = "useMatches"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			(e.UseRouteId = "useRouteId"),
			e
		);
	})(vl || {});
function bm(e) {
	let t = k.useContext(_a);
	return t || le(!1), t;
}
function ev(e) {
	let t = k.useContext(Zm);
	return t || le(!1), t;
}
function tv(e) {
	let t = k.useContext(Yt);
	return t || le(!1), t;
}
function Nf(e) {
	let t = tv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || le(!1), n.route.id;
}
function nv() {
	var e;
	let t = k.useContext(_f),
		n = ev(vl.UseRouteError),
		r = Nf(vl.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function rv() {
	let { router: e } = bm(Cf.UseNavigateStable),
		t = Nf(vl.UseNavigateStable),
		n = k.useRef(!1);
	return (
		kf(() => {
			n.current = !0;
		}),
		k.useCallback(
			function (i, l) {
				l === void 0 && (l = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, Wr({ fromRouteId: t }, l)));
			},
			[e, t],
		)
	);
}
function _n(e) {
	le(!1);
}
function iv(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = Rt.Pop,
		navigator: l,
		static: o = !1,
		future: s,
	} = e;
	ci() && le(!1);
	let a = t.replace(/^\/*/, "/"),
		u = k.useMemo(
			() => ({
				basename: a,
				navigator: l,
				static: o,
				future: Wr({ v7_relativeSplatPath: !1 }, s),
			}),
			[a, s, l, o],
		);
	typeof r == "string" && (r = nr(r));
	let {
			pathname: d = "/",
			search: c = "",
			hash: f = "",
			state: v = null,
			key: y = "default",
		} = r,
		w = k.useMemo(() => {
			let C = wa(d, a);
			return C == null
				? null
				: {
						location: { pathname: C, search: c, hash: f, state: v, key: y },
						navigationType: i,
					};
		}, [a, d, c, f, v, y, i]);
	return w == null
		? null
		: k.createElement(
				yn.Provider,
				{ value: u },
				k.createElement(Vl.Provider, { children: n, value: w }),
			);
}
function lv(e) {
	let { children: t, location: n } = e;
	return Qm(gs(t), n);
}
new Promise(() => {});
function gs(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		k.Children.forEach(e, (r, i) => {
			if (!k.isValidElement(r)) return;
			let l = [...t, i];
			if (r.type === k.Fragment) {
				n.push.apply(n, gs(r.props.children, l));
				return;
			}
			r.type !== _n && le(!1), !r.props.index || !r.props.children || le(!1);
			let o = {
				id: r.props.id || l.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (o.children = gs(r.props.children, l)), n.push(o);
		}),
		n
	);
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xs() {
	return (
		(xs = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		xs.apply(this, arguments)
	);
}
function ov(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		l;
	for (l = 0; l < r.length; l++)
		(i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function sv(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function av(e, t) {
	return e.button === 0 && (!t || t === "_self") && !sv(e);
}
function ws(e) {
	return (
		e === void 0 && (e = ""),
		new URLSearchParams(
			typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
				? e
				: Object.keys(e).reduce((t, n) => {
						let r = e[n];
						return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
					}, []),
		)
	);
}
function uv(e, t) {
	let n = ws(e);
	return (
		t &&
			t.forEach((r, i) => {
				n.has(i) ||
					t.getAll(i).forEach((l) => {
						n.append(i, l);
					});
			}),
		n
	);
}
const cv = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
		"unstable_viewTransition",
	],
	dv = "6";
try {
	window.__reactRouterVersion = dv;
} catch {}
const fv = "startTransition",
	Wu = op[fv];
function pv(e) {
	let { basename: t, children: n, future: r, window: i } = e,
		l = k.useRef();
	l.current == null && (l.current = gm({ window: i, v5Compat: !0 }));
	let o = l.current,
		[s, a] = k.useState({ action: o.action, location: o.location }),
		{ v7_startTransition: u } = r || {},
		d = k.useCallback(
			(c) => {
				u && Wu ? Wu(() => a(c)) : a(c);
			},
			[a, u],
		);
	return (
		k.useLayoutEffect(() => o.listen(d), [o, d]),
		k.createElement(iv, {
			basename: t,
			children: n,
			location: s.location,
			navigationType: s.action,
			navigator: o,
			future: r,
		})
	);
}
const hv =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	mv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	vv = k.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: l,
				replace: o,
				state: s,
				target: a,
				to: u,
				preventScrollReset: d,
				unstable_viewTransition: c,
			} = t,
			f = ov(t, cv),
			{ basename: v } = k.useContext(yn),
			y,
			w = !1;
		if (typeof u == "string" && mv.test(u) && ((y = u), hv))
			try {
				let m = new URL(window.location.href),
					g = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
					_ = wa(g.pathname, v);
				g.origin === m.origin && _ != null
					? (u = _ + g.search + g.hash)
					: (w = !0);
			} catch {}
		let C = Wm(u, { relative: i }),
			h = yv(u, {
				replace: o,
				state: s,
				target: a,
				preventScrollReset: d,
				relative: i,
				unstable_viewTransition: c,
			});
		function p(m) {
			r && r(m), m.defaultPrevented || h(m);
		}
		return k.createElement(
			"a",
			xs({}, f, { href: y || C, onClick: w || l ? r : p, ref: n, target: a }),
		);
	});
var Hu;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(Hu || (Hu = {}));
var Qu;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(Qu || (Qu = {}));
function yv(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: l,
			relative: o,
			unstable_viewTransition: s,
		} = t === void 0 ? {} : t,
		a = Sf(),
		u = di(),
		d = Ef(e, { relative: o });
	return k.useCallback(
		(c) => {
			if (av(c, n)) {
				c.preventDefault();
				let f = r !== void 0 ? r : ml(u) === ml(d);
				a(e, {
					replace: f,
					state: i,
					preventScrollReset: l,
					relative: o,
					unstable_viewTransition: s,
				});
			}
		},
		[u, a, d, r, i, n, e, l, o, s],
	);
}
function Tg(e) {
	let t = k.useRef(ws(e)),
		n = k.useRef(!1),
		r = di(),
		i = k.useMemo(() => uv(r.search, n.current ? null : t.current), [r.search]),
		l = Sf(),
		o = k.useCallback(
			(s, a) => {
				const u = ws(typeof s == "function" ? s(i) : s);
				(n.current = !0), l("?" + u, a);
			},
			[l, i],
		);
	return [i, o];
}
const gv = k.createContext({}),
	xv = ({ children: e }) => x.jsx(gv.Provider, { value: {}, children: e });
var Z;
(function (e) {
	e.assertEqual = (i) => i;
	function t(i) {}
	e.assertIs = t;
	function n(i) {
		throw new Error();
	}
	(e.assertNever = n),
		(e.arrayToEnum = (i) => {
			const l = {};
			for (const o of i) l[o] = o;
			return l;
		}),
		(e.getValidEnumValues = (i) => {
			const l = e.objectKeys(i).filter((s) => typeof i[i[s]] != "number"),
				o = {};
			for (const s of l) o[s] = i[s];
			return e.objectValues(o);
		}),
		(e.objectValues = (i) =>
			e.objectKeys(i).map(function (l) {
				return i[l];
			})),
		(e.objectKeys =
			typeof Object.keys == "function"
				? (i) => Object.keys(i)
				: (i) => {
						const l = [];
						for (const o in i)
							Object.prototype.hasOwnProperty.call(i, o) && l.push(o);
						return l;
					}),
		(e.find = (i, l) => {
			for (const o of i) if (l(o)) return o;
		}),
		(e.isInteger =
			typeof Number.isInteger == "function"
				? (i) => Number.isInteger(i)
				: (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i);
	function r(i, l = " | ") {
		return i.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(l);
	}
	(e.joinValues = r),
		(e.jsonStringifyReplacer = (i, l) =>
			typeof l == "bigint" ? l.toString() : l);
})(Z || (Z = {}));
var _s;
(function (e) {
	e.mergeShapes = (t, n) => ({ ...t, ...n });
})(_s || (_s = {}));
const R = Z.arrayToEnum([
		"string",
		"nan",
		"number",
		"integer",
		"float",
		"boolean",
		"date",
		"bigint",
		"symbol",
		"function",
		"undefined",
		"null",
		"array",
		"object",
		"unknown",
		"promise",
		"void",
		"never",
		"map",
		"set",
	]),
	Tt = (e) => {
		switch (typeof e) {
			case "undefined":
				return R.undefined;
			case "string":
				return R.string;
			case "number":
				return isNaN(e) ? R.nan : R.number;
			case "boolean":
				return R.boolean;
			case "function":
				return R.function;
			case "bigint":
				return R.bigint;
			case "symbol":
				return R.symbol;
			case "object":
				return Array.isArray(e)
					? R.array
					: e === null
						? R.null
						: e.then &&
							  typeof e.then == "function" &&
							  e.catch &&
							  typeof e.catch == "function"
							? R.promise
							: typeof Map < "u" && e instanceof Map
								? R.map
								: typeof Set < "u" && e instanceof Set
									? R.set
									: typeof Date < "u" && e instanceof Date
										? R.date
										: R.object;
			default:
				return R.unknown;
		}
	},
	E = Z.arrayToEnum([
		"invalid_type",
		"invalid_literal",
		"custom",
		"invalid_union",
		"invalid_union_discriminator",
		"invalid_enum_value",
		"unrecognized_keys",
		"invalid_arguments",
		"invalid_return_type",
		"invalid_date",
		"invalid_string",
		"too_small",
		"too_big",
		"invalid_intersection_types",
		"not_multiple_of",
		"not_finite",
	]),
	wv = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ze extends Error {
	constructor(t) {
		super(),
			(this.issues = []),
			(this.addIssue = (r) => {
				this.issues = [...this.issues, r];
			}),
			(this.addIssues = (r = []) => {
				this.issues = [...this.issues, ...r];
			});
		const n = new.target.prototype;
		Object.setPrototypeOf
			? Object.setPrototypeOf(this, n)
			: (this.__proto__ = n),
			(this.name = "ZodError"),
			(this.issues = t);
	}
	get errors() {
		return this.issues;
	}
	format(t) {
		const n =
				t ||
				function (l) {
					return l.message;
				},
			r = { _errors: [] },
			i = (l) => {
				for (const o of l.issues)
					if (o.code === "invalid_union") o.unionErrors.map(i);
					else if (o.code === "invalid_return_type") i(o.returnTypeError);
					else if (o.code === "invalid_arguments") i(o.argumentsError);
					else if (o.path.length === 0) r._errors.push(n(o));
					else {
						let s = r,
							a = 0;
						for (; a < o.path.length; ) {
							const u = o.path[a];
							a === o.path.length - 1
								? ((s[u] = s[u] || { _errors: [] }), s[u]._errors.push(n(o)))
								: (s[u] = s[u] || { _errors: [] }),
								(s = s[u]),
								a++;
						}
					}
			};
		return i(this), r;
	}
	static assert(t) {
		if (!(t instanceof ze)) throw new Error(`Not a ZodError: ${t}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, Z.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(t = (n) => n.message) {
		const n = {},
			r = [];
		for (const i of this.issues)
			i.path.length > 0
				? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
				: r.push(t(i));
		return { formErrors: r, fieldErrors: n };
	}
	get formErrors() {
		return this.flatten();
	}
}
ze.create = (e) => new ze(e);
const Xn = (e, t) => {
	let n;
	switch (e.code) {
		case E.invalid_type:
			e.received === R.undefined
				? (n = "Required")
				: (n = `Expected ${e.expected}, received ${e.received}`);
			break;
		case E.invalid_literal:
			n = `Invalid literal value, expected ${JSON.stringify(e.expected, Z.jsonStringifyReplacer)}`;
			break;
		case E.unrecognized_keys:
			n = `Unrecognized key(s) in object: ${Z.joinValues(e.keys, ", ")}`;
			break;
		case E.invalid_union:
			n = "Invalid input";
			break;
		case E.invalid_union_discriminator:
			n = `Invalid discriminator value. Expected ${Z.joinValues(e.options)}`;
			break;
		case E.invalid_enum_value:
			n = `Invalid enum value. Expected ${Z.joinValues(e.options)}, received '${e.received}'`;
			break;
		case E.invalid_arguments:
			n = "Invalid function arguments";
			break;
		case E.invalid_return_type:
			n = "Invalid function return type";
			break;
		case E.invalid_date:
			n = "Invalid date";
			break;
		case E.invalid_string:
			typeof e.validation == "object"
				? "includes" in e.validation
					? ((n = `Invalid input: must include "${e.validation.includes}"`),
						typeof e.validation.position == "number" &&
							(n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
					: "startsWith" in e.validation
						? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
						: "endsWith" in e.validation
							? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
							: Z.assertNever(e.validation)
				: e.validation !== "regex"
					? (n = `Invalid ${e.validation}`)
					: (n = "Invalid");
			break;
		case E.too_small:
			e.type === "array"
				? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`)
				: e.type === "string"
					? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`)
					: e.type === "number"
						? (n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
						: e.type === "date"
							? (n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`)
							: (n = "Invalid input");
			break;
		case E.too_big:
			e.type === "array"
				? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`)
				: e.type === "string"
					? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`)
					: e.type === "number"
						? (n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
						: e.type === "bigint"
							? (n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
							: e.type === "date"
								? (n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`)
								: (n = "Invalid input");
			break;
		case E.custom:
			n = "Invalid input";
			break;
		case E.invalid_intersection_types:
			n = "Intersection results could not be merged";
			break;
		case E.not_multiple_of:
			n = `Number must be a multiple of ${e.multipleOf}`;
			break;
		case E.not_finite:
			n = "Number must be finite";
			break;
		default:
			(n = t.defaultError), Z.assertNever(e);
	}
	return { message: n };
};
let Tf = Xn;
function _v(e) {
	Tf = e;
}
function yl() {
	return Tf;
}
const gl = (e) => {
		const { data: t, path: n, errorMaps: r, issueData: i } = e,
			l = [...n, ...(i.path || [])],
			o = { ...i, path: l };
		if (i.message !== void 0) return { ...i, path: l, message: i.message };
		let s = "";
		const a = r
			.filter((u) => !!u)
			.slice()
			.reverse();
		for (const u of a) s = u(o, { data: t, defaultError: s }).message;
		return { ...i, path: l, message: s };
	},
	kv = [];
function j(e, t) {
	const n = yl(),
		r = gl({
			issueData: t,
			data: e.data,
			path: e.path,
			errorMaps: [
				e.common.contextualErrorMap,
				e.schemaErrorMap,
				n,
				n === Xn ? void 0 : Xn,
			].filter((i) => !!i),
		});
	e.common.issues.push(r);
}
class xe {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		this.value === "valid" && (this.value = "dirty");
	}
	abort() {
		this.value !== "aborted" && (this.value = "aborted");
	}
	static mergeArray(t, n) {
		const r = [];
		for (const i of n) {
			if (i.status === "aborted") return M;
			i.status === "dirty" && t.dirty(), r.push(i.value);
		}
		return { status: t.value, value: r };
	}
	static async mergeObjectAsync(t, n) {
		const r = [];
		for (const i of n) {
			const l = await i.key,
				o = await i.value;
			r.push({ key: l, value: o });
		}
		return xe.mergeObjectSync(t, r);
	}
	static mergeObjectSync(t, n) {
		const r = {};
		for (const i of n) {
			const { key: l, value: o } = i;
			if (l.status === "aborted" || o.status === "aborted") return M;
			l.status === "dirty" && t.dirty(),
				o.status === "dirty" && t.dirty(),
				l.value !== "__proto__" &&
					(typeof o.value < "u" || i.alwaysSet) &&
					(r[l.value] = o.value);
		}
		return { status: t.value, value: r };
	}
}
const M = Object.freeze({ status: "aborted" }),
	Mn = (e) => ({ status: "dirty", value: e }),
	Se = (e) => ({ status: "valid", value: e }),
	ks = (e) => e.status === "aborted",
	Ss = (e) => e.status === "dirty",
	Hr = (e) => e.status === "valid",
	Qr = (e) => typeof Promise < "u" && e instanceof Promise;
function xl(e, t, n, r) {
	if (typeof t == "function" ? e !== t || !r : !t.has(e))
		throw new TypeError(
			"Cannot read private member from an object whose class did not declare it",
		);
	return t.get(e);
}
function Pf(e, t, n, r, i) {
	if (typeof t == "function" ? e !== t || !i : !t.has(e))
		throw new TypeError(
			"Cannot write private member to an object whose class did not declare it",
		);
	return t.set(e, n), n;
}
var I;
(function (e) {
	(e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
		(e.toString = (t) =>
			typeof t == "string" ? t : t == null ? void 0 : t.message);
})(I || (I = {}));
var mr, vr;
class st {
	constructor(t, n, r, i) {
		(this._cachedPath = []),
			(this.parent = t),
			(this.data = n),
			(this._path = r),
			(this._key = i);
	}
	get path() {
		return (
			this._cachedPath.length ||
				(this._key instanceof Array
					? this._cachedPath.push(...this._path, ...this._key)
					: this._cachedPath.push(...this._path, this._key)),
			this._cachedPath
		);
	}
}
const Gu = (e, t) => {
	if (Hr(t)) return { success: !0, data: t.value };
	if (!e.common.issues.length)
		throw new Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			const n = new ze(e.common.issues);
			return (this._error = n), this._error;
		},
	};
};
function A(e) {
	if (!e) return {};
	const {
		errorMap: t,
		invalid_type_error: n,
		required_error: r,
		description: i,
	} = e;
	if (t && (n || r))
		throw new Error(
			`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
		);
	return t
		? { errorMap: t, description: i }
		: {
				errorMap: (o, s) => {
					var a, u;
					const { message: d } = e;
					return o.code === "invalid_enum_value"
						? { message: d ?? s.defaultError }
						: typeof s.data > "u"
							? {
									message:
										(a = d ?? r) !== null && a !== void 0 ? a : s.defaultError,
								}
							: o.code !== "invalid_type"
								? { message: s.defaultError }
								: {
										message:
											(u = d ?? n) !== null && u !== void 0
												? u
												: s.defaultError,
									};
				},
				description: i,
			};
}
class U {
	constructor(t) {
		(this.spa = this.safeParseAsync),
			(this._def = t),
			(this.parse = this.parse.bind(this)),
			(this.safeParse = this.safeParse.bind(this)),
			(this.parseAsync = this.parseAsync.bind(this)),
			(this.safeParseAsync = this.safeParseAsync.bind(this)),
			(this.spa = this.spa.bind(this)),
			(this.refine = this.refine.bind(this)),
			(this.refinement = this.refinement.bind(this)),
			(this.superRefine = this.superRefine.bind(this)),
			(this.optional = this.optional.bind(this)),
			(this.nullable = this.nullable.bind(this)),
			(this.nullish = this.nullish.bind(this)),
			(this.array = this.array.bind(this)),
			(this.promise = this.promise.bind(this)),
			(this.or = this.or.bind(this)),
			(this.and = this.and.bind(this)),
			(this.transform = this.transform.bind(this)),
			(this.brand = this.brand.bind(this)),
			(this.default = this.default.bind(this)),
			(this.catch = this.catch.bind(this)),
			(this.describe = this.describe.bind(this)),
			(this.pipe = this.pipe.bind(this)),
			(this.readonly = this.readonly.bind(this)),
			(this.isNullable = this.isNullable.bind(this)),
			(this.isOptional = this.isOptional.bind(this));
	}
	get description() {
		return this._def.description;
	}
	_getType(t) {
		return Tt(t.data);
	}
	_getOrReturnCtx(t, n) {
		return (
			n || {
				common: t.parent.common,
				data: t.data,
				parsedType: Tt(t.data),
				schemaErrorMap: this._def.errorMap,
				path: t.path,
				parent: t.parent,
			}
		);
	}
	_processInputParams(t) {
		return {
			status: new xe(),
			ctx: {
				common: t.parent.common,
				data: t.data,
				parsedType: Tt(t.data),
				schemaErrorMap: this._def.errorMap,
				path: t.path,
				parent: t.parent,
			},
		};
	}
	_parseSync(t) {
		const n = this._parse(t);
		if (Qr(n)) throw new Error("Synchronous parse encountered promise.");
		return n;
	}
	_parseAsync(t) {
		const n = this._parse(t);
		return Promise.resolve(n);
	}
	parse(t, n) {
		const r = this.safeParse(t, n);
		if (r.success) return r.data;
		throw r.error;
	}
	safeParse(t, n) {
		var r;
		const i = {
				common: {
					issues: [],
					async:
						(r = n == null ? void 0 : n.async) !== null && r !== void 0
							? r
							: !1,
					contextualErrorMap: n == null ? void 0 : n.errorMap,
				},
				path: (n == null ? void 0 : n.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: t,
				parsedType: Tt(t),
			},
			l = this._parseSync({ data: t, path: i.path, parent: i });
		return Gu(i, l);
	}
	async parseAsync(t, n) {
		const r = await this.safeParseAsync(t, n);
		if (r.success) return r.data;
		throw r.error;
	}
	async safeParseAsync(t, n) {
		const r = {
				common: {
					issues: [],
					contextualErrorMap: n == null ? void 0 : n.errorMap,
					async: !0,
				},
				path: (n == null ? void 0 : n.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: t,
				parsedType: Tt(t),
			},
			i = this._parse({ data: t, path: r.path, parent: r }),
			l = await (Qr(i) ? i : Promise.resolve(i));
		return Gu(r, l);
	}
	refine(t, n) {
		const r = (i) =>
			typeof n == "string" || typeof n > "u"
				? { message: n }
				: typeof n == "function"
					? n(i)
					: n;
		return this._refinement((i, l) => {
			const o = t(i),
				s = () => l.addIssue({ code: E.custom, ...r(i) });
			return typeof Promise < "u" && o instanceof Promise
				? o.then((a) => (a ? !0 : (s(), !1)))
				: o
					? !0
					: (s(), !1);
		});
	}
	refinement(t, n) {
		return this._refinement((r, i) =>
			t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1),
		);
	}
	_refinement(t) {
		return new et({
			schema: this,
			typeName: z.ZodEffects,
			effect: { type: "refinement", refinement: t },
		});
	}
	superRefine(t) {
		return this._refinement(t);
	}
	optional() {
		return ot.create(this, this._def);
	}
	nullable() {
		return Ht.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return qe.create(this, this._def);
	}
	promise() {
		return qn.create(this, this._def);
	}
	or(t) {
		return Xr.create([this, t], this._def);
	}
	and(t) {
		return Jr.create(this, t, this._def);
	}
	transform(t) {
		return new et({
			...A(this._def),
			schema: this,
			typeName: z.ZodEffects,
			effect: { type: "transform", transform: t },
		});
	}
	default(t) {
		const n = typeof t == "function" ? t : () => t;
		return new ni({
			...A(this._def),
			innerType: this,
			defaultValue: n,
			typeName: z.ZodDefault,
		});
	}
	brand() {
		return new ka({ typeName: z.ZodBranded, type: this, ...A(this._def) });
	}
	catch(t) {
		const n = typeof t == "function" ? t : () => t;
		return new ri({
			...A(this._def),
			innerType: this,
			catchValue: n,
			typeName: z.ZodCatch,
		});
	}
	describe(t) {
		const n = this.constructor;
		return new n({ ...this._def, description: t });
	}
	pipe(t) {
		return fi.create(this, t);
	}
	readonly() {
		return ii.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}
const Sv = /^c[^\s-]{8,}$/i,
	Ev = /^[0-9a-z]+$/,
	Cv = /^[0-9A-HJKMNP-TV-Z]{26}$/,
	Nv =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
	Tv = /^[a-z0-9_-]{21}$/i,
	Pv =
		/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
	jv =
		/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
	Rv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let wo;
const Ov =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	Lv =
		/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	Iv = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	jf =
		"((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
	zv = new RegExp(`^${jf}$`);
function Rf(e) {
	let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
	return (
		e.precision
			? (t = `${t}\\.\\d{${e.precision}}`)
			: e.precision == null && (t = `${t}(\\.\\d+)?`),
		t
	);
}
function Mv(e) {
	return new RegExp(`^${Rf(e)}$`);
}
function Of(e) {
	let t = `${jf}T${Rf(e)}`;
	const n = [];
	return (
		n.push(e.local ? "Z?" : "Z"),
		e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
		(t = `${t}(${n.join("|")})`),
		new RegExp(`^${t}$`)
	);
}
function Dv(e, t) {
	return !!(
		((t === "v4" || !t) && Ov.test(e)) ||
		((t === "v6" || !t) && Lv.test(e))
	);
}
class Ye extends U {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = String(t.data)),
			this._getType(t) !== R.string)
		) {
			const l = this._getOrReturnCtx(t);
			return (
				j(l, {
					code: E.invalid_type,
					expected: R.string,
					received: l.parsedType,
				}),
				M
			);
		}
		const r = new xe();
		let i;
		for (const l of this._def.checks)
			if (l.kind === "min")
				t.data.length < l.value &&
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						code: E.too_small,
						minimum: l.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "max")
				t.data.length > l.value &&
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						code: E.too_big,
						maximum: l.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "length") {
				const o = t.data.length > l.value,
					s = t.data.length < l.value;
				(o || s) &&
					((i = this._getOrReturnCtx(t, i)),
					o
						? j(i, {
								code: E.too_big,
								maximum: l.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: l.message,
							})
						: s &&
							j(i, {
								code: E.too_small,
								minimum: l.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: l.message,
							}),
					r.dirty());
			} else if (l.kind === "email")
				jv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						validation: "email",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "emoji")
				wo || (wo = new RegExp(Rv, "u")),
					wo.test(t.data) ||
						((i = this._getOrReturnCtx(t, i)),
						j(i, {
							validation: "emoji",
							code: E.invalid_string,
							message: l.message,
						}),
						r.dirty());
			else if (l.kind === "uuid")
				Nv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						validation: "uuid",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "nanoid")
				Tv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						validation: "nanoid",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "cuid")
				Sv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						validation: "cuid",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "cuid2")
				Ev.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						validation: "cuid2",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "ulid")
				Cv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						validation: "ulid",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "url")
				try {
					new URL(t.data);
				} catch {
					(i = this._getOrReturnCtx(t, i)),
						j(i, {
							validation: "url",
							code: E.invalid_string,
							message: l.message,
						}),
						r.dirty();
				}
			else
				l.kind === "regex"
					? ((l.regex.lastIndex = 0),
						l.regex.test(t.data) ||
							((i = this._getOrReturnCtx(t, i)),
							j(i, {
								validation: "regex",
								code: E.invalid_string,
								message: l.message,
							}),
							r.dirty()))
					: l.kind === "trim"
						? (t.data = t.data.trim())
						: l.kind === "includes"
							? t.data.includes(l.value, l.position) ||
								((i = this._getOrReturnCtx(t, i)),
								j(i, {
									code: E.invalid_string,
									validation: { includes: l.value, position: l.position },
									message: l.message,
								}),
								r.dirty())
							: l.kind === "toLowerCase"
								? (t.data = t.data.toLowerCase())
								: l.kind === "toUpperCase"
									? (t.data = t.data.toUpperCase())
									: l.kind === "startsWith"
										? t.data.startsWith(l.value) ||
											((i = this._getOrReturnCtx(t, i)),
											j(i, {
												code: E.invalid_string,
												validation: { startsWith: l.value },
												message: l.message,
											}),
											r.dirty())
										: l.kind === "endsWith"
											? t.data.endsWith(l.value) ||
												((i = this._getOrReturnCtx(t, i)),
												j(i, {
													code: E.invalid_string,
													validation: { endsWith: l.value },
													message: l.message,
												}),
												r.dirty())
											: l.kind === "datetime"
												? Of(l).test(t.data) ||
													((i = this._getOrReturnCtx(t, i)),
													j(i, {
														code: E.invalid_string,
														validation: "datetime",
														message: l.message,
													}),
													r.dirty())
												: l.kind === "date"
													? zv.test(t.data) ||
														((i = this._getOrReturnCtx(t, i)),
														j(i, {
															code: E.invalid_string,
															validation: "date",
															message: l.message,
														}),
														r.dirty())
													: l.kind === "time"
														? Mv(l).test(t.data) ||
															((i = this._getOrReturnCtx(t, i)),
															j(i, {
																code: E.invalid_string,
																validation: "time",
																message: l.message,
															}),
															r.dirty())
														: l.kind === "duration"
															? Pv.test(t.data) ||
																((i = this._getOrReturnCtx(t, i)),
																j(i, {
																	validation: "duration",
																	code: E.invalid_string,
																	message: l.message,
																}),
																r.dirty())
															: l.kind === "ip"
																? Dv(t.data, l.version) ||
																	((i = this._getOrReturnCtx(t, i)),
																	j(i, {
																		validation: "ip",
																		code: E.invalid_string,
																		message: l.message,
																	}),
																	r.dirty())
																: l.kind === "base64"
																	? Iv.test(t.data) ||
																		((i = this._getOrReturnCtx(t, i)),
																		j(i, {
																			validation: "base64",
																			code: E.invalid_string,
																			message: l.message,
																		}),
																		r.dirty())
																	: Z.assertNever(l);
		return { status: r.value, value: t.data };
	}
	_regex(t, n, r) {
		return this.refinement((i) => t.test(i), {
			validation: n,
			code: E.invalid_string,
			...I.errToObj(r),
		});
	}
	_addCheck(t) {
		return new Ye({ ...this._def, checks: [...this._def.checks, t] });
	}
	email(t) {
		return this._addCheck({ kind: "email", ...I.errToObj(t) });
	}
	url(t) {
		return this._addCheck({ kind: "url", ...I.errToObj(t) });
	}
	emoji(t) {
		return this._addCheck({ kind: "emoji", ...I.errToObj(t) });
	}
	uuid(t) {
		return this._addCheck({ kind: "uuid", ...I.errToObj(t) });
	}
	nanoid(t) {
		return this._addCheck({ kind: "nanoid", ...I.errToObj(t) });
	}
	cuid(t) {
		return this._addCheck({ kind: "cuid", ...I.errToObj(t) });
	}
	cuid2(t) {
		return this._addCheck({ kind: "cuid2", ...I.errToObj(t) });
	}
	ulid(t) {
		return this._addCheck({ kind: "ulid", ...I.errToObj(t) });
	}
	base64(t) {
		return this._addCheck({ kind: "base64", ...I.errToObj(t) });
	}
	ip(t) {
		return this._addCheck({ kind: "ip", ...I.errToObj(t) });
	}
	datetime(t) {
		var n, r;
		return typeof t == "string"
			? this._addCheck({
					kind: "datetime",
					precision: null,
					offset: !1,
					local: !1,
					message: t,
				})
			: this._addCheck({
					kind: "datetime",
					precision:
						typeof (t == null ? void 0 : t.precision) > "u"
							? null
							: t == null
								? void 0
								: t.precision,
					offset:
						(n = t == null ? void 0 : t.offset) !== null && n !== void 0
							? n
							: !1,
					local:
						(r = t == null ? void 0 : t.local) !== null && r !== void 0
							? r
							: !1,
					...I.errToObj(t == null ? void 0 : t.message),
				});
	}
	date(t) {
		return this._addCheck({ kind: "date", message: t });
	}
	time(t) {
		return typeof t == "string"
			? this._addCheck({ kind: "time", precision: null, message: t })
			: this._addCheck({
					kind: "time",
					precision:
						typeof (t == null ? void 0 : t.precision) > "u"
							? null
							: t == null
								? void 0
								: t.precision,
					...I.errToObj(t == null ? void 0 : t.message),
				});
	}
	duration(t) {
		return this._addCheck({ kind: "duration", ...I.errToObj(t) });
	}
	regex(t, n) {
		return this._addCheck({ kind: "regex", regex: t, ...I.errToObj(n) });
	}
	includes(t, n) {
		return this._addCheck({
			kind: "includes",
			value: t,
			position: n == null ? void 0 : n.position,
			...I.errToObj(n == null ? void 0 : n.message),
		});
	}
	startsWith(t, n) {
		return this._addCheck({ kind: "startsWith", value: t, ...I.errToObj(n) });
	}
	endsWith(t, n) {
		return this._addCheck({ kind: "endsWith", value: t, ...I.errToObj(n) });
	}
	min(t, n) {
		return this._addCheck({ kind: "min", value: t, ...I.errToObj(n) });
	}
	max(t, n) {
		return this._addCheck({ kind: "max", value: t, ...I.errToObj(n) });
	}
	length(t, n) {
		return this._addCheck({ kind: "length", value: t, ...I.errToObj(n) });
	}
	nonempty(t) {
		return this.min(1, I.errToObj(t));
	}
	trim() {
		return new Ye({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }],
		});
	}
	toLowerCase() {
		return new Ye({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }],
		});
	}
	toUpperCase() {
		return new Ye({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }],
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((t) => t.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((t) => t.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((t) => t.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((t) => t.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((t) => t.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((t) => t.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((t) => t.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((t) => t.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((t) => t.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((t) => t.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((t) => t.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((t) => t.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((t) => t.kind === "ip");
	}
	get isBase64() {
		return !!this._def.checks.find((t) => t.kind === "base64");
	}
	get minLength() {
		let t = null;
		for (const n of this._def.checks)
			n.kind === "min" && (t === null || n.value > t) && (t = n.value);
		return t;
	}
	get maxLength() {
		let t = null;
		for (const n of this._def.checks)
			n.kind === "max" && (t === null || n.value < t) && (t = n.value);
		return t;
	}
}
Ye.create = (e) => {
	var t;
	return new Ye({
		checks: [],
		typeName: z.ZodString,
		coerce:
			(t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
		...A(e),
	});
};
function Av(e, t) {
	const n = (e.toString().split(".")[1] || "").length,
		r = (t.toString().split(".")[1] || "").length,
		i = n > r ? n : r,
		l = parseInt(e.toFixed(i).replace(".", "")),
		o = parseInt(t.toFixed(i).replace(".", ""));
	return (l % o) / Math.pow(10, i);
}
class Bt extends U {
	constructor() {
		super(...arguments),
			(this.min = this.gte),
			(this.max = this.lte),
			(this.step = this.multipleOf);
	}
	_parse(t) {
		if (
			(this._def.coerce && (t.data = Number(t.data)),
			this._getType(t) !== R.number)
		) {
			const l = this._getOrReturnCtx(t);
			return (
				j(l, {
					code: E.invalid_type,
					expected: R.number,
					received: l.parsedType,
				}),
				M
			);
		}
		let r;
		const i = new xe();
		for (const l of this._def.checks)
			l.kind === "int"
				? Z.isInteger(t.data) ||
					((r = this._getOrReturnCtx(t, r)),
					j(r, {
						code: E.invalid_type,
						expected: "integer",
						received: "float",
						message: l.message,
					}),
					i.dirty())
				: l.kind === "min"
					? (l.inclusive ? t.data < l.value : t.data <= l.value) &&
						((r = this._getOrReturnCtx(t, r)),
						j(r, {
							code: E.too_small,
							minimum: l.value,
							type: "number",
							inclusive: l.inclusive,
							exact: !1,
							message: l.message,
						}),
						i.dirty())
					: l.kind === "max"
						? (l.inclusive ? t.data > l.value : t.data >= l.value) &&
							((r = this._getOrReturnCtx(t, r)),
							j(r, {
								code: E.too_big,
								maximum: l.value,
								type: "number",
								inclusive: l.inclusive,
								exact: !1,
								message: l.message,
							}),
							i.dirty())
						: l.kind === "multipleOf"
							? Av(t.data, l.value) !== 0 &&
								((r = this._getOrReturnCtx(t, r)),
								j(r, {
									code: E.not_multiple_of,
									multipleOf: l.value,
									message: l.message,
								}),
								i.dirty())
							: l.kind === "finite"
								? Number.isFinite(t.data) ||
									((r = this._getOrReturnCtx(t, r)),
									j(r, { code: E.not_finite, message: l.message }),
									i.dirty())
								: Z.assertNever(l);
		return { status: i.value, value: t.data };
	}
	gte(t, n) {
		return this.setLimit("min", t, !0, I.toString(n));
	}
	gt(t, n) {
		return this.setLimit("min", t, !1, I.toString(n));
	}
	lte(t, n) {
		return this.setLimit("max", t, !0, I.toString(n));
	}
	lt(t, n) {
		return this.setLimit("max", t, !1, I.toString(n));
	}
	setLimit(t, n, r, i) {
		return new Bt({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: t, value: n, inclusive: r, message: I.toString(i) },
			],
		});
	}
	_addCheck(t) {
		return new Bt({ ...this._def, checks: [...this._def.checks, t] });
	}
	int(t) {
		return this._addCheck({ kind: "int", message: I.toString(t) });
	}
	positive(t) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !1,
			message: I.toString(t),
		});
	}
	negative(t) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !1,
			message: I.toString(t),
		});
	}
	nonpositive(t) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !0,
			message: I.toString(t),
		});
	}
	nonnegative(t) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !0,
			message: I.toString(t),
		});
	}
	multipleOf(t, n) {
		return this._addCheck({
			kind: "multipleOf",
			value: t,
			message: I.toString(n),
		});
	}
	finite(t) {
		return this._addCheck({ kind: "finite", message: I.toString(t) });
	}
	safe(t) {
		return this._addCheck({
			kind: "min",
			inclusive: !0,
			value: Number.MIN_SAFE_INTEGER,
			message: I.toString(t),
		})._addCheck({
			kind: "max",
			inclusive: !0,
			value: Number.MAX_SAFE_INTEGER,
			message: I.toString(t),
		});
	}
	get minValue() {
		let t = null;
		for (const n of this._def.checks)
			n.kind === "min" && (t === null || n.value > t) && (t = n.value);
		return t;
	}
	get maxValue() {
		let t = null;
		for (const n of this._def.checks)
			n.kind === "max" && (t === null || n.value < t) && (t = n.value);
		return t;
	}
	get isInt() {
		return !!this._def.checks.find(
			(t) =>
				t.kind === "int" || (t.kind === "multipleOf" && Z.isInteger(t.value)),
		);
	}
	get isFinite() {
		let t = null,
			n = null;
		for (const r of this._def.checks) {
			if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
				return !0;
			r.kind === "min"
				? (n === null || r.value > n) && (n = r.value)
				: r.kind === "max" && (t === null || r.value < t) && (t = r.value);
		}
		return Number.isFinite(n) && Number.isFinite(t);
	}
}
Bt.create = (e) =>
	new Bt({
		checks: [],
		typeName: z.ZodNumber,
		coerce: (e == null ? void 0 : e.coerce) || !1,
		...A(e),
	});
class Zt extends U {
	constructor() {
		super(...arguments), (this.min = this.gte), (this.max = this.lte);
	}
	_parse(t) {
		if (
			(this._def.coerce && (t.data = BigInt(t.data)),
			this._getType(t) !== R.bigint)
		) {
			const l = this._getOrReturnCtx(t);
			return (
				j(l, {
					code: E.invalid_type,
					expected: R.bigint,
					received: l.parsedType,
				}),
				M
			);
		}
		let r;
		const i = new xe();
		for (const l of this._def.checks)
			l.kind === "min"
				? (l.inclusive ? t.data < l.value : t.data <= l.value) &&
					((r = this._getOrReturnCtx(t, r)),
					j(r, {
						code: E.too_small,
						type: "bigint",
						minimum: l.value,
						inclusive: l.inclusive,
						message: l.message,
					}),
					i.dirty())
				: l.kind === "max"
					? (l.inclusive ? t.data > l.value : t.data >= l.value) &&
						((r = this._getOrReturnCtx(t, r)),
						j(r, {
							code: E.too_big,
							type: "bigint",
							maximum: l.value,
							inclusive: l.inclusive,
							message: l.message,
						}),
						i.dirty())
					: l.kind === "multipleOf"
						? t.data % l.value !== BigInt(0) &&
							((r = this._getOrReturnCtx(t, r)),
							j(r, {
								code: E.not_multiple_of,
								multipleOf: l.value,
								message: l.message,
							}),
							i.dirty())
						: Z.assertNever(l);
		return { status: i.value, value: t.data };
	}
	gte(t, n) {
		return this.setLimit("min", t, !0, I.toString(n));
	}
	gt(t, n) {
		return this.setLimit("min", t, !1, I.toString(n));
	}
	lte(t, n) {
		return this.setLimit("max", t, !0, I.toString(n));
	}
	lt(t, n) {
		return this.setLimit("max", t, !1, I.toString(n));
	}
	setLimit(t, n, r, i) {
		return new Zt({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: t, value: n, inclusive: r, message: I.toString(i) },
			],
		});
	}
	_addCheck(t) {
		return new Zt({ ...this._def, checks: [...this._def.checks, t] });
	}
	positive(t) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !1,
			message: I.toString(t),
		});
	}
	negative(t) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !1,
			message: I.toString(t),
		});
	}
	nonpositive(t) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !0,
			message: I.toString(t),
		});
	}
	nonnegative(t) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !0,
			message: I.toString(t),
		});
	}
	multipleOf(t, n) {
		return this._addCheck({
			kind: "multipleOf",
			value: t,
			message: I.toString(n),
		});
	}
	get minValue() {
		let t = null;
		for (const n of this._def.checks)
			n.kind === "min" && (t === null || n.value > t) && (t = n.value);
		return t;
	}
	get maxValue() {
		let t = null;
		for (const n of this._def.checks)
			n.kind === "max" && (t === null || n.value < t) && (t = n.value);
		return t;
	}
}
Zt.create = (e) => {
	var t;
	return new Zt({
		checks: [],
		typeName: z.ZodBigInt,
		coerce:
			(t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
		...A(e),
	});
};
class Gr extends U {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = !!t.data), this._getType(t) !== R.boolean)
		) {
			const r = this._getOrReturnCtx(t);
			return (
				j(r, {
					code: E.invalid_type,
					expected: R.boolean,
					received: r.parsedType,
				}),
				M
			);
		}
		return Se(t.data);
	}
}
Gr.create = (e) =>
	new Gr({
		typeName: z.ZodBoolean,
		coerce: (e == null ? void 0 : e.coerce) || !1,
		...A(e),
	});
class fn extends U {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = new Date(t.data)),
			this._getType(t) !== R.date)
		) {
			const l = this._getOrReturnCtx(t);
			return (
				j(l, {
					code: E.invalid_type,
					expected: R.date,
					received: l.parsedType,
				}),
				M
			);
		}
		if (isNaN(t.data.getTime())) {
			const l = this._getOrReturnCtx(t);
			return j(l, { code: E.invalid_date }), M;
		}
		const r = new xe();
		let i;
		for (const l of this._def.checks)
			l.kind === "min"
				? t.data.getTime() < l.value &&
					((i = this._getOrReturnCtx(t, i)),
					j(i, {
						code: E.too_small,
						message: l.message,
						inclusive: !0,
						exact: !1,
						minimum: l.value,
						type: "date",
					}),
					r.dirty())
				: l.kind === "max"
					? t.data.getTime() > l.value &&
						((i = this._getOrReturnCtx(t, i)),
						j(i, {
							code: E.too_big,
							message: l.message,
							inclusive: !0,
							exact: !1,
							maximum: l.value,
							type: "date",
						}),
						r.dirty())
					: Z.assertNever(l);
		return { status: r.value, value: new Date(t.data.getTime()) };
	}
	_addCheck(t) {
		return new fn({ ...this._def, checks: [...this._def.checks, t] });
	}
	min(t, n) {
		return this._addCheck({
			kind: "min",
			value: t.getTime(),
			message: I.toString(n),
		});
	}
	max(t, n) {
		return this._addCheck({
			kind: "max",
			value: t.getTime(),
			message: I.toString(n),
		});
	}
	get minDate() {
		let t = null;
		for (const n of this._def.checks)
			n.kind === "min" && (t === null || n.value > t) && (t = n.value);
		return t != null ? new Date(t) : null;
	}
	get maxDate() {
		let t = null;
		for (const n of this._def.checks)
			n.kind === "max" && (t === null || n.value < t) && (t = n.value);
		return t != null ? new Date(t) : null;
	}
}
fn.create = (e) =>
	new fn({
		checks: [],
		coerce: (e == null ? void 0 : e.coerce) || !1,
		typeName: z.ZodDate,
		...A(e),
	});
class wl extends U {
	_parse(t) {
		if (this._getType(t) !== R.symbol) {
			const r = this._getOrReturnCtx(t);
			return (
				j(r, {
					code: E.invalid_type,
					expected: R.symbol,
					received: r.parsedType,
				}),
				M
			);
		}
		return Se(t.data);
	}
}
wl.create = (e) => new wl({ typeName: z.ZodSymbol, ...A(e) });
class Kr extends U {
	_parse(t) {
		if (this._getType(t) !== R.undefined) {
			const r = this._getOrReturnCtx(t);
			return (
				j(r, {
					code: E.invalid_type,
					expected: R.undefined,
					received: r.parsedType,
				}),
				M
			);
		}
		return Se(t.data);
	}
}
Kr.create = (e) => new Kr({ typeName: z.ZodUndefined, ...A(e) });
class Yr extends U {
	_parse(t) {
		if (this._getType(t) !== R.null) {
			const r = this._getOrReturnCtx(t);
			return (
				j(r, {
					code: E.invalid_type,
					expected: R.null,
					received: r.parsedType,
				}),
				M
			);
		}
		return Se(t.data);
	}
}
Yr.create = (e) => new Yr({ typeName: z.ZodNull, ...A(e) });
class Jn extends U {
	constructor() {
		super(...arguments), (this._any = !0);
	}
	_parse(t) {
		return Se(t.data);
	}
}
Jn.create = (e) => new Jn({ typeName: z.ZodAny, ...A(e) });
class on extends U {
	constructor() {
		super(...arguments), (this._unknown = !0);
	}
	_parse(t) {
		return Se(t.data);
	}
}
on.create = (e) => new on({ typeName: z.ZodUnknown, ...A(e) });
class wt extends U {
	_parse(t) {
		const n = this._getOrReturnCtx(t);
		return (
			j(n, { code: E.invalid_type, expected: R.never, received: n.parsedType }),
			M
		);
	}
}
wt.create = (e) => new wt({ typeName: z.ZodNever, ...A(e) });
class _l extends U {
	_parse(t) {
		if (this._getType(t) !== R.undefined) {
			const r = this._getOrReturnCtx(t);
			return (
				j(r, {
					code: E.invalid_type,
					expected: R.void,
					received: r.parsedType,
				}),
				M
			);
		}
		return Se(t.data);
	}
}
_l.create = (e) => new _l({ typeName: z.ZodVoid, ...A(e) });
class qe extends U {
	_parse(t) {
		const { ctx: n, status: r } = this._processInputParams(t),
			i = this._def;
		if (n.parsedType !== R.array)
			return (
				j(n, {
					code: E.invalid_type,
					expected: R.array,
					received: n.parsedType,
				}),
				M
			);
		if (i.exactLength !== null) {
			const o = n.data.length > i.exactLength.value,
				s = n.data.length < i.exactLength.value;
			(o || s) &&
				(j(n, {
					code: o ? E.too_big : E.too_small,
					minimum: s ? i.exactLength.value : void 0,
					maximum: o ? i.exactLength.value : void 0,
					type: "array",
					inclusive: !0,
					exact: !0,
					message: i.exactLength.message,
				}),
				r.dirty());
		}
		if (
			(i.minLength !== null &&
				n.data.length < i.minLength.value &&
				(j(n, {
					code: E.too_small,
					minimum: i.minLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: i.minLength.message,
				}),
				r.dirty()),
			i.maxLength !== null &&
				n.data.length > i.maxLength.value &&
				(j(n, {
					code: E.too_big,
					maximum: i.maxLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: i.maxLength.message,
				}),
				r.dirty()),
			n.common.async)
		)
			return Promise.all(
				[...n.data].map((o, s) => i.type._parseAsync(new st(n, o, n.path, s))),
			).then((o) => xe.mergeArray(r, o));
		const l = [...n.data].map((o, s) =>
			i.type._parseSync(new st(n, o, n.path, s)),
		);
		return xe.mergeArray(r, l);
	}
	get element() {
		return this._def.type;
	}
	min(t, n) {
		return new qe({
			...this._def,
			minLength: { value: t, message: I.toString(n) },
		});
	}
	max(t, n) {
		return new qe({
			...this._def,
			maxLength: { value: t, message: I.toString(n) },
		});
	}
	length(t, n) {
		return new qe({
			...this._def,
			exactLength: { value: t, message: I.toString(n) },
		});
	}
	nonempty(t) {
		return this.min(1, t);
	}
}
qe.create = (e, t) =>
	new qe({
		type: e,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: z.ZodArray,
		...A(t),
	});
function kn(e) {
	if (e instanceof J) {
		const t = {};
		for (const n in e.shape) {
			const r = e.shape[n];
			t[n] = ot.create(kn(r));
		}
		return new J({ ...e._def, shape: () => t });
	} else
		return e instanceof qe
			? new qe({ ...e._def, type: kn(e.element) })
			: e instanceof ot
				? ot.create(kn(e.unwrap()))
				: e instanceof Ht
					? Ht.create(kn(e.unwrap()))
					: e instanceof at
						? at.create(e.items.map((t) => kn(t)))
						: e;
}
class J extends U {
	constructor() {
		super(...arguments),
			(this._cached = null),
			(this.nonstrict = this.passthrough),
			(this.augment = this.extend);
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const t = this._def.shape(),
			n = Z.objectKeys(t);
		return (this._cached = { shape: t, keys: n });
	}
	_parse(t) {
		if (this._getType(t) !== R.object) {
			const u = this._getOrReturnCtx(t);
			return (
				j(u, {
					code: E.invalid_type,
					expected: R.object,
					received: u.parsedType,
				}),
				M
			);
		}
		const { status: r, ctx: i } = this._processInputParams(t),
			{ shape: l, keys: o } = this._getCached(),
			s = [];
		if (
			!(this._def.catchall instanceof wt && this._def.unknownKeys === "strip")
		)
			for (const u in i.data) o.includes(u) || s.push(u);
		const a = [];
		for (const u of o) {
			const d = l[u],
				c = i.data[u];
			a.push({
				key: { status: "valid", value: u },
				value: d._parse(new st(i, c, i.path, u)),
				alwaysSet: u in i.data,
			});
		}
		if (this._def.catchall instanceof wt) {
			const u = this._def.unknownKeys;
			if (u === "passthrough")
				for (const d of s)
					a.push({
						key: { status: "valid", value: d },
						value: { status: "valid", value: i.data[d] },
					});
			else if (u === "strict")
				s.length > 0 &&
					(j(i, { code: E.unrecognized_keys, keys: s }), r.dirty());
			else if (u !== "strip")
				throw new Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			const u = this._def.catchall;
			for (const d of s) {
				const c = i.data[d];
				a.push({
					key: { status: "valid", value: d },
					value: u._parse(new st(i, c, i.path, d)),
					alwaysSet: d in i.data,
				});
			}
		}
		return i.common.async
			? Promise.resolve()
					.then(async () => {
						const u = [];
						for (const d of a) {
							const c = await d.key,
								f = await d.value;
							u.push({ key: c, value: f, alwaysSet: d.alwaysSet });
						}
						return u;
					})
					.then((u) => xe.mergeObjectSync(r, u))
			: xe.mergeObjectSync(r, a);
	}
	get shape() {
		return this._def.shape();
	}
	strict(t) {
		return (
			I.errToObj,
			new J({
				...this._def,
				unknownKeys: "strict",
				...(t !== void 0
					? {
							errorMap: (n, r) => {
								var i, l, o, s;
								const a =
									(o =
										(l = (i = this._def).errorMap) === null || l === void 0
											? void 0
											: l.call(i, n, r).message) !== null && o !== void 0
										? o
										: r.defaultError;
								return n.code === "unrecognized_keys"
									? {
											message:
												(s = I.errToObj(t).message) !== null && s !== void 0
													? s
													: a,
										}
									: { message: a };
							},
						}
					: {}),
			})
		);
	}
	strip() {
		return new J({ ...this._def, unknownKeys: "strip" });
	}
	passthrough() {
		return new J({ ...this._def, unknownKeys: "passthrough" });
	}
	extend(t) {
		return new J({
			...this._def,
			shape: () => ({ ...this._def.shape(), ...t }),
		});
	}
	merge(t) {
		return new J({
			unknownKeys: t._def.unknownKeys,
			catchall: t._def.catchall,
			shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
			typeName: z.ZodObject,
		});
	}
	setKey(t, n) {
		return this.augment({ [t]: n });
	}
	catchall(t) {
		return new J({ ...this._def, catchall: t });
	}
	pick(t) {
		const n = {};
		return (
			Z.objectKeys(t).forEach((r) => {
				t[r] && this.shape[r] && (n[r] = this.shape[r]);
			}),
			new J({ ...this._def, shape: () => n })
		);
	}
	omit(t) {
		const n = {};
		return (
			Z.objectKeys(this.shape).forEach((r) => {
				t[r] || (n[r] = this.shape[r]);
			}),
			new J({ ...this._def, shape: () => n })
		);
	}
	deepPartial() {
		return kn(this);
	}
	partial(t) {
		const n = {};
		return (
			Z.objectKeys(this.shape).forEach((r) => {
				const i = this.shape[r];
				t && !t[r] ? (n[r] = i) : (n[r] = i.optional());
			}),
			new J({ ...this._def, shape: () => n })
		);
	}
	required(t) {
		const n = {};
		return (
			Z.objectKeys(this.shape).forEach((r) => {
				if (t && !t[r]) n[r] = this.shape[r];
				else {
					let l = this.shape[r];
					for (; l instanceof ot; ) l = l._def.innerType;
					n[r] = l;
				}
			}),
			new J({ ...this._def, shape: () => n })
		);
	}
	keyof() {
		return Lf(Z.objectKeys(this.shape));
	}
}
J.create = (e, t) =>
	new J({
		shape: () => e,
		unknownKeys: "strip",
		catchall: wt.create(),
		typeName: z.ZodObject,
		...A(t),
	});
J.strictCreate = (e, t) =>
	new J({
		shape: () => e,
		unknownKeys: "strict",
		catchall: wt.create(),
		typeName: z.ZodObject,
		...A(t),
	});
J.lazycreate = (e, t) =>
	new J({
		shape: e,
		unknownKeys: "strip",
		catchall: wt.create(),
		typeName: z.ZodObject,
		...A(t),
	});
class Xr extends U {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t),
			r = this._def.options;
		function i(l) {
			for (const s of l) if (s.result.status === "valid") return s.result;
			for (const s of l)
				if (s.result.status === "dirty")
					return n.common.issues.push(...s.ctx.common.issues), s.result;
			const o = l.map((s) => new ze(s.ctx.common.issues));
			return j(n, { code: E.invalid_union, unionErrors: o }), M;
		}
		if (n.common.async)
			return Promise.all(
				r.map(async (l) => {
					const o = { ...n, common: { ...n.common, issues: [] }, parent: null };
					return {
						result: await l._parseAsync({
							data: n.data,
							path: n.path,
							parent: o,
						}),
						ctx: o,
					};
				}),
			).then(i);
		{
			let l;
			const o = [];
			for (const a of r) {
				const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
					d = a._parseSync({ data: n.data, path: n.path, parent: u });
				if (d.status === "valid") return d;
				d.status === "dirty" && !l && (l = { result: d, ctx: u }),
					u.common.issues.length && o.push(u.common.issues);
			}
			if (l) return n.common.issues.push(...l.ctx.common.issues), l.result;
			const s = o.map((a) => new ze(a));
			return j(n, { code: E.invalid_union, unionErrors: s }), M;
		}
	}
	get options() {
		return this._def.options;
	}
}
Xr.create = (e, t) => new Xr({ options: e, typeName: z.ZodUnion, ...A(t) });
const ct = (e) =>
	e instanceof br
		? ct(e.schema)
		: e instanceof et
			? ct(e.innerType())
			: e instanceof ei
				? [e.value]
				: e instanceof Wt
					? e.options
					: e instanceof ti
						? Z.objectValues(e.enum)
						: e instanceof ni
							? ct(e._def.innerType)
							: e instanceof Kr
								? [void 0]
								: e instanceof Yr
									? [null]
									: e instanceof ot
										? [void 0, ...ct(e.unwrap())]
										: e instanceof Ht
											? [null, ...ct(e.unwrap())]
											: e instanceof ka || e instanceof ii
												? ct(e.unwrap())
												: e instanceof ri
													? ct(e._def.innerType)
													: [];
class Bl extends U {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		if (n.parsedType !== R.object)
			return (
				j(n, {
					code: E.invalid_type,
					expected: R.object,
					received: n.parsedType,
				}),
				M
			);
		const r = this.discriminator,
			i = n.data[r],
			l = this.optionsMap.get(i);
		return l
			? n.common.async
				? l._parseAsync({ data: n.data, path: n.path, parent: n })
				: l._parseSync({ data: n.data, path: n.path, parent: n })
			: (j(n, {
					code: E.invalid_union_discriminator,
					options: Array.from(this.optionsMap.keys()),
					path: [r],
				}),
				M);
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	static create(t, n, r) {
		const i = new Map();
		for (const l of n) {
			const o = ct(l.shape[t]);
			if (!o.length)
				throw new Error(
					`A discriminator value for key \`${t}\` could not be extracted from all schema options`,
				);
			for (const s of o) {
				if (i.has(s))
					throw new Error(
						`Discriminator property ${String(t)} has duplicate value ${String(s)}`,
					);
				i.set(s, l);
			}
		}
		return new Bl({
			typeName: z.ZodDiscriminatedUnion,
			discriminator: t,
			options: n,
			optionsMap: i,
			...A(r),
		});
	}
}
function Es(e, t) {
	const n = Tt(e),
		r = Tt(t);
	if (e === t) return { valid: !0, data: e };
	if (n === R.object && r === R.object) {
		const i = Z.objectKeys(t),
			l = Z.objectKeys(e).filter((s) => i.indexOf(s) !== -1),
			o = { ...e, ...t };
		for (const s of l) {
			const a = Es(e[s], t[s]);
			if (!a.valid) return { valid: !1 };
			o[s] = a.data;
		}
		return { valid: !0, data: o };
	} else if (n === R.array && r === R.array) {
		if (e.length !== t.length) return { valid: !1 };
		const i = [];
		for (let l = 0; l < e.length; l++) {
			const o = e[l],
				s = t[l],
				a = Es(o, s);
			if (!a.valid) return { valid: !1 };
			i.push(a.data);
		}
		return { valid: !0, data: i };
	} else
		return n === R.date && r === R.date && +e == +t
			? { valid: !0, data: e }
			: { valid: !1 };
}
class Jr extends U {
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t),
			i = (l, o) => {
				if (ks(l) || ks(o)) return M;
				const s = Es(l.value, o.value);
				return s.valid
					? ((Ss(l) || Ss(o)) && n.dirty(), { status: n.value, value: s.data })
					: (j(r, { code: E.invalid_intersection_types }), M);
			};
		return r.common.async
			? Promise.all([
					this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
					this._def.right._parseAsync({
						data: r.data,
						path: r.path,
						parent: r,
					}),
				]).then(([l, o]) => i(l, o))
			: i(
					this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
					this._def.right._parseSync({ data: r.data, path: r.path, parent: r }),
				);
	}
}
Jr.create = (e, t, n) =>
	new Jr({ left: e, right: t, typeName: z.ZodIntersection, ...A(n) });
class at extends U {
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.parsedType !== R.array)
			return (
				j(r, {
					code: E.invalid_type,
					expected: R.array,
					received: r.parsedType,
				}),
				M
			);
		if (r.data.length < this._def.items.length)
			return (
				j(r, {
					code: E.too_small,
					minimum: this._def.items.length,
					inclusive: !0,
					exact: !1,
					type: "array",
				}),
				M
			);
		!this._def.rest &&
			r.data.length > this._def.items.length &&
			(j(r, {
				code: E.too_big,
				maximum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: "array",
			}),
			n.dirty());
		const l = [...r.data]
			.map((o, s) => {
				const a = this._def.items[s] || this._def.rest;
				return a ? a._parse(new st(r, o, r.path, s)) : null;
			})
			.filter((o) => !!o);
		return r.common.async
			? Promise.all(l).then((o) => xe.mergeArray(n, o))
			: xe.mergeArray(n, l);
	}
	get items() {
		return this._def.items;
	}
	rest(t) {
		return new at({ ...this._def, rest: t });
	}
}
at.create = (e, t) => {
	if (!Array.isArray(e))
		throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new at({ items: e, typeName: z.ZodTuple, rest: null, ...A(t) });
};
class qr extends U {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.parsedType !== R.object)
			return (
				j(r, {
					code: E.invalid_type,
					expected: R.object,
					received: r.parsedType,
				}),
				M
			);
		const i = [],
			l = this._def.keyType,
			o = this._def.valueType;
		for (const s in r.data)
			i.push({
				key: l._parse(new st(r, s, r.path, s)),
				value: o._parse(new st(r, r.data[s], r.path, s)),
				alwaysSet: s in r.data,
			});
		return r.common.async
			? xe.mergeObjectAsync(n, i)
			: xe.mergeObjectSync(n, i);
	}
	get element() {
		return this._def.valueType;
	}
	static create(t, n, r) {
		return n instanceof U
			? new qr({ keyType: t, valueType: n, typeName: z.ZodRecord, ...A(r) })
			: new qr({
					keyType: Ye.create(),
					valueType: t,
					typeName: z.ZodRecord,
					...A(n),
				});
	}
}
class kl extends U {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.parsedType !== R.map)
			return (
				j(r, { code: E.invalid_type, expected: R.map, received: r.parsedType }),
				M
			);
		const i = this._def.keyType,
			l = this._def.valueType,
			o = [...r.data.entries()].map(([s, a], u) => ({
				key: i._parse(new st(r, s, r.path, [u, "key"])),
				value: l._parse(new st(r, a, r.path, [u, "value"])),
			}));
		if (r.common.async) {
			const s = new Map();
			return Promise.resolve().then(async () => {
				for (const a of o) {
					const u = await a.key,
						d = await a.value;
					if (u.status === "aborted" || d.status === "aborted") return M;
					(u.status === "dirty" || d.status === "dirty") && n.dirty(),
						s.set(u.value, d.value);
				}
				return { status: n.value, value: s };
			});
		} else {
			const s = new Map();
			for (const a of o) {
				const u = a.key,
					d = a.value;
				if (u.status === "aborted" || d.status === "aborted") return M;
				(u.status === "dirty" || d.status === "dirty") && n.dirty(),
					s.set(u.value, d.value);
			}
			return { status: n.value, value: s };
		}
	}
}
kl.create = (e, t, n) =>
	new kl({ valueType: t, keyType: e, typeName: z.ZodMap, ...A(n) });
class pn extends U {
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.parsedType !== R.set)
			return (
				j(r, { code: E.invalid_type, expected: R.set, received: r.parsedType }),
				M
			);
		const i = this._def;
		i.minSize !== null &&
			r.data.size < i.minSize.value &&
			(j(r, {
				code: E.too_small,
				minimum: i.minSize.value,
				type: "set",
				inclusive: !0,
				exact: !1,
				message: i.minSize.message,
			}),
			n.dirty()),
			i.maxSize !== null &&
				r.data.size > i.maxSize.value &&
				(j(r, {
					code: E.too_big,
					maximum: i.maxSize.value,
					type: "set",
					inclusive: !0,
					exact: !1,
					message: i.maxSize.message,
				}),
				n.dirty());
		const l = this._def.valueType;
		function o(a) {
			const u = new Set();
			for (const d of a) {
				if (d.status === "aborted") return M;
				d.status === "dirty" && n.dirty(), u.add(d.value);
			}
			return { status: n.value, value: u };
		}
		const s = [...r.data.values()].map((a, u) =>
			l._parse(new st(r, a, r.path, u)),
		);
		return r.common.async ? Promise.all(s).then((a) => o(a)) : o(s);
	}
	min(t, n) {
		return new pn({
			...this._def,
			minSize: { value: t, message: I.toString(n) },
		});
	}
	max(t, n) {
		return new pn({
			...this._def,
			maxSize: { value: t, message: I.toString(n) },
		});
	}
	size(t, n) {
		return this.min(t, n).max(t, n);
	}
	nonempty(t) {
		return this.min(1, t);
	}
}
pn.create = (e, t) =>
	new pn({
		valueType: e,
		minSize: null,
		maxSize: null,
		typeName: z.ZodSet,
		...A(t),
	});
class Bn extends U {
	constructor() {
		super(...arguments), (this.validate = this.implement);
	}
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		if (n.parsedType !== R.function)
			return (
				j(n, {
					code: E.invalid_type,
					expected: R.function,
					received: n.parsedType,
				}),
				M
			);
		function r(s, a) {
			return gl({
				data: s,
				path: n.path,
				errorMaps: [
					n.common.contextualErrorMap,
					n.schemaErrorMap,
					yl(),
					Xn,
				].filter((u) => !!u),
				issueData: { code: E.invalid_arguments, argumentsError: a },
			});
		}
		function i(s, a) {
			return gl({
				data: s,
				path: n.path,
				errorMaps: [
					n.common.contextualErrorMap,
					n.schemaErrorMap,
					yl(),
					Xn,
				].filter((u) => !!u),
				issueData: { code: E.invalid_return_type, returnTypeError: a },
			});
		}
		const l = { errorMap: n.common.contextualErrorMap },
			o = n.data;
		if (this._def.returns instanceof qn) {
			const s = this;
			return Se(async function (...a) {
				const u = new ze([]),
					d = await s._def.args.parseAsync(a, l).catch((v) => {
						throw (u.addIssue(r(a, v)), u);
					}),
					c = await Reflect.apply(o, this, d);
				return await s._def.returns._def.type.parseAsync(c, l).catch((v) => {
					throw (u.addIssue(i(c, v)), u);
				});
			});
		} else {
			const s = this;
			return Se(function (...a) {
				const u = s._def.args.safeParse(a, l);
				if (!u.success) throw new ze([r(a, u.error)]);
				const d = Reflect.apply(o, this, u.data),
					c = s._def.returns.safeParse(d, l);
				if (!c.success) throw new ze([i(d, c.error)]);
				return c.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...t) {
		return new Bn({ ...this._def, args: at.create(t).rest(on.create()) });
	}
	returns(t) {
		return new Bn({ ...this._def, returns: t });
	}
	implement(t) {
		return this.parse(t);
	}
	strictImplement(t) {
		return this.parse(t);
	}
	static create(t, n, r) {
		return new Bn({
			args: t || at.create([]).rest(on.create()),
			returns: n || on.create(),
			typeName: z.ZodFunction,
			...A(r),
		});
	}
}
class br extends U {
	get schema() {
		return this._def.getter();
	}
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
	}
}
br.create = (e, t) => new br({ getter: e, typeName: z.ZodLazy, ...A(t) });
class ei extends U {
	_parse(t) {
		if (t.data !== this._def.value) {
			const n = this._getOrReturnCtx(t);
			return (
				j(n, {
					received: n.data,
					code: E.invalid_literal,
					expected: this._def.value,
				}),
				M
			);
		}
		return { status: "valid", value: t.data };
	}
	get value() {
		return this._def.value;
	}
}
ei.create = (e, t) => new ei({ value: e, typeName: z.ZodLiteral, ...A(t) });
function Lf(e, t) {
	return new Wt({ values: e, typeName: z.ZodEnum, ...A(t) });
}
class Wt extends U {
	constructor() {
		super(...arguments), mr.set(this, void 0);
	}
	_parse(t) {
		if (typeof t.data != "string") {
			const n = this._getOrReturnCtx(t),
				r = this._def.values;
			return (
				j(n, {
					expected: Z.joinValues(r),
					received: n.parsedType,
					code: E.invalid_type,
				}),
				M
			);
		}
		if (
			(xl(this, mr) || Pf(this, mr, new Set(this._def.values)),
			!xl(this, mr).has(t.data))
		) {
			const n = this._getOrReturnCtx(t),
				r = this._def.values;
			return (
				j(n, { received: n.data, code: E.invalid_enum_value, options: r }), M
			);
		}
		return Se(t.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const t = {};
		for (const n of this._def.values) t[n] = n;
		return t;
	}
	get Values() {
		const t = {};
		for (const n of this._def.values) t[n] = n;
		return t;
	}
	get Enum() {
		const t = {};
		for (const n of this._def.values) t[n] = n;
		return t;
	}
	extract(t, n = this._def) {
		return Wt.create(t, { ...this._def, ...n });
	}
	exclude(t, n = this._def) {
		return Wt.create(
			this.options.filter((r) => !t.includes(r)),
			{ ...this._def, ...n },
		);
	}
}
mr = new WeakMap();
Wt.create = Lf;
class ti extends U {
	constructor() {
		super(...arguments), vr.set(this, void 0);
	}
	_parse(t) {
		const n = Z.getValidEnumValues(this._def.values),
			r = this._getOrReturnCtx(t);
		if (r.parsedType !== R.string && r.parsedType !== R.number) {
			const i = Z.objectValues(n);
			return (
				j(r, {
					expected: Z.joinValues(i),
					received: r.parsedType,
					code: E.invalid_type,
				}),
				M
			);
		}
		if (
			(xl(this, vr) ||
				Pf(this, vr, new Set(Z.getValidEnumValues(this._def.values))),
			!xl(this, vr).has(t.data))
		) {
			const i = Z.objectValues(n);
			return (
				j(r, { received: r.data, code: E.invalid_enum_value, options: i }), M
			);
		}
		return Se(t.data);
	}
	get enum() {
		return this._def.values;
	}
}
vr = new WeakMap();
ti.create = (e, t) => new ti({ values: e, typeName: z.ZodNativeEnum, ...A(t) });
class qn extends U {
	unwrap() {
		return this._def.type;
	}
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		if (n.parsedType !== R.promise && n.common.async === !1)
			return (
				j(n, {
					code: E.invalid_type,
					expected: R.promise,
					received: n.parsedType,
				}),
				M
			);
		const r = n.parsedType === R.promise ? n.data : Promise.resolve(n.data);
		return Se(
			r.then((i) =>
				this._def.type.parseAsync(i, {
					path: n.path,
					errorMap: n.common.contextualErrorMap,
				}),
			),
		);
	}
}
qn.create = (e, t) => new qn({ type: e, typeName: z.ZodPromise, ...A(t) });
class et extends U {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === z.ZodEffects
			? this._def.schema.sourceType()
			: this._def.schema;
	}
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t),
			i = this._def.effect || null,
			l = {
				addIssue: (o) => {
					j(r, o), o.fatal ? n.abort() : n.dirty();
				},
				get path() {
					return r.path;
				},
			};
		if (((l.addIssue = l.addIssue.bind(l)), i.type === "preprocess")) {
			const o = i.transform(r.data, l);
			if (r.common.async)
				return Promise.resolve(o).then(async (s) => {
					if (n.value === "aborted") return M;
					const a = await this._def.schema._parseAsync({
						data: s,
						path: r.path,
						parent: r,
					});
					return a.status === "aborted"
						? M
						: a.status === "dirty" || n.value === "dirty"
							? Mn(a.value)
							: a;
				});
			{
				if (n.value === "aborted") return M;
				const s = this._def.schema._parseSync({
					data: o,
					path: r.path,
					parent: r,
				});
				return s.status === "aborted"
					? M
					: s.status === "dirty" || n.value === "dirty"
						? Mn(s.value)
						: s;
			}
		}
		if (i.type === "refinement") {
			const o = (s) => {
				const a = i.refinement(s, l);
				if (r.common.async) return Promise.resolve(a);
				if (a instanceof Promise)
					throw new Error(
						"Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				return s;
			};
			if (r.common.async === !1) {
				const s = this._def.schema._parseSync({
					data: r.data,
					path: r.path,
					parent: r,
				});
				return s.status === "aborted"
					? M
					: (s.status === "dirty" && n.dirty(),
						o(s.value),
						{ status: n.value, value: s.value });
			} else
				return this._def.schema
					._parseAsync({ data: r.data, path: r.path, parent: r })
					.then((s) =>
						s.status === "aborted"
							? M
							: (s.status === "dirty" && n.dirty(),
								o(s.value).then(() => ({ status: n.value, value: s.value }))),
					);
		}
		if (i.type === "transform")
			if (r.common.async === !1) {
				const o = this._def.schema._parseSync({
					data: r.data,
					path: r.path,
					parent: r,
				});
				if (!Hr(o)) return o;
				const s = i.transform(o.value, l);
				if (s instanceof Promise)
					throw new Error(
						"Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				return { status: n.value, value: s };
			} else
				return this._def.schema
					._parseAsync({ data: r.data, path: r.path, parent: r })
					.then((o) =>
						Hr(o)
							? Promise.resolve(i.transform(o.value, l)).then((s) => ({
									status: n.value,
									value: s,
								}))
							: o,
					);
		Z.assertNever(i);
	}
}
et.create = (e, t, n) =>
	new et({ schema: e, typeName: z.ZodEffects, effect: t, ...A(n) });
et.createWithPreprocess = (e, t, n) =>
	new et({
		schema: t,
		effect: { type: "preprocess", transform: e },
		typeName: z.ZodEffects,
		...A(n),
	});
class ot extends U {
	_parse(t) {
		return this._getType(t) === R.undefined
			? Se(void 0)
			: this._def.innerType._parse(t);
	}
	unwrap() {
		return this._def.innerType;
	}
}
ot.create = (e, t) =>
	new ot({ innerType: e, typeName: z.ZodOptional, ...A(t) });
class Ht extends U {
	_parse(t) {
		return this._getType(t) === R.null
			? Se(null)
			: this._def.innerType._parse(t);
	}
	unwrap() {
		return this._def.innerType;
	}
}
Ht.create = (e, t) =>
	new Ht({ innerType: e, typeName: z.ZodNullable, ...A(t) });
class ni extends U {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		let r = n.data;
		return (
			n.parsedType === R.undefined && (r = this._def.defaultValue()),
			this._def.innerType._parse({ data: r, path: n.path, parent: n })
		);
	}
	removeDefault() {
		return this._def.innerType;
	}
}
ni.create = (e, t) =>
	new ni({
		innerType: e,
		typeName: z.ZodDefault,
		defaultValue: typeof t.default == "function" ? t.default : () => t.default,
		...A(t),
	});
class ri extends U {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t),
			r = { ...n, common: { ...n.common, issues: [] } },
			i = this._def.innerType._parse({
				data: r.data,
				path: r.path,
				parent: { ...r },
			});
		return Qr(i)
			? i.then((l) => ({
					status: "valid",
					value:
						l.status === "valid"
							? l.value
							: this._def.catchValue({
									get error() {
										return new ze(r.common.issues);
									},
									input: r.data,
								}),
				}))
			: {
					status: "valid",
					value:
						i.status === "valid"
							? i.value
							: this._def.catchValue({
									get error() {
										return new ze(r.common.issues);
									},
									input: r.data,
								}),
				};
	}
	removeCatch() {
		return this._def.innerType;
	}
}
ri.create = (e, t) =>
	new ri({
		innerType: e,
		typeName: z.ZodCatch,
		catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
		...A(t),
	});
class Sl extends U {
	_parse(t) {
		if (this._getType(t) !== R.nan) {
			const r = this._getOrReturnCtx(t);
			return (
				j(r, { code: E.invalid_type, expected: R.nan, received: r.parsedType }),
				M
			);
		}
		return { status: "valid", value: t.data };
	}
}
Sl.create = (e) => new Sl({ typeName: z.ZodNaN, ...A(e) });
const $v = Symbol("zod_brand");
class ka extends U {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t),
			r = n.data;
		return this._def.type._parse({ data: r, path: n.path, parent: n });
	}
	unwrap() {
		return this._def.type;
	}
}
class fi extends U {
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.common.async)
			return (async () => {
				const l = await this._def.in._parseAsync({
					data: r.data,
					path: r.path,
					parent: r,
				});
				return l.status === "aborted"
					? M
					: l.status === "dirty"
						? (n.dirty(), Mn(l.value))
						: this._def.out._parseAsync({
								data: l.value,
								path: r.path,
								parent: r,
							});
			})();
		{
			const i = this._def.in._parseSync({
				data: r.data,
				path: r.path,
				parent: r,
			});
			return i.status === "aborted"
				? M
				: i.status === "dirty"
					? (n.dirty(), { status: "dirty", value: i.value })
					: this._def.out._parseSync({
							data: i.value,
							path: r.path,
							parent: r,
						});
		}
	}
	static create(t, n) {
		return new fi({ in: t, out: n, typeName: z.ZodPipeline });
	}
}
class ii extends U {
	_parse(t) {
		const n = this._def.innerType._parse(t),
			r = (i) => (Hr(i) && (i.value = Object.freeze(i.value)), i);
		return Qr(n) ? n.then((i) => r(i)) : r(n);
	}
	unwrap() {
		return this._def.innerType;
	}
}
ii.create = (e, t) =>
	new ii({ innerType: e, typeName: z.ZodReadonly, ...A(t) });
function If(e, t = {}, n) {
	return e
		? Jn.create().superRefine((r, i) => {
				var l, o;
				if (!e(r)) {
					const s =
							typeof t == "function"
								? t(r)
								: typeof t == "string"
									? { message: t }
									: t,
						a =
							(o = (l = s.fatal) !== null && l !== void 0 ? l : n) !== null &&
							o !== void 0
								? o
								: !0,
						u = typeof s == "string" ? { message: s } : s;
					i.addIssue({ code: "custom", ...u, fatal: a });
				}
			})
		: Jn.create();
}
const Uv = { object: J.lazycreate };
var z;
(function (e) {
	(e.ZodString = "ZodString"),
		(e.ZodNumber = "ZodNumber"),
		(e.ZodNaN = "ZodNaN"),
		(e.ZodBigInt = "ZodBigInt"),
		(e.ZodBoolean = "ZodBoolean"),
		(e.ZodDate = "ZodDate"),
		(e.ZodSymbol = "ZodSymbol"),
		(e.ZodUndefined = "ZodUndefined"),
		(e.ZodNull = "ZodNull"),
		(e.ZodAny = "ZodAny"),
		(e.ZodUnknown = "ZodUnknown"),
		(e.ZodNever = "ZodNever"),
		(e.ZodVoid = "ZodVoid"),
		(e.ZodArray = "ZodArray"),
		(e.ZodObject = "ZodObject"),
		(e.ZodUnion = "ZodUnion"),
		(e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
		(e.ZodIntersection = "ZodIntersection"),
		(e.ZodTuple = "ZodTuple"),
		(e.ZodRecord = "ZodRecord"),
		(e.ZodMap = "ZodMap"),
		(e.ZodSet = "ZodSet"),
		(e.ZodFunction = "ZodFunction"),
		(e.ZodLazy = "ZodLazy"),
		(e.ZodLiteral = "ZodLiteral"),
		(e.ZodEnum = "ZodEnum"),
		(e.ZodEffects = "ZodEffects"),
		(e.ZodNativeEnum = "ZodNativeEnum"),
		(e.ZodOptional = "ZodOptional"),
		(e.ZodNullable = "ZodNullable"),
		(e.ZodDefault = "ZodDefault"),
		(e.ZodCatch = "ZodCatch"),
		(e.ZodPromise = "ZodPromise"),
		(e.ZodBranded = "ZodBranded"),
		(e.ZodPipeline = "ZodPipeline"),
		(e.ZodReadonly = "ZodReadonly");
})(z || (z = {}));
const Fv = (e, t = { message: `Input not instance of ${e.name}` }) =>
		If((n) => n instanceof e, t),
	zf = Ye.create,
	Mf = Bt.create,
	Vv = Sl.create,
	Bv = Zt.create,
	Df = Gr.create,
	Zv = fn.create,
	Wv = wl.create,
	Hv = Kr.create,
	Qv = Yr.create,
	Gv = Jn.create,
	Kv = on.create,
	Yv = wt.create,
	Xv = _l.create,
	Jv = qe.create,
	qv = J.create,
	bv = J.strictCreate,
	ey = Xr.create,
	ty = Bl.create,
	ny = Jr.create,
	ry = at.create,
	iy = qr.create,
	ly = kl.create,
	oy = pn.create,
	sy = Bn.create,
	ay = br.create,
	uy = ei.create,
	cy = Wt.create,
	dy = ti.create,
	fy = qn.create,
	Ku = et.create,
	py = ot.create,
	hy = Ht.create,
	my = et.createWithPreprocess,
	vy = fi.create,
	yy = () => zf().optional(),
	gy = () => Mf().optional(),
	xy = () => Df().optional(),
	wy = {
		string: (e) => Ye.create({ ...e, coerce: !0 }),
		number: (e) => Bt.create({ ...e, coerce: !0 }),
		boolean: (e) => Gr.create({ ...e, coerce: !0 }),
		bigint: (e) => Zt.create({ ...e, coerce: !0 }),
		date: (e) => fn.create({ ...e, coerce: !0 }),
	},
	_y = M;
var ky = Object.freeze({
	__proto__: null,
	defaultErrorMap: Xn,
	setErrorMap: _v,
	getErrorMap: yl,
	makeIssue: gl,
	EMPTY_PATH: kv,
	addIssueToContext: j,
	ParseStatus: xe,
	INVALID: M,
	DIRTY: Mn,
	OK: Se,
	isAborted: ks,
	isDirty: Ss,
	isValid: Hr,
	isAsync: Qr,
	get util() {
		return Z;
	},
	get objectUtil() {
		return _s;
	},
	ZodParsedType: R,
	getParsedType: Tt,
	ZodType: U,
	datetimeRegex: Of,
	ZodString: Ye,
	ZodNumber: Bt,
	ZodBigInt: Zt,
	ZodBoolean: Gr,
	ZodDate: fn,
	ZodSymbol: wl,
	ZodUndefined: Kr,
	ZodNull: Yr,
	ZodAny: Jn,
	ZodUnknown: on,
	ZodNever: wt,
	ZodVoid: _l,
	ZodArray: qe,
	ZodObject: J,
	ZodUnion: Xr,
	ZodDiscriminatedUnion: Bl,
	ZodIntersection: Jr,
	ZodTuple: at,
	ZodRecord: qr,
	ZodMap: kl,
	ZodSet: pn,
	ZodFunction: Bn,
	ZodLazy: br,
	ZodLiteral: ei,
	ZodEnum: Wt,
	ZodNativeEnum: ti,
	ZodPromise: qn,
	ZodEffects: et,
	ZodTransformer: et,
	ZodOptional: ot,
	ZodNullable: Ht,
	ZodDefault: ni,
	ZodCatch: ri,
	ZodNaN: Sl,
	BRAND: $v,
	ZodBranded: ka,
	ZodPipeline: fi,
	ZodReadonly: ii,
	custom: If,
	Schema: U,
	ZodSchema: U,
	late: Uv,
	get ZodFirstPartyTypeKind() {
		return z;
	},
	coerce: wy,
	any: Gv,
	array: Jv,
	bigint: Bv,
	boolean: Df,
	date: Zv,
	discriminatedUnion: ty,
	effect: Ku,
	enum: cy,
	function: sy,
	instanceof: Fv,
	intersection: ny,
	lazy: ay,
	literal: uy,
	map: ly,
	nan: Vv,
	nativeEnum: dy,
	never: Yv,
	null: Qv,
	nullable: hy,
	number: Mf,
	object: qv,
	oboolean: xy,
	onumber: gy,
	optional: py,
	ostring: yy,
	pipeline: vy,
	preprocess: my,
	promise: fy,
	record: iy,
	set: oy,
	strictObject: bv,
	string: zf,
	symbol: Wv,
	transformer: Ku,
	tuple: ry,
	undefined: Hv,
	union: ey,
	unknown: Kv,
	void: Xv,
	NEVER: _y,
	ZodIssueCode: E,
	quotelessJson: wv,
	ZodError: ze,
});
ky.Schema;
const Sy = (e) => {
	if (!e) return { error: "jsonSafeParse: string is empty", success: !1 };
	try {
		return { json: JSON.parse(e), success: !0 };
	} catch (t) {
		return (
			console.error("error parsing json", t),
			{ error: `jsonSafeParse: couldn't parse ${e}`, success: !1 }
		);
	}
};
function Yu() {
	if (typeof window.crypto.randomUUID == "function")
		return window.crypto.randomUUID();
	let e = "";
	for (let t = 0; t < 36; t++)
		if ([8, 13, 18, 23].includes(t)) e = e + "-";
		else {
			const n = Math.floor(36 * Math.random());
			e = e + n.toString(36);
		}
	return e;
}
const _o = "DICE_CITY_OPTIONS",
	Af = {
		ping: null,
		playerName: "",
		playerId: "",
		playerPassword: "",
		perGamePassword: [],
		darkMode: "system",
		showNames: !0,
		diceRollVolume: 0,
		yourTurnVolume: 0,
		newestEventFirst: !1,
		turnEventSummaryCount: 2,
	},
	$f = k.createContext({ options: Af, setOptions: () => {} }),
	Ey = ({ children: e }) => {
		const t = localStorage.getItem(_o);
		let n = {};
		const r = Sy(t);
		r.success && (n = r.json);
		const [i, l] = k.useState({ ...Af, ...n });
		return (
			k.useEffect(() => {
				(!i.playerId || !i.playerPassword) &&
					l((o) => {
						const s = { ...o };
						s.playerId || (s.playerId = Yu()),
							s.playerPassword || (s.playerPassword = Yu());
						const { ping: a, ...u } = s;
						return localStorage.setItem(_o, JSON.stringify(u)), s;
					});
			}, []),
			x.jsx($f.Provider, {
				value: {
					options: i,
					setOptions: (o) => {
						l((s) => {
							const a = { ...s, ...o },
								{ ping: u, ...d } = a;
							return localStorage.setItem(_o, JSON.stringify(d)), a;
						});
					},
				},
				children: e,
			})
		);
	},
	Zl = () => k.useContext($f),
	Cy = "modulepreload",
	Ny = function (e) {
		return "/" + e;
	},
	Xu = {},
	Sa = function (t, n, r) {
		let i = Promise.resolve();
		if (n && n.length > 0) {
			document.getElementsByTagName("link");
			const o = document.querySelector("meta[property=csp-nonce]"),
				s =
					(o == null ? void 0 : o.nonce) ||
					(o == null ? void 0 : o.getAttribute("nonce"));
			i = Promise.allSettled(
				n.map((a) => {
					if (((a = Ny(a)), a in Xu)) return;
					Xu[a] = !0;
					const u = a.endsWith(".css"),
						d = u ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${a}"]${d}`)) return;
					const c = document.createElement("link");
					if (
						((c.rel = u ? "stylesheet" : Cy),
						u || (c.as = "script"),
						(c.crossOrigin = ""),
						(c.href = a),
						s && c.setAttribute("nonce", s),
						document.head.appendChild(c),
						u)
					)
						return new Promise((f, v) => {
							c.addEventListener("load", f),
								c.addEventListener("error", () =>
									v(new Error(`Unable to preload CSS for ${a}`)),
								);
						});
				}),
			);
		}
		function l(o) {
			const s = new Event("vite:preloadError", { cancelable: !0 });
			if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented))
				throw o;
		}
		return i.then((o) => {
			for (const s of o || []) s.status === "rejected" && l(s.reason);
			return t().catch(l);
		});
	};
function Uf() {
	return x.jsx("div", {
		className: "flex h-full items-center justify-center",
		children: x.jsx("div", {
			className: "animate-spin-loading rounded-full border p-4",
			children: "Loading",
		}),
	});
}
const Pg = Object.freeze(
	Object.defineProperty({ __proto__: null, default: Uf }, Symbol.toStringTag, {
		value: "Module",
	}),
);
function El({ children: e, className: t }) {
	return x.jsx("div", {
		className: `mx-1 first:ml-0 last:mr-0 ${t || ""}`,
		children: e,
	});
}
function Ty() {
	const {
			options: { playerName: e },
			setOptions: t,
		} = Zl(),
		n = k.useRef(null),
		[r, i] = k.useState(!e),
		[l, o] = k.useState(e);
	return (
		k.useEffect(() => {
			e ||
				setTimeout(() => {
					var s;
					(s = n.current) == null || s.focus();
				});
		}, []),
		x.jsx(El, {
			children: r
				? x.jsxs("form", {
						onSubmit: (s) => {
							s.preventDefault(), l && (t({ playerName: l }), i(!1));
						},
						children: [
							x.jsx("input", {
								className:
									"rounded-l border border-r-0 border-gray-600 px-2 dark:border-gray-300 dark:bg-gray-600",
								ref: n,
								type: "text",
								onChange: (s) => {
									o(s.target.value);
								},
								value: l,
								placeholder: "Enter your name",
								required: !0,
							}),
							x.jsx("button", {
								className:
									"rounded-r border border-gray-600 px-2 py-0 dark:border-gray-300",
								children: "Save",
							}),
						],
					})
				: x.jsxs(x.Fragment, {
						children: [
							x.jsx("span", { className: "mr-2", children: e }),
							x.jsx("button", {
								className:
									"rounded border border-gray-600 px-2 py-0 dark:border-gray-300",
								onClick: () => {
									i(!0),
										setTimeout(() => {
											if (n.current) {
												const s = n.current;
												s.focus(), s.setSelectionRange(0, s.value.length);
											}
										});
								},
								children: "Change Name",
							}),
						],
					}),
		})
	);
}
function Wi({ children: e, legend: t }) {
	return x.jsxs("fieldset", {
		className:
			"border border-gray-700 p-2 dark:border-gray-300 dark:bg-gray-800",
		children: [
			!!t && x.jsx("legend", { className: "-mb-2 px-0.5", children: t }),
			e,
		],
	});
}
function Py({ darkMode: e, setOptions: t }) {
	return x.jsxs(Wi, {
		legend: "Colour Theme",
		children: [
			x.jsxs("label", {
				className: "block",
				children: [
					x.jsx("input", {
						onChange: () => {
							t({ darkMode: "dark" });
						},
						type: "radio",
						value: "dark",
						name: "darkMode",
						checked: e === "dark",
					}),
					" Dark Mode",
				],
			}),
			x.jsxs("label", {
				className: "block",
				children: [
					x.jsx("input", {
						onChange: () => {
							t({ darkMode: "light" });
						},
						type: "radio",
						value: "light",
						name: "darkMode",
						checked: e === "light",
					}),
					" Light Mode",
				],
			}),
			x.jsxs("label", {
				className: "block",
				children: [
					x.jsx("input", {
						onChange: () => {
							t({ darkMode: "system" });
						},
						type: "radio",
						value: "system",
						name: "darkMode",
						checked: e === "system",
					}),
					" System (default)",
				],
			}),
		],
	});
}
function jy() {
	const { options: e, setOptions: t } = Zl(),
		n = k.useRef(new Audio("/dice-roll.mp3")).current,
		r = k.useRef(new Audio("/chord-ceg.mp3")).current;
	return x.jsx(El, {
		className: "relative",
		children: x.jsxs("details", {
			children: [
				x.jsx("summary", { children: "Options" }),
				x.jsxs("div", {
					className:
						"absolute right-0 top-full z-30 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800",
					children: [
						x.jsx(Py, { darkMode: e.darkMode, setOptions: t }),
						x.jsxs(Wi, {
							legend: "Show Names",
							children: [
								x.jsxs("label", {
									className: "block",
									children: [
										x.jsx("input", {
											type: "checkbox",
											checked: e.showNamesPublic,
											onChange: () => {
												t({ showNamesPublic: !e.showNamesPublic });
											},
										}),
										" Public Games",
									],
								}),
								x.jsxs("label", {
									className: "block",
									children: [
										x.jsx("input", {
											type: "checkbox",
											checked: e.showNames,
											onChange: () => {
												t({ showNames: !e.showNames });
											},
										}),
										" Private Games",
									],
								}),
							],
						}),
						x.jsxs(Wi, {
							legend: "Misc.",
							children: [
								x.jsxs("label", {
									className: "block",
									children: [
										x.jsx("input", {
											type: "checkbox",
											checked: e.alwaysShowCities,
											onChange: () => {
												t({ alwaysShowCities: !e.alwaysShowCities });
											},
										}),
										"  Always Show Cities",
									],
								}),
								x.jsxs("label", {
									className: "block",
									children: [
										x.jsx("input", {
											type: "checkbox",
											checked: e.alwaysShowSupply,
											onChange: () => {
												t({ alwaysShowSupply: !e.alwaysShowSupply });
											},
										}),
										"  Always Show Supply",
									],
								}),
								x.jsxs("label", {
									className: "block",
									children: [
										x.jsx("input", {
											type: "checkbox",
											checked: e.alwaysShowEstablishmentList,
											onChange: () => {
												t({
													alwaysShowEstablishmentList:
														!e.alwaysShowEstablishmentList,
												});
											},
										}),
										"  Always Show Establishment List",
									],
								}),
								x.jsxs("label", {
									className: "block",
									children: [
										x.jsx("input", {
											type: "checkbox",
											checked: !e.hideInstructions,
											onChange: () => {
												t({ hideInstructions: !e.hideInstructions });
											},
										}),
										"  Always Show Instructions",
									],
								}),
								x.jsxs("label", {
									className: "block",
									children: [
										x.jsx("input", {
											type: "checkbox",
											checked: e.newestEventFirst,
											onChange: () => {
												t({ newestEventFirst: !e.newestEventFirst });
											},
										}),
										"  Newest Turn Event On Top",
									],
								}),
								x.jsxs("label", {
									className: "flex items-center gap-4",
									children: [
										x.jsxs("div", {
											children: [
												x.jsx("span", {
													className: "font-mono",
													children: e.turnEventSummaryCount,
												}),
												x.jsx("span", {
													children: " Turn Event Summary Items",
												}),
											],
										}),
										x.jsx("input", {
											className: "max-w-24",
											type: "range",
											min: 0,
											max: 5,
											step: 1,
											value: e.turnEventSummaryCount,
											onChange: (i) => {
												t({
													turnEventSummaryCount: parseInt(
														i.currentTarget.value,
														10,
													),
												});
											},
										}),
									],
								}),
							],
						}),
						x.jsx(Wi, {
							legend: "Volume",
							children: x.jsx("table", {
								className: "w-full",
								children: x.jsxs("tbody", {
									children: [
										x.jsxs("tr", {
											children: [
												x.jsx("td", { children: "Dice Roll" }),
												x.jsx("td", {
													children: x.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: x.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															value: e.diceRollVolume,
															min: 0,
															max: 1,
															step: 0.01,
															onChange: (i) => {
																t({
																	diceRollVolume: parseFloat(
																		i.currentTarget.value,
																	),
																});
															},
															onMouseUp: (i) => {
																(n.volume = parseFloat(i.currentTarget.value)),
																	n.play();
															},
														}),
													}),
												}),
											],
										}),
										x.jsxs("tr", {
											children: [
												x.jsx("td", { children: "Your Turn" }),
												x.jsx("td", {
													children: x.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: x.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															min: 0,
															max: 1,
															step: 0.01,
															value: e.yourTurnVolume,
															onChange: (i) => {
																t({
																	yourTurnVolume: parseFloat(
																		i.currentTarget.value,
																	),
																});
															},
															onMouseUp: (i) => {
																(r.volume = parseFloat(i.currentTarget.value)),
																	r.play();
															},
														}),
													}),
												}),
											],
										}),
									],
								}),
							}),
						}),
					],
				}),
			],
		}),
	});
}
function Ry() {
	const { options: e } = Zl();
	return x.jsxs("div", {
		className: "absolute mb-1 mt-2 flex w-full flex-wrap justify-end",
		children: [
			x.jsx("div", { className: "basis-1" }),
			x.jsx(Ty, {}),
			typeof e.ping == "number" &&
				x.jsxs("div", { children: ["Ping: ", e.ping, " ms"] }),
			x.jsx("div", { className: "grow" }),
			x.jsx(jy, {}),
			x.jsx(El, { children: x.jsx(vv, { to: "/", children: "Home" }) }),
			x.jsx(El, {
				children: x.jsx("a", {
					target: "_blank",
					href: "https://github.com/nick-ng/dice-city",
					children: "GitHub",
				}),
			}),
			x.jsx("div", { className: "basis-1" }),
		],
	});
}
var Ea = { exports: {} };
Ea.exports;
(function (e) {
	(function (t, n, r) {
		function i(a) {
			var u = this,
				d = s();
			(u.next = function () {
				var c = 2091639 * u.s0 + u.c * 23283064365386963e-26;
				return (u.s0 = u.s1), (u.s1 = u.s2), (u.s2 = c - (u.c = c | 0));
			}),
				(u.c = 1),
				(u.s0 = d(" ")),
				(u.s1 = d(" ")),
				(u.s2 = d(" ")),
				(u.s0 -= d(a)),
				u.s0 < 0 && (u.s0 += 1),
				(u.s1 -= d(a)),
				u.s1 < 0 && (u.s1 += 1),
				(u.s2 -= d(a)),
				u.s2 < 0 && (u.s2 += 1),
				(d = null);
		}
		function l(a, u) {
			return (u.c = a.c), (u.s0 = a.s0), (u.s1 = a.s1), (u.s2 = a.s2), u;
		}
		function o(a, u) {
			var d = new i(a),
				c = u && u.state,
				f = d.next;
			return (
				(f.int32 = function () {
					return (d.next() * 4294967296) | 0;
				}),
				(f.double = function () {
					return f() + ((f() * 2097152) | 0) * 11102230246251565e-32;
				}),
				(f.quick = f),
				c &&
					(typeof c == "object" && l(c, d),
					(f.state = function () {
						return l(d, {});
					})),
				f
			);
		}
		function s() {
			var a = 4022871197,
				u = function (d) {
					d = String(d);
					for (var c = 0; c < d.length; c++) {
						a += d.charCodeAt(c);
						var f = 0.02519603282416938 * a;
						(a = f >>> 0),
							(f -= a),
							(f *= a),
							(a = f >>> 0),
							(f -= a),
							(a += f * 4294967296);
					}
					return (a >>> 0) * 23283064365386963e-26;
				};
			return u;
		}
		n && n.exports ? (n.exports = o) : (this.alea = o);
	})(hn, e);
})(Ea);
var Oy = Ea.exports,
	Ca = { exports: {} };
Ca.exports;
(function (e) {
	(function (t, n, r) {
		function i(s) {
			var a = this,
				u = "";
			(a.x = 0),
				(a.y = 0),
				(a.z = 0),
				(a.w = 0),
				(a.next = function () {
					var c = a.x ^ (a.x << 11);
					return (
						(a.x = a.y),
						(a.y = a.z),
						(a.z = a.w),
						(a.w ^= (a.w >>> 19) ^ c ^ (c >>> 8))
					);
				}),
				s === (s | 0) ? (a.x = s) : (u += s);
			for (var d = 0; d < u.length + 64; d++)
				(a.x ^= u.charCodeAt(d) | 0), a.next();
		}
		function l(s, a) {
			return (a.x = s.x), (a.y = s.y), (a.z = s.z), (a.w = s.w), a;
		}
		function o(s, a) {
			var u = new i(s),
				d = a && a.state,
				c = function () {
					return (u.next() >>> 0) / 4294967296;
				};
			return (
				(c.double = function () {
					do
						var f = u.next() >>> 11,
							v = (u.next() >>> 0) / 4294967296,
							y = (f + v) / (1 << 21);
					while (y === 0);
					return y;
				}),
				(c.int32 = u.next),
				(c.quick = c),
				d &&
					(typeof d == "object" && l(d, u),
					(c.state = function () {
						return l(u, {});
					})),
				c
			);
		}
		n && n.exports ? (n.exports = o) : (this.xor128 = o);
	})(hn, e);
})(Ca);
var Ly = Ca.exports,
	Na = { exports: {} };
Na.exports;
(function (e) {
	(function (t, n, r) {
		function i(s) {
			var a = this,
				u = "";
			(a.next = function () {
				var c = a.x ^ (a.x >>> 2);
				return (
					(a.x = a.y),
					(a.y = a.z),
					(a.z = a.w),
					(a.w = a.v),
					((a.d = (a.d + 362437) | 0) +
						(a.v = a.v ^ (a.v << 4) ^ (c ^ (c << 1)))) |
						0
				);
			}),
				(a.x = 0),
				(a.y = 0),
				(a.z = 0),
				(a.w = 0),
				(a.v = 0),
				s === (s | 0) ? (a.x = s) : (u += s);
			for (var d = 0; d < u.length + 64; d++)
				(a.x ^= u.charCodeAt(d) | 0),
					d == u.length && (a.d = (a.x << 10) ^ (a.x >>> 4)),
					a.next();
		}
		function l(s, a) {
			return (
				(a.x = s.x),
				(a.y = s.y),
				(a.z = s.z),
				(a.w = s.w),
				(a.v = s.v),
				(a.d = s.d),
				a
			);
		}
		function o(s, a) {
			var u = new i(s),
				d = a && a.state,
				c = function () {
					return (u.next() >>> 0) / 4294967296;
				};
			return (
				(c.double = function () {
					do
						var f = u.next() >>> 11,
							v = (u.next() >>> 0) / 4294967296,
							y = (f + v) / (1 << 21);
					while (y === 0);
					return y;
				}),
				(c.int32 = u.next),
				(c.quick = c),
				d &&
					(typeof d == "object" && l(d, u),
					(c.state = function () {
						return l(u, {});
					})),
				c
			);
		}
		n && n.exports ? (n.exports = o) : (this.xorwow = o);
	})(hn, e);
})(Na);
var Iy = Na.exports,
	Ta = { exports: {} };
Ta.exports;
(function (e) {
	(function (t, n, r) {
		function i(s) {
			var a = this;
			a.next = function () {
				var d = a.x,
					c = a.i,
					f,
					v;
				return (
					(f = d[c]),
					(f ^= f >>> 7),
					(v = f ^ (f << 24)),
					(f = d[(c + 1) & 7]),
					(v ^= f ^ (f >>> 10)),
					(f = d[(c + 3) & 7]),
					(v ^= f ^ (f >>> 3)),
					(f = d[(c + 4) & 7]),
					(v ^= f ^ (f << 7)),
					(f = d[(c + 7) & 7]),
					(f = f ^ (f << 13)),
					(v ^= f ^ (f << 9)),
					(d[c] = v),
					(a.i = (c + 1) & 7),
					v
				);
			};
			function u(d, c) {
				var f,
					v = [];
				if (c === (c | 0)) v[0] = c;
				else
					for (c = "" + c, f = 0; f < c.length; ++f)
						v[f & 7] =
							(v[f & 7] << 15) ^ ((c.charCodeAt(f) + v[(f + 1) & 7]) << 13);
				for (; v.length < 8; ) v.push(0);
				for (f = 0; f < 8 && v[f] === 0; ++f);
				for (f == 8 ? (v[7] = -1) : v[f], d.x = v, d.i = 0, f = 256; f > 0; --f)
					d.next();
			}
			u(a, s);
		}
		function l(s, a) {
			return (a.x = s.x.slice()), (a.i = s.i), a;
		}
		function o(s, a) {
			s == null && (s = +new Date());
			var u = new i(s),
				d = a && a.state,
				c = function () {
					return (u.next() >>> 0) / 4294967296;
				};
			return (
				(c.double = function () {
					do
						var f = u.next() >>> 11,
							v = (u.next() >>> 0) / 4294967296,
							y = (f + v) / (1 << 21);
					while (y === 0);
					return y;
				}),
				(c.int32 = u.next),
				(c.quick = c),
				d &&
					(d.x && l(d, u),
					(c.state = function () {
						return l(u, {});
					})),
				c
			);
		}
		n && n.exports ? (n.exports = o) : (this.xorshift7 = o);
	})(hn, e);
})(Ta);
var zy = Ta.exports,
	Pa = { exports: {} };
Pa.exports;
(function (e) {
	(function (t, n, r) {
		function i(s) {
			var a = this;
			a.next = function () {
				var d = a.w,
					c = a.X,
					f = a.i,
					v,
					y;
				return (
					(a.w = d = (d + 1640531527) | 0),
					(y = c[(f + 34) & 127]),
					(v = c[(f = (f + 1) & 127)]),
					(y ^= y << 13),
					(v ^= v << 17),
					(y ^= y >>> 15),
					(v ^= v >>> 12),
					(y = c[f] = y ^ v),
					(a.i = f),
					(y + (d ^ (d >>> 16))) | 0
				);
			};
			function u(d, c) {
				var f,
					v,
					y,
					w,
					C,
					h = [],
					p = 128;
				for (
					c === (c | 0)
						? ((v = c), (c = null))
						: ((c = c + "\0"), (v = 0), (p = Math.max(p, c.length))),
						y = 0,
						w = -32;
					w < p;
					++w
				)
					c && (v ^= c.charCodeAt((w + 32) % c.length)),
						w === 0 && (C = v),
						(v ^= v << 10),
						(v ^= v >>> 15),
						(v ^= v << 4),
						(v ^= v >>> 13),
						w >= 0 &&
							((C = (C + 1640531527) | 0),
							(f = h[w & 127] ^= v + C),
							(y = f == 0 ? y + 1 : 0));
				for (
					y >= 128 && (h[((c && c.length) || 0) & 127] = -1),
						y = 127,
						w = 4 * 128;
					w > 0;
					--w
				)
					(v = h[(y + 34) & 127]),
						(f = h[(y = (y + 1) & 127)]),
						(v ^= v << 13),
						(f ^= f << 17),
						(v ^= v >>> 15),
						(f ^= f >>> 12),
						(h[y] = v ^ f);
				(d.w = C), (d.X = h), (d.i = y);
			}
			u(a, s);
		}
		function l(s, a) {
			return (a.i = s.i), (a.w = s.w), (a.X = s.X.slice()), a;
		}
		function o(s, a) {
			s == null && (s = +new Date());
			var u = new i(s),
				d = a && a.state,
				c = function () {
					return (u.next() >>> 0) / 4294967296;
				};
			return (
				(c.double = function () {
					do
						var f = u.next() >>> 11,
							v = (u.next() >>> 0) / 4294967296,
							y = (f + v) / (1 << 21);
					while (y === 0);
					return y;
				}),
				(c.int32 = u.next),
				(c.quick = c),
				d &&
					(d.X && l(d, u),
					(c.state = function () {
						return l(u, {});
					})),
				c
			);
		}
		n && n.exports ? (n.exports = o) : (this.xor4096 = o);
	})(hn, e);
})(Pa);
var My = Pa.exports,
	ja = { exports: {} };
ja.exports;
(function (e) {
	(function (t, n, r) {
		function i(s) {
			var a = this,
				u = "";
			(a.next = function () {
				var c = a.b,
					f = a.c,
					v = a.d,
					y = a.a;
				return (
					(c = (c << 25) ^ (c >>> 7) ^ f),
					(f = (f - v) | 0),
					(v = (v << 24) ^ (v >>> 8) ^ y),
					(y = (y - c) | 0),
					(a.b = c = (c << 20) ^ (c >>> 12) ^ f),
					(a.c = f = (f - v) | 0),
					(a.d = (v << 16) ^ (f >>> 16) ^ y),
					(a.a = (y - c) | 0)
				);
			}),
				(a.a = 0),
				(a.b = 0),
				(a.c = -1640531527),
				(a.d = 1367130551),
				s === Math.floor(s)
					? ((a.a = (s / 4294967296) | 0), (a.b = s | 0))
					: (u += s);
			for (var d = 0; d < u.length + 20; d++)
				(a.b ^= u.charCodeAt(d) | 0), a.next();
		}
		function l(s, a) {
			return (a.a = s.a), (a.b = s.b), (a.c = s.c), (a.d = s.d), a;
		}
		function o(s, a) {
			var u = new i(s),
				d = a && a.state,
				c = function () {
					return (u.next() >>> 0) / 4294967296;
				};
			return (
				(c.double = function () {
					do
						var f = u.next() >>> 11,
							v = (u.next() >>> 0) / 4294967296,
							y = (f + v) / (1 << 21);
					while (y === 0);
					return y;
				}),
				(c.int32 = u.next),
				(c.quick = c),
				d &&
					(typeof d == "object" && l(d, u),
					(c.state = function () {
						return l(u, {});
					})),
				c
			);
		}
		n && n.exports ? (n.exports = o) : (this.tychei = o);
	})(hn, e);
})(ja);
var Dy = ja.exports,
	Ff = { exports: {} };
const Ay = {},
	$y = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: Ay },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Uy = Zf($y);
(function (e) {
	(function (t, n, r) {
		var i = 256,
			l = 6,
			o = 52,
			s = "random",
			a = r.pow(i, l),
			u = r.pow(2, o),
			d = u * 2,
			c = i - 1,
			f;
		function v(g, _, P) {
			var N = [];
			_ = _ == !0 ? { entropy: !0 } : _ || {};
			var T = h(C(_.entropy ? [g, m(n)] : (g ?? p()), 3), N),
				B = new y(N),
				D = function () {
					for (var Y = B.g(l), we = a, he = 0; Y < u; )
						(Y = (Y + he) * i), (we *= i), (he = B.g(1));
					for (; Y >= d; ) (Y /= 2), (we /= 2), (he >>>= 1);
					return (Y + he) / we;
				};
			return (
				(D.int32 = function () {
					return B.g(4) | 0;
				}),
				(D.quick = function () {
					return B.g(4) / 4294967296;
				}),
				(D.double = D),
				h(m(B.S), n),
				(
					_.pass ||
					P ||
					function (Y, we, he, We) {
						return (
							We &&
								(We.S && w(We, B),
								(Y.state = function () {
									return w(B, {});
								})),
							he ? ((r[s] = Y), we) : Y
						);
					}
				)(D, T, "global" in _ ? _.global : this == r, _.state)
			);
		}
		function y(g) {
			var _,
				P = g.length,
				N = this,
				T = 0,
				B = (N.i = N.j = 0),
				D = (N.S = []);
			for (P || (g = [P++]); T < i; ) D[T] = T++;
			for (T = 0; T < i; T++)
				(D[T] = D[(B = c & (B + g[T % P] + (_ = D[T])))]), (D[B] = _);
			(N.g = function (Y) {
				for (var we, he = 0, We = N.i, xn = N.j, ut = N.S; Y--; )
					(we = ut[(We = c & (We + 1))]),
						(he =
							he * i +
							ut[c & ((ut[We] = ut[(xn = c & (xn + we))]) + (ut[xn] = we))]);
				return (N.i = We), (N.j = xn), he;
			})(i);
		}
		function w(g, _) {
			return (_.i = g.i), (_.j = g.j), (_.S = g.S.slice()), _;
		}
		function C(g, _) {
			var P = [],
				N = typeof g,
				T;
			if (_ && N == "object")
				for (T in g)
					try {
						P.push(C(g[T], _ - 1));
					} catch {}
			return P.length ? P : N == "string" ? g : g + "\0";
		}
		function h(g, _) {
			for (var P = g + "", N, T = 0; T < P.length; )
				_[c & T] = c & ((N ^= _[c & T] * 19) + P.charCodeAt(T++));
			return m(_);
		}
		function p() {
			try {
				var g;
				return (
					f && (g = f.randomBytes)
						? (g = g(i))
						: ((g = new Uint8Array(i)),
							(t.crypto || t.msCrypto).getRandomValues(g)),
					m(g)
				);
			} catch {
				var _ = t.navigator,
					P = _ && _.plugins;
				return [+new Date(), t, P, t.screen, m(n)];
			}
		}
		function m(g) {
			return String.fromCharCode.apply(0, g);
		}
		if ((h(r.random(), n), e.exports)) {
			e.exports = v;
			try {
				f = Uy;
			} catch {}
		} else r["seed" + s] = v;
	})(typeof self < "u" ? self : hn, [], Math);
})(Ff);
var Fy = Ff.exports,
	Vy = Oy,
	By = Ly,
	Zy = Iy,
	Wy = zy,
	Hy = My,
	Qy = Dy,
	gn = Fy;
gn.alea = Vy;
gn.xor128 = By;
gn.xorwow = Zy;
gn.xorshift7 = Wy;
gn.xor4096 = Hy;
gn.tychei = Qy;
var Gy = gn;
const Ky = tc(Gy),
	Yy = [
		"Bear",
		"Boar",
		"Butterfly",
		"Cat",
		"Crab",
		"Dog",
		"Dove",
		"Dragon",
		"Duck",
		"Elephant",
		"Flamingo",
		"Flounder",
		"Frog",
		"Gazelle",
		"Goat",
		"Goose",
		"Hare",
		"Hedgehog",
		"Heron",
		"Horse",
		"Human",
		"Kangaroo",
		"Kiwi",
		"Langur",
		"Lion",
		"Lobster",
		"Monkey",
		"Mouse",
		"Narwhal",
		"Octopus",
		"Otter",
		"Ox",
		"Penguin",
		"Pig",
		"Pigeon",
		"Rabbit",
		"Rooster",
		"Salmon",
		"Swan",
		"Seal",
		"Sheep",
		"Sloth",
		"Snake",
		"Tiger",
		"Toad",
		"Tortoise",
		"Trout",
		"Turtle",
		"Unicorn",
		"Walrus",
		"Weasel",
		"Whale",
		"Zebra",
	],
	Xy = ["Robot", "Locomotive", "Automobile"],
	Jy = ["Cactus", "Sunflower", "Poppy", "Banana"],
	qy = ["ChristopherNolan"],
	by = ["MonopolySet"],
	Ju = Object.freeze([...new Set([...Yy, ...Xy, ...Jy, ...qy, ...by])]),
	eg = 1,
	ko = 2,
	tg = 4,
	qu = 5,
	ng = 7,
	rg = 8,
	ig = 10,
	lg = [
		"Aqua",
		"Aquamarine",
		"Azure",
		"Beige",
		"Black",
		"Blue",
		"Brown",
		"Burlywood",
		"Chartreuse",
		"Coral",
		"Cornsilk",
		"Crimson",
		"Cyan",
		"Fuchsia",
		"Gainsboro",
		"Gold",
		"Goldenrod",
		"Gray",
		"Green",
		"Honeydew",
		"Indigo",
		"Ivory",
		"Khaki",
		"Lavender",
		"Lime",
		"Magenta",
		"Maroon",
		"Moccasin",
		"Olive",
		"Orange",
		"Orchid",
		"Pink",
		"Plum",
		"Purple",
		"Red",
		"Salmon",
		"Seashell",
		"Sienna",
		"Silver",
		"Snow",
		"Tan",
		"Teal",
		"Thistle",
		"Tomato",
		"Turquoise",
		"Violet",
		"Wheat",
		"White",
		"Yellow",
	],
	og = ["Singular", "Multiple", "One", "Two", "Extra"],
	sg = ["Big", "Small", "Huge", "Little", "Colossal", "Tiny"],
	ag = [
		"Hardy",
		"Lonely",
		"Adamant",
		"Naughty",
		"Brave",
		"Bold",
		"Docile",
		"Impish",
		"Lax",
		"Relaxed",
		"Modest",
		"Mild",
		"Bashful",
		"Rash",
		"Quiet",
		"Calm",
		"Gentle",
		"Careful",
		"Quirky",
		"Sassy",
		"Timid",
		"Hasty",
		"Jolly",
		"Naive",
		"Serious",
	],
	ug = ["Brutal", "Kind", "Nippy", "Savage"],
	cg = ["Old", "Young", "Elder", "Adolescent"],
	dg = ["Quick", "Slow", "Fast", "Sluggish"],
	fg = [
		"Water",
		"Earthen",
		"Wooden",
		"Fire",
		"Iron",
		"Steel",
		"Copper",
		"Gold",
		"Silver",
		"Bronze",
		"Aluminium",
		"Linen",
	],
	pg = ["Solid", "Hard", "Squishy"],
	hg = ["Poisonous", "Venomous"],
	mg = Object.freeze(
		[
			...lg.map((e) => ({
				value: e,
				type: "colour",
				order: rg,
				allowMultiple: !1,
			})),
			...og.map((e) => ({
				value: e,
				type: "count",
				order: eg,
				allowMultiple: !1,
			})),
			...sg.map((e) => ({
				value: e,
				type: "size",
				order: tg,
				allowMultiple: !1,
			})),
			...ag.map((e) => ({
				value: e,
				type: "nature",
				order: ko,
				allowMultiple: !1,
			})),
			...ug.map((e) => ({
				value: e,
				type: "general_opinion",
				order: ko,
				allowMultiple: !0,
			})),
			...cg.map((e) => ({
				value: e,
				type: "age",
				order: ng,
				allowMultiple: !1,
			})),
			...dg.map((e) => ({
				value: e,
				type: "speed",
				order: ko,
				allowMultiple: !1,
			})),
			...fg.map((e) => ({
				value: e,
				type: "material",
				order: ig,
				allowMultiple: !1,
			})),
			...pg.map((e) => ({
				value: e,
				type: "physical_quality",
				order: qu,
				allowMultiple: !1,
			})),
			...hg.map((e) => ({
				value: e,
				type: "physical_quality_b",
				order: qu,
				allowMultiple: !0,
			})),
		].map((e) => Object.freeze(e)),
	),
	vg = 2,
	Vf = (e, t = 2) => {
		const n = Ky(e),
			r = Math.floor(Ju.length * n()),
			i = Ju[r],
			l = [],
			o = [];
		for (let s = 0; s < t; s++) {
			const a = mg.filter((d) => {
					const { type: c, value: f } = d;
					return !o.includes(c) && !l.map((v) => v.value).includes(f);
				}),
				u = Math.floor(a.length * n());
			a[u].allowMultiple || o.push(a[u].type), l.push(a[u]);
		}
		return [
			...l.sort((s, a) => s.order - a.order).map(({ value: s }) => s),
			i,
		].join("");
	},
	yg = (e, t, n = !1) => (t && n ? t : Vf(e, vg)),
	jg = (e, t, n, r) =>
		e.reduce(
			(i, { id: l, name: o }) => i.replaceAll(`%${l}%`, yg(l, o, t || l === n)),
			r,
		),
	bu = "NICK_NAME_GEN_STORE";
function gg() {
	const [e, t] = k.useState([]),
		[n, r] = k.useState(""),
		[i, l] = k.useState(Date.now().toString()),
		[o, s] = k.useState(2),
		a = Vf(i, o),
		u = k.useCallback(
			(d) => {
				localStorage.setItem(
					bu,
					JSON.stringify({ namePrefixes: e, adjectiveCount: o, ...d }),
				);
			},
			[e.join(""), o],
		);
	return (
		k.useEffect(() => {
			try {
				const d = localStorage.getItem(bu);
				if (typeof d == "string") {
					const c = JSON.parse(d);
					t((f) => (c == null ? void 0 : c.namePrefixes) || f),
						s((f) => (c == null ? void 0 : c.adjectiveCount) || f),
						r(
							(f) =>
								f ||
								(c == null
									? void 0
									: c.namePrefixes.join(`
`)),
						);
				}
			} catch {}
		}, []),
		x.jsxs("div", {
			className: "left-0 right-0 mx-auto max-w-prose",
			children: [
				x.jsx("textarea", {
					className:
						"mb-2 block resize-none rounded border border-gray-400 bg-white px-0.5 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
					spellCheck: !1,
					value: n,
					onChange: (d) => {
						r(d.target.value);
						const c = d.target.value
							.split(
								`
`,
							)
							.map((f) => f.trim())
							.filter((f) => f);
						t(c), u({ namePrefixes: c });
					},
				}),
				x.jsxs("label", {
					className: "block",
					children: [
						"Adjective Count ",
						x.jsx("input", {
							className:
								"rounded border border-gray-200 bg-white px-0.5 text-right text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
							type: "number",
							value: o,
							onChange: (d) => {
								const c = parseInt(d.target.value, 10) || 0;
								u({ adjectiveCount: c }), s(c);
							},
						}),
					],
				}),
				x.jsx("button", {
					className: "button-default",
					onClick: () => {
						l(Date.now().toString());
					},
					children: "Randomise",
				}),
				x.jsx("ul", {
					className: "ml-5 mt-2 list-disc",
					children: ["", ...e].map((d, c) => {
						const f = `${d}${a}`;
						return x.jsxs(
							"li",
							{
								children: [
									f,
									" (",
									f.length,
									") ",
									x.jsx("button", {
										className: "button-default",
										onClick: () => {
											navigator.clipboard.writeText(f);
										},
										children: "Copy",
									}),
								],
							},
							`${d}-${c}`,
						);
					}),
				}),
			],
		})
	);
}
const Cs = {
		"🎲": [1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 0, 0, 0, 0, 0, 0],
		"🎲➕🛍️": [
			0.3055555556, 0.3055555556, 0.3055555556, 0.3055555556, 0.3055555556,
			0.3055555556, 0, 0, 0, 0, 0, 0,
		],
		"🎲➖🛍️": [
			1 / 36,
			1 / 36,
			1 / 36,
			1 / 36,
			1 / 36,
			1 / 36,
			0,
			0,
			0,
			0,
			0,
			0,
		],
		"🎲🎲": [
			0,
			1 / 36,
			2 / 36,
			3 / 36,
			4 / 36,
			5 / 36,
			1 / 6,
			5 / 36,
			4 / 36,
			3 / 36,
			2 / 36,
			1 / 36,
		],
		"🎲🎲➕🛍️": [
			0, 0.05478395062, 0.1080246914, 0.1597222222, 0.2098765432, 0.2584876543,
			0.3055555556, 0.2584876543, 0.2098765432, 0.1597222222, 0.1080246914,
			0.05478395062,
		],
		"🎲🎲➖🛍️": [
			0, 0.003001281245, 0.01166933394, 0.02551118827, 0.04404816339,
			0.06681586744, 0.09336419753, 0.06681586744, 0.04404816339, 0.02551118827,
			0.01166933394, 0.003001281245,
		],
	},
	xg = new Array(12).fill(0).map((e, t) => t + 1);
function So(e, t) {
	if (!e) return 0;
	let n = 0;
	return (
		e.includes("🎲🎲")
			? (n = t.reduce((r, i) => r + Cs["🎲🎲"][i], 0))
			: (n = t.reduce((r, i) => r + Cs["🎲"][i], 0)),
		e.includes("➕") ? 1 - (1 - n) * (1 - n) : e.includes("➖") ? n * n : n
	);
}
function wg() {
	const [e, t] = k.useState(null),
		[n, r] = k.useState([]),
		i = So(e, n);
	return x.jsxs("div", {
		className: "px-2",
		children: [
			x.jsx("h2", { children: "Probability" }),
			x.jsx("p", {
				className: "max-w-prose",
				children:
					"This table has the probability of getting each dice roll total.",
			}),
			x.jsx("p", {
				className: "max-w-prose",
				children:
					"To show the probability of getting one of a number of dice roll totals, click on the columns.",
			}),
			x.jsx("p", {
				className: "max-w-prose",
				children: "🎲: The number of dice rolled.",
			}),
			x.jsx("p", {
				className: "max-w-prose",
				children:
					"➕🛍️: If the first dice roll was one of the selected totals, keep the result. If the first dice roll wasn't one of the selected totals, use the Shopping Mall re-roll.",
			}),
			x.jsx("p", {
				className: "max-w-prose",
				children:
					"➖🛍️: If the first dice roll was one of the selected totals, use the Shopping Mall re-roll. If the first dice roll wasn't one of the selected totals, keep the result.",
			}),
			x.jsx("button", {
				className: "button-default",
				onClick: () => {
					r([]), t(null);
				},
				children: "Reset",
			}),
			x.jsxs("table", {
				className: "my-2",
				children: [
					x.jsx("thead", {
						children: x.jsxs("tr", {
							children: [
								x.jsx("th", {
									className: "border-default px-2",
									children:
										i > 0
											? x.jsx("button", {
													className: "w-full",
													onClick: () => {
														r([]), t(null);
													},
													children: i.toFixed(3),
												})
											: null,
								}),
								xg.map((l, o) =>
									x.jsx(
										"th",
										{
											className: `border-default ${n.includes(o) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
											children: x.jsx("button", {
												className: "px-2 w-full ",
												onClick: () => {
													r((s) =>
														s.includes(o)
															? s.filter((a) => a !== o)
															: [...s, o],
													);
												},
												children: l,
											}),
										},
										l,
									),
								),
								x.jsx("th", {
									className: "border-default px-2",
									children: "Total",
								}),
							],
						}),
					}),
					x.jsx("tbody", {
						children: Object.entries(Cs).map(([l, o]) =>
							x.jsxs(
								"tr",
								{
									className: "dark:odd:bg-gray-700 odd:bg-gray-100",
									children: [
										x.jsx("td", {
											className: "border-default text-left px-2",
											children: l,
										}),
										o.map((s, a) =>
											x.jsx(
												"td",
												{
													className: `border-default ${n.includes(a) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
													children:
														s > 0 &&
														x.jsx("button", {
															className: "px-2 w-full ",
															onClick: () => {
																r((u) =>
																	u.includes(a)
																		? u.filter((d) => d !== a)
																		: [...u, a],
																);
															},
															children: s.toFixed(3),
														}),
												},
												a,
											),
										),
										x.jsx("td", {
											className: "border-default text-left px-2",
											children: x.jsx("span", {
												className: So(l, n) > 0 ? "" : "opacity-0",
												children: So(l, n).toFixed(3),
											}),
										}),
									],
								},
								l,
							),
						),
					}),
				],
			}),
		],
	});
}
const _g = k.lazy(() =>
		Sa(() => import("./index-EFHipYG0.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
	),
	kg = k.lazy(() => Sa(() => import("./index-BSL34-_J.js"), [])),
	Sg = k.lazy(() =>
		Sa(
			() => import("./index-CG3tvbBJ.js"),
			__vite__mapDeps([5, 1, 2, 3, 6, 7, 8, 9, 4, 10]),
		),
	),
	ec = (e) => {
		e === "dark" ||
		(e === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};
function Eg() {
	const { options: e } = Zl();
	return (
		k.useEffect(() => {
			ec(e.darkMode);
		}, [e.darkMode]),
		k.useEffect(() => {
			const t = window.matchMedia("(prefers-color-scheme: dark)"),
				n = () => {
					ec(e.darkMode);
				};
			return (
				t.addEventListener("change", n),
				() => {
					t.removeEventListener("change", n);
				}
			);
		}, []),
		x.jsx(k.Suspense, {
			fallback: x.jsx(Uf, {}),
			children: x.jsxs("div", {
				className: "absolute bottom-0 left-0 right-0 top-0",
				children: [
					x.jsx(Ry, {}),
					x.jsx("div", {
						className: "h-full pt-10",
						children: x.jsxs(lv, {
							children: [
								x.jsx(_n, { path: "/", element: x.jsx(_g, {}) }),
								x.jsx(_n, { path: "/dev/*", element: x.jsx(kg, {}) }),
								x.jsx(_n, { path: "/game/:id", element: x.jsx(Sg, {}) }),
								x.jsx(_n, { path: "/name-generator", element: x.jsx(gg, {}) }),
								x.jsx(_n, { path: "/probability", element: x.jsx(wg, {}) }),
							],
						}),
					}),
				],
			}),
		})
	);
}
const Cg = Eo.createRoot(document.getElementById("root"));
Cg.render(
	x.jsx(k.StrictMode, {
		children: x.jsx(pv, {
			children: x.jsx(xv, { children: x.jsx(Ey, { children: x.jsx(Eg, {}) }) }),
		}),
	}),
);
export {
	vv as L,
	lv as R,
	Sa as _,
	Sf as a,
	_n as b,
	Ng as c,
	jg as d,
	Tg as e,
	Uf as f,
	yg as g,
	Pg as i,
	x as j,
	k as r,
	Zl as u,
	ky as z,
};
