import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FiDownload } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";


const hero = {
    title: "Hi. I'm Taufik Akbar",
    desc: "Student at University Muhammadiyah Prof. Dr. Hamka. I love coding and i aspire to become a Front End Developer"
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
                    tag: <BiLinkExternal className="mr-2 cursor-pointer hover:text-gray-400"/>
                },
                {
                    name: "Source",
                    link: "https://github.com/TaufikAkbar7/Coding-nicely",
                    tag: <FaGithub className="cursor-pointer hover:text-gray-400"/>
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
            tag: <FaGithub className="text-xl mr-3 md:text-3xl" />,
            link: "https://github.com/TaufikAkbar7",
        },
        {
            name: "LinkedIn",
            tag: <FaLinkedin className="text-xl mr-3 md:text-3xl" />,
            link: "https://www.linkedin.com/in/taufik-akbar-5842771a2",
        },
        {
            name: "Instagram",
            tag: <FiInstagram className="text-xl mr-3 md:text-3xl" />,
            link: "https://www.instagram.com/pikk_7/",
        },
        {
            name: "Gmail",
            tag: <SiGmail className="text-xl mr-3 md:text-3xl" />,
            link: "mailto:akbar.taufik062@gmail.com",
        },
        // {
        //     name: "Resume",
        //     tag: <FiDownload className="text-xl mr-3 md:text-3xl" />,
        //     link: "./TaufikAkbar-CV.pdf",
        // },
    ],
    no_telp: "+62 812-1326-0537",
    address: "Jakarta Timur, DKI Jakarta / Indonesia"
}

export { hero, project, contact }