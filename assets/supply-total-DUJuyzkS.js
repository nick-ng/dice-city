import { j as s } from "./index-BJiRqK8E.js";
import { g as o } from "./index-AYrQF0hK.js";
import { E as e, g as p, s as a } from "./index-DbjxXeOr.js";
import "./utils-BPyf_07k.js";
const i = p({}, a(o("base")), "total").supply;
function u() {
	return s.jsx("div", {
		children: s.jsx(e, {
			establishments: i,
			onChoose: (t) => {
				console.info("Chosen", t);
			},
		}),
	});
}
export { u as default };
