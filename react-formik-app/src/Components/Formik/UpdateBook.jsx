import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, TextField, Container, Box } from "@mui/material";

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://66e6c7f517055714e58a83b2.mockapi.io/Bookdetails/bookdetails/${id}`
      )
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    isbn: Yup.string().required("Required"),
    published_date: Yup.date().required("Required"),
    author: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
    book_desc: Yup.string().required("Required"),
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
        <h1 className="head">Update Book</h1>
        {book && (
          <Formik
            initialValues={{
              title: book.title || "",
              isbn: book.isbn || "",
              published_date: book.published_date?.split("T")[0] || "",
              author: book.author || "",
              image: book.image || "",
              book_desc: book.book_desc || "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              axios
                .put(
                  `https://66e6c7f517055714e58a83b2.mockapi.io/Bookdetails/bookdetails/${id}`,
                  values
                )
                .then(() => navigate("/books"))
                .catch((error) => {
                  console.error("Error updating book:", error);
                });
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
                  name="published_date"
                  as={TextField}
                  type="date"
                  label="Published Date"
                  value={values.published_date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.published_date}
                  helperText={<ErrorMessage name="published_date" />}
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="author"
                  as={TextField}
                  label="Author Name"
                  value={values.author}
                  onChange={handleChange}
                  error={!!errors.author}
                  helperText={<ErrorMessage name="author" />}
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
                  name="book_desc"
                  as={TextField}
                  label="Description"
                  value={values.book_desc}
                  onChange={handleChange}
                  error={!!errors.book_desc}
                  helperText={<ErrorMessage name="book_desc" />}
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
                  Update Book
                </Button>
              </Form>
            )}
          </Formik>
        )}
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

export default UpdateBook;
