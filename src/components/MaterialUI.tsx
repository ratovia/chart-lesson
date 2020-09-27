import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    backgroundColor: "orange",
    height: "50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.typoStyle}
        noWrap
        gutterBottom
        color="secondary"
        variant="h1"
        align="left"
      >
        Hello UIHello UIHello UIHello UIHello UIHello UI
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>

      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Demo
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            Test
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="space-around">
          <Grid item xs={3}>
            ./src/App.tsx Line 3:8: 'BarPlot' is defined but never used
            @typescript-eslint/no-unused-vars Line 4:8: 'BubblePlot' is defined
            but never used @typescript-eslint/no-unused-vars Line 5:8:
            'LinePlot' is defined but never used
            @typescript-eslint/no-unused-vars Line 7:8: 'PiePlot' is defined but
            never used @typescript-eslint/no-unused-vars Line 8:8: 'RadarPlot'
            is defined but never used @typescript-eslint/no-unused-vars
          </Grid>
          <Grid item xs={3}>
            ./src/App.tsx Line 3:8: 'BarPlot' is defined but never used
            @typescript-eslint/no-unused-vars Line 4:8: 'BubblePlot' is defined
            but never used @typescript-eslint/no-unused-vars Line 5:8:
            'LinePlot' is defined but never used
            @typescript-eslint/no-unused-vars Line 7:8: 'PiePlot' is defined but
            never used @typescript-eslint/no-unused-vars Line 8:8: 'RadarPlot'
            is defined but never used @typescript-eslint/no-unused-vars
          </Grid>
          <Grid item xs={3}>
            ./src/App.tsx Line 3:8: 'BarPlot' is defined but never used
            @typescript-eslint/no-unused-vars Line 4:8: 'BubblePlot' is defined
            but never used @typescript-eslint/no-unused-vars Line 5:8:
            'LinePlot' is defined but never used
            @typescript-eslint/no-unused-vars Line 7:8: 'PiePlot' is defined but
            never used @typescript-eslint/no-unused-vars Line 8:8: 'RadarPlot'
            is defined but never used @typescript-eslint/no-unused-vars
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
