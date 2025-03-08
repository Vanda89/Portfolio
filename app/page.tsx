import Banner from "@/components/home/Banner";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div className=" w-full relative flex flex-col items-center justify-center gap-20  ">
      <Banner />
      <Projects />
    </div>
  );
}
