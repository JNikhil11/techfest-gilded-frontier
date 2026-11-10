/**
 * Verified Factual Corpus & Live 2026–2027 Programme Data Dictionary
 * Primary Official Source: https://techfest.org/
 * Verification Timestamp: 2026-11-10T18:30:00+05:30
 */

export interface FestivalMetadata {
  edition: string;
  editionNumber: number;
  officialTheme: string;
  creativeArtDirection: string;
  tagline: string;
  durationDisplay: string;
  dates: {
    finalsDisplay: string;
    finalsStartISO: string; // Asia/Kolkata
    finalsEndISO: string;
    accommodationWindow: string;
    twmunDates: string;
  };
  venue: {
    institution: string;
    locality: string;
    city: string;
    state: string;
    country: string;
    entryPolicy: string;
  };
  verifiedMetrics: Array<{
    value: string;
    label: string;
    context: string;
    sourceUrl: string;
    verifiedAt: string;
  }>;
}

export const TECHFEST_METADATA: FestivalMetadata = {
  edition: "30th Edition",
  editionNumber: 30,
  officialTheme: "An Aetherial Renaissance",
  creativeArtDirection: "The Gilded Frontier",
  tagline: "Asia's Largest Science and Technology Festival",
  durationDisplay: "3 Days • December 16–18, 2026",
  dates: {
    finalsDisplay: "December 16–18, 2026",
    finalsStartISO: "2026-12-16T00:00:00+05:30",
    finalsEndISO: "2026-12-18T23:59:59+05:30",
    accommodationWindow: "December 15, 2026 (6:00 AM IST) – December 19, 2026 (10:00 AM IST)",
    twmunDates: "December 17–18, 2026"
  },
  venue: {
    institution: "Indian Institute of Technology Bombay (IIT Bombay)",
    locality: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    entryPolicy: "Free Festival Entry with a Valid Institution / Government Photo ID"
  },
  verifiedMetrics: [
    {
      value: "30th",
      label: "Milestone Edition",
      context: "Three decades of pioneering science, engineering, and innovation at IIT Bombay.",
      sourceUrl: "https://ca.techfest.org/",
      verifiedAt: "2026-11-10"
    },
    {
      value: "1,80,000+",
      label: "Annual Footfall",
      context: "Students, researchers, industry leaders, and visitors converging at the Powai campus.",
      sourceUrl: "https://techfest.org/",
      verifiedAt: "2026-11-10"
    },
    {
      value: "35,000+",
      label: "Competition Participants",
      context: "Competing across regional city zonals and international qualifiers from 20+ nations.",
      sourceUrl: "https://techfest.org/competitions",
      verifiedAt: "2026-11-10"
    },
    {
      value: "20+",
      label: "Participating Countries",
      context: "Global representation across International Robowars, IRC, TWMUN, and autonomous racing.",
      sourceUrl: "https://techfest.org/",
      verifiedAt: "2026-11-10"
    }
  ]
};

export interface CompetitionItem {
  id: string;
  title: string;
  category: "Robotics & Hardware" | "AI & Software Agents" | "Aerospace & DeepTech" | "Quant, Coding & Sustainability";
  prizePool: string;
  prizeValueNumeric: number;
  status: "OPEN" | "CLOSED";
  format: string;
  shortSummary: string;
  technicalHighlights: string[];
  scoringOrRulesSummary?: string;
  exploreUrl: string;
  registerUrl: string;
  sourceUrl: string;
  verifiedAt: string;
  contactPerson?: {
    name: string;
    email: string;
    phone: string;
  };
}

export const VERIFIED_COMPETITIONS: CompetitionItem[] = [
  {
    id: "meshmerize",
    title: "Meshmerize",
    category: "Robotics & Hardware",
    prizePool: "INR 1,00,000",
    prizeValueNumeric: 100000,
    status: "OPEN",
    format: "City Zonals + Grand Finale at IIT Bombay (Max 4 Members/Team)",
    shortSummary: "An autonomous line-following robot challenge where bots map a maze in an exploratory Dry Run (3 mins), store the optimal path in onboard memory, and race through the shortest path in the Actual Run (2 mins 30 secs).",
    technicalHighlights: [
      "Bot dimensions must fit within 220mm x 220mm x 220mm; onboard power max 24V DC.",
      "Red indicator LED must illuminate upon reaching the end zone; maximum 3 restarts allowed.",
      "Top teams per zonal advance to IIT Bombay Finals (Dec 16–18, 2026)."
    ],
    scoringOrRulesSummary: "Total Score = A (25 × checkpoints) + B (30 if Dry Run completed) + C (180 - Dry Run sec) + S (30 if shortest path) + L (5 if LED glows) + T (150 - Actual Run sec) - Penalties.",
    exploreUrl: "https://techfest.org/competitions/meshmerize",
    registerUrl: "https://techfest.org/competitions/meshmerize",
    sourceUrl: "https://techfest.org/competitions/meshmerize",
    verifiedAt: "2026-11-10",
    contactPerson: {
      name: "Harshil Anjara",
      email: "harshiltechfest08@gmail.com",
      phone: "+91 9726797878"
    }
  },
  {
    id: "zero-code",
    title: "ZeroCode",
    category: "AI & Software Agents",
    prizePool: "INR 80,000",
    prizeValueNumeric: 80000,
    status: "OPEN",
    format: "Individual Competition • City Zonals (70-Min Live Build) + IIT Bombay Finals",
    shortSummary: "A high-stakes test of prompt engineering precision where participants have 70 minutes to turn a surprise brief into a complete vanilla HTML/CSS/JS web application using exclusively Google AI Studio (Gemini Flash model) with zero manual code edits.",
    technicalHighlights: [
      "First 5 prompts are free; prompts 6–15 incur a formulaic score deduction (capped at 15 pts); >15 prompts disqualifies.",
      "Strict output of 3 standalone files (_index.html, _style.css, _script.js) with no external frameworks.",
      "Top 15 participants per zonal city advance to the on-site Grand Finale at IIT Bombay."
    ],
    scoringOrRulesSummary: "Scored on Core Feature Completion (50 pts), Interactivity (15 pts), Visual Clarity (15 pts), Error-Free Execution (10 pts), and Creativity (10 pts), minus prompt-efficiency deductions.",
    exploreUrl: "https://techfest.org/competitions/zero-code",
    registerUrl: "https://techfest.org/competitions/zero-code",
    sourceUrl: "https://techfest.org/competitions/zero-code",
    verifiedAt: "2026-11-10",
    contactPerson: {
      name: "Siddhi Jain",
      email: "siddhi@techfest.org",
      phone: "+91 8349034485"
    }
  },
  {
    id: "agentic-service-workflows",
    title: "Autonomous AI Agents for Professional Workflows",
    category: "AI & Software Agents",
    prizePool: "INR 3,00,000",
    prizeValueNumeric: 300000,
    status: "OPEN",
    format: "National AI Engineering Challenge",
    shortSummary: "Build autonomous AI agents that transform complex professional service workflows—across hiring, investing, compliance, and deep research—into end-to-end software solutions powered by agent-native data infrastructure.",
    technicalHighlights: [
      "End-to-end multi-step orchestration with verifiable state persistence.",
      "Direct domain tracks in financial compliance, talent intelligence, and investment research.",
      "Live registration open on the official Techfest Competitions portal."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "national-aeromodelling",
    title: "National Aeromodelling Challenge",
    category: "Aerospace & DeepTech",
    prizePool: "INR 1,00,000",
    prizeValueNumeric: 100000,
    status: "OPEN",
    format: "Fixed-Wing Payload RC Aircraft Challenge",
    shortSummary: "A payload-focused RC aircraft challenge where student teams design and build their own fixed-wing plane to carry golf balls, load and unload them hands-free, and fly a timed round trip where every second on the ground costs points.",
    technicalHighlights: [
      "Custom airframe aerodynamics and automated/hands-free payload bay actuation.",
      "Timed flight envelope balancing payload mass against ground turnaround speed.",
      "On-site flight finals at IIT Bombay during December 16–18, 2026."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ayushtech-innovate",
    title: "AyushTech Innovate: National Open Ayurveda AI Challenge",
    category: "AI & Software Agents",
    prizePool: "INR 1,00,000",
    prizeValueNumeric: 100000,
    status: "OPEN",
    format: "Open-Source LLM Healthcare Challenge",
    shortSummary: "Build trustworthy, source-grounded, and medically safe software frameworks using IIT Bombay's open-source AyurParam LLM for Ayurvedic clinical, academic, and public health applications.",
    technicalHighlights: [
      "Powered by IIT Bombay's indigenous AyurParam Large Language Model.",
      "Focus on citation grounding, clinical safety guardrails, and public health deployment.",
      "Open to student developers and AI researchers nationwide."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "trueforge-vscode-agent",
    title: "TrueForge Editor-Native Coding Agent Challenge",
    category: "AI & Software Agents",
    prizePool: "INR 1,00,000",
    prizeValueNumeric: 100000,
    status: "OPEN",
    format: "VS Code Extension & Agent Harness Build",
    shortSummary: "Build an editor-native coding agent as a Visual Studio Code extension whose agent loop runs on TrueForge (TrueFoundry's open-source agent harness), featuring multi-file edits, smart context retrieval, safe diff reviews, and immediate cancellations.",
    technicalHighlights: [
      "Built on TrueFoundry's open-source TrueForge agent harness.",
      "Evaluated on AST-aware context retrieval, multi-file transactional diffs, and sub-second cancellation UX."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "spherical-bot-challenge",
    title: "Spherical Bot Obstacle Arena Challenge",
    category: "Robotics & Hardware",
    prizePool: "INR 1,00,000",
    prizeValueNumeric: 100000,
    status: "OPEN",
    format: "12-Obstacle Hardware Arena Race",
    shortSummary: "A kinetic hardware engineering challenge where students design and build a manually controlled wireless spherical robot and race it through a 12-obstacle arena testing internal pendulum/omni-drive traction, balance, and precision control.",
    technicalHighlights: [
      "Internal propulsion mechanism housed completely within a sealed spherical shell.",
      "12 high-friction, incline, and narrow-bridge obstacles."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "innovatex-future-habitats",
    title: "InnovateX: The Future Habitats Challenge",
    category: "Quant, Coding & Sustainability",
    prizePool: "INR 80,000",
    prizeValueNumeric: 80000,
    status: "OPEN",
    format: "National Urban & Environmental Innovation Competition",
    shortSummary: "Calls on student innovators and interdisciplinary teams to engineer scalable solutions for critical urban infrastructure, climate resilience, and sustainable habitat challenges.",
    technicalHighlights: [
      "Architectural, civil, IoT, and environmental systems integration.",
      "Evaluated on technical feasibility, lifecycle impact, and economic viability."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "meity-cycloidal-rotor",
    title: "MeitY Cycloidal Rotor Drone Module Challenge",
    category: "Aerospace & DeepTech",
    prizePool: "Up to INR 25,50,000",
    prizeValueNumeric: 2550000,
    status: "CLOSED",
    format: "MeitY-Funded National Deep-Tech Challenge",
    shortSummary: "A national, Ministry of Electronics & IT (MeitY) funded challenge to design a build-ready cycloidal rotor propulsion module for drones, taking teams from concept to CAE-supported detailed engineering design under expert mentorship.",
    technicalHighlights: [
      "Staged R&D grant funding up to INR 25.5 Lakhs.",
      "Computational fluid dynamics (CFD) and structural CAE verification."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "meity-drone-forensics",
    title: "MeitY Drone Forensics & Intrusion-Detection Challenge",
    category: "Aerospace & DeepTech",
    prizePool: "Up to INR 25,50,000",
    prizeValueNumeric: 2550000,
    status: "CLOSED",
    format: "4-Month Staged Field-Testable Hardware/Software Program",
    shortSummary: "A national MeitY-funded deep-tech program where teams build real, field-testable drone forensics or airspace intrusion-detection systems over four months with staged milestone funding.",
    technicalHighlights: [
      "RF telemetry analysis, acoustic/radar fusion, and post-flight digital forensics.",
      "Up to INR 25.5 Lakhs in milestone-linked development grants."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "code-auditor-ai-debug",
    title: "National AI Code Auditing & Systems Integration Suite",
    category: "Quant, Coding & Sustainability",
    prizePool: "INR 3,80,000",
    prizeValueNumeric: 380000,
    status: "CLOSED",
    format: "Algorithmic, Quantitative & Defect-Auditing Finale",
    shortSummary: "Challenges participants to evaluate, diagnose, and fix subtle defects in AI-generated codebases and integrate quantitative reasoning algorithms into a unified non-regressing production system.",
    technicalHighlights: [
      "High-pressure non-regression auditing and quantitative system synthesis.",
      "INR 3,80,000 prize pool."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  },
  {
    id: "mhi-icat-ev-sustainability",
    title: "MHI & ICAT EV Charging & Automotive Sustainability Challenge",
    category: "Quant, Coding & Sustainability",
    prizePool: "INR 3,50,000",
    prizeValueNumeric: 350000,
    status: "CLOSED",
    format: "Ministry of Heavy Industries & ICAT National Track",
    shortSummary: "Student teams build AI-driven geospatial and lifecycle solutions to map India's EV charging infrastructure and assess automotive sustainability in association with the Ministry of Heavy Industries and ICAT.",
    technicalHighlights: [
      "Backed by the Ministry of Heavy Industries (Govt. of India) and ICAT.",
      "INR 3,50,000 prize pool."
    ],
    exploreUrl: "https://techfest.org/competitions",
    registerUrl: "https://techfest.org/competitions",
    sourceUrl: "https://techfest.org/competitions",
    verifiedAt: "2026-11-10"
  }
];

export interface WorkshopItem {
  id: string;
  title: string;
  track: "Dual-Certificate Combos" | "AI & Data" | "Engineering & Robotics" | "Technology & Cybersecurity" | "Business, Finance & Management";
  currentPriceINR: number;
  originalPriceINR: number;
  badge?: string;
  description: string;
  exploreUrl: string;
  registerUrl: string;
  sourceUrl: string;
  verifiedAt: string;
}

export const VERIFIED_WORKSHOPS: WorkshopItem[] = [
  // DUAL-CERTIFICATE COMBOS
  {
    id: "combo-ai-ml",
    title: "Artificial Intelligence + Machine Learning",
    track: "Dual-Certificate Combos",
    currentPriceINR: 3499,
    originalPriceINR: 4499,
    badge: "Earn 2 Certificates • FESTIVE10 Eligible",
    description: "Comprehensive dual-certification track mastering neural architectures, supervised/unsupervised pipelines, and real-world model deployment.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "combo-drone-robotics",
    title: "Drone Technology + Robotics",
    track: "Dual-Certificate Combos",
    currentPriceINR: 11999,
    originalPriceINR: 15999,
    badge: "Earn 2 Certificates • Hardware Intensive",
    description: "Full-spectrum aerial robotics and mechatronics dual build program covering flight controllers, kinematics, sensor fusion, and autonomous navigation.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "combo-dl-ml",
    title: "Deep Learning + Machine Learning",
    track: "Dual-Certificate Combos",
    currentPriceINR: 3299,
    originalPriceINR: 4399,
    badge: "Earn 2 Certificates",
    description: "From classical statistical learning to multi-layer perceptrons, CNNs, transformers, and production gradient optimization.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "combo-hacking-cloud",
    title: "Ethical Hacking + Cloud Computing",
    track: "Dual-Certificate Combos",
    currentPriceINR: 3199,
    originalPriceINR: 3499,
    badge: "Earn 2 Certificates",
    description: "Offensive penetration testing methodologies paired with resilient, zero-trust cloud infrastructure architecture.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "combo-ent-analytics",
    title: "Entrepreneurship + Business Analytics",
    track: "Dual-Certificate Combos",
    currentPriceINR: 2799,
    originalPriceINR: 3999,
    badge: "Earn 2 Certificates",
    description: "Venture creation, unit economics, and data-driven decision modeling for technical founders and product leaders.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "combo-anim-uiux",
    title: "Animation + UI/UX Design",
    track: "Dual-Certificate Combos",
    currentPriceINR: 2799,
    originalPriceINR: 3799,
    badge: "Earn 2 Certificates",
    description: "Human-centered interface systems, interactive prototyping, and motion design principles.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },

  // AI & DATA
  {
    id: "ws-agentic-stack",
    title: "Agentic Stack: A Builder's Playbook for Production AI Agents",
    track: "AI & Data",
    currentPriceINR: 1699,
    originalPriceINR: 1999,
    badge: "Flagship 2026 Track",
    description: "Architect tool-calling autonomous agents, memory graphs, deterministic evaluation harnesses, and multi-agent production workflows.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-artificial-intelligence",
    title: "Artificial Intelligence",
    track: "AI & Data",
    currentPriceINR: 1999,
    originalPriceINR: 2299,
    description: "Foundational to advanced AI search, knowledge representation, neural networks, and applied generative models.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-llms-python",
    title: "LLMs using Python",
    track: "AI & Data",
    currentPriceINR: 1899,
    originalPriceINR: 2199,
    description: "Tokenization, transformer attention internals, RAG pipelines, fine-tuning (LoRA/QLoRA), and inference optimization in Python.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-data-science",
    title: "Data Science",
    track: "AI & Data",
    currentPriceINR: 1899,
    originalPriceINR: 2199,
    description: "Exploratory statistical analysis, feature engineering, predictive modeling, and high-dimensional visualization.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-prompt-engineering",
    title: "Prompt Engineering",
    track: "AI & Data",
    currentPriceINR: 1799,
    originalPriceINR: 2199,
    description: "Structured reasoning chains, few-shot calibration, schema enforcement, and adversarial prompt defense.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },

  // ENGINEERING & ROBOTICS
  {
    id: "ws-robotics",
    title: "Robotics",
    track: "Engineering & Robotics",
    currentPriceINR: 6299,
    originalPriceINR: 7999,
    badge: "Hands-On Hardware Kit",
    description: "Kinematics, microcontroller programming, motor driver actuation, and autonomous sensor integration.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-drone-tech",
    title: "Drone Technology",
    track: "Engineering & Robotics",
    currentPriceINR: 6299,
    originalPriceINR: 7999,
    badge: "Hands-On Aerial Build",
    description: "Multi-rotor aerodynamics, flight dynamics, ESC calibration, telemetry, and autonomous waypoint missions.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-iot-arduino-rpi",
    title: "IoT using Arduino or Raspberry Pi",
    track: "Engineering & Robotics",
    currentPriceINR: 5499,
    originalPriceINR: 6299,
    badge: "Edge AI + Hardware",
    description: "Gain hands-on experience building complete IoT systems with Arduino and Raspberry Pi, covering sensors, connectivity, cloud dashboards, and Edge AI.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },

  // TECHNOLOGY & CYBERSECURITY
  {
    id: "ws-fullstack",
    title: "Full Stack Development",
    track: "Technology & Cybersecurity",
    currentPriceINR: 1799,
    originalPriceINR: 1999,
    description: "Modern reactive frontend architectures, scalable REST/GraphQL APIs, relational/NoSQL persistence, and cloud deployment.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-ethical-hacking",
    title: "Ethical Hacking",
    track: "Technology & Cybersecurity",
    currentPriceINR: 1799,
    originalPriceINR: 2199,
    description: "Reconnaissance, network vulnerability assessment, OWASP Top 10 exploitation, and defensive hardening.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-electric-vehicles",
    title: "Electric Vehicles",
    track: "Technology & Cybersecurity",
    currentPriceINR: 1899,
    originalPriceINR: 2299,
    description: "Battery Management Systems (BMS), traction motors, power electronics converters, and EV powertrain simulation.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },

  // BUSINESS, FINANCE & MANAGEMENT
  {
    id: "ws-algo-trading",
    title: "Algorithmic Trading",
    track: "Business, Finance & Management",
    currentPriceINR: 1599,
    originalPriceINR: 1999,
    badge: "Includes Free Festival Pass",
    description: "Quantitative market microstructure, backtesting engines, statistical arbitrage, and automated execution risk controls.",
    exploreUrl: "https://techfest.org/workshops/algo-trading",
    registerUrl: "https://techfest.org/workshops/algo-trading",
    sourceUrl: "https://techfest.org/workshops/algo-trading",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-entrepreneurship",
    title: "Entrepreneurship",
    track: "Business, Finance & Management",
    currentPriceINR: 1499,
    originalPriceINR: 1999,
    description: "Zero-to-one product validation, venture fundraising mechanics, cap table structuring, and go-to-market execution.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  },
  {
    id: "ws-stock-market",
    title: "Stock Market & Equity Research",
    track: "Business, Finance & Management",
    currentPriceINR: 1699,
    originalPriceINR: 2199,
    description: "Fundamental valuation (DCF), financial statement forensics, technical charting, and portfolio construction.",
    exploreUrl: "https://techfest.org/workshops",
    registerUrl: "https://techfest.org/workshops",
    sourceUrl: "https://techfest.org/workshops",
    verifiedAt: "2026-11-10"
  }
];

export const SPECIAL_EXPERIENCES_DATA = {
  summit: {
    title: "International Summit",
    associatePartner: "CoinDCX",
    poweredBy: "Juspay",
    earlyBirdPriceINR: 999,
    regularPriceINR: 1299,
    dates: "December 16–18, 2026",
    url: "https://techfest.org/summit",
    sourceUrl: "https://techfest.org/summit",
    verifiedAt: "2026-11-10",
    description: "Techfest's premier global leadership conclave bringing together technology executives, AI pioneers, quantitative researchers, and policymakers. Past editions have hosted luminaries including Dr. A.P.J. Abdul Kalam, Rakesh Sharma (India's first astronaut), ISRO Chairman S. Somanath, and Akash Ambani."
  },
  robowars: {
    title: "International Robowars",
    weightCategories: ["8 KGS", "15 KGS", "30 KGS", "60 KGS"],
    spectators: "20,000+ Live Arena Spectators",
    url: "https://techfest.org/robowars",
    sourceUrl: "https://techfest.org/robowars",
    verifiedAt: "2026-11-10",
    description: "India's largest and most celebrated combat robotics spectacle. Armored kinetic machines engineered by international and national teams clash inside a bulletproof arena with spinning drums, pneumatic flippers, and hydraulic crushers."
  },
  twmun: {
    title: "Techfest World MUN (TWMUN)",
    dates: "December 17–18, 2026",
    url: "https://techfest.org/twmun",
    sourceUrl: "https://techfest.org/twmun",
    verifiedAt: "2026-11-10",
    description: "A two-day international diplomatic conference at IIT Bombay tackling science policy, cyber warfare governance, outer-space treaties, and global socioeconomic security."
  },
  ignite: {
    title: "Techfest Ignite — National Technical Alliance",
    seedGrantPool: "INR 1,00,000 National Seed Grant Pool (Rank 1: ₹50,000 | Rank 2: ₹30,000 | Rank 3: ₹20,000)",
    tracks: [
      {
        name: "Track 1: Ignite Catalyst",
        target: "Emerging college technical clubs & first-time fests (< 3 years)",
        perks: "Official IIT Bombay accreditation, 1-on-1 Core Team mentorship, turn-key blueprints, and eligibility for the ₹1 Lakh Seed Grant Pool."
      },
      {
        name: "Track 2: Ignite Vanguard",
        target: "Established annual college technical festivals (> 3 years)",
        perks: "Institutional co-branding, National Leadership Summit delegate invitations, and Convocation Hall VIP recognition at IIT Bombay."
      }
    ],
    url: "https://techfest.org/ignite",
    sourceUrl: "https://techfest.org/ignite",
    verifiedAt: "2026-11-10"
  },
  caProgram: {
    title: "Campus Ambassador (CA) Program",
    domains: ["Creatives", "Web", "Marketing", "Events", "Social Outreach", "Media and Publicity"],
    url: "https://ca.techfest.org/",
    sourceUrl: "https://ca.techfest.org/",
    verifiedAt: "2026-11-10",
    description: "Be the official representative of Asia's largest Science & Technology festival on your campus. Gain industry exposure, hands-on campaign leadership, and verified IIT Bombay credentials."
  },
  accommodation: {
    title: "On-Campus Hospitality & Accommodation",
    discountedFeeINR: 3999,
    originalFeeINR: 4499,
    duration: "4 Days & 4 Nights (Dec 15, 6:00 AM – Dec 19, 10:00 AM IST)",
    groupDiscounts: "Flat ₹150 off for groups > 4 people | Flat ₹300 off for groups > 12 people (Max group size: 20)",
    location: "Inside IIT Bombay Campus, Powai, Mumbai (First-Come, First-Served)",
    url: "https://techfest.org/accommodation",
    sourceUrl: "https://techfest.org/accommodation",
    verifiedAt: "2026-11-10"
  },
  verifiedContacts: [
    { role: "Workshops Coordinator", name: "Aryan Tamboli", phone: "+91 9702276874", email: "aryan@techfest.org" },
    { role: "Workshops Coordinator", name: "Aditya Jaswani", phone: "+91 9131765512", email: "aditya.jaswani@techfest.org" },
    { role: "Hospitality & Accommodation", name: "Ashutosh Agrawal", phone: "+91 9981146588", email: "ashutosh@techfest.org" },
    { role: "Hospitality & Accommodation", name: "Vishesh Srivastava", phone: "+91 7974797287", email: "vishesh@techfest.org" },
    { role: "Exhibitions & Robowars Manager", name: "Om Umekar", phone: "+91 8485000000", email: "om.umekar@techfest.org" },
    { role: "Meshmerize Competition Lead", name: "Harshil Anjara", phone: "+91 9726797878", email: "harshiltechfest08@gmail.com" },
    { role: "ZeroCode Competition Lead", name: "Siddhi Jain", phone: "+91 8349034485", email: "siddhi@techfest.org" },
    { role: "Hospitality Support Desk", name: "Hospitality Office", phone: "+91 9981146588", email: "hospitality@techfest.org" }
  ],
  officialLinks: {
    home: "https://techfest.org/",
    competitions: "https://techfest.org/competitions",
    workshops: "https://techfest.org/workshops",
    summit: "https://techfest.org/summit",
    robowars: "https://techfest.org/robowars",
    twmun: "https://techfest.org/twmun",
    ignite: "https://techfest.org/ignite",
    accommodation: "https://techfest.org/accommodation",
    contactUs: "https://techfest.org/contactus",
    campusAmbassador: "https://ca.techfest.org/"
  }
};
