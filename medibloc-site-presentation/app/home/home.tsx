import Header from "@/components/header";
import Main from "@/components/main";

export default function HomePage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white ">
        <Header />
        <Main />
    </div>
  );
}