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
                <div className={`w-32rem mask-content bg-gray-50 absolute top-[20%] left-[50%] translate-x-[-50%]`} style={{width: props.width + 'rem'}}>
                    {props.children}
                    <div className="text-xl absolute right-4 top-1 scale-x-125">X</div>
                </div>
            </div>
        ) : ""
    }
    return (
        renderContent()
    )
}