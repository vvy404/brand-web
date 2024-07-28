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
  const list = await prisma.productCategoryOverAll.findMany();

  const finalList = [];
  for (let i = 0; i< list.length; i++) {
    let cid = list[i].id;
    const category = await prisma.productCategory.findMany({
      where: {
        productcategoryid: cid
      }
    })
    finalList.push({...list[i], childtype: category});
  }
  
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      list: finalList,
    },
  });

}