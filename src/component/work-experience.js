import { Container, makeStyles } from "@material-ui/core";
import workExperienceInfo from "../data/work-experience-info";

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
  },
  nestedDivStyle: {
    textAlign: "justify",
    maxWidth: "60rem",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: "5vh",
    marginBottom: "5vh",
  },
}));

function WorkExperience() {
  const classes = useStyles();

  return (
    <div className={classes.divStyle}>
      <Container className={classes.containerStyle}>
        {workExperienceInfo.map((item, index) => (
          <div className={classes.nestedDivStyle}>
            <h1>{item.companyName}</h1>
            <h2>{item.jobTitle}</h2>
            <h3>{item.duration}</h3>
            <p>Technical Skills</p>
            <p>
              {item.technicalSkills.map((technicalSkillsListItem, index) => (
                <li>{technicalSkillsListItem}</li>
              ))}
            </p>
            <p>Job Responsibilities</p>
            <p>
              {item.jobResponsibilities.map(
                (jobResponsibilitiesListItem, index) => (
                  <li>{jobResponsibilitiesListItem}</li>
                )
              )}
            </p>
            <p>Key Achievements</p>
            <p>
              {item.keyAchievement.map((keyAchievementListItem, index) => (
                <li>{keyAchievementListItem}</li>
              ))}
            </p>
            <p>Volunteering Activity</p>
            <p>
              {item.nonWorkRelatedVolunteeringActivities.map(
                (nonWorkRelatedVolunteeringActivitiesListItem, index) => (
                  <li>{nonWorkRelatedVolunteeringActivitiesListItem}</li>
                )
              )}
            </p>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default WorkExperience;
