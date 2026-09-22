import React, { useState } from 'react';
import { Copy, Check, Lock, Database, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBriefing: () => void;
  isLightMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBriefing, isLightMode }) => {
  const [copied, setCopied] = useState(false);
  const command = 'helm install closemindlabs/kernel --set egress.mode=isolated --set airgap=true';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 border-b transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="opacity-90">Enterprise Enclave & Governed Agent Architecture</span>
        </div>

        {/* Primary Idea Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto">
          The private AI operating layer for companies that want to{' '}
          <span className="underline decoration-[#4b5563] underline-offset-8 decoration-2">
            own their intelligence
          </span>
          .
        </h1>

        {/* Sub-headline directly from user prompt */}
        <p
          className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 ${
            isLightMode ? 'text-[#4b5563]' : 'text-[#9ca3af]'
          }`}
        >
          We deploy AI inside your infrastructure, connect it directly to your data and systems,
          and run governed agents that complete real work.
        </p>

        {/* Call to actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            type="button"
            id="hero-primary-cta"
            onClick={onOpenBriefing}
            className={`w-full sm:w-auto px-6 py-3.5 rounded font-medium text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2 border shadow-sm ${
              isLightMode
                ? 'bg-[#111827] text-white border-[#111827] hover:bg-[#1f2937]'
                : 'bg-[#ededed] text-[#0c0d0e] border-[#ededed] hover:bg-white'
            }`}
          >
            <span>Request Architecture Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#architecture"
            id="hero-secondary-cta"
            className={`w-full sm:w-auto px-6 py-3.5 rounded font-medium text-sm sm:text-base border transition-all flex items-center justify-center gap-2 ${
              isLightMode
                ? 'bg-white text-[#111827] border-[#e5e7eb] hover:bg-[#f9fafb]'
                : 'bg-[#14161a] text-[#ededed] border-[#272a33] hover:bg-[#1a1d24]'
            }`}
          >
            <span>Inspect System Topology</span>
          </a>
        </div>

        {/* Technical Deployment Command snippet */}
        <div className="max-w-2xl mx-auto mb-16">
          <div
            className={`border rounded-lg p-3 sm:p-4 text-left font-mono text-xs sm:text-sm flex items-center justify-between gap-4 transition-colors ${
              isLightMode
                ? 'bg-[#f8f9fa] border-[#e5e7eb] text-[#1f2937]'
                : 'bg-[#111317] border-[#22252c] text-[#d1d5db]'
            }`}
          >
            <div className="flex items-center gap-3 overflow-x-auto py-1">
              <span className="text-[#6b7280] select-none">$</span>
              <span className="whitespace-nowrap">{command}</span>
            </div>
            <button
              type="button"
              id="copy-install-command-btn"
              onClick={handleCopy}
              className={`p-1.5 rounded transition-colors shrink-0 ${
                isLightMode
                  ? 'hover:bg-[#e5e7eb] text-[#4b5563]'
                  : 'hover:bg-[#1f2229] text-[#9ca3af]'
              }`}
              title="Copy Helm command"
              aria-label="Copy Helm command"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-[11px] font-mono text-[#6b7280] mt-2 text-center">
            Compatible with Kubernetes 1.28+, Red Hat OpenShift, Nomad, and Bare-Metal Air-gap
          </p>
        </div>

        {/* 4 Crisp Metric Anchors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-6 border-t border-[#222429]/40">
          <div className="text-left p-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Data Egress</span>
            </div>
            <div className="text-xl sm:text-2xl font-semibold font-mono tracking-tight">0 Bytes</div>
            <div className="text-xs text-[#6b7280] mt-0.5">Air-gap isolation verified</div>
          </div>

          <div className="text-left p-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-emerald-500" />
              <span>Context Mesh</span>
            </div>
            <div className="text-xl sm:text-2xl font-semibold font-mono tracking-tight">In-Memory</div>
            <div className="text-xs text-[#6b7280] mt-0.5">Zero persistent external copies</div>
          </div>

          <div className="text-left p-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
              <span>Policy Engine</span>
            </div>
            <div className="text-xl sm:text-2xl font-semibold font-mono tracking-tight">Deterministic</div>
            <div className="text-xs text-[#6b7280] mt-0.5">OPA & dual-key quorum gates</div>
          </div>

          <div className="text-left p-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
              <span>Compute Tier</span>
            </div>
            <div className="text-xl sm:text-2xl font-semibold font-mono tracking-tight">Your Hardware</div>
            <div className="text-xs text-[#6b7280] mt-0.5">Local weights or private VPC</div>
          </div>
        </div>
      </div>
    </section>
  );
};
