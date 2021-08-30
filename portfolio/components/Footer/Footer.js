const Footer = () => {
    return (
        <div className="border-t-2 border-gray-700 flex flex-col justify-center items-center py-5">
            <span className="text-gray-400">Created by
                <a href="https://github.com/TaufikAkbar7" target="_blank" rel="noreferrer" className="text-gray-200 border-b-2 border-black hover:border-gray-200 ml-2">Taufik Akbar</a>
            </span>
            <span className="text-gray-400">Powered by
                <a href="https://reactjs.org" target="_blank" rel="noreferrer" className="text-gray-200 border-b-2 border-black hover:border-gray-200 ml-2">React js,</a>
                <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="text-gray-200 ml-1 border-b-2 border-black hover:border-gray-200">Next js,</a>
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-gray-200 ml-1 border-b-2 border-black hover:border-gray-200">Tailwindcss</a>
            </span>
        </div>
    )
}

export default Footer;