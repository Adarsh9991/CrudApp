import {
  Button,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";

function AddUser() {
  const [addForm, setAddForm] = useState({
    name: "",
    userName: ",",
    email: "",
    password: "",
  });

  //FUNCTION

  const handleOnChange = (e) =>{
    const {name,value}= e.target
    setAddForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }
console.log(addForm)

  return (
    <Fragment>
      <FormGroup className="userForm">
        <Typography variant="h4">Add Users</Typography>
        <FormControl>
          <TextField
            name="name"
            className="mt-2 "
            variant="standard"
            label="Name"
            onChange={handleOnChange}
          />
          <TextField
            name="userName"
            className="mt-2 "
            variant="standard"
            label="UserName"
            onChange={handleOnChange}

          />
          <TextField
            name="email"
            className="mt-2 "
            variant="standard"
            label="Email"
            onChange={handleOnChange}

          />
          <TextField
            name="password"
            type="password"
            className="mt-2 "
            variant="standard"
            label="Password"
            onChange={handleOnChange}

          />
          <Button className="mt-4" variant="contained">
            Submit Data
          </Button>
        </FormControl>
      </FormGroup>
    </Fragment>
  );
}

export default AddUser;
