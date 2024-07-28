"use client";

import { useState, useEffect, ReactEventHandler } from "react";
import Link from 'next/link'
import { getCategoryList } from '@/apis/getCategory';
import { getCartListData } from "@/apis/getCartList";
import { MainProductType, MidProductType, ProductFullCatogoryType } from '@/lib/globalts';
import logoutUser from "@/apis/auth/logout";
import './header.css';
import { useRouter } from 'next/navigation'
import SearchComp from "../main/Search";

interface HeaderProps {
  showUser: boolean;
  onClickSignIn: (param: boolean) => void;
  onClickSignUp: (param: boolean) => void;
  setUserStatus: () => void;
}

const Header: React.FC<HeaderProps> = ({
  showUser,
  onClickSignIn, 
  onClickSignUp,
  setUserStatus,
}) => {
  // const { pathname, events} = useRouter();
  const router = useRouter();
  const [isContentVisible, setContentVisible] = useState(false);
  const [categorylist, setCategoryList] = useState<ProductFullCatogoryType[]>([]);
  const [ cartdata, setCartData ] = useState<number>(0)
  const [ isShowSearchInput, setShowSearchInput ] = useState<boolean>(false);

  const handleMouseOver = (event: React.MouseEvent) => {
    // console.log(event.currentTarget);
    setContentVisible(true);
  }
  const handleMouseLeave = () => {
    setContentVisible(false);
  }

  const getCartData = async () => {
    if (showUser) {
      const res = await getCartListData();
      let num = 0;
      if (res && !res.code && res.data) {
        res.data.list.forEach( i => {
          num += i.quantity;
        })
        setCartData(num);
      }
    }
  }

  const getCategoryData = async () => {
    const res = await getCategoryList();
    if (res && !res.code && res.data) {
      setCategoryList(res.data.list);
    }
  }

  const handleBitTypeItemClick = (id: number) => {
    // router.push(`/products?bigtype=${id}`);
    window.location.href = `/products?bigtype=${id}`;
  }

  const handleSignInClick = () => {
    console.log('sign in clicked');
    onClickSignIn(true)
  }

  const handleSignUpClick = () => {
    console.log('sign in clicked');
    onClickSignUp(true)
  }

  const handleLogOutClick = async () => {
    console.log('log out click');
    const res = await logoutUser();
    console.log('res res res', res);
    if (res && !res.code) {
      // router.push('/main');
      window.location.href = '/main';
    }
  }
  const handleClickSearchWrapper = () => {
    setShowSearchInput(false)
  }
  const handleCartIconClick = () => {
    router.push('/cart');
  }
  const handleSearchClick = () => {
    setShowSearchInput(!isShowSearchInput);
  }
  const handleSearch = (val: string) => {
    console.log('handleSearch', val);
    router.replace(`/products?keyword=${val}`);
  }
  useEffect(() => {
    getCategoryData();
  }, [])

  useEffect(() => {
    getCartData();
  }, [showUser])

  return (
    <div className="header-comp absolute top-0 left-0 w-full z-100 px-6">
      <div className="flex justify-between">
        <div className="flex h-16 items-center">
          {categorylist.map(li => {
            return (
              <div className="flex-initial w-24 text-center"
                key={li.id}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >{li.typename}</div>
            )
          })}
        </div>
        <div className="flex h-16 items-center text-xs w-[400px] justify-end space-x-4">
          <div className="flex items-center pl-3" onClick={handleSearchClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <div className="pl-1 cursor-pointer">SEARCH</div>
          </div>
          {showUser && (<Link href={{pathname: '/profile'}} className="cursor-pointer">MY ACCOUNT</Link>)}
          {!showUser && (<div className="cursor-pointer" onClick={handleSignInClick}>SIGN IN</div>)}
          {!showUser && (<div className="cursor-pointer" onClick={handleSignUpClick}>SIGN UP</div>)}
          {showUser && (<div className="cursor-pointer" onClick={handleLogOutClick}>LOG OUT</div>)}
          {showUser && (<Link href={{pathname: '/favourites'}} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg></Link>)}
          {showUser && (<div className="flex items-center cursor-pointer" onClick={handleCartIconClick}>
            <div className="pr-1">({cartdata})</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>)}
          



        </div>
      </div>
      <div className={`${isContentVisible ? 'display-ani' : 'hide-ani'} w-full bg-white border-0 border-b border-black border-solid absolute left-0 top-16 z-999 flex text-sm`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {
          categorylist.map(cateitem => {
            return (
                <div key={cateitem.id} className="w-[280px] px-[44px] pb-8 border-r ">
                  <div className="text-gray-400 leading-8 flex flex-col">{cateitem.typename}</div>
                  <div className="text-gray-800 leading-8 flex flex-col cursor-pointer" onClick={()=> {handleBitTypeItemClick(cateitem.id)}}>{cateitem.typename} all</div>
                  {
                    cateitem.childtype.map(item => {
                      return (
                        <Link href={{pathname: '/products', query: {type: item.type}}} key={item.id} className="leading-6 block">{item.typename}</Link>
                        // <Link href={`http://localhost:3000/products?type=${item.type}`} key={item.id} className="leading-6 block" onClick={handleItemClick}>{item.typename}</Link>
                      )
                    })
                  }
                </div>
            )
          })
        }
      </div>
      <div>
      <SearchComp show={isShowSearchInput} handleClickSearchWrapper={handleClickSearchWrapper} handleSearch={handleSearch} />
      </div>
    </div>
  )
}

export default Header;