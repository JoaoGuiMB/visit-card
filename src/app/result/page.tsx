"use client";
import { useSearchParams } from "next/navigation";
import LandingImage from "@/components/Layout/LandingImage";
import { useMedia } from "react-use";
import VisitCard from "@/components/ResultPage/VisitCard";
import dynamic from "next/dynamic";

const ResultPage = () => {
  const searchParams = useSearchParams();
  const isMobile = useMedia("(max-width: 768px)");
  console.log(searchParams.getAll("name"));
  return (
    <main className="w-full pt-36 h-[calc(100vh-72px)] bg-lightPurple flex-column justify-center items-center">
      <section className="flex flex-col grow justify-center items-center mt-14 md:my-24 md:flex-row md:justify-between md:mx-24">
        {!isMobile && <LandingImage />}
        <VisitCard />
      </section>
    </main>
  );
};

export default ResultPage;
