import { createFileRoute } from "@tanstack/react-router";
import { ExtrasBlock, PageHero, ProgramsBlock, Shell } from "@/components/site";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({ meta: [{ title: "Programs | Sewa Academy Kenya" }] }),
});

function ProgramsPage() {
  return (
    <Shell>
      <main>
        <PageHero kicker="Learning" title="Programs" text="Play Group, Kindergarten, Primary, and Junior Secondary — plus learning beyond the classroom." />
        <ProgramsBlock />
        <ExtrasBlock />
      </main>
    </Shell>
  );
}
