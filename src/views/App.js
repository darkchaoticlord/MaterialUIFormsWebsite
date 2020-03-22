import React from "react"

import { withStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const styles = theme => ({
  header: {
    textAlign: "center"
  }
})

class App extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.header}>
        <Typography variant="h1">
          Hello World!
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(App)
