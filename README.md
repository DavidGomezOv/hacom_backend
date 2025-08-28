# Hacom Backend


## 📝 Description

Backend API for the Hacom vehicle tracking application, deployed on Railway.

🚀 **Checkout the Frontend app here:** [Hacom Frontend App](https://github.com/DavidGomezOv/hacom_frontend_app)



---

## 📦 Project Structure

```
hacom_backend/
├── .env.example
├── .gitignore
├── package.json
└── src/
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── places.controller.js
    │   └── vehicles.controller.js
    ├── db.js
    ├── middlewares/
    │   └── auth.middleware.js
    ├── routes/
    │   ├── auth.routes.js
    │   ├── places.routes.js
    │   └── vehicles.routes.js
    └── server.js

```

---

## 🛠 Requirements

* Node.js >= 18.x
* npm >= 8.x

---

## 🚀 Installation

**1. Clone the repository**

```bash
git clone https://github.com/DavidGomezOv/hacom_backend.git
cd hacom_backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

```bash
cp .env.example .env
```

Edit `.env` with your settings (e.g., database connection).

---

## 🏃‍♂️ Running the app locally

```bash
npm start
```

---

## ✅ Tests & Linting

```bash
npm test
npm run lint
npm run format
```

---
