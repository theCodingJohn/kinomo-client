import styles from "./scroller.module.scss";

const Scroller = ({ children, className }) => {
  return <div className={`${styles.scroller} ${className}`}>{children}</div>;
};

export default Scroller;
