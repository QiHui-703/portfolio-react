import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import homePageInfo from "../data/home-page-info";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  mainBox: {
    minHeight: "100vh",
    backgroundColor: "#fff",
    lineHeight: "1.5rem",
  },
  root: {
    minWidth: "270px",
    backgroundColor: "#F7B53B",
    borderRadius: "20px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  cardParent: {
    opacity: 0.7,
    width: "50%",
    padding: 0,
    margin: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  pos: {
    marginBottom: 12,
    fontFamily: "Overpass",
    fontWeight: "700",
    letterSpacing: "0.2rem",
    color: "#764E05",
  },
  pText: {
    fontWeight: "500",
  },
  hyperlinkStyles: {
    textDecoration: "none",
    fontWeight: "600",
    paddingLeft: "10px",
  },
});

const spring = {
  type: "spring",
  damping: 100,
  stiffness: 1000,
};

function HomePage() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      className={classes.mainBox}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Grid
        container
        style={{
          margin: 0,
        }}
      >
        {homePageInfo.map((item, i) => {
          return (
            <Grid
              key={item.id}
              item
              xs={12}
              md={6}
              lg={3}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, opacity: 1 }}
                whileTap={{ scale: 1.1, opacity: 1 }}
                transition={spring}
                className={classes.cardParent}
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link to={item.addressURL} className={classes.hyperlinkStyles}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography variant="h5" className={classes.pos}>
                        {item.title}
                      </Typography>
                      <p className={classes.pText}>{item.quote}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default HomePage;
