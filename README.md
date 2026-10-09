# 🍕 OIBSIP — Oasis Infobyte Internship

**Intern:** Fida Hussain  
**Track:** Web Development & Designing  
**Level:** Level 3 — Full-Stack Pizza Delivery Application  
**Internship Period:** 5 October 2026 – 15 November 2026  
**Organization:** Oasis Infobyte (AICTE Internship Program)

---

## 📌 About This Repository

This repository contains my complete submission for the **AICTE Oasis Infobyte Internship Program (OIBSIP)**.

I have chosen **Level 3** of the **Web Development & Designing** track, which is a single, complex full-stack project requiring knowledge of React.js, Node.js, Express.js, MongoDB, and third-party API integrations.

---

## 🚀 Project: Pizza Delivery Full-Stack Application

A production-grade pizza ordering and inventory management platform with separate **Admin** and **User** roles, real-time order tracking, payment integration, and automated stock notifications.

### ✨ Key Features

#### 👤 User Side
- User registration with email verification
- User login with JWT-based authorization
- Forgot password flow (email reset link)
- Dashboard displaying available pizza varieties
- Custom pizza builder (4-step flow):
  - Step 1: Choose a pizza base (5 options)
  - Step 2: Choose a sauce (5 options)
  - Step 3: Choose a cheese type
  - Step 4: Choose vegetables (multiple select)
- Order summary page before payment
- Razorpay checkout integration (test mode)
- Real-time order status display:
  - Order Received → In Kitchen → Sent to Delivery

#### 🔧 Admin Side
- Separate admin login (not accessible from user registration)
- Inventory dashboard (bases, sauces, cheeses, vegetables)
- Stock automatically decremented after each order
- Manual stock update capability
- Automated email notification when stock falls below threshold
- Order management panel (view & update order status)
- Real-time status sync with user dashboard

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Authentication | JWT (JSON Web Tokens) |
| Password Hashing | bcryptjs |
| Payment Gateway | Razorpay (Test Mode) |
| Email Service | Nodemailer |
| Scheduled Jobs | Node-cron |
| Real-time Communication | Socket.io |
| Styling | CSS3 / Material-UI |

---

## 📁 Folder Structure

OIBSIP/
└── WebDev-L3-PizzaDeliveryApp/
    ├── client/                          # React Frontend
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── user/
    │   │   │   └── admin/
    │   │   ├── context/
    │   │   ├── services/
    │   │   ├── App.jsx
    │   │   └── index.js
    │   └── package.json
    │
    ├── server/                          # Node.js Backend
    │   ├── config/
    │   ├── models/
    │   ├── routes/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── utils/
    │   ├── server.js
    │   └── package.json
    │
    ├── screenshots/
    ├── demo-video-link.txt
    └── README.md

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Razorpay Test Account
- Gmail Account (for Nodemailer)

### 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/OIBSIP.git
cd OIBSIP/WebDev-L3-PizzaDeliveryApp

### 2. Backend Setup

cd server
npm install

Create a `.env` file in the `server` folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

RAZORPAY_KEY_ID=your_razorpay_test_key
RAZORPAY_KEY_SECRET=your_razorpay_test_secret

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

LOW_STOCK_THRESHOLD=20
ADMIN_EMAIL=admin@example.com

Run the backend:

npm run dev

### 3. Frontend Setup

cd ../client
npm install
npm start

The app will run at `http://localhost:3000`

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `RAZORPAY_KEY_ID` | Razorpay test key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay test secret |
| `EMAIL_USER` | Gmail address for sending emails |
| `EMAIL_PASS` | Gmail app password |
| `LOW_STOCK_THRESHOLD` | Stock threshold for alerts |

---

## 🎥 Demo Video

[Watch the Demo Video](your-linkedin-post-link-here)

The video demonstrates:
1. User registration & email verification
2. Login with JWT
3. Custom pizza builder (all 4 steps)
4. Order summary & Razorpay payment
5. Real-time order tracking
6. Admin login & inventory dashboard
7. Auto stock decrement
8. Low-stock email alert
9. Order management & status update
10. Real-time sync on user dashboard

---

## 📸 Screenshots

Screenshots are available in the `/screenshots` folder.

---

## 🧪 Testing

### Test User Credentials
Email: testuser@example.com
Password: Test@1234

### Test Admin Credentials
Email: admin@example.com
Password: Admin@1234

### Razorpay Test Card
Card Number: 4111 1111 1111 1111
Expiry: Any future date
CVV: Any 3 digits

---

## 📋 Task Checklist

### User Side
- [x] User registration with email verification
- [x] User login with JWT
- [x] Forgot password flow
- [x] Dashboard with pizza varieties
- [x] Custom pizza builder (4 steps)
- [x] Order summary page
- [x] Razorpay checkout integration
- [x] Real-time order status

### Admin Side
- [x] Separate admin login
- [x] Inventory dashboard
- [x] Auto stock decrement
- [x] Manual stock update
- [x] Low-stock email alerts
- [x] Order management panel
- [x] Real-time status sync

---

## ⚠️ Security Notes

- Passwords are hashed using **bcryptjs** (never stored in plain text)
- JWT tokens are used for session management
- Environment variables are used for all sensitive data
- Razorpay is in **test mode only** — no real payments processed
- Email uses a **dummy/test account** for demonstration

---

## 📜 License

This project is submitted as part of the **Oasis Infobyte Internship Program (AICTE)**.  
It is intended for educational and evaluation purposes only.

---

## 📬 Contact

**Fida Hussain**  
- LinkedIn: [Your LinkedIn Profile](www.linkedin.com/in/fida-itdeveloper)
- GitHub: [@your-username](https://github.com/FidaHussain3432)
- Email: fh87022@gmail.com

---

## 🙏 Acknowledgements

- **Oasis Infobyte** for the internship opportunity
- **AICTE** for supporting the program
- Open-source community for the amazing tools and libraries

---

⭐ If you find this project helpful, please give it a star!
