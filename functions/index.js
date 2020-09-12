const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  'sk_test_51HPvTpGbLJvrUfHGFre8c64GEObDvl7kuACX8YhjECWIPKU0HKDTxhAlXNM5AL6g4UvAh3g3Kx3FHZT66Ag15jns00rVaec80A');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    payment_method_types: ['card'],
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api