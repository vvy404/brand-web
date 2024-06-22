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
  const product = await prisma.product.findUnique({
    where: {
      id: 1,
    }
  });
  const productColors = await prisma.productColor.findMany({
    where: {
      productid: 1,
    }
  });
  const colorIds = productColors.map(i => i.id);
  const productImgs = await prisma.productImg.findMany({
    where: {
      productid: 1,
    }
  });

  const productSizes = await prisma.productSize.findMany({
    where: {
      colorid: {
        in: colorIds
      },
    }
  });
  

  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      product: product,
      productimgs: productImgs,
      productcolors: productColors,
      productsizes: productSizes,
    },
  });

}