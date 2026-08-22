# 📚 LMS Website App — MERN Stack Learning Management System

A full-stack **Learning Management System (LMS)** built with the **MERN stack** (MongoDB, Express, React, Node.js). The platform supports two roles — **Students** and **Educators** — enabling course creation, video-based learning, progress tracking, ratings, and secure online payments.

---

## ✨ Features

### 👨‍🎓 Student
- Browse and search all published courses
- View detailed course pages (curriculum, chapters, lectures, ratings)
- Preview free lectures before purchasing
- Secure course checkout and payment via **Stripe**
- Watch enrolled course lectures with an embedded **YouTube** player
- Track per-lecture and overall course progress
- Rate and review purchased courses
- View all enrolled courses under "My Enrollments"

### 👩‍🏫 Educator
- Apply to become an educator directly from the app
- Educator dashboard with earnings, total courses, and enrolled students
- Create new courses with a rich-text description editor (**Quill**)
- Organize course content into chapters and lectures
- Upload course thumbnails (stored via **Cloudinary**)
- View and manage all published courses
- View list of students enrolled in each course

### ⚙️ Platform / Backend
- Authentication and user management handled by **Clerk**
- Automatic user sync to MongoDB via **Clerk webhooks**
- Payment processing and confirmation via **Stripe webhooks**
- Role-based route protection (educator-only endpoints)
- RESTful API for users, courses, and educators

---

## 🛠️ Tech Stack

**Frontend (`/client`)**
- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.com/) — authentication & user management
- [Axios](https://axios-http.com/) — API requests
- [Quill](https://quilljs.com/) — rich text editor for course descriptions
- [React YouTube](https://www.npmjs.com/package/react-youtube) — lecture video player
- [React Toastify](https://fkhadra.github.io/react-toastify/) — notifications
- [rc-progress](https://www.npmjs.com/package/rc-progress) — progress bars
- [humanize-duration](https://www.npmjs.com/package/humanize-duration) — readable lecture durations

**Backend (`/server`)**
- [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [Clerk](https://clerk.com/) (`@clerk/express`) — auth middleware & webhooks
- [Stripe](https://stripe.com/) — payments & webhooks
- [Cloudinary](https://cloudinary.com/) — image/media storage
- [Multer](https://www.npmjs.com/package/multer) — file upload handling
- [Svix](https://www.svix.com/) — webhook signature verification

**Package manager:** [pnpm](https://pnpm.io/)
**Deployment:** Configured for [Vercel](https://vercel.com/) (`vercel.json` in both `client` and `server`)

---

## 📁 Project Structure

```
LMS-Website-App-MERN/
├── client/                     # React frontend
│   ├── src/
│   │   ├── assets/             # Images, icons, static data
│   │   ├── components/
│   │   │   ├── student/        # Navbar, Hero, CourseCard, Rating, Footer, etc.
│   │   │   └── educator/       # Sidebar, Navbar, Footer for educator panel
│   │   ├── context/            # Global app context (AddContext)
│   │   ├── pages/
│   │   │   ├── student/        # Home, CoursesList, CourseDetails, Player, MyEnrollments
│   │   │   └── educator/       # Dashboard, AddCourse, MyCourses, StudentsEnrolled
│   │   ├── utils/               # Helper utilities
│   │   └── App.jsx              # Route definitions
│   └── vite.config.js
│
└── server/                     # Express backend
    ├── configs/                 # MongoDB, Cloudinary, Multer setup
    ├── controllers/             # Course, Educator, User, Webhook logic
    ├── middlewares/             # Auth middleware (protectEducator)
    ├── models/                  # User, Course, Purchase, CourseProgress schemas
    ├── routes/                  # /api/user, /api/course, /api/educator
    └── server.js                 # App entry point
```

---

## 🔌 API Overview

| Base Route | Purpose |
|---|---|
| `GET /` | Health check |
| `POST /clerk` | Clerk webhook — syncs user data to MongoDB |
| `POST /stripe` | Stripe webhook — confirms payments |
| `/api/user/*` | Get user data, enrolled courses, purchase a course, update/get course progress, add rating |
| `/api/course/*` | Get all published courses, get course by ID |
| `/api/educator/*` | Become an educator, add a course, get educator's courses, dashboard stats, enrolled students |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/installation)
- A [MongoDB](https://www.mongodb.com/atlas) database (Atlas or local)
- Accounts/API keys for [Clerk](https://clerk.com/), [Stripe](https://stripe.com/), and [Cloudinary](https://cloudinary.com/)

### 1. Clone the repository
```bash
git clone https://github.com/Ayush-verma25/LMS-Website-App-MERN.git
cd LMS-Website-App-MERN
```

### 2. Set up the backend
```bash
cd server
pnpm install
```

Create a `.env` file inside `server/` with:
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CURRENCY=USD

CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

Run the server:
```bash
pnpm run server   # starts with nodemon
# or
pnpm start
```

### 3. Set up the frontend
```bash
cd ../client
pnpm install
```

Create a `.env` file inside `client/` with:
```env
VITE_BACKEND_URL=http://localhost:8000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CURRENCY=$
```

Run the client:
```bash
pnpm run dev
```

The app should now be running locally (Vite's default dev URL, typically `http://localhost:5173`), connected to the backend on port `8000`.

---

## 🌐 Deployment

Both `client` and `server` include a `vercel.json`, so each can be deployed independently as separate Vercel projects. Remember to configure the corresponding environment variables in your Vercel project settings, and set up Clerk and Stripe webhook endpoints to point to your deployed backend URL.

---

## 🤝 Contributing

Contributions are welcome!
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

No license has been specified yet for this project. Consider adding a `LICENSE` file (e.g., MIT) if you'd like others to reuse this code.

---

## 👤 Author

**Ayush Verma**
