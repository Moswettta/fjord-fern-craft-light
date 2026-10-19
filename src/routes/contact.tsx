import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/site";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact | Sewa Academy Kenya" }] }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Shell>
      <main>
        <PageHero kicker="Visit or write" title="Contact" text="Slota, Athi River. Call, WhatsApp, or send a note — we reply quickly." />
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-forest">School office</h2>
            <ul className="mt-6 space-y-3 text-ink-muted">
              <li>Slota Area, Athi River, Machakos County</li>
              <li>
                <a className="text-forest underline" href="tel:+254795893804">+254 795 893804</a>
              </li>
              <li>
                <a className="text-forest underline" href="mailto:sewaacademyke@gmail.com">sewaacademyke@gmail.com</a>
              </li>
              <li>
                <a className="text-forest underline" href="https://www.facebook.com/sewaacademyke" target="_blank" rel="noreferrer">Facebook</a>
              </li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-3xl border border-stone">
              <iframe
                title="Map of Athi River near Sewa Academy"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Athi%20River%20Machakos%20Kenya&z=13&output=embed"
              />
            </div>
          </div>
          <form
            className="rounded-3xl border border-stone bg-white p-7"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h2 className="font-display text-3xl text-forest">Send a message</h2>
            {sent ? (
              <p className="mt-6 text-ink-soft">Thank you. For a faster reply, WhatsApp +254 795 893804.</p>
            ) : (
              <div className="mt-6 space-y-4">
                <label className="block text-sm font-semibold">
                  Name
                  <input required name="name" className="mt-1 w-full rounded-xl border border-stone bg-parchment px-3 py-3" />
                </label>
                <label className="block text-sm font-semibold">
                  Phone
                  <input required name="phone" className="mt-1 w-full rounded-xl border border-stone bg-parchment px-3 py-3" />
                </label>
                <label className="block text-sm font-semibold">
                  Message
                  <textarea required name="message" rows={5} className="mt-1 w-full rounded-xl border border-stone bg-parchment px-3 py-3" />
                </label>
                <button type="submit" className="w-full rounded-full bg-forest py-3 font-semibold text-white">
                  Send
                </button>
              </div>
            )}
          </form>
        </section>
      </main>
    </Shell>
  );
}
