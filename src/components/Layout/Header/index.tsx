import Image from "next/image";

const Header = () => {
  return (
    <header className="w-screen flex justify-between items-center h-[72px] bg-white px-[24px]">
      <div className="w-[100px] h-[24px] sm:w-[147px] sm:h-[36px] relative">
        <Image src="/assets/logo.svg" alt="Logo" fill />
      </div>
      <h3 className="font-mono font-lightBlack text-msSm sm:text-hXs">
        Gerador de Cartão de Visita
      </h3>
    </header>
  );
};

export default Header;
