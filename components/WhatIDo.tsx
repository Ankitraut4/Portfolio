"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  BrainCircuit,
  ServerCog,
  Boxes,
  Smartphone,
  CheckCircle2,
  Network,
} from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.5, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

type PillProps = { label: string };
const Pill = ({ label }: PillProps) => (
  <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 bg-white/80 dark:bg-white/5 backdrop-blur">
    {label}
  </span>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2">
    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
    <span className="text-sm leading-relaxed text-gray-800 dark:text-gray-300">
      {children}
    </span>
  </li>
);

const Deco = () => (
  <svg
    viewBox="0 0 400 300"
    className="h-40 w-auto md:h-48 lg:h-56 drop-shadow-sm"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
      <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#F43F5E" />
      </linearGradient>
    </defs>
    <rect x="20" y="30" width="180" height="110" rx="16" fill="url(#g1)" opacity="0.9" />
    <circle cx="290" cy="85" r="55" fill="url(#g2)" opacity="0.9" />
    <rect x="80" y="170" width="260" height="90" rx="18" fill="#0ea5e930" />
    <g fill="#111827" fillOpacity="0.18">
      <circle cx="60" cy="210" r="14" />
      <circle cx="110" cy="210" r="8" />
      <rect x="140" y="200" width="50" height="8" rx="4" />
    </g>
  </svg>
);

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="relative scroll-mt-20 py-14 md:py-20"
      aria-label="What I Do"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={item}
          className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          What I Do 🚀
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-700 dark:text-gray-300"
        >
          I engineer high-reliability backend, cloud, and AI systems — combining
          distributed infrastructure, automation, and SwiftUI front-ends into
          cohesive, production-grade platforms.
        </motion.p>

        <div className="mt-8 space-y-8">
          {/* Cloud Infrastructure */}
          <motion.div variants={item} className="grid items-center gap-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-6 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <Cloud className="h-6 w-6 text-sky-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Cloud Infrastructure & DevOps
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["AWS (EC2, Lambda, RDS, S3)", "Kubernetes", "Terraform", "Docker", "CloudWatch", "CI/CD (GitHub Actions, Jenkins)"].map(t => <Pill key={t} label={t} />)}
                </div>
                <ul className="mt-4 space-y-2">
                  <Bullet>Architected AWS workloads with Lambda, RDS, and Bedrock; optimized cost by 40%.</Bullet>
                  <Bullet>Implemented blue-green deployments and automated rollbacks via GitHub Actions.</Bullet>
                  <Bullet>Enhanced observability with structured logs and CloudWatch dashboards.</Bullet>
                  <Bullet>Reduced downtime by designing resilient, multi-AZ cloud environments.</Bullet>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Frontend Engineering */}
          <motion.div
            variants={item}
            className="grid items-center gap-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-6 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <Layout className="h-6 w-6 text-indigo-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Frontend Engineering & Web Platforms
                  </h3>
                </div>
          
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3 / SCSS",
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Angular",
                  ].map(t => (
                    <Pill key={t} label={t} />
                  ))}
                </div>
          
                <ul className="mt-4 space-y-2">
                  <Bullet>
                    Built scalable, responsive web applications with React, Next.js, and
                    Angular, focusing on performance, accessibility, and maintainability.
                  </Bullet>
                  <Bullet>
                    Developed modular UI components using TypeScript and SCSS, enforcing
                    strict typing and consistent design patterns.
                  </Bullet>
                  <Bullet>
                    Integrated frontend applications with REST APIs, handling
                    authentication flows, error states, and asynchronous data loading.
                  </Bullet>
                  <Bullet>
                    Improved page load and rendering performance using code splitting,
                    memoization, and modern ES6+ features.
                  </Bullet>
                </ul>
              </div>
            </div>
          </motion.div>


          {/* Backend Engineering */}
          <motion.div variants={item} className="grid items-center gap-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-6 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <Boxes className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Backend & Distributed Systems
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Golang", "Python", "Spring Boot", "Node.js", "FastAPI", "PostgreSQL", "DynamoDB", "Kafka/SNS/SQS"].map(t => <Pill key={t} label={t} />)}
                </div>
                <ul className="mt-4 space-y-2">
                  <Bullet>Built microservices handling 2M+ monthly requests with 98% uptime.</Bullet>
                  <Bullet>Designed gRPC APIs with rate limiting, load balancing, and idempotent processing.</Bullet>
                  <Bullet>Integrated Kafka & SQS for event-driven streaming pipelines.</Bullet>
                  <Bullet>Refactored legacy systems into modular, cloud-native services.</Bullet>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* AI / ML */}
          <motion.div variants={item} className="grid items-center gap-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-6 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-6 w-6 text-fuchsia-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Applied AI & ML Systems
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["PyTorch", "scikit-learn", "OpenCV", "LangChain", "RAG Pipelines", "LLMs (OpenAI API)"].map(t => <Pill key={t} label={t} />)}
                </div>
                <ul className="mt-4 space-y-2">
                  <Bullet>Integrated LLMs and RAG for image captioning and text retrieval pipelines.</Bullet>
                  <Bullet>Deployed ML inference services achieving 50 ms per-image latency.</Bullet>
                  <Bullet>Built data-driven dashboards with Streamlit & Matplotlib for monitoring model metrics.</Bullet>
                  <Bullet>Extended 3D Gaussian Splat segmentation with contrastive learning modules.</Bullet>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* iOS Development */}
          <motion.div variants={item} className="grid items-center gap-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-6 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-indigo-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    iOS Development
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["SwiftUI", "Combine", "Core Data", "REST API Integration"].map(t => <Pill key={t} label={t} />)}
                </div>
                <ul className="mt-4 space-y-2">
                  <Bullet>Developed diagnostic and log-visualization apps for internal DevOps tooling.</Bullet>
                  <Bullet>Built smooth UI interactions using SwiftUI and Combine state management.</Bullet>
                  <Bullet>Integrated backend APIs securely for authentication and data sync.</Bullet>
                  <Bullet>Published internal builds via TestFlight and improved bug triage speed by 25%.</Bullet>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* System Architecture */}
          <motion.div variants={item} className="grid items-center gap-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-6 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto,1fr]">
              <Deco />
              <div>
                <div className="flex items-center gap-3">
                  <Network className="h-6 w-6 text-amber-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Architecture & Reliability
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["System Design", "Observability", "CI/CD Pipelines", "Fault Tolerance", "Performance Tuning"].map(t => <Pill key={t} label={t} />)}
                </div>
                <ul className="mt-4 space-y-2">
                  <Bullet>Modeled distributed systems with resilience, latency budgets, and back-pressure handling.</Bullet>
                  <Bullet>Applied observability patterns (logs, metrics, traces) for production debugging.</Bullet>
                  <Bullet>Led cross-team design reviews and RFCs improving feature delivery velocity.</Bullet>
                  <Bullet>Mentored 7-member distributed engineering team on DevOps & clean code practices.</Bullet>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
