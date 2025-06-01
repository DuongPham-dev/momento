# Momento - Social network project 

**Momento** is a progressive web application (PWA) inspired by Instagram, where users can post and share images with their friends and others in the community.

🖌️ **Design**: [Momento](https://kzmjka2qnry96nxz79t1.lite.vusercontent.net/)

---

## Features

### vAuthentication
- User registration & login (email/password or OAuth)
- Password reset and email verification

### User Profile
- View/update personal profile
- Display uploaded posts and user statistics (followers/following count)

### Posting System
- Upload photo/video with caption
- Edit/delete own posts
- View posts in full screen

### Feed & Interactions
- Infinite scrolling news feed (from followed users)
- Like and comment on posts
- Follow/unfollow other users

### Search & Discovery
- Search users by username
- Explore trending posts (optional for MVP)

### Notifications
- Real-time or pull-based notifications (likes, follows, comments)

### Optional / Phase 2 Features
- Stories (24-hour temporary content)
- Direct messages
- Hashtags & tagging
- Push notifications (PWA/mobile)

---

## 📦 Tech Stack

### Frontend
- [React 19](https://react.dev/)
- [Next.js (App Router)](http://Next.js)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix Theme](https://www.radix-ui.com/themes/docs/components/theme)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)

### Backend
- [Next.js (Route Handlers)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
-[ Mongoose DB](https://www.mongodb.com/)
- [Restful API](https://restfulapi.net/)

### Authentication
- [NextAuth](https://next-auth.js.org/)

### Image/Video Storage
- [Firebase Storage](https://firebase.google.com/docs/storage)

### DevOps / Tools
- GitHub for version control
- GitHub Actions for deployment
- ESLint + Prettier for code consistency
- Husky + lint-staged for pre-commit checks

### Testing
- [Jest](https://jestjs.io/) ([TS Jest](https://kulshekhar.github.io/ts-jest/)) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Task Management Tools
- [Trello](https://trello.com/)


---


## ⚠️ Known Issues
- TODO

---

## 📁 Folder Structure
- TODO
---

## Environment Variables

Before running the project, create a .env.local file in the root directory: (TODO)

---

## Installation & Running the Project

Clone and set up:
```bash
# Clone project
git clone https://github.com/DuongPham-dev/momento.git

# Switch to the correct branch
git checkout main

# Install dependencies
pnpm install
```

Run the project:

```bash
# Development mode
pnpm dev

# Production build
pnpm build

# Start the production server
pnpm start
```