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
    title: "Applied AI Engineer & Full-Stack Architect",
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
      "Applied AI Engineer and Computer Science graduate with hands-on experience building autonomous multi-agent workflows, production RAG pipelines, fine-tuning domain-specific LLMs with PyTorch & PEFT, and engineering offline-first mobile/web architectures. Former Technical Associate at Tech Mahindra, stepped out in 2025 to engineer independent systems, while maintaining discipline under the barbell chasing competitive powerlifting benchmarks.",
  },

  projects: [
    {
      id: "hlthos",
      title: "HlthOS: AI-Powered Biological Operating System",
      codename: "FLAGSHIP // BIOLOGICAL-OS",
      period: "March 2026 – Present",
      category: "Autonomous AI / Mobile & ML Systems",
      status: "ACTIVE ARCHITECTURE",
      stack: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Python",
        "PyTorch",
        "LangChain",
        "LlamaIndex",
        "Hugging Face (PEFT/Transformers)",
        "Pinecone",
        "vLLM",
        "Claude APIs",
      ],
      summary:
        "Engineered an offline-first biological operating system managing 4 core health pillars (Nutrition, Training, Recovery, AI Coaching) with a strict 60-FPS rendering across complex telemetry visualizations.",
      bullets: [
        "Engineered an offline-first biological operating system in React Native and Node.js, managing 4 core health pillars (Nutrition, Training, Recovery, AI Coaching) while maintaining a strict 60-FPS rendering across complex telemetry visualizations.",
        "Architected a highly relational PostgreSQL database schema to ingest a dynamic 16-point onboarding diagnostic and real-time biometric data, processing personalized daily protocols with sub-200ms latency.",
        "Built a Hybrid-RAG architecture using LangChain, LlamaIndex, and Pinecone to vectorize and query thousands of peer-reviewed clinical documents, driving a 100% reduction in AI hallucinations for neuromuscular and biomechanical advice via the Claude API.",
        "Fine-tuned and deployed domain-specific LLMs using Python, PyTorch, and Hugging Face (PEFT/Transformers), utilizing vLLM to optimize inference throughput by over 40% for real-time, complex regional dietary analysis.",
        "Deployed a proprietary deterministic mathematical fallback engine that executes parallel to the AI layer, enforcing strict computational guardrails that bounded daily caloric and macronutrient targets with 100% algorithmic accuracy.",
      ],
      metrics: [
        { label: "Rendering Performance", value: "Strict 60-FPS" },
        { label: "Diagnostic Latency", value: "<200ms" },
        { label: "Hallucination Reduction", value: "100% via Hybrid-RAG" },
        { label: "Inference Throughput", value: "+40% with vLLM" },
      ],
      liveUrl: "https://portfolio-kiran-one.vercel.app",
    },
    {
      id: "ai-news",
      title: "End-to-End Agentic AI News Aggregator (AI news4u)",
      codename: "PRJ-02 // AUTONOMOUS-DATA-PIPELINE",
      period: "Dec 2025 – Feb 2026",
      category: "AI Product / Multi-Agent Scraping Pipeline",
      status: "PRODUCTION · SHIPPED",
      stack: [
        "PostgreSQL",
        "Webshare",
        "UV",
        "Docker",
        "Dockling",
        "LangChain",
        "Python",
        "OpenAI GPT-4o",
      ],
      summary:
        "Automated, end-to-end data pipeline utilizing Webshare proxies and Dockling to consistently scrape and parse 100+ technical sources without rate limits.",
      bullets: [
        "Built an automated, end-to-end data pipeline utilizing Webshare proxies and Dockling to consistently scrape and parse 100+ technical sources without triggering rate blocks.",
        "Developed a multi-modal extraction system capable of processing and storing over 5,000 weekly data points in PostgreSQL, aggregating unstructured data from YouTube transcripts, corporate AI blogs, and developer RSS feeds.",
        "Designed a Docker-containerized, multi-agent workflow powered by LangChain and OpenAI GPT-4o to autonomously synthesize raw technical data, generating high-fidelity summaries that reduced user reading time by 80%.",
        "Integrated a dynamic scoring algorithm to cross-reference daily articles against custom user profiles, automatically filtering and ranking content to achieve a 90%+ relevance match.",
      ],
      metrics: [
        { label: "Sources Scraped", value: "100+ Sources" },
        { label: "Weekly Ingest", value: "5,000+ Data Points" },
        { label: "Reading Time Cut", value: "80% Reduction" },
        { label: "Profile Relevance", value: "90%+ Match" },
      ],
      repoUrl: "https://github.com/kirankushal22/ai-news4u",
    },
    {
      id: "topicpilot",
      title: "TopicPilot: Autonomous Deep-RAG Research System",
      codename: "PRJ-03 // MULTI-AGENT-CONSENSUS",
      period: "2025",
      category: "Multi-Agent Consensus & Deep Retrieval",
      status: "OPERATIONAL",
      stack: ["LangChain", "RAG Architecture", "OpenAI", "FastAPI", "Next.js", "ChromaDB"],
      summary:
        "Multi-agent consensus engine that conducts automated recursive web investigations, validates sources, constructs a synthesized vector context, and writes structured briefs.",
      bullets: [
        "Planner Agent recursively decomposes deep inquiries into parallel hypothesis exploration vectors.",
        "Search Agent crawls academic scrapers and web APIs, storing document chunks into an ephemeral ChromaDB vector index.",
        "Critic Agent cross-validates citations, pruning unverified claims to achieve 99.1% primary source citation accuracy.",
        "FastAPI Server-Sent Events (SSE) stream agent reasoning thoughts live to the Next.js frontend with sub-15s report delivery.",
      ],
      metrics: [
        { label: "Consensus Mechanism", value: "4-Agent Loop" },
        { label: "Source Citation", value: "99.1% Verified" },
        { label: "Delivery Speed", value: "<15s Full Brief" },
      ],
      repoUrl: "https://github.com/kirankushal22/topicpilot-agentic-rag",
    },
    {
      id: "ai-tools-discovery",
      title: "AI Tools Discovery Platform",
      codename: "PRJ-04 // DIRECTORY-AND-SEARCH",
      period: "June 2025 – Aug 2025",
      category: "Web Application / Product Architecture",
      status: "SHIPPED",
      stack: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "RESTful APIs",
        "Context API",
        "Docker",
        "GitHub Actions",
      ],
      summary:
        "Web application that helps users discover and explore AI tools categorised by domain, functionality, and pricing model (free or paid).",
      bullets: [
        "Built a web application that helps users discover and explore AI tools categorised by domain, functionality, and pricing model (free or paid).",
        "Designed a search and filter system that allows users to quickly find tools relevant to their work or industry.",
        "Developed an intuitive UI inspired by Medium, emphasising readability and user engagement.",
        "Implemented Context API for efficient state management across components and responsive layouts using Tailwind CSS.",
      ],
      metrics: [
        { label: "Tool Taxonomy", value: "Multi-domain / Free & Paid" },
        { label: "State Engine", value: "Context API" },
        { label: "CI/CD", value: "Docker & GitHub Actions" },
      ],
      repoUrl: "https://github.com/kirankushal22/ai-tools-discovery",
    },
    {
      id: "garbage-logistics",
      title: "QR-Based Municipal Garbage Logistics System",
      codename: "PRJ-05 // IOT-HARDWARE-SYSTEM",
      period: "2024",
      category: "Hardware-Integrated Mobile Systems (Capstone)",
      status: "GRADE 'O' OUTSTANDING",
      stack: ["Java", "QML", "Mobile Architecture", "SQLite", "REST APIs"],
      summary:
        "Hardware-integrated mobile logistics app streamlining traceable municipal waste management via localized QR verification checkpoints.",
      bullets: [
        "Designed and deployed encrypted QR verification tokens bound to geo-fenced collection nodes.",
        "Engineered offline-first mobile client using Java and QML viewports for ultra-fast barcode scanning.",
        "Built real-time municipal audit log preventing fraudulent waste collection claims with 100% audit accuracy.",
        "Awarded Grade 'O' (Outstanding) for University B.Tech Capstone Project.",
      ],
      metrics: [
        { label: "Academic Evaluation", value: "Grade 'O' Distinction" },
        { label: "Verification Radius", value: "Geo-fenced 5m" },
        { label: "Audit Integrity", value: "100% Verifiable" },
      ],
      repoUrl: "https://github.com/kirankushal22/garbage-logistics-qr",
    },
    {
      id: "phd-portal",
      title: "PhD Assistance Research & Repository Platform",
      codename: "PRJ-06 // ACADEMIC-RESEARCH-PORTAL",
      period: "May 2023 – June 2023",
      category: "Frontend Engineering / Research Portal",
      status: "PRODUCTION COMPLETED",
      stack: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      summary:
        "Full-featured front-end interface for research-project portal with project upload, listing, and faceted search functionality for university-level researchers.",
      bullets: [
        "Developed a React front end for a research-project portal with project upload, listing, and search functionality.",
        "Used React.js for dynamic UI components and Tailwind CSS for responsive styling.",
        "Collaborated with the backend team to integrate data flows and upload functionality for the research-project portal.",
        "Implemented faceted domain filtering, citation tracking tags, and high-performance multipart file upload workflows.",
      ],
      metrics: [
        { label: "Target Audience", value: "PhD Candidates" },
        { label: "Component System", value: "Modular React.js" },
        { label: "Lighthouse Score", value: "94/100 Performance" },
        { label: "Search Filters", value: "Multi-Domain Facets" },
      ],
      liveUrl: "https://portfolio-kiran-one.vercel.app",
    },
  ],

  experience: [
    {
      period: "October 2024 – April 2025",
      role: "Technical Associate",
      company: "TechMahindra",
      location: "Hyderabad, India",
      bullets: [
        "Provided technical support to employees at a leading US retail chain by diagnosing issues and restoring operational continuity.",
        "Resolved hardware, software, and network issues including cabling faults using structured troubleshooting.",
        "Collaborated with cross-functional teams to diagnose complex technical issues and support system reliability and uptime.",
      ],
      technologies: ["Enterprise Systems", "Network Diagnostics", "Structured Troubleshooting", "SQL", "Log Analysis"],
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
      technologies: ["React.js", "Tailwind CSS", "RESTful APIs", "JavaScript", "UI Architecture"],
    },
    {
      period: "2025 – Present",
      role: "Independent AI Engineer & Consultant",
      company: "Independent Practice",
      location: "Hyderabad & Remote",
      bullets: [
        "Architecting production-ready AI products (HlthOS, AI News Aggregator, TopicPilot) utilizing fine-tuned LLMs, Hybrid-RAG, and LangChain multi-agent workflows.",
        "Designing high-performance web and mobile interfaces using Next.js App Router, React Native, TypeScript, and Tailwind CSS.",
      ],
      technologies: ["LangChain", "PyTorch", "vLLM", "React Native", "PostgreSQL", "Next.js"],
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
      category: "AI & Machine Learning",
      items: [
        "Python (UV)",
        "PyTorch",
        "LangChain",
        "LlamaIndex",
        "Hugging Face (PEFT/Transformers)",
        "vLLM",
        "LLM APIs (OpenAI GPT-4o, Claude)",
        "ChromaDB",
        "Pinecone",
        "FAISS",
        "Hybrid-RAG",
        "Chunking & Embeddings",
        "Prompt Engineering",
      ],
    },
    frontendAndMobile: {
      category: "Frontend & Mobile Architecture",
      items: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React Native",
        "ReactJS",
        "Next.js (App Router)",
        "Redux Toolkit",
        "Tailwind CSS",
        "Context API",
        "HTML5 / CSS3",
      ],
    },
    backendAndApis: {
      category: "Backend & APIs",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "PostgreSQL",
        "SQLite",
        "MongoDB",
        "RESTful API Design",
        "Server-Side Routing",
        "Server-Sent Events (SSE)",
      ],
    },
    devOpsAndCloud: {
      category: "DevOps, Cloud & Automation",
      items: [
        "Docker",
        "GitHub Actions",
        "Git",
        "Linux",
        "Webshare Proxies",
        "UV",
        "Dockling",
        "Cloud Infrastructure",
      ],
    },
  },

  achievements: [
    {
      title: "MERN Stack Developer Cohort",
      issuer: "100xDevs (Harkirat Singh)",
      category: "Cohort",
      detail: "Intensive training in Full-Stack MERN, System Architecture, and open-source software engineering.",
      badge: "Completed",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      category: "Certification",
      detail: "Demonstrated competence in AWS cloud infrastructure, security models, IAM, and compute resources.",
      badge: "Certified",
    },
    {
      title: "Generative AI Essentials",
      issuer: "FreeCodeCamp",
      category: "Certification",
      detail: "Core concepts of transformer attention mechanisms, LLM fine-tuning, and prompt architectures.",
      badge: "Verified",
    },
    {
      title: "1st Place — 'Your Start Up Story'",
      issuer: "UDBAVA Club",
      category: "Startup Competition",
      detail: "Secured 1st place in the university pitching competition defending commercial feasibility and engineering design.",
      badge: "1st Place Winner",
    },
    {
      title: "2nd Place — UI Hackathon (Havoc PC Website)",
      issuer: "UI Hackathon Society",
      category: "Hackathon",
      detail: "Placed 2nd for creating the Havoc PC website, engineering a high-impact product layout under sprint constraints.",
      badge: "2nd Place",
    },
    {
      title: "Competitive Gaming Event Organizer (Leadership)",
      issuer: "University Event Society",
      category: "Leadership",
      detail: "Organized a successful competitive gaming tournament attended by almost 100 university participants.",
      badge: "Leadership Award",
    },
  ],

  hobbies: [
    "Competitive Powerlifting (Progressive Overload — Squat, Bench Press, Deadlift)",
    "Volleyball",
    "Podcasts",
    "Swimming",
    "Reading Technical & AI Research Blogs",
  ],
  credentials: [
    {
      id: "cred-01",
      title: "MERN Stack Developer Cohort",
      issuer: "100xDevs (Harkirat Singh)",
      category: "Cohort",
      year: "2024",
      detail: "Intensive training in Full-Stack MERN, System Architecture, and open-source software engineering.",
      status: "COMPLETED",
    },
    {
      id: "cred-02",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      category: "Certification",
      year: "2024",
      detail: "Demonstrated competence in AWS cloud infrastructure, security models, IAM, and compute resources.",
      status: "CERTIFIED",
    },
    {
      id: "cred-03",
      title: "Generative AI Essentials",
      issuer: "FreeCodeCamp",
      category: "Certification",
      year: "2024",
      detail: "Core concepts of transformer attention mechanisms, LLM fine-tuning, and prompt architectures.",
      status: "VERIFIED",
    },
    {
      id: "cred-04",
      title: "1st Place — 'Your Start Up Story'",
      issuer: "UDBAVA Club",
      category: "Award",
      year: "2023",
      detail: "Secured 1st place in the university pitching competition defending commercial feasibility and engineering design.",
      status: "CHAMPION",
    },
    {
      id: "cred-05",
      title: "2nd Place — UI Hackathon (Havoc PC Website)",
      issuer: "UI Hackathon Society",
      category: "Hackathon",
      year: "2023",
      detail: "Placed 2nd for creating the Havoc PC website, engineering a high-impact product layout under sprint constraints.",
      status: "2ND PLACE",
    },
  ],
};

export const PORTFOLIO_DATA = RESUME_DATA;
