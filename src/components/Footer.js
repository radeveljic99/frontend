import React from "react";


class Footer extends React.Component {

    render() {
        return <span>
            <hr className="border border-gray-400 mb-2"/>
            <footer className="text-center text-md m-2 text-gray-900"
                    style={{
                        position: 'relative',
                        bottom: '0',
                    }}>
                @2021 Sva prava zadržana <span className="font-bold"> Zemlja Snova</span>
                <span className="flex justify-center items-center">
                    <a href="https://www.instagram.com/zemljasnova/">
                        <svg className=" mx-1 h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor"
                             strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/zemljasnova">
                        <svg className="mx-1 h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path fill="#6563ff" d="M13.3552,
                            21.9999v-9.123h3.06223l.45847-3.55537H13.3552v-2.27c0-1.02934.28587-1.73089,1.76209-1.73089L17,
                            5.31981V2.13994A25.23316,25.23316,0,0,0,14.25657,2C11.54212,2,9.68374,3.65682,9.68374,6.69964v2.622H6.61359V12.877H9.68365V22l3.67155-.0001Z"
                                  data-name="Brand Logos"/></svg>
                    </a>
                </span>
            </footer>
        </span>
    }
}

export default Footer;
