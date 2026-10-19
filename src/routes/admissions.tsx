import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/site";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
  head: () => ({ meta: [{ title: "Admissions | Sewa Academy Kenya" }] }),
});

const steps = [
  ["Inquire", "Call or WhatsApp +254 795 893804. Ask about the level, fees, and places."],
  ["Visit", "Walk the grounds, meet staff, and see a classroom."],
  ["Apply", "Bring the birth certificate, previous reports if transferring, and parent ID. We confirm the place with you."],
];

function AdmissionsPage() {
  return (
    <Shell>
      <main>
        <PageHero kicker="Enroll" title="Admissions" text="Open for Play Group, Kindergarten, Primary, and Junior Secondary." />
        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <article key={t} className="rounded-3xl border border-stone bg-white p-7">
              <p className="font-display text-4xl text-gold">{i + 1}</p>
              <h2 className="mt-2 font-display text-3xl text-forest">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{d}</p>
            </article>
          ))}
        </section>
        <p className="pb-16 text-center">
          <a href="https://wa.me/254795893804" className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep">
            WhatsApp the office
          </a>
          <Link to="/contact" className="ml-3 rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest">
            Contact form
          </Link>
        </p>
      </main>
    </Shell>
  );
}
