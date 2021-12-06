import Hamburger from "@assets/Hamburger";
import useWindowSize from "@hooks/useWindowSize";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import {
  Navbar,
  NavContainer,
  NavLogo,
  NavButton,
  NavOverlay,
  Nav,
  NavFooter
} from "./Navbar.styles";

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const navOverlay = {
  open: {
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  },
  closed: {
    opacity: 0,
    pointerEvents: "none",
    transition: {
      type: "spring",
      stiffness: 400,
      restDelta: 40
    }
  }
};

const navLinks = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "About",
    url: "/about"
  },
  {
    title: "Contact",
    url: "/contact"
  },
  {
    title: "Brands",
    url: "/brands"
  }
];

export default function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const size = useWindowSize();

  return (
    <>
      <Navbar initial={false} animate={isOpen ? "open" : "closed"}>
        <NavContainer>
          <NavLogo>{size.width > 600 ? "Full Circle Network" : "FCN"}</NavLogo>
          <NavButton toggle={toggleOpen} />
          <NavOverlay variants={navOverlay}>
            <Nav
              navLinks={navLinks}
              navVariants={navVariants}
              linkVariants={linkVariants}
            />
            <NavFooter />
          </NavOverlay>
        </NavContainer>
      </Navbar>
    </>
  );
}
