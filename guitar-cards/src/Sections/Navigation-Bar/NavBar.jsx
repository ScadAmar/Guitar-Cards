import styles from "./NavBar.module.css";
import NavBarLogo from "../../assets/ScadNav_Logo.png";

function NavBar() {
  return (
    <header id="Navigation" className={styles.container}>
      <nav>
        <img src={NavBarLogo} alt="Scad Studio Logo" className="logo" />
        <ul>
          <li>
            <a href="#welcome">Home</a>
          </li>
          <li>
            <a href="#cardModule">Guitars</a>
          </li>
          <li>
            <a href="#learnMore">Learn More</a>
          </li>
          <li>
            <a href="#contactUs">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
