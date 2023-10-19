import React, { useCallback } from "react";
import "./sidebar.css";
import MyStoriesIcon from "../../assets/svg-icons/stories.svg";
import GalleryIcon from "../../assets/svg-icons/galery.svg";
import SubscriptionIcon from "../../assets/svg-icons/subscription.svg";
import CirclePlus from "../../assets/svg-icons/circle-plus.svg";
import { Divider } from "antd";
import {
  CREATE_STORIES_URL,
  DASHBOARD_URL,
  DETAIL_STORY_URL,
  EDIT_STORY_URL,
  GALLERY_URL,
  SUBSCRIPTION_URL,
  useRouter,
} from "../../routes";
import { useNavigate } from "react-router";
import CreateStorySidebar from "../CreateStorySidebar";
import { PlusOutlined } from "@ant-design/icons";

const Sidebar = (props) => {
  const router = useRouter();
  const { pathname } = router;
  const navigate = useNavigate();

  const getIsSelectedStyle = useCallback(
    (url) => {
      return {
        backgroundColor: pathname === url ? "#F3F3F3" : "",
      };
    },
    [pathname]
  );

  return (
    <>
      {pathname !== CREATE_STORIES_URL &&
        pathname !== EDIT_STORY_URL &&
        pathname !== DETAIL_STORY_URL && (
          <div className="sidebar-container">
            <div
              className="sidebar-item"
              style={getIsSelectedStyle(CREATE_STORIES_URL)}
              onClick={() => {
                navigate(CREATE_STORIES_URL);
              }}
            >
              <PlusOutlined />
              {/* <img src={PlusOutlined} alt="my-stories" /> */}
              <span>Create Story</span>
            </div>
            <div
              className="sidebar-item"
              style={getIsSelectedStyle(DASHBOARD_URL)}
              onClick={() => {
                navigate(DASHBOARD_URL);
              }}
            >
              <img src={MyStoriesIcon} alt="my-stories" />
              <span>My Stories</span>
            </div>
            <div
              className="sidebar-item"
              style={getIsSelectedStyle(GALLERY_URL)}
              onClick={() => {
                navigate(GALLERY_URL);
              }}
            >
              <img src={GalleryIcon} alt="gallery-icon" />
              <span>Gallery</span>
            </div>
            <Divider style={{ marginTop: "0", marginBottom: "5px" }} />
            <div
              className="sidebar-item"
              style={getIsSelectedStyle(SUBSCRIPTION_URL)}
              onClick={() => {
                navigate(SUBSCRIPTION_URL);
              }}
            >
              <img src={SubscriptionIcon} alt="subscription" />
              <span>Subscription</span>
            </div>
          </div>
        )}
      {(pathname === CREATE_STORIES_URL || pathname === EDIT_STORY_URL) && (
        <div className="sidebar-create-story-container">
          <CreateStorySidebar onClick={props.trigerredHappens} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
