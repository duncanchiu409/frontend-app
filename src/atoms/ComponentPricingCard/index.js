import ComponentButton from "../ComponentButton";
import "./ComponentPricingCard.css";

const ComponentPricingCard = ({
  title,
  price,
  priceContent,
  isActive,
  planId,
  onClick,
}) => {
  console.log("isActive", isActive);
  return (
    <div className={isActive ? "price-card active-price-card" : "price-card"}>
      <h4>{title}</h4>
      <h6>{price}</h6>
      <ul>
        {priceContent[0]?.priceContentData.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

      <ComponentButton
        title="Buy"
        style={{
          width: "200px",
          fontSize: "16px",
          fontWeight: "700",
          height: "50px",
          marginTop: "20px",
          backgroundColor: "#EB1551",
        }}
        onClick={() => {
          onClick(planId);
        }}
      />
    </div>
  );
};

export default ComponentPricingCard;
