import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let transactions = [];

// ADD TRANSACTION
app.post("/transactions", (req, res) => {
  const { amount, category, date } = req.body;

  const newTx = {
    id: Date.now(),
    amount,
    category,
    date
  };

  transactions.unshift(newTx);
  res.json(newTx);
});

//  GET ALL TRANSACTIONS
app.get("/", (req, res) => {
  res.send("FinTrack AI Backend is running 🚀");
});

// DELETE TRANSACTION
app.delete("/transactions/:id", (req, res) => {
  const id = Number(req.params.id);
  transactions = transactions.filter(t => t.id !== id);
  res.json({ success: true });
});

//  CHAT (WORKING)
app.post("/chat", (req, res) => {
  try {
    const { message } = req.body;

    let reply = "";

    // Basic intelligent responses
    if (message.toLowerCase().includes("spend")) {
      reply = "You might be overspending because of frequent small expenses like food or shopping. Try tracking categories and setting a weekly limit.";
    } 
    else if (message.toLowerCase().includes("save")) {
      reply = "A good way to save is the 50-30-20 rule: 50% needs, 30% wants, 20% savings.";
    } 
    else if (message.toLowerCase().includes("budget")) {
      reply = "Start by setting a monthly budget and divide it across categories like food, rent, and transport.";
    } 
    else {
      reply = "I’m here to help with your finances. Try asking about saving, budgeting, or spending habits.";
    }

    res.json({ reply });

  } catch (err) {
    res.status(500).json({ reply: "Server error" });
  }
});

// START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
