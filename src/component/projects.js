import { Container, makeStyles, Box, Button, Grid } from "@material-ui/core";
import ProjectInfo from "../data/project-info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Block } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  rootDiv: {
    display: "flex",
    justifyContent: "center",
  },
  divStyle: {
    minHeight: "100vh",
    marginTop: "10vh",
    marginBottom: "15vh",
    maxWidth: "80vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  outerDiv: {
    margin: "5rem 0",
  },
  innerDivStyle: {
    display: "inline-block",
    textAlign: "center",
    minWidth: "6rem",
    margin: "1rem 0",
  },
  logoStyle: {
    maxHeight: "50px",
  },
  anchorStyle: {
    textDecoration: "none",
    color: "white",
  },
  buttonBlock: {
    display: "block",
  },
  buttonPosition: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.rootDiv}>
      <div className={classes.divStyle}>
        {ProjectInfo.map((item) => (
          <div className={classes.outerDiv}>
            <h3>{item.projectTitle}</h3>
            <p>{item.projectDescription}</p>
            <h4>Stack: </h4>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {item.codingSkill.map((stack) => (
                <Grid
                  item
                  className={classes.innerDivStyle}
                  spacing={5}
                  md={4}
                  lg={3}
                  xs={6}
                >
                  <img
                    src={require(`../images/${stack.stackLogo}`).default}
                    alt="stack logo"
                    className={classes.logoStyle}
                  />
                  <p>{stack.stackDescription}</p>
                </Grid>
              ))}
            </Grid>
            <div className={classes.buttonPosition}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonBlock}
              >
                <a
                  target="_blank"
                  href={item.websiteURL}
                  className={classes.anchorStyle}
                >
                  Link to webpage
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
