import React, { useState } from 'react';
import { ArrowRight, Check, Shield, Layers, Lock, Cpu, Server, PlayCircle } from 'lucide-react';
import { PaperGrain } from './components/PaperGrain';
import { TerminalThesis } from './components/TerminalThesis';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      id="root-viewport"
      className={`min-h-screen transition-colors duration-200 flex flex-col justify-between relative ${
        isDark ? 'dark bg-[#111215] text-[#EDEDEB]' : 'bg-[#FAF9F5] text-[#1F1F1D]'
      }`}
    >
      {/* 1970s-80s subtle natural paper grain texture (4.8% opacity, canvas-generated PNG) */}
      <PaperGrain isDark={isDark} />

      {/* Subtle Terminal Monitor Scanline Overlay */}
      <div
        id="terminal-monitor-scanlines"
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-30 scanline-overlay"
      />

      {/* Top Archival Document Masthead */}
      <header
        id="masthead"
        className={`border-b transition-colors duration-200 relative z-10 ${
          isDark ? 'border-[#26272c] bg-[#111215]' : 'border-[#e0ded5] bg-[#FAF9F5]/90 backdrop-blur-xs'
        }`}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between font-mono text-xs">
          {/* Logo / Equipment Label Terminal Key */}
          <div className="flex items-center gap-3 select-none">
            <div
              className={`h-7 px-1.5 border flex items-center justify-center font-mono font-bold text-[11px] tracking-tight rounded-[2px] relative transition-colors ${
                isDark
                  ? 'border-[#383a42] bg-[#18191e] text-[#EDEDEB] shadow-manual-dark'
                  : 'border-[#1F1F1D] bg-[#1F1F1D] text-[#FAF9F5] shadow-manual'
              }`}
              title="CloseMindLabs Terminal Key"
            >
              {/* Thin cream inset border detail */}
              <div className="absolute inset-[1px] border border-[#FAF9F5]/20 rounded-[1px] pointer-events-none" />
              <span className="relative z-1">CL</span>
              <span className="relative z-1 text-[#2F4BFF] font-black animate-pulse">_</span>
            </div>
            <span
              className={`font-sans font-semibold tracking-tight text-sm ${
                isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
              }`}
            >
              CloseMindLabs
            </span>
          </div>

          {/* Center Technical Manual Tag */}
          <div
            className={`hidden sm:inline-flex items-center gap-2 text-[11px] ${
              isDark ? 'text-[#A09E96]' : 'text-[#777168]'
            }`}
          >
            <span>DOC CML-26</span>
            <span>//</span>
            <span className="text-[#C96A2B] font-semibold">REV. 01</span>
            <span>//</span>
            <span>SYSTEM STATUS: AIR-GAPPED</span>
          </div>

          {/* Right Action & Theme Toggle with Hardware/Manual feel */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="toggle-paper-theme"
              onClick={() => setIsDark(!isDark)}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-[2px] border transition-transform cursor-pointer ${
                isDark
                  ? 'border-[#383a42] bg-[#191b22] text-[#EDEDEB] shadow-manual-dark hover:bg-[#20232b]'
                  : 'border-[#1F1F1D] bg-[#FAF9F5] text-[#1F1F1D] shadow-manual hover:bg-[#eae8df]'
              }`}
            >
              {isDark ? 'LIGHT PAPER' : 'GRAPHITE'}
            </button>
            <a
              href="#briefing"
              className={`px-3 py-1 text-[11px] font-mono font-medium rounded-[2px] border transition-transform ${
                isDark
                  ? 'border-[#EDEDEB] bg-[#EDEDEB] text-[#111215] shadow-manual-dark hover:bg-white'
                  : 'border-[#1F1F1D] bg-[#1F1F1D] text-[#FAF9F5] shadow-manual hover:bg-[#33312c]'
              }`}
            >
              BRIEFING →
            </a>
          </div>
        </div>
      </header>

      {/* Main Single-Scroll Column */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-5 sm:px-8 py-12 sm:py-16 space-y-16 relative z-10">
        {/* Section: Hero */}
        <section id="hero" className="space-y-5">
          <div
            className={`flex items-center gap-2 font-mono text-xs uppercase tracking-wider ${
              isDark ? 'text-[#A09E96]' : 'text-[#777168]'
            }`}
          >
            {/* Burnt orange retro accent indicator */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#C96A2B]"></span>
            <span>THE BASE IDEA // OPERATING THESIS</span>
            <span className="text-[#C96A2B] font-bold">[REV. 01]</span>
          </div>

          {/* Memorable Line - Crisp and High Contrast */}
          <h1
            className={`text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.12] ${
              isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
            }`}
          >
            Your enterprise.{' '}
            <span className="italic font-normal">Your infrastructure.</span>{' '}
            Your AI.
          </h1>

          {/* "We bring the operating layer" with darkened #2F4BFF cobalt blue */}
          <p
            className={`text-xl sm:text-2xl font-serif font-semibold ${
              isDark ? 'text-[#637AFF]' : 'text-[#2F4BFF]'
            }`}
          >
            We bring the operating layer.
          </p>

          {/* The One Explanatory Paragraph - High contrast body text */}
          <p
            className={`text-lg sm:text-xl font-serif leading-relaxed max-w-2xl ${
              isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
            }`}
          >
            It runs inside infrastructure you control, connecting your existing systems so governed agents can execute real work.
          </p>

          {/* Terminal-style Real-time Typing Thesis Block */}
          <TerminalThesis isDark={isDark} />

          {/* Hero CTA - Hardware/Manual Button Style */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#briefing"
              id="hero-cta-briefing"
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-medium rounded-[2px] border transition-transform ${
                isDark
                  ? 'border-[#EDEDEB] bg-[#EDEDEB] text-[#111215] shadow-manual-dark hover:bg-white'
                  : 'border-[#1F1F1D] bg-[#1F1F1D] text-[#FAF9F5] shadow-manual hover:bg-[#33312c]'
              }`}
            >
              Request Technical Briefing
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span
              className={`font-mono text-[11px] flex items-center gap-1.5 ${
                isDark ? 'text-[#A09E96]' : 'text-[#777168]'
              }`}
            >
              <span className="w-1 h-1 rounded-full bg-[#C96A2B]"></span>
              Customer-controlled • Zero data egress
            </span>
          </div>
        </section>

        {/* Section: Simple Flow (Your Systems → CloseMind Operating Layer → AI Agents) */}
        <section id="operating-flow" className="space-y-4">
          <div
            className={`flex items-center justify-between border-b pb-2 font-mono text-xs ${
              isDark ? 'border-[#26272c] text-[#A09E96]' : 'border-[#e0ded5] text-[#777168]'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#C96A2B]"></span>
              <span
                className={`uppercase tracking-wide font-medium ${
                  isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                }`}
              >
                01 // Operating Flow
              </span>
            </div>
            <span>
              FIG. 1.0 <span className="text-[#C96A2B] font-semibold">// REV. 01</span>
            </span>
          </div>

          <div
            className={`border p-6 sm:p-7 rounded-[2px] relative ${
              isDark ? 'border-[#26272c] bg-[#14151a]' : 'border-[#dcd9ce] bg-white'
            }`}
          >
            {/* Asymmetric Engineer's Stamped Annotation Badge breaking sterile perfection */}
            <div
              className={`hidden sm:flex items-center gap-1.5 absolute -top-3 right-6 px-2.5 py-0.5 border text-[10px] font-mono tracking-wider uppercase rounded-[1px] rotate-[-0.5deg] shadow-xs select-none ${
                isDark
                  ? 'border-[#C96A2B] bg-[#1a1512] text-[#E08546]'
                  : 'border-[#C96A2B] bg-[#FFFBF7] text-[#C96A2B]'
              }`}
            >
              <span className="font-bold">CORE CONSTRAINT</span>
              <span className="opacity-40">|</span>
              <span>ZERO RAW DB ACCESS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {/* Step 1: Your Systems */}
              <div
                className={`p-5 border rounded-[2px] flex flex-col justify-between space-y-3 transition-colors ${
                  isDark ? 'border-[#33353d] bg-[#171920]' : 'border-[#d4d0c5] bg-[#FAF9F5]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${
                        isDark ? 'text-[#A09E96]' : 'text-[#777168]'
                      }`}
                    >
                      [INPUT]
                    </span>
                    <Server
                      className={`w-3.5 h-3.5 ${isDark ? 'text-[#A09E96]' : 'text-[#777168]'}`}
                    />
                  </div>
                  <h3
                    className={`font-serif text-lg font-semibold tracking-tight ${
                      isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                    }`}
                  >
                    Your Systems
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
                    }`}
                  >
                    The ERPs, CRMs, databases, and custom applications your business already runs. No database migration or rip-and-replace.
                  </p>
                </div>
                <div
                  className={`pt-3 font-mono text-[11px] border-t border-dashed ${
                    isDark
                      ? 'border-[#2e3038] text-[#A09E96]'
                      : 'border-[#dcd9ce] text-[#5A554F]'
                  }`}
                >
                  SAP • Salesforce • Postgres • APIs
                </div>
              </div>

              {/* Step 2: CloseMind Operating Layer - Hero cobalt blue accent */}
              <div
                className={`p-5 border-2 rounded-[2px] flex flex-col justify-between space-y-3 transition-colors relative ${
                  isDark
                    ? 'border-[#3b82f6] bg-[#131926]'
                    : 'border-[#2F4BFF] bg-[#F2F6FC]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] uppercase font-bold tracking-wider ${
                        isDark ? 'text-[#93C5FD]' : 'text-[#1D35D9]'
                      }`}
                    >
                      [RUNTIME CORE]
                    </span>
                    <Cpu
                      className={`w-4 h-4 ${isDark ? 'text-[#93C5FD]' : 'text-[#1D35D9]'}`}
                    />
                  </div>
                  <h3
                    className={`font-serif text-lg font-semibold tracking-tight ${
                      isDark ? 'text-[#93C5FD]' : 'text-[#1D35D9]'
                    }`}
                  >
                    CloseMind Operating Layer
                  </h3>
                  <p
                    className={`text-xs leading-relaxed font-normal ${
                      isDark ? 'text-[#F1F5F9]' : 'text-[#0F172A]'
                    }`}
                  >
                    Sits between intelligence and operations. Enforces business context schemas, connector security, model routing, and permission gates.
                  </p>
                </div>
                <div
                  className={`pt-3 font-mono text-[11px] font-semibold border-t border-dashed ${
                    isDark
                      ? 'border-[#1e3a5f] text-[#93C5FD]'
                      : 'border-[#c5d5ec] text-[#1D35D9]'
                  }`}
                >
                  Deployed inside your VPC or On-Prem
                </div>
              </div>

              {/* Step 3: AI Agents */}
              <div
                className={`p-5 border rounded-[2px] flex flex-col justify-between space-y-3 transition-colors ${
                  isDark ? 'border-[#33353d] bg-[#171920]' : 'border-[#d4d0c5] bg-[#FAF9F5]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${
                        isDark ? 'text-[#A09E96]' : 'text-[#777168]'
                      }`}
                    >
                      [OUTCOME]
                    </span>
                    <PlayCircle
                      className={`w-3.5 h-3.5 ${isDark ? 'text-[#A09E96]' : 'text-[#777168]'}`}
                    />
                  </div>
                  <h3
                    className={`font-serif text-lg font-semibold tracking-tight ${
                      isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                    }`}
                  >
                    AI Agents
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
                    }`}
                  >
                    Governed agents execute multi-step workflows across systems: read context, submit for human sign-off, and verify state changes.
                  </p>
                </div>
                <div
                  className={`pt-3 font-mono text-[11px] border-t border-dashed ${
                    isDark
                      ? 'border-[#2e3038] text-[#A09E96]'
                      : 'border-[#dcd9ce] text-[#5A554F]'
                  }`}
                >
                  Audited Execution & State Changes
                </div>
              </div>
            </div>

            {/* Asymmetric Field Margin Note */}
            <div
              className={`mt-4 pt-3 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] ${
                isDark ? 'border-[#26272c] text-[#A09E96]' : 'border-[#eae8df] text-[#777168]'
              }`}
            >
              <div className="flex items-center gap-1.5 italic">
                <span className="not-italic text-[#C96A2B] font-semibold">↳ Field Note:</span>
                <span>“Agents do not talk directly to databases. They go through the permission gate first.”</span>
              </div>
              <span className="text-[#C96A2B] font-medium shrink-0">ZERO DATA EGRESS • CUSTOMER BOUNDARY</span>
            </div>
          </div>
        </section>

        {/* Section: Architecture (3-layer stack) */}
        <section id="architecture" className="space-y-4">
          <div
            className={`flex items-center justify-between border-b pb-2 font-mono text-xs ${
              isDark ? 'border-[#26272c] text-[#A09E96]' : 'border-[#e0ded5] text-[#777168]'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#C96A2B]"></span>
              <span
                className={`uppercase tracking-wide font-medium ${
                  isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                }`}
              >
                02 // Product Architecture
              </span>
            </div>
            <span>
              DOC CML-26 <span className="text-[#C96A2B] font-semibold">// 3-LAYER STACK</span>
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Layer 3: Governed Agent Workflows */}
            <div
              className={`p-4 border border-l-3 rounded-[2px] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                isDark
                  ? 'border-[#26272c] border-l-blue-400 bg-[#15171d]'
                  : 'border-[#dcd9ce] border-l-[#2F4BFF] bg-white'
              }`}
            >
              <div>
                <div
                  className={`font-mono text-xs font-semibold tracking-tight ${
                    isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                  }`}
                >
                  3. Governed Agent Workflows
                </div>
                <div
                  className={`text-xs mt-0.5 ${
                    isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
                  }`}
                >
                  Multi-step execution: plan, read, reason, ask for human approval, and verify results. Turns AI into an operational execution layer.
                </div>
              </div>
              <span
                className={`font-mono text-[10px] uppercase shrink-0 font-medium ${
                  isDark ? 'text-[#A09E96]' : 'text-[#777168]'
                }`}
              >
                [ACTION & VERIFICATION]
              </span>
            </div>

            {/* Layer 2: Context & Systems Integration Mesh */}
            <div
              className={`p-4 border border-l-3 rounded-[2px] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                isDark
                  ? 'border-[#26272c] border-l-emerald-400 bg-[#15171d]'
                  : 'border-[#dcd9ce] border-l-[#15803d] bg-white'
              }`}
            >
              <div>
                <div
                  className={`font-mono text-xs font-semibold tracking-tight ${
                    isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                  }`}
                >
                  2. Enterprise Context & Connectors
                </div>
                <div
                  className={`text-xs mt-0.5 ${
                    isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
                  }`}
                >
                  Connectors for ERP, CRM, ITSM, and databases paired with business objects, permissions, policies, audit logs, and persistent memory.
                </div>
              </div>
              <span
                className={`font-mono text-[10px] uppercase shrink-0 font-medium ${
                  isDark ? 'text-[#A09E96]' : 'text-[#777168]'
                }`}
              >
                [CONTEXT & CONTROL MESH]
              </span>
            </div>

            {/* Layer 1: Private AI Core */}
            <div
              className={`p-4 border border-l-3 rounded-[2px] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                isDark
                  ? 'border-[#26272c] border-l-purple-400 bg-[#15171d]'
                  : 'border-[#dcd9ce] border-l-[#4338ca] bg-white'
              }`}
            >
              <div>
                <div
                  className={`font-mono text-xs font-semibold tracking-tight ${
                    isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                  }`}
                >
                  1. Private AI Core
                </div>
                <div
                  className={`text-xs mt-0.5 ${
                    isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
                  }`}
                >
                  Model routing, private inference, retrieval, fine-tuning, automated evaluations, and full observability inside your boundary.
                </div>
              </div>
              <span
                className={`font-mono text-[10px] uppercase shrink-0 font-medium ${
                  isDark ? 'text-[#A09E96]' : 'text-[#777168]'
                }`}
              >
                [INTELLIGENCE ENGINE]
              </span>
            </div>

            {/* Foundation Boundary Line */}
            <div
              className={`p-3 border font-mono text-xs text-center border-dashed rounded-[2px] ${
                isDark
                  ? 'border-[#383a42] bg-[#1a1c22] text-[#C0BEBB]'
                  : 'border-[#c2beb2] bg-[#F2F0E8] text-[#1F1F1D]'
              }`}
            >
              ▲ BOUNDARY: Runs inside infrastructure the customer controls (Cloud • VPC • Private Cloud • On-Prem)
            </div>
          </div>
        </section>

        {/* Section: Positive Core Principles */}
        <section id="principles" className="space-y-4">
          <div
            className={`flex items-center justify-between border-b pb-2 font-mono text-xs ${
              isDark ? 'border-[#26272c] text-[#A09E96]' : 'border-[#e0ded5] text-[#777168]'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#C96A2B]"></span>
              <span
                className={`uppercase tracking-wide font-medium ${
                  isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                }`}
              >
                03 // Core Principles
              </span>
            </div>
            <span>
              SYSTEM SPECS <span className="text-[#C96A2B] font-semibold">// 2026</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Principle 1: Model Independence */}
            <div
              className={`p-5 border rounded-[2px] space-y-2.5 transition-colors ${
                isDark ? 'border-[#26272c] bg-[#14151a]' : 'border-[#dcd9ce] bg-white'
              }`}
            >
              <div
                className={`flex items-center gap-1.5 font-mono text-xs font-bold ${
                  isDark ? 'text-[#7D93FF]' : 'text-[#2F4BFF]'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isDark ? 'bg-[#7D93FF]' : 'bg-[#2F4BFF]'
                  }`}
                ></span>
                Model Independence
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
                }`}
              >
                Keep your models. Route, evaluate, and swap frontier models or private weights as research moves. Your business logic and schemas never get locked into an external provider.
              </p>
              <div
                className={`pt-2 font-mono text-[10px] tracking-wide border-t border-dashed ${
                  isDark ? 'border-[#2a2c34] text-[#8C8A82]' : 'border-[#e8e5dc] text-[#6B665F]'
                }`}
              >
                HOSTED OR SELF-MANAGED INFERENCE
              </div>
            </div>

            {/* Principle 2: Zero-Egress Boundary */}
            <div
              className={`p-5 border rounded-[2px] space-y-2.5 transition-colors ${
                isDark ? 'border-[#26272c] bg-[#14151a]' : 'border-[#dcd9ce] bg-white'
              }`}
            >
              <div
                className={`flex items-center gap-1.5 font-mono text-xs font-bold ${
                  isDark ? 'text-emerald-400' : 'text-emerald-700'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Zero-Egress Boundary
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
                }`}
              >
                Keep your systems. Runs inside your AWS VPC, GCP project, Azure tenant, or air-gapped data center. Your database keys and customer records never cross our perimeter.
              </p>
              <div
                className={`pt-2 font-mono text-[10px] tracking-wide border-t border-dashed ${
                  isDark ? 'border-[#2a2c34] text-[#8C8A82]' : 'border-[#e8e5dc] text-[#6B665F]'
                }`}
              >
                CUSTOMER-OWNED PERIMETER
              </div>
            </div>

            {/* Principle 3: Transactional Execution (Asymmetric accent to break perfect regularity) */}
            <div
              className={`p-5 border-2 rounded-[2px] space-y-2.5 transition-colors relative ${
                isDark
                  ? 'border-[#383a42] bg-[#171920]'
                  : 'border-[#1F1F1D] bg-[#FAF9F5]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#C96A2B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C96A2B]"></span>
                  Transactional Safety
                </div>
                <span
                  className={`text-[9px] font-mono px-1 border rounded-[1px] ${
                    isDark
                      ? 'border-[#C96A2B]/40 text-[#C96A2B] bg-[#C96A2B]/10'
                      : 'border-[#C96A2B] text-[#C96A2B] bg-[#FFF8F2]'
                  }`}
                >
                  ACID ACTIONS
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-[#DEDCD4]' : 'text-[#33312C]'
                }`}
              >
                Not a chat playground. Governed agents designed for multi-step operational workflows that alter state across ERPs and databases with rollback logs and human approval stops.
              </p>
              <div
                className={`pt-2 font-mono text-[10px] tracking-wide border-t border-dashed ${
                  isDark ? 'border-[#333640] text-[#C96A2B]' : 'border-[#dcd9ce] text-[#C96A2B]'
                }`}
              >
                MANDATORY HUMAN-IN-THE-LOOP GATES
              </div>
            </div>
          </div>
        </section>

        {/* Section: Briefing Request Action */}
        <section id="briefing" className="space-y-4 pt-2">
          <div
            className={`flex items-center justify-between border-b pb-2 font-mono text-xs ${
              isDark ? 'border-[#26272c] text-[#A09E96]' : 'border-[#e0ded5] text-[#777168]'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#C96A2B]"></span>
              <span
                className={`uppercase tracking-wide font-medium ${
                  isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                }`}
              >
                04 // Architecture Briefing
              </span>
            </div>
            <span>
              DISPATCH FORM <span className="text-[#C96A2B] font-semibold">// CML-REQ</span>
            </span>
          </div>

          <div
            className={`border p-6 sm:p-8 rounded-[2px] space-y-4 ${
              isDark ? 'border-[#26272c] bg-[#14151a]' : 'border-[#dcd9ce] bg-white'
            }`}
          >
            <div className="space-y-1">
              <h3
                className={`font-serif text-xl font-medium tracking-tight ${
                  isDark ? 'text-[#EDEDEB]' : 'text-[#1F1F1D]'
                }`}
              >
                Request a confidential technical briefing.
              </h3>
              <p
                className={`text-xs font-mono ${
                  isDark ? 'text-[#A09E96]' : 'text-[#5A554F]'
                }`}
              >
                We review your system topology, security boundaries, and provide reusable deployment recipes.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md pt-2">
                <input
                  type="email"
                  id="briefing-input-email"
                  required
                  placeholder="name@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`px-3 py-2 text-xs font-mono border flex-1 rounded-[2px] focus:outline-hidden ${
                    isDark
                      ? 'bg-[#1a1c22] border-[#383a42] text-white focus:border-white'
                      : 'bg-[#FAF9F5] border-[#1F1F1D] text-[#1F1F1D] focus:border-[#1F1F1D]'
                  }`}
                />
                <button
                  type="submit"
                  id="btn-submit-briefing"
                  className={`px-4 py-2 text-xs font-mono font-medium rounded-[2px] border transition-transform cursor-pointer ${
                    isDark
                      ? 'border-[#EDEDEB] bg-[#EDEDEB] text-[#111215] shadow-manual-dark hover:bg-white'
                      : 'border-[#1F1F1D] bg-[#1F1F1D] text-[#FAF9F5] shadow-manual hover:bg-[#33312c]'
                  }`}
                >
                  REQUEST BRIEFING →
                </button>
              </form>
            ) : (
              <div
                className={`p-3 border font-mono text-xs flex items-center gap-2 rounded-[2px] ${
                  isDark
                    ? 'border-emerald-800/40 bg-emerald-950/20 text-emerald-400'
                    : 'border-emerald-300 bg-emerald-50 text-emerald-900'
                }`}
              >
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Briefing request logged for {email}. Our engineering team will contact you directly.</span>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Archival Monograph Footer */}
      <footer
        id="colophon"
        className={`border-t transition-colors duration-200 mt-16 font-mono text-xs relative z-10 ${
          isDark ? 'border-[#26272c] text-[#A09E96]' : 'border-[#e0ded5] text-[#5A554F]'
        }`}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} CloseMindLabs. India-first, globally deployable.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>VPC / Cloud / On-Prem</span>
            <span>•</span>
            <span className="text-[#C96A2B] font-semibold">Zero Data Egress</span>
            <span>•</span>
            <span>Model Independent</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
