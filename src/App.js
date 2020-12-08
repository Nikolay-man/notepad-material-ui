import React from "react";
import { AppButtons } from "./component/ContainedButtons";
import { NewsList } from "./component/NewsList";
import { PrimarySearchAppBar } from "./component/PrimarySearchAppBar";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import { AppForm } from "./component/Form";
import { red } from "@material-ui/core/colors";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CloseIcon from "@material-ui/icons/Close";

export default class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isPopoverOpen: false,
      popoverElement: null,
      isModalOpen: false,
      isSnackbarOpen: false,
      selectedDate: new Date(),
      itemsList: [
        {
          news: "Заголовок новости 1",
          description: "Текст новости 1",
          checked: false,
        },
        {
          news: "Заголовок новости 2",
          description: "Текст новости 2",
          checked: false,
        },
        {
          news: "Заголовок новости 3",
          description: "Текст новости 3",
          checked: false,
        },
      ],
    };
  }

  onAdd(item) {
    let itemsList = this.state.itemsList;
    itemsList.push(item);
    this.setState({ itemsList, isPopoverOpen: false });
  }

  render() {
    return (
      <div>
        <PrimarySearchAppBar />
        <AppButtons
          itemsChecked={this.state.itemsList
            .map((i) => i.checked)
            .filter((i) => i)}
          onDelete={() => {
            let itemsList = this.state.itemsList.filter((i) => !i.checked);
            this.setState({ itemsList });
          }}
          onAdd={(popoverElement) => {
            this.setState({ popoverElement, isPopoverOpen: true });
          }}
          openModal={() => this.setState({ isModalOpen: true })}
        />
        <Popover
          open={this.state.isPopoverOpen}
          anchorEl={this.state.popoverElement}
          onClose={() => this.setState({ isPopoverOpen: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <AppForm onAdd={this.onAdd.bind(this)} />
        </Popover>
        <NewsList
          items={this.state.itemsList}
          onChange={(checked, index) => {
            let { itemsList } = this.state;
            itemsList[index].checked = checked;
            this.setState({ itemsList });
          }}
        />
        <Dialog
          open={this.state.isModalOpen}
          onClose={() => this.setState({ isModalOpen: false })}
        >
          <DialogTitle>Выберать дату</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-inline"
                    format="MM.dd.yyyy"
                    value={this.state.selectedDate}
                    onChange={(nothing, selectedDate) =>
                      this.setState({ selectedDate, isSnackbarOpen: true })
                    }
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ isModalOpen: false })}
              style={{ color: red["A700"] }}
            >
              Сохранить дату
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={this.state.isSnackbarOpen}
          autoHideDuration={5000}
          onClose={() => this.setState({ isSnackbarOpen: false })}
          message={"" + this.state.selectedDate}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => this.setState({ isSnackbarOpen: false })}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}
