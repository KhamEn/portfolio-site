import { Bars3Icon } from "@heroicons/react/24/solid";
import neatHeartImgUrl from "../assets/heroicons-heart.svg";

export const Navbar = () => {
  return (
    <nav className="flex justify-between h-[48px]">
      <div className="border border-yellow rounded-full flex items-center justify-center h-10 w-10  m-1">
        <img src={neatHeartImgUrl} alt="" className="p-1" />
      </div>

      <div className="flex items-center w-fit font-ui bg-teal text-charcoal-100 font-semibold p-1">
        <div>MENU</div>
        <div>
          <Bars3Icon className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
};
