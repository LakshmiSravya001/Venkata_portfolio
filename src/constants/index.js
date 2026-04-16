import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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

export const services = [
  { title: "Python", icon: python },
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },

];

export const experiences = [
  {
    title: "Graduate Research Assistant",
    company_name: "Georgia State Univetsity",
    icon: edunet,
    iconBg: "#161329",
    date: "Aug 2024 - Jun 2025",
    points: [
      "Hands-on experience with front-end frameworks including React.js, Node.js, and MVC architecture, ensuring balanced development across Model, View, and Controller layers.",
      "Designed and developed a responsive web portal with interactive dashboards to visualize academic research data for 300+ records, using React, JavaScript, and RESTful APIs.",
      "Built reusable UI components and modular report templates, supporting scalable analytics and improving data-driven decision-making across multiple research teams.",
      "Processed, cleaned, and visualized large datasets (5,000+ entries) using Python, SQL, and advanced Excel, significantly improving research analysis speed.",
      "Automated data-publishing workflows and integrated APIs to provide real-time insights, reducing reporting delays by 40%.",
      "Optimized financial and administrative workflows by developing custom dashboards, templates, and automation scripts, improving operational efficiency by 30%.",
      "Automated repetitive manual tasks using Microsoft Excel, Adobe Forms, and Python, cutting manual effort and turnaround time by 50%+ for students and faculty.",
    ],
  },
  {
    title: "Graduate Administrative Assistant",
    company_name: "Georgia State Univetsity",
    icon: edunet,
    iconBg: "#161329",
    date: "Aug 2023 - May 2023",
    points: [
      "Developed and optimized validation workflows within university financial systems, consolidating datasets and enhancing reporting efficiency by 30%.",
      "Taught and assisted students and staff in using Excel formulas, templates, and automated processes, helping over 50+ students improve their data-handling skills and complete academic/administrative tasks more efficiently.",
     " Collaborated with faculty to maintain clean, reliable datasets for research, budgeting, and compliance reporting.",
    ],
  },
  {
    title: "Avishkar Tech Solutions",
    company_name: "JR Software Engineer-Data SCience",
    icon: mathwork,
    iconBg: "#161329",
    date: "Mar 2021 - Jul 2021",
    points: [
      "Engineered high-performance web and mobile applications using React, React Native, TypeScript, and Python, driving seamless user experiences and platform scalability.",
      "Partnered with leadership to shape product vision, design core architecture, and translate strategic goals into robust technical solutions.",
      " Built and optimized APIs to enable smooth integration across systems, ensuring reliability and performance at scale.",
      " Championed clean, reusable code and efficient frontend workflows, improving development speed and maintainability.",
      "Integrated data intelligence and AI-driven features to enhance product automation, predictive insights, and overall efficiency.",
      " Deployed analytics and monitoring systems to proactively improve application health and user satisfaction.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  
  
  {
    title: "AWS Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Oct 2021 - Dec 2021",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving intoFinished a capstone project with mentor guidance, designing a cloud application on AWS EC2, S3, and Lambda that boosted deployment speed by 40% and reduced operational overhead.",
      "Gained strong cloud engineering experience by automating key processes and improving system reliability by 25%."
      
    ],
  },
];

export const projects = [
  {
    name: "Vision Language Transformer for Medical Report Generation from Chest X-Rays & Diagnostic Attributes ",
    description:
      "Built a Vision Language Transformer (VLT) model to automate chest X-ray report generation by combining image feature extraction with diagnostic attribute embeddings. Integrated CNN-based encoders with transformer decoders for medical text synthesis, improving diagnostic consistency and reducing reporting time.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "CNNs", color: "green-text-gradient" },
      { name: "Transformers", color: "pink-text-gradient" },
     
    ],
    image: mhft,
  },
  {
    name: "Cascade Attention-based Convolutional Neural Network for Skin Cancer Detection ",
    description:
      "Developed CANet, a novel cascade attention-based convolutional neural network integrating spatial, channel, and gated attention mechanisms to enhance feature representation. ",
    tags: [
      { name: "Attention Mechanisms", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Image Classification", color: "pink-text-gradient" },
    ],
    image: payloadmaster,
    
  },
  {
    name: "Predict Future Software Usage",
    description:
      "Developed and trained a regression-based machine learning model to analyze historical user activity and forecast future software usage patterns. Leveraged features such as department, software type, and license category to predict usage hours  accurately, enabling proactive planning and optimized license distribution across teams",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: termpw,
    
  },
  
];
