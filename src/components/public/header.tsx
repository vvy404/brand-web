"use client";

import { useState } from "react";

import './header.css';

const listDataConf = {
    "Women": {
        "summer": "summer",
        "winter": "winter"
    },
    "Men": {
        "summer": "summer",
        "winter": "winter"
    },
    "Kids": {
        "summer": "summer",
        "winter": "winter"
    }
}
export default function Header() {

    const [isContentVisible, setContentVisible] = useState(false);
    const handleMouseOver = (event: React.MouseEvent) => {
        // console.log(event.currentTarget);
        setContentVisible(true);
    }
    const handleMouseLeave = () => {
        setContentVisible(false);
    }

    return (
        <div className="header-comp absolute top-0 left-0 w-full z-100 px-6">
            <div className="flex justify-between">
                <div className="flex h-16 items-center">
                    {Object.keys(listDataConf).map((li, index) => {
                        return (
                            <div className="flex-initial w-24 text-center"
                                key={index}
                                onMouseOver={handleMouseOver}
                                onMouseLeave={handleMouseLeave}
                            >{li}</div>
                        )
                    })}
                </div>
                <div className="flex h-16 items-center text-xs w-[320px] justify-between">
                    <div className="flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <div className="pl-1">SEARCH</div>
                    </div>
                    <div>MY ACCOUNT</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <div className="flex items-center">
                        <div className="pr-1">(10)</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>



                </div>
            </div>
            <div className={`${isContentVisible ? 'display-ani' : 'hide-ani'} "w-full bg-white border-0 border-b border-black border-solid absolute left-0 top-16 z-999"`}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                This page provides an overview of the project structure of a Next.js application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.
                Click the file and folder names to learn more about each convention.
                This page provides an overview of the project structure of a Next.js application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.
                Click the file and folder names to learn more about each convention.
            </div>
        </div>
    )
}