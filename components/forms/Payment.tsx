import styles from "../../styles/Forms.module.scss";
import React, { ReactNode, useState } from "react";

// Formik + Yup
import { FormikErrors, FormikTouched, FormikValues, useFormik } from "formik";
import * as Yup from "yup";

// Material UI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const Payment = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      nameOnCard: "",
      cardNumber: "",
      ccv: "",
      expiryDate: "",
      termsAndConditions: false,
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
        .required("Please enter your email"),
      phoneNumber: Yup.string()
        .min(11, "Please enter a valid phone number")
        .required("Please enter your phone number"),
      nameOnCard: Yup.string().required("Please enter the name on your card"),
      cardNumber: Yup.string()
        .min(16, "please enter a valid card number")
        .required("Please enter your card number"),
      expiryDate: Yup.date()
        .required("Please enter the expiry date of your card")
        .typeError("Please enter the expiry date of your card"),
      ccv: Yup.string()
        .min(3, "Please enter a valid CCV number")
        .required("Please enter your card CCV number"),
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
      <h3 className={styles.title}>Payment</h3>
      <FormSteps
        submition={formik.handleSubmit}
        touched={formik.touched}
        errors={formik.errors}
        validateField={formik.validateField}
      >
        <div id="personalInfoStepOne" className={styles.formHolder}>
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

          <TextField
            fullWidth
            className={styles.textInput}
            size="small"
            type="text"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            error={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? true
                : false
            }
            helperText={formik.errors.phoneNumber}
          />
        </div>

        <div id="paymentInfoStepTwo" className={styles.formHolder}>
          <TextField
            fullWidth
            className={styles.textInput}
            size="small"
            type="text"
            name="nameOnCard"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nameOnCard}
            id="outlined-basic"
            label="Name on card"
            variant="outlined"
            error={
              formik.touched.nameOnCard && formik.errors.nameOnCard
                ? true
                : false
            }
            helperText={formik.errors.nameOnCard}
          />

          <TextField
            fullWidth
            className={styles.textInput}
            size="small"
            type="text"
            name="cardNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardNumber}
            id="outlined-basic"
            label="Card number"
            variant="outlined"
            error={
              formik.touched.cardNumber && formik.errors.cardNumber
                ? true
                : false
            }
            helperText={formik.errors.cardNumber}
          />

          <TextField
            fullWidth
            size="small"
            type="password"
            name="ccv"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ccv}
            id="outlined-basic"
            label="CCV"
            variant="outlined"
            error={formik.touched.ccv && formik.errors.ccv ? true : false}
            helperText={formik.errors.ccv}
          />

          <TextField
            fullWidth
            className={styles.textInput}
            size="small"
            type="date"
            name="expiryDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expiryDate}
            id="outlined-basic"
            variant="outlined"
            error={
              formik.touched.expiryDate && formik.errors.expiryDate
                ? true
                : false
            }
            helperText={formik.errors.expiryDate}
          />
        </div>

        <div id="confirmationStepThree" className={styles.formHolder}>
          <h3>Be aware, you are about to confirm this payment transaction</h3>

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
        </div>
      </FormSteps>
    </form>
  );
};

// TypeScript
interface IProps {
  children: ReactNode;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
  validateField: (name: string) => Promise<void> | Promise<string | undefined>;
  submition: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const FormSteps = ({
  children,
  errors,
  touched,
  validateField,
  submition,
}: IProps) => {
  const childrenArr = React.Children.toArray(children);
  const [step, setStep] = useState(1);

  // Payment Steps Array
  const steps = ["Personal info", "Payment info", "Confirmation"];

  // Step One Validation
  const isErrorStepOne =
    errors["firstName"] ||
    errors["lastName"] ||
    errors["email"] ||
    errors["phoneNumber"]
      ? true
      : false;
  const isTouchedStepOne =
    touched["firstName"] ||
    touched["lastName"] ||
    touched["email"] ||
    touched["phoneNumber"]
      ? true
      : false;
  const goNextStepOne = () => {
    if (isTouchedStepOne && !isErrorStepOne) {
      setStep(step + 1);
    } else {
      validateField("firstName");
      validateField("lastName");
      validateField("email");
      validateField("phoneNumber");
    }
  };

  // Step Two Validation
  const isErrorStepTwo =
    errors["nameOnCard"] ||
    errors["cardNumber"] ||
    errors["ccv"] ||
    errors["expiryDate"]
      ? true
      : false;
  const isTouchedStepTwo =
    touched["nameOnCard"] ||
    touched["cardNumber"] ||
    touched["ccv"] ||
    touched["expiryDate"]
      ? true
      : false;
  const goNextStepTwo = () => {
    if (isTouchedStepTwo && !isErrorStepTwo) {
      setStep(step + 1);
    } else {
      validateField("nameOnCard");
      validateField("cardNumber");
      validateField("ccv");
      validateField("expiryDate");
    }
  };

  // Step Three Validation
  const isErrorLastStep = errors["termsAndConditions"] ? true : false;
  const isTouchedLastStep = touched["termsAndConditions"] ? true : false;
  const lastStep = () => {
    if (isTouchedLastStep && !isErrorLastStep) {
      submition();
      setStep(step + 1);
    } else {
      validateField("termsAndConditions");
    }
  };

  const goBack = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {childrenArr[step - 1]}

      {step === 1 && (
        <Button onClick={goNextStepOne} variant="outlined">
          Next Step
        </Button>
      )}

      {step === 2 && (
        <Button onClick={goNextStepTwo} variant="outlined">
          Next Step
        </Button>
      )}

      {step > 1 && step < 3 && (
        <Button onClick={goBack} color="secondary" variant="outlined">
          Back
        </Button>
      )}
      {step === 3 && (
        <Button onClick={lastStep} type="submit" variant="outlined">
          Confirm
        </Button>
      )}

      {step > 3 && (
        <Button variant="outlined" color="success">
          Done
        </Button>
      )}
    </>
  );
};

export default Payment;
