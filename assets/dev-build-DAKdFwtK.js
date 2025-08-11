import { r as e, j as t } from "./index-vPswkxJ5.js";
import { g as n, s as d } from "./index-M-M_FdU-.js";
import { g as o } from "./index-bPgJQDHo.js";
import { B as p } from "./index-DMaCbqKt.js";
import "./utils-BPyf_07k.js";
import "./build-Di8S06L_.js";
import "./index-ByImOSgY.js";
function g() {
	const [r, l] = e.useState(n({}, o("base")).supply),
		[i, s] = e.useState({
			establishments: {},
			landmarks: {
				radioTower: !1,
				amusementPark: !1,
				shoppingMall: !1,
				trainStation: !1,
			},
		}),
		[m, u] = e.useState(Math.floor(Math.random() * 1e9).toString());
	return t.jsxs("div", {
		children: [
			t.jsx("button", {
				className: "button-default",
				onClick: () => {
					u(Math.floor(Math.random() * 1e9).toString());
				},
				children: "Reset Element",
			}),
			t.jsx("button", {
				className: "button-default",
				onClick: () => {
					const a = d(o("base"));
					l(n({}, a.slice(3)).supply);
				},
				children: "Change Supply",
			}),
			t.jsx("button", {
				className: "button-default",
				onClick: () => {
					s({
						establishments: {},
						landmarks: {
							radioTower: Math.random() < 0.5,
							amusementPark: Math.random() < 0.5,
							shoppingMall: Math.random() < 0.5,
							trainStation: Math.random() < 0.5,
						},
					});
				},
				children: "Randomise Landmarks",
			}),
			t.jsx("button", {
				className: "button-default",
				onClick: () => {
					s({
						establishments: {},
						landmarks: {
							radioTower: !0,
							amusementPark: !0,
							shoppingMall: !0,
							trainStation: !0,
						},
					});
				},
				children: "Finish Landmarks",
			}),
			t.jsx(
				p,
				{
					supply: r,
					city: i,
					onBuild: (a) => {
						console.info("onBuild", a);
					},
				},
				m,
			),
		],
	});
}
export { g as default };
