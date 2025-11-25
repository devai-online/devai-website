export const typingTexts = [
  "We build AI agents.",
  "We integrate GPT into your stack.",
  "We deploy cloud-native platforms.",
  "We migrate legacy to the cloud.",
  "We build LLM pipelines.",
  "We secure your infrastructure.",
  "We create stunning websites.",
  "We build powerful dashboards.",
  "We automate your business.",
  "We ship fast and scale smart."
];

export const services = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    icon: "Bot",
    description: "Custom AI agents, LLM integration, and intelligent automation",
    features: [
      "AI system design and integration",
      "Custom chatbots and agents",
      "LLM-based tools and workflows",
      "RAG pipelines and vector databases",
      "Industry-specific AI solutions"
    ]
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    icon: "Cloud",
    description: "Full DevOps lifecycle, cloud migration, and infrastructure automation",
    features: [
      "CI/CD pipeline setup",
      "Kubernetes and Docker deployment",
      "Infrastructure as Code (Terraform)",
      "Cloud migration strategies",
      "Monitoring and observability"
    ]
  },
  {
    id: "networking-security",
    title: "Networking & Security",
    icon: "Shield",
    description: "Comprehensive network infrastructure and cybersecurity solutions",
    features: [
      "Sophos firewall and endpoint protection",
      "Network infrastructure design",
      "Cybersecurity audits and assessments",
      "VPN and remote access solutions",
      "Security monitoring and incident response"
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: "Code",
    description: "Modern, responsive websites and web applications",
    features: [
      "Custom website development",
      "E-commerce platforms",
      "Progressive Web Apps (PWA)",
      "API development and integration",
      "Performance optimization"
    ]
  },
  {
    id: "dashboard-analytics",
    title: "Dashboards & Analytics",
    icon: "BarChart3",
    description: "Interactive dashboards and data visualization solutions",
    features: [
      "Real-time analytics dashboards",
      "Business intelligence platforms",
      "Data visualization and reporting",
      "Custom KPI tracking systems",
      "Integration with existing data sources"
    ]
  },
  {
    id: "fullstack-dev",
    title: "AI Full-Stack Development",
    icon: "Cpu",
    description: "End-to-end AI application development with full-stack integration",
    features: [
      "Custom AI model development and deployment",
      "Full-stack AI application architecture",
      "AI-powered API and microservices",
      "Vector database integration and management",
      "Real-time AI inference pipelines"
    ]
  }
];

export const techStack = [
  // AI Technologies
  { name: "OpenAI GPT-4", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "Hugging Face", category: "AI" },
  { name: "TensorFlow", category: "AI" },
  { name: "PyTorch", category: "AI" },
  { name: "RAG Systems", category: "AI" },
  { name: "Vector Databases", category: "AI" },
  
  // Cloud Platforms
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Microsoft Azure", category: "Cloud" },
  
  // DevOps
  { name: "Kubernetes", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "GitOps", category: "DevOps" },

  // Security & Networking
  { name: "Sophos", category: "Security" },
  { name: "Cisco", category: "Networking" },
  { name: "Fortinet", category: "Security" },
  { name: "Palo Alto", category: "Security" },
  { name: "VPN Solutions", category: "Networking" },

  // Web Technologies
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "TypeScript", category: "Development" },

  // Analytics & Dashboards
  { name: "Tableau", category: "Analytics" },
  { name: "Power BI", category: "Analytics" },
  { name: "Grafana", category: "Monitoring" },
  { name: "D3.js", category: "Visualization" },
  { name: "Chart.js", category: "Visualization" },

  // AI Database Solutions
  { name: "Pinecone", category: "AI Database" },
  { name: "Weaviate", category: "AI Database" },
  { name: "Milvus", category: "AI Database" },
  { name: "Qdrant", category: "AI Database" },
  { name: "Chroma", category: "AI Database" }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Support Bot",
    category: "AI",
    description: "Custom GPT-4 based support agent with 95% resolution rate",
    tech: ["OpenAI", "LangChain", "React", "Node.js"],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: {
      "Response Time": "< 2 seconds",
      "Resolution Rate": "95%",
      "Cost Reduction": "60%"
    }
  },
  {
    id: 2,
    title: "Cloud Migration for FinTech Startup",
    category: "DevOps",
    description: "Migrated legacy infrastructure to AWS with 99.9% uptime",
    tech: ["AWS", "Kubernetes", "Terraform", "Docker"],
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: {
      "Uptime": "99.9%",
      "Cost Savings": "40%",
      "Deploy Time": "90% faster"
    }
  },
  {
    id: 3,
    title: "Enterprise Security Infrastructure",
    category: "Security",
    description: "Comprehensive Sophos-based security solution for 500+ employee company",
    tech: ["Sophos", "Cisco", "VPN", "SIEM"],
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: {
      "Threat Detection": "99.8%",
      "Response Time": "< 5 minutes",
      "Security Incidents": "Reduced by 85%"
    }
  },
  {
    id: 4,
    title: "Real-Time Analytics Dashboard",
    category: "Analytics",
    description: "High-performance dashboard processing 1M+ events per second",
    tech: ["React", "Node.js", "Redis", "PostgreSQL"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: {
      "Throughput": "1M+ events/sec",
      "Load Time": "< 500ms",
      "Accuracy": "99.8%"
    }
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with AI-powered recommendations",
    tech: ["Next.js", "Stripe", "OpenAI", "PostgreSQL"],
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: {
      "Conversion Rate": "Increased by 35%",
      "Page Load Speed": "< 2 seconds",
      "Mobile Performance": "95/100"
    }
  },
  {
    id: 6,
    title: "Network Infrastructure Upgrade",
    category: "Networking",
    description: "Complete network redesign with advanced routing and security",
    tech: ["Cisco", "Sophos", "SD-WAN", "Network Monitoring"],
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: {
      "Network Uptime": "99.99%",
      "Bandwidth": "Increased by 300%",
      "Security Threats": "Blocked 99.9%"
    }
  }
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    content: "Their AI integration transformed our customer support. Response times dropped by 80% while satisfaction scores increased dramatically.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, CloudScale",
    content: "The DevOps transformation was seamless. Our deployment frequency increased 10x with zero downtime migrations.",
    avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  }
];

export const clients = [
  {
    id: 1,
    name: "AA Designer Studio",
    website: "https://dev.aadesignerstudio.com",
    description: "Interior design studio creating beautiful, functional spaces that transform homes and businesses",
    logo: "/aa-designer-logo.png",
    category: "Interior Design",
    logoStyle: "minimalist"
  },
  {
    id: 2,
    name: "Picklout",
    website: "https://picklout.com",
    description: "Tournament platform for pickleball players, organizing competitive events and connecting the pickleball community",
    logo: "/picklout-logo.png",
    category: "Sports Platform",
    logoStyle: "modern"
  },
  {
    id: 3,
    name: "DiagnosticWale",
    website: "https://diagnosticwale.com",
    description: "Diagnostic services providing clarity in every test and care in every step for comprehensive health solutions",
    logo: "/diagnosticwale-logo.png",
    category: "Healthcare",
    logoStyle: "professional"
  },
  {
    id: 4,
    name: "WebRocket",
    website: "https://webrocket.biz",
    description: "Full-service digital marketing agency helping businesses grow through data-driven strategies and creative excellence",
    logo: "/webrocket.png",
    category: "Digital Marketing",
    logoStyle: "modern"
  },
  {
    id: 5,
    name: "KwikIT",
    website: "https://www.kwikit.in/",
    description: "Premium events supplies, corporate gifting, and sports equipment. Elevate your business with quality products at wholesale prices",
    logo: "/kwikit.png",
    category: "Business Supplies",
    logoStyle: "modern"
  }
];