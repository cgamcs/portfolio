import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import UdemyLogo from "@/components/UdemyLogo";
import ViakableLogo from "@/components/ViakableLogo";
import Image from "next/image";

const TECHNOLOGIES = [
  "Python",
  "React",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "Git",
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-8 md:px-0 flex flex-col">
        <div className="flex flex-col gap-8 pt-15 md:pt-25">
          <div
            className="flex w-full flex-col gap-8"
            data-reveal="0"
          >
            <header className="group flex w-full items-center gap-3.5">
              <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-surface outline-1 -outline-offset-1 outline-border">
                <Image
                  src="/pfp.png"
                  alt="César García"
                  width={44}
                  height={44}
                  priority
                  className="size-full object-cover transition-transform duration-300 ease-(--ease) [@media(hover:hover)]:group-hover:scale-105"
                />
              </span>

              <span className="flex flex-col gap-px">
                {/* The page's only h1: styled like the reference's <p>, but the
                    document still needs one top-level heading. */}
                <h1 className="text-18/6.25 font-medium text-text">César García</h1>
                <p className="text-14/5 text-secondary">
                  Software Engineering Intern
                </p>
              </span>
            </header>

            <div className="flex flex-col gap-4">
              <p className="text-body text-18/6.25 text-pretty">
                Build and maintain web applications at Viakable for the Quality,
                Production Floor, and Operations teams, using Progress 4GL and
                WebSpeed across Unix and Windows environments.
              </p>

              <div className="flex gap-5">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black dark:bg-control-active rounded-xl flex justify-center items-center px-3 py-1.5 text-14 text-zinc-50 dark:text-zinc-300 shadow-lg hover:opacity-80 min-h-full"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20" data-reveal="0">
          <section className="container">
            <h2 className="text-xl md:text-2xl mb-5 text-secondary">
              about me
            </h2>

            <p className="w-full mb-5 text-18/6.25 text-pretty text-body">
              Study Software Engineering at UANL and work as a software
              engineering intern at{" "}
              <span className="group text-text underline">
                <ViakableLogo className="mr-1 inline-block h-[0.9em] w-auto -translate-y-px align-middle text-secondary transition-colors duration-200 ease-(--ease) group-hover:text-text" />
                Viakable
              </span>
              , developing and maintaining internal web applications across Unix
              and Windows environments.
            </p>

            <p className="w-full mb-5 text-18/6.25 text-pretty text-body">
              Completed{" "}
              <span className="text-text">
                CS50&apos;s Introduction to Computer Science
              </span>{" "}
              from{" "}
              <span className="group text-text underline">
                <Image
                  src="/harvard-shield.svg"
                  width={14}
                  height={20}
                  alt=""
                  unoptimized
                  className="mr-1 inline-block h-[0.9em] w-auto -translate-y-px align-middle opacity-70 transition-opacity duration-200 ease-(--ease) group-hover:opacity-100"
                />
                Harvard
              </span>
              , building a solid foundation in programming, algorithms, and data
              structures.
            </p>

            <p className="w-full mb-5 text-18/6.25 text-pretty text-body">
              Apply machine learning with Python, trained through a{" "}
              <span className="group text-text underline">
                <UdemyLogo className="mr-1 inline-block h-[0.9em] w-auto -translate-y-px align-middle text-secondary transition-colors duration-200 ease-(--ease) group-hover:text-text" />
                Udemy certification
              </span>{" "}
              and university coursework in data mining.
            </p>

            <p className="w-full mb-5 text-18/6.25 text-pretty text-body">
              Work regularly with these technologies:
            </p>

            <ul className="grid grid-cols-2 w-fit gap-x-10 gap-y-1 mb-5 text-18/6.25 text-body">
              {TECHNOLOGIES.map((technology, index) => (
                <li
                  key={technology}
                  // Sequenced after the 0.5s reveal on the section above.
                  data-reveal={0.65 + index * 0.07}
                  className="group flex items-center gap-2"
                >
                  <span
                    aria-hidden="true"
                    className="text-indigo-700 dark:text-indigo-500 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &#9657;
                  </span>
                  {technology}
                </li>
              ))}
            </ul>

            <p className="w-full mb-5 text-18/6.25 text-pretty text-body">
              Tinker with my home lab in my free time, and watch a fair amount of
              fiction and horror films.
            </p>
          </section>
        </div>

        <Projects />
      </main>

      <Footer />
    </>
  );
}
