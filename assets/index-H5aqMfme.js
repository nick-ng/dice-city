const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"assets/index-BlWVGLSO.js",
			"assets/message-B_5LjrqR.js",
			"assets/utils-BPyf_07k.js",
			"assets/game-1d9VL3lj.js",
			"assets/index-DEEStO_y.js",
			"assets/index-DNWoeIy0.js",
			"assets/business-centre-CvbGc1aa.js",
			"assets/index-D1U7Fvgu.js",
			"assets/index-CDp2CMxw.js",
			"assets/build-C6gfH8-u.js",
			"assets/index-BKD7MjGM.js",
		]),
) => i.map((i) => d[i]);
(function () {
	const r = document.createElement("link").relList;
	if (r && r.supports && r.supports("modulepreload")) return;
	for (const u of document.querySelectorAll('link[rel="modulepreload"]')) c(u);
	new MutationObserver((u) => {
		for (const d of u)
			if (d.type === "childList")
				for (const m of d.addedNodes)
					m.tagName === "LINK" && m.rel === "modulepreload" && c(m);
	}).observe(document, { childList: !0, subtree: !0 });
	function o(u) {
		const d = {};
		return (
			u.integrity && (d.integrity = u.integrity),
			u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
			u.crossOrigin === "use-credentials"
				? (d.credentials = "include")
				: u.crossOrigin === "anonymous"
					? (d.credentials = "omit")
					: (d.credentials = "same-origin"),
			d
		);
	}
	function c(u) {
		if (u.ep) return;
		u.ep = !0;
		const d = o(u);
		fetch(u.href, d);
	}
})();
function uf(l) {
	return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
		? l.default
		: l;
}
function Ah(l) {
	if (l.__esModule) return l;
	var r = l.default;
	if (typeof r == "function") {
		var o = function c() {
			return this instanceof c
				? Reflect.construct(r, arguments, this.constructor)
				: r.apply(this, arguments);
		};
		o.prototype = r.prototype;
	} else o = {};
	return (
		Object.defineProperty(o, "__esModule", { value: !0 }),
		Object.keys(l).forEach(function (c) {
			var u = Object.getOwnPropertyDescriptor(l, c);
			Object.defineProperty(
				o,
				c,
				u.get
					? u
					: {
							enumerable: !0,
							get: function () {
								return l[c];
							},
						},
			);
		}),
		o
	);
}
var ss = { exports: {} },
	ci = {},
	us = { exports: {} },
	de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od;
function Dh() {
	if (Od) return de;
	Od = 1;
	var l = Symbol.for("react.element"),
		r = Symbol.for("react.portal"),
		o = Symbol.for("react.fragment"),
		c = Symbol.for("react.strict_mode"),
		u = Symbol.for("react.profiler"),
		d = Symbol.for("react.provider"),
		m = Symbol.for("react.context"),
		h = Symbol.for("react.forward_ref"),
		f = Symbol.for("react.suspense"),
		v = Symbol.for("react.memo"),
		g = Symbol.for("react.lazy"),
		x = Symbol.iterator;
	function w(S) {
		return S === null || typeof S != "object"
			? null
			: ((S = (x && S[x]) || S["@@iterator"]),
				typeof S == "function" ? S : null);
	}
	var T = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		P = Object.assign,
		A = {};
	function D(S, L, ce) {
		(this.props = S),
			(this.context = L),
			(this.refs = A),
			(this.updater = ce || T);
	}
	(D.prototype.isReactComponent = {}),
		(D.prototype.setState = function (S, L) {
			if (typeof S != "object" && typeof S != "function" && S != null)
				throw Error(
					"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, S, L, "setState");
		}),
		(D.prototype.forceUpdate = function (S) {
			this.updater.enqueueForceUpdate(this, S, "forceUpdate");
		});
	function $() {}
	$.prototype = D.prototype;
	function V(S, L, ce) {
		(this.props = S),
			(this.context = L),
			(this.refs = A),
			(this.updater = ce || T);
	}
	var ie = (V.prototype = new $());
	(ie.constructor = V), P(ie, D.prototype), (ie.isPureReactComponent = !0);
	var Q = Array.isArray,
		b = Object.prototype.hasOwnProperty,
		fe = { current: null },
		oe = { key: !0, ref: !0, __self: !0, __source: !0 };
	function se(S, L, ce) {
		var pe,
			ye = {},
			ge = null,
			Se = null;
		if (L != null)
			for (pe in (L.ref !== void 0 && (Se = L.ref),
			L.key !== void 0 && (ge = "" + L.key),
			L))
				b.call(L, pe) && !oe.hasOwnProperty(pe) && (ye[pe] = L[pe]);
		var _e = arguments.length - 2;
		if (_e === 1) ye.children = ce;
		else if (1 < _e) {
			for (var Re = Array(_e), dt = 0; dt < _e; dt++)
				Re[dt] = arguments[dt + 2];
			ye.children = Re;
		}
		if (S && S.defaultProps)
			for (pe in ((_e = S.defaultProps), _e))
				ye[pe] === void 0 && (ye[pe] = _e[pe]);
		return {
			$$typeof: l,
			type: S,
			key: ge,
			ref: Se,
			props: ye,
			_owner: fe.current,
		};
	}
	function he(S, L) {
		return {
			$$typeof: l,
			type: S.type,
			key: L,
			ref: S.ref,
			props: S.props,
			_owner: S._owner,
		};
	}
	function we(S) {
		return typeof S == "object" && S !== null && S.$$typeof === l;
	}
	function je(S) {
		var L = { "=": "=0", ":": "=2" };
		return (
			"$" +
			S.replace(/[=:]/g, function (ce) {
				return L[ce];
			})
		);
	}
	var Fe = /\/+/g;
	function Te(S, L) {
		return typeof S == "object" && S !== null && S.key != null
			? je("" + S.key)
			: L.toString(36);
	}
	function Ue(S, L, ce, pe, ye) {
		var ge = typeof S;
		(ge === "undefined" || ge === "boolean") && (S = null);
		var Se = !1;
		if (S === null) Se = !0;
		else
			switch (ge) {
				case "string":
				case "number":
					Se = !0;
					break;
				case "object":
					switch (S.$$typeof) {
						case l:
						case r:
							Se = !0;
					}
			}
		if (Se)
			return (
				(Se = S),
				(ye = ye(Se)),
				(S = pe === "" ? "." + Te(Se, 0) : pe),
				Q(ye)
					? ((ce = ""),
						S != null && (ce = S.replace(Fe, "$&/") + "/"),
						Ue(ye, L, ce, "", function (dt) {
							return dt;
						}))
					: ye != null &&
						(we(ye) &&
							(ye = he(
								ye,
								ce +
									(!ye.key || (Se && Se.key === ye.key)
										? ""
										: ("" + ye.key).replace(Fe, "$&/") + "/") +
									S,
							)),
						L.push(ye)),
				1
			);
		if (((Se = 0), (pe = pe === "" ? "." : pe + ":"), Q(S)))
			for (var _e = 0; _e < S.length; _e++) {
				ge = S[_e];
				var Re = pe + Te(ge, _e);
				Se += Ue(ge, L, ce, Re, ye);
			}
		else if (((Re = w(S)), typeof Re == "function"))
			for (S = Re.call(S), _e = 0; !(ge = S.next()).done; )
				(ge = ge.value),
					(Re = pe + Te(ge, _e++)),
					(Se += Ue(ge, L, ce, Re, ye));
		else if (ge === "object")
			throw (
				((L = String(S)),
				Error(
					"Objects are not valid as a React child (found: " +
						(L === "[object Object]"
							? "object with keys {" + Object.keys(S).join(", ") + "}"
							: L) +
						"). If you meant to render a collection of children, use an array instead.",
				))
			);
		return Se;
	}
	function tt(S, L, ce) {
		if (S == null) return S;
		var pe = [],
			ye = 0;
		return (
			Ue(S, pe, "", "", function (ge) {
				return L.call(ce, ge, ye++);
			}),
			pe
		);
	}
	function Ve(S) {
		if (S._status === -1) {
			var L = S._result;
			(L = L()),
				L.then(
					function (ce) {
						(S._status === 0 || S._status === -1) &&
							((S._status = 1), (S._result = ce));
					},
					function (ce) {
						(S._status === 0 || S._status === -1) &&
							((S._status = 2), (S._result = ce));
					},
				),
				S._status === -1 && ((S._status = 0), (S._result = L));
		}
		if (S._status === 1) return S._result.default;
		throw S._result;
	}
	var Me = { current: null },
		B = { transition: null },
		te = {
			ReactCurrentDispatcher: Me,
			ReactCurrentBatchConfig: B,
			ReactCurrentOwner: fe,
		};
	function K() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	return (
		(de.Children = {
			map: tt,
			forEach: function (S, L, ce) {
				tt(
					S,
					function () {
						L.apply(this, arguments);
					},
					ce,
				);
			},
			count: function (S) {
				var L = 0;
				return (
					tt(S, function () {
						L++;
					}),
					L
				);
			},
			toArray: function (S) {
				return (
					tt(S, function (L) {
						return L;
					}) || []
				);
			},
			only: function (S) {
				if (!we(S))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return S;
			},
		}),
		(de.Component = D),
		(de.Fragment = o),
		(de.Profiler = u),
		(de.PureComponent = V),
		(de.StrictMode = c),
		(de.Suspense = f),
		(de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te),
		(de.act = K),
		(de.cloneElement = function (S, L, ce) {
			if (S == null)
				throw Error(
					"React.cloneElement(...): The argument must be a React element, but you passed " +
						S +
						".",
				);
			var pe = P({}, S.props),
				ye = S.key,
				ge = S.ref,
				Se = S._owner;
			if (L != null) {
				if (
					(L.ref !== void 0 && ((ge = L.ref), (Se = fe.current)),
					L.key !== void 0 && (ye = "" + L.key),
					S.type && S.type.defaultProps)
				)
					var _e = S.type.defaultProps;
				for (Re in L)
					b.call(L, Re) &&
						!oe.hasOwnProperty(Re) &&
						(pe[Re] = L[Re] === void 0 && _e !== void 0 ? _e[Re] : L[Re]);
			}
			var Re = arguments.length - 2;
			if (Re === 1) pe.children = ce;
			else if (1 < Re) {
				_e = Array(Re);
				for (var dt = 0; dt < Re; dt++) _e[dt] = arguments[dt + 2];
				pe.children = _e;
			}
			return {
				$$typeof: l,
				type: S.type,
				key: ye,
				ref: ge,
				props: pe,
				_owner: Se,
			};
		}),
		(de.createContext = function (S) {
			return (
				(S = {
					$$typeof: m,
					_currentValue: S,
					_currentValue2: S,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
					_defaultValue: null,
					_globalName: null,
				}),
				(S.Provider = { $$typeof: d, _context: S }),
				(S.Consumer = S)
			);
		}),
		(de.createElement = se),
		(de.createFactory = function (S) {
			var L = se.bind(null, S);
			return (L.type = S), L;
		}),
		(de.createRef = function () {
			return { current: null };
		}),
		(de.forwardRef = function (S) {
			return { $$typeof: h, render: S };
		}),
		(de.isValidElement = we),
		(de.lazy = function (S) {
			return { $$typeof: g, _payload: { _status: -1, _result: S }, _init: Ve };
		}),
		(de.memo = function (S, L) {
			return { $$typeof: v, type: S, compare: L === void 0 ? null : L };
		}),
		(de.startTransition = function (S) {
			var L = B.transition;
			B.transition = {};
			try {
				S();
			} finally {
				B.transition = L;
			}
		}),
		(de.unstable_act = K),
		(de.useCallback = function (S, L) {
			return Me.current.useCallback(S, L);
		}),
		(de.useContext = function (S) {
			return Me.current.useContext(S);
		}),
		(de.useDebugValue = function () {}),
		(de.useDeferredValue = function (S) {
			return Me.current.useDeferredValue(S);
		}),
		(de.useEffect = function (S, L) {
			return Me.current.useEffect(S, L);
		}),
		(de.useId = function () {
			return Me.current.useId();
		}),
		(de.useImperativeHandle = function (S, L, ce) {
			return Me.current.useImperativeHandle(S, L, ce);
		}),
		(de.useInsertionEffect = function (S, L) {
			return Me.current.useInsertionEffect(S, L);
		}),
		(de.useLayoutEffect = function (S, L) {
			return Me.current.useLayoutEffect(S, L);
		}),
		(de.useMemo = function (S, L) {
			return Me.current.useMemo(S, L);
		}),
		(de.useReducer = function (S, L, ce) {
			return Me.current.useReducer(S, L, ce);
		}),
		(de.useRef = function (S) {
			return Me.current.useRef(S);
		}),
		(de.useState = function (S) {
			return Me.current.useState(S);
		}),
		(de.useSyncExternalStore = function (S, L, ce) {
			return Me.current.useSyncExternalStore(S, L, ce);
		}),
		(de.useTransition = function () {
			return Me.current.useTransition();
		}),
		(de.version = "18.3.1"),
		de
	);
}
var Ld;
function Rs() {
	return Ld || ((Ld = 1), (us.exports = Dh())), us.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function $h() {
	if (Id) return ci;
	Id = 1;
	var l = Rs(),
		r = Symbol.for("react.element"),
		o = Symbol.for("react.fragment"),
		c = Object.prototype.hasOwnProperty,
		u = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
		d = { key: !0, ref: !0, __self: !0, __source: !0 };
	function m(h, f, v) {
		var g,
			x = {},
			w = null,
			T = null;
		v !== void 0 && (w = "" + v),
			f.key !== void 0 && (w = "" + f.key),
			f.ref !== void 0 && (T = f.ref);
		for (g in f) c.call(f, g) && !d.hasOwnProperty(g) && (x[g] = f[g]);
		if (h && h.defaultProps)
			for (g in ((f = h.defaultProps), f)) x[g] === void 0 && (x[g] = f[g]);
		return {
			$$typeof: r,
			type: h,
			key: w,
			ref: T,
			props: x,
			_owner: u.current,
		};
	}
	return (ci.Fragment = o), (ci.jsx = m), (ci.jsxs = m), ci;
}
var zd;
function Fh() {
	return zd || ((zd = 1), (ss.exports = $h())), ss.exports;
}
var j = Fh(),
	R = Rs(),
	Zl = {},
	cs = { exports: {} },
	ct = {},
	ds = { exports: {} },
	fs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function Uh() {
	return (
		Md ||
			((Md = 1),
			(function (l) {
				function r(B, te) {
					var K = B.length;
					B.push(te);
					e: for (; 0 < K; ) {
						var S = (K - 1) >>> 1,
							L = B[S];
						if (0 < u(L, te)) (B[S] = te), (B[K] = L), (K = S);
						else break e;
					}
				}
				function o(B) {
					return B.length === 0 ? null : B[0];
				}
				function c(B) {
					if (B.length === 0) return null;
					var te = B[0],
						K = B.pop();
					if (K !== te) {
						B[0] = K;
						e: for (var S = 0, L = B.length, ce = L >>> 1; S < ce; ) {
							var pe = 2 * (S + 1) - 1,
								ye = B[pe],
								ge = pe + 1,
								Se = B[ge];
							if (0 > u(ye, K))
								ge < L && 0 > u(Se, ye)
									? ((B[S] = Se), (B[ge] = K), (S = ge))
									: ((B[S] = ye), (B[pe] = K), (S = pe));
							else if (ge < L && 0 > u(Se, K))
								(B[S] = Se), (B[ge] = K), (S = ge);
							else break e;
						}
					}
					return te;
				}
				function u(B, te) {
					var K = B.sortIndex - te.sortIndex;
					return K !== 0 ? K : B.id - te.id;
				}
				if (
					typeof performance == "object" &&
					typeof performance.now == "function"
				) {
					var d = performance;
					l.unstable_now = function () {
						return d.now();
					};
				} else {
					var m = Date,
						h = m.now();
					l.unstable_now = function () {
						return m.now() - h;
					};
				}
				var f = [],
					v = [],
					g = 1,
					x = null,
					w = 3,
					T = !1,
					P = !1,
					A = !1,
					D = typeof setTimeout == "function" ? setTimeout : null,
					$ = typeof clearTimeout == "function" ? clearTimeout : null,
					V = typeof setImmediate < "u" ? setImmediate : null;
				typeof navigator < "u" &&
					navigator.scheduling !== void 0 &&
					navigator.scheduling.isInputPending !== void 0 &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				function ie(B) {
					for (var te = o(v); te !== null; ) {
						if (te.callback === null) c(v);
						else if (te.startTime <= B)
							c(v), (te.sortIndex = te.expirationTime), r(f, te);
						else break;
						te = o(v);
					}
				}
				function Q(B) {
					if (((A = !1), ie(B), !P))
						if (o(f) !== null) (P = !0), Ve(b);
						else {
							var te = o(v);
							te !== null && Me(Q, te.startTime - B);
						}
				}
				function b(B, te) {
					(P = !1), A && ((A = !1), $(se), (se = -1)), (T = !0);
					var K = w;
					try {
						for (
							ie(te), x = o(f);
							x !== null && (!(x.expirationTime > te) || (B && !je()));

						) {
							var S = x.callback;
							if (typeof S == "function") {
								(x.callback = null), (w = x.priorityLevel);
								var L = S(x.expirationTime <= te);
								(te = l.unstable_now()),
									typeof L == "function"
										? (x.callback = L)
										: x === o(f) && c(f),
									ie(te);
							} else c(f);
							x = o(f);
						}
						if (x !== null) var ce = !0;
						else {
							var pe = o(v);
							pe !== null && Me(Q, pe.startTime - te), (ce = !1);
						}
						return ce;
					} finally {
						(x = null), (w = K), (T = !1);
					}
				}
				var fe = !1,
					oe = null,
					se = -1,
					he = 5,
					we = -1;
				function je() {
					return !(l.unstable_now() - we < he);
				}
				function Fe() {
					if (oe !== null) {
						var B = l.unstable_now();
						we = B;
						var te = !0;
						try {
							te = oe(!0, B);
						} finally {
							te ? Te() : ((fe = !1), (oe = null));
						}
					} else fe = !1;
				}
				var Te;
				if (typeof V == "function")
					Te = function () {
						V(Fe);
					};
				else if (typeof MessageChannel < "u") {
					var Ue = new MessageChannel(),
						tt = Ue.port2;
					(Ue.port1.onmessage = Fe),
						(Te = function () {
							tt.postMessage(null);
						});
				} else
					Te = function () {
						D(Fe, 0);
					};
				function Ve(B) {
					(oe = B), fe || ((fe = !0), Te());
				}
				function Me(B, te) {
					se = D(function () {
						B(l.unstable_now());
					}, te);
				}
				(l.unstable_IdlePriority = 5),
					(l.unstable_ImmediatePriority = 1),
					(l.unstable_LowPriority = 4),
					(l.unstable_NormalPriority = 3),
					(l.unstable_Profiling = null),
					(l.unstable_UserBlockingPriority = 2),
					(l.unstable_cancelCallback = function (B) {
						B.callback = null;
					}),
					(l.unstable_continueExecution = function () {
						P || T || ((P = !0), Ve(b));
					}),
					(l.unstable_forceFrameRate = function (B) {
						0 > B || 125 < B
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (he = 0 < B ? Math.floor(1e3 / B) : 5);
					}),
					(l.unstable_getCurrentPriorityLevel = function () {
						return w;
					}),
					(l.unstable_getFirstCallbackNode = function () {
						return o(f);
					}),
					(l.unstable_next = function (B) {
						switch (w) {
							case 1:
							case 2:
							case 3:
								var te = 3;
								break;
							default:
								te = w;
						}
						var K = w;
						w = te;
						try {
							return B();
						} finally {
							w = K;
						}
					}),
					(l.unstable_pauseExecution = function () {}),
					(l.unstable_requestPaint = function () {}),
					(l.unstable_runWithPriority = function (B, te) {
						switch (B) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								B = 3;
						}
						var K = w;
						w = B;
						try {
							return te();
						} finally {
							w = K;
						}
					}),
					(l.unstable_scheduleCallback = function (B, te, K) {
						var S = l.unstable_now();
						switch (
							(typeof K == "object" && K !== null
								? ((K = K.delay),
									(K = typeof K == "number" && 0 < K ? S + K : S))
								: (K = S),
							B)
						) {
							case 1:
								var L = -1;
								break;
							case 2:
								L = 250;
								break;
							case 5:
								L = 1073741823;
								break;
							case 4:
								L = 1e4;
								break;
							default:
								L = 5e3;
						}
						return (
							(L = K + L),
							(B = {
								id: g++,
								callback: te,
								priorityLevel: B,
								startTime: K,
								expirationTime: L,
								sortIndex: -1,
							}),
							K > S
								? ((B.sortIndex = K),
									r(v, B),
									o(f) === null &&
										B === o(v) &&
										(A ? ($(se), (se = -1)) : (A = !0), Me(Q, K - S)))
								: ((B.sortIndex = L), r(f, B), P || T || ((P = !0), Ve(b))),
							B
						);
					}),
					(l.unstable_shouldYield = je),
					(l.unstable_wrapCallback = function (B) {
						var te = w;
						return function () {
							var K = w;
							w = te;
							try {
								return B.apply(this, arguments);
							} finally {
								w = K;
							}
						};
					});
			})(fs)),
		fs
	);
}
var Ad;
function Vh() {
	return Ad || ((Ad = 1), (ds.exports = Uh())), ds.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function Bh() {
	if (Dd) return ct;
	Dd = 1;
	var l = Rs(),
		r = Vh();
	function o(e) {
		for (
			var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
				n = 1;
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
	var c = new Set(),
		u = {};
	function d(e, t) {
		m(e, t), m(e + "Capture", t);
	}
	function m(e, t) {
		for (u[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
	}
	var h = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		f = Object.prototype.hasOwnProperty,
		v =
			/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		g = {},
		x = {};
	function w(e) {
		return f.call(x, e)
			? !0
			: f.call(g, e)
				? !1
				: v.test(e)
					? (x[e] = !0)
					: ((g[e] = !0), !1);
	}
	function T(e, t, n, i) {
		if (n !== null && n.type === 0) return !1;
		switch (typeof t) {
			case "function":
			case "symbol":
				return !0;
			case "boolean":
				return i
					? !1
					: n !== null
						? !n.acceptsBooleans
						: ((e = e.toLowerCase().slice(0, 5)),
							e !== "data-" && e !== "aria-");
			default:
				return !1;
		}
	}
	function P(e, t, n, i) {
		if (t === null || typeof t > "u" || T(e, t, n, i)) return !0;
		if (i) return !1;
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
	function A(e, t, n, i, a, s, p) {
		(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
			(this.attributeName = i),
			(this.attributeNamespace = a),
			(this.mustUseProperty = n),
			(this.propertyName = e),
			(this.type = t),
			(this.sanitizeURL = s),
			(this.removeEmptyString = p);
	}
	var D = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
		.split(" ")
		.forEach(function (e) {
			D[e] = new A(e, 0, !1, e, null, !1, !1);
		}),
		[
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
		].forEach(function (e) {
			var t = e[0];
			D[t] = new A(t, 1, !1, e[1], null, !1, !1);
		}),
		["contentEditable", "draggable", "spellCheck", "value"].forEach(
			function (e) {
				D[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1);
			},
		),
		[
			"autoReverse",
			"externalResourcesRequired",
			"focusable",
			"preserveAlpha",
		].forEach(function (e) {
			D[e] = new A(e, 2, !1, e, null, !1, !1);
		}),
		"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
			.split(" ")
			.forEach(function (e) {
				D[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1);
			}),
		["checked", "multiple", "muted", "selected"].forEach(function (e) {
			D[e] = new A(e, 3, !0, e, null, !1, !1);
		}),
		["capture", "download"].forEach(function (e) {
			D[e] = new A(e, 4, !1, e, null, !1, !1);
		}),
		["cols", "rows", "size", "span"].forEach(function (e) {
			D[e] = new A(e, 6, !1, e, null, !1, !1);
		}),
		["rowSpan", "start"].forEach(function (e) {
			D[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1);
		});
	var $ = /[\-:]([a-z])/g;
	function V(e) {
		return e[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
		.split(" ")
		.forEach(function (e) {
			var t = e.replace($, V);
			D[t] = new A(t, 1, !1, e, null, !1, !1);
		}),
		"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
			.split(" ")
			.forEach(function (e) {
				var t = e.replace($, V);
				D[t] = new A(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
			}),
		["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
			var t = e.replace($, V);
			D[t] = new A(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
		}),
		["tabIndex", "crossOrigin"].forEach(function (e) {
			D[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1);
		}),
		(D.xlinkHref = new A(
			"xlinkHref",
			1,
			!1,
			"xlink:href",
			"http://www.w3.org/1999/xlink",
			!0,
			!1,
		)),
		["src", "href", "action", "formAction"].forEach(function (e) {
			D[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0);
		});
	function ie(e, t, n, i) {
		var a = D.hasOwnProperty(t) ? D[t] : null;
		(a !== null
			? a.type !== 0
			: i ||
				!(2 < t.length) ||
				(t[0] !== "o" && t[0] !== "O") ||
				(t[1] !== "n" && t[1] !== "N")) &&
			(P(t, n, a, i) && (n = null),
			i || a === null
				? w(t) &&
					(n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
				: a.mustUseProperty
					? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
					: ((t = a.attributeName),
						(i = a.attributeNamespace),
						n === null
							? e.removeAttribute(t)
							: ((a = a.type),
								(n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
								i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
	}
	var Q = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		b = Symbol.for("react.element"),
		fe = Symbol.for("react.portal"),
		oe = Symbol.for("react.fragment"),
		se = Symbol.for("react.strict_mode"),
		he = Symbol.for("react.profiler"),
		we = Symbol.for("react.provider"),
		je = Symbol.for("react.context"),
		Fe = Symbol.for("react.forward_ref"),
		Te = Symbol.for("react.suspense"),
		Ue = Symbol.for("react.suspense_list"),
		tt = Symbol.for("react.memo"),
		Ve = Symbol.for("react.lazy"),
		Me = Symbol.for("react.offscreen"),
		B = Symbol.iterator;
	function te(e) {
		return e === null || typeof e != "object"
			? null
			: ((e = (B && e[B]) || e["@@iterator"]),
				typeof e == "function" ? e : null);
	}
	var K = Object.assign,
		S;
	function L(e) {
		if (S === void 0)
			try {
				throw Error();
			} catch (n) {
				var t = n.stack.trim().match(/\n( *(at )?)/);
				S = (t && t[1]) || "";
			}
		return (
			`
` +
			S +
			e
		);
	}
	var ce = !1;
	function pe(e, t) {
		if (!e || ce) return "";
		ce = !0;
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
					} catch (N) {
						var i = N;
					}
					Reflect.construct(e, [], t);
				} else {
					try {
						t.call();
					} catch (N) {
						i = N;
					}
					e.call(t.prototype);
				}
			else {
				try {
					throw Error();
				} catch (N) {
					i = N;
				}
				e();
			}
		} catch (N) {
			if (N && i && typeof N.stack == "string") {
				for (
					var a = N.stack.split(`
`),
						s = i.stack.split(`
`),
						p = a.length - 1,
						y = s.length - 1;
					1 <= p && 0 <= y && a[p] !== s[y];

				)
					y--;
				for (; 1 <= p && 0 <= y; p--, y--)
					if (a[p] !== s[y]) {
						if (p !== 1 || y !== 1)
							do
								if ((p--, y--, 0 > y || a[p] !== s[y])) {
									var _ =
										`
` + a[p].replace(" at new ", " at ");
									return (
										e.displayName &&
											_.includes("<anonymous>") &&
											(_ = _.replace("<anonymous>", e.displayName)),
										_
									);
								}
							while (1 <= p && 0 <= y);
						break;
					}
			}
		} finally {
			(ce = !1), (Error.prepareStackTrace = n);
		}
		return (e = e ? e.displayName || e.name : "") ? L(e) : "";
	}
	function ye(e) {
		switch (e.tag) {
			case 5:
				return L(e.type);
			case 16:
				return L("Lazy");
			case 13:
				return L("Suspense");
			case 19:
				return L("SuspenseList");
			case 0:
			case 2:
			case 15:
				return (e = pe(e.type, !1)), e;
			case 11:
				return (e = pe(e.type.render, !1)), e;
			case 1:
				return (e = pe(e.type, !0)), e;
			default:
				return "";
		}
	}
	function ge(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case oe:
				return "Fragment";
			case fe:
				return "Portal";
			case he:
				return "Profiler";
			case se:
				return "StrictMode";
			case Te:
				return "Suspense";
			case Ue:
				return "SuspenseList";
		}
		if (typeof e == "object")
			switch (e.$$typeof) {
				case je:
					return (e.displayName || "Context") + ".Consumer";
				case we:
					return (e._context.displayName || "Context") + ".Provider";
				case Fe:
					var t = e.render;
					return (
						(e = e.displayName),
						e ||
							((e = t.displayName || t.name || ""),
							(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
						e
					);
				case tt:
					return (
						(t = e.displayName || null), t !== null ? t : ge(e.type) || "Memo"
					);
				case Ve:
					(t = e._payload), (e = e._init);
					try {
						return ge(e(t));
					} catch {}
			}
		return null;
	}
	function Se(e) {
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
				return ge(t);
			case 8:
				return t === se ? "StrictMode" : "Mode";
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
	function _e(e) {
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
	function Re(e) {
		var t = e.type;
		return (
			(e = e.nodeName) &&
			e.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function dt(e) {
		var t = Re(e) ? "checked" : "value",
			n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			i = "" + e[t];
		if (
			!e.hasOwnProperty(t) &&
			typeof n < "u" &&
			typeof n.get == "function" &&
			typeof n.set == "function"
		) {
			var a = n.get,
				s = n.set;
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return a.call(this);
					},
					set: function (p) {
						(i = "" + p), s.call(this, p);
					},
				}),
				Object.defineProperty(e, t, { enumerable: n.enumerable }),
				{
					getValue: function () {
						return i;
					},
					setValue: function (p) {
						i = "" + p;
					},
					stopTracking: function () {
						(e._valueTracker = null), delete e[t];
					},
				}
			);
		}
	}
	function Ii(e) {
		e._valueTracker || (e._valueTracker = dt(e));
	}
	function Ds(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(),
			i = "";
		return (
			e && (i = Re(e) ? (e.checked ? "true" : "false") : e.value),
			(e = i),
			e !== n ? (t.setValue(e), !0) : !1
		);
	}
	function zi(e) {
		if (
			((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
		)
			return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function mo(e, t) {
		var n = t.checked;
		return K({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked,
		});
	}
	function $s(e, t) {
		var n = t.defaultValue == null ? "" : t.defaultValue,
			i = t.checked != null ? t.checked : t.defaultChecked;
		(n = _e(t.value != null ? t.value : n)),
			(e._wrapperState = {
				initialChecked: i,
				initialValue: n,
				controlled:
					t.type === "checkbox" || t.type === "radio"
						? t.checked != null
						: t.value != null,
			});
	}
	function Fs(e, t) {
		(t = t.checked), t != null && ie(e, "checked", t, !1);
	}
	function vo(e, t) {
		Fs(e, t);
		var n = _e(t.value),
			i = t.type;
		if (n != null)
			i === "number"
				? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
				: e.value !== "" + n && (e.value = "" + n);
		else if (i === "submit" || i === "reset") {
			e.removeAttribute("value");
			return;
		}
		t.hasOwnProperty("value")
			? yo(e, t.type, n)
			: t.hasOwnProperty("defaultValue") && yo(e, t.type, _e(t.defaultValue)),
			t.checked == null &&
				t.defaultChecked != null &&
				(e.defaultChecked = !!t.defaultChecked);
	}
	function Us(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var i = t.type;
			if (
				!(
					(i !== "submit" && i !== "reset") ||
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
	function yo(e, t, n) {
		(t !== "number" || zi(e.ownerDocument) !== e) &&
			(n == null
				? (e.defaultValue = "" + e._wrapperState.initialValue)
				: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
	}
	var Cr = Array.isArray;
	function Hn(e, t, n, i) {
		if (((e = e.options), t)) {
			t = {};
			for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
			for (n = 0; n < e.length; n++)
				(a = t.hasOwnProperty("$" + e[n].value)),
					e[n].selected !== a && (e[n].selected = a),
					a && i && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + _e(n), t = null, a = 0; a < e.length; a++) {
				if (e[a].value === n) {
					(e[a].selected = !0), i && (e[a].defaultSelected = !0);
					return;
				}
				t !== null || e[a].disabled || (t = e[a]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function go(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
		return K({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue,
		});
	}
	function Vs(e, t) {
		var n = t.value;
		if (n == null) {
			if (((n = t.children), (t = t.defaultValue), n != null)) {
				if (t != null) throw Error(o(92));
				if (Cr(n)) {
					if (1 < n.length) throw Error(o(93));
					n = n[0];
				}
				t = n;
			}
			t == null && (t = ""), (n = t);
		}
		e._wrapperState = { initialValue: _e(n) };
	}
	function Bs(e, t) {
		var n = _e(t.value),
			i = _e(t.defaultValue);
		n != null &&
			((n = "" + n),
			n !== e.value && (e.value = n),
			t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
			i != null && (e.defaultValue = "" + i);
	}
	function Zs(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue &&
			t !== "" &&
			t !== null &&
			(e.value = t);
	}
	function Ws(e) {
		switch (e) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml";
		}
	}
	function xo(e, t) {
		return e == null || e === "http://www.w3.org/1999/xhtml"
			? Ws(t)
			: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
				? "http://www.w3.org/1999/xhtml"
				: e;
	}
	var Mi,
		Hs = (function (e) {
			return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
				? function (t, n, i, a) {
						MSApp.execUnsafeLocalFunction(function () {
							return e(t, n, i, a);
						});
					}
				: e;
		})(function (e, t) {
			if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
				e.innerHTML = t;
			else {
				for (
					Mi = Mi || document.createElement("div"),
						Mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
						t = Mi.firstChild;
					e.firstChild;

				)
					e.removeChild(e.firstChild);
				for (; t.firstChild; ) e.appendChild(t.firstChild);
			}
		});
	function Nr(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Tr = {
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
		Uf = ["Webkit", "ms", "Moz", "O"];
	Object.keys(Tr).forEach(function (e) {
		Uf.forEach(function (t) {
			(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]);
		});
	});
	function Qs(e, t, n) {
		return t == null || typeof t == "boolean" || t === ""
			? ""
			: n || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
				? ("" + t).trim()
				: t + "px";
	}
	function Ks(e, t) {
		e = e.style;
		for (var n in t)
			if (t.hasOwnProperty(n)) {
				var i = n.indexOf("--") === 0,
					a = Qs(n, t[n], i);
				n === "float" && (n = "cssFloat"), i ? e.setProperty(n, a) : (e[n] = a);
			}
	}
	var Vf = K(
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
	function wo(e, t) {
		if (t) {
			if (Vf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
				throw Error(o(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(o(60));
				if (
					typeof t.dangerouslySetInnerHTML != "object" ||
					!("__html" in t.dangerouslySetInnerHTML)
				)
					throw Error(o(61));
			}
			if (t.style != null && typeof t.style != "object") throw Error(o(62));
		}
	}
	function _o(e, t) {
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
	var ko = null;
	function So(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		);
	}
	var Eo = null,
		Qn = null,
		Kn = null;
	function Ys(e) {
		if ((e = Gr(e))) {
			if (typeof Eo != "function") throw Error(o(280));
			var t = e.stateNode;
			t && ((t = il(t)), Eo(e.stateNode, e.type, t));
		}
	}
	function Gs(e) {
		Qn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Qn = e);
	}
	function Xs() {
		if (Qn) {
			var e = Qn,
				t = Kn;
			if (((Kn = Qn = null), Ys(e), t)) for (e = 0; e < t.length; e++) Ys(t[e]);
		}
	}
	function qs(e, t) {
		return e(t);
	}
	function bs() {}
	var Co = !1;
	function Js(e, t, n) {
		if (Co) return e(t, n);
		Co = !0;
		try {
			return qs(e, t, n);
		} finally {
			(Co = !1), (Qn !== null || Kn !== null) && (bs(), Xs());
		}
	}
	function Rr(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var i = il(n);
		if (i === null) return null;
		n = i[t];
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
				(i = !i.disabled) ||
					((e = e.type),
					(i = !(
						e === "button" ||
						e === "input" ||
						e === "select" ||
						e === "textarea"
					))),
					(e = !i);
				break e;
			default:
				e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(o(231, t, typeof n));
		return n;
	}
	var No = !1;
	if (h)
		try {
			var Pr = {};
			Object.defineProperty(Pr, "passive", {
				get: function () {
					No = !0;
				},
			}),
				window.addEventListener("test", Pr, Pr),
				window.removeEventListener("test", Pr, Pr);
		} catch {
			No = !1;
		}
	function Bf(e, t, n, i, a, s, p, y, _) {
		var N = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, N);
		} catch (I) {
			this.onError(I);
		}
	}
	var jr = !1,
		Ai = null,
		Di = !1,
		To = null,
		Zf = {
			onError: function (e) {
				(jr = !0), (Ai = e);
			},
		};
	function Wf(e, t, n, i, a, s, p, y, _) {
		(jr = !1), (Ai = null), Bf.apply(Zf, arguments);
	}
	function Hf(e, t, n, i, a, s, p, y, _) {
		if ((Wf.apply(this, arguments), jr)) {
			if (jr) {
				var N = Ai;
				(jr = !1), (Ai = null);
			} else throw Error(o(198));
			Di || ((Di = !0), (To = N));
		}
	}
	function Rn(e) {
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
	function eu(e) {
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
	function tu(e) {
		if (Rn(e) !== e) throw Error(o(188));
	}
	function Qf(e) {
		var t = e.alternate;
		if (!t) {
			if (((t = Rn(e)), t === null)) throw Error(o(188));
			return t !== e ? null : e;
		}
		for (var n = e, i = t; ; ) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (((i = a.return), i !== null)) {
					n = i;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s; ) {
					if (s === n) return tu(a), e;
					if (s === i) return tu(a), t;
					s = s.sibling;
				}
				throw Error(o(188));
			}
			if (n.return !== i.return) (n = a), (i = s);
			else {
				for (var p = !1, y = a.child; y; ) {
					if (y === n) {
						(p = !0), (n = a), (i = s);
						break;
					}
					if (y === i) {
						(p = !0), (i = a), (n = s);
						break;
					}
					y = y.sibling;
				}
				if (!p) {
					for (y = s.child; y; ) {
						if (y === n) {
							(p = !0), (n = s), (i = a);
							break;
						}
						if (y === i) {
							(p = !0), (i = s), (n = a);
							break;
						}
						y = y.sibling;
					}
					if (!p) throw Error(o(189));
				}
			}
			if (n.alternate !== i) throw Error(o(190));
		}
		if (n.tag !== 3) throw Error(o(188));
		return n.stateNode.current === n ? e : t;
	}
	function nu(e) {
		return (e = Qf(e)), e !== null ? ru(e) : null;
	}
	function ru(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null; ) {
			var t = ru(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var iu = r.unstable_scheduleCallback,
		lu = r.unstable_cancelCallback,
		Kf = r.unstable_shouldYield,
		Yf = r.unstable_requestPaint,
		De = r.unstable_now,
		Gf = r.unstable_getCurrentPriorityLevel,
		Ro = r.unstable_ImmediatePriority,
		ou = r.unstable_UserBlockingPriority,
		$i = r.unstable_NormalPriority,
		Xf = r.unstable_LowPriority,
		au = r.unstable_IdlePriority,
		Fi = null,
		zt = null;
	function qf(e) {
		if (zt && typeof zt.onCommitFiberRoot == "function")
			try {
				zt.onCommitFiberRoot(Fi, e, void 0, (e.current.flags & 128) === 128);
			} catch {}
	}
	var St = Math.clz32 ? Math.clz32 : ep,
		bf = Math.log,
		Jf = Math.LN2;
	function ep(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((bf(e) / Jf) | 0)) | 0;
	}
	var Ui = 64,
		Vi = 4194304;
	function Or(e) {
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
	function Bi(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var i = 0,
			a = e.suspendedLanes,
			s = e.pingedLanes,
			p = n & 268435455;
		if (p !== 0) {
			var y = p & ~a;
			y !== 0 ? (i = Or(y)) : ((s &= p), s !== 0 && (i = Or(s)));
		} else (p = n & ~a), p !== 0 ? (i = Or(p)) : s !== 0 && (i = Or(s));
		if (i === 0) return 0;
		if (
			t !== 0 &&
			t !== i &&
			!(t & a) &&
			((a = i & -i), (s = t & -t), a >= s || (a === 16 && (s & 4194240) !== 0))
		)
			return t;
		if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
			for (e = e.entanglements, t &= i; 0 < t; )
				(n = 31 - St(t)), (a = 1 << n), (i |= e[n]), (t &= ~a);
		return i;
	}
	function tp(e, t) {
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
	function np(e, t) {
		for (
			var n = e.suspendedLanes,
				i = e.pingedLanes,
				a = e.expirationTimes,
				s = e.pendingLanes;
			0 < s;

		) {
			var p = 31 - St(s),
				y = 1 << p,
				_ = a[p];
			_ === -1
				? (!(y & n) || y & i) && (a[p] = tp(y, t))
				: _ <= t && (e.expiredLanes |= y),
				(s &= ~y);
		}
	}
	function Po(e) {
		return (
			(e = e.pendingLanes & -1073741825),
			e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
		);
	}
	function su() {
		var e = Ui;
		return (Ui <<= 1), !(Ui & 4194240) && (Ui = 64), e;
	}
	function jo(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Lr(e, t, n) {
		(e.pendingLanes |= t),
			t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
			(e = e.eventTimes),
			(t = 31 - St(t)),
			(e[t] = n);
	}
	function rp(e, t) {
		var n = e.pendingLanes & ~t;
		(e.pendingLanes = t),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.expiredLanes &= t),
			(e.mutableReadLanes &= t),
			(e.entangledLanes &= t),
			(t = e.entanglements);
		var i = e.eventTimes;
		for (e = e.expirationTimes; 0 < n; ) {
			var a = 31 - St(n),
				s = 1 << a;
			(t[a] = 0), (i[a] = -1), (e[a] = -1), (n &= ~s);
		}
	}
	function Oo(e, t) {
		var n = (e.entangledLanes |= t);
		for (e = e.entanglements; n; ) {
			var i = 31 - St(n),
				a = 1 << i;
			(a & t) | (e[i] & t) && (e[i] |= t), (n &= ~a);
		}
	}
	var ke = 0;
	function uu(e) {
		return (
			(e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
		);
	}
	var cu,
		Lo,
		du,
		fu,
		pu,
		Io = !1,
		Zi = [],
		nn = null,
		rn = null,
		ln = null,
		Ir = new Map(),
		zr = new Map(),
		on = [],
		ip =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
				" ",
			);
	function hu(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				nn = null;
				break;
			case "dragenter":
			case "dragleave":
				rn = null;
				break;
			case "mouseover":
			case "mouseout":
				ln = null;
				break;
			case "pointerover":
			case "pointerout":
				Ir.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				zr.delete(t.pointerId);
		}
	}
	function Mr(e, t, n, i, a, s) {
		return e === null || e.nativeEvent !== s
			? ((e = {
					blockedOn: t,
					domEventName: n,
					eventSystemFlags: i,
					nativeEvent: s,
					targetContainers: [a],
				}),
				t !== null && ((t = Gr(t)), t !== null && Lo(t)),
				e)
			: ((e.eventSystemFlags |= i),
				(t = e.targetContainers),
				a !== null && t.indexOf(a) === -1 && t.push(a),
				e);
	}
	function lp(e, t, n, i, a) {
		switch (t) {
			case "focusin":
				return (nn = Mr(nn, e, t, n, i, a)), !0;
			case "dragenter":
				return (rn = Mr(rn, e, t, n, i, a)), !0;
			case "mouseover":
				return (ln = Mr(ln, e, t, n, i, a)), !0;
			case "pointerover":
				var s = a.pointerId;
				return Ir.set(s, Mr(Ir.get(s) || null, e, t, n, i, a)), !0;
			case "gotpointercapture":
				return (
					(s = a.pointerId), zr.set(s, Mr(zr.get(s) || null, e, t, n, i, a)), !0
				);
		}
		return !1;
	}
	function mu(e) {
		var t = Pn(e.target);
		if (t !== null) {
			var n = Rn(t);
			if (n !== null) {
				if (((t = n.tag), t === 13)) {
					if (((t = eu(n)), t !== null)) {
						(e.blockedOn = t),
							pu(e.priority, function () {
								du(n);
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
	function Wi(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var i = new n.constructor(n.type, n);
				(ko = i), n.target.dispatchEvent(i), (ko = null);
			} else return (t = Gr(n)), t !== null && Lo(t), (e.blockedOn = n), !1;
			t.shift();
		}
		return !0;
	}
	function vu(e, t, n) {
		Wi(e) && n.delete(t);
	}
	function op() {
		(Io = !1),
			nn !== null && Wi(nn) && (nn = null),
			rn !== null && Wi(rn) && (rn = null),
			ln !== null && Wi(ln) && (ln = null),
			Ir.forEach(vu),
			zr.forEach(vu);
	}
	function Ar(e, t) {
		e.blockedOn === t &&
			((e.blockedOn = null),
			Io ||
				((Io = !0),
				r.unstable_scheduleCallback(r.unstable_NormalPriority, op)));
	}
	function Dr(e) {
		function t(a) {
			return Ar(a, e);
		}
		if (0 < Zi.length) {
			Ar(Zi[0], e);
			for (var n = 1; n < Zi.length; n++) {
				var i = Zi[n];
				i.blockedOn === e && (i.blockedOn = null);
			}
		}
		for (
			nn !== null && Ar(nn, e),
				rn !== null && Ar(rn, e),
				ln !== null && Ar(ln, e),
				Ir.forEach(t),
				zr.forEach(t),
				n = 0;
			n < on.length;
			n++
		)
			(i = on[n]), i.blockedOn === e && (i.blockedOn = null);
		for (; 0 < on.length && ((n = on[0]), n.blockedOn === null); )
			mu(n), n.blockedOn === null && on.shift();
	}
	var Yn = Q.ReactCurrentBatchConfig,
		Hi = !0;
	function ap(e, t, n, i) {
		var a = ke,
			s = Yn.transition;
		Yn.transition = null;
		try {
			(ke = 1), zo(e, t, n, i);
		} finally {
			(ke = a), (Yn.transition = s);
		}
	}
	function sp(e, t, n, i) {
		var a = ke,
			s = Yn.transition;
		Yn.transition = null;
		try {
			(ke = 4), zo(e, t, n, i);
		} finally {
			(ke = a), (Yn.transition = s);
		}
	}
	function zo(e, t, n, i) {
		if (Hi) {
			var a = Mo(e, t, n, i);
			if (a === null) bo(e, t, i, Qi, n), hu(e, i);
			else if (lp(a, e, t, n, i)) i.stopPropagation();
			else if ((hu(e, i), t & 4 && -1 < ip.indexOf(e))) {
				for (; a !== null; ) {
					var s = Gr(a);
					if (
						(s !== null && cu(s),
						(s = Mo(e, t, n, i)),
						s === null && bo(e, t, i, Qi, n),
						s === a)
					)
						break;
					a = s;
				}
				a !== null && i.stopPropagation();
			} else bo(e, t, i, null, n);
		}
	}
	var Qi = null;
	function Mo(e, t, n, i) {
		if (((Qi = null), (e = So(i)), (e = Pn(e)), e !== null))
			if (((t = Rn(e)), t === null)) e = null;
			else if (((n = t.tag), n === 13)) {
				if (((e = eu(t)), e !== null)) return e;
				e = null;
			} else if (n === 3) {
				if (t.stateNode.current.memoizedState.isDehydrated)
					return t.tag === 3 ? t.stateNode.containerInfo : null;
				e = null;
			} else t !== e && (e = null);
		return (Qi = e), null;
	}
	function yu(e) {
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
				switch (Gf()) {
					case Ro:
						return 1;
					case ou:
						return 4;
					case $i:
					case Xf:
						return 16;
					case au:
						return 536870912;
					default:
						return 16;
				}
			default:
				return 16;
		}
	}
	var an = null,
		Ao = null,
		Ki = null;
	function gu() {
		if (Ki) return Ki;
		var e,
			t = Ao,
			n = t.length,
			i,
			a = "value" in an ? an.value : an.textContent,
			s = a.length;
		for (e = 0; e < n && t[e] === a[e]; e++);
		var p = n - e;
		for (i = 1; i <= p && t[n - i] === a[s - i]; i++);
		return (Ki = a.slice(e, 1 < i ? 1 - i : void 0));
	}
	function Yi(e) {
		var t = e.keyCode;
		return (
			"charCode" in e
				? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
				: (e = t),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		);
	}
	function Gi() {
		return !0;
	}
	function xu() {
		return !1;
	}
	function ft(e) {
		function t(n, i, a, s, p) {
			(this._reactName = n),
				(this._targetInst = a),
				(this.type = i),
				(this.nativeEvent = s),
				(this.target = p),
				(this.currentTarget = null);
			for (var y in e)
				e.hasOwnProperty(y) && ((n = e[y]), (this[y] = n ? n(s) : s[y]));
			return (
				(this.isDefaultPrevented = (
					s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
				)
					? Gi
					: xu),
				(this.isPropagationStopped = xu),
				this
			);
		}
		return (
			K(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var n = this.nativeEvent;
					n &&
						(n.preventDefault
							? n.preventDefault()
							: typeof n.returnValue != "unknown" && (n.returnValue = !1),
						(this.isDefaultPrevented = Gi));
				},
				stopPropagation: function () {
					var n = this.nativeEvent;
					n &&
						(n.stopPropagation
							? n.stopPropagation()
							: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
						(this.isPropagationStopped = Gi));
				},
				persist: function () {},
				isPersistent: Gi,
			}),
			t
		);
	}
	var Gn = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Do = ft(Gn),
		$r = K({}, Gn, { view: 0, detail: 0 }),
		up = ft($r),
		$o,
		Fo,
		Fr,
		Xi = K({}, $r, {
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
			getModifierState: Vo,
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
					: (e !== Fr &&
							(Fr && e.type === "mousemove"
								? (($o = e.screenX - Fr.screenX), (Fo = e.screenY - Fr.screenY))
								: (Fo = $o = 0),
							(Fr = e)),
						$o);
			},
			movementY: function (e) {
				return "movementY" in e ? e.movementY : Fo;
			},
		}),
		wu = ft(Xi),
		cp = K({}, Xi, { dataTransfer: 0 }),
		dp = ft(cp),
		fp = K({}, $r, { relatedTarget: 0 }),
		Uo = ft(fp),
		pp = K({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		hp = ft(pp),
		mp = K({}, Gn, {
			clipboardData: function (e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData;
			},
		}),
		vp = ft(mp),
		yp = K({}, Gn, { data: 0 }),
		_u = ft(yp),
		gp = {
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
		xp = {
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
		wp = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function _p(e) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(e)
			: (e = wp[e])
				? !!t[e]
				: !1;
	}
	function Vo() {
		return _p;
	}
	var kp = K({}, $r, {
			key: function (e) {
				if (e.key) {
					var t = gp[e.key] || e.key;
					if (t !== "Unidentified") return t;
				}
				return e.type === "keypress"
					? ((e = Yi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
					: e.type === "keydown" || e.type === "keyup"
						? xp[e.keyCode] || "Unidentified"
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
			getModifierState: Vo,
			charCode: function (e) {
				return e.type === "keypress" ? Yi(e) : 0;
			},
			keyCode: function (e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			},
			which: function (e) {
				return e.type === "keypress"
					? Yi(e)
					: e.type === "keydown" || e.type === "keyup"
						? e.keyCode
						: 0;
			},
		}),
		Sp = ft(kp),
		Ep = K({}, Xi, {
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
		ku = ft(Ep),
		Cp = K({}, $r, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Vo,
		}),
		Np = ft(Cp),
		Tp = K({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Rp = ft(Tp),
		Pp = K({}, Xi, {
			deltaX: function (e) {
				return "deltaX" in e
					? e.deltaX
					: "wheelDeltaX" in e
						? -e.wheelDeltaX
						: 0;
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
		jp = ft(Pp),
		Op = [9, 13, 27, 32],
		Bo = h && "CompositionEvent" in window,
		Ur = null;
	h && "documentMode" in document && (Ur = document.documentMode);
	var Lp = h && "TextEvent" in window && !Ur,
		Su = h && (!Bo || (Ur && 8 < Ur && 11 >= Ur)),
		Eu = " ",
		Cu = !1;
	function Nu(e, t) {
		switch (e) {
			case "keyup":
				return Op.indexOf(t.keyCode) !== -1;
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
	function Tu(e) {
		return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
	}
	var Xn = !1;
	function Ip(e, t) {
		switch (e) {
			case "compositionend":
				return Tu(t);
			case "keypress":
				return t.which !== 32 ? null : ((Cu = !0), Eu);
			case "textInput":
				return (e = t.data), e === Eu && Cu ? null : e;
			default:
				return null;
		}
	}
	function zp(e, t) {
		if (Xn)
			return e === "compositionend" || (!Bo && Nu(e, t))
				? ((e = gu()), (Ki = Ao = an = null), (Xn = !1), e)
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
				return Su && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var Mp = {
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
	function Ru(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Mp[e.type] : t === "textarea";
	}
	function Pu(e, t, n, i) {
		Gs(i),
			(t = tl(t, "onChange")),
			0 < t.length &&
				((n = new Do("onChange", "change", null, n, i)),
				e.push({ event: n, listeners: t }));
	}
	var Vr = null,
		Br = null;
	function Ap(e) {
		Ku(e, 0);
	}
	function qi(e) {
		var t = tr(e);
		if (Ds(t)) return e;
	}
	function Dp(e, t) {
		if (e === "change") return t;
	}
	var ju = !1;
	if (h) {
		var Zo;
		if (h) {
			var Wo = "oninput" in document;
			if (!Wo) {
				var Ou = document.createElement("div");
				Ou.setAttribute("oninput", "return;"),
					(Wo = typeof Ou.oninput == "function");
			}
			Zo = Wo;
		} else Zo = !1;
		ju = Zo && (!document.documentMode || 9 < document.documentMode);
	}
	function Lu() {
		Vr && (Vr.detachEvent("onpropertychange", Iu), (Br = Vr = null));
	}
	function Iu(e) {
		if (e.propertyName === "value" && qi(Br)) {
			var t = [];
			Pu(t, Br, e, So(e)), Js(Ap, t);
		}
	}
	function $p(e, t, n) {
		e === "focusin"
			? (Lu(), (Vr = t), (Br = n), Vr.attachEvent("onpropertychange", Iu))
			: e === "focusout" && Lu();
	}
	function Fp(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown")
			return qi(Br);
	}
	function Up(e, t) {
		if (e === "click") return qi(t);
	}
	function Vp(e, t) {
		if (e === "input" || e === "change") return qi(t);
	}
	function Bp(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var Et = typeof Object.is == "function" ? Object.is : Bp;
	function Zr(e, t) {
		if (Et(e, t)) return !0;
		if (
			typeof e != "object" ||
			e === null ||
			typeof t != "object" ||
			t === null
		)
			return !1;
		var n = Object.keys(e),
			i = Object.keys(t);
		if (n.length !== i.length) return !1;
		for (i = 0; i < n.length; i++) {
			var a = n[i];
			if (!f.call(t, a) || !Et(e[a], t[a])) return !1;
		}
		return !0;
	}
	function zu(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function Mu(e, t) {
		var n = zu(e);
		e = 0;
		for (var i; n; ) {
			if (n.nodeType === 3) {
				if (((i = e + n.textContent.length), e <= t && i >= t))
					return { node: n, offset: t - e };
				e = i;
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
			n = zu(n);
		}
	}
	function Au(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
					? !1
					: t && t.nodeType === 3
						? Au(e, t.parentNode)
						: "contains" in e
							? e.contains(t)
							: e.compareDocumentPosition
								? !!(e.compareDocumentPosition(t) & 16)
								: !1
			: !1;
	}
	function Du() {
		for (var e = window, t = zi(); t instanceof e.HTMLIFrameElement; ) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = zi(e.document);
		}
		return t;
	}
	function Ho(e) {
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
	function Zp(e) {
		var t = Du(),
			n = e.focusedElem,
			i = e.selectionRange;
		if (
			t !== n &&
			n &&
			n.ownerDocument &&
			Au(n.ownerDocument.documentElement, n)
		) {
			if (i !== null && Ho(n)) {
				if (
					((t = i.start),
					(e = i.end),
					e === void 0 && (e = t),
					"selectionStart" in n)
				)
					(n.selectionStart = t),
						(n.selectionEnd = Math.min(e, n.value.length));
				else if (
					((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
					e.getSelection)
				) {
					e = e.getSelection();
					var a = n.textContent.length,
						s = Math.min(i.start, a);
					(i = i.end === void 0 ? s : Math.min(i.end, a)),
						!e.extend && s > i && ((a = i), (i = s), (s = a)),
						(a = Mu(n, s));
					var p = Mu(n, i);
					a &&
						p &&
						(e.rangeCount !== 1 ||
							e.anchorNode !== a.node ||
							e.anchorOffset !== a.offset ||
							e.focusNode !== p.node ||
							e.focusOffset !== p.offset) &&
						((t = t.createRange()),
						t.setStart(a.node, a.offset),
						e.removeAllRanges(),
						s > i
							? (e.addRange(t), e.extend(p.node, p.offset))
							: (t.setEnd(p.node, p.offset), e.addRange(t)));
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
	var Wp = h && "documentMode" in document && 11 >= document.documentMode,
		qn = null,
		Qo = null,
		Wr = null,
		Ko = !1;
	function $u(e, t, n) {
		var i =
			n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Ko ||
			qn == null ||
			qn !== zi(i) ||
			((i = qn),
			"selectionStart" in i && Ho(i)
				? (i = { start: i.selectionStart, end: i.selectionEnd })
				: ((i = (
						(i.ownerDocument && i.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(i = {
						anchorNode: i.anchorNode,
						anchorOffset: i.anchorOffset,
						focusNode: i.focusNode,
						focusOffset: i.focusOffset,
					})),
			(Wr && Zr(Wr, i)) ||
				((Wr = i),
				(i = tl(Qo, "onSelect")),
				0 < i.length &&
					((t = new Do("onSelect", "select", null, t, n)),
					e.push({ event: t, listeners: i }),
					(t.target = qn))));
	}
	function bi(e, t) {
		var n = {};
		return (
			(n[e.toLowerCase()] = t.toLowerCase()),
			(n["Webkit" + e] = "webkit" + t),
			(n["Moz" + e] = "moz" + t),
			n
		);
	}
	var bn = {
			animationend: bi("Animation", "AnimationEnd"),
			animationiteration: bi("Animation", "AnimationIteration"),
			animationstart: bi("Animation", "AnimationStart"),
			transitionend: bi("Transition", "TransitionEnd"),
		},
		Yo = {},
		Fu = {};
	h &&
		((Fu = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete bn.animationend.animation,
			delete bn.animationiteration.animation,
			delete bn.animationstart.animation),
		"TransitionEvent" in window || delete bn.transitionend.transition);
	function Ji(e) {
		if (Yo[e]) return Yo[e];
		if (!bn[e]) return e;
		var t = bn[e],
			n;
		for (n in t) if (t.hasOwnProperty(n) && n in Fu) return (Yo[e] = t[n]);
		return e;
	}
	var Uu = Ji("animationend"),
		Vu = Ji("animationiteration"),
		Bu = Ji("animationstart"),
		Zu = Ji("transitionend"),
		Wu = new Map(),
		Hu =
			"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	function sn(e, t) {
		Wu.set(e, t), d(t, [e]);
	}
	for (var Go = 0; Go < Hu.length; Go++) {
		var Xo = Hu[Go],
			Hp = Xo.toLowerCase(),
			Qp = Xo[0].toUpperCase() + Xo.slice(1);
		sn(Hp, "on" + Qp);
	}
	sn(Uu, "onAnimationEnd"),
		sn(Vu, "onAnimationIteration"),
		sn(Bu, "onAnimationStart"),
		sn("dblclick", "onDoubleClick"),
		sn("focusin", "onFocus"),
		sn("focusout", "onBlur"),
		sn(Zu, "onTransitionEnd"),
		m("onMouseEnter", ["mouseout", "mouseover"]),
		m("onMouseLeave", ["mouseout", "mouseover"]),
		m("onPointerEnter", ["pointerout", "pointerover"]),
		m("onPointerLeave", ["pointerout", "pointerover"]),
		d(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		d(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		d(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		d(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		d(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		);
	var Hr =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Kp = new Set(
			"cancel close invalid load scroll toggle".split(" ").concat(Hr),
		);
	function Qu(e, t, n) {
		var i = e.type || "unknown-event";
		(e.currentTarget = n), Hf(i, t, void 0, e), (e.currentTarget = null);
	}
	function Ku(e, t) {
		t = (t & 4) !== 0;
		for (var n = 0; n < e.length; n++) {
			var i = e[n],
				a = i.event;
			i = i.listeners;
			e: {
				var s = void 0;
				if (t)
					for (var p = i.length - 1; 0 <= p; p--) {
						var y = i[p],
							_ = y.instance,
							N = y.currentTarget;
						if (((y = y.listener), _ !== s && a.isPropagationStopped()))
							break e;
						Qu(a, y, N), (s = _);
					}
				else
					for (p = 0; p < i.length; p++) {
						if (
							((y = i[p]),
							(_ = y.instance),
							(N = y.currentTarget),
							(y = y.listener),
							_ !== s && a.isPropagationStopped())
						)
							break e;
						Qu(a, y, N), (s = _);
					}
			}
		}
		if (Di) throw ((e = To), (Di = !1), (To = null), e);
	}
	function Ce(e, t) {
		var n = t[ia];
		n === void 0 && (n = t[ia] = new Set());
		var i = e + "__bubble";
		n.has(i) || (Yu(t, e, 2, !1), n.add(i));
	}
	function qo(e, t, n) {
		var i = 0;
		t && (i |= 4), Yu(n, e, i, t);
	}
	var el = "_reactListening" + Math.random().toString(36).slice(2);
	function Qr(e) {
		if (!e[el]) {
			(e[el] = !0),
				c.forEach(function (n) {
					n !== "selectionchange" && (Kp.has(n) || qo(n, !1, e), qo(n, !0, e));
				});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[el] || ((t[el] = !0), qo("selectionchange", !1, t));
		}
	}
	function Yu(e, t, n, i) {
		switch (yu(t)) {
			case 1:
				var a = ap;
				break;
			case 4:
				a = sp;
				break;
			default:
				a = zo;
		}
		(n = a.bind(null, t, n, e)),
			(a = void 0),
			!No ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(a = !0),
			i
				? a !== void 0
					? e.addEventListener(t, n, { capture: !0, passive: a })
					: e.addEventListener(t, n, !0)
				: a !== void 0
					? e.addEventListener(t, n, { passive: a })
					: e.addEventListener(t, n, !1);
	}
	function bo(e, t, n, i, a) {
		var s = i;
		if (!(t & 1) && !(t & 2) && i !== null)
			e: for (;;) {
				if (i === null) return;
				var p = i.tag;
				if (p === 3 || p === 4) {
					var y = i.stateNode.containerInfo;
					if (y === a || (y.nodeType === 8 && y.parentNode === a)) break;
					if (p === 4)
						for (p = i.return; p !== null; ) {
							var _ = p.tag;
							if (
								(_ === 3 || _ === 4) &&
								((_ = p.stateNode.containerInfo),
								_ === a || (_.nodeType === 8 && _.parentNode === a))
							)
								return;
							p = p.return;
						}
					for (; y !== null; ) {
						if (((p = Pn(y)), p === null)) return;
						if (((_ = p.tag), _ === 5 || _ === 6)) {
							i = s = p;
							continue e;
						}
						y = y.parentNode;
					}
				}
				i = i.return;
			}
		Js(function () {
			var N = s,
				I = So(n),
				z = [];
			e: {
				var O = Wu.get(e);
				if (O !== void 0) {
					var Z = Do,
						Y = e;
					switch (e) {
						case "keypress":
							if (Yi(n) === 0) break e;
						case "keydown":
						case "keyup":
							Z = Sp;
							break;
						case "focusin":
							(Y = "focus"), (Z = Uo);
							break;
						case "focusout":
							(Y = "blur"), (Z = Uo);
							break;
						case "beforeblur":
						case "afterblur":
							Z = Uo;
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
							Z = wu;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							Z = dp;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							Z = Np;
							break;
						case Uu:
						case Vu:
						case Bu:
							Z = hp;
							break;
						case Zu:
							Z = Rp;
							break;
						case "scroll":
							Z = up;
							break;
						case "wheel":
							Z = jp;
							break;
						case "copy":
						case "cut":
						case "paste":
							Z = vp;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							Z = ku;
					}
					var G = (t & 4) !== 0,
						$e = !G && e === "scroll",
						E = G ? (O !== null ? O + "Capture" : null) : O;
					G = [];
					for (var k = N, C; k !== null; ) {
						C = k;
						var F = C.stateNode;
						if (
							(C.tag === 5 &&
								F !== null &&
								((C = F),
								E !== null &&
									((F = Rr(k, E)), F != null && G.push(Kr(k, F, C)))),
							$e)
						)
							break;
						k = k.return;
					}
					0 < G.length &&
						((O = new Z(O, Y, null, n, I)), z.push({ event: O, listeners: G }));
				}
			}
			if (!(t & 7)) {
				e: {
					if (
						((O = e === "mouseover" || e === "pointerover"),
						(Z = e === "mouseout" || e === "pointerout"),
						O &&
							n !== ko &&
							(Y = n.relatedTarget || n.fromElement) &&
							(Pn(Y) || Y[Wt]))
					)
						break e;
					if (
						(Z || O) &&
						((O =
							I.window === I
								? I
								: (O = I.ownerDocument)
									? O.defaultView || O.parentWindow
									: window),
						Z
							? ((Y = n.relatedTarget || n.toElement),
								(Z = N),
								(Y = Y ? Pn(Y) : null),
								Y !== null &&
									(($e = Rn(Y)), Y !== $e || (Y.tag !== 5 && Y.tag !== 6)) &&
									(Y = null))
							: ((Z = null), (Y = N)),
						Z !== Y)
					) {
						if (
							((G = wu),
							(F = "onMouseLeave"),
							(E = "onMouseEnter"),
							(k = "mouse"),
							(e === "pointerout" || e === "pointerover") &&
								((G = ku),
								(F = "onPointerLeave"),
								(E = "onPointerEnter"),
								(k = "pointer")),
							($e = Z == null ? O : tr(Z)),
							(C = Y == null ? O : tr(Y)),
							(O = new G(F, k + "leave", Z, n, I)),
							(O.target = $e),
							(O.relatedTarget = C),
							(F = null),
							Pn(I) === N &&
								((G = new G(E, k + "enter", Y, n, I)),
								(G.target = C),
								(G.relatedTarget = $e),
								(F = G)),
							($e = F),
							Z && Y)
						)
							t: {
								for (G = Z, E = Y, k = 0, C = G; C; C = Jn(C)) k++;
								for (C = 0, F = E; F; F = Jn(F)) C++;
								for (; 0 < k - C; ) (G = Jn(G)), k--;
								for (; 0 < C - k; ) (E = Jn(E)), C--;
								for (; k--; ) {
									if (G === E || (E !== null && G === E.alternate)) break t;
									(G = Jn(G)), (E = Jn(E));
								}
								G = null;
							}
						else G = null;
						Z !== null && Gu(z, O, Z, G, !1),
							Y !== null && $e !== null && Gu(z, $e, Y, G, !0);
					}
				}
				e: {
					if (
						((O = N ? tr(N) : window),
						(Z = O.nodeName && O.nodeName.toLowerCase()),
						Z === "select" || (Z === "input" && O.type === "file"))
					)
						var X = Dp;
					else if (Ru(O))
						if (ju) X = Vp;
						else {
							X = Fp;
							var J = $p;
						}
					else
						(Z = O.nodeName) &&
							Z.toLowerCase() === "input" &&
							(O.type === "checkbox" || O.type === "radio") &&
							(X = Up);
					if (X && (X = X(e, N))) {
						Pu(z, X, n, I);
						break e;
					}
					J && J(e, O, N),
						e === "focusout" &&
							(J = O._wrapperState) &&
							J.controlled &&
							O.type === "number" &&
							yo(O, "number", O.value);
				}
				switch (((J = N ? tr(N) : window), e)) {
					case "focusin":
						(Ru(J) || J.contentEditable === "true") &&
							((qn = J), (Qo = N), (Wr = null));
						break;
					case "focusout":
						Wr = Qo = qn = null;
						break;
					case "mousedown":
						Ko = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(Ko = !1), $u(z, n, I);
						break;
					case "selectionchange":
						if (Wp) break;
					case "keydown":
					case "keyup":
						$u(z, n, I);
				}
				var ee;
				if (Bo)
					e: {
						switch (e) {
							case "compositionstart":
								var le = "onCompositionStart";
								break e;
							case "compositionend":
								le = "onCompositionEnd";
								break e;
							case "compositionupdate":
								le = "onCompositionUpdate";
								break e;
						}
						le = void 0;
					}
				else
					Xn
						? Nu(e, n) && (le = "onCompositionEnd")
						: e === "keydown" &&
							n.keyCode === 229 &&
							(le = "onCompositionStart");
				le &&
					(Su &&
						n.locale !== "ko" &&
						(Xn || le !== "onCompositionStart"
							? le === "onCompositionEnd" && Xn && (ee = gu())
							: ((an = I),
								(Ao = "value" in an ? an.value : an.textContent),
								(Xn = !0))),
					(J = tl(N, le)),
					0 < J.length &&
						((le = new _u(le, e, null, n, I)),
						z.push({ event: le, listeners: J }),
						ee
							? (le.data = ee)
							: ((ee = Tu(n)), ee !== null && (le.data = ee)))),
					(ee = Lp ? Ip(e, n) : zp(e, n)) &&
						((N = tl(N, "onBeforeInput")),
						0 < N.length &&
							((I = new _u("onBeforeInput", "beforeinput", null, n, I)),
							z.push({ event: I, listeners: N }),
							(I.data = ee)));
			}
			Ku(z, t);
		});
	}
	function Kr(e, t, n) {
		return { instance: e, listener: t, currentTarget: n };
	}
	function tl(e, t) {
		for (var n = t + "Capture", i = []; e !== null; ) {
			var a = e,
				s = a.stateNode;
			a.tag === 5 &&
				s !== null &&
				((a = s),
				(s = Rr(e, n)),
				s != null && i.unshift(Kr(e, s, a)),
				(s = Rr(e, t)),
				s != null && i.push(Kr(e, s, a))),
				(e = e.return);
		}
		return i;
	}
	function Jn(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function Gu(e, t, n, i, a) {
		for (var s = t._reactName, p = []; n !== null && n !== i; ) {
			var y = n,
				_ = y.alternate,
				N = y.stateNode;
			if (_ !== null && _ === i) break;
			y.tag === 5 &&
				N !== null &&
				((y = N),
				a
					? ((_ = Rr(n, s)), _ != null && p.unshift(Kr(n, _, y)))
					: a || ((_ = Rr(n, s)), _ != null && p.push(Kr(n, _, y)))),
				(n = n.return);
		}
		p.length !== 0 && e.push({ event: t, listeners: p });
	}
	var Yp = /\r\n?/g,
		Gp = /\u0000|\uFFFD/g;
	function Xu(e) {
		return (typeof e == "string" ? e : "" + e)
			.replace(
				Yp,
				`
`,
			)
			.replace(Gp, "");
	}
	function nl(e, t, n) {
		if (((t = Xu(t)), Xu(e) !== t && n)) throw Error(o(425));
	}
	function rl() {}
	var Jo = null,
		ea = null;
	function ta(e, t) {
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
	var na = typeof setTimeout == "function" ? setTimeout : void 0,
		Xp = typeof clearTimeout == "function" ? clearTimeout : void 0,
		qu = typeof Promise == "function" ? Promise : void 0,
		qp =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof qu < "u"
					? function (e) {
							return qu.resolve(null).then(e).catch(bp);
						}
					: na;
	function bp(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function ra(e, t) {
		var n = t,
			i = 0;
		do {
			var a = n.nextSibling;
			if ((e.removeChild(n), a && a.nodeType === 8))
				if (((n = a.data), n === "/$")) {
					if (i === 0) {
						e.removeChild(a), Dr(t);
						return;
					}
					i--;
				} else (n !== "$" && n !== "$?" && n !== "$!") || i++;
			n = a;
		} while (n);
		Dr(t);
	}
	function un(e) {
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
	function bu(e) {
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
	var er = Math.random().toString(36).slice(2),
		Mt = "__reactFiber$" + er,
		Yr = "__reactProps$" + er,
		Wt = "__reactContainer$" + er,
		ia = "__reactEvents$" + er,
		Jp = "__reactListeners$" + er,
		eh = "__reactHandles$" + er;
	function Pn(e) {
		var t = e[Mt];
		if (t) return t;
		for (var n = e.parentNode; n; ) {
			if ((t = n[Wt] || n[Mt])) {
				if (
					((n = t.alternate),
					t.child !== null || (n !== null && n.child !== null))
				)
					for (e = bu(e); e !== null; ) {
						if ((n = e[Mt])) return n;
						e = bu(e);
					}
				return t;
			}
			(e = n), (n = e.parentNode);
		}
		return null;
	}
	function Gr(e) {
		return (
			(e = e[Mt] || e[Wt]),
			!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
				? null
				: e
		);
	}
	function tr(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(o(33));
	}
	function il(e) {
		return e[Yr] || null;
	}
	var la = [],
		nr = -1;
	function cn(e) {
		return { current: e };
	}
	function Ne(e) {
		0 > nr || ((e.current = la[nr]), (la[nr] = null), nr--);
	}
	function Ee(e, t) {
		nr++, (la[nr] = e.current), (e.current = t);
	}
	var dn = {},
		Xe = cn(dn),
		lt = cn(!1),
		jn = dn;
	function rr(e, t) {
		var n = e.type.contextTypes;
		if (!n) return dn;
		var i = e.stateNode;
		if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
			return i.__reactInternalMemoizedMaskedChildContext;
		var a = {},
			s;
		for (s in n) a[s] = t[s];
		return (
			i &&
				((e = e.stateNode),
				(e.__reactInternalMemoizedUnmaskedChildContext = t),
				(e.__reactInternalMemoizedMaskedChildContext = a)),
			a
		);
	}
	function ot(e) {
		return (e = e.childContextTypes), e != null;
	}
	function ll() {
		Ne(lt), Ne(Xe);
	}
	function Ju(e, t, n) {
		if (Xe.current !== dn) throw Error(o(168));
		Ee(Xe, t), Ee(lt, n);
	}
	function ec(e, t, n) {
		var i = e.stateNode;
		if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
			return n;
		i = i.getChildContext();
		for (var a in i) if (!(a in t)) throw Error(o(108, Se(e) || "Unknown", a));
		return K({}, n, i);
	}
	function ol(e) {
		return (
			(e =
				((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
				dn),
			(jn = Xe.current),
			Ee(Xe, e),
			Ee(lt, lt.current),
			!0
		);
	}
	function tc(e, t, n) {
		var i = e.stateNode;
		if (!i) throw Error(o(169));
		n
			? ((e = ec(e, t, jn)),
				(i.__reactInternalMemoizedMergedChildContext = e),
				Ne(lt),
				Ne(Xe),
				Ee(Xe, e))
			: Ne(lt),
			Ee(lt, n);
	}
	var Ht = null,
		al = !1,
		oa = !1;
	function nc(e) {
		Ht === null ? (Ht = [e]) : Ht.push(e);
	}
	function th(e) {
		(al = !0), nc(e);
	}
	function fn() {
		if (!oa && Ht !== null) {
			oa = !0;
			var e = 0,
				t = ke;
			try {
				var n = Ht;
				for (ke = 1; e < n.length; e++) {
					var i = n[e];
					do i = i(!0);
					while (i !== null);
				}
				(Ht = null), (al = !1);
			} catch (a) {
				throw (Ht !== null && (Ht = Ht.slice(e + 1)), iu(Ro, fn), a);
			} finally {
				(ke = t), (oa = !1);
			}
		}
		return null;
	}
	var ir = [],
		lr = 0,
		sl = null,
		ul = 0,
		yt = [],
		gt = 0,
		On = null,
		Qt = 1,
		Kt = "";
	function Ln(e, t) {
		(ir[lr++] = ul), (ir[lr++] = sl), (sl = e), (ul = t);
	}
	function rc(e, t, n) {
		(yt[gt++] = Qt), (yt[gt++] = Kt), (yt[gt++] = On), (On = e);
		var i = Qt;
		e = Kt;
		var a = 32 - St(i) - 1;
		(i &= ~(1 << a)), (n += 1);
		var s = 32 - St(t) + a;
		if (30 < s) {
			var p = a - (a % 5);
			(s = (i & ((1 << p) - 1)).toString(32)),
				(i >>= p),
				(a -= p),
				(Qt = (1 << (32 - St(t) + a)) | (n << a) | i),
				(Kt = s + e);
		} else (Qt = (1 << s) | (n << a) | i), (Kt = e);
	}
	function aa(e) {
		e.return !== null && (Ln(e, 1), rc(e, 1, 0));
	}
	function sa(e) {
		for (; e === sl; )
			(sl = ir[--lr]), (ir[lr] = null), (ul = ir[--lr]), (ir[lr] = null);
		for (; e === On; )
			(On = yt[--gt]),
				(yt[gt] = null),
				(Kt = yt[--gt]),
				(yt[gt] = null),
				(Qt = yt[--gt]),
				(yt[gt] = null);
	}
	var pt = null,
		ht = null,
		Pe = !1,
		Ct = null;
	function ic(e, t) {
		var n = kt(5, null, null, 0);
		(n.elementType = "DELETED"),
			(n.stateNode = t),
			(n.return = e),
			(t = e.deletions),
			t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
	}
	function lc(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return (
					(t =
						t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
							? null
							: t),
					t !== null
						? ((e.stateNode = t), (pt = e), (ht = un(t.firstChild)), !0)
						: !1
				);
			case 6:
				return (
					(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
					t !== null ? ((e.stateNode = t), (pt = e), (ht = null), !0) : !1
				);
			case 13:
				return (
					(t = t.nodeType !== 8 ? null : t),
					t !== null
						? ((n = On !== null ? { id: Qt, overflow: Kt } : null),
							(e.memoizedState = {
								dehydrated: t,
								treeContext: n,
								retryLane: 1073741824,
							}),
							(n = kt(18, null, null, 0)),
							(n.stateNode = t),
							(n.return = e),
							(e.child = n),
							(pt = e),
							(ht = null),
							!0)
						: !1
				);
			default:
				return !1;
		}
	}
	function ua(e) {
		return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
	}
	function ca(e) {
		if (Pe) {
			var t = ht;
			if (t) {
				var n = t;
				if (!lc(e, t)) {
					if (ua(e)) throw Error(o(418));
					t = un(n.nextSibling);
					var i = pt;
					t && lc(e, t)
						? ic(i, n)
						: ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (pt = e));
				}
			} else {
				if (ua(e)) throw Error(o(418));
				(e.flags = (e.flags & -4097) | 2), (Pe = !1), (pt = e);
			}
		}
	}
	function oc(e) {
		for (
			e = e.return;
			e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

		)
			e = e.return;
		pt = e;
	}
	function cl(e) {
		if (e !== pt) return !1;
		if (!Pe) return oc(e), (Pe = !0), !1;
		var t;
		if (
			((t = e.tag !== 3) &&
				!(t = e.tag !== 5) &&
				((t = e.type),
				(t = t !== "head" && t !== "body" && !ta(e.type, e.memoizedProps))),
			t && (t = ht))
		) {
			if (ua(e)) throw (ac(), Error(o(418)));
			for (; t; ) ic(e, t), (t = un(t.nextSibling));
		}
		if ((oc(e), e.tag === 13)) {
			if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
				throw Error(o(317));
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === "/$") {
							if (t === 0) {
								ht = un(e.nextSibling);
								break e;
							}
							t--;
						} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
					}
					e = e.nextSibling;
				}
				ht = null;
			}
		} else ht = pt ? un(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ac() {
		for (var e = ht; e; ) e = un(e.nextSibling);
	}
	function or() {
		(ht = pt = null), (Pe = !1);
	}
	function da(e) {
		Ct === null ? (Ct = [e]) : Ct.push(e);
	}
	var nh = Q.ReactCurrentBatchConfig;
	function Xr(e, t, n) {
		if (
			((e = n.ref),
			e !== null && typeof e != "function" && typeof e != "object")
		) {
			if (n._owner) {
				if (((n = n._owner), n)) {
					if (n.tag !== 1) throw Error(o(309));
					var i = n.stateNode;
				}
				if (!i) throw Error(o(147, e));
				var a = i,
					s = "" + e;
				return t !== null &&
					t.ref !== null &&
					typeof t.ref == "function" &&
					t.ref._stringRef === s
					? t.ref
					: ((t = function (p) {
							var y = a.refs;
							p === null ? delete y[s] : (y[s] = p);
						}),
						(t._stringRef = s),
						t);
			}
			if (typeof e != "string") throw Error(o(284));
			if (!n._owner) throw Error(o(290, e));
		}
		return e;
	}
	function dl(e, t) {
		throw (
			((e = Object.prototype.toString.call(t)),
			Error(
				o(
					31,
					e === "[object Object]"
						? "object with keys {" + Object.keys(t).join(", ") + "}"
						: e,
				),
			))
		);
	}
	function sc(e) {
		var t = e._init;
		return t(e._payload);
	}
	function uc(e) {
		function t(E, k) {
			if (e) {
				var C = E.deletions;
				C === null ? ((E.deletions = [k]), (E.flags |= 16)) : C.push(k);
			}
		}
		function n(E, k) {
			if (!e) return null;
			for (; k !== null; ) t(E, k), (k = k.sibling);
			return null;
		}
		function i(E, k) {
			for (E = new Map(); k !== null; )
				k.key !== null ? E.set(k.key, k) : E.set(k.index, k), (k = k.sibling);
			return E;
		}
		function a(E, k) {
			return (E = wn(E, k)), (E.index = 0), (E.sibling = null), E;
		}
		function s(E, k, C) {
			return (
				(E.index = C),
				e
					? ((C = E.alternate),
						C !== null
							? ((C = C.index), C < k ? ((E.flags |= 2), k) : C)
							: ((E.flags |= 2), k))
					: ((E.flags |= 1048576), k)
			);
		}
		function p(E) {
			return e && E.alternate === null && (E.flags |= 2), E;
		}
		function y(E, k, C, F) {
			return k === null || k.tag !== 6
				? ((k = ns(C, E.mode, F)), (k.return = E), k)
				: ((k = a(k, C)), (k.return = E), k);
		}
		function _(E, k, C, F) {
			var X = C.type;
			return X === oe
				? I(E, k, C.props.children, F, C.key)
				: k !== null &&
					  (k.elementType === X ||
							(typeof X == "object" &&
								X !== null &&
								X.$$typeof === Ve &&
								sc(X) === k.type))
					? ((F = a(k, C.props)), (F.ref = Xr(E, k, C)), (F.return = E), F)
					: ((F = Ml(C.type, C.key, C.props, null, E.mode, F)),
						(F.ref = Xr(E, k, C)),
						(F.return = E),
						F);
		}
		function N(E, k, C, F) {
			return k === null ||
				k.tag !== 4 ||
				k.stateNode.containerInfo !== C.containerInfo ||
				k.stateNode.implementation !== C.implementation
				? ((k = rs(C, E.mode, F)), (k.return = E), k)
				: ((k = a(k, C.children || [])), (k.return = E), k);
		}
		function I(E, k, C, F, X) {
			return k === null || k.tag !== 7
				? ((k = Un(C, E.mode, F, X)), (k.return = E), k)
				: ((k = a(k, C)), (k.return = E), k);
		}
		function z(E, k, C) {
			if ((typeof k == "string" && k !== "") || typeof k == "number")
				return (k = ns("" + k, E.mode, C)), (k.return = E), k;
			if (typeof k == "object" && k !== null) {
				switch (k.$$typeof) {
					case b:
						return (
							(C = Ml(k.type, k.key, k.props, null, E.mode, C)),
							(C.ref = Xr(E, null, k)),
							(C.return = E),
							C
						);
					case fe:
						return (k = rs(k, E.mode, C)), (k.return = E), k;
					case Ve:
						var F = k._init;
						return z(E, F(k._payload), C);
				}
				if (Cr(k) || te(k))
					return (k = Un(k, E.mode, C, null)), (k.return = E), k;
				dl(E, k);
			}
			return null;
		}
		function O(E, k, C, F) {
			var X = k !== null ? k.key : null;
			if ((typeof C == "string" && C !== "") || typeof C == "number")
				return X !== null ? null : y(E, k, "" + C, F);
			if (typeof C == "object" && C !== null) {
				switch (C.$$typeof) {
					case b:
						return C.key === X ? _(E, k, C, F) : null;
					case fe:
						return C.key === X ? N(E, k, C, F) : null;
					case Ve:
						return (X = C._init), O(E, k, X(C._payload), F);
				}
				if (Cr(C) || te(C)) return X !== null ? null : I(E, k, C, F, null);
				dl(E, C);
			}
			return null;
		}
		function Z(E, k, C, F, X) {
			if ((typeof F == "string" && F !== "") || typeof F == "number")
				return (E = E.get(C) || null), y(k, E, "" + F, X);
			if (typeof F == "object" && F !== null) {
				switch (F.$$typeof) {
					case b:
						return (
							(E = E.get(F.key === null ? C : F.key) || null), _(k, E, F, X)
						);
					case fe:
						return (
							(E = E.get(F.key === null ? C : F.key) || null), N(k, E, F, X)
						);
					case Ve:
						var J = F._init;
						return Z(E, k, C, J(F._payload), X);
				}
				if (Cr(F) || te(F)) return (E = E.get(C) || null), I(k, E, F, X, null);
				dl(k, F);
			}
			return null;
		}
		function Y(E, k, C, F) {
			for (
				var X = null, J = null, ee = k, le = (k = 0), Ke = null;
				ee !== null && le < C.length;
				le++
			) {
				ee.index > le ? ((Ke = ee), (ee = null)) : (Ke = ee.sibling);
				var xe = O(E, ee, C[le], F);
				if (xe === null) {
					ee === null && (ee = Ke);
					break;
				}
				e && ee && xe.alternate === null && t(E, ee),
					(k = s(xe, k, le)),
					J === null ? (X = xe) : (J.sibling = xe),
					(J = xe),
					(ee = Ke);
			}
			if (le === C.length) return n(E, ee), Pe && Ln(E, le), X;
			if (ee === null) {
				for (; le < C.length; le++)
					(ee = z(E, C[le], F)),
						ee !== null &&
							((k = s(ee, k, le)),
							J === null ? (X = ee) : (J.sibling = ee),
							(J = ee));
				return Pe && Ln(E, le), X;
			}
			for (ee = i(E, ee); le < C.length; le++)
				(Ke = Z(ee, E, le, C[le], F)),
					Ke !== null &&
						(e &&
							Ke.alternate !== null &&
							ee.delete(Ke.key === null ? le : Ke.key),
						(k = s(Ke, k, le)),
						J === null ? (X = Ke) : (J.sibling = Ke),
						(J = Ke));
			return (
				e &&
					ee.forEach(function (_n) {
						return t(E, _n);
					}),
				Pe && Ln(E, le),
				X
			);
		}
		function G(E, k, C, F) {
			var X = te(C);
			if (typeof X != "function") throw Error(o(150));
			if (((C = X.call(C)), C == null)) throw Error(o(151));
			for (
				var J = (X = null), ee = k, le = (k = 0), Ke = null, xe = C.next();
				ee !== null && !xe.done;
				le++, xe = C.next()
			) {
				ee.index > le ? ((Ke = ee), (ee = null)) : (Ke = ee.sibling);
				var _n = O(E, ee, xe.value, F);
				if (_n === null) {
					ee === null && (ee = Ke);
					break;
				}
				e && ee && _n.alternate === null && t(E, ee),
					(k = s(_n, k, le)),
					J === null ? (X = _n) : (J.sibling = _n),
					(J = _n),
					(ee = Ke);
			}
			if (xe.done) return n(E, ee), Pe && Ln(E, le), X;
			if (ee === null) {
				for (; !xe.done; le++, xe = C.next())
					(xe = z(E, xe.value, F)),
						xe !== null &&
							((k = s(xe, k, le)),
							J === null ? (X = xe) : (J.sibling = xe),
							(J = xe));
				return Pe && Ln(E, le), X;
			}
			for (ee = i(E, ee); !xe.done; le++, xe = C.next())
				(xe = Z(ee, E, le, xe.value, F)),
					xe !== null &&
						(e &&
							xe.alternate !== null &&
							ee.delete(xe.key === null ? le : xe.key),
						(k = s(xe, k, le)),
						J === null ? (X = xe) : (J.sibling = xe),
						(J = xe));
			return (
				e &&
					ee.forEach(function (Mh) {
						return t(E, Mh);
					}),
				Pe && Ln(E, le),
				X
			);
		}
		function $e(E, k, C, F) {
			if (
				(typeof C == "object" &&
					C !== null &&
					C.type === oe &&
					C.key === null &&
					(C = C.props.children),
				typeof C == "object" && C !== null)
			) {
				switch (C.$$typeof) {
					case b:
						e: {
							for (var X = C.key, J = k; J !== null; ) {
								if (J.key === X) {
									if (((X = C.type), X === oe)) {
										if (J.tag === 7) {
											n(E, J.sibling),
												(k = a(J, C.props.children)),
												(k.return = E),
												(E = k);
											break e;
										}
									} else if (
										J.elementType === X ||
										(typeof X == "object" &&
											X !== null &&
											X.$$typeof === Ve &&
											sc(X) === J.type)
									) {
										n(E, J.sibling),
											(k = a(J, C.props)),
											(k.ref = Xr(E, J, C)),
											(k.return = E),
											(E = k);
										break e;
									}
									n(E, J);
									break;
								} else t(E, J);
								J = J.sibling;
							}
							C.type === oe
								? ((k = Un(C.props.children, E.mode, F, C.key)),
									(k.return = E),
									(E = k))
								: ((F = Ml(C.type, C.key, C.props, null, E.mode, F)),
									(F.ref = Xr(E, k, C)),
									(F.return = E),
									(E = F));
						}
						return p(E);
					case fe:
						e: {
							for (J = C.key; k !== null; ) {
								if (k.key === J)
									if (
										k.tag === 4 &&
										k.stateNode.containerInfo === C.containerInfo &&
										k.stateNode.implementation === C.implementation
									) {
										n(E, k.sibling),
											(k = a(k, C.children || [])),
											(k.return = E),
											(E = k);
										break e;
									} else {
										n(E, k);
										break;
									}
								else t(E, k);
								k = k.sibling;
							}
							(k = rs(C, E.mode, F)), (k.return = E), (E = k);
						}
						return p(E);
					case Ve:
						return (J = C._init), $e(E, k, J(C._payload), F);
				}
				if (Cr(C)) return Y(E, k, C, F);
				if (te(C)) return G(E, k, C, F);
				dl(E, C);
			}
			return (typeof C == "string" && C !== "") || typeof C == "number"
				? ((C = "" + C),
					k !== null && k.tag === 6
						? (n(E, k.sibling), (k = a(k, C)), (k.return = E), (E = k))
						: (n(E, k), (k = ns(C, E.mode, F)), (k.return = E), (E = k)),
					p(E))
				: n(E, k);
		}
		return $e;
	}
	var ar = uc(!0),
		cc = uc(!1),
		fl = cn(null),
		pl = null,
		sr = null,
		fa = null;
	function pa() {
		fa = sr = pl = null;
	}
	function ha(e) {
		var t = fl.current;
		Ne(fl), (e._currentValue = t);
	}
	function ma(e, t, n) {
		for (; e !== null; ) {
			var i = e.alternate;
			if (
				((e.childLanes & t) !== t
					? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
					: i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
				e === n)
			)
				break;
			e = e.return;
		}
	}
	function ur(e, t) {
		(pl = e),
			(fa = sr = null),
			(e = e.dependencies),
			e !== null &&
				e.firstContext !== null &&
				(e.lanes & t && (at = !0), (e.firstContext = null));
	}
	function xt(e) {
		var t = e._currentValue;
		if (fa !== e)
			if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
				if (pl === null) throw Error(o(308));
				(sr = e), (pl.dependencies = { lanes: 0, firstContext: e });
			} else sr = sr.next = e;
		return t;
	}
	var In = null;
	function va(e) {
		In === null ? (In = [e]) : In.push(e);
	}
	function dc(e, t, n, i) {
		var a = t.interleaved;
		return (
			a === null ? ((n.next = n), va(t)) : ((n.next = a.next), (a.next = n)),
			(t.interleaved = n),
			Yt(e, i)
		);
	}
	function Yt(e, t) {
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
	var pn = !1;
	function ya(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, interleaved: null, lanes: 0 },
			effects: null,
		};
	}
	function fc(e, t) {
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
	function Gt(e, t) {
		return {
			eventTime: e,
			lane: t,
			tag: 0,
			payload: null,
			callback: null,
			next: null,
		};
	}
	function hn(e, t, n) {
		var i = e.updateQueue;
		if (i === null) return null;
		if (((i = i.shared), ve & 2)) {
			var a = i.pending;
			return (
				a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
				(i.pending = t),
				Yt(e, n)
			);
		}
		return (
			(a = i.interleaved),
			a === null ? ((t.next = t), va(i)) : ((t.next = a.next), (a.next = t)),
			(i.interleaved = t),
			Yt(e, n)
		);
	}
	function hl(e, t, n) {
		if (
			((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
		) {
			var i = t.lanes;
			(i &= e.pendingLanes), (n |= i), (t.lanes = n), Oo(e, n);
		}
	}
	function pc(e, t) {
		var n = e.updateQueue,
			i = e.alternate;
		if (i !== null && ((i = i.updateQueue), n === i)) {
			var a = null,
				s = null;
			if (((n = n.firstBaseUpdate), n !== null)) {
				do {
					var p = {
						eventTime: n.eventTime,
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: n.callback,
						next: null,
					};
					s === null ? (a = s = p) : (s = s.next = p), (n = n.next);
				} while (n !== null);
				s === null ? (a = s = t) : (s = s.next = t);
			} else a = s = t;
			(n = {
				baseState: i.baseState,
				firstBaseUpdate: a,
				lastBaseUpdate: s,
				shared: i.shared,
				effects: i.effects,
			}),
				(e.updateQueue = n);
			return;
		}
		(e = n.lastBaseUpdate),
			e === null ? (n.firstBaseUpdate = t) : (e.next = t),
			(n.lastBaseUpdate = t);
	}
	function ml(e, t, n, i) {
		var a = e.updateQueue;
		pn = !1;
		var s = a.firstBaseUpdate,
			p = a.lastBaseUpdate,
			y = a.shared.pending;
		if (y !== null) {
			a.shared.pending = null;
			var _ = y,
				N = _.next;
			(_.next = null), p === null ? (s = N) : (p.next = N), (p = _);
			var I = e.alternate;
			I !== null &&
				((I = I.updateQueue),
				(y = I.lastBaseUpdate),
				y !== p &&
					(y === null ? (I.firstBaseUpdate = N) : (y.next = N),
					(I.lastBaseUpdate = _)));
		}
		if (s !== null) {
			var z = a.baseState;
			(p = 0), (I = N = _ = null), (y = s);
			do {
				var O = y.lane,
					Z = y.eventTime;
				if ((i & O) === O) {
					I !== null &&
						(I = I.next =
							{
								eventTime: Z,
								lane: 0,
								tag: y.tag,
								payload: y.payload,
								callback: y.callback,
								next: null,
							});
					e: {
						var Y = e,
							G = y;
						switch (((O = t), (Z = n), G.tag)) {
							case 1:
								if (((Y = G.payload), typeof Y == "function")) {
									z = Y.call(Z, z, O);
									break e;
								}
								z = Y;
								break e;
							case 3:
								Y.flags = (Y.flags & -65537) | 128;
							case 0:
								if (
									((Y = G.payload),
									(O = typeof Y == "function" ? Y.call(Z, z, O) : Y),
									O == null)
								)
									break e;
								z = K({}, z, O);
								break e;
							case 2:
								pn = !0;
						}
					}
					y.callback !== null &&
						y.lane !== 0 &&
						((e.flags |= 64),
						(O = a.effects),
						O === null ? (a.effects = [y]) : O.push(y));
				} else
					(Z = {
						eventTime: Z,
						lane: O,
						tag: y.tag,
						payload: y.payload,
						callback: y.callback,
						next: null,
					}),
						I === null ? ((N = I = Z), (_ = z)) : (I = I.next = Z),
						(p |= O);
				if (((y = y.next), y === null)) {
					if (((y = a.shared.pending), y === null)) break;
					(O = y),
						(y = O.next),
						(O.next = null),
						(a.lastBaseUpdate = O),
						(a.shared.pending = null);
				}
			} while (!0);
			if (
				(I === null && (_ = z),
				(a.baseState = _),
				(a.firstBaseUpdate = N),
				(a.lastBaseUpdate = I),
				(t = a.shared.interleaved),
				t !== null)
			) {
				a = t;
				do (p |= a.lane), (a = a.next);
				while (a !== t);
			} else s === null && (a.shared.lanes = 0);
			(An |= p), (e.lanes = p), (e.memoizedState = z);
		}
	}
	function hc(e, t, n) {
		if (((e = t.effects), (t.effects = null), e !== null))
			for (t = 0; t < e.length; t++) {
				var i = e[t],
					a = i.callback;
				if (a !== null) {
					if (((i.callback = null), (i = n), typeof a != "function"))
						throw Error(o(191, a));
					a.call(i);
				}
			}
	}
	var qr = {},
		At = cn(qr),
		br = cn(qr),
		Jr = cn(qr);
	function zn(e) {
		if (e === qr) throw Error(o(174));
		return e;
	}
	function ga(e, t) {
		switch ((Ee(Jr, t), Ee(br, e), Ee(At, qr), (e = t.nodeType), e)) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : xo(null, "");
				break;
			default:
				(e = e === 8 ? t.parentNode : t),
					(t = e.namespaceURI || null),
					(e = e.tagName),
					(t = xo(t, e));
		}
		Ne(At), Ee(At, t);
	}
	function cr() {
		Ne(At), Ne(br), Ne(Jr);
	}
	function mc(e) {
		zn(Jr.current);
		var t = zn(At.current),
			n = xo(t, e.type);
		t !== n && (Ee(br, e), Ee(At, n));
	}
	function xa(e) {
		br.current === e && (Ne(At), Ne(br));
	}
	var Oe = cn(0);
	function vl(e) {
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
	var wa = [];
	function _a() {
		for (var e = 0; e < wa.length; e++)
			wa[e]._workInProgressVersionPrimary = null;
		wa.length = 0;
	}
	var yl = Q.ReactCurrentDispatcher,
		ka = Q.ReactCurrentBatchConfig,
		Mn = 0,
		Le = null,
		Ze = null,
		He = null,
		gl = !1,
		ei = !1,
		ti = 0,
		rh = 0;
	function qe() {
		throw Error(o(321));
	}
	function Sa(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++)
			if (!Et(e[n], t[n])) return !1;
		return !0;
	}
	function Ea(e, t, n, i, a, s) {
		if (
			((Mn = s),
			(Le = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(yl.current = e === null || e.memoizedState === null ? ah : sh),
			(e = n(i, a)),
			ei)
		) {
			s = 0;
			do {
				if (((ei = !1), (ti = 0), 25 <= s)) throw Error(o(301));
				(s += 1),
					(He = Ze = null),
					(t.updateQueue = null),
					(yl.current = uh),
					(e = n(i, a));
			} while (ei);
		}
		if (
			((yl.current = _l),
			(t = Ze !== null && Ze.next !== null),
			(Mn = 0),
			(He = Ze = Le = null),
			(gl = !1),
			t)
		)
			throw Error(o(300));
		return e;
	}
	function Ca() {
		var e = ti !== 0;
		return (ti = 0), e;
	}
	function Dt() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return He === null ? (Le.memoizedState = He = e) : (He = He.next = e), He;
	}
	function wt() {
		if (Ze === null) {
			var e = Le.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = Ze.next;
		var t = He === null ? Le.memoizedState : He.next;
		if (t !== null) (He = t), (Ze = e);
		else {
			if (e === null) throw Error(o(310));
			(Ze = e),
				(e = {
					memoizedState: Ze.memoizedState,
					baseState: Ze.baseState,
					baseQueue: Ze.baseQueue,
					queue: Ze.queue,
					next: null,
				}),
				He === null ? (Le.memoizedState = He = e) : (He = He.next = e);
		}
		return He;
	}
	function ni(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Na(e) {
		var t = wt(),
			n = t.queue;
		if (n === null) throw Error(o(311));
		n.lastRenderedReducer = e;
		var i = Ze,
			a = i.baseQueue,
			s = n.pending;
		if (s !== null) {
			if (a !== null) {
				var p = a.next;
				(a.next = s.next), (s.next = p);
			}
			(i.baseQueue = a = s), (n.pending = null);
		}
		if (a !== null) {
			(s = a.next), (i = i.baseState);
			var y = (p = null),
				_ = null,
				N = s;
			do {
				var I = N.lane;
				if ((Mn & I) === I)
					_ !== null &&
						(_ = _.next =
							{
								lane: 0,
								action: N.action,
								hasEagerState: N.hasEagerState,
								eagerState: N.eagerState,
								next: null,
							}),
						(i = N.hasEagerState ? N.eagerState : e(i, N.action));
				else {
					var z = {
						lane: I,
						action: N.action,
						hasEagerState: N.hasEagerState,
						eagerState: N.eagerState,
						next: null,
					};
					_ === null ? ((y = _ = z), (p = i)) : (_ = _.next = z),
						(Le.lanes |= I),
						(An |= I);
				}
				N = N.next;
			} while (N !== null && N !== s);
			_ === null ? (p = i) : (_.next = y),
				Et(i, t.memoizedState) || (at = !0),
				(t.memoizedState = i),
				(t.baseState = p),
				(t.baseQueue = _),
				(n.lastRenderedState = i);
		}
		if (((e = n.interleaved), e !== null)) {
			a = e;
			do (s = a.lane), (Le.lanes |= s), (An |= s), (a = a.next);
			while (a !== e);
		} else a === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function Ta(e) {
		var t = wt(),
			n = t.queue;
		if (n === null) throw Error(o(311));
		n.lastRenderedReducer = e;
		var i = n.dispatch,
			a = n.pending,
			s = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var p = (a = a.next);
			do (s = e(s, p.action)), (p = p.next);
			while (p !== a);
			Et(s, t.memoizedState) || (at = !0),
				(t.memoizedState = s),
				t.baseQueue === null && (t.baseState = s),
				(n.lastRenderedState = s);
		}
		return [s, i];
	}
	function vc() {}
	function yc(e, t) {
		var n = Le,
			i = wt(),
			a = t(),
			s = !Et(i.memoizedState, a);
		if (
			(s && ((i.memoizedState = a), (at = !0)),
			(i = i.queue),
			Ra(wc.bind(null, n, i, e), [e]),
			i.getSnapshot !== t || s || (He !== null && He.memoizedState.tag & 1))
		) {
			if (
				((n.flags |= 2048),
				ri(9, xc.bind(null, n, i, a, t), void 0, null),
				Qe === null)
			)
				throw Error(o(349));
			Mn & 30 || gc(n, t, a);
		}
		return a;
	}
	function gc(e, t, n) {
		(e.flags |= 16384),
			(e = { getSnapshot: t, value: n }),
			(t = Le.updateQueue),
			t === null
				? ((t = { lastEffect: null, stores: null }),
					(Le.updateQueue = t),
					(t.stores = [e]))
				: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
	}
	function xc(e, t, n, i) {
		(t.value = n), (t.getSnapshot = i), _c(t) && kc(e);
	}
	function wc(e, t, n) {
		return n(function () {
			_c(t) && kc(e);
		});
	}
	function _c(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Et(e, n);
		} catch {
			return !0;
		}
	}
	function kc(e) {
		var t = Yt(e, 1);
		t !== null && Pt(t, e, 1, -1);
	}
	function Sc(e) {
		var t = Dt();
		return (
			typeof e == "function" && (e = e()),
			(t.memoizedState = t.baseState = e),
			(e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ni,
				lastRenderedState: e,
			}),
			(t.queue = e),
			(e = e.dispatch = oh.bind(null, Le, e)),
			[t.memoizedState, e]
		);
	}
	function ri(e, t, n, i) {
		return (
			(e = { tag: e, create: t, destroy: n, deps: i, next: null }),
			(t = Le.updateQueue),
			t === null
				? ((t = { lastEffect: null, stores: null }),
					(Le.updateQueue = t),
					(t.lastEffect = e.next = e))
				: ((n = t.lastEffect),
					n === null
						? (t.lastEffect = e.next = e)
						: ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
			e
		);
	}
	function Ec() {
		return wt().memoizedState;
	}
	function xl(e, t, n, i) {
		var a = Dt();
		(Le.flags |= e),
			(a.memoizedState = ri(1 | t, n, void 0, i === void 0 ? null : i));
	}
	function wl(e, t, n, i) {
		var a = wt();
		i = i === void 0 ? null : i;
		var s = void 0;
		if (Ze !== null) {
			var p = Ze.memoizedState;
			if (((s = p.destroy), i !== null && Sa(i, p.deps))) {
				a.memoizedState = ri(t, n, s, i);
				return;
			}
		}
		(Le.flags |= e), (a.memoizedState = ri(1 | t, n, s, i));
	}
	function Cc(e, t) {
		return xl(8390656, 8, e, t);
	}
	function Ra(e, t) {
		return wl(2048, 8, e, t);
	}
	function Nc(e, t) {
		return wl(4, 2, e, t);
	}
	function Tc(e, t) {
		return wl(4, 4, e, t);
	}
	function Rc(e, t) {
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
	function Pc(e, t, n) {
		return (
			(n = n != null ? n.concat([e]) : null), wl(4, 4, Rc.bind(null, t, e), n)
		);
	}
	function Pa() {}
	function jc(e, t) {
		var n = wt();
		t = t === void 0 ? null : t;
		var i = n.memoizedState;
		return i !== null && t !== null && Sa(t, i[1])
			? i[0]
			: ((n.memoizedState = [e, t]), e);
	}
	function Oc(e, t) {
		var n = wt();
		t = t === void 0 ? null : t;
		var i = n.memoizedState;
		return i !== null && t !== null && Sa(t, i[1])
			? i[0]
			: ((e = e()), (n.memoizedState = [e, t]), e);
	}
	function Lc(e, t, n) {
		return Mn & 21
			? (Et(n, t) ||
					((n = su()), (Le.lanes |= n), (An |= n), (e.baseState = !0)),
				t)
			: (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = n));
	}
	function ih(e, t) {
		var n = ke;
		(ke = n !== 0 && 4 > n ? n : 4), e(!0);
		var i = ka.transition;
		ka.transition = {};
		try {
			e(!1), t();
		} finally {
			(ke = n), (ka.transition = i);
		}
	}
	function Ic() {
		return wt().memoizedState;
	}
	function lh(e, t, n) {
		var i = gn(e);
		if (
			((n = {
				lane: i,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			zc(e))
		)
			Mc(t, n);
		else if (((n = dc(e, t, n, i)), n !== null)) {
			var a = rt();
			Pt(n, e, i, a), Ac(n, t, i);
		}
	}
	function oh(e, t, n) {
		var i = gn(e),
			a = {
				lane: i,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			};
		if (zc(e)) Mc(t, a);
		else {
			var s = e.alternate;
			if (
				e.lanes === 0 &&
				(s === null || s.lanes === 0) &&
				((s = t.lastRenderedReducer), s !== null)
			)
				try {
					var p = t.lastRenderedState,
						y = s(p, n);
					if (((a.hasEagerState = !0), (a.eagerState = y), Et(y, p))) {
						var _ = t.interleaved;
						_ === null
							? ((a.next = a), va(t))
							: ((a.next = _.next), (_.next = a)),
							(t.interleaved = a);
						return;
					}
				} catch {
				} finally {
				}
			(n = dc(e, t, a, i)),
				n !== null && ((a = rt()), Pt(n, e, i, a), Ac(n, t, i));
		}
	}
	function zc(e) {
		var t = e.alternate;
		return e === Le || (t !== null && t === Le);
	}
	function Mc(e, t) {
		ei = gl = !0;
		var n = e.pending;
		n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
			(e.pending = t);
	}
	function Ac(e, t, n) {
		if (n & 4194240) {
			var i = t.lanes;
			(i &= e.pendingLanes), (n |= i), (t.lanes = n), Oo(e, n);
		}
	}
	var _l = {
			readContext: xt,
			useCallback: qe,
			useContext: qe,
			useEffect: qe,
			useImperativeHandle: qe,
			useInsertionEffect: qe,
			useLayoutEffect: qe,
			useMemo: qe,
			useReducer: qe,
			useRef: qe,
			useState: qe,
			useDebugValue: qe,
			useDeferredValue: qe,
			useTransition: qe,
			useMutableSource: qe,
			useSyncExternalStore: qe,
			useId: qe,
			unstable_isNewReconciler: !1,
		},
		ah = {
			readContext: xt,
			useCallback: function (e, t) {
				return (Dt().memoizedState = [e, t === void 0 ? null : t]), e;
			},
			useContext: xt,
			useEffect: Cc,
			useImperativeHandle: function (e, t, n) {
				return (
					(n = n != null ? n.concat([e]) : null),
					xl(4194308, 4, Rc.bind(null, t, e), n)
				);
			},
			useLayoutEffect: function (e, t) {
				return xl(4194308, 4, e, t);
			},
			useInsertionEffect: function (e, t) {
				return xl(4, 2, e, t);
			},
			useMemo: function (e, t) {
				var n = Dt();
				return (
					(t = t === void 0 ? null : t),
					(e = e()),
					(n.memoizedState = [e, t]),
					e
				);
			},
			useReducer: function (e, t, n) {
				var i = Dt();
				return (
					(t = n !== void 0 ? n(t) : t),
					(i.memoizedState = i.baseState = t),
					(e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: t,
					}),
					(i.queue = e),
					(e = e.dispatch = lh.bind(null, Le, e)),
					[i.memoizedState, e]
				);
			},
			useRef: function (e) {
				var t = Dt();
				return (e = { current: e }), (t.memoizedState = e);
			},
			useState: Sc,
			useDebugValue: Pa,
			useDeferredValue: function (e) {
				return (Dt().memoizedState = e);
			},
			useTransition: function () {
				var e = Sc(!1),
					t = e[0];
				return (e = ih.bind(null, e[1])), (Dt().memoizedState = e), [t, e];
			},
			useMutableSource: function () {},
			useSyncExternalStore: function (e, t, n) {
				var i = Le,
					a = Dt();
				if (Pe) {
					if (n === void 0) throw Error(o(407));
					n = n();
				} else {
					if (((n = t()), Qe === null)) throw Error(o(349));
					Mn & 30 || gc(i, t, n);
				}
				a.memoizedState = n;
				var s = { value: n, getSnapshot: t };
				return (
					(a.queue = s),
					Cc(wc.bind(null, i, s, e), [e]),
					(i.flags |= 2048),
					ri(9, xc.bind(null, i, s, n, t), void 0, null),
					n
				);
			},
			useId: function () {
				var e = Dt(),
					t = Qe.identifierPrefix;
				if (Pe) {
					var n = Kt,
						i = Qt;
					(n = (i & ~(1 << (32 - St(i) - 1))).toString(32) + n),
						(t = ":" + t + "R" + n),
						(n = ti++),
						0 < n && (t += "H" + n.toString(32)),
						(t += ":");
				} else (n = rh++), (t = ":" + t + "r" + n.toString(32) + ":");
				return (e.memoizedState = t);
			},
			unstable_isNewReconciler: !1,
		},
		sh = {
			readContext: xt,
			useCallback: jc,
			useContext: xt,
			useEffect: Ra,
			useImperativeHandle: Pc,
			useInsertionEffect: Nc,
			useLayoutEffect: Tc,
			useMemo: Oc,
			useReducer: Na,
			useRef: Ec,
			useState: function () {
				return Na(ni);
			},
			useDebugValue: Pa,
			useDeferredValue: function (e) {
				var t = wt();
				return Lc(t, Ze.memoizedState, e);
			},
			useTransition: function () {
				var e = Na(ni)[0],
					t = wt().memoizedState;
				return [e, t];
			},
			useMutableSource: vc,
			useSyncExternalStore: yc,
			useId: Ic,
			unstable_isNewReconciler: !1,
		},
		uh = {
			readContext: xt,
			useCallback: jc,
			useContext: xt,
			useEffect: Ra,
			useImperativeHandle: Pc,
			useInsertionEffect: Nc,
			useLayoutEffect: Tc,
			useMemo: Oc,
			useReducer: Ta,
			useRef: Ec,
			useState: function () {
				return Ta(ni);
			},
			useDebugValue: Pa,
			useDeferredValue: function (e) {
				var t = wt();
				return Ze === null ? (t.memoizedState = e) : Lc(t, Ze.memoizedState, e);
			},
			useTransition: function () {
				var e = Ta(ni)[0],
					t = wt().memoizedState;
				return [e, t];
			},
			useMutableSource: vc,
			useSyncExternalStore: yc,
			useId: Ic,
			unstable_isNewReconciler: !1,
		};
	function Nt(e, t) {
		if (e && e.defaultProps) {
			(t = K({}, t)), (e = e.defaultProps);
			for (var n in e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	function ja(e, t, n, i) {
		(t = e.memoizedState),
			(n = n(i, t)),
			(n = n == null ? t : K({}, t, n)),
			(e.memoizedState = n),
			e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var kl = {
		isMounted: function (e) {
			return (e = e._reactInternals) ? Rn(e) === e : !1;
		},
		enqueueSetState: function (e, t, n) {
			e = e._reactInternals;
			var i = rt(),
				a = gn(e),
				s = Gt(i, a);
			(s.payload = t),
				n != null && (s.callback = n),
				(t = hn(e, s, a)),
				t !== null && (Pt(t, e, a, i), hl(t, e, a));
		},
		enqueueReplaceState: function (e, t, n) {
			e = e._reactInternals;
			var i = rt(),
				a = gn(e),
				s = Gt(i, a);
			(s.tag = 1),
				(s.payload = t),
				n != null && (s.callback = n),
				(t = hn(e, s, a)),
				t !== null && (Pt(t, e, a, i), hl(t, e, a));
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var n = rt(),
				i = gn(e),
				a = Gt(n, i);
			(a.tag = 2),
				t != null && (a.callback = t),
				(t = hn(e, a, i)),
				t !== null && (Pt(t, e, i, n), hl(t, e, i));
		},
	};
	function Dc(e, t, n, i, a, s, p) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == "function"
				? e.shouldComponentUpdate(i, s, p)
				: t.prototype && t.prototype.isPureReactComponent
					? !Zr(n, i) || !Zr(a, s)
					: !0
		);
	}
	function $c(e, t, n) {
		var i = !1,
			a = dn,
			s = t.contextType;
		return (
			typeof s == "object" && s !== null
				? (s = xt(s))
				: ((a = ot(t) ? jn : Xe.current),
					(i = t.contextTypes),
					(s = (i = i != null) ? rr(e, a) : dn)),
			(t = new t(n, s)),
			(e.memoizedState =
				t.state !== null && t.state !== void 0 ? t.state : null),
			(t.updater = kl),
			(e.stateNode = t),
			(t._reactInternals = e),
			i &&
				((e = e.stateNode),
				(e.__reactInternalMemoizedUnmaskedChildContext = a),
				(e.__reactInternalMemoizedMaskedChildContext = s)),
			t
		);
	}
	function Fc(e, t, n, i) {
		(e = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(n, i),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(n, i),
			t.state !== e && kl.enqueueReplaceState(t, t.state, null);
	}
	function Oa(e, t, n, i) {
		var a = e.stateNode;
		(a.props = n), (a.state = e.memoizedState), (a.refs = {}), ya(e);
		var s = t.contextType;
		typeof s == "object" && s !== null
			? (a.context = xt(s))
			: ((s = ot(t) ? jn : Xe.current), (a.context = rr(e, s))),
			(a.state = e.memoizedState),
			(s = t.getDerivedStateFromProps),
			typeof s == "function" && (ja(e, t, s, n), (a.state = e.memoizedState)),
			typeof t.getDerivedStateFromProps == "function" ||
				typeof a.getSnapshotBeforeUpdate == "function" ||
				(typeof a.UNSAFE_componentWillMount != "function" &&
					typeof a.componentWillMount != "function") ||
				((t = a.state),
				typeof a.componentWillMount == "function" && a.componentWillMount(),
				typeof a.UNSAFE_componentWillMount == "function" &&
					a.UNSAFE_componentWillMount(),
				t !== a.state && kl.enqueueReplaceState(a, a.state, null),
				ml(e, n, a, i),
				(a.state = e.memoizedState)),
			typeof a.componentDidMount == "function" && (e.flags |= 4194308);
	}
	function dr(e, t) {
		try {
			var n = "",
				i = t;
			do (n += ye(i)), (i = i.return);
			while (i);
			var a = n;
		} catch (s) {
			a =
				`
Error generating stack: ` +
				s.message +
				`
` +
				s.stack;
		}
		return { value: e, source: t, stack: a, digest: null };
	}
	function La(e, t, n) {
		return { value: e, source: null, stack: n ?? null, digest: t ?? null };
	}
	function Ia(e, t) {
		try {
			console.error(t.value);
		} catch (n) {
			setTimeout(function () {
				throw n;
			});
		}
	}
	var ch = typeof WeakMap == "function" ? WeakMap : Map;
	function Uc(e, t, n) {
		(n = Gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
		var i = t.value;
		return (
			(n.callback = function () {
				Pl || ((Pl = !0), (Ya = i)), Ia(e, t);
			}),
			n
		);
	}
	function Vc(e, t, n) {
		(n = Gt(-1, n)), (n.tag = 3);
		var i = e.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = t.value;
			(n.payload = function () {
				return i(a);
			}),
				(n.callback = function () {
					Ia(e, t);
				});
		}
		var s = e.stateNode;
		return (
			s !== null &&
				typeof s.componentDidCatch == "function" &&
				(n.callback = function () {
					Ia(e, t),
						typeof i != "function" &&
							(vn === null ? (vn = new Set([this])) : vn.add(this));
					var p = t.stack;
					this.componentDidCatch(t.value, {
						componentStack: p !== null ? p : "",
					});
				}),
			n
		);
	}
	function Bc(e, t, n) {
		var i = e.pingCache;
		if (i === null) {
			i = e.pingCache = new ch();
			var a = new Set();
			i.set(t, a);
		} else (a = i.get(t)), a === void 0 && ((a = new Set()), i.set(t, a));
		a.has(n) || (a.add(n), (e = Eh.bind(null, e, t, n)), t.then(e, e));
	}
	function Zc(e) {
		do {
			var t;
			if (
				((t = e.tag === 13) &&
					((t = e.memoizedState),
					(t = t !== null ? t.dehydrated !== null : !0)),
				t)
			)
				return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function Wc(e, t, n, i, a) {
		return e.mode & 1
			? ((e.flags |= 65536), (e.lanes = a), e)
			: (e === t
					? (e.flags |= 65536)
					: ((e.flags |= 128),
						(n.flags |= 131072),
						(n.flags &= -52805),
						n.tag === 1 &&
							(n.alternate === null
								? (n.tag = 17)
								: ((t = Gt(-1, 1)), (t.tag = 2), hn(n, t, 1))),
						(n.lanes |= 1)),
				e);
	}
	var dh = Q.ReactCurrentOwner,
		at = !1;
	function nt(e, t, n, i) {
		t.child = e === null ? cc(t, null, n, i) : ar(t, e.child, n, i);
	}
	function Hc(e, t, n, i, a) {
		n = n.render;
		var s = t.ref;
		return (
			ur(t, a),
			(i = Ea(e, t, n, i, s, a)),
			(n = Ca()),
			e !== null && !at
				? ((t.updateQueue = e.updateQueue),
					(t.flags &= -2053),
					(e.lanes &= ~a),
					Xt(e, t, a))
				: (Pe && n && aa(t), (t.flags |= 1), nt(e, t, i, a), t.child)
		);
	}
	function Qc(e, t, n, i, a) {
		if (e === null) {
			var s = n.type;
			return typeof s == "function" &&
				!ts(s) &&
				s.defaultProps === void 0 &&
				n.compare === null &&
				n.defaultProps === void 0
				? ((t.tag = 15), (t.type = s), Kc(e, t, s, i, a))
				: ((e = Ml(n.type, null, i, t, t.mode, a)),
					(e.ref = t.ref),
					(e.return = t),
					(t.child = e));
		}
		if (((s = e.child), !(e.lanes & a))) {
			var p = s.memoizedProps;
			if (
				((n = n.compare), (n = n !== null ? n : Zr), n(p, i) && e.ref === t.ref)
			)
				return Xt(e, t, a);
		}
		return (
			(t.flags |= 1),
			(e = wn(s, i)),
			(e.ref = t.ref),
			(e.return = t),
			(t.child = e)
		);
	}
	function Kc(e, t, n, i, a) {
		if (e !== null) {
			var s = e.memoizedProps;
			if (Zr(s, i) && e.ref === t.ref)
				if (((at = !1), (t.pendingProps = i = s), (e.lanes & a) !== 0))
					e.flags & 131072 && (at = !0);
				else return (t.lanes = e.lanes), Xt(e, t, a);
		}
		return za(e, t, n, i, a);
	}
	function Yc(e, t, n) {
		var i = t.pendingProps,
			a = i.children,
			s = e !== null ? e.memoizedState : null;
		if (i.mode === "hidden")
			if (!(t.mode & 1))
				(t.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null,
				}),
					Ee(pr, mt),
					(mt |= n);
			else {
				if (!(n & 1073741824))
					return (
						(e = s !== null ? s.baseLanes | n : n),
						(t.lanes = t.childLanes = 1073741824),
						(t.memoizedState = {
							baseLanes: e,
							cachePool: null,
							transitions: null,
						}),
						(t.updateQueue = null),
						Ee(pr, mt),
						(mt |= e),
						null
					);
				(t.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null,
				}),
					(i = s !== null ? s.baseLanes : n),
					Ee(pr, mt),
					(mt |= i);
			}
		else
			s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
				Ee(pr, mt),
				(mt |= i);
		return nt(e, t, a, n), t.child;
	}
	function Gc(e, t) {
		var n = t.ref;
		((e === null && n !== null) || (e !== null && e.ref !== n)) &&
			((t.flags |= 512), (t.flags |= 2097152));
	}
	function za(e, t, n, i, a) {
		var s = ot(n) ? jn : Xe.current;
		return (
			(s = rr(t, s)),
			ur(t, a),
			(n = Ea(e, t, n, i, s, a)),
			(i = Ca()),
			e !== null && !at
				? ((t.updateQueue = e.updateQueue),
					(t.flags &= -2053),
					(e.lanes &= ~a),
					Xt(e, t, a))
				: (Pe && i && aa(t), (t.flags |= 1), nt(e, t, n, a), t.child)
		);
	}
	function Xc(e, t, n, i, a) {
		if (ot(n)) {
			var s = !0;
			ol(t);
		} else s = !1;
		if ((ur(t, a), t.stateNode === null))
			El(e, t), $c(t, n, i), Oa(t, n, i, a), (i = !0);
		else if (e === null) {
			var p = t.stateNode,
				y = t.memoizedProps;
			p.props = y;
			var _ = p.context,
				N = n.contextType;
			typeof N == "object" && N !== null
				? (N = xt(N))
				: ((N = ot(n) ? jn : Xe.current), (N = rr(t, N)));
			var I = n.getDerivedStateFromProps,
				z =
					typeof I == "function" ||
					typeof p.getSnapshotBeforeUpdate == "function";
			z ||
				(typeof p.UNSAFE_componentWillReceiveProps != "function" &&
					typeof p.componentWillReceiveProps != "function") ||
				((y !== i || _ !== N) && Fc(t, p, i, N)),
				(pn = !1);
			var O = t.memoizedState;
			(p.state = O),
				ml(t, i, p, a),
				(_ = t.memoizedState),
				y !== i || O !== _ || lt.current || pn
					? (typeof I == "function" && (ja(t, n, I, i), (_ = t.memoizedState)),
						(y = pn || Dc(t, n, y, i, O, _, N))
							? (z ||
									(typeof p.UNSAFE_componentWillMount != "function" &&
										typeof p.componentWillMount != "function") ||
									(typeof p.componentWillMount == "function" &&
										p.componentWillMount(),
									typeof p.UNSAFE_componentWillMount == "function" &&
										p.UNSAFE_componentWillMount()),
								typeof p.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof p.componentDidMount == "function" &&
									(t.flags |= 4194308),
								(t.memoizedProps = i),
								(t.memoizedState = _)),
						(p.props = i),
						(p.state = _),
						(p.context = N),
						(i = y))
					: (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
						(i = !1));
		} else {
			(p = t.stateNode),
				fc(e, t),
				(y = t.memoizedProps),
				(N = t.type === t.elementType ? y : Nt(t.type, y)),
				(p.props = N),
				(z = t.pendingProps),
				(O = p.context),
				(_ = n.contextType),
				typeof _ == "object" && _ !== null
					? (_ = xt(_))
					: ((_ = ot(n) ? jn : Xe.current), (_ = rr(t, _)));
			var Z = n.getDerivedStateFromProps;
			(I =
				typeof Z == "function" ||
				typeof p.getSnapshotBeforeUpdate == "function") ||
				(typeof p.UNSAFE_componentWillReceiveProps != "function" &&
					typeof p.componentWillReceiveProps != "function") ||
				((y !== z || O !== _) && Fc(t, p, i, _)),
				(pn = !1),
				(O = t.memoizedState),
				(p.state = O),
				ml(t, i, p, a);
			var Y = t.memoizedState;
			y !== z || O !== Y || lt.current || pn
				? (typeof Z == "function" && (ja(t, n, Z, i), (Y = t.memoizedState)),
					(N = pn || Dc(t, n, N, i, O, Y, _) || !1)
						? (I ||
								(typeof p.UNSAFE_componentWillUpdate != "function" &&
									typeof p.componentWillUpdate != "function") ||
								(typeof p.componentWillUpdate == "function" &&
									p.componentWillUpdate(i, Y, _),
								typeof p.UNSAFE_componentWillUpdate == "function" &&
									p.UNSAFE_componentWillUpdate(i, Y, _)),
							typeof p.componentDidUpdate == "function" && (t.flags |= 4),
							typeof p.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof p.componentDidUpdate != "function" ||
								(y === e.memoizedProps && O === e.memoizedState) ||
								(t.flags |= 4),
							typeof p.getSnapshotBeforeUpdate != "function" ||
								(y === e.memoizedProps && O === e.memoizedState) ||
								(t.flags |= 1024),
							(t.memoizedProps = i),
							(t.memoizedState = Y)),
					(p.props = i),
					(p.state = Y),
					(p.context = _),
					(i = N))
				: (typeof p.componentDidUpdate != "function" ||
						(y === e.memoizedProps && O === e.memoizedState) ||
						(t.flags |= 4),
					typeof p.getSnapshotBeforeUpdate != "function" ||
						(y === e.memoizedProps && O === e.memoizedState) ||
						(t.flags |= 1024),
					(i = !1));
		}
		return Ma(e, t, n, i, s, a);
	}
	function Ma(e, t, n, i, a, s) {
		Gc(e, t);
		var p = (t.flags & 128) !== 0;
		if (!i && !p) return a && tc(t, n, !1), Xt(e, t, s);
		(i = t.stateNode), (dh.current = t);
		var y =
			p && typeof n.getDerivedStateFromError != "function" ? null : i.render();
		return (
			(t.flags |= 1),
			e !== null && p
				? ((t.child = ar(t, e.child, null, s)), (t.child = ar(t, null, y, s)))
				: nt(e, t, y, s),
			(t.memoizedState = i.state),
			a && tc(t, n, !0),
			t.child
		);
	}
	function qc(e) {
		var t = e.stateNode;
		t.pendingContext
			? Ju(e, t.pendingContext, t.pendingContext !== t.context)
			: t.context && Ju(e, t.context, !1),
			ga(e, t.containerInfo);
	}
	function bc(e, t, n, i, a) {
		return or(), da(a), (t.flags |= 256), nt(e, t, n, i), t.child;
	}
	var Aa = { dehydrated: null, treeContext: null, retryLane: 0 };
	function Da(e) {
		return { baseLanes: e, cachePool: null, transitions: null };
	}
	function Jc(e, t, n) {
		var i = t.pendingProps,
			a = Oe.current,
			s = !1,
			p = (t.flags & 128) !== 0,
			y;
		if (
			((y = p) ||
				(y = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
			y
				? ((s = !0), (t.flags &= -129))
				: (e === null || e.memoizedState !== null) && (a |= 1),
			Ee(Oe, a & 1),
			e === null)
		)
			return (
				ca(t),
				(e = t.memoizedState),
				e !== null && ((e = e.dehydrated), e !== null)
					? (t.mode & 1
							? e.data === "$!"
								? (t.lanes = 8)
								: (t.lanes = 1073741824)
							: (t.lanes = 1),
						null)
					: ((p = i.children),
						(e = i.fallback),
						s
							? ((i = t.mode),
								(s = t.child),
								(p = { mode: "hidden", children: p }),
								!(i & 1) && s !== null
									? ((s.childLanes = 0), (s.pendingProps = p))
									: (s = Al(p, i, 0, null)),
								(e = Un(e, i, n, null)),
								(s.return = t),
								(e.return = t),
								(s.sibling = e),
								(t.child = s),
								(t.child.memoizedState = Da(n)),
								(t.memoizedState = Aa),
								e)
							: $a(t, p))
			);
		if (((a = e.memoizedState), a !== null && ((y = a.dehydrated), y !== null)))
			return fh(e, t, p, i, y, a, n);
		if (s) {
			(s = i.fallback), (p = t.mode), (a = e.child), (y = a.sibling);
			var _ = { mode: "hidden", children: i.children };
			return (
				!(p & 1) && t.child !== a
					? ((i = t.child),
						(i.childLanes = 0),
						(i.pendingProps = _),
						(t.deletions = null))
					: ((i = wn(a, _)), (i.subtreeFlags = a.subtreeFlags & 14680064)),
				y !== null ? (s = wn(y, s)) : ((s = Un(s, p, n, null)), (s.flags |= 2)),
				(s.return = t),
				(i.return = t),
				(i.sibling = s),
				(t.child = i),
				(i = s),
				(s = t.child),
				(p = e.child.memoizedState),
				(p =
					p === null
						? Da(n)
						: {
								baseLanes: p.baseLanes | n,
								cachePool: null,
								transitions: p.transitions,
							}),
				(s.memoizedState = p),
				(s.childLanes = e.childLanes & ~n),
				(t.memoizedState = Aa),
				i
			);
		}
		return (
			(s = e.child),
			(e = s.sibling),
			(i = wn(s, { mode: "visible", children: i.children })),
			!(t.mode & 1) && (i.lanes = n),
			(i.return = t),
			(i.sibling = null),
			e !== null &&
				((n = t.deletions),
				n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
			(t.child = i),
			(t.memoizedState = null),
			i
		);
	}
	function $a(e, t) {
		return (
			(t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
			(t.return = e),
			(e.child = t)
		);
	}
	function Sl(e, t, n, i) {
		return (
			i !== null && da(i),
			ar(t, e.child, null, n),
			(e = $a(t, t.pendingProps.children)),
			(e.flags |= 2),
			(t.memoizedState = null),
			e
		);
	}
	function fh(e, t, n, i, a, s, p) {
		if (n)
			return t.flags & 256
				? ((t.flags &= -257), (i = La(Error(o(422)))), Sl(e, t, p, i))
				: t.memoizedState !== null
					? ((t.child = e.child), (t.flags |= 128), null)
					: ((s = i.fallback),
						(a = t.mode),
						(i = Al({ mode: "visible", children: i.children }, a, 0, null)),
						(s = Un(s, a, p, null)),
						(s.flags |= 2),
						(i.return = t),
						(s.return = t),
						(i.sibling = s),
						(t.child = i),
						t.mode & 1 && ar(t, e.child, null, p),
						(t.child.memoizedState = Da(p)),
						(t.memoizedState = Aa),
						s);
		if (!(t.mode & 1)) return Sl(e, t, p, null);
		if (a.data === "$!") {
			if (((i = a.nextSibling && a.nextSibling.dataset), i)) var y = i.dgst;
			return (
				(i = y), (s = Error(o(419))), (i = La(s, i, void 0)), Sl(e, t, p, i)
			);
		}
		if (((y = (p & e.childLanes) !== 0), at || y)) {
			if (((i = Qe), i !== null)) {
				switch (p & -p) {
					case 4:
						a = 2;
						break;
					case 16:
						a = 8;
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
						a = 32;
						break;
					case 536870912:
						a = 268435456;
						break;
					default:
						a = 0;
				}
				(a = a & (i.suspendedLanes | p) ? 0 : a),
					a !== 0 &&
						a !== s.retryLane &&
						((s.retryLane = a), Yt(e, a), Pt(i, e, a, -1));
			}
			return es(), (i = La(Error(o(421)))), Sl(e, t, p, i);
		}
		return a.data === "$?"
			? ((t.flags |= 128),
				(t.child = e.child),
				(t = Ch.bind(null, e)),
				(a._reactRetry = t),
				null)
			: ((e = s.treeContext),
				(ht = un(a.nextSibling)),
				(pt = t),
				(Pe = !0),
				(Ct = null),
				e !== null &&
					((yt[gt++] = Qt),
					(yt[gt++] = Kt),
					(yt[gt++] = On),
					(Qt = e.id),
					(Kt = e.overflow),
					(On = t)),
				(t = $a(t, i.children)),
				(t.flags |= 4096),
				t);
	}
	function ed(e, t, n) {
		e.lanes |= t;
		var i = e.alternate;
		i !== null && (i.lanes |= t), ma(e.return, t, n);
	}
	function Fa(e, t, n, i, a) {
		var s = e.memoizedState;
		s === null
			? (e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: i,
					tail: n,
					tailMode: a,
				})
			: ((s.isBackwards = t),
				(s.rendering = null),
				(s.renderingStartTime = 0),
				(s.last = i),
				(s.tail = n),
				(s.tailMode = a));
	}
	function td(e, t, n) {
		var i = t.pendingProps,
			a = i.revealOrder,
			s = i.tail;
		if ((nt(e, t, i.children, n), (i = Oe.current), i & 2))
			(i = (i & 1) | 2), (t.flags |= 128);
		else {
			if (e !== null && e.flags & 128)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && ed(e, n, t);
					else if (e.tag === 19) ed(e, n, t);
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
			i &= 1;
		}
		if ((Ee(Oe, i), !(t.mode & 1))) t.memoizedState = null;
		else
			switch (a) {
				case "forwards":
					for (n = t.child, a = null; n !== null; )
						(e = n.alternate),
							e !== null && vl(e) === null && (a = n),
							(n = n.sibling);
					(n = a),
						n === null
							? ((a = t.child), (t.child = null))
							: ((a = n.sibling), (n.sibling = null)),
						Fa(t, !1, a, n, s);
					break;
				case "backwards":
					for (n = null, a = t.child, t.child = null; a !== null; ) {
						if (((e = a.alternate), e !== null && vl(e) === null)) {
							t.child = a;
							break;
						}
						(e = a.sibling), (a.sibling = n), (n = a), (a = e);
					}
					Fa(t, !0, n, null, s);
					break;
				case "together":
					Fa(t, !1, null, null, void 0);
					break;
				default:
					t.memoizedState = null;
			}
		return t.child;
	}
	function El(e, t) {
		!(t.mode & 1) &&
			e !== null &&
			((e.alternate = null), (t.alternate = null), (t.flags |= 2));
	}
	function Xt(e, t, n) {
		if (
			(e !== null && (t.dependencies = e.dependencies),
			(An |= t.lanes),
			!(n & t.childLanes))
		)
			return null;
		if (e !== null && t.child !== e.child) throw Error(o(153));
		if (t.child !== null) {
			for (
				e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t;
				e.sibling !== null;

			)
				(e = e.sibling),
					(n = n.sibling = wn(e, e.pendingProps)),
					(n.return = t);
			n.sibling = null;
		}
		return t.child;
	}
	function ph(e, t, n) {
		switch (t.tag) {
			case 3:
				qc(t), or();
				break;
			case 5:
				mc(t);
				break;
			case 1:
				ot(t.type) && ol(t);
				break;
			case 4:
				ga(t, t.stateNode.containerInfo);
				break;
			case 10:
				var i = t.type._context,
					a = t.memoizedProps.value;
				Ee(fl, i._currentValue), (i._currentValue = a);
				break;
			case 13:
				if (((i = t.memoizedState), i !== null))
					return i.dehydrated !== null
						? (Ee(Oe, Oe.current & 1), (t.flags |= 128), null)
						: n & t.child.childLanes
							? Jc(e, t, n)
							: (Ee(Oe, Oe.current & 1),
								(e = Xt(e, t, n)),
								e !== null ? e.sibling : null);
				Ee(Oe, Oe.current & 1);
				break;
			case 19:
				if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
					if (i) return td(e, t, n);
					t.flags |= 128;
				}
				if (
					((a = t.memoizedState),
					a !== null &&
						((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
					Ee(Oe, Oe.current),
					i)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), Yc(e, t, n);
		}
		return Xt(e, t, n);
	}
	var nd, Ua, rd, id;
	(nd = function (e, t) {
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
	}),
		(Ua = function () {}),
		(rd = function (e, t, n, i) {
			var a = e.memoizedProps;
			if (a !== i) {
				(e = t.stateNode), zn(At.current);
				var s = null;
				switch (n) {
					case "input":
						(a = mo(e, a)), (i = mo(e, i)), (s = []);
						break;
					case "select":
						(a = K({}, a, { value: void 0 })),
							(i = K({}, i, { value: void 0 })),
							(s = []);
						break;
					case "textarea":
						(a = go(e, a)), (i = go(e, i)), (s = []);
						break;
					default:
						typeof a.onClick != "function" &&
							typeof i.onClick == "function" &&
							(e.onclick = rl);
				}
				wo(n, i);
				var p;
				n = null;
				for (N in a)
					if (!i.hasOwnProperty(N) && a.hasOwnProperty(N) && a[N] != null)
						if (N === "style") {
							var y = a[N];
							for (p in y) y.hasOwnProperty(p) && (n || (n = {}), (n[p] = ""));
						} else
							N !== "dangerouslySetInnerHTML" &&
								N !== "children" &&
								N !== "suppressContentEditableWarning" &&
								N !== "suppressHydrationWarning" &&
								N !== "autoFocus" &&
								(u.hasOwnProperty(N)
									? s || (s = [])
									: (s = s || []).push(N, null));
				for (N in i) {
					var _ = i[N];
					if (
						((y = a != null ? a[N] : void 0),
						i.hasOwnProperty(N) && _ !== y && (_ != null || y != null))
					)
						if (N === "style")
							if (y) {
								for (p in y)
									!y.hasOwnProperty(p) ||
										(_ && _.hasOwnProperty(p)) ||
										(n || (n = {}), (n[p] = ""));
								for (p in _)
									_.hasOwnProperty(p) &&
										y[p] !== _[p] &&
										(n || (n = {}), (n[p] = _[p]));
							} else n || (s || (s = []), s.push(N, n)), (n = _);
						else
							N === "dangerouslySetInnerHTML"
								? ((_ = _ ? _.__html : void 0),
									(y = y ? y.__html : void 0),
									_ != null && y !== _ && (s = s || []).push(N, _))
								: N === "children"
									? (typeof _ != "string" && typeof _ != "number") ||
										(s = s || []).push(N, "" + _)
									: N !== "suppressContentEditableWarning" &&
										N !== "suppressHydrationWarning" &&
										(u.hasOwnProperty(N)
											? (_ != null && N === "onScroll" && Ce("scroll", e),
												s || y === _ || (s = []))
											: (s = s || []).push(N, _));
				}
				n && (s = s || []).push("style", n);
				var N = s;
				(t.updateQueue = N) && (t.flags |= 4);
			}
		}),
		(id = function (e, t, n, i) {
			n !== i && (t.flags |= 4);
		});
	function ii(e, t) {
		if (!Pe)
			switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var n = null; t !== null; )
						t.alternate !== null && (n = t), (t = t.sibling);
					n === null ? (e.tail = null) : (n.sibling = null);
					break;
				case "collapsed":
					n = e.tail;
					for (var i = null; n !== null; )
						n.alternate !== null && (i = n), (n = n.sibling);
					i === null
						? t || e.tail === null
							? (e.tail = null)
							: (e.tail.sibling = null)
						: (i.sibling = null);
			}
	}
	function be(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			n = 0,
			i = 0;
		if (t)
			for (var a = e.child; a !== null; )
				(n |= a.lanes | a.childLanes),
					(i |= a.subtreeFlags & 14680064),
					(i |= a.flags & 14680064),
					(a.return = e),
					(a = a.sibling);
		else
			for (a = e.child; a !== null; )
				(n |= a.lanes | a.childLanes),
					(i |= a.subtreeFlags),
					(i |= a.flags),
					(a.return = e),
					(a = a.sibling);
		return (e.subtreeFlags |= i), (e.childLanes = n), t;
	}
	function hh(e, t, n) {
		var i = t.pendingProps;
		switch ((sa(t), t.tag)) {
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
				return be(t), null;
			case 1:
				return ot(t.type) && ll(), be(t), null;
			case 3:
				return (
					(i = t.stateNode),
					cr(),
					Ne(lt),
					Ne(Xe),
					_a(),
					i.pendingContext &&
						((i.context = i.pendingContext), (i.pendingContext = null)),
					(e === null || e.child === null) &&
						(cl(t)
							? (t.flags |= 4)
							: e === null ||
								(e.memoizedState.isDehydrated && !(t.flags & 256)) ||
								((t.flags |= 1024), Ct !== null && (qa(Ct), (Ct = null)))),
					Ua(e, t),
					be(t),
					null
				);
			case 5:
				xa(t);
				var a = zn(Jr.current);
				if (((n = t.type), e !== null && t.stateNode != null))
					rd(e, t, n, i, a),
						e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
				else {
					if (!i) {
						if (t.stateNode === null) throw Error(o(166));
						return be(t), null;
					}
					if (((e = zn(At.current)), cl(t))) {
						(i = t.stateNode), (n = t.type);
						var s = t.memoizedProps;
						switch (((i[Mt] = t), (i[Yr] = s), (e = (t.mode & 1) !== 0), n)) {
							case "dialog":
								Ce("cancel", i), Ce("close", i);
								break;
							case "iframe":
							case "object":
							case "embed":
								Ce("load", i);
								break;
							case "video":
							case "audio":
								for (a = 0; a < Hr.length; a++) Ce(Hr[a], i);
								break;
							case "source":
								Ce("error", i);
								break;
							case "img":
							case "image":
							case "link":
								Ce("error", i), Ce("load", i);
								break;
							case "details":
								Ce("toggle", i);
								break;
							case "input":
								$s(i, s), Ce("invalid", i);
								break;
							case "select":
								(i._wrapperState = { wasMultiple: !!s.multiple }),
									Ce("invalid", i);
								break;
							case "textarea":
								Vs(i, s), Ce("invalid", i);
						}
						wo(n, s), (a = null);
						for (var p in s)
							if (s.hasOwnProperty(p)) {
								var y = s[p];
								p === "children"
									? typeof y == "string"
										? i.textContent !== y &&
											(s.suppressHydrationWarning !== !0 &&
												nl(i.textContent, y, e),
											(a = ["children", y]))
										: typeof y == "number" &&
											i.textContent !== "" + y &&
											(s.suppressHydrationWarning !== !0 &&
												nl(i.textContent, y, e),
											(a = ["children", "" + y]))
									: u.hasOwnProperty(p) &&
										y != null &&
										p === "onScroll" &&
										Ce("scroll", i);
							}
						switch (n) {
							case "input":
								Ii(i), Us(i, s, !0);
								break;
							case "textarea":
								Ii(i), Zs(i);
								break;
							case "select":
							case "option":
								break;
							default:
								typeof s.onClick == "function" && (i.onclick = rl);
						}
						(i = a), (t.updateQueue = i), i !== null && (t.flags |= 4);
					} else {
						(p = a.nodeType === 9 ? a : a.ownerDocument),
							e === "http://www.w3.org/1999/xhtml" && (e = Ws(n)),
							e === "http://www.w3.org/1999/xhtml"
								? n === "script"
									? ((e = p.createElement("div")),
										(e.innerHTML = "<script><\/script>"),
										(e = e.removeChild(e.firstChild)))
									: typeof i.is == "string"
										? (e = p.createElement(n, { is: i.is }))
										: ((e = p.createElement(n)),
											n === "select" &&
												((p = e),
												i.multiple
													? (p.multiple = !0)
													: i.size && (p.size = i.size)))
								: (e = p.createElementNS(e, n)),
							(e[Mt] = t),
							(e[Yr] = i),
							nd(e, t, !1, !1),
							(t.stateNode = e);
						e: {
							switch (((p = _o(n, i)), n)) {
								case "dialog":
									Ce("cancel", e), Ce("close", e), (a = i);
									break;
								case "iframe":
								case "object":
								case "embed":
									Ce("load", e), (a = i);
									break;
								case "video":
								case "audio":
									for (a = 0; a < Hr.length; a++) Ce(Hr[a], e);
									a = i;
									break;
								case "source":
									Ce("error", e), (a = i);
									break;
								case "img":
								case "image":
								case "link":
									Ce("error", e), Ce("load", e), (a = i);
									break;
								case "details":
									Ce("toggle", e), (a = i);
									break;
								case "input":
									$s(e, i), (a = mo(e, i)), Ce("invalid", e);
									break;
								case "option":
									a = i;
									break;
								case "select":
									(e._wrapperState = { wasMultiple: !!i.multiple }),
										(a = K({}, i, { value: void 0 })),
										Ce("invalid", e);
									break;
								case "textarea":
									Vs(e, i), (a = go(e, i)), Ce("invalid", e);
									break;
								default:
									a = i;
							}
							wo(n, a), (y = a);
							for (s in y)
								if (y.hasOwnProperty(s)) {
									var _ = y[s];
									s === "style"
										? Ks(e, _)
										: s === "dangerouslySetInnerHTML"
											? ((_ = _ ? _.__html : void 0), _ != null && Hs(e, _))
											: s === "children"
												? typeof _ == "string"
													? (n !== "textarea" || _ !== "") && Nr(e, _)
													: typeof _ == "number" && Nr(e, "" + _)
												: s !== "suppressContentEditableWarning" &&
													s !== "suppressHydrationWarning" &&
													s !== "autoFocus" &&
													(u.hasOwnProperty(s)
														? _ != null && s === "onScroll" && Ce("scroll", e)
														: _ != null && ie(e, s, _, p));
								}
							switch (n) {
								case "input":
									Ii(e), Us(e, i, !1);
									break;
								case "textarea":
									Ii(e), Zs(e);
									break;
								case "option":
									i.value != null && e.setAttribute("value", "" + _e(i.value));
									break;
								case "select":
									(e.multiple = !!i.multiple),
										(s = i.value),
										s != null
											? Hn(e, !!i.multiple, s, !1)
											: i.defaultValue != null &&
												Hn(e, !!i.multiple, i.defaultValue, !0);
									break;
								default:
									typeof a.onClick == "function" && (e.onclick = rl);
							}
							switch (n) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									i = !!i.autoFocus;
									break e;
								case "img":
									i = !0;
									break e;
								default:
									i = !1;
							}
						}
						i && (t.flags |= 4);
					}
					t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
				}
				return be(t), null;
			case 6:
				if (e && t.stateNode != null) id(e, t, e.memoizedProps, i);
				else {
					if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
					if (((n = zn(Jr.current)), zn(At.current), cl(t))) {
						if (
							((i = t.stateNode),
							(n = t.memoizedProps),
							(i[Mt] = t),
							(s = i.nodeValue !== n) && ((e = pt), e !== null))
						)
							switch (e.tag) {
								case 3:
									nl(i.nodeValue, n, (e.mode & 1) !== 0);
									break;
								case 5:
									e.memoizedProps.suppressHydrationWarning !== !0 &&
										nl(i.nodeValue, n, (e.mode & 1) !== 0);
							}
						s && (t.flags |= 4);
					} else
						(i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
							(i[Mt] = t),
							(t.stateNode = i);
				}
				return be(t), null;
			case 13:
				if (
					(Ne(Oe),
					(i = t.memoizedState),
					e === null ||
						(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
				) {
					if (Pe && ht !== null && t.mode & 1 && !(t.flags & 128))
						ac(), or(), (t.flags |= 98560), (s = !1);
					else if (((s = cl(t)), i !== null && i.dehydrated !== null)) {
						if (e === null) {
							if (!s) throw Error(o(318));
							if (
								((s = t.memoizedState),
								(s = s !== null ? s.dehydrated : null),
								!s)
							)
								throw Error(o(317));
							s[Mt] = t;
						} else
							or(),
								!(t.flags & 128) && (t.memoizedState = null),
								(t.flags |= 4);
						be(t), (s = !1);
					} else Ct !== null && (qa(Ct), (Ct = null)), (s = !0);
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128
					? ((t.lanes = n), t)
					: ((i = i !== null),
						i !== (e !== null && e.memoizedState !== null) &&
							i &&
							((t.child.flags |= 8192),
							t.mode & 1 &&
								(e === null || Oe.current & 1 ? We === 0 && (We = 3) : es())),
						t.updateQueue !== null && (t.flags |= 4),
						be(t),
						null);
			case 4:
				return (
					cr(),
					Ua(e, t),
					e === null && Qr(t.stateNode.containerInfo),
					be(t),
					null
				);
			case 10:
				return ha(t.type._context), be(t), null;
			case 17:
				return ot(t.type) && ll(), be(t), null;
			case 19:
				if ((Ne(Oe), (s = t.memoizedState), s === null)) return be(t), null;
				if (((i = (t.flags & 128) !== 0), (p = s.rendering), p === null))
					if (i) ii(s, !1);
					else {
						if (We !== 0 || (e !== null && e.flags & 128))
							for (e = t.child; e !== null; ) {
								if (((p = vl(e)), p !== null)) {
									for (
										t.flags |= 128,
											ii(s, !1),
											i = p.updateQueue,
											i !== null && ((t.updateQueue = i), (t.flags |= 4)),
											t.subtreeFlags = 0,
											i = n,
											n = t.child;
										n !== null;

									)
										(s = n),
											(e = i),
											(s.flags &= 14680066),
											(p = s.alternate),
											p === null
												? ((s.childLanes = 0),
													(s.lanes = e),
													(s.child = null),
													(s.subtreeFlags = 0),
													(s.memoizedProps = null),
													(s.memoizedState = null),
													(s.updateQueue = null),
													(s.dependencies = null),
													(s.stateNode = null))
												: ((s.childLanes = p.childLanes),
													(s.lanes = p.lanes),
													(s.child = p.child),
													(s.subtreeFlags = 0),
													(s.deletions = null),
													(s.memoizedProps = p.memoizedProps),
													(s.memoizedState = p.memoizedState),
													(s.updateQueue = p.updateQueue),
													(s.type = p.type),
													(e = p.dependencies),
													(s.dependencies =
														e === null
															? null
															: {
																	lanes: e.lanes,
																	firstContext: e.firstContext,
																})),
											(n = n.sibling);
									return Ee(Oe, (Oe.current & 1) | 2), t.child;
								}
								e = e.sibling;
							}
						s.tail !== null &&
							De() > hr &&
							((t.flags |= 128), (i = !0), ii(s, !1), (t.lanes = 4194304));
					}
				else {
					if (!i)
						if (((e = vl(p)), e !== null)) {
							if (
								((t.flags |= 128),
								(i = !0),
								(n = e.updateQueue),
								n !== null && ((t.updateQueue = n), (t.flags |= 4)),
								ii(s, !0),
								s.tail === null &&
									s.tailMode === "hidden" &&
									!p.alternate &&
									!Pe)
							)
								return be(t), null;
						} else
							2 * De() - s.renderingStartTime > hr &&
								n !== 1073741824 &&
								((t.flags |= 128), (i = !0), ii(s, !1), (t.lanes = 4194304));
					s.isBackwards
						? ((p.sibling = t.child), (t.child = p))
						: ((n = s.last),
							n !== null ? (n.sibling = p) : (t.child = p),
							(s.last = p));
				}
				return s.tail !== null
					? ((t = s.tail),
						(s.rendering = t),
						(s.tail = t.sibling),
						(s.renderingStartTime = De()),
						(t.sibling = null),
						(n = Oe.current),
						Ee(Oe, i ? (n & 1) | 2 : n & 1),
						t)
					: (be(t), null);
			case 22:
			case 23:
				return (
					Ja(),
					(i = t.memoizedState !== null),
					e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
					i && t.mode & 1
						? mt & 1073741824 &&
							(be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: be(t),
					null
				);
			case 24:
				return null;
			case 25:
				return null;
		}
		throw Error(o(156, t.tag));
	}
	function mh(e, t) {
		switch ((sa(t), t.tag)) {
			case 1:
				return (
					ot(t.type) && ll(),
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 3:
				return (
					cr(),
					Ne(lt),
					Ne(Xe),
					_a(),
					(e = t.flags),
					e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 5:
				return xa(t), null;
			case 13:
				if (
					(Ne(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(o(340));
					or();
				}
				return (
					(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 19:
				return Ne(Oe), null;
			case 4:
				return cr(), null;
			case 10:
				return ha(t.type._context), null;
			case 22:
			case 23:
				return Ja(), null;
			case 24:
				return null;
			default:
				return null;
		}
	}
	var Cl = !1,
		Je = !1,
		vh = typeof WeakSet == "function" ? WeakSet : Set,
		H = null;
	function fr(e, t) {
		var n = e.ref;
		if (n !== null)
			if (typeof n == "function")
				try {
					n(null);
				} catch (i) {
					Ae(e, t, i);
				}
			else n.current = null;
	}
	function Va(e, t, n) {
		try {
			n();
		} catch (i) {
			Ae(e, t, i);
		}
	}
	var ld = !1;
	function yh(e, t) {
		if (((Jo = Hi), (e = Du()), Ho(e))) {
			if ("selectionStart" in e)
				var n = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					n = ((n = e.ownerDocument) && n.defaultView) || window;
					var i = n.getSelection && n.getSelection();
					if (i && i.rangeCount !== 0) {
						n = i.anchorNode;
						var a = i.anchorOffset,
							s = i.focusNode;
						i = i.focusOffset;
						try {
							n.nodeType, s.nodeType;
						} catch {
							n = null;
							break e;
						}
						var p = 0,
							y = -1,
							_ = -1,
							N = 0,
							I = 0,
							z = e,
							O = null;
						t: for (;;) {
							for (
								var Z;
								z !== n || (a !== 0 && z.nodeType !== 3) || (y = p + a),
									z !== s || (i !== 0 && z.nodeType !== 3) || (_ = p + i),
									z.nodeType === 3 && (p += z.nodeValue.length),
									(Z = z.firstChild) !== null;

							)
								(O = z), (z = Z);
							for (;;) {
								if (z === e) break t;
								if (
									(O === n && ++N === a && (y = p),
									O === s && ++I === i && (_ = p),
									(Z = z.nextSibling) !== null)
								)
									break;
								(z = O), (O = z.parentNode);
							}
							z = Z;
						}
						n = y === -1 || _ === -1 ? null : { start: y, end: _ };
					} else n = null;
				}
			n = n || { start: 0, end: 0 };
		} else n = null;
		for (
			ea = { focusedElem: e, selectionRange: n }, Hi = !1, H = t;
			H !== null;

		)
			if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
				(e.return = t), (H = e);
			else
				for (; H !== null; ) {
					t = H;
					try {
						var Y = t.alternate;
						if (t.flags & 1024)
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									break;
								case 1:
									if (Y !== null) {
										var G = Y.memoizedProps,
											$e = Y.memoizedState,
											E = t.stateNode,
											k = E.getSnapshotBeforeUpdate(
												t.elementType === t.type ? G : Nt(t.type, G),
												$e,
											);
										E.__reactInternalSnapshotBeforeUpdate = k;
									}
									break;
								case 3:
									var C = t.stateNode.containerInfo;
									C.nodeType === 1
										? (C.textContent = "")
										: C.nodeType === 9 &&
											C.documentElement &&
											C.removeChild(C.documentElement);
									break;
								case 5:
								case 6:
								case 4:
								case 17:
									break;
								default:
									throw Error(o(163));
							}
					} catch (F) {
						Ae(t, t.return, F);
					}
					if (((e = t.sibling), e !== null)) {
						(e.return = t.return), (H = e);
						break;
					}
					H = t.return;
				}
		return (Y = ld), (ld = !1), Y;
	}
	function li(e, t, n) {
		var i = t.updateQueue;
		if (((i = i !== null ? i.lastEffect : null), i !== null)) {
			var a = (i = i.next);
			do {
				if ((a.tag & e) === e) {
					var s = a.destroy;
					(a.destroy = void 0), s !== void 0 && Va(t, n, s);
				}
				a = a.next;
			} while (a !== i);
		}
	}
	function Nl(e, t) {
		if (
			((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
		) {
			var n = (t = t.next);
			do {
				if ((n.tag & e) === e) {
					var i = n.create;
					n.destroy = i();
				}
				n = n.next;
			} while (n !== t);
		}
	}
	function Ba(e) {
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
	function od(e) {
		var t = e.alternate;
		t !== null && ((e.alternate = null), od(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 &&
				((t = e.stateNode),
				t !== null &&
					(delete t[Mt],
					delete t[Yr],
					delete t[ia],
					delete t[Jp],
					delete t[eh])),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	function ad(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function sd(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || ad(e.return)) return null;
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
	function Za(e, t, n) {
		var i = e.tag;
		if (i === 5 || i === 6)
			(e = e.stateNode),
				t
					? n.nodeType === 8
						? n.parentNode.insertBefore(e, t)
						: n.insertBefore(e, t)
					: (n.nodeType === 8
							? ((t = n.parentNode), t.insertBefore(e, n))
							: ((t = n), t.appendChild(e)),
						(n = n._reactRootContainer),
						n != null || t.onclick !== null || (t.onclick = rl));
		else if (i !== 4 && ((e = e.child), e !== null))
			for (Za(e, t, n), e = e.sibling; e !== null; )
				Za(e, t, n), (e = e.sibling);
	}
	function Wa(e, t, n) {
		var i = e.tag;
		if (i === 5 || i === 6)
			(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (i !== 4 && ((e = e.child), e !== null))
			for (Wa(e, t, n), e = e.sibling; e !== null; )
				Wa(e, t, n), (e = e.sibling);
	}
	var Ye = null,
		Tt = !1;
	function mn(e, t, n) {
		for (n = n.child; n !== null; ) ud(e, t, n), (n = n.sibling);
	}
	function ud(e, t, n) {
		if (zt && typeof zt.onCommitFiberUnmount == "function")
			try {
				zt.onCommitFiberUnmount(Fi, n);
			} catch {}
		switch (n.tag) {
			case 5:
				Je || fr(n, t);
			case 6:
				var i = Ye,
					a = Tt;
				(Ye = null),
					mn(e, t, n),
					(Ye = i),
					(Tt = a),
					Ye !== null &&
						(Tt
							? ((e = Ye),
								(n = n.stateNode),
								e.nodeType === 8
									? e.parentNode.removeChild(n)
									: e.removeChild(n))
							: Ye.removeChild(n.stateNode));
				break;
			case 18:
				Ye !== null &&
					(Tt
						? ((e = Ye),
							(n = n.stateNode),
							e.nodeType === 8
								? ra(e.parentNode, n)
								: e.nodeType === 1 && ra(e, n),
							Dr(e))
						: ra(Ye, n.stateNode));
				break;
			case 4:
				(i = Ye),
					(a = Tt),
					(Ye = n.stateNode.containerInfo),
					(Tt = !0),
					mn(e, t, n),
					(Ye = i),
					(Tt = a);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (
					!Je &&
					((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
				) {
					a = i = i.next;
					do {
						var s = a,
							p = s.destroy;
						(s = s.tag),
							p !== void 0 && (s & 2 || s & 4) && Va(n, t, p),
							(a = a.next);
					} while (a !== i);
				}
				mn(e, t, n);
				break;
			case 1:
				if (
					!Je &&
					(fr(n, t),
					(i = n.stateNode),
					typeof i.componentWillUnmount == "function")
				)
					try {
						(i.props = n.memoizedProps),
							(i.state = n.memoizedState),
							i.componentWillUnmount();
					} catch (y) {
						Ae(n, t, y);
					}
				mn(e, t, n);
				break;
			case 21:
				mn(e, t, n);
				break;
			case 22:
				n.mode & 1
					? ((Je = (i = Je) || n.memoizedState !== null), mn(e, t, n), (Je = i))
					: mn(e, t, n);
				break;
			default:
				mn(e, t, n);
		}
	}
	function cd(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new vh()),
				t.forEach(function (i) {
					var a = Nh.bind(null, e, i);
					n.has(i) || (n.add(i), i.then(a, a));
				});
		}
	}
	function Rt(e, t) {
		var n = t.deletions;
		if (n !== null)
			for (var i = 0; i < n.length; i++) {
				var a = n[i];
				try {
					var s = e,
						p = t,
						y = p;
					e: for (; y !== null; ) {
						switch (y.tag) {
							case 5:
								(Ye = y.stateNode), (Tt = !1);
								break e;
							case 3:
								(Ye = y.stateNode.containerInfo), (Tt = !0);
								break e;
							case 4:
								(Ye = y.stateNode.containerInfo), (Tt = !0);
								break e;
						}
						y = y.return;
					}
					if (Ye === null) throw Error(o(160));
					ud(s, p, a), (Ye = null), (Tt = !1);
					var _ = a.alternate;
					_ !== null && (_.return = null), (a.return = null);
				} catch (N) {
					Ae(a, t, N);
				}
			}
		if (t.subtreeFlags & 12854)
			for (t = t.child; t !== null; ) dd(t, e), (t = t.sibling);
	}
	function dd(e, t) {
		var n = e.alternate,
			i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if ((Rt(t, e), $t(e), i & 4)) {
					try {
						li(3, e, e.return), Nl(3, e);
					} catch (G) {
						Ae(e, e.return, G);
					}
					try {
						li(5, e, e.return);
					} catch (G) {
						Ae(e, e.return, G);
					}
				}
				break;
			case 1:
				Rt(t, e), $t(e), i & 512 && n !== null && fr(n, n.return);
				break;
			case 5:
				if (
					(Rt(t, e),
					$t(e),
					i & 512 && n !== null && fr(n, n.return),
					e.flags & 32)
				) {
					var a = e.stateNode;
					try {
						Nr(a, "");
					} catch (G) {
						Ae(e, e.return, G);
					}
				}
				if (i & 4 && ((a = e.stateNode), a != null)) {
					var s = e.memoizedProps,
						p = n !== null ? n.memoizedProps : s,
						y = e.type,
						_ = e.updateQueue;
					if (((e.updateQueue = null), _ !== null))
						try {
							y === "input" && s.type === "radio" && s.name != null && Fs(a, s),
								_o(y, p);
							var N = _o(y, s);
							for (p = 0; p < _.length; p += 2) {
								var I = _[p],
									z = _[p + 1];
								I === "style"
									? Ks(a, z)
									: I === "dangerouslySetInnerHTML"
										? Hs(a, z)
										: I === "children"
											? Nr(a, z)
											: ie(a, I, z, N);
							}
							switch (y) {
								case "input":
									vo(a, s);
									break;
								case "textarea":
									Bs(a, s);
									break;
								case "select":
									var O = a._wrapperState.wasMultiple;
									a._wrapperState.wasMultiple = !!s.multiple;
									var Z = s.value;
									Z != null
										? Hn(a, !!s.multiple, Z, !1)
										: O !== !!s.multiple &&
											(s.defaultValue != null
												? Hn(a, !!s.multiple, s.defaultValue, !0)
												: Hn(a, !!s.multiple, s.multiple ? [] : "", !1));
							}
							a[Yr] = s;
						} catch (G) {
							Ae(e, e.return, G);
						}
				}
				break;
			case 6:
				if ((Rt(t, e), $t(e), i & 4)) {
					if (e.stateNode === null) throw Error(o(162));
					(a = e.stateNode), (s = e.memoizedProps);
					try {
						a.nodeValue = s;
					} catch (G) {
						Ae(e, e.return, G);
					}
				}
				break;
			case 3:
				if (
					(Rt(t, e), $t(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
				)
					try {
						Dr(t.containerInfo);
					} catch (G) {
						Ae(e, e.return, G);
					}
				break;
			case 4:
				Rt(t, e), $t(e);
				break;
			case 13:
				Rt(t, e),
					$t(e),
					(a = e.child),
					a.flags & 8192 &&
						((s = a.memoizedState !== null),
						(a.stateNode.isHidden = s),
						!s ||
							(a.alternate !== null && a.alternate.memoizedState !== null) ||
							(Ka = De())),
					i & 4 && cd(e);
				break;
			case 22:
				if (
					((I = n !== null && n.memoizedState !== null),
					e.mode & 1 ? ((Je = (N = Je) || I), Rt(t, e), (Je = N)) : Rt(t, e),
					$t(e),
					i & 8192)
				) {
					if (
						((N = e.memoizedState !== null),
						(e.stateNode.isHidden = N) && !I && e.mode & 1)
					)
						for (H = e, I = e.child; I !== null; ) {
							for (z = H = I; H !== null; ) {
								switch (((O = H), (Z = O.child), O.tag)) {
									case 0:
									case 11:
									case 14:
									case 15:
										li(4, O, O.return);
										break;
									case 1:
										fr(O, O.return);
										var Y = O.stateNode;
										if (typeof Y.componentWillUnmount == "function") {
											(i = O), (n = O.return);
											try {
												(t = i),
													(Y.props = t.memoizedProps),
													(Y.state = t.memoizedState),
													Y.componentWillUnmount();
											} catch (G) {
												Ae(i, n, G);
											}
										}
										break;
									case 5:
										fr(O, O.return);
										break;
									case 22:
										if (O.memoizedState !== null) {
											hd(z);
											continue;
										}
								}
								Z !== null ? ((Z.return = O), (H = Z)) : hd(z);
							}
							I = I.sibling;
						}
					e: for (I = null, z = e; ; ) {
						if (z.tag === 5) {
							if (I === null) {
								I = z;
								try {
									(a = z.stateNode),
										N
											? ((s = a.style),
												typeof s.setProperty == "function"
													? s.setProperty("display", "none", "important")
													: (s.display = "none"))
											: ((y = z.stateNode),
												(_ = z.memoizedProps.style),
												(p =
													_ != null && _.hasOwnProperty("display")
														? _.display
														: null),
												(y.style.display = Qs("display", p)));
								} catch (G) {
									Ae(e, e.return, G);
								}
							}
						} else if (z.tag === 6) {
							if (I === null)
								try {
									z.stateNode.nodeValue = N ? "" : z.memoizedProps;
								} catch (G) {
									Ae(e, e.return, G);
								}
						} else if (
							((z.tag !== 22 && z.tag !== 23) ||
								z.memoizedState === null ||
								z === e) &&
							z.child !== null
						) {
							(z.child.return = z), (z = z.child);
							continue;
						}
						if (z === e) break e;
						for (; z.sibling === null; ) {
							if (z.return === null || z.return === e) break e;
							I === z && (I = null), (z = z.return);
						}
						I === z && (I = null),
							(z.sibling.return = z.return),
							(z = z.sibling);
					}
				}
				break;
			case 19:
				Rt(t, e), $t(e), i & 4 && cd(e);
				break;
			case 21:
				break;
			default:
				Rt(t, e), $t(e);
		}
	}
	function $t(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				e: {
					for (var n = e.return; n !== null; ) {
						if (ad(n)) {
							var i = n;
							break e;
						}
						n = n.return;
					}
					throw Error(o(160));
				}
				switch (i.tag) {
					case 5:
						var a = i.stateNode;
						i.flags & 32 && (Nr(a, ""), (i.flags &= -33));
						var s = sd(e);
						Wa(e, s, a);
						break;
					case 3:
					case 4:
						var p = i.stateNode.containerInfo,
							y = sd(e);
						Za(e, y, p);
						break;
					default:
						throw Error(o(161));
				}
			} catch (_) {
				Ae(e, e.return, _);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function gh(e, t, n) {
		(H = e), fd(e);
	}
	function fd(e, t, n) {
		for (var i = (e.mode & 1) !== 0; H !== null; ) {
			var a = H,
				s = a.child;
			if (a.tag === 22 && i) {
				var p = a.memoizedState !== null || Cl;
				if (!p) {
					var y = a.alternate,
						_ = (y !== null && y.memoizedState !== null) || Je;
					y = Cl;
					var N = Je;
					if (((Cl = p), (Je = _) && !N))
						for (H = a; H !== null; )
							(p = H),
								(_ = p.child),
								p.tag === 22 && p.memoizedState !== null
									? md(a)
									: _ !== null
										? ((_.return = p), (H = _))
										: md(a);
					for (; s !== null; ) (H = s), fd(s), (s = s.sibling);
					(H = a), (Cl = y), (Je = N);
				}
				pd(e);
			} else
				a.subtreeFlags & 8772 && s !== null ? ((s.return = a), (H = s)) : pd(e);
		}
	}
	function pd(e) {
		for (; H !== null; ) {
			var t = H;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								Je || Nl(5, t);
								break;
							case 1:
								var i = t.stateNode;
								if (t.flags & 4 && !Je)
									if (n === null) i.componentDidMount();
									else {
										var a =
											t.elementType === t.type
												? n.memoizedProps
												: Nt(t.type, n.memoizedProps);
										i.componentDidUpdate(
											a,
											n.memoizedState,
											i.__reactInternalSnapshotBeforeUpdate,
										);
									}
								var s = t.updateQueue;
								s !== null && hc(t, s, i);
								break;
							case 3:
								var p = t.updateQueue;
								if (p !== null) {
									if (((n = null), t.child !== null))
										switch (t.child.tag) {
											case 5:
												n = t.child.stateNode;
												break;
											case 1:
												n = t.child.stateNode;
										}
									hc(t, p, n);
								}
								break;
							case 5:
								var y = t.stateNode;
								if (n === null && t.flags & 4) {
									n = y;
									var _ = t.memoizedProps;
									switch (t.type) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											_.autoFocus && n.focus();
											break;
										case "img":
											_.src && (n.src = _.src);
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
									var N = t.alternate;
									if (N !== null) {
										var I = N.memoizedState;
										if (I !== null) {
											var z = I.dehydrated;
											z !== null && Dr(z);
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
								throw Error(o(163));
						}
					Je || (t.flags & 512 && Ba(t));
				} catch (O) {
					Ae(t, t.return, O);
				}
			}
			if (t === e) {
				H = null;
				break;
			}
			if (((n = t.sibling), n !== null)) {
				(n.return = t.return), (H = n);
				break;
			}
			H = t.return;
		}
	}
	function hd(e) {
		for (; H !== null; ) {
			var t = H;
			if (t === e) {
				H = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				(n.return = t.return), (H = n);
				break;
			}
			H = t.return;
		}
	}
	function md(e) {
		for (; H !== null; ) {
			var t = H;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							Nl(4, t);
						} catch (_) {
							Ae(t, n, _);
						}
						break;
					case 1:
						var i = t.stateNode;
						if (typeof i.componentDidMount == "function") {
							var a = t.return;
							try {
								i.componentDidMount();
							} catch (_) {
								Ae(t, a, _);
							}
						}
						var s = t.return;
						try {
							Ba(t);
						} catch (_) {
							Ae(t, s, _);
						}
						break;
					case 5:
						var p = t.return;
						try {
							Ba(t);
						} catch (_) {
							Ae(t, p, _);
						}
				}
			} catch (_) {
				Ae(t, t.return, _);
			}
			if (t === e) {
				H = null;
				break;
			}
			var y = t.sibling;
			if (y !== null) {
				(y.return = t.return), (H = y);
				break;
			}
			H = t.return;
		}
	}
	var xh = Math.ceil,
		Tl = Q.ReactCurrentDispatcher,
		Ha = Q.ReactCurrentOwner,
		_t = Q.ReactCurrentBatchConfig,
		ve = 0,
		Qe = null,
		Be = null,
		Ge = 0,
		mt = 0,
		pr = cn(0),
		We = 0,
		oi = null,
		An = 0,
		Rl = 0,
		Qa = 0,
		ai = null,
		st = null,
		Ka = 0,
		hr = 1 / 0,
		qt = null,
		Pl = !1,
		Ya = null,
		vn = null,
		jl = !1,
		yn = null,
		Ol = 0,
		si = 0,
		Ga = null,
		Ll = -1,
		Il = 0;
	function rt() {
		return ve & 6 ? De() : Ll !== -1 ? Ll : (Ll = De());
	}
	function gn(e) {
		return e.mode & 1
			? ve & 2 && Ge !== 0
				? Ge & -Ge
				: nh.transition !== null
					? (Il === 0 && (Il = su()), Il)
					: ((e = ke),
						e !== 0 ||
							((e = window.event), (e = e === void 0 ? 16 : yu(e.type))),
						e)
			: 1;
	}
	function Pt(e, t, n, i) {
		if (50 < si) throw ((si = 0), (Ga = null), Error(o(185)));
		Lr(e, n, i),
			(!(ve & 2) || e !== Qe) &&
				(e === Qe && (!(ve & 2) && (Rl |= n), We === 4 && xn(e, Ge)),
				ut(e, i),
				n === 1 &&
					ve === 0 &&
					!(t.mode & 1) &&
					((hr = De() + 500), al && fn()));
	}
	function ut(e, t) {
		var n = e.callbackNode;
		np(e, t);
		var i = Bi(e, e === Qe ? Ge : 0);
		if (i === 0)
			n !== null && lu(n), (e.callbackNode = null), (e.callbackPriority = 0);
		else if (((t = i & -i), e.callbackPriority !== t)) {
			if ((n != null && lu(n), t === 1))
				e.tag === 0 ? th(yd.bind(null, e)) : nc(yd.bind(null, e)),
					qp(function () {
						!(ve & 6) && fn();
					}),
					(n = null);
			else {
				switch (uu(i)) {
					case 1:
						n = Ro;
						break;
					case 4:
						n = ou;
						break;
					case 16:
						n = $i;
						break;
					case 536870912:
						n = au;
						break;
					default:
						n = $i;
				}
				n = Cd(n, vd.bind(null, e));
			}
			(e.callbackPriority = t), (e.callbackNode = n);
		}
	}
	function vd(e, t) {
		if (((Ll = -1), (Il = 0), ve & 6)) throw Error(o(327));
		var n = e.callbackNode;
		if (mr() && e.callbackNode !== n) return null;
		var i = Bi(e, e === Qe ? Ge : 0);
		if (i === 0) return null;
		if (i & 30 || i & e.expiredLanes || t) t = zl(e, i);
		else {
			t = i;
			var a = ve;
			ve |= 2;
			var s = xd();
			(Qe !== e || Ge !== t) && ((qt = null), (hr = De() + 500), $n(e, t));
			do
				try {
					kh();
					break;
				} catch (y) {
					gd(e, y);
				}
			while (!0);
			pa(),
				(Tl.current = s),
				(ve = a),
				Be !== null ? (t = 0) : ((Qe = null), (Ge = 0), (t = We));
		}
		if (t !== 0) {
			if (
				(t === 2 && ((a = Po(e)), a !== 0 && ((i = a), (t = Xa(e, a)))),
				t === 1)
			)
				throw ((n = oi), $n(e, 0), xn(e, i), ut(e, De()), n);
			if (t === 6) xn(e, i);
			else {
				if (
					((a = e.current.alternate),
					!(i & 30) &&
						!wh(a) &&
						((t = zl(e, i)),
						t === 2 && ((s = Po(e)), s !== 0 && ((i = s), (t = Xa(e, s)))),
						t === 1))
				)
					throw ((n = oi), $n(e, 0), xn(e, i), ut(e, De()), n);
				switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
					case 0:
					case 1:
						throw Error(o(345));
					case 2:
						Fn(e, st, qt);
						break;
					case 3:
						if (
							(xn(e, i),
							(i & 130023424) === i && ((t = Ka + 500 - De()), 10 < t))
						) {
							if (Bi(e, 0) !== 0) break;
							if (((a = e.suspendedLanes), (a & i) !== i)) {
								rt(), (e.pingedLanes |= e.suspendedLanes & a);
								break;
							}
							e.timeoutHandle = na(Fn.bind(null, e, st, qt), t);
							break;
						}
						Fn(e, st, qt);
						break;
					case 4:
						if ((xn(e, i), (i & 4194240) === i)) break;
						for (t = e.eventTimes, a = -1; 0 < i; ) {
							var p = 31 - St(i);
							(s = 1 << p), (p = t[p]), p > a && (a = p), (i &= ~s);
						}
						if (
							((i = a),
							(i = De() - i),
							(i =
								(120 > i
									? 120
									: 480 > i
										? 480
										: 1080 > i
											? 1080
											: 1920 > i
												? 1920
												: 3e3 > i
													? 3e3
													: 4320 > i
														? 4320
														: 1960 * xh(i / 1960)) - i),
							10 < i)
						) {
							e.timeoutHandle = na(Fn.bind(null, e, st, qt), i);
							break;
						}
						Fn(e, st, qt);
						break;
					case 5:
						Fn(e, st, qt);
						break;
					default:
						throw Error(o(329));
				}
			}
		}
		return ut(e, De()), e.callbackNode === n ? vd.bind(null, e) : null;
	}
	function Xa(e, t) {
		var n = ai;
		return (
			e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
			(e = zl(e, t)),
			e !== 2 && ((t = st), (st = n), t !== null && qa(t)),
			e
		);
	}
	function qa(e) {
		st === null ? (st = e) : st.push.apply(st, e);
	}
	function wh(e) {
		for (var t = e; ; ) {
			if (t.flags & 16384) {
				var n = t.updateQueue;
				if (n !== null && ((n = n.stores), n !== null))
					for (var i = 0; i < n.length; i++) {
						var a = n[i],
							s = a.getSnapshot;
						a = a.value;
						try {
							if (!Et(s(), a)) return !1;
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
	function xn(e, t) {
		for (
			t &= ~Qa,
				t &= ~Rl,
				e.suspendedLanes |= t,
				e.pingedLanes &= ~t,
				e = e.expirationTimes;
			0 < t;

		) {
			var n = 31 - St(t),
				i = 1 << n;
			(e[n] = -1), (t &= ~i);
		}
	}
	function yd(e) {
		if (ve & 6) throw Error(o(327));
		mr();
		var t = Bi(e, 0);
		if (!(t & 1)) return ut(e, De()), null;
		var n = zl(e, t);
		if (e.tag !== 0 && n === 2) {
			var i = Po(e);
			i !== 0 && ((t = i), (n = Xa(e, i)));
		}
		if (n === 1) throw ((n = oi), $n(e, 0), xn(e, t), ut(e, De()), n);
		if (n === 6) throw Error(o(345));
		return (
			(e.finishedWork = e.current.alternate),
			(e.finishedLanes = t),
			Fn(e, st, qt),
			ut(e, De()),
			null
		);
	}
	function ba(e, t) {
		var n = ve;
		ve |= 1;
		try {
			return e(t);
		} finally {
			(ve = n), ve === 0 && ((hr = De() + 500), al && fn());
		}
	}
	function Dn(e) {
		yn !== null && yn.tag === 0 && !(ve & 6) && mr();
		var t = ve;
		ve |= 1;
		var n = _t.transition,
			i = ke;
		try {
			if (((_t.transition = null), (ke = 1), e)) return e();
		} finally {
			(ke = i), (_t.transition = n), (ve = t), !(ve & 6) && fn();
		}
	}
	function Ja() {
		(mt = pr.current), Ne(pr);
	}
	function $n(e, t) {
		(e.finishedWork = null), (e.finishedLanes = 0);
		var n = e.timeoutHandle;
		if ((n !== -1 && ((e.timeoutHandle = -1), Xp(n)), Be !== null))
			for (n = Be.return; n !== null; ) {
				var i = n;
				switch ((sa(i), i.tag)) {
					case 1:
						(i = i.type.childContextTypes), i != null && ll();
						break;
					case 3:
						cr(), Ne(lt), Ne(Xe), _a();
						break;
					case 5:
						xa(i);
						break;
					case 4:
						cr();
						break;
					case 13:
						Ne(Oe);
						break;
					case 19:
						Ne(Oe);
						break;
					case 10:
						ha(i.type._context);
						break;
					case 22:
					case 23:
						Ja();
				}
				n = n.return;
			}
		if (
			((Qe = e),
			(Be = e = wn(e.current, null)),
			(Ge = mt = t),
			(We = 0),
			(oi = null),
			(Qa = Rl = An = 0),
			(st = ai = null),
			In !== null)
		) {
			for (t = 0; t < In.length; t++)
				if (((n = In[t]), (i = n.interleaved), i !== null)) {
					n.interleaved = null;
					var a = i.next,
						s = n.pending;
					if (s !== null) {
						var p = s.next;
						(s.next = a), (i.next = p);
					}
					n.pending = i;
				}
			In = null;
		}
		return e;
	}
	function gd(e, t) {
		do {
			var n = Be;
			try {
				if ((pa(), (yl.current = _l), gl)) {
					for (var i = Le.memoizedState; i !== null; ) {
						var a = i.queue;
						a !== null && (a.pending = null), (i = i.next);
					}
					gl = !1;
				}
				if (
					((Mn = 0),
					(He = Ze = Le = null),
					(ei = !1),
					(ti = 0),
					(Ha.current = null),
					n === null || n.return === null)
				) {
					(We = 1), (oi = t), (Be = null);
					break;
				}
				e: {
					var s = e,
						p = n.return,
						y = n,
						_ = t;
					if (
						((t = Ge),
						(y.flags |= 32768),
						_ !== null && typeof _ == "object" && typeof _.then == "function")
					) {
						var N = _,
							I = y,
							z = I.tag;
						if (!(I.mode & 1) && (z === 0 || z === 11 || z === 15)) {
							var O = I.alternate;
							O
								? ((I.updateQueue = O.updateQueue),
									(I.memoizedState = O.memoizedState),
									(I.lanes = O.lanes))
								: ((I.updateQueue = null), (I.memoizedState = null));
						}
						var Z = Zc(p);
						if (Z !== null) {
							(Z.flags &= -257),
								Wc(Z, p, y, s, t),
								Z.mode & 1 && Bc(s, N, t),
								(t = Z),
								(_ = N);
							var Y = t.updateQueue;
							if (Y === null) {
								var G = new Set();
								G.add(_), (t.updateQueue = G);
							} else Y.add(_);
							break e;
						} else {
							if (!(t & 1)) {
								Bc(s, N, t), es();
								break e;
							}
							_ = Error(o(426));
						}
					} else if (Pe && y.mode & 1) {
						var $e = Zc(p);
						if ($e !== null) {
							!($e.flags & 65536) && ($e.flags |= 256),
								Wc($e, p, y, s, t),
								da(dr(_, y));
							break e;
						}
					}
					(s = _ = dr(_, y)),
						We !== 4 && (We = 2),
						ai === null ? (ai = [s]) : ai.push(s),
						(s = p);
					do {
						switch (s.tag) {
							case 3:
								(s.flags |= 65536), (t &= -t), (s.lanes |= t);
								var E = Uc(s, _, t);
								pc(s, E);
								break e;
							case 1:
								y = _;
								var k = s.type,
									C = s.stateNode;
								if (
									!(s.flags & 128) &&
									(typeof k.getDerivedStateFromError == "function" ||
										(C !== null &&
											typeof C.componentDidCatch == "function" &&
											(vn === null || !vn.has(C))))
								) {
									(s.flags |= 65536), (t &= -t), (s.lanes |= t);
									var F = Vc(s, y, t);
									pc(s, F);
									break e;
								}
						}
						s = s.return;
					} while (s !== null);
				}
				_d(n);
			} catch (X) {
				(t = X), Be === n && n !== null && (Be = n = n.return);
				continue;
			}
			break;
		} while (!0);
	}
	function xd() {
		var e = Tl.current;
		return (Tl.current = _l), e === null ? _l : e;
	}
	function es() {
		(We === 0 || We === 3 || We === 2) && (We = 4),
			Qe === null || (!(An & 268435455) && !(Rl & 268435455)) || xn(Qe, Ge);
	}
	function zl(e, t) {
		var n = ve;
		ve |= 2;
		var i = xd();
		(Qe !== e || Ge !== t) && ((qt = null), $n(e, t));
		do
			try {
				_h();
				break;
			} catch (a) {
				gd(e, a);
			}
		while (!0);
		if ((pa(), (ve = n), (Tl.current = i), Be !== null)) throw Error(o(261));
		return (Qe = null), (Ge = 0), We;
	}
	function _h() {
		for (; Be !== null; ) wd(Be);
	}
	function kh() {
		for (; Be !== null && !Kf(); ) wd(Be);
	}
	function wd(e) {
		var t = Ed(e.alternate, e, mt);
		(e.memoizedProps = e.pendingProps),
			t === null ? _d(e) : (Be = t),
			(Ha.current = null);
	}
	function _d(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (((e = t.return), t.flags & 32768)) {
				if (((n = mh(n, t)), n !== null)) {
					(n.flags &= 32767), (Be = n);
					return;
				}
				if (e !== null)
					(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
				else {
					(We = 6), (Be = null);
					return;
				}
			} else if (((n = hh(n, t, mt)), n !== null)) {
				Be = n;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				Be = t;
				return;
			}
			Be = t = e;
		} while (t !== null);
		We === 0 && (We = 5);
	}
	function Fn(e, t, n) {
		var i = ke,
			a = _t.transition;
		try {
			(_t.transition = null), (ke = 1), Sh(e, t, n, i);
		} finally {
			(_t.transition = a), (ke = i);
		}
		return null;
	}
	function Sh(e, t, n, i) {
		do mr();
		while (yn !== null);
		if (ve & 6) throw Error(o(327));
		n = e.finishedWork;
		var a = e.finishedLanes;
		if (n === null) return null;
		if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
			throw Error(o(177));
		(e.callbackNode = null), (e.callbackPriority = 0);
		var s = n.lanes | n.childLanes;
		if (
			(rp(e, s),
			e === Qe && ((Be = Qe = null), (Ge = 0)),
			(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
				jl ||
				((jl = !0),
				Cd($i, function () {
					return mr(), null;
				})),
			(s = (n.flags & 15990) !== 0),
			n.subtreeFlags & 15990 || s)
		) {
			(s = _t.transition), (_t.transition = null);
			var p = ke;
			ke = 1;
			var y = ve;
			(ve |= 4),
				(Ha.current = null),
				yh(e, n),
				dd(n, e),
				Zp(ea),
				(Hi = !!Jo),
				(ea = Jo = null),
				(e.current = n),
				gh(n),
				Yf(),
				(ve = y),
				(ke = p),
				(_t.transition = s);
		} else e.current = n;
		if (
			(jl && ((jl = !1), (yn = e), (Ol = a)),
			(s = e.pendingLanes),
			s === 0 && (vn = null),
			qf(n.stateNode),
			ut(e, De()),
			t !== null)
		)
			for (i = e.onRecoverableError, n = 0; n < t.length; n++)
				(a = t[n]), i(a.value, { componentStack: a.stack, digest: a.digest });
		if (Pl) throw ((Pl = !1), (e = Ya), (Ya = null), e);
		return (
			Ol & 1 && e.tag !== 0 && mr(),
			(s = e.pendingLanes),
			s & 1 ? (e === Ga ? si++ : ((si = 0), (Ga = e))) : (si = 0),
			fn(),
			null
		);
	}
	function mr() {
		if (yn !== null) {
			var e = uu(Ol),
				t = _t.transition,
				n = ke;
			try {
				if (((_t.transition = null), (ke = 16 > e ? 16 : e), yn === null))
					var i = !1;
				else {
					if (((e = yn), (yn = null), (Ol = 0), ve & 6)) throw Error(o(331));
					var a = ve;
					for (ve |= 4, H = e.current; H !== null; ) {
						var s = H,
							p = s.child;
						if (H.flags & 16) {
							var y = s.deletions;
							if (y !== null) {
								for (var _ = 0; _ < y.length; _++) {
									var N = y[_];
									for (H = N; H !== null; ) {
										var I = H;
										switch (I.tag) {
											case 0:
											case 11:
											case 15:
												li(8, I, s);
										}
										var z = I.child;
										if (z !== null) (z.return = I), (H = z);
										else
											for (; H !== null; ) {
												I = H;
												var O = I.sibling,
													Z = I.return;
												if ((od(I), I === N)) {
													H = null;
													break;
												}
												if (O !== null) {
													(O.return = Z), (H = O);
													break;
												}
												H = Z;
											}
									}
								}
								var Y = s.alternate;
								if (Y !== null) {
									var G = Y.child;
									if (G !== null) {
										Y.child = null;
										do {
											var $e = G.sibling;
											(G.sibling = null), (G = $e);
										} while (G !== null);
									}
								}
								H = s;
							}
						}
						if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (H = p);
						else
							e: for (; H !== null; ) {
								if (((s = H), s.flags & 2048))
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											li(9, s, s.return);
									}
								var E = s.sibling;
								if (E !== null) {
									(E.return = s.return), (H = E);
									break e;
								}
								H = s.return;
							}
					}
					var k = e.current;
					for (H = k; H !== null; ) {
						p = H;
						var C = p.child;
						if (p.subtreeFlags & 2064 && C !== null) (C.return = p), (H = C);
						else
							e: for (p = k; H !== null; ) {
								if (((y = H), y.flags & 2048))
									try {
										switch (y.tag) {
											case 0:
											case 11:
											case 15:
												Nl(9, y);
										}
									} catch (X) {
										Ae(y, y.return, X);
									}
								if (y === p) {
									H = null;
									break e;
								}
								var F = y.sibling;
								if (F !== null) {
									(F.return = y.return), (H = F);
									break e;
								}
								H = y.return;
							}
					}
					if (
						((ve = a),
						fn(),
						zt && typeof zt.onPostCommitFiberRoot == "function")
					)
						try {
							zt.onPostCommitFiberRoot(Fi, e);
						} catch {}
					i = !0;
				}
				return i;
			} finally {
				(ke = n), (_t.transition = t);
			}
		}
		return !1;
	}
	function kd(e, t, n) {
		(t = dr(n, t)),
			(t = Uc(e, t, 1)),
			(e = hn(e, t, 1)),
			(t = rt()),
			e !== null && (Lr(e, 1, t), ut(e, t));
	}
	function Ae(e, t, n) {
		if (e.tag === 3) kd(e, e, n);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					kd(t, e, n);
					break;
				} else if (t.tag === 1) {
					var i = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof i.componentDidCatch == "function" &&
							(vn === null || !vn.has(i)))
					) {
						(e = dr(n, e)),
							(e = Vc(t, e, 1)),
							(t = hn(t, e, 1)),
							(e = rt()),
							t !== null && (Lr(t, 1, e), ut(t, e));
						break;
					}
				}
				t = t.return;
			}
	}
	function Eh(e, t, n) {
		var i = e.pingCache;
		i !== null && i.delete(t),
			(t = rt()),
			(e.pingedLanes |= e.suspendedLanes & n),
			Qe === e &&
				(Ge & n) === n &&
				(We === 4 || (We === 3 && (Ge & 130023424) === Ge && 500 > De() - Ka)
					? $n(e, 0)
					: (Qa |= n)),
			ut(e, t);
	}
	function Sd(e, t) {
		t === 0 &&
			(e.mode & 1
				? ((t = Vi), (Vi <<= 1), !(Vi & 130023424) && (Vi = 4194304))
				: (t = 1));
		var n = rt();
		(e = Yt(e, t)), e !== null && (Lr(e, t, n), ut(e, n));
	}
	function Ch(e) {
		var t = e.memoizedState,
			n = 0;
		t !== null && (n = t.retryLane), Sd(e, n);
	}
	function Nh(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13:
				var i = e.stateNode,
					a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				i = e.stateNode;
				break;
			default:
				throw Error(o(314));
		}
		i !== null && i.delete(t), Sd(e, n);
	}
	var Ed;
	Ed = function (e, t, n) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps || lt.current) at = !0;
			else {
				if (!(e.lanes & n) && !(t.flags & 128)) return (at = !1), ph(e, t, n);
				at = !!(e.flags & 131072);
			}
		else (at = !1), Pe && t.flags & 1048576 && rc(t, ul, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 2:
				var i = t.type;
				El(e, t), (e = t.pendingProps);
				var a = rr(t, Xe.current);
				ur(t, n), (a = Ea(null, t, i, e, a, n));
				var s = Ca();
				return (
					(t.flags |= 1),
					typeof a == "object" &&
					a !== null &&
					typeof a.render == "function" &&
					a.$$typeof === void 0
						? ((t.tag = 1),
							(t.memoizedState = null),
							(t.updateQueue = null),
							ot(i) ? ((s = !0), ol(t)) : (s = !1),
							(t.memoizedState =
								a.state !== null && a.state !== void 0 ? a.state : null),
							ya(t),
							(a.updater = kl),
							(t.stateNode = a),
							(a._reactInternals = t),
							Oa(t, i, e, n),
							(t = Ma(null, t, i, !0, s, n)))
						: ((t.tag = 0), Pe && s && aa(t), nt(null, t, a, n), (t = t.child)),
					t
				);
			case 16:
				i = t.elementType;
				e: {
					switch (
						(El(e, t),
						(e = t.pendingProps),
						(a = i._init),
						(i = a(i._payload)),
						(t.type = i),
						(a = t.tag = Rh(i)),
						(e = Nt(i, e)),
						a)
					) {
						case 0:
							t = za(null, t, i, e, n);
							break e;
						case 1:
							t = Xc(null, t, i, e, n);
							break e;
						case 11:
							t = Hc(null, t, i, e, n);
							break e;
						case 14:
							t = Qc(null, t, i, Nt(i.type, e), n);
							break e;
					}
					throw Error(o(306, i, ""));
				}
				return t;
			case 0:
				return (
					(i = t.type),
					(a = t.pendingProps),
					(a = t.elementType === i ? a : Nt(i, a)),
					za(e, t, i, a, n)
				);
			case 1:
				return (
					(i = t.type),
					(a = t.pendingProps),
					(a = t.elementType === i ? a : Nt(i, a)),
					Xc(e, t, i, a, n)
				);
			case 3:
				e: {
					if ((qc(t), e === null)) throw Error(o(387));
					(i = t.pendingProps),
						(s = t.memoizedState),
						(a = s.element),
						fc(e, t),
						ml(t, i, null, n);
					var p = t.memoizedState;
					if (((i = p.element), s.isDehydrated))
						if (
							((s = {
								element: i,
								isDehydrated: !1,
								cache: p.cache,
								pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
								transitions: p.transitions,
							}),
							(t.updateQueue.baseState = s),
							(t.memoizedState = s),
							t.flags & 256)
						) {
							(a = dr(Error(o(423)), t)), (t = bc(e, t, i, n, a));
							break e;
						} else if (i !== a) {
							(a = dr(Error(o(424)), t)), (t = bc(e, t, i, n, a));
							break e;
						} else
							for (
								ht = un(t.stateNode.containerInfo.firstChild),
									pt = t,
									Pe = !0,
									Ct = null,
									n = cc(t, null, i, n),
									t.child = n;
								n;

							)
								(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
					else {
						if ((or(), i === a)) {
							t = Xt(e, t, n);
							break e;
						}
						nt(e, t, i, n);
					}
					t = t.child;
				}
				return t;
			case 5:
				return (
					mc(t),
					e === null && ca(t),
					(i = t.type),
					(a = t.pendingProps),
					(s = e !== null ? e.memoizedProps : null),
					(p = a.children),
					ta(i, a) ? (p = null) : s !== null && ta(i, s) && (t.flags |= 32),
					Gc(e, t),
					nt(e, t, p, n),
					t.child
				);
			case 6:
				return e === null && ca(t), null;
			case 13:
				return Jc(e, t, n);
			case 4:
				return (
					ga(t, t.stateNode.containerInfo),
					(i = t.pendingProps),
					e === null ? (t.child = ar(t, null, i, n)) : nt(e, t, i, n),
					t.child
				);
			case 11:
				return (
					(i = t.type),
					(a = t.pendingProps),
					(a = t.elementType === i ? a : Nt(i, a)),
					Hc(e, t, i, a, n)
				);
			case 7:
				return nt(e, t, t.pendingProps, n), t.child;
			case 8:
				return nt(e, t, t.pendingProps.children, n), t.child;
			case 12:
				return nt(e, t, t.pendingProps.children, n), t.child;
			case 10:
				e: {
					if (
						((i = t.type._context),
						(a = t.pendingProps),
						(s = t.memoizedProps),
						(p = a.value),
						Ee(fl, i._currentValue),
						(i._currentValue = p),
						s !== null)
					)
						if (Et(s.value, p)) {
							if (s.children === a.children && !lt.current) {
								t = Xt(e, t, n);
								break e;
							}
						} else
							for (s = t.child, s !== null && (s.return = t); s !== null; ) {
								var y = s.dependencies;
								if (y !== null) {
									p = s.child;
									for (var _ = y.firstContext; _ !== null; ) {
										if (_.context === i) {
											if (s.tag === 1) {
												(_ = Gt(-1, n & -n)), (_.tag = 2);
												var N = s.updateQueue;
												if (N !== null) {
													N = N.shared;
													var I = N.pending;
													I === null
														? (_.next = _)
														: ((_.next = I.next), (I.next = _)),
														(N.pending = _);
												}
											}
											(s.lanes |= n),
												(_ = s.alternate),
												_ !== null && (_.lanes |= n),
												ma(s.return, n, t),
												(y.lanes |= n);
											break;
										}
										_ = _.next;
									}
								} else if (s.tag === 10) p = s.type === t.type ? null : s.child;
								else if (s.tag === 18) {
									if (((p = s.return), p === null)) throw Error(o(341));
									(p.lanes |= n),
										(y = p.alternate),
										y !== null && (y.lanes |= n),
										ma(p, n, t),
										(p = s.sibling);
								} else p = s.child;
								if (p !== null) p.return = s;
								else
									for (p = s; p !== null; ) {
										if (p === t) {
											p = null;
											break;
										}
										if (((s = p.sibling), s !== null)) {
											(s.return = p.return), (p = s);
											break;
										}
										p = p.return;
									}
								s = p;
							}
					nt(e, t, a.children, n), (t = t.child);
				}
				return t;
			case 9:
				return (
					(a = t.type),
					(i = t.pendingProps.children),
					ur(t, n),
					(a = xt(a)),
					(i = i(a)),
					(t.flags |= 1),
					nt(e, t, i, n),
					t.child
				);
			case 14:
				return (
					(i = t.type),
					(a = Nt(i, t.pendingProps)),
					(a = Nt(i.type, a)),
					Qc(e, t, i, a, n)
				);
			case 15:
				return Kc(e, t, t.type, t.pendingProps, n);
			case 17:
				return (
					(i = t.type),
					(a = t.pendingProps),
					(a = t.elementType === i ? a : Nt(i, a)),
					El(e, t),
					(t.tag = 1),
					ot(i) ? ((e = !0), ol(t)) : (e = !1),
					ur(t, n),
					$c(t, i, a),
					Oa(t, i, a, n),
					Ma(null, t, i, !0, e, n)
				);
			case 19:
				return td(e, t, n);
			case 22:
				return Yc(e, t, n);
		}
		throw Error(o(156, t.tag));
	};
	function Cd(e, t) {
		return iu(e, t);
	}
	function Th(e, t, n, i) {
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
			(this.mode = i),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function kt(e, t, n, i) {
		return new Th(e, t, n, i);
	}
	function ts(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function Rh(e) {
		if (typeof e == "function") return ts(e) ? 1 : 0;
		if (e != null) {
			if (((e = e.$$typeof), e === Fe)) return 11;
			if (e === tt) return 14;
		}
		return 2;
	}
	function wn(e, t) {
		var n = e.alternate;
		return (
			n === null
				? ((n = kt(e.tag, t, e.key, e.mode)),
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
	function Ml(e, t, n, i, a, s) {
		var p = 2;
		if (((i = e), typeof e == "function")) ts(e) && (p = 1);
		else if (typeof e == "string") p = 5;
		else
			e: switch (e) {
				case oe:
					return Un(n.children, a, s, t);
				case se:
					(p = 8), (a |= 8);
					break;
				case he:
					return (
						(e = kt(12, n, t, a | 2)), (e.elementType = he), (e.lanes = s), e
					);
				case Te:
					return (e = kt(13, n, t, a)), (e.elementType = Te), (e.lanes = s), e;
				case Ue:
					return (e = kt(19, n, t, a)), (e.elementType = Ue), (e.lanes = s), e;
				case Me:
					return Al(n, a, s, t);
				default:
					if (typeof e == "object" && e !== null)
						switch (e.$$typeof) {
							case we:
								p = 10;
								break e;
							case je:
								p = 9;
								break e;
							case Fe:
								p = 11;
								break e;
							case tt:
								p = 14;
								break e;
							case Ve:
								(p = 16), (i = null);
								break e;
						}
					throw Error(o(130, e == null ? e : typeof e, ""));
			}
		return (
			(t = kt(p, n, t, a)), (t.elementType = e), (t.type = i), (t.lanes = s), t
		);
	}
	function Un(e, t, n, i) {
		return (e = kt(7, e, i, t)), (e.lanes = n), e;
	}
	function Al(e, t, n, i) {
		return (
			(e = kt(22, e, i, t)),
			(e.elementType = Me),
			(e.lanes = n),
			(e.stateNode = { isHidden: !1 }),
			e
		);
	}
	function ns(e, t, n) {
		return (e = kt(6, e, null, t)), (e.lanes = n), e;
	}
	function rs(e, t, n) {
		return (
			(t = kt(4, e.children !== null ? e.children : [], e.key, t)),
			(t.lanes = n),
			(t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation,
			}),
			t
		);
	}
	function Ph(e, t, n, i, a) {
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
			(this.eventTimes = jo(0)),
			(this.expirationTimes = jo(-1)),
			(this.entangledLanes =
				this.finishedLanes =
				this.mutableReadLanes =
				this.expiredLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = jo(0)),
			(this.identifierPrefix = i),
			(this.onRecoverableError = a),
			(this.mutableSourceEagerHydrationData = null);
	}
	function is(e, t, n, i, a, s, p, y, _) {
		return (
			(e = new Ph(e, t, n, y, _)),
			t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
			(s = kt(3, null, null, t)),
			(e.current = s),
			(s.stateNode = e),
			(s.memoizedState = {
				element: i,
				isDehydrated: n,
				cache: null,
				transitions: null,
				pendingSuspenseBoundaries: null,
			}),
			ya(s),
			e
		);
	}
	function jh(e, t, n) {
		var i =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: fe,
			key: i == null ? null : "" + i,
			children: e,
			containerInfo: t,
			implementation: n,
		};
	}
	function Nd(e) {
		if (!e) return dn;
		e = e._reactInternals;
		e: {
			if (Rn(e) !== e || e.tag !== 1) throw Error(o(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break e;
					case 1:
						if (ot(t.type)) {
							t = t.stateNode.__reactInternalMemoizedMergedChildContext;
							break e;
						}
				}
				t = t.return;
			} while (t !== null);
			throw Error(o(171));
		}
		if (e.tag === 1) {
			var n = e.type;
			if (ot(n)) return ec(e, n, t);
		}
		return t;
	}
	function Td(e, t, n, i, a, s, p, y, _) {
		return (
			(e = is(n, i, !0, e, a, s, p, y, _)),
			(e.context = Nd(null)),
			(n = e.current),
			(i = rt()),
			(a = gn(n)),
			(s = Gt(i, a)),
			(s.callback = t ?? null),
			hn(n, s, a),
			(e.current.lanes = a),
			Lr(e, a, i),
			ut(e, i),
			e
		);
	}
	function Dl(e, t, n, i) {
		var a = t.current,
			s = rt(),
			p = gn(a);
		return (
			(n = Nd(n)),
			t.context === null ? (t.context = n) : (t.pendingContext = n),
			(t = Gt(s, p)),
			(t.payload = { element: e }),
			(i = i === void 0 ? null : i),
			i !== null && (t.callback = i),
			(e = hn(a, t, p)),
			e !== null && (Pt(e, a, p, s), hl(e, a, p)),
			p
		);
	}
	function $l(e) {
		if (((e = e.current), !e.child)) return null;
		switch (e.child.tag) {
			case 5:
				return e.child.stateNode;
			default:
				return e.child.stateNode;
		}
	}
	function Rd(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ls(e, t) {
		Rd(e, t), (e = e.alternate) && Rd(e, t);
	}
	function Oh() {
		return null;
	}
	var Pd =
		typeof reportError == "function"
			? reportError
			: function (e) {
					console.error(e);
				};
	function os(e) {
		this._internalRoot = e;
	}
	(Fl.prototype.render = os.prototype.render =
		function (e) {
			var t = this._internalRoot;
			if (t === null) throw Error(o(409));
			Dl(e, t, null, null);
		}),
		(Fl.prototype.unmount = os.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (e !== null) {
					this._internalRoot = null;
					var t = e.containerInfo;
					Dn(function () {
						Dl(null, e, null, null);
					}),
						(t[Wt] = null);
				}
			});
	function Fl(e) {
		this._internalRoot = e;
	}
	Fl.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = fu();
			e = { blockedOn: null, target: e, priority: t };
			for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++);
			on.splice(n, 0, e), n === 0 && mu(e);
		}
	};
	function as(e) {
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
	function jd() {}
	function Lh(e, t, n, i, a) {
		if (a) {
			if (typeof i == "function") {
				var s = i;
				i = function () {
					var N = $l(p);
					s.call(N);
				};
			}
			var p = Td(t, i, e, 0, null, !1, !1, "", jd);
			return (
				(e._reactRootContainer = p),
				(e[Wt] = p.current),
				Qr(e.nodeType === 8 ? e.parentNode : e),
				Dn(),
				p
			);
		}
		for (; (a = e.lastChild); ) e.removeChild(a);
		if (typeof i == "function") {
			var y = i;
			i = function () {
				var N = $l(_);
				y.call(N);
			};
		}
		var _ = is(e, 0, !1, null, null, !1, !1, "", jd);
		return (
			(e._reactRootContainer = _),
			(e[Wt] = _.current),
			Qr(e.nodeType === 8 ? e.parentNode : e),
			Dn(function () {
				Dl(t, _, n, i);
			}),
			_
		);
	}
	function Vl(e, t, n, i, a) {
		var s = n._reactRootContainer;
		if (s) {
			var p = s;
			if (typeof a == "function") {
				var y = a;
				a = function () {
					var _ = $l(p);
					y.call(_);
				};
			}
			Dl(t, p, e, a);
		} else p = Lh(n, t, e, a, i);
		return $l(p);
	}
	(cu = function (e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Or(t.pendingLanes);
					n !== 0 &&
						(Oo(t, n | 1), ut(t, De()), !(ve & 6) && ((hr = De() + 500), fn()));
				}
				break;
			case 13:
				Dn(function () {
					var i = Yt(e, 1);
					if (i !== null) {
						var a = rt();
						Pt(i, e, 1, a);
					}
				}),
					ls(e, 1);
		}
	}),
		(Lo = function (e) {
			if (e.tag === 13) {
				var t = Yt(e, 134217728);
				if (t !== null) {
					var n = rt();
					Pt(t, e, 134217728, n);
				}
				ls(e, 134217728);
			}
		}),
		(du = function (e) {
			if (e.tag === 13) {
				var t = gn(e),
					n = Yt(e, t);
				if (n !== null) {
					var i = rt();
					Pt(n, e, t, i);
				}
				ls(e, t);
			}
		}),
		(fu = function () {
			return ke;
		}),
		(pu = function (e, t) {
			var n = ke;
			try {
				return (ke = e), t();
			} finally {
				ke = n;
			}
		}),
		(Eo = function (e, t, n) {
			switch (t) {
				case "input":
					if ((vo(e, n), (t = n.name), n.type === "radio" && t != null)) {
						for (n = e; n.parentNode; ) n = n.parentNode;
						for (
							n = n.querySelectorAll(
								"input[name=" + JSON.stringify("" + t) + '][type="radio"]',
							),
								t = 0;
							t < n.length;
							t++
						) {
							var i = n[t];
							if (i !== e && i.form === e.form) {
								var a = il(i);
								if (!a) throw Error(o(90));
								Ds(i), vo(i, a);
							}
						}
					}
					break;
				case "textarea":
					Bs(e, n);
					break;
				case "select":
					(t = n.value), t != null && Hn(e, !!n.multiple, t, !1);
			}
		}),
		(qs = ba),
		(bs = Dn);
	var Ih = { usingClientEntryPoint: !1, Events: [Gr, tr, il, Gs, Xs, ba] },
		ui = {
			findFiberByHostInstance: Pn,
			bundleType: 0,
			version: "18.3.1",
			rendererPackageName: "react-dom",
		},
		zh = {
			bundleType: ui.bundleType,
			version: ui.version,
			rendererPackageName: ui.rendererPackageName,
			rendererConfig: ui.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: Q.ReactCurrentDispatcher,
			findHostInstanceByFiber: function (e) {
				return (e = nu(e)), e === null ? null : e.stateNode;
			},
			findFiberByHostInstance: ui.findFiberByHostInstance || Oh,
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
		};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Bl.isDisabled && Bl.supportsFiber)
			try {
				(Fi = Bl.inject(zh)), (zt = Bl);
			} catch {}
	}
	return (
		(ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ih),
		(ct.createPortal = function (e, t) {
			var n =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!as(t)) throw Error(o(200));
			return jh(e, t, null, n);
		}),
		(ct.createRoot = function (e, t) {
			if (!as(e)) throw Error(o(299));
			var n = !1,
				i = "",
				a = Pd;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (n = !0),
					t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
					t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
				(t = is(e, 1, !1, null, null, n, !1, i, a)),
				(e[Wt] = t.current),
				Qr(e.nodeType === 8 ? e.parentNode : e),
				new os(t)
			);
		}),
		(ct.findDOMNode = function (e) {
			if (e == null) return null;
			if (e.nodeType === 1) return e;
			var t = e._reactInternals;
			if (t === void 0)
				throw typeof e.render == "function"
					? Error(o(188))
					: ((e = Object.keys(e).join(",")), Error(o(268, e)));
			return (e = nu(t)), (e = e === null ? null : e.stateNode), e;
		}),
		(ct.flushSync = function (e) {
			return Dn(e);
		}),
		(ct.hydrate = function (e, t, n) {
			if (!Ul(t)) throw Error(o(200));
			return Vl(null, e, t, !0, n);
		}),
		(ct.hydrateRoot = function (e, t, n) {
			if (!as(e)) throw Error(o(405));
			var i = (n != null && n.hydratedSources) || null,
				a = !1,
				s = "",
				p = Pd;
			if (
				(n != null &&
					(n.unstable_strictMode === !0 && (a = !0),
					n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
					n.onRecoverableError !== void 0 && (p = n.onRecoverableError)),
				(t = Td(t, null, e, 1, n ?? null, a, !1, s, p)),
				(e[Wt] = t.current),
				Qr(e),
				i)
			)
				for (e = 0; e < i.length; e++)
					(n = i[e]),
						(a = n._getVersion),
						(a = a(n._source)),
						t.mutableSourceEagerHydrationData == null
							? (t.mutableSourceEagerHydrationData = [n, a])
							: t.mutableSourceEagerHydrationData.push(n, a);
			return new Fl(t);
		}),
		(ct.render = function (e, t, n) {
			if (!Ul(t)) throw Error(o(200));
			return Vl(null, e, t, !1, n);
		}),
		(ct.unmountComponentAtNode = function (e) {
			if (!Ul(e)) throw Error(o(40));
			return e._reactRootContainer
				? (Dn(function () {
						Vl(null, null, e, !1, function () {
							(e._reactRootContainer = null), (e[Wt] = null);
						});
					}),
					!0)
				: !1;
		}),
		(ct.unstable_batchedUpdates = ba),
		(ct.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
			if (!Ul(n)) throw Error(o(200));
			if (e == null || e._reactInternals === void 0) throw Error(o(38));
			return Vl(e, t, n, !1, i);
		}),
		(ct.version = "18.3.1-next-f1338f8080-20240426"),
		ct
	);
}
var $d;
function Zh() {
	if ($d) return cs.exports;
	$d = 1;
	function l() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
			} catch (r) {
				console.error(r);
			}
	}
	return l(), (cs.exports = Bh()), cs.exports;
}
var Fd;
function Wh() {
	if (Fd) return Zl;
	Fd = 1;
	var l = Zh();
	return (Zl.createRoot = l.createRoot), (Zl.hydrateRoot = l.hydrateRoot), Zl;
}
var Hh = Wh();
const Qh = uf(Hh);
var di = {},
	Ud;
function Kh() {
	if (Ud) return di;
	(Ud = 1),
		Object.defineProperty(di, "__esModule", { value: !0 }),
		(di.parse = m),
		(di.serialize = v);
	const l = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
		r = /^[\u0021-\u003A\u003C-\u007E]*$/,
		o =
			/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
		c = /^[\u0020-\u003A\u003D-\u007E]*$/,
		u = Object.prototype.toString,
		d = (() => {
			const w = function () {};
			return (w.prototype = Object.create(null)), w;
		})();
	function m(w, T) {
		const P = new d(),
			A = w.length;
		if (A < 2) return P;
		const D = (T == null ? void 0 : T.decode) || g;
		let $ = 0;
		do {
			const V = w.indexOf("=", $);
			if (V === -1) break;
			const ie = w.indexOf(";", $),
				Q = ie === -1 ? A : ie;
			if (V > Q) {
				$ = w.lastIndexOf(";", V - 1) + 1;
				continue;
			}
			const b = h(w, $, V),
				fe = f(w, V, b),
				oe = w.slice(b, fe);
			if (P[oe] === void 0) {
				let se = h(w, V + 1, Q),
					he = f(w, Q, se);
				const we = D(w.slice(se, he));
				P[oe] = we;
			}
			$ = Q + 1;
		} while ($ < A);
		return P;
	}
	function h(w, T, P) {
		do {
			const A = w.charCodeAt(T);
			if (A !== 32 && A !== 9) return T;
		} while (++T < P);
		return P;
	}
	function f(w, T, P) {
		for (; T > P; ) {
			const A = w.charCodeAt(--T);
			if (A !== 32 && A !== 9) return T + 1;
		}
		return P;
	}
	function v(w, T, P) {
		const A = (P == null ? void 0 : P.encode) || encodeURIComponent;
		if (!l.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
		const D = A(T);
		if (!r.test(D)) throw new TypeError(`argument val is invalid: ${T}`);
		let $ = w + "=" + D;
		if (!P) return $;
		if (P.maxAge !== void 0) {
			if (!Number.isInteger(P.maxAge))
				throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);
			$ += "; Max-Age=" + P.maxAge;
		}
		if (P.domain) {
			if (!o.test(P.domain))
				throw new TypeError(`option domain is invalid: ${P.domain}`);
			$ += "; Domain=" + P.domain;
		}
		if (P.path) {
			if (!c.test(P.path))
				throw new TypeError(`option path is invalid: ${P.path}`);
			$ += "; Path=" + P.path;
		}
		if (P.expires) {
			if (!x(P.expires) || !Number.isFinite(P.expires.valueOf()))
				throw new TypeError(`option expires is invalid: ${P.expires}`);
			$ += "; Expires=" + P.expires.toUTCString();
		}
		if (
			(P.httpOnly && ($ += "; HttpOnly"),
			P.secure && ($ += "; Secure"),
			P.partitioned && ($ += "; Partitioned"),
			P.priority)
		)
			switch (
				typeof P.priority == "string" ? P.priority.toLowerCase() : void 0
			) {
				case "low":
					$ += "; Priority=Low";
					break;
				case "medium":
					$ += "; Priority=Medium";
					break;
				case "high":
					$ += "; Priority=High";
					break;
				default:
					throw new TypeError(`option priority is invalid: ${P.priority}`);
			}
		if (P.sameSite)
			switch (
				typeof P.sameSite == "string" ? P.sameSite.toLowerCase() : P.sameSite
			) {
				case !0:
				case "strict":
					$ += "; SameSite=Strict";
					break;
				case "lax":
					$ += "; SameSite=Lax";
					break;
				case "none":
					$ += "; SameSite=None";
					break;
				default:
					throw new TypeError(`option sameSite is invalid: ${P.sameSite}`);
			}
		return $;
	}
	function g(w) {
		if (w.indexOf("%") === -1) return w;
		try {
			return decodeURIComponent(w);
		} catch {
			return w;
		}
	}
	function x(w) {
		return u.call(w) === "[object Date]";
	}
	return di;
}
Kh();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Vd = "popstate";
function Yh(l = {}) {
	function r(c, u) {
		let { pathname: d, search: m, hash: h } = c.location;
		return ws(
			"",
			{ pathname: d, search: m, hash: h },
			(u.state && u.state.usr) || null,
			(u.state && u.state.key) || "default",
		);
	}
	function o(c, u) {
		return typeof u == "string" ? u : mi(u);
	}
	return Xh(r, o, null, l);
}
function ze(l, r) {
	if (l === !1 || l === null || typeof l > "u") throw new Error(r);
}
function Lt(l, r) {
	if (!l) {
		typeof console < "u" && console.warn(r);
		try {
			throw new Error(r);
		} catch {}
	}
}
function Gh() {
	return Math.random().toString(36).substring(2, 10);
}
function Bd(l, r) {
	return { usr: l.state, key: l.key, idx: r };
}
function ws(l, r, o = null, c) {
	return {
		pathname: typeof l == "string" ? l : l.pathname,
		search: "",
		hash: "",
		...(typeof r == "string" ? Sr(r) : r),
		state: o,
		key: (r && r.key) || c || Gh(),
	};
}
function mi({ pathname: l = "/", search: r = "", hash: o = "" }) {
	return (
		r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r),
		o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o),
		l
	);
}
function Sr(l) {
	let r = {};
	if (l) {
		let o = l.indexOf("#");
		o >= 0 && ((r.hash = l.substring(o)), (l = l.substring(0, o)));
		let c = l.indexOf("?");
		c >= 0 && ((r.search = l.substring(c)), (l = l.substring(0, c))),
			l && (r.pathname = l);
	}
	return r;
}
function Xh(l, r, o, c = {}) {
	let { window: u = document.defaultView, v5Compat: d = !1 } = c,
		m = u.history,
		h = "POP",
		f = null,
		v = g();
	v == null && ((v = 0), m.replaceState({ ...m.state, idx: v }, ""));
	function g() {
		return (m.state || { idx: null }).idx;
	}
	function x() {
		h = "POP";
		let D = g(),
			$ = D == null ? null : D - v;
		(v = D), f && f({ action: h, location: A.location, delta: $ });
	}
	function w(D, $) {
		h = "PUSH";
		let V = ws(A.location, D, $);
		v = g() + 1;
		let ie = Bd(V, v),
			Q = A.createHref(V);
		try {
			m.pushState(ie, "", Q);
		} catch (b) {
			if (b instanceof DOMException && b.name === "DataCloneError") throw b;
			u.location.assign(Q);
		}
		d && f && f({ action: h, location: A.location, delta: 1 });
	}
	function T(D, $) {
		h = "REPLACE";
		let V = ws(A.location, D, $);
		v = g();
		let ie = Bd(V, v),
			Q = A.createHref(V);
		m.replaceState(ie, "", Q),
			d && f && f({ action: h, location: A.location, delta: 0 });
	}
	function P(D) {
		let $ = u.location.origin !== "null" ? u.location.origin : u.location.href,
			V = typeof D == "string" ? D : mi(D);
		return (
			(V = V.replace(/ $/, "%20")),
			ze(
				$,
				`No window.location.(origin|href) available to create URL for href: ${V}`,
			),
			new URL(V, $)
		);
	}
	let A = {
		get action() {
			return h;
		},
		get location() {
			return l(u, m);
		},
		listen(D) {
			if (f) throw new Error("A history only accepts one active listener");
			return (
				u.addEventListener(Vd, x),
				(f = D),
				() => {
					u.removeEventListener(Vd, x), (f = null);
				}
			);
		},
		createHref(D) {
			return r(u, D);
		},
		createURL: P,
		encodeLocation(D) {
			let $ = P(D);
			return { pathname: $.pathname, search: $.search, hash: $.hash };
		},
		push: w,
		replace: T,
		go(D) {
			return m.go(D);
		},
	};
	return A;
}
function cf(l, r, o = "/") {
	return qh(l, r, o, !1);
}
function qh(l, r, o, c) {
	let u = typeof r == "string" ? Sr(r) : r,
		d = kn(u.pathname || "/", o);
	if (d == null) return null;
	let m = df(l);
	bh(m);
	let h = null;
	for (let f = 0; h == null && f < m.length; ++f) {
		let v = um(d);
		h = am(m[f], v, c);
	}
	return h;
}
function df(l, r = [], o = [], c = "") {
	let u = (d, m, h) => {
		let f = {
			relativePath: h === void 0 ? d.path || "" : h,
			caseSensitive: d.caseSensitive === !0,
			childrenIndex: m,
			route: d,
		};
		f.relativePath.startsWith("/") &&
			(ze(
				f.relativePath.startsWith(c),
				`Absolute route path "${f.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
			),
			(f.relativePath = f.relativePath.slice(c.length)));
		let v = en([c, f.relativePath]),
			g = o.concat(f);
		d.children &&
			d.children.length > 0 &&
			(ze(
				d.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${v}".`,
			),
			df(d.children, r, g, v)),
			!(d.path == null && !d.index) &&
				r.push({ path: v, score: lm(v, d.index), routesMeta: g });
	};
	return (
		l.forEach((d, m) => {
			var h;
			if (d.path === "" || !((h = d.path) != null && h.includes("?"))) u(d, m);
			else for (let f of ff(d.path)) u(d, m, f);
		}),
		r
	);
}
function ff(l) {
	let r = l.split("/");
	if (r.length === 0) return [];
	let [o, ...c] = r,
		u = o.endsWith("?"),
		d = o.replace(/\?$/, "");
	if (c.length === 0) return u ? [d, ""] : [d];
	let m = ff(c.join("/")),
		h = [];
	return (
		h.push(...m.map((f) => (f === "" ? d : [d, f].join("/")))),
		u && h.push(...m),
		h.map((f) => (l.startsWith("/") && f === "" ? "/" : f))
	);
}
function bh(l) {
	l.sort((r, o) =>
		r.score !== o.score
			? o.score - r.score
			: om(
					r.routesMeta.map((c) => c.childrenIndex),
					o.routesMeta.map((c) => c.childrenIndex),
				),
	);
}
var Jh = /^:[\w-]+$/,
	em = 3,
	tm = 2,
	nm = 1,
	rm = 10,
	im = -2,
	Zd = (l) => l === "*";
function lm(l, r) {
	let o = l.split("/"),
		c = o.length;
	return (
		o.some(Zd) && (c += im),
		r && (c += tm),
		o
			.filter((u) => !Zd(u))
			.reduce((u, d) => u + (Jh.test(d) ? em : d === "" ? nm : rm), c)
	);
}
function om(l, r) {
	return l.length === r.length && l.slice(0, -1).every((c, u) => c === r[u])
		? l[l.length - 1] - r[r.length - 1]
		: 0;
}
function am(l, r, o = !1) {
	let { routesMeta: c } = l,
		u = {},
		d = "/",
		m = [];
	for (let h = 0; h < c.length; ++h) {
		let f = c[h],
			v = h === c.length - 1,
			g = d === "/" ? r : r.slice(d.length) || "/",
			x = to(
				{ path: f.relativePath, caseSensitive: f.caseSensitive, end: v },
				g,
			),
			w = f.route;
		if (
			(!x &&
				v &&
				o &&
				!c[c.length - 1].route.index &&
				(x = to(
					{ path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 },
					g,
				)),
			!x)
		)
			return null;
		Object.assign(u, x.params),
			m.push({
				params: u,
				pathname: en([d, x.pathname]),
				pathnameBase: pm(en([d, x.pathnameBase])),
				route: w,
			}),
			x.pathnameBase !== "/" && (d = en([d, x.pathnameBase]));
	}
	return m;
}
function to(l, r) {
	typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
	let [o, c] = sm(l.path, l.caseSensitive, l.end),
		u = r.match(o);
	if (!u) return null;
	let d = u[0],
		m = d.replace(/(.)\/+$/, "$1"),
		h = u.slice(1);
	return {
		params: c.reduce((v, { paramName: g, isOptional: x }, w) => {
			if (g === "*") {
				let P = h[w] || "";
				m = d.slice(0, d.length - P.length).replace(/(.)\/+$/, "$1");
			}
			const T = h[w];
			return (
				x && !T ? (v[g] = void 0) : (v[g] = (T || "").replace(/%2F/g, "/")), v
			);
		}, {}),
		pathname: d,
		pathnameBase: m,
		pattern: l,
	};
}
function sm(l, r = !1, o = !0) {
	Lt(
		l === "*" || !l.endsWith("*") || l.endsWith("/*"),
		`Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`,
	);
	let c = [],
		u =
			"^" +
			l
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(m, h, f) => (
						c.push({ paramName: h, isOptional: f != null }),
						f ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		l.endsWith("*")
			? (c.push({ paramName: "*" }),
				(u += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: o
				? (u += "\\/*$")
				: l !== "" && l !== "/" && (u += "(?:(?=\\/|$))"),
		[new RegExp(u, r ? void 0 : "i"), c]
	);
}
function um(l) {
	try {
		return l
			.split("/")
			.map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
			.join("/");
	} catch (r) {
		return (
			Lt(
				!1,
				`The URL path "${l}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
			),
			l
		);
	}
}
function kn(l, r) {
	if (r === "/") return l;
	if (!l.toLowerCase().startsWith(r.toLowerCase())) return null;
	let o = r.endsWith("/") ? r.length - 1 : r.length,
		c = l.charAt(o);
	return c && c !== "/" ? null : l.slice(o) || "/";
}
function cm(l, r = "/") {
	let {
		pathname: o,
		search: c = "",
		hash: u = "",
	} = typeof l == "string" ? Sr(l) : l;
	return {
		pathname: o ? (o.startsWith("/") ? o : dm(o, r)) : r,
		search: hm(c),
		hash: mm(u),
	};
}
function dm(l, r) {
	let o = r.replace(/\/+$/, "").split("/");
	return (
		l.split("/").forEach((u) => {
			u === ".." ? o.length > 1 && o.pop() : u !== "." && o.push(u);
		}),
		o.length > 1 ? o.join("/") : "/"
	);
}
function ps(l, r, o, c) {
	return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function fm(l) {
	return l.filter(
		(r, o) => o === 0 || (r.route.path && r.route.path.length > 0),
	);
}
function pf(l) {
	let r = fm(l);
	return r.map((o, c) => (c === r.length - 1 ? o.pathname : o.pathnameBase));
}
function hf(l, r, o, c = !1) {
	let u;
	typeof l == "string"
		? (u = Sr(l))
		: ((u = { ...l }),
			ze(
				!u.pathname || !u.pathname.includes("?"),
				ps("?", "pathname", "search", u),
			),
			ze(
				!u.pathname || !u.pathname.includes("#"),
				ps("#", "pathname", "hash", u),
			),
			ze(!u.search || !u.search.includes("#"), ps("#", "search", "hash", u)));
	let d = l === "" || u.pathname === "",
		m = d ? "/" : u.pathname,
		h;
	if (m == null) h = o;
	else {
		let x = r.length - 1;
		if (!c && m.startsWith("..")) {
			let w = m.split("/");
			for (; w[0] === ".."; ) w.shift(), (x -= 1);
			u.pathname = w.join("/");
		}
		h = x >= 0 ? r[x] : "/";
	}
	let f = cm(u, h),
		v = m && m !== "/" && m.endsWith("/"),
		g = (d || m === ".") && o.endsWith("/");
	return !f.pathname.endsWith("/") && (v || g) && (f.pathname += "/"), f;
}
var en = (l) => l.join("/").replace(/\/\/+/g, "/"),
	pm = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"),
	hm = (l) => (!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l),
	mm = (l) => (!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l);
function vm(l) {
	return (
		l != null &&
		typeof l.status == "number" &&
		typeof l.statusText == "string" &&
		typeof l.internal == "boolean" &&
		"data" in l
	);
}
var mf = ["POST", "PUT", "PATCH", "DELETE"];
new Set(mf);
var ym = ["GET", ...mf];
new Set(ym);
var Er = R.createContext(null);
Er.displayName = "DataRouter";
var co = R.createContext(null);
co.displayName = "DataRouterState";
var vf = R.createContext({ isTransitioning: !1 });
vf.displayName = "ViewTransition";
var gm = R.createContext(new Map());
gm.displayName = "Fetchers";
var xm = R.createContext(null);
xm.displayName = "Await";
var Bt = R.createContext(null);
Bt.displayName = "Navigation";
var Pi = R.createContext(null);
Pi.displayName = "Location";
var Zt = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Zt.displayName = "Route";
var Ps = R.createContext(null);
Ps.displayName = "RouteError";
function wm(l, { relative: r } = {}) {
	ze(
		ji(),
		"useHref() may be used only in the context of a <Router> component.",
	);
	let { basename: o, navigator: c } = R.useContext(Bt),
		{ hash: u, pathname: d, search: m } = Oi(l, { relative: r }),
		h = d;
	return (
		o !== "/" && (h = d === "/" ? o : en([o, d])),
		c.createHref({ pathname: h, search: m, hash: u })
	);
}
function ji() {
	return R.useContext(Pi) != null;
}
function Tn() {
	return (
		ze(
			ji(),
			"useLocation() may be used only in the context of a <Router> component.",
		),
		R.useContext(Pi).location
	);
}
var yf =
	"You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gf(l) {
	R.useContext(Bt).static || R.useLayoutEffect(l);
}
function xf() {
	let { isDataRoute: l } = R.useContext(Zt);
	return l ? Im() : _m();
}
function _m() {
	ze(
		ji(),
		"useNavigate() may be used only in the context of a <Router> component.",
	);
	let l = R.useContext(Er),
		{ basename: r, navigator: o } = R.useContext(Bt),
		{ matches: c } = R.useContext(Zt),
		{ pathname: u } = Tn(),
		d = JSON.stringify(pf(c)),
		m = R.useRef(!1);
	return (
		gf(() => {
			m.current = !0;
		}),
		R.useCallback(
			(f, v = {}) => {
				if ((Lt(m.current, yf), !m.current)) return;
				if (typeof f == "number") {
					o.go(f);
					return;
				}
				let g = hf(f, JSON.parse(d), u, v.relative === "path");
				l == null &&
					r !== "/" &&
					(g.pathname = g.pathname === "/" ? r : en([r, g.pathname])),
					(v.replace ? o.replace : o.push)(g, v.state, v);
			},
			[r, o, d, u, l],
		)
	);
}
R.createContext(null);
function Ig() {
	let { matches: l } = R.useContext(Zt),
		r = l[l.length - 1];
	return r ? r.params : {};
}
function Oi(l, { relative: r } = {}) {
	let { matches: o } = R.useContext(Zt),
		{ pathname: c } = Tn(),
		u = JSON.stringify(pf(o));
	return R.useMemo(() => hf(l, JSON.parse(u), c, r === "path"), [l, u, c, r]);
}
function km(l, r) {
	return wf(l, r);
}
function wf(l, r, o, c) {
	var $;
	ze(
		ji(),
		"useRoutes() may be used only in the context of a <Router> component.",
	);
	let { navigator: u } = R.useContext(Bt),
		{ matches: d } = R.useContext(Zt),
		m = d[d.length - 1],
		h = m ? m.params : {},
		f = m ? m.pathname : "/",
		v = m ? m.pathnameBase : "/",
		g = m && m.route;
	{
		let V = (g && g.path) || "";
		_f(
			f,
			!g || V.endsWith("*") || V.endsWith("*?"),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`,
		);
	}
	let x = Tn(),
		w;
	if (r) {
		let V = typeof r == "string" ? Sr(r) : r;
		ze(
			v === "/" || (($ = V.pathname) == null ? void 0 : $.startsWith(v)),
			`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${V.pathname}" was given in the \`location\` prop.`,
		),
			(w = V);
	} else w = x;
	let T = w.pathname || "/",
		P = T;
	if (v !== "/") {
		let V = v.replace(/^\//, "").split("/");
		P = "/" + T.replace(/^\//, "").split("/").slice(V.length).join("/");
	}
	let A = cf(l, { pathname: P });
	Lt(
		g || A != null,
		`No routes matched location "${w.pathname}${w.search}${w.hash}" `,
	),
		Lt(
			A == null ||
				A[A.length - 1].route.element !== void 0 ||
				A[A.length - 1].route.Component !== void 0 ||
				A[A.length - 1].route.lazy !== void 0,
			`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
		);
	let D = Tm(
		A &&
			A.map((V) =>
				Object.assign({}, V, {
					params: Object.assign({}, h, V.params),
					pathname: en([
						v,
						u.encodeLocation
							? u.encodeLocation(V.pathname).pathname
							: V.pathname,
					]),
					pathnameBase:
						V.pathnameBase === "/"
							? v
							: en([
									v,
									u.encodeLocation
										? u.encodeLocation(V.pathnameBase).pathname
										: V.pathnameBase,
								]),
				}),
			),
		d,
		o,
		c,
	);
	return r && D
		? R.createElement(
				Pi.Provider,
				{
					value: {
						location: {
							pathname: "/",
							search: "",
							hash: "",
							state: null,
							key: "default",
							...w,
						},
						navigationType: "POP",
					},
				},
				D,
			)
		: D;
}
function Sm() {
	let l = Lm(),
		r = vm(l)
			? `${l.status} ${l.statusText}`
			: l instanceof Error
				? l.message
				: JSON.stringify(l),
		o = l instanceof Error ? l.stack : null,
		c = "rgba(200,200,200, 0.5)",
		u = { padding: "0.5rem", backgroundColor: c },
		d = { padding: "2px 4px", backgroundColor: c },
		m = null;
	return (
		console.error("Error handled by React Router default ErrorBoundary:", l),
		(m = R.createElement(
			R.Fragment,
			null,
			R.createElement("p", null, "💿 Hey developer 👋"),
			R.createElement(
				"p",
				null,
				"You can provide a way better UX than this when your app throws errors by providing your own ",
				R.createElement("code", { style: d }, "ErrorBoundary"),
				" or",
				" ",
				R.createElement("code", { style: d }, "errorElement"),
				" prop on your route.",
			),
		)),
		R.createElement(
			R.Fragment,
			null,
			R.createElement("h2", null, "Unexpected Application Error!"),
			R.createElement("h3", { style: { fontStyle: "italic" } }, r),
			o ? R.createElement("pre", { style: u }, o) : null,
			m,
		)
	);
}
var Em = R.createElement(Sm, null),
	Cm = class extends R.Component {
		constructor(l) {
			super(l),
				(this.state = {
					location: l.location,
					revalidation: l.revalidation,
					error: l.error,
				});
		}
		static getDerivedStateFromError(l) {
			return { error: l };
		}
		static getDerivedStateFromProps(l, r) {
			return r.location !== l.location ||
				(r.revalidation !== "idle" && l.revalidation === "idle")
				? { error: l.error, location: l.location, revalidation: l.revalidation }
				: {
						error: l.error !== void 0 ? l.error : r.error,
						location: r.location,
						revalidation: l.revalidation || r.revalidation,
					};
		}
		componentDidCatch(l, r) {
			console.error(
				"React Router caught the following error during render",
				l,
				r,
			);
		}
		render() {
			return this.state.error !== void 0
				? R.createElement(
						Zt.Provider,
						{ value: this.props.routeContext },
						R.createElement(Ps.Provider, {
							value: this.state.error,
							children: this.props.component,
						}),
					)
				: this.props.children;
		}
	};
function Nm({ routeContext: l, match: r, children: o }) {
	let c = R.useContext(Er);
	return (
		c &&
			c.static &&
			c.staticContext &&
			(r.route.errorElement || r.route.ErrorBoundary) &&
			(c.staticContext._deepestRenderedBoundaryId = r.route.id),
		R.createElement(Zt.Provider, { value: l }, o)
	);
}
function Tm(l, r = [], o = null, c = null) {
	if (l == null) {
		if (!o) return null;
		if (o.errors) l = o.matches;
		else if (r.length === 0 && !o.initialized && o.matches.length > 0)
			l = o.matches;
		else return null;
	}
	let u = l,
		d = o == null ? void 0 : o.errors;
	if (d != null) {
		let f = u.findIndex(
			(v) => v.route.id && (d == null ? void 0 : d[v.route.id]) !== void 0,
		);
		ze(
			f >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
		),
			(u = u.slice(0, Math.min(u.length, f + 1)));
	}
	let m = !1,
		h = -1;
	if (o)
		for (let f = 0; f < u.length; f++) {
			let v = u[f];
			if (
				((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (h = f),
				v.route.id)
			) {
				let { loaderData: g, errors: x } = o,
					w =
						v.route.loader &&
						!g.hasOwnProperty(v.route.id) &&
						(!x || x[v.route.id] === void 0);
				if (v.route.lazy || w) {
					(m = !0), h >= 0 ? (u = u.slice(0, h + 1)) : (u = [u[0]]);
					break;
				}
			}
		}
	return u.reduceRight((f, v, g) => {
		let x,
			w = !1,
			T = null,
			P = null;
		o &&
			((x = d && v.route.id ? d[v.route.id] : void 0),
			(T = v.route.errorElement || Em),
			m &&
				(h < 0 && g === 0
					? (_f(
							"route-fallback",
							!1,
							"No `HydrateFallback` element provided to render during initial hydration",
						),
						(w = !0),
						(P = null))
					: h === g &&
						((w = !0), (P = v.route.hydrateFallbackElement || null))));
		let A = r.concat(u.slice(0, g + 1)),
			D = () => {
				let $;
				return (
					x
						? ($ = T)
						: w
							? ($ = P)
							: v.route.Component
								? ($ = R.createElement(v.route.Component, null))
								: v.route.element
									? ($ = v.route.element)
									: ($ = f),
					R.createElement(Nm, {
						match: v,
						routeContext: { outlet: f, matches: A, isDataRoute: o != null },
						children: $,
					})
				);
			};
		return o && (v.route.ErrorBoundary || v.route.errorElement || g === 0)
			? R.createElement(Cm, {
					location: o.location,
					revalidation: o.revalidation,
					component: T,
					error: x,
					children: D(),
					routeContext: { outlet: null, matches: A, isDataRoute: !0 },
				})
			: D();
	}, null);
}
function js(l) {
	return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rm(l) {
	let r = R.useContext(Er);
	return ze(r, js(l)), r;
}
function Pm(l) {
	let r = R.useContext(co);
	return ze(r, js(l)), r;
}
function jm(l) {
	let r = R.useContext(Zt);
	return ze(r, js(l)), r;
}
function Os(l) {
	let r = jm(l),
		o = r.matches[r.matches.length - 1];
	return (
		ze(
			o.route.id,
			`${l} can only be used on routes that contain a unique "id"`,
		),
		o.route.id
	);
}
function Om() {
	return Os("useRouteId");
}
function Lm() {
	var c;
	let l = R.useContext(Ps),
		r = Pm("useRouteError"),
		o = Os("useRouteError");
	return l !== void 0 ? l : (c = r.errors) == null ? void 0 : c[o];
}
function Im() {
	let { router: l } = Rm("useNavigate"),
		r = Os("useNavigate"),
		o = R.useRef(!1);
	return (
		gf(() => {
			o.current = !0;
		}),
		R.useCallback(
			async (u, d = {}) => {
				Lt(o.current, yf),
					o.current &&
						(typeof u == "number"
							? l.navigate(u)
							: await l.navigate(u, { fromRouteId: r, ...d }));
			},
			[l, r],
		)
	);
}
var Wd = {};
function _f(l, r, o) {
	!r && !Wd[l] && ((Wd[l] = !0), Lt(!1, o));
}
R.memo(zm);
function zm({ routes: l, future: r, state: o }) {
	return wf(l, void 0, o, r);
}
function vr(l) {
	ze(
		!1,
		"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
	);
}
function Mm({
	basename: l = "/",
	children: r = null,
	location: o,
	navigationType: c = "POP",
	navigator: u,
	static: d = !1,
}) {
	ze(
		!ji(),
		"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
	);
	let m = l.replace(/^\/*/, "/"),
		h = R.useMemo(
			() => ({ basename: m, navigator: u, static: d, future: {} }),
			[m, u, d],
		);
	typeof o == "string" && (o = Sr(o));
	let {
			pathname: f = "/",
			search: v = "",
			hash: g = "",
			state: x = null,
			key: w = "default",
		} = o,
		T = R.useMemo(() => {
			let P = kn(f, m);
			return P == null
				? null
				: {
						location: { pathname: P, search: v, hash: g, state: x, key: w },
						navigationType: c,
					};
		}, [m, f, v, g, x, w, c]);
	return (
		Lt(
			T != null,
			`<Router basename="${m}"> is not able to match the URL "${f}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
		),
		T == null
			? null
			: R.createElement(
					Bt.Provider,
					{ value: h },
					R.createElement(Pi.Provider, { children: r, value: T }),
				)
	);
}
function Am({ children: l, location: r }) {
	return km(_s(l), r);
}
function _s(l, r = []) {
	let o = [];
	return (
		R.Children.forEach(l, (c, u) => {
			if (!R.isValidElement(c)) return;
			let d = [...r, u];
			if (c.type === R.Fragment) {
				o.push.apply(o, _s(c.props.children, d));
				return;
			}
			ze(
				c.type === vr,
				`[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
			),
				ze(
					!c.props.index || !c.props.children,
					"An index route cannot have child routes.",
				);
			let m = {
				id: c.props.id || d.join("-"),
				caseSensitive: c.props.caseSensitive,
				element: c.props.element,
				Component: c.props.Component,
				index: c.props.index,
				path: c.props.path,
				loader: c.props.loader,
				action: c.props.action,
				hydrateFallbackElement: c.props.hydrateFallbackElement,
				HydrateFallback: c.props.HydrateFallback,
				errorElement: c.props.errorElement,
				ErrorBoundary: c.props.ErrorBoundary,
				hasErrorBoundary:
					c.props.hasErrorBoundary === !0 ||
					c.props.ErrorBoundary != null ||
					c.props.errorElement != null,
				shouldRevalidate: c.props.shouldRevalidate,
				handle: c.props.handle,
				lazy: c.props.lazy,
			};
			c.props.children && (m.children = _s(c.props.children, d)), o.push(m);
		}),
		o
	);
}
var Hl = "get",
	Ql = "application/x-www-form-urlencoded";
function fo(l) {
	return l != null && typeof l.tagName == "string";
}
function Dm(l) {
	return fo(l) && l.tagName.toLowerCase() === "button";
}
function $m(l) {
	return fo(l) && l.tagName.toLowerCase() === "form";
}
function Fm(l) {
	return fo(l) && l.tagName.toLowerCase() === "input";
}
function Um(l) {
	return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Vm(l, r) {
	return l.button === 0 && (!r || r === "_self") && !Um(l);
}
function ks(l = "") {
	return new URLSearchParams(
		typeof l == "string" || Array.isArray(l) || l instanceof URLSearchParams
			? l
			: Object.keys(l).reduce((r, o) => {
					let c = l[o];
					return r.concat(Array.isArray(c) ? c.map((u) => [o, u]) : [[o, c]]);
				}, []),
	);
}
function Bm(l, r) {
	let o = ks(l);
	return (
		r &&
			r.forEach((c, u) => {
				o.has(u) ||
					r.getAll(u).forEach((d) => {
						o.append(u, d);
					});
			}),
		o
	);
}
var Wl = null;
function Zm() {
	if (Wl === null)
		try {
			new FormData(document.createElement("form"), 0), (Wl = !1);
		} catch {
			Wl = !0;
		}
	return Wl;
}
var Wm = new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain",
]);
function hs(l) {
	return l != null && !Wm.has(l)
		? (Lt(
				!1,
				`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ql}"`,
			),
			null)
		: l;
}
function Hm(l, r) {
	let o, c, u, d, m;
	if ($m(l)) {
		let h = l.getAttribute("action");
		(c = h ? kn(h, r) : null),
			(o = l.getAttribute("method") || Hl),
			(u = hs(l.getAttribute("enctype")) || Ql),
			(d = new FormData(l));
	} else if (Dm(l) || (Fm(l) && (l.type === "submit" || l.type === "image"))) {
		let h = l.form;
		if (h == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>',
			);
		let f = l.getAttribute("formaction") || h.getAttribute("action");
		if (
			((c = f ? kn(f, r) : null),
			(o = l.getAttribute("formmethod") || h.getAttribute("method") || Hl),
			(u =
				hs(l.getAttribute("formenctype")) ||
				hs(h.getAttribute("enctype")) ||
				Ql),
			(d = new FormData(h, l)),
			!Zm())
		) {
			let { name: v, type: g, value: x } = l;
			if (g === "image") {
				let w = v ? `${v}.` : "";
				d.append(`${w}x`, "0"), d.append(`${w}y`, "0");
			} else v && d.append(v, x);
		}
	} else {
		if (fo(l))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
			);
		(o = Hl), (c = null), (u = Ql), (m = l);
	}
	return (
		d && u === "text/plain" && ((m = d), (d = void 0)),
		{ action: c, method: o.toLowerCase(), encType: u, formData: d, body: m }
	);
}
function Ls(l, r) {
	if (l === !1 || l === null || typeof l > "u") throw new Error(r);
}
async function Qm(l, r) {
	if (l.id in r) return r[l.id];
	try {
		let o = await import(l.module);
		return (r[l.id] = o), o;
	} catch (o) {
		return (
			console.error(
				`Error loading route module \`${l.module}\`, reloading page...`,
			),
			console.error(o),
			window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		);
	}
}
function Km(l) {
	return l == null
		? !1
		: l.href == null
			? l.rel === "preload" &&
				typeof l.imageSrcSet == "string" &&
				typeof l.imageSizes == "string"
			: typeof l.rel == "string" && typeof l.href == "string";
}
async function Ym(l, r, o) {
	let c = await Promise.all(
		l.map(async (u) => {
			let d = r.routes[u.route.id];
			if (d) {
				let m = await Qm(d, o);
				return m.links ? m.links() : [];
			}
			return [];
		}),
	);
	return bm(
		c
			.flat(1)
			.filter(Km)
			.filter((u) => u.rel === "stylesheet" || u.rel === "preload")
			.map((u) =>
				u.rel === "stylesheet"
					? { ...u, rel: "prefetch", as: "style" }
					: { ...u, rel: "prefetch" },
			),
	);
}
function Hd(l, r, o, c, u, d) {
	let m = (f, v) => (o[v] ? f.route.id !== o[v].route.id : !0),
		h = (f, v) => {
			var g;
			return (
				o[v].pathname !== f.pathname ||
				(((g = o[v].route.path) == null ? void 0 : g.endsWith("*")) &&
					o[v].params["*"] !== f.params["*"])
			);
		};
	return d === "assets"
		? r.filter((f, v) => m(f, v) || h(f, v))
		: d === "data"
			? r.filter((f, v) => {
					var x;
					let g = c.routes[f.route.id];
					if (!g || !g.hasLoader) return !1;
					if (m(f, v) || h(f, v)) return !0;
					if (f.route.shouldRevalidate) {
						let w = f.route.shouldRevalidate({
							currentUrl: new URL(
								u.pathname + u.search + u.hash,
								window.origin,
							),
							currentParams: ((x = o[0]) == null ? void 0 : x.params) || {},
							nextUrl: new URL(l, window.origin),
							nextParams: f.params,
							defaultShouldRevalidate: !0,
						});
						if (typeof w == "boolean") return w;
					}
					return !0;
				})
			: [];
}
function Gm(l, r) {
	return Xm(
		l
			.map((o) => {
				let c = r.routes[o.route.id];
				if (!c) return [];
				let u = [c.module];
				return c.imports && (u = u.concat(c.imports)), u;
			})
			.flat(1),
	);
}
function Xm(l) {
	return [...new Set(l)];
}
function qm(l) {
	let r = {},
		o = Object.keys(l).sort();
	for (let c of o) r[c] = l[c];
	return r;
}
function bm(l, r) {
	let o = new Set();
	return (
		new Set(r),
		l.reduce((c, u) => {
			let d = JSON.stringify(qm(u));
			return o.has(d) || (o.add(d), c.push({ key: d, link: u })), c;
		}, [])
	);
}
function Jm(l) {
	let r =
		typeof l == "string"
			? new URL(
					l,
					typeof window > "u"
						? "server://singlefetch/"
						: window.location.origin,
				)
			: l;
	return (
		r.pathname === "/"
			? (r.pathname = "_root.data")
			: (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
		r
	);
}
function ev() {
	let l = R.useContext(Er);
	return (
		Ls(
			l,
			"You must render this element inside a <DataRouterContext.Provider> element",
		),
		l
	);
}
function tv() {
	let l = R.useContext(co);
	return (
		Ls(
			l,
			"You must render this element inside a <DataRouterStateContext.Provider> element",
		),
		l
	);
}
var Is = R.createContext(void 0);
Is.displayName = "FrameworkContext";
function kf() {
	let l = R.useContext(Is);
	return (
		Ls(l, "You must render this element inside a <HydratedRouter> element"), l
	);
}
function nv(l, r) {
	let o = R.useContext(Is),
		[c, u] = R.useState(!1),
		[d, m] = R.useState(!1),
		{
			onFocus: h,
			onBlur: f,
			onMouseEnter: v,
			onMouseLeave: g,
			onTouchStart: x,
		} = r,
		w = R.useRef(null);
	R.useEffect(() => {
		if ((l === "render" && m(!0), l === "viewport")) {
			let A = ($) => {
					$.forEach((V) => {
						m(V.isIntersecting);
					});
				},
				D = new IntersectionObserver(A, { threshold: 0.5 });
			return (
				w.current && D.observe(w.current),
				() => {
					D.disconnect();
				}
			);
		}
	}, [l]),
		R.useEffect(() => {
			if (c) {
				let A = setTimeout(() => {
					m(!0);
				}, 100);
				return () => {
					clearTimeout(A);
				};
			}
		}, [c]);
	let T = () => {
			u(!0);
		},
		P = () => {
			u(!1), m(!1);
		};
	return o
		? l !== "intent"
			? [d, w, {}]
			: [
					d,
					w,
					{
						onFocus: fi(h, T),
						onBlur: fi(f, P),
						onMouseEnter: fi(v, T),
						onMouseLeave: fi(g, P),
						onTouchStart: fi(x, T),
					},
				]
		: [!1, w, {}];
}
function fi(l, r) {
	return (o) => {
		l && l(o), o.defaultPrevented || r(o);
	};
}
function rv({ page: l, ...r }) {
	let { router: o } = ev(),
		c = R.useMemo(() => cf(o.routes, l, o.basename), [o.routes, l, o.basename]);
	return c
		? R.createElement(lv, { page: l, matches: c, ...r })
		: (console.warn(`Tried to prefetch ${l} but no routes matched.`), null);
}
function iv(l) {
	let { manifest: r, routeModules: o } = kf(),
		[c, u] = R.useState([]);
	return (
		R.useEffect(() => {
			let d = !1;
			return (
				Ym(l, r, o).then((m) => {
					d || u(m);
				}),
				() => {
					d = !0;
				}
			);
		}, [l, r, o]),
		c
	);
}
function lv({ page: l, matches: r, ...o }) {
	let c = Tn(),
		{ manifest: u, routeModules: d } = kf(),
		{ loaderData: m, matches: h } = tv(),
		f = R.useMemo(() => Hd(l, r, h, u, c, "data"), [l, r, h, u, c]),
		v = R.useMemo(() => Hd(l, r, h, u, c, "assets"), [l, r, h, u, c]),
		g = R.useMemo(() => {
			if (l === c.pathname + c.search + c.hash) return [];
			let T = new Set(),
				P = !1;
			if (
				(r.forEach((D) => {
					var V;
					let $ = u.routes[D.route.id];
					!$ ||
						!$.hasLoader ||
						((!f.some((ie) => ie.route.id === D.route.id) &&
							D.route.id in m &&
							(V = d[D.route.id]) != null &&
							V.shouldRevalidate) ||
						$.hasClientLoader
							? (P = !0)
							: T.add(D.route.id));
				}),
				T.size === 0)
			)
				return [];
			let A = Jm(l);
			return (
				P &&
					T.size > 0 &&
					A.searchParams.set(
						"_routes",
						r
							.filter((D) => T.has(D.route.id))
							.map((D) => D.route.id)
							.join(","),
					),
				[A.pathname + A.search]
			);
		}, [m, c, u, f, r, l, d]),
		x = R.useMemo(() => Gm(v, u), [v, u]),
		w = iv(v);
	return R.createElement(
		R.Fragment,
		null,
		g.map((T) =>
			R.createElement("link", {
				key: T,
				rel: "prefetch",
				as: "fetch",
				href: T,
				...o,
			}),
		),
		x.map((T) =>
			R.createElement("link", { key: T, rel: "modulepreload", href: T, ...o }),
		),
		w.map(({ key: T, link: P }) => R.createElement("link", { key: T, ...P })),
	);
}
function ov(...l) {
	return (r) => {
		l.forEach((o) => {
			typeof o == "function" ? o(r) : o != null && (o.current = r);
		});
	};
}
var Sf =
	typeof window < "u" &&
	typeof window.document < "u" &&
	typeof window.document.createElement < "u";
try {
	Sf && (window.__reactRouterVersion = "7.0.2");
} catch {}
function av({ basename: l, children: r, window: o }) {
	let c = R.useRef();
	c.current == null && (c.current = Yh({ window: o, v5Compat: !0 }));
	let u = c.current,
		[d, m] = R.useState({ action: u.action, location: u.location }),
		h = R.useCallback(
			(f) => {
				R.startTransition(() => m(f));
			},
			[m],
		);
	return (
		R.useLayoutEffect(() => u.listen(h), [u, h]),
		R.createElement(Mm, {
			basename: l,
			children: r,
			location: d.location,
			navigationType: d.action,
			navigator: u,
		})
	);
}
var Ef = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	zs = R.forwardRef(function (
		{
			onClick: r,
			discover: o = "render",
			prefetch: c = "none",
			relative: u,
			reloadDocument: d,
			replace: m,
			state: h,
			target: f,
			to: v,
			preventScrollReset: g,
			viewTransition: x,
			...w
		},
		T,
	) {
		let { basename: P } = R.useContext(Bt),
			A = typeof v == "string" && Ef.test(v),
			D,
			$ = !1;
		if (typeof v == "string" && A && ((D = v), Sf))
			try {
				let he = new URL(window.location.href),
					we = v.startsWith("//") ? new URL(he.protocol + v) : new URL(v),
					je = kn(we.pathname, P);
				we.origin === he.origin && je != null
					? (v = je + we.search + we.hash)
					: ($ = !0);
			} catch {
				Lt(
					!1,
					`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
				);
			}
		let V = wm(v, { relative: u }),
			[ie, Q, b] = nv(c, w),
			fe = dv(v, {
				replace: m,
				state: h,
				target: f,
				preventScrollReset: g,
				relative: u,
				viewTransition: x,
			});
		function oe(he) {
			r && r(he), he.defaultPrevented || fe(he);
		}
		let se = R.createElement("a", {
			...w,
			...b,
			href: D || V,
			onClick: $ || d ? r : oe,
			ref: ov(T, Q),
			target: f,
			"data-discover": !A && o === "render" ? "true" : void 0,
		});
		return ie && !A
			? R.createElement(R.Fragment, null, se, R.createElement(rv, { page: V }))
			: se;
	});
zs.displayName = "Link";
var sv = R.forwardRef(function (
	{
		"aria-current": r = "page",
		caseSensitive: o = !1,
		className: c = "",
		end: u = !1,
		style: d,
		to: m,
		viewTransition: h,
		children: f,
		...v
	},
	g,
) {
	let x = Oi(m, { relative: v.relative }),
		w = Tn(),
		T = R.useContext(co),
		{ navigator: P, basename: A } = R.useContext(Bt),
		D = T != null && vv(x) && h === !0,
		$ = P.encodeLocation ? P.encodeLocation(x).pathname : x.pathname,
		V = w.pathname,
		ie =
			T && T.navigation && T.navigation.location
				? T.navigation.location.pathname
				: null;
	o ||
		((V = V.toLowerCase()),
		(ie = ie ? ie.toLowerCase() : null),
		($ = $.toLowerCase())),
		ie && A && (ie = kn(ie, A) || ie);
	const Q = $ !== "/" && $.endsWith("/") ? $.length - 1 : $.length;
	let b = V === $ || (!u && V.startsWith($) && V.charAt(Q) === "/"),
		fe =
			ie != null &&
			(ie === $ || (!u && ie.startsWith($) && ie.charAt($.length) === "/")),
		oe = { isActive: b, isPending: fe, isTransitioning: D },
		se = b ? r : void 0,
		he;
	typeof c == "function"
		? (he = c(oe))
		: (he = [
				c,
				b ? "active" : null,
				fe ? "pending" : null,
				D ? "transitioning" : null,
			]
				.filter(Boolean)
				.join(" "));
	let we = typeof d == "function" ? d(oe) : d;
	return R.createElement(
		zs,
		{
			...v,
			"aria-current": se,
			className: he,
			ref: g,
			style: we,
			to: m,
			viewTransition: h,
		},
		typeof f == "function" ? f(oe) : f,
	);
});
sv.displayName = "NavLink";
var uv = R.forwardRef(
	(
		{
			discover: l = "render",
			fetcherKey: r,
			navigate: o,
			reloadDocument: c,
			replace: u,
			state: d,
			method: m = Hl,
			action: h,
			onSubmit: f,
			relative: v,
			preventScrollReset: g,
			viewTransition: x,
			...w
		},
		T,
	) => {
		let P = hv(),
			A = mv(h, { relative: v }),
			D = m.toLowerCase() === "get" ? "get" : "post",
			$ = typeof h == "string" && Ef.test(h),
			V = (ie) => {
				if ((f && f(ie), ie.defaultPrevented)) return;
				ie.preventDefault();
				let Q = ie.nativeEvent.submitter,
					b = (Q == null ? void 0 : Q.getAttribute("formmethod")) || m;
				P(Q || ie.currentTarget, {
					fetcherKey: r,
					method: b,
					navigate: o,
					replace: u,
					state: d,
					relative: v,
					preventScrollReset: g,
					viewTransition: x,
				});
			};
		return R.createElement("form", {
			ref: T,
			method: D,
			action: A,
			onSubmit: c ? f : V,
			...w,
			"data-discover": !$ && l === "render" ? "true" : void 0,
		});
	},
);
uv.displayName = "Form";
function cv(l) {
	return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cf(l) {
	let r = R.useContext(Er);
	return ze(r, cv(l)), r;
}
function dv(
	l,
	{
		target: r,
		replace: o,
		state: c,
		preventScrollReset: u,
		relative: d,
		viewTransition: m,
	} = {},
) {
	let h = xf(),
		f = Tn(),
		v = Oi(l, { relative: d });
	return R.useCallback(
		(g) => {
			if (Vm(g, r)) {
				g.preventDefault();
				let x = o !== void 0 ? o : mi(f) === mi(v);
				h(l, {
					replace: x,
					state: c,
					preventScrollReset: u,
					relative: d,
					viewTransition: m,
				});
			}
		},
		[f, h, v, o, c, r, l, u, d, m],
	);
}
function zg(l) {
	Lt(
		typeof URLSearchParams < "u",
		"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
	);
	let r = R.useRef(ks(l)),
		o = R.useRef(!1),
		c = Tn(),
		u = R.useMemo(() => Bm(c.search, o.current ? null : r.current), [c.search]),
		d = xf(),
		m = R.useCallback(
			(h, f) => {
				const v = ks(typeof h == "function" ? h(u) : h);
				(o.current = !0), d("?" + v, f);
			},
			[d, u],
		);
	return [u, m];
}
var fv = 0,
	pv = () => `__${String(++fv)}__`;
function hv() {
	let { router: l } = Cf("useSubmit"),
		{ basename: r } = R.useContext(Bt),
		o = Om();
	return R.useCallback(
		async (c, u = {}) => {
			let { action: d, method: m, encType: h, formData: f, body: v } = Hm(c, r);
			if (u.navigate === !1) {
				let g = u.fetcherKey || pv();
				await l.fetch(g, o, u.action || d, {
					preventScrollReset: u.preventScrollReset,
					formData: f,
					body: v,
					formMethod: u.method || m,
					formEncType: u.encType || h,
					flushSync: u.flushSync,
				});
			} else
				await l.navigate(u.action || d, {
					preventScrollReset: u.preventScrollReset,
					formData: f,
					body: v,
					formMethod: u.method || m,
					formEncType: u.encType || h,
					replace: u.replace,
					state: u.state,
					fromRouteId: o,
					flushSync: u.flushSync,
					viewTransition: u.viewTransition,
				});
		},
		[l, r, o],
	);
}
function mv(l, { relative: r } = {}) {
	let { basename: o } = R.useContext(Bt),
		c = R.useContext(Zt);
	ze(c, "useFormAction must be used inside a RouteContext");
	let [u] = c.matches.slice(-1),
		d = { ...Oi(l || ".", { relative: r }) },
		m = Tn();
	if (l == null) {
		d.search = m.search;
		let h = new URLSearchParams(d.search),
			f = h.getAll("index");
		if (f.some((g) => g === "")) {
			h.delete("index"),
				f.filter((x) => x).forEach((x) => h.append("index", x));
			let g = h.toString();
			d.search = g ? `?${g}` : "";
		}
	}
	return (
		(!l || l === ".") &&
			u.route.index &&
			(d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
		o !== "/" && (d.pathname = d.pathname === "/" ? o : en([o, d.pathname])),
		mi(d)
	);
}
function vv(l, r = {}) {
	let o = R.useContext(vf);
	ze(
		o != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
	);
	let { basename: c } = Cf("useViewTransitionState"),
		u = Oi(l, { relative: r.relative });
	if (!o.isTransitioning) return !1;
	let d = kn(o.currentLocation.pathname, c) || o.currentLocation.pathname,
		m = kn(o.nextLocation.pathname, c) || o.nextLocation.pathname;
	return to(u.pathname, m) != null || to(u.pathname, d) != null;
}
new TextEncoder();
const yv = R.createContext({}),
	gv = ({ children: l }) => j.jsx(yv.Provider, { value: {}, children: l });
var me;
(function (l) {
	l.assertEqual = (u) => u;
	function r(u) {}
	l.assertIs = r;
	function o(u) {
		throw new Error();
	}
	(l.assertNever = o),
		(l.arrayToEnum = (u) => {
			const d = {};
			for (const m of u) d[m] = m;
			return d;
		}),
		(l.getValidEnumValues = (u) => {
			const d = l.objectKeys(u).filter((h) => typeof u[u[h]] != "number"),
				m = {};
			for (const h of d) m[h] = u[h];
			return l.objectValues(m);
		}),
		(l.objectValues = (u) =>
			l.objectKeys(u).map(function (d) {
				return u[d];
			})),
		(l.objectKeys =
			typeof Object.keys == "function"
				? (u) => Object.keys(u)
				: (u) => {
						const d = [];
						for (const m in u)
							Object.prototype.hasOwnProperty.call(u, m) && d.push(m);
						return d;
					}),
		(l.find = (u, d) => {
			for (const m of u) if (d(m)) return m;
		}),
		(l.isInteger =
			typeof Number.isInteger == "function"
				? (u) => Number.isInteger(u)
				: (u) => typeof u == "number" && isFinite(u) && Math.floor(u) === u);
	function c(u, d = " | ") {
		return u.map((m) => (typeof m == "string" ? `'${m}'` : m)).join(d);
	}
	(l.joinValues = c),
		(l.jsonStringifyReplacer = (u, d) =>
			typeof d == "bigint" ? d.toString() : d);
})(me || (me = {}));
var Ss;
(function (l) {
	l.mergeShapes = (r, o) => ({ ...r, ...o });
})(Ss || (Ss = {}));
const W = me.arrayToEnum([
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
	Jt = (l) => {
		switch (typeof l) {
			case "undefined":
				return W.undefined;
			case "string":
				return W.string;
			case "number":
				return isNaN(l) ? W.nan : W.number;
			case "boolean":
				return W.boolean;
			case "function":
				return W.function;
			case "bigint":
				return W.bigint;
			case "symbol":
				return W.symbol;
			case "object":
				return Array.isArray(l)
					? W.array
					: l === null
						? W.null
						: l.then &&
							  typeof l.then == "function" &&
							  l.catch &&
							  typeof l.catch == "function"
							? W.promise
							: typeof Map < "u" && l instanceof Map
								? W.map
								: typeof Set < "u" && l instanceof Set
									? W.set
									: typeof Date < "u" && l instanceof Date
										? W.date
										: W.object;
			default:
				return W.unknown;
		}
	},
	M = me.arrayToEnum([
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
	xv = (l) => JSON.stringify(l, null, 2).replace(/"([^"]+)":/g, "$1:");
class vt extends Error {
	get errors() {
		return this.issues;
	}
	constructor(r) {
		super(),
			(this.issues = []),
			(this.addIssue = (c) => {
				this.issues = [...this.issues, c];
			}),
			(this.addIssues = (c = []) => {
				this.issues = [...this.issues, ...c];
			});
		const o = new.target.prototype;
		Object.setPrototypeOf
			? Object.setPrototypeOf(this, o)
			: (this.__proto__ = o),
			(this.name = "ZodError"),
			(this.issues = r);
	}
	format(r) {
		const o =
				r ||
				function (d) {
					return d.message;
				},
			c = { _errors: [] },
			u = (d) => {
				for (const m of d.issues)
					if (m.code === "invalid_union") m.unionErrors.map(u);
					else if (m.code === "invalid_return_type") u(m.returnTypeError);
					else if (m.code === "invalid_arguments") u(m.argumentsError);
					else if (m.path.length === 0) c._errors.push(o(m));
					else {
						let h = c,
							f = 0;
						for (; f < m.path.length; ) {
							const v = m.path[f];
							f === m.path.length - 1
								? ((h[v] = h[v] || { _errors: [] }), h[v]._errors.push(o(m)))
								: (h[v] = h[v] || { _errors: [] }),
								(h = h[v]),
								f++;
						}
					}
			};
		return u(this), c;
	}
	static assert(r) {
		if (!(r instanceof vt)) throw new Error(`Not a ZodError: ${r}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, me.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(r = (o) => o.message) {
		const o = {},
			c = [];
		for (const u of this.issues)
			u.path.length > 0
				? ((o[u.path[0]] = o[u.path[0]] || []), o[u.path[0]].push(r(u)))
				: c.push(r(u));
		return { formErrors: c, fieldErrors: o };
	}
	get formErrors() {
		return this.flatten();
	}
}
vt.create = (l) => new vt(l);
const wr = (l, r) => {
	let o;
	switch (l.code) {
		case M.invalid_type:
			l.received === W.undefined
				? (o = "Required")
				: (o = `Expected ${l.expected}, received ${l.received}`);
			break;
		case M.invalid_literal:
			o = `Invalid literal value, expected ${JSON.stringify(l.expected, me.jsonStringifyReplacer)}`;
			break;
		case M.unrecognized_keys:
			o = `Unrecognized key(s) in object: ${me.joinValues(l.keys, ", ")}`;
			break;
		case M.invalid_union:
			o = "Invalid input";
			break;
		case M.invalid_union_discriminator:
			o = `Invalid discriminator value. Expected ${me.joinValues(l.options)}`;
			break;
		case M.invalid_enum_value:
			o = `Invalid enum value. Expected ${me.joinValues(l.options)}, received '${l.received}'`;
			break;
		case M.invalid_arguments:
			o = "Invalid function arguments";
			break;
		case M.invalid_return_type:
			o = "Invalid function return type";
			break;
		case M.invalid_date:
			o = "Invalid date";
			break;
		case M.invalid_string:
			typeof l.validation == "object"
				? "includes" in l.validation
					? ((o = `Invalid input: must include "${l.validation.includes}"`),
						typeof l.validation.position == "number" &&
							(o = `${o} at one or more positions greater than or equal to ${l.validation.position}`))
					: "startsWith" in l.validation
						? (o = `Invalid input: must start with "${l.validation.startsWith}"`)
						: "endsWith" in l.validation
							? (o = `Invalid input: must end with "${l.validation.endsWith}"`)
							: me.assertNever(l.validation)
				: l.validation !== "regex"
					? (o = `Invalid ${l.validation}`)
					: (o = "Invalid");
			break;
		case M.too_small:
			l.type === "array"
				? (o = `Array must contain ${l.exact ? "exactly" : l.inclusive ? "at least" : "more than"} ${l.minimum} element(s)`)
				: l.type === "string"
					? (o = `String must contain ${l.exact ? "exactly" : l.inclusive ? "at least" : "over"} ${l.minimum} character(s)`)
					: l.type === "number"
						? (o = `Number must be ${l.exact ? "exactly equal to " : l.inclusive ? "greater than or equal to " : "greater than "}${l.minimum}`)
						: l.type === "date"
							? (o = `Date must be ${l.exact ? "exactly equal to " : l.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(l.minimum))}`)
							: (o = "Invalid input");
			break;
		case M.too_big:
			l.type === "array"
				? (o = `Array must contain ${l.exact ? "exactly" : l.inclusive ? "at most" : "less than"} ${l.maximum} element(s)`)
				: l.type === "string"
					? (o = `String must contain ${l.exact ? "exactly" : l.inclusive ? "at most" : "under"} ${l.maximum} character(s)`)
					: l.type === "number"
						? (o = `Number must be ${l.exact ? "exactly" : l.inclusive ? "less than or equal to" : "less than"} ${l.maximum}`)
						: l.type === "bigint"
							? (o = `BigInt must be ${l.exact ? "exactly" : l.inclusive ? "less than or equal to" : "less than"} ${l.maximum}`)
							: l.type === "date"
								? (o = `Date must be ${l.exact ? "exactly" : l.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(l.maximum))}`)
								: (o = "Invalid input");
			break;
		case M.custom:
			o = "Invalid input";
			break;
		case M.invalid_intersection_types:
			o = "Intersection results could not be merged";
			break;
		case M.not_multiple_of:
			o = `Number must be a multiple of ${l.multipleOf}`;
			break;
		case M.not_finite:
			o = "Number must be finite";
			break;
		default:
			(o = r.defaultError), me.assertNever(l);
	}
	return { message: o };
};
let Nf = wr;
function wv(l) {
	Nf = l;
}
function no() {
	return Nf;
}
const ro = (l) => {
		const { data: r, path: o, errorMaps: c, issueData: u } = l,
			d = [...o, ...(u.path || [])],
			m = { ...u, path: d };
		if (u.message !== void 0) return { ...u, path: d, message: u.message };
		let h = "";
		const f = c
			.filter((v) => !!v)
			.slice()
			.reverse();
		for (const v of f) h = v(m, { data: r, defaultError: h }).message;
		return { ...u, path: d, message: h };
	},
	_v = [];
function U(l, r) {
	const o = no(),
		c = ro({
			issueData: r,
			data: l.data,
			path: l.path,
			errorMaps: [
				l.common.contextualErrorMap,
				l.schemaErrorMap,
				o,
				o === wr ? void 0 : wr,
			].filter((u) => !!u),
		});
	l.common.issues.push(c);
}
class et {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		this.value === "valid" && (this.value = "dirty");
	}
	abort() {
		this.value !== "aborted" && (this.value = "aborted");
	}
	static mergeArray(r, o) {
		const c = [];
		for (const u of o) {
			if (u.status === "aborted") return re;
			u.status === "dirty" && r.dirty(), c.push(u.value);
		}
		return { status: r.value, value: c };
	}
	static async mergeObjectAsync(r, o) {
		const c = [];
		for (const u of o) {
			const d = await u.key,
				m = await u.value;
			c.push({ key: d, value: m });
		}
		return et.mergeObjectSync(r, c);
	}
	static mergeObjectSync(r, o) {
		const c = {};
		for (const u of o) {
			const { key: d, value: m } = u;
			if (d.status === "aborted" || m.status === "aborted") return re;
			d.status === "dirty" && r.dirty(),
				m.status === "dirty" && r.dirty(),
				d.value !== "__proto__" &&
					(typeof m.value < "u" || u.alwaysSet) &&
					(c[d.value] = m.value);
		}
		return { status: r.value, value: c };
	}
}
const re = Object.freeze({ status: "aborted" }),
	gr = (l) => ({ status: "dirty", value: l }),
	it = (l) => ({ status: "valid", value: l }),
	Es = (l) => l.status === "aborted",
	Cs = (l) => l.status === "dirty",
	Bn = (l) => l.status === "valid",
	vi = (l) => typeof Promise < "u" && l instanceof Promise;
function io(l, r, o, c) {
	if (typeof r == "function" ? l !== r || !c : !r.has(l))
		throw new TypeError(
			"Cannot read private member from an object whose class did not declare it",
		);
	return r.get(l);
}
function Tf(l, r, o, c, u) {
	if (typeof r == "function" ? l !== r || !u : !r.has(l))
		throw new TypeError(
			"Cannot write private member to an object whose class did not declare it",
		);
	return r.set(l, o), o;
}
var q;
(function (l) {
	(l.errToObj = (r) => (typeof r == "string" ? { message: r } : r || {})),
		(l.toString = (r) =>
			typeof r == "string" ? r : r == null ? void 0 : r.message);
})(q || (q = {}));
var pi, hi;
class Ut {
	constructor(r, o, c, u) {
		(this._cachedPath = []),
			(this.parent = r),
			(this.data = o),
			(this._path = c),
			(this._key = u);
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
const Qd = (l, r) => {
	if (Bn(r)) return { success: !0, data: r.value };
	if (!l.common.issues.length)
		throw new Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			const o = new vt(l.common.issues);
			return (this._error = o), this._error;
		},
	};
};
function ae(l) {
	if (!l) return {};
	const {
		errorMap: r,
		invalid_type_error: o,
		required_error: c,
		description: u,
	} = l;
	if (r && (o || c))
		throw new Error(
			`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
		);
	return r
		? { errorMap: r, description: u }
		: {
				errorMap: (m, h) => {
					var f, v;
					const { message: g } = l;
					return m.code === "invalid_enum_value"
						? { message: g ?? h.defaultError }
						: typeof h.data > "u"
							? {
									message:
										(f = g ?? c) !== null && f !== void 0 ? f : h.defaultError,
								}
							: m.code !== "invalid_type"
								? { message: h.defaultError }
								: {
										message:
											(v = g ?? o) !== null && v !== void 0
												? v
												: h.defaultError,
									};
				},
				description: u,
			};
}
class ue {
	get description() {
		return this._def.description;
	}
	_getType(r) {
		return Jt(r.data);
	}
	_getOrReturnCtx(r, o) {
		return (
			o || {
				common: r.parent.common,
				data: r.data,
				parsedType: Jt(r.data),
				schemaErrorMap: this._def.errorMap,
				path: r.path,
				parent: r.parent,
			}
		);
	}
	_processInputParams(r) {
		return {
			status: new et(),
			ctx: {
				common: r.parent.common,
				data: r.data,
				parsedType: Jt(r.data),
				schemaErrorMap: this._def.errorMap,
				path: r.path,
				parent: r.parent,
			},
		};
	}
	_parseSync(r) {
		const o = this._parse(r);
		if (vi(o)) throw new Error("Synchronous parse encountered promise.");
		return o;
	}
	_parseAsync(r) {
		const o = this._parse(r);
		return Promise.resolve(o);
	}
	parse(r, o) {
		const c = this.safeParse(r, o);
		if (c.success) return c.data;
		throw c.error;
	}
	safeParse(r, o) {
		var c;
		const u = {
				common: {
					issues: [],
					async:
						(c = o == null ? void 0 : o.async) !== null && c !== void 0
							? c
							: !1,
					contextualErrorMap: o == null ? void 0 : o.errorMap,
				},
				path: (o == null ? void 0 : o.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: r,
				parsedType: Jt(r),
			},
			d = this._parseSync({ data: r, path: u.path, parent: u });
		return Qd(u, d);
	}
	"~validate"(r) {
		var o, c;
		const u = {
			common: { issues: [], async: !!this["~standard"].async },
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: r,
			parsedType: Jt(r),
		};
		if (!this["~standard"].async)
			try {
				const d = this._parseSync({ data: r, path: [], parent: u });
				return Bn(d) ? { value: d.value } : { issues: u.common.issues };
			} catch (d) {
				!(
					(c =
						(o = d == null ? void 0 : d.message) === null || o === void 0
							? void 0
							: o.toLowerCase()) === null || c === void 0
				) &&
					c.includes("encountered") &&
					(this["~standard"].async = !0),
					(u.common = { issues: [], async: !0 });
			}
		return this._parseAsync({ data: r, path: [], parent: u }).then((d) =>
			Bn(d) ? { value: d.value } : { issues: u.common.issues },
		);
	}
	async parseAsync(r, o) {
		const c = await this.safeParseAsync(r, o);
		if (c.success) return c.data;
		throw c.error;
	}
	async safeParseAsync(r, o) {
		const c = {
				common: {
					issues: [],
					contextualErrorMap: o == null ? void 0 : o.errorMap,
					async: !0,
				},
				path: (o == null ? void 0 : o.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: r,
				parsedType: Jt(r),
			},
			u = this._parse({ data: r, path: c.path, parent: c }),
			d = await (vi(u) ? u : Promise.resolve(u));
		return Qd(c, d);
	}
	refine(r, o) {
		const c = (u) =>
			typeof o == "string" || typeof o > "u"
				? { message: o }
				: typeof o == "function"
					? o(u)
					: o;
		return this._refinement((u, d) => {
			const m = r(u),
				h = () => d.addIssue({ code: M.custom, ...c(u) });
			return typeof Promise < "u" && m instanceof Promise
				? m.then((f) => (f ? !0 : (h(), !1)))
				: m
					? !0
					: (h(), !1);
		});
	}
	refinement(r, o) {
		return this._refinement((c, u) =>
			r(c) ? !0 : (u.addIssue(typeof o == "function" ? o(c, u) : o), !1),
		);
	}
	_refinement(r) {
		return new It({
			schema: this,
			typeName: ne.ZodEffects,
			effect: { type: "refinement", refinement: r },
		});
	}
	superRefine(r) {
		return this._refinement(r);
	}
	constructor(r) {
		(this.spa = this.safeParseAsync),
			(this._def = r),
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
			(this.isOptional = this.isOptional.bind(this)),
			(this["~standard"] = {
				version: 1,
				vendor: "zod",
				validate: (o) => this["~validate"](o),
			});
	}
	optional() {
		return Ft.create(this, this._def);
	}
	nullable() {
		return Nn.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return Ot.create(this);
	}
	promise() {
		return kr.create(this, this._def);
	}
	or(r) {
		return wi.create([this, r], this._def);
	}
	and(r) {
		return _i.create(this, r, this._def);
	}
	transform(r) {
		return new It({
			...ae(this._def),
			schema: this,
			typeName: ne.ZodEffects,
			effect: { type: "transform", transform: r },
		});
	}
	default(r) {
		const o = typeof r == "function" ? r : () => r;
		return new Ni({
			...ae(this._def),
			innerType: this,
			defaultValue: o,
			typeName: ne.ZodDefault,
		});
	}
	brand() {
		return new Ms({ typeName: ne.ZodBranded, type: this, ...ae(this._def) });
	}
	catch(r) {
		const o = typeof r == "function" ? r : () => r;
		return new Ti({
			...ae(this._def),
			innerType: this,
			catchValue: o,
			typeName: ne.ZodCatch,
		});
	}
	describe(r) {
		const o = this.constructor;
		return new o({ ...this._def, description: r });
	}
	pipe(r) {
		return Li.create(this, r);
	}
	readonly() {
		return Ri.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}
const kv = /^c[^\s-]{8,}$/i,
	Sv = /^[0-9a-z]+$/,
	Ev = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
	Cv =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
	Nv = /^[a-z0-9_-]{21}$/i,
	Tv = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
	Rv =
		/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
	Pv =
		/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
	jv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ms;
const Ov =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	Lv =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	Iv =
		/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
	zv =
		/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	Mv = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	Av = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	Rf =
		"((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
	Dv = new RegExp(`^${Rf}$`);
function Pf(l) {
	let r = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
	return (
		l.precision
			? (r = `${r}\\.\\d{${l.precision}}`)
			: l.precision == null && (r = `${r}(\\.\\d+)?`),
		r
	);
}
function $v(l) {
	return new RegExp(`^${Pf(l)}$`);
}
function jf(l) {
	let r = `${Rf}T${Pf(l)}`;
	const o = [];
	return (
		o.push(l.local ? "Z?" : "Z"),
		l.offset && o.push("([+-]\\d{2}:?\\d{2})"),
		(r = `${r}(${o.join("|")})`),
		new RegExp(`^${r}$`)
	);
}
function Fv(l, r) {
	return !!(
		((r === "v4" || !r) && Ov.test(l)) ||
		((r === "v6" || !r) && Iv.test(l))
	);
}
function Uv(l, r) {
	if (!Tv.test(l)) return !1;
	try {
		const [o] = l.split("."),
			c = o
				.replace(/-/g, "+")
				.replace(/_/g, "/")
				.padEnd(o.length + ((4 - (o.length % 4)) % 4), "="),
			u = JSON.parse(atob(c));
		return !(
			typeof u != "object" ||
			u === null ||
			!u.typ ||
			!u.alg ||
			(r && u.alg !== r)
		);
	} catch {
		return !1;
	}
}
function Vv(l, r) {
	return !!(
		((r === "v4" || !r) && Lv.test(l)) ||
		((r === "v6" || !r) && zv.test(l))
	);
}
class jt extends ue {
	_parse(r) {
		if (
			(this._def.coerce && (r.data = String(r.data)),
			this._getType(r) !== W.string)
		) {
			const d = this._getOrReturnCtx(r);
			return (
				U(d, {
					code: M.invalid_type,
					expected: W.string,
					received: d.parsedType,
				}),
				re
			);
		}
		const c = new et();
		let u;
		for (const d of this._def.checks)
			if (d.kind === "min")
				r.data.length < d.value &&
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						code: M.too_small,
						minimum: d.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: d.message,
					}),
					c.dirty());
			else if (d.kind === "max")
				r.data.length > d.value &&
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						code: M.too_big,
						maximum: d.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: d.message,
					}),
					c.dirty());
			else if (d.kind === "length") {
				const m = r.data.length > d.value,
					h = r.data.length < d.value;
				(m || h) &&
					((u = this._getOrReturnCtx(r, u)),
					m
						? U(u, {
								code: M.too_big,
								maximum: d.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: d.message,
							})
						: h &&
							U(u, {
								code: M.too_small,
								minimum: d.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: d.message,
							}),
					c.dirty());
			} else if (d.kind === "email")
				Pv.test(r.data) ||
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						validation: "email",
						code: M.invalid_string,
						message: d.message,
					}),
					c.dirty());
			else if (d.kind === "emoji")
				ms || (ms = new RegExp(jv, "u")),
					ms.test(r.data) ||
						((u = this._getOrReturnCtx(r, u)),
						U(u, {
							validation: "emoji",
							code: M.invalid_string,
							message: d.message,
						}),
						c.dirty());
			else if (d.kind === "uuid")
				Cv.test(r.data) ||
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						validation: "uuid",
						code: M.invalid_string,
						message: d.message,
					}),
					c.dirty());
			else if (d.kind === "nanoid")
				Nv.test(r.data) ||
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						validation: "nanoid",
						code: M.invalid_string,
						message: d.message,
					}),
					c.dirty());
			else if (d.kind === "cuid")
				kv.test(r.data) ||
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						validation: "cuid",
						code: M.invalid_string,
						message: d.message,
					}),
					c.dirty());
			else if (d.kind === "cuid2")
				Sv.test(r.data) ||
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						validation: "cuid2",
						code: M.invalid_string,
						message: d.message,
					}),
					c.dirty());
			else if (d.kind === "ulid")
				Ev.test(r.data) ||
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						validation: "ulid",
						code: M.invalid_string,
						message: d.message,
					}),
					c.dirty());
			else if (d.kind === "url")
				try {
					new URL(r.data);
				} catch {
					(u = this._getOrReturnCtx(r, u)),
						U(u, {
							validation: "url",
							code: M.invalid_string,
							message: d.message,
						}),
						c.dirty();
				}
			else
				d.kind === "regex"
					? ((d.regex.lastIndex = 0),
						d.regex.test(r.data) ||
							((u = this._getOrReturnCtx(r, u)),
							U(u, {
								validation: "regex",
								code: M.invalid_string,
								message: d.message,
							}),
							c.dirty()))
					: d.kind === "trim"
						? (r.data = r.data.trim())
						: d.kind === "includes"
							? r.data.includes(d.value, d.position) ||
								((u = this._getOrReturnCtx(r, u)),
								U(u, {
									code: M.invalid_string,
									validation: { includes: d.value, position: d.position },
									message: d.message,
								}),
								c.dirty())
							: d.kind === "toLowerCase"
								? (r.data = r.data.toLowerCase())
								: d.kind === "toUpperCase"
									? (r.data = r.data.toUpperCase())
									: d.kind === "startsWith"
										? r.data.startsWith(d.value) ||
											((u = this._getOrReturnCtx(r, u)),
											U(u, {
												code: M.invalid_string,
												validation: { startsWith: d.value },
												message: d.message,
											}),
											c.dirty())
										: d.kind === "endsWith"
											? r.data.endsWith(d.value) ||
												((u = this._getOrReturnCtx(r, u)),
												U(u, {
													code: M.invalid_string,
													validation: { endsWith: d.value },
													message: d.message,
												}),
												c.dirty())
											: d.kind === "datetime"
												? jf(d).test(r.data) ||
													((u = this._getOrReturnCtx(r, u)),
													U(u, {
														code: M.invalid_string,
														validation: "datetime",
														message: d.message,
													}),
													c.dirty())
												: d.kind === "date"
													? Dv.test(r.data) ||
														((u = this._getOrReturnCtx(r, u)),
														U(u, {
															code: M.invalid_string,
															validation: "date",
															message: d.message,
														}),
														c.dirty())
													: d.kind === "time"
														? $v(d).test(r.data) ||
															((u = this._getOrReturnCtx(r, u)),
															U(u, {
																code: M.invalid_string,
																validation: "time",
																message: d.message,
															}),
															c.dirty())
														: d.kind === "duration"
															? Rv.test(r.data) ||
																((u = this._getOrReturnCtx(r, u)),
																U(u, {
																	validation: "duration",
																	code: M.invalid_string,
																	message: d.message,
																}),
																c.dirty())
															: d.kind === "ip"
																? Fv(r.data, d.version) ||
																	((u = this._getOrReturnCtx(r, u)),
																	U(u, {
																		validation: "ip",
																		code: M.invalid_string,
																		message: d.message,
																	}),
																	c.dirty())
																: d.kind === "jwt"
																	? Uv(r.data, d.alg) ||
																		((u = this._getOrReturnCtx(r, u)),
																		U(u, {
																			validation: "jwt",
																			code: M.invalid_string,
																			message: d.message,
																		}),
																		c.dirty())
																	: d.kind === "cidr"
																		? Vv(r.data, d.version) ||
																			((u = this._getOrReturnCtx(r, u)),
																			U(u, {
																				validation: "cidr",
																				code: M.invalid_string,
																				message: d.message,
																			}),
																			c.dirty())
																		: d.kind === "base64"
																			? Mv.test(r.data) ||
																				((u = this._getOrReturnCtx(r, u)),
																				U(u, {
																					validation: "base64",
																					code: M.invalid_string,
																					message: d.message,
																				}),
																				c.dirty())
																			: d.kind === "base64url"
																				? Av.test(r.data) ||
																					((u = this._getOrReturnCtx(r, u)),
																					U(u, {
																						validation: "base64url",
																						code: M.invalid_string,
																						message: d.message,
																					}),
																					c.dirty())
																				: me.assertNever(d);
		return { status: c.value, value: r.data };
	}
	_regex(r, o, c) {
		return this.refinement((u) => r.test(u), {
			validation: o,
			code: M.invalid_string,
			...q.errToObj(c),
		});
	}
	_addCheck(r) {
		return new jt({ ...this._def, checks: [...this._def.checks, r] });
	}
	email(r) {
		return this._addCheck({ kind: "email", ...q.errToObj(r) });
	}
	url(r) {
		return this._addCheck({ kind: "url", ...q.errToObj(r) });
	}
	emoji(r) {
		return this._addCheck({ kind: "emoji", ...q.errToObj(r) });
	}
	uuid(r) {
		return this._addCheck({ kind: "uuid", ...q.errToObj(r) });
	}
	nanoid(r) {
		return this._addCheck({ kind: "nanoid", ...q.errToObj(r) });
	}
	cuid(r) {
		return this._addCheck({ kind: "cuid", ...q.errToObj(r) });
	}
	cuid2(r) {
		return this._addCheck({ kind: "cuid2", ...q.errToObj(r) });
	}
	ulid(r) {
		return this._addCheck({ kind: "ulid", ...q.errToObj(r) });
	}
	base64(r) {
		return this._addCheck({ kind: "base64", ...q.errToObj(r) });
	}
	base64url(r) {
		return this._addCheck({ kind: "base64url", ...q.errToObj(r) });
	}
	jwt(r) {
		return this._addCheck({ kind: "jwt", ...q.errToObj(r) });
	}
	ip(r) {
		return this._addCheck({ kind: "ip", ...q.errToObj(r) });
	}
	cidr(r) {
		return this._addCheck({ kind: "cidr", ...q.errToObj(r) });
	}
	datetime(r) {
		var o, c;
		return typeof r == "string"
			? this._addCheck({
					kind: "datetime",
					precision: null,
					offset: !1,
					local: !1,
					message: r,
				})
			: this._addCheck({
					kind: "datetime",
					precision:
						typeof (r == null ? void 0 : r.precision) > "u"
							? null
							: r == null
								? void 0
								: r.precision,
					offset:
						(o = r == null ? void 0 : r.offset) !== null && o !== void 0
							? o
							: !1,
					local:
						(c = r == null ? void 0 : r.local) !== null && c !== void 0
							? c
							: !1,
					...q.errToObj(r == null ? void 0 : r.message),
				});
	}
	date(r) {
		return this._addCheck({ kind: "date", message: r });
	}
	time(r) {
		return typeof r == "string"
			? this._addCheck({ kind: "time", precision: null, message: r })
			: this._addCheck({
					kind: "time",
					precision:
						typeof (r == null ? void 0 : r.precision) > "u"
							? null
							: r == null
								? void 0
								: r.precision,
					...q.errToObj(r == null ? void 0 : r.message),
				});
	}
	duration(r) {
		return this._addCheck({ kind: "duration", ...q.errToObj(r) });
	}
	regex(r, o) {
		return this._addCheck({ kind: "regex", regex: r, ...q.errToObj(o) });
	}
	includes(r, o) {
		return this._addCheck({
			kind: "includes",
			value: r,
			position: o == null ? void 0 : o.position,
			...q.errToObj(o == null ? void 0 : o.message),
		});
	}
	startsWith(r, o) {
		return this._addCheck({ kind: "startsWith", value: r, ...q.errToObj(o) });
	}
	endsWith(r, o) {
		return this._addCheck({ kind: "endsWith", value: r, ...q.errToObj(o) });
	}
	min(r, o) {
		return this._addCheck({ kind: "min", value: r, ...q.errToObj(o) });
	}
	max(r, o) {
		return this._addCheck({ kind: "max", value: r, ...q.errToObj(o) });
	}
	length(r, o) {
		return this._addCheck({ kind: "length", value: r, ...q.errToObj(o) });
	}
	nonempty(r) {
		return this.min(1, q.errToObj(r));
	}
	trim() {
		return new jt({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }],
		});
	}
	toLowerCase() {
		return new jt({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }],
		});
	}
	toUpperCase() {
		return new jt({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }],
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((r) => r.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((r) => r.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((r) => r.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((r) => r.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((r) => r.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((r) => r.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((r) => r.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((r) => r.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((r) => r.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((r) => r.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((r) => r.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((r) => r.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((r) => r.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((r) => r.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((r) => r.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((r) => r.kind === "base64url");
	}
	get minLength() {
		let r = null;
		for (const o of this._def.checks)
			o.kind === "min" && (r === null || o.value > r) && (r = o.value);
		return r;
	}
	get maxLength() {
		let r = null;
		for (const o of this._def.checks)
			o.kind === "max" && (r === null || o.value < r) && (r = o.value);
		return r;
	}
}
jt.create = (l) => {
	var r;
	return new jt({
		checks: [],
		typeName: ne.ZodString,
		coerce:
			(r = l == null ? void 0 : l.coerce) !== null && r !== void 0 ? r : !1,
		...ae(l),
	});
};
function Bv(l, r) {
	const o = (l.toString().split(".")[1] || "").length,
		c = (r.toString().split(".")[1] || "").length,
		u = o > c ? o : c,
		d = parseInt(l.toFixed(u).replace(".", "")),
		m = parseInt(r.toFixed(u).replace(".", ""));
	return (d % m) / Math.pow(10, u);
}
class Sn extends ue {
	constructor() {
		super(...arguments),
			(this.min = this.gte),
			(this.max = this.lte),
			(this.step = this.multipleOf);
	}
	_parse(r) {
		if (
			(this._def.coerce && (r.data = Number(r.data)),
			this._getType(r) !== W.number)
		) {
			const d = this._getOrReturnCtx(r);
			return (
				U(d, {
					code: M.invalid_type,
					expected: W.number,
					received: d.parsedType,
				}),
				re
			);
		}
		let c;
		const u = new et();
		for (const d of this._def.checks)
			d.kind === "int"
				? me.isInteger(r.data) ||
					((c = this._getOrReturnCtx(r, c)),
					U(c, {
						code: M.invalid_type,
						expected: "integer",
						received: "float",
						message: d.message,
					}),
					u.dirty())
				: d.kind === "min"
					? (d.inclusive ? r.data < d.value : r.data <= d.value) &&
						((c = this._getOrReturnCtx(r, c)),
						U(c, {
							code: M.too_small,
							minimum: d.value,
							type: "number",
							inclusive: d.inclusive,
							exact: !1,
							message: d.message,
						}),
						u.dirty())
					: d.kind === "max"
						? (d.inclusive ? r.data > d.value : r.data >= d.value) &&
							((c = this._getOrReturnCtx(r, c)),
							U(c, {
								code: M.too_big,
								maximum: d.value,
								type: "number",
								inclusive: d.inclusive,
								exact: !1,
								message: d.message,
							}),
							u.dirty())
						: d.kind === "multipleOf"
							? Bv(r.data, d.value) !== 0 &&
								((c = this._getOrReturnCtx(r, c)),
								U(c, {
									code: M.not_multiple_of,
									multipleOf: d.value,
									message: d.message,
								}),
								u.dirty())
							: d.kind === "finite"
								? Number.isFinite(r.data) ||
									((c = this._getOrReturnCtx(r, c)),
									U(c, { code: M.not_finite, message: d.message }),
									u.dirty())
								: me.assertNever(d);
		return { status: u.value, value: r.data };
	}
	gte(r, o) {
		return this.setLimit("min", r, !0, q.toString(o));
	}
	gt(r, o) {
		return this.setLimit("min", r, !1, q.toString(o));
	}
	lte(r, o) {
		return this.setLimit("max", r, !0, q.toString(o));
	}
	lt(r, o) {
		return this.setLimit("max", r, !1, q.toString(o));
	}
	setLimit(r, o, c, u) {
		return new Sn({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: r, value: o, inclusive: c, message: q.toString(u) },
			],
		});
	}
	_addCheck(r) {
		return new Sn({ ...this._def, checks: [...this._def.checks, r] });
	}
	int(r) {
		return this._addCheck({ kind: "int", message: q.toString(r) });
	}
	positive(r) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !1,
			message: q.toString(r),
		});
	}
	negative(r) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !1,
			message: q.toString(r),
		});
	}
	nonpositive(r) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !0,
			message: q.toString(r),
		});
	}
	nonnegative(r) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !0,
			message: q.toString(r),
		});
	}
	multipleOf(r, o) {
		return this._addCheck({
			kind: "multipleOf",
			value: r,
			message: q.toString(o),
		});
	}
	finite(r) {
		return this._addCheck({ kind: "finite", message: q.toString(r) });
	}
	safe(r) {
		return this._addCheck({
			kind: "min",
			inclusive: !0,
			value: Number.MIN_SAFE_INTEGER,
			message: q.toString(r),
		})._addCheck({
			kind: "max",
			inclusive: !0,
			value: Number.MAX_SAFE_INTEGER,
			message: q.toString(r),
		});
	}
	get minValue() {
		let r = null;
		for (const o of this._def.checks)
			o.kind === "min" && (r === null || o.value > r) && (r = o.value);
		return r;
	}
	get maxValue() {
		let r = null;
		for (const o of this._def.checks)
			o.kind === "max" && (r === null || o.value < r) && (r = o.value);
		return r;
	}
	get isInt() {
		return !!this._def.checks.find(
			(r) =>
				r.kind === "int" || (r.kind === "multipleOf" && me.isInteger(r.value)),
		);
	}
	get isFinite() {
		let r = null,
			o = null;
		for (const c of this._def.checks) {
			if (c.kind === "finite" || c.kind === "int" || c.kind === "multipleOf")
				return !0;
			c.kind === "min"
				? (o === null || c.value > o) && (o = c.value)
				: c.kind === "max" && (r === null || c.value < r) && (r = c.value);
		}
		return Number.isFinite(o) && Number.isFinite(r);
	}
}
Sn.create = (l) =>
	new Sn({
		checks: [],
		typeName: ne.ZodNumber,
		coerce: (l == null ? void 0 : l.coerce) || !1,
		...ae(l),
	});
class En extends ue {
	constructor() {
		super(...arguments), (this.min = this.gte), (this.max = this.lte);
	}
	_parse(r) {
		if (this._def.coerce)
			try {
				r.data = BigInt(r.data);
			} catch {
				return this._getInvalidInput(r);
			}
		if (this._getType(r) !== W.bigint) return this._getInvalidInput(r);
		let c;
		const u = new et();
		for (const d of this._def.checks)
			d.kind === "min"
				? (d.inclusive ? r.data < d.value : r.data <= d.value) &&
					((c = this._getOrReturnCtx(r, c)),
					U(c, {
						code: M.too_small,
						type: "bigint",
						minimum: d.value,
						inclusive: d.inclusive,
						message: d.message,
					}),
					u.dirty())
				: d.kind === "max"
					? (d.inclusive ? r.data > d.value : r.data >= d.value) &&
						((c = this._getOrReturnCtx(r, c)),
						U(c, {
							code: M.too_big,
							type: "bigint",
							maximum: d.value,
							inclusive: d.inclusive,
							message: d.message,
						}),
						u.dirty())
					: d.kind === "multipleOf"
						? r.data % d.value !== BigInt(0) &&
							((c = this._getOrReturnCtx(r, c)),
							U(c, {
								code: M.not_multiple_of,
								multipleOf: d.value,
								message: d.message,
							}),
							u.dirty())
						: me.assertNever(d);
		return { status: u.value, value: r.data };
	}
	_getInvalidInput(r) {
		const o = this._getOrReturnCtx(r);
		return (
			U(o, {
				code: M.invalid_type,
				expected: W.bigint,
				received: o.parsedType,
			}),
			re
		);
	}
	gte(r, o) {
		return this.setLimit("min", r, !0, q.toString(o));
	}
	gt(r, o) {
		return this.setLimit("min", r, !1, q.toString(o));
	}
	lte(r, o) {
		return this.setLimit("max", r, !0, q.toString(o));
	}
	lt(r, o) {
		return this.setLimit("max", r, !1, q.toString(o));
	}
	setLimit(r, o, c, u) {
		return new En({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: r, value: o, inclusive: c, message: q.toString(u) },
			],
		});
	}
	_addCheck(r) {
		return new En({ ...this._def, checks: [...this._def.checks, r] });
	}
	positive(r) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !1,
			message: q.toString(r),
		});
	}
	negative(r) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !1,
			message: q.toString(r),
		});
	}
	nonpositive(r) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !0,
			message: q.toString(r),
		});
	}
	nonnegative(r) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !0,
			message: q.toString(r),
		});
	}
	multipleOf(r, o) {
		return this._addCheck({
			kind: "multipleOf",
			value: r,
			message: q.toString(o),
		});
	}
	get minValue() {
		let r = null;
		for (const o of this._def.checks)
			o.kind === "min" && (r === null || o.value > r) && (r = o.value);
		return r;
	}
	get maxValue() {
		let r = null;
		for (const o of this._def.checks)
			o.kind === "max" && (r === null || o.value < r) && (r = o.value);
		return r;
	}
}
En.create = (l) => {
	var r;
	return new En({
		checks: [],
		typeName: ne.ZodBigInt,
		coerce:
			(r = l == null ? void 0 : l.coerce) !== null && r !== void 0 ? r : !1,
		...ae(l),
	});
};
class yi extends ue {
	_parse(r) {
		if (
			(this._def.coerce && (r.data = !!r.data), this._getType(r) !== W.boolean)
		) {
			const c = this._getOrReturnCtx(r);
			return (
				U(c, {
					code: M.invalid_type,
					expected: W.boolean,
					received: c.parsedType,
				}),
				re
			);
		}
		return it(r.data);
	}
}
yi.create = (l) =>
	new yi({
		typeName: ne.ZodBoolean,
		coerce: (l == null ? void 0 : l.coerce) || !1,
		...ae(l),
	});
class Zn extends ue {
	_parse(r) {
		if (
			(this._def.coerce && (r.data = new Date(r.data)),
			this._getType(r) !== W.date)
		) {
			const d = this._getOrReturnCtx(r);
			return (
				U(d, {
					code: M.invalid_type,
					expected: W.date,
					received: d.parsedType,
				}),
				re
			);
		}
		if (isNaN(r.data.getTime())) {
			const d = this._getOrReturnCtx(r);
			return U(d, { code: M.invalid_date }), re;
		}
		const c = new et();
		let u;
		for (const d of this._def.checks)
			d.kind === "min"
				? r.data.getTime() < d.value &&
					((u = this._getOrReturnCtx(r, u)),
					U(u, {
						code: M.too_small,
						message: d.message,
						inclusive: !0,
						exact: !1,
						minimum: d.value,
						type: "date",
					}),
					c.dirty())
				: d.kind === "max"
					? r.data.getTime() > d.value &&
						((u = this._getOrReturnCtx(r, u)),
						U(u, {
							code: M.too_big,
							message: d.message,
							inclusive: !0,
							exact: !1,
							maximum: d.value,
							type: "date",
						}),
						c.dirty())
					: me.assertNever(d);
		return { status: c.value, value: new Date(r.data.getTime()) };
	}
	_addCheck(r) {
		return new Zn({ ...this._def, checks: [...this._def.checks, r] });
	}
	min(r, o) {
		return this._addCheck({
			kind: "min",
			value: r.getTime(),
			message: q.toString(o),
		});
	}
	max(r, o) {
		return this._addCheck({
			kind: "max",
			value: r.getTime(),
			message: q.toString(o),
		});
	}
	get minDate() {
		let r = null;
		for (const o of this._def.checks)
			o.kind === "min" && (r === null || o.value > r) && (r = o.value);
		return r != null ? new Date(r) : null;
	}
	get maxDate() {
		let r = null;
		for (const o of this._def.checks)
			o.kind === "max" && (r === null || o.value < r) && (r = o.value);
		return r != null ? new Date(r) : null;
	}
}
Zn.create = (l) =>
	new Zn({
		checks: [],
		coerce: (l == null ? void 0 : l.coerce) || !1,
		typeName: ne.ZodDate,
		...ae(l),
	});
class lo extends ue {
	_parse(r) {
		if (this._getType(r) !== W.symbol) {
			const c = this._getOrReturnCtx(r);
			return (
				U(c, {
					code: M.invalid_type,
					expected: W.symbol,
					received: c.parsedType,
				}),
				re
			);
		}
		return it(r.data);
	}
}
lo.create = (l) => new lo({ typeName: ne.ZodSymbol, ...ae(l) });
class gi extends ue {
	_parse(r) {
		if (this._getType(r) !== W.undefined) {
			const c = this._getOrReturnCtx(r);
			return (
				U(c, {
					code: M.invalid_type,
					expected: W.undefined,
					received: c.parsedType,
				}),
				re
			);
		}
		return it(r.data);
	}
}
gi.create = (l) => new gi({ typeName: ne.ZodUndefined, ...ae(l) });
class xi extends ue {
	_parse(r) {
		if (this._getType(r) !== W.null) {
			const c = this._getOrReturnCtx(r);
			return (
				U(c, {
					code: M.invalid_type,
					expected: W.null,
					received: c.parsedType,
				}),
				re
			);
		}
		return it(r.data);
	}
}
xi.create = (l) => new xi({ typeName: ne.ZodNull, ...ae(l) });
class _r extends ue {
	constructor() {
		super(...arguments), (this._any = !0);
	}
	_parse(r) {
		return it(r.data);
	}
}
_r.create = (l) => new _r({ typeName: ne.ZodAny, ...ae(l) });
class Vn extends ue {
	constructor() {
		super(...arguments), (this._unknown = !0);
	}
	_parse(r) {
		return it(r.data);
	}
}
Vn.create = (l) => new Vn({ typeName: ne.ZodUnknown, ...ae(l) });
class tn extends ue {
	_parse(r) {
		const o = this._getOrReturnCtx(r);
		return (
			U(o, { code: M.invalid_type, expected: W.never, received: o.parsedType }),
			re
		);
	}
}
tn.create = (l) => new tn({ typeName: ne.ZodNever, ...ae(l) });
class oo extends ue {
	_parse(r) {
		if (this._getType(r) !== W.undefined) {
			const c = this._getOrReturnCtx(r);
			return (
				U(c, {
					code: M.invalid_type,
					expected: W.void,
					received: c.parsedType,
				}),
				re
			);
		}
		return it(r.data);
	}
}
oo.create = (l) => new oo({ typeName: ne.ZodVoid, ...ae(l) });
class Ot extends ue {
	_parse(r) {
		const { ctx: o, status: c } = this._processInputParams(r),
			u = this._def;
		if (o.parsedType !== W.array)
			return (
				U(o, {
					code: M.invalid_type,
					expected: W.array,
					received: o.parsedType,
				}),
				re
			);
		if (u.exactLength !== null) {
			const m = o.data.length > u.exactLength.value,
				h = o.data.length < u.exactLength.value;
			(m || h) &&
				(U(o, {
					code: m ? M.too_big : M.too_small,
					minimum: h ? u.exactLength.value : void 0,
					maximum: m ? u.exactLength.value : void 0,
					type: "array",
					inclusive: !0,
					exact: !0,
					message: u.exactLength.message,
				}),
				c.dirty());
		}
		if (
			(u.minLength !== null &&
				o.data.length < u.minLength.value &&
				(U(o, {
					code: M.too_small,
					minimum: u.minLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: u.minLength.message,
				}),
				c.dirty()),
			u.maxLength !== null &&
				o.data.length > u.maxLength.value &&
				(U(o, {
					code: M.too_big,
					maximum: u.maxLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: u.maxLength.message,
				}),
				c.dirty()),
			o.common.async)
		)
			return Promise.all(
				[...o.data].map((m, h) => u.type._parseAsync(new Ut(o, m, o.path, h))),
			).then((m) => et.mergeArray(c, m));
		const d = [...o.data].map((m, h) =>
			u.type._parseSync(new Ut(o, m, o.path, h)),
		);
		return et.mergeArray(c, d);
	}
	get element() {
		return this._def.type;
	}
	min(r, o) {
		return new Ot({
			...this._def,
			minLength: { value: r, message: q.toString(o) },
		});
	}
	max(r, o) {
		return new Ot({
			...this._def,
			maxLength: { value: r, message: q.toString(o) },
		});
	}
	length(r, o) {
		return new Ot({
			...this._def,
			exactLength: { value: r, message: q.toString(o) },
		});
	}
	nonempty(r) {
		return this.min(1, r);
	}
}
Ot.create = (l, r) =>
	new Ot({
		type: l,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ne.ZodArray,
		...ae(r),
	});
function yr(l) {
	if (l instanceof Ie) {
		const r = {};
		for (const o in l.shape) {
			const c = l.shape[o];
			r[o] = Ft.create(yr(c));
		}
		return new Ie({ ...l._def, shape: () => r });
	} else
		return l instanceof Ot
			? new Ot({ ...l._def, type: yr(l.element) })
			: l instanceof Ft
				? Ft.create(yr(l.unwrap()))
				: l instanceof Nn
					? Nn.create(yr(l.unwrap()))
					: l instanceof Vt
						? Vt.create(l.items.map((r) => yr(r)))
						: l;
}
class Ie extends ue {
	constructor() {
		super(...arguments),
			(this._cached = null),
			(this.nonstrict = this.passthrough),
			(this.augment = this.extend);
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const r = this._def.shape(),
			o = me.objectKeys(r);
		return (this._cached = { shape: r, keys: o });
	}
	_parse(r) {
		if (this._getType(r) !== W.object) {
			const v = this._getOrReturnCtx(r);
			return (
				U(v, {
					code: M.invalid_type,
					expected: W.object,
					received: v.parsedType,
				}),
				re
			);
		}
		const { status: c, ctx: u } = this._processInputParams(r),
			{ shape: d, keys: m } = this._getCached(),
			h = [];
		if (
			!(this._def.catchall instanceof tn && this._def.unknownKeys === "strip")
		)
			for (const v in u.data) m.includes(v) || h.push(v);
		const f = [];
		for (const v of m) {
			const g = d[v],
				x = u.data[v];
			f.push({
				key: { status: "valid", value: v },
				value: g._parse(new Ut(u, x, u.path, v)),
				alwaysSet: v in u.data,
			});
		}
		if (this._def.catchall instanceof tn) {
			const v = this._def.unknownKeys;
			if (v === "passthrough")
				for (const g of h)
					f.push({
						key: { status: "valid", value: g },
						value: { status: "valid", value: u.data[g] },
					});
			else if (v === "strict")
				h.length > 0 &&
					(U(u, { code: M.unrecognized_keys, keys: h }), c.dirty());
			else if (v !== "strip")
				throw new Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			const v = this._def.catchall;
			for (const g of h) {
				const x = u.data[g];
				f.push({
					key: { status: "valid", value: g },
					value: v._parse(new Ut(u, x, u.path, g)),
					alwaysSet: g in u.data,
				});
			}
		}
		return u.common.async
			? Promise.resolve()
					.then(async () => {
						const v = [];
						for (const g of f) {
							const x = await g.key,
								w = await g.value;
							v.push({ key: x, value: w, alwaysSet: g.alwaysSet });
						}
						return v;
					})
					.then((v) => et.mergeObjectSync(c, v))
			: et.mergeObjectSync(c, f);
	}
	get shape() {
		return this._def.shape();
	}
	strict(r) {
		return (
			q.errToObj,
			new Ie({
				...this._def,
				unknownKeys: "strict",
				...(r !== void 0
					? {
							errorMap: (o, c) => {
								var u, d, m, h;
								const f =
									(m =
										(d = (u = this._def).errorMap) === null || d === void 0
											? void 0
											: d.call(u, o, c).message) !== null && m !== void 0
										? m
										: c.defaultError;
								return o.code === "unrecognized_keys"
									? {
											message:
												(h = q.errToObj(r).message) !== null && h !== void 0
													? h
													: f,
										}
									: { message: f };
							},
						}
					: {}),
			})
		);
	}
	strip() {
		return new Ie({ ...this._def, unknownKeys: "strip" });
	}
	passthrough() {
		return new Ie({ ...this._def, unknownKeys: "passthrough" });
	}
	extend(r) {
		return new Ie({
			...this._def,
			shape: () => ({ ...this._def.shape(), ...r }),
		});
	}
	merge(r) {
		return new Ie({
			unknownKeys: r._def.unknownKeys,
			catchall: r._def.catchall,
			shape: () => ({ ...this._def.shape(), ...r._def.shape() }),
			typeName: ne.ZodObject,
		});
	}
	setKey(r, o) {
		return this.augment({ [r]: o });
	}
	catchall(r) {
		return new Ie({ ...this._def, catchall: r });
	}
	pick(r) {
		const o = {};
		return (
			me.objectKeys(r).forEach((c) => {
				r[c] && this.shape[c] && (o[c] = this.shape[c]);
			}),
			new Ie({ ...this._def, shape: () => o })
		);
	}
	omit(r) {
		const o = {};
		return (
			me.objectKeys(this.shape).forEach((c) => {
				r[c] || (o[c] = this.shape[c]);
			}),
			new Ie({ ...this._def, shape: () => o })
		);
	}
	deepPartial() {
		return yr(this);
	}
	partial(r) {
		const o = {};
		return (
			me.objectKeys(this.shape).forEach((c) => {
				const u = this.shape[c];
				r && !r[c] ? (o[c] = u) : (o[c] = u.optional());
			}),
			new Ie({ ...this._def, shape: () => o })
		);
	}
	required(r) {
		const o = {};
		return (
			me.objectKeys(this.shape).forEach((c) => {
				if (r && !r[c]) o[c] = this.shape[c];
				else {
					let d = this.shape[c];
					for (; d instanceof Ft; ) d = d._def.innerType;
					o[c] = d;
				}
			}),
			new Ie({ ...this._def, shape: () => o })
		);
	}
	keyof() {
		return Of(me.objectKeys(this.shape));
	}
}
Ie.create = (l, r) =>
	new Ie({
		shape: () => l,
		unknownKeys: "strip",
		catchall: tn.create(),
		typeName: ne.ZodObject,
		...ae(r),
	});
Ie.strictCreate = (l, r) =>
	new Ie({
		shape: () => l,
		unknownKeys: "strict",
		catchall: tn.create(),
		typeName: ne.ZodObject,
		...ae(r),
	});
Ie.lazycreate = (l, r) =>
	new Ie({
		shape: l,
		unknownKeys: "strip",
		catchall: tn.create(),
		typeName: ne.ZodObject,
		...ae(r),
	});
class wi extends ue {
	_parse(r) {
		const { ctx: o } = this._processInputParams(r),
			c = this._def.options;
		function u(d) {
			for (const h of d) if (h.result.status === "valid") return h.result;
			for (const h of d)
				if (h.result.status === "dirty")
					return o.common.issues.push(...h.ctx.common.issues), h.result;
			const m = d.map((h) => new vt(h.ctx.common.issues));
			return U(o, { code: M.invalid_union, unionErrors: m }), re;
		}
		if (o.common.async)
			return Promise.all(
				c.map(async (d) => {
					const m = { ...o, common: { ...o.common, issues: [] }, parent: null };
					return {
						result: await d._parseAsync({
							data: o.data,
							path: o.path,
							parent: m,
						}),
						ctx: m,
					};
				}),
			).then(u);
		{
			let d;
			const m = [];
			for (const f of c) {
				const v = { ...o, common: { ...o.common, issues: [] }, parent: null },
					g = f._parseSync({ data: o.data, path: o.path, parent: v });
				if (g.status === "valid") return g;
				g.status === "dirty" && !d && (d = { result: g, ctx: v }),
					v.common.issues.length && m.push(v.common.issues);
			}
			if (d) return o.common.issues.push(...d.ctx.common.issues), d.result;
			const h = m.map((f) => new vt(f));
			return U(o, { code: M.invalid_union, unionErrors: h }), re;
		}
	}
	get options() {
		return this._def.options;
	}
}
wi.create = (l, r) => new wi({ options: l, typeName: ne.ZodUnion, ...ae(r) });
const bt = (l) =>
	l instanceof Si
		? bt(l.schema)
		: l instanceof It
			? bt(l.innerType())
			: l instanceof Ei
				? [l.value]
				: l instanceof Cn
					? l.options
					: l instanceof Ci
						? me.objectValues(l.enum)
						: l instanceof Ni
							? bt(l._def.innerType)
							: l instanceof gi
								? [void 0]
								: l instanceof xi
									? [null]
									: l instanceof Ft
										? [void 0, ...bt(l.unwrap())]
										: l instanceof Nn
											? [null, ...bt(l.unwrap())]
											: l instanceof Ms || l instanceof Ri
												? bt(l.unwrap())
												: l instanceof Ti
													? bt(l._def.innerType)
													: [];
class po extends ue {
	_parse(r) {
		const { ctx: o } = this._processInputParams(r);
		if (o.parsedType !== W.object)
			return (
				U(o, {
					code: M.invalid_type,
					expected: W.object,
					received: o.parsedType,
				}),
				re
			);
		const c = this.discriminator,
			u = o.data[c],
			d = this.optionsMap.get(u);
		return d
			? o.common.async
				? d._parseAsync({ data: o.data, path: o.path, parent: o })
				: d._parseSync({ data: o.data, path: o.path, parent: o })
			: (U(o, {
					code: M.invalid_union_discriminator,
					options: Array.from(this.optionsMap.keys()),
					path: [c],
				}),
				re);
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
	static create(r, o, c) {
		const u = new Map();
		for (const d of o) {
			const m = bt(d.shape[r]);
			if (!m.length)
				throw new Error(
					`A discriminator value for key \`${r}\` could not be extracted from all schema options`,
				);
			for (const h of m) {
				if (u.has(h))
					throw new Error(
						`Discriminator property ${String(r)} has duplicate value ${String(h)}`,
					);
				u.set(h, d);
			}
		}
		return new po({
			typeName: ne.ZodDiscriminatedUnion,
			discriminator: r,
			options: o,
			optionsMap: u,
			...ae(c),
		});
	}
}
function Ns(l, r) {
	const o = Jt(l),
		c = Jt(r);
	if (l === r) return { valid: !0, data: l };
	if (o === W.object && c === W.object) {
		const u = me.objectKeys(r),
			d = me.objectKeys(l).filter((h) => u.indexOf(h) !== -1),
			m = { ...l, ...r };
		for (const h of d) {
			const f = Ns(l[h], r[h]);
			if (!f.valid) return { valid: !1 };
			m[h] = f.data;
		}
		return { valid: !0, data: m };
	} else if (o === W.array && c === W.array) {
		if (l.length !== r.length) return { valid: !1 };
		const u = [];
		for (let d = 0; d < l.length; d++) {
			const m = l[d],
				h = r[d],
				f = Ns(m, h);
			if (!f.valid) return { valid: !1 };
			u.push(f.data);
		}
		return { valid: !0, data: u };
	} else
		return o === W.date && c === W.date && +l == +r
			? { valid: !0, data: l }
			: { valid: !1 };
}
class _i extends ue {
	_parse(r) {
		const { status: o, ctx: c } = this._processInputParams(r),
			u = (d, m) => {
				if (Es(d) || Es(m)) return re;
				const h = Ns(d.value, m.value);
				return h.valid
					? ((Cs(d) || Cs(m)) && o.dirty(), { status: o.value, value: h.data })
					: (U(c, { code: M.invalid_intersection_types }), re);
			};
		return c.common.async
			? Promise.all([
					this._def.left._parseAsync({ data: c.data, path: c.path, parent: c }),
					this._def.right._parseAsync({
						data: c.data,
						path: c.path,
						parent: c,
					}),
				]).then(([d, m]) => u(d, m))
			: u(
					this._def.left._parseSync({ data: c.data, path: c.path, parent: c }),
					this._def.right._parseSync({ data: c.data, path: c.path, parent: c }),
				);
	}
}
_i.create = (l, r, o) =>
	new _i({ left: l, right: r, typeName: ne.ZodIntersection, ...ae(o) });
class Vt extends ue {
	_parse(r) {
		const { status: o, ctx: c } = this._processInputParams(r);
		if (c.parsedType !== W.array)
			return (
				U(c, {
					code: M.invalid_type,
					expected: W.array,
					received: c.parsedType,
				}),
				re
			);
		if (c.data.length < this._def.items.length)
			return (
				U(c, {
					code: M.too_small,
					minimum: this._def.items.length,
					inclusive: !0,
					exact: !1,
					type: "array",
				}),
				re
			);
		!this._def.rest &&
			c.data.length > this._def.items.length &&
			(U(c, {
				code: M.too_big,
				maximum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: "array",
			}),
			o.dirty());
		const d = [...c.data]
			.map((m, h) => {
				const f = this._def.items[h] || this._def.rest;
				return f ? f._parse(new Ut(c, m, c.path, h)) : null;
			})
			.filter((m) => !!m);
		return c.common.async
			? Promise.all(d).then((m) => et.mergeArray(o, m))
			: et.mergeArray(o, d);
	}
	get items() {
		return this._def.items;
	}
	rest(r) {
		return new Vt({ ...this._def, rest: r });
	}
}
Vt.create = (l, r) => {
	if (!Array.isArray(l))
		throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new Vt({ items: l, typeName: ne.ZodTuple, rest: null, ...ae(r) });
};
class ki extends ue {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(r) {
		const { status: o, ctx: c } = this._processInputParams(r);
		if (c.parsedType !== W.object)
			return (
				U(c, {
					code: M.invalid_type,
					expected: W.object,
					received: c.parsedType,
				}),
				re
			);
		const u = [],
			d = this._def.keyType,
			m = this._def.valueType;
		for (const h in c.data)
			u.push({
				key: d._parse(new Ut(c, h, c.path, h)),
				value: m._parse(new Ut(c, c.data[h], c.path, h)),
				alwaysSet: h in c.data,
			});
		return c.common.async
			? et.mergeObjectAsync(o, u)
			: et.mergeObjectSync(o, u);
	}
	get element() {
		return this._def.valueType;
	}
	static create(r, o, c) {
		return o instanceof ue
			? new ki({ keyType: r, valueType: o, typeName: ne.ZodRecord, ...ae(c) })
			: new ki({
					keyType: jt.create(),
					valueType: r,
					typeName: ne.ZodRecord,
					...ae(o),
				});
	}
}
class ao extends ue {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(r) {
		const { status: o, ctx: c } = this._processInputParams(r);
		if (c.parsedType !== W.map)
			return (
				U(c, { code: M.invalid_type, expected: W.map, received: c.parsedType }),
				re
			);
		const u = this._def.keyType,
			d = this._def.valueType,
			m = [...c.data.entries()].map(([h, f], v) => ({
				key: u._parse(new Ut(c, h, c.path, [v, "key"])),
				value: d._parse(new Ut(c, f, c.path, [v, "value"])),
			}));
		if (c.common.async) {
			const h = new Map();
			return Promise.resolve().then(async () => {
				for (const f of m) {
					const v = await f.key,
						g = await f.value;
					if (v.status === "aborted" || g.status === "aborted") return re;
					(v.status === "dirty" || g.status === "dirty") && o.dirty(),
						h.set(v.value, g.value);
				}
				return { status: o.value, value: h };
			});
		} else {
			const h = new Map();
			for (const f of m) {
				const v = f.key,
					g = f.value;
				if (v.status === "aborted" || g.status === "aborted") return re;
				(v.status === "dirty" || g.status === "dirty") && o.dirty(),
					h.set(v.value, g.value);
			}
			return { status: o.value, value: h };
		}
	}
}
ao.create = (l, r, o) =>
	new ao({ valueType: r, keyType: l, typeName: ne.ZodMap, ...ae(o) });
class Wn extends ue {
	_parse(r) {
		const { status: o, ctx: c } = this._processInputParams(r);
		if (c.parsedType !== W.set)
			return (
				U(c, { code: M.invalid_type, expected: W.set, received: c.parsedType }),
				re
			);
		const u = this._def;
		u.minSize !== null &&
			c.data.size < u.minSize.value &&
			(U(c, {
				code: M.too_small,
				minimum: u.minSize.value,
				type: "set",
				inclusive: !0,
				exact: !1,
				message: u.minSize.message,
			}),
			o.dirty()),
			u.maxSize !== null &&
				c.data.size > u.maxSize.value &&
				(U(c, {
					code: M.too_big,
					maximum: u.maxSize.value,
					type: "set",
					inclusive: !0,
					exact: !1,
					message: u.maxSize.message,
				}),
				o.dirty());
		const d = this._def.valueType;
		function m(f) {
			const v = new Set();
			for (const g of f) {
				if (g.status === "aborted") return re;
				g.status === "dirty" && o.dirty(), v.add(g.value);
			}
			return { status: o.value, value: v };
		}
		const h = [...c.data.values()].map((f, v) =>
			d._parse(new Ut(c, f, c.path, v)),
		);
		return c.common.async ? Promise.all(h).then((f) => m(f)) : m(h);
	}
	min(r, o) {
		return new Wn({
			...this._def,
			minSize: { value: r, message: q.toString(o) },
		});
	}
	max(r, o) {
		return new Wn({
			...this._def,
			maxSize: { value: r, message: q.toString(o) },
		});
	}
	size(r, o) {
		return this.min(r, o).max(r, o);
	}
	nonempty(r) {
		return this.min(1, r);
	}
}
Wn.create = (l, r) =>
	new Wn({
		valueType: l,
		minSize: null,
		maxSize: null,
		typeName: ne.ZodSet,
		...ae(r),
	});
class xr extends ue {
	constructor() {
		super(...arguments), (this.validate = this.implement);
	}
	_parse(r) {
		const { ctx: o } = this._processInputParams(r);
		if (o.parsedType !== W.function)
			return (
				U(o, {
					code: M.invalid_type,
					expected: W.function,
					received: o.parsedType,
				}),
				re
			);
		function c(h, f) {
			return ro({
				data: h,
				path: o.path,
				errorMaps: [
					o.common.contextualErrorMap,
					o.schemaErrorMap,
					no(),
					wr,
				].filter((v) => !!v),
				issueData: { code: M.invalid_arguments, argumentsError: f },
			});
		}
		function u(h, f) {
			return ro({
				data: h,
				path: o.path,
				errorMaps: [
					o.common.contextualErrorMap,
					o.schemaErrorMap,
					no(),
					wr,
				].filter((v) => !!v),
				issueData: { code: M.invalid_return_type, returnTypeError: f },
			});
		}
		const d = { errorMap: o.common.contextualErrorMap },
			m = o.data;
		if (this._def.returns instanceof kr) {
			const h = this;
			return it(async function (...f) {
				const v = new vt([]),
					g = await h._def.args.parseAsync(f, d).catch((T) => {
						throw (v.addIssue(c(f, T)), v);
					}),
					x = await Reflect.apply(m, this, g);
				return await h._def.returns._def.type.parseAsync(x, d).catch((T) => {
					throw (v.addIssue(u(x, T)), v);
				});
			});
		} else {
			const h = this;
			return it(function (...f) {
				const v = h._def.args.safeParse(f, d);
				if (!v.success) throw new vt([c(f, v.error)]);
				const g = Reflect.apply(m, this, v.data),
					x = h._def.returns.safeParse(g, d);
				if (!x.success) throw new vt([u(g, x.error)]);
				return x.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...r) {
		return new xr({ ...this._def, args: Vt.create(r).rest(Vn.create()) });
	}
	returns(r) {
		return new xr({ ...this._def, returns: r });
	}
	implement(r) {
		return this.parse(r);
	}
	strictImplement(r) {
		return this.parse(r);
	}
	static create(r, o, c) {
		return new xr({
			args: r || Vt.create([]).rest(Vn.create()),
			returns: o || Vn.create(),
			typeName: ne.ZodFunction,
			...ae(c),
		});
	}
}
class Si extends ue {
	get schema() {
		return this._def.getter();
	}
	_parse(r) {
		const { ctx: o } = this._processInputParams(r);
		return this._def.getter()._parse({ data: o.data, path: o.path, parent: o });
	}
}
Si.create = (l, r) => new Si({ getter: l, typeName: ne.ZodLazy, ...ae(r) });
class Ei extends ue {
	_parse(r) {
		if (r.data !== this._def.value) {
			const o = this._getOrReturnCtx(r);
			return (
				U(o, {
					received: o.data,
					code: M.invalid_literal,
					expected: this._def.value,
				}),
				re
			);
		}
		return { status: "valid", value: r.data };
	}
	get value() {
		return this._def.value;
	}
}
Ei.create = (l, r) => new Ei({ value: l, typeName: ne.ZodLiteral, ...ae(r) });
function Of(l, r) {
	return new Cn({ values: l, typeName: ne.ZodEnum, ...ae(r) });
}
class Cn extends ue {
	constructor() {
		super(...arguments), pi.set(this, void 0);
	}
	_parse(r) {
		if (typeof r.data != "string") {
			const o = this._getOrReturnCtx(r),
				c = this._def.values;
			return (
				U(o, {
					expected: me.joinValues(c),
					received: o.parsedType,
					code: M.invalid_type,
				}),
				re
			);
		}
		if (
			(io(this, pi) || Tf(this, pi, new Set(this._def.values)),
			!io(this, pi).has(r.data))
		) {
			const o = this._getOrReturnCtx(r),
				c = this._def.values;
			return (
				U(o, { received: o.data, code: M.invalid_enum_value, options: c }), re
			);
		}
		return it(r.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const r = {};
		for (const o of this._def.values) r[o] = o;
		return r;
	}
	get Values() {
		const r = {};
		for (const o of this._def.values) r[o] = o;
		return r;
	}
	get Enum() {
		const r = {};
		for (const o of this._def.values) r[o] = o;
		return r;
	}
	extract(r, o = this._def) {
		return Cn.create(r, { ...this._def, ...o });
	}
	exclude(r, o = this._def) {
		return Cn.create(
			this.options.filter((c) => !r.includes(c)),
			{ ...this._def, ...o },
		);
	}
}
pi = new WeakMap();
Cn.create = Of;
class Ci extends ue {
	constructor() {
		super(...arguments), hi.set(this, void 0);
	}
	_parse(r) {
		const o = me.getValidEnumValues(this._def.values),
			c = this._getOrReturnCtx(r);
		if (c.parsedType !== W.string && c.parsedType !== W.number) {
			const u = me.objectValues(o);
			return (
				U(c, {
					expected: me.joinValues(u),
					received: c.parsedType,
					code: M.invalid_type,
				}),
				re
			);
		}
		if (
			(io(this, hi) ||
				Tf(this, hi, new Set(me.getValidEnumValues(this._def.values))),
			!io(this, hi).has(r.data))
		) {
			const u = me.objectValues(o);
			return (
				U(c, { received: c.data, code: M.invalid_enum_value, options: u }), re
			);
		}
		return it(r.data);
	}
	get enum() {
		return this._def.values;
	}
}
hi = new WeakMap();
Ci.create = (l, r) =>
	new Ci({ values: l, typeName: ne.ZodNativeEnum, ...ae(r) });
class kr extends ue {
	unwrap() {
		return this._def.type;
	}
	_parse(r) {
		const { ctx: o } = this._processInputParams(r);
		if (o.parsedType !== W.promise && o.common.async === !1)
			return (
				U(o, {
					code: M.invalid_type,
					expected: W.promise,
					received: o.parsedType,
				}),
				re
			);
		const c = o.parsedType === W.promise ? o.data : Promise.resolve(o.data);
		return it(
			c.then((u) =>
				this._def.type.parseAsync(u, {
					path: o.path,
					errorMap: o.common.contextualErrorMap,
				}),
			),
		);
	}
}
kr.create = (l, r) => new kr({ type: l, typeName: ne.ZodPromise, ...ae(r) });
class It extends ue {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ne.ZodEffects
			? this._def.schema.sourceType()
			: this._def.schema;
	}
	_parse(r) {
		const { status: o, ctx: c } = this._processInputParams(r),
			u = this._def.effect || null,
			d = {
				addIssue: (m) => {
					U(c, m), m.fatal ? o.abort() : o.dirty();
				},
				get path() {
					return c.path;
				},
			};
		if (((d.addIssue = d.addIssue.bind(d)), u.type === "preprocess")) {
			const m = u.transform(c.data, d);
			if (c.common.async)
				return Promise.resolve(m).then(async (h) => {
					if (o.value === "aborted") return re;
					const f = await this._def.schema._parseAsync({
						data: h,
						path: c.path,
						parent: c,
					});
					return f.status === "aborted"
						? re
						: f.status === "dirty" || o.value === "dirty"
							? gr(f.value)
							: f;
				});
			{
				if (o.value === "aborted") return re;
				const h = this._def.schema._parseSync({
					data: m,
					path: c.path,
					parent: c,
				});
				return h.status === "aborted"
					? re
					: h.status === "dirty" || o.value === "dirty"
						? gr(h.value)
						: h;
			}
		}
		if (u.type === "refinement") {
			const m = (h) => {
				const f = u.refinement(h, d);
				if (c.common.async) return Promise.resolve(f);
				if (f instanceof Promise)
					throw new Error(
						"Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				return h;
			};
			if (c.common.async === !1) {
				const h = this._def.schema._parseSync({
					data: c.data,
					path: c.path,
					parent: c,
				});
				return h.status === "aborted"
					? re
					: (h.status === "dirty" && o.dirty(),
						m(h.value),
						{ status: o.value, value: h.value });
			} else
				return this._def.schema
					._parseAsync({ data: c.data, path: c.path, parent: c })
					.then((h) =>
						h.status === "aborted"
							? re
							: (h.status === "dirty" && o.dirty(),
								m(h.value).then(() => ({ status: o.value, value: h.value }))),
					);
		}
		if (u.type === "transform")
			if (c.common.async === !1) {
				const m = this._def.schema._parseSync({
					data: c.data,
					path: c.path,
					parent: c,
				});
				if (!Bn(m)) return m;
				const h = u.transform(m.value, d);
				if (h instanceof Promise)
					throw new Error(
						"Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				return { status: o.value, value: h };
			} else
				return this._def.schema
					._parseAsync({ data: c.data, path: c.path, parent: c })
					.then((m) =>
						Bn(m)
							? Promise.resolve(u.transform(m.value, d)).then((h) => ({
									status: o.value,
									value: h,
								}))
							: m,
					);
		me.assertNever(u);
	}
}
It.create = (l, r, o) =>
	new It({ schema: l, typeName: ne.ZodEffects, effect: r, ...ae(o) });
It.createWithPreprocess = (l, r, o) =>
	new It({
		schema: r,
		effect: { type: "preprocess", transform: l },
		typeName: ne.ZodEffects,
		...ae(o),
	});
class Ft extends ue {
	_parse(r) {
		return this._getType(r) === W.undefined
			? it(void 0)
			: this._def.innerType._parse(r);
	}
	unwrap() {
		return this._def.innerType;
	}
}
Ft.create = (l, r) =>
	new Ft({ innerType: l, typeName: ne.ZodOptional, ...ae(r) });
class Nn extends ue {
	_parse(r) {
		return this._getType(r) === W.null
			? it(null)
			: this._def.innerType._parse(r);
	}
	unwrap() {
		return this._def.innerType;
	}
}
Nn.create = (l, r) =>
	new Nn({ innerType: l, typeName: ne.ZodNullable, ...ae(r) });
class Ni extends ue {
	_parse(r) {
		const { ctx: o } = this._processInputParams(r);
		let c = o.data;
		return (
			o.parsedType === W.undefined && (c = this._def.defaultValue()),
			this._def.innerType._parse({ data: c, path: o.path, parent: o })
		);
	}
	removeDefault() {
		return this._def.innerType;
	}
}
Ni.create = (l, r) =>
	new Ni({
		innerType: l,
		typeName: ne.ZodDefault,
		defaultValue: typeof r.default == "function" ? r.default : () => r.default,
		...ae(r),
	});
class Ti extends ue {
	_parse(r) {
		const { ctx: o } = this._processInputParams(r),
			c = { ...o, common: { ...o.common, issues: [] } },
			u = this._def.innerType._parse({
				data: c.data,
				path: c.path,
				parent: { ...c },
			});
		return vi(u)
			? u.then((d) => ({
					status: "valid",
					value:
						d.status === "valid"
							? d.value
							: this._def.catchValue({
									get error() {
										return new vt(c.common.issues);
									},
									input: c.data,
								}),
				}))
			: {
					status: "valid",
					value:
						u.status === "valid"
							? u.value
							: this._def.catchValue({
									get error() {
										return new vt(c.common.issues);
									},
									input: c.data,
								}),
				};
	}
	removeCatch() {
		return this._def.innerType;
	}
}
Ti.create = (l, r) =>
	new Ti({
		innerType: l,
		typeName: ne.ZodCatch,
		catchValue: typeof r.catch == "function" ? r.catch : () => r.catch,
		...ae(r),
	});
class so extends ue {
	_parse(r) {
		if (this._getType(r) !== W.nan) {
			const c = this._getOrReturnCtx(r);
			return (
				U(c, { code: M.invalid_type, expected: W.nan, received: c.parsedType }),
				re
			);
		}
		return { status: "valid", value: r.data };
	}
}
so.create = (l) => new so({ typeName: ne.ZodNaN, ...ae(l) });
const Zv = Symbol("zod_brand");
class Ms extends ue {
	_parse(r) {
		const { ctx: o } = this._processInputParams(r),
			c = o.data;
		return this._def.type._parse({ data: c, path: o.path, parent: o });
	}
	unwrap() {
		return this._def.type;
	}
}
class Li extends ue {
	_parse(r) {
		const { status: o, ctx: c } = this._processInputParams(r);
		if (c.common.async)
			return (async () => {
				const d = await this._def.in._parseAsync({
					data: c.data,
					path: c.path,
					parent: c,
				});
				return d.status === "aborted"
					? re
					: d.status === "dirty"
						? (o.dirty(), gr(d.value))
						: this._def.out._parseAsync({
								data: d.value,
								path: c.path,
								parent: c,
							});
			})();
		{
			const u = this._def.in._parseSync({
				data: c.data,
				path: c.path,
				parent: c,
			});
			return u.status === "aborted"
				? re
				: u.status === "dirty"
					? (o.dirty(), { status: "dirty", value: u.value })
					: this._def.out._parseSync({
							data: u.value,
							path: c.path,
							parent: c,
						});
		}
	}
	static create(r, o) {
		return new Li({ in: r, out: o, typeName: ne.ZodPipeline });
	}
}
class Ri extends ue {
	_parse(r) {
		const o = this._def.innerType._parse(r),
			c = (u) => (Bn(u) && (u.value = Object.freeze(u.value)), u);
		return vi(o) ? o.then((u) => c(u)) : c(o);
	}
	unwrap() {
		return this._def.innerType;
	}
}
Ri.create = (l, r) =>
	new Ri({ innerType: l, typeName: ne.ZodReadonly, ...ae(r) });
function Lf(l, r = {}, o) {
	return l
		? _r.create().superRefine((c, u) => {
				var d, m;
				if (!l(c)) {
					const h =
							typeof r == "function"
								? r(c)
								: typeof r == "string"
									? { message: r }
									: r,
						f =
							(m = (d = h.fatal) !== null && d !== void 0 ? d : o) !== null &&
							m !== void 0
								? m
								: !0,
						v = typeof h == "string" ? { message: h } : h;
					u.addIssue({ code: "custom", ...v, fatal: f });
				}
			})
		: _r.create();
}
const Wv = { object: Ie.lazycreate };
var ne;
(function (l) {
	(l.ZodString = "ZodString"),
		(l.ZodNumber = "ZodNumber"),
		(l.ZodNaN = "ZodNaN"),
		(l.ZodBigInt = "ZodBigInt"),
		(l.ZodBoolean = "ZodBoolean"),
		(l.ZodDate = "ZodDate"),
		(l.ZodSymbol = "ZodSymbol"),
		(l.ZodUndefined = "ZodUndefined"),
		(l.ZodNull = "ZodNull"),
		(l.ZodAny = "ZodAny"),
		(l.ZodUnknown = "ZodUnknown"),
		(l.ZodNever = "ZodNever"),
		(l.ZodVoid = "ZodVoid"),
		(l.ZodArray = "ZodArray"),
		(l.ZodObject = "ZodObject"),
		(l.ZodUnion = "ZodUnion"),
		(l.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
		(l.ZodIntersection = "ZodIntersection"),
		(l.ZodTuple = "ZodTuple"),
		(l.ZodRecord = "ZodRecord"),
		(l.ZodMap = "ZodMap"),
		(l.ZodSet = "ZodSet"),
		(l.ZodFunction = "ZodFunction"),
		(l.ZodLazy = "ZodLazy"),
		(l.ZodLiteral = "ZodLiteral"),
		(l.ZodEnum = "ZodEnum"),
		(l.ZodEffects = "ZodEffects"),
		(l.ZodNativeEnum = "ZodNativeEnum"),
		(l.ZodOptional = "ZodOptional"),
		(l.ZodNullable = "ZodNullable"),
		(l.ZodDefault = "ZodDefault"),
		(l.ZodCatch = "ZodCatch"),
		(l.ZodPromise = "ZodPromise"),
		(l.ZodBranded = "ZodBranded"),
		(l.ZodPipeline = "ZodPipeline"),
		(l.ZodReadonly = "ZodReadonly");
})(ne || (ne = {}));
const Hv = (l, r = { message: `Input not instance of ${l.name}` }) =>
		Lf((o) => o instanceof l, r),
	If = jt.create,
	zf = Sn.create,
	Qv = so.create,
	Kv = En.create,
	Mf = yi.create,
	Yv = Zn.create,
	Gv = lo.create,
	Xv = gi.create,
	qv = xi.create,
	bv = _r.create,
	Jv = Vn.create,
	ey = tn.create,
	ty = oo.create,
	ny = Ot.create,
	ry = Ie.create,
	iy = Ie.strictCreate,
	ly = wi.create,
	oy = po.create,
	ay = _i.create,
	sy = Vt.create,
	uy = ki.create,
	cy = ao.create,
	dy = Wn.create,
	fy = xr.create,
	py = Si.create,
	hy = Ei.create,
	my = Cn.create,
	vy = Ci.create,
	yy = kr.create,
	Kd = It.create,
	gy = Ft.create,
	xy = Nn.create,
	wy = It.createWithPreprocess,
	_y = Li.create,
	ky = () => If().optional(),
	Sy = () => zf().optional(),
	Ey = () => Mf().optional(),
	Cy = {
		string: (l) => jt.create({ ...l, coerce: !0 }),
		number: (l) => Sn.create({ ...l, coerce: !0 }),
		boolean: (l) => yi.create({ ...l, coerce: !0 }),
		bigint: (l) => En.create({ ...l, coerce: !0 }),
		date: (l) => Zn.create({ ...l, coerce: !0 }),
	},
	Ny = re;
var Ty = Object.freeze({
	__proto__: null,
	defaultErrorMap: wr,
	setErrorMap: wv,
	getErrorMap: no,
	makeIssue: ro,
	EMPTY_PATH: _v,
	addIssueToContext: U,
	ParseStatus: et,
	INVALID: re,
	DIRTY: gr,
	OK: it,
	isAborted: Es,
	isDirty: Cs,
	isValid: Bn,
	isAsync: vi,
	get util() {
		return me;
	},
	get objectUtil() {
		return Ss;
	},
	ZodParsedType: W,
	getParsedType: Jt,
	ZodType: ue,
	datetimeRegex: jf,
	ZodString: jt,
	ZodNumber: Sn,
	ZodBigInt: En,
	ZodBoolean: yi,
	ZodDate: Zn,
	ZodSymbol: lo,
	ZodUndefined: gi,
	ZodNull: xi,
	ZodAny: _r,
	ZodUnknown: Vn,
	ZodNever: tn,
	ZodVoid: oo,
	ZodArray: Ot,
	ZodObject: Ie,
	ZodUnion: wi,
	ZodDiscriminatedUnion: po,
	ZodIntersection: _i,
	ZodTuple: Vt,
	ZodRecord: ki,
	ZodMap: ao,
	ZodSet: Wn,
	ZodFunction: xr,
	ZodLazy: Si,
	ZodLiteral: Ei,
	ZodEnum: Cn,
	ZodNativeEnum: Ci,
	ZodPromise: kr,
	ZodEffects: It,
	ZodTransformer: It,
	ZodOptional: Ft,
	ZodNullable: Nn,
	ZodDefault: Ni,
	ZodCatch: Ti,
	ZodNaN: so,
	BRAND: Zv,
	ZodBranded: Ms,
	ZodPipeline: Li,
	ZodReadonly: Ri,
	custom: Lf,
	Schema: ue,
	ZodSchema: ue,
	late: Wv,
	get ZodFirstPartyTypeKind() {
		return ne;
	},
	coerce: Cy,
	any: bv,
	array: ny,
	bigint: Kv,
	boolean: Mf,
	date: Yv,
	discriminatedUnion: oy,
	effect: Kd,
	enum: my,
	function: fy,
	instanceof: Hv,
	intersection: ay,
	lazy: py,
	literal: hy,
	map: cy,
	nan: Qv,
	nativeEnum: vy,
	never: ey,
	null: qv,
	nullable: xy,
	number: zf,
	object: ry,
	oboolean: Ey,
	onumber: Sy,
	optional: gy,
	ostring: ky,
	pipeline: _y,
	preprocess: wy,
	promise: yy,
	record: uy,
	set: dy,
	strictObject: iy,
	string: If,
	symbol: Gv,
	transformer: Kd,
	tuple: sy,
	undefined: Xv,
	union: ly,
	unknown: Jv,
	void: ty,
	NEVER: Ny,
	ZodIssueCode: M,
	quotelessJson: xv,
	ZodError: vt,
});
Ty.Schema;
const Ry = (l) => {
	if (!l) return { error: "jsonSafeParse: string is empty", success: !1 };
	try {
		return { json: JSON.parse(l), success: !0 };
	} catch (r) {
		return (
			console.error("error parsing json", r),
			{ error: `jsonSafeParse: couldn't parse ${l}`, success: !1 }
		);
	}
};
function Yd() {
	if (typeof window.crypto.randomUUID == "function")
		return window.crypto.randomUUID();
	let l = "";
	for (let r = 0; r < 36; r++)
		if ([8, 13, 18, 23].includes(r)) l = l + "-";
		else {
			const o = Math.floor(36 * Math.random());
			l = l + o.toString(36);
		}
	return l;
}
const vs = "DICE_CITY_OPTIONS",
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
	Df = R.createContext({ options: Af, setOptions: () => {} }),
	Py = ({ children: l }) => {
		const r = localStorage.getItem(vs);
		let o = {};
		const c = Ry(r);
		c.success && (o = c.json);
		const [u, d] = R.useState({ ...Af, ...o });
		return (
			R.useEffect(() => {
				(!u.playerId || !u.playerPassword) &&
					d((m) => {
						const h = { ...m };
						h.playerId || (h.playerId = Yd()),
							h.playerPassword || (h.playerPassword = Yd());
						const { ping: f, ...v } = h;
						return localStorage.setItem(vs, JSON.stringify(v)), h;
					});
			}, []),
			j.jsx(Df.Provider, {
				value: {
					options: u,
					setOptions: (m) => {
						d((h) => {
							const f = { ...h, ...m },
								{ ping: v, ...g } = f;
							return localStorage.setItem(vs, JSON.stringify(g)), f;
						});
					},
				},
				children: l,
			})
		);
	},
	ho = () => R.useContext(Df),
	jy = "modulepreload",
	Oy = function (l) {
		return "/" + l;
	},
	Gd = {},
	As = function (r, o, c) {
		let u = Promise.resolve();
		if (o && o.length > 0) {
			document.getElementsByTagName("link");
			const m = document.querySelector("meta[property=csp-nonce]"),
				h =
					(m == null ? void 0 : m.nonce) ||
					(m == null ? void 0 : m.getAttribute("nonce"));
			u = Promise.allSettled(
				o.map((f) => {
					if (((f = Oy(f)), f in Gd)) return;
					Gd[f] = !0;
					const v = f.endsWith(".css"),
						g = v ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${f}"]${g}`)) return;
					const x = document.createElement("link");
					if (
						((x.rel = v ? "stylesheet" : jy),
						v || (x.as = "script"),
						(x.crossOrigin = ""),
						(x.href = f),
						h && x.setAttribute("nonce", h),
						document.head.appendChild(x),
						v)
					)
						return new Promise((w, T) => {
							x.addEventListener("load", w),
								x.addEventListener("error", () =>
									T(new Error(`Unable to preload CSS for ${f}`)),
								);
						});
				}),
			);
		}
		function d(m) {
			const h = new Event("vite:preloadError", { cancelable: !0 });
			if (((h.payload = m), window.dispatchEvent(h), !h.defaultPrevented))
				throw m;
		}
		return u.then((m) => {
			for (const h of m || []) h.status === "rejected" && d(h.reason);
			return r().catch(d);
		});
	};
function $f() {
	return j.jsx("div", {
		className: "flex h-full items-center justify-center",
		children: j.jsx("div", {
			className: "animate-spin-loading rounded-full border p-4",
			children: "Loading",
		}),
	});
}
const Mg = Object.freeze(
	Object.defineProperty({ __proto__: null, default: $f }, Symbol.toStringTag, {
		value: "Module",
	}),
);
function uo({ children: l, className: r }) {
	return j.jsx("div", {
		className: `mx-1 first:ml-0 last:mr-0 ${r || ""}`,
		children: l,
	});
}
function Ly() {
	const {
			options: { playerName: l },
			setOptions: r,
		} = ho(),
		o = R.useRef(null),
		[c, u] = R.useState(!l),
		[d, m] = R.useState(l);
	return (
		R.useEffect(() => {
			l ||
				setTimeout(() => {
					var h;
					(h = o.current) == null || h.focus();
				});
		}, []),
		j.jsx(uo, {
			children: c
				? j.jsxs("form", {
						onSubmit: (h) => {
							h.preventDefault(), d && (r({ playerName: d }), u(!1));
						},
						children: [
							j.jsx("input", {
								className:
									"rounded-l border border-r-0 border-gray-600 px-2 dark:border-gray-300 dark:bg-gray-600",
								ref: o,
								type: "text",
								onChange: (h) => {
									m(h.target.value);
								},
								value: d,
								placeholder: "Enter your name",
								required: !0,
							}),
							j.jsx("button", {
								className:
									"rounded-r border border-gray-600 px-2 py-0 dark:border-gray-300",
								children: "Save",
							}),
						],
					})
				: j.jsxs(j.Fragment, {
						children: [
							j.jsx("span", { className: "mr-2", children: l }),
							j.jsx("button", {
								className:
									"rounded border border-gray-600 px-2 py-0 dark:border-gray-300",
								onClick: () => {
									u(!0),
										setTimeout(() => {
											if (o.current) {
												const h = o.current;
												h.focus(), h.setSelectionRange(0, h.value.length);
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
function Kl({ children: l, legend: r }) {
	return j.jsxs("fieldset", {
		className:
			"border border-gray-700 p-2 dark:border-gray-300 dark:bg-gray-800",
		children: [
			!!r && j.jsx("legend", { className: "-mb-2 px-0.5", children: r }),
			l,
		],
	});
}
function Iy({ darkMode: l, setOptions: r }) {
	return j.jsxs(Kl, {
		legend: "Colour Theme",
		children: [
			j.jsxs("label", {
				className: "block",
				children: [
					j.jsx("input", {
						onChange: () => {
							r({ darkMode: "dark" });
						},
						type: "radio",
						value: "dark",
						name: "darkMode",
						checked: l === "dark",
					}),
					" Dark Mode",
				],
			}),
			j.jsxs("label", {
				className: "block",
				children: [
					j.jsx("input", {
						onChange: () => {
							r({ darkMode: "light" });
						},
						type: "radio",
						value: "light",
						name: "darkMode",
						checked: l === "light",
					}),
					" Light Mode",
				],
			}),
			j.jsxs("label", {
				className: "block",
				children: [
					j.jsx("input", {
						onChange: () => {
							r({ darkMode: "system" });
						},
						type: "radio",
						value: "system",
						name: "darkMode",
						checked: l === "system",
					}),
					" System (default)",
				],
			}),
		],
	});
}
function zy() {
	const { options: l, setOptions: r } = ho(),
		o = R.useRef(new Audio("/dice-roll.mp3")).current,
		c = R.useRef(new Audio("/chord-ceg.mp3")).current;
	return j.jsx(uo, {
		className: "relative",
		children: j.jsxs("details", {
			children: [
				j.jsx("summary", { children: "Options" }),
				j.jsxs("div", {
					className:
						"absolute right-0 top-full z-30 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800",
					children: [
						j.jsx(Iy, { darkMode: l.darkMode, setOptions: r }),
						j.jsxs(Kl, {
							legend: "Show Names",
							children: [
								j.jsxs("label", {
									className: "block",
									children: [
										j.jsx("input", {
											type: "checkbox",
											checked: l.showNamesPublic,
											onChange: () => {
												r({ showNamesPublic: !l.showNamesPublic });
											},
										}),
										" Public Games",
									],
								}),
								j.jsxs("label", {
									className: "block",
									children: [
										j.jsx("input", {
											type: "checkbox",
											checked: l.showNames,
											onChange: () => {
												r({ showNames: !l.showNames });
											},
										}),
										" Private Games",
									],
								}),
							],
						}),
						j.jsxs(Kl, {
							legend: "Misc.",
							children: [
								j.jsxs("label", {
									className: "block",
									children: [
										j.jsx("input", {
											type: "checkbox",
											checked: l.alwaysShowCities,
											onChange: () => {
												r({ alwaysShowCities: !l.alwaysShowCities });
											},
										}),
										"  Always Show Cities",
									],
								}),
								j.jsxs("label", {
									className: "block",
									children: [
										j.jsx("input", {
											type: "checkbox",
											checked: l.alwaysShowSupply,
											onChange: () => {
												r({ alwaysShowSupply: !l.alwaysShowSupply });
											},
										}),
										"  Always Show Supply",
									],
								}),
								j.jsxs("label", {
									className: "block",
									children: [
										j.jsx("input", {
											type: "checkbox",
											checked: l.alwaysShowEstablishmentList,
											onChange: () => {
												r({
													alwaysShowEstablishmentList:
														!l.alwaysShowEstablishmentList,
												});
											},
										}),
										"  Always Show Establishment List",
									],
								}),
								j.jsxs("label", {
									className: "block",
									children: [
										j.jsx("input", {
											type: "checkbox",
											checked: !l.hideInstructions,
											onChange: () => {
												r({ hideInstructions: !l.hideInstructions });
											},
										}),
										"  Always Show Instructions",
									],
								}),
								j.jsxs("label", {
									className: "block",
									children: [
										j.jsx("input", {
											type: "checkbox",
											checked: l.newestEventFirst,
											onChange: () => {
												r({ newestEventFirst: !l.newestEventFirst });
											},
										}),
										"  Newest Turn Event On Top",
									],
								}),
								j.jsxs("label", {
									className: "flex items-center gap-4",
									children: [
										j.jsxs("div", {
											children: [
												j.jsx("span", {
													className: "font-mono",
													children: l.turnEventSummaryCount,
												}),
												j.jsx("span", {
													children: " Turn Event Summary Items",
												}),
											],
										}),
										j.jsx("input", {
											className: "max-w-24",
											type: "range",
											min: 0,
											max: 5,
											step: 1,
											value: l.turnEventSummaryCount,
											onChange: (u) => {
												r({
													turnEventSummaryCount: parseInt(
														u.currentTarget.value,
														10,
													),
												});
											},
										}),
									],
								}),
							],
						}),
						j.jsx(Kl, {
							legend: "Volume",
							children: j.jsx("table", {
								className: "w-full",
								children: j.jsxs("tbody", {
									children: [
										j.jsxs("tr", {
											children: [
												j.jsx("td", { children: "Dice Roll" }),
												j.jsx("td", {
													children: j.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: j.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															value: l.diceRollVolume,
															min: 0,
															max: 1,
															step: 0.01,
															onChange: (u) => {
																r({
																	diceRollVolume: parseFloat(
																		u.currentTarget.value,
																	),
																});
															},
															onMouseUp: (u) => {
																(o.volume = parseFloat(u.currentTarget.value)),
																	o.play();
															},
														}),
													}),
												}),
											],
										}),
										j.jsxs("tr", {
											children: [
												j.jsx("td", { children: "Your Turn" }),
												j.jsx("td", {
													children: j.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: j.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															min: 0,
															max: 1,
															step: 0.01,
															value: l.yourTurnVolume,
															onChange: (u) => {
																r({
																	yourTurnVolume: parseFloat(
																		u.currentTarget.value,
																	),
																});
															},
															onMouseUp: (u) => {
																(c.volume = parseFloat(u.currentTarget.value)),
																	c.play();
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
function My() {
	const { options: l } = ho();
	return j.jsxs("div", {
		className: "absolute mb-1 mt-2 flex w-full flex-wrap justify-end",
		children: [
			j.jsx("div", { className: "basis-1" }),
			j.jsx(Ly, {}),
			typeof l.ping == "number" &&
				j.jsxs("div", { children: ["Ping: ", l.ping, " ms"] }),
			j.jsx("div", { className: "grow" }),
			j.jsx(zy, {}),
			j.jsx(uo, { children: j.jsx(zs, { to: "/", children: "Home" }) }),
			j.jsx(uo, {
				children: j.jsx("a", {
					target: "_blank",
					href: "https://github.com/nick-ng/dice-city",
					children: "GitHub",
				}),
			}),
			j.jsx("div", { className: "basis-1" }),
		],
	});
}
var Yl = { exports: {} },
	Ay = Yl.exports,
	Xd;
function Dy() {
	return (
		Xd ||
			((Xd = 1),
			(function (l) {
				(function (r, o, c) {
					function u(f) {
						var v = this,
							g = h();
						(v.next = function () {
							var x = 2091639 * v.s0 + v.c * 23283064365386963e-26;
							return (v.s0 = v.s1), (v.s1 = v.s2), (v.s2 = x - (v.c = x | 0));
						}),
							(v.c = 1),
							(v.s0 = g(" ")),
							(v.s1 = g(" ")),
							(v.s2 = g(" ")),
							(v.s0 -= g(f)),
							v.s0 < 0 && (v.s0 += 1),
							(v.s1 -= g(f)),
							v.s1 < 0 && (v.s1 += 1),
							(v.s2 -= g(f)),
							v.s2 < 0 && (v.s2 += 1),
							(g = null);
					}
					function d(f, v) {
						return (v.c = f.c), (v.s0 = f.s0), (v.s1 = f.s1), (v.s2 = f.s2), v;
					}
					function m(f, v) {
						var g = new u(f),
							x = v && v.state,
							w = g.next;
						return (
							(w.int32 = function () {
								return (g.next() * 4294967296) | 0;
							}),
							(w.double = function () {
								return w() + ((w() * 2097152) | 0) * 11102230246251565e-32;
							}),
							(w.quick = w),
							x &&
								(typeof x == "object" && d(x, g),
								(w.state = function () {
									return d(g, {});
								})),
							w
						);
					}
					function h() {
						var f = 4022871197,
							v = function (g) {
								g = String(g);
								for (var x = 0; x < g.length; x++) {
									f += g.charCodeAt(x);
									var w = 0.02519603282416938 * f;
									(f = w >>> 0),
										(w -= f),
										(w *= f),
										(f = w >>> 0),
										(w -= f),
										(f += w * 4294967296);
								}
								return (f >>> 0) * 23283064365386963e-26;
							};
						return v;
					}
					o && o.exports ? (o.exports = m) : (this.alea = m);
				})(Ay, l);
			})(Yl)),
		Yl.exports
	);
}
var Gl = { exports: {} },
	$y = Gl.exports,
	qd;
function Fy() {
	return (
		qd ||
			((qd = 1),
			(function (l) {
				(function (r, o, c) {
					function u(h) {
						var f = this,
							v = "";
						(f.x = 0),
							(f.y = 0),
							(f.z = 0),
							(f.w = 0),
							(f.next = function () {
								var x = f.x ^ (f.x << 11);
								return (
									(f.x = f.y),
									(f.y = f.z),
									(f.z = f.w),
									(f.w ^= (f.w >>> 19) ^ x ^ (x >>> 8))
								);
							}),
							h === (h | 0) ? (f.x = h) : (v += h);
						for (var g = 0; g < v.length + 64; g++)
							(f.x ^= v.charCodeAt(g) | 0), f.next();
					}
					function d(h, f) {
						return (f.x = h.x), (f.y = h.y), (f.z = h.z), (f.w = h.w), f;
					}
					function m(h, f) {
						var v = new u(h),
							g = f && f.state,
							x = function () {
								return (v.next() >>> 0) / 4294967296;
							};
						return (
							(x.double = function () {
								do
									var w = v.next() >>> 11,
										T = (v.next() >>> 0) / 4294967296,
										P = (w + T) / (1 << 21);
								while (P === 0);
								return P;
							}),
							(x.int32 = v.next),
							(x.quick = x),
							g &&
								(typeof g == "object" && d(g, v),
								(x.state = function () {
									return d(v, {});
								})),
							x
						);
					}
					o && o.exports ? (o.exports = m) : (this.xor128 = m);
				})($y, l);
			})(Gl)),
		Gl.exports
	);
}
var Xl = { exports: {} },
	Uy = Xl.exports,
	bd;
function Vy() {
	return (
		bd ||
			((bd = 1),
			(function (l) {
				(function (r, o, c) {
					function u(h) {
						var f = this,
							v = "";
						(f.next = function () {
							var x = f.x ^ (f.x >>> 2);
							return (
								(f.x = f.y),
								(f.y = f.z),
								(f.z = f.w),
								(f.w = f.v),
								((f.d = (f.d + 362437) | 0) +
									(f.v = f.v ^ (f.v << 4) ^ (x ^ (x << 1)))) |
									0
							);
						}),
							(f.x = 0),
							(f.y = 0),
							(f.z = 0),
							(f.w = 0),
							(f.v = 0),
							h === (h | 0) ? (f.x = h) : (v += h);
						for (var g = 0; g < v.length + 64; g++)
							(f.x ^= v.charCodeAt(g) | 0),
								g == v.length && (f.d = (f.x << 10) ^ (f.x >>> 4)),
								f.next();
					}
					function d(h, f) {
						return (
							(f.x = h.x),
							(f.y = h.y),
							(f.z = h.z),
							(f.w = h.w),
							(f.v = h.v),
							(f.d = h.d),
							f
						);
					}
					function m(h, f) {
						var v = new u(h),
							g = f && f.state,
							x = function () {
								return (v.next() >>> 0) / 4294967296;
							};
						return (
							(x.double = function () {
								do
									var w = v.next() >>> 11,
										T = (v.next() >>> 0) / 4294967296,
										P = (w + T) / (1 << 21);
								while (P === 0);
								return P;
							}),
							(x.int32 = v.next),
							(x.quick = x),
							g &&
								(typeof g == "object" && d(g, v),
								(x.state = function () {
									return d(v, {});
								})),
							x
						);
					}
					o && o.exports ? (o.exports = m) : (this.xorwow = m);
				})(Uy, l);
			})(Xl)),
		Xl.exports
	);
}
var ql = { exports: {} },
	By = ql.exports,
	Jd;
function Zy() {
	return (
		Jd ||
			((Jd = 1),
			(function (l) {
				(function (r, o, c) {
					function u(h) {
						var f = this;
						f.next = function () {
							var g = f.x,
								x = f.i,
								w,
								T;
							return (
								(w = g[x]),
								(w ^= w >>> 7),
								(T = w ^ (w << 24)),
								(w = g[(x + 1) & 7]),
								(T ^= w ^ (w >>> 10)),
								(w = g[(x + 3) & 7]),
								(T ^= w ^ (w >>> 3)),
								(w = g[(x + 4) & 7]),
								(T ^= w ^ (w << 7)),
								(w = g[(x + 7) & 7]),
								(w = w ^ (w << 13)),
								(T ^= w ^ (w << 9)),
								(g[x] = T),
								(f.i = (x + 1) & 7),
								T
							);
						};
						function v(g, x) {
							var w,
								T = [];
							if (x === (x | 0)) T[0] = x;
							else
								for (x = "" + x, w = 0; w < x.length; ++w)
									T[w & 7] =
										(T[w & 7] << 15) ^
										((x.charCodeAt(w) + T[(w + 1) & 7]) << 13);
							for (; T.length < 8; ) T.push(0);
							for (w = 0; w < 8 && T[w] === 0; ++w);
							for (
								w == 8 ? (T[7] = -1) : T[w], g.x = T, g.i = 0, w = 256;
								w > 0;
								--w
							)
								g.next();
						}
						v(f, h);
					}
					function d(h, f) {
						return (f.x = h.x.slice()), (f.i = h.i), f;
					}
					function m(h, f) {
						h == null && (h = +new Date());
						var v = new u(h),
							g = f && f.state,
							x = function () {
								return (v.next() >>> 0) / 4294967296;
							};
						return (
							(x.double = function () {
								do
									var w = v.next() >>> 11,
										T = (v.next() >>> 0) / 4294967296,
										P = (w + T) / (1 << 21);
								while (P === 0);
								return P;
							}),
							(x.int32 = v.next),
							(x.quick = x),
							g &&
								(g.x && d(g, v),
								(x.state = function () {
									return d(v, {});
								})),
							x
						);
					}
					o && o.exports ? (o.exports = m) : (this.xorshift7 = m);
				})(By, l);
			})(ql)),
		ql.exports
	);
}
var bl = { exports: {} },
	Wy = bl.exports,
	ef;
function Hy() {
	return (
		ef ||
			((ef = 1),
			(function (l) {
				(function (r, o, c) {
					function u(h) {
						var f = this;
						f.next = function () {
							var g = f.w,
								x = f.X,
								w = f.i,
								T,
								P;
							return (
								(f.w = g = (g + 1640531527) | 0),
								(P = x[(w + 34) & 127]),
								(T = x[(w = (w + 1) & 127)]),
								(P ^= P << 13),
								(T ^= T << 17),
								(P ^= P >>> 15),
								(T ^= T >>> 12),
								(P = x[w] = P ^ T),
								(f.i = w),
								(P + (g ^ (g >>> 16))) | 0
							);
						};
						function v(g, x) {
							var w,
								T,
								P,
								A,
								D,
								$ = [],
								V = 128;
							for (
								x === (x | 0)
									? ((T = x), (x = null))
									: ((x = x + "\0"), (T = 0), (V = Math.max(V, x.length))),
									P = 0,
									A = -32;
								A < V;
								++A
							)
								x && (T ^= x.charCodeAt((A + 32) % x.length)),
									A === 0 && (D = T),
									(T ^= T << 10),
									(T ^= T >>> 15),
									(T ^= T << 4),
									(T ^= T >>> 13),
									A >= 0 &&
										((D = (D + 1640531527) | 0),
										(w = $[A & 127] ^= T + D),
										(P = w == 0 ? P + 1 : 0));
							for (
								P >= 128 && ($[((x && x.length) || 0) & 127] = -1),
									P = 127,
									A = 4 * 128;
								A > 0;
								--A
							)
								(T = $[(P + 34) & 127]),
									(w = $[(P = (P + 1) & 127)]),
									(T ^= T << 13),
									(w ^= w << 17),
									(T ^= T >>> 15),
									(w ^= w >>> 12),
									($[P] = T ^ w);
							(g.w = D), (g.X = $), (g.i = P);
						}
						v(f, h);
					}
					function d(h, f) {
						return (f.i = h.i), (f.w = h.w), (f.X = h.X.slice()), f;
					}
					function m(h, f) {
						h == null && (h = +new Date());
						var v = new u(h),
							g = f && f.state,
							x = function () {
								return (v.next() >>> 0) / 4294967296;
							};
						return (
							(x.double = function () {
								do
									var w = v.next() >>> 11,
										T = (v.next() >>> 0) / 4294967296,
										P = (w + T) / (1 << 21);
								while (P === 0);
								return P;
							}),
							(x.int32 = v.next),
							(x.quick = x),
							g &&
								(g.X && d(g, v),
								(x.state = function () {
									return d(v, {});
								})),
							x
						);
					}
					o && o.exports ? (o.exports = m) : (this.xor4096 = m);
				})(Wy, l);
			})(bl)),
		bl.exports
	);
}
var Jl = { exports: {} },
	Qy = Jl.exports,
	tf;
function Ky() {
	return (
		tf ||
			((tf = 1),
			(function (l) {
				(function (r, o, c) {
					function u(h) {
						var f = this,
							v = "";
						(f.next = function () {
							var x = f.b,
								w = f.c,
								T = f.d,
								P = f.a;
							return (
								(x = (x << 25) ^ (x >>> 7) ^ w),
								(w = (w - T) | 0),
								(T = (T << 24) ^ (T >>> 8) ^ P),
								(P = (P - x) | 0),
								(f.b = x = (x << 20) ^ (x >>> 12) ^ w),
								(f.c = w = (w - T) | 0),
								(f.d = (T << 16) ^ (w >>> 16) ^ P),
								(f.a = (P - x) | 0)
							);
						}),
							(f.a = 0),
							(f.b = 0),
							(f.c = -1640531527),
							(f.d = 1367130551),
							h === Math.floor(h)
								? ((f.a = (h / 4294967296) | 0), (f.b = h | 0))
								: (v += h);
						for (var g = 0; g < v.length + 20; g++)
							(f.b ^= v.charCodeAt(g) | 0), f.next();
					}
					function d(h, f) {
						return (f.a = h.a), (f.b = h.b), (f.c = h.c), (f.d = h.d), f;
					}
					function m(h, f) {
						var v = new u(h),
							g = f && f.state,
							x = function () {
								return (v.next() >>> 0) / 4294967296;
							};
						return (
							(x.double = function () {
								do
									var w = v.next() >>> 11,
										T = (v.next() >>> 0) / 4294967296,
										P = (w + T) / (1 << 21);
								while (P === 0);
								return P;
							}),
							(x.int32 = v.next),
							(x.quick = x),
							g &&
								(typeof g == "object" && d(g, v),
								(x.state = function () {
									return d(v, {});
								})),
							x
						);
					}
					o && o.exports ? (o.exports = m) : (this.tychei = m);
				})(Qy, l);
			})(Jl)),
		Jl.exports
	);
}
var eo = { exports: {} };
const Yy = {},
	Gy = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: Yy },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Xy = Ah(Gy);
var qy = eo.exports,
	nf;
function by() {
	return (
		nf ||
			((nf = 1),
			(function (l) {
				(function (r, o, c) {
					var u = 256,
						d = 6,
						m = 52,
						h = "random",
						f = c.pow(u, d),
						v = c.pow(2, m),
						g = v * 2,
						x = u - 1,
						w;
					function T(Q, b, fe) {
						var oe = [];
						b = b == !0 ? { entropy: !0 } : b || {};
						var se = $(D(b.entropy ? [Q, ie(o)] : (Q ?? V()), 3), oe),
							he = new P(oe),
							we = function () {
								for (var je = he.g(d), Fe = f, Te = 0; je < v; )
									(je = (je + Te) * u), (Fe *= u), (Te = he.g(1));
								for (; je >= g; ) (je /= 2), (Fe /= 2), (Te >>>= 1);
								return (je + Te) / Fe;
							};
						return (
							(we.int32 = function () {
								return he.g(4) | 0;
							}),
							(we.quick = function () {
								return he.g(4) / 4294967296;
							}),
							(we.double = we),
							$(ie(he.S), o),
							(
								b.pass ||
								fe ||
								function (je, Fe, Te, Ue) {
									return (
										Ue &&
											(Ue.S && A(Ue, he),
											(je.state = function () {
												return A(he, {});
											})),
										Te ? ((c[h] = je), Fe) : je
									);
								}
							)(we, se, "global" in b ? b.global : this == c, b.state)
						);
					}
					function P(Q) {
						var b,
							fe = Q.length,
							oe = this,
							se = 0,
							he = (oe.i = oe.j = 0),
							we = (oe.S = []);
						for (fe || (Q = [fe++]); se < u; ) we[se] = se++;
						for (se = 0; se < u; se++)
							(we[se] = we[(he = x & (he + Q[se % fe] + (b = we[se])))]),
								(we[he] = b);
						(oe.g = function (je) {
							for (var Fe, Te = 0, Ue = oe.i, tt = oe.j, Ve = oe.S; je--; )
								(Fe = Ve[(Ue = x & (Ue + 1))]),
									(Te =
										Te * u +
										Ve[
											x & ((Ve[Ue] = Ve[(tt = x & (tt + Fe))]) + (Ve[tt] = Fe))
										]);
							return (oe.i = Ue), (oe.j = tt), Te;
						})(u);
					}
					function A(Q, b) {
						return (b.i = Q.i), (b.j = Q.j), (b.S = Q.S.slice()), b;
					}
					function D(Q, b) {
						var fe = [],
							oe = typeof Q,
							se;
						if (b && oe == "object")
							for (se in Q)
								try {
									fe.push(D(Q[se], b - 1));
								} catch {}
						return fe.length ? fe : oe == "string" ? Q : Q + "\0";
					}
					function $(Q, b) {
						for (var fe = Q + "", oe, se = 0; se < fe.length; )
							b[x & se] = x & ((oe ^= b[x & se] * 19) + fe.charCodeAt(se++));
						return ie(b);
					}
					function V() {
						try {
							var Q;
							return (
								w && (Q = w.randomBytes)
									? (Q = Q(u))
									: ((Q = new Uint8Array(u)),
										(r.crypto || r.msCrypto).getRandomValues(Q)),
								ie(Q)
							);
						} catch {
							var b = r.navigator,
								fe = b && b.plugins;
							return [+new Date(), r, fe, r.screen, ie(o)];
						}
					}
					function ie(Q) {
						return String.fromCharCode.apply(0, Q);
					}
					if (($(c.random(), o), l.exports)) {
						l.exports = T;
						try {
							w = Xy;
						} catch {}
					} else c["seed" + h] = T;
				})(typeof self < "u" ? self : qy, [], Math);
			})(eo)),
		eo.exports
	);
}
var ys, rf;
function Jy() {
	if (rf) return ys;
	rf = 1;
	var l = Dy(),
		r = Fy(),
		o = Vy(),
		c = Zy(),
		u = Hy(),
		d = Ky(),
		m = by();
	return (
		(m.alea = l),
		(m.xor128 = r),
		(m.xorwow = o),
		(m.xorshift7 = c),
		(m.xor4096 = u),
		(m.tychei = d),
		(ys = m),
		ys
	);
}
var eg = Jy();
const tg = uf(eg),
	ng = [
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
	rg = ["Robot", "Locomotive", "Automobile"],
	ig = ["Cactus", "Sunflower", "Poppy", "Banana"],
	lg = ["ChristopherNolan"],
	og = ["MonopolySet"],
	lf = Object.freeze([...new Set([...ng, ...rg, ...ig, ...lg, ...og])]),
	ag = 1,
	gs = 2,
	sg = 4,
	of = 5,
	ug = 7,
	cg = 8,
	dg = 10,
	fg = [
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
	pg = ["Singular", "Multiple", "One", "Two", "Extra"],
	hg = ["Big", "Small", "Huge", "Little", "Colossal", "Tiny"],
	mg = [
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
	vg = ["Brutal", "Kind", "Nippy", "Savage"],
	yg = ["Old", "Young", "Elder", "Adolescent"],
	gg = ["Quick", "Slow", "Fast", "Sluggish"],
	xg = [
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
	wg = ["Solid", "Hard", "Squishy"],
	_g = ["Poisonous", "Venomous"],
	kg = Object.freeze(
		[
			...fg.map((l) => ({
				value: l,
				type: "colour",
				order: cg,
				allowMultiple: !1,
			})),
			...pg.map((l) => ({
				value: l,
				type: "count",
				order: ag,
				allowMultiple: !1,
			})),
			...hg.map((l) => ({
				value: l,
				type: "size",
				order: sg,
				allowMultiple: !1,
			})),
			...mg.map((l) => ({
				value: l,
				type: "nature",
				order: gs,
				allowMultiple: !1,
			})),
			...vg.map((l) => ({
				value: l,
				type: "general_opinion",
				order: gs,
				allowMultiple: !0,
			})),
			...yg.map((l) => ({
				value: l,
				type: "age",
				order: ug,
				allowMultiple: !1,
			})),
			...gg.map((l) => ({
				value: l,
				type: "speed",
				order: gs,
				allowMultiple: !1,
			})),
			...xg.map((l) => ({
				value: l,
				type: "material",
				order: dg,
				allowMultiple: !1,
			})),
			...wg.map((l) => ({
				value: l,
				type: "physical_quality",
				order: of,
				allowMultiple: !1,
			})),
			..._g.map((l) => ({
				value: l,
				type: "physical_quality_b",
				order: of,
				allowMultiple: !0,
			})),
		].map((l) => Object.freeze(l)),
	),
	Sg = 2,
	Ff = (l, r = 2) => {
		const o = tg(l),
			c = Math.floor(lf.length * o()),
			u = lf[c],
			d = [],
			m = [];
		for (let h = 0; h < r; h++) {
			const f = kg.filter((g) => {
					const { type: x, value: w } = g;
					return !m.includes(x) && !d.map((T) => T.value).includes(w);
				}),
				v = Math.floor(f.length * o());
			f[v].allowMultiple || m.push(f[v].type), d.push(f[v]);
		}
		return [
			...d.sort((h, f) => h.order - f.order).map(({ value: h }) => h),
			u,
		].join("");
	},
	Eg = (l, r, o = !1) => (r && o ? r : Ff(l, Sg)),
	Ag = (l, r, o, c) =>
		l.reduce(
			(u, { id: d, name: m }) => u.replaceAll(`%${d}%`, Eg(d, m, r || d === o)),
			c,
		),
	af = "NICK_NAME_GEN_STORE";
function Cg() {
	const [l, r] = R.useState([]),
		[o, c] = R.useState(""),
		[u, d] = R.useState(Date.now().toString()),
		[m, h] = R.useState(2),
		f = Ff(u, m),
		v = R.useCallback(
			(g) => {
				localStorage.setItem(
					af,
					JSON.stringify({ namePrefixes: l, adjectiveCount: m, ...g }),
				);
			},
			[l.join(""), m],
		);
	return (
		R.useEffect(() => {
			try {
				const g = localStorage.getItem(af);
				if (typeof g == "string") {
					const x = JSON.parse(g);
					r((w) => (x == null ? void 0 : x.namePrefixes) || w),
						h((w) => (x == null ? void 0 : x.adjectiveCount) || w),
						c(
							(w) =>
								w ||
								(x == null
									? void 0
									: x.namePrefixes.join(`
`)),
						);
				}
			} catch {}
		}, []),
		j.jsxs("div", {
			className: "left-0 right-0 mx-auto max-w-prose",
			children: [
				j.jsx("textarea", {
					className:
						"mb-2 block resize-none rounded border border-gray-400 bg-white px-0.5 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
					spellCheck: !1,
					value: o,
					onChange: (g) => {
						c(g.target.value);
						const x = g.target.value
							.split(
								`
`,
							)
							.map((w) => w.trim())
							.filter((w) => w);
						r(x), v({ namePrefixes: x });
					},
				}),
				j.jsxs("label", {
					className: "block",
					children: [
						"Adjective Count ",
						j.jsx("input", {
							className:
								"rounded border border-gray-200 bg-white px-0.5 text-right text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
							type: "number",
							value: m,
							onChange: (g) => {
								const x = parseInt(g.target.value, 10) || 0;
								v({ adjectiveCount: x }), h(x);
							},
						}),
					],
				}),
				j.jsx("button", {
					className: "button-default",
					onClick: () => {
						d(Date.now().toString());
					},
					children: "Randomise",
				}),
				j.jsx("ul", {
					className: "ml-5 mt-2 list-disc",
					children: ["", ...l].map((g, x) => {
						const w = `${g}${f}`;
						return j.jsxs(
							"li",
							{
								children: [
									w,
									" (",
									w.length,
									") ",
									j.jsx("button", {
										className: "button-default",
										onClick: () => {
											navigator.clipboard.writeText(w);
										},
										children: "Copy",
									}),
								],
							},
							`${g}-${x}`,
						);
					}),
				}),
			],
		})
	);
}
const Ts = {
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
	Ng = new Array(12).fill(0).map((l, r) => r + 1);
function xs(l, r) {
	if (!l) return 0;
	let o = 0;
	return (
		l.includes("🎲🎲")
			? (o = r.reduce((c, u) => c + Ts["🎲🎲"][u], 0))
			: (o = r.reduce((c, u) => c + Ts["🎲"][u], 0)),
		l.includes("➕") ? 1 - (1 - o) * (1 - o) : l.includes("➖") ? o * o : o
	);
}
function Tg() {
	const [l, r] = R.useState(null),
		[o, c] = R.useState([]),
		u = xs(l, o);
	return j.jsxs("div", {
		className: "px-2",
		children: [
			j.jsx("h2", { children: "Probability" }),
			j.jsx("p", {
				className: "max-w-prose",
				children:
					"This table has the probability of getting each dice roll total.",
			}),
			j.jsx("p", {
				className: "max-w-prose",
				children:
					"To show the probability of getting one of a number of dice roll totals, click on the columns.",
			}),
			j.jsx("p", {
				className: "max-w-prose",
				children: "🎲: The number of dice rolled.",
			}),
			j.jsx("p", {
				className: "max-w-prose",
				children:
					"➕🛍️: If the first dice roll was one of the selected totals, keep the result. If the first dice roll wasn't one of the selected totals, use the Shopping Mall re-roll.",
			}),
			j.jsx("p", {
				className: "max-w-prose",
				children:
					"➖🛍️: If the first dice roll was one of the selected totals, use the Shopping Mall re-roll. If the first dice roll wasn't one of the selected totals, keep the result.",
			}),
			j.jsx("button", {
				className: "button-default",
				onClick: () => {
					c([]), r(null);
				},
				children: "Reset",
			}),
			j.jsxs("table", {
				className: "my-2",
				children: [
					j.jsx("thead", {
						children: j.jsxs("tr", {
							children: [
								j.jsx("th", {
									className: "border-default px-2",
									children:
										u > 0
											? j.jsx("button", {
													className: "w-full",
													onClick: () => {
														c([]), r(null);
													},
													children: u.toFixed(3),
												})
											: null,
								}),
								Ng.map((d, m) =>
									j.jsx(
										"th",
										{
											className: `border-default ${o.includes(m) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
											children: j.jsx("button", {
												className: "px-2 w-full ",
												onClick: () => {
													c((h) =>
														h.includes(m)
															? h.filter((f) => f !== m)
															: [...h, m],
													);
												},
												children: d,
											}),
										},
										d,
									),
								),
								j.jsx("th", {
									className: "border-default px-2",
									children: "Total",
								}),
							],
						}),
					}),
					j.jsx("tbody", {
						children: Object.entries(Ts).map(([d, m]) =>
							j.jsxs(
								"tr",
								{
									className: "dark:odd:bg-gray-700 odd:bg-gray-100",
									children: [
										j.jsx("td", {
											className: "border-default text-left px-2",
											children: d,
										}),
										m.map((h, f) =>
											j.jsx(
												"td",
												{
													className: `border-default ${o.includes(f) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
													children:
														h > 0 &&
														j.jsx("button", {
															className: "px-2 w-full ",
															onClick: () => {
																c((v) =>
																	v.includes(f)
																		? v.filter((g) => g !== f)
																		: [...v, f],
																);
															},
															children: h.toFixed(3),
														}),
												},
												f,
											),
										),
										j.jsx("td", {
											className: "border-default text-left px-2",
											children: j.jsx("span", {
												className: xs(d, o) > 0 ? "" : "opacity-0",
												children: xs(d, o).toFixed(3),
											}),
										}),
									],
								},
								d,
							),
						),
					}),
				],
			}),
		],
	});
}
const Rg = R.lazy(() =>
		As(() => import("./index-BlWVGLSO.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
	),
	Pg = R.lazy(() => As(() => import("./index-DwJrsHi8.js"), [])),
	jg = R.lazy(() =>
		As(
			() => import("./index-DNWoeIy0.js"),
			__vite__mapDeps([5, 1, 2, 3, 6, 7, 8, 9, 4, 10]),
		),
	),
	sf = (l) => {
		l === "dark" ||
		(l === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};
function Og() {
	const { options: l } = ho();
	return (
		R.useEffect(() => {
			sf(l.darkMode);
		}, [l.darkMode]),
		R.useEffect(() => {
			const r = window.matchMedia("(prefers-color-scheme: dark)"),
				o = () => {
					sf(l.darkMode);
				};
			return (
				r.addEventListener("change", o),
				() => {
					r.removeEventListener("change", o);
				}
			);
		}, []),
		j.jsx(R.Suspense, {
			fallback: j.jsx($f, {}),
			children: j.jsxs("div", {
				className: "absolute bottom-0 left-0 right-0 top-0",
				children: [
					j.jsx(My, {}),
					j.jsx("div", {
						className: "h-full pt-10",
						children: j.jsxs(Am, {
							children: [
								j.jsx(vr, { path: "/", element: j.jsx(Rg, {}) }),
								j.jsx(vr, { path: "/dev/*", element: j.jsx(Pg, {}) }),
								j.jsx(vr, { path: "/game/:id", element: j.jsx(jg, {}) }),
								j.jsx(vr, { path: "/name-generator", element: j.jsx(Cg, {}) }),
								j.jsx(vr, { path: "/probability", element: j.jsx(Tg, {}) }),
							],
						}),
					}),
				],
			}),
		})
	);
}
const Lg = Qh.createRoot(document.getElementById("root"));
Lg.render(
	j.jsx(R.StrictMode, {
		children: j.jsx(av, {
			children: j.jsx(gv, { children: j.jsx(Py, { children: j.jsx(Og, {}) }) }),
		}),
	}),
);
export {
	zs as L,
	Am as R,
	As as _,
	xf as a,
	vr as b,
	Ig as c,
	Ag as d,
	zg as e,
	$f as f,
	Eg as g,
	Mg as i,
	j,
	R as r,
	ho as u,
	Ty as z,
};
