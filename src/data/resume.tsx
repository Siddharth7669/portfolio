import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
// import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
// import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
// import { Java } from "@/components/ui/svgs/java";
// import { Csharp } from "@/components/ui/svgs/csharp";
import { MicrosoftAzure } from "@/components/ui/svgs/azure";
import { Flask } from "@/components/ui/svgs/flask";
import { Django } from "@/components/ui/svgs/django";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Angular } from "@/components/ui/svgs/angular";
import { Git } from "@/components/ui/svgs/git";
import { ML } from "@/components/ui/svgs/ml";
import { PredictiveAnalysis } from "@/components/ui/svgs/predictiveAnalysis";
import { RecommendationSystem } from "@/components/ui/svgs/recommendationSystem";
import { SemanticEmbeddings } from "@/components/ui/svgs/semanticEmbeddings";
import { SBert } from "@/components/ui/svgs/sBert";
import { NLP } from "@/components/ui/svgs/nlp";
import { OCR } from "@/components/ui/svgs/ocr";
import { ImageProcessing } from "@/components/ui/svgs/imageProcessing";
import { ComputerVision } from "@/components/ui/svgs/computerVision";
import { DataTransformation } from "@/components/ui/svgs/dataTransformation";
import { ParallelProcessing } from "@/components/ui/svgs/parallelProcessing";
import { ContextAnalysis } from "@/components/ui/svgs/contextAnalysis";
import { SQL } from "@/components/ui/svgs/sql";
import { LLM } from "@/components/ui/svgs/llm";
import { Postman } from "@/components/ui/svgs/postman";
import { PromptEngineering } from "@/components/ui/svgs/prompt";

export const DATA = {
  name: "Siddharth Pandey",
  initials: "SP",
  url: "https://sid.io",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  description:
    "Full Stack AI Developer building practical AI solutions from idea to production.",
  summary:
    "Full Stack AI Developer with 3+ years of experience building AI-powered applications using Python, FastAPI, Angular, SQL, machine learning, NLP, and LLMs. Previously worked at Entelika LLP and RenewBuy, developing production AI features, recommendation systems, and data pipelines. B.Tech in Computer Science, passionate about solving real-world problems through AI and software engineering.",
  avatarUrl: "/sid.png",

  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", icon: Python },
        { name: "SQL", icon: SQL },
      ],
    },
    {
      category: "Machine Learning & NLP",
      items: [
        { name: "Machine Learning", icon: ML },
        { name: "Predictive Analytics", icon: PredictiveAnalysis },
        { name: "Recommendation Systems", icon: RecommendationSystem },
        { name: "Semantic Embeddings", icon: SemanticEmbeddings },
        { name: "Sentence-BERT", icon: SBert },
        { name: "Natural Language Processing", icon: NLP },
        { name: "OCR", icon: OCR },
        { name: "Computer Vision", icon: ComputerVision },
        { name: "Image Processing", icon: ImageProcessing },
      ],
    },
    {
      category: "Generative AI",
      items: [
        { name: "LLMs", icon: LLM },
        { name: "Azure OpenAI", icon: MicrosoftAzure },
        { name: "GPT-4o-mini", icon: MicrosoftAzure },
        { name: "Prompt Engineering", icon: PromptEngineering },
        { name: "LLM API Integration", icon: FastAPI },
        { name: "Contextual Text Analysis", icon: ContextAnalysis },
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "FastAPI", icon: FastAPI },
        { name: "Flask", icon: Flask },
        { name: "Django REST Framework", icon: Django },
        { name: "REST APIs", icon: FastAPI },
      ],
    },
    {
      category: "Data Engineering",
      items: [
        { name: "Azure Synapse Analytics", icon: MicrosoftAzure },
        { name: "Data Pipelines", icon: MicrosoftAzure },
        // { name: "SQL Optimization", icon: Postgresql },
        { name: "Parallel Processing", icon: ParallelProcessing },
        { name: "Data Transformation", icon: DataTransformation },
      ],
    },
    {
      category: "Databases & Infrastructure",
      items: [
        { name: "MySQL", icon: SQL },
        { name: "Redis", icon: Postgresql },
        { name: "Azure Blob Storage", icon: MicrosoftAzure },
        { name: "Azure App Services", icon: MicrosoftAzure },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "Angular", icon: Angular },
        { name: "React", icon: ReactLight },
        { name: "TypeScript", icon: Typescript },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git", icon: Git },
        { name: "Azure DevOps", icon: MicrosoftAzure },
        { name: "Postman", icon: Postman },
        { name: "CI/CD Pipelines", icon: Git },
        { name: "Docker", icon: Docker },
        { name: "Kubernetes", icon: Kubernetes },
      ],
    },
  ],

  //AI/ ML, Angular, Azure Synapse, Django, Fast API, Flask, . NET C# , Python, React, SQL, System Design
  // ADDITIONAL TECHNICAL EXPOSURE: Azure, Azure Git, CI/ CD Pipelines, Test Automation ( Robot Framework)

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "p.siddharth7669@gmail.com",
    tel: "+91 6377 952 959",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/siddharth-pandey-29ab3919a/",
        icon: Icons.linkedin,

        navbar: true,
      },

      GitHub: {
        name: "GitHub",
        url: "https://github.com/Siddharth7669",
        icon: Icons.github,
        navbar: true,
      },

      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:p.siddharth7669@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Entelika",
      href: "https://entelika.com",
      badges: [],
      location: "Mysore, IN",
      title: "Full Stack AI Developer",
      logoUrl: "/entelika.png",
      start: "December 2023",
      end: "Present",
      description:
        "• Led development of TieOpp, a career platform serving students and enterprises, delivering interview coaching, personality assessment, and personalized opportunity recommendations.\n" +
        "• Developed Python services and FastAPI endpoints for AI features, connecting model outputs, external LLM APIs, and application data.\n" +
        "• Implemented an LLM-powered interview coaching system using Azure OpenAI GPT-4o-mini to analyze speech transcripts and generate contextual feedback on fluency, grammar, pronunciation, and interview responses.\n" +
        "• Built candidate evaluation workflows combining assessment responses and AI-generated feedback to help candidates understand their strengths and areas for improvement.\n" +
        "• Developed a semantic recommendation system using Sentence-BERT embeddings and similarity matching, then optimized retrieval with index-based matching to reduce processing overhead and improve response times.\n" +
        "• Designed and optimized SQL schemas, queries, and stored procedures to support AI-driven applications, efficient data retrieval, and high-volume processing workloads.\n" +
        "• Improved production AI processing reliability by implementing asynchronous task queuing with Redis to manage concurrent workloads and reduce bottlenecks in LLM-powered workflows.\n" +
        "• Optimized data transformation workflows by replacing 1,207+ SQL scripts with four Python scripts using reusable logic, dynamic filtering, and parallel processing, achieving approximately 7× faster execution.\n" +
        "• Delivered data engineering and modernization solutions for Cabot Corporation and ENOWA (NEOM), improving pipeline efficiency and maintainability.",
    },
    {
      company: "RenewBuy",
      badges: [],
      href: "https://renewbuy.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/rb.png",
      start: "August 2022",
      end: "December 2023",
      description:
        "• Developed a machine learning-based sales prediction system achieving 98.4% accuracy, applying predictive analytics to identify sales patterns and support data-driven business decisions.\n" +
        "• Integrated predictive models into REST APIs using Django REST Framework and developed Angular dashboards for accessing model outputs and analytical insights.\n" +
        "• Created interactive analytics visualizations to analyze historical sales data, identify trends, and communicate prediction results.\n" +
        "• Engineered an ML-based vehicle Registration Certificate (RC) recognition system achieving approximately 94% accuracy using OCR, image preprocessing, and computer vision techniques for document information extraction and validation.",
    },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "APJ Abdul Kalam Technical University",
      href: "https://aktu.ac.in/",
      degree: "Computer Science and Engineering, B.Tech",
      logoUrl: "/aktu.png",
      start: "2019",
      end: "2023",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Lane Line Detection using Machine Learning",
      href: "https://ieeexplore.ieee.org/document/10064598",
      dates: "Research Project | IEEE Publication",
      active: true,
      description:
        "Developed a real-time lane detection system using computer vision techniques to identify road lane boundaries under challenging driving conditions. Applied Canny Edge Detection and the Hough Transform to process video frames and detect lane markings, supporting improved lane visibility and road safety.",
      technologies: [
        "Python",
        "OpenCV",
        "NumPy",
        "Computer Vision",
        "Image Processing",
        "Canny Edge Detection",
        "Hough Transform",
        "Real-Time Video Processing",
      ],
      links: [
        {
          type: "Research Paper",
          href: "https://ieeexplore.ieee.org/document/10064598",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "AI Video Coach",
      href: "https://tieopp.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Built an LLM-powered interview coaching system using Azure OpenAI GPT-4o-mini. Developed a pipeline to process recorded interview responses, generate speech transcripts, and analyze answers in context to provide personalized feedback on grammar, pronunciation, fluency, repetition, and communication skills. Integrated video storage, transcription, LLM inference, and structured feedback persistence using Python, FastAPI, Azure Blob Storage, and SQL. Implemented Redis-based task queuing to improve workload management and production scalability.",
      technologies: [
        "Python",
        "FastAPI",
        "Azure OpenAI",
        "GPT-4o-mini",
        "LLMs",
        "NLP",
        "Speech-to-Text",
        "Redis",
        "Azure Blob Storage",
        "SQL",
        "REST APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://tieopp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },

    {
      title: "Ashtanghridayam – RAG-Based AI Chatbot",
      href: "",
      dates: "Academic AI Project",
      active: true,
      description:
        "Developed a multilingual AI chatbot using Retrieval-Augmented Generation (RAG) to answer questions from Ashtanghridayam, a classical Ayurvedic medical text. Processed PDF documents, organized content into chapter-based chunks, and implemented embedding-based retrieval to identify relevant passages before generating contextual responses. Built a conversational interface for interacting with the knowledge base. Completed as a prototype but not deployed to production.",
      technologies: [
        "Python",
        "RAG",
        "LLMs",
        "NLP",
        "Embeddings",
        "Vector Search",
        "PDF Processing",
        "Prompt Engineering",
        "Multilingual AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ashtanghridayam.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
    },

    {
      title: "Enterprise ETL Workflow Development",
      href: "",
      dates: "Enterprise Project | Cabot Corporation",
      active: true,
      description:
        "Developed and modernized an enterprise ETL workflow using Python, SQL, and Azure Synapse Analytics. Consolidated 1,207 SQL scripts into four reusable Python scripts to handle data extraction, transformation, and processing across Raw, Enriched, and Curated data layers. Implemented dynamic transformation logic and parallel processing, achieving approximately 7x faster execution. Gained hands-on experience with Azure Synapse Analytics while developing scalable and maintainable ETL workflows.",
      technologies: [
        "Python",
        "SQL",
        "Azure Synapse Analytics",
        "ETL",
        "Data Engineering",
        "Data Transformation",
        "Parallel Processing",
        "Data Pipelines",
        "Azure",
      ],
      links: [
        {
          type: "Blog",
          href: "https://siddharth7669.vercel.app/blog/optimizing-data-pipelines-with-python-ETL-Azure",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
    },
  ],

  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "2022",
      location: "Uttarakhand, India",
      description: "3rd Position",
      image: "/sih.jpg",
      links: [],
    },
    {
      title: "Hacknovate 2.0",
      dates: "2021",
      location: "Delhi, India",
      description: "3rd Position",
      image: "/hacknovate.png",
      links: [],
    },
    {
      title: "Hacktoberfest",
      dates: "2021",
      location: "Online",
      description: "",
      icon: "public",
      image:
        "data:image/jpeg;base64,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",
      links: [],
    },
  ],
} as const;
