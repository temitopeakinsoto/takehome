
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitFormData = async (formData) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const res = await fetch("", options);
    } catch (e) {
      console.log("There was an error with this request", e);
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    submitFormData(formValues)
      .then((respond) => {
        console.log("form successfully submitted", formValues);
      })
      .catch((e) => {
        console.log("There was an error with this process", e);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form
          onSubmit={handleFormSubmission}
          className={classes.form}
          noValidate
        >
          <TextField
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fname"
            label="First Name"
            name="fname"
            autoComplete="fname"
            autoFocus
          />
          <TextField
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lname"
            label="Last Name"
            type="lname"
            id="lname"
            autoComplete="lname"
          />
          <TextField
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="email"
            type="email"
            id="email"
            autoComplete="email"
          />
          <TextField
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Don't have an account? Please Login"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
