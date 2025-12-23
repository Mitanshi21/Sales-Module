# Sales Management System

A full-stack **Sales Management System** developed using **React JS**, **Node JS**, and **MySQL**.  
This application allows users to create sales entries, manage products with serial numbers, calculate totals automatically, and store transaction data securely in a database.

---

## 🚀 Features

- Create and manage **Sales Invoices**
- Select **Customer Name**
- Add multiple products dynamically
- Track **Product Price, Quantity, Serial Number & Expiry Date**
- Automatic **Row-wise & Total Amount Calculation**
- Clean and responsive UI
- RESTful API integration
- Secure database storage

---

## 🛠 Tech Stack

### Frontend
- React JS
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Node JS
- Express JS

### Database
- MySQL

---

## 📂 Project Structure
project-root/
│
├── frontend/ # React JS frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/ # Node JS backend
│ ├── routes/
│ ├── controllers/
│ ├── database/
│ ├── server.js
│ └── package.json
│
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/sales-management-system.git
cd sales-management-system

cd backend
npm install

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=sales_db
PORT=5000

npm start

cd frontend
npm install
npm start

http://localhost:3000

🗄 Database Tables (Example)

customers
products
serials
sales_master
sales_details

📸 UI Preview

The system includes:
Sales header with Date, Doc ID & Customer
Product listing table
Add Row functionality
Total amount calculation
Submit & Cancel actions

🔐 Validation & Logic

Prevents empty fields
Calculates amount = price × quantity
Calculates total amount dynamically
Handles multiple product entries per sale

👨‍💻 Developed By

Mitanshi Lakdawala
Full Stack Web Developer
React | Node | MySQL

