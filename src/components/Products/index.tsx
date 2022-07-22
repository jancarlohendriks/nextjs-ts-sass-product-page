import { IProduct } from "../../@types/products";
import styles from "./Products.module.scss";
import { ProductItem } from "../ProductItem";

export const Products = ({ items }: any) => {
  return (
    <ul className={styles.productList}>
      {items.map((item: IProduct, index: number) => (
        <ProductItem
          key={index}
          id={item.id}
          imgUrl={item.imgUrl}
          name={item.name}
          price={item.price}
          qty={1}
        />
      ))}
    </ul>
  );
};
