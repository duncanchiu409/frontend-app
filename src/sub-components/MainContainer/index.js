import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import "./mainContainer.css";
import { PROFILE_URL, useRouter } from "../../routes";
import { useNavigate } from "react-router";

const MainContainer = ({ children, stryGenerate, style }) => {
  const router = useRouter();
  const { pathname } = router;
  const navigate = useNavigate();
  const getHeaderClass = () => {
    if(pathname === PROFILE_URL){
      return 'main-container-content-white'
    }else{
      return 'main-container-content'
    }
  }
  return (
    <div  className="main-container" style={{style}}>
      <Header />
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar trigerredHappens={stryGenerate} />
        <div className={getHeaderClass()} >{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
