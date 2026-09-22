import { ArchitectureNode, AgentScenario, ComparisonFeature, DeploymentPlatform } from '../types';

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'perimeter',
    title: 'Customer Infrastructure Perimeter',
    layer: 'infrastructure',
    description: 'Physical or virtual isolation boundary. Air-gapped or private VPC with strictly zero outbound egress to public AI services.',
    details: [
      'Deploys as an immutable Helm chart or bare-metal container appliance',
      'No phone-home telemetry or external cloud dependencies',
      'eBPF kernel-level socket filtering rejects unauthorized external network packets',
      'Hardware security module (HSM / KMS) native integration for key management'
    ],
    specs: {
      'Network Egress': '0 bytes (Air-gap certified)',
      'Delivery': 'Helm / Terraform / OCI',
      'Orchestration': 'Kubernetes 1.28+, Nomad, Bare Metal',
      'Security Tier': 'FIPS 140-3 Level 3 compatible'
    }
  },
  {
    id: 'data-mesh',
    title: 'Zero-Copy Data & System Connectors',
    layer: 'data',
    description: 'Direct read/write access to enterprise systems using existing role-based access controls and encrypted service accounts.',
    details: [
      'Connects natively to PostgreSQL, Oracle, Snowflake, SAP, Salesforce, Git, and internal REST/gRPC endpoints',
      'Ephemeral in-memory context indexing—no third-party vector databases hosted off-site',
      'Field-level masking and automated PII redaction enforced at the storage driver layer',
      'Kerberos, Okta, and HashiCorp Vault credential brokering'
    ],
    specs: {
      'Storage Footprint': 'Stateless or Local NVMe',
      'Latency Overhead': '< 1.8ms per query',
      'Protocols': 'mTLS 1.3, gRPC, JDBC, ODBC',
      'IAM Integration': 'Okta, Active Directory, Vault'
    }
  },
  {
    id: 'kernel-governance',
    title: 'Governed Kernel & Policy Engine',
    layer: 'governance',
    description: 'The deterministic gatekeeper. Every proposed tool call, SQL query, or system modification is evaluated against organizational policy rules.',
    details: [
      'Declarative Open Policy Agent (OPA / Rego) policy compilation',
      'Dual-key cryptographic quorum for high-blast-radius system operations',
      'Deterministic state machine prevents infinite agent recursion or hallucinations',
      'Append-only cryptographic audit ledger signed by enterprise KMS keys'
    ],
    specs: {
      'Engine': 'Deterministic State Machine + OPA',
      'Blast Radius Guard': 'Automated dry-run simulation',
      'Audit Trail': 'Merkle tree ledger (SHA-256)',
      'Approval SLA': 'Configurable instant/dual-sign'
    }
  },
  {
    id: 'agent-runtime',
    title: 'Sovereign Agent Runtime & Model Tier',
    layer: 'execution',
    description: 'Model-agnostic inference engine running on customer GPU clusters (H100/A100/L40S) or dedicated private endpoints.',
    details: [
      'Run open weights (Llama 3.3, DeepSeek, Mistral, Qwen) or dedicated private cloud endpoints',
      'vLLM / TensorRT-LLM optimized execution pipeline with continuous batching',
      'Agent roles constrained to tight capability envelopes (read-only, transactional, administrative)',
      'Automated fallback and confidence-gated model routing'
    ],
    specs: {
      'Model Hosting': 'On-Prem vLLM / Dedicated VPC',
      'Throughput': 'Up to 3,800 tokens/sec/node',
      'Supported Weights': 'BF16 / FP8 / INT4 quantized',
      'Hardware Support': 'NVIDIA, AMD ROCm, Intel Gaudi'
    }
  }
];

export const AGENT_SCENARIOS: AgentScenario[] = [
  {
    id: 'reconciliation',
    title: 'Ledger vs. Payment Gateway Reconciliation',
    category: 'Financial Engineering',
    objective: 'Identify $42,180 discrepancy between Stripe transaction dump and SAP General Ledger without exposing customer banking data.',
    blastRadiusScore: 'Guarded',
    steps: [
      {
        stepNumber: 1,
        timestamp: '09:14:02.104',
        actor: 'Kernel Context Engine',
        action: 'Acquire Read-Only Session on SAP General Ledger',
        status: 'passed',
        policyCheck: 'POLICY_FIN_04: Read-Only Kerberos Token Verification',
        payload: 'SELECT transaction_id, amount_cents, currency, timestamp FROM ledger_entries WHERE date = CURRENT_DATE - INTERVAL 1 DAY AND status = "UNRECONCILED";',
        verificationHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
      },
      {
        stepNumber: 2,
        timestamp: '09:14:03.220',
        actor: 'Agent: FinOps-Worker-07',
        action: 'Cross-Match Stripe Inbound Batches via Vault Token',
        status: 'passed',
        policyCheck: 'POLICY_SEC_88: Ephemeral Token Lease (TTL 120s) Validated',
        payload: 'Isolated memory comparison of 14,892 records. PII masked: pan_hash, routing_num redacted.',
        verificationHash: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a'
      },
      {
        stepNumber: 3,
        timestamp: '09:14:04.015',
        actor: 'Agent: FinOps-Worker-07',
        action: 'Propose Ledger Adjusting Entry for Batch #9921',
        status: 'review_required',
        policyCheck: 'POLICY_FIN_12: Ledger adjustment > $10,000 requires Dual-Key Approval',
        payload: 'PROPOSE: INSERT INTO sap_gl_adjustments (batch_id, delta_cents, reason_code) VALUES ("B-9921", 4218000, "SETTLEMENT_TIMING_OFFSET");',
        verificationHash: '9f83c60517b4d0ad729171ec03f1131005a41ae84c2d03185197522f1832722b'
      },
      {
        stepNumber: 4,
        timestamp: '09:14:18.840',
        actor: 'Human Approver (Head of Treasury)',
        action: 'Cryptographic Signature via Enterprise IdP (WebAuthn)',
        status: 'approved',
        policyCheck: 'POLICY_AUTH_01: Valid FIDO2 Security Key Signature Verified',
        payload: 'SIGNATURE_ALGO: Ed25519; CERT_FINGERPRINT: 8a:12:ef:90:34:bc; USER: d.vance@internal.treasury',
        verificationHash: 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d'
      },
      {
        stepNumber: 5,
        timestamp: '09:14:19.412',
        actor: 'Kernel Execution Broker',
        action: 'Atomic Transaction Executed & Immutable Log Stamped',
        status: 'executed',
        policyCheck: 'POLICY_AUDIT_99: SHA-256 Block Appended to Internal Merkle Ledger',
        payload: 'TX_RECEIPT: sap-tx-8819024; STATUS: COMMITTED; EGRESS_RECORD: 0 BYTES EXPORTED',
        verificationHash: 'c745f94982a202755e3ffcfae2491a620d43a6c568ac181cf80f33d7b73b53f6'
      }
    ]
  },
  {
    id: 'incident-response',
    title: 'VPC Kubernetes Memory Leak Remediation',
    category: 'Core Infrastructure',
    objective: 'Detect runaway OOM-kill cycle in payment microservice cluster, isolate culprit worker node, and drain workload safely.',
    blastRadiusScore: 'Medium',
    steps: [
      {
        stepNumber: 1,
        timestamp: '14:22:10.002',
        actor: 'Kernel Observer',
        action: 'Prometheus Alert Ingested: OOMKilled Rate > 8/min',
        status: 'passed',
        policyCheck: 'POLICY_SRE_01: Automated Health Signal Validation',
        payload: 'ALERT: payment-service-v3-prod pods failing liveness probe on worker-node-04b.',
        verificationHash: '1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b'
      },
      {
        stepNumber: 2,
        timestamp: '14:22:11.450',
        actor: 'Agent: SRE-Guardian-02',
        action: 'Analyze Local Node Profiler & Pod Crash Dumps',
        status: 'passed',
        policyCheck: 'POLICY_PRIVACY_03: Core dump inspected locally without telemetry upload',
        payload: 'Stacktrace analysis identified thread lock contention in connection pool parser.',
        verificationHash: '3f4e5d6c7b8a90123456789abcdef0123456789abcdef0123456789abcdef01'
      },
      {
        stepNumber: 3,
        timestamp: '14:22:12.180',
        actor: 'Agent: SRE-Guardian-02',
        action: 'Execute Dry-Run Simulation for Node Cordon & Drain',
        status: 'passed',
        policyCheck: 'POLICY_SRE_14: Available cluster capacity headroom must exceed 28%',
        payload: 'SIMULATION RESULT: Remaining 11 nodes have 44.2% CPU / 51.8% RAM headroom. Safe to evict.',
        verificationHash: '9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba'
      },
      {
        stepNumber: 4,
        timestamp: '14:22:13.004',
        actor: 'Kernel Execution Broker',
        action: 'Automated Action: Cordon Node & Graceful Pod Redistribution',
        status: 'executed',
        policyCheck: 'POLICY_AUTO_09: P99 latency within baseline tolerance (+2.1ms)',
        payload: 'kubectl cordon worker-node-04b && kubectl drain --grace-period=45s --delete-emptydir-data',
        verificationHash: 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0'
      }
    ]
  },
  {
    id: 'compliance-audit',
    title: 'Automated SOC 2 & HIPAA Access Audit',
    category: 'Governance & Security',
    objective: 'Audit all employee and service-principal access grants across AWS IAM, GitHub, and production databases over previous 90 days.',
    blastRadiusScore: 'Low',
    steps: [
      {
        stepNumber: 1,
        timestamp: '03:00:01.210',
        actor: 'Kernel Scheduler',
        action: 'Mount Encrypted Audit Logs via KMS Envelope Key',
        status: 'passed',
        policyCheck: 'POLICY_GOV_01: Cryptographic key verification for audit logs',
        payload: 'Decrypt CloudTrail, Okta SystemLog, and PostgreSQL WAL logs in isolated RAM buffer.',
        verificationHash: 'b5d4c3b2a10987654321fedcba9876543210fedcba9876543210fedcba98765'
      },
      {
        stepNumber: 2,
        timestamp: '03:00:04.890',
        actor: 'Agent: Compliance-Auditor-01',
        action: 'Cross-Reference Active HR Status with IAM Grants',
        status: 'passed',
        policyCheck: 'POLICY_IAM_07: Offboarded accounts must have 0 active roles',
        payload: 'Scanned 1,240 identities. Identified 1 orphaned staging token created 41 days ago.',
        verificationHash: '7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d'
      },
      {
        stepNumber: 3,
        timestamp: '03:00:05.500',
        actor: 'Agent: Compliance-Auditor-01',
        action: 'Draft Immutable Remediation Incident Ticket',
        status: 'executed',
        policyCheck: 'POLICY_GOV_12: Automated SOC 2 evidence packet generated with timestamp proof',
        payload: 'INCIDENT: SEC-2026-088; ACTION: Auto-revoked staging token; EVIDENCE: sha256:7c8d... signed by kernel.',
        verificationHash: '9900aabbccddeeff00112233445566778899aabbccddeeff0011223344556677'
      }
    ]
  }
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    dimension: 'Data Residency & Custody',
    publicSaaS: 'Data leaves your VPC and streams to third-party multi-tenant cloud servers',
    managedWrapper: 'Data stored in vendor-managed cloud tenancy; subject to vendor terms',
    closemindLabs: '100% inside your VPC or bare-metal data center. Zero bytes egress.',
    verdict: 'superior'
  },
  {
    dimension: 'Model Weight Ownership',
    publicSaaS: 'Proprietary vendor black-box; can be deprecated, altered, or rate-limited anytime',
    managedWrapper: 'Limited choice of cloud-approved models behind managed proxies',
    closemindLabs: 'Bring your own open weights or proprietary fine-tunes. Complete architectural sovereignty.',
    verdict: 'superior'
  },
  {
    dimension: 'Agent Blast-Radius Control',
    publicSaaS: 'Prompt-based guardrails easily bypassed by prompt injection attacks',
    managedWrapper: 'Basic API rate limits and coarse credential scoping',
    closemindLabs: 'Deterministic state machine with OPA policies, blast-radius simulation, and dual-key sign-off.',
    verdict: 'superior'
  },
  {
    dimension: 'Air-Gapped & Regulated Environments',
    publicSaaS: 'Impossible. Requires direct internet connectivity to public APIs',
    managedWrapper: 'Requires complex private-link routing back into public cloud hyperscalers',
    closemindLabs: 'Native air-gap support. Operates with disconnected network interfaces without degradation.',
    verdict: 'superior'
  },
  {
    dimension: 'Auditability & Compliance',
    publicSaaS: 'Opaque server-side logs provided at vendor discretion',
    managedWrapper: 'Standard cloud provider logs mixed with vendor control plane events',
    closemindLabs: 'Cryptographically verifiable local Merkle audit trail signed with your KMS keys.',
    verdict: 'superior'
  },
  {
    dimension: 'Vendor Lock-in Risk',
    publicSaaS: 'Severe. Workflows hard-coded to single proprietary API interfaces',
    managedWrapper: 'High. Tied to single cloud ecosystem services and proprietary SDKs',
    closemindLabs: 'Zero. Kubernetes native, OCI container standard, OpenTelemetry, OPA standard.',
    verdict: 'superior'
  }
];

export const DEPLOYMENT_PLATFORMS: DeploymentPlatform[] = [
  {
    name: 'Air-Gapped Bare Metal',
    type: 'On-Premises Data Center',
    deliveryMethod: 'Offline Appliance / Air-Gap RPM & OCI Tarball',
    status: 'Certified',
    badge: 'Zero Egress'
  },
  {
    name: 'AWS EKS & Outposts',
    type: 'Private VPC & Dedicated Hardware',
    deliveryMethod: 'Terraform Module + Helm Chart via AWS KMS',
    status: 'Production-Ready',
    badge: 'VPC Isolated'
  },
  {
    name: 'Microsoft Azure AKS',
    type: 'Azure VNet & Azure Stack Hub',
    deliveryMethod: 'Helm + Azure Key Vault + Private Endpoints',
    status: 'Production-Ready',
    badge: 'FedRAMP Capable'
  },
  {
    name: 'Google Cloud GKE',
    type: 'Private Service Connect & Anthos',
    deliveryMethod: 'Cloud KMS + Private Cluster Operator',
    status: 'Production-Ready',
    badge: 'VPC-SC Ready'
  },
  {
    name: 'Red Hat OpenShift',
    type: 'Enterprise Hybrid Cloud',
    deliveryMethod: 'Certified OpenShift Operator + OperatorHub',
    status: 'Certified',
    badge: 'Enterprise IAM'
  }
];
