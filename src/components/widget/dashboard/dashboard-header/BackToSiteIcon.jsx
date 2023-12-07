import React from "react";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { Box, Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function BackToSiteIcon() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Box display="flex">
      <Icon sx={{ height: "inherit", mt: 2, pt: "6px" }}>
        <ExitToAppRoundedIcon />
      </Icon>
      <Button
        onClick={backToHome}
        sx={{ my: 2, pl: 0, color: "white", display: "block" }}
      >
        Back
      </Button>
    </Box>
  );
}
