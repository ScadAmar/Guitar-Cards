import GuitarCards from "../../Elements/Guitar-Cards/GuitarCards";
import Telecaster from "../../assets/Telecaster.jpg";
import Stratocaster from "../../assets/Stratocaster.jpg";
import SimpleGuitar from "../../assets/SG.jpg";
import LesPaul from "../../assets/LesPaul.jpg";
import styles from "./CardModule.module.css";

function CardModule() {
  return (
    <section id="cardModule" className={styles.container}>
      <h1 className="sectionTitle">Featured Electric Guitars</h1>
      <div className={styles.guitarTypes}>
        <GuitarCards
          href="#tele"
          src={Telecaster}
          title="Telecaster"
          description="Recognized for its simple, solid body and dual single-coil pickups, it delivers 
    a bright, cutting tone ideal for country and rock music."
        />
        <GuitarCards
          href="#strat"
          src={Stratocaster}
          title="Stratocaster"
          description="A versatile guitar known for its contoured body, three single-coil pickups, and a bright, 
        bell-like tone, making it a favorite for genres from rock to blues."
        />
        <GuitarCards
          href="#solidG"
          src={SimpleGuitar}
          title="SG"
          description="Distinguished by its lightweight, double-cutaway body and dual 
        humbucker pickups, it offers a warm, full sound perfect for rock and metal."
        />
        <GuitarCards
          href="#lesPaul"
          src={LesPaul}
          title="Les Paul"
          description="Famous for its solid, single-cutaway body and dual humbucker pickups, 
        it produces a rich, sustaining tone favored in rock, blues, and jazz."
        />
      </div>
    </section>
  );
}

export default CardModule;
