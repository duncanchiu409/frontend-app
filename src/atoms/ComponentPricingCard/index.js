import ComponentButton from "../ComponentButton";
import "./ComponentPricingCard.css";

const ComponentPricingCard = ({
  title,
  price,
  priceContent,
  isActive,
  planId,
  onClick,
  userPurchasedPlan,
}) => {
  console.log("isActive", isActive);

  const getBackgroundColor = () => {
    return userPurchasedPlan && userPurchasedPlan === title
    ? "#15B9EB"
    : "#EB1551" || "#EB1551"
  }
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
        title={
          userPurchasedPlan && userPurchasedPlan === title
            ? "Subscribed"
            : "Upgrade" || "Buy"
        }
        style={{
          width: "200px",
          fontSize: "16px",
          fontWeight: "700",
          height: "50px",
          marginTop: "20px",
          backgroundColor: getBackgroundColor(),
          visibility: title === "Free" ? "hidden" : "visible",
          color:  "#fff"
        }}
        disabled={userPurchasedPlan === title}
        onClick={() => {
          if (title !== "Free") onClick(planId);
        }}
      />
    </div>
  );
};

export default ComponentPricingCard;
