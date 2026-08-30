type Course = {
  id: string;
  url: string;
  imageSrc?: string;
};

type Project = {
  id: string;
  img: string;
  iconLists: string[];
  link?: string;
};

type WorkExperience = {
  id: string;
  company: string;
  thumbnail: string;
};

type SocialMedia = {
  id: string;
  icon: string;
  link: string;
};

export const courses: readonly Course[] = [
  {
    id: "pythonBootcamp",
    url: "https://www.udemy.com/course/100-days-of-code",
    imageSrc: "/assets/images/courses/python-course-with-angela.png",
  },
  {
    id: "webDevBootcamp",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    imageSrc: "/assets/images/courses/web-dev-course-with-angela.png",
  },
  {
    id: "reactGuide",
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux",
    imageSrc: "/assets/images/courses/react-course.png",
  },
  {
    id: "nextCourse",
    url: "https://www.jsmastery.pro/ultimate-next-course",
  },
  {
    id: "unityCourse",
    url: "https://www.udemy.com/course/platformer-alexdev",
    imageSrc: "/assets/images/courses/unity-platformer-course.png",
  },
  {
    id: "agenticEngineering",
    url: "https://jsmastery.com/course/agentic-engineering-course",
  },
] as const;

export const projects: readonly Project[] = [
  {
    id: "interactiveMapsCity",
    img: "/assets/images/projects/interactive-maps-city.png",
    iconLists: [
      "icons/tech/next.svg",
      "icons/tech/re.svg",
      "icons/tech/tail.svg",
      "icons/tech/ts.svg",
      "icons/tech/node1.svg",
    ],
  },
  {
    id: "stackOverflowClone",
    img: "/assets/images/projects/stack.png",
    iconLists: [
      "icons/tech/next.svg",
      "icons/tech/re.svg",
      "icons/tech/tail.svg",
      "icons/tech/ts.svg",
      "icons/tech/mongo-icon.svg",
    ],
    link: "https://github.com/nikitabiichuk2009/dev-overflow-next.js",
  },
  {
    id: "carePulse",
    img: "/assets/images/projects/carepulse.png",
    iconLists: [
      "icons/tech/next.svg",
      "icons/tech/re.svg",
      "icons/tech/tail.svg",
      "icons/tech/ts.svg",
      "icons/tech/mongo-icon.svg",
    ],
    link: "https://github.com/nikitabiichuk2009/Real-life-website-healt-care",
  },
  {
    id: "evently",
    img: "/assets/images/projects/evently-app.png",
    iconLists: [
      "icons/tech/next.svg",
      "icons/tech/re.svg",
      "icons/tech/tail.svg",
      "icons/tech/ts.svg",
      "icons/tech/mongo-icon.svg",
    ],
    link: "https://github.com/nikitabiichuk2009/Events_Management_Platform",
  },
  {
    id: "threadsClone",
    img: "/assets/images/projects/threads.png",
    iconLists: [
      "icons/tech/next.svg",
      "icons/tech/re.svg",
      "icons/tech/tail.svg",
      "icons/tech/ts.svg",
      "icons/tech/mongo-icon.svg",
    ],
    link: "https://github.com/nikitabiichuk2009/threads_nextjs",
  },
  {
    id: "zoomClone",
    img: "/assets/images/projects/zoom.png",
    iconLists: [
      "icons/tech/next.svg",
      "icons/tech/tail.svg",
      "icons/tech/ts.svg",
      "icons/tech/stream.svg",
      "icons/tech/c.svg",
    ],
    link: "https://github.com/nikitabiichuk2009/zoom_clone",
  },
  {
    id: "flightFinder",
    img: "/assets/images/projects/flight.png",
    iconLists: [
      "icons/tech/ejs-icon1.svg",
      "icons/tech/css2.svg",
      "icons/tech/node1.svg",
      "icons/tech/email-icon.svg",
    ],
    link: "https://github.com/nikitabiichuk2009/Flight-finding",
  },
  {
    id: "hoobank",
    img: "/assets/images/projects/hoobank.png",
    iconLists: ["icons/tech/react1.svg", "icons/tech/tail.svg", "icons/tech/js2.svg"],
    link: "https://github.com/nikitabiichuk2009/modernWebsite.HooBank",
  },
  {
    id: "movieApp",
    img: "/assets/images/projects/movie-app.jpg",
    iconLists: [
      "icons/tech/react1.svg",
      "icons/tech/tail.svg",
      "icons/tech/ts.svg",
      "icons/companies/appName.svg",
    ],
    link: "https://github.com/nikitabiichuk2009/movies-app-react-native",
  },
] as const;

export const workExperience: readonly WorkExperience[] = [
  {
    id: "techForgeStudio",
    company: "Tech Forge Studio",
    thumbnail: "/assets/images/experience/exp1.svg",
  },
  {
    id: "arcticWeb",
    company: "Arctic Web",
    thumbnail: "/assets/images/experience/exp1.svg",
  },
] as const;

export const socialMedia: readonly SocialMedia[] = [
  {
    id: "github",
    icon: "github",
    link: "https://github.com/nikita-biichuk",
  },
  {
    id: "instagram",
    icon: "instagram",
    link: "https://www.instagram.com/nikita_biichuk/",
  },
  {
    id: "x",
    icon: "twitter",
    link: "https://x.com/nikitabiichuk",
  },
  {
    id: "linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nikita-biichuk-790951296/",
  },
] as const;
