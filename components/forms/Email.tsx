import styles from "../../styles/Forms.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Email = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },

    // Validation Checking
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Please enter a valid name")
        .required("Please enter your first name"),
      lastName: Yup.string()
        .max(20, "Please enter a valid name")
        .required("Please enter your last name"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required to continue"),
      message: Yup.string().required("Please write your message"),
    }),

    // Submit
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 2));
      props.resetForm();
    },
  });

  return (
    <form className={styles.formHolder} onSubmit={formik.handleSubmit}>
      <h3 className={styles.title}>Contact</h3>
      <div>
        <TextField
          fullWidth
          className={styles.textInput}
          size="small"
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          id="outlined-basic"
          label="First name"
          variant="outlined"
          error={
            formik.touched.firstName && formik.errors.firstName ? true : false
          }
          helperText={formik.errors.firstName}
        />
      </div>
      <div>
        <TextField
          fullWidth
          size="small"
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          error={
            formik.touched.lastName && formik.errors.lastName ? true : false
          }
          helperText={formik.errors.lastName}
        />
      </div>

      <div>
        <TextField
          fullWidth
          size="small"
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          error={formik.touched.email && formik.errors.email ? true : false}
          helperText={formik.errors.email}
        />
      </div>

      <div>
        <TextField
          fullWidth
          multiline
          rows={5}
          type="text"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          id="standard-basic"
          label="Write your message here"
          variant="standard"
          error={formik.touched.message && formik.errors.message ? true : false}
          helperText={formik.errors.message}
        />
      </div>

      <Button type="submit" variant="outlined">
        Send Message
      </Button>
    </form>
  );
};

export default Email;
