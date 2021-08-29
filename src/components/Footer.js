import React from "react";


class Footer extends React.Component {

    render() {
        return <div>
            <hr className="border border-gray-300 mb-2"/>
            <footer className="text-center text-md m-5 text-gray-900">
                @2021 Sva prava zadržana <span className="font-bold"> Zemlja Snova</span>
                <div className="flex justify-center items-center">
                    <a href="https://www.instagram.com/zemljasnova/">
                        <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
        }
}

export default Footer;
