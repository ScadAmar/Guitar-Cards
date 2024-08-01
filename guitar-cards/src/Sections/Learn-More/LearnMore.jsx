import ImageText from "../../Elements/Image-Text/ImageText";
import Strat from "../../assets/Strat.jpg";
import Tele from "../../assets/Tele.jpg";
import SimpleG from "../../assets/SimpleG.jpg";
import LesPaule from "../../assets/LesPaule.jpg";
import styles from "./LearnMore.module.css";

function LearnMore() {
  return (
    <section id="learnMore" className={styles.container}>
      <h1 className="sectionTitle">Discover Your Perfect Sound</h1>
      <div className={styles.guitarTypes}>
        <ImageText
          href="strat"
          src={Strat}
          title="Stratocaster"
          description="The Stratocaster, introduced by Fender in 1954, is celebrated for its sleek, contoured body 
          and signature three single-coil pickups. Its versatile tone, ranging from bright and snappy to warm and smooth, 
          has made it a favorite among guitarists across various genres, including rock, blues, and pop. Known for its 
          comfortable playability and iconic design, the Stratocaster has been the choice of legendary musicians like Jimi 
          Hendrix, Eric Clapton, and Jeff Beck."
        />
        <ImageText
          href="tele"
          src={Tele}
          title="Telecaster"
          description="The Telecaster, launched by Fender in 1951, is renowned for its simple, solid body and dual 
          single-coil pickups. Its bright, cutting tone and exceptional clarity make it a staple in country, rock, and 
          blues music. The Telecaster's straightforward design and robust build have made it a reliable workhorse for 
          countless musicians, from Bruce Springsteen to Keith Richards, who appreciate its classic sound and timeless 
          appeal."
        />
        <ImageText
          href="solidG"
          src={SimpleG}
          title="SG"
          description="The SG (Solid Guitar), introduced by Gibson in 1961, is famous for its lightweight, double-cutaway 
          body and powerful dual humbucker pickups. Its warm, full sound and fast neck make it a perfect choice for rock and
           metal genres. The SG's aggressive tone and distinctive look have made it an iconic instrument, played by guitar 
           heroes like Angus Young of AC/DC and Tony Iommi of Black Sabbath, known for pushing musical boundaries with its 
           searing, sustained notes."
        />
        <ImageText
          href="lesPaul"
          src={LesPaule}
          title="Les Paul"
          description="The Les Paul, first produced by Gibson in 1952, is celebrated for its solid, single-cutaway body and 
          dual humbucker pickups, which deliver a rich, sustaining tone. Its warm, full-bodied sound and elegant design 
          have made it a favorite in rock, blues, and jazz. The Les Paul's versatility and premium craftsmanship have 
          attracted legendary players like Jimmy Page, Slash, and Joe Perry, who have used it to create some of the most 
          memorable riffs and solos in music history."
        />
      </div>
    </section>
  );
}

export default LearnMore;
