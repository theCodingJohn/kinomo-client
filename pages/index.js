import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";

import Redirect from "../components/HOC/Redirect";

export default function Home() {
  return <Redirect to="/movies" />;
}
