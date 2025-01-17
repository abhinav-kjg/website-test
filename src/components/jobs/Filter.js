"use client";
import {
    Modal,
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    IconButton,
    Collapse,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { baseUrl } from "@/config/BaseUrl";

const Filters = ({ open, setOpen, setFilteredJobs }) => {
    const [openLocation, setOpenLocation] = useState(false);
    const [openWorkMode, setOpenWorkMode] = useState(false);
    const [openRoleCategory, setOpenRoleCategory] = useState(false);
    const [openSalary, setOpenSalary] = useState(false);

    const [locationList, setLocationList] = useState([]);
    const [workModeTypesList, setWorkModeTypesList] = useState([]);
    const [roleCategoryList, setRoleCategoryList] = useState([]);
    const [salaryRangeList, setSalaryRangeList] = useState([]);

    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedWorkModes, setSelectedWorkModes] = useState([]);
    const [selectedRoleCategories, setSelectedRoleCategories] = useState([]);
    const [selectedSalaries, setSelectedSalaries] = useState([]);

    const handleClose = () => setOpen(false);
    const handleClearFilter = () => {
        setSelectedLocations([]);
        setSelectedRoleCategories([]);
        setSelectedWorkModes([]);
        setSelectedSalaries([]);
        setOpenLocation(false);
        setOpenRoleCategory(false);
        setOpenSalary(false);
        setOpenWorkMode(false);
        setFilteredJobs([]);
        handleClose();
    };

    const getFilterOptions = async () => {
        await fetch(`${baseUrl}/api/jobs/filters`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((body) => {
                setLocationList(body.locations);
                setWorkModeTypesList(body.workModes);
                setRoleCategoryList(body.roleCategories);
                setSalaryRangeList(body.salaries);
            })
            .catch((error) => console.error("Error:", error));
    };

    const getFilteredData = async () => {
        setOpen(false);
        const queryParams = [];

        // Add salary filter
        if (selectedSalaries?.length > 0 && selectedSalaries !== undefined) {
            const salaryList = selectedSalaries.split("-"); // Split the range into min and max
            let min = salaryList[0];
            let max = salaryList[1];

            if (!isNaN(min) && !isNaN(max)) {
                queryParams.push(`salarymin=${min}&salarymax=${max}`);
            }
        }

        // Add work modes filter
        if (selectedWorkModes.length > 0 && selectedWorkModes !== undefined) {
            queryParams.push(`schedule=${selectedWorkModes.join(",")}`);
        }

        // Add location filter
        if (selectedLocations.length > 0 && selectedLocations !== undefined) {
            queryParams.push(`location=${selectedLocations.join(",")}`);
        }

        // Add role categories filter
        if (
            selectedRoleCategories.length > 0 &&
            selectedRoleCategories !== undefined
        ) {
            queryParams.push(`jobType=${selectedRoleCategories.join(",")}`);
        }
        const queryString = queryParams.join("&");
        await fetch(`${baseUrl}/api/jobs?${queryString}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((body) => {
                if (body.length > 0) {
                    setFilteredJobs(body);
                } else {
                    alert("No Products found");
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    useEffect(() => {
        getFilterOptions();
    }, []);

    return (
        <div className="w-full p-4 flex flex-col bg-white rounded-lg border shadow">
            <div className="hidden lg:block">
                <div className="flex justify-between items-center w-full mb-4">
                    <Typography className="font-bold text-xl">
                        All Filters
                    </Typography>
                    <Typography
                        onClick={handleClearFilter}
                        className="font-bold text-base text-gray-400 cursor-pointer hover:text-gray-500"
                    >
                        clear
                    </Typography>
                </div>
                {/* Location Section */}
                <div className="mb-6">
                    <div
                        onClick={() =>
                            setOpenLocation((prevState) => !prevState)
                        }
                        className="flex justify-between cursor-pointer"
                    >
                        <h3 className="text-lg">Location</h3>
                        <IconButton sx={{ color: "#1868DB" }}>
                            {openLocation ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </div>
                    <Collapse in={openLocation}>
                        <FormGroup className="flex flex-row lg:flex-col">
                            {locationList
                                .filter((location) => location.label !== null)
                                .map((location) => (
                                    <FormControlLabel
                                        key={location.label}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#1868DB",
                                                    },
                                                }}
                                                checked={selectedLocations?.includes(
                                                    location.label
                                                )}
                                                onChange={(e) => {
                                                    setSelectedLocations(
                                                        (prevMessages) => {
                                                            if (
                                                                e.target.checked
                                                            ) {
                                                                // Add to array if checked
                                                                return [
                                                                    ...prevMessages,
                                                                    location.label,
                                                                ];
                                                            } else {
                                                                // Remove from array if unchecked
                                                                return prevMessages.filter(
                                                                    (item) =>
                                                                        item !==
                                                                        location.label
                                                                );
                                                            }
                                                        }
                                                    );
                                                }}
                                            />
                                        }
                                        label={
                                            <span className="text-gray-500">
                                                {location.label}{" "}
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                >
                                                    ({location.jobs})
                                                </Typography>
                                            </span>
                                        }
                                    />
                                ))}
                        </FormGroup>
                    </Collapse>
                </div>

                {/* Similar sections for Work Mode, Role Category, Salary */}
                {/* Work Mode */}
                <div className="mb-6">
                    <div
                        onClick={() =>
                            setOpenWorkMode((prevState) => !prevState)
                        }
                        className="flex justify-between cursor-pointer"
                    >
                        <h3 className="text-lg">Work Mode</h3>
                        <IconButton sx={{ color: "#1868DB" }}>
                            {openWorkMode ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </div>
                    <Collapse in={openWorkMode}>
                        <FormGroup className="flex flex-row lg:flex-col">
                            {workModeTypesList
                                .filter((mode) => mode.label !== null)
                                .map((mode) => (
                                    <FormControlLabel
                                        key={mode.label}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#1868DB",
                                                    },
                                                }}
                                                checked={selectedWorkModes?.includes(
                                                    mode.label
                                                )}
                                                onChange={(e) =>
                                                    setSelectedWorkModes(
                                                        (prevMessages) => {
                                                            if (
                                                                e.target.checked
                                                            ) {
                                                                // Add to array if checked
                                                                return [
                                                                    ...prevMessages,
                                                                    mode.label,
                                                                ];
                                                            } else {
                                                                // Remove from array if unchecked
                                                                return prevMessages.filter(
                                                                    (item) =>
                                                                        item !==
                                                                        mode.label
                                                                );
                                                            }
                                                        }
                                                    )
                                                }
                                            />
                                        }
                                        label={
                                            <span className="text-gray-500">
                                                {mode.label}{" "}
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                >
                                                    ({mode.jobs})
                                                </Typography>
                                            </span>
                                        }
                                    />
                                ))}
                        </FormGroup>
                    </Collapse>
                </div>

                {/* Role Category */}
                <div className="mb-6">
                    <div
                        onClick={() =>
                            setOpenRoleCategory((prevState) => !prevState)
                        }
                        className="flex justify-between cursor-pointer"
                    >
                        <h3 className="text-lg">Role Category</h3>
                        <IconButton sx={{ color: "#1868DB" }}>
                            {openRoleCategory ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </div>
                    <Collapse in={openRoleCategory}>
                        <FormGroup className="flex flex-row lg:flex-col">
                            {roleCategoryList
                                .filter((role) => role.label !== null)
                                .map((role) => (
                                    <FormControlLabel
                                        key={role.label}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#1868DB",
                                                    },
                                                }}
                                                checked={selectedRoleCategories?.includes(
                                                    role.label
                                                )}
                                                onChange={(e) =>
                                                    setSelectedRoleCategories(
                                                        (prevMessages) => {
                                                            if (
                                                                e.target.checked
                                                            ) {
                                                                // Add to array if checked
                                                                return [
                                                                    ...prevMessages,
                                                                    role.label,
                                                                ];
                                                            } else {
                                                                // Remove from array if unchecked
                                                                return prevMessages.filter(
                                                                    (item) =>
                                                                        item !==
                                                                        role.label
                                                                );
                                                            }
                                                        }
                                                    )
                                                }
                                            />
                                        }
                                        label={
                                            <span className="text-gray-500">
                                                {role.label}{" "}
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                >
                                                    ({role.jobs})
                                                </Typography>
                                            </span>
                                        }
                                    />
                                ))}
                        </FormGroup>
                    </Collapse>
                </div>

                {/* Salary */}
                <div className="mb-6">
                    <div
                        onClick={() => setOpenSalary((prevState) => !prevState)}
                        className="flex justify-between cursor-pointer"
                    >
                        <h3 className="text-lg">Salary</h3>
                        <IconButton sx={{ color: "#1868DB" }}>
                            {openSalary ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </div>
                    <Collapse in={openSalary}>
                        <FormGroup className="flex flex-row lg:flex-col">
                            {salaryRangeList
                                .filter((salary) => salary.label !== null)
                                .map((salary) => (
                                    <FormControlLabel
                                        key={salary.label}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#1868DB",
                                                    },
                                                }}
                                                checked={
                                                    selectedSalaries ===
                                                    salary.label?.replace(
                                                        /,/g,
                                                        ""
                                                    )
                                                } // Only one can be selected
                                                onChange={(e) => {
                                                    const sanitizedLabel =
                                                        salary.label?.replace(
                                                            /,/g,
                                                            ""
                                                        ); // Remove commas from the label
                                                    if (e.target.checked) {
                                                        setSelectedSalaries(
                                                            sanitizedLabel
                                                        ); // Set the selected salary
                                                    } else {
                                                        setSelectedSalaries(""); // Clear the selection if unchecked
                                                    }
                                                }}
                                            />
                                        }
                                        label={
                                            <span className="text-gray-500">
                                                {"₹"}
                                                {salary.label}
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                >
                                                    ({salary.jobs})
                                                </Typography>
                                            </span>
                                        }
                                    />
                                ))}
                        </FormGroup>
                    </Collapse>
                </div>

                {/* Clear All */}
                <Button
                    onClick={getFilteredData}
                    variant="contained"
                    fullWidth
                    className="mt-4"
                >
                    Show Results
                </Button>
            </div>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        maxHeight: "90vh",
                        bgcolor: "background.paper",
                        borderRadius: "8px",
                        boxShadow: 24,
                        p: 3,
                        overflowY: "auto",
                    }}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <Typography variant="h6" fontWeight="bold">
                            All Filters
                        </Typography>
                        <IconButton onClick={handleClearFilter}>
                            <CloseIcon />
                        </IconButton>
                    </div>

                    <hr className="border-[1px] border-gray-200 my-2" />

                    {/* Filter Sections */}
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg">Location</h3>
                        <FormGroup className="flex flex-row lg:flex-col">
                            {locationList
                                .filter((location) => location.label !== null)
                                .map((location) => (
                                    <FormControlLabel
                                        key={location.label}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#1868DB",
                                                    },
                                                }}
                                                checked={selectedLocations?.includes(
                                                    location.label
                                                )}
                                                onChange={(e) => {
                                                    setSelectedLocations(
                                                        (prevMessages) => {
                                                            if (
                                                                e.target.checked
                                                            ) {
                                                                // Add to array if checked
                                                                return [
                                                                    ...prevMessages,
                                                                    location.label,
                                                                ];
                                                            } else {
                                                                // Remove from array if unchecked
                                                                return prevMessages.filter(
                                                                    (item) =>
                                                                        item !==
                                                                        location.label
                                                                );
                                                            }
                                                        }
                                                    );
                                                }}
                                            />
                                        }
                                        label={
                                            <span className="text-gray-500">
                                                {location.label}{" "}
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                >
                                                    ({location.jobs})
                                                </Typography>
                                            </span>
                                        }
                                    />
                                ))}
                        </FormGroup>
                    </div>

                    <hr className="border-[1px] border-gray-200 my-2" />

                    <div className="mb-4">
                        <h3 className="font-semibold text-lg">Work Mode</h3>
                        <FormGroup className="flex flex-row lg:flex-col">
                            {workModeTypesList
                                .filter((mode) => mode.label !== null)
                                .map((mode) => (
                                    <FormControlLabel
                                        key={mode.label}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#1868DB",
                                                    },
                                                }}
                                                checked={selectedWorkModes?.includes(
                                                    mode.label
                                                )}
                                                onChange={(e) =>
                                                    setSelectedWorkModes(
                                                        (prevMessages) => {
                                                            if (
                                                                e.target.checked
                                                            ) {
                                                                // Add to array if checked
                                                                return [
                                                                    ...prevMessages,
                                                                    mode.label,
                                                                ];
                                                            } else {
                                                                // Remove from array if unchecked
                                                                return prevMessages.filter(
                                                                    (item) =>
                                                                        item !==
                                                                        mode.label
                                                                );
                                                            }
                                                        }
                                                    )
                                                }
                                            />
                                        }
                                        label={
                                            <span className="text-gray-500">
                                                {mode.label}{" "}
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                >
                                                    ({mode.jobs})
                                                </Typography>
                                            </span>
                                        }
                                    />
                                ))}
                        </FormGroup>
                    </div>

                    <hr className="border-[1px] border-gray-200 my-2" />

                    <div className="mb-4">
                        <h3 className="font-semibold text-lg">Role Category</h3>
                        <FormGroup className="flex flex-row lg:flex-col">
                            {roleCategoryList
                                .filter((role) => role.label !== null)
                                .map((role) => (
                                    <FormControlLabel
                                        key={role.label}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#1868DB",
                                                    },
                                                }}
                                                checked={selectedRoleCategories?.includes(
                                                    role.label
                                                )}
                                                onChange={(e) =>
                                                    setSelectedRoleCategories(
                                                        (prevMessages) => {
                                                            if (
                                                                e.target.checked
                                                            ) {
                                                                // Add to array if checked
                                                                return [
                                                                    ...prevMessages,
                                                                    role.label,
                                                                ];
                                                            } else {
                                                                // Remove from array if unchecked
                                                                return prevMessages.filter(
                                                                    (item) =>
                                                                        item !==
                                                                        role.label
                                                                );
                                                            }
                                                        }
                                                    )
                                                }
                                            />
                                        }
                                        label={
                                            <span className="text-gray-500">
                                                {role.label}{" "}
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                >
                                                    ({role.jobs})
                                                </Typography>
                                            </span>
                                        }
                                    />
                                ))}
                        </FormGroup>
                    </div>

                    <hr className="border-[1px] border-gray-200 my-2" />

                    <div>
                        <h3 className="font-semibold text-lg">Salary</h3>
                        <FormGroup className="flex flex-row lg:flex-col">
                            {salaryRangeList
                                .filter((salary) => salary.label !== null)
                                .map((salary) => (
                                    <FormControlLabel
                                        key={salary.label}
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#1868DB",
                                                    },
                                                }}
                                                checked={selectedSalaries?.includes(
                                                    salary.label
                                                )}
                                                onChange={(e) =>
                                                    setSelectedSalaries(
                                                        (prevMessages) => {
                                                            if (
                                                                e.target.checked
                                                            ) {
                                                                // Add to array if checked
                                                                return [
                                                                    ...prevMessages,
                                                                    salary.label,
                                                                ];
                                                            } else {
                                                                // Remove from array if unchecked
                                                                return prevMessages.filter(
                                                                    (item) =>
                                                                        item !==
                                                                        salary.label
                                                                );
                                                            }
                                                        }
                                                    )
                                                }
                                            />
                                        }
                                        label={
                                            <span className="text-gray-500">
                                                {salary.label}{" "}
                                                <Typography
                                                    component="span"
                                                    fontWeight="bold"
                                                >
                                                    ({salary.jobs})
                                                </Typography>
                                            </span>
                                        }
                                    />
                                ))}
                        </FormGroup>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#1868DB",
                                "&:hover": {
                                    backgroundColor: "#307EED",
                                },
                            }}
                            fullWidth
                            className="text-sm text-nowrap p-3 mt-2 text-white"
                            onClick={getFilteredData}
                        >
                            Show Results
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Filters;
