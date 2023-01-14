import styles from "../../styles/Forms.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      termsAndConditions: false,
    },

    // Validation Checking
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Username must be 20 characters or less")
        .required("Username is required to continue"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required to continue"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match")
        .required("Password confirmation is required to continue"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required to continue"),
      termsAndConditions: Yup.boolean().oneOf(
        [true],
        "Please accept terms & conditions"
      ),
    }),

    // Submit
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 2));
      props.resetForm();
    },
  });

  return (
    <form className={styles.formHolder} onSubmit={formik.handleSubmit}>
      <h3 className={styles.title}>Register</h3>
      <div>
        <TextField
          fullWidth
          className={styles.textInput}
          size="small"
          type="text"
          name="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          error={
            formik.touched.userName && formik.errors.userName ? true : false
          }
          helperText={formik.errors.userName}
        />
      </div>
      <div>
        <TextField
          fullWidth
          size="small"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          error={
            formik.touched.password && formik.errors.password ? true : false
          }
          helperText={formik.errors.password}
        />
      </div>

      <div>
        <TextField
          fullWidth
          size="small"
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          id="outlined-basic"
          label="Confirm password"
          variant="outlined"
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? true
              : false
          }
          helperText={formik.errors.confirmPassword}
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

      <div className={styles.checkBoxAgree}>
        <div className={styles.cheackBox}>
          <Checkbox
            name="termsAndConditions"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.termsAndConditions}
            size="small"
          />
          <h2>I agree to all terms & conditions</h2>
        </div>
        {formik.touched.termsAndConditions && (
          <p className={styles.cheackBoxError}>
            {formik.errors.termsAndConditions}
          </p>
        )}
      </div>
      <Button type="submit" variant="outlined">
        Sign up
      </Button>
      <Link href="/">
        <h2>Sign in if you already have an account</h2>
      </Link>
    </form>
  );
};

export default Register;
