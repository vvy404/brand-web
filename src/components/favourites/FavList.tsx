import Image from "next/image"
import { useState, useEffect } from "react"

import productArr from "./productarr"
import { FavProductFullType, ProductColorType, ProductSizeType, CartItemType } from "@/lib/globalts"

type SizeInfoType = Omit<CartItemType, "id" | "userid">
interface FavListProps {
  list: FavProductFullType[];
  handleDeleteItem: (item: FavProductFullType) => void;
  handleAddToCart: (item: SizeInfoType) => void;
}

const FavList: React.FC<FavListProps> = ({ 
  list, 
  handleDeleteItem,
  handleAddToCart,
}) => { 
  const [colorId, setColorId] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [sizeId, setSizeId] = useState<number>(0);
  const [size, setSize] = useState<string>("");

  const treemap = (arr: any[]) => {
    let res = [];
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 4 === 0) {
        col1.push(arr[i]);
      }
      if (i % 4 === 1) {
        col2.push(arr[i]);
      }
      if (i % 4 === 2) {
        col3.push(arr[i]);
      }
      if (i % 4 === 3) {
        col4.push(arr[i]);
      }
    }
    res.push(col1);
    res.push(col2);
    res.push(col3);
    res.push(col4);
    return res;
  }
  const finalArr = treemap(list);
  console.log('---finalArr', finalArr);

  const handleAddToCartClick = (item: FavProductFullType) => {
    const params = {
      imgSrc: item.imgSrc,
      color,
      colorid: colorId,
      size,
      sizeid: sizeId,
      quantity: 1,
      madeof: "",
      title: item.title,
      price: item.price,
      productid: item.productid,
    }
    handleAddToCart(params);
    console.log('item', params)
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const id = val.split("|")[0];
    const color = val.split("|")[1];
    setColor(color);
    setColorId(Number(id));
    console.log('eee111', e.target.value);
  }

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const id = val.split("|")[0];
    const size = val.split("|")[1];
    setSize(size);
    setSizeId(Number(id));
    console.log('eee22', e.target.value);
  }
  

  useEffect(()=> {
    setColorId(list[0]?.color[0].id);
    setSizeId(list[0]?.size[0].id);
    setColor(list[0]?.color[0].color);
    setSize(list[0]?.size[0].size)

  }, [list.length])
  
  return (
    <div>
      <div className="flex flex-col items-center mb-16">
        <div className="text-3xl">My favourites</div>
        <div className="text-gray-500 pt-4">{productArr.length} ITEMS</div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {
          finalArr.map((plist, idx) => {
            return (
              <div key={idx} className="column col-span-1">
                {plist.map(i => {
                  return (
                    <div className="flex flex-col relative mb-14 text-xs">
                      <div className="image-group w-full relative">
                        <Image src={i.imgSrc} alt="pic" width={100} height={150} className="w-full" />

                      </div>
                      <div className="text-[11px] mt-4">{i.title}</div>
                      <div className="text-[11px] mt-[2px]">{i.price} SEK</div>
                      <div className="flex">
                        <span>Colour</span>
                        <select className="inline-block" onChange={handleColorChange}>
                          {
                            i.color.map((icolor: ProductColorType) => {
                              return (
                                <option key={icolor.id} value={`${icolor.id}|${icolor.color}`}>{icolor.color}</option>
                              )
                            })
                          }
                        </select>
                      </div>

                      {/* <div className="flex mt-1">
                        {
                          i.color.map((icolor: ProductColorType) => {
                            return (
                              <div key={icolor.id}>Colour {icolor.color}</div>
                            )
                          })
                        }

                      </div> */}
                      <div className="flex items-center">
                        <div>size:</div>
                        <select className="" onChange={handleSizeChange}>
                          {
                            i.size.map((isize: ProductSizeType) => {
                              return (
                                <option key={isize.id} value={`${isize.id}|${isize.size}`}>{isize.size}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                      <button className="bg-black text-white py-4 mt-2" onClick={()=>handleAddToCartClick(i)}>ADD TO CART</button>
                      <div className="absolute top-2 right-4 w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() =>handleDeleteItem(i)}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })
        }

      </div>
      {/* <div className="h-1 mt-16 pb-2 border-t border-solid border-gray-200"></div> */}

    </div>
  )
}
export default FavList;