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
  const { userid } = req.cookies;

  const cartlist = await prisma.cartItem.findMany({
    where: {
      userid: Number(userid),
    }
  });
  
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      list: cartlist,
    },
  });

}