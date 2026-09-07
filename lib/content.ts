export const profile = {
  name: "Sathish Mallapolla",
  role: "Software Engineer | Full Stack Developer | AI Developer",
  email: "sathishmallapolla125@gmail.com",
  location: "Hyderabad, India",
} as const;

export const social = {
  github: "https://github.com/mallapolla",
  linkedin: "https://www.linkedin.com/in/sathish-mallapolla-6ab0182b6",
  email: "mailto:sathishmallapolla125@gmail.com",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    number: "01",
    title: "VALMENTOR AI",
    displayName: "ValMentor AI",
    type: "AI Career & Interview Mentor",
    description:
      "An AI career mentor built with agentic workflows, retrieval over resume and interview context, and persistent memory. It supports interview practice, resume analysis, and personalized learning guidance through Claude and Gemini.",
    stack: ["Python", "Django", "Agentic AI", "RAG", "Claude API", "Gemini API"],
    live: "https://valmentor-ai.onrender.com/",
    github: "https://github.com/mallapolla/ValMentor-AI",
    image: "/images/projects/valmentor.jpg",
    liveLabel: "LIVE PROJECT",
    sourceLabel: "GITHUB REPOSITORY",
  },
  {
    number: "02",
    title: "PULSCOST HR INTELLIGENCE",
    displayName: "Pulscost HR Intelligence",
    type: "HR Cost Intelligence",
    description:
      "A full-stack HR analytics platform that attributes calendar meetings to projects, calculates real-time meeting costs, and surfaces spend insights through an interactive command dashboard.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "Tailwind CSS"],
    live: "https://react-hyd-1.onrender.com/",
    github: "https://github.com/mallapolla/React-hyd",
    image: "/images/projects/pulscost.jpg",
    liveLabel: "LIVE PROJECT",
    sourceLabel: "GITHUB REPOSITORY",
  },
  {
    number: "03",
    title: "AI PERSONAL FINANCE MANAGEMENT SYSTEM",
    displayName: "AI Personal Finance Management System",
    type: "Financial Forecasting",
    description:
      "An authenticated finance platform that trains expense prediction models and serves forecasts through Django REST APIs, with Docker packaging and AWS-backed deployment.",
    stack: ["Python", "Django", "Scikit-learn", "MySQL", "Docker", "AWS"],
    live: "https://finance-management-predictor.onrender.com/accounts/login/?next=/dashboard/",
    github: "https://github.com/mallapolla/Finance-Management-predictor",
    image: "/images/projects/finance.jpg",
    liveLabel: "LIVE PROJECT",
    sourceLabel: "GITHUB REPOSITORY",
  },
] as const;

export const certifications = [
  {
    number: "01",
    name: "AI with Python",
    issuer: "Infosys Springboard",
    href: "https://drive.google.com/file/d/1FWfCd1v9n_-yOZiTbsA8EGZUEy9XGh5R/view?usp=drivesdk",
  },
  {
    number: "02",
    name: "SQL and Relational Database — IBM",
    issuer: "IBM Skills Network",
    href: "https://drive.google.com/file/d/1_wFOo8PmqTi_WyBVX0tifSp8U_hmI8al/view?usp=drivesdk",
  },
  {
    number: "03",
    name: "Decision Trees using Python",
    issuer: "Infosys Springboard",
    href: "https://drive.google.com/file/d/14B6-QA0QKQq8S-u8rYU91kQCKic8dvQo/view?usp=drivesdk",
  },
  {
    number: "04",
    name: "Python Django",
    issuer: "Infosys Springboard",
    href: "https://drive.google.com/file/d/1YMyYU0WNgI64YfgZP1ELvxMO-lmU6Ukn/view?usp=drivesdk",
  },
  {
    number: "05",
    name: "Database and SQL — Infosys",
    issuer: "Infosys Springboard",
    href: "https://drive.google.com/file/d/1VZQ8rCfjJz669whxUj4XWTcwVbOx_Pck/view?usp=drivesdk",
  },
] as const;

export const experience = {
  company: "Datapoint IT & Hardware Tech Pvt Ltd",
  role: "Software Engineer",
  location: "Hyderabad, India",
  duration: "April 2025 – June 2026",
  highlights: [
    "Built an end-to-end ML pipeline on 5,000+ records using Scikit-learn and Pandas, reaching 87% accuracy and improving precision, recall, and F1 by 15%.",
    "Developed Django REST Framework services with JWT authentication, validation, and structured error handling for 100+ concurrent users.",
    "Optimized queries and caching across 5+ endpoints, reducing API latency by 40% from 350ms to 210ms.",
    "Designed recruiter dashboard workflows with automated candidate scoring and shortlisting in an Agile environment.",
  ],
} as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "Django", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "AI / ML",
    items: ["Machine Learning", "LLMs", "RAG", "Claude API", "Gemini API", "OpenAI APIs"],
  },
  {
    title: "Cloud / DevOps",
    items: ["Git", "GitHub", "Docker", "AWS", "Linux"],
  },
] as const;

export const architectureSteps = [
  "USER",
  "FRONTEND",
  "API",
  "BACKEND",
  "DATABASE",
  "AI SERVICES",
  "CLOUD",
] as const;

export const qualitativeFocus = [
  "AI SYSTEMS",
  "FULL STACK",
  "PRODUCT ENGINEERING",
  "CLOUD READY",
] as const;
