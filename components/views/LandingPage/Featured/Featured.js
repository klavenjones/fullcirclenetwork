import React from "react";
import { FeaturedSection } from "./Featured.styles";

const featured = [
  {
    image:
      "https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyZWF0aXZlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    brand: "Brand Name One",
    caption: "Long headline to turn your visitors into users"
  },
  {
    image:
      "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNyZWF0aXZlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    brand: "Brand Name Two",
    caption: "Long headline to turn your visitors into users"
  },
  {
    image:
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNyZWF0aXZlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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
