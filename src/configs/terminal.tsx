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
          "Civic Lens\nNext.js 15 / Genkit AI / Hardhat / YOLOv8 / Firebase\nTransparent grievance redressal with AI triage, duplicate detection, YOLO violation detection and immutable action log."
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
          "AI-Powered Health Monitor (AURA)\nNext.js 15 / FastAPI / ESP32-S3 / Gemini / MongoDB\nAssistive smart-glasses health platform from aur/ with live dashboards, SOS and GPS. Pin diagram in pins.txt."
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
      },
      {
        id: "project-freducation",
        title: "freducation.txt",
        type: "file",
        content: makeBlock(
          "Freducation\nTanStack Start / Supabase / Gemini API / Tailwind\nCommunity academic library with PDF/link/MCQ uploads, auto-metadata, moderation queue and personalized feed."
        )
      },
      {
        id: "project-itms",
        title: "indigenous-itms.txt",
        type: "file",
        content: makeBlock(
          "Indigenous ITMS\nPython / FastAPI / EKF / Raspberry Pi\nContactless rail track monitoring MVP with 222 Hz edge pipeline, EKF denoising, defect segmenter and REST telemetry plus low-cost Pi variant."
        )
      },
      {
        id: "project-spectra-guard",
        title: "spectra-guard.txt",
        type: "file",
        content: makeBlock(
          "Spectra Guard\nNext.js 14 / FastAPI / OpenCV / EKF + PID\nFSOC coarse-alignment PAT console with physics engine and turbulence correction streaming JPEG+JSON over WebSocket."
        )
      },
      {
        id: "project-polaris-ice",
        title: "polaris-ice.txt",
        type: "file",
        content: makeBlock(
          "POLARIS-ICE\nPython / NumPy / Rasterio / SciPy\nPhysics-based lunar south-pole ice detection converting DFSAR CPR + DEM into ice masks, landing ranking and A* rover traverse."
        )
      },
      {
        id: "project-nafnet-sr",
        title: "nafnet-sr.txt",
        type: "file",
        content: makeBlock(
          "NAFNet-SR\nPyTorch / NAFNet / OpenCV / Gradio\nSemiconductor SEM denoising, deblurring and 4x super-resolution with synthetic degradation, 34.3 dB PSNR."
        )
      },
      {
        id: "project-secure-sensor",
        title: "secure-sensor.txt",
        type: "file",
        content: makeBlock(
          "Secure Sensor Pipeline\nESP32 / FastAPI / HMAC-SHA256 / WebSocket\nQuantum-resilient IoT telemetry with ESP32 TRNG, OTP mod-257 encryption, HMAC verification and live dashboard."
        )
      },
      {
        id: "project-oasis",
        title: "oasis-rf.txt",
        type: "file",
        content: makeBlock(
          "O.A.S.I.S\nPython / PyTorch / Dueling Double DQN / LSTM\nRF spectrum-scheduling simulator with POMDP environment and recurrent RL agent for frequency-agile emitter intercept."
        )
      },
      {
        id: "project-gemini-animator",
        title: "gemini-animator.txt",
        type: "file",
        content: makeBlock(
          "Gemini Animator\nExtendScript / CEP / Gemini 2.5 Flash / Node.js\nPrompt-to-animation After Effects tool with ScriptUI panel and CEP extension packaging self-signed ZXP."
        )
      },
      {
        id: "project-cutpilot",
        title: "cutpilot-ai.txt",
        type: "file",
        content: makeBlock(
          "CutPilot AI\nAdobe CEP / ExtendScript / Gemini Files API\nUnsigned Premiere Pro panel that uploads clips to Gemini and auto-assembles silence/viral/repeat cuts."
        )
      },
      {
        id: "project-mimo",
        title: "mimo-studio.txt",
        type: "file",
        content: makeBlock(
          "Mimo Studio\nRust / egui / Axum / Postgres / KiCad\nAI-assisted schematic studio monorepo: prompt to engineering plan with typed schematic/BOM proposal and KiCad exports."
        )
      },
      {
        id: "project-signal-analyzer",
        title: "signal-analyzer.txt",
        type: "file",
        content: makeBlock(
          "Signal Analyzer\nPython / PyQt6 / SciPy / scikit-learn\nHF/VHF/UHF IQ/WAV intelligence tool with modulation classification, demod, FEC decode and explainable AI brief."
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
        id: "experience-filosuite",
        title: "filosuite-intern.txt",
        type: "file",
        content: makeBlock(
          "Associate Backend Engineer Intern, Filosuite\nFilosuite - Internship - Jul 2026 to Present - India Remote\nBuilding backend solutions and strengthening backend development skills."
        )
      },
      {
        id: "experience-fof",
        title: "friends-of-figma.txt",
        type: "file",
        content: makeBlock(
          "Outreach Member, Friends of Figma Kolkata\nJan 2026 to Present\nCommunity outreach, offline events, and member engagement in the local design ecosystem."
        )
      },
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
        id: "cert-solidity",
        title: "solidity-dev.txt",
        type: "file",
        content: makeBlock(
          "Solidity Smart Contract Development\nCyfrin Updraft - Issued Jul 2025 - ID JOM634NUM441\nhttps://profiles.cyfrin.io/u/ritabrata070/achievements/solidity"
        )
      },
      {
        id: "cert-blockchain-basics",
        title: "blockchain-basics.txt",
        type: "file",
        content: makeBlock(
          "Blockchain Basics\nCyfrin - Issued Jun 2025 Expired Jun 2026 - ID BBCC-C6M4MMKVMHSTG"
        )
      },
      {
        id: "cert-cyber",
        title: "cybersecurity.txt",
        type: "file",
        content: makeBlock(
          "Mastercard Cybersecurity Job Simulation\nForage - Issued Dec 2024 - ID kqDJjbJpSWn8XCqzw"
        )
      },
      {
        id: "cert-data",
        title: "data-business.txt",
        type: "file",
        content: makeBlock(
          "Tata Data Visualisation\nForage - Issued Dec 2024 - ID 4AM7DoLQjDW4xZnQZ"
        )
      },
      {
        id: "cert-genai",
        title: "generative-ai.txt",
        type: "file",
        content: makeBlock("What Is Generative AI?\nLinkedIn - Issued Oct 2024")
      },
      {
        id: "cert-dl",
        title: "deep-learning.txt",
        type: "file",
        content: makeBlock(
          "Introduction to Deep Learning\nInfosys Springboard - Issued Oct 2024"
        )
      },
      {
        id: "cert-mobile",
        title: "mobile-development.txt",
        type: "file",
        content: makeBlock(
          "Google Play Store Listing Certificate\nGoogle - Issued Oct 2024 Expires Oct 2027 - ID 118617067"
        )
      }
    ]
  }
];

export default terminal;
