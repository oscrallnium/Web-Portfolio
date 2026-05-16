// ============================================================
// PORTFOLIO DATA — Edit this file to update your site content
// ============================================================

const SITE_DATA = {

  // ─── BRANDING ──────────────────────────────────────────
  brand: "oscar.brioso",

  navLinks: [
    { label: "experience", href: "#experience" },
    { label: "expertise",  href: "#expertise"  },
    { label: "projects",   href: "#projects"   },
    { label: "education",  href: "#education"  },
    { label: "contact",    href: "#contact"    },
  ],

  // ─── HERO ──────────────────────────────────────────────
  hero: {
    firstName:     "Oscar Allen",
    lastName:      "Brioso",
    role:          "iOS / Multi-Platform Engineer",
    description:   "iOS Engineer specializing in high-performance iOS, Android, and Front-End ecosystems. Building precision-milled digital experiences.",
    primaryButton:   { text: "explore projects", link: "#projects" },
    secondaryButton: { text: "./resume.pdf", link: "https://drive.google.com/file/d/1UDRK8l-ERo02F2fKWVzdq8IU-oxzDMo1/view?usp=sharing" },
    location:      "Makati City, PH",
    badge:         "Available for New Challenges",
    activeProgress:"Refining Mobile Architecture",
  },

  // ─── EXPERIENCE ────────────────────────────────────────
  // employment: short string shown as a tag (e.g. "hybrid", "internship", "remote")
  // current: true adds a "current" highlight badge
  experience: [
    {
      date:       "Oct 2025 — Present",
      role:       "Lead iOS Engineer",
      company:    "Agile Digital Ventures Inc.",
      employment: "hybrid",
      current:    true,
      bullets: [
        "Developed full-lifecycle iOS applications—optimizing UI/UX and App Store distribution.",
        "Ensured code quality by writing comprehensive unit tests from cart checkout through payment.",
        "Performed code reviews to ensure coding standard compliance.",
        "Created technical documentation for the mobile team.",
        "Led cross-platform digital marketing integrations and optimized user flows.",
        "Migrated legacy Storyboards to programmatic UIKit and SwiftUI.",
        "Managed the complete iOS lifecycle, from UI/UX enhancements to release pipelines and App Store distribution.",
      ],
    },
    {
      date:       "Jul 2024 — Sept 2025",
      role:       "iOS Developer",
      company:    "Red Planet Hotels",
      employment: "hybrid",
      bullets: [
        "Maintained and enhanced the company's iOS booking application for hotel branches in the Philippines and Thailand, reducing app-issues by 40% from Q3 2024 to Q3 2025.",
        "Integrated RESTful APIs to enable efficient data retrieval, improving load times and enhancing user experience.",
        "Led the implementation of analytics, push notifications, cloud messaging, payment gateway integration, and UI/UX enhancements, contributing to a 40% increase in market coverage in Q2 2025.",
        "Collaborated with designers, product managers, android and backend engineers to deliver intuitive, user-friendly interfaces.",
      ],
    },
    {
      date:       "Nov 2023 — May 2024",
      role:       "iOS Engineer (Intern)",
      company:    "D.W. Morgan",
      employment: "internship",
      bullets: [
        "Developed reusable Cocoapod libraries (document scanner, photo viewer) used across company apps.",
        "Improved project efficiency by ~30% through Jira-based workflow and Agile methodologies.",
        "Contributed to Sprint Planning and Retrospectives, ensuring iterative progress and alignment.",
      ],
    },
  ],

  // ─── EXPERTISE ─────────────────────────────────────────
  expertise: [
    {
      number: "01",
      title:  "languages & frameworks",
      tags:   ["Swift", "SwiftUI", "Objective-C", "UIKit", "Python", "Core Data", "XCTest", "Metal", "Alamofire"],
    },
    {
      number: "02",
      title:  "infrastructure & devops",
      tags:   ["Firebase", "Fastlane", "App Store Connect", "Git", "Crashlytics", "AWS"],
    },
  ],

  // ─── PROJECTS ──────────────────────────────────────────
  // shots: up to 3 image paths shown as a stacked phone mockup
  projects: [
    {
      slug:    "orbitwatch",
      title:   "OrbitWatch",
      year:    "2026",
      tagline: "Space education platform tracking the ISS with real-time NASA integration.",
      tags:    ["SwiftUI", "MapKit", "Async/Await", "NASA API"],
      link:    "orbitwatch.html",
      shots:   ["assets/ow-home.png", "assets/ow-iss.png", "assets/ow-apod.png"],
    },
    {
      slug:    "pantracker",
      title:   "PanTracker",
      year:    "2025",
      tagline: "Intelligent inventory system featuring expiration alerts, categorization, and receipt scanning.",
      tags:    ["UIKit", "Core Data", "VisionKit", "Notifications"],
      link:    "pantracker.html",
      shots:   ["assets/pt-inventory.png", "assets/pt-additem.png", "assets/pt-detail.png"],
    },
  ],

  // ─── EDUCATION ─────────────────────────────────────────
  education: {
    academic: [
      {
        name:   "University of the Philippines Los Baños",
        detail: "BS in Chemical Engineering",
        quote:  "Engineering rigor translated from chemical processes to digital architectures.",
      },
    ],
    certifications: [
      { name: "OWASP Cybersecurity", detail: "Professional Certification" },
      { name: "Agile Methodology",   detail: "Workflow Training"           },
    ],
  },

  // ─── CONTACT ───────────────────────────────────────────
  contact: {
    title:     "Let's build something",
    highlight: "exceptional.",
    lines: [
      { label: "mail", value: "oscallen@gmail.com",          href: "mailto:oscallen@gmail.com",            copy: "oscallen@gmail.com"                    },
      { label: "tel",  value: "+63 945 543 5449",            href: "tel:+639455435449",                    copy: "+639455435449"                         },
      { label: "link", value: "linkedin.com/in/oscrallnium", href: "https://linkedin.com/in/oscrallnium/", copy: "https://linkedin.com/in/oscrallnium/"  },
      { label: "loc",  value: "Makati City, Philippines",    href: null,                                    copy: null                                    },
    ],
  },

  // ─── FOOTER ────────────────────────────────────────────
  footer: {
    build: "v1.2.0 · built may 2026",
    links: [
      { text: "Email",    url: "mailto:oscallen@gmail.com"                                                   },
      { text: "LinkedIn", url: "https://linkedin.com/in/oscrallnium/"                                        },
      { text: "Resume",   url: "https://drive.google.com/file/d/1UDRK8l-ERo02F2fKWVzdq8IU-oxzDMo1/view?usp=sharing" },
    ],
  },
};
