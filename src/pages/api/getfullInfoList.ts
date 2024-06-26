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
  const {userid} = req.cookies;
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

    const favProduct = await prisma.favProduct.findFirst({
      where: {
        userid: Number(userid),
        productid: pid
      }
    })

    const f_product = {
      ...products[i], 
      color: p_color, 
      size: p_size,
      isLiked: !!(favProduct && favProduct.id)
    };
    finalProducts.push(f_product);
  }

  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      list: finalProducts,
      currentPageIndex: pageIndex,
      pageTotal: Math.ceil(productAll.length / pageNum),
      pageNum: pageNum,
      // mainlist: products,
      // newlist: products,
    },
  });

}