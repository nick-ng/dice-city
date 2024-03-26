function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = [
			"assets/index-BwpJ4GBE.js",
			"assets/message-CMLPid00.js",
			"assets/utils-BPyf_07k.js",
			"assets/game-C_aYHwkw.js",
			"assets/index-CAC56_9l.js",
			"assets/index-CO2PKRcP.js",
			"assets/business-centre-BJdCwZwI.js",
			"assets/index-BlHTT1_o.js",
			"assets/index-mSlpGTah.js",
			"assets/build-DDdIQvre.js",
			"assets/index-CkdE4I5c.js",
		];
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
function zf(e, t) {
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
var pn =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
			? window
			: typeof global < "u"
				? global
				: typeof self < "u"
					? self
					: {};
function Gu(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
function Mf(e) {
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
var Yu = { exports: {} },
	_l = {},
	Xu = { exports: {} },
	V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qr = Symbol.for("react.element"),
	Df = Symbol.for("react.portal"),
	Af = Symbol.for("react.fragment"),
	Uf = Symbol.for("react.strict_mode"),
	$f = Symbol.for("react.profiler"),
	Ff = Symbol.for("react.provider"),
	Vf = Symbol.for("react.context"),
	Bf = Symbol.for("react.forward_ref"),
	Zf = Symbol.for("react.suspense"),
	Wf = Symbol.for("react.memo"),
	Hf = Symbol.for("react.lazy"),
	Sa = Symbol.iterator;
function Qf(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Sa && e[Sa]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var Ju = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	qu = Object.assign,
	bu = {};
function Yn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = bu),
		(this.updater = n || Ju);
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
Yn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ec() {}
ec.prototype = Yn.prototype;
function ws(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = bu),
		(this.updater = n || Ju);
}
var _s = (ws.prototype = new ec());
_s.constructor = ws;
qu(_s, Yn.prototype);
_s.isPureReactComponent = !0;
var Ea = Array.isArray,
	tc = Object.prototype.hasOwnProperty,
	ks = { current: null },
	nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function rc(e, t, n) {
	var r,
		i = {},
		l = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (l = "" + t.key),
		t))
			tc.call(t, r) && !nc.hasOwnProperty(r) && (i[r] = t[r]);
	var s = arguments.length - 2;
	if (s === 1) i.children = n;
	else if (1 < s) {
		for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
		i.children = a;
	}
	if (e && e.defaultProps)
		for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
	return {
		$$typeof: qr,
		type: e,
		key: l,
		ref: o,
		props: i,
		_owner: ks.current,
	};
}
function Kf(e, t) {
	return {
		$$typeof: qr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Ss(e) {
	return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function Gf(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Ca = /\/+/g;
function Bl(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? Gf("" + e.key)
		: t.toString(36);
}
function Ci(e, t, n, r, i) {
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
					case qr:
					case Df:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(i = i(o)),
			(e = r === "" ? "." + Bl(o, 0) : r),
			Ea(i)
				? ((n = ""),
					e != null && (n = e.replace(Ca, "$&/") + "/"),
					Ci(i, t, n, "", function (u) {
						return u;
					}))
				: i != null &&
					(Ss(i) &&
						(i = Kf(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ""
									: ("" + i.key).replace(Ca, "$&/") + "/") +
								e,
						)),
					t.push(i)),
			1
		);
	if (((o = 0), (r = r === "" ? "." : r + ":"), Ea(e)))
		for (var s = 0; s < e.length; s++) {
			l = e[s];
			var a = r + Bl(l, s);
			o += Ci(l, t, n, a, i);
		}
	else if (((a = Qf(e)), typeof a == "function"))
		for (e = a.call(e), s = 0; !(l = e.next()).done; )
			(l = l.value), (a = r + Bl(l, s++)), (o += Ci(l, t, n, a, i));
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
function ai(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Ci(e, r, "", "", function (l) {
			return t.call(n, l, i++);
		}),
		r
	);
}
function Yf(e) {
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
	Ni = { transition: null },
	Xf = {
		ReactCurrentDispatcher: Ee,
		ReactCurrentBatchConfig: Ni,
		ReactCurrentOwner: ks,
	};
V.Children = {
	map: ai,
	forEach: function (e, t, n) {
		ai(
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
			ai(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			ai(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Ss(e))
			throw Error(
				"React.Children.only expected to receive a single React element child.",
			);
		return e;
	},
};
V.Component = Yn;
V.Fragment = Af;
V.Profiler = $f;
V.PureComponent = ws;
V.StrictMode = Uf;
V.Suspense = Zf;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
V.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				".",
		);
	var r = qu({}, e.props),
		i = e.key,
		l = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((l = t.ref), (o = ks.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var s = e.type.defaultProps;
		for (a in t)
			tc.call(t, a) &&
				!nc.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		s = Array(a);
		for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
		r.children = s;
	}
	return { $$typeof: qr, type: e.type, key: i, ref: l, props: r, _owner: o };
};
V.createContext = function (e) {
	return (
		(e = {
			$$typeof: Vf,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Ff, _context: e }),
		(e.Consumer = e)
	);
};
V.createElement = rc;
V.createFactory = function (e) {
	var t = rc.bind(null, e);
	return (t.type = e), t;
};
V.createRef = function () {
	return { current: null };
};
V.forwardRef = function (e) {
	return { $$typeof: Bf, render: e };
};
V.isValidElement = Ss;
V.lazy = function (e) {
	return { $$typeof: Hf, _payload: { _status: -1, _result: e }, _init: Yf };
};
V.memo = function (e, t) {
	return { $$typeof: Wf, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
	var t = Ni.transition;
	Ni.transition = {};
	try {
		e();
	} finally {
		Ni.transition = t;
	}
};
V.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
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
V.version = "18.2.0";
Xu.exports = V;
var S = Xu.exports;
const Jf = Gu(S),
	qf = zf({ __proto__: null, default: Jf }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bf = S,
	ep = Symbol.for("react.element"),
	tp = Symbol.for("react.fragment"),
	np = Object.prototype.hasOwnProperty,
	rp = bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
	var r,
		i = {},
		l = null,
		o = null;
	n !== void 0 && (l = "" + n),
		t.key !== void 0 && (l = "" + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) np.call(t, r) && !ip.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: ep,
		type: e,
		key: l,
		ref: o,
		props: i,
		_owner: rp.current,
	};
}
_l.Fragment = tp;
_l.jsx = ic;
_l.jsxs = ic;
Yu.exports = _l;
var k = Yu.exports,
	xo = {},
	lc = { exports: {} },
	Me = {},
	oc = { exports: {} },
	sc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(L, U) {
		var F = L.length;
		L.push(U);
		e: for (; 0 < F; ) {
			var ne = (F - 1) >>> 1,
				ae = L[ne];
			if (0 < i(ae, U)) (L[ne] = U), (L[F] = ae), (F = ne);
			else break e;
		}
	}
	function n(L) {
		return L.length === 0 ? null : L[0];
	}
	function r(L) {
		if (L.length === 0) return null;
		var U = L[0],
			F = L.pop();
		if (F !== U) {
			L[0] = F;
			e: for (var ne = 0, ae = L.length, oi = ae >>> 1; ne < oi; ) {
				var Gt = 2 * (ne + 1) - 1,
					Vl = L[Gt],
					Yt = Gt + 1,
					si = L[Yt];
				if (0 > i(Vl, F))
					Yt < ae && 0 > i(si, Vl)
						? ((L[ne] = si), (L[Yt] = F), (ne = Yt))
						: ((L[ne] = Vl), (L[Gt] = F), (ne = Gt));
				else if (Yt < ae && 0 > i(si, F)) (L[ne] = si), (L[Yt] = F), (ne = Yt);
				else break e;
			}
		}
		return U;
	}
	function i(L, U) {
		var F = L.sortIndex - U.sortIndex;
		return F !== 0 ? F : L.id - U.id;
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
		x = !1,
		C = typeof setTimeout == "function" ? setTimeout : null,
		h = typeof clearTimeout == "function" ? clearTimeout : null,
		p = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function m(L) {
		for (var U = n(u); U !== null; ) {
			if (U.callback === null) r(u);
			else if (U.startTime <= L)
				r(u), (U.sortIndex = U.expirationTime), t(a, U);
			else break;
			U = n(u);
		}
	}
	function g(L) {
		if (((x = !1), m(L), !y))
			if (n(a) !== null) (y = !0), at(w);
			else {
				var U = n(u);
				U !== null && Fl(g, U.startTime - L);
			}
	}
	function w(L, U) {
		(y = !1), x && ((x = !1), h(T), (T = -1)), (v = !0);
		var F = f;
		try {
			for (
				m(U), c = n(a);
				c !== null && (!(c.expirationTime > U) || (L && !Y()));

			) {
				var ne = c.callback;
				if (typeof ne == "function") {
					(c.callback = null), (f = c.priorityLevel);
					var ae = ne(c.expirationTime <= U);
					(U = e.unstable_now()),
						typeof ae == "function" ? (c.callback = ae) : c === n(a) && r(a),
						m(U);
				} else r(a);
				c = n(a);
			}
			if (c !== null) var oi = !0;
			else {
				var Gt = n(u);
				Gt !== null && Fl(g, Gt.startTime - U), (oi = !1);
			}
			return oi;
		} finally {
			(c = null), (f = F), (v = !1);
		}
	}
	var P = !1,
		N = null,
		T = -1,
		B = 5,
		M = -1;
	function Y() {
		return !(e.unstable_now() - M < B);
	}
	function we() {
		if (N !== null) {
			var L = e.unstable_now();
			M = L;
			var U = !0;
			try {
				U = N(!0, L);
			} finally {
				U ? he() : ((P = !1), (N = null));
			}
		} else P = !1;
	}
	var he;
	if (typeof p == "function")
		he = function () {
			p(we);
		};
	else if (typeof MessageChannel < "u") {
		var Ze = new MessageChannel(),
			gn = Ze.port2;
		(Ze.port1.onmessage = we),
			(he = function () {
				gn.postMessage(null);
			});
	} else
		he = function () {
			C(we, 0);
		};
	function at(L) {
		(N = L), P || ((P = !0), he());
	}
	function Fl(L, U) {
		T = C(function () {
			L(e.unstable_now());
		}, U);
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
			y || v || ((y = !0), at(w));
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
					var U = 3;
					break;
				default:
					U = f;
			}
			var F = f;
			f = U;
			try {
				return L();
			} finally {
				f = F;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (L, U) {
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
				return U();
			} finally {
				f = F;
			}
		}),
		(e.unstable_scheduleCallback = function (L, U, F) {
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
					callback: U,
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
							(x ? (h(T), (T = -1)) : (x = !0), Fl(g, F - ne)))
					: ((L.sortIndex = ae), t(a, L), y || v || ((y = !0), at(w))),
				L
			);
		}),
		(e.unstable_shouldYield = Y),
		(e.unstable_wrapCallback = function (L) {
			var U = f;
			return function () {
				var F = f;
				f = U;
				try {
					return L.apply(this, arguments);
				} finally {
					f = F;
				}
			};
		});
})(sc);
oc.exports = sc;
var lp = oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac = S,
	ze = lp;
function _(e) {
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
var uc = new Set(),
	_r = {};
function hn(e, t) {
	Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
	for (_r[e] = t, e = 0; e < t.length; e++) uc.add(t[e]);
}
var mt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	wo = Object.prototype.hasOwnProperty,
	op =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Na = {},
	Ta = {};
function sp(e) {
	return wo.call(Ta, e)
		? !0
		: wo.call(Na, e)
			? !1
			: op.test(e)
				? (Ta[e] = !0)
				: ((Na[e] = !0), !1);
}
function ap(e, t, n, r) {
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
function up(e, t, n, r) {
	if (t === null || typeof t > "u" || ap(e, t, n, r)) return !0;
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
var Es = /[\-:]([a-z])/g;
function Cs(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Es, Cs);
		pe[t] = new Ce(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Es, Cs);
		pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Es, Cs);
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
function Ns(e, t, n, r) {
	var i = pe.hasOwnProperty(t) ? pe[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
			!(2 < t.length) ||
			(t[0] !== "o" && t[0] !== "O") ||
			(t[1] !== "n" && t[1] !== "N")) &&
		(up(t, n, i, r) && (n = null),
		r || i === null
			? sp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var wt = ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ui = Symbol.for("react.element"),
	_n = Symbol.for("react.portal"),
	kn = Symbol.for("react.fragment"),
	Ts = Symbol.for("react.strict_mode"),
	_o = Symbol.for("react.profiler"),
	cc = Symbol.for("react.provider"),
	dc = Symbol.for("react.context"),
	Ps = Symbol.for("react.forward_ref"),
	ko = Symbol.for("react.suspense"),
	So = Symbol.for("react.suspense_list"),
	js = Symbol.for("react.memo"),
	kt = Symbol.for("react.lazy"),
	fc = Symbol.for("react.offscreen"),
	Pa = Symbol.iterator;
function bn(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Pa && e[Pa]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var ee = Object.assign,
	Zl;
function sr(e) {
	if (Zl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Zl = (t && t[1]) || "";
		}
	return (
		`
` +
		Zl +
		e
	);
}
var Wl = !1;
function Hl(e, t) {
	if (!e || Wl) return "";
	Wl = !0;
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
		(Wl = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function cp(e) {
	switch (e.tag) {
		case 5:
			return sr(e.type);
		case 16:
			return sr("Lazy");
		case 13:
			return sr("Suspense");
		case 19:
			return sr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Hl(e.type, !1)), e;
		case 11:
			return (e = Hl(e.type.render, !1)), e;
		case 1:
			return (e = Hl(e.type, !0)), e;
		default:
			return "";
	}
}
function Eo(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case kn:
			return "Fragment";
		case _n:
			return "Portal";
		case _o:
			return "Profiler";
		case Ts:
			return "StrictMode";
		case ko:
			return "Suspense";
		case So:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case dc:
				return (e.displayName || "Context") + ".Consumer";
			case cc:
				return (e._context.displayName || "Context") + ".Provider";
			case Ps:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case js:
				return (
					(t = e.displayName || null), t !== null ? t : Eo(e.type) || "Memo"
				);
			case kt:
				(t = e._payload), (e = e._init);
				try {
					return Eo(e(t));
				} catch {}
		}
	return null;
}
function dp(e) {
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
			return Eo(t);
		case 8:
			return t === Ts ? "StrictMode" : "Mode";
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
function $t(e) {
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
function pc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function fp(e) {
	var t = pc(e) ? "checked" : "value",
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
function ci(e) {
	e._valueTracker || (e._valueTracker = fp(e));
}
function hc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = pc(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function $i(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Co(e, t) {
	var n = t.checked;
	return ee({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function ja(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = $t(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function mc(e, t) {
	(t = t.checked), t != null && Ns(e, "checked", t, !1);
}
function No(e, t) {
	mc(e, t);
	var n = $t(t.value),
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
		? To(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && To(e, t.type, $t(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Ra(e, t, n) {
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
function To(e, t, n) {
	(t !== "number" || $i(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ar = Array.isArray;
function In(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function Po(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
	return ee({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Oa(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(_(92));
			if (ar(n)) {
				if (1 < n.length) throw Error(_(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: $t(n) };
}
function vc(e, t) {
	var n = $t(t.value),
		r = $t(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function La(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yc(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function jo(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? yc(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
			? "http://www.w3.org/1999/xhtml"
			: e;
}
var di,
	gc = (function (e) {
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
				di = di || document.createElement("div"),
					di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = di.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function kr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var fr = {
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
	pp = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function (e) {
	pp.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fr[t] = fr[e]);
	});
});
function xc(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (fr.hasOwnProperty(e) && fr[e])
			? ("" + t).trim()
			: t + "px";
}
function wc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = xc(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var hp = ee(
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
function Ro(e, t) {
	if (t) {
		if (hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(_(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(_(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(_(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(_(62));
	}
}
function Oo(e, t) {
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
var Lo = null;
function Rs(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Io = null,
	zn = null,
	Mn = null;
function Ia(e) {
	if ((e = ti(e))) {
		if (typeof Io != "function") throw Error(_(280));
		var t = e.stateNode;
		t && ((t = Nl(t)), Io(e.stateNode, e.type, t));
	}
}
function _c(e) {
	zn ? (Mn ? Mn.push(e) : (Mn = [e])) : (zn = e);
}
function kc() {
	if (zn) {
		var e = zn,
			t = Mn;
		if (((Mn = zn = null), Ia(e), t)) for (e = 0; e < t.length; e++) Ia(t[e]);
	}
}
function Sc(e, t) {
	return e(t);
}
function Ec() {}
var Ql = !1;
function Cc(e, t, n) {
	if (Ql) return e(t, n);
	Ql = !0;
	try {
		return Sc(e, t, n);
	} finally {
		(Ql = !1), (zn !== null || Mn !== null) && (Ec(), kc());
	}
}
function Sr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Nl(n);
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
	if (n && typeof n != "function") throw Error(_(231, t, typeof n));
	return n;
}
var zo = !1;
if (mt)
	try {
		var er = {};
		Object.defineProperty(er, "passive", {
			get: function () {
				zo = !0;
			},
		}),
			window.addEventListener("test", er, er),
			window.removeEventListener("test", er, er);
	} catch {
		zo = !1;
	}
function mp(e, t, n, r, i, l, o, s, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (d) {
		this.onError(d);
	}
}
var pr = !1,
	Fi = null,
	Vi = !1,
	Mo = null,
	vp = {
		onError: function (e) {
			(pr = !0), (Fi = e);
		},
	};
function yp(e, t, n, r, i, l, o, s, a) {
	(pr = !1), (Fi = null), mp.apply(vp, arguments);
}
function gp(e, t, n, r, i, l, o, s, a) {
	if ((yp.apply(this, arguments), pr)) {
		if (pr) {
			var u = Fi;
			(pr = !1), (Fi = null);
		} else throw Error(_(198));
		Vi || ((Vi = !0), (Mo = u));
	}
}
function mn(e) {
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
function Nc(e) {
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
function za(e) {
	if (mn(e) !== e) throw Error(_(188));
}
function xp(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = mn(e)), t === null)) throw Error(_(188));
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
				if (l === n) return za(i), e;
				if (l === r) return za(i), t;
				l = l.sibling;
			}
			throw Error(_(188));
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
				if (!o) throw Error(_(189));
			}
		}
		if (n.alternate !== r) throw Error(_(190));
	}
	if (n.tag !== 3) throw Error(_(188));
	return n.stateNode.current === n ? e : t;
}
function Tc(e) {
	return (e = xp(e)), e !== null ? Pc(e) : null;
}
function Pc(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Pc(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var jc = ze.unstable_scheduleCallback,
	Ma = ze.unstable_cancelCallback,
	wp = ze.unstable_shouldYield,
	_p = ze.unstable_requestPaint,
	re = ze.unstable_now,
	kp = ze.unstable_getCurrentPriorityLevel,
	Os = ze.unstable_ImmediatePriority,
	Rc = ze.unstable_UserBlockingPriority,
	Bi = ze.unstable_NormalPriority,
	Sp = ze.unstable_LowPriority,
	Oc = ze.unstable_IdlePriority,
	kl = null,
	it = null;
function Ep(e) {
	if (it && typeof it.onCommitFiberRoot == "function")
		try {
			it.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Tp,
	Cp = Math.log,
	Np = Math.LN2;
function Tp(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Cp(e) / Np) | 0)) | 0;
}
var fi = 64,
	pi = 4194304;
function ur(e) {
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
function Zi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		l = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var s = o & ~i;
		s !== 0 ? (r = ur(s)) : ((l &= o), l !== 0 && (r = ur(l)));
	} else (o = n & ~i), o !== 0 ? (r = ur(o)) : l !== 0 && (r = ur(l));
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
			(n = 31 - Ye(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function Pp(e, t) {
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
function jp(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			l = e.pendingLanes;
		0 < l;

	) {
		var o = 31 - Ye(l),
			s = 1 << o,
			a = i[o];
		a === -1
			? (!(s & n) || s & r) && (i[o] = Pp(s, t))
			: a <= t && (e.expiredLanes |= s),
			(l &= ~s);
	}
}
function Do(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Lc() {
	var e = fi;
	return (fi <<= 1), !(fi & 4194240) && (fi = 64), e;
}
function Kl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function br(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Ye(t)),
		(e[t] = n);
}
function Rp(e, t) {
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
		var i = 31 - Ye(n),
			l = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
	}
}
function Ls(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Ye(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var H = 0;
function Ic(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zc,
	Is,
	Mc,
	Dc,
	Ac,
	Ao = !1,
	hi = [],
	Rt = null,
	Ot = null,
	Lt = null,
	Er = new Map(),
	Cr = new Map(),
	Et = [],
	Op =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" ",
		);
function Da(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Rt = null;
			break;
		case "dragenter":
		case "dragleave":
			Ot = null;
			break;
		case "mouseover":
		case "mouseout":
			Lt = null;
			break;
		case "pointerover":
		case "pointerout":
			Er.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Cr.delete(t.pointerId);
	}
}
function tr(e, t, n, r, i, l) {
	return e === null || e.nativeEvent !== l
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: l,
				targetContainers: [i],
			}),
			t !== null && ((t = ti(t)), t !== null && Is(t)),
			e)
		: ((e.eventSystemFlags |= r),
			(t = e.targetContainers),
			i !== null && t.indexOf(i) === -1 && t.push(i),
			e);
}
function Lp(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (Rt = tr(Rt, e, t, n, r, i)), !0;
		case "dragenter":
			return (Ot = tr(Ot, e, t, n, r, i)), !0;
		case "mouseover":
			return (Lt = tr(Lt, e, t, n, r, i)), !0;
		case "pointerover":
			var l = i.pointerId;
			return Er.set(l, tr(Er.get(l) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(l = i.pointerId), Cr.set(l, tr(Cr.get(l) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function Uc(e) {
	var t = qt(e.target);
	if (t !== null) {
		var n = mn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Nc(n)), t !== null)) {
					(e.blockedOn = t),
						Ac(e.priority, function () {
							Mc(n);
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
function Ti(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Lo = r), n.target.dispatchEvent(r), (Lo = null);
		} else return (t = ti(n)), t !== null && Is(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Aa(e, t, n) {
	Ti(e) && n.delete(t);
}
function Ip() {
	(Ao = !1),
		Rt !== null && Ti(Rt) && (Rt = null),
		Ot !== null && Ti(Ot) && (Ot = null),
		Lt !== null && Ti(Lt) && (Lt = null),
		Er.forEach(Aa),
		Cr.forEach(Aa);
}
function nr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Ao ||
			((Ao = !0),
			ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Ip)));
}
function Nr(e) {
	function t(i) {
		return nr(i, e);
	}
	if (0 < hi.length) {
		nr(hi[0], e);
		for (var n = 1; n < hi.length; n++) {
			var r = hi[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Rt !== null && nr(Rt, e),
			Ot !== null && nr(Ot, e),
			Lt !== null && nr(Lt, e),
			Er.forEach(t),
			Cr.forEach(t),
			n = 0;
		n < Et.length;
		n++
	)
		(r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
		Uc(n), n.blockedOn === null && Et.shift();
}
var Dn = wt.ReactCurrentBatchConfig,
	Wi = !0;
function zp(e, t, n, r) {
	var i = H,
		l = Dn.transition;
	Dn.transition = null;
	try {
		(H = 1), zs(e, t, n, r);
	} finally {
		(H = i), (Dn.transition = l);
	}
}
function Mp(e, t, n, r) {
	var i = H,
		l = Dn.transition;
	Dn.transition = null;
	try {
		(H = 4), zs(e, t, n, r);
	} finally {
		(H = i), (Dn.transition = l);
	}
}
function zs(e, t, n, r) {
	if (Wi) {
		var i = Uo(e, t, n, r);
		if (i === null) ro(e, t, r, Hi, n), Da(e, r);
		else if (Lp(i, e, t, n, r)) r.stopPropagation();
		else if ((Da(e, r), t & 4 && -1 < Op.indexOf(e))) {
			for (; i !== null; ) {
				var l = ti(i);
				if (
					(l !== null && zc(l),
					(l = Uo(e, t, n, r)),
					l === null && ro(e, t, r, Hi, n),
					l === i)
				)
					break;
				i = l;
			}
			i !== null && r.stopPropagation();
		} else ro(e, t, r, null, n);
	}
}
var Hi = null;
function Uo(e, t, n, r) {
	if (((Hi = null), (e = Rs(r)), (e = qt(e)), e !== null))
		if (((t = mn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Nc(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Hi = e), null;
}
function $c(e) {
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
			switch (kp()) {
				case Os:
					return 1;
				case Rc:
					return 4;
				case Bi:
				case Sp:
					return 16;
				case Oc:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Tt = null,
	Ms = null,
	Pi = null;
function Fc() {
	if (Pi) return Pi;
	var e,
		t = Ms,
		n = t.length,
		r,
		i = "value" in Tt ? Tt.value : Tt.textContent,
		l = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
	return (Pi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ji(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function mi() {
	return !0;
}
function Ua() {
	return !1;
}
function De(e) {
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
				? mi
				: Ua),
			(this.isPropagationStopped = Ua),
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
					(this.isDefaultPrevented = mi));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = mi));
			},
			persist: function () {},
			isPersistent: mi,
		}),
		t
	);
}
var Xn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Ds = De(Xn),
	ei = ee({}, Xn, { view: 0, detail: 0 }),
	Dp = De(ei),
	Gl,
	Yl,
	rr,
	Sl = ee({}, ei, {
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
		getModifierState: As,
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
				: (e !== rr &&
						(rr && e.type === "mousemove"
							? ((Gl = e.screenX - rr.screenX), (Yl = e.screenY - rr.screenY))
							: (Yl = Gl = 0),
						(rr = e)),
					Gl);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Yl;
		},
	}),
	$a = De(Sl),
	Ap = ee({}, Sl, { dataTransfer: 0 }),
	Up = De(Ap),
	$p = ee({}, ei, { relatedTarget: 0 }),
	Xl = De($p),
	Fp = ee({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Vp = De(Fp),
	Bp = ee({}, Xn, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Zp = De(Bp),
	Wp = ee({}, Xn, { data: 0 }),
	Fa = De(Wp),
	Hp = {
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
	Qp = {
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
	Kp = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function Gp(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Kp[e]) ? !!t[e] : !1;
}
function As() {
	return Gp;
}
var Yp = ee({}, ei, {
		key: function (e) {
			if (e.key) {
				var t = Hp[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = ji(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
					? Qp[e.keyCode] || "Unidentified"
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
		getModifierState: As,
		charCode: function (e) {
			return e.type === "keypress" ? ji(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? ji(e)
				: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
		},
	}),
	Xp = De(Yp),
	Jp = ee({}, Sl, {
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
	Va = De(Jp),
	qp = ee({}, ei, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: As,
	}),
	bp = De(qp),
	eh = ee({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	th = De(eh),
	nh = ee({}, Sl, {
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
	rh = De(nh),
	ih = [9, 13, 27, 32],
	Us = mt && "CompositionEvent" in window,
	hr = null;
mt && "documentMode" in document && (hr = document.documentMode);
var lh = mt && "TextEvent" in window && !hr,
	Vc = mt && (!Us || (hr && 8 < hr && 11 >= hr)),
	Ba = " ",
	Za = !1;
function Bc(e, t) {
	switch (e) {
		case "keyup":
			return ih.indexOf(t.keyCode) !== -1;
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
function Zc(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function oh(e, t) {
	switch (e) {
		case "compositionend":
			return Zc(t);
		case "keypress":
			return t.which !== 32 ? null : ((Za = !0), Ba);
		case "textInput":
			return (e = t.data), e === Ba && Za ? null : e;
		default:
			return null;
	}
}
function sh(e, t) {
	if (Sn)
		return e === "compositionend" || (!Us && Bc(e, t))
			? ((e = Fc()), (Pi = Ms = Tt = null), (Sn = !1), e)
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
			return Vc && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var ah = {
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
function Wa(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!ah[e.type] : t === "textarea";
}
function Wc(e, t, n, r) {
	_c(r),
		(t = Qi(t, "onChange")),
		0 < t.length &&
			((n = new Ds("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var mr = null,
	Tr = null;
function uh(e) {
	td(e, 0);
}
function El(e) {
	var t = Nn(e);
	if (hc(t)) return e;
}
function ch(e, t) {
	if (e === "change") return t;
}
var Hc = !1;
if (mt) {
	var Jl;
	if (mt) {
		var ql = "oninput" in document;
		if (!ql) {
			var Ha = document.createElement("div");
			Ha.setAttribute("oninput", "return;"),
				(ql = typeof Ha.oninput == "function");
		}
		Jl = ql;
	} else Jl = !1;
	Hc = Jl && (!document.documentMode || 9 < document.documentMode);
}
function Qa() {
	mr && (mr.detachEvent("onpropertychange", Qc), (Tr = mr = null));
}
function Qc(e) {
	if (e.propertyName === "value" && El(Tr)) {
		var t = [];
		Wc(t, Tr, e, Rs(e)), Cc(uh, t);
	}
}
function dh(e, t, n) {
	e === "focusin"
		? (Qa(), (mr = t), (Tr = n), mr.attachEvent("onpropertychange", Qc))
		: e === "focusout" && Qa();
}
function fh(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return El(Tr);
}
function ph(e, t) {
	if (e === "click") return El(t);
}
function hh(e, t) {
	if (e === "input" || e === "change") return El(t);
}
function mh(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var be = typeof Object.is == "function" ? Object.is : mh;
function Pr(e, t) {
	if (be(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!wo.call(t, i) || !be(e[i], t[i])) return !1;
	}
	return !0;
}
function Ka(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Ga(e, t) {
	var n = Ka(e);
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
		n = Ka(n);
	}
}
function Kc(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
					? Kc(e, t.parentNode)
					: "contains" in e
						? e.contains(t)
						: e.compareDocumentPosition
							? !!(e.compareDocumentPosition(t) & 16)
							: !1
		: !1;
}
function Gc() {
	for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = $i(e.document);
	}
	return t;
}
function $s(e) {
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
function vh(e) {
	var t = Gc(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Kc(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && $s(n)) {
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
					(i = Ga(n, l));
				var o = Ga(n, r);
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
var yh = mt && "documentMode" in document && 11 >= document.documentMode,
	En = null,
	$o = null,
	vr = null,
	Fo = !1;
function Ya(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Fo ||
		En == null ||
		En !== $i(r) ||
		((r = En),
		"selectionStart" in r && $s(r)
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
		(vr && Pr(vr, r)) ||
			((vr = r),
			(r = Qi($o, "onSelect")),
			0 < r.length &&
				((t = new Ds("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = En))));
}
function vi(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Cn = {
		animationend: vi("Animation", "AnimationEnd"),
		animationiteration: vi("Animation", "AnimationIteration"),
		animationstart: vi("Animation", "AnimationStart"),
		transitionend: vi("Transition", "TransitionEnd"),
	},
	bl = {},
	Yc = {};
mt &&
	((Yc = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Cn.animationend.animation,
		delete Cn.animationiteration.animation,
		delete Cn.animationstart.animation),
	"TransitionEvent" in window || delete Cn.transitionend.transition);
function Cl(e) {
	if (bl[e]) return bl[e];
	if (!Cn[e]) return e;
	var t = Cn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Yc) return (bl[e] = t[n]);
	return e;
}
var Xc = Cl("animationend"),
	Jc = Cl("animationiteration"),
	qc = Cl("animationstart"),
	bc = Cl("transitionend"),
	ed = new Map(),
	Xa =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" ",
		);
function Wt(e, t) {
	ed.set(e, t), hn(t, [e]);
}
for (var eo = 0; eo < Xa.length; eo++) {
	var to = Xa[eo],
		gh = to.toLowerCase(),
		xh = to[0].toUpperCase() + to.slice(1);
	Wt(gh, "on" + xh);
}
Wt(Xc, "onAnimationEnd");
Wt(Jc, "onAnimationIteration");
Wt(qc, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(bc, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" ",
	),
);
hn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" ",
	),
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" "),
);
hn(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
hn(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var cr =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" ",
		),
	wh = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function Ja(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), gp(r, t, void 0, e), (e.currentTarget = null);
}
function td(e, t) {
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
					Ja(i, s, u), (l = a);
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
					Ja(i, s, u), (l = a);
				}
		}
	}
	if (Vi) throw ((e = Mo), (Vi = !1), (Mo = null), e);
}
function K(e, t) {
	var n = t[Ho];
	n === void 0 && (n = t[Ho] = new Set());
	var r = e + "__bubble";
	n.has(r) || (nd(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
	var r = 0;
	t && (r |= 4), nd(n, e, r, t);
}
var yi = "_reactListening" + Math.random().toString(36).slice(2);
function jr(e) {
	if (!e[yi]) {
		(e[yi] = !0),
			uc.forEach(function (n) {
				n !== "selectionchange" && (wh.has(n) || no(n, !1, e), no(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[yi] || ((t[yi] = !0), no("selectionchange", !1, t));
	}
}
function nd(e, t, n, r) {
	switch ($c(t)) {
		case 1:
			var i = zp;
			break;
		case 4:
			i = Mp;
			break;
		default:
			i = zs;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!zo ||
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
function ro(e, t, n, r, i) {
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
					if (((o = qt(s)), o === null)) return;
					if (((a = o.tag), a === 5 || a === 6)) {
						r = l = o;
						continue e;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
	Cc(function () {
		var u = l,
			d = Rs(n),
			c = [];
		e: {
			var f = ed.get(e);
			if (f !== void 0) {
				var v = Ds,
					y = e;
				switch (e) {
					case "keypress":
						if (ji(n) === 0) break e;
					case "keydown":
					case "keyup":
						v = Xp;
						break;
					case "focusin":
						(y = "focus"), (v = Xl);
						break;
					case "focusout":
						(y = "blur"), (v = Xl);
						break;
					case "beforeblur":
					case "afterblur":
						v = Xl;
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
						v = $a;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						v = Up;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						v = bp;
						break;
					case Xc:
					case Jc:
					case qc:
						v = Vp;
						break;
					case bc:
						v = th;
						break;
					case "scroll":
						v = Dp;
						break;
					case "wheel":
						v = rh;
						break;
					case "copy":
					case "cut":
					case "paste":
						v = Zp;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						v = Va;
				}
				var x = (t & 4) !== 0,
					C = !x && e === "scroll",
					h = x ? (f !== null ? f + "Capture" : null) : f;
				x = [];
				for (var p = u, m; p !== null; ) {
					m = p;
					var g = m.stateNode;
					if (
						(m.tag === 5 &&
							g !== null &&
							((m = g),
							h !== null && ((g = Sr(p, h)), g != null && x.push(Rr(p, g, m)))),
						C)
					)
						break;
					p = p.return;
				}
				0 < x.length &&
					((f = new v(f, y, null, n, d)), c.push({ event: f, listeners: x }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((f = e === "mouseover" || e === "pointerover"),
					(v = e === "mouseout" || e === "pointerout"),
					f &&
						n !== Lo &&
						(y = n.relatedTarget || n.fromElement) &&
						(qt(y) || y[vt]))
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
							(y = y ? qt(y) : null),
							y !== null &&
								((C = mn(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
								(y = null))
						: ((v = null), (y = u)),
					v !== y)
				) {
					if (
						((x = $a),
						(g = "onMouseLeave"),
						(h = "onMouseEnter"),
						(p = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((x = Va),
							(g = "onPointerLeave"),
							(h = "onPointerEnter"),
							(p = "pointer")),
						(C = v == null ? f : Nn(v)),
						(m = y == null ? f : Nn(y)),
						(f = new x(g, p + "leave", v, n, d)),
						(f.target = C),
						(f.relatedTarget = m),
						(g = null),
						qt(d) === u &&
							((x = new x(h, p + "enter", y, n, d)),
							(x.target = m),
							(x.relatedTarget = C),
							(g = x)),
						(C = g),
						v && y)
					)
						t: {
							for (x = v, h = y, p = 0, m = x; m; m = xn(m)) p++;
							for (m = 0, g = h; g; g = xn(g)) m++;
							for (; 0 < p - m; ) (x = xn(x)), p--;
							for (; 0 < m - p; ) (h = xn(h)), m--;
							for (; p--; ) {
								if (x === h || (h !== null && x === h.alternate)) break t;
								(x = xn(x)), (h = xn(h));
							}
							x = null;
						}
					else x = null;
					v !== null && qa(c, f, v, x, !1),
						y !== null && C !== null && qa(c, C, y, x, !0);
				}
			}
			e: {
				if (
					((f = u ? Nn(u) : window),
					(v = f.nodeName && f.nodeName.toLowerCase()),
					v === "select" || (v === "input" && f.type === "file"))
				)
					var w = ch;
				else if (Wa(f))
					if (Hc) w = hh;
					else {
						w = fh;
						var P = dh;
					}
				else
					(v = f.nodeName) &&
						v.toLowerCase() === "input" &&
						(f.type === "checkbox" || f.type === "radio") &&
						(w = ph);
				if (w && (w = w(e, u))) {
					Wc(c, w, n, d);
					break e;
				}
				P && P(e, f, u),
					e === "focusout" &&
						(P = f._wrapperState) &&
						P.controlled &&
						f.type === "number" &&
						To(f, "number", f.value);
			}
			switch (((P = u ? Nn(u) : window), e)) {
				case "focusin":
					(Wa(P) || P.contentEditable === "true") &&
						((En = P), ($o = u), (vr = null));
					break;
				case "focusout":
					vr = $o = En = null;
					break;
				case "mousedown":
					Fo = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(Fo = !1), Ya(c, n, d);
					break;
				case "selectionchange":
					if (yh) break;
				case "keydown":
				case "keyup":
					Ya(c, n, d);
			}
			var N;
			if (Us)
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
				Sn
					? Bc(e, n) && (T = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
			T &&
				(Vc &&
					n.locale !== "ko" &&
					(Sn || T !== "onCompositionStart"
						? T === "onCompositionEnd" && Sn && (N = Fc())
						: ((Tt = d),
							(Ms = "value" in Tt ? Tt.value : Tt.textContent),
							(Sn = !0))),
				(P = Qi(u, T)),
				0 < P.length &&
					((T = new Fa(T, e, null, n, d)),
					c.push({ event: T, listeners: P }),
					N ? (T.data = N) : ((N = Zc(n)), N !== null && (T.data = N)))),
				(N = lh ? oh(e, n) : sh(e, n)) &&
					((u = Qi(u, "onBeforeInput")),
					0 < u.length &&
						((d = new Fa("onBeforeInput", "beforeinput", null, n, d)),
						c.push({ event: d, listeners: u }),
						(d.data = N)));
		}
		td(c, t);
	});
}
function Rr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Qi(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			l = i.stateNode;
		i.tag === 5 &&
			l !== null &&
			((i = l),
			(l = Sr(e, n)),
			l != null && r.unshift(Rr(e, l, i)),
			(l = Sr(e, t)),
			l != null && r.push(Rr(e, l, i))),
			(e = e.return);
	}
	return r;
}
function xn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function qa(e, t, n, r, i) {
	for (var l = t._reactName, o = []; n !== null && n !== r; ) {
		var s = n,
			a = s.alternate,
			u = s.stateNode;
		if (a !== null && a === r) break;
		s.tag === 5 &&
			u !== null &&
			((s = u),
			i
				? ((a = Sr(n, l)), a != null && o.unshift(Rr(n, a, s)))
				: i || ((a = Sr(n, l)), a != null && o.push(Rr(n, a, s)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var _h = /\r\n?/g,
	kh = /\u0000|\uFFFD/g;
function ba(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			_h,
			`
`,
		)
		.replace(kh, "");
}
function gi(e, t, n) {
	if (((t = ba(t)), ba(e) !== t && n)) throw Error(_(425));
}
function Ki() {}
var Vo = null,
	Bo = null;
function Zo(e, t) {
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
var Wo = typeof setTimeout == "function" ? setTimeout : void 0,
	Sh = typeof clearTimeout == "function" ? clearTimeout : void 0,
	eu = typeof Promise == "function" ? Promise : void 0,
	Eh =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof eu < "u"
				? function (e) {
						return eu.resolve(null).then(e).catch(Ch);
					}
				: Wo;
function Ch(e) {
	setTimeout(function () {
		throw e;
	});
}
function io(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), Nr(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	Nr(t);
}
function It(e) {
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
function tu(e) {
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
var Jn = Math.random().toString(36).slice(2),
	rt = "__reactFiber$" + Jn,
	Or = "__reactProps$" + Jn,
	vt = "__reactContainer$" + Jn,
	Ho = "__reactEvents$" + Jn,
	Nh = "__reactListeners$" + Jn,
	Th = "__reactHandles$" + Jn;
function qt(e) {
	var t = e[rt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[vt] || n[rt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = tu(e); e !== null; ) {
					if ((n = e[rt])) return n;
					e = tu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ti(e) {
	return (
		(e = e[rt] || e[vt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Nn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(_(33));
}
function Nl(e) {
	return e[Or] || null;
}
var Qo = [],
	Tn = -1;
function Ht(e) {
	return { current: e };
}
function G(e) {
	0 > Tn || ((e.current = Qo[Tn]), (Qo[Tn] = null), Tn--);
}
function Q(e, t) {
	Tn++, (Qo[Tn] = e.current), (e.current = t);
}
var Ft = {},
	ge = Ht(Ft),
	Pe = Ht(!1),
	ln = Ft;
function Vn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Ft;
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
function Gi() {
	G(Pe), G(ge);
}
function nu(e, t, n) {
	if (ge.current !== Ft) throw Error(_(168));
	Q(ge, t), Q(Pe, n);
}
function rd(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(_(108, dp(e) || "Unknown", i));
	return ee({}, n, r);
}
function Yi(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
		(ln = ge.current),
		Q(ge, e),
		Q(Pe, Pe.current),
		!0
	);
}
function ru(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(_(169));
	n
		? ((e = rd(e, t, ln)),
			(r.__reactInternalMemoizedMergedChildContext = e),
			G(Pe),
			G(ge),
			Q(ge, e))
		: G(Pe),
		Q(Pe, n);
}
var ct = null,
	Tl = !1,
	lo = !1;
function id(e) {
	ct === null ? (ct = [e]) : ct.push(e);
}
function Ph(e) {
	(Tl = !0), id(e);
}
function Qt() {
	if (!lo && ct !== null) {
		lo = !0;
		var e = 0,
			t = H;
		try {
			var n = ct;
			for (H = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(ct = null), (Tl = !1);
		} catch (i) {
			throw (ct !== null && (ct = ct.slice(e + 1)), jc(Os, Qt), i);
		} finally {
			(H = t), (lo = !1);
		}
	}
	return null;
}
var Pn = [],
	jn = 0,
	Xi = null,
	Ji = 0,
	Ae = [],
	Ue = 0,
	on = null,
	dt = 1,
	ft = "";
function Xt(e, t) {
	(Pn[jn++] = Ji), (Pn[jn++] = Xi), (Xi = e), (Ji = t);
}
function ld(e, t, n) {
	(Ae[Ue++] = dt), (Ae[Ue++] = ft), (Ae[Ue++] = on), (on = e);
	var r = dt;
	e = ft;
	var i = 32 - Ye(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var l = 32 - Ye(t) + i;
	if (30 < l) {
		var o = i - (i % 5);
		(l = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(dt = (1 << (32 - Ye(t) + i)) | (n << i) | r),
			(ft = l + e);
	} else (dt = (1 << l) | (n << i) | r), (ft = e);
}
function Fs(e) {
	e.return !== null && (Xt(e, 1), ld(e, 1, 0));
}
function Vs(e) {
	for (; e === Xi; )
		(Xi = Pn[--jn]), (Pn[jn] = null), (Ji = Pn[--jn]), (Pn[jn] = null);
	for (; e === on; )
		(on = Ae[--Ue]),
			(Ae[Ue] = null),
			(ft = Ae[--Ue]),
			(Ae[Ue] = null),
			(dt = Ae[--Ue]),
			(Ae[Ue] = null);
}
var Ie = null,
	Le = null,
	X = !1,
	Ke = null;
function od(e, t) {
	var n = $e(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function iu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Ie = e), (Le = It(t.firstChild)), !0)
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
					? ((n = on !== null ? { id: dt, overflow: ft } : null),
						(e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
						}),
						(n = $e(18, null, null, 0)),
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
function Ko(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Go(e) {
	if (X) {
		var t = Le;
		if (t) {
			var n = t;
			if (!iu(e, t)) {
				if (Ko(e)) throw Error(_(418));
				t = It(n.nextSibling);
				var r = Ie;
				t && iu(e, t)
					? od(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ie = e));
			}
		} else {
			if (Ko(e)) throw Error(_(418));
			(e.flags = (e.flags & -4097) | 2), (X = !1), (Ie = e);
		}
	}
}
function lu(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Ie = e;
}
function xi(e) {
	if (e !== Ie) return !1;
	if (!X) return lu(e), (X = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !Zo(e.type, e.memoizedProps))),
		t && (t = Le))
	) {
		if (Ko(e)) throw (sd(), Error(_(418)));
		for (; t; ) od(e, t), (t = It(t.nextSibling));
	}
	if ((lu(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(_(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Le = It(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Le = null;
		}
	} else Le = Ie ? It(e.stateNode.nextSibling) : null;
	return !0;
}
function sd() {
	for (var e = Le; e; ) e = It(e.nextSibling);
}
function Bn() {
	(Le = Ie = null), (X = !1);
}
function Bs(e) {
	Ke === null ? (Ke = [e]) : Ke.push(e);
}
var jh = wt.ReactCurrentBatchConfig;
function He(e, t) {
	if (e && e.defaultProps) {
		(t = ee({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var qi = Ht(null),
	bi = null,
	Rn = null,
	Zs = null;
function Ws() {
	Zs = Rn = bi = null;
}
function Hs(e) {
	var t = qi.current;
	G(qi), (e._currentValue = t);
}
function Yo(e, t, n) {
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
function An(e, t) {
	(bi = e),
		(Zs = Rn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Te = !0), (e.firstContext = null));
}
function Ve(e) {
	var t = e._currentValue;
	if (Zs !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
			if (bi === null) throw Error(_(308));
			(Rn = e), (bi.dependencies = { lanes: 0, firstContext: e });
		} else Rn = Rn.next = e;
	return t;
}
var bt = null;
function Qs(e) {
	bt === null ? (bt = [e]) : bt.push(e);
}
function ad(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), Qs(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		yt(e, r)
	);
}
function yt(e, t) {
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
var St = !1;
function Ks(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function ud(e, t) {
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
function pt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function zt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), Z & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			yt(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Qs(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		yt(e, n)
	);
}
function Ri(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ls(e, n);
	}
}
function ou(e, t) {
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
function el(e, t, n, r) {
	var i = e.updateQueue;
	St = !1;
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
						x = s;
					switch (((f = t), (v = n), x.tag)) {
						case 1:
							if (((y = x.payload), typeof y == "function")) {
								c = y.call(v, c, f);
								break e;
							}
							c = y;
							break e;
						case 3:
							y.flags = (y.flags & -65537) | 128;
						case 0:
							if (
								((y = x.payload),
								(f = typeof y == "function" ? y.call(v, c, f) : y),
								f == null)
							)
								break e;
							c = ee({}, c, f);
							break e;
						case 2:
							St = !0;
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
		(an |= o), (e.lanes = o), (e.memoizedState = c);
	}
}
function su(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(_(191, i));
				i.call(r);
			}
		}
}
var cd = new ac.Component().refs;
function Xo(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : ee({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? mn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = ke(),
			i = Dt(e),
			l = pt(r, i);
		(l.payload = t),
			n != null && (l.callback = n),
			(t = zt(e, l, i)),
			t !== null && (Xe(t, e, i, r), Ri(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = ke(),
			i = Dt(e),
			l = pt(r, i);
		(l.tag = 1),
			(l.payload = t),
			n != null && (l.callback = n),
			(t = zt(e, l, i)),
			t !== null && (Xe(t, e, i, r), Ri(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = ke(),
			r = Dt(e),
			i = pt(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = zt(e, i, r)),
			t !== null && (Xe(t, e, r, n), Ri(t, e, r));
	},
};
function au(e, t, n, r, i, l, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, l, o)
			: t.prototype && t.prototype.isPureReactComponent
				? !Pr(n, r) || !Pr(i, l)
				: !0
	);
}
function dd(e, t, n) {
	var r = !1,
		i = Ft,
		l = t.contextType;
	return (
		typeof l == "object" && l !== null
			? (l = Ve(l))
			: ((i = je(t) ? ln : ge.current),
				(r = t.contextTypes),
				(l = (r = r != null) ? Vn(e, i) : Ft)),
		(t = new t(n, l)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Pl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		t
	);
}
function uu(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function Jo(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = cd), Ks(e);
	var l = t.contextType;
	typeof l == "object" && l !== null
		? (i.context = Ve(l))
		: ((l = je(t) ? ln : ge.current), (i.context = Vn(e, l))),
		(i.state = e.memoizedState),
		(l = t.getDerivedStateFromProps),
		typeof l == "function" && (Xo(e, t, l, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Pl.enqueueReplaceState(i, i.state, null),
			el(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(_(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(_(147, e));
			var i = r,
				l = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === l
				? t.ref
				: ((t = function (o) {
						var s = i.refs;
						s === cd && (s = i.refs = {}),
							o === null ? delete s[l] : (s[l] = o);
					}),
					(t._stringRef = l),
					t);
		}
		if (typeof e != "string") throw Error(_(284));
		if (!n._owner) throw Error(_(290, e));
	}
	return e;
}
function wi(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			_(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e,
			),
		))
	);
}
function cu(e) {
	var t = e._init;
	return t(e._payload);
}
function fd(e) {
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
		return (h = At(h, p)), (h.index = 0), (h.sibling = null), h;
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
			? ((p = po(m, h.mode, g)), (p.return = h), p)
			: ((p = i(p, m)), (p.return = h), p);
	}
	function a(h, p, m, g) {
		var w = m.type;
		return w === kn
			? d(h, p, m.props.children, g, m.key)
			: p !== null &&
				  (p.elementType === w ||
						(typeof w == "object" &&
							w !== null &&
							w.$$typeof === kt &&
							cu(w) === p.type))
				? ((g = i(p, m.props)), (g.ref = ir(h, p, m)), (g.return = h), g)
				: ((g = Di(m.type, m.key, m.props, null, h.mode, g)),
					(g.ref = ir(h, p, m)),
					(g.return = h),
					g);
	}
	function u(h, p, m, g) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== m.containerInfo ||
			p.stateNode.implementation !== m.implementation
			? ((p = ho(m, h.mode, g)), (p.return = h), p)
			: ((p = i(p, m.children || [])), (p.return = h), p);
	}
	function d(h, p, m, g, w) {
		return p === null || p.tag !== 7
			? ((p = nn(m, h.mode, g, w)), (p.return = h), p)
			: ((p = i(p, m)), (p.return = h), p);
	}
	function c(h, p, m) {
		if ((typeof p == "string" && p !== "") || typeof p == "number")
			return (p = po("" + p, h.mode, m)), (p.return = h), p;
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case ui:
					return (
						(m = Di(p.type, p.key, p.props, null, h.mode, m)),
						(m.ref = ir(h, null, p)),
						(m.return = h),
						m
					);
				case _n:
					return (p = ho(p, h.mode, m)), (p.return = h), p;
				case kt:
					var g = p._init;
					return c(h, g(p._payload), m);
			}
			if (ar(p) || bn(p))
				return (p = nn(p, h.mode, m, null)), (p.return = h), p;
			wi(h, p);
		}
		return null;
	}
	function f(h, p, m, g) {
		var w = p !== null ? p.key : null;
		if ((typeof m == "string" && m !== "") || typeof m == "number")
			return w !== null ? null : s(h, p, "" + m, g);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case ui:
					return m.key === w ? a(h, p, m, g) : null;
				case _n:
					return m.key === w ? u(h, p, m, g) : null;
				case kt:
					return (w = m._init), f(h, p, w(m._payload), g);
			}
			if (ar(m) || bn(m)) return w !== null ? null : d(h, p, m, g, null);
			wi(h, m);
		}
		return null;
	}
	function v(h, p, m, g, w) {
		if ((typeof g == "string" && g !== "") || typeof g == "number")
			return (h = h.get(m) || null), s(p, h, "" + g, w);
		if (typeof g == "object" && g !== null) {
			switch (g.$$typeof) {
				case ui:
					return (h = h.get(g.key === null ? m : g.key) || null), a(p, h, g, w);
				case _n:
					return (h = h.get(g.key === null ? m : g.key) || null), u(p, h, g, w);
				case kt:
					var P = g._init;
					return v(h, p, m, P(g._payload), w);
			}
			if (ar(g) || bn(g)) return (h = h.get(m) || null), d(p, h, g, w, null);
			wi(p, g);
		}
		return null;
	}
	function y(h, p, m, g) {
		for (
			var w = null, P = null, N = p, T = (p = 0), B = null;
			N !== null && T < m.length;
			T++
		) {
			N.index > T ? ((B = N), (N = null)) : (B = N.sibling);
			var M = f(h, N, m[T], g);
			if (M === null) {
				N === null && (N = B);
				break;
			}
			e && N && M.alternate === null && t(h, N),
				(p = l(M, p, T)),
				P === null ? (w = M) : (P.sibling = M),
				(P = M),
				(N = B);
		}
		if (T === m.length) return n(h, N), X && Xt(h, T), w;
		if (N === null) {
			for (; T < m.length; T++)
				(N = c(h, m[T], g)),
					N !== null &&
						((p = l(N, p, T)), P === null ? (w = N) : (P.sibling = N), (P = N));
			return X && Xt(h, T), w;
		}
		for (N = r(h, N); T < m.length; T++)
			(B = v(N, h, T, m[T], g)),
				B !== null &&
					(e && B.alternate !== null && N.delete(B.key === null ? T : B.key),
					(p = l(B, p, T)),
					P === null ? (w = B) : (P.sibling = B),
					(P = B));
		return (
			e &&
				N.forEach(function (Y) {
					return t(h, Y);
				}),
			X && Xt(h, T),
			w
		);
	}
	function x(h, p, m, g) {
		var w = bn(m);
		if (typeof w != "function") throw Error(_(150));
		if (((m = w.call(m)), m == null)) throw Error(_(151));
		for (
			var P = (w = null), N = p, T = (p = 0), B = null, M = m.next();
			N !== null && !M.done;
			T++, M = m.next()
		) {
			N.index > T ? ((B = N), (N = null)) : (B = N.sibling);
			var Y = f(h, N, M.value, g);
			if (Y === null) {
				N === null && (N = B);
				break;
			}
			e && N && Y.alternate === null && t(h, N),
				(p = l(Y, p, T)),
				P === null ? (w = Y) : (P.sibling = Y),
				(P = Y),
				(N = B);
		}
		if (M.done) return n(h, N), X && Xt(h, T), w;
		if (N === null) {
			for (; !M.done; T++, M = m.next())
				(M = c(h, M.value, g)),
					M !== null &&
						((p = l(M, p, T)), P === null ? (w = M) : (P.sibling = M), (P = M));
			return X && Xt(h, T), w;
		}
		for (N = r(h, N); !M.done; T++, M = m.next())
			(M = v(N, h, T, M.value, g)),
				M !== null &&
					(e && M.alternate !== null && N.delete(M.key === null ? T : M.key),
					(p = l(M, p, T)),
					P === null ? (w = M) : (P.sibling = M),
					(P = M));
		return (
			e &&
				N.forEach(function (we) {
					return t(h, we);
				}),
			X && Xt(h, T),
			w
		);
	}
	function C(h, p, m, g) {
		if (
			(typeof m == "object" &&
				m !== null &&
				m.type === kn &&
				m.key === null &&
				(m = m.props.children),
			typeof m == "object" && m !== null)
		) {
			switch (m.$$typeof) {
				case ui:
					e: {
						for (var w = m.key, P = p; P !== null; ) {
							if (P.key === w) {
								if (((w = m.type), w === kn)) {
									if (P.tag === 7) {
										n(h, P.sibling),
											(p = i(P, m.props.children)),
											(p.return = h),
											(h = p);
										break e;
									}
								} else if (
									P.elementType === w ||
									(typeof w == "object" &&
										w !== null &&
										w.$$typeof === kt &&
										cu(w) === P.type)
								) {
									n(h, P.sibling),
										(p = i(P, m.props)),
										(p.ref = ir(h, P, m)),
										(p.return = h),
										(h = p);
									break e;
								}
								n(h, P);
								break;
							} else t(h, P);
							P = P.sibling;
						}
						m.type === kn
							? ((p = nn(m.props.children, h.mode, g, m.key)),
								(p.return = h),
								(h = p))
							: ((g = Di(m.type, m.key, m.props, null, h.mode, g)),
								(g.ref = ir(h, p, m)),
								(g.return = h),
								(h = g));
					}
					return o(h);
				case _n:
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
						(p = ho(m, h.mode, g)), (p.return = h), (h = p);
					}
					return o(h);
				case kt:
					return (P = m._init), C(h, p, P(m._payload), g);
			}
			if (ar(m)) return y(h, p, m, g);
			if (bn(m)) return x(h, p, m, g);
			wi(h, m);
		}
		return (typeof m == "string" && m !== "") || typeof m == "number"
			? ((m = "" + m),
				p !== null && p.tag === 6
					? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
					: (n(h, p), (p = po(m, h.mode, g)), (p.return = h), (h = p)),
				o(h))
			: n(h, p);
	}
	return C;
}
var Zn = fd(!0),
	pd = fd(!1),
	ni = {},
	lt = Ht(ni),
	Lr = Ht(ni),
	Ir = Ht(ni);
function en(e) {
	if (e === ni) throw Error(_(174));
	return e;
}
function Gs(e, t) {
	switch ((Q(Ir, t), Q(Lr, e), Q(lt, ni), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : jo(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = jo(t, e));
	}
	G(lt), Q(lt, t);
}
function Wn() {
	G(lt), G(Lr), G(Ir);
}
function hd(e) {
	en(Ir.current);
	var t = en(lt.current),
		n = jo(t, e.type);
	t !== n && (Q(Lr, e), Q(lt, n));
}
function Ys(e) {
	Lr.current === e && (G(lt), G(Lr));
}
var q = Ht(0);
function tl(e) {
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
var oo = [];
function Xs() {
	for (var e = 0; e < oo.length; e++)
		oo[e]._workInProgressVersionPrimary = null;
	oo.length = 0;
}
var Oi = wt.ReactCurrentDispatcher,
	so = wt.ReactCurrentBatchConfig,
	sn = 0,
	b = null,
	oe = null,
	ue = null,
	nl = !1,
	yr = !1,
	zr = 0,
	Rh = 0;
function me() {
	throw Error(_(321));
}
function Js(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!be(e[n], t[n])) return !1;
	return !0;
}
function qs(e, t, n, r, i, l) {
	if (
		((sn = l),
		(b = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Oi.current = e === null || e.memoizedState === null ? zh : Mh),
		(e = n(r, i)),
		yr)
	) {
		l = 0;
		do {
			if (((yr = !1), (zr = 0), 25 <= l)) throw Error(_(301));
			(l += 1),
				(ue = oe = null),
				(t.updateQueue = null),
				(Oi.current = Dh),
				(e = n(r, i));
		} while (yr);
	}
	if (
		((Oi.current = rl),
		(t = oe !== null && oe.next !== null),
		(sn = 0),
		(ue = oe = b = null),
		(nl = !1),
		t)
	)
		throw Error(_(300));
	return e;
}
function bs() {
	var e = zr !== 0;
	return (zr = 0), e;
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
function Be() {
	if (oe === null) {
		var e = b.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = oe.next;
	var t = ue === null ? b.memoizedState : ue.next;
	if (t !== null) (ue = t), (oe = e);
	else {
		if (e === null) throw Error(_(310));
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
function Mr(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function ao(e) {
	var t = Be(),
		n = t.queue;
	if (n === null) throw Error(_(311));
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
			if ((sn & d) === d)
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
					(an |= d);
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
		do (l = i.lane), (b.lanes |= l), (an |= l), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function uo(e) {
	var t = Be(),
		n = t.queue;
	if (n === null) throw Error(_(311));
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
function md() {}
function vd(e, t) {
	var n = b,
		r = Be(),
		i = t(),
		l = !be(r.memoizedState, i);
	if (
		(l && ((r.memoizedState = i), (Te = !0)),
		(r = r.queue),
		ea(xd.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || l || (ue !== null && ue.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Dr(9, gd.bind(null, n, r, i, t), void 0, null),
			ce === null)
		)
			throw Error(_(349));
		sn & 30 || yd(n, t, i);
	}
	return i;
}
function yd(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = b.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(b.updateQueue = t),
				(t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gd(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), wd(t) && _d(e);
}
function xd(e, t, n) {
	return n(function () {
		wd(t) && _d(e);
	});
}
function wd(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !be(e, n);
	} catch {
		return !0;
	}
}
function _d(e) {
	var t = yt(e, 1);
	t !== null && Xe(t, e, 1, -1);
}
function du(e) {
	var t = nt();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Mr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Ih.bind(null, b, e)),
		[t.memoizedState, e]
	);
}
function Dr(e, t, n, r) {
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
function kd() {
	return Be().memoizedState;
}
function Li(e, t, n, r) {
	var i = nt();
	(b.flags |= e),
		(i.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r));
}
function jl(e, t, n, r) {
	var i = Be();
	r = r === void 0 ? null : r;
	var l = void 0;
	if (oe !== null) {
		var o = oe.memoizedState;
		if (((l = o.destroy), r !== null && Js(r, o.deps))) {
			i.memoizedState = Dr(t, n, l, r);
			return;
		}
	}
	(b.flags |= e), (i.memoizedState = Dr(1 | t, n, l, r));
}
function fu(e, t) {
	return Li(8390656, 8, e, t);
}
function ea(e, t) {
	return jl(2048, 8, e, t);
}
function Sd(e, t) {
	return jl(4, 2, e, t);
}
function Ed(e, t) {
	return jl(4, 4, e, t);
}
function Cd(e, t) {
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
function Nd(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), jl(4, 4, Cd.bind(null, t, e), n)
	);
}
function ta() {}
function Td(e, t) {
	var n = Be();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Js(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Pd(e, t) {
	var n = Be();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Js(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function jd(e, t, n) {
	return sn & 21
		? (be(n, t) || ((n = Lc()), (b.lanes |= n), (an |= n), (e.baseState = !0)),
			t)
		: (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function Oh(e, t) {
	var n = H;
	(H = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = so.transition;
	so.transition = {};
	try {
		e(!1), t();
	} finally {
		(H = n), (so.transition = r);
	}
}
function Rd() {
	return Be().memoizedState;
}
function Lh(e, t, n) {
	var r = Dt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Od(e))
	)
		Ld(t, n);
	else if (((n = ad(e, t, n, r)), n !== null)) {
		var i = ke();
		Xe(n, e, r, i), Id(n, t, r);
	}
}
function Ih(e, t, n) {
	var r = Dt(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Od(e)) Ld(t, i);
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
						? ((i.next = i), Qs(t))
						: ((i.next = a.next), (a.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = ad(e, t, i, r)),
			n !== null && ((i = ke()), Xe(n, e, r, i), Id(n, t, r));
	}
}
function Od(e) {
	var t = e.alternate;
	return e === b || (t !== null && t === b);
}
function Ld(e, t) {
	yr = nl = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Id(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ls(e, n);
	}
}
var rl = {
		readContext: Ve,
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
	zh = {
		readContext: Ve,
		useCallback: function (e, t) {
			return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Ve,
		useEffect: fu,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Li(4194308, 4, Cd.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Li(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Li(4, 2, e, t);
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
				(e = e.dispatch = Lh.bind(null, b, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = nt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: du,
		useDebugValue: ta,
		useDeferredValue: function (e) {
			return (nt().memoizedState = e);
		},
		useTransition: function () {
			var e = du(!1),
				t = e[0];
			return (e = Oh.bind(null, e[1])), (nt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = b,
				i = nt();
			if (X) {
				if (n === void 0) throw Error(_(407));
				n = n();
			} else {
				if (((n = t()), ce === null)) throw Error(_(349));
				sn & 30 || yd(r, t, n);
			}
			i.memoizedState = n;
			var l = { value: n, getSnapshot: t };
			return (
				(i.queue = l),
				fu(xd.bind(null, r, l, e), [e]),
				(r.flags |= 2048),
				Dr(9, gd.bind(null, r, l, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = nt(),
				t = ce.identifierPrefix;
			if (X) {
				var n = ft,
					r = dt;
				(n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = zr++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = Rh++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Mh = {
		readContext: Ve,
		useCallback: Td,
		useContext: Ve,
		useEffect: ea,
		useImperativeHandle: Nd,
		useInsertionEffect: Sd,
		useLayoutEffect: Ed,
		useMemo: Pd,
		useReducer: ao,
		useRef: kd,
		useState: function () {
			return ao(Mr);
		},
		useDebugValue: ta,
		useDeferredValue: function (e) {
			var t = Be();
			return jd(t, oe.memoizedState, e);
		},
		useTransition: function () {
			var e = ao(Mr)[0],
				t = Be().memoizedState;
			return [e, t];
		},
		useMutableSource: md,
		useSyncExternalStore: vd,
		useId: Rd,
		unstable_isNewReconciler: !1,
	},
	Dh = {
		readContext: Ve,
		useCallback: Td,
		useContext: Ve,
		useEffect: ea,
		useImperativeHandle: Nd,
		useInsertionEffect: Sd,
		useLayoutEffect: Ed,
		useMemo: Pd,
		useReducer: uo,
		useRef: kd,
		useState: function () {
			return uo(Mr);
		},
		useDebugValue: ta,
		useDeferredValue: function (e) {
			var t = Be();
			return oe === null ? (t.memoizedState = e) : jd(t, oe.memoizedState, e);
		},
		useTransition: function () {
			var e = uo(Mr)[0],
				t = Be().memoizedState;
			return [e, t];
		},
		useMutableSource: md,
		useSyncExternalStore: vd,
		useId: Rd,
		unstable_isNewReconciler: !1,
	};
function Hn(e, t) {
	try {
		var n = "",
			r = t;
		do (n += cp(r)), (r = r.return);
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
function co(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qo(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Ah = typeof WeakMap == "function" ? WeakMap : Map;
function zd(e, t, n) {
	(n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			ll || ((ll = !0), (as = r)), qo(e, t);
		}),
		n
	);
}
function Md(e, t, n) {
	(n = pt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				qo(e, t);
			});
	}
	var l = e.stateNode;
	return (
		l !== null &&
			typeof l.componentDidCatch == "function" &&
			(n.callback = function () {
				qo(e, t),
					typeof r != "function" &&
						(Mt === null ? (Mt = new Set([this])) : Mt.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : "",
				});
			}),
		n
	);
}
function pu(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Ah();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = Jh.bind(null, e, t, n)), t.then(e, e));
}
function hu(e) {
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
function mu(e, t, n, r, i) {
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
							: ((t = pt(-1, 1)), (t.tag = 2), zt(n, t, 1))),
					(n.lanes |= 1)),
			e);
}
var Uh = wt.ReactCurrentOwner,
	Te = !1;
function _e(e, t, n, r) {
	t.child = e === null ? pd(t, null, n, r) : Zn(t, e.child, n, r);
}
function vu(e, t, n, r, i) {
	n = n.render;
	var l = t.ref;
	return (
		An(t, i),
		(r = qs(e, t, n, r, l, i)),
		(n = bs()),
		e !== null && !Te
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~i),
				gt(e, t, i))
			: (X && n && Fs(t), (t.flags |= 1), _e(e, t, r, i), t.child)
	);
}
function yu(e, t, n, r, i) {
	if (e === null) {
		var l = n.type;
		return typeof l == "function" &&
			!ua(l) &&
			l.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = l), Dd(e, t, l, r, i))
			: ((e = Di(n.type, null, r, t, t.mode, i)),
				(e.ref = t.ref),
				(e.return = t),
				(t.child = e));
	}
	if (((l = e.child), !(e.lanes & i))) {
		var o = l.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Pr), n(o, r) && e.ref === t.ref)
		)
			return gt(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = At(l, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Dd(e, t, n, r, i) {
	if (e !== null) {
		var l = e.memoizedProps;
		if (Pr(l, r) && e.ref === t.ref)
			if (((Te = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
				e.flags & 131072 && (Te = !0);
			else return (t.lanes = e.lanes), gt(e, t, i);
	}
	return bo(e, t, n, r, i);
}
function Ad(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		l = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Q(Ln, Oe),
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
					Q(Ln, Oe),
					(Oe |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = l !== null ? l.baseLanes : n),
				Q(Ln, Oe),
				(Oe |= r);
		}
	else
		l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
			Q(Ln, Oe),
			(Oe |= r);
	return _e(e, t, i, n), t.child;
}
function Ud(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function bo(e, t, n, r, i) {
	var l = je(n) ? ln : ge.current;
	return (
		(l = Vn(t, l)),
		An(t, i),
		(n = qs(e, t, n, r, l, i)),
		(r = bs()),
		e !== null && !Te
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~i),
				gt(e, t, i))
			: (X && r && Fs(t), (t.flags |= 1), _e(e, t, n, i), t.child)
	);
}
function gu(e, t, n, r, i) {
	if (je(n)) {
		var l = !0;
		Yi(t);
	} else l = !1;
	if ((An(t, i), t.stateNode === null))
		Ii(e, t), dd(t, n, r), Jo(t, n, r, i), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			s = t.memoizedProps;
		o.props = s;
		var a = o.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = Ve(u))
			: ((u = je(n) ? ln : ge.current), (u = Vn(t, u)));
		var d = n.getDerivedStateFromProps,
			c =
				typeof d == "function" ||
				typeof o.getSnapshotBeforeUpdate == "function";
		c ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((s !== r || a !== u) && uu(t, o, r, u)),
			(St = !1);
		var f = t.memoizedState;
		(o.state = f),
			el(t, r, o, i),
			(a = t.memoizedState),
			s !== r || f !== a || Pe.current || St
				? (typeof d == "function" && (Xo(t, n, d, r), (a = t.memoizedState)),
					(s = St || au(t, n, s, r, f, a, u))
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
			ud(e, t),
			(s = t.memoizedProps),
			(u = t.type === t.elementType ? s : He(t.type, s)),
			(o.props = u),
			(c = t.pendingProps),
			(f = o.context),
			(a = n.contextType),
			typeof a == "object" && a !== null
				? (a = Ve(a))
				: ((a = je(n) ? ln : ge.current), (a = Vn(t, a)));
		var v = n.getDerivedStateFromProps;
		(d =
			typeof v == "function" ||
			typeof o.getSnapshotBeforeUpdate == "function") ||
			(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
				typeof o.componentWillReceiveProps != "function") ||
			((s !== c || f !== a) && uu(t, o, r, a)),
			(St = !1),
			(f = t.memoizedState),
			(o.state = f),
			el(t, r, o, i);
		var y = t.memoizedState;
		s !== c || f !== y || Pe.current || St
			? (typeof v == "function" && (Xo(t, n, v, r), (y = t.memoizedState)),
				(u = St || au(t, n, u, r, f, y, a) || !1)
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
	return es(e, t, n, r, l, i);
}
function es(e, t, n, r, i, l) {
	Ud(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return i && ru(t, n, !1), gt(e, t, l);
	(r = t.stateNode), (Uh.current = t);
	var s =
		o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = Zn(t, e.child, null, l)), (t.child = Zn(t, null, s, l)))
			: _e(e, t, s, l),
		(t.memoizedState = r.state),
		i && ru(t, n, !0),
		t.child
	);
}
function $d(e) {
	var t = e.stateNode;
	t.pendingContext
		? nu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && nu(e, t.context, !1),
		Gs(e, t.containerInfo);
}
function xu(e, t, n, r, i) {
	return Bn(), Bs(i), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var ts = { dehydrated: null, treeContext: null, retryLane: 0 };
function ns(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Fd(e, t, n) {
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
			Go(t),
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
								: (l = Ll(o, r, 0, null)),
							(e = nn(e, r, n, null)),
							(l.return = t),
							(e.return = t),
							(l.sibling = e),
							(t.child = l),
							(t.child.memoizedState = ns(n)),
							(t.memoizedState = ts),
							e)
						: na(t, o))
		);
	if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
		return $h(e, t, o, r, s, i, n);
	if (l) {
		(l = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
		var a = { mode: "hidden", children: r.children };
		return (
			!(o & 1) && t.child !== i
				? ((r = t.child),
					(r.childLanes = 0),
					(r.pendingProps = a),
					(t.deletions = null))
				: ((r = At(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			s !== null ? (l = At(s, l)) : ((l = nn(l, o, n, null)), (l.flags |= 2)),
			(l.return = t),
			(r.return = t),
			(r.sibling = l),
			(t.child = r),
			(r = l),
			(l = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? ns(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
						}),
			(l.memoizedState = o),
			(l.childLanes = e.childLanes & ~n),
			(t.memoizedState = ts),
			r
		);
	}
	return (
		(l = e.child),
		(e = l.sibling),
		(r = At(l, { mode: "visible", children: r.children })),
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
function na(e, t) {
	return (
		(t = Ll({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function _i(e, t, n, r) {
	return (
		r !== null && Bs(r),
		Zn(t, e.child, null, n),
		(e = na(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function $h(e, t, n, r, i, l, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = co(Error(_(422)))), _i(e, t, o, r))
			: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((l = r.fallback),
					(i = t.mode),
					(r = Ll({ mode: "visible", children: r.children }, i, 0, null)),
					(l = nn(l, i, o, null)),
					(l.flags |= 2),
					(r.return = t),
					(l.return = t),
					(r.sibling = l),
					(t.child = r),
					t.mode & 1 && Zn(t, e.child, null, o),
					(t.child.memoizedState = ns(o)),
					(t.memoizedState = ts),
					l);
	if (!(t.mode & 1)) return _i(e, t, o, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
		return (r = s), (l = Error(_(419))), (r = co(l, r, void 0)), _i(e, t, o, r);
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
					((l.retryLane = i), yt(e, i), Xe(r, e, i, -1));
		}
		return aa(), (r = co(Error(_(421)))), _i(e, t, o, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
			(t.child = e.child),
			(t = qh.bind(null, e)),
			(i._reactRetry = t),
			null)
		: ((e = l.treeContext),
			(Le = It(i.nextSibling)),
			(Ie = t),
			(X = !0),
			(Ke = null),
			e !== null &&
				((Ae[Ue++] = dt),
				(Ae[Ue++] = ft),
				(Ae[Ue++] = on),
				(dt = e.id),
				(ft = e.overflow),
				(on = t)),
			(t = na(t, r.children)),
			(t.flags |= 4096),
			t);
}
function wu(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Yo(e.return, t, n);
}
function fo(e, t, n, r, i) {
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
function Vd(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		l = r.tail;
	if ((_e(e, t, r.children, n), (r = q.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && wu(e, n, t);
				else if (e.tag === 19) wu(e, n, t);
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
						e !== null && tl(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					fo(t, !1, i, n, l);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && tl(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				fo(t, !0, n, null, l);
				break;
			case "together":
				fo(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ii(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(an |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(_(153));
	if (t.child !== null) {
		for (
			e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = At(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Fh(e, t, n) {
	switch (t.tag) {
		case 3:
			$d(t), Bn();
			break;
		case 5:
			hd(t);
			break;
		case 1:
			je(t.type) && Yi(t);
			break;
		case 4:
			Gs(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			Q(qi, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Q(q, q.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
						? Fd(e, t, n)
						: (Q(q, q.current & 1),
							(e = gt(e, t, n)),
							e !== null ? e.sibling : null);
			Q(q, q.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Vd(e, t, n);
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
			return (t.lanes = 0), Ad(e, t, n);
	}
	return gt(e, t, n);
}
var Bd, rs, Zd, Wd;
Bd = function (e, t) {
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
rs = function () {};
Zd = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), en(lt.current);
		var l = null;
		switch (n) {
			case "input":
				(i = Co(e, i)), (r = Co(e, r)), (l = []);
				break;
			case "select":
				(i = ee({}, i, { value: void 0 })),
					(r = ee({}, r, { value: void 0 })),
					(l = []);
				break;
			case "textarea":
				(i = Po(e, i)), (r = Po(e, r)), (l = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = Ki);
		}
		Ro(n, r);
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
						(_r.hasOwnProperty(u)
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
								(_r.hasOwnProperty(u)
									? (a != null && u === "onScroll" && K("scroll", e),
										l || s === a || (l = []))
									: (l = l || []).push(u, a));
		}
		n && (l = l || []).push("style", n);
		var u = l;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Wd = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function lr(e, t) {
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
function Vh(e, t, n) {
	var r = t.pendingProps;
	switch ((Vs(t), t.tag)) {
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
			return je(t.type) && Gi(), ve(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Wn(),
				G(Pe),
				G(ge),
				Xs(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(xi(t)
						? (t.flags |= 4)
						: e === null ||
							(e.memoizedState.isDehydrated && !(t.flags & 256)) ||
							((t.flags |= 1024), Ke !== null && (ds(Ke), (Ke = null)))),
				rs(e, t),
				ve(t),
				null
			);
		case 5:
			Ys(t);
			var i = en(Ir.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Zd(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(_(166));
					return ve(t), null;
				}
				if (((e = en(lt.current)), xi(t))) {
					(r = t.stateNode), (n = t.type);
					var l = t.memoizedProps;
					switch (((r[rt] = t), (r[Or] = l), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							K("cancel", r), K("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							K("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < cr.length; i++) K(cr[i], r);
							break;
						case "source":
							K("error", r);
							break;
						case "img":
						case "image":
						case "link":
							K("error", r), K("load", r);
							break;
						case "details":
							K("toggle", r);
							break;
						case "input":
							ja(r, l), K("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!l.multiple }),
								K("invalid", r);
							break;
						case "textarea":
							Oa(r, l), K("invalid", r);
					}
					Ro(n, l), (i = null);
					for (var o in l)
						if (l.hasOwnProperty(o)) {
							var s = l[o];
							o === "children"
								? typeof s == "string"
									? r.textContent !== s &&
										(l.suppressHydrationWarning !== !0 &&
											gi(r.textContent, s, e),
										(i = ["children", s]))
									: typeof s == "number" &&
										r.textContent !== "" + s &&
										(l.suppressHydrationWarning !== !0 &&
											gi(r.textContent, s, e),
										(i = ["children", "" + s]))
								: _r.hasOwnProperty(o) &&
									s != null &&
									o === "onScroll" &&
									K("scroll", r);
						}
					switch (n) {
						case "input":
							ci(r), Ra(r, l, !0);
							break;
						case "textarea":
							ci(r), La(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof l.onClick == "function" && (r.onclick = Ki);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = yc(n)),
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
						(e[Or] = r),
						Bd(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Oo(n, r)), n)) {
							case "dialog":
								K("cancel", e), K("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								K("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < cr.length; i++) K(cr[i], e);
								i = r;
								break;
							case "source":
								K("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								K("error", e), K("load", e), (i = r);
								break;
							case "details":
								K("toggle", e), (i = r);
								break;
							case "input":
								ja(e, r), (i = Co(e, r)), K("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = ee({}, r, { value: void 0 })),
									K("invalid", e);
								break;
							case "textarea":
								Oa(e, r), (i = Po(e, r)), K("invalid", e);
								break;
							default:
								i = r;
						}
						Ro(n, i), (s = i);
						for (l in s)
							if (s.hasOwnProperty(l)) {
								var a = s[l];
								l === "style"
									? wc(e, a)
									: l === "dangerouslySetInnerHTML"
										? ((a = a ? a.__html : void 0), a != null && gc(e, a))
										: l === "children"
											? typeof a == "string"
												? (n !== "textarea" || a !== "") && kr(e, a)
												: typeof a == "number" && kr(e, "" + a)
											: l !== "suppressContentEditableWarning" &&
												l !== "suppressHydrationWarning" &&
												l !== "autoFocus" &&
												(_r.hasOwnProperty(l)
													? a != null && l === "onScroll" && K("scroll", e)
													: a != null && Ns(e, l, a, o));
							}
						switch (n) {
							case "input":
								ci(e), Ra(e, r, !1);
								break;
							case "textarea":
								ci(e), La(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + $t(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(l = r.value),
									l != null
										? In(e, !!r.multiple, l, !1)
										: r.defaultValue != null &&
											In(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = Ki);
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
			if (e && t.stateNode != null) Wd(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
				if (((n = en(Ir.current)), en(lt.current), xi(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[rt] = t),
						(l = r.nodeValue !== n) && ((e = Ie), e !== null))
					)
						switch (e.tag) {
							case 3:
								gi(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									gi(r.nodeValue, n, (e.mode & 1) !== 0);
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
				(G(q),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (X && Le !== null && t.mode & 1 && !(t.flags & 128))
					sd(), Bn(), (t.flags |= 98560), (l = !1);
				else if (((l = xi(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!l) throw Error(_(318));
						if (
							((l = t.memoizedState),
							(l = l !== null ? l.dehydrated : null),
							!l)
						)
							throw Error(_(317));
						l[rt] = t;
					} else
						Bn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					ve(t), (l = !1);
				} else Ke !== null && (ds(Ke), (Ke = null)), (l = !0);
				if (!l) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
					r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || q.current & 1 ? se === 0 && (se = 3) : aa())),
					t.updateQueue !== null && (t.flags |= 4),
					ve(t),
					null);
		case 4:
			return (
				Wn(), rs(e, t), e === null && jr(t.stateNode.containerInfo), ve(t), null
			);
		case 10:
			return Hs(t.type._context), ve(t), null;
		case 17:
			return je(t.type) && Gi(), ve(t), null;
		case 19:
			if ((G(q), (l = t.memoizedState), l === null)) return ve(t), null;
			if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
				if (r) lr(l, !1);
				else {
					if (se !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = tl(e)), o !== null)) {
								for (
									t.flags |= 128,
										lr(l, !1),
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
						re() > Qn &&
						((t.flags |= 128), (r = !0), lr(l, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = tl(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							lr(l, !0),
							l.tail === null && l.tailMode === "hidden" && !o.alternate && !X)
						)
							return ve(t), null;
					} else
						2 * re() - l.renderingStartTime > Qn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), lr(l, !1), (t.lanes = 4194304));
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
				sa(),
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
	throw Error(_(156, t.tag));
}
function Bh(e, t) {
	switch ((Vs(t), t.tag)) {
		case 1:
			return (
				je(t.type) && Gi(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Wn(),
				G(Pe),
				G(ge),
				Xs(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Ys(t), null;
		case 13:
			if ((G(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(_(340));
				Bn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return G(q), null;
		case 4:
			return Wn(), null;
		case 10:
			return Hs(t.type._context), null;
		case 22:
		case 23:
			return sa(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var ki = !1,
	ye = !1,
	Zh = typeof WeakSet == "function" ? WeakSet : Set,
	O = null;
function On(e, t) {
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
function is(e, t, n) {
	try {
		n();
	} catch (r) {
		te(e, t, r);
	}
}
var _u = !1;
function Wh(e, t) {
	if (((Vo = Wi), (e = Gc()), $s(e))) {
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
	for (Bo = { focusedElem: e, selectionRange: n }, Wi = !1, O = t; O !== null; )
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
									var x = y.memoizedProps,
										C = y.memoizedState,
										h = t.stateNode,
										p = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? x : He(t.type, x),
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
								throw Error(_(163));
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
	return (y = _u), (_u = !1), y;
}
function gr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var l = i.destroy;
				(i.destroy = void 0), l !== void 0 && is(t, n, l);
			}
			i = i.next;
		} while (i !== r);
	}
}
function Rl(e, t) {
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
function ls(e) {
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
function Hd(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Hd(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[rt], delete t[Or], delete t[Ho], delete t[Nh], delete t[Th])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Qd(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ku(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Qd(e.return)) return null;
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
function os(e, t, n) {
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
					n != null || t.onclick !== null || (t.onclick = Ki));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (os(e, t, n), e = e.sibling; e !== null; ) os(e, t, n), (e = e.sibling);
}
function ss(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), (e = e.sibling);
}
var de = null,
	Qe = !1;
function _t(e, t, n) {
	for (n = n.child; n !== null; ) Kd(e, t, n), (n = n.sibling);
}
function Kd(e, t, n) {
	if (it && typeof it.onCommitFiberUnmount == "function")
		try {
			it.onCommitFiberUnmount(kl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ye || On(n, t);
		case 6:
			var r = de,
				i = Qe;
			(de = null),
				_t(e, t, n),
				(de = r),
				(Qe = i),
				de !== null &&
					(Qe
						? ((e = de),
							(n = n.stateNode),
							e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: de.removeChild(n.stateNode));
			break;
		case 18:
			de !== null &&
				(Qe
					? ((e = de),
						(n = n.stateNode),
						e.nodeType === 8
							? io(e.parentNode, n)
							: e.nodeType === 1 && io(e, n),
						Nr(e))
					: io(de, n.stateNode));
			break;
		case 4:
			(r = de),
				(i = Qe),
				(de = n.stateNode.containerInfo),
				(Qe = !0),
				_t(e, t, n),
				(de = r),
				(Qe = i);
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
						o !== void 0 && (l & 2 || l & 4) && is(n, t, o),
						(i = i.next);
				} while (i !== r);
			}
			_t(e, t, n);
			break;
		case 1:
			if (
				!ye &&
				(On(n, t),
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
			_t(e, t, n);
			break;
		case 21:
			_t(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ye = (r = ye) || n.memoizedState !== null), _t(e, t, n), (ye = r))
				: _t(e, t, n);
			break;
		default:
			_t(e, t, n);
	}
}
function Su(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Zh()),
			t.forEach(function (r) {
				var i = bh.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function We(e, t) {
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
							(de = s.stateNode), (Qe = !1);
							break e;
						case 3:
							(de = s.stateNode.containerInfo), (Qe = !0);
							break e;
						case 4:
							(de = s.stateNode.containerInfo), (Qe = !0);
							break e;
					}
					s = s.return;
				}
				if (de === null) throw Error(_(160));
				Kd(l, o, i), (de = null), (Qe = !1);
				var a = i.alternate;
				a !== null && (a.return = null), (i.return = null);
			} catch (u) {
				te(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Gd(t, e), (t = t.sibling);
}
function Gd(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((We(t, e), tt(e), r & 4)) {
				try {
					gr(3, e, e.return), Rl(3, e);
				} catch (x) {
					te(e, e.return, x);
				}
				try {
					gr(5, e, e.return);
				} catch (x) {
					te(e, e.return, x);
				}
			}
			break;
		case 1:
			We(t, e), tt(e), r & 512 && n !== null && On(n, n.return);
			break;
		case 5:
			if (
				(We(t, e),
				tt(e),
				r & 512 && n !== null && On(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					kr(i, "");
				} catch (x) {
					te(e, e.return, x);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var l = e.memoizedProps,
					o = n !== null ? n.memoizedProps : l,
					s = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						s === "input" && l.type === "radio" && l.name != null && mc(i, l),
							Oo(s, o);
						var u = Oo(s, l);
						for (o = 0; o < a.length; o += 2) {
							var d = a[o],
								c = a[o + 1];
							d === "style"
								? wc(i, c)
								: d === "dangerouslySetInnerHTML"
									? gc(i, c)
									: d === "children"
										? kr(i, c)
										: Ns(i, d, c, u);
						}
						switch (s) {
							case "input":
								No(i, l);
								break;
							case "textarea":
								vc(i, l);
								break;
							case "select":
								var f = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!l.multiple;
								var v = l.value;
								v != null
									? In(i, !!l.multiple, v, !1)
									: f !== !!l.multiple &&
										(l.defaultValue != null
											? In(i, !!l.multiple, l.defaultValue, !0)
											: In(i, !!l.multiple, l.multiple ? [] : "", !1));
						}
						i[Or] = l;
					} catch (x) {
						te(e, e.return, x);
					}
			}
			break;
		case 6:
			if ((We(t, e), tt(e), r & 4)) {
				if (e.stateNode === null) throw Error(_(162));
				(i = e.stateNode), (l = e.memoizedProps);
				try {
					i.nodeValue = l;
				} catch (x) {
					te(e, e.return, x);
				}
			}
			break;
		case 3:
			if (
				(We(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Nr(t.containerInfo);
				} catch (x) {
					te(e, e.return, x);
				}
			break;
		case 4:
			We(t, e), tt(e);
			break;
		case 13:
			We(t, e),
				tt(e),
				(i = e.child),
				i.flags & 8192 &&
					((l = i.memoizedState !== null),
					(i.stateNode.isHidden = l),
					!l ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(la = re())),
				r & 4 && Su(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ye = (u = ye) || d), We(t, e), (ye = u)) : We(t, e),
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
									gr(4, f, f.return);
									break;
								case 1:
									On(f, f.return);
									var y = f.stateNode;
									if (typeof y.componentWillUnmount == "function") {
										(r = f), (n = f.return);
										try {
											(t = r),
												(y.props = t.memoizedProps),
												(y.state = t.memoizedState),
												y.componentWillUnmount();
										} catch (x) {
											te(r, n, x);
										}
									}
									break;
								case 5:
									On(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										Cu(c);
										continue;
									}
							}
							v !== null ? ((v.return = f), (O = v)) : Cu(c);
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
											(s.style.display = xc("display", o)));
							} catch (x) {
								te(e, e.return, x);
							}
						}
					} else if (c.tag === 6) {
						if (d === null)
							try {
								c.stateNode.nodeValue = u ? "" : c.memoizedProps;
							} catch (x) {
								te(e, e.return, x);
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
			We(t, e), tt(e), r & 4 && Su(e);
			break;
		case 21:
			break;
		default:
			We(t, e), tt(e);
	}
}
function tt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Qd(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(_(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (kr(i, ""), (r.flags &= -33));
					var l = ku(e);
					ss(e, l, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						s = ku(e);
					os(e, s, o);
					break;
				default:
					throw Error(_(161));
			}
		} catch (a) {
			te(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Hh(e, t, n) {
	(O = e), Yd(e);
}
function Yd(e, t, n) {
	for (var r = (e.mode & 1) !== 0; O !== null; ) {
		var i = O,
			l = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || ki;
			if (!o) {
				var s = i.alternate,
					a = (s !== null && s.memoizedState !== null) || ye;
				s = ki;
				var u = ye;
				if (((ki = o), (ye = a) && !u))
					for (O = i; O !== null; )
						(o = O),
							(a = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Nu(i)
								: a !== null
									? ((a.return = o), (O = a))
									: Nu(i);
				for (; l !== null; ) (O = l), Yd(l), (l = l.sibling);
				(O = i), (ki = s), (ye = u);
			}
			Eu(e);
		} else
			i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (O = l)) : Eu(e);
	}
}
function Eu(e) {
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
							ye || Rl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ye)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: He(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var l = t.updateQueue;
							l !== null && su(t, l, r);
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
								su(t, o, n);
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
										c !== null && Nr(c);
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
							throw Error(_(163));
					}
				ye || (t.flags & 512 && ls(t));
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
function Cu(e) {
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
function Nu(e) {
	for (; O !== null; ) {
		var t = O;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Rl(4, t);
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
						ls(t);
					} catch (a) {
						te(t, l, a);
					}
					break;
				case 5:
					var o = t.return;
					try {
						ls(t);
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
var Qh = Math.ceil,
	il = wt.ReactCurrentDispatcher,
	ra = wt.ReactCurrentOwner,
	Fe = wt.ReactCurrentBatchConfig,
	Z = 0,
	ce = null,
	ie = null,
	fe = 0,
	Oe = 0,
	Ln = Ht(0),
	se = 0,
	Ar = null,
	an = 0,
	Ol = 0,
	ia = 0,
	xr = null,
	Ne = null,
	la = 0,
	Qn = 1 / 0,
	ut = null,
	ll = !1,
	as = null,
	Mt = null,
	Si = !1,
	Pt = null,
	ol = 0,
	wr = 0,
	us = null,
	zi = -1,
	Mi = 0;
function ke() {
	return Z & 6 ? re() : zi !== -1 ? zi : (zi = re());
}
function Dt(e) {
	return e.mode & 1
		? Z & 2 && fe !== 0
			? fe & -fe
			: jh.transition !== null
				? (Mi === 0 && (Mi = Lc()), Mi)
				: ((e = H),
					e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $c(e.type))),
					e)
		: 1;
}
function Xe(e, t, n, r) {
	if (50 < wr) throw ((wr = 0), (us = null), Error(_(185)));
	br(e, n, r),
		(!(Z & 2) || e !== ce) &&
			(e === ce && (!(Z & 2) && (Ol |= n), se === 4 && Ct(e, fe)),
			Re(e, r),
			n === 1 && Z === 0 && !(t.mode & 1) && ((Qn = re() + 500), Tl && Qt()));
}
function Re(e, t) {
	var n = e.callbackNode;
	jp(e, t);
	var r = Zi(e, e === ce ? fe : 0);
	if (r === 0)
		n !== null && Ma(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Ma(n), t === 1))
			e.tag === 0 ? Ph(Tu.bind(null, e)) : id(Tu.bind(null, e)),
				Eh(function () {
					!(Z & 6) && Qt();
				}),
				(n = null);
		else {
			switch (Ic(r)) {
				case 1:
					n = Os;
					break;
				case 4:
					n = Rc;
					break;
				case 16:
					n = Bi;
					break;
				case 536870912:
					n = Oc;
					break;
				default:
					n = Bi;
			}
			n = rf(n, Xd.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Xd(e, t) {
	if (((zi = -1), (Mi = 0), Z & 6)) throw Error(_(327));
	var n = e.callbackNode;
	if (Un() && e.callbackNode !== n) return null;
	var r = Zi(e, e === ce ? fe : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = sl(e, r);
	else {
		t = r;
		var i = Z;
		Z |= 2;
		var l = qd();
		(ce !== e || fe !== t) && ((ut = null), (Qn = re() + 500), tn(e, t));
		do
			try {
				Yh();
				break;
			} catch (s) {
				Jd(e, s);
			}
		while (!0);
		Ws(),
			(il.current = l),
			(Z = i),
			ie !== null ? (t = 0) : ((ce = null), (fe = 0), (t = se));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = Do(e)), i !== 0 && ((r = i), (t = cs(e, i)))), t === 1)
		)
			throw ((n = Ar), tn(e, 0), Ct(e, r), Re(e, re()), n);
		if (t === 6) Ct(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Kh(i) &&
					((t = sl(e, r)),
					t === 2 && ((l = Do(e)), l !== 0 && ((r = l), (t = cs(e, l)))),
					t === 1))
			)
				throw ((n = Ar), tn(e, 0), Ct(e, r), Re(e, re()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(_(345));
				case 2:
					Jt(e, Ne, ut);
					break;
				case 3:
					if (
						(Ct(e, r), (r & 130023424) === r && ((t = la + 500 - re()), 10 < t))
					) {
						if (Zi(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							ke(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = Wo(Jt.bind(null, e, Ne, ut), t);
						break;
					}
					Jt(e, Ne, ut);
					break;
				case 4:
					if ((Ct(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - Ye(r);
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
													: 1960 * Qh(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Wo(Jt.bind(null, e, Ne, ut), r);
						break;
					}
					Jt(e, Ne, ut);
					break;
				case 5:
					Jt(e, Ne, ut);
					break;
				default:
					throw Error(_(329));
			}
		}
	}
	return Re(e, re()), e.callbackNode === n ? Xd.bind(null, e) : null;
}
function cs(e, t) {
	var n = xr;
	return (
		e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
		(e = sl(e, t)),
		e !== 2 && ((t = Ne), (Ne = n), t !== null && ds(t)),
		e
	);
}
function ds(e) {
	Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Kh(e) {
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
function Ct(e, t) {
	for (
		t &= ~ia,
			t &= ~Ol,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Ye(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Tu(e) {
	if (Z & 6) throw Error(_(327));
	Un();
	var t = Zi(e, 0);
	if (!(t & 1)) return Re(e, re()), null;
	var n = sl(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Do(e);
		r !== 0 && ((t = r), (n = cs(e, r)));
	}
	if (n === 1) throw ((n = Ar), tn(e, 0), Ct(e, t), Re(e, re()), n);
	if (n === 6) throw Error(_(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Jt(e, Ne, ut),
		Re(e, re()),
		null
	);
}
function oa(e, t) {
	var n = Z;
	Z |= 1;
	try {
		return e(t);
	} finally {
		(Z = n), Z === 0 && ((Qn = re() + 500), Tl && Qt());
	}
}
function un(e) {
	Pt !== null && Pt.tag === 0 && !(Z & 6) && Un();
	var t = Z;
	Z |= 1;
	var n = Fe.transition,
		r = H;
	try {
		if (((Fe.transition = null), (H = 1), e)) return e();
	} finally {
		(H = r), (Fe.transition = n), (Z = t), !(Z & 6) && Qt();
	}
}
function sa() {
	(Oe = Ln.current), G(Ln);
}
function tn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Sh(n)), ie !== null))
		for (n = ie.return; n !== null; ) {
			var r = n;
			switch ((Vs(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Gi();
					break;
				case 3:
					Wn(), G(Pe), G(ge), Xs();
					break;
				case 5:
					Ys(r);
					break;
				case 4:
					Wn();
					break;
				case 13:
					G(q);
					break;
				case 19:
					G(q);
					break;
				case 10:
					Hs(r.type._context);
					break;
				case 22:
				case 23:
					sa();
			}
			n = n.return;
		}
	if (
		((ce = e),
		(ie = e = At(e.current, null)),
		(fe = Oe = t),
		(se = 0),
		(Ar = null),
		(ia = Ol = an = 0),
		(Ne = xr = null),
		bt !== null)
	) {
		for (t = 0; t < bt.length; t++)
			if (((n = bt[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					l = n.pending;
				if (l !== null) {
					var o = l.next;
					(l.next = i), (r.next = o);
				}
				n.pending = r;
			}
		bt = null;
	}
	return e;
}
function Jd(e, t) {
	do {
		var n = ie;
		try {
			if ((Ws(), (Oi.current = rl), nl)) {
				for (var r = b.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				nl = !1;
			}
			if (
				((sn = 0),
				(ue = oe = b = null),
				(yr = !1),
				(zr = 0),
				(ra.current = null),
				n === null || n.return === null)
			) {
				(se = 1), (Ar = t), (ie = null);
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
					var v = hu(o);
					if (v !== null) {
						(v.flags &= -257),
							mu(v, o, s, l, t),
							v.mode & 1 && pu(l, u, t),
							(t = v),
							(a = u);
						var y = t.updateQueue;
						if (y === null) {
							var x = new Set();
							x.add(a), (t.updateQueue = x);
						} else y.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							pu(l, u, t), aa();
							break e;
						}
						a = Error(_(426));
					}
				} else if (X && s.mode & 1) {
					var C = hu(o);
					if (C !== null) {
						!(C.flags & 65536) && (C.flags |= 256),
							mu(C, o, s, l, t),
							Bs(Hn(a, s));
						break e;
					}
				}
				(l = a = Hn(a, s)),
					se !== 4 && (se = 2),
					xr === null ? (xr = [l]) : xr.push(l),
					(l = o);
				do {
					switch (l.tag) {
						case 3:
							(l.flags |= 65536), (t &= -t), (l.lanes |= t);
							var h = zd(l, a, t);
							ou(l, h);
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
										(Mt === null || !Mt.has(m))))
							) {
								(l.flags |= 65536), (t &= -t), (l.lanes |= t);
								var g = Md(l, s, t);
								ou(l, g);
								break e;
							}
					}
					l = l.return;
				} while (l !== null);
			}
			ef(n);
		} catch (w) {
			(t = w), ie === n && n !== null && (ie = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function qd() {
	var e = il.current;
	return (il.current = rl), e === null ? rl : e;
}
function aa() {
	(se === 0 || se === 3 || se === 2) && (se = 4),
		ce === null || (!(an & 268435455) && !(Ol & 268435455)) || Ct(ce, fe);
}
function sl(e, t) {
	var n = Z;
	Z |= 2;
	var r = qd();
	(ce !== e || fe !== t) && ((ut = null), tn(e, t));
	do
		try {
			Gh();
			break;
		} catch (i) {
			Jd(e, i);
		}
	while (!0);
	if ((Ws(), (Z = n), (il.current = r), ie !== null)) throw Error(_(261));
	return (ce = null), (fe = 0), se;
}
function Gh() {
	for (; ie !== null; ) bd(ie);
}
function Yh() {
	for (; ie !== null && !wp(); ) bd(ie);
}
function bd(e) {
	var t = nf(e.alternate, e, Oe);
	(e.memoizedProps = e.pendingProps),
		t === null ? ef(e) : (ie = t),
		(ra.current = null);
}
function ef(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Bh(n, t)), n !== null)) {
				(n.flags &= 32767), (ie = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(se = 6), (ie = null);
				return;
			}
		} else if (((n = Vh(n, t, Oe)), n !== null)) {
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
function Jt(e, t, n) {
	var r = H,
		i = Fe.transition;
	try {
		(Fe.transition = null), (H = 1), Xh(e, t, n, r);
	} finally {
		(Fe.transition = i), (H = r);
	}
	return null;
}
function Xh(e, t, n, r) {
	do Un();
	while (Pt !== null);
	if (Z & 6) throw Error(_(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(_(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var l = n.lanes | n.childLanes;
	if (
		(Rp(e, l),
		e === ce && ((ie = ce = null), (fe = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Si ||
			((Si = !0),
			rf(Bi, function () {
				return Un(), null;
			})),
		(l = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || l)
	) {
		(l = Fe.transition), (Fe.transition = null);
		var o = H;
		H = 1;
		var s = Z;
		(Z |= 4),
			(ra.current = null),
			Wh(e, n),
			Gd(n, e),
			vh(Bo),
			(Wi = !!Vo),
			(Bo = Vo = null),
			(e.current = n),
			Hh(n),
			_p(),
			(Z = s),
			(H = o),
			(Fe.transition = l);
	} else e.current = n;
	if (
		(Si && ((Si = !1), (Pt = e), (ol = i)),
		(l = e.pendingLanes),
		l === 0 && (Mt = null),
		Ep(n.stateNode),
		Re(e, re()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (ll) throw ((ll = !1), (e = as), (as = null), e);
	return (
		ol & 1 && e.tag !== 0 && Un(),
		(l = e.pendingLanes),
		l & 1 ? (e === us ? wr++ : ((wr = 0), (us = e))) : (wr = 0),
		Qt(),
		null
	);
}
function Un() {
	if (Pt !== null) {
		var e = Ic(ol),
			t = Fe.transition,
			n = H;
		try {
			if (((Fe.transition = null), (H = 16 > e ? 16 : e), Pt === null))
				var r = !1;
			else {
				if (((e = Pt), (Pt = null), (ol = 0), Z & 6)) throw Error(_(331));
				var i = Z;
				for (Z |= 4, O = e.current; O !== null; ) {
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
											gr(8, d, l);
									}
									var c = d.child;
									if (c !== null) (c.return = d), (O = c);
									else
										for (; O !== null; ) {
											d = O;
											var f = d.sibling,
												v = d.return;
											if ((Hd(d), d === u)) {
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
								var x = y.child;
								if (x !== null) {
									y.child = null;
									do {
										var C = x.sibling;
										(x.sibling = null), (x = C);
									} while (x !== null);
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
										gr(9, l, l.return);
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
											Rl(9, s);
									}
								} catch (w) {
									te(s, s.return, w);
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
					((Z = i), Qt(), it && typeof it.onPostCommitFiberRoot == "function")
				)
					try {
						it.onPostCommitFiberRoot(kl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(H = n), (Fe.transition = t);
		}
	}
	return !1;
}
function Pu(e, t, n) {
	(t = Hn(n, t)),
		(t = zd(e, t, 1)),
		(e = zt(e, t, 1)),
		(t = ke()),
		e !== null && (br(e, 1, t), Re(e, t));
}
function te(e, t, n) {
	if (e.tag === 3) Pu(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Pu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(Mt === null || !Mt.has(r)))
				) {
					(e = Hn(n, e)),
						(e = Md(t, e, 1)),
						(t = zt(t, e, 1)),
						(e = ke()),
						t !== null && (br(t, 1, e), Re(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Jh(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = ke()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ce === e &&
			(fe & n) === n &&
			(se === 4 || (se === 3 && (fe & 130023424) === fe && 500 > re() - la)
				? tn(e, 0)
				: (ia |= n)),
		Re(e, t);
}
function tf(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = pi), (pi <<= 1), !(pi & 130023424) && (pi = 4194304))
			: (t = 1));
	var n = ke();
	(e = yt(e, t)), e !== null && (br(e, t, n), Re(e, n));
}
function qh(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), tf(e, n);
}
function bh(e, t) {
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
			throw Error(_(314));
	}
	r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Pe.current) Te = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), Fh(e, t, n);
			Te = !!(e.flags & 131072);
		}
	else (Te = !1), X && t.flags & 1048576 && ld(t, Ji, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Ii(e, t), (e = t.pendingProps);
			var i = Vn(t, ge.current);
			An(t, n), (i = qs(null, t, r, e, i, n));
			var l = bs();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
						(t.memoizedState = null),
						(t.updateQueue = null),
						je(r) ? ((l = !0), Yi(t)) : (l = !1),
						(t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
						Ks(t),
						(i.updater = Pl),
						(t.stateNode = i),
						(i._reactInternals = t),
						Jo(t, r, e, n),
						(t = es(null, t, r, !0, l, n)))
					: ((t.tag = 0), X && l && Fs(t), _e(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Ii(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = tm(r)),
					(e = He(r, e)),
					i)
				) {
					case 0:
						t = bo(null, t, r, e, n);
						break e;
					case 1:
						t = gu(null, t, r, e, n);
						break e;
					case 11:
						t = vu(null, t, r, e, n);
						break e;
					case 14:
						t = yu(null, t, r, He(r.type, e), n);
						break e;
				}
				throw Error(_(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : He(r, i)),
				bo(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : He(r, i)),
				gu(e, t, r, i, n)
			);
		case 3:
			e: {
				if (($d(t), e === null)) throw Error(_(387));
				(r = t.pendingProps),
					(l = t.memoizedState),
					(i = l.element),
					ud(e, t),
					el(t, r, null, n);
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
						(i = Hn(Error(_(423)), t)), (t = xu(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = Hn(Error(_(424)), t)), (t = xu(e, t, r, n, i));
						break e;
					} else
						for (
							Le = It(t.stateNode.containerInfo.firstChild),
								Ie = t,
								X = !0,
								Ke = null,
								n = pd(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Bn(), r === i)) {
						t = gt(e, t, n);
						break e;
					}
					_e(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				hd(t),
				e === null && Go(t),
				(r = t.type),
				(i = t.pendingProps),
				(l = e !== null ? e.memoizedProps : null),
				(o = i.children),
				Zo(r, i) ? (o = null) : l !== null && Zo(r, l) && (t.flags |= 32),
				Ud(e, t),
				_e(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && Go(t), null;
		case 13:
			return Fd(e, t, n);
		case 4:
			return (
				Gs(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Zn(t, null, r, n)) : _e(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : He(r, i)),
				vu(e, t, r, i, n)
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
					Q(qi, r._currentValue),
					(r._currentValue = o),
					l !== null)
				)
					if (be(l.value, o)) {
						if (l.children === i.children && !Pe.current) {
							t = gt(e, t, n);
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
											(a = pt(-1, n & -n)), (a.tag = 2);
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
											Yo(l.return, n, t),
											(s.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (l.tag === 10) o = l.type === t.type ? null : l.child;
							else if (l.tag === 18) {
								if (((o = l.return), o === null)) throw Error(_(341));
								(o.lanes |= n),
									(s = o.alternate),
									s !== null && (s.lanes |= n),
									Yo(o, n, t),
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
				An(t, n),
				(i = Ve(i)),
				(r = r(i)),
				(t.flags |= 1),
				_e(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = He(r, t.pendingProps)),
				(i = He(r.type, i)),
				yu(e, t, r, i, n)
			);
		case 15:
			return Dd(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : He(r, i)),
				Ii(e, t),
				(t.tag = 1),
				je(r) ? ((e = !0), Yi(t)) : (e = !1),
				An(t, n),
				dd(t, r, i),
				Jo(t, r, i, n),
				es(null, t, r, !0, e, n)
			);
		case 19:
			return Vd(e, t, n);
		case 22:
			return Ad(e, t, n);
	}
	throw Error(_(156, t.tag));
};
function rf(e, t) {
	return jc(e, t);
}
function em(e, t, n, r) {
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
function $e(e, t, n, r) {
	return new em(e, t, n, r);
}
function ua(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function tm(e) {
	if (typeof e == "function") return ua(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Ps)) return 11;
		if (e === js) return 14;
	}
	return 2;
}
function At(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = $e(e.tag, t, e.key, e.mode)),
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
function Di(e, t, n, r, i, l) {
	var o = 2;
	if (((r = e), typeof e == "function")) ua(e) && (o = 1);
	else if (typeof e == "string") o = 5;
	else
		e: switch (e) {
			case kn:
				return nn(n.children, i, l, t);
			case Ts:
				(o = 8), (i |= 8);
				break;
			case _o:
				return (
					(e = $e(12, n, t, i | 2)), (e.elementType = _o), (e.lanes = l), e
				);
			case ko:
				return (e = $e(13, n, t, i)), (e.elementType = ko), (e.lanes = l), e;
			case So:
				return (e = $e(19, n, t, i)), (e.elementType = So), (e.lanes = l), e;
			case fc:
				return Ll(n, i, l, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case cc:
							o = 10;
							break e;
						case dc:
							o = 9;
							break e;
						case Ps:
							o = 11;
							break e;
						case js:
							o = 14;
							break e;
						case kt:
							(o = 16), (r = null);
							break e;
					}
				throw Error(_(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = $e(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
	);
}
function nn(e, t, n, r) {
	return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function Ll(e, t, n, r) {
	return (
		(e = $e(22, e, r, t)),
		(e.elementType = fc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function po(e, t, n) {
	return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function ho(e, t, n) {
	return (
		(t = $e(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function nm(e, t, n, r, i) {
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
		(this.eventTimes = Kl(0)),
		(this.expirationTimes = Kl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Kl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function ca(e, t, n, r, i, l, o, s, a) {
	return (
		(e = new nm(e, t, n, s, a)),
		t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
		(l = $e(3, null, null, t)),
		(e.current = l),
		(l.stateNode = e),
		(l.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Ks(l),
		e
	);
}
function rm(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: _n,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function lf(e) {
	if (!e) return Ft;
	e = e._reactInternals;
	e: {
		if (mn(e) !== e || e.tag !== 1) throw Error(_(170));
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
		throw Error(_(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (je(n)) return rd(e, n, t);
	}
	return t;
}
function of(e, t, n, r, i, l, o, s, a) {
	return (
		(e = ca(n, r, !0, e, i, l, o, s, a)),
		(e.context = lf(null)),
		(n = e.current),
		(r = ke()),
		(i = Dt(n)),
		(l = pt(r, i)),
		(l.callback = t ?? null),
		zt(n, l, i),
		(e.current.lanes = i),
		br(e, i, r),
		Re(e, r),
		e
	);
}
function Il(e, t, n, r) {
	var i = t.current,
		l = ke(),
		o = Dt(i);
	return (
		(n = lf(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = pt(l, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = zt(i, t, o)),
		e !== null && (Xe(e, i, o, l), Ri(e, i, o)),
		o
	);
}
function al(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function ju(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function da(e, t) {
	ju(e, t), (e = e.alternate) && ju(e, t);
}
function im() {
	return null;
}
var sf =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
			};
function fa(e) {
	this._internalRoot = e;
}
zl.prototype.render = fa.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(_(409));
	Il(e, t, null, null);
};
zl.prototype.unmount = fa.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		un(function () {
			Il(null, e, null, null);
		}),
			(t[vt] = null);
	}
};
function zl(e) {
	this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Dc();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
		Et.splice(n, 0, e), n === 0 && Uc(e);
	}
};
function pa(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ml(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Ru() {}
function lm(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var l = r;
			r = function () {
				var u = al(o);
				l.call(u);
			};
		}
		var o = of(t, r, e, 0, null, !1, !1, "", Ru);
		return (
			(e._reactRootContainer = o),
			(e[vt] = o.current),
			jr(e.nodeType === 8 ? e.parentNode : e),
			un(),
			o
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var s = r;
		r = function () {
			var u = al(a);
			s.call(u);
		};
	}
	var a = ca(e, 0, !1, null, null, !1, !1, "", Ru);
	return (
		(e._reactRootContainer = a),
		(e[vt] = a.current),
		jr(e.nodeType === 8 ? e.parentNode : e),
		un(function () {
			Il(t, a, n, r);
		}),
		a
	);
}
function Dl(e, t, n, r, i) {
	var l = n._reactRootContainer;
	if (l) {
		var o = l;
		if (typeof i == "function") {
			var s = i;
			i = function () {
				var a = al(o);
				s.call(a);
			};
		}
		Il(t, o, e, i);
	} else o = lm(n, t, e, i, r);
	return al(o);
}
zc = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = ur(t.pendingLanes);
				n !== 0 &&
					(Ls(t, n | 1), Re(t, re()), !(Z & 6) && ((Qn = re() + 500), Qt()));
			}
			break;
		case 13:
			un(function () {
				var r = yt(e, 1);
				if (r !== null) {
					var i = ke();
					Xe(r, e, 1, i);
				}
			}),
				da(e, 1);
	}
};
Is = function (e) {
	if (e.tag === 13) {
		var t = yt(e, 134217728);
		if (t !== null) {
			var n = ke();
			Xe(t, e, 134217728, n);
		}
		da(e, 134217728);
	}
};
Mc = function (e) {
	if (e.tag === 13) {
		var t = Dt(e),
			n = yt(e, t);
		if (n !== null) {
			var r = ke();
			Xe(n, e, t, r);
		}
		da(e, t);
	}
};
Dc = function () {
	return H;
};
Ac = function (e, t) {
	var n = H;
	try {
		return (H = e), t();
	} finally {
		H = n;
	}
};
Io = function (e, t, n) {
	switch (t) {
		case "input":
			if ((No(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
						var i = Nl(r);
						if (!i) throw Error(_(90));
						hc(r), No(r, i);
					}
				}
			}
			break;
		case "textarea":
			vc(e, n);
			break;
		case "select":
			(t = n.value), t != null && In(e, !!n.multiple, t, !1);
	}
};
Sc = oa;
Ec = un;
var om = { usingClientEntryPoint: !1, Events: [ti, Nn, Nl, _c, kc, oa] },
	or = {
		findFiberByHostInstance: qt,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	sm = {
		bundleType: or.bundleType,
		version: or.version,
		rendererPackageName: or.rendererPackageName,
		rendererConfig: or.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: wt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Tc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: or.findFiberByHostInstance || im,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Ei.isDisabled && Ei.supportsFiber)
		try {
			(kl = Ei.inject(sm)), (it = Ei);
		} catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = om;
Me.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!pa(t)) throw Error(_(200));
	return rm(e, t, null, n);
};
Me.createRoot = function (e, t) {
	if (!pa(e)) throw Error(_(299));
	var n = !1,
		r = "",
		i = sf;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = ca(e, 1, !1, null, null, n, !1, r, i)),
		(e[vt] = t.current),
		jr(e.nodeType === 8 ? e.parentNode : e),
		new fa(t)
	);
};
Me.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(_(188))
			: ((e = Object.keys(e).join(",")), Error(_(268, e)));
	return (e = Tc(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
	return un(e);
};
Me.hydrate = function (e, t, n) {
	if (!Ml(t)) throw Error(_(200));
	return Dl(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
	if (!pa(e)) throw Error(_(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		l = "",
		o = sf;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = of(t, null, e, 1, n ?? null, i, !1, l, o)),
		(e[vt] = t.current),
		jr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new zl(t);
};
Me.render = function (e, t, n) {
	if (!Ml(t)) throw Error(_(200));
	return Dl(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
	if (!Ml(e)) throw Error(_(40));
	return e._reactRootContainer
		? (un(function () {
				Dl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[vt] = null);
				});
			}),
			!0)
		: !1;
};
Me.unstable_batchedUpdates = oa;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Ml(n)) throw Error(_(200));
	if (e == null || e._reactInternals === void 0) throw Error(_(38));
	return Dl(e, t, n, !1, r);
};
Me.version = "18.2.0-next-9e3b772b8-20220608";
function af() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(af);
		} catch (e) {
			console.error(e);
		}
}
af(), (lc.exports = Me);
var am = lc.exports,
	Ou = am;
(xo.createRoot = Ou.createRoot), (xo.hydrateRoot = Ou.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ur() {
	return (
		(Ur = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		Ur.apply(this, arguments)
	);
}
var jt;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(jt || (jt = {}));
const Lu = "popstate";
function um(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: l, search: o, hash: s } = r.location;
		return fs(
			"",
			{ pathname: l, search: o, hash: s },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default",
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : ul(i);
	}
	return dm(t, n, null, e);
}
function le(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function uf(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function cm() {
	return Math.random().toString(36).substr(2, 8);
}
function Iu(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function fs(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Ur(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? qn(t) : t,
			{ state: n, key: (t && t.key) || r || cm() },
		)
	);
}
function ul(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function qn(e) {
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
function dm(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: l = !1 } = r,
		o = i.history,
		s = jt.Pop,
		a = null,
		u = d();
	u == null && ((u = 0), o.replaceState(Ur({}, o.state, { idx: u }), ""));
	function d() {
		return (o.state || { idx: null }).idx;
	}
	function c() {
		s = jt.Pop;
		let C = d(),
			h = C == null ? null : C - u;
		(u = C), a && a({ action: s, location: x.location, delta: h });
	}
	function f(C, h) {
		s = jt.Push;
		let p = fs(x.location, C, h);
		n && n(p, C), (u = d() + 1);
		let m = Iu(p, u),
			g = x.createHref(p);
		try {
			o.pushState(m, "", g);
		} catch (w) {
			if (w instanceof DOMException && w.name === "DataCloneError") throw w;
			i.location.assign(g);
		}
		l && a && a({ action: s, location: x.location, delta: 1 });
	}
	function v(C, h) {
		s = jt.Replace;
		let p = fs(x.location, C, h);
		n && n(p, C), (u = d());
		let m = Iu(p, u),
			g = x.createHref(p);
		o.replaceState(m, "", g),
			l && a && a({ action: s, location: x.location, delta: 0 });
	}
	function y(C) {
		let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
			p = typeof C == "string" ? C : ul(C);
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
	let x = {
		get action() {
			return s;
		},
		get location() {
			return e(i, o);
		},
		listen(C) {
			if (a) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(Lu, c),
				(a = C),
				() => {
					i.removeEventListener(Lu, c), (a = null);
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
	return x;
}
var zu;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(zu || (zu = {}));
function fm(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? qn(t) : t,
		i = ha(r.pathname || "/", n);
	if (i == null) return null;
	let l = cf(e);
	pm(l);
	let o = null;
	for (let s = 0; o == null && s < l.length; ++s) {
		let a = Cm(i);
		o = km(l[s], a);
	}
	return o;
}
function cf(e, t, n, r) {
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
			cf(l.children, t, d, u)),
			!(l.path == null && !l.index) &&
				t.push({ path: u, score: wm(u, l.index), routesMeta: d });
	};
	return (
		e.forEach((l, o) => {
			var s;
			if (l.path === "" || !((s = l.path) != null && s.includes("?"))) i(l, o);
			else for (let a of df(l.path)) i(l, o, a);
		}),
		t
	);
}
function df(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		l = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [l, ""] : [l];
	let o = df(r.join("/")),
		s = [];
	return (
		s.push(...o.map((a) => (a === "" ? l : [l, a].join("/")))),
		i && s.push(...o),
		s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
	);
}
function pm(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: _m(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex),
				),
	);
}
const hm = /^:[\w-]+$/,
	mm = 3,
	vm = 2,
	ym = 1,
	gm = 10,
	xm = -2,
	Mu = (e) => e === "*";
function wm(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Mu) && (r += xm),
		t && (r += vm),
		n
			.filter((i) => !Mu(i))
			.reduce((i, l) => i + (hm.test(l) ? mm : l === "" ? ym : gm), r)
	);
}
function _m(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function km(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		l = [];
	for (let o = 0; o < n.length; ++o) {
		let s = n[o],
			a = o === n.length - 1,
			u = i === "/" ? t : t.slice(i.length) || "/",
			d = Sm(
				{ path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
				u,
			);
		if (!d) return null;
		Object.assign(r, d.params);
		let c = s.route;
		l.push({
			params: r,
			pathname: Ut([i, d.pathname]),
			pathnameBase: jm(Ut([i, d.pathnameBase])),
			route: c,
		}),
			d.pathnameBase !== "/" && (i = Ut([i, d.pathnameBase]));
	}
	return l;
}
function Sm(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Em(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let l = i[0],
		o = l.replace(/(.)\/+$/, "$1"),
		s = i.slice(1);
	return {
		params: r.reduce((u, d, c) => {
			let { paramName: f, isOptional: v } = d;
			if (f === "*") {
				let x = s[c] || "";
				o = l.slice(0, l.length - x.length).replace(/(.)\/+$/, "$1");
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
function Em(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		uf(
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
function Cm(e) {
	try {
		return e
			.split("/")
			.map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
			.join("/");
	} catch (t) {
		return (
			uf(
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
function ha(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function Nm(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof e == "string" ? qn(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : Tm(n, t)) : t,
		search: Rm(r),
		hash: Om(i),
	};
}
function Tm(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function mo(e, t, n, r) {
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
function Pm(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
	);
}
function ff(e, t) {
	let n = Pm(e);
	return t
		? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function pf(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = qn(e))
		: ((i = Ur({}, e)),
			le(
				!i.pathname || !i.pathname.includes("?"),
				mo("?", "pathname", "search", i),
			),
			le(
				!i.pathname || !i.pathname.includes("#"),
				mo("#", "pathname", "hash", i),
			),
			le(!i.search || !i.search.includes("#"), mo("#", "search", "hash", i)));
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
	let a = Nm(i, s),
		u = o && o !== "/" && o.endsWith("/"),
		d = (l || o === ".") && n.endsWith("/");
	return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const Ut = (e) => e.join("/").replace(/\/\/+/g, "/"),
	jm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Rm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	Om = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Lm(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const hf = ["post", "put", "patch", "delete"];
new Set(hf);
const Im = ["get", ...hf];
new Set(Im);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $r() {
	return (
		($r = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		$r.apply(this, arguments)
	);
}
const ma = S.createContext(null),
	zm = S.createContext(null),
	vn = S.createContext(null),
	Al = S.createContext(null),
	Kt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	mf = S.createContext(null);
function Mm(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	ri() || le(!1);
	let { basename: r, navigator: i } = S.useContext(vn),
		{ hash: l, pathname: o, search: s } = gf(e, { relative: n }),
		a = o;
	return (
		r !== "/" && (a = o === "/" ? r : Ut([r, o])),
		i.createHref({ pathname: a, search: s, hash: l })
	);
}
function ri() {
	return S.useContext(Al) != null;
}
function ii() {
	return ri() || le(!1), S.useContext(Al).location;
}
function vf(e) {
	S.useContext(vn).static || S.useLayoutEffect(e);
}
function yf() {
	let { isDataRoute: e } = S.useContext(Kt);
	return e ? Gm() : Dm();
}
function Dm() {
	ri() || le(!1);
	let e = S.useContext(ma),
		{ basename: t, future: n, navigator: r } = S.useContext(vn),
		{ matches: i } = S.useContext(Kt),
		{ pathname: l } = ii(),
		o = JSON.stringify(ff(i, n.v7_relativeSplatPath)),
		s = S.useRef(!1);
	return (
		vf(() => {
			s.current = !0;
		}),
		S.useCallback(
			function (u, d) {
				if ((d === void 0 && (d = {}), !s.current)) return;
				if (typeof u == "number") {
					r.go(u);
					return;
				}
				let c = pf(u, JSON.parse(o), l, d.relative === "path");
				e == null &&
					t !== "/" &&
					(c.pathname = c.pathname === "/" ? t : Ut([t, c.pathname])),
					(d.replace ? r.replace : r.push)(c, d.state, d);
			},
			[t, r, o, l, e],
		)
	);
}
function fg() {
	let { matches: e } = S.useContext(Kt),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function gf(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = S.useContext(vn),
		{ matches: i } = S.useContext(Kt),
		{ pathname: l } = ii(),
		o = JSON.stringify(ff(i, r.v7_relativeSplatPath));
	return S.useMemo(() => pf(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Am(e, t) {
	return Um(e, t);
}
function Um(e, t, n, r) {
	ri() || le(!1);
	let { navigator: i } = S.useContext(vn),
		{ matches: l } = S.useContext(Kt),
		o = l[l.length - 1],
		s = o ? o.params : {};
	o && o.pathname;
	let a = o ? o.pathnameBase : "/";
	o && o.route;
	let u = ii(),
		d;
	if (t) {
		var c;
		let C = typeof t == "string" ? qn(t) : t;
		a === "/" || ((c = C.pathname) != null && c.startsWith(a)) || le(!1),
			(d = C);
	} else d = u;
	let f = d.pathname || "/",
		v = f;
	if (a !== "/") {
		let C = a.replace(/^\//, "").split("/");
		v = "/" + f.replace(/^\//, "").split("/").slice(C.length).join("/");
	}
	let y = fm(e, { pathname: v }),
		x = Zm(
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
	return t && x
		? S.createElement(
				Al.Provider,
				{
					value: {
						location: $r(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							d,
						),
						navigationType: jt.Pop,
					},
				},
				x,
			)
		: x;
}
function $m() {
	let e = Km(),
		t = Lm(e)
			? e.status + " " + e.statusText
			: e instanceof Error
				? e.message
				: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return S.createElement(
		S.Fragment,
		null,
		S.createElement("h2", null, "Unexpected Application Error!"),
		S.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? S.createElement("pre", { style: i }, n) : null,
		null,
	);
}
const Fm = S.createElement($m, null);
class Vm extends S.Component {
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
			? S.createElement(
					Kt.Provider,
					{ value: this.props.routeContext },
					S.createElement(mf.Provider, {
						value: this.state.error,
						children: this.props.component,
					}),
				)
			: this.props.children;
	}
}
function Bm(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = S.useContext(ma);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		S.createElement(Kt.Provider, { value: t }, r)
	);
}
function Zm(e, t, n, r) {
	var i;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var l;
		if ((l = n) != null && l.errors) e = n.matches;
		else return null;
	}
	let o = e,
		s = (i = n) == null ? void 0 : i.errors;
	if (s != null) {
		let d = o.findIndex(
			(c) => c.route.id && (s == null ? void 0 : s[c.route.id]),
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
			x = null,
			C = null;
		n &&
			((v = s && c.route.id ? s[c.route.id] : void 0),
			(x = c.route.errorElement || Fm),
			a &&
				(u < 0 && f === 0
					? (Ym("route-fallback", !1), (y = !0), (C = null))
					: u === f &&
						((y = !0), (C = c.route.hydrateFallbackElement || null))));
		let h = t.concat(o.slice(0, f + 1)),
			p = () => {
				let m;
				return (
					v
						? (m = x)
						: y
							? (m = C)
							: c.route.Component
								? (m = S.createElement(c.route.Component, null))
								: c.route.element
									? (m = c.route.element)
									: (m = d),
					S.createElement(Bm, {
						match: c,
						routeContext: { outlet: d, matches: h, isDataRoute: n != null },
						children: m,
					})
				);
			};
		return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
			? S.createElement(Vm, {
					location: n.location,
					revalidation: n.revalidation,
					component: x,
					error: v,
					children: p(),
					routeContext: { outlet: null, matches: h, isDataRoute: !0 },
				})
			: p();
	}, null);
}
var xf = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(xf || {}),
	cl = (function (e) {
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
	})(cl || {});
function Wm(e) {
	let t = S.useContext(ma);
	return t || le(!1), t;
}
function Hm(e) {
	let t = S.useContext(zm);
	return t || le(!1), t;
}
function Qm(e) {
	let t = S.useContext(Kt);
	return t || le(!1), t;
}
function wf(e) {
	let t = Qm(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || le(!1), n.route.id;
}
function Km() {
	var e;
	let t = S.useContext(mf),
		n = Hm(cl.UseRouteError),
		r = wf(cl.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Gm() {
	let { router: e } = Wm(xf.UseNavigateStable),
		t = wf(cl.UseNavigateStable),
		n = S.useRef(!1);
	return (
		vf(() => {
			n.current = !0;
		}),
		S.useCallback(
			function (i, l) {
				l === void 0 && (l = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, $r({ fromRouteId: t }, l)));
			},
			[e, t],
		)
	);
}
const Du = {};
function Ym(e, t, n) {
	!t && !Du[e] && (Du[e] = !0);
}
function dr(e) {
	le(!1);
}
function Xm(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = jt.Pop,
		navigator: l,
		static: o = !1,
		future: s,
	} = e;
	ri() && le(!1);
	let a = t.replace(/^\/*/, "/"),
		u = S.useMemo(
			() => ({
				basename: a,
				navigator: l,
				static: o,
				future: $r({ v7_relativeSplatPath: !1 }, s),
			}),
			[a, s, l, o],
		);
	typeof r == "string" && (r = qn(r));
	let {
			pathname: d = "/",
			search: c = "",
			hash: f = "",
			state: v = null,
			key: y = "default",
		} = r,
		x = S.useMemo(() => {
			let C = ha(d, a);
			return C == null
				? null
				: {
						location: { pathname: C, search: c, hash: f, state: v, key: y },
						navigationType: i,
					};
		}, [a, d, c, f, v, y, i]);
	return x == null
		? null
		: S.createElement(
				vn.Provider,
				{ value: u },
				S.createElement(Al.Provider, { children: n, value: x }),
			);
}
function Jm(e) {
	let { children: t, location: n } = e;
	return Am(ps(t), n);
}
new Promise(() => {});
function ps(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		S.Children.forEach(e, (r, i) => {
			if (!S.isValidElement(r)) return;
			let l = [...t, i];
			if (r.type === S.Fragment) {
				n.push.apply(n, ps(r.props.children, l));
				return;
			}
			r.type !== dr && le(!1), !r.props.index || !r.props.children || le(!1);
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
			r.props.children && (o.children = ps(r.props.children, l)), n.push(o);
		}),
		n
	);
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hs() {
	return (
		(hs = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		hs.apply(this, arguments)
	);
}
function qm(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		l;
	for (l = 0; l < r.length; l++)
		(i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function bm(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ev(e, t) {
	return e.button === 0 && (!t || t === "_self") && !bm(e);
}
function ms(e) {
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
function tv(e, t) {
	let n = ms(e);
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
const nv = [
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
	rv = "6";
try {
	window.__reactRouterVersion = rv;
} catch {}
const iv = "startTransition",
	Au = qf[iv];
function lv(e) {
	let { basename: t, children: n, future: r, window: i } = e,
		l = S.useRef();
	l.current == null && (l.current = um({ window: i, v5Compat: !0 }));
	let o = l.current,
		[s, a] = S.useState({ action: o.action, location: o.location }),
		{ v7_startTransition: u } = r || {},
		d = S.useCallback(
			(c) => {
				u && Au ? Au(() => a(c)) : a(c);
			},
			[a, u],
		);
	return (
		S.useLayoutEffect(() => o.listen(d), [o, d]),
		S.createElement(Xm, {
			basename: t,
			children: n,
			location: s.location,
			navigationType: s.action,
			navigator: o,
			future: r,
		})
	);
}
const ov =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	sv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	av = S.forwardRef(function (t, n) {
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
			f = qm(t, nv),
			{ basename: v } = S.useContext(vn),
			y,
			x = !1;
		if (typeof u == "string" && sv.test(u) && ((y = u), ov))
			try {
				let m = new URL(window.location.href),
					g = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
					w = ha(g.pathname, v);
				g.origin === m.origin && w != null
					? (u = w + g.search + g.hash)
					: (x = !0);
			} catch {}
		let C = Mm(u, { relative: i }),
			h = uv(u, {
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
		return S.createElement(
			"a",
			hs({}, f, { href: y || C, onClick: x || l ? r : p, ref: n, target: a }),
		);
	});
var Uu;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(Uu || (Uu = {}));
var $u;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})($u || ($u = {}));
function uv(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: l,
			relative: o,
			unstable_viewTransition: s,
		} = t === void 0 ? {} : t,
		a = yf(),
		u = ii(),
		d = gf(e, { relative: o });
	return S.useCallback(
		(c) => {
			if (ev(c, n)) {
				c.preventDefault();
				let f = r !== void 0 ? r : ul(u) === ul(d);
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
function pg(e) {
	let t = S.useRef(ms(e)),
		n = S.useRef(!1),
		r = ii(),
		i = S.useMemo(() => tv(r.search, n.current ? null : t.current), [r.search]),
		l = yf(),
		o = S.useCallback(
			(s, a) => {
				const u = ms(typeof s == "function" ? s(i) : s);
				(n.current = !0), l("?" + u, a);
			},
			[l, i],
		);
	return [i, o];
}
const cv = S.createContext({}),
	dv = ({ children: e }) => k.jsx(cv.Provider, { value: {}, children: e });
var W;
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
})(W || (W = {}));
var vs;
(function (e) {
	e.mergeShapes = (t, n) => ({ ...t, ...n });
})(vs || (vs = {}));
const j = W.arrayToEnum([
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
	Nt = (e) => {
		switch (typeof e) {
			case "undefined":
				return j.undefined;
			case "string":
				return j.string;
			case "number":
				return isNaN(e) ? j.nan : j.number;
			case "boolean":
				return j.boolean;
			case "function":
				return j.function;
			case "bigint":
				return j.bigint;
			case "symbol":
				return j.symbol;
			case "object":
				return Array.isArray(e)
					? j.array
					: e === null
						? j.null
						: e.then &&
							  typeof e.then == "function" &&
							  e.catch &&
							  typeof e.catch == "function"
							? j.promise
							: typeof Map < "u" && e instanceof Map
								? j.map
								: typeof Set < "u" && e instanceof Set
									? j.set
									: typeof Date < "u" && e instanceof Date
										? j.date
										: j.object;
			default:
				return j.unknown;
		}
	},
	E = W.arrayToEnum([
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
	fv = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Je extends Error {
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
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, W.jsonStringifyReplacer, 2);
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
Je.create = (e) => new Je(e);
const Fr = (e, t) => {
	let n;
	switch (e.code) {
		case E.invalid_type:
			e.received === j.undefined
				? (n = "Required")
				: (n = `Expected ${e.expected}, received ${e.received}`);
			break;
		case E.invalid_literal:
			n = `Invalid literal value, expected ${JSON.stringify(e.expected, W.jsonStringifyReplacer)}`;
			break;
		case E.unrecognized_keys:
			n = `Unrecognized key(s) in object: ${W.joinValues(e.keys, ", ")}`;
			break;
		case E.invalid_union:
			n = "Invalid input";
			break;
		case E.invalid_union_discriminator:
			n = `Invalid discriminator value. Expected ${W.joinValues(e.options)}`;
			break;
		case E.invalid_enum_value:
			n = `Invalid enum value. Expected ${W.joinValues(e.options)}, received '${e.received}'`;
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
							: W.assertNever(e.validation)
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
			(n = t.defaultError), W.assertNever(e);
	}
	return { message: n };
};
let _f = Fr;
function pv(e) {
	_f = e;
}
function dl() {
	return _f;
}
const fl = (e) => {
		const { data: t, path: n, errorMaps: r, issueData: i } = e,
			l = [...n, ...(i.path || [])],
			o = { ...i, path: l };
		let s = "";
		const a = r
			.filter((u) => !!u)
			.slice()
			.reverse();
		for (const u of a) s = u(o, { data: t, defaultError: s }).message;
		return { ...i, path: l, message: i.message || s };
	},
	hv = [];
function R(e, t) {
	const n = fl({
		issueData: t,
		data: e.data,
		path: e.path,
		errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, dl(), Fr].filter(
			(r) => !!r,
		),
	});
	e.common.issues.push(n);
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
			if (i.status === "aborted") return D;
			i.status === "dirty" && t.dirty(), r.push(i.value);
		}
		return { status: t.value, value: r };
	}
	static async mergeObjectAsync(t, n) {
		const r = [];
		for (const i of n) r.push({ key: await i.key, value: await i.value });
		return xe.mergeObjectSync(t, r);
	}
	static mergeObjectSync(t, n) {
		const r = {};
		for (const i of n) {
			const { key: l, value: o } = i;
			if (l.status === "aborted" || o.status === "aborted") return D;
			l.status === "dirty" && t.dirty(),
				o.status === "dirty" && t.dirty(),
				l.value !== "__proto__" &&
					(typeof o.value < "u" || i.alwaysSet) &&
					(r[l.value] = o.value);
		}
		return { status: t.value, value: r };
	}
}
const D = Object.freeze({ status: "aborted" }),
	kf = (e) => ({ status: "dirty", value: e }),
	Se = (e) => ({ status: "valid", value: e }),
	ys = (e) => e.status === "aborted",
	gs = (e) => e.status === "dirty",
	Vr = (e) => e.status === "valid",
	pl = (e) => typeof Promise < "u" && e instanceof Promise;
var I;
(function (e) {
	(e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
		(e.toString = (t) =>
			typeof t == "string" ? t : t == null ? void 0 : t.message);
})(I || (I = {}));
class ot {
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
const Fu = (e, t) => {
	if (Vr(t)) return { success: !0, data: t.value };
	if (!e.common.issues.length)
		throw new Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			const n = new Je(e.common.issues);
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
				errorMap: (o, s) =>
					o.code !== "invalid_type"
						? { message: s.defaultError }
						: typeof s.data > "u"
							? { message: r ?? s.defaultError }
							: { message: n ?? s.defaultError },
				description: i,
			};
}
class $ {
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
		return Nt(t.data);
	}
	_getOrReturnCtx(t, n) {
		return (
			n || {
				common: t.parent.common,
				data: t.data,
				parsedType: Nt(t.data),
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
				parsedType: Nt(t.data),
				schemaErrorMap: this._def.errorMap,
				path: t.path,
				parent: t.parent,
			},
		};
	}
	_parseSync(t) {
		const n = this._parse(t);
		if (pl(n)) throw new Error("Synchronous parse encountered promise.");
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
				parsedType: Nt(t),
			},
			l = this._parseSync({ data: t, path: i.path, parent: i });
		return Fu(i, l);
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
				parsedType: Nt(t),
			},
			i = this._parse({ data: t, path: r.path, parent: r }),
			l = await (pl(i) ? i : Promise.resolve(i));
		return Fu(r, l);
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
		return ht.create(this, this._def);
	}
	nullable() {
		return fn.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return qe.create(this, this._def);
	}
	promise() {
		return Gn.create(this, this._def);
	}
	or(t) {
		return Hr.create([this, t], this._def);
	}
	and(t) {
		return Qr.create(this, t, this._def);
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
		return new Jr({
			...A(this._def),
			innerType: this,
			defaultValue: n,
			typeName: z.ZodDefault,
		});
	}
	brand() {
		return new Ef({ typeName: z.ZodBranded, type: this, ...A(this._def) });
	}
	catch(t) {
		const n = typeof t == "function" ? t : () => t;
		return new yl({
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
		return li.create(this, t);
	}
	readonly() {
		return xl.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}
const mv = /^c[^\s-]{8,}$/i,
	vv = /^[a-z][a-z0-9]*$/,
	yv = /^[0-9A-HJKMNP-TV-Z]{26}$/,
	gv =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
	xv =
		/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
	wv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let vo;
const _v =
		/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
	kv =
		/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	Sv = (e) =>
		e.precision
			? e.offset
				? new RegExp(
						`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
					)
				: new RegExp(
						`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`,
					)
			: e.precision === 0
				? e.offset
					? new RegExp(
							"^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$",
						)
					: new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
				: e.offset
					? new RegExp(
							"^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$",
						)
					: new RegExp(
							"^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$",
						);
function Ev(e, t) {
	return !!(
		((t === "v4" || !t) && _v.test(e)) ||
		((t === "v6" || !t) && kv.test(e))
	);
}
class Ge extends $ {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = String(t.data)),
			this._getType(t) !== j.string)
		) {
			const l = this._getOrReturnCtx(t);
			return (
				R(l, {
					code: E.invalid_type,
					expected: j.string,
					received: l.parsedType,
				}),
				D
			);
		}
		const r = new xe();
		let i;
		for (const l of this._def.checks)
			if (l.kind === "min")
				t.data.length < l.value &&
					((i = this._getOrReturnCtx(t, i)),
					R(i, {
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
					R(i, {
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
						? R(i, {
								code: E.too_big,
								maximum: l.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: l.message,
							})
						: s &&
							R(i, {
								code: E.too_small,
								minimum: l.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: l.message,
							}),
					r.dirty());
			} else if (l.kind === "email")
				xv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					R(i, {
						validation: "email",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "emoji")
				vo || (vo = new RegExp(wv, "u")),
					vo.test(t.data) ||
						((i = this._getOrReturnCtx(t, i)),
						R(i, {
							validation: "emoji",
							code: E.invalid_string,
							message: l.message,
						}),
						r.dirty());
			else if (l.kind === "uuid")
				gv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					R(i, {
						validation: "uuid",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "cuid")
				mv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					R(i, {
						validation: "cuid",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "cuid2")
				vv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					R(i, {
						validation: "cuid2",
						code: E.invalid_string,
						message: l.message,
					}),
					r.dirty());
			else if (l.kind === "ulid")
				yv.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					R(i, {
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
						R(i, {
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
							R(i, {
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
								R(i, {
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
											R(i, {
												code: E.invalid_string,
												validation: { startsWith: l.value },
												message: l.message,
											}),
											r.dirty())
										: l.kind === "endsWith"
											? t.data.endsWith(l.value) ||
												((i = this._getOrReturnCtx(t, i)),
												R(i, {
													code: E.invalid_string,
													validation: { endsWith: l.value },
													message: l.message,
												}),
												r.dirty())
											: l.kind === "datetime"
												? Sv(l).test(t.data) ||
													((i = this._getOrReturnCtx(t, i)),
													R(i, {
														code: E.invalid_string,
														validation: "datetime",
														message: l.message,
													}),
													r.dirty())
												: l.kind === "ip"
													? Ev(t.data, l.version) ||
														((i = this._getOrReturnCtx(t, i)),
														R(i, {
															validation: "ip",
															code: E.invalid_string,
															message: l.message,
														}),
														r.dirty())
													: W.assertNever(l);
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
		return new Ge({ ...this._def, checks: [...this._def.checks, t] });
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
	cuid(t) {
		return this._addCheck({ kind: "cuid", ...I.errToObj(t) });
	}
	cuid2(t) {
		return this._addCheck({ kind: "cuid2", ...I.errToObj(t) });
	}
	ulid(t) {
		return this._addCheck({ kind: "ulid", ...I.errToObj(t) });
	}
	ip(t) {
		return this._addCheck({ kind: "ip", ...I.errToObj(t) });
	}
	datetime(t) {
		var n;
		return typeof t == "string"
			? this._addCheck({
					kind: "datetime",
					precision: null,
					offset: !1,
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
					...I.errToObj(t == null ? void 0 : t.message),
				});
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
		return new Ge({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }],
		});
	}
	toLowerCase() {
		return new Ge({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }],
		});
	}
	toUpperCase() {
		return new Ge({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }],
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((t) => t.kind === "datetime");
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
Ge.create = (e) => {
	var t;
	return new Ge({
		checks: [],
		typeName: z.ZodString,
		coerce:
			(t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
		...A(e),
	});
};
function Cv(e, t) {
	const n = (e.toString().split(".")[1] || "").length,
		r = (t.toString().split(".")[1] || "").length,
		i = n > r ? n : r,
		l = parseInt(e.toFixed(i).replace(".", "")),
		o = parseInt(t.toFixed(i).replace(".", ""));
	return (l % o) / Math.pow(10, i);
}
class Vt extends $ {
	constructor() {
		super(...arguments),
			(this.min = this.gte),
			(this.max = this.lte),
			(this.step = this.multipleOf);
	}
	_parse(t) {
		if (
			(this._def.coerce && (t.data = Number(t.data)),
			this._getType(t) !== j.number)
		) {
			const l = this._getOrReturnCtx(t);
			return (
				R(l, {
					code: E.invalid_type,
					expected: j.number,
					received: l.parsedType,
				}),
				D
			);
		}
		let r;
		const i = new xe();
		for (const l of this._def.checks)
			l.kind === "int"
				? W.isInteger(t.data) ||
					((r = this._getOrReturnCtx(t, r)),
					R(r, {
						code: E.invalid_type,
						expected: "integer",
						received: "float",
						message: l.message,
					}),
					i.dirty())
				: l.kind === "min"
					? (l.inclusive ? t.data < l.value : t.data <= l.value) &&
						((r = this._getOrReturnCtx(t, r)),
						R(r, {
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
							R(r, {
								code: E.too_big,
								maximum: l.value,
								type: "number",
								inclusive: l.inclusive,
								exact: !1,
								message: l.message,
							}),
							i.dirty())
						: l.kind === "multipleOf"
							? Cv(t.data, l.value) !== 0 &&
								((r = this._getOrReturnCtx(t, r)),
								R(r, {
									code: E.not_multiple_of,
									multipleOf: l.value,
									message: l.message,
								}),
								i.dirty())
							: l.kind === "finite"
								? Number.isFinite(t.data) ||
									((r = this._getOrReturnCtx(t, r)),
									R(r, { code: E.not_finite, message: l.message }),
									i.dirty())
								: W.assertNever(l);
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
		return new Vt({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: t, value: n, inclusive: r, message: I.toString(i) },
			],
		});
	}
	_addCheck(t) {
		return new Vt({ ...this._def, checks: [...this._def.checks, t] });
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
				t.kind === "int" || (t.kind === "multipleOf" && W.isInteger(t.value)),
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
Vt.create = (e) =>
	new Vt({
		checks: [],
		typeName: z.ZodNumber,
		coerce: (e == null ? void 0 : e.coerce) || !1,
		...A(e),
	});
class Bt extends $ {
	constructor() {
		super(...arguments), (this.min = this.gte), (this.max = this.lte);
	}
	_parse(t) {
		if (
			(this._def.coerce && (t.data = BigInt(t.data)),
			this._getType(t) !== j.bigint)
		) {
			const l = this._getOrReturnCtx(t);
			return (
				R(l, {
					code: E.invalid_type,
					expected: j.bigint,
					received: l.parsedType,
				}),
				D
			);
		}
		let r;
		const i = new xe();
		for (const l of this._def.checks)
			l.kind === "min"
				? (l.inclusive ? t.data < l.value : t.data <= l.value) &&
					((r = this._getOrReturnCtx(t, r)),
					R(r, {
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
						R(r, {
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
							R(r, {
								code: E.not_multiple_of,
								multipleOf: l.value,
								message: l.message,
							}),
							i.dirty())
						: W.assertNever(l);
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
Bt.create = (e) => {
	var t;
	return new Bt({
		checks: [],
		typeName: z.ZodBigInt,
		coerce:
			(t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
		...A(e),
	});
};
class Br extends $ {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = !!t.data), this._getType(t) !== j.boolean)
		) {
			const r = this._getOrReturnCtx(t);
			return (
				R(r, {
					code: E.invalid_type,
					expected: j.boolean,
					received: r.parsedType,
				}),
				D
			);
		}
		return Se(t.data);
	}
}
Br.create = (e) =>
	new Br({
		typeName: z.ZodBoolean,
		coerce: (e == null ? void 0 : e.coerce) || !1,
		...A(e),
	});
class cn extends $ {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = new Date(t.data)),
			this._getType(t) !== j.date)
		) {
			const l = this._getOrReturnCtx(t);
			return (
				R(l, {
					code: E.invalid_type,
					expected: j.date,
					received: l.parsedType,
				}),
				D
			);
		}
		if (isNaN(t.data.getTime())) {
			const l = this._getOrReturnCtx(t);
			return R(l, { code: E.invalid_date }), D;
		}
		const r = new xe();
		let i;
		for (const l of this._def.checks)
			l.kind === "min"
				? t.data.getTime() < l.value &&
					((i = this._getOrReturnCtx(t, i)),
					R(i, {
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
						R(i, {
							code: E.too_big,
							message: l.message,
							inclusive: !0,
							exact: !1,
							maximum: l.value,
							type: "date",
						}),
						r.dirty())
					: W.assertNever(l);
		return { status: r.value, value: new Date(t.data.getTime()) };
	}
	_addCheck(t) {
		return new cn({ ...this._def, checks: [...this._def.checks, t] });
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
cn.create = (e) =>
	new cn({
		checks: [],
		coerce: (e == null ? void 0 : e.coerce) || !1,
		typeName: z.ZodDate,
		...A(e),
	});
class hl extends $ {
	_parse(t) {
		if (this._getType(t) !== j.symbol) {
			const r = this._getOrReturnCtx(t);
			return (
				R(r, {
					code: E.invalid_type,
					expected: j.symbol,
					received: r.parsedType,
				}),
				D
			);
		}
		return Se(t.data);
	}
}
hl.create = (e) => new hl({ typeName: z.ZodSymbol, ...A(e) });
class Zr extends $ {
	_parse(t) {
		if (this._getType(t) !== j.undefined) {
			const r = this._getOrReturnCtx(t);
			return (
				R(r, {
					code: E.invalid_type,
					expected: j.undefined,
					received: r.parsedType,
				}),
				D
			);
		}
		return Se(t.data);
	}
}
Zr.create = (e) => new Zr({ typeName: z.ZodUndefined, ...A(e) });
class Wr extends $ {
	_parse(t) {
		if (this._getType(t) !== j.null) {
			const r = this._getOrReturnCtx(t);
			return (
				R(r, {
					code: E.invalid_type,
					expected: j.null,
					received: r.parsedType,
				}),
				D
			);
		}
		return Se(t.data);
	}
}
Wr.create = (e) => new Wr({ typeName: z.ZodNull, ...A(e) });
class Kn extends $ {
	constructor() {
		super(...arguments), (this._any = !0);
	}
	_parse(t) {
		return Se(t.data);
	}
}
Kn.create = (e) => new Kn({ typeName: z.ZodAny, ...A(e) });
class rn extends $ {
	constructor() {
		super(...arguments), (this._unknown = !0);
	}
	_parse(t) {
		return Se(t.data);
	}
}
rn.create = (e) => new rn({ typeName: z.ZodUnknown, ...A(e) });
class xt extends $ {
	_parse(t) {
		const n = this._getOrReturnCtx(t);
		return (
			R(n, { code: E.invalid_type, expected: j.never, received: n.parsedType }),
			D
		);
	}
}
xt.create = (e) => new xt({ typeName: z.ZodNever, ...A(e) });
class ml extends $ {
	_parse(t) {
		if (this._getType(t) !== j.undefined) {
			const r = this._getOrReturnCtx(t);
			return (
				R(r, {
					code: E.invalid_type,
					expected: j.void,
					received: r.parsedType,
				}),
				D
			);
		}
		return Se(t.data);
	}
}
ml.create = (e) => new ml({ typeName: z.ZodVoid, ...A(e) });
class qe extends $ {
	_parse(t) {
		const { ctx: n, status: r } = this._processInputParams(t),
			i = this._def;
		if (n.parsedType !== j.array)
			return (
				R(n, {
					code: E.invalid_type,
					expected: j.array,
					received: n.parsedType,
				}),
				D
			);
		if (i.exactLength !== null) {
			const o = n.data.length > i.exactLength.value,
				s = n.data.length < i.exactLength.value;
			(o || s) &&
				(R(n, {
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
				(R(n, {
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
				(R(n, {
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
				[...n.data].map((o, s) => i.type._parseAsync(new ot(n, o, n.path, s))),
			).then((o) => xe.mergeArray(r, o));
		const l = [...n.data].map((o, s) =>
			i.type._parseSync(new ot(n, o, n.path, s)),
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
function wn(e) {
	if (e instanceof J) {
		const t = {};
		for (const n in e.shape) {
			const r = e.shape[n];
			t[n] = ht.create(wn(r));
		}
		return new J({ ...e._def, shape: () => t });
	} else
		return e instanceof qe
			? new qe({ ...e._def, type: wn(e.element) })
			: e instanceof ht
				? ht.create(wn(e.unwrap()))
				: e instanceof fn
					? fn.create(wn(e.unwrap()))
					: e instanceof st
						? st.create(e.items.map((t) => wn(t)))
						: e;
}
class J extends $ {
	constructor() {
		super(...arguments),
			(this._cached = null),
			(this.nonstrict = this.passthrough),
			(this.augment = this.extend);
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const t = this._def.shape(),
			n = W.objectKeys(t);
		return (this._cached = { shape: t, keys: n });
	}
	_parse(t) {
		if (this._getType(t) !== j.object) {
			const u = this._getOrReturnCtx(t);
			return (
				R(u, {
					code: E.invalid_type,
					expected: j.object,
					received: u.parsedType,
				}),
				D
			);
		}
		const { status: r, ctx: i } = this._processInputParams(t),
			{ shape: l, keys: o } = this._getCached(),
			s = [];
		if (
			!(this._def.catchall instanceof xt && this._def.unknownKeys === "strip")
		)
			for (const u in i.data) o.includes(u) || s.push(u);
		const a = [];
		for (const u of o) {
			const d = l[u],
				c = i.data[u];
			a.push({
				key: { status: "valid", value: u },
				value: d._parse(new ot(i, c, i.path, u)),
				alwaysSet: u in i.data,
			});
		}
		if (this._def.catchall instanceof xt) {
			const u = this._def.unknownKeys;
			if (u === "passthrough")
				for (const d of s)
					a.push({
						key: { status: "valid", value: d },
						value: { status: "valid", value: i.data[d] },
					});
			else if (u === "strict")
				s.length > 0 &&
					(R(i, { code: E.unrecognized_keys, keys: s }), r.dirty());
			else if (u !== "strip")
				throw new Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			const u = this._def.catchall;
			for (const d of s) {
				const c = i.data[d];
				a.push({
					key: { status: "valid", value: d },
					value: u._parse(new ot(i, c, i.path, d)),
					alwaysSet: d in i.data,
				});
			}
		}
		return i.common.async
			? Promise.resolve()
					.then(async () => {
						const u = [];
						for (const d of a) {
							const c = await d.key;
							u.push({ key: c, value: await d.value, alwaysSet: d.alwaysSet });
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
			W.objectKeys(t).forEach((r) => {
				t[r] && this.shape[r] && (n[r] = this.shape[r]);
			}),
			new J({ ...this._def, shape: () => n })
		);
	}
	omit(t) {
		const n = {};
		return (
			W.objectKeys(this.shape).forEach((r) => {
				t[r] || (n[r] = this.shape[r]);
			}),
			new J({ ...this._def, shape: () => n })
		);
	}
	deepPartial() {
		return wn(this);
	}
	partial(t) {
		const n = {};
		return (
			W.objectKeys(this.shape).forEach((r) => {
				const i = this.shape[r];
				t && !t[r] ? (n[r] = i) : (n[r] = i.optional());
			}),
			new J({ ...this._def, shape: () => n })
		);
	}
	required(t) {
		const n = {};
		return (
			W.objectKeys(this.shape).forEach((r) => {
				if (t && !t[r]) n[r] = this.shape[r];
				else {
					let l = this.shape[r];
					for (; l instanceof ht; ) l = l._def.innerType;
					n[r] = l;
				}
			}),
			new J({ ...this._def, shape: () => n })
		);
	}
	keyof() {
		return Sf(W.objectKeys(this.shape));
	}
}
J.create = (e, t) =>
	new J({
		shape: () => e,
		unknownKeys: "strip",
		catchall: xt.create(),
		typeName: z.ZodObject,
		...A(t),
	});
J.strictCreate = (e, t) =>
	new J({
		shape: () => e,
		unknownKeys: "strict",
		catchall: xt.create(),
		typeName: z.ZodObject,
		...A(t),
	});
J.lazycreate = (e, t) =>
	new J({
		shape: e,
		unknownKeys: "strip",
		catchall: xt.create(),
		typeName: z.ZodObject,
		...A(t),
	});
class Hr extends $ {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t),
			r = this._def.options;
		function i(l) {
			for (const s of l) if (s.result.status === "valid") return s.result;
			for (const s of l)
				if (s.result.status === "dirty")
					return n.common.issues.push(...s.ctx.common.issues), s.result;
			const o = l.map((s) => new Je(s.ctx.common.issues));
			return R(n, { code: E.invalid_union, unionErrors: o }), D;
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
			const s = o.map((a) => new Je(a));
			return R(n, { code: E.invalid_union, unionErrors: s }), D;
		}
	}
	get options() {
		return this._def.options;
	}
}
Hr.create = (e, t) => new Hr({ options: e, typeName: z.ZodUnion, ...A(t) });
const Ai = (e) =>
	e instanceof Gr
		? Ai(e.schema)
		: e instanceof et
			? Ai(e.innerType())
			: e instanceof Yr
				? [e.value]
				: e instanceof Zt
					? e.options
					: e instanceof Xr
						? Object.keys(e.enum)
						: e instanceof Jr
							? Ai(e._def.innerType)
							: e instanceof Zr
								? [void 0]
								: e instanceof Wr
									? [null]
									: null;
class Ul extends $ {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		if (n.parsedType !== j.object)
			return (
				R(n, {
					code: E.invalid_type,
					expected: j.object,
					received: n.parsedType,
				}),
				D
			);
		const r = this.discriminator,
			i = n.data[r],
			l = this.optionsMap.get(i);
		return l
			? n.common.async
				? l._parseAsync({ data: n.data, path: n.path, parent: n })
				: l._parseSync({ data: n.data, path: n.path, parent: n })
			: (R(n, {
					code: E.invalid_union_discriminator,
					options: Array.from(this.optionsMap.keys()),
					path: [r],
				}),
				D);
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
			const o = Ai(l.shape[t]);
			if (!o)
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
		return new Ul({
			typeName: z.ZodDiscriminatedUnion,
			discriminator: t,
			options: n,
			optionsMap: i,
			...A(r),
		});
	}
}
function xs(e, t) {
	const n = Nt(e),
		r = Nt(t);
	if (e === t) return { valid: !0, data: e };
	if (n === j.object && r === j.object) {
		const i = W.objectKeys(t),
			l = W.objectKeys(e).filter((s) => i.indexOf(s) !== -1),
			o = { ...e, ...t };
		for (const s of l) {
			const a = xs(e[s], t[s]);
			if (!a.valid) return { valid: !1 };
			o[s] = a.data;
		}
		return { valid: !0, data: o };
	} else if (n === j.array && r === j.array) {
		if (e.length !== t.length) return { valid: !1 };
		const i = [];
		for (let l = 0; l < e.length; l++) {
			const o = e[l],
				s = t[l],
				a = xs(o, s);
			if (!a.valid) return { valid: !1 };
			i.push(a.data);
		}
		return { valid: !0, data: i };
	} else
		return n === j.date && r === j.date && +e == +t
			? { valid: !0, data: e }
			: { valid: !1 };
}
class Qr extends $ {
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t),
			i = (l, o) => {
				if (ys(l) || ys(o)) return D;
				const s = xs(l.value, o.value);
				return s.valid
					? ((gs(l) || gs(o)) && n.dirty(), { status: n.value, value: s.data })
					: (R(r, { code: E.invalid_intersection_types }), D);
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
Qr.create = (e, t, n) =>
	new Qr({ left: e, right: t, typeName: z.ZodIntersection, ...A(n) });
class st extends $ {
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.parsedType !== j.array)
			return (
				R(r, {
					code: E.invalid_type,
					expected: j.array,
					received: r.parsedType,
				}),
				D
			);
		if (r.data.length < this._def.items.length)
			return (
				R(r, {
					code: E.too_small,
					minimum: this._def.items.length,
					inclusive: !0,
					exact: !1,
					type: "array",
				}),
				D
			);
		!this._def.rest &&
			r.data.length > this._def.items.length &&
			(R(r, {
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
				return a ? a._parse(new ot(r, o, r.path, s)) : null;
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
		return new st({ ...this._def, rest: t });
	}
}
st.create = (e, t) => {
	if (!Array.isArray(e))
		throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new st({ items: e, typeName: z.ZodTuple, rest: null, ...A(t) });
};
class Kr extends $ {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.parsedType !== j.object)
			return (
				R(r, {
					code: E.invalid_type,
					expected: j.object,
					received: r.parsedType,
				}),
				D
			);
		const i = [],
			l = this._def.keyType,
			o = this._def.valueType;
		for (const s in r.data)
			i.push({
				key: l._parse(new ot(r, s, r.path, s)),
				value: o._parse(new ot(r, r.data[s], r.path, s)),
			});
		return r.common.async
			? xe.mergeObjectAsync(n, i)
			: xe.mergeObjectSync(n, i);
	}
	get element() {
		return this._def.valueType;
	}
	static create(t, n, r) {
		return n instanceof $
			? new Kr({ keyType: t, valueType: n, typeName: z.ZodRecord, ...A(r) })
			: new Kr({
					keyType: Ge.create(),
					valueType: t,
					typeName: z.ZodRecord,
					...A(n),
				});
	}
}
class vl extends $ {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.parsedType !== j.map)
			return (
				R(r, { code: E.invalid_type, expected: j.map, received: r.parsedType }),
				D
			);
		const i = this._def.keyType,
			l = this._def.valueType,
			o = [...r.data.entries()].map(([s, a], u) => ({
				key: i._parse(new ot(r, s, r.path, [u, "key"])),
				value: l._parse(new ot(r, a, r.path, [u, "value"])),
			}));
		if (r.common.async) {
			const s = new Map();
			return Promise.resolve().then(async () => {
				for (const a of o) {
					const u = await a.key,
						d = await a.value;
					if (u.status === "aborted" || d.status === "aborted") return D;
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
				if (u.status === "aborted" || d.status === "aborted") return D;
				(u.status === "dirty" || d.status === "dirty") && n.dirty(),
					s.set(u.value, d.value);
			}
			return { status: n.value, value: s };
		}
	}
}
vl.create = (e, t, n) =>
	new vl({ valueType: t, keyType: e, typeName: z.ZodMap, ...A(n) });
class dn extends $ {
	_parse(t) {
		const { status: n, ctx: r } = this._processInputParams(t);
		if (r.parsedType !== j.set)
			return (
				R(r, { code: E.invalid_type, expected: j.set, received: r.parsedType }),
				D
			);
		const i = this._def;
		i.minSize !== null &&
			r.data.size < i.minSize.value &&
			(R(r, {
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
				(R(r, {
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
				if (d.status === "aborted") return D;
				d.status === "dirty" && n.dirty(), u.add(d.value);
			}
			return { status: n.value, value: u };
		}
		const s = [...r.data.values()].map((a, u) =>
			l._parse(new ot(r, a, r.path, u)),
		);
		return r.common.async ? Promise.all(s).then((a) => o(a)) : o(s);
	}
	min(t, n) {
		return new dn({
			...this._def,
			minSize: { value: t, message: I.toString(n) },
		});
	}
	max(t, n) {
		return new dn({
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
dn.create = (e, t) =>
	new dn({
		valueType: e,
		minSize: null,
		maxSize: null,
		typeName: z.ZodSet,
		...A(t),
	});
class $n extends $ {
	constructor() {
		super(...arguments), (this.validate = this.implement);
	}
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		if (n.parsedType !== j.function)
			return (
				R(n, {
					code: E.invalid_type,
					expected: j.function,
					received: n.parsedType,
				}),
				D
			);
		function r(s, a) {
			return fl({
				data: s,
				path: n.path,
				errorMaps: [
					n.common.contextualErrorMap,
					n.schemaErrorMap,
					dl(),
					Fr,
				].filter((u) => !!u),
				issueData: { code: E.invalid_arguments, argumentsError: a },
			});
		}
		function i(s, a) {
			return fl({
				data: s,
				path: n.path,
				errorMaps: [
					n.common.contextualErrorMap,
					n.schemaErrorMap,
					dl(),
					Fr,
				].filter((u) => !!u),
				issueData: { code: E.invalid_return_type, returnTypeError: a },
			});
		}
		const l = { errorMap: n.common.contextualErrorMap },
			o = n.data;
		if (this._def.returns instanceof Gn) {
			const s = this;
			return Se(async function (...a) {
				const u = new Je([]),
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
				if (!u.success) throw new Je([r(a, u.error)]);
				const d = Reflect.apply(o, this, u.data),
					c = s._def.returns.safeParse(d, l);
				if (!c.success) throw new Je([i(d, c.error)]);
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
		return new $n({ ...this._def, args: st.create(t).rest(rn.create()) });
	}
	returns(t) {
		return new $n({ ...this._def, returns: t });
	}
	implement(t) {
		return this.parse(t);
	}
	strictImplement(t) {
		return this.parse(t);
	}
	static create(t, n, r) {
		return new $n({
			args: t || st.create([]).rest(rn.create()),
			returns: n || rn.create(),
			typeName: z.ZodFunction,
			...A(r),
		});
	}
}
class Gr extends $ {
	get schema() {
		return this._def.getter();
	}
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
	}
}
Gr.create = (e, t) => new Gr({ getter: e, typeName: z.ZodLazy, ...A(t) });
class Yr extends $ {
	_parse(t) {
		if (t.data !== this._def.value) {
			const n = this._getOrReturnCtx(t);
			return (
				R(n, {
					received: n.data,
					code: E.invalid_literal,
					expected: this._def.value,
				}),
				D
			);
		}
		return { status: "valid", value: t.data };
	}
	get value() {
		return this._def.value;
	}
}
Yr.create = (e, t) => new Yr({ value: e, typeName: z.ZodLiteral, ...A(t) });
function Sf(e, t) {
	return new Zt({ values: e, typeName: z.ZodEnum, ...A(t) });
}
class Zt extends $ {
	_parse(t) {
		if (typeof t.data != "string") {
			const n = this._getOrReturnCtx(t),
				r = this._def.values;
			return (
				R(n, {
					expected: W.joinValues(r),
					received: n.parsedType,
					code: E.invalid_type,
				}),
				D
			);
		}
		if (this._def.values.indexOf(t.data) === -1) {
			const n = this._getOrReturnCtx(t),
				r = this._def.values;
			return (
				R(n, { received: n.data, code: E.invalid_enum_value, options: r }), D
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
	extract(t) {
		return Zt.create(t);
	}
	exclude(t) {
		return Zt.create(this.options.filter((n) => !t.includes(n)));
	}
}
Zt.create = Sf;
class Xr extends $ {
	_parse(t) {
		const n = W.getValidEnumValues(this._def.values),
			r = this._getOrReturnCtx(t);
		if (r.parsedType !== j.string && r.parsedType !== j.number) {
			const i = W.objectValues(n);
			return (
				R(r, {
					expected: W.joinValues(i),
					received: r.parsedType,
					code: E.invalid_type,
				}),
				D
			);
		}
		if (n.indexOf(t.data) === -1) {
			const i = W.objectValues(n);
			return (
				R(r, { received: r.data, code: E.invalid_enum_value, options: i }), D
			);
		}
		return Se(t.data);
	}
	get enum() {
		return this._def.values;
	}
}
Xr.create = (e, t) => new Xr({ values: e, typeName: z.ZodNativeEnum, ...A(t) });
class Gn extends $ {
	unwrap() {
		return this._def.type;
	}
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		if (n.parsedType !== j.promise && n.common.async === !1)
			return (
				R(n, {
					code: E.invalid_type,
					expected: j.promise,
					received: n.parsedType,
				}),
				D
			);
		const r = n.parsedType === j.promise ? n.data : Promise.resolve(n.data);
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
Gn.create = (e, t) => new Gn({ type: e, typeName: z.ZodPromise, ...A(t) });
class et extends $ {
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
					R(r, o), o.fatal ? n.abort() : n.dirty();
				},
				get path() {
					return r.path;
				},
			};
		if (((l.addIssue = l.addIssue.bind(l)), i.type === "preprocess")) {
			const o = i.transform(r.data, l);
			return r.common.issues.length
				? { status: "dirty", value: r.data }
				: r.common.async
					? Promise.resolve(o).then((s) =>
							this._def.schema._parseAsync({
								data: s,
								path: r.path,
								parent: r,
							}),
						)
					: this._def.schema._parseSync({ data: o, path: r.path, parent: r });
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
					? D
					: (s.status === "dirty" && n.dirty(),
						o(s.value),
						{ status: n.value, value: s.value });
			} else
				return this._def.schema
					._parseAsync({ data: r.data, path: r.path, parent: r })
					.then((s) =>
						s.status === "aborted"
							? D
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
				if (!Vr(o)) return o;
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
						Vr(o)
							? Promise.resolve(i.transform(o.value, l)).then((s) => ({
									status: n.value,
									value: s,
								}))
							: o,
					);
		W.assertNever(i);
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
class ht extends $ {
	_parse(t) {
		return this._getType(t) === j.undefined
			? Se(void 0)
			: this._def.innerType._parse(t);
	}
	unwrap() {
		return this._def.innerType;
	}
}
ht.create = (e, t) =>
	new ht({ innerType: e, typeName: z.ZodOptional, ...A(t) });
class fn extends $ {
	_parse(t) {
		return this._getType(t) === j.null
			? Se(null)
			: this._def.innerType._parse(t);
	}
	unwrap() {
		return this._def.innerType;
	}
}
fn.create = (e, t) =>
	new fn({ innerType: e, typeName: z.ZodNullable, ...A(t) });
class Jr extends $ {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t);
		let r = n.data;
		return (
			n.parsedType === j.undefined && (r = this._def.defaultValue()),
			this._def.innerType._parse({ data: r, path: n.path, parent: n })
		);
	}
	removeDefault() {
		return this._def.innerType;
	}
}
Jr.create = (e, t) =>
	new Jr({
		innerType: e,
		typeName: z.ZodDefault,
		defaultValue: typeof t.default == "function" ? t.default : () => t.default,
		...A(t),
	});
class yl extends $ {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t),
			r = { ...n, common: { ...n.common, issues: [] } },
			i = this._def.innerType._parse({
				data: r.data,
				path: r.path,
				parent: { ...r },
			});
		return pl(i)
			? i.then((l) => ({
					status: "valid",
					value:
						l.status === "valid"
							? l.value
							: this._def.catchValue({
									get error() {
										return new Je(r.common.issues);
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
										return new Je(r.common.issues);
									},
									input: r.data,
								}),
				};
	}
	removeCatch() {
		return this._def.innerType;
	}
}
yl.create = (e, t) =>
	new yl({
		innerType: e,
		typeName: z.ZodCatch,
		catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
		...A(t),
	});
class gl extends $ {
	_parse(t) {
		if (this._getType(t) !== j.nan) {
			const r = this._getOrReturnCtx(t);
			return (
				R(r, { code: E.invalid_type, expected: j.nan, received: r.parsedType }),
				D
			);
		}
		return { status: "valid", value: t.data };
	}
}
gl.create = (e) => new gl({ typeName: z.ZodNaN, ...A(e) });
const Nv = Symbol("zod_brand");
class Ef extends $ {
	_parse(t) {
		const { ctx: n } = this._processInputParams(t),
			r = n.data;
		return this._def.type._parse({ data: r, path: n.path, parent: n });
	}
	unwrap() {
		return this._def.type;
	}
}
class li extends $ {
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
					? D
					: l.status === "dirty"
						? (n.dirty(), kf(l.value))
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
				? D
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
		return new li({ in: t, out: n, typeName: z.ZodPipeline });
	}
}
class xl extends $ {
	_parse(t) {
		const n = this._def.innerType._parse(t);
		return Vr(n) && (n.value = Object.freeze(n.value)), n;
	}
}
xl.create = (e, t) =>
	new xl({ innerType: e, typeName: z.ZodReadonly, ...A(t) });
const Cf = (e, t = {}, n) =>
		e
			? Kn.create().superRefine((r, i) => {
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
			: Kn.create(),
	Tv = { object: J.lazycreate };
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
const Pv = (e, t = { message: `Input not instance of ${e.name}` }) =>
		Cf((n) => n instanceof e, t),
	Nf = Ge.create,
	Tf = Vt.create,
	jv = gl.create,
	Rv = Bt.create,
	Pf = Br.create,
	Ov = cn.create,
	Lv = hl.create,
	Iv = Zr.create,
	zv = Wr.create,
	Mv = Kn.create,
	Dv = rn.create,
	Av = xt.create,
	Uv = ml.create,
	$v = qe.create,
	Fv = J.create,
	Vv = J.strictCreate,
	Bv = Hr.create,
	Zv = Ul.create,
	Wv = Qr.create,
	Hv = st.create,
	Qv = Kr.create,
	Kv = vl.create,
	Gv = dn.create,
	Yv = $n.create,
	Xv = Gr.create,
	Jv = Yr.create,
	qv = Zt.create,
	bv = Xr.create,
	ey = Gn.create,
	Vu = et.create,
	ty = ht.create,
	ny = fn.create,
	ry = et.createWithPreprocess,
	iy = li.create,
	ly = () => Nf().optional(),
	oy = () => Tf().optional(),
	sy = () => Pf().optional(),
	ay = {
		string: (e) => Ge.create({ ...e, coerce: !0 }),
		number: (e) => Vt.create({ ...e, coerce: !0 }),
		boolean: (e) => Br.create({ ...e, coerce: !0 }),
		bigint: (e) => Bt.create({ ...e, coerce: !0 }),
		date: (e) => cn.create({ ...e, coerce: !0 }),
	},
	uy = D;
var cy = Object.freeze({
	__proto__: null,
	defaultErrorMap: Fr,
	setErrorMap: pv,
	getErrorMap: dl,
	makeIssue: fl,
	EMPTY_PATH: hv,
	addIssueToContext: R,
	ParseStatus: xe,
	INVALID: D,
	DIRTY: kf,
	OK: Se,
	isAborted: ys,
	isDirty: gs,
	isValid: Vr,
	isAsync: pl,
	get util() {
		return W;
	},
	get objectUtil() {
		return vs;
	},
	ZodParsedType: j,
	getParsedType: Nt,
	ZodType: $,
	ZodString: Ge,
	ZodNumber: Vt,
	ZodBigInt: Bt,
	ZodBoolean: Br,
	ZodDate: cn,
	ZodSymbol: hl,
	ZodUndefined: Zr,
	ZodNull: Wr,
	ZodAny: Kn,
	ZodUnknown: rn,
	ZodNever: xt,
	ZodVoid: ml,
	ZodArray: qe,
	ZodObject: J,
	ZodUnion: Hr,
	ZodDiscriminatedUnion: Ul,
	ZodIntersection: Qr,
	ZodTuple: st,
	ZodRecord: Kr,
	ZodMap: vl,
	ZodSet: dn,
	ZodFunction: $n,
	ZodLazy: Gr,
	ZodLiteral: Yr,
	ZodEnum: Zt,
	ZodNativeEnum: Xr,
	ZodPromise: Gn,
	ZodEffects: et,
	ZodTransformer: et,
	ZodOptional: ht,
	ZodNullable: fn,
	ZodDefault: Jr,
	ZodCatch: yl,
	ZodNaN: gl,
	BRAND: Nv,
	ZodBranded: Ef,
	ZodPipeline: li,
	ZodReadonly: xl,
	custom: Cf,
	Schema: $,
	ZodSchema: $,
	late: Tv,
	get ZodFirstPartyTypeKind() {
		return z;
	},
	coerce: ay,
	any: Mv,
	array: $v,
	bigint: Rv,
	boolean: Pf,
	date: Ov,
	discriminatedUnion: Zv,
	effect: Vu,
	enum: qv,
	function: Yv,
	instanceof: Pv,
	intersection: Wv,
	lazy: Xv,
	literal: Jv,
	map: Kv,
	nan: jv,
	nativeEnum: bv,
	never: Av,
	null: zv,
	nullable: ny,
	number: Tf,
	object: Fv,
	oboolean: sy,
	onumber: oy,
	optional: ty,
	ostring: ly,
	pipeline: iy,
	preprocess: ry,
	promise: ey,
	record: Qv,
	set: Gv,
	strictObject: Vv,
	string: Nf,
	symbol: Lv,
	transformer: Vu,
	tuple: Hv,
	undefined: Iv,
	union: Bv,
	unknown: Dv,
	void: Uv,
	NEVER: uy,
	ZodIssueCode: E,
	quotelessJson: fv,
	ZodError: Je,
});
cy.Schema;
const dy = (e) => {
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
function Bu() {
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
const yo = "DICE_CITY_OPTIONS",
	jf = {
		ping: null,
		playerName: "",
		playerId: "",
		playerPassword: "",
		perGamePassword: [],
		darkMode: "system",
		showNames: !0,
		diceRollVolume: 0,
		yourTurnVolume: 0,
	},
	Rf = S.createContext({ options: jf, setOptions: () => {} }),
	fy = ({ children: e }) => {
		const t = localStorage.getItem(yo);
		let n = {};
		const r = dy(t);
		r.success && (n = r.json);
		const [i, l] = S.useState({ ...jf, ...n });
		return (
			S.useEffect(() => {
				(!i.playerId || !i.playerPassword) &&
					l((o) => {
						const s = { ...o };
						s.playerId || (s.playerId = Bu()),
							s.playerPassword || (s.playerPassword = Bu());
						const { ping: a, ...u } = s;
						return localStorage.setItem(yo, JSON.stringify(u)), s;
					});
			}, []),
			k.jsx(Rf.Provider, {
				value: {
					options: i,
					setOptions: (o) => {
						l((s) => {
							const a = { ...s, ...o },
								{ ping: u, ...d } = a;
							return localStorage.setItem(yo, JSON.stringify(d)), a;
						});
					},
				},
				children: e,
			})
		);
	},
	$l = () => S.useContext(Rf),
	py = "modulepreload",
	hy = function (e) {
		return "/" + e;
	},
	Zu = {},
	va = function (t, n, r) {
		let i = Promise.resolve();
		if (n && n.length > 0) {
			const l = document.getElementsByTagName("link"),
				o = document.querySelector("meta[property=csp-nonce]"),
				s =
					(o == null ? void 0 : o.nonce) ||
					(o == null ? void 0 : o.getAttribute("nonce"));
			i = Promise.all(
				n.map((a) => {
					if (((a = hy(a)), a in Zu)) return;
					Zu[a] = !0;
					const u = a.endsWith(".css"),
						d = u ? '[rel="stylesheet"]' : "";
					if (!!r)
						for (let v = l.length - 1; v >= 0; v--) {
							const y = l[v];
							if (y.href === a && (!u || y.rel === "stylesheet")) return;
						}
					else if (document.querySelector(`link[href="${a}"]${d}`)) return;
					const f = document.createElement("link");
					if (
						((f.rel = u ? "stylesheet" : py),
						u || ((f.as = "script"), (f.crossOrigin = "")),
						(f.href = a),
						s && f.setAttribute("nonce", s),
						document.head.appendChild(f),
						u)
					)
						return new Promise((v, y) => {
							f.addEventListener("load", v),
								f.addEventListener("error", () =>
									y(new Error(`Unable to preload CSS for ${a}`)),
								);
						});
				}),
			);
		}
		return i
			.then(() => t())
			.catch((l) => {
				const o = new Event("vite:preloadError", { cancelable: !0 });
				if (((o.payload = l), window.dispatchEvent(o), !o.defaultPrevented))
					throw l;
			});
	};
function Of() {
	return k.jsx("div", {
		className: "flex h-full items-center justify-center",
		children: k.jsx("div", {
			className: "animate-spin-loading rounded-full border p-4",
			children: "Loading",
		}),
	});
}
const hg = Object.freeze(
	Object.defineProperty({ __proto__: null, default: Of }, Symbol.toStringTag, {
		value: "Module",
	}),
);
function wl({ children: e, className: t }) {
	return k.jsx("div", {
		className: `mx-1 first:ml-0 last:mr-0 ${t || ""}`,
		children: e,
	});
}
function my() {
	const {
			options: { playerName: e },
			setOptions: t,
		} = $l(),
		n = S.useRef(null),
		[r, i] = S.useState(!e),
		[l, o] = S.useState(e);
	return (
		S.useEffect(() => {
			e ||
				setTimeout(() => {
					var s;
					(s = n.current) == null || s.focus();
				});
		}, []),
		k.jsx(wl, {
			children: r
				? k.jsxs("form", {
						onSubmit: (s) => {
							s.preventDefault(), l && (t({ playerName: l }), i(!1));
						},
						children: [
							k.jsx("input", {
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
							k.jsx("button", {
								className:
									"rounded-r border border-gray-600 px-2 py-0 dark:border-gray-300",
								children: "Save",
							}),
						],
					})
				: k.jsxs(k.Fragment, {
						children: [
							k.jsx("span", { className: "mr-2", children: e }),
							k.jsx("button", {
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
function Ui({ children: e, legend: t }) {
	return k.jsxs("fieldset", {
		className:
			"border border-gray-700 p-2 dark:border-gray-300 dark:bg-gray-800",
		children: [
			!!t && k.jsx("legend", { className: "-mb-2 px-0.5", children: t }),
			e,
		],
	});
}
function vy({ darkMode: e, setOptions: t }) {
	return k.jsxs(Ui, {
		legend: "Colour Theme",
		children: [
			k.jsxs("label", {
				className: "block",
				children: [
					k.jsx("input", {
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
			k.jsxs("label", {
				className: "block",
				children: [
					k.jsx("input", {
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
			k.jsxs("label", {
				className: "block",
				children: [
					k.jsx("input", {
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
function yy() {
	const { options: e, setOptions: t } = $l(),
		n = S.useRef(new Audio("/dice-roll.mp3")).current,
		r = S.useRef(new Audio("/chord-ceg.mp3")).current;
	return k.jsx(wl, {
		className: "relative",
		children: k.jsxs("details", {
			children: [
				k.jsx("summary", { children: "Options" }),
				k.jsxs("div", {
					className:
						"absolute right-0 top-full z-30 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800",
					children: [
						k.jsx(vy, { darkMode: e.darkMode, setOptions: t }),
						k.jsxs(Ui, {
							legend: "Show Names",
							children: [
								k.jsxs("label", {
									className: "block",
									children: [
										k.jsx("input", {
											type: "checkbox",
											checked: e.showNamesPublic,
											onChange: () => {
												t({ showNamesPublic: !e.showNamesPublic });
											},
										}),
										" Public Games",
									],
								}),
								k.jsxs("label", {
									className: "block",
									children: [
										k.jsx("input", {
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
						k.jsxs(Ui, {
							legend: "Misc.",
							children: [
								k.jsxs("label", {
									className: "block",
									children: [
										k.jsx("input", {
											type: "checkbox",
											checked: e.alwaysShowCities,
											onChange: () => {
												t({ alwaysShowCities: !e.alwaysShowCities });
											},
										}),
										"  Always Show Cities",
									],
								}),
								k.jsxs("label", {
									className: "block",
									children: [
										k.jsx("input", {
											type: "checkbox",
											checked: e.alwaysShowSupply,
											onChange: () => {
												t({ alwaysShowSupply: !e.alwaysShowSupply });
											},
										}),
										"  Always Show Supply",
									],
								}),
								k.jsxs("label", {
									className: "block",
									children: [
										k.jsx("input", {
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
								k.jsxs("label", {
									className: "block",
									children: [
										k.jsx("input", {
											type: "checkbox",
											checked: !e.hideInstructions,
											onChange: () => {
												t({ hideInstructions: !e.hideInstructions });
											},
										}),
										"  Always Show Instructions",
									],
								}),
							],
						}),
						k.jsx(Ui, {
							legend: "Volume",
							children: k.jsx("table", {
								className: "w-full",
								children: k.jsxs("tbody", {
									children: [
										k.jsxs("tr", {
											children: [
												k.jsx("td", { children: "Dice Roll" }),
												k.jsx("td", {
													children: k.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: k.jsx("input", {
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
										k.jsxs("tr", {
											children: [
												k.jsx("td", { children: "Your Turn" }),
												k.jsx("td", {
													children: k.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: k.jsx("input", {
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
function gy() {
	const { options: e } = $l();
	return k.jsxs("div", {
		className: "absolute mb-1 mt-2 flex w-full flex-wrap justify-end",
		children: [
			k.jsx("div", { className: "basis-1" }),
			k.jsx(my, {}),
			typeof e.ping == "number" &&
				k.jsxs("div", { children: ["Ping: ", e.ping, " ms"] }),
			k.jsx("div", { className: "grow" }),
			k.jsx(yy, {}),
			k.jsx(wl, { children: k.jsx(av, { to: "/", children: "Home" }) }),
			k.jsx(wl, {
				children: k.jsx("a", {
					target: "_blank",
					href: "https://github.com/nick-ng/dice-city",
					children: "GitHub",
				}),
			}),
			k.jsx("div", { className: "basis-1" }),
		],
	});
}
var ya = { exports: {} };
ya.exports;
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
		n && n.exports
			? (n.exports = o)
			: r && r.amd
				? r(function () {
						return o;
					})
				: (this.alea = o);
	})(pn, e, !1);
})(ya);
var xy = ya.exports,
	ga = { exports: {} };
ga.exports;
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
		n && n.exports
			? (n.exports = o)
			: r && r.amd
				? r(function () {
						return o;
					})
				: (this.xor128 = o);
	})(pn, e, !1);
})(ga);
var wy = ga.exports,
	xa = { exports: {} };
xa.exports;
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
		n && n.exports
			? (n.exports = o)
			: r && r.amd
				? r(function () {
						return o;
					})
				: (this.xorwow = o);
	})(pn, e, !1);
})(xa);
var _y = xa.exports,
	wa = { exports: {} };
wa.exports;
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
		n && n.exports
			? (n.exports = o)
			: r && r.amd
				? r(function () {
						return o;
					})
				: (this.xorshift7 = o);
	})(pn, e, !1);
})(wa);
var ky = wa.exports,
	_a = { exports: {} };
_a.exports;
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
					x,
					C,
					h = [],
					p = 128;
				for (
					c === (c | 0)
						? ((v = c), (c = null))
						: ((c = c + "\0"), (v = 0), (p = Math.max(p, c.length))),
						y = 0,
						x = -32;
					x < p;
					++x
				)
					c && (v ^= c.charCodeAt((x + 32) % c.length)),
						x === 0 && (C = v),
						(v ^= v << 10),
						(v ^= v >>> 15),
						(v ^= v << 4),
						(v ^= v >>> 13),
						x >= 0 &&
							((C = (C + 1640531527) | 0),
							(f = h[x & 127] ^= v + C),
							(y = f == 0 ? y + 1 : 0));
				for (
					y >= 128 && (h[((c && c.length) || 0) & 127] = -1),
						y = 127,
						x = 4 * 128;
					x > 0;
					--x
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
		n && n.exports
			? (n.exports = o)
			: r && r.amd
				? r(function () {
						return o;
					})
				: (this.xor4096 = o);
	})(pn, e, !1);
})(_a);
var Sy = _a.exports,
	ka = { exports: {} };
ka.exports;
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
		n && n.exports
			? (n.exports = o)
			: r && r.amd
				? r(function () {
						return o;
					})
				: (this.tychei = o);
	})(pn, e, !1);
})(ka);
var Ey = ka.exports,
	Lf = { exports: {} };
const Cy = {},
	Ny = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: Cy },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Ty = Mf(Ny);
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
		function v(g, w, P) {
			var N = [];
			w = w == !0 ? { entropy: !0 } : w || {};
			var T = h(C(w.entropy ? [g, m(n)] : g ?? p(), 3), N),
				B = new y(N),
				M = function () {
					for (var Y = B.g(l), we = a, he = 0; Y < u; )
						(Y = (Y + he) * i), (we *= i), (he = B.g(1));
					for (; Y >= d; ) (Y /= 2), (we /= 2), (he >>>= 1);
					return (Y + he) / we;
				};
			return (
				(M.int32 = function () {
					return B.g(4) | 0;
				}),
				(M.quick = function () {
					return B.g(4) / 4294967296;
				}),
				(M.double = M),
				h(m(B.S), n),
				(
					w.pass ||
					P ||
					function (Y, we, he, Ze) {
						return (
							Ze &&
								(Ze.S && x(Ze, B),
								(Y.state = function () {
									return x(B, {});
								})),
							he ? ((r[s] = Y), we) : Y
						);
					}
				)(M, T, "global" in w ? w.global : this == r, w.state)
			);
		}
		function y(g) {
			var w,
				P = g.length,
				N = this,
				T = 0,
				B = (N.i = N.j = 0),
				M = (N.S = []);
			for (P || (g = [P++]); T < i; ) M[T] = T++;
			for (T = 0; T < i; T++)
				(M[T] = M[(B = c & (B + g[T % P] + (w = M[T])))]), (M[B] = w);
			(N.g = function (Y) {
				for (var we, he = 0, Ze = N.i, gn = N.j, at = N.S; Y--; )
					(we = at[(Ze = c & (Ze + 1))]),
						(he =
							he * i +
							at[c & ((at[Ze] = at[(gn = c & (gn + we))]) + (at[gn] = we))]);
				return (N.i = Ze), (N.j = gn), he;
			})(i);
		}
		function x(g, w) {
			return (w.i = g.i), (w.j = g.j), (w.S = g.S.slice()), w;
		}
		function C(g, w) {
			var P = [],
				N = typeof g,
				T;
			if (w && N == "object")
				for (T in g)
					try {
						P.push(C(g[T], w - 1));
					} catch {}
			return P.length ? P : N == "string" ? g : g + "\0";
		}
		function h(g, w) {
			for (var P = g + "", N, T = 0; T < P.length; )
				w[c & T] = c & ((N ^= w[c & T] * 19) + P.charCodeAt(T++));
			return m(w);
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
				var w = t.navigator,
					P = w && w.plugins;
				return [+new Date(), t, P, t.screen, m(n)];
			}
		}
		function m(g) {
			return String.fromCharCode.apply(0, g);
		}
		if ((h(r.random(), n), e.exports)) {
			e.exports = v;
			try {
				f = Ty;
			} catch {}
		} else r["seed" + s] = v;
	})(typeof self < "u" ? self : pn, [], Math);
})(Lf);
var Py = Lf.exports,
	jy = xy,
	Ry = wy,
	Oy = _y,
	Ly = ky,
	Iy = Sy,
	zy = Ey,
	yn = Py;
yn.alea = jy;
yn.xor128 = Ry;
yn.xorwow = Oy;
yn.xorshift7 = Ly;
yn.xor4096 = Iy;
yn.tychei = zy;
var My = yn;
const Dy = Gu(My),
	Ay = [
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
	Uy = ["Robot", "Locomotive", "Automobile"],
	$y = ["Cactus", "Sunflower", "Poppy", "Banana"],
	Fy = ["ChristopherNolan"],
	Vy = ["MonopolySet"],
	Wu = Object.freeze([...new Set([...Ay, ...Uy, ...$y, ...Fy, ...Vy])]),
	By = 1,
	go = 2,
	Zy = 4,
	Hu = 5,
	Wy = 7,
	Hy = 8,
	Qy = 10,
	Ky = [
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
	Gy = ["Singular", "Multiple", "One", "Two", "Extra"],
	Yy = ["Big", "Small", "Huge", "Little", "Colossal", "Tiny"],
	Xy = [
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
	Jy = ["Brutal", "Kind", "Nippy", "Savage"],
	qy = ["Old", "Young", "Elder", "Adolescent"],
	by = ["Quick", "Slow", "Fast", "Sluggish"],
	eg = [
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
	tg = ["Solid", "Hard", "Squishy"],
	ng = ["Poisonous", "Venomous"],
	rg = Object.freeze(
		[
			...Ky.map((e) => ({
				value: e,
				type: "colour",
				order: Hy,
				allowMultiple: !1,
			})),
			...Gy.map((e) => ({
				value: e,
				type: "count",
				order: By,
				allowMultiple: !1,
			})),
			...Yy.map((e) => ({
				value: e,
				type: "size",
				order: Zy,
				allowMultiple: !1,
			})),
			...Xy.map((e) => ({
				value: e,
				type: "nature",
				order: go,
				allowMultiple: !1,
			})),
			...Jy.map((e) => ({
				value: e,
				type: "general_opinion",
				order: go,
				allowMultiple: !0,
			})),
			...qy.map((e) => ({
				value: e,
				type: "age",
				order: Wy,
				allowMultiple: !1,
			})),
			...by.map((e) => ({
				value: e,
				type: "speed",
				order: go,
				allowMultiple: !1,
			})),
			...eg.map((e) => ({
				value: e,
				type: "material",
				order: Qy,
				allowMultiple: !1,
			})),
			...tg.map((e) => ({
				value: e,
				type: "physical_quality",
				order: Hu,
				allowMultiple: !1,
			})),
			...ng.map((e) => ({
				value: e,
				type: "physical_quality_b",
				order: Hu,
				allowMultiple: !0,
			})),
		].map((e) => Object.freeze(e)),
	),
	ig = 2,
	If = (e, t = 2) => {
		const n = Dy(e),
			r = Math.floor(Wu.length * n()),
			i = Wu[r],
			l = [],
			o = [];
		for (let s = 0; s < t; s++) {
			const a = rg.filter((d) => {
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
	lg = (e, t, n = !1) => (t && n ? t : If(e, ig)),
	mg = (e, t, n, r) =>
		e.reduce(
			(i, { id: l, name: o }) => i.replaceAll(`%${l}%`, lg(l, o, t || l === n)),
			r,
		),
	Qu = "NICK_NAME_GEN_STORE";
function og() {
	const [e, t] = S.useState([]),
		[n, r] = S.useState(""),
		[i, l] = S.useState(Date.now().toString()),
		[o, s] = S.useState(2),
		a = If(i, o),
		u = S.useCallback(
			(d) => {
				localStorage.setItem(
					Qu,
					JSON.stringify({ namePrefixes: e, adjectiveCount: o, ...d }),
				);
			},
			[e.join(""), o],
		);
	return (
		S.useEffect(() => {
			try {
				const d = localStorage.getItem(Qu);
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
		k.jsxs("div", {
			className: "left-0 right-0 mx-auto max-w-prose",
			children: [
				k.jsx("textarea", {
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
				k.jsxs("label", {
					className: "block",
					children: [
						"Adjective Count ",
						k.jsx("input", {
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
				k.jsx("button", {
					className: "button-default",
					onClick: () => {
						l(Date.now().toString());
					},
					children: "Randomise",
				}),
				k.jsx("ul", {
					className: "ml-5 mt-2 list-disc",
					children: ["", ...e].map((d, c) => {
						const f = `${d}${a}`;
						return k.jsxs(
							"li",
							{
								children: [
									f,
									" (",
									f.length,
									") ",
									k.jsx("button", {
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
const sg = S.lazy(() =>
		va(() => import("./index-BwpJ4GBE.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
	),
	ag = S.lazy(() =>
		va(() => import("./index-CvcDIH9a.js"), __vite__mapDeps([])),
	),
	ug = S.lazy(() =>
		va(
			() => import("./index-CO2PKRcP.js"),
			__vite__mapDeps([5, 1, 2, 3, 6, 7, 8, 9, 4, 10]),
		),
	),
	Ku = (e) => {
		e === "dark" ||
		(e === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};
function cg() {
	const { options: e } = $l();
	return (
		S.useEffect(() => {
			Ku(e.darkMode);
		}, [e.darkMode]),
		S.useEffect(() => {
			const t = window.matchMedia("(prefers-color-scheme: dark)"),
				n = () => {
					Ku(e.darkMode);
				};
			return (
				t.addEventListener("change", n),
				() => {
					t.removeEventListener("change", n);
				}
			);
		}, []),
		k.jsx(S.Suspense, {
			fallback: k.jsx(Of, {}),
			children: k.jsxs("div", {
				className: "absolute bottom-0 left-0 right-0 top-0",
				children: [
					k.jsx(gy, {}),
					k.jsx("div", {
						className: "h-full pt-10",
						children: k.jsxs(Jm, {
							children: [
								k.jsx(dr, { path: "/", element: k.jsx(sg, {}) }),
								k.jsx(dr, { path: "/dev/*", element: k.jsx(ag, {}) }),
								k.jsx(dr, { path: "/game/:id", element: k.jsx(ug, {}) }),
								k.jsx(dr, { path: "/name-generator", element: k.jsx(og, {}) }),
							],
						}),
					}),
				],
			}),
		})
	);
}
const dg = xo.createRoot(document.getElementById("root"));
dg.render(
	k.jsx(S.StrictMode, {
		children: k.jsx(lv, {
			children: k.jsx(dv, { children: k.jsx(fy, { children: k.jsx(cg, {}) }) }),
		}),
	}),
);
export {
	av as L,
	Jm as R,
	va as _,
	yf as a,
	dr as b,
	fg as c,
	mg as d,
	pg as e,
	Of as f,
	lg as g,
	hg as i,
	k as j,
	S as r,
	$l as u,
	cy as z,
};
