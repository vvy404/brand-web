const btnsConf = [
    {
        key: "1",
        text: "women's dresss"
    },
    {
        key: "2",
        text: "women's dresss"
    },
    {
        key: "3",
        text: "women's dresss"
    },
    {
        key: "4",
        text: "women's dresss"
    },
    {
        key: "5",
        text: "women's dresss"
    },
    {
        key: "6",
        text: "women's dresss"
    },
    {
        key: "7",
        text: "women's dresss"
    },
]
export default function SelectorBtns() {
    return (
        <div>
            <div className="flex px-52 items-center justify-center flex-wrap">
                {
                    btnsConf.map(btn => {
                        return (
                            <button key={btn.key} className="flex-initial border border-solid border-[#1b1b1b] color-[#1b1b1b] h-9 px-6 mx-2 my-2">{btn.text}</button>
                        )
                    })
                }

            </div>
            <div className="h-1 mt-20 mx-8 pb-2 border-t border-solid border-gray-200"></div>
        </div>
    )
}