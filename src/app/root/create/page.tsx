"use client"

import { useState, useEffect } from "react"
import { ProductFullCatogoryType } from "@/lib/globalts"
import createProduct from "@/apis/createProduct"
import { getProducTypetListData } from "@/apis/getProductTypeList"

const CreatePage: React.FC = () => {
  // image
  const [imageArr, setImageArr] = useState<string[]>([""]);
  const [canAddImgArr, setCanAddImgArr] = useState<boolean>(false);

  const [colorArr, setColorArr] = useState<string[]>([""]);
  const [canAddColorArr, setCanAddColorArr] = useState<boolean>(false);

  const [ typelist, setTypeList ] = useState<ProductFullCatogoryType[]>([]);
  const [ bigType, setBigType ] = useState<number>(1);
  const [ type, setType ] = useState<number>(1);

  const handleAddImage = () => {
    const len = imageArr.length;
    if (len > 0) {
      if (imageArr[len-1]) {
        setImageArr([...imageArr, ""]);
        setCanAddImgArr(false);
      } else {
        setCanAddImgArr(false);
        return;
      }
    } else {
      setCanAddImgArr(true);
      setImageArr([...imageArr, ""]);
    }
  }

  const handleImageArrInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleImageArrInputChange', e.target.value);
  }

  const handleImageArrInputBlur = (id: any, e: React.FocusEvent<HTMLInputElement>) => {
    console.log('handleImageArrInputBlur', e.target.value, id);
    const imageArrCopy = [...imageArr];
    imageArrCopy[id] = e.target.value;
    setImageArr(imageArrCopy);
    const len = imageArrCopy.length;
    if (len) {
      if (imageArrCopy[len-1]) {
        setCanAddImgArr(true)
      }
    }
  }

  const handleAddColor = () => {
    const len = colorArr.length;
    if (len > 0) {
      if (colorArr[len-1]) {
        setColorArr([...colorArr, ""]);
        setCanAddColorArr(false);
      } else {
        setCanAddColorArr(false);
        return;
      }
    } else {
      setCanAddColorArr(true);
      setColorArr([...colorArr, ""]);
    }
  }

  const handleColorArrInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleColorArrInputChange', e.target.value);
  }

  const handleColorArrInputBlur = (id: any, e: React.FocusEvent<HTMLInputElement>) => {
    console.log('handleColorArrInputBlur', e.target.value, id);
    const colorArrCopy = [...colorArr];
    colorArrCopy[id] = e.target.value;
    setColorArr(colorArrCopy);
    const len = colorArrCopy.length;
    if (len) {
      if (colorArrCopy[len-1]) {
        setCanAddColorArr(true)
      }
    }
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const sizeStart = formData.get("sizeStart") || 0;
    const sizeEnd = formData.get("sizeEnd") || 0;
    const title = formData.get("title");
    const price = formData.get("price");
    const madeof = formData.get("madeof");
    const sizes = [];
    for (let i:any= sizeStart ; i<= sizeEnd; i++) {
      sizes.push(Number(i));
    }
    const finalParams = {
      imageArr: imageArr.join('|'),
      colorArr: colorArr.join('|'),
      sizes: sizes.join('|'),
      title,
      type,
      price,
      madeof,
      bigType,
    }
    const finalParamsToString = JSON.stringify(finalParams);
    const res = await createProduct(finalParamsToString)

    console.log('----formData res-----', res);
  }

  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    console.log('---e', e.target.value);
    setBigType(Number(e.target.value));
  }

  const handleChildTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    console.log('---e', e.target.value);
    setType(Number(e.target.value));
  }

  const getTypeList = async () => {
    const res = await getProducTypetListData();
    if (res && !res.code && res.data) {
      setTypeList(res.data.list);
      console.log(res.data.list);
    }
  }

  useEffect(() => {
    getTypeList();
  }, [])
  return (
    <div className="mt-24 w-full ml-28">
      <form onSubmit={handleSubmit}> 
        <div className="mb-4">
          <div>images:</div>
          <div className="inline-block">
            {
              imageArr.map((i, idx) => {
                return (
                  <input key={idx} type="text" placeholder="https://" className="border w-96 h-8 inline-block" onChange={handleImageArrInputChange} onBlur={(e) => handleImageArrInputBlur(idx, e)} />
                )
              })
            }
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={canAddImgArr ? 'currentColor' : 'gray'} className="size-6 inline-block" onClick={handleAddImage}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </div>
        <div>
          <div>sizes:</div>
          <div>
            from: <input type="number" name="sizeStart" placeholder="35" />
            to: <input type="number" name="sizeEnd" placeholder="40" />
          </div>
        </div>
        <div>
          <div>color:</div>
          <div className="inline-block">
            {
              colorArr.map((i, idx) => {
                return (
                  <input key={idx} type="text" placeholder="balck" className="border w-40 h-8 inline-block" onChange={handleColorArrInputChange} onBlur={(e) => handleColorArrInputBlur(idx, e)} />
                )
              })
            }
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={canAddColorArr ? 'currentColor' : 'gray'} className="size-6 inline-block" onClick={handleAddColor}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </div>
        <div>
          <div>title:</div>
          <input name="title" type="text" placeholder="English/ Russian" />
        </div>
        <div>
          <div>type:</div>
          <select name="category" onChange={handleTypeSelect}>
            {
              typelist.map(i => {
                return (
                  <option key={i.id} value={i.id}>{i.typename}</option>
                )
              })
            }
          </select>
          <select name="type" onChange={handleChildTypeSelect}>
            {
              typelist.find(i => i.id === bigType)?.childtype.map(i => {
                return (
                  <option key={i.id} value={i.id}>{i.typename}</option>
                )
              })
            }
          </select>

          {/* <select name="type">
            <option key="man">man</option>
            <option key="woman">woman</option>
            <option key="kid">kid</option>
          </select> */}
        </div>
        <div>
          <div>price:</div>
          <input name="price" type="number" placeholder="1000" />SEK
        </div>
        <div>
          <div>madeof:</div>
          <input name="madeof" type="text" placeholder="cotton" />
        </div>
        {/* <div>
          <div>small type:</div>
          <input name="smalltype" type="text" placeholder="kid snow shoes" />
        </div> */}
        <button className="w-24 h-10 bg-black text-white" type="submit">create</button>
      </form>
    </div>
  )
}

export default CreatePage;