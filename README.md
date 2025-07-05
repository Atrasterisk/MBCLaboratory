📌 Overview
This project is an HTML-CSS website application with a backend API for handling contact forms via email using Nodemailer and SendGrid. It is deployed on Vercel with SSL enabled.

MBCLaboratory/  
├── api/  
│   └── process-form.js     # Backend API for form submission 
├── assets/ #static assets    
│   ├── css/
│   │    └── style.css      # Stylesheet 
│   └── img/
│        ├── DSC_8079.JPG
│        └── logo.png
├── developer.html
├── divisilayanan.html
├── index.html              # Landing page
├── kontak.html
├── package.json            # Project dependencies & scripts  
└── README.md               # This documentation

🛠️ Local Installation
Prerequisites
• Node.js v18+
• npm / yarn
• SendGrid API Key (for email functionality)

Steps
1. Clone the repository

      bash
    git clone https://github.com/Atrasterisk/MBCLaboratory.git
    cd MBCLaboratory

2. Install dependencies

      bash
    npm install
    # or
    yarn install

3. Set up environment variables
Create a .env.local file in the root directory with:

      env
    SENDGRID_API_KEY=your_sendgrid_api_key

4. Run the development server

      bash
    npm run dev
    # or
    yarn dev

Open http://localhost:3000 to view the app.

🚀 Deployment (Vercel)
Automatic Deployment via Git
1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect Next.js and run:

    npm install
    npm run build
    npm start (production mode)

🔒 SSL & HTTPS Configuration
Vercel automatically provides SSL (HTTPS) for all deployments. No extra setup is needed.

📧 Backend (Email API) Configuration
The backend API (process-form.js) uses Nodemailer + SendGrid to send emails.

Required Environment Variables
Variable	        Description	          Example
SENDGRID_API_KEY	API key from SendGrid	SG.xxxxxx.yyyyyy

How It Works
Form Submission → POST request to /api/process-form.

Nodemailer sends the email via SendGrid.

Response → Success/error message in JSON.
