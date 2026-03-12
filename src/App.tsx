/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { 
  Moon, Sun, Download, ArrowRight, Linkedin, Github, 
  Instagram, Palette, ExternalLink, Layout, Type, 
  MousePointer2, Layers, Figma, PenTool, GitBranch,
  Sparkles, Grid, Activity, MonitorSmartphone, Network, User, Smartphone, Monitor,
  ClipboardCheck, Box, Mail, Phone, Search, Compass, Accessibility, Component
} from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, x, y, size = 24, duration = 10 }: { icon: any, delay: number, x: string, y: string, size?: number, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0, 0.15, 0.15, 0],
      y: [0, -40, 0],
      x: [0, 20, 0],
      rotate: [0, 10, -10, 0],
      scale: [0.8, 1, 0.8]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className="absolute pointer-events-none z-0"
    style={{ left: x, top: y }}
  >
    <Icon size={size} className="text-indigo-500/30 dark:text-indigo-500/40" strokeWidth={1} />
  </motion.div>
);

const services = [
  {
    title: "UX Research",
    icon: Search,
    description: "Deep user insights through interviews, heatmaps, and data analysis."
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Crafting beautiful, functional, and user-centric digital experiences."
  },
  {
    title: "Product Strategy",
    icon: Compass,
    description: "Aligning business goals with user needs for sustainable growth."
  },
  {
    title: "Usability Testing",
    icon: ClipboardCheck,
    description: "Validating designs with real users to ensure product success."
  },
  {
    title: "Design Systems",
    icon: Component,
    description: "Building scalable, consistent, and reusable component libraries."
  },
  {
    title: "Accessibility",
    icon: Accessibility,
    description: "Ensuring digital products are inclusive and usable for everyone."
  }
];

const DomainAnimation = () => (
  <div className="relative h-full w-full dark:bg-slate-950 bg-slate-50 flex flex-col items-center justify-center p-4 overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-[200px] h-8 bg-indigo-500/10 dark:bg-white/10 rounded-full border border-indigo-500/20 dark:border-white/20 flex items-center px-3 mb-4"
    >
      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse" />
      <div className="h-2 w-24 bg-indigo-500/20 dark:bg-white/20 rounded-full" />
    </motion.div>
    
    <div className="grid grid-cols-2 gap-2 w-full max-w-[240px]">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-2 flex flex-col items-center shadow-sm"
        >
          <div className="h-1.5 w-12 bg-indigo-400/40 rounded-full mb-2" />
          <div className="flex space-x-1 w-full justify-center">
            <div className="h-3 w-8 bg-emerald-500/20 rounded text-[6px] flex items-center justify-center text-emerald-400 border border-emerald-500/30">BUY</div>
            <div className="h-3 w-8 bg-rose-500/20 rounded text-[6px] flex items-center justify-center text-rose-400 border border-rose-500/30">SELL</div>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Decorative particles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ 
          y: [0, -100], 
          x: [0, Math.random() * 40 - 20],
          opacity: [0, 1, 0] 
        }}
        transition={{ 
          duration: 3 + Math.random() * 2, 
          repeat: Infinity, 
          delay: i * 0.5 
        }}
        className="absolute w-1 h-1 bg-indigo-500/40 rounded-full"
        style={{ bottom: -10, left: `${20 + i * 15}%` }}
      />
    ))}
  </div>
);

const HobbyAnimation = () => (
  <div className="relative h-full w-full dark:bg-indigo-950/20 bg-indigo-50 flex items-center justify-center overflow-hidden">
    <svg className="absolute inset-0 w-full h-full opacity-20">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500 dark:text-white"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    
    <div className="relative w-40 h-40">
      {/* Central Node */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
      >
        <Activity size={20} className="text-white" />
      </motion.div>
      
      {/* Connecting Nodes */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="absolute left-1/2 top-1/2"
          style={{ transform: `rotate(${angle}deg) translateY(-60px)` }}
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="w-8 h-8 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 flex items-center justify-center shadow-sm"
            style={{ transform: `rotate(-${angle}deg)` }}
          >
            {i === 0 && <Palette size={14} className="text-pink-400" />}
            {i === 1 && <Sparkles size={14} className="text-yellow-400" />}
            {i === 2 && <Layout size={14} className="text-emerald-400" />}
            {i === 3 && <Box size={14} className="text-blue-400" />}
            {i === 4 && <Network size={14} className="text-purple-400" />}
          </motion.div>
          
          {/* Connection Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-indigo-500 to-transparent origin-top"
          />
        </motion.div>
      ))}
    </div>
  </div>
);

const VolatilityAnimation = () => (
  <div className="relative h-full w-full dark:bg-black bg-slate-50 flex flex-col p-4 overflow-hidden">
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-2">
        <div className="w-8 h-3 bg-indigo-500/20 rounded border border-indigo-500/30" />
        <div className="w-12 h-3 bg-slate-200 dark:bg-white/5 rounded border border-slate-300 dark:border-white/10" />
      </div>
      <div className="text-[8px] font-mono text-emerald-600 dark:text-emerald-400 animate-pulse">$42,069.00</div>
    </div>
    
    <div className="flex-1 relative flex items-end space-x-1">
      {[...Array(12)].map((_, i) => {
        const height = 20 + Math.random() * 60;
        const isUp = Math.random() > 0.4;
        return (
          <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1, delay: i * 0.05 }}
              className={`w-full rounded-t-sm ${isUp ? 'bg-emerald-500/40 border-emerald-500/50' : 'bg-rose-500/40 border-rose-500/50'} border-x border-t`}
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              className={`w-[1px] h-4 ${isUp ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-rose-600 dark:bg-rose-500'}`} 
            />
          </div>
        );
      })}
      
      {/* Moving Line Chart Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          d="M 0 60 Q 40 20 80 50 T 160 30 T 240 70 T 320 40"
          fill="none"
          stroke="rgba(99, 102, 241, 0.6)"
          strokeWidth="2"
        />
      </svg>
    </div>
    
    <div className="mt-4 flex space-x-2">
      <div className="flex-1 h-6 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center text-[8px] font-bold text-emerald-500">CALL</div>
      <div className="flex-1 h-6 bg-rose-500/10 border border-rose-500/30 rounded flex items-center justify-center text-[8px] font-bold text-rose-500">PUT</div>
    </div>
  </div>
);

const projects = [
  {
    id: "01",
    title: "Domain Markt",
    tagline: "A clean, modern platform for discovering, comparing & managing domain names effortlessly.",
    role: "UI/UX Designer",
    timeline: "2024 – 2025",
    services: "Design System, Product Design",
    link: "https://dev.domainmarkt.io/",
    featured: true,
    animation: DomainAnimation
  },
  {
    id: "02",
    title: "HobbyMate",
    tagline: "Crafted intuitive navigation and interest-based discovery flows to enhance user engagement.",
    role: "Product Designer",
    timeline: "2024 – 2025",
    services: "Mobile App – Social Hobby Discovery Platform",
    link: "https://hobbymate.in/",
    featured: true,
    theme: "mobile",
    animation: HobbyAnimation
  },
  {
    id: "03",
    title: "PowerOfVolatility",
    tagline: "Built a minimal, high-clarity interface to visualize complex options flow in a simple, readable way.",
    role: "UI/UX Designer",
    timeline: "2024 – 2025",
    services: "Web Dashboard + Mobile App (Dark Mode)",
    link: "https://powerofvolatility.com/",
    featured: true,
    theme: "fintech",
    animation: VolatilityAnimation
  }
];

const tools = [
  { 
    name: "Figma", 
    logo: "https://cdn.svgporn.com/logos/figma.svg", 
    description: "Industry-standard collaborative interface design tool.",
    color: "#F24E1E"
  },
  { 
    name: "Adobe XD", 
    logo: "https://cdn.svgporn.com/logos/adobe-xd.svg", 
    description: "Powerful vector-based tool for UX/UI design and prototyping.",
    color: "#FF61F6"
  },
  { 
    name: "Framer", 
    logo: "https://cdn.svgporn.com/logos/framer.svg", 
    description: "Advanced prototyping tool for high-fidelity interactive designs.",
    color: "#0055FF"
  },
  { 
    name: "Canva", 
    logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg", 
    description: "Versatile design platform for quick social and marketing assets.",
    color: "#00C4CC"
  },
  { 
    name: "Adobe Photoshop", 
    logo: "https://cdn.svgporn.com/logos/adobe-photoshop.svg", 
    description: "The world's best imaging and graphic design software.",
    color: "#31A8FF"
  },
  { 
    name: "Adobe Illustrator", 
    logo: "https://cdn.svgporn.com/logos/adobe-illustrator.svg", 
    description: "Precision vector graphics for logos, icons, and illustrations.",
    color: "#FF9A00"
  },
  { 
    name: "Miro", 
    logo: "https://cdn.svgporn.com/logos/miro.svg", 
    description: "Collaborative online whiteboard for brainstorming and planning.",
    color: "#FFD02F"
  },
  { 
    name: "Jira", 
    logo: "https://cdn.svgporn.com/logos/jira.svg", 
    description: "Project management tool for agile product development teams.",
    color: "#0052CC"
  },
  { 
    name: "Mixpanel", 
    logo: "https://cdn.svgporn.com/logos/mixpanel.svg", 
    description: "Product analytics to track user interactions and behavior.",
    color: "#7856FF"
  },
  { 
    name: "UserTesting", 
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 40v20c0 11.046 8.954 20 20 20s20-8.954 20-20V40h-10v20c0 5.523-4.477 10-10 10s-10-4.477-10-10V40H30z' fill='%23231F20'/%3E%3Ccircle cx='50' cy='26' r='8' fill='%2300FF85'/%3E%3C/svg%3E", 
    description: "Platform for getting rapid customer feedback on any digital experience.",
    color: "#00FF85"
  }
];

interface ServiceCardProps {
  service: any;
  index: number;
  isDarkMode: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative h-full w-full overflow-hidden rounded-[32px] border ${
        isDarkMode 
          ? 'border-white/10 dark:bg-white/[0.02]' 
          : 'border-indigo-500/30 bg-white/90 hover:border-indigo-500/5'
      } p-6 lg:p-8 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(99,102,241,0.2)] backdrop-blur-2xl flex flex-col`}
    >
      {/* Smooth Liquid Shine Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ x: "-150%", skewX: -25 }}
          whileHover={{ x: "250%" }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent w-full h-full"
        />
      </div>

      {/* Subtle Index Number for "Value" */}
      <div className="absolute top-6 right-8 text-[40px] font-black text-indigo-500/5 select-none transition-all duration-500 group-hover:text-indigo-500/10 group-hover:scale-110">
        {(index + 1).toString().padStart(2, '0')}
      </div>

      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/15 transition-all duration-700" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-500 shadow-lg group-hover:shadow-indigo-500/40"
        >
          <service.icon 
            size={28} 
            strokeWidth={1.5} 
            className="text-indigo-500 group-hover:text-white transition-colors duration-500" 
          />
        </motion.div>
        
        <h3 className={`mb-3 text-lg lg:text-xl font-black tracking-tight bg-clip-text text-transparent transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' 
            : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'
        }`}>
          {service.title}
        </h3>
        
        <p className="text-xs lg:text-sm leading-relaxed dark:text-slate-400 text-slate-500 font-medium opacity-100 dark:opacity-70 group-hover:opacity-100 transition-all duration-300">
          {service.description}
        </p>

        {/* Bottom Decorative Element */}
        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-[2px] w-6 rounded-full bg-indigo-500/20 group-hover:w-12 group-hover:bg-indigo-500 transition-all duration-500" />
            <div className="h-[2px] w-1 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500 transition-all duration-500" />
          </div>
          <div className="flex items-center space-x-1 text-[9px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-500/60 group-hover:text-indigo-500 transition-all duration-500">
            <span>Core</span>
            <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
            <span>Service</span>
          </div>
        </div>
      </div>

      {/* Inner Rim Light on Hover */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[32px] transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

interface ToolCardProps {
  tool: any;
  index: number;
}

const ToolCard: React.FC<ToolCardProps & { isDarkMode: boolean }> = ({ tool, index, isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className={`group relative flex flex-col items-center p-4 lg:p-5 rounded-[24px] ${isDarkMode ? 'glass' : 'bg-white shadow-md'} border border-indigo-500/20 dark:border-white/5 hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all duration-500 h-full overflow-hidden text-center shadow-lg`}
    >
      {/* Background Glow on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${tool.color}15 0%, transparent 70%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        {/* Logo Container */}
        <div className="relative mb-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative z-10 h-12 w-12 lg:h-14 lg:w-14 flex items-center justify-center rounded-xl border bg-white border-white/10 group-hover:border-indigo-500/30 transition-all shadow-inner"
          >
            <img 
              src={tool.logo} 
              alt={tool.name} 
              className="h-8 w-8 lg:h-10 lg:w-10 object-contain transition-all duration-300 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Logo Glow Effect */}
          <div 
            className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
            style={{ backgroundColor: tool.color }}
          />
        </div>

        <h3 className={`text-sm lg:text-base font-black tracking-tight mb-1 transition-all duration-300 bg-clip-text text-transparent ${
          isDarkMode 
            ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' 
            : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'
        }`}>
          {tool.name}
        </h3>
        
        <p className={`text-[9px] lg:text-[10px] leading-tight ${isDarkMode ? 'text-slate-400 opacity-60' : 'text-slate-600 opacity-100'} font-medium group-hover:opacity-100 transition-all duration-300 line-clamp-2`}>
          {tool.description}
        </p>

        {/* Bottom Indicator */}
        <div className="mt-auto pt-3">
          <div className="h-1 w-8 rounded-full bg-slate-200 dark:bg-white/5 group-hover:bg-indigo-500 transition-all duration-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
        </div>
      </div>

      {/* Inner Rim Light on Hover */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[24px] transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

interface WorkCardProps {
  project: any;
  index: number;
}

const WorkCard: React.FC<WorkCardProps & { isDarkMode: boolean }> = ({ project, index, isDarkMode }) => {
  const isFintech = project.theme === "fintech" && isDarkMode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -10 }}
      transition={{ 
        initial: { duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] },
        hover: { duration: 0.4, ease: "easeOut" }
      }}
      className={`group relative flex flex-col overflow-hidden rounded-[32px] border transition-all duration-500 ${
        isFintech 
          ? 'bg-gradient-to-br from-slate-900 via-navy-950 to-black border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:border-indigo-500/40 hover:shadow-[0_0_60px_rgba(99,102,241,0.2)]' 
          : `${isDarkMode ? 'glass' : 'bg-white shadow-xl shadow-indigo-500/5'} border-indigo-500/30 dark:border-white/5 dark:bg-gradient-to-br dark:from-white/5 dark:to-transparent hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/15`
      } p-6 h-full w-full`}
    >
      {/* Background Decoration */}
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[60px] transition-all duration-700 ${
        isFintech ? 'bg-indigo-500/20 group-hover:bg-indigo-500/30' : 'bg-indigo-500/5 group-hover:bg-indigo-500/10'
      }`} />
      
      {/* Animation Section */}
      <div className={`relative mb-6 overflow-hidden rounded-2xl aspect-[16/10] border ${isFintech ? 'border-white/5' : 'border-indigo-500/10 dark:border-white/5'} shadow-xl ${project.title === 'Domain Markt' ? 'bg-white/[0.03]' : 'bg-white/5'}`}>
        <project.animation />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className={`absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg font-black text-xs ${isFintech ? 'glass border-white/10 text-white' : 'bg-indigo-500 text-white shadow-lg'}`}>
          {project.id}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <span className={`text-[9px] font-mono font-bold tracking-[0.3em] ${isFintech ? 'text-indigo-400' : 'text-indigo-600 dark:text-indigo-400/80'}`}>
              CASE STUDY
            </span>
            <div className={`h-px flex-1 ${isFintech ? 'bg-indigo-500/20' : 'bg-slate-200 dark:bg-white/5'}`} />
          </div>
          
          <h3 className={`text-xl md:text-2xl font-black tracking-tight mb-2 transition-all duration-300 bg-clip-text text-transparent ${
            isFintech 
              ? 'bg-gradient-to-br from-white to-slate-400' 
              : isDarkMode 
                ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' 
                : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'
          }`}>
            {project.title}
          </h3>
          
          <p className={`text-xs md:text-sm ${isFintech ? 'text-slate-400' : 'dark:text-slate-400 text-slate-500'} font-medium leading-relaxed mb-6 line-clamp-3`}>
            {project.tagline}
          </p>

          <div className={`grid grid-cols-2 gap-4 pt-4 border-t ${isFintech ? 'border-indigo-500/20' : 'border-indigo-500/10 dark:border-white/5'}`}>
            <div>
              <p className="text-[8px] uppercase tracking-widest text-slate-500 dark:text-slate-600 font-bold mb-1">Role</p>
              <p className={`text-[10px] font-bold ${isFintech ? 'text-indigo-200' : 'text-slate-900 dark:text-slate-400'}`}>{project.role}</p>
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-widest text-slate-500 dark:text-slate-600 font-bold mb-1">Timeline</p>
              <p className={`text-[10px] font-bold ${isFintech ? 'text-indigo-200' : 'text-slate-900 dark:text-slate-400'}`}>{project.timeline}</p>
            </div>
          </div>
        </div>

        {project.link && (
          <div className="mt-6 flex items-center justify-between">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-[10px] font-bold transition-all flex items-center space-x-2 ${
                isFintech 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                  : 'bg-indigo-500/10 dark:bg-indigo-500 text-indigo-600 dark:text-white shadow-lg shadow-indigo-500/10 dark:shadow-indigo-500/20 hover:bg-indigo-500/20 dark:hover:bg-indigo-600'
              }`}
            >
              <span>Live Site</span>
              <ExternalLink className="h-2.5 w-2.5" />
            </motion.a>
            
            <motion.a 
              whileHover={{ x: 3 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-slate-900 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <span>Details</span>
              <ArrowRight className="h-2.5 w-2.5" />
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ContactCard = ({ icon: Icon, label, value, href, delay, isDarkMode }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    if (label === 'Email') {
      e.preventDefault();
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleCopy}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group relative p-8 rounded-3xl ${isDarkMode ? 'glass' : 'bg-white shadow-md'} border border-indigo-500/20 dark:border-white/10 dark:bg-white/5 bg-white/90 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:shadow-indigo-500/10`}
    >
      <div className="mb-4 p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">{label}</span>
      <span className={`text-lg md:text-xl font-black transition-all duration-300 bg-clip-text text-transparent ${
        isDarkMode 
          ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' 
          : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'
      }`}>
        {copied ? 'Copied!' : value}
      </span>
      
      {label === 'Email' && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <ClipboardCheck size={14} className="text-indigo-500" />
        </div>
      )}
    </motion.a>
  );
};

const SocialLink = ({ icon: Icon, href, label }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    className="flex flex-col items-center space-y-2 group"
  >
    <div className="h-12 w-12 flex items-center justify-center rounded-2xl border border-indigo-500/20 dark:border-white/10 dark:bg-white/5 bg-white shadow-sm text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 group-hover:border-indigo-500/30 transition-all">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
  </motion.a>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('About');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navLinks = ['About', 'Services', 'Works', 'Tools', 'Contact'];

  return (
    <div className={`relative min-h-screen w-full transition-colors duration-700 font-sans ${isDarkMode ? 'bg-navy-950 text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      {/* Background Elements */}
      <div className="noise" />
      <div className="grid-bg fixed inset-0 z-0 opacity-20" />
      
      {/* Floating Micro Design Elements */}
      <FloatingIcon icon={Layout} delay={0} x="12%" y="15%" size={40} duration={15} />
      <FloatingIcon icon={Type} delay={2} x="85%" y="12%" size={32} duration={18} />
      <FloatingIcon icon={MousePointer2} delay={4} x="8%" y="65%" size={28} duration={14} />
      <FloatingIcon icon={Layers} delay={1} x="88%" y="70%" size={44} duration={20} />
      <FloatingIcon icon={PenTool} delay={3} x="75%" y="55%" size={36} duration={16} />
      <FloatingIcon icon={Palette} delay={5} x="22%" y="75%" size={30} duration={19} />
      <FloatingIcon icon={MonitorSmartphone} delay={1.5} x="45%" y="8%" size={38} duration={22} />
      <FloatingIcon icon={Smartphone} delay={3.5} x="5%" y="40%" size={34} duration={17} />
      <FloatingIcon icon={Monitor} delay={0.5} x="92%" y="35%" size={42} duration={25} />
      <FloatingIcon icon={Grid} delay={2.5} x="35%" y="85%" size={26} duration={13} />
      <FloatingIcon icon={Figma} delay={4.5} x="65%" y="88%" size={32} duration={21} />
      <FloatingIcon icon={Network} delay={1} x="18%" y="45%" size={24} duration={15} />
      <FloatingIcon icon={User} delay={2.5} x="55%" y="25%" size={22} duration={19} />

      {/* Additional Subtle Background Animations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, "-100vh"],
              opacity: [0, 0.1, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 15 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="absolute w-px h-20 bg-gradient-to-b from-indigo-500/20 to-transparent"
          />
        ))}
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Radial Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          background: isDarkMode 
            ? `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`
            : `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 60%)`
        }}
      />

      {/* Custom Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed z-50 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]"
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 150, mass: 0.8 }}
      />

      {/* Enhanced Global Background Floating Elements */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Large Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Abstract UI Shapes */}
        <motion.div 
          animate={{ 
            y: [0, -60, 0],
            x: [0, 40, 0],
            rotate: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-96 h-96 border border-indigo-500/30 rounded-[4rem] rotate-12"
        />
        <motion.div 
          animate={{ 
            y: [0, 70, 0],
            x: [0, -50, 0],
            rotate: [0, -25, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[15%] right-[10%] w-[30rem] h-[30rem] border border-purple-500/20 rounded-full"
        />
        
        {/* Floating Icons representing UI/UX Tools & Concepts */}
        <div className="absolute inset-0">
          {[
            { Icon: Layout, top: '15%', left: '20%', delay: 0, size: 48 },
            { Icon: Smartphone, top: '70%', left: '10%', delay: 3, size: 40 },
            { Icon: MousePointer2, top: '35%', left: '85%', delay: 1.5, size: 36 },
            { Icon: Palette, top: '80%', left: '75%', delay: 4.5, size: 44 },
            { Icon: Layers, top: '10%', left: '80%', delay: 2.5, size: 42 },
            { Icon: Grid, top: '90%', left: '25%', delay: 5, size: 38 },
            { Icon: Monitor, top: '45%', left: '5%', delay: 1, size: 52 },
            { Icon: PenTool, top: '25%', left: '90%', delay: 6, size: 34 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                y: [0, -50, 0],
                x: [0, Math.sin(i) * 20, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 12 + i * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: item.delay 
              }}
              style={{ top: item.top, left: item.left }}
              className="absolute text-indigo-500/50 drop-shadow-[0_0_10px_rgba(99,102,241,0.2)]"
            >
              <item.Icon size={item.size} strokeWidth={1} />
            </motion.div>
          ))}
        </div>

        {/* Wireframe Grid Pattern */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.15]">
          <pattern id="global-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500" />
            <circle cx="0" cy="0" r="1" fill="currentColor" className="text-indigo-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#global-grid)" />
        </svg>
      </div>

      {/* Navigation Bar */}
      <div className="fixed top-5 left-0 z-40 w-full px-6 md:px-10">
        <nav className={`mx-auto flex max-w-fit items-center space-x-6 md:space-x-8 px-6 py-2.5 rounded-full ${isDarkMode ? 'glass' : 'bg-white shadow-lg'} border-slate-300 dark:border-white/5 shadow-2xl shadow-indigo-500/20 dark:shadow-black/20`}>
          {/* Center Links */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveTab(link)}
                className="group relative px-1 py-0.5 text-[10px] md:text-[11px] font-bold uppercase tracking-wider transition-colors"
              >
                <span className={`transition-all duration-300 ${activeTab === link ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-500 group-hover:text-indigo-400'}`}>
                  {link}
                </span>
                {activeTab === link && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-indigo-500 dark:bg-indigo-400"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500/20 dark:border-white/10 bg-white/80 dark:bg-white/5 transition-all hover:bg-white/10 hover:rotate-12"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -40, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 40, scale: 0.5 }}
                >
                  <Moon className="h-3.5 w-3.5 text-indigo-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -40, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 40, scale: 0.5 }}
                >
                  <Sun className="h-3.5 w-3.5 text-amber-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'About' && (
          <motion.main
            key="about"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 pt-32 pb-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`${isDarkMode ? 'glass' : 'bg-white'} relative flex flex-col items-center max-w-5xl w-full py-6 md:py-10 px-8 md:px-16 rounded-[40px] text-center overflow-hidden shadow-2xl shadow-indigo-500/10 dark:shadow-black/40 group border border-indigo-500/20 dark:border-white/10`}
            >
              {/* Liquid Glass Shine Effect on Border Strokes - Dark Mode Only */}
              {isDarkMode && (
                <div className="absolute inset-0 rounded-[40px] border border-white/10 pointer-events-none overflow-hidden z-20">
                  <motion.div 
                    animate={{ 
                      x: ['-100%', '200%'],
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "linear",
                      repeatDelay: 2
                    }}
                    className="absolute inset-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] blur-md"
                  />
                </div>
              )}

              {/* Eye Cooling Gradient Animation - Dark Mode Only */}
              {isDarkMode && (
                <motion.div 
                  animate={{ 
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 pointer-events-none"
                />
              )}
              
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-5 flex items-center space-x-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                </span>
                <span>Available for new projects</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="mb-5 text-3xl font-black tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`block bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'}`}
                >
                  UI/UX Design & Product Experience Studio
                </motion.span>
              </h1>

              {/* Statement Text */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-indigo-500 dark:text-slate-400 md:text-xl"
              >
                We design intuitive, conversion-focused digital products.
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.button
                    onClick={() => setActiveTab('Works')}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center space-x-3 rounded-full px-8 py-3.5 text-sm font-bold transition-all bg-indigo-500 hover:bg-indigo-400 text-white shadow-xl shadow-indigo-500/25"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
                    <span>View Our Works</span>
                  </motion.button>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-6">
                  {[
                    { icon: Linkedin, url: 'https://www.linkedin.com/company/sajaltech/', label: 'LinkedIn' }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl glass border-indigo-500/20 dark:border-white/10 dark:text-slate-400 text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all shadow-lg"
                    >
                      {typeof social.icon === 'string' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" /><path d="M3 12l4.5 0" /><path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" /><path d="M16 6l3 0" />
                        </svg>
                      ) : (
                        <social.icon className="h-4 w-4" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.main>
        )}

        {activeTab === 'Works' && (
          <motion.main
            key="works"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex h-screen w-full overflow-hidden pt-20 pb-12 px-6 md:px-20 flex-col"
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-end justify-between"
            >
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-indigo-500 mb-2">Portfolio</h2>
                <h1 className={`text-3xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'}`}>Selected Works</h1>
              </div>
              <div className="hidden md:block text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em] font-medium">
                Case Studies & Experiments
              </div>
            </motion.div>

            {/* Works Grid */}
            <div className="flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                {projects.map((project, index) => (
                  <WorkCard key={project.title} project={project} index={index} isDarkMode={isDarkMode} />
                ))}
              </div>
            </div>
          </motion.main>
        )}

        {activeTab === 'Services' && (
          <motion.main
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex h-screen w-full overflow-hidden pt-20 pb-12 px-6 md:px-20 flex-col"
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 flex items-end justify-between"
            >
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-indigo-500 mb-2">Capabilities</h2>
                <h1 className={`text-3xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'}`}>Strategic Design</h1>
              </div>
              <div className="hidden md:block text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em] font-medium">
                Precision & Purpose
              </div>
            </motion.div>

            {/* Split Layout - Static (No Scroll) */}
            <div className="flex-1 min-h-0 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto w-full">
                {services.map((service, index) => (
                  <div key={service.title} className="h-[180px] lg:h-[220px]">
                    <ServiceCard service={service} index={index} isDarkMode={isDarkMode} />
                  </div>
                ))}
              </div>
            </div>
          </motion.main>
        )}

        {activeTab === 'Tools' && (
          <motion.main
            key="tools"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex h-screen w-full overflow-hidden pt-20 pb-12 px-6 md:px-20 flex-col"
          >
            {/* Section Specific Background Animation */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-navy-950 via-indigo-950/30 to-black opacity-50' : 'bg-slate-50 opacity-100'}`} />
              
              {/* Glowing Particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0, 
                    x: Math.random() * 100 + "%", 
                    y: Math.random() * 100 + "%" 
                  }}
                  animate={{ 
                    y: [null, Math.random() * -100 - 50],
                    opacity: isDarkMode ? [0, 0.4, 0] : [0, 0.2, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 10 + Math.random() * 10, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: Math.random() * 10
                  }}
                  className={`absolute w-1 h-1 ${isDarkMode ? 'bg-indigo-400' : 'bg-indigo-200'} rounded-full blur-[1px]`}
                />
              ))}
            </div>

            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 mb-6 lg:mb-10 flex items-end justify-between"
            >
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-indigo-500 mb-2">Tech Stack</h2>
                <h1 className={`text-3xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'}`}>Our Toolkit</h1>
              </div>
              <div className="hidden md:block text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em] font-medium">
                Professional Software & Hardware
              </div>
            </motion.div>

            {/* Tools Grid - Optimized for Single Section (No Scroll) */}
            <div className="flex-1 min-h-0 flex flex-col justify-center relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-6 max-w-6xl mx-auto w-full">
                {tools.map((tool, index) => (
                  <div key={tool.name} className="h-[160px] lg:h-[180px]">
                    <ToolCard tool={tool} index={index} isDarkMode={isDarkMode} />
                  </div>
                ))}
              </div>
            </div>
          </motion.main>
        )}

        {activeTab === 'Contact' && (
          <motion.main
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 md:px-20 pt-32 pb-40"
          >
            {/* Section Specific Background Animation */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)]' : 'bg-slate-50'}`} />
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: isDarkMode ? [0.05, 0.12, 0.05] : [0.02, 0.05, 0.02]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] ${isDarkMode ? 'bg-indigo-500/5' : 'bg-indigo-500/2'} rounded-full blur-[150px]`}
              />
            </div>

            <div className="max-w-6xl w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                {/* Left Section: Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-left"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center space-x-3 mb-6"
                  >
                    <div className="h-px w-8 bg-indigo-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.8em] text-indigo-500">Connection</span>
                  </motion.div>
                  
                  <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-clip-text text-transparent mb-8 leading-[0.9] text-balance ${isDarkMode ? 'bg-gradient-to-br from-white via-slate-200 to-slate-400' : 'bg-gradient-to-br from-[#625FFF] via-[#8B5CF6] to-[#D946EF]'}`}>
                    Let's <span className="text-indigo-500 italic serif">Work</span> Together.
                  </h1>
                  
                  <p className="text-slate-500 dark:text-slate-400 max-w-md text-base md:text-lg font-medium leading-relaxed opacity-100 dark:opacity-70">
                    I'm currently available for new projects and design collaborations. 
                    Let's build something exceptional.
                  </p>
                </motion.div>

                {/* Right Section: Contact Cards */}
                <div className="grid grid-cols-1 gap-8">
                  <ContactCard 
                    icon={Mail} 
                    label="Email Address" 
                    value="contact@sajaltech.com" 
                    href="mailto:contact@sajaltech.com"
                    delay={0.3}
                    isDarkMode={isDarkMode}
                  />
                  <ContactCard 
                    icon={Phone} 
                    label="Phone Number" 
                    value="+91 98765 43210" 
                    href="tel:+919876543210"
                    delay={0.4}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      <AnimatePresence>
        {activeTab === 'Contact' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-0 flex w-full items-center justify-center px-8 z-40"
          >
            <div className="flex items-center space-x-6 px-6 py-3 rounded-full glass border-indigo-500/20 dark:border-white/10 shadow-2xl pointer-events-auto backdrop-blur-2xl">
              <div className="flex items-center space-x-6">
                <motion.a
                  href="https://www.linkedin.com/company/sajaltech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-slate-700 dark:text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
