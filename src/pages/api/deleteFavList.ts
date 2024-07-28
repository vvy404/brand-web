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
  const targetproduct = await prisma.favProduct.findFirst({
    where: {
      productid: Number(body)
    }
  });
  
  const product = await prisma.favProduct.delete({
    where: {
      id: targetproduct?.id,
    }
  });
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      product
    },
  });



}