import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function DistributedComputingRaspberryPi() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">distributed computing on raspberry pi</h1>
        <p>A distributed computing project using Raspberry Pi clusters for parallel processing and data analysis.</p>
      </main>
    </>
  );
}
