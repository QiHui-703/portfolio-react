import { Container, makeStyles } from "@material-ui/core";
import workExperienceInfo from "../data/work-experience-info";

const useStyles = makeStyles((theme) => ({
  divStyle: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    marginTop: "10vh",
    marginBottom: "10vh",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  nestedDivStyle: {
    textAlign: "justify",
    maxWidth: "50rem",
    display: "flex",
    flexDirection: "column",
    marginTop: "5vh",
    marginBottom: "5vh",
  },
  companyLogoStyle: {
    maxWidth: "150px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100px",
    },
  },
  marginPaddingReduced: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  boldSectionTitle: {
    fontWeight: "700",
  },
}));

function WorkExperience() {
  const classes = useStyles();

  return (
    <div className={classes.divStyle}>
      <Container className={classes.containerStyle}>
        {workExperienceInfo.map((item, index) => (
          <div className={classes.nestedDivStyle}>
            <img
              src={require(`../images/${item.logoReference}`).default}
              alt="company logo"
              className={classes.companyLogoStyle}
            />
            <p>{item.logo}</p>
            <h2 className={classes.marginPaddingReduced}>{item.companyName}</h2>
            <h3 className={classes.marginPaddingReduced}>{item.jobTitle}</h3>
            <h3 className={classes.marginPaddingReduced}>{item.duration}</h3>
            {item.technicalSkills ? (
              <div>
                <p className={classes.boldSectionTitle}>Technical Skills</p>
                {item.technicalSkills.map((technicalSkillsListItem, index) => (
                  <li>{technicalSkillsListItem}</li>
                ))}
              </div>
            ) : (
              ""
            )}

            {item.jobResponsibilities ? (
              <div>
                <p className={classes.boldSectionTitle}>Job Responsibilities</p>
                {item.jobResponsibilities.map(
                  (jobResponsibilitiesListItem, index) => (
                    <li>{jobResponsibilitiesListItem}</li>
                  )
                )}
              </div>
            ) : (
              ""
            )}

            {item.keyAchievement ? (
              <div>
                <p className={classes.boldSectionTitle}>Key Achievements</p>
                {item.keyAchievement.map((keyAchievement, index) => (
                  <li>{keyAchievement}</li>
                ))}
              </div>
            ) : (
              ""
            )}

            {item.nonWorkRelatedVolunteeringActivities ? (
              <div>
                <p className={classes.boldSectionTitle}>
                  Volunteering Activity
                </p>
                {item.nonWorkRelatedVolunteeringActivities.map(
                  (nonWorkRelatedVolunteeringActivitiesListItem, index) => (
                    <li>{nonWorkRelatedVolunteeringActivitiesListItem}</li>
                  )
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </Container>
    </div>
  );
}

export default WorkExperience;
