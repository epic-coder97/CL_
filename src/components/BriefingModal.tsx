import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Copy, Check, FileText } from 'lucide-react';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLightMode: boolean;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({ isOpen, onClose, isLightMode }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [infraType, setInfraType] = useState('AWS VPC / Outposts');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedBlueprint, setCopiedBlueprint] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const sampleBlueprint = `# CLO闘MIND LABS — ARCHITECTURE BLUEPRINT OVERVIEW
Version: 2.4.0 (Enterprise Air-Gap Certified)
Product: Private AI Operating Layer

1. BOUNDARY GUARANTEES
- Ingress: TLS 1.3 / Internal VPN only.
- Egress: 0 bytes outbound (eBPF hard socket-drop rules).
- Telemetry: Zero phone-home packets. Air-gap certified.

2. SYSTEM MESH CONNECTORS
- In-memory ephemeral indexing over PostgreSQL, SAP, Snowflake, Git.
- Zero off-prem vector database storage.
- Field-level masking & automated PII redaction drivers.

3. GOVERNANCE & POLICY GATES
- Deterministic finite state machine with OPA / Rego policy enforcement.
- Cryptographic dual-key approval for operations exceeding blast-radius score.
- Append-only Merkle tree audit log signed with customer KMS / HSM.

Contact: engineering@closemindlabs.internal`;

  const handleCopyBlueprint = () => {
    navigator.clipboard.writeText(sampleBlueprint);
    setCopiedBlueprint(true);
    setTimeout(() => setCopiedBlueprint(false), 2000);
  };

  return (
    <div
      id="briefing-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs transition-all"
    >
      <div
        className={`w-full max-w-lg rounded-lg border p-6 sm:p-7 shadow-2xl relative transition-all ${
          isLightMode ? 'bg-white border-[#e5e7eb] text-[#111827]' : 'bg-[#101217] border-[#252934] text-[#ededed]'
        }`}
      >
        <button
          type="button"
          id="close-briefing-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-500 uppercase tracking-widest mb-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Confidential Briefing</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Request Technical Architecture Briefing
            </h3>
            <p className="text-xs text-[#9ca3af] mb-6 leading-relaxed">
              Meet directly with our systems engineers. We will review your data topology, compliance
              requirements, and provide sample Helm / OCI deployment blueprints.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-[#9ca3af] mb-1">ENTERPRISE WORK EMAIL</label>
                <input
                  type="email"
                  id="briefing-email-input"
                  required
                  placeholder="ciso@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded border focus:outline-hidden focus:ring-1 focus:ring-emerald-500 ${
                    isLightMode
                      ? 'bg-[#f9fafb] border-[#e5e7eb] text-[#111827]'
                      : 'bg-[#15181f] border-[#292e3a] text-white'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[#9ca3af] mb-1">COMPANY / ORGANIZATION</label>
                <input
                  type="text"
                  id="briefing-company-input"
                  required
                  placeholder="Defense / Financial / Health Enterprise"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded border focus:outline-hidden focus:ring-1 focus:ring-emerald-500 ${
                    isLightMode
                      ? 'bg-[#f9fafb] border-[#e5e7eb] text-[#111827]'
                      : 'bg-[#15181f] border-[#292e3a] text-white'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[#9ca3af] mb-1">TARGET INFRASTRUCTURE</label>
                <select
                  id="briefing-infra-select"
                  value={infraType}
                  onChange={(e) => setInfraType(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded border focus:outline-hidden focus:ring-1 focus:ring-emerald-500 ${
                    isLightMode
                      ? 'bg-[#f9fafb] border-[#e5e7eb] text-[#111827]'
                      : 'bg-[#15181f] border-[#292e3a] text-white'
                  }`}
                >
                  <option value="AWS VPC / Outposts">AWS VPC / Outposts (Private Cluster)</option>
                  <option value="Azure AKS / VNet">Azure AKS / VNet / Azure Stack</option>
                  <option value="GCP GKE / PSC">Google Cloud GKE (Private Service Connect)</option>
                  <option value="Bare Metal / Air-Gapped">Bare Metal / Air-Gapped On-Premises</option>
                  <option value="Red Hat OpenShift">Red Hat OpenShift</option>
                </select>
              </div>

              <div>
                <label className="block text-[#9ca3af] mb-1">CRITICAL SYSTEMS TO CONNECT (OPTIONAL)</label>
                <input
                  type="text"
                  id="briefing-systems-input"
                  placeholder="e.g. SAP S/4HANA, PostgreSQL, Snowflake, Vault"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded border focus:outline-hidden focus:ring-1 focus:ring-emerald-500 ${
                    isLightMode
                      ? 'bg-[#f9fafb] border-[#e5e7eb] text-[#111827]'
                      : 'bg-[#15181f] border-[#292e3a] text-white'
                  }`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-briefing-request-btn"
                  className={`w-full py-3 rounded font-sans font-medium text-xs tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isLightMode
                      ? 'bg-[#111827] text-white hover:bg-[#1f2937]'
                      : 'bg-[#ededed] text-[#0c0d0e] hover:bg-white'
                  }`}
                >
                  <span>Submit Architecture Request</span>
                </button>
              </div>
              <div className="text-[10px] text-[#6b7280] text-center">
                All inquiries handled under strict non-disclosure. No data shared with third parties.
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Request Logged: REF-CML-2026-9042</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Briefing Request Received
            </h3>
            <p className="text-xs text-[#9ca3af] mb-4 leading-relaxed">
              Our infrastructure architecture team will contact <span className="text-white font-mono">{email}</span> within 4 business hours to arrange an NDA-backed technical deep-dive.
            </p>

            <div
              className={`p-3.5 rounded border font-mono text-xs mb-4 text-left ${
                isLightMode ? 'bg-[#f8f9fa] border-[#e5e7eb]' : 'bg-[#14171f] border-[#242936]'
              }`}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#232731]">
                <div className="flex items-center gap-1.5 text-[#9ca3af]">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Architecture Spec Summary</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyBlueprint}
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                >
                  {copiedBlueprint ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedBlueprint ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="text-[11px] leading-relaxed text-[#8c93a0] max-h-48 overflow-y-auto">
                {sampleBlueprint}
              </pre>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`w-full py-2.5 rounded font-sans text-xs font-medium cursor-pointer border ${
                isLightMode
                  ? 'bg-white border-[#e5e7eb] hover:bg-[#f9fafb]'
                  : 'bg-[#191c24] border-[#2e3340] hover:bg-[#222631]'
              }`}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
