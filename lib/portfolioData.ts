export interface Project {
  id: string;
  title: string;
  codename: string;
  period: string;
  category: string;
  status: string;
  stack: string[];
  summary: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  period: string;
  location?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  category: string;
  detail: string;
  badge: string;
}

export const RESUME_DATA = {
  personal: {
    fullName: "Munigonda Kiran",
    name: "Munigonda Kiran",
    title: "Full-stack engineer moving into AI engineering",
    phone: "+91-9010300676",
    email: "kirankushal2211@gmail.com",
    location: "Hyderabad, Telangana 500078",
    portfolioUrl: "portfolio-kiran-one.vercel.app",
    linkedin: "https://linkedin.com/in/MunigondaKiran",
    github: "https://github.com/kirankushal22",
    socials: {
      github: "https://github.com/kirankushal22",
      linkedin: "https://linkedin.com/in/MunigondaKiran",
    },
    summary:
      "Full-stack engineer from Hyderabad, moving into AI engineering. I build multi-agent and RAG products end to end, from the Postgres schema to the prompt. Previously a Technical Associate at Tech Mahindra; since 2025 I've been building my own products full time, currently Arcwell. I also train for powerlifting.",
  },

  projects: [
    {
      id: "arcwell",
      title: "Arcwell",
      codename: "Product",
      period: "Nov 2026 – now",
      category: "Product",
      status: "Building · backend phase",
      stack: ["Expo SDK 58", "React Native", "TypeScript", "Supabase", "Postgres RLS", "Edge Functions", "pgTAP", "Groq"],
      summary:
        "A training, nutrition and recovery app for athletes, with a client-management platform for coaches.",
      bullets: [
        "Spec first: a written product spec, 199 low-fidelity wireframe screens across 18 flows, and a numbered decision log of over 100 entries.",
        "Nine front-end phases done, each ending with lint, typecheck and database tests, then a commit.",
        "Row-level security on every table, with pgTAP tests proving a coach cannot see another coach's clients.",
        "One real AI feature so far: a meal photo scan behind a Supabase Edge Function, with entitlement and a daily cap enforced in Postgres and validated model output.",
      ],
      metrics: [],
    },
    {
      id: "topicpilot",
      title: "TopicPilot",
      codename: "AI system",
      period: "2025",
      category: "AI system",
      status: "Built",
      stack: ["Python", "FastAPI", "LangChain", "ChromaDB", "OpenAI", "Next.js", "SSE"],
      summary:
        "A multi-agent research assistant that plans, searches, checks its sources and writes a cited brief.",
      bullets: [
        "Planner agent splits the question into sub-questions that can be researched in parallel.",
        "Searcher agent pulls documents from web and academic sources and stores chunks in a temporary ChromaDB index.",
        "Critic agent checks each claim against its retrieved source and drops what it can't support; a writer agent produces the cited brief.",
        "A FastAPI backend streams each agent's steps to the Next.js front end over Server-Sent Events.",
      ],
      metrics: [],
      repoUrl: "https://github.com/kirankushal22/topicpilot-agentic-rag",
    },
    {
      id: "ai-news",
      title: "AI news aggregator",
      codename: "AI system",
      period: "Dec 2025 – Feb 2026",
      category: "AI system",
      status: "Built",
      stack: ["Python", "UV", "Docker", "PostgreSQL", "LangChain", "GPT-4o", "Docling", "Webshare"],
      summary:
        "A pipeline that scrapes AI news from blogs, feeds and YouTube transcripts and turns it into ranked daily summaries.",
      bullets: [
        "Scrapers pull from company blogs, RSS feeds and YouTube transcripts through rotating Webshare proxies.",
        "Docling turns messy pages and documents into clean text, stored in PostgreSQL with source and date.",
        "A LangChain workflow with GPT-4o writes a short summary per item; each item is scored against a user profile to rank the feed.",
        "Runs in Docker, with dependencies pinned by UV.",
      ],
      metrics: [],
      repoUrl: "https://github.com/kirankushal22/ai-news4u",
    },
    {
      id: "healthos",
      title: "HealthOS",
      codename: "AI system",
      period: "Mar 2026",
      category: "AI system",
      status: "Prototype",
      stack: ["React Native", "Expo", "Node.js", "PostgreSQL", "LangChain", "LlamaIndex", "Pinecone", "PyTorch", "PEFT", "vLLM", "Claude API"],
      summary:
        "An offline-first health app prototype covering nutrition, training, recovery and an AI coach backed by research papers.",
      bullets: [
        "A React Native app with a Node.js and PostgreSQL backend; a 16-question onboarding drives each person's daily targets.",
        "Hybrid retrieval (LangChain, LlamaIndex, Pinecone) over research papers, so the coach's answers come from sources.",
        "Experiments fine-tuning a smaller model with PyTorch and PEFT for regional food analysis, served with vLLM.",
        "A deterministic calculator runs beside the AI and keeps calorie and macro targets inside safe bounds.",
      ],
      metrics: [],
    },
    {
      id: "ai-tools-discovery",
      title: "AI Tools Discovery",
      codename: "Web app",
      period: "Jun – Aug 2025",
      category: "Web app",
      status: "Built",
      stack: ["React", "Node.js", "Tailwind CSS", "Context API", "Docker", "GitHub Actions"],
      summary:
        "A directory for finding AI tools by domain, task and pricing, with search and filters.",
      bullets: [
        "Lists AI tools by domain, what they do and whether they're free or paid.",
        "A reading-first interface inspired by Medium.",
        "Shared state through React Context and responsive layouts in Tailwind.",
        "Docker images and a GitHub Actions pipeline for builds.",
      ],
      metrics: [],
      repoUrl: "https://github.com/kirankushal22/ai-tools-discovery",
    },
    {
      id: "garbage-logistics",
      title: "QR garbage-collection tracking",
      codename: "Capstone",
      period: "2024",
      category: "Capstone",
      status: "Graded O (Outstanding)",
      stack: ["Java", "QML", "SQLite", "REST APIs"],
      summary:
        "A mobile app that proves waste was collected, using geo-fenced QR checkpoints and an audit log.",
      bullets: [
        "Signed QR tokens tied to collection points; a scan only counts inside that point's geo-fence.",
        "An offline-first scanning app in Java and QML with a local SQLite store.",
        "The audit log and the API it syncs to.",
        "My B.Tech capstone project, graded O (Outstanding).",
      ],
      metrics: [],
      repoUrl: "https://github.com/kirankushal22/garbage-logistics-qr",
    },
    {
      id: "phd-portal",
      title: "PhD research portal",
      codename: "Web app",
      period: "May – Jun 2023",
      category: "Web app",
      status: "Internship project",
      stack: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
      summary:
        "The front end of a portal where researchers upload, list and search research projects.",
      bullets: [
        "Built during my internship at Suvidha Foundation.",
        "The React front end with Tailwind styling.",
        "Faceted filters and multi-part file uploads, wired to the backend team's API.",
      ],
      metrics: [],
    },
  ],

  experience: [
    {
      period: "October 2024 – April 2025",
      role: "Technical Associate",
      company: "Tech Mahindra",
      location: "Hyderabad, India",
      bullets: [
        "Provided technical support to employees at a leading US retail chain by diagnosing issues and restoring operational continuity.",
        "Resolved hardware, software, and network issues including cabling faults using structured troubleshooting.",
        "Worked with other teams on recurring issues.",
      ],
      technologies: ["Hardware troubleshooting", "Network diagnostics", "Technical support"],
    },
    {
      period: "May 2023 – June 2023",
      role: "Web Developer Intern",
      company: "Suvidha Foundation",
      location: "Remote",
      bullets: [
        "Developed a React front end for a research-project portal with project upload, listing, and search functionality.",
        "Used React.js for dynamic UI components and Tailwind CSS for responsive styling.",
        "Collaborated with the backend team to integrate data flows and upload functionality for the research-project portal.",
      ],
      technologies: ["React", "Tailwind CSS", "REST APIs", "JavaScript"],
    },
    {
      period: "2025 – Present",
      role: "Independent engineer",
      company: "Self-employed",
      location: "Hyderabad & Remote",
      bullets: [
        "Building AI products end to end: Arcwell, TopicPilot and the AI news aggregator.",
        "Building client websites in Next.js, TypeScript and Tailwind CSS.",
      ],
      technologies: ["Supabase", "PostgreSQL", "LangChain", "React Native", "Next.js", "Claude Code"],
    },
  ],

  education: [
    {
      institution: "Malla Reddy University",
      degree: "B.Tech in Computer Science and Engineering",
      score: "CGPA: 8.06 / 10.0",
      period: "2020 – 2024",
      location: "Hyderabad, Telangana",
    },
    {
      institution: "Narayana Junior College, West Marredpally",
      degree: "Intermediate Education (MPC)",
      score: "Score: 873 / 1000",
      period: "2018 – 2020",
      location: "Secunderabad, Telangana",
    },
    {
      institution: "Narayana e-techno School",
      degree: "High School (Secondary School Certificate)",
      score: "CGPA: 9.3 / 10.0",
      period: "2015 – 2018",
      location: "Alwal, Hyderabad",
    },
  ],

  technicalSkills: {
    aiAndMl: {
      category: "AI",
      items: [
        "Claude API",
        "OpenAI",
        "Groq",
        "LangChain",
        "LlamaIndex",
        "RAG",
        "ChromaDB",
        "Pinecone",
        "PyTorch",
        "PEFT",
        "vLLM",
      ],
    },
    frontendAndMobile: {
      category: "Front end and mobile",
      items: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Tailwind CSS",
      ],
    },
    backendAndApis: {
      category: "Back end",
      items: [
        "Node.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "SQLite",
        "MongoDB",
      ],
    },
    devOpsAndCloud: {
      category: "Infra and tooling",
      items: [
        "Docker",
        "GitHub Actions",
        "AWS",
        "Vercel",
        "Linux",
        "Claude Code",
        "Codex",
      ],
    },
  },

  achievements: [
    {
      title: "MERN stack cohort",
      issuer: "100xDevs",
      category: "Cohort",
      detail: "A full-stack web development cohort covering the MERN stack.",
      badge: "Completed",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      category: "Certification",
      detail: "The entry-level AWS certification, covering core AWS services, security and billing.",
      badge: "Certified",
    },
    {
      title: "Generative AI Essentials",
      issuer: "freeCodeCamp",
      category: "Certification",
      detail: "An introductory course on generative AI and large language models.",
      badge: "Completed",
    },
    {
      title: "1st place, “Your Start Up Story” pitch competition",
      issuer: "UDBAVA Club",
      category: "Startup Competition",
      detail: "Won first place in a university startup pitch competition.",
      badge: "1st place",
    },
    {
      title: "2nd place, UI hackathon (Havoc PC website)",
      issuer: "UI Hackathon Society",
      category: "Hackathon",
      detail: "Placed second in a UI hackathon with a website for Havoc PC.",
      badge: "2nd place",
    },
    {
      title: "Organised a university gaming tournament",
      issuer: "University Event Society",
      category: "Leadership",
      detail: "Organised a university gaming tournament for about 100 players.",
      badge: "Organiser",
    },
  ],

  hobbies: [
    "Powerlifting (squat, bench press, deadlift)",
    "Volleyball",
    "Podcasts",
    "Swimming",
    "Reading AI research and engineering blogs",
  ],
  credentials: [
    {
      id: "cred-01",
      title: "MERN stack cohort",
      issuer: "100xDevs",
      category: "Cohort",
      year: "2024",
      detail: "A full-stack web development cohort covering the MERN stack.",
      status: "COMPLETED",
    },
    {
      id: "cred-02",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      category: "Certification",
      year: "2024",
      detail: "The entry-level AWS certification, covering core AWS services, security and billing.",
      status: "CERTIFIED",
    },
    {
      id: "cred-03",
      title: "Generative AI Essentials",
      issuer: "freeCodeCamp",
      category: "Certification",
      year: "2024",
      detail: "An introductory course on generative AI and large language models.",
      status: "COMPLETED",
    },
    {
      id: "cred-04",
      title: "1st place, “Your Start Up Story” pitch competition",
      issuer: "UDBAVA Club",
      category: "Award",
      year: "2023",
      detail: "Won first place in a university startup pitch competition.",
      status: "1ST PLACE",
    },
    {
      id: "cred-05",
      title: "2nd place, UI hackathon (Havoc PC website)",
      issuer: "UI Hackathon Society",
      category: "Hackathon",
      year: "2023",
      detail: "Placed second in a UI hackathon with a website for Havoc PC.",
      status: "2ND PLACE",
    },
  ],
};

export const PORTFOLIO_DATA = RESUME_DATA;
