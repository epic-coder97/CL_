export interface ArchitectureNode {
  id: string;
  title: string;
  layer: 'infrastructure' | 'data' | 'governance' | 'execution';
  description: string;
  details: string[];
  specs: Record<string, string>;
}

export interface AgentStep {
  stepNumber: number;
  timestamp: string;
  actor: string;
  action: string;
  status: 'passed' | 'review_required' | 'approved' | 'executed' | 'verified';
  policyCheck?: string;
  payload: string;
  verificationHash: string;
}

export interface AgentScenario {
  id: string;
  title: string;
  category: string;
  objective: string;
  blastRadiusScore: 'Low' | 'Medium' | 'Guarded';
  steps: AgentStep[];
}

export interface ComparisonFeature {
  dimension: string;
  publicSaaS: string;
  managedWrapper: string;
  closemindLabs: string;
  verdict: 'superior' | 'standard';
}

export interface DeploymentPlatform {
  name: string;
  type: string;
  deliveryMethod: string;
  status: 'Production-Ready' | 'Certified';
  badge: string;
}
