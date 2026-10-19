import { createFileRoute } from "@tanstack/react-router";
import { AboutBlock, ApproachBlock, ExtrasBlock, GalleryBlock, Hero, MessagesBlock, ProgramsBlock, Shell } from "@/components/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Sewa Academy Kenya | Christian School in Slota, Athi River" }],
  }),
});

function Home() {
  return (
    <Shell>
      <main>
        <Hero />
        <AboutBlock />
        <ProgramsBlock />
        <ApproachBlock />
        <ExtrasBlock />
        <MessagesBlock />
        <GalleryBlock />
      </main>
    </Shell>
  );
}
