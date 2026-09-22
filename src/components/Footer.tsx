import React from 'react';
import { Shield, Terminal, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBriefing: () => void;
  isLightMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBriefing, isLightMode }) => {
  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors duration-200 text-xs ${
        isLightMode
          ? 'bg-[#fcfdfe] border-[#e5e7eb] text-[#6b7280]'
          : 'bg-[#090a0d] border-[#1f2229] text-[#717885]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div
                className={`w-6 h-6 rounded-sm flex items-center justify-center font-mono text-[10px] font-semibold border ${
                  isLightMode
                    ? 'bg-[#111827] text-white border-[#111827]'
                    : 'bg-[#16181d] text-[#ededed] border-[#292e3a]'
                }`}
              >
                CL
              </div>
              <span className="font-semibold tracking-tight text-white text-sm">
                ClosemindLabs
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              The private AI operating layer for companies that want to own their intelligence.
              We deploy inside your infrastructure, connect to your data and systems, and run governed
              agents that complete real work.
            </p>
            <div className="font-mono text-[11px] flex items-center gap-2 pt-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Air-Gap Verified • Zero External Telemetry Egress</span>
            </div>
          </div>

          {/* Architecture Links */}
          <div className="md:col-span-2 space-y-2.5 font-mono">
            <div className="text-white text-[11px] font-semibold uppercase tracking-wider">
              Architecture
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  System Boundary
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">
                  Zero-Copy Connectors
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-white transition-colors">
                  OPA Policy Engine
                </a>
              </li>
              <li>
                <a href="#deployment" className="hover:text-white transition-colors">
                  Deployment Topologies
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Security */}
          <div className="md:col-span-2 space-y-2.5 font-mono">
            <div className="text-white text-[11px] font-semibold uppercase tracking-wider">
              Security
            </div>
            <ul className="space-y-2">
              <li>
                <span className="text-[#9ca3af]">SOC 2 Type II</span>
              </li>
              <li>
                <span className="text-[#9ca3af]">ISO 27001</span>
              </li>
              <li>
                <span className="text-[#9ca3af]">HIPAA BAA Ready</span>
              </li>
              <li>
                <span className="text-[#9ca3af]">FIPS 140-3 Level 3</span>
              </li>
            </ul>
          </div>

          {/* Engagement */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white text-[11px] font-mono font-semibold uppercase tracking-wider">
              Enterprise Access
            </div>
            <p className="text-xs leading-relaxed">
              Schedule an infrastructure evaluation and threat-model review for your enterprise VPC.
            </p>
            <button
              type="button"
              id="footer-briefing-cta"
              onClick={onOpenBriefing}
              className={`w-full py-2 px-3 rounded font-mono text-xs border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                isLightMode
                  ? 'bg-white border-[#e5e7eb] hover:bg-[#f9fafb] text-[#111827]'
                  : 'bg-[#15171e] border-[#292e3a] hover:bg-[#1a1e27] text-white'
              }`}
            >
              <span>Request Technical Briefing</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#1f2229] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} ClosemindLabs, Inc. All rights reserved. Sovereign AI Infrastructure.
          </div>
          <div className="flex items-center space-x-4">
            <span>Deterministic Runtime</span>
            <span>•</span>
            <span>mTLS 1.3</span>
            <span>•</span>
            <span>OpenTelemetry</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
