"use client";

import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { UploadFile, Visibility, DeleteOutline } from "@mui/icons-material";
import { baseUrl } from "@/config/BaseUrl";

const ApplicationForm = ({ jobId }) => {
  const [applicationForm, setApplicationForm] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    cv: "",
    message: "",
    termAndCondition: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    cv: "",
    termAndCondition: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    let timer;
    if (submitStatus) {
      timer = setTimeout(() => {
        setSubmitStatus(false);
      }, 2000); // 2 seconds
    }

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleFileView = () => {
    if (file) {
      // If the file is an image, open it in a new tab
      if (file.type.startsWith("image")) {
        const fileUrl = URL.createObjectURL(file);
        window.open(fileUrl, "_blank");
      } else {
        // For other file types, provide a download link or an alert
        alert("Cannot preview non-image file types.");
      }
    }
  };

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    const fieldName = id || name;

    setApplicationForm((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));

    validateField(fieldName, value);
  };

  const validateEmail = (email) => {
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegEx.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegEx = /^[0-9]{10}$/;
    return phoneRegEx.test(phone);
  };

  const validateField = (fieldName, value) => {
    let errorMsg = "";
    switch (fieldName) {
      case "firstName":
        if (value.trim() === "") {
          errorMsg = "Please enter your first name.";
        }
        break;

      case "lastName":
        if (value.trim() === "") {
          errorMsg = "Please enter your last name.";
        }
        break;

      case "emailAddress":
        if (!validateEmail(value)) {
          errorMsg = "Please enter a valid email address.";
        }
        break;

      case "mobileNumber":
        if (!validatePhone(value)) {
          errorMsg = "Please enter a valid phone number (10 digits).";
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMsg,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate terms and conditions
    if (!applicationForm.termAndCondition) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        termAndCondition: "You must accept the terms and conditions",
      }));
      return;
    }

    // Create FormData to submit form data with the file
    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("firstName", applicationForm.firstName);
    formData.append("lastName", applicationForm.lastName);
    formData.append("phone", applicationForm.mobileNumber);
    formData.append("email", applicationForm.emailAddress);
    formData.append("message", applicationForm.message);
    formData.append("cv", file);

    setLoading(true);

    await fetch(`${baseUrl}/api/applications`, {
      method: "POST",
      body: formData, // Pass the FormData object as the request body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        setSubmitStatus({
          type: "success",
          message: "Application submitted successfully!",
        });
      })
      .catch((error) => {
        setSubmitStatus({
          type: "error",
          message: "Failed to submit application.",
        });
        console.error("Error:", error);
      })
      .finally(() => setLoading(false));

    setApplicationForm({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      emailAddress: "",
      cv: "",
      message: "",
      termAndCondition: false,
    });
  };

  return (
    <div id="job-application-form" className="py-2 px-2 border">
      <h1 className="text-3xl font-bold text-center mb-6">
        Apply for this role
      </h1>
      <form className="p-3 bg-white space-y-5" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <TextField
              fullWidth
              required
              id="firstName"
              variant="outlined"
              placeholder="First Name"
              value={applicationForm.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <TextField
              fullWidth
              required
              id="lastName"
              variant="outlined"
              placeholder="Last Name"
              value={applicationForm.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <TextField
              fullWidth
              required
              id="mobileNumber"
              variant="outlined"
              placeholder="Mobile Number"
              value={applicationForm.mobileNumber}
              onChange={handleChange}
              error={!!errors.mobileNumber}
              helperText={errors.mobileNumber}
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <TextField
              fullWidth
              required
              id="emailAddress"
              variant="outlined"
              type="email"
              placeholder="Email Address"
              value={applicationForm.emailAddress}
              onChange={handleChange}
              error={!!errors.emailAddress}
              helperText={errors.emailAddress}
            />
          </div>
        </div>

        <div className="flex custom-770:flex-col flex-row gap-4">
          <div className="flex-1 custom-770:w-full w-1/2">
            <label className="block text-gray-700 font-medium mb-2">
              Upload your CV
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="contained"
                startIcon={<UploadFile />}
                component="label"
                sx={{
                  backgroundColor: "#1868DB",
                  "&:hover": { backgroundColor: "#3B82F6" },
                  color: "#fff",
                  fontWeight: "600",
                }}
                className="text-sm text-nowrap"
              >
                Upload File
                <input
                  type="file"
                  hidden
                  accept=".pdf,.doc,.docx"
                  id="cv"
                  onChange={handleFileChange}
                />
              </Button>
              <div className="w-[65%] flex items-center justify-between gap-2 space-x-2 border p-1 rounded">
                <span className="text-gray-700 overflow-hidden px-1">
                  {file?.name}
                </span>
                <div className="flex gap-2">
                  <Visibility
                    className="text-gray-500 cursor-pointer"
                    onClick={handleFileView}
                  />
                  <DeleteOutline
                    className="text-red-500 cursor-pointer"
                    onClick={handleRemoveFile}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <TextField
              fullWidth
              multiline
              id="message"
              rows={3}
              variant="outlined"
              placeholder="Message"
              value={applicationForm.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full">
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                id="termAndCondition"
                checked={applicationForm.termAndCondition} // Bind the checkbox to state
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setApplicationForm((prevData) => ({
                    ...prevData,
                    termAndCondition: isChecked,
                  }));

                  // Optional: Validate and handle error state
                  if (!isChecked) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      termAndCondition:
                        "You must agree to the terms and conditions.",
                    }));
                  } else {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      termAndCondition: undefined,
                    }));
                  }
                }}
              />
            }
            label={
              <span className="text-sm text-gray-700">
                By signing in to your account, you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Notice
                </a>
                .
              </span>
            }
          />
          {errors.termAndCondition && (
            <p className="text-red-500 text-xs">{errors.termAndCondition}</p>
          )}
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            className="bg-blue-600 hover:bg-blue-500 w-fit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Apply Now"}
          </Button>
        </div>

        {submitStatus && (
          <div
            className={`text-center mt-4 ${
              submitStatus.type === "success"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ApplicationForm;
