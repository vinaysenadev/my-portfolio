const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "browser",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/vinaysenadev",
    label:"vinaysenadev"
  },
  {
    id: 2,
    text: "GMail",
    icon: "/icons/gmail.png",
    bg: "#4bcb63",
    link: "mailto:vinaysena.dev@gmail.com",
    label:"vinaysena.dev@gmail.com"
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/vinay-sena-29339b205/",
    label:"vinay-sena"
  },
  {
    id: 3,
    text: "Phone",
    icon: "/icons/phone.png",
    bg: "#ff866b",
   link: "tel:+91 7981 20 5050",
   label:"+91 7981 20 5050"
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Quantum School management dashboard",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-1", // icon position inside Finder
      windowPosition: "top-[3vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Quantum school management dashboard.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            " 🌌 Quantum Academy: Elevating Institutional Excellence",
            "Quantum Academy is a state-of-the-art, full-stack School Management System designed to harmonize administration, pedagogy, and parent-student engagement through a premium, data-driven experience.",

            "✨ Core Innovations",
            "🎭 Intelligent Role-Based Dashboards: Tailored interfaces for Administrators, Teachers, Students, and Parents, ensuring relevant data is always at the forefront.",
            "📊 Dynamic Performance Analytics: Real-time visualization of academic trends, attendance metrics, and institutional health using advanced charting.",
            "🗓️ Integrated Academic Orchestration: A central nervous system for scheduling lessons, exams, and assignments with a seamless, interactive calendar.",
            "👤 Comprehensive Digital Profiles: Robust management of student and teacher credentials, academic history, and parent-student associations.",
            "🔔 Real-Time Communication Hub: Instantaneous academic updates, announcements, and event notifications to keep the entire academy in sync.",
            "🛠️ The Power Behind the Portal",
            "⚛️ Modern Stack: Built on Next.js 14, React 18, and TypeScript for unparalleled performance and developer velocity.",
            "🎨 Premium UI/UX: Styled with Tailwind CSS and enriched by Lucide React for a sleek, utility-first visual language.",
            "🛡️ Enterprise-Grade Security: Powered by Clerk for sophisticated authentication and identity management.",
            "🗄️ Resilient Data Layer: Leveraging Prisma ORM and PostgreSQL for type-safe, high-integrity relational storage.",
            "☁️ Edge-Ready Assets: Efficient multimedia delivery and storage via Cloudinary.",
          ],
        },
        {
          id: 2,
          name: "quantum-sms.vercel.app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://quantum-sms.vercel.app/",
          position: "top-5 left-40",
        },
        {
          id: 4,
          name: "quantum dashboard.png",
          icon: "/images/Quantum-1.png",
          kind: "file",
          fileType: "img",
          position: "top-5 left-75",
          imageUrl: "/images/Quantum-1.png",
        },
        {
          id: 5,
          name: "quantum-teacher.png",
          icon: "/images/Quantum-teacher.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-5",
          imageUrl: "/images/Quantum-teacher.png",
        },
      ],
    },

    // PerfLens
    {
      id: 6,
      name: "Perf Lens",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[3vh] left-30",
      windowPosition: "top-[22vh] left-15",
      children: [
        {
          id: 1,
          name: "Ai-powered Web performance analyzer.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            'PerfLens is a state-of-the-art performance analysis engine designed for the modern web developer. It goes beyond static numbers, transforming raw Lighthouse data into a dynamic, AI-powered optimization strategy. Built with a focus on visual excellence and developer experience, PerfLens empowers you to achieve the coveted "perfect score" with confidence.',
            "✨ Core Features",
            "🛡️ Interactive Core Web Vitals Dashboard\n",
            "\tExperience high-fidelity visualizations of LCP, CLS, and INP. Our dashboard features interactive score gauges and real-time trend analysis, allowing you to track performance shifts across multiple snapshots.",
            "🤖 AI Optimization Coach (Powered by Gemini)",
            "The RecommendationsTab leverages Google Gemini 1.5 Flash to provide bespoke, context-aware optimization briefs. It doesn't just point out problems; it generates strategic, actionable steps tailored to your specific audit data.",
            "📊 Next-Gen Waterfall & Diagnostics",
            "Identify resource bottlenecks with the WaterfallChart. Visualize your network timeline and dive deep into Lighthouse Opportunities and Diagnostics to see exactly where your site's performance is leaking.",
            "📦 Smart Bundle Analysis",
            "The BundleTab provides real-time insights into your JavaScript delivery. Track total script sizes and transferred payloads to ensure your application remains lean and lightning-fast.",
            "💎 Premium Glassmorphic UI",
            "Built on a foundation of Glassmorphism, Dark Mode, and Tailwind CSS 4, PerfLens offers a premium, immersive experience that makes performance optimization a joy.",
            "🛠️ The Tech Stack",
            "PerfLens is engineered using the cutting-edge tools that power the web's future:",
            "Framework: Next.js 16 (App Router, Turbopack) ",
            "AI Core: Google Gemini 1.5 Flash via @google/generative-ai",
            "Styling: Tailwind CSS 4 with PostCSS",
            "State Management: Zustand for reactive analysis state",
            "Data Engine: PageSpeed Insights API",
            "Visuals: Recharts for performance trends & Lucide React for iconography",
           
          ],
        },
        {
          id: 2,
          name: "wpa-01.vercel",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://wpa-01.vercel.app/",
          position: "top-5 left-40",
        },
        {
          id: 4,
          name: "perfLens.png",
          icon: "/images/perfLens-dashboard.png",
          kind: "file",
          fileType: "img",
          position: "top-5 left-75",
          imageUrl: "/images/perfLens-dashboard.png",
        },
        {
          id: 5,
          name: "prefLens-2.png",
          icon: "/images/prefLens-dashboard-2.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-5",
          imageUrl: "/images/prefLens-dashboard-2.png",
        },
      ],
    },

    // // ▶ Project 3
    // {
    //   id: 7,
    //   name: "Food Delivery App",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-5 left-80",
    //   windowPosition: "top-[33vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "Food Delivery App Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
    //         "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
    //         "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
    //         "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "food-delivery-app.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "food-delivery-app.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-3.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 left-0",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 left-70",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-35 left-0",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  browser: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
