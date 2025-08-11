import { j as e } from "./index-vPswkxJ5.js";
import { r as t } from "./utils-BPyf_07k.js";
function n({ children: o, message: r, className: a, toolTipClassName: i }) {
	return e.jsxs("div", {
		className: `group relative inline-block ${a || ""}`,
		children: [
			o,
			r &&
				e.jsx("div", {
					className: `pointer-events-none absolute w-max border border-gray-600 bg-white p-2 px-4 opacity-0 group-hover:opacity-100 dark:border-gray-300 dark:bg-gray-800 dark:text-white ${i || ""}`,
					children: t(r),
				}),
		],
	});
}
export { n as T };
