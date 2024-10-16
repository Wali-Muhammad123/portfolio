"use client";

import React from "react";
import {
  Instagram,
  Github,
  MessageCircle,
  Code,
  Layout,
  FileText,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SkillsChart } from "@/components/ui/piechart";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1729] text-white font-sans">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Wali M.</h1>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/documentation" className="hover:text-blue-300">
            Documentation
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} className="hover:text-blue-300" />
            </Link>
            <Link
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} className="hover:text-blue-300" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="hover:text-blue-300" />
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex p-8">
        <aside className="w-64 space-y-2">
          <Button
            variant="secondary"
            className="w-full justify-start bg-blue-400 text-white hover:bg-blue-500"
          >
            Overview
          </Button>
          <div>
            <Button
              variant="ghost"
              className="w-full justify-between text-gray-400 hover:text-white"
              onClick={() => console.log("Recipes clicked")}
            >
              Recipes
              <ChevronDown size={16} />
            </Button>
          </div>
          <div>
            <Button
              variant="ghost"
              className="w-full justify-between text-gray-400 hover:text-white"
            >
              Blog
              <ChevronDown size={16} />
            </Button>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white"
          >
            Contact
          </Button>
        </aside>

        <main className="flex-1 ml-8 space-y-12">
          <section>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-2xl mb-4">
              I'm Wali, a software {"{"}
              <span className="text-blue-400">engineer</span>
              {"}"}
            </p>
            <p className="text-gray-400 mb-8">
              As a Senior Software Engineer with over 4 years of hands-on
              experience, I specialize in building robust, scalable end-to-end
              SaaS solutions that drive business impact. My expertise spans
              full-stack development, where I design and implement efficient
              architectures, from backend services to user-friendly frontends. I
              thrive in fast-paced environments, delivering high-quality,
              scalable software that meets business needs. With a deep
              understanding of cloud technologies, microservices, and modern
              software practices, I am committed to creating solutions that
              empower businesses to scale and innovate seamlessly.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <StatCard number="4+" text="Years of experience" />
              <StatCard number="15+" text="Completed projects" />
              <StatCard number="99%" text="Client satisfaction" />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              My Services <span className="text-blue-400">___.</span>
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <ServiceCard
                icon={<Code size={24} />}
                title="Backend Engineering"
                description="Lorem ipsum dolor amet, consec adipiscing elit, eiusmod tempor incididunt ut en labore."
              />
              <ServiceCard
                icon={<Layout size={24} />}
                title="Mobile Application Development"
                description="Lorem ipsum dolor amet, consec adipiscing elit, eiusmod tempor incididunt ut en labore."
              />
              <ServiceCard
                icon={<FileText size={24} />}
                title="Cloud Architecture"
                description="Lorem ipsum dolor amet, consec adipiscing elit, eiusmod tempor incididunt ut en labore."
              />
              <ServiceCard
                icon={<FileText size={24} />}
                title="DevOps"
                description="Lorem ipsum dolor amet, consec adipiscing elit, eiusmod tempor incididunt ut en labore."
              />
              <ServiceCard
                icon={<FileText size={24} />}
                title="AI/ML Engineering and Solutions"
                description="Lorem ipsum dolor amet, consec adipiscing elit, eiusmod tempor incididunt ut en labore."
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              My Skills <span className="text-blue-400">___.</span>
            </h2>
            <div className="space-y-4">
              <SkillsChart />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="bg-[#1c2a4e] rounded-lg p-6">
      <p className="text-4xl font-bold text-blue-400 mb-2">{number}</p>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1c2a4e] rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function SkillBar({ skill, progress }: { skill: string; progress: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="h-2 bg-[#1c2a4e]" />
    </div>
  );
}
