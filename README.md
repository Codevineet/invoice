# Invoice Reminder and Follow-up Automation
## Description
This application helps manage overdue invoices and automates the process of sending reminders to users via email. It consists of a backend built with Node.js and Express, and a frontend built with React. The application integrates Google OAuth for authentication and uses Zapier for automated email notifications when invoices are overdue.

## Prerequisites
Before you begin, make sure you have the following installed on your system:
- Node.js (v14.x or later)
- npm (Node Package Manager)

$ tree
invoice2/
├── client/       # Frontend code
│   ├── src/      # React components and views
│   ├── package.json
│   └── README.md
├── server/       # Backend code
│   ├── config/   # Configuration files (e.g., passport setup)
│   ├── controllers/ # Route handlers
│   ├── middleware/ # Middleware (e.g., authentication)
│   ├── routes/   # API routes
│   ├── services/ # Services (e.g., invoice data fetching)
│   ├── data/     # Sample invoice data
│   ├── .env       # Environment variables (e.g., Google OAuth, Zapier webhook URL)
│   ├── package.json
│   ├── README.md # This file
├── .gitignore
└── README.md     # This file
