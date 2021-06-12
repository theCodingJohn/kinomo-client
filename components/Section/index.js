import styles from "./section.module.scss";

const Section = (props) => {
  return (
    <section
      style={{ ...props.style }}
      className={`${props.className} ${styles.section}`}
    >
      {props.children}
    </section>
  );
};

export default Section;
