import { Container, makeStyles, Box, Button, Grid } from "@material-ui/core";
import ProjectInfo from "../data/project-info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  divStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: "10vh",
    marginBottom: "10vh",
    // backgroundColor: "grey",
  },
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: "5vh",
    maxWidth: "60rem",
  },
  nestedDivStyle: {
    textAlign: "center",
    maxWidth: "80vw",
    display: "flex",
    flexDirection: "row",
    marginTop: "5vh",
    marginBottom: "5vh",
    // backgroundColor: "yellow",
  },
  projectBox: {
    // backgroundColor: "green",
    margin: "10px",
    minHeight: "300px",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    minWidth: "20rem",
    maxWidth: "50rem",
    color: "black",
  },
  projectTitleContainerStyle: {
    // backgroundColor: "blue",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  projectContentStyle: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skillDiv: {
    marginBottom: "20px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    width: "10rem",
  },
  linkButtonURL: {
    color: "#fff",
    textDecoration: "none",
  },
  iconStyle: {
    paddingRight: "10px",
  },
  stackDivStyle: {
    display: "flex",
    justifyItems: "center",
    paddingTop: "2px",
    paddingBottom: "2px",
  },
  nestedParagraphStyle: {
    margin: 0,
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    //grey
    <Container className={classes.divStyle}>
      {/* yellow */}
      <Grid
        container
        className={classes.nestedDivStyle}
        justifyContent="space-around"
      >
        {ProjectInfo.map((item) => (
          // green
          <Grid item>
            {/* blue */}
            <Box className={classes.projectBox} boxShadow={3}>
              <Box className={classes.projectTitleContainerStyle}>
                <h3>{item.projectTitle}</h3>
              </Box>
              <Box>
                <p>• • • • •</p>
              </Box>
              <Box className={classes.projectContentStyle}>
                <h4>Stack</h4>
                <div className={classes.skillDiv}>
                  {item.codingSkill.map((item) => (
                    <div className={classes.stackDivStyle}>
                      <CheckCircleIcon
                        fontSize="small"
                        className={classes.iconStyle}
                      />
                      <p className={classes.nestedParagraphStyle}>{item}</p>
                    </div>
                  ))}
                </div>
                <Button variant="contained" color="primary">
                  <a
                    target="_blank"
                    href={item.websiteURL}
                    className={classes.linkButtonURL}
                  >
                    Link to webpage
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
