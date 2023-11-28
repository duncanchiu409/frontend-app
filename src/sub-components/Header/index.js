import React, { useEffect, useState } from "react";
// import { ReactComponent as OcLogo } from "../../assets/svg-icons/transparentLogo.svg";
import logoImage from "../../assets/treehouse_no_bg.png";
import { ReactComponent as Notification } from "../../assets/svg-icons/Notification.svg";
import Profile from "../../assets/svg-icons/Profile.svg";
import "./header.css";
import {
  CREATE_STORIES_URL,
  DASHBOARD_URL,
  DETAIL_STORY_URL,
  EDIT_STORY_URL,
  LOGIN_URL,
  PRICING_URL,
  PROFILE_URL,
  useRouter,
} from "../../routes";
import BackArrow from "../../assets/svg-icons/back-arrow.svg";
import { useNavigate } from "react-router";
import { Popover } from "antd";
import ComponentButton from "../../atoms/ComponentButton";
import {
  DollarOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getUserInfoHook } from "../../api-hooks/user";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const { pathname } = router;
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const content = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "150px",
      }}
    >
      <div
        onClick={() => {
          navigate(PROFILE_URL);
        }}
        className="popover-options"
      >
        <UserOutlined />
        <span>Profile</span>
      </div>
      <div
        onClick={() => {
          navigate(PRICING_URL);
        }}
        className="popover-options"
      >
        <DollarOutlined style={{ fontWeight: "bold" }} />
        <span>Pricing</span>
      </div>
      <div onClick={onLogout} className="popover-options">
        <LogoutOutlined style={{ fontWeight: "bold" }} />
        <span>Logout</span>
      </div>
    </div>
  );

  useEffect(() => {
    getUserInfoHook((response) => {
      setUser(response);
    });
  }, []);

  const getAvatarInitials = () => {
    if (user?.id) {
      const nameSplit = user?.name.split(" ");
      let initials;
      const firstName = nameSplit[0];
      if (firstName) {
        initials = firstName?.[0]?.toUpperCase();
      }
      let lastName;
      if (nameSplit?.length > 1) {
        lastName = nameSplit[1];
      }
      if (lastName) {
        initials = `${initials}${lastName?.[0]?.toUpperCase()}`;
      }
      console.log("First anem", firstName, lastName);
      return initials;
    }
  };
  return (
    <div className="header-container">
      <div className="header-logo">
        {pathname !== CREATE_STORIES_URL &&
          pathname !== EDIT_STORY_URL &&
          pathname !== DETAIL_STORY_URL && (
            <img
              src={logoImage}
              onClick={() => navigate(DASHBOARD_URL)}
              style={{ cursor: "pointer", height: "70px" }}
            />
            // <OcLogo
            //   style={{ cursor: "pointer" }}
            //   onClick={() => navigate(DASHBOARD_URL)}
            // />
          )}

        {pathname === CREATE_STORIES_URL && (
          <div className="story-header">
            <img
              src={BackArrow}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(DASHBOARD_URL);
              }}
              alt="back"
            />
            <div>Create New Story</div>
          </div>
        )}
        {pathname === EDIT_STORY_URL && (
          <div className="story-header">
            <img
              src={BackArrow}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(DASHBOARD_URL);
              }}
              alt="back"
            />
            <div>Edit Story</div>
          </div>
        )}
        {pathname === DETAIL_STORY_URL && (
          <div className="story-header">
            <img
              src={BackArrow}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(DASHBOARD_URL);
              }}
              alt="back"
            />
            <div>Story Detail</div>
          </div>
        )}
      </div>
      <div className="header-components">
        <Notification style={{ cursor: "pointer" }} />
        <Popover content={content} title="" trigger="click">
          <div className="edit-profile-image-container">
            {getAvatarInitials()}
          </div>
          {/* <img src={Profile} style={{ cursor: "pointer" }} /> */}
        </Popover>
      </div>
    </div>
  );
};

export default Header;
