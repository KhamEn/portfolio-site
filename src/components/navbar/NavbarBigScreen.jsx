import { HeartIcon } from "@heroicons/react/24/solid";

export const NavbarBigScreen = () => {
  return (
    <div className="flex flex-wrap items-center justify-between h-32 -text-fluid-1">
      <div className="flex items-center gap-1 font-bold hover:cursor-pointer text-brand hover:text-brand ">
        <div className="p-2 border rounded-2xl ">
          <HeartIcon className="w-6 h-6" />
        </div>
        <span>Kham En</span>
      </div>

      <nav className="font-bold font-ui">
        <ul className="flex flex-wrap items-center justify-center gap-fluid-s">
          {/* <li className="hover:cursor-pointer ">HOME</li> */}
          <li className="hover:cursor-pointer hover:text-brand">PROJECTS</li>
          <li className="hover:cursor-pointer hover:text-brand">CONTACT</li>
          <li>
            <button className="py-2 px-6 border  rounded-md shadow-3d-sm-tr hover:border-brand hover:text-brand transform transition hover:-translate-y-0.5 text-dark-accent">
              RESUME
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
