import { useMediaQuery } from "react-responsive";

import { HeartIcon } from "@heroicons/react/24/solid";

export default function Navbar({ homeRef, projectsRef, contactRef }) {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 634px)",
  });

  return (
    <nav className="flex h-32 flex-col items-center justify-between gap-fluid-s py-fluid-s font-ui -text-fluid-1 font-bold  min-[634px]:flex-row">
      <ul className="flex items-center justify-center gap-fluid-s">
        <li>
          <a
            onClick={() =>
              homeRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 rounded-xl font-bold outline-none hover:cursor-pointer"
          >
            <div className="rounded-2xl border p-2 text-brand">
              <HeartIcon className="h-6 w-6" />
            </div>
            <span>Kham En</span>
          </a>
        </li>
        {!isBigScreen && (
          <li>
            <a
              href="#"
              aria-label="Resume"
              className="rounded-xl border border-brand px-6 py-2 text-brand outline-none hover:bg-brand hover:text-dark-shade  focus-visible:border-brand focus-visible:bg-brand focus-visible:text-dark-shade"
            >
              RESUME
            </a>
          </li>
        )}
      </ul>

      <ul className="flex items-center justify-center gap-fluid-s">
        <li>
          <a
            onClick={() =>
              homeRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-xl p-1 outline-none hover:cursor-pointer hover:text-brand  focus-visible:text-brand"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              projectsRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-xl p-1 outline-none hover:cursor-pointer hover:text-brand  focus-visible:text-brand"
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-xl p-1 outline-none hover:cursor-pointer hover:text-brand  focus-visible:text-brand"
          >
            CONTACT
          </a>
        </li>
        {isBigScreen && (
          <li>
            <a
              href="#"
              aria-label="Resume"
              className="rounded-xl border border-brand px-6 py-2 text-brand outline-none hover:bg-brand hover:text-dark-shade  focus-visible:border-brand focus-visible:bg-brand focus-visible:text-dark-shade"
            >
              RESUME
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
