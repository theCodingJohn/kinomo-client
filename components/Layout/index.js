import styles from "./layout.module.scss";

import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
