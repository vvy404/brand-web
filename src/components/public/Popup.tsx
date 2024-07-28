import React from 'react';
import './Popup.css';
import { useState, useEffect } from 'react';

type popupProps = {
  isShow: boolean,
  width: number,
  children: React.ReactNode,
  isShowClose?: boolean,
  isAutoClose?: boolean,
  setPopMaskClose?: () => void
}

type popupState = {
  mode: string
}

const Popup : React.FC<popupProps> = ({
  isShow,
  width,
  children,
  isShowClose = true,
  isAutoClose = false,
  setPopMaskClose,
}, state: popupState) => {
  const [ isClickClose , setClose ] = useState<boolean>(false);

  const handleClick = () => {
    console.log('close');
    setClose(true);
    setPopMaskClose && setPopMaskClose();
    // props.isShow = false;
  }

  useEffect(() => {
    setTimeout(() => {
      if (isAutoClose) {
        setClose(true);
      }
    }, 3000)
  }, [isShowClose])

  const renderContent = () => {
    return isShow && !isClickClose ? (
      <div className="mask">
        <div className="mask-bg bg-gray-100 fixed left-0 top-0 right-0 bottom-0 opacity-90 z-[99]"></div>
        <div className={`w-32rem mask-content bg-gray-50 absolute top-[20%] left-[50%] translate-x-[-50%] z-[100]`} style={{ width: width + 'rem' }}>
          {children}
          {isShowClose && (<div onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 absolute right-4 top-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>)}
          {/* <div className="text-xl absolute right-4 top-1 scale-x-125">X</div> */}
        </div>
      </div>
    ) : ""
  }
  return (
    renderContent()
  )
}
export default Popup;