# 🚀 AI Resume Analyzer & Builder

An AI-powered Resume Analyzer and Resume Builder built using **React, Spring Boot, Gemini AI, and PDFBox**. The application analyzes uploaded resumes, provides ATS-style feedback, and helps users improve their resumes.

> 🚧 **Project Status:** In Progress  
> ✅ Resume Analyzer Completed & Live  
> 🚧 Resume Builder Under Development

---

## 🌐 Live Demo

### Frontend
🔗 https://ai-resume-analyzer-builder-himanshu.vercel.app

### Backend API
🔗 https://ai-resume-analyzer-builder-a2w2.onrender.com

### Swagger API Documentation
🔗 https://ai-resume-analyzer-builder-a2w2.onrender.com/swagger-ui/index.html

---

# ✨ Features

## ✅ Resume Analyzer

- Upload Resume (PDF)
- Extract Resume Text using Apache PDFBox
- AI-powered Resume Analysis using Google Gemini
- ATS Score Generation
- Professional Summary
- Resume Strengths
- Resume Weaknesses
- Improvement Suggestions
- Responsive UI
- Loading Animation
- REST API Backend
- Dockerized Backend
- Live Deployment

---

## 🚧 Resume Builder (Coming Soon)

- Personal Information
- Education
- Experience
- Projects
- Skills
- Certifications
- Achievements
- Resume Preview
- PDF Download

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

## Backend

- Java 21
- Spring Boot 3
- REST API
- Apache PDFBox
- Google Gemini AI API

## Deployment

- Vercel (Frontend)
- Render (Backend)
- Docker

---

# 📂 Project Structure

```
AI-Resume-Analyzer-Builder/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── pom.xml
│   └── .dockerignore
│
└── README.md
```

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Resume-Analyzer-Builder.git
```

---

## Backend

```bash
cd backend
```

Create an `application.properties` file:

```properties
spring.application.name=AI Resume Analyzer

server.port=8080

spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

gemini.api.key=${GEMINI_API_KEY}
```

Run Backend

```bash
./mvnw spring-boot:run
```

or using IntelliJ IDEA.

---

## Frontend

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:8080
```

Run

```bash
npm run dev
```

---

# 📡 API Endpoint

### Analyze Resume

```
POST /api/resume/analyze
```

Form Data

```
file : PDF
```

Returns

```json
{
  "atsScore": 85,
  "summary": "...",
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}
```

---

# 📸 Screenshots

> Add screenshots here after completing the UI.

- Home Page
- Resume Upload
- AI Analysis Result
- Swagger API
- Mobile View

---

# 🚀 Deployment

Frontend deployed on **Vercel**

Backend deployed on **Render**

Docker used for backend deployment.

---

# 🔮 Future Enhancements

- Resume Builder
- JD Matcher
- AI Resume Rewrite
- Multiple Resume Templates
- Export Resume as PDF
- Dark Mode
- Authentication
- Resume History
- Admin Dashboard

---

# 👨‍💻 Developer

**Himanshu Chaudhari**

B.Tech CSE (Artificial Intelligence)

Java | Spring Boot | React | AI | Full Stack Developer

---

⭐ If you like this project, don't forget to give it a Star!
