import { Inter } from "next/font/google";
import LayoutContainer from "@/containers/LayoutContainer";
import HomeContainer from "@/containers/HomeContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutContainer title={``}>
      <HomeContainer />
    </LayoutContainer>
  );
}
