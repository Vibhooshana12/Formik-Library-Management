import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, TextField, Container, Box } from "@mui/material";

function AddAuthor() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
    .matches(/^[A-Za-z\s!@#$%^&*:']+$/, " Author name can only contain alphabets, spaces, and special characters like !@#$'%^&*:")
    .required("Author name is required"),
    bio: Yup.string().required("Provide a Short biography"),
    birthDate: Yup.date().required("Date of birth of author")
    .typeError("Publication date must be a valid date"),
  });

  return (
    <Container>
      <Box
        sx={{
          backgroundSize: "cover",
          padding: 2,
          borderRadius: 1,
          maxWidth: { xs: "100%", sm: "80%", md: "60%" },
          mx: "auto",
        }}
      >
        <h1 className="head">Add Author</h1>
        <Formik
          initialValues={{
            name: "",
            bio: "",
            birthDate: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            axios
              .post(
                "https://66e6c7f517055714e58a83b2.mockapi.io/Bookdetails/author_details",
                values
              )
              .then(() => navigate("/authors"));
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="name"
                as={TextField}
                label="Name"
                value={values.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={<ErrorMessage name="name" />}
                fullWidth
                margin="normal"
              />
              <Field
                name="bio"
                as={TextField}
                label="Bio"
                value={values.bio}
                onChange={handleChange}
                error={!!errors.bio}
                helperText={<ErrorMessage name="bio" />}
                fullWidth
                margin="normal"
                multiline
                rows={5}
              />
              <Field
                name="birthDate"
                as={TextField}
                type="date"
                label="Birth Date"
                value={values.birthDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.birthDate}
                helperText={<ErrorMessage name="birthDate" />}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Add Author
              </Button>
            </Form>
          )}
        </Formik>
        <Button
          color="primary"
          variant="outlined"
          sx={{ mt: 3, fontSize: "1.25rem", fontFamily: "cursive" }}
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </Box>
    </Container>
  );
}

export default AddAuthor;
