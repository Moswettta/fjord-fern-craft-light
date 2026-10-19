import { createFileRoute } from "@tanstack/react-router";
import { ApproachBlock, PageHero, Shell } from "@/components/site";

export const Route = createFileRoute("/approach")({
  component: ApproachPage,
  head: () => ({ meta: [{ title: "Our Approach | Sewa Academy Kenya" }] }),
});

function ApproachPage() {
  return (
    <Shell>
      <main>
        <PageHero kicker="How we teach" title="Our Approach" text="Mind, character, creativity, and spirit — held together in daily school life." />
        <ApproachBlock />
      </main>
    </Shell>
  );
}
