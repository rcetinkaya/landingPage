import { BestOfTheBest } from "@/components/homePage/bestOfTheBest";
import { Collection } from "@/components/homePage/collection";
import { LoveUs } from "@/components/homePage/loveUs";
import { Collectible } from "@/components/homePage/sectionOne";
import { WhyJoin } from "@/components/homePage/whyJoin";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center  ">
        <div>
          <Collectible />
          <BestOfTheBest />
          <WhyJoin />
          <LoveUs />
          <Collection />
        </div>
      </main>
    </HydrateClient>
  );
}
