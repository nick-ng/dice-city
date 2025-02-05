const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"assets/index-CI12D9OQ.js",
			"assets/message-D1f2idou.js",
			"assets/utils-BPyf_07k.js",
			"assets/game-jRJmzKP6.js",
			"assets/index-iqCj0pWP.js",
			"assets/index-LI1pGzg-.js",
			"assets/business-centre-DFXDQJ1G.js",
			"assets/index-CjNTdVT1.js",
			"assets/index-bBrHWja8.js",
			"assets/build-BK5b18Yb.js",
			"assets/index-ZFpbsviI.js",
		]),
) => i.map((i) => d[i]);
(function () {
	const l = document.createElement("link").relList;
	if (l && l.supports && l.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
	new MutationObserver((o) => {
		for (const f of o)
			if (f.type === "childList")
				for (const p of f.addedNodes)
					p.tagName === "LINK" && p.rel === "modulepreload" && s(p);
	}).observe(document, { childList: !0, subtree: !0 });
	function c(o) {
		const f = {};
		return (
			o.integrity && (f.integrity = o.integrity),
			o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === "use-credentials"
				? (f.credentials = "include")
				: o.crossOrigin === "anonymous"
					? (f.credentials = "omit")
					: (f.credentials = "same-origin"),
			f
		);
	}
	function s(o) {
		if (o.ep) return;
		o.ep = !0;
		const f = c(o);
		fetch(o.href, f);
	}
})();
function Em(i) {
	return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
		? i.default
		: i;
}
function xy(i) {
	if (i.__esModule) return i;
	var l = i.default;
	if (typeof l == "function") {
		var c = function s() {
			return this instanceof s
				? Reflect.construct(l, arguments, this.constructor)
				: l.apply(this, arguments);
		};
		c.prototype = l.prototype;
	} else c = {};
	return (
		Object.defineProperty(c, "__esModule", { value: !0 }),
		Object.keys(i).forEach(function (s) {
			var o = Object.getOwnPropertyDescriptor(i, s);
			Object.defineProperty(
				c,
				s,
				o.get
					? o
					: {
							enumerable: !0,
							get: function () {
								return i[s];
							},
						},
			);
		}),
		c
	);
}
var zs = { exports: {} },
	mu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xh;
function Ey() {
	if (Xh) return mu;
	Xh = 1;
	var i = Symbol.for("react.transitional.element"),
		l = Symbol.for("react.fragment");
	function c(s, o, f) {
		var p = null;
		if (
			(f !== void 0 && (p = "" + f),
			o.key !== void 0 && (p = "" + o.key),
			"key" in o)
		) {
			f = {};
			for (var v in o) v !== "key" && (f[v] = o[v]);
		} else f = o;
		return (
			(o = f.ref),
			{ $$typeof: i, type: s, key: p, ref: o !== void 0 ? o : null, props: f }
		);
	}
	return (mu.Fragment = l), (mu.jsx = c), (mu.jsxs = c), mu;
}
var Qh;
function Ty() {
	return Qh || ((Qh = 1), (zs.exports = Ey())), zs.exports;
}
var M = Ty(),
	Ms = { exports: {} },
	oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kh;
function Ay() {
	if (Kh) return oe;
	Kh = 1;
	var i = Symbol.for("react.transitional.element"),
		l = Symbol.for("react.portal"),
		c = Symbol.for("react.fragment"),
		s = Symbol.for("react.strict_mode"),
		o = Symbol.for("react.profiler"),
		f = Symbol.for("react.consumer"),
		p = Symbol.for("react.context"),
		v = Symbol.for("react.forward_ref"),
		h = Symbol.for("react.suspense"),
		m = Symbol.for("react.memo"),
		b = Symbol.for("react.lazy"),
		_ = Symbol.iterator;
	function S(x) {
		return x === null || typeof x != "object"
			? null
			: ((x = (_ && x[_]) || x["@@iterator"]),
				typeof x == "function" ? x : null);
	}
	var R = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		N = Object.assign,
		G = {};
	function B(x, H, ne) {
		(this.props = x),
			(this.context = H),
			(this.refs = G),
			(this.updater = ne || R);
	}
	(B.prototype.isReactComponent = {}),
		(B.prototype.setState = function (x, H) {
			if (typeof x != "object" && typeof x != "function" && x != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, x, H, "setState");
		}),
		(B.prototype.forceUpdate = function (x) {
			this.updater.enqueueForceUpdate(this, x, "forceUpdate");
		});
	function Z() {}
	Z.prototype = B.prototype;
	function J(x, H, ne) {
		(this.props = x),
			(this.context = H),
			(this.refs = G),
			(this.updater = ne || R);
	}
	var Q = (J.prototype = new Z());
	(Q.constructor = J), N(Q, B.prototype), (Q.isPureReactComponent = !0);
	var P = Array.isArray,
		V = { H: null, A: null, T: null, S: null },
		ye = Object.prototype.hasOwnProperty;
	function pe(x, H, ne, te, K, _e) {
		return (
			(ne = _e.ref),
			{
				$$typeof: i,
				type: x,
				key: H,
				ref: ne !== void 0 ? ne : null,
				props: _e,
			}
		);
	}
	function ge(x, H) {
		return pe(x.type, H, void 0, void 0, void 0, x.props);
	}
	function L(x) {
		return typeof x == "object" && x !== null && x.$$typeof === i;
	}
	function ee(x) {
		var H = { "=": "=0", ":": "=2" };
		return (
			"$" +
			x.replace(/[=:]/g, function (ne) {
				return H[ne];
			})
		);
	}
	var Re = /\/+/g;
	function Ke(x, H) {
		return typeof x == "object" && x !== null && x.key != null
			? ee("" + x.key)
			: H.toString(36);
	}
	function Le() {}
	function Fe(x) {
		switch (x.status) {
			case "fulfilled":
				return x.value;
			case "rejected":
				throw x.reason;
			default:
				switch (
					(typeof x.status == "string"
						? x.then(Le, Le)
						: ((x.status = "pending"),
							x.then(
								function (H) {
									x.status === "pending" &&
										((x.status = "fulfilled"), (x.value = H));
								},
								function (H) {
									x.status === "pending" &&
										((x.status = "rejected"), (x.reason = H));
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
	function $e(x, H, ne, te, K) {
		var _e = typeof x;
		(_e === "undefined" || _e === "boolean") && (x = null);
		var de = !1;
		if (x === null) de = !0;
		else
			switch (_e) {
				case "bigint":
				case "string":
				case "number":
					de = !0;
					break;
				case "object":
					switch (x.$$typeof) {
						case i:
						case l:
							de = !0;
							break;
						case b:
							return (de = x._init), $e(de(x._payload), H, ne, te, K);
					}
			}
		if (de)
			return (
				(K = K(x)),
				(de = te === "" ? "." + Ke(x, 0) : te),
				P(K)
					? ((ne = ""),
						de != null && (ne = de.replace(Re, "$&/") + "/"),
						$e(K, H, ne, "", function (Ve) {
							return Ve;
						}))
					: K != null &&
						(L(K) &&
							(K = ge(
								K,
								ne +
									(K.key == null || (x && x.key === K.key)
										? ""
										: ("" + K.key).replace(Re, "$&/") + "/") +
									de,
							)),
						H.push(K)),
				1
			);
		de = 0;
		var st = te === "" ? "." : te + ":";
		if (P(x))
			for (var Ae = 0; Ae < x.length; Ae++)
				(te = x[Ae]), (_e = st + Ke(te, Ae)), (de += $e(te, H, ne, _e, K));
		else if (((Ae = S(x)), typeof Ae == "function"))
			for (x = Ae.call(x), Ae = 0; !(te = x.next()).done; )
				(te = te.value), (_e = st + Ke(te, Ae++)), (de += $e(te, H, ne, _e, K));
		else if (_e === "object") {
			if (typeof x.then == "function") return $e(Fe(x), H, ne, te, K);
			throw (
				((H = String(x)),
				Error(
					"Objects are not valid as a React child (found: " +
						(H === "[object Object]"
							? "object with keys {" + Object.keys(x).join(", ") + "}"
							: H) +
						"). If you meant to render a collection of children, use an array instead.",
				))
			);
		}
		return de;
	}
	function q(x, H, ne) {
		if (x == null) return x;
		var te = [],
			K = 0;
		return (
			$e(x, te, "", "", function (_e) {
				return H.call(ne, _e, K++);
			}),
			te
		);
	}
	function ce(x) {
		if (x._status === -1) {
			var H = x._result;
			(H = H()),
				H.then(
					function (ne) {
						(x._status === 0 || x._status === -1) &&
							((x._status = 1), (x._result = ne));
					},
					function (ne) {
						(x._status === 0 || x._status === -1) &&
							((x._status = 2), (x._result = ne));
					},
				),
				x._status === -1 && ((x._status = 0), (x._result = H));
		}
		if (x._status === 1) return x._result.default;
		throw x._result;
	}
	var ue =
		typeof reportError == "function"
			? reportError
			: function (x) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var H = new window.ErrorEvent("error", {
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
						if (!window.dispatchEvent(H)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", x);
						return;
					}
					console.error(x);
				};
	function Ne() {}
	return (
		(oe.Children = {
			map: q,
			forEach: function (x, H, ne) {
				q(
					x,
					function () {
						H.apply(this, arguments);
					},
					ne,
				);
			},
			count: function (x) {
				var H = 0;
				return (
					q(x, function () {
						H++;
					}),
					H
				);
			},
			toArray: function (x) {
				return (
					q(x, function (H) {
						return H;
					}) || []
				);
			},
			only: function (x) {
				if (!L(x))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return x;
			},
		}),
		(oe.Component = B),
		(oe.Fragment = c),
		(oe.Profiler = o),
		(oe.PureComponent = J),
		(oe.StrictMode = s),
		(oe.Suspense = h),
		(oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
		(oe.act = function () {
			throw Error("act(...) is not supported in production builds of React.");
		}),
		(oe.cache = function (x) {
			return function () {
				return x.apply(null, arguments);
			};
		}),
		(oe.cloneElement = function (x, H, ne) {
			if (x == null)
				throw Error(
					"The argument must be a React element, but you passed " + x + ".",
				);
			var te = N({}, x.props),
				K = x.key,
				_e = void 0;
			if (H != null)
				for (de in (H.ref !== void 0 && (_e = void 0),
				H.key !== void 0 && (K = "" + H.key),
				H))
					!ye.call(H, de) ||
						de === "key" ||
						de === "__self" ||
						de === "__source" ||
						(de === "ref" && H.ref === void 0) ||
						(te[de] = H[de]);
			var de = arguments.length - 2;
			if (de === 1) te.children = ne;
			else if (1 < de) {
				for (var st = Array(de), Ae = 0; Ae < de; Ae++)
					st[Ae] = arguments[Ae + 2];
				te.children = st;
			}
			return pe(x.type, K, void 0, void 0, _e, te);
		}),
		(oe.createContext = function (x) {
			return (
				(x = {
					$$typeof: p,
					_currentValue: x,
					_currentValue2: x,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(x.Provider = x),
				(x.Consumer = { $$typeof: f, _context: x }),
				x
			);
		}),
		(oe.createElement = function (x, H, ne) {
			var te,
				K = {},
				_e = null;
			if (H != null)
				for (te in (H.key !== void 0 && (_e = "" + H.key), H))
					ye.call(H, te) &&
						te !== "key" &&
						te !== "__self" &&
						te !== "__source" &&
						(K[te] = H[te]);
			var de = arguments.length - 2;
			if (de === 1) K.children = ne;
			else if (1 < de) {
				for (var st = Array(de), Ae = 0; Ae < de; Ae++)
					st[Ae] = arguments[Ae + 2];
				K.children = st;
			}
			if (x && x.defaultProps)
				for (te in ((de = x.defaultProps), de))
					K[te] === void 0 && (K[te] = de[te]);
			return pe(x, _e, void 0, void 0, null, K);
		}),
		(oe.createRef = function () {
			return { current: null };
		}),
		(oe.forwardRef = function (x) {
			return { $$typeof: v, render: x };
		}),
		(oe.isValidElement = L),
		(oe.lazy = function (x) {
			return { $$typeof: b, _payload: { _status: -1, _result: x }, _init: ce };
		}),
		(oe.memo = function (x, H) {
			return { $$typeof: m, type: x, compare: H === void 0 ? null : H };
		}),
		(oe.startTransition = function (x) {
			var H = V.T,
				ne = {};
			V.T = ne;
			try {
				var te = x(),
					K = V.S;
				K !== null && K(ne, te),
					typeof te == "object" &&
						te !== null &&
						typeof te.then == "function" &&
						te.then(Ne, ue);
			} catch (_e) {
				ue(_e);
			} finally {
				V.T = H;
			}
		}),
		(oe.unstable_useCacheRefresh = function () {
			return V.H.useCacheRefresh();
		}),
		(oe.use = function (x) {
			return V.H.use(x);
		}),
		(oe.useActionState = function (x, H, ne) {
			return V.H.useActionState(x, H, ne);
		}),
		(oe.useCallback = function (x, H) {
			return V.H.useCallback(x, H);
		}),
		(oe.useContext = function (x) {
			return V.H.useContext(x);
		}),
		(oe.useDebugValue = function () {}),
		(oe.useDeferredValue = function (x, H) {
			return V.H.useDeferredValue(x, H);
		}),
		(oe.useEffect = function (x, H) {
			return V.H.useEffect(x, H);
		}),
		(oe.useId = function () {
			return V.H.useId();
		}),
		(oe.useImperativeHandle = function (x, H, ne) {
			return V.H.useImperativeHandle(x, H, ne);
		}),
		(oe.useInsertionEffect = function (x, H) {
			return V.H.useInsertionEffect(x, H);
		}),
		(oe.useLayoutEffect = function (x, H) {
			return V.H.useLayoutEffect(x, H);
		}),
		(oe.useMemo = function (x, H) {
			return V.H.useMemo(x, H);
		}),
		(oe.useOptimistic = function (x, H) {
			return V.H.useOptimistic(x, H);
		}),
		(oe.useReducer = function (x, H, ne) {
			return V.H.useReducer(x, H, ne);
		}),
		(oe.useRef = function (x) {
			return V.H.useRef(x);
		}),
		(oe.useState = function (x) {
			return V.H.useState(x);
		}),
		(oe.useSyncExternalStore = function (x, H, ne) {
			return V.H.useSyncExternalStore(x, H, ne);
		}),
		(oe.useTransition = function () {
			return V.H.useTransition();
		}),
		(oe.version = "19.0.0"),
		oe
	);
}
var $h;
function Ps() {
	return $h || (($h = 1), (Ms.exports = Ay())), Ms.exports;
}
var C = Ps(),
	Ds = { exports: {} },
	vu = {},
	js = { exports: {} },
	Us = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jh;
function Ry() {
	return (
		Jh ||
			((Jh = 1),
			(function (i) {
				function l(q, ce) {
					var ue = q.length;
					q.push(ce);
					e: for (; 0 < ue; ) {
						var Ne = (ue - 1) >>> 1,
							x = q[Ne];
						if (0 < o(x, ce)) (q[Ne] = ce), (q[ue] = x), (ue = Ne);
						else break e;
					}
				}
				function c(q) {
					return q.length === 0 ? null : q[0];
				}
				function s(q) {
					if (q.length === 0) return null;
					var ce = q[0],
						ue = q.pop();
					if (ue !== ce) {
						q[0] = ue;
						e: for (var Ne = 0, x = q.length, H = x >>> 1; Ne < H; ) {
							var ne = 2 * (Ne + 1) - 1,
								te = q[ne],
								K = ne + 1,
								_e = q[K];
							if (0 > o(te, ue))
								K < x && 0 > o(_e, te)
									? ((q[Ne] = _e), (q[K] = ue), (Ne = K))
									: ((q[Ne] = te), (q[ne] = ue), (Ne = ne));
							else if (K < x && 0 > o(_e, ue))
								(q[Ne] = _e), (q[K] = ue), (Ne = K);
							else break e;
						}
					}
					return ce;
				}
				function o(q, ce) {
					var ue = q.sortIndex - ce.sortIndex;
					return ue !== 0 ? ue : q.id - ce.id;
				}
				if (
					((i.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var f = performance;
					i.unstable_now = function () {
						return f.now();
					};
				} else {
					var p = Date,
						v = p.now();
					i.unstable_now = function () {
						return p.now() - v;
					};
				}
				var h = [],
					m = [],
					b = 1,
					_ = null,
					S = 3,
					R = !1,
					N = !1,
					G = !1,
					B = typeof setTimeout == "function" ? setTimeout : null,
					Z = typeof clearTimeout == "function" ? clearTimeout : null,
					J = typeof setImmediate < "u" ? setImmediate : null;
				function Q(q) {
					for (var ce = c(m); ce !== null; ) {
						if (ce.callback === null) s(m);
						else if (ce.startTime <= q)
							s(m), (ce.sortIndex = ce.expirationTime), l(h, ce);
						else break;
						ce = c(m);
					}
				}
				function P(q) {
					if (((G = !1), Q(q), !N))
						if (c(h) !== null) (N = !0), Fe();
						else {
							var ce = c(m);
							ce !== null && $e(P, ce.startTime - q);
						}
				}
				var V = !1,
					ye = -1,
					pe = 5,
					ge = -1;
				function L() {
					return !(i.unstable_now() - ge < pe);
				}
				function ee() {
					if (V) {
						var q = i.unstable_now();
						ge = q;
						var ce = !0;
						try {
							e: {
								(N = !1), G && ((G = !1), Z(ye), (ye = -1)), (R = !0);
								var ue = S;
								try {
									t: {
										for (
											Q(q), _ = c(h);
											_ !== null && !(_.expirationTime > q && L());

										) {
											var Ne = _.callback;
											if (typeof Ne == "function") {
												(_.callback = null), (S = _.priorityLevel);
												var x = Ne(_.expirationTime <= q);
												if (((q = i.unstable_now()), typeof x == "function")) {
													(_.callback = x), Q(q), (ce = !0);
													break t;
												}
												_ === c(h) && s(h), Q(q);
											} else s(h);
											_ = c(h);
										}
										if (_ !== null) ce = !0;
										else {
											var H = c(m);
											H !== null && $e(P, H.startTime - q), (ce = !1);
										}
									}
									break e;
								} finally {
									(_ = null), (S = ue), (R = !1);
								}
								ce = void 0;
							}
						} finally {
							ce ? Re() : (V = !1);
						}
					}
				}
				var Re;
				if (typeof J == "function")
					Re = function () {
						J(ee);
					};
				else if (typeof MessageChannel < "u") {
					var Ke = new MessageChannel(),
						Le = Ke.port2;
					(Ke.port1.onmessage = ee),
						(Re = function () {
							Le.postMessage(null);
						});
				} else
					Re = function () {
						B(ee, 0);
					};
				function Fe() {
					V || ((V = !0), Re());
				}
				function $e(q, ce) {
					ye = B(function () {
						q(i.unstable_now());
					}, ce);
				}
				(i.unstable_IdlePriority = 5),
					(i.unstable_ImmediatePriority = 1),
					(i.unstable_LowPriority = 4),
					(i.unstable_NormalPriority = 3),
					(i.unstable_Profiling = null),
					(i.unstable_UserBlockingPriority = 2),
					(i.unstable_cancelCallback = function (q) {
						q.callback = null;
					}),
					(i.unstable_continueExecution = function () {
						N || R || ((N = !0), Fe());
					}),
					(i.unstable_forceFrameRate = function (q) {
						0 > q || 125 < q
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (pe = 0 < q ? Math.floor(1e3 / q) : 5);
					}),
					(i.unstable_getCurrentPriorityLevel = function () {
						return S;
					}),
					(i.unstable_getFirstCallbackNode = function () {
						return c(h);
					}),
					(i.unstable_next = function (q) {
						switch (S) {
							case 1:
							case 2:
							case 3:
								var ce = 3;
								break;
							default:
								ce = S;
						}
						var ue = S;
						S = ce;
						try {
							return q();
						} finally {
							S = ue;
						}
					}),
					(i.unstable_pauseExecution = function () {}),
					(i.unstable_requestPaint = function () {}),
					(i.unstable_runWithPriority = function (q, ce) {
						switch (q) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								q = 3;
						}
						var ue = S;
						S = q;
						try {
							return ce();
						} finally {
							S = ue;
						}
					}),
					(i.unstable_scheduleCallback = function (q, ce, ue) {
						var Ne = i.unstable_now();
						switch (
							(typeof ue == "object" && ue !== null
								? ((ue = ue.delay),
									(ue = typeof ue == "number" && 0 < ue ? Ne + ue : Ne))
								: (ue = Ne),
							q)
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
							(x = ue + x),
							(q = {
								id: b++,
								callback: ce,
								priorityLevel: q,
								startTime: ue,
								expirationTime: x,
								sortIndex: -1,
							}),
							ue > Ne
								? ((q.sortIndex = ue),
									l(m, q),
									c(h) === null &&
										q === c(m) &&
										(G ? (Z(ye), (ye = -1)) : (G = !0), $e(P, ue - Ne)))
								: ((q.sortIndex = x), l(h, q), N || R || ((N = !0), Fe())),
							q
						);
					}),
					(i.unstable_shouldYield = L),
					(i.unstable_wrapCallback = function (q) {
						var ce = S;
						return function () {
							var ue = S;
							S = ce;
							try {
								return q.apply(this, arguments);
							} finally {
								S = ue;
							}
						};
					});
			})(Us)),
		Us
	);
}
var Wh;
function Oy() {
	return Wh || ((Wh = 1), (js.exports = Ry())), js.exports;
}
var ks = { exports: {} },
	rt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh;
function wy() {
	if (Fh) return rt;
	Fh = 1;
	var i = Ps();
	function l(h) {
		var m = "https://react.dev/errors/" + h;
		if (1 < arguments.length) {
			m += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var b = 2; b < arguments.length; b++)
				m += "&args[]=" + encodeURIComponent(arguments[b]);
		}
		return (
			"Minified React error #" +
			h +
			"; visit " +
			m +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function c() {}
	var s = {
			d: {
				f: c,
				r: function () {
					throw Error(l(522));
				},
				D: c,
				C: c,
				L: c,
				m: c,
				X: c,
				S: c,
				M: c,
			},
			p: 0,
			findDOMNode: null,
		},
		o = Symbol.for("react.portal");
	function f(h, m, b) {
		var _ =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: o,
			key: _ == null ? null : "" + _,
			children: h,
			containerInfo: m,
			implementation: b,
		};
	}
	var p = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function v(h, m) {
		if (h === "font") return "";
		if (typeof m == "string") return m === "use-credentials" ? m : "";
	}
	return (
		(rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
		(rt.createPortal = function (h, m) {
			var b =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
				throw Error(l(299));
			return f(h, m, null, b);
		}),
		(rt.flushSync = function (h) {
			var m = p.T,
				b = s.p;
			try {
				if (((p.T = null), (s.p = 2), h)) return h();
			} finally {
				(p.T = m), (s.p = b), s.d.f();
			}
		}),
		(rt.preconnect = function (h, m) {
			typeof h == "string" &&
				(m
					? ((m = m.crossOrigin),
						(m =
							typeof m == "string"
								? m === "use-credentials"
									? m
									: ""
								: void 0))
					: (m = null),
				s.d.C(h, m));
		}),
		(rt.prefetchDNS = function (h) {
			typeof h == "string" && s.d.D(h);
		}),
		(rt.preinit = function (h, m) {
			if (typeof h == "string" && m && typeof m.as == "string") {
				var b = m.as,
					_ = v(b, m.crossOrigin),
					S = typeof m.integrity == "string" ? m.integrity : void 0,
					R = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
				b === "style"
					? s.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
							crossOrigin: _,
							integrity: S,
							fetchPriority: R,
						})
					: b === "script" &&
						s.d.X(h, {
							crossOrigin: _,
							integrity: S,
							fetchPriority: R,
							nonce: typeof m.nonce == "string" ? m.nonce : void 0,
						});
			}
		}),
		(rt.preinitModule = function (h, m) {
			if (typeof h == "string")
				if (typeof m == "object" && m !== null) {
					if (m.as == null || m.as === "script") {
						var b = v(m.as, m.crossOrigin);
						s.d.M(h, {
							crossOrigin: b,
							integrity: typeof m.integrity == "string" ? m.integrity : void 0,
							nonce: typeof m.nonce == "string" ? m.nonce : void 0,
						});
					}
				} else m == null && s.d.M(h);
		}),
		(rt.preload = function (h, m) {
			if (
				typeof h == "string" &&
				typeof m == "object" &&
				m !== null &&
				typeof m.as == "string"
			) {
				var b = m.as,
					_ = v(b, m.crossOrigin);
				s.d.L(h, b, {
					crossOrigin: _,
					integrity: typeof m.integrity == "string" ? m.integrity : void 0,
					nonce: typeof m.nonce == "string" ? m.nonce : void 0,
					type: typeof m.type == "string" ? m.type : void 0,
					fetchPriority:
						typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
					referrerPolicy:
						typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
					imageSrcSet:
						typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
					imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
					media: typeof m.media == "string" ? m.media : void 0,
				});
			}
		}),
		(rt.preloadModule = function (h, m) {
			if (typeof h == "string")
				if (m) {
					var b = v(m.as, m.crossOrigin);
					s.d.m(h, {
						as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
						crossOrigin: b,
						integrity: typeof m.integrity == "string" ? m.integrity : void 0,
					});
				} else s.d.m(h);
		}),
		(rt.requestFormReset = function (h) {
			s.d.r(h);
		}),
		(rt.unstable_batchedUpdates = function (h, m) {
			return h(m);
		}),
		(rt.useFormState = function (h, m, b) {
			return p.H.useFormState(h, m, b);
		}),
		(rt.useFormStatus = function () {
			return p.H.useHostTransitionStatus();
		}),
		(rt.version = "19.0.0"),
		rt
	);
}
var Ph;
function Cy() {
	if (Ph) return ks.exports;
	Ph = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (l) {
				console.error(l);
			}
	}
	return i(), (ks.exports = wy()), ks.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ih;
function Ny() {
	if (Ih) return vu;
	Ih = 1;
	var i = Oy(),
		l = Ps(),
		c = Cy();
	function s(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var a = 2; a < arguments.length; a++)
				t += "&args[]=" + encodeURIComponent(arguments[a]);
		}
		return (
			"Minified React error #" +
			e +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function o(e) {
		return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
	}
	var f = Symbol.for("react.element"),
		p = Symbol.for("react.transitional.element"),
		v = Symbol.for("react.portal"),
		h = Symbol.for("react.fragment"),
		m = Symbol.for("react.strict_mode"),
		b = Symbol.for("react.profiler"),
		_ = Symbol.for("react.provider"),
		S = Symbol.for("react.consumer"),
		R = Symbol.for("react.context"),
		N = Symbol.for("react.forward_ref"),
		G = Symbol.for("react.suspense"),
		B = Symbol.for("react.suspense_list"),
		Z = Symbol.for("react.memo"),
		J = Symbol.for("react.lazy"),
		Q = Symbol.for("react.offscreen"),
		P = Symbol.for("react.memo_cache_sentinel"),
		V = Symbol.iterator;
	function ye(e) {
		return e === null || typeof e != "object"
			? null
			: ((e = (V && e[V]) || e["@@iterator"]),
				typeof e == "function" ? e : null);
	}
	var pe = Symbol.for("react.client.reference");
	function ge(e) {
		if (e == null) return null;
		if (typeof e == "function")
			return e.$$typeof === pe ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case h:
				return "Fragment";
			case v:
				return "Portal";
			case b:
				return "Profiler";
			case m:
				return "StrictMode";
			case G:
				return "Suspense";
			case B:
				return "SuspenseList";
		}
		if (typeof e == "object")
			switch (e.$$typeof) {
				case R:
					return (e.displayName || "Context") + ".Provider";
				case S:
					return (e._context.displayName || "Context") + ".Consumer";
				case N:
					var t = e.render;
					return (
						(e = e.displayName),
						e ||
							((e = t.displayName || t.name || ""),
							(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
						e
					);
				case Z:
					return (
						(t = e.displayName || null), t !== null ? t : ge(e.type) || "Memo"
					);
				case J:
					(t = e._payload), (e = e._init);
					try {
						return ge(e(t));
					} catch {}
			}
		return null;
	}
	var L = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		ee = Object.assign,
		Re,
		Ke;
	function Le(e) {
		if (Re === void 0)
			try {
				throw Error();
			} catch (a) {
				var t = a.stack.trim().match(/\n( *(at )?)/);
				(Re = (t && t[1]) || ""),
					(Ke =
						-1 <
						a.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < a.stack.indexOf("@")
								? "@unknown:0:0"
								: "");
			}
		return (
			`
` +
			Re +
			e +
			Ke
		);
	}
	var Fe = !1;
	function $e(e, t) {
		if (!e || Fe) return "";
		Fe = !0;
		var a = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var n = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var U = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(U.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(U, []);
								} catch (z) {
									var w = z;
								}
								Reflect.construct(e, [], U);
							} else {
								try {
									U.call();
								} catch (z) {
									w = z;
								}
								e.call(U.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (z) {
								w = z;
							}
							(U = e()) &&
								typeof U.catch == "function" &&
								U.catch(function () {});
						}
					} catch (z) {
						if (z && w && typeof z.stack == "string") return [z.stack, w.stack];
					}
					return [null, null];
				},
			};
			n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var u = Object.getOwnPropertyDescriptor(
				n.DetermineComponentFrameRoot,
				"name",
			);
			u &&
				u.configurable &&
				Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var r = n.DetermineComponentFrameRoot(),
				d = r[0],
				y = r[1];
			if (d && y) {
				var g = d.split(`
`),
					T = y.split(`
`);
				for (
					u = n = 0;
					n < g.length && !g[n].includes("DetermineComponentFrameRoot");

				)
					n++;
				for (; u < T.length && !T[u].includes("DetermineComponentFrameRoot"); )
					u++;
				if (n === g.length || u === T.length)
					for (
						n = g.length - 1, u = T.length - 1;
						1 <= n && 0 <= u && g[n] !== T[u];

					)
						u--;
				for (; 1 <= n && 0 <= u; n--, u--)
					if (g[n] !== T[u]) {
						if (n !== 1 || u !== 1)
							do
								if ((n--, u--, 0 > u || g[n] !== T[u])) {
									var D =
										`
` + g[n].replace(" at new ", " at ");
									return (
										e.displayName &&
											D.includes("<anonymous>") &&
											(D = D.replace("<anonymous>", e.displayName)),
										D
									);
								}
							while (1 <= n && 0 <= u);
						break;
					}
			}
		} finally {
			(Fe = !1), (Error.prepareStackTrace = a);
		}
		return (a = e ? e.displayName || e.name : "") ? Le(a) : "";
	}
	function q(e) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return Le(e.type);
			case 16:
				return Le("Lazy");
			case 13:
				return Le("Suspense");
			case 19:
				return Le("SuspenseList");
			case 0:
			case 15:
				return (e = $e(e.type, !1)), e;
			case 11:
				return (e = $e(e.type.render, !1)), e;
			case 1:
				return (e = $e(e.type, !0)), e;
			default:
				return "";
		}
	}
	function ce(e) {
		try {
			var t = "";
			do (t += q(e)), (e = e.return);
			while (e);
			return t;
		} catch (a) {
			return (
				`
Error generating stack: ` +
				a.message +
				`
` +
				a.stack
			);
		}
	}
	function ue(e) {
		var t = e,
			a = e;
		if (e.alternate) for (; t.return; ) t = t.return;
		else {
			e = t;
			do (t = e), t.flags & 4098 && (a = t.return), (e = t.return);
			while (e);
		}
		return t.tag === 3 ? a : null;
	}
	function Ne(e) {
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
	function x(e) {
		if (ue(e) !== e) throw Error(s(188));
	}
	function H(e) {
		var t = e.alternate;
		if (!t) {
			if (((t = ue(e)), t === null)) throw Error(s(188));
			return t !== e ? null : e;
		}
		for (var a = e, n = t; ; ) {
			var u = a.return;
			if (u === null) break;
			var r = u.alternate;
			if (r === null) {
				if (((n = u.return), n !== null)) {
					a = n;
					continue;
				}
				break;
			}
			if (u.child === r.child) {
				for (r = u.child; r; ) {
					if (r === a) return x(u), e;
					if (r === n) return x(u), t;
					r = r.sibling;
				}
				throw Error(s(188));
			}
			if (a.return !== n.return) (a = u), (n = r);
			else {
				for (var d = !1, y = u.child; y; ) {
					if (y === a) {
						(d = !0), (a = u), (n = r);
						break;
					}
					if (y === n) {
						(d = !0), (n = u), (a = r);
						break;
					}
					y = y.sibling;
				}
				if (!d) {
					for (y = r.child; y; ) {
						if (y === a) {
							(d = !0), (a = r), (n = u);
							break;
						}
						if (y === n) {
							(d = !0), (n = r), (a = u);
							break;
						}
						y = y.sibling;
					}
					if (!d) throw Error(s(189));
				}
			}
			if (a.alternate !== n) throw Error(s(190));
		}
		if (a.tag !== 3) throw Error(s(188));
		return a.stateNode.current === a ? e : t;
	}
	function ne(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null; ) {
			if (((t = ne(e)), t !== null)) return t;
			e = e.sibling;
		}
		return null;
	}
	var te = Array.isArray,
		K = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		_e = { pending: !1, data: null, method: null, action: null },
		de = [],
		st = -1;
	function Ae(e) {
		return { current: e };
	}
	function Ve(e) {
		0 > st || ((e.current = de[st]), (de[st] = null), st--);
	}
	function De(e, t) {
		st++, (de[st] = e.current), (e.current = t);
	}
	var Gt = Ae(null),
		pl = Ae(null),
		Ea = Ae(null),
		Zu = Ae(null);
	function Bu(e, t) {
		switch ((De(Ea, t), De(pl, e), De(Gt, null), (e = t.nodeType), e)) {
			case 9:
			case 11:
				t = (t = t.documentElement) && (t = t.namespaceURI) ? _h(t) : 0;
				break;
			default:
				if (
					((e = e === 8 ? t.parentNode : t),
					(t = e.tagName),
					(e = e.namespaceURI))
				)
					(e = _h(e)), (t = Sh(e, t));
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
		Ve(Gt), De(Gt, t);
	}
	function Rn() {
		Ve(Gt), Ve(pl), Ve(Ea);
	}
	function xr(e) {
		e.memoizedState !== null && De(Zu, e);
		var t = Gt.current,
			a = Sh(t, e.type);
		t !== a && (De(pl, e), De(Gt, a));
	}
	function qu(e) {
		pl.current === e && (Ve(Gt), Ve(pl)),
			Zu.current === e && (Ve(Zu), (su._currentValue = _e));
	}
	var Er = Object.prototype.hasOwnProperty,
		Tr = i.unstable_scheduleCallback,
		Ar = i.unstable_cancelCallback,
		e0 = i.unstable_shouldYield,
		t0 = i.unstable_requestPaint,
		Xt = i.unstable_now,
		a0 = i.unstable_getCurrentPriorityLevel,
		ro = i.unstable_ImmediatePriority,
		co = i.unstable_UserBlockingPriority,
		Lu = i.unstable_NormalPriority,
		n0 = i.unstable_LowPriority,
		so = i.unstable_IdlePriority,
		l0 = i.log,
		u0 = i.unstable_setDisableYieldValue,
		gl = null,
		yt = null;
	function i0(e) {
		if (yt && typeof yt.onCommitFiberRoot == "function")
			try {
				yt.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
			} catch {}
	}
	function Ta(e) {
		if (
			(typeof l0 == "function" && u0(e),
			yt && typeof yt.setStrictMode == "function")
		)
			try {
				yt.setStrictMode(gl, e);
			} catch {}
	}
	var pt = Math.clz32 ? Math.clz32 : s0,
		r0 = Math.log,
		c0 = Math.LN2;
	function s0(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((r0(e) / c0) | 0)) | 0;
	}
	var Yu = 128,
		Vu = 4194304;
	function Ia(e) {
		var t = e & 42;
		if (t !== 0) return t;
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
				return 64;
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
				return e & 4194176;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560;
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
				return e;
		}
	}
	function Gu(e, t) {
		var a = e.pendingLanes;
		if (a === 0) return 0;
		var n = 0,
			u = e.suspendedLanes,
			r = e.pingedLanes,
			d = e.warmLanes;
		e = e.finishedLanes !== 0;
		var y = a & 134217727;
		return (
			y !== 0
				? ((a = y & ~u),
					a !== 0
						? (n = Ia(a))
						: ((r &= y),
							r !== 0
								? (n = Ia(r))
								: e || ((d = y & ~d), d !== 0 && (n = Ia(d)))))
				: ((y = a & ~u),
					y !== 0
						? (n = Ia(y))
						: r !== 0
							? (n = Ia(r))
							: e || ((d = a & ~d), d !== 0 && (n = Ia(d)))),
			n === 0
				? 0
				: t !== 0 &&
					  t !== n &&
					  !(t & u) &&
					  ((u = n & -n),
					  (d = t & -t),
					  u >= d || (u === 32 && (d & 4194176) !== 0))
					? t
					: n
		);
	}
	function bl(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function o0(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
				return t + 250;
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
	function oo() {
		var e = Yu;
		return (Yu <<= 1), !(Yu & 4194176) && (Yu = 128), e;
	}
	function fo() {
		var e = Vu;
		return (Vu <<= 1), !(Vu & 62914560) && (Vu = 4194304), e;
	}
	function Rr(e) {
		for (var t = [], a = 0; 31 > a; a++) t.push(e);
		return t;
	}
	function _l(e, t) {
		(e.pendingLanes |= t),
			t !== 268435456 &&
				((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
	}
	function f0(e, t, a, n, u, r) {
		var d = e.pendingLanes;
		(e.pendingLanes = a),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.warmLanes = 0),
			(e.expiredLanes &= a),
			(e.entangledLanes &= a),
			(e.errorRecoveryDisabledLanes &= a),
			(e.shellSuspendCounter = 0);
		var y = e.entanglements,
			g = e.expirationTimes,
			T = e.hiddenUpdates;
		for (a = d & ~a; 0 < a; ) {
			var D = 31 - pt(a),
				U = 1 << D;
			(y[D] = 0), (g[D] = -1);
			var w = T[D];
			if (w !== null)
				for (T[D] = null, D = 0; D < w.length; D++) {
					var z = w[D];
					z !== null && (z.lane &= -536870913);
				}
			a &= ~U;
		}
		n !== 0 && ho(e, n, 0),
			r !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(d & ~t));
	}
	function ho(e, t, a) {
		(e.pendingLanes |= t), (e.suspendedLanes &= ~t);
		var n = 31 - pt(t);
		(e.entangledLanes |= t),
			(e.entanglements[n] = e.entanglements[n] | 1073741824 | (a & 4194218));
	}
	function mo(e, t) {
		var a = (e.entangledLanes |= t);
		for (e = e.entanglements; a; ) {
			var n = 31 - pt(a),
				u = 1 << n;
			(u & t) | (e[n] & t) && (e[n] |= t), (a &= ~u);
		}
	}
	function vo(e) {
		return (
			(e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
		);
	}
	function yo() {
		var e = K.p;
		return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Bh(e.type));
	}
	function d0(e, t) {
		var a = K.p;
		try {
			return (K.p = e), t();
		} finally {
			K.p = a;
		}
	}
	var Aa = Math.random().toString(36).slice(2),
		ut = "__reactFiber$" + Aa,
		ht = "__reactProps$" + Aa,
		On = "__reactContainer$" + Aa,
		Or = "__reactEvents$" + Aa,
		h0 = "__reactListeners$" + Aa,
		m0 = "__reactHandles$" + Aa,
		po = "__reactResources$" + Aa,
		Sl = "__reactMarker$" + Aa;
	function wr(e) {
		delete e[ut], delete e[ht], delete e[Or], delete e[h0], delete e[m0];
	}
	function en(e) {
		var t = e[ut];
		if (t) return t;
		for (var a = e.parentNode; a; ) {
			if ((t = a[On] || a[ut])) {
				if (
					((a = t.alternate),
					t.child !== null || (a !== null && a.child !== null))
				)
					for (e = Th(e); e !== null; ) {
						if ((a = e[ut])) return a;
						e = Th(e);
					}
				return t;
			}
			(e = a), (a = e.parentNode);
		}
		return null;
	}
	function wn(e) {
		if ((e = e[ut] || e[On])) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
				return e;
		}
		return null;
	}
	function xl(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(s(33));
	}
	function Cn(e) {
		var t = e[po];
		return (
			t ||
				(t = e[po] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			t
		);
	}
	function Pe(e) {
		e[Sl] = !0;
	}
	var go = new Set(),
		bo = {};
	function tn(e, t) {
		Nn(e, t), Nn(e + "Capture", t);
	}
	function Nn(e, t) {
		for (bo[e] = t, e = 0; e < t.length; e++) go.add(t[e]);
	}
	var aa = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		v0 = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		_o = {},
		So = {};
	function y0(e) {
		return Er.call(So, e)
			? !0
			: Er.call(_o, e)
				? !1
				: v0.test(e)
					? (So[e] = !0)
					: ((_o[e] = !0), !1);
	}
	function Xu(e, t, a) {
		if (y0(t))
			if (a === null) e.removeAttribute(t);
			else {
				switch (typeof a) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var n = t.toLowerCase().slice(0, 5);
						if (n !== "data-" && n !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, "" + a);
			}
	}
	function Qu(e, t, a) {
		if (a === null) e.removeAttribute(t);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + a);
		}
	}
	function na(e, t, a, n) {
		if (n === null) e.removeAttribute(a);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(a);
					return;
			}
			e.setAttributeNS(t, a, "" + n);
		}
	}
	function Tt(e) {
		switch (typeof e) {
			case "bigint":
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
	function xo(e) {
		var t = e.type;
		return (
			(e = e.nodeName) &&
			e.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function p0(e) {
		var t = xo(e) ? "checked" : "value",
			a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			n = "" + e[t];
		if (
			!e.hasOwnProperty(t) &&
			typeof a < "u" &&
			typeof a.get == "function" &&
			typeof a.set == "function"
		) {
			var u = a.get,
				r = a.set;
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return u.call(this);
					},
					set: function (d) {
						(n = "" + d), r.call(this, d);
					},
				}),
				Object.defineProperty(e, t, { enumerable: a.enumerable }),
				{
					getValue: function () {
						return n;
					},
					setValue: function (d) {
						n = "" + d;
					},
					stopTracking: function () {
						(e._valueTracker = null), delete e[t];
					},
				}
			);
		}
	}
	function Ku(e) {
		e._valueTracker || (e._valueTracker = p0(e));
	}
	function Eo(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var a = t.getValue(),
			n = "";
		return (
			e && (n = xo(e) ? (e.checked ? "true" : "false") : e.value),
			(e = n),
			e !== a ? (t.setValue(e), !0) : !1
		);
	}
	function $u(e) {
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
	var g0 = /[\n"\\]/g;
	function At(e) {
		return e.replace(g0, function (t) {
			return "\\" + t.charCodeAt(0).toString(16) + " ";
		});
	}
	function Cr(e, t, a, n, u, r, d, y) {
		(e.name = ""),
			d != null &&
			typeof d != "function" &&
			typeof d != "symbol" &&
			typeof d != "boolean"
				? (e.type = d)
				: e.removeAttribute("type"),
			t != null
				? d === "number"
					? ((t === 0 && e.value === "") || e.value != t) &&
						(e.value = "" + Tt(t))
					: e.value !== "" + Tt(t) && (e.value = "" + Tt(t))
				: (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
			t != null
				? Nr(e, d, Tt(t))
				: a != null
					? Nr(e, d, Tt(a))
					: n != null && e.removeAttribute("value"),
			u == null && r != null && (e.defaultChecked = !!r),
			u != null &&
				(e.checked = u && typeof u != "function" && typeof u != "symbol"),
			y != null &&
			typeof y != "function" &&
			typeof y != "symbol" &&
			typeof y != "boolean"
				? (e.name = "" + Tt(y))
				: e.removeAttribute("name");
	}
	function To(e, t, a, n, u, r, d, y) {
		if (
			(r != null &&
				typeof r != "function" &&
				typeof r != "symbol" &&
				typeof r != "boolean" &&
				(e.type = r),
			t != null || a != null)
		) {
			if (!((r !== "submit" && r !== "reset") || t != null)) return;
			(a = a != null ? "" + Tt(a) : ""),
				(t = t != null ? "" + Tt(t) : a),
				y || t === e.value || (e.value = t),
				(e.defaultValue = t);
		}
		(n = n ?? u),
			(n = typeof n != "function" && typeof n != "symbol" && !!n),
			(e.checked = y ? e.checked : !!n),
			(e.defaultChecked = !!n),
			d != null &&
				typeof d != "function" &&
				typeof d != "symbol" &&
				typeof d != "boolean" &&
				(e.name = d);
	}
	function Nr(e, t, a) {
		(t === "number" && $u(e.ownerDocument) === e) ||
			e.defaultValue === "" + a ||
			(e.defaultValue = "" + a);
	}
	function zn(e, t, a, n) {
		if (((e = e.options), t)) {
			t = {};
			for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
			for (a = 0; a < e.length; a++)
				(u = t.hasOwnProperty("$" + e[a].value)),
					e[a].selected !== u && (e[a].selected = u),
					u && n && (e[a].defaultSelected = !0);
		} else {
			for (a = "" + Tt(a), t = null, u = 0; u < e.length; u++) {
				if (e[u].value === a) {
					(e[u].selected = !0), n && (e[u].defaultSelected = !0);
					return;
				}
				t !== null || e[u].disabled || (t = e[u]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Ao(e, t, a) {
		if (
			t != null &&
			((t = "" + Tt(t)), t !== e.value && (e.value = t), a == null)
		) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = a != null ? "" + Tt(a) : "";
	}
	function Ro(e, t, a, n) {
		if (t == null) {
			if (n != null) {
				if (a != null) throw Error(s(92));
				if (te(n)) {
					if (1 < n.length) throw Error(s(93));
					n = n[0];
				}
				a = n;
			}
			a == null && (a = ""), (t = a);
		}
		(a = Tt(t)),
			(e.defaultValue = a),
			(n = e.textContent),
			n === a && n !== "" && n !== null && (e.value = n);
	}
	function Mn(e, t) {
		if (t) {
			var a = e.firstChild;
			if (a && a === e.lastChild && a.nodeType === 3) {
				a.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var b0 = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function Oo(e, t, a) {
		var n = t.indexOf("--") === 0;
		a == null || typeof a == "boolean" || a === ""
			? n
				? e.setProperty(t, "")
				: t === "float"
					? (e.cssFloat = "")
					: (e[t] = "")
			: n
				? e.setProperty(t, a)
				: typeof a != "number" || a === 0 || b0.has(t)
					? t === "float"
						? (e.cssFloat = a)
						: (e[t] = ("" + a).trim())
					: (e[t] = a + "px");
	}
	function wo(e, t, a) {
		if (t != null && typeof t != "object") throw Error(s(62));
		if (((e = e.style), a != null)) {
			for (var n in a)
				!a.hasOwnProperty(n) ||
					(t != null && t.hasOwnProperty(n)) ||
					(n.indexOf("--") === 0
						? e.setProperty(n, "")
						: n === "float"
							? (e.cssFloat = "")
							: (e[n] = ""));
			for (var u in t)
				(n = t[u]), t.hasOwnProperty(u) && a[u] !== n && Oo(e, u, n);
		} else for (var r in t) t.hasOwnProperty(r) && Oo(e, r, t[r]);
	}
	function zr(e) {
		if (e.indexOf("-") === -1) return !1;
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
	var _0 = new Map([
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
		S0 =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Ju(e) {
		return S0.test("" + e)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: e;
	}
	var Mr = null;
	function Dr(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		);
	}
	var Dn = null,
		jn = null;
	function Co(e) {
		var t = wn(e);
		if (t && (e = t.stateNode)) {
			var a = e[ht] || null;
			e: switch (((e = t.stateNode), t.type)) {
				case "input":
					if (
						(Cr(
							e,
							a.value,
							a.defaultValue,
							a.defaultValue,
							a.checked,
							a.defaultChecked,
							a.type,
							a.name,
						),
						(t = a.name),
						a.type === "radio" && t != null)
					) {
						for (a = e; a.parentNode; ) a = a.parentNode;
						for (
							a = a.querySelectorAll(
								'input[name="' + At("" + t) + '"][type="radio"]',
							),
								t = 0;
							t < a.length;
							t++
						) {
							var n = a[t];
							if (n !== e && n.form === e.form) {
								var u = n[ht] || null;
								if (!u) throw Error(s(90));
								Cr(
									n,
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
						for (t = 0; t < a.length; t++)
							(n = a[t]), n.form === e.form && Eo(n);
					}
					break e;
				case "textarea":
					Ao(e, a.value, a.defaultValue);
					break e;
				case "select":
					(t = a.value), t != null && zn(e, !!a.multiple, t, !1);
			}
		}
	}
	var jr = !1;
	function No(e, t, a) {
		if (jr) return e(t, a);
		jr = !0;
		try {
			var n = e(t);
			return n;
		} finally {
			if (
				((jr = !1),
				(Dn !== null || jn !== null) &&
					(Mi(), Dn && ((t = Dn), (e = jn), (jn = Dn = null), Co(t), e)))
			)
				for (t = 0; t < e.length; t++) Co(e[t]);
		}
	}
	function El(e, t) {
		var a = e.stateNode;
		if (a === null) return null;
		var n = a[ht] || null;
		if (n === null) return null;
		a = n[t];
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
				(n = !n.disabled) ||
					((e = e.type),
					(n = !(
						e === "button" ||
						e === "input" ||
						e === "select" ||
						e === "textarea"
					))),
					(e = !n);
				break e;
			default:
				e = !1;
		}
		if (e) return null;
		if (a && typeof a != "function") throw Error(s(231, t, typeof a));
		return a;
	}
	var Ur = !1;
	if (aa)
		try {
			var Tl = {};
			Object.defineProperty(Tl, "passive", {
				get: function () {
					Ur = !0;
				},
			}),
				window.addEventListener("test", Tl, Tl),
				window.removeEventListener("test", Tl, Tl);
		} catch {
			Ur = !1;
		}
	var Ra = null,
		kr = null,
		Wu = null;
	function zo() {
		if (Wu) return Wu;
		var e,
			t = kr,
			a = t.length,
			n,
			u = "value" in Ra ? Ra.value : Ra.textContent,
			r = u.length;
		for (e = 0; e < a && t[e] === u[e]; e++);
		var d = a - e;
		for (n = 1; n <= d && t[a - n] === u[r - n]; n++);
		return (Wu = u.slice(e, 1 < n ? 1 - n : void 0));
	}
	function Fu(e) {
		var t = e.keyCode;
		return (
			"charCode" in e
				? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
				: (e = t),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		);
	}
	function Pu() {
		return !0;
	}
	function Mo() {
		return !1;
	}
	function mt(e) {
		function t(a, n, u, r, d) {
			(this._reactName = a),
				(this._targetInst = u),
				(this.type = n),
				(this.nativeEvent = r),
				(this.target = d),
				(this.currentTarget = null);
			for (var y in e)
				e.hasOwnProperty(y) && ((a = e[y]), (this[y] = a ? a(r) : r[y]));
			return (
				(this.isDefaultPrevented = (
					r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
				)
					? Pu
					: Mo),
				(this.isPropagationStopped = Mo),
				this
			);
		}
		return (
			ee(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var a = this.nativeEvent;
					a &&
						(a.preventDefault
							? a.preventDefault()
							: typeof a.returnValue != "unknown" && (a.returnValue = !1),
						(this.isDefaultPrevented = Pu));
				},
				stopPropagation: function () {
					var a = this.nativeEvent;
					a &&
						(a.stopPropagation
							? a.stopPropagation()
							: typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
						(this.isPropagationStopped = Pu));
				},
				persist: function () {},
				isPersistent: Pu,
			}),
			t
		);
	}
	var an = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Iu = mt(an),
		Al = ee({}, an, { view: 0, detail: 0 }),
		x0 = mt(Al),
		Hr,
		Zr,
		Rl,
		ei = ee({}, Al, {
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
			getModifierState: qr,
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
					: (e !== Rl &&
							(Rl && e.type === "mousemove"
								? ((Hr = e.screenX - Rl.screenX), (Zr = e.screenY - Rl.screenY))
								: (Zr = Hr = 0),
							(Rl = e)),
						Hr);
			},
			movementY: function (e) {
				return "movementY" in e ? e.movementY : Zr;
			},
		}),
		Do = mt(ei),
		E0 = ee({}, ei, { dataTransfer: 0 }),
		T0 = mt(E0),
		A0 = ee({}, Al, { relatedTarget: 0 }),
		Br = mt(A0),
		R0 = ee({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		O0 = mt(R0),
		w0 = ee({}, an, {
			clipboardData: function (e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData;
			},
		}),
		C0 = mt(w0),
		N0 = ee({}, an, { data: 0 }),
		jo = mt(N0),
		z0 = {
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
		M0 = {
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
		D0 = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function j0(e) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(e)
			: (e = D0[e])
				? !!t[e]
				: !1;
	}
	function qr() {
		return j0;
	}
	var U0 = ee({}, Al, {
			key: function (e) {
				if (e.key) {
					var t = z0[e.key] || e.key;
					if (t !== "Unidentified") return t;
				}
				return e.type === "keypress"
					? ((e = Fu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
					: e.type === "keydown" || e.type === "keyup"
						? M0[e.keyCode] || "Unidentified"
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
			getModifierState: qr,
			charCode: function (e) {
				return e.type === "keypress" ? Fu(e) : 0;
			},
			keyCode: function (e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			},
			which: function (e) {
				return e.type === "keypress"
					? Fu(e)
					: e.type === "keydown" || e.type === "keyup"
						? e.keyCode
						: 0;
			},
		}),
		k0 = mt(U0),
		H0 = ee({}, ei, {
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
		Uo = mt(H0),
		Z0 = ee({}, Al, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: qr,
		}),
		B0 = mt(Z0),
		q0 = ee({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		L0 = mt(q0),
		Y0 = ee({}, ei, {
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
		V0 = mt(Y0),
		G0 = ee({}, an, { newState: 0, oldState: 0 }),
		X0 = mt(G0),
		Q0 = [9, 13, 27, 32],
		Lr = aa && "CompositionEvent" in window,
		Ol = null;
	aa && "documentMode" in document && (Ol = document.documentMode);
	var K0 = aa && "TextEvent" in window && !Ol,
		ko = aa && (!Lr || (Ol && 8 < Ol && 11 >= Ol)),
		Ho = " ",
		Zo = !1;
	function Bo(e, t) {
		switch (e) {
			case "keyup":
				return Q0.indexOf(t.keyCode) !== -1;
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
	function qo(e) {
		return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
	}
	var Un = !1;
	function $0(e, t) {
		switch (e) {
			case "compositionend":
				return qo(t);
			case "keypress":
				return t.which !== 32 ? null : ((Zo = !0), Ho);
			case "textInput":
				return (e = t.data), e === Ho && Zo ? null : e;
			default:
				return null;
		}
	}
	function J0(e, t) {
		if (Un)
			return e === "compositionend" || (!Lr && Bo(e, t))
				? ((e = zo()), (Wu = kr = Ra = null), (Un = !1), e)
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
				return ko && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var W0 = {
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
	function Lo(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!W0[e.type] : t === "textarea";
	}
	function Yo(e, t, a, n) {
		Dn ? (jn ? jn.push(n) : (jn = [n])) : (Dn = n),
			(t = Hi(t, "onChange")),
			0 < t.length &&
				((a = new Iu("onChange", "change", null, a, n)),
				e.push({ event: a, listeners: t }));
	}
	var wl = null,
		Cl = null;
	function F0(e) {
		vh(e, 0);
	}
	function ti(e) {
		var t = xl(e);
		if (Eo(t)) return e;
	}
	function Vo(e, t) {
		if (e === "change") return t;
	}
	var Go = !1;
	if (aa) {
		var Yr;
		if (aa) {
			var Vr = "oninput" in document;
			if (!Vr) {
				var Xo = document.createElement("div");
				Xo.setAttribute("oninput", "return;"),
					(Vr = typeof Xo.oninput == "function");
			}
			Yr = Vr;
		} else Yr = !1;
		Go = Yr && (!document.documentMode || 9 < document.documentMode);
	}
	function Qo() {
		wl && (wl.detachEvent("onpropertychange", Ko), (Cl = wl = null));
	}
	function Ko(e) {
		if (e.propertyName === "value" && ti(Cl)) {
			var t = [];
			Yo(t, Cl, e, Dr(e)), No(F0, t);
		}
	}
	function P0(e, t, a) {
		e === "focusin"
			? (Qo(), (wl = t), (Cl = a), wl.attachEvent("onpropertychange", Ko))
			: e === "focusout" && Qo();
	}
	function I0(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown")
			return ti(Cl);
	}
	function ev(e, t) {
		if (e === "click") return ti(t);
	}
	function tv(e, t) {
		if (e === "input" || e === "change") return ti(t);
	}
	function av(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var gt = typeof Object.is == "function" ? Object.is : av;
	function Nl(e, t) {
		if (gt(e, t)) return !0;
		if (
			typeof e != "object" ||
			e === null ||
			typeof t != "object" ||
			t === null
		)
			return !1;
		var a = Object.keys(e),
			n = Object.keys(t);
		if (a.length !== n.length) return !1;
		for (n = 0; n < a.length; n++) {
			var u = a[n];
			if (!Er.call(t, u) || !gt(e[u], t[u])) return !1;
		}
		return !0;
	}
	function $o(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function Jo(e, t) {
		var a = $o(e);
		e = 0;
		for (var n; a; ) {
			if (a.nodeType === 3) {
				if (((n = e + a.textContent.length), e <= t && n >= t))
					return { node: a, offset: t - e };
				e = n;
			}
			e: {
				for (; a; ) {
					if (a.nextSibling) {
						a = a.nextSibling;
						break e;
					}
					a = a.parentNode;
				}
				a = void 0;
			}
			a = $o(a);
		}
	}
	function Wo(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
					? !1
					: t && t.nodeType === 3
						? Wo(e, t.parentNode)
						: "contains" in e
							? e.contains(t)
							: e.compareDocumentPosition
								? !!(e.compareDocumentPosition(t) & 16)
								: !1
			: !1;
	}
	function Fo(e) {
		e =
			e != null &&
			e.ownerDocument != null &&
			e.ownerDocument.defaultView != null
				? e.ownerDocument.defaultView
				: window;
		for (var t = $u(e.document); t instanceof e.HTMLIFrameElement; ) {
			try {
				var a = typeof t.contentWindow.location.href == "string";
			} catch {
				a = !1;
			}
			if (a) e = t.contentWindow;
			else break;
			t = $u(e.document);
		}
		return t;
	}
	function Gr(e) {
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
	function nv(e, t) {
		var a = Fo(t);
		t = e.focusedElem;
		var n = e.selectionRange;
		if (
			a !== t &&
			t &&
			t.ownerDocument &&
			Wo(t.ownerDocument.documentElement, t)
		) {
			if (n !== null && Gr(t)) {
				if (
					((e = n.start),
					(a = n.end),
					a === void 0 && (a = e),
					"selectionStart" in t)
				)
					(t.selectionStart = e),
						(t.selectionEnd = Math.min(a, t.value.length));
				else if (
					((a = ((e = t.ownerDocument || document) && e.defaultView) || window),
					a.getSelection)
				) {
					a = a.getSelection();
					var u = t.textContent.length,
						r = Math.min(n.start, u);
					(n = n.end === void 0 ? r : Math.min(n.end, u)),
						!a.extend && r > n && ((u = n), (n = r), (r = u)),
						(u = Jo(t, r));
					var d = Jo(t, n);
					u &&
						d &&
						(a.rangeCount !== 1 ||
							a.anchorNode !== u.node ||
							a.anchorOffset !== u.offset ||
							a.focusNode !== d.node ||
							a.focusOffset !== d.offset) &&
						((e = e.createRange()),
						e.setStart(u.node, u.offset),
						a.removeAllRanges(),
						r > n
							? (a.addRange(e), a.extend(d.node, d.offset))
							: (e.setEnd(d.node, d.offset), a.addRange(e)));
				}
			}
			for (e = [], a = t; (a = a.parentNode); )
				a.nodeType === 1 &&
					e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
			for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
				(a = e[t]),
					(a.element.scrollLeft = a.left),
					(a.element.scrollTop = a.top);
		}
	}
	var lv = aa && "documentMode" in document && 11 >= document.documentMode,
		kn = null,
		Xr = null,
		zl = null,
		Qr = !1;
	function Po(e, t, a) {
		var n =
			a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
		Qr ||
			kn == null ||
			kn !== $u(n) ||
			((n = kn),
			"selectionStart" in n && Gr(n)
				? (n = { start: n.selectionStart, end: n.selectionEnd })
				: ((n = (
						(n.ownerDocument && n.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(n = {
						anchorNode: n.anchorNode,
						anchorOffset: n.anchorOffset,
						focusNode: n.focusNode,
						focusOffset: n.focusOffset,
					})),
			(zl && Nl(zl, n)) ||
				((zl = n),
				(n = Hi(Xr, "onSelect")),
				0 < n.length &&
					((t = new Iu("onSelect", "select", null, t, a)),
					e.push({ event: t, listeners: n }),
					(t.target = kn))));
	}
	function nn(e, t) {
		var a = {};
		return (
			(a[e.toLowerCase()] = t.toLowerCase()),
			(a["Webkit" + e] = "webkit" + t),
			(a["Moz" + e] = "moz" + t),
			a
		);
	}
	var Hn = {
			animationend: nn("Animation", "AnimationEnd"),
			animationiteration: nn("Animation", "AnimationIteration"),
			animationstart: nn("Animation", "AnimationStart"),
			transitionrun: nn("Transition", "TransitionRun"),
			transitionstart: nn("Transition", "TransitionStart"),
			transitioncancel: nn("Transition", "TransitionCancel"),
			transitionend: nn("Transition", "TransitionEnd"),
		},
		Kr = {},
		Io = {};
	aa &&
		((Io = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Hn.animationend.animation,
			delete Hn.animationiteration.animation,
			delete Hn.animationstart.animation),
		"TransitionEvent" in window || delete Hn.transitionend.transition);
	function ln(e) {
		if (Kr[e]) return Kr[e];
		if (!Hn[e]) return e;
		var t = Hn[e],
			a;
		for (a in t) if (t.hasOwnProperty(a) && a in Io) return (Kr[e] = t[a]);
		return e;
	}
	var ef = ln("animationend"),
		tf = ln("animationiteration"),
		af = ln("animationstart"),
		uv = ln("transitionrun"),
		iv = ln("transitionstart"),
		rv = ln("transitioncancel"),
		nf = ln("transitionend"),
		lf = new Map(),
		uf =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
				" ",
			);
	function kt(e, t) {
		lf.set(e, t), tn(t, [e]);
	}
	var Rt = [],
		Zn = 0,
		$r = 0;
	function ai() {
		for (var e = Zn, t = ($r = Zn = 0); t < e; ) {
			var a = Rt[t];
			Rt[t++] = null;
			var n = Rt[t];
			Rt[t++] = null;
			var u = Rt[t];
			Rt[t++] = null;
			var r = Rt[t];
			if (((Rt[t++] = null), n !== null && u !== null)) {
				var d = n.pending;
				d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
					(n.pending = u);
			}
			r !== 0 && rf(a, u, r);
		}
	}
	function ni(e, t, a, n) {
		(Rt[Zn++] = e),
			(Rt[Zn++] = t),
			(Rt[Zn++] = a),
			(Rt[Zn++] = n),
			($r |= n),
			(e.lanes |= n),
			(e = e.alternate),
			e !== null && (e.lanes |= n);
	}
	function Jr(e, t, a, n) {
		return ni(e, t, a, n), li(e);
	}
	function Oa(e, t) {
		return ni(e, null, null, t), li(e);
	}
	function rf(e, t, a) {
		e.lanes |= a;
		var n = e.alternate;
		n !== null && (n.lanes |= a);
		for (var u = !1, r = e.return; r !== null; )
			(r.childLanes |= a),
				(n = r.alternate),
				n !== null && (n.childLanes |= a),
				r.tag === 22 &&
					((e = r.stateNode), e === null || e._visibility & 1 || (u = !0)),
				(e = r),
				(r = r.return);
		u &&
			t !== null &&
			e.tag === 3 &&
			((r = e.stateNode),
			(u = 31 - pt(a)),
			(r = r.hiddenUpdates),
			(e = r[u]),
			e === null ? (r[u] = [t]) : e.push(t),
			(t.lane = a | 536870912));
	}
	function li(e) {
		if (50 < au) throw ((au = 0), (ts = null), Error(s(185)));
		for (var t = e.return; t !== null; ) (e = t), (t = e.return);
		return e.tag === 3 ? e.stateNode : null;
	}
	var Bn = {},
		cf = new WeakMap();
	function Ot(e, t) {
		if (typeof e == "object" && e !== null) {
			var a = cf.get(e);
			return a !== void 0
				? a
				: ((t = { value: e, source: t, stack: ce(t) }), cf.set(e, t), t);
		}
		return { value: e, source: t, stack: ce(t) };
	}
	var qn = [],
		Ln = 0,
		ui = null,
		ii = 0,
		wt = [],
		Ct = 0,
		un = null,
		la = 1,
		ua = "";
	function rn(e, t) {
		(qn[Ln++] = ii), (qn[Ln++] = ui), (ui = e), (ii = t);
	}
	function sf(e, t, a) {
		(wt[Ct++] = la), (wt[Ct++] = ua), (wt[Ct++] = un), (un = e);
		var n = la;
		e = ua;
		var u = 32 - pt(n) - 1;
		(n &= ~(1 << u)), (a += 1);
		var r = 32 - pt(t) + u;
		if (30 < r) {
			var d = u - (u % 5);
			(r = (n & ((1 << d) - 1)).toString(32)),
				(n >>= d),
				(u -= d),
				(la = (1 << (32 - pt(t) + u)) | (a << u) | n),
				(ua = r + e);
		} else (la = (1 << r) | (a << u) | n), (ua = e);
	}
	function Wr(e) {
		e.return !== null && (rn(e, 1), sf(e, 1, 0));
	}
	function Fr(e) {
		for (; e === ui; )
			(ui = qn[--Ln]), (qn[Ln] = null), (ii = qn[--Ln]), (qn[Ln] = null);
		for (; e === un; )
			(un = wt[--Ct]),
				(wt[Ct] = null),
				(ua = wt[--Ct]),
				(wt[Ct] = null),
				(la = wt[--Ct]),
				(wt[Ct] = null);
	}
	var ot = null,
		at = null,
		Ee = !1,
		Ht = null,
		Qt = !1,
		Pr = Error(s(519));
	function cn(e) {
		var t = Error(s(418, ""));
		throw (jl(Ot(t, e)), Pr);
	}
	function of(e) {
		var t = e.stateNode,
			a = e.type,
			n = e.memoizedProps;
		switch (((t[ut] = e), (t[ht] = n), a)) {
			case "dialog":
				be("cancel", t), be("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				be("load", t);
				break;
			case "video":
			case "audio":
				for (a = 0; a < lu.length; a++) be(lu[a], t);
				break;
			case "source":
				be("error", t);
				break;
			case "img":
			case "image":
			case "link":
				be("error", t), be("load", t);
				break;
			case "details":
				be("toggle", t);
				break;
			case "input":
				be("invalid", t),
					To(
						t,
						n.value,
						n.defaultValue,
						n.checked,
						n.defaultChecked,
						n.type,
						n.name,
						!0,
					),
					Ku(t);
				break;
			case "select":
				be("invalid", t);
				break;
			case "textarea":
				be("invalid", t), Ro(t, n.value, n.defaultValue, n.children), Ku(t);
		}
		(a = n.children),
			(typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
			t.textContent === "" + a ||
			n.suppressHydrationWarning === !0 ||
			bh(t.textContent, a)
				? (n.popover != null && (be("beforetoggle", t), be("toggle", t)),
					n.onScroll != null && be("scroll", t),
					n.onScrollEnd != null && be("scrollend", t),
					n.onClick != null && (t.onclick = Zi),
					(t = !0))
				: (t = !1),
			t || cn(e);
	}
	function ff(e) {
		for (ot = e.return; ot; )
			switch (ot.tag) {
				case 3:
				case 27:
					Qt = !0;
					return;
				case 5:
				case 13:
					Qt = !1;
					return;
				default:
					ot = ot.return;
			}
	}
	function Ml(e) {
		if (e !== ot) return !1;
		if (!Ee) return ff(e), (Ee = !0), !1;
		var t = !1,
			a;
		if (
			((a = e.tag !== 3 && e.tag !== 27) &&
				((a = e.tag === 5) &&
					((a = e.type),
					(a =
						!(a !== "form" && a !== "button") || gs(e.type, e.memoizedProps))),
				(a = !a)),
			a && (t = !0),
			t && at && cn(e),
			ff(e),
			e.tag === 13)
		) {
			if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
				throw Error(s(317));
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8)
						if (((a = e.data), a === "/$")) {
							if (t === 0) {
								at = Bt(e.nextSibling);
								break e;
							}
							t--;
						} else (a !== "$" && a !== "$!" && a !== "$?") || t++;
					e = e.nextSibling;
				}
				at = null;
			}
		} else at = ot ? Bt(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Dl() {
		(at = ot = null), (Ee = !1);
	}
	function jl(e) {
		Ht === null ? (Ht = [e]) : Ht.push(e);
	}
	var Ul = Error(s(460)),
		df = Error(s(474)),
		Ir = { then: function () {} };
	function hf(e) {
		return (e = e.status), e === "fulfilled" || e === "rejected";
	}
	function ri() {}
	function mf(e, t, a) {
		switch (
			((a = e[a]),
			a === void 0 ? e.push(t) : a !== t && (t.then(ri, ri), (t = a)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw ((e = t.reason), e === Ul ? Error(s(483)) : e);
			default:
				if (typeof t.status == "string") t.then(ri, ri);
				else {
					if (((e = ze), e !== null && 100 < e.shellSuspendCounter))
						throw Error(s(482));
					(e = t),
						(e.status = "pending"),
						e.then(
							function (n) {
								if (t.status === "pending") {
									var u = t;
									(u.status = "fulfilled"), (u.value = n);
								}
							},
							function (n) {
								if (t.status === "pending") {
									var u = t;
									(u.status = "rejected"), (u.reason = n);
								}
							},
						);
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw ((e = t.reason), e === Ul ? Error(s(483)) : e);
				}
				throw ((kl = t), Ul);
		}
	}
	var kl = null;
	function vf() {
		if (kl === null) throw Error(s(459));
		var e = kl;
		return (kl = null), e;
	}
	var Yn = null,
		Hl = 0;
	function ci(e) {
		var t = Hl;
		return (Hl += 1), Yn === null && (Yn = []), mf(Yn, e, t);
	}
	function Zl(e, t) {
		(t = t.props.ref), (e.ref = t !== void 0 ? t : null);
	}
	function si(e, t) {
		throw t.$$typeof === f
			? Error(s(525))
			: ((e = Object.prototype.toString.call(t)),
				Error(
					s(
						31,
						e === "[object Object]"
							? "object with keys {" + Object.keys(t).join(", ") + "}"
							: e,
					),
				));
	}
	function yf(e) {
		var t = e._init;
		return t(e._payload);
	}
	function pf(e) {
		function t(A, E) {
			if (e) {
				var O = A.deletions;
				O === null ? ((A.deletions = [E]), (A.flags |= 16)) : O.push(E);
			}
		}
		function a(A, E) {
			if (!e) return null;
			for (; E !== null; ) t(A, E), (E = E.sibling);
			return null;
		}
		function n(A) {
			for (var E = new Map(); A !== null; )
				A.key !== null ? E.set(A.key, A) : E.set(A.index, A), (A = A.sibling);
			return E;
		}
		function u(A, E) {
			return (A = Ba(A, E)), (A.index = 0), (A.sibling = null), A;
		}
		function r(A, E, O) {
			return (
				(A.index = O),
				e
					? ((O = A.alternate),
						O !== null
							? ((O = O.index), O < E ? ((A.flags |= 33554434), E) : O)
							: ((A.flags |= 33554434), E))
					: ((A.flags |= 1048576), E)
			);
		}
		function d(A) {
			return e && A.alternate === null && (A.flags |= 33554434), A;
		}
		function y(A, E, O, j) {
			return E === null || E.tag !== 6
				? ((E = Kc(O, A.mode, j)), (E.return = A), E)
				: ((E = u(E, O)), (E.return = A), E);
		}
		function g(A, E, O, j) {
			var $ = O.type;
			return $ === h
				? D(A, E, O.props.children, j, O.key)
				: E !== null &&
					  (E.elementType === $ ||
							(typeof $ == "object" &&
								$ !== null &&
								$.$$typeof === J &&
								yf($) === E.type))
					? ((E = u(E, O.props)), Zl(E, O), (E.return = A), E)
					: ((E = Oi(O.type, O.key, O.props, null, A.mode, j)),
						Zl(E, O),
						(E.return = A),
						E);
		}
		function T(A, E, O, j) {
			return E === null ||
				E.tag !== 4 ||
				E.stateNode.containerInfo !== O.containerInfo ||
				E.stateNode.implementation !== O.implementation
				? ((E = $c(O, A.mode, j)), (E.return = A), E)
				: ((E = u(E, O.children || [])), (E.return = A), E);
		}
		function D(A, E, O, j, $) {
			return E === null || E.tag !== 7
				? ((E = gn(O, A.mode, j, $)), (E.return = A), E)
				: ((E = u(E, O)), (E.return = A), E);
		}
		function U(A, E, O) {
			if (
				(typeof E == "string" && E !== "") ||
				typeof E == "number" ||
				typeof E == "bigint"
			)
				return (E = Kc("" + E, A.mode, O)), (E.return = A), E;
			if (typeof E == "object" && E !== null) {
				switch (E.$$typeof) {
					case p:
						return (
							(O = Oi(E.type, E.key, E.props, null, A.mode, O)),
							Zl(O, E),
							(O.return = A),
							O
						);
					case v:
						return (E = $c(E, A.mode, O)), (E.return = A), E;
					case J:
						var j = E._init;
						return (E = j(E._payload)), U(A, E, O);
				}
				if (te(E) || ye(E))
					return (E = gn(E, A.mode, O, null)), (E.return = A), E;
				if (typeof E.then == "function") return U(A, ci(E), O);
				if (E.$$typeof === R) return U(A, Ti(A, E), O);
				si(A, E);
			}
			return null;
		}
		function w(A, E, O, j) {
			var $ = E !== null ? E.key : null;
			if (
				(typeof O == "string" && O !== "") ||
				typeof O == "number" ||
				typeof O == "bigint"
			)
				return $ !== null ? null : y(A, E, "" + O, j);
			if (typeof O == "object" && O !== null) {
				switch (O.$$typeof) {
					case p:
						return O.key === $ ? g(A, E, O, j) : null;
					case v:
						return O.key === $ ? T(A, E, O, j) : null;
					case J:
						return ($ = O._init), (O = $(O._payload)), w(A, E, O, j);
				}
				if (te(O) || ye(O)) return $ !== null ? null : D(A, E, O, j, null);
				if (typeof O.then == "function") return w(A, E, ci(O), j);
				if (O.$$typeof === R) return w(A, E, Ti(A, O), j);
				si(A, O);
			}
			return null;
		}
		function z(A, E, O, j, $) {
			if (
				(typeof j == "string" && j !== "") ||
				typeof j == "number" ||
				typeof j == "bigint"
			)
				return (A = A.get(O) || null), y(E, A, "" + j, $);
			if (typeof j == "object" && j !== null) {
				switch (j.$$typeof) {
					case p:
						return (
							(A = A.get(j.key === null ? O : j.key) || null), g(E, A, j, $)
						);
					case v:
						return (
							(A = A.get(j.key === null ? O : j.key) || null), T(E, A, j, $)
						);
					case J:
						var me = j._init;
						return (j = me(j._payload)), z(A, E, O, j, $);
				}
				if (te(j) || ye(j)) return (A = A.get(O) || null), D(E, A, j, $, null);
				if (typeof j.then == "function") return z(A, E, O, ci(j), $);
				if (j.$$typeof === R) return z(A, E, O, Ti(E, j), $);
				si(E, j);
			}
			return null;
		}
		function F(A, E, O, j) {
			for (
				var $ = null, me = null, I = E, ae = (E = 0), tt = null;
				I !== null && ae < O.length;
				ae++
			) {
				I.index > ae ? ((tt = I), (I = null)) : (tt = I.sibling);
				var Te = w(A, I, O[ae], j);
				if (Te === null) {
					I === null && (I = tt);
					break;
				}
				e && I && Te.alternate === null && t(A, I),
					(E = r(Te, E, ae)),
					me === null ? ($ = Te) : (me.sibling = Te),
					(me = Te),
					(I = tt);
			}
			if (ae === O.length) return a(A, I), Ee && rn(A, ae), $;
			if (I === null) {
				for (; ae < O.length; ae++)
					(I = U(A, O[ae], j)),
						I !== null &&
							((E = r(I, E, ae)),
							me === null ? ($ = I) : (me.sibling = I),
							(me = I));
				return Ee && rn(A, ae), $;
			}
			for (I = n(I); ae < O.length; ae++)
				(tt = z(I, A, ae, O[ae], j)),
					tt !== null &&
						(e &&
							tt.alternate !== null &&
							I.delete(tt.key === null ? ae : tt.key),
						(E = r(tt, E, ae)),
						me === null ? ($ = tt) : (me.sibling = tt),
						(me = tt));
			return (
				e &&
					I.forEach(function (Qa) {
						return t(A, Qa);
					}),
				Ee && rn(A, ae),
				$
			);
		}
		function re(A, E, O, j) {
			if (O == null) throw Error(s(151));
			for (
				var $ = null, me = null, I = E, ae = (E = 0), tt = null, Te = O.next();
				I !== null && !Te.done;
				ae++, Te = O.next()
			) {
				I.index > ae ? ((tt = I), (I = null)) : (tt = I.sibling);
				var Qa = w(A, I, Te.value, j);
				if (Qa === null) {
					I === null && (I = tt);
					break;
				}
				e && I && Qa.alternate === null && t(A, I),
					(E = r(Qa, E, ae)),
					me === null ? ($ = Qa) : (me.sibling = Qa),
					(me = Qa),
					(I = tt);
			}
			if (Te.done) return a(A, I), Ee && rn(A, ae), $;
			if (I === null) {
				for (; !Te.done; ae++, Te = O.next())
					(Te = U(A, Te.value, j)),
						Te !== null &&
							((E = r(Te, E, ae)),
							me === null ? ($ = Te) : (me.sibling = Te),
							(me = Te));
				return Ee && rn(A, ae), $;
			}
			for (I = n(I); !Te.done; ae++, Te = O.next())
				(Te = z(I, A, ae, Te.value, j)),
					Te !== null &&
						(e &&
							Te.alternate !== null &&
							I.delete(Te.key === null ? ae : Te.key),
						(E = r(Te, E, ae)),
						me === null ? ($ = Te) : (me.sibling = Te),
						(me = Te));
			return (
				e &&
					I.forEach(function (Sy) {
						return t(A, Sy);
					}),
				Ee && rn(A, ae),
				$
			);
		}
		function qe(A, E, O, j) {
			if (
				(typeof O == "object" &&
					O !== null &&
					O.type === h &&
					O.key === null &&
					(O = O.props.children),
				typeof O == "object" && O !== null)
			) {
				switch (O.$$typeof) {
					case p:
						e: {
							for (var $ = O.key; E !== null; ) {
								if (E.key === $) {
									if ((($ = O.type), $ === h)) {
										if (E.tag === 7) {
											a(A, E.sibling),
												(j = u(E, O.props.children)),
												(j.return = A),
												(A = j);
											break e;
										}
									} else if (
										E.elementType === $ ||
										(typeof $ == "object" &&
											$ !== null &&
											$.$$typeof === J &&
											yf($) === E.type)
									) {
										a(A, E.sibling),
											(j = u(E, O.props)),
											Zl(j, O),
											(j.return = A),
											(A = j);
										break e;
									}
									a(A, E);
									break;
								} else t(A, E);
								E = E.sibling;
							}
							O.type === h
								? ((j = gn(O.props.children, A.mode, j, O.key)),
									(j.return = A),
									(A = j))
								: ((j = Oi(O.type, O.key, O.props, null, A.mode, j)),
									Zl(j, O),
									(j.return = A),
									(A = j));
						}
						return d(A);
					case v:
						e: {
							for ($ = O.key; E !== null; ) {
								if (E.key === $)
									if (
										E.tag === 4 &&
										E.stateNode.containerInfo === O.containerInfo &&
										E.stateNode.implementation === O.implementation
									) {
										a(A, E.sibling),
											(j = u(E, O.children || [])),
											(j.return = A),
											(A = j);
										break e;
									} else {
										a(A, E);
										break;
									}
								else t(A, E);
								E = E.sibling;
							}
							(j = $c(O, A.mode, j)), (j.return = A), (A = j);
						}
						return d(A);
					case J:
						return ($ = O._init), (O = $(O._payload)), qe(A, E, O, j);
				}
				if (te(O)) return F(A, E, O, j);
				if (ye(O)) {
					if ((($ = ye(O)), typeof $ != "function")) throw Error(s(150));
					return (O = $.call(O)), re(A, E, O, j);
				}
				if (typeof O.then == "function") return qe(A, E, ci(O), j);
				if (O.$$typeof === R) return qe(A, E, Ti(A, O), j);
				si(A, O);
			}
			return (typeof O == "string" && O !== "") ||
				typeof O == "number" ||
				typeof O == "bigint"
				? ((O = "" + O),
					E !== null && E.tag === 6
						? (a(A, E.sibling), (j = u(E, O)), (j.return = A), (A = j))
						: (a(A, E), (j = Kc(O, A.mode, j)), (j.return = A), (A = j)),
					d(A))
				: a(A, E);
		}
		return function (A, E, O, j) {
			try {
				Hl = 0;
				var $ = qe(A, E, O, j);
				return (Yn = null), $;
			} catch (I) {
				if (I === Ul) throw I;
				var me = Dt(29, I, null, A.mode);
				return (me.lanes = j), (me.return = A), me;
			} finally {
			}
		};
	}
	var sn = pf(!0),
		gf = pf(!1),
		Vn = Ae(null),
		oi = Ae(0);
	function bf(e, t) {
		(e = ya), De(oi, e), De(Vn, t), (ya = e | t.baseLanes);
	}
	function ec() {
		De(oi, ya), De(Vn, Vn.current);
	}
	function tc() {
		(ya = oi.current), Ve(Vn), Ve(oi);
	}
	var Nt = Ae(null),
		Kt = null;
	function wa(e) {
		var t = e.alternate;
		De(Je, Je.current & 1),
			De(Nt, e),
			Kt === null &&
				(t === null || Vn.current !== null || t.memoizedState !== null) &&
				(Kt = e);
	}
	function _f(e) {
		if (e.tag === 22) {
			if ((De(Je, Je.current), De(Nt, e), Kt === null)) {
				var t = e.alternate;
				t !== null && t.memoizedState !== null && (Kt = e);
			}
		} else Ca();
	}
	function Ca() {
		De(Je, Je.current), De(Nt, Nt.current);
	}
	function ia(e) {
		Ve(Nt), Kt === e && (Kt = null), Ve(Je);
	}
	var Je = Ae(0);
	function fi(e) {
		for (var t = e; t !== null; ) {
			if (t.tag === 13) {
				var a = t.memoizedState;
				if (
					a !== null &&
					((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
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
	var cv =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var e = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (a, n) {
									e.push(n);
								},
							});
						this.abort = function () {
							(t.aborted = !0),
								e.forEach(function (a) {
									return a();
								});
						};
					},
		sv = i.unstable_scheduleCallback,
		ov = i.unstable_NormalPriority,
		We = {
			$$typeof: R,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function ac() {
		return { controller: new cv(), data: new Map(), refCount: 0 };
	}
	function Bl(e) {
		e.refCount--,
			e.refCount === 0 &&
				sv(ov, function () {
					e.controller.abort();
				});
	}
	var ql = null,
		nc = 0,
		Gn = 0,
		Xn = null;
	function fv(e, t) {
		if (ql === null) {
			var a = (ql = []);
			(nc = 0),
				(Gn = ss()),
				(Xn = {
					status: "pending",
					value: void 0,
					then: function (n) {
						a.push(n);
					},
				});
		}
		return nc++, t.then(Sf, Sf), t;
	}
	function Sf() {
		if (--nc === 0 && ql !== null) {
			Xn !== null && (Xn.status = "fulfilled");
			var e = ql;
			(ql = null), (Gn = 0), (Xn = null);
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function dv(e, t) {
		var a = [],
			n = {
				status: "pending",
				value: null,
				reason: null,
				then: function (u) {
					a.push(u);
				},
			};
		return (
			e.then(
				function () {
					(n.status = "fulfilled"), (n.value = t);
					for (var u = 0; u < a.length; u++) (0, a[u])(t);
				},
				function (u) {
					for (n.status = "rejected", n.reason = u, u = 0; u < a.length; u++)
						(0, a[u])(void 0);
				},
			),
			n
		);
	}
	var xf = L.S;
	L.S = function (e, t) {
		typeof t == "object" &&
			t !== null &&
			typeof t.then == "function" &&
			fv(e, t),
			xf !== null && xf(e, t);
	};
	var on = Ae(null);
	function lc() {
		var e = on.current;
		return e !== null ? e : ze.pooledCache;
	}
	function di(e, t) {
		t === null ? De(on, on.current) : De(on, t.pool);
	}
	function Ef() {
		var e = lc();
		return e === null ? null : { parent: We._currentValue, pool: e };
	}
	var Na = 0,
		he = null,
		Oe = null,
		Ge = null,
		hi = !1,
		Qn = !1,
		fn = !1,
		mi = 0,
		Ll = 0,
		Kn = null,
		hv = 0;
	function Ye() {
		throw Error(s(321));
	}
	function uc(e, t) {
		if (t === null) return !1;
		for (var a = 0; a < t.length && a < e.length; a++)
			if (!gt(e[a], t[a])) return !1;
		return !0;
	}
	function ic(e, t, a, n, u, r) {
		return (
			(Na = r),
			(he = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(L.H = e === null || e.memoizedState === null ? dn : za),
			(fn = !1),
			(r = a(n, u)),
			(fn = !1),
			Qn && (r = Af(t, a, n, u)),
			Tf(e),
			r
		);
	}
	function Tf(e) {
		L.H = $t;
		var t = Oe !== null && Oe.next !== null;
		if (((Na = 0), (Ge = Oe = he = null), (hi = !1), (Ll = 0), (Kn = null), t))
			throw Error(s(300));
		e === null ||
			Ie ||
			((e = e.dependencies), e !== null && Ei(e) && (Ie = !0));
	}
	function Af(e, t, a, n) {
		he = e;
		var u = 0;
		do {
			if ((Qn && (Kn = null), (Ll = 0), (Qn = !1), 25 <= u))
				throw Error(s(301));
			if (((u += 1), (Ge = Oe = null), e.updateQueue != null)) {
				var r = e.updateQueue;
				(r.lastEffect = null),
					(r.events = null),
					(r.stores = null),
					r.memoCache != null && (r.memoCache.index = 0);
			}
			(L.H = hn), (r = t(a, n));
		} while (Qn);
		return r;
	}
	function mv() {
		var e = L.H,
			t = e.useState()[0];
		return (
			(t = typeof t.then == "function" ? Yl(t) : t),
			(e = e.useState()[0]),
			(Oe !== null ? Oe.memoizedState : null) !== e && (he.flags |= 1024),
			t
		);
	}
	function rc() {
		var e = mi !== 0;
		return (mi = 0), e;
	}
	function cc(e, t, a) {
		(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a);
	}
	function sc(e) {
		if (hi) {
			for (e = e.memoizedState; e !== null; ) {
				var t = e.queue;
				t !== null && (t.pending = null), (e = e.next);
			}
			hi = !1;
		}
		(Na = 0), (Ge = Oe = he = null), (Qn = !1), (Ll = mi = 0), (Kn = null);
	}
	function vt() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return Ge === null ? (he.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge;
	}
	function Xe() {
		if (Oe === null) {
			var e = he.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = Oe.next;
		var t = Ge === null ? he.memoizedState : Ge.next;
		if (t !== null) (Ge = t), (Oe = e);
		else {
			if (e === null)
				throw he.alternate === null ? Error(s(467)) : Error(s(310));
			(Oe = e),
				(e = {
					memoizedState: Oe.memoizedState,
					baseState: Oe.baseState,
					baseQueue: Oe.baseQueue,
					queue: Oe.queue,
					next: null,
				}),
				Ge === null ? (he.memoizedState = Ge = e) : (Ge = Ge.next = e);
		}
		return Ge;
	}
	var vi;
	vi = function () {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	};
	function Yl(e) {
		var t = Ll;
		return (
			(Ll += 1),
			Kn === null && (Kn = []),
			(e = mf(Kn, e, t)),
			(t = he),
			(Ge === null ? t.memoizedState : Ge.next) === null &&
				((t = t.alternate),
				(L.H = t === null || t.memoizedState === null ? dn : za)),
			e
		);
	}
	function yi(e) {
		if (e !== null && typeof e == "object") {
			if (typeof e.then == "function") return Yl(e);
			if (e.$$typeof === R) return it(e);
		}
		throw Error(s(438, String(e)));
	}
	function oc(e) {
		var t = null,
			a = he.updateQueue;
		if ((a !== null && (t = a.memoCache), t == null)) {
			var n = he.alternate;
			n !== null &&
				((n = n.updateQueue),
				n !== null &&
					((n = n.memoCache),
					n != null &&
						(t = {
							data: n.data.map(function (u) {
								return u.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			a === null && ((a = vi()), (he.updateQueue = a)),
			(a.memoCache = t),
			(a = t.data[t.index]),
			a === void 0)
		)
			for (a = t.data[t.index] = Array(e), n = 0; n < e; n++) a[n] = P;
		return t.index++, a;
	}
	function ra(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function pi(e) {
		var t = Xe();
		return fc(t, Oe, e);
	}
	function fc(e, t, a) {
		var n = e.queue;
		if (n === null) throw Error(s(311));
		n.lastRenderedReducer = a;
		var u = e.baseQueue,
			r = n.pending;
		if (r !== null) {
			if (u !== null) {
				var d = u.next;
				(u.next = r.next), (r.next = d);
			}
			(t.baseQueue = u = r), (n.pending = null);
		}
		if (((r = e.baseState), u === null)) e.memoizedState = r;
		else {
			t = u.next;
			var y = (d = null),
				g = null,
				T = t,
				D = !1;
			do {
				var U = T.lane & -536870913;
				if (U !== T.lane ? (Se & U) === U : (Na & U) === U) {
					var w = T.revertLane;
					if (w === 0)
						g !== null &&
							(g = g.next =
								{
									lane: 0,
									revertLane: 0,
									action: T.action,
									hasEagerState: T.hasEagerState,
									eagerState: T.eagerState,
									next: null,
								}),
							U === Gn && (D = !0);
					else if ((Na & w) === w) {
						(T = T.next), w === Gn && (D = !0);
						continue;
					} else
						(U = {
							lane: 0,
							revertLane: T.revertLane,
							action: T.action,
							hasEagerState: T.hasEagerState,
							eagerState: T.eagerState,
							next: null,
						}),
							g === null ? ((y = g = U), (d = r)) : (g = g.next = U),
							(he.lanes |= w),
							(qa |= w);
					(U = T.action),
						fn && a(r, U),
						(r = T.hasEagerState ? T.eagerState : a(r, U));
				} else
					(w = {
						lane: U,
						revertLane: T.revertLane,
						action: T.action,
						hasEagerState: T.hasEagerState,
						eagerState: T.eagerState,
						next: null,
					}),
						g === null ? ((y = g = w), (d = r)) : (g = g.next = w),
						(he.lanes |= U),
						(qa |= U);
				T = T.next;
			} while (T !== null && T !== t);
			if (
				(g === null ? (d = r) : (g.next = y),
				!gt(r, e.memoizedState) && ((Ie = !0), D && ((a = Xn), a !== null)))
			)
				throw a;
			(e.memoizedState = r),
				(e.baseState = d),
				(e.baseQueue = g),
				(n.lastRenderedState = r);
		}
		return u === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
	}
	function dc(e) {
		var t = Xe(),
			a = t.queue;
		if (a === null) throw Error(s(311));
		a.lastRenderedReducer = e;
		var n = a.dispatch,
			u = a.pending,
			r = t.memoizedState;
		if (u !== null) {
			a.pending = null;
			var d = (u = u.next);
			do (r = e(r, d.action)), (d = d.next);
			while (d !== u);
			gt(r, t.memoizedState) || (Ie = !0),
				(t.memoizedState = r),
				t.baseQueue === null && (t.baseState = r),
				(a.lastRenderedState = r);
		}
		return [r, n];
	}
	function Rf(e, t, a) {
		var n = he,
			u = Xe(),
			r = Ee;
		if (r) {
			if (a === void 0) throw Error(s(407));
			a = a();
		} else a = t();
		var d = !gt((Oe || u).memoizedState, a);
		if (
			(d && ((u.memoizedState = a), (Ie = !0)),
			(u = u.queue),
			vc(Cf.bind(null, n, u, e), [e]),
			u.getSnapshot !== t || d || (Ge !== null && Ge.memoizedState.tag & 1))
		) {
			if (
				((n.flags |= 2048),
				$n(9, wf.bind(null, n, u, a, t), { destroy: void 0 }, null),
				ze === null)
			)
				throw Error(s(349));
			r || Na & 60 || Of(n, t, a);
		}
		return a;
	}
	function Of(e, t, a) {
		(e.flags |= 16384),
			(e = { getSnapshot: t, value: a }),
			(t = he.updateQueue),
			t === null
				? ((t = vi()), (he.updateQueue = t), (t.stores = [e]))
				: ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
	}
	function wf(e, t, a, n) {
		(t.value = a), (t.getSnapshot = n), Nf(t) && zf(e);
	}
	function Cf(e, t, a) {
		return a(function () {
			Nf(t) && zf(e);
		});
	}
	function Nf(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var a = t();
			return !gt(e, a);
		} catch {
			return !0;
		}
	}
	function zf(e) {
		var t = Oa(e, 2);
		t !== null && ft(t, e, 2);
	}
	function hc(e) {
		var t = vt();
		if (typeof e == "function") {
			var a = e;
			if (((e = a()), fn)) {
				Ta(!0);
				try {
					a();
				} finally {
					Ta(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = e),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ra,
				lastRenderedState: e,
			}),
			t
		);
	}
	function Mf(e, t, a, n) {
		return (e.baseState = a), fc(e, Oe, typeof n == "function" ? n : ra);
	}
	function vv(e, t, a, n, u) {
		if (_i(e)) throw Error(s(485));
		if (((e = t.action), e !== null)) {
			var r = {
				payload: u,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (d) {
					r.listeners.push(d);
				},
			};
			L.T !== null ? a(!0) : (r.isTransition = !1),
				n(r),
				(a = t.pending),
				a === null
					? ((r.next = t.pending = r), Df(t, r))
					: ((r.next = a.next), (t.pending = a.next = r));
		}
	}
	function Df(e, t) {
		var a = t.action,
			n = t.payload,
			u = e.state;
		if (t.isTransition) {
			var r = L.T,
				d = {};
			L.T = d;
			try {
				var y = a(u, n),
					g = L.S;
				g !== null && g(d, y), jf(e, t, y);
			} catch (T) {
				mc(e, t, T);
			} finally {
				L.T = r;
			}
		} else
			try {
				(r = a(u, n)), jf(e, t, r);
			} catch (T) {
				mc(e, t, T);
			}
	}
	function jf(e, t, a) {
		a !== null && typeof a == "object" && typeof a.then == "function"
			? a.then(
					function (n) {
						Uf(e, t, n);
					},
					function (n) {
						return mc(e, t, n);
					},
				)
			: Uf(e, t, a);
	}
	function Uf(e, t, a) {
		(t.status = "fulfilled"),
			(t.value = a),
			kf(t),
			(e.state = a),
			(t = e.pending),
			t !== null &&
				((a = t.next),
				a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Df(e, a)));
	}
	function mc(e, t, a) {
		var n = e.pending;
		if (((e.pending = null), n !== null)) {
			n = n.next;
			do (t.status = "rejected"), (t.reason = a), kf(t), (t = t.next);
			while (t !== n);
		}
		e.action = null;
	}
	function kf(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Hf(e, t) {
		return t;
	}
	function Zf(e, t) {
		if (Ee) {
			var a = ze.formState;
			if (a !== null) {
				e: {
					var n = he;
					if (Ee) {
						if (at) {
							t: {
								for (var u = at, r = Qt; u.nodeType !== 8; ) {
									if (!r) {
										u = null;
										break t;
									}
									if (((u = Bt(u.nextSibling)), u === null)) {
										u = null;
										break t;
									}
								}
								(r = u.data), (u = r === "F!" || r === "F" ? u : null);
							}
							if (u) {
								(at = Bt(u.nextSibling)), (n = u.data === "F!");
								break e;
							}
						}
						cn(n);
					}
					n = !1;
				}
				n && (t = a[0]);
			}
		}
		return (
			(a = vt()),
			(a.memoizedState = a.baseState = t),
			(n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Hf,
				lastRenderedState: t,
			}),
			(a.queue = n),
			(a = ad.bind(null, he, n)),
			(n.dispatch = a),
			(n = hc(!1)),
			(r = _c.bind(null, he, !1, n.queue)),
			(n = vt()),
			(u = { state: t, dispatch: null, action: e, pending: null }),
			(n.queue = u),
			(a = vv.bind(null, he, u, r, a)),
			(u.dispatch = a),
			(n.memoizedState = e),
			[t, a, !1]
		);
	}
	function Bf(e) {
		var t = Xe();
		return qf(t, Oe, e);
	}
	function qf(e, t, a) {
		(t = fc(e, t, Hf)[0]),
			(e = pi(ra)[0]),
			(t =
				typeof t == "object" && t !== null && typeof t.then == "function"
					? Yl(t)
					: t);
		var n = Xe(),
			u = n.queue,
			r = u.dispatch;
		return (
			a !== n.memoizedState &&
				((he.flags |= 2048),
				$n(9, yv.bind(null, u, a), { destroy: void 0 }, null)),
			[t, r, e]
		);
	}
	function yv(e, t) {
		e.action = t;
	}
	function Lf(e) {
		var t = Xe(),
			a = Oe;
		if (a !== null) return qf(t, a, e);
		Xe(), (t = t.memoizedState), (a = Xe());
		var n = a.queue.dispatch;
		return (a.memoizedState = e), [t, n, !1];
	}
	function $n(e, t, a, n) {
		return (
			(e = { tag: e, create: t, inst: a, deps: n, next: null }),
			(t = he.updateQueue),
			t === null && ((t = vi()), (he.updateQueue = t)),
			(a = t.lastEffect),
			a === null
				? (t.lastEffect = e.next = e)
				: ((n = a.next), (a.next = e), (e.next = n), (t.lastEffect = e)),
			e
		);
	}
	function Yf() {
		return Xe().memoizedState;
	}
	function gi(e, t, a, n) {
		var u = vt();
		(he.flags |= e),
			(u.memoizedState = $n(
				1 | t,
				a,
				{ destroy: void 0 },
				n === void 0 ? null : n,
			));
	}
	function bi(e, t, a, n) {
		var u = Xe();
		n = n === void 0 ? null : n;
		var r = u.memoizedState.inst;
		Oe !== null && n !== null && uc(n, Oe.memoizedState.deps)
			? (u.memoizedState = $n(t, a, r, n))
			: ((he.flags |= e), (u.memoizedState = $n(1 | t, a, r, n)));
	}
	function Vf(e, t) {
		gi(8390656, 8, e, t);
	}
	function vc(e, t) {
		bi(2048, 8, e, t);
	}
	function Gf(e, t) {
		return bi(4, 2, e, t);
	}
	function Xf(e, t) {
		return bi(4, 4, e, t);
	}
	function Qf(e, t) {
		if (typeof t == "function") {
			e = e();
			var a = t(e);
			return function () {
				typeof a == "function" ? a() : t(null);
			};
		}
		if (t != null)
			return (
				(e = e()),
				(t.current = e),
				function () {
					t.current = null;
				}
			);
	}
	function Kf(e, t, a) {
		(a = a != null ? a.concat([e]) : null), bi(4, 4, Qf.bind(null, t, e), a);
	}
	function yc() {}
	function $f(e, t) {
		var a = Xe();
		t = t === void 0 ? null : t;
		var n = a.memoizedState;
		return t !== null && uc(t, n[1]) ? n[0] : ((a.memoizedState = [e, t]), e);
	}
	function Jf(e, t) {
		var a = Xe();
		t = t === void 0 ? null : t;
		var n = a.memoizedState;
		if (t !== null && uc(t, n[1])) return n[0];
		if (((n = e()), fn)) {
			Ta(!0);
			try {
				e();
			} finally {
				Ta(!1);
			}
		}
		return (a.memoizedState = [n, t]), n;
	}
	function pc(e, t, a) {
		return a === void 0 || Na & 1073741824
			? (e.memoizedState = t)
			: ((e.memoizedState = a), (e = Fd()), (he.lanes |= e), (qa |= e), a);
	}
	function Wf(e, t, a, n) {
		return gt(a, t)
			? a
			: Vn.current !== null
				? ((e = pc(e, a, n)), gt(e, t) || (Ie = !0), e)
				: Na & 42
					? ((e = Fd()), (he.lanes |= e), (qa |= e), t)
					: ((Ie = !0), (e.memoizedState = a));
	}
	function Ff(e, t, a, n, u) {
		var r = K.p;
		K.p = r !== 0 && 8 > r ? r : 8;
		var d = L.T,
			y = {};
		(L.T = y), _c(e, !1, t, a);
		try {
			var g = u(),
				T = L.S;
			if (
				(T !== null && T(y, g),
				g !== null && typeof g == "object" && typeof g.then == "function")
			) {
				var D = dv(g, n);
				Vl(e, t, D, xt(e));
			} else Vl(e, t, n, xt(e));
		} catch (U) {
			Vl(e, t, { then: function () {}, status: "rejected", reason: U }, xt());
		} finally {
			(K.p = r), (L.T = d);
		}
	}
	function pv() {}
	function gc(e, t, a, n) {
		if (e.tag !== 5) throw Error(s(476));
		var u = Pf(e).queue;
		Ff(
			e,
			u,
			t,
			_e,
			a === null
				? pv
				: function () {
						return If(e), a(n);
					},
		);
	}
	function Pf(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: _e,
			baseState: _e,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ra,
				lastRenderedState: _e,
			},
			next: null,
		};
		var a = {};
		return (
			(t.next = {
				memoizedState: a,
				baseState: a,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: ra,
					lastRenderedState: a,
				},
				next: null,
			}),
			(e.memoizedState = t),
			(e = e.alternate),
			e !== null && (e.memoizedState = t),
			t
		);
	}
	function If(e) {
		var t = Pf(e).next.queue;
		Vl(e, t, {}, xt());
	}
	function bc() {
		return it(su);
	}
	function ed() {
		return Xe().memoizedState;
	}
	function td() {
		return Xe().memoizedState;
	}
	function gv(e) {
		for (var t = e.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var a = xt();
					e = ja(a);
					var n = Ua(t, e, a);
					n !== null && (ft(n, t, a), Ql(n, t, a)),
						(t = { cache: ac() }),
						(e.payload = t);
					return;
			}
			t = t.return;
		}
	}
	function bv(e, t, a) {
		var n = xt();
		(a = {
			lane: n,
			revertLane: 0,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			_i(e)
				? nd(t, a)
				: ((a = Jr(e, t, a, n)), a !== null && (ft(a, e, n), ld(a, t, n)));
	}
	function ad(e, t, a) {
		var n = xt();
		Vl(e, t, a, n);
	}
	function Vl(e, t, a, n) {
		var u = {
			lane: n,
			revertLane: 0,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (_i(e)) nd(t, u);
		else {
			var r = e.alternate;
			if (
				e.lanes === 0 &&
				(r === null || r.lanes === 0) &&
				((r = t.lastRenderedReducer), r !== null)
			)
				try {
					var d = t.lastRenderedState,
						y = r(d, a);
					if (((u.hasEagerState = !0), (u.eagerState = y), gt(y, d)))
						return ni(e, t, u, 0), ze === null && ai(), !1;
				} catch {
				} finally {
				}
			if (((a = Jr(e, t, u, n)), a !== null))
				return ft(a, e, n), ld(a, t, n), !0;
		}
		return !1;
	}
	function _c(e, t, a, n) {
		if (
			((n = {
				lane: 2,
				revertLane: ss(),
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			_i(e))
		) {
			if (t) throw Error(s(479));
		} else (t = Jr(e, a, n, 2)), t !== null && ft(t, e, 2);
	}
	function _i(e) {
		var t = e.alternate;
		return e === he || (t !== null && t === he);
	}
	function nd(e, t) {
		Qn = hi = !0;
		var a = e.pending;
		a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
			(e.pending = t);
	}
	function ld(e, t, a) {
		if (a & 4194176) {
			var n = t.lanes;
			(n &= e.pendingLanes), (a |= n), (t.lanes = a), mo(e, a);
		}
	}
	var $t = {
		readContext: it,
		use: yi,
		useCallback: Ye,
		useContext: Ye,
		useEffect: Ye,
		useImperativeHandle: Ye,
		useLayoutEffect: Ye,
		useInsertionEffect: Ye,
		useMemo: Ye,
		useReducer: Ye,
		useRef: Ye,
		useState: Ye,
		useDebugValue: Ye,
		useDeferredValue: Ye,
		useTransition: Ye,
		useSyncExternalStore: Ye,
		useId: Ye,
	};
	($t.useCacheRefresh = Ye),
		($t.useMemoCache = Ye),
		($t.useHostTransitionStatus = Ye),
		($t.useFormState = Ye),
		($t.useActionState = Ye),
		($t.useOptimistic = Ye);
	var dn = {
		readContext: it,
		use: yi,
		useCallback: function (e, t) {
			return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: it,
		useEffect: Vf,
		useImperativeHandle: function (e, t, a) {
			(a = a != null ? a.concat([e]) : null),
				gi(4194308, 4, Qf.bind(null, t, e), a);
		},
		useLayoutEffect: function (e, t) {
			return gi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			gi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var a = vt();
			t = t === void 0 ? null : t;
			var n = e();
			if (fn) {
				Ta(!0);
				try {
					e();
				} finally {
					Ta(!1);
				}
			}
			return (a.memoizedState = [n, t]), n;
		},
		useReducer: function (e, t, a) {
			var n = vt();
			if (a !== void 0) {
				var u = a(t);
				if (fn) {
					Ta(!0);
					try {
						a(t);
					} finally {
						Ta(!1);
					}
				}
			} else u = t;
			return (
				(n.memoizedState = n.baseState = u),
				(e = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: u,
				}),
				(n.queue = e),
				(e = e.dispatch = bv.bind(null, he, e)),
				[n.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = vt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: function (e) {
			e = hc(e);
			var t = e.queue,
				a = ad.bind(null, he, t);
			return (t.dispatch = a), [e.memoizedState, a];
		},
		useDebugValue: yc,
		useDeferredValue: function (e, t) {
			var a = vt();
			return pc(a, e, t);
		},
		useTransition: function () {
			var e = hc(!1);
			return (
				(e = Ff.bind(null, he, e.queue, !0, !1)),
				(vt().memoizedState = e),
				[!1, e]
			);
		},
		useSyncExternalStore: function (e, t, a) {
			var n = he,
				u = vt();
			if (Ee) {
				if (a === void 0) throw Error(s(407));
				a = a();
			} else {
				if (((a = t()), ze === null)) throw Error(s(349));
				Se & 60 || Of(n, t, a);
			}
			u.memoizedState = a;
			var r = { value: a, getSnapshot: t };
			return (
				(u.queue = r),
				Vf(Cf.bind(null, n, r, e), [e]),
				(n.flags |= 2048),
				$n(9, wf.bind(null, n, r, a, t), { destroy: void 0 }, null),
				a
			);
		},
		useId: function () {
			var e = vt(),
				t = ze.identifierPrefix;
			if (Ee) {
				var a = ua,
					n = la;
				(a = (n & ~(1 << (32 - pt(n) - 1))).toString(32) + a),
					(t = ":" + t + "R" + a),
					(a = mi++),
					0 < a && (t += "H" + a.toString(32)),
					(t += ":");
			} else (a = hv++), (t = ":" + t + "r" + a.toString(32) + ":");
			return (e.memoizedState = t);
		},
		useCacheRefresh: function () {
			return (vt().memoizedState = gv.bind(null, he));
		},
	};
	(dn.useMemoCache = oc),
		(dn.useHostTransitionStatus = bc),
		(dn.useFormState = Zf),
		(dn.useActionState = Zf),
		(dn.useOptimistic = function (e) {
			var t = vt();
			t.memoizedState = t.baseState = e;
			var a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null,
			};
			return (
				(t.queue = a), (t = _c.bind(null, he, !0, a)), (a.dispatch = t), [e, t]
			);
		});
	var za = {
		readContext: it,
		use: yi,
		useCallback: $f,
		useContext: it,
		useEffect: vc,
		useImperativeHandle: Kf,
		useInsertionEffect: Gf,
		useLayoutEffect: Xf,
		useMemo: Jf,
		useReducer: pi,
		useRef: Yf,
		useState: function () {
			return pi(ra);
		},
		useDebugValue: yc,
		useDeferredValue: function (e, t) {
			var a = Xe();
			return Wf(a, Oe.memoizedState, e, t);
		},
		useTransition: function () {
			var e = pi(ra)[0],
				t = Xe().memoizedState;
			return [typeof e == "boolean" ? e : Yl(e), t];
		},
		useSyncExternalStore: Rf,
		useId: ed,
	};
	(za.useCacheRefresh = td),
		(za.useMemoCache = oc),
		(za.useHostTransitionStatus = bc),
		(za.useFormState = Bf),
		(za.useActionState = Bf),
		(za.useOptimistic = function (e, t) {
			var a = Xe();
			return Mf(a, Oe, e, t);
		});
	var hn = {
		readContext: it,
		use: yi,
		useCallback: $f,
		useContext: it,
		useEffect: vc,
		useImperativeHandle: Kf,
		useInsertionEffect: Gf,
		useLayoutEffect: Xf,
		useMemo: Jf,
		useReducer: dc,
		useRef: Yf,
		useState: function () {
			return dc(ra);
		},
		useDebugValue: yc,
		useDeferredValue: function (e, t) {
			var a = Xe();
			return Oe === null ? pc(a, e, t) : Wf(a, Oe.memoizedState, e, t);
		},
		useTransition: function () {
			var e = dc(ra)[0],
				t = Xe().memoizedState;
			return [typeof e == "boolean" ? e : Yl(e), t];
		},
		useSyncExternalStore: Rf,
		useId: ed,
	};
	(hn.useCacheRefresh = td),
		(hn.useMemoCache = oc),
		(hn.useHostTransitionStatus = bc),
		(hn.useFormState = Lf),
		(hn.useActionState = Lf),
		(hn.useOptimistic = function (e, t) {
			var a = Xe();
			return Oe !== null
				? Mf(a, Oe, e, t)
				: ((a.baseState = e), [e, a.queue.dispatch]);
		});
	function Sc(e, t, a, n) {
		(t = e.memoizedState),
			(a = a(n, t)),
			(a = a == null ? t : ee({}, t, a)),
			(e.memoizedState = a),
			e.lanes === 0 && (e.updateQueue.baseState = a);
	}
	var xc = {
		isMounted: function (e) {
			return (e = e._reactInternals) ? ue(e) === e : !1;
		},
		enqueueSetState: function (e, t, a) {
			e = e._reactInternals;
			var n = xt(),
				u = ja(n);
			(u.payload = t),
				a != null && (u.callback = a),
				(t = Ua(e, u, n)),
				t !== null && (ft(t, e, n), Ql(t, e, n));
		},
		enqueueReplaceState: function (e, t, a) {
			e = e._reactInternals;
			var n = xt(),
				u = ja(n);
			(u.tag = 1),
				(u.payload = t),
				a != null && (u.callback = a),
				(t = Ua(e, u, n)),
				t !== null && (ft(t, e, n), Ql(t, e, n));
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var a = xt(),
				n = ja(a);
			(n.tag = 2),
				t != null && (n.callback = t),
				(t = Ua(e, n, a)),
				t !== null && (ft(t, e, a), Ql(t, e, a));
		},
	};
	function ud(e, t, a, n, u, r, d) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == "function"
				? e.shouldComponentUpdate(n, r, d)
				: t.prototype && t.prototype.isPureReactComponent
					? !Nl(a, n) || !Nl(u, r)
					: !0
		);
	}
	function id(e, t, a, n) {
		(e = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(a, n),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(a, n),
			t.state !== e && xc.enqueueReplaceState(t, t.state, null);
	}
	function mn(e, t) {
		var a = t;
		if ("ref" in t) {
			a = {};
			for (var n in t) n !== "ref" && (a[n] = t[n]);
		}
		if ((e = e.defaultProps)) {
			a === t && (a = ee({}, a));
			for (var u in e) a[u] === void 0 && (a[u] = e[u]);
		}
		return a;
	}
	var Si =
		typeof reportError == "function"
			? reportError
			: function (e) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var t = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof e == "object" &&
								e !== null &&
								typeof e.message == "string"
									? String(e.message)
									: String(e),
							error: e,
						});
						if (!window.dispatchEvent(t)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", e);
						return;
					}
					console.error(e);
				};
	function rd(e) {
		Si(e);
	}
	function cd(e) {
		console.error(e);
	}
	function sd(e) {
		Si(e);
	}
	function xi(e, t) {
		try {
			var a = e.onUncaughtError;
			a(t.value, { componentStack: t.stack });
		} catch (n) {
			setTimeout(function () {
				throw n;
			});
		}
	}
	function od(e, t, a) {
		try {
			var n = e.onCaughtError;
			n(a.value, {
				componentStack: a.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (u) {
			setTimeout(function () {
				throw u;
			});
		}
	}
	function Ec(e, t, a) {
		return (
			(a = ja(a)),
			(a.tag = 3),
			(a.payload = { element: null }),
			(a.callback = function () {
				xi(e, t);
			}),
			a
		);
	}
	function fd(e) {
		return (e = ja(e)), (e.tag = 3), e;
	}
	function dd(e, t, a, n) {
		var u = a.type.getDerivedStateFromError;
		if (typeof u == "function") {
			var r = n.value;
			(e.payload = function () {
				return u(r);
			}),
				(e.callback = function () {
					od(t, a, n);
				});
		}
		var d = a.stateNode;
		d !== null &&
			typeof d.componentDidCatch == "function" &&
			(e.callback = function () {
				od(t, a, n),
					typeof u != "function" &&
						(La === null ? (La = new Set([this])) : La.add(this));
				var y = n.stack;
				this.componentDidCatch(n.value, {
					componentStack: y !== null ? y : "",
				});
			});
	}
	function _v(e, t, a, n, u) {
		if (
			((a.flags |= 32768),
			n !== null && typeof n == "object" && typeof n.then == "function")
		) {
			if (
				((t = a.alternate),
				t !== null && Xl(t, a, u, !0),
				(a = Nt.current),
				a !== null)
			) {
				switch (a.tag) {
					case 13:
						return (
							Kt === null ? ls() : a.alternate === null && Be === 0 && (Be = 3),
							(a.flags &= -257),
							(a.flags |= 65536),
							(a.lanes = u),
							n === Ir
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
									t === null ? (a.updateQueue = new Set([n])) : t.add(n),
									is(e, n, u)),
							!1
						);
					case 22:
						return (
							(a.flags |= 65536),
							n === Ir
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
									t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([n]),
											}),
											(a.updateQueue = t))
										: ((a = t.retryQueue),
											a === null ? (t.retryQueue = new Set([n])) : a.add(n)),
									is(e, n, u)),
							!1
						);
				}
				throw Error(s(435, a.tag));
			}
			return is(e, n, u), ls(), !1;
		}
		if (Ee)
			return (
				(t = Nt.current),
				t !== null
					? (!(t.flags & 65536) && (t.flags |= 256),
						(t.flags |= 65536),
						(t.lanes = u),
						n !== Pr && ((e = Error(s(422), { cause: n })), jl(Ot(e, a))))
					: (n !== Pr && ((t = Error(s(423), { cause: n })), jl(Ot(t, a))),
						(e = e.current.alternate),
						(e.flags |= 65536),
						(u &= -u),
						(e.lanes |= u),
						(n = Ot(n, a)),
						(u = Ec(e.stateNode, n, u)),
						Zc(e, u),
						Be !== 4 && (Be = 2)),
				!1
			);
		var r = Error(s(520), { cause: n });
		if (
			((r = Ot(r, a)),
			eu === null ? (eu = [r]) : eu.push(r),
			Be !== 4 && (Be = 2),
			t === null)
		)
			return !0;
		(n = Ot(n, a)), (a = t);
		do {
			switch (a.tag) {
				case 3:
					return (
						(a.flags |= 65536),
						(e = u & -u),
						(a.lanes |= e),
						(e = Ec(a.stateNode, n, e)),
						Zc(a, e),
						!1
					);
				case 1:
					if (
						((t = a.type),
						(r = a.stateNode),
						(a.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == "function" ||
								(r !== null &&
									typeof r.componentDidCatch == "function" &&
									(La === null || !La.has(r)))))
					)
						return (
							(a.flags |= 65536),
							(u &= -u),
							(a.lanes |= u),
							(u = fd(u)),
							dd(u, e, a, n),
							Zc(a, u),
							!1
						);
			}
			a = a.return;
		} while (a !== null);
		return !1;
	}
	var hd = Error(s(461)),
		Ie = !1;
	function nt(e, t, a, n) {
		t.child = e === null ? gf(t, null, a, n) : sn(t, e.child, a, n);
	}
	function md(e, t, a, n, u) {
		a = a.render;
		var r = t.ref;
		if ("ref" in n) {
			var d = {};
			for (var y in n) y !== "ref" && (d[y] = n[y]);
		} else d = n;
		return (
			yn(t),
			(n = ic(e, t, a, d, r, u)),
			(y = rc()),
			e !== null && !Ie
				? (cc(e, t, u), ca(e, t, u))
				: (Ee && y && Wr(t), (t.flags |= 1), nt(e, t, n, u), t.child)
		);
	}
	function vd(e, t, a, n, u) {
		if (e === null) {
			var r = a.type;
			return typeof r == "function" &&
				!Qc(r) &&
				r.defaultProps === void 0 &&
				a.compare === null
				? ((t.tag = 15), (t.type = r), yd(e, t, r, n, u))
				: ((e = Oi(a.type, null, n, t, t.mode, u)),
					(e.ref = t.ref),
					(e.return = t),
					(t.child = e));
		}
		if (((r = e.child), !Mc(e, u))) {
			var d = r.memoizedProps;
			if (
				((a = a.compare), (a = a !== null ? a : Nl), a(d, n) && e.ref === t.ref)
			)
				return ca(e, t, u);
		}
		return (
			(t.flags |= 1),
			(e = Ba(r, n)),
			(e.ref = t.ref),
			(e.return = t),
			(t.child = e)
		);
	}
	function yd(e, t, a, n, u) {
		if (e !== null) {
			var r = e.memoizedProps;
			if (Nl(r, n) && e.ref === t.ref)
				if (((Ie = !1), (t.pendingProps = n = r), Mc(e, u)))
					e.flags & 131072 && (Ie = !0);
				else return (t.lanes = e.lanes), ca(e, t, u);
		}
		return Tc(e, t, a, n, u);
	}
	function pd(e, t, a) {
		var n = t.pendingProps,
			u = n.children,
			r = (t.stateNode._pendingVisibility & 2) !== 0,
			d = e !== null ? e.memoizedState : null;
		if ((Gl(e, t), n.mode === "hidden" || r)) {
			if (t.flags & 128) {
				if (((n = d !== null ? d.baseLanes | a : a), e !== null)) {
					for (u = t.child = e.child, r = 0; u !== null; )
						(r = r | u.lanes | u.childLanes), (u = u.sibling);
					t.childLanes = r & ~n;
				} else (t.childLanes = 0), (t.child = null);
				return gd(e, t, n, a);
			}
			if (a & 536870912)
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					e !== null && di(t, d !== null ? d.cachePool : null),
					d !== null ? bf(t, d) : ec(),
					_f(t);
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					gd(e, t, d !== null ? d.baseLanes | a : a, a)
				);
		} else
			d !== null
				? (di(t, d.cachePool), bf(t, d), Ca(), (t.memoizedState = null))
				: (e !== null && di(t, null), ec(), Ca());
		return nt(e, t, u, a), t.child;
	}
	function gd(e, t, a, n) {
		var u = lc();
		return (
			(u = u === null ? null : { parent: We._currentValue, pool: u }),
			(t.memoizedState = { baseLanes: a, cachePool: u }),
			e !== null && di(t, null),
			ec(),
			_f(t),
			e !== null && Xl(e, t, n, !0),
			null
		);
	}
	function Gl(e, t) {
		var a = t.ref;
		if (a === null) e !== null && e.ref !== null && (t.flags |= 2097664);
		else {
			if (typeof a != "function" && typeof a != "object") throw Error(s(284));
			(e === null || e.ref !== a) && (t.flags |= 2097664);
		}
	}
	function Tc(e, t, a, n, u) {
		return (
			yn(t),
			(a = ic(e, t, a, n, void 0, u)),
			(n = rc()),
			e !== null && !Ie
				? (cc(e, t, u), ca(e, t, u))
				: (Ee && n && Wr(t), (t.flags |= 1), nt(e, t, a, u), t.child)
		);
	}
	function bd(e, t, a, n, u, r) {
		return (
			yn(t),
			(t.updateQueue = null),
			(a = Af(t, n, a, u)),
			Tf(e),
			(n = rc()),
			e !== null && !Ie
				? (cc(e, t, r), ca(e, t, r))
				: (Ee && n && Wr(t), (t.flags |= 1), nt(e, t, a, r), t.child)
		);
	}
	function _d(e, t, a, n, u) {
		if ((yn(t), t.stateNode === null)) {
			var r = Bn,
				d = a.contextType;
			typeof d == "object" && d !== null && (r = it(d)),
				(r = new a(n, r)),
				(t.memoizedState =
					r.state !== null && r.state !== void 0 ? r.state : null),
				(r.updater = xc),
				(t.stateNode = r),
				(r._reactInternals = t),
				(r = t.stateNode),
				(r.props = n),
				(r.state = t.memoizedState),
				(r.refs = {}),
				kc(t),
				(d = a.contextType),
				(r.context = typeof d == "object" && d !== null ? it(d) : Bn),
				(r.state = t.memoizedState),
				(d = a.getDerivedStateFromProps),
				typeof d == "function" && (Sc(t, a, d, n), (r.state = t.memoizedState)),
				typeof a.getDerivedStateFromProps == "function" ||
					typeof r.getSnapshotBeforeUpdate == "function" ||
					(typeof r.UNSAFE_componentWillMount != "function" &&
						typeof r.componentWillMount != "function") ||
					((d = r.state),
					typeof r.componentWillMount == "function" && r.componentWillMount(),
					typeof r.UNSAFE_componentWillMount == "function" &&
						r.UNSAFE_componentWillMount(),
					d !== r.state && xc.enqueueReplaceState(r, r.state, null),
					$l(t, n, r, u),
					Kl(),
					(r.state = t.memoizedState)),
				typeof r.componentDidMount == "function" && (t.flags |= 4194308),
				(n = !0);
		} else if (e === null) {
			r = t.stateNode;
			var y = t.memoizedProps,
				g = mn(a, y);
			r.props = g;
			var T = r.context,
				D = a.contextType;
			(d = Bn), typeof D == "object" && D !== null && (d = it(D));
			var U = a.getDerivedStateFromProps;
			(D =
				typeof U == "function" ||
				typeof r.getSnapshotBeforeUpdate == "function"),
				(y = t.pendingProps !== y),
				D ||
					(typeof r.UNSAFE_componentWillReceiveProps != "function" &&
						typeof r.componentWillReceiveProps != "function") ||
					((y || T !== d) && id(t, r, n, d)),
				(Da = !1);
			var w = t.memoizedState;
			(r.state = w),
				$l(t, n, r, u),
				Kl(),
				(T = t.memoizedState),
				y || w !== T || Da
					? (typeof U == "function" && (Sc(t, a, U, n), (T = t.memoizedState)),
						(g = Da || ud(t, a, g, n, w, T, d))
							? (D ||
									(typeof r.UNSAFE_componentWillMount != "function" &&
										typeof r.componentWillMount != "function") ||
									(typeof r.componentWillMount == "function" &&
										r.componentWillMount(),
									typeof r.UNSAFE_componentWillMount == "function" &&
										r.UNSAFE_componentWillMount()),
								typeof r.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof r.componentDidMount == "function" &&
									(t.flags |= 4194308),
								(t.memoizedProps = n),
								(t.memoizedState = T)),
						(r.props = n),
						(r.state = T),
						(r.context = d),
						(n = g))
					: (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
						(n = !1));
		} else {
			(r = t.stateNode),
				Hc(e, t),
				(d = t.memoizedProps),
				(D = mn(a, d)),
				(r.props = D),
				(U = t.pendingProps),
				(w = r.context),
				(T = a.contextType),
				(g = Bn),
				typeof T == "object" && T !== null && (g = it(T)),
				(y = a.getDerivedStateFromProps),
				(T =
					typeof y == "function" ||
					typeof r.getSnapshotBeforeUpdate == "function") ||
					(typeof r.UNSAFE_componentWillReceiveProps != "function" &&
						typeof r.componentWillReceiveProps != "function") ||
					((d !== U || w !== g) && id(t, r, n, g)),
				(Da = !1),
				(w = t.memoizedState),
				(r.state = w),
				$l(t, n, r, u),
				Kl();
			var z = t.memoizedState;
			d !== U ||
			w !== z ||
			Da ||
			(e !== null && e.dependencies !== null && Ei(e.dependencies))
				? (typeof y == "function" && (Sc(t, a, y, n), (z = t.memoizedState)),
					(D =
						Da ||
						ud(t, a, D, n, w, z, g) ||
						(e !== null && e.dependencies !== null && Ei(e.dependencies)))
						? (T ||
								(typeof r.UNSAFE_componentWillUpdate != "function" &&
									typeof r.componentWillUpdate != "function") ||
								(typeof r.componentWillUpdate == "function" &&
									r.componentWillUpdate(n, z, g),
								typeof r.UNSAFE_componentWillUpdate == "function" &&
									r.UNSAFE_componentWillUpdate(n, z, g)),
							typeof r.componentDidUpdate == "function" && (t.flags |= 4),
							typeof r.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof r.componentDidUpdate != "function" ||
								(d === e.memoizedProps && w === e.memoizedState) ||
								(t.flags |= 4),
							typeof r.getSnapshotBeforeUpdate != "function" ||
								(d === e.memoizedProps && w === e.memoizedState) ||
								(t.flags |= 1024),
							(t.memoizedProps = n),
							(t.memoizedState = z)),
					(r.props = n),
					(r.state = z),
					(r.context = g),
					(n = D))
				: (typeof r.componentDidUpdate != "function" ||
						(d === e.memoizedProps && w === e.memoizedState) ||
						(t.flags |= 4),
					typeof r.getSnapshotBeforeUpdate != "function" ||
						(d === e.memoizedProps && w === e.memoizedState) ||
						(t.flags |= 1024),
					(n = !1));
		}
		return (
			(r = n),
			Gl(e, t),
			(n = (t.flags & 128) !== 0),
			r || n
				? ((r = t.stateNode),
					(a =
						n && typeof a.getDerivedStateFromError != "function"
							? null
							: r.render()),
					(t.flags |= 1),
					e !== null && n
						? ((t.child = sn(t, e.child, null, u)),
							(t.child = sn(t, null, a, u)))
						: nt(e, t, a, u),
					(t.memoizedState = r.state),
					(e = t.child))
				: (e = ca(e, t, u)),
			e
		);
	}
	function Sd(e, t, a, n) {
		return Dl(), (t.flags |= 256), nt(e, t, a, n), t.child;
	}
	var Ac = { dehydrated: null, treeContext: null, retryLane: 0 };
	function Rc(e) {
		return { baseLanes: e, cachePool: Ef() };
	}
	function Oc(e, t, a) {
		return (e = e !== null ? e.childLanes & ~a : 0), t && (e |= jt), e;
	}
	function xd(e, t, a) {
		var n = t.pendingProps,
			u = !1,
			r = (t.flags & 128) !== 0,
			d;
		if (
			((d = r) ||
				(d =
					e !== null && e.memoizedState === null ? !1 : (Je.current & 2) !== 0),
			d && ((u = !0), (t.flags &= -129)),
			(d = (t.flags & 32) !== 0),
			(t.flags &= -33),
			e === null)
		) {
			if (Ee) {
				if ((u ? wa(t) : Ca(), Ee)) {
					var y = at,
						g;
					if ((g = y)) {
						e: {
							for (g = y, y = Qt; g.nodeType !== 8; ) {
								if (!y) {
									y = null;
									break e;
								}
								if (((g = Bt(g.nextSibling)), g === null)) {
									y = null;
									break e;
								}
							}
							y = g;
						}
						y !== null
							? ((t.memoizedState = {
									dehydrated: y,
									treeContext: un !== null ? { id: la, overflow: ua } : null,
									retryLane: 536870912,
								}),
								(g = Dt(18, null, null, 0)),
								(g.stateNode = y),
								(g.return = t),
								(t.child = g),
								(ot = t),
								(at = null),
								(g = !0))
							: (g = !1);
					}
					g || cn(t);
				}
				if (
					((y = t.memoizedState),
					y !== null && ((y = y.dehydrated), y !== null))
				)
					return y.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
				ia(t);
			}
			return (
				(y = n.children),
				(n = n.fallback),
				u
					? (Ca(),
						(u = t.mode),
						(y = Cc({ mode: "hidden", children: y }, u)),
						(n = gn(n, u, a, null)),
						(y.return = t),
						(n.return = t),
						(y.sibling = n),
						(t.child = y),
						(u = t.child),
						(u.memoizedState = Rc(a)),
						(u.childLanes = Oc(e, d, a)),
						(t.memoizedState = Ac),
						n)
					: (wa(t), wc(t, y))
			);
		}
		if (
			((g = e.memoizedState), g !== null && ((y = g.dehydrated), y !== null))
		) {
			if (r)
				t.flags & 256
					? (wa(t), (t.flags &= -257), (t = Nc(e, t, a)))
					: t.memoizedState !== null
						? (Ca(), (t.child = e.child), (t.flags |= 128), (t = null))
						: (Ca(),
							(u = n.fallback),
							(y = t.mode),
							(n = Cc({ mode: "visible", children: n.children }, y)),
							(u = gn(u, y, a, null)),
							(u.flags |= 2),
							(n.return = t),
							(u.return = t),
							(n.sibling = u),
							(t.child = n),
							sn(t, e.child, null, a),
							(n = t.child),
							(n.memoizedState = Rc(a)),
							(n.childLanes = Oc(e, d, a)),
							(t.memoizedState = Ac),
							(t = u));
			else if ((wa(t), y.data === "$!")) {
				if (((d = y.nextSibling && y.nextSibling.dataset), d)) var T = d.dgst;
				(d = T),
					(n = Error(s(419))),
					(n.stack = ""),
					(n.digest = d),
					jl({ value: n, source: null, stack: null }),
					(t = Nc(e, t, a));
			} else if (
				(Ie || Xl(e, t, a, !1), (d = (a & e.childLanes) !== 0), Ie || d)
			) {
				if (((d = ze), d !== null)) {
					if (((n = a & -a), n & 42)) n = 1;
					else
						switch (n) {
							case 2:
								n = 1;
								break;
							case 8:
								n = 4;
								break;
							case 32:
								n = 16;
								break;
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
								n = 64;
								break;
							case 268435456:
								n = 134217728;
								break;
							default:
								n = 0;
						}
					if (
						((n = n & (d.suspendedLanes | a) ? 0 : n),
						n !== 0 && n !== g.retryLane)
					)
						throw ((g.retryLane = n), Oa(e, n), ft(d, e, n), hd);
				}
				y.data === "$?" || ls(), (t = Nc(e, t, a));
			} else
				y.data === "$?"
					? ((t.flags |= 128),
						(t.child = e.child),
						(t = Uv.bind(null, e)),
						(y._reactRetry = t),
						(t = null))
					: ((e = g.treeContext),
						(at = Bt(y.nextSibling)),
						(ot = t),
						(Ee = !0),
						(Ht = null),
						(Qt = !1),
						e !== null &&
							((wt[Ct++] = la),
							(wt[Ct++] = ua),
							(wt[Ct++] = un),
							(la = e.id),
							(ua = e.overflow),
							(un = t)),
						(t = wc(t, n.children)),
						(t.flags |= 4096));
			return t;
		}
		return u
			? (Ca(),
				(u = n.fallback),
				(y = t.mode),
				(g = e.child),
				(T = g.sibling),
				(n = Ba(g, { mode: "hidden", children: n.children })),
				(n.subtreeFlags = g.subtreeFlags & 31457280),
				T !== null ? (u = Ba(T, u)) : ((u = gn(u, y, a, null)), (u.flags |= 2)),
				(u.return = t),
				(n.return = t),
				(n.sibling = u),
				(t.child = n),
				(n = u),
				(u = t.child),
				(y = e.child.memoizedState),
				y === null
					? (y = Rc(a))
					: ((g = y.cachePool),
						g !== null
							? ((T = We._currentValue),
								(g = g.parent !== T ? { parent: T, pool: T } : g))
							: (g = Ef()),
						(y = { baseLanes: y.baseLanes | a, cachePool: g })),
				(u.memoizedState = y),
				(u.childLanes = Oc(e, d, a)),
				(t.memoizedState = Ac),
				n)
			: (wa(t),
				(a = e.child),
				(e = a.sibling),
				(a = Ba(a, { mode: "visible", children: n.children })),
				(a.return = t),
				(a.sibling = null),
				e !== null &&
					((d = t.deletions),
					d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
				(t.child = a),
				(t.memoizedState = null),
				a);
	}
	function wc(e, t) {
		return (
			(t = Cc({ mode: "visible", children: t }, e.mode)),
			(t.return = e),
			(e.child = t)
		);
	}
	function Cc(e, t) {
		return $d(e, t, 0, null);
	}
	function Nc(e, t, a) {
		return (
			sn(t, e.child, null, a),
			(e = wc(t, t.pendingProps.children)),
			(e.flags |= 2),
			(t.memoizedState = null),
			e
		);
	}
	function Ed(e, t, a) {
		e.lanes |= t;
		var n = e.alternate;
		n !== null && (n.lanes |= t), jc(e.return, t, a);
	}
	function zc(e, t, a, n, u) {
		var r = e.memoizedState;
		r === null
			? (e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: n,
					tail: a,
					tailMode: u,
				})
			: ((r.isBackwards = t),
				(r.rendering = null),
				(r.renderingStartTime = 0),
				(r.last = n),
				(r.tail = a),
				(r.tailMode = u));
	}
	function Td(e, t, a) {
		var n = t.pendingProps,
			u = n.revealOrder,
			r = n.tail;
		if ((nt(e, t, n.children, a), (n = Je.current), n & 2))
			(n = (n & 1) | 2), (t.flags |= 128);
		else {
			if (e !== null && e.flags & 128)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && Ed(e, a, t);
					else if (e.tag === 19) Ed(e, a, t);
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
			n &= 1;
		}
		switch ((De(Je, n), u)) {
			case "forwards":
				for (a = t.child, u = null; a !== null; )
					(e = a.alternate),
						e !== null && fi(e) === null && (u = a),
						(a = a.sibling);
				(a = u),
					a === null
						? ((u = t.child), (t.child = null))
						: ((u = a.sibling), (a.sibling = null)),
					zc(t, !1, u, a, r);
				break;
			case "backwards":
				for (a = null, u = t.child, t.child = null; u !== null; ) {
					if (((e = u.alternate), e !== null && fi(e) === null)) {
						t.child = u;
						break;
					}
					(e = u.sibling), (u.sibling = a), (a = u), (u = e);
				}
				zc(t, !0, a, null, r);
				break;
			case "together":
				zc(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function ca(e, t, a) {
		if (
			(e !== null && (t.dependencies = e.dependencies),
			(qa |= t.lanes),
			!(a & t.childLanes))
		)
			if (e !== null) {
				if ((Xl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
			} else return null;
		if (e !== null && t.child !== e.child) throw Error(s(153));
		if (t.child !== null) {
			for (
				e = t.child, a = Ba(e, e.pendingProps), t.child = a, a.return = t;
				e.sibling !== null;

			)
				(e = e.sibling),
					(a = a.sibling = Ba(e, e.pendingProps)),
					(a.return = t);
			a.sibling = null;
		}
		return t.child;
	}
	function Mc(e, t) {
		return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && Ei(e)));
	}
	function Sv(e, t, a) {
		switch (t.tag) {
			case 3:
				Bu(t, t.stateNode.containerInfo),
					Ma(t, We, e.memoizedState.cache),
					Dl();
				break;
			case 27:
			case 5:
				xr(t);
				break;
			case 4:
				Bu(t, t.stateNode.containerInfo);
				break;
			case 10:
				Ma(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var n = t.memoizedState;
				if (n !== null)
					return n.dehydrated !== null
						? (wa(t), (t.flags |= 128), null)
						: a & t.child.childLanes
							? xd(e, t, a)
							: (wa(t), (e = ca(e, t, a)), e !== null ? e.sibling : null);
				wa(t);
				break;
			case 19:
				var u = (e.flags & 128) !== 0;
				if (
					((n = (a & t.childLanes) !== 0),
					n || (Xl(e, t, a, !1), (n = (a & t.childLanes) !== 0)),
					u)
				) {
					if (n) return Td(e, t, a);
					t.flags |= 128;
				}
				if (
					((u = t.memoizedState),
					u !== null &&
						((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
					De(Je, Je.current),
					n)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), pd(e, t, a);
			case 24:
				Ma(t, We, e.memoizedState.cache);
		}
		return ca(e, t, a);
	}
	function Ad(e, t, a) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) Ie = !0;
			else {
				if (!Mc(e, a) && !(t.flags & 128)) return (Ie = !1), Sv(e, t, a);
				Ie = !!(e.flags & 131072);
			}
		else (Ie = !1), Ee && t.flags & 1048576 && sf(t, ii, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				e: {
					e = t.pendingProps;
					var n = t.elementType,
						u = n._init;
					if (((n = u(n._payload)), (t.type = n), typeof n == "function"))
						Qc(n)
							? ((e = mn(n, e)), (t.tag = 1), (t = _d(null, t, n, e, a)))
							: ((t.tag = 0), (t = Tc(null, t, n, e, a)));
					else {
						if (n != null) {
							if (((u = n.$$typeof), u === N)) {
								(t.tag = 11), (t = md(null, t, n, e, a));
								break e;
							} else if (u === Z) {
								(t.tag = 14), (t = vd(null, t, n, e, a));
								break e;
							}
						}
						throw ((t = ge(n) || n), Error(s(306, t, "")));
					}
				}
				return t;
			case 0:
				return Tc(e, t, t.type, t.pendingProps, a);
			case 1:
				return (n = t.type), (u = mn(n, t.pendingProps)), _d(e, t, n, u, a);
			case 3:
				e: {
					if ((Bu(t, t.stateNode.containerInfo), e === null))
						throw Error(s(387));
					var r = t.pendingProps;
					(u = t.memoizedState), (n = u.element), Hc(e, t), $l(t, r, null, a);
					var d = t.memoizedState;
					if (
						((r = d.cache),
						Ma(t, We, r),
						r !== u.cache && Uc(t, [We], a, !0),
						Kl(),
						(r = d.element),
						u.isDehydrated)
					)
						if (
							((u = { element: r, isDehydrated: !1, cache: d.cache }),
							(t.updateQueue.baseState = u),
							(t.memoizedState = u),
							t.flags & 256)
						) {
							t = Sd(e, t, r, a);
							break e;
						} else if (r !== n) {
							(n = Ot(Error(s(424)), t)), jl(n), (t = Sd(e, t, r, a));
							break e;
						} else
							for (
								at = Bt(t.stateNode.containerInfo.firstChild),
									ot = t,
									Ee = !0,
									Ht = null,
									Qt = !0,
									a = gf(t, null, r, a),
									t.child = a;
								a;

							)
								(a.flags = (a.flags & -3) | 4096), (a = a.sibling);
					else {
						if ((Dl(), r === n)) {
							t = ca(e, t, a);
							break e;
						}
						nt(e, t, r, a);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					Gl(e, t),
					e === null
						? (a = wh(t.type, null, t.pendingProps, null))
							? (t.memoizedState = a)
							: Ee ||
								((a = t.type),
								(e = t.pendingProps),
								(n = Bi(Ea.current).createElement(a)),
								(n[ut] = t),
								(n[ht] = e),
								lt(n, a, e),
								Pe(n),
								(t.stateNode = n))
						: (t.memoizedState = wh(
								t.type,
								e.memoizedProps,
								t.pendingProps,
								e.memoizedState,
							)),
					null
				);
			case 27:
				return (
					xr(t),
					e === null &&
						Ee &&
						((n = t.stateNode = Ah(t.type, t.pendingProps, Ea.current)),
						(ot = t),
						(Qt = !0),
						(at = Bt(n.firstChild))),
					(n = t.pendingProps.children),
					e !== null || Ee ? nt(e, t, n, a) : (t.child = sn(t, null, n, a)),
					Gl(e, t),
					t.child
				);
			case 5:
				return (
					e === null &&
						Ee &&
						((u = n = at) &&
							((n = Fv(n, t.type, t.pendingProps, Qt)),
							n !== null
								? ((t.stateNode = n),
									(ot = t),
									(at = Bt(n.firstChild)),
									(Qt = !1),
									(u = !0))
								: (u = !1)),
						u || cn(t)),
					xr(t),
					(u = t.type),
					(r = t.pendingProps),
					(d = e !== null ? e.memoizedProps : null),
					(n = r.children),
					gs(u, r) ? (n = null) : d !== null && gs(u, d) && (t.flags |= 32),
					t.memoizedState !== null &&
						((u = ic(e, t, mv, null, null, a)), (su._currentValue = u)),
					Gl(e, t),
					nt(e, t, n, a),
					t.child
				);
			case 6:
				return (
					e === null &&
						Ee &&
						((e = a = at) &&
							((a = Pv(a, t.pendingProps, Qt)),
							a !== null
								? ((t.stateNode = a), (ot = t), (at = null), (e = !0))
								: (e = !1)),
						e || cn(t)),
					null
				);
			case 13:
				return xd(e, t, a);
			case 4:
				return (
					Bu(t, t.stateNode.containerInfo),
					(n = t.pendingProps),
					e === null ? (t.child = sn(t, null, n, a)) : nt(e, t, n, a),
					t.child
				);
			case 11:
				return md(e, t, t.type, t.pendingProps, a);
			case 7:
				return nt(e, t, t.pendingProps, a), t.child;
			case 8:
				return nt(e, t, t.pendingProps.children, a), t.child;
			case 12:
				return nt(e, t, t.pendingProps.children, a), t.child;
			case 10:
				return (
					(n = t.pendingProps),
					Ma(t, t.type, n.value),
					nt(e, t, n.children, a),
					t.child
				);
			case 9:
				return (
					(u = t.type._context),
					(n = t.pendingProps.children),
					yn(t),
					(u = it(u)),
					(n = n(u)),
					(t.flags |= 1),
					nt(e, t, n, a),
					t.child
				);
			case 14:
				return vd(e, t, t.type, t.pendingProps, a);
			case 15:
				return yd(e, t, t.type, t.pendingProps, a);
			case 19:
				return Td(e, t, a);
			case 22:
				return pd(e, t, a);
			case 24:
				return (
					yn(t),
					(n = it(We)),
					e === null
						? ((u = lc()),
							u === null &&
								((u = ze),
								(r = ac()),
								(u.pooledCache = r),
								r.refCount++,
								r !== null && (u.pooledCacheLanes |= a),
								(u = r)),
							(t.memoizedState = { parent: n, cache: u }),
							kc(t),
							Ma(t, We, u))
						: (e.lanes & a && (Hc(e, t), $l(t, null, null, a), Kl()),
							(u = e.memoizedState),
							(r = t.memoizedState),
							u.parent !== n
								? ((u = { parent: n, cache: n }),
									(t.memoizedState = u),
									t.lanes === 0 &&
										(t.memoizedState = t.updateQueue.baseState = u),
									Ma(t, We, n))
								: ((n = r.cache),
									Ma(t, We, n),
									n !== u.cache && Uc(t, [We], a, !0))),
					nt(e, t, t.pendingProps.children, a),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(s(156, t.tag));
	}
	var Dc = Ae(null),
		vn = null,
		sa = null;
	function Ma(e, t, a) {
		De(Dc, t._currentValue), (t._currentValue = a);
	}
	function oa(e) {
		(e._currentValue = Dc.current), Ve(Dc);
	}
	function jc(e, t, a) {
		for (; e !== null; ) {
			var n = e.alternate;
			if (
				((e.childLanes & t) !== t
					? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
					: n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
				e === a)
			)
				break;
			e = e.return;
		}
	}
	function Uc(e, t, a, n) {
		var u = e.child;
		for (u !== null && (u.return = e); u !== null; ) {
			var r = u.dependencies;
			if (r !== null) {
				var d = u.child;
				r = r.firstContext;
				e: for (; r !== null; ) {
					var y = r;
					r = u;
					for (var g = 0; g < t.length; g++)
						if (y.context === t[g]) {
							(r.lanes |= a),
								(y = r.alternate),
								y !== null && (y.lanes |= a),
								jc(r.return, a, e),
								n || (d = null);
							break e;
						}
					r = y.next;
				}
			} else if (u.tag === 18) {
				if (((d = u.return), d === null)) throw Error(s(341));
				(d.lanes |= a),
					(r = d.alternate),
					r !== null && (r.lanes |= a),
					jc(d, a, e),
					(d = null);
			} else d = u.child;
			if (d !== null) d.return = u;
			else
				for (d = u; d !== null; ) {
					if (d === e) {
						d = null;
						break;
					}
					if (((u = d.sibling), u !== null)) {
						(u.return = d.return), (d = u);
						break;
					}
					d = d.return;
				}
			u = d;
		}
	}
	function Xl(e, t, a, n) {
		e = null;
		for (var u = t, r = !1; u !== null; ) {
			if (!r) {
				if (u.flags & 524288) r = !0;
				else if (u.flags & 262144) break;
			}
			if (u.tag === 10) {
				var d = u.alternate;
				if (d === null) throw Error(s(387));
				if (((d = d.memoizedProps), d !== null)) {
					var y = u.type;
					gt(u.pendingProps.value, d.value) ||
						(e !== null ? e.push(y) : (e = [y]));
				}
			} else if (u === Zu.current) {
				if (((d = u.alternate), d === null)) throw Error(s(387));
				d.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
					(e !== null ? e.push(su) : (e = [su]));
			}
			u = u.return;
		}
		e !== null && Uc(t, e, a, n), (t.flags |= 262144);
	}
	function Ei(e) {
		for (e = e.firstContext; e !== null; ) {
			if (!gt(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function yn(e) {
		(vn = e),
			(sa = null),
			(e = e.dependencies),
			e !== null && (e.firstContext = null);
	}
	function it(e) {
		return Rd(vn, e);
	}
	function Ti(e, t) {
		return vn === null && yn(e), Rd(e, t);
	}
	function Rd(e, t) {
		var a = t._currentValue;
		if (((t = { context: t, memoizedValue: a, next: null }), sa === null)) {
			if (e === null) throw Error(s(308));
			(sa = t),
				(e.dependencies = { lanes: 0, firstContext: t }),
				(e.flags |= 524288);
		} else sa = sa.next = t;
		return a;
	}
	var Da = !1;
	function kc(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Hc(e, t) {
		(e = e.updateQueue),
			t.updateQueue === e &&
				(t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					callbacks: null,
				});
	}
	function ja(e) {
		return { lane: e, tag: 0, payload: null, callback: null, next: null };
	}
	function Ua(e, t, a) {
		var n = e.updateQueue;
		if (n === null) return null;
		if (((n = n.shared), Ue & 2)) {
			var u = n.pending;
			return (
				u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
				(n.pending = t),
				(t = li(e)),
				rf(e, null, a),
				t
			);
		}
		return ni(e, n, t, a), li(e);
	}
	function Ql(e, t, a) {
		if (
			((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194176) !== 0))
		) {
			var n = t.lanes;
			(n &= e.pendingLanes), (a |= n), (t.lanes = a), mo(e, a);
		}
	}
	function Zc(e, t) {
		var a = e.updateQueue,
			n = e.alternate;
		if (n !== null && ((n = n.updateQueue), a === n)) {
			var u = null,
				r = null;
			if (((a = a.firstBaseUpdate), a !== null)) {
				do {
					var d = {
						lane: a.lane,
						tag: a.tag,
						payload: a.payload,
						callback: null,
						next: null,
					};
					r === null ? (u = r = d) : (r = r.next = d), (a = a.next);
				} while (a !== null);
				r === null ? (u = r = t) : (r = r.next = t);
			} else u = r = t;
			(a = {
				baseState: n.baseState,
				firstBaseUpdate: u,
				lastBaseUpdate: r,
				shared: n.shared,
				callbacks: n.callbacks,
			}),
				(e.updateQueue = a);
			return;
		}
		(e = a.lastBaseUpdate),
			e === null ? (a.firstBaseUpdate = t) : (e.next = t),
			(a.lastBaseUpdate = t);
	}
	var Bc = !1;
	function Kl() {
		if (Bc) {
			var e = Xn;
			if (e !== null) throw e;
		}
	}
	function $l(e, t, a, n) {
		Bc = !1;
		var u = e.updateQueue;
		Da = !1;
		var r = u.firstBaseUpdate,
			d = u.lastBaseUpdate,
			y = u.shared.pending;
		if (y !== null) {
			u.shared.pending = null;
			var g = y,
				T = g.next;
			(g.next = null), d === null ? (r = T) : (d.next = T), (d = g);
			var D = e.alternate;
			D !== null &&
				((D = D.updateQueue),
				(y = D.lastBaseUpdate),
				y !== d &&
					(y === null ? (D.firstBaseUpdate = T) : (y.next = T),
					(D.lastBaseUpdate = g)));
		}
		if (r !== null) {
			var U = u.baseState;
			(d = 0), (D = T = g = null), (y = r);
			do {
				var w = y.lane & -536870913,
					z = w !== y.lane;
				if (z ? (Se & w) === w : (n & w) === w) {
					w !== 0 && w === Gn && (Bc = !0),
						D !== null &&
							(D = D.next =
								{
									lane: 0,
									tag: y.tag,
									payload: y.payload,
									callback: null,
									next: null,
								});
					e: {
						var F = e,
							re = y;
						w = t;
						var qe = a;
						switch (re.tag) {
							case 1:
								if (((F = re.payload), typeof F == "function")) {
									U = F.call(qe, U, w);
									break e;
								}
								U = F;
								break e;
							case 3:
								F.flags = (F.flags & -65537) | 128;
							case 0:
								if (
									((F = re.payload),
									(w = typeof F == "function" ? F.call(qe, U, w) : F),
									w == null)
								)
									break e;
								U = ee({}, U, w);
								break e;
							case 2:
								Da = !0;
						}
					}
					(w = y.callback),
						w !== null &&
							((e.flags |= 64),
							z && (e.flags |= 8192),
							(z = u.callbacks),
							z === null ? (u.callbacks = [w]) : z.push(w));
				} else
					(z = {
						lane: w,
						tag: y.tag,
						payload: y.payload,
						callback: y.callback,
						next: null,
					}),
						D === null ? ((T = D = z), (g = U)) : (D = D.next = z),
						(d |= w);
				if (((y = y.next), y === null)) {
					if (((y = u.shared.pending), y === null)) break;
					(z = y),
						(y = z.next),
						(z.next = null),
						(u.lastBaseUpdate = z),
						(u.shared.pending = null);
				}
			} while (!0);
			D === null && (g = U),
				(u.baseState = g),
				(u.firstBaseUpdate = T),
				(u.lastBaseUpdate = D),
				r === null && (u.shared.lanes = 0),
				(qa |= d),
				(e.lanes = d),
				(e.memoizedState = U);
		}
	}
	function Od(e, t) {
		if (typeof e != "function") throw Error(s(191, e));
		e.call(t);
	}
	function wd(e, t) {
		var a = e.callbacks;
		if (a !== null)
			for (e.callbacks = null, e = 0; e < a.length; e++) Od(a[e], t);
	}
	function Jl(e, t) {
		try {
			var a = t.updateQueue,
				n = a !== null ? a.lastEffect : null;
			if (n !== null) {
				var u = n.next;
				a = u;
				do {
					if ((a.tag & e) === e) {
						n = void 0;
						var r = a.create,
							d = a.inst;
						(n = r()), (d.destroy = n);
					}
					a = a.next;
				} while (a !== u);
			}
		} catch (y) {
			Ce(t, t.return, y);
		}
	}
	function ka(e, t, a) {
		try {
			var n = t.updateQueue,
				u = n !== null ? n.lastEffect : null;
			if (u !== null) {
				var r = u.next;
				n = r;
				do {
					if ((n.tag & e) === e) {
						var d = n.inst,
							y = d.destroy;
						if (y !== void 0) {
							(d.destroy = void 0), (u = t);
							var g = a;
							try {
								y();
							} catch (T) {
								Ce(u, g, T);
							}
						}
					}
					n = n.next;
				} while (n !== r);
			}
		} catch (T) {
			Ce(t, t.return, T);
		}
	}
	function Cd(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var a = e.stateNode;
			try {
				wd(t, a);
			} catch (n) {
				Ce(e, e.return, n);
			}
		}
	}
	function Nd(e, t, a) {
		(a.props = mn(e.type, e.memoizedProps)), (a.state = e.memoizedState);
		try {
			a.componentWillUnmount();
		} catch (n) {
			Ce(e, t, n);
		}
	}
	function pn(e, t) {
		try {
			var a = e.ref;
			if (a !== null) {
				var n = e.stateNode;
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var u = n;
						break;
					default:
						u = n;
				}
				typeof a == "function" ? (e.refCleanup = a(u)) : (a.current = u);
			}
		} catch (r) {
			Ce(e, t, r);
		}
	}
	function bt(e, t) {
		var a = e.ref,
			n = e.refCleanup;
		if (a !== null)
			if (typeof n == "function")
				try {
					n();
				} catch (u) {
					Ce(e, t, u);
				} finally {
					(e.refCleanup = null),
						(e = e.alternate),
						e != null && (e.refCleanup = null);
				}
			else if (typeof a == "function")
				try {
					a(null);
				} catch (u) {
					Ce(e, t, u);
				}
			else a.current = null;
	}
	function zd(e) {
		var t = e.type,
			a = e.memoizedProps,
			n = e.stateNode;
		try {
			e: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					a.autoFocus && n.focus();
					break e;
				case "img":
					a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
			}
		} catch (u) {
			Ce(e, e.return, u);
		}
	}
	function Md(e, t, a) {
		try {
			var n = e.stateNode;
			Qv(n, e.type, a, t), (n[ht] = t);
		} catch (u) {
			Ce(e, e.return, u);
		}
	}
	function Dd(e) {
		return (
			e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
		);
	}
	function qc(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || Dd(e.return)) return null;
				e = e.return;
			}
			for (
				e.sibling.return = e.return, e = e.sibling;
				e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

			) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
				(e.child.return = e), (e = e.child);
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Lc(e, t, a) {
		var n = e.tag;
		if (n === 5 || n === 6)
			(e = e.stateNode),
				t
					? a.nodeType === 8
						? a.parentNode.insertBefore(e, t)
						: a.insertBefore(e, t)
					: (a.nodeType === 8
							? ((t = a.parentNode), t.insertBefore(e, a))
							: ((t = a), t.appendChild(e)),
						(a = a._reactRootContainer),
						a != null || t.onclick !== null || (t.onclick = Zi));
		else if (n !== 4 && n !== 27 && ((e = e.child), e !== null))
			for (Lc(e, t, a), e = e.sibling; e !== null; )
				Lc(e, t, a), (e = e.sibling);
	}
	function Ai(e, t, a) {
		var n = e.tag;
		if (n === 5 || n === 6)
			(e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
		else if (n !== 4 && n !== 27 && ((e = e.child), e !== null))
			for (Ai(e, t, a), e = e.sibling; e !== null; )
				Ai(e, t, a), (e = e.sibling);
	}
	var fa = !1,
		Ze = !1,
		Yc = !1,
		jd = typeof WeakSet == "function" ? WeakSet : Set,
		et = null,
		Ud = !1;
	function xv(e, t) {
		if (((e = e.containerInfo), (ys = Xi), (e = Fo(e)), Gr(e))) {
			if ("selectionStart" in e)
				var a = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					a = ((a = e.ownerDocument) && a.defaultView) || window;
					var n = a.getSelection && a.getSelection();
					if (n && n.rangeCount !== 0) {
						a = n.anchorNode;
						var u = n.anchorOffset,
							r = n.focusNode;
						n = n.focusOffset;
						try {
							a.nodeType, r.nodeType;
						} catch {
							a = null;
							break e;
						}
						var d = 0,
							y = -1,
							g = -1,
							T = 0,
							D = 0,
							U = e,
							w = null;
						t: for (;;) {
							for (
								var z;
								U !== a || (u !== 0 && U.nodeType !== 3) || (y = d + u),
									U !== r || (n !== 0 && U.nodeType !== 3) || (g = d + n),
									U.nodeType === 3 && (d += U.nodeValue.length),
									(z = U.firstChild) !== null;

							)
								(w = U), (U = z);
							for (;;) {
								if (U === e) break t;
								if (
									(w === a && ++T === u && (y = d),
									w === r && ++D === n && (g = d),
									(z = U.nextSibling) !== null)
								)
									break;
								(U = w), (w = U.parentNode);
							}
							U = z;
						}
						a = y === -1 || g === -1 ? null : { start: y, end: g };
					} else a = null;
				}
			a = a || { start: 0, end: 0 };
		} else a = null;
		for (
			ps = { focusedElem: e, selectionRange: a }, Xi = !1, et = t;
			et !== null;

		)
			if (
				((t = et), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
			)
				(e.return = t), (et = e);
			else
				for (; et !== null; ) {
					switch (((t = et), (r = t.alternate), (e = t.flags), t.tag)) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if (e & 1024 && r !== null) {
								(e = void 0),
									(a = t),
									(u = r.memoizedProps),
									(r = r.memoizedState),
									(n = a.stateNode);
								try {
									var F = mn(a.type, u, a.elementType === a.type);
									(e = n.getSnapshotBeforeUpdate(F, r)),
										(n.__reactInternalSnapshotBeforeUpdate = e);
								} catch (re) {
									Ce(a, a.return, re);
								}
							}
							break;
						case 3:
							if (e & 1024) {
								if (
									((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
								)
									Ss(e);
								else if (a === 1)
									switch (e.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											Ss(e);
											break;
										default:
											e.textContent = "";
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
							if (e & 1024) throw Error(s(163));
					}
					if (((e = t.sibling), e !== null)) {
						(e.return = t.return), (et = e);
						break;
					}
					et = t.return;
				}
		return (F = Ud), (Ud = !1), F;
	}
	function kd(e, t, a) {
		var n = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 15:
				ha(e, a), n & 4 && Jl(5, a);
				break;
			case 1:
				if ((ha(e, a), n & 4))
					if (((e = a.stateNode), t === null))
						try {
							e.componentDidMount();
						} catch (y) {
							Ce(a, a.return, y);
						}
					else {
						var u = mn(a.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (y) {
							Ce(a, a.return, y);
						}
					}
				n & 64 && Cd(a), n & 512 && pn(a, a.return);
				break;
			case 3:
				if ((ha(e, a), n & 64 && ((n = a.updateQueue), n !== null))) {
					if (((e = null), a.child !== null))
						switch (a.child.tag) {
							case 27:
							case 5:
								e = a.child.stateNode;
								break;
							case 1:
								e = a.child.stateNode;
						}
					try {
						wd(n, e);
					} catch (y) {
						Ce(a, a.return, y);
					}
				}
				break;
			case 26:
				ha(e, a), n & 512 && pn(a, a.return);
				break;
			case 27:
			case 5:
				ha(e, a), t === null && n & 4 && zd(a), n & 512 && pn(a, a.return);
				break;
			case 12:
				ha(e, a);
				break;
			case 13:
				ha(e, a), n & 4 && Bd(e, a);
				break;
			case 22:
				if (((u = a.memoizedState !== null || fa), !u)) {
					t = (t !== null && t.memoizedState !== null) || Ze;
					var r = fa,
						d = Ze;
					(fa = u),
						(Ze = t) && !d ? Ha(e, a, (a.subtreeFlags & 8772) !== 0) : ha(e, a),
						(fa = r),
						(Ze = d);
				}
				n & 512 &&
					(a.memoizedProps.mode === "manual"
						? pn(a, a.return)
						: bt(a, a.return));
				break;
			default:
				ha(e, a);
		}
	}
	function Hd(e) {
		var t = e.alternate;
		t !== null && ((e.alternate = null), Hd(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 && ((t = e.stateNode), t !== null && wr(t)),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	var Qe = null,
		_t = !1;
	function da(e, t, a) {
		for (a = a.child; a !== null; ) Zd(e, t, a), (a = a.sibling);
	}
	function Zd(e, t, a) {
		if (yt && typeof yt.onCommitFiberUnmount == "function")
			try {
				yt.onCommitFiberUnmount(gl, a);
			} catch {}
		switch (a.tag) {
			case 26:
				Ze || bt(a, t),
					da(e, t, a),
					a.memoizedState
						? a.memoizedState.count--
						: a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
				break;
			case 27:
				Ze || bt(a, t);
				var n = Qe,
					u = _t;
				for (
					Qe = a.stateNode, da(e, t, a), a = a.stateNode, t = a.attributes;
					t.length;

				)
					a.removeAttributeNode(t[0]);
				wr(a), (Qe = n), (_t = u);
				break;
			case 5:
				Ze || bt(a, t);
			case 6:
				u = Qe;
				var r = _t;
				if (((Qe = null), da(e, t, a), (Qe = u), (_t = r), Qe !== null))
					if (_t)
						try {
							(e = Qe),
								(n = a.stateNode),
								e.nodeType === 8
									? e.parentNode.removeChild(n)
									: e.removeChild(n);
						} catch (d) {
							Ce(a, t, d);
						}
					else
						try {
							Qe.removeChild(a.stateNode);
						} catch (d) {
							Ce(a, t, d);
						}
				break;
			case 18:
				Qe !== null &&
					(_t
						? ((t = Qe),
							(a = a.stateNode),
							t.nodeType === 8
								? _s(t.parentNode, a)
								: t.nodeType === 1 && _s(t, a),
							hu(t))
						: _s(Qe, a.stateNode));
				break;
			case 4:
				(n = Qe),
					(u = _t),
					(Qe = a.stateNode.containerInfo),
					(_t = !0),
					da(e, t, a),
					(Qe = n),
					(_t = u);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Ze || ka(2, a, t), Ze || ka(4, a, t), da(e, t, a);
				break;
			case 1:
				Ze ||
					(bt(a, t),
					(n = a.stateNode),
					typeof n.componentWillUnmount == "function" && Nd(a, t, n)),
					da(e, t, a);
				break;
			case 21:
				da(e, t, a);
				break;
			case 22:
				Ze || bt(a, t),
					(Ze = (n = Ze) || a.memoizedState !== null),
					da(e, t, a),
					(Ze = n);
				break;
			default:
				da(e, t, a);
		}
	}
	function Bd(e, t) {
		if (
			t.memoizedState === null &&
			((e = t.alternate),
			e !== null &&
				((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
		)
			try {
				hu(e);
			} catch (a) {
				Ce(t, t.return, a);
			}
	}
	function Ev(e) {
		switch (e.tag) {
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new jd()), t;
			case 22:
				return (
					(e = e.stateNode),
					(t = e._retryCache),
					t === null && (t = e._retryCache = new jd()),
					t
				);
			default:
				throw Error(s(435, e.tag));
		}
	}
	function Vc(e, t) {
		var a = Ev(e);
		t.forEach(function (n) {
			var u = kv.bind(null, e, n);
			a.has(n) || (a.add(n), n.then(u, u));
		});
	}
	function zt(e, t) {
		var a = t.deletions;
		if (a !== null)
			for (var n = 0; n < a.length; n++) {
				var u = a[n],
					r = e,
					d = t,
					y = d;
				e: for (; y !== null; ) {
					switch (y.tag) {
						case 27:
						case 5:
							(Qe = y.stateNode), (_t = !1);
							break e;
						case 3:
							(Qe = y.stateNode.containerInfo), (_t = !0);
							break e;
						case 4:
							(Qe = y.stateNode.containerInfo), (_t = !0);
							break e;
					}
					y = y.return;
				}
				if (Qe === null) throw Error(s(160));
				Zd(r, d, u),
					(Qe = null),
					(_t = !1),
					(r = u.alternate),
					r !== null && (r.return = null),
					(u.return = null);
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) qd(t, e), (t = t.sibling);
	}
	var Zt = null;
	function qd(e, t) {
		var a = e.alternate,
			n = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				zt(t, e),
					Mt(e),
					n & 4 && (ka(3, e, e.return), Jl(3, e), ka(5, e, e.return));
				break;
			case 1:
				zt(t, e),
					Mt(e),
					n & 512 && (Ze || a === null || bt(a, a.return)),
					n & 64 &&
						fa &&
						((e = e.updateQueue),
						e !== null &&
							((n = e.callbacks),
							n !== null &&
								((a = e.shared.hiddenCallbacks),
								(e.shared.hiddenCallbacks = a === null ? n : a.concat(n)))));
				break;
			case 26:
				var u = Zt;
				if (
					(zt(t, e),
					Mt(e),
					n & 512 && (Ze || a === null || bt(a, a.return)),
					n & 4)
				) {
					var r = a !== null ? a.memoizedState : null;
					if (((n = e.memoizedState), a === null))
						if (n === null)
							if (e.stateNode === null) {
								e: {
									(n = e.type),
										(a = e.memoizedProps),
										(u = u.ownerDocument || u);
									t: switch (n) {
										case "title":
											(r = u.getElementsByTagName("title")[0]),
												(!r ||
													r[Sl] ||
													r[ut] ||
													r.namespaceURI === "http://www.w3.org/2000/svg" ||
													r.hasAttribute("itemprop")) &&
													((r = u.createElement(n)),
													u.head.insertBefore(
														r,
														u.querySelector("head > title"),
													)),
												lt(r, n, a),
												(r[ut] = e),
												Pe(r),
												(n = r);
											break e;
										case "link":
											var d = zh("link", "href", u).get(n + (a.href || ""));
											if (d) {
												for (var y = 0; y < d.length; y++)
													if (
														((r = d[y]),
														r.getAttribute("href") ===
															(a.href == null ? null : a.href) &&
															r.getAttribute("rel") ===
																(a.rel == null ? null : a.rel) &&
															r.getAttribute("title") ===
																(a.title == null ? null : a.title) &&
															r.getAttribute("crossorigin") ===
																(a.crossOrigin == null ? null : a.crossOrigin))
													) {
														d.splice(y, 1);
														break t;
													}
											}
											(r = u.createElement(n)),
												lt(r, n, a),
												u.head.appendChild(r);
											break;
										case "meta":
											if (
												(d = zh("meta", "content", u).get(
													n + (a.content || ""),
												))
											) {
												for (y = 0; y < d.length; y++)
													if (
														((r = d[y]),
														r.getAttribute("content") ===
															(a.content == null ? null : "" + a.content) &&
															r.getAttribute("name") ===
																(a.name == null ? null : a.name) &&
															r.getAttribute("property") ===
																(a.property == null ? null : a.property) &&
															r.getAttribute("http-equiv") ===
																(a.httpEquiv == null ? null : a.httpEquiv) &&
															r.getAttribute("charset") ===
																(a.charSet == null ? null : a.charSet))
													) {
														d.splice(y, 1);
														break t;
													}
											}
											(r = u.createElement(n)),
												lt(r, n, a),
												u.head.appendChild(r);
											break;
										default:
											throw Error(s(468, n));
									}
									(r[ut] = e), Pe(r), (n = r);
								}
								e.stateNode = n;
							} else Mh(u, e.type, e.stateNode);
						else e.stateNode = Nh(u, n, e.memoizedProps);
					else
						r !== n
							? (r === null
									? a.stateNode !== null &&
										((a = a.stateNode), a.parentNode.removeChild(a))
									: r.count--,
								n === null
									? Mh(u, e.type, e.stateNode)
									: Nh(u, n, e.memoizedProps))
							: n === null &&
								e.stateNode !== null &&
								Md(e, e.memoizedProps, a.memoizedProps);
				}
				break;
			case 27:
				if (n & 4 && e.alternate === null) {
					(u = e.stateNode), (r = e.memoizedProps);
					try {
						for (var g = u.firstChild; g; ) {
							var T = g.nextSibling,
								D = g.nodeName;
							g[Sl] ||
								D === "HEAD" ||
								D === "BODY" ||
								D === "SCRIPT" ||
								D === "STYLE" ||
								(D === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
								u.removeChild(g),
								(g = T);
						}
						for (var U = e.type, w = u.attributes; w.length; )
							u.removeAttributeNode(w[0]);
						lt(u, U, r), (u[ut] = e), (u[ht] = r);
					} catch (F) {
						Ce(e, e.return, F);
					}
				}
			case 5:
				if (
					(zt(t, e),
					Mt(e),
					n & 512 && (Ze || a === null || bt(a, a.return)),
					e.flags & 32)
				) {
					u = e.stateNode;
					try {
						Mn(u, "");
					} catch (F) {
						Ce(e, e.return, F);
					}
				}
				n & 4 &&
					e.stateNode != null &&
					((u = e.memoizedProps), Md(e, u, a !== null ? a.memoizedProps : u)),
					n & 1024 && (Yc = !0);
				break;
			case 6:
				if ((zt(t, e), Mt(e), n & 4)) {
					if (e.stateNode === null) throw Error(s(162));
					(n = e.memoizedProps), (a = e.stateNode);
					try {
						a.nodeValue = n;
					} catch (F) {
						Ce(e, e.return, F);
					}
				}
				break;
			case 3:
				if (
					((Yi = null),
					(u = Zt),
					(Zt = qi(t.containerInfo)),
					zt(t, e),
					(Zt = u),
					Mt(e),
					n & 4 && a !== null && a.memoizedState.isDehydrated)
				)
					try {
						hu(t.containerInfo);
					} catch (F) {
						Ce(e, e.return, F);
					}
				Yc && ((Yc = !1), Ld(e));
				break;
			case 4:
				(n = Zt),
					(Zt = qi(e.stateNode.containerInfo)),
					zt(t, e),
					Mt(e),
					(Zt = n);
				break;
			case 12:
				zt(t, e), Mt(e);
				break;
			case 13:
				zt(t, e),
					Mt(e),
					e.child.flags & 8192 &&
						(e.memoizedState !== null) !=
							(a !== null && a.memoizedState !== null) &&
						(Pc = Xt()),
					n & 4 &&
						((n = e.updateQueue),
						n !== null && ((e.updateQueue = null), Vc(e, n)));
				break;
			case 22:
				if (
					(n & 512 && (Ze || a === null || bt(a, a.return)),
					(g = e.memoizedState !== null),
					(T = a !== null && a.memoizedState !== null),
					(D = fa),
					(U = Ze),
					(fa = D || g),
					(Ze = U || T),
					zt(t, e),
					(Ze = U),
					(fa = D),
					Mt(e),
					(t = e.stateNode),
					(t._current = e),
					(t._visibility &= -3),
					(t._visibility |= t._pendingVisibility & 2),
					n & 8192 &&
						((t._visibility = g ? t._visibility & -2 : t._visibility | 1),
						g && ((t = fa || Ze), a === null || T || t || Jn(e)),
						e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
				)
					e: for (a = null, t = e; ; ) {
						if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
							if (a === null) {
								T = a = t;
								try {
									if (((u = T.stateNode), g))
										(r = u.style),
											typeof r.setProperty == "function"
												? r.setProperty("display", "none", "important")
												: (r.display = "none");
									else {
										(d = T.stateNode), (y = T.memoizedProps.style);
										var z =
											y != null && y.hasOwnProperty("display")
												? y.display
												: null;
										d.style.display =
											z == null || typeof z == "boolean" ? "" : ("" + z).trim();
									}
								} catch (F) {
									Ce(T, T.return, F);
								}
							}
						} else if (t.tag === 6) {
							if (a === null) {
								T = t;
								try {
									T.stateNode.nodeValue = g ? "" : T.memoizedProps;
								} catch (F) {
									Ce(T, T.return, F);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === e) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break e;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === e) break e;
							a === t && (a = null), (t = t.return);
						}
						a === t && (a = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				n & 4 &&
					((n = e.updateQueue),
					n !== null &&
						((a = n.retryQueue),
						a !== null && ((n.retryQueue = null), Vc(e, a))));
				break;
			case 19:
				zt(t, e),
					Mt(e),
					n & 4 &&
						((n = e.updateQueue),
						n !== null && ((e.updateQueue = null), Vc(e, n)));
				break;
			case 21:
				break;
			default:
				zt(t, e), Mt(e);
		}
	}
	function Mt(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				if (e.tag !== 27) {
					e: {
						for (var a = e.return; a !== null; ) {
							if (Dd(a)) {
								var n = a;
								break e;
							}
							a = a.return;
						}
						throw Error(s(160));
					}
					switch (n.tag) {
						case 27:
							var u = n.stateNode,
								r = qc(e);
							Ai(e, r, u);
							break;
						case 5:
							var d = n.stateNode;
							n.flags & 32 && (Mn(d, ""), (n.flags &= -33));
							var y = qc(e);
							Ai(e, y, d);
							break;
						case 3:
						case 4:
							var g = n.stateNode.containerInfo,
								T = qc(e);
							Lc(e, T, g);
							break;
						default:
							throw Error(s(161));
					}
				}
			} catch (D) {
				Ce(e, e.return, D);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Ld(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null; ) {
				var t = e;
				Ld(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(e = e.sibling);
			}
	}
	function ha(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; ) kd(e, t.alternate, t), (t = t.sibling);
	}
	function Jn(e) {
		for (e = e.child; e !== null; ) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					ka(4, t, t.return), Jn(t);
					break;
				case 1:
					bt(t, t.return);
					var a = t.stateNode;
					typeof a.componentWillUnmount == "function" && Nd(t, t.return, a),
						Jn(t);
					break;
				case 26:
				case 27:
				case 5:
					bt(t, t.return), Jn(t);
					break;
				case 22:
					bt(t, t.return), t.memoizedState === null && Jn(t);
					break;
				default:
					Jn(t);
			}
			e = e.sibling;
		}
	}
	function Ha(e, t, a) {
		for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
			var n = t.alternate,
				u = e,
				r = t,
				d = r.flags;
			switch (r.tag) {
				case 0:
				case 11:
				case 15:
					Ha(u, r, a), Jl(4, r);
					break;
				case 1:
					if (
						(Ha(u, r, a),
						(n = r),
						(u = n.stateNode),
						typeof u.componentDidMount == "function")
					)
						try {
							u.componentDidMount();
						} catch (T) {
							Ce(n, n.return, T);
						}
					if (((n = r), (u = n.updateQueue), u !== null)) {
						var y = n.stateNode;
						try {
							var g = u.shared.hiddenCallbacks;
							if (g !== null)
								for (u.shared.hiddenCallbacks = null, u = 0; u < g.length; u++)
									Od(g[u], y);
						} catch (T) {
							Ce(n, n.return, T);
						}
					}
					a && d & 64 && Cd(r), pn(r, r.return);
					break;
				case 26:
				case 27:
				case 5:
					Ha(u, r, a), a && n === null && d & 4 && zd(r), pn(r, r.return);
					break;
				case 12:
					Ha(u, r, a);
					break;
				case 13:
					Ha(u, r, a), a && d & 4 && Bd(u, r);
					break;
				case 22:
					r.memoizedState === null && Ha(u, r, a), pn(r, r.return);
					break;
				default:
					Ha(u, r, a);
			}
			t = t.sibling;
		}
	}
	function Gc(e, t) {
		var a = null;
		e !== null &&
			e.memoizedState !== null &&
			e.memoizedState.cachePool !== null &&
			(a = e.memoizedState.cachePool.pool),
			(e = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(e = t.memoizedState.cachePool.pool),
			e !== a && (e != null && e.refCount++, a != null && Bl(a));
	}
	function Xc(e, t) {
		(e = null),
			t.alternate !== null && (e = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== e && (t.refCount++, e != null && Bl(e));
	}
	function Za(e, t, a, n) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) Yd(e, t, a, n), (t = t.sibling);
	}
	function Yd(e, t, a, n) {
		var u = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Za(e, t, a, n), u & 2048 && Jl(9, t);
				break;
			case 3:
				Za(e, t, a, n),
					u & 2048 &&
						((e = null),
						t.alternate !== null && (e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== e && (t.refCount++, e != null && Bl(e)));
				break;
			case 12:
				if (u & 2048) {
					Za(e, t, a, n), (e = t.stateNode);
					try {
						var r = t.memoizedProps,
							d = r.id,
							y = r.onPostCommit;
						typeof y == "function" &&
							y(
								d,
								t.alternate === null ? "mount" : "update",
								e.passiveEffectDuration,
								-0,
							);
					} catch (g) {
						Ce(t, t.return, g);
					}
				} else Za(e, t, a, n);
				break;
			case 23:
				break;
			case 22:
				(r = t.stateNode),
					t.memoizedState !== null
						? r._visibility & 4
							? Za(e, t, a, n)
							: Wl(e, t)
						: r._visibility & 4
							? Za(e, t, a, n)
							: ((r._visibility |= 4),
								Wn(e, t, a, n, (t.subtreeFlags & 10256) !== 0)),
					u & 2048 && Gc(t.alternate, t);
				break;
			case 24:
				Za(e, t, a, n), u & 2048 && Xc(t.alternate, t);
				break;
			default:
				Za(e, t, a, n);
		}
	}
	function Wn(e, t, a, n, u) {
		for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
			var r = e,
				d = t,
				y = a,
				g = n,
				T = d.flags;
			switch (d.tag) {
				case 0:
				case 11:
				case 15:
					Wn(r, d, y, g, u), Jl(8, d);
					break;
				case 23:
					break;
				case 22:
					var D = d.stateNode;
					d.memoizedState !== null
						? D._visibility & 4
							? Wn(r, d, y, g, u)
							: Wl(r, d)
						: ((D._visibility |= 4), Wn(r, d, y, g, u)),
						u && T & 2048 && Gc(d.alternate, d);
					break;
				case 24:
					Wn(r, d, y, g, u), u && T & 2048 && Xc(d.alternate, d);
					break;
				default:
					Wn(r, d, y, g, u);
			}
			t = t.sibling;
		}
	}
	function Wl(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var a = e,
					n = t,
					u = n.flags;
				switch (n.tag) {
					case 22:
						Wl(a, n), u & 2048 && Gc(n.alternate, n);
						break;
					case 24:
						Wl(a, n), u & 2048 && Xc(n.alternate, n);
						break;
					default:
						Wl(a, n);
				}
				t = t.sibling;
			}
	}
	var Fl = 8192;
	function Fn(e) {
		if (e.subtreeFlags & Fl)
			for (e = e.child; e !== null; ) Vd(e), (e = e.sibling);
	}
	function Vd(e) {
		switch (e.tag) {
			case 26:
				Fn(e),
					e.flags & Fl &&
						e.memoizedState !== null &&
						fy(Zt, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Fn(e);
				break;
			case 3:
			case 4:
				var t = Zt;
				(Zt = qi(e.stateNode.containerInfo)), Fn(e), (Zt = t);
				break;
			case 22:
				e.memoizedState === null &&
					((t = e.alternate),
					t !== null && t.memoizedState !== null
						? ((t = Fl), (Fl = 16777216), Fn(e), (Fl = t))
						: Fn(e));
				break;
			default:
				Fn(e);
		}
	}
	function Gd(e) {
		var t = e.alternate;
		if (t !== null && ((e = t.child), e !== null)) {
			t.child = null;
			do (t = e.sibling), (e.sibling = null), (e = t);
			while (e !== null);
		}
	}
	function Pl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var n = t[a];
					(et = n), Qd(n, e);
				}
			Gd(e);
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) Xd(e), (e = e.sibling);
	}
	function Xd(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Pl(e), e.flags & 2048 && ka(9, e, e.return);
				break;
			case 3:
				Pl(e);
				break;
			case 12:
				Pl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null &&
				t._visibility & 4 &&
				(e.return === null || e.return.tag !== 13)
					? ((t._visibility &= -5), Ri(e))
					: Pl(e);
				break;
			default:
				Pl(e);
		}
	}
	function Ri(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var n = t[a];
					(et = n), Qd(n, e);
				}
			Gd(e);
		}
		for (e = e.child; e !== null; ) {
			switch (((t = e), t.tag)) {
				case 0:
				case 11:
				case 15:
					ka(8, t, t.return), Ri(t);
					break;
				case 22:
					(a = t.stateNode),
						a._visibility & 4 && ((a._visibility &= -5), Ri(t));
					break;
				default:
					Ri(t);
			}
			e = e.sibling;
		}
	}
	function Qd(e, t) {
		for (; et !== null; ) {
			var a = et;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					ka(8, a, t);
					break;
				case 23:
				case 22:
					if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
						var n = a.memoizedState.cachePool.pool;
						n != null && n.refCount++;
					}
					break;
				case 24:
					Bl(a.memoizedState.cache);
			}
			if (((n = a.child), n !== null)) (n.return = a), (et = n);
			else
				e: for (a = e; et !== null; ) {
					n = et;
					var u = n.sibling,
						r = n.return;
					if ((Hd(n), n === a)) {
						et = null;
						break e;
					}
					if (u !== null) {
						(u.return = r), (et = u);
						break e;
					}
					et = r;
				}
		}
	}
	function Tv(e, t, a, n) {
		(this.tag = e),
			(this.key = a),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = n),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function Dt(e, t, a, n) {
		return new Tv(e, t, a, n);
	}
	function Qc(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function Ba(e, t) {
		var a = e.alternate;
		return (
			a === null
				? ((a = Dt(e.tag, t, e.key, e.mode)),
					(a.elementType = e.elementType),
					(a.type = e.type),
					(a.stateNode = e.stateNode),
					(a.alternate = e),
					(e.alternate = a))
				: ((a.pendingProps = t),
					(a.type = e.type),
					(a.flags = 0),
					(a.subtreeFlags = 0),
					(a.deletions = null)),
			(a.flags = e.flags & 31457280),
			(a.childLanes = e.childLanes),
			(a.lanes = e.lanes),
			(a.child = e.child),
			(a.memoizedProps = e.memoizedProps),
			(a.memoizedState = e.memoizedState),
			(a.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(a.dependencies =
				t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(a.sibling = e.sibling),
			(a.index = e.index),
			(a.ref = e.ref),
			(a.refCleanup = e.refCleanup),
			a
		);
	}
	function Kd(e, t) {
		e.flags &= 31457282;
		var a = e.alternate;
		return (
			a === null
				? ((e.childLanes = 0),
					(e.lanes = t),
					(e.child = null),
					(e.subtreeFlags = 0),
					(e.memoizedProps = null),
					(e.memoizedState = null),
					(e.updateQueue = null),
					(e.dependencies = null),
					(e.stateNode = null))
				: ((e.childLanes = a.childLanes),
					(e.lanes = a.lanes),
					(e.child = a.child),
					(e.subtreeFlags = 0),
					(e.deletions = null),
					(e.memoizedProps = a.memoizedProps),
					(e.memoizedState = a.memoizedState),
					(e.updateQueue = a.updateQueue),
					(e.type = a.type),
					(t = a.dependencies),
					(e.dependencies =
						t === null
							? null
							: { lanes: t.lanes, firstContext: t.firstContext })),
			e
		);
	}
	function Oi(e, t, a, n, u, r) {
		var d = 0;
		if (((n = e), typeof e == "function")) Qc(e) && (d = 1);
		else if (typeof e == "string")
			d = sy(e, a, Gt.current)
				? 26
				: e === "html" || e === "head" || e === "body"
					? 27
					: 5;
		else
			e: switch (e) {
				case h:
					return gn(a.children, u, r, t);
				case m:
					(d = 8), (u |= 24);
					break;
				case b:
					return (
						(e = Dt(12, a, t, u | 2)), (e.elementType = b), (e.lanes = r), e
					);
				case G:
					return (e = Dt(13, a, t, u)), (e.elementType = G), (e.lanes = r), e;
				case B:
					return (e = Dt(19, a, t, u)), (e.elementType = B), (e.lanes = r), e;
				case Q:
					return $d(a, u, r, t);
				default:
					if (typeof e == "object" && e !== null)
						switch (e.$$typeof) {
							case _:
							case R:
								d = 10;
								break e;
							case S:
								d = 9;
								break e;
							case N:
								d = 11;
								break e;
							case Z:
								d = 14;
								break e;
							case J:
								(d = 16), (n = null);
								break e;
						}
					(d = 29),
						(a = Error(s(130, e === null ? "null" : typeof e, ""))),
						(n = null);
			}
		return (
			(t = Dt(d, a, t, u)), (t.elementType = e), (t.type = n), (t.lanes = r), t
		);
	}
	function gn(e, t, a, n) {
		return (e = Dt(7, e, n, t)), (e.lanes = a), e;
	}
	function $d(e, t, a, n) {
		(e = Dt(22, e, n, t)), (e.elementType = Q), (e.lanes = a);
		var u = {
			_visibility: 1,
			_pendingVisibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null,
			_current: null,
			detach: function () {
				var r = u._current;
				if (r === null) throw Error(s(456));
				if (!(u._pendingVisibility & 2)) {
					var d = Oa(r, 2);
					d !== null && ((u._pendingVisibility |= 2), ft(d, r, 2));
				}
			},
			attach: function () {
				var r = u._current;
				if (r === null) throw Error(s(456));
				if (u._pendingVisibility & 2) {
					var d = Oa(r, 2);
					d !== null && ((u._pendingVisibility &= -3), ft(d, r, 2));
				}
			},
		};
		return (e.stateNode = u), e;
	}
	function Kc(e, t, a) {
		return (e = Dt(6, e, null, t)), (e.lanes = a), e;
	}
	function $c(e, t, a) {
		return (
			(t = Dt(4, e.children !== null ? e.children : [], e.key, t)),
			(t.lanes = a),
			(t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation,
			}),
			t
		);
	}
	function ma(e) {
		e.flags |= 4;
	}
	function Jd(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (((e.flags |= 16777216), !Dh(t))) {
			if (
				((t = Nt.current),
				t !== null &&
					((Se & 4194176) === Se
						? Kt !== null
						: ((Se & 62914560) !== Se && !(Se & 536870912)) || t !== Kt))
			)
				throw ((kl = Ir), df);
			e.flags |= 8192;
		}
	}
	function wi(e, t) {
		t !== null && (e.flags |= 4),
			e.flags & 16384 &&
				((t = e.tag !== 22 ? fo() : 536870912), (e.lanes |= t), (In |= t));
	}
	function Il(e, t) {
		if (!Ee)
			switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var a = null; t !== null; )
						t.alternate !== null && (a = t), (t = t.sibling);
					a === null ? (e.tail = null) : (a.sibling = null);
					break;
				case "collapsed":
					a = e.tail;
					for (var n = null; a !== null; )
						a.alternate !== null && (n = a), (a = a.sibling);
					n === null
						? t || e.tail === null
							? (e.tail = null)
							: (e.tail.sibling = null)
						: (n.sibling = null);
			}
	}
	function je(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			a = 0,
			n = 0;
		if (t)
			for (var u = e.child; u !== null; )
				(a |= u.lanes | u.childLanes),
					(n |= u.subtreeFlags & 31457280),
					(n |= u.flags & 31457280),
					(u.return = e),
					(u = u.sibling);
		else
			for (u = e.child; u !== null; )
				(a |= u.lanes | u.childLanes),
					(n |= u.subtreeFlags),
					(n |= u.flags),
					(u.return = e),
					(u = u.sibling);
		return (e.subtreeFlags |= n), (e.childLanes = a), t;
	}
	function Av(e, t, a) {
		var n = t.pendingProps;
		switch ((Fr(t), t.tag)) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return je(t), null;
			case 1:
				return je(t), null;
			case 3:
				return (
					(a = t.stateNode),
					(n = null),
					e !== null && (n = e.memoizedState.cache),
					t.memoizedState.cache !== n && (t.flags |= 2048),
					oa(We),
					Rn(),
					a.pendingContext &&
						((a.context = a.pendingContext), (a.pendingContext = null)),
					(e === null || e.child === null) &&
						(Ml(t)
							? ma(t)
							: e === null ||
								(e.memoizedState.isDehydrated && !(t.flags & 256)) ||
								((t.flags |= 1024), Ht !== null && (as(Ht), (Ht = null)))),
					je(t),
					null
				);
			case 26:
				return (
					(a = t.memoizedState),
					e === null
						? (ma(t),
							a !== null ? (je(t), Jd(t, a)) : (je(t), (t.flags &= -16777217)))
						: a
							? a !== e.memoizedState
								? (ma(t), je(t), Jd(t, a))
								: (je(t), (t.flags &= -16777217))
							: (e.memoizedProps !== n && ma(t), je(t), (t.flags &= -16777217)),
					null
				);
			case 27:
				qu(t), (a = Ea.current);
				var u = t.type;
				if (e !== null && t.stateNode != null) e.memoizedProps !== n && ma(t);
				else {
					if (!n) {
						if (t.stateNode === null) throw Error(s(166));
						return je(t), null;
					}
					(e = Gt.current),
						Ml(t) ? of(t) : ((e = Ah(u, n, a)), (t.stateNode = e), ma(t));
				}
				return je(t), null;
			case 5:
				if ((qu(t), (a = t.type), e !== null && t.stateNode != null))
					e.memoizedProps !== n && ma(t);
				else {
					if (!n) {
						if (t.stateNode === null) throw Error(s(166));
						return je(t), null;
					}
					if (((e = Gt.current), Ml(t))) of(t);
					else {
						switch (((u = Bi(Ea.current)), e)) {
							case 1:
								e = u.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								e = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default:
								switch (a) {
									case "svg":
										e = u.createElementNS("http://www.w3.org/2000/svg", a);
										break;
									case "math":
										e = u.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											a,
										);
										break;
									case "script":
										(e = u.createElement("div")),
											(e.innerHTML = "<script><\/script>"),
											(e = e.removeChild(e.firstChild));
										break;
									case "select":
										(e =
											typeof n.is == "string"
												? u.createElement("select", { is: n.is })
												: u.createElement("select")),
											n.multiple
												? (e.multiple = !0)
												: n.size && (e.size = n.size);
										break;
									default:
										e =
											typeof n.is == "string"
												? u.createElement(a, { is: n.is })
												: u.createElement(a);
								}
						}
						(e[ut] = t), (e[ht] = n);
						e: for (u = t.child; u !== null; ) {
							if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
							else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
								(u.child.return = u), (u = u.child);
								continue;
							}
							if (u === t) break e;
							for (; u.sibling === null; ) {
								if (u.return === null || u.return === t) break e;
								u = u.return;
							}
							(u.sibling.return = u.return), (u = u.sibling);
						}
						t.stateNode = e;
						e: switch ((lt(e, a, n), a)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								e = !!n.autoFocus;
								break e;
							case "img":
								e = !0;
								break e;
							default:
								e = !1;
						}
						e && ma(t);
					}
				}
				return je(t), (t.flags &= -16777217), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== n && ma(t);
				else {
					if (typeof n != "string" && t.stateNode === null) throw Error(s(166));
					if (((e = Ea.current), Ml(t))) {
						if (
							((e = t.stateNode),
							(a = t.memoizedProps),
							(n = null),
							(u = ot),
							u !== null)
						)
							switch (u.tag) {
								case 27:
								case 5:
									n = u.memoizedProps;
							}
						(e[ut] = t),
							(e = !!(
								e.nodeValue === a ||
								(n !== null && n.suppressHydrationWarning === !0) ||
								bh(e.nodeValue, a)
							)),
							e || cn(t);
					} else (e = Bi(e).createTextNode(n)), (e[ut] = t), (t.stateNode = e);
				}
				return je(t), null;
			case 13:
				if (
					((n = t.memoizedState),
					e === null ||
						(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
				) {
					if (((u = Ml(t)), n !== null && n.dehydrated !== null)) {
						if (e === null) {
							if (!u) throw Error(s(318));
							if (
								((u = t.memoizedState),
								(u = u !== null ? u.dehydrated : null),
								!u)
							)
								throw Error(s(317));
							u[ut] = t;
						} else
							Dl(),
								!(t.flags & 128) && (t.memoizedState = null),
								(t.flags |= 4);
						je(t), (u = !1);
					} else Ht !== null && (as(Ht), (Ht = null)), (u = !0);
					if (!u) return t.flags & 256 ? (ia(t), t) : (ia(t), null);
				}
				if ((ia(t), t.flags & 128)) return (t.lanes = a), t;
				if (
					((a = n !== null), (e = e !== null && e.memoizedState !== null), a)
				) {
					(n = t.child),
						(u = null),
						n.alternate !== null &&
							n.alternate.memoizedState !== null &&
							n.alternate.memoizedState.cachePool !== null &&
							(u = n.alternate.memoizedState.cachePool.pool);
					var r = null;
					n.memoizedState !== null &&
						n.memoizedState.cachePool !== null &&
						(r = n.memoizedState.cachePool.pool),
						r !== u && (n.flags |= 2048);
				}
				return (
					a !== e && a && (t.child.flags |= 8192),
					wi(t, t.updateQueue),
					je(t),
					null
				);
			case 4:
				return Rn(), e === null && hs(t.stateNode.containerInfo), je(t), null;
			case 10:
				return oa(t.type), je(t), null;
			case 19:
				if ((Ve(Je), (u = t.memoizedState), u === null)) return je(t), null;
				if (((n = (t.flags & 128) !== 0), (r = u.rendering), r === null))
					if (n) Il(u, !1);
					else {
						if (Be !== 0 || (e !== null && e.flags & 128))
							for (e = t.child; e !== null; ) {
								if (((r = fi(e)), r !== null)) {
									for (
										t.flags |= 128,
											Il(u, !1),
											e = r.updateQueue,
											t.updateQueue = e,
											wi(t, e),
											t.subtreeFlags = 0,
											e = a,
											a = t.child;
										a !== null;

									)
										Kd(a, e), (a = a.sibling);
									return De(Je, (Je.current & 1) | 2), t.child;
								}
								e = e.sibling;
							}
						u.tail !== null &&
							Xt() > Ci &&
							((t.flags |= 128), (n = !0), Il(u, !1), (t.lanes = 4194304));
					}
				else {
					if (!n)
						if (((e = fi(r)), e !== null)) {
							if (
								((t.flags |= 128),
								(n = !0),
								(e = e.updateQueue),
								(t.updateQueue = e),
								wi(t, e),
								Il(u, !0),
								u.tail === null &&
									u.tailMode === "hidden" &&
									!r.alternate &&
									!Ee)
							)
								return je(t), null;
						} else
							2 * Xt() - u.renderingStartTime > Ci &&
								a !== 536870912 &&
								((t.flags |= 128), (n = !0), Il(u, !1), (t.lanes = 4194304));
					u.isBackwards
						? ((r.sibling = t.child), (t.child = r))
						: ((e = u.last),
							e !== null ? (e.sibling = r) : (t.child = r),
							(u.last = r));
				}
				return u.tail !== null
					? ((t = u.tail),
						(u.rendering = t),
						(u.tail = t.sibling),
						(u.renderingStartTime = Xt()),
						(t.sibling = null),
						(e = Je.current),
						De(Je, n ? (e & 1) | 2 : e & 1),
						t)
					: (je(t), null);
			case 22:
			case 23:
				return (
					ia(t),
					tc(),
					(n = t.memoizedState !== null),
					e !== null
						? (e.memoizedState !== null) !== n && (t.flags |= 8192)
						: n && (t.flags |= 8192),
					n
						? a & 536870912 &&
							!(t.flags & 128) &&
							(je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: je(t),
					(a = t.updateQueue),
					a !== null && wi(t, a.retryQueue),
					(a = null),
					e !== null &&
						e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(a = e.memoizedState.cachePool.pool),
					(n = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(n = t.memoizedState.cachePool.pool),
					n !== a && (t.flags |= 2048),
					e !== null && Ve(on),
					null
				);
			case 24:
				return (
					(a = null),
					e !== null && (a = e.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					oa(We),
					je(t),
					null
				);
			case 25:
				return null;
		}
		throw Error(s(156, t.tag));
	}
	function Rv(e, t) {
		switch ((Fr(t), t.tag)) {
			case 1:
				return (
					(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 3:
				return (
					oa(We),
					Rn(),
					(e = t.flags),
					e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 26:
			case 27:
			case 5:
				return qu(t), null;
			case 13:
				if (
					(ia(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(s(340));
					Dl();
				}
				return (
					(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 19:
				return Ve(Je), null;
			case 4:
				return Rn(), null;
			case 10:
				return oa(t.type), null;
			case 22:
			case 23:
				return (
					ia(t),
					tc(),
					e !== null && Ve(on),
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 24:
				return oa(We), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Wd(e, t) {
		switch ((Fr(t), t.tag)) {
			case 3:
				oa(We), Rn();
				break;
			case 26:
			case 27:
			case 5:
				qu(t);
				break;
			case 4:
				Rn();
				break;
			case 13:
				ia(t);
				break;
			case 19:
				Ve(Je);
				break;
			case 10:
				oa(t.type);
				break;
			case 22:
			case 23:
				ia(t), tc(), e !== null && Ve(on);
				break;
			case 24:
				oa(We);
		}
	}
	var Ov = {
			getCacheForType: function (e) {
				var t = it(We),
					a = t.data.get(e);
				return a === void 0 && ((a = e()), t.data.set(e, a)), a;
			},
		},
		wv = typeof WeakMap == "function" ? WeakMap : Map,
		Ue = 0,
		ze = null,
		ve = null,
		Se = 0,
		Me = 0,
		St = null,
		va = !1,
		Pn = !1,
		Jc = !1,
		ya = 0,
		Be = 0,
		qa = 0,
		bn = 0,
		Wc = 0,
		jt = 0,
		In = 0,
		eu = null,
		Jt = null,
		Fc = !1,
		Pc = 0,
		Ci = 1 / 0,
		Ni = null,
		La = null,
		zi = !1,
		_n = null,
		tu = 0,
		Ic = 0,
		es = null,
		au = 0,
		ts = null;
	function xt() {
		if (Ue & 2 && Se !== 0) return Se & -Se;
		if (L.T !== null) {
			var e = Gn;
			return e !== 0 ? e : ss();
		}
		return yo();
	}
	function Fd() {
		jt === 0 && (jt = !(Se & 536870912) || Ee ? oo() : 536870912);
		var e = Nt.current;
		return e !== null && (e.flags |= 32), jt;
	}
	function ft(e, t, a) {
		((e === ze && Me === 2) || e.cancelPendingCommit !== null) &&
			(el(e, 0), pa(e, Se, jt, !1)),
			_l(e, a),
			(!(Ue & 2) || e !== ze) &&
				(e === ze && (!(Ue & 2) && (bn |= a), Be === 4 && pa(e, Se, jt, !1)),
				Wt(e));
	}
	function Pd(e, t, a) {
		if (Ue & 6) throw Error(s(327));
		var n = (!a && (t & 60) === 0 && (t & e.expiredLanes) === 0) || bl(e, t),
			u = n ? zv(e, t) : us(e, t, !0),
			r = n;
		do {
			if (u === 0) {
				Pn && !n && pa(e, t, 0, !1);
				break;
			} else if (u === 6) pa(e, t, 0, !va);
			else {
				if (((a = e.current.alternate), r && !Cv(a))) {
					(u = us(e, t, !1)), (r = !1);
					continue;
				}
				if (u === 2) {
					if (((r = t), e.errorRecoveryDisabledLanes & r)) var d = 0;
					else
						(d = e.pendingLanes & -536870913),
							(d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
					if (d !== 0) {
						t = d;
						e: {
							var y = e;
							u = eu;
							var g = y.current.memoizedState.isDehydrated;
							if ((g && (el(y, d).flags |= 256), (d = us(y, d, !1)), d !== 2)) {
								if (Jc && !g) {
									(y.errorRecoveryDisabledLanes |= r), (bn |= r), (u = 4);
									break e;
								}
								(r = Jt), (Jt = u), r !== null && as(r);
							}
							u = d;
						}
						if (((r = !1), u !== 2)) continue;
					}
				}
				if (u === 1) {
					el(e, 0), pa(e, t, 0, !0);
					break;
				}
				e: {
					switch (((n = e), u)) {
						case 0:
						case 1:
							throw Error(s(345));
						case 4:
							if ((t & 4194176) === t) {
								pa(n, t, jt, !va);
								break e;
							}
							break;
						case 2:
							Jt = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(s(329));
					}
					if (
						((n.finishedWork = a),
						(n.finishedLanes = t),
						(t & 62914560) === t && ((r = Pc + 300 - Xt()), 10 < r))
					) {
						if ((pa(n, t, jt, !va), Gu(n, 0) !== 0)) break e;
						n.timeoutHandle = xh(
							Id.bind(null, n, a, Jt, Ni, Fc, t, jt, bn, In, va, 2, -0, 0),
							r,
						);
						break e;
					}
					Id(n, a, Jt, Ni, Fc, t, jt, bn, In, va, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		Wt(e);
	}
	function as(e) {
		Jt === null ? (Jt = e) : Jt.push.apply(Jt, e);
	}
	function Id(e, t, a, n, u, r, d, y, g, T, D, U, w) {
		var z = t.subtreeFlags;
		if (
			(z & 8192 || (z & 16785408) === 16785408) &&
			((cu = { stylesheets: null, count: 0, unsuspend: oy }),
			Vd(t),
			(t = dy()),
			t !== null)
		) {
			(e.cancelPendingCommit = t(ih.bind(null, e, a, n, u, d, y, g, 1, U, w))),
				pa(e, r, d, !T);
			return;
		}
		ih(e, a, n, u, d, y, g, D, U, w);
	}
	function Cv(e) {
		for (var t = e; ; ) {
			var a = t.tag;
			if (
				(a === 0 || a === 11 || a === 15) &&
				t.flags & 16384 &&
				((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
			)
				for (var n = 0; n < a.length; n++) {
					var u = a[n],
						r = u.getSnapshot;
					u = u.value;
					try {
						if (!gt(r(), u)) return !1;
					} catch {
						return !1;
					}
				}
			if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
				(a.return = t), (t = a);
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
	function pa(e, t, a, n) {
		(t &= ~Wc),
			(t &= ~bn),
			(e.suspendedLanes |= t),
			(e.pingedLanes &= ~t),
			n && (e.warmLanes |= t),
			(n = e.expirationTimes);
		for (var u = t; 0 < u; ) {
			var r = 31 - pt(u),
				d = 1 << r;
			(n[r] = -1), (u &= ~d);
		}
		a !== 0 && ho(e, a, t);
	}
	function Mi() {
		return Ue & 6 ? !0 : (nu(0), !1);
	}
	function ns() {
		if (ve !== null) {
			if (Me === 0) var e = ve.return;
			else (e = ve), (sa = vn = null), sc(e), (Yn = null), (Hl = 0), (e = ve);
			for (; e !== null; ) Wd(e.alternate, e), (e = e.return);
			ve = null;
		}
	}
	function el(e, t) {
		(e.finishedWork = null), (e.finishedLanes = 0);
		var a = e.timeoutHandle;
		a !== -1 && ((e.timeoutHandle = -1), $v(a)),
			(a = e.cancelPendingCommit),
			a !== null && ((e.cancelPendingCommit = null), a()),
			ns(),
			(ze = e),
			(ve = a = Ba(e.current, null)),
			(Se = t),
			(Me = 0),
			(St = null),
			(va = !1),
			(Pn = bl(e, t)),
			(Jc = !1),
			(In = jt = Wc = bn = qa = Be = 0),
			(Jt = eu = null),
			(Fc = !1),
			t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0)
			for (e = e.entanglements, n &= t; 0 < n; ) {
				var u = 31 - pt(n),
					r = 1 << u;
				(t |= e[u]), (n &= ~r);
			}
		return (ya = t), ai(), a;
	}
	function eh(e, t) {
		(he = null),
			(L.H = $t),
			t === Ul
				? ((t = vf()), (Me = 3))
				: t === df
					? ((t = vf()), (Me = 4))
					: (Me =
							t === hd
								? 8
								: t !== null &&
									  typeof t == "object" &&
									  typeof t.then == "function"
									? 6
									: 1),
			(St = t),
			ve === null && ((Be = 1), xi(e, Ot(t, e.current)));
	}
	function th() {
		var e = L.H;
		return (L.H = $t), e === null ? $t : e;
	}
	function ah() {
		var e = L.A;
		return (L.A = Ov), e;
	}
	function ls() {
		(Be = 4),
			va || ((Se & 4194176) !== Se && Nt.current !== null) || (Pn = !0),
			(!(qa & 134217727) && !(bn & 134217727)) ||
				ze === null ||
				pa(ze, Se, jt, !1);
	}
	function us(e, t, a) {
		var n = Ue;
		Ue |= 2;
		var u = th(),
			r = ah();
		(ze !== e || Se !== t) && ((Ni = null), el(e, t)), (t = !1);
		var d = Be;
		e: do
			try {
				if (Me !== 0 && ve !== null) {
					var y = ve,
						g = St;
					switch (Me) {
						case 8:
							ns(), (d = 6);
							break e;
						case 3:
						case 2:
						case 6:
							Nt.current === null && (t = !0);
							var T = Me;
							if (((Me = 0), (St = null), tl(e, y, g, T), a && Pn)) {
								d = 0;
								break e;
							}
							break;
						default:
							(T = Me), (Me = 0), (St = null), tl(e, y, g, T);
					}
				}
				Nv(), (d = Be);
				break;
			} catch (D) {
				eh(e, D);
			}
		while (!0);
		return (
			t && e.shellSuspendCounter++,
			(sa = vn = null),
			(Ue = n),
			(L.H = u),
			(L.A = r),
			ve === null && ((ze = null), (Se = 0), ai()),
			d
		);
	}
	function Nv() {
		for (; ve !== null; ) nh(ve);
	}
	function zv(e, t) {
		var a = Ue;
		Ue |= 2;
		var n = th(),
			u = ah();
		ze !== e || Se !== t
			? ((Ni = null), (Ci = Xt() + 500), el(e, t))
			: (Pn = bl(e, t));
		e: do
			try {
				if (Me !== 0 && ve !== null) {
					t = ve;
					var r = St;
					t: switch (Me) {
						case 1:
							(Me = 0), (St = null), tl(e, t, r, 1);
							break;
						case 2:
							if (hf(r)) {
								(Me = 0), (St = null), lh(t);
								break;
							}
							(t = function () {
								Me === 2 && ze === e && (Me = 7), Wt(e);
							}),
								r.then(t, t);
							break e;
						case 3:
							Me = 7;
							break e;
						case 4:
							Me = 5;
							break e;
						case 7:
							hf(r)
								? ((Me = 0), (St = null), lh(t))
								: ((Me = 0), (St = null), tl(e, t, r, 7));
							break;
						case 5:
							var d = null;
							switch (ve.tag) {
								case 26:
									d = ve.memoizedState;
								case 5:
								case 27:
									var y = ve;
									if (!d || Dh(d)) {
										(Me = 0), (St = null);
										var g = y.sibling;
										if (g !== null) ve = g;
										else {
											var T = y.return;
											T !== null ? ((ve = T), Di(T)) : (ve = null);
										}
										break t;
									}
							}
							(Me = 0), (St = null), tl(e, t, r, 5);
							break;
						case 6:
							(Me = 0), (St = null), tl(e, t, r, 6);
							break;
						case 8:
							ns(), (Be = 6);
							break e;
						default:
							throw Error(s(462));
					}
				}
				Mv();
				break;
			} catch (D) {
				eh(e, D);
			}
		while (!0);
		return (
			(sa = vn = null),
			(L.H = n),
			(L.A = u),
			(Ue = a),
			ve !== null ? 0 : ((ze = null), (Se = 0), ai(), Be)
		);
	}
	function Mv() {
		for (; ve !== null && !e0(); ) nh(ve);
	}
	function nh(e) {
		var t = Ad(e.alternate, e, ya);
		(e.memoizedProps = e.pendingProps), t === null ? Di(e) : (ve = t);
	}
	function lh(e) {
		var t = e,
			a = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = bd(a, t, t.pendingProps, t.type, void 0, Se);
				break;
			case 11:
				t = bd(a, t, t.pendingProps, t.type.render, t.ref, Se);
				break;
			case 5:
				sc(t);
			default:
				Wd(a, t), (t = ve = Kd(t, ya)), (t = Ad(a, t, ya));
		}
		(e.memoizedProps = e.pendingProps), t === null ? Di(e) : (ve = t);
	}
	function tl(e, t, a, n) {
		(sa = vn = null), sc(t), (Yn = null), (Hl = 0);
		var u = t.return;
		try {
			if (_v(e, u, t, a, Se)) {
				(Be = 1), xi(e, Ot(a, e.current)), (ve = null);
				return;
			}
		} catch (r) {
			if (u !== null) throw ((ve = u), r);
			(Be = 1), xi(e, Ot(a, e.current)), (ve = null);
			return;
		}
		t.flags & 32768
			? (Ee || n === 1
					? (e = !0)
					: Pn || Se & 536870912
						? (e = !1)
						: ((va = e = !0),
							(n === 2 || n === 3 || n === 6) &&
								((n = Nt.current),
								n !== null && n.tag === 13 && (n.flags |= 16384))),
				uh(t, e))
			: Di(t);
	}
	function Di(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				uh(t, va);
				return;
			}
			e = t.return;
			var a = Av(t.alternate, t, ya);
			if (a !== null) {
				ve = a;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				ve = t;
				return;
			}
			ve = t = e;
		} while (t !== null);
		Be === 0 && (Be = 5);
	}
	function uh(e, t) {
		do {
			var a = Rv(e.alternate, e);
			if (a !== null) {
				(a.flags &= 32767), (ve = a);
				return;
			}
			if (
				((a = e.return),
				a !== null &&
					((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
				!t && ((e = e.sibling), e !== null))
			) {
				ve = e;
				return;
			}
			ve = e = a;
		} while (e !== null);
		(Be = 6), (ve = null);
	}
	function ih(e, t, a, n, u, r, d, y, g, T) {
		var D = L.T,
			U = K.p;
		try {
			(K.p = 2), (L.T = null), Dv(e, t, a, n, U, u, r, d, y, g, T);
		} finally {
			(L.T = D), (K.p = U);
		}
	}
	function Dv(e, t, a, n, u, r, d, y) {
		do al();
		while (_n !== null);
		if (Ue & 6) throw Error(s(327));
		var g = e.finishedWork;
		if (((n = e.finishedLanes), g === null)) return null;
		if (((e.finishedWork = null), (e.finishedLanes = 0), g === e.current))
			throw Error(s(177));
		(e.callbackNode = null),
			(e.callbackPriority = 0),
			(e.cancelPendingCommit = null);
		var T = g.lanes | g.childLanes;
		if (
			((T |= $r),
			f0(e, n, T, r, d, y),
			e === ze && ((ve = ze = null), (Se = 0)),
			(!(g.subtreeFlags & 10256) && !(g.flags & 10256)) ||
				zi ||
				((zi = !0),
				(Ic = T),
				(es = a),
				Hv(Lu, function () {
					return al(), null;
				})),
			(a = (g.flags & 15990) !== 0),
			g.subtreeFlags & 15990 || a
				? ((a = L.T),
					(L.T = null),
					(r = K.p),
					(K.p = 2),
					(d = Ue),
					(Ue |= 4),
					xv(e, g),
					qd(g, e),
					nv(ps, e.containerInfo),
					(Xi = !!ys),
					(ps = ys = null),
					(e.current = g),
					kd(e, g.alternate, g),
					t0(),
					(Ue = d),
					(K.p = r),
					(L.T = a))
				: (e.current = g),
			zi ? ((zi = !1), (_n = e), (tu = n)) : rh(e, T),
			(T = e.pendingLanes),
			T === 0 && (La = null),
			i0(g.stateNode),
			Wt(e),
			t !== null)
		)
			for (u = e.onRecoverableError, g = 0; g < t.length; g++)
				(T = t[g]), u(T.value, { componentStack: T.stack });
		return (
			tu & 3 && al(),
			(T = e.pendingLanes),
			n & 4194218 && T & 42
				? e === ts
					? au++
					: ((au = 0), (ts = e))
				: (au = 0),
			nu(0),
			null
		);
	}
	function rh(e, t) {
		(e.pooledCacheLanes &= t) === 0 &&
			((t = e.pooledCache), t != null && ((e.pooledCache = null), Bl(t)));
	}
	function al() {
		if (_n !== null) {
			var e = _n,
				t = Ic;
			Ic = 0;
			var a = vo(tu),
				n = L.T,
				u = K.p;
			try {
				if (((K.p = 32 > a ? 32 : a), (L.T = null), _n === null)) var r = !1;
				else {
					(a = es), (es = null);
					var d = _n,
						y = tu;
					if (((_n = null), (tu = 0), Ue & 6)) throw Error(s(331));
					var g = Ue;
					if (
						((Ue |= 4),
						Xd(d.current),
						Yd(d, d.current, y, a),
						(Ue = g),
						nu(0, !1),
						yt && typeof yt.onPostCommitFiberRoot == "function")
					)
						try {
							yt.onPostCommitFiberRoot(gl, d);
						} catch {}
					r = !0;
				}
				return r;
			} finally {
				(K.p = u), (L.T = n), rh(e, t);
			}
		}
		return !1;
	}
	function ch(e, t, a) {
		(t = Ot(a, t)),
			(t = Ec(e.stateNode, t, 2)),
			(e = Ua(e, t, 2)),
			e !== null && (_l(e, 2), Wt(e));
	}
	function Ce(e, t, a) {
		if (e.tag === 3) ch(e, e, a);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					ch(t, e, a);
					break;
				} else if (t.tag === 1) {
					var n = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof n.componentDidCatch == "function" &&
							(La === null || !La.has(n)))
					) {
						(e = Ot(a, e)),
							(a = fd(2)),
							(n = Ua(t, a, 2)),
							n !== null && (dd(a, n, t, e), _l(n, 2), Wt(n));
						break;
					}
				}
				t = t.return;
			}
	}
	function is(e, t, a) {
		var n = e.pingCache;
		if (n === null) {
			n = e.pingCache = new wv();
			var u = new Set();
			n.set(t, u);
		} else (u = n.get(t)), u === void 0 && ((u = new Set()), n.set(t, u));
		u.has(a) ||
			((Jc = !0), u.add(a), (e = jv.bind(null, e, t, a)), t.then(e, e));
	}
	function jv(e, t, a) {
		var n = e.pingCache;
		n !== null && n.delete(t),
			(e.pingedLanes |= e.suspendedLanes & a),
			(e.warmLanes &= ~a),
			ze === e &&
				(Se & a) === a &&
				(Be === 4 || (Be === 3 && (Se & 62914560) === Se && 300 > Xt() - Pc)
					? !(Ue & 2) && el(e, 0)
					: (Wc |= a),
				In === Se && (In = 0)),
			Wt(e);
	}
	function sh(e, t) {
		t === 0 && (t = fo()), (e = Oa(e, t)), e !== null && (_l(e, t), Wt(e));
	}
	function Uv(e) {
		var t = e.memoizedState,
			a = 0;
		t !== null && (a = t.retryLane), sh(e, a);
	}
	function kv(e, t) {
		var a = 0;
		switch (e.tag) {
			case 13:
				var n = e.stateNode,
					u = e.memoizedState;
				u !== null && (a = u.retryLane);
				break;
			case 19:
				n = e.stateNode;
				break;
			case 22:
				n = e.stateNode._retryCache;
				break;
			default:
				throw Error(s(314));
		}
		n !== null && n.delete(t), sh(e, a);
	}
	function Hv(e, t) {
		return Tr(e, t);
	}
	var ji = null,
		nl = null,
		rs = !1,
		Ui = !1,
		cs = !1,
		Sn = 0;
	function Wt(e) {
		e !== nl &&
			e.next === null &&
			(nl === null ? (ji = nl = e) : (nl = nl.next = e)),
			(Ui = !0),
			rs || ((rs = !0), Bv(Zv));
	}
	function nu(e, t) {
		if (!cs && Ui) {
			cs = !0;
			do
				for (var a = !1, n = ji; n !== null; ) {
					if (e !== 0) {
						var u = n.pendingLanes;
						if (u === 0) var r = 0;
						else {
							var d = n.suspendedLanes,
								y = n.pingedLanes;
							(r = (1 << (31 - pt(42 | e) + 1)) - 1),
								(r &= u & ~(d & ~y)),
								(r = r & 201326677 ? (r & 201326677) | 1 : r ? r | 2 : 0);
						}
						r !== 0 && ((a = !0), dh(n, r));
					} else
						(r = Se),
							(r = Gu(n, n === ze ? r : 0)),
							!(r & 3) || bl(n, r) || ((a = !0), dh(n, r));
					n = n.next;
				}
			while (a);
			cs = !1;
		}
	}
	function Zv() {
		Ui = rs = !1;
		var e = 0;
		Sn !== 0 && (Kv() && (e = Sn), (Sn = 0));
		for (var t = Xt(), a = null, n = ji; n !== null; ) {
			var u = n.next,
				r = oh(n, t);
			r === 0
				? ((n.next = null),
					a === null ? (ji = u) : (a.next = u),
					u === null && (nl = a))
				: ((a = n), (e !== 0 || r & 3) && (Ui = !0)),
				(n = u);
		}
		nu(e);
	}
	function oh(e, t) {
		for (
			var a = e.suspendedLanes,
				n = e.pingedLanes,
				u = e.expirationTimes,
				r = e.pendingLanes & -62914561;
			0 < r;

		) {
			var d = 31 - pt(r),
				y = 1 << d,
				g = u[d];
			g === -1
				? (!(y & a) || y & n) && (u[d] = o0(y, t))
				: g <= t && (e.expiredLanes |= y),
				(r &= ~y);
		}
		if (
			((t = ze),
			(a = Se),
			(a = Gu(e, e === t ? a : 0)),
			(n = e.callbackNode),
			a === 0 || (e === t && Me === 2) || e.cancelPendingCommit !== null)
		)
			return (
				n !== null && n !== null && Ar(n),
				(e.callbackNode = null),
				(e.callbackPriority = 0)
			);
		if (!(a & 3) || bl(e, a)) {
			if (((t = a & -a), t === e.callbackPriority)) return t;
			switch ((n !== null && Ar(n), vo(a))) {
				case 2:
				case 8:
					a = co;
					break;
				case 32:
					a = Lu;
					break;
				case 268435456:
					a = so;
					break;
				default:
					a = Lu;
			}
			return (
				(n = fh.bind(null, e)),
				(a = Tr(a, n)),
				(e.callbackPriority = t),
				(e.callbackNode = a),
				t
			);
		}
		return (
			n !== null && n !== null && Ar(n),
			(e.callbackPriority = 2),
			(e.callbackNode = null),
			2
		);
	}
	function fh(e, t) {
		var a = e.callbackNode;
		if (al() && e.callbackNode !== a) return null;
		var n = Se;
		return (
			(n = Gu(e, e === ze ? n : 0)),
			n === 0
				? null
				: (Pd(e, n, t),
					oh(e, Xt()),
					e.callbackNode != null && e.callbackNode === a
						? fh.bind(null, e)
						: null)
		);
	}
	function dh(e, t) {
		if (al()) return null;
		Pd(e, t, !0);
	}
	function Bv(e) {
		Jv(function () {
			Ue & 6 ? Tr(ro, e) : e();
		});
	}
	function ss() {
		return Sn === 0 && (Sn = oo()), Sn;
	}
	function hh(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean"
			? null
			: typeof e == "function"
				? e
				: Ju("" + e);
	}
	function mh(e, t) {
		var a = t.ownerDocument.createElement("input");
		return (
			(a.name = t.name),
			(a.value = t.value),
			e.id && a.setAttribute("form", e.id),
			t.parentNode.insertBefore(a, t),
			(e = new FormData(e)),
			a.parentNode.removeChild(a),
			e
		);
	}
	function qv(e, t, a, n, u) {
		if (t === "submit" && a && a.stateNode === u) {
			var r = hh((u[ht] || null).action),
				d = n.submitter;
			d &&
				((t = (t = d[ht] || null)
					? hh(t.formAction)
					: d.getAttribute("formAction")),
				t !== null && ((r = t), (d = null)));
			var y = new Iu("action", "action", null, n, u);
			e.push({
				event: y,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (n.defaultPrevented) {
								if (Sn !== 0) {
									var g = d ? mh(u, d) : new FormData(u);
									gc(
										a,
										{ pending: !0, data: g, method: u.method, action: r },
										null,
										g,
									);
								}
							} else
								typeof r == "function" &&
									(y.preventDefault(),
									(g = d ? mh(u, d) : new FormData(u)),
									gc(
										a,
										{ pending: !0, data: g, method: u.method, action: r },
										r,
										g,
									));
						},
						currentTarget: u,
					},
				],
			});
		}
	}
	for (var os = 0; os < uf.length; os++) {
		var fs = uf[os],
			Lv = fs.toLowerCase(),
			Yv = fs[0].toUpperCase() + fs.slice(1);
		kt(Lv, "on" + Yv);
	}
	kt(ef, "onAnimationEnd"),
		kt(tf, "onAnimationIteration"),
		kt(af, "onAnimationStart"),
		kt("dblclick", "onDoubleClick"),
		kt("focusin", "onFocus"),
		kt("focusout", "onBlur"),
		kt(uv, "onTransitionRun"),
		kt(iv, "onTransitionStart"),
		kt(rv, "onTransitionCancel"),
		kt(nf, "onTransitionEnd"),
		Nn("onMouseEnter", ["mouseout", "mouseover"]),
		Nn("onMouseLeave", ["mouseout", "mouseover"]),
		Nn("onPointerEnter", ["pointerout", "pointerover"]),
		Nn("onPointerLeave", ["pointerout", "pointerover"]),
		tn(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		tn(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		tn(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		tn(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		tn(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		);
	var lu =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Vv = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(lu),
		);
	function vh(e, t) {
		t = (t & 4) !== 0;
		for (var a = 0; a < e.length; a++) {
			var n = e[a],
				u = n.event;
			n = n.listeners;
			e: {
				var r = void 0;
				if (t)
					for (var d = n.length - 1; 0 <= d; d--) {
						var y = n[d],
							g = y.instance,
							T = y.currentTarget;
						if (((y = y.listener), g !== r && u.isPropagationStopped()))
							break e;
						(r = y), (u.currentTarget = T);
						try {
							r(u);
						} catch (D) {
							Si(D);
						}
						(u.currentTarget = null), (r = g);
					}
				else
					for (d = 0; d < n.length; d++) {
						if (
							((y = n[d]),
							(g = y.instance),
							(T = y.currentTarget),
							(y = y.listener),
							g !== r && u.isPropagationStopped())
						)
							break e;
						(r = y), (u.currentTarget = T);
						try {
							r(u);
						} catch (D) {
							Si(D);
						}
						(u.currentTarget = null), (r = g);
					}
			}
		}
	}
	function be(e, t) {
		var a = t[Or];
		a === void 0 && (a = t[Or] = new Set());
		var n = e + "__bubble";
		a.has(n) || (yh(t, e, 2, !1), a.add(n));
	}
	function ds(e, t, a) {
		var n = 0;
		t && (n |= 4), yh(a, e, n, t);
	}
	var ki = "_reactListening" + Math.random().toString(36).slice(2);
	function hs(e) {
		if (!e[ki]) {
			(e[ki] = !0),
				go.forEach(function (a) {
					a !== "selectionchange" && (Vv.has(a) || ds(a, !1, e), ds(a, !0, e));
				});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[ki] || ((t[ki] = !0), ds("selectionchange", !1, t));
		}
	}
	function yh(e, t, a, n) {
		switch (Bh(t)) {
			case 2:
				var u = vy;
				break;
			case 8:
				u = yy;
				break;
			default:
				u = Rs;
		}
		(a = u.bind(null, t, a, e)),
			(u = void 0),
			!Ur ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(u = !0),
			n
				? u !== void 0
					? e.addEventListener(t, a, { capture: !0, passive: u })
					: e.addEventListener(t, a, !0)
				: u !== void 0
					? e.addEventListener(t, a, { passive: u })
					: e.addEventListener(t, a, !1);
	}
	function ms(e, t, a, n, u) {
		var r = n;
		if (!(t & 1) && !(t & 2) && n !== null)
			e: for (;;) {
				if (n === null) return;
				var d = n.tag;
				if (d === 3 || d === 4) {
					var y = n.stateNode.containerInfo;
					if (y === u || (y.nodeType === 8 && y.parentNode === u)) break;
					if (d === 4)
						for (d = n.return; d !== null; ) {
							var g = d.tag;
							if (
								(g === 3 || g === 4) &&
								((g = d.stateNode.containerInfo),
								g === u || (g.nodeType === 8 && g.parentNode === u))
							)
								return;
							d = d.return;
						}
					for (; y !== null; ) {
						if (((d = en(y)), d === null)) return;
						if (((g = d.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
							n = r = d;
							continue e;
						}
						y = y.parentNode;
					}
				}
				n = n.return;
			}
		No(function () {
			var T = r,
				D = Dr(a),
				U = [];
			e: {
				var w = lf.get(e);
				if (w !== void 0) {
					var z = Iu,
						F = e;
					switch (e) {
						case "keypress":
							if (Fu(a) === 0) break e;
						case "keydown":
						case "keyup":
							z = k0;
							break;
						case "focusin":
							(F = "focus"), (z = Br);
							break;
						case "focusout":
							(F = "blur"), (z = Br);
							break;
						case "beforeblur":
						case "afterblur":
							z = Br;
							break;
						case "click":
							if (a.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							z = Do;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							z = T0;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							z = B0;
							break;
						case ef:
						case tf:
						case af:
							z = O0;
							break;
						case nf:
							z = L0;
							break;
						case "scroll":
						case "scrollend":
							z = x0;
							break;
						case "wheel":
							z = V0;
							break;
						case "copy":
						case "cut":
						case "paste":
							z = C0;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							z = Uo;
							break;
						case "toggle":
						case "beforetoggle":
							z = X0;
					}
					var re = (t & 4) !== 0,
						qe = !re && (e === "scroll" || e === "scrollend"),
						A = re ? (w !== null ? w + "Capture" : null) : w;
					re = [];
					for (var E = T, O; E !== null; ) {
						var j = E;
						if (
							((O = j.stateNode),
							(j = j.tag),
							(j !== 5 && j !== 26 && j !== 27) ||
								O === null ||
								A === null ||
								((j = El(E, A)), j != null && re.push(uu(E, j, O))),
							qe)
						)
							break;
						E = E.return;
					}
					0 < re.length &&
						((w = new z(w, F, null, a, D)),
						U.push({ event: w, listeners: re }));
				}
			}
			if (!(t & 7)) {
				e: {
					if (
						((w = e === "mouseover" || e === "pointerover"),
						(z = e === "mouseout" || e === "pointerout"),
						w &&
							a !== Mr &&
							(F = a.relatedTarget || a.fromElement) &&
							(en(F) || F[On]))
					)
						break e;
					if (
						(z || w) &&
						((w =
							D.window === D
								? D
								: (w = D.ownerDocument)
									? w.defaultView || w.parentWindow
									: window),
						z
							? ((F = a.relatedTarget || a.toElement),
								(z = T),
								(F = F ? en(F) : null),
								F !== null &&
									((qe = ue(F)),
									(re = F.tag),
									F !== qe || (re !== 5 && re !== 27 && re !== 6)) &&
									(F = null))
							: ((z = null), (F = T)),
						z !== F)
					) {
						if (
							((re = Do),
							(j = "onMouseLeave"),
							(A = "onMouseEnter"),
							(E = "mouse"),
							(e === "pointerout" || e === "pointerover") &&
								((re = Uo),
								(j = "onPointerLeave"),
								(A = "onPointerEnter"),
								(E = "pointer")),
							(qe = z == null ? w : xl(z)),
							(O = F == null ? w : xl(F)),
							(w = new re(j, E + "leave", z, a, D)),
							(w.target = qe),
							(w.relatedTarget = O),
							(j = null),
							en(D) === T &&
								((re = new re(A, E + "enter", F, a, D)),
								(re.target = O),
								(re.relatedTarget = qe),
								(j = re)),
							(qe = j),
							z && F)
						)
							t: {
								for (re = z, A = F, E = 0, O = re; O; O = ll(O)) E++;
								for (O = 0, j = A; j; j = ll(j)) O++;
								for (; 0 < E - O; ) (re = ll(re)), E--;
								for (; 0 < O - E; ) (A = ll(A)), O--;
								for (; E--; ) {
									if (re === A || (A !== null && re === A.alternate)) break t;
									(re = ll(re)), (A = ll(A));
								}
								re = null;
							}
						else re = null;
						z !== null && ph(U, w, z, re, !1),
							F !== null && qe !== null && ph(U, qe, F, re, !0);
					}
				}
				e: {
					if (
						((w = T ? xl(T) : window),
						(z = w.nodeName && w.nodeName.toLowerCase()),
						z === "select" || (z === "input" && w.type === "file"))
					)
						var $ = Vo;
					else if (Lo(w))
						if (Go) $ = tv;
						else {
							$ = I0;
							var me = P0;
						}
					else
						(z = w.nodeName),
							!z ||
							z.toLowerCase() !== "input" ||
							(w.type !== "checkbox" && w.type !== "radio")
								? T && zr(T.elementType) && ($ = Vo)
								: ($ = ev);
					if ($ && ($ = $(e, T))) {
						Yo(U, $, a, D);
						break e;
					}
					me && me(e, w, T),
						e === "focusout" &&
							T &&
							w.type === "number" &&
							T.memoizedProps.value != null &&
							Nr(w, "number", w.value);
				}
				switch (((me = T ? xl(T) : window), e)) {
					case "focusin":
						(Lo(me) || me.contentEditable === "true") &&
							((kn = me), (Xr = T), (zl = null));
						break;
					case "focusout":
						zl = Xr = kn = null;
						break;
					case "mousedown":
						Qr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(Qr = !1), Po(U, a, D);
						break;
					case "selectionchange":
						if (lv) break;
					case "keydown":
					case "keyup":
						Po(U, a, D);
				}
				var I;
				if (Lr)
					e: {
						switch (e) {
							case "compositionstart":
								var ae = "onCompositionStart";
								break e;
							case "compositionend":
								ae = "onCompositionEnd";
								break e;
							case "compositionupdate":
								ae = "onCompositionUpdate";
								break e;
						}
						ae = void 0;
					}
				else
					Un
						? Bo(e, a) && (ae = "onCompositionEnd")
						: e === "keydown" &&
							a.keyCode === 229 &&
							(ae = "onCompositionStart");
				ae &&
					(ko &&
						a.locale !== "ko" &&
						(Un || ae !== "onCompositionStart"
							? ae === "onCompositionEnd" && Un && (I = zo())
							: ((Ra = D),
								(kr = "value" in Ra ? Ra.value : Ra.textContent),
								(Un = !0))),
					(me = Hi(T, ae)),
					0 < me.length &&
						((ae = new jo(ae, e, null, a, D)),
						U.push({ event: ae, listeners: me }),
						I ? (ae.data = I) : ((I = qo(a)), I !== null && (ae.data = I)))),
					(I = K0 ? $0(e, a) : J0(e, a)) &&
						((ae = Hi(T, "onBeforeInput")),
						0 < ae.length &&
							((me = new jo("onBeforeInput", "beforeinput", null, a, D)),
							U.push({ event: me, listeners: ae }),
							(me.data = I))),
					qv(U, e, T, a, D);
			}
			vh(U, t);
		});
	}
	function uu(e, t, a) {
		return { instance: e, listener: t, currentTarget: a };
	}
	function Hi(e, t) {
		for (var a = t + "Capture", n = []; e !== null; ) {
			var u = e,
				r = u.stateNode;
			(u = u.tag),
				(u !== 5 && u !== 26 && u !== 27) ||
					r === null ||
					((u = El(e, a)),
					u != null && n.unshift(uu(e, u, r)),
					(u = El(e, t)),
					u != null && n.push(uu(e, u, r))),
				(e = e.return);
		}
		return n;
	}
	function ll(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function ph(e, t, a, n, u) {
		for (var r = t._reactName, d = []; a !== null && a !== n; ) {
			var y = a,
				g = y.alternate,
				T = y.stateNode;
			if (((y = y.tag), g !== null && g === n)) break;
			(y !== 5 && y !== 26 && y !== 27) ||
				T === null ||
				((g = T),
				u
					? ((T = El(a, r)), T != null && d.unshift(uu(a, T, g)))
					: u || ((T = El(a, r)), T != null && d.push(uu(a, T, g)))),
				(a = a.return);
		}
		d.length !== 0 && e.push({ event: t, listeners: d });
	}
	var Gv = /\r\n?/g,
		Xv = /\u0000|\uFFFD/g;
	function gh(e) {
		return (typeof e == "string" ? e : "" + e)
			.replace(
				Gv,
				`
`,
			)
			.replace(Xv, "");
	}
	function bh(e, t) {
		return (t = gh(t)), gh(e) === t;
	}
	function Zi() {}
	function we(e, t, a, n, u, r) {
		switch (a) {
			case "children":
				typeof n == "string"
					? t === "body" || (t === "textarea" && n === "") || Mn(e, n)
					: (typeof n == "number" || typeof n == "bigint") &&
						t !== "body" &&
						Mn(e, "" + n);
				break;
			case "className":
				Qu(e, "class", n);
				break;
			case "tabIndex":
				Qu(e, "tabindex", n);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Qu(e, a, n);
				break;
			case "style":
				wo(e, n, r);
				break;
			case "data":
				if (t !== "object") {
					Qu(e, "data", n);
					break;
				}
			case "src":
			case "href":
				if (n === "" && (t !== "a" || a !== "href")) {
					e.removeAttribute(a);
					break;
				}
				if (
					n == null ||
					typeof n == "function" ||
					typeof n == "symbol" ||
					typeof n == "boolean"
				) {
					e.removeAttribute(a);
					break;
				}
				(n = Ju("" + n)), e.setAttribute(a, n);
				break;
			case "action":
			case "formAction":
				if (typeof n == "function") {
					e.setAttribute(
						a,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else
					typeof r == "function" &&
						(a === "formAction"
							? (t !== "input" && we(e, t, "name", u.name, u, null),
								we(e, t, "formEncType", u.formEncType, u, null),
								we(e, t, "formMethod", u.formMethod, u, null),
								we(e, t, "formTarget", u.formTarget, u, null))
							: (we(e, t, "encType", u.encType, u, null),
								we(e, t, "method", u.method, u, null),
								we(e, t, "target", u.target, u, null)));
				if (n == null || typeof n == "symbol" || typeof n == "boolean") {
					e.removeAttribute(a);
					break;
				}
				(n = Ju("" + n)), e.setAttribute(a, n);
				break;
			case "onClick":
				n != null && (e.onclick = Zi);
				break;
			case "onScroll":
				n != null && be("scroll", e);
				break;
			case "onScrollEnd":
				n != null && be("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (n != null) {
					if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
					if (((a = n.__html), a != null)) {
						if (u.children != null) throw Error(s(60));
						e.innerHTML = a;
					}
				}
				break;
			case "multiple":
				e.multiple = n && typeof n != "function" && typeof n != "symbol";
				break;
			case "muted":
				e.muted = n && typeof n != "function" && typeof n != "symbol";
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
					n == null ||
					typeof n == "function" ||
					typeof n == "boolean" ||
					typeof n == "symbol"
				) {
					e.removeAttribute("xlink:href");
					break;
				}
				(a = Ju("" + n)),
					e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				n != null && typeof n != "function" && typeof n != "symbol"
					? e.setAttribute(a, "" + n)
					: e.removeAttribute(a);
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
				n && typeof n != "function" && typeof n != "symbol"
					? e.setAttribute(a, "")
					: e.removeAttribute(a);
				break;
			case "capture":
			case "download":
				n === !0
					? e.setAttribute(a, "")
					: n !== !1 &&
						  n != null &&
						  typeof n != "function" &&
						  typeof n != "symbol"
						? e.setAttribute(a, n)
						: e.removeAttribute(a);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				n != null &&
				typeof n != "function" &&
				typeof n != "symbol" &&
				!isNaN(n) &&
				1 <= n
					? e.setAttribute(a, n)
					: e.removeAttribute(a);
				break;
			case "rowSpan":
			case "start":
				n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
					? e.removeAttribute(a)
					: e.setAttribute(a, n);
				break;
			case "popover":
				be("beforetoggle", e), be("toggle", e), Xu(e, "popover", n);
				break;
			case "xlinkActuate":
				na(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
				break;
			case "xlinkArcrole":
				na(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
				break;
			case "xlinkRole":
				na(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
				break;
			case "xlinkShow":
				na(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
				break;
			case "xlinkTitle":
				na(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
				break;
			case "xlinkType":
				na(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
				break;
			case "xmlBase":
				na(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
				break;
			case "xmlLang":
				na(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
				break;
			case "xmlSpace":
				na(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
				break;
			case "is":
				Xu(e, "is", n);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < a.length) ||
					(a[0] !== "o" && a[0] !== "O") ||
					(a[1] !== "n" && a[1] !== "N")) &&
					((a = _0.get(a) || a), Xu(e, a, n));
		}
	}
	function vs(e, t, a, n, u, r) {
		switch (a) {
			case "style":
				wo(e, n, r);
				break;
			case "dangerouslySetInnerHTML":
				if (n != null) {
					if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
					if (((a = n.__html), a != null)) {
						if (u.children != null) throw Error(s(60));
						e.innerHTML = a;
					}
				}
				break;
			case "children":
				typeof n == "string"
					? Mn(e, n)
					: (typeof n == "number" || typeof n == "bigint") && Mn(e, "" + n);
				break;
			case "onScroll":
				n != null && be("scroll", e);
				break;
			case "onScrollEnd":
				n != null && be("scrollend", e);
				break;
			case "onClick":
				n != null && (e.onclick = Zi);
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
				if (!bo.hasOwnProperty(a))
					e: {
						if (
							a[0] === "o" &&
							a[1] === "n" &&
							((u = a.endsWith("Capture")),
							(t = a.slice(2, u ? a.length - 7 : void 0)),
							(r = e[ht] || null),
							(r = r != null ? r[a] : null),
							typeof r == "function" && e.removeEventListener(t, r, u),
							typeof n == "function")
						) {
							typeof r != "function" &&
								r !== null &&
								(a in e
									? (e[a] = null)
									: e.hasAttribute(a) && e.removeAttribute(a)),
								e.addEventListener(t, n, u);
							break e;
						}
						a in e
							? (e[a] = n)
							: n === !0
								? e.setAttribute(a, "")
								: Xu(e, a, n);
					}
		}
	}
	function lt(e, t, a) {
		switch (t) {
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
				be("error", e), be("load", e);
				var n = !1,
					u = !1,
					r;
				for (r in a)
					if (a.hasOwnProperty(r)) {
						var d = a[r];
						if (d != null)
							switch (r) {
								case "src":
									n = !0;
									break;
								case "srcSet":
									u = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(s(137, t));
								default:
									we(e, t, r, d, a, null);
							}
					}
				u && we(e, t, "srcSet", a.srcSet, a, null),
					n && we(e, t, "src", a.src, a, null);
				return;
			case "input":
				be("invalid", e);
				var y = (r = d = u = null),
					g = null,
					T = null;
				for (n in a)
					if (a.hasOwnProperty(n)) {
						var D = a[n];
						if (D != null)
							switch (n) {
								case "name":
									u = D;
									break;
								case "type":
									d = D;
									break;
								case "checked":
									g = D;
									break;
								case "defaultChecked":
									T = D;
									break;
								case "value":
									r = D;
									break;
								case "defaultValue":
									y = D;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (D != null) throw Error(s(137, t));
									break;
								default:
									we(e, t, n, D, a, null);
							}
					}
				To(e, r, y, g, T, d, u, !1), Ku(e);
				return;
			case "select":
				be("invalid", e), (n = d = r = null);
				for (u in a)
					if (a.hasOwnProperty(u) && ((y = a[u]), y != null))
						switch (u) {
							case "value":
								r = y;
								break;
							case "defaultValue":
								d = y;
								break;
							case "multiple":
								n = y;
							default:
								we(e, t, u, y, a, null);
						}
				(t = r),
					(a = d),
					(e.multiple = !!n),
					t != null ? zn(e, !!n, t, !1) : a != null && zn(e, !!n, a, !0);
				return;
			case "textarea":
				be("invalid", e), (r = u = n = null);
				for (d in a)
					if (a.hasOwnProperty(d) && ((y = a[d]), y != null))
						switch (d) {
							case "value":
								n = y;
								break;
							case "defaultValue":
								u = y;
								break;
							case "children":
								r = y;
								break;
							case "dangerouslySetInnerHTML":
								if (y != null) throw Error(s(91));
								break;
							default:
								we(e, t, d, y, a, null);
						}
				Ro(e, n, u, r), Ku(e);
				return;
			case "option":
				for (g in a)
					if (a.hasOwnProperty(g) && ((n = a[g]), n != null))
						switch (g) {
							case "selected":
								e.selected =
									n && typeof n != "function" && typeof n != "symbol";
								break;
							default:
								we(e, t, g, n, a, null);
						}
				return;
			case "dialog":
				be("cancel", e), be("close", e);
				break;
			case "iframe":
			case "object":
				be("load", e);
				break;
			case "video":
			case "audio":
				for (n = 0; n < lu.length; n++) be(lu[n], e);
				break;
			case "image":
				be("error", e), be("load", e);
				break;
			case "details":
				be("toggle", e);
				break;
			case "embed":
			case "source":
			case "link":
				be("error", e), be("load", e);
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
				for (T in a)
					if (a.hasOwnProperty(T) && ((n = a[T]), n != null))
						switch (T) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(s(137, t));
							default:
								we(e, t, T, n, a, null);
						}
				return;
			default:
				if (zr(t)) {
					for (D in a)
						a.hasOwnProperty(D) &&
							((n = a[D]), n !== void 0 && vs(e, t, D, n, a, void 0));
					return;
				}
		}
		for (y in a)
			a.hasOwnProperty(y) && ((n = a[y]), n != null && we(e, t, y, n, a, null));
	}
	function Qv(e, t, a, n) {
		switch (t) {
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
					r = null,
					d = null,
					y = null,
					g = null,
					T = null,
					D = null;
				for (z in a) {
					var U = a[z];
					if (a.hasOwnProperty(z) && U != null)
						switch (z) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								g = U;
							default:
								n.hasOwnProperty(z) || we(e, t, z, null, n, U);
						}
				}
				for (var w in n) {
					var z = n[w];
					if (((U = a[w]), n.hasOwnProperty(w) && (z != null || U != null)))
						switch (w) {
							case "type":
								r = z;
								break;
							case "name":
								u = z;
								break;
							case "checked":
								T = z;
								break;
							case "defaultChecked":
								D = z;
								break;
							case "value":
								d = z;
								break;
							case "defaultValue":
								y = z;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (z != null) throw Error(s(137, t));
								break;
							default:
								z !== U && we(e, t, w, z, n, U);
						}
				}
				Cr(e, d, y, g, T, D, r, u);
				return;
			case "select":
				z = d = y = w = null;
				for (r in a)
					if (((g = a[r]), a.hasOwnProperty(r) && g != null))
						switch (r) {
							case "value":
								break;
							case "multiple":
								z = g;
							default:
								n.hasOwnProperty(r) || we(e, t, r, null, n, g);
						}
				for (u in n)
					if (
						((r = n[u]),
						(g = a[u]),
						n.hasOwnProperty(u) && (r != null || g != null))
					)
						switch (u) {
							case "value":
								w = r;
								break;
							case "defaultValue":
								y = r;
								break;
							case "multiple":
								d = r;
							default:
								r !== g && we(e, t, u, r, n, g);
						}
				(t = y),
					(a = d),
					(n = z),
					w != null
						? zn(e, !!a, w, !1)
						: !!n != !!a &&
							(t != null ? zn(e, !!a, t, !0) : zn(e, !!a, a ? [] : "", !1));
				return;
			case "textarea":
				z = w = null;
				for (y in a)
					if (
						((u = a[y]),
						a.hasOwnProperty(y) && u != null && !n.hasOwnProperty(y))
					)
						switch (y) {
							case "value":
								break;
							case "children":
								break;
							default:
								we(e, t, y, null, n, u);
						}
				for (d in n)
					if (
						((u = n[d]),
						(r = a[d]),
						n.hasOwnProperty(d) && (u != null || r != null))
					)
						switch (d) {
							case "value":
								w = u;
								break;
							case "defaultValue":
								z = u;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(s(91));
								break;
							default:
								u !== r && we(e, t, d, u, n, r);
						}
				Ao(e, w, z);
				return;
			case "option":
				for (var F in a)
					if (
						((w = a[F]),
						a.hasOwnProperty(F) && w != null && !n.hasOwnProperty(F))
					)
						switch (F) {
							case "selected":
								e.selected = !1;
								break;
							default:
								we(e, t, F, null, n, w);
						}
				for (g in n)
					if (
						((w = n[g]),
						(z = a[g]),
						n.hasOwnProperty(g) && w !== z && (w != null || z != null))
					)
						switch (g) {
							case "selected":
								e.selected =
									w && typeof w != "function" && typeof w != "symbol";
								break;
							default:
								we(e, t, g, w, n, z);
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
				for (var re in a)
					(w = a[re]),
						a.hasOwnProperty(re) &&
							w != null &&
							!n.hasOwnProperty(re) &&
							we(e, t, re, null, n, w);
				for (T in n)
					if (
						((w = n[T]),
						(z = a[T]),
						n.hasOwnProperty(T) && w !== z && (w != null || z != null))
					)
						switch (T) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (w != null) throw Error(s(137, t));
								break;
							default:
								we(e, t, T, w, n, z);
						}
				return;
			default:
				if (zr(t)) {
					for (var qe in a)
						(w = a[qe]),
							a.hasOwnProperty(qe) &&
								w !== void 0 &&
								!n.hasOwnProperty(qe) &&
								vs(e, t, qe, void 0, n, w);
					for (D in n)
						(w = n[D]),
							(z = a[D]),
							!n.hasOwnProperty(D) ||
								w === z ||
								(w === void 0 && z === void 0) ||
								vs(e, t, D, w, n, z);
					return;
				}
		}
		for (var A in a)
			(w = a[A]),
				a.hasOwnProperty(A) &&
					w != null &&
					!n.hasOwnProperty(A) &&
					we(e, t, A, null, n, w);
		for (U in n)
			(w = n[U]),
				(z = a[U]),
				!n.hasOwnProperty(U) ||
					w === z ||
					(w == null && z == null) ||
					we(e, t, U, w, n, z);
	}
	var ys = null,
		ps = null;
	function Bi(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function _h(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function Sh(e, t) {
		if (e === 0)
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function gs(e, t) {
		return (
			e === "textarea" ||
			e === "noscript" ||
			typeof t.children == "string" ||
			typeof t.children == "number" ||
			typeof t.children == "bigint" ||
			(typeof t.dangerouslySetInnerHTML == "object" &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var bs = null;
	function Kv() {
		var e = window.event;
		return e && e.type === "popstate"
			? e === bs
				? !1
				: ((bs = e), !0)
			: ((bs = null), !1);
	}
	var xh = typeof setTimeout == "function" ? setTimeout : void 0,
		$v = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Eh = typeof Promise == "function" ? Promise : void 0,
		Jv =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof Eh < "u"
					? function (e) {
							return Eh.resolve(null).then(e).catch(Wv);
						}
					: xh;
	function Wv(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function _s(e, t) {
		var a = t,
			n = 0;
		do {
			var u = a.nextSibling;
			if ((e.removeChild(a), u && u.nodeType === 8))
				if (((a = u.data), a === "/$")) {
					if (n === 0) {
						e.removeChild(u), hu(t);
						return;
					}
					n--;
				} else (a !== "$" && a !== "$?" && a !== "$!") || n++;
			a = u;
		} while (a);
		hu(t);
	}
	function Ss(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var a = t;
			switch (((t = t.nextSibling), a.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					Ss(a), wr(a);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (a.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(a);
		}
	}
	function Fv(e, t, a, n) {
		for (; e.nodeType === 1; ) {
			var u = a;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (n) {
				if (!e[Sl])
					switch (t) {
						case "meta":
							if (!e.hasAttribute("itemprop")) break;
							return e;
						case "link":
							if (
								((r = e.getAttribute("rel")),
								r === "stylesheet" && e.hasAttribute("data-precedence"))
							)
								break;
							if (
								r !== u.rel ||
								e.getAttribute("href") !== (u.href == null ? null : u.href) ||
								e.getAttribute("crossorigin") !==
									(u.crossOrigin == null ? null : u.crossOrigin) ||
								e.getAttribute("title") !== (u.title == null ? null : u.title)
							)
								break;
							return e;
						case "style":
							if (e.hasAttribute("data-precedence")) break;
							return e;
						case "script":
							if (
								((r = e.getAttribute("src")),
								(r !== (u.src == null ? null : u.src) ||
									e.getAttribute("type") !== (u.type == null ? null : u.type) ||
									e.getAttribute("crossorigin") !==
										(u.crossOrigin == null ? null : u.crossOrigin)) &&
									r &&
									e.hasAttribute("async") &&
									!e.hasAttribute("itemprop"))
							)
								break;
							return e;
						default:
							return e;
					}
			} else if (t === "input" && e.type === "hidden") {
				var r = u.name == null ? null : "" + u.name;
				if (u.type === "hidden" && e.getAttribute("name") === r) return e;
			} else return e;
			if (((e = Bt(e.nextSibling)), e === null)) break;
		}
		return null;
	}
	function Pv(e, t, a) {
		if (t === "") return null;
		for (; e.nodeType !== 3; )
			if (
				((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
					!a) ||
				((e = Bt(e.nextSibling)), e === null)
			)
				return null;
		return e;
	}
	function Bt(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = e.data),
					t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
				)
					break;
				if (t === "/$") return null;
			}
		}
		return e;
	}
	function Th(e) {
		e = e.previousSibling;
		for (var t = 0; e; ) {
			if (e.nodeType === 8) {
				var a = e.data;
				if (a === "$" || a === "$!" || a === "$?") {
					if (t === 0) return e;
					t--;
				} else a === "/$" && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function Ah(e, t, a) {
		switch (((t = Bi(a)), e)) {
			case "html":
				if (((e = t.documentElement), !e)) throw Error(s(452));
				return e;
			case "head":
				if (((e = t.head), !e)) throw Error(s(453));
				return e;
			case "body":
				if (((e = t.body), !e)) throw Error(s(454));
				return e;
			default:
				throw Error(s(451));
		}
	}
	var Ut = new Map(),
		Rh = new Set();
	function qi(e) {
		return typeof e.getRootNode == "function"
			? e.getRootNode()
			: e.ownerDocument;
	}
	var ga = K.d;
	K.d = { f: Iv, r: ey, D: ty, C: ay, L: ny, m: ly, X: iy, S: uy, M: ry };
	function Iv() {
		var e = ga.f(),
			t = Mi();
		return e || t;
	}
	function ey(e) {
		var t = wn(e);
		t !== null && t.tag === 5 && t.type === "form" ? If(t) : ga.r(e);
	}
	var ul = typeof document > "u" ? null : document;
	function Oh(e, t, a) {
		var n = ul;
		if (n && typeof t == "string" && t) {
			var u = At(t);
			(u = 'link[rel="' + e + '"][href="' + u + '"]'),
				typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
				Rh.has(u) ||
					(Rh.add(u),
					(e = { rel: e, crossOrigin: a, href: t }),
					n.querySelector(u) === null &&
						((t = n.createElement("link")),
						lt(t, "link", e),
						Pe(t),
						n.head.appendChild(t)));
		}
	}
	function ty(e) {
		ga.D(e), Oh("dns-prefetch", e, null);
	}
	function ay(e, t) {
		ga.C(e, t), Oh("preconnect", e, t);
	}
	function ny(e, t, a) {
		ga.L(e, t, a);
		var n = ul;
		if (n && e && t) {
			var u = 'link[rel="preload"][as="' + At(t) + '"]';
			t === "image" && a && a.imageSrcSet
				? ((u += '[imagesrcset="' + At(a.imageSrcSet) + '"]'),
					typeof a.imageSizes == "string" &&
						(u += '[imagesizes="' + At(a.imageSizes) + '"]'))
				: (u += '[href="' + At(e) + '"]');
			var r = u;
			switch (t) {
				case "style":
					r = il(e);
					break;
				case "script":
					r = rl(e);
			}
			Ut.has(r) ||
				((e = ee(
					{
						rel: "preload",
						href: t === "image" && a && a.imageSrcSet ? void 0 : e,
						as: t,
					},
					a,
				)),
				Ut.set(r, e),
				n.querySelector(u) !== null ||
					(t === "style" && n.querySelector(iu(r))) ||
					(t === "script" && n.querySelector(ru(r))) ||
					((t = n.createElement("link")),
					lt(t, "link", e),
					Pe(t),
					n.head.appendChild(t)));
		}
	}
	function ly(e, t) {
		ga.m(e, t);
		var a = ul;
		if (a && e) {
			var n = t && typeof t.as == "string" ? t.as : "script",
				u =
					'link[rel="modulepreload"][as="' + At(n) + '"][href="' + At(e) + '"]',
				r = u;
			switch (n) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					r = rl(e);
			}
			if (
				!Ut.has(r) &&
				((e = ee({ rel: "modulepreload", href: e }, t)),
				Ut.set(r, e),
				a.querySelector(u) === null)
			) {
				switch (n) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (a.querySelector(ru(r))) return;
				}
				(n = a.createElement("link")),
					lt(n, "link", e),
					Pe(n),
					a.head.appendChild(n);
			}
		}
	}
	function uy(e, t, a) {
		ga.S(e, t, a);
		var n = ul;
		if (n && e) {
			var u = Cn(n).hoistableStyles,
				r = il(e);
			t = t || "default";
			var d = u.get(r);
			if (!d) {
				var y = { loading: 0, preload: null };
				if ((d = n.querySelector(iu(r)))) y.loading = 5;
				else {
					(e = ee({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
						(a = Ut.get(r)) && xs(e, a);
					var g = (d = n.createElement("link"));
					Pe(g),
						lt(g, "link", e),
						(g._p = new Promise(function (T, D) {
							(g.onload = T), (g.onerror = D);
						})),
						g.addEventListener("load", function () {
							y.loading |= 1;
						}),
						g.addEventListener("error", function () {
							y.loading |= 2;
						}),
						(y.loading |= 4),
						Li(d, t, n);
				}
				(d = { type: "stylesheet", instance: d, count: 1, state: y }),
					u.set(r, d);
			}
		}
	}
	function iy(e, t) {
		ga.X(e, t);
		var a = ul;
		if (a && e) {
			var n = Cn(a).hoistableScripts,
				u = rl(e),
				r = n.get(u);
			r ||
				((r = a.querySelector(ru(u))),
				r ||
					((e = ee({ src: e, async: !0 }, t)),
					(t = Ut.get(u)) && Es(e, t),
					(r = a.createElement("script")),
					Pe(r),
					lt(r, "link", e),
					a.head.appendChild(r)),
				(r = { type: "script", instance: r, count: 1, state: null }),
				n.set(u, r));
		}
	}
	function ry(e, t) {
		ga.M(e, t);
		var a = ul;
		if (a && e) {
			var n = Cn(a).hoistableScripts,
				u = rl(e),
				r = n.get(u);
			r ||
				((r = a.querySelector(ru(u))),
				r ||
					((e = ee({ src: e, async: !0, type: "module" }, t)),
					(t = Ut.get(u)) && Es(e, t),
					(r = a.createElement("script")),
					Pe(r),
					lt(r, "link", e),
					a.head.appendChild(r)),
				(r = { type: "script", instance: r, count: 1, state: null }),
				n.set(u, r));
		}
	}
	function wh(e, t, a, n) {
		var u = (u = Ea.current) ? qi(u) : null;
		if (!u) throw Error(s(446));
		switch (e) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof a.precedence == "string" && typeof a.href == "string"
					? ((t = il(a.href)),
						(a = Cn(u).hoistableStyles),
						(n = a.get(t)),
						n ||
							((n = { type: "style", instance: null, count: 0, state: null }),
							a.set(t, n)),
						n)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					a.rel === "stylesheet" &&
					typeof a.href == "string" &&
					typeof a.precedence == "string"
				) {
					e = il(a.href);
					var r = Cn(u).hoistableStyles,
						d = r.get(e);
					if (
						(d ||
							((u = u.ownerDocument || u),
							(d = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							r.set(e, d),
							(r = u.querySelector(iu(e))) &&
								!r._p &&
								((d.instance = r), (d.state.loading = 5)),
							Ut.has(e) ||
								((a = {
									rel: "preload",
									as: "style",
									href: a.href,
									crossOrigin: a.crossOrigin,
									integrity: a.integrity,
									media: a.media,
									hrefLang: a.hrefLang,
									referrerPolicy: a.referrerPolicy,
								}),
								Ut.set(e, a),
								r || cy(u, e, a, d.state))),
						t && n === null)
					)
						throw Error(s(528, ""));
					return d;
				}
				if (t && n !== null) throw Error(s(529, ""));
				return null;
			case "script":
				return (
					(t = a.async),
					(a = a.src),
					typeof a == "string" &&
					t &&
					typeof t != "function" &&
					typeof t != "symbol"
						? ((t = rl(a)),
							(a = Cn(u).hoistableScripts),
							(n = a.get(t)),
							n ||
								((n = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								a.set(t, n)),
							n)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(s(444, e));
		}
	}
	function il(e) {
		return 'href="' + At(e) + '"';
	}
	function iu(e) {
		return 'link[rel="stylesheet"][' + e + "]";
	}
	function Ch(e) {
		return ee({}, e, { "data-precedence": e.precedence, precedence: null });
	}
	function cy(e, t, a, n) {
		e.querySelector('link[rel="preload"][as="style"][' + t + "]")
			? (n.loading = 1)
			: ((t = e.createElement("link")),
				(n.preload = t),
				t.addEventListener("load", function () {
					return (n.loading |= 1);
				}),
				t.addEventListener("error", function () {
					return (n.loading |= 2);
				}),
				lt(t, "link", a),
				Pe(t),
				e.head.appendChild(t));
	}
	function rl(e) {
		return '[src="' + At(e) + '"]';
	}
	function ru(e) {
		return "script[async]" + e;
	}
	function Nh(e, t, a) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case "style":
					var n = e.querySelector('style[data-href~="' + At(a.href) + '"]');
					if (n) return (t.instance = n), Pe(n), n;
					var u = ee({}, a, {
						"data-href": a.href,
						"data-precedence": a.precedence,
						href: null,
						precedence: null,
					});
					return (
						(n = (e.ownerDocument || e).createElement("style")),
						Pe(n),
						lt(n, "style", u),
						Li(n, a.precedence, e),
						(t.instance = n)
					);
				case "stylesheet":
					u = il(a.href);
					var r = e.querySelector(iu(u));
					if (r) return (t.state.loading |= 4), (t.instance = r), Pe(r), r;
					(n = Ch(a)),
						(u = Ut.get(u)) && xs(n, u),
						(r = (e.ownerDocument || e).createElement("link")),
						Pe(r);
					var d = r;
					return (
						(d._p = new Promise(function (y, g) {
							(d.onload = y), (d.onerror = g);
						})),
						lt(r, "link", n),
						(t.state.loading |= 4),
						Li(r, a.precedence, e),
						(t.instance = r)
					);
				case "script":
					return (
						(r = rl(a.src)),
						(u = e.querySelector(ru(r)))
							? ((t.instance = u), Pe(u), u)
							: ((n = a),
								(u = Ut.get(r)) && ((n = ee({}, a)), Es(n, u)),
								(e = e.ownerDocument || e),
								(u = e.createElement("script")),
								Pe(u),
								lt(u, "link", n),
								e.head.appendChild(u),
								(t.instance = u))
					);
				case "void":
					return null;
				default:
					throw Error(s(443, t.type));
			}
		else
			t.type === "stylesheet" &&
				!(t.state.loading & 4) &&
				((n = t.instance), (t.state.loading |= 4), Li(n, a.precedence, e));
		return t.instance;
	}
	function Li(e, t, a) {
		for (
			var n = a.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				u = n.length ? n[n.length - 1] : null,
				r = u,
				d = 0;
			d < n.length;
			d++
		) {
			var y = n[d];
			if (y.dataset.precedence === t) r = y;
			else if (r !== u) break;
		}
		r
			? r.parentNode.insertBefore(e, r.nextSibling)
			: ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
	}
	function xs(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.title == null && (e.title = t.title);
	}
	function Es(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.integrity == null && (e.integrity = t.integrity);
	}
	var Yi = null;
	function zh(e, t, a) {
		if (Yi === null) {
			var n = new Map(),
				u = (Yi = new Map());
			u.set(a, n);
		} else (u = Yi), (n = u.get(a)), n || ((n = new Map()), u.set(a, n));
		if (n.has(e)) return n;
		for (
			n.set(e, null), a = a.getElementsByTagName(e), u = 0;
			u < a.length;
			u++
		) {
			var r = a[u];
			if (
				!(
					r[Sl] ||
					r[ut] ||
					(e === "link" && r.getAttribute("rel") === "stylesheet")
				) &&
				r.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var d = r.getAttribute(t) || "";
				d = e + d;
				var y = n.get(d);
				y ? y.push(r) : n.set(d, [r]);
			}
		}
		return n;
	}
	function Mh(e, t, a) {
		(e = e.ownerDocument || e),
			e.head.insertBefore(
				a,
				t === "title" ? e.querySelector("head > title") : null,
			);
	}
	function sy(e, t, a) {
		if (a === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof t.precedence != "string" ||
					typeof t.href != "string" ||
					t.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof t.rel != "string" ||
					typeof t.href != "string" ||
					t.href === "" ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case "stylesheet":
						return (
							(e = t.disabled), typeof t.precedence == "string" && e == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					t.async &&
					typeof t.async != "function" &&
					typeof t.async != "symbol" &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function Dh(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	var cu = null;
	function oy() {}
	function fy(e, t, a) {
		if (cu === null) throw Error(s(475));
		var n = cu;
		if (
			t.type === "stylesheet" &&
			(typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
			!(t.state.loading & 4)
		) {
			if (t.instance === null) {
				var u = il(a.href),
					r = e.querySelector(iu(u));
				if (r) {
					(e = r._p),
						e !== null &&
							typeof e == "object" &&
							typeof e.then == "function" &&
							(n.count++, (n = Vi.bind(n)), e.then(n, n)),
						(t.state.loading |= 4),
						(t.instance = r),
						Pe(r);
					return;
				}
				(r = e.ownerDocument || e),
					(a = Ch(a)),
					(u = Ut.get(u)) && xs(a, u),
					(r = r.createElement("link")),
					Pe(r);
				var d = r;
				(d._p = new Promise(function (y, g) {
					(d.onload = y), (d.onerror = g);
				})),
					lt(r, "link", a),
					(t.instance = r);
			}
			n.stylesheets === null && (n.stylesheets = new Map()),
				n.stylesheets.set(t, e),
				(e = t.state.preload) &&
					!(t.state.loading & 3) &&
					(n.count++,
					(t = Vi.bind(n)),
					e.addEventListener("load", t),
					e.addEventListener("error", t));
		}
	}
	function dy() {
		if (cu === null) throw Error(s(475));
		var e = cu;
		return (
			e.stylesheets && e.count === 0 && Ts(e, e.stylesheets),
			0 < e.count
				? function (t) {
						var a = setTimeout(function () {
							if ((e.stylesheets && Ts(e, e.stylesheets), e.unsuspend)) {
								var n = e.unsuspend;
								(e.unsuspend = null), n();
							}
						}, 6e4);
						return (
							(e.unsuspend = t),
							function () {
								(e.unsuspend = null), clearTimeout(a);
							}
						);
					}
				: null
		);
	}
	function Vi() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) Ts(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				(this.unsuspend = null), e();
			}
		}
	}
	var Gi = null;
	function Ts(e, t) {
		(e.stylesheets = null),
			e.unsuspend !== null &&
				(e.count++,
				(Gi = new Map()),
				t.forEach(hy, e),
				(Gi = null),
				Vi.call(e));
	}
	function hy(e, t) {
		if (!(t.state.loading & 4)) {
			var a = Gi.get(e);
			if (a) var n = a.get(null);
			else {
				(a = new Map()), Gi.set(e, a);
				for (
					var u = e.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						r = 0;
					r < u.length;
					r++
				) {
					var d = u[r];
					(d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
						(a.set(d.dataset.precedence, d), (n = d));
				}
				n && a.set(null, n);
			}
			(u = t.instance),
				(d = u.getAttribute("data-precedence")),
				(r = a.get(d) || n),
				r === n && a.set(null, u),
				a.set(d, u),
				this.count++,
				(n = Vi.bind(this)),
				u.addEventListener("load", n),
				u.addEventListener("error", n),
				r
					? r.parentNode.insertBefore(u, r.nextSibling)
					: ((e = e.nodeType === 9 ? e.head : e),
						e.insertBefore(u, e.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var su = {
		$$typeof: R,
		Provider: null,
		Consumer: null,
		_currentValue: _e,
		_currentValue2: _e,
		_threadCount: 0,
	};
	function my(e, t, a, n, u, r, d, y) {
		(this.tag = 1),
			(this.containerInfo = e),
			(this.finishedWork =
				this.pingCache =
				this.current =
				this.pendingChildren =
					null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Rr(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.finishedLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Rr(0)),
			(this.hiddenUpdates = Rr(null)),
			(this.identifierPrefix = n),
			(this.onUncaughtError = u),
			(this.onCaughtError = r),
			(this.onRecoverableError = d),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = y),
			(this.incompleteTransitions = new Map());
	}
	function jh(e, t, a, n, u, r, d, y, g, T, D, U) {
		return (
			(e = new my(e, t, a, d, y, g, T, U)),
			(t = 1),
			r === !0 && (t |= 24),
			(r = Dt(3, null, null, t)),
			(e.current = r),
			(r.stateNode = e),
			(t = ac()),
			t.refCount++,
			(e.pooledCache = t),
			t.refCount++,
			(r.memoizedState = { element: n, isDehydrated: a, cache: t }),
			kc(r),
			e
		);
	}
	function Uh(e) {
		return e ? ((e = Bn), e) : Bn;
	}
	function kh(e, t, a, n, u, r) {
		(u = Uh(u)),
			n.context === null ? (n.context = u) : (n.pendingContext = u),
			(n = ja(t)),
			(n.payload = { element: a }),
			(r = r === void 0 ? null : r),
			r !== null && (n.callback = r),
			(a = Ua(e, n, t)),
			a !== null && (ft(a, e, t), Ql(a, e, t));
	}
	function Hh(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var a = e.retryLane;
			e.retryLane = a !== 0 && a < t ? a : t;
		}
	}
	function As(e, t) {
		Hh(e, t), (e = e.alternate) && Hh(e, t);
	}
	function Zh(e) {
		if (e.tag === 13) {
			var t = Oa(e, 67108864);
			t !== null && ft(t, e, 67108864), As(e, 67108864);
		}
	}
	var Xi = !0;
	function vy(e, t, a, n) {
		var u = L.T;
		L.T = null;
		var r = K.p;
		try {
			(K.p = 2), Rs(e, t, a, n);
		} finally {
			(K.p = r), (L.T = u);
		}
	}
	function yy(e, t, a, n) {
		var u = L.T;
		L.T = null;
		var r = K.p;
		try {
			(K.p = 8), Rs(e, t, a, n);
		} finally {
			(K.p = r), (L.T = u);
		}
	}
	function Rs(e, t, a, n) {
		if (Xi) {
			var u = Os(n);
			if (u === null) ms(e, t, n, Qi, a), qh(e, n);
			else if (gy(u, e, t, a, n)) n.stopPropagation();
			else if ((qh(e, n), t & 4 && -1 < py.indexOf(e))) {
				for (; u !== null; ) {
					var r = wn(u);
					if (r !== null)
						switch (r.tag) {
							case 3:
								if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
									var d = Ia(r.pendingLanes);
									if (d !== 0) {
										var y = r;
										for (y.pendingLanes |= 2, y.entangledLanes |= 2; d; ) {
											var g = 1 << (31 - pt(d));
											(y.entanglements[1] |= g), (d &= ~g);
										}
										Wt(r), !(Ue & 6) && ((Ci = Xt() + 500), nu(0));
									}
								}
								break;
							case 13:
								(y = Oa(r, 2)), y !== null && ft(y, r, 2), Mi(), As(r, 2);
						}
					if (((r = Os(n)), r === null && ms(e, t, n, Qi, a), r === u)) break;
					u = r;
				}
				u !== null && n.stopPropagation();
			} else ms(e, t, n, null, a);
		}
	}
	function Os(e) {
		return (e = Dr(e)), ws(e);
	}
	var Qi = null;
	function ws(e) {
		if (((Qi = null), (e = en(e)), e !== null)) {
			var t = ue(e);
			if (t === null) e = null;
			else {
				var a = t.tag;
				if (a === 13) {
					if (((e = Ne(t)), e !== null)) return e;
					e = null;
				} else if (a === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return (Qi = e), null;
	}
	function Bh(e) {
		switch (e) {
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
				switch (a0()) {
					case ro:
						return 2;
					case co:
						return 8;
					case Lu:
					case n0:
						return 32;
					case so:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var Cs = !1,
		Ya = null,
		Va = null,
		Ga = null,
		ou = new Map(),
		fu = new Map(),
		Xa = [],
		py =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function qh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Ya = null;
				break;
			case "dragenter":
			case "dragleave":
				Va = null;
				break;
			case "mouseover":
			case "mouseout":
				Ga = null;
				break;
			case "pointerover":
			case "pointerout":
				ou.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				fu.delete(t.pointerId);
		}
	}
	function du(e, t, a, n, u, r) {
		return e === null || e.nativeEvent !== r
			? ((e = {
					blockedOn: t,
					domEventName: a,
					eventSystemFlags: n,
					nativeEvent: r,
					targetContainers: [u],
				}),
				t !== null && ((t = wn(t)), t !== null && Zh(t)),
				e)
			: ((e.eventSystemFlags |= n),
				(t = e.targetContainers),
				u !== null && t.indexOf(u) === -1 && t.push(u),
				e);
	}
	function gy(e, t, a, n, u) {
		switch (t) {
			case "focusin":
				return (Ya = du(Ya, e, t, a, n, u)), !0;
			case "dragenter":
				return (Va = du(Va, e, t, a, n, u)), !0;
			case "mouseover":
				return (Ga = du(Ga, e, t, a, n, u)), !0;
			case "pointerover":
				var r = u.pointerId;
				return ou.set(r, du(ou.get(r) || null, e, t, a, n, u)), !0;
			case "gotpointercapture":
				return (
					(r = u.pointerId), fu.set(r, du(fu.get(r) || null, e, t, a, n, u)), !0
				);
		}
		return !1;
	}
	function Lh(e) {
		var t = en(e.target);
		if (t !== null) {
			var a = ue(t);
			if (a !== null) {
				if (((t = a.tag), t === 13)) {
					if (((t = Ne(a)), t !== null)) {
						(e.blockedOn = t),
							d0(e.priority, function () {
								if (a.tag === 13) {
									var n = xt(),
										u = Oa(a, n);
									u !== null && ft(u, a, n), As(a, n);
								}
							});
						return;
					}
				} else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ki(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var a = Os(e.nativeEvent);
			if (a === null) {
				a = e.nativeEvent;
				var n = new a.constructor(a.type, a);
				(Mr = n), a.target.dispatchEvent(n), (Mr = null);
			} else return (t = wn(a)), t !== null && Zh(t), (e.blockedOn = a), !1;
			t.shift();
		}
		return !0;
	}
	function Yh(e, t, a) {
		Ki(e) && a.delete(t);
	}
	function by() {
		(Cs = !1),
			Ya !== null && Ki(Ya) && (Ya = null),
			Va !== null && Ki(Va) && (Va = null),
			Ga !== null && Ki(Ga) && (Ga = null),
			ou.forEach(Yh),
			fu.forEach(Yh);
	}
	function $i(e, t) {
		e.blockedOn === t &&
			((e.blockedOn = null),
			Cs ||
				((Cs = !0),
				i.unstable_scheduleCallback(i.unstable_NormalPriority, by)));
	}
	var Ji = null;
	function Vh(e) {
		Ji !== e &&
			((Ji = e),
			i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
				Ji === e && (Ji = null);
				for (var t = 0; t < e.length; t += 3) {
					var a = e[t],
						n = e[t + 1],
						u = e[t + 2];
					if (typeof n != "function") {
						if (ws(n || a) === null) continue;
						break;
					}
					var r = wn(a);
					r !== null &&
						(e.splice(t, 3),
						(t -= 3),
						gc(r, { pending: !0, data: u, method: a.method, action: n }, n, u));
				}
			}));
	}
	function hu(e) {
		function t(g) {
			return $i(g, e);
		}
		Ya !== null && $i(Ya, e),
			Va !== null && $i(Va, e),
			Ga !== null && $i(Ga, e),
			ou.forEach(t),
			fu.forEach(t);
		for (var a = 0; a < Xa.length; a++) {
			var n = Xa[a];
			n.blockedOn === e && (n.blockedOn = null);
		}
		for (; 0 < Xa.length && ((a = Xa[0]), a.blockedOn === null); )
			Lh(a), a.blockedOn === null && Xa.shift();
		if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
			for (n = 0; n < a.length; n += 3) {
				var u = a[n],
					r = a[n + 1],
					d = u[ht] || null;
				if (typeof r == "function") d || Vh(a);
				else if (d) {
					var y = null;
					if (r && r.hasAttribute("formAction")) {
						if (((u = r), (d = r[ht] || null))) y = d.formAction;
						else if (ws(u) !== null) continue;
					} else y = d.action;
					typeof y == "function" ? (a[n + 1] = y) : (a.splice(n, 3), (n -= 3)),
						Vh(a);
				}
			}
	}
	function Ns(e) {
		this._internalRoot = e;
	}
	(Wi.prototype.render = Ns.prototype.render =
		function (e) {
			var t = this._internalRoot;
			if (t === null) throw Error(s(409));
			var a = t.current,
				n = xt();
			kh(a, n, e, t, null, null);
		}),
		(Wi.prototype.unmount = Ns.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (e !== null) {
					this._internalRoot = null;
					var t = e.containerInfo;
					e.tag === 0 && al(),
						kh(e.current, 2, null, e, null, null),
						Mi(),
						(t[On] = null);
				}
			});
	function Wi(e) {
		this._internalRoot = e;
	}
	Wi.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = yo();
			e = { blockedOn: null, target: e, priority: t };
			for (var a = 0; a < Xa.length && t !== 0 && t < Xa[a].priority; a++);
			Xa.splice(a, 0, e), a === 0 && Lh(e);
		}
	};
	var Gh = l.version;
	if (Gh !== "19.0.0") throw Error(s(527, Gh, "19.0.0"));
	K.findDOMNode = function (e) {
		var t = e._reactInternals;
		if (t === void 0)
			throw typeof e.render == "function"
				? Error(s(188))
				: ((e = Object.keys(e).join(",")), Error(s(268, e)));
		return (
			(e = H(t)),
			(e = e !== null ? ne(e) : null),
			(e = e === null ? null : e.stateNode),
			e
		);
	};
	var _y = {
		bundleType: 0,
		version: "19.0.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: L,
		findFiberByHostInstance: en,
		reconcilerVersion: "19.0.0",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Fi.isDisabled && Fi.supportsFiber)
			try {
				(gl = Fi.inject(_y)), (yt = Fi);
			} catch {}
	}
	return (
		(vu.createRoot = function (e, t) {
			if (!o(e)) throw Error(s(299));
			var a = !1,
				n = "",
				u = rd,
				r = cd,
				d = sd,
				y = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (a = !0),
					t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
					t.onCaughtError !== void 0 && (r = t.onCaughtError),
					t.onRecoverableError !== void 0 && (d = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(y = t.unstable_transitionCallbacks)),
				(t = jh(e, 1, !1, null, null, a, n, u, r, d, y, null)),
				(e[On] = t.current),
				hs(e.nodeType === 8 ? e.parentNode : e),
				new Ns(t)
			);
		}),
		(vu.hydrateRoot = function (e, t, a) {
			if (!o(e)) throw Error(s(299));
			var n = !1,
				u = "",
				r = rd,
				d = cd,
				y = sd,
				g = null,
				T = null;
			return (
				a != null &&
					(a.unstable_strictMode === !0 && (n = !0),
					a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
					a.onUncaughtError !== void 0 && (r = a.onUncaughtError),
					a.onCaughtError !== void 0 && (d = a.onCaughtError),
					a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
					a.unstable_transitionCallbacks !== void 0 &&
						(g = a.unstable_transitionCallbacks),
					a.formState !== void 0 && (T = a.formState)),
				(t = jh(e, 1, !0, t, a ?? null, n, u, r, d, y, g, T)),
				(t.context = Uh(null)),
				(a = t.current),
				(n = xt()),
				(u = ja(n)),
				(u.callback = null),
				Ua(a, u, n),
				(t.current.lanes = n),
				_l(t, n),
				Wt(t),
				(e[On] = t.current),
				hs(e),
				new Wi(t)
			);
		}),
		(vu.version = "19.0.0"),
		vu
	);
}
var em;
function zy() {
	if (em) return Ds.exports;
	em = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (l) {
				console.error(l);
			}
	}
	return i(), (Ds.exports = Ny()), Ds.exports;
}
var My = zy();
const Dy = Em(My);
var yu = {},
	tm;
function jy() {
	if (tm) return yu;
	(tm = 1),
		Object.defineProperty(yu, "__esModule", { value: !0 }),
		(yu.parse = p),
		(yu.serialize = m);
	const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
		l = /^[\u0021-\u003A\u003C-\u007E]*$/,
		c =
			/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
		s = /^[\u0020-\u003A\u003D-\u007E]*$/,
		o = Object.prototype.toString,
		f = (() => {
			const S = function () {};
			return (S.prototype = Object.create(null)), S;
		})();
	function p(S, R) {
		const N = new f(),
			G = S.length;
		if (G < 2) return N;
		const B = (R == null ? void 0 : R.decode) || b;
		let Z = 0;
		do {
			const J = S.indexOf("=", Z);
			if (J === -1) break;
			const Q = S.indexOf(";", Z),
				P = Q === -1 ? G : Q;
			if (J > P) {
				Z = S.lastIndexOf(";", J - 1) + 1;
				continue;
			}
			const V = v(S, Z, J),
				ye = h(S, J, V),
				pe = S.slice(V, ye);
			if (N[pe] === void 0) {
				let ge = v(S, J + 1, P),
					L = h(S, P, ge);
				const ee = B(S.slice(ge, L));
				N[pe] = ee;
			}
			Z = P + 1;
		} while (Z < G);
		return N;
	}
	function v(S, R, N) {
		do {
			const G = S.charCodeAt(R);
			if (G !== 32 && G !== 9) return R;
		} while (++R < N);
		return N;
	}
	function h(S, R, N) {
		for (; R > N; ) {
			const G = S.charCodeAt(--R);
			if (G !== 32 && G !== 9) return R + 1;
		}
		return N;
	}
	function m(S, R, N) {
		const G = (N == null ? void 0 : N.encode) || encodeURIComponent;
		if (!i.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
		const B = G(R);
		if (!l.test(B)) throw new TypeError(`argument val is invalid: ${R}`);
		let Z = S + "=" + B;
		if (!N) return Z;
		if (N.maxAge !== void 0) {
			if (!Number.isInteger(N.maxAge))
				throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);
			Z += "; Max-Age=" + N.maxAge;
		}
		if (N.domain) {
			if (!c.test(N.domain))
				throw new TypeError(`option domain is invalid: ${N.domain}`);
			Z += "; Domain=" + N.domain;
		}
		if (N.path) {
			if (!s.test(N.path))
				throw new TypeError(`option path is invalid: ${N.path}`);
			Z += "; Path=" + N.path;
		}
		if (N.expires) {
			if (!_(N.expires) || !Number.isFinite(N.expires.valueOf()))
				throw new TypeError(`option expires is invalid: ${N.expires}`);
			Z += "; Expires=" + N.expires.toUTCString();
		}
		if (
			(N.httpOnly && (Z += "; HttpOnly"),
			N.secure && (Z += "; Secure"),
			N.partitioned && (Z += "; Partitioned"),
			N.priority)
		)
			switch (
				typeof N.priority == "string" ? N.priority.toLowerCase() : void 0
			) {
				case "low":
					Z += "; Priority=Low";
					break;
				case "medium":
					Z += "; Priority=Medium";
					break;
				case "high":
					Z += "; Priority=High";
					break;
				default:
					throw new TypeError(`option priority is invalid: ${N.priority}`);
			}
		if (N.sameSite)
			switch (
				typeof N.sameSite == "string" ? N.sameSite.toLowerCase() : N.sameSite
			) {
				case !0:
				case "strict":
					Z += "; SameSite=Strict";
					break;
				case "lax":
					Z += "; SameSite=Lax";
					break;
				case "none":
					Z += "; SameSite=None";
					break;
				default:
					throw new TypeError(`option sameSite is invalid: ${N.sameSite}`);
			}
		return Z;
	}
	function b(S) {
		if (S.indexOf("%") === -1) return S;
		try {
			return decodeURIComponent(S);
		} catch {
			return S;
		}
	}
	function _(S) {
		return o.call(S) === "[object Date]";
	}
	return yu;
}
jy();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var am = "popstate";
function Uy(i = {}) {
	function l(s, o) {
		let { pathname: f, search: p, hash: v } = s.location;
		return Gs(
			"",
			{ pathname: f, search: p, hash: v },
			(o.state && o.state.usr) || null,
			(o.state && o.state.key) || "default",
		);
	}
	function c(s, o) {
		return typeof o == "string" ? o : _u(o);
	}
	return Hy(l, c, null, i);
}
function He(i, l) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(l);
}
function Yt(i, l) {
	if (!i) {
		typeof console < "u" && console.warn(l);
		try {
			throw new Error(l);
		} catch {}
	}
}
function ky() {
	return Math.random().toString(36).substring(2, 10);
}
function nm(i, l) {
	return { usr: i.state, key: i.key, idx: l };
}
function Gs(i, l, c = null, s) {
	return {
		pathname: typeof i == "string" ? i : i.pathname,
		search: "",
		hash: "",
		...(typeof l == "string" ? vl(l) : l),
		state: c,
		key: (l && l.key) || s || ky(),
	};
}
function _u({ pathname: i = "/", search: l = "", hash: c = "" }) {
	return (
		l && l !== "?" && (i += l.charAt(0) === "?" ? l : "?" + l),
		c && c !== "#" && (i += c.charAt(0) === "#" ? c : "#" + c),
		i
	);
}
function vl(i) {
	let l = {};
	if (i) {
		let c = i.indexOf("#");
		c >= 0 && ((l.hash = i.substring(c)), (i = i.substring(0, c)));
		let s = i.indexOf("?");
		s >= 0 && ((l.search = i.substring(s)), (i = i.substring(0, s))),
			i && (l.pathname = i);
	}
	return l;
}
function Hy(i, l, c, s = {}) {
	let { window: o = document.defaultView, v5Compat: f = !1 } = s,
		p = o.history,
		v = "POP",
		h = null,
		m = b();
	m == null && ((m = 0), p.replaceState({ ...p.state, idx: m }, ""));
	function b() {
		return (p.state || { idx: null }).idx;
	}
	function _() {
		v = "POP";
		let B = b(),
			Z = B == null ? null : B - m;
		(m = B), h && h({ action: v, location: G.location, delta: Z });
	}
	function S(B, Z) {
		v = "PUSH";
		let J = Gs(G.location, B, Z);
		m = b() + 1;
		let Q = nm(J, m),
			P = G.createHref(J);
		try {
			p.pushState(Q, "", P);
		} catch (V) {
			if (V instanceof DOMException && V.name === "DataCloneError") throw V;
			o.location.assign(P);
		}
		f && h && h({ action: v, location: G.location, delta: 1 });
	}
	function R(B, Z) {
		v = "REPLACE";
		let J = Gs(G.location, B, Z);
		m = b();
		let Q = nm(J, m),
			P = G.createHref(J);
		p.replaceState(Q, "", P),
			f && h && h({ action: v, location: G.location, delta: 0 });
	}
	function N(B) {
		let Z = o.location.origin !== "null" ? o.location.origin : o.location.href,
			J = typeof B == "string" ? B : _u(B);
		return (
			(J = J.replace(/ $/, "%20")),
			He(
				Z,
				`No window.location.(origin|href) available to create URL for href: ${J}`,
			),
			new URL(J, Z)
		);
	}
	let G = {
		get action() {
			return v;
		},
		get location() {
			return i(o, p);
		},
		listen(B) {
			if (h) throw new Error("A history only accepts one active listener");
			return (
				o.addEventListener(am, _),
				(h = B),
				() => {
					o.removeEventListener(am, _), (h = null);
				}
			);
		},
		createHref(B) {
			return l(o, B);
		},
		createURL: N,
		encodeLocation(B) {
			let Z = N(B);
			return { pathname: Z.pathname, search: Z.search, hash: Z.hash };
		},
		push: S,
		replace: R,
		go(B) {
			return p.go(B);
		},
	};
	return G;
}
function Tm(i, l, c = "/") {
	return Zy(i, l, c, !1);
}
function Zy(i, l, c, s) {
	let o = typeof l == "string" ? vl(l) : l,
		f = Ka(o.pathname || "/", c);
	if (f == null) return null;
	let p = Am(i);
	By(p);
	let v = null;
	for (let h = 0; v == null && h < p.length; ++h) {
		let m = Wy(f);
		v = $y(p[h], m, s);
	}
	return v;
}
function Am(i, l = [], c = [], s = "") {
	let o = (f, p, v) => {
		let h = {
			relativePath: v === void 0 ? f.path || "" : v,
			caseSensitive: f.caseSensitive === !0,
			childrenIndex: p,
			route: f,
		};
		h.relativePath.startsWith("/") &&
			(He(
				h.relativePath.startsWith(s),
				`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
			),
			(h.relativePath = h.relativePath.slice(s.length)));
		let m = Sa([s, h.relativePath]),
			b = c.concat(h);
		f.children &&
			f.children.length > 0 &&
			(He(
				f.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
			),
			Am(f.children, l, b, m)),
			!(f.path == null && !f.index) &&
				l.push({ path: m, score: Qy(m, f.index), routesMeta: b });
	};
	return (
		i.forEach((f, p) => {
			var v;
			if (f.path === "" || !((v = f.path) != null && v.includes("?"))) o(f, p);
			else for (let h of Rm(f.path)) o(f, p, h);
		}),
		l
	);
}
function Rm(i) {
	let l = i.split("/");
	if (l.length === 0) return [];
	let [c, ...s] = l,
		o = c.endsWith("?"),
		f = c.replace(/\?$/, "");
	if (s.length === 0) return o ? [f, ""] : [f];
	let p = Rm(s.join("/")),
		v = [];
	return (
		v.push(...p.map((h) => (h === "" ? f : [f, h].join("/")))),
		o && v.push(...p),
		v.map((h) => (i.startsWith("/") && h === "" ? "/" : h))
	);
}
function By(i) {
	i.sort((l, c) =>
		l.score !== c.score
			? c.score - l.score
			: Ky(
					l.routesMeta.map((s) => s.childrenIndex),
					c.routesMeta.map((s) => s.childrenIndex),
				),
	);
}
var qy = /^:[\w-]+$/,
	Ly = 3,
	Yy = 2,
	Vy = 1,
	Gy = 10,
	Xy = -2,
	lm = (i) => i === "*";
function Qy(i, l) {
	let c = i.split("/"),
		s = c.length;
	return (
		c.some(lm) && (s += Xy),
		l && (s += Yy),
		c
			.filter((o) => !lm(o))
			.reduce((o, f) => o + (qy.test(f) ? Ly : f === "" ? Vy : Gy), s)
	);
}
function Ky(i, l) {
	return i.length === l.length && i.slice(0, -1).every((s, o) => s === l[o])
		? i[i.length - 1] - l[l.length - 1]
		: 0;
}
function $y(i, l, c = !1) {
	let { routesMeta: s } = i,
		o = {},
		f = "/",
		p = [];
	for (let v = 0; v < s.length; ++v) {
		let h = s[v],
			m = v === s.length - 1,
			b = f === "/" ? l : l.slice(f.length) || "/",
			_ = sr(
				{ path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
				b,
			),
			S = h.route;
		if (
			(!_ &&
				m &&
				c &&
				!s[s.length - 1].route.index &&
				(_ = sr(
					{ path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
					b,
				)),
			!_)
		)
			return null;
		Object.assign(o, _.params),
			p.push({
				params: o,
				pathname: Sa([f, _.pathname]),
				pathnameBase: ep(Sa([f, _.pathnameBase])),
				route: S,
			}),
			_.pathnameBase !== "/" && (f = Sa([f, _.pathnameBase]));
	}
	return p;
}
function sr(i, l) {
	typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
	let [c, s] = Jy(i.path, i.caseSensitive, i.end),
		o = l.match(c);
	if (!o) return null;
	let f = o[0],
		p = f.replace(/(.)\/+$/, "$1"),
		v = o.slice(1);
	return {
		params: s.reduce((m, { paramName: b, isOptional: _ }, S) => {
			if (b === "*") {
				let N = v[S] || "";
				p = f.slice(0, f.length - N.length).replace(/(.)\/+$/, "$1");
			}
			const R = v[S];
			return (
				_ && !R ? (m[b] = void 0) : (m[b] = (R || "").replace(/%2F/g, "/")), m
			);
		}, {}),
		pathname: f,
		pathnameBase: p,
		pattern: i,
	};
}
function Jy(i, l = !1, c = !0) {
	Yt(
		i === "*" || !i.endsWith("*") || i.endsWith("/*"),
		`Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`,
	);
	let s = [],
		o =
			"^" +
			i
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(p, v, h) => (
						s.push({ paramName: v, isOptional: h != null }),
						h ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		i.endsWith("*")
			? (s.push({ paramName: "*" }),
				(o += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: c
				? (o += "\\/*$")
				: i !== "" && i !== "/" && (o += "(?:(?=\\/|$))"),
		[new RegExp(o, l ? void 0 : "i"), s]
	);
}
function Wy(i) {
	try {
		return i
			.split("/")
			.map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
			.join("/");
	} catch (l) {
		return (
			Yt(
				!1,
				`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`,
			),
			i
		);
	}
}
function Ka(i, l) {
	if (l === "/") return i;
	if (!i.toLowerCase().startsWith(l.toLowerCase())) return null;
	let c = l.endsWith("/") ? l.length - 1 : l.length,
		s = i.charAt(c);
	return s && s !== "/" ? null : i.slice(c) || "/";
}
function Fy(i, l = "/") {
	let {
		pathname: c,
		search: s = "",
		hash: o = "",
	} = typeof i == "string" ? vl(i) : i;
	return {
		pathname: c ? (c.startsWith("/") ? c : Py(c, l)) : l,
		search: tp(s),
		hash: ap(o),
	};
}
function Py(i, l) {
	let c = l.replace(/\/+$/, "").split("/");
	return (
		i.split("/").forEach((o) => {
			o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
		}),
		c.length > 1 ? c.join("/") : "/"
	);
}
function Hs(i, l, c, s) {
	return `Cannot include a '${i}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Iy(i) {
	return i.filter(
		(l, c) => c === 0 || (l.route.path && l.route.path.length > 0),
	);
}
function Om(i) {
	let l = Iy(i);
	return l.map((c, s) => (s === l.length - 1 ? c.pathname : c.pathnameBase));
}
function wm(i, l, c, s = !1) {
	let o;
	typeof i == "string"
		? (o = vl(i))
		: ((o = { ...i }),
			He(
				!o.pathname || !o.pathname.includes("?"),
				Hs("?", "pathname", "search", o),
			),
			He(
				!o.pathname || !o.pathname.includes("#"),
				Hs("#", "pathname", "hash", o),
			),
			He(!o.search || !o.search.includes("#"), Hs("#", "search", "hash", o)));
	let f = i === "" || o.pathname === "",
		p = f ? "/" : o.pathname,
		v;
	if (p == null) v = c;
	else {
		let _ = l.length - 1;
		if (!s && p.startsWith("..")) {
			let S = p.split("/");
			for (; S[0] === ".."; ) S.shift(), (_ -= 1);
			o.pathname = S.join("/");
		}
		v = _ >= 0 ? l[_] : "/";
	}
	let h = Fy(o, v),
		m = p && p !== "/" && p.endsWith("/"),
		b = (f || p === ".") && c.endsWith("/");
	return !h.pathname.endsWith("/") && (m || b) && (h.pathname += "/"), h;
}
var Sa = (i) => i.join("/").replace(/\/\/+/g, "/"),
	ep = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
	tp = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
	ap = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function np(i) {
	return (
		i != null &&
		typeof i.status == "number" &&
		typeof i.statusText == "string" &&
		typeof i.internal == "boolean" &&
		"data" in i
	);
}
var Cm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Cm);
var lp = ["GET", ...Cm];
new Set(lp);
var yl = C.createContext(null);
yl.displayName = "DataRouter";
var gr = C.createContext(null);
gr.displayName = "DataRouterState";
var Nm = C.createContext({ isTransitioning: !1 });
Nm.displayName = "ViewTransition";
var up = C.createContext(new Map());
up.displayName = "Fetchers";
var ip = C.createContext(null);
ip.displayName = "Await";
var ea = C.createContext(null);
ea.displayName = "Navigation";
var ju = C.createContext(null);
ju.displayName = "Location";
var ta = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ta.displayName = "Route";
var Is = C.createContext(null);
Is.displayName = "RouteError";
function rp(i, { relative: l } = {}) {
	He(
		Uu(),
		"useHref() may be used only in the context of a <Router> component.",
	);
	let { basename: c, navigator: s } = C.useContext(ea),
		{ hash: o, pathname: f, search: p } = ku(i, { relative: l }),
		v = f;
	return (
		c !== "/" && (v = f === "/" ? c : Sa([c, f])),
		s.createHref({ pathname: v, search: p, hash: o })
	);
}
function Uu() {
	return C.useContext(ju) != null;
}
function Pa() {
	return (
		He(
			Uu(),
			"useLocation() may be used only in the context of a <Router> component.",
		),
		C.useContext(ju).location
	);
}
var zm =
	"You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Mm(i) {
	C.useContext(ea).static || C.useLayoutEffect(i);
}
function Dm() {
	let { isDataRoute: i } = C.useContext(ta);
	return i ? _p() : cp();
}
function cp() {
	He(
		Uu(),
		"useNavigate() may be used only in the context of a <Router> component.",
	);
	let i = C.useContext(yl),
		{ basename: l, navigator: c } = C.useContext(ea),
		{ matches: s } = C.useContext(ta),
		{ pathname: o } = Pa(),
		f = JSON.stringify(Om(s)),
		p = C.useRef(!1);
	return (
		Mm(() => {
			p.current = !0;
		}),
		C.useCallback(
			(h, m = {}) => {
				if ((Yt(p.current, zm), !p.current)) return;
				if (typeof h == "number") {
					c.go(h);
					return;
				}
				let b = wm(h, JSON.parse(f), o, m.relative === "path");
				i == null &&
					l !== "/" &&
					(b.pathname = b.pathname === "/" ? l : Sa([l, b.pathname])),
					(m.replace ? c.replace : c.push)(b, m.state, m);
			},
			[l, c, f, o, i],
		)
	);
}
C.createContext(null);
function _b() {
	let { matches: i } = C.useContext(ta),
		l = i[i.length - 1];
	return l ? l.params : {};
}
function ku(i, { relative: l } = {}) {
	let { matches: c } = C.useContext(ta),
		{ pathname: s } = Pa(),
		o = JSON.stringify(Om(c));
	return C.useMemo(() => wm(i, JSON.parse(o), s, l === "path"), [i, o, s, l]);
}
function sp(i, l) {
	return jm(i, l);
}
function jm(i, l, c, s) {
	var J;
	He(
		Uu(),
		"useRoutes() may be used only in the context of a <Router> component.",
	);
	let { navigator: o, static: f } = C.useContext(ea),
		{ matches: p } = C.useContext(ta),
		v = p[p.length - 1],
		h = v ? v.params : {},
		m = v ? v.pathname : "/",
		b = v ? v.pathnameBase : "/",
		_ = v && v.route;
	{
		let Q = (_ && _.path) || "";
		Um(
			m,
			!_ || Q.endsWith("*") || Q.endsWith("*?"),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`,
		);
	}
	let S = Pa(),
		R;
	if (l) {
		let Q = typeof l == "string" ? vl(l) : l;
		He(
			b === "/" || ((J = Q.pathname) == null ? void 0 : J.startsWith(b)),
			`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Q.pathname}" was given in the \`location\` prop.`,
		),
			(R = Q);
	} else R = S;
	let N = R.pathname || "/",
		G = N;
	if (b !== "/") {
		let Q = b.replace(/^\//, "").split("/");
		G = "/" + N.replace(/^\//, "").split("/").slice(Q.length).join("/");
	}
	let B =
		!f && c && c.matches && c.matches.length > 0
			? c.matches
			: Tm(i, { pathname: G });
	Yt(
		_ || B != null,
		`No routes matched location "${R.pathname}${R.search}${R.hash}" `,
	),
		Yt(
			B == null ||
				B[B.length - 1].route.element !== void 0 ||
				B[B.length - 1].route.Component !== void 0 ||
				B[B.length - 1].route.lazy !== void 0,
			`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
		);
	let Z = mp(
		B &&
			B.map((Q) =>
				Object.assign({}, Q, {
					params: Object.assign({}, h, Q.params),
					pathname: Sa([
						b,
						o.encodeLocation
							? o.encodeLocation(Q.pathname).pathname
							: Q.pathname,
					]),
					pathnameBase:
						Q.pathnameBase === "/"
							? b
							: Sa([
									b,
									o.encodeLocation
										? o.encodeLocation(Q.pathnameBase).pathname
										: Q.pathnameBase,
								]),
				}),
			),
		p,
		c,
		s,
	);
	return l && Z
		? C.createElement(
				ju.Provider,
				{
					value: {
						location: {
							pathname: "/",
							search: "",
							hash: "",
							state: null,
							key: "default",
							...R,
						},
						navigationType: "POP",
					},
				},
				Z,
			)
		: Z;
}
function op() {
	let i = bp(),
		l = np(i)
			? `${i.status} ${i.statusText}`
			: i instanceof Error
				? i.message
				: JSON.stringify(i),
		c = i instanceof Error ? i.stack : null,
		s = "rgba(200,200,200, 0.5)",
		o = { padding: "0.5rem", backgroundColor: s },
		f = { padding: "2px 4px", backgroundColor: s },
		p = null;
	return (
		console.error("Error handled by React Router default ErrorBoundary:", i),
		(p = C.createElement(
			C.Fragment,
			null,
			C.createElement("p", null, "💿 Hey developer 👋"),
			C.createElement(
				"p",
				null,
				"You can provide a way better UX than this when your app throws errors by providing your own ",
				C.createElement("code", { style: f }, "ErrorBoundary"),
				" or",
				" ",
				C.createElement("code", { style: f }, "errorElement"),
				" prop on your route.",
			),
		)),
		C.createElement(
			C.Fragment,
			null,
			C.createElement("h2", null, "Unexpected Application Error!"),
			C.createElement("h3", { style: { fontStyle: "italic" } }, l),
			c ? C.createElement("pre", { style: o }, c) : null,
			p,
		)
	);
}
var fp = C.createElement(op, null),
	dp = class extends C.Component {
		constructor(i) {
			super(i),
				(this.state = {
					location: i.location,
					revalidation: i.revalidation,
					error: i.error,
				});
		}
		static getDerivedStateFromError(i) {
			return { error: i };
		}
		static getDerivedStateFromProps(i, l) {
			return l.location !== i.location ||
				(l.revalidation !== "idle" && i.revalidation === "idle")
				? { error: i.error, location: i.location, revalidation: i.revalidation }
				: {
						error: i.error !== void 0 ? i.error : l.error,
						location: l.location,
						revalidation: i.revalidation || l.revalidation,
					};
		}
		componentDidCatch(i, l) {
			console.error(
				"React Router caught the following error during render",
				i,
				l,
			);
		}
		render() {
			return this.state.error !== void 0
				? C.createElement(
						ta.Provider,
						{ value: this.props.routeContext },
						C.createElement(Is.Provider, {
							value: this.state.error,
							children: this.props.component,
						}),
					)
				: this.props.children;
		}
	};
function hp({ routeContext: i, match: l, children: c }) {
	let s = C.useContext(yl);
	return (
		s &&
			s.static &&
			s.staticContext &&
			(l.route.errorElement || l.route.ErrorBoundary) &&
			(s.staticContext._deepestRenderedBoundaryId = l.route.id),
		C.createElement(ta.Provider, { value: i }, c)
	);
}
function mp(i, l = [], c = null, s = null) {
	if (i == null) {
		if (!c) return null;
		if (c.errors) i = c.matches;
		else if (l.length === 0 && !c.initialized && c.matches.length > 0)
			i = c.matches;
		else return null;
	}
	let o = i,
		f = c == null ? void 0 : c.errors;
	if (f != null) {
		let h = o.findIndex(
			(m) => m.route.id && (f == null ? void 0 : f[m.route.id]) !== void 0,
		);
		He(
			h >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`,
		),
			(o = o.slice(0, Math.min(o.length, h + 1)));
	}
	let p = !1,
		v = -1;
	if (c)
		for (let h = 0; h < o.length; h++) {
			let m = o[h];
			if (
				((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (v = h),
				m.route.id)
			) {
				let { loaderData: b, errors: _ } = c,
					S =
						m.route.loader &&
						!b.hasOwnProperty(m.route.id) &&
						(!_ || _[m.route.id] === void 0);
				if (m.route.lazy || S) {
					(p = !0), v >= 0 ? (o = o.slice(0, v + 1)) : (o = [o[0]]);
					break;
				}
			}
		}
	return o.reduceRight((h, m, b) => {
		let _,
			S = !1,
			R = null,
			N = null;
		c &&
			((_ = f && m.route.id ? f[m.route.id] : void 0),
			(R = m.route.errorElement || fp),
			p &&
				(v < 0 && b === 0
					? (Um(
							"route-fallback",
							!1,
							"No `HydrateFallback` element provided to render during initial hydration",
						),
						(S = !0),
						(N = null))
					: v === b &&
						((S = !0), (N = m.route.hydrateFallbackElement || null))));
		let G = l.concat(o.slice(0, b + 1)),
			B = () => {
				let Z;
				return (
					_
						? (Z = R)
						: S
							? (Z = N)
							: m.route.Component
								? (Z = C.createElement(m.route.Component, null))
								: m.route.element
									? (Z = m.route.element)
									: (Z = h),
					C.createElement(hp, {
						match: m,
						routeContext: { outlet: h, matches: G, isDataRoute: c != null },
						children: Z,
					})
				);
			};
		return c && (m.route.ErrorBoundary || m.route.errorElement || b === 0)
			? C.createElement(dp, {
					location: c.location,
					revalidation: c.revalidation,
					component: R,
					error: _,
					children: B(),
					routeContext: { outlet: null, matches: G, isDataRoute: !0 },
				})
			: B();
	}, null);
}
function eo(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function vp(i) {
	let l = C.useContext(yl);
	return He(l, eo(i)), l;
}
function yp(i) {
	let l = C.useContext(gr);
	return He(l, eo(i)), l;
}
function pp(i) {
	let l = C.useContext(ta);
	return He(l, eo(i)), l;
}
function to(i) {
	let l = pp(i),
		c = l.matches[l.matches.length - 1];
	return (
		He(
			c.route.id,
			`${i} can only be used on routes that contain a unique "id"`,
		),
		c.route.id
	);
}
function gp() {
	return to("useRouteId");
}
function bp() {
	var s;
	let i = C.useContext(Is),
		l = yp("useRouteError"),
		c = to("useRouteError");
	return i !== void 0 ? i : (s = l.errors) == null ? void 0 : s[c];
}
function _p() {
	let { router: i } = vp("useNavigate"),
		l = to("useNavigate"),
		c = C.useRef(!1);
	return (
		Mm(() => {
			c.current = !0;
		}),
		C.useCallback(
			async (o, f = {}) => {
				Yt(c.current, zm),
					c.current &&
						(typeof o == "number"
							? i.navigate(o)
							: await i.navigate(o, { fromRouteId: l, ...f }));
			},
			[i, l],
		)
	);
}
var um = {};
function Um(i, l, c) {
	!l && !um[i] && ((um[i] = !0), Yt(!1, c));
}
C.memo(Sp);
function Sp({ routes: i, future: l, state: c }) {
	return jm(i, void 0, c, l);
}
function cl(i) {
	He(
		!1,
		"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
	);
}
function xp({
	basename: i = "/",
	children: l = null,
	location: c,
	navigationType: s = "POP",
	navigator: o,
	static: f = !1,
}) {
	He(
		!Uu(),
		"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
	);
	let p = i.replace(/^\/*/, "/"),
		v = C.useMemo(
			() => ({ basename: p, navigator: o, static: f, future: {} }),
			[p, o, f],
		);
	typeof c == "string" && (c = vl(c));
	let {
			pathname: h = "/",
			search: m = "",
			hash: b = "",
			state: _ = null,
			key: S = "default",
		} = c,
		R = C.useMemo(() => {
			let N = Ka(h, p);
			return N == null
				? null
				: {
						location: { pathname: N, search: m, hash: b, state: _, key: S },
						navigationType: s,
					};
		}, [p, h, m, b, _, S, s]);
	return (
		Yt(
			R != null,
			`<Router basename="${p}"> is not able to match the URL "${h}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`,
		),
		R == null
			? null
			: C.createElement(
					ea.Provider,
					{ value: v },
					C.createElement(ju.Provider, { children: l, value: R }),
				)
	);
}
function Ep({ children: i, location: l }) {
	return sp(Xs(i), l);
}
function Xs(i, l = []) {
	let c = [];
	return (
		C.Children.forEach(i, (s, o) => {
			if (!C.isValidElement(s)) return;
			let f = [...l, o];
			if (s.type === C.Fragment) {
				c.push.apply(c, Xs(s.props.children, f));
				return;
			}
			He(
				s.type === cl,
				`[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
			),
				He(
					!s.props.index || !s.props.children,
					"An index route cannot have child routes.",
				);
			let p = {
				id: s.props.id || f.join("-"),
				caseSensitive: s.props.caseSensitive,
				element: s.props.element,
				Component: s.props.Component,
				index: s.props.index,
				path: s.props.path,
				loader: s.props.loader,
				action: s.props.action,
				hydrateFallbackElement: s.props.hydrateFallbackElement,
				HydrateFallback: s.props.HydrateFallback,
				errorElement: s.props.errorElement,
				ErrorBoundary: s.props.ErrorBoundary,
				hasErrorBoundary:
					s.props.hasErrorBoundary === !0 ||
					s.props.ErrorBoundary != null ||
					s.props.errorElement != null,
				shouldRevalidate: s.props.shouldRevalidate,
				handle: s.props.handle,
				lazy: s.props.lazy,
			};
			s.props.children && (p.children = Xs(s.props.children, f)), c.push(p);
		}),
		c
	);
}
var Ii = "get",
	er = "application/x-www-form-urlencoded";
function br(i) {
	return i != null && typeof i.tagName == "string";
}
function Tp(i) {
	return br(i) && i.tagName.toLowerCase() === "button";
}
function Ap(i) {
	return br(i) && i.tagName.toLowerCase() === "form";
}
function Rp(i) {
	return br(i) && i.tagName.toLowerCase() === "input";
}
function Op(i) {
	return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function wp(i, l) {
	return i.button === 0 && (!l || l === "_self") && !Op(i);
}
function Qs(i = "") {
	return new URLSearchParams(
		typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams
			? i
			: Object.keys(i).reduce((l, c) => {
					let s = i[c];
					return l.concat(Array.isArray(s) ? s.map((o) => [c, o]) : [[c, s]]);
				}, []),
	);
}
function Cp(i, l) {
	let c = Qs(i);
	return (
		l &&
			l.forEach((s, o) => {
				c.has(o) ||
					l.getAll(o).forEach((f) => {
						c.append(o, f);
					});
			}),
		c
	);
}
var Pi = null;
function Np() {
	if (Pi === null)
		try {
			new FormData(document.createElement("form"), 0), (Pi = !1);
		} catch {
			Pi = !0;
		}
	return Pi;
}
var zp = new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain",
]);
function Zs(i) {
	return i != null && !zp.has(i)
		? (Yt(
				!1,
				`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${er}"`,
			),
			null)
		: i;
}
function Mp(i, l) {
	let c, s, o, f, p;
	if (Ap(i)) {
		let v = i.getAttribute("action");
		(s = v ? Ka(v, l) : null),
			(c = i.getAttribute("method") || Ii),
			(o = Zs(i.getAttribute("enctype")) || er),
			(f = new FormData(i));
	} else if (Tp(i) || (Rp(i) && (i.type === "submit" || i.type === "image"))) {
		let v = i.form;
		if (v == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>',
			);
		let h = i.getAttribute("formaction") || v.getAttribute("action");
		if (
			((s = h ? Ka(h, l) : null),
			(c = i.getAttribute("formmethod") || v.getAttribute("method") || Ii),
			(o =
				Zs(i.getAttribute("formenctype")) ||
				Zs(v.getAttribute("enctype")) ||
				er),
			(f = new FormData(v, i)),
			!Np())
		) {
			let { name: m, type: b, value: _ } = i;
			if (b === "image") {
				let S = m ? `${m}.` : "";
				f.append(`${S}x`, "0"), f.append(`${S}y`, "0");
			} else m && f.append(m, _);
		}
	} else {
		if (br(i))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
			);
		(c = Ii), (s = null), (o = er), (p = i);
	}
	return (
		f && o === "text/plain" && ((p = f), (f = void 0)),
		{ action: s, method: c.toLowerCase(), encType: o, formData: f, body: p }
	);
}
function ao(i, l) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(l);
}
async function Dp(i, l) {
	if (i.id in l) return l[i.id];
	try {
		let c = await import(i.module);
		return (l[i.id] = c), c;
	} catch (c) {
		return (
			console.error(
				`Error loading route module \`${i.module}\`, reloading page...`,
			),
			console.error(c),
			window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		);
	}
}
function jp(i) {
	return i == null
		? !1
		: i.href == null
			? i.rel === "preload" &&
				typeof i.imageSrcSet == "string" &&
				typeof i.imageSizes == "string"
			: typeof i.rel == "string" && typeof i.href == "string";
}
async function Up(i, l, c) {
	let s = await Promise.all(
		i.map(async (o) => {
			let f = l.routes[o.route.id];
			if (f) {
				let p = await Dp(f, c);
				return p.links ? p.links() : [];
			}
			return [];
		}),
	);
	return Bp(
		s
			.flat(1)
			.filter(jp)
			.filter((o) => o.rel === "stylesheet" || o.rel === "preload")
			.map((o) =>
				o.rel === "stylesheet"
					? { ...o, rel: "prefetch", as: "style" }
					: { ...o, rel: "prefetch" },
			),
	);
}
function im(i, l, c, s, o, f) {
	let p = (h, m) => (c[m] ? h.route.id !== c[m].route.id : !0),
		v = (h, m) => {
			var b;
			return (
				c[m].pathname !== h.pathname ||
				(((b = c[m].route.path) == null ? void 0 : b.endsWith("*")) &&
					c[m].params["*"] !== h.params["*"])
			);
		};
	return f === "assets"
		? l.filter((h, m) => p(h, m) || v(h, m))
		: f === "data"
			? l.filter((h, m) => {
					var _;
					let b = s.routes[h.route.id];
					if (!b || !b.hasLoader) return !1;
					if (p(h, m) || v(h, m)) return !0;
					if (h.route.shouldRevalidate) {
						let S = h.route.shouldRevalidate({
							currentUrl: new URL(
								o.pathname + o.search + o.hash,
								window.origin,
							),
							currentParams: ((_ = c[0]) == null ? void 0 : _.params) || {},
							nextUrl: new URL(i, window.origin),
							nextParams: h.params,
							defaultShouldRevalidate: !0,
						});
						if (typeof S == "boolean") return S;
					}
					return !0;
				})
			: [];
}
function kp(i, l) {
	return Hp(
		i
			.map((c) => {
				let s = l.routes[c.route.id];
				if (!s) return [];
				let o = [s.module];
				return s.imports && (o = o.concat(s.imports)), o;
			})
			.flat(1),
	);
}
function Hp(i) {
	return [...new Set(i)];
}
function Zp(i) {
	let l = {},
		c = Object.keys(i).sort();
	for (let s of c) l[s] = i[s];
	return l;
}
function Bp(i, l) {
	let c = new Set();
	return (
		new Set(l),
		i.reduce((s, o) => {
			let f = JSON.stringify(Zp(o));
			return c.has(f) || (c.add(f), s.push({ key: f, link: o })), s;
		}, [])
	);
}
function qp(i) {
	let l =
		typeof i == "string"
			? new URL(
					i,
					typeof window > "u"
						? "server://singlefetch/"
						: window.location.origin,
				)
			: i;
	return (
		l.pathname === "/"
			? (l.pathname = "_root.data")
			: (l.pathname = `${l.pathname.replace(/\/$/, "")}.data`),
		l
	);
}
function Lp() {
	let i = C.useContext(yl);
	return (
		ao(
			i,
			"You must render this element inside a <DataRouterContext.Provider> element",
		),
		i
	);
}
function Yp() {
	let i = C.useContext(gr);
	return (
		ao(
			i,
			"You must render this element inside a <DataRouterStateContext.Provider> element",
		),
		i
	);
}
var no = C.createContext(void 0);
no.displayName = "FrameworkContext";
function km() {
	let i = C.useContext(no);
	return (
		ao(i, "You must render this element inside a <HydratedRouter> element"), i
	);
}
function Vp(i, l) {
	let c = C.useContext(no),
		[s, o] = C.useState(!1),
		[f, p] = C.useState(!1),
		{
			onFocus: v,
			onBlur: h,
			onMouseEnter: m,
			onMouseLeave: b,
			onTouchStart: _,
		} = l,
		S = C.useRef(null);
	C.useEffect(() => {
		if ((i === "render" && p(!0), i === "viewport")) {
			let G = (Z) => {
					Z.forEach((J) => {
						p(J.isIntersecting);
					});
				},
				B = new IntersectionObserver(G, { threshold: 0.5 });
			return (
				S.current && B.observe(S.current),
				() => {
					B.disconnect();
				}
			);
		}
	}, [i]),
		C.useEffect(() => {
			if (s) {
				let G = setTimeout(() => {
					p(!0);
				}, 100);
				return () => {
					clearTimeout(G);
				};
			}
		}, [s]);
	let R = () => {
			o(!0);
		},
		N = () => {
			o(!1), p(!1);
		};
	return c
		? i !== "intent"
			? [f, S, {}]
			: [
					f,
					S,
					{
						onFocus: pu(v, R),
						onBlur: pu(h, N),
						onMouseEnter: pu(m, R),
						onMouseLeave: pu(b, N),
						onTouchStart: pu(_, R),
					},
				]
		: [!1, S, {}];
}
function pu(i, l) {
	return (c) => {
		i && i(c), c.defaultPrevented || l(c);
	};
}
function Gp({ page: i, ...l }) {
	let { router: c } = Lp(),
		s = C.useMemo(() => Tm(c.routes, i, c.basename), [c.routes, i, c.basename]);
	return s ? C.createElement(Qp, { page: i, matches: s, ...l }) : null;
}
function Xp(i) {
	let { manifest: l, routeModules: c } = km(),
		[s, o] = C.useState([]);
	return (
		C.useEffect(() => {
			let f = !1;
			return (
				Up(i, l, c).then((p) => {
					f || o(p);
				}),
				() => {
					f = !0;
				}
			);
		}, [i, l, c]),
		s
	);
}
function Qp({ page: i, matches: l, ...c }) {
	let s = Pa(),
		{ manifest: o, routeModules: f } = km(),
		{ loaderData: p, matches: v } = Yp(),
		h = C.useMemo(() => im(i, l, v, o, s, "data"), [i, l, v, o, s]),
		m = C.useMemo(() => im(i, l, v, o, s, "assets"), [i, l, v, o, s]),
		b = C.useMemo(() => {
			if (i === s.pathname + s.search + s.hash) return [];
			let R = new Set(),
				N = !1;
			if (
				(l.forEach((B) => {
					var J;
					let Z = o.routes[B.route.id];
					!Z ||
						!Z.hasLoader ||
						((!h.some((Q) => Q.route.id === B.route.id) &&
							B.route.id in p &&
							(J = f[B.route.id]) != null &&
							J.shouldRevalidate) ||
						Z.hasClientLoader
							? (N = !0)
							: R.add(B.route.id));
				}),
				R.size === 0)
			)
				return [];
			let G = qp(i);
			return (
				N &&
					R.size > 0 &&
					G.searchParams.set(
						"_routes",
						l
							.filter((B) => R.has(B.route.id))
							.map((B) => B.route.id)
							.join(","),
					),
				[G.pathname + G.search]
			);
		}, [p, s, o, h, l, i, f]),
		_ = C.useMemo(() => kp(m, o), [m, o]),
		S = Xp(m);
	return C.createElement(
		C.Fragment,
		null,
		b.map((R) =>
			C.createElement("link", {
				key: R,
				rel: "prefetch",
				as: "fetch",
				href: R,
				...c,
			}),
		),
		_.map((R) =>
			C.createElement("link", { key: R, rel: "modulepreload", href: R, ...c }),
		),
		S.map(({ key: R, link: N }) => C.createElement("link", { key: R, ...N })),
	);
}
function Kp(...i) {
	return (l) => {
		i.forEach((c) => {
			typeof c == "function" ? c(l) : c != null && (c.current = l);
		});
	};
}
var Hm =
	typeof window < "u" &&
	typeof window.document < "u" &&
	typeof window.document.createElement < "u";
try {
	Hm && (window.__reactRouterVersion = "7.1.5");
} catch {}
function $p({ basename: i, children: l, window: c }) {
	let s = C.useRef();
	s.current == null && (s.current = Uy({ window: c, v5Compat: !0 }));
	let o = s.current,
		[f, p] = C.useState({ action: o.action, location: o.location }),
		v = C.useCallback(
			(h) => {
				C.startTransition(() => p(h));
			},
			[p],
		);
	return (
		C.useLayoutEffect(() => o.listen(v), [o, v]),
		C.createElement(xp, {
			basename: i,
			children: l,
			location: f.location,
			navigationType: f.action,
			navigator: o,
		})
	);
}
var Zm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	lo = C.forwardRef(function (
		{
			onClick: l,
			discover: c = "render",
			prefetch: s = "none",
			relative: o,
			reloadDocument: f,
			replace: p,
			state: v,
			target: h,
			to: m,
			preventScrollReset: b,
			viewTransition: _,
			...S
		},
		R,
	) {
		let { basename: N } = C.useContext(ea),
			G = typeof m == "string" && Zm.test(m),
			B,
			Z = !1;
		if (typeof m == "string" && G && ((B = m), Hm))
			try {
				let L = new URL(window.location.href),
					ee = m.startsWith("//") ? new URL(L.protocol + m) : new URL(m),
					Re = Ka(ee.pathname, N);
				ee.origin === L.origin && Re != null
					? (m = Re + ee.search + ee.hash)
					: (Z = !0);
			} catch {
				Yt(
					!1,
					`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
				);
			}
		let J = rp(m, { relative: o }),
			[Q, P, V] = Vp(s, S),
			ye = Pp(m, {
				replace: p,
				state: v,
				target: h,
				preventScrollReset: b,
				relative: o,
				viewTransition: _,
			});
		function pe(L) {
			l && l(L), L.defaultPrevented || ye(L);
		}
		let ge = C.createElement("a", {
			...S,
			...V,
			href: B || J,
			onClick: Z || f ? l : pe,
			ref: Kp(R, P),
			target: h,
			"data-discover": !G && c === "render" ? "true" : void 0,
		});
		return Q && !G
			? C.createElement(C.Fragment, null, ge, C.createElement(Gp, { page: J }))
			: ge;
	});
lo.displayName = "Link";
var Jp = C.forwardRef(function (
	{
		"aria-current": l = "page",
		caseSensitive: c = !1,
		className: s = "",
		end: o = !1,
		style: f,
		to: p,
		viewTransition: v,
		children: h,
		...m
	},
	b,
) {
	let _ = ku(p, { relative: m.relative }),
		S = Pa(),
		R = C.useContext(gr),
		{ navigator: N, basename: G } = C.useContext(ea),
		B = R != null && ng(_) && v === !0,
		Z = N.encodeLocation ? N.encodeLocation(_).pathname : _.pathname,
		J = S.pathname,
		Q =
			R && R.navigation && R.navigation.location
				? R.navigation.location.pathname
				: null;
	c ||
		((J = J.toLowerCase()),
		(Q = Q ? Q.toLowerCase() : null),
		(Z = Z.toLowerCase())),
		Q && G && (Q = Ka(Q, G) || Q);
	const P = Z !== "/" && Z.endsWith("/") ? Z.length - 1 : Z.length;
	let V = J === Z || (!o && J.startsWith(Z) && J.charAt(P) === "/"),
		ye =
			Q != null &&
			(Q === Z || (!o && Q.startsWith(Z) && Q.charAt(Z.length) === "/")),
		pe = { isActive: V, isPending: ye, isTransitioning: B },
		ge = V ? l : void 0,
		L;
	typeof s == "function"
		? (L = s(pe))
		: (L = [
				s,
				V ? "active" : null,
				ye ? "pending" : null,
				B ? "transitioning" : null,
			]
				.filter(Boolean)
				.join(" "));
	let ee = typeof f == "function" ? f(pe) : f;
	return C.createElement(
		lo,
		{
			...m,
			"aria-current": ge,
			className: L,
			ref: b,
			style: ee,
			to: p,
			viewTransition: v,
		},
		typeof h == "function" ? h(pe) : h,
	);
});
Jp.displayName = "NavLink";
var Wp = C.forwardRef(
	(
		{
			discover: i = "render",
			fetcherKey: l,
			navigate: c,
			reloadDocument: s,
			replace: o,
			state: f,
			method: p = Ii,
			action: v,
			onSubmit: h,
			relative: m,
			preventScrollReset: b,
			viewTransition: _,
			...S
		},
		R,
	) => {
		let N = tg(),
			G = ag(v, { relative: m }),
			B = p.toLowerCase() === "get" ? "get" : "post",
			Z = typeof v == "string" && Zm.test(v),
			J = (Q) => {
				if ((h && h(Q), Q.defaultPrevented)) return;
				Q.preventDefault();
				let P = Q.nativeEvent.submitter,
					V = (P == null ? void 0 : P.getAttribute("formmethod")) || p;
				N(P || Q.currentTarget, {
					fetcherKey: l,
					method: V,
					navigate: c,
					replace: o,
					state: f,
					relative: m,
					preventScrollReset: b,
					viewTransition: _,
				});
			};
		return C.createElement("form", {
			ref: R,
			method: B,
			action: G,
			onSubmit: s ? h : J,
			...S,
			"data-discover": !Z && i === "render" ? "true" : void 0,
		});
	},
);
Wp.displayName = "Form";
function Fp(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bm(i) {
	let l = C.useContext(yl);
	return He(l, Fp(i)), l;
}
function Pp(
	i,
	{
		target: l,
		replace: c,
		state: s,
		preventScrollReset: o,
		relative: f,
		viewTransition: p,
	} = {},
) {
	let v = Dm(),
		h = Pa(),
		m = ku(i, { relative: f });
	return C.useCallback(
		(b) => {
			if (wp(b, l)) {
				b.preventDefault();
				let _ = c !== void 0 ? c : _u(h) === _u(m);
				v(i, {
					replace: _,
					state: s,
					preventScrollReset: o,
					relative: f,
					viewTransition: p,
				});
			}
		},
		[h, v, m, c, s, l, i, o, f, p],
	);
}
function Sb(i) {
	Yt(
		typeof URLSearchParams < "u",
		"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
	);
	let l = C.useRef(Qs(i)),
		c = C.useRef(!1),
		s = Pa(),
		o = C.useMemo(() => Cp(s.search, c.current ? null : l.current), [s.search]),
		f = Dm(),
		p = C.useCallback(
			(v, h) => {
				const m = Qs(typeof v == "function" ? v(o) : v);
				(c.current = !0), f("?" + m, h);
			},
			[f, o],
		);
	return [o, p];
}
var Ip = 0,
	eg = () => `__${String(++Ip)}__`;
function tg() {
	let { router: i } = Bm("useSubmit"),
		{ basename: l } = C.useContext(ea),
		c = gp();
	return C.useCallback(
		async (s, o = {}) => {
			let { action: f, method: p, encType: v, formData: h, body: m } = Mp(s, l);
			if (o.navigate === !1) {
				let b = o.fetcherKey || eg();
				await i.fetch(b, c, o.action || f, {
					preventScrollReset: o.preventScrollReset,
					formData: h,
					body: m,
					formMethod: o.method || p,
					formEncType: o.encType || v,
					flushSync: o.flushSync,
				});
			} else
				await i.navigate(o.action || f, {
					preventScrollReset: o.preventScrollReset,
					formData: h,
					body: m,
					formMethod: o.method || p,
					formEncType: o.encType || v,
					replace: o.replace,
					state: o.state,
					fromRouteId: c,
					flushSync: o.flushSync,
					viewTransition: o.viewTransition,
				});
		},
		[i, l, c],
	);
}
function ag(i, { relative: l } = {}) {
	let { basename: c } = C.useContext(ea),
		s = C.useContext(ta);
	He(s, "useFormAction must be used inside a RouteContext");
	let [o] = s.matches.slice(-1),
		f = { ...ku(i || ".", { relative: l }) },
		p = Pa();
	if (i == null) {
		f.search = p.search;
		let v = new URLSearchParams(f.search),
			h = v.getAll("index");
		if (h.some((b) => b === "")) {
			v.delete("index"),
				h.filter((_) => _).forEach((_) => v.append("index", _));
			let b = v.toString();
			f.search = b ? `?${b}` : "";
		}
	}
	return (
		(!i || i === ".") &&
			o.route.index &&
			(f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
		c !== "/" && (f.pathname = f.pathname === "/" ? c : Sa([c, f.pathname])),
		_u(f)
	);
}
function ng(i, l = {}) {
	let c = C.useContext(Nm);
	He(
		c != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
	);
	let { basename: s } = Bm("useViewTransitionState"),
		o = ku(i, { relative: l.relative });
	if (!c.isTransitioning) return !1;
	let f = Ka(c.currentLocation.pathname, s) || c.currentLocation.pathname,
		p = Ka(c.nextLocation.pathname, s) || c.nextLocation.pathname;
	return sr(o.pathname, p) != null || sr(o.pathname, f) != null;
}
new TextEncoder();
const lg = C.createContext({}),
	ug = ({ children: i }) => M.jsx(lg.Provider, { value: {}, children: i });
var xe;
(function (i) {
	i.assertEqual = (o) => o;
	function l(o) {}
	i.assertIs = l;
	function c(o) {
		throw new Error();
	}
	(i.assertNever = c),
		(i.arrayToEnum = (o) => {
			const f = {};
			for (const p of o) f[p] = p;
			return f;
		}),
		(i.getValidEnumValues = (o) => {
			const f = i.objectKeys(o).filter((v) => typeof o[o[v]] != "number"),
				p = {};
			for (const v of f) p[v] = o[v];
			return i.objectValues(p);
		}),
		(i.objectValues = (o) =>
			i.objectKeys(o).map(function (f) {
				return o[f];
			})),
		(i.objectKeys =
			typeof Object.keys == "function"
				? (o) => Object.keys(o)
				: (o) => {
						const f = [];
						for (const p in o)
							Object.prototype.hasOwnProperty.call(o, p) && f.push(p);
						return f;
					}),
		(i.find = (o, f) => {
			for (const p of o) if (f(p)) return p;
		}),
		(i.isInteger =
			typeof Number.isInteger == "function"
				? (o) => Number.isInteger(o)
				: (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o);
	function s(o, f = " | ") {
		return o.map((p) => (typeof p == "string" ? `'${p}'` : p)).join(f);
	}
	(i.joinValues = s),
		(i.jsonStringifyReplacer = (o, f) =>
			typeof f == "bigint" ? f.toString() : f);
})(xe || (xe = {}));
var Ks;
(function (i) {
	i.mergeShapes = (l, c) => ({ ...l, ...c });
})(Ks || (Ks = {}));
const X = xe.arrayToEnum([
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
	_a = (i) => {
		switch (typeof i) {
			case "undefined":
				return X.undefined;
			case "string":
				return X.string;
			case "number":
				return isNaN(i) ? X.nan : X.number;
			case "boolean":
				return X.boolean;
			case "function":
				return X.function;
			case "bigint":
				return X.bigint;
			case "symbol":
				return X.symbol;
			case "object":
				return Array.isArray(i)
					? X.array
					: i === null
						? X.null
						: i.then &&
							  typeof i.then == "function" &&
							  i.catch &&
							  typeof i.catch == "function"
							? X.promise
							: typeof Map < "u" && i instanceof Map
								? X.map
								: typeof Set < "u" && i instanceof Set
									? X.set
									: typeof Date < "u" && i instanceof Date
										? X.date
										: X.object;
			default:
				return X.unknown;
		}
	},
	k = xe.arrayToEnum([
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
	ig = (i) => JSON.stringify(i, null, 2).replace(/"([^"]+)":/g, "$1:");
class Et extends Error {
	get errors() {
		return this.issues;
	}
	constructor(l) {
		super(),
			(this.issues = []),
			(this.addIssue = (s) => {
				this.issues = [...this.issues, s];
			}),
			(this.addIssues = (s = []) => {
				this.issues = [...this.issues, ...s];
			});
		const c = new.target.prototype;
		Object.setPrototypeOf
			? Object.setPrototypeOf(this, c)
			: (this.__proto__ = c),
			(this.name = "ZodError"),
			(this.issues = l);
	}
	format(l) {
		const c =
				l ||
				function (f) {
					return f.message;
				},
			s = { _errors: [] },
			o = (f) => {
				for (const p of f.issues)
					if (p.code === "invalid_union") p.unionErrors.map(o);
					else if (p.code === "invalid_return_type") o(p.returnTypeError);
					else if (p.code === "invalid_arguments") o(p.argumentsError);
					else if (p.path.length === 0) s._errors.push(c(p));
					else {
						let v = s,
							h = 0;
						for (; h < p.path.length; ) {
							const m = p.path[h];
							h === p.path.length - 1
								? ((v[m] = v[m] || { _errors: [] }), v[m]._errors.push(c(p)))
								: (v[m] = v[m] || { _errors: [] }),
								(v = v[m]),
								h++;
						}
					}
			};
		return o(this), s;
	}
	static assert(l) {
		if (!(l instanceof Et)) throw new Error(`Not a ZodError: ${l}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, xe.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(l = (c) => c.message) {
		const c = {},
			s = [];
		for (const o of this.issues)
			o.path.length > 0
				? ((c[o.path[0]] = c[o.path[0]] || []), c[o.path[0]].push(l(o)))
				: s.push(l(o));
		return { formErrors: s, fieldErrors: c };
	}
	get formErrors() {
		return this.flatten();
	}
}
Et.create = (i) => new Et(i);
const dl = (i, l) => {
	let c;
	switch (i.code) {
		case k.invalid_type:
			i.received === X.undefined
				? (c = "Required")
				: (c = `Expected ${i.expected}, received ${i.received}`);
			break;
		case k.invalid_literal:
			c = `Invalid literal value, expected ${JSON.stringify(i.expected, xe.jsonStringifyReplacer)}`;
			break;
		case k.unrecognized_keys:
			c = `Unrecognized key(s) in object: ${xe.joinValues(i.keys, ", ")}`;
			break;
		case k.invalid_union:
			c = "Invalid input";
			break;
		case k.invalid_union_discriminator:
			c = `Invalid discriminator value. Expected ${xe.joinValues(i.options)}`;
			break;
		case k.invalid_enum_value:
			c = `Invalid enum value. Expected ${xe.joinValues(i.options)}, received '${i.received}'`;
			break;
		case k.invalid_arguments:
			c = "Invalid function arguments";
			break;
		case k.invalid_return_type:
			c = "Invalid function return type";
			break;
		case k.invalid_date:
			c = "Invalid date";
			break;
		case k.invalid_string:
			typeof i.validation == "object"
				? "includes" in i.validation
					? ((c = `Invalid input: must include "${i.validation.includes}"`),
						typeof i.validation.position == "number" &&
							(c = `${c} at one or more positions greater than or equal to ${i.validation.position}`))
					: "startsWith" in i.validation
						? (c = `Invalid input: must start with "${i.validation.startsWith}"`)
						: "endsWith" in i.validation
							? (c = `Invalid input: must end with "${i.validation.endsWith}"`)
							: xe.assertNever(i.validation)
				: i.validation !== "regex"
					? (c = `Invalid ${i.validation}`)
					: (c = "Invalid");
			break;
		case k.too_small:
			i.type === "array"
				? (c = `Array must contain ${i.exact ? "exactly" : i.inclusive ? "at least" : "more than"} ${i.minimum} element(s)`)
				: i.type === "string"
					? (c = `String must contain ${i.exact ? "exactly" : i.inclusive ? "at least" : "over"} ${i.minimum} character(s)`)
					: i.type === "number"
						? (c = `Number must be ${i.exact ? "exactly equal to " : i.inclusive ? "greater than or equal to " : "greater than "}${i.minimum}`)
						: i.type === "date"
							? (c = `Date must be ${i.exact ? "exactly equal to " : i.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(i.minimum))}`)
							: (c = "Invalid input");
			break;
		case k.too_big:
			i.type === "array"
				? (c = `Array must contain ${i.exact ? "exactly" : i.inclusive ? "at most" : "less than"} ${i.maximum} element(s)`)
				: i.type === "string"
					? (c = `String must contain ${i.exact ? "exactly" : i.inclusive ? "at most" : "under"} ${i.maximum} character(s)`)
					: i.type === "number"
						? (c = `Number must be ${i.exact ? "exactly" : i.inclusive ? "less than or equal to" : "less than"} ${i.maximum}`)
						: i.type === "bigint"
							? (c = `BigInt must be ${i.exact ? "exactly" : i.inclusive ? "less than or equal to" : "less than"} ${i.maximum}`)
							: i.type === "date"
								? (c = `Date must be ${i.exact ? "exactly" : i.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(i.maximum))}`)
								: (c = "Invalid input");
			break;
		case k.custom:
			c = "Invalid input";
			break;
		case k.invalid_intersection_types:
			c = "Intersection results could not be merged";
			break;
		case k.not_multiple_of:
			c = `Number must be a multiple of ${i.multipleOf}`;
			break;
		case k.not_finite:
			c = "Number must be finite";
			break;
		default:
			(c = l.defaultError), xe.assertNever(i);
	}
	return { message: c };
};
let qm = dl;
function rg(i) {
	qm = i;
}
function or() {
	return qm;
}
const fr = (i) => {
		const { data: l, path: c, errorMaps: s, issueData: o } = i,
			f = [...c, ...(o.path || [])],
			p = { ...o, path: f };
		if (o.message !== void 0) return { ...o, path: f, message: o.message };
		let v = "";
		const h = s
			.filter((m) => !!m)
			.slice()
			.reverse();
		for (const m of h) v = m(p, { data: l, defaultError: v }).message;
		return { ...o, path: f, message: v };
	},
	cg = [];
function Y(i, l) {
	const c = or(),
		s = fr({
			issueData: l,
			data: i.data,
			path: i.path,
			errorMaps: [
				i.common.contextualErrorMap,
				i.schemaErrorMap,
				c,
				c === dl ? void 0 : dl,
			].filter((o) => !!o),
		});
	i.common.issues.push(s);
}
class ct {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		this.value === "valid" && (this.value = "dirty");
	}
	abort() {
		this.value !== "aborted" && (this.value = "aborted");
	}
	static mergeArray(l, c) {
		const s = [];
		for (const o of c) {
			if (o.status === "aborted") return ie;
			o.status === "dirty" && l.dirty(), s.push(o.value);
		}
		return { status: l.value, value: s };
	}
	static async mergeObjectAsync(l, c) {
		const s = [];
		for (const o of c) {
			const f = await o.key,
				p = await o.value;
			s.push({ key: f, value: p });
		}
		return ct.mergeObjectSync(l, s);
	}
	static mergeObjectSync(l, c) {
		const s = {};
		for (const o of c) {
			const { key: f, value: p } = o;
			if (f.status === "aborted" || p.status === "aborted") return ie;
			f.status === "dirty" && l.dirty(),
				p.status === "dirty" && l.dirty(),
				f.value !== "__proto__" &&
					(typeof p.value < "u" || o.alwaysSet) &&
					(s[f.value] = p.value);
		}
		return { status: l.value, value: s };
	}
}
const ie = Object.freeze({ status: "aborted" }),
	ol = (i) => ({ status: "dirty", value: i }),
	dt = (i) => ({ status: "valid", value: i }),
	$s = (i) => i.status === "aborted",
	Js = (i) => i.status === "dirty",
	En = (i) => i.status === "valid",
	Su = (i) => typeof Promise < "u" && i instanceof Promise;
function dr(i, l, c, s) {
	if (typeof l == "function" ? i !== l || !s : !l.has(i))
		throw new TypeError(
			"Cannot read private member from an object whose class did not declare it",
		);
	return l.get(i);
}
function Lm(i, l, c, s, o) {
	if (typeof l == "function" ? i !== l || !o : !l.has(i))
		throw new TypeError(
			"Cannot write private member to an object whose class did not declare it",
		);
	return l.set(i, c), c;
}
var W;
(function (i) {
	(i.errToObj = (l) => (typeof l == "string" ? { message: l } : l || {})),
		(i.toString = (l) =>
			typeof l == "string" ? l : l == null ? void 0 : l.message);
})(W || (W = {}));
var gu, bu;
class Pt {
	constructor(l, c, s, o) {
		(this._cachedPath = []),
			(this.parent = l),
			(this.data = c),
			(this._path = s),
			(this._key = o);
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
const rm = (i, l) => {
	if (En(l)) return { success: !0, data: l.value };
	if (!i.common.issues.length)
		throw new Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			const c = new Et(i.common.issues);
			return (this._error = c), this._error;
		},
	};
};
function se(i) {
	if (!i) return {};
	const {
		errorMap: l,
		invalid_type_error: c,
		required_error: s,
		description: o,
	} = i;
	if (l && (c || s))
		throw new Error(
			`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
		);
	return l
		? { errorMap: l, description: o }
		: {
				errorMap: (p, v) => {
					var h, m;
					const { message: b } = i;
					return p.code === "invalid_enum_value"
						? { message: b ?? v.defaultError }
						: typeof v.data > "u"
							? {
									message:
										(h = b ?? s) !== null && h !== void 0 ? h : v.defaultError,
								}
							: p.code !== "invalid_type"
								? { message: v.defaultError }
								: {
										message:
											(m = b ?? c) !== null && m !== void 0
												? m
												: v.defaultError,
									};
				},
				description: o,
			};
}
class fe {
	get description() {
		return this._def.description;
	}
	_getType(l) {
		return _a(l.data);
	}
	_getOrReturnCtx(l, c) {
		return (
			c || {
				common: l.parent.common,
				data: l.data,
				parsedType: _a(l.data),
				schemaErrorMap: this._def.errorMap,
				path: l.path,
				parent: l.parent,
			}
		);
	}
	_processInputParams(l) {
		return {
			status: new ct(),
			ctx: {
				common: l.parent.common,
				data: l.data,
				parsedType: _a(l.data),
				schemaErrorMap: this._def.errorMap,
				path: l.path,
				parent: l.parent,
			},
		};
	}
	_parseSync(l) {
		const c = this._parse(l);
		if (Su(c)) throw new Error("Synchronous parse encountered promise.");
		return c;
	}
	_parseAsync(l) {
		const c = this._parse(l);
		return Promise.resolve(c);
	}
	parse(l, c) {
		const s = this.safeParse(l, c);
		if (s.success) return s.data;
		throw s.error;
	}
	safeParse(l, c) {
		var s;
		const o = {
				common: {
					issues: [],
					async:
						(s = c == null ? void 0 : c.async) !== null && s !== void 0
							? s
							: !1,
					contextualErrorMap: c == null ? void 0 : c.errorMap,
				},
				path: (c == null ? void 0 : c.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: l,
				parsedType: _a(l),
			},
			f = this._parseSync({ data: l, path: o.path, parent: o });
		return rm(o, f);
	}
	"~validate"(l) {
		var c, s;
		const o = {
			common: { issues: [], async: !!this["~standard"].async },
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: l,
			parsedType: _a(l),
		};
		if (!this["~standard"].async)
			try {
				const f = this._parseSync({ data: l, path: [], parent: o });
				return En(f) ? { value: f.value } : { issues: o.common.issues };
			} catch (f) {
				!(
					(s =
						(c = f == null ? void 0 : f.message) === null || c === void 0
							? void 0
							: c.toLowerCase()) === null || s === void 0
				) &&
					s.includes("encountered") &&
					(this["~standard"].async = !0),
					(o.common = { issues: [], async: !0 });
			}
		return this._parseAsync({ data: l, path: [], parent: o }).then((f) =>
			En(f) ? { value: f.value } : { issues: o.common.issues },
		);
	}
	async parseAsync(l, c) {
		const s = await this.safeParseAsync(l, c);
		if (s.success) return s.data;
		throw s.error;
	}
	async safeParseAsync(l, c) {
		const s = {
				common: {
					issues: [],
					contextualErrorMap: c == null ? void 0 : c.errorMap,
					async: !0,
				},
				path: (c == null ? void 0 : c.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: l,
				parsedType: _a(l),
			},
			o = this._parse({ data: l, path: s.path, parent: s }),
			f = await (Su(o) ? o : Promise.resolve(o));
		return rm(s, f);
	}
	refine(l, c) {
		const s = (o) =>
			typeof c == "string" || typeof c > "u"
				? { message: c }
				: typeof c == "function"
					? c(o)
					: c;
		return this._refinement((o, f) => {
			const p = l(o),
				v = () => f.addIssue({ code: k.custom, ...s(o) });
			return typeof Promise < "u" && p instanceof Promise
				? p.then((h) => (h ? !0 : (v(), !1)))
				: p
					? !0
					: (v(), !1);
		});
	}
	refinement(l, c) {
		return this._refinement((s, o) =>
			l(s) ? !0 : (o.addIssue(typeof c == "function" ? c(s, o) : c), !1),
		);
	}
	_refinement(l) {
		return new Vt({
			schema: this,
			typeName: le.ZodEffects,
			effect: { type: "refinement", refinement: l },
		});
	}
	superRefine(l) {
		return this._refinement(l);
	}
	constructor(l) {
		(this.spa = this.safeParseAsync),
			(this._def = l),
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
				validate: (c) => this["~validate"](c),
			});
	}
	optional() {
		return Ft.create(this, this._def);
	}
	nullable() {
		return Fa.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return Lt.create(this);
	}
	promise() {
		return ml.create(this, this._def);
	}
	or(l) {
		return Au.create([this, l], this._def);
	}
	and(l) {
		return Ru.create(this, l, this._def);
	}
	transform(l) {
		return new Vt({
			...se(this._def),
			schema: this,
			typeName: le.ZodEffects,
			effect: { type: "transform", transform: l },
		});
	}
	default(l) {
		const c = typeof l == "function" ? l : () => l;
		return new zu({
			...se(this._def),
			innerType: this,
			defaultValue: c,
			typeName: le.ZodDefault,
		});
	}
	brand() {
		return new uo({ typeName: le.ZodBranded, type: this, ...se(this._def) });
	}
	catch(l) {
		const c = typeof l == "function" ? l : () => l;
		return new Mu({
			...se(this._def),
			innerType: this,
			catchValue: c,
			typeName: le.ZodCatch,
		});
	}
	describe(l) {
		const c = this.constructor;
		return new c({ ...this._def, description: l });
	}
	pipe(l) {
		return Hu.create(this, l);
	}
	readonly() {
		return Du.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}
const sg = /^c[^\s-]{8,}$/i,
	og = /^[0-9a-z]+$/,
	fg = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
	dg =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
	hg = /^[a-z0-9_-]{21}$/i,
	mg = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
	vg =
		/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
	yg =
		/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
	pg = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Bs;
const gg =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	bg =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	_g =
		/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
	Sg =
		/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	xg = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	Eg = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	Ym =
		"((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
	Tg = new RegExp(`^${Ym}$`);
function Vm(i) {
	let l = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
	return (
		i.precision
			? (l = `${l}\\.\\d{${i.precision}}`)
			: i.precision == null && (l = `${l}(\\.\\d+)?`),
		l
	);
}
function Ag(i) {
	return new RegExp(`^${Vm(i)}$`);
}
function Gm(i) {
	let l = `${Ym}T${Vm(i)}`;
	const c = [];
	return (
		c.push(i.local ? "Z?" : "Z"),
		i.offset && c.push("([+-]\\d{2}:?\\d{2})"),
		(l = `${l}(${c.join("|")})`),
		new RegExp(`^${l}$`)
	);
}
function Rg(i, l) {
	return !!(
		((l === "v4" || !l) && gg.test(i)) ||
		((l === "v6" || !l) && _g.test(i))
	);
}
function Og(i, l) {
	if (!mg.test(i)) return !1;
	try {
		const [c] = i.split("."),
			s = c
				.replace(/-/g, "+")
				.replace(/_/g, "/")
				.padEnd(c.length + ((4 - (c.length % 4)) % 4), "="),
			o = JSON.parse(atob(s));
		return !(
			typeof o != "object" ||
			o === null ||
			!o.typ ||
			!o.alg ||
			(l && o.alg !== l)
		);
	} catch {
		return !1;
	}
}
function wg(i, l) {
	return !!(
		((l === "v4" || !l) && bg.test(i)) ||
		((l === "v6" || !l) && Sg.test(i))
	);
}
class qt extends fe {
	_parse(l) {
		if (
			(this._def.coerce && (l.data = String(l.data)),
			this._getType(l) !== X.string)
		) {
			const f = this._getOrReturnCtx(l);
			return (
				Y(f, {
					code: k.invalid_type,
					expected: X.string,
					received: f.parsedType,
				}),
				ie
			);
		}
		const s = new ct();
		let o;
		for (const f of this._def.checks)
			if (f.kind === "min")
				l.data.length < f.value &&
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						code: k.too_small,
						minimum: f.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: f.message,
					}),
					s.dirty());
			else if (f.kind === "max")
				l.data.length > f.value &&
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						code: k.too_big,
						maximum: f.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: f.message,
					}),
					s.dirty());
			else if (f.kind === "length") {
				const p = l.data.length > f.value,
					v = l.data.length < f.value;
				(p || v) &&
					((o = this._getOrReturnCtx(l, o)),
					p
						? Y(o, {
								code: k.too_big,
								maximum: f.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: f.message,
							})
						: v &&
							Y(o, {
								code: k.too_small,
								minimum: f.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: f.message,
							}),
					s.dirty());
			} else if (f.kind === "email")
				yg.test(l.data) ||
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						validation: "email",
						code: k.invalid_string,
						message: f.message,
					}),
					s.dirty());
			else if (f.kind === "emoji")
				Bs || (Bs = new RegExp(pg, "u")),
					Bs.test(l.data) ||
						((o = this._getOrReturnCtx(l, o)),
						Y(o, {
							validation: "emoji",
							code: k.invalid_string,
							message: f.message,
						}),
						s.dirty());
			else if (f.kind === "uuid")
				dg.test(l.data) ||
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						validation: "uuid",
						code: k.invalid_string,
						message: f.message,
					}),
					s.dirty());
			else if (f.kind === "nanoid")
				hg.test(l.data) ||
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						validation: "nanoid",
						code: k.invalid_string,
						message: f.message,
					}),
					s.dirty());
			else if (f.kind === "cuid")
				sg.test(l.data) ||
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						validation: "cuid",
						code: k.invalid_string,
						message: f.message,
					}),
					s.dirty());
			else if (f.kind === "cuid2")
				og.test(l.data) ||
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						validation: "cuid2",
						code: k.invalid_string,
						message: f.message,
					}),
					s.dirty());
			else if (f.kind === "ulid")
				fg.test(l.data) ||
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						validation: "ulid",
						code: k.invalid_string,
						message: f.message,
					}),
					s.dirty());
			else if (f.kind === "url")
				try {
					new URL(l.data);
				} catch {
					(o = this._getOrReturnCtx(l, o)),
						Y(o, {
							validation: "url",
							code: k.invalid_string,
							message: f.message,
						}),
						s.dirty();
				}
			else
				f.kind === "regex"
					? ((f.regex.lastIndex = 0),
						f.regex.test(l.data) ||
							((o = this._getOrReturnCtx(l, o)),
							Y(o, {
								validation: "regex",
								code: k.invalid_string,
								message: f.message,
							}),
							s.dirty()))
					: f.kind === "trim"
						? (l.data = l.data.trim())
						: f.kind === "includes"
							? l.data.includes(f.value, f.position) ||
								((o = this._getOrReturnCtx(l, o)),
								Y(o, {
									code: k.invalid_string,
									validation: { includes: f.value, position: f.position },
									message: f.message,
								}),
								s.dirty())
							: f.kind === "toLowerCase"
								? (l.data = l.data.toLowerCase())
								: f.kind === "toUpperCase"
									? (l.data = l.data.toUpperCase())
									: f.kind === "startsWith"
										? l.data.startsWith(f.value) ||
											((o = this._getOrReturnCtx(l, o)),
											Y(o, {
												code: k.invalid_string,
												validation: { startsWith: f.value },
												message: f.message,
											}),
											s.dirty())
										: f.kind === "endsWith"
											? l.data.endsWith(f.value) ||
												((o = this._getOrReturnCtx(l, o)),
												Y(o, {
													code: k.invalid_string,
													validation: { endsWith: f.value },
													message: f.message,
												}),
												s.dirty())
											: f.kind === "datetime"
												? Gm(f).test(l.data) ||
													((o = this._getOrReturnCtx(l, o)),
													Y(o, {
														code: k.invalid_string,
														validation: "datetime",
														message: f.message,
													}),
													s.dirty())
												: f.kind === "date"
													? Tg.test(l.data) ||
														((o = this._getOrReturnCtx(l, o)),
														Y(o, {
															code: k.invalid_string,
															validation: "date",
															message: f.message,
														}),
														s.dirty())
													: f.kind === "time"
														? Ag(f).test(l.data) ||
															((o = this._getOrReturnCtx(l, o)),
															Y(o, {
																code: k.invalid_string,
																validation: "time",
																message: f.message,
															}),
															s.dirty())
														: f.kind === "duration"
															? vg.test(l.data) ||
																((o = this._getOrReturnCtx(l, o)),
																Y(o, {
																	validation: "duration",
																	code: k.invalid_string,
																	message: f.message,
																}),
																s.dirty())
															: f.kind === "ip"
																? Rg(l.data, f.version) ||
																	((o = this._getOrReturnCtx(l, o)),
																	Y(o, {
																		validation: "ip",
																		code: k.invalid_string,
																		message: f.message,
																	}),
																	s.dirty())
																: f.kind === "jwt"
																	? Og(l.data, f.alg) ||
																		((o = this._getOrReturnCtx(l, o)),
																		Y(o, {
																			validation: "jwt",
																			code: k.invalid_string,
																			message: f.message,
																		}),
																		s.dirty())
																	: f.kind === "cidr"
																		? wg(l.data, f.version) ||
																			((o = this._getOrReturnCtx(l, o)),
																			Y(o, {
																				validation: "cidr",
																				code: k.invalid_string,
																				message: f.message,
																			}),
																			s.dirty())
																		: f.kind === "base64"
																			? xg.test(l.data) ||
																				((o = this._getOrReturnCtx(l, o)),
																				Y(o, {
																					validation: "base64",
																					code: k.invalid_string,
																					message: f.message,
																				}),
																				s.dirty())
																			: f.kind === "base64url"
																				? Eg.test(l.data) ||
																					((o = this._getOrReturnCtx(l, o)),
																					Y(o, {
																						validation: "base64url",
																						code: k.invalid_string,
																						message: f.message,
																					}),
																					s.dirty())
																				: xe.assertNever(f);
		return { status: s.value, value: l.data };
	}
	_regex(l, c, s) {
		return this.refinement((o) => l.test(o), {
			validation: c,
			code: k.invalid_string,
			...W.errToObj(s),
		});
	}
	_addCheck(l) {
		return new qt({ ...this._def, checks: [...this._def.checks, l] });
	}
	email(l) {
		return this._addCheck({ kind: "email", ...W.errToObj(l) });
	}
	url(l) {
		return this._addCheck({ kind: "url", ...W.errToObj(l) });
	}
	emoji(l) {
		return this._addCheck({ kind: "emoji", ...W.errToObj(l) });
	}
	uuid(l) {
		return this._addCheck({ kind: "uuid", ...W.errToObj(l) });
	}
	nanoid(l) {
		return this._addCheck({ kind: "nanoid", ...W.errToObj(l) });
	}
	cuid(l) {
		return this._addCheck({ kind: "cuid", ...W.errToObj(l) });
	}
	cuid2(l) {
		return this._addCheck({ kind: "cuid2", ...W.errToObj(l) });
	}
	ulid(l) {
		return this._addCheck({ kind: "ulid", ...W.errToObj(l) });
	}
	base64(l) {
		return this._addCheck({ kind: "base64", ...W.errToObj(l) });
	}
	base64url(l) {
		return this._addCheck({ kind: "base64url", ...W.errToObj(l) });
	}
	jwt(l) {
		return this._addCheck({ kind: "jwt", ...W.errToObj(l) });
	}
	ip(l) {
		return this._addCheck({ kind: "ip", ...W.errToObj(l) });
	}
	cidr(l) {
		return this._addCheck({ kind: "cidr", ...W.errToObj(l) });
	}
	datetime(l) {
		var c, s;
		return typeof l == "string"
			? this._addCheck({
					kind: "datetime",
					precision: null,
					offset: !1,
					local: !1,
					message: l,
				})
			: this._addCheck({
					kind: "datetime",
					precision:
						typeof (l == null ? void 0 : l.precision) > "u"
							? null
							: l == null
								? void 0
								: l.precision,
					offset:
						(c = l == null ? void 0 : l.offset) !== null && c !== void 0
							? c
							: !1,
					local:
						(s = l == null ? void 0 : l.local) !== null && s !== void 0
							? s
							: !1,
					...W.errToObj(l == null ? void 0 : l.message),
				});
	}
	date(l) {
		return this._addCheck({ kind: "date", message: l });
	}
	time(l) {
		return typeof l == "string"
			? this._addCheck({ kind: "time", precision: null, message: l })
			: this._addCheck({
					kind: "time",
					precision:
						typeof (l == null ? void 0 : l.precision) > "u"
							? null
							: l == null
								? void 0
								: l.precision,
					...W.errToObj(l == null ? void 0 : l.message),
				});
	}
	duration(l) {
		return this._addCheck({ kind: "duration", ...W.errToObj(l) });
	}
	regex(l, c) {
		return this._addCheck({ kind: "regex", regex: l, ...W.errToObj(c) });
	}
	includes(l, c) {
		return this._addCheck({
			kind: "includes",
			value: l,
			position: c == null ? void 0 : c.position,
			...W.errToObj(c == null ? void 0 : c.message),
		});
	}
	startsWith(l, c) {
		return this._addCheck({ kind: "startsWith", value: l, ...W.errToObj(c) });
	}
	endsWith(l, c) {
		return this._addCheck({ kind: "endsWith", value: l, ...W.errToObj(c) });
	}
	min(l, c) {
		return this._addCheck({ kind: "min", value: l, ...W.errToObj(c) });
	}
	max(l, c) {
		return this._addCheck({ kind: "max", value: l, ...W.errToObj(c) });
	}
	length(l, c) {
		return this._addCheck({ kind: "length", value: l, ...W.errToObj(c) });
	}
	nonempty(l) {
		return this.min(1, W.errToObj(l));
	}
	trim() {
		return new qt({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }],
		});
	}
	toLowerCase() {
		return new qt({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }],
		});
	}
	toUpperCase() {
		return new qt({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }],
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((l) => l.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((l) => l.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((l) => l.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((l) => l.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((l) => l.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((l) => l.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((l) => l.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((l) => l.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((l) => l.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((l) => l.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((l) => l.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((l) => l.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((l) => l.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((l) => l.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((l) => l.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((l) => l.kind === "base64url");
	}
	get minLength() {
		let l = null;
		for (const c of this._def.checks)
			c.kind === "min" && (l === null || c.value > l) && (l = c.value);
		return l;
	}
	get maxLength() {
		let l = null;
		for (const c of this._def.checks)
			c.kind === "max" && (l === null || c.value < l) && (l = c.value);
		return l;
	}
}
qt.create = (i) => {
	var l;
	return new qt({
		checks: [],
		typeName: le.ZodString,
		coerce:
			(l = i == null ? void 0 : i.coerce) !== null && l !== void 0 ? l : !1,
		...se(i),
	});
};
function Cg(i, l) {
	const c = (i.toString().split(".")[1] || "").length,
		s = (l.toString().split(".")[1] || "").length,
		o = c > s ? c : s,
		f = parseInt(i.toFixed(o).replace(".", "")),
		p = parseInt(l.toFixed(o).replace(".", ""));
	return (f % p) / Math.pow(10, o);
}
class $a extends fe {
	constructor() {
		super(...arguments),
			(this.min = this.gte),
			(this.max = this.lte),
			(this.step = this.multipleOf);
	}
	_parse(l) {
		if (
			(this._def.coerce && (l.data = Number(l.data)),
			this._getType(l) !== X.number)
		) {
			const f = this._getOrReturnCtx(l);
			return (
				Y(f, {
					code: k.invalid_type,
					expected: X.number,
					received: f.parsedType,
				}),
				ie
			);
		}
		let s;
		const o = new ct();
		for (const f of this._def.checks)
			f.kind === "int"
				? xe.isInteger(l.data) ||
					((s = this._getOrReturnCtx(l, s)),
					Y(s, {
						code: k.invalid_type,
						expected: "integer",
						received: "float",
						message: f.message,
					}),
					o.dirty())
				: f.kind === "min"
					? (f.inclusive ? l.data < f.value : l.data <= f.value) &&
						((s = this._getOrReturnCtx(l, s)),
						Y(s, {
							code: k.too_small,
							minimum: f.value,
							type: "number",
							inclusive: f.inclusive,
							exact: !1,
							message: f.message,
						}),
						o.dirty())
					: f.kind === "max"
						? (f.inclusive ? l.data > f.value : l.data >= f.value) &&
							((s = this._getOrReturnCtx(l, s)),
							Y(s, {
								code: k.too_big,
								maximum: f.value,
								type: "number",
								inclusive: f.inclusive,
								exact: !1,
								message: f.message,
							}),
							o.dirty())
						: f.kind === "multipleOf"
							? Cg(l.data, f.value) !== 0 &&
								((s = this._getOrReturnCtx(l, s)),
								Y(s, {
									code: k.not_multiple_of,
									multipleOf: f.value,
									message: f.message,
								}),
								o.dirty())
							: f.kind === "finite"
								? Number.isFinite(l.data) ||
									((s = this._getOrReturnCtx(l, s)),
									Y(s, { code: k.not_finite, message: f.message }),
									o.dirty())
								: xe.assertNever(f);
		return { status: o.value, value: l.data };
	}
	gte(l, c) {
		return this.setLimit("min", l, !0, W.toString(c));
	}
	gt(l, c) {
		return this.setLimit("min", l, !1, W.toString(c));
	}
	lte(l, c) {
		return this.setLimit("max", l, !0, W.toString(c));
	}
	lt(l, c) {
		return this.setLimit("max", l, !1, W.toString(c));
	}
	setLimit(l, c, s, o) {
		return new $a({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: l, value: c, inclusive: s, message: W.toString(o) },
			],
		});
	}
	_addCheck(l) {
		return new $a({ ...this._def, checks: [...this._def.checks, l] });
	}
	int(l) {
		return this._addCheck({ kind: "int", message: W.toString(l) });
	}
	positive(l) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !1,
			message: W.toString(l),
		});
	}
	negative(l) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !1,
			message: W.toString(l),
		});
	}
	nonpositive(l) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !0,
			message: W.toString(l),
		});
	}
	nonnegative(l) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !0,
			message: W.toString(l),
		});
	}
	multipleOf(l, c) {
		return this._addCheck({
			kind: "multipleOf",
			value: l,
			message: W.toString(c),
		});
	}
	finite(l) {
		return this._addCheck({ kind: "finite", message: W.toString(l) });
	}
	safe(l) {
		return this._addCheck({
			kind: "min",
			inclusive: !0,
			value: Number.MIN_SAFE_INTEGER,
			message: W.toString(l),
		})._addCheck({
			kind: "max",
			inclusive: !0,
			value: Number.MAX_SAFE_INTEGER,
			message: W.toString(l),
		});
	}
	get minValue() {
		let l = null;
		for (const c of this._def.checks)
			c.kind === "min" && (l === null || c.value > l) && (l = c.value);
		return l;
	}
	get maxValue() {
		let l = null;
		for (const c of this._def.checks)
			c.kind === "max" && (l === null || c.value < l) && (l = c.value);
		return l;
	}
	get isInt() {
		return !!this._def.checks.find(
			(l) =>
				l.kind === "int" || (l.kind === "multipleOf" && xe.isInteger(l.value)),
		);
	}
	get isFinite() {
		let l = null,
			c = null;
		for (const s of this._def.checks) {
			if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
				return !0;
			s.kind === "min"
				? (c === null || s.value > c) && (c = s.value)
				: s.kind === "max" && (l === null || s.value < l) && (l = s.value);
		}
		return Number.isFinite(c) && Number.isFinite(l);
	}
}
$a.create = (i) =>
	new $a({
		checks: [],
		typeName: le.ZodNumber,
		coerce: (i == null ? void 0 : i.coerce) || !1,
		...se(i),
	});
class Ja extends fe {
	constructor() {
		super(...arguments), (this.min = this.gte), (this.max = this.lte);
	}
	_parse(l) {
		if (this._def.coerce)
			try {
				l.data = BigInt(l.data);
			} catch {
				return this._getInvalidInput(l);
			}
		if (this._getType(l) !== X.bigint) return this._getInvalidInput(l);
		let s;
		const o = new ct();
		for (const f of this._def.checks)
			f.kind === "min"
				? (f.inclusive ? l.data < f.value : l.data <= f.value) &&
					((s = this._getOrReturnCtx(l, s)),
					Y(s, {
						code: k.too_small,
						type: "bigint",
						minimum: f.value,
						inclusive: f.inclusive,
						message: f.message,
					}),
					o.dirty())
				: f.kind === "max"
					? (f.inclusive ? l.data > f.value : l.data >= f.value) &&
						((s = this._getOrReturnCtx(l, s)),
						Y(s, {
							code: k.too_big,
							type: "bigint",
							maximum: f.value,
							inclusive: f.inclusive,
							message: f.message,
						}),
						o.dirty())
					: f.kind === "multipleOf"
						? l.data % f.value !== BigInt(0) &&
							((s = this._getOrReturnCtx(l, s)),
							Y(s, {
								code: k.not_multiple_of,
								multipleOf: f.value,
								message: f.message,
							}),
							o.dirty())
						: xe.assertNever(f);
		return { status: o.value, value: l.data };
	}
	_getInvalidInput(l) {
		const c = this._getOrReturnCtx(l);
		return (
			Y(c, {
				code: k.invalid_type,
				expected: X.bigint,
				received: c.parsedType,
			}),
			ie
		);
	}
	gte(l, c) {
		return this.setLimit("min", l, !0, W.toString(c));
	}
	gt(l, c) {
		return this.setLimit("min", l, !1, W.toString(c));
	}
	lte(l, c) {
		return this.setLimit("max", l, !0, W.toString(c));
	}
	lt(l, c) {
		return this.setLimit("max", l, !1, W.toString(c));
	}
	setLimit(l, c, s, o) {
		return new Ja({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: l, value: c, inclusive: s, message: W.toString(o) },
			],
		});
	}
	_addCheck(l) {
		return new Ja({ ...this._def, checks: [...this._def.checks, l] });
	}
	positive(l) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !1,
			message: W.toString(l),
		});
	}
	negative(l) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !1,
			message: W.toString(l),
		});
	}
	nonpositive(l) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !0,
			message: W.toString(l),
		});
	}
	nonnegative(l) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !0,
			message: W.toString(l),
		});
	}
	multipleOf(l, c) {
		return this._addCheck({
			kind: "multipleOf",
			value: l,
			message: W.toString(c),
		});
	}
	get minValue() {
		let l = null;
		for (const c of this._def.checks)
			c.kind === "min" && (l === null || c.value > l) && (l = c.value);
		return l;
	}
	get maxValue() {
		let l = null;
		for (const c of this._def.checks)
			c.kind === "max" && (l === null || c.value < l) && (l = c.value);
		return l;
	}
}
Ja.create = (i) => {
	var l;
	return new Ja({
		checks: [],
		typeName: le.ZodBigInt,
		coerce:
			(l = i == null ? void 0 : i.coerce) !== null && l !== void 0 ? l : !1,
		...se(i),
	});
};
class xu extends fe {
	_parse(l) {
		if (
			(this._def.coerce && (l.data = !!l.data), this._getType(l) !== X.boolean)
		) {
			const s = this._getOrReturnCtx(l);
			return (
				Y(s, {
					code: k.invalid_type,
					expected: X.boolean,
					received: s.parsedType,
				}),
				ie
			);
		}
		return dt(l.data);
	}
}
xu.create = (i) =>
	new xu({
		typeName: le.ZodBoolean,
		coerce: (i == null ? void 0 : i.coerce) || !1,
		...se(i),
	});
class Tn extends fe {
	_parse(l) {
		if (
			(this._def.coerce && (l.data = new Date(l.data)),
			this._getType(l) !== X.date)
		) {
			const f = this._getOrReturnCtx(l);
			return (
				Y(f, {
					code: k.invalid_type,
					expected: X.date,
					received: f.parsedType,
				}),
				ie
			);
		}
		if (isNaN(l.data.getTime())) {
			const f = this._getOrReturnCtx(l);
			return Y(f, { code: k.invalid_date }), ie;
		}
		const s = new ct();
		let o;
		for (const f of this._def.checks)
			f.kind === "min"
				? l.data.getTime() < f.value &&
					((o = this._getOrReturnCtx(l, o)),
					Y(o, {
						code: k.too_small,
						message: f.message,
						inclusive: !0,
						exact: !1,
						minimum: f.value,
						type: "date",
					}),
					s.dirty())
				: f.kind === "max"
					? l.data.getTime() > f.value &&
						((o = this._getOrReturnCtx(l, o)),
						Y(o, {
							code: k.too_big,
							message: f.message,
							inclusive: !0,
							exact: !1,
							maximum: f.value,
							type: "date",
						}),
						s.dirty())
					: xe.assertNever(f);
		return { status: s.value, value: new Date(l.data.getTime()) };
	}
	_addCheck(l) {
		return new Tn({ ...this._def, checks: [...this._def.checks, l] });
	}
	min(l, c) {
		return this._addCheck({
			kind: "min",
			value: l.getTime(),
			message: W.toString(c),
		});
	}
	max(l, c) {
		return this._addCheck({
			kind: "max",
			value: l.getTime(),
			message: W.toString(c),
		});
	}
	get minDate() {
		let l = null;
		for (const c of this._def.checks)
			c.kind === "min" && (l === null || c.value > l) && (l = c.value);
		return l != null ? new Date(l) : null;
	}
	get maxDate() {
		let l = null;
		for (const c of this._def.checks)
			c.kind === "max" && (l === null || c.value < l) && (l = c.value);
		return l != null ? new Date(l) : null;
	}
}
Tn.create = (i) =>
	new Tn({
		checks: [],
		coerce: (i == null ? void 0 : i.coerce) || !1,
		typeName: le.ZodDate,
		...se(i),
	});
class hr extends fe {
	_parse(l) {
		if (this._getType(l) !== X.symbol) {
			const s = this._getOrReturnCtx(l);
			return (
				Y(s, {
					code: k.invalid_type,
					expected: X.symbol,
					received: s.parsedType,
				}),
				ie
			);
		}
		return dt(l.data);
	}
}
hr.create = (i) => new hr({ typeName: le.ZodSymbol, ...se(i) });
class Eu extends fe {
	_parse(l) {
		if (this._getType(l) !== X.undefined) {
			const s = this._getOrReturnCtx(l);
			return (
				Y(s, {
					code: k.invalid_type,
					expected: X.undefined,
					received: s.parsedType,
				}),
				ie
			);
		}
		return dt(l.data);
	}
}
Eu.create = (i) => new Eu({ typeName: le.ZodUndefined, ...se(i) });
class Tu extends fe {
	_parse(l) {
		if (this._getType(l) !== X.null) {
			const s = this._getOrReturnCtx(l);
			return (
				Y(s, {
					code: k.invalid_type,
					expected: X.null,
					received: s.parsedType,
				}),
				ie
			);
		}
		return dt(l.data);
	}
}
Tu.create = (i) => new Tu({ typeName: le.ZodNull, ...se(i) });
class hl extends fe {
	constructor() {
		super(...arguments), (this._any = !0);
	}
	_parse(l) {
		return dt(l.data);
	}
}
hl.create = (i) => new hl({ typeName: le.ZodAny, ...se(i) });
class xn extends fe {
	constructor() {
		super(...arguments), (this._unknown = !0);
	}
	_parse(l) {
		return dt(l.data);
	}
}
xn.create = (i) => new xn({ typeName: le.ZodUnknown, ...se(i) });
class xa extends fe {
	_parse(l) {
		const c = this._getOrReturnCtx(l);
		return (
			Y(c, { code: k.invalid_type, expected: X.never, received: c.parsedType }),
			ie
		);
	}
}
xa.create = (i) => new xa({ typeName: le.ZodNever, ...se(i) });
class mr extends fe {
	_parse(l) {
		if (this._getType(l) !== X.undefined) {
			const s = this._getOrReturnCtx(l);
			return (
				Y(s, {
					code: k.invalid_type,
					expected: X.void,
					received: s.parsedType,
				}),
				ie
			);
		}
		return dt(l.data);
	}
}
mr.create = (i) => new mr({ typeName: le.ZodVoid, ...se(i) });
class Lt extends fe {
	_parse(l) {
		const { ctx: c, status: s } = this._processInputParams(l),
			o = this._def;
		if (c.parsedType !== X.array)
			return (
				Y(c, {
					code: k.invalid_type,
					expected: X.array,
					received: c.parsedType,
				}),
				ie
			);
		if (o.exactLength !== null) {
			const p = c.data.length > o.exactLength.value,
				v = c.data.length < o.exactLength.value;
			(p || v) &&
				(Y(c, {
					code: p ? k.too_big : k.too_small,
					minimum: v ? o.exactLength.value : void 0,
					maximum: p ? o.exactLength.value : void 0,
					type: "array",
					inclusive: !0,
					exact: !0,
					message: o.exactLength.message,
				}),
				s.dirty());
		}
		if (
			(o.minLength !== null &&
				c.data.length < o.minLength.value &&
				(Y(c, {
					code: k.too_small,
					minimum: o.minLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: o.minLength.message,
				}),
				s.dirty()),
			o.maxLength !== null &&
				c.data.length > o.maxLength.value &&
				(Y(c, {
					code: k.too_big,
					maximum: o.maxLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: o.maxLength.message,
				}),
				s.dirty()),
			c.common.async)
		)
			return Promise.all(
				[...c.data].map((p, v) => o.type._parseAsync(new Pt(c, p, c.path, v))),
			).then((p) => ct.mergeArray(s, p));
		const f = [...c.data].map((p, v) =>
			o.type._parseSync(new Pt(c, p, c.path, v)),
		);
		return ct.mergeArray(s, f);
	}
	get element() {
		return this._def.type;
	}
	min(l, c) {
		return new Lt({
			...this._def,
			minLength: { value: l, message: W.toString(c) },
		});
	}
	max(l, c) {
		return new Lt({
			...this._def,
			maxLength: { value: l, message: W.toString(c) },
		});
	}
	length(l, c) {
		return new Lt({
			...this._def,
			exactLength: { value: l, message: W.toString(c) },
		});
	}
	nonempty(l) {
		return this.min(1, l);
	}
}
Lt.create = (i, l) =>
	new Lt({
		type: i,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: le.ZodArray,
		...se(l),
	});
function sl(i) {
	if (i instanceof ke) {
		const l = {};
		for (const c in i.shape) {
			const s = i.shape[c];
			l[c] = Ft.create(sl(s));
		}
		return new ke({ ...i._def, shape: () => l });
	} else
		return i instanceof Lt
			? new Lt({ ...i._def, type: sl(i.element) })
			: i instanceof Ft
				? Ft.create(sl(i.unwrap()))
				: i instanceof Fa
					? Fa.create(sl(i.unwrap()))
					: i instanceof It
						? It.create(i.items.map((l) => sl(l)))
						: i;
}
class ke extends fe {
	constructor() {
		super(...arguments),
			(this._cached = null),
			(this.nonstrict = this.passthrough),
			(this.augment = this.extend);
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const l = this._def.shape(),
			c = xe.objectKeys(l);
		return (this._cached = { shape: l, keys: c });
	}
	_parse(l) {
		if (this._getType(l) !== X.object) {
			const m = this._getOrReturnCtx(l);
			return (
				Y(m, {
					code: k.invalid_type,
					expected: X.object,
					received: m.parsedType,
				}),
				ie
			);
		}
		const { status: s, ctx: o } = this._processInputParams(l),
			{ shape: f, keys: p } = this._getCached(),
			v = [];
		if (
			!(this._def.catchall instanceof xa && this._def.unknownKeys === "strip")
		)
			for (const m in o.data) p.includes(m) || v.push(m);
		const h = [];
		for (const m of p) {
			const b = f[m],
				_ = o.data[m];
			h.push({
				key: { status: "valid", value: m },
				value: b._parse(new Pt(o, _, o.path, m)),
				alwaysSet: m in o.data,
			});
		}
		if (this._def.catchall instanceof xa) {
			const m = this._def.unknownKeys;
			if (m === "passthrough")
				for (const b of v)
					h.push({
						key: { status: "valid", value: b },
						value: { status: "valid", value: o.data[b] },
					});
			else if (m === "strict")
				v.length > 0 &&
					(Y(o, { code: k.unrecognized_keys, keys: v }), s.dirty());
			else if (m !== "strip")
				throw new Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			const m = this._def.catchall;
			for (const b of v) {
				const _ = o.data[b];
				h.push({
					key: { status: "valid", value: b },
					value: m._parse(new Pt(o, _, o.path, b)),
					alwaysSet: b in o.data,
				});
			}
		}
		return o.common.async
			? Promise.resolve()
					.then(async () => {
						const m = [];
						for (const b of h) {
							const _ = await b.key,
								S = await b.value;
							m.push({ key: _, value: S, alwaysSet: b.alwaysSet });
						}
						return m;
					})
					.then((m) => ct.mergeObjectSync(s, m))
			: ct.mergeObjectSync(s, h);
	}
	get shape() {
		return this._def.shape();
	}
	strict(l) {
		return (
			W.errToObj,
			new ke({
				...this._def,
				unknownKeys: "strict",
				...(l !== void 0
					? {
							errorMap: (c, s) => {
								var o, f, p, v;
								const h =
									(p =
										(f = (o = this._def).errorMap) === null || f === void 0
											? void 0
											: f.call(o, c, s).message) !== null && p !== void 0
										? p
										: s.defaultError;
								return c.code === "unrecognized_keys"
									? {
											message:
												(v = W.errToObj(l).message) !== null && v !== void 0
													? v
													: h,
										}
									: { message: h };
							},
						}
					: {}),
			})
		);
	}
	strip() {
		return new ke({ ...this._def, unknownKeys: "strip" });
	}
	passthrough() {
		return new ke({ ...this._def, unknownKeys: "passthrough" });
	}
	extend(l) {
		return new ke({
			...this._def,
			shape: () => ({ ...this._def.shape(), ...l }),
		});
	}
	merge(l) {
		return new ke({
			unknownKeys: l._def.unknownKeys,
			catchall: l._def.catchall,
			shape: () => ({ ...this._def.shape(), ...l._def.shape() }),
			typeName: le.ZodObject,
		});
	}
	setKey(l, c) {
		return this.augment({ [l]: c });
	}
	catchall(l) {
		return new ke({ ...this._def, catchall: l });
	}
	pick(l) {
		const c = {};
		return (
			xe.objectKeys(l).forEach((s) => {
				l[s] && this.shape[s] && (c[s] = this.shape[s]);
			}),
			new ke({ ...this._def, shape: () => c })
		);
	}
	omit(l) {
		const c = {};
		return (
			xe.objectKeys(this.shape).forEach((s) => {
				l[s] || (c[s] = this.shape[s]);
			}),
			new ke({ ...this._def, shape: () => c })
		);
	}
	deepPartial() {
		return sl(this);
	}
	partial(l) {
		const c = {};
		return (
			xe.objectKeys(this.shape).forEach((s) => {
				const o = this.shape[s];
				l && !l[s] ? (c[s] = o) : (c[s] = o.optional());
			}),
			new ke({ ...this._def, shape: () => c })
		);
	}
	required(l) {
		const c = {};
		return (
			xe.objectKeys(this.shape).forEach((s) => {
				if (l && !l[s]) c[s] = this.shape[s];
				else {
					let f = this.shape[s];
					for (; f instanceof Ft; ) f = f._def.innerType;
					c[s] = f;
				}
			}),
			new ke({ ...this._def, shape: () => c })
		);
	}
	keyof() {
		return Xm(xe.objectKeys(this.shape));
	}
}
ke.create = (i, l) =>
	new ke({
		shape: () => i,
		unknownKeys: "strip",
		catchall: xa.create(),
		typeName: le.ZodObject,
		...se(l),
	});
ke.strictCreate = (i, l) =>
	new ke({
		shape: () => i,
		unknownKeys: "strict",
		catchall: xa.create(),
		typeName: le.ZodObject,
		...se(l),
	});
ke.lazycreate = (i, l) =>
	new ke({
		shape: i,
		unknownKeys: "strip",
		catchall: xa.create(),
		typeName: le.ZodObject,
		...se(l),
	});
class Au extends fe {
	_parse(l) {
		const { ctx: c } = this._processInputParams(l),
			s = this._def.options;
		function o(f) {
			for (const v of f) if (v.result.status === "valid") return v.result;
			for (const v of f)
				if (v.result.status === "dirty")
					return c.common.issues.push(...v.ctx.common.issues), v.result;
			const p = f.map((v) => new Et(v.ctx.common.issues));
			return Y(c, { code: k.invalid_union, unionErrors: p }), ie;
		}
		if (c.common.async)
			return Promise.all(
				s.map(async (f) => {
					const p = { ...c, common: { ...c.common, issues: [] }, parent: null };
					return {
						result: await f._parseAsync({
							data: c.data,
							path: c.path,
							parent: p,
						}),
						ctx: p,
					};
				}),
			).then(o);
		{
			let f;
			const p = [];
			for (const h of s) {
				const m = { ...c, common: { ...c.common, issues: [] }, parent: null },
					b = h._parseSync({ data: c.data, path: c.path, parent: m });
				if (b.status === "valid") return b;
				b.status === "dirty" && !f && (f = { result: b, ctx: m }),
					m.common.issues.length && p.push(m.common.issues);
			}
			if (f) return c.common.issues.push(...f.ctx.common.issues), f.result;
			const v = p.map((h) => new Et(h));
			return Y(c, { code: k.invalid_union, unionErrors: v }), ie;
		}
	}
	get options() {
		return this._def.options;
	}
}
Au.create = (i, l) => new Au({ options: i, typeName: le.ZodUnion, ...se(l) });
const ba = (i) =>
	i instanceof wu
		? ba(i.schema)
		: i instanceof Vt
			? ba(i.innerType())
			: i instanceof Cu
				? [i.value]
				: i instanceof Wa
					? i.options
					: i instanceof Nu
						? xe.objectValues(i.enum)
						: i instanceof zu
							? ba(i._def.innerType)
							: i instanceof Eu
								? [void 0]
								: i instanceof Tu
									? [null]
									: i instanceof Ft
										? [void 0, ...ba(i.unwrap())]
										: i instanceof Fa
											? [null, ...ba(i.unwrap())]
											: i instanceof uo || i instanceof Du
												? ba(i.unwrap())
												: i instanceof Mu
													? ba(i._def.innerType)
													: [];
class _r extends fe {
	_parse(l) {
		const { ctx: c } = this._processInputParams(l);
		if (c.parsedType !== X.object)
			return (
				Y(c, {
					code: k.invalid_type,
					expected: X.object,
					received: c.parsedType,
				}),
				ie
			);
		const s = this.discriminator,
			o = c.data[s],
			f = this.optionsMap.get(o);
		return f
			? c.common.async
				? f._parseAsync({ data: c.data, path: c.path, parent: c })
				: f._parseSync({ data: c.data, path: c.path, parent: c })
			: (Y(c, {
					code: k.invalid_union_discriminator,
					options: Array.from(this.optionsMap.keys()),
					path: [s],
				}),
				ie);
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
	static create(l, c, s) {
		const o = new Map();
		for (const f of c) {
			const p = ba(f.shape[l]);
			if (!p.length)
				throw new Error(
					`A discriminator value for key \`${l}\` could not be extracted from all schema options`,
				);
			for (const v of p) {
				if (o.has(v))
					throw new Error(
						`Discriminator property ${String(l)} has duplicate value ${String(v)}`,
					);
				o.set(v, f);
			}
		}
		return new _r({
			typeName: le.ZodDiscriminatedUnion,
			discriminator: l,
			options: c,
			optionsMap: o,
			...se(s),
		});
	}
}
function Ws(i, l) {
	const c = _a(i),
		s = _a(l);
	if (i === l) return { valid: !0, data: i };
	if (c === X.object && s === X.object) {
		const o = xe.objectKeys(l),
			f = xe.objectKeys(i).filter((v) => o.indexOf(v) !== -1),
			p = { ...i, ...l };
		for (const v of f) {
			const h = Ws(i[v], l[v]);
			if (!h.valid) return { valid: !1 };
			p[v] = h.data;
		}
		return { valid: !0, data: p };
	} else if (c === X.array && s === X.array) {
		if (i.length !== l.length) return { valid: !1 };
		const o = [];
		for (let f = 0; f < i.length; f++) {
			const p = i[f],
				v = l[f],
				h = Ws(p, v);
			if (!h.valid) return { valid: !1 };
			o.push(h.data);
		}
		return { valid: !0, data: o };
	} else
		return c === X.date && s === X.date && +i == +l
			? { valid: !0, data: i }
			: { valid: !1 };
}
class Ru extends fe {
	_parse(l) {
		const { status: c, ctx: s } = this._processInputParams(l),
			o = (f, p) => {
				if ($s(f) || $s(p)) return ie;
				const v = Ws(f.value, p.value);
				return v.valid
					? ((Js(f) || Js(p)) && c.dirty(), { status: c.value, value: v.data })
					: (Y(s, { code: k.invalid_intersection_types }), ie);
			};
		return s.common.async
			? Promise.all([
					this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
					this._def.right._parseAsync({
						data: s.data,
						path: s.path,
						parent: s,
					}),
				]).then(([f, p]) => o(f, p))
			: o(
					this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
					this._def.right._parseSync({ data: s.data, path: s.path, parent: s }),
				);
	}
}
Ru.create = (i, l, c) =>
	new Ru({ left: i, right: l, typeName: le.ZodIntersection, ...se(c) });
class It extends fe {
	_parse(l) {
		const { status: c, ctx: s } = this._processInputParams(l);
		if (s.parsedType !== X.array)
			return (
				Y(s, {
					code: k.invalid_type,
					expected: X.array,
					received: s.parsedType,
				}),
				ie
			);
		if (s.data.length < this._def.items.length)
			return (
				Y(s, {
					code: k.too_small,
					minimum: this._def.items.length,
					inclusive: !0,
					exact: !1,
					type: "array",
				}),
				ie
			);
		!this._def.rest &&
			s.data.length > this._def.items.length &&
			(Y(s, {
				code: k.too_big,
				maximum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: "array",
			}),
			c.dirty());
		const f = [...s.data]
			.map((p, v) => {
				const h = this._def.items[v] || this._def.rest;
				return h ? h._parse(new Pt(s, p, s.path, v)) : null;
			})
			.filter((p) => !!p);
		return s.common.async
			? Promise.all(f).then((p) => ct.mergeArray(c, p))
			: ct.mergeArray(c, f);
	}
	get items() {
		return this._def.items;
	}
	rest(l) {
		return new It({ ...this._def, rest: l });
	}
}
It.create = (i, l) => {
	if (!Array.isArray(i))
		throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new It({ items: i, typeName: le.ZodTuple, rest: null, ...se(l) });
};
class Ou extends fe {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(l) {
		const { status: c, ctx: s } = this._processInputParams(l);
		if (s.parsedType !== X.object)
			return (
				Y(s, {
					code: k.invalid_type,
					expected: X.object,
					received: s.parsedType,
				}),
				ie
			);
		const o = [],
			f = this._def.keyType,
			p = this._def.valueType;
		for (const v in s.data)
			o.push({
				key: f._parse(new Pt(s, v, s.path, v)),
				value: p._parse(new Pt(s, s.data[v], s.path, v)),
				alwaysSet: v in s.data,
			});
		return s.common.async
			? ct.mergeObjectAsync(c, o)
			: ct.mergeObjectSync(c, o);
	}
	get element() {
		return this._def.valueType;
	}
	static create(l, c, s) {
		return c instanceof fe
			? new Ou({ keyType: l, valueType: c, typeName: le.ZodRecord, ...se(s) })
			: new Ou({
					keyType: qt.create(),
					valueType: l,
					typeName: le.ZodRecord,
					...se(c),
				});
	}
}
class vr extends fe {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(l) {
		const { status: c, ctx: s } = this._processInputParams(l);
		if (s.parsedType !== X.map)
			return (
				Y(s, { code: k.invalid_type, expected: X.map, received: s.parsedType }),
				ie
			);
		const o = this._def.keyType,
			f = this._def.valueType,
			p = [...s.data.entries()].map(([v, h], m) => ({
				key: o._parse(new Pt(s, v, s.path, [m, "key"])),
				value: f._parse(new Pt(s, h, s.path, [m, "value"])),
			}));
		if (s.common.async) {
			const v = new Map();
			return Promise.resolve().then(async () => {
				for (const h of p) {
					const m = await h.key,
						b = await h.value;
					if (m.status === "aborted" || b.status === "aborted") return ie;
					(m.status === "dirty" || b.status === "dirty") && c.dirty(),
						v.set(m.value, b.value);
				}
				return { status: c.value, value: v };
			});
		} else {
			const v = new Map();
			for (const h of p) {
				const m = h.key,
					b = h.value;
				if (m.status === "aborted" || b.status === "aborted") return ie;
				(m.status === "dirty" || b.status === "dirty") && c.dirty(),
					v.set(m.value, b.value);
			}
			return { status: c.value, value: v };
		}
	}
}
vr.create = (i, l, c) =>
	new vr({ valueType: l, keyType: i, typeName: le.ZodMap, ...se(c) });
class An extends fe {
	_parse(l) {
		const { status: c, ctx: s } = this._processInputParams(l);
		if (s.parsedType !== X.set)
			return (
				Y(s, { code: k.invalid_type, expected: X.set, received: s.parsedType }),
				ie
			);
		const o = this._def;
		o.minSize !== null &&
			s.data.size < o.minSize.value &&
			(Y(s, {
				code: k.too_small,
				minimum: o.minSize.value,
				type: "set",
				inclusive: !0,
				exact: !1,
				message: o.minSize.message,
			}),
			c.dirty()),
			o.maxSize !== null &&
				s.data.size > o.maxSize.value &&
				(Y(s, {
					code: k.too_big,
					maximum: o.maxSize.value,
					type: "set",
					inclusive: !0,
					exact: !1,
					message: o.maxSize.message,
				}),
				c.dirty());
		const f = this._def.valueType;
		function p(h) {
			const m = new Set();
			for (const b of h) {
				if (b.status === "aborted") return ie;
				b.status === "dirty" && c.dirty(), m.add(b.value);
			}
			return { status: c.value, value: m };
		}
		const v = [...s.data.values()].map((h, m) =>
			f._parse(new Pt(s, h, s.path, m)),
		);
		return s.common.async ? Promise.all(v).then((h) => p(h)) : p(v);
	}
	min(l, c) {
		return new An({
			...this._def,
			minSize: { value: l, message: W.toString(c) },
		});
	}
	max(l, c) {
		return new An({
			...this._def,
			maxSize: { value: l, message: W.toString(c) },
		});
	}
	size(l, c) {
		return this.min(l, c).max(l, c);
	}
	nonempty(l) {
		return this.min(1, l);
	}
}
An.create = (i, l) =>
	new An({
		valueType: i,
		minSize: null,
		maxSize: null,
		typeName: le.ZodSet,
		...se(l),
	});
class fl extends fe {
	constructor() {
		super(...arguments), (this.validate = this.implement);
	}
	_parse(l) {
		const { ctx: c } = this._processInputParams(l);
		if (c.parsedType !== X.function)
			return (
				Y(c, {
					code: k.invalid_type,
					expected: X.function,
					received: c.parsedType,
				}),
				ie
			);
		function s(v, h) {
			return fr({
				data: v,
				path: c.path,
				errorMaps: [
					c.common.contextualErrorMap,
					c.schemaErrorMap,
					or(),
					dl,
				].filter((m) => !!m),
				issueData: { code: k.invalid_arguments, argumentsError: h },
			});
		}
		function o(v, h) {
			return fr({
				data: v,
				path: c.path,
				errorMaps: [
					c.common.contextualErrorMap,
					c.schemaErrorMap,
					or(),
					dl,
				].filter((m) => !!m),
				issueData: { code: k.invalid_return_type, returnTypeError: h },
			});
		}
		const f = { errorMap: c.common.contextualErrorMap },
			p = c.data;
		if (this._def.returns instanceof ml) {
			const v = this;
			return dt(async function (...h) {
				const m = new Et([]),
					b = await v._def.args.parseAsync(h, f).catch((R) => {
						throw (m.addIssue(s(h, R)), m);
					}),
					_ = await Reflect.apply(p, this, b);
				return await v._def.returns._def.type.parseAsync(_, f).catch((R) => {
					throw (m.addIssue(o(_, R)), m);
				});
			});
		} else {
			const v = this;
			return dt(function (...h) {
				const m = v._def.args.safeParse(h, f);
				if (!m.success) throw new Et([s(h, m.error)]);
				const b = Reflect.apply(p, this, m.data),
					_ = v._def.returns.safeParse(b, f);
				if (!_.success) throw new Et([o(b, _.error)]);
				return _.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...l) {
		return new fl({ ...this._def, args: It.create(l).rest(xn.create()) });
	}
	returns(l) {
		return new fl({ ...this._def, returns: l });
	}
	implement(l) {
		return this.parse(l);
	}
	strictImplement(l) {
		return this.parse(l);
	}
	static create(l, c, s) {
		return new fl({
			args: l || It.create([]).rest(xn.create()),
			returns: c || xn.create(),
			typeName: le.ZodFunction,
			...se(s),
		});
	}
}
class wu extends fe {
	get schema() {
		return this._def.getter();
	}
	_parse(l) {
		const { ctx: c } = this._processInputParams(l);
		return this._def.getter()._parse({ data: c.data, path: c.path, parent: c });
	}
}
wu.create = (i, l) => new wu({ getter: i, typeName: le.ZodLazy, ...se(l) });
class Cu extends fe {
	_parse(l) {
		if (l.data !== this._def.value) {
			const c = this._getOrReturnCtx(l);
			return (
				Y(c, {
					received: c.data,
					code: k.invalid_literal,
					expected: this._def.value,
				}),
				ie
			);
		}
		return { status: "valid", value: l.data };
	}
	get value() {
		return this._def.value;
	}
}
Cu.create = (i, l) => new Cu({ value: i, typeName: le.ZodLiteral, ...se(l) });
function Xm(i, l) {
	return new Wa({ values: i, typeName: le.ZodEnum, ...se(l) });
}
class Wa extends fe {
	constructor() {
		super(...arguments), gu.set(this, void 0);
	}
	_parse(l) {
		if (typeof l.data != "string") {
			const c = this._getOrReturnCtx(l),
				s = this._def.values;
			return (
				Y(c, {
					expected: xe.joinValues(s),
					received: c.parsedType,
					code: k.invalid_type,
				}),
				ie
			);
		}
		if (
			(dr(this, gu) || Lm(this, gu, new Set(this._def.values)),
			!dr(this, gu).has(l.data))
		) {
			const c = this._getOrReturnCtx(l),
				s = this._def.values;
			return (
				Y(c, { received: c.data, code: k.invalid_enum_value, options: s }), ie
			);
		}
		return dt(l.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const l = {};
		for (const c of this._def.values) l[c] = c;
		return l;
	}
	get Values() {
		const l = {};
		for (const c of this._def.values) l[c] = c;
		return l;
	}
	get Enum() {
		const l = {};
		for (const c of this._def.values) l[c] = c;
		return l;
	}
	extract(l, c = this._def) {
		return Wa.create(l, { ...this._def, ...c });
	}
	exclude(l, c = this._def) {
		return Wa.create(
			this.options.filter((s) => !l.includes(s)),
			{ ...this._def, ...c },
		);
	}
}
gu = new WeakMap();
Wa.create = Xm;
class Nu extends fe {
	constructor() {
		super(...arguments), bu.set(this, void 0);
	}
	_parse(l) {
		const c = xe.getValidEnumValues(this._def.values),
			s = this._getOrReturnCtx(l);
		if (s.parsedType !== X.string && s.parsedType !== X.number) {
			const o = xe.objectValues(c);
			return (
				Y(s, {
					expected: xe.joinValues(o),
					received: s.parsedType,
					code: k.invalid_type,
				}),
				ie
			);
		}
		if (
			(dr(this, bu) ||
				Lm(this, bu, new Set(xe.getValidEnumValues(this._def.values))),
			!dr(this, bu).has(l.data))
		) {
			const o = xe.objectValues(c);
			return (
				Y(s, { received: s.data, code: k.invalid_enum_value, options: o }), ie
			);
		}
		return dt(l.data);
	}
	get enum() {
		return this._def.values;
	}
}
bu = new WeakMap();
Nu.create = (i, l) =>
	new Nu({ values: i, typeName: le.ZodNativeEnum, ...se(l) });
class ml extends fe {
	unwrap() {
		return this._def.type;
	}
	_parse(l) {
		const { ctx: c } = this._processInputParams(l);
		if (c.parsedType !== X.promise && c.common.async === !1)
			return (
				Y(c, {
					code: k.invalid_type,
					expected: X.promise,
					received: c.parsedType,
				}),
				ie
			);
		const s = c.parsedType === X.promise ? c.data : Promise.resolve(c.data);
		return dt(
			s.then((o) =>
				this._def.type.parseAsync(o, {
					path: c.path,
					errorMap: c.common.contextualErrorMap,
				}),
			),
		);
	}
}
ml.create = (i, l) => new ml({ type: i, typeName: le.ZodPromise, ...se(l) });
class Vt extends fe {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === le.ZodEffects
			? this._def.schema.sourceType()
			: this._def.schema;
	}
	_parse(l) {
		const { status: c, ctx: s } = this._processInputParams(l),
			o = this._def.effect || null,
			f = {
				addIssue: (p) => {
					Y(s, p), p.fatal ? c.abort() : c.dirty();
				},
				get path() {
					return s.path;
				},
			};
		if (((f.addIssue = f.addIssue.bind(f)), o.type === "preprocess")) {
			const p = o.transform(s.data, f);
			if (s.common.async)
				return Promise.resolve(p).then(async (v) => {
					if (c.value === "aborted") return ie;
					const h = await this._def.schema._parseAsync({
						data: v,
						path: s.path,
						parent: s,
					});
					return h.status === "aborted"
						? ie
						: h.status === "dirty" || c.value === "dirty"
							? ol(h.value)
							: h;
				});
			{
				if (c.value === "aborted") return ie;
				const v = this._def.schema._parseSync({
					data: p,
					path: s.path,
					parent: s,
				});
				return v.status === "aborted"
					? ie
					: v.status === "dirty" || c.value === "dirty"
						? ol(v.value)
						: v;
			}
		}
		if (o.type === "refinement") {
			const p = (v) => {
				const h = o.refinement(v, f);
				if (s.common.async) return Promise.resolve(h);
				if (h instanceof Promise)
					throw new Error(
						"Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				return v;
			};
			if (s.common.async === !1) {
				const v = this._def.schema._parseSync({
					data: s.data,
					path: s.path,
					parent: s,
				});
				return v.status === "aborted"
					? ie
					: (v.status === "dirty" && c.dirty(),
						p(v.value),
						{ status: c.value, value: v.value });
			} else
				return this._def.schema
					._parseAsync({ data: s.data, path: s.path, parent: s })
					.then((v) =>
						v.status === "aborted"
							? ie
							: (v.status === "dirty" && c.dirty(),
								p(v.value).then(() => ({ status: c.value, value: v.value }))),
					);
		}
		if (o.type === "transform")
			if (s.common.async === !1) {
				const p = this._def.schema._parseSync({
					data: s.data,
					path: s.path,
					parent: s,
				});
				if (!En(p)) return p;
				const v = o.transform(p.value, f);
				if (v instanceof Promise)
					throw new Error(
						"Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				return { status: c.value, value: v };
			} else
				return this._def.schema
					._parseAsync({ data: s.data, path: s.path, parent: s })
					.then((p) =>
						En(p)
							? Promise.resolve(o.transform(p.value, f)).then((v) => ({
									status: c.value,
									value: v,
								}))
							: p,
					);
		xe.assertNever(o);
	}
}
Vt.create = (i, l, c) =>
	new Vt({ schema: i, typeName: le.ZodEffects, effect: l, ...se(c) });
Vt.createWithPreprocess = (i, l, c) =>
	new Vt({
		schema: l,
		effect: { type: "preprocess", transform: i },
		typeName: le.ZodEffects,
		...se(c),
	});
class Ft extends fe {
	_parse(l) {
		return this._getType(l) === X.undefined
			? dt(void 0)
			: this._def.innerType._parse(l);
	}
	unwrap() {
		return this._def.innerType;
	}
}
Ft.create = (i, l) =>
	new Ft({ innerType: i, typeName: le.ZodOptional, ...se(l) });
class Fa extends fe {
	_parse(l) {
		return this._getType(l) === X.null
			? dt(null)
			: this._def.innerType._parse(l);
	}
	unwrap() {
		return this._def.innerType;
	}
}
Fa.create = (i, l) =>
	new Fa({ innerType: i, typeName: le.ZodNullable, ...se(l) });
class zu extends fe {
	_parse(l) {
		const { ctx: c } = this._processInputParams(l);
		let s = c.data;
		return (
			c.parsedType === X.undefined && (s = this._def.defaultValue()),
			this._def.innerType._parse({ data: s, path: c.path, parent: c })
		);
	}
	removeDefault() {
		return this._def.innerType;
	}
}
zu.create = (i, l) =>
	new zu({
		innerType: i,
		typeName: le.ZodDefault,
		defaultValue: typeof l.default == "function" ? l.default : () => l.default,
		...se(l),
	});
class Mu extends fe {
	_parse(l) {
		const { ctx: c } = this._processInputParams(l),
			s = { ...c, common: { ...c.common, issues: [] } },
			o = this._def.innerType._parse({
				data: s.data,
				path: s.path,
				parent: { ...s },
			});
		return Su(o)
			? o.then((f) => ({
					status: "valid",
					value:
						f.status === "valid"
							? f.value
							: this._def.catchValue({
									get error() {
										return new Et(s.common.issues);
									},
									input: s.data,
								}),
				}))
			: {
					status: "valid",
					value:
						o.status === "valid"
							? o.value
							: this._def.catchValue({
									get error() {
										return new Et(s.common.issues);
									},
									input: s.data,
								}),
				};
	}
	removeCatch() {
		return this._def.innerType;
	}
}
Mu.create = (i, l) =>
	new Mu({
		innerType: i,
		typeName: le.ZodCatch,
		catchValue: typeof l.catch == "function" ? l.catch : () => l.catch,
		...se(l),
	});
class yr extends fe {
	_parse(l) {
		if (this._getType(l) !== X.nan) {
			const s = this._getOrReturnCtx(l);
			return (
				Y(s, { code: k.invalid_type, expected: X.nan, received: s.parsedType }),
				ie
			);
		}
		return { status: "valid", value: l.data };
	}
}
yr.create = (i) => new yr({ typeName: le.ZodNaN, ...se(i) });
const Ng = Symbol("zod_brand");
class uo extends fe {
	_parse(l) {
		const { ctx: c } = this._processInputParams(l),
			s = c.data;
		return this._def.type._parse({ data: s, path: c.path, parent: c });
	}
	unwrap() {
		return this._def.type;
	}
}
class Hu extends fe {
	_parse(l) {
		const { status: c, ctx: s } = this._processInputParams(l);
		if (s.common.async)
			return (async () => {
				const f = await this._def.in._parseAsync({
					data: s.data,
					path: s.path,
					parent: s,
				});
				return f.status === "aborted"
					? ie
					: f.status === "dirty"
						? (c.dirty(), ol(f.value))
						: this._def.out._parseAsync({
								data: f.value,
								path: s.path,
								parent: s,
							});
			})();
		{
			const o = this._def.in._parseSync({
				data: s.data,
				path: s.path,
				parent: s,
			});
			return o.status === "aborted"
				? ie
				: o.status === "dirty"
					? (c.dirty(), { status: "dirty", value: o.value })
					: this._def.out._parseSync({
							data: o.value,
							path: s.path,
							parent: s,
						});
		}
	}
	static create(l, c) {
		return new Hu({ in: l, out: c, typeName: le.ZodPipeline });
	}
}
class Du extends fe {
	_parse(l) {
		const c = this._def.innerType._parse(l),
			s = (o) => (En(o) && (o.value = Object.freeze(o.value)), o);
		return Su(c) ? c.then((o) => s(o)) : s(c);
	}
	unwrap() {
		return this._def.innerType;
	}
}
Du.create = (i, l) =>
	new Du({ innerType: i, typeName: le.ZodReadonly, ...se(l) });
function Qm(i, l = {}, c) {
	return i
		? hl.create().superRefine((s, o) => {
				var f, p;
				if (!i(s)) {
					const v =
							typeof l == "function"
								? l(s)
								: typeof l == "string"
									? { message: l }
									: l,
						h =
							(p = (f = v.fatal) !== null && f !== void 0 ? f : c) !== null &&
							p !== void 0
								? p
								: !0,
						m = typeof v == "string" ? { message: v } : v;
					o.addIssue({ code: "custom", ...m, fatal: h });
				}
			})
		: hl.create();
}
const zg = { object: ke.lazycreate };
var le;
(function (i) {
	(i.ZodString = "ZodString"),
		(i.ZodNumber = "ZodNumber"),
		(i.ZodNaN = "ZodNaN"),
		(i.ZodBigInt = "ZodBigInt"),
		(i.ZodBoolean = "ZodBoolean"),
		(i.ZodDate = "ZodDate"),
		(i.ZodSymbol = "ZodSymbol"),
		(i.ZodUndefined = "ZodUndefined"),
		(i.ZodNull = "ZodNull"),
		(i.ZodAny = "ZodAny"),
		(i.ZodUnknown = "ZodUnknown"),
		(i.ZodNever = "ZodNever"),
		(i.ZodVoid = "ZodVoid"),
		(i.ZodArray = "ZodArray"),
		(i.ZodObject = "ZodObject"),
		(i.ZodUnion = "ZodUnion"),
		(i.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
		(i.ZodIntersection = "ZodIntersection"),
		(i.ZodTuple = "ZodTuple"),
		(i.ZodRecord = "ZodRecord"),
		(i.ZodMap = "ZodMap"),
		(i.ZodSet = "ZodSet"),
		(i.ZodFunction = "ZodFunction"),
		(i.ZodLazy = "ZodLazy"),
		(i.ZodLiteral = "ZodLiteral"),
		(i.ZodEnum = "ZodEnum"),
		(i.ZodEffects = "ZodEffects"),
		(i.ZodNativeEnum = "ZodNativeEnum"),
		(i.ZodOptional = "ZodOptional"),
		(i.ZodNullable = "ZodNullable"),
		(i.ZodDefault = "ZodDefault"),
		(i.ZodCatch = "ZodCatch"),
		(i.ZodPromise = "ZodPromise"),
		(i.ZodBranded = "ZodBranded"),
		(i.ZodPipeline = "ZodPipeline"),
		(i.ZodReadonly = "ZodReadonly");
})(le || (le = {}));
const Mg = (i, l = { message: `Input not instance of ${i.name}` }) =>
		Qm((c) => c instanceof i, l),
	Km = qt.create,
	$m = $a.create,
	Dg = yr.create,
	jg = Ja.create,
	Jm = xu.create,
	Ug = Tn.create,
	kg = hr.create,
	Hg = Eu.create,
	Zg = Tu.create,
	Bg = hl.create,
	qg = xn.create,
	Lg = xa.create,
	Yg = mr.create,
	Vg = Lt.create,
	Gg = ke.create,
	Xg = ke.strictCreate,
	Qg = Au.create,
	Kg = _r.create,
	$g = Ru.create,
	Jg = It.create,
	Wg = Ou.create,
	Fg = vr.create,
	Pg = An.create,
	Ig = fl.create,
	e1 = wu.create,
	t1 = Cu.create,
	a1 = Wa.create,
	n1 = Nu.create,
	l1 = ml.create,
	cm = Vt.create,
	u1 = Ft.create,
	i1 = Fa.create,
	r1 = Vt.createWithPreprocess,
	c1 = Hu.create,
	s1 = () => Km().optional(),
	o1 = () => $m().optional(),
	f1 = () => Jm().optional(),
	d1 = {
		string: (i) => qt.create({ ...i, coerce: !0 }),
		number: (i) => $a.create({ ...i, coerce: !0 }),
		boolean: (i) => xu.create({ ...i, coerce: !0 }),
		bigint: (i) => Ja.create({ ...i, coerce: !0 }),
		date: (i) => Tn.create({ ...i, coerce: !0 }),
	},
	h1 = ie;
var m1 = Object.freeze({
	__proto__: null,
	defaultErrorMap: dl,
	setErrorMap: rg,
	getErrorMap: or,
	makeIssue: fr,
	EMPTY_PATH: cg,
	addIssueToContext: Y,
	ParseStatus: ct,
	INVALID: ie,
	DIRTY: ol,
	OK: dt,
	isAborted: $s,
	isDirty: Js,
	isValid: En,
	isAsync: Su,
	get util() {
		return xe;
	},
	get objectUtil() {
		return Ks;
	},
	ZodParsedType: X,
	getParsedType: _a,
	ZodType: fe,
	datetimeRegex: Gm,
	ZodString: qt,
	ZodNumber: $a,
	ZodBigInt: Ja,
	ZodBoolean: xu,
	ZodDate: Tn,
	ZodSymbol: hr,
	ZodUndefined: Eu,
	ZodNull: Tu,
	ZodAny: hl,
	ZodUnknown: xn,
	ZodNever: xa,
	ZodVoid: mr,
	ZodArray: Lt,
	ZodObject: ke,
	ZodUnion: Au,
	ZodDiscriminatedUnion: _r,
	ZodIntersection: Ru,
	ZodTuple: It,
	ZodRecord: Ou,
	ZodMap: vr,
	ZodSet: An,
	ZodFunction: fl,
	ZodLazy: wu,
	ZodLiteral: Cu,
	ZodEnum: Wa,
	ZodNativeEnum: Nu,
	ZodPromise: ml,
	ZodEffects: Vt,
	ZodTransformer: Vt,
	ZodOptional: Ft,
	ZodNullable: Fa,
	ZodDefault: zu,
	ZodCatch: Mu,
	ZodNaN: yr,
	BRAND: Ng,
	ZodBranded: uo,
	ZodPipeline: Hu,
	ZodReadonly: Du,
	custom: Qm,
	Schema: fe,
	ZodSchema: fe,
	late: zg,
	get ZodFirstPartyTypeKind() {
		return le;
	},
	coerce: d1,
	any: Bg,
	array: Vg,
	bigint: jg,
	boolean: Jm,
	date: Ug,
	discriminatedUnion: Kg,
	effect: cm,
	enum: a1,
	function: Ig,
	instanceof: Mg,
	intersection: $g,
	lazy: e1,
	literal: t1,
	map: Fg,
	nan: Dg,
	nativeEnum: n1,
	never: Lg,
	null: Zg,
	nullable: i1,
	number: $m,
	object: Gg,
	oboolean: f1,
	onumber: o1,
	optional: u1,
	ostring: s1,
	pipeline: c1,
	preprocess: r1,
	promise: l1,
	record: Wg,
	set: Pg,
	strictObject: Xg,
	string: Km,
	symbol: kg,
	transformer: cm,
	tuple: Jg,
	undefined: Hg,
	union: Qg,
	unknown: qg,
	void: Yg,
	NEVER: h1,
	ZodIssueCode: k,
	quotelessJson: ig,
	ZodError: Et,
});
m1.Schema;
const v1 = (i) => {
	if (!i) return { error: "jsonSafeParse: string is empty", success: !1 };
	try {
		return { json: JSON.parse(i), success: !0 };
	} catch (l) {
		return (
			console.error("error parsing json", l),
			{ error: `jsonSafeParse: couldn't parse ${i}`, success: !1 }
		);
	}
};
function sm() {
	if (typeof window.crypto.randomUUID == "function")
		return window.crypto.randomUUID();
	let i = "";
	for (let l = 0; l < 36; l++)
		if ([8, 13, 18, 23].includes(l)) i = i + "-";
		else {
			const c = Math.floor(36 * Math.random());
			i = i + c.toString(36);
		}
	return i;
}
const qs = "DICE_CITY_OPTIONS",
	Wm = {
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
	Fm = C.createContext({ options: Wm, setOptions: () => {} }),
	y1 = ({ children: i }) => {
		const l = localStorage.getItem(qs);
		let c = {};
		const s = v1(l);
		s.success && (c = s.json);
		const [o, f] = C.useState({ ...Wm, ...c });
		return (
			C.useEffect(() => {
				(!o.playerId || !o.playerPassword) &&
					f((p) => {
						const v = { ...p };
						v.playerId || (v.playerId = sm()),
							v.playerPassword || (v.playerPassword = sm());
						const { ping: h, ...m } = v;
						return localStorage.setItem(qs, JSON.stringify(m)), v;
					});
			}, []),
			M.jsx(Fm.Provider, {
				value: {
					options: o,
					setOptions: (p) => {
						f((v) => {
							const h = { ...v, ...p },
								{ ping: m, ...b } = h;
							return localStorage.setItem(qs, JSON.stringify(b)), h;
						});
					},
				},
				children: i,
			})
		);
	},
	Sr = () => C.useContext(Fm),
	p1 = "modulepreload",
	g1 = function (i) {
		return "/" + i;
	},
	om = {},
	io = function (l, c, s) {
		let o = Promise.resolve();
		if (c && c.length > 0) {
			document.getElementsByTagName("link");
			const p = document.querySelector("meta[property=csp-nonce]"),
				v =
					(p == null ? void 0 : p.nonce) ||
					(p == null ? void 0 : p.getAttribute("nonce"));
			o = Promise.allSettled(
				c.map((h) => {
					if (((h = g1(h)), h in om)) return;
					om[h] = !0;
					const m = h.endsWith(".css"),
						b = m ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${h}"]${b}`)) return;
					const _ = document.createElement("link");
					if (
						((_.rel = m ? "stylesheet" : p1),
						m || (_.as = "script"),
						(_.crossOrigin = ""),
						(_.href = h),
						v && _.setAttribute("nonce", v),
						document.head.appendChild(_),
						m)
					)
						return new Promise((S, R) => {
							_.addEventListener("load", S),
								_.addEventListener("error", () =>
									R(new Error(`Unable to preload CSS for ${h}`)),
								);
						});
				}),
			);
		}
		function f(p) {
			const v = new Event("vite:preloadError", { cancelable: !0 });
			if (((v.payload = p), window.dispatchEvent(v), !v.defaultPrevented))
				throw p;
		}
		return o.then((p) => {
			for (const v of p || []) v.status === "rejected" && f(v.reason);
			return l().catch(f);
		});
	};
function Pm() {
	return M.jsx("div", {
		className: "flex h-full items-center justify-center",
		children: M.jsx("div", {
			className: "animate-spin-loading rounded-full border p-4",
			children: "Loading",
		}),
	});
}
const xb = Object.freeze(
	Object.defineProperty({ __proto__: null, default: Pm }, Symbol.toStringTag, {
		value: "Module",
	}),
);
function pr({ children: i, className: l }) {
	return M.jsx("div", {
		className: `mx-1 first:ml-0 last:mr-0 ${l || ""}`,
		children: i,
	});
}
function b1() {
	const {
			options: { playerName: i },
			setOptions: l,
		} = Sr(),
		c = C.useRef(null),
		[s, o] = C.useState(!i),
		[f, p] = C.useState(i);
	return (
		C.useEffect(() => {
			i ||
				setTimeout(() => {
					var v;
					(v = c.current) == null || v.focus();
				});
		}, []),
		M.jsx(pr, {
			children: s
				? M.jsxs("form", {
						onSubmit: (v) => {
							v.preventDefault(), f && (l({ playerName: f }), o(!1));
						},
						children: [
							M.jsx("input", {
								className:
									"rounded-l border border-r-0 border-gray-600 px-2 dark:border-gray-300 dark:bg-gray-600",
								ref: c,
								type: "text",
								onChange: (v) => {
									p(v.target.value);
								},
								value: f,
								placeholder: "Enter your name",
								required: !0,
							}),
							M.jsx("button", {
								className:
									"rounded-r border border-gray-600 px-2 py-0 dark:border-gray-300",
								children: "Save",
							}),
						],
					})
				: M.jsxs(M.Fragment, {
						children: [
							M.jsx("span", { className: "mr-2", children: i }),
							M.jsx("button", {
								className:
									"rounded border border-gray-600 px-2 py-0 dark:border-gray-300",
								onClick: () => {
									o(!0),
										setTimeout(() => {
											if (c.current) {
												const v = c.current;
												v.focus(), v.setSelectionRange(0, v.value.length);
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
function tr({ children: i, legend: l }) {
	return M.jsxs("fieldset", {
		className:
			"border border-gray-700 p-2 dark:border-gray-300 dark:bg-gray-800",
		children: [
			!!l && M.jsx("legend", { className: "-mb-2 px-0.5", children: l }),
			i,
		],
	});
}
function _1({ darkMode: i, setOptions: l }) {
	return M.jsxs(tr, {
		legend: "Colour Theme",
		children: [
			M.jsxs("label", {
				className: "block",
				children: [
					M.jsx("input", {
						onChange: () => {
							l({ darkMode: "dark" });
						},
						type: "radio",
						value: "dark",
						name: "darkMode",
						checked: i === "dark",
					}),
					" Dark Mode",
				],
			}),
			M.jsxs("label", {
				className: "block",
				children: [
					M.jsx("input", {
						onChange: () => {
							l({ darkMode: "light" });
						},
						type: "radio",
						value: "light",
						name: "darkMode",
						checked: i === "light",
					}),
					" Light Mode",
				],
			}),
			M.jsxs("label", {
				className: "block",
				children: [
					M.jsx("input", {
						onChange: () => {
							l({ darkMode: "system" });
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
function S1() {
	const { options: i, setOptions: l } = Sr(),
		c = C.useRef(new Audio("/dice-roll.mp3")).current,
		s = C.useRef(new Audio("/chord-ceg.mp3")).current;
	return M.jsx(pr, {
		className: "relative",
		children: M.jsxs("details", {
			children: [
				M.jsx("summary", { children: "Options" }),
				M.jsxs("div", {
					className:
						"absolute right-0 top-full z-30 w-max border border-gray-700 bg-white p-2 dark:border-gray-300 dark:bg-gray-800",
					children: [
						M.jsx(_1, { darkMode: i.darkMode, setOptions: l }),
						M.jsxs(tr, {
							legend: "Show Names",
							children: [
								M.jsxs("label", {
									className: "block",
									children: [
										M.jsx("input", {
											type: "checkbox",
											checked: i.showNamesPublic,
											onChange: () => {
												l({ showNamesPublic: !i.showNamesPublic });
											},
										}),
										" Public Games",
									],
								}),
								M.jsxs("label", {
									className: "block",
									children: [
										M.jsx("input", {
											type: "checkbox",
											checked: i.showNames,
											onChange: () => {
												l({ showNames: !i.showNames });
											},
										}),
										" Private Games",
									],
								}),
							],
						}),
						M.jsxs(tr, {
							legend: "Misc.",
							children: [
								M.jsxs("label", {
									className: "block",
									children: [
										M.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowCities,
											onChange: () => {
												l({ alwaysShowCities: !i.alwaysShowCities });
											},
										}),
										"  Always Show Cities",
									],
								}),
								M.jsxs("label", {
									className: "block",
									children: [
										M.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowSupply,
											onChange: () => {
												l({ alwaysShowSupply: !i.alwaysShowSupply });
											},
										}),
										"  Always Show Supply",
									],
								}),
								M.jsxs("label", {
									className: "block",
									children: [
										M.jsx("input", {
											type: "checkbox",
											checked: i.alwaysShowEstablishmentList,
											onChange: () => {
												l({
													alwaysShowEstablishmentList:
														!i.alwaysShowEstablishmentList,
												});
											},
										}),
										"  Always Show Establishment List",
									],
								}),
								M.jsxs("label", {
									className: "block",
									children: [
										M.jsx("input", {
											type: "checkbox",
											checked: !i.hideInstructions,
											onChange: () => {
												l({ hideInstructions: !i.hideInstructions });
											},
										}),
										"  Always Show Instructions",
									],
								}),
								M.jsxs("label", {
									className: "block",
									children: [
										M.jsx("input", {
											type: "checkbox",
											checked: i.newestEventFirst,
											onChange: () => {
												l({ newestEventFirst: !i.newestEventFirst });
											},
										}),
										"  Newest Turn Event On Top",
									],
								}),
								M.jsxs("label", {
									className: "flex items-center gap-4",
									children: [
										M.jsxs("div", {
											children: [
												M.jsx("span", {
													className: "font-mono",
													children: i.turnEventSummaryCount,
												}),
												M.jsx("span", {
													children: " Turn Event Summary Items",
												}),
											],
										}),
										M.jsx("input", {
											className: "max-w-24",
											type: "range",
											min: 0,
											max: 5,
											step: 1,
											value: i.turnEventSummaryCount,
											onChange: (o) => {
												l({
													turnEventSummaryCount: parseInt(
														o.currentTarget.value,
														10,
													),
												});
											},
										}),
									],
								}),
							],
						}),
						M.jsx(tr, {
							legend: "Volume",
							children: M.jsx("table", {
								className: "w-full",
								children: M.jsxs("tbody", {
									children: [
										M.jsxs("tr", {
											children: [
												M.jsx("td", { children: "Dice Roll" }),
												M.jsx("td", {
													children: M.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: M.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															value: i.diceRollVolume,
															min: 0,
															max: 1,
															step: 0.01,
															onChange: (o) => {
																l({
																	diceRollVolume: parseFloat(
																		o.currentTarget.value,
																	),
																});
															},
															onMouseUp: (o) => {
																(c.volume = parseFloat(o.currentTarget.value)),
																	c.play();
															},
														}),
													}),
												}),
											],
										}),
										M.jsxs("tr", {
											children: [
												M.jsx("td", { children: "Your Turn" }),
												M.jsx("td", {
													children: M.jsx("div", {
														className: "flex items-center justify-center pl-1",
														children: M.jsx("input", {
															className: "w-full",
															role: "cell",
															type: "range",
															min: 0,
															max: 1,
															step: 0.01,
															value: i.yourTurnVolume,
															onChange: (o) => {
																l({
																	yourTurnVolume: parseFloat(
																		o.currentTarget.value,
																	),
																});
															},
															onMouseUp: (o) => {
																(s.volume = parseFloat(o.currentTarget.value)),
																	s.play();
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
function x1() {
	const { options: i } = Sr();
	return M.jsxs("div", {
		className: "absolute mb-1 mt-2 flex w-full flex-wrap justify-end",
		children: [
			M.jsx("div", { className: "basis-1" }),
			M.jsx(b1, {}),
			typeof i.ping == "number" &&
				M.jsxs("div", { children: ["Ping: ", i.ping, " ms"] }),
			M.jsx("div", { className: "grow" }),
			M.jsx(S1, {}),
			M.jsx(pr, { children: M.jsx(lo, { to: "/", children: "Home" }) }),
			M.jsx(pr, {
				children: M.jsx("a", {
					target: "_blank",
					href: "https://github.com/nick-ng/dice-city",
					children: "GitHub",
				}),
			}),
			M.jsx("div", { className: "basis-1" }),
		],
	});
}
var ar = { exports: {} },
	E1 = ar.exports,
	fm;
function T1() {
	return (
		fm ||
			((fm = 1),
			(function (i) {
				(function (l, c, s) {
					function o(h) {
						var m = this,
							b = v();
						(m.next = function () {
							var _ = 2091639 * m.s0 + m.c * 23283064365386963e-26;
							return (m.s0 = m.s1), (m.s1 = m.s2), (m.s2 = _ - (m.c = _ | 0));
						}),
							(m.c = 1),
							(m.s0 = b(" ")),
							(m.s1 = b(" ")),
							(m.s2 = b(" ")),
							(m.s0 -= b(h)),
							m.s0 < 0 && (m.s0 += 1),
							(m.s1 -= b(h)),
							m.s1 < 0 && (m.s1 += 1),
							(m.s2 -= b(h)),
							m.s2 < 0 && (m.s2 += 1),
							(b = null);
					}
					function f(h, m) {
						return (m.c = h.c), (m.s0 = h.s0), (m.s1 = h.s1), (m.s2 = h.s2), m;
					}
					function p(h, m) {
						var b = new o(h),
							_ = m && m.state,
							S = b.next;
						return (
							(S.int32 = function () {
								return (b.next() * 4294967296) | 0;
							}),
							(S.double = function () {
								return S() + ((S() * 2097152) | 0) * 11102230246251565e-32;
							}),
							(S.quick = S),
							_ &&
								(typeof _ == "object" && f(_, b),
								(S.state = function () {
									return f(b, {});
								})),
							S
						);
					}
					function v() {
						var h = 4022871197,
							m = function (b) {
								b = String(b);
								for (var _ = 0; _ < b.length; _++) {
									h += b.charCodeAt(_);
									var S = 0.02519603282416938 * h;
									(h = S >>> 0),
										(S -= h),
										(S *= h),
										(h = S >>> 0),
										(S -= h),
										(h += S * 4294967296);
								}
								return (h >>> 0) * 23283064365386963e-26;
							};
						return m;
					}
					c && c.exports ? (c.exports = p) : (this.alea = p);
				})(E1, i);
			})(ar)),
		ar.exports
	);
}
var nr = { exports: {} },
	A1 = nr.exports,
	dm;
function R1() {
	return (
		dm ||
			((dm = 1),
			(function (i) {
				(function (l, c, s) {
					function o(v) {
						var h = this,
							m = "";
						(h.x = 0),
							(h.y = 0),
							(h.z = 0),
							(h.w = 0),
							(h.next = function () {
								var _ = h.x ^ (h.x << 11);
								return (
									(h.x = h.y),
									(h.y = h.z),
									(h.z = h.w),
									(h.w ^= (h.w >>> 19) ^ _ ^ (_ >>> 8))
								);
							}),
							v === (v | 0) ? (h.x = v) : (m += v);
						for (var b = 0; b < m.length + 64; b++)
							(h.x ^= m.charCodeAt(b) | 0), h.next();
					}
					function f(v, h) {
						return (h.x = v.x), (h.y = v.y), (h.z = v.z), (h.w = v.w), h;
					}
					function p(v, h) {
						var m = new o(v),
							b = h && h.state,
							_ = function () {
								return (m.next() >>> 0) / 4294967296;
							};
						return (
							(_.double = function () {
								do
									var S = m.next() >>> 11,
										R = (m.next() >>> 0) / 4294967296,
										N = (S + R) / (1 << 21);
								while (N === 0);
								return N;
							}),
							(_.int32 = m.next),
							(_.quick = _),
							b &&
								(typeof b == "object" && f(b, m),
								(_.state = function () {
									return f(m, {});
								})),
							_
						);
					}
					c && c.exports ? (c.exports = p) : (this.xor128 = p);
				})(A1, i);
			})(nr)),
		nr.exports
	);
}
var lr = { exports: {} },
	O1 = lr.exports,
	hm;
function w1() {
	return (
		hm ||
			((hm = 1),
			(function (i) {
				(function (l, c, s) {
					function o(v) {
						var h = this,
							m = "";
						(h.next = function () {
							var _ = h.x ^ (h.x >>> 2);
							return (
								(h.x = h.y),
								(h.y = h.z),
								(h.z = h.w),
								(h.w = h.v),
								((h.d = (h.d + 362437) | 0) +
									(h.v = h.v ^ (h.v << 4) ^ (_ ^ (_ << 1)))) |
									0
							);
						}),
							(h.x = 0),
							(h.y = 0),
							(h.z = 0),
							(h.w = 0),
							(h.v = 0),
							v === (v | 0) ? (h.x = v) : (m += v);
						for (var b = 0; b < m.length + 64; b++)
							(h.x ^= m.charCodeAt(b) | 0),
								b == m.length && (h.d = (h.x << 10) ^ (h.x >>> 4)),
								h.next();
					}
					function f(v, h) {
						return (
							(h.x = v.x),
							(h.y = v.y),
							(h.z = v.z),
							(h.w = v.w),
							(h.v = v.v),
							(h.d = v.d),
							h
						);
					}
					function p(v, h) {
						var m = new o(v),
							b = h && h.state,
							_ = function () {
								return (m.next() >>> 0) / 4294967296;
							};
						return (
							(_.double = function () {
								do
									var S = m.next() >>> 11,
										R = (m.next() >>> 0) / 4294967296,
										N = (S + R) / (1 << 21);
								while (N === 0);
								return N;
							}),
							(_.int32 = m.next),
							(_.quick = _),
							b &&
								(typeof b == "object" && f(b, m),
								(_.state = function () {
									return f(m, {});
								})),
							_
						);
					}
					c && c.exports ? (c.exports = p) : (this.xorwow = p);
				})(O1, i);
			})(lr)),
		lr.exports
	);
}
var ur = { exports: {} },
	C1 = ur.exports,
	mm;
function N1() {
	return (
		mm ||
			((mm = 1),
			(function (i) {
				(function (l, c, s) {
					function o(v) {
						var h = this;
						h.next = function () {
							var b = h.x,
								_ = h.i,
								S,
								R;
							return (
								(S = b[_]),
								(S ^= S >>> 7),
								(R = S ^ (S << 24)),
								(S = b[(_ + 1) & 7]),
								(R ^= S ^ (S >>> 10)),
								(S = b[(_ + 3) & 7]),
								(R ^= S ^ (S >>> 3)),
								(S = b[(_ + 4) & 7]),
								(R ^= S ^ (S << 7)),
								(S = b[(_ + 7) & 7]),
								(S = S ^ (S << 13)),
								(R ^= S ^ (S << 9)),
								(b[_] = R),
								(h.i = (_ + 1) & 7),
								R
							);
						};
						function m(b, _) {
							var S,
								R = [];
							if (_ === (_ | 0)) R[0] = _;
							else
								for (_ = "" + _, S = 0; S < _.length; ++S)
									R[S & 7] =
										(R[S & 7] << 15) ^
										((_.charCodeAt(S) + R[(S + 1) & 7]) << 13);
							for (; R.length < 8; ) R.push(0);
							for (S = 0; S < 8 && R[S] === 0; ++S);
							for (
								S == 8 ? (R[7] = -1) : R[S], b.x = R, b.i = 0, S = 256;
								S > 0;
								--S
							)
								b.next();
						}
						m(h, v);
					}
					function f(v, h) {
						return (h.x = v.x.slice()), (h.i = v.i), h;
					}
					function p(v, h) {
						v == null && (v = +new Date());
						var m = new o(v),
							b = h && h.state,
							_ = function () {
								return (m.next() >>> 0) / 4294967296;
							};
						return (
							(_.double = function () {
								do
									var S = m.next() >>> 11,
										R = (m.next() >>> 0) / 4294967296,
										N = (S + R) / (1 << 21);
								while (N === 0);
								return N;
							}),
							(_.int32 = m.next),
							(_.quick = _),
							b &&
								(b.x && f(b, m),
								(_.state = function () {
									return f(m, {});
								})),
							_
						);
					}
					c && c.exports ? (c.exports = p) : (this.xorshift7 = p);
				})(C1, i);
			})(ur)),
		ur.exports
	);
}
var ir = { exports: {} },
	z1 = ir.exports,
	vm;
function M1() {
	return (
		vm ||
			((vm = 1),
			(function (i) {
				(function (l, c, s) {
					function o(v) {
						var h = this;
						h.next = function () {
							var b = h.w,
								_ = h.X,
								S = h.i,
								R,
								N;
							return (
								(h.w = b = (b + 1640531527) | 0),
								(N = _[(S + 34) & 127]),
								(R = _[(S = (S + 1) & 127)]),
								(N ^= N << 13),
								(R ^= R << 17),
								(N ^= N >>> 15),
								(R ^= R >>> 12),
								(N = _[S] = N ^ R),
								(h.i = S),
								(N + (b ^ (b >>> 16))) | 0
							);
						};
						function m(b, _) {
							var S,
								R,
								N,
								G,
								B,
								Z = [],
								J = 128;
							for (
								_ === (_ | 0)
									? ((R = _), (_ = null))
									: ((_ = _ + "\0"), (R = 0), (J = Math.max(J, _.length))),
									N = 0,
									G = -32;
								G < J;
								++G
							)
								_ && (R ^= _.charCodeAt((G + 32) % _.length)),
									G === 0 && (B = R),
									(R ^= R << 10),
									(R ^= R >>> 15),
									(R ^= R << 4),
									(R ^= R >>> 13),
									G >= 0 &&
										((B = (B + 1640531527) | 0),
										(S = Z[G & 127] ^= R + B),
										(N = S == 0 ? N + 1 : 0));
							for (
								N >= 128 && (Z[((_ && _.length) || 0) & 127] = -1),
									N = 127,
									G = 4 * 128;
								G > 0;
								--G
							)
								(R = Z[(N + 34) & 127]),
									(S = Z[(N = (N + 1) & 127)]),
									(R ^= R << 13),
									(S ^= S << 17),
									(R ^= R >>> 15),
									(S ^= S >>> 12),
									(Z[N] = R ^ S);
							(b.w = B), (b.X = Z), (b.i = N);
						}
						m(h, v);
					}
					function f(v, h) {
						return (h.i = v.i), (h.w = v.w), (h.X = v.X.slice()), h;
					}
					function p(v, h) {
						v == null && (v = +new Date());
						var m = new o(v),
							b = h && h.state,
							_ = function () {
								return (m.next() >>> 0) / 4294967296;
							};
						return (
							(_.double = function () {
								do
									var S = m.next() >>> 11,
										R = (m.next() >>> 0) / 4294967296,
										N = (S + R) / (1 << 21);
								while (N === 0);
								return N;
							}),
							(_.int32 = m.next),
							(_.quick = _),
							b &&
								(b.X && f(b, m),
								(_.state = function () {
									return f(m, {});
								})),
							_
						);
					}
					c && c.exports ? (c.exports = p) : (this.xor4096 = p);
				})(z1, i);
			})(ir)),
		ir.exports
	);
}
var rr = { exports: {} },
	D1 = rr.exports,
	ym;
function j1() {
	return (
		ym ||
			((ym = 1),
			(function (i) {
				(function (l, c, s) {
					function o(v) {
						var h = this,
							m = "";
						(h.next = function () {
							var _ = h.b,
								S = h.c,
								R = h.d,
								N = h.a;
							return (
								(_ = (_ << 25) ^ (_ >>> 7) ^ S),
								(S = (S - R) | 0),
								(R = (R << 24) ^ (R >>> 8) ^ N),
								(N = (N - _) | 0),
								(h.b = _ = (_ << 20) ^ (_ >>> 12) ^ S),
								(h.c = S = (S - R) | 0),
								(h.d = (R << 16) ^ (S >>> 16) ^ N),
								(h.a = (N - _) | 0)
							);
						}),
							(h.a = 0),
							(h.b = 0),
							(h.c = -1640531527),
							(h.d = 1367130551),
							v === Math.floor(v)
								? ((h.a = (v / 4294967296) | 0), (h.b = v | 0))
								: (m += v);
						for (var b = 0; b < m.length + 20; b++)
							(h.b ^= m.charCodeAt(b) | 0), h.next();
					}
					function f(v, h) {
						return (h.a = v.a), (h.b = v.b), (h.c = v.c), (h.d = v.d), h;
					}
					function p(v, h) {
						var m = new o(v),
							b = h && h.state,
							_ = function () {
								return (m.next() >>> 0) / 4294967296;
							};
						return (
							(_.double = function () {
								do
									var S = m.next() >>> 11,
										R = (m.next() >>> 0) / 4294967296,
										N = (S + R) / (1 << 21);
								while (N === 0);
								return N;
							}),
							(_.int32 = m.next),
							(_.quick = _),
							b &&
								(typeof b == "object" && f(b, m),
								(_.state = function () {
									return f(m, {});
								})),
							_
						);
					}
					c && c.exports ? (c.exports = p) : (this.tychei = p);
				})(D1, i);
			})(rr)),
		rr.exports
	);
}
var cr = { exports: {} };
const U1 = {},
	k1 = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: U1 },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	H1 = xy(k1);
var Z1 = cr.exports,
	pm;
function B1() {
	return (
		pm ||
			((pm = 1),
			(function (i) {
				(function (l, c, s) {
					var o = 256,
						f = 6,
						p = 52,
						v = "random",
						h = s.pow(o, f),
						m = s.pow(2, p),
						b = m * 2,
						_ = o - 1,
						S;
					function R(P, V, ye) {
						var pe = [];
						V = V == !0 ? { entropy: !0 } : V || {};
						var ge = Z(B(V.entropy ? [P, Q(c)] : (P ?? J()), 3), pe),
							L = new N(pe),
							ee = function () {
								for (var Re = L.g(f), Ke = h, Le = 0; Re < m; )
									(Re = (Re + Le) * o), (Ke *= o), (Le = L.g(1));
								for (; Re >= b; ) (Re /= 2), (Ke /= 2), (Le >>>= 1);
								return (Re + Le) / Ke;
							};
						return (
							(ee.int32 = function () {
								return L.g(4) | 0;
							}),
							(ee.quick = function () {
								return L.g(4) / 4294967296;
							}),
							(ee.double = ee),
							Z(Q(L.S), c),
							(
								V.pass ||
								ye ||
								function (Re, Ke, Le, Fe) {
									return (
										Fe &&
											(Fe.S && G(Fe, L),
											(Re.state = function () {
												return G(L, {});
											})),
										Le ? ((s[v] = Re), Ke) : Re
									);
								}
							)(ee, ge, "global" in V ? V.global : this == s, V.state)
						);
					}
					function N(P) {
						var V,
							ye = P.length,
							pe = this,
							ge = 0,
							L = (pe.i = pe.j = 0),
							ee = (pe.S = []);
						for (ye || (P = [ye++]); ge < o; ) ee[ge] = ge++;
						for (ge = 0; ge < o; ge++)
							(ee[ge] = ee[(L = _ & (L + P[ge % ye] + (V = ee[ge])))]),
								(ee[L] = V);
						(pe.g = function (Re) {
							for (var Ke, Le = 0, Fe = pe.i, $e = pe.j, q = pe.S; Re--; )
								(Ke = q[(Fe = _ & (Fe + 1))]),
									(Le =
										Le * o +
										q[_ & ((q[Fe] = q[($e = _ & ($e + Ke))]) + (q[$e] = Ke))]);
							return (pe.i = Fe), (pe.j = $e), Le;
						})(o);
					}
					function G(P, V) {
						return (V.i = P.i), (V.j = P.j), (V.S = P.S.slice()), V;
					}
					function B(P, V) {
						var ye = [],
							pe = typeof P,
							ge;
						if (V && pe == "object")
							for (ge in P)
								try {
									ye.push(B(P[ge], V - 1));
								} catch {}
						return ye.length ? ye : pe == "string" ? P : P + "\0";
					}
					function Z(P, V) {
						for (var ye = P + "", pe, ge = 0; ge < ye.length; )
							V[_ & ge] = _ & ((pe ^= V[_ & ge] * 19) + ye.charCodeAt(ge++));
						return Q(V);
					}
					function J() {
						try {
							var P;
							return (
								S && (P = S.randomBytes)
									? (P = P(o))
									: ((P = new Uint8Array(o)),
										(l.crypto || l.msCrypto).getRandomValues(P)),
								Q(P)
							);
						} catch {
							var V = l.navigator,
								ye = V && V.plugins;
							return [+new Date(), l, ye, l.screen, Q(c)];
						}
					}
					function Q(P) {
						return String.fromCharCode.apply(0, P);
					}
					if ((Z(s.random(), c), i.exports)) {
						i.exports = R;
						try {
							S = H1;
						} catch {}
					} else s["seed" + v] = R;
				})(typeof self < "u" ? self : Z1, [], Math);
			})(cr)),
		cr.exports
	);
}
var Ls, gm;
function q1() {
	if (gm) return Ls;
	gm = 1;
	var i = T1(),
		l = R1(),
		c = w1(),
		s = N1(),
		o = M1(),
		f = j1(),
		p = B1();
	return (
		(p.alea = i),
		(p.xor128 = l),
		(p.xorwow = c),
		(p.xorshift7 = s),
		(p.xor4096 = o),
		(p.tychei = f),
		(Ls = p),
		Ls
	);
}
var L1 = q1();
const Y1 = Em(L1),
	V1 = [
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
	G1 = ["Robot", "Locomotive", "Automobile"],
	X1 = ["Cactus", "Sunflower", "Poppy", "Banana"],
	Q1 = ["ChristopherNolan"],
	K1 = ["MonopolySet"],
	bm = Object.freeze([...new Set([...V1, ...G1, ...X1, ...Q1, ...K1])]),
	$1 = 1,
	Ys = 2,
	J1 = 4,
	_m = 5,
	W1 = 7,
	F1 = 8,
	P1 = 10,
	I1 = [
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
	eb = ["Singular", "Multiple", "One", "Two", "Extra"],
	tb = ["Big", "Small", "Huge", "Little", "Colossal", "Tiny"],
	ab = [
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
	nb = ["Brutal", "Kind", "Nippy", "Savage"],
	lb = ["Old", "Young", "Elder", "Adolescent"],
	ub = ["Quick", "Slow", "Fast", "Sluggish"],
	ib = [
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
	rb = ["Solid", "Hard", "Squishy"],
	cb = ["Poisonous", "Venomous"],
	sb = Object.freeze(
		[
			...I1.map((i) => ({
				value: i,
				type: "colour",
				order: F1,
				allowMultiple: !1,
			})),
			...eb.map((i) => ({
				value: i,
				type: "count",
				order: $1,
				allowMultiple: !1,
			})),
			...tb.map((i) => ({
				value: i,
				type: "size",
				order: J1,
				allowMultiple: !1,
			})),
			...ab.map((i) => ({
				value: i,
				type: "nature",
				order: Ys,
				allowMultiple: !1,
			})),
			...nb.map((i) => ({
				value: i,
				type: "general_opinion",
				order: Ys,
				allowMultiple: !0,
			})),
			...lb.map((i) => ({
				value: i,
				type: "age",
				order: W1,
				allowMultiple: !1,
			})),
			...ub.map((i) => ({
				value: i,
				type: "speed",
				order: Ys,
				allowMultiple: !1,
			})),
			...ib.map((i) => ({
				value: i,
				type: "material",
				order: P1,
				allowMultiple: !1,
			})),
			...rb.map((i) => ({
				value: i,
				type: "physical_quality",
				order: _m,
				allowMultiple: !1,
			})),
			...cb.map((i) => ({
				value: i,
				type: "physical_quality_b",
				order: _m,
				allowMultiple: !0,
			})),
		].map((i) => Object.freeze(i)),
	),
	ob = 2,
	Im = (i, l = 2) => {
		const c = Y1(i),
			s = Math.floor(bm.length * c()),
			o = bm[s],
			f = [],
			p = [];
		for (let v = 0; v < l; v++) {
			const h = sb.filter((b) => {
					const { type: _, value: S } = b;
					return !p.includes(_) && !f.map((R) => R.value).includes(S);
				}),
				m = Math.floor(h.length * c());
			h[m].allowMultiple || p.push(h[m].type), f.push(h[m]);
		}
		return [
			...f.sort((v, h) => v.order - h.order).map(({ value: v }) => v),
			o,
		].join("");
	},
	fb = (i, l, c = !1) => (l && c ? l : Im(i, ob)),
	Eb = (i, l, c, s) =>
		i.reduce(
			(o, { id: f, name: p }) => o.replaceAll(`%${f}%`, fb(f, p, l || f === c)),
			s,
		),
	Sm = "NICK_NAME_GEN_STORE";
function db() {
	const [i, l] = C.useState([]),
		[c, s] = C.useState(""),
		[o, f] = C.useState(Date.now().toString()),
		[p, v] = C.useState(2),
		h = Im(o, p),
		m = C.useCallback(
			(b) => {
				localStorage.setItem(
					Sm,
					JSON.stringify({ namePrefixes: i, adjectiveCount: p, ...b }),
				);
			},
			[i.join(""), p],
		);
	return (
		C.useEffect(() => {
			try {
				const b = localStorage.getItem(Sm);
				if (typeof b == "string") {
					const _ = JSON.parse(b);
					l((S) => (_ == null ? void 0 : _.namePrefixes) || S),
						v((S) => (_ == null ? void 0 : _.adjectiveCount) || S),
						s(
							(S) =>
								S ||
								(_ == null
									? void 0
									: _.namePrefixes.join(`
`)),
						);
				}
			} catch {}
		}, []),
		M.jsxs("div", {
			className: "left-0 right-0 mx-auto max-w-prose",
			children: [
				M.jsx("textarea", {
					className:
						"mb-2 block resize-none rounded border border-gray-400 bg-white px-0.5 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
					spellCheck: !1,
					value: c,
					onChange: (b) => {
						s(b.target.value);
						const _ = b.target.value
							.split(
								`
`,
							)
							.map((S) => S.trim())
							.filter((S) => S);
						l(_), m({ namePrefixes: _ });
					},
				}),
				M.jsxs("label", {
					className: "block",
					children: [
						"Adjective Count ",
						M.jsx("input", {
							className:
								"rounded border border-gray-200 bg-white px-0.5 text-right text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white",
							type: "number",
							value: p,
							onChange: (b) => {
								const _ = parseInt(b.target.value, 10) || 0;
								m({ adjectiveCount: _ }), v(_);
							},
						}),
					],
				}),
				M.jsx("button", {
					className: "button-default",
					onClick: () => {
						f(Date.now().toString());
					},
					children: "Randomise",
				}),
				M.jsx("ul", {
					className: "ml-5 mt-2 list-disc",
					children: ["", ...i].map((b, _) => {
						const S = `${b}${h}`;
						return M.jsxs(
							"li",
							{
								children: [
									S,
									" (",
									S.length,
									") ",
									M.jsx("button", {
										className: "button-default",
										onClick: () => {
											navigator.clipboard.writeText(S);
										},
										children: "Copy",
									}),
								],
							},
							`${b}-${_}`,
						);
					}),
				}),
			],
		})
	);
}
const Fs = {
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
	hb = new Array(12).fill(0).map((i, l) => l + 1);
function Vs(i, l) {
	if (!i) return 0;
	let c = 0;
	return (
		i.includes("🎲🎲")
			? (c = l.reduce((s, o) => s + Fs["🎲🎲"][o], 0))
			: (c = l.reduce((s, o) => s + Fs["🎲"][o], 0)),
		i.includes("➕") ? 1 - (1 - c) * (1 - c) : i.includes("➖") ? c * c : c
	);
}
function mb() {
	const [i, l] = C.useState(null),
		[c, s] = C.useState([]),
		o = Vs(i, c);
	return M.jsxs("div", {
		className: "px-2",
		children: [
			M.jsx("h2", { children: "Probability" }),
			M.jsx("p", {
				className: "max-w-prose",
				children:
					"This table has the probability of getting each dice roll total.",
			}),
			M.jsx("p", {
				className: "max-w-prose",
				children:
					"To show the probability of getting one of a number of dice roll totals, click on the columns.",
			}),
			M.jsx("p", {
				className: "max-w-prose",
				children: "🎲: The number of dice rolled.",
			}),
			M.jsx("p", {
				className: "max-w-prose",
				children:
					"➕🛍️: If the first dice roll was one of the selected totals, keep the result. If the first dice roll wasn't one of the selected totals, use the Shopping Mall re-roll.",
			}),
			M.jsx("p", {
				className: "max-w-prose",
				children:
					"➖🛍️: If the first dice roll was one of the selected totals, use the Shopping Mall re-roll. If the first dice roll wasn't one of the selected totals, keep the result.",
			}),
			M.jsx("button", {
				className: "button-default",
				onClick: () => {
					s([]), l(null);
				},
				children: "Reset",
			}),
			M.jsxs("table", {
				className: "my-2",
				children: [
					M.jsx("thead", {
						children: M.jsxs("tr", {
							children: [
								M.jsx("th", {
									className: "border-default px-2",
									children:
										o > 0
											? M.jsx("button", {
													className: "w-full",
													onClick: () => {
														s([]), l(null);
													},
													children: o.toFixed(3),
												})
											: null,
								}),
								hb.map((f, p) =>
									M.jsx(
										"th",
										{
											className: `border-default ${c.includes(p) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
											children: M.jsx("button", {
												className: "px-2 w-full ",
												onClick: () => {
													s((v) =>
														v.includes(p)
															? v.filter((h) => h !== p)
															: [...v, p],
													);
												},
												children: f,
											}),
										},
										f,
									),
								),
								M.jsx("th", {
									className: "border-default px-2",
									children: "Total",
								}),
							],
						}),
					}),
					M.jsx("tbody", {
						children: Object.entries(Fs).map(([f, p]) =>
							M.jsxs(
								"tr",
								{
									className: "dark:odd:bg-gray-700 odd:bg-gray-100",
									children: [
										M.jsx("td", {
											className: "border-default text-left px-2",
											children: f,
										}),
										p.map((v, h) =>
											M.jsx(
												"td",
												{
													className: `border-default ${c.includes(h) ? "bg-blue-300 dark:bg-blue-700" : ""}`,
													children:
														v > 0 &&
														M.jsx("button", {
															className: "px-2 w-full ",
															onClick: () => {
																s((m) =>
																	m.includes(h)
																		? m.filter((b) => b !== h)
																		: [...m, h],
																);
															},
															children: v.toFixed(3),
														}),
												},
												h,
											),
										),
										M.jsx("td", {
											className: "border-default text-left px-2",
											children: M.jsx("span", {
												className: Vs(f, c) > 0 ? "" : "opacity-0",
												children: Vs(f, c).toFixed(3),
											}),
										}),
									],
								},
								f,
							),
						),
					}),
				],
			}),
		],
	});
}
const vb = C.lazy(() =>
		io(() => import("./index-CI12D9OQ.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
	),
	yb = C.lazy(() => io(() => import("./index-BYCapLza.js"), [])),
	pb = C.lazy(() =>
		io(
			() => import("./index-LI1pGzg-.js"),
			__vite__mapDeps([5, 1, 2, 3, 6, 7, 8, 9, 4, 10]),
		),
	),
	xm = (i) => {
		i === "dark" ||
		(i === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};
function gb() {
	const { options: i } = Sr();
	return (
		C.useEffect(() => {
			xm(i.darkMode);
		}, [i.darkMode]),
		C.useEffect(() => {
			const l = window.matchMedia("(prefers-color-scheme: dark)"),
				c = () => {
					xm(i.darkMode);
				};
			return (
				l.addEventListener("change", c),
				() => {
					l.removeEventListener("change", c);
				}
			);
		}, []),
		M.jsx(C.Suspense, {
			fallback: M.jsx(Pm, {}),
			children: M.jsxs("div", {
				className: "absolute bottom-0 left-0 right-0 top-0",
				children: [
					M.jsx(x1, {}),
					M.jsx("div", {
						className: "h-full pt-10",
						children: M.jsxs(Ep, {
							children: [
								M.jsx(cl, { path: "/", element: M.jsx(vb, {}) }),
								M.jsx(cl, { path: "/dev/*", element: M.jsx(yb, {}) }),
								M.jsx(cl, { path: "/game/:id", element: M.jsx(pb, {}) }),
								M.jsx(cl, { path: "/name-generator", element: M.jsx(db, {}) }),
								M.jsx(cl, { path: "/probability", element: M.jsx(mb, {}) }),
							],
						}),
					}),
				],
			}),
		})
	);
}
const bb = Dy.createRoot(document.getElementById("root"));
bb.render(
	M.jsx(C.StrictMode, {
		children: M.jsx($p, {
			children: M.jsx(ug, { children: M.jsx(y1, { children: M.jsx(gb, {}) }) }),
		}),
	}),
);
export {
	lo as L,
	Ep as R,
	io as _,
	Dm as a,
	cl as b,
	_b as c,
	Eb as d,
	Sb as e,
	Pm as f,
	fb as g,
	xb as i,
	M as j,
	C as r,
	Sr as u,
	m1 as z,
};
