"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Trophy, 
  MapPin, 
  Award, 
  Cpu, 
  Cloud, 
  Layout, 
  Gamepad2,
  CheckCircle2,
  Calendar,
  Sparkles,
  X,
  ExternalLink,
  BookOpen,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

interface DossierRecord {
  id: string;
  type: "academic" | "certification" | "honor";
  dossierCode: string;
  title: string;
  issuer: string;
  score: string;
  scoreLabel: string;
  year: string;
  loc: string;
  badge: string;
  summary: string;
  highlights: string[];
  skills: string[];
  icon: React.ReactNode;
}

export default function TactileFolderSection() {
  const [hoveredFolder, setHoveredFolder] = useState<"edu" | "cert" | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<DossierRecord | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedRecord(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Education Records
  const educationData: DossierRecord[] = [
    {
      id: "btech",
      type: "academic",
      dossierCode: "ARCHIVE // EDU-01",
      title: "B.Tech in Computer Science & Engineering",
      issuer: "Malla Reddy University",
      score: "8.06 / 10",
      scoreLabel: "Cumulative CGPA",
      year: "2020 — 2024",
      loc: "Hyderabad, Telangana, India",
      badge: "Degree Conferred",
      summary:
        "Rigorous 4-year undergraduate specialization focused on Distributed Systems, Advanced Algorithm Engineering, Operating Systems, Machine Learning Architectures, and Full-Stack Engineering.",
      highlights: [
        "Major Capstone: Real-time Multi-Agent AI diagnostic & synthesis framework.",
        "Core Coursework: Operating Systems, Database Management (PostgreSQL/NoSQL), Compilers, Distributed Networks.",
        "Graduated with Distinction: 8.06 / 10 CGPA across 8 rigorous technical semesters.",
      ],
      skills: ["Distributed Systems", "Algorithms", "PostgreSQL", "Next.js", "AI Pipelines", "System Design"],
      icon: <GraduationCap className="w-5 h-5 text-coral" />,
    },
    {
      id: "inter",
      type: "academic",
      dossierCode: "ARCHIVE // EDU-02",
      title: "Intermediate Education (MPC Stream)",
      issuer: "Narayana Junior College",
      score: "873 / 1000",
      scoreLabel: "Board Examination Score",
      year: "2018 — 2020",
      loc: "Secunderabad, Telangana, India",
      badge: "High Honors",
      summary:
        "Intensive senior secondary specialization in Higher Mathematics, Classical Mechanics & Physics, and Organic & Inorganic Chemistry under the Telangana State Board of Intermediate Education.",
      highlights: [
        "Advanced Calculus, Differential Equations, and Matrix Theory.",
        "Electromagnetism, Optics, Thermodynamics, and Atomic Physics.",
        "Scored 87.3% overall with top-bracket marks in pure mathematics.",
      ],
      skills: ["Higher Mathematics", "Calculus & Linear Algebra", "Classical Physics", "Analytical Logic"],
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
    },
    {
      id: "ssc",
      type: "academic",
      dossierCode: "ARCHIVE // EDU-03",
      title: "Secondary School Certificate (SSC)",
      issuer: "Narayana e-Techno School",
      score: "9.3 / 10",
      scoreLabel: "Cumulative CGPA",
      year: "2015 — 2018",
      loc: "Hyderabad, Telangana, India",
      badge: "Top 5% Merit",
      summary:
        "Foundational STEM schooling with an emphasis on analytical reasoning, algorithmic problem solving, Olympiad mathematics, and foundational science laboratories.",
      highlights: [
        "Consistent Academic Honor Roll recipient across all assessment quarters.",
        "Active participant in regional science exhibitions and mathematics quizzes.",
        "Completed Board examinations with a prestigious 9.3 / 10 CGPA.",
      ],
      skills: ["Foundational STEM", "Mathematical Reasoning", "Scientific Logic", "Technical Communication"],
      icon: <Award className="w-5 h-5 text-emerald-400" />,
    },
  ];

  // Certifications & Achievements
  const certificationData: DossierRecord[] = [
    {
      id: "100xdevs",
      type: "certification",
      dossierCode: "ACCRED // 100X-01",
      title: "100xDevs Full Stack & Web3 Cohort",
      issuer: "100xDevs (Mentored by Harkirat Singh)",
      score: "Full Stack Mastery",
      scoreLabel: "Cohort Certification",
      year: "2023 — 2024",
      loc: "Remote // Bengaluru, IN",
      badge: "Full Stack & Web3",
      summary:
        "Intensive engineering cohort covering end-to-end production architecture: Next.js, TurboRepo, Docker, Redis queues, WebSockets, PostgreSQL with Prisma ORM, and decentralized smart contract integrations.",
      highlights: [
        "Built production distributed systems with low-latency pub/sub pipelines.",
        "Deployed microservices with Docker containerization and CI/CD pipelines.",
        "Engineered real-time collaboration engines and asynchronous messaging backends.",
      ],
      skills: ["Next.js", "Docker", "PostgreSQL", "Prisma", "Redis Pub/Sub", "WebSockets", "DevOps"],
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
    },
    {
      id: "aws",
      type: "certification",
      dossierCode: "ACCRED // AWS-02",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      score: "Cloud Certified",
      scoreLabel: "Official Certification",
      year: "2023",
      loc: "Amazon Web Services Training",
      badge: "AWS Certified",
      summary:
        "Validated fundamental cloud literacy and operational excellence across the AWS Cloud ecosystem, including compute, networking, security policies, and fault-tolerant architecture.",
      highlights: [
        "Demonstrated architectural mastery of EC2, S3, RDS, DynamoDB, and VPC networking.",
        "Implemented secure identity governance via IAM policies, KMS encryption, and CloudWatch telemetry.",
        "Designed cost-optimized, highly available multi-zone cloud topologies.",
      ],
      skills: ["AWS Cloud", "EC2 & S3", "IAM Security", "VPC Networking", "Lambda Serverless", "CloudWatch"],
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
    },
    {
      id: "genai",
      type: "certification",
      dossierCode: "ACCRED // FCC-03",
      title: "Generative AI Essentials Certification",
      issuer: "FreeCodeCamp & DeepLearning Foundations",
      score: "GenAI Certified",
      scoreLabel: "Professional Certification",
      year: "2024",
      loc: "Global Remote",
      badge: "AI & Transformers",
      summary:
        "Deep technical certification on Large Language Model mechanics, fine-tuning methodologies, Retrieval-Augmented Generation (RAG) orchestration, and vector embedding indexing.",
      highlights: [
        "Engineered LangChain and LangGraph autonomous workflows with tool-calling capabilities.",
        "Configured Pinecone and pgvector indexing pipelines for real-time document query synthesis.",
        "Evaluated model hallucinations and optimized prompt latency across production endpoints.",
      ],
      skills: ["LLM Architectures", "RAG Pipelines", "Vector Databases", "Prompt Engineering", "Autonomous Agents"],
      icon: <Award className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: "pitching",
      type: "honor",
      dossierCode: "HONOR // UDB-04",
      title: "1st Place Pitching Champion",
      issuer: "UDBAVA Club ('Your Start Up Story')",
      score: "1st Place (Gold)",
      scoreLabel: "Statewide Pitch Victory",
      year: "2023",
      loc: "Hyderabad, India",
      badge: "1st Place Champion",
      summary:
        "Secured 1st Place overall against 25+ university venture teams by pitching an AI-native workflow automation architecture to a panel of venture capitalists and industry founders.",
      highlights: [
        "Presented comprehensive financial model, GTM strategy, and technical viability blueprint.",
        "Built and live-demoed a functional AI interactive MVP in front of the judge panel.",
        "Awarded First Prize trophy and accelerator incubation mentorship.",
      ],
      skills: ["Product Strategy", "Technical Pitching", "Business Modeling", "AI MVP Prototyping"],
      icon: <Trophy className="w-5 h-5 text-amber-300" />,
    },
    {
      id: "hackathon",
      type: "honor",
      dossierCode: "HONOR // HVC-05",
      title: "UI Hackathon Runner-Up",
      issuer: "Havoc PC Build Website Competition",
      score: "2nd Place (Silver)",
      scoreLabel: "Hackathon Finalist",
      year: "2023",
      loc: "National Hackathon",
      badge: "2nd Place Award",
      summary:
        "Designed and implemented a high-performance 3D interactive hardware configurator allowing custom PC enthusiasts to assemble, test thermal clearances, and budget components dynamically.",
      highlights: [
        "Engineered smooth 60fps micro-animations and component compatibility verification algorithms.",
        "Selected as 2nd Place Winner out of 40+ competitor submissions for visual and interactive fidelity.",
        "Recognized by judges for exceptional component hierarchy and typography.",
      ],
      skills: ["UI/UX Architecture", "Tailwind CSS", "Framer Motion", "Real-time State Systems"],
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
    },
    {
      id: "esports",
      type: "honor",
      dossierCode: "HONOR // ESP-06",
      title: "Lead Esports Organizer & Director",
      issuer: "University Championship League",
      score: "100+ Attendees",
      scoreLabel: "Tournament Leadership",
      year: "2022 — 2023",
      loc: "Hyderabad, India",
      badge: "Event Leadership",
      summary:
        "Orchestrated large-scale collegiate gaming championships, coordinating double-elimination brackets, live broadcasting feeds, shoutcaster synchronization, and sponsorship arrangements.",
      highlights: [
        "Managed on-site network operations, low-latency LAN configurations, and team communications.",
        "Directed a cross-functional crew of 15 members across stage tech, streaming, and referee duties.",
        "Achieved 100% on-time match starts and zero technical outages over a 3-day competition.",
      ],
      skills: ["Team Leadership", "Live Broadcasting", "Event Production", "Crisis Management"],
      icon: <Gamepad2 className="w-5 h-5 text-rose-400" />,
    },
  ];

  return (
    <section id="about" className="w-full py-32 px-6 md:px-12 bg-[#050505] text-white flex flex-col items-center overflow-hidden border-t border-neutral-900 select-none">
      {/* Section Header */}
      <div className="w-full max-w-5xl mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase">
            SECTION 07 // PHYSICAL ARCHIVES
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-1 text-white">
            Education &amp; Honors
          </h2>
        </div>
        <p className="text-xs font-sans font-medium text-neutral-400 max-w-xs tracking-wide">
          Hover or tap any folder to fan out files. <span className="text-coral font-medium">Click any document to inspect full credentials.</span>
        </p>
      </div>

      {/* Two Folders Layout Stage */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-36 lg:gap-40 pt-28 pb-20">
        
        {/* ================= FOLDER 01: EDUCATION ================= */}
        <div
          className="relative flex flex-col items-center group cursor-pointer"
          onMouseEnter={() => setHoveredFolder("edu")}
          onMouseLeave={() => setHoveredFolder(null)}
          onClick={() => setHoveredFolder(hoveredFolder === "edu" ? null : "edu")}
        >
          {/* Back Flap / Folder Body Back (Rich Archival Brown Leather / Kraft Paper) */}
          <div className="relative w-[340px] sm:w-[410px] lg:w-[440px] h-64 sm:h-72 bg-gradient-to-b from-[#4d2f1b] via-[#3c2314] to-[#2a170d] rounded-2xl border border-[#7d4e2d]/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,200,150,0.15)] flex items-start justify-between p-5">
            {/* Top Tab Cutout */}
            <div className="absolute -top-4 left-6 w-36 h-6 bg-gradient-to-b from-[#5c3a23] to-[#452917] rounded-t-xl border-t border-x border-[#8f5831]/70 flex items-center justify-center shadow-md">
              <span className="text-[10px] font-sans font-medium text-amber-200/90 uppercase tracking-widest font-medium">
                DOSSIER-01 // EDU
              </span>
            </div>
            {/* Brass eyelet accent */}
            <div className="w-3.5 h-3.5 rounded-full border-2 border-amber-600/50 bg-[#1f1008] shadow-inner mt-1 ml-1 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-amber-400/40" />
            </div>
            <GraduationCap className="w-6 h-6 text-amber-500/70 group-hover:text-amber-300 transition-colors" />
          </div>

          {/* Emerging Document Sheets (Fanned Stack - Wider & Taller) */}
          <div className="absolute top-3 w-[310px] sm:w-[370px] lg:w-[400px]">
            {educationData.map((item, idx) => {
              const isHovered = hoveredFolder === "edu";
              const offsets = [
                { y: -195, r: -3, z: 20 },
                { y: -130, r: 2, z: 15 },
                { y: -65, r: -1, z: 10 },
              ];
              const target = offsets[idx];

              return (
                <motion.div
                  key={item.id}
                  initial={{ y: 0, rotate: 0, opacity: 0 }}
                  animate={{
                    y: isHovered ? target.y : 0,
                    rotate: isHovered ? target.r : 0,
                    opacity: isHovered ? 1 : 0,
                    zIndex: target.z,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 22, delay: idx * 0.04 }}
                  whileHover={{ 
                    scale: 1.03, 
                    borderColor: "rgba(255, 170, 80, 0.7)",
                    boxShadow: "0 14px 35px -5px rgba(255, 110, 30, 0.35)",
                    zIndex: 40 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRecord(item);
                  }}
                  className="absolute left-0 right-0 p-4 rounded-xl bg-neutral-900/95 border border-white/20 shadow-2xl backdrop-blur-md space-y-2 cursor-pointer group/card transition-colors hover:bg-neutral-800/95"
                >
                  <div className="flex justify-between items-center text-[10px] font-sans font-medium text-neutral-400">
                    <span>
                      {item.year}
                    </span>
                    <span className="text-neutral-300 font-semibold text-[11px] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {item.score}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-white tracking-tight leading-snug group-hover/card:text-coral transition-colors">
                      {item.issuer}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover/card:text-coral transition-all flex-shrink-0 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                  </div>
                  <p className="text-xs text-neutral-300 line-clamp-1">{item.title}</p>
                  <div className="flex items-center justify-between pt-1 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-[10px] font-sans font-medium text-neutral-400">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      <span>{item.loc.split(",")[0]}</span>
                    </div>
                    <span className="text-[10px] font-sans font-medium text-coral font-medium underline opacity-0 group-hover/card:opacity-100 transition-opacity">
                      Click to inspect dossier ↗
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Front Pocket Lip (Archival Manila / Kraft Envelope Pocket) */}
          <div className="absolute bottom-0 w-[340px] sm:w-[410px] lg:w-[440px] h-44 sm:h-48 bg-gradient-to-t from-[#201108] via-[#351e11] to-[#4a2b18] rounded-b-2xl rounded-t-xl border-b border-x border-[#734425]/70 border-t border-[#a16439]/50 shadow-[0_-6px_22px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,210,170,0.2)] flex flex-col justify-between p-6 z-30">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-sans font-medium tracking-widest text-amber-300/80 uppercase font-semibold">
                ACADEMIC FOUNDATION
              </span>
              <span className="text-[10px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-[#1b0d06]/80 border border-amber-600/30 text-amber-200">
                3 Verified Records
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-amber-50 tracking-tight">
                Academic Degrees &amp; Grades
              </h3>
              <p className="text-xs font-sans font-medium text-amber-200/70 flex items-center gap-1.5">
                <span>Click any record to inspect full dossier</span>
                <span className="text-coral">→</span>
              </p>
            </div>
          </div>
        </div>

        {/* ================= FOLDER 02: CERTIFICATIONS & HONORS ================= */}
        <div
          className="relative flex flex-col items-center group cursor-pointer"
          onMouseEnter={() => setHoveredFolder("cert")}
          onMouseLeave={() => setHoveredFolder(null)}
          onClick={() => setHoveredFolder(hoveredFolder === "cert" ? null : "cert")}
        >
          {/* Back Flap / Folder Body Back (Rich Archival Brown Leather / Kraft Paper) */}
          <div className="relative w-[340px] sm:w-[410px] lg:w-[440px] h-64 sm:h-72 bg-gradient-to-b from-[#4d2f1b] via-[#3c2314] to-[#2a170d] rounded-2xl border border-[#7d4e2d]/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,200,150,0.15)] flex items-start justify-between p-5">
            {/* Top Tab Cutout */}
            <div className="absolute -top-4 left-6 w-36 h-6 bg-gradient-to-b from-[#5c3a23] to-[#452917] rounded-t-xl border-t border-x border-[#8f5831]/70 flex items-center justify-center shadow-md">
              <span className="text-[10px] font-sans font-medium text-amber-200/90 uppercase tracking-wider font-medium">
                DOSSIER-02 // HONORS
              </span>
            </div>
            {/* Brass eyelet accent */}
            <div className="w-3.5 h-3.5 rounded-full border-2 border-amber-600/50 bg-[#1f1008] shadow-inner mt-1 ml-1 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-amber-400/40" />
            </div>
            <Trophy className="w-6 h-6 text-amber-500/70 group-hover:text-amber-300 transition-colors" />
          </div>

          {/* Emerging Document Sheets (Fanned Stack - Wider & Taller) */}
          <div className="absolute top-3 w-[310px] sm:w-[370px] lg:w-[400px]">
            {certificationData.map((item, idx) => {
              const isHovered = hoveredFolder === "cert";
              const offsets = [
                { y: -230, r: 3, z: 25 },
                { y: -185, r: -2, z: 20 },
                { y: -140, r: 4, z: 15 },
                { y: -95, r: -3, z: 10 },
                { y: -55, r: 2, z: 8 },
                { y: -15, r: -1, z: 5 },
              ];
              const target = offsets[idx];

              return (
                <motion.div
                  key={item.id}
                  initial={{ y: 0, rotate: 0, opacity: 0 }}
                  animate={{
                    y: isHovered ? target.y : 0,
                    rotate: isHovered ? target.r : 0,
                    opacity: isHovered ? 1 : 0,
                    zIndex: target.z,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 22, delay: idx * 0.03 }}
                  whileHover={{ 
                    scale: 1.03, 
                    borderColor: "rgba(255, 170, 80, 0.7)",
                    boxShadow: "0 14px 35px -5px rgba(255, 110, 30, 0.35)",
                    zIndex: 40 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRecord(item);
                  }}
                  className="absolute left-0 right-0 p-3.5 rounded-xl bg-neutral-900/95 border border-white/20 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 cursor-pointer group/card transition-colors hover:bg-neutral-800/95"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 group-hover/card:border-coral/50 transition-colors">
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <h4 className="text-xs font-medium text-white truncate group-hover/card:text-coral transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[10px] font-sans font-medium text-neutral-400 truncate">
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] font-sans font-medium px-2.5 py-0.5 rounded bg-white/10 text-neutral-300">
                      {item.badge}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover/card:text-coral transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Front Pocket Lip (Archival Manila / Kraft Envelope Pocket) */}
          <div className="absolute bottom-0 w-[340px] sm:w-[410px] lg:w-[440px] h-44 sm:h-48 bg-gradient-to-t from-[#201108] via-[#351e11] to-[#4a2b18] rounded-b-2xl rounded-t-xl border-b border-x border-[#734425]/70 border-t border-[#a16439]/50 shadow-[0_-6px_22px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,210,170,0.2)] flex flex-col justify-between p-6 z-30">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-sans font-medium tracking-widest text-amber-300/80 uppercase font-semibold">
                ACCREDITATIONS &amp; WINS
              </span>
              <span className="text-[10px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-[#1b0d06]/80 border border-amber-600/30 text-amber-200">
                {certificationData.length} Verified Records
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-amber-50 tracking-tight">
                Certifications &amp; Hackathons
              </h3>
              <p className="text-xs font-sans font-medium text-amber-200/70 flex items-center gap-1.5">
                <span>Click any record to inspect full dossier</span>
                <span className="text-coral">→</span>
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= MODAL DOSSIER POPUP (HIGH-CLARITY INSPECTION VIEW) ================= */}
      <AnimatePresence>
        {selectedRecord && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-text">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedRecord(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-2xl bg-[#111114] border border-white/20 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Top Archival Header Bar */}
              <div className="px-6 py-4 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-300 uppercase">
                    {selectedRecord.dossierCode}
                  </span>
                  <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-white/10 text-neutral-300 uppercase">
                    {selectedRecord.type}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors border border-white/10"
                  aria-label="Close dossier modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Title & Badge */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                      {selectedRecord.title}
                    </h3>
                    <span className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-coral/10 border border-coral/30 text-coral font-medium">
                      {selectedRecord.badge}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base text-neutral-300 font-medium">
                    {selectedRecord.issuer}
                  </div>
                </div>

                {/* Metric / Performance Box */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-900/60 border border-white/10">
                  <div>
                    <div className="text-[10px] font-sans font-medium uppercase text-neutral-400">
                      {selectedRecord.scoreLabel}
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-white mt-0.5">
                      {selectedRecord.score}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-medium uppercase text-neutral-400">
                      Timeline / Year
                    </div>
                    <div className="text-sm sm:text-base font-sans font-medium text-white mt-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{selectedRecord.year}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-medium uppercase text-neutral-400">
                      Jurisdiction / Location
                    </div>
                    <div className="text-sm font-sans font-medium text-neutral-300 mt-1 flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                      <span className="truncate">{selectedRecord.loc}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Summary */}
                <div className="space-y-2">
                  <h4 className="text-xs font-sans font-medium uppercase tracking-widest text-neutral-400">
                    Dossier Summary
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {selectedRecord.summary}
                  </p>
                </div>

                {/* Verified Highlights */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-sans font-medium uppercase tracking-widest text-neutral-400">
                    Key Milestones &amp; Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedRecord.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acquired Competencies / Skills */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-sans font-medium uppercase tracking-widest text-neutral-400">
                    Verified Competencies &amp; Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRecord.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-sans font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer / Verification Seal */}
              <div className="px-6 py-4 bg-neutral-900/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans font-medium text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-neutral-300">Verified Portfolio Credential — Munigonda Kiran</span>
                </div>
                <div className="text-[11px] text-neutral-500">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">ESC</kbd> or click outside to dismiss
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
