"use client"

import { useState, useEffect } from "react"
import {useRouter, usePathname, useSearchParams} from 'next/navigation'

import LoginComp from "@/components/login/LoginComp";
import SearchContent from "@/components/public/SearchContent"
import Filter from "@/components/public/Filter"
import ProductList from "@/components/public/ProductList"
import { getProductListData } from "@/apis/getProductList"
import { getCurrentUserInfo } from "@/apis/auth/getCurrentUserInto";
import { ProductInfoType } from "@/lib/globalts"
import createFavList from "@/apis/createFavList";
import deleteFavList from "@/apis/deleteFavList";

const Products: React.FC = () => {
  const [productlist, setProductList] = useState<ProductInfoType[]>([]);
  const [ currentPageIndex, setCurrentPageIndex ] = useState<number>(0);
  const [ pageTotal, setPageTotal ] = useState<number>(1);
  const [isShowSignIn, setIsShowSignIn] = useState<boolean>(false);
  const [isUserSignIn, setUserSignIn] = useState<boolean>(false);
  const [userid, setUserId] = useState<number>(0);

  const router = useRouter();

  const PAGENUM = 2;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams?.get('type') || "1";
  console.log('pathnamepathname', pathname, searchParams?.get('type'));

  const getProductList = async (pageindex: number) => {
    console.log('currentPageIndex',currentPageIndex)
    const res = await getProductListData({ type, currentPageIndex: pageindex, pageNum: PAGENUM });
    if (res && !res.code && res.data) {
      const { list, currentPageIndex, pageTotal } = res.data;
      setProductList(list);
      setCurrentPageIndex(currentPageIndex);
      console.log('pageTotal', pageTotal)
      setPageTotal(pageTotal);
    } else {
      window.alert('worng')
    }
  }

  const handlePageIndexChange = (index: number) => {
    console.log('handlePageIndexChange', index);
    setCurrentPageIndex(index);
    setTimeout(() => {
      getProductList(index);

    })
  }

  const handleLikeClick = async (item : ProductInfoType, idx: number) => {
    console.log('like id:', item);
    if (!isUserSignIn) {
      setIsShowSignIn(true);
      window.scrollTo(0, 0);
    } else {
      console.log('user has login');
      const {id, imgSrc, title, price} = item;
      const params = {
        productid: id,
        imgSrc,
        title,
        price,
        userid,
      }
      if (!item.isLiked) {
        const res = await createFavList(JSON.stringify(params));
        if (res && !res.code && res.data) {
          const productlistCopy = [...productlist];
          productlistCopy[idx].isLiked = true;
          setProductList(productlistCopy);
        }
      } else {
        const res = await deleteFavList(String(id));
        if(res && !res.code && res.data) {
          const productlistCopy = [...productlist];
          productlistCopy[idx].isLiked = false;
          setProductList(productlistCopy);
        }
      }
      
    }
  }

  const handleShowPop = () => {
    setIsShowSignIn(false);
  }
  const handleUserStatusChange = () => {
    setUserSignIn(true);
    router.push('/main');
  }

  const checkUserLogin = async () => {
    const res = await getCurrentUserInfo();
    if (res && !res.code ) {
      setUserSignIn(true);
      setUserId(res.data?.userid || 0)
    } else {
      setUserSignIn(false);
    }
  }

  const handleClickImage = (id: number) => {
    router.push(`/detail?productid=${id}`);
  }


  useEffect(() => {
    getProductList(currentPageIndex);
    checkUserLogin();
  }, [type])
  return (
    <div className="mt-28 mx-10 ">
      <SearchContent></SearchContent>
      <Filter></Filter>
      <ProductList
        list={productlist}
        type={type}
        pageTotal={pageTotal}
        currentPageIndex={currentPageIndex}
        handlePageIndexChange={handlePageIndexChange}
        handleLikeClick={handleLikeClick}
        handleClickImage={handleClickImage}
      ></ProductList>
      <div id="__next">
          <LoginComp
            showSignUp={false}
            showSignIn={isShowSignIn}
            setMaskClose={handleShowPop}
            setUserStatus={handleUserStatusChange}
          ></LoginComp>
        </div>
    </div>
  )
}

export default Products;