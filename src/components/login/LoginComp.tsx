"use client";
import { useState, useEffect } from 'react';
import Popup from '../public/Popup';
import './LoginComp.css';

export default function LoginComp() {
    const [closeBtnState, setCloseBtn] = useState(false);
    const handleCloseMask = () => {
        setCloseBtn(true);
    }
    const renderSignUp = () => {
        return (
            // <div className={`${closeBtnState ? "" : "set-bg-indigo-50-on-body "}login-comp`}>
            <div className={`${true ? "" : "set-bg-indigo-50-on-body "}login-comp`}>
                <Popup isShow={true} width={32}>
                    <div className='px-6 pt-12 pb-6'>
                        <div className='text-[22px]'>SIGN UP AND RECEIVE 10% OFF YOUR FIRST ORDER</div>
                        <div className="text-sm mt-3 mb-[30px]">Find out first about new collections, events and promotions.</div>
                        <div className="flex flex-row justify-between">
                            <div className='flex flex-col w-[49%] mb-[30px]'>
                                <div>First name*</div>
                                <input placeholder="" className='border bg-[#e3e3e3] color-[#545454] text-[13px] h-[35px]'></input>
                            </div>
                            <div className='flex flex-col w-[49%] mb-[30px]'>
                                <div>Email address*</div>
                                <input placeholder="" className='border bg-[#e3e3e3] color-[#545454] text-[13px] h-[35px]'></input>
                            </div>
                        </div>
                        <div className="text-base">Which collection are you interested in?*</div>
                        <div className='flex items-center mb-[30px]'>
                            <input type="radio" value="women" className='mr-2' />Women*
                            <input type="radio" value="men" className='ml-6 mr-2' />Men*
                        </div>

                        <div className='mb-[30px]'>Select country*</div>
                        <div className="flex items-start mb-[30px]">
                            <input type="checkbox" className='mt-[2px] mr-1'></input>
                            <div className='text-[10px]'>I  would like to receive personalised promotions from COS, a brand of the H&M Group, via email and SMS. I can withdraw this consent at any time. I confirm that I'm 16 years old or older. I acknowledge that my personal data will be processed by H&M Group in accordance with the privacy notice</div>
                        </div>
                        <button className="bg-black text-white w-full h-[60px]">SIGN UP</button>
                    </div>
                </Popup>
            </div>
        )
    }
    const renderSignIn = () => {
        return (
            // <div className={`${closeBtnState ? "" : "set-bg-indigo-50-on-body "}login-comp`}>
            <div className={`${true ? "" : "set-bg-indigo-50-on-body "}login-comp`}>
                <Popup isShow={false} width={20}>
                    <div className='px-6 py-10'>
                        <div className='flex justify-between'>
                            <div className='text-xs'>Sign in</div>
                            <div className='text-xs text-[#767676] max-lg:text-red-900'>New customer</div>
                        </div>
                        <div className="h-1 mt-[4px] mb-4 pb-2 border-t border-solid border-gray-200"></div>
                        <div className='text-xs'>Email</div>
                        <input className='w-full bg-[#e7e7e7] h-[30px] mb-2' />
                        <div className='text-xs'>Enter password</div>
                        <input type="password" className='w-full bg-[#e7e7e7] mb-10 h-[30px]' />
                        <div className='flex mb-4'>
                            <input type="checkbox" value="isStaysignin" className='mr-2' />
                            <div className='text-xs'>Stay signed in</div>
                        </div>
                        <button className="bg-black text-white w-full h-[44px] text-xs mb-4">SIGN IN</button>
                        <div className='text-xs text-[#767676] text-center hover:text-red-900'>Can't remember your password?</div>
                    </div>
                </Popup>
            </div>
        )
    }

    return (
        renderSignIn()
    )
}