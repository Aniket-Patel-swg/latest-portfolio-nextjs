import styles from '../styles/Work.module.css';

const Work = () => {
    return ( 
        <>
            <div className={styles.work_section}>
                <section className={styles.upper_work_text}>
                    <h2>My Latest</h2>
                    <h2>Projects</h2>
                </section>
                <section className={styles.middle_work_details}>
                    <p>Selected Projects</p>
                    <h3>Works</h3>
                    <p>Hover to explore</p>
                </section>
                <section className={styles.bottom_work_images}>
                    <section className={styles.startup_section}>
                        <p>Startup</p>
                        <img src="/Images/work/fruitlonglife_pic.png" alt="" />
                    </section>
                    <section className={styles.redesign_section}>
                        <img className={styles.stories_arabia} src="/Images/work/stories_arabia_brand.png" alt="" />
                    </section>
                    <section className={styles.real_estate_section}>
                        <p>Real Estate</p>
                        <img src="/Images/work/serene_resort_pic.png" alt="" />
                        <img src="/Images/work/bali_resort_brand.png" alt="" />
                    </section>
                </section>
            </div>
        </>
     );
}
 
export default Work;