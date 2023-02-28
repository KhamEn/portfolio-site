import { HeartIcon } from "@heroicons/react/24/solid";

export const NavbarSmallScreen = () => {
  return (
    <nav className="-text-fluid-1">
      <ul className="flex flex-wrap items-center justify-center gap-fluid-s pt-fluid-s">
        <li className="flex items-center gap-1 font-bold hover:cursor-pointer text-brand hover:text-brand ">
          <div className="p-2 border rounded-2xl ">
            <HeartIcon className="w-6 h-6" />
          </div>
          <span>Kham En</span>
        </li>
        <li>
          <button className="py-1 px-3 border border-t-4 rounded-md border-r-4 hover:border-brand hover:text-brand transform transition hover:-translate-y-0.5 text-dark-accent">
            RESUME
          </button>
        </li>
      </ul>
      <ul className="flex flex-wrap items-center justify-center gap-fluid-s my-fluid-s">
        {/* <li className="hover:cursor-pointer text-brand">HOME</li> */}
        <li className="hover:cursor-pointer hover:text-brand">PROJECTS</li>
        <li className="hover:cursor-pointer hover:text-brand">CONTACT</li>
      </ul>
    </nav>
  );
};
