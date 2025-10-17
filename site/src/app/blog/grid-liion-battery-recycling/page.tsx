import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function GridLiionBatteryRecycling() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">Grid/Li-ion Battery Recycling: Industry Overviews</h1>
        <p className="mb-4">
          <a href="https://docs.google.com/document/d/1ykNFvzeaXHgZAkHmBFcc2FU_DN3zF7atOgeAYXsy_Dc/edit?usp=sharing" target="_blank" rel="noreferrer" className="cursor-target">
            [view report]
          </a>
          {" |  "}
          <a href="https://www.figma.com/proto/Qr7hz7UUDuoBEETLCYvvy0/CleanTech-Slide-Deck?node-id=1-2&t=hJYZzeQfsielvNSD-1" target="_blank" rel="noreferrer" className="cursor-target">
            [view deck]
          </a>
        </p>
        <p>
          An industry overview on grid-scale battery systems and lithium-ion battery recycling, highlighting key players, market dynamics, and upcoming technologies. Created by Frederick Rohn and Kailani Liu.
        </p>
        <p>
          This presentation explores the current state of both industries, examining the major companies driving innovation, emerging technological advancements, and the critical role these sectors play in the transition to sustainable energy systems.
        </p>
      </main>
    </>
  );
}

