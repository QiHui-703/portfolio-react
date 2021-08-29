import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AboutMe from "./component/about-me";
import Education from "./component/education";
import HomePage from "./component/home-page";
import LandingPage from "./component/landing-page";
import Projects from "./component/projects";
import WorkExperience from "./component/work-experience";
import homePageInfo from "./data/home-page-info";
import Header from "./component/header";
import Footer from "./component/footer";
import ScrollToTop from "./component/scrollToTop";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto Condensed",
      letterSpacing: "0.1rem",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <LandingPage />
            <HomePage />
          </Route>
          <Route path="/aboutme">
            <Header info={homePageInfo} />
            <AboutMe />
            <Footer />
          </Route>
          <Route path="/workexperience">
            <Header info={homePageInfo} />
            <WorkExperience />
            <Footer />
          </Route>
          <Route path="/education">
            <Header info={homePageInfo} />
            <Education />
            <Footer />
          </Route>
          <Route path="/projects">
            <Header info={homePageInfo} />
            <Projects />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
