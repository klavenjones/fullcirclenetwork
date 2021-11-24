import React from "react";
import {
  DescriptionContainer,
  DescriptionHeadline,
  DescriptionTagline,
  DescriptionText
} from "./Description.styles";

export default function Description() {
  return (
    <>
      <DescriptionHeadline />
      <DescriptionContainer>
        <DescriptionTagline />
        <DescriptionText />
      </DescriptionContainer>
    </>
  );
}
