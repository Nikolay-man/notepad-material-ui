import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MoreIconMenu } from "./MoreIconMenu";
import { PersistentDrawerLeft } from "./ResponsiveDrawer";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const PrimarySearchAppBar = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static" style={{ background: red["A700"] }}>
        <Toolbar variant="dense">
          <PersistentDrawerLeft />
          <Typography variant="h6" className={styles.title} color="inherit">
            НОВОСТИ РОСГВАРДИИ
          </Typography>
          <MoreIconMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};
