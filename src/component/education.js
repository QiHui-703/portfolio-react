import { Container, makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import EducationInfo from "../data/education-info";
import { TimelineOppositeContent } from "@material-ui/lab";

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
}));

function Education() {
  const classes = useStyles();

  return (
    <Container className={classes.containerStyle}>
      <div className={classes.divStyle}>
        <div>
          {EducationInfo.map((item) => (
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <h3>{item.courseDuration}</h3>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <p>{item.schoolName}</p>
                  <p>{item.courseTitle}</p>
                  <p>{item.grade}</p>

                  {item.academicAwards
                    ? item.academicAwards.map((item) => <li>{item}</li>)
                    : ""}

                  {item.publicationDetails
                    ? item.publicationDetails.map((item) => (
                        <div>
                          <p>{item.articleTitle}</p>
                          <p>
                            Published by {item.publisher},{" "}
                            {item.publicationDate}
                          </p>
                          <a href={item.reference}>Link to article</a>
                        </div>
                      ))
                    : ""}
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Education;
