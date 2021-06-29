import pic from "../public/assets/pic.jpg";
import react from "../public/assets/react.png";
import mongo from "../public/assets/mongo.png";
import node from "../public/assets/node.png";
import express from "../public/assets/express.png";
import redux from "../public/assets/redux.png";
import bootstrap from "../public/assets/bootstrap.png";

const header = [
    {
        name: "Experience",
        link: "experience"
    },
    {
        name: "Projects",
        link: "projects"
    },
    {
        name: "Technologies",
        link: "tech"
    },
    {
        name: "Contact",
        link: "contact"
    },
]

const hero = {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
}

const experience = {
    title: "Experience",
    experiences: [
        {
            company_name: "Lorem",
            job: "Lorem",
            awal_masuk: "July 2020",
            akhir: "Present",
            skills: "Lorem ipsum dolor sit amet",
            job_desc: [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet"    
            ]
        },
        {
            company_name: "Lorem",
            job: "Lorem",
            awal_masuk: "July 2020",
            akhir: "Present",
            skills: "Lorem ipsum dolor sit amet",
            job_desc: [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet"    
            ]
        }
    ]
}

const project = {
    title: "Projects",
    projects: [
        {
            img: pic,
            project_name: "Lorem",
            project_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            stacks: [
                "React JS",
                "Node JS",
                "Express",
                "Mongodb"
            ],
            links: [
                {
                    name: "Code",
                    link: "https://google.com"
                },
                {   
                    name: "Source",
                    link: "https://github.com/TaufikAkbar7"
                }
            ]
        },
        {
            img: pic,
            project_name: "Lorem",
            project_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            stacks: [
                "React JS",
                "Node JS",
                "Express",
                "Mongodb"
            ],
            links: [
                {
                    name: "Code",
                    link: "https://google.com"
                },
                {   
                    name: "Source",
                    link: "https://github.com/TaufikAkbar7"
                }
            ]
        }
    ]
}

const tech = {
    title: "Technologies",
    img_tech: [react, mongo, express, redux, bootstrap, node], 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"
}

const contact = {
    title: "Contact Me",
    socials: {
        github: "https://github.com/TaufikAkbar7",
        linked_in: "https://google.com",
        instagram: "https://google.com",
        gmail: "https://google.com"
    },
    no_telp: "+62 812-1326-0537",
    address: "Jakarta Timur, DKI Jakarta / Indonesia"
}

export { header, hero, experience, project, contact, tech }