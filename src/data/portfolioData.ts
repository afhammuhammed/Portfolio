export interface Project {
  id: string;
  title: string;
  category: "publication" | "ai-strategy" | "research" | "leadership";
  categoryLabel: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  metrics?: string[];
  milestones: string[];
  linkText?: string;
  linkUrl?: string;
  featured: boolean;
  featuredBadge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
  highlights: string[];
}

export interface MilestoneItem {
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  badge: string;
}

export interface HonorItem {
  title: string;
  category: "Diplomacy & MUN" | "Public Speaking" | "Athletics & Discipline" | "Innovation";
  award: string;
  description: string;
  badge: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const personalInfo = {
  name: "Afham Muhammed Ashraf",
  shortName: "Afham",
  tagline: "AI & Digital Strategy · Published Author · Tech Innovator",
  subheading: "Bridging the gap between artificial intelligence, business strategy, and human storytelling.",
  quote: "A data-driven strategist by day, and a published crime-thriller author by night.",
  bio: "I am a dynamic BBA student at Lovely Professional University, specializing in AI and Digital Marketing. My passion lies at the intersection of innovative technology, entrepreneurial leadership, and creative expression. Whether crafting a psychological thriller or analyzing digital market trends, my core objective remains the same: to connect with audiences and drive meaningful impact.",
  vision: "My career aspiration is to build a hybrid professional footprint—merging digital intelligence, strategic business growth, and creative communication into high-level entrepreneurship.",
  email: "afhamkl30@gmail.com",
  phone: "+91 80754 92133",
  location: "Lovely Professional University, Punjab · Kerala, India",
  avatar: "/avatar.jpg",
  availability: "Available for internships & creative collaborations",
  socials: {
    linkedin: "https://www.linkedin.com/in/afham-muhammed-ashraf-b4976b335",
    instagram: "https://instagram.com/afhm.co",
    github: "https://github.com/afham-ashraf",
    email: "mailto:afhamkl30@gmail.com",
    phone: "tel:+918075492133"
  }
};

export const stats = [
  { label: "Published Novel", value: "1", detail: "State Govt Released" },
  { label: "BBA Specialization", value: "AI & Mktg", detail: "LPU 1st Year" },
  { label: "MUN Accolade", value: "Best Delegate", detail: "Diplomacy & Research" },
  { label: "Sports & Martial Arts", value: "3+ Disciplines", detail: "Kung Fu & Athletics" }
];

export const corePillars = [
  {
    title: "AI Integration & Data Intelligence",
    description:
      "Leveraging generative AI, predictive algorithms, and consumer behavior analytics to architect high-conversion modern digital experiences.",
    icon: "BrainCircuit",
    bullets: ["Predictive consumer modeling", "AI prompt orchestration", "Workflow automation"]
  },
  {
    title: "Strategic Digital Growth",
    description:
      "Formulating market-entry digital campaigns, data-backed audience acquisition strategies, and high-impact omnichannel brand narratives.",
    icon: "TrendingUp",
    bullets: ["Growth marketing funnels", "Digital campaigning", "Performance metric analysis"]
  },
  {
    title: "Narrative & Long-Form Publishing",
    description:
      "Published author of 'It's Just a Character'. Blending psychological character depth, tension arcs, and narrative structuring to engage audiences.",
    icon: "BookOpen",
    bullets: ["Published crime thriller", "Psychological character analysis", "Creative storytelling"]
  },
  {
    title: "Diplomacy, Governance & Leadership",
    description:
      "Experienced student leader serving as General Secretary, MUN Best Presenter, and Election Commission Chairperson upholding institutional integrity.",
    icon: "Compass",
    bullets: ["Model United Nations delegate", "Institutional governance", "State-level public speaker"]
  }
];

export const projects: Project[] = [
  {
    id: "its-just-a-character",
    title: "It's Just a Character",
    category: "publication",
    categoryLabel: "Published Crime Thriller",
    subtitle: "Full-Length Psychological Crime-Thriller Novel",
    description:
      "A full-length published psychological crime-thriller exploring deep themes of identity, duality, and suspense. Officially released in the presence of the Honorable Chief Minister and the Education Minister of Kerala.",
    detailedDescription:
      "Successfully authored, structured, and published a full-length psychological crime-thriller novel. The work delves into complex character psychology, moral ambiguity, and narrative pacing. It gained statewide prestige and formal release with high-ranking dignitaries including the Chief Minister of Kerala and Education Minister.",
    tags: ["Creative Writing", "Psychological Thriller", "Book Publishing", "Character Analysis", "Narrative Arc"],
    metrics: [
      "Officially released by Hon. Chief Minister of Kerala",
      "Full-length novel published in print",
      "State-wide literary recognition"
    ],
    milestones: [
      "Conceptualized and drafted deep psychological crime mystery",
      "Rigorous character development and non-linear plot engineering",
      "Formal publication launch with dignitaries and media",
      "Public speaking discussions on creative narrative discipline"
    ],
    featured: true,
    featuredBadge: "Signature Masterpiece"
  },
  {
    id: "ai-marketing-intelligence",
    title: "AI Predictive Marketing Suite",
    category: "ai-strategy",
    categoryLabel: "AI & Computational Marketing",
    subtitle: "Automated Campaign Optimization & Consumer Insights",
    description:
      "A conceptual digital framework integrating generative AI and predictive analytics to simulate consumer responses, evaluate ad copy variants, and forecast market engagement.",
    detailedDescription:
      "Designed as part of the BBA AI & Digital Marketing curriculum at Lovely Professional University. The framework utilizes prompt engineering pipelines and behavioral pattern recognition to streamline campaign execution and optimize ROI for digital ad initiatives.",
    tags: ["AI Integration", "Digital Marketing", "Predictive Analytics", "Consumer Behavior", "Prompt Engineering"],
    metrics: [
      "Multi-variable ad copy simulation",
      "Target audience segmentation matrix",
      "Data-backed campaign scoring model"
    ],
    milestones: [
      "Modeled consumer sentiment pipelines across test demographics",
      "Integrated automated variant generation for digital ad testing",
      "Formulated ROI scoring metrics based on behavioral indicators"
    ],
    featured: true,
    featuredBadge: "AI Innovation"
  },
  {
    id: "ecometric-sdg-framework",
    title: "EcoMetric: Global SDG Action Engine",
    category: "research",
    categoryLabel: "Diplomacy & Research",
    subtitle: "UN Sustainability Target Visualization & Metric Tracker",
    description:
      "A research-backed framework designed during SDG Global Ambassador advocacy, providing structured tracking for institutional sustainability targets and international climate metrics.",
    detailedDescription:
      "Developed to support delegate debates and policy presentations at international forums. EcoMetric synthesizes UN Sustainable Development Goals data into intuitive progress indicators, earning recognition at the SDG Global Summit as 'Best Presenter'.",
    tags: ["UN SDGs", "Sustainability Data", "Research Methodologies", "Policy Presentation", "Diplomacy"],
    metrics: [
      "Recognized at SDG Global Summit",
      "Awarded Best Presenter Delegate",
      "Endorsed by international sustainability forum"
    ],
    milestones: [
      "Comprehensive research into UN 2030 climate & poverty targets",
      "Created structured presentation framework for international delegates",
      "Successfully defended policy recommendations in debate format"
    ],
    featured: true,
    featuredBadge: "Global Recognition"
  },
  {
    id: "scientific-innovation-launchpad",
    title: "Launchpad Scientific Innovation Project",
    category: "research",
    categoryLabel: "Scientific R&D",
    subtitle: "Award-Winning Science Exhibition & Analytical Model",
    description:
      "First-prize winning scientific project presenting creative solutions to complex physical dynamics and engineering challenges under competitive exhibition parameters.",
    detailedDescription:
      "Recognized with the Science Exhibition Winner award for presenting a rigorous prototype that combined analytical modeling with practical engineering. Completed as part of the prestigious Launchpad Research Program.",
    tags: ["Scientific Innovation", "Launchpad R&D", "Analytical Modeling", "Problem Solving", "Competitive Presentation"],
    metrics: [
      "1st Prize: Science Exhibition Winner",
      "Launchpad Research Certified",
      "Demonstrated under competitive conditions"
    ],
    milestones: [
      "Formulated hypothesis and tested experimental variables",
      "Constructed functional prototype demonstrating scientific principles",
      "Defended project before panel of academic evaluators"
    ],
    featured: false
  },
  {
    id: "institutional-governance-election",
    title: "Institutional Democratic Election System",
    category: "leadership",
    categoryLabel: "Governance & Leadership",
    subtitle: "Transparent Voting Protocols & Electoral Infrastructure",
    description:
      "Directed the institutional election process as Election Commission Chairperson, instituting fair voting mechanisms, candidate vetting guidelines, and transparent ballot auditing.",
    detailedDescription:
      "Spearheaded student body governance across the campus community. Drafted election codes of conduct, scheduled delegate town halls, and ensured 100% election transparency and dispute-free outcomes.",
    tags: ["Election Commission", "Institutional Governance", "Leadership", "Event Coordination", "Public Integrity"],
    metrics: [
      "Oversaw campus-wide democratic election",
      "Zero election disputes or auditing errors",
      "Formulated new governance charter"
    ],
    milestones: [
      "Designed standardized candidate application and review protocols",
      "Facilitated public debates and institutional voting procedures",
      "Supervised ballot tallying and certified victory declarations"
    ],
    featured: false
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "BBA in Digital Marketing & Artificial Intelligence",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "2024 — Present (1st Year)",
    focus: "Integration of modern AI in corporate growth, algorithmic market research, consumer psychology, and omnichannel digital campaigning.",
    highlights: [
      "Focusing on GenAI application in marketing workflows and predictive data analysis",
      "Analyzing digital market trends and computational consumer behavior",
      "Active participant in university strategic forums and tech clubs"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Face World Leadership School",
    location: "Kerala, India",
    period: "Graduated with Distinction",
    focus: "Core leadership foundation, rhetoric, organizational governance, and academic excellence.",
    highlights: [
      "Elected and served as General Secretary for the institution",
      "Selected as Class Leader for Grades 11 & 12",
      "Spearheaded large-scale institutional events, assemblies, and student welfare initiatives"
    ]
  }
];

export const milestonesList: MilestoneItem[] = [
  {
    title: "Published Novel Author & Creator",
    role: "Author of 'It's Just a Character'",
    organization: "State Literary Release",
    period: "Milestone Achievement",
    description:
      "Authored a full-length psychological crime thriller. Officially unveiled and published in the presence of the Honorable Chief Minister and the Education Minister of Kerala.",
    achievements: [
      "Complete book development lifecycle from ideation to release",
      "Direct endorsement by state government dignitaries",
      "Mastery of long-form narrative pacing and psychology"
    ],
    badge: "Government Honors"
  },
  {
    title: "Launchpad Research Program",
    role: "Certified Research Scholar",
    organization: "Launchpad Advanced R&D",
    period: "Academic Milestone",
    description:
      "Certified for actively participating in advanced research methodologies, structured literature reviews, and strategic planning initiatives.",
    achievements: [
      "Trained in rigorous qualitative and quantitative data methodologies",
      "Synthesized complex research into actionable reports",
      "Collaborated with academic mentors on strategic initiatives"
    ],
    badge: "R&D Certified"
  },
  {
    title: "Election Commission Chairperson",
    role: "Chairperson & Chief Election Commissioner",
    organization: "Face World Leadership School",
    period: "Leadership Tenure",
    description:
      "Spearheaded institutional voting processes, ensuring fair governance, transparent oversight, and leadership structuring across the student body.",
    achievements: [
      "Administered campus-wide voting processes with complete integrity",
      "Instituted democratic debate formats for student candidates",
      "Drafted procedural guidelines for student council leadership"
    ],
    badge: "Governance"
  }
];

export const honorsList: HonorItem[] = [
  {
    title: "Model United Nations (MUN)",
    category: "Diplomacy & MUN",
    award: "Best Presenter Delegate",
    description:
      "Awarded top honors for exceptional research, persuasive diplomatic discourse, and parliamentary debate skills on international policy committees.",
    badge: "MUN Winner"
  },
  {
    title: "SDG Global Ambassador",
    category: "Diplomacy & MUN",
    award: "Certified SDG Ambassador",
    description:
      "Official certification for international sustainability awareness, championing the United Nations Sustainable Development Goals across youth forums.",
    badge: "UN SDG Certified"
  },
  {
    title: "SDG Global Summit",
    category: "Diplomacy & MUN",
    award: "Best Presenter Delegate",
    description:
      "Recognized as a premier delegate for articulately presenting international sustainability targets and measurable ecological roadmaps.",
    badge: "Global Summit"
  },
  {
    title: "faceX Talkshow Finalist",
    category: "Public Speaking",
    award: "State-Level Public Speaker",
    description:
      "Advanced to final rounds as a recognized state-level orator, demonstrating rapid extemporaneous reasoning and articulate speech delivery.",
    badge: "State Finalist"
  },
  {
    title: "ARTIVOX Recitation",
    category: "Public Speaking",
    award: "2nd Prize in English Recitation",
    description:
      "Secured 2nd prize in competitive English recitation, showcasing vocal modulation, poetic nuance, and stage presence.",
    badge: "Podium Finish"
  },
  {
    title: "Science Exhibition",
    category: "Innovation",
    award: "Science Exhibition Winner (1st Prize)",
    description:
      "Recognized for designing and presenting an innovative scientific project displaying strong analytical deduction under competitive conditions.",
    badge: "1st Prize"
  },
  {
    title: "Martial Arts & Kung Fu",
    category: "Athletics & Discipline",
    award: "Orange Belt in Kung Fu",
    description:
      "Attained Orange Belt rank through rigorous physical conditioning, disciplined forms (katas), and focused mental endurance.",
    badge: "Martial Artist"
  },
  {
    title: "District-Level Football & Kabaddi",
    category: "Athletics & Discipline",
    award: "District-Level Competitive Athlete",
    description:
      "Represented at the district tournament level in both Football and Kabaddi, exemplifying high-pressure teamwork and strategic tactical resilience.",
    badge: "District Athlete"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Computational Tools",
    skills: [
      { name: "GenAI Prompt Engineering", highlight: true },
      { name: "AI Marketing Integration", highlight: true },
      { name: "Predictive Analytics", highlight: true },
      { name: "Consumer Behavior Modeling" },
      { name: "AI Workflow Automation" },
      { name: "Python for Data Basics" }
    ]
  },
  {
    category: "Digital Strategy & Growth",
    skills: [
      { name: "Digital Campaign Strategy", highlight: true },
      { name: "Personal Branding Architecture", highlight: true },
      { name: "Market Trend Analysis" },
      { name: "Content Strategy & Copywriting" },
      { name: "Performance Attribution" },
      { name: "Audience Segmentation" }
    ]
  },
  {
    category: "Creative Writing & Publishing",
    skills: [
      { name: "Long-Form Crime Fiction", highlight: true },
      { name: "Psychological Character Design", highlight: true },
      { name: "Narrative Tension Structuring" },
      { name: "Manuscript Editing & Publishing" },
      { name: "Creative Storytelling" },
      { name: "Script & Dialogue Writing" }
    ]
  },
  {
    category: "Leadership & Diplomacy",
    skills: [
      { name: "Model United Nations Debate", highlight: true },
      { name: "State-Level Public Speaking", highlight: true },
      { name: "Institutional Governance" },
      { name: "Electoral Process Management" },
      { name: "Team Leadership & Coordination" },
      { name: "Crisis & Stakeholder Communication" }
    ]
  },
  {
    category: "Athletic Discipline & Resilience",
    skills: [
      { name: "Kung Fu (Orange Belt)", highlight: true },
      { name: "District Football" },
      { name: "District Kabaddi" },
      { name: "High-Pressure Performance" },
      { name: "Strategic Team Dynamics" }
    ]
  }
];
