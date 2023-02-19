export const Navbar = () => {
  return (
    <nav className="flex justify-between font-ui md:text-lg text-neutral-lightest font-bold">
      <div className="absolute top-0 left-0 bg-neutral-darkest h-14 w-full"></div>
      <ul className="relative  z-10 flex items-center justify-center gap-2  md:gap-4 lg:gap-12 h-14">
        <li className="text-internal-base hover:cursor-pointer">home</li>
        <li className="hover:cursor-pointer hover:text-internal-dark">
          projects
        </li>
        <li className="hover:cursor-pointer hover:text-internal-dark">
          contact
        </li>
      </ul>
      <div className="relative z-10 flex items-center justify-center">
        <button className="px-2 py-1 sm:px-6 sm:py-2 border border-b-4 rounded-md h-fit border-brand-base text-brand-base hover:bg-brand-extra-dark">
          RESUME
        </button>
      </div>
    </nav>
  );
};
