import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function PidControlSimulationPy() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">pid control simulation in py</h1>
        <p className="mb-4">
          <a href="https://github.com/frederickrohn/python-pid-sim" target="_blank" rel="noreferrer" className="cursor-target">
            [link to github repo]
          </a>
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-sm">
          <li>
            Implemented a <strong>PID controller simulation</strong> in <strong>Python</strong> with <strong>configurable gains</strong> (Kp, Ki, Kd) and <strong>actuator saturation limits</strong> for <strong>real-time control systems</strong>.
          </li>
          <li>
            Modeled <strong>first-order plant dynamics</strong> using <strong>Euler integration</strong> with <strong>step response testing</strong> and <strong>control effort visualization</strong> via <strong>Matplotlib</strong>.
          </li>
          <li>
            Created comprehensive <strong>technical documentation</strong> with <strong>LaTeX-formatted equations</strong> and <strong>tuning guidelines</strong> for <strong>educational robotics applications</strong>.
          </li>
        </ul>
      </main>
    </>
  );
}
