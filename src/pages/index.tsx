import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "../layouts/DefaultLayout";
import styles from "./index.module.scss";
import useSWR from "swr";
import { Products } from "../components/Products";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Products items={data.arrayOfProducts} />
      </DefaultLayout>
    </div>
  );
};

export default Home;