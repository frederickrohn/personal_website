import Link from "next/link";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import TargetCursor from "@/app/components/CustomTargetCursor";
import HalftoneImage from '@/app/components/HalftoneImage';

export default function HomePage() {
  const hobbies = ["basketball (rockets fan)", "fifa"];

  return (
    <>
      <TargetCursor spinDuration={2} />
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center flex-1">
          <main className="max-w-xl px-4 py-16 space-y-12">
            <section>
              <h1 className="font-[family-name:var(--font-serif)] text-7xl sm:text-8xl font-normal leading-[0.85] tracking-tight border-b border-gray-400 pb-4">frederick rohn</h1>

              <p className="mt-4 text-neutral-600">
                {"nyu cs may 25. just joined "}
                <a href="https://www.reformhq.com/" target="_blank" rel="noreferrer" className="cursor-target">reform</a>
                {" as an fde."}
              </p>
            </section>

            <section>
              <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400">blog</h2>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="cursor-target">{p.title} [{p.date}]</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400">projects</h2>
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
              <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400">hobbies</h2>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                {hobbies.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </section>
          </main>

          <aside className="hidden md:block sticky top-0 self-start overflow-hidden py-16 px-4">
            <HalftoneImage />
          </aside>
        </div>

        <footer className="py-6 text-neutral-600 text-sm">
          <div className="border-t border-gray-300 mx-12 pt-6">
          {"contact me at "}
          <a href="mailto:frederick.rohn@gmail.com" className="cursor-target">frederick.rohn@gmail.com</a>
          {", "}
          <a href="https://github.com/frederickrohn" target="_blank" rel="noreferrer" className="cursor-target">frederickrohn</a>
          {" on github, "}
          <a href="https://x.com/frederickrohn" target="_blank" rel="noreferrer" className="cursor-target">frederickrohn</a>
          {" on twitter, "}
          <a href="https://instagram.com/fredericknrohn" target="_blank" rel="noreferrer" className="cursor-target">fredericknrohn</a>
          {" on insta, or "}
          <a href="https://www.linkedin.com/in/frederickrohn" target="_blank" rel="noreferrer" className="cursor-target">frederickrohn</a>
          {" on linkedin."}
          </div>
        </footer>
      </div>
    </>
  );
}
