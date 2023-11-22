import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { validatePayment } from "../../api-hooks/user";
import MainContainer from "../../sub-components/MainContainer";

import confirmPaymentIcon from "../../assets/svg-icons/confirm_payment.svg";
import ComponentButton from "../../atoms/ComponentButton";
import { SUBSCRIPTION_URL } from "../../routes";

export default function PaymentsSuccess() {
  const [searchParams] = useSearchParams();
  const [validating, setValidating] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const navigate = useNavigate();

  const validatePaymentFromBack = async (sessionId) => {
    await validatePayment(sessionId, (response) => {
      setValidating(false);
      setPaymentSuccess(response.data?.subscription?.id !== undefined);
    });
  };

  useEffect(() => {
    const sessionStatus = searchParams.get("session_status");
    console.log(sessionStatus);
    const sessionId = searchParams.get("session_id");
    console.log(sessionId);
    if (sessionStatus === "false" || sessionId === undefined) {
      setValidating(false);
      setPaymentSuccess(false);
    } else {
      validatePaymentFromBack(sessionId);
    }
  });

  return (
    <MainContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          {/* <svg
              class="-z-1 absolute inset-0"
              viewBox="0 0 960 540"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMax slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                class="opacity-40 text-gray-200 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                stroke-width="100"
              >
                <circle r="234" cx="196" cy="23"></circle>
                <circle r="234" cx="790" cy="491"></circle>
              </g>
            </svg> */}

          {paymentSuccess && !validating && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  marginBottom: "20px",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Payment Confirmed
              </div>
              <div>
                <img
                  src={confirmPaymentIcon}
                  alt="icon"
                  style={{ width: "120px" }}
                />
              </div>
              <div
                style={{
                  "margin-bottom": "2px",
                  fontSize: "14px",
                  marginTop: "20px",
                }}
              >
                Thank you for your payment!
              </div>
              <div style={{ "margin-bottom": "10px", fontSize: "14px" }}>
                A confirmation email has been sent to the email associated with
                your account.
              </div>

              <ComponentButton
                title="Go to Subscription"
                style={{
                  width: "200px",
                  fontSize: "16px",
                  fontWeight: "700",
                  height: "50px",
                  marginTop: "20px",
                  backgroundColor: "#EB1551",
                }}
                onClick={() => {
                  navigate(SUBSCRIPTION_URL);
                }}
              />
            </div>
          )}

          {!paymentSuccess && !validating && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  marginBottom: "20px",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Payment Failed
              </div>
              <div>
                <img
                  src={confirmPaymentIcon}
                  alt="icon"
                  style={{ width: "120px" }}
                />
              </div>
              <ComponentButton
                title="Go to Pricing"
                style={{
                  width: "200px",
                  fontSize: "16px",
                  fontWeight: "700",
                  height: "50px",
                  marginTop: "20px",
                  backgroundColor: "#EB1551",
                }}
                onClick={() => {
                  navigate(SUBSCRIPTION_URL);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </MainContainer>
  );
}
