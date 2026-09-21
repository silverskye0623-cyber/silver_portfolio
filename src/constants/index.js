import {
  frontend,
  backend,
  ux,
  prototyping,
  pineapple,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  python,
  php,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'journey',
    title: 'Journey'
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'AI/ML Development',
    icon: pineapple,
  },
  {
    title: 'Web Development',
    icon: frontend,
  },
  {
    title: 'Frontend Development',
    icon: backend,
  },
  {
    title: 'Backend Development',
    icon: ux,
  },
  {
    title: 'Mobile Development',
    icon: prototyping,
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
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'ASP',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'AI/ML Development',
    company_name: 'We build AI and machine learning solutions using Python, from predictive models and natural language processing to intelligent workflow automation. We integrate these capabilities into web and mobile applications to turn data into practical tools.',
    icon: python,
    iconBg: '#333333',
    date: '',
  },
  {
    title: 'Web Application Development',
    company_name: 'Our main focus is custom web application development using ASP.NET, C#, and JavaScript. We also build RESTful API web services and desktop applications.',
    icon: coverhunt,
    iconBg: '#333333',
    date: '',
  },
  {
    title: 'Sitecore CMS Development',
    company_name: "As a Sitecore Silver Partner we provide responsive web solutions utilizing Sitecore's CMS, eCommerce and digital experience platform.",
    icon: microverse,
    iconBg: '#333333',
    date: '',
  },
  {
    title: 'Mobile App Development',
    company_name: 'Deliver native iOS, Android, Mac, and Windows apps using one development team. As a Premier Consulting Partner we build, test, and monitor mobile apps using Microsoft Xamarin.',
    icon: kelhel,
    iconBg: '#333333',
    date: '',
  },
  {
    title: 'Backend Development',
    company_name: 'We are also well-versed in backend technologies. Building robust backend systems is critical to ensuring that mobile applications can handle data storage, user authentication, and other server-side functionalities.',
    icon: coverhunt,
    iconBg: '#333333',
    date: '',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
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
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
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
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
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
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
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
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
