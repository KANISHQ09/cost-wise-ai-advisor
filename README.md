# 🧠 Cost Wise AI Advisor

A smart AI-powered platform that helps users track and manage their AI tool usage, optimize costs, and explore intelligent recommendations — all in one intuitive dashboard.

## 🔍 Overview

**Cost Wise AI Advisor** empowers individuals and teams to:

* Analyze spending patterns on AI tools.
* Visualize usage data and savings.
* Get cost-optimization suggestions through a custom AI agent.
* Access a simple cost calculator.
* Use the dashboard without signing up, or unlock full features by registering.

## ✨ Features

* 📊 **Interactive Dashboard**: Real-time charts showing AI tool usage, cost breakdowns, and trends.
* 🧮 **Cost Calculator**: Easily compute costs based on custom input data.
* 🤖 **AI Assistant**: Prompt-based advisor for suggestions and reports.
* 🔐 **Authentication**: Sign-up/sign-in flow for saving user-specific data.
* 🌐 **Frontend**: Built with modern UI components using React and Tailwind CSS.

## 🚀 Tech Stack

* **Frontend**: React, Tailwind CSS, ShadCN UI
* **Backend**: Node.js, Express
* **Database**: MongoDB
* **AI Integration**: Lyzr Agent (for advisory prompts)
* **Hosting**: Vercel (Frontend), Render (Backend)

## 📸 Demo Preview

![Dashboard](https://github.com/KANISHQ09/cost-wise-ai-advisor/assets/134469703/0e5c3a99-f54e-4290-86cc-d843c21b002b)

Try it live: [Cost Wise AI Advisor (Live)](https://cost-wise-ai.vercel.app/)

## 📁 Folder Structure

```
cost-wise-ai-advisor/
│
├── backend/           # Node.js backend (Express + MongoDB)
├── frontend/          # React frontend with UI and routing
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page routes (Dashboard, Login, etc.)
│   └── utils/         # Utility functions
├── .env               # Environment variables
├── README.md
└── ...
```

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/KANISHQ09/cost-wise-ai-advisor.git
cd cost-wise-ai-advisor
```

### 2. Set up the backend

```bash
cd backend
npm install
# Add .env file with MongoDB URI and API keys
npm start
```

### 3. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

## 🧪 Sample Prompts for AI Advisor

> “Suggest ways to reduce OpenAI API costs.”
> “Summarize my monthly usage and savings.”
> “Is it worth switching to a different AI provider?”

