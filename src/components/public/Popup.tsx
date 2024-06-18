import './Popup.css';

type popupProps = {
    isShow: boolean,
    width: number,
    children: React.ReactNode,
}

type popupState = {
    mode: string
}


export default function Popup(props: popupProps, state: popupState) {
    const renderContent = () => {
        return props.isShow ? (
            <div className="mask">
                <div className="mask-bg bg-gray-100 fixed left-0 top-0 right-0 bottom-0 opacity-90"></div>
                <div className={`w-32rem mask-content bg-gray-50 absolute top-[20%] left-[50%] translate-x-[-50%]`} style={{ width: props.width + 'rem' }}>
                    {props.children}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 absolute right-4 top-4 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                    {/* <div className="text-xl absolute right-4 top-1 scale-x-125">X</div> */}
                </div>
            </div>
        ) : ""
    }
    return (
        renderContent()
    )
}