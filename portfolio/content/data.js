import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FiDownload } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { 
    codingNiceHome,
    shopmerceHome,
    shopmerceImage1,
    shopmerceImage2,
    shopmerceImage3,
    shopmerceImage4,
    shopmerceImage5,
    jobApps
} from '../public/assets/index';

const hero = {
    title: "Hi. I'm Taufik Akbar",
    desc: "An undergraduate student majoring in Informatics Engineering at University Muhammadiyah Prof. Dr. Hamka. I interested in Front End Developer.  University Muhammadiyah Prof. Dr. Hamka. I love coding and i aspire to become a Front End Developer"
}


const project = {
    title: "Projects",
    projects: [
        {
            id: 1,
            project_name: "Coding Nicely",
            project_title: "Coding Nicely is website landing page for startup based on course digital",
            project_desc: "In July 2021 I was created a website landing page by theme course. In this project i was practice for slicing design.",
            features: ["Server-side Rendering", "Image Optimization", "Caraousel", "Responsive Design"],
            image: [
                codingNiceHome, 
            ],
            stacks: [
                "Next JS",
                "Tailwind",
            ],
            links: [
                {
                    name: "Live website",
                    link: "https://coding-nicely.vercel.app/",
                    tag: <BiLinkExternal />
                },
                {
                    name: "Source code",
                    link: "https://github.com/TaufikAkbar7/Coding-nicely",
                    tag: <FaGithub />
                }
            ]
        },
        {
            id: 2,
            project_name: "Shopmerce",
            project_title: "Shopmerce is website E-commerce which has features such as product, payment gateway, basket product, etc",
            project_desc: "In March - Mei I was created website E-commerce using MERN (MongoDB, Express, React, Node) and for styling component iam using Framework Bootstrap. Shopmerce using REST API for communication between Back-end and Front-end, Shopmerce have two diffrent view: 1. View User, 2. View Admin in front-end view User iam using Redux and Redux Thunk for manage Shopmerce in single place and keep changes more predictable and traceable. Every E-commerce website must have payment gateway, Shopmerce have payment gateway using Midtrans. Why i choose Midtrans for payment gateway? because in Midtrans have a lot type of payment. In front-end view Admin iam using template Admin CoreUI and also using Redux, Redux Thunk too. For view Admin, focus on Create, Read, Update, Delete Product and User account.",
            features: ["Dynamic Data", "Sign in and Sign Up", "CRUD Product", "Login with JWT", "Payment gateway", "Search Product", "Filtering  Product", "Basket Product", "CRUD Users"],
            image: [
                shopmerceHome, 
                shopmerceImage1,
                shopmerceImage2,
                shopmerceImage3,
                shopmerceImage4,
                shopmerceImage5,
            ],
            stacks: [
                "React JS",
                "Bootstrap",
                "Redux",
                "Redux Thunk",
                "CoreUI",
                "Node JS",
                "MongoDB",
                "Express",
                "JsonWebToken"
            ],
            links: [
                // {
                //     name: "Code",
                //     link: "https://coding-nicely.vercel.app/",
                //     tag: <BiLinkExternal />
                // },
                {
                    name: "Source code for Front-end",
                    link: "https://github.com/TaufikAkbar7/Shopmerce-frontend",
                    tag: <FaGithub />
                },
                {
                    name: "Source code for Back-end",
                    link: "https://github.com/TaufikAkbar7/Shopmerce-backend",
                    tag: <FaGithub />
                }
            ]
        },
        {
            id: 3,
            project_name: "Job Apps",
            project_title: "Job Apps is first time mobile apps for me",
            project_desc: "In August 2021 I was created a mobile app with name Job Apps. Job Apps is my first project in mobile app. I learn how to slicing design with mobile app using React Native.",
            features: ["Search Job", "Archive Job", "Onboarding Screen"],
            image: [
                jobApps
            ],
            stacks: [
                "React Native",
            ],
            links: [
                // {
                //     name: "Code",
                //     link: "https://coding-nicely.vercel.app/",
                //     tag: <BiLinkExternal />
                // },
                {
                    name: "Source code",
                    link: "https://github.com/TaufikAkbar7/JobApps",
                    tag: <FaGithub />
                }
            ]
        },
    ]
}

const contact = {
    title: "Contact Me",
    socials: [
        {
            name: "Github",
            tag: <FaGithub />,
            link: "https://github.com/TaufikAkbar7",
        },
        {
            name: "LinkedIn",
            tag: <FaLinkedin />,
            link: "https://www.linkedin.com/in/taufik-akbar-5842771a2",
        },
        {
            name: "Instagram",
            tag: <FiInstagram />,
            link: "https://www.instagram.com/pikk_7/",
        },
        {
            name: "Gmail",
            tag: <SiGmail />,
            link: "mailto:akbar.taufik062@gmail.com",
        },
        // {
        //     name: "Resume",
        //     tag: <FiDownload />,
        //     link: "./TaufikAkbar-CV.pdf",
        // },
    ],
    no_telp: "+62 812-1326-0537",
    address: "Jakarta Timur, DKI Jakarta / Indonesia"
}

export { hero, project, contact }