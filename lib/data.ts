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
    title: "Full-Stack Engineer & Cloud Infrastructure Lead",
    location: "YesTech Corp — Remote (USA)",
    date: "Feb 2025 – Present",
    description: [
      "Re-architected AI image-generation backend (Go + Python on AWS Athena, DynamoDB, S3, Lambda) → cut latency 25% and raised reliability 40%.",
      "Built typed SDKs and observability stack (CloudWatch + Bedrock metrics) powering 500+ AI workflows/month with automated rollbacks.",
      "Reduced AWS cost by ≈ $900/month via cross-region caching and Terraform-based infrastructure-as-code.",
      "Mentored 7 engineers on CI/CD pipelines and incident post-mortems, improving deployment stability 45%.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Software Engineer P1",
    location: "LTIMindtree Limited — Pune, India",
    date: "Jun 2022 – Jan 2024",
    description: [
      "Designed and operated distributed Go/Spring Boot microservices handling 2M+ requests/month @ 98% uptime with rate limiting and load balancing.",
      "Integrated Kafka/SQS event pipelines achieving +35% throughput and exactly-once delivery semantics.",
      "Delivered multi-tenant API versioning + contract testing → zero breaking changes across 30k transactions/day.",
      "Automated CI/CD (Jenkins + Docker + Terraform) reducing deployment failures 40%.",
      "Authored RFCs and led architecture reviews increasing release velocity 15%.",
    ],
    icon: React.createElement(LuBriefcase),
  },
  {
    title: "Java Full-Stack Developer Intern",
    location: "LTIMindtree Limited — Pune, India",
    date: "Feb 2022 – May 2022",
    description: [
      "Shipped Spring Boot + Angular features across 5 production releases; optimized PostgreSQL schema (−120 ms p95 latency).",
      "Added in-memory caching layer supporting 2k+ concurrent users with 99.8% success rate.",
      "Automated hospital reception workflows (450+ daily appointments) → −20% check-in time and −15% data-entry errors.",
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
  liveUrl: "", // (optional) can add a product demo video or doc add-in store link
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
  liveUrl: "", // optional if you later host sample demo
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
