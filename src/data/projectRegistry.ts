export const repoRegistry: Record<string, { desc: string; tags: string[] }> = {
  'CodexEngine': {
    desc: 'Deployed a production document intelligence platform (codex-engine.vercel.app) on LangGraph state machines featuring multi-tenant pgvector search, streaming SSE responses, and automated golden dataset faithfulness regression testing.',
    tags: ['Python', 'LangGraph', 'FastAPI', 'Next.js', 'pgvector', 'LangSmith', 'RAGAS'],
  },
  'commerce_cortex': {
    desc: 'Engineered a containerized multi-agent commerce backend featuring LangGraph state routing, PostgreSQL transactional checkpoints, Human-in-the-Loop approval gates, and 3-tier observability with OpenTelemetry and Langfuse distributed tracing.',
    tags: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Docker Compose', 'Langfuse', 'OpenTelemetry'],
  },
  'Nimbus': {
    desc: 'Engineered a multi-tenant autonomous coding agent platform featuring a trusted control plane, disposable Docker/MicroVM sandbox workspaces, real-time WebSocket event streams, and short-lived GitHub App credential brokering.',
    tags: ['Python', 'FastAPI', 'LangGraph', 'Docker', 'WebSockets', 'GitHub API'],
  },
  'AlgoDeck': {
    desc: 'Built a full-stack developer learning workstation featuring a dual-pane VS Code Monaco IDE, isolated subprocess execution sandbox (5s kill timeout, 512KB buffer limit), PostgreSQL 16 connection pooling, and automated test harness.',
    tags: ['Node.js', 'Express', 'PostgreSQL 16', 'Docker Compose', 'Monaco IDE'],
  },
  'Disha': {
    desc: 'A production-grade, agentic Personal Intelligence platform powered by LangGraph, pgvector, and async PostgreSQL.',
    tags: ['LangGraph', 'pgvector', 'Agentic AI'],
  },
  'Aura': {
    desc: 'A privacy-focused, edge-optimized Arch Linux biometric auth daemon decoupled via Unix domain sockets and PAM.',
    tags: ['Rust', 'PAM', 'Edge AI'],
  },
  'WellnessMate': {
    desc: 'Multi-agent health companion built with CrewAI and MediaPipe real-time posture tracking in a Tauri desktop shell.',
    tags: ['CrewAI', 'Tauri', 'Computer Vision'],
  },
  'vad_processor': {
    desc: 'Real-time, client-side Voice Activity Detection (VAD) built with Rust, WebAssembly, and ONNX Runtime.',
    tags: ['Rust', 'WASM', 'ONNX', 'VAD'],
  },
  'wikirag': {
    desc: 'A lightweight, fully offline RAG engine for Wikipedia querying using FAISS, RoBERTa, and Python.',
    tags: ['RAG', 'FAISS', 'Offline'],
  },
  'RecSys_RL': {
    desc: 'Reinforcement Learning algorithms and environments designed for dynamic recommendation and personalization.',
    tags: ['Reinforcement Learning', 'Recommendation Systems', 'Python'],
  },
}

export const hiddenRepos = [
  'anmolsharma152',
  'nextjs-portfolio',
  'anmolsharma152.github.io',
  'portfolio-website',
  'portfolio-website-html-drafts',
  'old-react-portfolio-website',
  '30-Days-Of-Python',
  'Practice',
  'HTML-Web-Designs',
]

export const verifiedLiveProjects: Record<string, string> = {
  CodexEngine: 'https://codex-engine.vercel.app',
}
