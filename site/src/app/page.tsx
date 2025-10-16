import Link from "next/link";
import { posts } from "@/data/posts";
import TargetCursor from "@/app/components/CustomTargetCursor";

export default function HomePage() {
  const projects = [
    { name: "Full Stack MERN Application - Trip Tease", url: "https://example.com" },
    { name: "Distributed Computing on Raspberry Pi", url: "https://example.com" },
    { name: "PID Control Simulation in Py", url: "https://example.com" },
    { name: "High Performance Computing with MPI", url: "https://example.com" },
  ];
  const hobbies = ["Basketball", "FIFA"];

  return (
    <>
    <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    <main className="mx-auto max-w-xl px-4 py-16 space-y-12">
      <section>
        <h1 className="text-3xl font-bold">Frederick Rohn</h1>
        
        <p className="mt-2 text-neutral-600">New grad from NYU CS, currently at ServiceNow building AI Agents.</p>
        <p className="mt-2 text-neutral-600">Currently interested in robotics software & AI Agents, but have always been interested in data infra.</p>
        <p className="mt-2 text-neutral-600">
          Contact me at
          {" "}
          <a href="mailto:frederick.rohn@gmail.com" className="cursor-target">frederick.rohn@gmail.com</a>
          {", "}
          <a href="https://instagram.com/fredericknrohn" target="_blank" rel="noreferrer" className="cursor-target">fredericknrohn</a>
          {" on insta, or "}
          <a href="https://www.linkedin.com/in/frederickrohn" target="_blank" rel="noreferrer" className="cursor-target">frederickrohn</a>
          {" on LinkedIn."}
        </p>

      </section>
      <section>
        <h2 className="text-xl font-semibold">Blog</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="cursor-target">{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          {projects.map((pr) => (
            <li key={pr.name}>
              <a href={pr.url} target="_blank" rel="noreferrer" className="cursor-target">
                {pr.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Hobbies</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          {hobbies.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
    </main>
    </>
  );
}
