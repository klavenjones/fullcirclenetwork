import Hamburger from "@assets/Hamburger";
import tw from "twin.macro";

export const Navbar = tw.nav`px-10 py-10 bg-transparent`;
export const NavContainer = tw.div`flex justify-between items-center`;

export const NavLogo = tw.a`text-red-500 font-extrabold text-xl uppercase tracking-widest leading-none`;
// export const NavButton = tw.button`block text-gray-500 hover:text-gray-700 focus:outline-none`;

export const NavButton = () => (
  <button tw="block text-gray-500 hover:text-gray-700 focus:outline-none">
    <Hamburger />
  </button>
);
