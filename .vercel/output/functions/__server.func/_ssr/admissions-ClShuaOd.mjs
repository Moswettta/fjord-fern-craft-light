import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Shell, s as PageHero } from "./site-D059O8Pg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admissions-ClShuaOd.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	["Inquire", "Call or WhatsApp +254 795 893804. Ask about the level, fees, and places."],
	["Visit", "Walk the grounds, meet staff, and see a classroom."],
	["Apply", "Bring the birth certificate, previous reports if transferring, and parent ID. We confirm the place with you."]
];
function AdmissionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Enroll",
			title: "Admissions",
			text: "Open for Play Group, Kindergarten, Primary, and Junior Secondary."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3",
			children: steps.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl border border-stone bg-white p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl text-gold",
						children: i + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl text-forest",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-ink-muted",
						children: d
					})
				]
			}, t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "pb-16 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://wa.me/254795893804",
				className: "rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep",
				children: "WhatsApp the office"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "ml-3 rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest",
				children: "Contact form"
			})]
		})
	] }) });
}
//#endregion
export { AdmissionsPage as component };
