# FinSight

**AI-Powered Personal Finance Manager**

---

## Demo

**Live Demo:** [https://finsight-demo.vercel.app](https://finsight-demo.vercel.app)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Environment Variables](#environment-variables)
- [Core Modules & Workflows](#core-modules--workflows)
- [AI & Automation](#ai--automation)
- [Testing](#testing)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [My Role & Learning](#my-role--learning)
- [Why This Project? (Motivation & Design Decisions)](#why-this-project-motivation--design-decisions)
- [Setup & Installation](#setup--installation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

**FinSight** is a modern, full-stack personal finance management platform. It helps users track accounts, manage transactions, set budgets, and receive actionable AI-powered insights. The platform is built for extensibility, security, and performance, leveraging the latest in web and AI technologies.

---

## Features

### Account & Transaction Management
- **Multi-account support:** Track balances across multiple bank accounts.
- **Transaction CRUD:** Add, edit, delete, and bulk-manage transactions.
- **Recurring transactions:** Automate regular expenses/incomes.
- **Category tagging:** Organize transactions by customizable categories.
- **Bulk operations:** Select and delete or categorize multiple transactions at once.

### Budgeting & Alerts
- **Monthly budgets:** Set and monitor spending limits per category.
- **Budget alerts:** Automated notifications when nearing or exceeding budgets.

### Analytics & Reporting
- **Interactive dashboards:** Visualize spending, income, and trends.
- **Monthly reports:** Receive AI-generated summaries and insights via email.
- **Export:** Download data as CSV or PDF.

### AI & Automation
- **AI insights:** Get actionable advice based on your financial behavior.
- **Receipt scanning:** (Optional) Extract transaction data from uploaded images.
- **Anomaly detection:** Identify unusual spending patterns.

### Security & Compliance
- **Authentication:** Secure sign-in/sign-up with Clerk.
- **Role-based access:** User-level data isolation.
- **Audit logs:** Track critical actions for compliance.

---

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React Server Components, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API routes, Prisma ORM, PostgreSQL (Supabase)
- **Authentication:** Clerk
- **Background Jobs:** Inngest
- **AI/ML:** Google Gemini (Generative AI), OpenAI (optional)
- **Email:** Resend
- **Security:** Arcjet (rate limiting, API protection)
- **Testing:** Jest, React Testing Library, Cypress

---

## Architecture

- **Monorepo:** All code (frontend, backend, jobs, emails) in a single repository.
- **Serverless-first:** Optimized for Vercel deployment, but can run anywhere.
- **Background jobs:** Scheduled and event-driven tasks (e.g., recurring transactions, report generation) via Inngest.
- **AI integration:** Prompts and data sent to Gemini/OpenAI for insights.
- **Database:** PostgreSQL with Prisma for type-safe access.

---

## Project Structure

```
finsight/
├── app/                    # Next.js app directory (routes, layouts, pages)
│   ├── (auth)/             # Authentication routes (sign-in, sign-up)
│   ├── (main)/             # Main app routes (dashboard, account, transaction, etc.)
│   ├── api/                # API endpoints (RESTful, server actions)
│   └── layout.jsx          # Root layout
├── components/             # Reusable UI components (buttons, forms, charts)
├── lib/                    # Utilities, database, inngest jobs, constants
│   ├── inngest/            # Background job definitions (recurring, reports, alerts)
│   ├── prisma.js           # Prisma client
│   └── utils.js            # Helper functions
├── actions/                # Server actions (Next.js server functions)
├── emails/                 # Email templates (React components)
├── prisma/                 # Prisma schema and migrations
├── public/                 # Static assets
├── screenshots/            # App screenshots for README
├── tests/                  # Unit and integration tests
├── .env.example            # Example environment variables
└── README.md               # Project documentation
```

---

## Screenshots

<!-- Make sure these files exist in the screenshots/ folder and the names match exactly (case-sensitive) -->

**Landing Page**  
![Landing Page](./screenshots/LandingPage.png)

**Dashboard**  
![Dashboard](./screenshots/DashboardPage.png)

**Charts & Analytics**  
![Charts](./screenshots/Charts.png)

**Receipt Scanner**  
![Receipt Scanner](./screenshots/CreateTransaction.png)

**Email Alert**  
![Email Alert](./screenshots/EmailAlerts.png)

---

## Environment Variables

Example `.env.local`:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/finsight

# AI/ML
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key

# Email
RESEND_API_KEY=your_resend_api_key

# Security
ARCJET_KEY=your_arcjet_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_CURRENCY_SYMBOL=₹
```

---

## Core Modules & Workflows

### 1. Account & Transaction Management

- **Accounts**: Users can create, update, and delete accounts. Each account has a type, balance, and is linked to a user.
- **Transactions**: CRUD operations with support for recurring entries. Transactions update account balances atomically using Prisma transactions.
- **Bulk Actions**: Select multiple transactions for deletion or categorization.

### 2. Recurring Transactions

- **Inngest jobs** process scheduled recurring transactions, create new entries, and update next due dates.
- **Throttling** ensures no user can trigger too many jobs at once.

### 3. Budgeting & Alerts

- **Budgets**: Users set monthly limits per category.
- **Alerts**: Inngest jobs check budgets every 6 hours and send notifications if limits are exceeded.

### 4. Analytics & Reporting

- **Dashboard**: Visualizes income, expenses, and category breakdowns using Chart.js.
- **Monthly Reports**: On the first of each month, Inngest generates reports and emails them to users.
- **AI Insights**: Financial data is summarized and sent to Gemini/OpenAI for actionable advice.

### 5. Security

- **Authentication**: All routes (except auth) are protected by Clerk.
- **Rate Limiting**: Arcjet protects API endpoints.
- **Data Isolation**: All queries are user-scoped.

---

## AI & Automation

- **Prompt Engineering**: Financial data is formatted and sent to Gemini/OpenAI for insights.
- **Receipt Scanning**: (If enabled) Images are processed and parsed for transaction data.
- **Automated Emails**: Reports and alerts are sent via Resend using React email templates.

---

## Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run end-to-end tests (Cypress)
npm run test:e2e
```

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel deploy --prod
```

### Docker

```bash
docker build -t finsight:latest .
docker run -p 3000:3000 --env-file .env.local finsight:latest
```

---

## API Endpoints

- `/api/accounts` - CRUD for accounts
- `/api/transactions` - CRUD for transactions
- `/api/budgets` - Budget management
- `/api/analytics` - Data for dashboards
- `/api/reports` - Generate and fetch reports

All endpoints require authentication and are rate-limited.

---

## My Role & Learning

As the sole developer and architect of **FinSight**, I was responsible for the entire product lifecycle—from ideation and design to implementation, testing, and deployment.  
Key highlights of my contribution:
- **System Design:** Architected a scalable, modular monorepo with clear separation of concerns.
- **Full-Stack Development:** Built both frontend (Next.js, React, Tailwind) and backend (API, Prisma, PostgreSQL) modules.
- **AI Integration:** Engineered prompt flows and data pipelines for AI-powered insights using Gemini.
- **DevOps:** Automated deployments with Vercel, and managed environment configuration.
- **Testing & Quality:** Established a robust testing pipeline with unit, integration, and E2E tests.
- **Security:** Implemented authentication, rate limiting, and user data isolation.
- **Learning:** Deepened my expertise in serverless architectures, prompt engineering, and modern React patterns.  
This project challenged me to think holistically about user experience, scalability, and maintainability.

---

## Why This Project? (Motivation & Design Decisions)

**Motivation:**  
Personal finance is a universal challenge, and most tools are either too simplistic or too complex. I wanted to build a platform that combines usability, intelligence, and extensibility empowering users to make smarter financial decisions with minimal effort.

**Design Decisions:**  
- **AI-First Approach:** Integrated AI from the ground up for insights, not just as an add-on.
- **Serverless & Modular:** Chose Next.js App Router and serverless functions for scalability and maintainability.
- **User-Centric UX:** Prioritized accessibility, responsive design, and actionable dashboards.
- **Security by Default:** All sensitive operations are authenticated and rate-limited.
- **Extensibility:** Modular codebase allows for easy addition of new features (e.g., investment tracking, multi-currency support).
- **Automation:** Automated recurring tasks and reporting to reduce user friction.
- **Modern Best Practices:** Adopted latest patterns in React, API design, and cloud deployment.

---

## Setup & Installation

### Prerequisites

- Node.js 18+
- npm 9+
- PostgreSQL database (local or Supabase)
- Clerk, Gemini/OpenAI, Resend, Arcjet accounts for API keys

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/finsight.git
cd finsight

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# 4. Set up the database
npx prisma generate
npx prisma db push

# 5. Start the development server
npm run dev
```

---

## Contributing

1. Fork the repo and create your branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m 'Add some feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request

Please write tests for new features and follow the existing code style.

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.dev/)
- [Inngest](https://www.inngest.com/)
- [Google Gemini](https://deepmind.google/technologies/gemini/)
- [Resend](https://resend.com/)
- [Arcjet](https://arcjet.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/)
