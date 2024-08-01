import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <section id="welcome" className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.intro}>
        <h1 className="sectionTitle">Welcome to Our Guitar Showcase</h1>
        <p>
          Discover the iconic sounds and unparalleled craftsmanship of our
          electric guitar collection. <br />
          <br />
          From the legendary Stratocaster to the powerful Les Paul, each guitar
          is designed to inspire and elevate your musical journey. <br />
          <br />
          Explore our selection and find the perfect instrument to create your
          signature sound.
        </p>
        <button>
          <a href="#cardModule">Let's Go</a>
        </button>
      </div>
    </section>
  );
}

export default Welcome;
