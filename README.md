# Calculator-App

A simple calculator web application built using Node.js, MongoDB, and React. This calculator allows users to perform basic arithmetic operations and displays the result. Additionally, it can save and retrieve calculation history.

<img width="150" alt="image" src="https://github.com/ChiomaSarah/Calculator-App/assets/78868674/758e864f-2d93-467b-84bb-044a17ccf6a8">

## Table of Contents

- Features
- Prerequisites
- Installation
- Usage
- API Endpoints
- Contributing
- License

  ## Features

- Perform basic arithmetic operations (addition, subtraction, multiplication, and division).
- Display calculation results.
- Save and retrieve calculation history (not implemented in this example).
- Error handling for invalid expressions and API requests.
- Basic styling for a clean user interface.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js is installed on your local machine.
- MongoDB is installed and running (for persisting the history).
- Basic knowledge of Node.js, React, and MongoDB.

## Installation

Clone the repository:

```bash
git clone https://github.com/ChiomaSarah/Calculator-App.git
```

Navigate to the project directory:

```bash
cd calculator-app
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

## Usage

Start the server:

```bash
cd backend
npm start
```

The server should now be running on http://localhost:9000.

Start the React app:

```bash
cd frontend
npm start
```

## API Endpoints

The server provides the following API endpoints:

- POST /calculate: Calculate arithmetic expressions.

Sample Request: { "arithmeticFunction": "2 + 2" }

Sample Response: { "result": 4 }

- GET /history : Retrieve calculation history.

Response: An array of arithmetic operations.

## Contributing

Feel free to contribute to this project. You can fork the repository, make changes, and create a pull request. Please follow best practices and maintain code quality. If you encounter any issues or have ideas for improvements, open an issue on the project's GitHub repository.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
