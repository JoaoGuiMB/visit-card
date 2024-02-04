import Link from "next/link";

const Terms = () => {
  return (
    <ul className="text-white font-sans list-disc p-6 text-bodyMd">
      <li>
        Ao preencher o formulário, concordo * em receber comunicações de acordo
        com meus interesses.
      </li>
      <li>
        Ao informar meus dados, eu concordo com a{" "}
        <Link
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
          className="underline"
        >
          Política de privacidade
        </Link>
        .
      </li>
    </ul>
  );
};

export default Terms;
