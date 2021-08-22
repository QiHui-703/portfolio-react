import { Container, makeStyles } from "@material-ui/core";
import ProjectInfo from "../data/project-info";

const useStyles = makeStyles((theme) => ({
  divStyle: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    marginTop: "10vh",
    marginBottom: "10vh",
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
    maxWidth: "50rem",
    display: "flex",
    flexDirection: "column",
    marginTop: "5vh",
    marginBottom: "5vh",
    alignSelf: "center",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <Container className={classes.divStyle}>
      <div className={classes.nestedDivStyle}>
        {ProjectInfo.map((item) => (
          <div>
            <p>{item.projectTitle}</p>
            <a href={item.websiteURL}>Link to webpage</a>
            <div>
              {item.codingSkill.map((item) => (
                <li>{item}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Projects;
