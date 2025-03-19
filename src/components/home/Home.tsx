import { Button } from "@mui/material";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.box} ${styles.box1}`}>
        <h1 className={styles.heading}>TypeWavePro</h1>
        {/* <h2 className={styles.heading2}>
          Your Path to Faster, More Accurate Typing with Customizable Tests and
          Engaging Topics!
        </h2> */}
        <h2 className={styles.heading2}>Boost Speed & Accuracy</h2>
        <h2 className={styles.heading2}>Engaging Topics & Tests</h2>

        <p className={styles.paragraph}>
          Enhance your typing skills with personalized typing tests, choose
          variety of topics and become a typing master to improve typing speed
          and accuracy.
        </p>
        {/* <h1>Master Typing with Personalized Tests</h1> */}
        {/* <p>
          TypeWavePro helps you improve your typing speed and accuracy with
          personalized tests and a variety of topics. Whether you're a beginner
          or experienced typist, enhance your skills and track your progress in
          a fun, engaging way.
        </p> */}
        <div className={styles.buttons}>
          <Button
            variant="contained"
            color="secondary"
            href="#text-buttons"
            sx={{
              textTransform: "none",
              padding: {
                xs: "4px 16px", // Smaller padding on extra-small screens
                sm: "6px 20px", // Medium padding on small screens
                md: "8px 24px", // Larger padding on medium screens and up
              },
              fontSize: {
                xs: "14px", // Smaller font size on extra-small screens
                sm: "16px", // Default font size on small screens
                md: "18px", // Larger font size on medium screens and up
              },
              letterSpacing: "0.05rem", // Adds some spacing between letters
              border: "2px solid black",
            }}
          >
            Sign up – It's free!
          </Button>

          <Button
            variant="contained"
            color="primary"
            href="#text-buttons"
            sx={{
              textTransform: "none",
              padding: {
                xs: "4px 16px", // Smaller padding on extra-small screens
                sm: "6px 20px", // Medium padding on small screens
                md: "8px 24px", // Larger padding on medium screens and up
              },
              fontSize: {
                xs: "14px", // Smaller font size on extra-small screens
                sm: "16px", // Default font size on small screens
                md: "18px", // Larger font size on medium screens and up
              },
              letterSpacing: "0.05rem", // Adds some spacing between letters
              border: "2px solid white",
            }}
          >
            Continue without sign up
          </Button>
        </div>
      </div>

      <div className={`${styles.box} ${styles.box2}`}>
        This Box renders as an HTML section element.
      </div>
    </section>
  );
};

export default Home;
