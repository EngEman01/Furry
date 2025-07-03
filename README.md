# 🐾 Pet Market – Full-Stack Pet Marketplace

**Pet Market** is a modern full-stack web application that allows users in Egypt to buy and sell pets online.  
Built with **Next.js 15**, **PostgreSQL**, and **Prisma ORM**, it offers a performant, responsive, and accessible user experience through a clean, modular structure.

---

## ✨ Features

- 🐶 **Pet Listings** – Browse pets with dynamic filters
- 🚚 **Free Delivery Filter** – Easily find pets eligible for free delivery
- 📰 **Pet Blog** – Educational content on pet care and awareness
- 🎁 **Offers Section** – Highlighted deals and seasonal promotions
- 🧩 **Modular UI** – Reusable and scalable components
- 📱 **Fully Responsive** – Optimized for all screen sizes
- ♿ **Accessible Design** – Follows basic accessibility (a11y) standards
- ⭐ **Get PRO** *(Coming Soon)* – Premium features for professional sellers
- 👤 **User Dashboard** *(Planned)* – Manage your own listings and favorites

---

## 🛠️ Tech Stack


| Layer       | Technologies Used                                              |
|-------------|----------------------------------------------------------------|
| Frontend    | Next.js 15, React 19, Tailwind CSS                             |
| Backend     | API Routes (Next.js), Prisma ORM, PostgreSQL                   |
| Auth & Utils| JSON Web Tokens (JWT), bcryptjs, zod validation                |
| UI & UX     | React Icons, React Toastify                                    |
| Dev Tools   | ESLint, TypeScript, Turbopack                                  |

---

---

## 📁 Project Structure

pet-market/
├── app/
│ ├── shop/
│ ├── blog/
│ ├── free-delivery/
│ ├── offers/
│ ├── about/
│ └── layout.tsx
├── components/
│ ├── ui/
│ └── PetCard.tsx
├── lib/
│ └── prisma.ts
├── prisma/
│ ├── schema.prisma
│ └── seed.ts
└── public/

yaml
Copy
Edit

---

## 🚀 Getting Started

To run this project locally:

```bash
git clone https://github.com/EngEman01/Furry.git
cd Furry
npm install
npx prisma generate
npx prisma db push
npm run dev
Create a .env file in the root directory and add your PostgreSQL connection string:

env
Copy
Edit
DATABASE_URL="your_postgresql_connection_string"
🎯 Project Goals
Build a real-world full-stack application using modern web technologies

Practice clean, modular, and scalable architecture

Implement server-side data fetching with Prisma + PostgreSQL

Create a responsive, accessible, and user-friendly UI

🌱 Future Enhancements
🔐 Authentication and Role-Based Access Control (RBAC)

🛒 Shopping Cart and Checkout (Stripe Integration)

🛠️ Admin Dashboard for content & user management

🌍 Multi-language Support (i18n)

📊 Analytics & User Engagement Tracking

🌐 Live Demo
Coming soon – to be deployed on Vercel

👩‍💻 About the Developer
Eman Mohamed Ragab
Frontend Developer – React / Next.js
📍 Cairo, Egypt
📧 eman.m22omer@gmail.com
🔗 GitHub • LinkedIn

📄 License
This project is open-source and available under the MIT License.