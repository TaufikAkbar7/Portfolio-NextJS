import React, { useEffect, useState, Fragment } from 'react';
import { project } from "../../content/data";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '../../components/atoms';
import { Footer } from '../../components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Detail = () => {
    const router = useRouter()
    const { id } = router.query
    // const data = [];
    const [data, setData] = useState([]);

    useEffect(() => {
        project.projects.filter(value => {
            if (data.length == 0) {
                if (value.id == id) {
                    return setData({ ...value })
                } else {
                    return null
                }
            } else {
                return data
            }
        })
        console.log(data)
    }, [id, data])

    return (
        <Fragment>
            {data.length == 0 ? (
                <p>error</p>
            ) : (
                <div className="min-h-screen text-white">
                    <div className="container mx-auto flex flex-col py-20 justify-start items-center">
                        <Link href="/" passHref>
                            <Nav />
                        </Link>
                        <h1 className="text-4xl font-bold mt-10">{data.project_name}</h1>
                        <div className="flex flex-wrap justify-center mt-5">
                            {data.stacks.map((item, i) => (
                                <div key={i} className="bg-gray-300 ml-3 rounded-xl py-1 px-2 cursor-default mt-5 sm:mt-5">
                                    <span className="mt-2 m-1 text-black text-sm">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="w-2/3 mt-5">
                            <Carousel showStatus={false} showThumbs={false} showIndicators={false} autoPlay={true} infiniteLoop={true}>
                                {data.image.map((img, i) => (
                                    <div key={i}>
                                        <Image className="object-cover" src={img.default.src} alt="carousel-img" width="450" height="250" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="w-2/3 flex flex-col mt-5 p-5">
                            <div>
                                <h3 className="text-xl font-bold">Background</h3>
                                <p>{data.project_desc}</p>
                            </div>
                            <div>
                                <h3 className="text-xl mt-5 font-bold">Features</h3>
                                <ul className="list-inside ml-5" style={{ listStyle: 'inherit' }}>
                                    {data.features.map((fitur, i) => <li key={i}>{fitur}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl mt-5 font-bold">Links</h3>
                                <div className="w-52">
                                    {data.links.map(item => (
                                        <a className="flex flex-row rounded-md items-center mt-3 py-3 px-2 bg-gray-700 hover:bg-gray-400" href={item.link} key={item.name} target="_blank" rel="noreferrer">
                                            <span className="text-2xl">{item.tag}</span>
                                            <p className="ml-3">{item.name}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </Fragment>
    )
}

export default Detail;