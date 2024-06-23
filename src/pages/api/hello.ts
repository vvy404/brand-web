import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

 
type ResponseData = {
  message: string
}

const initialPosts = [
  {
    "ismainimg": false,
    "imgSrc": "/a.jpeg",
    "title": "CURVED-HEM SHORT-SLEEVED DENIM SHIRT",
    "type": 1,
    "typeName": "women",
    "isInStock": true,
    "isLiked": false,
    "isNew": false,
    "stocknum": 0,
    "price": 1000,
    "madeof": "cotton",
  },
  {
    "ismainimg": false,
    "imgSrc": "/a.jpeg",
    "title": "CURVED-HEM SHORT-SLEEVED DENIM SHIRT",
    "type": 1,
    "typeName": "women",
    "isInStock": true,
    "isLiked": false,
    "isNew": false,
    "stocknum": 0,
    "price": 1000,
    "madeof": "cotton",
  },
  {
    "ismainimg": false,
    "imgSrc": "/b.jpeg",
    "title": "CURVED-HEM SHORT-SLEEVED DENIM SHIRT",
    "type": 2,
    "typeName": "women",
    "isInStock": true,
    "isLiked": false,
    "isNew": false,
    "stocknum": 0,
    "price": 1000,
    "madeof": "cotton",
  }
];

const initialProductImgs = [
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "red",
    "ismainpage": true
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "white",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "black",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "blue",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "yellow",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "orange",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "#111111",
    "ismainpage": false
  },
  {
    "productid": 1,
    "imgSrc": "/a.jpeg",
    "color": "#eeeeee",
    "ismainpage": false
  }
]

const initialProductColor = [
  {
    "productid": 1,
    "color": "blue",
    "img": "/a.jpeg",
    "availblenum": 1
  },
  {
    "productid": 1,
    "img": "/a.jpeg",
    "color": "orange",
    "availblenum": 2
  },
  {
    "productid": 1,
    "img": "/a.jpeg",
    "color": "white",
    "availblenum": 88
  }
]

const initialProductSize = [
  {
    "productid": 1,
    "size": "1",
    "stocknum": 1,
  },
  {
    "productid": 1,
    "size": "3",
    "stocknum": 1,
  },
  {
    "productid": 1,
    "size": "5",
    "stocknum": 1,
  }
]

const mainpage = [
  {
    "imgSrc": "/a.jpeg",
    "btnText": "red",
    "link": "http://localhost:3000/detail"
  },
  {
    "imgSrc": "/a.jpeg",
    "btnText": "red",
    "link": "http://localhost:3000/detail"
  },
  
]

const midpage = [
  {
    "imgSrc": "/b.jpeg",
    "title": "red",
    "link": "http://localhost:3000/detail"
  },
  {
    "imgSrc": "/b.jpeg",
    "title": "red",
    "link": "http://localhost:3000/detail"
  },
  
]

const cart = [
  {
    productid: 1,
    colorid:1,
    sizeid:2,
    quantity:1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
  },
  {
    productid: 1,
    colorid:1,
    sizeid:1,
    quantity:1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
  },
  {
    productid: 1,
    colorid:1,
    sizeid:3,
    quantity:1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
  },{
    productid: 1,
    colorid:2,
    sizeid:1,
    quantity:1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
  },
  {
    productid: 1,
    colorid:3,
    sizeid:1,
    quantity:1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
  }
]


 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
// products

  for (const post of initialPosts) {
    await prisma.product.create({
      data: post,
    });
  }
  const products = await prisma.product.findMany();


// productImgs
  for (const post of initialProductImgs) {
    await prisma.productImg.create({
      data: post,
    });
  }
//   const products = await prisma.productImg.findMany();


  // productColors
  for (const post of initialProductColor) {
    await prisma.productColor.create({
      data: post,
    });
  }
  // const products = await prisma.productColor.findMany();



  // productSize
  for (const post of initialProductSize) {
    await prisma.productSize.create({
      data: post,
    });
  }
  // const products = await prisma.productSize.findMany();


  // mainpage
  for (const post of mainpage) {
    await prisma.mainPageImageConfig.create({
      data: post,
    });
  }
  // const products = await prisma.mainPageImageConfig.findMany();


  // cart
  for (const post of cart) {
    await prisma.cartItem.create({
      data: post,
    });
  }
  // const products = await prisma.mainPageImageConfig.findMany();


  // midpage
  for (const post of midpage) {
    await prisma.midPageImageConfig.create({
      data: post,
    });
  }
  // const products = await prisma.midPageImageConfig.findMany();

  res.status(200).json({ message: 'Hello from Next.js!' + products.length });

}