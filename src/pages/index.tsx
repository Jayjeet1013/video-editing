import { Inter } from "next/font/google";
import VideoForm from "@/components/home/VideoForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="mt-10 ">

    <VideoForm/>
  </div>
  );
}
