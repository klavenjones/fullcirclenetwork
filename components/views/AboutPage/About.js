import React from "react";
import { AboutHeroImage, AboutSection } from "./About.styles";

const imageURL =
  "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3269&q=80";

export default function About() {
  return (
    <>
      <AboutHeroImage image={imageURL} />
      <AboutSection />
    </>
  );
}
