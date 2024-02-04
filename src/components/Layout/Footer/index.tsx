import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[56px] bg-lightGray flex text-darkGray text-sXs font-sans justify-between items-center sm:justify-center">
      <Link
        href="https://legal.rdstation.com/pt/privacy-policy/"
        target="_blank"
        className="underline"
      >
        Política de Privacidade
      </Link>
      <p className="md:ml-5">© 2023 Resultados Digitais</p>
    </footer>
  );
};

export default Footer;
