import React, { useState } from 'react';
import { AGENT_SCENARIOS } from '../data/specs';
import { AgentScenario } from '../types';
import { Terminal, Shield, CheckCircle, AlertTriangle, KeyRound, Play, FileCode2 } from 'lucide-react';

interface AgentInspectorProps {
  isLightMode: boolean;
}

export const AgentInspector: React.FC<AgentInspectorProps> = ({ isLightMode }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('reconciliation');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(2); // showing review required state
  const [isApprovedByHuman, setIsApprovedByHuman] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'timeline' | 'raw_audit'>('timeline');

  const scenario: AgentScenario =
    AGENT_SCENARIOS.find((s) => s.id === selectedScenarioId) || AGENT_SCENARIOS[0];

  const handleScenarioChange = (id: string) => {
    setSelectedScenarioId(id);
    setActiveStepIndex(2);
    setIsApprovedByHuman(false);
  };

  const handleSimulateHumanApproval = () => {
    setIsApprovedByHuman(true);
    setActiveStepIndex(scenario.steps.length - 1);
  };

  return (
    <section id="governance" className="py-20 border-b transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2">
            Governed Agent Runtime
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Autonomous Execution Under Strict Policy Gates.
          </h2>
          <p className={`text-base sm:text-lg ${isLightMode ? 'text-[#4b5563]' : 'text-[#9ca3af]'}`}>
            Agents at ClosemindLabs are not open-ended prompt loops. Every database write, cluster modification,
            and API payload is evaluated against deterministic Open Policy Agent rules with cryptographic human-in-the-loop consensus.
          </p>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {AGENT_SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                type="button"
                id={`scenario-tab-${sc.id}`}
                onClick={() => handleScenarioChange(sc.id)}
                className={`px-3.5 py-2 rounded text-xs font-mono transition-all cursor-pointer border ${
                  selectedScenarioId === sc.id
                    ? isLightMode
                      ? 'bg-[#111827] text-white border-[#111827]'
                      : 'bg-[#1e222a] text-white border-emerald-500/60 shadow-xs'
                    : isLightMode
                    ? 'bg-white text-[#4b5563] border-[#e5e7eb] hover:bg-[#f9fafb]'
                    : 'bg-[#121417] text-[#9ca3af] border-[#22252c] hover:bg-[#181b21]'
                }`}
              >
                <span>{sc.title}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="view-mode-timeline-btn"
              onClick={() => setViewMode('timeline')}
              className={`px-2.5 py-1.5 rounded text-xs font-mono cursor-pointer border flex items-center gap-1.5 ${
                viewMode === 'timeline'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'text-[#6b7280] border-transparent hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Trace View</span>
            </button>
            <button
              type="button"
              id="view-mode-audit-btn"
              onClick={() => setViewMode('raw_audit')}
              className={`px-2.5 py-1.5 rounded text-xs font-mono cursor-pointer border flex items-center gap-1.5 ${
                viewMode === 'raw_audit'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'text-[#6b7280] border-transparent hover:text-white'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Raw Merkle Log</span>
            </button>
          </div>
        </div>

        {/* Live Simulator Workspace */}
        <div
          className={`rounded-lg border overflow-hidden transition-colors ${
            isLightMode ? 'bg-[#ffffff] border-[#e5e7eb]' : 'bg-[#0f1115] border-[#22252c]'
          }`}
        >
          {/* Terminal Titlebar */}
          <div
            className={`px-4 py-3 border-b flex flex-wrap items-center justify-between gap-3 text-xs font-mono ${
              isLightMode
                ? 'bg-[#f8f9fa] border-[#e5e7eb] text-[#4b5563]'
                : 'bg-[#13151a] border-[#22252c] text-[#9ca3af]'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>STATE_MACHINE: ACTIVE</span>
              </span>
              <span className="text-[#4b5563]">|</span>
              <span>DOMAIN: {scenario.category}</span>
              <span className="text-[#4b5563]">|</span>
              <span>BLAST_RADIUS: {scenario.blastRadiusScore}</span>
            </div>

            <div className="text-[11px] text-[#6b7280]">
              TOTAL STEPS: {scenario.steps.length} | KMS SIGNED: TRUE
            </div>
          </div>

          {viewMode === 'timeline' ? (
            <div className="p-4 sm:p-6 space-y-6">
              {/* Mission Objective Bar */}
              <div
                className={`p-3.5 rounded border text-xs font-mono flex items-start gap-3 ${
                  isLightMode
                    ? 'bg-[#f3f4f6] border-[#e5e7eb] text-[#1f2937]'
                    : 'bg-[#14171d] border-[#262a34] text-[#d1d5db]'
                }`}
              >
                <span className="text-emerald-500 font-bold">MISSION:</span>
                <span>{scenario.objective}</span>
              </div>

              {/* Execution Steps Trace */}
              <div className="space-y-4">
                {scenario.steps.map((step, idx) => {
                  const isPendingReview = step.status === 'review_required' && !isApprovedByHuman;
                  const isStepLocked = idx > activeStepIndex && !isApprovedByHuman;

                  return (
                    <div
                      key={step.stepNumber}
                      className={`p-4 rounded-md border font-mono text-xs transition-all ${
                        isPendingReview
                          ? 'border-amber-500/60 bg-amber-500/5 shadow-xs'
                          : isStepLocked
                          ? 'opacity-40 border-dashed border-[#262a34] bg-transparent'
                          : isLightMode
                          ? 'border-[#e5e7eb] bg-[#fafafa]'
                          : 'border-[#22252c] bg-[#121419]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded bg-[#20242e] text-[#9ca3af] text-[10px]">
                            STEP 0{step.stepNumber}
                          </span>
                          <span className="text-[#6b7280]">{step.timestamp}</span>
                          <span className="font-semibold text-emerald-400">{step.actor}</span>
                        </div>

                        {/* Status Badges */}
                        <div>
                          {isPendingReview ? (
                            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" />
                              <span>DUAL-KEY APPROVAL REQUIRED</span>
                            </span>
                          ) : step.status === 'executed' ? (
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              <span>EXECUTED & COMMITTED</span>
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded bg-[#1c2029] text-[#9ca3af] border border-[#2a2f3d]">
                              POLICY VERIFIED
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="font-sans font-medium text-sm mb-2 text-white">
                        {step.action}
                      </div>

                      {step.policyCheck && (
                        <div className="mb-2.5 text-[11px] text-emerald-400/90 flex items-center gap-1.5">
                          <Shield className="w-3 h-3" />
                          <span>{step.policyCheck}</span>
                        </div>
                      )}

                      {/* Payload snippet */}
                      <div
                        className={`p-2.5 rounded border text-[11px] overflow-x-auto ${
                          isLightMode
                            ? 'bg-white border-[#e5e7eb] text-[#374151]'
                            : 'bg-[#0a0b0e] border-[#1d2027] text-[#9ca3af]'
                        }`}
                      >
                        <code>{step.payload}</code>
                      </div>

                      {/* Interactive Dual-Key Approval Button */}
                      {isPendingReview && (
                        <div className="mt-4 pt-3 border-t border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div className="text-[11px] text-amber-300/80">
                            Action exceeds blast radius threshold ($10k limit). Human sign-off enforced.
                          </div>
                          <button
                            type="button"
                            id="simulate-approval-btn"
                            onClick={handleSimulateHumanApproval}
                            className="px-3.5 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs cursor-pointer flex items-center gap-1.5 transition-all shrink-0"
                          >
                            <KeyRound className="w-3.5 h-3.5" />
                            <span>Sign & Authorize (FIDO2/WebAuthn)</span>
                          </button>
                        </div>
                      )}

                      <div className="mt-2 text-[10px] text-[#4b5563] truncate">
                        HASH: {step.verificationHash}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Raw Merkle Audit Log Mode */
            <div className="p-4 sm:p-6 font-mono text-xs overflow-x-auto bg-[#090a0d] text-[#86efac]">
              <pre className="leading-relaxed">
{`// CLO闘MIND LABS DETERMINISTIC MERKLE LEDGER
// PROOF CHAIN VERIFIED VIA ENTERPRISE KMS (AWS/VAULT)
// ZERO TELEMETRY EGRESS VERIFIED (0 BYTES)

BLOCK_ROOT: 0x9f83c60517b4d0ad729171ec03f1131005a41ae84c2d03185197522f1832722b
TIMESTAMP: ${new Date().toISOString()}
CLUSTER_ID: customer-prod-vpc-us-east-1a
POLICY_VERSION: OPA-v2.12.0

`}{scenario.steps.map((s, i) => `[RECORD_${i+1}] ${s.timestamp} | ACTOR: ${s.actor}
  ACTION: ${s.action}
  POLICY_GATE: ${s.policyCheck || 'N/A'}
  PAYLOAD_DIGEST: ${s.verificationHash.slice(0, 32)}...
  STATE: ${s.status.toUpperCase()}
`).join('\n')}{`
>> MERKLE_LEAF_SIGNATURE: 0xed25519_verified_ok
>> DATA_EGRESS_FIREWALL: 0 PACKETS SENT TO INTERNET`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
