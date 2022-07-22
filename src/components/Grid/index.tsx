import styles from "./Grid.module.scss";

type GridProps = {
  children: React.ReactNode;
};

export const Grid = ({ children }: GridProps) => {
  return <div className={styles.root}>{children}</div>;
};
