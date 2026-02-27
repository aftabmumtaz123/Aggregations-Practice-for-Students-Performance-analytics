# 📊 Student Performance Analytics API

An Express.js + MongoDB API that provides analytics on student performance using **MongoDB Aggregation Pipelines**.  
This project demonstrates how to calculate statistics such as total marks, class averages, top performers, and failed students.

---

## 🚀 Features
- **Top Performers**: Calculates total marks (Math + English + Science) and returns the top 3 students.
- **Class Statistics**: Groups students by class and computes:
  - Total students per class
  - Average marks per subject
- **Overall Class Ranking**: Finds the class with the highest average total marks.
- **Failed Students**: Identifies students who scored below 50 in any subject.

---

## 🛠️ Tech Stack
- **Node.js** (Express framework)
- **MongoDB** (Mongoose ODM)
- **Aggregation Pipelines** for analytics

---

## 📂 Project Structure
Student Performance Analytics API/
│
├── models/
│   └── Student.js        # Mongoose schema for students
├── utils/
│   └── connection.js     # MongoDB connection setup
├── app.js                # Express server + API routes
└── package.json          # Dependencies and scripts

Code

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/aftabmumtaz123/Aggregations-Practice-for-Students-Performance-analytics.git
   cd Aggregations-Practice-for-Students-Performance-analytics

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/aftabmumtaz123/Aggregations-Practice-for-Students-Performance-analytics
   cd Aggregations-Practice-for-Students-Performance-analytics
Install dependencies:

bash
npm install
Configure MongoDB connection in utils/connection.js.

Start the server:

bash
node app.js
The API will run on http://localhost:3000
