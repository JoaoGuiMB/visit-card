import Image from "next/image";

const LandingImage = () => {
  return (
    <div className="w-[268px] h-[198px] sm:w-[560px] sm:h-[360px] relative flex justify-center items-center">
      <Image
        src="/assets/landingpage.png"
        alt="Landing page"
        fill
        priority
        sizes="100%"
      />
    </div>
  );
};

export default LandingImage;
