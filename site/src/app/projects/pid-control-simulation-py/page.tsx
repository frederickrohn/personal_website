import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function PidControlSimulationPy() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">pid control simulation in py</h1>
        <p>A Python simulation implementing PID control algorithms for automated system control and optimization.</p>
      </main>
    </>
  );
}
