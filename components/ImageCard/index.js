import styles from "./image_card.module.scss";

const ImageCard = (props) => {
  return (
    <div key={props.person.id} className={`${props.className} ${styles.card}`}>
      <div className={styles.overlay}></div>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w780/${props.person.profile_path}`}
      />

      <div className={styles.text_wrapper}>
        <div className={styles.text}>
          <span className={styles.name}>{props.person.name}</span>
          <span className={styles.character}>
            {props.person.character || props.person.job}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
