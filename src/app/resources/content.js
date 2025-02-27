import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Kerollym",
  lastName: "Santos",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Graduanda em Engenharia Civil",
  avatar: "/images/avatar.jpg",
  location: "America/Recife", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português", "Inglês"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts

  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kerollym",
  },
  {
    name: "Email",
    icon: "email",
    link: "Kerollymgaby@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Estudante de Engenharia Civil</>,
  subline: (
    <>
    Sou Kerollym, estudante de Engenharia Civil na Universidade Federal Rural de Pernambuco (UFRPE), onde desenvolvo projetos estruturais e busco soluções inovadoras na construção civil.
    <br/>
    </>
  ),
};

const about = {
  label: "About",
  title: "Sobre mim",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
Olá, me chamo Kerollym, sou estudante de Engenharia Civil na Universidade Federal Rural de Pernambuco (UFRPE), com paixão por projetar e otimizar projetos estruturais. Meu Estudo foca em soluções inovadoras para a construção civil, sustentabilidade e na integração de tecnologia na engenharia.      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudos",
    institutions: [
      {
        name: "Universidade Federal Rural de Pernambuco",
        description: <>Engenharia Civil <br></br>2023 - 2027
        
        .</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Ravit",
        description: <>Capaz de criar modelos 3D detalhados de edifícios que incluem informações sobre o design, construção e operação da estrutura.</>,
        // optional: leave the array empty if you don't want to display images
        //images: [
         // {
          //  src: "/images/projects/project-01/planta.jpg",
           // alt: "Project image",
            //width: 16,
            //height: 9,
          },
          {
            title: "AutoCAD",
            description: <>Software de projeto assistido por computador (CAD) que permite criar e editar desenhos 2D e 3D.</>,
          }
        ],
      },
      
  //  ],
  //},
};

const blog = {
  label: "Blog",
  title: "Escrevendo um pouco sobre meus estudos...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Trabalhos",
  title: "Meus Projetos",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galeria",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/imagem1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/imagem2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/imagem3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/imagem4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
