import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  FooterAuthor,
  FooterContainer,
  FooterCopyRight,
  FooterInnerContainer,
  FooterNav,
  FooterSocialNav
} from "./Footer.styles";


const navigation = [
  {
    href: "/",
    title: "Home"
  },
  {
    href: "/about",
    title: "About"
  },
  {
    href: "/contact",
    title: "Contact"
  },
  {
    href: "/brands",
    title: "Brands"
  }
];

const socialNav = [
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram tw="h-6 w-6" />
  },
  {
    href: "https://www.facebook.com/",
    icon: <FaFacebook tw="h-6 w-6" />
  },
  {
    href: "https://www.twitter.com/",
    icon: <FaTwitter tw="h-6 w-6" />
  }
];

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterInnerContainer>
          <FooterNav navigation={navigation} />
          <FooterSocialNav navigation={socialNav} />
        </FooterInnerContainer>
        <FooterAuthor href="https://www.klavenjones.com/">Klaven</FooterAuthor>
        <FooterCopyRight>
          All rights reserved © Full Circle Coalition 2020
        </FooterCopyRight>
      </FooterContainer>
    </>
  );
}
