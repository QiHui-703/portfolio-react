import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
    color: "#fff",
    textDecoration: "none",
    margin: "7px",
    padding: "6px 3px 0",
  },
  desktopMenuItemSelected: {
    color: "#000",
    textDecoration: "none",
    padding: "6px 3px 0",
    backgroundColor: "#fff",
    margin: "7px",
    borderRadius: "7px",
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
      setTitle("About•me");
    } else if (path === "/workexperience") {
      setTitle("Work•experience");
    } else if (path === "/education") {
      setTitle("Education");
    } else if (path === "/projects") {
      setTitle("Projects");
    }
  }, [path]);

  function handleClick(url, e) {
    setCurrentPath(url);
    setTitle(e.target.text);
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
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "#6E877F" }}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            {title}
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
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
              <HomeIcon />
            </Link>
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
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
