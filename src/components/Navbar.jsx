export const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2 font-bold md:gap-4 lg:gap-12 font-ui h-14">
        <li className="underline text-teal decoration-2 hover:cursor-pointer hover:underline hover:decoration-teal hover:decoration-2">
          Home
        </li>
        <li className="hover:cursor-pointer hover:underline hover:decoration-teal hover:decoration-2">
          Projects
        </li>
        <li className="hover:cursor-pointer hover:underline hover:decoration-teal hover:decoration-2">
          Contact
        </li>
        <li className="sm:absolute sm:right-4">
          <button className="px-4 py-1 border border-b-4 rounded-md border-orange text-orange hover:bg-tan">
            RESUME
          </button>
        </li>
      </ul>
    </nav>
  );
};
