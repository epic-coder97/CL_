import React, { useState } from 'react';
import { ARCHITECTURE_NODES } from '../data/specs';
import { Shield, Database, Lock, Server, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';

interface ArchitectureDiagramProps {
  isLightMode: boolean;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ isLightMode }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('perimeter');

  const selectedNode = ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) || ARCHITECTURE_NODES[0];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'perimeter':
        return <Shield className="w-4 h-4 text-emerald-400" />;
      case 'data-mesh':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'kernel-governance':
        return <Lock className="w-4 h-4 text-emerald-400" />;
      case 'agent-runtime':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      default:
        return <Server className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="architecture" className="py-20 border-b transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2">
            System Topology & Boundary
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Zero Egress. Native Infrastructure. Full Sovereignty.
          </h2>
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-[#4b5563]' : 'text-[#9ca3af]'}`}>
            Unlike multi-tenant AI wrappers that siphon data into external cloud endpoints, ClosemindLabs
            runs completely encapsulated within your enterprise VPC or bare-metal environment.
          </p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Topology Canvas (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* The Air-Gapped Customer Perimeter Boundary Box */}
            <div
              className={`rounded-lg border-2 border-dashed p-5 relative transition-all ${
                isLightMode
                  ? 'bg-[#fcfdfe] border-[#9ca3af]/40'
                  : 'bg-[#101216]/60 border-[#2f3440]'
              }`}
            >
              {/* Boundary Label */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#232731]">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Customer Enclave (VPC / On-Premises Boundary)</span>
                </div>
                <div className="font-mono text-[11px] px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                  External Internet: Blocked (0 Egress)
                </div>
              </div>

              {/* Topology Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ARCHITECTURE_NODES.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      id={`arch-node-${node.id}`}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`text-left p-4 rounded-md border transition-all cursor-pointer relative ${
                        isSelected
                          ? isLightMode
                            ? 'bg-white border-[#111827] shadow-sm ring-1 ring-[#111827]'
                            : 'bg-[#191c22] border-emerald-500/80 shadow-md ring-1 ring-emerald-500/30'
                          : isLightMode
                          ? 'bg-[#f9fafb] border-[#e5e7eb] hover:border-[#9ca3af]'
                          : 'bg-[#14161b] border-[#252830] hover:border-[#383d4a]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getNodeIcon(node.id)}
                          <span className="text-xs font-mono text-[#6b7280] uppercase tracking-wider">
                            {node.layer}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base tracking-tight mb-1.5">
                        {node.title}
                      </h3>
                      <p
                        className={`text-xs line-clamp-2 leading-relaxed ${
                          isLightMode ? 'text-[#6b7280]' : 'text-[#8c93a0]'
                        }`}
                      >
                        {node.description}
                      </p>
                      <div className="mt-3 pt-2 border-t border-[#232731]/30 flex items-center justify-between text-[11px] font-mono text-[#6b7280]">
                        <span>Inspect Specs</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Connected Enterprise Systems Footer */}
              <div
                className={`mt-4 p-3 rounded border font-mono text-xs flex flex-wrap items-center justify-between gap-3 ${
                  isLightMode
                    ? 'bg-[#f3f4f6] border-[#e5e7eb] text-[#374151]'
                    : 'bg-[#131519] border-[#22252c] text-[#9ca3af]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-medium">Direct System Drivers:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="px-1.5 py-0.5 rounded bg-[#20232b] text-[#d1d5db]">PostgreSQL</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#20232b] text-[#d1d5db]">SAP S/4HANA</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#20232b] text-[#d1d5db]">Snowflake</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#20232b] text-[#d1d5db]">Git Repos</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#20232b] text-[#d1d5db]">HashiCorp Vault</span>
                </div>
              </div>
            </div>

            {/* External Barrier Visual */}
            <div
              className={`p-3 rounded border border-dashed flex items-center justify-between font-mono text-xs ${
                isLightMode
                  ? 'bg-red-50 border-red-200 text-red-700'
                  : 'bg-[#151011] border-red-900/40 text-red-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span>PUBLIC CLOUD APIS & THIRD-PARTY MULTI-TENANTS</span>
              </div>
              <span className="font-semibold tracking-wider text-[11px] uppercase">
                CONNECTION REJECTED BY KERNEL
              </span>
            </div>
          </div>

          {/* Detailed Inspector Panel (Right 5 Cols) */}
          <div
            className={`lg:col-span-5 rounded-lg border p-6 font-mono text-xs transition-colors ${
              isLightMode
                ? 'bg-white border-[#e5e7eb] text-[#1f2937]'
                : 'bg-[#111317] border-[#252830] text-[#ededed]'
            }`}
          >
            <div className="flex items-center justify-between border-b pb-3 mb-4 border-[#252830]">
              <div className="flex items-center gap-2">
                <span className="text-[#6b7280]">MODULE:</span>
                <span className="font-semibold text-emerald-400 uppercase">
                  {selectedNode.layer}
                </span>
              </div>
              <span className="text-[#6b7280]">ID: {selectedNode.id}</span>
            </div>

            <h4 className="text-base font-sans font-bold mb-2 text-white">
              {selectedNode.title}
            </h4>
            <p
              className={`font-sans text-xs leading-relaxed mb-6 ${
                isLightMode ? 'text-[#4b5563]' : 'text-[#9ca3af]'
              }`}
            >
              {selectedNode.description}
            </p>

            <div className="mb-6">
              <div className="text-[11px] uppercase tracking-wider text-[#6b7280] mb-3">
                Architectural Guarantees
              </div>
              <ul className="space-y-2 font-sans">
                {selectedNode.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className={isLightMode ? 'text-[#374151]' : 'text-[#d1d5db]'}>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#6b7280] mb-3">
                Technical Specifications
              </div>
              <div className="divide-y divide-[#232731] border-y border-[#232731]">
                {Object.entries(selectedNode.specs).map(([key, val]) => (
                  <div key={key} className="py-2 flex items-center justify-between">
                    <span className="text-[#6b7280]">{key}</span>
                    <span className="font-semibold text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
