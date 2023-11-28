import { Col, Row, Slider, Table } from "antd";
import ComponentCard from "../../atoms/ComponentCard";
import MainContainer from "../../sub-components/MainContainer";
import PageTitle from "../../sub-components/PageTitle";
import "./Subscription.css";
import { CloseOutlined } from "@ant-design/icons";
import ComponentNotificationBar from "../../atoms/ComponentNotificationBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PRICING_URL } from "../../routes";
import {
  getBooksCreated,
  getInvoiceHistoryHook,
  getUserInfoHook,
} from "../../api-hooks/user";
import { formatDate, plansObj } from "../../dataHelper";
import ComponentButton from "../../atoms/ComponentButton";

const dataSourcePlan = [
  {
    key: "1",
    plan: "Sparkle dreamere",
    monthlyLimit: "10 Stories",
    costPerMonth: "Є15",
  },
];
const columnsPlan = [
  {
    title: "Plan",
    dataIndex: "plan",
    key: "plan",
  },
  {
    title: "Monthly Limit",
    dataIndex: "monthlyLimit",
    key: "monthlyLimit",
  },
  {
    title: "Cost Per Month",
    dataIndex: "costPerMonth",
    key: "costPerMonth",
  },
];
const columnsPayment = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      if (status === "Failed") {
        return <p style={{ color: "#FF5858", margin: "0" }}>{status}</p>;
      } else if (status === "paid") {
        return (
          <p
            style={{
              color: "#148835",
              margin: "0",
              textTransform: "capitalize",
            }}
          >
            {status}
          </p>
        );
      }
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "PDF",
    dataIndex: "pdf",
    key: "pdf",
    render: (pdf) => {
      return (
        <a target="_self" href={pdf} download="Invoice.pdf">
          <p style={{ color: "#135DA0", margin: "0" }}>Invoice</p>
        </a>
      );

      // <p style={{ color: "#135DA0", margin: "0" }}>{pdf}</p>;
    },
  },
];
const dataSourcePayment = [
  {
    key: "1",
    date: "Apr 4, 2023",
    amount: "₹150.00",
    status: "Failed",
    description: "Subscription",
    pdf: "Invoice",
  },

  {
    key: "2",
    date: "Apr 4, 2023",
    amount: "₹150.00",
    status: "Failed",
    description: "Subscription",
    pdf: "Invoice",
  },
  {
    key: "3",
    date: "Apr 4, 2023",
    amount: "₹150.00",
    status: "Success",
    description: "Subscription",
    pdf: "Invoice",
  },
  {
    key: "4",
    date: "Apr 4, 2023",
    amount: "₹150.00",
    status: "Success",
    description: "Subscription",
    pdf: "Invoice",
  },
];

const Subscription = () => {
  const [inputValue, setInputValue] = useState(4);
  const navigate = useNavigate();

  const [paymentInfo, setPaymentInfo] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(0);

  const [subscriptionEndDate, setSubscriptionEndDate] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("Promotional Plan");
  const [invoiceList, setInvoiceList] = useState([]);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  useEffect(() => {
    getUserInfoHook((response) => {
      const plan = response?.subscribedPlan?.nickname;
      const monthlyLimit =
        plansObj[response?.subscribedPlan?.nickname]?.storiesText;
      const costPerMonth = plansObj[response?.subscribedPlan?.nickname]?.cost;
      setSubscriptionType(response?.subscribedPlan?.nickname);
      setPaymentInfo([
        {
          key: "1",
          plan: plan,
          monthlyLimit: monthlyLimit,
          costPerMonth: costPerMonth,
        },
      ]);
      setSubscriptionEndDate(response?.stripePayment?.subscriptionEnds);
      getBooksCreated(response?.id, (response) => {
        setCurrentMonth(response?.current_month);
      });
    });

    getInvoiceHistoryHook((response) => {
      console.log("Invoice History", response);
      let list = [];
      if (response?.length) {
        response?.forEach((item, index) => {
          list.push({
            key: index,
            date: formatDate(item?.created * 1000),
            amount: `$${item?.total ? parseInt(item?.total) / 100 : 0}`,
            status: item?.status,
            description: item?.lines?.data?.[0]?.plan?.nickname,
            pdf: item?.invoice_pdf,
          });
        });
      }
      setInvoiceList(list);
    });
  }, []);
  return (
    <MainContainer>
      <PageTitle title="Subscription" />
      {subscriptionType !== "Promotional Plan" && subscriptionType && (
        <>
          <ComponentCard
            title="Plan details"
            btnTitle="CHANGE PLAN"
            onClick={() => {
              navigate(PRICING_URL);
            }}
          >
            <div className="table-design">
              <Table
                columns={columnsPlan}
                dataSource={paymentInfo}
                pagination={false}
                bordered={false}
              />
            </div>
            <div style={{ margin: "10px 0 20px" }}>
              <ComponentNotificationBar
                subscriptionEndDate={subscriptionEndDate}
              />
            </div>
            <div className="table-design">
              <div className="plan-usage">
                <p>Plan Usage</p>
                {/* <p>
              <span>Usage resents on Apr 2, 2023</span>
            </p> */}
              </div>
              <div className="plan-usage" style={{ paddingTop: "20px" }}>
                <Row>
                  <Col span={8}>
                    <p>
                      <span>Stories created</span>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p style={{ textAlign: "center" }}>
                      <span>
                        {currentMonth} /{" "}
                        {plansObj[subscriptionType]?.noOfStories}
                      </span>
                    </p>
                  </Col>
                  <Col span={8}>
                    <p></p>
                  </Col>
                </Row>
                <div>
                  <Slider
                    min={0}
                    max={plansObj[subscriptionType]?.noOfStories}
                    value={typeof currentMonth === "number" ? currentMonth : 0}
                  />
                </div>
              </div>
            </div>
          </ComponentCard>
          <div style={{ marginBottom: "20px" }}></div>
          <ComponentCard title="Payment History">
            <div className="table-payment-design">
              <Table
                columns={columnsPayment}
                dataSource={invoiceList}
                pagination={false}
                bordered={false}
              />
            </div>
          </ComponentCard>
        </>
      )}
      {(subscriptionType === "Promotional Plan" || !subscriptionType) && (
        <div className="subscription-empty-container">
          <div
            style={{ color: "#44444F", fontSize: "16px", fontWeight: "bold" }}
          >
            No Subscription Found!
          </div>
          <ComponentButton
            title={"Subscribe"}
            style={{
              width: "200px",
              fontSize: "16px",
              fontWeight: "700",
              height: "50px",
              marginTop: "20px",
              backgroundColor: "#EB1551",
            }}
            onClick={() => {
              navigate(PRICING_URL);
            }}
          />
        </div>
      )}
    </MainContainer>
  );
};

export default Subscription;
