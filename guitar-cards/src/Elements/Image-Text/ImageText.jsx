import styles from "./ImageText.module.css";

function ImageText({ src, title, description, href }) {
  return (
    <div className={styles.GuitarCards}>
      <img src={src} alt={`${title} image`} />
      <div id={href}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageText;
