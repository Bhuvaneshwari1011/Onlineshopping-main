
import React, { useEffect } from "react";

const GooglePayButtoon = ({ totalPrice, currencyCode }) => {
  useEffect(() => {
    const loadGooglePay = () => {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: "TEST",
      });

      const paymentDataRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "your-merchant-id",
          merchantName: "Your Merchant Name",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPrice: totalPrice,
          currencyCode: currencyCode,
          countryCode: "US",
        },
      };

      paymentsClient.isReadyToPay(paymentDataRequest).then((response) => {
        if (response.result) {
          const button = paymentsClient.createButton({
            onClick: () => onGooglePayButtonClick(paymentsClient, paymentDataRequest),
          });
          document.getElementById("google-pay-button").appendChild(button);
        }
      });
    };

    loadGooglePay();
  }, [totalPrice, currencyCode]);

  const onGooglePayButtonClick = async (paymentsClient, paymentDataRequest) => {
    try {
      const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest);
      console.log("Payment successful:", paymentData);
    } catch (err) {
      console.error("Payment failed:", err);
    }
  };

  return <div id="google-pay-button"></div>;
};

export default GooglePayButtoon;
