import { Container, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profilePicture from "../images/qihui.jpg";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles((theme) => ({
  divStyle: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    textAlign: "center",
    marginTop: "10vh",
    marginBottom: "10vh",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  extraLarge: {
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  paragraphStyle: {
    lineHeight: "1.5rem",
    fontWeight: "700",
    color: "#4E5340",
  },
  aboutDescriptionContainerStyle: {
    width: "50vw",
    lineHeight: "1.5rem",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.divStyle}>
      <Container
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="QiHui"
          src={profilePicture}
          className={classes.extraLarge}
        />
      </Container>
      <Container>
        <div className={classes.paragraphStyle}>
          <p>Process Engineer • April'2018 to present</p>
          <p>
            Chemical Engineering Undergraduate • Class of 2018
            <SchoolIcon fontSize="small" />
          </p>
          <p>Malaysian • Penangite</p>
        </div>
      </Container>
      <Container className={classes.aboutDescriptionContainerStyle}>
        <p>
          Approximately 3.5 years of working experience in manufacturing floor,
          continuous improving process flow for better product quality and
          minimize operating cost
        </p>
        <br />
        <p>Always seeking opportunities to enhance my career and development</p>
        <br />
        <p>
          A motivated and positive individual with an enthusiastic personality
          towards works and life
        </p>
        <br />
        <p>Always seeking opportunities to enhance my career and development</p>
        <br />
        <p>Eager to learn</p>
      </Container>
    </div>
  );
}

export default AboutMe;
