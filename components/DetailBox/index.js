import styles from "./detail_box.module.scss";

const DetailBox = (props) => {
  return (
    <span key={props.key} className={`${styles.box} ${props.className}`}>
      {props.text}
    </span>
  );
};

export default DetailBox;
