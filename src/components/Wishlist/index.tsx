import { useEffect } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/state";
import { ProductsContextType, IProduct } from "../../@types/products";
import styles from "./Wishlist.module.scss";
import WishlistProduct from "../WishlistProduct";

export type WishlistProps = {
  active: Boolean;
  // setState: (active: boolean) => void;
  setState: React.Dispatch<React.SetStateAction<Boolean>>;
};

export const Wishlist = ({ active, setState }: WishlistProps) => {
  const { products, setProducts } = useContext(
    ProductsContext
  ) as ProductsContextType;

  const handleToggle = () => {
    setState(!active);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");
    if (data !== null) {
      setProducts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(products));
  }, [products]);

  return (
    <div className={!active ? `${styles.root}` : `${styles.hide}`}>
      <div className={styles.header}>
        <h2>Favourites</h2>
        <span className={styles.close} onClick={handleToggle}>
          close
        </span>
      </div>
      <div className={styles.main}>
        {products.map((product: IProduct, index: number) => (
          <WishlistProduct key={index} product={product} />
        ))}
      </div>
      <div className={styles.footer}>
        <button>Purchase</button>
      </div>
    </div>
  );
};
