FinTrack-AI
AI-Powered Personal Finance & Fraud Detection System

👉 Live Demo: Open FinTrack-AI

🚀 Overview

FinTrack-AI is a browser-based fintech application that helps users track transactions, analyze spending behavior, and detect suspicious patterns using AI-driven logic.

The application focuses on simplicity + intelligence — allowing users to manage finances without complex setups while still gaining meaningful financial insights.

Unlike traditional systems, this app uses behavioral analysis and pattern detection to provide smarter financial insights and anomaly detection.

✨ Key Features
💸 Smart Expense Tracking
Add transactions instantly with category-based classification
🧠 AI Insights Engine
Detects spending patterns and provides personalized recommendations
📊 Interactive Dashboard
Visual charts (bar + donut) for real-time financial insights
⚠️ Anomaly Detection
Flags unusual transactions based on behavioral patterns
🎯 Goal Tracking System
Monitor spending vs budget with dynamic progress indicators
📜 Transaction History
Search, filter, and sort all financial records
🌙 Dark Mode Support
Clean UI with theme switching
🧠 How It Works
1. Data Input

Users add transactions manually via a simple interface

2. Processing
Categorization of transactions
Storage (local/browser-based)
3. AI Logic

The system analyzes:

Spending dominance
Category concentration
Budget usage
Outlier transactions
4. Output
Insights
Alerts
Visual analytics
🧪 AI Insight Logic (Core Idea)

The system uses behavioral signals like:

High spending in one category → ⚠️ warning
Overspending budget → 🔴 alert
Unusual transaction → 🚨 anomaly flag

Example logic:

dominance = (category_spending / total_spending) * 100

This allows detection of abnormal patterns without requiring heavy ML infrastructure.

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript
Visualization: Chart.js
State Management: Vanilla JS
Storage: LocalStorage (client-side)
Deployment: Vercel
📂 Project Structure
FinTrack-AI/
│── index.html        # UI structure  
│── app.js            # Core logic & AI engine  
│── styles.css        # Styling  
│── assets/           # Icons & images  
│── README.md         # Documentation  
