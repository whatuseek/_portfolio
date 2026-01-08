
import React from 'react';

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  images?: string[]; // Updated from 'image' to 'images' array
  demoLink?: string;
  githubLink?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ContactLink {
  label?: string; // Made optional
  value?: string; // Made optional
  href: string;
  icon: React.ReactNode;
}
