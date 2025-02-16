const express = require("express");
const axios = require("axios");
const verifyToken = require("../middleware/authMiddleware");

require("dotenv").config();

const router = express.Router();

// M-Pesa API Credentials
const shortCode = process.env.MPESA_SHORTCODE || "174379";
const passKey = process.env.MPESA_PASSKEY;
const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
const callbackUrl = process.env.CALLBACK_URL || "https://yourwebsite.com/mpesa/callback";

// Generate Timestamp
const getTimestamp = () => {
  const date = new Date();
  return `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}${("0" + date.getHours()).slice(-2)}${("0" + date.getMinutes()).slice(-2)}${("0" + date.getSeconds()).slice(-2)}`;
};

// Generate Access Token
const getMpesaAccessToken = async () => {
  try {
    const keySecret = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
    const response = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      headers: { Authorization: `Basic ${keySecret}` },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("❌ M-Pesa Token Error:", error.response?.data || error.message);
    return null;
  }
};

// STK Push Payment
const initiatePayment = async (rawPhone, amount) => {
  try {
    const accessToken = await getMpesaAccessToken();
    if (!accessToken) throw new Error("Failed to obtain M-Pesa access token.");

    const timeStamp = getTimestamp();
    const password = Buffer.from(`${shortCode}${passKey}${timeStamp}`).toString("base64");
    const phone = rawPhone.startsWith("254") ? rawPhone : `254${rawPhone.substring(1)}`;

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timeStamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: shortCode,
        PhoneNumber: phone,
        CallBackURL: callbackUrl,
        AccountReference: "Udgoon Hub",
        TransactionDesc: "Udgoon Hub Payment",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("✅ Payment Initiated Successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Payment Error:", error.response?.data || error.message);
    return { error: "Payment initiation failed" };
  }
};

// Protected Payment Route
router.post("/pay", verifyToken, async (req, res) => { 

  const { phoneNumber, totalPrice } = req.body;

  if (!phoneNumber || !totalPrice) {
    return res.status(400).json({ message: "Phone number and total price are required." });
  }

  console.log(`Processing payment for: ${phoneNumber} Amount: ${totalPrice}`);

  const paymentResponse = await initiatePayment(phoneNumber, totalPrice);

  if (paymentResponse.error) {
    return res.status(500).json({ message: "Payment initiation failed" });
  }

  res.json({ message: "Payment initiated successfully.", data: paymentResponse });
});

// M-Pesa Callback
router.post("/callback", (req, res) => {
  console.log("✅ M-Pesa Callback Data Received:", req.body);

  const response = req.body.Body?.stkCallback;
  if (!response || response.ResultCode !== 0) {
    console.log("❌ Payment Failed:", response?.ResultDesc || "Unknown error");
    return res.status(400).send("Payment failed.");
  }

  console.log("✅ Payment Successful:", response);
  res.send("Payment confirmed.");
});

module.exports = router;
