import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "Profile Links",
    sites: [
      {
        id: "github",
        title: "GitHub",
        img: "img/sites/github.svg",
        link: "https://github.com/Ritabrata777"
      },
      {
        id: "linkedin",
        title: "LinkedIn",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/ritabrata-majumdar-764b81332"
      },
      {
        id: "email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:ritabratamajumdar70@gmail.com"
      }
    ]
  },
  freq: {
    title: "Build Stack",
    sites: []
  }
};

export default websites;
