import { Container, makeStyles, Button } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import EducationInfo from "../data/education-info";
import { TimelineOppositeContent } from "@material-ui/lab";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    alignSelf: "center",
    marginTop: "5vh",
    maxWidth: "60rem",
  },
  h3Custom: {
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },
  h3CustomMobile: {
    fontWeight: "700",
  },
  anchorStyle: {
    textDecoration: "none",
    color: "white",
  },
  divWithTopMargin: {
    marginTop: "50px",
  },
}));

function Education() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container className={classes.containerStyle}>
      <div className={classes.divStyle}>
        {!matches ? (
          <div>
            {EducationInfo.map((item) => (
              <Timeline align="alternate">
                <TimelineItem>
                  <TimelineOppositeContent>
                    <h3 className={classes.h3Custom}>{item.courseDuration}</h3>
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <p className={classes.h3Custom}>{item.schoolName}</p>
                    <p>{item.courseTitle}</p>
                    <p>{item.grade}</p>

                    {item.academicAwards
                      ? item.academicAwards.map((item) => <li>{item}</li>)
                      : ""}

                    {item.publicationDetails ? (
                      <div>
                        <h4>Publication</h4>
                        {item.publicationDetails.map((item) => (
                          <div>
                            <p>{item.articleTitle}</p>
                            <p>
                              Published by {item.publisher},{" "}
                              {item.publicationDate}
                            </p>
                            <Button variant="contained" color="secondary">
                              <a
                                target="_blank"
                                href={item.reference}
                                className={classes.anchorStyle}
                              >
                                Link to article
                              </a>
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            ))}
          </div>
        ) : (
          <div>
            {EducationInfo.map((item) => (
              <div className={classes.divWithTopMargin}>
                <h3 className={classes.h3CustomMobile}>
                  {item.courseDuration}
                </h3>
                <p className={classes.h3CustomMobile}>{item.schoolName}</p>
                <p>{item.courseTitle}</p>
                <p>{item.grade}</p>
                {item.academicAwards
                  ? item.academicAwards.map((item) => <p>{item}</p>)
                  : ""}
                {item.publicationDetails ? (
                  <div>
                    <h4>Publication</h4>
                    {item.publicationDetails.map((item) => (
                      <div>
                        <p>{item.articleTitle}</p>
                        <p>
                          Published by {item.publisher}, {item.publicationDate}
                        </p>
                        <Button variant="contained" color="secondary">
                          <a
                            target="_blank"
                            href={item.reference}
                            className={classes.anchorStyle}
                          >
                            Link to article
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}{" "}
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default Education;
