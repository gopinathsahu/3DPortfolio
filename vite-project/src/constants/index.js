import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  cplus,
  express,
  tata,
  image,
  nalco,
  hmh,
  weather,
  HMS,
  LMS,
  amazon,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "C++",
    icon: cplus,
  },
];

const experiences = [
  {
    title: "Web Developer | Intern",
    company_name: "Oasis Infobyte",
    icon: image,
    iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using HTML,CSS & Java-Script and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern",
    company_name: "NALCO",
    icon: nalco,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Hitech Media Netwrok Private Limited",
    icon: hmh,
    iconBg: "#383E56",
    date: " May 2024 - Sep 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Engineer",
    company_name: "TCS",
    icon: tata,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
     "Every day, Kusha shows me what it means to be compassionate and strong. They are not just my child; they are my inspiration. I am grateful to watch them grow and flourish.",
      name: "Susmita Panigrahi ",
    designation: "Lecturer",
    company: "Sri Ram Degree College",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Kusha demonstrates remarkable dedication and analytical skills. Their enthusiasm for learning and commitment to fostering an inclusive environment inspire peers, making them a true asset in any collaborative setting.",
    name: "Dwarika Nath",
    designation: "GET",
    company: "Tata Electronics",
    
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " Chiku brings positivity and creativity to every interaction. Their unwavering support and genuine care uplift those around them, creating a nurturing atmosphere that encourages everyone to strive for excellence.",
    name: "Subhashree ",
    designation: "Software Engineer",
    company: "Apmosys",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "Gopinath excels in explaining complex concepts and demonstrates dedication to their studies. Their enthusiasm and positive energy significantly contribute to a motivating group dynamic, making learning a more enjoyable experience for everyone involved.",
    name: "Sourav Sekhar",
    designation: "Designer",
    company: "ARF Design",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
    "Working with Student is both productive and enjoyable. Their strong work ethic, innovative ideas, and commitment to team success significantly enhance our projects and drive collective achievements."
,  
    name: "Mahamaya",
    designation: "Software Tester",
    company: "Nekss",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];

const projects = [
  {
    name: "Hospital Managment System",
    description:
      "The Hospital Management System is a comprehensive software solution designed to streamline and improve the efficiency of hospital operations.The system allows for easy and fast patient registration, capturing essential details "
    ,tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express js",
        color: "grey-text-gradient",
      },
    ],
    image: HMS,
    source_code_link: "https://github.com/gopinathsahu/Hospital-Managment-System",
  },
  {
    name: "Leaarning Managment System",
    description:
    "The Learning Management System (LMS) is a technology solution designed to facilitate the creation, delivery, and management of educational and training content. It serves as a centralized platform for organizing coursework, tracking learner progress, and administering various educational programs"
     ,   tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      }
      
    ],
    image: LMS,
    source_code_link: "https://github.com/gopinathsahu/Learning-Managment-System-Backend-",
  },
  {
    name: "Weather App",
    description:
    "The Weather Application is a user-friendly and reliable digital tool designed to provide real-time weather information, forecasts, and alerts to users. This app ensures that individuals, travelers, and businesses can access accurate and up-to-date weather data to make informed decisions and stay prepared for changing weather conditions."
    , tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/gopinathsahu/Weather-App",
  }
 
];

export { services, technologies, experiences, testimonials, projects };
