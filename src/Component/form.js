import * as React from "react";
import "./forms.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function CheckoutForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  

  return (
    <div className="main-content container-fluid ">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
       

        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === 0 && (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}> <strong>Shipping Address</strong></Typography>
            <div>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="First Name"
                  multiline
                  maxRows={4}
                  variant="standard"
                  sx={{ width: "25ch" }} // Adjust the width as needed
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Last Name"
                  multiline
                  maxRows={4}
                  variant="standard"
                  sx={{ width: "25ch" }} // Adjust the width as needed
                />
              </div>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="Address Line 1"
                  multiline
                  variant="standard"
                  sx={{ width: "52ch" }} // Adjust the width as needed
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="fullWidth"
                  label="Address Line 2"
                  multiline
                  variant="standard"
                  sx={{ width: "52ch" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="City"
                  multiline
                  variant="standard"
                  sx={{ width: "25ch" }}
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="State"
                  multiline
                  variant="standard"
                  sx={{ width: "25ch" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="Postal Code"
                  multiline
                  variant="standard"
                  sx={{ width: "25ch" }}
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Country"
                  multiline
                  variant="standard"
                  sx={{ width: "25ch" }}
                />
              </div>
              <div className="form-check form-switch d-flex ">
                <input type="checkbox" className="form-check-input" />
                <p>Use this address for payment</p>
              </div>
            </div>
          </React.Fragment>
        )}

        {/* Add similar sections for payment and review steps */}

        <div>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Place Order" : "Next"}
          </Button>
        </div>
      </Box>
    </div>
  );
}