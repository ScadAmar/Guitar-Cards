import styles from "./GuitarCards.module.css";

function GuitarCards({ src, title, description, href }) {
  return (
    <div className={styles.GuitarCards}>
      <a href={href}>
        <img src={src} alt={`${title} image`} />
        <h1>{title}</h1>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default GuitarCards;
