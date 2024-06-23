export interface ProductImgType {
  id: string;
  imgSrc: string;
  ismainpage: boolean;
};

export interface ProductColorType {
  id : number;
  color: string;
  availblenum: number;
}

export interface ProductSizeType {
  id : number;
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
};

export interface ResponseAjaxType {
  code : number;
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
  color: ProductColorType[],
  size: ProductSizeType[],
}