import Main from "@/components/Main";
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full min-h-screen hidden lg:flex">
      <SideBar />
      <Main />
    </div>
  );
}
