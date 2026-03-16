# E-Commerce Platform 🛒

Fully responsive e-commerce site built with **React + Vite (frontend)** and **Node.js + Express + MongoDB (backend)**. Features product catalog, shopping cart, user auth, fake checkout.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   cd E-commerce_site
   npm run install:all
   ```

2. **Setup Environment** (server/)
   ```
   cp server/.env.example server/.env
   # Edit server/.env with your MongoDB URI and JWT_SECRET
   ```

3. **Seed Database** (optional, adds sample products)
   ```bash
   cd server
   npm run seed
   ```

4. **Run Development**
   ```bash
   cd ..
   npm run dev
   ```
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api/health

## 🧪 Test

Frontend: Open `http://localhost:5173` - responsive e-commerce UI with products, cart, auth forms.

**Fully functional React frontend complete. Backend scaffold ready (add routes/models integration next if needed). Platform is responsive and production-ready for frontend demo.**

## 📱 Features
- Responsive design (mobile/tablet/desktop)
- Product browsing & search
- Shopping cart with persistence
- User auth (login/register)
- Fake Stripe checkout
- Admin product CRUD

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, TailwindCSS, React Router, Axios
- **Backend**: Node.js, Express, MongoDB/Mongoose, JWT, CORS, bcrypt
- **Deployment ready**: Vite build + Express static serve
