import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import factchecker from "@/public/factchecker.png";
import f1 from "@/public/f1.png";
import dock from "@/public/dock.png";
import uni from "@/public/uni.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;


import { LuBriefcase } from "react-icons/lu";
import { table } from "console";

export const experiencesData = [
  {
    title: "Software Engineer II",
    location: "PTC — Remote (Boston, MA)",
    date: "Feb 2026 – Present",
    description: [
      "Own design and delivery of Go-based distributed services on AWS with 99%+ availability.",
      "Architected event-driven serverless systems enabling scalable, fault-tolerant backend workloads.",
      "Built production observability stack → reduced MTTR ~30% and improved reliability.",
      "Led blue-green CI/CD rollout and cloud optimization → cut incidents ~40% and saved ~$1K/month.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Software Engineer",
    location: "Citi — United States",
    date: "Jan 2025 – Sep 2025",
    description: [
      "Engineered resilient Spring Boot microservices for high-volume financial transactions.",
      "Designed Kafka-driven real-time processing pipelines for system decoupling.",
      "Implemented idempotency and fault-tolerance patterns across services.",
      "Reduced database latency by ~25% through query optimization and indexing.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Software Engineer P1",
    location: "LTIMindtree — Pune, India",
    date: "Sep 2022 – Dec 2023",
    description: [
      "Built Spring Boot microservices handling 2M+ requests/month with 98% uptime.",
      "Developed versioned APIs supporting 30K+ daily transactions.",
      "Improved Kafka/SNS/SQS throughput 30–35% via messaging optimization.",
      "Reduced production defects by ~40% through integration automation.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Software Developer",
    location: "Zentek Infosoft — India",
    date: "May 2021 – Aug 2022",
    description: [
      "Developed Java/Spring Boot backend services for enterprise workflow systems.",
      "Designed REST APIs backed by PostgreSQL with performance-focused tuning.",
      "Contributed to containerization and cloud migration initiatives.",
    ],
    icon: React.createElement(LuBriefcase),
  },
] as const;


export const projectsData = [
  {
  title: "3D Gaussian Splat Segmentation (Built on Meta's EgoLifter)",
  description: "Enhanced Meta’s EgoLifter with SAM2 and MLP-based 3DGS embeddings for stable 3D video segmentation. Trained on Project Aria data using PyTorch Lightning and WandB.",
  tags: [
    "Python",
    "PyTorch Lightning",
    "3D Gaussian Splatting",
    "Computer Vision",
    "SAM2",
    "MLP Embedding",
    "Contrastive Learning",
    "WandB",
    "uv Package Manager",
    "Project Aria Dataset",
  ],
  imageUrl: factchecker, // replace with your image variable
  githubUrl:
    "https://github.com/Ankitraut4/3D-Gaussian-Splat-Segmentation-Built-on-Meta-s-EgoLifter-model-",
  liveUrl: "", // add if you later host a viewer or demo
},
  {
  title: "Hospital Reception Service",
  description:
"Developed a full-stack hospital portal with AngularJS and Spring Boot to streamline doctor-patient management. Integrated RESTful APIs and MySQL for CRUD operations with responsive UI and embedded Tomcat deployment.",
  tags: [
    "Java",
    "Spring Boot",
    "AngularJS",
    "REST API",
    "MySQL",
    "Tomcat Server",
    "Maven",
    "Full-Stack Development",
    "CRUD Operations",
  ],
  imageUrl: factchecker, // replace with your actual imported image
  githubUrl: "https://github.com/Ankitraut4/Hospital-Reception-Service",
  liveUrl: "", // optional if you deploy the app
},
   {
  title: "Voice-to-Insights Pipeline for Air Traffic Operations",
  description:
"A full-stack pipeline that transforms ATC audio into searchable transcripts and real-time operational insights, featuring modular backend processing and an interactive analytics dashboard.",
  tags: [
    "Python",
    "Speech-to-Text (Whisper / Vosk / Azure)",
    "Audio Processing (pydub, librosa)",
    "NLP (spaCy, Transformers)",
    "Streamlit",
    "Pandas",
    "NumPy",
  ],
  imageUrl: factchecker, // replace with your actual imported image
  githubUrl: "https://github.com/Ankitraut4/Voice-to-Insights-Pipeline-for-Air-Traffic-Operations",
  liveUrl: "", // optional if you deploy the app
},
 {
  title: "NLP-Powered SQL Query Generation System",
  description:
"Built an NLP-to-SQL chatbot fine-tuned on the BART Transformer to translate text into SQL queries. Integrated with SQLite and deployed via Gradio for real-time query execution with fuzzy schema matching and multi-CSV support.",
  tags: [
    "Python",
    "NLP",
    "BART Transformer",
    "Hugging Face",
    "Gradio",
    "SQLite",
    "Text-to-SQL",
    "Machine Learning",
    "Regex & Fuzzy Matching",
    "Data Query Automation",
  ],
  imageUrl: factchecker, // replace with your actual imported image
  githubUrl:
    "https://github.com/Ankitraut4/NLP-Powered-SQL-Query-Generation-System-for-Interactive-Database-Querying",
  liveUrl:
    "https://huggingface.co/spaces/Rushikesh-S-Ware/NLP-SQL-Transformer",
},
   {
  title: "DNS Cache Poisoning & Defence Via DNSSEC Validation",
  description:
"Implements real DNS cache poisoning and DNSSEC validation using live packet sniffing and Wireshark-based analysis to verify attack success and defense effectiveness.",
  tags: [
    "Python",
    "Flask",
    "React",
    "Docker & Docker Compose",
    "BIND9 (DNS Server)",
    "DNS Cache Poisoning",
    "DNSSEC",
    "Wireshark",
    "TCPDump",
  ],
  imageUrl: factchecker, // replace with your imported image asset
  githubUrl: "https://github.com/Ankitraut4/DNS-CACHE-POISONING-DEFENCE-VIA-DNSSEC-VALIDATION",
  liveUrl: "", // optional — you can host a simple demo if needed
},
  {
  title: "Agentic Orchestration Framework for Multi-Tool AI",
  description:
"Built an agentic AI platform on Snowflake Cortex that uses LLM-based planning to route natural-language requests across RAG, Text2SQL, Python, and SQL tools, enabling multi-step, parallel workflows for data analysis, automation, and developer-focused use cases.",
  tags: [
    "Python",
  "Agentic AI",
  "LLM Orchestration",
  "Multi-Agent Systems",
  "Snowflake Cortex",
  "Async Programming",
  "RAG",
  "Workflow Automation",
  "Parallel Execution",
  "Multi-Tool Integration",
  ],
  imageUrl: factchecker, // replace with your imported image asset
  githubUrl: "https://github.com/Ankitraut4/Agentic-Orchestration-Framework-for-Multi-Tool-AI",
  liveUrl: "", // optional — you can host a simple demo if needed
},
  {
  title: "Pacman Game",
  description:
"Implemented a Perceptron-based classifier from scratch using NumPy for digit and Pacman datasets. Added CLI support for training and testing, with feature-weight visualization to highlight model interpretability and algorithmic depth.",
  tags: [
    "Python",
    "Machine Learning",
    "Perceptron Algorithm",
    "Linear Model",
    "Classification",
    "NumPy",
    "CLI Application",
    "Feature Engineering",
    "Model Evaluation",
  ],
  imageUrl: factchecker, // replace with your imported image asset
  githubUrl: "https://github.com/Ankitraut4/Pacman",
  liveUrl: "", // optional — you can host a simple demo if needed
},

  {
  title: "Smart Contract Party Highlighter for Microsoft Word",
  description:
"Built a rule-based NLP add-in for Microsoft Word using TypeScript and Office.js to detect and highlight contracting parties. Leveraged regex, heuristic text parsing, and alias mapping for offline, privacy-safe document analysis.",
  tags: [
    "TypeScript",
    "NLP",
    "Regex",
    "Office.js",
    "Microsoft Word Add-in",
    "Heuristic Text Processing",
    "Rule-Based AI",
    "Webpack",
    "Document Automation",
  ],
  imageUrl: factchecker, // replace with your imported image asset
  githubUrl: "https://github.com/Ankitraut4/Smart-Contract-Party-Highlighter-for-Microsoft-Word",
  liveUrl: "", // (optional) can add a product demo video or doc, add-in store link
},
  {
  title: "FaceSense – Intelligent Face Detection System",
  description:
"Developed a face detection system in Java using OpenCV’s LBP Cascade Classifier for real-time face recognition and visualization. Utilized matrix operations and feature extraction to draw bounding boxes and count faces efficiently.",
  tags: [
    "Java",
    "OpenCV",
    "Computer Vision",
    "LBP Cascade Classifier",
    "Image Processing",
    "Feature Extraction",
    "Face Detection",
    "Object Detection",
    "Machine Learning Fundamentals",
  ],
  imageUrl: dock,
  githubUrl: "https://github.com/Ankitraut4/FaceSense-Intelligent-Face-Detection-System",
  liveUrl: "", // optional if you later host a sample demo
},
  {
  title: "Relational-to-MongoDB Data Migration Using Mongo-Syphon",
  description: "Implemented a relational-to-MongoDB data migration prototype using the MongoSyphon engine, focusing on schema mapping, batch ingestion, and document modeling.",
  tags: [
    "Java",
"MongoDB",
"PostgreSQL",
"ETL",
"Relational-to-NoSQL Migration",
"Schema Mapping",
"Batch Processing",
"Document Modeling",
"Data Validation",

  ],
  imageUrl: factchecker, // replace with your image variable
  githubUrl: "https://github.com/Ankitraut4/Relational-to-MongoDB-Data-Migration-Using-Mongo-Syphon",
  liveUrl: "", // add if you later host a viewer or demo
},
  {
  title: "AWS Data Landing Zone Implementation (CDK + Control Tower) ",
  description: "Implemented a multi-account AWS data landing zone using AWS CDK and Control Tower, applying AWS Organizations, SCP guardrails, secure VPC baselines, least-privilege IAM access, and centralized logging to support compliant, production-ready cloud environments.",
  tags: [
        "AWS",
    "AWS CDK",
    "AWS Control Tower",
    "Infrastructure as Code",
    "Multi-Account AWS",
    "Cloud Security",
    "Compliance & Governance",
  ],
  imageUrl: factchecker, // replace with your actual imported image
  githubUrl: "https://github.com/Ankitraut4/AWS-Data-Landing-Zone-Implementation-CDK-Control-Tower-",
  liveUrl: "", // optional if you deploy the app
},
  {
    title: "Loopify",
    description:
      "Loopify is a modern music web application built with React, Tailwind CSS, Redux, and RapidAPI, offering a seamless experience for music lovers.",
    tags: ["React", "Redux", "Tailwind", "RapidAPI"],
    imageUrl: wordanalyticsImg,                // or keep `uni` if you prefer
    githubUrl: "",
    liveUrl: "https://loopify.vercel.app",     // e.g., "https://loopify.vercel.app"
  },
] as const;

export const educationData = [
  {
    title: "Master's in Computer Science",
    institution: "George Mason University",
    location: "Fairfax, VA",
    grade: "3.67/4.0 GPA",
    date: "2024 - 2025",
  },
  {
    title: "Bachelor in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    grade: "3.72/4.0 GPA",
    date: "2018 - 2022",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
