const footerConf = [
    [
        {
            id: 'help',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '2',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '3',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '4',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
    ],
    [
        {
            id: '5',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '6',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '7',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '8',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
    ],
    [
        {
            id: '9',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '10',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '11',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
        {
            id: '12',
            text: 'HELP',
            link: 'https://www.cos.com/en_sek/customer-service.html'
        },
    ],
]

export default function Footer() {
    return (
        <div className="relative">
            <div className="h-1 mt-32 pb-2 border-t border-solid border-gray-200"></div>

            <div className="flex mt-7 ml-[30px] mb-24">
                {
                    footerConf.map((list, id) => {
                        return (
                            <div key={id} className="list-colum  flex-col flex mr-24 py-3">
                                {list.map(i => {
                                    return (
                                        <div className="bg-red text-[#1b1b1b] font-normal text-xs py-1" key={i.id}>{i.text}</div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
            <button className="absolute right-[60px] top-14 w-40 h-10 bg-black text-white text-[14px]">subscribe</button>
        </div>
    )
}