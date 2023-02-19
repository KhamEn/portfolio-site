export const Navbar = () => {
  return (
    <nav className="flex justify-between font-ui">
      {/* <div className="absolute top-0 left-0 bg-dark-teal h-14 w-full"></div> */}
      <ul className="relative z-10 flex items-center justify-center gap-2 font-bold md:gap-4 lg:gap-12 h-14">
        <li className="underline text-teal decoration-2 hover:cursor-pointer hover:underline hover:decoration-teal hover:decoration-2">
          Home
        </li>
        <li className="hover:cursor-pointer hover:text-teal">Projects</li>
        <li className="hover:cursor-pointer hover:text-teal">Contact</li>
      </ul>
      <div className="relative z-10 flex items-center justify-center">
        <button className="px-6 py-1 border border-b-4 rounded-md h-fit border-orange text-orange hover:bg-light-orange">
          RESUME
        </button>
      </div>
    </nav>
  );
};
