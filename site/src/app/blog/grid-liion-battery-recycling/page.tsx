import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function GridLiionBatteryRecycling() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-2">Grid/Li-ion Battery Recycling: Industry Overviews</h1>
        <p className="text-sm text-neutral-500 mb-6">November 15, 2023</p>
        <p className="mb-4">
          <a href="https://docs.google.com/document/d/1ykNFvzeaXHgZAkHmBFcc2FU_DN3zF7atOgeAYXsy_Dc/edit?usp=sharing" target="_blank" rel="noreferrer" className="cursor-target">
            [view full report]
          </a>
          {" |  "}
          <a href="https://www.figma.com/proto/Qr7hz7UUDuoBEETLCYvvy0/CleanTech-Slide-Deck?node-id=1-2&t=hJYZzeQfsielvNSD-1" target="_blank" rel="noreferrer" className="cursor-target">
            [view deck]
          </a>
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">TL;DR</h2>
        <p className="text-sm mb-4">
          The clean-tech sector is entering a major <strong>growth inflection</strong>, driven by <strong>electrification</strong>, climate stress on legacy infrastructure, and demand for <strong>circular materials</strong>.
        </p>
        <p className="text-sm mb-4">
          Two sub-verticals stand out: <strong>grid optimization / battery arbitrage software</strong> and <strong>Li-ion battery recycling / materials recovery</strong>.
        </p>
        <p className="text-sm mb-4">
          On the grid side, the biggest leverage is in applying <strong>AI / ML</strong> to optimize charge/discharge decisions, bidding strategies, and integrating storage assets in volatile markets.
        </p>
        <p className="text-sm mb-4">
          On the recycling side, the tailwinds are converging: a looming <strong>lithium / critical minerals deficit</strong>, retiring battery supply, <strong>regulatory incentives</strong> (e.g. U.S. tax credits for recycled content), and room for innovation in <strong>process technologies</strong> (hydro, plasma, mechanochemical).
        </p>
        <p className="text-sm mb-4">
          In 2023, I argued that while grid-tech is nascent, the more compelling near-term opportunity is in <strong>battery recycling</strong>, where structural demand and technology differentiation are more visible.
        </p>
        <p className="text-sm mb-4">
          Key risks remain: adoption lag, <strong>capital intensity</strong> of processing plants, <strong>logistics / collection challenges</strong>, and potential disruption from alternative battery chemistries.
        </p>
        <p className="text-sm mb-4">
          This remains a <strong>strong thematic bet</strong> heading into the rest of the decade - you want optionality across both domains, but placing more weight (and capital) on <strong>recycling / materials startups</strong> is defensible.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Traction Updates</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-sm">
          <li>
            <strong>Amperon Holdings</strong> received a strategic investment by Acario <strong>$20M+ Series B</strong> in summer 2025
          </li>
          <li>
            <strong>Princeton NuEnergy</strong> raised <strong>$30M Series A</strong> in summer 2024
          </li>
        </ul>
      </main>
    </>
  );
}

