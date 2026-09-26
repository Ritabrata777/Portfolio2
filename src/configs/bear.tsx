import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "ECE undergraduate building practical products across blockchain, AI, and embedded systems."
      },
      {
        id: "experience-snapshot",
        title: "Experience Snapshot",
        file: "markdown/experience-snapshot.md",
        icon: "i-carbon:user-avatar-filled-alt",
        excerpt: "Ambassador work, freelance creative projects, and technical communities."
      },
      {
        id: "about-site",
        title: "About This Portfolio",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Why the site now feels like a macOS desktop instead of a regular portfolio page."
      }
    ]
  },
  {
    id: "flagship",
    title: "Flagship",
    icon: "i-heroicons-solid:fire",
    md: [
      {
        id: "medichain",
        title: "MediChain",
        file: "markdown/projects/medichain.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "Blockchain telemedicine access log.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "mimo-studio",
        title: "Mimo Studio",
        file: "markdown/projects/mimo-studio.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "AI schematic studio in Rust.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "itms-prototype",
        title: "ITMS Prototype",
        file: "markdown/projects/itms-prototype.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "Rail track monitoring MVP.",
        link: "https://github.com/Ritabrata777"
      }
    ]
  },
  {
    id: "software",
    title: "Software",
    icon: "i-carbon:code",
    md: [
      {
        id: "sw-medichain",
        title: "MediChain",
        file: "markdown/projects/medichain.md",
        icon: "i-carbon:code",
        excerpt: "Blockchain telemedicine access log.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-civic-lens",
        title: "Civic Lens",
        file: "markdown/projects/civic-lens.md",
        icon: "i-carbon:code",
        excerpt: "AI grievance redressal with YOLO.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-tollchain",
        title: "TollChain",
        file: "markdown/projects/tollchain.md",
        icon: "i-carbon:code",
        excerpt: "Privacy-aware blockchain tolling.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-medivault",
        title: "MediVault",
        file: "markdown/projects/medivault.md",
        icon: "i-carbon:code",
        excerpt: "Decentralized health records.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-freducation",
        title: "Freducation",
        file: "markdown/projects/freducation.md",
        icon: "i-carbon:code",
        excerpt: "Community academic library.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-spectra-guard",
        title: "Spectra Guard",
        file: "markdown/projects/spectra-guard.md",
        icon: "i-carbon:code",
        excerpt: "FSOC PAT console.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-mimo-studio",
        title: "Mimo Studio",
        file: "markdown/projects/mimo-studio.md",
        icon: "i-carbon:code",
        excerpt: "AI schematic studio in Rust.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-polaris-ice",
        title: "POLARIS-ICE",
        file: "markdown/projects/polaris-ice.md",
        icon: "i-carbon:code",
        excerpt: "Lunar ice detection.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-nafnet-sr",
        title: "NAFNet-SR",
        file: "markdown/projects/nafnet-sr.md",
        icon: "i-carbon:code",
        excerpt: "SEM restoration at 34.3 dB.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-oasis",
        title: "O.A.S.I.S",
        file: "markdown/projects/oasis.md",
        icon: "i-carbon:code",
        excerpt: "RF spectrum RL simulator.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-gemini-animator",
        title: "Gemini Animator",
        file: "markdown/projects/gemini-animator.md",
        icon: "i-carbon:code",
        excerpt: "Prompt-to-animation for AE.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-cutpilot-ai",
        title: "CutPilot AI",
        file: "markdown/projects/cutpilot-ai.md",
        icon: "i-carbon:code",
        excerpt: "Premiere auto-edit panel.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "sw-signal-analyzer",
        title: "Signal Analyzer",
        file: "markdown/projects/signal-analyzer.md",
        icon: "i-carbon:code",
        excerpt: "IQ/WAV signal intelligence.",
        link: "https://github.com/Ritabrata777"
      }
    ]
  },
  {
    id: "embedded",
    title: "Embedded",
    icon: "i-tabler:cpu",
    md: [
      {
        id: "em-health-monitor",
        title: "Health Monitor",
        file: "markdown/projects/ai-health-monitor.md",
        icon: "i-tabler:cpu",
        excerpt: "Multi-sensor screening prototype.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "em-irrigation",
        title: "Smart Irrigation",
        file: "markdown/projects/smart-irrigation.md",
        icon: "i-tabler:cpu",
        excerpt: "Sensor-driven watering.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "em-fall-detection",
        title: "Fall Detection",
        file: "markdown/projects/fall-direction-detection.md",
        icon: "i-tabler:cpu",
        excerpt: "TinyML fall direction.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "em-env-robot",
        title: "Env Robot",
        file: "markdown/projects/autonomous-environmental-robot.md",
        icon: "i-tabler:cpu",
        excerpt: "Self-navigating monitor.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "em-fan-control",
        title: "Fan Control",
        file: "markdown/projects/fan-speed-control.md",
        icon: "i-tabler:cpu",
        excerpt: "Temperature fan loop.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "em-secure-sensor",
        title: "Secure Sensor",
        file: "markdown/projects/secure-sensor.md",
        icon: "i-tabler:cpu",
        excerpt: "OTP IoT telemetry.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "em-tars",
        title: "TARS",
        file: "markdown/projects/tars.md",
        icon: "i-tabler:cpu",
        excerpt: "Embedded AI assistant robot.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "em-itms",
        title: "ITMS Prototype",
        file: "markdown/projects/itms-prototype.md",
        icon: "i-tabler:cpu",
        excerpt: "Rail track monitoring MVP.",
        link: "https://github.com/Ritabrata777"
      }
    ]
  },
  {
    id: "credentials",
    title: "Credentials",
    icon: "i-ri:newspaper-fill",
    md: [
      {
        id: "certification-tracks",
        title: "Certification Tracks",
        file: "markdown/certification-tracks.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "The credential stack behind the current focus areas.",
        link: "https://www.linkedin.com/in/ritabrata-majumdar-764b81332"
      }
    ]
  }
];

export default bear;
