export const profile = {
  name: "Sathish Mallapolla",
  initials: "SM",
  role: "Software Engineer | Python Backend | AI/ML | RAG | Agentic AI | Full Stack",
  email: "sathishmallapolla125@gmail.com",
  location: "Hyderabad, India",
  resume:
    "https://drive.google.com/file/d/1TLzfbb1OHsBpI2JDUxYJ6snYZY-3lDkp/view?usp=drivesdk",
} as const;

export const social = {
  github: "https://github.com/mallapolla",
  linkedin: "https://www.linkedin.com/in/sathish-mallapolla-6ab0182b6",
  email: "mailto:sathishmallapolla125@gmail.com",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroEditorialWords = ["BUILD", "CREATE", "SOLVE", "IMPACT"] as const;

export const whatIBuild = [
  {
    number: "01",
    title: "AI-Powered Applications",
    items: ["LLMs", "RAG Pipelines", "Agentic AI", "AI Automation", "Claude & Gemini APIs"],
  },
  {
    number: "02",
    title: "Backend Systems",
    items: ["Python", "Django", "FastAPI", "REST APIs", "PostgreSQL", "JWT Auth"],
  },
  {
    number: "03",
    title: "Full-Stack Products",
    items: ["React", "API Integration", "Authentication", "Database Design", "Responsive UI"],
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD", "Caching", "Production Deployment"],
  },
] as const;

export const projects = [
  {
    number: "01",
    title: "VALMENTOR AI",
    displayName: "ValMentor AI",
    type: "AI Career & Interview Mentor",
    description:
      "An AI career mentor built with agentic workflows, retrieval over resume and interview context, and persistent memory. It supports interview practice, resume analysis, and personalized learning guidance through Claude and Gemini.",
    problem:
      "Job seekers lack personalized, on-demand interview prep and resume feedback — generic tools don't understand their specific background or target role.",
    solution:
      "Built an agentic AI mentor that retrieves over the user's actual resume and interview history using RAG, delivers context-aware coaching, and maintains persistent memory across sessions.",
    stack: ["Python", "Django", "Agentic AI", "RAG", "Claude API", "Gemini API"],
    live: "https://valmentor-ai.onrender.com/",
    github: "https://github.com/mallapolla/ValMentor-AI",
    image: "/images/projects/valmentor.jpg",
    liveLabel: "LIVE PROJECT",
    sourceLabel: "GITHUB REPOSITORY",
    featured: true,
  },
  {
    number: "02",
    title: "PULSCOST HR INTELLIGENCE",
    displayName: "Pulscost HR Intelligence",
    type: "HR Cost Intelligence",
    description:
      "A full-stack HR analytics platform that attributes calendar meetings to projects, calculates real-time meeting costs, and surfaces spend insights through an interactive command dashboard.",
    problem:
      "Organizations have no visibility into the true cost of their meetings — time spent in recurring syncs represents significant untracked engineering spend.",
    solution:
      "Built a real-time HR analytics platform with calendar integration, live cost calculation using Socket.IO, and an interactive dashboard to surface actionable meeting spend insights.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "Tailwind CSS"],
    live: "https://react-hyd-1.onrender.com/",
    github: "https://github.com/mallapolla/React-hyd",
    image: "/images/projects/pulscost.jpg",
    liveLabel: "LIVE PROJECT",
    sourceLabel: "GITHUB REPOSITORY",
    featured: false,
  },
  {
    number: "03",
    title: "AI PERSONAL FINANCE MANAGEMENT SYSTEM",
    displayName: "AI Personal Finance Management System",
    type: "Financial Forecasting",
    description:
      "An authenticated finance platform that trains expense prediction models and serves forecasts through Django REST APIs, with Docker packaging and AWS-backed deployment.",
    problem:
      "Personal finance apps track spending but don't predict it — users can't proactively manage budgets without knowing what future expenses look like.",
    solution:
      "Built an ML pipeline on 5,000+ expense records using Scikit-learn, exposed predictions through Django REST APIs with JWT authentication, and deployed the entire system on AWS with Docker.",
    stack: ["Python", "Django", "Scikit-learn", "MySQL", "Docker", "AWS"],
    live: "https://finance-management-predictor.onrender.com/accounts/login/?next=/dashboard/",
    github: "https://github.com/mallapolla/Finance-Management-predictor",
    image: "/images/projects/finance.jpg",
    liveLabel: "LIVE PROJECT",
    sourceLabel: "GITHUB REPOSITORY",
    featured: false,
  },
] as const;

export type ProjectType = (typeof projects)[number];

export const projectCaseStudies: Record<
  string,
  {
    overview: string;
    architecture: { layer: string; tech: string }[];
    keyFeatures: string[];
    challenges: string[];
    deployment: string;
  }
> = {
  "01": {
    overview:
      "ValMentor AI is a production-deployed agentic career mentor that combines Retrieval-Augmented Generation (RAG), multi-LLM orchestration (Claude + Gemini), and persistent session memory to deliver personalized interview coaching and resume analysis. The system retrieves over the user's actual resume and interview history — not generic advice.",
    architecture: [
      { layer: "User Interface", tech: "Django Templates / REST endpoints" },
      { layer: "Agentic Orchestration", tech: "Custom agent loops, tool calling" },
      { layer: "RAG Pipeline", tech: "Retrieval over resume + interview context" },
      { layer: "LLM Layer", tech: "Claude API + Gemini API" },
      { layer: "Memory & State", tech: "Persistent session memory" },
      { layer: "Backend", tech: "Python / Django" },
      { layer: "Deployment", tech: "Render (production)" },
    ],
    keyFeatures: [
      "Agentic workflows with multi-step reasoning and tool use",
      "RAG retrieval over user resume and interview transcripts",
      "Persistent memory — sessions carry context across conversations",
      "Multi-LLM support: Claude and Gemini with graceful fallback",
      "Interview simulation with structured feedback",
      "Resume analysis with targeted improvement suggestions",
    ],
    challenges: [
      "Designing reliable agentic loops that handle LLM tool-call failures gracefully",
      "Building RAG retrieval that stays contextually relevant per user session",
      "Maintaining conversation memory across sessions without unbounded context growth",
      "Orchestrating two different LLM providers with a unified interface",
    ],
    deployment:
      "Deployed on Render with environment-based secrets management. Production URL remains stable for recruiter/interviewer review.",
  },
  "02": {
    overview:
      "Pulscost HR Intelligence is a full-stack analytics platform that surfaces the true cost of meetings by attributing calendar events to projects and calculating real-time spend. An interactive dashboard gives HR and engineering leaders actionable insight into where team time — and money — actually goes.",
    architecture: [
      { layer: "Frontend", tech: "React (component-driven UI)" },
      { layer: "Real-Time Updates", tech: "Socket.IO for live cost calculation" },
      { layer: "Backend API", tech: "Node.js / Express REST API" },
      { layer: "Cost Engine", tech: "Meeting attribution + salary-weighted calculation" },
      { layer: "Dashboard", tech: "Interactive command interface" },
      { layer: "Deployment", tech: "Render (production)" },
    ],
    keyFeatures: [
      "Real-time meeting cost calculation via Socket.IO",
      "Calendar event attribution to projects and teams",
      "Interactive command dashboard for exploring spend data",
      "Component-driven React architecture with responsive design",
      "REST API for meeting data ingestion and cost retrieval",
    ],
    challenges: [
      "Designing a real-time cost engine that stays consistent across concurrent users",
      "Building an intuitive command-style dashboard for non-technical HR users",
      "Ensuring accurate meeting attribution across overlapping calendar events",
    ],
    deployment:
      "Deployed on Render. React build served as static assets; Node.js/Express backend handles API and Socket.IO connections.",
  },
  "03": {
    overview:
      "AI Personal Finance Management System is a production ML application that trains an expense prediction model on 5,000+ records, exposes predictions through authenticated Django REST APIs, and deploys the full stack via Docker on AWS. It demonstrates end-to-end ML engineering: data pipeline → model training → REST API → cloud deployment.",
    architecture: [
      { layer: "Frontend", tech: "Django Templates (authenticated views)" },
      { layer: "REST API", tech: "Django REST Framework" },
      { layer: "Authentication", tech: "JWT (JSON Web Tokens)" },
      { layer: "ML Pipeline", tech: "Scikit-learn (training + inference)" },
      { layer: "Data Processing", tech: "Pandas (5,000+ records)" },
      { layer: "Database", tech: "MySQL" },
      { layer: "Containerization", tech: "Docker" },
      { layer: "Cloud", tech: "AWS deployment" },
    ],
    keyFeatures: [
      "End-to-end ML pipeline: ingestion → feature engineering → training → inference",
      "Django REST Framework APIs with JWT authentication",
      "Expense prediction model with Scikit-learn",
      "Secure multi-user authentication with role-based access",
      "Dockerized deployment for consistent environments across dev and production",
      "AWS cloud hosting with environment-based configuration",
    ],
    challenges: [
      "Building a reliable ML pipeline that retrains on new user data without manual intervention",
      "Designing REST API contracts that cleanly separate ML inference from business logic",
      "Containerizing a Django + ML stack with proper dependency isolation in Docker",
      "Managing MySQL schema migrations alongside model versioning",
    ],
    deployment:
      "Fully Dockerized with multi-stage build. Deployed on AWS with MySQL as managed database. Environment variables manage secrets; no credentials in codebase.",
  },
};

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
  technologies: [
    "Python",
    "Django",
    "Django REST Framework",
    "Scikit-learn",
    "Pandas",
    "JWT",
    "PostgreSQL",
    "Caching",
    "Agile",
  ],
} as const;

export const engineeringMetrics = [
  { value: "87%", label: "ML Model Accuracy", sublabel: "Scikit-learn pipeline" },
  { value: "40%", label: "API Latency Reduction", sublabel: "Query & cache optimization" },
  { value: "5,000+", label: "Records Processed", sublabel: "End-to-end ML pipeline" },
  { value: "100+", label: "Concurrent Users", sublabel: "Django REST Framework" },
  { value: "350ms → 210ms", label: "Response Time", sublabel: "5+ optimized endpoints" },
  { value: "15%", label: "Model F1 Improvement", sublabel: "Precision, recall & F1" },
] as const;

export const engineeringPanels = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "End-to-end applications from React frontends to Django and Node.js backends, with clean API design and responsive interfaces.",
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Agentic AI systems, RAG pipelines, LLM integrations, and ML models deployed in production with measurable accuracy.",
  },
  {
    number: "03",
    title: "Backend Systems",
    description:
      "Scalable REST APIs, authentication layers, data validation, and caching — built for performance under real-world load.",
  },
  {
    number: "04",
    title: "Database Engineering",
    description:
      "Relational and document databases designed with proper indexing, query optimization, and migration strategies.",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Docker containers, AWS deployment, CI/CD pipelines, and infrastructure that scales with the product.",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Django", "Django REST Framework", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "AI / ML",
    items: ["Machine Learning", "LLMs", "RAG", "Agentic AI", "NLP", "Claude API", "Gemini API"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud / DevOps",
    items: ["AWS", "Docker", "CI/CD", "Caching", "Linux"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub"],
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
  "PYTHON BACKEND",
  "AI / ML",
  "RAG SYSTEMS",
  "AGENTIC AI",
  "FULL STACK",
  "CLOUD READY",
] as const;
