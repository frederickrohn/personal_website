import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function HighPerformanceComputingMpi() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">high performance computing with mpi</h1>
        <p>High-performance computing implementation using Message Passing Interface (MPI) for parallel processing.</p>
      </main>
    </>
  );
}
