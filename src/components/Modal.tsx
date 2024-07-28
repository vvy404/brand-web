// import { ReactDOM } from "react";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Popup from "./public/Popup";

type ToastModalInterface = {
  children: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
  selector?: string;
};

const setPopMaskClose = () => {
  console.log('setPopMaskClose');
}

const ToastModal = ({ children, selector="__app-modal", show=true }: ToastModalInterface) => {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);
  return (
    <Popup
      isShowClose={false}
      isShow={show} 
      isAutoClose={true}
      setPopMaskClose={setPopMaskClose} 
      width={32}
      >
    <div>
      <div className="p-10">
        {children}

      </div>
      {
        show && ref.current ? createPortal(children, ref.current) : null
      }
    </div>
    </Popup>
  )
};



export default ToastModal;