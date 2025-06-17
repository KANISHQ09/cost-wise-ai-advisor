# 💰 Cost Wise AI Advisor

A modern AI-powered cost management tool that helps users analyze AI tool spending, optimize expenses, and receive actionable insights — all with a clean and fast UI.

## 🛠 Tech Stack

* ⚡ **Vite** – Next-gen frontend tooling
* ⚛️ **React** – Component-based UI
* 💨 **Tailwind CSS** – Utility-first styling
* 🧩 **ShadCN/UI** – Accessible UI components
* 🔐 **Supabase** – Auth and database
* 📝 **TypeScript** – Type-safe development

---

## 🔍 Features

* 🔐 **User Auth (Supabase)** – Login/signup with session management.
* 📈 **Dashboard** – Cost tracking and usage visualization.
* 🤖 **AI Cost Advisor** – Prompt-based suggestions via integrated AI agent.
* 📊 **Cost Calculator** – Simulate and plan your AI tool usage.
* ⚙️ **Vite + TypeScript** – Fast builds and DX-friendly environment.

---

## 🧪 Local Development

### 1. Clone the repo

```bash
git clone https://github.com/KANISHQ09/cost-wise-ai-advisor.git
cd cost-wise-ai-advisor
```

### 2. Install dependencies

```bash
bun install
```

> If you don't have Bun: [https://bun.sh/docs/installation](https://bun.sh/docs/installation)
> Alternatively, use `npm install` if you prefer Node.

### 3. Add your Supabase environment variables

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Start dev server

```bash
bun run dev
# or
npm run dev
```

---

## 📁 Folder Structure

```
.
├── public/              # Static files
├── src/
│   ├── components/      # UI Components (ShadCN)
│   ├── lib/             # Supabase client config
│   ├── pages/           # Main routes and views
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utility functions
├── supabase/            # Supabase schema and config
├── tailwind.config.ts   # Tailwind setup
├── vite.config.ts       # Vite config
└── tsconfig.json        # TypeScript config
```

---

## 📦 Deployment

The project can be easily deployed using:

* **Frontend**: Vercel, Netlify, Cloudflare Pages
* **Backend/Auth**: Supabase (hosted)

Ensure the correct environment variables are set on your hosting platform.

---

## 🚧 Roadmap

* [ ] Billing summary exports (PDF/CSV)
* [ ] Real-time usage tracking
* [ ] Cost-saving goal tracker
* [ ] Dark mode toggle

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

