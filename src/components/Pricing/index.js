import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./Pricing.css";
import { Switch } from "antd";
import FloatVector1 from "../../assets/svg-icons/float-vector1.svg";
import FloatVector2 from "../../assets/svg-icons/float-vector2.svg";
import ComponentPricingCard from "../../atoms/ComponentPricingCard";
import Header from "../../sub-components/Header";
import { useEffect, useState } from "react";
import {
  getPaymentPlansHook,
  getUserInfoHook,
  subscribeToPlan,
} from "../../api-hooks/user";
import { loadStripe } from "@stripe/stripe-js";

const Pricing = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [user, setUser] = useState();

  const [isYearly, setIsYearly] = useState(false);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setIsYearly(checked);
  };

  useEffect(() => {
    getUserInfoHook((response) => {
      if (response) {
        setUser(response);
      }
    });
  }, []);
  useEffect(() => {
    getPaymentPlansHook((response) => {
      console.log("Payement Plans Response", response);
      let list = [];
      if (isYearly) {
        if (response?.yearly?.length) {
          response?.yearly?.forEach((item) => {
            if (item?.metadata?.main !== "false") {
              let priceContentData = [];
              if (item?.nickname === "Free") {
                priceContentData = [
                  "1 book",
                  "choose from 6 unique illustration styles",
                  "create personalized characters",
                  "customized story themes",
                  "10 pages",
                  "",
                ];
              } else if (item?.nickname === "Starter") {
                priceContentData = [
                  "1 book",
                  "choose from 6 unique illustration styles",
                  "create personalized characters",
                  "customized story themes",
                  "10 pages",
                  "download to PDF",
                ];
              } else if (item?.nickname === "Dreamer") {
                priceContentData = [
                  "10 books",
                  "choose from 6 unique illustration styles",
                  "create personalized characters",
                  "customized story themes",
                  "10 pages",
                  "download to PDF",
                ];
              } else if (item?.nickname === "Magician") {
                priceContentData = [
                  "30 books",
                  "choose from 6 unique illustration styles",
                  "create personalized characters",
                  "customized story themes",
                  "10 pages",
                  "download to PDF",
                ];
              }
              list.push({
                id: item?.id,
                title: item?.nickname,
                price: `$${item?.amount / 100}`,
                priceAmount: item?.amount,
                isActive: false,
                priceContent: [
                  {
                    priceContentData: priceContentData,
                  },
                ],
              });
            }
          });
        }
      } else {
        if (response?.monthly?.length) {
          response?.monthly?.forEach((item) => {
            if (item?.metadata?.main !== "false") {
              let priceContentData = [];
              if (item?.nickname === "Free") {
                priceContentData = [
                  "1 book",
                  "choose from 6 unique illustration styles",
                  "create personalized characters",
                  "customized story themes",
                  "10 pages",
                  "",
                ];
              } else if (item?.nickname === "Starter") {
                priceContentData = [
                  "1 book",
                  "choose from 6 unique illustration styles",
                  "create personalized characters",
                  "customized story themes",
                  "10 pages",
                  "download to PDF",
                ];
              } else if (item?.nickname === "Dreamer") {
                priceContentData = [
                  "10 books",
                  "choose from 6 unique illustration styles",
                  "create personalized characters",
                  "customized story themes",
                  "10 pages",
                  "download to PDF",
                ];
              } else if (item?.nickname === "Magician") {
                priceContentData = [
                  "30 books",
                  "choose from 6 unique illustration styles",
                  "create personalized characters",
                  "customized story themes",
                  "10 pages",
                  "download to PDF",
                ];
              }
              list.push({
                id: item?.id,
                title: item?.nickname,
                price: `$${item?.amount / 100}`,
                priceAmount: item?.amount,
                isActive: false,
                priceContent: [
                  {
                    priceContentData: priceContentData,
                  },
                ],
              });
            }
          });
        }
      }

      setPricingPlans(list);
    });
  }, [isYearly]);
  // price_1OCadAJJpJ9k3rm3A0k7xqYw;
  const onSelectPlan = async (planId) => {
    console.log("On select Plan", planId);
    let stripe = await loadStripe(
      "pk_test_51O0MmrJJpJ9k3rm33t9fcVkDGQja0gYkN88AQdf2Fo1dDR3gaSxhrXYI6pHh0Zev4Wrd00mcmahaJbkmwFVxrX3r00lY05QprJ"
    );
    if (stripe) {
      subscribeToPlan(planId, (response) => {
        const sessionId = response.data?.sessionId;
        console.log("sessionId", sessionId);
        stripe.redirectToCheckout({ sessionId });
      });
    }

    // if (!this.isSubscribed) {
    // }
  };

  console.log("Login User", user);
  return (
    <div>
      <Header />
      {/* <div
        className="price-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <PhoneOutlined />
            <span>+000 - 123 - 456789</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <MailOutlined />
            <span>info@example.com</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Follow Us:</span>
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="social-icons"
          >
            <div>
              <FacebookOutlined />
            </div>
            <div>
              <TwitterOutlined />
            </div>
            <div>
              <InstagramOutlined />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div style={{ marginTop: "60px" }}></div> */}
      <div className="pricing-body">
        <div className="float-vector1">
          <img src={FloatVector1} alt="float vector" />
        </div>
        <div className="float-vector2">
          <img src={FloatVector2} alt="float vector" />
        </div>
        <div style={{ textAlign: "center" }}>
          <h6>Pricing</h6>
          <h3>Choose your plan</h3>
          <div className="pricing-switch">
            <p>Pay Monthly</p>
            <Switch checked={isYearly} onChange={onChange} />
            <p>Yearly</p>
          </div>
        </div>
        <div className="card-price-display" style={{ paddingTop: "46px" }}>
          {pricingPlans.map((item) => {
            return (
              <ComponentPricingCard
                title={item?.title}
                price={item?.price}
                priceContent={item?.priceContent}
                isActive={item?.isActive}
                planId={item?.id}
                onClick={onSelectPlan}
                userPurchasedPlan={user?.subscribedPlan?.nickname}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
