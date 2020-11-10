import React, { useState } from "react";

import { API, Auth } from "aws-amplify";
import { createAppointment } from "../../graphql/mutations";

import moment from "moment";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";

import useGetUser from "../../hooks/useGetUser";

import useStyles from "./Styles";

const HomePage = ({ history }) => {
  const classes = useStyles();
  const { user, items, setItems } = useGetUser();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [loc, setloc] = useState("");

  const handleSubmit = async () => {
    if (date && title) {
      try {
        const { username } = await Auth.currentAuthenticatedUser();

        const dateFormatted = new Date(date).toISOString();
        console.log(dateFormatted);

        const { data } = await API.graphql({
          query: createAppointment,
          variables: {
            input: {
              idCreator: username,
              title,
              date: dateFormatted,
              location: loc,
            },
          },
        });

        console.log(data);
        setItems(items.concat([data.createAppointment]));
        setloc("");
        setTitle("");
        setDate("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log("user", user);
  return (
    <Box m={4} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="inherit">Appointments</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <Typography color="textSecondary">Welcome {user.email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={12} lg={4} xl={4}>
              <TextField
                id="outlined-basic"
                label="Reason of Appointment"
                variant="outlined"
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={classes.textfield}
              />
            </Grid>
            <Grid item sm={12} md={12} lg={3} xl={3}>
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                size="small"
                value={loc}
                onChange={(e) => setloc(e.target.value)}
                className={classes.textfield}
              />
            </Grid>
            <Grid item sm={12} md={12} lg={3} xl={3}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={classes.textfield}
              />
            </Grid>
            <Grid item xs={2} className={classes.centered}>
              <Button variant="outlined" onClick={handleSubmit}>
                Create Appointment
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.centered}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title (Course or main topic)</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.title}
                    </TableCell>
                    <TableCell align="right">{item.location}</TableCell>
                    <TableCell align="right">
                      {moment(item.date).format("MMM Do YY")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

/*

value={todo}
onChange={onTodoChange}



onClick={onAdd}
*/
