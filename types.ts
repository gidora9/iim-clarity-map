
export interface MockContent {
  type: 'browser' | 'instagram' | 'ai';
  title?: string; // Generic title
  url?: string;
  
  // Browser / Search Ad
  adTitle?: string;
  adDesc?: string;
  
  // Landing Page Simulation
  lpHero?: string;
  lpSubtext?: string;
  lpBody?: string; // New: For reading phase
  buttonText?: string;
  
  // Instagram
  postCaption?: string; // New: For IG Post step
  formFields?: { label: string; placeholder: string }[];
  formOptions?: { label: string; value: string }[];
  footerText?: string;
  
  // AI Chat
  messages?: string[];
}

export interface NodeContent {
  title: string;
  items?: string[];
  mock?: MockContent;
}

export interface FlowData {
  id: string;
  name: string;
  connectorLabels: [string, string, string];
  nodes: {
    mental: NodeContent;
    trigger: NodeContent;
    landing: NodeContent;
    experience: NodeContent;
  };
}

export interface DecisionPhase {
  id: string;
  title: string;
  duration: string;
  items: string[];
}

export interface GlossaryItem {
  term: string;
  definition: string;
  reason: string;
  excluded: string;
}
