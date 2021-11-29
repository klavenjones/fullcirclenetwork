import React from "react";
import { BrandContent } from "./Brand.styles";

const brand = {
  image:
    "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  name: "Full Circle Podcast",
  caption: "Long headline to turn",
  snippet:
    "Long headline to turn your visitors into users Long headline to turn your visitors into users Long headline to turn your visitors into users",
  avatar:
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  owner: "Jermaine Jones",
  date: "10 jun 2020 19:40"
};

export default function Brand() {
  return (
    <>
      <BrandContent brand={brand} />
    </>
  );
}
