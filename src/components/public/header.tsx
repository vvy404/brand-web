"use client";

import { useState } from "react";

import './header.css';

const listDataConf = {
    "women": {
        "summer": "summer",
        "winter": "winter"
    },
    "men": {
        "summer": "summer",
        "winter": "winter"
    },
    "kids": {
        "summer": "summer",
        "winter": "winter"
    }
}
export default function Header() {

    const [isContentVisible, setContentVisible] = useState(false);
    const handleMouseOver = (event: React.MouseEvent) => {
        console.log(event.currentTarget);
        setContentVisible(true);
    }
    const handleMouseLeave = () => {
        setContentVisible(false);
    }
    
    return (
        <div>
            <div className="flex">
                {Object.keys(listDataConf).map(li => {
                    return (
                        <div className="flex-initial w-24"
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave}
                        >{li}</div>
                    )
                })}
            </div>
            <div className={`${isContentVisible? 'display-ani': 'hide-ani'} "w-full bg-white border-0 border-b-2 border-black border-solid absolute left-0 top-4"`}
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