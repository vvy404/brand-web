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
  // const products = await prisma.$queryRaw`SELECT * FROM Product`
  const products = await prisma.product.findMany({
    take: 8
  });
  let finalProducts= [];
  
  for (let i =0 ;i < products.length; i++) {
    const pid = products[i].id;
    const p_color = await prisma.productColor.findMany({
      where: {
        productid: pid
      }
    });
    const p_size = await prisma.productSize.findMany({
      where: {
        productid: pid
      }
    })
    const f_product = {...products[i], color: p_color, size: p_size};
    finalProducts.push(f_product);
  }

  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      list: finalProducts,
      // mainlist: products,
      // newlist: products,
    },
  });

}