import NavbarComponent from "@/components/NavbarComponent";
import FirstChild from "@/components/home/FirstChild";
import FooterChild from "@/components/home/FooterChild";
import SecondChild from "@/components/home/SecondChild";
import ThirdChild from "@/components/home/ThirdChild";

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <FirstChild />
      <SecondChild />
      <ThirdChild />
      <FooterChild />
    </main>
  );
}
