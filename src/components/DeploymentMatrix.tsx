import React from 'react';
import { DEPLOYMENT_PLATFORMS } from '../data/specs';
import { Server, CheckCircle2, ShieldCheck, Download, Terminal } from 'lucide-react';

interface DeploymentMatrixProps {
  isLightMode: boolean;
  onOpenBriefing: () => void;
}

export const DeploymentMatrix: React.FC<DeploymentMatrixProps> = ({ isLightMode, onOpenBriefing }) => {
  const securityGuarantees = [
    {
      title: 'eBPF Kernel Socket Filtering',
      desc: 'Enforces hard network drop rules preventing unauthorized outbound packets at the Linux kernel level.'
    },
    {
      title: 'Enterprise KMS & HSM Integration',
      desc: 'All ephemeral context buffers and Merkle audit roots are encrypted using customer-managed keys (AWS KMS, Vault, Azure Key Vault).'
    },
    {
      title: 'mTLS 1.3 Everywhere',
      desc: 'Strict cryptographic identity validation between internal agent workers, policy gates, and system drivers.'
    },
    {
      title: 'Auditable & Open Tool Schemas',
      desc: 'Zero proprietary runtime blackboxes. Agent tool executions use open standards (gRPC, JSON-Schema, OPA Rego).'
    }
  ];

  return (
    <section id="deployment" className="py-20 border-b transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2">
            Infrastructure Compatibility
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Runs Anywhere You Run Sensitive Compute.
          </h2>
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-[#4b5563]' : 'text-[#9ca3af]'}`}>
            Deliverable as an offline appliance, Kubernetes operator, or Terraform module.
            Deploy into high-security government clouds, financial server rooms, or sovereign cloud regions.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {DEPLOYMENT_PLATFORMS.map((platform, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-lg border transition-all ${
                isLightMode
                  ? 'bg-white border-[#e5e7eb] hover:border-[#9ca3af]'
                  : 'bg-[#111317] border-[#22252c] hover:border-[#383d4a]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {platform.badge}
                </span>
                <span className="font-mono text-[11px] text-[#6b7280]">
                  {platform.status}
                </span>
              </div>
              <h3 className="text-base font-bold tracking-tight mb-1">{platform.name}</h3>
              <div className="text-xs text-[#9ca3af] mb-3">{platform.type}</div>
              <div className="pt-3 border-t border-[#232731] font-mono text-[11px] text-[#6b7280]">
                <span className="text-[#9ca3af]">Delivery:</span> {platform.deliveryMethod}
              </div>
            </div>
          ))}

          {/* Quick Request Box in Grid */}
          <div
            className={`p-5 rounded-lg border border-dashed flex flex-col justify-between ${
              isLightMode
                ? 'bg-[#f9fafb] border-[#cbd5e1]'
                : 'bg-[#111317]/50 border-[#2b303c]'
            }`}
          >
            <div>
              <div className="font-mono text-[11px] text-emerald-400 uppercase mb-2">
                Custom Environment?
              </div>
              <h3 className="text-base font-bold tracking-tight mb-2">
                Air-Gapped GovCloud / Custom ASIC
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                We support specialized military, aerospace, and sovereign defense infrastructure requirements.
              </p>
            </div>
            <button
              type="button"
              id="custom-infra-cta"
              onClick={onOpenBriefing}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Consult Systems Team →</span>
            </button>
          </div>
        </div>

        {/* Security & Isolation Primitives */}
        <div
          className={`p-6 sm:p-8 rounded-lg border ${
            isLightMode ? 'bg-[#fcfcfd] border-[#e5e7eb]' : 'bg-[#0f1115] border-[#22252c]'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#22252c]">
            <div>
              <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider mb-1">
                Security Architecture
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Cryptographic Isolation Primitives
              </h3>
            </div>
            <button
              type="button"
              id="download-whitepaper-cta"
              onClick={onOpenBriefing}
              className={`px-4 py-2 rounded text-xs font-mono border transition-all cursor-pointer flex items-center gap-2 ${
                isLightMode
                  ? 'bg-[#111827] text-white border-[#111827] hover:bg-[#1f2937]'
                  : 'bg-[#1e222a] text-white border-[#313745] hover:bg-[#282d38]'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Request Whitepaper & Threat Model</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityGuarantees.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold mb-1 text-white">{item.title}</h4>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
