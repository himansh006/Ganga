import ContentBar from "@/components/core/HomePageComponents";
import LeftBar from "@/components/core/HomePageComponents/LeftBar";
import RightBar from "@/components/core/HomePageComponents/RightBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-between">
      <LeftBar />

      <ContentBar />

      <RightBar />
    </main>
  );
}
