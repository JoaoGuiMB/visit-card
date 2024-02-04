import Image from "next/image";
import CardItem from "./CardItem";
import { useSearchParams } from "next/navigation";
import GoBack from "./CardItem/GoBack";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const VisitCard = () => {
  const searchParams = useSearchParams();
  const visitCard = {
    name: searchParams.get("name"),
    phone: searchParams.get("phone"),
    email: searchParams.get("email"),
  };
  return (
    <div className="w-full p-2">
      <GoBack />
      <div className="w-full h-[159px] md:w-full md:h-[250px] md:py-[32px] md:px-[72px] bg-[white] shadow-[#212429] rounded-3xl p-4 flex flex-row  justify-between items-center">
        <div className="w-[30%] h-full flex justify-center items-center md:pr-6">
          <div className="w-[45px] h-[38px] relative  md:w-[150px] md:h-[120px] ">
            <Image
              src="/assets/symbol.svg"
              alt="Symbol"
              fill
              priority
              sizes="100%"
            />
          </div>
        </div>
        <div className="w-[70%] h-full p-2 border-l-2 border-[#D8D9FD] flex flex-col justify-center">
          <CardItem>{visitCard.name}</CardItem>
          <CardItem>{visitCard.phone}</CardItem>
          <CardItem>{visitCard.email}</CardItem>
        </div>
      </div>
      <Button className="mt-4 bg-[#E1E4E8] w-full h-[48px] border-darkGray font-sans text-sSm font-bold hover:bg-[#E1E4E8]">
        <Icon icon="gg:arrow-down" className="mr-2" />
        BAIXAR CARTÃO
      </Button>
      <div className="flex mt-10">
        <Link
          className="text-sSm text-white font-sans font-bold text-center w-full flex justify-center items-center hover:underline"
          href="https://app.rdstation.com.br/signup"
          target="_blank"
          rel="noreferrer"
        >
          FAZER UM TESTE GŔATIS DO RD STATION MARKETING
          <Icon icon="gg:arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default VisitCard;
