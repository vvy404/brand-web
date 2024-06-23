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
  const cartlist = await prisma.cartItem.findMany();
  
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      list: cartlist,
    },
  });

}