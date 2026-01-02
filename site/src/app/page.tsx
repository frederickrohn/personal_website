import Link from "next/link";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import TargetCursor from "@/app/components/CustomTargetCursor";

export default function HomePage() {
  const hobbies = ["basketball (rockets fan)", "fifa"];

  return (
    <>
    <TargetCursor spinDuration={2} />
    <main className="mx-auto max-w-xl px-4 py-16 space-y-12">
      <section>
        <h1 className="text-5xl font-bold">frederick rohn</h1>
        
        <p className="mt-2 text-neutral-600">
          {"nyu cs may 25. just joined "}
          <a href="https://www.reformhq.com/" target="_blank" rel="noreferrer" className="cursor-target">reform</a>
          {" as an fde."}
        </p>
        <p className="mt-2 text-neutral-600">
          {"contact me at "}
          <a href="mailto:frederick.rohn@gmail.com" className="cursor-target">frederick.rohn@gmail.com</a>
          {", "}
          <a href="https://instagram.com/fredericknrohn" target="_blank" rel="noreferrer" className="cursor-target">fredericknrohn</a>
          {" on insta, or "}
          <a href="https://www.linkedin.com/in/frederickrohn" target="_blank" rel="noreferrer" className="cursor-target">frederickrohn</a>
          {" on linkedin."}
        </p>

      </section>
      <section>
        <h2 className="text-xl font-semibold">blog</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="cursor-target">{p.title} [{p.date}]</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">projects</h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          {projects.map((pr) => (
            <li key={pr.slug}>
              <Link href={`/projects/${pr.slug}`} className="cursor-target">
                {pr.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">hobbies</h2>
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
