import React, { useState, createContext } from "react";

export interface IProduct {
  id: number;
  imgUrl: string;
  name: string;
  price?: number;
  qty: number;
}

export type ProductsContextType = {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  saveProduct: (product: IProduct) => void;
  clearProduct: (id: number) => void;
  updateQty: (product: IProduct) => void;
};

type ProductsProviderProps = {
  children: React.ReactNode;
};
