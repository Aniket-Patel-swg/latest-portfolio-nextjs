import react, { useState, useRef, useEffect } from "react";
import styles from "../styles/SpecificWork.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SpecificWork = () => {
  let refs = useRef([]);
  const container = useRef(null);

  useEffect(()=>{
    createAnimations();
  })
  
  const process = [
    {
      title: "Analysis",
      color: "#1D575A",
      description:
        "Understand the design requirements, break down the design into components, and plan the overall code structure and architecture.",
    },
    {
      title: "Markup",
      color: "#82BD9D",
      description:
        "Write the HTML markup to structure the content and use CSS to style and layout the design elements.",
    },
    {
      title: "Functionality",
      color: "#FAE38C",
      description:
        "Implement interactive elements using JavaScript or relevant programming languages to handle user interactions and perform required functionalities.",
    },
    {
      title: "Interaction",
      color: "#F2631F",
      description:
        "Handling visual interactions, using CSS & JS or by using appropriate libraries",
    },
    {
      title: "Development",
      color: "#DB2724",
      description:
        "Developing website with faster technologies to meet the user experience requirements",
    },
    {
      title: "Testing",
      color: "#8E7857",
      description:
        "Testing visual interactions and functionalities requried in website",
    },
  ];

  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-1.5vw",
      backgroundColor: process[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  const phrase = "I create website from nothing into existance, fully formed. Turning each pixel into harmonious user experience.";

  const splitWords = (phras) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  const createAnimations = () =>{
    gsap.to(refs.current,{
      opacity: 1,
      ease: "none",
      stagger : 0.3,
      scrollTrigger :{
        trigger: container.current,
        start : "top",
        end : `+=${window.innerHeight / 1.5}`,
        markers: false,
        scrub : true
      }
    })
  }
  return (
    <>
      <div ref={container} className={styles.SpecificWork_main}>
        <h1>
          Bridging gap between <em>Design</em> & <br /> <b>Code</b>{" "}
        </h1>
        <div className={styles.projectContainer}>
          {process.map((process, index) => {
            return (
              <div
                onMouseEnter={(e) => {
                  manageMouseEnter(e, index);
                }}
                onMouseLeave={(e) => {
                  manageMouseLeave(e, index);
                }}
                key={index}
              >
                <p>{process.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.phrase_effect}>
         {
          splitWords()
        } 
        </div>
        <section className={styles.contact_link}>
          <a href="">
            Contact Me
            <hr />
          </a>
        </section>
      </div>
    </>
  );
};

export default SpecificWork;
