"use client";

import LandingImage from "@/components/Layout/LandingImage";
import { useMedia } from "react-use";
import VisitCard from "@/components/ResultPage/VisitCard";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

import dynamic from "next/dynamic";

const DynamicImageWithNoSSR = dynamic(
  () => import("@/components/Layout/LandingImage"),
  {
    ssr: false,
  }
);

const ResultPage = () => {
  const isMobile = useMedia("(max-width: 1500px)");

  return (
    <main className="w-full pt-36 h-[calc(100vh-128px)] md:px-52 bg-lightPurple flex-column justify-center items-center">
      <section className="flex flex-col justify-center items-center md:flex-row md:justify-between md:mx-24">
        {!isMobile && (
          <div className="sm:w-[20%]">
            <DynamicImageWithNoSSR />
          </div>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <div className="text-darkGray md:w-[50%]">
            <VisitCard />
          </div>
        </Suspense>
      </section>
    </main>
  );
};

export default ResultPage;
