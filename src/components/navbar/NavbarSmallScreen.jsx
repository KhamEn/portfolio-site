import { HeartIcon } from "@heroicons/react/24/solid";

export const NavbarSmallScreen = () => {
  return (
    <nav className="font-ui -text-fluid-1 font-bold">
      <ul className="flex flex-wrap items-center justify-center gap-fluid-s pt-fluid-s">
        <li>
          <a
            href="#"
            aria-label="Home"
            className="flex items-center gap-1 rounded-xl font-bold text-brand  outline-none hover:cursor-pointer hover:text-brand focus-visible:text-brand"
          >
            <div className="rounded-2xl border p-2 ">
              <HeartIcon className="h-6 w-6" />
            </div>
            <span>Kham En</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Resume"
            className="rounded-xl border border-dark-accent px-6 py-2 text-dark-accent outline-none hover:bg-dark-accent hover:text-dark-shade  focus-visible:border-dark-accent focus-visible:bg-dark-accent focus-visible:text-dark-shade"
          >
            RESUME
          </a>
        </li>
      </ul>
      <ul className="my-fluid-s flex flex-wrap items-center justify-center gap-fluid-s">
        <li>
          <a
            href="#"
            aria-label="Projects"
            className="rounded-xl p-1 outline-none hover:cursor-pointer hover:text-brand  focus-visible:text-brand"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Projects"
            className="rounded-xl p-1 outline-none hover:cursor-pointer hover:text-brand  focus-visible:text-brand"
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Contact"
            className="rounded-xl p-1 outline-none hover:cursor-pointer hover:text-brand  focus-visible:text-brand"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};
