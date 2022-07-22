import { useContext, useState } from "react";
import { IProduct, ProductsContextType } from "../../@types/products";
import { ProductsContext } from "../../context/state";
import styles from "./WishlistProduct.module.scss";

type WishlistProductProps = {
  product: IProduct;
};

const WishlistProduct = ({ product }: WishlistProductProps) => {
  const { clearProduct, updateQty } = useContext(
    ProductsContext
  ) as ProductsContextType;
  const [inputValue, setInputValue] = useState<number>(product.qty);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(parseInt(event.currentTarget.value));

    const newProduct: IProduct = {
      id: product.id,
      imgUrl: product.imgUrl,
      name: product.name,
      price: product.price,
      qty: inputValue + 1,
    };

    updateQty(newProduct);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.name}>{product.name}</h3>
        <span>Price: € {product.price}</span>
      </div>
      <label className={styles.label}>
        <span>Qty: </span>
        <input
          className={styles.input}
          type="number"
          name="name"
          onChange={onChangeHandler}
          value={inputValue}
        />
      </label>
      <button
        className={styles.remove}
        onClick={() => clearProduct(product.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default WishlistProduct;
