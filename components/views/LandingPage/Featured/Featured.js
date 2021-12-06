import React from "react";
import { FeaturedSection } from "./Featured.styles";

const featured = [
  {
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    brand: "Brand Name One",
    caption: "Long headline to turn your visitors into users"
  },
  {
    image:
      "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    brand: "Brand Name Two",
    caption: "Long headline to turn your visitors into users"
  },
  {
    image:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    brand: "Brand Name Three",
    caption: "Long headline to turn your visitors into users"
  }
];

export default function Featured() {
  return (
    <>
      <FeaturedSection featured={featured} />
    </>
  );
}
