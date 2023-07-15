import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.hero_section}>
        <section className={styles.top_section}>
          <div className={styles.hero_img}>
            <img src="/Images/Aniket.png" alt="Hero Image" />
          </div>
          <div className={styles.hero_text}>
            <ul>
              <li>Design</li>
              <li>Development</li>
              <li>Interactions</li>
            </ul>
          </div>
        </section>
        <section className={styles.bottom_section}>
          <div className={styles.contact_email}>Contact@aniketpatel.me</div>
          <div className={styles.bottm_hero_text}>
            <p>Web Developer: Turning coffee into code</p>
            <p>Code is My potery</p>
          </div>
        </section>
      </div>
    </>
  );
}
