const sizeRange = [1, 2, 3, 4, 5, 6];
import { ProductType, ProductColorType, ProductSizeType, ProductInfoType, CartItemType } from "@/lib/globalts"
import { useState, useEffect, useMemo } from "react";
import { getCurrentUserInfo } from "@/apis/auth/getCurrentUserInto";
import {addCart} from "@/apis/addCart";

type ProductInfoProps = {
  info: ProductInfoType | null,
  addToCartDone: () => void;
}

type SizeInfoType = Omit<CartItemType, "id">

export default function ProductInfos({
  info,
  addToCartDone,
}: ProductInfoProps) {
  
  // const defalutColorId = info?.color[0]?.id;
  const [color, setColor] = useState<string>("");
  const [currentColorID, setCurrentColorID] = useState<number>(0);
  const [sizePairs, setSizePairs] = useState<SizeInfoType[]>([]);
  const [colorTotal , setColorTotal] = useState<any>({});
  let userid=0;



  const handleAddToCart = async () => {
    console.log('add to cart', JSON.stringify(sizePairs));
    const res = await addCart(JSON.stringify(sizePairs));
    if ( res && !res.code) {
      addToCartDone();
    }
    console.log('add cart', res)
  }

  const handleSelectColorChange = (item: ProductColorType) => {
    console.log('===e====', item);
    setColor(item.color);
    setCurrentColorID(item.id);
  }

  const handleSizeBlur = (item: ProductSizeType, e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('item=', item)
    console.log('e=', e.target.value)
    const sizeOjb: SizeInfoType = {
      colorid: currentColorID,
      sizeid: item.id,
      quantity: Number(e.target.value),
      imgSrc: info?.imgSrc || "",
      title: info?.title || "",
      madeof: "",
      size: item.size,
      color: color,
      productid: info?.id || 0,
      price: info?.price || 0,
      userid,
    };
    let hasExist = false;
    let finalSizePairs: SizeInfoType[] = [];
    for(let i=0; i<sizePairs.length; i++) {
      const sz = sizePairs[i];
      let sobj = null;
      if(sz.colorid === sizeOjb.colorid && sz.sizeid === sizeOjb.sizeid) {
        sobj = {...sz, ...sizeOjb};
        
        hasExist= true;
      } else {
        sobj = {...sz}
      }
      finalSizePairs.push(sobj);
    }
    if (!hasExist) {
      finalSizePairs.push(sizeOjb);
    }
    setSizePairs(finalSizePairs);
    calceColorTotal(finalSizePairs, Number(e.target.value));
    console.log('finalSizePairs', finalSizePairs)
    console.log('hasExist', hasExist)
  }

  const calceColorTotal = (finalSizePairs: SizeInfoType[], initVal: number) => {
    let sum = 0;
    for (let i=0; i<finalSizePairs.length;i++) {
      if(finalSizePairs[i].colorid === currentColorID) {
        sum += finalSizePairs[i].quantity
      }
    }
    const p = Object.assign({}, colorTotal, {[currentColorID]: sum});
    setColorTotal({...p});
  }
  const getUserInfo = async () => {
    const res = await getCurrentUserInfo();
    if (res && !res.code && res.data?.userid) {
      userid = res.data.userid;
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  useEffect(() => {
    setCurrentColorID(info?.color[0].id || 0);
    setColor(info?.color[0].color|| "");
  }, [info?.color])

  return info ? (
    <div className="w-[34%] ml-[14%] mt-8text-[#1b1b1b]">
      <div className="text-lg uppercase">{info.title}</div>
      <div>1000,00 SEK</div>
      <div className="text-[#325D7B] text-xs pt-3 pb-4 uppercase">{info.madeof}</div>
      <div className="text-xs">COLOUR</div>
      <div className="flex mt-2">
        {
          info.color.map(i => {
            return (
              <div className="relative">
                <div key={i.id} className={`px-2 mr-4 border cursor-pointer ${i.id === currentColorID ? 'bg-gray-700 text-white' : ''}`} onClick={() => handleSelectColorChange(i)}>
                  {i.color}
                </div>
                {colorTotal[i.id] && (<div className="absolute top-[-6px] px-1 right-2 h-4 text-xs bg-blue-500 text-white">{colorTotal[i.id]}</div>)}
              </div>
            )
          })
        }
      </div>
      <div className="text-xs mt-4 mb-3">EU SIZE</div>
      <div className="flex flex-col">
        {
          info.size.map((size, index) => {
            return (
              <div key={index} className="my-1">
                <button className="w-9 h-9 border bg-black text-white">{size.size}</button>
                <span className="px-4">total: </span>
                <input type="number" step="1" className="border w-20 h-6"  onChange={(e) => handleSizeBlur(size, e)} onBlur={(e) => handleSizeBlur(size, e)} value={sizePairs.find(i=> (i.colorid === currentColorID && i.sizeid === size.id))?.quantity || 0} />
                <span className="px-4 text-gray-400 text-xs">{size.stocknum ? `${size.stocknum} in stock` : ""}</span>
              </div>
            )
          })
        }
      </div>
      <button className="w-full py-4 text-sm bg-black text-white mt-12" onClick={handleAddToCart}>ADD TO BAG</button>
    </div>
  ) : ""
}