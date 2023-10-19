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

const dummyPricingData = [
  {
    id: 1,
    title: "Sparkle lite",
    price: "Free",
    isActive: false,
    priceContent: [
      {
        priceContentData: [
          "Personalised story",
          "Library Of Thousands Of Tales",
          "Meditations",
          "Lullabies",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Sparkle Dreamer",
    price: "$4.99",
    isActive: true,
    priceContent: [
      {
        priceContentData: [
          "Personalised story",
          "Library Of Thousands Of Tales",
          "Meditations",
          "Lullabies",
          "Personalised story",
          "Library Of Thousands Of Tales",
          "Meditations",
          "Lullabies",
          "Personalised story",
          "Library Of Thousands Of Tales",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Sparkle Magician",
    price: "$6.99",
    isActive: false,
    priceContent: [
      {
        priceContentData: [
          "Personalised story",
          "Library Of Thousands Of Tales",
          "Meditations",
          "Lullabies",
          "Personalised story",
          "Library Of Thousands Of Tales",
          "Meditations",
          "Lullabies",
          "Personalised story",
          "Library Of Thousands Of Tales",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Sparkle Champion",
    price: "$9.99",
    isActive: false,
    priceContent: [
      {
        priceContentData: [
          "Personalised story",
          "Library Of Thousands Of Tales",
          "Meditations",
          "Lullabies",
          "Personalised story",
          "Library Of Thousands Of Tales",
          "Meditations",
          "Lullabies",
          "Personalised story",
          "Library Of Thousands Of Tales",
        ],
      },
    ],
  },
];

const Pricing = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
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
            <Switch defaultChecked onChange={onChange} />
            <p>Yearly</p>
          </div>
        </div>
        <div className="card-price-display" style={{ paddingTop: "46px" }}>
          {dummyPricingData.map((item) => {
            return (
              <ComponentPricingCard
                title={item?.title}
                price={item?.price}
                priceContent={item?.priceContent}
                isActive={item?.isActive}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
