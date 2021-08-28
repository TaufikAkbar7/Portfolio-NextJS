import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FiDownload } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";


const hero = {
    title: "Hi. I'm Taufik Akbar",
    desc: "An undergraduate student majoring in Informatics Engineering at University Muhammadiyah Prof. Dr. Hamka. I interested in Front End Developer.  University Muhammadiyah Prof. Dr. Hamka. I love coding and i aspire to become a Front End Developer"
}


const project = {
    title: "Projects",
    projects: [
        {
            project_name: "Coding Nicely",
            project_desc: "Create company profile website using NextJS and Tailwind CSS",
            stacks: [
                "Next JS",
                "Tailwind",
            ],
            links: [
                {
                    name: "Code",
                    link: "https://coding-nicely.vercel.app/",
                    tag: <BiLinkExternal />
                },
                {
                    name: "Source",
                    link: "https://github.com/TaufikAkbar7/Coding-nicely",
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