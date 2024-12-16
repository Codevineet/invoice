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
```

## Setup
## Client (Frontend) Setup:

1. **Navigate to the client directory:**
   ```bash
   cd client

2. **Install the required npm packages:**
   ```bash
   npm install 
3. **Start the client:**
   ```bash
   npm run dev

## Server (Backend) Setup:

1. **Navigate to the server directory:**
   ```bash
   cd server

2. **Install the required npm packages:**
   ```bash
   npm install 
3. **Start the client:**
   ```bash
   npm start

## Configuration

**Create a `.env` file in the server directory** with the following contents:

   ```makefile
   SESSION_SECRET=<your-session-secret>
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   ZAPIER_WEBHOOK_URL=<your-zapier-webhook-url>
   CALLBACK_URI=http://localhost:3000/auth/google/callback
   REDIRECT_URI=http://localhost:5173/invoices
```
Replace with the appropriate values for your application.

## Database

The application uses a local JSON file (data/invoices.json) to store invoice data. Ensure the file is populated correctly.

## Endpoints

1. **GET /**: 
   - **Description**: This is the home route, which provides a link for users to log in using Google OAuth.
   
2. **GET /auth/google**: 
   - **Description**: This endpoint handles Google OAuth authentication. Users will be redirected to Google’s OAuth page to log in.
   
3. **GET /invoices**: 
   - **Description**: This endpoint allows users to view their invoices. It returns a list of all invoices associated with the authenticated user.
   
4. **POST /zapier**: 
   - **Description**: This endpoint triggers a Zapier automation. When accessed, it sends the necessary invoice data to Zapier’s Webhooks by Zapier to initiate automated email reminders.
   
5. **GET /logout**: 
   - **Description**: This endpoint logs the user out of the application.
  
## Front-end Interaction

1. **Google OAuth Login**:
   - Users can log in via Google OAuth. This allows for secure authentication and session management.
   
2. **Viewing Overdue Invoices**:
   - Once authenticated, users can view their overdue invoices. These invoices are flagged and displayed in the user interface for quick identification.
   
3. **Automation Trigger**:
   - Overdue invoices are automatically marked for Zapier automation. Users can manually trigger the Zapier automation from the frontend by clicking a "Trigger Automation" button.
   - Clicking the "Trigger Automation" button sends a POST request to the `/zapier/trigger` endpoint.
   - The server processes this request, triggers the Zapier automation, and returns a response indicating whether the process was successful or not.
  
  ## Zapier Integration

1. **Automated Trigger**:
   - Overdue invoices automatically trigger a Zapier automation when flagged. This integration sends an email reminder to the user using Zapier's Webhooks by Zapier.
   - The email includes detailed invoice information such as:
     - Due date
     - Amount
     - Item purchased
     - Seller information
   
2. **Manual Trigger**:
   - Users have the option to manually trigger the Zapier automation from the frontend by clicking a button. This action sends a POST request to the `/zapier/trigger` endpoint on the backend.
   - The server processes this request and sends the necessary data to Zapier to trigger the automation.
   - A response is returned from Zapier indicating whether the process was successful or not.

## How the App is Working:

### User Authentication:
- Users log in using Google OAuth. Their data is securely stored in a session.
- Once authenticated, users can access their account and view overdue invoices.

### Invoice Management:
- The backend is responsible for fetching invoice data from a local JSON file.
- Users can easily identify overdue invoices through the UI, which marks them for quick reference.

### Zapier Integration:
- Overdue invoices automatically trigger a Zapier automation. This automation sends an email reminder using Zapier's Webhooks by Zapier.
- The email includes essential invoice details such as:
  - Due date
  - Amount
  - Item purchased
  - Seller information
  - User's location
- Users have the option to manually trigger the Zapier automation from the frontend by clicking a button. This sends a POST request to `/zapier/trigger`.
- The server processes this request, triggers the Zapier automation, and returns a response indicating whether the process was successful or not.


