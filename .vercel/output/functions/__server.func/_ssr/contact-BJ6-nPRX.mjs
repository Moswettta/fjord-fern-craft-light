import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Shell, s as PageHero } from "./site-D059O8Pg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BJ6-nPRX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Visit or write",
		title: "Contact",
		text: "Slota, Athi River. Call, WhatsApp, or send a note — we reply quickly."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl text-forest",
				children: "School office"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 space-y-3 text-ink-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Slota Area, Athi River, Machakos County" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-forest underline",
						href: "tel:+254795893804",
						children: "+254 795 893804"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-forest underline",
						href: "mailto:sewaacademyke@gmail.com",
						children: "sewaacademyke@gmail.com"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-forest underline",
						href: "https://www.facebook.com/sewaacademyke",
						target: "_blank",
						rel: "noreferrer",
						children: "Facebook"
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-hidden rounded-3xl border border-stone",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map of Athi River near Sewa Academy",
					className: "h-80 w-full",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					src: "https://maps.google.com/maps?q=Athi%20River%20Machakos%20Kenya&z=13&output=embed"
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "rounded-3xl border border-stone bg-white p-7",
			onSubmit: (e) => {
				e.preventDefault();
				setSent(true);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-forest",
				children: "Send a message"
			}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-ink-soft",
				children: "Thank you. For a faster reply, WhatsApp +254 795 893804."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-semibold",
						children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "name",
							className: "mt-1 w-full rounded-xl border border-stone bg-parchment px-3 py-3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-semibold",
						children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "phone",
							className: "mt-1 w-full rounded-xl border border-stone bg-parchment px-3 py-3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-semibold",
						children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							name: "message",
							rows: 5,
							className: "mt-1 w-full rounded-xl border border-stone bg-parchment px-3 py-3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full rounded-full bg-forest py-3 font-semibold text-white",
						children: "Send"
					})
				]
			})]
		})]
	})] }) });
}
//#endregion
export { ContactPage as component };
