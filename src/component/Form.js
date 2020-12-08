import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: red[600],
    },
  },
});

export class AppForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      news: "",
      description: "",
      errors: {
        news: "",
        description: "",
        error: "",
      },
    };
  }

  render() {
    const styles = {
      popover: {
        width: 300,
        margin: 10,
      },
    };

    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <TextField
              label="Заголовок новости"
              variant="outlined"
              multiline
              rowsMax={3}
              style={styles.popover}
              color="secondary"
              error={this.state.errors.error}
              helperText={this.state.errors.news}
              onChange={(event, news) =>
                this.setState({ news: event.target.value })
              }
            />
          </div>
          <div>
            <TextField
              label="Текст новости"
              variant="outlined"
              multiline
              rowsMax={3}
              style={styles.popover}
              color="secondary"
              error={this.state.errors.error}
              helperText={this.state.errors.description}
              onChange={(event, description) =>
                this.setState({ description: event.target.value })
              }
            />
          </div>
          <div>
            <Button
              variant="outlined"
              color="secondary"
              style={styles.popover}
              onClick={this.onAdd.bind(this)}
            >
              Добавить новость
            </Button>
          </div>
        </ThemeProvider>
      </div>
    );
  }
  onAdd() {
    let errors = {};

    if (!this.state.news) {
      errors.news = "Добавте заголовок новости";
      errors.error = true;
    }
    if (!this.state.description) {
      errors.description = "Добавте текст новости";
      errors.error = true;
    }

    if (errors.name || errors.description) {
      this.setState({ errors });
      return;
    }
    this.props.onAdd({
      news: this.state.news,
      description: this.state.description,
      checked: false,
    });
    this.setState({
      news: "",
      description: "",
      errors: {
        news: "",
        description: "",
        error: "",
      },
    });
  }
}
