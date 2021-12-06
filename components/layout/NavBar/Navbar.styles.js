import Hamburger from "@assets/Hamburger";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import tw from "twin.macro";

export const Navbar = (props) => (
  <motion.nav
    tw="px-10 py-10 bg-transparent fixed top-0 w-full z-20"
    {...props}
  >
    {props.children}
  </motion.nav>
);

export const NavContainer = tw.div`flex justify-between items-center`;
export const NavLogo = tw.a`text-red-500 font-extrabold text-xl uppercase tracking-widest leading-none`;

export const SocialMedia = () => (
  <div tw="flex space-x-4">
    <Link href="https://facebook.com">
      <a>
        <FaFacebook tw="h-6 w-6" />
      </a>
    </Link>
    <Link href="https://instagram.com">
      <a>
        <FaInstagram tw="h-6 w-6" />
      </a>
    </Link>
    <Link href="https://twitter.com">
      <a>
        <FaTwitter tw="h-6 w-6" />
      </a>
    </Link>
  </div>
);

export const Email = () => (
  <div tw="flex flex-col">
    <Link href="">
      <a>hello@fullcirclenetwork.com</a>
    </Link>
  </div>
);

export const NavOverlay = (props) => (
  <motion.div
    tw="fixed inset-0 bg-gray-100 w-full h-full flex flex-col justify-center items-center"
    {...props}
  >
    {props.children}
  </motion.div>
);

export const Nav = (props) => (
  <motion.ul
    tw="w-full px-10 text-left mb-12 space-y-8 relative"
    variants={props.navVariants}
    {...props}
  >
    {props.navLinks.map((link) => (
      <NavItems
        variants={props.linkVariants}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.95 }}
        title={link.title}
        url={link.url}
      />
    ))}
  </motion.ul>
);

export const NavItems = (props) => (
  <motion.li {...props}>
    <Link href={props.url}>
      <a tw="text-5xl md:text-7xl text-gray-700 font-semibold cursor-pointer transition duration-200 hover:text-red-500">
        {props.title}
      </a>
    </Link>
  </motion.li>
);

export const NavFooter = (props) => (
  <div tw="border-t-4 py-10 px-10 w-full flex items-center justify-between text-gray-500">
    <Email />
    <SocialMedia />
  </div>
);

export const NavButton = ({ toggle }) => <Hamburger toggle={toggle} />;
