"use client";
import { useEffect, useState } from "react";
import { TextField, Button, Typography, FormControl } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import OpenStreetMapComponent from "./OpenStreetMap";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { baseUrl } from "@/config/BaseUrl";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function NewContactUsForm() {
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

    const [formData, setFormData] = useState({
        companyName: "",
        name: "",
        designation: "",
        phoneNumber: "",
        email: "",
        country: "",
        budget: "",
        preferredDate: null,
        projectSummary: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        designation: "",
        phoneNumber: "",
        email: "",
        country: "",
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

    const handlePhoneChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            phone: value,
        }));

        validateField("phone", value);
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

    const validateCountry = (country) => {
        return country !== "";
    };

    const validateDesignation = (designation) => {
        return designation !== "";
    };

    const validateField = (fieldName, value) => {
        let errorMsg = "";
        switch (fieldName) {
            case "email":
                if (!validateEmail(value)) {
                    errorMsg = "Please enter a valid email address.";
                }
                break;
            case "phoneNumber":
                if (!validatePhone(value)) {
                    errorMsg = "Please enter a valid phone number (10 digits).";
                }
                break;
            case "country":
                if (!validateCountry(value)) {
                    errorMsg = "Please enter a country name.";
                }
                break;
            case "designation":
                if (!validateDesignation(value)) {
                    errorMsg = "Please enter your designation.";
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

    const getFieldError = (field) => ({
        error: !!errors[field],
        helperText: errors[field] || "",
    });

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !errors.name &&
            !errors.email &&
            !errors.phoneNumber &&
            !errors.country &&
            !errors.designation &&
            formData.name !== "" &&
            formData.email !== "" &&
            formData.phoneNumber !== "" &&
            formData.country !== "" &&
            formData.designation !== ""
        ) {
            setLoading(true);

            await fetch(`${baseUrl}/api/projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Pass the FormData object as the request body
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
                        message: "Request submitted successfully!",
                    });
                })
                .catch((error) => {
                    setSubmitStatus({
                        type: "error",
                        message: "Failed to submit request.",
                    });
                    console.error("Error:", error);
                })
                .finally(() => {
                    setLoading(false);
                    setFormData({
                        companyName: "",
                        name: "",
                        designation: "",
                        phoneNumber: "",
                        email: "",
                        country: "",
                        budget: "",
                        preferredDate: null,
                        projectSummary: "",
                    });
                });
        }
    };

    return (
        <div
            id="contactus-home"
            className="flex bg-contact-form-background flex-col lg:flex-row mx-0 md:mx-20 justify-between mt-20"
        >
            {/* Left Section (Form) */}
            <div className="flex flex-col justify-center items-start w-full lg:w-5/12 px-4 md:px-10 lg:px-16 lg:pr-0 mb-10 md:mb-20">
                <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-5 -ml-1">
                    Get in
                    <span className="text-primary-blue">Touch</span>
                </h1>
                <h4 className="text-base mb-4">
                    Curious to Know More? <br />
                    <span>
                        We're always happy to chat about your unique needs
                    </span>
                </h4>
                <form
                    className="flex flex-col gap-2 w-full"
                    onSubmit={handleSubmit}
                >
                    <FormControl
                        fullWidth
                        variant="outlined"
                        required
                        className=""
                    >
                        <TextField
                            id="companyName"
                            label="Company Name"
                            variant="outlined"
                            sx={{
                                borderRadius: "0.25rem",
                                backgroundColor: "white",
                            }}
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <div className="flex flex-row gap-2">
                        <FormControl
                            fullWidth
                            variant="outlined"
                            required
                            className=""
                        >
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                required
                                sx={{
                                    borderRadius: "0.25rem",
                                    backgroundColor: "white",
                                }}
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            variant="outlined"
                            required
                            className=""
                        >
                            <TextField
                                id="designation"
                                label="Designation"
                                variant="outlined"
                                required
                                sx={{
                                    borderRadius: "0.25rem",
                                    backgroundColor: "white",
                                }}
                                value={formData.designation}
                                onChange={handleChange}
                                {...getFieldError("designation")}
                            />
                        </FormControl>
                    </div>
                    <div className="flex flex-row gap-2">
                        <FormControl
                            fullWidth
                            variant="outlined"
                            required
                            className=""
                        >
                            <PhoneInput
                                country={"in"}
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                countryCodeEditable={false}
                                defaultErrorMessage="Invalid phone number"
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                }}
                                containerStyle={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                inputStyle={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm">
                                    {errors.phone}
                                </p>
                            )}
                        </FormControl>
                        <FormControl
                            fullWidth
                            variant="outlined"
                            required
                            className=""
                        >
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                required
                                sx={{
                                    borderRadius: "0.25rem",
                                    backgroundColor: "white",
                                }}
                                value={formData.email}
                                onChange={handleChange}
                                {...getFieldError("email")}
                            />
                        </FormControl>
                    </div>
                    <div className="flex flex-row gap-2">
                        <FormControl
                            fullWidth
                            variant="outlined"
                            required
                            className=""
                        >
                            <TextField
                                id="country"
                                label="Country"
                                variant="outlined"
                                required
                                sx={{
                                    borderRadius: "0.25rem",
                                    backgroundColor: "white",
                                }}
                                value={formData.country}
                                onChange={handleChange}
                                {...getFieldError("country")}
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            variant="outlined"
                            required
                            className=""
                        >
                            <TextField
                                id="budget"
                                label="Estimated Budget"
                                variant="outlined"
                                sx={{
                                    borderRadius: "0.25rem",
                                    backgroundColor: "white",
                                }}
                                value={formData.budget}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </div>
                    <FormControl fullWidth variant="outlined" className="">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            {/* <DatePicker /> */}
                            <DateTimePicker
                                label="Preferred Date and Time to connect"
                                value={formData.preferredDate}
                                onChange={(newValue) =>
                                    setFormData({
                                        ...formData,
                                        preferredDate: newValue,
                                    })
                                }
                            />
                        </LocalizationProvider>
                        {/* to add date picker */}
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="projectSummary"
                            label="Requirements"
                            multiline
                            rows={3}
                            variant="outlined"
                            sx={{
                                borderRadius: "0.25rem",
                                backgroundColor: "white",
                            }}
                            value={formData.projectSummary}
                            onChange={handleChange}
                        />
                    </FormControl>

                    {/* Submit Button */}
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        type="submit"
                        sx={{
                            backgroundColor: "#1868DB",
                            color: "white",
                            fontWeight: "600",
                            paddingY: "0.5rem",
                            marginTop: "0.5rem",
                            "&:hover": {
                                backgroundColor: "#307EED",
                            },
                        }}
                    >
                        {loading ? "Sending..." : "Send"}
                    </Button>
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

            <div className="w-full lg:w-6/12">
                <OpenStreetMapComponent />
            </div>
        </div>
    );
}
