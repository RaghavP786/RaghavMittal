type Props = {
  heading: string;
  description: string;
};

const CardDes = ({ heading, description }: Props) => {
  return (
    <>
      <div style={{ color: "white" }} className="h-[10vh] pt-3 pb-3">
        <h2 className="font-custom text-[1.1rem]">{heading}</h2>
        <p
          className="font-montserrat text-[0.8rem]"
          style={{
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default CardDes;
