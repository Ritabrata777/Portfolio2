import type { TerminalData } from "~/types";

const makeBlock = (text: string) => <div className="py-1 whitespace-pre-line">{text}</div>;

const terminal: TerminalData[] = [
  {
    id: "readme",
    title: "readme.txt",
    type: "file",
    content: makeBlock(
      "Welcome to Ritabrata's portfolio workspace.\n\nUse ls, cd <folder>, cat <file>, clear, and help to explore."
    )
  },
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: makeBlock(
          "Ritabrata Majumdar is an Electronics and Communication Engineering undergraduate at Heritage Institute of Technology, Kolkata."
        )
      },
      {
        id: "about-focus",
        title: "focus.txt",
        type: "file",
        content: makeBlock(
          "Primary focus:\n- Blockchain applications\n- AI-assisted product experiences\n- Embedded systems and IoT\n- Fast, demo-ready prototypes"
        )
      },
      {
        id: "about-style",
        title: "working-style.txt",
        type: "file",
        content: makeBlock(
          "Working style:\n- Moves quickly from idea to prototype\n- Comfortable across interface, logic, deployment, and hardware\n- Interested in real-world utility over theory-only builds"
        )
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:ritabratamajumdar70@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ritabratamajumdar70@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Ritabrata777"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Ritabrata777
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/ritabrata-majumdar-764b81332"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ritabrata-majumdar-764b81332
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "projects",
    title: "projects",
    type: "folder",
    children: [
      {
        id: "project-medichain",
        title: "medichain.txt",
        type: "file",
        content: makeBlock(
          "MediChain\nSolidity / React / Firebase / IPFS\nBlockchain-powered telemedicine access log focused on visibility, auditability, and identity-aware record access."
        )
      },
      {
        id: "project-medivault",
        title: "medivault.txt",
        type: "file",
        content: makeBlock(
          "MediVault\nSolidity / IPFS / React / OpenAI\nDecentralized health records concept combining secure storage with AI-assisted information handling."
        )
      },
      {
        id: "project-medi-translate",
        title: "medi-translate.txt",
        type: "file",
        content: makeBlock(
          "Medi Translate\nTypeScript / JavaScript / Node.js\nMedical report summarizer aimed at making complex health information easier to understand."
        )
      },
      {
        id: "project-civic-lens",
        title: "civic-lens.txt",
        type: "file",
        content: makeBlock(
          "Civic Lens\nNext.js / Python / Hardhat / Polygon Amoy\nDigital infrastructure audit workflow combining OCR, AI-assisted processing, and blockchain-backed records."
        )
      },
      {
        id: "project-tollchain",
        title: "tollchain.txt",
        type: "file",
        content: makeBlock(
          "TollChain\nNext.js / Foundry / Scaffold-ETH 2 / Anon-Aadhaar\nBlockchain-based tolling concept exploring RFID flows with privacy-aware identity verification."
        )
      },
      {
        id: "project-health-monitor",
        title: "ai-health-monitor.txt",
        type: "file",
        content: makeBlock(
          "AI-Powered Health Monitor\nTensorFlow Lite / ESP32 / Supabase\nPortable multi-sensor disease screening concept built on embedded hardware and lightweight AI models."
        )
      },
      {
        id: "project-smart-irrigation",
        title: "smart-irrigation.txt",
        type: "file",
        content: makeBlock(
          "Smart Irrigation System\nArduino / IoT / AI-ML / C++\nAutomated irrigation prototype that combines sensor-driven logic with smarter watering decisions."
        )
      },
      {
        id: "project-fall-detection",
        title: "fall-direction-detection.txt",
        type: "file",
        content: makeBlock(
          "Fall Direction Detection\nESP32 / TinyML / Python / IoT\nElderly-safety concept using machine learning to detect and classify fall direction events."
        )
      },
      {
        id: "project-environment-robot",
        title: "autonomous-environmental-robot.txt",
        type: "file",
        content: makeBlock(
          "Autonomous Environmental Robot\nESP32-CAM / GPS Neo-6M / MQ-135\nSelf-navigating robot concept focused on sensing, mobility, and environmental monitoring."
        )
      },
      {
        id: "project-fan-control",
        title: "fan-speed-control.txt",
        type: "file",
        content: makeBlock(
          "Fan Speed Control\nATmega328P / DHT11\nEmbedded control build that adjusts fan speed dynamically according to ambient temperature."
        )
      },
      {
        id: "project-tars",
        title: "tars.txt",
        type: "file",
        content: makeBlock(
          "TARS\nESP8266 / Gemini API / OLED / Arduino\nAssistant robot with weather and conversational features, designed as a playful embedded AI build."
        )
      },
      {
        id: "project-cleanchain",
        title: "cleanchain.txt",
        type: "file",
        content: makeBlock(
          "CleanChain\nReact / Tailwind / Hardhat / Drizzle ORM\nDecentralized sanitation and waste management platform concept focused on transparency and coordination."
        )
      }
    ]
  },
  {
    id: "skills",
    title: "skills",
    type: "folder",
    children: [
      {
        id: "skills-languages",
        title: "languages.txt",
        type: "file",
        content: makeBlock("C, C++, HTML, CSS, JavaScript, Solidity, Move")
      },
      {
        id: "skills-frameworks",
        title: "frameworks.txt",
        type: "file",
        content: makeBlock("Node.js, Express.js, React.js, MongoDB, Firebase, Vercel")
      },
      {
        id: "skills-blockchain",
        title: "blockchain.txt",
        type: "file",
        content: makeBlock("Solidity, smart contracts, IPFS, Hardhat, Foundry, Web3 workflows")
      },
      {
        id: "skills-hardware",
        title: "embedded.txt",
        type: "file",
        content: makeBlock("Arduino, ESP32, ESP8266, IoT systems, TinyML experimentation")
      },
      {
        id: "skills-creative",
        title: "creative.txt",
        type: "file",
        content: makeBlock("Adobe Premiere Pro, After Effects, motion graphics, interface prototyping")
      }
    ]
  },
  {
    id: "experience",
    title: "experience",
    type: "folder",
    children: [
      {
        id: "experience-ambassador",
        title: "nssc-25.txt",
        type: "file",
        content: makeBlock(
          "Student Ambassador, NSSC '25\nNational Students' Space Challenge, IIT Kharagpur\nSupported outreach and represented the program as a campus-facing ambassador."
        )
      },
      {
        id: "experience-freelance",
        title: "freelance-creative.txt",
        type: "file",
        content: makeBlock(
          "Freelance Video Editor and Graphics Designer\nDelivered editing, motion graphics, and creative assets for branded content and digital campaigns."
        )
      },
      {
        id: "experience-community",
        title: "communities.txt",
        type: "file",
        content: makeBlock(
          "IEEE and GDG Member\nParticipates in technical communities, project collaboration, events, and continuous learning."
        )
      }
    ]
  },
  {
    id: "education",
    title: "education",
    type: "folder",
    children: [
      {
        id: "education-btech",
        title: "btech.txt",
        type: "file",
        content: makeBlock(
          "BTech in Electronics and Communication Engineering\nHeritage Institute of Technology, Kolkata\nBatch: HITK '28"
        )
      }
    ]
  },
  {
    id: "certifications",
    title: "certifications",
    type: "folder",
    children: [
      {
        id: "cert-data",
        title: "data-business.txt",
        type: "file",
        content: makeBlock(
          "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation"
        )
      },
      {
        id: "cert-blockchain",
        title: "blockchain.txt",
        type: "file",
        content: makeBlock("Cyfrin Updraft: Blockchain Basics and Solidity Smart Contract Development")
      },
      {
        id: "cert-cyber",
        title: "cybersecurity.txt",
        type: "file",
        content: makeBlock("Mastercard Cybersecurity Job Simulation")
      },
      {
        id: "cert-mobile",
        title: "mobile-development.txt",
        type: "file",
        content: makeBlock("Google Play Academy Store Listing Certificate")
      }
    ]
  }
];

export default terminal;
