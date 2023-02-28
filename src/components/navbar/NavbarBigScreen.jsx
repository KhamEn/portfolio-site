import { HeartIcon } from "@heroicons/react/24/solid";

export const NavbarBigScreen = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between h-32 font-bold -text-fluid-1 font-ui">
      <a
        href="#"
        aria-label="Home"
        className="flex items-center gap-1 font-bold rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-dark-shade hover:cursor-pointer text-brand hover:text-brand focus-visible:text-brand"
      >
        <div className="p-2 border rounded-2xl ">
          <HeartIcon className="w-6 h-6" />
        </div>
        <span>Kham En</span>
      </a>

      <nav className="">
        <ul className="flex flex-wrap items-center justify-center gap-fluid-s">
          <li>
            <a
              href="#"
              aria-label="Projects"
              className="rounded-sm outline-none hover:cursor-pointer hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-dark-shade focus-visible:text-brand"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Contact"
              className="rounded-sm outline-none hover:cursor-pointer hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-dark-shade focus-visible:text-brand"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Resume"
              className="py-2 px-6 border rounded-md shadow-3d-sm-tr hover:border-brand hover:text-brand transform transition hover:-translate-y-0.5 text-dark-accent outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-dark-shade focus-visible:text-brand focus-visible:border-brand"
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};
