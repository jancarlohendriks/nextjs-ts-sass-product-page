import styles from "./Container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <section className={styles.root}>{children}</section>;
};
