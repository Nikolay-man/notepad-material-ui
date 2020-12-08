import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SvgIcon from "@material-ui/core/SvgIcon";
import red from "@material-ui/core/colors/red";
import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 50,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  colorRed: {
    color: red["A700"],
  },
}));

export const PersistentDrawerLeft = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const HomeIcon = (props) => {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={styles.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        styles={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <HomeIcon className={styles.colorRed} />
          </ListItemIcon>
          Главная
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon className={styles.colorRed} />
          </ListItemIcon>
          О нас
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CallIcon className={styles.colorRed} />
          </ListItemIcon>
          Контакты
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon className={styles.colorRed}>add_circle</EmailIcon>
          </ListItemIcon>
          Написать нам
        </ListItem>
      </Drawer>
    </div>
  );
};
