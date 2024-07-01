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
  const products = await prisma.favProduct.findMany({
    where: {
      userid: Number(userid),
    }
  });

  let finalProducts= [];
  
  for (let i =0 ;i < products.length; i++) {
    const pid = products[i].productid || 1;
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

    const f_product = {
      ...products[i], 
      color: p_color, 
      size: p_size,
    };
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