export const Navbar = () => {
  return (
    <nav className="mx-4">
      <ul className="flex justify-center items-center gap-2 md:gap-4 lg:gap-12 font-ui font-bold h-14">
        <li className="text-teal underline decoration-2 hover:cursor-pointer hover:underline hover:decoration-teal hover:decoration-2">
          Home
        </li>
        <li className="hover:cursor-pointer hover:underline hover:decoration-teal hover:decoration-2">
          Projects
        </li>
        <li className="hover:cursor-pointer hover:underline hover:decoration-teal hover:decoration-2">
          Contact
        </li>
        <li className="sm:absolute sm:right-4">
          <button className=" border border-b-4 border-orange py-1 px-4 rounded-md text-orange  hover:border-charcoal-100 hover:text-charcoal-100 hover:bg-orange transform transition hover:-translate-y-0.5 hover:border">
            RESUME
          </button>
        </li>
      </ul>
    </nav>
  );
};
