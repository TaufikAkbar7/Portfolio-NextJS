import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

const hero = {
    title: "Hi. I'm Taufik Akbar",
    desc: "I'm a Frontend Developer based in Jakarta, Indonesia. Specializing in building exceptional websites, applications, and everything in between."
}


const project = {
    title: "Feature Projects",
    subtitle: "Some projects that i'm proud of",
    projects: [
        {
            project_name: "Synap blog",
            project_title: "Synap blog is a simple website blog using open API gorest",
            stacks: [
                "Next JS",
                "Tailwind",
                "Typescript",
                "SWR",
                "Zustand",
                "Yup"
            ],
            linkWebsite: "https://synap-blog.vercel.app/",
            linkGithub: "https://github.com/TaufikAkbar7/synap-blog"
        },
        {
            project_name: "Cart Steel",
            project_title: "Cart Steel is a simple E-commerce with feature homepage, add product to cart and checkout",
            stacks: [
                "Vue JS",
                "Tailwind",
                "Vite",
                "Typescript",
                "Pinia"
            ],
            linkWebsite: "https://cart-steel-sigma.vercel.app/",
            linkGithub: "https://github.com/TaufikAkbar7/cart-steel"
        },
        {
            project_name: "Coding Nicely",
            project_title: "Coding Nicely is website landing page for startup based on course digital",
            stacks: [
                "Next JS",
                "Tailwind",
                "CSS",
                "Javascript"
            ],
            linkWebsite: "https://coding-nicely.vercel.app/",
            linkGithub: "https://github.com/TaufikAkbar7/Coding-nicely"
        },
        {
            project_name: "Job Apps",
            project_title: "First time project using React Native, just slicing design to code",
            stacks: [
                "React Native",
                "Javascript"
            ],
            linkGithub: 'https://github.com/TaufikAkbar7/JobApps'
        },
        {
            project_name: "Webfood App",
            project_title: "Simple Website for searching recipe food using Vue JS",
            stacks: [
                "Vue JS",
                "Vuex",
                "Vue-Bootstrap",
                "SCSS"
            ],
            linkWebsite: "https://webfood.vercel.app/",
            linkGithub: "https://github.com/TaufikAkbar7/JobApps",
        }
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
        }
    ],
}

export { hero, project, contact }