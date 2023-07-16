import styles from "../styles/SpecificWork.module.css";
import { gsap } from "gsap";

const SpecificWork = () => {
  const process = [
    {
      title: "Analysis",
      color: "#1D575A",
      description : "Understand the design requirements, break down the design into components, and plan the overall code structure and architecture."
    },
    {
      title: "Markup",
      color: "#82BD9D",
      description: "Write the HTML markup to structure the content and use CSS to style and layout the design elements."
    },
    {
      title: "Functionality",
      color: "#FAE38C",
      description: "Implement interactive elements using JavaScript or relevant programming languages to handle user interactions and perform required functionalities."
    },
    {
      title: "Interaction",
      color: "#F2631F",
      description: "Handling visual interactions, using CSS & JS or by using appropriate libraries"
    },
    {
      title: "Development",
      color: "#DB2724",
      description : ""
    },
    {
        title: "Testing",
        color: "#8E7857",
    }
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


  return (
    <>
      <div className={styles.SpecificWork_main}>
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
      </div>
    </>
  );
};

export default SpecificWork;
