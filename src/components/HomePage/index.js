import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import useStyles from "./Styles";

const HomePage = ({ history }) => {
  const classes = useStyles();

  return (
    <Box m={4} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="inherit">Home Page</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <Box p={4} className={classes.header}>
            Bienvenido al Sistema de Apartado de Salones!
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.centered}>
          <Link href="/app/appointments">
            <Button variant="outlined" color="primary">
              ¡Inicia Sesión para comenzar!
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
