export const SERVICES = [
  {
    id: 'software',
    number: '01',
    icon: 'Code2',
    title: 'Custom Software Development',
    summary:
      'Full-stack engineering built for reliability, not just launch day — from greenfield products to modernizing systems that can’t afford downtime.',
    bullets: ['Full-Stack Engineering', 'Legacy Modernization', 'API Design & Integration'],
  },
  {
    id: 'ai',
    number: '02',
    icon: 'BrainCircuit',
    title: 'AI & Machine Learning Integrations',
    summary:
      'Practical AI that ships — predictive models, LLM-powered features, and automation embedded directly into your existing workflows.',
    bullets: ['Predictive Analytics', 'LLM Integration', 'Process Automation'],
  },
  {
    id: 'cloud',
    number: '03',
    icon: 'Cloud',
    title: 'Enterprise Cloud Infrastructure',
    summary:
      'Cloud architecture and DevOps built for high availability, so the systems that run your business stay running.',
    bullets: ['Cloud Architecture', 'DevOps & CI/CD', 'High Availability Design'],
  },
  {
    id: 'security',
    number: '04',
    icon: 'ShieldCheck',
    title: 'Cybersecurity & Threat Intelligence',
    summary:
      'Security built in from the first commit — audits, threat modeling, and compliance work that holds up under real scrutiny.',
    bullets: ['Security Audits', 'Threat Modeling', 'Compliance Implementation'],
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    description:
      'We start by understanding your operational reality — scale, constraints, and failure modes — then design a system architecture around them.',
  },
  {
    number: '02',
    title: 'Iterative Engineering',
    description:
      'Work ships in short, reviewable cycles. You see progress continuously, not at the end of a black-box sprint.',
  },
  {
    number: '03',
    title: 'Security & QA Stress Testing',
    description:
      'Before anything reaches production, it’s tested against edge cases and adversarial conditions, not just the happy path.',
  },
  {
    number: '04',
    title: 'Deployment & Handover',
    description:
      'We deploy, document, and hand over systems your team can actually operate — with support during the transition.',
  },
]

export const CASE_STUDIES = [
  {
    id: 'argus',
    tag: 'Autonomous Navigation',
    title: 'Project ARGUS',
    subtitle: 'Autonomous Navigation (Taranis)',
    description:
      'Reliable, hardware-agnostic positioning for environments where standard navigation infrastructure is insufficient.',
    points: [
      { title: 'Modular Architecture', desc: 'Designed to integrate seamlessly into diverse hardware platforms.' },
      { title: 'SLAM Integration', desc: 'Advanced Simultaneous Localization and Mapping for real-time spatial awareness and pathfinding.' },
      { title: 'Standalone Operation', desc: 'Fully independent processing capabilities for edge deployments.' },
    ],
    stack: ['NVIDIA Jetson / Edge TPU Processing', 'LiDAR & Stereoscopic Vision Sensors', 'ROS 2', 'Real-time SLAM Algorithms'],
  },
  {
    id: 'plato',
    tag: 'Operations & Infrastructure',
    title: 'Project PLATO',
    subtitle: 'Operations & Resource Management',
    description:
      'Applying enterprise-grade reliability to localized operations and resource tracking, purpose-built for the unique needs of emerging markets.',
    points: [
      { title: 'Operational Efficiency', desc: 'Streamlined software architecture tailored for restaurant and hotel management workflows.' },
      { title: 'Market Localization', desc: 'Purpose-built with an initial focus on the unique operational needs of the Ethiopian market.' },
      { title: 'Scalable Deployment', desc: 'Intuitive scaling from single-node deployments to multi-location operations.' },
    ],
    stack: ['PostgreSQL Distributed Database', 'React / TypeScript Frontend', 'Node.js Microservices', 'Offline-first PWA Architecture'],
  },
]

export const FOUNDERS = [
  {
    name: 'Devyansh Shrivastava',
    role: 'CEO & Founder',
    email: 'devyansh@kalixsystems.com',
    quote:
      'Mission-critical infrastructure demands uncompromising reliability — built for the edge cases, not the happy path.',
  },
  {
    name: 'Atharva Shrivastava',
    role: 'CTO & Co-Founder',
    email: 'atharva@kalixsystems.com',
    quote: 'True engineering excellence isn’t built. It’s restored, refined, and proven under pressure.',
  },
]
