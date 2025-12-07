// Portfolio Data - Centralized data for all sections

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  shortDescription: string;
  fullDescription: string[];
  type: "professional" | "academic";
  github?: string;
  demo?: string;
  period?: string;
  hasDemoAvailable: boolean;
  hasSourceCode: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  iconName?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  description: string;
  credentialUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  iconName: string;
}

// Projects Data
export const projects: Project[] = [
  {
    id: "canva-publish-intent",
    title: "Canva – Publish Intent Integrations",
    techStack: ["Node.js", "TypeScript", "React.js", "AWS", "Canva Apps SDK"],
    shortDescription: "System connecting third-party apps to Canva's publishing flow.",
    fullDescription: [
      "Worked on the Publish Intent system used to connect third-party apps to Canva's publishing flow.",
      "Built backend logic for app-specific settings, validation steps, and request handling.",
      "Managed and maintained integrations for 9 connected applications, focusing on debugging and stability.",
      "Improved reliability by identifying integration issues and strengthening error handling across the workflow.",
    ],
    type: "professional",
    period: "Aug 2025 – Present",
    hasDemoAvailable: false,
    hasSourceCode: false,
  },
  {
    id: "cloudtrip-flight-booking",
    title: "CloudTrip – Flight Booking Web App",
    techStack: ["React", "Ruby on Rails", "PostgreSQL", "Supabase"],
    shortDescription: "Flight booking system with dynamic pricing and seat management.",
    fullDescription: [
      "Built a flight booking system offering a simple, reliable, and efficient way to search, view, and book flights with dynamic pricing and seat availability.",
      "Enabled users to search flights by source, destination, date, class type, and passengers.",
      "Implemented dynamic pricing logic based on demand and availability.",
      "Created a server-rendered UI using ERB templates, later rebuilt frontend with React for a more dynamic experience.",
      "Migrated from file storage to PostgreSQL (Supabase) for persistence and scalability.",
      "Implemented round-trip bookings with single-transaction seat updates and fare breakdowns.",
      "Added recurring daily/weekly flight schedules through backend logic.",
    ],
    type: "professional",
    period: "Jun 2025 – Aug 2025",
    hasDemoAvailable: false,
    hasSourceCode: true,
    github:'https://github.com/USHASRI1112/cloudtrip'
  },
  {
    id: "quickchat",
    title: "QuickChat – Chatting Application",
    techStack: ["React Native", "Express", "Socket.IO", "PostgreSQL", "AWS", "Firebase"],
    shortDescription: "Real-time secure chat app with end-to-end encryption.",
    fullDescription: [
      "Built a secure real-time chat application enabling users to connect instantly using their phone number.",
      "Real-time chat with end-to-end encryption, phone number authentication, and email OTP verification.",
      "Push/in-app notifications, unread message tracking, chat deletion, contact discovery, and user blocking.",
      "Profile management with picture upload, account settings, and logout options.",
      "Implemented Socket.IO for real-time messaging and Firebase Cloud Messaging for push notifications.",
    ],
    type: "professional",
    period: "Mar 2025 – May 2025",
    hasDemoAvailable: false,
    hasSourceCode: true,
    github:'https://github.com/USHASRI1112/chat'
  },
  {
    id: "petbuddy",
    title: "PetBuddy – Mobile Pet Care Management",
    techStack: ["React Native", "Node.js", "Express", "MongoDB"],
    shortDescription: "Mobile app for managing pet health records and schedules.",
    fullDescription: [
      "Built a mobile-first pet care management application that helps pet lovers organize health records, feeding schedules, and activities of their pets.",
      "User and pet profile management with authentication and session handling.",
      "Reminders for medications, vet appointments, and daily care; activity logging and photo gallery.",
      "Directory for pet services and curated training/behaviour resources.",
      "Emergency contacts with quick access to vets and services, with one-tap call functionality.",
    ],
    type: "professional",
    period: "Dec 2024 – Feb 2025",
    hasDemoAvailable: false,
    github:'https://github.com/USHASRI1112/petbuddy',
    hasSourceCode: true,
  },
  {
    id: "fingrow",
    title: "FinGrow – Personal Finance Tracker",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Jest", "TDD"],
    shortDescription: "Full-stack finance management application.",
    fullDescription: [
      "Developed a full-stack web application to help users manage personal finances effectively.",
      "Developed income and expense tracking, budgeting, and savings goal management features.",
      "Implemented CSV imports and alert notifications for budget limits and savings milestones.",
      "Generated financial reports with filters and followed TDD using Jest for reliable components.",
      "Built React-based frontend with forms for transactions, budgets, savings goals, and dynamic report generation.",
    ],
    type: "professional",
    period: "Sep 2024 – Nov 2024",
    hasDemoAvailable: false,
    github:"https://github.com/USHASRI1112/fingrow",
    hasSourceCode: true,
  },
  {
    id: "hanami-ecommerce",
    title: "Hanami – E-Commerce Web Application",
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    shortDescription: "Modern e-commerce web app for clothing store with cart and wishlist.",
    fullDescription: [
      "Built a modern e-commerce web application for Hanami, a clothing store.",
      "Product showcase with responsive cards showing images, prices, ratings, availability, and discount badges.",
      "Wishlist & Notifications: Heart-based wishlist toggle and 'Notify Me' option with toast alerts.",
      "Cart management with live cart count, quantity adjustment, remove confirmation, and order placement flow.",
      "Live search to filter products by name with fallback message when no matches found.",
      "Individual product pages with size selection, wishlist/cart integration, and stock-aware button states.",
      "Checkout flow with order confirmation showing total bill and thank-you message.",
    ],
    type: "professional",
    period: "Jul 2024 – Aug 2024",
    hasDemoAvailable: false,
    hasSourceCode: true,
    github: "https://github.com/USHASRI1112/hanami"
  },
  {
    id: "grocery-store",
    title: "Grocery Store Web App",
    techStack: ["Vue", "Bootstrap", "Flask", "SQLAlchemy", "Celery", "Redis"],
    shortDescription: "Full-stack app with role-based access control.",
    fullDescription: [
      "A Full-stack app with role-based access control. Admins manage categories, store managers handle products (pending admin approval for deletions and signup).",
      "User-friendly product filtering/search. CRUD operations on categories, products, cart, and orders.",
      "Generate monthly Activity Report and scheduled emails and daily reminders using SMTP, Celery beat scheduler, and Redis caching.",
    ],
    type: "academic",
    github: "https://github.com/USHASRI1112/GROCERY_STORE_CRON_JOBS",
    hasDemoAvailable: false,
    hasSourceCode: true,
  },
  {
    id: "kaggle-sentiment",
    title: "Kaggle Competition – Sentiment Analysis",
    techStack: ["Pandas", "NumPy", "SciPy", "Scikit-learn"],
    shortDescription: "Sentiment analysis of movie reviews with ML algorithms.",
    fullDescription: [
      "Competed in a Kaggle competition focused on sentiment analysis of movie reviews.",
      "Conducted comprehensive data preprocessing using Pandas for data manipulation.",
      "Applied Logistic Regression, XGBoost, and AdaBoost algorithms.",
      "Achieved an accuracy score of 0.81482 in the competition.",
    ],
    type: "academic",
    github: "https://github.com/USHASRI1112/KaggleCompetition",
    hasDemoAvailable: false,
    hasSourceCode: true,
    // demo:"https://github.com/USHASRI1112/KaggleCompetition",
  },
];

// Skills Data with icons
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code2",
    skills: [
      { name: "JavaScript", iconName: "js" },
      { name: "TypeScript", iconName: "ts" },
      { name: "Python", iconName: "python" },
      { name: "Java", iconName: "java" },
      { name: "C", iconName: "C" },
      // { name: "Ruby", iconName: "ruby" },
    ],
  },
  {
    title: "Frontend",
    iconName: "Monitor",
    skills: [
      { name: "HTML5", iconName: "html" },
      { name: "CSS3", iconName: "css" },
      { name: "React.js", iconName: "react" },
      { name: "React Native", iconName: "react" },
      // { name: "Vue.js", iconName: "vue" },
      { name: "Figma", iconName: "figma" },
    ],
  },
  {
    title: "Backend",
    iconName: "Server",
    skills: [
      { name: "Node.js", iconName: "nodejs" },
      { name: "Express.js", iconName: "express" },
      { name: "Python Flask", iconName: "flask" },
      { name: "Ruby on Rails", iconName: "rails" },
      { name: "REST APIs", iconName: "api" },
    ],
  },
  {
    title: "Databases",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", iconName: "postgresql" },
      { name: "MongoDB", iconName: "mongodb" },
      { name: "MySQL", iconName: "mysql" },
      // { name: "SQLite", iconName: "sqlite" },
      { name: "Sequelize", iconName: "orm" },
      { name: "Mongoose", iconName: "odm" },
    ],
  },
  {
    title: "DevOps & Cloud",
    iconName: "Cloud",
    skills: [
      { name: "Docker", iconName: "docker" },
      { name: "AWS", iconName: "aws" },
      { name: "CI/CD", iconName: "cicd" },
      { name: "Jenkins", iconName: "jenkins" },
      { name: "GitHub Actions", iconName: "github" },
    ],
  },
  {
    title: "Tools & Practices",
    iconName: "Wrench",
    skills: [
      { name: "Git", iconName: "git" },
      { name: "TDD", iconName: "tdd" },
      { name: "Jest", iconName: "jest" },
      { name: "Socket.io", iconName: "socket" },
      { name: "Stripe", iconName: "stripe" },
      { name: "Agile", iconName: "agile" },
    ],
  },
];

// Certifications Data
export const certifications: Certification[] = [
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner AIF-C01",
    issuer: "Amazon Web Services",
    issuerLogo: "aws",
    date: "October 2025",
    description: "Basic understanding of AI/ML concepts and AWS AI services.",
  },
  {
    id: "stripe-associate",
    title: "Stripe Certified Associate Developer",
    issuer: "Stripe",
    issuerLogo: "stripe",
    date: "April 2025",
    description: "Covered Stripe APIs, authentication, and payment flows.",
  },
  {
    id: "stripe-professional",
    title: "Stripe Certified Professional Developer",
    issuer: "Stripe",
    issuerLogo: "stripe_pro",
    date: "April 2025",
    description: "Worked on advanced payment logic and integration patterns.",
  },
  {
    id: "stripe-billing",
    title: "Stripe Certified Billing Developer",
    issuer: "Stripe",
    issuerLogo: "stripe_billing",
    date: "April 2025",
    description: "Focused on subscriptions, invoicing, billing lifecycles, and customer flows.",
  },
  {
    id: "azure-dp900",
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    issuerLogo: "azure",
    date: "December 2025",
    description: "Passed with 883 aggregate score. Comprehensive understanding of Azure data services and cloud fundamentals.",
  },
  {
    id: "iit-ml-expertise",
    title: "Machine Learning Techniques Expertise",
    issuer: "IIT Madras",
    issuerLogo: "iit",
    date: "2024",
    description: "Certificate demonstrating expertise in advanced machine learning techniques and methodologies.",
  },
];

// Experience Data
export const experiences: Experience[] = [
  {
    id: "everest-swe",
    title: "Software Engineer",
    company: "Everest Engineering",
    type: "Full-Time",
    period: "September 2024 – Present",
    description: [
      "Design, develop, and maintain backend systems and APIs to support scalable applications.",
      "Integrate third-party services and external APIs to enhance application functionality.",
      "Troubleshoot, debug, and resolve production issues to ensure application reliability and uptime.",
      "Collaborate with cross-functional teams to implement new features and improve workflows efficiently.",
      "Follow best practices in coding, testing, and deployment to deliver high-quality software solutions.",
    ],
  },
  {
    id: "everest-intern",
    title: "Software Engineer Intern",
    company: "Everest Engineering",
    type: "Internship",
    period: "February 2024 – August 2024",
    description: [
      "Gained hands-on experience in software development, including designing backend systems, working with databases, writing tests, following DevOps workflows to deploy and maintain and developing frontend features for web and mobile applications.",
      "Improved problem-solving, collaboration, and coding practices by contributing to real-world projects, learning to work effectively in a team, and delivering reliable, high-quality solutions.",
    ],
  },
  {
    id: "iiith-nlp",
    title: "NLP Research Intern",
    company: "IIIT Hyderabad",
    type: "Internship",
    period: "March 2023 – June 2023",
    description: [
      "Engaged in a three-month remote internship at IIIT Hyderabad, exploring NLP by actively participating in the 'Introduction to NLP' course.",
      "Curated the 'Human Annotated Headline Classification Dataset' for Telugu language, showcasing proficiency in data annotation and NLP tasks.",
    ],
  },
];

// Education Data
export const education: Education[] = [
  {
    id: "iitm",
    degree: "BS in Data Science and Applications",
    institution: "IIT Madras",
    period: "2020 – 2024",
    // grade: "CGPA: 8",
  },
  {
    id: "rgukt",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
    period: "2020 – 2024",
    // grade: "CGPA: 8.5",
  },
];

// Contact Links
export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "ushasrigudikandula456@gmail.com",
    href: "mailto:ushasrigudikandula456@gmail.com",
    iconName: "Mail",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 6303961097",
    href: "tel:+916303961097",
    iconName: "Phone",
  },
  {
    id: "github",
    label: "GitHub",
    value: "USHASRI1112",
    href: "https://github.com/USHASRI1112",
    iconName: "Github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "usha-sri-gudikandula",
    href: "https://www.linkedin.com/in/usha-sri-gudikandula",
    iconName: "Linkedin",
  },
];

// Personal Info
export const personalInfo = {
  name: "Usha Sri Gudikandula",
  title: "Software Engineer",
  tagline: "Building scalable, end-to-end solutions that integrate robust backend systems with intuitive, responsive frontends.",
  about: [
    "I'm a Software Engineer at Everest Engineering with a passion for Full Stack Development and AI. I specialize in creating end-to-end solutions that combine robust backend systems with intuitive, responsive frontends.",
    "A natural self-learner, I gain deep expertise through hands-on experience and a trial-and-error approach, ensuring that I truly understand the technologies I work with. I'm highly adaptable, able to quickly grasp and implement new frameworks, languages, and tools.",
    "My goal is to contribute as a full-stack engineer by building scalable solutions while continuously growing into a well-rounded engineer who can bridge the gap between software development and data-driven insights.",
  ],
  interests: [
    "Full Stack Development",
    "Artificial Intelligence",
    "System Design",
    "Clean Architecture",
  ],
};
