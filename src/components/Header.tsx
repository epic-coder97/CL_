import React from 'react';
import { ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface HeaderProps {
  onOpenBriefing: () => void;
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBriefing, isLightMode, onToggleTheme }) => {
  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-200 ${
        isLightMode
          ? 'bg-[#ffffff]/90 border-[#e5e7eb] text-[#111827]'
          : 'bg-[#0c0d0e]/90 border-[#222429] text-[#ededed]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center space-x-3">
          <a
            href="#hero"
            id="brand-logo-link"
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <div
              className={`w-7 h-7 rounded-sm flex items-center justify-center border font-mono text-xs font-semibold tracking-tighter transition-all ${
                isLightMode
                  ? 'bg-[#111827] text-white border-[#111827]'
                  : 'bg-[#16181c] text-[#f3f4f6] border-[#2e323b] group-hover:border-[#4b5563]'
              }`}
            >
              CL
            </div>
            <span className="font-semibold tracking-tight text-base sm:text-lg flex items-center gap-1.5">
              <span>ClosemindLabs</span>
            </span>
          </a>

          {/* System Kernel Pill Indicator */}
          <div
            className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono border ml-3 ${
              isLightMode
                ? 'bg-[#f3f4f6] text-[#374151] border-[#e5e7eb]'
                : 'bg-[#15171c] text-[#9ca3af] border-[#262933]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Kernel 2.4.0</span>
            <span className="text-[#6b7280]">/</span>
            <span>Zero-Egress</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs sm:text-sm font-medium">
          <a
            href="#architecture"
            id="nav-link-architecture"
            className="hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
          >
            Architecture
          </a>
          <a
            href="#governance"
            id="nav-link-governance"
            className="hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
          >
            Governance Engine
          </a>
          <a
            href="#systems"
            id="nav-link-systems"
            className="hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
          >
            Zero-Copy Mesh
          </a>
          <a
            href="#comparison"
            id="nav-link-comparison"
            className="hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
          >
            Comparison
          </a>
          <a
            href="#deployment"
            id="nav-link-deployment"
            className="hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
          >
            Deployment
          </a>
        </nav>

        {/* Actions: Theme Toggle + Request Briefing */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            id="theme-toggle-button"
            onClick={onToggleTheme}
            title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            className={`px-2.5 py-1.5 rounded border text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
              isLightMode
                ? 'border-[#e5e7eb] hover:bg-[#f3f4f6] text-[#4b5563]'
                : 'border-[#262933] hover:bg-[#181a20] text-[#9ca3af]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isLightMode ? 'Light' : 'Terminal'}</span>
          </button>

          <button
            type="button"
            id="header-cta-briefing"
            onClick={onOpenBriefing}
            className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-medium tracking-tight transition-all cursor-pointer flex items-center gap-1.5 border shadow-xs ${
              isLightMode
                ? 'bg-[#111827] text-white border-[#111827] hover:bg-[#1f2937]'
                : 'bg-[#f3f4f6] text-[#0f1115] border-[#f3f4f6] hover:bg-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Request Briefing</span>
          </button>
        </div>
      </div>
    </header>
  );
};
