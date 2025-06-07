# FinSight - AI-Powered Financial Management Platform


## Overview

FinSight is a sophisticated financial management platform built with Next.js 14, leveraging AI for intelligent transaction processing and financial insights. The platform offers comprehensive account management, real-time transaction tracking, and automated budget monitoring.

## 🚀 Key Features

- **Smart Account Management**
  - Multi-account support
  - Real-time balance tracking
  - Account type categorization

- **AI-Powered Features**
  - Receipt scanning and analysis
  - Monthly financial insights
  - Intelligent categorization

- **Transaction Management**
  - Bulk operations support
  - Recurring transactions
  - Real-time filtering and sorting

- **Analytics & Reporting**
  - Interactive charts
  - Monthly budget tracking
  - Automated report generation

## 🛠️ Technical Stack

### Frontend
- Next.js 15 (App Router)
- React Server Components
- Tailwind CSS
- Shadcn/ui Components

### Backend & Services
- PostgreSQL (Supabase)
- Prisma ORM
- Clerk Authentication
- Inngest (Cron Jobs)
- Arcjet (Rate Limiting)

### AI & Analytics
- OpenAI Integration
- Chart.js
- Custom Analytics Engine

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/finsight.git

# Navigate to project directory
cd finsight

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Start development server
npm run dev
```

## 🔧 Environment Setup

Required environment variables:
```env
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=
DIRECT_URL=

# Services
ARCJET_KEY=
OPENAI_API_KEY=
RESEND_API_KEY=
```

## 🏗️ Project Structure

```
finsight/
├── app/
│   ├── (auth)/          # Authentication routes
│   ├── (main)/          # Main application routes
│   ├── api/             # API endpoints
│   └── lib/             # Shared utilities
├── components/          # React components
├── actions/            # Server actions
├── prisma/            # Database schema
└── inngest/           # Cron jobs
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```


## 🚀 Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

