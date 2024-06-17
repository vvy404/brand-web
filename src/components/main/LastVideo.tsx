"use client";

import { useState, useEffect } from 'react'
import './LastVideo.css'

export default function LastVideo() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <div className="mb-10">
            <div className="text-center py-20 text-4xl text-gray-700">COS × TABATA SHIBORI</div>
            <div className='h-[48rem] overflow-hidden'>
                <video
                    className="absolute object-cover z-2 opacity-90 w-4/5 ml-[10%]"
                    src="/c.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                </video>
            </div>

            <div className="h-1 mt-20 mx-8 pb-2 border-t border-solid border-gray-200"></div>
        </div>
    )
}