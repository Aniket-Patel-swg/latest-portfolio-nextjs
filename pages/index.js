import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Images from '../Components/Images.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SpecificWork from "../Components/SpecificWork";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef(null);

  const options = {
    smooth: true,
    mulitplier : 9
  };

  const imageRef = useRef(null);
  useEffect(() => {
    let proxy = { skew: 10 },
      skewSetter = gsap.quickSetter(imageRef.current, "skewY", "deg"),
      clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      trigger: imageRef.current,
      onUpdate: (self) => {
        // console.log("vel", self.getVelocity()) // fater we scroll fater the velocity, so that we can use it to change the skew
        let skew = clamp(self.getVelocity());

        if (Math.abs(skew) > Math.abs(proxy.skew) / -50) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 3,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
  });

  return (
    <>
      <Navbar />
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
        <div data-scroll-section className={styles.hero_section}>
          <section className={styles.top_section}>
            <div className={styles.hero_img}>
              <img src="/Images/Aniket.png" alt="Hero Image" />
            </div>
            <div className={styles.hero_text}>
              <ul>
                <li>
                  <section>
                    <p>Design</p>{" "}
                  </section>
                </li>
                <li>
                  <section>
                    <p>Development</p>
                  </section>
                </li>
                <li>
                  <section>
                    <p>Interactions</p>
                  </section>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.bottom_section}>
            <div className={styles.contact_email}>
              <span className={styles.email}>Contact@aniketpatel.me</span>
            </div>
            <div className={styles.bottm_hero_text}>
              <p>Web Developer: Turning coffee into code</p>
              <section className={styles.text_wrapper}>
                <p>Code is My potery</p>
              </section>
            </div>
          </section>
        </div>
        {/* <section data-scroll-container ref={ref} className={styles.photo_section}>
          <div className={styles.images} ref={imageRef}>
            <img data-scroll-section src="/Images/image2.jpeg" alt="" />
            <img data-scroll-section src="/Images/image1.jpeg" alt="" />
            <img data-scroll-section src="/Images/image6.jpeg" alt="" />
            <img data-scroll-section src="/Images/image10.jpeg" alt="" />
            <img data-scroll-section src="/Images/image7.jpeg" alt="" />
            <img data-scroll-section src="/Images/image5.jpeg" alt="" />
          </div>
        </section> */}
        <Images data-scroll-section />
        <SpecificWork data-scroll-section />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
