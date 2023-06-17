import * as React from "react";
import { addDoc } from "firebase/firestore";

import {
  Grid,
  TextField,
  Button,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Container,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { colRef } from "../firebase";

type FormData = {
  name?: string | undefined;
  lastName?: string | undefined;
  age?: number | undefined;
  gender?: string;
  number?: number | undefined;

  date?: number | undefined;
  district?: string | undefined;
  address?: string | undefined;
};

export default function UserForm(user: FormData) {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: user,
  });

  const onSubmit = (data: FormData) => {
    addDoc(colRef, { data }).then(() => {
      alert("Submitted");
    });
    reset();
  };

  const [gender, setGender] = React.useState(user.gender);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  let currentDate = new Date().toLocaleDateString();

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            marginTop={10}
            marginBottom={9}
          >
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={10}>
                <h1
                  style={{
                    textTransform: "uppercase",
                    paddingBottom: "16px",
                    fontWeight: "lighter",
                    letterSpacing: "2px",
                    textAlign: "center",
                  }}
                >
                  Fill Your Details
                </h1>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  {...register("name")}
                  label="Name"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  {...register("lastName")}
                  label="LastName"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    sx={{ minWidth: 100 }}
                    {...register("gender", { onChange: handleChange })}
                    value={gender}
                  >
                    <MenuItem value="male">Male</MenuItem>

                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item width={150}>
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  label="Age"
                  {...register("age")}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  label="Number"
                  {...register("number")}
                ></TextField>
              </Grid>
              <Grid item width={150}>
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  label="Date"
                  {...register("date")}
                  value={currentDate}
                ></TextField>
              </Grid>
              <Grid item maxWidth={180}>
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  label="District"
                  {...register("district")}
                ></TextField>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  {...register("address")}
                  label="Address"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={9}>
                <Button
                  style={{
                    color: "white",
                    background: "rgba(0, 0, 0, 0.8)",
                    fontSize: "17px",
                    marginTop: "13px",
                    padding: "12px 26px 12px 26px",
                  }}
                  type="submit"
                >
                  REGISTERED
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
