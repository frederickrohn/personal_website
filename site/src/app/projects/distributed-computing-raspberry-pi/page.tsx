import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function DistributedComputingRaspberryPi() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">distributed computing on raspberry pi</h1>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-sm">
          <li>
            Implemented a parameter-driven <strong>publisher/subscriber system</strong> in <strong>C++</strong> and <strong>Python</strong> on <strong>Ubuntu 24.04</strong>, leveraging <strong>ROS2 Jazzy</strong> for <strong>real-time communication</strong>.
          </li>
          <li>
            Enabled <strong>runtime reconfiguration</strong> of publish rates via <strong>ROS2 parameters</strong>, using <strong>mutex-protected timer rebuilding</strong> to prevent <strong>race conditions</strong> between parameter callbacks and publisher execution.
          </li>
          <li>
            Deployed and validated on <strong>Raspberry Pi 5</strong> running <strong>Linux</strong>, bridging development from <strong>VM simulation</strong> to <strong>embedded hardware</strong>.
          </li>
        </ul>
      </main>
    </>
  );
}
