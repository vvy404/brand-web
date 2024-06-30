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
  const type = Number(req.query.type);
  const pageNum = Number(req.query.pageNum);
  const pageIndex = Number(req.query.currentPageIndex);
  const products = await prisma.product.findMany({
    skip: pageIndex * pageNum,
    take: pageNum,
    where: {
      type: type,
    }
  });
  const productAll = await prisma.product.findMany({
    where: {
      type: type,
    }
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
      currentPageIndex: pageIndex,
      pageTotal: Math.floor(productAll.length / 2),
      pageNum: pageNum,
      // mainlist: products,
      // newlist: products,
    },
  });

}