import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import FiberNewIcon from "@material-ui/icons/FiberNew";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 40,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const NewsList = (props) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <List>
        {props.items.map((item, key) => {
          return (
            <div key={key}>
              <ListItem button>
                <ListItemIcon>
                  <FiberNewIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={item.news}
                  secondary={item.description}
                />
                <ListItemIcon>
                  <Checkbox
                    color="default"
                    checked={item.checked}
                    onChange={(event, isInputChecked) =>
                      props.onChange(isInputChecked, key)
                    }
                  />
                </ListItemIcon>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
};
