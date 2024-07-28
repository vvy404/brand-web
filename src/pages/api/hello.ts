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
    colorid: 1,
    sizeid: 2,
    quantity: 1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
    userid: 1,
  },
  {
    productid: 1,
    colorid: 1,
    sizeid: 1,
    quantity: 1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
    userid: 1,
  },
  {
    productid: 1,
    colorid: 1,
    sizeid: 3,
    quantity: 1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
    userid: 1,
  }, {
    productid: 1,
    colorid: 2,
    sizeid: 1,
    quantity: 1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
    userid: 1,
  },
  {
    productid: 1,
    colorid: 3,
    sizeid: 1,
    quantity: 1,
    imgSrc: '/a.jpeg',
    title: 'title',
    madeof: 'cotton',
    price: 1000,
    size: "1",
    color: 'red',
    userid: 1,
  }
]

const user = [
  {
    email: "wy@gmail.com",
    firstname: "wang",
    lastname: "ye",
    phone: "18801201739",
    role: "level1",
    roletype: 1,
    isSubscribed: true,
  },
]

const order = [
  {
    userId: 1,
    paymentAt: new Date(),
    totalPrice: 1000,
    statusType: 1,
    statusText: "done",
  },
  {
    userId: 1,
    paymentAt: new Date(),
    totalPrice: 1000,
    statusType: 1,
    statusText: "done",
  }
]

const orderCategory = [
  {
    orderId: 1,
    productid: 1,
    imageSrc: "/a.jpge",
    title: "aaa",
    singlePrice: 111,
    quanity: 1,
    totalPrice: 100,
    color: "gray",
  },
  {
    orderId: 1,
    productid: 1,
    imageSrc: "/b.jpge",
    title: "aaa",
    singlePrice: 111,
    quanity: 1,
    totalPrice: 100,
    color: "gray",
  },
]

const productCategoryOverAll = [
  {
    type: 1,
    typename: 'women',
  },
  {
    type: 2,
    typename: 'men',
  },
  {
    type: 3,
    typename: 'kid',
  },
]

const productCategory = [
  {
    productcategoryid: 1,
    type: 1,
    typename: 'snow shoes'
  },
  {
    productcategoryid: 1,
    type: 2,
    typename: 'winter shoes'
  },
  {
    productcategoryid: 1,
    type: 3,
    typename: 'summer shoes'
  },
  {
    productcategoryid: 1,
    type: 4,
    typename: 'whatever shoes'
  },
  {
    productcategoryid: 2,
    type: 1,
    typename: 'snow shoes'
  },
  {
    productcategoryid: 2,
    type: 2,
    typename: 'winter shoes'
  },
  {
    productcategoryid: 2,
    type: 3,
    typename: 'summer shoes'
  },
  {
    productcategoryid: 2,
    type: 4,
    typename: 'whatever shoes'
  },
  {
    productcategoryid: 3,
    type: 1,
    typename: 'snow shoes'
  },
  {
    productcategoryid: 3,
    type: 2,
    typename: 'winter shoes'
  },
  {
    productcategoryid: 3,
    type: 3,
    typename: 'summer shoes'
  },
  {
    productcategoryid: 3,
    type: 4,
    typename: 'whatever shoes'
  },
]

const favProductList = [
  {
    productid: 1,
    imgSrc: '/a.jpeg',
    title: 'CURVED-HEM SHORT-SLEEVED DENIM SHIRT',
    color: 'black',
    price: 1000,
    userid: 1,
  },
  {
    productid: 1,
    imgSrc: '/a.jpeg',
    title: 'CURVED-HEM SHORT-SLEEVED DENIM SHIRT',
    color: 'red',
    price: 1000,
    userid: 1,
  },
  {
    productid: 1,
    imgSrc: '/a.jpeg',
    title: 'CURVED-HEM SHORT-SLEEVED DENIM SHIRT',
    color: 'white',
    price: 1000,
    userid: 1,
  },
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

// user
for (const post of user) {
  await prisma.user.create({
    data: post,
  });
}

  // cart
  for (const post of cart) {
    await prisma.cartItem.create({
      data: post,
    });
  }

  // midpage
  for (const post of midpage) {
    await prisma.midPageImageConfig.create({
      data: post,
    });
  }

  
  // order
  for (const post of order) {
    await prisma.order.create({
      data: post,
    });
  }

  // orderCategory
  for (const post of orderCategory) {
    await prisma.orderCategory.create({
      data: post,
    });
  }

  // ProductCategoryOverAllType
  for (const post of productCategoryOverAll) {
    await prisma.productCategoryOverAll.create({
      data: post,
    });
  }

  // orderCategory
  for (const post of productCategory) {
    await prisma.productCategory.create({
      data: post,
    });
  }

  // favProductList 
  for (const post of favProductList) {
    await prisma.favProduct.create({
      data: post,
    });
  }
  


  const products = await prisma.midPageImageConfig.findMany();

  res.status(200).json({ message: 'Hello from Next.js!' + products.length });

}