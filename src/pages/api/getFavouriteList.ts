import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers'

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
  const products = await prisma.favProduct.findMany({
    where: {
      userid: Number(userid),
    }
  });
  

  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      list: products,
      // mainlist: products,
      // newlist: products,
    },
  });

}