import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma';

type ResponseData = {
  code: number
  message: string
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body;
  const params = JSON.parse(body);
  const imageArr = params.imageArr;

  const product = await prisma.product.create({
    data: {
      imgSrc: imageArr?.split("|")?.[0],
      title: params.title,
      price: Number(params.price),
      typeName: params.typename,
      type: params.type,
      madeof: params.madeof,
      isNew: true,
      stocknum: 999,
      isInStock: true,
      bigType: params.bigType,
      bigTypeName: params.bigTypeName,
    },
  });

// size
  const productid = product.id;
  const sizes = params.sizes?.split('|');
  const sizeArr = sizes.map((i: any) => {
    return {
      productid,
      size:String(i),
      stocknum: 999,
    }
  })
  const psize = await prisma.productSize.createMany({data: sizeArr});
// color
  const colors = params.colorArr?.split('|');
  const colorArr = colors.map((i: any) => {
    return {
      productid,
      color: String(i),
      img: imageArr?.split("|")?.[0],
      availblenum: 999,
    }
  });
  const pcolor = await prisma.productColor.createMany({data: colorArr});
// img
  const imgs = params.imageArr?.split('|');
  const imgsArr = imgs.map((i: any, idx: number) => {
    return {
      productid,
      imgSrc: String(i),
      color: 'unknown',
      ismainpage: idx === 0
    }
  })
  const pimg = await prisma.productImg.createMany({data: imgsArr});
  
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      product,
      psize,
      pcolor,
      pimg,
    },
  });



}