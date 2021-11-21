import React from "react";
import { HeaderHeadline, HeaderSection } from "./Header.styles";

const headline =
  "Where we connect you with great content creators and new brands";

const subtitle = "Full Circle Network";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderHeadline headline={headline} subtitle={subtitle} />
      </HeaderSection>
    </>
  );
};

export default Header;
