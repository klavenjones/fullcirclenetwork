 import tw from "twin.macro";
import { NavBar, Footer } from "@components/layout";
import { Featured, Header, Description, Brands } from "@components/views";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Featured />
      <Description />
      <Brands />
      <Footer />
    </div>
  );
}
