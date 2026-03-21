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
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "flagship-projects",
        title: "Flagship Projects",
        file: "markdown/flagship-projects.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A quick scan of the strongest blockchain and applied product builds.",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "embedded-builds",
        title: "Embedded Builds",
        file: "markdown/embedded-builds.md",
        icon: "i-tabler:cpu",
        excerpt: "Hardware, IoT, and TinyML-oriented work from sensors to assistive systems.",
        link: "https://github.com/Ritabrata777"
      },
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
