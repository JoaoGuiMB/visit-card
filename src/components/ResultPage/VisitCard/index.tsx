import Image from "next/image";
import CardItem from "./CardItem";
import { useSearchParams } from "next/navigation";

const VisitCard = () => {
  const searchParams = useSearchParams();
  const visitCard = {
    name: searchParams.get("name"),
    phone: searchParams.get("phone"),
    email: searchParams.get("email"),
  };
  return (
    <div className="w-[328px] h-[159px] bg-white rounded-3xl p-4 flex flex-row  justify-between items-center">
      <div className="w-[30%] h-full  flex justify-center items-center">
        <div className="w-[45px] h-[38px] relative ">
          <Image
            src="/assets/symbol.svg"
            alt="Symbol"
            fill
            priority
            sizes="100%"
          />
        </div>
      </div>
      <div className="w-[70%] p-2 border-l-2 border-[#D8D9FD]">
        <CardItem>{visitCard.name}</CardItem>
        <CardItem>{visitCard.phone}</CardItem>
        <CardItem>{visitCard.email}</CardItem>
      </div>
    </div>
  );
};

export default VisitCard;
