import React from "react";
import MainContainer from "../../sub-components/MainContainer";
import CardTemplate from "../../sub-components/CardTemplate";
import ImageSample from "../../assets/svg-icons/card-sample1.svg";
import CirclePlus from "../../assets/svg-icons/circle-plus.svg";
import story1 from "../../assets/story1.png";
import story2 from "../../assets/story2.png";
import story3 from "../../assets/story3.png";
import story4 from "../../assets/story4.png";
import "./Dashboard.css";
import { Col, Row } from "antd";
import { useNavigate } from "react-router";
import { CREATE_STORIES_URL } from "../../routes";
import PageTitle from "../../sub-components/PageTitle";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <MainContainer style={{ padding: 0 }}>
      <div>
        <PageTitle title="My Stories" />
      </div>
      <div className="story-cards">
        <Row justify="start">
          {/* <Col span={5} style={{ marginRight: "16px" }}>
            <div
              className="create-new-story"
              onClick={() => {
                navigate(CREATE_STORIES_URL);
              }}
            >
              <img src={CirclePlus} />
              <div>Create New</div>
            </div>
          </Col> */}
          <Col span={5} style={{ marginRight: "16px" }}>
            <Link to="/story/edit">
              <CardTemplate
                imageSrc={story1}
                cardContent={"Nik’s rocky mountain adventure"}
                contentTitle={"Sample"}
                contentDate={"16 Jan 2023"}
              />
            </Link>
          </Col>
          <Col span={5} style={{ marginRight: "16px" }}>
            <Link to="/story/edit">
              <CardTemplate
                imageSrc={story2}
                cardContent={"Nik’s adventure to great wall!"}
                contentTitle={"Sample"}
                contentDate={"16 Jan 2023"}
              />
            </Link>
          </Col>
          <Col span={5} style={{ marginRight: "16px" }}>
            <Link to="/story/edit">
              <CardTemplate
                imageSrc={story3}
                cardContent={"Nik’s jazz adventure in new orland"}
                contentTitle={"Sample"}
                contentDate={"16 Jan 2023"}
              />
            </Link>
          </Col>
          <Col span={5} style={{ marginRight: "16px" }}>
            <Link to="/story/edit">
              <CardTemplate
                imageSrc={story4}
                cardContent={"Nik’s adventure to great wall!"}
                contentTitle={"Sample"}
                contentDate={"16 Jan 2023"}
              />
            </Link>
          </Col>
        </Row>
      </div>
    </MainContainer>
  );
};

export default Dashboard;
