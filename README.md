
# MonkeyType Clone with Typing Insights

A full-stack MERN application that allows users to take a timed typing test, tracks their performance (WPM, accuracy, errors), stores session data in MongoDB, and provides advanced analysis including error patterns and psychological insights.


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Bonus Features](#bonus-features)
- [License](#license)
## Overview
This project is a MonkeyType-inspired typing test application built using the MERN stack. It allows users to sign up, log in, and take a typing test session (15 or 30 seconds). After the session, performance metrics are calculated and stored, and additional analysis is provided for error patterns and psychological insights.
## Features

- **User Authentication**: Sign up, log in, and secure API routes with JWT.
- **Typing Test**: Timed (15s/30s) typing session on a long paragraph.
- **Performance Metrics**: Calculation of Words Per Minute (WPM), accuracy, and total errors.
- **Data Storage**: Saving session data and analysis to MongoDB.
- **Error & Pattern Analysis**: Aggregation to detect error-prone words and pauses.
- **Psychological Insights**: Metrics such as impulsivity score and cognitive load.
- **Data Visualization**: Charts (using Chart.js) for error frequency and performance trends.


## Tech Stack

- **Frontend**: React.js, react-router-dom, Chart.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **HTTP Client**: Axios


## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or a MongoDB Atlas account
### Backend Setup

- Navigate to the backend directory:

   ```bash
   cd backend
   ```
- Install dependencies:

    ```bash
    npm Install
    ```
- Start the backend server:

    ```bash
    npm start
    ```
    The backend should be running at http://localhost:5000
### Frontend Setup
- Navigate to the frontend directory:

   ```bash
   cd frontend
   ```
- Install dependencies:

    ```bash
    npm Install
    ```
- Start the React development server:

    ```bash
    npm start
    ```
    The frontend should open in your browser at http://localhost:3000.

    
## Usage

- Authentication:

    -   Open the login page.

    - Use the navigation link to go to the signup page if you don't have an account.

    -   Sign up and then log in.

    - JWT token is stored in localStorage upon login.

- Typing Test:

    - Once logged in, navigate to the typing test page.

    - Choose a session duration (15 or 30 seconds) and start typing.

    - Performance metrics (WPM, accuracy, error counts) are calculated and saved.

- Analysis:

    - Advanced analysis is available to review error patterns and psychological insights.

    - Data visualizations (charts) display error frequency and additional metrics.
## Testing

- API Testing
    -   Use Postman or a similar tool to test API endpoints:

    - Signup: POST http://localhost:5000/api/auth/signup

    - Login: POST http://localhost:5000/api/auth/login

    - Session Data: POST http://localhost:5000/api/sessions (requires JWT)

    - Aggregated Analysis: GET http://localhost:5000/api/sessions/aggregate/durations (requires JWT)

- Frontend Testing
    - Run your React app locally and navigate through the authentication flow and typing test.

    - Use browser developer tools to verify network requests and console logs for errors.

- Deployment
    - Backend Deployment
        - Deploy the backend on Heroku, Render, or your preferred hosting provider.

        - Ensure environment variables (MongoDB URI, JWT_SECRET) are configured in the production environment.

    - Frontend Deployment
        - Deploy the React app on Vercel, Netlify, or a similar platform.

        - Update API endpoints to point to the deployed backend URL.

        - After deployment, update the repository with the live URLs in the README.

# Bonus Features
## Error & Pattern Analysis: 
    Extended endpoint /api/sessions/analysis/:sessionId for analyzing error frequency and typing pauses.

## Psychological Insights: 
    Metrics like impulsivity score and cognitive load are calculated from session data.

## Data Visualization: 
    Implemented with Chart.js to display error frequency and other performance trends.





## License

This project is open source
