import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, TextField, Container, Box } from "@mui/material";

function AddBook() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string()
    .matches(/^[A-Za-z\s!@#$%^&*:']+$/, " Title can only contain alphabets, spaces, and special characters like !@#$'%^&*:")
    .required("Title is required"),
    author: Yup.string()
    .matches(/^[A-Za-z\s!@#$%^&*:']+$/,"Author name can only contain alphabets, spaces, and special characters like !@#$'%^&*:")
    .required("Author name is required"),
    isbn: Yup.string()
    .matches(/^[A-Za-z0-9]{3}-[A-Za-z0-9]{9}$/, "ISBN must be in the format xxx-xxxxxxxxx and can contain letters or numbers")
    .required("ISBN number should be 13 characters (with a hyphen), example: 123-258369123"),
    publicationDate: Yup.date().required("Publication of book date in  mm/dd/yyyy format")
    .typeError("Publication date must be a valid date"),
    bookDescription: Yup.string().required("Provide a Short description on book "),
    image: Yup.string().url("Must be a valid URL").required("Kindly provide the image address"),
  });

  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "white",
          backgroundSize: "cover",
          padding: 2,
          borderRadius: 1,
          maxWidth: { xs: "100%", sm: "80%", md: "60%" },
          mx: "auto",
        }}
      >
        <h1 className="head">Add Book</h1>
        <Formik
          initialValues={{
            title: "",
            author: "",
            isbn: "",
            publicationDate: "",
            image: "",
            bookDescription: " ",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const bookData = {
              title: values.title,
              author: values.author,
              isbn: values.isbn,
              published_date: values.publicationDate,
              image: values.image,
              book_desc: values.bookDescription,
            };

            axios
              .post(
                "https://66e6c7f517055714e58a83b2.mockapi.io/Bookdetails/bookdetails",
                bookData
              )
              .then(() => navigate("/books"));
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="title"
                as={TextField}
                label="Title"
                value={values.title}
                onChange={handleChange}
                error={!!errors.title}
                helperText={<ErrorMessage name="title" />}
                fullWidth
                margin="normal"
              />
              <Field
                name="author"
                as={TextField}
                label="Author"
                value={values.author}
                onChange={handleChange}
                error={!!errors.author}
                helperText={<ErrorMessage name="author" />}
                fullWidth
                margin="normal"
              />
              <Field
                name="isbn"
                as={TextField}
                label="ISBN"
                value={values.isbn}
                onChange={handleChange}
                error={!!errors.isbn}
                helperText={<ErrorMessage name="isbn" />}
                fullWidth
                margin="normal"
              />
              <Field
                name="publicationDate"
                as={TextField}
                type="date"
                label="Publication Date"
                value={values.publicationDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.publicationDate}
                helperText={<ErrorMessage name="publicationDate" />}
                fullWidth
                margin="normal"
              />
              <Field
                name="image"
                as={TextField}
                label="Image URL"
                value={values.image}
                onChange={handleChange}
                error={!!errors.image}
                helperText={<ErrorMessage name="image" />}
                fullWidth
                margin="normal"
              />
              <Field
                name="bookDescription"
                as={TextField}
                label="Book Description"
                value={values.bookDescription}
                onChange={handleChange}
                error={!!errors.bookDescription}
                helperText={<ErrorMessage name="bookDescription" />}
                fullWidth
                margin="normal"
                multiline
                rows={5}
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Add Book
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

export default AddBook;
