# MBC Laboratory

A Next.js application with email contact form functionality powered by Nodemailer and SendGrid.

## 📌 Features

- Contact form with email submission
- Serverless API endpoints
- Automatic SSL via Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm or yarn
- SendGrid API key

## 📂 Project Structure

```text
MBCLaboratory/
├── api/
│   └── process-form.js     # Form submission endpoint
├── assets/    
│   ├── css/                # CSS module
│   └── img/                # static image files
├── developer.html
├── divisilayanan.html
├── index.html              # Landing page
├── kontak.html
├── package.json            # Project dependencies
└── README.md               # This file
```

## 🛠️ Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Atrasterisk/MBCLaboratory.git
   cd MBCLaboratory

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install

3. Create environment file
   ```bash
   cp .env.example .env.local
   ```
   Then edit .env.local with your SendGrid API key.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev

## 🚀 Deployment

### Automatic Deployment via Git
- Connect your GitHub repository to Vercel.
- Vercel will automatically detect Next.js and run:
  ```bash
  npm install
  npm run build
  npm start (production mode)

### Manual Deployment
#### Build for production

```bash
npm run build
```

#### Deploy to Vercel

- Install Vercel CLI:

```bash
npm install -g vercel
```

- Run:
```bash
vercel
```

Follow the prompts to deploy.

## 🔒 SSL & HTTPS Configuration
Vercel automatically provides SSL (HTTPS) for all deployments. No extra setup is needed.

## 📧 Backend (Email API) Configuration
The backend API (process-form.js) uses Nodemailer + SendGrid to send emails.

### Required Environment Variables
| Variable| Description | Example |
|-------|-----|-----------|
| SENDGRID_API_KEY | API key from SendGrid | SG.xxxxxx.yyyyyy |



   
