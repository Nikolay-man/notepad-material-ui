import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[600],
    "&:hover": {
      backgroundColor: red["A700"],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const AppButtons = (props) => {
  const styles = useStyles();

  return (
    <div style={{ margin: 40 }}>
      <ColorButton
        variant="contained"
        className={styles.margin}
        startIcon={<AddCircleOutlineIcon />}
        disableElevation
        onClick={(event) => props.onAdd(event.currentTarget)}
      >
        Добавить новость
      </ColorButton>
      <ColorButton
        variant="contained"
        className={styles.margin}
        startIcon={<DeleteIcon />}
        disabled={props.itemsChecked.length === 0}
        onClick={() => props.onDelete()}
      >
        Удалить новость
      </ColorButton>
      <ColorButton
        href="https://newssearch.yandex.com/yandsearch?text=%D0%A0%D0%BE%D1%81%D0%B3%D0%B2%D0%B0%D1%80%D0%B4%D0%B8%D1%8F&rpt=nnews2&grhow=clutop&nsbr=1"
        variant="contained"
        className={styles.margin}
        startIcon={<ArrowForwardIcon />}
        disableElevation
      >
        Яндекс новости
      </ColorButton>
      <Fab
        style={{
          position: "fixed",
          right: 50,
          bottom: 20,
          backgroundColor: red["A700"],
        }}
        size="medium"
        color="primary"
        aria-label="add"
        onClick={() => props.openModal()}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
