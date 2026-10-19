import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutBlock, PageHero, Shell } from "@/components/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About | Sewa Academy Kenya" }] }),
});

function AboutPage() {
  return (
    <Shell>
      <main>
        <PageHero kicker="Who we are" title="About the Academy" text="Founded to give Athi River families a Christian, affordable, and serious education." />
        <AboutBlock />
        <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
          {[
            ["Mission", "High-quality, Christian-aligned education that develops excellence, character, and life skills at a cost families can manage."],
            ["Vision", "A leading centre of holistic education in Athi River, raising disciplined and compassionate young people."],
            ["Values", "Faith, excellence, respect, and steady growth — for learners, teachers, and parents together."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-3xl border border-stone bg-white p-7">
              <h2 className="font-display text-3xl text-forest">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{d}</p>
            </article>
          ))}
        </section>
        <p className="pb-16 text-center">
          <Link to="/admissions" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white">
            Start an application
          </Link>
        </p>
      </main>
    </Shell>
  );
}
