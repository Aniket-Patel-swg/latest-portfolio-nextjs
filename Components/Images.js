import React, { useEffect, useRef } from "react";
import styles from "../styles/Images.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Images = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    let proxy = { skew: 10 },
      skewSetter = gsap.quickSetter(imageRef.current, "skewY", "deg"),
      clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 5 degrees.

    ScrollTrigger.create({
      trigger: imageRef.current,
      onUpdate: (self) => {
        // console.log("vel", self.getVelocity()) // fater we scroll fater the velocity, so that we can use it to change the skew
        let skew = clamp(self.getVelocity());

        if (Math.abs(skew) > Math.abs(proxy.skew) / -300) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 1,
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
      <section className={styles.photo_section}>
        <div className={styles.images} ref={imageRef}>
          <img src="/Images/image2.jpeg" alt="" />
          <img src="/Images/image1.jpeg" alt="" />
          <img src="/Images/image6.jpeg" alt="" />
          <img src="/Images/image10.jpeg" alt="" />
          <img src="/Images/image7.jpeg" alt="" />
          <img src="/Images/image5.jpeg" alt="" />
        </div>
        <section className={styles.profile_link}>
          <a href="/">
            Profile
            <hr />
          </a>
        </section>
      </section>
    </>
  );
};

export default Images;
