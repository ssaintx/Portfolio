export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Time zone is not a problem",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently creating projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Threads App",
    des: "Explore for new networking via threads application!",
    img: "/projects/threads.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://threads.saintx.uz",
  },
];

export const testimonials = [
  {
    quote:
      "Next.js aims to have best-in-class developer experience and many built-in features, such as: An intuitive page-based routing system (with support for dynamic routes) Pre-rendering, both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis.",
    name: "Next.js",
    title: "React Framework",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Tailwind CSS",
    title: "CSS Framework",
  },
  {
    quote:
      "Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security lets you run many containers simultaneously on a given host.",
    name: "Docker",
    title: "Deployment Tool",
  },
  {
    quote:
      "Overview. Three. js allows the creation of graphical processing unit (GPU)-accelerated 3D animations using the JavaScript language as part of a website without relying on proprietary browser plugins. This is possible due to the advent of WebGL, a low-level graphics API created specifically for the web.",
    name: "Three.js",
    title: "Javascript Library",
  },
];

export const companies = [
  {
    id: 1,
    name: "next.js",
    img: "/next.svg",
    nameImg: "Next.js",
  },
  {
    id: 2,
    name: "tailwindcss",
    img: "/tail.svg",
    nameImg: "TailwindCSS",
  },
  {
    id: 3,
    name: "typescript",
    img: "/ts.svg",
    nameImg: "TypeScript",
  },
  {
    id: 4,
    name: "three.js",
    img: "/three.svg",
    nameImg: "Three.js",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "Docker",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Frontend",
    desc: "Created statical landing pages and developed dynamical web-apps using Next.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/ssaintx/'
  },
  {
    id: 2,
    img: "/mail.svg",
    link: "saintx.git@gmail.com"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/ssaintx/"
  },
];

type emailConfig = {
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  }
}

export const email: emailConfig = {
  contact: {
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
}