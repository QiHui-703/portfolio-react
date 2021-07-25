import { Box, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles({
  box: {
    height: "100vh",
  },
  landingPageMainText: {
    fontSize: "3rem",
  },
  landingPageSubText: {
    fontSize: "2rem",
  },
  flexBox: {
    display: "flex",
    flexDirection: "column",
  },
  chevronStyles: {
    margin: 0,
  },
  listBulletStyles: {
    listStyleType: "none",
    marginTop: "5rem",
    padding: 0,
  },
  button: {
    color: "#BA324F",
    marginTop: "4rem",
  },
});

const items = [1, 2, 3];

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.5,
    transition: {
      delay: 0.5,
    },
  },
};

const spring = {
  type: "spring",
  damping: 100,
  stiffness: 1000,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function LandingPage() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.box}
    >
      <motion.h1
        className={classes.landingPageMainText}
        whileHover={{ scale: 1.5 }}
        transition={spring}
      >
        Hello there...
      </motion.h1>

      <motion.h2
        className={classes.landingPageSubText}
        initial="hidden"
        animate="visible"
        variants={variants}
        whileHover={{ scale: 1.2, opacity: 1 }}
        transition={spring}
      >
        Welcome to my portfolio!
      </motion.h2>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className={classes.listBulletStyles}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={listItem}
            animate={{}}
            transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
            className={classes.chevronStyles}
          >
            <KeyboardArrowDownIcon style={{ fontSize: 50 }} />
          </motion.div>
        ))}
      </motion.ul>
    </Box>
  );
}

export default LandingPage;
