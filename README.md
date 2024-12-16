# Invoice Reminder and Follow-up Automation

## Description
This application automates the process of managing overdue invoices and sending reminder notifications to users via email. It integrates a Node.js backend with Express for API handling and a React frontend for user interaction. Authentication is handled using Google OAuth, and the application leverages Zapier for automated email notifications when invoices are overdue.

## Prerequisites
Before you begin, ensure you have the following software installed on your machine:

- **Node.js** (v14.x or later)
- **npm** (Node Package Manager)

## Directory Structure
```plaintext
invoice/
├── client/       # Frontend code
│   ├── src/      # React components and views
│   ├── package.json
│   └── README.md
├── server/       # Backend code
│   ├── config/  
│   ├── controllers/
│   ├── middleware/
│   ├── routes/   # API routes
│   ├── services/ 
│   ├── data/     # Sample invoice data
│   ├── .env       
│   ├── package.json
│   ├── README.md 
├── .gitignore
└── README.md
