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
    name: "Projects", // was "Safari"
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
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "#",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "#",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "#",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js"],
  },
  {
    category: "Styling & UI:",
    items: ["HTML5", "CSS3", "Tailwind", "CSS", "Sass"],
  },
  {
    category: "State Management",
    items: ["Redux", "Redux Toolkit", "Zustand", "React Context API"],
  },
  {
    category: "Data Fetching",
    items: ["REST API's", "Tanstack Query", "FetchAPI"],
  },
  {
    category: "UI Libraries",
    items: ["ShadCN UI", "Material UI"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Vite"],
  },
  {
    category: "Others",
    items: ["Nodejs", "postgres", "Prisma", "Convex", "Sanity", "Inngest"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/vinaysenadev",
    label: "vinaysenadev",
  },
  {
    id: 2,
    text: "GMail",
    icon: "/icons/gmail.png",
    bg: "#4bcb63",
    link: "mailto:vinaysena.dev@gmail.com",
    label: "vinaysena.dev@gmail.com",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/vinay-sena-29339b205/",
    label: "vinay-sena",
  },
  {
    id: 3,
    text: "Phone",
    icon: "/icons/phone.png",
    bg: "#ff866b",
    link: "tel:+91 7981 20 5050",
    label: "+91 7981 20 5050",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/photos/photo-1.jpeg",
  },
  {
    id: 2,
    img: "/images/photos/photo-2.jpeg",
  },
  {
    id: 3,
    img: "/images/photos/myrrh.jpeg",
  },
  // {
  //   id: 4,
  //   img: "/images/gal4.png",
  // },
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
    // Akira
    {
      id: 1,
      name: "Akira AI IDE",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[3vh] left-100",
      windowPosition: "top-[22vh] left-50",
      images: ["/images/akira-landing.png", "/images/akira-editor.png"],
      href: "https://akira-ide.vercel.app/",
      description: [
        "Akira is an AI-powered cloud IDE built to transform the “prompt-to-app” development experience. It enables developers to generate, edit, and run full-stack applications entirely within the browser without any local setup. By leveraging advanced language models, Akira can convert high-level project descriptions into fully structured codebases within seconds, significantly accelerating the development process. With an in-browser Node.js runtime powered by WebContainers, developers can run npm commands, manage dependencies, and host development servers directly in the browser, making the platform accessible from any device with a modern web browser.",
        "The platform combines a powerful development environment with real-time collaboration and intelligent automation. It features a full-fledged code editor built on CodeMirror, an interactive terminal using XTerm.js, and a live preview system with Hot Module Replacement for instant application feedback. Real-time data persistence is handled by Convex, ensuring project files and states remain synchronized across sessions, while background workflows and AI tasks are managed through Inngest. Built with a modern stack including Next.js, Tailwind CSS, Zustand, and the Vercel AI SDK, and secured with Clerk authentication, Akira delivers a seamless, scalable, and highly interactive cloud-based development environment for modern AI-assisted software creation.",
      ],
      children: [
        {
          id: 1,
          name: "Akira AI Powered IDE.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            'Akira is an AI-powered cloud IDE designed to revolutionize the "prompt-to-app" experience. It allows developers to scaffold, edit, and run full-stack applications entirely within the browser.',
            "🚀 Core Purpose",
            "Accelerated Development: Transform high-level project descriptions into working codebases in seconds.",
            "Zero Configuration: Provide a complete development environment (runtime, terminal, editor) without local installation.",
            "Universal Accessibility: Enable full-stack development from any device with a modern web browser.",
            "",
            "✨ Key Features",
            "AI-Driven Project Scaffolding: Leverages advanced LLMs (Anthropic, OpenAI, Google) to generate project structures, files, and boilerplate code from natural language prompts.",
            "In-Browser Node.js Runtime: Utilizes WebContainers to run Node.js, execute npm commands, and host development servers directly in the browser.",
            "Real-Time Data Persistence: Powered by Convex, ensuring all files, states, and project data are synchronized in real-time across sessions.",
            "Full-Featured Code Editor: A robust editing experience built on CodeMirror, featuring syntax highlighting, auto-completion, and intelligent AI-assisted coding.",
            "Integrated Interactive Terminal: Employs XTerm.js to provide a fully functional CLI for managing dependencies and running scripts.",
            "Background Workflow Automation: Uses Inngest for managing complex, long-running AI tasks and background processes reliably.",
            "Integrated App Preview: Instantly view live application changes in a side-by-side preview window with Hot Module Replacement (HMR).",
            "Secure User Authentication: Comprehensive user management and social login (Google, GitHub) via Clerk.",
            "",
            "🛠️ Technical Stack",
            "Frontend Framework: Next.js 15+ (App Router, React 19)",
            "Database & Backend-as-a-Service: Convex",
            "Authentication: Clerk",
            "AI Orchestration: Vercel AI SDK",
            "Runtime Virtualization: WebContainers",
            "Background Jobs: Inngest",
            "Styling & UI Components: Tailwind CSS 4 & Shadcn UI",
            "State Management: Zustand",
            "Editor & Terminal: CodeMirror 6 & XTerm.js",
            "",
          ],
        },
        {
          id: 2,
          name: "akira-ide.vercel",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://akira-ide.vercel.app/",
          position: "top-5 left-40",
        },
        {
          id: 4,
          name: "akira-landing",
          icon: "/images/akira-landing.png",
          kind: "file",
          fileType: "img",
          position: "top-5 left-75",
          imageUrl: "/images/akira-landing.png",
        },
        {
          id: 5,
          name: "akira-editor.png",
          icon: "/images/akira-editor.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-5",
          imageUrl: "/images/akira-editor.png",
        },
      ],
    },
    // web performance analyzer
    {
      id: 2,
      name: "Quantum School management dashboard",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-1", // icon position inside Finder
      windowPosition: "top-[3vh] left-5", // optional: Finder window position
      images: ["/images/Quantum-1.png", "/images/Quantum-teacher.png"],
      href: "https://quantum-sms.vercel.app/",
      description: [
        "Quantum Academy is a modern, full-stack School Management System designed to streamline academic administration, teaching workflows, and communication between administrators, teachers, students, and parents. The platform offers intelligent role-based dashboards that provide personalized access to relevant information, along with real-time performance analytics to track academic progress, attendance, and institutional insights. It also features an integrated academic scheduling system with an interactive calendar to manage lessons, exams, and assignments, ensuring smooth coordination across the school ecosystem.",
        "The system further enhances engagement through comprehensive digital profiles for students and teachers, along with a real-time communication hub that delivers announcements, updates, and notifications instantly. Built using a modern technology stack including Next.js, React, and TypeScript, and styled with Tailwind CSS, the platform provides a responsive and user-friendly experience. With secure authentication via Clerk, a robust data layer powered by Prisma and PostgreSQL, and optimized asset management through Cloudinary, Quantum Academy delivers a scalable, secure, and efficient digital infrastructure for modern educational institutions.",
      ],
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
      id: 3,
      name: "Perf Lens",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[3vh] left-30",
      windowPosition: "top-[22vh] left-15",
      images: [
        "/images/perfLens-dashboard.png",
        "/images/prefLens-dashboard-2.png",
      ],
      href: "https://wpa-01.vercel.app/",
      description: [
        "PerfLens is a modern performance analysis platform designed to help web developers understand and optimize their website performance with greater clarity and precision. Instead of presenting static Lighthouse scores, PerfLens transforms raw performance data into an interactive, insight-driven experience. With visual dashboards for Core Web Vitals such as LCP, CLS, and INP, developers can easily monitor performance trends, analyze multiple audit snapshots, and identify changes over time. The platform also provides advanced diagnostics, including a network waterfall view and detailed Lighthouse opportunities, enabling developers to quickly locate performance bottlenecks and resource-heavy components.",
        "A standout capability of PerfLens is its AI Optimization Coach, powered by Google Gemini, which converts audit results into personalized, actionable recommendations tailored to the site’s performance data. Developers can also analyze JavaScript bundle sizes and payload transfers through a smart bundle analysis module to ensure efficient resource delivery. Built with a modern stack including Next.js, Tailwind CSS, Zustand, and Recharts, PerfLens delivers a sleek glassmorphic UI and a highly responsive developer experience. By combining powerful analytics, AI-driven insights, and intuitive visualization, PerfLens empowers developers to systematically improve performance and confidently achieve top Lighthouse scores.",
      ],
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
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-0",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/vinay.jpeg",
      description: [
        "Hey! I’m Vinay 👋 — a frontend engineer with 10+ years of experience building scalable, high-performance web applications that are clean, fast, and built to last.",
        "I specialize in JavaScript and React (with 5+ years of deep focus), and I love creating reusable component systems, optimizing performance, and turning complex requirements into smooth, responsive user experiences. From state management with Redux and Zustand to API integrations with REST and GraphQL, I enjoy making applications feel seamless and efficient.",
        "I’m big on performance tuning, clean architecture, and maintainable code — the kind that improves load times by 50%, boosts responsiveness by 40%, and doesn’t become technical debt six months later. I also enjoy mentoring developers, reviewing code, and helping teams ship better products, faster.",
        "Outside of work, you’ll probably find me exploring new frontend tools, refining UI patterns, experimenting with AI-powered dev workflows, or tweaking layouts.",
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
      icon: "/trash/trash-1.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/trash/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/trash/trash-2.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-25",
      imageUrl: "/trash/trash-2.png",
    },
    {
      id: 3,
      name: "trash3.png",
      icon: "/trash/trash-3.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-45",
      imageUrl: "/trash/trash-3.png",
    },
    {
      id: 4,
      name: "trash4.png",
      icon: "/trash/trash-4.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/trash/trash-4.png",
    },
    {
      id: 5,
      name: "trash5.png",
      icon: "/trash/trash-5.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-40",
      imageUrl: "/trash/trash-5.png",
    },
    {
      id: 6,
      name: "trash6.png",
      icon: "/trash/trash-6.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-10",
      imageUrl: "/trash/trash-6.png",
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
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
