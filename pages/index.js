import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
    </div>
  );
}
