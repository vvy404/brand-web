export interface ProductImgType {
  id: string;
  imgSrc: string;
  ismainpage: boolean;
};

export interface ProductColorType {
  id: number;
  color: string;
  availblenum: number;
}

export interface ProductSizeType {
  id: number;
  size: string;
  stocknum: number;
}

export interface ProductType {
  id: number;
  imgSrc: string;
  title: string;
  type: number;
  isInStock: boolean;
  isLiked: boolean;
  isNew: boolean;
  price: number;
};

export interface FavProductType {
  id: number;
  productid: number;
  imgSrc: string;
  title: string;
  color: string;
  price: number;
  userid: number;
}

export interface ResponseAjaxType {
  code: number;
  data: any
}

export type AjaxResType<T, E> = {
  code: number;
  message: string;
  loading?: boolean;
  data: T | null;
  error?: E | null;
}

export interface ProductInfoType extends ProductType {
  color: ProductColorType[];
  size: ProductSizeType[];
}

// mainpage
export interface MainProductType {
  id: number;
  imgSrc: string;
  btnText: string;
  link: string;
}

export interface MidProductType {
  id: number;
  imgSrc: string;
  title: string;
  link: string;
}

export interface DefaultErrorType {
  errorcode: number;
}

// cart

export interface CartItemType {
  id: number;
  imgSrc: string;
  title: string;
  price: number;
  madeof: string;
  size: string;
  sizeid: number;
  productid: number;
  colorid: number;
  color: string;
  quantity: number;
  userid: number;
}

export interface UserType {
  id: number;
  email: string;
  name: string;
  phone: string;
  role: string;
  roletype: number;
}

export interface OrderType {
  id: number;
  userId: number;
  createdAt: Date;
  paymentAt: Date;
  totalPrice: number;
  statusType: number;
  statusText: string;
}

export interface OrderCategoryType {
  id : number;
  orderId: number;
  productid: number;
  imageSrc: string;
  title: string;
  quanity: number;
  color: string;
  singlePrice: number;
  totalPrice: number;
}

export interface OrderFullInfoType extends OrderType {
  orderCategory: OrderCategoryType[];
}

export interface ProductCategoryOverAllType {
  id: number;
  type: number;
  typename: string;
}

export interface ProductCategoryType {
  id: number;
  productcategoryid: number;
  type: number;
  typename: string;
}

export interface ProductFullCatogoryType extends ProductCategoryOverAllType {
  childtype: ProductCategoryType[];
}