import Hamburger from "@assets/Hamburger";
import useWindowSize from "@hooks/useWindowSize";
import { Navbar, NavContainer, NavLogo, NavButton } from "./Navbar.styles";

export default function NavBar() {
  const size = useWindowSize();

  return (
    <>
      <Navbar>
        <NavContainer>
          <NavLogo>{size.width > 600 ? "Full Circle Network" : "FCN"}</NavLogo>
          <NavButton />
        </NavContainer>
      </Navbar>
    </>
  );
}
