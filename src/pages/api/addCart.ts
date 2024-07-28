import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma';
import { CartItemType } from '@/lib/globalts';

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
  const { userid } = req.cookies;
  const params : CartItemType[] = JSON.parse(body);
  const list = params.map(item => {
    return {
      ...item,
      userid: Number(userid),
    }
  })
  const product = await prisma.cartItem.createMany({data: list});
  if (product) {
    res.status(200).json({
      code: 0,
      message: 'success!',
      data: {
        product
      },
    });
  
  } else {
    res.status(200).json({
      code: 1,
      message: 'wrong!',
      data: "",
    });
  }



}