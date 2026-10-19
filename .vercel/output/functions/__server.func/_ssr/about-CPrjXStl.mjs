import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Shell, s as PageHero, t as AboutBlock } from "./site-D059O8Pg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CPrjXStl.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Who we are",
			title: "About the Academy",
			text: "Founded to give Athi River families a Christian, affordable, and serious education."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3",
			children: [
				["Mission", "High-quality, Christian-aligned education that develops excellence, character, and life skills at a cost families can manage."],
				["Vision", "A leading centre of holistic education in Athi River, raising disciplined and compassionate young people."],
				["Values", "Faith, excellence, respect, and steady growth — for learners, teachers, and parents together."]
			].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl border border-stone bg-white p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-forest",
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-ink-muted",
					children: d
				})]
			}, t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pb-16 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admissions",
				className: "rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white",
				children: "Start an application"
			})
		})
	] }) });
}
//#endregion
export { AboutPage as component };
