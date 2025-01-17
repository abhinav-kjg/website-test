"use client";
import { useState } from "react";
import Image from "next/image";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import dynamic from "next/dynamic";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const OpenStreetMap = dynamic(() => import("./Leaflet"), {
  ssr: false,
});

const contactList = [
  {
    value: "LinkedIn",
    label: "LinkedIn",
  },
  {
    value: "Website",
    label: "Website",
  },
  {
    value: "Instagram",
    label: "Instagram",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "X.com",
    label: "X.com",
  },
  {
    value: "Quora",
    label: "Quora",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    howFindUs: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    howFindUs: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, name, value } = e.target;
    const fieldName = id || name;

    setFormData((prevData) => ({
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

  const validateName = (name) => {
    const nameParts = name.trim().split(" ");
    return nameParts.length >= 2; // At least 2 parts
  };

  const validateHowFindUs = (howFindUs) => {
    return howFindUs !== ""; // Ensures a valid selection is made
  };

  const validateField = (fieldName, value) => {
    let errorMsg = "";
    switch (fieldName) {
      case "name":
        if (!validateName(value)) {
          errorMsg = "Please enter both first and last name.";
        }
        break;
      case "email":
        if (!validateEmail(value)) {
          errorMsg = "Please enter a valid email address.";
        }
        break;
      case "phone":
        if (!validatePhone(value)) {
          errorMsg = "Please enter a valid phone number (10 digits).";
        }
        break;
      case "howFindUs":
        if (!validateHowFindUs(value)) {
          errorMsg = "Please select how you found us.";
        }
        break;
      default:
        break;
    }

    // Update the error state dynamically
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMsg,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errors.name &&
      !errors.email &&
      !errors.phone &&
      !errors.howFindUs &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.phone !== "" &&
      formData.howFindUs !== ""
    ) {
      console.log("Form data submitted:", formData);
      // You can replace this with an API call to send data to the backend
    } else {
      console.log("Form data is invalid. Please correct the errors.");
    }
  };

  const isSubmitDisabled =
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.howFindUs ||
    !!errors.name ||
    !!errors.email ||
    !!errors.phone ||
    !!errors.howFindUs;

  return (
    <div
      id="contactus-home"
      className="flex bg-contact-form-background flex-col lg:flex-row justify-around items-center"
    >
      {/* Left Section (Form) */}
      <div className="flex flex-col justify-center items-start w-full lg:w-5/12 px-4 md:px-10 lg:px-16 lg:pr-0 my-12 mb-10 md:mb-20">
        <div className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 -ml-1 tracking-normal">
          Get in
          <span className="text-primary-blue">Touch</span>
        </div>
        <div className="text-base mb-6 leading-normal">
          Curious to Know More?
          <div>We're always happy to chat about your unique needs</div>
        </div>
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <FormControl
            fullWidth
            variant="outlined"
            required
            className="space-y-1"
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              className="bg-white rounded"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </FormControl>
          <FormControl
            fullWidth
            variant="outlined"
            required
            className="space-y-1"
          >
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className="bg-white rounded"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </FormControl>
          <FormControl
            fullWidth
            variant="outlined"
            required
            className="space-y-1"
          >
            <TextField
              id="phone"
              label="Phone Number"
              variant="outlined"
              className="bg-white rounded"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </FormControl>
          <FormControl fullWidth>
            {/* <InputLabel required>Document Type</InputLabel> */}
            <Select
              id="howFindUs"
              name="howFindUs"
              value={formData.howFindUs}
              onChange={handleChange}
              variant="outlined"
              displayEmpty
              error={!!errors.howFindUs}
            >
              <MenuItem value="" disabled hidden>
                How did you find us?
              </MenuItem>
              {contactList.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>


          {/* Submit Button */}
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            type="submit"
            disabled={isSubmitDisabled}
            sx={{
              backgroundColor: "#1868DB",
              color: "white",
              fontWeight: "600",
              paddingY: "0.5rem",
              marginTop: "1rem",
              "&:hover": {
                backgroundColor: "#307EED",
              },
            }}
          >
            Send
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 w-full text-center">
          {/* <div className="flex items-center space-x-2">
                        <PhoneIcon className="text-black" />
                        <p className="text-gray-600 font-semibold flex items-start flex-col">
                            PHONE <br />
                            <span className=" text-[#26AD59] font-normal ">
                                03 5432 1234
                            </span>
                        </p>
                    </div> */}
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <EmailOutlinedIcon className="text-black" />
            <p className="text-gray-600 font-semibold flex items-start flex-col">
              EMAIL <br />
              <span className="font-normal text-[#26AD59] ">
                hello@kayjayglobal.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-5/12">
        <OpenStreetMap />
      </div>
    </div>
  );
}
