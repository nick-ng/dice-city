var x;
(function (r) {
	r.assertEqual = (n) => {};
	function e(n) {}
	r.assertIs = e;
	function t(n) {
		throw new Error();
	}
	((r.assertNever = t),
		(r.arrayToEnum = (n) => {
			const a = {};
			for (const i of n) a[i] = i;
			return a;
		}),
		(r.getValidEnumValues = (n) => {
			const a = r.objectKeys(n).filter((o) => typeof n[n[o]] != "number"),
				i = {};
			for (const o of a) i[o] = n[o];
			return r.objectValues(i);
		}),
		(r.objectValues = (n) =>
			r.objectKeys(n).map(function (a) {
				return n[a];
			})),
		(r.objectKeys =
			typeof Object.keys == "function"
				? (n) => Object.keys(n)
				: (n) => {
						const a = [];
						for (const i in n)
							Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
						return a;
					}),
		(r.find = (n, a) => {
			for (const i of n) if (a(i)) return i;
		}),
		(r.isInteger =
			typeof Number.isInteger == "function"
				? (n) => Number.isInteger(n)
				: (n) =>
						typeof n == "number" && Number.isFinite(n) && Math.floor(n) === n));
	function s(n, a = " | ") {
		return n.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(a);
	}
	((r.joinValues = s),
		(r.jsonStringifyReplacer = (n, a) =>
			typeof a == "bigint" ? a.toString() : a));
})(x || (x = {}));
var _e;
(function (r) {
	r.mergeShapes = (e, t) => ({ ...e, ...t });
})(_e || (_e = {}));
const l = x.arrayToEnum([
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
	I = (r) => {
		switch (typeof r) {
			case "undefined":
				return l.undefined;
			case "string":
				return l.string;
			case "number":
				return Number.isNaN(r) ? l.nan : l.number;
			case "boolean":
				return l.boolean;
			case "function":
				return l.function;
			case "bigint":
				return l.bigint;
			case "symbol":
				return l.symbol;
			case "object":
				return Array.isArray(r)
					? l.array
					: r === null
						? l.null
						: r.then &&
							  typeof r.then == "function" &&
							  r.catch &&
							  typeof r.catch == "function"
							? l.promise
							: typeof Map < "u" && r instanceof Map
								? l.map
								: typeof Set < "u" && r instanceof Set
									? l.set
									: typeof Date < "u" && r instanceof Date
										? l.date
										: l.object;
			default:
				return l.unknown;
		}
	},
	c = x.arrayToEnum([
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
	De = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, "$1:");
class T extends Error {
	get errors() {
		return this.issues;
	}
	constructor(e) {
		(super(),
			(this.issues = []),
			(this.addIssue = (s) => {
				this.issues = [...this.issues, s];
			}),
			(this.addIssues = (s = []) => {
				this.issues = [...this.issues, ...s];
			}));
		const t = new.target.prototype;
		(Object.setPrototypeOf
			? Object.setPrototypeOf(this, t)
			: (this.__proto__ = t),
			(this.name = "ZodError"),
			(this.issues = e));
	}
	format(e) {
		const t =
				e ||
				function (a) {
					return a.message;
				},
			s = { _errors: [] },
			n = (a) => {
				for (const i of a.issues)
					if (i.code === "invalid_union") i.unionErrors.map(n);
					else if (i.code === "invalid_return_type") n(i.returnTypeError);
					else if (i.code === "invalid_arguments") n(i.argumentsError);
					else if (i.path.length === 0) s._errors.push(t(i));
					else {
						let o = s,
							h = 0;
						for (; h < i.path.length; ) {
							const f = i.path[h];
							(h === i.path.length - 1
								? ((o[f] = o[f] || { _errors: [] }), o[f]._errors.push(t(i)))
								: (o[f] = o[f] || { _errors: [] }),
								(o = o[f]),
								h++);
						}
					}
			};
		return (n(this), s);
	}
	static assert(e) {
		if (!(e instanceof T)) throw new Error(`Not a ZodError: ${e}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, x.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(e = (t) => t.message) {
		const t = {},
			s = [];
		for (const n of this.issues)
			if (n.path.length > 0) {
				const a = n.path[0];
				((t[a] = t[a] || []), t[a].push(e(n)));
			} else s.push(e(n));
		return { formErrors: s, fieldErrors: t };
	}
	get formErrors() {
		return this.flatten();
	}
}
T.create = (r) => new T(r);
const q = (r, e) => {
	let t;
	switch (r.code) {
		case c.invalid_type:
			r.received === l.undefined
				? (t = "Required")
				: (t = `Expected ${r.expected}, received ${r.received}`);
			break;
		case c.invalid_literal:
			t = `Invalid literal value, expected ${JSON.stringify(r.expected, x.jsonStringifyReplacer)}`;
			break;
		case c.unrecognized_keys:
			t = `Unrecognized key(s) in object: ${x.joinValues(r.keys, ", ")}`;
			break;
		case c.invalid_union:
			t = "Invalid input";
			break;
		case c.invalid_union_discriminator:
			t = `Invalid discriminator value. Expected ${x.joinValues(r.options)}`;
			break;
		case c.invalid_enum_value:
			t = `Invalid enum value. Expected ${x.joinValues(r.options)}, received '${r.received}'`;
			break;
		case c.invalid_arguments:
			t = "Invalid function arguments";
			break;
		case c.invalid_return_type:
			t = "Invalid function return type";
			break;
		case c.invalid_date:
			t = "Invalid date";
			break;
		case c.invalid_string:
			typeof r.validation == "object"
				? "includes" in r.validation
					? ((t = `Invalid input: must include "${r.validation.includes}"`),
						typeof r.validation.position == "number" &&
							(t = `${t} at one or more positions greater than or equal to ${r.validation.position}`))
					: "startsWith" in r.validation
						? (t = `Invalid input: must start with "${r.validation.startsWith}"`)
						: "endsWith" in r.validation
							? (t = `Invalid input: must end with "${r.validation.endsWith}"`)
							: x.assertNever(r.validation)
				: r.validation !== "regex"
					? (t = `Invalid ${r.validation}`)
					: (t = "Invalid");
			break;
		case c.too_small:
			r.type === "array"
				? (t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)`)
				: r.type === "string"
					? (t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)`)
					: r.type === "number"
						? (t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}`)
						: r.type === "bigint"
							? (t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}`)
							: r.type === "date"
								? (t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}`)
								: (t = "Invalid input");
			break;
		case c.too_big:
			r.type === "array"
				? (t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)`)
				: r.type === "string"
					? (t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)`)
					: r.type === "number"
						? (t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}`)
						: r.type === "bigint"
							? (t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}`)
							: r.type === "date"
								? (t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}`)
								: (t = "Invalid input");
			break;
		case c.custom:
			t = "Invalid input";
			break;
		case c.invalid_intersection_types:
			t = "Intersection results could not be merged";
			break;
		case c.not_multiple_of:
			t = `Number must be a multiple of ${r.multipleOf}`;
			break;
		case c.not_finite:
			t = "Number must be finite";
			break;
		default:
			((t = e.defaultError), x.assertNever(r));
	}
	return { message: t };
};
let Oe = q;
function Ue(r) {
	Oe = r;
}
function de() {
	return Oe;
}
const ue = (r) => {
		const { data: e, path: t, errorMaps: s, issueData: n } = r,
			a = [...t, ...(n.path || [])],
			i = { ...n, path: a };
		if (n.message !== void 0) return { ...n, path: a, message: n.message };
		let o = "";
		const h = s
			.filter((f) => !!f)
			.slice()
			.reverse();
		for (const f of h) o = f(i, { data: e, defaultError: o }).message;
		return { ...n, path: a, message: o };
	},
	Be = [];
function u(r, e) {
	const t = de(),
		s = ue({
			issueData: e,
			data: r.data,
			path: r.path,
			errorMaps: [
				r.common.contextualErrorMap,
				r.schemaErrorMap,
				t,
				t === q ? void 0 : q,
			].filter((n) => !!n),
		});
	r.common.issues.push(s);
}
class k {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		this.value === "valid" && (this.value = "dirty");
	}
	abort() {
		this.value !== "aborted" && (this.value = "aborted");
	}
	static mergeArray(e, t) {
		const s = [];
		for (const n of t) {
			if (n.status === "aborted") return p;
			(n.status === "dirty" && e.dirty(), s.push(n.value));
		}
		return { status: e.value, value: s };
	}
	static async mergeObjectAsync(e, t) {
		const s = [];
		for (const n of t) {
			const a = await n.key,
				i = await n.value;
			s.push({ key: a, value: i });
		}
		return k.mergeObjectSync(e, s);
	}
	static mergeObjectSync(e, t) {
		const s = {};
		for (const n of t) {
			const { key: a, value: i } = n;
			if (a.status === "aborted" || i.status === "aborted") return p;
			(a.status === "dirty" && e.dirty(),
				i.status === "dirty" && e.dirty(),
				a.value !== "__proto__" &&
					(typeof i.value < "u" || n.alwaysSet) &&
					(s[a.value] = i.value));
		}
		return { status: e.value, value: s };
	}
}
const p = Object.freeze({ status: "aborted" }),
	F = (r) => ({ status: "dirty", value: r }),
	w = (r) => ({ status: "valid", value: r }),
	ve = (r) => r.status === "aborted",
	xe = (r) => r.status === "dirty",
	L = (r) => r.status === "valid",
	H = (r) => typeof Promise < "u" && r instanceof Promise;
var m;
(function (r) {
	((r.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
		(r.toString = (e) =>
			typeof e == "string" ? e : e == null ? void 0 : e.message));
})(m || (m = {}));
class N {
	constructor(e, t, s, n) {
		((this._cachedPath = []),
			(this.parent = e),
			(this.data = t),
			(this._path = s),
			(this._key = n));
	}
	get path() {
		return (
			this._cachedPath.length ||
				(Array.isArray(this._key)
					? this._cachedPath.push(...this._path, ...this._key)
					: this._cachedPath.push(...this._path, this._key)),
			this._cachedPath
		);
	}
}
const Te = (r, e) => {
	if (L(e)) return { success: !0, data: e.value };
	if (!r.common.issues.length)
		throw new Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			const t = new T(r.common.issues);
			return ((this._error = t), this._error);
		},
	};
};
function g(r) {
	if (!r) return {};
	const {
		errorMap: e,
		invalid_type_error: t,
		required_error: s,
		description: n,
	} = r;
	if (e && (t || s))
		throw new Error(
			`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
		);
	return e
		? { errorMap: e, description: n }
		: {
				errorMap: (i, o) => {
					const { message: h } = r;
					return i.code === "invalid_enum_value"
						? { message: h ?? o.defaultError }
						: typeof o.data > "u"
							? { message: h ?? s ?? o.defaultError }
							: i.code !== "invalid_type"
								? { message: o.defaultError }
								: { message: h ?? t ?? o.defaultError };
				},
				description: n,
			};
}
class _ {
	get description() {
		return this._def.description;
	}
	_getType(e) {
		return I(e.data);
	}
	_getOrReturnCtx(e, t) {
		return (
			t || {
				common: e.parent.common,
				data: e.data,
				parsedType: I(e.data),
				schemaErrorMap: this._def.errorMap,
				path: e.path,
				parent: e.parent,
			}
		);
	}
	_processInputParams(e) {
		return {
			status: new k(),
			ctx: {
				common: e.parent.common,
				data: e.data,
				parsedType: I(e.data),
				schemaErrorMap: this._def.errorMap,
				path: e.path,
				parent: e.parent,
			},
		};
	}
	_parseSync(e) {
		const t = this._parse(e);
		if (H(t)) throw new Error("Synchronous parse encountered promise.");
		return t;
	}
	_parseAsync(e) {
		const t = this._parse(e);
		return Promise.resolve(t);
	}
	parse(e, t) {
		const s = this.safeParse(e, t);
		if (s.success) return s.data;
		throw s.error;
	}
	safeParse(e, t) {
		const s = {
				common: {
					issues: [],
					async: (t == null ? void 0 : t.async) ?? !1,
					contextualErrorMap: t == null ? void 0 : t.errorMap,
				},
				path: (t == null ? void 0 : t.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: e,
				parsedType: I(e),
			},
			n = this._parseSync({ data: e, path: s.path, parent: s });
		return Te(s, n);
	}
	"~validate"(e) {
		var s, n;
		const t = {
			common: { issues: [], async: !!this["~standard"].async },
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: I(e),
		};
		if (!this["~standard"].async)
			try {
				const a = this._parseSync({ data: e, path: [], parent: t });
				return L(a) ? { value: a.value } : { issues: t.common.issues };
			} catch (a) {
				((n =
					(s = a == null ? void 0 : a.message) == null
						? void 0
						: s.toLowerCase()) != null &&
					n.includes("encountered") &&
					(this["~standard"].async = !0),
					(t.common = { issues: [], async: !0 }));
			}
		return this._parseAsync({ data: e, path: [], parent: t }).then((a) =>
			L(a) ? { value: a.value } : { issues: t.common.issues },
		);
	}
	async parseAsync(e, t) {
		const s = await this.safeParseAsync(e, t);
		if (s.success) return s.data;
		throw s.error;
	}
	async safeParseAsync(e, t) {
		const s = {
				common: {
					issues: [],
					contextualErrorMap: t == null ? void 0 : t.errorMap,
					async: !0,
				},
				path: (t == null ? void 0 : t.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: e,
				parsedType: I(e),
			},
			n = this._parse({ data: e, path: s.path, parent: s }),
			a = await (H(n) ? n : Promise.resolve(n));
		return Te(s, a);
	}
	refine(e, t) {
		const s = (n) =>
			typeof t == "string" || typeof t > "u"
				? { message: t }
				: typeof t == "function"
					? t(n)
					: t;
		return this._refinement((n, a) => {
			const i = e(n),
				o = () => a.addIssue({ code: c.custom, ...s(n) });
			return typeof Promise < "u" && i instanceof Promise
				? i.then((h) => (h ? !0 : (o(), !1)))
				: i
					? !0
					: (o(), !1);
		});
	}
	refinement(e, t) {
		return this._refinement((s, n) =>
			e(s) ? !0 : (n.addIssue(typeof t == "function" ? t(s, n) : t), !1),
		);
	}
	_refinement(e) {
		return new A({
			schema: this,
			typeName: y.ZodEffects,
			effect: { type: "refinement", refinement: e },
		});
	}
	superRefine(e) {
		return this._refinement(e);
	}
	constructor(e) {
		((this.spa = this.safeParseAsync),
			(this._def = e),
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
				validate: (t) => this["~validate"](t),
			}));
	}
	optional() {
		return j.create(this, this._def);
	}
	nullable() {
		return V.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return O.create(this);
	}
	promise() {
		return Y.create(this, this._def);
	}
	or(e) {
		return K.create([this, e], this._def);
	}
	and(e) {
		return ee.create(this, e, this._def);
	}
	transform(e) {
		return new A({
			...g(this._def),
			schema: this,
			typeName: y.ZodEffects,
			effect: { type: "transform", transform: e },
		});
	}
	default(e) {
		const t = typeof e == "function" ? e : () => e;
		return new ae({
			...g(this._def),
			innerType: this,
			defaultValue: t,
			typeName: y.ZodDefault,
		});
	}
	brand() {
		return new ke({ typeName: y.ZodBranded, type: this, ...g(this._def) });
	}
	catch(e) {
		const t = typeof e == "function" ? e : () => e;
		return new ie({
			...g(this._def),
			innerType: this,
			catchValue: t,
			typeName: y.ZodCatch,
		});
	}
	describe(e) {
		const t = this.constructor;
		return new t({ ...this._def, description: e });
	}
	pipe(e) {
		return ce.create(this, e);
	}
	readonly() {
		return oe.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}
const Fe = /^c[^\s-]{8,}$/i,
	We = /^[0-9a-z]+$/,
	qe = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
	Je =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
	Ye = /^[a-z0-9_-]{21}$/i,
	He = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
	Ge =
		/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
	Qe =
		/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
	Xe = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ge;
const Ke =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	et =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	tt =
		/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
	rt =
		/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	st = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	nt = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	Ae =
		"((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
	at = new RegExp(`^${Ae}$`);
function je(r) {
	let e = "[0-5]\\d";
	r.precision
		? (e = `${e}\\.\\d{${r.precision}}`)
		: r.precision == null && (e = `${e}(\\.\\d+)?`);
	const t = r.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function it(r) {
	return new RegExp(`^${je(r)}$`);
}
function Ne(r) {
	let e = `${Ae}T${je(r)}`;
	const t = [];
	return (
		t.push(r.local ? "Z?" : "Z"),
		r.offset && t.push("([+-]\\d{2}:?\\d{2})"),
		(e = `${e}(${t.join("|")})`),
		new RegExp(`^${e}$`)
	);
}
function ot(r, e) {
	return !!(
		((e === "v4" || !e) && Ke.test(r)) ||
		((e === "v6" || !e) && tt.test(r))
	);
}
function ct(r, e) {
	if (!He.test(r)) return !1;
	try {
		const [t] = r.split(".");
		if (!t) return !1;
		const s = t
				.replace(/-/g, "+")
				.replace(/_/g, "/")
				.padEnd(t.length + ((4 - (t.length % 4)) % 4), "="),
			n = JSON.parse(atob(s));
		return !(
			typeof n != "object" ||
			n === null ||
			("typ" in n && (n == null ? void 0 : n.typ) !== "JWT") ||
			!n.alg ||
			(e && n.alg !== e)
		);
	} catch {
		return !1;
	}
}
function dt(r, e) {
	return !!(
		((e === "v4" || !e) && et.test(r)) ||
		((e === "v6" || !e) && rt.test(r))
	);
}
class C extends _ {
	_parse(e) {
		if (
			(this._def.coerce && (e.data = String(e.data)),
			this._getType(e) !== l.string)
		) {
			const a = this._getOrReturnCtx(e);
			return (
				u(a, {
					code: c.invalid_type,
					expected: l.string,
					received: a.parsedType,
				}),
				p
			);
		}
		const s = new k();
		let n;
		for (const a of this._def.checks)
			if (a.kind === "min")
				e.data.length < a.value &&
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						code: c.too_small,
						minimum: a.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: a.message,
					}),
					s.dirty());
			else if (a.kind === "max")
				e.data.length > a.value &&
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						code: c.too_big,
						maximum: a.value,
						type: "string",
						inclusive: !0,
						exact: !1,
						message: a.message,
					}),
					s.dirty());
			else if (a.kind === "length") {
				const i = e.data.length > a.value,
					o = e.data.length < a.value;
				(i || o) &&
					((n = this._getOrReturnCtx(e, n)),
					i
						? u(n, {
								code: c.too_big,
								maximum: a.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: a.message,
							})
						: o &&
							u(n, {
								code: c.too_small,
								minimum: a.value,
								type: "string",
								inclusive: !0,
								exact: !0,
								message: a.message,
							}),
					s.dirty());
			} else if (a.kind === "email")
				Qe.test(e.data) ||
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						validation: "email",
						code: c.invalid_string,
						message: a.message,
					}),
					s.dirty());
			else if (a.kind === "emoji")
				(ge || (ge = new RegExp(Xe, "u")),
					ge.test(e.data) ||
						((n = this._getOrReturnCtx(e, n)),
						u(n, {
							validation: "emoji",
							code: c.invalid_string,
							message: a.message,
						}),
						s.dirty()));
			else if (a.kind === "uuid")
				Je.test(e.data) ||
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						validation: "uuid",
						code: c.invalid_string,
						message: a.message,
					}),
					s.dirty());
			else if (a.kind === "nanoid")
				Ye.test(e.data) ||
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						validation: "nanoid",
						code: c.invalid_string,
						message: a.message,
					}),
					s.dirty());
			else if (a.kind === "cuid")
				Fe.test(e.data) ||
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						validation: "cuid",
						code: c.invalid_string,
						message: a.message,
					}),
					s.dirty());
			else if (a.kind === "cuid2")
				We.test(e.data) ||
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						validation: "cuid2",
						code: c.invalid_string,
						message: a.message,
					}),
					s.dirty());
			else if (a.kind === "ulid")
				qe.test(e.data) ||
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						validation: "ulid",
						code: c.invalid_string,
						message: a.message,
					}),
					s.dirty());
			else if (a.kind === "url")
				try {
					new URL(e.data);
				} catch {
					((n = this._getOrReturnCtx(e, n)),
						u(n, {
							validation: "url",
							code: c.invalid_string,
							message: a.message,
						}),
						s.dirty());
				}
			else
				a.kind === "regex"
					? ((a.regex.lastIndex = 0),
						a.regex.test(e.data) ||
							((n = this._getOrReturnCtx(e, n)),
							u(n, {
								validation: "regex",
								code: c.invalid_string,
								message: a.message,
							}),
							s.dirty()))
					: a.kind === "trim"
						? (e.data = e.data.trim())
						: a.kind === "includes"
							? e.data.includes(a.value, a.position) ||
								((n = this._getOrReturnCtx(e, n)),
								u(n, {
									code: c.invalid_string,
									validation: { includes: a.value, position: a.position },
									message: a.message,
								}),
								s.dirty())
							: a.kind === "toLowerCase"
								? (e.data = e.data.toLowerCase())
								: a.kind === "toUpperCase"
									? (e.data = e.data.toUpperCase())
									: a.kind === "startsWith"
										? e.data.startsWith(a.value) ||
											((n = this._getOrReturnCtx(e, n)),
											u(n, {
												code: c.invalid_string,
												validation: { startsWith: a.value },
												message: a.message,
											}),
											s.dirty())
										: a.kind === "endsWith"
											? e.data.endsWith(a.value) ||
												((n = this._getOrReturnCtx(e, n)),
												u(n, {
													code: c.invalid_string,
													validation: { endsWith: a.value },
													message: a.message,
												}),
												s.dirty())
											: a.kind === "datetime"
												? Ne(a).test(e.data) ||
													((n = this._getOrReturnCtx(e, n)),
													u(n, {
														code: c.invalid_string,
														validation: "datetime",
														message: a.message,
													}),
													s.dirty())
												: a.kind === "date"
													? at.test(e.data) ||
														((n = this._getOrReturnCtx(e, n)),
														u(n, {
															code: c.invalid_string,
															validation: "date",
															message: a.message,
														}),
														s.dirty())
													: a.kind === "time"
														? it(a).test(e.data) ||
															((n = this._getOrReturnCtx(e, n)),
															u(n, {
																code: c.invalid_string,
																validation: "time",
																message: a.message,
															}),
															s.dirty())
														: a.kind === "duration"
															? Ge.test(e.data) ||
																((n = this._getOrReturnCtx(e, n)),
																u(n, {
																	validation: "duration",
																	code: c.invalid_string,
																	message: a.message,
																}),
																s.dirty())
															: a.kind === "ip"
																? ot(e.data, a.version) ||
																	((n = this._getOrReturnCtx(e, n)),
																	u(n, {
																		validation: "ip",
																		code: c.invalid_string,
																		message: a.message,
																	}),
																	s.dirty())
																: a.kind === "jwt"
																	? ct(e.data, a.alg) ||
																		((n = this._getOrReturnCtx(e, n)),
																		u(n, {
																			validation: "jwt",
																			code: c.invalid_string,
																			message: a.message,
																		}),
																		s.dirty())
																	: a.kind === "cidr"
																		? dt(e.data, a.version) ||
																			((n = this._getOrReturnCtx(e, n)),
																			u(n, {
																				validation: "cidr",
																				code: c.invalid_string,
																				message: a.message,
																			}),
																			s.dirty())
																		: a.kind === "base64"
																			? st.test(e.data) ||
																				((n = this._getOrReturnCtx(e, n)),
																				u(n, {
																					validation: "base64",
																					code: c.invalid_string,
																					message: a.message,
																				}),
																				s.dirty())
																			: a.kind === "base64url"
																				? nt.test(e.data) ||
																					((n = this._getOrReturnCtx(e, n)),
																					u(n, {
																						validation: "base64url",
																						code: c.invalid_string,
																						message: a.message,
																					}),
																					s.dirty())
																				: x.assertNever(a);
		return { status: s.value, value: e.data };
	}
	_regex(e, t, s) {
		return this.refinement((n) => e.test(n), {
			validation: t,
			code: c.invalid_string,
			...m.errToObj(s),
		});
	}
	_addCheck(e) {
		return new C({ ...this._def, checks: [...this._def.checks, e] });
	}
	email(e) {
		return this._addCheck({ kind: "email", ...m.errToObj(e) });
	}
	url(e) {
		return this._addCheck({ kind: "url", ...m.errToObj(e) });
	}
	emoji(e) {
		return this._addCheck({ kind: "emoji", ...m.errToObj(e) });
	}
	uuid(e) {
		return this._addCheck({ kind: "uuid", ...m.errToObj(e) });
	}
	nanoid(e) {
		return this._addCheck({ kind: "nanoid", ...m.errToObj(e) });
	}
	cuid(e) {
		return this._addCheck({ kind: "cuid", ...m.errToObj(e) });
	}
	cuid2(e) {
		return this._addCheck({ kind: "cuid2", ...m.errToObj(e) });
	}
	ulid(e) {
		return this._addCheck({ kind: "ulid", ...m.errToObj(e) });
	}
	base64(e) {
		return this._addCheck({ kind: "base64", ...m.errToObj(e) });
	}
	base64url(e) {
		return this._addCheck({ kind: "base64url", ...m.errToObj(e) });
	}
	jwt(e) {
		return this._addCheck({ kind: "jwt", ...m.errToObj(e) });
	}
	ip(e) {
		return this._addCheck({ kind: "ip", ...m.errToObj(e) });
	}
	cidr(e) {
		return this._addCheck({ kind: "cidr", ...m.errToObj(e) });
	}
	datetime(e) {
		return typeof e == "string"
			? this._addCheck({
					kind: "datetime",
					precision: null,
					offset: !1,
					local: !1,
					message: e,
				})
			: this._addCheck({
					kind: "datetime",
					precision:
						typeof (e == null ? void 0 : e.precision) > "u"
							? null
							: e == null
								? void 0
								: e.precision,
					offset: (e == null ? void 0 : e.offset) ?? !1,
					local: (e == null ? void 0 : e.local) ?? !1,
					...m.errToObj(e == null ? void 0 : e.message),
				});
	}
	date(e) {
		return this._addCheck({ kind: "date", message: e });
	}
	time(e) {
		return typeof e == "string"
			? this._addCheck({ kind: "time", precision: null, message: e })
			: this._addCheck({
					kind: "time",
					precision:
						typeof (e == null ? void 0 : e.precision) > "u"
							? null
							: e == null
								? void 0
								: e.precision,
					...m.errToObj(e == null ? void 0 : e.message),
				});
	}
	duration(e) {
		return this._addCheck({ kind: "duration", ...m.errToObj(e) });
	}
	regex(e, t) {
		return this._addCheck({ kind: "regex", regex: e, ...m.errToObj(t) });
	}
	includes(e, t) {
		return this._addCheck({
			kind: "includes",
			value: e,
			position: t == null ? void 0 : t.position,
			...m.errToObj(t == null ? void 0 : t.message),
		});
	}
	startsWith(e, t) {
		return this._addCheck({ kind: "startsWith", value: e, ...m.errToObj(t) });
	}
	endsWith(e, t) {
		return this._addCheck({ kind: "endsWith", value: e, ...m.errToObj(t) });
	}
	min(e, t) {
		return this._addCheck({ kind: "min", value: e, ...m.errToObj(t) });
	}
	max(e, t) {
		return this._addCheck({ kind: "max", value: e, ...m.errToObj(t) });
	}
	length(e, t) {
		return this._addCheck({ kind: "length", value: e, ...m.errToObj(t) });
	}
	nonempty(e) {
		return this.min(1, m.errToObj(e));
	}
	trim() {
		return new C({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }],
		});
	}
	toLowerCase() {
		return new C({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }],
		});
	}
	toUpperCase() {
		return new C({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }],
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((e) => e.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((e) => e.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((e) => e.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((e) => e.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((e) => e.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((e) => e.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((e) => e.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((e) => e.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((e) => e.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((e) => e.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((e) => e.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((e) => e.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((e) => e.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((e) => e.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((e) => e.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((e) => e.kind === "base64url");
	}
	get minLength() {
		let e = null;
		for (const t of this._def.checks)
			t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxLength() {
		let e = null;
		for (const t of this._def.checks)
			t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
}
C.create = (r) =>
	new C({
		checks: [],
		typeName: y.ZodString,
		coerce: (r == null ? void 0 : r.coerce) ?? !1,
		...g(r),
	});
function ut(r, e) {
	const t = (r.toString().split(".")[1] || "").length,
		s = (e.toString().split(".")[1] || "").length,
		n = t > s ? t : s,
		a = Number.parseInt(r.toFixed(n).replace(".", "")),
		i = Number.parseInt(e.toFixed(n).replace(".", ""));
	return (a % i) / 10 ** n;
}
class $ extends _ {
	constructor() {
		(super(...arguments),
			(this.min = this.gte),
			(this.max = this.lte),
			(this.step = this.multipleOf));
	}
	_parse(e) {
		if (
			(this._def.coerce && (e.data = Number(e.data)),
			this._getType(e) !== l.number)
		) {
			const a = this._getOrReturnCtx(e);
			return (
				u(a, {
					code: c.invalid_type,
					expected: l.number,
					received: a.parsedType,
				}),
				p
			);
		}
		let s;
		const n = new k();
		for (const a of this._def.checks)
			a.kind === "int"
				? x.isInteger(e.data) ||
					((s = this._getOrReturnCtx(e, s)),
					u(s, {
						code: c.invalid_type,
						expected: "integer",
						received: "float",
						message: a.message,
					}),
					n.dirty())
				: a.kind === "min"
					? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
						((s = this._getOrReturnCtx(e, s)),
						u(s, {
							code: c.too_small,
							minimum: a.value,
							type: "number",
							inclusive: a.inclusive,
							exact: !1,
							message: a.message,
						}),
						n.dirty())
					: a.kind === "max"
						? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
							((s = this._getOrReturnCtx(e, s)),
							u(s, {
								code: c.too_big,
								maximum: a.value,
								type: "number",
								inclusive: a.inclusive,
								exact: !1,
								message: a.message,
							}),
							n.dirty())
						: a.kind === "multipleOf"
							? ut(e.data, a.value) !== 0 &&
								((s = this._getOrReturnCtx(e, s)),
								u(s, {
									code: c.not_multiple_of,
									multipleOf: a.value,
									message: a.message,
								}),
								n.dirty())
							: a.kind === "finite"
								? Number.isFinite(e.data) ||
									((s = this._getOrReturnCtx(e, s)),
									u(s, { code: c.not_finite, message: a.message }),
									n.dirty())
								: x.assertNever(a);
		return { status: n.value, value: e.data };
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, m.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, m.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, m.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, m.toString(t));
	}
	setLimit(e, t, s, n) {
		return new $({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: e, value: t, inclusive: s, message: m.toString(n) },
			],
		});
	}
	_addCheck(e) {
		return new $({ ...this._def, checks: [...this._def.checks, e] });
	}
	int(e) {
		return this._addCheck({ kind: "int", message: m.toString(e) });
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !1,
			message: m.toString(e),
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !1,
			message: m.toString(e),
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !0,
			message: m.toString(e),
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !0,
			message: m.toString(e),
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: m.toString(t),
		});
	}
	finite(e) {
		return this._addCheck({ kind: "finite", message: m.toString(e) });
	}
	safe(e) {
		return this._addCheck({
			kind: "min",
			inclusive: !0,
			value: Number.MIN_SAFE_INTEGER,
			message: m.toString(e),
		})._addCheck({
			kind: "max",
			inclusive: !0,
			value: Number.MAX_SAFE_INTEGER,
			message: m.toString(e),
		});
	}
	get minValue() {
		let e = null;
		for (const t of this._def.checks)
			t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (const t of this._def.checks)
			t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
	get isInt() {
		return !!this._def.checks.find(
			(e) =>
				e.kind === "int" || (e.kind === "multipleOf" && x.isInteger(e.value)),
		);
	}
	get isFinite() {
		let e = null,
			t = null;
		for (const s of this._def.checks) {
			if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
				return !0;
			s.kind === "min"
				? (t === null || s.value > t) && (t = s.value)
				: s.kind === "max" && (e === null || s.value < e) && (e = s.value);
		}
		return Number.isFinite(t) && Number.isFinite(e);
	}
}
$.create = (r) =>
	new $({
		checks: [],
		typeName: y.ZodNumber,
		coerce: (r == null ? void 0 : r.coerce) || !1,
		...g(r),
	});
class M extends _ {
	constructor() {
		(super(...arguments), (this.min = this.gte), (this.max = this.lte));
	}
	_parse(e) {
		if (this._def.coerce)
			try {
				e.data = BigInt(e.data);
			} catch {
				return this._getInvalidInput(e);
			}
		if (this._getType(e) !== l.bigint) return this._getInvalidInput(e);
		let s;
		const n = new k();
		for (const a of this._def.checks)
			a.kind === "min"
				? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
					((s = this._getOrReturnCtx(e, s)),
					u(s, {
						code: c.too_small,
						type: "bigint",
						minimum: a.value,
						inclusive: a.inclusive,
						message: a.message,
					}),
					n.dirty())
				: a.kind === "max"
					? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
						((s = this._getOrReturnCtx(e, s)),
						u(s, {
							code: c.too_big,
							type: "bigint",
							maximum: a.value,
							inclusive: a.inclusive,
							message: a.message,
						}),
						n.dirty())
					: a.kind === "multipleOf"
						? e.data % a.value !== BigInt(0) &&
							((s = this._getOrReturnCtx(e, s)),
							u(s, {
								code: c.not_multiple_of,
								multipleOf: a.value,
								message: a.message,
							}),
							n.dirty())
						: x.assertNever(a);
		return { status: n.value, value: e.data };
	}
	_getInvalidInput(e) {
		const t = this._getOrReturnCtx(e);
		return (
			u(t, {
				code: c.invalid_type,
				expected: l.bigint,
				received: t.parsedType,
			}),
			p
		);
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, m.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, m.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, m.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, m.toString(t));
	}
	setLimit(e, t, s, n) {
		return new M({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: e, value: t, inclusive: s, message: m.toString(n) },
			],
		});
	}
	_addCheck(e) {
		return new M({ ...this._def, checks: [...this._def.checks, e] });
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !1,
			message: m.toString(e),
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !1,
			message: m.toString(e),
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !0,
			message: m.toString(e),
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !0,
			message: m.toString(e),
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: m.toString(t),
		});
	}
	get minValue() {
		let e = null;
		for (const t of this._def.checks)
			t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (const t of this._def.checks)
			t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
}
M.create = (r) =>
	new M({
		checks: [],
		typeName: y.ZodBigInt,
		coerce: (r == null ? void 0 : r.coerce) ?? !1,
		...g(r),
	});
class G extends _ {
	_parse(e) {
		if (
			(this._def.coerce && (e.data = !!e.data), this._getType(e) !== l.boolean)
		) {
			const s = this._getOrReturnCtx(e);
			return (
				u(s, {
					code: c.invalid_type,
					expected: l.boolean,
					received: s.parsedType,
				}),
				p
			);
		}
		return w(e.data);
	}
}
G.create = (r) =>
	new G({
		typeName: y.ZodBoolean,
		coerce: (r == null ? void 0 : r.coerce) || !1,
		...g(r),
	});
class D extends _ {
	_parse(e) {
		if (
			(this._def.coerce && (e.data = new Date(e.data)),
			this._getType(e) !== l.date)
		) {
			const a = this._getOrReturnCtx(e);
			return (
				u(a, {
					code: c.invalid_type,
					expected: l.date,
					received: a.parsedType,
				}),
				p
			);
		}
		if (Number.isNaN(e.data.getTime())) {
			const a = this._getOrReturnCtx(e);
			return (u(a, { code: c.invalid_date }), p);
		}
		const s = new k();
		let n;
		for (const a of this._def.checks)
			a.kind === "min"
				? e.data.getTime() < a.value &&
					((n = this._getOrReturnCtx(e, n)),
					u(n, {
						code: c.too_small,
						message: a.message,
						inclusive: !0,
						exact: !1,
						minimum: a.value,
						type: "date",
					}),
					s.dirty())
				: a.kind === "max"
					? e.data.getTime() > a.value &&
						((n = this._getOrReturnCtx(e, n)),
						u(n, {
							code: c.too_big,
							message: a.message,
							inclusive: !0,
							exact: !1,
							maximum: a.value,
							type: "date",
						}),
						s.dirty())
					: x.assertNever(a);
		return { status: s.value, value: new Date(e.data.getTime()) };
	}
	_addCheck(e) {
		return new D({ ...this._def, checks: [...this._def.checks, e] });
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e.getTime(),
			message: m.toString(t),
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e.getTime(),
			message: m.toString(t),
		});
	}
	get minDate() {
		let e = null;
		for (const t of this._def.checks)
			t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e != null ? new Date(e) : null;
	}
	get maxDate() {
		let e = null;
		for (const t of this._def.checks)
			t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e != null ? new Date(e) : null;
	}
}
D.create = (r) =>
	new D({
		checks: [],
		coerce: (r == null ? void 0 : r.coerce) || !1,
		typeName: y.ZodDate,
		...g(r),
	});
class le extends _ {
	_parse(e) {
		if (this._getType(e) !== l.symbol) {
			const s = this._getOrReturnCtx(e);
			return (
				u(s, {
					code: c.invalid_type,
					expected: l.symbol,
					received: s.parsedType,
				}),
				p
			);
		}
		return w(e.data);
	}
}
le.create = (r) => new le({ typeName: y.ZodSymbol, ...g(r) });
class Q extends _ {
	_parse(e) {
		if (this._getType(e) !== l.undefined) {
			const s = this._getOrReturnCtx(e);
			return (
				u(s, {
					code: c.invalid_type,
					expected: l.undefined,
					received: s.parsedType,
				}),
				p
			);
		}
		return w(e.data);
	}
}
Q.create = (r) => new Q({ typeName: y.ZodUndefined, ...g(r) });
class X extends _ {
	_parse(e) {
		if (this._getType(e) !== l.null) {
			const s = this._getOrReturnCtx(e);
			return (
				u(s, {
					code: c.invalid_type,
					expected: l.null,
					received: s.parsedType,
				}),
				p
			);
		}
		return w(e.data);
	}
}
X.create = (r) => new X({ typeName: y.ZodNull, ...g(r) });
class J extends _ {
	constructor() {
		(super(...arguments), (this._any = !0));
	}
	_parse(e) {
		return w(e.data);
	}
}
J.create = (r) => new J({ typeName: y.ZodAny, ...g(r) });
class z extends _ {
	constructor() {
		(super(...arguments), (this._unknown = !0));
	}
	_parse(e) {
		return w(e.data);
	}
}
z.create = (r) => new z({ typeName: y.ZodUnknown, ...g(r) });
class E extends _ {
	_parse(e) {
		const t = this._getOrReturnCtx(e);
		return (
			u(t, { code: c.invalid_type, expected: l.never, received: t.parsedType }),
			p
		);
	}
}
E.create = (r) => new E({ typeName: y.ZodNever, ...g(r) });
class fe extends _ {
	_parse(e) {
		if (this._getType(e) !== l.undefined) {
			const s = this._getOrReturnCtx(e);
			return (
				u(s, {
					code: c.invalid_type,
					expected: l.void,
					received: s.parsedType,
				}),
				p
			);
		}
		return w(e.data);
	}
}
fe.create = (r) => new fe({ typeName: y.ZodVoid, ...g(r) });
class O extends _ {
	_parse(e) {
		const { ctx: t, status: s } = this._processInputParams(e),
			n = this._def;
		if (t.parsedType !== l.array)
			return (
				u(t, {
					code: c.invalid_type,
					expected: l.array,
					received: t.parsedType,
				}),
				p
			);
		if (n.exactLength !== null) {
			const i = t.data.length > n.exactLength.value,
				o = t.data.length < n.exactLength.value;
			(i || o) &&
				(u(t, {
					code: i ? c.too_big : c.too_small,
					minimum: o ? n.exactLength.value : void 0,
					maximum: i ? n.exactLength.value : void 0,
					type: "array",
					inclusive: !0,
					exact: !0,
					message: n.exactLength.message,
				}),
				s.dirty());
		}
		if (
			(n.minLength !== null &&
				t.data.length < n.minLength.value &&
				(u(t, {
					code: c.too_small,
					minimum: n.minLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: n.minLength.message,
				}),
				s.dirty()),
			n.maxLength !== null &&
				t.data.length > n.maxLength.value &&
				(u(t, {
					code: c.too_big,
					maximum: n.maxLength.value,
					type: "array",
					inclusive: !0,
					exact: !1,
					message: n.maxLength.message,
				}),
				s.dirty()),
			t.common.async)
		)
			return Promise.all(
				[...t.data].map((i, o) => n.type._parseAsync(new N(t, i, t.path, o))),
			).then((i) => k.mergeArray(s, i));
		const a = [...t.data].map((i, o) =>
			n.type._parseSync(new N(t, i, t.path, o)),
		);
		return k.mergeArray(s, a);
	}
	get element() {
		return this._def.type;
	}
	min(e, t) {
		return new O({
			...this._def,
			minLength: { value: e, message: m.toString(t) },
		});
	}
	max(e, t) {
		return new O({
			...this._def,
			maxLength: { value: e, message: m.toString(t) },
		});
	}
	length(e, t) {
		return new O({
			...this._def,
			exactLength: { value: e, message: m.toString(t) },
		});
	}
	nonempty(e) {
		return this.min(1, e);
	}
}
O.create = (r, e) =>
	new O({
		type: r,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: y.ZodArray,
		...g(e),
	});
function B(r) {
	if (r instanceof b) {
		const e = {};
		for (const t in r.shape) {
			const s = r.shape[t];
			e[t] = j.create(B(s));
		}
		return new b({ ...r._def, shape: () => e });
	} else
		return r instanceof O
			? new O({ ...r._def, type: B(r.element) })
			: r instanceof j
				? j.create(B(r.unwrap()))
				: r instanceof V
					? V.create(B(r.unwrap()))
					: r instanceof R
						? R.create(r.items.map((e) => B(e)))
						: r;
}
class b extends _ {
	constructor() {
		(super(...arguments),
			(this._cached = null),
			(this.nonstrict = this.passthrough),
			(this.augment = this.extend));
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const e = this._def.shape(),
			t = x.objectKeys(e);
		return ((this._cached = { shape: e, keys: t }), this._cached);
	}
	_parse(e) {
		if (this._getType(e) !== l.object) {
			const f = this._getOrReturnCtx(e);
			return (
				u(f, {
					code: c.invalid_type,
					expected: l.object,
					received: f.parsedType,
				}),
				p
			);
		}
		const { status: s, ctx: n } = this._processInputParams(e),
			{ shape: a, keys: i } = this._getCached(),
			o = [];
		if (!(this._def.catchall instanceof E && this._def.unknownKeys === "strip"))
			for (const f in n.data) i.includes(f) || o.push(f);
		const h = [];
		for (const f of i) {
			const v = a[f],
				S = n.data[f];
			h.push({
				key: { status: "valid", value: f },
				value: v._parse(new N(n, S, n.path, f)),
				alwaysSet: f in n.data,
			});
		}
		if (this._def.catchall instanceof E) {
			const f = this._def.unknownKeys;
			if (f === "passthrough")
				for (const v of o)
					h.push({
						key: { status: "valid", value: v },
						value: { status: "valid", value: n.data[v] },
					});
			else if (f === "strict")
				o.length > 0 &&
					(u(n, { code: c.unrecognized_keys, keys: o }), s.dirty());
			else if (f !== "strip")
				throw new Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			const f = this._def.catchall;
			for (const v of o) {
				const S = n.data[v];
				h.push({
					key: { status: "valid", value: v },
					value: f._parse(new N(n, S, n.path, v)),
					alwaysSet: v in n.data,
				});
			}
		}
		return n.common.async
			? Promise.resolve()
					.then(async () => {
						const f = [];
						for (const v of h) {
							const S = await v.key,
								we = await v.value;
							f.push({ key: S, value: we, alwaysSet: v.alwaysSet });
						}
						return f;
					})
					.then((f) => k.mergeObjectSync(s, f))
			: k.mergeObjectSync(s, h);
	}
	get shape() {
		return this._def.shape();
	}
	strict(e) {
		return (
			m.errToObj,
			new b({
				...this._def,
				unknownKeys: "strict",
				...(e !== void 0
					? {
							errorMap: (t, s) => {
								var a, i;
								const n =
									((i = (a = this._def).errorMap) == null
										? void 0
										: i.call(a, t, s).message) ?? s.defaultError;
								return t.code === "unrecognized_keys"
									? { message: m.errToObj(e).message ?? n }
									: { message: n };
							},
						}
					: {}),
			})
		);
	}
	strip() {
		return new b({ ...this._def, unknownKeys: "strip" });
	}
	passthrough() {
		return new b({ ...this._def, unknownKeys: "passthrough" });
	}
	extend(e) {
		return new b({
			...this._def,
			shape: () => ({ ...this._def.shape(), ...e }),
		});
	}
	merge(e) {
		return new b({
			unknownKeys: e._def.unknownKeys,
			catchall: e._def.catchall,
			shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
			typeName: y.ZodObject,
		});
	}
	setKey(e, t) {
		return this.augment({ [e]: t });
	}
	catchall(e) {
		return new b({ ...this._def, catchall: e });
	}
	pick(e) {
		const t = {};
		for (const s of x.objectKeys(e))
			e[s] && this.shape[s] && (t[s] = this.shape[s]);
		return new b({ ...this._def, shape: () => t });
	}
	omit(e) {
		const t = {};
		for (const s of x.objectKeys(this.shape)) e[s] || (t[s] = this.shape[s]);
		return new b({ ...this._def, shape: () => t });
	}
	deepPartial() {
		return B(this);
	}
	partial(e) {
		const t = {};
		for (const s of x.objectKeys(this.shape)) {
			const n = this.shape[s];
			e && !e[s] ? (t[s] = n) : (t[s] = n.optional());
		}
		return new b({ ...this._def, shape: () => t });
	}
	required(e) {
		const t = {};
		for (const s of x.objectKeys(this.shape))
			if (e && !e[s]) t[s] = this.shape[s];
			else {
				let a = this.shape[s];
				for (; a instanceof j; ) a = a._def.innerType;
				t[s] = a;
			}
		return new b({ ...this._def, shape: () => t });
	}
	keyof() {
		return Re(x.objectKeys(this.shape));
	}
}
b.create = (r, e) =>
	new b({
		shape: () => r,
		unknownKeys: "strip",
		catchall: E.create(),
		typeName: y.ZodObject,
		...g(e),
	});
b.strictCreate = (r, e) =>
	new b({
		shape: () => r,
		unknownKeys: "strict",
		catchall: E.create(),
		typeName: y.ZodObject,
		...g(e),
	});
b.lazycreate = (r, e) =>
	new b({
		shape: r,
		unknownKeys: "strip",
		catchall: E.create(),
		typeName: y.ZodObject,
		...g(e),
	});
class K extends _ {
	_parse(e) {
		const { ctx: t } = this._processInputParams(e),
			s = this._def.options;
		function n(a) {
			for (const o of a) if (o.result.status === "valid") return o.result;
			for (const o of a)
				if (o.result.status === "dirty")
					return (t.common.issues.push(...o.ctx.common.issues), o.result);
			const i = a.map((o) => new T(o.ctx.common.issues));
			return (u(t, { code: c.invalid_union, unionErrors: i }), p);
		}
		if (t.common.async)
			return Promise.all(
				s.map(async (a) => {
					const i = { ...t, common: { ...t.common, issues: [] }, parent: null };
					return {
						result: await a._parseAsync({
							data: t.data,
							path: t.path,
							parent: i,
						}),
						ctx: i,
					};
				}),
			).then(n);
		{
			let a;
			const i = [];
			for (const h of s) {
				const f = { ...t, common: { ...t.common, issues: [] }, parent: null },
					v = h._parseSync({ data: t.data, path: t.path, parent: f });
				if (v.status === "valid") return v;
				(v.status === "dirty" && !a && (a = { result: v, ctx: f }),
					f.common.issues.length && i.push(f.common.issues));
			}
			if (a) return (t.common.issues.push(...a.ctx.common.issues), a.result);
			const o = i.map((h) => new T(h));
			return (u(t, { code: c.invalid_union, unionErrors: o }), p);
		}
	}
	get options() {
		return this._def.options;
	}
}
K.create = (r, e) => new K({ options: r, typeName: y.ZodUnion, ...g(e) });
const Z = (r) =>
	r instanceof re
		? Z(r.schema)
		: r instanceof A
			? Z(r.innerType())
			: r instanceof se
				? [r.value]
				: r instanceof P
					? r.options
					: r instanceof ne
						? x.objectValues(r.enum)
						: r instanceof ae
							? Z(r._def.innerType)
							: r instanceof Q
								? [void 0]
								: r instanceof X
									? [null]
									: r instanceof j
										? [void 0, ...Z(r.unwrap())]
										: r instanceof V
											? [null, ...Z(r.unwrap())]
											: r instanceof ke || r instanceof oe
												? Z(r.unwrap())
												: r instanceof ie
													? Z(r._def.innerType)
													: [];
class pe extends _ {
	_parse(e) {
		const { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== l.object)
			return (
				u(t, {
					code: c.invalid_type,
					expected: l.object,
					received: t.parsedType,
				}),
				p
			);
		const s = this.discriminator,
			n = t.data[s],
			a = this.optionsMap.get(n);
		return a
			? t.common.async
				? a._parseAsync({ data: t.data, path: t.path, parent: t })
				: a._parseSync({ data: t.data, path: t.path, parent: t })
			: (u(t, {
					code: c.invalid_union_discriminator,
					options: Array.from(this.optionsMap.keys()),
					path: [s],
				}),
				p);
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
	static create(e, t, s) {
		const n = new Map();
		for (const a of t) {
			const i = Z(a.shape[e]);
			if (!i.length)
				throw new Error(
					`A discriminator value for key \`${e}\` could not be extracted from all schema options`,
				);
			for (const o of i) {
				if (n.has(o))
					throw new Error(
						`Discriminator property ${String(e)} has duplicate value ${String(o)}`,
					);
				n.set(o, a);
			}
		}
		return new pe({
			typeName: y.ZodDiscriminatedUnion,
			discriminator: e,
			options: t,
			optionsMap: n,
			...g(s),
		});
	}
}
function be(r, e) {
	const t = I(r),
		s = I(e);
	if (r === e) return { valid: !0, data: r };
	if (t === l.object && s === l.object) {
		const n = x.objectKeys(e),
			a = x.objectKeys(r).filter((o) => n.indexOf(o) !== -1),
			i = { ...r, ...e };
		for (const o of a) {
			const h = be(r[o], e[o]);
			if (!h.valid) return { valid: !1 };
			i[o] = h.data;
		}
		return { valid: !0, data: i };
	} else if (t === l.array && s === l.array) {
		if (r.length !== e.length) return { valid: !1 };
		const n = [];
		for (let a = 0; a < r.length; a++) {
			const i = r[a],
				o = e[a],
				h = be(i, o);
			if (!h.valid) return { valid: !1 };
			n.push(h.data);
		}
		return { valid: !0, data: n };
	} else
		return t === l.date && s === l.date && +r == +e
			? { valid: !0, data: r }
			: { valid: !1 };
}
class ee extends _ {
	_parse(e) {
		const { status: t, ctx: s } = this._processInputParams(e),
			n = (a, i) => {
				if (ve(a) || ve(i)) return p;
				const o = be(a.value, i.value);
				return o.valid
					? ((xe(a) || xe(i)) && t.dirty(), { status: t.value, value: o.data })
					: (u(s, { code: c.invalid_intersection_types }), p);
			};
		return s.common.async
			? Promise.all([
					this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
					this._def.right._parseAsync({
						data: s.data,
						path: s.path,
						parent: s,
					}),
				]).then(([a, i]) => n(a, i))
			: n(
					this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
					this._def.right._parseSync({ data: s.data, path: s.path, parent: s }),
				);
	}
}
ee.create = (r, e, t) =>
	new ee({ left: r, right: e, typeName: y.ZodIntersection, ...g(t) });
class R extends _ {
	_parse(e) {
		const { status: t, ctx: s } = this._processInputParams(e);
		if (s.parsedType !== l.array)
			return (
				u(s, {
					code: c.invalid_type,
					expected: l.array,
					received: s.parsedType,
				}),
				p
			);
		if (s.data.length < this._def.items.length)
			return (
				u(s, {
					code: c.too_small,
					minimum: this._def.items.length,
					inclusive: !0,
					exact: !1,
					type: "array",
				}),
				p
			);
		!this._def.rest &&
			s.data.length > this._def.items.length &&
			(u(s, {
				code: c.too_big,
				maximum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: "array",
			}),
			t.dirty());
		const a = [...s.data]
			.map((i, o) => {
				const h = this._def.items[o] || this._def.rest;
				return h ? h._parse(new N(s, i, s.path, o)) : null;
			})
			.filter((i) => !!i);
		return s.common.async
			? Promise.all(a).then((i) => k.mergeArray(t, i))
			: k.mergeArray(t, a);
	}
	get items() {
		return this._def.items;
	}
	rest(e) {
		return new R({ ...this._def, rest: e });
	}
}
R.create = (r, e) => {
	if (!Array.isArray(r))
		throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new R({ items: r, typeName: y.ZodTuple, rest: null, ...g(e) });
};
class te extends _ {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		const { status: t, ctx: s } = this._processInputParams(e);
		if (s.parsedType !== l.object)
			return (
				u(s, {
					code: c.invalid_type,
					expected: l.object,
					received: s.parsedType,
				}),
				p
			);
		const n = [],
			a = this._def.keyType,
			i = this._def.valueType;
		for (const o in s.data)
			n.push({
				key: a._parse(new N(s, o, s.path, o)),
				value: i._parse(new N(s, s.data[o], s.path, o)),
				alwaysSet: o in s.data,
			});
		return s.common.async ? k.mergeObjectAsync(t, n) : k.mergeObjectSync(t, n);
	}
	get element() {
		return this._def.valueType;
	}
	static create(e, t, s) {
		return t instanceof _
			? new te({ keyType: e, valueType: t, typeName: y.ZodRecord, ...g(s) })
			: new te({
					keyType: C.create(),
					valueType: e,
					typeName: y.ZodRecord,
					...g(t),
				});
	}
}
class he extends _ {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		const { status: t, ctx: s } = this._processInputParams(e);
		if (s.parsedType !== l.map)
			return (
				u(s, { code: c.invalid_type, expected: l.map, received: s.parsedType }),
				p
			);
		const n = this._def.keyType,
			a = this._def.valueType,
			i = [...s.data.entries()].map(([o, h], f) => ({
				key: n._parse(new N(s, o, s.path, [f, "key"])),
				value: a._parse(new N(s, h, s.path, [f, "value"])),
			}));
		if (s.common.async) {
			const o = new Map();
			return Promise.resolve().then(async () => {
				for (const h of i) {
					const f = await h.key,
						v = await h.value;
					if (f.status === "aborted" || v.status === "aborted") return p;
					((f.status === "dirty" || v.status === "dirty") && t.dirty(),
						o.set(f.value, v.value));
				}
				return { status: t.value, value: o };
			});
		} else {
			const o = new Map();
			for (const h of i) {
				const f = h.key,
					v = h.value;
				if (f.status === "aborted" || v.status === "aborted") return p;
				((f.status === "dirty" || v.status === "dirty") && t.dirty(),
					o.set(f.value, v.value));
			}
			return { status: t.value, value: o };
		}
	}
}
he.create = (r, e, t) =>
	new he({ valueType: e, keyType: r, typeName: y.ZodMap, ...g(t) });
class U extends _ {
	_parse(e) {
		const { status: t, ctx: s } = this._processInputParams(e);
		if (s.parsedType !== l.set)
			return (
				u(s, { code: c.invalid_type, expected: l.set, received: s.parsedType }),
				p
			);
		const n = this._def;
		(n.minSize !== null &&
			s.data.size < n.minSize.value &&
			(u(s, {
				code: c.too_small,
				minimum: n.minSize.value,
				type: "set",
				inclusive: !0,
				exact: !1,
				message: n.minSize.message,
			}),
			t.dirty()),
			n.maxSize !== null &&
				s.data.size > n.maxSize.value &&
				(u(s, {
					code: c.too_big,
					maximum: n.maxSize.value,
					type: "set",
					inclusive: !0,
					exact: !1,
					message: n.maxSize.message,
				}),
				t.dirty()));
		const a = this._def.valueType;
		function i(h) {
			const f = new Set();
			for (const v of h) {
				if (v.status === "aborted") return p;
				(v.status === "dirty" && t.dirty(), f.add(v.value));
			}
			return { status: t.value, value: f };
		}
		const o = [...s.data.values()].map((h, f) =>
			a._parse(new N(s, h, s.path, f)),
		);
		return s.common.async ? Promise.all(o).then((h) => i(h)) : i(o);
	}
	min(e, t) {
		return new U({
			...this._def,
			minSize: { value: e, message: m.toString(t) },
		});
	}
	max(e, t) {
		return new U({
			...this._def,
			maxSize: { value: e, message: m.toString(t) },
		});
	}
	size(e, t) {
		return this.min(e, t).max(e, t);
	}
	nonempty(e) {
		return this.min(1, e);
	}
}
U.create = (r, e) =>
	new U({
		valueType: r,
		minSize: null,
		maxSize: null,
		typeName: y.ZodSet,
		...g(e),
	});
class W extends _ {
	constructor() {
		(super(...arguments), (this.validate = this.implement));
	}
	_parse(e) {
		const { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== l.function)
			return (
				u(t, {
					code: c.invalid_type,
					expected: l.function,
					received: t.parsedType,
				}),
				p
			);
		function s(o, h) {
			return ue({
				data: o,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					de(),
					q,
				].filter((f) => !!f),
				issueData: { code: c.invalid_arguments, argumentsError: h },
			});
		}
		function n(o, h) {
			return ue({
				data: o,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					de(),
					q,
				].filter((f) => !!f),
				issueData: { code: c.invalid_return_type, returnTypeError: h },
			});
		}
		const a = { errorMap: t.common.contextualErrorMap },
			i = t.data;
		if (this._def.returns instanceof Y) {
			const o = this;
			return w(async function (...h) {
				const f = new T([]),
					v = await o._def.args.parseAsync(h, a).catch((ye) => {
						throw (f.addIssue(s(h, ye)), f);
					}),
					S = await Reflect.apply(i, this, v);
				return await o._def.returns._def.type.parseAsync(S, a).catch((ye) => {
					throw (f.addIssue(n(S, ye)), f);
				});
			});
		} else {
			const o = this;
			return w(function (...h) {
				const f = o._def.args.safeParse(h, a);
				if (!f.success) throw new T([s(h, f.error)]);
				const v = Reflect.apply(i, this, f.data),
					S = o._def.returns.safeParse(v, a);
				if (!S.success) throw new T([n(v, S.error)]);
				return S.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...e) {
		return new W({ ...this._def, args: R.create(e).rest(z.create()) });
	}
	returns(e) {
		return new W({ ...this._def, returns: e });
	}
	implement(e) {
		return this.parse(e);
	}
	strictImplement(e) {
		return this.parse(e);
	}
	static create(e, t, s) {
		return new W({
			args: e || R.create([]).rest(z.create()),
			returns: t || z.create(),
			typeName: y.ZodFunction,
			...g(s),
		});
	}
}
class re extends _ {
	get schema() {
		return this._def.getter();
	}
	_parse(e) {
		const { ctx: t } = this._processInputParams(e);
		return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
	}
}
re.create = (r, e) => new re({ getter: r, typeName: y.ZodLazy, ...g(e) });
class se extends _ {
	_parse(e) {
		if (e.data !== this._def.value) {
			const t = this._getOrReturnCtx(e);
			return (
				u(t, {
					received: t.data,
					code: c.invalid_literal,
					expected: this._def.value,
				}),
				p
			);
		}
		return { status: "valid", value: e.data };
	}
	get value() {
		return this._def.value;
	}
}
se.create = (r, e) => new se({ value: r, typeName: y.ZodLiteral, ...g(e) });
function Re(r, e) {
	return new P({ values: r, typeName: y.ZodEnum, ...g(e) });
}
class P extends _ {
	_parse(e) {
		if (typeof e.data != "string") {
			const t = this._getOrReturnCtx(e),
				s = this._def.values;
			return (
				u(t, {
					expected: x.joinValues(s),
					received: t.parsedType,
					code: c.invalid_type,
				}),
				p
			);
		}
		if (
			(this._cache || (this._cache = new Set(this._def.values)),
			!this._cache.has(e.data))
		) {
			const t = this._getOrReturnCtx(e),
				s = this._def.values;
			return (
				u(t, { received: t.data, code: c.invalid_enum_value, options: s }),
				p
			);
		}
		return w(e.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const e = {};
		for (const t of this._def.values) e[t] = t;
		return e;
	}
	get Values() {
		const e = {};
		for (const t of this._def.values) e[t] = t;
		return e;
	}
	get Enum() {
		const e = {};
		for (const t of this._def.values) e[t] = t;
		return e;
	}
	extract(e, t = this._def) {
		return P.create(e, { ...this._def, ...t });
	}
	exclude(e, t = this._def) {
		return P.create(
			this.options.filter((s) => !e.includes(s)),
			{ ...this._def, ...t },
		);
	}
}
P.create = Re;
class ne extends _ {
	_parse(e) {
		const t = x.getValidEnumValues(this._def.values),
			s = this._getOrReturnCtx(e);
		if (s.parsedType !== l.string && s.parsedType !== l.number) {
			const n = x.objectValues(t);
			return (
				u(s, {
					expected: x.joinValues(n),
					received: s.parsedType,
					code: c.invalid_type,
				}),
				p
			);
		}
		if (
			(this._cache ||
				(this._cache = new Set(x.getValidEnumValues(this._def.values))),
			!this._cache.has(e.data))
		) {
			const n = x.objectValues(t);
			return (
				u(s, { received: s.data, code: c.invalid_enum_value, options: n }),
				p
			);
		}
		return w(e.data);
	}
	get enum() {
		return this._def.values;
	}
}
ne.create = (r, e) => new ne({ values: r, typeName: y.ZodNativeEnum, ...g(e) });
class Y extends _ {
	unwrap() {
		return this._def.type;
	}
	_parse(e) {
		const { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== l.promise && t.common.async === !1)
			return (
				u(t, {
					code: c.invalid_type,
					expected: l.promise,
					received: t.parsedType,
				}),
				p
			);
		const s = t.parsedType === l.promise ? t.data : Promise.resolve(t.data);
		return w(
			s.then((n) =>
				this._def.type.parseAsync(n, {
					path: t.path,
					errorMap: t.common.contextualErrorMap,
				}),
			),
		);
	}
}
Y.create = (r, e) => new Y({ type: r, typeName: y.ZodPromise, ...g(e) });
class A extends _ {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === y.ZodEffects
			? this._def.schema.sourceType()
			: this._def.schema;
	}
	_parse(e) {
		const { status: t, ctx: s } = this._processInputParams(e),
			n = this._def.effect || null,
			a = {
				addIssue: (i) => {
					(u(s, i), i.fatal ? t.abort() : t.dirty());
				},
				get path() {
					return s.path;
				},
			};
		if (((a.addIssue = a.addIssue.bind(a)), n.type === "preprocess")) {
			const i = n.transform(s.data, a);
			if (s.common.async)
				return Promise.resolve(i).then(async (o) => {
					if (t.value === "aborted") return p;
					const h = await this._def.schema._parseAsync({
						data: o,
						path: s.path,
						parent: s,
					});
					return h.status === "aborted"
						? p
						: h.status === "dirty" || t.value === "dirty"
							? F(h.value)
							: h;
				});
			{
				if (t.value === "aborted") return p;
				const o = this._def.schema._parseSync({
					data: i,
					path: s.path,
					parent: s,
				});
				return o.status === "aborted"
					? p
					: o.status === "dirty" || t.value === "dirty"
						? F(o.value)
						: o;
			}
		}
		if (n.type === "refinement") {
			const i = (o) => {
				const h = n.refinement(o, a);
				if (s.common.async) return Promise.resolve(h);
				if (h instanceof Promise)
					throw new Error(
						"Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				return o;
			};
			if (s.common.async === !1) {
				const o = this._def.schema._parseSync({
					data: s.data,
					path: s.path,
					parent: s,
				});
				return o.status === "aborted"
					? p
					: (o.status === "dirty" && t.dirty(),
						i(o.value),
						{ status: t.value, value: o.value });
			} else
				return this._def.schema
					._parseAsync({ data: s.data, path: s.path, parent: s })
					.then((o) =>
						o.status === "aborted"
							? p
							: (o.status === "dirty" && t.dirty(),
								i(o.value).then(() => ({ status: t.value, value: o.value }))),
					);
		}
		if (n.type === "transform")
			if (s.common.async === !1) {
				const i = this._def.schema._parseSync({
					data: s.data,
					path: s.path,
					parent: s,
				});
				if (!L(i)) return p;
				const o = n.transform(i.value, a);
				if (o instanceof Promise)
					throw new Error(
						"Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				return { status: t.value, value: o };
			} else
				return this._def.schema
					._parseAsync({ data: s.data, path: s.path, parent: s })
					.then((i) =>
						L(i)
							? Promise.resolve(n.transform(i.value, a)).then((o) => ({
									status: t.value,
									value: o,
								}))
							: p,
					);
		x.assertNever(n);
	}
}
A.create = (r, e, t) =>
	new A({ schema: r, typeName: y.ZodEffects, effect: e, ...g(t) });
A.createWithPreprocess = (r, e, t) =>
	new A({
		schema: e,
		effect: { type: "preprocess", transform: r },
		typeName: y.ZodEffects,
		...g(t),
	});
class j extends _ {
	_parse(e) {
		return this._getType(e) === l.undefined
			? w(void 0)
			: this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
}
j.create = (r, e) => new j({ innerType: r, typeName: y.ZodOptional, ...g(e) });
class V extends _ {
	_parse(e) {
		return this._getType(e) === l.null
			? w(null)
			: this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
}
V.create = (r, e) => new V({ innerType: r, typeName: y.ZodNullable, ...g(e) });
class ae extends _ {
	_parse(e) {
		const { ctx: t } = this._processInputParams(e);
		let s = t.data;
		return (
			t.parsedType === l.undefined && (s = this._def.defaultValue()),
			this._def.innerType._parse({ data: s, path: t.path, parent: t })
		);
	}
	removeDefault() {
		return this._def.innerType;
	}
}
ae.create = (r, e) =>
	new ae({
		innerType: r,
		typeName: y.ZodDefault,
		defaultValue: typeof e.default == "function" ? e.default : () => e.default,
		...g(e),
	});
class ie extends _ {
	_parse(e) {
		const { ctx: t } = this._processInputParams(e),
			s = { ...t, common: { ...t.common, issues: [] } },
			n = this._def.innerType._parse({
				data: s.data,
				path: s.path,
				parent: { ...s },
			});
		return H(n)
			? n.then((a) => ({
					status: "valid",
					value:
						a.status === "valid"
							? a.value
							: this._def.catchValue({
									get error() {
										return new T(s.common.issues);
									},
									input: s.data,
								}),
				}))
			: {
					status: "valid",
					value:
						n.status === "valid"
							? n.value
							: this._def.catchValue({
									get error() {
										return new T(s.common.issues);
									},
									input: s.data,
								}),
				};
	}
	removeCatch() {
		return this._def.innerType;
	}
}
ie.create = (r, e) =>
	new ie({
		innerType: r,
		typeName: y.ZodCatch,
		catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
		...g(e),
	});
class me extends _ {
	_parse(e) {
		if (this._getType(e) !== l.nan) {
			const s = this._getOrReturnCtx(e);
			return (
				u(s, { code: c.invalid_type, expected: l.nan, received: s.parsedType }),
				p
			);
		}
		return { status: "valid", value: e.data };
	}
}
me.create = (r) => new me({ typeName: y.ZodNaN, ...g(r) });
const lt = Symbol("zod_brand");
class ke extends _ {
	_parse(e) {
		const { ctx: t } = this._processInputParams(e),
			s = t.data;
		return this._def.type._parse({ data: s, path: t.path, parent: t });
	}
	unwrap() {
		return this._def.type;
	}
}
class ce extends _ {
	_parse(e) {
		const { status: t, ctx: s } = this._processInputParams(e);
		if (s.common.async)
			return (async () => {
				const a = await this._def.in._parseAsync({
					data: s.data,
					path: s.path,
					parent: s,
				});
				return a.status === "aborted"
					? p
					: a.status === "dirty"
						? (t.dirty(), F(a.value))
						: this._def.out._parseAsync({
								data: a.value,
								path: s.path,
								parent: s,
							});
			})();
		{
			const n = this._def.in._parseSync({
				data: s.data,
				path: s.path,
				parent: s,
			});
			return n.status === "aborted"
				? p
				: n.status === "dirty"
					? (t.dirty(), { status: "dirty", value: n.value })
					: this._def.out._parseSync({
							data: n.value,
							path: s.path,
							parent: s,
						});
		}
	}
	static create(e, t) {
		return new ce({ in: e, out: t, typeName: y.ZodPipeline });
	}
}
class oe extends _ {
	_parse(e) {
		const t = this._def.innerType._parse(e),
			s = (n) => (L(n) && (n.value = Object.freeze(n.value)), n);
		return H(t) ? t.then((n) => s(n)) : s(t);
	}
	unwrap() {
		return this._def.innerType;
	}
}
oe.create = (r, e) =>
	new oe({ innerType: r, typeName: y.ZodReadonly, ...g(e) });
function Se(r, e) {
	const t =
		typeof r == "function" ? r(e) : typeof r == "string" ? { message: r } : r;
	return typeof t == "string" ? { message: t } : t;
}
function Ze(r, e = {}, t) {
	return r
		? J.create().superRefine((s, n) => {
				const a = r(s);
				if (a instanceof Promise)
					return a.then((i) => {
						if (!i) {
							const o = Se(e, s),
								h = o.fatal ?? t ?? !0;
							n.addIssue({ code: "custom", ...o, fatal: h });
						}
					});
				if (!a) {
					const i = Se(e, s),
						o = i.fatal ?? t ?? !0;
					n.addIssue({ code: "custom", ...i, fatal: o });
				}
			})
		: J.create();
}
const ft = { object: b.lazycreate };
var y;
(function (r) {
	((r.ZodString = "ZodString"),
		(r.ZodNumber = "ZodNumber"),
		(r.ZodNaN = "ZodNaN"),
		(r.ZodBigInt = "ZodBigInt"),
		(r.ZodBoolean = "ZodBoolean"),
		(r.ZodDate = "ZodDate"),
		(r.ZodSymbol = "ZodSymbol"),
		(r.ZodUndefined = "ZodUndefined"),
		(r.ZodNull = "ZodNull"),
		(r.ZodAny = "ZodAny"),
		(r.ZodUnknown = "ZodUnknown"),
		(r.ZodNever = "ZodNever"),
		(r.ZodVoid = "ZodVoid"),
		(r.ZodArray = "ZodArray"),
		(r.ZodObject = "ZodObject"),
		(r.ZodUnion = "ZodUnion"),
		(r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
		(r.ZodIntersection = "ZodIntersection"),
		(r.ZodTuple = "ZodTuple"),
		(r.ZodRecord = "ZodRecord"),
		(r.ZodMap = "ZodMap"),
		(r.ZodSet = "ZodSet"),
		(r.ZodFunction = "ZodFunction"),
		(r.ZodLazy = "ZodLazy"),
		(r.ZodLiteral = "ZodLiteral"),
		(r.ZodEnum = "ZodEnum"),
		(r.ZodEffects = "ZodEffects"),
		(r.ZodNativeEnum = "ZodNativeEnum"),
		(r.ZodOptional = "ZodOptional"),
		(r.ZodNullable = "ZodNullable"),
		(r.ZodDefault = "ZodDefault"),
		(r.ZodCatch = "ZodCatch"),
		(r.ZodPromise = "ZodPromise"),
		(r.ZodBranded = "ZodBranded"),
		(r.ZodPipeline = "ZodPipeline"),
		(r.ZodReadonly = "ZodReadonly"));
})(y || (y = {}));
const ht = (r, e = { message: `Input not instance of ${r.name}` }) =>
		Ze((t) => t instanceof r, e),
	Ie = C.create,
	Ee = $.create,
	mt = me.create,
	pt = M.create,
	$e = G.create,
	yt = D.create,
	gt = le.create,
	_t = Q.create,
	vt = X.create,
	xt = J.create,
	bt = z.create,
	kt = E.create,
	wt = fe.create,
	Tt = O.create,
	St = b.create,
	Ct = b.strictCreate,
	Ot = K.create,
	At = pe.create,
	jt = ee.create,
	Nt = R.create,
	Rt = te.create,
	Zt = he.create,
	It = U.create,
	Et = W.create,
	$t = re.create,
	Mt = se.create,
	Pt = P.create,
	Vt = ne.create,
	zt = Y.create,
	Ce = A.create,
	Lt = j.create,
	Dt = V.create,
	Ut = A.createWithPreprocess,
	Bt = ce.create,
	Ft = () => Ie().optional(),
	Wt = () => Ee().optional(),
	qt = () => $e().optional(),
	Jt = {
		string: (r) => C.create({ ...r, coerce: !0 }),
		number: (r) => $.create({ ...r, coerce: !0 }),
		boolean: (r) => G.create({ ...r, coerce: !0 }),
		bigint: (r) => M.create({ ...r, coerce: !0 }),
		date: (r) => D.create({ ...r, coerce: !0 }),
	},
	Yt = p,
	d = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				BRAND: lt,
				DIRTY: F,
				EMPTY_PATH: Be,
				INVALID: p,
				NEVER: Yt,
				OK: w,
				ParseStatus: k,
				Schema: _,
				ZodAny: J,
				ZodArray: O,
				ZodBigInt: M,
				ZodBoolean: G,
				ZodBranded: ke,
				ZodCatch: ie,
				ZodDate: D,
				ZodDefault: ae,
				ZodDiscriminatedUnion: pe,
				ZodEffects: A,
				ZodEnum: P,
				ZodError: T,
				get ZodFirstPartyTypeKind() {
					return y;
				},
				ZodFunction: W,
				ZodIntersection: ee,
				ZodIssueCode: c,
				ZodLazy: re,
				ZodLiteral: se,
				ZodMap: he,
				ZodNaN: me,
				ZodNativeEnum: ne,
				ZodNever: E,
				ZodNull: X,
				ZodNullable: V,
				ZodNumber: $,
				ZodObject: b,
				ZodOptional: j,
				ZodParsedType: l,
				ZodPipeline: ce,
				ZodPromise: Y,
				ZodReadonly: oe,
				ZodRecord: te,
				ZodSchema: _,
				ZodSet: U,
				ZodString: C,
				ZodSymbol: le,
				ZodTransformer: A,
				ZodTuple: R,
				ZodType: _,
				ZodUndefined: Q,
				ZodUnion: K,
				ZodUnknown: z,
				ZodVoid: fe,
				addIssueToContext: u,
				any: xt,
				array: Tt,
				bigint: pt,
				boolean: $e,
				coerce: Jt,
				custom: Ze,
				date: yt,
				datetimeRegex: Ne,
				defaultErrorMap: q,
				discriminatedUnion: At,
				effect: Ce,
				enum: Pt,
				function: Et,
				getErrorMap: de,
				getParsedType: I,
				instanceof: ht,
				intersection: jt,
				isAborted: ve,
				isAsync: H,
				isDirty: xe,
				isValid: L,
				late: ft,
				lazy: $t,
				literal: Mt,
				makeIssue: ue,
				map: Zt,
				nan: mt,
				nativeEnum: Vt,
				never: kt,
				null: vt,
				nullable: Dt,
				number: Ee,
				object: St,
				get objectUtil() {
					return _e;
				},
				oboolean: qt,
				onumber: Wt,
				optional: Lt,
				ostring: Ft,
				pipeline: Bt,
				preprocess: Ut,
				promise: zt,
				quotelessJson: De,
				record: Rt,
				set: It,
				setErrorMap: Ue,
				strictObject: Ct,
				string: Ie,
				symbol: gt,
				transformer: Ce,
				tuple: Nt,
				undefined: _t,
				union: Ot,
				unknown: bt,
				get util() {
					return x;
				},
				void: wt,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Ht = d.enum([
		"major",
		"cup",
		"bread",
		"wheat",
		"cow",
		"cog",
		"factory",
		"fruit",
		"boat",
	]),
	Gt = d.enum(["blue", "green", "red", "purple"]),
	Me = d.object({
		key: d.string(),
		display: d.string(),
		tag: Ht,
		picture: d.array(d.string()),
		cost: d.number(),
		effect: d.string(),
		determiner: d.enum(["a", "an"]),
	}),
	Pe = d.object({
		colour: Gt,
		activationNumbers: d.array(d.number()),
		pluralDisplay: d.string(),
	});
Me.merge(Pe);
const Ve = d.record(d.string(), d.array(d.string()));
d.record(d.string(), d.array(d.string()));
Me.merge(Pe.partial());
d.array(d.string());
const Qt = d.object({
		establishments: Ve,
		landmarks: d.record(d.string(), d.boolean()),
	}),
	Xt = d.object({ id: d.string(), name: d.string() }),
	Kt = d.object({ password: d.string() }),
	ze = d.object({
		common: d.object({
			turn: d.number(),
			supply: Ve,
			turnOrder: d.array(d.string()),
			activePlayerId: d.string(),
			turnPhase: d.enum([
				"lobby",
				"before-roll",
				"after-roll",
				"before-build",
				"after-build",
				"end",
			]),
			pendingActions: d.array(
				d.object({
					playerId: d.string(),
					action: d.enum([
						"tv-station",
						"business-centre",
						"radio-tower",
						"harbour",
					]),
				}),
			),
			autoActions: d.array(
				d.object({ playerId: d.string(), action: d.enum(["amusement-park"]) }),
			),
			diceRolls: d.array(d.number()),
			harbourExtra: d.number(),
			processedEstablishments: d.array(d.string()),
			turnEvents: d.array(d.string()),
		}),
		players: d.record(
			d.string(),
			d.object({ playerId: d.string(), city: Qt, money: d.number() }),
		),
	}),
	Le = d.object({ common: d.object({ deck: d.array(d.string()) }) }),
	er = d.object({
		id: d.string(),
		players: d.array(Xt),
		hostId: d.string(),
		shortId: d.optional(d.string()),
		isPublic: d.optional(d.boolean()),
	}),
	tr = d.enum(["total", "variable", "hybrid"]),
	rr = d.object({
		landmarks: d.array(d.string()),
		timeLimitSeconds: d.number(),
		timeLimitType: d.enum(["off", "on"]),
		startingMoney: d.number(),
		supplyType: tr,
	}),
	sr = d.object({ publicState: ze, secretState: Le });
d.object({ publicState: ze, secretState: Le.omit({ common: !0 }) });
const nr = d.object({
		gameDetails: er,
		gameSettings: rr,
		gameState: sr,
		playersSecrets: d.record(d.string(), Kt),
		lastActionId: d.string(),
	}),
	ar = d.array(d.object({ gameId: d.string(), playerCount: d.number() }));
export { nr as a, ar as g, tr as s, d as z };
