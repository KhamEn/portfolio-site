import { useMediaQuery } from "react-responsive";
import { NavbarBigScreen } from "./NavbarBigScreen";
import { NavbarSmallScreen } from "./NavbarSmallScreen";

export const Navbar = () => {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 530px)",
  });

  return <>{isBigScreen ? <NavbarBigScreen /> : <NavbarSmallScreen />}</>;
};
