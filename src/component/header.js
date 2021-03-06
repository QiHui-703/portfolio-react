import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarCustomStyles: {
    display: "fixed",
    top: 0,
    color: "#000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopMenuItem: {
    color: "#000",
    textDecoration: "none",
    padding: "5px 7px",
  },
  desktopMenuItemSelected: {
    color: "#000",
    textDecoration: "none",
    padding: "5px 7px",
    backgroundColor: "#fff",
    borderRadius: "7px",
  },
  desktopHomeMenuItem: {
    color: "black",
    display: "flex",
    justifyItems: "center",
  },
  desktopMenuCenter: {
    display: "flex",
    justifyItems: "center",
  },
  mobileMenuItem: {
    color: "#000",
    textDecoration: "none",
    margin: "7px",
    padding: "6px 3px 0",
  },
  mobileMenuItemSelected: {
    color: "#000",
    textDecoration: "none",
    padding: "6px 3px 0",
    backgroundColor: "#F7B53B",
    margin: "7px",
    borderRadius: "7px",
  },
  mobileLink: {
    textDecoration: "none",
  },
  mobileHomeMenuItem: {
    color: "#F7B53B",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  let path = window.location.pathname;
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [currentPath, setCurrentPath] = useState(path);
  const [title, setTitle] = useState("");

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (path === "/aboutme") {
      setTitle("About???me");
    } else if (path === "/workexperience") {
      setTitle("Work???experience");
    } else if (path === "/education") {
      setTitle("Education");
    } else if (path === "/projects") {
      setTitle("Projects");
    }
  }, [path]);

  function handleClick(url, e) {
    setCurrentPath(url);
    setTitle(e.target.innerText);
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {props.info.map((item) => (
        <Link
          onClick={(e) => {
            handleClick(item.addressURL, e);
          }}
          key={item.id}
          to={item.addressURL}
          className={classes.mobileLink}
        >
          <MenuItem
            className={
              currentPath === item.addressURL
                ? classes.mobileMenuItemSelected
                : classes.mobileMenuItem
            }
            onClick={handleMobileMenuClose}
          >
            {item.title}
          </MenuItem>
        </Link>
      ))}

      <Link to="/" className={classes.mobileLink}>
        <MenuItem
          className={classes.mobileMenuItem}
          onClick={handleMobileMenuClose}
        >
          Home
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        elevation={0}
        style={{ backgroundColor: "#F7B53B" }}
        className={classes.appBarCustomStyles}
      >
        <Container maxWidth="lg">
          <Toolbar style={{ padding: 0 }}>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className={classes.desktopMenuCenter}>
                {props.info.map((item) => (
                  <Link
                    onClick={(e) => {
                      handleClick(item.addressURL, e);
                    }}
                    key={item.id}
                    to={item.addressURL}
                    className={
                      currentPath === item.addressURL
                        ? classes.desktopMenuItemSelected
                        : classes.desktopMenuItem
                    }
                  >
                    {item.title}
                  </Link>
                ))}
                <Link to="/" className={classes.desktopMenuItem}>
                  Home
                </Link>
              </div>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
