import React from 'react';
import { ShieldAlert, Cpu, Network, Check } from 'lucide-react';

interface PillarsProps {
  isLightMode: boolean;
}

export const Pillars: React.FC<PillarsProps> = ({ isLightMode }) => {
  const pillars = [
    {
      id: 'deploy-infra',
      badge: '01 / Deployment',
      title: 'Deploy Inside Customer Infrastructure',
      tagline: 'Your physical hardware. Your private VPC. Zero external egress.',
      description:
        'ClosemindLabs is packaged as an immutable Kubernetes operator and bare-metal appliance. It boots in air-gapped environments without phoning home to any central servers.',
      bullets: [
        'Zero-egress guarantee enforced at the eBPF kernel level',
        'Model-agnostic: Run Llama 3, DeepSeek, or custom fine-tunes locally',
        'Hardware acceleration via NVIDIA CUDA, AMD ROCm, or Intel Gaudi',
        'Full compatibility with FIPS 140-3 and air-gapped defense enclaves'
      ],
      icon: <Cpu className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 'connect-data',
      badge: '02 / Integration',
      title: 'Connect to Enterprise Data & Systems',
      tagline: 'Read and write transactional workloads with existing IAM permissions.',
      description:
        'We do not ingest your enterprise data into an external SaaS vector database. Context is queried ephemerally in-memory and governed by your current security policies.',
      bullets: [
        'Native connectors for SAP, Snowflake, Postgres, Oracle, and internal APIs',
        'Dynamic PII redaction and field-level column masking on the fly',
        'Integrates directly with Okta, Active Directory, and HashiCorp Vault',
        'Zero-copy memory pipelines: context evaporates post-task completion'
      ],
      icon: <Network className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 'run-agents',
      badge: '03 / Governance',
      title: 'Run Governed Agents That Complete Real Work',
      tagline: 'Deterministic state machine with dual-key cryptographic sign-off.',
      description:
        'Autonomous enterprise work requires real guardrails, not fragile prompt engineering. Every tool invocation passes through policy validation and blast-radius simulation.',
      bullets: [
        'Deterministic state machines prevent infinite loops and runaway compute',
        'Open Policy Agent (OPA) rules restrict write permissions and transaction limits',
        'Dual-key quorum: High-impact actions require cryptographic human approval',
        'Immutable cryptographic audit ledger signed by your KMS keys'
      ],
      icon: <ShieldAlert className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="systems" className="py-20 border-b transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2">
            System Tenets
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built for Enterprises That Refuse to Surrender Intelligence.
          </h2>
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-[#4b5563]' : 'text-[#9ca3af]'}`}>
            Public LLMs and cloud SaaS wrappers force you to choose between modern automation and data
            custody. ClosemindLabs eliminates that compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 sm:p-7 rounded-lg border flex flex-col justify-between transition-all ${
                isLightMode
                  ? 'bg-[#ffffff] border-[#e5e7eb] hover:border-[#9ca3af]'
                  : 'bg-[#121418] border-[#22252c] hover:border-[#383d4a]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#6b7280]">{pillar.badge}</span>
                  <div className="p-2 rounded border border-[#232731] bg-[#16181e]">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2">{pillar.title}</h3>
                <p className="text-xs font-mono text-emerald-500/90 mb-3">{pillar.tagline}</p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isLightMode ? 'text-[#4b5563]' : 'text-[#9ca3af]'
                  }`}
                >
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#232731]">
                <ul className="space-y-2.5">
                  {pillar.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={isLightMode ? 'text-[#374151]' : 'text-[#c9ced6]'}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
