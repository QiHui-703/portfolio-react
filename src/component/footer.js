import { makeStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  mainDiv: {
    backgroundColor: "#F7B53B",
    color: "#000",
    height: "15vh",
    position: "static",
    maxwidth: "100vw",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  bottomTextStyle: {
    textAlign: "center",
  },
  contactIconLayout: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  contactIconStyle: {
    color: "#000",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.bottomTextStyle}>
        <p>Contact:</p>
        <a
          href="https://www.linkedin.com/in/qihuing/"
          rel="noreferrer"
          target="_blank"
          className={classes.contactIconStyle}
        >
          <LinkedInIcon className={classes.contactIconLayout} />
        </a>
        <a
          href="mailto:qihui1995@gmail.com"
          className={classes.contactIconStyle}
        >
          <EmailIcon className={classes.contactIconLayout} />
        </a>
        <a href="tel:+6598618735" className={classes.contactIconStyle}>
          <PhoneIcon className={classes.contactIconLayout} />
        </a>
        <a
          href="https://github.com/QiHui-703"
          rel="noreferrer"
          target="_blank"
          className={classes.contactIconStyle}
        >
          <GitHubIcon className={classes.contactIconLayout} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
