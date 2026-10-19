import { createFileRoute } from "@tanstack/react-router";
import { MessagesBlock, PageHero, Shell } from "@/components/site";

export const Route = createFileRoute("/messages")({
  component: MessagesPage,
  head: () => ({ meta: [{ title: "Messages | Sewa Academy Kenya" }] }),
});

function MessagesPage() {
  return (
    <Shell>
      <main>
        <PageHero kicker="Leadership" title="From our team" text="Words from the Director, the Headteacher, and our teachers." />
        <MessagesBlock />
      </main>
    </Shell>
  );
}
