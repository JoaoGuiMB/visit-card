import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const GoBack = () => {
  return (
    <Link
      className="text-white font-sans text-bodySm  md:text-bodyMd flex items-center text-center mb-5 hover:underline "
      href={"/"}
    >
      <Icon icon="iconamoon:arrow-left-2-bold" className="mb-0.5 ml" />
      Gerar outro cartão
    </Link>
  );
};

export default GoBack;
