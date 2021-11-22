import tw from "twin.macro";
import { NavBar, Footer } from "@components/layout";
import { Brands, Featured, Header } from "@components/views";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Featured />
      <Footer />
    </div>
  );
}
