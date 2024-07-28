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
  const { imgSrc, productid, title, price, userid} = params;
  const product = await prisma.favProduct.create({
    data: {
      imgSrc,
      title,
      price: Number(price),
      productid: Number(productid),
      userid: Number(userid),
    },
  });
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      product
    },
  });



}