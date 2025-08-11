import { j as s } from "./index-vPswkxJ5.js";
import { l as t, B as a, e as r } from "./index-bPgJQDHo.js";
import "./utils-BPyf_07k.js";
function c() {
	return s.jsxs("div", {
		className: "flex flex-wrap items-start justify-start",
		children: [
			Object.values(t).map((e) =>
				s.jsx(
					"div",
					{
						className: "m-0.5",
						children: s.jsx(a, { building: e, inactive: !0 }),
					},
					e.key,
				),
			),
			Object.values(t).map((e) =>
				s.jsx(
					"div",
					{ className: "m-0.5", children: s.jsx(a, { building: e }) },
					e.key,
				),
			),
			Object.values(r).map((e) =>
				s.jsx(
					"div",
					{ className: "m-0.5", children: s.jsx(a, { building: e }) },
					e.key,
				),
			),
		],
	});
}
export { c as default };
