import TargetCursor from "@/app/components/CustomTargetCursor";
import CubesHeader from "@/app/components/CubesHeader";

export default function FullStackMernAppTripTease() {
  return (
    <>
      <TargetCursor spinDuration={2} />
      <main className="prose prose-neutral mx-auto max-w-xl px-4 py-12">
        <CubesHeader />
        <h1 className="text-3xl font-bold mb-6">full stack mern app: trip tease</h1>
        <p className="mb-4">
          <a href="https://github.com/frederickrohn/trip-tease" target="_blank" rel="noreferrer" className="cursor-target">
            [link to github repo]
          </a>
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-sm">
          <li>
            Built a comprehensive <strong>full-stack</strong> trip-planning application (~9,000 lines of code) enabling seamless group collaboration with a <strong>React</strong> frontend and <strong>Express/MongoDB</strong> backend, featuring <strong>containerized deployment</strong> using <strong>Docker</strong> on <strong>DigitalOcean</strong>.
          </li>
          <li>
            Implemented <strong>JWT authentication</strong> and comprehensive automated <strong>integration/unit testing</strong> using <strong>Mocha</strong>, <strong>Chai</strong>, and <strong>Supertest</strong> to ensure secure and reliable functionality across the entire application stack.
          </li>
          <li>
            Collaborated in a 5-engineer development team using <strong>Agile sprint methodology</strong> and <strong>Git Feature Branch workflow</strong>, managing complex <strong>pull requests</strong> and merges in a production-like environment.
          </li>
        </ul>
      </main>
    </>
  );
}
