# 🐾 Pet Market – Full-Stack Pet Marketplace

**Pet Market** is a full-stack web application for buying and selling pets in Egypt.  
Built with **Next.js 14**, **PostgreSQL**, and **Prisma ORM**, it delivers a fast, accessible, and responsive experience with a clean modular structure.

---

## 🧩 Features

- 🛍️ **Pet Listings** – Browse pets with dynamic filtering
- 🚚 **Free Delivery** – View only pets eligible for free delivery
- 📰 **Blog** – Articles on pet care & education
- 🎁 **Offers** – Highlighted deals and promotions
- 🧱 **Modular UI** – Reusable components across the site
- 📱 **Fully Responsive** – Optimized for all devices
- ♿ **Accessible Design** – Follows basic a11y principles
- ⭐ **Get PRO** *(Coming Soon)* – Premium features for sellers
- 👤 **Dashboard** *(Planned)* – User area to manage listings

---

## 🛠️ Tech Stack

| Layer       | Tools Used                                  |
|-------------|---------------------------------------------|
| Frontend    | Next.js 14, React, Tailwind CSS             |
| Backend     | PostgreSQL, Prisma ORM, API Routes          |
| Utilities   | Git, GitHub, TypeScript                     |
| Dev Tools   | ESLint, Prettier                            |

---

## 📂 Folder Structure

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

```bash
git clone https://github.com/EngEman01/Furry.git
cd Furry
npm install
npx prisma generate
npx prisma db push
npm run dev
🔑 Create a .env file with:


🎯 Project Objectives
Build a real-world full-stack project using modern tools

Practice modular and scalable code organization

Apply data fetching with Prisma + PostgreSQL

Create a clean, responsive, and accessible UI

🧠 Future Enhancements
🔐 Authentication & role-based access

🛒 Add to cart & checkout (Stripe integration)

🛠️ Admin dashboard for content control

🌍 Multi-language support (i18n)

📈 Analytics & engagement tracking

🌐 Live Demo
Coming soon on Vercel

👩‍💻 Developed by
Eman Mohamed Ragab
Frontend Developer – React / Next.js
📍 Cairo, Egypt
📧 eman.m22omer@gmail.com
GitHub • LinkedIn

📄 License
This project is open-source and licensed under the MIT License.