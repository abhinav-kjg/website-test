import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FilterModal = ({
  LocationList,
  WorkModeTypesList,
  RoleCategoryList,
  SalaryRangeList,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Button to open modal */}
      <Button
        variant="contained"
        onClick={handleOpen}
        className="lg:hidden"
        sx={{
          backgroundColor: "#1868DB",
          color: "#fff",
          textTransform: "none",
        }}
      >
        Open Filters
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxHeight: "80vh",
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
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>

          <hr className="border-[1px] border-gray-200 my-3" />

          {/* Filter Sections */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Location</h3>
            <FormGroup className="flex flex-row lg:flex-col">
              {LocationList.map((location) => (
                <FormControlLabel
                  key={location.label}
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#1868DB",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-gray-500">
                      {location.label}{" "}
                      <Typography component="span" fontWeight="bold">
                        ({location.jobs})
                      </Typography>
                    </span>
                  }
                />
              ))}
            </FormGroup>
          </div>

          <hr className="border-[1px] border-gray-200 my-4" />

          <div className="mb-6">
            <h3 className="font-semibold text-lg">Work Mode</h3>
            <FormGroup className="flex flex-row lg:flex-col">
              {WorkModeTypesList.map((mode) => (
                <FormControlLabel
                  key={mode.label}
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#1868DB",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-gray-500">
                      {mode.label}{" "}
                      <Typography component="span" fontWeight="bold">
                        ({mode.jobs})
                      </Typography>
                    </span>
                  }
                />
              ))}
            </FormGroup>
          </div>

          <hr className="border-[1px] border-gray-200 my-4" />

          <div className="mb-6">
            <h3 className="font-semibold text-lg">Role Category</h3>
            <FormGroup className="flex flex-row lg:flex-col">
              {RoleCategoryList.map((role) => (
                <FormControlLabel
                  key={role.label}
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#1868DB",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-gray-500">
                      {role.label}{" "}
                      <Typography component="span" fontWeight="bold">
                        ({role.jobs})
                      </Typography>
                    </span>
                  }
                />
              ))}
            </FormGroup>
          </div>

          <hr className="border-[1px] border-gray-200 my-4" />

          <div>
            <h3 className="font-semibold text-lg">Salary</h3>
            <FormGroup className="flex flex-row lg:flex-col">
              {SalaryRangeList.map((salary) => (
                <FormControlLabel
                  key={salary.label}
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#1868DB",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-gray-500">
                      {salary.label}{" "}
                      <Typography component="span" fontWeight="bold">
                        ({salary.jobs})
                      </Typography>
                    </span>
                  }
                />
              ))}
            </FormGroup>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FilterModal;
