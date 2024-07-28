"use client";
import { useState, useEffect } from 'react';

import { FormEvent } from 'react'
import Popup from '../public/Popup';
import './LoginComp.css';
import signUpUser from '@/apis/auth/signup';
import signInUser from '@/apis/auth/login';

interface LoginCompProps {
  showSignUp: boolean;
  showSignIn: boolean;
  setMaskClose: () => void;
  setUserStatus: () => void;
}

const LoginComp: React.FC<LoginCompProps> = ({
  showSignUp,
  showSignIn,
  setMaskClose,
  setUserStatus,
}) => {
  const [closeBtnState, setCloseBtn] = useState(false);
  const handleCloseMask = () => {
    setCloseBtn(true);
  }
  const handleRender = () => {
    if (showSignIn) {
      return renderSignIn();
    } else if (showSignUp) {
      return renderSignUp();
    }
  }
  const handleShowPop = () => {
    console.log('close');
    setMaskClose();
  }


  const handleSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get('email') || "";
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const password = formData.get('password');
    const p = JSON.stringify({ firstname, lastname, email, password });
    const res = await signUpUser(p);
    // todo
    if (res && !res.code && res.data) {
    
      const { token } = res.data;
      document.cookie = `token=${token}; path=/`
    }
    console.log("res, res", res);
    if (res && !res.code) {
      setMaskClose();
      setUserStatus();
    }
  }

  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');
    
    const p = JSON.stringify({ email, password });

    const res = await signInUser(p);
    const userid = res.data?.userid;
    const token = res.data?.token;

    console.log("res, res sign in", token, userid);

    if (res && !res.code) {
      setMaskClose();
      setUserStatus();
    }
  }


  const renderSignUp = () => {
    return (
      <div className={`${showSignUp ? "" : "set-bg-indigo-50-on-body "}login-comp`}>
        <Popup isShow={showSignUp} setPopMaskClose={handleShowPop} width={32}>
          <form onSubmit={handleSubmitSignUp}>
            <div className='px-6 pt-12 pb-6'>
              <div className='text-[22px]'>SIGN UP AND RECEIVE 10% OFF YOUR FIRST ORDER</div>
              <div className="text-sm mt-3 mb-[30px]">Find out first about new collections, events and promotions.</div>
              <div className="flex flex-row justify-between">
                <div className='flex flex-col w-[49%] mb-[30px]'>
                  <div>First name*</div>
                  <input placeholder="" name="firstname" required className='border bg-[#e3e3e3] color-[#545454] text-[13px] h-[35px]'></input>
                </div>
                <div className='flex flex-col w-[49%] mb-[30px]'>
                  <div>Last name*</div>
                  <input placeholder="" name="lastname" required className='border bg-[#e3e3e3] color-[#545454] text-[13px] h-[35px]'></input>
                </div>
              </div>
              <div className='flex flex-col w-full mb-[30px]'>
                <div>Email address*</div>
                <input type="email" name="email" placeholder="" required className='border bg-[#e3e3e3] color-[#545454] text-[13px] h-[35px]'></input>
              </div>
              <div className='flex flex-col w-full mb-[30px]'>
                <div>Password*</div>
                <input type="password" name="password" placeholder="" required className='border bg-[#e3e3e3] color-[#545454] text-[13px] h-[35px]'></input>
              </div>
              <div className='flex flex-col w-full mb-[30px]'>
                <div>Password Confirm*</div>
                <input type="password" name="password_confirm" placeholder="" required className='border bg-[#e3e3e3] color-[#545454] text-[13px] h-[35px]'></input>
              </div>
              {/* <div className="text-base">Which collection are you interested in?*</div>
              <div className='flex items-center mb-[30px]'>
                <input type="radio" value="women" className='mr-2' />Women*
                <input type="radio" value="men" className='ml-6 mr-2' />Men*
              </div> */}
              {/* 
              <div className='mb-[30px]'>Select country*</div>
              <div className="flex items-start mb-[30px]">
                <input type="checkbox" className='mt-[2px] mr-1'></input>
                <div className='text-[10px]'>I  would like to receive personalised promotions from COS, a brand of the H&M Group, via email and SMS. I can withdraw this consent at any time. I confirm that I'm 16 years old or older. I acknowledge that my personal data will be processed by H&M Group in accordance with the privacy notice</div>
              </div> */}
              <button className="bg-black text-white w-full h-[60px]" type="submit">SIGN UP</button>
            </div>
          </form>
        </Popup>
      </div>
    )
  }
  const renderSignIn = () => {
    return (
      <div className={`${showSignIn ? "" : "set-bg-indigo-50-on-body "}login-comp`}>
        <Popup isShow={showSignIn} setPopMaskClose={handleShowPop} width={20}>
          <form onSubmit={handleSubmitSignIn}>
            <div className='px-6 py-10'>
              <div className='flex justify-between'>
                <div className='text-xs'>Sign in</div>
                <div className='text-xs text-[#767676] max-lg:text-red-900'>New customer</div>
              </div>
              <div className="h-1 mt-[4px] mb-4 pb-2 border-t border-solid border-gray-200"></div>
              <div className='text-xs'>Email</div>
              <input type='email' name='email' required className='w-full bg-[#e7e7e7] h-[30px] mb-2' />
              <div className='text-xs'>Enter password</div>
              <input type="password" name='password' required className='w-full bg-[#e7e7e7] mb-10 h-[30px]' />
              <div className='flex mb-4'>
                <input type="checkbox" value="isStaysignin" className='mr-2' />
                <div className='text-xs'>Stay signed in</div>
              </div>
              <button className="bg-black text-white w-full h-[44px] text-xs mb-4">SIGN IN</button>
              <div className='text-xs text-[#767676] text-center hover:text-red-900'>Can't remember your password?</div>
            </div>
          </form>

        </Popup>
      </div>
    )
  }

  return (
    handleRender()
  )
}

export default LoginComp;