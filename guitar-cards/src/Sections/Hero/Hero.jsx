import NavBar from "../Navigation-Bar/NavBar";
import Welcome from "../Welcome-Banner/Welcome";
import styles from "./Hero.module.css";
import backVideo from "../../assets/RockBand.mp4";

function Hero() {
  return (
    <div className={styles.hero}>
      <video
        src={backVideo}
        className={styles.bgVideo}
        autoPlay
        muted
        loop
      ></video>
      <NavBar />
      <Welcome />
    </div>
  );
}

export default Hero;
