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
  },
  extraLarge: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  paragraphStyle: {
    lineHeight: "2rem",
  },
  aboutDescriptionContainerStyle: {
    width: "40vw",
    lineHeight: "2rem",
    textAlign: "justify",
    marginTop: "50px",
    marginBottom: "50px",
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
          ••• Approximately 3.5 years of working experience in manufacturing
          floor, continuous improving process flow for better product quality
          and minimize operating cost ••• A motivated and positive individual
          with an enthusiastic personality towards works and life ••• Always
          seeking opportunities to enhance my career and development ••• Eager
          to learn
        </p>
      </Container>
    </div>
  );
}

export default AboutMe;
