import { useContext, useState } from "react";
import { Container } from "../Container";
import styles from "./Navigation.module.scss";
import { Wishlist } from "../Wishlist";
import { ProductsContext } from "../../context/state";
import { ProductsContextType } from "../../@types/products";

export const Navigation = () => {
  const { products } = useContext(ProductsContext) as ProductsContextType;
  const [isActive, setActive] = useState<Boolean>(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.bg}></div>
        <nav className={styles.nav}>
          <h1>Logo</h1>
          <div className={styles.favourites} onClick={handleToggle}>
            <span>Favourites</span>
            <span className={styles.badge}>{products.length}</span>
          </div>
        </nav>
      </Container>
      <Wishlist active={isActive} setState={handleToggle} />
    </header>
  );
};
