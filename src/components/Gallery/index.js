import { Col, Row } from "antd";
import { galleryData } from "../../dataHelper";
import MainContainer from "../../sub-components/MainContainer";

import "./Gallery.css";
import CardTemplate from "../../sub-components/CardTemplate";
import PageTitle from "../../sub-components/PageTitle";
import { Link } from "react-router-dom";
import { DETAIL_STORY_URL } from "../../routes";

const Gallery = () => {
  return (
    <MainContainer style={{ padding: 0 }}>
      <div>
        <PageTitle title="Gallery" />
      </div>

      {galleryData?.map((item) => {
        return (
          <div>
            <div className="gallery-category-name">{item?.categoryName}</div>
            <div className="story-cards">
              <Row justify="start">
                {item?.stories?.length !== 0 &&
                  item?.stories?.map((story) => {
                    return (
                      <Col span={5} style={{ marginRight: "16px" }}>
                        <Link to={DETAIL_STORY_URL}>
                          <CardTemplate
                            imageSrc={story?.imgSrc}
                            cardContent={story?.content}
                            contentTitle={story?.title}
                            contentDate={story?.date}
                          />
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Gallery;
