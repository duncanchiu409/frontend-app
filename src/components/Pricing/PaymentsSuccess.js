import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { validatePayment } from "../../api-hooks/user";

export default function PaymentsSuccess() {

  const [searchParams] = useSearchParams();
  const [validating, setValidating] = useState(true)
  const [paymentSuccess, setPaymentSuccess] = useState(false)


  const validatePaymentFromBack = async sessionId => {
    await validatePayment(sessionId, (response) => {
      setValidating(false)
      setPaymentSuccess(response.data?.subscription?.id !== undefined)
    })
  }

  useEffect(() => {
    const sessionStatus = searchParams.get('session_status')
    console.log(sessionStatus);
    const sessionId = searchParams.get('session_id')
    console.log(sessionId);
    if (sessionStatus === 'false' || sessionId === undefined) {
      setValidating(false)
      setPaymentSuccess(false)
    } else {
      validatePaymentFromBack(sessionId)
    }
  })

  return (
    <div>
      
      <div class="relative flex flex-col flex-auto min-w-0 overflow-hidden">
        <div class="relative pt-8 pb-12 sm:pt-20 sm:pb-24 px-6 sm:px-16 overflow-hidden" style={{ 'height': '100%' }}>
          <svg
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
          </svg>
          
          {
            paymentSuccess && !validating && (
              <div>
                <div
                  class="mt-1 text-4xl sm:text-4xl font-bold tracking-tight leading-tight text-center"
                >
                  Payment Confirmed
                </div>
                <div >
                  <img
                    src="assets/images/logo/confirm_payment.svg"
                    alt="icon"
                    style={{ 'width': '120px' }}
                  />
                </div>
                <div class="text-secondary-dark" style={{ 'margin-bottom': '2px' }}>
                  Thank you for your payment!
                </div>
                <div class="text-secondary-dark" style={{ 'margin-bottom': '10px' }}>
                  A confirmation email has been sent to the email associated with your
                  account.
                </div>
              </div>
            )
          }

          {
            !paymentSuccess && !validating && (
              <div>
                <div
                  class="mt-1 text-4xl sm:text-4xl font-bold tracking-tight leading-tight text-center"
                >
                  Payment Failed
                </div>
                <div >
                  <img
                    src="assets/images/logo/confirm_payment.svg"
                    alt="icon"
                    style={{ 'width': '120px' }}
                  />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div >
  )
}
