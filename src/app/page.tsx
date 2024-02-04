import LandingpageForm from "@/components/MainPage/LandingpageForm";
import Title from "@/components/MainPage/Title";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full pt-5 lg:h-[calc(100vh-72px)] bg-lightPurple flex-column justify-center items-center">
      <Title />
      <section className="flex flex-col grow justify-center items-center mt-14 md:my-24 md:flex-row md:justify-between md:mx-24">
        <div className="w-[268px] h-[198px] sm:w-[455px] sm:h-[335px] relative flex justify-center items-center">
          <Image
            src="/assets/landingpage.png"
            alt="Landing page"
            fill
            priority
            sizes="100%"
          />
        </div>
        <LandingpageForm />
      </section>
    </main>
  );
}
