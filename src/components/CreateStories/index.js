import React, { useEffect, useState } from "react";
import MainContainer from "../../sub-components/MainContainer";
import ShareBtn from "../../assets/svg-icons/shareBtn.svg";
import ComponentButton from "../../atoms/ComponentButton";
import "./CreateStories.css";
import TabImg1 from "../../assets/svg-icons/tabImg1.svg";
import TabImg2 from "../../assets/svg-icons/tabImg2.svg";
import TabImg3 from "../../assets/svg-icons/tabImg3.svg";
import TabImg4 from "../../assets/svg-icons/tabImg4.svg";
import { Progress, message } from "antd";
import axios from "axios";
import DownloadScreenImage from "../../assets/svg-icons/download-screen-image.svg";
import { getBooksCreated, getUserInfoHook, downloadHook } from "../../api-hooks/user";
import { plansObj } from "../../dataHelper";
import { useNavigate } from "react-router";
import { PRICING_URL } from "../../routes";

const CreateStories = ({ type }) => {
  const [generateStry, setGenerateStry] = useState(false);
  const [progressBarStatus, setProgressBarStatus] = useState(false);
  const [progressBarValue, setProgressBarValue] = useState();
  const [progressStepText, setProgressStepText] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [storyId, setStoryId] = useState();
  const [downloadData, setDownloadData] = useState();
  const [isGenerateClicked, setIsGenerateClicked] = useState(false);

  const navigate = useNavigate();

  const [subscribedMessage, setSubscribedMessage] = useState("");

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfoHook((response) => {
      console.log("get User Data", response);
      setUser(response);
    });
  }, []);
  const dummyTabList = [
    {
      id: 1,
      imageSrc: TabImg1,
      isChecked: true,
    },
    {
      id: 2,
      imageSrc: TabImg2,
      isChecked: false,
    },
    {
      id: 3,
      imageSrc: TabImg3,
      isChecked: false,
    },
    {
      id: 4,
      imageSrc: TabImg4,
      isChecked: false,
    },
  ];
  const [checkedData, setIsCheckedData] = useState(dummyTabList);
  const handleChecked = (itemId) => {
    checkedData.map((item) => {
      if (item.id === itemId) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }
    });
    setIsCheckedData([...checkedData]);
  };

  const generateStory = (values) => {
    console.log("printing the values", values, user?.id);
    if (progressStepText == "Failed") {
      setIsGenerateClicked(false)
    }

    if (!isGenerateClicked) {
      getBooksCreated(user?.id, (totalBookUsedResponse) => {
        const subscriptionType = user?.subscribedPlan?.nickname;
        const current_month = totalBookUsedResponse?.current_month;
        if (
          plansObj[subscriptionType]?.noOfStories &&
          current_month < plansObj[subscriptionType]?.noOfStories
        ) {
          values.age = Number(values.age);
          values.customer_id = user?.id;
          setProgressBarValue();
          setProgressStepText("");
          setDownloadLink("");
          setDownloadData();
          setIsGenerateClicked(true);
          const token = localStorage.getItem("authToken");
          let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${process.env.REACT_APP_PY_API}/book`,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            data: values,
          };
          axios
            .request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              setProgressBarStatus(true);
              setStoryId(response.data);
              getCalculatedProgressData(response.data);
              setSubscribedMessage("");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          if (subscriptionType === "Promotional Plan") {
            setSubscribedMessage("Buy");
          } else {
            setSubscribedMessage("Upgrade");
          }
        }
      });
    }
  };

  const getCalculatedProgressData = (storyId) => {
    if (storyId) {
      const token = localStorage.getItem("authToken");
      let getDataStatus = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_PY_API}/book?book_id=${storyId}`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .request(getDataStatus)
        .then((response) => {
          console.log("getting data new", JSON.stringify(response.data));
          setProgressBarValue(
            Math.ceil(
              (response.data.current_step / response.data.total_steps) * 100
            )
          );
          const progresbarValue = Math.ceil(
            (response.data.current_step / response.data.total_steps) * 100
          );
          console.log("Progress bart value", progresbarValue,)
          if (progresbarValue === 100) {
            setDownloadLink(response.data.pdf_path);
            setDownloadData(response.data);
            setIsGenerateClicked(false);
          }
          setProgressStepText(response?.data?.state_text);
        })
        .catch((error) => {
          console.log(error);
          setIsGenerateClicked(false);
        });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progressBarValue && progressBarValue !== 100 && storyId && progressStepText != "Failed") {
        console.log("progressBarValue", progressBarValue, storyId);
        getCalculatedProgressData(storyId);
      } else {
        // If the task is completed, clear the interval
        console.log("progressBarValue Completed", progressBarValue);

        clearInterval(intervalId);
      }
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, [storyId, progressBarValue]);

  const downloadBook = async sessionId => {
    downloadHook(sessionId, (response) => {
      const link = document.createElement('a');
      link.href = response;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
  }

  console.log("storyId", storyId);
  return (
    <div className="create-stry-container">
      <MainContainer stryGenerate={generateStory}>
        <div className="stry-container">
          {!subscribedMessage && (
            <>
              <div className="stry-header">
                {/* <img src={ShareBtn} style={{ cursor: "pointer" }} /> */}
                {downloadLink && (
                  <ComponentButton
                    title={"Download"}
                    style={{
                      width: "120px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      height: "38px",
                      backgroundColor: "#EB1551",
                    }}
                    onClick={() => downloadBook(storyId)}
                  />
                )}
                {progressStepText == 'Failed' && (
                  <div>
                    <ComponentButton
                      title={"Retry"}
                      style={{
                        width: "120px",
                        borderRadius: "10px",
                        fontSize: "12px",
                        height: "38px",
                        backgroundColor: "#EB1551",
                      }}
                      onClick={generateStory}
                    />
                  </div>
                )}
              </div>
              <div className="stry-content">
                {(generateStry || type === "detail" || type === "edit") && (
                  <div style={{ textAlign: "center" }}>
                    {checkedData.map((item) => {
                      if (item?.isChecked === true) {
                        return (
                          <img src={item?.imageSrc} style={{ width: "60%" }} />
                        );
                      }
                    })}
                  </div>
                )}
                {!generateStry && type !== "detail" && type !== "edit" && (
                  <div className="stry-content-frame">
                    {progressBarStatus && !downloadLink && (
                      <div className="progress-bar">
                        <Progress percent={progressBarValue} status="active" />
                        <div
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "14px",
                          }}
                        >
                          {progressStepText}
                        </div>
                        {progressStepText == 'Failed' && <div style={{ display: "flex", justifyContent: 'center', marginTop: '16px' }}>
                          <ComponentButton
                            title={"Retry"}
                            style={{
                              width: "120px",
                              borderRadius: "10px",
                              fontSize: "12px",
                              height: "38px",
                              backgroundColor: "#EB1551",
                            }}
                            onClick={generateStory}
                          />
                        </div>}
                      </div>
                    )}
                    {downloadLink && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          overflowY: "auto",
                          paddingTop: "30px",
                        }}
                      >
                        <h6
                          style={{
                            textAlign: "center",
                            color: "#44444F",
                            fontWeight: "bold",
                            fontSize: "22px",
                            fontFamily: "inter",
                            margin: "0px",
                          }}
                        >
                          {downloadData?.tasks?.prepare_image_commands?.title}
                        </h6>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#44444F",
                            fontSize: "14px",
                            maxWidth: "488px",
                            margin: "auto",
                            width: "100%",
                            margin: "10px",
                          }}
                        >
                          {downloadData?.tasks?.prepare_image_commands?.moral}
                        </p>
                        <div
                          style={{ padding: "10px 0px", textAlign: "center" }}
                        >
                          {/* <img src={downloadData?.tasks?.generate_image[0]?.Page5}/> */}
                          <img
                            src={DownloadScreenImage}
                            style={{ maxWidth: "200px" }}
                          />
                        </div>
                        <ComponentButton
                          title={"Download"}
                          style={{
                            width: "120px",
                            borderRadius: "10px",
                            fontSize: "12px",
                            height: "38px",
                            backgroundColor: "#EB1551",
                          }}
                          onClick={() => downloadBook(storyId)}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="stry-footer">
                {(generateStry || type === "detail" || type === "edit") && (
                  <div style={{ display: "flex", gap: "8px" }}>
                    {checkedData.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            handleChecked(item?.id);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <img src={item?.imageSrc} />
                        </div>
                      );
                    })}
                  </div>
                )}
                {!generateStry && type !== "detail" && type !== "edit" && (
                  <>
                    {!progressBarStatus && <div className="empty-card"></div>}
                  </>
                )}
              </div>
            </>
          )}
          {subscribedMessage && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {subscribedMessage === "Buy" && (
                <>
                  <div>No Subscription found</div>
                  <ComponentButton
                    title="Subscribe"
                    style={{
                      width: "160px",
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
                </>
              )}

              {subscribedMessage === "Upgrade" && (
                <>
                  <div>Upgrade your plan</div>
                  <ComponentButton
                    title="Upgrade"
                    style={{
                      width: "160px",
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
                </>
              )}
            </div>
          )}
        </div>
      </MainContainer>
    </div>
  );
};

export default CreateStories;
