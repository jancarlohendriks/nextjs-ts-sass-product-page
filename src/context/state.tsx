import { createContext, useEffect, useState } from "react";
import {
  ProductsProviderProps,
  ProductsContextType,
  IProduct,
} from "../@types/products";

export const ProductsContext = createContext<ProductsContextType | null>(null);

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const checkProducts = (product: IProduct) =>
    products.some((el) => el.id === product.id);

  const saveProduct = (product: IProduct) => {
    if (checkProducts(product)) return;
    const newProduct: IProduct = {
      id: product.id,
      imgUrl: product.imgUrl,
      name: product.name,
      price: product.price,
      qty: product.qty,
    };
    setProducts([...products, newProduct]);
  };

  const updateQty = (newProduct: IProduct) => {
    const newProducts = Object.assign(products, newProduct);
    setProducts(newProducts);
  };

  const clearProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, saveProduct, clearProduct, updateQty }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
