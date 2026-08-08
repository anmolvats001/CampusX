# Campus Connect (CampusX) — Complaint Management System

A full-stack complaint management platform for colleges, with role-based dashboards for Students, Departments, and Admins to raise, route, and resolve complaints end-to-end.

## Overview

Campus complaints (maintenance, hostel, academic, etc.) often get lost between departments with no visibility into status. Campus Connect gives every complaint a clear lifecycle — raised, routed, assigned, escalated, resolved — with each role seeing only what's relevant to them.

## Key Features

- **Three-tier role-based access** — distinct dashboards and permissions for Student, Department, and Admin
- **Department-wise routing** across 5+ complaint categories, so complaints reach the right team automatically
- **Image-based proof uploads** via Multer, letting students attach evidence to complaints
- **End-to-end status tracking** — students can follow a complaint from submission to resolution
- **Admin dashboard** for monitoring all complaints, assigning them to departments, escalating stuck ones, and marking resolutions

## Live Demo

`<add live link here>`

## Screenshots

`<add screenshots of the Student, Department, and Admin dashboards here>`

## Architecture

```
React (Redux) Frontend
        │
        ▼
Express.js REST API
        │
   ┌────┴────┐
   ▼         ▼
MongoDB   Multer (file uploads)
(complaints, users, departments)
```

- **JWT auth** gates access per role (Student / Department / Admin)
- **Redux** manages complaint state and dashboard data on the frontend
- **Multer** handles image proof uploads and storage

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Redux |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth | JWT |
| File Uploads | Multer |

## Getting Started

```bash
# Clone the repo
git clone <repo-url>
cd campus-connect

# Backend setup
cd server
npm install
cp .env.example .env   # set MongoDB URI, JWT secret, etc.
npm run dev

# Frontend setup
cd ../client
npm install
npm start
```

## Roles & Permissions

| Role | Can Do |
|---|---|
| Student | Submit complaints, attach proof, track status |
| Department | View assigned complaints, update status, resolve |
| Admin | View all complaints, assign/escalate, manage departments |

## Possible Next Steps

- Email/SMS notifications on status changes
- Analytics dashboard for complaint volume and resolution time by department
- Automated routing suggestions based on complaint text (NLP classification)

## License

MIT
