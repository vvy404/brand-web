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

  const productBigType = await prisma.productCategoryOverAll.findMany();
  const productType = await prisma.productCategory.findMany();

  const pBigTypeCopy: any = [];

  productBigType.forEach((big, idx) => {
    console.log('big', big, idx);
    const id = big.id;
    const childtype:any = [];
    productType.forEach((type, index) => {
      if (type.productcategoryid === id) {
        childtype.push(type);
      }
    })
    pBigTypeCopy[idx] = Object.assign({}, big, {childtype: childtype})
  })

  
  res.status(200).json({
    code: 0,
    message: 'success!',
    data: {
      list: pBigTypeCopy,
    },
  });



}