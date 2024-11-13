# House Price Predictor

This is a **House Price Predictor** web application that predicts the price of a house based on various input features. It utilizes machine learning models for prediction and presents the results in a user-friendly interface.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Project Overview

The **House Price Predictor** allows users to input various house attributes, such as:
- Overall quality
- Living area
- Basement area
- Garage capacity
- Year built, and more.

Based on these features, the app uses a trained machine learning model to predict the house price. The app has a simple and modern UI built using React, while the backend handles predictions using a trained model (e.g., Linear Regression, Random Forest, etc.).

## Features

- **Real-time Prediction**: Predict house prices instantly based on user inputs.
- **User-friendly Interface**: Input fields are simple to use with dropdowns and number inputs.
- **Toast Notifications**: Displays success or error messages after making predictions.
- **Responsive Design**: Fully responsive web app that works well on both desktop and mobile.

## Technologies Used

- **Frontend**:
  - React
  - Chakra UI (for design and layout)
  - Axios or Fetch API (to communicate with backend)
  
- **Backend**:
  - Flask or Express.js (for serving the machine learning model)
  - Machine Learning Model (e.g., Linear Regression, Random Forest)
  - Python (for data preprocessing and model training)
  

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (for React frontend)
- [Python](https://www.python.org/downloads/) (for backend and model)
- [MongoDB](https://www.mongodb.com/) (if you are using MongoDB)

### Steps for Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ParasNingune/House-Price-Predictor.git
   cd House-Price-Predictor/frontend

2. Install dependencies
   
   ```bash
   npm install

4. Start the React app:
   
   ```bash
   npm start

### Steps for Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd House-Price-Predictor/backend

2. Install dependencies:

   ```bash
   pip install -r requirements.txt

3. Run the backend server:

   ```bash
   python app.py
