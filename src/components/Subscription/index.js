import { Col, Row, Slider, Table } from "antd";
import ComponentCard from "../../atoms/ComponentCard";
import MainContainer from "../../sub-components/MainContainer";
import PageTitle from "../../sub-components/PageTitle";
import "./Subscription.css";
import { CloseOutlined } from "@ant-design/icons";
import ComponentNotificationBar from "../../atoms/ComponentNotificationBar";
import { useState } from "react";
import { useNavigate } from "react-router";
import { PRICING_URL } from "../../routes";

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
      } else if (status === "Success") {
        return <p style={{ color: "#148835", margin: "0" }}>{status}</p>;
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
      if (pdf === "Invoice") {
        return <p style={{ color: "#135DA0", margin: "0" }}>{pdf}</p>;
      }
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

  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <MainContainer>
      <PageTitle title="Subscription" />
      <ComponentCard title="Plan details" btnTitle="Change Plan" onClick={()=>{navigate(PRICING_URL)}}>
        <div className="table-design">
          <Table
            columns={columnsPlan}
            dataSource={dataSourcePlan}
            pagination={false}
            bordered={false}
          />
        </div>
        <div style={{ margin: "10px 0 20px" }}>
          <ComponentNotificationBar />
        </div>
        <div className="table-design">
          <div className="plan-usage">
            <p>Plan Usage</p>
            <p>
              <span>Usage resents on Apr 2, 2023</span>
            </p>
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
                  <span>{inputValue} / 10</span>
                </p>
              </Col>
              <Col span={8}>
                <p></p>
              </Col>
            </Row>
            <div>
              <Slider
                min={1}
                max={10}
                onChange={onChange}
                value={typeof inputValue === "number" ? inputValue : 0}
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
            dataSource={dataSourcePayment}
            pagination={false}
            bordered={false}
          />
        </div>
      </ComponentCard>
    </MainContainer>
  );
};

export default Subscription;
