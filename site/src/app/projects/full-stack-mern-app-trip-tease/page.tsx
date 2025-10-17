import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function FullStackMernAppTripTease() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">full stack mern app: trip tease</h1>
        <p>A full-stack web application built with MongoDB, Express, React, and Node.js for trip planning and management.</p>
      </main>
    </>
  );
}
