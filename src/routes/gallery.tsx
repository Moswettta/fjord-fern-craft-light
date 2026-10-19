import { createFileRoute } from "@tanstack/react-router";
import { GalleryBlock, PageHero, Shell } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({ meta: [{ title: "Gallery | Sewa Academy Kenya" }] }),
});

function GalleryPage() {
  return (
    <Shell>
      <main>
        <PageHero kicker="Moments" title="Gallery" text="Classrooms, play, creativity, and community at Sewa Academy." />
        <GalleryBlock />
      </main>
    </Shell>
  );
}
