# NotaryApp

NotaryApp is a Node.js API project that provides functionality to track candidate statuses created by users. The required API for the assignment is getStatusCount
1. Required API
   ```bash
   http://localhost:5000/api/getStatusCount
2. controller => src\controller.js
    ```bash
    router.post('/getStatusCount')
3. service => src\service.js
    ```bash
   getStatusCount{}

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [API Documentation](#api-documentation)
- [ER Diagram](#er-diagram)

## Overview

NotaryApp is built using Node.js and Express.js with MySQL as the database. It allows users to create candidates and track their statuses. This README provides instructions for setting up the project locally and using the API endpoints.

## Getting Started

### Prerequisites

- Node.js (https://nodejs.org/)
- MySQL database

### Installation

1. Navigate to the project folder:
   ```bash
   cd notary-app
2. Clone the repository:
   ```bash
   git clone https://github.com/aleena999/notaryApp.git

3. Install the required dependencies:
   ```bash
   npm install
4. Configure your MySQL database connection:
    Open db.js file and update the connection details.

### Running the App
1. Start the server:
    ```bash
    nodemon index

This will start the server on port 5000.

### API Documentation
API documentation is provided in the thunder-collection_NotaryApp.json file. It outlines all available endpoints, request formats, and response structures.

### ER Diagram
SQL based Modelling and connecting flow diagram is in ER diagram.mwb file.

