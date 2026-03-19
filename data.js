// ============================================================
// PORTFOLIO DATA — Edit this file to update your site content
// ============================================================

const SITE_DATA = {

  // ─── NAVIGATION & BRANDING ─────────────────────────────
  brand: "ENGINEER_CORE",
  navLinks: ["Experience", "Expertise", "Projects", "Education"],

  // ─── HERO SECTION ──────────────────────────────────────
  hero: {
    badge: "Available for New Challenges",
    firstName: "Oscar Allen",
    lastName: "Brioso.",
    description:
      "Multi-Platform Engineer specializing in high-performance iOS, Android, and Front-End ecosystems. Building precision-milled digital experiences.",
    primaryButton: { text: "Explore Projects", link: "#projects" },
    secondaryButton: { text: "📄 Resume", link: "https://drive.google.com/file/d/1UDRK8l-ERo02F2fKWVzdq8IU-oxzDMo1/view?usp=sharing" },
    location: "Makati City, PH",
    email: "oscallen@gmail.com",
    activeProgress: "Refining Mobile Architecture",
  },

  // ─── PROFESSIONAL HISTORY ──────────────────────────────
  // Each item: { date, role, roleLabel, company, companyRole, bullets OR description }
  experience: [
    {
      date: "Oct 2025 — Present",
      role: "Lead iOS Engineer",
      roleLabel: "Current Role",
      company: "Agile Digital Ventures Inc.",
      companyRole: "Hybrid",
      bullets: [
        "Develop and maintain the iOS application by resolving bugs and enhancing UI/UX based on QA feedback and business requirements.",
        "Ensure code quality and stability by implementing unit testing suites for essential features.",
        "Conduct code reviews for other iOS developers to ensure alignment with the team's coding standards and project requirements.",
        "Create technical documentation for the mobile team, including coding standards for both iOS and Android, to support internal and external collaborations and streamline workflows with other departments.",
        "Reduced application crash frequency by 30% since 2025 by proactively monitoring and diagnosing iOS and Android Crashlytics reports.",
        "Increased revenue by 15% by leading cross-platform digital marketing integrations and optimizing user flows for iOS and Android.",
        "Managed the end-to-end internal testing, release pipeline, and App Store distribution for iOS applications.",
      ],
    },
    {
      date: "Nov 2023 — May 2024",
      company: "Red Planet Hotels",
      companyRole: "iOS Developer (Hybrid)",
      bullets: [
        "Maintained and enhanced the company's iOS booking application for hotel branches in the Philippines and Thailand, improving stability, performance, and user experience, reducing app-issues by 40% from Q3 2024 to Q3 2025.",
        "Integrated RESTful APIs to enable efficient data retrieval, improving load times and enhancing user experience.",
        "Led the implementation of analytics, push notifications, cloud messaging, payment gateway integration, and UI/UX enhancements in the iOS app, contributing to a 40% increase in market coverage in Q2 2025.",
        "Collaborated with designers, product managers, android and backend engineers to deliver intuitive, user-friendly interfaces, ensuring clear and consistent communication of progress and blockers.",
      ],
    },
    {
      date: "July 2024 — Present",
      company: "D.W. Morgan",
      companyRole: "iOS Engineer (Intern)",
      bullets: [
        "Developed reusable Cocoapod libraries (document scanner, photo viewer) used across company apps.",
        "Improved project efficiency by ~30% through Jira-based workflow and Agile methodologies.",
        "Contributed to Sprint Planning and Retrospectives, ensuring iterative progress and alignment.",
      ],
    },
  ],

  // ─── EXPERTISE ─────────────────────────────────────────
  expertise: {
    headline: "Expertise.",
    description:
      "Precision engineering across the full stack, from core Swift development to robust DevOps pipelines.",
    categories: [
      {
        number: "01",
        title: "Languages & Frameworks",
        tags: ["Swift", "SwiftUI", "Objective-C", "UIKit", "Python", "Core Data", "XCTest"],
      },
      {
        number: "02",
        title: "Infrastructure & DevOps",
        tags: ["Firebase", "Fastlane", "App Store Connect", "Git", "Crashlytics", "AWS"],
      },
    ],
  },

  // ─── EDUCATION ─────────────────────────────────────────
  education: {
    academic: [
      {
        icon: "graduation",
        name: "University of the Philippines Los Baños",
        detail: "BS in Chemical Engineering",
        quote: '"Engineering rigor translated from chemical processes to digital architectures."',
      },
    ],
    certifications: [
      {
        icon: "shield",
        name: "OWASP Cybersecurity",
        detail: "Professional Certification",
      },
      {
        icon: "layers",
        name: "Agile Methodology",
        detail: "Workflow Training",
      },
    ],
  },

  // ─── FEATURED PROJECTS ─────────────────────────────────
  // visualStyle: "orbit" | "pan" | "grid" (CSS-generated placeholder)
  // Or use `image: "path/to/screenshot.png"` for a real image
  projects: [
    {
      title: "OrbitWatch",
      description: "Space education platform tracking the ISS with real-time NASA integration.",
      tags: ["SwiftUI", "Metal"],
      link: "#",
      visualStyle: "orbit",
      // image: "assets/orbitwatch.png",  ← uncomment to use a real image
    },
    {
      title: "PanTracker",
      description: "Intelligent inventory system featuring expiration alerts and categorization.",
      tags: ["CoreData", "UIKit"],
      link: "#",
      visualStyle: "pan",
      // image: "assets/pantracker.png",
    },
  ],

  // ─── CALL TO ACTION ────────────────────────────────────
  cta: {
    title: "Let's build something",
    highlight: "exceptional.",
    primaryButton: { text: "Get in Touch", link: "mailto:oscallen@gmail.com" },
    secondaryButton: { text: "0945-543-5449", link: "tel:09455435449" },
  },

  // ─── FOOTER ────────────────────────────────────────────
  footer: {
    copy: "",
    links: [
      { text: "Email", url: "mailto:oscallen@gmail.com" },
      { text: "LinkedIn", url: "#" },
      { text: "📃 Resume", url: "https://drive.google.com/file/d/1UDRK8l-ERo02F2fKWVzdq8IU-oxzDMo1/view?usp=sharing" },
    ],
  },
};
