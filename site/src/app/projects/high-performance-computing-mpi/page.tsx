import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function HighPerformanceComputingMpi() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">high performance computing with mpi</h1>
        <p className="mb-4">
          <a href="/mpi-report.pdf" target="_blank" rel="noreferrer" className="cursor-target">
            [view technical report]
          </a>
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-sm">
          <li>
            Built a <strong>parallel histogram generator</strong> in <strong>C/MPI</strong>, distributing up to <strong>10 M+ data points</strong> across processes on an <strong>HPC cluster</strong> to measure <strong>scalability</strong> and <strong>speedup</strong>.
          </li>
          <li>
            Optimized <strong>MPI_Scatter</strong> and <strong>MPI_Reduce</strong> operations, achieving <strong>~3.6× speedup</strong> at <strong>8 processes</strong> and analyzing <strong>communication-to-computation trade-offs</strong>.
          </li>
          <li>
            Authored a detailed <strong>performance analysis</strong> on <strong>runtime</strong>, <strong>efficiency</strong>, and <strong>bin-size scaling</strong> consistent with <strong>Amdahl&apos;s Law</strong> and real-world <strong>HPC bottlenecks</strong>.
          </li>
        </ul>
      </main>
    </>
  );
}
