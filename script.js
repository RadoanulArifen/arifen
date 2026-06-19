/* ============================================================
   DATA
============================================================ */

const SKILLS = [
  { ic: '🧪', nm: 'Manual Testing',    c: 'testing'    },
  { ic: '🐛', nm: 'Bug Reporting',     c: 'testing'    },
  { ic: '📋', nm: 'Test Case Design',  c: 'testing'    },
  { ic: '🔄', nm: 'Regression Testing',c: 'testing'    },
  { ic: '📝', nm: 'QA Documentation',  c: 'testing'    },
  { ic: '🔵', nm: 'Selenium',          c: 'automation' },
  { ic: '🎭', nm: 'Playwright',        c: 'automation' },
  { ic: '🌲', nm: 'Cypress',           c: 'automation' },
  { ic: '📮', nm: 'Postman',           c: 'automation' },
  { ic: '🔌', nm: 'API Testing',       c: 'automation' },
  { ic: '🐍', nm: 'Python',            c: 'automation' },
  { ic: '☕', nm: 'Java',              c: 'automation' },
  { ic: '🧠', nm: 'Machine Learning',  c: 'ai'         },
  { ic: '🔥', nm: 'TensorFlow',        c: 'ai'         },
  { ic: '🖼️', nm: 'CNN',              c: 'ai'         },
  { ic: '📊', nm: 'Data Analysis',     c: 'ai'         },
  { ic: '⚙️', nm: 'Git & GitHub',     c: 'tools'      },
  { ic: '📋', nm: 'Jira',             c: 'tools'      },
  { ic: '🐳', nm: 'Docker',           c: 'tools'      },
  { ic: '🔄', nm: 'CI/CD',            c: 'tools'      },
];

const TL = [
  {
    role: 'SQA Trainee',
    badge: '📅 2024 — Present',
    co: 'RootX Software',
    loc: 'Remote',
    list: [
      'Designed end-to-end test cases for web platforms',
      'Owned defect lifecycle from triage to verification',
      'Built regression suites for release readiness',
      'Contributed Selenium & Playwright automation scripts',
      'Authored QA documentation & process improvements',
    ],
  },
  {
    role: 'AI Research Contributor',
    badge: '📅 2023 — Present',
    co: 'University Research Lab',
    loc: 'Dhaka, BD',
    list: [
      'Co-authored 6 peer-reviewed publications',
      'Built CNN models for plant disease detection',
      'Published in IDAA, ICSASD, ICSD & ICBISD',
      'Applied ML for healthcare and agri domains',
    ],
  },
];

/* ── Project cards split into three category arrays ── */

const PROJECTS_SQA = [
  {
    ic: '',
    img: 'assets/images/sqa moc.png',
    tag: 'SQA',
    tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
    t: 'End-to-End Manual Testing of RobomartBD E-commerce Platform',
    d: 'Executed full-scale manual testing of RobomartBD, covering critical modules like Login, Signup, Profile, Product Purchase, Cart, and Checkout. Designed and executed detailed test cases, documented bugs with steps to reproduce, expected vs actual outcomes, and severity. Demonstrates hands-on expertise in end-to-end QA, bug tracking, and improving software reliability and user experience.',
    s: ['Jira', 'TestRail','Postman', 'Excel', 'QA Docs'],
    gh: 'https://github.com/RadoanulArifen/RoboMartBD-Manual-Testing', live: 'https://github.com/RadoanulArifen/RoboMartBD-Manual-Testing',
  },
  {
    ic: '',
    img: 'assets/images/slidespark.png',
    tag: 'SQA',
    tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
    t: 'SlideSpark-App-SQA-Project-Manual-Functional-Testing',
    d: 'Manual and functional testing project focused on an e-learning app (SlideSpark). Designed and executed test cases, performed regression, UI, and usability testing, and documented defects using Jira and Google Sheets to ensure app stability and quality across devices.',
    s: ['Postman', 'Jira', 'TestRail', 'Excel', 'QA Docs'],
    gh: 'https://github.com/RadoanulArifen/SlideSpark-App-SQA-Project-Manual-Functional-Testing', live: 'https://github.com/RadoanulArifen/SlideSpark-App-SQA-Project-Manual-Functional-Testing',
  },
  // {
  //   ic: '📋',
  //   img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&q=80',
  //   tag: 'SQA',
  //   tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
  //   t: 'Regression Test Suite Builder',
  //   d: 'Automated regression suite generator that identifies critical test paths from code change diffs and prioritises them for release cycles.',
  //   s: ['Python', 'Pytest', 'Git', 'CI/CD'],
  //   gh: '#', live: '#',
  // },
  // {
  //   ic: '📊',
  //   img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&q=80',
  //   tag: 'SQA',
  //   tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
  //   t: 'QA Metrics & Reporting Portal',
  //   d: 'Dashboard for aggregating defect density, test coverage, and sprint velocity metrics with automated stakeholder reports.',
  //   s: ['JavaScript', 'Chart.js', 'Python', 'SQL'],
  //   gh: '#', live: '#',
  // },
  // {
  //   ic: '🔍',
  //   img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=640&q=80',
  //   tag: 'SQA',
  //   tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
  //   t: 'Performance Testing Infrastructure',
  //   d: 'Load and stress testing setup using JMeter for e-commerce workflows, identifying bottlenecks under concurrent user spikes.',
  //   s: ['JMeter', 'Java', 'Linux', 'Grafana'],
  //   gh: '#', live: '#',
  // },
  // {
  //   ic: '🔄',
  //   img: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be55?w=640&q=80',
  //   tag: 'SQA',
  //   tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
  //   t: 'Mobile App Testing Framework',
  //   d: 'Cross-platform mobile testing framework supporting iOS and Android with Appium, covering UI flows and API integrations.',
  //   s: ['Appium', 'Java', 'TestNG', 'Android SDK'],
  //   gh: '#', live: '#',
  // },
  // {
  //   ic: '🔐',
  //   img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=640&q=80',
  //   tag: 'SQA',
  //   tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
  //   t: 'Security & Penetration Testing Suite',
  //   d: 'Automated security testing toolkit for detecting OWASP Top 10 vulnerabilities in web apps — SQL injection, XSS, auth bypass.',
  //   s: ['OWASP ZAP', 'Burp Suite', 'Python', 'Bash'],
  //   gh: '#', live: '#',
  // },
  // {
  //   ic: '📱',
  //   img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&q=80',
  //   tag: 'SQA',
  //   tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
  //   t: 'Cross-Browser Compatibility Lab',
  //   d: 'Automated cross-browser testing pipeline using Selenium Grid and BrowserStack to validate UI consistency across 12+ browser/OS combos.',
  //   s: ['Selenium Grid', 'BrowserStack', 'Java', 'Jenkins'],
  //   gh: '#', live: '#',
  // },
  // {
  //   ic: '⚡',
  //   img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&q=80',
  //   tag: 'SQA',
  //   tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
  //   t: 'CI/CD Quality Gate Pipeline',
  //   d: 'GitHub Actions pipeline enforcing quality gates — unit coverage thresholds, lint checks, and automated smoke tests on every PR.',
  //   s: ['GitHub Actions', 'Jest', 'Python', 'Docker'],
  //   gh: '#', live: '#',
  // },
  // {
  //   ic: '📝',
  //   img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=640&q=80',
  //   tag: 'SQA',
  //   tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
  //   t: 'Test Data Management System',
  //   d: 'Centralised test data provisioning tool that seeds realistic anonymised data for multiple environments on demand.',
  //   s: ['Python', 'Faker', 'PostgreSQL', 'Flask'],
  //   gh: '#', live: '#',
  // },
];

const PROJECTS_AI = [
  {
    ic: '🤖',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&q=80',
    tag: 'AI Automation',
    tBg: 'rgba(0,210,200,.2)', tClr: '#00d2c8',
    t: 'AI-based Testing Automation System',
    d: 'Intelligent test generation and execution platform using ML models to predict failure-prone areas and auto-generate test cases.',
    s: ['Python', 'Selenium', 'TensorFlow', 'ML'],
    gh: '#', live: '#',
  },
  {
    ic: '🔵',
    img: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=640&q=80',
    tag: 'AI Automation',
    tBg: 'rgba(0,210,200,.2)', tClr: '#00d2c8',
    t: 'Selenium Automation Framework',
    d: 'Scalable page-object-model-based Selenium framework with parallel execution, custom reporting, and CI/CD pipeline integration.',
    s: ['Selenium', 'Java', 'TestNG', 'Maven'],
    gh: '#', live: '#',
  },
  {
    ic: '🍋',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=640&q=80',
    tag: 'AI Automation',
    tBg: 'rgba(0,210,200,.2)', tClr: '#00d2c8',
    t: 'Lemon Leaf Disease Detection (CNN)',
    d: 'Multi-class CNN model for early detection of lemon leaf diseases with 94% accuracy, published at ICSASD 2026.',
    s: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    gh: '#', live: '#',
  },
  {
    ic: '🌶️',
    img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=640&q=80',
    tag: 'AI Automation',
    tBg: 'rgba(0,210,200,.2)', tClr: '#00d2c8',
    t: 'Chili Leaf Disease Detection',
    d: 'Deep learning system for detecting and classifying chili plant leaf diseases in early growth stages.',
    s: ['Python', 'Keras', 'CNN', 'NumPy'],
    gh: '#', live: '#',
  },
  {
    ic: '🧬',
    img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=640&q=80',
    tag: 'AI Automation',
    tBg: 'rgba(0,210,200,.2)', tClr: '#00d2c8',
    t: 'Suicide Risk Prediction (ML)',
    d: 'Behavioral data-driven ML system for predicting suicide risk levels, helping mental health professionals.',
    s: ['Python', 'Scikit-learn', 'NLP', 'Pandas'],
    gh: '#', live: '#',
  },
  {
    ic: '👶',
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=640&q=80',
    tag: 'AI Automation',
    tBg: 'rgba(0,210,200,.2)', tClr: '#00d2c8',
    t: 'Infant Illness Detection Support',
    d: 'AI-assisted system for early detection of common infant illnesses using symptom analysis and pattern recognition.',
    s: ['Python', 'ML', 'Flask', 'React'],
    gh: '#', live: '#',
  },
  {
    ic: '🌿',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=640&q=80',
    tag: 'AI Automation',
    tBg: 'rgba(0,210,200,.2)', tClr: '#00d2c8',
    t: 'Sesame Leaf Disease Detection',
    d: 'CNN-based early detection system for sesame leaf diseases supporting agricultural communities in Bangladesh.',
    s: ['Python', 'TensorFlow', 'CNN', 'PIL'],
    gh: '#', live: '#',
  },
  {
    ic: '🎭',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=640&q=80',
    tag: 'AI Automation',
    tBg: 'rgba(0,210,200,.2)', tClr: '#00d2c8',
    t: 'LLM-Assisted Test Case Generator',
    d: 'Uses large language models to automatically draft functional test cases from feature specification documents.',
    s: ['Python', 'LLM', 'OpenAI API', 'FastAPI'],
    gh: '#', live: '#',
  },
];

const PROJECTS_WEB = [
  {
    ic: '🌐',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=640&q=80',
    tag: 'Web Dev',
    tBg: 'rgba(167,139,250,.2)', tClr: '#a78bfa',
    t: 'Portfolio Website (This Site)',
    d: 'Fully custom dark-mode portfolio built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.',
    s: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gh: '#', live: '#',
  },
  {
    ic: '🛒',
    img: 'https://images.unsplash.com/photo-1561069934-eee225952461?w=640&q=80',
    tag: 'Web Dev',
    tBg: 'rgba(167,139,250,.2)', tClr: '#a78bfa',
    t: 'E-Commerce Frontend Template',
    d: 'Responsive e-commerce UI with product listing, cart, and checkout flows. Tested with a full Selenium regression suite.',
    s: ['React', 'Tailwind', 'JavaScript', 'Selenium'],
    gh: '#', live: '#',
  },
  {
    ic: '📊',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80',
    tag: 'Web Dev',
    tBg: 'rgba(167,139,250,.2)', tClr: '#a78bfa',
    t: 'Research Publication Portal',
    d: 'Web application for listing, searching and filtering academic publications with dynamic filtering and citation export.',
    s: ['React', 'Node.js', 'MongoDB', 'REST API'],
    gh: '#', live: '#',
  },
  {
    ic: '🔐',
    img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=640&q=80',
    tag: 'Web Dev',
    tBg: 'rgba(167,139,250,.2)', tClr: '#a78bfa',
    t: 'Auth & Role Management Dashboard',
    d: 'Full-stack authentication system with role-based access control, JWT tokens, and an admin dashboard.',
    s: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    gh: '#', live: '#',
  },
  {
    ic: '🩺',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&q=80',
    tag: 'Web Dev',
    tBg: 'rgba(167,139,250,.2)', tClr: '#a78bfa',
    t: 'Healthcare Patient Portal',
    d: 'Responsive web portal for patient appointment scheduling, medical record viewing, and doctor consultation requests.',
    s: ['React', 'Django', 'REST API', 'Tailwind'],
    gh: '#', live: '#',
  },
  {
    ic: '📈',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&q=80',
    tag: 'Web Dev',
    tBg: 'rgba(167,139,250,.2)', tClr: '#a78bfa',
    t: 'Real-Time Analytics Dashboard',
    d: 'Live data visualisation dashboard with WebSocket updates, filterable charts, and exportable CSV/PDF reports.',
    s: ['React', 'Chart.js', 'Node.js', 'WebSocket'],
    gh: '#', live: '#',
  },
  {
    ic: '🎓',
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=640&q=80',
    tag: 'Web Dev',
    tBg: 'rgba(167,139,250,.2)', tClr: '#a78bfa',
    t: 'Online Learning Management System',
    d: 'LMS platform with course creation, video streaming, quizzes, progress tracking, and certificate generation.',
    s: ['Next.js', 'MongoDB', 'Cloudinary', 'Stripe'],
    gh: '#', live: '#',
  },
  {
    ic: '🗺️',
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=640&q=80',
    tag: 'Web Dev',
    tBg: 'rgba(167,139,250,.2)', tClr: '#a78bfa',
    t: 'Interactive Map & GIS Application',
    d: 'Geospatial web app built with Leaflet.js and OpenStreetMap for visualising disaster-prone zones in Bangladesh.',
    s: ['Leaflet.js', 'Python', 'GeoJSON', 'Flask'],
    gh: '#', live: '#',
  },
];

const PUBS = [
  {
    cf: 'International Conference on Business Innovation and Sustainable Development (ICBISD 2026)', yr: 2026,
    tags: [
      { t: 'ML',     c: 'rgba(0,210,200,.15)',   tc: '#00d2c8' },
      { t: 'Health', c: 'rgba(248,113,113,.15)',  tc: '#f87171' },
    ],
    ti: 'Early Detection and Management of Infant Common Illnesses (0–3 Years): A Symptom-Based Support System for New Parents',
    url: 'https://drive.google.com/file/d/1udnln9xXf2bMNTpUtoP5xW1KSxTHjTa1/view',
  },
  {
    cf: '1st International Conference on Smart Agriculture and Sustainable Development (ICSASD)', yr: 2026,
    tags: [
      { t: 'CNN',  c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
      { t: 'Agri', c: 'rgba(74,222,128,.15)',  tc: '#4ade80' },
    ],
    ti: 'Applying Convolutional Neural Networks for Early Multi-Class Detection of Lemon Leaf Diseases: A Comparative Analysis',
    url: 'https://drive.google.com/file/d/1YOAGTr266MGITD5ml7jxlIoSsIRP7KXe/view',
  },
  {
    cf: '8th ICSD 2026 International Conference on Sustainable Development', yr: 2026,
    tags: [
      { t: 'CNN',  c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
      { t: 'Agri', c: 'rgba(74,222,128,.15)',  tc: '#4ade80' },
    ],
    ti: 'Early Multi-Class Disease Detection in Chili Plant Leaves Using Convolutional Neural Networks: A Comparative Study',
    url: 'https://drive.google.com/file/d/1lvrQWtENVpZx0PBQHgFlGNH0ubOamXuR/view',
  },
  {
    cf: '8th ICSD 2026 International Conference on Sustainable Development', yr: 2026,
    tags: [{ t: 'CNN',  c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
      { t: 'Agri', c: 'rgba(74,222,128,.15)',  tc: '#4ade80' },],
    ti: 'Early Detection of Sesame Leaf Diseases Using Convolutional Neural Networks',
    url: 'https://drive.google.com/file/d/1unb_zih1_CUz091b37OUSINQAX2KDtmY/view',
  },
  {
    cf: '8th ICSD 2026 International Conference on Sustainable Development', yr: 2026,
    tags: [
      { t: 'Systems', c: 'rgba(96,165,250,.15)', tc: '#60a5fa' },
    ],
    ti: 'Community Response to Early Warning System: An Empirical Study on Action Delay and Risk Perception',
    url: 'https://drive.google.com/file/d/1EmsFdpK8L57nuPvPglqaTHS45FWfn939/view',
  },
  {
    cf: '1st International Conference on Intelligent Data Analysis and Applications (IDAA 2026)', yr: 2025,
    tags: [
      { t: 'ML',     c: 'rgba(0,210,200,.15)',  tc: '#00d2c8' },
      { t: 'Health', c: 'rgba(248,113,113,.15)', tc: '#f87171' },
    ],
    ti: 'Behavioral Data-Driven Prediction of Suicide Risk Using Machine Learning Approaches',
    url: 'https://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view',
  },
  // {
  //   cf: 'IEEE', yr: 2026,
  //   tags: [https://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_linkhttps://drive.google.com/file/d/1Ax8s8HG82HqBA-_0G1X63N-MryQ6-anV/view?usp=drive_link
  //     { t: 'DL',   c: 'rgba(251,191,36,.15)',  tc: '#fbbf24' },
  //     { t: 'Agri', c: 'rgba(74,222,128,.15)',  tc: '#4ade80' },
  //   ],
  //   ti: 'Transfer Learning Approaches for Plant Disease Classification in Low-Resource Settings',
  //   url: 'https://drive.google.com/file/d/1example7/view',
  // },
  // {
  //   cf: 'ICML', yr: 2026,
  //   tags: [
  //     { t: 'ML',  c: 'rgba(0,210,200,.15)',  tc: '#00d2c8' },
  //     { t: 'SQA', c: 'rgba(96,165,250,.15)', tc: '#60a5fa' },
  //   ],
  //   ti: 'Automated Test Oracle Generation Using Machine Learning for GUI Testing',
  //   url: 'https://drive.google.com/file/d/1example8/view',
  // },
];

/* Dataset cards — ic=emoji, img=Unsplash URL, type=category label,
   tBg/tClr=tag colours, rows=sample count, size=dataset size,
   tags=domain tags, url=download/source link                      */
const DATASETS = [
  {
    ic: '🌿',
    title: 'Large-Scale Lemon Leaf Disease and Pest Image Dataset from Bangladesh',
    desc: 'High-resolution images of healthy and diseased lemon leaves across 5 disease classes, collected in field conditions in Bangladesh.',
    type: 'Agriculture', tBg: 'rgba(74,222,128,.2)', tClr: '#4ade80',
    rows: '4,200 images', size: '2.1 GB',
    tags: [
      { t: 'Mendeley Data', c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
    ],
    url: 'https://data.mendeley.com/datasets/8d9fv6kpt3/2',
    doi: 'https://doi.org/10.17632/8d9fv6kpt3.2',
  },
  {
    ic: '🌿',
    img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=640&q=80',
    title: 'Chilli Leaf Disease Image Dataset for Classification and Early Diagnosis in Agriculture',
    desc: 'Annotated chili leaf images covering 4 major disease categories with augmentation splits for training, validation and testing.',
    type: 'Agriculture', tBg: 'rgba(74,222,128,.2)', tClr: '#4ade80',
    rows: '3,680 images', size: '1.7 GB',
    tags: [
      { t: 'Mendeley Data', c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
    ],
    url: 'https://data.mendeley.com/datasets/tm3v4zmh7c/1',
    doi: 'https://doi.org/10.17632/tm3v4zmh7c.1',
  },
  {
    ic: '🧬',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=640&q=80',
    title: 'Early Detection of Infant Common Illnesses (0–3 Years): Symptom-Based Dataset from Bangladesh',
    desc: 'Multi-class sesame leaf dataset captured across different growth stages; supports early-detection model benchmarking.',
    type: 'Healthcare', tBg: 'rgba(74,222,128,.2)', tClr: '#4ade80',
    rows: '2,950 images', size: '1.3 GB',
    tags: [
      { t: 'Mendeley Data', c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
    ],
    url: 'https://data.mendeley.com/datasets/zfrs99j8z6/2',
    doi: 'https://doi.org/10.17632/zfrs99j8z6.2',
  },
  {
    ic: '🧬',
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=640&q=80',
    title: 'Wall Crack Image Dataset for Earthquake and Structural Health Analysis',
    desc: 'Anonymised tabular dataset of behavioural, social and demographic indicators used for ML-based mental health risk stratification.',
    type: 'Healthcare', tBg: 'rgba(74,222,128,.2)', tClr: '#4ade80',
    rows: '18,500 records', size: '42 MB',
    tags: [
      { t: 'Mendeley Data', c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
    ],
    url: 'https://data.mendeley.com/datasets/hxrry6krs7/1',
    doi: 'https://doi.org/10.17632/hxrry6krs7.1',
  },
  {
    ic: '📜',
    img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=640&q=80',
    title: 'Bangla Handwritten Dolil Dataset',
    desc: 'Structured symptom-outcome dataset for common neonatal and infant conditions, enabling pattern recognition for early diagnostic support.',
    type: 'Handwritten Documents', tBg: 'rgba(74,222,128,.2)', tClr: '#4ade80',
    rows: '9,200 records', size: '18 MB',
    tags: [
      { t: 'Mendeley Data', c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
    ],
    url: 'https://data.mendeley.com/datasets/yk3c3xy9vm/1',
    doi: 'https://doi.org/10.17632/yk3c3xy9vm.1',
  },
  {
    ic: '🚨',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=640&q=80',
    title: 'Behavioral Data-Driven Prediction of Suicide Risk Using Machine Learning Approaches',
    desc: 'Survey-based dataset capturing community awareness and response patterns for early warning systems in disaster-prone areas of Bangladesh.',
    type: 'Public Safety', tBg: 'rgba(96,165,250,.2)', tClr: '#60a5fa',
    rows: '5,100 records', size: '8 MB',
    tags: [
      { t: 'Mendeley Data', c: 'rgba(167,139,250,.15)', tc: '#a78bfa' },
    ],
    url: 'https://data.mendeley.com/datasets/bpns8vzwrj/2',
    doi: 'https://doi.org/10.17632/bpns8vzwrj.2',
  },
];

const CERTS = [
  { ic: '🎓', n: 'Selenium WebDriver with Python',    i: 'Udemy',                       url: 'https://drive.google.com/file/d/DEMO_ID_1/view' },
  { ic: '🎓', n: 'API Testing with Postman',          i: 'Postman Academy',              url: 'https://drive.google.com/file/d/DEMO_ID_2/view' },
  { ic: '🎓', n: 'Machine Learning Fundamentals',     i: 'Coursera / Google',            url: 'https://drive.google.com/file/d/DEMO_ID_3/view' },
  { ic: '🎓', n: 'Software Testing Foundations',      i: 'ISTQB Aligned',               url: 'https://drive.google.com/file/d/DEMO_ID_4/view' },
  { ic: '🎓', n: 'Python for Data Science',           i: 'IBM / Coursera',               url: 'https://drive.google.com/file/d/DEMO_ID_5/view' },
  { ic: '🎓', n: 'Docker & CI/CD Essentials',         i: 'LinkedIn Learning',            url: 'https://drive.google.com/file/d/DEMO_ID_6/view' },
  { ic: '🎓', n: 'Deep Learning Specialization',      i: 'Coursera / deeplearning.ai',   url: 'https://drive.google.com/file/d/DEMO_ID_7/view' },
  { ic: '🎓', n: 'Git & GitHub Professional',         i: 'GitHub Learning Lab',          url: 'https://drive.google.com/file/d/DEMO_ID_8/view' },
  { ic: '🎓', n: 'Playwright Test Automation',        i: 'Udemy',                       url: 'https://drive.google.com/file/d/DEMO_ID_9/view' },
];

/* Article cards — each entry includes an `img` URL for the card thumbnail */
const ARTS = [
  {
    cat: 'Automation', cClr: '#00d2c8',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=640&q=80',
    t: 'Self-Healing Selenium Tests with ML Heuristics',
    d: 'How small heuristics reduce flakiness and keep automation suites green across releases.',
    m: 6,
  },
  {
    cat: 'Machine Learning', cClr: '#4ade80',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=640&q=80',
    t: 'Building a CNN for Plant Disease Detection',
    d: 'A walkthrough of dataset preparation, architecture choices and evaluation metrics.',
    m: 8,
  },
  {
    cat: 'QA Process', cClr: '#f472b6',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=640&q=80',
    t: 'A Pragmatic Defect Lifecycle for Small Teams',
    d: 'Lightweight workflows that scale with your product without slowing engineers down.',
    m: 5,
  },
  {
    cat: 'Research', cClr: '#a78bfa',
    img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=640&q=80',
    t: 'Transfer Learning for Low-Resource Plant Datasets',
    d: 'Using pre-trained ImageNet weights to boost accuracy when labelled data is scarce.',
    m: 7,
  },
  {
    cat: 'Testing', cClr: '#fbbf24',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&q=80',
    t: 'API Contract Testing with Postman & Newman',
    d: 'Automating contract validation in CI pipelines so breaking changes never reach production.',
    m: 6,
  },
  {
    cat: 'AI', cClr: '#60a5fa',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=640&q=80',
    t: 'Integrating LLM-assisted Test Generation into QA Pipelines',
    d: 'Early experiments using language models to draft test cases from feature specs automatically.',
    m: 9,
  },
];

/* ============================================================
   STARS CANVAS
============================================================ */
const cv = document.getElementById('sc');
const cx = cv.getContext('2d');
let stars = [];

function initStars() {
  cv.width  = innerWidth;
  cv.height = innerHeight;
  stars = Array.from({ length: 160 }, () => ({
    x: Math.random() * cv.width,
    y: Math.random() * cv.height,
    r: Math.random() * 1.2 + 0.2,
    o: Math.random(),
    s: Math.random() * 0.005 + 0.002,
  }));
}

function drawStars() {
  cx.clearRect(0, 0, cv.width, cv.height);
  stars.forEach(s => {
    s.o += s.s;
    if (s.o > 1 || s.o < 0) s.s *= -1;
    cx.globalAlpha = s.o * 0.65;
    cx.fillStyle = '#fff';
    cx.beginPath();
    cx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    cx.fill();
  });
  cx.globalAlpha = 1;
  requestAnimationFrame(drawStars);
}

initStars();
drawStars();
window.addEventListener('resize', initStars);

/* ============================================================
   SCROLL PROGRESS
============================================================ */
const spEl = document.getElementById('sp');

window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  spEl.style.width = (scrollY / h * 100) + '%';
});

/* ============================================================
   LOADER
============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('gone'), 1100);
});

/* ============================================================
   THEME TOGGLE
============================================================ */
document.getElementById('tbtn').addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('tbtn').textContent = isDark ? '☀️' : '🌙';
});

/* ============================================================
   HAMBURGER MENU — unified handler
============================================================ */
(function initHamburger() {
  const ham = document.getElementById('ham');
  const mm  = document.getElementById('mm');

  ham.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = mm.classList.contains('open');
    mm.classList.toggle('open');
    ham.classList.toggle('open');
    ham.setAttribute('aria-expanded', !isOpen);
  });

  /* Close on outside click */
  document.addEventListener('click', function(e) {
    if (!ham.contains(e.target) && !mm.contains(e.target)) {
      mm.classList.remove('open');
      ham.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
    }
  });

  /* Close on resize to desktop */
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      mm.classList.remove('open');
      ham.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
    }
  });
})();

function closeMenu() {
  const ham = document.getElementById('ham');
  const mm  = document.getElementById('mm');
  mm.classList.remove('open');
  ham.classList.remove('open');
  ham.setAttribute('aria-expanded', 'false');
}

/* ============================================================
   TYPING ANIMATION
============================================================ */
const TYPING_TEXTS = [
  'SQA Engineer',
  'Test Automation Specialist',
  'AI Automation Engineer',
  'Research Contributor',
  'Machine Learning Enthusiast',
];

let typeIdx  = 0;
let charIdx  = 0;
let deleting = false;
const telEl  = document.getElementById('tel');

function type() {
  const cur = TYPING_TEXTS[typeIdx];

  if (!deleting) {
    telEl.textContent = cur.slice(0, ++charIdx);
    if (charIdx === cur.length) {
      deleting = true;
      return setTimeout(type, 2000);
    }
  } else {
    telEl.textContent = cur.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting  = false;
      typeIdx   = (typeIdx + 1) % TYPING_TEXTS.length;
      return setTimeout(type, 400);
    }
  }
  setTimeout(type, deleting ? 55 : 80);
}

setTimeout(type, 1200);

/* ============================================================
   INTERSECTION OBSERVER (REVEAL)
============================================================ */
const ro = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
  { threshold: 0.1 }
);

document.querySelectorAll('.rv').forEach(el => ro.observe(el));

/* ============================================================
   SKILLS RENDER
============================================================ */
const sgEl = document.getElementById('sg');

function renderSkills(cat = 'all') {
  sgEl.innerHTML = '';
  SKILLS
    .filter(s => cat === 'all' || s.c === cat)
    .forEach((s, i) => {
      const d = document.createElement('div');
      d.className = 'sc rv';
      d.style.transitionDelay = (i % 8 * 0.05) + 's';
      d.innerHTML = `<span class="sc-ic">${s.ic}</span><div class="sc-nm">${s.nm}</div>`;
      sgEl.appendChild(d);
      ro.observe(d);
    });
}

renderSkills();

document.querySelectorAll('.fb').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fb').forEach(x => x.classList.remove('on'));
    btn.classList.add('on');
    renderSkills(btn.dataset.c);
  });
});

/* ============================================================
   TIMELINE RENDER
============================================================ */
const tlEl = document.getElementById('tline');

TL.forEach((t, i) => {
  const d = document.createElement('div');
  d.className = 'tli rv';
  d.style.transitionDelay = (i * 0.15) + 's';
  d.innerHTML = `
    <div class="tldot">📋</div>
    <div class="tlc">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px;">
        <div class="tlrole">${t.role}</div>
        <span class="tlbadge">${t.badge}</span>
      </div>
      <div class="tlco">${t.co}</div>
      <div class="tlloc">${t.loc}</div>
      <ul class="tllist">${t.list.map(l => `<li>${l}</li>`).join('')}</ul>
    </div>`;
  tlEl.appendChild(d);
  ro.observe(d);
});

/* ============================================================
   CAROUSEL SYSTEM
============================================================ */
const SVG_NEXT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
const SVG_PREV = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`;

function setupCarousel(data, gridId, btnId, dotsId, counterId, renderFn, perPage = 6) {
  const grid      = document.getElementById(gridId);
  const nextBtn   = document.getElementById(btnId);
  const backBtn   = document.getElementById(btnId + '-back');
  const dotsEl    = document.getElementById(dotsId);
  const counterEl = document.getElementById(counterId);
  
  // Guard: exit if required elements don't exist (e.g., commented out sections)
  if (!grid || !nextBtn || !dotsEl || !counterEl) return;
  
  const total     = Math.ceil(data.length / perPage);
  let page        = 0;

  function updateDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('span');
      dot.className = 'cdot' + (i === page ? ' act' : '');
      dot.addEventListener('click', () => { page = i; render(); });
      dotsEl.appendChild(dot);
    }
  }

  function render() {
    // Fade out existing cards
    Array.from(grid.children).forEach(c => {
      c.style.opacity   = '0';
      c.style.transform = 'translateY(12px)';
    });

    setTimeout(() => {
      grid.innerHTML = '';
      const chunk = data.slice(page * perPage, (page + 1) * perPage);

      chunk.forEach((item, i) => {
        const el = renderFn(item);
        el.style.opacity    = '0';
        el.style.transform  = 'translateY(14px)';
        el.style.transition = `opacity .35s ease ${i * 0.06}s, transform .35s ease ${i * 0.06}s`;
        grid.appendChild(el);
        ro.observe(el);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
        }));
      });

      // Button states
      nextBtn.disabled = (total <= 1 || page === total - 1);
      nextBtn.innerHTML = 'Next' + SVG_NEXT;

      if (backBtn) {
        backBtn.disabled  = (page === 0);
        backBtn.innerHTML = SVG_PREV + 'Back';
      }

      counterEl.textContent = `${page + 1} / ${total}`;
      updateDots();
    }, grid.children.length > 0 ? 180 : 0);
  }

  nextBtn.addEventListener('click', () => { if (page < total - 1) { page++; render(); } });
  if (backBtn) {
    backBtn.addEventListener('click', () => { if (page > 0) { page--; render(); } });
  }

  render();
}

/* ============================================================
   PROJECT CARD RENDERER
============================================================ */
function mkProj(p) {
  const d = document.createElement('div');
  d.className = 'pc rv';
  d.innerHTML = `
    <div class="pt">
      <img src="${p.img}" alt="${p.t}" loading="lazy">
      <div class="pto"></div>
      <span class="pt-icon">${p.ic}</span>
      <span class="ptag" style="background:${p.tBg};color:${p.tClr};border:1px solid ${p.tClr}33">${p.tag}</span>
    </div>
    <div class="pb">
      <div class="ptitle">${p.t}</div>
      <div class="pdesc">${p.d}</div>
      <div class="pstack">${p.s.map(x => `<span class="sp">${x}</span>`).join('')}</div>
      <div class="pact">
        <a href="${p.gh || '#'}" class="pab" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
          GitHub
        </a>
        <a href="${p.live || '#'}" class="pas" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live
        </a>
      </div>
    </div>`;
  return d;
}

/* ============================================================
   PUBLICATION CARD RENDERER
============================================================ */
function mkPub(p) {
  const d = document.createElement('div');
  d.className = 'pubc rv';
  d.innerHTML = `
    <div class="pubh">
      <div style="display:flex;align-items:center;gap:9px;">
        <div class="pubic">📄</div>
        <div>
          <div class="pubcf">${p.cf}</div>
          <div class="pubyr">📅 ${p.yr}</div>
        </div>
      </div>
      <div class="pubtags">${p.tags.map(t => `<span class="pubtag" style="background:${t.c};color:${t.tc};border-color:${t.tc}44">${t.t}</span>`).join('')}</div>
    </div>
    <div class="pubtit">${p.ti}</div>
    <a href="${p.url}" class="publink" target="_blank" rel="noopener noreferrer">
      Read paper
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </a>`;
  return d;
}

/* ============================================================
   CERTIFICATION CARD RENDERER
============================================================ */
function mkCert(c) {
  const d = document.createElement('div');
  d.className = 'cc rv';
  d.innerHTML = `
    <div class="ccic">${c.ic}</div>
    <div class="cc-body">
      <div class="ccn">${c.n}</div>
      <div class="cci">${c.i}</div>
      <a href="${c.url}" target="_blank" rel="noopener" class="cert-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Show Certificate
      </a>
    </div>`;
  return d;
}

/* ============================================================
   ARTICLE CARD RENDERER
============================================================ */
function mkArt(a) {
  const d = document.createElement('div');
  d.className = 'artc rv';
  d.innerHTML = `
    <div class="artth">
      <img src="${a.img}" alt="${a.t}" loading="lazy">
      <div class="artth-overlay"></div>
      <span class="artcat" style="color:${a.cClr};border-color:${a.cClr}44">${a.cat}</span>
    </div>
    <div class="artb">
      <div class="artt">${a.t}</div>
      <div class="artd">${a.d}</div>
      <div class="artf">
        <span class="artm">⏱ ${a.m} min</span>
        <a href="#" class="artr">
          Read
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>`;
  return d;
}

/* ============================================================
   INIT ALL CAROUSELS
============================================================ */
/* Projects: three separate carousels, one per tab */
setupCarousel(PROJECTS_SQA,  'pg-sqa',  'pmb-sqa',  'proj-dots-sqa',  'proj-counter-sqa',  mkProj, 6);
setupCarousel(PROJECTS_AI,   'pg-ai',   'pmb-ai',   'proj-dots-ai',   'proj-counter-ai',   mkProj, 6);
setupCarousel(PROJECTS_WEB,  'pg-web',  'pmb-web',  'proj-dots-web',  'proj-counter-web',  mkProj, 6);

setupCarousel(PUBS,     'pubg',  'rmbtn',  'pub-dots',   'pub-counter',   mkPub,  4);
setupCarousel(DATASETS, 'dsg',   'dsmb',   'ds-dots',    'ds-counter',    mkDataset, 4);
setupCarousel(CERTS,    'cg',    'cmb',    'cert-dots',  'cert-counter',  mkCert, 6);
setupCarousel(ARTS,     'artg',  'artmb',  'art-dots',   'art-counter',   mkArt,  3);

/* ============================================================
   PROJECT TAB SWITCHING  (scoped to #projects section only)
============================================================ */
(function initProjTabs() {
  const projSection = document.getElementById('projects');
  const tabs   = projSection.querySelectorAll('.proj-tab');
  const panels = projSection.querySelectorAll('.proj-panel');

  // Show the first panel (SQA) immediately on load
  panels.forEach((p, i) => p.classList.toggle('hidden', i !== 0));

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.toggle('active',     t.dataset.tab === target);
        t.setAttribute('aria-selected', t.dataset.tab === target ? 'true' : 'false');
      });

      panels.forEach(p => {
        const isTarget = p.id === 'proj-panel-' + target;
        p.classList.toggle('hidden', !isTarget);
      });
    });
  });
})();

/* ============================================================
   DATASET CARD RENDERER — mirrors paper card (pubc) exactly
============================================================ */
function mkDataset(d) {
  const el = document.createElement('div');
  el.className = 'pubc rv';
  const tagsHtml = d.tags.map(t =>
    '<span class="pubtag" style="background:' + t.c + ';color:' + t.tc + ';border-color:' + t.tc + '44">' + t.t + '</span>'
  ).join('');
  el.innerHTML =
    '<div class="pubh">' +
      '<div style="display:flex;align-items:center;gap:9px;">' +
        '<div class="pubic">' + d.ic + '</div>' +
        '<div>' +
          '<div class="pubcf" style="color:' + d.tClr + '">' + d.type + '</div>' +
          '<div class="pubyr">' +
            // '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> ' +
            // d.rows + '&nbsp;&nbsp;' +
            // '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> ' +
            // d.size +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="pubtags">' + tagsHtml + '</div>' +
    '</div>' +
    '<div class="pubtit">' + d.title + '</div>' +
    // '<div style="font-family:var(--mono);font-size:.85rem;line-height:1.8;color:var(--t2);flex:1;">' + d.desc + '</div>' +
    '<div style="display:flex;gap:16px;margin-top:4px;">' +
      '<a href="' + d.url + '" target="_blank" rel="noopener" class="publink">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' +
        ' View Dataset' +
      '</a>' +
      '<a href="' + (d.doi || '#') + '" target="_blank" rel="noopener" class="publink" style="color:var(--purple);">' +
        'DOI' +
        ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
      '</a>' +
    '</div>';
  return el;
}


/* ============================================================
   RESEARCH TAB SWITCHING  (scoped to #research section only)
============================================================ */
(function initResTabs() {
  // Stamp counts into tab badges
  document.getElementById('tc-papers').textContent   = PUBS.length;
  document.getElementById('tc-datasets').textContent = DATASETS.length;

  const resSection = document.getElementById('research');
  const tabs   = resSection.querySelectorAll('.res-tab');
  const panels = resSection.querySelectorAll('.res-panel');

  // Show the first panel (papers) immediately so cards are visible on load
  panels.forEach((p, i) => p.classList.toggle('hidden', i !== 0));

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.toggle('active',     t.dataset.tab === target);
        t.setAttribute('aria-selected', t.dataset.tab === target ? 'true' : 'false');
      });

      panels.forEach(p => {
        const isTarget = p.id === 'panel-' + target;
        p.classList.toggle('hidden', !isTarget);
      });
    });
  });
})();

/* ============================================================
   CONTACT FORM — SEND BUTTON
============================================================ */
document.getElementById('sbtn').addEventListener('click', () => {
  const btn = document.getElementById('sbtn');
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const message = document.getElementById('f-msg').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '⏳ Sending...';

  const mailtoLink = `mailto:radoanul@example.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  window.location.href = mailtoLink;

  setTimeout(() => {
    btn.innerHTML = '✓ Sent!';
    btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    
    setTimeout(() => {
      btn.innerHTML = `Send Message<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;margin-left:7px"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
      btn.style.background = '';
      btn.disabled = false;
      document.getElementById('f-name').value = '';
      document.getElementById('f-email').value = '';
      document.getElementById('f-msg').value = '';
    }, 2000);
  }, 500);
});

/* (hamburger and resize handled in unified initHamburger above) */

/* ============================================================
   TOUCH SWIPE — Carousel swipe on mobile
============================================================ */
(function addSwipeSupport() {
  const carouselGrids = ['pg-sqa','pg-ai','pg-web','pubg','dsg','cg','artg'];
  const btnMap = {
    'pg-sqa': { next: 'pmb-sqa',  back: 'pmb-sqa-back'  },
    'pg-ai':  { next: 'pmb-ai',   back: 'pmb-ai-back'   },
    'pg-web': { next: 'pmb-web',  back: 'pmb-web-back'  },
    'pubg':   { next: 'rmbtn',    back: 'rmbtn-back'    },
    'dsg':    { next: 'dsmb',     back: 'dsmb-back'     },
    'cg':     { next: 'cmb',      back: 'cmb-back'      },
    'artg':   { next: 'artmb',    back: 'artmb-back'    },
  };

  carouselGrids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    let startX = 0;
    el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) < 50) return;
      const map = btnMap[id];
      if (diff > 0) document.getElementById(map.next)?.click();
      else          document.getElementById(map.back)?.click();
    }, { passive: true });
  });
})();
