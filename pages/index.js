import tw from "twin.macro";
import { NavBar, Footer } from "@components/layout";
import { Header } from "@components/views";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}
