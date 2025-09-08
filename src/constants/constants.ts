import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  githubLogo,
  figma,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  pizzaapp,
  clotheapp,
  jediapp,
  vanilaworkapp,
  nodejs,
  nextjs,
  nestjs,
  docker,
  nextExam,
} from '../assets/index';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: backend,
  },
  {
    title: 'Node.js Developer',
    icon: mobile,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Nest.js',
    icon: nestjs,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'github',
    icon: githubLogo,
  },

  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'HTML,CSS,JS and Git',
    company_name: 'Starbucks',
    icon: html,
    iconBg: '#383E56',
    date: 'September 2022 - February 2023',
    points: [
      'Learning basic HTML , CSS and JS .',
      'Learning Git and Github interaciton',
      'Developing websites.',
    ],
  },
  {
    title: 'React',
    company_name: 'Tesla',
    icon: reactjs,
    iconBg: '#E6DEDD',
    date: 'January 2024 - April 2024',
    points: [
      'Learning basics about React JS and TS.',
      'Learning basic libraries such as axios redux toolkit, react-router, tailwind, material ui etc. also some feature like hoc and advance hooks',
      'Developing  websites.',
    ],
  },
  {
    title: 'Web ',
    company_name: 'Node.js',
    icon: nodejs,
    iconBg: '#383E56',
    date: 'April 2024  - March 2025',
    points: [
      'Developing and maintaining backend applications using Node.js to build scalable server-side logic.',
      'Designing and integrating RESTful APIs to support dynamic frontend applications.',
      'Working with databases (SQL and NoSQL) and managing queries, migrations, and performance optimization.',
      'Implementing authentication, authorization, and security best practices in Node.js applications.',
      'Optimizing backend performance with asynchronous programming and event-driven architecture.',
    ],
  },
  {
    title: 'Next.js ',
    company_name: 'Node.js',
    icon: nextjs,
    iconBg: '#383E56',
    date: 'April 2024  - August 2025',
    points: [
      'Building modern web applications with Next.js using server-side rendering (SSR) and static site generation (SSG).',
      'Developing full-stack features with API routes in Next.js to connect frontend and backend seamlessly.',
      'Implementing responsive, SEO-friendly, and high-performance UIs with React and Next.js.',
      'Integrating external APIs, services, and databases in Next.js projects.',
      'Deploying and optimizing applications on platforms like Vercel for scalability and performance.',
    ],
  },
  {
    title: 'Nest.js ',
    company_name: 'August 2025 - September 2025',
    icon: nestjs,
    iconBg: '#E6DEDD',
    date: 'April 2024  - March 2025',
    points: [
      'Building structured, modular, and scalable backend applications using NestJS framework.',
      'Designing and implementing RESTful and GraphQL APIs with NestJS.',
      'Integrating TypeORM/Prisma with relational and non-relational databases for data persistence.',
      'Applying dependency injection, pipes, guards, and interceptors to ensure clean architecture.',
      'Writing unit and integration tests in NestJS to ensure reliability and maintainability.',
      'Deploying NestJS services to cloud platforms (Heroku, AWS, etc.) with CI/CD pipelines.',
    ],
  },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Next Movie Project',
    description:
      'A web application that allows users to view(from movie.db api) movies that are in cinemas or premieres. In this application, you can filter and sort movies, view detailed information about each movie.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
      {
        name: 'typescript',
        color: ' green-blue-text-gradient',
      },
      {
        name: 'git',
        color: 'pink-purple-text-gradient',
      },
    ],
    image: nextExam,
    source_code_link: 'https://next-exam-flame.vercel.app',
  },
  {
    name: 'React Pizza App',
    description:
      'A web application that allows users to to view(from api) buy pizza(only front). In this application, you can filter and sort pizzas, add them to the cart and the data will be saved',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
      {
        name: 'typescript',
        color: ' green-blue-text-gradient',
      },
      {
        name: 'git',
        color: 'pink-purple-text-gradient',
      },
    ],
    image: pizzaapp,
    source_code_link: 'https://vasyl16.github.io/ReactPizzaApp/',
  },
  {
    name: 'React Jedi App',
    description:
      'A web application that allows the user to view(from api) information about a lot of Star Wars characters by searching or viewing all, you can also choose a theme and add your favorite characters to the save cart.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
      {
        name: 'typescript',
        color: ' green-blue-text-gradient',
      },
      {
        name: 'git',
        color: 'pink-purple-text-gradient',
      },
    ],
    image: jediapp,
    source_code_link: 'https://vasyl16.github.io/ReactApp/',
  },
  {
    name: 'React Clothes App',
    description:
      'Other interesting works written in vanilla js language such as landing page, card website ... ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
      {
        name: 'typescript',
        color: ' green-blue-text-gradient',
      },
      {
        name: 'git',
        color: 'pink-purple-text-gradient',
      },
    ],
    image: clotheapp,
    source_code_link: 'https://vasyl16.github.io/ReactCartApp/',
  },
  {
    name: 'Vanila JS Apps',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: vanilaworkapp,
    source_code_link: 'https://vasyl16.github.io/Allmywork/',
  },
];

const my_github_link = 'https://github.com/Vasyl16';

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  my_github_link,
};
