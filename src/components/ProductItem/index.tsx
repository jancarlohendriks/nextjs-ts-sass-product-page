import { useContext } from "react";
import { ProductsContext } from "../../context/state";
import { ProductsContextType, IProduct } from "../../@types/products";
import Image from "next/image";
import styles from "./Productitem.module.scss";

export const ProductItem = ({ id, imgUrl, name, price, qty }: IProduct) => {
  const { saveProduct } = useContext(ProductsContext) as ProductsContextType;

  const handleSaveProduct = (e: React.FormEvent, product: IProduct) => {
    e.preventDefault();
    saveProduct(product);
  };

  return (
    <li className={styles.product}>
      <div className={styles.productImage}>
        <Image src={imgUrl} layout="fill" />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>
            {price ? `€ ${price}` : "out of stock"}
          </span>
        </div>
        <button
          onClick={(e) =>
            handleSaveProduct(e, { id, imgUrl, name, price, qty })
          }
        >
          Add to favourites
        </button>
      </div>
    </li>
  );
};
