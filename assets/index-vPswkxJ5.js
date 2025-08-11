const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"assets/index-CWLGTKus.js",
			"assets/message-Bg2CB__R.js",
			"assets/utils-BPyf_07k.js",
			"assets/game-DR5qpDLN.js",
			"assets/index-ByImOSgY.js",
			"assets/index-Rqqd02tD.js",
			"assets/business-centre-DYK_Jdjj.js",
			"assets/index-M-M_FdU-.js",
			"assets/index-bPgJQDHo.js",
			"assets/build-Di8S06L_.js",
			"assets/index-DMaCbqKt.js",
		]),
) => i.map((i) => d[i]);
(function () {
	const s = document.createElement("link").relList;
	if (s && s.supports && s.supports("modulepreload")) return;
	for (const m of document.querySelectorAll('link[rel="modulepreload"]')) f(m);
	new MutationObserver((m) => {
		for (const y of m)
			if (y.type === "childList")
				for (const E of y.addedNodes)
					E.tagName === "LINK" && E.rel === "modulepreload" && f(E);
	}).observe(document, { childList: !0, subtree: !0 });
	function h(m) {
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
		const y = h(m);
		fetch(m.href, y);
	}
})();
function Sh(i) {
	return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
		? i.default
		: i;
}
function ry(i) {
	if (i.__esModule) return i;
	var s = i.default;
	if (typeof s == "function") {
		var h = function f() {
			return this instanceof f
				? Reflect.construct(s, arguments, this.constructor)
				: s.apply(this, arguments);
		};
		h.prototype = s.prototype;
	} else h = {};
	return (
		Object.defineProperty(h, "__esModule", { value: !0 }),
		Object.keys(i).forEach(function (f) {
			var m = Object.getOwnPropertyDescriptor(i, f);
			Object.defineProperty(
				h,
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
		h
	);
}
var Mf = { exports: {} },
	Ou = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function oy() {
	if (Zd) return Ou;
	Zd = 1;
	var i = Symbol.for("react.transitional.element"),
		s = Symbol.for("react.fragment");
	function h(f, m, y) {
		var E = null;
		if (
			(y !== void 0 && (E = "" + y),
			m.key !== void 0 && (E = "" + m.key),
			"key" in m)
		) {
			y = {};
			for (var g in m) g !== "key" && (y[g] = m[g]);
		} else y = m;
		return (
			(m = y.ref),
			{ $$typeof: i, type: f, key: E, ref: m !== void 0 ? m : null, props: y }
		);
	}
	return ((Ou.Fragment = s), (Ou.jsx = h), (Ou.jsxs = h), Ou);
}
var Vd;
function sy() {
	return (Vd || ((Vd = 1), (Mf.exports = oy())), Mf.exports);
}
var N = sy(),
	_f = { exports: {} },
	lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kd;
function dy() {
	if (Kd) return lt;
	Kd = 1;
	var i = Symbol.for("react.transitional.element"),
		s = Symbol.for("react.portal"),
		h = Symbol.for("react.fragment"),
		f = Symbol.for("react.strict_mode"),
		m = Symbol.for("react.profiler"),
		y = Symbol.for("react.consumer"),
		E = Symbol.for("react.context"),
		g = Symbol.for("react.forward_ref"),
		o = Symbol.for("react.suspense"),
		d = Symbol.for("react.memo"),
		p = Symbol.for("react.lazy"),
		S = Symbol.iterator;
	function T(b) {
		return b === null || typeof b != "object"
			? null
			: ((b = (S && b[S]) || b["@@iterator"]),
				typeof b == "function" ? b : null);
	}
	var C = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		q = Object.assign,
		G = {};
	function Z(b, w, Q) {
		((this.props = b),
			(this.context = w),
			(this.refs = G),
			(this.updater = Q || C));
	}
	((Z.prototype.isReactComponent = {}),
		(Z.prototype.setState = function (b, w) {
			if (typeof b != "object" && typeof b != "function" && b != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, b, w, "setState");
		}),
		(Z.prototype.forceUpdate = function (b) {
			this.updater.enqueueForceUpdate(this, b, "forceUpdate");
		}));
	function X() {}
	X.prototype = Z.prototype;
	function K(b, w, Q) {
		((this.props = b),
			(this.context = w),
			(this.refs = G),
			(this.updater = Q || C));
	}
	var F = (K.prototype = new X());
	((F.constructor = K), q(F, Z.prototype), (F.isPureReactComponent = !0));
	var J = Array.isArray,
		Y = { H: null, A: null, T: null, S: null, V: null },
		st = Object.prototype.hasOwnProperty;
	function ut(b, w, Q, B, $, dt) {
		return (
			(Q = dt.ref),
			{ $$typeof: i, type: b, key: w, ref: Q !== void 0 ? Q : null, props: dt }
		);
	}
	function nt(b, w) {
		return ut(b.type, w, void 0, void 0, void 0, b.props);
	}
	function rt(b) {
		return typeof b == "object" && b !== null && b.$$typeof === i;
	}
	function At(b) {
		var w = { "=": "=0", ":": "=2" };
		return (
			"$" +
			b.replace(/[=:]/g, function (Q) {
				return w[Q];
			})
		);
	}
	var Rt = /\/+/g;
	function Et(b, w) {
		return typeof b == "object" && b !== null && b.key != null
			? At("" + b.key)
			: w.toString(36);
	}
	function Yt() {}
	function Jt(b) {
		switch (b.status) {
			case "fulfilled":
				return b.value;
			case "rejected":
				throw b.reason;
			default:
				switch (
					(typeof b.status == "string"
						? b.then(Yt, Yt)
						: ((b.status = "pending"),
							b.then(
								function (w) {
									b.status === "pending" &&
										((b.status = "fulfilled"), (b.value = w));
								},
								function (w) {
									b.status === "pending" &&
										((b.status = "rejected"), (b.reason = w));
								},
							)),
					b.status)
				) {
					case "fulfilled":
						return b.value;
					case "rejected":
						throw b.reason;
				}
		}
		throw b;
	}
	function Ut(b, w, Q, B, $) {
		var dt = typeof b;
		(dt === "undefined" || dt === "boolean") && (b = null);
		var et = !1;
		if (b === null) et = !0;
		else
			switch (dt) {
				case "bigint":
				case "string":
				case "number":
					et = !0;
					break;
				case "object":
					switch (b.$$typeof) {
						case i:
						case s:
							et = !0;
							break;
						case p:
							return ((et = b._init), Ut(et(b._payload), w, Q, B, $));
					}
			}
		if (et)
			return (
				($ = $(b)),
				(et = B === "" ? "." + Et(b, 0) : B),
				J($)
					? ((Q = ""),
						et != null && (Q = et.replace(Rt, "$&/") + "/"),
						Ut($, w, Q, "", function (Fe) {
							return Fe;
						}))
					: $ != null &&
						(rt($) &&
							($ = nt(
								$,
								Q +
									($.key == null || (b && b.key === $.key)
										? ""
										: ("" + $.key).replace(Rt, "$&/") + "/") +
									et,
							)),
						w.push($)),
				1
			);
		et = 0;
		var ae = B === "" ? "." : B + ":";
		if (J(b))
			for (var Ot = 0; Ot < b.length; Ot++)
				((B = b[Ot]), (dt = ae + Et(B, Ot)), (et += Ut(B, w, Q, dt, $)));
		else if (((Ot = T(b)), typeof Ot == "function"))
			for (b = Ot.call(b), Ot = 0; !(B = b.next()).done; )
				((B = B.value), (dt = ae + Et(B, Ot++)), (et += Ut(B, w, Q, dt, $)));
		else if (dt === "object") {
			if (typeof b.then == "function") return Ut(Jt(b), w, Q, B, $);
			throw (
				(w = String(b)),
				Error(
					"Objects are not valid as a React child (found: " +
						(w === "[object Object]"
							? "object with keys {" + Object.keys(b).join(", ") + "}"
							: w) +
						"). If you meant to render a collection of children, use an array instead.",
				)
			);
		}
		return et;
	}
	function D(b, w, Q) {
		if (b == null) return b;
		var B = [],
			$ = 0;
		return (
			Ut(b, B, "", "", function (dt) {
				return w.call(Q, dt, $++);
			}),
			B
		);
	}
	function L(b) {
		if (b._status === -1) {
			var w = b._result;
			((w = w()),
				w.then(
					function (Q) {
						(b._status === 0 || b._status === -1) &&
							((b._status = 1), (b._result = Q));
					},
					function (Q) {
						(b._status === 0 || b._status === -1) &&
							((b._status = 2), (b._result = Q));
					},
				),
				b._status === -1 && ((b._status = 0), (b._result = w)));
		}
		if (b._status === 1) return b._result.default;
		throw b._result;
	}
	var I =
		typeof reportError == "function"
			? reportError
			: function (b) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var w = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof b == "object" &&
								b !== null &&
								typeof b.message == "string"
									? String(b.message)
									: String(b),
							error: b,
						});
						if (!window.dispatchEvent(w)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", b);
						return;
					}
					console.error(b);
				};
	function bt() {}
	return (
		(lt.Children = {
			map: D,
			forEach: function (b, w, Q) {
				D(
					b,
					function () {
						w.apply(this, arguments);
					},
					Q,
				);
			},
			count: function (b) {
				var w = 0;
				return (
					D(b, function () {
						w++;
					}),
					w
				);
			},
			toArray: function (b) {
				return (
					D(b, function (w) {
						return w;
					}) || []
				);
			},
			only: function (b) {
				if (!rt(b))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return b;
			},
		}),
		(lt.Component = Z),
		(lt.Fragment = h),
		(lt.Profiler = m),
		(lt.PureComponent = K),
		(lt.StrictMode = f),
		(lt.Suspense = o),
		(lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
		(lt.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (b) {
				return Y.H.useMemoCache(b);
			},
		}),
		(lt.cache = function (b) {
			return function () {
				return b.apply(null, arguments);
			};
		}),
		(lt.cloneElement = function (b, w, Q) {
			if (b == null)
				throw Error(
					"The argument must be a React element, but you passed " + b + ".",
				);
			var B = q({}, b.props),
				$ = b.key,
				dt = void 0;
			if (w != null)
				for (et in (w.ref !== void 0 && (dt = void 0),
				w.key !== void 0 && ($ = "" + w.key),
				w))
					!st.call(w, et) ||
						et === "key" ||
						et === "__self" ||
						et === "__source" ||
						(et === "ref" && w.ref === void 0) ||
						(B[et] = w[et]);
			var et = arguments.length - 2;
			if (et === 1) B.children = Q;
			else if (1 < et) {
				for (var ae = Array(et), Ot = 0; Ot < et; Ot++)
					ae[Ot] = arguments[Ot + 2];
				B.children = ae;
			}
			return ut(b.type, $, void 0, void 0, dt, B);
		}),
		(lt.createContext = function (b) {
			return (
				(b = {
					$$typeof: E,
					_currentValue: b,
					_currentValue2: b,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(b.Provider = b),
				(b.Consumer = { $$typeof: y, _context: b }),
				b
			);
		}),
		(lt.createElement = function (b, w, Q) {
			var B,
				$ = {},
				dt = null;
			if (w != null)
				for (B in (w.key !== void 0 && (dt = "" + w.key), w))
					st.call(w, B) &&
						B !== "key" &&
						B !== "__self" &&
						B !== "__source" &&
						($[B] = w[B]);
			var et = arguments.length - 2;
			if (et === 1) $.children = Q;
			else if (1 < et) {
				for (var ae = Array(et), Ot = 0; Ot < et; Ot++)
					ae[Ot] = arguments[Ot + 2];
				$.children = ae;
			}
			if (b && b.defaultProps)
				for (B in ((et = b.defaultProps), et))
					$[B] === void 0 && ($[B] = et[B]);
			return ut(b, dt, void 0, void 0, null, $);
		}),
		(lt.createRef = function () {
			return { current: null };
		}),
		(lt.forwardRef = function (b) {
			return { $$typeof: g, render: b };
		}),
		(lt.isValidElement = rt),
		(lt.lazy = function (b) {
			return { $$typeof: p, _payload: { _status: -1, _result: b }, _init: L };
		}),
		(lt.memo = function (b, w) {
			return { $$typeof: d, type: b, compare: w === void 0 ? null : w };
		}),
		(lt.startTransition = function (b) {
			var w = Y.T,
				Q = {};
			Y.T = Q;
			try {
				var B = b(),
					$ = Y.S;
				($ !== null && $(Q, B),
					typeof B == "object" &&
						B !== null &&
						typeof B.then == "function" &&
						B.then(bt, I));
			} catch (dt) {
				I(dt);
			} finally {
				Y.T = w;
			}
		}),
		(lt.unstable_useCacheRefresh = function () {
			return Y.H.useCacheRefresh();
		}),
		(lt.use = function (b) {
			return Y.H.use(b);
		}),
		(lt.useActionState = function (b, w, Q) {
			return Y.H.useActionState(b, w, Q);
		}),
		(lt.useCallback = function (b, w) {
			return Y.H.useCallback(b, w);
		}),
		(lt.useContext = function (b) {
			return Y.H.useContext(b);
		}),
		(lt.useDebugValue = function () {}),
		(lt.useDeferredValue = function (b, w) {
			return Y.H.useDeferredValue(b, w);
		}),
		(lt.useEffect = function (b, w, Q) {
			var B = Y.H;
			if (typeof Q == "function")
				throw Error(
					"useEffect CRUD overload is not enabled in this build of React.",
				);
			return B.useEffect(b, w);
		}),
		(lt.useId = function () {
			return Y.H.useId();
		}),
		(lt.useImperativeHandle = function (b, w, Q) {
			return Y.H.useImperativeHandle(b, w, Q);
		}),
		(lt.useInsertionEffect = function (b, w) {
			return Y.H.useInsertionEffect(b, w);
		}),
		(lt.useLayoutEffect = function (b, w) {
			return Y.H.useLayoutEffect(b, w);
		}),
		(lt.useMemo = function (b, w) {
			return Y.H.useMemo(b, w);
		}),
		(lt.useOptimistic = function (b, w) {
			return Y.H.useOptimistic(b, w);
		}),
		(lt.useReducer = function (b, w, Q) {
			return Y.H.useReducer(b, w, Q);
		}),
		(lt.useRef = function (b) {
			return Y.H.useRef(b);
		}),
		(lt.useState = function (b) {
			return Y.H.useState(b);
		}),
		(lt.useSyncExternalStore = function (b, w, Q) {
			return Y.H.useSyncExternalStore(b, w, Q);
		}),
		(lt.useTransition = function () {
			return Y.H.useTransition();
		}),
		(lt.version = "19.1.0"),
		lt
	);
}
var Jd;
function Qf() {
	return (Jd || ((Jd = 1), (_f.exports = dy())), _f.exports);
}
var z = Qf(),
	zf = { exports: {} },
	Mu = {},
	Df = { exports: {} },
	Nf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd;
function hy() {
	return (
		kd ||
			((kd = 1),
			(function (i) {
				function s(D, L) {
					var I = D.length;
					D.push(L);
					t: for (; 0 < I; ) {
						var bt = (I - 1) >>> 1,
							b = D[bt];
						if (0 < m(b, L)) ((D[bt] = L), (D[I] = b), (I = bt));
						else break t;
					}
				}
				function h(D) {
					return D.length === 0 ? null : D[0];
				}
				function f(D) {
					if (D.length === 0) return null;
					var L = D[0],
						I = D.pop();
					if (I !== L) {
						D[0] = I;
						t: for (var bt = 0, b = D.length, w = b >>> 1; bt < w; ) {
							var Q = 2 * (bt + 1) - 1,
								B = D[Q],
								$ = Q + 1,
								dt = D[$];
							if (0 > m(B, I))
								$ < b && 0 > m(dt, B)
									? ((D[bt] = dt), (D[$] = I), (bt = $))
									: ((D[bt] = B), (D[Q] = I), (bt = Q));
							else if ($ < b && 0 > m(dt, I))
								((D[bt] = dt), (D[$] = I), (bt = $));
							else break t;
						}
					}
					return L;
				}
				function m(D, L) {
					var I = D.sortIndex - L.sortIndex;
					return I !== 0 ? I : D.id - L.id;
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
					var E = Date,
						g = E.now();
					i.unstable_now = function () {
						return E.now() - g;
					};
				}
				var o = [],
					d = [],
					p = 1,
					S = null,
					T = 3,
					C = !1,
					q = !1,
					G = !1,
					Z = !1,
					X = typeof setTimeout == "function" ? setTimeout : null,
					K = typeof clearTimeout == "function" ? clearTimeout : null,
					F = typeof setImmediate < "u" ? setImmediate : null;
				function J(D) {
					for (var L = h(d); L !== null; ) {
						if (L.callback === null) f(d);
						else if (L.startTime <= D)
							(f(d), (L.sortIndex = L.expirationTime), s(o, L));
						else break;
						L = h(d);
					}
				}
				function Y(D) {
					if (((G = !1), J(D), !q))
						if (h(o) !== null) ((q = !0), st || ((st = !0), Et()));
						else {
							var L = h(d);
							L !== null && Ut(Y, L.startTime - D);
						}
				}
				var st = !1,
					ut = -1,
					nt = 5,
					rt = -1;
				function At() {
					return Z ? !0 : !(i.unstable_now() - rt < nt);
				}
				function Rt() {
					if (((Z = !1), st)) {
						var D = i.unstable_now();
						rt = D;
						var L = !0;
						try {
							t: {
								((q = !1), G && ((G = !1), K(ut), (ut = -1)), (C = !0));
								var I = T;
								try {
									e: {
										for (
											J(D), S = h(o);
											S !== null && !(S.expirationTime > D && At());

										) {
											var bt = S.callback;
											if (typeof bt == "function") {
												((S.callback = null), (T = S.priorityLevel));
												var b = bt(S.expirationTime <= D);
												if (((D = i.unstable_now()), typeof b == "function")) {
													((S.callback = b), J(D), (L = !0));
													break e;
												}
												(S === h(o) && f(o), J(D));
											} else f(o);
											S = h(o);
										}
										if (S !== null) L = !0;
										else {
											var w = h(d);
											(w !== null && Ut(Y, w.startTime - D), (L = !1));
										}
									}
									break t;
								} finally {
									((S = null), (T = I), (C = !1));
								}
								L = void 0;
							}
						} finally {
							L ? Et() : (st = !1);
						}
					}
				}
				var Et;
				if (typeof F == "function")
					Et = function () {
						F(Rt);
					};
				else if (typeof MessageChannel < "u") {
					var Yt = new MessageChannel(),
						Jt = Yt.port2;
					((Yt.port1.onmessage = Rt),
						(Et = function () {
							Jt.postMessage(null);
						}));
				} else
					Et = function () {
						X(Rt, 0);
					};
				function Ut(D, L) {
					ut = X(function () {
						D(i.unstable_now());
					}, L);
				}
				((i.unstable_IdlePriority = 5),
					(i.unstable_ImmediatePriority = 1),
					(i.unstable_LowPriority = 4),
					(i.unstable_NormalPriority = 3),
					(i.unstable_Profiling = null),
					(i.unstable_UserBlockingPriority = 2),
					(i.unstable_cancelCallback = function (D) {
						D.callback = null;
					}),
					(i.unstable_forceFrameRate = function (D) {
						0 > D || 125 < D
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (nt = 0 < D ? Math.floor(1e3 / D) : 5);
					}),
					(i.unstable_getCurrentPriorityLevel = function () {
						return T;
					}),
					(i.unstable_next = function (D) {
						switch (T) {
							case 1:
							case 2:
							case 3:
								var L = 3;
								break;
							default:
								L = T;
						}
						var I = T;
						T = L;
						try {
							return D();
						} finally {
							T = I;
						}
					}),
					(i.unstable_requestPaint = function () {
						Z = !0;
					}),
					(i.unstable_runWithPriority = function (D, L) {
						switch (D) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								D = 3;
						}
						var I = T;
						T = D;
						try {
							return L();
						} finally {
							T = I;
						}
					}),
					(i.unstable_scheduleCallback = function (D, L, I) {
						var bt = i.unstable_now();
						switch (
							(typeof I == "object" && I !== null
								? ((I = I.delay),
									(I = typeof I == "number" && 0 < I ? bt + I : bt))
								: (I = bt),
							D)
						) {
							case 1:
								var b = -1;
								break;
							case 2:
								b = 250;
								break;
							case 5:
								b = 1073741823;
								break;
							case 4:
								b = 1e4;
								break;
							default:
								b = 5e3;
						}
						return (
							(b = I + b),
							(D = {
								id: p++,
								callback: L,
								priorityLevel: D,
								startTime: I,
								expirationTime: b,
								sortIndex: -1,
							}),
							I > bt
								? ((D.sortIndex = I),
									s(d, D),
									h(o) === null &&
										D === h(d) &&
										(G ? (K(ut), (ut = -1)) : (G = !0), Ut(Y, I - bt)))
								: ((D.sortIndex = b),
									s(o, D),
									q || C || ((q = !0), st || ((st = !0), Et()))),
							D
						);
					}),
					(i.unstable_shouldYield = At),
					(i.unstable_wrapCallback = function (D) {
						var L = T;
						return function () {
							var I = T;
							T = L;
							try {
								return D.apply(this, arguments);
							} finally {
								T = I;
							}
						};
					}));
			})(Nf)),
		Nf
	);
}
var $d;
function my() {
	return ($d || (($d = 1), (Df.exports = hy())), Df.exports);
}
var Uf = { exports: {} },
	Wt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd;
function yy() {
	if (Wd) return Wt;
	Wd = 1;
	var i = Qf();
	function s(o) {
		var d = "https://react.dev/errors/" + o;
		if (1 < arguments.length) {
			d += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var p = 2; p < arguments.length; p++)
				d += "&args[]=" + encodeURIComponent(arguments[p]);
		}
		return (
			"Minified React error #" +
			o +
			"; visit " +
			d +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function h() {}
	var f = {
			d: {
				f: h,
				r: function () {
					throw Error(s(522));
				},
				D: h,
				C: h,
				L: h,
				m: h,
				X: h,
				S: h,
				M: h,
			},
			p: 0,
			findDOMNode: null,
		},
		m = Symbol.for("react.portal");
	function y(o, d, p) {
		var S =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: m,
			key: S == null ? null : "" + S,
			children: o,
			containerInfo: d,
			implementation: p,
		};
	}
	var E = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function g(o, d) {
		if (o === "font") return "";
		if (typeof d == "string") return d === "use-credentials" ? d : "";
	}
	return (
		(Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
		(Wt.createPortal = function (o, d) {
			var p =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!d || (d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11))
				throw Error(s(299));
			return y(o, d, null, p);
		}),
		(Wt.flushSync = function (o) {
			var d = E.T,
				p = f.p;
			try {
				if (((E.T = null), (f.p = 2), o)) return o();
			} finally {
				((E.T = d), (f.p = p), f.d.f());
			}
		}),
		(Wt.preconnect = function (o, d) {
			typeof o == "string" &&
				(d
					? ((d = d.crossOrigin),
						(d =
							typeof d == "string"
								? d === "use-credentials"
									? d
									: ""
								: void 0))
					: (d = null),
				f.d.C(o, d));
		}),
		(Wt.prefetchDNS = function (o) {
			typeof o == "string" && f.d.D(o);
		}),
		(Wt.preinit = function (o, d) {
			if (typeof o == "string" && d && typeof d.as == "string") {
				var p = d.as,
					S = g(p, d.crossOrigin),
					T = typeof d.integrity == "string" ? d.integrity : void 0,
					C = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
				p === "style"
					? f.d.S(o, typeof d.precedence == "string" ? d.precedence : void 0, {
							crossOrigin: S,
							integrity: T,
							fetchPriority: C,
						})
					: p === "script" &&
						f.d.X(o, {
							crossOrigin: S,
							integrity: T,
							fetchPriority: C,
							nonce: typeof d.nonce == "string" ? d.nonce : void 0,
						});
			}
		}),
		(Wt.preinitModule = function (o, d) {
			if (typeof o == "string")
				if (typeof d == "object" && d !== null) {
					if (d.as == null || d.as === "script") {
						var p = g(d.as, d.crossOrigin);
						f.d.M(o, {
							crossOrigin: p,
							integrity: typeof d.integrity == "string" ? d.integrity : void 0,
							nonce: typeof d.nonce == "string" ? d.nonce : void 0,
						});
					}
				} else d == null && f.d.M(o);
		}),
		(Wt.preload = function (o, d) {
			if (
				typeof o == "string" &&
				typeof d == "object" &&
				d !== null &&
				typeof d.as == "string"
			) {
				var p = d.as,
					S = g(p, d.crossOrigin);
				f.d.L(o, p, {
					crossOrigin: S,
					integrity: typeof d.integrity == "string" ? d.integrity : void 0,
					nonce: typeof d.nonce == "string" ? d.nonce : void 0,
					type: typeof d.type == "string" ? d.type : void 0,
					fetchPriority:
						typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
					referrerPolicy:
						typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
					imageSrcSet:
						typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
					imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
					media: typeof d.media == "string" ? d.media : void 0,
				});
			}
		}),
		(Wt.preloadModule = function (o, d) {
			if (typeof o == "string")
				if (d) {
					var p = g(d.as, d.crossOrigin);
					f.d.m(o, {
						as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
						crossOrigin: p,
						integrity: typeof d.integrity == "string" ? d.integrity : void 0,
					});
				} else f.d.m(o);
		}),
		(Wt.requestFormReset = function (o) {
			f.d.r(o);
		}),
		(Wt.unstable_batchedUpdates = function (o, d) {
			return o(d);
		}),
		(Wt.useFormState = function (o, d, p) {
			return E.H.useFormState(o, d, p);
		}),
		(Wt.useFormStatus = function () {
			return E.H.useHostTransitionStatus();
		}),
		(Wt.version = "19.1.0"),
		Wt
	);
}
var Fd;
function vy() {
	if (Fd) return Uf.exports;
	Fd = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (s) {
				console.error(s);
			}
	}
	return (i(), (Uf.exports = yy()), Uf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd;
function gy() {
	if (Pd) return Mu;
	Pd = 1;
	var i = my(),
		s = Qf(),
		h = vy();
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
	function E(t) {
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
	function d(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t;
		for (t = t.child; t !== null; ) {
			if (((e = d(t)), e !== null)) return e;
			t = t.sibling;
		}
		return null;
	}
	var p = Object.assign,
		S = Symbol.for("react.element"),
		T = Symbol.for("react.transitional.element"),
		C = Symbol.for("react.portal"),
		q = Symbol.for("react.fragment"),
		G = Symbol.for("react.strict_mode"),
		Z = Symbol.for("react.profiler"),
		X = Symbol.for("react.provider"),
		K = Symbol.for("react.consumer"),
		F = Symbol.for("react.context"),
		J = Symbol.for("react.forward_ref"),
		Y = Symbol.for("react.suspense"),
		st = Symbol.for("react.suspense_list"),
		ut = Symbol.for("react.memo"),
		nt = Symbol.for("react.lazy"),
		rt = Symbol.for("react.activity"),
		At = Symbol.for("react.memo_cache_sentinel"),
		Rt = Symbol.iterator;
	function Et(t) {
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
			case q:
				return "Fragment";
			case Z:
				return "Profiler";
			case G:
				return "StrictMode";
			case Y:
				return "Suspense";
			case st:
				return "SuspenseList";
			case rt:
				return "Activity";
		}
		if (typeof t == "object")
			switch (t.$$typeof) {
				case C:
					return "Portal";
				case F:
					return (t.displayName || "Context") + ".Provider";
				case K:
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
				case ut:
					return (
						(e = t.displayName || null),
						e !== null ? e : Jt(t.type) || "Memo"
					);
				case nt:
					((e = t._payload), (t = t._init));
					try {
						return Jt(t(e));
					} catch {}
			}
		return null;
	}
	var Ut = Array.isArray,
		D = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		L = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		I = { pending: !1, data: null, method: null, action: null },
		bt = [],
		b = -1;
	function w(t) {
		return { current: t };
	}
	function Q(t) {
		0 > b || ((t.current = bt[b]), (bt[b] = null), b--);
	}
	function B(t, e) {
		(b++, (bt[b] = t.current), (t.current = e));
	}
	var $ = w(null),
		dt = w(null),
		et = w(null),
		ae = w(null);
	function Ot(t, e) {
		switch ((B(et, e), B(dt, t), B($, null), e.nodeType)) {
			case 9:
			case 11:
				t = (t = e.documentElement) && (t = t.namespaceURI) ? pd(t) : 0;
				break;
			default:
				if (((t = e.tagName), (e = e.namespaceURI)))
					((e = pd(e)), (t = Sd(e, t)));
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
		(Q($), B($, t));
	}
	function Fe() {
		(Q($), Q(dt), Q(et));
	}
	function si(t) {
		t.memoizedState !== null && B(ae, t);
		var e = $.current,
			l = Sd(e, t.type);
		e !== l && (B(dt, t), B($, l));
	}
	function Cu(t) {
		(dt.current === t && (Q($), Q(dt)),
			ae.current === t && (Q(ae), (xu._currentValue = I)));
	}
	var di = Object.prototype.hasOwnProperty,
		hi = i.unstable_scheduleCallback,
		mi = i.unstable_cancelCallback,
		Gh = i.unstable_shouldYield,
		Xh = i.unstable_requestPaint,
		Oe = i.unstable_now,
		Qh = i.unstable_getCurrentPriorityLevel,
		Ff = i.unstable_ImmediatePriority,
		Pf = i.unstable_UserBlockingPriority,
		ju = i.unstable_NormalPriority,
		Zh = i.unstable_LowPriority,
		If = i.unstable_IdlePriority,
		Vh = i.log,
		Kh = i.unstable_setDisableYieldValue,
		za = null,
		ue = null;
	function Pe(t) {
		if (
			(typeof Vh == "function" && Kh(t),
			ue && typeof ue.setStrictMode == "function")
		)
			try {
				ue.setStrictMode(za, t);
			} catch {}
	}
	var ne = Math.clz32 ? Math.clz32 : $h,
		Jh = Math.log,
		kh = Math.LN2;
	function $h(t) {
		return ((t >>>= 0), t === 0 ? 32 : (31 - ((Jh(t) / kh) | 0)) | 0);
	}
	var Hu = 256,
		wu = 4194304;
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
	function qu(t, e, l) {
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
	function Wh(t, e) {
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
	function tr() {
		var t = Hu;
		return ((Hu <<= 1), !(Hu & 4194048) && (Hu = 256), t);
	}
	function er() {
		var t = wu;
		return ((wu <<= 1), !(wu & 62914560) && (wu = 4194304), t);
	}
	function yi(t) {
		for (var e = [], l = 0; 31 > l; l++) e.push(t);
		return e;
	}
	function Na(t, e) {
		((t.pendingLanes |= e),
			e !== 268435456 &&
				((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
	}
	function Fh(t, e, l, a, u, n) {
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
			var U = 31 - ne(l),
				H = 1 << U;
			((r[U] = 0), (v[U] = -1));
			var M = O[U];
			if (M !== null)
				for (O[U] = null, U = 0; U < M.length; U++) {
					var _ = M[U];
					_ !== null && (_.lane &= -536870913);
				}
			l &= ~H;
		}
		(a !== 0 && lr(t, a, 0),
			n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~e)));
	}
	function lr(t, e, l) {
		((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
		var a = 31 - ne(e);
		((t.entangledLanes |= e),
			(t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090)));
	}
	function ar(t, e) {
		var l = (t.entangledLanes |= e);
		for (t = t.entanglements; l; ) {
			var a = 31 - ne(l),
				u = 1 << a;
			((u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u));
		}
	}
	function vi(t) {
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
	function gi(t) {
		return (
			(t &= -t),
			2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
		);
	}
	function ur() {
		var t = L.p;
		return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Bd(t.type));
	}
	function Ph(t, e) {
		var l = L.p;
		try {
			return ((L.p = t), e());
		} finally {
			L.p = l;
		}
	}
	var Ie = Math.random().toString(36).slice(2),
		kt = "__reactFiber$" + Ie,
		Pt = "__reactProps$" + Ie,
		Gl = "__reactContainer$" + Ie,
		pi = "__reactEvents$" + Ie,
		Ih = "__reactListeners$" + Ie,
		t0 = "__reactHandles$" + Ie,
		nr = "__reactResources$" + Ie,
		Ua = "__reactMarker$" + Ie;
	function Si(t) {
		(delete t[kt], delete t[Pt], delete t[pi], delete t[Ih], delete t[t0]);
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
					for (t = Td(t); t !== null; ) {
						if ((l = t[kt])) return l;
						t = Td(t);
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
		var e = t[nr];
		return (
			e ||
				(e = t[nr] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			e
		);
	}
	function Lt(t) {
		t[Ua] = !0;
	}
	var ir = new Set(),
		cr = {};
	function Al(t, e) {
		(Vl(t, e), Vl(t + "Capture", e));
	}
	function Vl(t, e) {
		for (cr[t] = e, t = 0; t < e.length; t++) ir.add(e[t]);
	}
	var e0 = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		fr = {},
		rr = {};
	function l0(t) {
		return di.call(rr, t)
			? !0
			: di.call(fr, t)
				? !1
				: e0.test(t)
					? (rr[t] = !0)
					: ((fr[t] = !0), !1);
	}
	function Bu(t, e, l) {
		if (l0(e))
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
	function Yu(t, e, l) {
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
	var bi, or;
	function Kl(t) {
		if (bi === void 0)
			try {
				throw Error();
			} catch (l) {
				var e = l.stack.trim().match(/\n( *(at )?)/);
				((bi = (e && e[1]) || ""),
					(or =
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
			bi +
			t +
			or
		);
	}
	var xi = !1;
	function Ei(t, e) {
		if (!t || xi) return "";
		xi = !0;
		var l = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (e) {
							var H = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(H.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(H, []);
								} catch (_) {
									var M = _;
								}
								Reflect.construct(t, [], H);
							} else {
								try {
									H.call();
								} catch (_) {
									M = _;
								}
								t.call(H.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (_) {
								M = _;
							}
							(H = t()) &&
								typeof H.catch == "function" &&
								H.catch(function () {});
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
									var U =
										`
` + v[a].replace(" at new ", " at ");
									return (
										t.displayName &&
											U.includes("<anonymous>") &&
											(U = U.replace("<anonymous>", t.displayName)),
										U
									);
								}
							while (1 <= a && 0 <= u);
						break;
					}
			}
		} finally {
			((xi = !1), (Error.prepareStackTrace = l));
		}
		return (l = t ? t.displayName || t.name : "") ? Kl(l) : "";
	}
	function a0(t) {
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
				return Ei(t.type, !1);
			case 11:
				return Ei(t.type.render, !1);
			case 1:
				return Ei(t.type, !0);
			case 31:
				return Kl("Activity");
			default:
				return "";
		}
	}
	function sr(t) {
		try {
			var e = "";
			do ((e += a0(t)), (t = t.return));
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
	function dr(t) {
		var e = t.type;
		return (
			(t = t.nodeName) &&
			t.toLowerCase() === "input" &&
			(e === "checkbox" || e === "radio")
		);
	}
	function u0(t) {
		var e = dr(t) ? "checked" : "value",
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
	function Lu(t) {
		t._valueTracker || (t._valueTracker = u0(t));
	}
	function hr(t) {
		if (!t) return !1;
		var e = t._valueTracker;
		if (!e) return !0;
		var l = e.getValue(),
			a = "";
		return (
			t && (a = dr(t) ? (t.checked ? "true" : "false") : t.value),
			(t = a),
			t !== l ? (e.setValue(t), !0) : !1
		);
	}
	function Gu(t) {
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
	var n0 = /[\n"\\]/g;
	function me(t) {
		return t.replace(n0, function (e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Ti(t, e, l, a, u, n, c, r) {
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
				? Ai(t, c, he(e))
				: l != null
					? Ai(t, c, he(l))
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
	function mr(t, e, l, a, u, n, c, r) {
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
	function Ai(t, e, l) {
		(e === "number" && Gu(t.ownerDocument) === t) ||
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
	function yr(t, e, l) {
		if (
			e != null &&
			((e = "" + he(e)), e !== t.value && (t.value = e), l == null)
		) {
			t.defaultValue !== e && (t.defaultValue = e);
			return;
		}
		t.defaultValue = l != null ? "" + he(l) : "";
	}
	function vr(t, e, l, a) {
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
	var i0 = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function gr(t, e, l) {
		var a = e.indexOf("--") === 0;
		l == null || typeof l == "boolean" || l === ""
			? a
				? t.setProperty(e, "")
				: e === "float"
					? (t.cssFloat = "")
					: (t[e] = "")
			: a
				? t.setProperty(e, l)
				: typeof l != "number" || l === 0 || i0.has(e)
					? e === "float"
						? (t.cssFloat = l)
						: (t[e] = ("" + l).trim())
					: (t[e] = l + "px");
	}
	function pr(t, e, l) {
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
				((a = e[u]), e.hasOwnProperty(u) && l[u] !== a && gr(t, u, a));
		} else for (var n in e) e.hasOwnProperty(n) && gr(t, n, e[n]);
	}
	function Ri(t) {
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
	var c0 = new Map([
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
		f0 =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Xu(t) {
		return f0.test("" + t)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: t;
	}
	var Oi = null;
	function Mi(t) {
		return (
			(t = t.target || t.srcElement || window),
			t.correspondingUseElement && (t = t.correspondingUseElement),
			t.nodeType === 3 ? t.parentNode : t
		);
	}
	var $l = null,
		Wl = null;
	function Sr(t) {
		var e = Ql(t);
		if (e && (t = e.stateNode)) {
			var l = t[Pt] || null;
			t: switch (((t = e.stateNode), e.type)) {
				case "input":
					if (
						(Ti(
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
								Ti(
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
							((a = l[e]), a.form === t.form && hr(a));
					}
					break t;
				case "textarea":
					yr(t, l.value, l.defaultValue);
					break t;
				case "select":
					((e = l.value), e != null && Jl(t, !!l.multiple, e, !1));
			}
		}
	}
	var _i = !1;
	function br(t, e, l) {
		if (_i) return t(e, l);
		_i = !0;
		try {
			var a = t(e);
			return a;
		} finally {
			if (
				((_i = !1),
				($l !== null || Wl !== null) &&
					(_n(), $l && ((e = $l), (t = Wl), (Wl = $l = null), Sr(e), t)))
			)
				for (e = 0; e < t.length; e++) Sr(t[e]);
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
		zi = !1;
	if (He)
		try {
			var Ha = {};
			(Object.defineProperty(Ha, "passive", {
				get: function () {
					zi = !0;
				},
			}),
				window.addEventListener("test", Ha, Ha),
				window.removeEventListener("test", Ha, Ha));
		} catch {
			zi = !1;
		}
	var tl = null,
		Di = null,
		Qu = null;
	function xr() {
		if (Qu) return Qu;
		var t,
			e = Di,
			l = e.length,
			a,
			u = "value" in tl ? tl.value : tl.textContent,
			n = u.length;
		for (t = 0; t < l && e[t] === u[t]; t++);
		var c = l - t;
		for (a = 1; a <= c && e[l - a] === u[n - a]; a++);
		return (Qu = u.slice(t, 1 < a ? 1 - a : void 0));
	}
	function Zu(t) {
		var e = t.keyCode;
		return (
			"charCode" in t
				? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
				: (t = e),
			t === 10 && (t = 13),
			32 <= t || t === 13 ? t : 0
		);
	}
	function Vu() {
		return !0;
	}
	function Er() {
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
					? Vu
					: Er),
				(this.isPropagationStopped = Er),
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
						(this.isDefaultPrevented = Vu));
				},
				stopPropagation: function () {
					var l = this.nativeEvent;
					l &&
						(l.stopPropagation
							? l.stopPropagation()
							: typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
						(this.isPropagationStopped = Vu));
				},
				persist: function () {},
				isPersistent: Vu,
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
		Ku = It(Rl),
		wa = p({}, Rl, { view: 0, detail: 0 }),
		r0 = It(wa),
		Ni,
		Ui,
		qa,
		Ju = p({}, wa, {
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
			getModifierState: ji,
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
								? ((Ni = t.screenX - qa.screenX), (Ui = t.screenY - qa.screenY))
								: (Ui = Ni = 0),
							(qa = t)),
						Ni);
			},
			movementY: function (t) {
				return "movementY" in t ? t.movementY : Ui;
			},
		}),
		Tr = It(Ju),
		o0 = p({}, Ju, { dataTransfer: 0 }),
		s0 = It(o0),
		d0 = p({}, wa, { relatedTarget: 0 }),
		Ci = It(d0),
		h0 = p({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		m0 = It(h0),
		y0 = p({}, Rl, {
			clipboardData: function (t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData;
			},
		}),
		v0 = It(y0),
		g0 = p({}, Rl, { data: 0 }),
		Ar = It(g0),
		p0 = {
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
		S0 = {
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
		b0 = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function x0(t) {
		var e = this.nativeEvent;
		return e.getModifierState
			? e.getModifierState(t)
			: (t = b0[t])
				? !!e[t]
				: !1;
	}
	function ji() {
		return x0;
	}
	var E0 = p({}, wa, {
			key: function (t) {
				if (t.key) {
					var e = p0[t.key] || t.key;
					if (e !== "Unidentified") return e;
				}
				return t.type === "keypress"
					? ((t = Zu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
					: t.type === "keydown" || t.type === "keyup"
						? S0[t.keyCode] || "Unidentified"
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
			getModifierState: ji,
			charCode: function (t) {
				return t.type === "keypress" ? Zu(t) : 0;
			},
			keyCode: function (t) {
				return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
			},
			which: function (t) {
				return t.type === "keypress"
					? Zu(t)
					: t.type === "keydown" || t.type === "keyup"
						? t.keyCode
						: 0;
			},
		}),
		T0 = It(E0),
		A0 = p({}, Ju, {
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
		Rr = It(A0),
		R0 = p({}, wa, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: ji,
		}),
		O0 = It(R0),
		M0 = p({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		_0 = It(M0),
		z0 = p({}, Ju, {
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
		D0 = It(z0),
		N0 = p({}, Rl, { newState: 0, oldState: 0 }),
		U0 = It(N0),
		C0 = [9, 13, 27, 32],
		Hi = He && "CompositionEvent" in window,
		Ba = null;
	He && "documentMode" in document && (Ba = document.documentMode);
	var j0 = He && "TextEvent" in window && !Ba,
		Or = He && (!Hi || (Ba && 8 < Ba && 11 >= Ba)),
		Mr = " ",
		_r = !1;
	function zr(t, e) {
		switch (t) {
			case "keyup":
				return C0.indexOf(e.keyCode) !== -1;
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
	function Dr(t) {
		return (
			(t = t.detail),
			typeof t == "object" && "data" in t ? t.data : null
		);
	}
	var Fl = !1;
	function H0(t, e) {
		switch (t) {
			case "compositionend":
				return Dr(e);
			case "keypress":
				return e.which !== 32 ? null : ((_r = !0), Mr);
			case "textInput":
				return ((t = e.data), t === Mr && _r ? null : t);
			default:
				return null;
		}
	}
	function w0(t, e) {
		if (Fl)
			return t === "compositionend" || (!Hi && zr(t, e))
				? ((t = xr()), (Qu = Di = tl = null), (Fl = !1), t)
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
				return Or && e.locale !== "ko" ? null : e.data;
			default:
				return null;
		}
	}
	var q0 = {
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
	function Nr(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return e === "input" ? !!q0[t.type] : e === "textarea";
	}
	function Ur(t, e, l, a) {
		($l ? (Wl ? Wl.push(a) : (Wl = [a])) : ($l = a),
			(e = jn(e, "onChange")),
			0 < e.length &&
				((l = new Ku("onChange", "change", null, l, a)),
				t.push({ event: l, listeners: e })));
	}
	var Ya = null,
		La = null;
	function B0(t) {
		hd(t, 0);
	}
	function ku(t) {
		var e = Ca(t);
		if (hr(e)) return t;
	}
	function Cr(t, e) {
		if (t === "change") return e;
	}
	var jr = !1;
	if (He) {
		var wi;
		if (He) {
			var qi = "oninput" in document;
			if (!qi) {
				var Hr = document.createElement("div");
				(Hr.setAttribute("oninput", "return;"),
					(qi = typeof Hr.oninput == "function"));
			}
			wi = qi;
		} else wi = !1;
		jr = wi && (!document.documentMode || 9 < document.documentMode);
	}
	function wr() {
		Ya && (Ya.detachEvent("onpropertychange", qr), (La = Ya = null));
	}
	function qr(t) {
		if (t.propertyName === "value" && ku(La)) {
			var e = [];
			(Ur(e, La, t, Mi(t)), br(B0, e));
		}
	}
	function Y0(t, e, l) {
		t === "focusin"
			? (wr(), (Ya = e), (La = l), Ya.attachEvent("onpropertychange", qr))
			: t === "focusout" && wr();
	}
	function L0(t) {
		if (t === "selectionchange" || t === "keyup" || t === "keydown")
			return ku(La);
	}
	function G0(t, e) {
		if (t === "click") return ku(e);
	}
	function X0(t, e) {
		if (t === "input" || t === "change") return ku(e);
	}
	function Q0(t, e) {
		return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
	}
	var ie = typeof Object.is == "function" ? Object.is : Q0;
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
			if (!di.call(e, u) || !ie(t[u], e[u])) return !1;
		}
		return !0;
	}
	function Br(t) {
		for (; t && t.firstChild; ) t = t.firstChild;
		return t;
	}
	function Yr(t, e) {
		var l = Br(t);
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
			l = Br(l);
		}
	}
	function Lr(t, e) {
		return t && e
			? t === e
				? !0
				: t && t.nodeType === 3
					? !1
					: e && e.nodeType === 3
						? Lr(t, e.parentNode)
						: "contains" in t
							? t.contains(e)
							: t.compareDocumentPosition
								? !!(t.compareDocumentPosition(e) & 16)
								: !1
			: !1;
	}
	function Gr(t) {
		t =
			t != null &&
			t.ownerDocument != null &&
			t.ownerDocument.defaultView != null
				? t.ownerDocument.defaultView
				: window;
		for (var e = Gu(t.document); e instanceof t.HTMLIFrameElement; ) {
			try {
				var l = typeof e.contentWindow.location.href == "string";
			} catch {
				l = !1;
			}
			if (l) t = e.contentWindow;
			else break;
			e = Gu(t.document);
		}
		return e;
	}
	function Bi(t) {
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
	var Z0 = He && "documentMode" in document && 11 >= document.documentMode,
		Pl = null,
		Yi = null,
		Xa = null,
		Li = !1;
	function Xr(t, e, l) {
		var a =
			l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
		Li ||
			Pl == null ||
			Pl !== Gu(a) ||
			((a = Pl),
			"selectionStart" in a && Bi(a)
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
				(a = jn(Yi, "onSelect")),
				0 < a.length &&
					((e = new Ku("onSelect", "select", null, e, l)),
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
		Gi = {},
		Qr = {};
	He &&
		((Qr = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Il.animationend.animation,
			delete Il.animationiteration.animation,
			delete Il.animationstart.animation),
		"TransitionEvent" in window || delete Il.transitionend.transition);
	function Ml(t) {
		if (Gi[t]) return Gi[t];
		if (!Il[t]) return t;
		var e = Il[t],
			l;
		for (l in e) if (e.hasOwnProperty(l) && l in Qr) return (Gi[t] = e[l]);
		return t;
	}
	var Zr = Ml("animationend"),
		Vr = Ml("animationiteration"),
		Kr = Ml("animationstart"),
		V0 = Ml("transitionrun"),
		K0 = Ml("transitionstart"),
		J0 = Ml("transitioncancel"),
		Jr = Ml("transitionend"),
		kr = new Map(),
		Xi =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	Xi.push("scrollEnd");
	function Ee(t, e) {
		(kr.set(t, e), Al(e, [t]));
	}
	var $r = new WeakMap();
	function ye(t, e) {
		if (typeof t == "object" && t !== null) {
			var l = $r.get(t);
			return l !== void 0
				? l
				: ((e = { value: t, source: e, stack: sr(e) }), $r.set(t, e), e);
		}
		return { value: t, source: e, stack: sr(e) };
	}
	var ve = [],
		ta = 0,
		Qi = 0;
	function $u() {
		for (var t = ta, e = (Qi = ta = 0); e < t; ) {
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
			n !== 0 && Wr(l, u, n);
		}
	}
	function Wu(t, e, l, a) {
		((ve[ta++] = t),
			(ve[ta++] = e),
			(ve[ta++] = l),
			(ve[ta++] = a),
			(Qi |= a),
			(t.lanes |= a),
			(t = t.alternate),
			t !== null && (t.lanes |= a));
	}
	function Zi(t, e, l, a) {
		return (Wu(t, e, l, a), Fu(t));
	}
	function ea(t, e) {
		return (Wu(t, null, null, e), Fu(t));
	}
	function Wr(t, e, l) {
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
	function Fu(t) {
		if (50 < hu) throw ((hu = 0), (Wc = null), Error(f(185)));
		for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
		return t.tag === 3 ? t.stateNode : null;
	}
	var la = {};
	function k0(t, e, l, a) {
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
		return new k0(t, e, l, a);
	}
	function Vi(t) {
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
	function Fr(t, e) {
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
	function Pu(t, e, l, a, u, n) {
		var c = 0;
		if (((a = t), typeof t == "function")) Vi(t) && (c = 1);
		else if (typeof t == "string")
			c = Wm(t, l, $.current)
				? 26
				: t === "html" || t === "head" || t === "body"
					? 27
					: 5;
		else
			t: switch (t) {
				case rt:
					return (
						(t = ce(31, l, e, u)),
						(t.elementType = rt),
						(t.lanes = n),
						t
					);
				case q:
					return _l(l.children, u, n, e);
				case G:
					((c = 8), (u |= 24));
					break;
				case Z:
					return (
						(t = ce(12, l, e, u | 2)),
						(t.elementType = Z),
						(t.lanes = n),
						t
					);
				case Y:
					return ((t = ce(13, l, e, u)), (t.elementType = Y), (t.lanes = n), t);
				case st:
					return (
						(t = ce(19, l, e, u)),
						(t.elementType = st),
						(t.lanes = n),
						t
					);
				default:
					if (typeof t == "object" && t !== null)
						switch (t.$$typeof) {
							case X:
							case F:
								c = 10;
								break t;
							case K:
								c = 9;
								break t;
							case J:
								c = 11;
								break t;
							case ut:
								c = 14;
								break t;
							case nt:
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
	function Ki(t, e, l) {
		return ((t = ce(6, t, null, e)), (t.lanes = l), t);
	}
	function Ji(t, e, l) {
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
		Iu = null,
		tn = 0,
		ge = [],
		pe = 0,
		zl = null,
		qe = 1,
		Be = "";
	function Dl(t, e) {
		((aa[ua++] = tn), (aa[ua++] = Iu), (Iu = t), (tn = e));
	}
	function Pr(t, e, l) {
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
	function ki(t) {
		t.return !== null && (Dl(t, 1), Pr(t, 1, 0));
	}
	function $i(t) {
		for (; t === Iu; )
			((Iu = aa[--ua]), (aa[ua] = null), (tn = aa[--ua]), (aa[ua] = null));
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
		Wi = Error(f(519));
	function Ul(t) {
		var e = Error(f(418, ""));
		throw (Va(ye(e, t)), Wi);
	}
	function Ir(t) {
		var e = t.stateNode,
			l = t.type,
			a = t.memoizedProps;
		switch (((e[kt] = t), (e[Pt] = a), l)) {
			case "dialog":
				(ft("cancel", e), ft("close", e));
				break;
			case "iframe":
			case "object":
			case "embed":
				ft("load", e);
				break;
			case "video":
			case "audio":
				for (l = 0; l < yu.length; l++) ft(yu[l], e);
				break;
			case "source":
				ft("error", e);
				break;
			case "img":
			case "image":
			case "link":
				(ft("error", e), ft("load", e));
				break;
			case "details":
				ft("toggle", e);
				break;
			case "input":
				(ft("invalid", e),
					mr(
						e,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0,
					),
					Lu(e));
				break;
			case "select":
				ft("invalid", e);
				break;
			case "textarea":
				(ft("invalid", e), vr(e, a.value, a.defaultValue, a.children), Lu(e));
		}
		((l = a.children),
			(typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
			e.textContent === "" + l ||
			a.suppressHydrationWarning === !0 ||
			gd(e.textContent, l)
				? (a.popover != null && (ft("beforetoggle", e), ft("toggle", e)),
					a.onScroll != null && ft("scroll", e),
					a.onScrollEnd != null && ft("scrollend", e),
					a.onClick != null && (e.onclick = Hn),
					(e = !0))
				: (e = !1),
			e || Ul(t));
	}
	function to(t) {
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
		if (!mt) return (to(t), (mt = !0), !1);
		var e = t.tag,
			l;
		if (
			((l = e !== 3 && e !== 27) &&
				((l = e === 5) &&
					((l = t.type),
					(l =
						!(l !== "form" && l !== "button") || hf(t.type, t.memoizedProps))),
				(l = !l)),
			l && Dt && Ul(t),
			to(t),
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
				? ((e = Dt), vl(t.type) ? ((t = gf), (gf = null), (Dt = t)) : (Dt = e))
				: (Dt = Ft ? Ae(t.stateNode.nextSibling) : null);
		return !0;
	}
	function Za() {
		((Dt = Ft = null), (mt = !1));
	}
	function eo() {
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
	var Fi = w(null),
		Cl = null,
		Ye = null;
	function el(t, e, l) {
		(B(Fi, e._currentValue), (e._currentValue = l));
	}
	function Le(t) {
		((t._currentValue = Fi.current), Q(Fi));
	}
	function Pi(t, e, l) {
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
	function Ii(t, e, l, a) {
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
								Pi(n.return, l, t),
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
					Pi(c, l, t),
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
		(t !== null && Ii(e, t, l, a), (e.flags |= 262144));
	}
	function en(t) {
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
		return lo(Cl, t);
	}
	function ln(t, e) {
		return (Cl === null && jl(t), lo(t, e));
	}
	function lo(t, e) {
		var l = e._currentValue;
		if (((e = { context: e, memoizedValue: l, next: null }), Ye === null)) {
			if (t === null) throw Error(f(308));
			((Ye = e),
				(t.dependencies = { lanes: 0, firstContext: e }),
				(t.flags |= 524288));
		} else Ye = Ye.next = e;
		return l;
	}
	var $0 =
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
		W0 = i.unstable_scheduleCallback,
		F0 = i.unstable_NormalPriority,
		qt = {
			$$typeof: F,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function tc() {
		return { controller: new $0(), data: new Map(), refCount: 0 };
	}
	function Ja(t) {
		(t.refCount--,
			t.refCount === 0 &&
				W0(F0, function () {
					t.controller.abort();
				}));
	}
	var ka = null,
		ec = 0,
		na = 0,
		ia = null;
	function P0(t, e) {
		if (ka === null) {
			var l = (ka = []);
			((ec = 0),
				(na = af()),
				(ia = {
					status: "pending",
					value: void 0,
					then: function (a) {
						l.push(a);
					},
				}));
		}
		return (ec++, e.then(ao, ao), e);
	}
	function ao() {
		if (--ec === 0 && ka !== null) {
			ia !== null && (ia.status = "fulfilled");
			var t = ka;
			((ka = null), (na = 0), (ia = null));
			for (var e = 0; e < t.length; e++) (0, t[e])();
		}
	}
	function I0(t, e) {
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
	var uo = D.S;
	D.S = function (t, e) {
		(typeof e == "object" &&
			e !== null &&
			typeof e.then == "function" &&
			P0(t, e),
			uo !== null && uo(t, e));
	};
	var Hl = w(null);
	function lc() {
		var t = Hl.current;
		return t !== null ? t : Tt.pooledCache;
	}
	function an(t, e) {
		e === null ? B(Hl, Hl.current) : B(Hl, e.pool);
	}
	function no() {
		var t = lc();
		return t === null ? null : { parent: qt._currentValue, pool: t };
	}
	var $a = Error(f(460)),
		io = Error(f(474)),
		un = Error(f(542)),
		ac = { then: function () {} };
	function co(t) {
		return ((t = t.status), t === "fulfilled" || t === "rejected");
	}
	function nn() {}
	function fo(t, e, l) {
		switch (
			((l = t[l]),
			l === void 0 ? t.push(e) : l !== e && (e.then(nn, nn), (e = l)),
			e.status)
		) {
			case "fulfilled":
				return e.value;
			case "rejected":
				throw ((t = e.reason), oo(t), t);
			default:
				if (typeof e.status == "string") e.then(nn, nn);
				else {
					if (((t = Tt), t !== null && 100 < t.shellSuspendCounter))
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
						throw ((t = e.reason), oo(t), t);
				}
				throw ((Wa = e), $a);
		}
	}
	var Wa = null;
	function ro() {
		if (Wa === null) throw Error(f(459));
		var t = Wa;
		return ((Wa = null), t);
	}
	function oo(t) {
		if (t === $a || t === un) throw Error(f(483));
	}
	var ll = !1;
	function uc(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function nc(t, e) {
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
				(e = Fu(t)),
				Wr(t, null, l),
				e
			);
		}
		return (Wu(t, a, e, l), Fu(t));
	}
	function Fa(t, e, l) {
		if (
			((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
		) {
			var a = e.lanes;
			((a &= t.pendingLanes), (l |= a), (e.lanes = l), ar(t, l));
		}
	}
	function ic(t, e) {
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
	var cc = !1;
	function Pa() {
		if (cc) {
			var t = ia;
			if (t !== null) throw t;
		}
	}
	function Ia(t, e, l, a) {
		cc = !1;
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
			var U = t.alternate;
			U !== null &&
				((U = U.updateQueue),
				(r = U.lastBaseUpdate),
				r !== c &&
					(r === null ? (U.firstBaseUpdate = O) : (r.next = O),
					(U.lastBaseUpdate = v)));
		}
		if (n !== null) {
			var H = u.baseState;
			((c = 0), (U = O = v = null), (r = n));
			do {
				var M = r.lane & -536870913,
					_ = M !== r.lane;
				if (_ ? (ot & M) === M : (a & M) === M) {
					(M !== 0 && M === na && (cc = !0),
						U !== null &&
							(U = U.next =
								{
									lane: 0,
									tag: r.tag,
									payload: r.payload,
									callback: null,
									next: null,
								}));
					t: {
						var tt = t,
							W = r;
						M = e;
						var St = l;
						switch (W.tag) {
							case 1:
								if (((tt = W.payload), typeof tt == "function")) {
									H = tt.call(St, H, M);
									break t;
								}
								H = tt;
								break t;
							case 3:
								tt.flags = (tt.flags & -65537) | 128;
							case 0:
								if (
									((tt = W.payload),
									(M = typeof tt == "function" ? tt.call(St, H, M) : tt),
									M == null)
								)
									break t;
								H = p({}, H, M);
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
						U === null ? ((O = U = _), (v = H)) : (U = U.next = _),
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
			(U === null && (v = H),
				(u.baseState = v),
				(u.firstBaseUpdate = O),
				(u.lastBaseUpdate = U),
				n === null && (u.shared.lanes = 0),
				(dl |= c),
				(t.lanes = c),
				(t.memoizedState = H));
		}
	}
	function so(t, e) {
		if (typeof t != "function") throw Error(f(191, t));
		t.call(e);
	}
	function ho(t, e) {
		var l = t.callbacks;
		if (l !== null)
			for (t.callbacks = null, t = 0; t < l.length; t++) so(l[t], e);
	}
	var ca = w(null),
		cn = w(0);
	function mo(t, e) {
		((t = Je), B(cn, t), B(ca, e), (Je = t | e.baseLanes));
	}
	function fc() {
		(B(cn, Je), B(ca, ca.current));
	}
	function rc() {
		((Je = cn.current), Q(ca), Q(cn));
	}
	var nl = 0,
		at = null,
		gt = null,
		Ht = null,
		fn = !1,
		fa = !1,
		wl = !1,
		rn = 0,
		tu = 0,
		ra = null,
		tm = 0;
	function Ct() {
		throw Error(f(321));
	}
	function oc(t, e) {
		if (e === null) return !1;
		for (var l = 0; l < e.length && l < t.length; l++)
			if (!ie(t[l], e[l])) return !1;
		return !0;
	}
	function sc(t, e, l, a, u, n) {
		return (
			(nl = n),
			(at = e),
			(e.memoizedState = null),
			(e.updateQueue = null),
			(e.lanes = 0),
			(D.H = t === null || t.memoizedState === null ? Fo : Po),
			(wl = !1),
			(n = l(a, u)),
			(wl = !1),
			fa && (n = vo(e, l, a, u)),
			yo(t),
			n
		);
	}
	function yo(t) {
		D.H = yn;
		var e = gt !== null && gt.next !== null;
		if (((nl = 0), (Ht = gt = at = null), (fn = !1), (tu = 0), (ra = null), e))
			throw Error(f(300));
		t === null ||
			Gt ||
			((t = t.dependencies), t !== null && en(t) && (Gt = !0));
	}
	function vo(t, e, l, a) {
		at = t;
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
			((D.H = cm), (n = e(l, a)));
		} while (fa);
		return n;
	}
	function em() {
		var t = D.H,
			e = t.useState()[0];
		return (
			(e = typeof e.then == "function" ? eu(e) : e),
			(t = t.useState()[0]),
			(gt !== null ? gt.memoizedState : null) !== t && (at.flags |= 1024),
			e
		);
	}
	function dc() {
		var t = rn !== 0;
		return ((rn = 0), t);
	}
	function hc(t, e, l) {
		((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
	}
	function mc(t) {
		if (fn) {
			for (t = t.memoizedState; t !== null; ) {
				var e = t.queue;
				(e !== null && (e.pending = null), (t = t.next));
			}
			fn = !1;
		}
		((nl = 0), (Ht = gt = at = null), (fa = !1), (tu = rn = 0), (ra = null));
	}
	function te() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (Ht === null ? (at.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht);
	}
	function wt() {
		if (gt === null) {
			var t = at.alternate;
			t = t !== null ? t.memoizedState : null;
		} else t = gt.next;
		var e = Ht === null ? at.memoizedState : Ht.next;
		if (e !== null) ((Ht = e), (gt = t));
		else {
			if (t === null)
				throw at.alternate === null ? Error(f(467)) : Error(f(310));
			((gt = t),
				(t = {
					memoizedState: gt.memoizedState,
					baseState: gt.baseState,
					baseQueue: gt.baseQueue,
					queue: gt.queue,
					next: null,
				}),
				Ht === null ? (at.memoizedState = Ht = t) : (Ht = Ht.next = t));
		}
		return Ht;
	}
	function yc() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function eu(t) {
		var e = tu;
		return (
			(tu += 1),
			ra === null && (ra = []),
			(t = fo(ra, t, e)),
			(e = at),
			(Ht === null ? e.memoizedState : Ht.next) === null &&
				((e = e.alternate),
				(D.H = e === null || e.memoizedState === null ? Fo : Po)),
			t
		);
	}
	function on(t) {
		if (t !== null && typeof t == "object") {
			if (typeof t.then == "function") return eu(t);
			if (t.$$typeof === F) return $t(t);
		}
		throw Error(f(438, String(t)));
	}
	function vc(t) {
		var e = null,
			l = at.updateQueue;
		if ((l !== null && (e = l.memoCache), e == null)) {
			var a = at.alternate;
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
			l === null && ((l = yc()), (at.updateQueue = l)),
			(l.memoCache = e),
			(l = e.data[e.index]),
			l === void 0)
		)
			for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = At;
		return (e.index++, l);
	}
	function Ge(t, e) {
		return typeof e == "function" ? e(t) : e;
	}
	function sn(t) {
		var e = wt();
		return gc(e, gt, t);
	}
	function gc(t, e, l) {
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
				U = !1;
			do {
				var H = O.lane & -536870913;
				if (H !== O.lane ? (ot & H) === H : (nl & H) === H) {
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
							H === na && (U = !0));
					else if ((nl & M) === M) {
						((O = O.next), M === na && (U = !0));
						continue;
					} else
						((H = {
							lane: 0,
							revertLane: O.revertLane,
							action: O.action,
							hasEagerState: O.hasEagerState,
							eagerState: O.eagerState,
							next: null,
						}),
							v === null ? ((r = v = H), (c = n)) : (v = v.next = H),
							(at.lanes |= M),
							(dl |= M));
					((H = O.action),
						wl && l(n, H),
						(n = O.hasEagerState ? O.eagerState : l(n, H)));
				} else
					((M = {
						lane: H,
						revertLane: O.revertLane,
						action: O.action,
						hasEagerState: O.hasEagerState,
						eagerState: O.eagerState,
						next: null,
					}),
						v === null ? ((r = v = M), (c = n)) : (v = v.next = M),
						(at.lanes |= H),
						(dl |= H));
				O = O.next;
			} while (O !== null && O !== e);
			if (
				(v === null ? (c = n) : (v.next = r),
				!ie(n, t.memoizedState) && ((Gt = !0), U && ((l = ia), l !== null)))
			)
				throw l;
			((t.memoizedState = n),
				(t.baseState = c),
				(t.baseQueue = v),
				(a.lastRenderedState = n));
		}
		return (u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
	}
	function pc(t) {
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
	function go(t, e, l) {
		var a = at,
			u = wt(),
			n = mt;
		if (n) {
			if (l === void 0) throw Error(f(407));
			l = l();
		} else l = e();
		var c = !ie((gt || u).memoizedState, l);
		(c && ((u.memoizedState = l), (Gt = !0)), (u = u.queue));
		var r = bo.bind(null, a, u, t);
		if (
			(lu(2048, 8, r, [t]),
			u.getSnapshot !== e || c || (Ht !== null && Ht.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				oa(9, dn(), So.bind(null, a, u, l, e), null),
				Tt === null)
			)
				throw Error(f(349));
			n || nl & 124 || po(a, e, l);
		}
		return l;
	}
	function po(t, e, l) {
		((t.flags |= 16384),
			(t = { getSnapshot: e, value: l }),
			(e = at.updateQueue),
			e === null
				? ((e = yc()), (at.updateQueue = e), (e.stores = [t]))
				: ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
	}
	function So(t, e, l, a) {
		((e.value = l), (e.getSnapshot = a), xo(e) && Eo(t));
	}
	function bo(t, e, l) {
		return l(function () {
			xo(e) && Eo(t);
		});
	}
	function xo(t) {
		var e = t.getSnapshot;
		t = t.value;
		try {
			var l = e();
			return !ie(t, l);
		} catch {
			return !0;
		}
	}
	function Eo(t) {
		var e = ea(t, 2);
		e !== null && de(e, t, 2);
	}
	function Sc(t) {
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
	function To(t, e, l, a) {
		return ((t.baseState = l), gc(t, gt, typeof a == "function" ? a : Ge));
	}
	function lm(t, e, l, a, u) {
		if (mn(t)) throw Error(f(485));
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
			(D.T !== null ? l(!0) : (n.isTransition = !1),
				a(n),
				(l = e.pending),
				l === null
					? ((n.next = e.pending = n), Ao(e, n))
					: ((n.next = l.next), (e.pending = l.next = n)));
		}
	}
	function Ao(t, e) {
		var l = e.action,
			a = e.payload,
			u = t.state;
		if (e.isTransition) {
			var n = D.T,
				c = {};
			D.T = c;
			try {
				var r = l(u, a),
					v = D.S;
				(v !== null && v(c, r), Ro(t, e, r));
			} catch (O) {
				bc(t, e, O);
			} finally {
				D.T = n;
			}
		} else
			try {
				((n = l(u, a)), Ro(t, e, n));
			} catch (O) {
				bc(t, e, O);
			}
	}
	function Ro(t, e, l) {
		l !== null && typeof l == "object" && typeof l.then == "function"
			? l.then(
					function (a) {
						Oo(t, e, a);
					},
					function (a) {
						return bc(t, e, a);
					},
				)
			: Oo(t, e, l);
	}
	function Oo(t, e, l) {
		((e.status = "fulfilled"),
			(e.value = l),
			Mo(e),
			(t.state = l),
			(e = t.pending),
			e !== null &&
				((l = e.next),
				l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Ao(t, l))));
	}
	function bc(t, e, l) {
		var a = t.pending;
		if (((t.pending = null), a !== null)) {
			a = a.next;
			do ((e.status = "rejected"), (e.reason = l), Mo(e), (e = e.next));
			while (e !== a);
		}
		t.action = null;
	}
	function Mo(t) {
		t = t.listeners;
		for (var e = 0; e < t.length; e++) (0, t[e])();
	}
	function _o(t, e) {
		return e;
	}
	function zo(t, e) {
		if (mt) {
			var l = Tt.formState;
			if (l !== null) {
				t: {
					var a = at;
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
				lastRenderedReducer: _o,
				lastRenderedState: e,
			}),
			(l.queue = a),
			(l = ko.bind(null, at, a)),
			(a.dispatch = l),
			(a = Sc(!1)),
			(n = Rc.bind(null, at, !1, a.queue)),
			(a = te()),
			(u = { state: e, dispatch: null, action: t, pending: null }),
			(a.queue = u),
			(l = lm.bind(null, at, u, n, l)),
			(u.dispatch = l),
			(a.memoizedState = t),
			[e, l, !1]
		);
	}
	function Do(t) {
		var e = wt();
		return No(e, gt, t);
	}
	function No(t, e, l) {
		if (
			((e = gc(t, e, _o)[0]),
			(t = sn(Ge)[0]),
			typeof e == "object" && e !== null && typeof e.then == "function")
		)
			try {
				var a = eu(e);
			} catch (c) {
				throw c === $a ? un : c;
			}
		else a = e;
		e = wt();
		var u = e.queue,
			n = u.dispatch;
		return (
			l !== e.memoizedState &&
				((at.flags |= 2048), oa(9, dn(), am.bind(null, u, l), null)),
			[a, n, t]
		);
	}
	function am(t, e) {
		t.action = e;
	}
	function Uo(t) {
		var e = wt(),
			l = gt;
		if (l !== null) return No(e, l, t);
		(wt(), (e = e.memoizedState), (l = wt()));
		var a = l.queue.dispatch;
		return ((l.memoizedState = t), [e, a, !1]);
	}
	function oa(t, e, l, a) {
		return (
			(t = { tag: t, create: l, deps: a, inst: e, next: null }),
			(e = at.updateQueue),
			e === null && ((e = yc()), (at.updateQueue = e)),
			(l = e.lastEffect),
			l === null
				? (e.lastEffect = t.next = t)
				: ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
			t
		);
	}
	function dn() {
		return { destroy: void 0, resource: void 0 };
	}
	function Co() {
		return wt().memoizedState;
	}
	function hn(t, e, l, a) {
		var u = te();
		((a = a === void 0 ? null : a),
			(at.flags |= t),
			(u.memoizedState = oa(1 | e, dn(), l, a)));
	}
	function lu(t, e, l, a) {
		var u = wt();
		a = a === void 0 ? null : a;
		var n = u.memoizedState.inst;
		gt !== null && a !== null && oc(a, gt.memoizedState.deps)
			? (u.memoizedState = oa(e, n, l, a))
			: ((at.flags |= t), (u.memoizedState = oa(1 | e, n, l, a)));
	}
	function jo(t, e) {
		hn(8390656, 8, t, e);
	}
	function Ho(t, e) {
		lu(2048, 8, t, e);
	}
	function wo(t, e) {
		return lu(4, 2, t, e);
	}
	function qo(t, e) {
		return lu(4, 4, t, e);
	}
	function Bo(t, e) {
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
	function Yo(t, e, l) {
		((l = l != null ? l.concat([t]) : null), lu(4, 4, Bo.bind(null, e, t), l));
	}
	function xc() {}
	function Lo(t, e) {
		var l = wt();
		e = e === void 0 ? null : e;
		var a = l.memoizedState;
		return e !== null && oc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
	}
	function Go(t, e) {
		var l = wt();
		e = e === void 0 ? null : e;
		var a = l.memoizedState;
		if (e !== null && oc(e, a[1])) return a[0];
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
	function Ec(t, e, l) {
		return l === void 0 || nl & 1073741824
			? (t.memoizedState = e)
			: ((t.memoizedState = l), (t = Zs()), (at.lanes |= t), (dl |= t), l);
	}
	function Xo(t, e, l, a) {
		return ie(l, e)
			? l
			: ca.current !== null
				? ((t = Ec(t, l, a)), ie(t, e) || (Gt = !0), t)
				: nl & 42
					? ((t = Zs()), (at.lanes |= t), (dl |= t), e)
					: ((Gt = !0), (t.memoizedState = l));
	}
	function Qo(t, e, l, a, u) {
		var n = L.p;
		L.p = n !== 0 && 8 > n ? n : 8;
		var c = D.T,
			r = {};
		((D.T = r), Rc(t, !1, e, l));
		try {
			var v = u(),
				O = D.S;
			if (
				(O !== null && O(r, v),
				v !== null && typeof v == "object" && typeof v.then == "function")
			) {
				var U = I0(v, a);
				au(t, e, U, se(t));
			} else au(t, e, a, se(t));
		} catch (H) {
			au(t, e, { then: function () {}, status: "rejected", reason: H }, se());
		} finally {
			((L.p = n), (D.T = c));
		}
	}
	function um() {}
	function Tc(t, e, l, a) {
		if (t.tag !== 5) throw Error(f(476));
		var u = Zo(t).queue;
		Qo(
			t,
			u,
			e,
			I,
			l === null
				? um
				: function () {
						return (Vo(t), l(a));
					},
		);
	}
	function Zo(t) {
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
	function Vo(t) {
		var e = Zo(t).next.queue;
		au(t, e, {}, se());
	}
	function Ac() {
		return $t(xu);
	}
	function Ko() {
		return wt().memoizedState;
	}
	function Jo() {
		return wt().memoizedState;
	}
	function nm(t) {
		for (var e = t.return; e !== null; ) {
			switch (e.tag) {
				case 24:
				case 3:
					var l = se();
					t = al(l);
					var a = ul(e, t, l);
					(a !== null && (de(a, e, l), Fa(a, e, l)),
						(e = { cache: tc() }),
						(t.payload = e));
					return;
			}
			e = e.return;
		}
	}
	function im(t, e, l) {
		var a = se();
		((l = {
			lane: a,
			revertLane: 0,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			mn(t)
				? $o(e, l)
				: ((l = Zi(t, e, l, a)), l !== null && (de(l, t, a), Wo(l, e, a))));
	}
	function ko(t, e, l) {
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
		if (mn(t)) $o(e, u);
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
						return (Wu(t, e, u, 0), Tt === null && $u(), !1);
				} catch {
				} finally {
				}
			if (((l = Zi(t, e, u, a)), l !== null))
				return (de(l, t, a), Wo(l, e, a), !0);
		}
		return !1;
	}
	function Rc(t, e, l, a) {
		if (
			((a = {
				lane: 2,
				revertLane: af(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			mn(t))
		) {
			if (e) throw Error(f(479));
		} else ((e = Zi(t, l, a, 2)), e !== null && de(e, t, 2));
	}
	function mn(t) {
		var e = t.alternate;
		return t === at || (e !== null && e === at);
	}
	function $o(t, e) {
		fa = fn = !0;
		var l = t.pending;
		(l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
			(t.pending = e));
	}
	function Wo(t, e, l) {
		if (l & 4194048) {
			var a = e.lanes;
			((a &= t.pendingLanes), (l |= a), (e.lanes = l), ar(t, l));
		}
	}
	var yn = {
			readContext: $t,
			use: on,
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
		Fo = {
			readContext: $t,
			use: on,
			useCallback: function (t, e) {
				return ((te().memoizedState = [t, e === void 0 ? null : e]), t);
			},
			useContext: $t,
			useEffect: jo,
			useImperativeHandle: function (t, e, l) {
				((l = l != null ? l.concat([t]) : null),
					hn(4194308, 4, Bo.bind(null, e, t), l));
			},
			useLayoutEffect: function (t, e) {
				return hn(4194308, 4, t, e);
			},
			useInsertionEffect: function (t, e) {
				hn(4, 2, t, e);
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
					(t = t.dispatch = im.bind(null, at, t)),
					[a.memoizedState, t]
				);
			},
			useRef: function (t) {
				var e = te();
				return ((t = { current: t }), (e.memoizedState = t));
			},
			useState: function (t) {
				t = Sc(t);
				var e = t.queue,
					l = ko.bind(null, at, e);
				return ((e.dispatch = l), [t.memoizedState, l]);
			},
			useDebugValue: xc,
			useDeferredValue: function (t, e) {
				var l = te();
				return Ec(l, t, e);
			},
			useTransition: function () {
				var t = Sc(!1);
				return (
					(t = Qo.bind(null, at, t.queue, !0, !1)),
					(te().memoizedState = t),
					[!1, t]
				);
			},
			useSyncExternalStore: function (t, e, l) {
				var a = at,
					u = te();
				if (mt) {
					if (l === void 0) throw Error(f(407));
					l = l();
				} else {
					if (((l = e()), Tt === null)) throw Error(f(349));
					ot & 124 || po(a, e, l);
				}
				u.memoizedState = l;
				var n = { value: l, getSnapshot: e };
				return (
					(u.queue = n),
					jo(bo.bind(null, a, n, t), [t]),
					(a.flags |= 2048),
					oa(9, dn(), So.bind(null, a, n, l, e), null),
					l
				);
			},
			useId: function () {
				var t = te(),
					e = Tt.identifierPrefix;
				if (mt) {
					var l = Be,
						a = qe;
					((l = (a & ~(1 << (32 - ne(a) - 1))).toString(32) + l),
						(e = "«" + e + "R" + l),
						(l = rn++),
						0 < l && (e += "H" + l.toString(32)),
						(e += "»"));
				} else ((l = tm++), (e = "«" + e + "r" + l.toString(32) + "»"));
				return (t.memoizedState = e);
			},
			useHostTransitionStatus: Ac,
			useFormState: zo,
			useActionState: zo,
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
					(e = Rc.bind(null, at, !0, l)),
					(l.dispatch = e),
					[t, e]
				);
			},
			useMemoCache: vc,
			useCacheRefresh: function () {
				return (te().memoizedState = nm.bind(null, at));
			},
		},
		Po = {
			readContext: $t,
			use: on,
			useCallback: Lo,
			useContext: $t,
			useEffect: Ho,
			useImperativeHandle: Yo,
			useInsertionEffect: wo,
			useLayoutEffect: qo,
			useMemo: Go,
			useReducer: sn,
			useRef: Co,
			useState: function () {
				return sn(Ge);
			},
			useDebugValue: xc,
			useDeferredValue: function (t, e) {
				var l = wt();
				return Xo(l, gt.memoizedState, t, e);
			},
			useTransition: function () {
				var t = sn(Ge)[0],
					e = wt().memoizedState;
				return [typeof t == "boolean" ? t : eu(t), e];
			},
			useSyncExternalStore: go,
			useId: Ko,
			useHostTransitionStatus: Ac,
			useFormState: Do,
			useActionState: Do,
			useOptimistic: function (t, e) {
				var l = wt();
				return To(l, gt, t, e);
			},
			useMemoCache: vc,
			useCacheRefresh: Jo,
		},
		cm = {
			readContext: $t,
			use: on,
			useCallback: Lo,
			useContext: $t,
			useEffect: Ho,
			useImperativeHandle: Yo,
			useInsertionEffect: wo,
			useLayoutEffect: qo,
			useMemo: Go,
			useReducer: pc,
			useRef: Co,
			useState: function () {
				return pc(Ge);
			},
			useDebugValue: xc,
			useDeferredValue: function (t, e) {
				var l = wt();
				return gt === null ? Ec(l, t, e) : Xo(l, gt.memoizedState, t, e);
			},
			useTransition: function () {
				var t = pc(Ge)[0],
					e = wt().memoizedState;
				return [typeof t == "boolean" ? t : eu(t), e];
			},
			useSyncExternalStore: go,
			useId: Ko,
			useHostTransitionStatus: Ac,
			useFormState: Uo,
			useActionState: Uo,
			useOptimistic: function (t, e) {
				var l = wt();
				return gt !== null
					? To(l, gt, t, e)
					: ((l.baseState = t), [t, l.queue.dispatch]);
			},
			useMemoCache: vc,
			useCacheRefresh: Jo,
		},
		sa = null,
		uu = 0;
	function vn(t) {
		var e = uu;
		return ((uu += 1), sa === null && (sa = []), fo(sa, t, e));
	}
	function nu(t, e) {
		((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
	}
	function gn(t, e) {
		throw e.$$typeof === S
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
	function Io(t) {
		var e = t._init;
		return e(t._payload);
	}
	function ts(t) {
		function e(A, x) {
			if (t) {
				var R = A.deletions;
				R === null ? ((A.deletions = [x]), (A.flags |= 16)) : R.push(x);
			}
		}
		function l(A, x) {
			if (!t) return null;
			for (; x !== null; ) (e(A, x), (x = x.sibling));
			return null;
		}
		function a(A) {
			for (var x = new Map(); A !== null; )
				(A.key !== null ? x.set(A.key, A) : x.set(A.index, A), (A = A.sibling));
			return x;
		}
		function u(A, x) {
			return ((A = we(A, x)), (A.index = 0), (A.sibling = null), A);
		}
		function n(A, x, R) {
			return (
				(A.index = R),
				t
					? ((R = A.alternate),
						R !== null
							? ((R = R.index), R < x ? ((A.flags |= 67108866), x) : R)
							: ((A.flags |= 67108866), x))
					: ((A.flags |= 1048576), x)
			);
		}
		function c(A) {
			return (t && A.alternate === null && (A.flags |= 67108866), A);
		}
		function r(A, x, R, j) {
			return x === null || x.tag !== 6
				? ((x = Ki(R, A.mode, j)), (x.return = A), x)
				: ((x = u(x, R)), (x.return = A), x);
		}
		function v(A, x, R, j) {
			var V = R.type;
			return V === q
				? U(A, x, R.props.children, j, R.key)
				: x !== null &&
					  (x.elementType === V ||
							(typeof V == "object" &&
								V !== null &&
								V.$$typeof === nt &&
								Io(V) === x.type))
					? ((x = u(x, R.props)), nu(x, R), (x.return = A), x)
					: ((x = Pu(R.type, R.key, R.props, null, A.mode, j)),
						nu(x, R),
						(x.return = A),
						x);
		}
		function O(A, x, R, j) {
			return x === null ||
				x.tag !== 4 ||
				x.stateNode.containerInfo !== R.containerInfo ||
				x.stateNode.implementation !== R.implementation
				? ((x = Ji(R, A.mode, j)), (x.return = A), x)
				: ((x = u(x, R.children || [])), (x.return = A), x);
		}
		function U(A, x, R, j, V) {
			return x === null || x.tag !== 7
				? ((x = _l(R, A.mode, j, V)), (x.return = A), x)
				: ((x = u(x, R)), (x.return = A), x);
		}
		function H(A, x, R) {
			if (
				(typeof x == "string" && x !== "") ||
				typeof x == "number" ||
				typeof x == "bigint"
			)
				return ((x = Ki("" + x, A.mode, R)), (x.return = A), x);
			if (typeof x == "object" && x !== null) {
				switch (x.$$typeof) {
					case T:
						return (
							(R = Pu(x.type, x.key, x.props, null, A.mode, R)),
							nu(R, x),
							(R.return = A),
							R
						);
					case C:
						return ((x = Ji(x, A.mode, R)), (x.return = A), x);
					case nt:
						var j = x._init;
						return ((x = j(x._payload)), H(A, x, R));
				}
				if (Ut(x) || Et(x))
					return ((x = _l(x, A.mode, R, null)), (x.return = A), x);
				if (typeof x.then == "function") return H(A, vn(x), R);
				if (x.$$typeof === F) return H(A, ln(A, x), R);
				gn(A, x);
			}
			return null;
		}
		function M(A, x, R, j) {
			var V = x !== null ? x.key : null;
			if (
				(typeof R == "string" && R !== "") ||
				typeof R == "number" ||
				typeof R == "bigint"
			)
				return V !== null ? null : r(A, x, "" + R, j);
			if (typeof R == "object" && R !== null) {
				switch (R.$$typeof) {
					case T:
						return R.key === V ? v(A, x, R, j) : null;
					case C:
						return R.key === V ? O(A, x, R, j) : null;
					case nt:
						return ((V = R._init), (R = V(R._payload)), M(A, x, R, j));
				}
				if (Ut(R) || Et(R)) return V !== null ? null : U(A, x, R, j, null);
				if (typeof R.then == "function") return M(A, x, vn(R), j);
				if (R.$$typeof === F) return M(A, x, ln(A, R), j);
				gn(A, R);
			}
			return null;
		}
		function _(A, x, R, j, V) {
			if (
				(typeof j == "string" && j !== "") ||
				typeof j == "number" ||
				typeof j == "bigint"
			)
				return ((A = A.get(R) || null), r(x, A, "" + j, V));
			if (typeof j == "object" && j !== null) {
				switch (j.$$typeof) {
					case T:
						return (
							(A = A.get(j.key === null ? R : j.key) || null),
							v(x, A, j, V)
						);
					case C:
						return (
							(A = A.get(j.key === null ? R : j.key) || null),
							O(x, A, j, V)
						);
					case nt:
						var it = j._init;
						return ((j = it(j._payload)), _(A, x, R, j, V));
				}
				if (Ut(j) || Et(j))
					return ((A = A.get(R) || null), U(x, A, j, V, null));
				if (typeof j.then == "function") return _(A, x, R, vn(j), V);
				if (j.$$typeof === F) return _(A, x, R, ln(x, j), V);
				gn(x, j);
			}
			return null;
		}
		function tt(A, x, R, j) {
			for (
				var V = null, it = null, k = x, P = (x = 0), Qt = null;
				k !== null && P < R.length;
				P++
			) {
				k.index > P ? ((Qt = k), (k = null)) : (Qt = k.sibling);
				var ht = M(A, k, R[P], j);
				if (ht === null) {
					k === null && (k = Qt);
					break;
				}
				(t && k && ht.alternate === null && e(A, k),
					(x = n(ht, x, P)),
					it === null ? (V = ht) : (it.sibling = ht),
					(it = ht),
					(k = Qt));
			}
			if (P === R.length) return (l(A, k), mt && Dl(A, P), V);
			if (k === null) {
				for (; P < R.length; P++)
					((k = H(A, R[P], j)),
						k !== null &&
							((x = n(k, x, P)),
							it === null ? (V = k) : (it.sibling = k),
							(it = k)));
				return (mt && Dl(A, P), V);
			}
			for (k = a(k); P < R.length; P++)
				((Qt = _(k, A, P, R[P], j)),
					Qt !== null &&
						(t &&
							Qt.alternate !== null &&
							k.delete(Qt.key === null ? P : Qt.key),
						(x = n(Qt, x, P)),
						it === null ? (V = Qt) : (it.sibling = Qt),
						(it = Qt)));
			return (
				t &&
					k.forEach(function (xl) {
						return e(A, xl);
					}),
				mt && Dl(A, P),
				V
			);
		}
		function W(A, x, R, j) {
			if (R == null) throw Error(f(151));
			for (
				var V = null, it = null, k = x, P = (x = 0), Qt = null, ht = R.next();
				k !== null && !ht.done;
				P++, ht = R.next()
			) {
				k.index > P ? ((Qt = k), (k = null)) : (Qt = k.sibling);
				var xl = M(A, k, ht.value, j);
				if (xl === null) {
					k === null && (k = Qt);
					break;
				}
				(t && k && xl.alternate === null && e(A, k),
					(x = n(xl, x, P)),
					it === null ? (V = xl) : (it.sibling = xl),
					(it = xl),
					(k = Qt));
			}
			if (ht.done) return (l(A, k), mt && Dl(A, P), V);
			if (k === null) {
				for (; !ht.done; P++, ht = R.next())
					((ht = H(A, ht.value, j)),
						ht !== null &&
							((x = n(ht, x, P)),
							it === null ? (V = ht) : (it.sibling = ht),
							(it = ht)));
				return (mt && Dl(A, P), V);
			}
			for (k = a(k); !ht.done; P++, ht = R.next())
				((ht = _(k, A, P, ht.value, j)),
					ht !== null &&
						(t &&
							ht.alternate !== null &&
							k.delete(ht.key === null ? P : ht.key),
						(x = n(ht, x, P)),
						it === null ? (V = ht) : (it.sibling = ht),
						(it = ht)));
			return (
				t &&
					k.forEach(function (fy) {
						return e(A, fy);
					}),
				mt && Dl(A, P),
				V
			);
		}
		function St(A, x, R, j) {
			if (
				(typeof R == "object" &&
					R !== null &&
					R.type === q &&
					R.key === null &&
					(R = R.props.children),
				typeof R == "object" && R !== null)
			) {
				switch (R.$$typeof) {
					case T:
						t: {
							for (var V = R.key; x !== null; ) {
								if (x.key === V) {
									if (((V = R.type), V === q)) {
										if (x.tag === 7) {
											(l(A, x.sibling),
												(j = u(x, R.props.children)),
												(j.return = A),
												(A = j));
											break t;
										}
									} else if (
										x.elementType === V ||
										(typeof V == "object" &&
											V !== null &&
											V.$$typeof === nt &&
											Io(V) === x.type)
									) {
										(l(A, x.sibling),
											(j = u(x, R.props)),
											nu(j, R),
											(j.return = A),
											(A = j));
										break t;
									}
									l(A, x);
									break;
								} else e(A, x);
								x = x.sibling;
							}
							R.type === q
								? ((j = _l(R.props.children, A.mode, j, R.key)),
									(j.return = A),
									(A = j))
								: ((j = Pu(R.type, R.key, R.props, null, A.mode, j)),
									nu(j, R),
									(j.return = A),
									(A = j));
						}
						return c(A);
					case C:
						t: {
							for (V = R.key; x !== null; ) {
								if (x.key === V)
									if (
										x.tag === 4 &&
										x.stateNode.containerInfo === R.containerInfo &&
										x.stateNode.implementation === R.implementation
									) {
										(l(A, x.sibling),
											(j = u(x, R.children || [])),
											(j.return = A),
											(A = j));
										break t;
									} else {
										l(A, x);
										break;
									}
								else e(A, x);
								x = x.sibling;
							}
							((j = Ji(R, A.mode, j)), (j.return = A), (A = j));
						}
						return c(A);
					case nt:
						return ((V = R._init), (R = V(R._payload)), St(A, x, R, j));
				}
				if (Ut(R)) return tt(A, x, R, j);
				if (Et(R)) {
					if (((V = Et(R)), typeof V != "function")) throw Error(f(150));
					return ((R = V.call(R)), W(A, x, R, j));
				}
				if (typeof R.then == "function") return St(A, x, vn(R), j);
				if (R.$$typeof === F) return St(A, x, ln(A, R), j);
				gn(A, R);
			}
			return (typeof R == "string" && R !== "") ||
				typeof R == "number" ||
				typeof R == "bigint"
				? ((R = "" + R),
					x !== null && x.tag === 6
						? (l(A, x.sibling), (j = u(x, R)), (j.return = A), (A = j))
						: (l(A, x), (j = Ki(R, A.mode, j)), (j.return = A), (A = j)),
					c(A))
				: l(A, x);
		}
		return function (A, x, R, j) {
			try {
				uu = 0;
				var V = St(A, x, R, j);
				return ((sa = null), V);
			} catch (k) {
				if (k === $a || k === un) throw k;
				var it = ce(29, k, null, A.mode);
				return ((it.lanes = j), (it.return = A), it);
			} finally {
			}
		};
	}
	var da = ts(!0),
		es = ts(!1),
		Se = w(null),
		_e = null;
	function il(t) {
		var e = t.alternate;
		(B(Bt, Bt.current & 1),
			B(Se, t),
			_e === null &&
				(e === null || ca.current !== null || e.memoizedState !== null) &&
				(_e = t));
	}
	function ls(t) {
		if (t.tag === 22) {
			if ((B(Bt, Bt.current), B(Se, t), _e === null)) {
				var e = t.alternate;
				e !== null && e.memoizedState !== null && (_e = t);
			}
		} else cl();
	}
	function cl() {
		(B(Bt, Bt.current), B(Se, Se.current));
	}
	function Xe(t) {
		(Q(Se), _e === t && (_e = null), Q(Bt));
	}
	var Bt = w(0);
	function pn(t) {
		for (var e = t; e !== null; ) {
			if (e.tag === 13) {
				var l = e.memoizedState;
				if (
					l !== null &&
					((l = l.dehydrated), l === null || l.data === "$?" || vf(l))
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
	function Oc(t, e, l, a) {
		((e = t.memoizedState),
			(l = l(a, e)),
			(l = l == null ? e : p({}, e, l)),
			(t.memoizedState = l),
			t.lanes === 0 && (t.updateQueue.baseState = l));
	}
	var Mc = {
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
	function as(t, e, l, a, u, n, c) {
		return (
			(t = t.stateNode),
			typeof t.shouldComponentUpdate == "function"
				? t.shouldComponentUpdate(a, n, c)
				: e.prototype && e.prototype.isPureReactComponent
					? !Ga(l, a) || !Ga(u, n)
					: !0
		);
	}
	function us(t, e, l, a) {
		((t = e.state),
			typeof e.componentWillReceiveProps == "function" &&
				e.componentWillReceiveProps(l, a),
			typeof e.UNSAFE_componentWillReceiveProps == "function" &&
				e.UNSAFE_componentWillReceiveProps(l, a),
			e.state !== t && Mc.enqueueReplaceState(e, e.state, null));
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
	var Sn =
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
	function ns(t) {
		Sn(t);
	}
	function is(t) {
		console.error(t);
	}
	function cs(t) {
		Sn(t);
	}
	function bn(t, e) {
		try {
			var l = t.onUncaughtError;
			l(e.value, { componentStack: e.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function fs(t, e, l) {
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
	function _c(t, e, l) {
		return (
			(l = al(l)),
			(l.tag = 3),
			(l.payload = { element: null }),
			(l.callback = function () {
				bn(t, e);
			}),
			l
		);
	}
	function rs(t) {
		return ((t = al(t)), (t.tag = 3), t);
	}
	function os(t, e, l, a) {
		var u = l.type.getDerivedStateFromError;
		if (typeof u == "function") {
			var n = a.value;
			((t.payload = function () {
				return u(n);
			}),
				(t.callback = function () {
					fs(e, l, a);
				}));
		}
		var c = l.stateNode;
		c !== null &&
			typeof c.componentDidCatch == "function" &&
			(t.callback = function () {
				(fs(e, l, a),
					typeof u != "function" &&
						(hl === null ? (hl = new Set([this])) : hl.add(this)));
				var r = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: r !== null ? r : "",
				});
			});
	}
	function fm(t, e, l, a, u) {
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
							_e === null ? Pc() : l.alternate === null && Nt === 0 && (Nt = 3),
							(l.flags &= -257),
							(l.flags |= 65536),
							(l.lanes = u),
							a === ac
								? (l.flags |= 16384)
								: ((e = l.updateQueue),
									e === null ? (l.updateQueue = new Set([a])) : e.add(a),
									tf(t, a, u)),
							!1
						);
					case 22:
						return (
							(l.flags |= 65536),
							a === ac
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
									tf(t, a, u)),
							!1
						);
				}
				throw Error(f(435, l.tag));
			}
			return (tf(t, a, u), Pc(), !1);
		}
		if (mt)
			return (
				(e = Se.current),
				e !== null
					? (!(e.flags & 65536) && (e.flags |= 256),
						(e.flags |= 65536),
						(e.lanes = u),
						a !== Wi && ((t = Error(f(422), { cause: a })), Va(ye(t, l))))
					: (a !== Wi && ((e = Error(f(423), { cause: a })), Va(ye(e, l))),
						(t = t.current.alternate),
						(t.flags |= 65536),
						(u &= -u),
						(t.lanes |= u),
						(a = ye(a, l)),
						(u = _c(t.stateNode, a, u)),
						ic(t, u),
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
						(t = _c(l.stateNode, a, t)),
						ic(l, t),
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
							(u = rs(u)),
							os(u, t, l, a),
							ic(l, u),
							!1
						);
			}
			l = l.return;
		} while (l !== null);
		return !1;
	}
	var ss = Error(f(461)),
		Gt = !1;
	function Zt(t, e, l, a) {
		e.child = t === null ? es(e, null, l, a) : da(e, t.child, l, a);
	}
	function ds(t, e, l, a, u) {
		l = l.render;
		var n = e.ref;
		if ("ref" in a) {
			var c = {};
			for (var r in a) r !== "ref" && (c[r] = a[r]);
		} else c = a;
		return (
			jl(e),
			(a = sc(t, e, l, c, n, u)),
			(r = dc()),
			t !== null && !Gt
				? (hc(t, e, u), Qe(t, e, u))
				: (mt && r && ki(e), (e.flags |= 1), Zt(t, e, a, u), e.child)
		);
	}
	function hs(t, e, l, a, u) {
		if (t === null) {
			var n = l.type;
			return typeof n == "function" &&
				!Vi(n) &&
				n.defaultProps === void 0 &&
				l.compare === null
				? ((e.tag = 15), (e.type = n), ms(t, e, n, a, u))
				: ((t = Pu(l.type, null, a, e, e.mode, u)),
					(t.ref = e.ref),
					(t.return = e),
					(e.child = t));
		}
		if (((n = t.child), !wc(t, u))) {
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
	function ms(t, e, l, a, u) {
		if (t !== null) {
			var n = t.memoizedProps;
			if (Ga(n, a) && t.ref === e.ref)
				if (((Gt = !1), (e.pendingProps = a = n), wc(t, u)))
					t.flags & 131072 && (Gt = !0);
				else return ((e.lanes = t.lanes), Qe(t, e, u));
		}
		return zc(t, e, l, a, u);
	}
	function ys(t, e, l) {
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
				return vs(t, e, a, l);
			}
			if (l & 536870912)
				((e.memoizedState = { baseLanes: 0, cachePool: null }),
					t !== null && an(e, n !== null ? n.cachePool : null),
					n !== null ? mo(e, n) : fc(),
					ls(e));
			else
				return (
					(e.lanes = e.childLanes = 536870912),
					vs(t, e, n !== null ? n.baseLanes | l : l, l)
				);
		} else
			n !== null
				? (an(e, n.cachePool), mo(e, n), cl(), (e.memoizedState = null))
				: (t !== null && an(e, null), fc(), cl());
		return (Zt(t, e, u, l), e.child);
	}
	function vs(t, e, l, a) {
		var u = lc();
		return (
			(u = u === null ? null : { parent: qt._currentValue, pool: u }),
			(e.memoizedState = { baseLanes: l, cachePool: u }),
			t !== null && an(e, null),
			fc(),
			ls(e),
			t !== null && Ka(t, e, a, !0),
			null
		);
	}
	function xn(t, e) {
		var l = e.ref;
		if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
		else {
			if (typeof l != "function" && typeof l != "object") throw Error(f(284));
			(t === null || t.ref !== l) && (e.flags |= 4194816);
		}
	}
	function zc(t, e, l, a, u) {
		return (
			jl(e),
			(l = sc(t, e, l, a, void 0, u)),
			(a = dc()),
			t !== null && !Gt
				? (hc(t, e, u), Qe(t, e, u))
				: (mt && a && ki(e), (e.flags |= 1), Zt(t, e, l, u), e.child)
		);
	}
	function gs(t, e, l, a, u, n) {
		return (
			jl(e),
			(e.updateQueue = null),
			(l = vo(e, a, l, u)),
			yo(t),
			(a = dc()),
			t !== null && !Gt
				? (hc(t, e, n), Qe(t, e, n))
				: (mt && a && ki(e), (e.flags |= 1), Zt(t, e, l, n), e.child)
		);
	}
	function ps(t, e, l, a, u) {
		if ((jl(e), e.stateNode === null)) {
			var n = la,
				c = l.contextType;
			(typeof c == "object" && c !== null && (n = $t(c)),
				(n = new l(a, n)),
				(e.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = Mc),
				(e.stateNode = n),
				(n._reactInternals = e),
				(n = e.stateNode),
				(n.props = a),
				(n.state = e.memoizedState),
				(n.refs = {}),
				uc(e),
				(c = l.contextType),
				(n.context = typeof c == "object" && c !== null ? $t(c) : la),
				(n.state = e.memoizedState),
				(c = l.getDerivedStateFromProps),
				typeof c == "function" && (Oc(e, l, c, a), (n.state = e.memoizedState)),
				typeof l.getDerivedStateFromProps == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function" ||
					(typeof n.UNSAFE_componentWillMount != "function" &&
						typeof n.componentWillMount != "function") ||
					((c = n.state),
					typeof n.componentWillMount == "function" && n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == "function" &&
						n.UNSAFE_componentWillMount(),
					c !== n.state && Mc.enqueueReplaceState(n, n.state, null),
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
				U = l.contextType;
			((c = la), typeof U == "object" && U !== null && (c = $t(U)));
			var H = l.getDerivedStateFromProps;
			((U =
				typeof H == "function" ||
				typeof n.getSnapshotBeforeUpdate == "function"),
				(r = e.pendingProps !== r),
				U ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((r || O !== c) && us(e, n, a, c)),
				(ll = !1));
			var M = e.memoizedState;
			((n.state = M),
				Ia(e, a, n, u),
				Pa(),
				(O = e.memoizedState),
				r || M !== O || ll
					? (typeof H == "function" && (Oc(e, l, H, a), (O = e.memoizedState)),
						(v = ll || as(e, l, v, a, M, O, c))
							? (U ||
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
				nc(t, e),
				(c = e.memoizedProps),
				(U = ql(l, c)),
				(n.props = U),
				(H = e.pendingProps),
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
					((c !== H || M !== v) && us(e, n, a, v)),
				(ll = !1),
				(M = e.memoizedState),
				(n.state = M),
				Ia(e, a, n, u),
				Pa());
			var _ = e.memoizedState;
			c !== H ||
			M !== _ ||
			ll ||
			(t !== null && t.dependencies !== null && en(t.dependencies))
				? (typeof r == "function" && (Oc(e, l, r, a), (_ = e.memoizedState)),
					(U =
						ll ||
						as(e, l, U, a, M, _, v) ||
						(t !== null && t.dependencies !== null && en(t.dependencies)))
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
					(a = U))
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
			xn(t, e),
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
	function Ss(t, e, l, a) {
		return (Za(), (e.flags |= 256), Zt(t, e, l, a), e.child);
	}
	var Dc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function Nc(t) {
		return { baseLanes: t, cachePool: no() };
	}
	function Uc(t, e, l) {
		return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= be), t);
	}
	function bs(t, e, l) {
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
					return (vf(r) ? (e.lanes = 32) : (e.lanes = 536870912), null);
				Xe(e);
			}
			return (
				(r = a.children),
				(a = a.fallback),
				u
					? (cl(),
						(u = e.mode),
						(r = En({ mode: "hidden", children: r }, u)),
						(a = _l(a, u, l, null)),
						(r.return = e),
						(a.return = e),
						(r.sibling = a),
						(e.child = r),
						(u = e.child),
						(u.memoizedState = Nc(l)),
						(u.childLanes = Uc(t, c, l)),
						(e.memoizedState = Dc),
						a)
					: (il(e), Cc(e, r))
			);
		}
		if (
			((v = t.memoizedState), v !== null && ((r = v.dehydrated), r !== null))
		) {
			if (n)
				e.flags & 256
					? (il(e), (e.flags &= -257), (e = jc(t, e, l)))
					: e.memoizedState !== null
						? (cl(), (e.child = t.child), (e.flags |= 128), (e = null))
						: (cl(),
							(u = a.fallback),
							(r = e.mode),
							(a = En({ mode: "visible", children: a.children }, r)),
							(u = _l(u, r, l, null)),
							(u.flags |= 2),
							(a.return = e),
							(u.return = e),
							(a.sibling = u),
							(e.child = a),
							da(e, t.child, null, l),
							(a = e.child),
							(a.memoizedState = Nc(l)),
							(a.childLanes = Uc(t, c, l)),
							(e.memoizedState = Dc),
							(e = u));
			else if ((il(e), vf(r))) {
				if (((c = r.nextSibling && r.nextSibling.dataset), c)) var O = c.dgst;
				((c = O),
					(a = Error(f(419))),
					(a.stack = ""),
					(a.digest = c),
					Va({ value: a, source: null, stack: null }),
					(e = jc(t, e, l)));
			} else if (
				(Gt || Ka(t, e, l, !1), (c = (l & t.childLanes) !== 0), Gt || c)
			) {
				if (
					((c = Tt),
					c !== null &&
						((a = l & -l),
						(a = a & 42 ? 1 : vi(a)),
						(a = a & (c.suspendedLanes | l) ? 0 : a),
						a !== 0 && a !== v.retryLane))
				)
					throw ((v.retryLane = a), ea(t, a), de(c, t, a), ss);
				(r.data === "$?" || Pc(), (e = jc(t, e, l)));
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
						(e = Cc(e, a.children)),
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
					? (r = Nc(l))
					: ((v = r.cachePool),
						v !== null
							? ((O = qt._currentValue),
								(v = v.parent !== O ? { parent: O, pool: O } : v))
							: (v = no()),
						(r = { baseLanes: r.baseLanes | l, cachePool: v })),
				(u.memoizedState = r),
				(u.childLanes = Uc(t, c, l)),
				(e.memoizedState = Dc),
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
	function Cc(t, e) {
		return (
			(e = En({ mode: "visible", children: e }, t.mode)),
			(e.return = t),
			(t.child = e)
		);
	}
	function En(t, e) {
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
	function jc(t, e, l) {
		return (
			da(e, t.child, null, l),
			(t = Cc(e, e.pendingProps.children)),
			(t.flags |= 2),
			(e.memoizedState = null),
			t
		);
	}
	function xs(t, e, l) {
		t.lanes |= e;
		var a = t.alternate;
		(a !== null && (a.lanes |= e), Pi(t.return, e, l));
	}
	function Hc(t, e, l, a, u) {
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
	function Es(t, e, l) {
		var a = e.pendingProps,
			u = a.revealOrder,
			n = a.tail;
		if ((Zt(t, e, a.children, l), (a = Bt.current), a & 2))
			((a = (a & 1) | 2), (e.flags |= 128));
		else {
			if (t !== null && t.flags & 128)
				t: for (t = e.child; t !== null; ) {
					if (t.tag === 13) t.memoizedState !== null && xs(t, l, e);
					else if (t.tag === 19) xs(t, l, e);
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
		switch ((B(Bt, a), u)) {
			case "forwards":
				for (l = e.child, u = null; l !== null; )
					((t = l.alternate),
						t !== null && pn(t) === null && (u = l),
						(l = l.sibling));
				((l = u),
					l === null
						? ((u = e.child), (e.child = null))
						: ((u = l.sibling), (l.sibling = null)),
					Hc(e, !1, u, l, n));
				break;
			case "backwards":
				for (l = null, u = e.child, e.child = null; u !== null; ) {
					if (((t = u.alternate), t !== null && pn(t) === null)) {
						e.child = u;
						break;
					}
					((t = u.sibling), (u.sibling = l), (l = u), (u = t));
				}
				Hc(e, !0, l, null, n);
				break;
			case "together":
				Hc(e, !1, null, null, void 0);
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
	function wc(t, e) {
		return t.lanes & e ? !0 : ((t = t.dependencies), !!(t !== null && en(t)));
	}
	function rm(t, e, l) {
		switch (e.tag) {
			case 3:
				(Ot(e, e.stateNode.containerInfo),
					el(e, qt, t.memoizedState.cache),
					Za());
				break;
			case 27:
			case 5:
				si(e);
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
							? bs(t, e, l)
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
					if (a) return Es(t, e, l);
					e.flags |= 128;
				}
				if (
					((u = e.memoizedState),
					u !== null &&
						((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
					B(Bt, Bt.current),
					a)
				)
					break;
				return null;
			case 22:
			case 23:
				return ((e.lanes = 0), ys(t, e, l));
			case 24:
				el(e, qt, t.memoizedState.cache);
		}
		return Qe(t, e, l);
	}
	function Ts(t, e, l) {
		if (t !== null)
			if (t.memoizedProps !== e.pendingProps) Gt = !0;
			else {
				if (!wc(t, l) && !(e.flags & 128)) return ((Gt = !1), rm(t, e, l));
				Gt = !!(t.flags & 131072);
			}
		else ((Gt = !1), mt && e.flags & 1048576 && Pr(e, tn, e.index));
		switch (((e.lanes = 0), e.tag)) {
			case 16:
				t: {
					t = e.pendingProps;
					var a = e.elementType,
						u = a._init;
					if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
						Vi(a)
							? ((t = ql(a, t)), (e.tag = 1), (e = ps(null, e, a, t, l)))
							: ((e.tag = 0), (e = zc(null, e, a, t, l)));
					else {
						if (a != null) {
							if (((u = a.$$typeof), u === J)) {
								((e.tag = 11), (e = ds(null, e, a, t, l)));
								break t;
							} else if (u === ut) {
								((e.tag = 14), (e = hs(null, e, a, t, l)));
								break t;
							}
						}
						throw ((e = Jt(a) || a), Error(f(306, e, "")));
					}
				}
				return e;
			case 0:
				return zc(t, e, e.type, e.pendingProps, l);
			case 1:
				return ((a = e.type), (u = ql(a, e.pendingProps)), ps(t, e, a, u, l));
			case 3:
				t: {
					if ((Ot(e, e.stateNode.containerInfo), t === null))
						throw Error(f(387));
					a = e.pendingProps;
					var n = e.memoizedState;
					((u = n.element), nc(t, e), Ia(e, a, null, l));
					var c = e.memoizedState;
					if (
						((a = c.cache),
						el(e, qt, a),
						a !== n.cache && Ii(e, [qt], l, !0),
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
							e = Ss(t, e, a, l);
							break t;
						} else if (a !== u) {
							((u = ye(Error(f(424)), e)), Va(u), (e = Ss(t, e, a, l)));
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
									l = es(e, null, a, l),
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
					xn(t, e),
					t === null
						? (l = Md(e.type, null, e.pendingProps, null))
							? (e.memoizedState = l)
							: mt ||
								((l = e.type),
								(t = e.pendingProps),
								(a = wn(et.current).createElement(l)),
								(a[kt] = e),
								(a[Pt] = t),
								Kt(a, l, t),
								Lt(a),
								(e.stateNode = a))
						: (e.memoizedState = Md(
								e.type,
								t.memoizedProps,
								e.pendingProps,
								t.memoizedState,
							)),
					null
				);
			case 27:
				return (
					si(e),
					t === null &&
						mt &&
						((a = e.stateNode = Ad(e.type, e.pendingProps, et.current)),
						(Ft = e),
						(Me = !0),
						(u = Dt),
						vl(e.type) ? ((gf = u), (Dt = Ae(a.firstChild))) : (Dt = u)),
					Zt(t, e, e.pendingProps.children, l),
					xn(t, e),
					t === null && (e.flags |= 4194304),
					e.child
				);
			case 5:
				return (
					t === null &&
						mt &&
						((u = a = Dt) &&
							((a = qm(a, e.type, e.pendingProps, Me)),
							a !== null
								? ((e.stateNode = a),
									(Ft = e),
									(Dt = Ae(a.firstChild)),
									(Me = !1),
									(u = !0))
								: (u = !1)),
						u || Ul(e)),
					si(e),
					(u = e.type),
					(n = e.pendingProps),
					(c = t !== null ? t.memoizedProps : null),
					(a = n.children),
					hf(u, n) ? (a = null) : c !== null && hf(u, c) && (e.flags |= 32),
					e.memoizedState !== null &&
						((u = sc(t, e, em, null, null, l)), (xu._currentValue = u)),
					xn(t, e),
					Zt(t, e, a, l),
					e.child
				);
			case 6:
				return (
					t === null &&
						mt &&
						((t = l = Dt) &&
							((l = Bm(l, e.pendingProps, Me)),
							l !== null
								? ((e.stateNode = l), (Ft = e), (Dt = null), (t = !0))
								: (t = !1)),
						t || Ul(e)),
					null
				);
			case 13:
				return bs(t, e, l);
			case 4:
				return (
					Ot(e, e.stateNode.containerInfo),
					(a = e.pendingProps),
					t === null ? (e.child = da(e, null, a, l)) : Zt(t, e, a, l),
					e.child
				);
			case 11:
				return ds(t, e, e.type, e.pendingProps, l);
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
				return hs(t, e, e.type, e.pendingProps, l);
			case 15:
				return ms(t, e, e.type, e.pendingProps, l);
			case 19:
				return Es(t, e, l);
			case 31:
				return (
					(a = e.pendingProps),
					(l = e.mode),
					(a = { mode: a.mode, children: a.children }),
					t === null
						? ((l = En(a, l)),
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
				return ys(t, e, l);
			case 24:
				return (
					jl(e),
					(a = $t(qt)),
					t === null
						? ((u = lc()),
							u === null &&
								((u = Tt),
								(n = tc()),
								(u.pooledCache = n),
								n.refCount++,
								n !== null && (u.pooledCacheLanes |= l),
								(u = n)),
							(e.memoizedState = { parent: a, cache: u }),
							uc(e),
							el(e, qt, u))
						: (t.lanes & l && (nc(t, e), Ia(e, null, null, l), Pa()),
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
									a !== u.cache && Ii(e, [qt], l, !0))),
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
	function As(t, e) {
		if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
		else if (((t.flags |= 16777216), !Ud(e))) {
			if (
				((e = Se.current),
				e !== null &&
					((ot & 4194048) === ot
						? _e !== null
						: ((ot & 62914560) !== ot && !(ot & 536870912)) || e !== _e))
			)
				throw ((Wa = ac), io);
			t.flags |= 8192;
		}
	}
	function Tn(t, e) {
		(e !== null && (t.flags |= 4),
			t.flags & 16384 &&
				((e = t.tag !== 22 ? er() : 536870912), (t.lanes |= e), (va |= e)));
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
	function om(t, e, l) {
		var a = e.pendingProps;
		switch (($i(e), e.tag)) {
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
								((e.flags |= 1024), eo())),
					_t(e),
					null
				);
			case 26:
				return (
					(l = e.memoizedState),
					t === null
						? (Ze(e),
							l !== null ? (_t(e), As(e, l)) : (_t(e), (e.flags &= -16777217)))
						: l
							? l !== t.memoizedState
								? (Ze(e), _t(e), As(e, l))
								: (_t(e), (e.flags &= -16777217))
							: (t.memoizedProps !== a && Ze(e), _t(e), (e.flags &= -16777217)),
					null
				);
			case 27:
				(Cu(e), (l = et.current));
				var u = e.type;
				if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ze(e);
				else {
					if (!a) {
						if (e.stateNode === null) throw Error(f(166));
						return (_t(e), null);
					}
					((t = $.current),
						Qa(e) ? Ir(e) : ((t = Ad(u, a, l)), (e.stateNode = t), Ze(e)));
				}
				return (_t(e), null);
			case 5:
				if ((Cu(e), (l = e.type), t !== null && e.stateNode != null))
					t.memoizedProps !== a && Ze(e);
				else {
					if (!a) {
						if (e.stateNode === null) throw Error(f(166));
						return (_t(e), null);
					}
					if (((t = $.current), Qa(e))) Ir(e);
					else {
						switch (((u = wn(et.current)), t)) {
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
								gd(t.nodeValue, l)
							)),
							t || Ul(e));
					} else
						((t = wn(t).createTextNode(a)), (t[kt] = e), (e.stateNode = t));
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
						((u = eo()),
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
					Tn(e, e.updateQueue),
					_t(e),
					null
				);
			case 4:
				return (Fe(), t === null && ff(e.stateNode.containerInfo), _t(e), null);
			case 10:
				return (Le(e.type), _t(e), null);
			case 19:
				if ((Q(Bt), (u = e.memoizedState), u === null)) return (_t(e), null);
				if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
					if (a) iu(u, !1);
					else {
						if (Nt !== 0 || (t !== null && t.flags & 128))
							for (t = e.child; t !== null; ) {
								if (((n = pn(t)), n !== null)) {
									for (
										e.flags |= 128,
											iu(u, !1),
											t = n.updateQueue,
											e.updateQueue = t,
											Tn(e, t),
											e.subtreeFlags = 0,
											t = l,
											l = e.child;
										l !== null;

									)
										(Fr(l, t), (l = l.sibling));
									return (B(Bt, (Bt.current & 1) | 2), e.child);
								}
								t = t.sibling;
							}
						u.tail !== null &&
							Oe() > On &&
							((e.flags |= 128), (a = !0), iu(u, !1), (e.lanes = 4194304));
					}
				else {
					if (!a)
						if (((t = pn(n)), t !== null)) {
							if (
								((e.flags |= 128),
								(a = !0),
								(t = t.updateQueue),
								(e.updateQueue = t),
								Tn(e, t),
								iu(u, !0),
								u.tail === null &&
									u.tailMode === "hidden" &&
									!n.alternate &&
									!mt)
							)
								return (_t(e), null);
						} else
							2 * Oe() - u.renderingStartTime > On &&
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
						B(Bt, a ? (t & 1) | 2 : t & 1),
						e)
					: (_t(e), null);
			case 22:
			case 23:
				return (
					Xe(e),
					rc(),
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
					l !== null && Tn(e, l.retryQueue),
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
					t !== null && Q(Hl),
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
	function sm(t, e) {
		switch (($i(e), e.tag)) {
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
				return (Cu(e), null);
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
				return (Q(Bt), null);
			case 4:
				return (Fe(), null);
			case 10:
				return (Le(e.type), null);
			case 22:
			case 23:
				return (
					Xe(e),
					rc(),
					t !== null && Q(Hl),
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
	function Rs(t, e) {
		switch (($i(e), e.tag)) {
			case 3:
				(Le(qt), Fe());
				break;
			case 26:
			case 27:
			case 5:
				Cu(e);
				break;
			case 4:
				Fe();
				break;
			case 13:
				Xe(e);
				break;
			case 19:
				Q(Bt);
				break;
			case 10:
				Le(e.type);
				break;
			case 22:
			case 23:
				(Xe(e), rc(), t !== null && Q(Hl));
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
			xt(e, e.return, r);
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
							} catch (U) {
								xt(u, v, U);
							}
						}
					}
					a = a.next;
				} while (a !== n);
			}
		} catch (U) {
			xt(e, e.return, U);
		}
	}
	function Os(t) {
		var e = t.updateQueue;
		if (e !== null) {
			var l = t.stateNode;
			try {
				ho(e, l);
			} catch (a) {
				xt(t, t.return, a);
			}
		}
	}
	function Ms(t, e, l) {
		((l.props = ql(t.type, t.memoizedProps)), (l.state = t.memoizedState));
		try {
			l.componentWillUnmount();
		} catch (a) {
			xt(t, e, a);
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
			xt(t, e, u);
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
					xt(t, e, u);
				} finally {
					((t.refCleanup = null),
						(t = t.alternate),
						t != null && (t.refCleanup = null));
				}
			else if (typeof l == "function")
				try {
					l(null);
				} catch (u) {
					xt(t, e, u);
				}
			else l.current = null;
	}
	function _s(t) {
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
			xt(t, t.return, u);
		}
	}
	function qc(t, e, l) {
		try {
			var a = t.stateNode;
			(Um(a, t.type, l, e), (a[Pt] = e));
		} catch (u) {
			xt(t, t.return, u);
		}
	}
	function zs(t) {
		return (
			t.tag === 5 ||
			t.tag === 3 ||
			t.tag === 26 ||
			(t.tag === 27 && vl(t.type)) ||
			t.tag === 4
		);
	}
	function Bc(t) {
		t: for (;;) {
			for (; t.sibling === null; ) {
				if (t.return === null || zs(t.return)) return null;
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
	function Yc(t, e, l) {
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
						l != null || e.onclick !== null || (e.onclick = Hn)));
		else if (
			a !== 4 &&
			(a === 27 && vl(t.type) && ((l = t.stateNode), (e = null)),
			(t = t.child),
			t !== null)
		)
			for (Yc(t, e, l), t = t.sibling; t !== null; )
				(Yc(t, e, l), (t = t.sibling));
	}
	function An(t, e, l) {
		var a = t.tag;
		if (a === 5 || a === 6)
			((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
		else if (
			a !== 4 &&
			(a === 27 && vl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
		)
			for (An(t, e, l), t = t.sibling; t !== null; )
				(An(t, e, l), (t = t.sibling));
	}
	function Ds(t) {
		var e = t.stateNode,
			l = t.memoizedProps;
		try {
			for (var a = t.type, u = e.attributes; u.length; )
				e.removeAttributeNode(u[0]);
			(Kt(e, a, l), (e[kt] = t), (e[Pt] = l));
		} catch (n) {
			xt(t, t.return, n);
		}
	}
	var Ve = !1,
		jt = !1,
		Lc = !1,
		Ns = typeof WeakSet == "function" ? WeakSet : Set,
		Xt = null;
	function dm(t, e) {
		if (((t = t.containerInfo), (sf = Xn), (t = Gr(t)), Bi(t))) {
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
							U = 0,
							H = t,
							M = null;
						e: for (;;) {
							for (
								var _;
								H !== l || (u !== 0 && H.nodeType !== 3) || (r = c + u),
									H !== n || (a !== 0 && H.nodeType !== 3) || (v = c + a),
									H.nodeType === 3 && (c += H.nodeValue.length),
									(_ = H.firstChild) !== null;

							)
								((M = H), (H = _));
							for (;;) {
								if (H === t) break e;
								if (
									(M === l && ++O === u && (r = c),
									M === n && ++U === a && (v = c),
									(_ = H.nextSibling) !== null)
								)
									break;
								((H = M), (M = H.parentNode));
							}
							H = _;
						}
						l = r === -1 || v === -1 ? null : { start: r, end: v };
					} else l = null;
				}
			l = l || { start: 0, end: 0 };
		} else l = null;
		for (
			df = { focusedElem: t, selectionRange: l }, Xn = !1, Xt = e;
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
								} catch (W) {
									xt(l, l.return, W);
								}
							}
							break;
						case 3:
							if (t & 1024) {
								if (
									((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
								)
									yf(t);
								else if (l === 1)
									switch (t.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											yf(t);
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
	function Us(t, e, l) {
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
							xt(l, l.return, c);
						}
					else {
						var u = ql(l.type, e.memoizedProps);
						e = e.memoizedState;
						try {
							t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
						} catch (c) {
							xt(l, l.return, c);
						}
					}
				(a & 64 && Os(l), a & 512 && fu(l, l.return));
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
						ho(t, e);
					} catch (c) {
						xt(l, l.return, c);
					}
				}
				break;
			case 27:
				e === null && a & 4 && Ds(l);
			case 26:
			case 5:
				(rl(t, l), e === null && a & 4 && _s(l), a & 512 && fu(l, l.return));
				break;
			case 12:
				rl(t, l);
				break;
			case 13:
				(rl(t, l),
					a & 4 && Hs(t, l),
					a & 64 &&
						((t = l.memoizedState),
						t !== null &&
							((t = t.dehydrated),
							t !== null && ((l = xm.bind(null, l)), Ym(t, l)))));
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
	function Cs(t) {
		var e = t.alternate;
		(e !== null && ((t.alternate = null), Cs(e)),
			(t.child = null),
			(t.deletions = null),
			(t.sibling = null),
			t.tag === 5 && ((e = t.stateNode), e !== null && Si(e)),
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
		for (l = l.child; l !== null; ) (js(t, e, l), (l = l.sibling));
	}
	function js(t, e, l) {
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
							xt(l, e, n);
						}
					else
						try {
							Mt.removeChild(l.stateNode);
						} catch (n) {
							xt(l, e, n);
						}
				break;
			case 18:
				Mt !== null &&
					(ee
						? ((t = Mt),
							Ed(
								t.nodeType === 9
									? t.body
									: t.nodeName === "HTML"
										? t.ownerDocument.body
										: t,
								l.stateNode,
							),
							Ru(t))
						: Ed(Mt, l.stateNode));
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
					typeof a.componentWillUnmount == "function" && Ms(l, e, a)),
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
	function Hs(t, e) {
		if (
			e.memoizedState === null &&
			((t = e.alternate),
			t !== null &&
				((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
		)
			try {
				Ru(t);
			} catch (l) {
				xt(e, e.return, l);
			}
	}
	function hm(t) {
		switch (t.tag) {
			case 13:
			case 19:
				var e = t.stateNode;
				return (e === null && (e = t.stateNode = new Ns()), e);
			case 22:
				return (
					(t = t.stateNode),
					(e = t._retryCache),
					e === null && (e = t._retryCache = new Ns()),
					e
				);
			default:
				throw Error(f(435, t.tag));
		}
	}
	function Gc(t, e) {
		var l = hm(t);
		e.forEach(function (a) {
			var u = Em.bind(null, t, a);
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
				(js(n, c, u),
					(Mt = null),
					(ee = !1),
					(n = u.alternate),
					n !== null && (n.return = null),
					(u.return = null));
			}
		if (e.subtreeFlags & 13878)
			for (e = e.child; e !== null; ) (ws(e, t), (e = e.sibling));
	}
	var Te = null;
	function ws(t, e) {
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
											var c = Dd("link", "href", u).get(a + (l.href || ""));
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
												(c = Dd("meta", "content", u).get(
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
							} else Nd(u, t.type, t.stateNode);
						else t.stateNode = zd(u, a, t.memoizedProps);
					else
						n !== a
							? (n === null
									? l.stateNode !== null &&
										((l = l.stateNode), l.parentNode.removeChild(l))
									: n.count--,
								a === null
									? Nd(u, t.type, t.stateNode)
									: zd(u, a, t.memoizedProps))
							: a === null &&
								t.stateNode !== null &&
								qc(t, t.memoizedProps, l.memoizedProps);
				}
				break;
			case 27:
				(fe(e, t),
					re(t),
					a & 512 && (jt || l === null || ze(l, l.return)),
					l !== null && a & 4 && qc(t, t.memoizedProps, l.memoizedProps));
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
						xt(t, t.return, _);
					}
				}
				(a & 4 &&
					t.stateNode != null &&
					((u = t.memoizedProps), qc(t, u, l !== null ? l.memoizedProps : u)),
					a & 1024 && (Lc = !0));
				break;
			case 6:
				if ((fe(e, t), re(t), a & 4)) {
					if (t.stateNode === null) throw Error(f(162));
					((a = t.memoizedProps), (l = t.stateNode));
					try {
						l.nodeValue = a;
					} catch (_) {
						xt(t, t.return, _);
					}
				}
				break;
			case 3:
				if (
					((Yn = null),
					(u = Te),
					(Te = qn(e.containerInfo)),
					fe(e, t),
					(Te = u),
					re(t),
					a & 4 && l !== null && l.memoizedState.isDehydrated)
				)
					try {
						Ru(e.containerInfo);
					} catch (_) {
						xt(t, t.return, _);
					}
				Lc && ((Lc = !1), qs(t));
				break;
			case 4:
				((a = Te),
					(Te = qn(t.stateNode.containerInfo)),
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
						(Jc = Oe()),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), Gc(t, a))));
				break;
			case 22:
				u = t.memoizedState !== null;
				var v = l !== null && l.memoizedState !== null,
					O = Ve,
					U = jt;
				if (
					((Ve = O || u),
					(jt = U || v),
					fe(e, t),
					(jt = U),
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
										var H = v.memoizedProps.style,
											M =
												H != null && H.hasOwnProperty("display")
													? H.display
													: null;
										r.style.display =
											M == null || typeof M == "boolean" ? "" : ("" + M).trim();
									}
								} catch (_) {
									xt(v, v.return, _);
								}
							}
						} else if (e.tag === 6) {
							if (l === null) {
								v = e;
								try {
									v.stateNode.nodeValue = u ? "" : v.memoizedProps;
								} catch (_) {
									xt(v, v.return, _);
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
						l !== null && ((a.retryQueue = null), Gc(t, l))));
				break;
			case 19:
				(fe(e, t),
					re(t),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), Gc(t, a))));
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
					if (zs(a)) {
						l = a;
						break;
					}
					a = a.return;
				}
				if (l == null) throw Error(f(160));
				switch (l.tag) {
					case 27:
						var u = l.stateNode,
							n = Bc(t);
						An(t, n, u);
						break;
					case 5:
						var c = l.stateNode;
						l.flags & 32 && (kl(c, ""), (l.flags &= -33));
						var r = Bc(t);
						An(t, r, c);
						break;
					case 3:
					case 4:
						var v = l.stateNode.containerInfo,
							O = Bc(t);
						Yc(t, O, v);
						break;
					default:
						throw Error(f(161));
				}
			} catch (U) {
				xt(t, t.return, U);
			}
			t.flags &= -3;
		}
		e & 4096 && (t.flags &= -4097);
	}
	function qs(t) {
		if (t.subtreeFlags & 1024)
			for (t = t.child; t !== null; ) {
				var e = t;
				(qs(e),
					e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
					(t = t.sibling));
			}
	}
	function rl(t, e) {
		if (e.subtreeFlags & 8772)
			for (e = e.child; e !== null; ) (Us(t, e.alternate, e), (e = e.sibling));
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
					(typeof l.componentWillUnmount == "function" && Ms(e, e.return, l),
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
							xt(a, a.return, O);
						}
					if (((a = n), (u = a.updateQueue), u !== null)) {
						var r = a.stateNode;
						try {
							var v = u.shared.hiddenCallbacks;
							if (v !== null)
								for (u.shared.hiddenCallbacks = null, u = 0; u < v.length; u++)
									so(v[u], r);
						} catch (O) {
							xt(a, a.return, O);
						}
					}
					(l && c & 64 && Os(n), fu(n, n.return));
					break;
				case 27:
					Ds(n);
				case 26:
				case 5:
					(ol(u, n, l), l && a === null && c & 4 && _s(n), fu(n, n.return));
					break;
				case 12:
					ol(u, n, l);
					break;
				case 13:
					(ol(u, n, l), l && c & 4 && Hs(u, n));
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
	function Xc(t, e) {
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
	function Qc(t, e) {
		((t = null),
			e.alternate !== null && (t = e.alternate.memoizedState.cache),
			(e = e.memoizedState.cache),
			e !== t && (e.refCount++, t != null && Ja(t)));
	}
	function De(t, e, l, a) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) (Bs(t, e, l, a), (e = e.sibling));
	}
	function Bs(t, e, l, a) {
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
						xt(e, e.return, v);
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
					u & 2048 && Xc(c, e));
				break;
			case 24:
				(De(t, e, l, a), u & 2048 && Qc(e.alternate, e));
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
					var U = c.stateNode;
					(c.memoizedState !== null
						? U._visibility & 2
							? ha(n, c, r, v, u)
							: ru(n, c)
						: ((U._visibility |= 2), ha(n, c, r, v, u)),
						u && O & 2048 && Xc(c.alternate, c));
					break;
				case 24:
					(ha(n, c, r, v, u), u && O & 2048 && Qc(c.alternate, c));
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
						(ru(l, a), u & 2048 && Xc(a.alternate, a));
						break;
					case 24:
						(ru(l, a), u & 2048 && Qc(a.alternate, a));
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
			for (t = t.child; t !== null; ) (Ys(t), (t = t.sibling));
	}
	function Ys(t) {
		switch (t.tag) {
			case 26:
				(ma(t),
					t.flags & ou &&
						t.memoizedState !== null &&
						Pm(Te, t.memoizedState, t.memoizedProps));
				break;
			case 5:
				ma(t);
				break;
			case 3:
			case 4:
				var e = Te;
				((Te = qn(t.stateNode.containerInfo)), ma(t), (Te = e));
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
	function Ls(t) {
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
					((Xt = a), Xs(a, t));
				}
			Ls(t);
		}
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) (Gs(t), (t = t.sibling));
	}
	function Gs(t) {
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
					? ((e._visibility &= -3), Rn(t))
					: su(t);
				break;
			default:
				su(t);
		}
	}
	function Rn(t) {
		var e = t.deletions;
		if (t.flags & 16) {
			if (e !== null)
				for (var l = 0; l < e.length; l++) {
					var a = e[l];
					((Xt = a), Xs(a, t));
				}
			Ls(t);
		}
		for (t = t.child; t !== null; ) {
			switch (((e = t), e.tag)) {
				case 0:
				case 11:
				case 15:
					(fl(8, e, e.return), Rn(e));
					break;
				case 22:
					((l = e.stateNode),
						l._visibility & 2 && ((l._visibility &= -3), Rn(e)));
					break;
				default:
					Rn(e);
			}
			t = t.sibling;
		}
	}
	function Xs(t, e) {
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
					if ((Cs(a), a === l)) {
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
	var mm = {
			getCacheForType: function (t) {
				var e = $t(qt),
					l = e.data.get(t);
				return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
			},
		},
		ym = typeof WeakMap == "function" ? WeakMap : Map,
		yt = 0,
		Tt = null,
		ct = null,
		ot = 0,
		vt = 0,
		oe = null,
		sl = !1,
		ya = !1,
		Zc = !1,
		Je = 0,
		Nt = 0,
		dl = 0,
		Yl = 0,
		Vc = 0,
		be = 0,
		va = 0,
		du = null,
		le = null,
		Kc = !1,
		Jc = 0,
		On = 1 / 0,
		Mn = null,
		hl = null,
		Vt = 0,
		ml = null,
		ga = null,
		pa = 0,
		kc = 0,
		$c = null,
		Qs = null,
		hu = 0,
		Wc = null;
	function se() {
		if (yt & 2 && ot !== 0) return ot & -ot;
		if (D.T !== null) {
			var t = na;
			return t !== 0 ? t : af();
		}
		return ur();
	}
	function Zs() {
		be === 0 && (be = !(ot & 536870912) || mt ? tr() : 536870912);
		var t = Se.current;
		return (t !== null && (t.flags |= 32), be);
	}
	function de(t, e, l) {
		(((t === Tt && (vt === 2 || vt === 9)) || t.cancelPendingCommit !== null) &&
			(Sa(t, 0), yl(t, ot, be, !1)),
			Na(t, l),
			(!(yt & 2) || t !== Tt) &&
				(t === Tt && (!(yt & 2) && (Yl |= l), Nt === 4 && yl(t, ot, be, !1)),
				Ne(t)));
	}
	function Vs(t, e, l) {
		if (yt & 6) throw Error(f(327));
		var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Da(t, e),
			u = a ? pm(t, e) : Ic(t, e, !0),
			n = a;
		do {
			if (u === 0) {
				ya && !a && yl(t, e, 0, !1);
				break;
			} else {
				if (((l = t.current.alternate), n && !vm(l))) {
					((u = Ic(t, e, !1)), (n = !1));
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
							if ((v && (Sa(r, c).flags |= 256), (c = Ic(r, c, !1)), c !== 2)) {
								if (Zc && !v) {
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
					if ((e & 62914560) === e && ((u = Jc + 300 - Oe()), 10 < u)) {
						if ((yl(a, e, be, !sl), qu(a, 0, !0) !== 0)) break t;
						a.timeoutHandle = bd(
							Ks.bind(null, a, l, le, Mn, Kc, e, be, Yl, va, sl, n, 2, -0, 0),
							u,
						);
						break t;
					}
					Ks(a, l, le, Mn, Kc, e, be, Yl, va, sl, n, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		Ne(t);
	}
	function Ks(t, e, l, a, u, n, c, r, v, O, U, H, M, _) {
		if (
			((t.timeoutHandle = -1),
			(H = e.subtreeFlags),
			(H & 8192 || (H & 16785408) === 16785408) &&
				((bu = { stylesheets: null, count: 0, unsuspend: Fm }),
				Ys(e),
				(H = Im()),
				H !== null))
		) {
			((t.cancelPendingCommit = H(
				Is.bind(null, t, e, n, l, a, u, c, r, v, U, 1, M, _),
			)),
				yl(t, n, c, !O));
			return;
		}
		Is(t, e, n, l, a, u, c, r, v);
	}
	function vm(t) {
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
		((e &= ~Vc),
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
		l !== 0 && lr(t, l, e);
	}
	function _n() {
		return yt & 6 ? !0 : (mu(0), !1);
	}
	function Fc() {
		if (ct !== null) {
			if (vt === 0) var t = ct.return;
			else ((t = ct), (Ye = Cl = null), mc(t), (sa = null), (uu = 0), (t = ct));
			for (; t !== null; ) (Rs(t.alternate, t), (t = t.return));
			ct = null;
		}
	}
	function Sa(t, e) {
		var l = t.timeoutHandle;
		(l !== -1 && ((t.timeoutHandle = -1), jm(l)),
			(l = t.cancelPendingCommit),
			l !== null && ((t.cancelPendingCommit = null), l()),
			Fc(),
			(Tt = t),
			(ct = l = we(t.current, null)),
			(ot = e),
			(vt = 0),
			(oe = null),
			(sl = !1),
			(ya = Da(t, e)),
			(Zc = !1),
			(va = be = Vc = Yl = dl = Nt = 0),
			(le = du = null),
			(Kc = !1),
			e & 8 && (e |= e & 32));
		var a = t.entangledLanes;
		if (a !== 0)
			for (t = t.entanglements, a &= e; 0 < a; ) {
				var u = 31 - ne(a),
					n = 1 << u;
				((e |= t[u]), (a &= ~n));
			}
		return ((Je = e), $u(), l);
	}
	function Js(t, e) {
		((at = null),
			(D.H = yn),
			e === $a || e === un
				? ((e = ro()), (vt = 3))
				: e === io
					? ((e = ro()), (vt = 4))
					: (vt =
							e === ss
								? 8
								: e !== null &&
									  typeof e == "object" &&
									  typeof e.then == "function"
									? 6
									: 1),
			(oe = e),
			ct === null && ((Nt = 1), bn(t, ye(e, t.current))));
	}
	function ks() {
		var t = D.H;
		return ((D.H = yn), t === null ? yn : t);
	}
	function $s() {
		var t = D.A;
		return ((D.A = mm), t);
	}
	function Pc() {
		((Nt = 4),
			sl || ((ot & 4194048) !== ot && Se.current !== null) || (ya = !0),
			(!(dl & 134217727) && !(Yl & 134217727)) ||
				Tt === null ||
				yl(Tt, ot, be, !1));
	}
	function Ic(t, e, l) {
		var a = yt;
		yt |= 2;
		var u = ks(),
			n = $s();
		((Tt !== t || ot !== e) && ((Mn = null), Sa(t, e)), (e = !1));
		var c = Nt;
		t: do
			try {
				if (vt !== 0 && ct !== null) {
					var r = ct,
						v = oe;
					switch (vt) {
						case 8:
							(Fc(), (c = 6));
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
				(gm(), (c = Nt));
				break;
			} catch (U) {
				Js(t, U);
			}
		while (!0);
		return (
			e && t.shellSuspendCounter++,
			(Ye = Cl = null),
			(yt = a),
			(D.H = u),
			(D.A = n),
			ct === null && ((Tt = null), (ot = 0), $u()),
			c
		);
	}
	function gm() {
		for (; ct !== null; ) Ws(ct);
	}
	function pm(t, e) {
		var l = yt;
		yt |= 2;
		var a = ks(),
			u = $s();
		Tt !== t || ot !== e
			? ((Mn = null), (On = Oe() + 500), Sa(t, e))
			: (ya = Da(t, e));
		t: do
			try {
				if (vt !== 0 && ct !== null) {
					e = ct;
					var n = oe;
					e: switch (vt) {
						case 1:
							((vt = 0), (oe = null), ba(t, e, n, 1));
							break;
						case 2:
						case 9:
							if (co(n)) {
								((vt = 0), (oe = null), Fs(e));
								break;
							}
							((e = function () {
								((vt !== 2 && vt !== 9) || Tt !== t || (vt = 7), Ne(t));
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
							co(n)
								? ((vt = 0), (oe = null), Fs(e))
								: ((vt = 0), (oe = null), ba(t, e, n, 7));
							break;
						case 5:
							var c = null;
							switch (ct.tag) {
								case 26:
									c = ct.memoizedState;
								case 5:
								case 27:
									var r = ct;
									if (!c || Ud(c)) {
										((vt = 0), (oe = null));
										var v = r.sibling;
										if (v !== null) ct = v;
										else {
											var O = r.return;
											O !== null ? ((ct = O), zn(O)) : (ct = null);
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
							(Fc(), (Nt = 6));
							break t;
						default:
							throw Error(f(462));
					}
				}
				Sm();
				break;
			} catch (U) {
				Js(t, U);
			}
		while (!0);
		return (
			(Ye = Cl = null),
			(D.H = a),
			(D.A = u),
			(yt = l),
			ct !== null ? 0 : ((Tt = null), (ot = 0), $u(), Nt)
		);
	}
	function Sm() {
		for (; ct !== null && !Gh(); ) Ws(ct);
	}
	function Ws(t) {
		var e = Ts(t.alternate, t, Je);
		((t.memoizedProps = t.pendingProps), e === null ? zn(t) : (ct = e));
	}
	function Fs(t) {
		var e = t,
			l = e.alternate;
		switch (e.tag) {
			case 15:
			case 0:
				e = gs(l, e, e.pendingProps, e.type, void 0, ot);
				break;
			case 11:
				e = gs(l, e, e.pendingProps, e.type.render, e.ref, ot);
				break;
			case 5:
				mc(e);
			default:
				(Rs(l, e), (e = ct = Fr(e, Je)), (e = Ts(l, e, Je)));
		}
		((t.memoizedProps = t.pendingProps), e === null ? zn(t) : (ct = e));
	}
	function ba(t, e, l, a) {
		((Ye = Cl = null), mc(e), (sa = null), (uu = 0));
		var u = e.return;
		try {
			if (fm(t, u, e, l, ot)) {
				((Nt = 1), bn(t, ye(l, t.current)), (ct = null));
				return;
			}
		} catch (n) {
			if (u !== null) throw ((ct = u), n);
			((Nt = 1), bn(t, ye(l, t.current)), (ct = null));
			return;
		}
		e.flags & 32768
			? (mt || a === 1
					? (t = !0)
					: ya || ot & 536870912
						? (t = !1)
						: ((sl = t = !0),
							(a === 2 || a === 9 || a === 3 || a === 6) &&
								((a = Se.current),
								a !== null && a.tag === 13 && (a.flags |= 16384))),
				Ps(e, t))
			: zn(e);
	}
	function zn(t) {
		var e = t;
		do {
			if (e.flags & 32768) {
				Ps(e, sl);
				return;
			}
			t = e.return;
			var l = om(e.alternate, e, Je);
			if (l !== null) {
				ct = l;
				return;
			}
			if (((e = e.sibling), e !== null)) {
				ct = e;
				return;
			}
			ct = e = t;
		} while (e !== null);
		Nt === 0 && (Nt = 5);
	}
	function Ps(t, e) {
		do {
			var l = sm(t.alternate, t);
			if (l !== null) {
				((l.flags &= 32767), (ct = l));
				return;
			}
			if (
				((l = t.return),
				l !== null &&
					((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
				!e && ((t = t.sibling), t !== null))
			) {
				ct = t;
				return;
			}
			ct = t = l;
		} while (t !== null);
		((Nt = 6), (ct = null));
	}
	function Is(t, e, l, a, u, n, c, r, v) {
		t.cancelPendingCommit = null;
		do Dn();
		while (Vt !== 0);
		if (yt & 6) throw Error(f(327));
		if (e !== null) {
			if (e === t.current) throw Error(f(177));
			if (
				((n = e.lanes | e.childLanes),
				(n |= Qi),
				Fh(t, l, n, c, r, v),
				t === Tt && ((ct = Tt = null), (ot = 0)),
				(ga = e),
				(ml = t),
				(pa = l),
				(kc = n),
				($c = u),
				(Qs = a),
				e.subtreeFlags & 10256 || e.flags & 10256
					? ((t.callbackNode = null),
						(t.callbackPriority = 0),
						Tm(ju, function () {
							return (ud(), null);
						}))
					: ((t.callbackNode = null), (t.callbackPriority = 0)),
				(a = (e.flags & 13878) !== 0),
				e.subtreeFlags & 13878 || a)
			) {
				((a = D.T), (D.T = null), (u = L.p), (L.p = 2), (c = yt), (yt |= 4));
				try {
					dm(t, e, l);
				} finally {
					((yt = c), (L.p = u), (D.T = a));
				}
			}
			((Vt = 1), td(), ed(), ld());
		}
	}
	function td() {
		if (Vt === 1) {
			Vt = 0;
			var t = ml,
				e = ga,
				l = (e.flags & 13878) !== 0;
			if (e.subtreeFlags & 13878 || l) {
				((l = D.T), (D.T = null));
				var a = L.p;
				L.p = 2;
				var u = yt;
				yt |= 4;
				try {
					ws(e, t);
					var n = df,
						c = Gr(t.containerInfo),
						r = n.focusedElem,
						v = n.selectionRange;
					if (
						c !== r &&
						r &&
						r.ownerDocument &&
						Lr(r.ownerDocument.documentElement, r)
					) {
						if (v !== null && Bi(r)) {
							var O = v.start,
								U = v.end;
							if ((U === void 0 && (U = O), "selectionStart" in r))
								((r.selectionStart = O),
									(r.selectionEnd = Math.min(U, r.value.length)));
							else {
								var H = r.ownerDocument || document,
									M = (H && H.defaultView) || window;
								if (M.getSelection) {
									var _ = M.getSelection(),
										tt = r.textContent.length,
										W = Math.min(v.start, tt),
										St = v.end === void 0 ? W : Math.min(v.end, tt);
									!_.extend && W > St && ((c = St), (St = W), (W = c));
									var A = Yr(r, W),
										x = Yr(r, St);
									if (
										A &&
										x &&
										(_.rangeCount !== 1 ||
											_.anchorNode !== A.node ||
											_.anchorOffset !== A.offset ||
											_.focusNode !== x.node ||
											_.focusOffset !== x.offset)
									) {
										var R = H.createRange();
										(R.setStart(A.node, A.offset),
											_.removeAllRanges(),
											W > St
												? (_.addRange(R), _.extend(x.node, x.offset))
												: (R.setEnd(x.node, x.offset), _.addRange(R)));
									}
								}
							}
						}
						for (H = [], _ = r; (_ = _.parentNode); )
							_.nodeType === 1 &&
								H.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
						for (
							typeof r.focus == "function" && r.focus(), r = 0;
							r < H.length;
							r++
						) {
							var j = H[r];
							((j.element.scrollLeft = j.left), (j.element.scrollTop = j.top));
						}
					}
					((Xn = !!sf), (df = sf = null));
				} finally {
					((yt = u), (L.p = a), (D.T = l));
				}
			}
			((t.current = e), (Vt = 2));
		}
	}
	function ed() {
		if (Vt === 2) {
			Vt = 0;
			var t = ml,
				e = ga,
				l = (e.flags & 8772) !== 0;
			if (e.subtreeFlags & 8772 || l) {
				((l = D.T), (D.T = null));
				var a = L.p;
				L.p = 2;
				var u = yt;
				yt |= 4;
				try {
					Us(t, e.alternate, e);
				} finally {
					((yt = u), (L.p = a), (D.T = l));
				}
			}
			Vt = 3;
		}
	}
	function ld() {
		if (Vt === 4 || Vt === 3) {
			((Vt = 0), Xh());
			var t = ml,
				e = ga,
				l = pa,
				a = Qs;
			e.subtreeFlags & 10256 || e.flags & 10256
				? (Vt = 5)
				: ((Vt = 0), (ga = ml = null), ad(t, t.pendingLanes));
			var u = t.pendingLanes;
			if (
				(u === 0 && (hl = null),
				gi(l),
				(e = e.stateNode),
				ue && typeof ue.onCommitFiberRoot == "function")
			)
				try {
					ue.onCommitFiberRoot(za, e, void 0, (e.current.flags & 128) === 128);
				} catch {}
			if (a !== null) {
				((e = D.T), (u = L.p), (L.p = 2), (D.T = null));
				try {
					for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
						var r = a[c];
						n(r.value, { componentStack: r.stack });
					}
				} finally {
					((D.T = e), (L.p = u));
				}
			}
			(pa & 3 && Dn(),
				Ne(t),
				(u = t.pendingLanes),
				l & 4194090 && u & 42
					? t === Wc
						? hu++
						: ((hu = 0), (Wc = t))
					: (hu = 0),
				mu(0));
		}
	}
	function ad(t, e) {
		(t.pooledCacheLanes &= e) === 0 &&
			((e = t.pooledCache), e != null && ((t.pooledCache = null), Ja(e)));
	}
	function Dn(t) {
		return (td(), ed(), ld(), ud());
	}
	function ud() {
		if (Vt !== 5) return !1;
		var t = ml,
			e = kc;
		kc = 0;
		var l = gi(pa),
			a = D.T,
			u = L.p;
		try {
			((L.p = 32 > l ? 32 : l), (D.T = null), (l = $c), ($c = null));
			var n = ml,
				c = pa;
			if (((Vt = 0), (ga = ml = null), (pa = 0), yt & 6)) throw Error(f(331));
			var r = yt;
			if (
				((yt |= 4),
				Gs(n.current),
				Bs(n, n.current, c, l),
				(yt = r),
				mu(0, !1),
				ue && typeof ue.onPostCommitFiberRoot == "function")
			)
				try {
					ue.onPostCommitFiberRoot(za, n);
				} catch {}
			return !0;
		} finally {
			((L.p = u), (D.T = a), ad(t, e));
		}
	}
	function nd(t, e, l) {
		((e = ye(l, e)),
			(e = _c(t.stateNode, e, 2)),
			(t = ul(t, e, 2)),
			t !== null && (Na(t, 2), Ne(t)));
	}
	function xt(t, e, l) {
		if (t.tag === 3) nd(t, t, l);
		else
			for (; e !== null; ) {
				if (e.tag === 3) {
					nd(e, t, l);
					break;
				} else if (e.tag === 1) {
					var a = e.stateNode;
					if (
						typeof e.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(hl === null || !hl.has(a)))
					) {
						((t = ye(l, t)),
							(l = rs(2)),
							(a = ul(e, l, 2)),
							a !== null && (os(l, a, e, t), Na(a, 2), Ne(a)));
						break;
					}
				}
				e = e.return;
			}
	}
	function tf(t, e, l) {
		var a = t.pingCache;
		if (a === null) {
			a = t.pingCache = new ym();
			var u = new Set();
			a.set(e, u);
		} else ((u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u)));
		u.has(l) ||
			((Zc = !0), u.add(l), (t = bm.bind(null, t, e, l)), e.then(t, t));
	}
	function bm(t, e, l) {
		var a = t.pingCache;
		(a !== null && a.delete(e),
			(t.pingedLanes |= t.suspendedLanes & l),
			(t.warmLanes &= ~l),
			Tt === t &&
				(ot & l) === l &&
				(Nt === 4 || (Nt === 3 && (ot & 62914560) === ot && 300 > Oe() - Jc)
					? !(yt & 2) && Sa(t, 0)
					: (Vc |= l),
				va === ot && (va = 0)),
			Ne(t));
	}
	function id(t, e) {
		(e === 0 && (e = er()), (t = ea(t, e)), t !== null && (Na(t, e), Ne(t)));
	}
	function xm(t) {
		var e = t.memoizedState,
			l = 0;
		(e !== null && (l = e.retryLane), id(t, l));
	}
	function Em(t, e) {
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
		(a !== null && a.delete(e), id(t, l));
	}
	function Tm(t, e) {
		return hi(t, e);
	}
	var Nn = null,
		xa = null,
		ef = !1,
		Un = !1,
		lf = !1,
		Ll = 0;
	function Ne(t) {
		(t !== xa &&
			t.next === null &&
			(xa === null ? (Nn = xa = t) : (xa = xa.next = t)),
			(Un = !0),
			ef || ((ef = !0), Rm()));
	}
	function mu(t, e) {
		if (!lf && Un) {
			lf = !0;
			do
				for (var l = !1, a = Nn; a !== null; ) {
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
						n !== 0 && ((l = !0), od(a, n));
					} else
						((n = ot),
							(n = qu(
								a,
								a === Tt ? n : 0,
								a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
							)),
							!(n & 3) || Da(a, n) || ((l = !0), od(a, n)));
					a = a.next;
				}
			while (l);
			lf = !1;
		}
	}
	function Am() {
		cd();
	}
	function cd() {
		Un = ef = !1;
		var t = 0;
		Ll !== 0 && (Cm() && (t = Ll), (Ll = 0));
		for (var e = Oe(), l = null, a = Nn; a !== null; ) {
			var u = a.next,
				n = fd(a, e);
			(n === 0
				? ((a.next = null),
					l === null ? (Nn = u) : (l.next = u),
					u === null && (xa = l))
				: ((l = a), (t !== 0 || n & 3) && (Un = !0)),
				(a = u));
		}
		mu(t);
	}
	function fd(t, e) {
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
				? (!(r & l) || r & a) && (u[c] = Wh(r, e))
				: v <= e && (t.expiredLanes |= r),
				(n &= ~r));
		}
		if (
			((e = Tt),
			(l = ot),
			(l = qu(
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
				a !== null && a !== null && mi(a),
				(t.callbackNode = null),
				(t.callbackPriority = 0)
			);
		if (!(l & 3) || Da(t, l)) {
			if (((e = l & -l), e === t.callbackPriority)) return e;
			switch ((a !== null && mi(a), gi(l))) {
				case 2:
				case 8:
					l = Pf;
					break;
				case 32:
					l = ju;
					break;
				case 268435456:
					l = If;
					break;
				default:
					l = ju;
			}
			return (
				(a = rd.bind(null, t)),
				(l = hi(l, a)),
				(t.callbackPriority = e),
				(t.callbackNode = l),
				e
			);
		}
		return (
			a !== null && a !== null && mi(a),
			(t.callbackPriority = 2),
			(t.callbackNode = null),
			2
		);
	}
	function rd(t, e) {
		if (Vt !== 0 && Vt !== 5)
			return ((t.callbackNode = null), (t.callbackPriority = 0), null);
		var l = t.callbackNode;
		if (Dn() && t.callbackNode !== l) return null;
		var a = ot;
		return (
			(a = qu(
				t,
				t === Tt ? a : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			a === 0
				? null
				: (Vs(t, a, e),
					fd(t, Oe()),
					t.callbackNode != null && t.callbackNode === l
						? rd.bind(null, t)
						: null)
		);
	}
	function od(t, e) {
		if (Dn()) return null;
		Vs(t, e, !0);
	}
	function Rm() {
		Hm(function () {
			yt & 6 ? hi(Ff, Am) : cd();
		});
	}
	function af() {
		return (Ll === 0 && (Ll = tr()), Ll);
	}
	function sd(t) {
		return t == null || typeof t == "symbol" || typeof t == "boolean"
			? null
			: typeof t == "function"
				? t
				: Xu("" + t);
	}
	function dd(t, e) {
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
	function Om(t, e, l, a, u) {
		if (e === "submit" && l && l.stateNode === u) {
			var n = sd((u[Pt] || null).action),
				c = a.submitter;
			c &&
				((e = (e = c[Pt] || null)
					? sd(e.formAction)
					: c.getAttribute("formAction")),
				e !== null && ((n = e), (c = null)));
			var r = new Ku("action", "action", null, a, u);
			t.push({
				event: r,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (Ll !== 0) {
									var v = c ? dd(u, c) : new FormData(u);
									Tc(
										l,
										{ pending: !0, data: v, method: u.method, action: n },
										null,
										v,
									);
								}
							} else
								typeof n == "function" &&
									(r.preventDefault(),
									(v = c ? dd(u, c) : new FormData(u)),
									Tc(
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
	for (var uf = 0; uf < Xi.length; uf++) {
		var nf = Xi[uf],
			Mm = nf.toLowerCase(),
			_m = nf[0].toUpperCase() + nf.slice(1);
		Ee(Mm, "on" + _m);
	}
	(Ee(Zr, "onAnimationEnd"),
		Ee(Vr, "onAnimationIteration"),
		Ee(Kr, "onAnimationStart"),
		Ee("dblclick", "onDoubleClick"),
		Ee("focusin", "onFocus"),
		Ee("focusout", "onBlur"),
		Ee(V0, "onTransitionRun"),
		Ee(K0, "onTransitionStart"),
		Ee(J0, "onTransitionCancel"),
		Ee(Jr, "onTransitionEnd"),
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
		zm = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(yu),
		);
	function hd(t, e) {
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
						} catch (U) {
							Sn(U);
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
						} catch (U) {
							Sn(U);
						}
						((u.currentTarget = null), (n = v));
					}
			}
		}
	}
	function ft(t, e) {
		var l = e[pi];
		l === void 0 && (l = e[pi] = new Set());
		var a = t + "__bubble";
		l.has(a) || (md(e, t, 2, !1), l.add(a));
	}
	function cf(t, e, l) {
		var a = 0;
		(e && (a |= 4), md(l, t, a, e));
	}
	var Cn = "_reactListening" + Math.random().toString(36).slice(2);
	function ff(t) {
		if (!t[Cn]) {
			((t[Cn] = !0),
				ir.forEach(function (l) {
					l !== "selectionchange" && (zm.has(l) || cf(l, !1, t), cf(l, !0, t));
				}));
			var e = t.nodeType === 9 ? t : t.ownerDocument;
			e === null || e[Cn] || ((e[Cn] = !0), cf("selectionchange", !1, e));
		}
	}
	function md(t, e, l, a) {
		switch (Bd(e)) {
			case 2:
				var u = ly;
				break;
			case 8:
				u = ay;
				break;
			default:
				u = Ef;
		}
		((l = u.bind(null, e, l, t)),
			(u = void 0),
			!zi ||
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
	function rf(t, e, l, a, u) {
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
		br(function () {
			var O = n,
				U = Mi(l),
				H = [];
			t: {
				var M = kr.get(t);
				if (M !== void 0) {
					var _ = Ku,
						tt = t;
					switch (t) {
						case "keypress":
							if (Zu(l) === 0) break t;
						case "keydown":
						case "keyup":
							_ = T0;
							break;
						case "focusin":
							((tt = "focus"), (_ = Ci));
							break;
						case "focusout":
							((tt = "blur"), (_ = Ci));
							break;
						case "beforeblur":
						case "afterblur":
							_ = Ci;
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
							_ = Tr;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							_ = s0;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							_ = O0;
							break;
						case Zr:
						case Vr:
						case Kr:
							_ = m0;
							break;
						case Jr:
							_ = _0;
							break;
						case "scroll":
						case "scrollend":
							_ = r0;
							break;
						case "wheel":
							_ = D0;
							break;
						case "copy":
						case "cut":
						case "paste":
							_ = v0;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							_ = Rr;
							break;
						case "toggle":
						case "beforetoggle":
							_ = U0;
					}
					var W = (e & 4) !== 0,
						St = !W && (t === "scroll" || t === "scrollend"),
						A = W ? (M !== null ? M + "Capture" : null) : M;
					W = [];
					for (var x = O, R; x !== null; ) {
						var j = x;
						if (
							((R = j.stateNode),
							(j = j.tag),
							(j !== 5 && j !== 26 && j !== 27) ||
								R === null ||
								A === null ||
								((j = ja(x, A)), j != null && W.push(vu(x, j, R))),
							St)
						)
							break;
						x = x.return;
					}
					0 < W.length &&
						((M = new _(M, tt, null, l, U)),
						H.push({ event: M, listeners: W }));
				}
			}
			if (!(e & 7)) {
				t: {
					if (
						((M = t === "mouseover" || t === "pointerover"),
						(_ = t === "mouseout" || t === "pointerout"),
						M &&
							l !== Oi &&
							(tt = l.relatedTarget || l.fromElement) &&
							(Xl(tt) || tt[Gl]))
					)
						break t;
					if (
						(_ || M) &&
						((M =
							U.window === U
								? U
								: (M = U.ownerDocument)
									? M.defaultView || M.parentWindow
									: window),
						_
							? ((tt = l.relatedTarget || l.toElement),
								(_ = O),
								(tt = tt ? Xl(tt) : null),
								tt !== null &&
									((St = y(tt)),
									(W = tt.tag),
									tt !== St || (W !== 5 && W !== 27 && W !== 6)) &&
									(tt = null))
							: ((_ = null), (tt = O)),
						_ !== tt)
					) {
						if (
							((W = Tr),
							(j = "onMouseLeave"),
							(A = "onMouseEnter"),
							(x = "mouse"),
							(t === "pointerout" || t === "pointerover") &&
								((W = Rr),
								(j = "onPointerLeave"),
								(A = "onPointerEnter"),
								(x = "pointer")),
							(St = _ == null ? M : Ca(_)),
							(R = tt == null ? M : Ca(tt)),
							(M = new W(j, x + "leave", _, l, U)),
							(M.target = St),
							(M.relatedTarget = R),
							(j = null),
							Xl(U) === O &&
								((W = new W(A, x + "enter", tt, l, U)),
								(W.target = R),
								(W.relatedTarget = St),
								(j = W)),
							(St = j),
							_ && tt)
						)
							e: {
								for (W = _, A = tt, x = 0, R = W; R; R = Ea(R)) x++;
								for (R = 0, j = A; j; j = Ea(j)) R++;
								for (; 0 < x - R; ) ((W = Ea(W)), x--);
								for (; 0 < R - x; ) ((A = Ea(A)), R--);
								for (; x--; ) {
									if (W === A || (A !== null && W === A.alternate)) break e;
									((W = Ea(W)), (A = Ea(A)));
								}
								W = null;
							}
						else W = null;
						(_ !== null && yd(H, M, _, W, !1),
							tt !== null && St !== null && yd(H, St, tt, W, !0));
					}
				}
				t: {
					if (
						((M = O ? Ca(O) : window),
						(_ = M.nodeName && M.nodeName.toLowerCase()),
						_ === "select" || (_ === "input" && M.type === "file"))
					)
						var V = Cr;
					else if (Nr(M))
						if (jr) V = X0;
						else {
							V = L0;
							var it = Y0;
						}
					else
						((_ = M.nodeName),
							!_ ||
							_.toLowerCase() !== "input" ||
							(M.type !== "checkbox" && M.type !== "radio")
								? O && Ri(O.elementType) && (V = Cr)
								: (V = G0));
					if (V && (V = V(t, O))) {
						Ur(H, V, l, U);
						break t;
					}
					(it && it(t, M, O),
						t === "focusout" &&
							O &&
							M.type === "number" &&
							O.memoizedProps.value != null &&
							Ai(M, "number", M.value));
				}
				switch (((it = O ? Ca(O) : window), t)) {
					case "focusin":
						(Nr(it) || it.contentEditable === "true") &&
							((Pl = it), (Yi = O), (Xa = null));
						break;
					case "focusout":
						Xa = Yi = Pl = null;
						break;
					case "mousedown":
						Li = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						((Li = !1), Xr(H, l, U));
						break;
					case "selectionchange":
						if (Z0) break;
					case "keydown":
					case "keyup":
						Xr(H, l, U);
				}
				var k;
				if (Hi)
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
						? zr(t, l) && (P = "onCompositionEnd")
						: t === "keydown" &&
							l.keyCode === 229 &&
							(P = "onCompositionStart");
				(P &&
					(Or &&
						l.locale !== "ko" &&
						(Fl || P !== "onCompositionStart"
							? P === "onCompositionEnd" && Fl && (k = xr())
							: ((tl = U),
								(Di = "value" in tl ? tl.value : tl.textContent),
								(Fl = !0))),
					(it = jn(O, P)),
					0 < it.length &&
						((P = new Ar(P, t, null, l, U)),
						H.push({ event: P, listeners: it }),
						k ? (P.data = k) : ((k = Dr(l)), k !== null && (P.data = k)))),
					(k = j0 ? H0(t, l) : w0(t, l)) &&
						((P = jn(O, "onBeforeInput")),
						0 < P.length &&
							((it = new Ar("onBeforeInput", "beforeinput", null, l, U)),
							H.push({ event: it, listeners: P }),
							(it.data = k))),
					Om(H, t, O, l, U));
			}
			hd(H, e);
		});
	}
	function vu(t, e, l) {
		return { instance: t, listener: e, currentTarget: l };
	}
	function jn(t, e) {
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
	function yd(t, e, l, a, u) {
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
	var Dm = /\r\n?/g,
		Nm = /\u0000|\uFFFD/g;
	function vd(t) {
		return (typeof t == "string" ? t : "" + t)
			.replace(
				Dm,
				`
`,
			)
			.replace(Nm, "");
	}
	function gd(t, e) {
		return ((e = vd(e)), vd(t) === e);
	}
	function Hn() {}
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
				Yu(t, "class", a);
				break;
			case "tabIndex":
				Yu(t, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Yu(t, l, a);
				break;
			case "style":
				pr(t, a, n);
				break;
			case "data":
				if (e !== "object") {
					Yu(t, "data", a);
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
				((a = Xu("" + a)), t.setAttribute(l, a));
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
				((a = Xu("" + a)), t.setAttribute(l, a));
				break;
			case "onClick":
				a != null && (t.onclick = Hn);
				break;
			case "onScroll":
				a != null && ft("scroll", t);
				break;
			case "onScrollEnd":
				a != null && ft("scrollend", t);
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
				((l = Xu("" + a)),
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
				(ft("beforetoggle", t), ft("toggle", t), Bu(t, "popover", a));
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
				Bu(t, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < l.length) ||
					(l[0] !== "o" && l[0] !== "O") ||
					(l[1] !== "n" && l[1] !== "N")) &&
					((l = c0.get(l) || l), Bu(t, l, a));
		}
	}
	function of(t, e, l, a, u, n) {
		switch (l) {
			case "style":
				pr(t, a, n);
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
				a != null && ft("scroll", t);
				break;
			case "onScrollEnd":
				a != null && ft("scrollend", t);
				break;
			case "onClick":
				a != null && (t.onclick = Hn);
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
				if (!cr.hasOwnProperty(l))
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
								: Bu(t, l, a);
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
				(ft("error", t), ft("load", t));
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
				ft("invalid", t);
				var r = (n = c = u = null),
					v = null,
					O = null;
				for (a in l)
					if (l.hasOwnProperty(a)) {
						var U = l[a];
						if (U != null)
							switch (a) {
								case "name":
									u = U;
									break;
								case "type":
									c = U;
									break;
								case "checked":
									v = U;
									break;
								case "defaultChecked":
									O = U;
									break;
								case "value":
									n = U;
									break;
								case "defaultValue":
									r = U;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (U != null) throw Error(f(137, e));
									break;
								default:
									pt(t, e, a, U, l, null);
							}
					}
				(mr(t, n, r, v, O, c, u, !1), Lu(t));
				return;
			case "select":
				(ft("invalid", t), (a = c = n = null));
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
				(ft("invalid", t), (n = u = a = null));
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
				(vr(t, a, u, n), Lu(t));
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
				(ft("beforetoggle", t),
					ft("toggle", t),
					ft("cancel", t),
					ft("close", t));
				break;
			case "iframe":
			case "object":
				ft("load", t);
				break;
			case "video":
			case "audio":
				for (a = 0; a < yu.length; a++) ft(yu[a], t);
				break;
			case "image":
				(ft("error", t), ft("load", t));
				break;
			case "details":
				ft("toggle", t);
				break;
			case "embed":
			case "source":
			case "link":
				(ft("error", t), ft("load", t));
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
				if (Ri(e)) {
					for (U in l)
						l.hasOwnProperty(U) &&
							((a = l[U]), a !== void 0 && of(t, e, U, a, l, void 0));
					return;
				}
		}
		for (r in l)
			l.hasOwnProperty(r) && ((a = l[r]), a != null && pt(t, e, r, a, l, null));
	}
	function Um(t, e, l, a) {
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
					U = null;
				for (_ in l) {
					var H = l[_];
					if (l.hasOwnProperty(_) && H != null)
						switch (_) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								v = H;
							default:
								a.hasOwnProperty(_) || pt(t, e, _, null, a, H);
						}
				}
				for (var M in a) {
					var _ = a[M];
					if (((H = l[M]), a.hasOwnProperty(M) && (_ != null || H != null)))
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
								U = _;
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
								_ !== H && pt(t, e, M, _, a, H);
						}
				}
				Ti(t, c, r, v, O, U, n, u);
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
				yr(t, M, _);
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
				for (var W in l)
					((M = l[W]),
						l.hasOwnProperty(W) &&
							M != null &&
							!a.hasOwnProperty(W) &&
							pt(t, e, W, null, a, M));
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
				if (Ri(e)) {
					for (var St in l)
						((M = l[St]),
							l.hasOwnProperty(St) &&
								M !== void 0 &&
								!a.hasOwnProperty(St) &&
								of(t, e, St, void 0, a, M));
					for (U in a)
						((M = a[U]),
							(_ = l[U]),
							!a.hasOwnProperty(U) ||
								M === _ ||
								(M === void 0 && _ === void 0) ||
								of(t, e, U, M, a, _));
					return;
				}
		}
		for (var A in l)
			((M = l[A]),
				l.hasOwnProperty(A) &&
					M != null &&
					!a.hasOwnProperty(A) &&
					pt(t, e, A, null, a, M));
		for (H in a)
			((M = a[H]),
				(_ = l[H]),
				!a.hasOwnProperty(H) ||
					M === _ ||
					(M == null && _ == null) ||
					pt(t, e, H, M, a, _));
	}
	var sf = null,
		df = null;
	function wn(t) {
		return t.nodeType === 9 ? t : t.ownerDocument;
	}
	function pd(t) {
		switch (t) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function Sd(t, e) {
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
	function hf(t, e) {
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
	var mf = null;
	function Cm() {
		var t = window.event;
		return t && t.type === "popstate"
			? t === mf
				? !1
				: ((mf = t), !0)
			: ((mf = null), !1);
	}
	var bd = typeof setTimeout == "function" ? setTimeout : void 0,
		jm = typeof clearTimeout == "function" ? clearTimeout : void 0,
		xd = typeof Promise == "function" ? Promise : void 0,
		Hm =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof xd < "u"
					? function (t) {
							return xd.resolve(null).then(t).catch(wm);
						}
					: bd;
	function wm(t) {
		setTimeout(function () {
			throw t;
		});
	}
	function vl(t) {
		return t === "head";
	}
	function Ed(t, e) {
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
	function yf(t) {
		var e = t.firstChild;
		for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
			var l = e;
			switch (((e = e.nextSibling), l.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					(yf(l), Si(l));
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
	function qm(t, e, l, a) {
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
	function Bm(t, e, l) {
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
	function vf(t) {
		return (
			t.data === "$!" ||
			(t.data === "$?" && t.ownerDocument.readyState === "complete")
		);
	}
	function Ym(t, e) {
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
	var gf = null;
	function Td(t) {
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
	function Ad(t, e, l) {
		switch (((e = wn(l)), t)) {
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
		Si(t);
	}
	var xe = new Map(),
		Rd = new Set();
	function qn(t) {
		return typeof t.getRootNode == "function"
			? t.getRootNode()
			: t.nodeType === 9
				? t
				: t.ownerDocument;
	}
	var ke = L.d;
	L.d = { f: Lm, r: Gm, D: Xm, C: Qm, L: Zm, m: Vm, X: Jm, S: Km, M: km };
	function Lm() {
		var t = ke.f(),
			e = _n();
		return t || e;
	}
	function Gm(t) {
		var e = Ql(t);
		e !== null && e.tag === 5 && e.type === "form" ? Vo(e) : ke.r(t);
	}
	var Ta = typeof document > "u" ? null : document;
	function Od(t, e, l) {
		var a = Ta;
		if (a && typeof e == "string" && e) {
			var u = me(e);
			((u = 'link[rel="' + t + '"][href="' + u + '"]'),
				typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
				Rd.has(u) ||
					(Rd.add(u),
					(t = { rel: t, crossOrigin: l, href: e }),
					a.querySelector(u) === null &&
						((e = a.createElement("link")),
						Kt(e, "link", t),
						Lt(e),
						a.head.appendChild(e))));
		}
	}
	function Xm(t) {
		(ke.D(t), Od("dns-prefetch", t, null));
	}
	function Qm(t, e) {
		(ke.C(t, e), Od("preconnect", t, e));
	}
	function Zm(t, e, l) {
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
	function Vm(t, e) {
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
	function Km(t, e, l) {
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
						(l = xe.get(n)) && pf(t, l));
					var v = (c = a.createElement("link"));
					(Lt(v),
						Kt(v, "link", t),
						(v._p = new Promise(function (O, U) {
							((v.onload = O), (v.onerror = U));
						})),
						v.addEventListener("load", function () {
							r.loading |= 1;
						}),
						v.addEventListener("error", function () {
							r.loading |= 2;
						}),
						(r.loading |= 4),
						Bn(c, e, a));
				}
				((c = { type: "stylesheet", instance: c, count: 1, state: r }),
					u.set(n, c));
			}
		}
	}
	function Jm(t, e) {
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
					(e = xe.get(u)) && Sf(t, e),
					(n = l.createElement("script")),
					Lt(n),
					Kt(n, "link", t),
					l.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function km(t, e) {
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
					(e = xe.get(u)) && Sf(t, e),
					(n = l.createElement("script")),
					Lt(n),
					Kt(n, "link", t),
					l.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function Md(t, e, l, a) {
		var u = (u = et.current) ? qn(u) : null;
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
								n || $m(u, t, l, c.state))),
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
	function _d(t) {
		return p({}, t, { "data-precedence": t.precedence, precedence: null });
	}
	function $m(t, e, l, a) {
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
	function zd(t, e, l) {
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
						Bn(a, l.precedence, t),
						(e.instance = a)
					);
				case "stylesheet":
					u = Aa(l.href);
					var n = t.querySelector(pu(u));
					if (n) return ((e.state.loading |= 4), (e.instance = n), Lt(n), n);
					((a = _d(l)),
						(u = xe.get(u)) && pf(a, u),
						(n = (t.ownerDocument || t).createElement("link")),
						Lt(n));
					var c = n;
					return (
						(c._p = new Promise(function (r, v) {
							((c.onload = r), (c.onerror = v));
						})),
						Kt(n, "link", a),
						(e.state.loading |= 4),
						Bn(n, l.precedence, t),
						(e.instance = n)
					);
				case "script":
					return (
						(n = Ra(l.src)),
						(u = t.querySelector(Su(n)))
							? ((e.instance = u), Lt(u), u)
							: ((a = l),
								(u = xe.get(n)) && ((a = p({}, l)), Sf(a, u)),
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
				((a = e.instance), (e.state.loading |= 4), Bn(a, l.precedence, t));
		return e.instance;
	}
	function Bn(t, e, l) {
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
	function pf(t, e) {
		(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.title == null && (t.title = e.title));
	}
	function Sf(t, e) {
		(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.integrity == null && (t.integrity = e.integrity));
	}
	var Yn = null;
	function Dd(t, e, l) {
		if (Yn === null) {
			var a = new Map(),
				u = (Yn = new Map());
			u.set(l, a);
		} else ((u = Yn), (a = u.get(l)), a || ((a = new Map()), u.set(l, a)));
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
	function Nd(t, e, l) {
		((t = t.ownerDocument || t),
			t.head.insertBefore(
				l,
				e === "title" ? t.querySelector("head > title") : null,
			));
	}
	function Wm(t, e, l) {
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
	function Ud(t) {
		return !(t.type === "stylesheet" && !(t.state.loading & 3));
	}
	var bu = null;
	function Fm() {}
	function Pm(t, e, l) {
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
							(a.count++, (a = Ln.bind(a)), t.then(a, a)),
						(e.state.loading |= 4),
						(e.instance = n),
						Lt(n));
					return;
				}
				((n = t.ownerDocument || t),
					(l = _d(l)),
					(u = xe.get(u)) && pf(l, u),
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
					(e = Ln.bind(a)),
					t.addEventListener("load", e),
					t.addEventListener("error", e)));
		}
	}
	function Im() {
		if (bu === null) throw Error(f(475));
		var t = bu;
		return (
			t.stylesheets && t.count === 0 && bf(t, t.stylesheets),
			0 < t.count
				? function (e) {
						var l = setTimeout(function () {
							if ((t.stylesheets && bf(t, t.stylesheets), t.unsuspend)) {
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
	function Ln() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) bf(this, this.stylesheets);
			else if (this.unsuspend) {
				var t = this.unsuspend;
				((this.unsuspend = null), t());
			}
		}
	}
	var Gn = null;
	function bf(t, e) {
		((t.stylesheets = null),
			t.unsuspend !== null &&
				(t.count++,
				(Gn = new Map()),
				e.forEach(ty, t),
				(Gn = null),
				Ln.call(t)));
	}
	function ty(t, e) {
		if (!(e.state.loading & 4)) {
			var l = Gn.get(t);
			if (l) var a = l.get(null);
			else {
				((l = new Map()), Gn.set(t, l));
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
				(a = Ln.bind(this)),
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
		$$typeof: F,
		Provider: null,
		Consumer: null,
		_currentValue: I,
		_currentValue2: I,
		_threadCount: 0,
	};
	function ey(t, e, l, a, u, n, c, r) {
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
			(this.expirationTimes = yi(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = yi(0)),
			(this.hiddenUpdates = yi(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = u),
			(this.onCaughtError = n),
			(this.onRecoverableError = c),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = r),
			(this.incompleteTransitions = new Map()));
	}
	function Cd(t, e, l, a, u, n, c, r, v, O, U, H) {
		return (
			(t = new ey(t, e, l, c, r, v, O, H)),
			(e = 1),
			n === !0 && (e |= 24),
			(n = ce(3, null, null, e)),
			(t.current = n),
			(n.stateNode = t),
			(e = tc()),
			e.refCount++,
			(t.pooledCache = e),
			e.refCount++,
			(n.memoizedState = { element: a, isDehydrated: l, cache: e }),
			uc(n),
			t
		);
	}
	function jd(t) {
		return t ? ((t = la), t) : la;
	}
	function Hd(t, e, l, a, u, n) {
		((u = jd(u)),
			a.context === null ? (a.context = u) : (a.pendingContext = u),
			(a = al(e)),
			(a.payload = { element: l }),
			(n = n === void 0 ? null : n),
			n !== null && (a.callback = n),
			(l = ul(t, a, e)),
			l !== null && (de(l, t, e), Fa(l, t, e)));
	}
	function wd(t, e) {
		if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
			var l = t.retryLane;
			t.retryLane = l !== 0 && l < e ? l : e;
		}
	}
	function xf(t, e) {
		(wd(t, e), (t = t.alternate) && wd(t, e));
	}
	function qd(t) {
		if (t.tag === 13) {
			var e = ea(t, 67108864);
			(e !== null && de(e, t, 67108864), xf(t, 67108864));
		}
	}
	var Xn = !0;
	function ly(t, e, l, a) {
		var u = D.T;
		D.T = null;
		var n = L.p;
		try {
			((L.p = 2), Ef(t, e, l, a));
		} finally {
			((L.p = n), (D.T = u));
		}
	}
	function ay(t, e, l, a) {
		var u = D.T;
		D.T = null;
		var n = L.p;
		try {
			((L.p = 8), Ef(t, e, l, a));
		} finally {
			((L.p = n), (D.T = u));
		}
	}
	function Ef(t, e, l, a) {
		if (Xn) {
			var u = Tf(a);
			if (u === null) (rf(t, e, a, Qn, l), Yd(t, a));
			else if (ny(u, t, e, l, a)) a.stopPropagation();
			else if ((Yd(t, a), e & 4 && -1 < uy.indexOf(t))) {
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
										(Ne(n), !(yt & 6) && ((On = Oe() + 500), mu(0)));
									}
								}
								break;
							case 13:
								((r = ea(n, 2)), r !== null && de(r, n, 2), _n(), xf(n, 2));
						}
					if (((n = Tf(a)), n === null && rf(t, e, a, Qn, l), n === u)) break;
					u = n;
				}
				u !== null && a.stopPropagation();
			} else rf(t, e, a, null, l);
		}
	}
	function Tf(t) {
		return ((t = Mi(t)), Af(t));
	}
	var Qn = null;
	function Af(t) {
		if (((Qn = null), (t = Xl(t)), t !== null)) {
			var e = y(t);
			if (e === null) t = null;
			else {
				var l = e.tag;
				if (l === 13) {
					if (((t = E(e)), t !== null)) return t;
					t = null;
				} else if (l === 3) {
					if (e.stateNode.current.memoizedState.isDehydrated)
						return e.tag === 3 ? e.stateNode.containerInfo : null;
					t = null;
				} else e !== t && (t = null);
			}
		}
		return ((Qn = t), null);
	}
	function Bd(t) {
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
				switch (Qh()) {
					case Ff:
						return 2;
					case Pf:
						return 8;
					case ju:
					case Zh:
						return 32;
					case If:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var Rf = !1,
		gl = null,
		pl = null,
		Sl = null,
		Eu = new Map(),
		Tu = new Map(),
		bl = [],
		uy =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function Yd(t, e) {
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
				e !== null && ((e = Ql(e)), e !== null && qd(e)),
				t)
			: ((t.eventSystemFlags |= a),
				(e = t.targetContainers),
				u !== null && e.indexOf(u) === -1 && e.push(u),
				t);
	}
	function ny(t, e, l, a, u) {
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
	function Ld(t) {
		var e = Xl(t.target);
		if (e !== null) {
			var l = y(e);
			if (l !== null) {
				if (((e = l.tag), e === 13)) {
					if (((e = E(l)), e !== null)) {
						((t.blockedOn = e),
							Ph(t.priority, function () {
								if (l.tag === 13) {
									var a = se();
									a = vi(a);
									var u = ea(l, a);
									(u !== null && de(u, l, a), xf(l, a));
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
	function Zn(t) {
		if (t.blockedOn !== null) return !1;
		for (var e = t.targetContainers; 0 < e.length; ) {
			var l = Tf(t.nativeEvent);
			if (l === null) {
				l = t.nativeEvent;
				var a = new l.constructor(l.type, l);
				((Oi = a), l.target.dispatchEvent(a), (Oi = null));
			} else return ((e = Ql(l)), e !== null && qd(e), (t.blockedOn = l), !1);
			e.shift();
		}
		return !0;
	}
	function Gd(t, e, l) {
		Zn(t) && l.delete(e);
	}
	function iy() {
		((Rf = !1),
			gl !== null && Zn(gl) && (gl = null),
			pl !== null && Zn(pl) && (pl = null),
			Sl !== null && Zn(Sl) && (Sl = null),
			Eu.forEach(Gd),
			Tu.forEach(Gd));
	}
	function Vn(t, e) {
		t.blockedOn === e &&
			((t.blockedOn = null),
			Rf ||
				((Rf = !0),
				i.unstable_scheduleCallback(i.unstable_NormalPriority, iy)));
	}
	var Kn = null;
	function Xd(t) {
		Kn !== t &&
			((Kn = t),
			i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
				Kn === t && (Kn = null);
				for (var e = 0; e < t.length; e += 3) {
					var l = t[e],
						a = t[e + 1],
						u = t[e + 2];
					if (typeof a != "function") {
						if (Af(a || l) === null) continue;
						break;
					}
					var n = Ql(l);
					n !== null &&
						(t.splice(e, 3),
						(e -= 3),
						Tc(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
				}
			}));
	}
	function Ru(t) {
		function e(v) {
			return Vn(v, t);
		}
		(gl !== null && Vn(gl, t),
			pl !== null && Vn(pl, t),
			Sl !== null && Vn(Sl, t),
			Eu.forEach(e),
			Tu.forEach(e));
		for (var l = 0; l < bl.length; l++) {
			var a = bl[l];
			a.blockedOn === t && (a.blockedOn = null);
		}
		for (; 0 < bl.length && ((l = bl[0]), l.blockedOn === null); )
			(Ld(l), l.blockedOn === null && bl.shift());
		if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
			for (a = 0; a < l.length; a += 3) {
				var u = l[a],
					n = l[a + 1],
					c = u[Pt] || null;
				if (typeof n == "function") c || Xd(l);
				else if (c) {
					var r = null;
					if (n && n.hasAttribute("formAction")) {
						if (((u = n), (c = n[Pt] || null))) r = c.formAction;
						else if (Af(u) !== null) continue;
					} else r = c.action;
					(typeof r == "function" ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)),
						Xd(l));
				}
			}
	}
	function Of(t) {
		this._internalRoot = t;
	}
	((Jn.prototype.render = Of.prototype.render =
		function (t) {
			var e = this._internalRoot;
			if (e === null) throw Error(f(409));
			var l = e.current,
				a = se();
			Hd(l, a, t, e, null, null);
		}),
		(Jn.prototype.unmount = Of.prototype.unmount =
			function () {
				var t = this._internalRoot;
				if (t !== null) {
					this._internalRoot = null;
					var e = t.containerInfo;
					(Hd(t.current, 2, null, t, null, null), _n(), (e[Gl] = null));
				}
			}));
	function Jn(t) {
		this._internalRoot = t;
	}
	Jn.prototype.unstable_scheduleHydration = function (t) {
		if (t) {
			var e = ur();
			t = { blockedOn: null, target: t, priority: e };
			for (var l = 0; l < bl.length && e !== 0 && e < bl[l].priority; l++);
			(bl.splice(l, 0, t), l === 0 && Ld(t));
		}
	};
	var Qd = s.version;
	if (Qd !== "19.1.0") throw Error(f(527, Qd, "19.1.0"));
	L.findDOMNode = function (t) {
		var e = t._reactInternals;
		if (e === void 0)
			throw typeof t.render == "function"
				? Error(f(188))
				: ((t = Object.keys(t).join(",")), Error(f(268, t)));
		return (
			(t = o(e)),
			(t = t !== null ? d(t) : null),
			(t = t === null ? null : t.stateNode),
			t
		);
	};
	var cy = {
		bundleType: 0,
		version: "19.1.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: D,
		reconcilerVersion: "19.1.0",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var kn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!kn.isDisabled && kn.supportsFiber)
			try {
				((za = kn.inject(cy)), (ue = kn));
			} catch {}
	}
	return (
		(Mu.createRoot = function (t, e) {
			if (!m(t)) throw Error(f(299));
			var l = !1,
				a = "",
				u = ns,
				n = is,
				c = cs,
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
				(e = Cd(t, 1, !1, null, null, l, a, u, n, c, r, null)),
				(t[Gl] = e.current),
				ff(t),
				new Of(e)
			);
		}),
		(Mu.hydrateRoot = function (t, e, l) {
			if (!m(t)) throw Error(f(299));
			var a = !1,
				u = "",
				n = ns,
				c = is,
				r = cs,
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
				(e = Cd(t, 1, !0, e, l ?? null, a, u, n, c, r, v, O)),
				(e.context = jd(null)),
				(l = e.current),
				(a = se()),
				(a = vi(a)),
				(u = al(a)),
				(u.callback = null),
				ul(l, u, a),
				(l = a),
				(e.current.lanes = l),
				Na(e, l),
				Ne(e),
				(t[Gl] = e.current),
				ff(t),
				new Jn(e)
			);
		}),
		(Mu.version = "19.1.0"),
		Mu
	);
}
var Id;
function py() {
	if (Id) return zf.exports;
	Id = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (s) {
				console.error(s);
			}
	}
	return (i(), (zf.exports = gy()), zf.exports);
}
var Sy = py();
const by = Sh(Sy);
/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var th = "popstate";
function xy(i = {}) {
	function s(f, m) {
		let { pathname: y, search: E, hash: g } = f.location;
		return Yf(
			"",
			{ pathname: y, search: E, hash: g },
			(m.state && m.state.usr) || null,
			(m.state && m.state.key) || "default",
		);
	}
	function h(f, m) {
		return typeof m == "string" ? m : zu(m);
	}
	return Ty(s, h, null, i);
}
function zt(i, s) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
function Re(i, s) {
	if (!i) {
		typeof console < "u" && console.warn(s);
		try {
			throw new Error(s);
		} catch {}
	}
}
function Ey() {
	return Math.random().toString(36).substring(2, 10);
}
function eh(i, s) {
	return { usr: i.state, key: i.key, idx: s };
}
function Yf(i, s, h = null, f) {
	return {
		pathname: typeof i == "string" ? i : i.pathname,
		search: "",
		hash: "",
		...(typeof s == "string" ? Ma(s) : s),
		state: h,
		key: (s && s.key) || f || Ey(),
	};
}
function zu({ pathname: i = "/", search: s = "", hash: h = "" }) {
	return (
		s && s !== "?" && (i += s.charAt(0) === "?" ? s : "?" + s),
		h && h !== "#" && (i += h.charAt(0) === "#" ? h : "#" + h),
		i
	);
}
function Ma(i) {
	let s = {};
	if (i) {
		let h = i.indexOf("#");
		h >= 0 && ((s.hash = i.substring(h)), (i = i.substring(0, h)));
		let f = i.indexOf("?");
		(f >= 0 && ((s.search = i.substring(f)), (i = i.substring(0, f))),
			i && (s.pathname = i));
	}
	return s;
}
function Ty(i, s, h, f = {}) {
	let { window: m = document.defaultView, v5Compat: y = !1 } = f,
		E = m.history,
		g = "POP",
		o = null,
		d = p();
	d == null && ((d = 0), E.replaceState({ ...E.state, idx: d }, ""));
	function p() {
		return (E.state || { idx: null }).idx;
	}
	function S() {
		g = "POP";
		let Z = p(),
			X = Z == null ? null : Z - d;
		((d = Z), o && o({ action: g, location: G.location, delta: X }));
	}
	function T(Z, X) {
		g = "PUSH";
		let K = Yf(G.location, Z, X);
		d = p() + 1;
		let F = eh(K, d),
			J = G.createHref(K);
		try {
			E.pushState(F, "", J);
		} catch (Y) {
			if (Y instanceof DOMException && Y.name === "DataCloneError") throw Y;
			m.location.assign(J);
		}
		y && o && o({ action: g, location: G.location, delta: 1 });
	}
	function C(Z, X) {
		g = "REPLACE";
		let K = Yf(G.location, Z, X);
		d = p();
		let F = eh(K, d),
			J = G.createHref(K);
		(E.replaceState(F, "", J),
			y && o && o({ action: g, location: G.location, delta: 0 }));
	}
	function q(Z) {
		return Ay(Z);
	}
	let G = {
		get action() {
			return g;
		},
		get location() {
			return i(m, E);
		},
		listen(Z) {
			if (o) throw new Error("A history only accepts one active listener");
			return (
				m.addEventListener(th, S),
				(o = Z),
				() => {
					(m.removeEventListener(th, S), (o = null));
				}
			);
		},
		createHref(Z) {
			return s(m, Z);
		},
		createURL: q,
		encodeLocation(Z) {
			let X = q(Z);
			return { pathname: X.pathname, search: X.search, hash: X.hash };
		},
		push: T,
		replace: C,
		go(Z) {
			return E.go(Z);
		},
	};
	return G;
}
function Ay(i, s = !1) {
	let h = "http://localhost";
	(typeof window < "u" &&
		(h =
			window.location.origin !== "null"
				? window.location.origin
				: window.location.href),
		zt(h, "No window.location.(origin|href) available to create URL"));
	let f = typeof i == "string" ? i : zu(i);
	return (
		(f = f.replace(/ $/, "%20")),
		!s && f.startsWith("//") && (f = h + f),
		new URL(f, h)
	);
}
function bh(i, s, h = "/") {
	return Ry(i, s, h, !1);
}
function Ry(i, s, h, f) {
	let m = typeof s == "string" ? Ma(s) : s,
		y = We(m.pathname || "/", h);
	if (y == null) return null;
	let E = xh(i);
	Oy(E);
	let g = null;
	for (let o = 0; g == null && o < E.length; ++o) {
		let d = qy(y);
		g = Hy(E[o], d, f);
	}
	return g;
}
function xh(i, s = [], h = [], f = "") {
	let m = (y, E, g) => {
		let o = {
			relativePath: g === void 0 ? y.path || "" : g,
			caseSensitive: y.caseSensitive === !0,
			childrenIndex: E,
			route: y,
		};
		o.relativePath.startsWith("/") &&
			(zt(
				o.relativePath.startsWith(f),
				`Absolute route path "${o.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
			),
			(o.relativePath = o.relativePath.slice(f.length)));
		let d = $e([f, o.relativePath]),
			p = h.concat(o);
		(y.children &&
			y.children.length > 0 &&
			(zt(
				y.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${d}".`,
			),
			xh(y.children, s, p, d)),
			!(y.path == null && !y.index) &&
				s.push({ path: d, score: Cy(d, y.index), routesMeta: p }));
	};
	return (
		i.forEach((y, E) => {
			var g;
			if (y.path === "" || !((g = y.path) != null && g.includes("?"))) m(y, E);
			else for (let o of Eh(y.path)) m(y, E, o);
		}),
		s
	);
}
function Eh(i) {
	let s = i.split("/");
	if (s.length === 0) return [];
	let [h, ...f] = s,
		m = h.endsWith("?"),
		y = h.replace(/\?$/, "");
	if (f.length === 0) return m ? [y, ""] : [y];
	let E = Eh(f.join("/")),
		g = [];
	return (
		g.push(...E.map((o) => (o === "" ? y : [y, o].join("/")))),
		m && g.push(...E),
		g.map((o) => (i.startsWith("/") && o === "" ? "/" : o))
	);
}
function Oy(i) {
	i.sort((s, h) =>
		s.score !== h.score
			? h.score - s.score
			: jy(
					s.routesMeta.map((f) => f.childrenIndex),
					h.routesMeta.map((f) => f.childrenIndex),
				),
	);
}
var My = /^:[\w-]+$/,
	_y = 3,
	zy = 2,
	Dy = 1,
	Ny = 10,
	Uy = -2,
	lh = (i) => i === "*";
function Cy(i, s) {
	let h = i.split("/"),
		f = h.length;
	return (
		h.some(lh) && (f += Uy),
		s && (f += zy),
		h
			.filter((m) => !lh(m))
			.reduce((m, y) => m + (My.test(y) ? _y : y === "" ? Dy : Ny), f)
	);
}
function jy(i, s) {
	return i.length === s.length && i.slice(0, -1).every((f, m) => f === s[m])
		? i[i.length - 1] - s[s.length - 1]
		: 0;
}
function Hy(i, s, h = !1) {
	let { routesMeta: f } = i,
		m = {},
		y = "/",
		E = [];
	for (let g = 0; g < f.length; ++g) {
		let o = f[g],
			d = g === f.length - 1,
			p = y === "/" ? s : s.slice(y.length) || "/",
			S = ii(
				{ path: o.relativePath, caseSensitive: o.caseSensitive, end: d },
				p,
			),
			T = o.route;
		if (
			(!S &&
				d &&
				h &&
				!f[f.length - 1].route.index &&
				(S = ii(
					{ path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 },
					p,
				)),
			!S)
		)
			return null;
		(Object.assign(m, S.params),
			E.push({
				params: m,
				pathname: $e([y, S.pathname]),
				pathnameBase: Gy($e([y, S.pathnameBase])),
				route: T,
			}),
			S.pathnameBase !== "/" && (y = $e([y, S.pathnameBase])));
	}
	return E;
}
function ii(i, s) {
	typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
	let [h, f] = wy(i.path, i.caseSensitive, i.end),
		m = s.match(h);
	if (!m) return null;
	let y = m[0],
		E = y.replace(/(.)\/+$/, "$1"),
		g = m.slice(1);
	return {
		params: f.reduce((d, { paramName: p, isOptional: S }, T) => {
			if (p === "*") {
				let q = g[T] || "";
				E = y.slice(0, y.length - q.length).replace(/(.)\/+$/, "$1");
			}
			const C = g[T];
			return (
				S && !C ? (d[p] = void 0) : (d[p] = (C || "").replace(/%2F/g, "/")),
				d
			);
		}, {}),
		pathname: y,
		pathnameBase: E,
		pattern: i,
	};
}
function wy(i, s = !1, h = !0) {
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
					(E, g, o) => (
						f.push({ paramName: g, isOptional: o != null }),
						o ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		i.endsWith("*")
			? (f.push({ paramName: "*" }),
				(m += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: h
				? (m += "\\/*$")
				: i !== "" && i !== "/" && (m += "(?:(?=\\/|$))"),
		[new RegExp(m, s ? void 0 : "i"), f]
	);
}
function qy(i) {
	try {
		return i
			.split("/")
			.map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
			.join("/");
	} catch (s) {
		return (
			Re(
				!1,
				`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`,
			),
			i
		);
	}
}
function We(i, s) {
	if (s === "/") return i;
	if (!i.toLowerCase().startsWith(s.toLowerCase())) return null;
	let h = s.endsWith("/") ? s.length - 1 : s.length,
		f = i.charAt(h);
	return f && f !== "/" ? null : i.slice(h) || "/";
}
function By(i, s = "/") {
	let {
		pathname: h,
		search: f = "",
		hash: m = "",
	} = typeof i == "string" ? Ma(i) : i;
	return {
		pathname: h ? (h.startsWith("/") ? h : Yy(h, s)) : s,
		search: Xy(f),
		hash: Qy(m),
	};
}
function Yy(i, s) {
	let h = s.replace(/\/+$/, "").split("/");
	return (
		i.split("/").forEach((m) => {
			m === ".." ? h.length > 1 && h.pop() : m !== "." && h.push(m);
		}),
		h.length > 1 ? h.join("/") : "/"
	);
}
function Cf(i, s, h, f) {
	return `Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${h}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ly(i) {
	return i.filter(
		(s, h) => h === 0 || (s.route.path && s.route.path.length > 0),
	);
}
function Th(i) {
	let s = Ly(i);
	return s.map((h, f) => (f === s.length - 1 ? h.pathname : h.pathnameBase));
}
function Ah(i, s, h, f = !1) {
	let m;
	typeof i == "string"
		? (m = Ma(i))
		: ((m = { ...i }),
			zt(
				!m.pathname || !m.pathname.includes("?"),
				Cf("?", "pathname", "search", m),
			),
			zt(
				!m.pathname || !m.pathname.includes("#"),
				Cf("#", "pathname", "hash", m),
			),
			zt(!m.search || !m.search.includes("#"), Cf("#", "search", "hash", m)));
	let y = i === "" || m.pathname === "",
		E = y ? "/" : m.pathname,
		g;
	if (E == null) g = h;
	else {
		let S = s.length - 1;
		if (!f && E.startsWith("..")) {
			let T = E.split("/");
			for (; T[0] === ".."; ) (T.shift(), (S -= 1));
			m.pathname = T.join("/");
		}
		g = S >= 0 ? s[S] : "/";
	}
	let o = By(m, g),
		d = E && E !== "/" && E.endsWith("/"),
		p = (y || E === ".") && h.endsWith("/");
	return (!o.pathname.endsWith("/") && (d || p) && (o.pathname += "/"), o);
}
var $e = (i) => i.join("/").replace(/\/\/+/g, "/"),
	Gy = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Xy = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
	Qy = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function Zy(i) {
	return (
		i != null &&
		typeof i.status == "number" &&
		typeof i.statusText == "string" &&
		typeof i.internal == "boolean" &&
		"data" in i
	);
}
var Rh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Rh);
var Vy = ["GET", ...Rh];
new Set(Vy);
var _a = z.createContext(null);
_a.displayName = "DataRouter";
var fi = z.createContext(null);
fi.displayName = "DataRouterState";
z.createContext(!1);
var Oh = z.createContext({ isTransitioning: !1 });
Oh.displayName = "ViewTransition";
var Ky = z.createContext(new Map());
Ky.displayName = "Fetchers";
var Jy = z.createContext(null);
Jy.displayName = "Await";
var Ue = z.createContext(null);
Ue.displayName = "Navigation";
var Du = z.createContext(null);
Du.displayName = "Location";
var Ce = z.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ce.displayName = "Route";
var Zf = z.createContext(null);
Zf.displayName = "RouteError";
function ky(i, { relative: s } = {}) {
	zt(
		Nu(),
		"useHref() may be used only in the context of a <Router> component.",
	);
	let { basename: h, navigator: f } = z.useContext(Ue),
		{ hash: m, pathname: y, search: E } = Uu(i, { relative: s }),
		g = y;
	return (
		h !== "/" && (g = y === "/" ? h : $e([h, y])),
		f.createHref({ pathname: g, search: E, hash: m })
	);
}
function Nu() {
	return z.useContext(Du) != null;
}
function El() {
	return (
		zt(
			Nu(),
			"useLocation() may be used only in the context of a <Router> component.",
		),
		z.useContext(Du).location
	);
}
var Mh =
	"You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function _h(i) {
	z.useContext(Ue).static || z.useLayoutEffect(i);
}
function zh() {
	let { isDataRoute: i } = z.useContext(Ce);
	return i ? cv() : $y();
}
function $y() {
	zt(
		Nu(),
		"useNavigate() may be used only in the context of a <Router> component.",
	);
	let i = z.useContext(_a),
		{ basename: s, navigator: h } = z.useContext(Ue),
		{ matches: f } = z.useContext(Ce),
		{ pathname: m } = El(),
		y = JSON.stringify(Th(f)),
		E = z.useRef(!1);
	return (
		_h(() => {
			E.current = !0;
		}),
		z.useCallback(
			(o, d = {}) => {
				if ((Re(E.current, Mh), !E.current)) return;
				if (typeof o == "number") {
					h.go(o);
					return;
				}
				let p = Ah(o, JSON.parse(y), m, d.relative === "path");
				(i == null &&
					s !== "/" &&
					(p.pathname = p.pathname === "/" ? s : $e([s, p.pathname])),
					(d.replace ? h.replace : h.push)(p, d.state, d));
			},
			[s, h, y, m, i],
		)
	);
}
z.createContext(null);
function F1() {
	let { matches: i } = z.useContext(Ce),
		s = i[i.length - 1];
	return s ? s.params : {};
}
function Uu(i, { relative: s } = {}) {
	let { matches: h } = z.useContext(Ce),
		{ pathname: f } = El(),
		m = JSON.stringify(Th(h));
	return z.useMemo(() => Ah(i, JSON.parse(m), f, s === "path"), [i, m, f, s]);
}
function Wy(i, s) {
	return Dh(i, s);
}
function Dh(i, s, h, f) {
	var X;
	zt(
		Nu(),
		"useRoutes() may be used only in the context of a <Router> component.",
	);
	let { navigator: m } = z.useContext(Ue),
		{ matches: y } = z.useContext(Ce),
		E = y[y.length - 1],
		g = E ? E.params : {},
		o = E ? E.pathname : "/",
		d = E ? E.pathnameBase : "/",
		p = E && E.route;
	{
		let K = (p && p.path) || "";
		Nh(
			o,
			!p || K.endsWith("*") || K.endsWith("*?"),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K === "/" ? "*" : `${K}/*`}">.`,
		);
	}
	let S = El(),
		T;
	if (s) {
		let K = typeof s == "string" ? Ma(s) : s;
		(zt(
			d === "/" || ((X = K.pathname) == null ? void 0 : X.startsWith(d)),
			`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${K.pathname}" was given in the \`location\` prop.`,
		),
			(T = K));
	} else T = S;
	let C = T.pathname || "/",
		q = C;
	if (d !== "/") {
		let K = d.replace(/^\//, "").split("/");
		q = "/" + C.replace(/^\//, "").split("/").slice(K.length).join("/");
	}
	let G = bh(i, { pathname: q });
	(Re(
		p || G != null,
		`No routes matched location "${T.pathname}${T.search}${T.hash}" `,
	),
		Re(
			G == null ||
				G[G.length - 1].route.element !== void 0 ||
				G[G.length - 1].route.Component !== void 0 ||
				G[G.length - 1].route.lazy !== void 0,
			`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
		));
	let Z = ev(
		G &&
			G.map((K) =>
				Object.assign({}, K, {
					params: Object.assign({}, g, K.params),
					pathname: $e([
						d,
						m.encodeLocation
							? m.encodeLocation(K.pathname).pathname
							: K.pathname,
					]),
					pathnameBase:
						K.pathnameBase === "/"
							? d
							: $e([
									d,
									m.encodeLocation
										? m.encodeLocation(K.pathnameBase).pathname
										: K.pathnameBase,
								]),
				}),
			),
		y,
		h,
		f,
	);
	return s && Z
		? z.createElement(
				Du.Provider,
				{
					value: {
						location: {
							pathname: "/",
							search: "",
							hash: "",
							state: null,
							key: "default",
							...T,
						},
						navigationType: "POP",
					},
				},
				Z,
			)
		: Z;
}
function Fy() {
	let i = iv(),
		s = Zy(i)
			? `${i.status} ${i.statusText}`
			: i instanceof Error
				? i.message
				: JSON.stringify(i),
		h = i instanceof Error ? i.stack : null,
		f = "rgba(200,200,200, 0.5)",
		m = { padding: "0.5rem", backgroundColor: f },
		y = { padding: "2px 4px", backgroundColor: f },
		E = null;
	return (
		console.error("Error handled by React Router default ErrorBoundary:", i),
		(E = z.createElement(
			z.Fragment,
			null,
			z.createElement("p", null, "💿 Hey developer 👋"),
			z.createElement(
				"p",
				null,
				"You can provide a way better UX than this when your app throws errors by providing your own ",
				z.createElement("code", { style: y }, "ErrorBoundary"),
				" or",
				" ",
				z.createElement("code", { style: y }, "errorElement"),
				" prop on your route.",
			),
		)),
		z.createElement(
			z.Fragment,
			null,
			z.createElement("h2", null, "Unexpected Application Error!"),
			z.createElement("h3", { style: { fontStyle: "italic" } }, s),
			h ? z.createElement("pre", { style: m }, h) : null,
			E,
		)
	);
}
var Py = z.createElement(Fy, null),
	Iy = class extends z.Component {
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
		static getDerivedStateFromProps(i, s) {
			return s.location !== i.location ||
				(s.revalidation !== "idle" && i.revalidation === "idle")
				? { error: i.error, location: i.location, revalidation: i.revalidation }
				: {
						error: i.error !== void 0 ? i.error : s.error,
						location: s.location,
						revalidation: i.revalidation || s.revalidation,
					};
		}
		componentDidCatch(i, s) {
			console.error(
				"React Router caught the following error during render",
				i,
				s,
			);
		}
		render() {
			return this.state.error !== void 0
				? z.createElement(
						Ce.Provider,
						{ value: this.props.routeContext },
						z.createElement(Zf.Provider, {
							value: this.state.error,
							children: this.props.component,
						}),
					)
				: this.props.children;
		}
	};
function tv({ routeContext: i, match: s, children: h }) {
	let f = z.useContext(_a);
	return (
		f &&
			f.static &&
			f.staticContext &&
			(s.route.errorElement || s.route.ErrorBoundary) &&
			(f.staticContext._deepestRenderedBoundaryId = s.route.id),
		z.createElement(Ce.Provider, { value: i }, h)
	);
}
function ev(i, s = [], h = null, f = null) {
	if (i == null) {
		if (!h) return null;
		if (h.errors) i = h.matches;
		else if (s.length === 0 && !h.initialized && h.matches.length > 0)
			i = h.matches;
		else return null;
	}
	let m = i,
		y = h == null ? void 0 : h.errors;
	if (y != null) {
		let o = m.findIndex(
			(d) => d.route.id && (y == null ? void 0 : y[d.route.id]) !== void 0,
		);
		(zt(
			o >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`,
		),
			(m = m.slice(0, Math.min(m.length, o + 1))));
	}
	let E = !1,
		g = -1;
	if (h)
		for (let o = 0; o < m.length; o++) {
			let d = m[o];
			if (
				((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (g = o),
				d.route.id)
			) {
				let { loaderData: p, errors: S } = h,
					T =
						d.route.loader &&
						!p.hasOwnProperty(d.route.id) &&
						(!S || S[d.route.id] === void 0);
				if (d.route.lazy || T) {
					((E = !0), g >= 0 ? (m = m.slice(0, g + 1)) : (m = [m[0]]));
					break;
				}
			}
		}
	return m.reduceRight((o, d, p) => {
		let S,
			T = !1,
			C = null,
			q = null;
		h &&
			((S = y && d.route.id ? y[d.route.id] : void 0),
			(C = d.route.errorElement || Py),
			E &&
				(g < 0 && p === 0
					? (Nh(
							"route-fallback",
							!1,
							"No `HydrateFallback` element provided to render during initial hydration",
						),
						(T = !0),
						(q = null))
					: g === p &&
						((T = !0), (q = d.route.hydrateFallbackElement || null))));
		let G = s.concat(m.slice(0, p + 1)),
			Z = () => {
				let X;
				return (
					S
						? (X = C)
						: T
							? (X = q)
							: d.route.Component
								? (X = z.createElement(d.route.Component, null))
								: d.route.element
									? (X = d.route.element)
									: (X = o),
					z.createElement(tv, {
						match: d,
						routeContext: { outlet: o, matches: G, isDataRoute: h != null },
						children: X,
					})
				);
			};
		return h && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
			? z.createElement(Iy, {
					location: h.location,
					revalidation: h.revalidation,
					component: C,
					error: S,
					children: Z(),
					routeContext: { outlet: null, matches: G, isDataRoute: !0 },
				})
			: Z();
	}, null);
}
function Vf(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function lv(i) {
	let s = z.useContext(_a);
	return (zt(s, Vf(i)), s);
}
function av(i) {
	let s = z.useContext(fi);
	return (zt(s, Vf(i)), s);
}
function uv(i) {
	let s = z.useContext(Ce);
	return (zt(s, Vf(i)), s);
}
function Kf(i) {
	let s = uv(i),
		h = s.matches[s.matches.length - 1];
	return (
		zt(
			h.route.id,
			`${i} can only be used on routes that contain a unique "id"`,
		),
		h.route.id
	);
}
function nv() {
	return Kf("useRouteId");
}
function iv() {
	var f;
	let i = z.useContext(Zf),
		s = av("useRouteError"),
		h = Kf("useRouteError");
	return i !== void 0 ? i : (f = s.errors) == null ? void 0 : f[h];
}
function cv() {
	let { router: i } = lv("useNavigate"),
		s = Kf("useNavigate"),
		h = z.useRef(!1);
	return (
		_h(() => {
			h.current = !0;
		}),
		z.useCallback(
			async (m, y = {}) => {
				(Re(h.current, Mh),
					h.current &&
						(typeof m == "number"
							? i.navigate(m)
							: await i.navigate(m, { fromRouteId: s, ...y })));
			},
			[i, s],
		)
	);
}
var ah = {};
function Nh(i, s, h) {
	!s && !ah[i] && ((ah[i] = !0), Re(!1, h));
}
z.memo(fv);
function fv({ routes: i, future: s, state: h }) {
	return Dh(i, void 0, h, s);
}
function Oa(i) {
	zt(
		!1,
		"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
	);
}
function rv({
	basename: i = "/",
	children: s = null,
	location: h,
	navigationType: f = "POP",
	navigator: m,
	static: y = !1,
}) {
	zt(
		!Nu(),
		"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
	);
	let E = i.replace(/^\/*/, "/"),
		g = z.useMemo(
			() => ({ basename: E, navigator: m, static: y, future: {} }),
			[E, m, y],
		);
	typeof h == "string" && (h = Ma(h));
	let {
			pathname: o = "/",
			search: d = "",
			hash: p = "",
			state: S = null,
			key: T = "default",
		} = h,
		C = z.useMemo(() => {
			let q = We(o, E);
			return q == null
				? null
				: {
						location: { pathname: q, search: d, hash: p, state: S, key: T },
						navigationType: f,
					};
		}, [E, o, d, p, S, T, f]);
	return (
		Re(
			C != null,
			`<Router basename="${E}"> is not able to match the URL "${o}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`,
		),
		C == null
			? null
			: z.createElement(
					Ue.Provider,
					{ value: g },
					z.createElement(Du.Provider, { children: s, value: C }),
				)
	);
}
function ov({ children: i, location: s }) {
	return Wy(Lf(i), s);
}
function Lf(i, s = []) {
	let h = [];
	return (
		z.Children.forEach(i, (f, m) => {
			if (!z.isValidElement(f)) return;
			let y = [...s, m];
			if (f.type === z.Fragment) {
				h.push.apply(h, Lf(f.props.children, y));
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
			let E = {
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
			(f.props.children && (E.children = Lf(f.props.children, y)), h.push(E));
		}),
		h
	);
}
var Wn = "get",
	Fn = "application/x-www-form-urlencoded";
function ri(i) {
	return i != null && typeof i.tagName == "string";
}
function sv(i) {
	return ri(i) && i.tagName.toLowerCase() === "button";
}
function dv(i) {
	return ri(i) && i.tagName.toLowerCase() === "form";
}
function hv(i) {
	return ri(i) && i.tagName.toLowerCase() === "input";
}
function mv(i) {
	return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function yv(i, s) {
	return i.button === 0 && (!s || s === "_self") && !mv(i);
}
function Gf(i = "") {
	return new URLSearchParams(
		typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams
			? i
			: Object.keys(i).reduce((s, h) => {
					let f = i[h];
					return s.concat(Array.isArray(f) ? f.map((m) => [h, m]) : [[h, f]]);
				}, []),
	);
}
function vv(i, s) {
	let h = Gf(i);
	return (
		s &&
			s.forEach((f, m) => {
				h.has(m) ||
					s.getAll(m).forEach((y) => {
						h.append(m, y);
					});
			}),
		h
	);
}
var $n = null;
function gv() {
	if ($n === null)
		try {
			(new FormData(document.createElement("form"), 0), ($n = !1));
		} catch {
			$n = !0;
		}
	return $n;
}
var pv = new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain",
]);
function jf(i) {
	return i != null && !pv.has(i)
		? (Re(
				!1,
				`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fn}"`,
			),
			null)
		: i;
}
function Sv(i, s) {
	let h, f, m, y, E;
	if (dv(i)) {
		let g = i.getAttribute("action");
		((f = g ? We(g, s) : null),
			(h = i.getAttribute("method") || Wn),
			(m = jf(i.getAttribute("enctype")) || Fn),
			(y = new FormData(i)));
	} else if (sv(i) || (hv(i) && (i.type === "submit" || i.type === "image"))) {
		let g = i.form;
		if (g == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>',
			);
		let o = i.getAttribute("formaction") || g.getAttribute("action");
		if (
			((f = o ? We(o, s) : null),
			(h = i.getAttribute("formmethod") || g.getAttribute("method") || Wn),
			(m =
				jf(i.getAttribute("formenctype")) ||
				jf(g.getAttribute("enctype")) ||
				Fn),
			(y = new FormData(g, i)),
			!gv())
		) {
			let { name: d, type: p, value: S } = i;
			if (p === "image") {
				let T = d ? `${d}.` : "";
				(y.append(`${T}x`, "0"), y.append(`${T}y`, "0"));
			} else d && y.append(d, S);
		}
	} else {
		if (ri(i))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
			);
		((h = Wn), (f = null), (m = Fn), (E = i));
	}
	return (
		y && m === "text/plain" && ((E = y), (y = void 0)),
		{ action: f, method: h.toLowerCase(), encType: m, formData: y, body: E }
	);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Jf(i, s) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
function bv(i, s, h) {
	let f =
		typeof i == "string"
			? new URL(
					i,
					typeof window > "u"
						? "server://singlefetch/"
						: window.location.origin,
				)
			: i;
	return (
		f.pathname === "/"
			? (f.pathname = `_root.${h}`)
			: s && We(f.pathname, s) === "/"
				? (f.pathname = `${s.replace(/\/$/, "")}/_root.${h}`)
				: (f.pathname = `${f.pathname.replace(/\/$/, "")}.${h}`),
		f
	);
}
async function xv(i, s) {
	if (i.id in s) return s[i.id];
	try {
		let h = await import(i.module);
		return ((s[i.id] = h), h);
	} catch (h) {
		return (
			console.error(
				`Error loading route module \`${i.module}\`, reloading page...`,
			),
			console.error(h),
			window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		);
	}
}
function Ev(i) {
	return i == null
		? !1
		: i.href == null
			? i.rel === "preload" &&
				typeof i.imageSrcSet == "string" &&
				typeof i.imageSizes == "string"
			: typeof i.rel == "string" && typeof i.href == "string";
}
async function Tv(i, s, h) {
	let f = await Promise.all(
		i.map(async (m) => {
			let y = s.routes[m.route.id];
			if (y) {
				let E = await xv(y, h);
				return E.links ? E.links() : [];
			}
			return [];
		}),
	);
	return Mv(
		f
			.flat(1)
			.filter(Ev)
			.filter((m) => m.rel === "stylesheet" || m.rel === "preload")
			.map((m) =>
				m.rel === "stylesheet"
					? { ...m, rel: "prefetch", as: "style" }
					: { ...m, rel: "prefetch" },
			),
	);
}
function uh(i, s, h, f, m, y) {
	let E = (o, d) => (h[d] ? o.route.id !== h[d].route.id : !0),
		g = (o, d) => {
			var p;
			return (
				h[d].pathname !== o.pathname ||
				(((p = h[d].route.path) == null ? void 0 : p.endsWith("*")) &&
					h[d].params["*"] !== o.params["*"])
			);
		};
	return y === "assets"
		? s.filter((o, d) => E(o, d) || g(o, d))
		: y === "data"
			? s.filter((o, d) => {
					var S;
					let p = f.routes[o.route.id];
					if (!p || !p.hasLoader) return !1;
					if (E(o, d) || g(o, d)) return !0;
					if (o.route.shouldRevalidate) {
						let T = o.route.shouldRevalidate({
							currentUrl: new URL(
								m.pathname + m.search + m.hash,
								window.origin,
							),
							currentParams: ((S = h[0]) == null ? void 0 : S.params) || {},
							nextUrl: new URL(i, window.origin),
							nextParams: o.params,
							defaultShouldRevalidate: !0,
						});
						if (typeof T == "boolean") return T;
					}
					return !0;
				})
			: [];
}
function Av(i, s, { includeHydrateFallback: h } = {}) {
	return Rv(
		i
			.map((f) => {
				let m = s.routes[f.route.id];
				if (!m) return [];
				let y = [m.module];
				return (
					m.clientActionModule && (y = y.concat(m.clientActionModule)),
					m.clientLoaderModule && (y = y.concat(m.clientLoaderModule)),
					h &&
						m.hydrateFallbackModule &&
						(y = y.concat(m.hydrateFallbackModule)),
					m.imports && (y = y.concat(m.imports)),
					y
				);
			})
			.flat(1),
	);
}
function Rv(i) {
	return [...new Set(i)];
}
function Ov(i) {
	let s = {},
		h = Object.keys(i).sort();
	for (let f of h) s[f] = i[f];
	return s;
}
function Mv(i, s) {
	let h = new Set();
	return (
		new Set(s),
		i.reduce((f, m) => {
			let y = JSON.stringify(Ov(m));
			return (h.has(y) || (h.add(y), f.push({ key: y, link: m })), f);
		}, [])
	);
}
function Uh() {
	let i = z.useContext(_a);
	return (
		Jf(
			i,
			"You must render this element inside a <DataRouterContext.Provider> element",
		),
		i
	);
}
function _v() {
	let i = z.useContext(fi);
	return (
		Jf(
			i,
			"You must render this element inside a <DataRouterStateContext.Provider> element",
		),
		i
	);
}
var kf = z.createContext(void 0);
kf.displayName = "FrameworkContext";
function Ch() {
	let i = z.useContext(kf);
	return (
		Jf(i, "You must render this element inside a <HydratedRouter> element"),
		i
	);
}
function zv(i, s) {
	let h = z.useContext(kf),
		[f, m] = z.useState(!1),
		[y, E] = z.useState(!1),
		{
			onFocus: g,
			onBlur: o,
			onMouseEnter: d,
			onMouseLeave: p,
			onTouchStart: S,
		} = s,
		T = z.useRef(null);
	(z.useEffect(() => {
		if ((i === "render" && E(!0), i === "viewport")) {
			let G = (X) => {
					X.forEach((K) => {
						E(K.isIntersecting);
					});
				},
				Z = new IntersectionObserver(G, { threshold: 0.5 });
			return (
				T.current && Z.observe(T.current),
				() => {
					Z.disconnect();
				}
			);
		}
	}, [i]),
		z.useEffect(() => {
			if (f) {
				let G = setTimeout(() => {
					E(!0);
				}, 100);
				return () => {
					clearTimeout(G);
				};
			}
		}, [f]));
	let C = () => {
			m(!0);
		},
		q = () => {
			(m(!1), E(!1));
		};
	return h
		? i !== "intent"
			? [y, T, {}]
			: [
					y,
					T,
					{
						onFocus: _u(g, C),
						onBlur: _u(o, q),
						onMouseEnter: _u(d, C),
						onMouseLeave: _u(p, q),
						onTouchStart: _u(S, C),
					},
				]
		: [!1, T, {}];
}
function _u(i, s) {
	return (h) => {
		(i && i(h), h.defaultPrevented || s(h));
	};
}
function Dv({ page: i, ...s }) {
	let { router: h } = Uh(),
		f = z.useMemo(() => bh(h.routes, i, h.basename), [h.routes, i, h.basename]);
	return f ? z.createElement(Uv, { page: i, matches: f, ...s }) : null;
}
function Nv(i) {
	let { manifest: s, routeModules: h } = Ch(),
		[f, m] = z.useState([]);
	return (
		z.useEffect(() => {
			let y = !1;
			return (
				Tv(i, s, h).then((E) => {
					y || m(E);
				}),
				() => {
					y = !0;
				}
			);
		}, [i, s, h]),
		f
	);
}
function Uv({ page: i, matches: s, ...h }) {
	let f = El(),
		{ manifest: m, routeModules: y } = Ch(),
		{ basename: E } = Uh(),
		{ loaderData: g, matches: o } = _v(),
		d = z.useMemo(() => uh(i, s, o, m, f, "data"), [i, s, o, m, f]),
		p = z.useMemo(() => uh(i, s, o, m, f, "assets"), [i, s, o, m, f]),
		S = z.useMemo(() => {
			if (i === f.pathname + f.search + f.hash) return [];
			let q = new Set(),
				G = !1;
			if (
				(s.forEach((X) => {
					var F;
					let K = m.routes[X.route.id];
					!K ||
						!K.hasLoader ||
						((!d.some((J) => J.route.id === X.route.id) &&
							X.route.id in g &&
							(F = y[X.route.id]) != null &&
							F.shouldRevalidate) ||
						K.hasClientLoader
							? (G = !0)
							: q.add(X.route.id));
				}),
				q.size === 0)
			)
				return [];
			let Z = bv(i, E, "data");
			return (
				G &&
					q.size > 0 &&
					Z.searchParams.set(
						"_routes",
						s
							.filter((X) => q.has(X.route.id))
							.map((X) => X.route.id)
							.join(","),
					),
				[Z.pathname + Z.search]
			);
		}, [E, g, f, m, d, s, i, y]),
		T = z.useMemo(() => Av(p, m), [p, m]),
		C = Nv(p);
	return z.createElement(
		z.Fragment,
		null,
		S.map((q) =>
			z.createElement("link", {
				key: q,
				rel: "prefetch",
				as: "fetch",
				href: q,
				...h,
			}),
		),
		T.map((q) =>
			z.createElement("link", { key: q, rel: "modulepreload", href: q, ...h }),
		),
		C.map(({ key: q, link: G }) => z.createElement("link", { key: q, ...G })),
	);
}
function Cv(...i) {
	return (s) => {
		i.forEach((h) => {
			typeof h == "function" ? h(s) : h != null && (h.current = s);
		});
	};
}
var jh =
	typeof window < "u" &&
	typeof window.document < "u" &&
	typeof window.document.createElement < "u";
try {
	jh && (window.__reactRouterVersion = "7.7.0");
} catch {}
function jv({ basename: i, children: s, window: h }) {
	let f = z.useRef();
	f.current == null && (f.current = xy({ window: h, v5Compat: !0 }));
	let m = f.current,
		[y, E] = z.useState({ action: m.action, location: m.location }),
		g = z.useCallback(
			(o) => {
				z.startTransition(() => E(o));
			},
			[E],
		);
	return (
		z.useLayoutEffect(() => m.listen(g), [m, g]),
		z.createElement(rv, {
			basename: i,
			children: s,
			location: y.location,
			navigationType: y.action,
			navigator: m,
		})
	);
}
var Hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	$f = z.forwardRef(function (
		{
			onClick: s,
			discover: h = "render",
			prefetch: f = "none",
			relative: m,
			reloadDocument: y,
			replace: E,
			state: g,
			target: o,
			to: d,
			preventScrollReset: p,
			viewTransition: S,
			...T
		},
		C,
	) {
		let { basename: q } = z.useContext(Ue),
			G = typeof d == "string" && Hh.test(d),
			Z,
			X = !1;
		if (typeof d == "string" && G && ((Z = d), jh))
			try {
				let rt = new URL(window.location.href),
					At = d.startsWith("//") ? new URL(rt.protocol + d) : new URL(d),
					Rt = We(At.pathname, q);
				At.origin === rt.origin && Rt != null
					? (d = Rt + At.search + At.hash)
					: (X = !0);
			} catch {
				Re(
					!1,
					`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
				);
			}
		let K = ky(d, { relative: m }),
			[F, J, Y] = zv(f, T),
			st = Bv(d, {
				replace: E,
				state: g,
				target: o,
				preventScrollReset: p,
				relative: m,
				viewTransition: S,
			});
		function ut(rt) {
			(s && s(rt), rt.defaultPrevented || st(rt));
		}
		let nt = z.createElement("a", {
			...T,
			...Y,
			href: Z || K,
			onClick: X || y ? s : ut,
			ref: Cv(C, J),
			target: o,
			"data-discover": !G && h === "render" ? "true" : void 0,
		});
		return F && !G
			? z.createElement(z.Fragment, null, nt, z.createElement(Dv, { page: K }))
			: nt;
	});
$f.displayName = "Link";
var Hv = z.forwardRef(function (
	{
		"aria-current": s = "page",
		caseSensitive: h = !1,
		className: f = "",
		end: m = !1,
		style: y,
		to: E,
		viewTransition: g,
		children: o,
		...d
	},
	p,
) {
	let S = Uu(E, { relative: d.relative }),
		T = El(),
		C = z.useContext(fi),
		{ navigator: q, basename: G } = z.useContext(Ue),
		Z = C != null && Qv(S) && g === !0,
		X = q.encodeLocation ? q.encodeLocation(S).pathname : S.pathname,
		K = T.pathname,
		F =
			C && C.navigation && C.navigation.location
				? C.navigation.location.pathname
				: null;
	(h ||
		((K = K.toLowerCase()),
		(F = F ? F.toLowerCase() : null),
		(X = X.toLowerCase())),
		F && G && (F = We(F, G) || F));
	const J = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
	let Y = K === X || (!m && K.startsWith(X) && K.charAt(J) === "/"),
		st =
			F != null &&
			(F === X || (!m && F.startsWith(X) && F.charAt(X.length) === "/")),
		ut = { isActive: Y, isPending: st, isTransitioning: Z },
		nt = Y ? s : void 0,
		rt;
	typeof f == "function"
		? (rt = f(ut))
		: (rt = [
				f,
				Y ? "active" : null,
				st ? "pending" : null,
				Z ? "transitioning" : null,
			]
				.filter(Boolean)
				.join(" "));
	let At = typeof y == "function" ? y(ut) : y;
	return z.createElement(
		$f,
		{
			...d,
			"aria-current": nt,
			className: rt,
			ref: p,
			style: At,
			to: E,
			viewTransition: g,
		},
		typeof o == "function" ? o(ut) : o,
	);
});
Hv.displayName = "NavLink";
var wv = z.forwardRef(
	(
		{
			discover: i = "render",
			fetcherKey: s,
			navigate: h,
			reloadDocument: f,
			replace: m,
			state: y,
			method: E = Wn,
			action: g,
			onSubmit: o,
			relative: d,
			preventScrollReset: p,
			viewTransition: S,
			...T
		},
		C,
	) => {
		let q = Gv(),
			G = Xv(g, { relative: d }),
			Z = E.toLowerCase() === "get" ? "get" : "post",
			X = typeof g == "string" && Hh.test(g),
			K = (F) => {
				if ((o && o(F), F.defaultPrevented)) return;
				F.preventDefault();
				let J = F.nativeEvent.submitter,
					Y = (J == null ? void 0 : J.getAttribute("formmethod")) || E;
				q(J || F.currentTarget, {
					fetcherKey: s,
					method: Y,
					navigate: h,
					replace: m,
					state: y,
					relative: d,
					preventScrollReset: p,
					viewTransition: S,
				});
			};
		return z.createElement("form", {
			ref: C,
			method: Z,
			action: G,
			onSubmit: f ? o : K,
			...T,
			"data-discover": !X && i === "render" ? "true" : void 0,
		});
	},
);
wv.displayName = "Form";
function qv(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wh(i) {
	let s = z.useContext(_a);
	return (zt(s, qv(i)), s);
}
function Bv(
	i,
	{
		target: s,
		replace: h,
		state: f,
		preventScrollReset: m,
		relative: y,
		viewTransition: E,
	} = {},
) {
	let g = zh(),
		o = El(),
		d = Uu(i, { relative: y });
	return z.useCallback(
		(p) => {
			if (yv(p, s)) {
				p.preventDefault();
				let S = h !== void 0 ? h : zu(o) === zu(d);
				g(i, {
					replace: S,
					state: f,
					preventScrollReset: m,
					relative: y,
					viewTransition: E,
				});
			}
		},
		[o, g, d, h, f, s, i, m, y, E],
	);
}
function P1(i) {
	Re(
		typeof URLSearchParams < "u",
		"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
	);
	let s = z.useRef(Gf(i)),
		h = z.useRef(!1),
		f = El(),
		m = z.useMemo(() => vv(f.search, h.current ? null : s.current), [f.search]),
		y = zh(),
		E = z.useCallback(
			(g, o) => {
				const d = Gf(typeof g == "function" ? g(new URLSearchParams(m)) : g);
				((h.current = !0), y("?" + d, o));
			},
			[y, m],
		);
	return [m, E];
}
var Yv = 0,
	Lv = () => `__${String(++Yv)}__`;
function Gv() {
	let { router: i } = wh("useSubmit"),
		{ basename: s } = z.useContext(Ue),
		h = nv();
	return z.useCallback(
		async (f, m = {}) => {
			let { action: y, method: E, encType: g, formData: o, body: d } = Sv(f, s);
			if (m.navigate === !1) {
				let p = m.fetcherKey || Lv();
				await i.fetch(p, h, m.action || y, {
					preventScrollReset: m.preventScrollReset,
					formData: o,
					body: d,
					formMethod: m.method || E,
					formEncType: m.encType || g,
					flushSync: m.flushSync,
				});
			} else
				await i.navigate(m.action || y, {
					preventScrollReset: m.preventScrollReset,
					formData: o,
					body: d,
					formMethod: m.method || E,
					formEncType: m.encType || g,
					replace: m.replace,
					state: m.state,
					fromRouteId: h,
					flushSync: m.flushSync,
					viewTransition: m.viewTransition,
				});
		},
		[i, s, h],
	);
}
function Xv(i, { relative: s } = {}) {
	let { basename: h } = z.useContext(Ue),
		f = z.useContext(Ce);
	zt(f, "useFormAction must be used inside a RouteContext");
	let [m] = f.matches.slice(-1),
		y = { ...Uu(i || ".", { relative: s }) },
		E = El();
	if (i == null) {
		y.search = E.search;
		let g = new URLSearchParams(y.search),
			o = g.getAll("index");
		if (o.some((p) => p === "")) {
			(g.delete("index"),
				o.filter((S) => S).forEach((S) => g.append("index", S)));
			let p = g.toString();
			y.search = p ? `?${p}` : "";
		}
	}
	return (
		(!i || i === ".") &&
			m.route.index &&
			(y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"),
		h !== "/" && (y.pathname = y.pathname === "/" ? h : $e([h, y.pathname])),
		zu(y)
	);
}
function Qv(i, s = {}) {
	let h = z.useContext(Oh);
	zt(
		h != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
	);
	let { basename: f } = wh("useViewTransitionState"),
		m = Uu(i, { relative: s.relative });
	if (!h.isTransitioning) return !1;
	let y = We(h.currentLocation.pathname, f) || h.currentLocation.pathname,
		E = We(h.nextLocation.pathname, f) || h.nextLocation.pathname;
	return ii(m.pathname, E) != null || ii(m.pathname, y) != null;
}
const Zv = z.createContext({}),
	Vv = ({ children: i }) => N.jsx(Zv.Provider, { value: {}, children: i }),
	Kv = (i) => {
		if (!i) return { error: "jsonSafeParse: string is empty", success: !1 };
		try {
			return { json: JSON.parse(i), success: !0 };
		} catch (s) {
			return (
				console.error("error parsing json", s),
				{ error: `jsonSafeParse: couldn't parse ${i}`, success: !1 }
			);
		}
	};
function nh() {
	if (typeof window.crypto.randomUUID == "function")
		return window.crypto.randomUUID();
	let i = "";
	for (let s = 0; s < 36; s++)
		if ([8, 13, 18, 23].includes(s)) i = i + "-";
		else {
			const h = Math.floor(36 * Math.random());
			i = i + h.toString(36);
		}
	return i;
}
const Hf = "DICE_CITY_OPTIONS",
	qh = {
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
	Bh = z.createContext({ options: qh, setOptions: () => {} }),
	Jv = ({ children: i }) => {
		const s = localStorage.getItem(Hf);
		let h = {};
		const f = Kv(s);
		f.success && (h = f.json);
		const [m, y] = z.useState({ ...qh, ...h });
		return (
			z.useEffect(() => {
				(!m.playerId || !m.playerPassword) &&
					y((E) => {
						const g = { ...E };
						(g.playerId || (g.playerId = nh()),
							g.playerPassword || (g.playerPassword = nh()));
						const { ping: o, ...d } = g;
						return (localStorage.setItem(Hf, JSON.stringify(d)), g);
					});
			}, []),
			N.jsx(Bh.Provider, {
				value: {
					options: m,
					setOptions: (E) => {
						y((g) => {
							const o = { ...g, ...E },
								{ ping: d, ...p } = o;
							return (localStorage.setItem(Hf, JSON.stringify(p)), o);
						});
					},
				},
				children: i,
			})
		);
	},
	oi = () => z.useContext(Bh),
	kv = "modulepreload",
	$v = function (i) {
		return "/" + i;
	},
	ih = {},
	Wf = function (s, h, f) {
		let m = Promise.resolve();
		if (h && h.length > 0) {
			document.getElementsByTagName("link");
			const E = document.querySelector("meta[property=csp-nonce]"),
				g =
					(E == null ? void 0 : E.nonce) ||
					(E == null ? void 0 : E.getAttribute("nonce"));
			m = Promise.allSettled(
				h.map((o) => {
					if (((o = $v(o)), o in ih)) return;
					ih[o] = !0;
					const d = o.endsWith(".css"),
						p = d ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${o}"]${p}`)) return;
					const S = document.createElement("link");
					if (
						((S.rel = d ? "stylesheet" : kv),
						d || (S.as = "script"),
						(S.crossOrigin = ""),
						(S.href = o),
						g && S.setAttribute("nonce", g),
						document.head.appendChild(S),
						d)
					)
						return new Promise((T, C) => {
							(S.addEventListener("load", T),
								S.addEventListener("error", () =>
									C(new Error(`Unable to preload CSS for ${o}`)),
								));
						});
				}),
			);
		}
		function y(E) {
			const g = new Event("vite:preloadError", { cancelable: !0 });
			if (((g.payload = E), window.dispatchEvent(g), !g.defaultPrevented))
				throw E;
		}
		return m.then((E) => {
			for (const g of E || []) g.status === "rejected" && y(g.reason);
			return s().catch(y);
		});
	};
function Yh() {
	return N.jsx("div", {
		className: "flex h-full items-center justify-center",
		children: N.jsx("div", {
			className: "animate-spin-loading rounded-full border p-4",
			children: "Loading",
		}),
	});
}
const I1 = Object.freeze(
	Object.defineProperty({ __proto__: null, default: Yh }, Symbol.toStringTag, {
		value: "Module",
	}),
);
function ci({ children: i, className: s }) {
	return N.jsx("div", {
		className: `mx-1 first:ml-0 last:mr-0 ${s || ""}`,
		children: i,
	});
}
function Wv() {
	const {
			options: { playerName: i },
			setOptions: s,
		} = oi(),
		h = z.useRef(null),
		[f, m] = z.useState(!i),
		[y, E] = z.useState(i);
	return (
		z.useEffect(() => {
			i ||
				setTimeout(() => {
					var g;
					(g = h.current) == null || g.focus();
				});
		}, []),
		N.jsx(ci, {
			children: f
				? N.jsxs("form", {
						onSubmit: (g) => {
							(g.preventDefault(), y && (s({ playerName: y }), m(!1)));
						},
						children: [
							N.jsx("input", {
								className:
									"rounded-l border border-r-0 border-gray-600 px-2 dark:border-gray-300 dark:bg-gray-600",
								ref: h,
								type: "text",
								onChange: (g) => {
									E(g.target.value);
								},
								value: y,
								placeholder: "Enter your name",
								required: !0,
							}),
							N.jsx("button", {
								className:
									"rounded-r border border-gray-600 px-2 py-0 dark:border-gray-300",
								children: "Save",
							}),
						],
					})
				: N.jsxs(N.Fragment, {
						children: [
							N.jsx("span", { className: "mr-2", children: i }),
							N.jsx("button", {
								className:
									"rounded border border-gray-600 px-2 py-0 dark:border-gray-300",
								onClick: () => {
									(m(!0),
										setTimeout(() => {
											if (h.current) {
												const g = h.current;
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
function Pn({ children: i, legend: s }) {
	return N.jsxs("fieldset", {
		className:
			"border border-gray-700 p-2 dark:border-gray-300 dark:bg-gray-800",
		children: [
			!!s && N.jsx("legend", { className: "-mb-2 px-0.5", children: s }),
			i,
		],
	});
}
function Fv({ darkMode: i, setOptions: s }) {
	return N.jsxs(Pn, {
		legend: "Colour Theme",
		children: [
			N.jsxs("label", {
				className: "block",
				children: [
					N.jsx("input", {
						onChange: () => {
							s({ darkMode: "dark" });
						},
						type: "radio",
						value: "dark",
						name: "darkMode",
						checked: i === "dark",
					}),
					" Dark Mode",
				],
			}),
			N.jsxs("label", {
				className: "block",
				children: [
					N.jsx("input", {
						onChange: () => {
							s({ darkMode: "light" });
						},
						type: "radio",
						value: "light",
						name: "darkMode",
						checked: i === "light",
					}),
					" Light Mode",
				],
			}),
			N.jsxs("label", {
				className: "block",
				children: [
					N.jsx("input", {
						onChange: () => {
							s({ darkMode: "system" });
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
function Pv() {
	const { options: i, setOptions: s } = oi(),
		h = z.useRef(new Audio("/dice-roll.mp3")).current,
		f = z.useRef(new Audio("/chord-ceg.mp3")).current;
	return N.jsx(ci, {
		className: "relative",
		children: N.jsxs("details", {
			children: [
				N.jsx("summary", { children: "Options" }),
				N.jsxs("div", {
					className:
						"absolute right-0 top-full z-30 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800",
					children: [
						N.jsx(Fv, { darkMode: i.darkMode, setOptions: s }),
						N.jsxs(Pn, {
							legend: "Show Names",
							children: [
								N.jsxs("label", {
									className: "block",
									children: [
										N.jsx("input", {
											type: "checkbox",
											checked: i.showNamesPublic,
											onChange: () => {
												s({ showNamesPublic: !i.showNamesPublic });
											},
										}),
										" Public Games",
									],
								}),
								N.jsxs("label", {
									className: "block",
									children: [
										N.jsx("input", {
											type: "checkbox",
											checked: i.showNames,
											onChange: () => {
												s({ showNames: !i.showNames });
											},
										}),
										" Private Games",
									],
								}),
							],
						}),
						N.jsxs(Pn, {
							legend: "Misc.",
							children: [
								N.jsxs("label", {
									className: "block",
									children: [
										N.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowCities,
											onChange: () => {
												s({ alwaysShowCities: !i.alwaysShowCities });
											},
										}),
										"  Always Show Cities",
									],
								}),
								N.jsxs("label", {
									className: "block",
									children: [
										N.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowSupply,
											onChange: () => {
												s({ alwaysShowSupply: !i.alwaysShowSupply });
											},
										}),
										"  Always Show Supply",
									],
								}),
								N.jsxs("label", {
									className: "block",
									children: [
										N.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowEstablishmentList,
											onChange: () => {
												s({
													alwaysShowEstablishmentList:
														!i.alwaysShowEstablishmentList,
												});
											},
										}),
										"  Always Show Establishment List",
									],
								}),
								N.jsxs("label", {
									className: "block",
									children: [
										N.jsx("input", {
											type: "checkbox",
											checked: !i.hideInstructions,
											onChange: () => {
												s({ hideInstructions: !i.hideInstructions });
											},
										}),
										"  Always Show Instructions",
									],
								}),
								N.jsxs("label", {
									className: "block",
									children: [
										N.jsx("input", {
											type: "checkbox",
											checked: i.newestEventFirst,
											onChange: () => {
												s({ newestEventFirst: !i.newestEventFirst });
											},
										}),
										"  Newest Turn Event On Top",
									],
								}),
								N.jsxs("label", {
									className: "flex items-center gap-4",
									children: [
										N.jsxs("div", {
											children: [
												N.jsx("span", {
													className: "font-mono",
													children: i.turnEventSummaryCount,
												}),
												N.jsx("span", {
													children: " Turn Event Summary Items",
												}),
											],
										}),
										N.jsx("input", {
											className: "max-w-24",
											type: "range",
											min: 0,
											max: 5,
											step: 1,
											value: i.turnEventSummaryCount,
											onChange: (m) => {
												s({
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
						N.jsx(Pn, {
							legend: "Volume",
							children: N.jsx("table", {
								className: "w-full",
								children: N.jsxs("tbody", {
									children: [
										N.jsxs("tr", {
											children: [
												N.jsx("td", { children: "Dice Roll" }),
												N.jsx("td", {
													children: N.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: N.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															value: i.diceRollVolume,
															min: 0,
															max: 1,
															step: 0.01,
															onChange: (m) => {
																s({
																	diceRollVolume: parseFloat(
																		m.currentTarget.value,
																	),
																});
															},
															onMouseUp: (m) => {
																((h.volume = parseFloat(m.currentTarget.value)),
																	h.play());
															},
														}),
													}),
												}),
											],
										}),
										N.jsxs("tr", {
											children: [
												N.jsx("td", { children: "Your Turn" }),
												N.jsx("td", {
													children: N.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: N.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															min: 0,
															max: 1,
															step: 0.01,
															value: i.yourTurnVolume,
															onChange: (m) => {
																s({
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
function Iv() {
	const { options: i } = oi();
	return N.jsxs("div", {
		className: "absolute mb-1 mt-2 flex w-full flex-wrap justify-end",
		children: [
			N.jsx("div", { className: "basis-1" }),
			N.jsx(Wv, {}),
			typeof i.ping == "number" &&
				N.jsxs("div", { children: ["Ping: ", i.ping, " ms"] }),
			N.jsx("div", { className: "grow" }),
			N.jsx(Pv, {}),
			N.jsx(ci, { children: N.jsx($f, { to: "/", children: "Home" }) }),
			N.jsx(ci, {
				children: N.jsx("a", {
					target: "_blank",
					href: "https://github.com/nick-ng/dice-city",
					children: "GitHub",
				}),
			}),
			N.jsx("div", { className: "basis-1" }),
		],
	});
}
var In = { exports: {} },
	t1 = In.exports,
	ch;
function e1() {
	return (
		ch ||
			((ch = 1),
			(function (i) {
				(function (s, h, f) {
					function m(o) {
						var d = this,
							p = g();
						((d.next = function () {
							var S = 2091639 * d.s0 + d.c * 23283064365386963e-26;
							return ((d.s0 = d.s1), (d.s1 = d.s2), (d.s2 = S - (d.c = S | 0)));
						}),
							(d.c = 1),
							(d.s0 = p(" ")),
							(d.s1 = p(" ")),
							(d.s2 = p(" ")),
							(d.s0 -= p(o)),
							d.s0 < 0 && (d.s0 += 1),
							(d.s1 -= p(o)),
							d.s1 < 0 && (d.s1 += 1),
							(d.s2 -= p(o)),
							d.s2 < 0 && (d.s2 += 1),
							(p = null));
					}
					function y(o, d) {
						return (
							(d.c = o.c),
							(d.s0 = o.s0),
							(d.s1 = o.s1),
							(d.s2 = o.s2),
							d
						);
					}
					function E(o, d) {
						var p = new m(o),
							S = d && d.state,
							T = p.next;
						return (
							(T.int32 = function () {
								return (p.next() * 4294967296) | 0;
							}),
							(T.double = function () {
								return T() + ((T() * 2097152) | 0) * 11102230246251565e-32;
							}),
							(T.quick = T),
							S &&
								(typeof S == "object" && y(S, p),
								(T.state = function () {
									return y(p, {});
								})),
							T
						);
					}
					function g() {
						var o = 4022871197,
							d = function (p) {
								p = String(p);
								for (var S = 0; S < p.length; S++) {
									o += p.charCodeAt(S);
									var T = 0.02519603282416938 * o;
									((o = T >>> 0),
										(T -= o),
										(T *= o),
										(o = T >>> 0),
										(T -= o),
										(o += T * 4294967296));
								}
								return (o >>> 0) * 23283064365386963e-26;
							};
						return d;
					}
					h && h.exports ? (h.exports = E) : (this.alea = E);
				})(t1, i);
			})(In)),
		In.exports
	);
}
var ti = { exports: {} },
	l1 = ti.exports,
	fh;
function a1() {
	return (
		fh ||
			((fh = 1),
			(function (i) {
				(function (s, h, f) {
					function m(g) {
						var o = this,
							d = "";
						((o.x = 0),
							(o.y = 0),
							(o.z = 0),
							(o.w = 0),
							(o.next = function () {
								var S = o.x ^ (o.x << 11);
								return (
									(o.x = o.y),
									(o.y = o.z),
									(o.z = o.w),
									(o.w ^= (o.w >>> 19) ^ S ^ (S >>> 8))
								);
							}),
							g === (g | 0) ? (o.x = g) : (d += g));
						for (var p = 0; p < d.length + 64; p++)
							((o.x ^= d.charCodeAt(p) | 0), o.next());
					}
					function y(g, o) {
						return ((o.x = g.x), (o.y = g.y), (o.z = g.z), (o.w = g.w), o);
					}
					function E(g, o) {
						var d = new m(g),
							p = o && o.state,
							S = function () {
								return (d.next() >>> 0) / 4294967296;
							};
						return (
							(S.double = function () {
								do
									var T = d.next() >>> 11,
										C = (d.next() >>> 0) / 4294967296,
										q = (T + C) / (1 << 21);
								while (q === 0);
								return q;
							}),
							(S.int32 = d.next),
							(S.quick = S),
							p &&
								(typeof p == "object" && y(p, d),
								(S.state = function () {
									return y(d, {});
								})),
							S
						);
					}
					h && h.exports ? (h.exports = E) : (this.xor128 = E);
				})(l1, i);
			})(ti)),
		ti.exports
	);
}
var ei = { exports: {} },
	u1 = ei.exports,
	rh;
function n1() {
	return (
		rh ||
			((rh = 1),
			(function (i) {
				(function (s, h, f) {
					function m(g) {
						var o = this,
							d = "";
						((o.next = function () {
							var S = o.x ^ (o.x >>> 2);
							return (
								(o.x = o.y),
								(o.y = o.z),
								(o.z = o.w),
								(o.w = o.v),
								((o.d = (o.d + 362437) | 0) +
									(o.v = o.v ^ (o.v << 4) ^ (S ^ (S << 1)))) |
									0
							);
						}),
							(o.x = 0),
							(o.y = 0),
							(o.z = 0),
							(o.w = 0),
							(o.v = 0),
							g === (g | 0) ? (o.x = g) : (d += g));
						for (var p = 0; p < d.length + 64; p++)
							((o.x ^= d.charCodeAt(p) | 0),
								p == d.length && (o.d = (o.x << 10) ^ (o.x >>> 4)),
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
					function E(g, o) {
						var d = new m(g),
							p = o && o.state,
							S = function () {
								return (d.next() >>> 0) / 4294967296;
							};
						return (
							(S.double = function () {
								do
									var T = d.next() >>> 11,
										C = (d.next() >>> 0) / 4294967296,
										q = (T + C) / (1 << 21);
								while (q === 0);
								return q;
							}),
							(S.int32 = d.next),
							(S.quick = S),
							p &&
								(typeof p == "object" && y(p, d),
								(S.state = function () {
									return y(d, {});
								})),
							S
						);
					}
					h && h.exports ? (h.exports = E) : (this.xorwow = E);
				})(u1, i);
			})(ei)),
		ei.exports
	);
}
var li = { exports: {} },
	i1 = li.exports,
	oh;
function c1() {
	return (
		oh ||
			((oh = 1),
			(function (i) {
				(function (s, h, f) {
					function m(g) {
						var o = this;
						o.next = function () {
							var p = o.x,
								S = o.i,
								T,
								C;
							return (
								(T = p[S]),
								(T ^= T >>> 7),
								(C = T ^ (T << 24)),
								(T = p[(S + 1) & 7]),
								(C ^= T ^ (T >>> 10)),
								(T = p[(S + 3) & 7]),
								(C ^= T ^ (T >>> 3)),
								(T = p[(S + 4) & 7]),
								(C ^= T ^ (T << 7)),
								(T = p[(S + 7) & 7]),
								(T = T ^ (T << 13)),
								(C ^= T ^ (T << 9)),
								(p[S] = C),
								(o.i = (S + 1) & 7),
								C
							);
						};
						function d(p, S) {
							var T,
								C = [];
							if (S === (S | 0)) C[0] = S;
							else
								for (S = "" + S, T = 0; T < S.length; ++T)
									C[T & 7] =
										(C[T & 7] << 15) ^
										((S.charCodeAt(T) + C[(T + 1) & 7]) << 13);
							for (; C.length < 8; ) C.push(0);
							for (T = 0; T < 8 && C[T] === 0; ++T);
							for (
								T == 8 ? (C[7] = -1) : C[T], p.x = C, p.i = 0, T = 256;
								T > 0;
								--T
							)
								p.next();
						}
						d(o, g);
					}
					function y(g, o) {
						return ((o.x = g.x.slice()), (o.i = g.i), o);
					}
					function E(g, o) {
						g == null && (g = +new Date());
						var d = new m(g),
							p = o && o.state,
							S = function () {
								return (d.next() >>> 0) / 4294967296;
							};
						return (
							(S.double = function () {
								do
									var T = d.next() >>> 11,
										C = (d.next() >>> 0) / 4294967296,
										q = (T + C) / (1 << 21);
								while (q === 0);
								return q;
							}),
							(S.int32 = d.next),
							(S.quick = S),
							p &&
								(p.x && y(p, d),
								(S.state = function () {
									return y(d, {});
								})),
							S
						);
					}
					h && h.exports ? (h.exports = E) : (this.xorshift7 = E);
				})(i1, i);
			})(li)),
		li.exports
	);
}
var ai = { exports: {} },
	f1 = ai.exports,
	sh;
function r1() {
	return (
		sh ||
			((sh = 1),
			(function (i) {
				(function (s, h, f) {
					function m(g) {
						var o = this;
						o.next = function () {
							var p = o.w,
								S = o.X,
								T = o.i,
								C,
								q;
							return (
								(o.w = p = (p + 1640531527) | 0),
								(q = S[(T + 34) & 127]),
								(C = S[(T = (T + 1) & 127)]),
								(q ^= q << 13),
								(C ^= C << 17),
								(q ^= q >>> 15),
								(C ^= C >>> 12),
								(q = S[T] = q ^ C),
								(o.i = T),
								(q + (p ^ (p >>> 16))) | 0
							);
						};
						function d(p, S) {
							var T,
								C,
								q,
								G,
								Z,
								X = [],
								K = 128;
							for (
								S === (S | 0)
									? ((C = S), (S = null))
									: ((S = S + "\0"), (C = 0), (K = Math.max(K, S.length))),
									q = 0,
									G = -32;
								G < K;
								++G
							)
								(S && (C ^= S.charCodeAt((G + 32) % S.length)),
									G === 0 && (Z = C),
									(C ^= C << 10),
									(C ^= C >>> 15),
									(C ^= C << 4),
									(C ^= C >>> 13),
									G >= 0 &&
										((Z = (Z + 1640531527) | 0),
										(T = X[G & 127] ^= C + Z),
										(q = T == 0 ? q + 1 : 0)));
							for (
								q >= 128 && (X[((S && S.length) || 0) & 127] = -1),
									q = 127,
									G = 4 * 128;
								G > 0;
								--G
							)
								((C = X[(q + 34) & 127]),
									(T = X[(q = (q + 1) & 127)]),
									(C ^= C << 13),
									(T ^= T << 17),
									(C ^= C >>> 15),
									(T ^= T >>> 12),
									(X[q] = C ^ T));
							((p.w = Z), (p.X = X), (p.i = q));
						}
						d(o, g);
					}
					function y(g, o) {
						return ((o.i = g.i), (o.w = g.w), (o.X = g.X.slice()), o);
					}
					function E(g, o) {
						g == null && (g = +new Date());
						var d = new m(g),
							p = o && o.state,
							S = function () {
								return (d.next() >>> 0) / 4294967296;
							};
						return (
							(S.double = function () {
								do
									var T = d.next() >>> 11,
										C = (d.next() >>> 0) / 4294967296,
										q = (T + C) / (1 << 21);
								while (q === 0);
								return q;
							}),
							(S.int32 = d.next),
							(S.quick = S),
							p &&
								(p.X && y(p, d),
								(S.state = function () {
									return y(d, {});
								})),
							S
						);
					}
					h && h.exports ? (h.exports = E) : (this.xor4096 = E);
				})(f1, i);
			})(ai)),
		ai.exports
	);
}
var ui = { exports: {} },
	o1 = ui.exports,
	dh;
function s1() {
	return (
		dh ||
			((dh = 1),
			(function (i) {
				(function (s, h, f) {
					function m(g) {
						var o = this,
							d = "";
						((o.next = function () {
							var S = o.b,
								T = o.c,
								C = o.d,
								q = o.a;
							return (
								(S = (S << 25) ^ (S >>> 7) ^ T),
								(T = (T - C) | 0),
								(C = (C << 24) ^ (C >>> 8) ^ q),
								(q = (q - S) | 0),
								(o.b = S = (S << 20) ^ (S >>> 12) ^ T),
								(o.c = T = (T - C) | 0),
								(o.d = (C << 16) ^ (T >>> 16) ^ q),
								(o.a = (q - S) | 0)
							);
						}),
							(o.a = 0),
							(o.b = 0),
							(o.c = -1640531527),
							(o.d = 1367130551),
							g === Math.floor(g)
								? ((o.a = (g / 4294967296) | 0), (o.b = g | 0))
								: (d += g));
						for (var p = 0; p < d.length + 20; p++)
							((o.b ^= d.charCodeAt(p) | 0), o.next());
					}
					function y(g, o) {
						return ((o.a = g.a), (o.b = g.b), (o.c = g.c), (o.d = g.d), o);
					}
					function E(g, o) {
						var d = new m(g),
							p = o && o.state,
							S = function () {
								return (d.next() >>> 0) / 4294967296;
							};
						return (
							(S.double = function () {
								do
									var T = d.next() >>> 11,
										C = (d.next() >>> 0) / 4294967296,
										q = (T + C) / (1 << 21);
								while (q === 0);
								return q;
							}),
							(S.int32 = d.next),
							(S.quick = S),
							p &&
								(typeof p == "object" && y(p, d),
								(S.state = function () {
									return y(d, {});
								})),
							S
						);
					}
					h && h.exports ? (h.exports = E) : (this.tychei = E);
				})(o1, i);
			})(ui)),
		ui.exports
	);
}
var ni = { exports: {} };
const d1 = {},
	h1 = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: d1 },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	m1 = ry(h1);
var y1 = ni.exports,
	hh;
function v1() {
	return (
		hh ||
			((hh = 1),
			(function (i) {
				(function (s, h, f) {
					var m = 256,
						y = 6,
						E = 52,
						g = "random",
						o = f.pow(m, y),
						d = f.pow(2, E),
						p = d * 2,
						S = m - 1,
						T;
					function C(J, Y, st) {
						var ut = [];
						Y = Y == !0 ? { entropy: !0 } : Y || {};
						var nt = X(Z(Y.entropy ? [J, F(h)] : (J ?? K()), 3), ut),
							rt = new q(ut),
							At = function () {
								for (var Rt = rt.g(y), Et = o, Yt = 0; Rt < d; )
									((Rt = (Rt + Yt) * m), (Et *= m), (Yt = rt.g(1)));
								for (; Rt >= p; ) ((Rt /= 2), (Et /= 2), (Yt >>>= 1));
								return (Rt + Yt) / Et;
							};
						return (
							(At.int32 = function () {
								return rt.g(4) | 0;
							}),
							(At.quick = function () {
								return rt.g(4) / 4294967296;
							}),
							(At.double = At),
							X(F(rt.S), h),
							(
								Y.pass ||
								st ||
								function (Rt, Et, Yt, Jt) {
									return (
										Jt &&
											(Jt.S && G(Jt, rt),
											(Rt.state = function () {
												return G(rt, {});
											})),
										Yt ? ((f[g] = Rt), Et) : Rt
									);
								}
							)(At, nt, "global" in Y ? Y.global : this == f, Y.state)
						);
					}
					function q(J) {
						var Y,
							st = J.length,
							ut = this,
							nt = 0,
							rt = (ut.i = ut.j = 0),
							At = (ut.S = []);
						for (st || (J = [st++]); nt < m; ) At[nt] = nt++;
						for (nt = 0; nt < m; nt++)
							((At[nt] = At[(rt = S & (rt + J[nt % st] + (Y = At[nt])))]),
								(At[rt] = Y));
						(ut.g = function (Rt) {
							for (var Et, Yt = 0, Jt = ut.i, Ut = ut.j, D = ut.S; Rt--; )
								((Et = D[(Jt = S & (Jt + 1))]),
									(Yt =
										Yt * m +
										D[S & ((D[Jt] = D[(Ut = S & (Ut + Et))]) + (D[Ut] = Et))]));
							return ((ut.i = Jt), (ut.j = Ut), Yt);
						})(m);
					}
					function G(J, Y) {
						return ((Y.i = J.i), (Y.j = J.j), (Y.S = J.S.slice()), Y);
					}
					function Z(J, Y) {
						var st = [],
							ut = typeof J,
							nt;
						if (Y && ut == "object")
							for (nt in J)
								try {
									st.push(Z(J[nt], Y - 1));
								} catch {}
						return st.length ? st : ut == "string" ? J : J + "\0";
					}
					function X(J, Y) {
						for (var st = J + "", ut, nt = 0; nt < st.length; )
							Y[S & nt] = S & ((ut ^= Y[S & nt] * 19) + st.charCodeAt(nt++));
						return F(Y);
					}
					function K() {
						try {
							var J;
							return (
								T && (J = T.randomBytes)
									? (J = J(m))
									: ((J = new Uint8Array(m)),
										(s.crypto || s.msCrypto).getRandomValues(J)),
								F(J)
							);
						} catch {
							var Y = s.navigator,
								st = Y && Y.plugins;
							return [+new Date(), s, st, s.screen, F(h)];
						}
					}
					function F(J) {
						return String.fromCharCode.apply(0, J);
					}
					if ((X(f.random(), h), i.exports)) {
						i.exports = C;
						try {
							T = m1;
						} catch {}
					} else f["seed" + g] = C;
				})(typeof self < "u" ? self : y1, [], Math);
			})(ni)),
		ni.exports
	);
}
var wf, mh;
function g1() {
	if (mh) return wf;
	mh = 1;
	var i = e1(),
		s = a1(),
		h = n1(),
		f = c1(),
		m = r1(),
		y = s1(),
		E = v1();
	return (
		(E.alea = i),
		(E.xor128 = s),
		(E.xorwow = h),
		(E.xorshift7 = f),
		(E.xor4096 = m),
		(E.tychei = y),
		(wf = E),
		wf
	);
}
var p1 = g1();
const S1 = Sh(p1),
	b1 = [
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
	x1 = ["Robot", "Locomotive", "Automobile"],
	E1 = ["Cactus", "Sunflower", "Poppy", "Banana"],
	T1 = ["ChristopherNolan"],
	A1 = ["MonopolySet"],
	yh = Object.freeze([...new Set([...b1, ...x1, ...E1, ...T1, ...A1])]),
	R1 = 1,
	qf = 2,
	O1 = 4,
	vh = 5,
	M1 = 7,
	_1 = 8,
	z1 = 10,
	D1 = [
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
	N1 = ["Singular", "Multiple", "One", "Two", "Extra"],
	U1 = ["Big", "Small", "Huge", "Little", "Colossal", "Tiny"],
	C1 = [
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
	j1 = ["Brutal", "Kind", "Nippy", "Savage"],
	H1 = ["Old", "Young", "Elder", "Adolescent"],
	w1 = ["Quick", "Slow", "Fast", "Sluggish"],
	q1 = [
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
	B1 = ["Solid", "Hard", "Squishy"],
	Y1 = ["Poisonous", "Venomous"],
	L1 = Object.freeze(
		[
			...D1.map((i) => ({
				value: i,
				type: "colour",
				order: _1,
				allowMultiple: !1,
			})),
			...N1.map((i) => ({
				value: i,
				type: "count",
				order: R1,
				allowMultiple: !1,
			})),
			...U1.map((i) => ({
				value: i,
				type: "size",
				order: O1,
				allowMultiple: !1,
			})),
			...C1.map((i) => ({
				value: i,
				type: "nature",
				order: qf,
				allowMultiple: !1,
			})),
			...j1.map((i) => ({
				value: i,
				type: "general_opinion",
				order: qf,
				allowMultiple: !0,
			})),
			...H1.map((i) => ({
				value: i,
				type: "age",
				order: M1,
				allowMultiple: !1,
			})),
			...w1.map((i) => ({
				value: i,
				type: "speed",
				order: qf,
				allowMultiple: !1,
			})),
			...q1.map((i) => ({
				value: i,
				type: "material",
				order: z1,
				allowMultiple: !1,
			})),
			...B1.map((i) => ({
				value: i,
				type: "physical_quality",
				order: vh,
				allowMultiple: !1,
			})),
			...Y1.map((i) => ({
				value: i,
				type: "physical_quality_b",
				order: vh,
				allowMultiple: !0,
			})),
		].map((i) => Object.freeze(i)),
	),
	G1 = 2,
	Lh = (i, s = 2) => {
		const h = S1(i),
			f = Math.floor(yh.length * h()),
			m = yh[f],
			y = [],
			E = [];
		for (let g = 0; g < s; g++) {
			const o = L1.filter((p) => {
					const { type: S, value: T } = p;
					return !E.includes(S) && !y.map((C) => C.value).includes(T);
				}),
				d = Math.floor(o.length * h());
			(o[d].allowMultiple || E.push(o[d].type), y.push(o[d]));
		}
		return [
			...y.sort((g, o) => g.order - o.order).map(({ value: g }) => g),
			m,
		].join("");
	},
	X1 = (i, s, h = !1) => (s && h ? s : Lh(i, G1)),
	tg = (i, s, h, f) =>
		i.reduce(
			(m, { id: y, name: E }) => m.replaceAll(`%${y}%`, X1(y, E, s || y === h)),
			f,
		),
	gh = "NICK_NAME_GEN_STORE";
function Q1() {
	const [i, s] = z.useState([]),
		[h, f] = z.useState(""),
		[m, y] = z.useState(Date.now().toString()),
		[E, g] = z.useState(2),
		o = Lh(m, E),
		d = z.useCallback(
			(p) => {
				localStorage.setItem(
					gh,
					JSON.stringify({ namePrefixes: i, adjectiveCount: E, ...p }),
				);
			},
			[i.join(""), E],
		);
	return (
		z.useEffect(() => {
			try {
				const p = localStorage.getItem(gh);
				if (typeof p == "string") {
					const S = JSON.parse(p);
					(s((T) => (S == null ? void 0 : S.namePrefixes) || T),
						g((T) => (S == null ? void 0 : S.adjectiveCount) || T),
						f(
							(T) =>
								T ||
								(S == null
									? void 0
									: S.namePrefixes.join(`
`)),
						));
				}
			} catch {}
		}, []),
		N.jsxs("div", {
			className: "left-0 right-0 mx-auto max-w-prose",
			children: [
				N.jsx("textarea", {
					className:
						"mb-2 block resize-none rounded border border-gray-400 bg-white px-0.5 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
					spellCheck: !1,
					value: h,
					onChange: (p) => {
						f(p.target.value);
						const S = p.target.value
							.split(
								`
`,
							)
							.map((T) => T.trim())
							.filter((T) => T);
						(s(S), d({ namePrefixes: S }));
					},
				}),
				N.jsxs("label", {
					className: "block",
					children: [
						"Adjective Count ",
						N.jsx("input", {
							className:
								"rounded border border-gray-200 bg-white px-0.5 text-right text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
							type: "number",
							value: E,
							onChange: (p) => {
								const S = parseInt(p.target.value, 10) || 0;
								(d({ adjectiveCount: S }), g(S));
							},
						}),
					],
				}),
				N.jsx("button", {
					className: "button-default",
					onClick: () => {
						y(Date.now().toString());
					},
					children: "Randomise",
				}),
				N.jsx("ul", {
					className: "ml-5 mt-2 list-disc",
					children: ["", ...i].map((p, S) => {
						const T = `${p}${o}`;
						return N.jsxs(
							"li",
							{
								children: [
									T,
									" (",
									T.length,
									") ",
									N.jsx("button", {
										className: "button-default",
										onClick: () => {
											navigator.clipboard.writeText(T);
										},
										children: "Copy",
									}),
								],
							},
							`${p}-${S}`,
						);
					}),
				}),
			],
		})
	);
}
const Xf = {
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
	Z1 = new Array(12).fill(0).map((i, s) => s + 1);
function Bf(i, s) {
	if (!i) return 0;
	let h = 0;
	return (
		i.includes("🎲🎲")
			? (h = s.reduce((f, m) => f + Xf["🎲🎲"][m], 0))
			: (h = s.reduce((f, m) => f + Xf["🎲"][m], 0)),
		i.includes("➕") ? 1 - (1 - h) * (1 - h) : i.includes("➖") ? h * h : h
	);
}
function V1() {
	const [i, s] = z.useState(null),
		[h, f] = z.useState([]),
		m = Bf(i, h);
	return N.jsxs("div", {
		className: "px-2",
		children: [
			N.jsx("h2", { children: "Probability" }),
			N.jsx("p", {
				className: "max-w-prose",
				children:
					"This table has the probability of getting each dice roll total.",
			}),
			N.jsx("p", {
				className: "max-w-prose",
				children:
					"To show the probability of getting one of a number of dice roll totals, click on the columns.",
			}),
			N.jsx("p", {
				className: "max-w-prose",
				children: "🎲: The number of dice rolled.",
			}),
			N.jsx("p", {
				className: "max-w-prose",
				children:
					"➕🛍️: If the first dice roll was one of the selected totals, keep the result. If the first dice roll wasn't one of the selected totals, use the Shopping Mall re-roll.",
			}),
			N.jsx("p", {
				className: "max-w-prose",
				children:
					"➖🛍️: If the first dice roll was one of the selected totals, use the Shopping Mall re-roll. If the first dice roll wasn't one of the selected totals, keep the result.",
			}),
			N.jsx("button", {
				className: "button-default",
				onClick: () => {
					(f([]), s(null));
				},
				children: "Reset",
			}),
			N.jsxs("table", {
				className: "my-2",
				children: [
					N.jsx("thead", {
						children: N.jsxs("tr", {
							children: [
								N.jsx("th", {
									className: "border-default px-2",
									children:
										m > 0
											? N.jsx("button", {
													className: "w-full",
													onClick: () => {
														(f([]), s(null));
													},
													children: m.toFixed(3),
												})
											: null,
								}),
								Z1.map((y, E) =>
									N.jsx(
										"th",
										{
											className: `border-default ${h.includes(E) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
											children: N.jsx("button", {
												className: "px-2 w-full ",
												onClick: () => {
													f((g) =>
														g.includes(E)
															? g.filter((o) => o !== E)
															: [...g, E],
													);
												},
												children: y,
											}),
										},
										y,
									),
								),
								N.jsx("th", {
									className: "border-default px-2",
									children: "Total",
								}),
							],
						}),
					}),
					N.jsx("tbody", {
						children: Object.entries(Xf).map(([y, E]) =>
							N.jsxs(
								"tr",
								{
									className: "dark:odd:bg-gray-700 odd:bg-gray-100",
									children: [
										N.jsx("td", {
											className: "border-default text-left px-2",
											children: y,
										}),
										E.map((g, o) =>
											N.jsx(
												"td",
												{
													className: `border-default ${h.includes(o) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
													children:
														g > 0 &&
														N.jsx("button", {
															className: "px-2 w-full ",
															onClick: () => {
																f((d) =>
																	d.includes(o)
																		? d.filter((p) => p !== o)
																		: [...d, o],
																);
															},
															children: g.toFixed(3),
														}),
												},
												o,
											),
										),
										N.jsx("td", {
											className: "border-default text-left px-2",
											children: N.jsx("span", {
												className: Bf(y, h) > 0 ? "" : "opacity-0",
												children: Bf(y, h).toFixed(3),
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
const K1 = z.lazy(() =>
		Wf(() => import("./index-CWLGTKus.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
	),
	J1 = z.lazy(() => Wf(() => import("./index-mKsbedQJ.js"), [])),
	k1 = z.lazy(() =>
		Wf(
			() => import("./index-Rqqd02tD.js"),
			__vite__mapDeps([5, 1, 2, 3, 6, 7, 8, 9, 4, 10]),
		),
	),
	ph = (i) => {
		i === "dark" ||
		(i === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};
function $1() {
	const { options: i } = oi();
	return (
		z.useEffect(() => {
			ph(i.darkMode);
		}, [i.darkMode]),
		z.useEffect(() => {
			const s = window.matchMedia("(prefers-color-scheme: dark)"),
				h = () => {
					ph(i.darkMode);
				};
			return (
				s.addEventListener("change", h),
				() => {
					s.removeEventListener("change", h);
				}
			);
		}, []),
		N.jsx(z.Suspense, {
			fallback: N.jsx(Yh, {}),
			children: N.jsxs("div", {
				className: "absolute bottom-0 left-0 right-0 top-0",
				children: [
					N.jsx(Iv, {}),
					N.jsx("div", {
						className: "h-full pt-10",
						children: N.jsxs(ov, {
							children: [
								N.jsx(Oa, { path: "/", element: N.jsx(K1, {}) }),
								N.jsx(Oa, { path: "/dev/*", element: N.jsx(J1, {}) }),
								N.jsx(Oa, { path: "/game/:id", element: N.jsx(k1, {}) }),
								N.jsx(Oa, { path: "/name-generator", element: N.jsx(Q1, {}) }),
								N.jsx(Oa, { path: "/probability", element: N.jsx(V1, {}) }),
							],
						}),
					}),
				],
			}),
		})
	);
}
const W1 = by.createRoot(document.getElementById("root"));
W1.render(
	N.jsx(z.StrictMode, {
		children: N.jsx(jv, {
			children: N.jsx(Vv, { children: N.jsx(Jv, { children: N.jsx($1, {}) }) }),
		}),
	}),
);
export {
	$f as L,
	ov as R,
	Wf as _,
	zh as a,
	Oa as b,
	F1 as c,
	tg as d,
	P1 as e,
	Yh as f,
	X1 as g,
	I1 as i,
	N as j,
	z as r,
	oi as u,
};
