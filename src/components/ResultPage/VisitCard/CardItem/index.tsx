interface CardItemProps {
  children: React.ReactNode;
}

const CardItem = ({ children }: CardItemProps) => {
  return (
    <p className=" font-sans text-darkBlack text-bodySm mb-5">{children}</p>
  );
};

export default CardItem;
