const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"assets/index-Zwlz_Y8g.js",
			"assets/message-DuUFK-_S.js",
			"assets/utils-BPyf_07k.js",
			"assets/game-DR5qpDLN.js",
			"assets/index-C78ydJtb.js",
			"assets/index-CvV5zdT3.js",
			"assets/business-centre-B2_BH6JX.js",
			"assets/index-D0MswDF4.js",
			"assets/index-Csq9QI9i.js",
			"assets/build-DD_JKGOy.js",
			"assets/index-CDRi-Ra5.js",
		]),
) => i.map((i) => d[i]);
(function () {
	const d = document.createElement("link").relList;
	if (d && d.supports && d.supports("modulepreload")) return;
	for (const m of document.querySelectorAll('link[rel="modulepreload"]')) f(m);
	new MutationObserver((m) => {
		for (const y of m)
			if (y.type === "childList")
				for (const T of y.addedNodes)
					T.tagName === "LINK" && T.rel === "modulepreload" && f(T);
	}).observe(document, { childList: !0, subtree: !0 });
	function s(m) {
		const y = {};
		return (
			m.integrity && (y.integrity = m.integrity),
			m.referrerPolicy && (y.referrerPolicy = m.referrerPolicy),
			m.crossOrigin === "use-credentials"
				? (y.credentials = "include")
				: m.crossOrigin === "anonymous"
					? (y.credentials = "omit")
					: (y.credentials = "same-origin"),
			y
		);
	}
	function f(m) {
		if (m.ep) return;
		m.ep = !0;
		const y = s(m);
		fetch(m.href, y);
	}
})();
function xh(i) {
	return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
		? i.default
		: i;
}
function sy(i) {
	if (i.__esModule) return i;
	var d = i.default;
	if (typeof d == "function") {
		var s = function f() {
			return this instanceof f
				? Reflect.construct(d, arguments, this.constructor)
				: d.apply(this, arguments);
		};
		s.prototype = d.prototype;
	} else s = {};
	return (
		Object.defineProperty(s, "__esModule", { value: !0 }),
		Object.keys(i).forEach(function (f) {
			var m = Object.getOwnPropertyDescriptor(i, f);
			Object.defineProperty(
				s,
				f,
				m.get
					? m
					: {
							enumerable: !0,
							get: function () {
								return i[f];
							},
						},
			);
		}),
		s
	);
}
var _f = { exports: {} },
	Ou = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd;
function dy() {
	if (Vd) return Ou;
	Vd = 1;
	var i = Symbol.for("react.transitional.element"),
		d = Symbol.for("react.fragment");
	function s(f, m, y) {
		var T = null;
		if (
			(y !== void 0 && (T = "" + y),
			m.key !== void 0 && (T = "" + m.key),
			"key" in m)
		) {
			y = {};
			for (var g in m) g !== "key" && (y[g] = m[g]);
		} else y = m;
		return (
			(m = y.ref),
			{ $$typeof: i, type: f, key: T, ref: m !== void 0 ? m : null, props: y }
		);
	}
	return ((Ou.Fragment = d), (Ou.jsx = s), (Ou.jsxs = s), Ou);
}
var Kd;
function hy() {
	return (Kd || ((Kd = 1), (_f.exports = dy())), _f.exports);
}
var C = hy(),
	zf = { exports: {} },
	ut = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd;
function my() {
	if (Jd) return ut;
	Jd = 1;
	var i = Symbol.for("react.transitional.element"),
		d = Symbol.for("react.portal"),
		s = Symbol.for("react.fragment"),
		f = Symbol.for("react.strict_mode"),
		m = Symbol.for("react.profiler"),
		y = Symbol.for("react.consumer"),
		T = Symbol.for("react.context"),
		g = Symbol.for("react.forward_ref"),
		o = Symbol.for("react.suspense"),
		h = Symbol.for("react.memo"),
		p = Symbol.for("react.lazy"),
		b = Symbol.iterator;
	function S(x) {
		return x === null || typeof x != "object"
			? null
			: ((x = (b && x[b]) || x["@@iterator"]),
				typeof x == "function" ? x : null);
	}
	var N = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		z = Object.assign,
		Y = {};
	function Q(x, q, V) {
		((this.props = x),
			(this.context = q),
			(this.refs = Y),
			(this.updater = V || N));
	}
	((Q.prototype.isReactComponent = {}),
		(Q.prototype.setState = function (x, q) {
			if (typeof x != "object" && typeof x != "function" && x != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, x, q, "setState");
		}),
		(Q.prototype.forceUpdate = function (x) {
			this.updater.enqueueForceUpdate(this, x, "forceUpdate");
		}));
	function B() {}
	B.prototype = Q.prototype;
	function Z(x, q, V) {
		((this.props = x),
			(this.context = q),
			(this.refs = Y),
			(this.updater = V || N));
	}
	var $ = (Z.prototype = new B());
	(($.constructor = Z), z($, Q.prototype), ($.isPureReactComponent = !0));
	var J = Array.isArray,
		L = { H: null, A: null, T: null, S: null, V: null },
		ot = Object.prototype.hasOwnProperty;
	function lt(x, q, V, G, W, dt) {
		return (
			(V = dt.ref),
			{ $$typeof: i, type: x, key: q, ref: V !== void 0 ? V : null, props: dt }
		);
	}
	function at(x, q) {
		return lt(x.type, q, void 0, void 0, void 0, x.props);
	}
	function ct(x) {
		return typeof x == "object" && x !== null && x.$$typeof === i;
	}
	function bt(x) {
		var q = { "=": "=0", ":": "=2" };
		return (
			"$" +
			x.replace(/[=:]/g, function (V) {
				return q[V];
			})
		);
	}
	var Rt = /\/+/g;
	function Tt(x, q) {
		return typeof x == "object" && x !== null && x.key != null
			? bt("" + x.key)
			: q.toString(36);
	}
	function Yt() {}
	function Jt(x) {
		switch (x.status) {
			case "fulfilled":
				return x.value;
			case "rejected":
				throw x.reason;
			default:
				switch (
					(typeof x.status == "string"
						? x.then(Yt, Yt)
						: ((x.status = "pending"),
							x.then(
								function (q) {
									x.status === "pending" &&
										((x.status = "fulfilled"), (x.value = q));
								},
								function (q) {
									x.status === "pending" &&
										((x.status = "rejected"), (x.reason = q));
								},
							)),
					x.status)
				) {
					case "fulfilled":
						return x.value;
					case "rejected":
						throw x.reason;
				}
		}
		throw x;
	}
	function Ut(x, q, V, G, W) {
		var dt = typeof x;
		(dt === "undefined" || dt === "boolean") && (x = null);
		var et = !1;
		if (x === null) et = !0;
		else
			switch (dt) {
				case "bigint":
				case "string":
				case "number":
					et = !0;
					break;
				case "object":
					switch (x.$$typeof) {
						case i:
						case d:
							et = !0;
							break;
						case p:
							return ((et = x._init), Ut(et(x._payload), q, V, G, W));
					}
			}
		if (et)
			return (
				(W = W(x)),
				(et = G === "" ? "." + Tt(x, 0) : G),
				J(W)
					? ((V = ""),
						et != null && (V = et.replace(Rt, "$&/") + "/"),
						Ut(W, q, V, "", function (Fe) {
							return Fe;
						}))
					: W != null &&
						(ct(W) &&
							(W = at(
								W,
								V +
									(W.key == null || (x && x.key === W.key)
										? ""
										: ("" + W.key).replace(Rt, "$&/") + "/") +
									et,
							)),
						q.push(W)),
				1
			);
		et = 0;
		var ae = G === "" ? "." : G + ":";
		if (J(x))
			for (var Ot = 0; Ot < x.length; Ot++)
				((G = x[Ot]), (dt = ae + Tt(G, Ot)), (et += Ut(G, q, V, dt, W)));
		else if (((Ot = S(x)), typeof Ot == "function"))
			for (x = Ot.call(x), Ot = 0; !(G = x.next()).done; )
				((G = G.value), (dt = ae + Tt(G, Ot++)), (et += Ut(G, q, V, dt, W)));
		else if (dt === "object") {
			if (typeof x.then == "function") return Ut(Jt(x), q, V, G, W);
			throw (
				(q = String(x)),
				Error(
					"Objects are not valid as a React child (found: " +
						(q === "[object Object]"
							? "object with keys {" + Object.keys(x).join(", ") + "}"
							: q) +
						"). If you meant to render a collection of children, use an array instead.",
				)
			);
		}
		return et;
	}
	function U(x, q, V) {
		if (x == null) return x;
		var G = [],
			W = 0;
		return (
			Ut(x, G, "", "", function (dt) {
				return q.call(V, dt, W++);
			}),
			G
		);
	}
	function X(x) {
		if (x._status === -1) {
			var q = x._result;
			((q = q()),
				q.then(
					function (V) {
						(x._status === 0 || x._status === -1) &&
							((x._status = 1), (x._result = V));
					},
					function (V) {
						(x._status === 0 || x._status === -1) &&
							((x._status = 2), (x._result = V));
					},
				),
				x._status === -1 && ((x._status = 0), (x._result = q)));
		}
		if (x._status === 1) return x._result.default;
		throw x._result;
	}
	var I =
		typeof reportError == "function"
			? reportError
			: function (x) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var q = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof x == "object" &&
								x !== null &&
								typeof x.message == "string"
									? String(x.message)
									: String(x),
							error: x,
						});
						if (!window.dispatchEvent(q)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", x);
						return;
					}
					console.error(x);
				};
	function xt() {}
	return (
		(ut.Children = {
			map: U,
			forEach: function (x, q, V) {
				U(
					x,
					function () {
						q.apply(this, arguments);
					},
					V,
				);
			},
			count: function (x) {
				var q = 0;
				return (
					U(x, function () {
						q++;
					}),
					q
				);
			},
			toArray: function (x) {
				return (
					U(x, function (q) {
						return q;
					}) || []
				);
			},
			only: function (x) {
				if (!ct(x))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return x;
			},
		}),
		(ut.Component = Q),
		(ut.Fragment = s),
		(ut.Profiler = m),
		(ut.PureComponent = Z),
		(ut.StrictMode = f),
		(ut.Suspense = o),
		(ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
		(ut.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (x) {
				return L.H.useMemoCache(x);
			},
		}),
		(ut.cache = function (x) {
			return function () {
				return x.apply(null, arguments);
			};
		}),
		(ut.cloneElement = function (x, q, V) {
			if (x == null)
				throw Error(
					"The argument must be a React element, but you passed " + x + ".",
				);
			var G = z({}, x.props),
				W = x.key,
				dt = void 0;
			if (q != null)
				for (et in (q.ref !== void 0 && (dt = void 0),
				q.key !== void 0 && (W = "" + q.key),
				q))
					!ot.call(q, et) ||
						et === "key" ||
						et === "__self" ||
						et === "__source" ||
						(et === "ref" && q.ref === void 0) ||
						(G[et] = q[et]);
			var et = arguments.length - 2;
			if (et === 1) G.children = V;
			else if (1 < et) {
				for (var ae = Array(et), Ot = 0; Ot < et; Ot++)
					ae[Ot] = arguments[Ot + 2];
				G.children = ae;
			}
			return lt(x.type, W, void 0, void 0, dt, G);
		}),
		(ut.createContext = function (x) {
			return (
				(x = {
					$$typeof: T,
					_currentValue: x,
					_currentValue2: x,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(x.Provider = x),
				(x.Consumer = { $$typeof: y, _context: x }),
				x
			);
		}),
		(ut.createElement = function (x, q, V) {
			var G,
				W = {},
				dt = null;
			if (q != null)
				for (G in (q.key !== void 0 && (dt = "" + q.key), q))
					ot.call(q, G) &&
						G !== "key" &&
						G !== "__self" &&
						G !== "__source" &&
						(W[G] = q[G]);
			var et = arguments.length - 2;
			if (et === 1) W.children = V;
			else if (1 < et) {
				for (var ae = Array(et), Ot = 0; Ot < et; Ot++)
					ae[Ot] = arguments[Ot + 2];
				W.children = ae;
			}
			if (x && x.defaultProps)
				for (G in ((et = x.defaultProps), et))
					W[G] === void 0 && (W[G] = et[G]);
			return lt(x, dt, void 0, void 0, null, W);
		}),
		(ut.createRef = function () {
			return { current: null };
		}),
		(ut.forwardRef = function (x) {
			return { $$typeof: g, render: x };
		}),
		(ut.isValidElement = ct),
		(ut.lazy = function (x) {
			return { $$typeof: p, _payload: { _status: -1, _result: x }, _init: X };
		}),
		(ut.memo = function (x, q) {
			return { $$typeof: h, type: x, compare: q === void 0 ? null : q };
		}),
		(ut.startTransition = function (x) {
			var q = L.T,
				V = {};
			L.T = V;
			try {
				var G = x(),
					W = L.S;
				(W !== null && W(V, G),
					typeof G == "object" &&
						G !== null &&
						typeof G.then == "function" &&
						G.then(xt, I));
			} catch (dt) {
				I(dt);
			} finally {
				L.T = q;
			}
		}),
		(ut.unstable_useCacheRefresh = function () {
			return L.H.useCacheRefresh();
		}),
		(ut.use = function (x) {
			return L.H.use(x);
		}),
		(ut.useActionState = function (x, q, V) {
			return L.H.useActionState(x, q, V);
		}),
		(ut.useCallback = function (x, q) {
			return L.H.useCallback(x, q);
		}),
		(ut.useContext = function (x) {
			return L.H.useContext(x);
		}),
		(ut.useDebugValue = function () {}),
		(ut.useDeferredValue = function (x, q) {
			return L.H.useDeferredValue(x, q);
		}),
		(ut.useEffect = function (x, q, V) {
			var G = L.H;
			if (typeof V == "function")
				throw Error(
					"useEffect CRUD overload is not enabled in this build of React.",
				);
			return G.useEffect(x, q);
		}),
		(ut.useId = function () {
			return L.H.useId();
		}),
		(ut.useImperativeHandle = function (x, q, V) {
			return L.H.useImperativeHandle(x, q, V);
		}),
		(ut.useInsertionEffect = function (x, q) {
			return L.H.useInsertionEffect(x, q);
		}),
		(ut.useLayoutEffect = function (x, q) {
			return L.H.useLayoutEffect(x, q);
		}),
		(ut.useMemo = function (x, q) {
			return L.H.useMemo(x, q);
		}),
		(ut.useOptimistic = function (x, q) {
			return L.H.useOptimistic(x, q);
		}),
		(ut.useReducer = function (x, q, V) {
			return L.H.useReducer(x, q, V);
		}),
		(ut.useRef = function (x) {
			return L.H.useRef(x);
		}),
		(ut.useState = function (x) {
			return L.H.useState(x);
		}),
		(ut.useSyncExternalStore = function (x, q, V) {
			return L.H.useSyncExternalStore(x, q, V);
		}),
		(ut.useTransition = function () {
			return L.H.useTransition();
		}),
		(ut.version = "19.1.0"),
		ut
	);
}
var kd;
function Zf() {
	return (kd || ((kd = 1), (zf.exports = my())), zf.exports);
}
var D = Zf(),
	Df = { exports: {} },
	Mu = {},
	Nf = { exports: {} },
	Uf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d;
function yy() {
	return (
		$d ||
			(($d = 1),
			(function (i) {
				function d(U, X) {
					var I = U.length;
					U.push(X);
					t: for (; 0 < I; ) {
						var xt = (I - 1) >>> 1,
							x = U[xt];
						if (0 < m(x, X)) ((U[xt] = X), (U[I] = x), (I = xt));
						else break t;
					}
				}
				function s(U) {
					return U.length === 0 ? null : U[0];
				}
				function f(U) {
					if (U.length === 0) return null;
					var X = U[0],
						I = U.pop();
					if (I !== X) {
						U[0] = I;
						t: for (var xt = 0, x = U.length, q = x >>> 1; xt < q; ) {
							var V = 2 * (xt + 1) - 1,
								G = U[V],
								W = V + 1,
								dt = U[W];
							if (0 > m(G, I))
								W < x && 0 > m(dt, G)
									? ((U[xt] = dt), (U[W] = I), (xt = W))
									: ((U[xt] = G), (U[V] = I), (xt = V));
							else if (W < x && 0 > m(dt, I))
								((U[xt] = dt), (U[W] = I), (xt = W));
							else break t;
						}
					}
					return X;
				}
				function m(U, X) {
					var I = U.sortIndex - X.sortIndex;
					return I !== 0 ? I : U.id - X.id;
				}
				if (
					((i.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var y = performance;
					i.unstable_now = function () {
						return y.now();
					};
				} else {
					var T = Date,
						g = T.now();
					i.unstable_now = function () {
						return T.now() - g;
					};
				}
				var o = [],
					h = [],
					p = 1,
					b = null,
					S = 3,
					N = !1,
					z = !1,
					Y = !1,
					Q = !1,
					B = typeof setTimeout == "function" ? setTimeout : null,
					Z = typeof clearTimeout == "function" ? clearTimeout : null,
					$ = typeof setImmediate < "u" ? setImmediate : null;
				function J(U) {
					for (var X = s(h); X !== null; ) {
						if (X.callback === null) f(h);
						else if (X.startTime <= U)
							(f(h), (X.sortIndex = X.expirationTime), d(o, X));
						else break;
						X = s(h);
					}
				}
				function L(U) {
					if (((Y = !1), J(U), !z))
						if (s(o) !== null) ((z = !0), ot || ((ot = !0), Tt()));
						else {
							var X = s(h);
							X !== null && Ut(L, X.startTime - U);
						}
				}
				var ot = !1,
					lt = -1,
					at = 5,
					ct = -1;
				function bt() {
					return Q ? !0 : !(i.unstable_now() - ct < at);
				}
				function Rt() {
					if (((Q = !1), ot)) {
						var U = i.unstable_now();
						ct = U;
						var X = !0;
						try {
							t: {
								((z = !1), Y && ((Y = !1), Z(lt), (lt = -1)), (N = !0));
								var I = S;
								try {
									e: {
										for (
											J(U), b = s(o);
											b !== null && !(b.expirationTime > U && bt());

										) {
											var xt = b.callback;
											if (typeof xt == "function") {
												((b.callback = null), (S = b.priorityLevel));
												var x = xt(b.expirationTime <= U);
												if (((U = i.unstable_now()), typeof x == "function")) {
													((b.callback = x), J(U), (X = !0));
													break e;
												}
												(b === s(o) && f(o), J(U));
											} else f(o);
											b = s(o);
										}
										if (b !== null) X = !0;
										else {
											var q = s(h);
											(q !== null && Ut(L, q.startTime - U), (X = !1));
										}
									}
									break t;
								} finally {
									((b = null), (S = I), (N = !1));
								}
								X = void 0;
							}
						} finally {
							X ? Tt() : (ot = !1);
						}
					}
				}
				var Tt;
				if (typeof $ == "function")
					Tt = function () {
						$(Rt);
					};
				else if (typeof MessageChannel < "u") {
					var Yt = new MessageChannel(),
						Jt = Yt.port2;
					((Yt.port1.onmessage = Rt),
						(Tt = function () {
							Jt.postMessage(null);
						}));
				} else
					Tt = function () {
						B(Rt, 0);
					};
				function Ut(U, X) {
					lt = B(function () {
						U(i.unstable_now());
					}, X);
				}
				((i.unstable_IdlePriority = 5),
					(i.unstable_ImmediatePriority = 1),
					(i.unstable_LowPriority = 4),
					(i.unstable_NormalPriority = 3),
					(i.unstable_Profiling = null),
					(i.unstable_UserBlockingPriority = 2),
					(i.unstable_cancelCallback = function (U) {
						U.callback = null;
					}),
					(i.unstable_forceFrameRate = function (U) {
						0 > U || 125 < U
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (at = 0 < U ? Math.floor(1e3 / U) : 5);
					}),
					(i.unstable_getCurrentPriorityLevel = function () {
						return S;
					}),
					(i.unstable_next = function (U) {
						switch (S) {
							case 1:
							case 2:
							case 3:
								var X = 3;
								break;
							default:
								X = S;
						}
						var I = S;
						S = X;
						try {
							return U();
						} finally {
							S = I;
						}
					}),
					(i.unstable_requestPaint = function () {
						Q = !0;
					}),
					(i.unstable_runWithPriority = function (U, X) {
						switch (U) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								U = 3;
						}
						var I = S;
						S = U;
						try {
							return X();
						} finally {
							S = I;
						}
					}),
					(i.unstable_scheduleCallback = function (U, X, I) {
						var xt = i.unstable_now();
						switch (
							(typeof I == "object" && I !== null
								? ((I = I.delay),
									(I = typeof I == "number" && 0 < I ? xt + I : xt))
								: (I = xt),
							U)
						) {
							case 1:
								var x = -1;
								break;
							case 2:
								x = 250;
								break;
							case 5:
								x = 1073741823;
								break;
							case 4:
								x = 1e4;
								break;
							default:
								x = 5e3;
						}
						return (
							(x = I + x),
							(U = {
								id: p++,
								callback: X,
								priorityLevel: U,
								startTime: I,
								expirationTime: x,
								sortIndex: -1,
							}),
							I > xt
								? ((U.sortIndex = I),
									d(h, U),
									s(o) === null &&
										U === s(h) &&
										(Y ? (Z(lt), (lt = -1)) : (Y = !0), Ut(L, I - xt)))
								: ((U.sortIndex = x),
									d(o, U),
									z || N || ((z = !0), ot || ((ot = !0), Tt()))),
							U
						);
					}),
					(i.unstable_shouldYield = bt),
					(i.unstable_wrapCallback = function (U) {
						var X = S;
						return function () {
							var I = S;
							S = X;
							try {
								return U.apply(this, arguments);
							} finally {
								S = I;
							}
						};
					}));
			})(Uf)),
		Uf
	);
}
var Wd;
function vy() {
	return (Wd || ((Wd = 1), (Nf.exports = yy())), Nf.exports);
}
var Cf = { exports: {} },
	Wt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd;
function gy() {
	if (Fd) return Wt;
	Fd = 1;
	var i = Zf();
	function d(o) {
		var h = "https://react.dev/errors/" + o;
		if (1 < arguments.length) {
			h += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var p = 2; p < arguments.length; p++)
				h += "&args[]=" + encodeURIComponent(arguments[p]);
		}
		return (
			"Minified React error #" +
			o +
			"; visit " +
			h +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function s() {}
	var f = {
			d: {
				f: s,
				r: function () {
					throw Error(d(522));
				},
				D: s,
				C: s,
				L: s,
				m: s,
				X: s,
				S: s,
				M: s,
			},
			p: 0,
			findDOMNode: null,
		},
		m = Symbol.for("react.portal");
	function y(o, h, p) {
		var b =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: m,
			key: b == null ? null : "" + b,
			children: o,
			containerInfo: h,
			implementation: p,
		};
	}
	var T = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function g(o, h) {
		if (o === "font") return "";
		if (typeof h == "string") return h === "use-credentials" ? h : "";
	}
	return (
		(Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
		(Wt.createPortal = function (o, h) {
			var p =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
				throw Error(d(299));
			return y(o, h, null, p);
		}),
		(Wt.flushSync = function (o) {
			var h = T.T,
				p = f.p;
			try {
				if (((T.T = null), (f.p = 2), o)) return o();
			} finally {
				((T.T = h), (f.p = p), f.d.f());
			}
		}),
		(Wt.preconnect = function (o, h) {
			typeof o == "string" &&
				(h
					? ((h = h.crossOrigin),
						(h =
							typeof h == "string"
								? h === "use-credentials"
									? h
									: ""
								: void 0))
					: (h = null),
				f.d.C(o, h));
		}),
		(Wt.prefetchDNS = function (o) {
			typeof o == "string" && f.d.D(o);
		}),
		(Wt.preinit = function (o, h) {
			if (typeof o == "string" && h && typeof h.as == "string") {
				var p = h.as,
					b = g(p, h.crossOrigin),
					S = typeof h.integrity == "string" ? h.integrity : void 0,
					N = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
				p === "style"
					? f.d.S(o, typeof h.precedence == "string" ? h.precedence : void 0, {
							crossOrigin: b,
							integrity: S,
							fetchPriority: N,
						})
					: p === "script" &&
						f.d.X(o, {
							crossOrigin: b,
							integrity: S,
							fetchPriority: N,
							nonce: typeof h.nonce == "string" ? h.nonce : void 0,
						});
			}
		}),
		(Wt.preinitModule = function (o, h) {
			if (typeof o == "string")
				if (typeof h == "object" && h !== null) {
					if (h.as == null || h.as === "script") {
						var p = g(h.as, h.crossOrigin);
						f.d.M(o, {
							crossOrigin: p,
							integrity: typeof h.integrity == "string" ? h.integrity : void 0,
							nonce: typeof h.nonce == "string" ? h.nonce : void 0,
						});
					}
				} else h == null && f.d.M(o);
		}),
		(Wt.preload = function (o, h) {
			if (
				typeof o == "string" &&
				typeof h == "object" &&
				h !== null &&
				typeof h.as == "string"
			) {
				var p = h.as,
					b = g(p, h.crossOrigin);
				f.d.L(o, p, {
					crossOrigin: b,
					integrity: typeof h.integrity == "string" ? h.integrity : void 0,
					nonce: typeof h.nonce == "string" ? h.nonce : void 0,
					type: typeof h.type == "string" ? h.type : void 0,
					fetchPriority:
						typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
					referrerPolicy:
						typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
					imageSrcSet:
						typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
					imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
					media: typeof h.media == "string" ? h.media : void 0,
				});
			}
		}),
		(Wt.preloadModule = function (o, h) {
			if (typeof o == "string")
				if (h) {
					var p = g(h.as, h.crossOrigin);
					f.d.m(o, {
						as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
						crossOrigin: p,
						integrity: typeof h.integrity == "string" ? h.integrity : void 0,
					});
				} else f.d.m(o);
		}),
		(Wt.requestFormReset = function (o) {
			f.d.r(o);
		}),
		(Wt.unstable_batchedUpdates = function (o, h) {
			return o(h);
		}),
		(Wt.useFormState = function (o, h, p) {
			return T.H.useFormState(o, h, p);
		}),
		(Wt.useFormStatus = function () {
			return T.H.useHostTransitionStatus();
		}),
		(Wt.version = "19.1.0"),
		Wt
	);
}
var Pd;
function py() {
	if (Pd) return Cf.exports;
	Pd = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (d) {
				console.error(d);
			}
	}
	return (i(), (Cf.exports = gy()), Cf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function Sy() {
	if (Id) return Mu;
	Id = 1;
	var i = vy(),
		d = Zf(),
		s = py();
	function f(t) {
		var e = "https://react.dev/errors/" + t;
		if (1 < arguments.length) {
			e += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var l = 2; l < arguments.length; l++)
				e += "&args[]=" + encodeURIComponent(arguments[l]);
		}
		return (
			"Minified React error #" +
			t +
			"; visit " +
			e +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function m(t) {
		return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
	}
	function y(t) {
		var e = t,
			l = t;
		if (t.alternate) for (; e.return; ) e = e.return;
		else {
			t = e;
			do ((e = t), e.flags & 4098 && (l = e.return), (t = e.return));
			while (t);
		}
		return e.tag === 3 ? l : null;
	}
	function T(t) {
		if (t.tag === 13) {
			var e = t.memoizedState;
			if (
				(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
				e !== null)
			)
				return e.dehydrated;
		}
		return null;
	}
	function g(t) {
		if (y(t) !== t) throw Error(f(188));
	}
	function o(t) {
		var e = t.alternate;
		if (!e) {
			if (((e = y(t)), e === null)) throw Error(f(188));
			return e !== t ? null : t;
		}
		for (var l = t, a = e; ; ) {
			var u = l.return;
			if (u === null) break;
			var n = u.alternate;
			if (n === null) {
				if (((a = u.return), a !== null)) {
					l = a;
					continue;
				}
				break;
			}
			if (u.child === n.child) {
				for (n = u.child; n; ) {
					if (n === l) return (g(u), t);
					if (n === a) return (g(u), e);
					n = n.sibling;
				}
				throw Error(f(188));
			}
			if (l.return !== a.return) ((l = u), (a = n));
			else {
				for (var c = !1, r = u.child; r; ) {
					if (r === l) {
						((c = !0), (l = u), (a = n));
						break;
					}
					if (r === a) {
						((c = !0), (a = u), (l = n));
						break;
					}
					r = r.sibling;
				}
				if (!c) {
					for (r = n.child; r; ) {
						if (r === l) {
							((c = !0), (l = n), (a = u));
							break;
						}
						if (r === a) {
							((c = !0), (a = n), (l = u));
							break;
						}
						r = r.sibling;
					}
					if (!c) throw Error(f(189));
				}
			}
			if (l.alternate !== a) throw Error(f(190));
		}
		if (l.tag !== 3) throw Error(f(188));
		return l.stateNode.current === l ? t : e;
	}
	function h(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t;
		for (t = t.child; t !== null; ) {
			if (((e = h(t)), e !== null)) return e;
			t = t.sibling;
		}
		return null;
	}
	var p = Object.assign,
		b = Symbol.for("react.element"),
		S = Symbol.for("react.transitional.element"),
		N = Symbol.for("react.portal"),
		z = Symbol.for("react.fragment"),
		Y = Symbol.for("react.strict_mode"),
		Q = Symbol.for("react.profiler"),
		B = Symbol.for("react.provider"),
		Z = Symbol.for("react.consumer"),
		$ = Symbol.for("react.context"),
		J = Symbol.for("react.forward_ref"),
		L = Symbol.for("react.suspense"),
		ot = Symbol.for("react.suspense_list"),
		lt = Symbol.for("react.memo"),
		at = Symbol.for("react.lazy"),
		ct = Symbol.for("react.activity"),
		bt = Symbol.for("react.memo_cache_sentinel"),
		Rt = Symbol.iterator;
	function Tt(t) {
		return t === null || typeof t != "object"
			? null
			: ((t = (Rt && t[Rt]) || t["@@iterator"]),
				typeof t == "function" ? t : null);
	}
	var Yt = Symbol.for("react.client.reference");
	function Jt(t) {
		if (t == null) return null;
		if (typeof t == "function")
			return t.$$typeof === Yt ? null : t.displayName || t.name || null;
		if (typeof t == "string") return t;
		switch (t) {
			case z:
				return "Fragment";
			case Q:
				return "Profiler";
			case Y:
				return "StrictMode";
			case L:
				return "Suspense";
			case ot:
				return "SuspenseList";
			case ct:
				return "Activity";
		}
		if (typeof t == "object")
			switch (t.$$typeof) {
				case N:
					return "Portal";
				case $:
					return (t.displayName || "Context") + ".Provider";
				case Z:
					return (t._context.displayName || "Context") + ".Consumer";
				case J:
					var e = t.render;
					return (
						(t = t.displayName),
						t ||
							((t = e.displayName || e.name || ""),
							(t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
						t
					);
				case lt:
					return (
						(e = t.displayName || null),
						e !== null ? e : Jt(t.type) || "Memo"
					);
				case at:
					((e = t._payload), (t = t._init));
					try {
						return Jt(t(e));
					} catch {}
			}
		return null;
	}
	var Ut = Array.isArray,
		U = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		I = { pending: !1, data: null, method: null, action: null },
		xt = [],
		x = -1;
	function q(t) {
		return { current: t };
	}
	function V(t) {
		0 > x || ((t.current = xt[x]), (xt[x] = null), x--);
	}
	function G(t, e) {
		(x++, (xt[x] = t.current), (t.current = e));
	}
	var W = q(null),
		dt = q(null),
		et = q(null),
		ae = q(null);
	function Ot(t, e) {
		switch ((G(et, e), G(dt, t), G(W, null), e.nodeType)) {
			case 9:
			case 11:
				t = (t = e.documentElement) && (t = t.namespaceURI) ? Sd(t) : 0;
				break;
			default:
				if (((t = e.tagName), (e = e.namespaceURI)))
					((e = Sd(e)), (t = bd(e, t)));
				else
					switch (t) {
						case "svg":
							t = 1;
							break;
						case "math":
							t = 2;
							break;
						default:
							t = 0;
					}
		}
		(V(W), G(W, t));
	}
	function Fe() {
		(V(W), V(dt), V(et));
	}
	function di(t) {
		t.memoizedState !== null && G(ae, t);
		var e = W.current,
			l = bd(e, t.type);
		e !== l && (G(dt, t), G(W, l));
	}
	function ju(t) {
		(dt.current === t && (V(W), V(dt)),
			ae.current === t && (V(ae), (xu._currentValue = I)));
	}
	var hi = Object.prototype.hasOwnProperty,
		mi = i.unstable_scheduleCallback,
		yi = i.unstable_cancelCallback,
		Qh = i.unstable_shouldYield,
		Zh = i.unstable_requestPaint,
		Oe = i.unstable_now,
		Vh = i.unstable_getCurrentPriorityLevel,
		Pf = i.unstable_ImmediatePriority,
		If = i.unstable_UserBlockingPriority,
		Hu = i.unstable_NormalPriority,
		Kh = i.unstable_LowPriority,
		tr = i.unstable_IdlePriority,
		Jh = i.log,
		kh = i.unstable_setDisableYieldValue,
		za = null,
		ue = null;
	function Pe(t) {
		if (
			(typeof Jh == "function" && kh(t),
			ue && typeof ue.setStrictMode == "function")
		)
			try {
				ue.setStrictMode(za, t);
			} catch {}
	}
	var ne = Math.clz32 ? Math.clz32 : Fh,
		$h = Math.log,
		Wh = Math.LN2;
	function Fh(t) {
		return ((t >>>= 0), t === 0 ? 32 : (31 - (($h(t) / Wh) | 0)) | 0);
	}
	var wu = 256,
		qu = 4194304;
	function Tl(t) {
		var e = t & 42;
		if (e !== 0) return e;
		switch (t & -t) {
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
				return 64;
			case 128:
				return 128;
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
				return t & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return t & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return t;
		}
	}
	function Bu(t, e, l) {
		var a = t.pendingLanes;
		if (a === 0) return 0;
		var u = 0,
			n = t.suspendedLanes,
			c = t.pingedLanes;
		t = t.warmLanes;
		var r = a & 134217727;
		return (
			r !== 0
				? ((a = r & ~n),
					a !== 0
						? (u = Tl(a))
						: ((c &= r),
							c !== 0
								? (u = Tl(c))
								: l || ((l = r & ~t), l !== 0 && (u = Tl(l)))))
				: ((r = a & ~n),
					r !== 0
						? (u = Tl(r))
						: c !== 0
							? (u = Tl(c))
							: l || ((l = a & ~t), l !== 0 && (u = Tl(l)))),
			u === 0
				? 0
				: e !== 0 &&
					  e !== u &&
					  !(e & n) &&
					  ((n = u & -u),
					  (l = e & -e),
					  n >= l || (n === 32 && (l & 4194048) !== 0))
					? e
					: u
		);
	}
	function Da(t, e) {
		return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
	}
	function Ph(t, e) {
		switch (t) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return e + 250;
			case 16:
			case 32:
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
				return e + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function er() {
		var t = wu;
		return ((wu <<= 1), !(wu & 4194048) && (wu = 256), t);
	}
	function lr() {
		var t = qu;
		return ((qu <<= 1), !(qu & 62914560) && (qu = 4194304), t);
	}
	function vi(t) {
		for (var e = [], l = 0; 31 > l; l++) e.push(t);
		return e;
	}
	function Na(t, e) {
		((t.pendingLanes |= e),
			e !== 268435456 &&
				((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
	}
	function Ih(t, e, l, a, u, n) {
		var c = t.pendingLanes;
		((t.pendingLanes = l),
			(t.suspendedLanes = 0),
			(t.pingedLanes = 0),
			(t.warmLanes = 0),
			(t.expiredLanes &= l),
			(t.entangledLanes &= l),
			(t.errorRecoveryDisabledLanes &= l),
			(t.shellSuspendCounter = 0));
		var r = t.entanglements,
			v = t.expirationTimes,
			O = t.hiddenUpdates;
		for (l = c & ~l; 0 < l; ) {
			var j = 31 - ne(l),
				w = 1 << j;
			((r[j] = 0), (v[j] = -1));
			var M = O[j];
			if (M !== null)
				for (O[j] = null, j = 0; j < M.length; j++) {
					var _ = M[j];
					_ !== null && (_.lane &= -536870913);
				}
			l &= ~w;
		}
		(a !== 0 && ar(t, a, 0),
			n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~e)));
	}
	function ar(t, e, l) {
		((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
		var a = 31 - ne(e);
		((t.entangledLanes |= e),
			(t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090)));
	}
	function ur(t, e) {
		var l = (t.entangledLanes |= e);
		for (t = t.entanglements; l; ) {
			var a = 31 - ne(l),
				u = 1 << a;
			((u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u));
		}
	}
	function gi(t) {
		switch (t) {
			case 2:
				t = 1;
				break;
			case 8:
				t = 4;
				break;
			case 32:
				t = 16;
				break;
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
				t = 128;
				break;
			case 268435456:
				t = 134217728;
				break;
			default:
				t = 0;
		}
		return t;
	}
	function pi(t) {
		return (
			(t &= -t),
			2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
		);
	}
	function nr() {
		var t = X.p;
		return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Yd(t.type));
	}
	function t0(t, e) {
		var l = X.p;
		try {
			return ((X.p = t), e());
		} finally {
			X.p = l;
		}
	}
	var Ie = Math.random().toString(36).slice(2),
		kt = "__reactFiber$" + Ie,
		Pt = "__reactProps$" + Ie,
		Gl = "__reactContainer$" + Ie,
		Si = "__reactEvents$" + Ie,
		e0 = "__reactListeners$" + Ie,
		l0 = "__reactHandles$" + Ie,
		ir = "__reactResources$" + Ie,
		Ua = "__reactMarker$" + Ie;
	function bi(t) {
		(delete t[kt], delete t[Pt], delete t[Si], delete t[e0], delete t[l0]);
	}
	function Xl(t) {
		var e = t[kt];
		if (e) return e;
		for (var l = t.parentNode; l; ) {
			if ((e = l[Gl] || l[kt])) {
				if (
					((l = e.alternate),
					e.child !== null || (l !== null && l.child !== null))
				)
					for (t = Ad(t); t !== null; ) {
						if ((l = t[kt])) return l;
						t = Ad(t);
					}
				return e;
			}
			((t = l), (l = t.parentNode));
		}
		return null;
	}
	function Ql(t) {
		if ((t = t[kt] || t[Gl])) {
			var e = t.tag;
			if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
				return t;
		}
		return null;
	}
	function Ca(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
		throw Error(f(33));
	}
	function Zl(t) {
		var e = t[ir];
		return (
			e ||
				(e = t[ir] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			e
		);
	}
	function Lt(t) {
		t[Ua] = !0;
	}
	var cr = new Set(),
		fr = {};
	function Al(t, e) {
		(Vl(t, e), Vl(t + "Capture", e));
	}
	function Vl(t, e) {
		for (fr[t] = e, t = 0; t < e.length; t++) cr.add(e[t]);
	}
	var a0 = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		rr = {},
		or = {};
	function u0(t) {
		return hi.call(or, t)
			? !0
			: hi.call(rr, t)
				? !1
				: a0.test(t)
					? (or[t] = !0)
					: ((rr[t] = !0), !1);
	}
	function Yu(t, e, l) {
		if (u0(e))
			if (l === null) t.removeAttribute(e);
			else {
				switch (typeof l) {
					case "undefined":
					case "function":
					case "symbol":
						t.removeAttribute(e);
						return;
					case "boolean":
						var a = e.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							t.removeAttribute(e);
							return;
						}
				}
				t.setAttribute(e, "" + l);
			}
	}
	function Lu(t, e, l) {
		if (l === null) t.removeAttribute(e);
		else {
			switch (typeof l) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(e);
					return;
			}
			t.setAttribute(e, "" + l);
		}
	}
	function je(t, e, l, a) {
		if (a === null) t.removeAttribute(l);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(l);
					return;
			}
			t.setAttributeNS(e, l, "" + a);
		}
	}
	var xi, sr;
	function Kl(t) {
		if (xi === void 0)
			try {
				throw Error();
			} catch (l) {
				var e = l.stack.trim().match(/\n( *(at )?)/);
				((xi = (e && e[1]) || ""),
					(sr =
						-1 <
						l.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < l.stack.indexOf("@")
								? "@unknown:0:0"
								: ""));
			}
		return (
			`
` +
			xi +
			t +
			sr
		);
	}
	var Ei = !1;
	function Ti(t, e) {
		if (!t || Ei) return "";
		Ei = !0;
		var l = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (e) {
							var w = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(w.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(w, []);
								} catch (_) {
									var M = _;
								}
								Reflect.construct(t, [], w);
							} else {
								try {
									w.call();
								} catch (_) {
									M = _;
								}
								t.call(w.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (_) {
								M = _;
							}
							(w = t()) &&
								typeof w.catch == "function" &&
								w.catch(function () {});
						}
					} catch (_) {
						if (_ && M && typeof _.stack == "string") return [_.stack, M.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var u = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				"name",
			);
			u &&
				u.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var n = a.DetermineComponentFrameRoot(),
				c = n[0],
				r = n[1];
			if (c && r) {
				var v = c.split(`
`),
					O = r.split(`
`);
				for (
					u = a = 0;
					a < v.length && !v[a].includes("DetermineComponentFrameRoot");

				)
					a++;
				for (; u < O.length && !O[u].includes("DetermineComponentFrameRoot"); )
					u++;
				if (a === v.length || u === O.length)
					for (
						a = v.length - 1, u = O.length - 1;
						1 <= a && 0 <= u && v[a] !== O[u];

					)
						u--;
				for (; 1 <= a && 0 <= u; a--, u--)
					if (v[a] !== O[u]) {
						if (a !== 1 || u !== 1)
							do
								if ((a--, u--, 0 > u || v[a] !== O[u])) {
									var j =
										`
` + v[a].replace(" at new ", " at ");
									return (
										t.displayName &&
											j.includes("<anonymous>") &&
											(j = j.replace("<anonymous>", t.displayName)),
										j
									);
								}
							while (1 <= a && 0 <= u);
						break;
					}
			}
		} finally {
			((Ei = !1), (Error.prepareStackTrace = l));
		}
		return (l = t ? t.displayName || t.name : "") ? Kl(l) : "";
	}
	function n0(t) {
		switch (t.tag) {
			case 26:
			case 27:
			case 5:
				return Kl(t.type);
			case 16:
				return Kl("Lazy");
			case 13:
				return Kl("Suspense");
			case 19:
				return Kl("SuspenseList");
			case 0:
			case 15:
				return Ti(t.type, !1);
			case 11:
				return Ti(t.type.render, !1);
			case 1:
				return Ti(t.type, !0);
			case 31:
				return Kl("Activity");
			default:
				return "";
		}
	}
	function dr(t) {
		try {
			var e = "";
			do ((e += n0(t)), (t = t.return));
			while (t);
			return e;
		} catch (l) {
			return (
				`
Error generating stack: ` +
				l.message +
				`
` +
				l.stack
			);
		}
	}
	function he(t) {
		switch (typeof t) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return t;
			case "object":
				return t;
			default:
				return "";
		}
	}
	function hr(t) {
		var e = t.type;
		return (
			(t = t.nodeName) &&
			t.toLowerCase() === "input" &&
			(e === "checkbox" || e === "radio")
		);
	}
	function i0(t) {
		var e = hr(t) ? "checked" : "value",
			l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
			a = "" + t[e];
		if (
			!t.hasOwnProperty(e) &&
			typeof l < "u" &&
			typeof l.get == "function" &&
			typeof l.set == "function"
		) {
			var u = l.get,
				n = l.set;
			return (
				Object.defineProperty(t, e, {
					configurable: !0,
					get: function () {
						return u.call(this);
					},
					set: function (c) {
						((a = "" + c), n.call(this, c));
					},
				}),
				Object.defineProperty(t, e, { enumerable: l.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (c) {
						a = "" + c;
					},
					stopTracking: function () {
						((t._valueTracker = null), delete t[e]);
					},
				}
			);
		}
	}
	function Gu(t) {
		t._valueTracker || (t._valueTracker = i0(t));
	}
	function mr(t) {
		if (!t) return !1;
		var e = t._valueTracker;
		if (!e) return !0;
		var l = e.getValue(),
			a = "";
		return (
			t && (a = hr(t) ? (t.checked ? "true" : "false") : t.value),
			(t = a),
			t !== l ? (e.setValue(t), !0) : !1
		);
	}
	function Xu(t) {
		if (
			((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
		)
			return null;
		try {
			return t.activeElement || t.body;
		} catch {
			return t.body;
		}
	}
	var c0 = /[\n"\\]/g;
	function me(t) {
		return t.replace(c0, function (e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Ai(t, e, l, a, u, n, c, r) {
		((t.name = ""),
			c != null &&
			typeof c != "function" &&
			typeof c != "symbol" &&
			typeof c != "boolean"
				? (t.type = c)
				: t.removeAttribute("type"),
			e != null
				? c === "number"
					? ((e === 0 && t.value === "") || t.value != e) &&
						(t.value = "" + he(e))
					: t.value !== "" + he(e) && (t.value = "" + he(e))
				: (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
			e != null
				? Ri(t, c, he(e))
				: l != null
					? Ri(t, c, he(l))
					: a != null && t.removeAttribute("value"),
			u == null && n != null && (t.defaultChecked = !!n),
			u != null &&
				(t.checked = u && typeof u != "function" && typeof u != "symbol"),
			r != null &&
			typeof r != "function" &&
			typeof r != "symbol" &&
			typeof r != "boolean"
				? (t.name = "" + he(r))
				: t.removeAttribute("name"));
	}
	function yr(t, e, l, a, u, n, c, r) {
		if (
			(n != null &&
				typeof n != "function" &&
				typeof n != "symbol" &&
				typeof n != "boolean" &&
				(t.type = n),
			e != null || l != null)
		) {
			if (!((n !== "submit" && n !== "reset") || e != null)) return;
			((l = l != null ? "" + he(l) : ""),
				(e = e != null ? "" + he(e) : l),
				r || e === t.value || (t.value = e),
				(t.defaultValue = e));
		}
		((a = a ?? u),
			(a = typeof a != "function" && typeof a != "symbol" && !!a),
			(t.checked = r ? t.checked : !!a),
			(t.defaultChecked = !!a),
			c != null &&
				typeof c != "function" &&
				typeof c != "symbol" &&
				typeof c != "boolean" &&
				(t.name = c));
	}
	function Ri(t, e, l) {
		(e === "number" && Xu(t.ownerDocument) === t) ||
			t.defaultValue === "" + l ||
			(t.defaultValue = "" + l);
	}
	function Jl(t, e, l, a) {
		if (((t = t.options), e)) {
			e = {};
			for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
			for (l = 0; l < t.length; l++)
				((u = e.hasOwnProperty("$" + t[l].value)),
					t[l].selected !== u && (t[l].selected = u),
					u && a && (t[l].defaultSelected = !0));
		} else {
			for (l = "" + he(l), e = null, u = 0; u < t.length; u++) {
				if (t[u].value === l) {
					((t[u].selected = !0), a && (t[u].defaultSelected = !0));
					return;
				}
				e !== null || t[u].disabled || (e = t[u]);
			}
			e !== null && (e.selected = !0);
		}
	}
	function vr(t, e, l) {
		if (
			e != null &&
			((e = "" + he(e)), e !== t.value && (t.value = e), l == null)
		) {
			t.defaultValue !== e && (t.defaultValue = e);
			return;
		}
		t.defaultValue = l != null ? "" + he(l) : "";
	}
	function gr(t, e, l, a) {
		if (e == null) {
			if (a != null) {
				if (l != null) throw Error(f(92));
				if (Ut(a)) {
					if (1 < a.length) throw Error(f(93));
					a = a[0];
				}
				l = a;
			}
			(l == null && (l = ""), (e = l));
		}
		((l = he(e)),
			(t.defaultValue = l),
			(a = t.textContent),
			a === l && a !== "" && a !== null && (t.value = a));
	}
	function kl(t, e) {
		if (e) {
			var l = t.firstChild;
			if (l && l === t.lastChild && l.nodeType === 3) {
				l.nodeValue = e;
				return;
			}
		}
		t.textContent = e;
	}
	var f0 = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function pr(t, e, l) {
		var a = e.indexOf("--") === 0;
		l == null || typeof l == "boolean" || l === ""
			? a
				? t.setProperty(e, "")
				: e === "float"
					? (t.cssFloat = "")
					: (t[e] = "")
			: a
				? t.setProperty(e, l)
				: typeof l != "number" || l === 0 || f0.has(e)
					? e === "float"
						? (t.cssFloat = l)
						: (t[e] = ("" + l).trim())
					: (t[e] = l + "px");
	}
	function Sr(t, e, l) {
		if (e != null && typeof e != "object") throw Error(f(62));
		if (((t = t.style), l != null)) {
			for (var a in l)
				!l.hasOwnProperty(a) ||
					(e != null && e.hasOwnProperty(a)) ||
					(a.indexOf("--") === 0
						? t.setProperty(a, "")
						: a === "float"
							? (t.cssFloat = "")
							: (t[a] = ""));
			for (var u in e)
				((a = e[u]), e.hasOwnProperty(u) && l[u] !== a && pr(t, u, a));
		} else for (var n in e) e.hasOwnProperty(n) && pr(t, n, e[n]);
	}
	function Oi(t) {
		if (t.indexOf("-") === -1) return !1;
		switch (t) {
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
	var r0 = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		o0 =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Qu(t) {
		return o0.test("" + t)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: t;
	}
	var Mi = null;
	function _i(t) {
		return (
			(t = t.target || t.srcElement || window),
			t.correspondingUseElement && (t = t.correspondingUseElement),
			t.nodeType === 3 ? t.parentNode : t
		);
	}
	var $l = null,
		Wl = null;
	function br(t) {
		var e = Ql(t);
		if (e && (t = e.stateNode)) {
			var l = t[Pt] || null;
			t: switch (((t = e.stateNode), e.type)) {
				case "input":
					if (
						(Ai(
							t,
							l.value,
							l.defaultValue,
							l.defaultValue,
							l.checked,
							l.defaultChecked,
							l.type,
							l.name,
						),
						(e = l.name),
						l.type === "radio" && e != null)
					) {
						for (l = t; l.parentNode; ) l = l.parentNode;
						for (
							l = l.querySelectorAll(
								'input[name="' + me("" + e) + '"][type="radio"]',
							),
								e = 0;
							e < l.length;
							e++
						) {
							var a = l[e];
							if (a !== t && a.form === t.form) {
								var u = a[Pt] || null;
								if (!u) throw Error(f(90));
								Ai(
									a,
									u.value,
									u.defaultValue,
									u.defaultValue,
									u.checked,
									u.defaultChecked,
									u.type,
									u.name,
								);
							}
						}
						for (e = 0; e < l.length; e++)
							((a = l[e]), a.form === t.form && mr(a));
					}
					break t;
				case "textarea":
					vr(t, l.value, l.defaultValue);
					break t;
				case "select":
					((e = l.value), e != null && Jl(t, !!l.multiple, e, !1));
			}
		}
	}
	var zi = !1;
	function xr(t, e, l) {
		if (zi) return t(e, l);
		zi = !0;
		try {
			var a = t(e);
			return a;
		} finally {
			if (
				((zi = !1),
				($l !== null || Wl !== null) &&
					(zn(), $l && ((e = $l), (t = Wl), (Wl = $l = null), br(e), t)))
			)
				for (e = 0; e < t.length; e++) br(t[e]);
		}
	}
	function ja(t, e) {
		var l = t.stateNode;
		if (l === null) return null;
		var a = l[Pt] || null;
		if (a === null) return null;
		l = a[e];
		t: switch (e) {
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
				((a = !a.disabled) ||
					((t = t.type),
					(a = !(
						t === "button" ||
						t === "input" ||
						t === "select" ||
						t === "textarea"
					))),
					(t = !a));
				break t;
			default:
				t = !1;
		}
		if (t) return null;
		if (l && typeof l != "function") throw Error(f(231, e, typeof l));
		return l;
	}
	var He = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		Di = !1;
	if (He)
		try {
			var Ha = {};
			(Object.defineProperty(Ha, "passive", {
				get: function () {
					Di = !0;
				},
			}),
				window.addEventListener("test", Ha, Ha),
				window.removeEventListener("test", Ha, Ha));
		} catch {
			Di = !1;
		}
	var tl = null,
		Ni = null,
		Zu = null;
	function Er() {
		if (Zu) return Zu;
		var t,
			e = Ni,
			l = e.length,
			a,
			u = "value" in tl ? tl.value : tl.textContent,
			n = u.length;
		for (t = 0; t < l && e[t] === u[t]; t++);
		var c = l - t;
		for (a = 1; a <= c && e[l - a] === u[n - a]; a++);
		return (Zu = u.slice(t, 1 < a ? 1 - a : void 0));
	}
	function Vu(t) {
		var e = t.keyCode;
		return (
			"charCode" in t
				? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
				: (t = e),
			t === 10 && (t = 13),
			32 <= t || t === 13 ? t : 0
		);
	}
	function Ku() {
		return !0;
	}
	function Tr() {
		return !1;
	}
	function It(t) {
		function e(l, a, u, n, c) {
			((this._reactName = l),
				(this._targetInst = u),
				(this.type = a),
				(this.nativeEvent = n),
				(this.target = c),
				(this.currentTarget = null));
			for (var r in t)
				t.hasOwnProperty(r) && ((l = t[r]), (this[r] = l ? l(n) : n[r]));
			return (
				(this.isDefaultPrevented = (
					n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
				)
					? Ku
					: Tr),
				(this.isPropagationStopped = Tr),
				this
			);
		}
		return (
			p(e.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var l = this.nativeEvent;
					l &&
						(l.preventDefault
							? l.preventDefault()
							: typeof l.returnValue != "unknown" && (l.returnValue = !1),
						(this.isDefaultPrevented = Ku));
				},
				stopPropagation: function () {
					var l = this.nativeEvent;
					l &&
						(l.stopPropagation
							? l.stopPropagation()
							: typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
						(this.isPropagationStopped = Ku));
				},
				persist: function () {},
				isPersistent: Ku,
			}),
			e
		);
	}
	var Rl = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (t) {
				return t.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ju = It(Rl),
		wa = p({}, Rl, { view: 0, detail: 0 }),
		s0 = It(wa),
		Ui,
		Ci,
		qa,
		ku = p({}, wa, {
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
			getModifierState: Hi,
			button: 0,
			buttons: 0,
			relatedTarget: function (t) {
				return t.relatedTarget === void 0
					? t.fromElement === t.srcElement
						? t.toElement
						: t.fromElement
					: t.relatedTarget;
			},
			movementX: function (t) {
				return "movementX" in t
					? t.movementX
					: (t !== qa &&
							(qa && t.type === "mousemove"
								? ((Ui = t.screenX - qa.screenX), (Ci = t.screenY - qa.screenY))
								: (Ci = Ui = 0),
							(qa = t)),
						Ui);
			},
			movementY: function (t) {
				return "movementY" in t ? t.movementY : Ci;
			},
		}),
		Ar = It(ku),
		d0 = p({}, ku, { dataTransfer: 0 }),
		h0 = It(d0),
		m0 = p({}, wa, { relatedTarget: 0 }),
		ji = It(m0),
		y0 = p({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		v0 = It(y0),
		g0 = p({}, Rl, {
			clipboardData: function (t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData;
			},
		}),
		p0 = It(g0),
		S0 = p({}, Rl, { data: 0 }),
		Rr = It(S0),
		b0 = {
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
		x0 = {
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
		E0 = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function T0(t) {
		var e = this.nativeEvent;
		return e.getModifierState
			? e.getModifierState(t)
			: (t = E0[t])
				? !!e[t]
				: !1;
	}
	function Hi() {
		return T0;
	}
	var A0 = p({}, wa, {
			key: function (t) {
				if (t.key) {
					var e = b0[t.key] || t.key;
					if (e !== "Unidentified") return e;
				}
				return t.type === "keypress"
					? ((t = Vu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
					: t.type === "keydown" || t.type === "keyup"
						? x0[t.keyCode] || "Unidentified"
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
			getModifierState: Hi,
			charCode: function (t) {
				return t.type === "keypress" ? Vu(t) : 0;
			},
			keyCode: function (t) {
				return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
			},
			which: function (t) {
				return t.type === "keypress"
					? Vu(t)
					: t.type === "keydown" || t.type === "keyup"
						? t.keyCode
						: 0;
			},
		}),
		R0 = It(A0),
		O0 = p({}, ku, {
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
		Or = It(O0),
		M0 = p({}, wa, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Hi,
		}),
		_0 = It(M0),
		z0 = p({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		D0 = It(z0),
		N0 = p({}, ku, {
			deltaX: function (t) {
				return "deltaX" in t
					? t.deltaX
					: "wheelDeltaX" in t
						? -t.wheelDeltaX
						: 0;
			},
			deltaY: function (t) {
				return "deltaY" in t
					? t.deltaY
					: "wheelDeltaY" in t
						? -t.wheelDeltaY
						: "wheelDelta" in t
							? -t.wheelDelta
							: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		U0 = It(N0),
		C0 = p({}, Rl, { newState: 0, oldState: 0 }),
		j0 = It(C0),
		H0 = [9, 13, 27, 32],
		wi = He && "CompositionEvent" in window,
		Ba = null;
	He && "documentMode" in document && (Ba = document.documentMode);
	var w0 = He && "TextEvent" in window && !Ba,
		Mr = He && (!wi || (Ba && 8 < Ba && 11 >= Ba)),
		_r = " ",
		zr = !1;
	function Dr(t, e) {
		switch (t) {
			case "keyup":
				return H0.indexOf(e.keyCode) !== -1;
			case "keydown":
				return e.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function Nr(t) {
		return (
			(t = t.detail),
			typeof t == "object" && "data" in t ? t.data : null
		);
	}
	var Fl = !1;
	function q0(t, e) {
		switch (t) {
			case "compositionend":
				return Nr(e);
			case "keypress":
				return e.which !== 32 ? null : ((zr = !0), _r);
			case "textInput":
				return ((t = e.data), t === _r && zr ? null : t);
			default:
				return null;
		}
	}
	function B0(t, e) {
		if (Fl)
			return t === "compositionend" || (!wi && Dr(t, e))
				? ((t = Er()), (Zu = Ni = tl = null), (Fl = !1), t)
				: null;
		switch (t) {
			case "paste":
				return null;
			case "keypress":
				if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
					if (e.char && 1 < e.char.length) return e.char;
					if (e.which) return String.fromCharCode(e.which);
				}
				return null;
			case "compositionend":
				return Mr && e.locale !== "ko" ? null : e.data;
			default:
				return null;
		}
	}
	var Y0 = {
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
	function Ur(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return e === "input" ? !!Y0[t.type] : e === "textarea";
	}
	function Cr(t, e, l, a) {
		($l ? (Wl ? Wl.push(a) : (Wl = [a])) : ($l = a),
			(e = Hn(e, "onChange")),
			0 < e.length &&
				((l = new Ju("onChange", "change", null, l, a)),
				t.push({ event: l, listeners: e })));
	}
	var Ya = null,
		La = null;
	function L0(t) {
		md(t, 0);
	}
	function $u(t) {
		var e = Ca(t);
		if (mr(e)) return t;
	}
	function jr(t, e) {
		if (t === "change") return e;
	}
	var Hr = !1;
	if (He) {
		var qi;
		if (He) {
			var Bi = "oninput" in document;
			if (!Bi) {
				var wr = document.createElement("div");
				(wr.setAttribute("oninput", "return;"),
					(Bi = typeof wr.oninput == "function"));
			}
			qi = Bi;
		} else qi = !1;
		Hr = qi && (!document.documentMode || 9 < document.documentMode);
	}
	function qr() {
		Ya && (Ya.detachEvent("onpropertychange", Br), (La = Ya = null));
	}
	function Br(t) {
		if (t.propertyName === "value" && $u(La)) {
			var e = [];
			(Cr(e, La, t, _i(t)), xr(L0, e));
		}
	}
	function G0(t, e, l) {
		t === "focusin"
			? (qr(), (Ya = e), (La = l), Ya.attachEvent("onpropertychange", Br))
			: t === "focusout" && qr();
	}
	function X0(t) {
		if (t === "selectionchange" || t === "keyup" || t === "keydown")
			return $u(La);
	}
	function Q0(t, e) {
		if (t === "click") return $u(e);
	}
	function Z0(t, e) {
		if (t === "input" || t === "change") return $u(e);
	}
	function V0(t, e) {
		return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
	}
	var ie = typeof Object.is == "function" ? Object.is : V0;
	function Ga(t, e) {
		if (ie(t, e)) return !0;
		if (
			typeof t != "object" ||
			t === null ||
			typeof e != "object" ||
			e === null
		)
			return !1;
		var l = Object.keys(t),
			a = Object.keys(e);
		if (l.length !== a.length) return !1;
		for (a = 0; a < l.length; a++) {
			var u = l[a];
			if (!hi.call(e, u) || !ie(t[u], e[u])) return !1;
		}
		return !0;
	}
	function Yr(t) {
		for (; t && t.firstChild; ) t = t.firstChild;
		return t;
	}
	function Lr(t, e) {
		var l = Yr(t);
		t = 0;
		for (var a; l; ) {
			if (l.nodeType === 3) {
				if (((a = t + l.textContent.length), t <= e && a >= e))
					return { node: l, offset: e - t };
				t = a;
			}
			t: {
				for (; l; ) {
					if (l.nextSibling) {
						l = l.nextSibling;
						break t;
					}
					l = l.parentNode;
				}
				l = void 0;
			}
			l = Yr(l);
		}
	}
	function Gr(t, e) {
		return t && e
			? t === e
				? !0
				: t && t.nodeType === 3
					? !1
					: e && e.nodeType === 3
						? Gr(t, e.parentNode)
						: "contains" in t
							? t.contains(e)
							: t.compareDocumentPosition
								? !!(t.compareDocumentPosition(e) & 16)
								: !1
			: !1;
	}
	function Xr(t) {
		t =
			t != null &&
			t.ownerDocument != null &&
			t.ownerDocument.defaultView != null
				? t.ownerDocument.defaultView
				: window;
		for (var e = Xu(t.document); e instanceof t.HTMLIFrameElement; ) {
			try {
				var l = typeof e.contentWindow.location.href == "string";
			} catch {
				l = !1;
			}
			if (l) t = e.contentWindow;
			else break;
			e = Xu(t.document);
		}
		return e;
	}
	function Yi(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return (
			e &&
			((e === "input" &&
				(t.type === "text" ||
					t.type === "search" ||
					t.type === "tel" ||
					t.type === "url" ||
					t.type === "password")) ||
				e === "textarea" ||
				t.contentEditable === "true")
		);
	}
	var K0 = He && "documentMode" in document && 11 >= document.documentMode,
		Pl = null,
		Li = null,
		Xa = null,
		Gi = !1;
	function Qr(t, e, l) {
		var a =
			l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
		Gi ||
			Pl == null ||
			Pl !== Xu(a) ||
			((a = Pl),
			"selectionStart" in a && Yi(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
					})),
			(Xa && Ga(Xa, a)) ||
				((Xa = a),
				(a = Hn(Li, "onSelect")),
				0 < a.length &&
					((e = new Ju("onSelect", "select", null, e, l)),
					t.push({ event: e, listeners: a }),
					(e.target = Pl))));
	}
	function Ol(t, e) {
		var l = {};
		return (
			(l[t.toLowerCase()] = e.toLowerCase()),
			(l["Webkit" + t] = "webkit" + e),
			(l["Moz" + t] = "moz" + e),
			l
		);
	}
	var Il = {
			animationend: Ol("Animation", "AnimationEnd"),
			animationiteration: Ol("Animation", "AnimationIteration"),
			animationstart: Ol("Animation", "AnimationStart"),
			transitionrun: Ol("Transition", "TransitionRun"),
			transitionstart: Ol("Transition", "TransitionStart"),
			transitioncancel: Ol("Transition", "TransitionCancel"),
			transitionend: Ol("Transition", "TransitionEnd"),
		},
		Xi = {},
		Zr = {};
	He &&
		((Zr = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Il.animationend.animation,
			delete Il.animationiteration.animation,
			delete Il.animationstart.animation),
		"TransitionEvent" in window || delete Il.transitionend.transition);
	function Ml(t) {
		if (Xi[t]) return Xi[t];
		if (!Il[t]) return t;
		var e = Il[t],
			l;
		for (l in e) if (e.hasOwnProperty(l) && l in Zr) return (Xi[t] = e[l]);
		return t;
	}
	var Vr = Ml("animationend"),
		Kr = Ml("animationiteration"),
		Jr = Ml("animationstart"),
		J0 = Ml("transitionrun"),
		k0 = Ml("transitionstart"),
		$0 = Ml("transitioncancel"),
		kr = Ml("transitionend"),
		$r = new Map(),
		Qi =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	Qi.push("scrollEnd");
	function Ee(t, e) {
		($r.set(t, e), Al(e, [t]));
	}
	var Wr = new WeakMap();
	function ye(t, e) {
		if (typeof t == "object" && t !== null) {
			var l = Wr.get(t);
			return l !== void 0
				? l
				: ((e = { value: t, source: e, stack: dr(e) }), Wr.set(t, e), e);
		}
		return { value: t, source: e, stack: dr(e) };
	}
	var ve = [],
		ta = 0,
		Zi = 0;
	function Wu() {
		for (var t = ta, e = (Zi = ta = 0); e < t; ) {
			var l = ve[e];
			ve[e++] = null;
			var a = ve[e];
			ve[e++] = null;
			var u = ve[e];
			ve[e++] = null;
			var n = ve[e];
			if (((ve[e++] = null), a !== null && u !== null)) {
				var c = a.pending;
				(c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
					(a.pending = u));
			}
			n !== 0 && Fr(l, u, n);
		}
	}
	function Fu(t, e, l, a) {
		((ve[ta++] = t),
			(ve[ta++] = e),
			(ve[ta++] = l),
			(ve[ta++] = a),
			(Zi |= a),
			(t.lanes |= a),
			(t = t.alternate),
			t !== null && (t.lanes |= a));
	}
	function Vi(t, e, l, a) {
		return (Fu(t, e, l, a), Pu(t));
	}
	function ea(t, e) {
		return (Fu(t, null, null, e), Pu(t));
	}
	function Fr(t, e, l) {
		t.lanes |= l;
		var a = t.alternate;
		a !== null && (a.lanes |= l);
		for (var u = !1, n = t.return; n !== null; )
			((n.childLanes |= l),
				(a = n.alternate),
				a !== null && (a.childLanes |= l),
				n.tag === 22 &&
					((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
				(t = n),
				(n = n.return));
		return t.tag === 3
			? ((n = t.stateNode),
				u &&
					e !== null &&
					((u = 31 - ne(l)),
					(t = n.hiddenUpdates),
					(a = t[u]),
					a === null ? (t[u] = [e]) : a.push(e),
					(e.lane = l | 536870912)),
				n)
			: null;
	}
	function Pu(t) {
		if (50 < hu) throw ((hu = 0), (Fc = null), Error(f(185)));
		for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
		return t.tag === 3 ? t.stateNode : null;
	}
	var la = {};
	function W0(t, e, l, a) {
		((this.tag = t),
			(this.key = l),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = e),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null));
	}
	function ce(t, e, l, a) {
		return new W0(t, e, l, a);
	}
	function Ki(t) {
		return ((t = t.prototype), !(!t || !t.isReactComponent));
	}
	function we(t, e) {
		var l = t.alternate;
		return (
			l === null
				? ((l = ce(t.tag, e, t.key, t.mode)),
					(l.elementType = t.elementType),
					(l.type = t.type),
					(l.stateNode = t.stateNode),
					(l.alternate = t),
					(t.alternate = l))
				: ((l.pendingProps = e),
					(l.type = t.type),
					(l.flags = 0),
					(l.subtreeFlags = 0),
					(l.deletions = null)),
			(l.flags = t.flags & 65011712),
			(l.childLanes = t.childLanes),
			(l.lanes = t.lanes),
			(l.child = t.child),
			(l.memoizedProps = t.memoizedProps),
			(l.memoizedState = t.memoizedState),
			(l.updateQueue = t.updateQueue),
			(e = t.dependencies),
			(l.dependencies =
				e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
			(l.sibling = t.sibling),
			(l.index = t.index),
			(l.ref = t.ref),
			(l.refCleanup = t.refCleanup),
			l
		);
	}
	function Pr(t, e) {
		t.flags &= 65011714;
		var l = t.alternate;
		return (
			l === null
				? ((t.childLanes = 0),
					(t.lanes = e),
					(t.child = null),
					(t.subtreeFlags = 0),
					(t.memoizedProps = null),
					(t.memoizedState = null),
					(t.updateQueue = null),
					(t.dependencies = null),
					(t.stateNode = null))
				: ((t.childLanes = l.childLanes),
					(t.lanes = l.lanes),
					(t.child = l.child),
					(t.subtreeFlags = 0),
					(t.deletions = null),
					(t.memoizedProps = l.memoizedProps),
					(t.memoizedState = l.memoizedState),
					(t.updateQueue = l.updateQueue),
					(t.type = l.type),
					(e = l.dependencies),
					(t.dependencies =
						e === null
							? null
							: { lanes: e.lanes, firstContext: e.firstContext })),
			t
		);
	}
	function Iu(t, e, l, a, u, n) {
		var c = 0;
		if (((a = t), typeof t == "function")) Ki(t) && (c = 1);
		else if (typeof t == "string")
			c = Pm(t, l, W.current)
				? 26
				: t === "html" || t === "head" || t === "body"
					? 27
					: 5;
		else
			t: switch (t) {
				case ct:
					return (
						(t = ce(31, l, e, u)),
						(t.elementType = ct),
						(t.lanes = n),
						t
					);
				case z:
					return _l(l.children, u, n, e);
				case Y:
					((c = 8), (u |= 24));
					break;
				case Q:
					return (
						(t = ce(12, l, e, u | 2)),
						(t.elementType = Q),
						(t.lanes = n),
						t
					);
				case L:
					return ((t = ce(13, l, e, u)), (t.elementType = L), (t.lanes = n), t);
				case ot:
					return (
						(t = ce(19, l, e, u)),
						(t.elementType = ot),
						(t.lanes = n),
						t
					);
				default:
					if (typeof t == "object" && t !== null)
						switch (t.$$typeof) {
							case B:
							case $:
								c = 10;
								break t;
							case Z:
								c = 9;
								break t;
							case J:
								c = 11;
								break t;
							case lt:
								c = 14;
								break t;
							case at:
								((c = 16), (a = null));
								break t;
						}
					((c = 29),
						(l = Error(f(130, t === null ? "null" : typeof t, ""))),
						(a = null));
			}
		return (
			(e = ce(c, l, e, u)),
			(e.elementType = t),
			(e.type = a),
			(e.lanes = n),
			e
		);
	}
	function _l(t, e, l, a) {
		return ((t = ce(7, t, a, e)), (t.lanes = l), t);
	}
	function Ji(t, e, l) {
		return ((t = ce(6, t, null, e)), (t.lanes = l), t);
	}
	function ki(t, e, l) {
		return (
			(e = ce(4, t.children !== null ? t.children : [], t.key, e)),
			(e.lanes = l),
			(e.stateNode = {
				containerInfo: t.containerInfo,
				pendingChildren: null,
				implementation: t.implementation,
			}),
			e
		);
	}
	var aa = [],
		ua = 0,
		tn = null,
		en = 0,
		ge = [],
		pe = 0,
		zl = null,
		qe = 1,
		Be = "";
	function Dl(t, e) {
		((aa[ua++] = en), (aa[ua++] = tn), (tn = t), (en = e));
	}
	function Ir(t, e, l) {
		((ge[pe++] = qe), (ge[pe++] = Be), (ge[pe++] = zl), (zl = t));
		var a = qe;
		t = Be;
		var u = 32 - ne(a) - 1;
		((a &= ~(1 << u)), (l += 1));
		var n = 32 - ne(e) + u;
		if (30 < n) {
			var c = u - (u % 5);
			((n = (a & ((1 << c) - 1)).toString(32)),
				(a >>= c),
				(u -= c),
				(qe = (1 << (32 - ne(e) + u)) | (l << u) | a),
				(Be = n + t));
		} else ((qe = (1 << n) | (l << u) | a), (Be = t));
	}
	function $i(t) {
		t.return !== null && (Dl(t, 1), Ir(t, 1, 0));
	}
	function Wi(t) {
		for (; t === tn; )
			((tn = aa[--ua]), (aa[ua] = null), (en = aa[--ua]), (aa[ua] = null));
		for (; t === zl; )
			((zl = ge[--pe]),
				(ge[pe] = null),
				(Be = ge[--pe]),
				(ge[pe] = null),
				(qe = ge[--pe]),
				(ge[pe] = null));
	}
	var Ft = null,
		Dt = null,
		mt = !1,
		Nl = null,
		Me = !1,
		Fi = Error(f(519));
	function Ul(t) {
		var e = Error(f(418, ""));
		throw (Va(ye(e, t)), Fi);
	}
	function to(t) {
		var e = t.stateNode,
			l = t.type,
			a = t.memoizedProps;
		switch (((e[kt] = t), (e[Pt] = a), l)) {
			case "dialog":
				(rt("cancel", e), rt("close", e));
				break;
			case "iframe":
			case "object":
			case "embed":
				rt("load", e);
				break;
			case "video":
			case "audio":
				for (l = 0; l < yu.length; l++) rt(yu[l], e);
				break;
			case "source":
				rt("error", e);
				break;
			case "img":
			case "image":
			case "link":
				(rt("error", e), rt("load", e));
				break;
			case "details":
				rt("toggle", e);
				break;
			case "input":
				(rt("invalid", e),
					yr(
						e,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0,
					),
					Gu(e));
				break;
			case "select":
				rt("invalid", e);
				break;
			case "textarea":
				(rt("invalid", e), gr(e, a.value, a.defaultValue, a.children), Gu(e));
		}
		((l = a.children),
			(typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
			e.textContent === "" + l ||
			a.suppressHydrationWarning === !0 ||
			pd(e.textContent, l)
				? (a.popover != null && (rt("beforetoggle", e), rt("toggle", e)),
					a.onScroll != null && rt("scroll", e),
					a.onScrollEnd != null && rt("scrollend", e),
					a.onClick != null && (e.onclick = wn),
					(e = !0))
				: (e = !1),
			e || Ul(t));
	}
	function eo(t) {
		for (Ft = t.return; Ft; )
			switch (Ft.tag) {
				case 5:
				case 13:
					Me = !1;
					return;
				case 27:
				case 3:
					Me = !0;
					return;
				default:
					Ft = Ft.return;
			}
	}
	function Qa(t) {
		if (t !== Ft) return !1;
		if (!mt) return (eo(t), (mt = !0), !1);
		var e = t.tag,
			l;
		if (
			((l = e !== 3 && e !== 27) &&
				((l = e === 5) &&
					((l = t.type),
					(l =
						!(l !== "form" && l !== "button") || mf(t.type, t.memoizedProps))),
				(l = !l)),
			l && Dt && Ul(t),
			eo(t),
			e === 13)
		) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
				throw Error(f(317));
			t: {
				for (t = t.nextSibling, e = 0; t; ) {
					if (t.nodeType === 8)
						if (((l = t.data), l === "/$")) {
							if (e === 0) {
								Dt = Ae(t.nextSibling);
								break t;
							}
							e--;
						} else (l !== "$" && l !== "$!" && l !== "$?") || e++;
					t = t.nextSibling;
				}
				Dt = null;
			}
		} else
			e === 27
				? ((e = Dt), vl(t.type) ? ((t = pf), (pf = null), (Dt = t)) : (Dt = e))
				: (Dt = Ft ? Ae(t.stateNode.nextSibling) : null);
		return !0;
	}
	function Za() {
		((Dt = Ft = null), (mt = !1));
	}
	function lo() {
		var t = Nl;
		return (
			t !== null &&
				(le === null ? (le = t) : le.push.apply(le, t), (Nl = null)),
			t
		);
	}
	function Va(t) {
		Nl === null ? (Nl = [t]) : Nl.push(t);
	}
	var Pi = q(null),
		Cl = null,
		Ye = null;
	function el(t, e, l) {
		(G(Pi, e._currentValue), (e._currentValue = l));
	}
	function Le(t) {
		((t._currentValue = Pi.current), V(Pi));
	}
	function Ii(t, e, l) {
		for (; t !== null; ) {
			var a = t.alternate;
			if (
				((t.childLanes & e) !== e
					? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
					: a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
				t === l)
			)
				break;
			t = t.return;
		}
	}
	function tc(t, e, l, a) {
		var u = t.child;
		for (u !== null && (u.return = t); u !== null; ) {
			var n = u.dependencies;
			if (n !== null) {
				var c = u.child;
				n = n.firstContext;
				t: for (; n !== null; ) {
					var r = n;
					n = u;
					for (var v = 0; v < e.length; v++)
						if (r.context === e[v]) {
							((n.lanes |= l),
								(r = n.alternate),
								r !== null && (r.lanes |= l),
								Ii(n.return, l, t),
								a || (c = null));
							break t;
						}
					n = r.next;
				}
			} else if (u.tag === 18) {
				if (((c = u.return), c === null)) throw Error(f(341));
				((c.lanes |= l),
					(n = c.alternate),
					n !== null && (n.lanes |= l),
					Ii(c, l, t),
					(c = null));
			} else c = u.child;
			if (c !== null) c.return = u;
			else
				for (c = u; c !== null; ) {
					if (c === t) {
						c = null;
						break;
					}
					if (((u = c.sibling), u !== null)) {
						((u.return = c.return), (c = u));
						break;
					}
					c = c.return;
				}
			u = c;
		}
	}
	function Ka(t, e, l, a) {
		t = null;
		for (var u = e, n = !1; u !== null; ) {
			if (!n) {
				if (u.flags & 524288) n = !0;
				else if (u.flags & 262144) break;
			}
			if (u.tag === 10) {
				var c = u.alternate;
				if (c === null) throw Error(f(387));
				if (((c = c.memoizedProps), c !== null)) {
					var r = u.type;
					ie(u.pendingProps.value, c.value) ||
						(t !== null ? t.push(r) : (t = [r]));
				}
			} else if (u === ae.current) {
				if (((c = u.alternate), c === null)) throw Error(f(387));
				c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
					(t !== null ? t.push(xu) : (t = [xu]));
			}
			u = u.return;
		}
		(t !== null && tc(e, t, l, a), (e.flags |= 262144));
	}
	function ln(t) {
		for (t = t.firstContext; t !== null; ) {
			if (!ie(t.context._currentValue, t.memoizedValue)) return !0;
			t = t.next;
		}
		return !1;
	}
	function jl(t) {
		((Cl = t),
			(Ye = null),
			(t = t.dependencies),
			t !== null && (t.firstContext = null));
	}
	function $t(t) {
		return ao(Cl, t);
	}
	function an(t, e) {
		return (Cl === null && jl(t), ao(t, e));
	}
	function ao(t, e) {
		var l = e._currentValue;
		if (((e = { context: e, memoizedValue: l, next: null }), Ye === null)) {
			if (t === null) throw Error(f(308));
			((Ye = e),
				(t.dependencies = { lanes: 0, firstContext: e }),
				(t.flags |= 524288));
		} else Ye = Ye.next = e;
		return l;
	}
	var F0 =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var t = [],
							e = (this.signal = {
								aborted: !1,
								addEventListener: function (l, a) {
									t.push(a);
								},
							});
						this.abort = function () {
							((e.aborted = !0),
								t.forEach(function (l) {
									return l();
								}));
						};
					},
		P0 = i.unstable_scheduleCallback,
		I0 = i.unstable_NormalPriority,
		qt = {
			$$typeof: $,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function ec() {
		return { controller: new F0(), data: new Map(), refCount: 0 };
	}
	function Ja(t) {
		(t.refCount--,
			t.refCount === 0 &&
				P0(I0, function () {
					t.controller.abort();
				}));
	}
	var ka = null,
		lc = 0,
		na = 0,
		ia = null;
	function tm(t, e) {
		if (ka === null) {
			var l = (ka = []);
			((lc = 0),
				(na = uf()),
				(ia = {
					status: "pending",
					value: void 0,
					then: function (a) {
						l.push(a);
					},
				}));
		}
		return (lc++, e.then(uo, uo), e);
	}
	function uo() {
		if (--lc === 0 && ka !== null) {
			ia !== null && (ia.status = "fulfilled");
			var t = ka;
			((ka = null), (na = 0), (ia = null));
			for (var e = 0; e < t.length; e++) (0, t[e])();
		}
	}
	function em(t, e) {
		var l = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function (u) {
					l.push(u);
				},
			};
		return (
			t.then(
				function () {
					((a.status = "fulfilled"), (a.value = e));
					for (var u = 0; u < l.length; u++) (0, l[u])(e);
				},
				function (u) {
					for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)
						(0, l[u])(void 0);
				},
			),
			a
		);
	}
	var no = U.S;
	U.S = function (t, e) {
		(typeof e == "object" &&
			e !== null &&
			typeof e.then == "function" &&
			tm(t, e),
			no !== null && no(t, e));
	};
	var Hl = q(null);
	function ac() {
		var t = Hl.current;
		return t !== null ? t : At.pooledCache;
	}
	function un(t, e) {
		e === null ? G(Hl, Hl.current) : G(Hl, e.pool);
	}
	function io() {
		var t = ac();
		return t === null ? null : { parent: qt._currentValue, pool: t };
	}
	var $a = Error(f(460)),
		co = Error(f(474)),
		nn = Error(f(542)),
		uc = { then: function () {} };
	function fo(t) {
		return ((t = t.status), t === "fulfilled" || t === "rejected");
	}
	function cn() {}
	function ro(t, e, l) {
		switch (
			((l = t[l]),
			l === void 0 ? t.push(e) : l !== e && (e.then(cn, cn), (e = l)),
			e.status)
		) {
			case "fulfilled":
				return e.value;
			case "rejected":
				throw ((t = e.reason), so(t), t);
			default:
				if (typeof e.status == "string") e.then(cn, cn);
				else {
					if (((t = At), t !== null && 100 < t.shellSuspendCounter))
						throw Error(f(482));
					((t = e),
						(t.status = "pending"),
						t.then(
							function (a) {
								if (e.status === "pending") {
									var u = e;
									((u.status = "fulfilled"), (u.value = a));
								}
							},
							function (a) {
								if (e.status === "pending") {
									var u = e;
									((u.status = "rejected"), (u.reason = a));
								}
							},
						));
				}
				switch (e.status) {
					case "fulfilled":
						return e.value;
					case "rejected":
						throw ((t = e.reason), so(t), t);
				}
				throw ((Wa = e), $a);
		}
	}
	var Wa = null;
	function oo() {
		if (Wa === null) throw Error(f(459));
		var t = Wa;
		return ((Wa = null), t);
	}
	function so(t) {
		if (t === $a || t === nn) throw Error(f(483));
	}
	var ll = !1;
	function nc(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function ic(t, e) {
		((t = t.updateQueue),
			e.updateQueue === t &&
				(e.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					callbacks: null,
				}));
	}
	function al(t) {
		return { lane: t, tag: 0, payload: null, callback: null, next: null };
	}
	function ul(t, e, l) {
		var a = t.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), yt & 2)) {
			var u = a.pending;
			return (
				u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
				(a.pending = e),
				(e = Pu(t)),
				Fr(t, null, l),
				e
			);
		}
		return (Fu(t, a, e, l), Pu(t));
	}
	function Fa(t, e, l) {
		if (
			((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
		) {
			var a = e.lanes;
			((a &= t.pendingLanes), (l |= a), (e.lanes = l), ur(t, l));
		}
	}
	function cc(t, e) {
		var l = t.updateQueue,
			a = t.alternate;
		if (a !== null && ((a = a.updateQueue), l === a)) {
			var u = null,
				n = null;
			if (((l = l.firstBaseUpdate), l !== null)) {
				do {
					var c = {
						lane: l.lane,
						tag: l.tag,
						payload: l.payload,
						callback: null,
						next: null,
					};
					(n === null ? (u = n = c) : (n = n.next = c), (l = l.next));
				} while (l !== null);
				n === null ? (u = n = e) : (n = n.next = e);
			} else u = n = e;
			((l = {
				baseState: a.baseState,
				firstBaseUpdate: u,
				lastBaseUpdate: n,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(t.updateQueue = l));
			return;
		}
		((t = l.lastBaseUpdate),
			t === null ? (l.firstBaseUpdate = e) : (t.next = e),
			(l.lastBaseUpdate = e));
	}
	var fc = !1;
	function Pa() {
		if (fc) {
			var t = ia;
			if (t !== null) throw t;
		}
	}
	function Ia(t, e, l, a) {
		fc = !1;
		var u = t.updateQueue;
		ll = !1;
		var n = u.firstBaseUpdate,
			c = u.lastBaseUpdate,
			r = u.shared.pending;
		if (r !== null) {
			u.shared.pending = null;
			var v = r,
				O = v.next;
			((v.next = null), c === null ? (n = O) : (c.next = O), (c = v));
			var j = t.alternate;
			j !== null &&
				((j = j.updateQueue),
				(r = j.lastBaseUpdate),
				r !== c &&
					(r === null ? (j.firstBaseUpdate = O) : (r.next = O),
					(j.lastBaseUpdate = v)));
		}
		if (n !== null) {
			var w = u.baseState;
			((c = 0), (j = O = v = null), (r = n));
			do {
				var M = r.lane & -536870913,
					_ = M !== r.lane;
				if (_ ? (st & M) === M : (a & M) === M) {
					(M !== 0 && M === na && (fc = !0),
						j !== null &&
							(j = j.next =
								{
									lane: 0,
									tag: r.tag,
									payload: r.payload,
									callback: null,
									next: null,
								}));
					t: {
						var tt = t,
							F = r;
						M = e;
						var St = l;
						switch (F.tag) {
							case 1:
								if (((tt = F.payload), typeof tt == "function")) {
									w = tt.call(St, w, M);
									break t;
								}
								w = tt;
								break t;
							case 3:
								tt.flags = (tt.flags & -65537) | 128;
							case 0:
								if (
									((tt = F.payload),
									(M = typeof tt == "function" ? tt.call(St, w, M) : tt),
									M == null)
								)
									break t;
								w = p({}, w, M);
								break t;
							case 2:
								ll = !0;
						}
					}
					((M = r.callback),
						M !== null &&
							((t.flags |= 64),
							_ && (t.flags |= 8192),
							(_ = u.callbacks),
							_ === null ? (u.callbacks = [M]) : _.push(M)));
				} else
					((_ = {
						lane: M,
						tag: r.tag,
						payload: r.payload,
						callback: r.callback,
						next: null,
					}),
						j === null ? ((O = j = _), (v = w)) : (j = j.next = _),
						(c |= M));
				if (((r = r.next), r === null)) {
					if (((r = u.shared.pending), r === null)) break;
					((_ = r),
						(r = _.next),
						(_.next = null),
						(u.lastBaseUpdate = _),
						(u.shared.pending = null));
				}
			} while (!0);
			(j === null && (v = w),
				(u.baseState = v),
				(u.firstBaseUpdate = O),
				(u.lastBaseUpdate = j),
				n === null && (u.shared.lanes = 0),
				(dl |= c),
				(t.lanes = c),
				(t.memoizedState = w));
		}
	}
	function ho(t, e) {
		if (typeof t != "function") throw Error(f(191, t));
		t.call(e);
	}
	function mo(t, e) {
		var l = t.callbacks;
		if (l !== null)
			for (t.callbacks = null, t = 0; t < l.length; t++) ho(l[t], e);
	}
	var ca = q(null),
		fn = q(0);
	function yo(t, e) {
		((t = Je), G(fn, t), G(ca, e), (Je = t | e.baseLanes));
	}
	function rc() {
		(G(fn, Je), G(ca, ca.current));
	}
	function oc() {
		((Je = fn.current), V(ca), V(fn));
	}
	var nl = 0,
		nt = null,
		gt = null,
		Ht = null,
		rn = !1,
		fa = !1,
		wl = !1,
		on = 0,
		tu = 0,
		ra = null,
		lm = 0;
	function Ct() {
		throw Error(f(321));
	}
	function sc(t, e) {
		if (e === null) return !1;
		for (var l = 0; l < e.length && l < t.length; l++)
			if (!ie(t[l], e[l])) return !1;
		return !0;
	}
	function dc(t, e, l, a, u, n) {
		return (
			(nl = n),
			(nt = e),
			(e.memoizedState = null),
			(e.updateQueue = null),
			(e.lanes = 0),
			(U.H = t === null || t.memoizedState === null ? Po : Io),
			(wl = !1),
			(n = l(a, u)),
			(wl = !1),
			fa && (n = go(e, l, a, u)),
			vo(t),
			n
		);
	}
	function vo(t) {
		U.H = vn;
		var e = gt !== null && gt.next !== null;
		if (((nl = 0), (Ht = gt = nt = null), (rn = !1), (tu = 0), (ra = null), e))
			throw Error(f(300));
		t === null ||
			Gt ||
			((t = t.dependencies), t !== null && ln(t) && (Gt = !0));
	}
	function go(t, e, l, a) {
		nt = t;
		var u = 0;
		do {
			if ((fa && (ra = null), (tu = 0), (fa = !1), 25 <= u))
				throw Error(f(301));
			if (((u += 1), (Ht = gt = null), t.updateQueue != null)) {
				var n = t.updateQueue;
				((n.lastEffect = null),
					(n.events = null),
					(n.stores = null),
					n.memoCache != null && (n.memoCache.index = 0));
			}
			((U.H = rm), (n = e(l, a)));
		} while (fa);
		return n;
	}
	function am() {
		var t = U.H,
			e = t.useState()[0];
		return (
			(e = typeof e.then == "function" ? eu(e) : e),
			(t = t.useState()[0]),
			(gt !== null ? gt.memoizedState : null) !== t && (nt.flags |= 1024),
			e
		);
	}
	function hc() {
		var t = on !== 0;
		return ((on = 0), t);
	}
	function mc(t, e, l) {
		((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
	}
	function yc(t) {
		if (rn) {
			for (t = t.memoizedState; t !== null; ) {
				var e = t.queue;
				(e !== null && (e.pending = null), (t = t.next));
			}
			rn = !1;
		}
		((nl = 0), (Ht = gt = nt = null), (fa = !1), (tu = on = 0), (ra = null));
	}
	function te() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (Ht === null ? (nt.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht);
	}
	function wt() {
		if (gt === null) {
			var t = nt.alternate;
			t = t !== null ? t.memoizedState : null;
		} else t = gt.next;
		var e = Ht === null ? nt.memoizedState : Ht.next;
		if (e !== null) ((Ht = e), (gt = t));
		else {
			if (t === null)
				throw nt.alternate === null ? Error(f(467)) : Error(f(310));
			((gt = t),
				(t = {
					memoizedState: gt.memoizedState,
					baseState: gt.baseState,
					baseQueue: gt.baseQueue,
					queue: gt.queue,
					next: null,
				}),
				Ht === null ? (nt.memoizedState = Ht = t) : (Ht = Ht.next = t));
		}
		return Ht;
	}
	function vc() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function eu(t) {
		var e = tu;
		return (
			(tu += 1),
			ra === null && (ra = []),
			(t = ro(ra, t, e)),
			(e = nt),
			(Ht === null ? e.memoizedState : Ht.next) === null &&
				((e = e.alternate),
				(U.H = e === null || e.memoizedState === null ? Po : Io)),
			t
		);
	}
	function sn(t) {
		if (t !== null && typeof t == "object") {
			if (typeof t.then == "function") return eu(t);
			if (t.$$typeof === $) return $t(t);
		}
		throw Error(f(438, String(t)));
	}
	function gc(t) {
		var e = null,
			l = nt.updateQueue;
		if ((l !== null && (e = l.memoCache), e == null)) {
			var a = nt.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(e = {
							data: a.data.map(function (u) {
								return u.slice();
							}),
							index: 0,
						})));
		}
		if (
			(e == null && (e = { data: [], index: 0 }),
			l === null && ((l = vc()), (nt.updateQueue = l)),
			(l.memoCache = e),
			(l = e.data[e.index]),
			l === void 0)
		)
			for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = bt;
		return (e.index++, l);
	}
	function Ge(t, e) {
		return typeof e == "function" ? e(t) : e;
	}
	function dn(t) {
		var e = wt();
		return pc(e, gt, t);
	}
	function pc(t, e, l) {
		var a = t.queue;
		if (a === null) throw Error(f(311));
		a.lastRenderedReducer = l;
		var u = t.baseQueue,
			n = a.pending;
		if (n !== null) {
			if (u !== null) {
				var c = u.next;
				((u.next = n.next), (n.next = c));
			}
			((e.baseQueue = u = n), (a.pending = null));
		}
		if (((n = t.baseState), u === null)) t.memoizedState = n;
		else {
			e = u.next;
			var r = (c = null),
				v = null,
				O = e,
				j = !1;
			do {
				var w = O.lane & -536870913;
				if (w !== O.lane ? (st & w) === w : (nl & w) === w) {
					var M = O.revertLane;
					if (M === 0)
						(v !== null &&
							(v = v.next =
								{
									lane: 0,
									revertLane: 0,
									action: O.action,
									hasEagerState: O.hasEagerState,
									eagerState: O.eagerState,
									next: null,
								}),
							w === na && (j = !0));
					else if ((nl & M) === M) {
						((O = O.next), M === na && (j = !0));
						continue;
					} else
						((w = {
							lane: 0,
							revertLane: O.revertLane,
							action: O.action,
							hasEagerState: O.hasEagerState,
							eagerState: O.eagerState,
							next: null,
						}),
							v === null ? ((r = v = w), (c = n)) : (v = v.next = w),
							(nt.lanes |= M),
							(dl |= M));
					((w = O.action),
						wl && l(n, w),
						(n = O.hasEagerState ? O.eagerState : l(n, w)));
				} else
					((M = {
						lane: w,
						revertLane: O.revertLane,
						action: O.action,
						hasEagerState: O.hasEagerState,
						eagerState: O.eagerState,
						next: null,
					}),
						v === null ? ((r = v = M), (c = n)) : (v = v.next = M),
						(nt.lanes |= w),
						(dl |= w));
				O = O.next;
			} while (O !== null && O !== e);
			if (
				(v === null ? (c = n) : (v.next = r),
				!ie(n, t.memoizedState) && ((Gt = !0), j && ((l = ia), l !== null)))
			)
				throw l;
			((t.memoizedState = n),
				(t.baseState = c),
				(t.baseQueue = v),
				(a.lastRenderedState = n));
		}
		return (u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
	}
	function Sc(t) {
		var e = wt(),
			l = e.queue;
		if (l === null) throw Error(f(311));
		l.lastRenderedReducer = t;
		var a = l.dispatch,
			u = l.pending,
			n = e.memoizedState;
		if (u !== null) {
			l.pending = null;
			var c = (u = u.next);
			do ((n = t(n, c.action)), (c = c.next));
			while (c !== u);
			(ie(n, e.memoizedState) || (Gt = !0),
				(e.memoizedState = n),
				e.baseQueue === null && (e.baseState = n),
				(l.lastRenderedState = n));
		}
		return [n, a];
	}
	function po(t, e, l) {
		var a = nt,
			u = wt(),
			n = mt;
		if (n) {
			if (l === void 0) throw Error(f(407));
			l = l();
		} else l = e();
		var c = !ie((gt || u).memoizedState, l);
		(c && ((u.memoizedState = l), (Gt = !0)), (u = u.queue));
		var r = xo.bind(null, a, u, t);
		if (
			(lu(2048, 8, r, [t]),
			u.getSnapshot !== e || c || (Ht !== null && Ht.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				oa(9, hn(), bo.bind(null, a, u, l, e), null),
				At === null)
			)
				throw Error(f(349));
			n || nl & 124 || So(a, e, l);
		}
		return l;
	}
	function So(t, e, l) {
		((t.flags |= 16384),
			(t = { getSnapshot: e, value: l }),
			(e = nt.updateQueue),
			e === null
				? ((e = vc()), (nt.updateQueue = e), (e.stores = [t]))
				: ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
	}
	function bo(t, e, l, a) {
		((e.value = l), (e.getSnapshot = a), Eo(e) && To(t));
	}
	function xo(t, e, l) {
		return l(function () {
			Eo(e) && To(t);
		});
	}
	function Eo(t) {
		var e = t.getSnapshot;
		t = t.value;
		try {
			var l = e();
			return !ie(t, l);
		} catch {
			return !0;
		}
	}
	function To(t) {
		var e = ea(t, 2);
		e !== null && de(e, t, 2);
	}
	function bc(t) {
		var e = te();
		if (typeof t == "function") {
			var l = t;
			if (((t = l()), wl)) {
				Pe(!0);
				try {
					l();
				} finally {
					Pe(!1);
				}
			}
		}
		return (
			(e.memoizedState = e.baseState = t),
			(e.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ge,
				lastRenderedState: t,
			}),
			e
		);
	}
	function Ao(t, e, l, a) {
		return ((t.baseState = l), pc(t, gt, typeof a == "function" ? a : Ge));
	}
	function um(t, e, l, a, u) {
		if (yn(t)) throw Error(f(485));
		if (((t = e.action), t !== null)) {
			var n = {
				payload: u,
				action: t,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (c) {
					n.listeners.push(c);
				},
			};
			(U.T !== null ? l(!0) : (n.isTransition = !1),
				a(n),
				(l = e.pending),
				l === null
					? ((n.next = e.pending = n), Ro(e, n))
					: ((n.next = l.next), (e.pending = l.next = n)));
		}
	}
	function Ro(t, e) {
		var l = e.action,
			a = e.payload,
			u = t.state;
		if (e.isTransition) {
			var n = U.T,
				c = {};
			U.T = c;
			try {
				var r = l(u, a),
					v = U.S;
				(v !== null && v(c, r), Oo(t, e, r));
			} catch (O) {
				xc(t, e, O);
			} finally {
				U.T = n;
			}
		} else
			try {
				((n = l(u, a)), Oo(t, e, n));
			} catch (O) {
				xc(t, e, O);
			}
	}
	function Oo(t, e, l) {
		l !== null && typeof l == "object" && typeof l.then == "function"
			? l.then(
					function (a) {
						Mo(t, e, a);
					},
					function (a) {
						return xc(t, e, a);
					},
				)
			: Mo(t, e, l);
	}
	function Mo(t, e, l) {
		((e.status = "fulfilled"),
			(e.value = l),
			_o(e),
			(t.state = l),
			(e = t.pending),
			e !== null &&
				((l = e.next),
				l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Ro(t, l))));
	}
	function xc(t, e, l) {
		var a = t.pending;
		if (((t.pending = null), a !== null)) {
			a = a.next;
			do ((e.status = "rejected"), (e.reason = l), _o(e), (e = e.next));
			while (e !== a);
		}
		t.action = null;
	}
	function _o(t) {
		t = t.listeners;
		for (var e = 0; e < t.length; e++) (0, t[e])();
	}
	function zo(t, e) {
		return e;
	}
	function Do(t, e) {
		if (mt) {
			var l = At.formState;
			if (l !== null) {
				t: {
					var a = nt;
					if (mt) {
						if (Dt) {
							e: {
								for (var u = Dt, n = Me; u.nodeType !== 8; ) {
									if (!n) {
										u = null;
										break e;
									}
									if (((u = Ae(u.nextSibling)), u === null)) {
										u = null;
										break e;
									}
								}
								((n = u.data), (u = n === "F!" || n === "F" ? u : null));
							}
							if (u) {
								((Dt = Ae(u.nextSibling)), (a = u.data === "F!"));
								break t;
							}
						}
						Ul(a);
					}
					a = !1;
				}
				a && (e = l[0]);
			}
		}
		return (
			(l = te()),
			(l.memoizedState = l.baseState = e),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: zo,
				lastRenderedState: e,
			}),
			(l.queue = a),
			(l = $o.bind(null, nt, a)),
			(a.dispatch = l),
			(a = bc(!1)),
			(n = Oc.bind(null, nt, !1, a.queue)),
			(a = te()),
			(u = { state: e, dispatch: null, action: t, pending: null }),
			(a.queue = u),
			(l = um.bind(null, nt, u, n, l)),
			(u.dispatch = l),
			(a.memoizedState = t),
			[e, l, !1]
		);
	}
	function No(t) {
		var e = wt();
		return Uo(e, gt, t);
	}
	function Uo(t, e, l) {
		if (
			((e = pc(t, e, zo)[0]),
			(t = dn(Ge)[0]),
			typeof e == "object" && e !== null && typeof e.then == "function")
		)
			try {
				var a = eu(e);
			} catch (c) {
				throw c === $a ? nn : c;
			}
		else a = e;
		e = wt();
		var u = e.queue,
			n = u.dispatch;
		return (
			l !== e.memoizedState &&
				((nt.flags |= 2048), oa(9, hn(), nm.bind(null, u, l), null)),
			[a, n, t]
		);
	}
	function nm(t, e) {
		t.action = e;
	}
	function Co(t) {
		var e = wt(),
			l = gt;
		if (l !== null) return Uo(e, l, t);
		(wt(), (e = e.memoizedState), (l = wt()));
		var a = l.queue.dispatch;
		return ((l.memoizedState = t), [e, a, !1]);
	}
	function oa(t, e, l, a) {
		return (
			(t = { tag: t, create: l, deps: a, inst: e, next: null }),
			(e = nt.updateQueue),
			e === null && ((e = vc()), (nt.updateQueue = e)),
			(l = e.lastEffect),
			l === null
				? (e.lastEffect = t.next = t)
				: ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
			t
		);
	}
	function hn() {
		return { destroy: void 0, resource: void 0 };
	}
	function jo() {
		return wt().memoizedState;
	}
	function mn(t, e, l, a) {
		var u = te();
		((a = a === void 0 ? null : a),
			(nt.flags |= t),
			(u.memoizedState = oa(1 | e, hn(), l, a)));
	}
	function lu(t, e, l, a) {
		var u = wt();
		a = a === void 0 ? null : a;
		var n = u.memoizedState.inst;
		gt !== null && a !== null && sc(a, gt.memoizedState.deps)
			? (u.memoizedState = oa(e, n, l, a))
			: ((nt.flags |= t), (u.memoizedState = oa(1 | e, n, l, a)));
	}
	function Ho(t, e) {
		mn(8390656, 8, t, e);
	}
	function wo(t, e) {
		lu(2048, 8, t, e);
	}
	function qo(t, e) {
		return lu(4, 2, t, e);
	}
	function Bo(t, e) {
		return lu(4, 4, t, e);
	}
	function Yo(t, e) {
		if (typeof e == "function") {
			t = t();
			var l = e(t);
			return function () {
				typeof l == "function" ? l() : e(null);
			};
		}
		if (e != null)
			return (
				(t = t()),
				(e.current = t),
				function () {
					e.current = null;
				}
			);
	}
	function Lo(t, e, l) {
		((l = l != null ? l.concat([t]) : null), lu(4, 4, Yo.bind(null, e, t), l));
	}
	function Ec() {}
	function Go(t, e) {
		var l = wt();
		e = e === void 0 ? null : e;
		var a = l.memoizedState;
		return e !== null && sc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
	}
	function Xo(t, e) {
		var l = wt();
		e = e === void 0 ? null : e;
		var a = l.memoizedState;
		if (e !== null && sc(e, a[1])) return a[0];
		if (((a = t()), wl)) {
			Pe(!0);
			try {
				t();
			} finally {
				Pe(!1);
			}
		}
		return ((l.memoizedState = [a, e]), a);
	}
	function Tc(t, e, l) {
		return l === void 0 || nl & 1073741824
			? (t.memoizedState = e)
			: ((t.memoizedState = l), (t = Vs()), (nt.lanes |= t), (dl |= t), l);
	}
	function Qo(t, e, l, a) {
		return ie(l, e)
			? l
			: ca.current !== null
				? ((t = Tc(t, l, a)), ie(t, e) || (Gt = !0), t)
				: nl & 42
					? ((t = Vs()), (nt.lanes |= t), (dl |= t), e)
					: ((Gt = !0), (t.memoizedState = l));
	}
	function Zo(t, e, l, a, u) {
		var n = X.p;
		X.p = n !== 0 && 8 > n ? n : 8;
		var c = U.T,
			r = {};
		((U.T = r), Oc(t, !1, e, l));
		try {
			var v = u(),
				O = U.S;
			if (
				(O !== null && O(r, v),
				v !== null && typeof v == "object" && typeof v.then == "function")
			) {
				var j = em(v, a);
				au(t, e, j, se(t));
			} else au(t, e, a, se(t));
		} catch (w) {
			au(t, e, { then: function () {}, status: "rejected", reason: w }, se());
		} finally {
			((X.p = n), (U.T = c));
		}
	}
	function im() {}
	function Ac(t, e, l, a) {
		if (t.tag !== 5) throw Error(f(476));
		var u = Vo(t).queue;
		Zo(
			t,
			u,
			e,
			I,
			l === null
				? im
				: function () {
						return (Ko(t), l(a));
					},
		);
	}
	function Vo(t) {
		var e = t.memoizedState;
		if (e !== null) return e;
		e = {
			memoizedState: I,
			baseState: I,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ge,
				lastRenderedState: I,
			},
			next: null,
		};
		var l = {};
		return (
			(e.next = {
				memoizedState: l,
				baseState: l,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ge,
					lastRenderedState: l,
				},
				next: null,
			}),
			(t.memoizedState = e),
			(t = t.alternate),
			t !== null && (t.memoizedState = e),
			e
		);
	}
	function Ko(t) {
		var e = Vo(t).next.queue;
		au(t, e, {}, se());
	}
	function Rc() {
		return $t(xu);
	}
	function Jo() {
		return wt().memoizedState;
	}
	function ko() {
		return wt().memoizedState;
	}
	function cm(t) {
		for (var e = t.return; e !== null; ) {
			switch (e.tag) {
				case 24:
				case 3:
					var l = se();
					t = al(l);
					var a = ul(e, t, l);
					(a !== null && (de(a, e, l), Fa(a, e, l)),
						(e = { cache: ec() }),
						(t.payload = e));
					return;
			}
			e = e.return;
		}
	}
	function fm(t, e, l) {
		var a = se();
		((l = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			yn(t)
				? Wo(e, l)
				: ((l = Vi(t, e, l, a)), l !== null && (de(l, t, a), Fo(l, e, a))));
	}
	function $o(t, e, l) {
		var a = se();
		au(t, e, l, a);
	}
	function au(t, e, l, a) {
		var u = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (yn(t)) Wo(e, u);
		else {
			var n = t.alternate;
			if (
				t.lanes === 0 &&
				(n === null || n.lanes === 0) &&
				((n = e.lastRenderedReducer), n !== null)
			)
				try {
					var c = e.lastRenderedState,
						r = n(c, l);
					if (((u.hasEagerState = !0), (u.eagerState = r), ie(r, c)))
						return (Fu(t, e, u, 0), At === null && Wu(), !1);
				} catch {
				} finally {
				}
			if (((l = Vi(t, e, u, a)), l !== null))
				return (de(l, t, a), Fo(l, e, a), !0);
		}
		return !1;
	}
	function Oc(t, e, l, a) {
		if (
			((a = {
				lane: 2,
				revertLane: uf(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			yn(t))
		) {
			if (e) throw Error(f(479));
		} else ((e = Vi(t, l, a, 2)), e !== null && de(e, t, 2));
	}
	function yn(t) {
		var e = t.alternate;
		return t === nt || (e !== null && e === nt);
	}
	function Wo(t, e) {
		fa = rn = !0;
		var l = t.pending;
		(l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
			(t.pending = e));
	}
	function Fo(t, e, l) {
		if (l & 4194048) {
			var a = e.lanes;
			((a &= t.pendingLanes), (l |= a), (e.lanes = l), ur(t, l));
		}
	}
	var vn = {
			readContext: $t,
			use: sn,
			useCallback: Ct,
			useContext: Ct,
			useEffect: Ct,
			useImperativeHandle: Ct,
			useLayoutEffect: Ct,
			useInsertionEffect: Ct,
			useMemo: Ct,
			useReducer: Ct,
			useRef: Ct,
			useState: Ct,
			useDebugValue: Ct,
			useDeferredValue: Ct,
			useTransition: Ct,
			useSyncExternalStore: Ct,
			useId: Ct,
			useHostTransitionStatus: Ct,
			useFormState: Ct,
			useActionState: Ct,
			useOptimistic: Ct,
			useMemoCache: Ct,
			useCacheRefresh: Ct,
		},
		Po = {
			readContext: $t,
			use: sn,
			useCallback: function (t, e) {
				return ((te().memoizedState = [t, e === void 0 ? null : e]), t);
			},
			useContext: $t,
			useEffect: Ho,
			useImperativeHandle: function (t, e, l) {
				((l = l != null ? l.concat([t]) : null),
					mn(4194308, 4, Yo.bind(null, e, t), l));
			},
			useLayoutEffect: function (t, e) {
				return mn(4194308, 4, t, e);
			},
			useInsertionEffect: function (t, e) {
				mn(4, 2, t, e);
			},
			useMemo: function (t, e) {
				var l = te();
				e = e === void 0 ? null : e;
				var a = t();
				if (wl) {
					Pe(!0);
					try {
						t();
					} finally {
						Pe(!1);
					}
				}
				return ((l.memoizedState = [a, e]), a);
			},
			useReducer: function (t, e, l) {
				var a = te();
				if (l !== void 0) {
					var u = l(e);
					if (wl) {
						Pe(!0);
						try {
							l(e);
						} finally {
							Pe(!1);
						}
					}
				} else u = e;
				return (
					(a.memoizedState = a.baseState = u),
					(t = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: u,
					}),
					(a.queue = t),
					(t = t.dispatch = fm.bind(null, nt, t)),
					[a.memoizedState, t]
				);
			},
			useRef: function (t) {
				var e = te();
				return ((t = { current: t }), (e.memoizedState = t));
			},
			useState: function (t) {
				t = bc(t);
				var e = t.queue,
					l = $o.bind(null, nt, e);
				return ((e.dispatch = l), [t.memoizedState, l]);
			},
			useDebugValue: Ec,
			useDeferredValue: function (t, e) {
				var l = te();
				return Tc(l, t, e);
			},
			useTransition: function () {
				var t = bc(!1);
				return (
					(t = Zo.bind(null, nt, t.queue, !0, !1)),
					(te().memoizedState = t),
					[!1, t]
				);
			},
			useSyncExternalStore: function (t, e, l) {
				var a = nt,
					u = te();
				if (mt) {
					if (l === void 0) throw Error(f(407));
					l = l();
				} else {
					if (((l = e()), At === null)) throw Error(f(349));
					st & 124 || So(a, e, l);
				}
				u.memoizedState = l;
				var n = { value: l, getSnapshot: e };
				return (
					(u.queue = n),
					Ho(xo.bind(null, a, n, t), [t]),
					(a.flags |= 2048),
					oa(9, hn(), bo.bind(null, a, n, l, e), null),
					l
				);
			},
			useId: function () {
				var t = te(),
					e = At.identifierPrefix;
				if (mt) {
					var l = Be,
						a = qe;
					((l = (a & ~(1 << (32 - ne(a) - 1))).toString(32) + l),
						(e = "«" + e + "R" + l),
						(l = on++),
						0 < l && (e += "H" + l.toString(32)),
						(e += "»"));
				} else ((l = lm++), (e = "«" + e + "r" + l.toString(32) + "»"));
				return (t.memoizedState = e);
			},
			useHostTransitionStatus: Rc,
			useFormState: Do,
			useActionState: Do,
			useOptimistic: function (t) {
				var e = te();
				e.memoizedState = e.baseState = t;
				var l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(e.queue = l),
					(e = Oc.bind(null, nt, !0, l)),
					(l.dispatch = e),
					[t, e]
				);
			},
			useMemoCache: gc,
			useCacheRefresh: function () {
				return (te().memoizedState = cm.bind(null, nt));
			},
		},
		Io = {
			readContext: $t,
			use: sn,
			useCallback: Go,
			useContext: $t,
			useEffect: wo,
			useImperativeHandle: Lo,
			useInsertionEffect: qo,
			useLayoutEffect: Bo,
			useMemo: Xo,
			useReducer: dn,
			useRef: jo,
			useState: function () {
				return dn(Ge);
			},
			useDebugValue: Ec,
			useDeferredValue: function (t, e) {
				var l = wt();
				return Qo(l, gt.memoizedState, t, e);
			},
			useTransition: function () {
				var t = dn(Ge)[0],
					e = wt().memoizedState;
				return [typeof t == "boolean" ? t : eu(t), e];
			},
			useSyncExternalStore: po,
			useId: Jo,
			useHostTransitionStatus: Rc,
			useFormState: No,
			useActionState: No,
			useOptimistic: function (t, e) {
				var l = wt();
				return Ao(l, gt, t, e);
			},
			useMemoCache: gc,
			useCacheRefresh: ko,
		},
		rm = {
			readContext: $t,
			use: sn,
			useCallback: Go,
			useContext: $t,
			useEffect: wo,
			useImperativeHandle: Lo,
			useInsertionEffect: qo,
			useLayoutEffect: Bo,
			useMemo: Xo,
			useReducer: Sc,
			useRef: jo,
			useState: function () {
				return Sc(Ge);
			},
			useDebugValue: Ec,
			useDeferredValue: function (t, e) {
				var l = wt();
				return gt === null ? Tc(l, t, e) : Qo(l, gt.memoizedState, t, e);
			},
			useTransition: function () {
				var t = Sc(Ge)[0],
					e = wt().memoizedState;
				return [typeof t == "boolean" ? t : eu(t), e];
			},
			useSyncExternalStore: po,
			useId: Jo,
			useHostTransitionStatus: Rc,
			useFormState: Co,
			useActionState: Co,
			useOptimistic: function (t, e) {
				var l = wt();
				return gt !== null
					? Ao(l, gt, t, e)
					: ((l.baseState = t), [t, l.queue.dispatch]);
			},
			useMemoCache: gc,
			useCacheRefresh: ko,
		},
		sa = null,
		uu = 0;
	function gn(t) {
		var e = uu;
		return ((uu += 1), sa === null && (sa = []), ro(sa, t, e));
	}
	function nu(t, e) {
		((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
	}
	function pn(t, e) {
		throw e.$$typeof === b
			? Error(f(525))
			: ((t = Object.prototype.toString.call(e)),
				Error(
					f(
						31,
						t === "[object Object]"
							? "object with keys {" + Object.keys(e).join(", ") + "}"
							: t,
					),
				));
	}
	function ts(t) {
		var e = t._init;
		return e(t._payload);
	}
	function es(t) {
		function e(A, E) {
			if (t) {
				var R = A.deletions;
				R === null ? ((A.deletions = [E]), (A.flags |= 16)) : R.push(E);
			}
		}
		function l(A, E) {
			if (!t) return null;
			for (; E !== null; ) (e(A, E), (E = E.sibling));
			return null;
		}
		function a(A) {
			for (var E = new Map(); A !== null; )
				(A.key !== null ? E.set(A.key, A) : E.set(A.index, A), (A = A.sibling));
			return E;
		}
		function u(A, E) {
			return ((A = we(A, E)), (A.index = 0), (A.sibling = null), A);
		}
		function n(A, E, R) {
			return (
				(A.index = R),
				t
					? ((R = A.alternate),
						R !== null
							? ((R = R.index), R < E ? ((A.flags |= 67108866), E) : R)
							: ((A.flags |= 67108866), E))
					: ((A.flags |= 1048576), E)
			);
		}
		function c(A) {
			return (t && A.alternate === null && (A.flags |= 67108866), A);
		}
		function r(A, E, R, H) {
			return E === null || E.tag !== 6
				? ((E = Ji(R, A.mode, H)), (E.return = A), E)
				: ((E = u(E, R)), (E.return = A), E);
		}
		function v(A, E, R, H) {
			var K = R.type;
			return K === z
				? j(A, E, R.props.children, H, R.key)
				: E !== null &&
					  (E.elementType === K ||
							(typeof K == "object" &&
								K !== null &&
								K.$$typeof === at &&
								ts(K) === E.type))
					? ((E = u(E, R.props)), nu(E, R), (E.return = A), E)
					: ((E = Iu(R.type, R.key, R.props, null, A.mode, H)),
						nu(E, R),
						(E.return = A),
						E);
		}
		function O(A, E, R, H) {
			return E === null ||
				E.tag !== 4 ||
				E.stateNode.containerInfo !== R.containerInfo ||
				E.stateNode.implementation !== R.implementation
				? ((E = ki(R, A.mode, H)), (E.return = A), E)
				: ((E = u(E, R.children || [])), (E.return = A), E);
		}
		function j(A, E, R, H, K) {
			return E === null || E.tag !== 7
				? ((E = _l(R, A.mode, H, K)), (E.return = A), E)
				: ((E = u(E, R)), (E.return = A), E);
		}
		function w(A, E, R) {
			if (
				(typeof E == "string" && E !== "") ||
				typeof E == "number" ||
				typeof E == "bigint"
			)
				return ((E = Ji("" + E, A.mode, R)), (E.return = A), E);
			if (typeof E == "object" && E !== null) {
				switch (E.$$typeof) {
					case S:
						return (
							(R = Iu(E.type, E.key, E.props, null, A.mode, R)),
							nu(R, E),
							(R.return = A),
							R
						);
					case N:
						return ((E = ki(E, A.mode, R)), (E.return = A), E);
					case at:
						var H = E._init;
						return ((E = H(E._payload)), w(A, E, R));
				}
				if (Ut(E) || Tt(E))
					return ((E = _l(E, A.mode, R, null)), (E.return = A), E);
				if (typeof E.then == "function") return w(A, gn(E), R);
				if (E.$$typeof === $) return w(A, an(A, E), R);
				pn(A, E);
			}
			return null;
		}
		function M(A, E, R, H) {
			var K = E !== null ? E.key : null;
			if (
				(typeof R == "string" && R !== "") ||
				typeof R == "number" ||
				typeof R == "bigint"
			)
				return K !== null ? null : r(A, E, "" + R, H);
			if (typeof R == "object" && R !== null) {
				switch (R.$$typeof) {
					case S:
						return R.key === K ? v(A, E, R, H) : null;
					case N:
						return R.key === K ? O(A, E, R, H) : null;
					case at:
						return ((K = R._init), (R = K(R._payload)), M(A, E, R, H));
				}
				if (Ut(R) || Tt(R)) return K !== null ? null : j(A, E, R, H, null);
				if (typeof R.then == "function") return M(A, E, gn(R), H);
				if (R.$$typeof === $) return M(A, E, an(A, R), H);
				pn(A, R);
			}
			return null;
		}
		function _(A, E, R, H, K) {
			if (
				(typeof H == "string" && H !== "") ||
				typeof H == "number" ||
				typeof H == "bigint"
			)
				return ((A = A.get(R) || null), r(E, A, "" + H, K));
			if (typeof H == "object" && H !== null) {
				switch (H.$$typeof) {
					case S:
						return (
							(A = A.get(H.key === null ? R : H.key) || null),
							v(E, A, H, K)
						);
					case N:
						return (
							(A = A.get(H.key === null ? R : H.key) || null),
							O(E, A, H, K)
						);
					case at:
						var it = H._init;
						return ((H = it(H._payload)), _(A, E, R, H, K));
				}
				if (Ut(H) || Tt(H))
					return ((A = A.get(R) || null), j(E, A, H, K, null));
				if (typeof H.then == "function") return _(A, E, R, gn(H), K);
				if (H.$$typeof === $) return _(A, E, R, an(E, H), K);
				pn(E, H);
			}
			return null;
		}
		function tt(A, E, R, H) {
			for (
				var K = null, it = null, k = E, P = (E = 0), Qt = null;
				k !== null && P < R.length;
				P++
			) {
				k.index > P ? ((Qt = k), (k = null)) : (Qt = k.sibling);
				var ht = M(A, k, R[P], H);
				if (ht === null) {
					k === null && (k = Qt);
					break;
				}
				(t && k && ht.alternate === null && e(A, k),
					(E = n(ht, E, P)),
					it === null ? (K = ht) : (it.sibling = ht),
					(it = ht),
					(k = Qt));
			}
			if (P === R.length) return (l(A, k), mt && Dl(A, P), K);
			if (k === null) {
				for (; P < R.length; P++)
					((k = w(A, R[P], H)),
						k !== null &&
							((E = n(k, E, P)),
							it === null ? (K = k) : (it.sibling = k),
							(it = k)));
				return (mt && Dl(A, P), K);
			}
			for (k = a(k); P < R.length; P++)
				((Qt = _(k, A, P, R[P], H)),
					Qt !== null &&
						(t &&
							Qt.alternate !== null &&
							k.delete(Qt.key === null ? P : Qt.key),
						(E = n(Qt, E, P)),
						it === null ? (K = Qt) : (it.sibling = Qt),
						(it = Qt)));
			return (
				t &&
					k.forEach(function (xl) {
						return e(A, xl);
					}),
				mt && Dl(A, P),
				K
			);
		}
		function F(A, E, R, H) {
			if (R == null) throw Error(f(151));
			for (
				var K = null, it = null, k = E, P = (E = 0), Qt = null, ht = R.next();
				k !== null && !ht.done;
				P++, ht = R.next()
			) {
				k.index > P ? ((Qt = k), (k = null)) : (Qt = k.sibling);
				var xl = M(A, k, ht.value, H);
				if (xl === null) {
					k === null && (k = Qt);
					break;
				}
				(t && k && xl.alternate === null && e(A, k),
					(E = n(xl, E, P)),
					it === null ? (K = xl) : (it.sibling = xl),
					(it = xl),
					(k = Qt));
			}
			if (ht.done) return (l(A, k), mt && Dl(A, P), K);
			if (k === null) {
				for (; !ht.done; P++, ht = R.next())
					((ht = w(A, ht.value, H)),
						ht !== null &&
							((E = n(ht, E, P)),
							it === null ? (K = ht) : (it.sibling = ht),
							(it = ht)));
				return (mt && Dl(A, P), K);
			}
			for (k = a(k); !ht.done; P++, ht = R.next())
				((ht = _(k, A, P, ht.value, H)),
					ht !== null &&
						(t &&
							ht.alternate !== null &&
							k.delete(ht.key === null ? P : ht.key),
						(E = n(ht, E, P)),
						it === null ? (K = ht) : (it.sibling = ht),
						(it = ht)));
			return (
				t &&
					k.forEach(function (oy) {
						return e(A, oy);
					}),
				mt && Dl(A, P),
				K
			);
		}
		function St(A, E, R, H) {
			if (
				(typeof R == "object" &&
					R !== null &&
					R.type === z &&
					R.key === null &&
					(R = R.props.children),
				typeof R == "object" && R !== null)
			) {
				switch (R.$$typeof) {
					case S:
						t: {
							for (var K = R.key; E !== null; ) {
								if (E.key === K) {
									if (((K = R.type), K === z)) {
										if (E.tag === 7) {
											(l(A, E.sibling),
												(H = u(E, R.props.children)),
												(H.return = A),
												(A = H));
											break t;
										}
									} else if (
										E.elementType === K ||
										(typeof K == "object" &&
											K !== null &&
											K.$$typeof === at &&
											ts(K) === E.type)
									) {
										(l(A, E.sibling),
											(H = u(E, R.props)),
											nu(H, R),
											(H.return = A),
											(A = H));
										break t;
									}
									l(A, E);
									break;
								} else e(A, E);
								E = E.sibling;
							}
							R.type === z
								? ((H = _l(R.props.children, A.mode, H, R.key)),
									(H.return = A),
									(A = H))
								: ((H = Iu(R.type, R.key, R.props, null, A.mode, H)),
									nu(H, R),
									(H.return = A),
									(A = H));
						}
						return c(A);
					case N:
						t: {
							for (K = R.key; E !== null; ) {
								if (E.key === K)
									if (
										E.tag === 4 &&
										E.stateNode.containerInfo === R.containerInfo &&
										E.stateNode.implementation === R.implementation
									) {
										(l(A, E.sibling),
											(H = u(E, R.children || [])),
											(H.return = A),
											(A = H));
										break t;
									} else {
										l(A, E);
										break;
									}
								else e(A, E);
								E = E.sibling;
							}
							((H = ki(R, A.mode, H)), (H.return = A), (A = H));
						}
						return c(A);
					case at:
						return ((K = R._init), (R = K(R._payload)), St(A, E, R, H));
				}
				if (Ut(R)) return tt(A, E, R, H);
				if (Tt(R)) {
					if (((K = Tt(R)), typeof K != "function")) throw Error(f(150));
					return ((R = K.call(R)), F(A, E, R, H));
				}
				if (typeof R.then == "function") return St(A, E, gn(R), H);
				if (R.$$typeof === $) return St(A, E, an(A, R), H);
				pn(A, R);
			}
			return (typeof R == "string" && R !== "") ||
				typeof R == "number" ||
				typeof R == "bigint"
				? ((R = "" + R),
					E !== null && E.tag === 6
						? (l(A, E.sibling), (H = u(E, R)), (H.return = A), (A = H))
						: (l(A, E), (H = Ji(R, A.mode, H)), (H.return = A), (A = H)),
					c(A))
				: l(A, E);
		}
		return function (A, E, R, H) {
			try {
				uu = 0;
				var K = St(A, E, R, H);
				return ((sa = null), K);
			} catch (k) {
				if (k === $a || k === nn) throw k;
				var it = ce(29, k, null, A.mode);
				return ((it.lanes = H), (it.return = A), it);
			} finally {
			}
		};
	}
	var da = es(!0),
		ls = es(!1),
		Se = q(null),
		_e = null;
	function il(t) {
		var e = t.alternate;
		(G(Bt, Bt.current & 1),
			G(Se, t),
			_e === null &&
				(e === null || ca.current !== null || e.memoizedState !== null) &&
				(_e = t));
	}
	function as(t) {
		if (t.tag === 22) {
			if ((G(Bt, Bt.current), G(Se, t), _e === null)) {
				var e = t.alternate;
				e !== null && e.memoizedState !== null && (_e = t);
			}
		} else cl();
	}
	function cl() {
		(G(Bt, Bt.current), G(Se, Se.current));
	}
	function Xe(t) {
		(V(Se), _e === t && (_e = null), V(Bt));
	}
	var Bt = q(0);
	function Sn(t) {
		for (var e = t; e !== null; ) {
			if (e.tag === 13) {
				var l = e.memoizedState;
				if (
					l !== null &&
					((l = l.dehydrated), l === null || l.data === "$?" || gf(l))
				)
					return e;
			} else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
				if (e.flags & 128) return e;
			} else if (e.child !== null) {
				((e.child.return = e), (e = e.child));
				continue;
			}
			if (e === t) break;
			for (; e.sibling === null; ) {
				if (e.return === null || e.return === t) return null;
				e = e.return;
			}
			((e.sibling.return = e.return), (e = e.sibling));
		}
		return null;
	}
	function Mc(t, e, l, a) {
		((e = t.memoizedState),
			(l = l(a, e)),
			(l = l == null ? e : p({}, e, l)),
			(t.memoizedState = l),
			t.lanes === 0 && (t.updateQueue.baseState = l));
	}
	var _c = {
		enqueueSetState: function (t, e, l) {
			t = t._reactInternals;
			var a = se(),
				u = al(a);
			((u.payload = e),
				l != null && (u.callback = l),
				(e = ul(t, u, a)),
				e !== null && (de(e, t, a), Fa(e, t, a)));
		},
		enqueueReplaceState: function (t, e, l) {
			t = t._reactInternals;
			var a = se(),
				u = al(a);
			((u.tag = 1),
				(u.payload = e),
				l != null && (u.callback = l),
				(e = ul(t, u, a)),
				e !== null && (de(e, t, a), Fa(e, t, a)));
		},
		enqueueForceUpdate: function (t, e) {
			t = t._reactInternals;
			var l = se(),
				a = al(l);
			((a.tag = 2),
				e != null && (a.callback = e),
				(e = ul(t, a, l)),
				e !== null && (de(e, t, l), Fa(e, t, l)));
		},
	};
	function us(t, e, l, a, u, n, c) {
		return (
			(t = t.stateNode),
			typeof t.shouldComponentUpdate == "function"
				? t.shouldComponentUpdate(a, n, c)
				: e.prototype && e.prototype.isPureReactComponent
					? !Ga(l, a) || !Ga(u, n)
					: !0
		);
	}
	function ns(t, e, l, a) {
		((t = e.state),
			typeof e.componentWillReceiveProps == "function" &&
				e.componentWillReceiveProps(l, a),
			typeof e.UNSAFE_componentWillReceiveProps == "function" &&
				e.UNSAFE_componentWillReceiveProps(l, a),
			e.state !== t && _c.enqueueReplaceState(e, e.state, null));
	}
	function ql(t, e) {
		var l = e;
		if ("ref" in e) {
			l = {};
			for (var a in e) a !== "ref" && (l[a] = e[a]);
		}
		if ((t = t.defaultProps)) {
			l === e && (l = p({}, l));
			for (var u in t) l[u] === void 0 && (l[u] = t[u]);
		}
		return l;
	}
	var bn =
		typeof reportError == "function"
			? reportError
			: function (t) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var e = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof t == "object" &&
								t !== null &&
								typeof t.message == "string"
									? String(t.message)
									: String(t),
							error: t,
						});
						if (!window.dispatchEvent(e)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", t);
						return;
					}
					console.error(t);
				};
	function is(t) {
		bn(t);
	}
	function cs(t) {
		console.error(t);
	}
	function fs(t) {
		bn(t);
	}
	function xn(t, e) {
		try {
			var l = t.onUncaughtError;
			l(e.value, { componentStack: e.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function rs(t, e, l) {
		try {
			var a = t.onCaughtError;
			a(l.value, {
				componentStack: l.stack,
				errorBoundary: e.tag === 1 ? e.stateNode : null,
			});
		} catch (u) {
			setTimeout(function () {
				throw u;
			});
		}
	}
	function zc(t, e, l) {
		return (
			(l = al(l)),
			(l.tag = 3),
			(l.payload = { element: null }),
			(l.callback = function () {
				xn(t, e);
			}),
			l
		);
	}
	function os(t) {
		return ((t = al(t)), (t.tag = 3), t);
	}
	function ss(t, e, l, a) {
		var u = l.type.getDerivedStateFromError;
		if (typeof u == "function") {
			var n = a.value;
			((t.payload = function () {
				return u(n);
			}),
				(t.callback = function () {
					rs(e, l, a);
				}));
		}
		var c = l.stateNode;
		c !== null &&
			typeof c.componentDidCatch == "function" &&
			(t.callback = function () {
				(rs(e, l, a),
					typeof u != "function" &&
						(hl === null ? (hl = new Set([this])) : hl.add(this)));
				var r = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: r !== null ? r : "",
				});
			});
	}
	function om(t, e, l, a, u) {
		if (
			((l.flags |= 32768),
			a !== null && typeof a == "object" && typeof a.then == "function")
		) {
			if (
				((e = l.alternate),
				e !== null && Ka(e, l, u, !0),
				(l = Se.current),
				l !== null)
			) {
				switch (l.tag) {
					case 13:
						return (
							_e === null ? Ic() : l.alternate === null && Nt === 0 && (Nt = 3),
							(l.flags &= -257),
							(l.flags |= 65536),
							(l.lanes = u),
							a === uc
								? (l.flags |= 16384)
								: ((e = l.updateQueue),
									e === null ? (l.updateQueue = new Set([a])) : e.add(a),
									ef(t, a, u)),
							!1
						);
					case 22:
						return (
							(l.flags |= 65536),
							a === uc
								? (l.flags |= 16384)
								: ((e = l.updateQueue),
									e === null
										? ((e = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
											}),
											(l.updateQueue = e))
										: ((l = e.retryQueue),
											l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
									ef(t, a, u)),
							!1
						);
				}
				throw Error(f(435, l.tag));
			}
			return (ef(t, a, u), Ic(), !1);
		}
		if (mt)
			return (
				(e = Se.current),
				e !== null
					? (!(e.flags & 65536) && (e.flags |= 256),
						(e.flags |= 65536),
						(e.lanes = u),
						a !== Fi && ((t = Error(f(422), { cause: a })), Va(ye(t, l))))
					: (a !== Fi && ((e = Error(f(423), { cause: a })), Va(ye(e, l))),
						(t = t.current.alternate),
						(t.flags |= 65536),
						(u &= -u),
						(t.lanes |= u),
						(a = ye(a, l)),
						(u = zc(t.stateNode, a, u)),
						cc(t, u),
						Nt !== 4 && (Nt = 2)),
				!1
			);
		var n = Error(f(520), { cause: a });
		if (
			((n = ye(n, l)),
			du === null ? (du = [n]) : du.push(n),
			Nt !== 4 && (Nt = 2),
			e === null)
		)
			return !0;
		((a = ye(a, l)), (l = e));
		do {
			switch (l.tag) {
				case 3:
					return (
						(l.flags |= 65536),
						(t = u & -u),
						(l.lanes |= t),
						(t = zc(l.stateNode, a, t)),
						cc(l, t),
						!1
					);
				case 1:
					if (
						((e = l.type),
						(n = l.stateNode),
						(l.flags & 128) === 0 &&
							(typeof e.getDerivedStateFromError == "function" ||
								(n !== null &&
									typeof n.componentDidCatch == "function" &&
									(hl === null || !hl.has(n)))))
					)
						return (
							(l.flags |= 65536),
							(u &= -u),
							(l.lanes |= u),
							(u = os(u)),
							ss(u, t, l, a),
							cc(l, u),
							!1
						);
			}
			l = l.return;
		} while (l !== null);
		return !1;
	}
	var ds = Error(f(461)),
		Gt = !1;
	function Zt(t, e, l, a) {
		e.child = t === null ? ls(e, null, l, a) : da(e, t.child, l, a);
	}
	function hs(t, e, l, a, u) {
		l = l.render;
		var n = e.ref;
		if ("ref" in a) {
			var c = {};
			for (var r in a) r !== "ref" && (c[r] = a[r]);
		} else c = a;
		return (
			jl(e),
			(a = dc(t, e, l, c, n, u)),
			(r = hc()),
			t !== null && !Gt
				? (mc(t, e, u), Qe(t, e, u))
				: (mt && r && $i(e), (e.flags |= 1), Zt(t, e, a, u), e.child)
		);
	}
	function ms(t, e, l, a, u) {
		if (t === null) {
			var n = l.type;
			return typeof n == "function" &&
				!Ki(n) &&
				n.defaultProps === void 0 &&
				l.compare === null
				? ((e.tag = 15), (e.type = n), ys(t, e, n, a, u))
				: ((t = Iu(l.type, null, a, e, e.mode, u)),
					(t.ref = e.ref),
					(t.return = e),
					(e.child = t));
		}
		if (((n = t.child), !qc(t, u))) {
			var c = n.memoizedProps;
			if (
				((l = l.compare), (l = l !== null ? l : Ga), l(c, a) && t.ref === e.ref)
			)
				return Qe(t, e, u);
		}
		return (
			(e.flags |= 1),
			(t = we(n, a)),
			(t.ref = e.ref),
			(t.return = e),
			(e.child = t)
		);
	}
	function ys(t, e, l, a, u) {
		if (t !== null) {
			var n = t.memoizedProps;
			if (Ga(n, a) && t.ref === e.ref)
				if (((Gt = !1), (e.pendingProps = a = n), qc(t, u)))
					t.flags & 131072 && (Gt = !0);
				else return ((e.lanes = t.lanes), Qe(t, e, u));
		}
		return Dc(t, e, l, a, u);
	}
	function vs(t, e, l) {
		var a = e.pendingProps,
			u = a.children,
			n = t !== null ? t.memoizedState : null;
		if (a.mode === "hidden") {
			if (e.flags & 128) {
				if (((a = n !== null ? n.baseLanes | l : l), t !== null)) {
					for (u = e.child = t.child, n = 0; u !== null; )
						((n = n | u.lanes | u.childLanes), (u = u.sibling));
					e.childLanes = n & ~a;
				} else ((e.childLanes = 0), (e.child = null));
				return gs(t, e, a, l);
			}
			if (l & 536870912)
				((e.memoizedState = { baseLanes: 0, cachePool: null }),
					t !== null && un(e, n !== null ? n.cachePool : null),
					n !== null ? yo(e, n) : rc(),
					as(e));
			else
				return (
					(e.lanes = e.childLanes = 536870912),
					gs(t, e, n !== null ? n.baseLanes | l : l, l)
				);
		} else
			n !== null
				? (un(e, n.cachePool), yo(e, n), cl(), (e.memoizedState = null))
				: (t !== null && un(e, null), rc(), cl());
		return (Zt(t, e, u, l), e.child);
	}
	function gs(t, e, l, a) {
		var u = ac();
		return (
			(u = u === null ? null : { parent: qt._currentValue, pool: u }),
			(e.memoizedState = { baseLanes: l, cachePool: u }),
			t !== null && un(e, null),
			rc(),
			as(e),
			t !== null && Ka(t, e, a, !0),
			null
		);
	}
	function En(t, e) {
		var l = e.ref;
		if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
		else {
			if (typeof l != "function" && typeof l != "object") throw Error(f(284));
			(t === null || t.ref !== l) && (e.flags |= 4194816);
		}
	}
	function Dc(t, e, l, a, u) {
		return (
			jl(e),
			(l = dc(t, e, l, a, void 0, u)),
			(a = hc()),
			t !== null && !Gt
				? (mc(t, e, u), Qe(t, e, u))
				: (mt && a && $i(e), (e.flags |= 1), Zt(t, e, l, u), e.child)
		);
	}
	function ps(t, e, l, a, u, n) {
		return (
			jl(e),
			(e.updateQueue = null),
			(l = go(e, a, l, u)),
			vo(t),
			(a = hc()),
			t !== null && !Gt
				? (mc(t, e, n), Qe(t, e, n))
				: (mt && a && $i(e), (e.flags |= 1), Zt(t, e, l, n), e.child)
		);
	}
	function Ss(t, e, l, a, u) {
		if ((jl(e), e.stateNode === null)) {
			var n = la,
				c = l.contextType;
			(typeof c == "object" && c !== null && (n = $t(c)),
				(n = new l(a, n)),
				(e.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = _c),
				(e.stateNode = n),
				(n._reactInternals = e),
				(n = e.stateNode),
				(n.props = a),
				(n.state = e.memoizedState),
				(n.refs = {}),
				nc(e),
				(c = l.contextType),
				(n.context = typeof c == "object" && c !== null ? $t(c) : la),
				(n.state = e.memoizedState),
				(c = l.getDerivedStateFromProps),
				typeof c == "function" && (Mc(e, l, c, a), (n.state = e.memoizedState)),
				typeof l.getDerivedStateFromProps == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function" ||
					(typeof n.UNSAFE_componentWillMount != "function" &&
						typeof n.componentWillMount != "function") ||
					((c = n.state),
					typeof n.componentWillMount == "function" && n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == "function" &&
						n.UNSAFE_componentWillMount(),
					c !== n.state && _c.enqueueReplaceState(n, n.state, null),
					Ia(e, a, n, u),
					Pa(),
					(n.state = e.memoizedState)),
				typeof n.componentDidMount == "function" && (e.flags |= 4194308),
				(a = !0));
		} else if (t === null) {
			n = e.stateNode;
			var r = e.memoizedProps,
				v = ql(l, r);
			n.props = v;
			var O = n.context,
				j = l.contextType;
			((c = la), typeof j == "object" && j !== null && (c = $t(j)));
			var w = l.getDerivedStateFromProps;
			((j =
				typeof w == "function" ||
				typeof n.getSnapshotBeforeUpdate == "function"),
				(r = e.pendingProps !== r),
				j ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((r || O !== c) && ns(e, n, a, c)),
				(ll = !1));
			var M = e.memoizedState;
			((n.state = M),
				Ia(e, a, n, u),
				Pa(),
				(O = e.memoizedState),
				r || M !== O || ll
					? (typeof w == "function" && (Mc(e, l, w, a), (O = e.memoizedState)),
						(v = ll || us(e, l, v, a, M, O, c))
							? (j ||
									(typeof n.UNSAFE_componentWillMount != "function" &&
										typeof n.componentWillMount != "function") ||
									(typeof n.componentWillMount == "function" &&
										n.componentWillMount(),
									typeof n.UNSAFE_componentWillMount == "function" &&
										n.UNSAFE_componentWillMount()),
								typeof n.componentDidMount == "function" &&
									(e.flags |= 4194308))
							: (typeof n.componentDidMount == "function" &&
									(e.flags |= 4194308),
								(e.memoizedProps = a),
								(e.memoizedState = O)),
						(n.props = a),
						(n.state = O),
						(n.context = c),
						(a = v))
					: (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
						(a = !1)));
		} else {
			((n = e.stateNode),
				ic(t, e),
				(c = e.memoizedProps),
				(j = ql(l, c)),
				(n.props = j),
				(w = e.pendingProps),
				(M = n.context),
				(O = l.contextType),
				(v = la),
				typeof O == "object" && O !== null && (v = $t(O)),
				(r = l.getDerivedStateFromProps),
				(O =
					typeof r == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function") ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((c !== w || M !== v) && ns(e, n, a, v)),
				(ll = !1),
				(M = e.memoizedState),
				(n.state = M),
				Ia(e, a, n, u),
				Pa());
			var _ = e.memoizedState;
			c !== w ||
			M !== _ ||
			ll ||
			(t !== null && t.dependencies !== null && ln(t.dependencies))
				? (typeof r == "function" && (Mc(e, l, r, a), (_ = e.memoizedState)),
					(j =
						ll ||
						us(e, l, j, a, M, _, v) ||
						(t !== null && t.dependencies !== null && ln(t.dependencies)))
						? (O ||
								(typeof n.UNSAFE_componentWillUpdate != "function" &&
									typeof n.componentWillUpdate != "function") ||
								(typeof n.componentWillUpdate == "function" &&
									n.componentWillUpdate(a, _, v),
								typeof n.UNSAFE_componentWillUpdate == "function" &&
									n.UNSAFE_componentWillUpdate(a, _, v)),
							typeof n.componentDidUpdate == "function" && (e.flags |= 4),
							typeof n.getSnapshotBeforeUpdate == "function" &&
								(e.flags |= 1024))
						: (typeof n.componentDidUpdate != "function" ||
								(c === t.memoizedProps && M === t.memoizedState) ||
								(e.flags |= 4),
							typeof n.getSnapshotBeforeUpdate != "function" ||
								(c === t.memoizedProps && M === t.memoizedState) ||
								(e.flags |= 1024),
							(e.memoizedProps = a),
							(e.memoizedState = _)),
					(n.props = a),
					(n.state = _),
					(n.context = v),
					(a = j))
				: (typeof n.componentDidUpdate != "function" ||
						(c === t.memoizedProps && M === t.memoizedState) ||
						(e.flags |= 4),
					typeof n.getSnapshotBeforeUpdate != "function" ||
						(c === t.memoizedProps && M === t.memoizedState) ||
						(e.flags |= 1024),
					(a = !1));
		}
		return (
			(n = a),
			En(t, e),
			(a = (e.flags & 128) !== 0),
			n || a
				? ((n = e.stateNode),
					(l =
						a && typeof l.getDerivedStateFromError != "function"
							? null
							: n.render()),
					(e.flags |= 1),
					t !== null && a
						? ((e.child = da(e, t.child, null, u)),
							(e.child = da(e, null, l, u)))
						: Zt(t, e, l, u),
					(e.memoizedState = n.state),
					(t = e.child))
				: (t = Qe(t, e, u)),
			t
		);
	}
	function bs(t, e, l, a) {
		return (Za(), (e.flags |= 256), Zt(t, e, l, a), e.child);
	}
	var Nc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function Uc(t) {
		return { baseLanes: t, cachePool: io() };
	}
	function Cc(t, e, l) {
		return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= be), t);
	}
	function xs(t, e, l) {
		var a = e.pendingProps,
			u = !1,
			n = (e.flags & 128) !== 0,
			c;
		if (
			((c = n) ||
				(c =
					t !== null && t.memoizedState === null ? !1 : (Bt.current & 2) !== 0),
			c && ((u = !0), (e.flags &= -129)),
			(c = (e.flags & 32) !== 0),
			(e.flags &= -33),
			t === null)
		) {
			if (mt) {
				if ((u ? il(e) : cl(), mt)) {
					var r = Dt,
						v;
					if ((v = r)) {
						t: {
							for (v = r, r = Me; v.nodeType !== 8; ) {
								if (!r) {
									r = null;
									break t;
								}
								if (((v = Ae(v.nextSibling)), v === null)) {
									r = null;
									break t;
								}
							}
							r = v;
						}
						r !== null
							? ((e.memoizedState = {
									dehydrated: r,
									treeContext: zl !== null ? { id: qe, overflow: Be } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(v = ce(18, null, null, 0)),
								(v.stateNode = r),
								(v.return = e),
								(e.child = v),
								(Ft = e),
								(Dt = null),
								(v = !0))
							: (v = !1);
					}
					v || Ul(e);
				}
				if (
					((r = e.memoizedState),
					r !== null && ((r = r.dehydrated), r !== null))
				)
					return (gf(r) ? (e.lanes = 32) : (e.lanes = 536870912), null);
				Xe(e);
			}
			return (
				(r = a.children),
				(a = a.fallback),
				u
					? (cl(),
						(u = e.mode),
						(r = Tn({ mode: "hidden", children: r }, u)),
						(a = _l(a, u, l, null)),
						(r.return = e),
						(a.return = e),
						(r.sibling = a),
						(e.child = r),
						(u = e.child),
						(u.memoizedState = Uc(l)),
						(u.childLanes = Cc(t, c, l)),
						(e.memoizedState = Nc),
						a)
					: (il(e), jc(e, r))
			);
		}
		if (
			((v = t.memoizedState), v !== null && ((r = v.dehydrated), r !== null))
		) {
			if (n)
				e.flags & 256
					? (il(e), (e.flags &= -257), (e = Hc(t, e, l)))
					: e.memoizedState !== null
						? (cl(), (e.child = t.child), (e.flags |= 128), (e = null))
						: (cl(),
							(u = a.fallback),
							(r = e.mode),
							(a = Tn({ mode: "visible", children: a.children }, r)),
							(u = _l(u, r, l, null)),
							(u.flags |= 2),
							(a.return = e),
							(u.return = e),
							(a.sibling = u),
							(e.child = a),
							da(e, t.child, null, l),
							(a = e.child),
							(a.memoizedState = Uc(l)),
							(a.childLanes = Cc(t, c, l)),
							(e.memoizedState = Nc),
							(e = u));
			else if ((il(e), gf(r))) {
				if (((c = r.nextSibling && r.nextSibling.dataset), c)) var O = c.dgst;
				((c = O),
					(a = Error(f(419))),
					(a.stack = ""),
					(a.digest = c),
					Va({ value: a, source: null, stack: null }),
					(e = Hc(t, e, l)));
			} else if (
				(Gt || Ka(t, e, l, !1), (c = (l & t.childLanes) !== 0), Gt || c)
			) {
				if (
					((c = At),
					c !== null &&
						((a = l & -l),
						(a = a & 42 ? 1 : gi(a)),
						(a = a & (c.suspendedLanes | l) ? 0 : a),
						a !== 0 && a !== v.retryLane))
				)
					throw ((v.retryLane = a), ea(t, a), de(c, t, a), ds);
				(r.data === "$?" || Ic(), (e = Hc(t, e, l)));
			} else
				r.data === "$?"
					? ((e.flags |= 192), (e.child = t.child), (e = null))
					: ((t = v.treeContext),
						(Dt = Ae(r.nextSibling)),
						(Ft = e),
						(mt = !0),
						(Nl = null),
						(Me = !1),
						t !== null &&
							((ge[pe++] = qe),
							(ge[pe++] = Be),
							(ge[pe++] = zl),
							(qe = t.id),
							(Be = t.overflow),
							(zl = e)),
						(e = jc(e, a.children)),
						(e.flags |= 4096));
			return e;
		}
		return u
			? (cl(),
				(u = a.fallback),
				(r = e.mode),
				(v = t.child),
				(O = v.sibling),
				(a = we(v, { mode: "hidden", children: a.children })),
				(a.subtreeFlags = v.subtreeFlags & 65011712),
				O !== null ? (u = we(O, u)) : ((u = _l(u, r, l, null)), (u.flags |= 2)),
				(u.return = e),
				(a.return = e),
				(a.sibling = u),
				(e.child = a),
				(a = u),
				(u = e.child),
				(r = t.child.memoizedState),
				r === null
					? (r = Uc(l))
					: ((v = r.cachePool),
						v !== null
							? ((O = qt._currentValue),
								(v = v.parent !== O ? { parent: O, pool: O } : v))
							: (v = io()),
						(r = { baseLanes: r.baseLanes | l, cachePool: v })),
				(u.memoizedState = r),
				(u.childLanes = Cc(t, c, l)),
				(e.memoizedState = Nc),
				a)
			: (il(e),
				(l = t.child),
				(t = l.sibling),
				(l = we(l, { mode: "visible", children: a.children })),
				(l.return = e),
				(l.sibling = null),
				t !== null &&
					((c = e.deletions),
					c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
				(e.child = l),
				(e.memoizedState = null),
				l);
	}
	function jc(t, e) {
		return (
			(e = Tn({ mode: "visible", children: e }, t.mode)),
			(e.return = t),
			(t.child = e)
		);
	}
	function Tn(t, e) {
		return (
			(t = ce(22, t, null, e)),
			(t.lanes = 0),
			(t.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			t
		);
	}
	function Hc(t, e, l) {
		return (
			da(e, t.child, null, l),
			(t = jc(e, e.pendingProps.children)),
			(t.flags |= 2),
			(e.memoizedState = null),
			t
		);
	}
	function Es(t, e, l) {
		t.lanes |= e;
		var a = t.alternate;
		(a !== null && (a.lanes |= e), Ii(t.return, e, l));
	}
	function wc(t, e, l, a, u) {
		var n = t.memoizedState;
		n === null
			? (t.memoizedState = {
					isBackwards: e,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: l,
					tailMode: u,
				})
			: ((n.isBackwards = e),
				(n.rendering = null),
				(n.renderingStartTime = 0),
				(n.last = a),
				(n.tail = l),
				(n.tailMode = u));
	}
	function Ts(t, e, l) {
		var a = e.pendingProps,
			u = a.revealOrder,
			n = a.tail;
		if ((Zt(t, e, a.children, l), (a = Bt.current), a & 2))
			((a = (a & 1) | 2), (e.flags |= 128));
		else {
			if (t !== null && t.flags & 128)
				t: for (t = e.child; t !== null; ) {
					if (t.tag === 13) t.memoizedState !== null && Es(t, l, e);
					else if (t.tag === 19) Es(t, l, e);
					else if (t.child !== null) {
						((t.child.return = t), (t = t.child));
						continue;
					}
					if (t === e) break t;
					for (; t.sibling === null; ) {
						if (t.return === null || t.return === e) break t;
						t = t.return;
					}
					((t.sibling.return = t.return), (t = t.sibling));
				}
			a &= 1;
		}
		switch ((G(Bt, a), u)) {
			case "forwards":
				for (l = e.child, u = null; l !== null; )
					((t = l.alternate),
						t !== null && Sn(t) === null && (u = l),
						(l = l.sibling));
				((l = u),
					l === null
						? ((u = e.child), (e.child = null))
						: ((u = l.sibling), (l.sibling = null)),
					wc(e, !1, u, l, n));
				break;
			case "backwards":
				for (l = null, u = e.child, e.child = null; u !== null; ) {
					if (((t = u.alternate), t !== null && Sn(t) === null)) {
						e.child = u;
						break;
					}
					((t = u.sibling), (u.sibling = l), (l = u), (u = t));
				}
				wc(e, !0, l, null, n);
				break;
			case "together":
				wc(e, !1, null, null, void 0);
				break;
			default:
				e.memoizedState = null;
		}
		return e.child;
	}
	function Qe(t, e, l) {
		if (
			(t !== null && (e.dependencies = t.dependencies),
			(dl |= e.lanes),
			!(l & e.childLanes))
		)
			if (t !== null) {
				if ((Ka(t, e, l, !1), (l & e.childLanes) === 0)) return null;
			} else return null;
		if (t !== null && e.child !== t.child) throw Error(f(153));
		if (e.child !== null) {
			for (
				t = e.child, l = we(t, t.pendingProps), e.child = l, l.return = e;
				t.sibling !== null;

			)
				((t = t.sibling),
					(l = l.sibling = we(t, t.pendingProps)),
					(l.return = e));
			l.sibling = null;
		}
		return e.child;
	}
	function qc(t, e) {
		return t.lanes & e ? !0 : ((t = t.dependencies), !!(t !== null && ln(t)));
	}
	function sm(t, e, l) {
		switch (e.tag) {
			case 3:
				(Ot(e, e.stateNode.containerInfo),
					el(e, qt, t.memoizedState.cache),
					Za());
				break;
			case 27:
			case 5:
				di(e);
				break;
			case 4:
				Ot(e, e.stateNode.containerInfo);
				break;
			case 10:
				el(e, e.type, e.memoizedProps.value);
				break;
			case 13:
				var a = e.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (il(e), (e.flags |= 128), null)
						: l & e.child.childLanes
							? xs(t, e, l)
							: (il(e), (t = Qe(t, e, l)), t !== null ? t.sibling : null);
				il(e);
				break;
			case 19:
				var u = (t.flags & 128) !== 0;
				if (
					((a = (l & e.childLanes) !== 0),
					a || (Ka(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
					u)
				) {
					if (a) return Ts(t, e, l);
					e.flags |= 128;
				}
				if (
					((u = e.memoizedState),
					u !== null &&
						((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
					G(Bt, Bt.current),
					a)
				)
					break;
				return null;
			case 22:
			case 23:
				return ((e.lanes = 0), vs(t, e, l));
			case 24:
				el(e, qt, t.memoizedState.cache);
		}
		return Qe(t, e, l);
	}
	function As(t, e, l) {
		if (t !== null)
			if (t.memoizedProps !== e.pendingProps) Gt = !0;
			else {
				if (!qc(t, l) && !(e.flags & 128)) return ((Gt = !1), sm(t, e, l));
				Gt = !!(t.flags & 131072);
			}
		else ((Gt = !1), mt && e.flags & 1048576 && Ir(e, en, e.index));
		switch (((e.lanes = 0), e.tag)) {
			case 16:
				t: {
					t = e.pendingProps;
					var a = e.elementType,
						u = a._init;
					if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
						Ki(a)
							? ((t = ql(a, t)), (e.tag = 1), (e = Ss(null, e, a, t, l)))
							: ((e.tag = 0), (e = Dc(null, e, a, t, l)));
					else {
						if (a != null) {
							if (((u = a.$$typeof), u === J)) {
								((e.tag = 11), (e = hs(null, e, a, t, l)));
								break t;
							} else if (u === lt) {
								((e.tag = 14), (e = ms(null, e, a, t, l)));
								break t;
							}
						}
						throw ((e = Jt(a) || a), Error(f(306, e, "")));
					}
				}
				return e;
			case 0:
				return Dc(t, e, e.type, e.pendingProps, l);
			case 1:
				return ((a = e.type), (u = ql(a, e.pendingProps)), Ss(t, e, a, u, l));
			case 3:
				t: {
					if ((Ot(e, e.stateNode.containerInfo), t === null))
						throw Error(f(387));
					a = e.pendingProps;
					var n = e.memoizedState;
					((u = n.element), ic(t, e), Ia(e, a, null, l));
					var c = e.memoizedState;
					if (
						((a = c.cache),
						el(e, qt, a),
						a !== n.cache && tc(e, [qt], l, !0),
						Pa(),
						(a = c.element),
						n.isDehydrated)
					)
						if (
							((n = { element: a, isDehydrated: !1, cache: c.cache }),
							(e.updateQueue.baseState = n),
							(e.memoizedState = n),
							e.flags & 256)
						) {
							e = bs(t, e, a, l);
							break t;
						} else if (a !== u) {
							((u = ye(Error(f(424)), e)), Va(u), (e = bs(t, e, a, l)));
							break t;
						} else {
							switch (((t = e.stateNode.containerInfo), t.nodeType)) {
								case 9:
									t = t.body;
									break;
								default:
									t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
							}
							for (
								Dt = Ae(t.firstChild),
									Ft = e,
									mt = !0,
									Nl = null,
									Me = !0,
									l = ls(e, null, a, l),
									e.child = l;
								l;

							)
								((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
						}
					else {
						if ((Za(), a === u)) {
							e = Qe(t, e, l);
							break t;
						}
						Zt(t, e, a, l);
					}
					e = e.child;
				}
				return e;
			case 26:
				return (
					En(t, e),
					t === null
						? (l = _d(e.type, null, e.pendingProps, null))
							? (e.memoizedState = l)
							: mt ||
								((l = e.type),
								(t = e.pendingProps),
								(a = qn(et.current).createElement(l)),
								(a[kt] = e),
								(a[Pt] = t),
								Kt(a, l, t),
								Lt(a),
								(e.stateNode = a))
						: (e.memoizedState = _d(
								e.type,
								t.memoizedProps,
								e.pendingProps,
								t.memoizedState,
							)),
					null
				);
			case 27:
				return (
					di(e),
					t === null &&
						mt &&
						((a = e.stateNode = Rd(e.type, e.pendingProps, et.current)),
						(Ft = e),
						(Me = !0),
						(u = Dt),
						vl(e.type) ? ((pf = u), (Dt = Ae(a.firstChild))) : (Dt = u)),
					Zt(t, e, e.pendingProps.children, l),
					En(t, e),
					t === null && (e.flags |= 4194304),
					e.child
				);
			case 5:
				return (
					t === null &&
						mt &&
						((u = a = Dt) &&
							((a = Ym(a, e.type, e.pendingProps, Me)),
							a !== null
								? ((e.stateNode = a),
									(Ft = e),
									(Dt = Ae(a.firstChild)),
									(Me = !1),
									(u = !0))
								: (u = !1)),
						u || Ul(e)),
					di(e),
					(u = e.type),
					(n = e.pendingProps),
					(c = t !== null ? t.memoizedProps : null),
					(a = n.children),
					mf(u, n) ? (a = null) : c !== null && mf(u, c) && (e.flags |= 32),
					e.memoizedState !== null &&
						((u = dc(t, e, am, null, null, l)), (xu._currentValue = u)),
					En(t, e),
					Zt(t, e, a, l),
					e.child
				);
			case 6:
				return (
					t === null &&
						mt &&
						((t = l = Dt) &&
							((l = Lm(l, e.pendingProps, Me)),
							l !== null
								? ((e.stateNode = l), (Ft = e), (Dt = null), (t = !0))
								: (t = !1)),
						t || Ul(e)),
					null
				);
			case 13:
				return xs(t, e, l);
			case 4:
				return (
					Ot(e, e.stateNode.containerInfo),
					(a = e.pendingProps),
					t === null ? (e.child = da(e, null, a, l)) : Zt(t, e, a, l),
					e.child
				);
			case 11:
				return hs(t, e, e.type, e.pendingProps, l);
			case 7:
				return (Zt(t, e, e.pendingProps, l), e.child);
			case 8:
				return (Zt(t, e, e.pendingProps.children, l), e.child);
			case 12:
				return (Zt(t, e, e.pendingProps.children, l), e.child);
			case 10:
				return (
					(a = e.pendingProps),
					el(e, e.type, a.value),
					Zt(t, e, a.children, l),
					e.child
				);
			case 9:
				return (
					(u = e.type._context),
					(a = e.pendingProps.children),
					jl(e),
					(u = $t(u)),
					(a = a(u)),
					(e.flags |= 1),
					Zt(t, e, a, l),
					e.child
				);
			case 14:
				return ms(t, e, e.type, e.pendingProps, l);
			case 15:
				return ys(t, e, e.type, e.pendingProps, l);
			case 19:
				return Ts(t, e, l);
			case 31:
				return (
					(a = e.pendingProps),
					(l = e.mode),
					(a = { mode: a.mode, children: a.children }),
					t === null
						? ((l = Tn(a, l)),
							(l.ref = e.ref),
							(e.child = l),
							(l.return = e),
							(e = l))
						: ((l = we(t.child, a)),
							(l.ref = e.ref),
							(e.child = l),
							(l.return = e),
							(e = l)),
					e
				);
			case 22:
				return vs(t, e, l);
			case 24:
				return (
					jl(e),
					(a = $t(qt)),
					t === null
						? ((u = ac()),
							u === null &&
								((u = At),
								(n = ec()),
								(u.pooledCache = n),
								n.refCount++,
								n !== null && (u.pooledCacheLanes |= l),
								(u = n)),
							(e.memoizedState = { parent: a, cache: u }),
							nc(e),
							el(e, qt, u))
						: (t.lanes & l && (ic(t, e), Ia(e, null, null, l), Pa()),
							(u = t.memoizedState),
							(n = e.memoizedState),
							u.parent !== a
								? ((u = { parent: a, cache: a }),
									(e.memoizedState = u),
									e.lanes === 0 &&
										(e.memoizedState = e.updateQueue.baseState = u),
									el(e, qt, a))
								: ((a = n.cache),
									el(e, qt, a),
									a !== u.cache && tc(e, [qt], l, !0))),
					Zt(t, e, e.pendingProps.children, l),
					e.child
				);
			case 29:
				throw e.pendingProps;
		}
		throw Error(f(156, e.tag));
	}
	function Ze(t) {
		t.flags |= 4;
	}
	function Rs(t, e) {
		if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
		else if (((t.flags |= 16777216), !Cd(e))) {
			if (
				((e = Se.current),
				e !== null &&
					((st & 4194048) === st
						? _e !== null
						: ((st & 62914560) !== st && !(st & 536870912)) || e !== _e))
			)
				throw ((Wa = uc), co);
			t.flags |= 8192;
		}
	}
	function An(t, e) {
		(e !== null && (t.flags |= 4),
			t.flags & 16384 &&
				((e = t.tag !== 22 ? lr() : 536870912), (t.lanes |= e), (va |= e)));
	}
	function iu(t, e) {
		if (!mt)
			switch (t.tailMode) {
				case "hidden":
					e = t.tail;
					for (var l = null; e !== null; )
						(e.alternate !== null && (l = e), (e = e.sibling));
					l === null ? (t.tail = null) : (l.sibling = null);
					break;
				case "collapsed":
					l = t.tail;
					for (var a = null; l !== null; )
						(l.alternate !== null && (a = l), (l = l.sibling));
					a === null
						? e || t.tail === null
							? (t.tail = null)
							: (t.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function _t(t) {
		var e = t.alternate !== null && t.alternate.child === t.child,
			l = 0,
			a = 0;
		if (e)
			for (var u = t.child; u !== null; )
				((l |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags & 65011712),
					(a |= u.flags & 65011712),
					(u.return = t),
					(u = u.sibling));
		else
			for (u = t.child; u !== null; )
				((l |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags),
					(a |= u.flags),
					(u.return = t),
					(u = u.sibling));
		return ((t.subtreeFlags |= a), (t.childLanes = l), e);
	}
	function dm(t, e, l) {
		var a = e.pendingProps;
		switch ((Wi(e), e.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return (_t(e), null);
			case 1:
				return (_t(e), null);
			case 3:
				return (
					(l = e.stateNode),
					(a = null),
					t !== null && (a = t.memoizedState.cache),
					e.memoizedState.cache !== a && (e.flags |= 2048),
					Le(qt),
					Fe(),
					l.pendingContext &&
						((l.context = l.pendingContext), (l.pendingContext = null)),
					(t === null || t.child === null) &&
						(Qa(e)
							? Ze(e)
							: t === null ||
								(t.memoizedState.isDehydrated && !(e.flags & 256)) ||
								((e.flags |= 1024), lo())),
					_t(e),
					null
				);
			case 26:
				return (
					(l = e.memoizedState),
					t === null
						? (Ze(e),
							l !== null ? (_t(e), Rs(e, l)) : (_t(e), (e.flags &= -16777217)))
						: l
							? l !== t.memoizedState
								? (Ze(e), _t(e), Rs(e, l))
								: (_t(e), (e.flags &= -16777217))
							: (t.memoizedProps !== a && Ze(e), _t(e), (e.flags &= -16777217)),
					null
				);
			case 27:
				(ju(e), (l = et.current));
				var u = e.type;
				if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ze(e);
				else {
					if (!a) {
						if (e.stateNode === null) throw Error(f(166));
						return (_t(e), null);
					}
					((t = W.current),
						Qa(e) ? to(e) : ((t = Rd(u, a, l)), (e.stateNode = t), Ze(e)));
				}
				return (_t(e), null);
			case 5:
				if ((ju(e), (l = e.type), t !== null && e.stateNode != null))
					t.memoizedProps !== a && Ze(e);
				else {
					if (!a) {
						if (e.stateNode === null) throw Error(f(166));
						return (_t(e), null);
					}
					if (((t = W.current), Qa(e))) to(e);
					else {
						switch (((u = qn(et.current)), t)) {
							case 1:
								t = u.createElementNS("http://www.w3.org/2000/svg", l);
								break;
							case 2:
								t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
								break;
							default:
								switch (l) {
									case "svg":
										t = u.createElementNS("http://www.w3.org/2000/svg", l);
										break;
									case "math":
										t = u.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											l,
										);
										break;
									case "script":
										((t = u.createElement("div")),
											(t.innerHTML = "<script><\/script>"),
											(t = t.removeChild(t.firstChild)));
										break;
									case "select":
										((t =
											typeof a.is == "string"
												? u.createElement("select", { is: a.is })
												: u.createElement("select")),
											a.multiple
												? (t.multiple = !0)
												: a.size && (t.size = a.size));
										break;
									default:
										t =
											typeof a.is == "string"
												? u.createElement(l, { is: a.is })
												: u.createElement(l);
								}
						}
						((t[kt] = e), (t[Pt] = a));
						t: for (u = e.child; u !== null; ) {
							if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
							else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
								((u.child.return = u), (u = u.child));
								continue;
							}
							if (u === e) break t;
							for (; u.sibling === null; ) {
								if (u.return === null || u.return === e) break t;
								u = u.return;
							}
							((u.sibling.return = u.return), (u = u.sibling));
						}
						e.stateNode = t;
						t: switch ((Kt(t, l, a), l)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								t = !!a.autoFocus;
								break t;
							case "img":
								t = !0;
								break t;
							default:
								t = !1;
						}
						t && Ze(e);
					}
				}
				return (_t(e), (e.flags &= -16777217), null);
			case 6:
				if (t && e.stateNode != null) t.memoizedProps !== a && Ze(e);
				else {
					if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
					if (((t = et.current), Qa(e))) {
						if (
							((t = e.stateNode),
							(l = e.memoizedProps),
							(a = null),
							(u = Ft),
							u !== null)
						)
							switch (u.tag) {
								case 27:
								case 5:
									a = u.memoizedProps;
							}
						((t[kt] = e),
							(t = !!(
								t.nodeValue === l ||
								(a !== null && a.suppressHydrationWarning === !0) ||
								pd(t.nodeValue, l)
							)),
							t || Ul(e));
					} else
						((t = qn(t).createTextNode(a)), (t[kt] = e), (e.stateNode = t));
				}
				return (_t(e), null);
			case 13:
				if (
					((a = e.memoizedState),
					t === null ||
						(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
				) {
					if (((u = Qa(e)), a !== null && a.dehydrated !== null)) {
						if (t === null) {
							if (!u) throw Error(f(318));
							if (
								((u = e.memoizedState),
								(u = u !== null ? u.dehydrated : null),
								!u)
							)
								throw Error(f(317));
							u[kt] = e;
						} else
							(Za(),
								!(e.flags & 128) && (e.memoizedState = null),
								(e.flags |= 4));
						(_t(e), (u = !1));
					} else
						((u = lo()),
							t !== null &&
								t.memoizedState !== null &&
								(t.memoizedState.hydrationErrors = u),
							(u = !0));
					if (!u) return e.flags & 256 ? (Xe(e), e) : (Xe(e), null);
				}
				if ((Xe(e), e.flags & 128)) return ((e.lanes = l), e);
				if (
					((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
				) {
					((a = e.child),
						(u = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(u = a.alternate.memoizedState.cachePool.pool));
					var n = null;
					(a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(n = a.memoizedState.cachePool.pool),
						n !== u && (a.flags |= 2048));
				}
				return (
					l !== t && l && (e.child.flags |= 8192),
					An(e, e.updateQueue),
					_t(e),
					null
				);
			case 4:
				return (Fe(), t === null && rf(e.stateNode.containerInfo), _t(e), null);
			case 10:
				return (Le(e.type), _t(e), null);
			case 19:
				if ((V(Bt), (u = e.memoizedState), u === null)) return (_t(e), null);
				if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
					if (a) iu(u, !1);
					else {
						if (Nt !== 0 || (t !== null && t.flags & 128))
							for (t = e.child; t !== null; ) {
								if (((n = Sn(t)), n !== null)) {
									for (
										e.flags |= 128,
											iu(u, !1),
											t = n.updateQueue,
											e.updateQueue = t,
											An(e, t),
											e.subtreeFlags = 0,
											t = l,
											l = e.child;
										l !== null;

									)
										(Pr(l, t), (l = l.sibling));
									return (G(Bt, (Bt.current & 1) | 2), e.child);
								}
								t = t.sibling;
							}
						u.tail !== null &&
							Oe() > Mn &&
							((e.flags |= 128), (a = !0), iu(u, !1), (e.lanes = 4194304));
					}
				else {
					if (!a)
						if (((t = Sn(n)), t !== null)) {
							if (
								((e.flags |= 128),
								(a = !0),
								(t = t.updateQueue),
								(e.updateQueue = t),
								An(e, t),
								iu(u, !0),
								u.tail === null &&
									u.tailMode === "hidden" &&
									!n.alternate &&
									!mt)
							)
								return (_t(e), null);
						} else
							2 * Oe() - u.renderingStartTime > Mn &&
								l !== 536870912 &&
								((e.flags |= 128), (a = !0), iu(u, !1), (e.lanes = 4194304));
					u.isBackwards
						? ((n.sibling = e.child), (e.child = n))
						: ((t = u.last),
							t !== null ? (t.sibling = n) : (e.child = n),
							(u.last = n));
				}
				return u.tail !== null
					? ((e = u.tail),
						(u.rendering = e),
						(u.tail = e.sibling),
						(u.renderingStartTime = Oe()),
						(e.sibling = null),
						(t = Bt.current),
						G(Bt, a ? (t & 1) | 2 : t & 1),
						e)
					: (_t(e), null);
			case 22:
			case 23:
				return (
					Xe(e),
					oc(),
					(a = e.memoizedState !== null),
					t !== null
						? (t.memoizedState !== null) !== a && (e.flags |= 8192)
						: a && (e.flags |= 8192),
					a
						? l & 536870912 &&
							!(e.flags & 128) &&
							(_t(e), e.subtreeFlags & 6 && (e.flags |= 8192))
						: _t(e),
					(l = e.updateQueue),
					l !== null && An(e, l.retryQueue),
					(l = null),
					t !== null &&
						t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(l = t.memoizedState.cachePool.pool),
					(a = null),
					e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(a = e.memoizedState.cachePool.pool),
					a !== l && (e.flags |= 2048),
					t !== null && V(Hl),
					null
				);
			case 24:
				return (
					(l = null),
					t !== null && (l = t.memoizedState.cache),
					e.memoizedState.cache !== l && (e.flags |= 2048),
					Le(qt),
					_t(e),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(f(156, e.tag));
	}
	function hm(t, e) {
		switch ((Wi(e), e.tag)) {
			case 1:
				return (
					(t = e.flags),
					t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 3:
				return (
					Le(qt),
					Fe(),
					(t = e.flags),
					t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 26:
			case 27:
			case 5:
				return (ju(e), null);
			case 13:
				if (
					(Xe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
				) {
					if (e.alternate === null) throw Error(f(340));
					Za();
				}
				return (
					(t = e.flags),
					t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 19:
				return (V(Bt), null);
			case 4:
				return (Fe(), null);
			case 10:
				return (Le(e.type), null);
			case 22:
			case 23:
				return (
					Xe(e),
					oc(),
					t !== null && V(Hl),
					(t = e.flags),
					t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 24:
				return (Le(qt), null);
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Os(t, e) {
		switch ((Wi(e), e.tag)) {
			case 3:
				(Le(qt), Fe());
				break;
			case 26:
			case 27:
			case 5:
				ju(e);
				break;
			case 4:
				Fe();
				break;
			case 13:
				Xe(e);
				break;
			case 19:
				V(Bt);
				break;
			case 10:
				Le(e.type);
				break;
			case 22:
			case 23:
				(Xe(e), oc(), t !== null && V(Hl));
				break;
			case 24:
				Le(qt);
		}
	}
	function cu(t, e) {
		try {
			var l = e.updateQueue,
				a = l !== null ? l.lastEffect : null;
			if (a !== null) {
				var u = a.next;
				l = u;
				do {
					if ((l.tag & t) === t) {
						a = void 0;
						var n = l.create,
							c = l.inst;
						((a = n()), (c.destroy = a));
					}
					l = l.next;
				} while (l !== u);
			}
		} catch (r) {
			Et(e, e.return, r);
		}
	}
	function fl(t, e, l) {
		try {
			var a = e.updateQueue,
				u = a !== null ? a.lastEffect : null;
			if (u !== null) {
				var n = u.next;
				a = n;
				do {
					if ((a.tag & t) === t) {
						var c = a.inst,
							r = c.destroy;
						if (r !== void 0) {
							((c.destroy = void 0), (u = e));
							var v = l,
								O = r;
							try {
								O();
							} catch (j) {
								Et(u, v, j);
							}
						}
					}
					a = a.next;
				} while (a !== n);
			}
		} catch (j) {
			Et(e, e.return, j);
		}
	}
	function Ms(t) {
		var e = t.updateQueue;
		if (e !== null) {
			var l = t.stateNode;
			try {
				mo(e, l);
			} catch (a) {
				Et(t, t.return, a);
			}
		}
	}
	function _s(t, e, l) {
		((l.props = ql(t.type, t.memoizedProps)), (l.state = t.memoizedState));
		try {
			l.componentWillUnmount();
		} catch (a) {
			Et(t, e, a);
		}
	}
	function fu(t, e) {
		try {
			var l = t.ref;
			if (l !== null) {
				switch (t.tag) {
					case 26:
					case 27:
					case 5:
						var a = t.stateNode;
						break;
					case 30:
						a = t.stateNode;
						break;
					default:
						a = t.stateNode;
				}
				typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
			}
		} catch (u) {
			Et(t, e, u);
		}
	}
	function ze(t, e) {
		var l = t.ref,
			a = t.refCleanup;
		if (l !== null)
			if (typeof a == "function")
				try {
					a();
				} catch (u) {
					Et(t, e, u);
				} finally {
					((t.refCleanup = null),
						(t = t.alternate),
						t != null && (t.refCleanup = null));
				}
			else if (typeof l == "function")
				try {
					l(null);
				} catch (u) {
					Et(t, e, u);
				}
			else l.current = null;
	}
	function zs(t) {
		var e = t.type,
			l = t.memoizedProps,
			a = t.stateNode;
		try {
			t: switch (e) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					l.autoFocus && a.focus();
					break t;
				case "img":
					l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
			}
		} catch (u) {
			Et(t, t.return, u);
		}
	}
	function Bc(t, e, l) {
		try {
			var a = t.stateNode;
			(jm(a, t.type, l, e), (a[Pt] = e));
		} catch (u) {
			Et(t, t.return, u);
		}
	}
	function Ds(t) {
		return (
			t.tag === 5 ||
			t.tag === 3 ||
			t.tag === 26 ||
			(t.tag === 27 && vl(t.type)) ||
			t.tag === 4
		);
	}
	function Yc(t) {
		t: for (;;) {
			for (; t.sibling === null; ) {
				if (t.return === null || Ds(t.return)) return null;
				t = t.return;
			}
			for (
				t.sibling.return = t.return, t = t.sibling;
				t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

			) {
				if (
					(t.tag === 27 && vl(t.type)) ||
					t.flags & 2 ||
					t.child === null ||
					t.tag === 4
				)
					continue t;
				((t.child.return = t), (t = t.child));
			}
			if (!(t.flags & 2)) return t.stateNode;
		}
	}
	function Lc(t, e, l) {
		var a = t.tag;
		if (a === 5 || a === 6)
			((t = t.stateNode),
				e
					? (l.nodeType === 9
							? l.body
							: l.nodeName === "HTML"
								? l.ownerDocument.body
								: l
						).insertBefore(t, e)
					: ((e =
							l.nodeType === 9
								? l.body
								: l.nodeName === "HTML"
									? l.ownerDocument.body
									: l),
						e.appendChild(t),
						(l = l._reactRootContainer),
						l != null || e.onclick !== null || (e.onclick = wn)));
		else if (
			a !== 4 &&
			(a === 27 && vl(t.type) && ((l = t.stateNode), (e = null)),
			(t = t.child),
			t !== null)
		)
			for (Lc(t, e, l), t = t.sibling; t !== null; )
				(Lc(t, e, l), (t = t.sibling));
	}
	function Rn(t, e, l) {
		var a = t.tag;
		if (a === 5 || a === 6)
			((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
		else if (
			a !== 4 &&
			(a === 27 && vl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
		)
			for (Rn(t, e, l), t = t.sibling; t !== null; )
				(Rn(t, e, l), (t = t.sibling));
	}
	function Ns(t) {
		var e = t.stateNode,
			l = t.memoizedProps;
		try {
			for (var a = t.type, u = e.attributes; u.length; )
				e.removeAttributeNode(u[0]);
			(Kt(e, a, l), (e[kt] = t), (e[Pt] = l));
		} catch (n) {
			Et(t, t.return, n);
		}
	}
	var Ve = !1,
		jt = !1,
		Gc = !1,
		Us = typeof WeakSet == "function" ? WeakSet : Set,
		Xt = null;
	function mm(t, e) {
		if (((t = t.containerInfo), (df = Qn), (t = Xr(t)), Yi(t))) {
			if ("selectionStart" in t)
				var l = { start: t.selectionStart, end: t.selectionEnd };
			else
				t: {
					l = ((l = t.ownerDocument) && l.defaultView) || window;
					var a = l.getSelection && l.getSelection();
					if (a && a.rangeCount !== 0) {
						l = a.anchorNode;
						var u = a.anchorOffset,
							n = a.focusNode;
						a = a.focusOffset;
						try {
							(l.nodeType, n.nodeType);
						} catch {
							l = null;
							break t;
						}
						var c = 0,
							r = -1,
							v = -1,
							O = 0,
							j = 0,
							w = t,
							M = null;
						e: for (;;) {
							for (
								var _;
								w !== l || (u !== 0 && w.nodeType !== 3) || (r = c + u),
									w !== n || (a !== 0 && w.nodeType !== 3) || (v = c + a),
									w.nodeType === 3 && (c += w.nodeValue.length),
									(_ = w.firstChild) !== null;

							)
								((M = w), (w = _));
							for (;;) {
								if (w === t) break e;
								if (
									(M === l && ++O === u && (r = c),
									M === n && ++j === a && (v = c),
									(_ = w.nextSibling) !== null)
								)
									break;
								((w = M), (M = w.parentNode));
							}
							w = _;
						}
						l = r === -1 || v === -1 ? null : { start: r, end: v };
					} else l = null;
				}
			l = l || { start: 0, end: 0 };
		} else l = null;
		for (
			hf = { focusedElem: t, selectionRange: l }, Qn = !1, Xt = e;
			Xt !== null;

		)
			if (
				((e = Xt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
			)
				((t.return = e), (Xt = t));
			else
				for (; Xt !== null; ) {
					switch (((e = Xt), (n = e.alternate), (t = e.flags), e.tag)) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if (t & 1024 && n !== null) {
								((t = void 0),
									(l = e),
									(u = n.memoizedProps),
									(n = n.memoizedState),
									(a = l.stateNode));
								try {
									var tt = ql(l.type, u, l.elementType === l.type);
									((t = a.getSnapshotBeforeUpdate(tt, n)),
										(a.__reactInternalSnapshotBeforeUpdate = t));
								} catch (F) {
									Et(l, l.return, F);
								}
							}
							break;
						case 3:
							if (t & 1024) {
								if (
									((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
								)
									vf(t);
								else if (l === 1)
									switch (t.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											vf(t);
											break;
										default:
											t.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if (t & 1024) throw Error(f(163));
					}
					if (((t = e.sibling), t !== null)) {
						((t.return = e.return), (Xt = t));
						break;
					}
					Xt = e.return;
				}
	}
	function Cs(t, e, l) {
		var a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				(rl(t, l), a & 4 && cu(5, l));
				break;
			case 1:
				if ((rl(t, l), a & 4))
					if (((t = l.stateNode), e === null))
						try {
							t.componentDidMount();
						} catch (c) {
							Et(l, l.return, c);
						}
					else {
						var u = ql(l.type, e.memoizedProps);
						e = e.memoizedState;
						try {
							t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
						} catch (c) {
							Et(l, l.return, c);
						}
					}
				(a & 64 && Ms(l), a & 512 && fu(l, l.return));
				break;
			case 3:
				if ((rl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
					if (((e = null), l.child !== null))
						switch (l.child.tag) {
							case 27:
							case 5:
								e = l.child.stateNode;
								break;
							case 1:
								e = l.child.stateNode;
						}
					try {
						mo(t, e);
					} catch (c) {
						Et(l, l.return, c);
					}
				}
				break;
			case 27:
				e === null && a & 4 && Ns(l);
			case 26:
			case 5:
				(rl(t, l), e === null && a & 4 && zs(l), a & 512 && fu(l, l.return));
				break;
			case 12:
				rl(t, l);
				break;
			case 13:
				(rl(t, l),
					a & 4 && ws(t, l),
					a & 64 &&
						((t = l.memoizedState),
						t !== null &&
							((t = t.dehydrated),
							t !== null && ((l = Tm.bind(null, l)), Gm(t, l)))));
				break;
			case 22:
				if (((a = l.memoizedState !== null || Ve), !a)) {
					((e = (e !== null && e.memoizedState !== null) || jt), (u = Ve));
					var n = jt;
					((Ve = a),
						(jt = e) && !n ? ol(t, l, (l.subtreeFlags & 8772) !== 0) : rl(t, l),
						(Ve = u),
						(jt = n));
				}
				break;
			case 30:
				break;
			default:
				rl(t, l);
		}
	}
	function js(t) {
		var e = t.alternate;
		(e !== null && ((t.alternate = null), js(e)),
			(t.child = null),
			(t.deletions = null),
			(t.sibling = null),
			t.tag === 5 && ((e = t.stateNode), e !== null && bi(e)),
			(t.stateNode = null),
			(t.return = null),
			(t.dependencies = null),
			(t.memoizedProps = null),
			(t.memoizedState = null),
			(t.pendingProps = null),
			(t.stateNode = null),
			(t.updateQueue = null));
	}
	var Mt = null,
		ee = !1;
	function Ke(t, e, l) {
		for (l = l.child; l !== null; ) (Hs(t, e, l), (l = l.sibling));
	}
	function Hs(t, e, l) {
		if (ue && typeof ue.onCommitFiberUnmount == "function")
			try {
				ue.onCommitFiberUnmount(za, l);
			} catch {}
		switch (l.tag) {
			case 26:
				(jt || ze(l, e),
					Ke(t, e, l),
					l.memoizedState
						? l.memoizedState.count--
						: l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
				break;
			case 27:
				jt || ze(l, e);
				var a = Mt,
					u = ee;
				(vl(l.type) && ((Mt = l.stateNode), (ee = !1)),
					Ke(t, e, l),
					gu(l.stateNode),
					(Mt = a),
					(ee = u));
				break;
			case 5:
				jt || ze(l, e);
			case 6:
				if (
					((a = Mt),
					(u = ee),
					(Mt = null),
					Ke(t, e, l),
					(Mt = a),
					(ee = u),
					Mt !== null)
				)
					if (ee)
						try {
							(Mt.nodeType === 9
								? Mt.body
								: Mt.nodeName === "HTML"
									? Mt.ownerDocument.body
									: Mt
							).removeChild(l.stateNode);
						} catch (n) {
							Et(l, e, n);
						}
					else
						try {
							Mt.removeChild(l.stateNode);
						} catch (n) {
							Et(l, e, n);
						}
				break;
			case 18:
				Mt !== null &&
					(ee
						? ((t = Mt),
							Td(
								t.nodeType === 9
									? t.body
									: t.nodeName === "HTML"
										? t.ownerDocument.body
										: t,
								l.stateNode,
							),
							Ru(t))
						: Td(Mt, l.stateNode));
				break;
			case 4:
				((a = Mt),
					(u = ee),
					(Mt = l.stateNode.containerInfo),
					(ee = !0),
					Ke(t, e, l),
					(Mt = a),
					(ee = u));
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				(jt || fl(2, l, e), jt || fl(4, l, e), Ke(t, e, l));
				break;
			case 1:
				(jt ||
					(ze(l, e),
					(a = l.stateNode),
					typeof a.componentWillUnmount == "function" && _s(l, e, a)),
					Ke(t, e, l));
				break;
			case 21:
				Ke(t, e, l);
				break;
			case 22:
				((jt = (a = jt) || l.memoizedState !== null), Ke(t, e, l), (jt = a));
				break;
			default:
				Ke(t, e, l);
		}
	}
	function ws(t, e) {
		if (
			e.memoizedState === null &&
			((t = e.alternate),
			t !== null &&
				((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
		)
			try {
				Ru(t);
			} catch (l) {
				Et(e, e.return, l);
			}
	}
	function ym(t) {
		switch (t.tag) {
			case 13:
			case 19:
				var e = t.stateNode;
				return (e === null && (e = t.stateNode = new Us()), e);
			case 22:
				return (
					(t = t.stateNode),
					(e = t._retryCache),
					e === null && (e = t._retryCache = new Us()),
					e
				);
			default:
				throw Error(f(435, t.tag));
		}
	}
	function Xc(t, e) {
		var l = ym(t);
		e.forEach(function (a) {
			var u = Am.bind(null, t, a);
			l.has(a) || (l.add(a), a.then(u, u));
		});
	}
	function fe(t, e) {
		var l = e.deletions;
		if (l !== null)
			for (var a = 0; a < l.length; a++) {
				var u = l[a],
					n = t,
					c = e,
					r = c;
				t: for (; r !== null; ) {
					switch (r.tag) {
						case 27:
							if (vl(r.type)) {
								((Mt = r.stateNode), (ee = !1));
								break t;
							}
							break;
						case 5:
							((Mt = r.stateNode), (ee = !1));
							break t;
						case 3:
						case 4:
							((Mt = r.stateNode.containerInfo), (ee = !0));
							break t;
					}
					r = r.return;
				}
				if (Mt === null) throw Error(f(160));
				(Hs(n, c, u),
					(Mt = null),
					(ee = !1),
					(n = u.alternate),
					n !== null && (n.return = null),
					(u.return = null));
			}
		if (e.subtreeFlags & 13878)
			for (e = e.child; e !== null; ) (qs(e, t), (e = e.sibling));
	}
	var Te = null;
	function qs(t, e) {
		var l = t.alternate,
			a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				(fe(e, t),
					re(t),
					a & 4 && (fl(3, t, t.return), cu(3, t), fl(5, t, t.return)));
				break;
			case 1:
				(fe(e, t),
					re(t),
					a & 512 && (jt || l === null || ze(l, l.return)),
					a & 64 &&
						Ve &&
						((t = t.updateQueue),
						t !== null &&
							((a = t.callbacks),
							a !== null &&
								((l = t.shared.hiddenCallbacks),
								(t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
				break;
			case 26:
				var u = Te;
				if (
					(fe(e, t),
					re(t),
					a & 512 && (jt || l === null || ze(l, l.return)),
					a & 4)
				) {
					var n = l !== null ? l.memoizedState : null;
					if (((a = t.memoizedState), l === null))
						if (a === null)
							if (t.stateNode === null) {
								t: {
									((a = t.type),
										(l = t.memoizedProps),
										(u = u.ownerDocument || u));
									e: switch (a) {
										case "title":
											((n = u.getElementsByTagName("title")[0]),
												(!n ||
													n[Ua] ||
													n[kt] ||
													n.namespaceURI === "http://www.w3.org/2000/svg" ||
													n.hasAttribute("itemprop")) &&
													((n = u.createElement(a)),
													u.head.insertBefore(
														n,
														u.querySelector("head > title"),
													)),
												Kt(n, a, l),
												(n[kt] = t),
												Lt(n),
												(a = n));
											break t;
										case "link":
											var c = Nd("link", "href", u).get(a + (l.href || ""));
											if (c) {
												for (var r = 0; r < c.length; r++)
													if (
														((n = c[r]),
														n.getAttribute("href") ===
															(l.href == null || l.href === ""
																? null
																: l.href) &&
															n.getAttribute("rel") ===
																(l.rel == null ? null : l.rel) &&
															n.getAttribute("title") ===
																(l.title == null ? null : l.title) &&
															n.getAttribute("crossorigin") ===
																(l.crossOrigin == null ? null : l.crossOrigin))
													) {
														c.splice(r, 1);
														break e;
													}
											}
											((n = u.createElement(a)),
												Kt(n, a, l),
												u.head.appendChild(n));
											break;
										case "meta":
											if (
												(c = Nd("meta", "content", u).get(
													a + (l.content || ""),
												))
											) {
												for (r = 0; r < c.length; r++)
													if (
														((n = c[r]),
														n.getAttribute("content") ===
															(l.content == null ? null : "" + l.content) &&
															n.getAttribute("name") ===
																(l.name == null ? null : l.name) &&
															n.getAttribute("property") ===
																(l.property == null ? null : l.property) &&
															n.getAttribute("http-equiv") ===
																(l.httpEquiv == null ? null : l.httpEquiv) &&
															n.getAttribute("charset") ===
																(l.charSet == null ? null : l.charSet))
													) {
														c.splice(r, 1);
														break e;
													}
											}
											((n = u.createElement(a)),
												Kt(n, a, l),
												u.head.appendChild(n));
											break;
										default:
											throw Error(f(468, a));
									}
									((n[kt] = t), Lt(n), (a = n));
								}
								t.stateNode = a;
							} else Ud(u, t.type, t.stateNode);
						else t.stateNode = Dd(u, a, t.memoizedProps);
					else
						n !== a
							? (n === null
									? l.stateNode !== null &&
										((l = l.stateNode), l.parentNode.removeChild(l))
									: n.count--,
								a === null
									? Ud(u, t.type, t.stateNode)
									: Dd(u, a, t.memoizedProps))
							: a === null &&
								t.stateNode !== null &&
								Bc(t, t.memoizedProps, l.memoizedProps);
				}
				break;
			case 27:
				(fe(e, t),
					re(t),
					a & 512 && (jt || l === null || ze(l, l.return)),
					l !== null && a & 4 && Bc(t, t.memoizedProps, l.memoizedProps));
				break;
			case 5:
				if (
					(fe(e, t),
					re(t),
					a & 512 && (jt || l === null || ze(l, l.return)),
					t.flags & 32)
				) {
					u = t.stateNode;
					try {
						kl(u, "");
					} catch (_) {
						Et(t, t.return, _);
					}
				}
				(a & 4 &&
					t.stateNode != null &&
					((u = t.memoizedProps), Bc(t, u, l !== null ? l.memoizedProps : u)),
					a & 1024 && (Gc = !0));
				break;
			case 6:
				if ((fe(e, t), re(t), a & 4)) {
					if (t.stateNode === null) throw Error(f(162));
					((a = t.memoizedProps), (l = t.stateNode));
					try {
						l.nodeValue = a;
					} catch (_) {
						Et(t, t.return, _);
					}
				}
				break;
			case 3:
				if (
					((Ln = null),
					(u = Te),
					(Te = Bn(e.containerInfo)),
					fe(e, t),
					(Te = u),
					re(t),
					a & 4 && l !== null && l.memoizedState.isDehydrated)
				)
					try {
						Ru(e.containerInfo);
					} catch (_) {
						Et(t, t.return, _);
					}
				Gc && ((Gc = !1), Bs(t));
				break;
			case 4:
				((a = Te),
					(Te = Bn(t.stateNode.containerInfo)),
					fe(e, t),
					re(t),
					(Te = a));
				break;
			case 12:
				(fe(e, t), re(t));
				break;
			case 13:
				(fe(e, t),
					re(t),
					t.child.flags & 8192 &&
						(t.memoizedState !== null) !=
							(l !== null && l.memoizedState !== null) &&
						(kc = Oe()),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), Xc(t, a))));
				break;
			case 22:
				u = t.memoizedState !== null;
				var v = l !== null && l.memoizedState !== null,
					O = Ve,
					j = jt;
				if (
					((Ve = O || u),
					(jt = j || v),
					fe(e, t),
					(jt = j),
					(Ve = O),
					re(t),
					a & 8192)
				)
					t: for (
						e = t.stateNode,
							e._visibility = u ? e._visibility & -2 : e._visibility | 1,
							u && (l === null || v || Ve || jt || Bl(t)),
							l = null,
							e = t;
						;

					) {
						if (e.tag === 5 || e.tag === 26) {
							if (l === null) {
								v = l = e;
								try {
									if (((n = v.stateNode), u))
										((c = n.style),
											typeof c.setProperty == "function"
												? c.setProperty("display", "none", "important")
												: (c.display = "none"));
									else {
										r = v.stateNode;
										var w = v.memoizedProps.style,
											M =
												w != null && w.hasOwnProperty("display")
													? w.display
													: null;
										r.style.display =
											M == null || typeof M == "boolean" ? "" : ("" + M).trim();
									}
								} catch (_) {
									Et(v, v.return, _);
								}
							}
						} else if (e.tag === 6) {
							if (l === null) {
								v = e;
								try {
									v.stateNode.nodeValue = u ? "" : v.memoizedProps;
								} catch (_) {
									Et(v, v.return, _);
								}
							}
						} else if (
							((e.tag !== 22 && e.tag !== 23) ||
								e.memoizedState === null ||
								e === t) &&
							e.child !== null
						) {
							((e.child.return = e), (e = e.child));
							continue;
						}
						if (e === t) break t;
						for (; e.sibling === null; ) {
							if (e.return === null || e.return === t) break t;
							(l === e && (l = null), (e = e.return));
						}
						(l === e && (l = null),
							(e.sibling.return = e.return),
							(e = e.sibling));
					}
				a & 4 &&
					((a = t.updateQueue),
					a !== null &&
						((l = a.retryQueue),
						l !== null && ((a.retryQueue = null), Xc(t, l))));
				break;
			case 19:
				(fe(e, t),
					re(t),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), Xc(t, a))));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				(fe(e, t), re(t));
		}
	}
	function re(t) {
		var e = t.flags;
		if (e & 2) {
			try {
				for (var l, a = t.return; a !== null; ) {
					if (Ds(a)) {
						l = a;
						break;
					}
					a = a.return;
				}
				if (l == null) throw Error(f(160));
				switch (l.tag) {
					case 27:
						var u = l.stateNode,
							n = Yc(t);
						Rn(t, n, u);
						break;
					case 5:
						var c = l.stateNode;
						l.flags & 32 && (kl(c, ""), (l.flags &= -33));
						var r = Yc(t);
						Rn(t, r, c);
						break;
					case 3:
					case 4:
						var v = l.stateNode.containerInfo,
							O = Yc(t);
						Lc(t, O, v);
						break;
					default:
						throw Error(f(161));
				}
			} catch (j) {
				Et(t, t.return, j);
			}
			t.flags &= -3;
		}
		e & 4096 && (t.flags &= -4097);
	}
	function Bs(t) {
		if (t.subtreeFlags & 1024)
			for (t = t.child; t !== null; ) {
				var e = t;
				(Bs(e),
					e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
					(t = t.sibling));
			}
	}
	function rl(t, e) {
		if (e.subtreeFlags & 8772)
			for (e = e.child; e !== null; ) (Cs(t, e.alternate, e), (e = e.sibling));
	}
	function Bl(t) {
		for (t = t.child; t !== null; ) {
			var e = t;
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					(fl(4, e, e.return), Bl(e));
					break;
				case 1:
					ze(e, e.return);
					var l = e.stateNode;
					(typeof l.componentWillUnmount == "function" && _s(e, e.return, l),
						Bl(e));
					break;
				case 27:
					gu(e.stateNode);
				case 26:
				case 5:
					(ze(e, e.return), Bl(e));
					break;
				case 22:
					e.memoizedState === null && Bl(e);
					break;
				case 30:
					Bl(e);
					break;
				default:
					Bl(e);
			}
			t = t.sibling;
		}
	}
	function ol(t, e, l) {
		for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
			var a = e.alternate,
				u = t,
				n = e,
				c = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					(ol(u, n, l), cu(4, n));
					break;
				case 1:
					if (
						(ol(u, n, l),
						(a = n),
						(u = a.stateNode),
						typeof u.componentDidMount == "function")
					)
						try {
							u.componentDidMount();
						} catch (O) {
							Et(a, a.return, O);
						}
					if (((a = n), (u = a.updateQueue), u !== null)) {
						var r = a.stateNode;
						try {
							var v = u.shared.hiddenCallbacks;
							if (v !== null)
								for (u.shared.hiddenCallbacks = null, u = 0; u < v.length; u++)
									ho(v[u], r);
						} catch (O) {
							Et(a, a.return, O);
						}
					}
					(l && c & 64 && Ms(n), fu(n, n.return));
					break;
				case 27:
					Ns(n);
				case 26:
				case 5:
					(ol(u, n, l), l && a === null && c & 4 && zs(n), fu(n, n.return));
					break;
				case 12:
					ol(u, n, l);
					break;
				case 13:
					(ol(u, n, l), l && c & 4 && ws(u, n));
					break;
				case 22:
					(n.memoizedState === null && ol(u, n, l), fu(n, n.return));
					break;
				case 30:
					break;
				default:
					ol(u, n, l);
			}
			e = e.sibling;
		}
	}
	function Qc(t, e) {
		var l = null;
		(t !== null &&
			t.memoizedState !== null &&
			t.memoizedState.cachePool !== null &&
			(l = t.memoizedState.cachePool.pool),
			(t = null),
			e.memoizedState !== null &&
				e.memoizedState.cachePool !== null &&
				(t = e.memoizedState.cachePool.pool),
			t !== l && (t != null && t.refCount++, l != null && Ja(l)));
	}
	function Zc(t, e) {
		((t = null),
			e.alternate !== null && (t = e.alternate.memoizedState.cache),
			(e = e.memoizedState.cache),
			e !== t && (e.refCount++, t != null && Ja(t)));
	}
	function De(t, e, l, a) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) (Ys(t, e, l, a), (e = e.sibling));
	}
	function Ys(t, e, l, a) {
		var u = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				(De(t, e, l, a), u & 2048 && cu(9, e));
				break;
			case 1:
				De(t, e, l, a);
				break;
			case 3:
				(De(t, e, l, a),
					u & 2048 &&
						((t = null),
						e.alternate !== null && (t = e.alternate.memoizedState.cache),
						(e = e.memoizedState.cache),
						e !== t && (e.refCount++, t != null && Ja(t))));
				break;
			case 12:
				if (u & 2048) {
					(De(t, e, l, a), (t = e.stateNode));
					try {
						var n = e.memoizedProps,
							c = n.id,
							r = n.onPostCommit;
						typeof r == "function" &&
							r(
								c,
								e.alternate === null ? "mount" : "update",
								t.passiveEffectDuration,
								-0,
							);
					} catch (v) {
						Et(e, e.return, v);
					}
				} else De(t, e, l, a);
				break;
			case 13:
				De(t, e, l, a);
				break;
			case 23:
				break;
			case 22:
				((n = e.stateNode),
					(c = e.alternate),
					e.memoizedState !== null
						? n._visibility & 2
							? De(t, e, l, a)
							: ru(t, e)
						: n._visibility & 2
							? De(t, e, l, a)
							: ((n._visibility |= 2),
								ha(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
					u & 2048 && Qc(c, e));
				break;
			case 24:
				(De(t, e, l, a), u & 2048 && Zc(e.alternate, e));
				break;
			default:
				De(t, e, l, a);
		}
	}
	function ha(t, e, l, a, u) {
		for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
			var n = t,
				c = e,
				r = l,
				v = a,
				O = c.flags;
			switch (c.tag) {
				case 0:
				case 11:
				case 15:
					(ha(n, c, r, v, u), cu(8, c));
					break;
				case 23:
					break;
				case 22:
					var j = c.stateNode;
					(c.memoizedState !== null
						? j._visibility & 2
							? ha(n, c, r, v, u)
							: ru(n, c)
						: ((j._visibility |= 2), ha(n, c, r, v, u)),
						u && O & 2048 && Qc(c.alternate, c));
					break;
				case 24:
					(ha(n, c, r, v, u), u && O & 2048 && Zc(c.alternate, c));
					break;
				default:
					ha(n, c, r, v, u);
			}
			e = e.sibling;
		}
	}
	function ru(t, e) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) {
				var l = t,
					a = e,
					u = a.flags;
				switch (a.tag) {
					case 22:
						(ru(l, a), u & 2048 && Qc(a.alternate, a));
						break;
					case 24:
						(ru(l, a), u & 2048 && Zc(a.alternate, a));
						break;
					default:
						ru(l, a);
				}
				e = e.sibling;
			}
	}
	var ou = 8192;
	function ma(t) {
		if (t.subtreeFlags & ou)
			for (t = t.child; t !== null; ) (Ls(t), (t = t.sibling));
	}
	function Ls(t) {
		switch (t.tag) {
			case 26:
				(ma(t),
					t.flags & ou &&
						t.memoizedState !== null &&
						ty(Te, t.memoizedState, t.memoizedProps));
				break;
			case 5:
				ma(t);
				break;
			case 3:
			case 4:
				var e = Te;
				((Te = Bn(t.stateNode.containerInfo)), ma(t), (Te = e));
				break;
			case 22:
				t.memoizedState === null &&
					((e = t.alternate),
					e !== null && e.memoizedState !== null
						? ((e = ou), (ou = 16777216), ma(t), (ou = e))
						: ma(t));
				break;
			default:
				ma(t);
		}
	}
	function Gs(t) {
		var e = t.alternate;
		if (e !== null && ((t = e.child), t !== null)) {
			e.child = null;
			do ((e = t.sibling), (t.sibling = null), (t = e));
			while (t !== null);
		}
	}
	function su(t) {
		var e = t.deletions;
		if (t.flags & 16) {
			if (e !== null)
				for (var l = 0; l < e.length; l++) {
					var a = e[l];
					((Xt = a), Qs(a, t));
				}
			Gs(t);
		}
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) (Xs(t), (t = t.sibling));
	}
	function Xs(t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				(su(t), t.flags & 2048 && fl(9, t, t.return));
				break;
			case 3:
				su(t);
				break;
			case 12:
				su(t);
				break;
			case 22:
				var e = t.stateNode;
				t.memoizedState !== null &&
				e._visibility & 2 &&
				(t.return === null || t.return.tag !== 13)
					? ((e._visibility &= -3), On(t))
					: su(t);
				break;
			default:
				su(t);
		}
	}
	function On(t) {
		var e = t.deletions;
		if (t.flags & 16) {
			if (e !== null)
				for (var l = 0; l < e.length; l++) {
					var a = e[l];
					((Xt = a), Qs(a, t));
				}
			Gs(t);
		}
		for (t = t.child; t !== null; ) {
			switch (((e = t), e.tag)) {
				case 0:
				case 11:
				case 15:
					(fl(8, e, e.return), On(e));
					break;
				case 22:
					((l = e.stateNode),
						l._visibility & 2 && ((l._visibility &= -3), On(e)));
					break;
				default:
					On(e);
			}
			t = t.sibling;
		}
	}
	function Qs(t, e) {
		for (; Xt !== null; ) {
			var l = Xt;
			switch (l.tag) {
				case 0:
				case 11:
				case 15:
					fl(8, l, e);
					break;
				case 23:
				case 22:
					if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
						var a = l.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					Ja(l.memoizedState.cache);
			}
			if (((a = l.child), a !== null)) ((a.return = l), (Xt = a));
			else
				t: for (l = t; Xt !== null; ) {
					a = Xt;
					var u = a.sibling,
						n = a.return;
					if ((js(a), a === l)) {
						Xt = null;
						break t;
					}
					if (u !== null) {
						((u.return = n), (Xt = u));
						break t;
					}
					Xt = n;
				}
		}
	}
	var vm = {
			getCacheForType: function (t) {
				var e = $t(qt),
					l = e.data.get(t);
				return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
			},
		},
		gm = typeof WeakMap == "function" ? WeakMap : Map,
		yt = 0,
		At = null,
		ft = null,
		st = 0,
		vt = 0,
		oe = null,
		sl = !1,
		ya = !1,
		Vc = !1,
		Je = 0,
		Nt = 0,
		dl = 0,
		Yl = 0,
		Kc = 0,
		be = 0,
		va = 0,
		du = null,
		le = null,
		Jc = !1,
		kc = 0,
		Mn = 1 / 0,
		_n = null,
		hl = null,
		Vt = 0,
		ml = null,
		ga = null,
		pa = 0,
		$c = 0,
		Wc = null,
		Zs = null,
		hu = 0,
		Fc = null;
	function se() {
		if (yt & 2 && st !== 0) return st & -st;
		if (U.T !== null) {
			var t = na;
			return t !== 0 ? t : uf();
		}
		return nr();
	}
	function Vs() {
		be === 0 && (be = !(st & 536870912) || mt ? er() : 536870912);
		var t = Se.current;
		return (t !== null && (t.flags |= 32), be);
	}
	function de(t, e, l) {
		(((t === At && (vt === 2 || vt === 9)) || t.cancelPendingCommit !== null) &&
			(Sa(t, 0), yl(t, st, be, !1)),
			Na(t, l),
			(!(yt & 2) || t !== At) &&
				(t === At && (!(yt & 2) && (Yl |= l), Nt === 4 && yl(t, st, be, !1)),
				Ne(t)));
	}
	function Ks(t, e, l) {
		if (yt & 6) throw Error(f(327));
		var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Da(t, e),
			u = a ? bm(t, e) : tf(t, e, !0),
			n = a;
		do {
			if (u === 0) {
				ya && !a && yl(t, e, 0, !1);
				break;
			} else {
				if (((l = t.current.alternate), n && !pm(l))) {
					((u = tf(t, e, !1)), (n = !1));
					continue;
				}
				if (u === 2) {
					if (((n = e), t.errorRecoveryDisabledLanes & n)) var c = 0;
					else
						((c = t.pendingLanes & -536870913),
							(c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
					if (c !== 0) {
						e = c;
						t: {
							var r = t;
							u = du;
							var v = r.current.memoizedState.isDehydrated;
							if ((v && (Sa(r, c).flags |= 256), (c = tf(r, c, !1)), c !== 2)) {
								if (Vc && !v) {
									((r.errorRecoveryDisabledLanes |= n), (Yl |= n), (u = 4));
									break t;
								}
								((n = le),
									(le = u),
									n !== null &&
										(le === null ? (le = n) : le.push.apply(le, n)));
							}
							u = c;
						}
						if (((n = !1), u !== 2)) continue;
					}
				}
				if (u === 1) {
					(Sa(t, 0), yl(t, e, 0, !0));
					break;
				}
				t: {
					switch (((a = t), (n = u), n)) {
						case 0:
						case 1:
							throw Error(f(345));
						case 4:
							if ((e & 4194048) !== e) break;
						case 6:
							yl(a, e, be, !sl);
							break t;
						case 2:
							le = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(f(329));
					}
					if ((e & 62914560) === e && ((u = kc + 300 - Oe()), 10 < u)) {
						if ((yl(a, e, be, !sl), Bu(a, 0, !0) !== 0)) break t;
						a.timeoutHandle = xd(
							Js.bind(null, a, l, le, _n, Jc, e, be, Yl, va, sl, n, 2, -0, 0),
							u,
						);
						break t;
					}
					Js(a, l, le, _n, Jc, e, be, Yl, va, sl, n, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		Ne(t);
	}
	function Js(t, e, l, a, u, n, c, r, v, O, j, w, M, _) {
		if (
			((t.timeoutHandle = -1),
			(w = e.subtreeFlags),
			(w & 8192 || (w & 16785408) === 16785408) &&
				((bu = { stylesheets: null, count: 0, unsuspend: Im }),
				Ls(e),
				(w = ey()),
				w !== null))
		) {
			((t.cancelPendingCommit = w(
				td.bind(null, t, e, n, l, a, u, c, r, v, j, 1, M, _),
			)),
				yl(t, n, c, !O));
			return;
		}
		td(t, e, n, l, a, u, c, r, v);
	}
	function pm(t) {
		for (var e = t; ; ) {
			var l = e.tag;
			if (
				(l === 0 || l === 11 || l === 15) &&
				e.flags & 16384 &&
				((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
			)
				for (var a = 0; a < l.length; a++) {
					var u = l[a],
						n = u.getSnapshot;
					u = u.value;
					try {
						if (!ie(n(), u)) return !1;
					} catch {
						return !1;
					}
				}
			if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
				((l.return = e), (e = l));
			else {
				if (e === t) break;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) return !0;
					e = e.return;
				}
				((e.sibling.return = e.return), (e = e.sibling));
			}
		}
		return !0;
	}
	function yl(t, e, l, a) {
		((e &= ~Kc),
			(e &= ~Yl),
			(t.suspendedLanes |= e),
			(t.pingedLanes &= ~e),
			a && (t.warmLanes |= e),
			(a = t.expirationTimes));
		for (var u = e; 0 < u; ) {
			var n = 31 - ne(u),
				c = 1 << n;
			((a[n] = -1), (u &= ~c));
		}
		l !== 0 && ar(t, l, e);
	}
	function zn() {
		return yt & 6 ? !0 : (mu(0), !1);
	}
	function Pc() {
		if (ft !== null) {
			if (vt === 0) var t = ft.return;
			else ((t = ft), (Ye = Cl = null), yc(t), (sa = null), (uu = 0), (t = ft));
			for (; t !== null; ) (Os(t.alternate, t), (t = t.return));
			ft = null;
		}
	}
	function Sa(t, e) {
		var l = t.timeoutHandle;
		(l !== -1 && ((t.timeoutHandle = -1), wm(l)),
			(l = t.cancelPendingCommit),
			l !== null && ((t.cancelPendingCommit = null), l()),
			Pc(),
			(At = t),
			(ft = l = we(t.current, null)),
			(st = e),
			(vt = 0),
			(oe = null),
			(sl = !1),
			(ya = Da(t, e)),
			(Vc = !1),
			(va = be = Kc = Yl = dl = Nt = 0),
			(le = du = null),
			(Jc = !1),
			e & 8 && (e |= e & 32));
		var a = t.entangledLanes;
		if (a !== 0)
			for (t = t.entanglements, a &= e; 0 < a; ) {
				var u = 31 - ne(a),
					n = 1 << u;
				((e |= t[u]), (a &= ~n));
			}
		return ((Je = e), Wu(), l);
	}
	function ks(t, e) {
		((nt = null),
			(U.H = vn),
			e === $a || e === nn
				? ((e = oo()), (vt = 3))
				: e === co
					? ((e = oo()), (vt = 4))
					: (vt =
							e === ds
								? 8
								: e !== null &&
									  typeof e == "object" &&
									  typeof e.then == "function"
									? 6
									: 1),
			(oe = e),
			ft === null && ((Nt = 1), xn(t, ye(e, t.current))));
	}
	function $s() {
		var t = U.H;
		return ((U.H = vn), t === null ? vn : t);
	}
	function Ws() {
		var t = U.A;
		return ((U.A = vm), t);
	}
	function Ic() {
		((Nt = 4),
			sl || ((st & 4194048) !== st && Se.current !== null) || (ya = !0),
			(!(dl & 134217727) && !(Yl & 134217727)) ||
				At === null ||
				yl(At, st, be, !1));
	}
	function tf(t, e, l) {
		var a = yt;
		yt |= 2;
		var u = $s(),
			n = Ws();
		((At !== t || st !== e) && ((_n = null), Sa(t, e)), (e = !1));
		var c = Nt;
		t: do
			try {
				if (vt !== 0 && ft !== null) {
					var r = ft,
						v = oe;
					switch (vt) {
						case 8:
							(Pc(), (c = 6));
							break t;
						case 3:
						case 2:
						case 9:
						case 6:
							Se.current === null && (e = !0);
							var O = vt;
							if (((vt = 0), (oe = null), ba(t, r, v, O), l && ya)) {
								c = 0;
								break t;
							}
							break;
						default:
							((O = vt), (vt = 0), (oe = null), ba(t, r, v, O));
					}
				}
				(Sm(), (c = Nt));
				break;
			} catch (j) {
				ks(t, j);
			}
		while (!0);
		return (
			e && t.shellSuspendCounter++,
			(Ye = Cl = null),
			(yt = a),
			(U.H = u),
			(U.A = n),
			ft === null && ((At = null), (st = 0), Wu()),
			c
		);
	}
	function Sm() {
		for (; ft !== null; ) Fs(ft);
	}
	function bm(t, e) {
		var l = yt;
		yt |= 2;
		var a = $s(),
			u = Ws();
		At !== t || st !== e
			? ((_n = null), (Mn = Oe() + 500), Sa(t, e))
			: (ya = Da(t, e));
		t: do
			try {
				if (vt !== 0 && ft !== null) {
					e = ft;
					var n = oe;
					e: switch (vt) {
						case 1:
							((vt = 0), (oe = null), ba(t, e, n, 1));
							break;
						case 2:
						case 9:
							if (fo(n)) {
								((vt = 0), (oe = null), Ps(e));
								break;
							}
							((e = function () {
								((vt !== 2 && vt !== 9) || At !== t || (vt = 7), Ne(t));
							}),
								n.then(e, e));
							break t;
						case 3:
							vt = 7;
							break t;
						case 4:
							vt = 5;
							break t;
						case 7:
							fo(n)
								? ((vt = 0), (oe = null), Ps(e))
								: ((vt = 0), (oe = null), ba(t, e, n, 7));
							break;
						case 5:
							var c = null;
							switch (ft.tag) {
								case 26:
									c = ft.memoizedState;
								case 5:
								case 27:
									var r = ft;
									if (!c || Cd(c)) {
										((vt = 0), (oe = null));
										var v = r.sibling;
										if (v !== null) ft = v;
										else {
											var O = r.return;
											O !== null ? ((ft = O), Dn(O)) : (ft = null);
										}
										break e;
									}
							}
							((vt = 0), (oe = null), ba(t, e, n, 5));
							break;
						case 6:
							((vt = 0), (oe = null), ba(t, e, n, 6));
							break;
						case 8:
							(Pc(), (Nt = 6));
							break t;
						default:
							throw Error(f(462));
					}
				}
				xm();
				break;
			} catch (j) {
				ks(t, j);
			}
		while (!0);
		return (
			(Ye = Cl = null),
			(U.H = a),
			(U.A = u),
			(yt = l),
			ft !== null ? 0 : ((At = null), (st = 0), Wu(), Nt)
		);
	}
	function xm() {
		for (; ft !== null && !Qh(); ) Fs(ft);
	}
	function Fs(t) {
		var e = As(t.alternate, t, Je);
		((t.memoizedProps = t.pendingProps), e === null ? Dn(t) : (ft = e));
	}
	function Ps(t) {
		var e = t,
			l = e.alternate;
		switch (e.tag) {
			case 15:
			case 0:
				e = ps(l, e, e.pendingProps, e.type, void 0, st);
				break;
			case 11:
				e = ps(l, e, e.pendingProps, e.type.render, e.ref, st);
				break;
			case 5:
				yc(e);
			default:
				(Os(l, e), (e = ft = Pr(e, Je)), (e = As(l, e, Je)));
		}
		((t.memoizedProps = t.pendingProps), e === null ? Dn(t) : (ft = e));
	}
	function ba(t, e, l, a) {
		((Ye = Cl = null), yc(e), (sa = null), (uu = 0));
		var u = e.return;
		try {
			if (om(t, u, e, l, st)) {
				((Nt = 1), xn(t, ye(l, t.current)), (ft = null));
				return;
			}
		} catch (n) {
			if (u !== null) throw ((ft = u), n);
			((Nt = 1), xn(t, ye(l, t.current)), (ft = null));
			return;
		}
		e.flags & 32768
			? (mt || a === 1
					? (t = !0)
					: ya || st & 536870912
						? (t = !1)
						: ((sl = t = !0),
							(a === 2 || a === 9 || a === 3 || a === 6) &&
								((a = Se.current),
								a !== null && a.tag === 13 && (a.flags |= 16384))),
				Is(e, t))
			: Dn(e);
	}
	function Dn(t) {
		var e = t;
		do {
			if (e.flags & 32768) {
				Is(e, sl);
				return;
			}
			t = e.return;
			var l = dm(e.alternate, e, Je);
			if (l !== null) {
				ft = l;
				return;
			}
			if (((e = e.sibling), e !== null)) {
				ft = e;
				return;
			}
			ft = e = t;
		} while (e !== null);
		Nt === 0 && (Nt = 5);
	}
	function Is(t, e) {
		do {
			var l = hm(t.alternate, t);
			if (l !== null) {
				((l.flags &= 32767), (ft = l));
				return;
			}
			if (
				((l = t.return),
				l !== null &&
					((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
				!e && ((t = t.sibling), t !== null))
			) {
				ft = t;
				return;
			}
			ft = t = l;
		} while (t !== null);
		((Nt = 6), (ft = null));
	}
	function td(t, e, l, a, u, n, c, r, v) {
		t.cancelPendingCommit = null;
		do Nn();
		while (Vt !== 0);
		if (yt & 6) throw Error(f(327));
		if (e !== null) {
			if (e === t.current) throw Error(f(177));
			if (
				((n = e.lanes | e.childLanes),
				(n |= Zi),
				Ih(t, l, n, c, r, v),
				t === At && ((ft = At = null), (st = 0)),
				(ga = e),
				(ml = t),
				(pa = l),
				($c = n),
				(Wc = u),
				(Zs = a),
				e.subtreeFlags & 10256 || e.flags & 10256
					? ((t.callbackNode = null),
						(t.callbackPriority = 0),
						Rm(Hu, function () {
							return (nd(), null);
						}))
					: ((t.callbackNode = null), (t.callbackPriority = 0)),
				(a = (e.flags & 13878) !== 0),
				e.subtreeFlags & 13878 || a)
			) {
				((a = U.T), (U.T = null), (u = X.p), (X.p = 2), (c = yt), (yt |= 4));
				try {
					mm(t, e, l);
				} finally {
					((yt = c), (X.p = u), (U.T = a));
				}
			}
			((Vt = 1), ed(), ld(), ad());
		}
	}
	function ed() {
		if (Vt === 1) {
			Vt = 0;
			var t = ml,
				e = ga,
				l = (e.flags & 13878) !== 0;
			if (e.subtreeFlags & 13878 || l) {
				((l = U.T), (U.T = null));
				var a = X.p;
				X.p = 2;
				var u = yt;
				yt |= 4;
				try {
					qs(e, t);
					var n = hf,
						c = Xr(t.containerInfo),
						r = n.focusedElem,
						v = n.selectionRange;
					if (
						c !== r &&
						r &&
						r.ownerDocument &&
						Gr(r.ownerDocument.documentElement, r)
					) {
						if (v !== null && Yi(r)) {
							var O = v.start,
								j = v.end;
							if ((j === void 0 && (j = O), "selectionStart" in r))
								((r.selectionStart = O),
									(r.selectionEnd = Math.min(j, r.value.length)));
							else {
								var w = r.ownerDocument || document,
									M = (w && w.defaultView) || window;
								if (M.getSelection) {
									var _ = M.getSelection(),
										tt = r.textContent.length,
										F = Math.min(v.start, tt),
										St = v.end === void 0 ? F : Math.min(v.end, tt);
									!_.extend && F > St && ((c = St), (St = F), (F = c));
									var A = Lr(r, F),
										E = Lr(r, St);
									if (
										A &&
										E &&
										(_.rangeCount !== 1 ||
											_.anchorNode !== A.node ||
											_.anchorOffset !== A.offset ||
											_.focusNode !== E.node ||
											_.focusOffset !== E.offset)
									) {
										var R = w.createRange();
										(R.setStart(A.node, A.offset),
											_.removeAllRanges(),
											F > St
												? (_.addRange(R), _.extend(E.node, E.offset))
												: (R.setEnd(E.node, E.offset), _.addRange(R)));
									}
								}
							}
						}
						for (w = [], _ = r; (_ = _.parentNode); )
							_.nodeType === 1 &&
								w.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
						for (
							typeof r.focus == "function" && r.focus(), r = 0;
							r < w.length;
							r++
						) {
							var H = w[r];
							((H.element.scrollLeft = H.left), (H.element.scrollTop = H.top));
						}
					}
					((Qn = !!df), (hf = df = null));
				} finally {
					((yt = u), (X.p = a), (U.T = l));
				}
			}
			((t.current = e), (Vt = 2));
		}
	}
	function ld() {
		if (Vt === 2) {
			Vt = 0;
			var t = ml,
				e = ga,
				l = (e.flags & 8772) !== 0;
			if (e.subtreeFlags & 8772 || l) {
				((l = U.T), (U.T = null));
				var a = X.p;
				X.p = 2;
				var u = yt;
				yt |= 4;
				try {
					Cs(t, e.alternate, e);
				} finally {
					((yt = u), (X.p = a), (U.T = l));
				}
			}
			Vt = 3;
		}
	}
	function ad() {
		if (Vt === 4 || Vt === 3) {
			((Vt = 0), Zh());
			var t = ml,
				e = ga,
				l = pa,
				a = Zs;
			e.subtreeFlags & 10256 || e.flags & 10256
				? (Vt = 5)
				: ((Vt = 0), (ga = ml = null), ud(t, t.pendingLanes));
			var u = t.pendingLanes;
			if (
				(u === 0 && (hl = null),
				pi(l),
				(e = e.stateNode),
				ue && typeof ue.onCommitFiberRoot == "function")
			)
				try {
					ue.onCommitFiberRoot(za, e, void 0, (e.current.flags & 128) === 128);
				} catch {}
			if (a !== null) {
				((e = U.T), (u = X.p), (X.p = 2), (U.T = null));
				try {
					for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
						var r = a[c];
						n(r.value, { componentStack: r.stack });
					}
				} finally {
					((U.T = e), (X.p = u));
				}
			}
			(pa & 3 && Nn(),
				Ne(t),
				(u = t.pendingLanes),
				l & 4194090 && u & 42
					? t === Fc
						? hu++
						: ((hu = 0), (Fc = t))
					: (hu = 0),
				mu(0));
		}
	}
	function ud(t, e) {
		(t.pooledCacheLanes &= e) === 0 &&
			((e = t.pooledCache), e != null && ((t.pooledCache = null), Ja(e)));
	}
	function Nn(t) {
		return (ed(), ld(), ad(), nd());
	}
	function nd() {
		if (Vt !== 5) return !1;
		var t = ml,
			e = $c;
		$c = 0;
		var l = pi(pa),
			a = U.T,
			u = X.p;
		try {
			((X.p = 32 > l ? 32 : l), (U.T = null), (l = Wc), (Wc = null));
			var n = ml,
				c = pa;
			if (((Vt = 0), (ga = ml = null), (pa = 0), yt & 6)) throw Error(f(331));
			var r = yt;
			if (
				((yt |= 4),
				Xs(n.current),
				Ys(n, n.current, c, l),
				(yt = r),
				mu(0, !1),
				ue && typeof ue.onPostCommitFiberRoot == "function")
			)
				try {
					ue.onPostCommitFiberRoot(za, n);
				} catch {}
			return !0;
		} finally {
			((X.p = u), (U.T = a), ud(t, e));
		}
	}
	function id(t, e, l) {
		((e = ye(l, e)),
			(e = zc(t.stateNode, e, 2)),
			(t = ul(t, e, 2)),
			t !== null && (Na(t, 2), Ne(t)));
	}
	function Et(t, e, l) {
		if (t.tag === 3) id(t, t, l);
		else
			for (; e !== null; ) {
				if (e.tag === 3) {
					id(e, t, l);
					break;
				} else if (e.tag === 1) {
					var a = e.stateNode;
					if (
						typeof e.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(hl === null || !hl.has(a)))
					) {
						((t = ye(l, t)),
							(l = os(2)),
							(a = ul(e, l, 2)),
							a !== null && (ss(l, a, e, t), Na(a, 2), Ne(a)));
						break;
					}
				}
				e = e.return;
			}
	}
	function ef(t, e, l) {
		var a = t.pingCache;
		if (a === null) {
			a = t.pingCache = new gm();
			var u = new Set();
			a.set(e, u);
		} else ((u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u)));
		u.has(l) ||
			((Vc = !0), u.add(l), (t = Em.bind(null, t, e, l)), e.then(t, t));
	}
	function Em(t, e, l) {
		var a = t.pingCache;
		(a !== null && a.delete(e),
			(t.pingedLanes |= t.suspendedLanes & l),
			(t.warmLanes &= ~l),
			At === t &&
				(st & l) === l &&
				(Nt === 4 || (Nt === 3 && (st & 62914560) === st && 300 > Oe() - kc)
					? !(yt & 2) && Sa(t, 0)
					: (Kc |= l),
				va === st && (va = 0)),
			Ne(t));
	}
	function cd(t, e) {
		(e === 0 && (e = lr()), (t = ea(t, e)), t !== null && (Na(t, e), Ne(t)));
	}
	function Tm(t) {
		var e = t.memoizedState,
			l = 0;
		(e !== null && (l = e.retryLane), cd(t, l));
	}
	function Am(t, e) {
		var l = 0;
		switch (t.tag) {
			case 13:
				var a = t.stateNode,
					u = t.memoizedState;
				u !== null && (l = u.retryLane);
				break;
			case 19:
				a = t.stateNode;
				break;
			case 22:
				a = t.stateNode._retryCache;
				break;
			default:
				throw Error(f(314));
		}
		(a !== null && a.delete(e), cd(t, l));
	}
	function Rm(t, e) {
		return mi(t, e);
	}
	var Un = null,
		xa = null,
		lf = !1,
		Cn = !1,
		af = !1,
		Ll = 0;
	function Ne(t) {
		(t !== xa &&
			t.next === null &&
			(xa === null ? (Un = xa = t) : (xa = xa.next = t)),
			(Cn = !0),
			lf || ((lf = !0), Mm()));
	}
	function mu(t, e) {
		if (!af && Cn) {
			af = !0;
			do
				for (var l = !1, a = Un; a !== null; ) {
					if (t !== 0) {
						var u = a.pendingLanes;
						if (u === 0) var n = 0;
						else {
							var c = a.suspendedLanes,
								r = a.pingedLanes;
							((n = (1 << (31 - ne(42 | t) + 1)) - 1),
								(n &= u & ~(c & ~r)),
								(n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
						}
						n !== 0 && ((l = !0), sd(a, n));
					} else
						((n = st),
							(n = Bu(
								a,
								a === At ? n : 0,
								a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
							)),
							!(n & 3) || Da(a, n) || ((l = !0), sd(a, n)));
					a = a.next;
				}
			while (l);
			af = !1;
		}
	}
	function Om() {
		fd();
	}
	function fd() {
		Cn = lf = !1;
		var t = 0;
		Ll !== 0 && (Hm() && (t = Ll), (Ll = 0));
		for (var e = Oe(), l = null, a = Un; a !== null; ) {
			var u = a.next,
				n = rd(a, e);
			(n === 0
				? ((a.next = null),
					l === null ? (Un = u) : (l.next = u),
					u === null && (xa = l))
				: ((l = a), (t !== 0 || n & 3) && (Cn = !0)),
				(a = u));
		}
		mu(t);
	}
	function rd(t, e) {
		for (
			var l = t.suspendedLanes,
				a = t.pingedLanes,
				u = t.expirationTimes,
				n = t.pendingLanes & -62914561;
			0 < n;

		) {
			var c = 31 - ne(n),
				r = 1 << c,
				v = u[c];
			(v === -1
				? (!(r & l) || r & a) && (u[c] = Ph(r, e))
				: v <= e && (t.expiredLanes |= r),
				(n &= ~r));
		}
		if (
			((e = At),
			(l = st),
			(l = Bu(
				t,
				t === e ? l : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			(a = t.callbackNode),
			l === 0 ||
				(t === e && (vt === 2 || vt === 9)) ||
				t.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && yi(a),
				(t.callbackNode = null),
				(t.callbackPriority = 0)
			);
		if (!(l & 3) || Da(t, l)) {
			if (((e = l & -l), e === t.callbackPriority)) return e;
			switch ((a !== null && yi(a), pi(l))) {
				case 2:
				case 8:
					l = If;
					break;
				case 32:
					l = Hu;
					break;
				case 268435456:
					l = tr;
					break;
				default:
					l = Hu;
			}
			return (
				(a = od.bind(null, t)),
				(l = mi(l, a)),
				(t.callbackPriority = e),
				(t.callbackNode = l),
				e
			);
		}
		return (
			a !== null && a !== null && yi(a),
			(t.callbackPriority = 2),
			(t.callbackNode = null),
			2
		);
	}
	function od(t, e) {
		if (Vt !== 0 && Vt !== 5)
			return ((t.callbackNode = null), (t.callbackPriority = 0), null);
		var l = t.callbackNode;
		if (Nn() && t.callbackNode !== l) return null;
		var a = st;
		return (
			(a = Bu(
				t,
				t === At ? a : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			a === 0
				? null
				: (Ks(t, a, e),
					rd(t, Oe()),
					t.callbackNode != null && t.callbackNode === l
						? od.bind(null, t)
						: null)
		);
	}
	function sd(t, e) {
		if (Nn()) return null;
		Ks(t, e, !0);
	}
	function Mm() {
		qm(function () {
			yt & 6 ? mi(Pf, Om) : fd();
		});
	}
	function uf() {
		return (Ll === 0 && (Ll = er()), Ll);
	}
	function dd(t) {
		return t == null || typeof t == "symbol" || typeof t == "boolean"
			? null
			: typeof t == "function"
				? t
				: Qu("" + t);
	}
	function hd(t, e) {
		var l = e.ownerDocument.createElement("input");
		return (
			(l.name = e.name),
			(l.value = e.value),
			t.id && l.setAttribute("form", t.id),
			e.parentNode.insertBefore(l, e),
			(t = new FormData(t)),
			l.parentNode.removeChild(l),
			t
		);
	}
	function _m(t, e, l, a, u) {
		if (e === "submit" && l && l.stateNode === u) {
			var n = dd((u[Pt] || null).action),
				c = a.submitter;
			c &&
				((e = (e = c[Pt] || null)
					? dd(e.formAction)
					: c.getAttribute("formAction")),
				e !== null && ((n = e), (c = null)));
			var r = new Ju("action", "action", null, a, u);
			t.push({
				event: r,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (Ll !== 0) {
									var v = c ? hd(u, c) : new FormData(u);
									Ac(
										l,
										{ pending: !0, data: v, method: u.method, action: n },
										null,
										v,
									);
								}
							} else
								typeof n == "function" &&
									(r.preventDefault(),
									(v = c ? hd(u, c) : new FormData(u)),
									Ac(
										l,
										{ pending: !0, data: v, method: u.method, action: n },
										n,
										v,
									));
						},
						currentTarget: u,
					},
				],
			});
		}
	}
	for (var nf = 0; nf < Qi.length; nf++) {
		var cf = Qi[nf],
			zm = cf.toLowerCase(),
			Dm = cf[0].toUpperCase() + cf.slice(1);
		Ee(zm, "on" + Dm);
	}
	(Ee(Vr, "onAnimationEnd"),
		Ee(Kr, "onAnimationIteration"),
		Ee(Jr, "onAnimationStart"),
		Ee("dblclick", "onDoubleClick"),
		Ee("focusin", "onFocus"),
		Ee("focusout", "onBlur"),
		Ee(J0, "onTransitionRun"),
		Ee(k0, "onTransitionStart"),
		Ee($0, "onTransitionCancel"),
		Ee(kr, "onTransitionEnd"),
		Vl("onMouseEnter", ["mouseout", "mouseover"]),
		Vl("onMouseLeave", ["mouseout", "mouseover"]),
		Vl("onPointerEnter", ["pointerout", "pointerover"]),
		Vl("onPointerLeave", ["pointerout", "pointerover"]),
		Al(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		Al(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		Al("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		Al(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		Al(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		Al(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		));
	var yu =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Nm = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(yu),
		);
	function md(t, e) {
		e = (e & 4) !== 0;
		for (var l = 0; l < t.length; l++) {
			var a = t[l],
				u = a.event;
			a = a.listeners;
			t: {
				var n = void 0;
				if (e)
					for (var c = a.length - 1; 0 <= c; c--) {
						var r = a[c],
							v = r.instance,
							O = r.currentTarget;
						if (((r = r.listener), v !== n && u.isPropagationStopped()))
							break t;
						((n = r), (u.currentTarget = O));
						try {
							n(u);
						} catch (j) {
							bn(j);
						}
						((u.currentTarget = null), (n = v));
					}
				else
					for (c = 0; c < a.length; c++) {
						if (
							((r = a[c]),
							(v = r.instance),
							(O = r.currentTarget),
							(r = r.listener),
							v !== n && u.isPropagationStopped())
						)
							break t;
						((n = r), (u.currentTarget = O));
						try {
							n(u);
						} catch (j) {
							bn(j);
						}
						((u.currentTarget = null), (n = v));
					}
			}
		}
	}
	function rt(t, e) {
		var l = e[Si];
		l === void 0 && (l = e[Si] = new Set());
		var a = t + "__bubble";
		l.has(a) || (yd(e, t, 2, !1), l.add(a));
	}
	function ff(t, e, l) {
		var a = 0;
		(e && (a |= 4), yd(l, t, a, e));
	}
	var jn = "_reactListening" + Math.random().toString(36).slice(2);
	function rf(t) {
		if (!t[jn]) {
			((t[jn] = !0),
				cr.forEach(function (l) {
					l !== "selectionchange" && (Nm.has(l) || ff(l, !1, t), ff(l, !0, t));
				}));
			var e = t.nodeType === 9 ? t : t.ownerDocument;
			e === null || e[jn] || ((e[jn] = !0), ff("selectionchange", !1, e));
		}
	}
	function yd(t, e, l, a) {
		switch (Yd(e)) {
			case 2:
				var u = uy;
				break;
			case 8:
				u = ny;
				break;
			default:
				u = Tf;
		}
		((l = u.bind(null, e, l, t)),
			(u = void 0),
			!Di ||
				(e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
				(u = !0),
			a
				? u !== void 0
					? t.addEventListener(e, l, { capture: !0, passive: u })
					: t.addEventListener(e, l, !0)
				: u !== void 0
					? t.addEventListener(e, l, { passive: u })
					: t.addEventListener(e, l, !1));
	}
	function of(t, e, l, a, u) {
		var n = a;
		if (!(e & 1) && !(e & 2) && a !== null)
			t: for (;;) {
				if (a === null) return;
				var c = a.tag;
				if (c === 3 || c === 4) {
					var r = a.stateNode.containerInfo;
					if (r === u) break;
					if (c === 4)
						for (c = a.return; c !== null; ) {
							var v = c.tag;
							if ((v === 3 || v === 4) && c.stateNode.containerInfo === u)
								return;
							c = c.return;
						}
					for (; r !== null; ) {
						if (((c = Xl(r)), c === null)) return;
						if (((v = c.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
							a = n = c;
							continue t;
						}
						r = r.parentNode;
					}
				}
				a = a.return;
			}
		xr(function () {
			var O = n,
				j = _i(l),
				w = [];
			t: {
				var M = $r.get(t);
				if (M !== void 0) {
					var _ = Ju,
						tt = t;
					switch (t) {
						case "keypress":
							if (Vu(l) === 0) break t;
						case "keydown":
						case "keyup":
							_ = R0;
							break;
						case "focusin":
							((tt = "focus"), (_ = ji));
							break;
						case "focusout":
							((tt = "blur"), (_ = ji));
							break;
						case "beforeblur":
						case "afterblur":
							_ = ji;
							break;
						case "click":
							if (l.button === 2) break t;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							_ = Ar;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							_ = h0;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							_ = _0;
							break;
						case Vr:
						case Kr:
						case Jr:
							_ = v0;
							break;
						case kr:
							_ = D0;
							break;
						case "scroll":
						case "scrollend":
							_ = s0;
							break;
						case "wheel":
							_ = U0;
							break;
						case "copy":
						case "cut":
						case "paste":
							_ = p0;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							_ = Or;
							break;
						case "toggle":
						case "beforetoggle":
							_ = j0;
					}
					var F = (e & 4) !== 0,
						St = !F && (t === "scroll" || t === "scrollend"),
						A = F ? (M !== null ? M + "Capture" : null) : M;
					F = [];
					for (var E = O, R; E !== null; ) {
						var H = E;
						if (
							((R = H.stateNode),
							(H = H.tag),
							(H !== 5 && H !== 26 && H !== 27) ||
								R === null ||
								A === null ||
								((H = ja(E, A)), H != null && F.push(vu(E, H, R))),
							St)
						)
							break;
						E = E.return;
					}
					0 < F.length &&
						((M = new _(M, tt, null, l, j)),
						w.push({ event: M, listeners: F }));
				}
			}
			if (!(e & 7)) {
				t: {
					if (
						((M = t === "mouseover" || t === "pointerover"),
						(_ = t === "mouseout" || t === "pointerout"),
						M &&
							l !== Mi &&
							(tt = l.relatedTarget || l.fromElement) &&
							(Xl(tt) || tt[Gl]))
					)
						break t;
					if (
						(_ || M) &&
						((M =
							j.window === j
								? j
								: (M = j.ownerDocument)
									? M.defaultView || M.parentWindow
									: window),
						_
							? ((tt = l.relatedTarget || l.toElement),
								(_ = O),
								(tt = tt ? Xl(tt) : null),
								tt !== null &&
									((St = y(tt)),
									(F = tt.tag),
									tt !== St || (F !== 5 && F !== 27 && F !== 6)) &&
									(tt = null))
							: ((_ = null), (tt = O)),
						_ !== tt)
					) {
						if (
							((F = Ar),
							(H = "onMouseLeave"),
							(A = "onMouseEnter"),
							(E = "mouse"),
							(t === "pointerout" || t === "pointerover") &&
								((F = Or),
								(H = "onPointerLeave"),
								(A = "onPointerEnter"),
								(E = "pointer")),
							(St = _ == null ? M : Ca(_)),
							(R = tt == null ? M : Ca(tt)),
							(M = new F(H, E + "leave", _, l, j)),
							(M.target = St),
							(M.relatedTarget = R),
							(H = null),
							Xl(j) === O &&
								((F = new F(A, E + "enter", tt, l, j)),
								(F.target = R),
								(F.relatedTarget = St),
								(H = F)),
							(St = H),
							_ && tt)
						)
							e: {
								for (F = _, A = tt, E = 0, R = F; R; R = Ea(R)) E++;
								for (R = 0, H = A; H; H = Ea(H)) R++;
								for (; 0 < E - R; ) ((F = Ea(F)), E--);
								for (; 0 < R - E; ) ((A = Ea(A)), R--);
								for (; E--; ) {
									if (F === A || (A !== null && F === A.alternate)) break e;
									((F = Ea(F)), (A = Ea(A)));
								}
								F = null;
							}
						else F = null;
						(_ !== null && vd(w, M, _, F, !1),
							tt !== null && St !== null && vd(w, St, tt, F, !0));
					}
				}
				t: {
					if (
						((M = O ? Ca(O) : window),
						(_ = M.nodeName && M.nodeName.toLowerCase()),
						_ === "select" || (_ === "input" && M.type === "file"))
					)
						var K = jr;
					else if (Ur(M))
						if (Hr) K = Z0;
						else {
							K = X0;
							var it = G0;
						}
					else
						((_ = M.nodeName),
							!_ ||
							_.toLowerCase() !== "input" ||
							(M.type !== "checkbox" && M.type !== "radio")
								? O && Oi(O.elementType) && (K = jr)
								: (K = Q0));
					if (K && (K = K(t, O))) {
						Cr(w, K, l, j);
						break t;
					}
					(it && it(t, M, O),
						t === "focusout" &&
							O &&
							M.type === "number" &&
							O.memoizedProps.value != null &&
							Ri(M, "number", M.value));
				}
				switch (((it = O ? Ca(O) : window), t)) {
					case "focusin":
						(Ur(it) || it.contentEditable === "true") &&
							((Pl = it), (Li = O), (Xa = null));
						break;
					case "focusout":
						Xa = Li = Pl = null;
						break;
					case "mousedown":
						Gi = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						((Gi = !1), Qr(w, l, j));
						break;
					case "selectionchange":
						if (K0) break;
					case "keydown":
					case "keyup":
						Qr(w, l, j);
				}
				var k;
				if (wi)
					t: {
						switch (t) {
							case "compositionstart":
								var P = "onCompositionStart";
								break t;
							case "compositionend":
								P = "onCompositionEnd";
								break t;
							case "compositionupdate":
								P = "onCompositionUpdate";
								break t;
						}
						P = void 0;
					}
				else
					Fl
						? Dr(t, l) && (P = "onCompositionEnd")
						: t === "keydown" &&
							l.keyCode === 229 &&
							(P = "onCompositionStart");
				(P &&
					(Mr &&
						l.locale !== "ko" &&
						(Fl || P !== "onCompositionStart"
							? P === "onCompositionEnd" && Fl && (k = Er())
							: ((tl = j),
								(Ni = "value" in tl ? tl.value : tl.textContent),
								(Fl = !0))),
					(it = Hn(O, P)),
					0 < it.length &&
						((P = new Rr(P, t, null, l, j)),
						w.push({ event: P, listeners: it }),
						k ? (P.data = k) : ((k = Nr(l)), k !== null && (P.data = k)))),
					(k = w0 ? q0(t, l) : B0(t, l)) &&
						((P = Hn(O, "onBeforeInput")),
						0 < P.length &&
							((it = new Rr("onBeforeInput", "beforeinput", null, l, j)),
							w.push({ event: it, listeners: P }),
							(it.data = k))),
					_m(w, t, O, l, j));
			}
			md(w, e);
		});
	}
	function vu(t, e, l) {
		return { instance: t, listener: e, currentTarget: l };
	}
	function Hn(t, e) {
		for (var l = e + "Capture", a = []; t !== null; ) {
			var u = t,
				n = u.stateNode;
			if (
				((u = u.tag),
				(u !== 5 && u !== 26 && u !== 27) ||
					n === null ||
					((u = ja(t, l)),
					u != null && a.unshift(vu(t, u, n)),
					(u = ja(t, e)),
					u != null && a.push(vu(t, u, n))),
				t.tag === 3)
			)
				return a;
			t = t.return;
		}
		return [];
	}
	function Ea(t) {
		if (t === null) return null;
		do t = t.return;
		while (t && t.tag !== 5 && t.tag !== 27);
		return t || null;
	}
	function vd(t, e, l, a, u) {
		for (var n = e._reactName, c = []; l !== null && l !== a; ) {
			var r = l,
				v = r.alternate,
				O = r.stateNode;
			if (((r = r.tag), v !== null && v === a)) break;
			((r !== 5 && r !== 26 && r !== 27) ||
				O === null ||
				((v = O),
				u
					? ((O = ja(l, n)), O != null && c.unshift(vu(l, O, v)))
					: u || ((O = ja(l, n)), O != null && c.push(vu(l, O, v)))),
				(l = l.return));
		}
		c.length !== 0 && t.push({ event: e, listeners: c });
	}
	var Um = /\r\n?/g,
		Cm = /\u0000|\uFFFD/g;
	function gd(t) {
		return (typeof t == "string" ? t : "" + t)
			.replace(
				Um,
				`
`,
			)
			.replace(Cm, "");
	}
	function pd(t, e) {
		return ((e = gd(e)), gd(t) === e);
	}
	function wn() {}
	function pt(t, e, l, a, u, n) {
		switch (l) {
			case "children":
				typeof a == "string"
					? e === "body" || (e === "textarea" && a === "") || kl(t, a)
					: (typeof a == "number" || typeof a == "bigint") &&
						e !== "body" &&
						kl(t, "" + a);
				break;
			case "className":
				Lu(t, "class", a);
				break;
			case "tabIndex":
				Lu(t, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Lu(t, l, a);
				break;
			case "style":
				Sr(t, a, n);
				break;
			case "data":
				if (e !== "object") {
					Lu(t, "data", a);
					break;
				}
			case "src":
			case "href":
				if (a === "" && (e !== "a" || l !== "href")) {
					t.removeAttribute(l);
					break;
				}
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					t.removeAttribute(l);
					break;
				}
				((a = Qu("" + a)), t.setAttribute(l, a));
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					t.setAttribute(
						l,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else
					typeof n == "function" &&
						(l === "formAction"
							? (e !== "input" && pt(t, e, "name", u.name, u, null),
								pt(t, e, "formEncType", u.formEncType, u, null),
								pt(t, e, "formMethod", u.formMethod, u, null),
								pt(t, e, "formTarget", u.formTarget, u, null))
							: (pt(t, e, "encType", u.encType, u, null),
								pt(t, e, "method", u.method, u, null),
								pt(t, e, "target", u.target, u, null)));
				if (a == null || typeof a == "symbol" || typeof a == "boolean") {
					t.removeAttribute(l);
					break;
				}
				((a = Qu("" + a)), t.setAttribute(l, a));
				break;
			case "onClick":
				a != null && (t.onclick = wn);
				break;
			case "onScroll":
				a != null && rt("scroll", t);
				break;
			case "onScrollEnd":
				a != null && rt("scrollend", t);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
					if (((l = a.__html), l != null)) {
						if (u.children != null) throw Error(f(60));
						t.innerHTML = l;
					}
				}
				break;
			case "multiple":
				t.multiple = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				t.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "boolean" ||
					typeof a == "symbol"
				) {
					t.removeAttribute("xlink:href");
					break;
				}
				((l = Qu("" + a)),
					t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol"
					? t.setAttribute(l, "" + a)
					: t.removeAttribute(l);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol"
					? t.setAttribute(l, "")
					: t.removeAttribute(l);
				break;
			case "capture":
			case "download":
				a === !0
					? t.setAttribute(l, "")
					: a !== !1 &&
						  a != null &&
						  typeof a != "function" &&
						  typeof a != "symbol"
						? t.setAttribute(l, a)
						: t.removeAttribute(l);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null &&
				typeof a != "function" &&
				typeof a != "symbol" &&
				!isNaN(a) &&
				1 <= a
					? t.setAttribute(l, a)
					: t.removeAttribute(l);
				break;
			case "rowSpan":
			case "start":
				a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
					? t.removeAttribute(l)
					: t.setAttribute(l, a);
				break;
			case "popover":
				(rt("beforetoggle", t), rt("toggle", t), Yu(t, "popover", a));
				break;
			case "xlinkActuate":
				je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				je(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				je(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				je(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				je(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				Yu(t, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < l.length) ||
					(l[0] !== "o" && l[0] !== "O") ||
					(l[1] !== "n" && l[1] !== "N")) &&
					((l = r0.get(l) || l), Yu(t, l, a));
		}
	}
	function sf(t, e, l, a, u, n) {
		switch (l) {
			case "style":
				Sr(t, a, n);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
					if (((l = a.__html), l != null)) {
						if (u.children != null) throw Error(f(60));
						t.innerHTML = l;
					}
				}
				break;
			case "children":
				typeof a == "string"
					? kl(t, a)
					: (typeof a == "number" || typeof a == "bigint") && kl(t, "" + a);
				break;
			case "onScroll":
				a != null && rt("scroll", t);
				break;
			case "onScrollEnd":
				a != null && rt("scrollend", t);
				break;
			case "onClick":
				a != null && (t.onclick = wn);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!fr.hasOwnProperty(l))
					t: {
						if (
							l[0] === "o" &&
							l[1] === "n" &&
							((u = l.endsWith("Capture")),
							(e = l.slice(2, u ? l.length - 7 : void 0)),
							(n = t[Pt] || null),
							(n = n != null ? n[l] : null),
							typeof n == "function" && t.removeEventListener(e, n, u),
							typeof a == "function")
						) {
							(typeof n != "function" &&
								n !== null &&
								(l in t
									? (t[l] = null)
									: t.hasAttribute(l) && t.removeAttribute(l)),
								t.addEventListener(e, a, u));
							break t;
						}
						l in t
							? (t[l] = a)
							: a === !0
								? t.setAttribute(l, "")
								: Yu(t, l, a);
					}
		}
	}
	function Kt(t, e, l) {
		switch (e) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				(rt("error", t), rt("load", t));
				var a = !1,
					u = !1,
					n;
				for (n in l)
					if (l.hasOwnProperty(n)) {
						var c = l[n];
						if (c != null)
							switch (n) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									u = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(f(137, e));
								default:
									pt(t, e, n, c, l, null);
							}
					}
				(u && pt(t, e, "srcSet", l.srcSet, l, null),
					a && pt(t, e, "src", l.src, l, null));
				return;
			case "input":
				rt("invalid", t);
				var r = (n = c = u = null),
					v = null,
					O = null;
				for (a in l)
					if (l.hasOwnProperty(a)) {
						var j = l[a];
						if (j != null)
							switch (a) {
								case "name":
									u = j;
									break;
								case "type":
									c = j;
									break;
								case "checked":
									v = j;
									break;
								case "defaultChecked":
									O = j;
									break;
								case "value":
									n = j;
									break;
								case "defaultValue":
									r = j;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (j != null) throw Error(f(137, e));
									break;
								default:
									pt(t, e, a, j, l, null);
							}
					}
				(yr(t, n, r, v, O, c, u, !1), Gu(t));
				return;
			case "select":
				(rt("invalid", t), (a = c = n = null));
				for (u in l)
					if (l.hasOwnProperty(u) && ((r = l[u]), r != null))
						switch (u) {
							case "value":
								n = r;
								break;
							case "defaultValue":
								c = r;
								break;
							case "multiple":
								a = r;
							default:
								pt(t, e, u, r, l, null);
						}
				((e = n),
					(l = c),
					(t.multiple = !!a),
					e != null ? Jl(t, !!a, e, !1) : l != null && Jl(t, !!a, l, !0));
				return;
			case "textarea":
				(rt("invalid", t), (n = u = a = null));
				for (c in l)
					if (l.hasOwnProperty(c) && ((r = l[c]), r != null))
						switch (c) {
							case "value":
								a = r;
								break;
							case "defaultValue":
								u = r;
								break;
							case "children":
								n = r;
								break;
							case "dangerouslySetInnerHTML":
								if (r != null) throw Error(f(91));
								break;
							default:
								pt(t, e, c, r, l, null);
						}
				(gr(t, a, u, n), Gu(t));
				return;
			case "option":
				for (v in l)
					if (l.hasOwnProperty(v) && ((a = l[v]), a != null))
						switch (v) {
							case "selected":
								t.selected =
									a && typeof a != "function" && typeof a != "symbol";
								break;
							default:
								pt(t, e, v, a, l, null);
						}
				return;
			case "dialog":
				(rt("beforetoggle", t),
					rt("toggle", t),
					rt("cancel", t),
					rt("close", t));
				break;
			case "iframe":
			case "object":
				rt("load", t);
				break;
			case "video":
			case "audio":
				for (a = 0; a < yu.length; a++) rt(yu[a], t);
				break;
			case "image":
				(rt("error", t), rt("load", t));
				break;
			case "details":
				rt("toggle", t);
				break;
			case "embed":
			case "source":
			case "link":
				(rt("error", t), rt("load", t));
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (O in l)
					if (l.hasOwnProperty(O) && ((a = l[O]), a != null))
						switch (O) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(f(137, e));
							default:
								pt(t, e, O, a, l, null);
						}
				return;
			default:
				if (Oi(e)) {
					for (j in l)
						l.hasOwnProperty(j) &&
							((a = l[j]), a !== void 0 && sf(t, e, j, a, l, void 0));
					return;
				}
		}
		for (r in l)
			l.hasOwnProperty(r) && ((a = l[r]), a != null && pt(t, e, r, a, l, null));
	}
	function jm(t, e, l, a) {
		switch (e) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var u = null,
					n = null,
					c = null,
					r = null,
					v = null,
					O = null,
					j = null;
				for (_ in l) {
					var w = l[_];
					if (l.hasOwnProperty(_) && w != null)
						switch (_) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								v = w;
							default:
								a.hasOwnProperty(_) || pt(t, e, _, null, a, w);
						}
				}
				for (var M in a) {
					var _ = a[M];
					if (((w = l[M]), a.hasOwnProperty(M) && (_ != null || w != null)))
						switch (M) {
							case "type":
								n = _;
								break;
							case "name":
								u = _;
								break;
							case "checked":
								O = _;
								break;
							case "defaultChecked":
								j = _;
								break;
							case "value":
								c = _;
								break;
							case "defaultValue":
								r = _;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (_ != null) throw Error(f(137, e));
								break;
							default:
								_ !== w && pt(t, e, M, _, a, w);
						}
				}
				Ai(t, c, r, v, O, j, n, u);
				return;
			case "select":
				_ = c = r = M = null;
				for (n in l)
					if (((v = l[n]), l.hasOwnProperty(n) && v != null))
						switch (n) {
							case "value":
								break;
							case "multiple":
								_ = v;
							default:
								a.hasOwnProperty(n) || pt(t, e, n, null, a, v);
						}
				for (u in a)
					if (
						((n = a[u]),
						(v = l[u]),
						a.hasOwnProperty(u) && (n != null || v != null))
					)
						switch (u) {
							case "value":
								M = n;
								break;
							case "defaultValue":
								r = n;
								break;
							case "multiple":
								c = n;
							default:
								n !== v && pt(t, e, u, n, a, v);
						}
				((e = r),
					(l = c),
					(a = _),
					M != null
						? Jl(t, !!l, M, !1)
						: !!a != !!l &&
							(e != null ? Jl(t, !!l, e, !0) : Jl(t, !!l, l ? [] : "", !1)));
				return;
			case "textarea":
				_ = M = null;
				for (r in l)
					if (
						((u = l[r]),
						l.hasOwnProperty(r) && u != null && !a.hasOwnProperty(r))
					)
						switch (r) {
							case "value":
								break;
							case "children":
								break;
							default:
								pt(t, e, r, null, a, u);
						}
				for (c in a)
					if (
						((u = a[c]),
						(n = l[c]),
						a.hasOwnProperty(c) && (u != null || n != null))
					)
						switch (c) {
							case "value":
								M = u;
								break;
							case "defaultValue":
								_ = u;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(f(91));
								break;
							default:
								u !== n && pt(t, e, c, u, a, n);
						}
				vr(t, M, _);
				return;
			case "option":
				for (var tt in l)
					if (
						((M = l[tt]),
						l.hasOwnProperty(tt) && M != null && !a.hasOwnProperty(tt))
					)
						switch (tt) {
							case "selected":
								t.selected = !1;
								break;
							default:
								pt(t, e, tt, null, a, M);
						}
				for (v in a)
					if (
						((M = a[v]),
						(_ = l[v]),
						a.hasOwnProperty(v) && M !== _ && (M != null || _ != null))
					)
						switch (v) {
							case "selected":
								t.selected =
									M && typeof M != "function" && typeof M != "symbol";
								break;
							default:
								pt(t, e, v, M, a, _);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var F in l)
					((M = l[F]),
						l.hasOwnProperty(F) &&
							M != null &&
							!a.hasOwnProperty(F) &&
							pt(t, e, F, null, a, M));
				for (O in a)
					if (
						((M = a[O]),
						(_ = l[O]),
						a.hasOwnProperty(O) && M !== _ && (M != null || _ != null))
					)
						switch (O) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (M != null) throw Error(f(137, e));
								break;
							default:
								pt(t, e, O, M, a, _);
						}
				return;
			default:
				if (Oi(e)) {
					for (var St in l)
						((M = l[St]),
							l.hasOwnProperty(St) &&
								M !== void 0 &&
								!a.hasOwnProperty(St) &&
								sf(t, e, St, void 0, a, M));
					for (j in a)
						((M = a[j]),
							(_ = l[j]),
							!a.hasOwnProperty(j) ||
								M === _ ||
								(M === void 0 && _ === void 0) ||
								sf(t, e, j, M, a, _));
					return;
				}
		}
		for (var A in l)
			((M = l[A]),
				l.hasOwnProperty(A) &&
					M != null &&
					!a.hasOwnProperty(A) &&
					pt(t, e, A, null, a, M));
		for (w in a)
			((M = a[w]),
				(_ = l[w]),
				!a.hasOwnProperty(w) ||
					M === _ ||
					(M == null && _ == null) ||
					pt(t, e, w, M, a, _));
	}
	var df = null,
		hf = null;
	function qn(t) {
		return t.nodeType === 9 ? t : t.ownerDocument;
	}
	function Sd(t) {
		switch (t) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function bd(t, e) {
		if (t === 0)
			switch (e) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return t === 1 && e === "foreignObject" ? 0 : t;
	}
	function mf(t, e) {
		return (
			t === "textarea" ||
			t === "noscript" ||
			typeof e.children == "string" ||
			typeof e.children == "number" ||
			typeof e.children == "bigint" ||
			(typeof e.dangerouslySetInnerHTML == "object" &&
				e.dangerouslySetInnerHTML !== null &&
				e.dangerouslySetInnerHTML.__html != null)
		);
	}
	var yf = null;
	function Hm() {
		var t = window.event;
		return t && t.type === "popstate"
			? t === yf
				? !1
				: ((yf = t), !0)
			: ((yf = null), !1);
	}
	var xd = typeof setTimeout == "function" ? setTimeout : void 0,
		wm = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Ed = typeof Promise == "function" ? Promise : void 0,
		qm =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof Ed < "u"
					? function (t) {
							return Ed.resolve(null).then(t).catch(Bm);
						}
					: xd;
	function Bm(t) {
		setTimeout(function () {
			throw t;
		});
	}
	function vl(t) {
		return t === "head";
	}
	function Td(t, e) {
		var l = e,
			a = 0,
			u = 0;
		do {
			var n = l.nextSibling;
			if ((t.removeChild(l), n && n.nodeType === 8))
				if (((l = n.data), l === "/$")) {
					if (0 < a && 8 > a) {
						l = a;
						var c = t.ownerDocument;
						if ((l & 1 && gu(c.documentElement), l & 2 && gu(c.body), l & 4))
							for (l = c.head, gu(l), c = l.firstChild; c; ) {
								var r = c.nextSibling,
									v = c.nodeName;
								(c[Ua] ||
									v === "SCRIPT" ||
									v === "STYLE" ||
									(v === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
									l.removeChild(c),
									(c = r));
							}
					}
					if (u === 0) {
						(t.removeChild(n), Ru(e));
						return;
					}
					u--;
				} else
					l === "$" || l === "$?" || l === "$!"
						? u++
						: (a = l.charCodeAt(0) - 48);
			else a = 0;
			l = n;
		} while (l);
		Ru(e);
	}
	function vf(t) {
		var e = t.firstChild;
		for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
			var l = e;
			switch (((e = e.nextSibling), l.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					(vf(l), bi(l));
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (l.rel.toLowerCase() === "stylesheet") continue;
			}
			t.removeChild(l);
		}
	}
	function Ym(t, e, l, a) {
		for (; t.nodeType === 1; ) {
			var u = l;
			if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
				if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
			} else if (a) {
				if (!t[Ua])
					switch (e) {
						case "meta":
							if (!t.hasAttribute("itemprop")) break;
							return t;
						case "link":
							if (
								((n = t.getAttribute("rel")),
								n === "stylesheet" && t.hasAttribute("data-precedence"))
							)
								break;
							if (
								n !== u.rel ||
								t.getAttribute("href") !==
									(u.href == null || u.href === "" ? null : u.href) ||
								t.getAttribute("crossorigin") !==
									(u.crossOrigin == null ? null : u.crossOrigin) ||
								t.getAttribute("title") !== (u.title == null ? null : u.title)
							)
								break;
							return t;
						case "style":
							if (t.hasAttribute("data-precedence")) break;
							return t;
						case "script":
							if (
								((n = t.getAttribute("src")),
								(n !== (u.src == null ? null : u.src) ||
									t.getAttribute("type") !== (u.type == null ? null : u.type) ||
									t.getAttribute("crossorigin") !==
										(u.crossOrigin == null ? null : u.crossOrigin)) &&
									n &&
									t.hasAttribute("async") &&
									!t.hasAttribute("itemprop"))
							)
								break;
							return t;
						default:
							return t;
					}
			} else if (e === "input" && t.type === "hidden") {
				var n = u.name == null ? null : "" + u.name;
				if (u.type === "hidden" && t.getAttribute("name") === n) return t;
			} else return t;
			if (((t = Ae(t.nextSibling)), t === null)) break;
		}
		return null;
	}
	function Lm(t, e, l) {
		if (e === "") return null;
		for (; t.nodeType !== 3; )
			if (
				((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
					!l) ||
				((t = Ae(t.nextSibling)), t === null)
			)
				return null;
		return t;
	}
	function gf(t) {
		return (
			t.data === "$!" ||
			(t.data === "$?" && t.ownerDocument.readyState === "complete")
		);
	}
	function Gm(t, e) {
		var l = t.ownerDocument;
		if (t.data !== "$?" || l.readyState === "complete") e();
		else {
			var a = function () {
				(e(), l.removeEventListener("DOMContentLoaded", a));
			};
			(l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
		}
	}
	function Ae(t) {
		for (; t != null; t = t.nextSibling) {
			var e = t.nodeType;
			if (e === 1 || e === 3) break;
			if (e === 8) {
				if (
					((e = t.data),
					e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
				)
					break;
				if (e === "/$") return null;
			}
		}
		return t;
	}
	var pf = null;
	function Ad(t) {
		t = t.previousSibling;
		for (var e = 0; t; ) {
			if (t.nodeType === 8) {
				var l = t.data;
				if (l === "$" || l === "$!" || l === "$?") {
					if (e === 0) return t;
					e--;
				} else l === "/$" && e++;
			}
			t = t.previousSibling;
		}
		return null;
	}
	function Rd(t, e, l) {
		switch (((e = qn(l)), t)) {
			case "html":
				if (((t = e.documentElement), !t)) throw Error(f(452));
				return t;
			case "head":
				if (((t = e.head), !t)) throw Error(f(453));
				return t;
			case "body":
				if (((t = e.body), !t)) throw Error(f(454));
				return t;
			default:
				throw Error(f(451));
		}
	}
	function gu(t) {
		for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
		bi(t);
	}
	var xe = new Map(),
		Od = new Set();
	function Bn(t) {
		return typeof t.getRootNode == "function"
			? t.getRootNode()
			: t.nodeType === 9
				? t
				: t.ownerDocument;
	}
	var ke = X.d;
	X.d = { f: Xm, r: Qm, D: Zm, C: Vm, L: Km, m: Jm, X: $m, S: km, M: Wm };
	function Xm() {
		var t = ke.f(),
			e = zn();
		return t || e;
	}
	function Qm(t) {
		var e = Ql(t);
		e !== null && e.tag === 5 && e.type === "form" ? Ko(e) : ke.r(t);
	}
	var Ta = typeof document > "u" ? null : document;
	function Md(t, e, l) {
		var a = Ta;
		if (a && typeof e == "string" && e) {
			var u = me(e);
			((u = 'link[rel="' + t + '"][href="' + u + '"]'),
				typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
				Od.has(u) ||
					(Od.add(u),
					(t = { rel: t, crossOrigin: l, href: e }),
					a.querySelector(u) === null &&
						((e = a.createElement("link")),
						Kt(e, "link", t),
						Lt(e),
						a.head.appendChild(e))));
		}
	}
	function Zm(t) {
		(ke.D(t), Md("dns-prefetch", t, null));
	}
	function Vm(t, e) {
		(ke.C(t, e), Md("preconnect", t, e));
	}
	function Km(t, e, l) {
		ke.L(t, e, l);
		var a = Ta;
		if (a && t && e) {
			var u = 'link[rel="preload"][as="' + me(e) + '"]';
			e === "image" && l && l.imageSrcSet
				? ((u += '[imagesrcset="' + me(l.imageSrcSet) + '"]'),
					typeof l.imageSizes == "string" &&
						(u += '[imagesizes="' + me(l.imageSizes) + '"]'))
				: (u += '[href="' + me(t) + '"]');
			var n = u;
			switch (e) {
				case "style":
					n = Aa(t);
					break;
				case "script":
					n = Ra(t);
			}
			xe.has(n) ||
				((t = p(
					{
						rel: "preload",
						href: e === "image" && l && l.imageSrcSet ? void 0 : t,
						as: e,
					},
					l,
				)),
				xe.set(n, t),
				a.querySelector(u) !== null ||
					(e === "style" && a.querySelector(pu(n))) ||
					(e === "script" && a.querySelector(Su(n))) ||
					((e = a.createElement("link")),
					Kt(e, "link", t),
					Lt(e),
					a.head.appendChild(e)));
		}
	}
	function Jm(t, e) {
		ke.m(t, e);
		var l = Ta;
		if (l && t) {
			var a = e && typeof e.as == "string" ? e.as : "script",
				u =
					'link[rel="modulepreload"][as="' + me(a) + '"][href="' + me(t) + '"]',
				n = u;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					n = Ra(t);
			}
			if (
				!xe.has(n) &&
				((t = p({ rel: "modulepreload", href: t }, e)),
				xe.set(n, t),
				l.querySelector(u) === null)
			) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (l.querySelector(Su(n))) return;
				}
				((a = l.createElement("link")),
					Kt(a, "link", t),
					Lt(a),
					l.head.appendChild(a));
			}
		}
	}
	function km(t, e, l) {
		ke.S(t, e, l);
		var a = Ta;
		if (a && t) {
			var u = Zl(a).hoistableStyles,
				n = Aa(t);
			e = e || "default";
			var c = u.get(n);
			if (!c) {
				var r = { loading: 0, preload: null };
				if ((c = a.querySelector(pu(n)))) r.loading = 5;
				else {
					((t = p({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
						(l = xe.get(n)) && Sf(t, l));
					var v = (c = a.createElement("link"));
					(Lt(v),
						Kt(v, "link", t),
						(v._p = new Promise(function (O, j) {
							((v.onload = O), (v.onerror = j));
						})),
						v.addEventListener("load", function () {
							r.loading |= 1;
						}),
						v.addEventListener("error", function () {
							r.loading |= 2;
						}),
						(r.loading |= 4),
						Yn(c, e, a));
				}
				((c = { type: "stylesheet", instance: c, count: 1, state: r }),
					u.set(n, c));
			}
		}
	}
	function $m(t, e) {
		ke.X(t, e);
		var l = Ta;
		if (l && t) {
			var a = Zl(l).hoistableScripts,
				u = Ra(t),
				n = a.get(u);
			n ||
				((n = l.querySelector(Su(u))),
				n ||
					((t = p({ src: t, async: !0 }, e)),
					(e = xe.get(u)) && bf(t, e),
					(n = l.createElement("script")),
					Lt(n),
					Kt(n, "link", t),
					l.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function Wm(t, e) {
		ke.M(t, e);
		var l = Ta;
		if (l && t) {
			var a = Zl(l).hoistableScripts,
				u = Ra(t),
				n = a.get(u);
			n ||
				((n = l.querySelector(Su(u))),
				n ||
					((t = p({ src: t, async: !0, type: "module" }, e)),
					(e = xe.get(u)) && bf(t, e),
					(n = l.createElement("script")),
					Lt(n),
					Kt(n, "link", t),
					l.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function _d(t, e, l, a) {
		var u = (u = et.current) ? Bn(u) : null;
		if (!u) throw Error(f(446));
		switch (t) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof l.precedence == "string" && typeof l.href == "string"
					? ((e = Aa(l.href)),
						(l = Zl(u).hoistableStyles),
						(a = l.get(e)),
						a ||
							((a = { type: "style", instance: null, count: 0, state: null }),
							l.set(e, a)),
						a)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					l.rel === "stylesheet" &&
					typeof l.href == "string" &&
					typeof l.precedence == "string"
				) {
					t = Aa(l.href);
					var n = Zl(u).hoistableStyles,
						c = n.get(t);
					if (
						(c ||
							((u = u.ownerDocument || u),
							(c = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							n.set(t, c),
							(n = u.querySelector(pu(t))) &&
								!n._p &&
								((c.instance = n), (c.state.loading = 5)),
							xe.has(t) ||
								((l = {
									rel: "preload",
									as: "style",
									href: l.href,
									crossOrigin: l.crossOrigin,
									integrity: l.integrity,
									media: l.media,
									hrefLang: l.hrefLang,
									referrerPolicy: l.referrerPolicy,
								}),
								xe.set(t, l),
								n || Fm(u, t, l, c.state))),
						e && a === null)
					)
						throw Error(f(528, ""));
					return c;
				}
				if (e && a !== null) throw Error(f(529, ""));
				return null;
			case "script":
				return (
					(e = l.async),
					(l = l.src),
					typeof l == "string" &&
					e &&
					typeof e != "function" &&
					typeof e != "symbol"
						? ((e = Ra(l)),
							(l = Zl(u).hoistableScripts),
							(a = l.get(e)),
							a ||
								((a = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								l.set(e, a)),
							a)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(f(444, t));
		}
	}
	function Aa(t) {
		return 'href="' + me(t) + '"';
	}
	function pu(t) {
		return 'link[rel="stylesheet"][' + t + "]";
	}
	function zd(t) {
		return p({}, t, { "data-precedence": t.precedence, precedence: null });
	}
	function Fm(t, e, l, a) {
		t.querySelector('link[rel="preload"][as="style"][' + e + "]")
			? (a.loading = 1)
			: ((e = t.createElement("link")),
				(a.preload = e),
				e.addEventListener("load", function () {
					return (a.loading |= 1);
				}),
				e.addEventListener("error", function () {
					return (a.loading |= 2);
				}),
				Kt(e, "link", l),
				Lt(e),
				t.head.appendChild(e));
	}
	function Ra(t) {
		return '[src="' + me(t) + '"]';
	}
	function Su(t) {
		return "script[async]" + t;
	}
	function Dd(t, e, l) {
		if ((e.count++, e.instance === null))
			switch (e.type) {
				case "style":
					var a = t.querySelector('style[data-href~="' + me(l.href) + '"]');
					if (a) return ((e.instance = a), Lt(a), a);
					var u = p({}, l, {
						"data-href": l.href,
						"data-precedence": l.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (t.ownerDocument || t).createElement("style")),
						Lt(a),
						Kt(a, "style", u),
						Yn(a, l.precedence, t),
						(e.instance = a)
					);
				case "stylesheet":
					u = Aa(l.href);
					var n = t.querySelector(pu(u));
					if (n) return ((e.state.loading |= 4), (e.instance = n), Lt(n), n);
					((a = zd(l)),
						(u = xe.get(u)) && Sf(a, u),
						(n = (t.ownerDocument || t).createElement("link")),
						Lt(n));
					var c = n;
					return (
						(c._p = new Promise(function (r, v) {
							((c.onload = r), (c.onerror = v));
						})),
						Kt(n, "link", a),
						(e.state.loading |= 4),
						Yn(n, l.precedence, t),
						(e.instance = n)
					);
				case "script":
					return (
						(n = Ra(l.src)),
						(u = t.querySelector(Su(n)))
							? ((e.instance = u), Lt(u), u)
							: ((a = l),
								(u = xe.get(n)) && ((a = p({}, l)), bf(a, u)),
								(t = t.ownerDocument || t),
								(u = t.createElement("script")),
								Lt(u),
								Kt(u, "link", a),
								t.head.appendChild(u),
								(e.instance = u))
					);
				case "void":
					return null;
				default:
					throw Error(f(443, e.type));
			}
		else
			e.type === "stylesheet" &&
				!(e.state.loading & 4) &&
				((a = e.instance), (e.state.loading |= 4), Yn(a, l.precedence, t));
		return e.instance;
	}
	function Yn(t, e, l) {
		for (
			var a = l.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				u = a.length ? a[a.length - 1] : null,
				n = u,
				c = 0;
			c < a.length;
			c++
		) {
			var r = a[c];
			if (r.dataset.precedence === e) n = r;
			else if (n !== u) break;
		}
		n
			? n.parentNode.insertBefore(t, n.nextSibling)
			: ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
	}
	function Sf(t, e) {
		(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.title == null && (t.title = e.title));
	}
	function bf(t, e) {
		(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.integrity == null && (t.integrity = e.integrity));
	}
	var Ln = null;
	function Nd(t, e, l) {
		if (Ln === null) {
			var a = new Map(),
				u = (Ln = new Map());
			u.set(l, a);
		} else ((u = Ln), (a = u.get(l)), a || ((a = new Map()), u.set(l, a)));
		if (a.has(t)) return a;
		for (
			a.set(t, null), l = l.getElementsByTagName(t), u = 0;
			u < l.length;
			u++
		) {
			var n = l[u];
			if (
				!(
					n[Ua] ||
					n[kt] ||
					(t === "link" && n.getAttribute("rel") === "stylesheet")
				) &&
				n.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var c = n.getAttribute(e) || "";
				c = t + c;
				var r = a.get(c);
				r ? r.push(n) : a.set(c, [n]);
			}
		}
		return a;
	}
	function Ud(t, e, l) {
		((t = t.ownerDocument || t),
			t.head.insertBefore(
				l,
				e === "title" ? t.querySelector("head > title") : null,
			));
	}
	function Pm(t, e, l) {
		if (l === 1 || e.itemProp != null) return !1;
		switch (t) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof e.precedence != "string" ||
					typeof e.href != "string" ||
					e.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof e.rel != "string" ||
					typeof e.href != "string" ||
					e.href === "" ||
					e.onLoad ||
					e.onError
				)
					break;
				switch (e.rel) {
					case "stylesheet":
						return (
							(t = e.disabled),
							typeof e.precedence == "string" && t == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					e.async &&
					typeof e.async != "function" &&
					typeof e.async != "symbol" &&
					!e.onLoad &&
					!e.onError &&
					e.src &&
					typeof e.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function Cd(t) {
		return !(t.type === "stylesheet" && !(t.state.loading & 3));
	}
	var bu = null;
	function Im() {}
	function ty(t, e, l) {
		if (bu === null) throw Error(f(475));
		var a = bu;
		if (
			e.type === "stylesheet" &&
			(typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
			!(e.state.loading & 4)
		) {
			if (e.instance === null) {
				var u = Aa(l.href),
					n = t.querySelector(pu(u));
				if (n) {
					((t = n._p),
						t !== null &&
							typeof t == "object" &&
							typeof t.then == "function" &&
							(a.count++, (a = Gn.bind(a)), t.then(a, a)),
						(e.state.loading |= 4),
						(e.instance = n),
						Lt(n));
					return;
				}
				((n = t.ownerDocument || t),
					(l = zd(l)),
					(u = xe.get(u)) && Sf(l, u),
					(n = n.createElement("link")),
					Lt(n));
				var c = n;
				((c._p = new Promise(function (r, v) {
					((c.onload = r), (c.onerror = v));
				})),
					Kt(n, "link", l),
					(e.instance = n));
			}
			(a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(e, t),
				(t = e.state.preload) &&
					!(e.state.loading & 3) &&
					(a.count++,
					(e = Gn.bind(a)),
					t.addEventListener("load", e),
					t.addEventListener("error", e)));
		}
	}
	function ey() {
		if (bu === null) throw Error(f(475));
		var t = bu;
		return (
			t.stylesheets && t.count === 0 && xf(t, t.stylesheets),
			0 < t.count
				? function (e) {
						var l = setTimeout(function () {
							if ((t.stylesheets && xf(t, t.stylesheets), t.unsuspend)) {
								var a = t.unsuspend;
								((t.unsuspend = null), a());
							}
						}, 6e4);
						return (
							(t.unsuspend = e),
							function () {
								((t.unsuspend = null), clearTimeout(l));
							}
						);
					}
				: null
		);
	}
	function Gn() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) xf(this, this.stylesheets);
			else if (this.unsuspend) {
				var t = this.unsuspend;
				((this.unsuspend = null), t());
			}
		}
	}
	var Xn = null;
	function xf(t, e) {
		((t.stylesheets = null),
			t.unsuspend !== null &&
				(t.count++,
				(Xn = new Map()),
				e.forEach(ly, t),
				(Xn = null),
				Gn.call(t)));
	}
	function ly(t, e) {
		if (!(e.state.loading & 4)) {
			var l = Xn.get(t);
			if (l) var a = l.get(null);
			else {
				((l = new Map()), Xn.set(t, l));
				for (
					var u = t.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						n = 0;
					n < u.length;
					n++
				) {
					var c = u[n];
					(c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
						(l.set(c.dataset.precedence, c), (a = c));
				}
				a && l.set(null, a);
			}
			((u = e.instance),
				(c = u.getAttribute("data-precedence")),
				(n = l.get(c) || a),
				n === a && l.set(null, u),
				l.set(c, u),
				this.count++,
				(a = Gn.bind(this)),
				u.addEventListener("load", a),
				u.addEventListener("error", a),
				n
					? n.parentNode.insertBefore(u, n.nextSibling)
					: ((t = t.nodeType === 9 ? t.head : t),
						t.insertBefore(u, t.firstChild)),
				(e.state.loading |= 4));
		}
	}
	var xu = {
		$$typeof: $,
		Provider: null,
		Consumer: null,
		_currentValue: I,
		_currentValue2: I,
		_threadCount: 0,
	};
	function ay(t, e, l, a, u, n, c, r) {
		((this.tag = 1),
			(this.containerInfo = t),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = vi(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = vi(0)),
			(this.hiddenUpdates = vi(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = u),
			(this.onCaughtError = n),
			(this.onRecoverableError = c),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = r),
			(this.incompleteTransitions = new Map()));
	}
	function jd(t, e, l, a, u, n, c, r, v, O, j, w) {
		return (
			(t = new ay(t, e, l, c, r, v, O, w)),
			(e = 1),
			n === !0 && (e |= 24),
			(n = ce(3, null, null, e)),
			(t.current = n),
			(n.stateNode = t),
			(e = ec()),
			e.refCount++,
			(t.pooledCache = e),
			e.refCount++,
			(n.memoizedState = { element: a, isDehydrated: l, cache: e }),
			nc(n),
			t
		);
	}
	function Hd(t) {
		return t ? ((t = la), t) : la;
	}
	function wd(t, e, l, a, u, n) {
		((u = Hd(u)),
			a.context === null ? (a.context = u) : (a.pendingContext = u),
			(a = al(e)),
			(a.payload = { element: l }),
			(n = n === void 0 ? null : n),
			n !== null && (a.callback = n),
			(l = ul(t, a, e)),
			l !== null && (de(l, t, e), Fa(l, t, e)));
	}
	function qd(t, e) {
		if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
			var l = t.retryLane;
			t.retryLane = l !== 0 && l < e ? l : e;
		}
	}
	function Ef(t, e) {
		(qd(t, e), (t = t.alternate) && qd(t, e));
	}
	function Bd(t) {
		if (t.tag === 13) {
			var e = ea(t, 67108864);
			(e !== null && de(e, t, 67108864), Ef(t, 67108864));
		}
	}
	var Qn = !0;
	function uy(t, e, l, a) {
		var u = U.T;
		U.T = null;
		var n = X.p;
		try {
			((X.p = 2), Tf(t, e, l, a));
		} finally {
			((X.p = n), (U.T = u));
		}
	}
	function ny(t, e, l, a) {
		var u = U.T;
		U.T = null;
		var n = X.p;
		try {
			((X.p = 8), Tf(t, e, l, a));
		} finally {
			((X.p = n), (U.T = u));
		}
	}
	function Tf(t, e, l, a) {
		if (Qn) {
			var u = Af(a);
			if (u === null) (of(t, e, a, Zn, l), Ld(t, a));
			else if (cy(u, t, e, l, a)) a.stopPropagation();
			else if ((Ld(t, a), e & 4 && -1 < iy.indexOf(t))) {
				for (; u !== null; ) {
					var n = Ql(u);
					if (n !== null)
						switch (n.tag) {
							case 3:
								if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
									var c = Tl(n.pendingLanes);
									if (c !== 0) {
										var r = n;
										for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
											var v = 1 << (31 - ne(c));
											((r.entanglements[1] |= v), (c &= ~v));
										}
										(Ne(n), !(yt & 6) && ((Mn = Oe() + 500), mu(0)));
									}
								}
								break;
							case 13:
								((r = ea(n, 2)), r !== null && de(r, n, 2), zn(), Ef(n, 2));
						}
					if (((n = Af(a)), n === null && of(t, e, a, Zn, l), n === u)) break;
					u = n;
				}
				u !== null && a.stopPropagation();
			} else of(t, e, a, null, l);
		}
	}
	function Af(t) {
		return ((t = _i(t)), Rf(t));
	}
	var Zn = null;
	function Rf(t) {
		if (((Zn = null), (t = Xl(t)), t !== null)) {
			var e = y(t);
			if (e === null) t = null;
			else {
				var l = e.tag;
				if (l === 13) {
					if (((t = T(e)), t !== null)) return t;
					t = null;
				} else if (l === 3) {
					if (e.stateNode.current.memoizedState.isDehydrated)
						return e.tag === 3 ? e.stateNode.containerInfo : null;
					t = null;
				} else e !== t && (t = null);
			}
		}
		return ((Zn = t), null);
	}
	function Yd(t) {
		switch (t) {
			case "beforetoggle":
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
			case "toggle":
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
				return 2;
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
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (Vh()) {
					case Pf:
						return 2;
					case If:
						return 8;
					case Hu:
					case Kh:
						return 32;
					case tr:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var Of = !1,
		gl = null,
		pl = null,
		Sl = null,
		Eu = new Map(),
		Tu = new Map(),
		bl = [],
		iy =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function Ld(t, e) {
		switch (t) {
			case "focusin":
			case "focusout":
				gl = null;
				break;
			case "dragenter":
			case "dragleave":
				pl = null;
				break;
			case "mouseover":
			case "mouseout":
				Sl = null;
				break;
			case "pointerover":
			case "pointerout":
				Eu.delete(e.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				Tu.delete(e.pointerId);
		}
	}
	function Au(t, e, l, a, u, n) {
		return t === null || t.nativeEvent !== n
			? ((t = {
					blockedOn: e,
					domEventName: l,
					eventSystemFlags: a,
					nativeEvent: n,
					targetContainers: [u],
				}),
				e !== null && ((e = Ql(e)), e !== null && Bd(e)),
				t)
			: ((t.eventSystemFlags |= a),
				(e = t.targetContainers),
				u !== null && e.indexOf(u) === -1 && e.push(u),
				t);
	}
	function cy(t, e, l, a, u) {
		switch (e) {
			case "focusin":
				return ((gl = Au(gl, t, e, l, a, u)), !0);
			case "dragenter":
				return ((pl = Au(pl, t, e, l, a, u)), !0);
			case "mouseover":
				return ((Sl = Au(Sl, t, e, l, a, u)), !0);
			case "pointerover":
				var n = u.pointerId;
				return (Eu.set(n, Au(Eu.get(n) || null, t, e, l, a, u)), !0);
			case "gotpointercapture":
				return (
					(n = u.pointerId),
					Tu.set(n, Au(Tu.get(n) || null, t, e, l, a, u)),
					!0
				);
		}
		return !1;
	}
	function Gd(t) {
		var e = Xl(t.target);
		if (e !== null) {
			var l = y(e);
			if (l !== null) {
				if (((e = l.tag), e === 13)) {
					if (((e = T(l)), e !== null)) {
						((t.blockedOn = e),
							t0(t.priority, function () {
								if (l.tag === 13) {
									var a = se();
									a = gi(a);
									var u = ea(l, a);
									(u !== null && de(u, l, a), Ef(l, a));
								}
							}));
						return;
					}
				} else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
					return;
				}
			}
		}
		t.blockedOn = null;
	}
	function Vn(t) {
		if (t.blockedOn !== null) return !1;
		for (var e = t.targetContainers; 0 < e.length; ) {
			var l = Af(t.nativeEvent);
			if (l === null) {
				l = t.nativeEvent;
				var a = new l.constructor(l.type, l);
				((Mi = a), l.target.dispatchEvent(a), (Mi = null));
			} else return ((e = Ql(l)), e !== null && Bd(e), (t.blockedOn = l), !1);
			e.shift();
		}
		return !0;
	}
	function Xd(t, e, l) {
		Vn(t) && l.delete(e);
	}
	function fy() {
		((Of = !1),
			gl !== null && Vn(gl) && (gl = null),
			pl !== null && Vn(pl) && (pl = null),
			Sl !== null && Vn(Sl) && (Sl = null),
			Eu.forEach(Xd),
			Tu.forEach(Xd));
	}
	function Kn(t, e) {
		t.blockedOn === e &&
			((t.blockedOn = null),
			Of ||
				((Of = !0),
				i.unstable_scheduleCallback(i.unstable_NormalPriority, fy)));
	}
	var Jn = null;
	function Qd(t) {
		Jn !== t &&
			((Jn = t),
			i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
				Jn === t && (Jn = null);
				for (var e = 0; e < t.length; e += 3) {
					var l = t[e],
						a = t[e + 1],
						u = t[e + 2];
					if (typeof a != "function") {
						if (Rf(a || l) === null) continue;
						break;
					}
					var n = Ql(l);
					n !== null &&
						(t.splice(e, 3),
						(e -= 3),
						Ac(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
				}
			}));
	}
	function Ru(t) {
		function e(v) {
			return Kn(v, t);
		}
		(gl !== null && Kn(gl, t),
			pl !== null && Kn(pl, t),
			Sl !== null && Kn(Sl, t),
			Eu.forEach(e),
			Tu.forEach(e));
		for (var l = 0; l < bl.length; l++) {
			var a = bl[l];
			a.blockedOn === t && (a.blockedOn = null);
		}
		for (; 0 < bl.length && ((l = bl[0]), l.blockedOn === null); )
			(Gd(l), l.blockedOn === null && bl.shift());
		if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
			for (a = 0; a < l.length; a += 3) {
				var u = l[a],
					n = l[a + 1],
					c = u[Pt] || null;
				if (typeof n == "function") c || Qd(l);
				else if (c) {
					var r = null;
					if (n && n.hasAttribute("formAction")) {
						if (((u = n), (c = n[Pt] || null))) r = c.formAction;
						else if (Rf(u) !== null) continue;
					} else r = c.action;
					(typeof r == "function" ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)),
						Qd(l));
				}
			}
	}
	function Mf(t) {
		this._internalRoot = t;
	}
	((kn.prototype.render = Mf.prototype.render =
		function (t) {
			var e = this._internalRoot;
			if (e === null) throw Error(f(409));
			var l = e.current,
				a = se();
			wd(l, a, t, e, null, null);
		}),
		(kn.prototype.unmount = Mf.prototype.unmount =
			function () {
				var t = this._internalRoot;
				if (t !== null) {
					this._internalRoot = null;
					var e = t.containerInfo;
					(wd(t.current, 2, null, t, null, null), zn(), (e[Gl] = null));
				}
			}));
	function kn(t) {
		this._internalRoot = t;
	}
	kn.prototype.unstable_scheduleHydration = function (t) {
		if (t) {
			var e = nr();
			t = { blockedOn: null, target: t, priority: e };
			for (var l = 0; l < bl.length && e !== 0 && e < bl[l].priority; l++);
			(bl.splice(l, 0, t), l === 0 && Gd(t));
		}
	};
	var Zd = d.version;
	if (Zd !== "19.1.0") throw Error(f(527, Zd, "19.1.0"));
	X.findDOMNode = function (t) {
		var e = t._reactInternals;
		if (e === void 0)
			throw typeof t.render == "function"
				? Error(f(188))
				: ((t = Object.keys(t).join(",")), Error(f(268, t)));
		return (
			(t = o(e)),
			(t = t !== null ? h(t) : null),
			(t = t === null ? null : t.stateNode),
			t
		);
	};
	var ry = {
		bundleType: 0,
		version: "19.1.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: U,
		reconcilerVersion: "19.1.0",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var $n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!$n.isDisabled && $n.supportsFiber)
			try {
				((za = $n.inject(ry)), (ue = $n));
			} catch {}
	}
	return (
		(Mu.createRoot = function (t, e) {
			if (!m(t)) throw Error(f(299));
			var l = !1,
				a = "",
				u = is,
				n = cs,
				c = fs,
				r = null;
			return (
				e != null &&
					(e.unstable_strictMode === !0 && (l = !0),
					e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
					e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
					e.onCaughtError !== void 0 && (n = e.onCaughtError),
					e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
					e.unstable_transitionCallbacks !== void 0 &&
						(r = e.unstable_transitionCallbacks)),
				(e = jd(t, 1, !1, null, null, l, a, u, n, c, r, null)),
				(t[Gl] = e.current),
				rf(t),
				new Mf(e)
			);
		}),
		(Mu.hydrateRoot = function (t, e, l) {
			if (!m(t)) throw Error(f(299));
			var a = !1,
				u = "",
				n = is,
				c = cs,
				r = fs,
				v = null,
				O = null;
			return (
				l != null &&
					(l.unstable_strictMode === !0 && (a = !0),
					l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
					l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
					l.onCaughtError !== void 0 && (c = l.onCaughtError),
					l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
					l.unstable_transitionCallbacks !== void 0 &&
						(v = l.unstable_transitionCallbacks),
					l.formState !== void 0 && (O = l.formState)),
				(e = jd(t, 1, !0, e, l ?? null, a, u, n, c, r, v, O)),
				(e.context = Hd(null)),
				(l = e.current),
				(a = se()),
				(a = gi(a)),
				(u = al(a)),
				(u.callback = null),
				ul(l, u, a),
				(l = a),
				(e.current.lanes = l),
				Na(e, l),
				Ne(e),
				(t[Gl] = e.current),
				rf(t),
				new kn(e)
			);
		}),
		(Mu.version = "19.1.0"),
		Mu
	);
}
var th;
function by() {
	if (th) return Df.exports;
	th = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (d) {
				console.error(d);
			}
	}
	return (i(), (Df.exports = Sy()), Df.exports);
}
var xy = by();
const Ey = xh(xy);
var _u = {},
	eh;
function Ty() {
	if (eh) return _u;
	((eh = 1),
		Object.defineProperty(_u, "__esModule", { value: !0 }),
		(_u.parse = T),
		(_u.serialize = h));
	const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
		d = /^[\u0021-\u003A\u003C-\u007E]*$/,
		s =
			/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
		f = /^[\u0020-\u003A\u003D-\u007E]*$/,
		m = Object.prototype.toString,
		y = (() => {
			const S = function () {};
			return ((S.prototype = Object.create(null)), S);
		})();
	function T(S, N) {
		const z = new y(),
			Y = S.length;
		if (Y < 2) return z;
		const Q = (N == null ? void 0 : N.decode) || p;
		let B = 0;
		do {
			const Z = S.indexOf("=", B);
			if (Z === -1) break;
			const $ = S.indexOf(";", B),
				J = $ === -1 ? Y : $;
			if (Z > J) {
				B = S.lastIndexOf(";", Z - 1) + 1;
				continue;
			}
			const L = g(S, B, Z),
				ot = o(S, Z, L),
				lt = S.slice(L, ot);
			if (z[lt] === void 0) {
				let at = g(S, Z + 1, J),
					ct = o(S, J, at);
				const bt = Q(S.slice(at, ct));
				z[lt] = bt;
			}
			B = J + 1;
		} while (B < Y);
		return z;
	}
	function g(S, N, z) {
		do {
			const Y = S.charCodeAt(N);
			if (Y !== 32 && Y !== 9) return N;
		} while (++N < z);
		return z;
	}
	function o(S, N, z) {
		for (; N > z; ) {
			const Y = S.charCodeAt(--N);
			if (Y !== 32 && Y !== 9) return N + 1;
		}
		return z;
	}
	function h(S, N, z) {
		const Y = (z == null ? void 0 : z.encode) || encodeURIComponent;
		if (!i.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
		const Q = Y(N);
		if (!d.test(Q)) throw new TypeError(`argument val is invalid: ${N}`);
		let B = S + "=" + Q;
		if (!z) return B;
		if (z.maxAge !== void 0) {
			if (!Number.isInteger(z.maxAge))
				throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
			B += "; Max-Age=" + z.maxAge;
		}
		if (z.domain) {
			if (!s.test(z.domain))
				throw new TypeError(`option domain is invalid: ${z.domain}`);
			B += "; Domain=" + z.domain;
		}
		if (z.path) {
			if (!f.test(z.path))
				throw new TypeError(`option path is invalid: ${z.path}`);
			B += "; Path=" + z.path;
		}
		if (z.expires) {
			if (!b(z.expires) || !Number.isFinite(z.expires.valueOf()))
				throw new TypeError(`option expires is invalid: ${z.expires}`);
			B += "; Expires=" + z.expires.toUTCString();
		}
		if (
			(z.httpOnly && (B += "; HttpOnly"),
			z.secure && (B += "; Secure"),
			z.partitioned && (B += "; Partitioned"),
			z.priority)
		)
			switch (
				typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
			) {
				case "low":
					B += "; Priority=Low";
					break;
				case "medium":
					B += "; Priority=Medium";
					break;
				case "high":
					B += "; Priority=High";
					break;
				default:
					throw new TypeError(`option priority is invalid: ${z.priority}`);
			}
		if (z.sameSite)
			switch (
				typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
			) {
				case !0:
				case "strict":
					B += "; SameSite=Strict";
					break;
				case "lax":
					B += "; SameSite=Lax";
					break;
				case "none":
					B += "; SameSite=None";
					break;
				default:
					throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
			}
		return B;
	}
	function p(S) {
		if (S.indexOf("%") === -1) return S;
		try {
			return decodeURIComponent(S);
		} catch {
			return S;
		}
	}
	function b(S) {
		return m.call(S) === "[object Date]";
	}
	return _u;
}
Ty();
var lh = "popstate";
function Ay(i = {}) {
	function d(f, m) {
		let { pathname: y, search: T, hash: g } = f.location;
		return Lf(
			"",
			{ pathname: y, search: T, hash: g },
			(m.state && m.state.usr) || null,
			(m.state && m.state.key) || "default",
		);
	}
	function s(f, m) {
		return typeof m == "string" ? m : Du(m);
	}
	return Oy(d, s, null, i);
}
function zt(i, d) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(d);
}
function Re(i, d) {
	if (!i) {
		typeof console < "u" && console.warn(d);
		try {
			throw new Error(d);
		} catch {}
	}
}
function Ry() {
	return Math.random().toString(36).substring(2, 10);
}
function ah(i, d) {
	return { usr: i.state, key: i.key, idx: d };
}
function Lf(i, d, s = null, f) {
	return {
		pathname: typeof i == "string" ? i : i.pathname,
		search: "",
		hash: "",
		...(typeof d == "string" ? Ma(d) : d),
		state: s,
		key: (d && d.key) || f || Ry(),
	};
}
function Du({ pathname: i = "/", search: d = "", hash: s = "" }) {
	return (
		d && d !== "?" && (i += d.charAt(0) === "?" ? d : "?" + d),
		s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s),
		i
	);
}
function Ma(i) {
	let d = {};
	if (i) {
		let s = i.indexOf("#");
		s >= 0 && ((d.hash = i.substring(s)), (i = i.substring(0, s)));
		let f = i.indexOf("?");
		(f >= 0 && ((d.search = i.substring(f)), (i = i.substring(0, f))),
			i && (d.pathname = i));
	}
	return d;
}
function Oy(i, d, s, f = {}) {
	let { window: m = document.defaultView, v5Compat: y = !1 } = f,
		T = m.history,
		g = "POP",
		o = null,
		h = p();
	h == null && ((h = 0), T.replaceState({ ...T.state, idx: h }, ""));
	function p() {
		return (T.state || { idx: null }).idx;
	}
	function b() {
		g = "POP";
		let Q = p(),
			B = Q == null ? null : Q - h;
		((h = Q), o && o({ action: g, location: Y.location, delta: B }));
	}
	function S(Q, B) {
		g = "PUSH";
		let Z = Lf(Y.location, Q, B);
		h = p() + 1;
		let $ = ah(Z, h),
			J = Y.createHref(Z);
		try {
			T.pushState($, "", J);
		} catch (L) {
			if (L instanceof DOMException && L.name === "DataCloneError") throw L;
			m.location.assign(J);
		}
		y && o && o({ action: g, location: Y.location, delta: 1 });
	}
	function N(Q, B) {
		g = "REPLACE";
		let Z = Lf(Y.location, Q, B);
		h = p();
		let $ = ah(Z, h),
			J = Y.createHref(Z);
		(T.replaceState($, "", J),
			y && o && o({ action: g, location: Y.location, delta: 0 }));
	}
	function z(Q) {
		return My(Q);
	}
	let Y = {
		get action() {
			return g;
		},
		get location() {
			return i(m, T);
		},
		listen(Q) {
			if (o) throw new Error("A history only accepts one active listener");
			return (
				m.addEventListener(lh, b),
				(o = Q),
				() => {
					(m.removeEventListener(lh, b), (o = null));
				}
			);
		},
		createHref(Q) {
			return d(m, Q);
		},
		createURL: z,
		encodeLocation(Q) {
			let B = z(Q);
			return { pathname: B.pathname, search: B.search, hash: B.hash };
		},
		push: S,
		replace: N,
		go(Q) {
			return T.go(Q);
		},
	};
	return Y;
}
function My(i, d = !1) {
	let s = "http://localhost";
	(typeof window < "u" &&
		(s =
			window.location.origin !== "null"
				? window.location.origin
				: window.location.href),
		zt(s, "No window.location.(origin|href) available to create URL"));
	let f = typeof i == "string" ? i : Du(i);
	return (
		(f = f.replace(/ $/, "%20")),
		!d && f.startsWith("//") && (f = s + f),
		new URL(f, s)
	);
}
function Eh(i, d, s = "/") {
	return _y(i, d, s, !1);
}
function _y(i, d, s, f) {
	let m = typeof d == "string" ? Ma(d) : d,
		y = We(m.pathname || "/", s);
	if (y == null) return null;
	let T = Th(i);
	zy(T);
	let g = null;
	for (let o = 0; g == null && o < T.length; ++o) {
		let h = Ly(y);
		g = By(T[o], h, f);
	}
	return g;
}
function Th(i, d = [], s = [], f = "") {
	let m = (y, T, g) => {
		let o = {
			relativePath: g === void 0 ? y.path || "" : g,
			caseSensitive: y.caseSensitive === !0,
			childrenIndex: T,
			route: y,
		};
		o.relativePath.startsWith("/") &&
			(zt(
				o.relativePath.startsWith(f),
				`Absolute route path "${o.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
			),
			(o.relativePath = o.relativePath.slice(f.length)));
		let h = $e([f, o.relativePath]),
			p = s.concat(o);
		(y.children &&
			y.children.length > 0 &&
			(zt(
				y.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${h}".`,
			),
			Th(y.children, d, p, h)),
			!(y.path == null && !y.index) &&
				d.push({ path: h, score: wy(h, y.index), routesMeta: p }));
	};
	return (
		i.forEach((y, T) => {
			var g;
			if (y.path === "" || !((g = y.path) != null && g.includes("?"))) m(y, T);
			else for (let o of Ah(y.path)) m(y, T, o);
		}),
		d
	);
}
function Ah(i) {
	let d = i.split("/");
	if (d.length === 0) return [];
	let [s, ...f] = d,
		m = s.endsWith("?"),
		y = s.replace(/\?$/, "");
	if (f.length === 0) return m ? [y, ""] : [y];
	let T = Ah(f.join("/")),
		g = [];
	return (
		g.push(...T.map((o) => (o === "" ? y : [y, o].join("/")))),
		m && g.push(...T),
		g.map((o) => (i.startsWith("/") && o === "" ? "/" : o))
	);
}
function zy(i) {
	i.sort((d, s) =>
		d.score !== s.score
			? s.score - d.score
			: qy(
					d.routesMeta.map((f) => f.childrenIndex),
					s.routesMeta.map((f) => f.childrenIndex),
				),
	);
}
var Dy = /^:[\w-]+$/,
	Ny = 3,
	Uy = 2,
	Cy = 1,
	jy = 10,
	Hy = -2,
	uh = (i) => i === "*";
function wy(i, d) {
	let s = i.split("/"),
		f = s.length;
	return (
		s.some(uh) && (f += Hy),
		d && (f += Uy),
		s
			.filter((m) => !uh(m))
			.reduce((m, y) => m + (Dy.test(y) ? Ny : y === "" ? Cy : jy), f)
	);
}
function qy(i, d) {
	return i.length === d.length && i.slice(0, -1).every((f, m) => f === d[m])
		? i[i.length - 1] - d[d.length - 1]
		: 0;
}
function By(i, d, s = !1) {
	let { routesMeta: f } = i,
		m = {},
		y = "/",
		T = [];
	for (let g = 0; g < f.length; ++g) {
		let o = f[g],
			h = g === f.length - 1,
			p = y === "/" ? d : d.slice(y.length) || "/",
			b = ci(
				{ path: o.relativePath, caseSensitive: o.caseSensitive, end: h },
				p,
			),
			S = o.route;
		if (
			(!b &&
				h &&
				s &&
				!f[f.length - 1].route.index &&
				(b = ci(
					{ path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 },
					p,
				)),
			!b)
		)
			return null;
		(Object.assign(m, b.params),
			T.push({
				params: m,
				pathname: $e([y, b.pathname]),
				pathnameBase: Zy($e([y, b.pathnameBase])),
				route: S,
			}),
			b.pathnameBase !== "/" && (y = $e([y, b.pathnameBase])));
	}
	return T;
}
function ci(i, d) {
	typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
	let [s, f] = Yy(i.path, i.caseSensitive, i.end),
		m = d.match(s);
	if (!m) return null;
	let y = m[0],
		T = y.replace(/(.)\/+$/, "$1"),
		g = m.slice(1);
	return {
		params: f.reduce((h, { paramName: p, isOptional: b }, S) => {
			if (p === "*") {
				let z = g[S] || "";
				T = y.slice(0, y.length - z.length).replace(/(.)\/+$/, "$1");
			}
			const N = g[S];
			return (
				b && !N ? (h[p] = void 0) : (h[p] = (N || "").replace(/%2F/g, "/")),
				h
			);
		}, {}),
		pathname: y,
		pathnameBase: T,
		pattern: i,
	};
}
function Yy(i, d = !1, s = !0) {
	Re(
		i === "*" || !i.endsWith("*") || i.endsWith("/*"),
		`Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`,
	);
	let f = [],
		m =
			"^" +
			i
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(T, g, o) => (
						f.push({ paramName: g, isOptional: o != null }),
						o ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		i.endsWith("*")
			? (f.push({ paramName: "*" }),
				(m += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: s
				? (m += "\\/*$")
				: i !== "" && i !== "/" && (m += "(?:(?=\\/|$))"),
		[new RegExp(m, d ? void 0 : "i"), f]
	);
}
function Ly(i) {
	try {
		return i
			.split("/")
			.map((d) => decodeURIComponent(d).replace(/\//g, "%2F"))
			.join("/");
	} catch (d) {
		return (
			Re(
				!1,
				`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`,
			),
			i
		);
	}
}
function We(i, d) {
	if (d === "/") return i;
	if (!i.toLowerCase().startsWith(d.toLowerCase())) return null;
	let s = d.endsWith("/") ? d.length - 1 : d.length,
		f = i.charAt(s);
	return f && f !== "/" ? null : i.slice(s) || "/";
}
function Gy(i, d = "/") {
	let {
		pathname: s,
		search: f = "",
		hash: m = "",
	} = typeof i == "string" ? Ma(i) : i;
	return {
		pathname: s ? (s.startsWith("/") ? s : Xy(s, d)) : d,
		search: Vy(f),
		hash: Ky(m),
	};
}
function Xy(i, d) {
	let s = d.replace(/\/+$/, "").split("/");
	return (
		i.split("/").forEach((m) => {
			m === ".." ? s.length > 1 && s.pop() : m !== "." && s.push(m);
		}),
		s.length > 1 ? s.join("/") : "/"
	);
}
function jf(i, d, s, f) {
	return `Cannot include a '${i}' character in a manually specified \`to.${d}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Qy(i) {
	return i.filter(
		(d, s) => s === 0 || (d.route.path && d.route.path.length > 0),
	);
}
function Rh(i) {
	let d = Qy(i);
	return d.map((s, f) => (f === d.length - 1 ? s.pathname : s.pathnameBase));
}
function Oh(i, d, s, f = !1) {
	let m;
	typeof i == "string"
		? (m = Ma(i))
		: ((m = { ...i }),
			zt(
				!m.pathname || !m.pathname.includes("?"),
				jf("?", "pathname", "search", m),
			),
			zt(
				!m.pathname || !m.pathname.includes("#"),
				jf("#", "pathname", "hash", m),
			),
			zt(!m.search || !m.search.includes("#"), jf("#", "search", "hash", m)));
	let y = i === "" || m.pathname === "",
		T = y ? "/" : m.pathname,
		g;
	if (T == null) g = s;
	else {
		let b = d.length - 1;
		if (!f && T.startsWith("..")) {
			let S = T.split("/");
			for (; S[0] === ".."; ) (S.shift(), (b -= 1));
			m.pathname = S.join("/");
		}
		g = b >= 0 ? d[b] : "/";
	}
	let o = Gy(m, g),
		h = T && T !== "/" && T.endsWith("/"),
		p = (y || T === ".") && s.endsWith("/");
	return (!o.pathname.endsWith("/") && (h || p) && (o.pathname += "/"), o);
}
var $e = (i) => i.join("/").replace(/\/\/+/g, "/"),
	Zy = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Vy = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
	Ky = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function Jy(i) {
	return (
		i != null &&
		typeof i.status == "number" &&
		typeof i.statusText == "string" &&
		typeof i.internal == "boolean" &&
		"data" in i
	);
}
var Mh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Mh);
var ky = ["GET", ...Mh];
new Set(ky);
var _a = D.createContext(null);
_a.displayName = "DataRouter";
var ri = D.createContext(null);
ri.displayName = "DataRouterState";
var _h = D.createContext({ isTransitioning: !1 });
_h.displayName = "ViewTransition";
var $y = D.createContext(new Map());
$y.displayName = "Fetchers";
var Wy = D.createContext(null);
Wy.displayName = "Await";
var Ue = D.createContext(null);
Ue.displayName = "Navigation";
var Nu = D.createContext(null);
Nu.displayName = "Location";
var Ce = D.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ce.displayName = "Route";
var Vf = D.createContext(null);
Vf.displayName = "RouteError";
function Fy(i, { relative: d } = {}) {
	zt(
		Uu(),
		"useHref() may be used only in the context of a <Router> component.",
	);
	let { basename: s, navigator: f } = D.useContext(Ue),
		{ hash: m, pathname: y, search: T } = Cu(i, { relative: d }),
		g = y;
	return (
		s !== "/" && (g = y === "/" ? s : $e([s, y])),
		f.createHref({ pathname: g, search: T, hash: m })
	);
}
function Uu() {
	return D.useContext(Nu) != null;
}
function El() {
	return (
		zt(
			Uu(),
			"useLocation() may be used only in the context of a <Router> component.",
		),
		D.useContext(Nu).location
	);
}
var zh =
	"You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Dh(i) {
	D.useContext(Ue).static || D.useLayoutEffect(i);
}
function Nh() {
	let { isDataRoute: i } = D.useContext(Ce);
	return i ? ov() : Py();
}
function Py() {
	zt(
		Uu(),
		"useNavigate() may be used only in the context of a <Router> component.",
	);
	let i = D.useContext(_a),
		{ basename: d, navigator: s } = D.useContext(Ue),
		{ matches: f } = D.useContext(Ce),
		{ pathname: m } = El(),
		y = JSON.stringify(Rh(f)),
		T = D.useRef(!1);
	return (
		Dh(() => {
			T.current = !0;
		}),
		D.useCallback(
			(o, h = {}) => {
				if ((Re(T.current, zh), !T.current)) return;
				if (typeof o == "number") {
					s.go(o);
					return;
				}
				let p = Oh(o, JSON.parse(y), m, h.relative === "path");
				(i == null &&
					d !== "/" &&
					(p.pathname = p.pathname === "/" ? d : $e([d, p.pathname])),
					(h.replace ? s.replace : s.push)(p, h.state, h));
			},
			[d, s, y, m, i],
		)
	);
}
D.createContext(null);
function eg() {
	let { matches: i } = D.useContext(Ce),
		d = i[i.length - 1];
	return d ? d.params : {};
}
function Cu(i, { relative: d } = {}) {
	let { matches: s } = D.useContext(Ce),
		{ pathname: f } = El(),
		m = JSON.stringify(Rh(s));
	return D.useMemo(() => Oh(i, JSON.parse(m), f, d === "path"), [i, m, f, d]);
}
function Iy(i, d) {
	return Uh(i, d);
}
function Uh(i, d, s, f) {
	var B;
	zt(
		Uu(),
		"useRoutes() may be used only in the context of a <Router> component.",
	);
	let { navigator: m } = D.useContext(Ue),
		{ matches: y } = D.useContext(Ce),
		T = y[y.length - 1],
		g = T ? T.params : {},
		o = T ? T.pathname : "/",
		h = T ? T.pathnameBase : "/",
		p = T && T.route;
	{
		let Z = (p && p.path) || "";
		Ch(
			o,
			!p || Z.endsWith("*") || Z.endsWith("*?"),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z === "/" ? "*" : `${Z}/*`}">.`,
		);
	}
	let b = El(),
		S;
	if (d) {
		let Z = typeof d == "string" ? Ma(d) : d;
		(zt(
			h === "/" || ((B = Z.pathname) == null ? void 0 : B.startsWith(h)),
			`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${Z.pathname}" was given in the \`location\` prop.`,
		),
			(S = Z));
	} else S = b;
	let N = S.pathname || "/",
		z = N;
	if (h !== "/") {
		let Z = h.replace(/^\//, "").split("/");
		z = "/" + N.replace(/^\//, "").split("/").slice(Z.length).join("/");
	}
	let Y = Eh(i, { pathname: z });
	(Re(
		p || Y != null,
		`No routes matched location "${S.pathname}${S.search}${S.hash}" `,
	),
		Re(
			Y == null ||
				Y[Y.length - 1].route.element !== void 0 ||
				Y[Y.length - 1].route.Component !== void 0 ||
				Y[Y.length - 1].route.lazy !== void 0,
			`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
		));
	let Q = uv(
		Y &&
			Y.map((Z) =>
				Object.assign({}, Z, {
					params: Object.assign({}, g, Z.params),
					pathname: $e([
						h,
						m.encodeLocation
							? m.encodeLocation(Z.pathname).pathname
							: Z.pathname,
					]),
					pathnameBase:
						Z.pathnameBase === "/"
							? h
							: $e([
									h,
									m.encodeLocation
										? m.encodeLocation(Z.pathnameBase).pathname
										: Z.pathnameBase,
								]),
				}),
			),
		y,
		s,
		f,
	);
	return d && Q
		? D.createElement(
				Nu.Provider,
				{
					value: {
						location: {
							pathname: "/",
							search: "",
							hash: "",
							state: null,
							key: "default",
							...S,
						},
						navigationType: "POP",
					},
				},
				Q,
			)
		: Q;
}
function tv() {
	let i = rv(),
		d = Jy(i)
			? `${i.status} ${i.statusText}`
			: i instanceof Error
				? i.message
				: JSON.stringify(i),
		s = i instanceof Error ? i.stack : null,
		f = "rgba(200,200,200, 0.5)",
		m = { padding: "0.5rem", backgroundColor: f },
		y = { padding: "2px 4px", backgroundColor: f },
		T = null;
	return (
		console.error("Error handled by React Router default ErrorBoundary:", i),
		(T = D.createElement(
			D.Fragment,
			null,
			D.createElement("p", null, "💿 Hey developer 👋"),
			D.createElement(
				"p",
				null,
				"You can provide a way better UX than this when your app throws errors by providing your own ",
				D.createElement("code", { style: y }, "ErrorBoundary"),
				" or",
				" ",
				D.createElement("code", { style: y }, "errorElement"),
				" prop on your route.",
			),
		)),
		D.createElement(
			D.Fragment,
			null,
			D.createElement("h2", null, "Unexpected Application Error!"),
			D.createElement("h3", { style: { fontStyle: "italic" } }, d),
			s ? D.createElement("pre", { style: m }, s) : null,
			T,
		)
	);
}
var ev = D.createElement(tv, null),
	lv = class extends D.Component {
		constructor(i) {
			(super(i),
				(this.state = {
					location: i.location,
					revalidation: i.revalidation,
					error: i.error,
				}));
		}
		static getDerivedStateFromError(i) {
			return { error: i };
		}
		static getDerivedStateFromProps(i, d) {
			return d.location !== i.location ||
				(d.revalidation !== "idle" && i.revalidation === "idle")
				? { error: i.error, location: i.location, revalidation: i.revalidation }
				: {
						error: i.error !== void 0 ? i.error : d.error,
						location: d.location,
						revalidation: i.revalidation || d.revalidation,
					};
		}
		componentDidCatch(i, d) {
			console.error(
				"React Router caught the following error during render",
				i,
				d,
			);
		}
		render() {
			return this.state.error !== void 0
				? D.createElement(
						Ce.Provider,
						{ value: this.props.routeContext },
						D.createElement(Vf.Provider, {
							value: this.state.error,
							children: this.props.component,
						}),
					)
				: this.props.children;
		}
	};
function av({ routeContext: i, match: d, children: s }) {
	let f = D.useContext(_a);
	return (
		f &&
			f.static &&
			f.staticContext &&
			(d.route.errorElement || d.route.ErrorBoundary) &&
			(f.staticContext._deepestRenderedBoundaryId = d.route.id),
		D.createElement(Ce.Provider, { value: i }, s)
	);
}
function uv(i, d = [], s = null, f = null) {
	if (i == null) {
		if (!s) return null;
		if (s.errors) i = s.matches;
		else if (d.length === 0 && !s.initialized && s.matches.length > 0)
			i = s.matches;
		else return null;
	}
	let m = i,
		y = s == null ? void 0 : s.errors;
	if (y != null) {
		let o = m.findIndex(
			(h) => h.route.id && (y == null ? void 0 : y[h.route.id]) !== void 0,
		);
		(zt(
			o >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`,
		),
			(m = m.slice(0, Math.min(m.length, o + 1))));
	}
	let T = !1,
		g = -1;
	if (s)
		for (let o = 0; o < m.length; o++) {
			let h = m[o];
			if (
				((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (g = o),
				h.route.id)
			) {
				let { loaderData: p, errors: b } = s,
					S =
						h.route.loader &&
						!p.hasOwnProperty(h.route.id) &&
						(!b || b[h.route.id] === void 0);
				if (h.route.lazy || S) {
					((T = !0), g >= 0 ? (m = m.slice(0, g + 1)) : (m = [m[0]]));
					break;
				}
			}
		}
	return m.reduceRight((o, h, p) => {
		let b,
			S = !1,
			N = null,
			z = null;
		s &&
			((b = y && h.route.id ? y[h.route.id] : void 0),
			(N = h.route.errorElement || ev),
			T &&
				(g < 0 && p === 0
					? (Ch(
							"route-fallback",
							!1,
							"No `HydrateFallback` element provided to render during initial hydration",
						),
						(S = !0),
						(z = null))
					: g === p &&
						((S = !0), (z = h.route.hydrateFallbackElement || null))));
		let Y = d.concat(m.slice(0, p + 1)),
			Q = () => {
				let B;
				return (
					b
						? (B = N)
						: S
							? (B = z)
							: h.route.Component
								? (B = D.createElement(h.route.Component, null))
								: h.route.element
									? (B = h.route.element)
									: (B = o),
					D.createElement(av, {
						match: h,
						routeContext: { outlet: o, matches: Y, isDataRoute: s != null },
						children: B,
					})
				);
			};
		return s && (h.route.ErrorBoundary || h.route.errorElement || p === 0)
			? D.createElement(lv, {
					location: s.location,
					revalidation: s.revalidation,
					component: N,
					error: b,
					children: Q(),
					routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
				})
			: Q();
	}, null);
}
function Kf(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function nv(i) {
	let d = D.useContext(_a);
	return (zt(d, Kf(i)), d);
}
function iv(i) {
	let d = D.useContext(ri);
	return (zt(d, Kf(i)), d);
}
function cv(i) {
	let d = D.useContext(Ce);
	return (zt(d, Kf(i)), d);
}
function Jf(i) {
	let d = cv(i),
		s = d.matches[d.matches.length - 1];
	return (
		zt(
			s.route.id,
			`${i} can only be used on routes that contain a unique "id"`,
		),
		s.route.id
	);
}
function fv() {
	return Jf("useRouteId");
}
function rv() {
	var f;
	let i = D.useContext(Vf),
		d = iv("useRouteError"),
		s = Jf("useRouteError");
	return i !== void 0 ? i : (f = d.errors) == null ? void 0 : f[s];
}
function ov() {
	let { router: i } = nv("useNavigate"),
		d = Jf("useNavigate"),
		s = D.useRef(!1);
	return (
		Dh(() => {
			s.current = !0;
		}),
		D.useCallback(
			async (m, y = {}) => {
				(Re(s.current, zh),
					s.current &&
						(typeof m == "number"
							? i.navigate(m)
							: await i.navigate(m, { fromRouteId: d, ...y })));
			},
			[i, d],
		)
	);
}
var nh = {};
function Ch(i, d, s) {
	!d && !nh[i] && ((nh[i] = !0), Re(!1, s));
}
D.memo(sv);
function sv({ routes: i, future: d, state: s }) {
	return Uh(i, void 0, s, d);
}
function Oa(i) {
	zt(
		!1,
		"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
	);
}
function dv({
	basename: i = "/",
	children: d = null,
	location: s,
	navigationType: f = "POP",
	navigator: m,
	static: y = !1,
}) {
	zt(
		!Uu(),
		"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
	);
	let T = i.replace(/^\/*/, "/"),
		g = D.useMemo(
			() => ({ basename: T, navigator: m, static: y, future: {} }),
			[T, m, y],
		);
	typeof s == "string" && (s = Ma(s));
	let {
			pathname: o = "/",
			search: h = "",
			hash: p = "",
			state: b = null,
			key: S = "default",
		} = s,
		N = D.useMemo(() => {
			let z = We(o, T);
			return z == null
				? null
				: {
						location: { pathname: z, search: h, hash: p, state: b, key: S },
						navigationType: f,
					};
		}, [T, o, h, p, b, S, f]);
	return (
		Re(
			N != null,
			`<Router basename="${T}"> is not able to match the URL "${o}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`,
		),
		N == null
			? null
			: D.createElement(
					Ue.Provider,
					{ value: g },
					D.createElement(Nu.Provider, { children: d, value: N }),
				)
	);
}
function hv({ children: i, location: d }) {
	return Iy(Gf(i), d);
}
function Gf(i, d = []) {
	let s = [];
	return (
		D.Children.forEach(i, (f, m) => {
			if (!D.isValidElement(f)) return;
			let y = [...d, m];
			if (f.type === D.Fragment) {
				s.push.apply(s, Gf(f.props.children, y));
				return;
			}
			(zt(
				f.type === Oa,
				`[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
			),
				zt(
					!f.props.index || !f.props.children,
					"An index route cannot have child routes.",
				));
			let T = {
				id: f.props.id || y.join("-"),
				caseSensitive: f.props.caseSensitive,
				element: f.props.element,
				Component: f.props.Component,
				index: f.props.index,
				path: f.props.path,
				loader: f.props.loader,
				action: f.props.action,
				hydrateFallbackElement: f.props.hydrateFallbackElement,
				HydrateFallback: f.props.HydrateFallback,
				errorElement: f.props.errorElement,
				ErrorBoundary: f.props.ErrorBoundary,
				hasErrorBoundary:
					f.props.hasErrorBoundary === !0 ||
					f.props.ErrorBoundary != null ||
					f.props.errorElement != null,
				shouldRevalidate: f.props.shouldRevalidate,
				handle: f.props.handle,
				lazy: f.props.lazy,
			};
			(f.props.children && (T.children = Gf(f.props.children, y)), s.push(T));
		}),
		s
	);
}
var Fn = "get",
	Pn = "application/x-www-form-urlencoded";
function oi(i) {
	return i != null && typeof i.tagName == "string";
}
function mv(i) {
	return oi(i) && i.tagName.toLowerCase() === "button";
}
function yv(i) {
	return oi(i) && i.tagName.toLowerCase() === "form";
}
function vv(i) {
	return oi(i) && i.tagName.toLowerCase() === "input";
}
function gv(i) {
	return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function pv(i, d) {
	return i.button === 0 && (!d || d === "_self") && !gv(i);
}
function Xf(i = "") {
	return new URLSearchParams(
		typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams
			? i
			: Object.keys(i).reduce((d, s) => {
					let f = i[s];
					return d.concat(Array.isArray(f) ? f.map((m) => [s, m]) : [[s, f]]);
				}, []),
	);
}
function Sv(i, d) {
	let s = Xf(i);
	return (
		d &&
			d.forEach((f, m) => {
				s.has(m) ||
					d.getAll(m).forEach((y) => {
						s.append(m, y);
					});
			}),
		s
	);
}
var Wn = null;
function bv() {
	if (Wn === null)
		try {
			(new FormData(document.createElement("form"), 0), (Wn = !1));
		} catch {
			Wn = !0;
		}
	return Wn;
}
var xv = new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain",
]);
function Hf(i) {
	return i != null && !xv.has(i)
		? (Re(
				!1,
				`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pn}"`,
			),
			null)
		: i;
}
function Ev(i, d) {
	let s, f, m, y, T;
	if (yv(i)) {
		let g = i.getAttribute("action");
		((f = g ? We(g, d) : null),
			(s = i.getAttribute("method") || Fn),
			(m = Hf(i.getAttribute("enctype")) || Pn),
			(y = new FormData(i)));
	} else if (mv(i) || (vv(i) && (i.type === "submit" || i.type === "image"))) {
		let g = i.form;
		if (g == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>',
			);
		let o = i.getAttribute("formaction") || g.getAttribute("action");
		if (
			((f = o ? We(o, d) : null),
			(s = i.getAttribute("formmethod") || g.getAttribute("method") || Fn),
			(m =
				Hf(i.getAttribute("formenctype")) ||
				Hf(g.getAttribute("enctype")) ||
				Pn),
			(y = new FormData(g, i)),
			!bv())
		) {
			let { name: h, type: p, value: b } = i;
			if (p === "image") {
				let S = h ? `${h}.` : "";
				(y.append(`${S}x`, "0"), y.append(`${S}y`, "0"));
			} else h && y.append(h, b);
		}
	} else {
		if (oi(i))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
			);
		((s = Fn), (f = null), (m = Pn), (T = i));
	}
	return (
		y && m === "text/plain" && ((T = y), (y = void 0)),
		{ action: f, method: s.toLowerCase(), encType: m, formData: y, body: T }
	);
}
function kf(i, d) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(d);
}
async function Tv(i, d) {
	if (i.id in d) return d[i.id];
	try {
		let s = await import(i.module);
		return ((d[i.id] = s), s);
	} catch (s) {
		return (
			console.error(
				`Error loading route module \`${i.module}\`, reloading page...`,
			),
			console.error(s),
			window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		);
	}
}
function Av(i) {
	return i == null
		? !1
		: i.href == null
			? i.rel === "preload" &&
				typeof i.imageSrcSet == "string" &&
				typeof i.imageSizes == "string"
			: typeof i.rel == "string" && typeof i.href == "string";
}
async function Rv(i, d, s) {
	let f = await Promise.all(
		i.map(async (m) => {
			let y = d.routes[m.route.id];
			if (y) {
				let T = await Tv(y, s);
				return T.links ? T.links() : [];
			}
			return [];
		}),
	);
	return zv(
		f
			.flat(1)
			.filter(Av)
			.filter((m) => m.rel === "stylesheet" || m.rel === "preload")
			.map((m) =>
				m.rel === "stylesheet"
					? { ...m, rel: "prefetch", as: "style" }
					: { ...m, rel: "prefetch" },
			),
	);
}
function ih(i, d, s, f, m, y) {
	let T = (o, h) => (s[h] ? o.route.id !== s[h].route.id : !0),
		g = (o, h) => {
			var p;
			return (
				s[h].pathname !== o.pathname ||
				(((p = s[h].route.path) == null ? void 0 : p.endsWith("*")) &&
					s[h].params["*"] !== o.params["*"])
			);
		};
	return y === "assets"
		? d.filter((o, h) => T(o, h) || g(o, h))
		: y === "data"
			? d.filter((o, h) => {
					var b;
					let p = f.routes[o.route.id];
					if (!p || !p.hasLoader) return !1;
					if (T(o, h) || g(o, h)) return !0;
					if (o.route.shouldRevalidate) {
						let S = o.route.shouldRevalidate({
							currentUrl: new URL(
								m.pathname + m.search + m.hash,
								window.origin,
							),
							currentParams: ((b = s[0]) == null ? void 0 : b.params) || {},
							nextUrl: new URL(i, window.origin),
							nextParams: o.params,
							defaultShouldRevalidate: !0,
						});
						if (typeof S == "boolean") return S;
					}
					return !0;
				})
			: [];
}
function Ov(i, d, { includeHydrateFallback: s } = {}) {
	return Mv(
		i
			.map((f) => {
				let m = d.routes[f.route.id];
				if (!m) return [];
				let y = [m.module];
				return (
					m.clientActionModule && (y = y.concat(m.clientActionModule)),
					m.clientLoaderModule && (y = y.concat(m.clientLoaderModule)),
					s &&
						m.hydrateFallbackModule &&
						(y = y.concat(m.hydrateFallbackModule)),
					m.imports && (y = y.concat(m.imports)),
					y
				);
			})
			.flat(1),
	);
}
function Mv(i) {
	return [...new Set(i)];
}
function _v(i) {
	let d = {},
		s = Object.keys(i).sort();
	for (let f of s) d[f] = i[f];
	return d;
}
function zv(i, d) {
	let s = new Set();
	return (
		new Set(d),
		i.reduce((f, m) => {
			let y = JSON.stringify(_v(m));
			return (s.has(y) || (s.add(y), f.push({ key: y, link: m })), f);
		}, [])
	);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Dv = new Set([100, 101, 204, 205]);
function Nv(i, d) {
	let s =
		typeof i == "string"
			? new URL(
					i,
					typeof window > "u"
						? "server://singlefetch/"
						: window.location.origin,
				)
			: i;
	return (
		s.pathname === "/"
			? (s.pathname = "_root.data")
			: d && We(s.pathname, d) === "/"
				? (s.pathname = `${d.replace(/\/$/, "")}/_root.data`)
				: (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
		s
	);
}
function jh() {
	let i = D.useContext(_a);
	return (
		kf(
			i,
			"You must render this element inside a <DataRouterContext.Provider> element",
		),
		i
	);
}
function Uv() {
	let i = D.useContext(ri);
	return (
		kf(
			i,
			"You must render this element inside a <DataRouterStateContext.Provider> element",
		),
		i
	);
}
var $f = D.createContext(void 0);
$f.displayName = "FrameworkContext";
function Hh() {
	let i = D.useContext($f);
	return (
		kf(i, "You must render this element inside a <HydratedRouter> element"),
		i
	);
}
function Cv(i, d) {
	let s = D.useContext($f),
		[f, m] = D.useState(!1),
		[y, T] = D.useState(!1),
		{
			onFocus: g,
			onBlur: o,
			onMouseEnter: h,
			onMouseLeave: p,
			onTouchStart: b,
		} = d,
		S = D.useRef(null);
	(D.useEffect(() => {
		if ((i === "render" && T(!0), i === "viewport")) {
			let Y = (B) => {
					B.forEach((Z) => {
						T(Z.isIntersecting);
					});
				},
				Q = new IntersectionObserver(Y, { threshold: 0.5 });
			return (
				S.current && Q.observe(S.current),
				() => {
					Q.disconnect();
				}
			);
		}
	}, [i]),
		D.useEffect(() => {
			if (f) {
				let Y = setTimeout(() => {
					T(!0);
				}, 100);
				return () => {
					clearTimeout(Y);
				};
			}
		}, [f]));
	let N = () => {
			m(!0);
		},
		z = () => {
			(m(!1), T(!1));
		};
	return s
		? i !== "intent"
			? [y, S, {}]
			: [
					y,
					S,
					{
						onFocus: zu(g, N),
						onBlur: zu(o, z),
						onMouseEnter: zu(h, N),
						onMouseLeave: zu(p, z),
						onTouchStart: zu(b, N),
					},
				]
		: [!1, S, {}];
}
function zu(i, d) {
	return (s) => {
		(i && i(s), s.defaultPrevented || d(s));
	};
}
function jv({ page: i, ...d }) {
	let { router: s } = jh(),
		f = D.useMemo(() => Eh(s.routes, i, s.basename), [s.routes, i, s.basename]);
	return f ? D.createElement(wv, { page: i, matches: f, ...d }) : null;
}
function Hv(i) {
	let { manifest: d, routeModules: s } = Hh(),
		[f, m] = D.useState([]);
	return (
		D.useEffect(() => {
			let y = !1;
			return (
				Rv(i, d, s).then((T) => {
					y || m(T);
				}),
				() => {
					y = !0;
				}
			);
		}, [i, d, s]),
		f
	);
}
function wv({ page: i, matches: d, ...s }) {
	let f = El(),
		{ manifest: m, routeModules: y } = Hh(),
		{ basename: T } = jh(),
		{ loaderData: g, matches: o } = Uv(),
		h = D.useMemo(() => ih(i, d, o, m, f, "data"), [i, d, o, m, f]),
		p = D.useMemo(() => ih(i, d, o, m, f, "assets"), [i, d, o, m, f]),
		b = D.useMemo(() => {
			if (i === f.pathname + f.search + f.hash) return [];
			let z = new Set(),
				Y = !1;
			if (
				(d.forEach((B) => {
					var $;
					let Z = m.routes[B.route.id];
					!Z ||
						!Z.hasLoader ||
						((!h.some((J) => J.route.id === B.route.id) &&
							B.route.id in g &&
							($ = y[B.route.id]) != null &&
							$.shouldRevalidate) ||
						Z.hasClientLoader
							? (Y = !0)
							: z.add(B.route.id));
				}),
				z.size === 0)
			)
				return [];
			let Q = Nv(i, T);
			return (
				Y &&
					z.size > 0 &&
					Q.searchParams.set(
						"_routes",
						d
							.filter((B) => z.has(B.route.id))
							.map((B) => B.route.id)
							.join(","),
					),
				[Q.pathname + Q.search]
			);
		}, [T, g, f, m, h, d, i, y]),
		S = D.useMemo(() => Ov(p, m), [p, m]),
		N = Hv(p);
	return D.createElement(
		D.Fragment,
		null,
		b.map((z) =>
			D.createElement("link", {
				key: z,
				rel: "prefetch",
				as: "fetch",
				href: z,
				...s,
			}),
		),
		S.map((z) =>
			D.createElement("link", { key: z, rel: "modulepreload", href: z, ...s }),
		),
		N.map(({ key: z, link: Y }) => D.createElement("link", { key: z, ...Y })),
	);
}
function qv(...i) {
	return (d) => {
		i.forEach((s) => {
			typeof s == "function" ? s(d) : s != null && (s.current = d);
		});
	};
}
var wh =
	typeof window < "u" &&
	typeof window.document < "u" &&
	typeof window.document.createElement < "u";
try {
	wh && (window.__reactRouterVersion = "7.6.3");
} catch {}
function Bv({ basename: i, children: d, window: s }) {
	let f = D.useRef();
	f.current == null && (f.current = Ay({ window: s, v5Compat: !0 }));
	let m = f.current,
		[y, T] = D.useState({ action: m.action, location: m.location }),
		g = D.useCallback(
			(o) => {
				D.startTransition(() => T(o));
			},
			[T],
		);
	return (
		D.useLayoutEffect(() => m.listen(g), [m, g]),
		D.createElement(dv, {
			basename: i,
			children: d,
			location: y.location,
			navigationType: y.action,
			navigator: m,
		})
	);
}
var qh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Wf = D.forwardRef(function (
		{
			onClick: d,
			discover: s = "render",
			prefetch: f = "none",
			relative: m,
			reloadDocument: y,
			replace: T,
			state: g,
			target: o,
			to: h,
			preventScrollReset: p,
			viewTransition: b,
			...S
		},
		N,
	) {
		let { basename: z } = D.useContext(Ue),
			Y = typeof h == "string" && qh.test(h),
			Q,
			B = !1;
		if (typeof h == "string" && Y && ((Q = h), wh))
			try {
				let ct = new URL(window.location.href),
					bt = h.startsWith("//") ? new URL(ct.protocol + h) : new URL(h),
					Rt = We(bt.pathname, z);
				bt.origin === ct.origin && Rt != null
					? (h = Rt + bt.search + bt.hash)
					: (B = !0);
			} catch {
				Re(
					!1,
					`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
				);
			}
		let Z = Fy(h, { relative: m }),
			[$, J, L] = Cv(f, S),
			ot = Xv(h, {
				replace: T,
				state: g,
				target: o,
				preventScrollReset: p,
				relative: m,
				viewTransition: b,
			});
		function lt(ct) {
			(d && d(ct), ct.defaultPrevented || ot(ct));
		}
		let at = D.createElement("a", {
			...S,
			...L,
			href: Q || Z,
			onClick: B || y ? d : lt,
			ref: qv(N, J),
			target: o,
			"data-discover": !Y && s === "render" ? "true" : void 0,
		});
		return $ && !Y
			? D.createElement(D.Fragment, null, at, D.createElement(jv, { page: Z }))
			: at;
	});
Wf.displayName = "Link";
var Yv = D.forwardRef(function (
	{
		"aria-current": d = "page",
		caseSensitive: s = !1,
		className: f = "",
		end: m = !1,
		style: y,
		to: T,
		viewTransition: g,
		children: o,
		...h
	},
	p,
) {
	let b = Cu(T, { relative: h.relative }),
		S = El(),
		N = D.useContext(ri),
		{ navigator: z, basename: Y } = D.useContext(Ue),
		Q = N != null && Jv(b) && g === !0,
		B = z.encodeLocation ? z.encodeLocation(b).pathname : b.pathname,
		Z = S.pathname,
		$ =
			N && N.navigation && N.navigation.location
				? N.navigation.location.pathname
				: null;
	(s ||
		((Z = Z.toLowerCase()),
		($ = $ ? $.toLowerCase() : null),
		(B = B.toLowerCase())),
		$ && Y && ($ = We($, Y) || $));
	const J = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
	let L = Z === B || (!m && Z.startsWith(B) && Z.charAt(J) === "/"),
		ot =
			$ != null &&
			($ === B || (!m && $.startsWith(B) && $.charAt(B.length) === "/")),
		lt = { isActive: L, isPending: ot, isTransitioning: Q },
		at = L ? d : void 0,
		ct;
	typeof f == "function"
		? (ct = f(lt))
		: (ct = [
				f,
				L ? "active" : null,
				ot ? "pending" : null,
				Q ? "transitioning" : null,
			]
				.filter(Boolean)
				.join(" "));
	let bt = typeof y == "function" ? y(lt) : y;
	return D.createElement(
		Wf,
		{
			...h,
			"aria-current": at,
			className: ct,
			ref: p,
			style: bt,
			to: T,
			viewTransition: g,
		},
		typeof o == "function" ? o(lt) : o,
	);
});
Yv.displayName = "NavLink";
var Lv = D.forwardRef(
	(
		{
			discover: i = "render",
			fetcherKey: d,
			navigate: s,
			reloadDocument: f,
			replace: m,
			state: y,
			method: T = Fn,
			action: g,
			onSubmit: o,
			relative: h,
			preventScrollReset: p,
			viewTransition: b,
			...S
		},
		N,
	) => {
		let z = Vv(),
			Y = Kv(g, { relative: h }),
			Q = T.toLowerCase() === "get" ? "get" : "post",
			B = typeof g == "string" && qh.test(g),
			Z = ($) => {
				if ((o && o($), $.defaultPrevented)) return;
				$.preventDefault();
				let J = $.nativeEvent.submitter,
					L = (J == null ? void 0 : J.getAttribute("formmethod")) || T;
				z(J || $.currentTarget, {
					fetcherKey: d,
					method: L,
					navigate: s,
					replace: m,
					state: y,
					relative: h,
					preventScrollReset: p,
					viewTransition: b,
				});
			};
		return D.createElement("form", {
			ref: N,
			method: Q,
			action: Y,
			onSubmit: f ? o : Z,
			...S,
			"data-discover": !B && i === "render" ? "true" : void 0,
		});
	},
);
Lv.displayName = "Form";
function Gv(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bh(i) {
	let d = D.useContext(_a);
	return (zt(d, Gv(i)), d);
}
function Xv(
	i,
	{
		target: d,
		replace: s,
		state: f,
		preventScrollReset: m,
		relative: y,
		viewTransition: T,
	} = {},
) {
	let g = Nh(),
		o = El(),
		h = Cu(i, { relative: y });
	return D.useCallback(
		(p) => {
			if (pv(p, d)) {
				p.preventDefault();
				let b = s !== void 0 ? s : Du(o) === Du(h);
				g(i, {
					replace: b,
					state: f,
					preventScrollReset: m,
					relative: y,
					viewTransition: T,
				});
			}
		},
		[o, g, h, s, f, d, i, m, y, T],
	);
}
function lg(i) {
	Re(
		typeof URLSearchParams < "u",
		"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
	);
	let d = D.useRef(Xf(i)),
		s = D.useRef(!1),
		f = El(),
		m = D.useMemo(() => Sv(f.search, s.current ? null : d.current), [f.search]),
		y = Nh(),
		T = D.useCallback(
			(g, o) => {
				const h = Xf(typeof g == "function" ? g(m) : g);
				((s.current = !0), y("?" + h, o));
			},
			[y, m],
		);
	return [m, T];
}
var Qv = 0,
	Zv = () => `__${String(++Qv)}__`;
function Vv() {
	let { router: i } = Bh("useSubmit"),
		{ basename: d } = D.useContext(Ue),
		s = fv();
	return D.useCallback(
		async (f, m = {}) => {
			let { action: y, method: T, encType: g, formData: o, body: h } = Ev(f, d);
			if (m.navigate === !1) {
				let p = m.fetcherKey || Zv();
				await i.fetch(p, s, m.action || y, {
					preventScrollReset: m.preventScrollReset,
					formData: o,
					body: h,
					formMethod: m.method || T,
					formEncType: m.encType || g,
					flushSync: m.flushSync,
				});
			} else
				await i.navigate(m.action || y, {
					preventScrollReset: m.preventScrollReset,
					formData: o,
					body: h,
					formMethod: m.method || T,
					formEncType: m.encType || g,
					replace: m.replace,
					state: m.state,
					fromRouteId: s,
					flushSync: m.flushSync,
					viewTransition: m.viewTransition,
				});
		},
		[i, d, s],
	);
}
function Kv(i, { relative: d } = {}) {
	let { basename: s } = D.useContext(Ue),
		f = D.useContext(Ce);
	zt(f, "useFormAction must be used inside a RouteContext");
	let [m] = f.matches.slice(-1),
		y = { ...Cu(i || ".", { relative: d }) },
		T = El();
	if (i == null) {
		y.search = T.search;
		let g = new URLSearchParams(y.search),
			o = g.getAll("index");
		if (o.some((p) => p === "")) {
			(g.delete("index"),
				o.filter((b) => b).forEach((b) => g.append("index", b)));
			let p = g.toString();
			y.search = p ? `?${p}` : "";
		}
	}
	return (
		(!i || i === ".") &&
			m.route.index &&
			(y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"),
		s !== "/" && (y.pathname = y.pathname === "/" ? s : $e([s, y.pathname])),
		Du(y)
	);
}
function Jv(i, d = {}) {
	let s = D.useContext(_h);
	zt(
		s != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
	);
	let { basename: f } = Bh("useViewTransitionState"),
		m = Cu(i, { relative: d.relative });
	if (!s.isTransitioning) return !1;
	let y = We(s.currentLocation.pathname, f) || s.currentLocation.pathname,
		T = We(s.nextLocation.pathname, f) || s.nextLocation.pathname;
	return ci(m.pathname, T) != null || ci(m.pathname, y) != null;
}
[...Dv];
const kv = D.createContext({}),
	$v = ({ children: i }) => C.jsx(kv.Provider, { value: {}, children: i }),
	Wv = (i) => {
		if (!i) return { error: "jsonSafeParse: string is empty", success: !1 };
		try {
			return { json: JSON.parse(i), success: !0 };
		} catch (d) {
			return (
				console.error("error parsing json", d),
				{ error: `jsonSafeParse: couldn't parse ${i}`, success: !1 }
			);
		}
	};
function ch() {
	if (typeof window.crypto.randomUUID == "function")
		return window.crypto.randomUUID();
	let i = "";
	for (let d = 0; d < 36; d++)
		if ([8, 13, 18, 23].includes(d)) i = i + "-";
		else {
			const s = Math.floor(36 * Math.random());
			i = i + s.toString(36);
		}
	return i;
}
const wf = "DICE_CITY_OPTIONS",
	Yh = {
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
	Lh = D.createContext({ options: Yh, setOptions: () => {} }),
	Fv = ({ children: i }) => {
		const d = localStorage.getItem(wf);
		let s = {};
		const f = Wv(d);
		f.success && (s = f.json);
		const [m, y] = D.useState({ ...Yh, ...s });
		return (
			D.useEffect(() => {
				(!m.playerId || !m.playerPassword) &&
					y((T) => {
						const g = { ...T };
						(g.playerId || (g.playerId = ch()),
							g.playerPassword || (g.playerPassword = ch()));
						const { ping: o, ...h } = g;
						return (localStorage.setItem(wf, JSON.stringify(h)), g);
					});
			}, []),
			C.jsx(Lh.Provider, {
				value: {
					options: m,
					setOptions: (T) => {
						y((g) => {
							const o = { ...g, ...T },
								{ ping: h, ...p } = o;
							return (localStorage.setItem(wf, JSON.stringify(p)), o);
						});
					},
				},
				children: i,
			})
		);
	},
	si = () => D.useContext(Lh),
	Pv = "modulepreload",
	Iv = function (i) {
		return "/" + i;
	},
	fh = {},
	Ff = function (d, s, f) {
		let m = Promise.resolve();
		if (s && s.length > 0) {
			document.getElementsByTagName("link");
			const T = document.querySelector("meta[property=csp-nonce]"),
				g =
					(T == null ? void 0 : T.nonce) ||
					(T == null ? void 0 : T.getAttribute("nonce"));
			m = Promise.allSettled(
				s.map((o) => {
					if (((o = Iv(o)), o in fh)) return;
					fh[o] = !0;
					const h = o.endsWith(".css"),
						p = h ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${o}"]${p}`)) return;
					const b = document.createElement("link");
					if (
						((b.rel = h ? "stylesheet" : Pv),
						h || (b.as = "script"),
						(b.crossOrigin = ""),
						(b.href = o),
						g && b.setAttribute("nonce", g),
						document.head.appendChild(b),
						h)
					)
						return new Promise((S, N) => {
							(b.addEventListener("load", S),
								b.addEventListener("error", () =>
									N(new Error(`Unable to preload CSS for ${o}`)),
								));
						});
				}),
			);
		}
		function y(T) {
			const g = new Event("vite:preloadError", { cancelable: !0 });
			if (((g.payload = T), window.dispatchEvent(g), !g.defaultPrevented))
				throw T;
		}
		return m.then((T) => {
			for (const g of T || []) g.status === "rejected" && y(g.reason);
			return d().catch(y);
		});
	};
function Gh() {
	return C.jsx("div", {
		className: "flex h-full items-center justify-center",
		children: C.jsx("div", {
			className: "animate-spin-loading rounded-full border p-4",
			children: "Loading",
		}),
	});
}
const ag = Object.freeze(
	Object.defineProperty({ __proto__: null, default: Gh }, Symbol.toStringTag, {
		value: "Module",
	}),
);
function fi({ children: i, className: d }) {
	return C.jsx("div", {
		className: `mx-1 first:ml-0 last:mr-0 ${d || ""}`,
		children: i,
	});
}
function t1() {
	const {
			options: { playerName: i },
			setOptions: d,
		} = si(),
		s = D.useRef(null),
		[f, m] = D.useState(!i),
		[y, T] = D.useState(i);
	return (
		D.useEffect(() => {
			i ||
				setTimeout(() => {
					var g;
					(g = s.current) == null || g.focus();
				});
		}, []),
		C.jsx(fi, {
			children: f
				? C.jsxs("form", {
						onSubmit: (g) => {
							(g.preventDefault(), y && (d({ playerName: y }), m(!1)));
						},
						children: [
							C.jsx("input", {
								className:
									"rounded-l border border-r-0 border-gray-600 px-2 dark:border-gray-300 dark:bg-gray-600",
								ref: s,
								type: "text",
								onChange: (g) => {
									T(g.target.value);
								},
								value: y,
								placeholder: "Enter your name",
								required: !0,
							}),
							C.jsx("button", {
								className:
									"rounded-r border border-gray-600 px-2 py-0 dark:border-gray-300",
								children: "Save",
							}),
						],
					})
				: C.jsxs(C.Fragment, {
						children: [
							C.jsx("span", { className: "mr-2", children: i }),
							C.jsx("button", {
								className:
									"rounded border border-gray-600 px-2 py-0 dark:border-gray-300",
								onClick: () => {
									(m(!0),
										setTimeout(() => {
											if (s.current) {
												const g = s.current;
												(g.focus(), g.setSelectionRange(0, g.value.length));
											}
										}));
								},
								children: "Change Name",
							}),
						],
					}),
		})
	);
}
function In({ children: i, legend: d }) {
	return C.jsxs("fieldset", {
		className:
			"border border-gray-700 p-2 dark:border-gray-300 dark:bg-gray-800",
		children: [
			!!d && C.jsx("legend", { className: "-mb-2 px-0.5", children: d }),
			i,
		],
	});
}
function e1({ darkMode: i, setOptions: d }) {
	return C.jsxs(In, {
		legend: "Colour Theme",
		children: [
			C.jsxs("label", {
				className: "block",
				children: [
					C.jsx("input", {
						onChange: () => {
							d({ darkMode: "dark" });
						},
						type: "radio",
						value: "dark",
						name: "darkMode",
						checked: i === "dark",
					}),
					" Dark Mode",
				],
			}),
			C.jsxs("label", {
				className: "block",
				children: [
					C.jsx("input", {
						onChange: () => {
							d({ darkMode: "light" });
						},
						type: "radio",
						value: "light",
						name: "darkMode",
						checked: i === "light",
					}),
					" Light Mode",
				],
			}),
			C.jsxs("label", {
				className: "block",
				children: [
					C.jsx("input", {
						onChange: () => {
							d({ darkMode: "system" });
						},
						type: "radio",
						value: "system",
						name: "darkMode",
						checked: i === "system",
					}),
					" System (default)",
				],
			}),
		],
	});
}
function l1() {
	const { options: i, setOptions: d } = si(),
		s = D.useRef(new Audio("/dice-roll.mp3")).current,
		f = D.useRef(new Audio("/chord-ceg.mp3")).current;
	return C.jsx(fi, {
		className: "relative",
		children: C.jsxs("details", {
			children: [
				C.jsx("summary", { children: "Options" }),
				C.jsxs("div", {
					className:
						"absolute right-0 top-full z-30 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800",
					children: [
						C.jsx(e1, { darkMode: i.darkMode, setOptions: d }),
						C.jsxs(In, {
							legend: "Show Names",
							children: [
								C.jsxs("label", {
									className: "block",
									children: [
										C.jsx("input", {
											type: "checkbox",
											checked: i.showNamesPublic,
											onChange: () => {
												d({ showNamesPublic: !i.showNamesPublic });
											},
										}),
										" Public Games",
									],
								}),
								C.jsxs("label", {
									className: "block",
									children: [
										C.jsx("input", {
											type: "checkbox",
											checked: i.showNames,
											onChange: () => {
												d({ showNames: !i.showNames });
											},
										}),
										" Private Games",
									],
								}),
							],
						}),
						C.jsxs(In, {
							legend: "Misc.",
							children: [
								C.jsxs("label", {
									className: "block",
									children: [
										C.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowCities,
											onChange: () => {
												d({ alwaysShowCities: !i.alwaysShowCities });
											},
										}),
										"  Always Show Cities",
									],
								}),
								C.jsxs("label", {
									className: "block",
									children: [
										C.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowSupply,
											onChange: () => {
												d({ alwaysShowSupply: !i.alwaysShowSupply });
											},
										}),
										"  Always Show Supply",
									],
								}),
								C.jsxs("label", {
									className: "block",
									children: [
										C.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowEstablishmentList,
											onChange: () => {
												d({
													alwaysShowEstablishmentList:
														!i.alwaysShowEstablishmentList,
												});
											},
										}),
										"  Always Show Establishment List",
									],
								}),
								C.jsxs("label", {
									className: "block",
									children: [
										C.jsx("input", {
											type: "checkbox",
											checked: !i.hideInstructions,
											onChange: () => {
												d({ hideInstructions: !i.hideInstructions });
											},
										}),
										"  Always Show Instructions",
									],
								}),
								C.jsxs("label", {
									className: "block",
									children: [
										C.jsx("input", {
											type: "checkbox",
											checked: i.newestEventFirst,
											onChange: () => {
												d({ newestEventFirst: !i.newestEventFirst });
											},
										}),
										"  Newest Turn Event On Top",
									],
								}),
								C.jsxs("label", {
									className: "flex items-center gap-4",
									children: [
										C.jsxs("div", {
											children: [
												C.jsx("span", {
													className: "font-mono",
													children: i.turnEventSummaryCount,
												}),
												C.jsx("span", {
													children: " Turn Event Summary Items",
												}),
											],
										}),
										C.jsx("input", {
											className: "max-w-24",
											type: "range",
											min: 0,
											max: 5,
											step: 1,
											value: i.turnEventSummaryCount,
											onChange: (m) => {
												d({
													turnEventSummaryCount: parseInt(
														m.currentTarget.value,
														10,
													),
												});
											},
										}),
									],
								}),
							],
						}),
						C.jsx(In, {
							legend: "Volume",
							children: C.jsx("table", {
								className: "w-full",
								children: C.jsxs("tbody", {
									children: [
										C.jsxs("tr", {
											children: [
												C.jsx("td", { children: "Dice Roll" }),
												C.jsx("td", {
													children: C.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: C.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															value: i.diceRollVolume,
															min: 0,
															max: 1,
															step: 0.01,
															onChange: (m) => {
																d({
																	diceRollVolume: parseFloat(
																		m.currentTarget.value,
																	),
																});
															},
															onMouseUp: (m) => {
																((s.volume = parseFloat(m.currentTarget.value)),
																	s.play());
															},
														}),
													}),
												}),
											],
										}),
										C.jsxs("tr", {
											children: [
												C.jsx("td", { children: "Your Turn" }),
												C.jsx("td", {
													children: C.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: C.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															min: 0,
															max: 1,
															step: 0.01,
															value: i.yourTurnVolume,
															onChange: (m) => {
																d({
																	yourTurnVolume: parseFloat(
																		m.currentTarget.value,
																	),
																});
															},
															onMouseUp: (m) => {
																((f.volume = parseFloat(m.currentTarget.value)),
																	f.play());
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
function a1() {
	const { options: i } = si();
	return C.jsxs("div", {
		className: "absolute mb-1 mt-2 flex w-full flex-wrap justify-end",
		children: [
			C.jsx("div", { className: "basis-1" }),
			C.jsx(t1, {}),
			typeof i.ping == "number" &&
				C.jsxs("div", { children: ["Ping: ", i.ping, " ms"] }),
			C.jsx("div", { className: "grow" }),
			C.jsx(l1, {}),
			C.jsx(fi, { children: C.jsx(Wf, { to: "/", children: "Home" }) }),
			C.jsx(fi, {
				children: C.jsx("a", {
					target: "_blank",
					href: "https://github.com/nick-ng/dice-city",
					children: "GitHub",
				}),
			}),
			C.jsx("div", { className: "basis-1" }),
		],
	});
}
var ti = { exports: {} },
	u1 = ti.exports,
	rh;
function n1() {
	return (
		rh ||
			((rh = 1),
			(function (i) {
				(function (d, s, f) {
					function m(o) {
						var h = this,
							p = g();
						((h.next = function () {
							var b = 2091639 * h.s0 + h.c * 23283064365386963e-26;
							return ((h.s0 = h.s1), (h.s1 = h.s2), (h.s2 = b - (h.c = b | 0)));
						}),
							(h.c = 1),
							(h.s0 = p(" ")),
							(h.s1 = p(" ")),
							(h.s2 = p(" ")),
							(h.s0 -= p(o)),
							h.s0 < 0 && (h.s0 += 1),
							(h.s1 -= p(o)),
							h.s1 < 0 && (h.s1 += 1),
							(h.s2 -= p(o)),
							h.s2 < 0 && (h.s2 += 1),
							(p = null));
					}
					function y(o, h) {
						return (
							(h.c = o.c),
							(h.s0 = o.s0),
							(h.s1 = o.s1),
							(h.s2 = o.s2),
							h
						);
					}
					function T(o, h) {
						var p = new m(o),
							b = h && h.state,
							S = p.next;
						return (
							(S.int32 = function () {
								return (p.next() * 4294967296) | 0;
							}),
							(S.double = function () {
								return S() + ((S() * 2097152) | 0) * 11102230246251565e-32;
							}),
							(S.quick = S),
							b &&
								(typeof b == "object" && y(b, p),
								(S.state = function () {
									return y(p, {});
								})),
							S
						);
					}
					function g() {
						var o = 4022871197,
							h = function (p) {
								p = String(p);
								for (var b = 0; b < p.length; b++) {
									o += p.charCodeAt(b);
									var S = 0.02519603282416938 * o;
									((o = S >>> 0),
										(S -= o),
										(S *= o),
										(o = S >>> 0),
										(S -= o),
										(o += S * 4294967296));
								}
								return (o >>> 0) * 23283064365386963e-26;
							};
						return h;
					}
					s && s.exports ? (s.exports = T) : (this.alea = T);
				})(u1, i);
			})(ti)),
		ti.exports
	);
}
var ei = { exports: {} },
	i1 = ei.exports,
	oh;
function c1() {
	return (
		oh ||
			((oh = 1),
			(function (i) {
				(function (d, s, f) {
					function m(g) {
						var o = this,
							h = "";
						((o.x = 0),
							(o.y = 0),
							(o.z = 0),
							(o.w = 0),
							(o.next = function () {
								var b = o.x ^ (o.x << 11);
								return (
									(o.x = o.y),
									(o.y = o.z),
									(o.z = o.w),
									(o.w ^= (o.w >>> 19) ^ b ^ (b >>> 8))
								);
							}),
							g === (g | 0) ? (o.x = g) : (h += g));
						for (var p = 0; p < h.length + 64; p++)
							((o.x ^= h.charCodeAt(p) | 0), o.next());
					}
					function y(g, o) {
						return ((o.x = g.x), (o.y = g.y), (o.z = g.z), (o.w = g.w), o);
					}
					function T(g, o) {
						var h = new m(g),
							p = o && o.state,
							b = function () {
								return (h.next() >>> 0) / 4294967296;
							};
						return (
							(b.double = function () {
								do
									var S = h.next() >>> 11,
										N = (h.next() >>> 0) / 4294967296,
										z = (S + N) / (1 << 21);
								while (z === 0);
								return z;
							}),
							(b.int32 = h.next),
							(b.quick = b),
							p &&
								(typeof p == "object" && y(p, h),
								(b.state = function () {
									return y(h, {});
								})),
							b
						);
					}
					s && s.exports ? (s.exports = T) : (this.xor128 = T);
				})(i1, i);
			})(ei)),
		ei.exports
	);
}
var li = { exports: {} },
	f1 = li.exports,
	sh;
function r1() {
	return (
		sh ||
			((sh = 1),
			(function (i) {
				(function (d, s, f) {
					function m(g) {
						var o = this,
							h = "";
						((o.next = function () {
							var b = o.x ^ (o.x >>> 2);
							return (
								(o.x = o.y),
								(o.y = o.z),
								(o.z = o.w),
								(o.w = o.v),
								((o.d = (o.d + 362437) | 0) +
									(o.v = o.v ^ (o.v << 4) ^ (b ^ (b << 1)))) |
									0
							);
						}),
							(o.x = 0),
							(o.y = 0),
							(o.z = 0),
							(o.w = 0),
							(o.v = 0),
							g === (g | 0) ? (o.x = g) : (h += g));
						for (var p = 0; p < h.length + 64; p++)
							((o.x ^= h.charCodeAt(p) | 0),
								p == h.length && (o.d = (o.x << 10) ^ (o.x >>> 4)),
								o.next());
					}
					function y(g, o) {
						return (
							(o.x = g.x),
							(o.y = g.y),
							(o.z = g.z),
							(o.w = g.w),
							(o.v = g.v),
							(o.d = g.d),
							o
						);
					}
					function T(g, o) {
						var h = new m(g),
							p = o && o.state,
							b = function () {
								return (h.next() >>> 0) / 4294967296;
							};
						return (
							(b.double = function () {
								do
									var S = h.next() >>> 11,
										N = (h.next() >>> 0) / 4294967296,
										z = (S + N) / (1 << 21);
								while (z === 0);
								return z;
							}),
							(b.int32 = h.next),
							(b.quick = b),
							p &&
								(typeof p == "object" && y(p, h),
								(b.state = function () {
									return y(h, {});
								})),
							b
						);
					}
					s && s.exports ? (s.exports = T) : (this.xorwow = T);
				})(f1, i);
			})(li)),
		li.exports
	);
}
var ai = { exports: {} },
	o1 = ai.exports,
	dh;
function s1() {
	return (
		dh ||
			((dh = 1),
			(function (i) {
				(function (d, s, f) {
					function m(g) {
						var o = this;
						o.next = function () {
							var p = o.x,
								b = o.i,
								S,
								N;
							return (
								(S = p[b]),
								(S ^= S >>> 7),
								(N = S ^ (S << 24)),
								(S = p[(b + 1) & 7]),
								(N ^= S ^ (S >>> 10)),
								(S = p[(b + 3) & 7]),
								(N ^= S ^ (S >>> 3)),
								(S = p[(b + 4) & 7]),
								(N ^= S ^ (S << 7)),
								(S = p[(b + 7) & 7]),
								(S = S ^ (S << 13)),
								(N ^= S ^ (S << 9)),
								(p[b] = N),
								(o.i = (b + 1) & 7),
								N
							);
						};
						function h(p, b) {
							var S,
								N = [];
							if (b === (b | 0)) N[0] = b;
							else
								for (b = "" + b, S = 0; S < b.length; ++S)
									N[S & 7] =
										(N[S & 7] << 15) ^
										((b.charCodeAt(S) + N[(S + 1) & 7]) << 13);
							for (; N.length < 8; ) N.push(0);
							for (S = 0; S < 8 && N[S] === 0; ++S);
							for (
								S == 8 ? (N[7] = -1) : N[S], p.x = N, p.i = 0, S = 256;
								S > 0;
								--S
							)
								p.next();
						}
						h(o, g);
					}
					function y(g, o) {
						return ((o.x = g.x.slice()), (o.i = g.i), o);
					}
					function T(g, o) {
						g == null && (g = +new Date());
						var h = new m(g),
							p = o && o.state,
							b = function () {
								return (h.next() >>> 0) / 4294967296;
							};
						return (
							(b.double = function () {
								do
									var S = h.next() >>> 11,
										N = (h.next() >>> 0) / 4294967296,
										z = (S + N) / (1 << 21);
								while (z === 0);
								return z;
							}),
							(b.int32 = h.next),
							(b.quick = b),
							p &&
								(p.x && y(p, h),
								(b.state = function () {
									return y(h, {});
								})),
							b
						);
					}
					s && s.exports ? (s.exports = T) : (this.xorshift7 = T);
				})(o1, i);
			})(ai)),
		ai.exports
	);
}
var ui = { exports: {} },
	d1 = ui.exports,
	hh;
function h1() {
	return (
		hh ||
			((hh = 1),
			(function (i) {
				(function (d, s, f) {
					function m(g) {
						var o = this;
						o.next = function () {
							var p = o.w,
								b = o.X,
								S = o.i,
								N,
								z;
							return (
								(o.w = p = (p + 1640531527) | 0),
								(z = b[(S + 34) & 127]),
								(N = b[(S = (S + 1) & 127)]),
								(z ^= z << 13),
								(N ^= N << 17),
								(z ^= z >>> 15),
								(N ^= N >>> 12),
								(z = b[S] = z ^ N),
								(o.i = S),
								(z + (p ^ (p >>> 16))) | 0
							);
						};
						function h(p, b) {
							var S,
								N,
								z,
								Y,
								Q,
								B = [],
								Z = 128;
							for (
								b === (b | 0)
									? ((N = b), (b = null))
									: ((b = b + "\0"), (N = 0), (Z = Math.max(Z, b.length))),
									z = 0,
									Y = -32;
								Y < Z;
								++Y
							)
								(b && (N ^= b.charCodeAt((Y + 32) % b.length)),
									Y === 0 && (Q = N),
									(N ^= N << 10),
									(N ^= N >>> 15),
									(N ^= N << 4),
									(N ^= N >>> 13),
									Y >= 0 &&
										((Q = (Q + 1640531527) | 0),
										(S = B[Y & 127] ^= N + Q),
										(z = S == 0 ? z + 1 : 0)));
							for (
								z >= 128 && (B[((b && b.length) || 0) & 127] = -1),
									z = 127,
									Y = 4 * 128;
								Y > 0;
								--Y
							)
								((N = B[(z + 34) & 127]),
									(S = B[(z = (z + 1) & 127)]),
									(N ^= N << 13),
									(S ^= S << 17),
									(N ^= N >>> 15),
									(S ^= S >>> 12),
									(B[z] = N ^ S));
							((p.w = Q), (p.X = B), (p.i = z));
						}
						h(o, g);
					}
					function y(g, o) {
						return ((o.i = g.i), (o.w = g.w), (o.X = g.X.slice()), o);
					}
					function T(g, o) {
						g == null && (g = +new Date());
						var h = new m(g),
							p = o && o.state,
							b = function () {
								return (h.next() >>> 0) / 4294967296;
							};
						return (
							(b.double = function () {
								do
									var S = h.next() >>> 11,
										N = (h.next() >>> 0) / 4294967296,
										z = (S + N) / (1 << 21);
								while (z === 0);
								return z;
							}),
							(b.int32 = h.next),
							(b.quick = b),
							p &&
								(p.X && y(p, h),
								(b.state = function () {
									return y(h, {});
								})),
							b
						);
					}
					s && s.exports ? (s.exports = T) : (this.xor4096 = T);
				})(d1, i);
			})(ui)),
		ui.exports
	);
}
var ni = { exports: {} },
	m1 = ni.exports,
	mh;
function y1() {
	return (
		mh ||
			((mh = 1),
			(function (i) {
				(function (d, s, f) {
					function m(g) {
						var o = this,
							h = "";
						((o.next = function () {
							var b = o.b,
								S = o.c,
								N = o.d,
								z = o.a;
							return (
								(b = (b << 25) ^ (b >>> 7) ^ S),
								(S = (S - N) | 0),
								(N = (N << 24) ^ (N >>> 8) ^ z),
								(z = (z - b) | 0),
								(o.b = b = (b << 20) ^ (b >>> 12) ^ S),
								(o.c = S = (S - N) | 0),
								(o.d = (N << 16) ^ (S >>> 16) ^ z),
								(o.a = (z - b) | 0)
							);
						}),
							(o.a = 0),
							(o.b = 0),
							(o.c = -1640531527),
							(o.d = 1367130551),
							g === Math.floor(g)
								? ((o.a = (g / 4294967296) | 0), (o.b = g | 0))
								: (h += g));
						for (var p = 0; p < h.length + 20; p++)
							((o.b ^= h.charCodeAt(p) | 0), o.next());
					}
					function y(g, o) {
						return ((o.a = g.a), (o.b = g.b), (o.c = g.c), (o.d = g.d), o);
					}
					function T(g, o) {
						var h = new m(g),
							p = o && o.state,
							b = function () {
								return (h.next() >>> 0) / 4294967296;
							};
						return (
							(b.double = function () {
								do
									var S = h.next() >>> 11,
										N = (h.next() >>> 0) / 4294967296,
										z = (S + N) / (1 << 21);
								while (z === 0);
								return z;
							}),
							(b.int32 = h.next),
							(b.quick = b),
							p &&
								(typeof p == "object" && y(p, h),
								(b.state = function () {
									return y(h, {});
								})),
							b
						);
					}
					s && s.exports ? (s.exports = T) : (this.tychei = T);
				})(m1, i);
			})(ni)),
		ni.exports
	);
}
var ii = { exports: {} };
const v1 = {},
	g1 = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: v1 },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	p1 = sy(g1);
var S1 = ii.exports,
	yh;
function b1() {
	return (
		yh ||
			((yh = 1),
			(function (i) {
				(function (d, s, f) {
					var m = 256,
						y = 6,
						T = 52,
						g = "random",
						o = f.pow(m, y),
						h = f.pow(2, T),
						p = h * 2,
						b = m - 1,
						S;
					function N(J, L, ot) {
						var lt = [];
						L = L == !0 ? { entropy: !0 } : L || {};
						var at = B(Q(L.entropy ? [J, $(s)] : (J ?? Z()), 3), lt),
							ct = new z(lt),
							bt = function () {
								for (var Rt = ct.g(y), Tt = o, Yt = 0; Rt < h; )
									((Rt = (Rt + Yt) * m), (Tt *= m), (Yt = ct.g(1)));
								for (; Rt >= p; ) ((Rt /= 2), (Tt /= 2), (Yt >>>= 1));
								return (Rt + Yt) / Tt;
							};
						return (
							(bt.int32 = function () {
								return ct.g(4) | 0;
							}),
							(bt.quick = function () {
								return ct.g(4) / 4294967296;
							}),
							(bt.double = bt),
							B($(ct.S), s),
							(
								L.pass ||
								ot ||
								function (Rt, Tt, Yt, Jt) {
									return (
										Jt &&
											(Jt.S && Y(Jt, ct),
											(Rt.state = function () {
												return Y(ct, {});
											})),
										Yt ? ((f[g] = Rt), Tt) : Rt
									);
								}
							)(bt, at, "global" in L ? L.global : this == f, L.state)
						);
					}
					function z(J) {
						var L,
							ot = J.length,
							lt = this,
							at = 0,
							ct = (lt.i = lt.j = 0),
							bt = (lt.S = []);
						for (ot || (J = [ot++]); at < m; ) bt[at] = at++;
						for (at = 0; at < m; at++)
							((bt[at] = bt[(ct = b & (ct + J[at % ot] + (L = bt[at])))]),
								(bt[ct] = L));
						(lt.g = function (Rt) {
							for (var Tt, Yt = 0, Jt = lt.i, Ut = lt.j, U = lt.S; Rt--; )
								((Tt = U[(Jt = b & (Jt + 1))]),
									(Yt =
										Yt * m +
										U[b & ((U[Jt] = U[(Ut = b & (Ut + Tt))]) + (U[Ut] = Tt))]));
							return ((lt.i = Jt), (lt.j = Ut), Yt);
						})(m);
					}
					function Y(J, L) {
						return ((L.i = J.i), (L.j = J.j), (L.S = J.S.slice()), L);
					}
					function Q(J, L) {
						var ot = [],
							lt = typeof J,
							at;
						if (L && lt == "object")
							for (at in J)
								try {
									ot.push(Q(J[at], L - 1));
								} catch {}
						return ot.length ? ot : lt == "string" ? J : J + "\0";
					}
					function B(J, L) {
						for (var ot = J + "", lt, at = 0; at < ot.length; )
							L[b & at] = b & ((lt ^= L[b & at] * 19) + ot.charCodeAt(at++));
						return $(L);
					}
					function Z() {
						try {
							var J;
							return (
								S && (J = S.randomBytes)
									? (J = J(m))
									: ((J = new Uint8Array(m)),
										(d.crypto || d.msCrypto).getRandomValues(J)),
								$(J)
							);
						} catch {
							var L = d.navigator,
								ot = L && L.plugins;
							return [+new Date(), d, ot, d.screen, $(s)];
						}
					}
					function $(J) {
						return String.fromCharCode.apply(0, J);
					}
					if ((B(f.random(), s), i.exports)) {
						i.exports = N;
						try {
							S = p1;
						} catch {}
					} else f["seed" + g] = N;
				})(typeof self < "u" ? self : S1, [], Math);
			})(ii)),
		ii.exports
	);
}
var qf, vh;
function x1() {
	if (vh) return qf;
	vh = 1;
	var i = n1(),
		d = c1(),
		s = r1(),
		f = s1(),
		m = h1(),
		y = y1(),
		T = b1();
	return (
		(T.alea = i),
		(T.xor128 = d),
		(T.xorwow = s),
		(T.xorshift7 = f),
		(T.xor4096 = m),
		(T.tychei = y),
		(qf = T),
		qf
	);
}
var E1 = x1();
const T1 = xh(E1),
	A1 = [
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
	R1 = ["Robot", "Locomotive", "Automobile"],
	O1 = ["Cactus", "Sunflower", "Poppy", "Banana"],
	M1 = ["ChristopherNolan"],
	_1 = ["MonopolySet"],
	gh = Object.freeze([...new Set([...A1, ...R1, ...O1, ...M1, ..._1])]),
	z1 = 1,
	Bf = 2,
	D1 = 4,
	ph = 5,
	N1 = 7,
	U1 = 8,
	C1 = 10,
	j1 = [
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
	H1 = ["Singular", "Multiple", "One", "Two", "Extra"],
	w1 = ["Big", "Small", "Huge", "Little", "Colossal", "Tiny"],
	q1 = [
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
	B1 = ["Brutal", "Kind", "Nippy", "Savage"],
	Y1 = ["Old", "Young", "Elder", "Adolescent"],
	L1 = ["Quick", "Slow", "Fast", "Sluggish"],
	G1 = [
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
	X1 = ["Solid", "Hard", "Squishy"],
	Q1 = ["Poisonous", "Venomous"],
	Z1 = Object.freeze(
		[
			...j1.map((i) => ({
				value: i,
				type: "colour",
				order: U1,
				allowMultiple: !1,
			})),
			...H1.map((i) => ({
				value: i,
				type: "count",
				order: z1,
				allowMultiple: !1,
			})),
			...w1.map((i) => ({
				value: i,
				type: "size",
				order: D1,
				allowMultiple: !1,
			})),
			...q1.map((i) => ({
				value: i,
				type: "nature",
				order: Bf,
				allowMultiple: !1,
			})),
			...B1.map((i) => ({
				value: i,
				type: "general_opinion",
				order: Bf,
				allowMultiple: !0,
			})),
			...Y1.map((i) => ({
				value: i,
				type: "age",
				order: N1,
				allowMultiple: !1,
			})),
			...L1.map((i) => ({
				value: i,
				type: "speed",
				order: Bf,
				allowMultiple: !1,
			})),
			...G1.map((i) => ({
				value: i,
				type: "material",
				order: C1,
				allowMultiple: !1,
			})),
			...X1.map((i) => ({
				value: i,
				type: "physical_quality",
				order: ph,
				allowMultiple: !1,
			})),
			...Q1.map((i) => ({
				value: i,
				type: "physical_quality_b",
				order: ph,
				allowMultiple: !0,
			})),
		].map((i) => Object.freeze(i)),
	),
	V1 = 2,
	Xh = (i, d = 2) => {
		const s = T1(i),
			f = Math.floor(gh.length * s()),
			m = gh[f],
			y = [],
			T = [];
		for (let g = 0; g < d; g++) {
			const o = Z1.filter((p) => {
					const { type: b, value: S } = p;
					return !T.includes(b) && !y.map((N) => N.value).includes(S);
				}),
				h = Math.floor(o.length * s());
			(o[h].allowMultiple || T.push(o[h].type), y.push(o[h]));
		}
		return [
			...y.sort((g, o) => g.order - o.order).map(({ value: g }) => g),
			m,
		].join("");
	},
	K1 = (i, d, s = !1) => (d && s ? d : Xh(i, V1)),
	ug = (i, d, s, f) =>
		i.reduce(
			(m, { id: y, name: T }) => m.replaceAll(`%${y}%`, K1(y, T, d || y === s)),
			f,
		),
	Sh = "NICK_NAME_GEN_STORE";
function J1() {
	const [i, d] = D.useState([]),
		[s, f] = D.useState(""),
		[m, y] = D.useState(Date.now().toString()),
		[T, g] = D.useState(2),
		o = Xh(m, T),
		h = D.useCallback(
			(p) => {
				localStorage.setItem(
					Sh,
					JSON.stringify({ namePrefixes: i, adjectiveCount: T, ...p }),
				);
			},
			[i.join(""), T],
		);
	return (
		D.useEffect(() => {
			try {
				const p = localStorage.getItem(Sh);
				if (typeof p == "string") {
					const b = JSON.parse(p);
					(d((S) => (b == null ? void 0 : b.namePrefixes) || S),
						g((S) => (b == null ? void 0 : b.adjectiveCount) || S),
						f(
							(S) =>
								S ||
								(b == null
									? void 0
									: b.namePrefixes.join(`
`)),
						));
				}
			} catch {}
		}, []),
		C.jsxs("div", {
			className: "left-0 right-0 mx-auto max-w-prose",
			children: [
				C.jsx("textarea", {
					className:
						"mb-2 block resize-none rounded border border-gray-400 bg-white px-0.5 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
					spellCheck: !1,
					value: s,
					onChange: (p) => {
						f(p.target.value);
						const b = p.target.value
							.split(
								`
`,
							)
							.map((S) => S.trim())
							.filter((S) => S);
						(d(b), h({ namePrefixes: b }));
					},
				}),
				C.jsxs("label", {
					className: "block",
					children: [
						"Adjective Count ",
						C.jsx("input", {
							className:
								"rounded border border-gray-200 bg-white px-0.5 text-right text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
							type: "number",
							value: T,
							onChange: (p) => {
								const b = parseInt(p.target.value, 10) || 0;
								(h({ adjectiveCount: b }), g(b));
							},
						}),
					],
				}),
				C.jsx("button", {
					className: "button-default",
					onClick: () => {
						y(Date.now().toString());
					},
					children: "Randomise",
				}),
				C.jsx("ul", {
					className: "ml-5 mt-2 list-disc",
					children: ["", ...i].map((p, b) => {
						const S = `${p}${o}`;
						return C.jsxs(
							"li",
							{
								children: [
									S,
									" (",
									S.length,
									") ",
									C.jsx("button", {
										className: "button-default",
										onClick: () => {
											navigator.clipboard.writeText(S);
										},
										children: "Copy",
									}),
								],
							},
							`${p}-${b}`,
						);
					}),
				}),
			],
		})
	);
}
const Qf = {
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
	k1 = new Array(12).fill(0).map((i, d) => d + 1);
function Yf(i, d) {
	if (!i) return 0;
	let s = 0;
	return (
		i.includes("🎲🎲")
			? (s = d.reduce((f, m) => f + Qf["🎲🎲"][m], 0))
			: (s = d.reduce((f, m) => f + Qf["🎲"][m], 0)),
		i.includes("➕") ? 1 - (1 - s) * (1 - s) : i.includes("➖") ? s * s : s
	);
}
function $1() {
	const [i, d] = D.useState(null),
		[s, f] = D.useState([]),
		m = Yf(i, s);
	return C.jsxs("div", {
		className: "px-2",
		children: [
			C.jsx("h2", { children: "Probability" }),
			C.jsx("p", {
				className: "max-w-prose",
				children:
					"This table has the probability of getting each dice roll total.",
			}),
			C.jsx("p", {
				className: "max-w-prose",
				children:
					"To show the probability of getting one of a number of dice roll totals, click on the columns.",
			}),
			C.jsx("p", {
				className: "max-w-prose",
				children: "🎲: The number of dice rolled.",
			}),
			C.jsx("p", {
				className: "max-w-prose",
				children:
					"➕🛍️: If the first dice roll was one of the selected totals, keep the result. If the first dice roll wasn't one of the selected totals, use the Shopping Mall re-roll.",
			}),
			C.jsx("p", {
				className: "max-w-prose",
				children:
					"➖🛍️: If the first dice roll was one of the selected totals, use the Shopping Mall re-roll. If the first dice roll wasn't one of the selected totals, keep the result.",
			}),
			C.jsx("button", {
				className: "button-default",
				onClick: () => {
					(f([]), d(null));
				},
				children: "Reset",
			}),
			C.jsxs("table", {
				className: "my-2",
				children: [
					C.jsx("thead", {
						children: C.jsxs("tr", {
							children: [
								C.jsx("th", {
									className: "border-default px-2",
									children:
										m > 0
											? C.jsx("button", {
													className: "w-full",
													onClick: () => {
														(f([]), d(null));
													},
													children: m.toFixed(3),
												})
											: null,
								}),
								k1.map((y, T) =>
									C.jsx(
										"th",
										{
											className: `border-default ${s.includes(T) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
											children: C.jsx("button", {
												className: "px-2 w-full ",
												onClick: () => {
													f((g) =>
														g.includes(T)
															? g.filter((o) => o !== T)
															: [...g, T],
													);
												},
												children: y,
											}),
										},
										y,
									),
								),
								C.jsx("th", {
									className: "border-default px-2",
									children: "Total",
								}),
							],
						}),
					}),
					C.jsx("tbody", {
						children: Object.entries(Qf).map(([y, T]) =>
							C.jsxs(
								"tr",
								{
									className: "dark:odd:bg-gray-700 odd:bg-gray-100",
									children: [
										C.jsx("td", {
											className: "border-default text-left px-2",
											children: y,
										}),
										T.map((g, o) =>
											C.jsx(
												"td",
												{
													className: `border-default ${s.includes(o) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
													children:
														g > 0 &&
														C.jsx("button", {
															className: "px-2 w-full ",
															onClick: () => {
																f((h) =>
																	h.includes(o)
																		? h.filter((p) => p !== o)
																		: [...h, o],
																);
															},
															children: g.toFixed(3),
														}),
												},
												o,
											),
										),
										C.jsx("td", {
											className: "border-default text-left px-2",
											children: C.jsx("span", {
												className: Yf(y, s) > 0 ? "" : "opacity-0",
												children: Yf(y, s).toFixed(3),
											}),
										}),
									],
								},
								y,
							),
						),
					}),
				],
			}),
		],
	});
}
const W1 = D.lazy(() =>
		Ff(() => import("./index-Zwlz_Y8g.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
	),
	F1 = D.lazy(() => Ff(() => import("./index-CF-MGJqY.js"), [])),
	P1 = D.lazy(() =>
		Ff(
			() => import("./index-CvV5zdT3.js"),
			__vite__mapDeps([5, 1, 2, 3, 6, 7, 8, 9, 4, 10]),
		),
	),
	bh = (i) => {
		i === "dark" ||
		(i === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};
function I1() {
	const { options: i } = si();
	return (
		D.useEffect(() => {
			bh(i.darkMode);
		}, [i.darkMode]),
		D.useEffect(() => {
			const d = window.matchMedia("(prefers-color-scheme: dark)"),
				s = () => {
					bh(i.darkMode);
				};
			return (
				d.addEventListener("change", s),
				() => {
					d.removeEventListener("change", s);
				}
			);
		}, []),
		C.jsx(D.Suspense, {
			fallback: C.jsx(Gh, {}),
			children: C.jsxs("div", {
				className: "absolute bottom-0 left-0 right-0 top-0",
				children: [
					C.jsx(a1, {}),
					C.jsx("div", {
						className: "h-full pt-10",
						children: C.jsxs(hv, {
							children: [
								C.jsx(Oa, { path: "/", element: C.jsx(W1, {}) }),
								C.jsx(Oa, { path: "/dev/*", element: C.jsx(F1, {}) }),
								C.jsx(Oa, { path: "/game/:id", element: C.jsx(P1, {}) }),
								C.jsx(Oa, { path: "/name-generator", element: C.jsx(J1, {}) }),
								C.jsx(Oa, { path: "/probability", element: C.jsx($1, {}) }),
							],
						}),
					}),
				],
			}),
		})
	);
}
const tg = Ey.createRoot(document.getElementById("root"));
tg.render(
	C.jsx(D.StrictMode, {
		children: C.jsx(Bv, {
			children: C.jsx($v, { children: C.jsx(Fv, { children: C.jsx(I1, {}) }) }),
		}),
	}),
);
export {
	Wf as L,
	hv as R,
	Ff as _,
	Nh as a,
	Oa as b,
	eg as c,
	ug as d,
	lg as e,
	Gh as f,
	K1 as g,
	ag as i,
	C as j,
	D as r,
	si as u,
};
