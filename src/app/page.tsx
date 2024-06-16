import Image from "next/image";
import CircularImageWithBackground from "@/components/CircularImage";
import BackgroundAnimator from "@/components/BackgroundAnimator";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundAnimator />
      <CircularImageWithBackground
        src="/profile.jpeg"
        alt="Just me"
        width={400}
        height={400}
      />
      <Navbar />
    </main>
  );
}
