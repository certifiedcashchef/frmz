import styles from "../../styles/Forms.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    // Validation Checking
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Username must be 20 characters or less")
        .required("Username is required to continue"),
      password: Yup.string().required("Password is required to continue"),
    }),

    // Submit
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 2));
      props.resetForm();
    },
  });

  return (
    <form className={styles.formHolder} onSubmit={formik.handleSubmit}>
      <h3 className={styles.title}>Login</h3>
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
      <div className={styles.checkBoxForget}>
        <div className={styles.cheackBox}>
          <Checkbox size="small" />
          <h2>Remember Me</h2>
        </div>

        <Link href="/">
          <h2>Reset your password?</h2>
        </Link>
      </div>
      <Button type="submit" variant="outlined">
        Sign In
      </Button>
    </form>
  );
};

export default Login;
